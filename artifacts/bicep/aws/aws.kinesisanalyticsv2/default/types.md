# AWS.KinesisAnalyticsV2 @ default

## Resource AWS.KinesisAnalyticsV2/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KinesisAnalyticsV2/ApplicationProperties](#awskinesisanalyticsv2applicationproperties) (Required, Identifier): properties of the resource

## Application_PropertyMap
### Properties

## ApplicationCodeConfiguration
### Properties
* **CodeContent**: [CodeContent](#codecontent) (Required): The location and type of the application code.
* **CodeContentType**: string (Required): Specifies whether the code content is in text or zip format.

## ApplicationConfiguration
### Properties
* **ApplicationCodeConfiguration**: [ApplicationCodeConfiguration](#applicationcodeconfiguration): The code location and type parameters for a Flink-based Kinesis Data Analytics application.
* **ApplicationSnapshotConfiguration**: [ApplicationSnapshotConfiguration](#applicationsnapshotconfiguration): Describes whether snapshots are enabled for a Flink-based Kinesis Data Analytics application.
* **ApplicationSystemRollbackConfiguration**: [ApplicationSystemRollbackConfiguration](#applicationsystemrollbackconfiguration): Describes whether system initiated rollbacks are enabled for a Flink-based Kinesis Data Analytics application.
* **EnvironmentProperties**: [EnvironmentProperties](#environmentproperties) (WriteOnly): Describes execution properties for a Flink-based Kinesis Data Analytics application.
* **FlinkApplicationConfiguration**: [FlinkApplicationConfiguration](#flinkapplicationconfiguration): The creation and update parameters for a Flink-based Kinesis Data Analytics application.
* **SqlApplicationConfiguration**: [SqlApplicationConfiguration](#sqlapplicationconfiguration): The creation and update parameters for a SQL-based Kinesis Data Analytics application.
* **VpcConfigurations**: [VpcConfiguration](#vpcconfiguration)[]: The array of descriptions of VPC configurations available to the application.
* **ZeppelinApplicationConfiguration**: [ZeppelinApplicationConfiguration](#zeppelinapplicationconfiguration): The configuration parameters for a Kinesis Data Analytics Studio notebook.

## ApplicationMaintenanceConfiguration
### Properties
* **ApplicationMaintenanceWindowStartTime**: string (Required): The start time for the maintenance window.

## ApplicationRestoreConfiguration
### Properties
* **ApplicationRestoreType**: string (Required): Specifies how the application should be restored.
* **SnapshotName**: string: The identifier of an existing snapshot of application state to use to restart an application. The application uses this value if RESTORE_FROM_CUSTOM_SNAPSHOT is specified for the ApplicationRestoreType.

## ApplicationSnapshotConfiguration
### Properties
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
* **TextContent**: string: The text-format code for a Flink-based Kinesis Data Analytics application.
* **ZipFileContent**: string (WriteOnly): The zip-format code for a Flink-based Kinesis Data Analytics application.

## CSVMappingParameters
### Properties
* **RecordColumnDelimiter**: string (Required): The column delimiter. For example, in a CSV format, a comma (",") is the typical column delimiter.
* **RecordRowDelimiter**: string (Required): The row delimiter. For example, in a CSV format, '\n' is the typical row delimiter.

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

## Input
### Properties
* **InputParallelism**: [InputParallelism](#inputparallelism): Describes the number of in-application streams to create.
* **InputProcessingConfiguration**: [InputProcessingConfiguration](#inputprocessingconfiguration): The InputProcessingConfiguration for the input. An input processor transforms records as they are received from the stream, before the application's SQL code executes. Currently, the only input processing configuration available is InputLambdaProcessor.
* **InputSchema**: [InputSchema](#inputschema) (Required): Describes the format of the data in the streaming source, and how each data element maps to corresponding columns in the in-application stream that is being created.
* **KinesisFirehoseInput**: [KinesisFirehoseInput](#kinesisfirehoseinput): If the streaming source is an Amazon Kinesis Data Firehose delivery stream, identifies the delivery stream's ARN.
* **KinesisStreamsInput**: [KinesisStreamsInput](#kinesisstreamsinput): If the streaming source is an Amazon Kinesis data stream, identifies the stream's Amazon Resource Name (ARN).
* **NamePrefix**: string (Required): The name prefix to use when creating an in-application stream. Suppose that you specify a prefix `"MyInApplicationStream"`. Kinesis Data Analytics then creates one or more (as per the InputParallelism count you specified) in-application streams with the names `"MyInApplicationStream_001"`, `"MyInApplicationStream_002"`, and so on.

## InputLambdaProcessor
### Properties
* **ResourceARN**: string (Required): The ARN of the Amazon Lambda function that operates on records in the stream.

## InputParallelism
### Properties
* **Count**: int: The number of in-application streams to create.

## InputProcessingConfiguration
### Properties
* **InputLambdaProcessor**: [InputLambdaProcessor](#inputlambdaprocessor): The InputLambdaProcessor that is used to preprocess the records in the stream before being processed by your application code.

## InputSchema
### Properties
* **RecordColumns**: [RecordColumn](#recordcolumn)[] (Required): A list of `RecordColumn` objects.
* **RecordEncoding**: string: Specifies the encoding of the records in the streaming source. For example, UTF-8.
* **RecordFormat**: [RecordFormat](#recordformat) (Required): Specifies the format of the records on the streaming source.

## JSONMappingParameters
### Properties
* **RecordRowPath**: string (Required): The path to the top-level parent that contains the records.

## KinesisFirehoseInput
### Properties
* **ResourceARN**: string (Required): The Amazon Resource Name (ARN) of the delivery stream.

## KinesisStreamsInput
### Properties
* **ResourceARN**: string (Required): The ARN of the input Kinesis data stream to read.

## MappingParameters
### Properties
* **CSVMappingParameters**: [CSVMappingParameters](#csvmappingparameters): Provides additional mapping information when the record format uses delimiters (for example, CSV).
* **JSONMappingParameters**: [JSONMappingParameters](#jsonmappingparameters): Provides additional mapping information when JSON is the record format on the streaming source.

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

## RecordColumn
### Properties
* **Mapping**: string: A reference to the data element in the streaming input or the reference data source.
* **Name**: string (Required): The name of the column that is created in the in-application input stream or reference table.
* **SqlType**: string (Required): The type of column created in the in-application input stream or reference table.

## RecordFormat
### Properties
* **MappingParameters**: [MappingParameters](#mappingparameters): When you configure application input at the time of creating or updating an application, provides additional mapping information specific to the record format (such as JSON, CSV, or record fields delimited by some delimiter) on the streaming source.
* **RecordFormatType**: string (Required): The type of record format.

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

## SqlApplicationConfiguration
### Properties
* **Inputs**: [Input](#input)[]: The array of Input objects describing the input streams used by the application.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that's 0 to 256 characters in length.

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

