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
	Type                 any                  `json:"type"`
	Ref                  string               `json:"$ref"`
	Properties           map[string]*Schema   `json:"properties"`
	Required             []string             `json:"required"`
	Items                *Schema              `json:"items"`
	AdditionalProperties AdditionalProperties `json:"additionalProperties"`
	OneOf                []*Schema            `json:"oneOf"`
	Definitions          map[string]*Schema   `json:"definitions"`
	ReadOnlyProperties   []string             `json:"readOnlyProperties"`

	// requiredBranches holds the required lists of the oneOf branches that the
	// type generator uses to decide which properties are required.
	requiredBranches [][]string
}

// AdditionalProperties is the additionalProperties keyword of a schema. The
// type generator treats true as any value, a schema as typed values, and false
// or a missing keyword as no additional properties.
type AdditionalProperties struct {
	Any    bool
	Schema *Schema
	set    bool
}

func (a *AdditionalProperties) UnmarshalJSON(b []byte) error {
	var allowed bool
	if err := json.Unmarshal(b, &allowed); err == nil {
		*a = AdditionalProperties{Any: allowed, set: true}
		return nil
	}

	schema := &Schema{}
	if err := json.Unmarshal(b, schema); err != nil {
		return err
	}
	*a = AdditionalProperties{Schema: schema, set: true}
	return nil
}

func (a AdditionalProperties) allowed() bool {
	return a.Any || a.Schema != nil
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
// existing templates, sorted by resource type, kind, and property. It follows
// the rules the type generator uses to build Bicep types from the schemas, so
// the changes match what templates see.
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
			oldRoot:      normalize(oldSchema),
			newRoot:      normalize(newSchema),
			readOnly:     toSet(newSchema.ReadOnlyProperties),
			seen:         map[schemaPair]bool{},
		}
		c.compareObject(c.oldRoot, c.newRoot, "", "/properties")
		c.compareAdditional(c.oldRoot, c.newRoot, "", "/properties")
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

// normalize returns a copy of a resource schema with oneOf handled the way the
// type generator handles it. The schema passed in is not changed.
func normalize(schema *Schema) *Schema {
	root := *schema
	root.requiredBranches = branchRequired(schema.OneOf)
	root.Definitions = make(map[string]*Schema, len(schema.Definitions))
	for name, definition := range schema.Definitions {
		root.Definitions[name] = normalizeDefinition(definition)
	}
	return &root
}

// normalizeDefinition matches visitDefinitions in the type generator. The
// properties of oneOf branches are merged into the definition, replacing
// definition properties with the same name, until the first branch that lists
// required properties. If no branch was merged before that one, the required
// lists of the branches decide which properties are required.
func normalizeDefinition(definition *Schema) *Schema {
	if definition == nil {
		return &Schema{}
	}

	result := *definition
	merged := false
	for _, branch := range definition.OneOf {
		if branch == nil {
			continue
		}
		if branch.Required != nil {
			if !merged {
				result.requiredBranches = branchRequired(definition.OneOf)
			}
			break
		}
		if branch.Properties != nil {
			if !merged {
				result.Properties = make(map[string]*Schema, len(definition.Properties))
				for name, prop := range definition.Properties {
					result.Properties[name] = prop
				}
				merged = true
			}
			for name, prop := range branch.Properties {
				result.Properties[name] = prop
			}
		}
	}
	return &result
}

func branchRequired(branches []*Schema) [][]string {
	var result [][]string
	for _, branch := range branches {
		if branch != nil && branch.Required != nil {
			result = append(result, branch.Required)
		}
	}
	return result
}

// schemaPair identifies an old and a new schema being compared, so the
// comparison stops when a recursive definition brings it back to the same pair.
type schemaPair struct {
	old any
	new any
}

type comparer struct {
	resourceType string
	oldRoot      *Schema
	newRoot      *Schema
	readOnly     map[string]bool
	// seen holds the schema pairs being compared on the current path.
	seen    map[schemaPair]bool
	changes []Change
}

func (c *comparer) add(change Change) {
	change.ResourceType = c.resourceType
	c.changes = append(c.changes, change)
}

// isReadOnly reports whether the property at pointer, or any property that
// contains it, is read-only. Templates cannot set read-only properties.
func (c *comparer) isReadOnly(pointer string) bool {
	for p := pointer; strings.Count(p, "/") >= 2; p = p[:strings.LastIndex(p, "/")] {
		if c.readOnly[p] {
			return true
		}
	}
	return false
}

// compareObject compares the properties of two object schemas. path is the
// dotted display path of the object, and pointer is its path in the form used
// by readOnlyProperties, for example /properties/Foo/*/Bar.
func (c *comparer) compareObject(oldSchema, newSchema *Schema, path, pointer string) {
	oldRequired := required(oldSchema)
	newRequired := required(newSchema)

	for _, name := range sortedKeys(newSchema.Properties) {
		if newRequired[name] && !oldRequired[name] && !c.isReadOnly(pointer+"/"+name) {
			c.add(Change{Kind: PropertyRequired, Property: join(path, name)})
		}
	}

	for _, name := range sortedKeys(oldSchema.Properties) {
		newProp, ok := newSchema.Properties[name]
		if !ok {
			c.add(Change{Kind: PropertyRemoved, Property: join(path, name)})
			continue
		}

		c.compareSchema(oldSchema.Properties[name], newProp, join(path, name), pointer+"/"+name)
	}
}

