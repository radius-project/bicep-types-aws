# AWS.Kinesis @ default

## Resource AWS.Kinesis/Channel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kinesis/ChannelProperties](#awskinesischannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kinesis/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kinesis/ResourcePolicyProperties](#awskinesisresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Kinesis/Stream@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kinesis/StreamProperties](#awskinesisstreamproperties) (Identifier): properties of the resource

## AWS.Kinesis/ChannelProperties
### Properties
* **ChannelARN**: string (ReadOnly, Identifier): The ARN of the channel.
* **ChannelCreationTimestamp**: string (ReadOnly): Timestamp of when the channel was created.
* **ChannelId**: string (ReadOnly): The service-generated unique identifier for the channel.
* **ChannelName**: string (Required): The name of the channel. The name's uniqueness is scoped per AWS account and region.
* **ChannelStatus**: string (ReadOnly): The status of the channel.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): Server-side encryption configuration for data at rest.
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration): Configuration for delivering channel operational logs. Defaults to CloudWatch Logs disabled.
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration): Configuration for delivery to a vanilla S3 bucket destination. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.
* **S3TablesDestinationConfiguration**: [S3TablesDestinationConfiguration](#s3tablesdestinationconfiguration): Configuration for delivery to S3 Tables destinations. Exactly one of S3DestinationConfiguration and S3TablesDestinationConfiguration must be specified.
* **ServiceExecutionRoleARN**: string (Required): The ARN of the IAM role that the channel assumes to read from the source stream, deliver records to the destination, and (when enabled) write CloudWatch Logs.
* **StreamConfigurationList**: [StreamConfiguration](#streamconfiguration)[] (Required): List of stream configurations associated with the channel. v1 supports a single element; the list shape allows future extensibility to fan in from multiple streams.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) to associate with the Kinesis channel.

## AWS.Kinesis/ResourcePolicyProperties
### Properties
* **ResourceArn**: string (Required, Identifier): The ARN of the AWS Kinesis resource to which the policy applies.
* **ResourcePolicy**: [ResourcePolicy_ResourcePolicy](#resourcepolicyresourcepolicy) (Required): A policy document containing permissions to add to the specified resource. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.

## AWS.Kinesis/StreamProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon resource name (ARN) of the Kinesis stream
* **DesiredShardLevelMetrics**: string[]: The final list of shard-level metrics
* **MaxRecordSizeInKiB**: int: Maximum size of a data record in KiB allowed to be put into Kinesis stream.
* **Name**: string (Identifier): The name of the Kinesis stream.
* **RecordDistributionStrategy**: string: The record distribution strategy for the stream. This property can ONLY be set when StreamMode is ON_DEMAND
* **RetentionPeriodHours**: int: The number of hours for the data records that are stored in shards to remain accessible.
* **ShardCount**: int: The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.
* **StreamEncryption**: [StreamEncryption](#streamencryption): When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
* **StreamModeDetails**: [StreamModeDetails](#streammodedetails): The mode in which the stream is running.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) to associate with the Kinesis stream.
* **WarmThroughputMiBps**: int (WriteOnly): Target warm throughput in MiB/s for the stream. This property can ONLY be set when StreamMode is ON_DEMAND.
* **WarmThroughputObject**: [WarmThroughputObject](#warmthroughputobject) (ReadOnly): Warm throughput configuration details for the stream. Only present for ON_DEMAND streams.

## CloudWatchLogsConfiguration
### Properties
* **Enabled**: bool (Required): Whether CloudWatch Logs delivery is enabled.
* **LogGroupName**: string: The CloudWatch log group name. When Enabled is true and LogGroupName is omitted, the service uses the default '/aws/kinesis/<channelName>/<channelId>'.
* **LogStreamName**: string: The CloudWatch log stream name. Defaults to the literal string 'DestinationDelivery' when omitted.

## DeadLetterQueueS3Configuration
### Properties
* **BucketARN**: string (Required): The ARN of the S3 bucket for storing failed records.
* **ErrorOutputPrefix**: string: Optional S3 key prefix under which error records are organized. When omitted, the service uses the default 'kinesis-channel/errors/<channelName>/<channelId>/'.
* **ExpectedBucketOwner**: string (Required): The AWS account ID of the expected owner of the dead-letter queue S3 bucket. Used to verify bucket ownership before delivery.

## EncryptionConfiguration
### Properties
* **EncryptionType**: string (Required): The encryption type. KMS is the only supported value.
* **KeyId**: string (Required): The customer-managed AWS KMS key. Accepts a key GUID, key ARN, alias ARN, or alias name prefixed by 'alias/'. The Kinesis Data Streams managed alias 'aws/kinesis' is not accepted - the key must be customer-owned so it can also be used by readers of the destination.

## LoggingConfiguration
### Properties
* **CloudWatchLogs**: [CloudWatchLogsConfiguration](#cloudwatchlogsconfiguration) (Required): CloudWatch Logs configuration block. When provided, controls whether and where the channel writes operational logs.

## PartitionField
### Properties
* **SourceName**: string (Required): The name of the source column on which the transform is applied.
* **Transform**: string (Required): The partitioning transform applied to the SourceName column.

## PartitionSpec
### Properties
* **PartitionFields**: [PartitionField](#partitionfield)[] (Required): List of partition fields that define how records are partitioned when written to the destination table.

## RecordConfiguration
### Properties
* **GSRSchemaARN**: string: The ARN of the AWS Glue Schema Registry (GSR) schema. Required for the S3 Tables destination, where it is used to create the S3 Table and to validate that the record format matches the table schema. Also used when RecordFormatType is GSR_JSON to interpret records read from the source stream. Vanilla S3 delivery writes records as S3 objects and does not need a schema. The schema must be in the same account and region as the channel.
* **RecordFormatType**: string (Required): The format used to interpret records read from the source stream.

## ResourcePolicy_ResourcePolicy
### Properties

## S3DestinationConfiguration
### Properties
* **DataFreshnessInSeconds**: int: The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.
* **DeadLetterQueueS3Configuration**: [DeadLetterQueueS3Configuration](#deadletterqueues3configuration): Optional dead-letter queue (DLQ) configuration for records that cannot be delivered to the destination. When omitted, the service auto-fills using the storage BucketARN with an error prefix.
* **StorageConfiguration**: [S3StorageConfiguration](#s3storageconfiguration) (Required): S3 storage configuration including the destination bucket, output key template, storage class, and compression type.

## S3StorageConfiguration
### Properties
* **BucketARN**: string (Required): The ARN of the S3 bucket for record delivery. Different channels can deliver to the same bucket. Buckets can be cross-account but must be in the same region as the channel.
* **CompressionType**: string (Required): The compression algorithm applied to delivered objects.
* **ExpectedBucketOwner**: string (Required): The AWS account ID of the expected owner of the destination S3 bucket. Used to verify bucket ownership before delivery.
* **OutputKeyTemplate**: string: Optional template for the S3 object key path. Supports placeholders in the form !{name}: !{channel-name}, !{channel-id}, !{stream-name}, !{yyyy}, !{yy}, !{MM}, !{dd}, !{HH}, !{mm}, and !{extension} (a literal file extension can be supplied as !{extension:.json.gz}). When omitted, the service uses the default 'kinesis-channel/!{channel-name}/!{channel-id}/!{yyyy}/!{MM}/!{dd}/!{HH}/!{channel-name}-!{channel-id}-!{yyyy}-!{MM}-!{dd}-!{HH}-!{mm}!{extension}'.
* **StorageClass**: string: The S3 storage class for delivered objects.

## S3TableConfiguration
### Properties
* **CompressionType**: string (Required): The compression algorithm applied to objects delivered to the S3 Tables destination.
* **Namespace**: string (Required): The name of the S3 Tables namespace that contains the destination table.
* **PartitionSpec**: [PartitionSpec](#partitionspec): The partition specification used by the destination Iceberg table.
* **TableBucketARN**: string (Required): The ARN of the S3 Tables table bucket for record delivery. Buckets can be cross-account but must be in the same region as the channel.
* **TableName**: string (Required): The name of the destination S3 Tables table. The table is created for the customer if it does not yet exist.

## S3TablesDestinationConfiguration
### Properties
* **DataFreshnessInSeconds**: int: The maximum time in seconds the channel buffers records before delivery if the minimum target file size is not reached.
* **DeadLetterQueueS3Configuration**: [DeadLetterQueueS3Configuration](#deadletterqueues3configuration) (Required): The dead-letter queue (DLQ) configuration for records that cannot be delivered to the S3 Tables destination. Required for S3 Tables: there is no safe fallback because S3 Tables metadata writes are critical-path.
* **S3TablesConfigurationList**: [S3TableConfiguration](#s3tableconfiguration)[] (Required): The list of S3 Tables destinations. v1 supports a single element; the list shape allows future extensibility to fan out to multiple tables.

## StreamConfiguration
### Properties
* **RecordConfiguration**: [RecordConfiguration](#recordconfiguration) (Required): The configuration that describes how records on the source stream are encoded.
* **StreamARN**: string (Required): The Amazon resource name (ARN) of the Kinesis data stream that the channel reads from.

## StreamEncryption
### Properties
* **EncryptionType**: string (Required): The encryption type to use. The only valid value is KMS. 
* **KeyId**: string (Required): The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.

## StreamModeDetails
### Properties
* **StreamMode**: string (Required): The mode of the stream

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## WarmThroughputObject
### Properties
* **CurrentMiBps**: int: Current warm throughput in MiB/s
* **TargetMiBps**: int: Target warm throughput in MiB/s that a customer can write to a stream at any given time

