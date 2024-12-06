package main

import (
	"context"
	"encoding/json"
	"fmt"
	"os"
	"os/signal"
	"path"
	"strings"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation"
	"github.com/aws/aws-sdk-go-v2/service/cloudformation/types"
	"github.com/spf13/cobra"
)

// These have been skipped due to missing schema: https://github.com/aws/aws-sdk-go-v2/issues/2913
// These will be reverted when the issue is resolved.
var skippedResources = map[string]struct{}{
	"AWS::EC2::LaunchTemplate":   {},
	"AWS::QuickSight::Analysis":  {},
	"AWS::QuickSight::Dashboard": {},
	"AWS::QuickSight::Template":  {},
	"AWS::SageMaker::Cluster":    {},
}

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

	client := cloudformation.NewFromConfig(cfg)

	// We want to get AWS built-in types. This require setting Type to Resource
	// and Visiblity to Public.
	//
	// This will also return the set withFULL cloud-control support. In the future we might also want
	// to consider 'types.ProvisioningTypeImmutable' as well.
	paginator := cloudformation.NewListTypesPaginator(client, &cloudformation.ListTypesInput{
		Filters: &types.TypeFilters{
			Category: types.CategoryAwsTypes,
		},
		ProvisioningType: types.ProvisioningTypeFullyMutable,
		Type:             types.RegistryTypeResource,
		Visibility:       types.VisibilityPublic,
	})

	for paginator.HasMorePages() {
		response, err := paginator.NextPage(cmd.Context())
		if err != nil {
			return err
		}

		for _, typeSummary := range response.TypeSummaries {
			fmt.Printf("Processing Type: %s\n", *typeSummary.TypeName)
			filename := *typeSummary.TypeName + ".json"
			delete(existing, filename)

			existing, err := os.ReadFile(path.Join(outputDirectory, filename))
			if os.IsNotExist(err) {
				// This is fine

			} else if err != nil {
				return err
			}

			timestamp := time.Time{}
			if len(existing) > 0 {
				record := TypeRecord{}
				err := json.Unmarshal(existing, &record)
				if err != nil {
					return fmt.Errorf("file %s has invalid JSON: %w", filename, err)
				}

				timestamp = record.Timestamp
			}

			if isSkippedResource(*typeSummary.TypeName) ||
				typeSummary.LastUpdated != nil && (timestamp == *typeSummary.LastUpdated || timestamp.After(*typeSummary.LastUpdated)) {
				fmt.Printf("Skipping: %s - already up to date\n", *typeSummary.TypeName)
				continue
			}

			response, err := client.DescribeType(cmd.Context(), &cloudformation.DescribeTypeInput{
				Arn: typeSummary.TypeArn,
			})
			if err != nil {
				return err
			}

			fmt.Printf("Writing: %s\n", *typeSummary.TypeName)

			schema := map[string]interface{}{}
			err = json.Unmarshal([]byte(*response.Schema), &schema)
			if err != nil {
				return fmt.Errorf("type %s could not be converted to JSON JSON: %w", *typeSummary.TypeName, err)
			}

			record := TypeRecord{
				ARN:       *typeSummary.TypeArn,
				Schema:    schema,
				Type:      *typeSummary.TypeName,
				Timestamp: *typeSummary.LastUpdated,
			}

			result, err := json.MarshalIndent(&record, "", "  ")
			if err != nil {
				return err
			}

			err = os.WriteFile(path.Join(outputDirectory, filename), result, 0644)
			if err != nil {
				return err
			}
		}
	}

	if clean {
		for filename := range existing {
			fmt.Printf("Deleting: %s\n", filename)
			err = os.Remove(path.Join(outputDirectory, filename))
			if err != nil {
				fmt.Printf("Failed to delete: %s - %s\n", filename, err)
			}
		}
	}

	return nil
}

type TypeRecord struct {
	ARN       string                 `json:"arn"`
	Type      string                 `json:"type"`
	Timestamp time.Time              `json:"time"`
	Schema    map[string]interface{} `json:"schema"`
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
