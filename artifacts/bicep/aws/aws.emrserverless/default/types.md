# AWS.EMRServerless @ default

## Resource AWS.EMRServerless/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRServerless/ApplicationProperties](#awsemrserverlessapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMRServerless/JobRun@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRServerless/JobRunProperties](#awsemrserverlessjobrunproperties) (Identifier): properties of the resource

## Resource AWS.EMRServerless/Session@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRServerless/SessionProperties](#awsemrserverlesssessionproperties) (Identifier): properties of the resource

## Application_PrometheusMonitoringConfiguration
### Properties
* **RemoteWriteUrl**: string: The remote write URL in the Amazon Managed Service for Prometheus workspace to send metrics to.

## Application_Properties
### Properties

## Application_S3MonitoringConfiguration
### Properties
* **EncryptionKeyArn**: string: KMS key ARN to encrypt the logs stored in given s3
* **LogUri**: string

## AutoStartConfiguration
### Properties
* **Enabled**: bool: If set to true, the Application will automatically start. Defaults to true.

## AutoStopConfiguration
### Properties
* **Enabled**: bool: If set to true, the Application will automatically stop after being idle. Defaults to true.
* **IdleTimeoutMinutes**: int: The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.

## AWS.EMRServerless/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly, Identifier): The ID of the EMR Serverless Application.
* **Architecture**: string
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the EMR Serverless Application.
* **AutoStartConfiguration**: [AutoStartConfiguration](#autostartconfiguration): Configuration for Auto Start of Application.
* **AutoStopConfiguration**: [AutoStopConfiguration](#autostopconfiguration): Configuration for Auto Stop of Application.
* **IdentityCenterConfiguration**: [IdentityCenterConfiguration](#identitycenterconfiguration): The IAM IdentityCenter configuration for trusted-identity-propagation on this application. Supported with release labels emr-7.8.0 and above.
* **ImageConfiguration**: [ImageConfigurationInput](#imageconfigurationinput)
* **InitialCapacity**: [InitialCapacityConfigKeyValuePair](#initialcapacityconfigkeyvaluepair)[]: Initial capacity initialized when an Application is started.
* **InteractiveConfiguration**: [InteractiveConfiguration](#interactiveconfiguration)
* **MaximumCapacity**: [MaximumAllowedResources](#maximumallowedresources): Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)
* **Name**: string: User friendly Application name.
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network Configuration for customer VPC connectivity.
* **ReleaseLabel**: string (Required): EMR release label.
* **RuntimeConfiguration**: [ConfigurationObject](#configurationobject)[]
* **SchedulerConfiguration**: [SchedulerConfiguration](#schedulerconfiguration): The scheduler configuration for batch and streaming jobs running on this application. Supported with release labels emr-7.0.0 and above.
* **Tags**: [Tag](#tag)[]: Tag map with key and value
* **Type**: string (Required): The type of the application
* **WorkerTypeSpecifications**: [WorkerTypeSpecificationInputMap](#workertypespecificationinputmap): The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.

## AWS.EMRServerless/JobRunProperties
### Properties
* **ApplicationId**: string: The ID of the application on which the job run is submitted.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the job run.
* **ConfigurationOverrides**: [ConfigurationOverrides](#configurationoverrides)
* **CreatedAt**: string (ReadOnly): The date and time when the job run was created.
* **CreatedBy**: string (ReadOnly): The user who created the job run.
* **ExecutionRoleArn**: string: The execution role ARN of the job run.
* **ExecutionTimeoutMinutes**: int: The maximum duration, in minutes, for the job run. If the job run exceeds this duration, it is cancelled automatically.
* **JobDriver**: [JobDriver](#jobdriver)
* **JobRunId**: string (ReadOnly): The ID of the job run.
* **Mode**: string: The mode of the job run.
* **Name**: string: The optional job run name.
* **ReleaseLabel**: string (ReadOnly): The Amazon EMR release associated with the application on which the job is running.
* **State**: string (ReadOnly): The state of the job run.
* **StateDetails**: string (ReadOnly): The state details of the job run.
* **Tags**: [Tag](#tag)[]: The tags assigned to the job run.
* **UpdatedAt**: string (ReadOnly): The date and time when the job run was last updated.

## AWS.EMRServerless/SessionProperties
### Properties
* **ApplicationId**: string: The ID of the application on which the session is started.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the session.
* **ConfigurationOverrides**: [ConfigurationOverrides](#configurationoverrides)
* **CreatedAt**: string (ReadOnly): The date and time that the session was created.
* **CreatedBy**: string (ReadOnly): The IAM principal that created the session.
* **ExecutionRoleArn**: string: The execution role ARN for the session. Amazon EMR Serverless uses this role to access Amazon Web Services resources on your behalf during session execution.
* **IdleSince**: string (ReadOnly): The date and time that the session became idle.
* **IdleTimeoutMinutes**: int: The idle timeout in minutes for the session. After the session remains idle for this duration, Amazon EMR Serverless automatically terminates it.
* **Name**: string: The optional name for the session.
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration) (ReadOnly)
* **ReleaseLabel**: string (ReadOnly): The Amazon EMR release label associated with the session.
* **SessionId**: string (ReadOnly): The ID of the session.
* **StartedAt**: string (ReadOnly): The date and time that the session moved to a running state.
* **State**: string (ReadOnly): The state of the session.
* **StateDetails**: string (ReadOnly): Additional details about the current state of the session.
* **Tags**: [Tag](#tag)[]: The tags assigned to the session.
* **UpdatedAt**: string (ReadOnly): The date and time that the session was last updated.

## CloudWatchLoggingConfiguration
### Properties
* **Enabled**: bool: If set to false, CloudWatch logging will be turned off. Defaults to false.
* **EncryptionKeyArn**: string: KMS key ARN to encrypt the logs stored in given CloudWatch log-group.
* **LogGroupName**: string: Log-group name to produce log-streams on CloudWatch. If undefined, logs will be produced in a default log-group /aws/emr-serverless
* **LogStreamNamePrefix**: string: Log-stream name prefix by which log-stream names will start in the CloudWatch Log-group.
* **LogTypeMap**: [LogTypeMapKeyValuePair](#logtypemapkeyvaluepair)[]: The specific log-streams which need to be uploaded to CloudWatch.

## Configuration
### Properties
* **Classification**: string (Required): The classification within a configuration.
* **Configurations**: [Configuration](#configuration)[]: A list of additional configurations to apply within a configuration object.
* **Properties**: [JobRun_Properties](#jobrunproperties): A set of properties specified within a configuration classification.

## Configuration
### Properties
* **Classification**: string (Required): The classification within a configuration.
* **Configurations**: [Configuration](#configuration)[]: A list of additional configurations to apply within a configuration object.
* **Properties**: [Session_Properties](#sessionproperties): A set of properties specified within a configuration classification.

## ConfigurationObject
### Properties
* **Classification**: string (Required): String with a maximum length of 1024.
* **Configurations**: [ConfigurationObject](#configurationobject)[]
* **Properties**: [Application_Properties](#applicationproperties)

## ConfigurationOverrides
### Properties
* **ApplicationConfiguration**: [Configuration](#configuration)[]: The override configurations for the application.
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)

## ConfigurationOverrides
### Properties
* **RuntimeConfiguration**: [Configuration](#configuration)[]: The runtime configuration for the session. Contains Spark configuration properties specified at session creation time.

## Hive
### Properties
* **InitQueryFile**: string: The query file for the Hive job run.
* **Parameters**: string: The parameters for the Hive job run.
* **Query**: string (Required): The query for the Hive job run.

## IdentityCenterConfiguration
### Properties
* **IdentityCenterInstanceArn**: string: The IAM IdentityCenter instance arn

## ImageConfigurationInput
### Properties
* **ImageUri**: string: The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

## InitialCapacityConfig
### Properties
* **WorkerConfiguration**: [WorkerConfiguration](#workerconfiguration) (Required)
* **WorkerCount**: int (Required): Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped

## InitialCapacityConfigKeyValuePair
### Properties
* **Key**: string (Required): Worker type for an analytics framework.
* **Value**: [InitialCapacityConfig](#initialcapacityconfig) (Required)

## InteractiveConfiguration
### Properties
* **LivyEndpointEnabled**: bool: Enables an Apache Livy endpoint that you can connect to and run interactive jobs
* **SessionEnabled**: bool: Enables interactive sessions on the application
* **StudioEnabled**: bool: Enabled you to connect an Application to Amazon EMR Studio to run interactive workloads in a notebook

## JobDriver
### Properties
* **Hive**: [Hive](#hive)
* **SparkSubmit**: [SparkSubmit](#sparksubmit)

## JobRun_Properties
### Properties

## LogTypeMapKeyValuePair
### Properties
* **Key**: string (Required)
* **Value**: string[] (Required)

## ManagedPersistenceMonitoringConfiguration
### Properties
* **Enabled**: bool: If set to false, managed logging will be turned off. Defaults to true.
* **EncryptionKeyArn**: string: KMS key ARN to encrypt the logs stored in managed persistence

## ManagedPersistenceMonitoringConfiguration
### Properties
* **Enabled**: bool: Enables managed logging and defaults to true. If set to false, managed logging is turned off.

## MaximumAllowedResources
### Properties
* **Cpu**: string (Required): Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
* **Disk**: string: Per worker Disk resource. GB is the only supported unit and specifying GB is optional
* **Memory**: string (Required): Per worker memory resource. GB is the only supported unit and specifying GB is optional.

## MonitoringConfiguration
### Properties
* **CloudWatchLoggingConfiguration**: [CloudWatchLoggingConfiguration](#cloudwatchloggingconfiguration): CloudWatch logging configurations for a JobRun.
* **ManagedPersistenceMonitoringConfiguration**: [ManagedPersistenceMonitoringConfiguration](#managedpersistencemonitoringconfiguration): Managed log persistence configurations for a JobRun.
* **PrometheusMonitoringConfiguration**: [Application_PrometheusMonitoringConfiguration](#applicationprometheusmonitoringconfiguration): Prometheus monitoring configurations for a JobRun.
* **S3MonitoringConfiguration**: [Application_S3MonitoringConfiguration](#applications3monitoringconfiguration): S3 monitoring configurations for a JobRun.

## MonitoringConfiguration
### Properties
* **ManagedPersistenceMonitoringConfiguration**: [ManagedPersistenceMonitoringConfiguration](#managedpersistencemonitoringconfiguration)
* **S3MonitoringConfiguration**: [S3MonitoringConfiguration](#s3monitoringconfiguration)

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: string[]: The ID of the security groups in the VPC to which you want to connect your job or application.
* **SubnetIds**: string[]: The ID of the subnets in the VPC to which you want to connect your job or application.

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: string[]: The array of security group Ids for customer VPC connectivity.
* **SubnetIds**: string[]: The array of subnet Ids for customer VPC connectivity.

## S3MonitoringConfiguration
### Properties
* **LogUri**: string: The Amazon S3 destination URI for log publishing.

## SchedulerConfiguration
### Properties
* **MaxConcurrentRuns**: int: The maximum concurrent job runs on this application. If scheduler configuration is enabled on your application, the default value is 15. The valid range is 1 to 1000.
* **QueueTimeoutMinutes**: int: The maximum duration in minutes for the job in QUEUED state. If scheduler configuration is enabled on your application, the default value is 360 minutes (6 hours). The valid range is from 15 to 720.

## Session_Properties
### Properties

## SparkSubmit
### Properties
* **EntryPoint**: string (Required): The entry point for the Spark submit job run.
* **EntryPointArguments**: string[]: The arguments for the Spark submit job run.
* **SparkSubmitParameters**: string: The parameters for the Spark submit job run.

## Tag
### Properties
* **Key**: string (Required): The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## WorkerConfiguration
### Properties
* **Cpu**: string (Required): Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
* **Disk**: string: Per worker Disk resource. GB is the only supported unit and specifying GB is optional
* **DiskType**: string: Per worker DiskType resource. Shuffle optimized and Standard are only supported types and specifying diskType is optional
* **Memory**: string (Required): Per worker memory resource. GB is the only supported unit and specifying GB is optional.

## WorkerTypeSpecificationInputMap
### Properties

