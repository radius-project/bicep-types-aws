// Package breaking compares two sets of downloaded AWS resource schemas and
// lists the changes that can break existing Bicep templates.
package breaking

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"sort"
	"strings"
)

// Kind is the kind of breaking change.
type Kind string

const (
	TypeRemoved      Kind = "type removed"
	PropertyRemoved  Kind = "property removed"
	PropertyRequired Kind = "property now required"
	PropertyType     Kind = "property type changed"
)

// Change is one change that can break existing templates.
type Change struct {
	// ResourceType is the AWS resource type, for example AWS::S3::Bucket.
	ResourceType string
	Kind         Kind
	// Property is the dotted path of the property. It is empty for TypeRemoved.
	// Array items are written as Name[] and map values as Name.*.
	Property string
	OldType  string
	NewType  string
}

// Schema is the subset of a CloudFormation resource provider schema used by
// the comparison.
type Schema struct {
	Type                 any                `json:"type,omitempty"`
	Ref                  string             `json:"$ref,omitempty"`
	Properties           map[string]*Schema `json:"properties,omitempty"`
	Required             []string           `json:"required,omitempty"`
	Items                *Schema            `json:"items,omitempty"`
	AdditionalProperties any                `json:"additionalProperties,omitempty"`
	OneOf                []*Schema          `json:"oneOf,omitempty"`
	Definitions          map[string]*Schema `json:"definitions,omitempty"`
	ReadOnlyProperties   []string           `json:"readOnlyProperties,omitempty"`
}

type record struct {
	Type   string  `json:"type"`
	Schema *Schema `json:"schema"`
}

// LoadDir reads every *.json type record in dir and returns the schemas keyed
// by resource type. A missing directory is treated as empty.
func LoadDir(dir string) (map[string]*Schema, error) {
	entries, err := os.ReadDir(dir)
	if os.IsNotExist(err) {
		return map[string]*Schema{}, nil
	} else if err != nil {
		return nil, err
	}

	schemas := map[string]*Schema{}
	for _, entry := range entries {
		if entry.IsDir() || !strings.HasSuffix(entry.Name(), ".json") {
			continue
		}

		b, err := os.ReadFile(filepath.Join(dir, entry.Name()))
		if err != nil {
			return nil, err
		}

		r := record{}
		if err := json.Unmarshal(b, &r); err != nil {
			return nil, fmt.Errorf("file %s has invalid JSON: %w", entry.Name(), err)
		}
		if r.Type == "" || r.Schema == nil {
			return nil, fmt.Errorf("file %s is missing the type or schema", entry.Name())
		}

		schemas[r.Type] = r.Schema
	}

	return schemas, nil
}

// Compare returns the changes between oldSchemas and newSchemas that can break
// existing templates, sorted by resource type, kind, and property.
func Compare(oldSchemas, newSchemas map[string]*Schema) []Change {
	changes := []Change{}
	for typeName, oldSchema := range oldSchemas {
		newSchema, ok := newSchemas[typeName]
		if !ok {
			changes = append(changes, Change{ResourceType: typeName, Kind: TypeRemoved})
			continue
		}

		c := comparer{
			resourceType: typeName,
			oldRoot:      oldSchema,
			newRoot:      newSchema,
			readOnly:     toSet(newSchema.ReadOnlyProperties),
		}
		c.compareObject(oldSchema, newSchema, "", "/properties", map[string]bool{}, map[string]bool{})
		changes = append(changes, c.changes...)
	}

	sort.Slice(changes, func(i, j int) bool {
		a, b := changes[i], changes[j]
		if a.ResourceType != b.ResourceType {
			return a.ResourceType < b.ResourceType
		}
		if a.Kind != b.Kind {
			return a.Kind < b.Kind
		}
		return a.Property < b.Property
	})

	return changes
}

type comparer struct {
	resourceType string
	oldRoot      *Schema
	newRoot      *Schema
	readOnly     map[string]bool
	changes      []Change
}

func (c *comparer) add(change Change) {
	change.ResourceType = c.resourceType
	c.changes = append(c.changes, change)
}

// compareObject compares the properties of two object schemas. path is the
// dotted display path of the object, and pointer is its path in the form used
// by readOnlyProperties, for example /properties/Foo/*/Bar. oldSeen and newSeen
// hold the definitions already expanded on this path, so recursive definitions
// stop instead of looping forever.
func (c *comparer) compareObject(oldSchema, newSchema *Schema, path, pointer string, oldSeen, newSeen map[string]bool) {
	oldProps := properties(oldSchema)
	newProps := properties(newSchema)
	oldRequired := required(oldSchema)
	newRequired := required(newSchema)

	for _, name := range sortedKeys(newProps) {
		if newRequired[name] && !oldRequired[name] && !c.readOnly[pointer+"/"+name] {
			c.add(Change{Kind: PropertyRequired, Property: join(path, name)})
		}
	}

	for _, name := range sortedKeys(oldProps) {
		newProp, ok := newProps[name]
		if !ok {
			c.add(Change{Kind: PropertyRemoved, Property: join(path, name)})
			continue
		}

		c.compareSchema(oldProps[name], newProp, join(path, name), pointer+"/"+name, oldSeen, newSeen)
	}
}

