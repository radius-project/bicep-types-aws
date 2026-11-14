# AWS.CleanRoomsML @ default

## Resource AWS.CleanRoomsML/AudienceGenerationJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/AudienceGenerationJobProperties](#awscleanroomsmlaudiencegenerationjobproperties) (Identifier): properties of the resource

## Resource AWS.CleanRoomsML/AudienceModel@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/AudienceModelProperties](#awscleanroomsmlaudiencemodelproperties) (Identifier): properties of the resource

## Resource AWS.CleanRoomsML/ConfiguredAudienceModel@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/ConfiguredAudienceModelProperties](#awscleanroomsmlconfiguredaudiencemodelproperties) (Identifier): properties of the resource

## Resource AWS.CleanRoomsML/ConfiguredModelAlgorithm@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/ConfiguredModelAlgorithmProperties](#awscleanroomsmlconfiguredmodelalgorithmproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRoomsML/ConfiguredModelAlgorithmAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/ConfiguredModelAlgorithmAssociationProperties](#awscleanroomsmlconfiguredmodelalgorithmassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CleanRoomsML/MLInputChannel@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/MLInputChannelProperties](#awscleanroomsmlmlinputchannelproperties) (Identifier): properties of the resource

## Resource AWS.CleanRoomsML/TrainedModel@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/TrainedModelProperties](#awscleanroomsmltrainedmodelproperties) (Identifier): properties of the resource

## Resource AWS.CleanRoomsML/TrainedModelInferenceJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/TrainedModelInferenceJobProperties](#awscleanroomsmltrainedmodelinferencejobproperties) (Identifier): properties of the resource

## Resource AWS.CleanRoomsML/TrainingDataset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/TrainingDatasetProperties](#awscleanroomsmltrainingdatasetproperties) (Required, Identifier): properties of the resource

