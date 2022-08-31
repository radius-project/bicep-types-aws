# AWS.Timestream @ default

## Resource AWS.Timestream/Database@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Timestream/DatabaseProperties](#awstimestreamdatabaseproperties): properties of the resource

## Resource AWS.Timestream/ScheduledQuery@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Timestream/ScheduledQueryProperties](#awstimestreamscheduledqueryproperties): properties of the resource

## Resource AWS.Timestream/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Timestream/TableProperties](#awstimestreamtableproperties): properties of the resource

## AWS.Timestream/DatabaseProperties
### Properties
* **Arn**: string (ReadOnly)
* **DatabaseName**: string: The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.
* **KmsKeyId**: string: The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.Timestream/ScheduledQueryProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **ClientToken**: [ClientToken](#clienttoken)
* **ErrorReportConfiguration**: [ErrorReportConfiguration](#errorreportconfiguration)
* **KmsKeyId**: [KmsKeyId](#kmskeyid)
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration)
* **QueryString**: [QueryString](#querystring)
* **ScheduleConfiguration**: [ScheduleConfiguration](#scheduleconfiguration)
* **ScheduledQueryExecutionRoleArn**: [ScheduledQueryExecutionRoleArn](#scheduledqueryexecutionrolearn)
* **ScheduledQueryName**: [ScheduledQueryName](#scheduledqueryname)
* **SQErrorReportConfiguration**: string (ReadOnly): Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
* **SQKmsKeyId**: string (ReadOnly): The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
* **SQName**: string (ReadOnly): The name of the scheduled query. Scheduled query names must be unique within each Region.
* **SQNotificationConfiguration**: string (ReadOnly): Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
* **SQQueryString**: string (ReadOnly): The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
* **SQScheduleConfiguration**: string (ReadOnly): Configuration for when the scheduled query is executed.
* **SQScheduledQueryExecutionRoleArn**: string (ReadOnly): The ARN for the IAM role that Timestream will assume when running the scheduled query.
* **SQTargetConfiguration**: string (ReadOnly): Configuration of target store where scheduled query results are written to.
* **Tags**: [Tags](#tags)
* **TargetConfiguration**: [TargetConfiguration](#targetconfiguration)

## Arn
### Properties

## ClientToken
### Properties

## ErrorReportConfiguration
### Properties
* **S3Configuration**: [S3Configuration](#s3configuration)

## S3Configuration
### Properties
* **BucketName**: [BucketName](#bucketname)
* **EncryptionOption**: [EncryptionOption](#encryptionoption)
* **ObjectKeyPrefix**: [ObjectKeyPrefix](#objectkeyprefix)

## BucketName
### Properties

## EncryptionOption
### Properties

## ObjectKeyPrefix
### Properties

## KmsKeyId
### Properties

## NotificationConfiguration
### Properties
* **SnsConfiguration**: [SnsConfiguration](#snsconfiguration)

## SnsConfiguration
### Properties
* **TopicArn**: [TopicArn](#topicarn)

## TopicArn
### Properties

## QueryString
### Properties

## ScheduleConfiguration
### Properties
* **ScheduleExpression**: [ScheduleExpression](#scheduleexpression)

## ScheduleExpression
### Properties

## ScheduledQueryExecutionRoleArn
### Properties

## ScheduledQueryName
### Properties

## Tags
### Properties

## TargetConfiguration
### Properties
* **TimestreamConfiguration**: [TimestreamConfiguration](#timestreamconfiguration)

## TimestreamConfiguration
### Properties
* **DatabaseName**: [DatabaseName](#databasename)
* **DimensionMappings**: [DimensionMappings](#dimensionmappings)
* **MeasureNameColumn**: [MeasureNameColumn](#measurenamecolumn)
* **MixedMeasureMappings**: [MixedMeasureMappings](#mixedmeasuremappings)
* **MultiMeasureMappings**: [MultiMeasureMappings](#multimeasuremappings)
* **TableName**: [TableName](#tablename)
* **TimeColumn**: [TimeColumn](#timecolumn)

## DatabaseName
### Properties

## DimensionMappings
### Properties

## MeasureNameColumn
### Properties

## MixedMeasureMappings
### Properties

## MultiMeasureMappings
### Properties
* **MultiMeasureAttributeMappings**: [MultiMeasureAttributeMappingList](#multimeasureattributemappinglist)
* **TargetMultiMeasureName**: [TargetMultiMeasureName](#targetmultimeasurename)

## MultiMeasureAttributeMappingList
### Properties

## TargetMultiMeasureName
### Properties

## TableName
### Properties

## TimeColumn
### Properties

## AWS.Timestream/TableProperties
### Properties
* **Arn**: string (ReadOnly)
* **DatabaseName**: string: The name for the database which the table to be created belongs to.
* **MagneticStoreWriteProperties**: [Table_MagneticStoreWriteProperties](#tablemagneticstorewriteproperties): The properties that determine whether magnetic store writes are enabled.
* **Name**: string (ReadOnly): The table name exposed as a read-only attribute.
* **RetentionProperties**: [Table_RetentionProperties](#tableretentionproperties): The retention duration of the memory store and the magnetic store.
* **TableName**: string: The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Table_MagneticStoreWriteProperties
### Properties
* **EnableMagneticStoreWrites**: bool: Boolean flag indicating whether magnetic store writes are enabled.
* **MagneticStoreRejectedDataLocation**: [Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation](#tablemagneticstorewritepropertiesmagneticstorerejecteddatalocation): Location to store information about records that were asynchronously rejected during magnetic store writes.

## Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation
### Properties
* **S3Configuration**: [Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation_S3Configuration](#tablemagneticstorewritepropertiesmagneticstorerejecteddatalocations3configuration): S3 configuration for location to store rejections from magnetic store writes

## Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation_S3Configuration
### Properties
* **BucketName**: string: The bucket name used to store the data.
* **EncryptionOption**: string: Either SSE_KMS or SSE_S3.
* **KmsKeyId**: string: Must be provided if SSE_KMS is specified as the encryption option
* **ObjectKeyPrefix**: string: String used to prefix all data in the bucket.

## Table_RetentionProperties
### Properties
* **MagneticStoreRetentionPeriodInDays**: string: The duration for which data must be stored in the magnetic store.
* **MemoryStoreRetentionPeriodInHours**: string: The duration for which data must be stored in the memory store.

## Tag
### Properties
* **Key**: string
* **Value**: string

