# AWS.AppRunner @ default

## Resource AWS.AppRunner/Service@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/ServiceProperties](#awsapprunnerserviceproperties) (Required): properties of the resource

## Resource AWS.AppRunner/VpcIngressConnection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/VpcIngressConnectionProperties](#awsapprunnervpcingressconnectionproperties) (Required): properties of the resource

## AWS.AppRunner/ServiceProperties
### Properties
* **AutoScalingConfigurationArn**: string (WriteOnly): Autoscaling configuration ARN
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **HealthCheckConfiguration**: [HealthCheckConfiguration](#healthcheckconfiguration)
* **InstanceConfiguration**: [InstanceConfiguration](#instanceconfiguration)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **ObservabilityConfiguration**: [ServiceObservabilityConfiguration](#serviceobservabilityconfiguration)
* **ServiceArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the AppRunner Service.
* **ServiceId**: string (ReadOnly): The AppRunner Service Id
* **ServiceName**: string: The AppRunner Service Name.
* **ServiceUrl**: string (ReadOnly): The Service Url of the AppRunner Service.
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration) (Required)
* **Status**: string (ReadOnly): AppRunner Service status.
* **Tags**: [Tag](#tag)[] (WriteOnly)

## EncryptionConfiguration
### Properties
* **KmsKey**: string (Required): The KMS Key

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
* **InstanceRoleArn**: string: Instance Role Arn
* **Memory**: string: Memory

## NetworkConfiguration
### Properties
* **EgressConfiguration**: [EgressConfiguration](#egressconfiguration)
* **IngressConfiguration**: [IngressConfiguration](#ingressconfiguration)
* **IpAddressType**: string: App Runner service endpoint IP address type

## EgressConfiguration
### Properties
* **EgressType**: string (Required): Network egress type.
* **VpcConnectorArn**: string: The Amazon Resource Name (ARN) of the App Runner VpcConnector.

## IngressConfiguration
### Properties
* **IsPubliclyAccessible**: bool (Required): It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.

## ServiceObservabilityConfiguration
### Properties
* **ObservabilityConfigurationArn**: string: The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.
* **ObservabilityEnabled**: bool (Required): Observability enabled

## SourceConfiguration
### Properties
* **AuthenticationConfiguration**: [AuthenticationConfiguration](#authenticationconfiguration)
* **AutoDeploymentsEnabled**: bool: Auto Deployment enabled
* **CodeRepository**: [CodeRepository](#coderepository)
* **ImageRepository**: [ImageRepository](#imagerepository)

## AuthenticationConfiguration
### Properties
* **AccessRoleArn**: string: Access Role Arn
* **ConnectionArn**: string: Connection Arn

## CodeRepository
### Properties
* **CodeConfiguration**: [CodeConfiguration](#codeconfiguration)
* **RepositoryUrl**: string (Required): Repository Url
* **SourceCodeVersion**: [SourceCodeVersion](#sourcecodeversion) (Required)
* **SourceDirectory**: string: Source Directory

## CodeConfiguration
### Properties
* **CodeConfigurationValues**: [CodeConfigurationValues](#codeconfigurationvalues)
* **ConfigurationSource**: string (Required): Configuration Source

## CodeConfigurationValues
### Properties
* **BuildCommand**: string: Build Command
* **Port**: string: Port
* **Runtime**: string (Required): Runtime
* **RuntimeEnvironmentSecrets**: [KeyValuePair](#keyvaluepair)[]: The secrets and parameters that get referenced by your service as environment variables
* **RuntimeEnvironmentVariables**: [KeyValuePair](#keyvaluepair)[]
* **StartCommand**: string: Start Command

## KeyValuePair
### Properties
* **Name**: string
* **Value**: string

## SourceCodeVersion
### Properties
* **Type**: string (Required): Source Code Version Type
* **Value**: string (Required): Source Code Version Value

## ImageRepository
### Properties
* **ImageConfiguration**: [ImageConfiguration](#imageconfiguration)
* **ImageIdentifier**: string (Required): Image Identifier
* **ImageRepositoryType**: string (Required): Image Repository Type

## ImageConfiguration
### Properties
* **Port**: string: Port
* **RuntimeEnvironmentSecrets**: [KeyValuePair](#keyvaluepair)[]: The secrets and parameters that get referenced by your service as environment variables
* **RuntimeEnvironmentVariables**: [KeyValuePair](#keyvaluepair)[]
* **StartCommand**: string: Start Command

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.AppRunner/VpcIngressConnectionProperties
### Properties
* **DomainName**: string (ReadOnly): The Domain name associated with the VPC Ingress Connection.
* **IngressVpcConfiguration**: [IngressVpcConfiguration](#ingressvpcconfiguration) (Required)
* **ServiceArn**: string (Required): The Amazon Resource Name (ARN) of the service.
* **Status**: string (ReadOnly): The current status of the VpcIngressConnection.
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **VpcIngressConnectionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the VpcIngressConnection.
* **VpcIngressConnectionName**: string: The customer-provided Vpc Ingress Connection name.

## IngressVpcConfiguration
### Properties
* **VpcEndpointId**: string (Required): The ID of the VPC endpoint that your App Runner service connects to.
* **VpcId**: string (Required): The ID of the VPC that the VPC endpoint is used in.

## Tag
### Properties
* **Key**: string
* **Value**: string

