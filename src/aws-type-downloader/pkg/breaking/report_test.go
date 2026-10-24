package breaking

import (
	"fmt"
	"strings"
	"testing"
)

func TestReport_NoChanges(t *testing.T) {
	got := Report(nil, 0)
	want := "No changes that can break existing templates were found.\n"
	if got != want {
		t.Errorf("got %q, want %q", got, want)
	}
}

func TestReport_GroupsByResourceType(t *testing.T) {
	changes := []Change{
		{ResourceType: "AWS::A::Thing", Kind: TypeRemoved},
		{ResourceType: "AWS::B::Thing", Kind: PropertyRequired, Property: "Name"},
		{ResourceType: "AWS::B::Thing", Kind: PropertyRemoved, Property: "Config.Size"},
		{ResourceType: "AWS::B::Thing", Kind: PropertyType, Property: "Port", OldType: "string", NewType: "integer"},
	}

	got := Report(changes, 0)
	want := "Found 4 change(s) that can break existing templates.\n" +
		"\n### `AWS::A::Thing`\n\n" +
		"- The resource type was removed.\n" +
		"\n### `AWS::B::Thing`\n\n" +
		"- `Name` is now required.\n" +
		"- `Config.Size` was removed.\n" +
		"- `Port` changed type from `string` to `integer`.\n"
	if got != want {
		t.Errorf("got:\n%s\nwant:\n%s", got, want)
	}
}

func TestReport_FitsWithoutTruncation(t *testing.T) {
	changes := []Change{{ResourceType: "AWS::A::Thing", Kind: TypeRemoved}}
	full := Report(changes, 0)
	if got := Report(changes, len(full)); got != full {
		t.Errorf("got:\n%s\nwant the full report:\n%s", got, full)
	}
}

func TestReport_TruncatesToMaxLength(t *testing.T) {
	changes := []Change{}
	for i := 0; i < 500; i++ {
		changes = append(changes, Change{
			ResourceType: fmt.Sprintf("AWS::Service%03d::Thing", i/10),
			Kind:         PropertyRemoved,
			Property:     fmt.Sprintf("Property%03d", i),
		})
	}

	full := Report(changes, 0)
	for _, maxLength := range []int{500, 1000, 4096, len(full) - 1} {
		got := Report(changes, maxLength)
		if len(got) > maxLength {
			t.Errorf("maxLength %d: report is %d bytes", maxLength, len(got))
		}

		shown := strings.Count(got, "\n- ")
		footer := fmt.Sprintf("\n%d more change(s) not shown. See the full report in the workflow run.\n", len(changes)-shown)
		if !strings.HasSuffix(got, footer) {
			t.Errorf("maxLength %d: report does not end with %q:\n%s", maxLength, footer, got)
		}
		if !strings.HasPrefix(full, strings.TrimSuffix(got, footer)) {
			t.Errorf("maxLength %d: truncated report is not a prefix of the full report", maxLength)
		}
		if strings.HasSuffix(strings.TrimSuffix(got, footer), "\n\n") {
			t.Errorf("maxLength %d: report ends with a heading that has no changes:\n%s", maxLength, got)
		}
	}
}
