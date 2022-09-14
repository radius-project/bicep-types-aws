# AWS.IoTAnalytics @ default

## Resource AWS.IoTAnalytics/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTAnalytics/ChannelProperties](#awsiotanalyticschannelproperties): properties of the resource

## Resource AWS.IoTAnalytics/Dataset@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTAnalytics/DatasetProperties](#awsiotanalyticsdatasetproperties) (Required): properties of the resource

## Resource AWS.IoTAnalytics/Datastore@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTAnalytics/DatastoreProperties](#awsiotanalyticsdatastoreproperties): properties of the resource

## Resource AWS.IoTAnalytics/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTAnalytics/PipelineProperties](#awsiotanalyticspipelineproperties) (Required): properties of the resource

## AWS.IoTAnalytics/ChannelProperties
### Properties
* **ChannelName**: string
* **ChannelStorage**: [ChannelStorage](#channelstorage)
* **Id**: string (ReadOnly)
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod)
* **Tags**: [Tag](#tag)[]

## ChannelStorage
### Properties
* **CustomerManagedS3**: [CustomerManagedS3](#customermanageds3)
* **ServiceManagedS3**: [ServiceManagedS3](#servicemanageds3)

## CustomerManagedS3
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string
* **RoleArn**: string (Required)

## ServiceManagedS3
### Properties

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTAnalytics/DatasetProperties
### Properties
* **Actions**: [Action](#action)[] (Required)
* **ContentDeliveryRules**: [DatasetContentDeliveryRule](#datasetcontentdeliveryrule)[]
* **DatasetName**: string
* **Id**: string (ReadOnly)
* **LateDataRules**: [LateDataRule](#latedatarule)[]
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod)
* **Tags**: [Tag](#tag)[]
* **Triggers**: [Trigger](#trigger)[]
* **VersioningConfiguration**: [VersioningConfiguration](#versioningconfiguration)

## Action
### Properties
* **ActionName**: string (Required)
* **ContainerAction**: [ContainerAction](#containeraction)
* **QueryAction**: [QueryAction](#queryaction)

## ContainerAction
### Properties
* **ExecutionRoleArn**: string (Required)
* **Image**: string (Required)
* **ResourceConfiguration**: [ResourceConfiguration](#resourceconfiguration) (Required)
* **Variables**: [Variable](#variable)[]

## ResourceConfiguration
### Properties
* **ComputeType**: string (Required)
* **VolumeSizeInGB**: int (Required)

## Variable
### Properties
* **DatasetContentVersionValue**: [DatasetContentVersionValue](#datasetcontentversionvalue)
* **DoubleValue**: int
* **OutputFileUriValue**: [OutputFileUriValue](#outputfileurivalue)
* **StringValue**: string
* **VariableName**: string (Required)

## DatasetContentVersionValue
### Properties
* **DatasetName**: string (Required)

## OutputFileUriValue
### Properties
* **FileName**: string (Required)

## QueryAction
### Properties
* **Filters**: [Filter](#filter)[]
* **SqlQuery**: string (Required)

## Filter
### Properties
* **DeltaTime**: [DeltaTime](#deltatime)

## DeltaTime
### Properties
* **OffsetSeconds**: int (Required)
* **TimeExpression**: string (Required)

## DatasetContentDeliveryRule
### Properties
* **Destination**: [DatasetContentDeliveryRuleDestination](#datasetcontentdeliveryruledestination) (Required)
* **EntryName**: string

## DatasetContentDeliveryRuleDestination
### Properties
* **IotEventsDestinationConfiguration**: [IotEventsDestinationConfiguration](#ioteventsdestinationconfiguration)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)

## IotEventsDestinationConfiguration
### Properties
* **InputName**: string (Required)
* **RoleArn**: string (Required)

## S3DestinationConfiguration
### Properties
* **Bucket**: string (Required)
* **GlueConfiguration**: [GlueConfiguration](#glueconfiguration)
* **Key**: string (Required)
* **RoleArn**: string (Required)

## GlueConfiguration
### Properties
* **DatabaseName**: string (Required)
* **TableName**: string (Required)

## LateDataRule
### Properties
* **RuleConfiguration**: [LateDataRuleConfiguration](#latedataruleconfiguration) (Required)
* **RuleName**: string

## LateDataRuleConfiguration
### Properties
* **DeltaTimeSessionWindowConfiguration**: [DeltaTimeSessionWindowConfiguration](#deltatimesessionwindowconfiguration)

## DeltaTimeSessionWindowConfiguration
### Properties
* **TimeoutInMinutes**: int (Required)

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Trigger
### Properties
* **Schedule**: [Schedule](#schedule)
* **TriggeringDataset**: [TriggeringDataset](#triggeringdataset)

## Schedule
### Properties
* **ScheduleExpression**: string (Required)

## TriggeringDataset
### Properties
* **DatasetName**: string (Required)

## VersioningConfiguration
### Properties
* **MaxVersions**: int
* **Unlimited**: bool

## AWS.IoTAnalytics/DatastoreProperties
### Properties
* **DatastoreName**: string
* **DatastorePartitions**: [DatastorePartitions](#datastorepartitions)
* **DatastoreStorage**: [DatastoreStorage](#datastorestorage)
* **FileFormatConfiguration**: [FileFormatConfiguration](#fileformatconfiguration)
* **Id**: string (ReadOnly)
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod)
* **Tags**: [Tag](#tag)[]

## DatastorePartitions
### Properties
* **Partitions**: [DatastorePartition](#datastorepartition)[]

## DatastorePartition
### Properties
* **Partition**: [Partition](#partition)
* **TimestampPartition**: [TimestampPartition](#timestamppartition)

## Partition
### Properties
* **AttributeName**: string (Required)

## TimestampPartition
### Properties
* **AttributeName**: string (Required)
* **TimestampFormat**: string

## DatastoreStorage
### Properties
* **CustomerManagedS3**: [CustomerManagedS3](#customermanageds3)
* **IotSiteWiseMultiLayerStorage**: [IotSiteWiseMultiLayerStorage](#iotsitewisemultilayerstorage)
* **ServiceManagedS3**: [ServiceManagedS3](#servicemanageds3)

## CustomerManagedS3
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string
* **RoleArn**: string (Required)

## IotSiteWiseMultiLayerStorage
### Properties
* **CustomerManagedS3Storage**: [CustomerManagedS3Storage](#customermanageds3storage)

## CustomerManagedS3Storage
### Properties
* **Bucket**: string (Required)
* **KeyPrefix**: string

## ServiceManagedS3
### Properties

## FileFormatConfiguration
### Properties
* **JsonConfiguration**: [JsonConfiguration](#jsonconfiguration)
* **ParquetConfiguration**: [ParquetConfiguration](#parquetconfiguration)

## JsonConfiguration
### Properties

## ParquetConfiguration
### Properties
* **SchemaDefinition**: [SchemaDefinition](#schemadefinition)

## SchemaDefinition
### Properties
* **Columns**: [Column](#column)[]

## Column
### Properties
* **Name**: string (Required)
* **Type**: string (Required)

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTAnalytics/PipelineProperties
### Properties
* **Id**: string (ReadOnly)
* **PipelineActivities**: [Activity](#activity)[] (Required)
* **PipelineName**: string
* **Tags**: [Tag](#tag)[]

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

## Pipeline_Attributes
### Properties

## Channel
### Properties
* **ChannelName**: string (Required)
* **Name**: string (Required)
* **Next**: string

## Datastore
### Properties
* **DatastoreName**: string (Required)
* **Name**: string (Required)

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

## Filter
### Properties
* **Filter**: string (Required)
* **Name**: string (Required)
* **Next**: string

## Lambda
### Properties
* **BatchSize**: int (Required)
* **LambdaName**: string (Required)
* **Name**: string (Required)
* **Next**: string

## Math
### Properties
* **Attribute**: string (Required)
* **Math**: string (Required)
* **Name**: string (Required)
* **Next**: string

## RemoveAttributes
### Properties
* **Attributes**: string[] (Required)
* **Name**: string (Required)
* **Next**: string

## SelectAttributes
### Properties
* **Attributes**: string[] (Required)
* **Name**: string (Required)
* **Next**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

