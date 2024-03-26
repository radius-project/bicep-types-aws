# AWS.IoTAnalytics @ default

## Resource AWS.IoTAnalytics/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTAnalytics/ChannelProperties](#awsiotanalyticschannelproperties): properties of the resource

## Resource AWS.IoTAnalytics/Dataset@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTAnalytics/DatasetProperties](#awsiotanalyticsdatasetproperties) (Required): properties of the resource

## Resource AWS.IoTAnalytics/Datastore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTAnalytics/DatastoreProperties](#awsiotanalyticsdatastoreproperties): properties of the resource

## Resource AWS.IoTAnalytics/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTAnalytics/PipelineProperties](#awsiotanalyticspipelineproperties) (Required): properties of the resource

## Action
### Properties
* **ActionName**: string (Required)
* **ContainerAction**: [ContainerAction](#containeraction)
* **QueryAction**: [QueryAction](#queryaction)

## Activity
### Properties
* **AddAttributes**: [AddAttributes](#addattributes)
* **Channel**: [Channel](#channel)
* **Datastore**: [Datastore](#datastore)
* **DeviceRegistryEnrich**: [DeviceRegistryEnrich](#deviceregistryenrich)
* **DeviceShadowEnrich**: [DeviceShadowEnrich](#deviceshadowenrich)
* **Filter**: [Filter](#filter)
* **Lambda**: [Lambda](#lambda)
* **Math**: [Math](#math)
* **RemoveAttributes**: [RemoveAttributes](#removeattributes)
* **SelectAttributes**: [SelectAttributes](#selectattributes)

## AddAttributes
### Properties
* **Attributes**: [Pipeline_Attributes](#pipelineattributes) (Required)
* **Name**: string (Required)
* **Next**: string

## AWS.IoTAnalytics/ChannelProperties
### Properties
* **ChannelName**: string (Identifier)
* **ChannelStorage**: [ChannelStorage](#channelstorage)
* **Id**: string (ReadOnly)
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod)
* **Tags**: [Tag](#tag)[]

## AWS.IoTAnalytics/DatasetProperties
### Properties
* **Actions**: [Action](#action)[] (Required)
* **ContentDeliveryRules**: [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)[]
* **DatasetName**: string (Identifier)
* **Id**: string (ReadOnly)
* **LateDataRules**: [LateDataRule](#latedatarule)[]
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod)
* **Tags**: [Tag](#tag)[]
* **Triggers**: [Trigger](#trigger)[]
* **VersioningConfiguration**: [VersioningConfiguration](#versioningconfiguration)

## AWS.IoTAnalytics/DatastoreProperties
### Properties
* **DatastoreName**: string (Identifier)
* **DatastorePartitions**: [DatastorePartitions](#datastorepartitions)
* **DatastoreStorage**: [DatastoreStorage](#datastorestorage)
* **FileFormatConfiguration**: [FileFormatConfiguration](#fileformatconfiguration)
* **Id**: string (ReadOnly)
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod)
* **Tags**: [Tag](#tag)[]

## AWS.IoTAnalytics/PipelineProperties
### Properties
* **Id**: string (ReadOnly)
* **PipelineActivities**: [Activity](#activity)[] (Required)
* **PipelineName**: string (Identifier)
* **Tags**: [Tag](#tag)[]

## Channel
### Properties
* **ChannelName**: string (Required)
* **Name**: string (Required)
* **Next**: string

## ChannelStorage
### Properties
* **CustomerManagedS3**: [CustomerManagedS3](#customermanageds3)
* **ServiceManagedS3**: [ServiceManagedS3](#servicemanageds3)

## Column
### Properties
* **Name**: string (Required)
* **Type**: string (Required)

## ContainerAction
### Properties
* **ExecutionRoleArn**: string (Required)
* **Image**: string (Required)
* **ResourceConfiguration**: [ResourceConfiguration](#resourceconfiguration) (Required)
* **Variables**: [Variable](#variable)[]

## CustomerManagedS3
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string
* **RoleArn**: string (Required)

## CustomerManagedS3Storage
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string

## DatasetContentDeliveryRule
### Properties
* **Destination**: [DatasetContentDeliveryRuleDestination](#datasetcontentdeliveryruledestination) (Required)
* **EntryName**: string

## DatasetContentDeliveryRuleDestination
### Properties
* **IotEventsDestinationConfiguration**: [IotEventsDestinationConfiguration](#ioteventsdestinationconfiguration)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)

## DatasetContentVersionValue
### Properties
* **DatasetName**: string (Required, Identifier)

## Datastore
### Properties
* **DatastoreName**: string (Required)
* **Name**: string (Required)

## DatastorePartition
### Properties
* **Partition**: [Partition](#partition)
* **TimestampPartition**: [TimestampPartition](#timestamppartition)

## DatastorePartitions
### Properties
* **Partitions**: [DatastorePartition](#datastorepartition)[]

## DatastoreStorage
### Properties
* **CustomerManagedS3**: [CustomerManagedS3](#customermanageds3)
* **IotSiteWiseMultiLayerStorage**: [IotSiteWiseMultiLayerStorage](#iotsitewisemultilayerstorage)
* **ServiceManagedS3**: [ServiceManagedS3](#servicemanageds3)

## DeltaTime
### Properties
* **OffsetSeconds**: int (Required)
* **TimeExpression**: string (Required)

## DeltaTimeSessionWindowConfiguration
### Properties
* **TimeoutInMinutes**: int (Required)

## DeviceRegistryEnrich
### Properties
* **Attribute**: string (Required)
* **Name**: string (Required)
* **Next**: string
* **RoleArn**: string (Required)
* **ThingName**: string (Required)

## DeviceShadowEnrich
### Properties
* **Attribute**: string (Required)
* **Name**: string (Required)
* **Next**: string
* **RoleArn**: string (Required)
* **ThingName**: string (Required)

## FileFormatConfiguration
### Properties
* **JsonConfiguration**: [JsonConfiguration](#jsonconfiguration)
* **ParquetConfiguration**: [ParquetConfiguration](#parquetconfiguration)

## Filter
### Properties
* **DeltaTime**: [DeltaTime](#deltatime)

## GlueConfiguration
### Properties
* **DatabaseName**: string (Required)
* **TableName**: string (Required)

## IotEventsDestinationConfiguration
### Properties
* **InputName**: string (Required)
* **RoleArn**: string (Required)

## IotSiteWiseMultiLayerStorage
### Properties
* **CustomerManagedS3Storage**: [CustomerManagedS3Storage](#customermanageds3storage)

## JsonConfiguration
### Properties

## Lambda
### Properties
* **BatchSize**: int (Required)
* **LambdaName**: string (Required)
* **Name**: string (Required)
* **Next**: string

## LateDataRule
### Properties
* **RuleConfiguration**: [LateDataRuleConfiguration](#latedataruleconfiguration) (Required)
* **RuleName**: string

## LateDataRuleConfiguration
### Properties
* **DeltaTimeSessionWindowConfiguration**: [DeltaTimeSessionWindowConfiguration](#deltatimesessionwindowconfiguration)

## Math
### Properties
* **Attribute**: string (Required)
* **Math**: string (Required)
* **Name**: string (Required)
* **Next**: string

## OutputFileUriValue
### Properties
* **FileName**: string (Required)

## ParquetConfiguration
### Properties
* **SchemaDefinition**: [SchemaDefinition](#schemadefinition)

## Partition
### Properties
* **AttributeName**: string (Required)

## Pipeline_Attributes
### Properties

## QueryAction
### Properties
* **Filters**: [Filter](#filter)[]
* **SqlQuery**: string (Required)

## RemoveAttributes
### Properties
* **Attributes**: string[] (Required)
* **Name**: string (Required)
* **Next**: string

## ResourceConfiguration
### Properties
* **ComputeType**: string (Required)
* **VolumeSizeInGB**: int (Required)

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## S3DestinationConfiguration
### Properties
* **Bucket**: string (Required)
* **GlueConfiguration**: [GlueConfiguration](#glueconfiguration)
* **Key**: string (Required)
* **RoleArn**: string (Required)

## Schedule
### Properties
* **ScheduleExpression**: string (Required)

## SchemaDefinition
### Properties
* **Columns**: [Column](#column)[]

## SelectAttributes
### Properties
* **Attributes**: string[] (Required)
* **Name**: string (Required)
* **Next**: string

## ServiceManagedS3
### Properties

## ServiceManagedS3
### Properties

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

## TimestampPartition
### Properties
* **AttributeName**: string (Required)
* **TimestampFormat**: string

## Trigger
### Properties
* **Schedule**: [Schedule](#schedule)
* **TriggeringDataset**: [TriggeringDataset](#triggeringdataset)

## TriggeringDataset
### Properties
* **DatasetName**: string (Required, Identifier)

## Variable
### Properties
* **DatasetContentVersionValue**: [DatasetContentVersionValue](#datasetcontentversionvalue)
* **DoubleValue**: int
* **OutputFileUriValue**: [OutputFileUriValue](#outputfileurivalue)
* **StringValue**: string
* **VariableName**: string (Required)

## VersioningConfiguration
### Properties
* **MaxVersions**: int
* **Unlimited**: bool

