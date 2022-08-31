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
* **properties**: [AWS.IoTAnalytics/DatasetProperties](#awsiotanalyticsdatasetproperties): properties of the resource

## Resource AWS.IoTAnalytics/Datastore@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTAnalytics/DatastoreProperties](#awsiotanalyticsdatastoreproperties): properties of the resource

## Resource AWS.IoTAnalytics/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTAnalytics/PipelineProperties](#awsiotanalyticspipelineproperties): properties of the resource

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
* **Bucket**: string
* **KeyPrefix**: string
* **RoleArn**: string

## ServiceManagedS3
### Properties

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoTAnalytics/DatasetProperties
### Properties
* **Actions**: [Action](#action)[]
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
* **ActionName**: string
* **ContainerAction**: [ContainerAction](#containeraction)
* **QueryAction**: [QueryAction](#queryaction)

## ContainerAction
### Properties
* **ExecutionRoleArn**: string
* **Image**: string
* **ResourceConfiguration**: [ResourceConfiguration](#resourceconfiguration)
* **Variables**: [Variable](#variable)[]

## ResourceConfiguration
### Properties
* **ComputeType**: string
* **VolumeSizeInGB**: int

## Variable
### Properties
* **DatasetContentVersionValue**: [DatasetContentVersionValue](#datasetcontentversionvalue)
* **DoubleValue**: int
* **OutputFileUriValue**: [OutputFileUriValue](#outputfileurivalue)
* **StringValue**: string
* **VariableName**: string

## DatasetContentVersionValue
### Properties
* **DatasetName**: string

## OutputFileUriValue
### Properties
* **FileName**: string

## QueryAction
### Properties
* **Filters**: [Filter](#filter)[]
* **SqlQuery**: string

## Filter
### Properties
* **DeltaTime**: [DeltaTime](#deltatime)

## DeltaTime
### Properties
* **OffsetSeconds**: int
* **TimeExpression**: string

## DatasetContentDeliveryRule
### Properties
* **Destination**: [DatasetContentDeliveryRuleDestination](#datasetcontentdeliveryruledestination)
* **EntryName**: string

## DatasetContentDeliveryRuleDestination
### Properties
* **IotEventsDestinationConfiguration**: [IotEventsDestinationConfiguration](#ioteventsdestinationconfiguration)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)

## IotEventsDestinationConfiguration
### Properties
* **InputName**: string
* **RoleArn**: string

## S3DestinationConfiguration
### Properties
* **Bucket**: string
* **GlueConfiguration**: [GlueConfiguration](#glueconfiguration)
* **Key**: string
* **RoleArn**: string

## GlueConfiguration
### Properties
* **DatabaseName**: string
* **TableName**: string

## LateDataRule
### Properties
* **RuleConfiguration**: [LateDataRuleConfiguration](#latedataruleconfiguration)
* **RuleName**: string

## LateDataRuleConfiguration
### Properties
* **DeltaTimeSessionWindowConfiguration**: [DeltaTimeSessionWindowConfiguration](#deltatimesessionwindowconfiguration)

## DeltaTimeSessionWindowConfiguration
### Properties
* **TimeoutInMinutes**: int

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## Tag
### Properties
* **Key**: string
* **Value**: string

## Trigger
### Properties
* **Schedule**: [Schedule](#schedule)
* **TriggeringDataset**: [TriggeringDataset](#triggeringdataset)

## Schedule
### Properties
* **ScheduleExpression**: string

## TriggeringDataset
### Properties
* **DatasetName**: string

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
* **AttributeName**: string

## TimestampPartition
### Properties
* **AttributeName**: string
* **TimestampFormat**: string

## DatastoreStorage
### Properties
* **CustomerManagedS3**: [CustomerManagedS3](#customermanageds3)
* **IotSiteWiseMultiLayerStorage**: [IotSiteWiseMultiLayerStorage](#iotsitewisemultilayerstorage)
* **ServiceManagedS3**: [ServiceManagedS3](#servicemanageds3)

## CustomerManagedS3
### Properties
* **Bucket**: string
* **KeyPrefix**: string
* **RoleArn**: string

## IotSiteWiseMultiLayerStorage
### Properties
* **CustomerManagedS3Storage**: [CustomerManagedS3Storage](#customermanageds3storage)

## CustomerManagedS3Storage
### Properties
* **Bucket**: string
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
* **Name**: string
* **Type**: string

## RetentionPeriod
### Properties
* **NumberOfDays**: int
* **Unlimited**: bool

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoTAnalytics/PipelineProperties
### Properties
* **Id**: string (ReadOnly)
* **PipelineActivities**: [Activity](#activity)[]
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
* **Attributes**: [Pipeline_Attributes](#pipelineattributes)
* **Name**: string
* **Next**: string

## Pipeline_Attributes
### Properties

## Channel
### Properties
* **ChannelName**: string
* **Name**: string
* **Next**: string

## Datastore
### Properties
* **DatastoreName**: string
* **Name**: string

## DeviceRegistryEnrich
### Properties
* **Attribute**: string
* **Name**: string
* **Next**: string
* **RoleArn**: string
* **ThingName**: string

## DeviceShadowEnrich
### Properties
* **Attribute**: string
* **Name**: string
* **Next**: string
* **RoleArn**: string
* **ThingName**: string

## Filter
### Properties
* **Filter**: string
* **Name**: string
* **Next**: string

## Lambda
### Properties
* **BatchSize**: int
* **LambdaName**: string
* **Name**: string
* **Next**: string

## Math
### Properties
* **Attribute**: string
* **Math**: string
* **Name**: string
* **Next**: string

## RemoveAttributes
### Properties
* **Attributes**: string[]
* **Name**: string
* **Next**: string

## SelectAttributes
### Properties
* **Attributes**: string[]
* **Name**: string
* **Next**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

