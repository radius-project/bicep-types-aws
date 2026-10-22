# AWS.CleanRoomsML @ default

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

## Resource AWS.CleanRoomsML/TrainingDataset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/TrainingDatasetProperties](#awscleanroomsmltrainingdatasetproperties) (Required, Identifier): properties of the resource

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

## AWS.CleanRoomsML/TrainingDatasetProperties
### Properties
* **Description**: string
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.
* **TrainingData**: [Dataset](#dataset)[] (Required)
* **TrainingDatasetArn**: string (ReadOnly, Identifier)

## ColumnSchema
### Properties
* **ColumnName**: string (Required)
* **ColumnTypes**: string[] (Required)

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

## PrivacyConfiguration
### Properties
* **Policies**: [PrivacyConfigurationPolicies](#privacyconfigurationpolicies) (Required)

## PrivacyConfigurationPolicies
### Properties
* **TrainedModelExports**: [TrainedModelExportsConfigurationPolicy](#trainedmodelexportsconfigurationpolicy)
* **TrainedModelInferenceJobs**: [TrainedModelInferenceJobsConfigurationPolicy](#trainedmodelinferencejobsconfigurationpolicy)
* **TrainedModels**: [TrainedModelsConfigurationPolicy](#trainedmodelsconfigurationpolicy)

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

