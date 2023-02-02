# AWS.M2 @ default

## Resource AWS.M2/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.M2/ApplicationProperties](#awsm2applicationproperties) (Required): properties of the resource

## Resource AWS.M2/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.M2/EnvironmentProperties](#awsm2environmentproperties) (Required): properties of the resource

## AWS.M2/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly, Identifier)
* **ApplicationId**: string (ReadOnly)
* **Definition**: [Definition](#definition) (Required, WriteOnly)
* **Description**: string
* **EngineType**: string (Required)
* **Name**: string (Required)
* **Tags**: [TagMap](#tagmap)

## Definition
### Properties

## TagMap
### Properties

## AWS.M2/EnvironmentProperties
### Properties
* **Description**: string: The description of the environment.
* **EngineType**: string (Required)
* **EngineVersion**: string: The version of the runtime engine for the environment.
* **EnvironmentArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the runtime environment.
* **EnvironmentId**: string (ReadOnly): The unique identifier of the environment.
* **HighAvailabilityConfig**: [HighAvailabilityConfig](#highavailabilityconfig)
* **InstanceType**: string (Required): The type of instance underlying the environment.
* **Name**: string (Required): The name of the environment.
* **PreferredMaintenanceWindow**: string: Configures a desired maintenance window for the environment. If you do not provide a value, a random system-generated value will be assigned.
* **PubliclyAccessible**: bool: Specifies whether the environment is publicly accessible.
* **SecurityGroupIds**: string[]: The list of security groups for the VPC associated with this environment.
* **StorageConfigurations**: [StorageConfiguration](#storageconfiguration)[]: The storage configurations defined for the runtime environment.
* **SubnetIds**: string[]: The unique identifiers of the subnets assigned to this runtime environment.
* **Tags**: [TagMap](#tagmap): Tags associated to this environment.

## HighAvailabilityConfig
### Properties
* **DesiredCapacity**: int (Required)

## StorageConfiguration
### Properties

## TagMap
### Properties

