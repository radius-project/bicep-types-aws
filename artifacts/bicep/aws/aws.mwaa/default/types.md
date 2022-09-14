# AWS.MWAA @ default

## Resource AWS.MWAA/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MWAA/EnvironmentProperties](#awsmwaaenvironmentproperties) (Required): properties of the resource

## AWS.MWAA/EnvironmentProperties
### Properties
* **AirflowConfigurationOptions**: [Environment_AirflowConfigurationOptions](#environmentairflowconfigurationoptions): Key/value pairs representing Airflow configuration variables.
    Keys are prefixed by their section:

    [core]
    dags_folder={AIRFLOW_HOME}/dags

    Would be represented as

    "core.dags_folder": "{AIRFLOW_HOME}/dags"
* **AirflowVersion**: [AirflowVersion](#airflowversion)
* **Arn**: [EnvironmentArn](#environmentarn) (ReadOnly)
* **DagS3Path**: [RelativePath](#relativepath)
* **EnvironmentClass**: [EnvironmentClass](#environmentclass)
* **ExecutionRoleArn**: [ExecutionRoleArn](#executionrolearn)
* **KmsKey**: [KmsKey](#kmskey)
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **MaxWorkers**: [MaxWorkers](#maxworkers)
* **MinWorkers**: [MinWorkers](#minworkers)
* **Name**: [EnvironmentName](#environmentname) (Required)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PluginsS3ObjectVersion**: [S3ObjectVersion](#s3objectversion)
* **PluginsS3Path**: [RelativePath](#relativepath)
* **RequirementsS3ObjectVersion**: [S3ObjectVersion](#s3objectversion)
* **RequirementsS3Path**: [RelativePath](#relativepath)
* **Schedulers**: [Schedulers](#schedulers)
* **SourceBucketArn**: [S3BucketArn](#s3bucketarn)
* **Tags**: [Environment_Tags](#environmenttags): A map of tags for the environment.
* **WebserverAccessMode**: [WebserverAccessMode](#webserveraccessmode)
* **WebserverUrl**: [WebserverUrl](#webserverurl) (ReadOnly)
* **WeeklyMaintenanceWindowStart**: [WeeklyMaintenanceWindowStart](#weeklymaintenancewindowstart)

## Environment_AirflowConfigurationOptions
### Properties

## AirflowVersion
### Properties

## EnvironmentArn
### Properties

## RelativePath
### Properties

## EnvironmentClass
### Properties

## ExecutionRoleArn
### Properties

## KmsKey
### Properties

## LoggingConfiguration
### Properties
* **DagProcessingLogs**: [ModuleLoggingConfiguration](#moduleloggingconfiguration)
* **SchedulerLogs**: [ModuleLoggingConfiguration](#moduleloggingconfiguration)
* **TaskLogs**: [ModuleLoggingConfiguration](#moduleloggingconfiguration)
* **WebserverLogs**: [ModuleLoggingConfiguration](#moduleloggingconfiguration)
* **WorkerLogs**: [ModuleLoggingConfiguration](#moduleloggingconfiguration)

## ModuleLoggingConfiguration
### Properties
* **CloudWatchLogGroupArn**: [CloudWatchLogGroupArn](#cloudwatchloggrouparn) (ReadOnly)
* **Enabled**: [LoggingEnabled](#loggingenabled)
* **LogLevel**: [LoggingLevel](#logginglevel)

## CloudWatchLogGroupArn
### Properties

## LoggingEnabled
### Properties

## LoggingLevel
### Properties

## MaxWorkers
### Properties

## MinWorkers
### Properties

## EnvironmentName
### Properties

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: [SecurityGroupId](#securitygroupid)[]: A list of security groups to use for the environment.
* **SubnetIds**: [SubnetId](#subnetid)[]: A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.

## SecurityGroupId
### Properties

## SubnetId
### Properties

## S3ObjectVersion
### Properties

## Schedulers
### Properties

## S3BucketArn
### Properties

## Environment_Tags
### Properties

## WebserverAccessMode
### Properties

## WebserverUrl
### Properties

## WeeklyMaintenanceWindowStart
### Properties

