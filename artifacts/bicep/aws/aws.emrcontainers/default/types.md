# AWS.EMRContainers @ default

## Resource AWS.EMRContainers/Endpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRContainers/EndpointProperties](#awsemrcontainersendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMRContainers/SecurityConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRContainers/SecurityConfigurationProperties](#awsemrcontainerssecurityconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMRContainers/VirtualCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRContainers/VirtualClusterProperties](#awsemrcontainersvirtualclusterproperties) (Required, Identifier): properties of the resource

## AtRestEncryptionConfiguration
### Properties
* **LocalDiskEncryptionConfiguration**: [LocalDiskEncryptionConfiguration](#localdiskencryptionconfiguration)
* **S3EncryptionConfiguration**: [S3EncryptionConfiguration](#s3encryptionconfiguration)

## AuthenticationConfiguration
### Properties
* **IAMConfiguration**: [IAMConfiguration](#iamconfiguration)
* **IdentityCenterConfiguration**: [IdentityCenterConfiguration](#identitycenterconfiguration)

## AuthorizationConfiguration
### Properties
* **LakeFormationConfiguration**: [LakeFormationConfiguration](#lakeformationconfiguration)

## AWS.EMRContainers/EndpointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the managed endpoint.
* **AuthProxyUrl**: string (ReadOnly): The auth proxy URL for Spark Connect connections.
* **CertificateAuthority**: [Certificate](#certificate) (ReadOnly): The certificate authority for the managed endpoint.
* **ConfigurationOverrides**: [ConfigurationOverrides](#configurationoverrides): The configuration overrides for the managed endpoint.
* **CreatedAt**: string (ReadOnly): The date and time when the managed endpoint was created.
* **ExecutionRoleArn**: string (Required): The execution role ARN for the managed endpoint.
* **FailureReason**: string (ReadOnly): The reason for a failed managed endpoint.
* **Id**: string (ReadOnly): The ID of the managed endpoint.
* **Name**: string: The name of the managed endpoint.
* **ReleaseLabel**: string (Required): The Amazon EMR release label.
* **SecurityGroup**: string (ReadOnly): The security group associated with the managed endpoint.
* **ServerUrl**: string (ReadOnly): The server URL of the managed endpoint.
* **SessionIdleTimeoutInMinutes**: int (WriteOnly): The idle timeout in minutes for sessions on the managed endpoint.
* **State**: string (ReadOnly): The state of the managed endpoint.
* **StateDetails**: string (ReadOnly): Additional details about the state of the managed endpoint.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this managed endpoint.
* **Type**: string (Required): The type of the managed endpoint.
* **VirtualClusterId**: string (Required): The ID of the virtual cluster for which the managed endpoint is created.

## AWS.EMRContainers/SecurityConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the security configuration.
* **ContainerProvider**: [ContainerProvider](#containerprovider): Container provider for the security configuration.
* **Id**: string (ReadOnly): The ID of the security configuration.
* **Name**: string: The name of the security configuration.
* **SecurityConfigurationData**: [SecurityConfigurationData](#securityconfigurationdata) (Required): Security configuration input for the security configuration.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this security configuration.

## AWS.EMRContainers/VirtualClusterProperties
### Properties
* **Arn**: string (ReadOnly)
* **ContainerProvider**: [ContainerProvider](#containerprovider) (Required): Container provider of the virtual cluster.
* **Id**: string (ReadOnly, Identifier): Id of the virtual cluster.
* **Name**: string (Required): Name of the virtual cluster.
* **SecurityConfigurationId**: string: The ID of the security configuration.
* **SessionEnabled**: bool: Whether the virtual cluster is session-enabled for Spark Connect.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this virtual cluster.

## Certificate
### Properties
* **CertificateArn**: string
* **CertificateData**: string

## CloudWatchMonitoringConfiguration
### Properties
* **LogGroupName**: string (Required)
* **LogStreamNamePrefix**: string

## ConfigurationOverrides
### Properties
* **ApplicationConfiguration**: [EMREKSConfiguration](#emreksconfiguration)[]
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)

## ContainerInfo
### Properties
* **EksInfo**: [EksInfo](#eksinfo)

## ContainerInfo
### Properties
* **EksInfo**: [EksInfo](#eksinfo) (Required)

## ContainerLogRotationConfiguration
### Properties
* **MaxFilesToKeep**: int (Required)
* **RotationSize**: string (Required)

## ContainerProvider
### Properties
* **Id**: string (Required): The container provider ID.
* **Info**: [ContainerInfo](#containerinfo)
* **Type**: string (Required): The container provider type.

## ContainerProvider
### Properties
* **Id**: string (Required, Identifier): The ID of the container cluster
* **Info**: [ContainerInfo](#containerinfo) (Required)
* **Type**: string (Required): The type of the container provider

## EksInfo
### Properties
* **Namespace**: string: The EKS namespace.

## EksInfo
### Properties
* **Namespace**: string (Required)

## EMREKSConfiguration
### Properties
* **Classification**: string (Required)
* **Configurations**: [EMREKSConfiguration](#emreksconfiguration)[]
* **Properties**: [Endpoint_Properties](#endpointproperties)

## EncryptionConfiguration
### Properties
* **AtRestEncryptionConfiguration**: [AtRestEncryptionConfiguration](#atrestencryptionconfiguration) (WriteOnly)
* **InTransitEncryptionConfiguration**: [InTransitEncryptionConfiguration](#intransitencryptionconfiguration)

## Endpoint_Properties
### Properties

## IAMConfiguration
### Properties
* **SystemRole**: string: The system role ARN.

## IdentityCenterConfiguration
### Properties
* **EnableIdentityCenter**: bool: Whether to enable Identity Center integration.
* **IdentityCenterApplicationAssignmentRequired**: bool (WriteOnly): Whether Identity Center application assignment is required.
* **IdentityCenterInstanceARN**: string (WriteOnly): The ARN of the Identity Center instance.

## InTransitEncryptionConfiguration
### Properties
* **TLSCertificateConfiguration**: [TLSCertificateConfiguration](#tlscertificateconfiguration)

## LakeFormationConfiguration
### Properties
* **AuthorizedSessionTagValue**: string: The session tag to authorize Lake Formation access.
* **QueryAccessControlEnabled**: bool (WriteOnly): Whether query access control is enabled.
* **QueryEngineRoleArn**: string: The ARN of the query engine role.
* **SecureNamespaceInfo**: [SecureNamespaceInfo](#securenamespaceinfo)

## LocalDiskEncryptionConfiguration
### Properties
* **AwsKmsKeyId**: string: The AWS KMS key ID.
* **EncryptionKeyProviderType**: string: The encryption key provider type.

## MonitoringConfiguration
### Properties
* **CloudWatchMonitoringConfiguration**: [CloudWatchMonitoringConfiguration](#cloudwatchmonitoringconfiguration)
* **ContainerLogRotationConfiguration**: [ContainerLogRotationConfiguration](#containerlogrotationconfiguration)
* **PersistentAppUI**: string
* **S3MonitoringConfiguration**: [S3MonitoringConfiguration](#s3monitoringconfiguration)

## S3EncryptionConfiguration
### Properties
* **EncryptionOption**: string: The S3 encryption option.
* **KMSKeyId**: string: The KMS key ID for encryption.

## S3MonitoringConfiguration
### Properties
* **LogUri**: string (Required)

## SecureNamespaceInfo
### Properties
* **ClusterId**: string: The ID of the cluster.
* **Namespace**: string: The namespace.

## SecurityConfigurationData
### Properties
* **AuthenticationConfiguration**: [AuthenticationConfiguration](#authenticationconfiguration)
* **AuthorizationConfiguration**: [AuthorizationConfiguration](#authorizationconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)

## Tag
### Properties
* **Key**: string (Required): A user-defined key, which is the minimum required information for a valid tag.
* **Value**: string (Required): A user-defined value, which is optional in a tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TLSCertificateConfiguration
### Properties
* **CertificateProviderType**: string: The certificate provider type.
* **PrivateKeySecretArn**: string: The ARN of the secret containing the private key.
* **PublicKeySecretArn**: string: The ARN of the secret containing the public key.

