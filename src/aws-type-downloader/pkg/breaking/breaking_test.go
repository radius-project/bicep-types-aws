package breaking

import (
	"encoding/json"
	"os"
	"path/filepath"
	"strings"
	"testing"
)

func parse(t *testing.T, schema string) *Schema {
	t.Helper()
	s := &Schema{}
	if err := json.Unmarshal([]byte(schema), s); err != nil {
		t.Fatalf("invalid test schema: %v", err)
	}
	return s
}

func compareOne(t *testing.T, oldSchema, newSchema string) []Change {
	t.Helper()
	return Compare(
		map[string]*Schema{"AWS::Test::Thing": parse(t, oldSchema)},
		map[string]*Schema{"AWS::Test::Thing": parse(t, newSchema)},
	)
}

func assertChanges(t *testing.T, got []Change, want ...Change) {
	t.Helper()
	for i := range want {
		if want[i].ResourceType == "" {
			want[i].ResourceType = "AWS::Test::Thing"
		}
	}
	if len(got) != len(want) {
		t.Fatalf("got %d change(s), want %d:\ngot:  %+v\nwant: %+v", len(got), len(want), got, want)
	}
	for i := range want {
		if got[i] != want[i] {
			t.Errorf("change %d:\ngot:  %+v\nwant: %+v", i, got[i], want[i])
		}
	}
}

func TestCompare_NoChanges(t *testing.T) {
	schema := `{
		"properties": {
			"Name": {"type": "string"},
			"Tags": {"type": "array", "items": {"$ref": "#/definitions/Tag"}}
		},
		"required": ["Name"],
		"definitions": {
			"Tag": {"type": "object", "properties": {"Key": {"type": "string"}}, "required": ["Key"]}
		}
	}`
	assertChanges(t, compareOne(t, schema, schema))
}

func TestCompare_TypeRemovedAndAdded(t *testing.T) {
	changes := Compare(
		map[string]*Schema{"AWS::Test::Old": {}, "AWS::Test::Kept": {}},
		map[string]*Schema{"AWS::Test::Kept": {}, "AWS::Test::New": {}},
	)
	assertChanges(t, changes, Change{ResourceType: "AWS::Test::Old", Kind: TypeRemoved})
}

func TestCompare_PropertyAddedIsNotBreaking(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Name": {"type": "string"}}}`,
		`{"properties": {"Name": {"type": "string"}, "Size": {"type": "integer"}}}`,
	)
	assertChanges(t, changes)
}

func TestCompare_PropertyRemoved(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Name": {"type": "string"}, "Size": {"type": "integer"}}}`,
		`{"properties": {"Name": {"type": "string"}}}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRemoved, Property: "Size"})
}

func TestCompare_NestedPropertyRemovedThroughRef(t *testing.T) {
	changes := compareOne(t,
		`{
			"properties": {"Config": {"$ref": "#/definitions/Config"}},
			"definitions": {"Config": {"type": "object", "properties": {"A": {"type": "string"}, "B": {"type": "string"}}}}
		}`,
		`{
			"properties": {"Config": {"$ref": "#/definitions/Config"}},
			"definitions": {"Config": {"type": "object", "properties": {"A": {"type": "string"}}}}
		}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRemoved, Property: "Config.B"})
}

func TestCompare_PropertyBecameRequired(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Name": {"type": "string"}, "Size": {"type": "integer"}}, "required": ["Name"]}`,
		`{"properties": {"Name": {"type": "string"}, "Size": {"type": "integer"}}, "required": ["Name", "Size"]}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRequired, Property: "Size"})
}

func TestCompare_NewRequiredProperty(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Name": {"type": "string"}}}`,
		`{"properties": {"Name": {"type": "string"}, "Size": {"type": "integer"}}, "required": ["Size"]}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRequired, Property: "Size"})
}

func TestCompare_PropertyNoLongerRequiredIsNotBreaking(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Name": {"type": "string"}}, "required": ["Name"]}`,
		`{"properties": {"Name": {"type": "string"}}}`,
	)
	assertChanges(t, changes)
}

func TestCompare_ReadOnlyRequiredIsNotBreaking(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Arn": {"type": "string"}}}`,
		`{"properties": {"Arn": {"type": "string"}}, "required": ["Arn"], "readOnlyProperties": ["/properties/Arn"]}`,
	)
	assertChanges(t, changes)
}

func TestCompare_NestedRequiredInArrayItems(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Rules": {"type": "array", "items": {"type": "object", "properties": {"Id": {"type": "string"}}}}}}`,
		`{"properties": {"Rules": {"type": "array", "items": {"type": "object", "properties": {"Id": {"type": "string"}}, "required": ["Id"]}}}}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRequired, Property: "Rules[].Id"})
}

func TestCompare_TypeChanged(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Size": {"type": "string"}}}`,
		`{"properties": {"Size": {"type": "integer"}}}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyType, Property: "Size", OldType: "string", NewType: "integer"})
}

func TestCompare_TypeWidenedIsNotBreaking(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Value": {"type": "string"}}}`,
		`{"properties": {"Value": {"type": ["string", "object"]}}}`,
	)
	assertChanges(t, changes)
}

func TestCompare_TypeNarrowed(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Value": {"type": ["string", "object"]}}}`,
		`{"properties": {"Value": {"type": "string"}}}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyType, Property: "Value", OldType: "object | string", NewType: "string"})
}

func TestCompare_NumberAndIntegerAreTheSame(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Size": {"type": "number"}}}`,
		`{"properties": {"Size": {"type": "integer"}}}`,
	)
	assertChanges(t, changes)
}

