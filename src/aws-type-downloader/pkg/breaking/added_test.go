package breaking

import (
	"fmt"
	"strings"
	"testing"
)

func TestSchemaHandlerRules(t *testing.T) {
	tests := []struct {
		handlers            string
		readOnly            bool
		createAndDeleteOnly bool
	}{
		{handlers: `{"create": {}, "read": {}, "update": {}, "delete": {}, "list": {}}`},
		{handlers: `{"create": {}, "read": {}, "delete": {}, "list": {}}`, createAndDeleteOnly: true},
		{handlers: `{"read": {}, "list": {}}`, readOnly: true},
		{handlers: `{"read": {}}`, readOnly: true},
		{handlers: `{"create": {}, "update": {}, "delete": {}}`},
		{handlers: `{"list": {}}`},
		{handlers: `{}`},
	}

	for _, tt := range tests {
		t.Run(tt.handlers, func(t *testing.T) {
			s := parse(t, `{"handlers": `+tt.handlers+`}`)
			if got := s.ReadOnly(); got != tt.readOnly {
				t.Errorf("ReadOnly() = %v, want %v", got, tt.readOnly)
			}
			if got := s.CreateAndDeleteOnly(); got != tt.createAndDeleteOnly {
				t.Errorf("CreateAndDeleteOnly() = %v, want %v", got, tt.createAndDeleteOnly)
			}
		})
	}

	if s := parse(t, `{}`); s.ReadOnly() || s.CreateAndDeleteOnly() {
		t.Errorf("a schema with no handlers is read-only or create-and-delete-only")
	}
}

func TestAddedTypes(t *testing.T) {
	readOnly := `{"handlers": {"read": {}, "list": {}}}`
	createAndDelete := `{"handlers": {"create": {}, "read": {}, "delete": {}}}`
	mutable := `{"handlers": {"create": {}, "read": {}, "update": {}, "delete": {}}}`

	oldSchemas := map[string]*Schema{
		"AWS::Test::OldReadOnly": parse(t, readOnly),
		"AWS::Test::OldMutable":  parse(t, mutable),
	}
	newSchemas := map[string]*Schema{
		"AWS::Test::OldReadOnly":    parse(t, readOnly),
		"AWS::Test::OldMutable":     parse(t, createAndDelete),
		"AWS::Test::NewMutable":     parse(t, mutable),
		"AWS::Test::NewNoHandlers":  parse(t, `{}`),
		"AWS::B::Image":             parse(t, readOnly),
		"AWS::A::Image":             parse(t, readOnly),
		"AWS::B::PlacementGroup":    parse(t, createAndDelete),
		"AWS::A::CreateDeleteThing": parse(t, createAndDelete),
	}

	got := AddedTypes(oldSchemas, newSchemas)
	want := []Added{
		{ResourceType: "AWS::A::Image", ReadOnly: true},
		{ResourceType: "AWS::B::Image", ReadOnly: true},
		{ResourceType: "AWS::A::CreateDeleteThing"},
		{ResourceType: "AWS::B::PlacementGroup"},
	}
	if fmt.Sprint(got) != fmt.Sprint(want) {
		t.Errorf("got %+v, want %+v", got, want)
	}

	if got := AddedTypes(newSchemas, newSchemas); len(got) != 0 {
		t.Errorf("got %+v for the same types, want none", got)
	}
}

func TestAddedReport(t *testing.T) {
	if got, want := AddedReport(nil, 0), "No new read-only or create-and-delete-only types were found.\n"; got != want {
		t.Errorf("got %q, want %q", got, want)
	}

	got := AddedReport([]Added{{ResourceType: "AWS::EC2::PlacementGroup"}}, 0)
	want := "Found 1 new read-only or create-and-delete-only type(s).\n" +
		"\n### Create-and-delete-only\n\n" +
		"- `AWS::EC2::PlacementGroup`\n"
	if got != want {
		t.Errorf("got:\n%s\nwant:\n%s", got, want)
	}
}

func TestAddedReport_TruncatesToMaxLength(t *testing.T) {
	added := []Added{}
	for i := 0; i < 400; i++ {
		added = append(added, Added{ResourceType: fmt.Sprintf("AWS::Service%03d::Thing", i), ReadOnly: i < 250})
	}

	full := AddedReport(added, 0)
	if strings.Count(full, "### Read-only") != 1 || strings.Count(full, "### Create-and-delete-only") != 1 {
		t.Fatalf("want one heading per group:\n%s", full)
	}

	for _, maxLength := range []int{500, 9000, len(full) - 1} {
		got := AddedReport(added, maxLength)
		if len(got) > maxLength {
			t.Errorf("maxLength %d: report is %d bytes", maxLength, len(got))
		}

		shown := strings.Count(got, "\n- ")
		footer := fmt.Sprintf("\n%d more type(s) not shown. See the full report in the workflow run.\n", len(added)-shown)
		if !strings.HasSuffix(got, footer) {
			t.Errorf("maxLength %d: report does not end with %q", maxLength, footer)
		}
		if !strings.HasPrefix(full, strings.TrimSuffix(got, footer)) {
			t.Errorf("maxLength %d: truncated report is not a prefix of the full report", maxLength)
		}
		if strings.HasSuffix(strings.TrimSuffix(got, footer), "\n\n") {
			t.Errorf("maxLength %d: report ends with a heading that has no types", maxLength)
		}
	}
}
