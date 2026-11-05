package main

import (
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"os"
	"path/filepath"
	"sort"
	"strings"
	"testing"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation/types"
	"github.com/spf13/cobra"
)

func writeRecord(t *testing.T, dir, typeName, schema string) {
	t.Helper()
	if err := os.MkdirAll(dir, 0755); err != nil {
		t.Fatal(err)
	}
	record := `{"arn": "arn", "type": "` + typeName + `", "time": "2024-01-01T00:00:00Z", "schema": ` + schema + `}`
	if err := os.WriteFile(filepath.Join(dir, typeName+".json"), []byte(record), 0644); err != nil {
		t.Fatal(err)
	}
}

func runCommand(t *testing.T, args ...string) (string, error) {
	t.Helper()
	// Cobra keeps flag values between runs, so reset them first.
	for _, cmd := range []*cobra.Command{BreakingChanges, AddedTypes} {
		for _, name := range []string{"old", "new", "max-length"} {
			f := cmd.Flags().Lookup(name)
			_ = f.Value.Set(f.DefValue)
			f.Changed = false
		}
	}
	out := &bytes.Buffer{}
	Root.SetOut(out)
	Root.SetErr(&bytes.Buffer{})
	Root.SetArgs(args)
	err := Root.Execute()
	return out.String(), err
}

func TestBreakingChangesCommand(t *testing.T) {
	dir := t.TempDir()
	oldDir, newDir := filepath.Join(dir, "old"), filepath.Join(dir, "new")
	writeRecord(t, oldDir, "AWS::Test::Removed", `{"properties": {}}`)
	writeRecord(t, oldDir, "AWS::Test::Thing", `{"properties": {"Name": {"type": "string"}}}`)
	writeRecord(t, newDir, "AWS::Test::Thing", `{"properties": {"Name": {"type": "integer"}}}`)

	out, err := runCommand(t, "breaking-changes", "--old", oldDir, "--new", newDir)
	if err != nil {
		t.Fatal(err)
	}
	want := "Found 2 change(s) that can break existing templates.\n" +
		"\n### `AWS::Test::Removed`\n\n" +
		"- The resource type was removed.\n" +
		"\n### `AWS::Test::Thing`\n\n" +
		"- `Name` changed type from `string` to `integer`.\n"
	if out != want {
		t.Errorf("got:\n%s\nwant:\n%s", out, want)
	}

	out, err = runCommand(t, "breaking-changes", "--old", oldDir, "--new", newDir, "--max-length", "160")
	if err != nil {
		t.Fatal(err)
	}
	if len(out) > 160 || !strings.Contains(out, "more change(s) not shown") {
		t.Errorf("got a %d byte report without the truncation line:\n%s", len(out), out)
	}
}

func TestBreakingChangesCommand_NoChanges(t *testing.T) {
	dir := t.TempDir()
	writeRecord(t, dir, "AWS::Test::Thing", `{"properties": {"Name": {"type": "string"}}}`)

	out, err := runCommand(t, "breaking-changes", "--old", dir, "--new", dir)
	if err != nil {
		t.Fatal(err)
	}
	if out != "No changes that can break existing templates were found.\n" {
		t.Errorf("got %q", out)
	}
}

func TestBreakingChangesCommand_Errors(t *testing.T) {
	dir := t.TempDir()
	good := filepath.Join(dir, "good")
	writeRecord(t, good, "AWS::Test::Thing", `{}`)
	bad := filepath.Join(dir, "bad")
	if err := os.MkdirAll(bad, 0755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(bad, "broken.json"), []byte("{"), 0644); err != nil {
		t.Fatal(err)
	}

	tests := []struct {
		name string
		args []string
		want string
	}{
		{name: "missing old", args: []string{"--new", good}, want: `"old" not set`},
		{name: "missing new", args: []string{"--old", good}, want: `"new" not set`},
		{name: "bad old", args: []string{"--old", bad, "--new", good}, want: "could not read the previous types"},
		{name: "bad new", args: []string{"--old", good, "--new", bad}, want: "could not read the new types"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			_, err := runCommand(t, append([]string{"breaking-changes"}, tt.args...)...)
			if err == nil || !strings.Contains(err.Error(), tt.want) {
				t.Errorf("got error %v, want one containing %q", err, tt.want)
			}
		})
	}
}

