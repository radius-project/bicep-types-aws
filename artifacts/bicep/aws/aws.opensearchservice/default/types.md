# AWS.OpenSearchService @ default

## Resource AWS.OpenSearchService/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
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
* **DomainName**: string
* **EBSOptions**: [EBSOptions](#ebsoptions)
* **EncryptionAtRestOptions**: [EncryptionAtRestOptions](#encryptionatrestoptions)
* **EngineVersion**: string
* **Id**: string (ReadOnly)
* **LogPublishingOptions**: [Domain_LogPublishingOptions](#domainlogpublishingoptions)
* **NodeToNodeEncryptionOptions**: [NodeToNodeEncryptionOptions](#nodetonodeencryptionoptions)
* **ServiceSoftwareOptions**: [ServiceSoftwareOptions](#servicesoftwareoptions) (ReadOnly)
* **SnapshotOptions**: [SnapshotOptions](#snapshotoptions)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this Domain.
* **VPCOptions**: [VPCOptions](#vpcoptions)

## Domain_AccessPolicies
### Properties

## Domain_AdvancedOptions
### Properties

## AdvancedSecurityOptionsInput
### Properties
* **Enabled**: bool
* **InternalUserDatabaseEnabled**: bool
* **MasterUserOptions**: [MasterUserOptions](#masteruseroptions) (WriteOnly)

## MasterUserOptions
### Properties
* **MasterUserARN**: string
* **MasterUserName**: string
* **MasterUserPassword**: string

## ClusterConfig
### Properties
* **DedicatedMasterCount**: int
* **DedicatedMasterEnabled**: bool
* **DedicatedMasterType**: string
* **InstanceCount**: int
* **InstanceType**: string
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

## Tag
### Properties
* **Key**: string: The value of the tag.
* **Value**: string: The key of the tag.

## VPCOptions
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

