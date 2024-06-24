# AWS.MWAA @ default

## Resource AWS.MWAA/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MWAA/EnvironmentProperties](#awsmwaaenvironmentproperties) (Required, Identifier): properties of the resource

## AWS.MWAA/EnvironmentProperties
### Properties
* **AirflowConfigurationOptions**: [Environment_AirflowConfigurationOptions](#environmentairflowconfigurationoptions): Key/value pairs representing Airflow configuration variables.
    Keys are prefixed by their section:

    [core]
    dags_folder={AIRFLOW_HOME}/dags

    Would be represented as

    "core.dags_folder": "{AIRFLOW_HOME}/dags"
* **AirflowVersion**: string
* **Arn**: string (ReadOnly)
* **CeleryExecutorQueue**: string (ReadOnly)
* **DagS3Path**: string
* **DatabaseVpcEndpointService**: string (ReadOnly)
* **EndpointManagement**: string
* **EnvironmentClass**: string
* **ExecutionRoleArn**: string
* **KmsKey**: string
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **MaxWebservers**: int
* **MaxWorkers**: int
* **MinWebservers**: int
* **MinWorkers**: int
* **Name**: string (Required, Identifier)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PluginsS3ObjectVersion**: string
* **PluginsS3Path**: string
* **RequirementsS3ObjectVersion**: string
* **RequirementsS3Path**: string
* **Schedulers**: int
* **SourceBucketArn**: string
* **StartupScriptS3ObjectVersion**: string
* **StartupScriptS3Path**: string
* **Tags**: [Environment_Tags](#environmenttags): A map of tags for the environment.
* **WebserverAccessMode**: string
* **WebserverUrl**: string (ReadOnly)
* **WebserverVpcEndpointService**: string (ReadOnly)
* **WeeklyMaintenanceWindowStart**: string

## Environment_AirflowConfigurationOptions
### Properties

## Environment_Tags
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
* **CloudWatchLogGroupArn**: string (ReadOnly)
* **Enabled**: bool
* **LogLevel**: string

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: string[]: A list of security groups to use for the environment.
* **SubnetIds**: string[]: A list of subnets to use for the environment. These must be private subnets, in the same VPC, in two different availability zones.

