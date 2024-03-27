# AWS.Events @ default

## Resource AWS.Events/ApiDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/ApiDestinationProperties](#awseventsapidestinationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Events/Archive@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/ArchiveProperties](#awseventsarchiveproperties) (Required, Identifier): properties of the resource

## Resource AWS.Events/Connection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/ConnectionProperties](#awseventsconnectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Events/Endpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/EndpointProperties](#awseventsendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Events/EventBus@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/EventBusProperties](#awseventseventbusproperties) (Required, Identifier): properties of the resource

## Resource AWS.Events/Rule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/RuleProperties](#awseventsruleproperties) (Identifier): properties of the resource

## ApiKeyAuthParameters
### Properties
* **ApiKeyName**: string (Required)
* **ApiKeyValue**: string (Required)

## AppSyncParameters
### Properties
* **GraphQLOperation**: string (Required)

## Archive_EventPattern
### Properties

## AuthParameters
### Properties
* **ApiKeyAuthParameters**: [ApiKeyAuthParameters](#apikeyauthparameters)
* **BasicAuthParameters**: [BasicAuthParameters](#basicauthparameters)
* **InvocationHttpParameters**: [ConnectionHttpParameters](#connectionhttpparameters)
* **OAuthParameters**: [OAuthParameters](#oauthparameters)

## AWS.Events/ApiDestinationProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the api destination.
* **ConnectionArn**: string (Required): The arn of the connection.
* **Description**: string
* **HttpMethod**: string (Required)
* **InvocationEndpoint**: string (Required): Url endpoint to invoke.
* **InvocationRateLimitPerSecond**: int
* **Name**: string (Identifier): Name of the apiDestination.

## AWS.Events/ArchiveProperties
### Properties
* **ArchiveName**: string (Identifier)
* **Arn**: string (ReadOnly)
* **Description**: string
* **EventPattern**: [Archive_EventPattern](#archiveeventpattern)
* **RetentionDays**: int
* **SourceArn**: string (Required)

## AWS.Events/ConnectionProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the connection resource.
* **AuthorizationType**: string (Required)
* **AuthParameters**: [AuthParameters](#authparameters) (Required, WriteOnly)
* **Description**: string: Description of the connection.
* **Name**: string (Identifier): Name of the connection.
* **SecretArn**: string (ReadOnly): The arn of the secrets manager secret created in the customer account.

## AWS.Events/EndpointProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **EndpointId**: string (ReadOnly)
* **EndpointUrl**: string (ReadOnly)
* **EventBuses**: [EndpointEventBus](#endpointeventbus)[] (Required)
* **Name**: string (Identifier)
* **ReplicationConfig**: [ReplicationConfig](#replicationconfig)
* **RoleArn**: string
* **RoutingConfig**: [RoutingConfig](#routingconfig) (Required)
* **State**: string (ReadOnly)
* **StateReason**: string (ReadOnly)

## AWS.Events/EventBusProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) for the event bus.
* **EventSourceName**: string (WriteOnly): If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
* **Name**: string (Required, Identifier): The name of the event bus.
* **Policy**: [EventBus_Policy](#eventbuspolicy) | string: A JSON string that describes the permission policy statement for the event bus.
* **Tags**: [Tag](#tag)[]: Any tags assigned to the event bus.

## AWS.Events/RuleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the rule, such as arn:aws:events:us-east-2:123456789012:rule/example.
* **Description**: string: The description of the rule.
* **EventBusName**: string: The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
* **EventPattern**: [Rule_EventPattern](#ruleeventpattern) | string: The event pattern of the rule. For more information, see Events and Event Patterns in the Amazon EventBridge User Guide.
* **Name**: string: The name of the rule.
* **RoleArn**: string: The Amazon Resource Name (ARN) of the role that is used for target invocation.
* **ScheduleExpression**: string: The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see Creating an Amazon EventBridge rule that runs on a schedule.
* **State**: string: The state of the rule.
* **Targets**: [Target](#target)[]: Adds the specified targets to the specified rule, or updates the targets if they are already associated with the rule.
Targets are the resources that are invoked when a rule is triggered.

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string
* **SecurityGroups**: string[]
* **Subnets**: string[] (Required)

## BasicAuthParameters
### Properties
* **Password**: string (Required)
* **Username**: string (Required)

## BatchArrayProperties
### Properties
* **Size**: int

## BatchParameters
### Properties
* **ArrayProperties**: [BatchArrayProperties](#batcharrayproperties)
* **JobDefinition**: string (Required)
* **JobName**: string (Required)
* **RetryStrategy**: [BatchRetryStrategy](#batchretrystrategy)

## BatchRetryStrategy
### Properties
* **Attempts**: int

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string (Required)
* **Weight**: int

## ClientParameters
### Properties
* **ClientID**: string (Required)
* **ClientSecret**: string (Required)

## ConnectionHttpParameters
### Properties
* **BodyParameters**: [Parameter](#parameter)[]
* **HeaderParameters**: [Parameter](#parameter)[]
* **QueryStringParameters**: [Parameter](#parameter)[]

## DeadLetterConfig
### Properties
* **Arn**: string (Identifier)

## EcsParameters
### Properties
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]
* **EnableECSManagedTags**: bool
* **EnableExecuteCommand**: bool
* **Group**: string
* **LaunchType**: string
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PlacementConstraints**: [PlacementConstraint](#placementconstraint)[]
* **PlacementStrategies**: [PlacementStrategy](#placementstrategy)[]
* **PlatformVersion**: string
* **PropagateTags**: string
* **ReferenceId**: string
* **TagList**: [Tag](#tag)[]
* **TaskCount**: int
* **TaskDefinitionArn**: string (Required)

## EndpointEventBus
### Properties
* **EventBusArn**: string (Required)

## FailoverConfig
### Properties
* **Primary**: [Primary](#primary) (Required)
* **Secondary**: [Secondary](#secondary) (Required)

## HttpParameters
### Properties
* **HeaderParameters**: [Rule_HeaderParameters](#ruleheaderparameters)
* **PathParameterValues**: string[]
* **QueryStringParameters**: [Rule_QueryStringParameters](#rulequerystringparameters)

## InputTransformer
### Properties
* **InputPathsMap**: [Rule_InputPathsMap](#ruleinputpathsmap)
* **InputTemplate**: string (Required)

## KinesisParameters
### Properties
* **PartitionKeyPath**: string (Required)

## NetworkConfiguration
### Properties
* **AwsVpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## OAuthParameters
### Properties
* **AuthorizationEndpoint**: string (Required)
* **ClientParameters**: [ClientParameters](#clientparameters) (Required)
* **HttpMethod**: string (Required)
* **OAuthHttpParameters**: [ConnectionHttpParameters](#connectionhttpparameters)

## Parameter
### Properties
* **IsValueSecret**: bool
* **Key**: string (Required)
* **Value**: string (Required)

## PlacementConstraint
### Properties
* **Expression**: string
* **Type**: string

## PlacementStrategy
### Properties
* **Field**: string
* **Type**: string

## Primary
### Properties
* **HealthCheck**: string (Required)

## RedshiftDataParameters
### Properties
* **Database**: string (Required)
* **DbUser**: string
* **SecretManagerArn**: string
* **Sql**: string
* **Sqls**: string[]
* **StatementName**: string
* **WithEvent**: bool

## ReplicationConfig
### Properties
* **State**: string (Required)

## RetryPolicy
### Properties
* **MaximumEventAgeInSeconds**: int
* **MaximumRetryAttempts**: int

## RoutingConfig
### Properties
* **FailoverConfig**: [FailoverConfig](#failoverconfig) (Required)

## Rule_HeaderParameters
### Properties

## Rule_InputPathsMap
### Properties

## Rule_QueryStringParameters
### Properties

## RunCommandParameters
### Properties
* **RunCommandTargets**: [RunCommandTarget](#runcommandtarget)[] (Required)

## RunCommandTarget
### Properties
* **Key**: string (Required)
* **Values**: string[] (Required)

## SageMakerPipelineParameter
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## SageMakerPipelineParameters
### Properties
* **PipelineParameterList**: [SageMakerPipelineParameter](#sagemakerpipelineparameter)[]

## Secondary
### Properties
* **Route**: string (Required)

## SqsParameters
### Properties
* **MessageGroupId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string
* **Value**: string

## Target
### Properties
* **AppSyncParameters**: [AppSyncParameters](#appsyncparameters)
* **Arn**: string (Required, Identifier)
* **BatchParameters**: [BatchParameters](#batchparameters)
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig)
* **EcsParameters**: [EcsParameters](#ecsparameters)
* **HttpParameters**: [HttpParameters](#httpparameters)
* **Id**: string (Required)
* **Input**: string
* **InputPath**: string
* **InputTransformer**: [InputTransformer](#inputtransformer)
* **KinesisParameters**: [KinesisParameters](#kinesisparameters)
* **RedshiftDataParameters**: [RedshiftDataParameters](#redshiftdataparameters)
* **RetryPolicy**: [RetryPolicy](#retrypolicy)
* **RoleArn**: string
* **RunCommandParameters**: [RunCommandParameters](#runcommandparameters)
* **SageMakerPipelineParameters**: [SageMakerPipelineParameters](#sagemakerpipelineparameters)
* **SqsParameters**: [SqsParameters](#sqsparameters)

