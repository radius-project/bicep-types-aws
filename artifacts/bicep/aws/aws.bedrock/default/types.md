# AWS.Bedrock @ default

## Resource AWS.Bedrock/Agent@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/AgentProperties](#awsbedrockagentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/AgentAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/AgentAliasProperties](#awsbedrockagentaliasproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/DataSourceProperties](#awsbedrockdatasourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/Guardrail@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/GuardrailProperties](#awsbedrockguardrailproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/KnowledgeBase@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/KnowledgeBaseProperties](#awsbedrockknowledgebaseproperties) (Required, Identifier): properties of the resource

## ActionGroupExecutor
### Properties

## AgentActionGroup
### Properties
* **ActionGroupExecutor**: [ActionGroupExecutor](#actiongroupexecutor)
* **ActionGroupName**: string (Required): Name of the action group
* **ActionGroupState**: string
* **ApiSchema**: [APISchema](#apischema)
* **Description**: string: Description of action group
* **FunctionSchema**: [FunctionSchema](#functionschema)
* **ParentActionGroupSignature**: string
* **SkipResourceInUseCheckOnDelete**: bool: Specifies whether to allow deleting action group while it is in use.

## AgentAliasHistoryEvent
### Properties
* **EndDate**: string: Time Stamp.
* **RoutingConfiguration**: [AgentAliasRoutingConfigurationListItem](#agentaliasroutingconfigurationlistitem)[]: Routing configuration for an Agent alias.
* **StartDate**: string: Time Stamp.

## AgentAliasRoutingConfigurationListItem
### Properties
* **AgentVersion**: string (Required): Agent Version.

## AgentKnowledgeBase
### Properties
* **Description**: string (Required): Description of the Resource.
* **KnowledgeBaseId**: string (Required): Identifier for a resource.
* **KnowledgeBaseState**: string

## APISchema
### Properties

## AWS.Bedrock/AgentAliasProperties
### Properties
* **AgentAliasArn**: string (ReadOnly): Arn representation of the Agent Alias.
* **AgentAliasHistoryEvents**: [AgentAliasHistoryEvent](#agentaliashistoryevent)[] (ReadOnly): The list of history events for an alias for an Agent.
* **AgentAliasId**: string (ReadOnly, Identifier): Id for an Agent Alias generated at the server side.
* **AgentAliasName**: string (Required): Name for a resource.
* **AgentAliasStatus**: string (ReadOnly)
* **AgentId**: string (Required, Identifier): Identifier for a resource.
* **CreatedAt**: string (ReadOnly): Time Stamp.
* **Description**: string: Description of the Resource.
* **RoutingConfiguration**: [AgentAliasRoutingConfigurationListItem](#agentaliasroutingconfigurationlistitem)[]: Routing configuration for an Agent alias.
* **Tags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): Time Stamp.

## AWS.Bedrock/AgentProperties
### Properties
* **ActionGroups**: [AgentActionGroup](#agentactiongroup)[] (WriteOnly): List of ActionGroups
* **AgentArn**: string (ReadOnly): Arn representation of the Agent.
* **AgentId**: string (ReadOnly, Identifier): Identifier for a resource.
* **AgentName**: string (Required): Name for a resource.
* **AgentResourceRoleArn**: string: ARN of a IAM role.
* **AgentStatus**: string (ReadOnly)
* **AgentVersion**: string (ReadOnly): Draft Agent Version.
* **AutoPrepare**: bool (WriteOnly): Specifies whether to automatically prepare after creating or updating the agent.
* **CreatedAt**: string (ReadOnly): Time Stamp.
* **CustomerEncryptionKeyArn**: string: A KMS key ARN
* **Description**: string: Description of the Resource.
* **FailureReasons**: string[] (ReadOnly): Failure Reasons for Error.
* **FoundationModel**: string: ARN or name of a Bedrock model.
* **GuardrailConfiguration**: [GuardrailConfiguration](#guardrailconfiguration)
* **IdleSessionTTLInSeconds**: int: Max Session Time.
* **Instruction**: string: Instruction for the agent.
* **KnowledgeBases**: [AgentKnowledgeBase](#agentknowledgebase)[]: List of Agent Knowledge Bases
* **PreparedAt**: string (ReadOnly): Time Stamp.
* **PromptOverrideConfiguration**: [PromptOverrideConfiguration](#promptoverrideconfiguration)
* **RecommendedActions**: string[] (ReadOnly): The recommended actions users can take to resolve an error in failureReasons.
* **SkipResourceInUseCheckOnDelete**: bool (WriteOnly): Specifies whether to allow deleting agent while it is in use.
* **Tags**: [TagsMap](#tagsmap)
* **TestAliasTags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): Time Stamp.

## AWS.Bedrock/DataSourceProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time at which the data source was created.
* **DataDeletionPolicy**: string
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration) (Required)
* **DataSourceId**: string (ReadOnly, Identifier): Identifier for a resource.
* **DataSourceStatus**: string (ReadOnly)
* **Description**: string: Description of the Resource.
* **FailureReasons**: string[] (ReadOnly): The details of the failure reasons related to the data source.
* **KnowledgeBaseId**: string (Required, Identifier): The unique identifier of the knowledge base to which to add the data source.
* **Name**: string (Required): The name of the data source.
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **UpdatedAt**: string (ReadOnly): The time at which the knowledge base was last updated.
* **VectorIngestionConfiguration**: [VectorIngestionConfiguration](#vectoringestionconfiguration)

## AWS.Bedrock/GuardrailProperties
### Properties
* **BlockedInputMessaging**: string (Required): Messaging for when violations are detected in text
* **BlockedOutputsMessaging**: string (Required): Messaging for when violations are detected in text
* **ContentPolicyConfig**: [ContentPolicyConfig](#contentpolicyconfig)
* **CreatedAt**: string (ReadOnly): Time Stamp
* **Description**: string: Description of the guardrail or its version
* **FailureRecommendations**: string[] (ReadOnly): List of failure recommendations
* **GuardrailArn**: string (ReadOnly, Identifier): Arn representation for the guardrail
* **GuardrailId**: string (ReadOnly): Unique id for the guardrail
* **KmsKeyArn**: string: The KMS key with which the guardrail was encrypted at rest
* **Name**: string (Required): Name of the guardrail
* **SensitiveInformationPolicyConfig**: [SensitiveInformationPolicyConfig](#sensitiveinformationpolicyconfig)
* **Status**: string (ReadOnly)
* **StatusReasons**: string[] (ReadOnly): List of status reasons
* **Tags**: [Tag](#tag)[]: List of Tags
* **TopicPolicyConfig**: [TopicPolicyConfig](#topicpolicyconfig)
* **UpdatedAt**: string (ReadOnly): Time Stamp
* **Version**: string (ReadOnly): Guardrail version
* **WordPolicyConfig**: [WordPolicyConfig](#wordpolicyconfig)

## AWS.Bedrock/KnowledgeBaseProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time at which the knowledge base was created.
* **Description**: string: Description of the Resource.
* **FailureReasons**: string[] (ReadOnly): A list of reasons that the API operation on the knowledge base failed.
* **KnowledgeBaseArn**: string (ReadOnly): The ARN of the knowledge base.
* **KnowledgeBaseConfiguration**: [KnowledgeBaseConfiguration](#knowledgebaseconfiguration) (Required)
* **KnowledgeBaseId**: string (ReadOnly, Identifier): The unique identifier of the knowledge base.
* **Name**: string (Required): The name of the knowledge base.
* **RoleArn**: string (Required): The ARN of the IAM role with permissions to invoke API operations on the knowledge base. The ARN must begin with AmazonBedrockExecutionRoleForKnowledgeBase_
* **Status**: string (ReadOnly)
* **StorageConfiguration**: [StorageConfiguration](#storageconfiguration) (Required)
* **Tags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): The time at which the knowledge base was last updated.

## ChunkingConfiguration
### Properties
* **ChunkingStrategy**: string (Required)
* **FixedSizeChunkingConfiguration**: [FixedSizeChunkingConfiguration](#fixedsizechunkingconfiguration)

## ContentFilterConfig
### Properties
* **InputStrength**: string (Required)
* **OutputStrength**: string (Required)
* **Type**: string (Required)

## ContentPolicyConfig
### Properties
* **FiltersConfig**: [ContentFilterConfig](#contentfilterconfig)[] (Required): List of content filter configs in content policy.

## DataSourceConfiguration
### Properties
* **S3Configuration**: [S3DataSourceConfiguration](#s3datasourceconfiguration) (Required)
* **Type**: string (Required)

## FixedSizeChunkingConfiguration
### Properties
* **MaxTokens**: int (Required): The maximum number of tokens to include in a chunk.
* **OverlapPercentage**: int (Required): The percentage of overlap between adjacent chunks of a data source.

## Function
### Properties
* **Description**: string: Description of function
* **Name**: string (Required): Name for a resource.
* **Parameters**: [ParameterMap](#parametermap)

## FunctionSchema
### Properties
* **Functions**: [Function](#function)[] (Required): List of Function definitions

## GuardrailConfiguration
### Properties
* **GuardrailIdentifier**: string: Identifier for the guardrail, could be the id or the arn
* **GuardrailVersion**: string: Version of the guardrail

## InferenceConfiguration
### Properties
* **MaximumLength**: int: Maximum length of output
* **StopSequences**: string[]: List of stop sequences
* **Temperature**: int: Controls randomness, higher values increase diversity
* **TopK**: int: Sample from the k most likely next tokens
* **TopP**: int: Cumulative probability cutoff for token selection

## KnowledgeBaseConfiguration
### Properties
* **Type**: string (Required)
* **VectorKnowledgeBaseConfiguration**: [VectorKnowledgeBaseConfiguration](#vectorknowledgebaseconfiguration) (Required)

## ManagedWordsConfig
### Properties
* **Type**: string (Required)

## OpenSearchServerlessConfiguration
### Properties
* **CollectionArn**: string (Required): The ARN of the OpenSearch Service vector store.
* **FieldMapping**: [OpenSearchServerlessFieldMapping](#opensearchserverlessfieldmapping) (Required)
* **VectorIndexName**: string (Required): The name of the vector store.

## OpenSearchServerlessFieldMapping
### Properties
* **MetadataField**: string (Required): The name of the field in which Amazon Bedrock stores metadata about the vector store.
* **TextField**: string (Required): The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
* **VectorField**: string (Required): The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.

## ParameterMap
### Properties

## PiiEntityConfig
### Properties
* **Action**: string (Required)
* **Type**: string (Required)

## PineconeConfiguration
### Properties
* **ConnectionString**: string (Required): The endpoint URL for your index management page.
* **CredentialsSecretArn**: string (Required): The ARN of the secret that you created in AWS Secrets Manager that is linked to your Pinecone API key.
* **FieldMapping**: [PineconeFieldMapping](#pineconefieldmapping) (Required)
* **Namespace**: string: The namespace to be used to write new data to your database.

## PineconeFieldMapping
### Properties
* **MetadataField**: string (Required): The name of the field in which Amazon Bedrock stores metadata about the vector store.
* **TextField**: string (Required): The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.

## PromptConfiguration
### Properties
* **BasePromptTemplate**: string: Base Prompt Template.
* **InferenceConfiguration**: [InferenceConfiguration](#inferenceconfiguration)
* **ParserMode**: string
* **PromptCreationMode**: string
* **PromptState**: string
* **PromptType**: string

## PromptOverrideConfiguration
### Properties
* **OverrideLambda**: string: ARN of a Lambda.
* **PromptConfigurations**: [PromptConfiguration](#promptconfiguration)[] (Required): List of BasePromptConfiguration

## RdsConfiguration
### Properties
* **CredentialsSecretArn**: string (Required): The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon RDS database.
* **DatabaseName**: string (Required): The name of your Amazon RDS database.
* **FieldMapping**: [RdsFieldMapping](#rdsfieldmapping) (Required)
* **ResourceArn**: string (Required): The ARN of the vector store.
* **TableName**: string (Required): The name of the table in the database.

## RdsFieldMapping
### Properties
* **MetadataField**: string (Required): The name of the field in which Amazon Bedrock stores metadata about the vector store.
* **PrimaryKeyField**: string (Required): The name of the field in which Amazon Bedrock stores the ID for each entry.
* **TextField**: string (Required): The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
* **VectorField**: string (Required): The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.

## RegexConfig
### Properties
* **Action**: string (Required)
* **Description**: string: The regex description.
* **Name**: string (Required): The regex name.
* **Pattern**: string (Required): The regex pattern.

## S3DataSourceConfiguration
### Properties
* **BucketArn**: string (Required): The ARN of the bucket that contains the data source.
* **BucketOwnerAccountId**: string: The account ID for the owner of the S3 bucket.
* **InclusionPrefixes**: string[]: A list of S3 prefixes that define the object containing the data sources.

## SensitiveInformationPolicyConfig
### Properties
* **PiiEntitiesConfig**: [PiiEntityConfig](#piientityconfig)[]: List of entities.
* **RegexesConfig**: [RegexConfig](#regexconfig)[]: List of regex.

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyArn**: string: The ARN of the AWS KMS key used to encrypt the resource.

## StorageConfiguration
### Properties
* **OpensearchServerlessConfiguration**: [OpenSearchServerlessConfiguration](#opensearchserverlessconfiguration)
* **PineconeConfiguration**: [PineconeConfiguration](#pineconeconfiguration)
* **RdsConfiguration**: [RdsConfiguration](#rdsconfiguration)
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required): Tag Key
* **Value**: string (Required): Tag Value

## TagsMap
### Properties

## TagsMap
### Properties

## TagsMap
### Properties

## TopicConfig
### Properties
* **Definition**: string (Required): Definition of topic in topic policy
* **Examples**: string[]: List of text examples
* **Name**: string (Required): Name of topic in topic policy
* **Type**: string (Required)

## TopicPolicyConfig
### Properties
* **TopicsConfig**: [TopicConfig](#topicconfig)[] (Required): List of topic configs in topic policy.

## VectorIngestionConfiguration
### Properties
* **ChunkingConfiguration**: [ChunkingConfiguration](#chunkingconfiguration)

## VectorKnowledgeBaseConfiguration
### Properties
* **EmbeddingModelArn**: string (Required): The ARN of the model used to create vector embeddings for the knowledge base.

## WordConfig
### Properties
* **Text**: string (Required): The custom word text.

## WordPolicyConfig
### Properties
* **ManagedWordListsConfig**: [ManagedWordsConfig](#managedwordsconfig)[]: A config for the list of managed words.
* **WordsConfig**: [WordConfig](#wordconfig)[]: List of custom word configs.