func (c *comparer) compareSchema(oldSchema, newSchema *Schema, path, pointer string) {
	oldSchema, oldKey := resolve(c.oldRoot, oldSchema)
	newSchema, newKey := resolve(c.newRoot, newSchema)

	oldTypes := typeSet(oldSchema)
	newTypes := typeSet(newSchema)
	if !isSubset(oldTypes, newTypes) {
		c.add(Change{Kind: PropertyType, Property: path, OldType: formatTypes(oldTypes), NewType: formatTypes(newTypes)})
		return
	}

	key := schemaPair{old: oldKey, new: newKey}
	if c.seen[key] {
		return
	}
	c.seen[key] = true
	defer delete(c.seen, key)

	if oldTypes["object"] {
		c.compareObject(oldSchema, newSchema, path, pointer)
		c.compareAdditional(oldSchema, newSchema, path, pointer)
	}

	if oldTypes["array"] {
		c.compareItems(oldSchema, newSchema, path, pointer)
	}
}

// compareAdditional compares the values allowed for keys that are not listed
// in the properties of two object schemas.
func (c *comparer) compareAdditional(oldSchema, newSchema *Schema, path, pointer string) {
	oldValues, newValues := oldSchema.AdditionalProperties, newSchema.AdditionalProperties
	path, pointer = join(path, "*"), pointer+"/*"

	switch {
	case !oldValues.allowed() || newValues.Any:
		return
	case newValues.Schema == nil:
		c.add(Change{Kind: PropertyRemoved, Property: path})
	case oldValues.Any:
		resolved, _ := resolve(c.newRoot, newValues.Schema)
		c.add(Change{Kind: PropertyType, Property: path, OldType: "any", NewType: formatTypes(typeSet(resolved))})
	default:
		c.compareSchema(oldValues.Schema, newValues.Schema, path, pointer)
	}
}

// compareItems compares the items of two array schemas. The type generator
// turns an array without items into an array of any values.
func (c *comparer) compareItems(oldSchema, newSchema *Schema, path, pointer string) {
	path, pointer = path+"[]", pointer+"/*"

	switch {
	case newSchema.Items == nil:
		return
	case oldSchema.Items == nil:
		resolved, _ := resolve(c.newRoot, newSchema.Items)
		c.add(Change{Kind: PropertyType, Property: path, OldType: "any", NewType: formatTypes(typeSet(resolved))})
	default:
		c.compareSchema(oldSchema.Items, newSchema.Items, path, pointer)
	}
}

// resolve follows a $ref the way the type generator does. A reference with no
// keywords next to it uses the definition as it is, including its oneOf
// handling. Otherwise the definition is merged with the keywords next to the
// reference. The returned key identifies the resolved schema.
func resolve(root, schema *Schema) (*Schema, any) {
	if schema == nil {
		empty := &Schema{}
		return empty, empty
	}
	if schema.Ref == "" {
		return schema, schema
	}

	parts := strings.FieldsFunc(strings.TrimPrefix(schema.Ref, "#"), func(r rune) bool { return r == '/' })
	if len(parts) < 2 {
		return schema, schema
	}
	name := parts[1]

	definition, isDefinition := root.Definitions[name], true
	if definition == nil {
		definition, isDefinition = root.Properties[name], false
	}
	if definition == nil {
		return schema, schema
	}

	hasSiblings := schema.Type != nil || schema.Properties != nil || schema.Required != nil ||
		schema.Items != nil || schema.AdditionalProperties.allowed()
	if isDefinition && !hasSiblings && isObjectType(definition.Type) {
		return definition, "#/definitions/" + name
	}

	merged := *definition
	merged.Ref = ""
	merged.requiredBranches = nil
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
	if schema.AdditionalProperties.set {
		merged.AdditionalProperties = schema.AdditionalProperties
	}
	return &merged, schema
}

// required returns the required properties of an object schema. Like the type
// generator, when oneOf branches list required properties, a property named in
// a branch is only required when every such branch requires it.
func required(schema *Schema) map[string]bool {
	result := toSet(schema.Required)
	if len(schema.requiredBranches) == 0 {
		return result
	}

	intersection := toSet(schema.requiredBranches[0])
	for _, branch := range schema.requiredBranches[1:] {
		current := toSet(branch)
		for name := range intersection {
			if !current[name] {
				delete(intersection, name)
			}
		}
	}

	for _, branch := range schema.requiredBranches {
		for _, name := range branch {
			if intersection[name] {
				result[name] = true
			} else {
				delete(result, name)
			}
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

func isObjectType(t any) bool {
	return t == nil || t == "object"
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
