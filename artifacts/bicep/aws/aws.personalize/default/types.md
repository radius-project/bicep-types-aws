# AWS.Personalize @ default

## Resource AWS.Personalize/Campaign@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/CampaignProperties](#awspersonalizecampaignproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/Dataset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/DatasetProperties](#awspersonalizedatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/EventTracker@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/EventTrackerProperties](#awspersonalizeeventtrackerproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/Filter@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/FilterProperties](#awspersonalizefilterproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/MetricAttribution@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/MetricAttributionProperties](#awspersonalizemetricattributionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/Recommender@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/RecommenderProperties](#awspersonalizerecommenderproperties) (Required, Identifier): properties of the resource

## AWS.Personalize/CampaignProperties
### Properties
* **CampaignArn**: string (ReadOnly, Identifier): The ARN of the campaign.
* **CampaignConfig**: [CampaignConfig](#campaignconfig)
* **CreationDateTime**: string (ReadOnly): The time at which the campaign was created.
* **LastUpdatedDateTime**: string (ReadOnly): The time at which the campaign was last updated.
* **MinProvisionedTPS**: int: Specifies the requested minimum provisioned transactions per second.
* **Name**: string (Required): The name of the campaign.
* **SolutionVersionArn**: string (Required): The ARN of the solution version to deploy.
* **Status**: string (ReadOnly): The status of the campaign.
* **Tags**: [Tag](#tag)[]: Tags to associate with the campaign.

## AWS.Personalize/DatasetProperties
### Properties
* **DatasetArn**: string (ReadOnly, Identifier): The ARN of the dataset
* **DatasetGroupArn**: string (Required): The Amazon Resource Name (ARN) of the dataset group to add the dataset to
* **DatasetImportJob**: [DatasetImportJob](#datasetimportjob)
* **DatasetType**: string (Required): The type of dataset
* **Name**: string (Required): The name for the dataset
* **SchemaArn**: string (Required): The ARN of the schema to associate with the dataset. The schema defines the dataset fields.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.

## AWS.Personalize/EventTrackerProperties
### Properties
* **DatasetGroupArn**: string (Required): The Amazon Resource Name (ARN) of the dataset group that receives the event data.
* **EventTrackerArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the event tracker.
* **Name**: string (Required): The name for the event tracker.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the event tracker.
* **TrackingId**: string (ReadOnly): The ID of the event tracker. Include this ID in requests to the PutEvents API.

## AWS.Personalize/FilterProperties
### Properties
* **CreationDateTime**: string (ReadOnly): The time at which the filter was created.
* **DatasetGroupArn**: string (Required): The ARN of the dataset group that the filter belongs to.
* **FilterArn**: string (ReadOnly, Identifier): The ARN of the filter.
* **FilterExpression**: string (Required): The filter expression that defines which items are included or excluded from recommendations.
* **LastUpdatedDateTime**: string (ReadOnly): The time at which the filter was last updated.
* **Name**: string (Required): The name of the filter.
* **Status**: string (ReadOnly): The status of the filter.
* **Tags**: [Tag](#tag)[]: Tags to associate with the filter.

## AWS.Personalize/MetricAttributionProperties
### Properties
* **DatasetGroupArn**: string (Required): The ARN of the destination dataset group.
* **MetricAttributionArn**: string (ReadOnly, Identifier): The ARN of the metric attribution.
* **Metrics**: [MetricAttribute](#metricattribute)[] (Required): A list of metric attributes for the metric attribution.
* **MetricsOutputConfig**: [MetricsOutputConfig](#metricsoutputconfig) (Required)
* **Name**: string (Required): The name of the metric attribution.
* **Status**: string (ReadOnly): The status of the metric attribution.

## AWS.Personalize/RecommenderProperties
### Properties
* **CreationDateTime**: string (ReadOnly): The time at which the recommender was created.
* **DatasetGroupArn**: string (Required): The ARN of the Domain dataset group that the recommender is created for.
* **LastUpdatedDateTime**: string (ReadOnly): The time at which the recommender was last updated.
* **Name**: string (Required): The name of the recommender.
* **RecipeArn**: string (Required): The ARN of the recipe (Domain dataset group use case) that the recommender uses.
* **RecommenderArn**: string (ReadOnly, Identifier): The ARN of the recommender.
* **RecommenderConfig**: [RecommenderConfig](#recommenderconfig)
* **Status**: string (ReadOnly): The status of the recommender.
* **Tags**: [Tag](#tag)[]: Tags to associate with the recommender.

## Campaign_ItemExplorationConfig
### Properties

## Campaign_RankingInfluence
### Properties

## CampaignConfig
### Properties
* **EnableMetadataWithRecommendations**: bool: Whether metadata with recommendations is enabled for the campaign.
* **ItemExplorationConfig**: [Campaign_ItemExplorationConfig](#campaignitemexplorationconfig): Specifies the exploration configuration hyperparameters.
* **RankingInfluence**: [Campaign_RankingInfluence](#campaignrankinginfluence): A map of ranking influence values for POPULARITY and FRESHNESS.
* **SyncWithLatestSolutionVersion**: bool: Whether the campaign automatically updates to use the latest solution version.

## Dataset_DataSource
### Properties
* **DataLocation**: string: The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

## DatasetImportJob
### Properties
* **DatasetArn**: string (Identifier): The ARN of the dataset that receives the imported data
* **DatasetImportJobArn**: string: The ARN of the dataset import job
* **DataSource**: [Dataset_DataSource](#datasetdatasource): The Amazon S3 bucket that contains the training data to import.
* **JobName**: string: The name for the dataset import job.
* **RoleArn**: string: The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

## MetricAttribute
### Properties
* **EventType**: string (Required): The metric's event type.
* **Expression**: string (Required): The attribute's expression.
* **MetricName**: string (Required): The metric's name.

## MetricsOutputConfig
### Properties
* **RoleArn**: string (Required): The ARN of the IAM role for the metric attribution.
* **S3DataDestination**: [S3DataDestination](#s3datadestination)

## Recommender_ExcludedDatasetColumns
### Properties

## Recommender_ItemExplorationConfig
### Properties

## RecommenderConfig
### Properties
* **EnableMetadataWithRecommendations**: bool: Whether metadata with recommendations is enabled for the recommender.
* **ItemExplorationConfig**: [Recommender_ItemExplorationConfig](#recommenderitemexplorationconfig): Specifies the exploration configuration hyperparameters.
* **MinRecommendationRequestsPerSecond**: int: Specifies the requested minimum provisioned recommendation requests per second.
* **TrainingDataConfig**: [TrainingDataConfig](#trainingdataconfig)

## S3DataDestination
### Properties
* **KmsKeyArn**: string: The ARN of the KMS key.
* **Path**: string (Required): The file path of the Amazon S3 bucket.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TrainingDataConfig
### Properties
* **ExcludedDatasetColumns**: [Recommender_ExcludedDatasetColumns](#recommenderexcludeddatasetcolumns): Specifies the columns to exclude from training. Each key is a dataset type, and each value is a list of columns.

