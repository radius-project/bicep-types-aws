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

## Resource AWS.Bedrock/ApplicationInferenceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/ApplicationInferenceProfileProperties](#awsbedrockapplicationinferenceprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/DataSourceProperties](#awsbedrockdatasourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/Flow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/FlowProperties](#awsbedrockflowproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/FlowAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/FlowAliasProperties](#awsbedrockflowaliasproperties) (Required, Identifier): properties of the resource

## Resource AWS.Bedrock/FlowVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/FlowVersionProperties](#awsbedrockflowversionproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.Bedrock/Prompt@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Bedrock/PromptProperties](#awsbedrockpromptproperties) (Required, Identifier): properties of the resource

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

## AWS.Bedrock/ApplicationInferenceProfileProperties
### Properties
* **CreatedAt**: string (ReadOnly): Time Stamp
* **Description**: string: Description of the inference profile
* **InferenceProfileArn**: string (ReadOnly)
* **InferenceProfileId**: string (ReadOnly)
* **InferenceProfileIdentifier**: string (ReadOnly, Identifier): Inference profile identifier. Supports both system-defined inference profile ids, and inference profile ARNs.
* **InferenceProfileName**: string (Required)
* **Models**: [InferenceProfileModel](#inferenceprofilemodel)[] (ReadOnly): List of model configuration
* **ModelSource**: [InferenceProfileModelSource](#inferenceprofilemodelsource) (WriteOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: List of Tags
* **Type**: string (ReadOnly)
* **UpdatedAt**: string (ReadOnly): Time Stamp

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

## AWS.Bedrock/FlowAliasProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Arn of the Flow Alias
* **CreatedAt**: string (ReadOnly): Time Stamp.
* **Description**: string: Description of the Resource.
* **FlowArn**: string (Required, Identifier): Arn representation of the Flow
* **FlowId**: string (ReadOnly): Identifier for a flow resource.
* **Id**: string (ReadOnly): Id for a Flow Alias generated at the server side.
* **Name**: string (Required): Name for a resource.
* **RoutingConfiguration**: [FlowAliasRoutingConfigurationListItem](#flowaliasroutingconfigurationlistitem)[] (Required): Routing configuration for a Flow alias.
* **Tags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): Time Stamp.

## AWS.Bedrock/FlowProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Arn representation of the Flow
* **CreatedAt**: string (ReadOnly): Time Stamp.
* **CustomerEncryptionKeyArn**: string: A KMS key ARN
* **Definition**: [FlowDefinition](#flowdefinition)
* **DefinitionS3Location**: [S3Location](#s3location) (WriteOnly)
* **DefinitionString**: string (WriteOnly): A JSON string containing a Definition with the same schema as the Definition property of this resource
* **DefinitionSubstitutions**: [DefinitionSubstitutions](#definitionsubstitutions) (WriteOnly)
* **Description**: string: Description of the flow
* **ExecutionRoleArn**: string (Required): ARN of a IAM role
* **Id**: string (ReadOnly): Identifier for a Flow
* **Name**: string (Required): Name for the flow
* **Status**: string (ReadOnly)
* **Tags**: [TagsMap](#tagsmap)
* **TestAliasTags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): Time Stamp.
* **Validations**: [FlowValidation](#flowvalidation)[] (ReadOnly)
* **Version**: string (ReadOnly): Draft Version.

## AWS.Bedrock/FlowVersionProperties
### Properties
* **CreatedAt**: string (ReadOnly): Time Stamp.
* **CustomerEncryptionKeyArn**: string (ReadOnly): A KMS key ARN
* **Definition**: [FlowDefinition](#flowdefinition) (ReadOnly)
* **Description**: string: Description of the flow version
* **ExecutionRoleArn**: string (ReadOnly): ARN of a IAM role
* **FlowArn**: string (Required, Identifier): Arn representation of the Flow
* **FlowId**: string (ReadOnly): Identifier for a Flow
* **Name**: string (ReadOnly): Name for the flow
* **Status**: string (ReadOnly)
* **Version**: string (ReadOnly, Identifier): Numerical Version.

## AWS.Bedrock/GuardrailProperties
### Properties
* **BlockedInputMessaging**: string (Required): Messaging for when violations are detected in text
* **BlockedOutputsMessaging**: string (Required): Messaging for when violations are detected in text
* **ContentPolicyConfig**: [ContentPolicyConfig](#contentpolicyconfig)
* **ContextualGroundingPolicyConfig**: [ContextualGroundingPolicyConfig](#contextualgroundingpolicyconfig)
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
* **StorageConfiguration**: [StorageConfiguration](#storageconfiguration)
* **Tags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): The time at which the knowledge base was last updated.

## AWS.Bedrock/PromptProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): ARN of a prompt resource possibly with a version
* **CreatedAt**: string (ReadOnly): Time Stamp.
* **CustomerEncryptionKeyArn**: string: A KMS key ARN
* **DefaultVariant**: string: Name for a variant.
* **Description**: string: Name for a prompt resource.
* **Id**: string (ReadOnly): Identifier for a Prompt
* **Name**: string (Required): Name for a prompt resource.
* **Tags**: [TagsMap](#tagsmap)
* **UpdatedAt**: string (ReadOnly): Time Stamp.
* **Variants**: [PromptVariant](#promptvariant)[] (WriteOnly): List of prompt variants
* **Version**: string (ReadOnly): Draft Version.

## BedrockDataAutomationConfiguration
### Properties
* **ParsingModality**: string

## BedrockEmbeddingModelConfiguration
### Properties
* **Dimensions**: int: The dimensions details for the vector configuration used on the Bedrock embeddings model.
* **EmbeddingDataType**: string: The data type for the vectors when using a model to convert text into vector embeddings.

## BedrockFoundationModelConfiguration
### Properties
* **ModelArn**: string (Required): The model's ARN.
* **ParsingModality**: string
* **ParsingPrompt**: [ParsingPrompt](#parsingprompt)

## ChunkingConfiguration
### Properties
* **ChunkingStrategy**: string (Required)
* **FixedSizeChunkingConfiguration**: [FixedSizeChunkingConfiguration](#fixedsizechunkingconfiguration)
* **HierarchicalChunkingConfiguration**: [HierarchicalChunkingConfiguration](#hierarchicalchunkingconfiguration)
* **SemanticChunkingConfiguration**: [SemanticChunkingConfiguration](#semanticchunkingconfiguration)

## ConfluenceCrawlerConfiguration
### Properties
* **FilterConfiguration**: [CrawlFilterConfiguration](#crawlfilterconfiguration)

## ConfluenceDataSourceConfiguration
### Properties
* **CrawlerConfiguration**: [ConfluenceCrawlerConfiguration](#confluencecrawlerconfiguration)
* **SourceConfiguration**: [ConfluenceSourceConfiguration](#confluencesourceconfiguration) (Required)

## ConfluenceSourceConfiguration
### Properties
* **AuthType**: string (Required): The supported authentication type to authenticate and connect to your Confluence instance.
* **CredentialsSecretArn**: string (Required): The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Confluence instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Confluence connection configuration.
* **HostType**: string (Required): The supported host type, whether online/cloud or server/on-premises.
* **HostUrl**: string (Required): The Confluence host URL or instance URL.

## ContentFilterConfig
### Properties
* **InputStrength**: string (Required)
* **OutputStrength**: string (Required)
* **Type**: string (Required)

## ContentPolicyConfig
### Properties
* **FiltersConfig**: [ContentFilterConfig](#contentfilterconfig)[] (Required): List of content filter configs in content policy.

## ContextualGroundingFilterConfig
### Properties
* **Threshold**: int (Required): The threshold for this filter.
* **Type**: string (Required)

## ContextualGroundingPolicyConfig
### Properties
* **FiltersConfig**: [ContextualGroundingFilterConfig](#contextualgroundingfilterconfig)[] (Required): List of contextual grounding filter configs.

## CrawlFilterConfiguration
### Properties
* **PatternObjectFilter**: [PatternObjectFilterConfiguration](#patternobjectfilterconfiguration)
* **Type**: string (Required): The crawl filter type.

## CuratedQuery
### Properties
* **NaturalLanguage**: string (Required)
* **Sql**: string (Required)

## CustomTransformationConfiguration
### Properties
* **IntermediateStorage**: [IntermediateStorage](#intermediatestorage) (Required)
* **Transformations**: [Transformation](#transformation)[] (Required): A list of Lambda functions that process documents.

## DataSourceConfiguration
### Properties
* **ConfluenceConfiguration**: [ConfluenceDataSourceConfiguration](#confluencedatasourceconfiguration)
* **S3Configuration**: [S3DataSourceConfiguration](#s3datasourceconfiguration)
* **SalesforceConfiguration**: [SalesforceDataSourceConfiguration](#salesforcedatasourceconfiguration)
* **SharePointConfiguration**: [SharePointDataSourceConfiguration](#sharepointdatasourceconfiguration)
* **Type**: string (Required)
* **WebConfiguration**: [WebDataSourceConfiguration](#webdatasourceconfiguration)

## DefinitionSubstitutions
### Properties

## EmbeddingModelConfiguration
### Properties
* **BedrockEmbeddingModelConfiguration**: [BedrockEmbeddingModelConfiguration](#bedrockembeddingmodelconfiguration)

## FixedSizeChunkingConfiguration
### Properties
* **MaxTokens**: int (Required): The maximum number of tokens to include in a chunk.
* **OverlapPercentage**: int (Required): The percentage of overlap between adjacent chunks of a data source.

## Flow_FlowConnectionConfiguration
### Properties

## Flow_FlowNodeConfiguration
### Properties

## FlowAliasRoutingConfigurationListItem
### Properties
* **FlowVersion**: string: Version.

## FlowConnection
### Properties
* **Configuration**: [Flow_FlowConnectionConfiguration](#flowflowconnectionconfiguration)
* **Name**: string (Required): Name of a connection in a flow
* **Source**: string (Required): Name of a node in a flow
* **Target**: string (Required): Name of a node in a flow
* **Type**: string (Required)

## FlowConnection
### Properties
* **Configuration**: [FlowVersion_FlowConnectionConfiguration](#flowversionflowconnectionconfiguration)
* **Name**: string (Required): Name of a connection in a flow
* **Source**: string (Required): Name of a node in a flow
* **Target**: string (Required): Name of a node in a flow
* **Type**: string (Required)

## FlowDefinition
### Properties
* **Connections**: [FlowConnection](#flowconnection)[]: List of connections
* **Nodes**: [FlowNode](#flownode)[]: List of nodes in a flow

## FlowDefinition
### Properties
* **Connections**: [FlowConnection](#flowconnection)[]: List of connections
* **Nodes**: [FlowNode](#flownode)[]: List of nodes in a flow

## FlowNode
### Properties
* **Configuration**: [Flow_FlowNodeConfiguration](#flowflownodeconfiguration)
* **Inputs**: [FlowNodeInput](#flownodeinput)[]: List of node inputs in a flow
* **Name**: string (Required): Name of a node in a flow
* **Outputs**: [FlowNodeOutput](#flownodeoutput)[]: List of node outputs in a flow
* **Type**: string (Required)

## FlowNode
### Properties
* **Configuration**: [FlowVersion_FlowNodeConfiguration](#flowversionflownodeconfiguration)
* **Inputs**: [FlowNodeInput](#flownodeinput)[]: List of node inputs in a flow
* **Name**: string (Required): Name of a node in a flow
* **Outputs**: [FlowNodeOutput](#flownodeoutput)[]: List of node outputs in a flow
* **Type**: string (Required)

## FlowNodeInput
### Properties
* **Expression**: string (Required): Expression for a node input in a flow
* **Name**: string (Required): Name of a node input in a flow
* **Type**: string (Required)

## FlowNodeInput
### Properties
* **Expression**: string (Required): Expression for a node input in a flow
* **Name**: string (Required): Name of a node input in a flow
* **Type**: string (Required)

## FlowNodeOutput
### Properties
* **Name**: string (Required): Name of a node output in a flow
* **Type**: string (Required)

## FlowNodeOutput
### Properties
* **Name**: string (Required): Name of a node output in a flow
* **Type**: string (Required)

## FlowValidation
### Properties
* **Message**: string (Required): validation message

## FlowVersion_FlowConnectionConfiguration
### Properties

## FlowVersion_FlowNodeConfiguration
### Properties

## Function
### Properties
* **Description**: string: Description of function
* **Name**: string (Required): Name for a resource.
* **Parameters**: [ParameterMap](#parametermap)
* **RequireConfirmation**: string

## FunctionSchema
### Properties
* **Functions**: [Function](#function)[] (Required): List of Function definitions

## GuardrailConfiguration
### Properties
* **GuardrailIdentifier**: string: Identifier for the guardrail, could be the id or the arn
* **GuardrailVersion**: string: Version of the guardrail

## HierarchicalChunkingConfiguration
### Properties
* **LevelConfigurations**: [HierarchicalChunkingLevelConfiguration](#hierarchicalchunkinglevelconfiguration)[] (Required): Token settings for each layer.
* **OverlapTokens**: int (Required): The number of tokens to repeat across chunks in the same layer.

## HierarchicalChunkingLevelConfiguration
### Properties
* **MaxTokens**: int (Required): The maximum number of tokens that a chunk can contain in this layer.

## InferenceConfiguration
### Properties
* **MaximumLength**: int: Maximum length of output
* **StopSequences**: string[]: List of stop sequences
* **Temperature**: int: Controls randomness, higher values increase diversity
* **TopK**: int: Sample from the k most likely next tokens
* **TopP**: int: Cumulative probability cutoff for token selection

## InferenceProfileModel
### Properties
* **ModelArn**: string: ARN for Foundation Models in Bedrock. These models can be used as base models for model customization jobs

## InferenceProfileModelSource
### Properties

## IntermediateStorage
### Properties
* **S3Location**: [S3Location](#s3location) (Required)

## KendraKnowledgeBaseConfiguration
### Properties
* **KendraIndexArn**: string (Required)

## KnowledgeBaseConfiguration
### Properties
* **KendraKnowledgeBaseConfiguration**: [KendraKnowledgeBaseConfiguration](#kendraknowledgebaseconfiguration)
* **SqlKnowledgeBaseConfiguration**: [SqlKnowledgeBaseConfiguration](#sqlknowledgebaseconfiguration)
* **Type**: string (Required)
* **VectorKnowledgeBaseConfiguration**: [VectorKnowledgeBaseConfiguration](#vectorknowledgebaseconfiguration)

## ManagedWordsConfig
### Properties
* **Type**: string (Required)

## MongoDbAtlasConfiguration
### Properties
* **CollectionName**: string (Required): Name of the collection within MongoDB Atlas.
* **CredentialsSecretArn**: string (Required): The ARN of the secret that you created in AWS Secrets Manager that is linked to your Amazon Mongo database.
* **DatabaseName**: string (Required): Name of the database within MongoDB Atlas.
* **Endpoint**: string (Required): MongoDB Atlas endpoint.
* **EndpointServiceName**: string: MongoDB Atlas endpoint service name.
* **FieldMapping**: [MongoDbAtlasFieldMapping](#mongodbatlasfieldmapping) (Required)
* **VectorIndexName**: string (Required): Name of a MongoDB Atlas index.

## MongoDbAtlasFieldMapping
### Properties
* **MetadataField**: string (Required): The name of the field in which Amazon Bedrock stores metadata about the vector store.
* **TextField**: string (Required): The name of the field in which Amazon Bedrock stores the raw text from your data. The text is split according to the chunking strategy you choose.
* **VectorField**: string (Required): The name of the field in which Amazon Bedrock stores the vector embeddings for your data sources.

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

## ParsingConfiguration
### Properties
* **BedrockDataAutomationConfiguration**: [BedrockDataAutomationConfiguration](#bedrockdataautomationconfiguration)
* **BedrockFoundationModelConfiguration**: [BedrockFoundationModelConfiguration](#bedrockfoundationmodelconfiguration)
* **ParsingStrategy**: string (Required)

## ParsingPrompt
### Properties
* **ParsingPromptText**: string (Required): Instructions for interpreting the contents of a document.

## PatternObjectFilter
### Properties
* **ExclusionFilters**: string[]
* **InclusionFilters**: string[]
* **ObjectType**: string (Required): The supported object type or content type of the data source.

## PatternObjectFilterConfiguration
### Properties
* **Filters**: [PatternObjectFilter](#patternobjectfilter)[] (Required)

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

## PromptGenAiResource
### Properties

## PromptInferenceConfiguration
### Properties

## PromptOverrideConfiguration
### Properties
* **OverrideLambda**: string: ARN of a Lambda.
* **PromptConfigurations**: [PromptConfiguration](#promptconfiguration)[] (Required): List of BasePromptConfiguration

## PromptTemplateConfiguration
### Properties

## PromptVariant
### Properties
* **GenAiResource**: [PromptGenAiResource](#promptgenairesource)
* **InferenceConfiguration**: [PromptInferenceConfiguration](#promptinferenceconfiguration)
* **ModelId**: string: ARN or Id of a Bedrock Foundational Model or Inference Profile, or the ARN of a imported model, or a provisioned throughput ARN for custom models.
* **Name**: string (Required): Name for a variant.
* **TemplateConfiguration**: [PromptTemplateConfiguration](#prompttemplateconfiguration) (Required)
* **TemplateType**: string (Required)

## QueryGenerationColumn
### Properties
* **Description**: string
* **Inclusion**: string
* **Name**: string

## QueryGenerationConfiguration
### Properties
* **ExecutionTimeoutSeconds**: int
* **GenerationContext**: [QueryGenerationContext](#querygenerationcontext)

## QueryGenerationContext
### Properties
* **CuratedQueries**: [CuratedQuery](#curatedquery)[]
* **Tables**: [QueryGenerationTable](#querygenerationtable)[]

## QueryGenerationTable
### Properties
* **Columns**: [QueryGenerationColumn](#querygenerationcolumn)[]
* **Description**: string
* **Inclusion**: string
* **Name**: string (Required)

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

## RedshiftConfiguration
### Properties
* **QueryEngineConfiguration**: [RedshiftQueryEngineConfiguration](#redshiftqueryengineconfiguration) (Required)
* **QueryGenerationConfiguration**: [QueryGenerationConfiguration](#querygenerationconfiguration)
* **StorageConfigurations**: [RedshiftQueryEngineStorageConfiguration](#redshiftqueryenginestorageconfiguration)[] (Required)

## RedshiftProvisionedAuthConfiguration
### Properties
* **DatabaseUser**: string: Redshift database user
* **Type**: string (Required)
* **UsernamePasswordSecretArn**: string

## RedshiftProvisionedConfiguration
### Properties
* **AuthConfiguration**: [RedshiftProvisionedAuthConfiguration](#redshiftprovisionedauthconfiguration) (Required)
* **ClusterIdentifier**: string (Required)

## RedshiftQueryEngineAwsDataCatalogStorageConfiguration
### Properties
* **TableNames**: string[] (Required)

## RedshiftQueryEngineConfiguration
### Properties
* **ProvisionedConfiguration**: [RedshiftProvisionedConfiguration](#redshiftprovisionedconfiguration)
* **ServerlessConfiguration**: [RedshiftServerlessConfiguration](#redshiftserverlessconfiguration)
* **Type**: string (Required)

## RedshiftQueryEngineRedshiftStorageConfiguration
### Properties
* **DatabaseName**: string (Required)

## RedshiftQueryEngineStorageConfiguration
### Properties
* **AwsDataCatalogConfiguration**: [RedshiftQueryEngineAwsDataCatalogStorageConfiguration](#redshiftqueryengineawsdatacatalogstorageconfiguration)
* **RedshiftConfiguration**: [RedshiftQueryEngineRedshiftStorageConfiguration](#redshiftqueryengineredshiftstorageconfiguration)
* **Type**: string (Required)

## RedshiftServerlessAuthConfiguration
### Properties
* **Type**: string (Required)
* **UsernamePasswordSecretArn**: string

## RedshiftServerlessConfiguration
### Properties
* **AuthConfiguration**: [RedshiftServerlessAuthConfiguration](#redshiftserverlessauthconfiguration) (Required)
* **WorkgroupArn**: string (Required)

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

## S3Location
### Properties
* **URI**: string (Required): The location's URI

## S3Location
### Properties
* **Bucket**: string (Required): A bucket in S3
* **Key**: string (Required): A object key in S3
* **Version**: string: The version of the the S3 object to use

## S3Location
### Properties
* **URI**: string (Required): The location's URI

## SalesforceCrawlerConfiguration
### Properties
* **FilterConfiguration**: [CrawlFilterConfiguration](#crawlfilterconfiguration)

## SalesforceDataSourceConfiguration
### Properties
* **CrawlerConfiguration**: [SalesforceCrawlerConfiguration](#salesforcecrawlerconfiguration)
* **SourceConfiguration**: [SalesforceSourceConfiguration](#salesforcesourceconfiguration) (Required)

## SalesforceSourceConfiguration
### Properties
* **AuthType**: string (Required): The supported authentication type to authenticate and connect to your Salesforce instance.
* **CredentialsSecretArn**: string (Required): The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your Salesforce instance URL. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see Salesforce connection configuration.
* **HostUrl**: string (Required): The Salesforce host URL or instance URL.

## SeedUrl
### Properties
* **Url**: string (Required): A web url.

## SemanticChunkingConfiguration
### Properties
* **BreakpointPercentileThreshold**: int (Required): The dissimilarity threshold for splitting chunks.
* **BufferSize**: int (Required): The buffer size.
* **MaxTokens**: int (Required): The maximum number of tokens that a chunk can contain.

## SensitiveInformationPolicyConfig
### Properties
* **PiiEntitiesConfig**: [PiiEntityConfig](#piientityconfig)[]: List of entities.
* **RegexesConfig**: [RegexConfig](#regexconfig)[]: List of regex.

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyArn**: string: The ARN of the AWS KMS key used to encrypt the resource.

## SharePointCrawlerConfiguration
### Properties
* **FilterConfiguration**: [CrawlFilterConfiguration](#crawlfilterconfiguration)

## SharePointDataSourceConfiguration
### Properties
* **CrawlerConfiguration**: [SharePointCrawlerConfiguration](#sharepointcrawlerconfiguration)
* **SourceConfiguration**: [SharePointSourceConfiguration](#sharepointsourceconfiguration) (Required)

## SharePointSourceConfiguration
### Properties
* **AuthType**: string (Required): The supported authentication type to authenticate and connect to your SharePoint site/sites.
* **CredentialsSecretArn**: string (Required): The Amazon Resource Name of an AWS Secrets Manager secret that stores your authentication credentials for your SharePoint site/sites. For more information on the key-value pairs that must be included in your secret, depending on your authentication type, see SharePoint connection configuration.
* **Domain**: string (Required): The domain of your SharePoint instance or site URL/URLs.
* **HostType**: string (Required): The supported host type, whether online/cloud or server/on-premises.
* **SiteUrls**: string[] (Required): A list of one or more SharePoint site URLs.
* **TenantId**: string: The identifier of your Microsoft 365 tenant.

## SqlKnowledgeBaseConfiguration
### Properties
* **RedshiftConfiguration**: [RedshiftConfiguration](#redshiftconfiguration)
* **Type**: string (Required)

## StorageConfiguration
### Properties
* **MongoDbAtlasConfiguration**: [MongoDbAtlasConfiguration](#mongodbatlasconfiguration)
* **OpensearchServerlessConfiguration**: [OpenSearchServerlessConfiguration](#opensearchserverlessconfiguration)
* **PineconeConfiguration**: [PineconeConfiguration](#pineconeconfiguration)
* **RdsConfiguration**: [RdsConfiguration](#rdsconfiguration)
* **Type**: string (Required)

## SupplementalDataStorageConfiguration
### Properties
* **SupplementalDataStorageLocations**: [SupplementalDataStorageLocation](#supplementaldatastoragelocation)[] (Required)

## SupplementalDataStorageLocation
### Properties
* **S3Location**: [S3Location](#s3location)
* **SupplementalDataStorageLocationType**: string (Required)

## Tag
### Properties
* **Key**: string (Required): Tag Key
* **Value**: string (Required): Tag Value

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

## Transformation
### Properties
* **StepToApply**: string (Required): When the service applies the transformation.
* **TransformationFunction**: [TransformationFunction](#transformationfunction) (Required)

## TransformationFunction
### Properties
* **TransformationLambdaConfiguration**: [TransformationLambdaConfiguration](#transformationlambdaconfiguration) (Required)

## TransformationLambdaConfiguration
### Properties
* **LambdaArn**: string (Required): The function's ARN identifier.

## UrlConfiguration
### Properties
* **SeedUrls**: [SeedUrl](#seedurl)[] (Required)

## VectorIngestionConfiguration
### Properties
* **ChunkingConfiguration**: [ChunkingConfiguration](#chunkingconfiguration)
* **CustomTransformationConfiguration**: [CustomTransformationConfiguration](#customtransformationconfiguration)
* **ParsingConfiguration**: [ParsingConfiguration](#parsingconfiguration)

## VectorKnowledgeBaseConfiguration
### Properties
* **EmbeddingModelArn**: string (Required): The ARN of the model used to create vector embeddings for the knowledge base.
* **EmbeddingModelConfiguration**: [EmbeddingModelConfiguration](#embeddingmodelconfiguration)
* **SupplementalDataStorageConfiguration**: [SupplementalDataStorageConfiguration](#supplementaldatastorageconfiguration)

## WebCrawlerConfiguration
### Properties
* **CrawlerLimits**: [WebCrawlerLimits](#webcrawlerlimits)
* **ExclusionFilters**: string[]
* **InclusionFilters**: string[]
* **Scope**: string

## WebCrawlerLimits
### Properties
* **RateLimit**: int: Rate of web URLs retrieved per minute.

## WebDataSourceConfiguration
### Properties
* **CrawlerConfiguration**: [WebCrawlerConfiguration](#webcrawlerconfiguration)
* **SourceConfiguration**: [WebSourceConfiguration](#websourceconfiguration) (Required)

## WebSourceConfiguration
### Properties
* **UrlConfiguration**: [UrlConfiguration](#urlconfiguration) (Required)

## WordConfig
### Properties
* **Text**: string (Required): The custom word text.

## WordPolicyConfig
### Properties
* **ManagedWordListsConfig**: [ManagedWordsConfig](#managedwordsconfig)[]: A config for the list of managed words.
* **WordsConfig**: [WordConfig](#wordconfig)[]: List of custom word configs.

