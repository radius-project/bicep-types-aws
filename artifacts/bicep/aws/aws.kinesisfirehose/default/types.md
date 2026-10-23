# AWS.KinesisFirehose @ default

## Resource AWS.KinesisFirehose/DeliveryStream@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
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
* **AmazonOpenSearchServerlessDestinationConfiguration**: [AmazonOpenSearchServerlessDestinationConfiguration](#amazonopensearchserverlessdestinationconfiguration) (WriteOnly)
* **AmazonopensearchserviceDestinationConfiguration**: [AmazonopensearchserviceDestinationConfiguration](#amazonopensearchservicedestinationconfiguration) (WriteOnly)
* **Arn**: string (ReadOnly)
* **DatabaseSourceConfiguration**: [DatabaseSourceConfiguration](#databasesourceconfiguration) (WriteOnly)
* **DeliveryStreamEncryptionConfigurationInput**: [DeliveryStreamEncryptionConfigurationInput](#deliverystreamencryptionconfigurationinput)
* **DeliveryStreamName**: string (Identifier)
* **DeliveryStreamType**: string
* **DirectPutSourceConfiguration**: [DirectPutSourceConfiguration](#directputsourceconfiguration)
* **ElasticsearchDestinationConfiguration**: [ElasticsearchDestinationConfiguration](#elasticsearchdestinationconfiguration) (WriteOnly)
* **ExtendedS3DestinationConfiguration**: [ExtendedS3DestinationConfiguration](#extendeds3destinationconfiguration)
* **HttpEndpointDestinationConfiguration**: [HttpEndpointDestinationConfiguration](#httpendpointdestinationconfiguration)
* **IcebergDestinationConfiguration**: [IcebergDestinationConfiguration](#icebergdestinationconfiguration) (WriteOnly)
* **KinesisStreamSourceConfiguration**: [KinesisStreamSourceConfiguration](#kinesisstreamsourceconfiguration) (WriteOnly)
* **MSKSourceConfiguration**: [MSKSourceConfiguration](#msksourceconfiguration) (WriteOnly)
* **RedshiftDestinationConfiguration**: [RedshiftDestinationConfiguration](#redshiftdestinationconfiguration)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration) (WriteOnly)
* **SnowflakeDestinationConfiguration**: [SnowflakeDestinationConfiguration](#snowflakedestinationconfiguration) (WriteOnly)
* **SplunkDestinationConfiguration**: [SplunkDestinationConfiguration](#splunkdestinationconfiguration)
* **Tags**: [Tag](#tag)[]

## BufferingHints
### Properties
* **IntervalInSeconds**: int
* **SizeInMBs**: int

## CatalogConfiguration
### Properties
* **CatalogArn**: string
* **WarehouseLocation**: string

## CloudWatchLoggingOptions
### Properties
* **Enabled**: bool (WriteOnly)
* **LogGroupName**: string
* **LogStreamName**: string

## CopyCommand
### Properties
* **CopyOptions**: string
* **DataTableColumns**: string
* **DataTableName**: string (Required)

## DatabaseColumns
### Properties
* **Exclude**: string[]
* **Include**: string[]

## Databases
### Properties
* **Exclude**: string[]
* **Include**: string[]

## DatabaseSourceAuthenticationConfiguration
### Properties
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration) (Required)

## DatabaseSourceConfiguration
### Properties
* **Columns**: [DatabaseColumns](#databasecolumns)
* **Databases**: [Databases](#databases) (Required)
* **DatabaseSourceAuthenticationConfiguration**: [DatabaseSourceAuthenticationConfiguration](#databasesourceauthenticationconfiguration) (Required)
* **DatabaseSourceVPCConfiguration**: [DatabaseSourceVPCConfiguration](#databasesourcevpcconfiguration) (Required)
* **Digest**: string
* **Endpoint**: string (Required)
* **Port**: int (Required)
* **PublicCertificate**: string
* **SnapshotWatermarkTable**: string (Required)
* **SSLMode**: string
* **SurrogateKeys**: string[]
* **Tables**: [DatabaseTables](#databasetables) (Required)
* **Type**: string (Required)

## DatabaseSourceVPCConfiguration
### Properties
* **VpcEndpointServiceName**: string (Required)

## DatabaseTables
### Properties
* **Exclude**: string[]
* **Include**: string[]

## DataFormatConversionConfiguration
### Properties
* **Enabled**: bool
* **InputFormatConfiguration**: [InputFormatConfiguration](#inputformatconfiguration)
* **OutputFormatConfiguration**: [OutputFormatConfiguration](#outputformatconfiguration)
* **SchemaConfiguration**: [SchemaConfiguration](#schemaconfiguration)

## DeliveryStream_ColumnToJsonKeyMappings
### Properties

## DeliveryStream_PartitionSpec
### Properties
* **Identity**: [PartitionField](#partitionfield)[]

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
* **PartitionSpec**: [DeliveryStream_PartitionSpec](#deliverystreampartitionspec)
* **S3ErrorOutputPrefix**: string
* **UniqueKeys**: string[]

## DirectPutSourceConfiguration
### Properties
* **ThroughputHintInMBs**: int (WriteOnly)

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
* **NoEncryptionConfig**: string (WriteOnly)

## ExtendedS3DestinationConfiguration
### Properties
* **BucketARN**: string (Required)
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **CompressionFormat**: string
* **CustomTimeZone**: string (WriteOnly)
* **DataFormatConversionConfiguration**: [DataFormatConversionConfiguration](#dataformatconversionconfiguration)
* **DynamicPartitioningConfiguration**: [DynamicPartitioningConfiguration](#dynamicpartitioningconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ErrorOutputPrefix**: string
* **FileExtension**: string (WriteOnly)
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
* **AccessKey**: string (WriteOnly)
* **Name**: string
* **Url**: string (Required)

## HttpEndpointDestinationConfiguration
### Properties
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **EndpointConfiguration**: [HttpEndpointConfiguration](#httpendpointconfiguration) (Required)
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration) (WriteOnly)
* **RequestConfiguration**: [HttpEndpointRequestConfiguration](#httpendpointrequestconfiguration)
* **RetryOptions**: [RetryOptions](#retryoptions)
* **RoleARN**: string
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration) (WriteOnly)

## HttpEndpointRequestConfiguration
### Properties
* **CommonAttributes**: [HttpEndpointCommonAttribute](#httpendpointcommonattribute)[]
* **ContentEncoding**: string

## IcebergDestinationConfiguration
### Properties
* **AppendOnly**: bool
* **BufferingHints**: [BufferingHints](#bufferinghints)
* **CatalogConfiguration**: [CatalogConfiguration](#catalogconfiguration) (Required)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions)
* **DestinationTableConfigurationList**: [DestinationTableConfiguration](#destinationtableconfiguration)[]
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration)
* **RetryOptions**: [RetryOptions](#retryoptions)
* **RoleARN**: string (Required)
* **s3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **SchemaEvolutionConfiguration**: [SchemaEvolutionConfiguration](#schemaevolutionconfiguration)
* **TableCreationConfiguration**: [TableCreationConfiguration](#tablecreationconfiguration)

## InputFormatConfiguration
### Properties
* **Deserializer**: [Deserializer](#deserializer)

## KinesisStreamSourceConfiguration
### Properties
* **KinesisStreamARN**: string (Required)
* **RoleARN**: string (Required)

## KMSEncryptionConfig
### Properties
* **AWSKMSKeyARN**: string (Required, WriteOnly)

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

## PartitionField
### Properties
* **SourceName**: string (Required)

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
* **Password**: string (WriteOnly)
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration) (WriteOnly)
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
* **ErrorOutputPrefix**: string (WriteOnly)
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

## SchemaEvolutionConfiguration
### Properties
* **Enabled**: bool

## SecretsManagerConfiguration
### Properties
* **Enabled**: bool (Required, WriteOnly)
* **RoleARN**: string (WriteOnly)
* **SecretARN**: string (WriteOnly)

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
* **SnowflakeVpcConfiguration**: [SnowflakeVpcConfiguration](#snowflakevpcconfiguration) (WriteOnly)
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
* **BufferingHints**: [SplunkBufferingHints](#splunkbufferinghints) (WriteOnly)
* **CloudWatchLoggingOptions**: [CloudWatchLoggingOptions](#cloudwatchloggingoptions) (WriteOnly)
* **HECAcknowledgmentTimeoutInSeconds**: int
* **HECEndpoint**: string (Required)
* **HECEndpointType**: string (Required)
* **HECToken**: string
* **ProcessingConfiguration**: [ProcessingConfiguration](#processingconfiguration) (WriteOnly)
* **RetryOptions**: [SplunkRetryOptions](#splunkretryoptions)
* **S3BackupMode**: string
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration) (Required)
* **SecretsManagerConfiguration**: [SecretsManagerConfiguration](#secretsmanagerconfiguration) (WriteOnly)

## SplunkRetryOptions
### Properties
* **DurationInSeconds**: int

## TableCreationConfiguration
### Properties
* **Enabled**: bool

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

## VpcConfiguration
### Properties
* **RoleARN**: string (Required)
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)