func TestSameContent(t *testing.T) {
	parse := func(schema string) map[string]interface{} {
		t.Helper()
		result := map[string]interface{}{}
		if err := json.Unmarshal([]byte(schema), &result); err != nil {
			t.Fatal(err)
		}
		return result
	}
	record := func(arn, typeName, schema, timestamp string) TypeRecord {
		t.Helper()
		parsed, err := time.Parse(time.RFC3339, timestamp)
		if err != nil {
			t.Fatal(err)
		}
		return TypeRecord{ARN: arn, Type: typeName, Timestamp: parsed, Schema: parse(schema)}
	}

	schema := `{"properties": {"Name": {"type": "string", "maxLength": 64}}, "required": ["Name"]}`
	stored := record("arn:a", "AWS::Test::Thing", schema, "2026-10-21T00:00:00Z")

	tests := []struct {
		name  string
		other TypeRecord
		want  bool
	}{
		{name: "only the time moved", other: record("arn:a", "AWS::Test::Thing", schema, "2026-10-28T00:00:00Z"), want: true},
		{name: "same schema with keys in another order", other: record("arn:a", "AWS::Test::Thing", `{"required": ["Name"], "properties": {"Name": {"maxLength": 64, "type": "string"}}}`, "2026-10-28T00:00:00Z"), want: true},
		{name: "schema changed", other: record("arn:a", "AWS::Test::Thing", `{"properties": {"Name": {"type": "string", "maxLength": 128}}, "required": ["Name"]}`, "2026-10-28T00:00:00Z")},
		{name: "required list changed", other: record("arn:a", "AWS::Test::Thing", `{"properties": {"Name": {"type": "string", "maxLength": 64}}, "required": ["Name", "Name"]}`, "2026-10-28T00:00:00Z")},
		{name: "arn changed", other: record("arn:b", "AWS::Test::Thing", schema, "2026-10-28T00:00:00Z")},
		{name: "type changed", other: record("arn:a", "AWS::Test::Other", schema, "2026-10-28T00:00:00Z")},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if got := sameContent(stored, tt.other); got != tt.want {
				t.Errorf("got %v, want %v", got, tt.want)
			}
		})
	}
}

// fakeRegistry serves ListTypes and DescribeType from memory.
type fakeRegistry struct {
	summaries   map[types.ProvisioningType][]types.TypeSummary
	schemas     map[string]string
	listErr     error
	describeErr error
	described   map[string]int
}

func (f *fakeRegistry) ListTypes(ctx context.Context, params *cloudformation.ListTypesInput, optFns ...func(*cloudformation.Options)) (*cloudformation.ListTypesOutput, error) {
	if f.listErr != nil {
		return nil, f.listErr
	}
	return &cloudformation.ListTypesOutput{TypeSummaries: f.summaries[params.ProvisioningType]}, nil
}

func (f *fakeRegistry) DescribeType(ctx context.Context, params *cloudformation.DescribeTypeInput, optFns ...func(*cloudformation.Options)) (*cloudformation.DescribeTypeOutput, error) {
	if f.describeErr != nil {
		return nil, f.describeErr
	}
	arn := aws.ToString(params.Arn)
	f.described[arn]++
	return &cloudformation.DescribeTypeOutput{Schema: aws.String(f.schemas[arn])}, nil
}

func summary(typeName string, lastUpdated *time.Time) types.TypeSummary {
	return types.TypeSummary{TypeName: aws.String(typeName), TypeArn: aws.String("arn:" + typeName), LastUpdated: lastUpdated}
}

