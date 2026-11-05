# AWS.AppRunner @ default

## Resource AWS.AppRunner/AutoScalingConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/AutoScalingConfigurationProperties](#awsapprunnerautoscalingconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.AppRunner/ObservabilityConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/ObservabilityConfigurationProperties](#awsapprunnerobservabilityconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.AppRunner/Service@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/ServiceProperties](#awsapprunnerserviceproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppRunner/VpcConnector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/VpcConnectorProperties](#awsapprunnervpcconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppRunner/VpcIngressConnection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppRunner/VpcIngressConnectionProperties](#awsapprunnervpcingressconnectionproperties) (Required, Identifier): properties of the resource

## AuthenticationConfiguration
### Properties
* **AccessRoleArn**: string: Access Role Arn
* **ConnectionArn**: string: Connection Arn

## AWS.AppRunner/AutoScalingConfigurationProperties
### Properties
* **AutoScalingConfigurationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of this auto scaling configuration.
* **AutoScalingConfigurationName**: string: The customer-provided auto scaling configuration name.  When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration. The auto scaling configuration name can be used in multiple revisions of a configuration.
* **AutoScalingConfigurationRevision**: int (ReadOnly): The revision of this auto scaling configuration. It's unique among all the active configurations ("Status": "ACTIVE") that share the same AutoScalingConfigurationName.
* **Latest**: bool (ReadOnly): It's set to true for the configuration with the highest Revision among all configurations that share the same AutoScalingConfigurationName. It's set to false otherwise. App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
* **MaxConcurrency**: int: The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up to use more instances to process the requests.
* **MaxSize**: int: The maximum number of instances that an App Runner service scales up to. At most MaxSize instances actively serve traffic for your service.
* **MinSize**: int: The minimum number of instances that App Runner provisions for a service. The service always has at least MinSize provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
* **Tags**: [Tag](#tag)[]: A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.

## AWS.AppRunner/ObservabilityConfigurationProperties
### Properties
* **Latest**: bool (ReadOnly): It's set to true for the configuration with the highest Revision among all configurations that share the same Name. It's set to false otherwise.
* **ObservabilityConfigurationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of this ObservabilityConfiguration
* **ObservabilityConfigurationName**: string: A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number 1 of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
* **ObservabilityConfigurationRevision**: int (ReadOnly): The revision of this observability configuration. It's unique among all the active configurations ('Status': 'ACTIVE') that share the same ObservabilityConfigurationName.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
* **TraceConfiguration**: [TraceConfiguration](#traceconfiguration): The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.

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

## AWS.AppRunner/VpcConnectorProperties
### Properties
* **SecurityGroups**: string[]: A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.
* **Subnets**: string[] (Required): A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of metadata items that you can associate with your VPC connector resource. A tag is a key-value pair.
* **VpcConnectorArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of this VPC connector.
* **VpcConnectorName**: string: A name for the VPC connector. If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.
* **VpcConnectorRevision**: int (ReadOnly): The revision of this VPC connector. It's unique among all the active connectors ("Status": "ACTIVE") that share the same Name.

## AWS.AppRunner/VpcIngressConnectionProperties
### Properties
* **DomainName**: string (ReadOnly): The Domain name associated with the VPC Ingress Connection.
* **IngressVpcConfiguration**: [IngressVpcConfiguration](#ingressvpcconfiguration) (Required)
* **ServiceArn**: string (Required): The Amazon Resource Name (ARN) of the service.
* **Status**: string (ReadOnly): The current status of the VpcIngressConnection.
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **VpcIngressConnectionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the VpcIngressConnection.
* **VpcIngressConnectionName**: string: The customer-provided Vpc Ingress Connection name.

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

## CodeRepository
### Properties
* **CodeConfiguration**: [CodeConfiguration](#codeconfiguration)
* **RepositoryUrl**: string (Required): Repository Url
* **SourceCodeVersion**: [SourceCodeVersion](#sourcecodeversion) (Required)
* **SourceDirectory**: string: Source Directory

## EgressConfiguration
### Properties
* **EgressType**: string (Required): Network egress type.
* **VpcConnectorArn**: string: The Amazon Resource Name (ARN) of the App Runner VpcConnector.

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

## ImageConfiguration
### Properties
* **Port**: string: Port
* **RuntimeEnvironmentSecrets**: [KeyValuePair](#keyvaluepair)[]: The secrets and parameters that get referenced by your service as environment variables
* **RuntimeEnvironmentVariables**: [KeyValuePair](#keyvaluepair)[]
* **StartCommand**: string: Start Command

## ImageRepository
### Properties
* **ImageConfiguration**: [ImageConfiguration](#imageconfiguration)
* **ImageIdentifier**: string (Required): Image Identifier
* **ImageRepositoryType**: string (Required): Image Repository Type

## IngressConfiguration
### Properties
* **IsPubliclyAccessible**: bool (Required): It's set to true if the Apprunner service is publicly accessible. It's set to false otherwise.

## IngressVpcConfiguration
### Properties
* **VpcEndpointId**: string (Required): The ID of the VPC endpoint that your App Runner service connects to.
* **VpcId**: string (Required): The ID of the VPC that the VPC endpoint is used in.

## InstanceConfiguration
### Properties
* **Cpu**: string: CPU
* **InstanceRoleArn**: string: Instance Role Arn
* **Memory**: string: Memory

## KeyValuePair
### Properties
* **Name**: string
* **Value**: string

## NetworkConfiguration
### Properties
* **EgressConfiguration**: [EgressConfiguration](#egressconfiguration)
* **IngressConfiguration**: [IngressConfiguration](#ingressconfiguration)
* **IpAddressType**: string: App Runner service endpoint IP address type

## ServiceObservabilityConfiguration
### Properties
* **ObservabilityConfigurationArn**: string: The Amazon Resource Name (ARN) of the App Runner ObservabilityConfiguration.
* **ObservabilityEnabled**: bool (Required): Observability enabled

## SourceCodeVersion
### Properties
* **Type**: string (Required): Source Code Version Type
* **Value**: string (Required): Source Code Version Value

## SourceConfiguration
### Properties
* **AuthenticationConfiguration**: [AuthenticationConfiguration](#authenticationconfiguration)
* **AutoDeploymentsEnabled**: bool: Auto Deployment enabled
* **CodeRepository**: [CodeRepository](#coderepository)
* **ImageRepository**: [ImageRepository](#imagerepository)

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## TraceConfiguration
### Properties
* **Vendor**: string (Required): The implementation provider chosen for tracing App Runner services.

