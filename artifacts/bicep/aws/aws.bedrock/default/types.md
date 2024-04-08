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

## Resource AWS.Bedrock/KnowledgeBase@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/KnowledgeBaseProperties](#awsbedrockknowledgebaseproperties) (Required, Identifier): properties of the resource

## ActionGroupExecutor
### Properties
* **Lambda**: string (Required): ARN of a Lambda.

## AgentActionGroup
### Properties
* **ActionGroupExecutor**: [ActionGroupExecutor](#actiongroupexecutor)
* **ActionGroupName**: string (Required): Name of the action group
* **ActionGroupState**: string
* **ApiSchema**: [APISchema](#apischema)
* **Description**: string: Description of action group
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
* **IdleSessionTTLInSeconds**: int: Max Session Time.
* **Instruction**: string: Instruction for the agent.
* **KnowledgeBases**: [AgentKnowledgeBase](#agentknowledgebase)[]: List of Agent Knowledge Bases
* **PreparedAt**: string (ReadOnly): Time Stamp.
* **PromptOverrideConfiguration**: [PromptOverrideConfiguration](#promptoverrideconfiguration)
* **RecommendedActions**: string[] (ReadOnly): The recommended actions users can take to resolve an error in failureReasons.
* **SkipResourceInUseCheckOnDelete**: bool (WriteOnly): Specifies whether to allow deleting agent while it is in use.
* **Tags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): Time Stamp.

## AWS.Bedrock/DataSourceProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time at which the data source was created.
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration) (Required)
* **DataSourceId**: string (ReadOnly, Identifier): Identifier for a resource.
* **DataSourceStatus**: string (ReadOnly)
* **Description**: string: Description of the Resource.
* **KnowledgeBaseId**: string (Required, Identifier): The unique identifier of the knowledge base to which to add the data source.
* **Name**: string (Required): The name of the data source.
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **UpdatedAt**: string (ReadOnly): The time at which the knowledge base was last updated.
* **VectorIngestionConfiguration**: [VectorIngestionConfiguration](#vectoringestionconfiguration)

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

## DataSourceConfiguration
### Properties
* **S3Configuration**: [S3DataSourceConfiguration](#s3datasourceconfiguration) (Required)
* **Type**: string (Required)

## FixedSizeChunkingConfiguration
### Properties
* **MaxTokens**: int (Required): The maximum number of tokens to include in a chunk.
* **OverlapPercentage**: int (Required): The percentage of overlap between adjacent chunks of a data source.

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

## S3DataSourceConfiguration
### Properties
* **BucketArn**: string (Required): The ARN of the bucket that contains the data source.
* **InclusionPrefixes**: string[]: A list of S3 prefixes that define the object containing the data sources.

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyArn**: string: The ARN of the AWS KMS key used to encrypt the resource.

## StorageConfiguration
### Properties
* **OpensearchServerlessConfiguration**: [OpenSearchServerlessConfiguration](#opensearchserverlessconfiguration)
* **PineconeConfiguration**: [PineconeConfiguration](#pineconeconfiguration)
* **RdsConfiguration**: [RdsConfiguration](#rdsconfiguration)
* **Type**: string (Required)

## TagsMap
### Properties

## TagsMap
### Properties

## TagsMap
### Properties

## VectorIngestionConfiguration
### Properties
* **ChunkingConfiguration**: [ChunkingConfiguration](#chunkingconfiguration)

## VectorKnowledgeBaseConfiguration
### Properties
* **EmbeddingModelArn**: string (Required): The ARN of the model used to create vector embeddings for the knowledge base.

