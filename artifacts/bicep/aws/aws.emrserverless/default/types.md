# AWS.EMRServerless @ default

## Resource AWS.EMRServerless/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRServerless/ApplicationProperties](#awsemrserverlessapplicationproperties) (Required): properties of the resource

## AWS.EMRServerless/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly, Identifier): The ID of the EMR Serverless Application.
* **Architecture**: string
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the EMR Serverless Application.
* **AutoStartConfiguration**: [AutoStartConfiguration](#autostartconfiguration): Configuration for Auto Start of Application.
* **AutoStopConfiguration**: [AutoStopConfiguration](#autostopconfiguration): Configuration for Auto Stop of Application.
* **ImageConfiguration**: [ImageConfigurationInput](#imageconfigurationinput)
* **InitialCapacity**: [InitialCapacityConfigKeyValuePair](#initialcapacityconfigkeyvaluepair)[]: Initial capacity initialized when an Application is started.
* **MaximumCapacity**: [MaximumAllowedResources](#maximumallowedresources): Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)
* **Name**: string: User friendly Application name.
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network Configuration for customer VPC connectivity.
* **ReleaseLabel**: string (Required): EMR release label.
* **RuntimeConfiguration**: [ConfigurationObject](#configurationobject)[]
* **Tags**: [Tag](#tag)[]: Tag map with key and value
* **Type**: string (Required): The type of the application
* **WorkerTypeSpecifications**: [WorkerTypeSpecificationInputMap](#workertypespecificationinputmap): The key-value pairs that specify worker type to WorkerTypeSpecificationInput. This parameter must contain all valid worker types for a Spark or Hive application. Valid worker types include Driver and Executor for Spark applications and HiveDriver and TezTask for Hive applications. You can either set image details in this parameter for each worker type, or in imageConfiguration for all worker types.

## AutoStartConfiguration
### Properties
* **Enabled**: bool: If set to true, the Application will automatically start. Defaults to true.

## AutoStopConfiguration
### Properties
* **Enabled**: bool: If set to true, the Application will automatically stop after being idle. Defaults to true.
* **IdleTimeoutMinutes**: int: The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.

## ImageConfigurationInput
### Properties
* **ImageUri**: string: The URI of an image in the Amazon ECR registry. This field is required when you create a new application. If you leave this field blank in an update, Amazon EMR will remove the image configuration.

## InitialCapacityConfigKeyValuePair
### Properties
* **Key**: string (Required): Worker type for an analytics framework.
* **Value**: [InitialCapacityConfig](#initialcapacityconfig) (Required)

## InitialCapacityConfig
### Properties
* **WorkerConfiguration**: [WorkerConfiguration](#workerconfiguration) (Required)
* **WorkerCount**: int (Required): Initial count of workers to be initialized when an Application is started. This count will be continued to be maintained until the Application is stopped

## WorkerConfiguration
### Properties
* **Cpu**: string (Required): Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
* **Disk**: string: Per worker Disk resource. GB is the only supported unit and specifying GB is optional
* **Memory**: string (Required): Per worker memory resource. GB is the only supported unit and specifying GB is optional.

## MaximumAllowedResources
### Properties
* **Cpu**: string (Required): Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
* **Disk**: string: Per worker Disk resource. GB is the only supported unit and specifying GB is optional
* **Memory**: string (Required): Per worker memory resource. GB is the only supported unit and specifying GB is optional.

## MonitoringConfiguration
### Properties
* **CloudWatchLoggingConfiguration**: [CloudWatchLoggingConfiguration](#cloudwatchloggingconfiguration): CloudWatch logging configurations for a JobRun.
* **ManagedPersistenceMonitoringConfiguration**: [ManagedPersistenceMonitoringConfiguration](#managedpersistencemonitoringconfiguration): Managed log persistence configurations for a JobRun.
* **S3MonitoringConfiguration**: [Application_S3MonitoringConfiguration](#applications3monitoringconfiguration): S3 monitoring configurations for a JobRun.

## CloudWatchLoggingConfiguration
### Properties
* **Enabled**: bool: If set to false, CloudWatch logging will be turned off. Defaults to false.
* **EncryptionKeyArn**: string: KMS key ARN to encrypt the logs stored in given CloudWatch log-group.
* **LogGroupName**: string: Log-group name to produce log-streams on CloudWatch. If undefined, logs will be produced in a default log-group /aws/emr-serverless
* **LogStreamNamePrefix**: string: Log-stream name prefix by which log-stream names will start in the CloudWatch Log-group.
* **LogTypeMap**: [LogTypeMapKeyValuePair](#logtypemapkeyvaluepair)[]: The specific log-streams which need to be uploaded to CloudWatch.

## LogTypeMapKeyValuePair
### Properties
* **Key**: string (Required)
* **Value**: string[] (Required)

## ManagedPersistenceMonitoringConfiguration
### Properties
* **Enabled**: bool: If set to false, managed logging will be turned off. Defaults to true.
* **EncryptionKeyArn**: string: KMS key ARN to encrypt the logs stored in managed persistence

## Application_S3MonitoringConfiguration
### Properties
* **EncryptionKeyArn**: string: KMS key ARN to encrypt the logs stored in given s3
* **LogUri**: string

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: string[]: The ID of the security groups in the VPC to which you want to connect your job or application.
* **SubnetIds**: string[]: The ID of the subnets in the VPC to which you want to connect your job or application.

## ConfigurationObject
### Properties
* **Classification**: string (Required): String with a maximum length of 1024.
* **Configurations**: [ConfigurationObject](#configurationobject)[]
* **Properties**: [Application_Properties](#applicationproperties)

## Application_Properties
### Properties

## Tag
### Properties
* **Key**: string (Required): The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## WorkerTypeSpecificationInputMap
### Properties

