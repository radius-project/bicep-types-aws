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

## InferenceConfiguration
### Properties
* **MaximumLength**: int: Maximum length of output
* **StopSequences**: string[]: List of stop sequences
* **Temperature**: int: Controls randomness, higher values increase diversity
* **TopK**: int: Sample from the k most likely next tokens
* **TopP**: int: Cumulative probability cutoff for token selection

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

## TagsMap
### Properties

## TagsMap
### Properties

