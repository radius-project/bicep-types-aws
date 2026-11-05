package breaking

import (
	"fmt"
	"strings"
)

// Report renders changes as Markdown. When maxLength is greater than zero and
// the full report is longer than maxLength bytes, the report is cut short and
// ends with a line that says how many changes were left out.
func Report(changes []Change, maxLength int) string {
	if len(changes) == 0 {
		return "No changes that can break existing templates were found.\n"
	}

	// Each chunk is one change, prefixed with its resource type heading when it
	// is the first change for that type, so a heading is never left on its own.
	chunks := make([]string, 0, len(changes))
	current := ""
	for _, change := range changes {
		chunk := ""
		if change.ResourceType != current {
			current = change.ResourceType
			chunk = fmt.Sprintf("\n### `%s`\n\n", current)
		}
		chunk += fmt.Sprintf("- %s\n", describe(change))
		chunks = append(chunks, chunk)
	}

	summary := fmt.Sprintf("Found %d change(s) that can break existing templates", len(changes))
	return fit(summary, chunks, "change(s)", maxLength)
}

// fit writes summary as a header line, then chunks. When maxLength is greater
// than zero and that is longer than maxLength bytes, it writes only the chunks
// that fit and ends with a line that says how many items, named by noun, were
// left out.
func fit(summary string, chunks []string, noun string, maxLength int) string {
	header := summary + ".\n"
	total := len(header)
	for _, chunk := range chunks {
		total += len(chunk)
	}

	var b strings.Builder
	b.WriteString(header)
	if maxLength <= 0 || total <= maxLength {
		for _, chunk := range chunks {
			b.WriteString(chunk)
		}
		return b.String()
	}

	// Write a chunk only if the footer for the chunks after it still fits.
	for i, chunk := range chunks {
		if b.Len()+len(chunk)+len(omittedFooter(len(chunks)-i-1, noun)) > maxLength {
			b.WriteString(omittedFooter(len(chunks)-i, noun))
			break
		}
		b.WriteString(chunk)
	}

	if b.Len() <= maxLength {
		return b.String()
	}

	// Not even one chunk fits next to the header and footer. The summary is
	// ASCII, so cutting it at a byte offset keeps it valid UTF-8.
	short := summary + ". See the full report in the workflow run.\n"
	if len(short) > maxLength {
		short = short[:maxLength]
	}
	return short
}

func omittedFooter(omitted int, noun string) string {
	return fmt.Sprintf("\n%d more %s not shown. See the full report in the workflow run.\n", omitted, noun)
}

func describe(change Change) string {
	switch change.Kind {
	case TypeRemoved:
		return "The resource type was removed."
	case TypeReadOnly:
		return "The resource type became read-only. Templates can only reference it with `existing`."
	case PropertyRemoved:
		return fmt.Sprintf("`%s` was removed.", change.Property)
	case PropertyRequired:
		return fmt.Sprintf("`%s` is now required.", change.Property)
	case PropertyType:
		return fmt.Sprintf("`%s` changed type from `%s` to `%s`.", change.Property, change.OldType, change.NewType)
	default:
		return fmt.Sprintf("`%s`: %s.", change.Property, change.Kind)
	}
}
