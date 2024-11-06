# AWS.OpenSearchService @ default

## Resource AWS.OpenSearchService/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchService/ApplicationProperties](#awsopensearchserviceapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.OpenSearchService/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchService/DomainProperties](#awsopensearchservicedomainproperties) (Identifier): properties of the resource

## AdvancedSecurityOptionsInput
### Properties
* **AnonymousAuthDisableDate**: string (ReadOnly)
* **AnonymousAuthEnabled**: bool
* **Enabled**: bool
* **InternalUserDatabaseEnabled**: bool
* **JWTOptions**: [JWTOptions](#jwtoptions)
* **MasterUserOptions**: [MasterUserOptions](#masteruseroptions) (WriteOnly)
* **SAMLOptions**: [SAMLOptions](#samloptions)

## AppConfig
### Properties
* **Key**: string (Required): The configuration key
* **Value**: string (Required): The configuration value.

## Application_IamIdentityCenterOptions
### Properties
* **Enabled**: bool: Whether IAM Identity Center is enabled.
* **IamIdentityCenterInstanceArn**: string: The ARN of the IAM Identity Center instance.
* **IamRoleForIdentityCenterApplicationArn**: string: The ARN of the IAM role for Identity Center application.

## AWS.OpenSearchService/ApplicationProperties
### Properties
* **AppConfigs**: [AppConfig](#appconfig)[]: List of application configurations.
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) format.
* **DataSources**: [DataSource](#datasource)[]: List of data sources.
* **Endpoint**: string: The endpoint for the application.
* **IamIdentityCenterOptions**: [Application_IamIdentityCenterOptions](#applicationiamidentitycenteroptions): Options for configuring IAM Identity Center
* **Id**: string (ReadOnly): The identifier of the application.
* **Name**: string (Required, Identifier): The name of the application.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this application.

## AWS.OpenSearchService/DomainProperties
### Properties
* **AccessPolicies**: [Domain_AccessPolicies](#domainaccesspolicies)
* **AdvancedOptions**: [Domain_AdvancedOptions](#domainadvancedoptions)
* **AdvancedSecurityOptions**: [AdvancedSecurityOptionsInput](#advancedsecurityoptionsinput)
* **Arn**: string (ReadOnly)
* **ClusterConfig**: [ClusterConfig](#clusterconfig)
* **CognitoOptions**: [CognitoOptions](#cognitooptions)
* **DomainArn**: string (ReadOnly)
* **DomainEndpoint**: string (ReadOnly)
* **DomainEndpointOptions**: [DomainEndpointOptions](#domainendpointoptions)
* **DomainEndpoints**: [Domain_DomainEndpoints](#domaindomainendpoints) (ReadOnly)
* **DomainEndpointV2**: string (ReadOnly)
* **DomainName**: string (Identifier)
* **EBSOptions**: [EBSOptions](#ebsoptions)
* **EncryptionAtRestOptions**: [EncryptionAtRestOptions](#encryptionatrestoptions)
* **EngineVersion**: string
* **Id**: string (ReadOnly)
* **IdentityCenterOptions**: [IdentityCenterOptions](#identitycenteroptions)
* **IPAddressType**: string
* **LogPublishingOptions**: [Domain_LogPublishingOptions](#domainlogpublishingoptions)
* **NodeToNodeEncryptionOptions**: [NodeToNodeEncryptionOptions](#nodetonodeencryptionoptions)
* **OffPeakWindowOptions**: [OffPeakWindowOptions](#offpeakwindowoptions)
* **ServiceSoftwareOptions**: [ServiceSoftwareOptions](#servicesoftwareoptions) (ReadOnly)
* **SkipShardMigrationWait**: bool
* **SnapshotOptions**: [SnapshotOptions](#snapshotoptions)
* **SoftwareUpdateOptions**: [SoftwareUpdateOptions](#softwareupdateoptions)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this Domain.
* **VPCOptions**: [VPCOptions](#vpcoptions)

## ClusterConfig
### Properties
* **ColdStorageOptions**: [ColdStorageOptions](#coldstorageoptions)
* **DedicatedMasterCount**: int
* **DedicatedMasterEnabled**: bool
* **DedicatedMasterType**: string
* **InstanceCount**: int
* **InstanceType**: string
* **MultiAZWithStandbyEnabled**: bool
* **WarmCount**: int
* **WarmEnabled**: bool
* **WarmType**: string
* **ZoneAwarenessConfig**: [ZoneAwarenessConfig](#zoneawarenessconfig)
* **ZoneAwarenessEnabled**: bool

## CognitoOptions
### Properties
* **Enabled**: bool
* **IdentityPoolId**: string
* **RoleArn**: string
* **UserPoolId**: string

## ColdStorageOptions
### Properties
* **Enabled**: bool

## DataSource
### Properties
* **DataSourceArn**: string (Required): The ARN of the data source.
* **DataSourceDescription**: string: Description of the data source.

## Domain_AccessPolicies
### Properties

## Domain_AdvancedOptions
### Properties

## Domain_DomainEndpoints
### Properties

## Domain_LogPublishingOptions
### Properties

## DomainEndpointOptions
### Properties
* **CustomEndpoint**: string
* **CustomEndpointCertificateArn**: string
* **CustomEndpointEnabled**: bool
* **EnforceHTTPS**: bool
* **TLSSecurityPolicy**: string

## EBSOptions
### Properties
* **EBSEnabled**: bool
* **Iops**: int
* **Throughput**: int
* **VolumeSize**: int
* **VolumeType**: string

## EncryptionAtRestOptions
### Properties
* **Enabled**: bool
* **KmsKeyId**: string

## IdentityCenterOptions
### Properties
* **EnabledAPIAccess**: bool: Whether Identity Center is enabled.
* **IdentityCenterApplicationARN**: string (ReadOnly): The ARN of the Identity Center application.
* **IdentityCenterInstanceARN**: string: The ARN of the Identity Center instance.
* **IdentityStoreId**: string (ReadOnly): The IdentityStoreId for Identity Center options.
* **RolesKey**: string: The roles key for Identity Center options.
* **SubjectKey**: string: The subject key for Identity Center options.

## Idp
### Properties
* **EntityId**: string (Required)
* **MetadataContent**: string (Required)

## JWTOptions
### Properties
* **Enabled**: bool
* **PublicKey**: string (WriteOnly)
* **RolesKey**: string
* **SubjectKey**: string

## MasterUserOptions
### Properties
* **MasterUserARN**: string
* **MasterUserName**: string
* **MasterUserPassword**: string

## NodeToNodeEncryptionOptions
### Properties
* **Enabled**: bool

## OffPeakWindow
### Properties
* **WindowStartTime**: [WindowStartTime](#windowstarttime)

## OffPeakWindowOptions
### Properties
* **Enabled**: bool
* **OffPeakWindow**: [OffPeakWindow](#offpeakwindow)

## SAMLOptions
### Properties
* **Enabled**: bool
* **Idp**: [Idp](#idp)
* **MasterBackendRole**: string (WriteOnly)
* **MasterUserName**: string (WriteOnly)
* **RolesKey**: string
* **SessionTimeoutMinutes**: int
* **SubjectKey**: string

## ServiceSoftwareOptions
### Properties
* **AutomatedUpdateDate**: string
* **Cancellable**: bool
* **CurrentVersion**: string
* **Description**: string
* **NewVersion**: string
* **OptionalDeployment**: bool
* **UpdateAvailable**: bool
* **UpdateStatus**: string

## SnapshotOptions
### Properties
* **AutomatedSnapshotStartHour**: int

## SoftwareUpdateOptions
### Properties
* **AutoSoftwareUpdateEnabled**: bool

## Tag
### Properties
* **Key**: string (Required): The key in the key-value pair
* **Value**: string (Required): The value in the key-value pair

## Tag
### Properties
* **Key**: string (Required): The value of the tag.
* **Value**: string (Required): The key of the tag.

## VPCOptions
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## WindowStartTime
### Properties
* **Hours**: int (Required)
* **Minutes**: int (Required)

## ZoneAwarenessConfig
### Properties
* **AvailabilityZoneCount**: int

