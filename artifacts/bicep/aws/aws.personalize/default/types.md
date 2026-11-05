# AWS.Personalize @ default

## Resource AWS.Personalize/BatchInferenceJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/BatchInferenceJobProperties](#awspersonalizebatchinferencejobproperties) (Identifier): properties of the resource

## Resource AWS.Personalize/BatchSegmentJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/BatchSegmentJobProperties](#awspersonalizebatchsegmentjobproperties) (Identifier): properties of the resource

## Resource AWS.Personalize/Campaign@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/CampaignProperties](#awspersonalizecampaignproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/DataDeletionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/DataDeletionJobProperties](#awspersonalizedatadeletionjobproperties) (Identifier): properties of the resource

## Resource AWS.Personalize/Dataset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/DatasetProperties](#awspersonalizedatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/DatasetExportJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/DatasetExportJobProperties](#awspersonalizedatasetexportjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/DatasetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/DatasetGroupProperties](#awspersonalizedatasetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/DatasetImportJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/DatasetImportJobProperties](#awspersonalizedatasetimportjobproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.Personalize/Recipe@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/RecipeProperties](#awspersonalizerecipeproperties) (Identifier): properties of the resource

## Resource AWS.Personalize/Recommender@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/RecommenderProperties](#awspersonalizerecommenderproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/Schema@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/SchemaProperties](#awspersonalizeschemaproperties) (Required, Identifier): properties of the resource

## Resource AWS.Personalize/Solution@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Personalize/SolutionProperties](#awspersonalizesolutionproperties) (Required, Identifier): properties of the resource