func schemaWithHandlers(handlers ...string) string {
	parts := []string{}
	for _, h := range handlers {
		parts = append(parts, `"`+h+`": {"permissions": []}`)
	}
	return `{"properties": {"Name": {"type": "string"}}, "handlers": {` + strings.Join(parts, ", ") + `}}`
}

func newRegistry() *fakeRegistry {
	updated := time.Date(2026, 11, 1, 0, 0, 0, 0, time.UTC)
	return &fakeRegistry{
		summaries: map[types.ProvisioningType][]types.TypeSummary{
			types.ProvisioningTypeFullyMutable: {
				summary("AWS::Test::Mutable", &updated),
				summary("AWS::Test::UpToDate", &updated),
			},
			types.ProvisioningTypeImmutable: {
				summary("AWS::EC2::PlacementGroup", &updated),
			},
			types.ProvisioningTypeNonProvisionable: {
				// AWS::EC2::Image has no last updated time, like some legacy types.
				summary("AWS::EC2::Image", nil),
				summary("AWS::DocDB::DBCluster", &updated),
				summary("AWS::AmazonMQ::ConfigurationAssociation", &updated),
				summary("AWS::Test::LostRead", &updated),
			},
		},
		schemas: map[string]string{
			"arn:AWS::Test::Mutable":                      schemaWithHandlers("create", "read", "update", "delete", "list"),
			"arn:AWS::Test::UpToDate":                     schemaWithHandlers("create", "read", "update", "delete"),
			"arn:AWS::EC2::PlacementGroup":                schemaWithHandlers("create", "read", "delete", "list"),
			"arn:AWS::EC2::Image":                         schemaWithHandlers("read", "list"),
			"arn:AWS::DocDB::DBCluster":                   `{"properties": {}}`,
			"arn:AWS::AmazonMQ::ConfigurationAssociation": schemaWithHandlers("create", "update", "delete"),
			"arn:AWS::Test::LostRead":                     `{"properties": {}}`,
		},
		described: map[string]int{},
	}
}

func listRecords(t *testing.T, dir string) map[string]TypeRecord {
	t.Helper()
	entries, err := os.ReadDir(dir)
	if err != nil {
		t.Fatal(err)
	}
	records := map[string]TypeRecord{}
	for _, entry := range entries {
		content, err := os.ReadFile(filepath.Join(dir, entry.Name()))
		if err != nil {
			t.Fatal(err)
		}
		record := TypeRecord{}
		if err := json.Unmarshal(content, &record); err != nil {
			t.Fatal(err)
		}
		records[record.Type] = record
	}
	return records
}

func existingFiles(t *testing.T, dir string) map[string]bool {
	t.Helper()
	entries, err := os.ReadDir(dir)
	if err != nil {
		t.Fatal(err)
	}
	existing := map[string]bool{}
	for _, entry := range entries {
		existing[entry.Name()] = true
	}
	return existing
}

