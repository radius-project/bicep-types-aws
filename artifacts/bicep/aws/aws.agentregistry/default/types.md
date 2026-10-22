# AWS.AgentRegistry @ default

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
* **DiscoveryUrl**: string (Required): The OpenID Connect discovery URL used to retrieve the identity provider's metadata and signing keys.

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

## RegistryRecord_CustomParameters
### Properties

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

## SkillMdSource
### Properties
* **FromUrl**: [SkillMdSourceFromUrl](#skillmdsourcefromurl)

## SkillMdSourceFromUrl
### Properties
* **Url**: string (Required): URL source for the SkillMd document.

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

