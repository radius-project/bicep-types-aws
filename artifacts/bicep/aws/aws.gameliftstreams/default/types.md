# AWS.GameLiftStreams @ default

## Resource AWS.GameLiftStreams/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLiftStreams/ApplicationProperties](#awsgameliftstreamsapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.GameLiftStreams/StreamGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLiftStreams/StreamGroupProperties](#awsgameliftstreamsstreamgroupproperties) (Required, Identifier): properties of the resource

## AWS.GameLiftStreams/ApplicationProperties
### Properties
* **ApplicationLogOutputUri**: string
* **ApplicationLogPaths**: string[]
* **ApplicationSourceUri**: string (Required)
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string (Required)
* **ExecutablePath**: string (Required)
* **Id**: string (ReadOnly)
* **RuntimeEnvironment**: [RuntimeEnvironment](#runtimeenvironment) (Required)
* **Tags**: [Tags](#tags)

## AWS.GameLiftStreams/StreamGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DefaultApplication**: [DefaultApplication](#defaultapplication)
* **Description**: string (Required)
* **Id**: string (ReadOnly)
* **LocationConfigurations**: [LocationConfiguration](#locationconfiguration)[] (Required)
* **StreamClass**: string (Required)
* **Tags**: [Tags](#tags)

## DefaultApplication
### Properties
* **Arn**: string (Identifier)
* **Id**: string

## LocationConfiguration
### Properties
* **AlwaysOnCapacity**: int
* **LocationName**: string (Required)
* **MaximumCapacity**: int
* **OnDemandCapacity**: int: This shape is deprecated.
* **TargetIdleCapacity**: int
* **VpcTransitConfiguration**: [VpcTransitConfiguration](#vpctransitconfiguration)

## RuntimeEnvironment
### Properties
* **Type**: string (Required)
* **Version**: string (Required)

## Tags
### Properties

## Tags
### Properties

## VpcTransitConfiguration
### Properties
* **Ipv4CidrBlocks**: string[] (Required)
* **VpcId**: string (Required)

