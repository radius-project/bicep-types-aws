# AWS.OpenSearchService @ default

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
* **MasterUserOptions**: [MasterUserOptions](#masteruseroptions) (WriteOnly)
* **SAMLOptions**: [SAMLOptions](#samloptions)

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
* **IPAddressType**: string
* **LogPublishingOptions**: [Domain_LogPublishingOptions](#domainlogpublishingoptions)
* **NodeToNodeEncryptionOptions**: [NodeToNodeEncryptionOptions](#nodetonodeencryptionoptions)
* **OffPeakWindowOptions**: [OffPeakWindowOptions](#offpeakwindowoptions)
* **ServiceSoftwareOptions**: [ServiceSoftwareOptions](#servicesoftwareoptions) (ReadOnly)
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

## Idp
### Properties
* **EntityId**: string (Required)
* **MetadataContent**: string (Required)

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

