# AWS.KinesisAnalyticsV2 @ default

## Resource AWS.KinesisAnalyticsV2/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KinesisAnalyticsV2/ApplicationProperties](#awskinesisanalyticsv2applicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.KinesisAnalyticsV2/Snapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KinesisAnalyticsV2/SnapshotProperties](#awskinesisanalyticsv2snapshotproperties) (Required, Identifier): properties of the resource

## Application_PropertyMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ApplicationCodeConfiguration
### Properties
* **CodeContent**: [CodeContent](#codecontent) (Required): The location and type of the application code.
* **CodeContentType**: string (Required): Specifies whether the code content is in text or zip format.

## ApplicationConfiguration
### Properties
* **ApplicationCodeConfiguration**: [ApplicationCodeConfiguration](#applicationcodeconfiguration): The code location and type parameters for a Flink-based Kinesis Data Analytics application.
* **ApplicationEncryptionConfiguration**: [ApplicationEncryptionConfiguration](#applicationencryptionconfiguration): Describes whether customer managed key is enabled and key details for customer data encryption
* **ApplicationSnapshotConfiguration**: [ApplicationSnapshotConfiguration](#applicationsnapshotconfiguration): Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
* **ApplicationSystemRollbackConfiguration**: [ApplicationSystemRollbackConfiguration](#applicationsystemrollbackconfiguration): Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
* **EnvironmentProperties**: [EnvironmentProperties](#environmentproperties) (WriteOnly): Describes execution properties for a Flink-based Kinesis Data Analytics application.
* **FlinkApplicationConfiguration**: [FlinkApplicationConfiguration](#flinkapplicationconfiguration): The creation and update parameters for a Flink-based Kinesis Data Analytics application.
* **VpcConfigurations**: [VpcConfiguration](#vpcconfiguration)[]: The array of descriptions of VPC configurations available to the application.
* **ZeppelinApplicationConfiguration**: [ZeppelinApplicationConfiguration](#zeppelinapplicationconfiguration): The configuration parameters for a Kinesis Data Analytics Studio notebook.

## ApplicationEncryptionConfiguration
### Properties
* **KeyId**: string: KMS KeyId. Can be either key uuid or full key arn or key alias arn or short key alias
* **KeyType**: string (Required): Specifies whether application data is encrypted using service key: AWS_OWNED_KEY or customer key: CUSTOMER_MANAGED_KEY

## ApplicationMaintenanceConfiguration
### Properties
* **ApplicationMaintenanceWindowStartTime**: string (Required): The start time for the maintenance window.

## ApplicationRestoreConfiguration
### Properties
* **ApplicationRestoreType**: string (Required): Specifies how the application should be restored.
* **SnapshotArn**: string: The ARN of an existing snapshot to use to restart an application. The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType. Specify either SnapshotName or SnapshotArn, not both.
* **SnapshotName**: string: The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType. Specify either SnapshotName or SnapshotArn, not both.

## ApplicationSnapshotConfiguration
### Properties
* **SnapshotMode**: string: The snapshot mode of a Flink-based Kinesis Data Analytics application. Changing from APPLICATION_SNAPSHOTS_LEGACY to ENHANCED_SNAPSHOTS is one-way; an application in ENHANCED_SNAPSHOTS mode cannot return to APPLICATION_SNAPSHOTS_LEGACY.
* **SnapshotsEnabled**: bool (Required): Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.

## ApplicationSystemRollbackConfiguration
### Properties
* **RollbackEnabled**: bool (Required): Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.

## AWS.KinesisAnalyticsV2/ApplicationProperties
### Properties
* **ApplicationConfiguration**: [ApplicationConfiguration](#applicationconfiguration): Use this parameter to configure the application.
* **ApplicationDescription**: string: The description of the application.
* **ApplicationMaintenanceConfiguration**: [ApplicationMaintenanceConfiguration](#applicationmaintenanceconfiguration): Used to configure start of maintenance window.
* **ApplicationMode**: string: To create a Kinesis Data Analytics Studio notebook, you must set the mode to `INTERACTIVE`. However, for a Kinesis Data Analytics for Apache Flink application, the mode is optional.
* **ApplicationName**: string (Identifier): The name of the application.
* **RunConfiguration**: [RunConfiguration](#runconfiguration) (WriteOnly): Specifies run configuration (start parameters) of a Kinesis Data Analytics application. Evaluated on update for RUNNING applications an only.
* **RuntimeEnvironment**: string (Required): The runtime environment for the application.
* **ServiceExecutionRole**: string (Required): Specifies the IAM role that the application uses to access external resources.
* **Tags**: [Tag](#tag)[]: A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50.

## AWS.KinesisAnalyticsV2/SnapshotProperties
### Properties
* **ApplicationName**: string (WriteOnly): The name of the Managed Service for Apache Flink application to snapshot. Used only at create time to select the source application; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.
* **ImportSourceConfiguration**: [ImportSourceConfiguration](#importsourceconfiguration) (WriteOnly): The Amazon S3 location and role to import the snapshot from, with ImportSnapshot. Used only at create time; immutable after create. Specify either ApplicationName or ImportSourceConfiguration, not both.
* **RuntimeEnvironment**: string (ReadOnly): The runtime environment of the source application when the snapshot was taken with ApplicationName (CreateSnapshot), for example FLINK-1_20. Populated by DescribeSnapshot. Not returned for snapshots created with ImportSourceConfiguration (ImportSnapshot), which carry no runtime version.
* **SnapshotArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the snapshot. Account-scoped: arn:<partition>:kinesisanalytics:<region>:<account>:snapshot/<SnapshotName>. Assigned by the service at create time and used as the resource's primary identifier.
* **SnapshotCreationTimestamp**: string (ReadOnly): The time at which the service created the snapshot, in ISO-8601 format. Populated by DescribeSnapshot.
* **SnapshotDescription**: string: Optional customer-supplied description of the snapshot. Immutable after create.
* **SnapshotEncryptionConfigurationDescription**: [SnapshotEncryptionConfigurationDescription](#snapshotencryptionconfigurationdescription): The encryption of the snapshot. Can be set only with ImportSourceConfiguration (sent as the ImportSnapshot DestinationEncryptionConfiguration; the AWS owned key when omitted). A snapshot taken from ApplicationName uses the application's encryption: DescribeSnapshot returns it for such snapshots, but it must not be set with ApplicationName. Immutable after create.
* **SnapshotFormat**: string: The format of the snapshot (CANONICAL). Sent to ImportSnapshot with ImportSourceConfiguration; with ApplicationName it may only be CANONICAL, the format CreateSnapshot produces. Returned by DescribeSnapshot. Immutable after create.
* **SnapshotInitiator**: string (ReadOnly): Indicates whether the snapshot was initiated by the customer or by the service. Populated by DescribeSnapshot.
* **SnapshotInitiatorOperation**: string (ReadOnly): The operation that initiated the snapshot. Populated by DescribeSnapshot.
* **SnapshotName**: string (Required): The customer-chosen name of the snapshot, unique within the account. Immutable after create.
* **SnapshotSizeInBytes**: int (ReadOnly): The size of the snapshot in bytes. Populated by DescribeSnapshot once the snapshot reaches READY.
* **SnapshotSourceDescription**: [SnapshotSourceDescription](#snapshotsourcedescription) (ReadOnly): The source of the snapshot: the application it was taken from, or the Amazon S3 location it was imported from. Populated by DescribeSnapshot.
* **SnapshotStatus**: string (ReadOnly): The lifecycle status of the snapshot as reported by the service (CREATING, READY, DELETING, FAILED). Populated by DescribeSnapshot.
* **Tags**: [Tag](#tag)[]: Tags to apply to the snapshot. Applied at create time (with CreateSnapshot, or with TagResource right after ImportSnapshot) and updated in place with TagResource and UntagResource. Tag keys must not start with aws:.

## CatalogConfiguration
### Properties
* **GlueDataCatalogConfiguration**: [GlueDataCatalogConfiguration](#gluedatacatalogconfiguration): The configuration parameters for the default Amazon Glue database. You use this database for Apache Flink SQL queries and table API transforms that you write in a Kinesis Data Analytics Studio notebook.

## CheckpointConfiguration
### Properties
* **CheckpointingEnabled**: bool: Describes whether checkpointing is enabled for a Flink-based Kinesis Data Analytics application.
* **CheckpointInterval**: int: Describes the interval in milliseconds between checkpoint operations.
* **ConfigurationType**: string (Required): Describes whether the application uses Kinesis Data Analytics' default checkpointing behavior. You must set this property to `CUSTOM` in order to set the `CheckpointingEnabled`, `CheckpointInterval`, or `MinPauseBetweenCheckpoints` parameters.
* **MinPauseBetweenCheckpoints**: int: Describes the minimum time in milliseconds after a checkpoint operation completes that a new checkpoint operation can start. If a checkpoint operation takes longer than the CheckpointInterval, the application otherwise performs continual checkpoint operations. For more information, see Tuning Checkpointing in the Apache Flink Documentation.

## CodeContent
### Properties
* **S3ContentLocation**: [S3ContentLocation](#s3contentlocation): Information about the Amazon S3 bucket that contains the application code.
* **TextContent**: string: The text-format code for a Kinesis Data Analytics Studio notebook, as a Zeppelin note JSON object.
* **ZipFileContent**: string (WriteOnly): The zip-format code for a Flink-based Kinesis Data Analytics application.

## CustomArtifactConfiguration
### Properties
* **ArtifactType**: string (Required): Set this to either `UDF` or `DEPENDENCY_JAR`. `UDF` stands for user-defined functions. This type of artifact must be in an S3 bucket. A `DEPENDENCY_JAR` can be in either Maven or an S3 bucket.
* **MavenReference**: [MavenReference](#mavenreference): The parameters required to fully specify a Maven reference.
* **S3ContentLocation**: [S3ContentLocation](#s3contentlocation): The location of the custom artifacts.

## DeployAsApplicationConfiguration
### Properties
* **S3ContentLocation**: [S3ContentBaseLocation](#s3contentbaselocation) (Required): The description of an Amazon S3 object that contains the Amazon Data Analytics application, including the Amazon Resource Name (ARN) of the S3 bucket, the name of the Amazon S3 object that contains the data, and the version number of the Amazon S3 object that contains the data.

## EnvironmentProperties
### Properties
* **PropertyGroups**: [PropertyGroup](#propertygroup)[]: Describes the execution property groups.

## FlinkApplicationConfiguration
### Properties
* **CheckpointConfiguration**: [CheckpointConfiguration](#checkpointconfiguration): Describes an application's checkpointing configuration. Checkpointing is the process of persisting application state for fault tolerance. For more information, see Checkpoints for Fault Tolerance in the Apache Flink Documentation.
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration): Describes configuration parameters for Amazon CloudWatch logging for an application.
* **ParallelismConfiguration**: [ParallelismConfiguration](#parallelismconfiguration): Describes parameters for how an application executes multiple tasks simultaneously.

## FlinkRunConfiguration
### Properties
* **AllowNonRestoredState**: bool: When restoring from a snapshot, specifies whether the runtime is allowed to skip a state that cannot be mapped to the new program. Defaults to false. If you update your application without specifying this parameter, AllowNonRestoredState will be set to false, even if it was previously set to true.

## GlueDataCatalogConfiguration
### Properties
* **DatabaseARN**: string: The Amazon Resource Name (ARN) of the database.

## ImportSourceConfiguration
### Properties
* **ImportRoleArn**: string (Required): The ARN of the IAM role that the service assumes to read the snapshot files from Amazon S3 (and to decrypt them, if they are encrypted with a customer managed key).
* **SourceEncryptionConfiguration**: [SnapshotEncryptionConfigurationDescription](#snapshotencryptionconfigurationdescription): The encryption of the snapshot files in Amazon S3.
* **SourceS3PrefixLocation**: [S3PrefixLocation](#s3prefixlocation) (Required): The Amazon S3 bucket and key prefix that hold the snapshot files, for example the prefix an ExportSnapshot operation wrote them to.
* **SourceType**: string (Required): The type of storage the snapshot is imported from.

## MavenReference
### Properties
* **ArtifactId**: string (Required): The artifact ID of the Maven reference.
* **GroupId**: string (Required): The group ID of the Maven reference.
* **Version**: string (Required): The version of the Maven reference.

## MonitoringConfiguration
### Properties
* **ConfigurationType**: string (Required): Describes whether to use the default CloudWatch logging configuration for an application. You must set this property to CUSTOM in order to set the LogLevel or MetricsLevel parameters.
* **LogLevel**: string: Describes the verbosity of the CloudWatch Logs for an application.
* **MetricsLevel**: string: Describes the granularity of the CloudWatch Logs for an application. The Parallelism level is not recommended for applications with a Parallelism over 64 due to excessive costs.

## ParallelismConfiguration
### Properties
* **AutoScalingEnabled**: bool: Describes whether the Kinesis Data Analytics service can increase the parallelism of the application in response to increased throughput.
* **ConfigurationType**: string (Required): Describes whether the application uses the default parallelism for the Kinesis Data Analytics service. You must set this property to `CUSTOM` in order to change your application's `AutoScalingEnabled`, `Parallelism`, or `ParallelismPerKPU` properties.
* **Parallelism**: int: Describes the initial number of parallel tasks that a Java-based Kinesis Data Analytics application can perform. The Kinesis Data Analytics service can increase this number automatically if ParallelismConfiguration:AutoScalingEnabled is set to true.
* **ParallelismPerKPU**: int: Describes the number of parallel tasks that a Java-based Kinesis Data Analytics application can perform per Kinesis Processing Unit (KPU) used by the application. For more information about KPUs, see Amazon Kinesis Data Analytics Pricing.

## PropertyGroup
### Properties
* **PropertyGroupId**: string: Describes the key of an application execution property key-value pair.
* **PropertyMap**: [Application_PropertyMap](#applicationpropertymap): Describes the value of an application execution property key-value pair.

## RunConfiguration
### Properties
* **ApplicationRestoreConfiguration**: [ApplicationRestoreConfiguration](#applicationrestoreconfiguration): Describes the restore behavior of a restarting application.
* **FlinkRunConfiguration**: [FlinkRunConfiguration](#flinkrunconfiguration): Describes the starting parameters for a Flink-based Kinesis Data Analytics application.

## S3ContentBaseLocation
### Properties
* **BasePath**: string: The base path for the S3 bucket.
* **BucketARN**: string (Required): The Amazon Resource Name (ARN) of the S3 bucket.

## S3ContentLocation
### Properties
* **BucketARN**: string (Required): The Amazon Resource Name (ARN) for the S3 bucket containing the application code.
* **FileKey**: string (Required): The file key for the object containing the application code.
* **ObjectVersion**: string: The version of the object containing the application code.

## S3PrefixLocation
### Properties
* **BucketARN**: string (Required): The ARN of the S3 bucket.
* **KeyPrefix**: string (Required): The S3 key prefix.

## S3PrefixLocation
### Properties
* **BucketARN**: string (Required, ReadOnly): The ARN of the S3 bucket.
* **KeyPrefix**: string (Required, ReadOnly): The S3 key prefix.

## SnapshotEncryptionConfigurationDescription
### Properties
* **KeyId**: string: The ARN of the customer managed KMS key. Required when KeyType is CUSTOMER_MANAGED_KEY; must be omitted for AWS_OWNED_KEY.
* **KeyType**: string (Required): The type of KMS key: AWS_OWNED_KEY or CUSTOMER_MANAGED_KEY.

## SnapshotSourceDescription
### Properties
* **S3PrefixLocation**: [S3PrefixLocation](#s3prefixlocation)
* **SourceApplicationDescription**: [SourceApplicationDescription](#sourceapplicationdescription)

## SourceApplicationDescription
### Properties
* **ApplicationCreationTimestamp**: string (Required, ReadOnly): The time at which the source application was created.
* **ApplicationName**: string (Required, ReadOnly): The name of the source application.
* **ApplicationVersionId**: int (Required, ReadOnly): The version of the source application captured in the snapshot.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that's 0 to 256 characters in length.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## VpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required): The array of SecurityGroup IDs used by the VPC configuration.
* **SubnetIds**: string[] (Required): The array of Subnet IDs used by the VPC configuration.

## ZeppelinApplicationConfiguration
### Properties
* **CatalogConfiguration**: [CatalogConfiguration](#catalogconfiguration): The Amazon Glue Data Catalog that you use in queries in a Kinesis Data Analytics Studio notebook.
* **CustomArtifactsConfiguration**: [CustomArtifactConfiguration](#customartifactconfiguration)[]: A list of CustomArtifactConfiguration objects.
* **DeployAsApplicationConfiguration**: [DeployAsApplicationConfiguration](#deployasapplicationconfiguration): The information required to deploy a Kinesis Data Analytics Studio notebook as an application with durable state.
* **MonitoringConfiguration**: [ZeppelinMonitoringConfiguration](#zeppelinmonitoringconfiguration): The monitoring configuration of a Kinesis Data Analytics Studio notebook.

## ZeppelinMonitoringConfiguration
### Properties
* **LogLevel**: string: The verbosity of the CloudWatch Logs for an application. You can set it to `INFO`, `WARN`, `ERROR`, or `DEBUG`.