func TestDownload(t *testing.T) {
	dir := t.TempDir()
	// Up to date with AWS, so it is kept without reading the schema again.
	if err := os.WriteFile(filepath.Join(dir, "AWS::Test::UpToDate.json"), []byte(`{"arn": "arn:AWS::Test::UpToDate", "type": "AWS::Test::UpToDate", "time": "2026-11-01T00:00:00Z", "schema": {}}`), 0644); err != nil {
		t.Fatal(err)
	}
	// AWS no longer lists it.
	writeRecord(t, dir, "AWS::Test::Removed", `{}`)
	// Read-only before, but AWS removed its read handler.
	writeRecord(t, dir, "AWS::Test::LostRead", `{"handlers": {"read": {}}}`)

	registry := newRegistry()
	if err := download(context.Background(), registry, dir, existingFiles(t, dir), true); err != nil {
		t.Fatal(err)
	}

	records := listRecords(t, dir)
	got := []string{}
	for name := range records {
		got = append(got, name)
	}
	sort.Strings(got)
	want := []string{"AWS::EC2::Image", "AWS::EC2::PlacementGroup", "AWS::Test::Mutable", "AWS::Test::UpToDate"}
	if strings.Join(got, ",") != strings.Join(want, ",") {
		t.Fatalf("got records %v, want %v", got, want)
	}

	if registry.described["arn:AWS::Test::UpToDate"] != 0 {
		t.Errorf("read the schema of an up-to-date type")
	}
	if !records["AWS::EC2::Image"].Timestamp.IsZero() {
		t.Errorf("got time %v for a type with no last updated time, want the zero time", records["AWS::EC2::Image"].Timestamp)
	}
	if records["AWS::EC2::PlacementGroup"].ARN != "arn:AWS::EC2::PlacementGroup" {
		t.Errorf("got ARN %q", records["AWS::EC2::PlacementGroup"].ARN)
	}

	// A type with no last updated time is read again, but its unchanged
	// record is not rewritten.
	before, err := os.ReadFile(filepath.Join(dir, "AWS::EC2::Image.json"))
	if err != nil {
		t.Fatal(err)
	}
	if err := os.Chmod(filepath.Join(dir, "AWS::EC2::Image.json"), 0444); err != nil {
		t.Fatal(err)
	}
	if err := download(context.Background(), registry, dir, existingFiles(t, dir), true); err != nil {
		t.Fatal(err)
	}
	after, err := os.ReadFile(filepath.Join(dir, "AWS::EC2::Image.json"))
	if err != nil {
		t.Fatal(err)
	}
	if registry.described["arn:AWS::EC2::Image"] != 2 {
		t.Errorf("read the schema of AWS::EC2::Image %d time(s), want 2", registry.described["arn:AWS::EC2::Image"])
	}
	if !bytes.Equal(before, after) {
		t.Errorf("record changed:\n%s\n%s", before, after)
	}
}

func TestDownload_WithoutClean(t *testing.T) {
	dir := t.TempDir()
	writeRecord(t, dir, "AWS::Test::Removed", `{}`)

	if err := download(context.Background(), newRegistry(), dir, existingFiles(t, dir), false); err != nil {
		t.Fatal(err)
	}

	if _, ok := listRecords(t, dir)["AWS::Test::Removed"]; !ok {
		t.Errorf("deleted a record without --clean")
	}
}

func TestDownload_SkippedResource(t *testing.T) {
	dir := t.TempDir()
	writeRecord(t, dir, "AWS::Test::Mutable", `{"kept": true}`)
	skippedResources["AWS::Test::Mutable"] = struct{}{}
	defer delete(skippedResources, "AWS::Test::Mutable")

	registry := newRegistry()
	if err := download(context.Background(), registry, dir, existingFiles(t, dir), true); err != nil {
		t.Fatal(err)
	}

	if registry.described["arn:AWS::Test::Mutable"] != 0 {
		t.Errorf("read the schema of a skipped type")
	}
	if listRecords(t, dir)["AWS::Test::Mutable"].Schema["kept"] != true {
		t.Errorf("did not keep the record of a skipped type")
	}
}

func TestDownload_Errors(t *testing.T) {
	tests := []struct {
		name  string
		setup func(t *testing.T, dir string, registry *fakeRegistry) string
		want  string
	}{
		{
			name: "list fails",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				registry.listErr = errors.New("throttled")
				return dir
			},
			want: "throttled",
		},
		{
			name: "describe fails",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				registry.describeErr = errors.New("access denied")
				return dir
			},
			want: "access denied",
		},
		{
			name: "invalid stored record",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				if err := os.WriteFile(filepath.Join(dir, "AWS::Test::Mutable.json"), []byte("{"), 0644); err != nil {
					t.Fatal(err)
				}
				return dir
			},
			want: "file AWS::Test::Mutable.json has invalid JSON",
		},
		{
			name: "stored record can't be read",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				if err := os.Mkdir(filepath.Join(dir, "AWS::Test::Mutable.json"), 0755); err != nil {
					t.Fatal(err)
				}
				return dir
			},
			want: "is a directory",
		},
		{
			name: "invalid schema",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				registry.schemas["arn:AWS::Test::Mutable"] = "{"
				return dir
			},
			want: "type AWS::Test::Mutable could not be converted to JSON",
		},
		{
			name: "unreadable handlers",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				registry.schemas["arn:AWS::EC2::Image"] = `{"handlers": ["read"]}`
				return dir
			},
			want: "type AWS::EC2::Image has a schema that could not be read",
		},
		{
			name: "write fails",
			setup: func(t *testing.T, dir string, registry *fakeRegistry) string {
				return filepath.Join(dir, "missing")
			},
			want: "no such file or directory",
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			registry := newRegistry()
			dir := tt.setup(t, t.TempDir(), registry)
			err := download(context.Background(), registry, dir, map[string]bool{}, true)
			if err == nil || !strings.Contains(err.Error(), tt.want) {
				t.Errorf("got error %v, want one containing %q", err, tt.want)
			}
		})
	}
}

