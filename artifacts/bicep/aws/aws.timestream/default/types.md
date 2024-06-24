# AWS.Timestream @ default

## Resource AWS.Timestream/Database@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/DatabaseProperties](#awstimestreamdatabaseproperties) (Identifier): properties of the resource

## Resource AWS.Timestream/InfluxDBInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/InfluxDBInstanceProperties](#awstimestreaminfluxdbinstanceproperties) (Identifier): properties of the resource

## Resource AWS.Timestream/ScheduledQuery@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/ScheduledQueryProperties](#awstimestreamscheduledqueryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Timestream/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/TableProperties](#awstimestreamtableproperties) (Required, Identifier): properties of the resource

## AWS.Timestream/DatabaseProperties
### Properties
* **Arn**: string (ReadOnly)
* **DatabaseName**: string (Identifier): The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.
* **KmsKeyId**: string: The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Timestream/InfluxDBInstanceProperties
### Properties
* **AllocatedStorage**: int: The allocated storage for the InfluxDB instance.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is associated with the InfluxDB instance.
* **AvailabilityZone**: string (ReadOnly): The Availability Zone (AZ) where the InfluxDB instance is created.
* **Bucket**: string (WriteOnly): The bucket for the InfluxDB instance.
* **DbInstanceType**: string: The compute instance of the InfluxDB instance.
* **DbParameterGroupIdentifier**: string: The name of an existing InfluxDB parameter group.
* **DbStorageType**: string: The storage type of the InfluxDB instance.
* **DeploymentType**: string: Deployment type of the InfluxDB Instance.
* **Endpoint**: string (ReadOnly): The connection endpoint for the InfluxDB instance.
* **Id**: string (ReadOnly, Identifier): The service generated unique identifier for InfluxDB instance.
* **InfluxAuthParametersSecretArn**: string (ReadOnly): The Auth parameters secret Amazon Resource name (ARN) that is associated with the InfluxDB instance.
* **LogDeliveryConfiguration**: [InfluxDBInstance_LogDeliveryConfiguration](#influxdbinstancelogdeliveryconfiguration): Configuration for sending logs to customer account from the InfluxDB instance.
* **Name**: string: The unique name that is associated with the InfluxDB instance.
* **Organization**: string (WriteOnly): The organization for the InfluxDB instance.
* **Password**: string (WriteOnly): The password for the InfluxDB instance.
* **PubliclyAccessible**: bool: Attach a public IP to the customer ENI.
* **SecondaryAvailabilityZone**: string (ReadOnly): The Secondary Availability Zone (AZ) where the InfluxDB instance is created, if DeploymentType is set as WITH_MULTIAZ_STANDBY.
* **Status**: string (ReadOnly): Status of the InfluxDB Instance.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this DB instance.
* **Username**: string (WriteOnly): The username for the InfluxDB instance.
* **VpcSecurityGroupIds**: string[]: A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.
* **VpcSubnetIds**: string[]: A list of EC2 subnet IDs for this InfluxDB instance.

## AWS.Timestream/ScheduledQueryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ClientToken**: string
* **ErrorReportConfiguration**: [ErrorReportConfiguration](#errorreportconfiguration) (Required)
* **KmsKeyId**: string
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration) (Required)
* **QueryString**: string (Required)
* **ScheduleConfiguration**: [ScheduleConfiguration](#scheduleconfiguration) (Required)
* **ScheduledQueryExecutionRoleArn**: string (Required)
* **ScheduledQueryName**: string
* **SQErrorReportConfiguration**: string (ReadOnly): Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
* **SQKmsKeyId**: string (ReadOnly): The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
* **SQName**: string (ReadOnly): The name of the scheduled query. Scheduled query names must be unique within each Region.
* **SQNotificationConfiguration**: string (ReadOnly): Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
* **SQQueryString**: string (ReadOnly): The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
* **SQScheduleConfiguration**: string (ReadOnly): Configuration for when the scheduled query is executed.
* **SQScheduledQueryExecutionRoleArn**: string (ReadOnly): The ARN for the IAM role that Timestream will assume when running the scheduled query.
* **SQTargetConfiguration**: string (ReadOnly): Configuration of target store where scheduled query results are written to.
* **Tags**: [Tag](#tag)[]
* **TargetConfiguration**: [TargetConfiguration](#targetconfiguration)

## AWS.Timestream/TableProperties
### Properties
* **Arn**: string (ReadOnly)
* **DatabaseName**: string (Required, Identifier): The name for the database which the table to be created belongs to.
* **MagneticStoreWriteProperties**: [Table_MagneticStoreWriteProperties](#tablemagneticstorewriteproperties): The properties that determine whether magnetic store writes are enabled.
* **Name**: string (ReadOnly): The table name exposed as a read-only attribute.
* **RetentionProperties**: [Table_RetentionProperties](#tableretentionproperties): The retention duration of the memory store and the magnetic store.
* **Schema**: [Table_Schema](#tableschema): A Schema specifies the expected data model of the table.
* **TableName**: string (Identifier): The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DimensionMapping
### Properties
* **DimensionValueType**: string (Required)
* **Name**: string (Required)

## ErrorReportConfiguration
### Properties
* **S3Configuration**: [S3Configuration](#s3configuration) (Required)

## InfluxDBInstance_LogDeliveryConfiguration
### Properties
* **S3Configuration**: [InfluxDBInstance_LogDeliveryConfiguration_S3Configuration](#influxdbinstancelogdeliveryconfigurations3configuration) (Required): S3 configuration for sending logs to customer account from the InfluxDB instance.

## InfluxDBInstance_LogDeliveryConfiguration_S3Configuration
### Properties
* **BucketName**: string (Required): The bucket name for logs to be sent from the InfluxDB instance
* **Enabled**: bool (Required): Specifies whether logging to customer specified bucket is enabled.

## MixedMeasureMapping
### Properties
* **MeasureName**: string
* **MeasureValueType**: string (Required)
* **MultiMeasureAttributeMappings**: [MultiMeasureAttributeMapping](#multimeasureattributemapping)[]
* **SourceColumn**: string
* **TargetMeasureName**: string

## MultiMeasureAttributeMapping
### Properties
* **MeasureValueType**: string (Required)
* **SourceColumn**: string (Required)
* **TargetMultiMeasureAttributeName**: string

## MultiMeasureMappings
### Properties
* **MultiMeasureAttributeMappings**: [MultiMeasureAttributeMapping](#multimeasureattributemapping)[] (Required)
* **TargetMultiMeasureName**: string

## NotificationConfiguration
### Properties
* **SnsConfiguration**: [SnsConfiguration](#snsconfiguration) (Required)

## PartitionKey
### Properties
* **EnforcementInRecord**: string
* **Name**: string
* **Type**: string (Required)

## S3Configuration
### Properties
* **BucketName**: string (Required)
* **EncryptionOption**: string
* **ObjectKeyPrefix**: string

## ScheduleConfiguration
### Properties
* **ScheduleExpression**: string (Required)

## SnsConfiguration
### Properties
* **TopicArn**: string (Required)

## Table_MagneticStoreWriteProperties
### Properties
* **EnableMagneticStoreWrites**: bool (Required): Boolean flag indicating whether magnetic store writes are enabled.
* **MagneticStoreRejectedDataLocation**: [Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation](#tablemagneticstorewritepropertiesmagneticstorerejecteddatalocation): Location to store information about records that were asynchronously rejected during magnetic store writes.

## Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation
### Properties
* **S3Configuration**: [Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation_S3Configuration](#tablemagneticstorewritepropertiesmagneticstorerejecteddatalocations3configuration): S3 configuration for location to store rejections from magnetic store writes

## Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation_S3Configuration
### Properties
* **BucketName**: string (Required): The bucket name used to store the data.
* **EncryptionOption**: string (Required): Either SSE_KMS or SSE_S3.
* **KmsKeyId**: string: Must be provided if SSE_KMS is specified as the encryption option
* **ObjectKeyPrefix**: string: String used to prefix all data in the bucket.

## Table_RetentionProperties
### Properties
* **MagneticStoreRetentionPeriodInDays**: string: The duration for which data must be stored in the magnetic store.
* **MemoryStoreRetentionPeriodInHours**: string: The duration for which data must be stored in the memory store.

## Table_Schema
### Properties
* **CompositePartitionKey**: [PartitionKey](#partitionkey)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string
* **Value**: string

## TargetConfiguration
### Properties
* **TimestreamConfiguration**: [TimestreamConfiguration](#timestreamconfiguration) (Required)

## TimestreamConfiguration
### Properties
* **DatabaseName**: string (Required)
* **DimensionMappings**: [DimensionMapping](#dimensionmapping)[] (Required)
* **MeasureNameColumn**: string
* **MixedMeasureMappings**: [MixedMeasureMapping](#mixedmeasuremapping)[]
* **MultiMeasureMappings**: [MultiMeasureMappings](#multimeasuremappings)
* **TableName**: string (Required)
* **TimeColumn**: string (Required)

