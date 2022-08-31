# AWS.EMRServerless @ default

## Resource AWS.EMRServerless/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EMRServerless/ApplicationProperties](#awsemrserverlessapplicationproperties): properties of the resource

## AWS.EMRServerless/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly): The ID of the EMR Serverless Application.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the EMR Serverless Application.
* **AutoStartConfiguration**: [AutoStartConfiguration](#autostartconfiguration): Configuration for Auto Start of Application.
* **AutoStopConfiguration**: [AutoStopConfiguration](#autostopconfiguration): Configuration for Auto Stop of Application.
* **InitialCapacity**: [InitialCapacityConfigMap](#initialcapacityconfigmap): Initial capacity initialized when an Application is started.
* **MaximumCapacity**: [MaximumAllowedResources](#maximumallowedresources): Maximum allowed cumulative resources for an Application. No new resources will be created once the limit is hit.
* **Name**: string: User friendly Application name.
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration): Network Configuration for customer VPC connectivity.
* **ReleaseLabel**: string: EMR release label.
* **Tags**: [Tag](#tag)[]: Tag map with key and value
* **Type**: string: The type of the application

## AutoStartConfiguration
### Properties
* **Enabled**: bool: If set to true, the Application will automatically start. Defaults to true.

## AutoStopConfiguration
### Properties
* **Enabled**: bool: If set to true, the Application will automatically stop after being idle. Defaults to true.
* **IdleTimeoutMinutes**: int: The amount of time [in minutes] to wait before auto stopping the Application when idle. Defaults to 15 minutes.

## InitialCapacityConfigMap
### Properties

## MaximumAllowedResources
### Properties
* **Cpu**: [CpuSize](#cpusize): Per worker CPU resource. vCPU is the only supported unit and specifying vCPU is optional.
* **Disk**: [DiskSize](#disksize): Per worker Disk resource. GB is the only supported unit and specifying GB is optional
* **Memory**: [MemorySize](#memorysize): Per worker memory resource. GB is the only supported unit and specifying GB is optional.

## CpuSize
### Properties

## DiskSize
### Properties

## MemorySize
### Properties

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: [SecurityGroupId](#securitygroupid)[]: The ID of the security groups in the VPC to which you want to connect your job or application.
* **SubnetIds**: [SubnetId](#subnetid)[]: The ID of the subnets in the VPC to which you want to connect your job or application.

## SecurityGroupId
### Properties

## SubnetId
### Properties

## Tag
### Properties
* **Key**: string: The value for the tag. You can specify a value that is 1 to 128 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

