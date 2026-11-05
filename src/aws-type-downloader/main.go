package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/signal"
	"path"
	"reflect"
	"strings"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation/types"
	"github.com/radius-project/bicep-types-aws/src/aws-type-downloader/pkg/breaking"
	"github.com/spf13/cobra"
)

// This map is used as a workaround when there are issues with missing schema from AWS CloudFormation specs.
// Since we do not own AWS schemas, we may have to wait for the proper updates to be made. Any resources added
// to this map will be skipped during downloads so a previous, working version of that resource schema can be used.
var skippedResources = map[string]struct{}{}

func main() {
	Execute()
}

var Root = &cobra.Command{
	Use:  "aws-type-downloader",
	Args: cobra.NoArgs,
	RunE: run,
}

func init() {
	Root.Flags().StringP("output", "o", "", "output directory")
	Root.Flags().BoolP("clean", "c", false, "clean files for removed types")
	_ = Root.MarkFlagRequired("output")

	for _, cmd := range []*cobra.Command{BreakingChanges, AddedTypes} {
		cmd.Flags().String("old", "", "directory with the previous type records")
		cmd.Flags().String("new", "", "directory with the new type records")
		cmd.Flags().Int("max-length", 0, "maximum report length in bytes, 0 for no limit")
		_ = cmd.MarkFlagRequired("old")
		_ = cmd.MarkFlagRequired("new")
		Root.AddCommand(cmd)
	}
}

var BreakingChanges = &cobra.Command{
	Use:   "breaking-changes",
	Short: "Print a Markdown report of type changes that can break existing templates",
	Args:  cobra.NoArgs,
	RunE:  runBreakingChanges,
}

var AddedTypes = &cobra.Command{
	Use:   "added-types",
	Short: "Print a Markdown list of new read-only and create-and-delete-only types",
	Args:  cobra.NoArgs,
	RunE:  runAddedTypes,
}

func runBreakingChanges(cmd *cobra.Command, args []string) error {
	oldSchemas, newSchemas, maxLength, err := loadReportInput(cmd)
	if err != nil {
		return err
	}

	_, err = fmt.Fprint(cmd.OutOrStdout(), breaking.Report(breaking.Compare(oldSchemas, newSchemas), maxLength))
	return err
}

func runAddedTypes(cmd *cobra.Command, args []string) error {
	oldSchemas, newSchemas, maxLength, err := loadReportInput(cmd)
	if err != nil {
		return err
	}

	_, err = fmt.Fprint(cmd.OutOrStdout(), breaking.AddedReport(breaking.AddedTypes(oldSchemas, newSchemas), maxLength))
	return err
}

// loadReportInput reads the --old, --new, and --max-length flags of a report
// command and loads the type records in both directories.
func loadReportInput(cmd *cobra.Command) (map[string]*breaking.Schema, map[string]*breaking.Schema, int, error) {
	oldDirectory, err := cmd.Flags().GetString("old")
	if err != nil {
		return nil, nil, 0, err
	}

	newDirectory, err := cmd.Flags().GetString("new")
	if err != nil {
		return nil, nil, 0, err
	}

	maxLength, err := cmd.Flags().GetInt("max-length")
	if err != nil {
		return nil, nil, 0, err
	}

	oldSchemas, err := breaking.LoadDir(oldDirectory)
	if err != nil {
		return nil, nil, 0, fmt.Errorf("could not read the previous types: %w", err)
	}

	newSchemas, err := breaking.LoadDir(newDirectory)
	if err != nil {
		return nil, nil, 0, fmt.Errorf("could not read the new types: %w", err)
	}

	return oldSchemas, newSchemas, maxLength, nil
}

func run(cmd *cobra.Command, args []string) error {
	outputDirectory, err := cmd.Flags().GetString("output")
	if err != nil {
		return err
	}

	clean, err := cmd.Flags().GetBool("clean")
	if err != nil {
		return err
	}

	err = os.Mkdir(outputDirectory, 0755)
	if err != nil && !os.IsExist(err) {
		return err
	}

	entries, err := os.ReadDir(outputDirectory)
	if err != nil {
		return err
	}

	existing := map[string]bool{}
	for _, entry := range entries {
		if strings.HasSuffix(entry.Name(), ".json") {
			existing[entry.Name()] = true
		}
	}

	cfg, err := config.LoadDefaultConfig(cmd.Context())
	if err != nil {
		return err
	}

	cfg.RetryMode = aws.RetryModeAdaptive
	cfg.RetryMaxAttempts = 50

	return download(cmd.Context(), cloudformation.NewFromConfig(cfg), outputDirectory, existing, clean)
}

// registryClient is the part of the CloudFormation API that the download uses.
type registryClient interface {
	cloudformation.ListTypesAPIClient
	DescribeType(ctx context.Context, params *cloudformation.DescribeTypeInput, optFns ...func(*cloudformation.Options)) (*cloudformation.DescribeTypeOutput, error)
}

// provisioningTypes are the provisioning types to download. Cloud Control can
// create, read, and delete FULLY_MUTABLE and IMMUTABLE types. It can't create
// NON_PROVISIONABLE types, so only the read-only ones are kept.
var provisioningTypes = []types.ProvisioningType{
	types.ProvisioningTypeFullyMutable,
	types.ProvisioningTypeImmutable,
	types.ProvisioningTypeNonProvisionable,
}