func (c *comparer) compareSchema(oldSchema, newSchema *Schema, path, pointer string, oldSeen, newSeen map[string]bool) {
	oldSchema, oldSeen, oldRecursive := resolve(c.oldRoot, oldSchema, oldSeen)
	newSchema, newSeen, newRecursive := resolve(c.newRoot, newSchema, newSeen)

	oldTypes := typeSet(oldSchema)
	newTypes := typeSet(newSchema)
	if !isSubset(oldTypes, newTypes) {
		c.add(Change{Kind: PropertyType, Property: path, OldType: formatTypes(oldTypes), NewType: formatTypes(newTypes)})
		return
	}

	if oldRecursive || newRecursive {
		return
	}

	if oldTypes["object"] {
		c.compareObject(oldSchema, newSchema, path, pointer, oldSeen, newSeen)

		oldAdditional, newAdditional := additionalSchema(oldSchema), additionalSchema(newSchema)
		if oldAdditional != nil && newAdditional != nil {
			c.compareSchema(oldAdditional, newAdditional, path+".*", pointer+"/*", oldSeen, newSeen)
		}
	}

	if oldTypes["array"] && oldSchema.Items != nil && newSchema.Items != nil {
		c.compareSchema(oldSchema.Items, newSchema.Items, path+"[]", pointer+"/*", oldSeen, newSeen)
	}
}

// resolve follows a $ref the same way the type generator does: the referenced
// definition is merged with the fields set next to the $ref. It also reports
// whether the definition was already expanded on the current path.
func resolve(root, schema *Schema, seen map[string]bool) (*Schema, map[string]bool, bool) {
	if schema == nil {
		return &Schema{}, seen, false
	}
	if schema.Ref == "" {
		return schema, seen, false
	}

	parts := strings.FieldsFunc(strings.TrimPrefix(schema.Ref, "#"), func(r rune) bool { return r == '/' })
	if len(parts) < 2 {
		return schema, seen, false
	}
	name := parts[1]

	definition := root.Definitions[name]
	if definition == nil {
		definition = root.Properties[name]
	}
	if definition == nil {
		return schema, seen, false
	}

	merged := *definition
	merged.Ref = ""
	if schema.Type != nil {
		merged.Type = schema.Type
	}
	if schema.Properties != nil {
		merged.Properties = schema.Properties
	}
	if schema.Required != nil {
		merged.Required = schema.Required
	}
	if schema.Items != nil {
		merged.Items = schema.Items
	}
	if schema.AdditionalProperties != nil {
		merged.AdditionalProperties = schema.AdditionalProperties
	}
	if schema.OneOf != nil {
		merged.OneOf = schema.OneOf
	}

	if seen[name] {
		return &merged, seen, true
	}

	next := make(map[string]bool, len(seen)+1)
	for k := range seen {
		next[k] = true
	}
	next[name] = true

	return &merged, next, false
}

// properties returns the properties of an object schema, including properties
// declared in oneOf branches, which the type generator merges into the object.
func properties(schema *Schema) map[string]*Schema {
	result := map[string]*Schema{}
	for _, branch := range schema.OneOf {
		if branch == nil {
			continue
		}
		for name, prop := range branch.Properties {
			result[name] = prop
		}
	}
	for name, prop := range schema.Properties {
		result[name] = prop
	}
	return result
}

// required returns the required properties of an object schema. Like the type
// generator, a property named in a oneOf branch is only required when every
// branch that lists required properties requires it.
func required(schema *Schema) map[string]bool {
	result := toSet(schema.Required)

	var intersection map[string]bool
	inBranch := map[string]bool{}
	for _, branch := range schema.OneOf {
		if branch == nil || branch.Required == nil {
			continue
		}

		current := toSet(branch.Required)
		for name := range current {
			inBranch[name] = true
		}

		if intersection == nil {
			intersection = current
			continue
		}
		for name := range intersection {
			if !current[name] {
				delete(intersection, name)
			}
		}
	}

	for name := range inBranch {
		if intersection[name] {
			result[name] = true
		} else {
			delete(result, name)
		}
	}

	return result
}

// typeSet returns the Bicep-relevant types of a schema. A schema without a type
// is an object, and number and integer are the same Bicep type.
func typeSet(schema *Schema) map[string]bool {
	result := map[string]bool{}
	switch t := schema.Type.(type) {
	case string:
		result[normalizeType(t)] = true
	case []any:
		for _, item := range t {
			if s, ok := item.(string); ok {
				result[normalizeType(s)] = true
			}
		}
	}

	if len(result) == 0 {
		result["object"] = true
	}
	return result
}

func normalizeType(t string) string {
	if t == "number" {
		return "integer"
	}
	return t
}

// additionalSchema returns the schema of map values when additionalProperties
// is a schema, and nil when it is a boolean or not set.
func additionalSchema(schema *Schema) *Schema {
	m, ok := schema.AdditionalProperties.(map[string]any)
	if !ok {
		return nil
	}

	b, err := json.Marshal(m)
	if err != nil {
		return nil
	}

	result := &Schema{}
	if err := json.Unmarshal(b, result); err != nil {
		return nil
	}
	return result
}

func isSubset(a, b map[string]bool) bool {
	for k := range a {
		if !b[k] {
			return false
		}
	}
	return true
}

func formatTypes(types map[string]bool) string {
	return strings.Join(sortedKeys(types), " | ")
}

func toSet(values []string) map[string]bool {
	result := map[string]bool{}
	for _, v := range values {
		result[v] = true
	}
	return result
}

func sortedKeys[V any](m map[string]V) []string {
	keys := make([]string, 0, len(m))
	for k := range m {
		keys = append(keys, k)
	}
	sort.Strings(keys)
	return keys
}

func join(path, name string) string {
	if path == "" {
		return name
	}
	return path + "." + name
}
