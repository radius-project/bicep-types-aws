# AWS.KinesisFirehose @ default

## Resource AWS.KinesisFirehose/DeliveryStream@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KinesisFirehose/DeliveryStreamProperties](#awskinesisfirehosedeliverystreamproperties): properties of the resource

## AWS.KinesisFirehose/DeliveryStreamProperties
### Properties
* **AmazonopensearchserviceDestinationConfiguration**: [AmazonopensearchserviceDestinationConfiguration](#amazonopensearchservicedestinationconfiguration)
* **Arn**: string (ReadOnly)
* **DeliveryStreamEncryptionConfigurationInput**: [DeliveryStreamEncryptionConfigurationInput](#deliverystreamencryptionconfigurationinput)
* **DeliveryStreamName**: string
* **DeliveryStreamType**: string
* **ElasticsearchDestinationConfiguration**: [ElasticsearchDestinationConfiguration](#elasticsearchdestinationconfiguration)
* **ExtendedS3DestinationConfiguration**: [ExtendedS3DestinationConfiguration](#extendeds3destinationconfiguration)
* **HttpEndpointDestinationConfiguration**: [HttpEndpointDestinationConfiguration](#httpendpointdestinationconfiguration)
* **KinesisStreamSourceConfiguration**: [KinesisStreamSourceConfiguration](#kinesisstreamsourceconfiguration)
* **RedshiftDestinationConfiguration**: [RedshiftDestinationConfiguration](#redshiftdestinationconfiguration)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **SplunkDestinationConfiguration**: [SplunkDestinationConfiguration](#splunkdestinationconfiguration)
* **Tags**: [Tag](#tag)[]

## AmazonopensearchserviceDestinationConfiguration
### Properties
* **BufferingHints**: [AmazonopensearchserviceBufferingHints](#amazonopensearchservicebufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ClusterEndpoint**: string
* **DomainARN**: string
* **IndexName**: string
* **IndexRotationPeriod**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [AmazonopensearchserviceRetryOptions](#amazonopensearchserviceretryoptions)
* **RoleARN**: string
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **TypeName**: string
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## AmazonopensearchserviceBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## CloudWatchLoggingOptions
### Properties
* **Enabled**: bool
* **LogGroupName**: string
* **LogStreamName**: string

## ProcessingConfiguration
### Properties
* **Enabled**: bool
* **Processors**: [Processor](#processor)[]

## Processor
### Properties
* **Parameters**: [ProcessorParameter](#processorparameter)[]
* **Type**: string

## ProcessorParameter
### Properties
* **ParameterName**: string
* **ParameterValue**: string

## AmazonopensearchserviceRetryOptions
### Properties
* **DurationInSeconds**: int

## S3DestinationConfiguration
### Properties
* **BucketARN**: string
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **CompressionFormat**: string
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ErrorOutputPrefix**: string
* **Prefix**: string
* **RoleARN**: string

## BufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## EncryptionConfiguration
### Properties
* **KMSEncryptionConfig**: [KMSEncryptionConfig](#kmsencryptionconfig)
* **NoEncryptionConfig**: string

## KMSEncryptionConfig
### Properties
* **AWSKMSKeyARN**: string

## VpcConfiguration
### Properties
* **RoleARN**: string
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## DeliveryStreamEncryptionConfigurationInput
### Properties
* **KeyARN**: string
* **KeyType**: string

## ElasticsearchDestinationConfiguration
### Properties
* **BufferingHints**: [ElasticsearchBufferingHints](#elasticsearchbufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ClusterEndpoint**: string
* **DomainARN**: string
* **IndexName**: string
* **IndexRotationPeriod**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [ElasticsearchRetryOptions](#elasticsearchretryoptions)
* **RoleARN**: string
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **TypeName**: string
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## ElasticsearchBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## ElasticsearchRetryOptions
### Properties
* **DurationInSeconds**: int

## ExtendedS3DestinationConfiguration
### Properties
* **BucketARN**: string
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **CompressionFormat**: string
* **DataFormatConversionConfiguration**: [DataFormatConversionConfiguration](#dataformatconversionconfiguration)
* **DynamicPartitioningConfiguration**: [DynamicPartitioningConfiguration](#dynamicpartitioningconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ErrorOutputPrefix**: string
* **Prefix**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RoleARN**: string
* **S3BackupConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **S3BackupMode**: string

## DataFormatConversionConfiguration
### Properties
* **Enabled**: bool
* **InputFormatConfiguration**: [InputFormatConfiguration](#inputformatconfiguration)
* **OutputFormatConfiguration**: [OutputFormatConfiguration](#outputformatconfiguration)
* **SchemaConfiguration**: [SchemaConfiguration](#schemaconfiguration)

## InputFormatConfiguration
### Properties
* **Deserializer**: [Deserializer](#deserializer)

## Deserializer
### Properties
* **HiveJsonSerDe**: [HiveJsonSerDe](#hivejsonserde)
* **OpenXJsonSerDe**: [OpenXJsonSerDe](#openxjsonserde)

## HiveJsonSerDe
### Properties
* **TimestampFormats**: string[]

## OpenXJsonSerDe
### Properties
* **CaseInsensitive**: bool
* **ColumnToJsonKeyMappings**: [DeliveryStream_ColumnToJsonKeyMappings](#deliverystreamcolumntojsonkeymappings)
* **ConvertDotsInJsonKeysToUnderscores**: bool

## DeliveryStream_ColumnToJsonKeyMappings
### Properties

## OutputFormatConfiguration
### Properties
* **Serializer**: [Serializer](#serializer)

## Serializer
### Properties
* **OrcSerDe**: [OrcSerDe](#orcserde)
* **ParquetSerDe**: [ParquetSerDe](#parquetserde)

## OrcSerDe
### Properties
* **BlockSizeBytes**: int
* **BloomFilterColumns**: string[]
* **BloomFilterFalsePositiveProbability**: int
* **Compression**: string
* **DictionaryKeyThreshold**: int
* **EnablePadding**: bool
* **FormatVersion**: string
* **PaddingTolerance**: int
* **RowIndexStride**: int
* **StripeSizeBytes**: int

## ParquetSerDe
### Properties
* **BlockSizeBytes**: int
* **Compression**: string
* **EnableDictionaryCompression**: bool
* **MaxPaddingBytes**: int
* **PageSizeBytes**: int
* **WriterVersion**: string

## SchemaConfiguration
### Properties
* **CatalogId**: string
* **DatabaseName**: string
* **Region**: string
* **RoleARN**: string
* **TableName**: string
* **VersionId**: string

## DynamicPartitioningConfiguration
### Properties
* **Enabled**: bool
* **RetryOptions**: [RetryOptions](#retryoptions)

## RetryOptions
### Properties
* **DurationInSeconds**: int

## HttpEndpointDestinationConfiguration
### Properties
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **EndpointConfiguration**: [HttpEndpointConfiguration](#httpendpointconfiguration)
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RequestConfiguration**: [HttpEndpointRequestConfiguration](#httpendpointrequestconfiguration)
* **RetryOptions**: [RetryOptions](#retryoptions)
* **RoleARN**: string
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration)

## HttpEndpointConfiguration
### Properties
* **AccessKey**: string
* **Name**: string
* **Url**: string

## HttpEndpointRequestConfiguration
### Properties
* **CommonAttributes**: [HttpEndpointCommonAttribute](#httpendpointcommonattribute)[]
* **ContentEncoding**: string

## HttpEndpointCommonAttribute
### Properties
* **AttributeName**: string
* **AttributeValue**: string

## KinesisStreamSourceConfiguration
### Properties
* **KinesisStreamARN**: string
* **RoleARN**: string

## RedshiftDestinationConfiguration
### Properties
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ClusterJDBCURL**: string
* **CopyCommand**: [CopyCommand](#copycommand)
* **Password**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [RedshiftRetryOptions](#redshiftretryoptions)
* **RoleARN**: string
* **S3BackupConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **Username**: string

## CopyCommand
### Properties
* **CopyOptions**: string
* **DataTableColumns**: string
* **DataTableName**: string

## RedshiftRetryOptions
### Properties
* **DurationInSeconds**: int

## SplunkDestinationConfiguration
### Properties
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **HECAcknowledgmentTimeoutInSeconds**: int
* **HECEndpoint**: string
* **HECEndpointType**: string
* **HECToken**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [SplunkRetryOptions](#splunkretryoptions)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration)

## SplunkRetryOptions
### Properties
* **DurationInSeconds**: int

## Tag
### Properties
* **Key**: string
* **Value**: string

