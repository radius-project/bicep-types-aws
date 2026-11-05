package breaking

import (
	"fmt"
	"sort"
)

// Added is a resource type that is new and can't be fully managed by
// templates, so a reviewer should check that it belongs in the extension.
type Added struct {
	// ResourceType is the AWS resource type, for example AWS::EC2::Image.
	ResourceType string
	// ReadOnly is true for a read-only type and false for a
	// create-and-delete-only type.
	ReadOnly bool
}

// AddedTypes returns the types in newSchemas but not in oldSchemas that are
// read-only or create-and-delete-only, read-only types first, each group
// sorted by resource type.
func AddedTypes(oldSchemas, newSchemas map[string]*Schema) []Added {
	added := []Added{}
	for typeName, schema := range newSchemas {
		if _, ok := oldSchemas[typeName]; ok {
			continue
		}
		if schema.ReadOnly() || schema.CreateAndDeleteOnly() {
			added = append(added, Added{ResourceType: typeName, ReadOnly: schema.ReadOnly()})
		}
	}

	sort.Slice(added, func(i, j int) bool {
		if added[i].ReadOnly != added[j].ReadOnly {
			return added[i].ReadOnly
		}
		return added[i].ResourceType < added[j].ResourceType
	})

	return added
}

// AddedReport renders added types as Markdown, grouped into read-only and
// create-and-delete-only types. maxLength works as it does for Report.
func AddedReport(added []Added, maxLength int) string {
	if len(added) == 0 {
		return "No new read-only or create-and-delete-only types were found.\n"
	}

	// Each chunk is one type, prefixed with its group heading when it is the
	// first type in the group, so a heading is never left on its own.
	chunks := make([]string, 0, len(added))
	for i, a := range added {
		chunk := ""
		if i == 0 || a.ReadOnly != added[i-1].ReadOnly {
			chunk = "\n### Create-and-delete-only\n\n"
			if a.ReadOnly {
				chunk = "\n### Read-only\n\n"
			}
		}
		chunk += fmt.Sprintf("- `%s`\n", a.ResourceType)
		chunks = append(chunks, chunk)
	}

	summary := fmt.Sprintf("Found %d new read-only or create-and-delete-only type(s)", len(added))
	return fit(summary, chunks, "type(s)", maxLength)
}