func TestCompare_MissingTypeIsObject(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Config": {"properties": {"A": {"type": "string"}}}}}`,
		`{"properties": {"Config": {"type": "object", "properties": {"A": {"type": "string"}}}}}`,
	)
	assertChanges(t, changes)
}

func TestCompare_TypeChangedInMapValues(t *testing.T) {
	changes := compareOne(t,
		`{"properties": {"Labels": {"type": "object", "additionalProperties": {"type": "string"}}}}`,
		`{"properties": {"Labels": {"type": "object", "additionalProperties": {"type": "integer"}}}}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyType, Property: "Labels.*", OldType: "string", NewType: "integer"})
}

func TestCompare_OneOfRequired(t *testing.T) {
	// Like the type generator, only properties required by every oneOf branch
	// are required.
	changes := compareOne(t,
		`{
			"properties": {"A": {"type": "string"}, "B": {"type": "string"}, "C": {"type": "string"}},
			"oneOf": [{"required": ["A", "B"]}, {"required": ["A", "C"]}]
		}`,
		`{
			"properties": {"A": {"type": "string"}, "B": {"type": "string"}, "C": {"type": "string"}},
			"oneOf": [{"required": ["A", "B"]}, {"required": ["B", "C"]}]
		}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRequired, Property: "B"})
}

func TestCompare_OneOfPropertiesAreMerged(t *testing.T) {
	changes := compareOne(t,
		`{
			"properties": {"Config": {"$ref": "#/definitions/Config"}},
			"definitions": {"Config": {"oneOf": [{"properties": {"A": {"type": "string"}}}, {"properties": {"B": {"type": "string"}}}]}}
		}`,
		`{
			"properties": {"Config": {"$ref": "#/definitions/Config"}},
			"definitions": {"Config": {"oneOf": [{"properties": {"A": {"type": "string"}}}]}}
		}`,
	)
	assertChanges(t, changes, Change{Kind: PropertyRemoved, Property: "Config.B"})
}

func TestCompare_RecursiveDefinitionStops(t *testing.T) {
	schema := `{
		"properties": {"Root": {"$ref": "#/definitions/Node"}},
		"definitions": {"Node": {"type": "object", "properties": {"Name": {"type": "string"}, "Children": {"type": "array", "items": {"$ref": "#/definitions/Node"}}}}}
	}`
	changed := `{
		"properties": {"Root": {"$ref": "#/definitions/Node"}},
		"definitions": {"Node": {"type": "object", "properties": {"Children": {"type": "array", "items": {"$ref": "#/definitions/Node"}}}}}
	}`
	assertChanges(t, compareOne(t, schema, schema))
	assertChanges(t, compareOne(t, schema, changed), Change{Kind: PropertyRemoved, Property: "Root.Name"})
}

func TestCompare_SortedOutput(t *testing.T) {
	changes := Compare(
		map[string]*Schema{
			"AWS::B::Thing": parse(t, `{"properties": {"Z": {"type": "string"}, "A": {"type": "string"}}}`),
			"AWS::A::Thing": {},
		},
		map[string]*Schema{
			"AWS::B::Thing": parse(t, `{"properties": {}}`),
		},
	)
	assertChanges(t, changes,
		Change{ResourceType: "AWS::A::Thing", Kind: TypeRemoved},
		Change{ResourceType: "AWS::B::Thing", Kind: PropertyRemoved, Property: "A"},
		Change{ResourceType: "AWS::B::Thing", Kind: PropertyRemoved, Property: "Z"},
	)
}

func TestLoadDir(t *testing.T) {
	dir := t.TempDir()
	record := `{"arn": "arn", "type": "AWS::Test::Thing", "time": "2024-01-01T00:00:00Z", "schema": {"properties": {"Name": {"type": "string"}}}}`
	if err := os.WriteFile(filepath.Join(dir, "AWS::Test::Thing.json"), []byte(record), 0644); err != nil {
		t.Fatal(err)
	}
	if err := os.WriteFile(filepath.Join(dir, "README.md"), []byte("ignored"), 0644); err != nil {
		t.Fatal(err)
	}

	schemas, err := LoadDir(dir)
	if err != nil {
		t.Fatal(err)
	}
	if len(schemas) != 1 || schemas["AWS::Test::Thing"] == nil {
		t.Fatalf("got %v, want one schema for AWS::Test::Thing", schemas)
	}
	if schemas["AWS::Test::Thing"].Properties["Name"] == nil {
		t.Errorf("schema properties were not loaded")
	}
}

func TestLoadDir_MissingDirectoryIsEmpty(t *testing.T) {
	schemas, err := LoadDir(filepath.Join(t.TempDir(), "missing"))
	if err != nil {
		t.Fatal(err)
	}
	if len(schemas) != 0 {
		t.Errorf("got %d schemas, want 0", len(schemas))
	}
}

func TestLoadDir_InvalidJSON(t *testing.T) {
	dir := t.TempDir()
	if err := os.WriteFile(filepath.Join(dir, "bad.json"), []byte("{"), 0644); err != nil {
		t.Fatal(err)
	}

	_, err := LoadDir(dir)
	if err == nil || !strings.Contains(err.Error(), "bad.json") {
		t.Errorf("got error %v, want an error naming bad.json", err)
	}
}

func TestLoadDir_MissingSchema(t *testing.T) {
	dir := t.TempDir()
	if err := os.WriteFile(filepath.Join(dir, "empty.json"), []byte(`{"type": "AWS::Test::Thing"}`), 0644); err != nil {
		t.Fatal(err)
	}

	_, err := LoadDir(dir)
	if err == nil || !strings.Contains(err.Error(), "empty.json") {
		t.Errorf("got error %v, want an error naming empty.json", err)
	}
}