## AWS.Personalize/BatchInferenceJobProperties
### Properties
* **BatchInferenceJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the batch inference job.
* **BatchInferenceJobMode**: string: The mode of the batch inference job.
* **CreationDateTime**: string (ReadOnly): The time at which the batch inference job was created.
* **JobInput**: [BatchInferenceJobInput](#batchinferencejobinput)
* **JobName**: string: The name of the batch inference job.
* **JobOutput**: [BatchInferenceJobOutput](#batchinferencejoboutput)
* **LastUpdatedDateTime**: string (ReadOnly): The time at which the batch inference job was last updated.
* **NumResults**: int: The number of recommendations to retrieve.
* **RoleArn**: string: The ARN of the IAM role that has permissions to read and write to your input and output Amazon S3 buckets.
* **SolutionVersionArn**: string: The ARN of the solution version used to generate the batch inference recommendations.
* **Status**: string (ReadOnly): The status of the batch inference job.
* **Tags**: [Tag](#tag)[]: Tags associated with the batch inference job.

## AWS.Personalize/BatchSegmentJobProperties
### Properties
* **BatchSegmentJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the batch segment job.
* **CreationDateTime**: string (ReadOnly): The time at which the batch segment job was created.
* **JobInput**: [BatchSegmentJobInput](#batchsegmentjobinput)
* **JobName**: string: The name of the batch segment job.
* **JobOutput**: [BatchSegmentJobOutput](#batchsegmentjoboutput)
* **LastUpdatedDateTime**: string (ReadOnly): The time at which the batch segment job was last updated.
* **NumResults**: int: The number of predicted users generated by the batch segment job for each line of input data.
* **RoleArn**: string: The ARN of the IAM role that has permissions to read and write to your input and output Amazon S3 buckets.
* **SolutionVersionArn**: string: The ARN of the solution version used to generate the batch segments.
* **Status**: string (ReadOnly): The status of the batch segment job.
* **Tags**: [Tag](#tag)[]: Tags associated with the batch segment job.

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

## AWS.Personalize/DataDeletionJobProperties
### Properties
* **CreationDateTime**: string (ReadOnly): The creation date and time of the data deletion job.
* **DataDeletionJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the data deletion job.
* **DatasetGroupArn**: string: The Amazon Resource Name (ARN) of the dataset group that has the datasets you want to delete records from.
* **DataSource**: [DataSource](#datasource)
* **JobName**: string: The name for the data deletion job.
* **LastUpdatedDateTime**: string (ReadOnly): The date and time the data deletion job was last updated.
* **RoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that has permissions to read from the Amazon S3 data source.
* **Status**: string (ReadOnly): The status of the data deletion job.

## AWS.Personalize/DatasetExportJobProperties
### Properties
* **CreationDateTime**: string (ReadOnly): The creation date and time (in Unix time) of the dataset export job.
* **DatasetArn**: string (Required): The Amazon Resource Name (ARN) of the dataset that contains the data to export.
* **DatasetExportJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the dataset export job.
* **IngestionMode**: string: The data to export, based on how you imported the data.
* **JobName**: string (Required): The name for the dataset export job.
* **JobOutput**: [DatasetExportJobOutput](#datasetexportjoboutput) (Required)
* **LastUpdatedDateTime**: string (ReadOnly): The date and time (in Unix time) the status of the dataset export job was last updated.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM service role that has permissions to add data to your output Amazon S3 bucket.
* **Status**: string (ReadOnly): The status of the dataset export job.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the dataset export job.

## AWS.Personalize/DatasetGroupProperties
### Properties
* **DatasetGroupArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the dataset group.
* **Domain**: string: The domain of a Domain dataset group.
* **KmsKeyArn**: string: The Amazon Resource Name(ARN) of a AWS Key Management Service (KMS) key used to encrypt the datasets.
* **Name**: string (Required): The name for the new dataset group.
* **RoleArn**: string: The ARN of the AWS Identity and Access Management (IAM) role that has permissions to access the AWS Key Management Service (KMS) key. Supplying an IAM role is only valid when also specifying a KMS key.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.

## AWS.Personalize/DatasetImportJobProperties
### Properties
* **CreationDateTime**: string (ReadOnly): The creation date and time of the dataset import job.
* **DatasetArn**: string (Required): The Amazon Resource Name (ARN) of the dataset that receives the imported data.
* **DatasetImportJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the dataset import job.
* **DataSource**: [DataSource](#datasource) (Required)
* **ImportMode**: string: Specify how to add the new records to an existing dataset.
* **JobName**: string (Required): The name for the dataset import job.
* **LastUpdatedDateTime**: string (ReadOnly): The date and time the status of the dataset import job was last updated.
* **PublishAttributionMetricsToS3**: bool: If you created a metric attribution, specifies whether to publish metrics for this import job to Amazon S3.
* **RoleArn**: string: The ARN of the IAM role that has permissions to read from the Amazon S3 data source.
* **Status**: string (ReadOnly): The status of the dataset import job.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the dataset import job.

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

## AWS.Personalize/RecipeProperties
### Properties
* **AlgorithmArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the algorithm that Amazon Personalize uses to train the model.
* **CreationDateTime**: string (ReadOnly): The date and time (in Unix format) that the recipe was created.
* **Description**: string (ReadOnly): The description of the recipe.
* **FeatureTransformationArn**: string (ReadOnly): The ARN of the FeatureTransformation object.
* **LastUpdatedDateTime**: string (ReadOnly): The date and time (in Unix format) that the recipe was last updated.
* **Name**: string: The name of the recipe.
* **RecipeArn**: string (Identifier): The Amazon Resource Name (ARN) of the recipe.
* **RecipeType**: string (ReadOnly): One of the following values: PERSONALIZED_RANKING, RELATED_ITEMS, USER_PERSONALIZATION.
* **Status**: string (ReadOnly): The status of the recipe.

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

## AWS.Personalize/SchemaProperties
### Properties
* **Domain**: string: The domain of a Domain dataset group.
* **Name**: string (Required): Name for the schema.
* **Schema**: string (Required): A schema in Avro JSON format.
* **SchemaArn**: string (ReadOnly, Identifier): Arn for the schema.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.

## AWS.Personalize/SolutionProperties
### Properties
* **DatasetGroupArn**: string (Required): The ARN of the dataset group that provides the training data.
* **EventType**: string: When your have multiple event types (using an EVENT_TYPE schema field), this parameter specifies which event type (for example, 'click' or 'like') is used for training the model. If you do not provide an eventType, Amazon Personalize will use all interactions for training with equal weight regardless of type.
* **Name**: string (Required): The name for the solution
* **PerformAutoML**: bool: Whether to perform automated machine learning (AutoML). The default is false. For this case, you must specify recipeArn.
* **PerformHPO**: bool: Whether to perform hyperparameter optimization (HPO) on the specified or selected recipe. The default is false. When performing AutoML, this parameter is always true and you should not set it to false.
* **RecipeArn**: string: The ARN of the recipe to use for model training. Only specified when performAutoML is false.
* **SolutionArn**: string (ReadOnly, Identifier)
* **SolutionConfig**: [SolutionConfig](#solutionconfig)
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.

## BatchInferenceJobInput
### Properties
* **S3DataSource**: [S3DataConfig](#s3dataconfig) (Required)

## BatchInferenceJobOutput
### Properties
* **S3DataDestination**: [S3DataConfig](#s3dataconfig) (Required)

## BatchSegmentJobInput
### Properties
* **S3DataSource**: [S3DataConfig](#s3dataconfig) (Required)

## BatchSegmentJobOutput
### Properties
* **S3DataDestination**: [S3DataConfig](#s3dataconfig) (Required)

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

## CategoricalHyperParameterRange
### Properties
* **Name**: string: The name of the hyperparameter.
* **Values**: string[]: A list of the categories for the hyperparameter.

## ContinuousHyperParameterRange
### Properties
* **MaxValue**: int: The maximum allowable value for the hyperparameter.
* **MinValue**: int: The minimum allowable value for the hyperparameter.
* **Name**: string: The name of the hyperparameter.

## Dataset_DataSource
### Properties
* **DataLocation**: string: The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

## DatasetExportJobOutput
### Properties
* **S3DataDestination**: [S3DataConfig](#s3dataconfig) (Required)

## DatasetImportJob
### Properties
* **DatasetArn**: string (Identifier): The ARN of the dataset that receives the imported data
* **DatasetImportJobArn**: string: The ARN of the dataset import job
* **DataSource**: [Dataset_DataSource](#datasetdatasource): The Amazon S3 bucket that contains the training data to import.
* **JobName**: string: The name for the dataset import job.
* **RoleArn**: string: The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

## DataSource
### Properties
* **DataLocation**: string: The path to the Amazon S3 bucket where the data is stored.

## DataSource
### Properties
* **DataLocation**: string: The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

## IntegerHyperParameterRange
### Properties
* **MaxValue**: int: The maximum allowable value for the hyperparameter.
* **MinValue**: int: The minimum allowable value for the hyperparameter.
* **Name**: string: The name of the hyperparameter.

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

## S3DataConfig
### Properties
* **Path**: string (Required): The file path of the Amazon S3 bucket.

## S3DataConfig
### Properties
* **Path**: string (Required): The file path of the Amazon S3 bucket.

## S3DataConfig
### Properties
* **KmsKeyArn**: string: The ARN of the KMS key used to encrypt or decrypt the input and output files.
* **Path**: string (Required): The file path of the Amazon S3 bucket.

## S3DataDestination
### Properties
* **KmsKeyArn**: string: The ARN of the KMS key.
* **Path**: string (Required): The file path of the Amazon S3 bucket.

## Solution_AlgorithmHyperParameters
### Properties

## Solution_AutoMLConfig
### Properties
* **MetricName**: string: The metric to optimize.
* **RecipeList**: string[]: The list of candidate recipes.

## Solution_FeatureTransformationParameters
### Properties

## Solution_HpoConfig
### Properties
* **AlgorithmHyperParameterRanges**: [Solution_HpoConfig_AlgorithmHyperParameterRanges](#solutionhpoconfigalgorithmhyperparameterranges): The hyperparameters and their allowable ranges
* **HpoObjective**: [Solution_HpoConfig_HpoObjective](#solutionhpoconfighpoobjective): The metric to optimize during HPO.
* **HpoResourceConfig**: [Solution_HpoConfig_HpoResourceConfig](#solutionhpoconfighporesourceconfig): Describes the resource configuration for hyperparameter optimization (HPO).

## Solution_HpoConfig_AlgorithmHyperParameterRanges
### Properties
* **CategoricalHyperParameterRanges**: [CategoricalHyperParameterRange](#categoricalhyperparameterrange)[]: The categorical hyperparameters and their ranges.
* **ContinuousHyperParameterRanges**: [ContinuousHyperParameterRange](#continuoushyperparameterrange)[]: The continuous hyperparameters and their ranges.
* **IntegerHyperParameterRanges**: [IntegerHyperParameterRange](#integerhyperparameterrange)[]: The integer hyperparameters and their ranges.

## Solution_HpoConfig_HpoObjective
### Properties
* **MetricName**: string: The name of the metric
* **MetricRegex**: string: A regular expression for finding the metric in the training job logs.
* **Type**: string: The type of the metric. Valid values are Maximize and Minimize.

## Solution_HpoConfig_HpoResourceConfig
### Properties
* **MaxNumberOfTrainingJobs**: string: The maximum number of training jobs when you create a solution version. The maximum value for maxNumberOfTrainingJobs is 40.
* **MaxParallelTrainingJobs**: string: The maximum number of parallel training jobs when you create a solution version. The maximum value for maxParallelTrainingJobs is 10.

## SolutionConfig
### Properties
* **AlgorithmHyperParameters**: [Solution_AlgorithmHyperParameters](#solutionalgorithmhyperparameters): Lists the hyperparameter names and ranges.
* **AutoMLConfig**: [Solution_AutoMLConfig](#solutionautomlconfig): The AutoMLConfig object containing a list of recipes to search when AutoML is performed.
* **EventValueThreshold**: string: Only events with a value greater than or equal to this threshold are used for training a model.
* **FeatureTransformationParameters**: [Solution_FeatureTransformationParameters](#solutionfeaturetransformationparameters): Lists the feature transformation parameters.
* **HpoConfig**: [Solution_HpoConfig](#solutionhpoconfig): Describes the properties for hyperparameter optimization (HPO)

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): One part of a key-value pair that makes up a tag.
* **Value**: string (Required): The optional part of a key-value pair that makes up a tag.

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TrainingDataConfig
### Properties
* **ExcludedDatasetColumns**: [Recommender_ExcludedDatasetColumns](#recommenderexcludeddatasetcolumns): Specifies the columns to exclude from training. Each key is a dataset type, and each value is a list of columns.

