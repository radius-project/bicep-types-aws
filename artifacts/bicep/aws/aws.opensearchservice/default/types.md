# AWS.OpenSearchService @ default

## Resource AWS.OpenSearchService/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchService/DomainProperties](#awsopensearchservicedomainproperties): properties of the resource

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

## Domain_AccessPolicies
### Properties

## Domain_AdvancedOptions
### Properties

## AdvancedSecurityOptionsInput
### Properties
* **AnonymousAuthDisableDate**: string (ReadOnly)
* **AnonymousAuthEnabled**: bool
* **Enabled**: bool
* **InternalUserDatabaseEnabled**: bool
* **MasterUserOptions**: [MasterUserOptions](#masteruseroptions) (WriteOnly)
* **SAMLOptions**: [SAMLOptions](#samloptions)

## MasterUserOptions
### Properties
* **MasterUserARN**: string
* **MasterUserName**: string
* **MasterUserPassword**: string

## SAMLOptions
### Properties
* **Enabled**: bool
* **Idp**: [Idp](#idp)
* **MasterBackendRole**: string (WriteOnly)
* **MasterUserName**: string (WriteOnly)
* **RolesKey**: string
* **SessionTimeoutMinutes**: int
* **SubjectKey**: string

## Idp
### Properties
* **EntityId**: string (Required)
* **MetadataContent**: string (Required)

## ClusterConfig
### Properties
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

## ZoneAwarenessConfig
### Properties
* **AvailabilityZoneCount**: int

## CognitoOptions
### Properties
* **Enabled**: bool
* **IdentityPoolId**: string
* **RoleArn**: string
* **UserPoolId**: string

## DomainEndpointOptions
### Properties
* **CustomEndpoint**: string
* **CustomEndpointCertificateArn**: string
* **CustomEndpointEnabled**: bool
* **EnforceHTTPS**: bool
* **TLSSecurityPolicy**: string

## Domain_DomainEndpoints
### Properties

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

## Domain_LogPublishingOptions
### Properties

## NodeToNodeEncryptionOptions
### Properties
* **Enabled**: bool

## OffPeakWindowOptions
### Properties
* **Enabled**: bool
* **OffPeakWindow**: [OffPeakWindow](#offpeakwindow)

## OffPeakWindow
### Properties
* **WindowStartTime**: [WindowStartTime](#windowstarttime)

## WindowStartTime
### Properties
* **Hours**: int (Required)
* **Minutes**: int (Required)

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

