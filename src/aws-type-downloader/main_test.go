package main

import (
	"bytes"
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"testing"
	"time"
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
	for _, name := range []string{"old", "new", "max-length"} {
		f := BreakingChanges.Flags().Lookup(name)
		_ = f.Value.Set(f.DefValue)
		f.Changed = false
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
