# AWS.EMRContainers @ default

## Resource AWS.EMRContainers/Endpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRContainers/EndpointProperties](#awsemrcontainersendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMRContainers/JobRun@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRContainers/JobRunProperties](#awsemrcontainersjobrunproperties) (Identifier): properties of the resource

## Resource AWS.EMRContainers/JobTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMRContainers/JobTemplateProperties](#awsemrcontainersjobtemplateproperties) (Required, Identifier): properties of the resource

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

## AWS.EMRContainers/JobRunProperties
### Properties
* **Arn**: string (Identifier): The ARN of the job run.
* **ConfigurationOverrides**: [ConfigurationOverrides](#configurationoverrides)
* **CreatedAt**: string (ReadOnly): The date and time when the job run was created.
* **CreatedBy**: string (ReadOnly): The user who created the job run.
* **ExecutionRoleArn**: string: The execution role ARN of the job run.
* **FailureReason**: string (ReadOnly): The reasons why the job run has failed.
* **FinishedAt**: string (ReadOnly): The date and time when the job run has finished.
* **Id**: string (ReadOnly): The ID of the job run.
* **JobDriver**: [JobDriver](#jobdriver)
* **Name**: string: The name of the job run.
* **ReleaseLabel**: string: The release version of Amazon EMR.
* **RetryPolicyConfiguration**: [RetryPolicyConfiguration](#retrypolicyconfiguration)
* **RetryPolicyExecution**: [RetryPolicyExecution](#retrypolicyexecution) (ReadOnly)
* **State**: string (ReadOnly): The state of the job run.
* **Tags**: [Tag](#tag)[]: The assigned tags of the job run.
* **VirtualClusterId**: string: The ID of the job run's virtual cluster.

## AWS.EMRContainers/JobTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the job template.
* **CreatedAt**: string (ReadOnly): The date and time when the job template was created.
* **CreatedBy**: string (ReadOnly): The user who created the job template.
* **Id**: string (ReadOnly): The ID of the job template.
* **JobTemplateData**: [JobTemplateData](#jobtemplatedata) (Required)
* **Name**: string (Required): The specified name of the job template.
* **Tags**: [Tag](#tag)[]: The tags that are associated with the job template.

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

## CloudWatchMonitoringConfiguration
### Properties
* **LogGroupName**: string (Required)
* **LogStreamNamePrefix**: string

## Configuration
### Properties
* **Classification**: string (Required): The classification within a configuration.
* **Configurations**: [Configuration](#configuration)[]
* **Properties**: [JobRun_Properties](#jobrunproperties)

## Configuration
### Properties
* **Classification**: string (Required): The classification within a configuration.
* **Configurations**: [Configuration](#configuration)[]
* **Properties**: [JobTemplate_Properties](#jobtemplateproperties): A set of properties specified within a configuration classification.

## ConfigurationOverrides
### Properties
* **ApplicationConfiguration**: [EMREKSConfiguration](#emreksconfiguration)[]
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)

## ConfigurationOverrides
### Properties
* **ApplicationConfiguration**: [Configuration](#configuration)[]
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
### Additional Properties
* **Additional Properties Type**: string

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

## JobDriver
### Properties
* **SparkSqlJobDriver**: [SparkSqlJobDriver](#sparksqljobdriver)
* **SparkSubmitJobDriver**: [SparkSubmitJobDriver](#sparksubmitjobdriver)

## JobDriver
### Properties
* **SparkSqlJobDriver**: [SparkSqlJobDriver](#sparksqljobdriver)
* **SparkSubmitJobDriver**: [SparkSubmitJobDriver](#sparksubmitjobdriver)

## JobRun_Properties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobTemplate_JobTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobTemplate_ParameterConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: [TemplateParameterConfiguration](#templateparameterconfiguration)

## JobTemplate_Properties
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobTemplateData
### Properties
* **ConfigurationOverrides**: [ParametricConfigurationOverrides](#parametricconfigurationoverrides)
* **ExecutionRoleArn**: string (Required): The execution role ARN of the job run, or a template parameter reference.
* **JobDriver**: [JobDriver](#jobdriver) (Required)
* **JobTags**: [JobTemplate_JobTags](#jobtemplatejobtags): The tags assigned to jobs started using the job template.
* **ParameterConfiguration**: [JobTemplate_ParameterConfiguration](#jobtemplateparameterconfiguration): The configuration of parameters existing in the job template.
* **ReleaseLabel**: string (Required): The release version of Amazon EMR, or a template parameter reference.

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

## ManagedLogs
### Properties
* **AllowAWSToRetainLogs**: string
* **EncryptionKeyArn**: string

## MonitoringConfiguration
### Properties
* **CloudWatchMonitoringConfiguration**: [CloudWatchMonitoringConfiguration](#cloudwatchmonitoringconfiguration)
* **ContainerLogRotationConfiguration**: [ContainerLogRotationConfiguration](#containerlogrotationconfiguration)
* **PersistentAppUI**: string
* **S3MonitoringConfiguration**: [S3MonitoringConfiguration](#s3monitoringconfiguration)

## MonitoringConfiguration
### Properties
* **CloudWatchMonitoringConfiguration**: [CloudWatchMonitoringConfiguration](#cloudwatchmonitoringconfiguration)
* **ContainerLogRotationConfiguration**: [ContainerLogRotationConfiguration](#containerlogrotationconfiguration)
* **ManagedLogs**: [ManagedLogs](#managedlogs)
* **PersistentAppUI**: string
* **S3MonitoringConfiguration**: [S3MonitoringConfiguration](#s3monitoringconfiguration)

## ParametricCloudWatchMonitoringConfiguration
### Properties
* **LogGroupName**: string: The name of the log group for log publishing, or a template parameter reference.
* **LogStreamNamePrefix**: string: The specified name prefix for log streams.

## ParametricConfigurationOverrides
### Properties
* **ApplicationConfiguration**: [Configuration](#configuration)[]
* **MonitoringConfiguration**: [ParametricMonitoringConfiguration](#parametricmonitoringconfiguration)

## ParametricMonitoringConfiguration
### Properties
* **CloudWatchMonitoringConfiguration**: [ParametricCloudWatchMonitoringConfiguration](#parametriccloudwatchmonitoringconfiguration)
* **PersistentAppUI**: string: Monitoring configurations for the persistent application UI, or a template parameter reference.
* **S3MonitoringConfiguration**: [ParametricS3MonitoringConfiguration](#parametrics3monitoringconfiguration)

## ParametricS3MonitoringConfiguration
### Properties
* **LogUri**: string: Amazon S3 destination URI for log publishing.

## RetryPolicyConfiguration
### Properties
* **MaxAttempts**: int (Required): The maximum number of attempts on the job's driver.

## RetryPolicyExecution
### Properties
* **CurrentAttemptCount**: int (Required): The current number of attempts made on the driver of the job.

## S3EncryptionConfiguration
### Properties
* **EncryptionOption**: string: The S3 encryption option.
* **KMSKeyId**: string: The KMS key ID for encryption.

## S3MonitoringConfiguration
### Properties
* **LogUri**: string (Required)

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

## SparkSqlJobDriver
### Properties
* **EntryPoint**: string
* **SparkSqlParameters**: string

## SparkSqlJobDriver
### Properties
* **EntryPoint**: string
* **SparkSqlParameters**: string

## SparkSubmitJobDriver
### Properties
* **EntryPoint**: string (Required)
* **EntryPointArguments**: string[]
* **SparkSubmitParameters**: string

## SparkSubmitJobDriver
### Properties
* **EntryPoint**: string (Required)
* **EntryPointArguments**: string[]
* **SparkSubmitParameters**: string

## Tag
### Properties
* **Key**: string (Required): A user-defined key, which is the minimum required information for a valid tag.
* **Value**: string (Required): A user-defined value, which is optional in a tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TemplateParameterConfiguration
### Properties
* **DefaultValue**: string: The default value for the job template parameter.
* **Type**: string: The type of the job template parameter.

## TLSCertificateConfiguration
### Properties
* **CertificateProviderType**: string: The certificate provider type.
* **PrivateKeySecretArn**: string: The ARN of the secret containing the private key.
* **PublicKeySecretArn**: string: The ARN of the secret containing the public key.