func TestDownload_CleanFailureDoesNotFail(t *testing.T) {
	dir := t.TempDir()
	// The file is listed as existing but is already gone, so the delete fails.
	// The download still succeeds.
	existing := map[string]bool{"AWS::Test::Gone.json": true}
	if err := download(context.Background(), newRegistry(), dir, existing, true); err != nil {
		t.Fatal(err)
	}
}

func TestAddedTypesCommand(t *testing.T) {
	dir := t.TempDir()
	oldDir, newDir := filepath.Join(dir, "old"), filepath.Join(dir, "new")
	writeRecord(t, oldDir, "AWS::Test::Old", `{"handlers": {"read": {}}}`)
	writeRecord(t, newDir, "AWS::Test::Old", `{"handlers": {"read": {}}}`)
	writeRecord(t, newDir, "AWS::EC2::Image", `{"handlers": {"read": {}, "list": {}}}`)
	writeRecord(t, newDir, "AWS::EC2::PlacementGroup", `{"handlers": {"create": {}, "read": {}, "delete": {}}}`)
	writeRecord(t, newDir, "AWS::Test::Mutable", `{"handlers": {"create": {}, "read": {}, "update": {}, "delete": {}}}`)

	out, err := runCommand(t, "added-types", "--old", oldDir, "--new", newDir)
	if err != nil {
		t.Fatal(err)
	}
	want := "Found 2 new read-only or create-and-delete-only type(s).\n" +
		"\n### Read-only\n\n" +
		"- `AWS::EC2::Image`\n" +
		"\n### Create-and-delete-only\n\n" +
		"- `AWS::EC2::PlacementGroup`\n"
	if out != want {
		t.Errorf("got:\n%s\nwant:\n%s", out, want)
	}

	out, err = runCommand(t, "added-types", "--old", oldDir, "--new", newDir, "--max-length", "120")
	if err != nil {
		t.Fatal(err)
	}
	if want := "Found 2 new read-only or create-and-delete-only type(s). See the full report in the workflow run.\n"; out != want {
		t.Errorf("got %q, want %q", out, want)
	}
}

func TestAddedTypesCommand_Errors(t *testing.T) {
	dir := t.TempDir()
	good := filepath.Join(dir, "good")
	writeRecord(t, good, "AWS::Test::Thing", `{}`)
	bad := filepath.Join(dir, "bad")
	if err := os.MkdirAll(bad, 0755); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(bad, "broken.json"), []byte("{"), 0644); err != nil {
		t.Fatal(err)
	}

	for _, tt := range []struct {
		args []string
		want string
	}{
		{args: []string{"--new", good}, want: `"old" not set`},
		{args: []string{"--old", bad, "--new", good}, want: "could not read the previous types"},
		{args: []string{"--old", good, "--new", bad}, want: "could not read the new types"},
	} {
		_, err := runCommand(t, append([]string{"added-types"}, tt.args...)...)
		if err == nil || !strings.Contains(err.Error(), tt.want) {
			t.Errorf("args %v: got error %v, want one containing %q", tt.args, err, tt.want)
		}
	}
}
