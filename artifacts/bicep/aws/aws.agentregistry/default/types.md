# AWS.AgentRegistry @ default

## Resource AWS.AgentRegistry/Publisher@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AgentRegistry/PublisherProperties](#awsagentregistrypublisherproperties) (Required, Identifier): properties of the resource

## Resource AWS.AgentRegistry/Registry@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AgentRegistry/RegistryProperties](#awsagentregistryregistryproperties) (Required, Identifier): properties of the resource

## Resource AWS.AgentRegistry/RegistryRecord@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AgentRegistry/RegistryRecordProperties](#awsagentregistryregistryrecordproperties) (Required, Identifier): properties of the resource

## A2aAgentCardDescriptor
### Properties
* **Data**: string
* **DataSchemaVersion**: string: Version of the descriptor type schema.
* **Source**: [DescriptorSource](#descriptorsource)

## AgentSkillsAdditionalData
### Properties
* **SkillMd**: [AgentSkillsMdDescriptor](#agentskillsmddescriptor)
* **SkillPackage**: [AgentSkillsPackageDescriptor](#agentskillspackagedescriptor): The source that the registry synchronizes the full skill package from. You can't set it together with SkillMd.Source or SkillMd Data.
* **SourceConfiguration**: [AgentSkillsSourceConfiguration](#agentskillssourceconfiguration): The provider-specific settings of the record's skill source.

## AgentSkillsDefinitionDescriptor
### Properties
* **AdditionalData**: [AgentSkillsAdditionalData](#agentskillsadditionaldata)
* **Data**: string
* **DataSchemaVersion**: string: Version of the descriptor type schema.

## AgentSkillsMdDescriptor
### Properties
* **Data**: string
* **DataSchemaVersion**: string: Version of the descriptor type schema.
* **Source**: [SkillMdSource](#skillmdsource)

## AgentSkillsPackageDescriptor
### Properties
* **Source**: [SkillMdSource](#skillmdsource): The source of the skill package, as an s3:// URL of a ZIP object.

## AgentSkillsSourceConfiguration
### Properties
* **S3**: [S3SourceConfiguration](#s3sourceconfiguration) (Required): The settings of an Amazon S3 source.

## AgUiDescriptor
### Properties
* **Source**: [SourceOnlyDescriptorSource](#sourceonlydescriptorsource)

## ApprovalConfiguration
### Properties
* **AutoApprovalRules**: string[]: The rules that determine which registry records are automatically approved on submission. When omitted or empty, submitted records require manual review.

## AuthorizerConfiguration
### Properties
* **CustomJWTAuthorizer**: [CustomJWTAuthorizerConfiguration](#customjwtauthorizerconfiguration) (Required)

## AuthorizingClaimMatchValueType
### Properties
* **ClaimMatchOperator**: string (Required)
* **ClaimMatchValue**: [ClaimMatchValueType](#claimmatchvaluetype) (Required)

## AWS.AgentRegistry/PublisherProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp when the Publisher was created.
* **PublisherArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Publisher. The Publisher is a global resource, so the ARN has no Region.
* **Status**: string (ReadOnly): The verification status of the Publisher.
* **Tags**: [Tag](#tag)[]: Tags to assign to the Publisher.
* **UpdatedAt**: string (ReadOnly): The timestamp when the Publisher was last updated.
* **Value**: [Identifier](#identifier) (Required): The identifier that this Publisher proves ownership of.

## AWS.AgentRegistry/RegistryProperties
### Properties
* **ApprovalConfiguration**: [ApprovalConfiguration](#approvalconfiguration)
* **AuthorizerType**: string
* **AutoDetectionEnabled**: bool: Specifies whether auto-detection is requested for the registry. Must be specified together with AutoDetectionScope. Setting this to true is necessary but not sufficient for auto-detection to become active; the preconditions of the configured scope must also be met. To turn auto-detection off, explicitly set this to false - removing AutoDetectionEnabled and AutoDetectionScope from the template is a no-op and leaves the existing auto-detection settings unchanged. A registry cannot be deleted while auto-detection is enabled: set this to false and update the stack before deleting the registry.
* **AutoDetectionScope**: string
* **AutoDetectionStatus**: string (ReadOnly)
* **CreatedAt**: string (ReadOnly): The timestamp when the registry was created.
* **CustomMetadataSchemaConfiguration**: [CustomMetadataSchemaConfiguration](#custommetadataschemaconfiguration)
* **Description**: string: The description of the registry.
* **DiscoveryConfiguration**: [DiscoveryConfiguration](#discoveryconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **Name**: string (Required): The name of the registry.
* **RegistryArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the registry.
* **RegistryId**: string (ReadOnly): The unique identifier of the registry.
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: Tags to assign to the registry.
* **UpdatedAt**: string (ReadOnly): The timestamp when the registry was last updated.

## AWS.AgentRegistry/RegistryRecordProperties
### Properties
* **Artifact**: [RegistryRecordArtifact](#registryrecordartifact) (ReadOnly): The skill package that the registry stores for a skill record that synchronizes a skill package. The package's download URL isn't returned.
* **CreatedAt**: string (ReadOnly): The timestamp when the registry record was created.
* **CreatedBy**: string (ReadOnly): The identifier of the AWS account that created the registry record.
* **CustomMetadata**: [RegistryRecord_CustomMetadata](#registryrecordcustommetadata): The custom metadata to attach to the registry record. Each key must match a property defined in the registry's custom metadata schema. Values can be strings (maximum 128 characters) or native JSON booleans (true or false).
* **Description**: string: The description of the registry record.
* **Descriptors**: [Descriptors](#descriptors) (Required)
* **DisplayName**: string: The human-readable display name of the registry record.
* **Name**: string (Required): The name of the registry record.
* **RecordArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the registry record.
* **RecordId**: string (ReadOnly): The unique identifier of the registry record.
* **RecordType**: string (Required)
* **RecordVersion**: string: The version of the registry record.
* **RegistryArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the registry containing the record.
* **RegistryId**: string (WriteOnly): The identifier of the registry in which to create the record. You can specify either the registry ID or the registry Amazon Resource Name (ARN). Use the ARN form to reference a registry shared from another account via AWS Resource Access Manager (RAM).
* **Status**: string (ReadOnly)
* **SynchronizedSource**: [RegistryRecordSynchronizedSource](#registryrecordsynchronizedsource) (ReadOnly): The source that the registry last synchronized the record's skill content from, and the version that it read. Absent until the first successful synchronization.
* **Tags**: [Tag](#tag)[]: Tags to assign to the registry record.
* **UpdatedAt**: string (ReadOnly): The timestamp when the registry record was last updated.

## ClaimMatchValueType
### Properties
* **MatchValueString**: string
* **MatchValueStringList**: string[]

## CustomClaimValidationType
### Properties
* **AuthorizingClaimMatchValue**: [AuthorizingClaimMatchValueType](#authorizingclaimmatchvaluetype) (Required)
* **InboundTokenClaimName**: string (Required)
* **InboundTokenClaimValueType**: string (Required)

## CustomDescriptor
### Properties
* **Data**: string

## CustomJWTAuthorizerConfiguration
### Properties
* **AllowedAudience**: string[]: The audience values accepted during JWT validation.
* **AllowedClients**: string[]: The client identifiers accepted during JWT validation.
* **AllowedScopes**: string[]: The scopes accepted during JWT validation.
* **CustomClaims**: [CustomClaimValidationType](#customclaimvalidationtype)[]: Additional custom claim validations applied to the inbound JWT.
* **DiscoveryUrl**: string (Required): The OpenID Connect discovery or OAuth 2.0 authorization server metadata URL used to retrieve the identity provider's metadata and signing keys. The URL contains /.well-known/openid-configuration or /.well-known/oauth-authorization-server, respectively.

## CustomMetadataSchemaConfiguration
### Properties
* **DefaultSchema**: string: The default JSON Schema that applies to record types without a specific override. Supported property types are string, string with an enum constraint, string with a uri format, and boolean.
* **RecordTypeSchemaOverrides**: [RecordTypeSchemaOverride](#recordtypeschemaoverride)[]: A list of per-record-type schema overrides. When a record's type matches an override, that override's schema is used instead of the default schema for validation.

## Descriptors
### Properties
* **A2aAgentCard**: [A2aAgentCardDescriptor](#a2aagentcarddescriptor)
* **AgentSkillsDefinition**: [AgentSkillsDefinitionDescriptor](#agentskillsdefinitiondescriptor)
* **Agui**: [AgUiDescriptor](#aguidescriptor)
* **Custom**: [CustomDescriptor](#customdescriptor)
* **Http**: [HttpDescriptor](#httpdescriptor)
* **McpServer**: [McpServerDescriptor](#mcpserverdescriptor)

## DescriptorSource
### Properties
* **FromUrl**: [DescriptorSourceFromUrl](#descriptorsourcefromurl)

## DescriptorSourceFromUrl
### Properties
* **CredentialProviderConfigurations**: [RegistryRecordCredentialProviderConfiguration](#registryrecordcredentialproviderconfiguration)[]: The credential providers used to authenticate when fetching descriptor content from the source URL.
* **Url**: string (Required): URL source for descriptor content.

## DiscoveryConfiguration
### Properties
* **AuthorizerConfiguration**: [AuthorizerConfiguration](#authorizerconfiguration)

## EncryptionConfiguration
### Properties
* **KmsKeyArn**: string (Required): The Amazon Resource Name (ARN) of the customer-managed AWS KMS key used to encrypt the registry's content. The key must be a symmetric encryption key in the same AWS account and Region as the registry. Multi-Region keys are not supported.

## HttpDescriptor
### Properties
* **Source**: [SourceOnlyDescriptorSource](#sourceonlydescriptorsource)

## Identifier
### Properties
* **Domain**: string (Required): The fully qualified domain name (RFC 1035/1123) with at least two labels, in lowercase. The service stores domain names in lowercase, so specify the value in lowercase to avoid drift.

## McpServerAdditionalData
### Properties
* **Tools**: [McpToolsDescriptor](#mcptoolsdescriptor)

## McpServerDescriptor
### Properties
* **AdditionalData**: [McpServerAdditionalData](#mcpserveradditionaldata)
* **Data**: string
* **DataSchemaVersion**: string: Version of the descriptor type schema.
* **Source**: [DescriptorSource](#descriptorsource)

## McpToolsDescriptor
### Properties
* **Data**: string
* **DataSchemaVersion**: string: Version of the tools descriptor schema.

## RecordTypeSchemaOverride
### Properties
* **RecordType**: string (Required): The record type that this schema override applies to.
* **Schema**: string (Required): The JSON Schema for the specified record type. Must follow the same structural rules as the default schema.

## RegistryRecord_CustomMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RegistryRecord_CustomParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## RegistryRecordArtifact
### Properties
* **Sha256**: string: The SHA-256 checksum of the skill package, as 64 lowercase hexadecimal characters.

## RegistryRecordCredentialProviderConfiguration
### Properties
* **CredentialProvider**: [RegistryRecordCredentialProviderUnion](#registryrecordcredentialproviderunion) (Required)
* **CredentialProviderType**: string (Required)

## RegistryRecordCredentialProviderUnion
### Properties
* **IamCredentialProvider**: [RegistryRecordIamCredentialProvider](#registryrecordiamcredentialprovider)
* **OauthCredentialProvider**: [RegistryRecordOAuthCredentialProvider](#registryrecordoauthcredentialprovider)

## RegistryRecordIamCredentialProvider
### Properties
* **Region**: string: The SigV4 signing region.
* **RoleArn**: string: The ARN of the IAM role.
* **Service**: string: The SigV4 signing service name.

## RegistryRecordOAuthCredentialProvider
### Properties
* **CustomParameters**: [RegistryRecord_CustomParameters](#registryrecordcustomparameters): Additional custom parameters for the OAuth flow.
* **GrantType**: string
* **ProviderArn**: string (Required): The ARN of the OAuth credential provider.
* **Scopes**: string[]: OAuth scopes to request.

## RegistryRecordSynchronizedSource
### Properties
* **S3**: [S3SynchronizedSource](#s3synchronizedsource) (Required): The Amazon S3 source that the registry read.

## S3SourceConfiguration
### Properties
* **BucketOwnerAccountId**: string: The ID of the AWS account that owns the source bucket. The registry checks that the bucket belongs to this account each time it reads the source. If you omit it for a source that uses an IAM role, the registry expects the bucket in the role's account. A source without a credential provider, which the registry reads as a public object, requires it.

## S3SynchronizedSource
### Properties
* **ETag**: string: The entity tag (ETag) of the object that the registry read, without quotes, when the object has no version ID. Not recorded for a SKILL.md source on a registry that is encrypted with a customer managed key.
* **SynchronizedAt**: string (Required): The timestamp when the registry read the source.
* **VersionId**: string: The version ID of the object that the registry read. Absent when the bucket isn't versioned.

## SkillMdSource
### Properties
* **FromUrl**: [SkillMdSourceFromUrl](#skillmdsourcefromurl)

## SkillMdSourceFromUrl
### Properties
* **CredentialProviderConfigurations**: [SkillSourceCredentialProviderConfiguration](#skillsourcecredentialproviderconfiguration)[]: The credential provider that the registry uses to read the source. For an Amazon S3 source, specify an IAM role in your account that the agent-registry.amazonaws.com service principal can assume and that can read the object. Omit it to read a public object, and set SourceConfiguration.S3.BucketOwnerAccountId instead.
* **Url**: string (Required): The URL of the source. For synchronization, specify an s3://<bucket>/<key> URL that names one object in a bucket in the same AWS Region as the registry: a SKILL.md object for SkillMd, or a skill package ZIP object for SkillPackage.

## SkillSourceCredentialProviderConfiguration
### Properties
* **CredentialProvider**: [SkillSourceCredentialProviderUnion](#skillsourcecredentialproviderunion) (Required): The credential provider details.
* **CredentialProviderType**: string (Required): The type of the credential provider.

## SkillSourceCredentialProviderUnion
### Properties
* **IamCredentialProvider**: [RegistryRecordIamCredentialProvider](#registryrecordiamcredentialprovider): The IAM role that the registry assumes to read the source. For an Amazon S3 source, omit Service or set it to s3, and omit Region or set it to the registry's Region.

## SourceOnlyDescriptorSource
### Properties
* **FromUrl**: [SourceOnlyDescriptorSourceFromUrl](#sourceonlydescriptorsourcefromurl)

## SourceOnlyDescriptorSourceFromUrl
### Properties
* **Url**: string (Required): URL source for descriptor content.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

