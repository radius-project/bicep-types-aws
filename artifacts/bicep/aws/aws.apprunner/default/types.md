# AWS.AppRunner @ default

## Resource AWS.AppRunner/Service@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppRunner/ServiceProperties](#awsapprunnerserviceproperties): properties of the resource

## AWS.AppRunner/ServiceProperties
### Properties
* **AutoScalingConfigurationArn**: string (WriteOnly): Autoscaling configuration ARN
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **HealthCheckConfiguration**: [HealthCheckConfiguration](#healthcheckconfiguration)
* **InstanceConfiguration**: [InstanceConfiguration](#instanceconfiguration)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **ObservabilityConfiguration**: [ServiceObservabilityConfiguration](#serviceobservabilityconfiguration)
* **ServiceArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the AppRunner Service.
* **ServiceId**: string (ReadOnly): The AppRunner Service Id
* **ServiceName**: string: The AppRunner Service Name.
* **ServiceUrl**: string (ReadOnly): The Service Url of the AppRunner Service.
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration)
* **Status**: string (ReadOnly): AppRunner Service status.
* **Tags**: [Tag](#tag)[] (WriteOnly)

## EncryptionConfiguration
### Properties
* **KmsKey**: string: The KMS Key

## HealthCheckConfiguration
### Properties
* **HealthyThreshold**: int: Health check Healthy Threshold
* **Interval**: int: Health check Interval
* **Path**: string: Health check Path
* **Protocol**: string: Health Check Protocol
* **Timeout**: int: Health check Timeout
* **UnhealthyThreshold**: int: Health check Unhealthy Threshold

## InstanceConfiguration
### Properties
* **Cpu**: string: CPU
* **InstanceRoleArn**: [RoleArn](#rolearn): Instance Role Arn
* **Memory**: string: Memory

## RoleArn
### Properties

## NetworkConfiguration
### Properties
* **EgressConfiguration**: [EgressConfiguration](#egressconfiguration)

## EgressConfiguration
### Properties
* **EgressType**: string: Network egress type.
* **VpcConnectorArn**: string: The Amazon Resource Name (ARN) of the App Runner VpcConnector.

## ServiceObservabilityConfiguration
### Properties
* **ObservabilityConfigurationArn**: string: The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.
* **ObservabilityEnabled**: bool: Observability enabled

## SourceConfiguration
### Properties
* **AuthenticationConfiguration**: [AuthenticationConfiguration](#authenticationconfiguration)
* **AutoDeploymentsEnabled**: bool: Auto Deployment enabled
* **CodeRepository**: [CodeRepository](#coderepository)
* **ImageRepository**: [ImageRepository](#imagerepository)

## AuthenticationConfiguration
### Properties
* **AccessRoleArn**: [RoleArn](#rolearn): Access Role Arn
* **ConnectionArn**: string: Connection Arn

## CodeRepository
### Properties
* **CodeConfiguration**: [CodeConfiguration](#codeconfiguration)
* **RepositoryUrl**: string: Repository Url
* **SourceCodeVersion**: [SourceCodeVersion](#sourcecodeversion)

## CodeConfiguration
### Properties
* **CodeConfigurationValues**: [CodeConfigurationValues](#codeconfigurationvalues)
* **ConfigurationSource**: string: Configuration Source

## CodeConfigurationValues
### Properties
* **BuildCommand**: string: Build Command
* **Port**: string: Port
* **Runtime**: string: Runtime
* **RuntimeEnvironmentVariables**: [KeyValuePair](#keyvaluepair)[]
* **StartCommand**: string: Start Command

## KeyValuePair
### Properties
* **Name**: string
* **Value**: string

## SourceCodeVersion
### Properties
* **Type**: string: Source Code Version Type
* **Value**: string: Source Code Version Value

## ImageRepository
### Properties
* **ImageConfiguration**: [ImageConfiguration](#imageconfiguration)
* **ImageIdentifier**: string: Image Identifier
* **ImageRepositoryType**: string: Image Repository Type

## ImageConfiguration
### Properties
* **Port**: string: Port
* **RuntimeEnvironmentVariables**: [KeyValuePair](#keyvaluepair)[]
* **StartCommand**: string: Start Command

## Tag
### Properties
* **Key**: string
* **Value**: string

