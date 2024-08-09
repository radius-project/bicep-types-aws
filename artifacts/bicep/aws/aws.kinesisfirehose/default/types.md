# AWS.KinesisFirehose @ default

## Resource AWS.KinesisFirehose/DeliveryStream@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KinesisFirehose/DeliveryStreamProperties](#awskinesisfirehosedeliverystreamproperties) (Identifier): properties of the resource

## AmazonOpenSearchServerlessBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## AmazonOpenSearchServerlessDestinationConfiguration
### Properties
* **BufferingHints**: [AmazonOpenSearchServerlessBufferingHints](#amazonopensearchserverlessbufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **CollectionEndpoint**: string
* **IndexName**: string (Required)
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [AmazonOpenSearchServerlessRetryOptions](#amazonopensearchserverlessretryoptions)
* **RoleARN**: string (Required)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## AmazonOpenSearchServerlessRetryOptions
### Properties
* **DurationInSeconds**: int

## AmazonopensearchserviceBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## AmazonopensearchserviceDestinationConfiguration
### Properties
* **BufferingHints**: [AmazonopensearchserviceBufferingHints](#amazonopensearchservicebufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ClusterEndpoint**: string
* **DocumentIdOptions**: [DocumentIdOptions](#documentidoptions)
* **DomainARN**: string
* **IndexName**: string (Required)
* **IndexRotationPeriod**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [AmazonopensearchserviceRetryOptions](#amazonopensearchserviceretryoptions)
* **RoleARN**: string (Required)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **TypeName**: string
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## AmazonopensearchserviceRetryOptions
### Properties
* **DurationInSeconds**: int

## AuthenticationConfiguration
### Properties
* **Connectivity**: string (Required)
* **RoleARN**: string (Required)

## AWS.KinesisFirehose/DeliveryStreamProperties
### Properties
* **AmazonOpenSearchServerlessDestinationConfiguration**: [AmazonOpenSearchServerlessDestinationConfiguration](#amazonopensearchserverlessdestinationconfiguration)
* **AmazonopensearchserviceDestinationConfiguration**: [AmazonopensearchserviceDestinationConfiguration](#amazonopensearchservicedestinationconfiguration)
* **Arn**: string (ReadOnly)
* **DeliveryStreamEncryptionConfigurationInput**: [DeliveryStreamEncryptionConfigurationInput](#deliverystreamencryptionconfigurationinput)
* **DeliveryStreamName**: string (Identifier)
* **DeliveryStreamType**: string
* **ElasticsearchDestinationConfiguration**: [ElasticsearchDestinationConfiguration](#elasticsearchdestinationconfiguration)
* **ExtendedS3DestinationConfiguration**: [ExtendedS3DestinationConfiguration](#extendeds3destinationconfiguration)
* **HttpEndpointDestinationConfiguration**: [HttpEndpointDestinationConfiguration](#httpendpointdestinationconfiguration)
* **IcebergDestinationConfiguration**: [IcebergDestinationConfiguration](#icebergdestinationconfiguration)
* **KinesisStreamSourceConfiguration**: [KinesisStreamSourceConfiguration](#kinesisstreamsourceconfiguration)
* **MSKSourceConfiguration**: [MSKSourceConfiguration](#msksourceconfiguration)
* **RedshiftDestinationConfiguration**: [RedshiftDestinationConfiguration](#redshiftdestinationconfiguration)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **SnowflakeDestinationConfiguration**: [SnowflakeDestinationConfiguration](#snowflakedestinationconfiguration)
* **SplunkDestinationConfiguration**: [SplunkDestinationConfiguration](#splunkdestinationconfiguration)
* **Tags**: [Tag](#tag)[]

## BufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## CatalogConfiguration
### Properties
* **CatalogArn**: string

## CloudWatchLoggingOptions
### Properties
* **Enabled**: bool
* **LogGroupName**: string
* **LogStreamName**: string

## CopyCommand
### Properties
* **CopyOptions**: string
* **DataTableColumns**: string
* **DataTableName**: string (Required)

## DataFormatConversionConfiguration
### Properties
* **Enabled**: bool
* **InputFormatConfiguration**: [InputFormatConfiguration](#inputformatconfiguration)
* **OutputFormatConfiguration**: [OutputFormatConfiguration](#outputformatconfiguration)
* **SchemaConfiguration**: [SchemaConfiguration](#schemaconfiguration)

## DeliveryStream_ColumnToJsonKeyMappings
### Properties

## DeliveryStreamEncryptionConfigurationInput
### Properties
* **KeyARN**: string
* **KeyType**: string (Required)

## Deserializer
### Properties
* **HiveJsonSerDe**: [HiveJsonSerDe](#hivejsonserde)
* **OpenXJsonSerDe**: [OpenXJsonSerDe](#openxjsonserde)

## DestinationTableConfiguration
### Properties
* **DestinationDatabaseName**: string (Required)
* **DestinationTableName**: string (Required)
* **S3ErrorOutputPrefix**: string
* **UniqueKeys**: string[]

## DocumentIdOptions
### Properties
* **DefaultDocumentIdFormat**: string (Required)

## DynamicPartitioningConfiguration
### Properties
* **Enabled**: bool
* **RetryOptions**: [RetryOptions](#retryoptions)

## ElasticsearchBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## ElasticsearchDestinationConfiguration
### Properties
* **BufferingHints**: [ElasticsearchBufferingHints](#elasticsearchbufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ClusterEndpoint**: string
* **DocumentIdOptions**: [DocumentIdOptions](#documentidoptions)
* **DomainARN**: string
* **IndexName**: string (Required)
* **IndexRotationPeriod**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [ElasticsearchRetryOptions](#elasticsearchretryoptions)
* **RoleARN**: string (Required)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **TypeName**: string
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## ElasticsearchRetryOptions
### Properties
* **DurationInSeconds**: int

## EncryptionConfiguration
### Properties
* **KMSEncryptionConfig**: [KMSEncryptionConfig](#kmsencryptionconfig)
* **NoEncryptionConfig**: string

## ExtendedS3DestinationConfiguration
### Properties
* **BucketARN**: string (Required)
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **CompressionFormat**: string
* **CustomTimeZone**: string
* **DataFormatConversionConfiguration**: [DataFormatConversionConfiguration](#dataformatconversionconfiguration)
* **DynamicPartitioningConfiguration**: [DynamicPartitioningConfiguration](#dynamicpartitioningconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ErrorOutputPrefix**: string
* **FileExtension**: string
* **Prefix**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RoleARN**: string (Required)
* **S3BackupConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **S3BackupMode**: string

## HiveJsonSerDe
### Properties
* **TimestampFormats**: string[]

## HttpEndpointCommonAttribute
### Properties
* **AttributeName**: string (Required)
* **AttributeValue**: string (Required)

## HttpEndpointConfiguration
### Properties
* **AccessKey**: string
* **Name**: string
* **Url**: string (Required)

## HttpEndpointDestinationConfiguration
### Properties
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **EndpointConfiguration**: [HttpEndpointConfiguration](#httpendpointconfiguration) (Required)
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RequestConfiguration**: [HttpEndpointRequestConfiguration](#httpendpointrequestconfiguration)
* **RetryOptions**: [RetryOptions](#retryoptions)
* **RoleARN**: string
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration)

## HttpEndpointRequestConfiguration
### Properties
* **CommonAttributes**: [HttpEndpointCommonAttribute](#httpendpointcommonattribute)[]
* **ContentEncoding**: string

## IcebergDestinationConfiguration
### Properties
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CatalogConfiguration**: [CatalogConfiguration](#catalogconfiguration) (Required)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **DestinationTableConfigurationList**: [DestinationTableConfiguration](#destinationtableconfiguration)[]
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [RetryOptions](#retryoptions)
* **RoleARN**: string (Required)
* **s3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)

## InputFormatConfiguration
### Properties
* **Deserializer**: [Deserializer](#deserializer)

## KinesisStreamSourceConfiguration
### Properties
* **KinesisStreamARN**: string (Required)
* **RoleARN**: string (Required)

## KMSEncryptionConfig
### Properties
* **AWSKMSKeyARN**: string (Required)

## MSKSourceConfiguration
### Properties
* **AuthenticationConfiguration**: [AuthenticationConfiguration](#authenticationconfiguration) (Required)
* **MSKClusterARN**: string (Required)
* **ReadFromTimestamp**: string
* **TopicName**: string (Required)

## OpenXJsonSerDe
### Properties
* **CaseInsensitive**: bool
* **ColumnToJsonKeyMappings**: [DeliveryStream_ColumnToJsonKeyMappings](#deliverystreamcolumntojsonkeymappings)
* **ConvertDotsInJsonKeysToUnderscores**: bool

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

## OutputFormatConfiguration
### Properties
* **Serializer**: [Serializer](#serializer)

## ParquetSerDe
### Properties
* **BlockSizeBytes**: int
* **Compression**: string
* **EnableDictionaryCompression**: bool
* **MaxPaddingBytes**: int
* **PageSizeBytes**: int
* **WriterVersion**: string

## ProcessingConfiguration
### Properties
* **Enabled**: bool
* **Processors**: [Processor](#processor)[]

## Processor
### Properties
* **Parameters**: [ProcessorParameter](#processorparameter)[]
* **Type**: string (Required)

## ProcessorParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## RedshiftDestinationConfiguration
### Properties
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ClusterJDBCURL**: string (Required)
* **CopyCommand**: [CopyCommand](#copycommand) (Required)
* **Password**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [RedshiftRetryOptions](#redshiftretryoptions)
* **RoleARN**: string (Required)
* **S3BackupConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration)
* **Username**: string

## RedshiftRetryOptions
### Properties
* **DurationInSeconds**: int

## RetryOptions
### Properties
* **DurationInSeconds**: int

## S3DestinationConfiguration
### Properties
* **BucketARN**: string (Required)
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **CompressionFormat**: string
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ErrorOutputPrefix**: string
* **Prefix**: string
* **RoleARN**: string (Required)

## SchemaConfiguration
### Properties
* **CatalogId**: string
* **DatabaseName**: string
* **Region**: string
* **RoleARN**: string
* **TableName**: string
* **VersionId**: string

## SecretsManagerConfiguration
### Properties
* **Enabled**: bool (Required)
* **RoleARN**: string
* **SecretARN**: string

## Serializer
### Properties
* **OrcSerDe**: [OrcSerDe](#orcserde)
* **ParquetSerDe**: [ParquetSerDe](#parquetserde)

## SnowflakeBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## SnowflakeDestinationConfiguration
### Properties
* **AccountUrl**: string (Required)
* **BufferingHints**: [SnowflakeBufferingHints](#snowflakebufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **ContentColumnName**: string
* **Database**: string (Required)
* **DataLoadingOption**: string
* **KeyPassphrase**: string
* **MetaDataColumnName**: string
* **PrivateKey**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [SnowflakeRetryOptions](#snowflakeretryoptions)
* **RoleARN**: string (Required)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **Schema**: string (Required)
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration)
* **SnowflakeRoleConfiguration**: [SnowflakeRoleConfiguration](#snowflakeroleconfiguration)
* **SnowflakeVpcConfiguration**: [SnowflakeVpcConfiguration](#snowflakevpcconfiguration)
* **Table**: string (Required)
* **User**: string

## SnowflakeRetryOptions
### Properties
* **DurationInSeconds**: int

## SnowflakeRoleConfiguration
### Properties
* **Enabled**: bool
* **SnowflakeRole**: string

## SnowflakeVpcConfiguration
### Properties
* **PrivateLinkVpceId**: string (Required)

## SplunkBufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## SplunkDestinationConfiguration
### Properties
* **BufferingHints**: [SplunkBufferingHints](#splunkbufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **HECAcknowledgmentTimeoutInSeconds**: int
* **HECEndpoint**: string (Required)
* **HECEndpointType**: string (Required)
* **HECToken**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [SplunkRetryOptions](#splunkretryoptions)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration)

## SplunkRetryOptions
### Properties
* **DurationInSeconds**: int

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

## VpcConfiguration
### Properties
* **RoleARN**: string (Required)
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)