## AccessBudget
### Properties
* **AggregateRemainingBudget**: int (Required): The total remaining budget across all active budget periods for this resource.
* **Details**: [AccessBudgetDetails](#accessbudgetdetails)[] (Required): A list of budget details for this resource. Contains active budget periods that apply to the resource.
* **ResourceArn**: string (Required): The ARN of the resource that this access budget applies to.

## AccessBudgetDetails
### Properties
* **AutoRefresh**: string: Specifies whether this budget automatically refreshes when the current period ends.
* **Budget**: int (Required): The total budget amount allocated for this period.
* **BudgetType**: string (Required): The type of budget period. Calendar-based types reset automatically at regular intervals, while LIFETIME budgets never reset.
* **RemainingBudget**: int (Required): The amount of budget remaining in this period.

## AudienceDestination
### Properties
* **S3Destination**: [S3ConfigMap](#s3configmap) (Required)

## AudienceQualityMetrics
### Properties
* **RecallMetric**: int: The recall score of the generated audience.
* **RelevanceMetrics**: [RelevanceMetric](#relevancemetric)[] (Required): The relevance scores of the generated audience.

## AudienceSize
### Properties
* **Type**: string (Required): Whether the audience size is defined in absolute terms or as a percentage.
* **Value**: int (Required): Specify an audience size value.

## AudienceSizeConfig
### Properties
* **AudienceSizeBins**: int[] (Required): An array of the different audience output sizes.
* **AudienceSizeType**: string (Required): Whether the audience output sizes are defined as an absolute number or a percentage.

## AWS.CleanRoomsML/AudienceGenerationJobProperties
### Properties
* **AudienceGenerationJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the audience generation job.
* **ConfiguredAudienceModelArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the configured audience model used for this audience generation job.
* **CreateTime**: string (ReadOnly): The time at which the audience generation job was created.
* **Description**: string: The description of the audience generation job.
* **IncludeSeedInOutput**: bool: Configure whether the seed users are included in the output audience.
* **Metrics**: [AudienceQualityMetrics](#audiencequalitymetrics) (ReadOnly)
* **Name**: string (ReadOnly): The name of the audience generation job.
* **StartedBy**: string (ReadOnly): The AWS account that started this audience generation job.
* **Status**: string (ReadOnly): The status of the audience generation job.
* **Tags**: [Tag](#tag)[]: The tags that are associated to this audience generation job.
* **UpdateTime**: string (ReadOnly): The most recent time at which the audience generation job was updated.

## AWS.CleanRoomsML/AudienceModelProperties
### Properties
* **AudienceModelArn**: string (Identifier): The Amazon Resource Name (ARN) of the audience model.
* **CreateTime**: string (ReadOnly): The time at which the audience model was created.
* **Description**: string (ReadOnly): The description of the audience model.
* **KmsKeyArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the KMS key. This key is used to encrypt and decrypt customer-owned data in the trained ML model and the associated data.
* **Name**: string (ReadOnly): The name of the audience model resource.
* **Status**: string (ReadOnly): The status of the audience model.
* **Tags**: [Tag](#tag)[] (ReadOnly): The tags that are assigned to the audience model.
* **TrainingDataEndTime**: string (ReadOnly): The end date and time of the training window.
* **TrainingDatasetArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the training dataset for this audience model.
* **TrainingDataStartTime**: string (ReadOnly): The start date and time of the training window.
* **UpdateTime**: string (ReadOnly): The most recent time at which the audience model was updated.

## AWS.CleanRoomsML/ConfiguredAudienceModelProperties
### Properties
* **AudienceModelArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the audience model used for this configured audience model.
* **AudienceSizeConfig**: [AudienceSizeConfig](#audiencesizeconfig) (ReadOnly)
* **ConfiguredAudienceModelArn**: string (Identifier): The Amazon Resource Name (ARN) of the configured audience model.
* **CreateTime**: string (ReadOnly): The time at which the configured audience model was created.
* **Description**: string (ReadOnly): The description of the configured audience model.
* **MinMatchingSeedSize**: int (ReadOnly): The minimum number of users from the seed audience that must match with users in the training data of the audience model.
* **Name**: string (ReadOnly): The name of the configured audience model.
* **OutputConfig**: [ConfiguredAudienceModelOutputConfig](#configuredaudiencemodeloutputconfig) (ReadOnly)
* **SharedAudienceMetrics**: string[] (ReadOnly): Whether audience metrics are shared.
* **Status**: string (ReadOnly): The status of the configured audience model.
* **Tags**: [Tag](#tag)[] (ReadOnly): Tags associated with the configured audience model.
* **UpdateTime**: string (ReadOnly): The most recent time at which the configured audience model was updated.

## AWS.CleanRoomsML/ConfiguredModelAlgorithmAssociationProperties
### Properties
* **CollaborationIdentifier**: string (ReadOnly)
* **ConfiguredModelAlgorithmArn**: string (Required)
* **ConfiguredModelAlgorithmAssociationArn**: string (ReadOnly, Identifier)
* **Description**: string
* **MembershipIdentifier**: string (Required)
* **Name**: string (Required)
* **PrivacyConfiguration**: [PrivacyConfiguration](#privacyconfiguration)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm association.

## AWS.CleanRoomsML/ConfiguredModelAlgorithmProperties
### Properties
* **ConfiguredModelAlgorithmArn**: string (ReadOnly, Identifier)
* **Description**: string
* **InferenceContainerConfig**: [InferenceContainerConfig](#inferencecontainerconfig)
* **KmsKeyArn**: string
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms-ml configured model algorithm.
* **TrainingContainerConfig**: [ContainerConfig](#containerconfig)

## AWS.CleanRoomsML/MLInputChannelProperties
### Properties
* **CollaborationIdentifier**: string (ReadOnly): The collaboration ID of the collaboration that contains the ML input channel.
* **ConfiguredModelAlgorithmAssociations**: string[] (ReadOnly): The configured model algorithm associations that were used to create the ML input channel.
* **CreateTime**: string (ReadOnly): The time at which the ML input channel was created.
* **Description**: string (ReadOnly): The description of the ML input channel.
* **InputChannel**: [InputChannel](#inputchannel) (ReadOnly)
* **KmsKeyArn**: string (ReadOnly): The ARN of the KMS key that was used to create the ML input channel.
* **MembershipIdentifier**: string (ReadOnly): The membership ID of the membership that contains the ML input channel.
* **MlInputChannelArn**: string (Identifier): The Amazon Resource Name (ARN) of the ML input channel.
* **Name**: string (ReadOnly): The name of the ML input channel.
* **NumberOfFiles**: int (ReadOnly): The number of files in the ML input channel.
* **NumberOfRecords**: int (ReadOnly): The number of records in the ML input channel.
* **PrivacyBudgets**: [PrivacyBudgets](#privacybudgets) (ReadOnly)
* **ProtectedQueryIdentifier**: string (ReadOnly): The ID of the protected query that was used to create the ML input channel.
* **RetentionInDays**: int (ReadOnly): The number of days to keep the data in the ML input channel.
* **SizeInGb**: int (ReadOnly): The size, in GB, of the ML input channel.
* **Status**: string (ReadOnly): The status of the ML input channel.
* **SyntheticDataConfiguration**: [SyntheticDataConfiguration](#syntheticdataconfiguration) (ReadOnly)
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of key-value pairs to apply to this resource.
* **UpdateTime**: string (ReadOnly): The most recent time at which the ML input channel was updated.

## AWS.CleanRoomsML/TrainedModelInferenceJobProperties
### Properties
* **ConfiguredModelAlgorithmAssociationArn**: string: The ARN of the configured model algorithm association used for this job.
* **CreateTime**: string (ReadOnly): The time at which the trained model inference job was created.
* **DataSource**: [ModelInferenceDataSource](#modelinferencedatasource): The data source used for the inference job.
* **Description**: string: The description of the trained model inference job.
* **MembershipIdentifier**: string: The membership ID that contains the trained model inference job.
* **Name**: string: The name of the trained model inference job.
* **OutputConfiguration**: [InferenceOutputConfiguration](#inferenceoutputconfiguration): The output configuration for the inference job.
* **ResourceConfig**: [InferenceResourceConfig](#inferenceresourceconfig): The resource configuration for the inference job.
* **Status**: string (ReadOnly): The status of the trained model inference job.
* **Tags**: [Tag](#tag)[]: Tags associated with the trained model inference job.
* **TrainedModelArn**: string: The ARN of the trained model used for this inference job.
* **TrainedModelInferenceJobArn**: string (Identifier): The ARN of the trained model inference job.
* **UpdateTime**: string (ReadOnly): The most recent time at which the trained model inference job was updated.

## AWS.CleanRoomsML/TrainedModelProperties
### Properties
* **CollaborationIdentifier**: string (ReadOnly): The collaboration ID of the trained model.
* **ConfiguredModelAlgorithmAssociationArn**: string (ReadOnly): The ARN of the configured model algorithm association.
* **CreateTime**: string (ReadOnly): The time at which the trained model was created.
* **DataChannels**: [ModelTrainingDataChannel](#modeltrainingdatachannel)[] (ReadOnly): The data channels for the trained model.
* **Description**: string (ReadOnly): The description of the trained model.
* **Environment**: [TrainedModel_Environment](#trainedmodelenvironment) (ReadOnly): The environment variables for the trained model.
* **Hyperparameters**: [TrainedModel_Hyperparameters](#trainedmodelhyperparameters) (ReadOnly): The hyperparameters for the trained model.
* **KmsKeyArn**: string (ReadOnly): The KMS key ARN used for encryption.
* **MembershipIdentifier**: string: The membership ID of the trained model.
* **Name**: string (ReadOnly): The name of the trained model.
* **ResourceConfig**: [ResourceConfig](#resourceconfig) (ReadOnly)
* **Status**: string (ReadOnly): The status of the trained model.
* **StoppingCondition**: [StoppingCondition](#stoppingcondition) (ReadOnly)
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of key-value pairs to apply to this resource.
* **TrainedModelArn**: string (Identifier): The ARN of the trained model.
* **TrainedModelId**: string (ReadOnly): The unique identifier of the trained model.
* **TrainingContainerImageDigest**: string (ReadOnly): The digest of the training container image.
* **TrainingInputMode**: string (ReadOnly): The training input mode.
* **UpdateTime**: string (ReadOnly): The time at which the trained model was last updated.

## AWS.CleanRoomsML/TrainingDatasetProperties
### Properties
* **Description**: string
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.
* **TrainingData**: [Dataset](#dataset)[] (Required)
* **TrainingDatasetArn**: string (ReadOnly, Identifier)

## ColumnClassificationDetails
### Properties
* **ColumnMapping**: [SyntheticDataColumnProperties](#syntheticdatacolumnproperties)[] (Required): A mapping that defines the classification of data columns for synthetic data generation.

## ColumnSchema
### Properties
* **ColumnName**: string (Required)
* **ColumnTypes**: string[] (Required)

## ComputeConfiguration
### Properties
* **Worker**: [WorkerComputeConfiguration](#workercomputeconfiguration) (Required)

## ConfiguredAudienceModelOutputConfig
### Properties
* **Destination**: [AudienceDestination](#audiencedestination) (Required)
* **RoleArn**: string (Required): The ARN of the IAM role that can write the Amazon S3 bucket.

## ContainerConfig
### Properties
* **Arguments**: string[]
* **Entrypoint**: string[]
* **ImageUri**: string (Required)
* **MetricDefinitions**: [MetricDefinition](#metricdefinition)[]

## CustomEntityConfig
### Properties
* **CustomDataIdentifiers**: string[] (Required)

## Dataset
### Properties
* **InputConfig**: [DatasetInputConfig](#datasetinputconfig) (Required)
* **Type**: string (Required)

## DatasetInputConfig
### Properties
* **DataSource**: [DataSource](#datasource) (Required)
* **Schema**: [ColumnSchema](#columnschema)[] (Required)

## DataSource
### Properties
* **GlueDataSource**: [GlueDataSource](#gluedatasource) (Required)

## GlueDataSource
### Properties
* **CatalogId**: string
* **DatabaseName**: string (Required)
* **TableName**: string (Required)

## InferenceContainerConfig
### Properties
* **ImageUri**: string (Required)

## InferenceOutputConfiguration
### Properties
* **Accept**: string
* **Members**: [InferenceReceiverMember](#inferencereceivermember)[] (Required)

## InferenceReceiverMember
### Properties
* **AccountId**: string (Required)

## InferenceResourceConfig
### Properties
* **InstanceCount**: int
* **InstanceType**: string (Required)

## InputChannel
### Properties
* **DataSource**: [InputChannelDataSource](#inputchanneldatasource) (Required)
* **RoleArn**: string (Required): The ARN of the role used to run the query specified in the dataSource field.

## InputChannelDataSource
### Properties
* **ProtectedQueryInputParameters**: [ProtectedQueryInputParameters](#protectedqueryinputparameters) (Required)

## LogRedactionConfiguration
### Properties
* **CustomEntityConfig**: [CustomEntityConfig](#customentityconfig)
* **EntitiesToRedact**: string[] (Required)

## LogsConfigurationPolicy
### Properties
* **AllowedAccountIds**: string[] (Required)
* **FilterPattern**: string
* **LogRedactionConfiguration**: [LogRedactionConfiguration](#logredactionconfiguration)
* **LogType**: string

## MetricDefinition
### Properties
* **Name**: string (Required)
* **Regex**: string (Required)

## MetricsConfigurationPolicy
### Properties
* **NoiseLevel**: string (Required)

## MLInputChannel_Parameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MLInputChannel_Properties
### Properties
* **Spark**: [MLInputChannel_Properties_Spark](#mlinputchannelpropertiesspark) (Required): The Spark configuration properties for SQL workloads.

## MLInputChannel_Properties_Spark
### Properties
### Additional Properties
* **Additional Properties Type**: string

## MLSyntheticDataParameters
### Properties
* **ColumnClassification**: [ColumnClassificationDetails](#columnclassificationdetails)
* **Epsilon**: int (Required): The epsilon value for differential privacy, which controls the privacy-utility tradeoff in synthetic data generation.
* **MaxMembershipInferenceAttackScore**: int (Required): The maximum acceptable score for membership inference attack vulnerability.

## ModelInferenceDataSource
### Properties
* **MlInputChannelArn**: string (Required)

## ModelTrainingDataChannel
### Properties
* **ChannelName**: string (Required)
* **MlInputChannelArn**: string (Required)
* **S3DataDistributionType**: string

## PrivacyBudgets
### Properties
* **AccessBudgets**: [AccessBudget](#accessbudget)[] (Required): A list of access budgets that apply to resources associated with this Clean Rooms ML input channel.

## PrivacyConfiguration
### Properties
* **Policies**: [PrivacyConfigurationPolicies](#privacyconfigurationpolicies) (Required)

## PrivacyConfigurationPolicies
### Properties
* **TrainedModelExports**: [TrainedModelExportsConfigurationPolicy](#trainedmodelexportsconfigurationpolicy)
* **TrainedModelInferenceJobs**: [TrainedModelInferenceJobsConfigurationPolicy](#trainedmodelinferencejobsconfigurationpolicy)
* **TrainedModels**: [TrainedModelsConfigurationPolicy](#trainedmodelsconfigurationpolicy)

## ProtectedQueryInputParameters
### Properties
* **ComputeConfiguration**: [ComputeConfiguration](#computeconfiguration)
* **ResultFormat**: string: The format in which the query results should be returned.
* **SqlParameters**: [ProtectedQuerySQLParameters](#protectedquerysqlparameters) (Required)

## ProtectedQuerySQLParameters
### Properties
* **AnalysisTemplateArn**: string: The ARN associated with the analysis template within a collaboration.
* **Parameters**: [MLInputChannel_Parameters](#mlinputchannelparameters): The protected query SQL parameters.
* **QueryString**: string: The query string to be submitted.

## RelevanceMetric
### Properties
* **AudienceSize**: [AudienceSize](#audiencesize) (Required)
* **Score**: int: The relevance score of the generated audience.

## ResourceConfig
### Properties
* **InstanceCount**: int
* **InstanceType**: string (Required)
* **VolumeSizeInGB**: int (Required)

## S3ConfigMap
### Properties
* **S3Uri**: string (Required): The Amazon S3 location URI.

## StoppingCondition
### Properties
* **MaxRuntimeInSeconds**: int

## SyntheticDataColumnProperties
### Properties
* **ColumnName**: string (Required): The name of the data column as it appears in the dataset.
* **ColumnType**: string (Required): The data type of the column, which determines how the synthetic data generation algorithm processes and synthesizes values for this column.
* **IsPredictiveValue**: bool (Required): Indicates if this column contains predictive values that should be treated as target variables in machine learning models.

## SyntheticDataConfiguration
### Properties
* **SyntheticDataParameters**: [MLSyntheticDataParameters](#mlsyntheticdataparameters) (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TrainedModel_Environment
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrainedModel_Hyperparameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TrainedModelArtifactMaxSize
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## TrainedModelExportsConfigurationPolicy
### Properties
* **FilesToExport**: string[] (Required)
* **MaxSize**: [TrainedModelExportsMaxSize](#trainedmodelexportsmaxsize) (Required)

## TrainedModelExportsMaxSize
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## TrainedModelInferenceJobsConfigurationPolicy
### Properties
* **ContainerLogs**: [LogsConfigurationPolicy](#logsconfigurationpolicy)[]
* **MaxOutputSize**: [TrainedModelInferenceMaxOutputSize](#trainedmodelinferencemaxoutputsize)

## TrainedModelInferenceMaxOutputSize
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## TrainedModelsConfigurationPolicy
### Properties
* **ContainerLogs**: [LogsConfigurationPolicy](#logsconfigurationpolicy)[]
* **ContainerMetrics**: [MetricsConfigurationPolicy](#metricsconfigurationpolicy)
* **MaxArtifactSize**: [TrainedModelArtifactMaxSize](#trainedmodelartifactmaxsize)

## WorkerComputeConfiguration
### Properties
* **Number**: int: The number of compute workers that are used.
* **Properties**: [MLInputChannel_Properties](#mlinputchannelproperties): The configuration properties for the worker compute environment.
* **Type**: string: The instance type of the compute workers that are used.

