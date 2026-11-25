# AWS.Elasticsearch @ default

## Resource AWS.Elasticsearch/Domain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Elasticsearch/DomainProperties](#awselasticsearchdomainproperties) (Identifier): properties of the resource

## AdvancedSecurityOptionsInput
### Properties
* **AnonymousAuthEnabled**: bool
* **Enabled**: bool
* **InternalUserDatabaseEnabled**: bool
* **MasterUserOptions**: [MasterUserOptions](#masteruseroptions) (WriteOnly)

## AWS.Elasticsearch/DomainProperties
### Properties
* **AccessPolicies**: [Domain_AccessPolicies](#domainaccesspolicies)
* **AdvancedOptions**: [Domain_AdvancedOptions](#domainadvancedoptions)
* **AdvancedSecurityOptions**: [AdvancedSecurityOptionsInput](#advancedsecurityoptionsinput)
* **Arn**: string (ReadOnly)
* **CognitoOptions**: [CognitoOptions](#cognitooptions)
* **DomainArn**: string (ReadOnly)
* **DomainEndpoint**: string (ReadOnly)
* **DomainEndpointOptions**: [DomainEndpointOptions](#domainendpointoptions)
* **DomainName**: string (Identifier)
* **EBSOptions**: [EBSOptions](#ebsoptions)
* **ElasticsearchClusterConfig**: [ElasticsearchClusterConfig](#elasticsearchclusterconfig)
* **ElasticsearchVersion**: string
* **EncryptionAtRestOptions**: [EncryptionAtRestOptions](#encryptionatrestoptions)
* **LogPublishingOptions**: [Domain_LogPublishingOptions](#domainlogpublishingoptions)
* **NodeToNodeEncryptionOptions**: [NodeToNodeEncryptionOptions](#nodetonodeencryptionoptions)
* **SnapshotOptions**: [SnapshotOptions](#snapshotoptions)
* **Tags**: [Tag](#tag)[]
* **VPCOptions**: [VPCOptions](#vpcoptions)

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
### Additional Properties
* **Additional Properties Type**: any

## Domain_AdvancedOptions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Domain_LogPublishingOptions
### Properties
### Additional Properties
* **Additional Properties Type**: [LogPublishingOption](#logpublishingoption)

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
* **VolumeSize**: int
* **VolumeType**: string

## ElasticsearchClusterConfig
### Properties
* **ColdStorageOptions**: [ColdStorageOptions](#coldstorageoptions)
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

## EncryptionAtRestOptions
### Properties
* **Enabled**: bool
* **KmsKeyId**: string

## LogPublishingOption
### Properties
* **CloudWatchLogsLogGroupArn**: string
* **Enabled**: bool

## MasterUserOptions
### Properties
* **MasterUserARN**: string
* **MasterUserName**: string
* **MasterUserPassword**: string

## NodeToNodeEncryptionOptions
### Properties
* **Enabled**: bool

## SnapshotOptions
### Properties
* **AutomatedSnapshotStartHour**: int

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VPCOptions
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## ZoneAwarenessConfig
### Properties
* **AvailabilityZoneCount**: int