// download writes a record for every public AWS type that is kept, to
// outputDirectory. existing holds the names of the record files already there.
// With clean, it deletes the files of types that are no longer kept.
func download(ctx context.Context, client registryClient, outputDirectory string, existing map[string]bool, clean bool) error {
	for _, provisioningType := range provisioningTypes {
		// We want to get AWS built-in types. This require setting Type to Resource
		// and Visiblity to Public.
		paginator := cloudformation.NewListTypesPaginator(client, &cloudformation.ListTypesInput{
			Filters: &types.TypeFilters{
				Category: types.CategoryAwsTypes,
			},
			ProvisioningType: provisioningType,
			Type:             types.RegistryTypeResource,
			Visibility:       types.VisibilityPublic,
		})

		for paginator.HasMorePages() {
			response, err := paginator.NextPage(ctx)
			if err != nil {
				return err
			}

			for _, typeSummary := range response.TypeSummaries {
				kept, err := downloadType(ctx, client, outputDirectory, typeSummary, provisioningType)
				if err != nil {
					return err
				}
				if kept {
					delete(existing, aws.ToString(typeSummary.TypeName)+".json")
				}
			}
		}
	}

	if clean {
		for filename := range existing {
			fmt.Printf("Deleting: %s\n", filename)
			err := os.Remove(path.Join(outputDirectory, filename))
			if err != nil {
				fmt.Printf("Failed to delete: %s - %s\n", filename, err)
			}
		}
	}

	return nil
}

// downloadType writes the record of one type to outputDirectory when its
// schema changed. It returns false when the type is not kept, so that a record
// left from an earlier download is cleaned.
func downloadType(ctx context.Context, client registryClient, outputDirectory string, typeSummary types.TypeSummary, provisioningType types.ProvisioningType) (bool, error) {
	typeName := aws.ToString(typeSummary.TypeName)
	fmt.Printf("Processing Type: %s\n", typeName)
	filename := typeName + ".json"

	content, err := os.ReadFile(path.Join(outputDirectory, filename))
	if err != nil && !os.IsNotExist(err) {
		return false, err
	}

	var previous *TypeRecord
	if len(content) > 0 {
		previous = &TypeRecord{}
		err := json.Unmarshal(content, previous)
		if err != nil {
			return false, fmt.Errorf("file %s has invalid JSON: %w", filename, err)
		}
	}

	// Some types have no last updated time, so they are always read again.
	if isSkippedResource(typeName) ||
		previous != nil && typeSummary.LastUpdated != nil && !previous.Timestamp.Before(*typeSummary.LastUpdated) {
		fmt.Printf("Skipping: %s - already up to date\n", typeName)
		return true, nil
	}

	response, err := client.DescribeType(ctx, &cloudformation.DescribeTypeInput{
		Arn: typeSummary.TypeArn,
	})
	if err != nil {
		return false, err
	}

	schema := map[string]interface{}{}
	err = json.Unmarshal([]byte(aws.ToString(response.Schema)), &schema)
	if err != nil {
		return false, fmt.Errorf("type %s could not be converted to JSON: %w", typeName, err)
	}

	if provisioningType == types.ProvisioningTypeNonProvisionable {
		parsed := breaking.Schema{}
		err = json.Unmarshal([]byte(aws.ToString(response.Schema)), &parsed)
		if err != nil {
			return false, fmt.Errorf("type %s has a schema that could not be read: %w", typeName, err)
		}
		if !parsed.ReadOnly() {
			fmt.Printf("Skipping: %s - not read-only, and Cloud Control can't create it\n", typeName)
			return false, nil
		}
	}

	record := TypeRecord{
		ARN:       aws.ToString(typeSummary.TypeArn),
		Schema:    schema,
		Type:      typeName,
		Timestamp: aws.ToTime(typeSummary.LastUpdated),
	}

	if previous != nil && sameContent(*previous, record) {
		fmt.Printf("Skipping: %s - schema unchanged\n", typeName)
		return true, nil
	}

	fmt.Printf("Writing: %s\n", typeName)

	result, err := json.MarshalIndent(&record, "", "  ")
	if err != nil {
		return false, err
	}

	err = os.WriteFile(path.Join(outputDirectory, filename), result, 0644)
	if err != nil {
		return false, err
	}

	return true, nil
}

type TypeRecord struct {
	ARN       string                 `json:"arn"`
	Type      string                 `json:"type"`
	Timestamp time.Time              `json:"time"`
	Schema    map[string]interface{} `json:"schema"`
}

// sameContent reports whether two records describe the same type with the same
// schema. AWS moves the last updated time of a type when it redeploys the type,
// even if the schema did not change, so the time is not compared. Keeping the
// file as it is then avoids changes that only move the time.
func sameContent(a, b TypeRecord) bool {
	return a.ARN == b.ARN && a.Type == b.Type && reflect.DeepEqual(a.Schema, b.Schema)
}

func Execute() {
	ctx := context.Background()

	ctx, cancel := context.WithCancel(ctx)
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	defer func() {
		signal.Stop(c)
		cancel()
		close(c)
	}()

	go func() {
		select {
		case <-c:
			cancel()
		case <-ctx.Done():
		}
	}()

	err := Root.ExecuteContext(ctx)
	if err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}

func isSkippedResource(typeName string) bool {
	_, exists := skippedResources[typeName]
	return exists
}
