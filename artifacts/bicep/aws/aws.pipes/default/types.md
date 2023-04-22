# AWS.Pipes @ default

## Resource AWS.Pipes/Pipe@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Pipes/PipeProperties](#awspipespipeproperties) (Required): properties of the resource

## AWS.Pipes/PipeProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreationTime**: string (ReadOnly)
* **CurrentState**: string (ReadOnly)
* **Description**: string
* **DesiredState**: string
* **Enrichment**: string
* **EnrichmentParameters**: [PipeEnrichmentParameters](#pipeenrichmentparameters)
* **LastModifiedTime**: string (ReadOnly)
* **Name**: string (Identifier)
* **RoleArn**: string (Required)
* **Source**: string (Required)
* **SourceParameters**: [PipeSourceParameters](#pipesourceparameters) (WriteOnly)
* **StateReason**: string (ReadOnly)
* **Tags**: [TagMap](#tagmap)
* **Target**: string (Required)
* **TargetParameters**: [PipeTargetParameters](#pipetargetparameters) (WriteOnly)

## PipeEnrichmentParameters
### Properties
* **HttpParameters**: [PipeEnrichmentHttpParameters](#pipeenrichmenthttpparameters)
* **InputTemplate**: string

## PipeEnrichmentHttpParameters
### Properties
* **HeaderParameters**: [HeaderParametersMap](#headerparametersmap)
* **PathParameterValues**: string[]
* **QueryStringParameters**: [QueryStringParametersMap](#querystringparametersmap)

## HeaderParametersMap
### Properties

## QueryStringParametersMap
### Properties

## PipeSourceParameters
### Properties
* **ActiveMQBrokerParameters**: [PipeSourceActiveMQBrokerParameters](#pipesourceactivemqbrokerparameters)
* **DynamoDBStreamParameters**: [PipeSourceDynamoDBStreamParameters](#pipesourcedynamodbstreamparameters)
* **FilterCriteria**: [FilterCriteria](#filtercriteria)
* **KinesisStreamParameters**: [PipeSourceKinesisStreamParameters](#pipesourcekinesisstreamparameters)
* **ManagedStreamingKafkaParameters**: [PipeSourceManagedStreamingKafkaParameters](#pipesourcemanagedstreamingkafkaparameters)
* **RabbitMQBrokerParameters**: [PipeSourceRabbitMQBrokerParameters](#pipesourcerabbitmqbrokerparameters)
* **SelfManagedKafkaParameters**: [PipeSourceSelfManagedKafkaParameters](#pipesourceselfmanagedkafkaparameters)
* **SqsQueueParameters**: [PipeSourceSqsQueueParameters](#pipesourcesqsqueueparameters)

## PipeSourceActiveMQBrokerParameters
### Properties
* **BatchSize**: int
* **Credentials**: [MQBrokerAccessCredentials](#mqbrokeraccesscredentials) (Required)
* **MaximumBatchingWindowInSeconds**: int
* **QueueName**: string (Required)

## MQBrokerAccessCredentials
### Properties

## PipeSourceDynamoDBStreamParameters
### Properties
* **BatchSize**: int
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig)
* **MaximumBatchingWindowInSeconds**: int
* **MaximumRecordAgeInSeconds**: int
* **MaximumRetryAttempts**: int
* **OnPartialBatchItemFailure**: string
* **ParallelizationFactor**: int
* **StartingPosition**: string (Required)

## DeadLetterConfig
### Properties
* **Arn**: string

## FilterCriteria
### Properties
* **Filters**: [Filter](#filter)[]

## Filter
### Properties
* **Pattern**: string

## PipeSourceKinesisStreamParameters
### Properties
* **BatchSize**: int
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig)
* **MaximumBatchingWindowInSeconds**: int
* **MaximumRecordAgeInSeconds**: int
* **MaximumRetryAttempts**: int
* **OnPartialBatchItemFailure**: string
* **ParallelizationFactor**: int
* **StartingPosition**: string (Required)
* **StartingPositionTimestamp**: string

## PipeSourceManagedStreamingKafkaParameters
### Properties
* **BatchSize**: int
* **ConsumerGroupID**: string
* **Credentials**: [MSKAccessCredentials](#mskaccesscredentials)
* **MaximumBatchingWindowInSeconds**: int
* **StartingPosition**: string
* **TopicName**: string (Required)

## MSKAccessCredentials
### Properties

## PipeSourceRabbitMQBrokerParameters
### Properties
* **BatchSize**: int
* **Credentials**: [MQBrokerAccessCredentials](#mqbrokeraccesscredentials) (Required)
* **MaximumBatchingWindowInSeconds**: int
* **QueueName**: string (Required)
* **VirtualHost**: string

## PipeSourceSelfManagedKafkaParameters
### Properties
* **AdditionalBootstrapServers**: string[]
* **BatchSize**: int
* **ConsumerGroupID**: string
* **Credentials**: [Pipe_SelfManagedKafkaAccessConfigurationCredentials](#pipeselfmanagedkafkaaccessconfigurationcredentials)
* **MaximumBatchingWindowInSeconds**: int
* **ServerRootCaCertificate**: string: Optional SecretManager ARN which stores the database credentials
* **StartingPosition**: string
* **TopicName**: string (Required)
* **Vpc**: [SelfManagedKafkaAccessConfigurationVpc](#selfmanagedkafkaaccessconfigurationvpc)

## Pipe_SelfManagedKafkaAccessConfigurationCredentials
### Properties

## SelfManagedKafkaAccessConfigurationVpc
### Properties
* **SecurityGroup**: string[]: List of SecurityGroupId.
* **Subnets**: string[]: List of SubnetId.

## PipeSourceSqsQueueParameters
### Properties
* **BatchSize**: int
* **MaximumBatchingWindowInSeconds**: int

## TagMap
### Properties

## PipeTargetParameters
### Properties
* **BatchJobParameters**: [PipeTargetBatchJobParameters](#pipetargetbatchjobparameters)
* **CloudWatchLogsParameters**: [PipeTargetCloudWatchLogsParameters](#pipetargetcloudwatchlogsparameters)
* **EcsTaskParameters**: [PipeTargetEcsTaskParameters](#pipetargetecstaskparameters)
* **EventBridgeEventBusParameters**: [PipeTargetEventBridgeEventBusParameters](#pipetargeteventbridgeeventbusparameters)
* **HttpParameters**: [PipeTargetHttpParameters](#pipetargethttpparameters)
* **InputTemplate**: string
* **KinesisStreamParameters**: [PipeTargetKinesisStreamParameters](#pipetargetkinesisstreamparameters)
* **LambdaFunctionParameters**: [PipeTargetLambdaFunctionParameters](#pipetargetlambdafunctionparameters)
* **RedshiftDataParameters**: [PipeTargetRedshiftDataParameters](#pipetargetredshiftdataparameters)
* **SageMakerPipelineParameters**: [PipeTargetSageMakerPipelineParameters](#pipetargetsagemakerpipelineparameters)
* **SqsQueueParameters**: [PipeTargetSqsQueueParameters](#pipetargetsqsqueueparameters)
* **StepFunctionStateMachineParameters**: [PipeTargetStateMachineParameters](#pipetargetstatemachineparameters)

## PipeTargetBatchJobParameters
### Properties
* **ArrayProperties**: [BatchArrayProperties](#batcharrayproperties)
* **ContainerOverrides**: [BatchContainerOverrides](#batchcontaineroverrides)
* **DependsOn**: [BatchJobDependency](#batchjobdependency)[]
* **JobDefinition**: string (Required)
* **JobName**: string (Required)
* **Parameters**: [BatchParametersMap](#batchparametersmap)
* **RetryStrategy**: [BatchRetryStrategy](#batchretrystrategy)

## BatchArrayProperties
### Properties
* **Size**: int

## BatchContainerOverrides
### Properties
* **Command**: string[]
* **Environment**: [BatchEnvironmentVariable](#batchenvironmentvariable)[]
* **InstanceType**: string
* **ResourceRequirements**: [BatchResourceRequirement](#batchresourcerequirement)[]

## BatchEnvironmentVariable
### Properties
* **Name**: string (Identifier)
* **Value**: string

## BatchResourceRequirement
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## BatchJobDependency
### Properties
* **JobId**: string
* **Type**: string

## BatchParametersMap
### Properties

## BatchRetryStrategy
### Properties
* **Attempts**: int

## PipeTargetCloudWatchLogsParameters
### Properties
* **LogStreamName**: string
* **Timestamp**: string

## PipeTargetEcsTaskParameters
### Properties
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]
* **EnableECSManagedTags**: bool
* **EnableExecuteCommand**: bool
* **Group**: string
* **LaunchType**: string
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **Overrides**: [EcsTaskOverride](#ecstaskoverride)
* **PlacementConstraints**: [PlacementConstraint](#placementconstraint)[]
* **PlacementStrategy**: [PlacementStrategy](#placementstrategy)[]
* **PlatformVersion**: string
* **PropagateTags**: string
* **ReferenceId**: string
* **Tags**: [Tag](#tag)[]
* **TaskCount**: int
* **TaskDefinitionArn**: string (Required)

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string (Required)
* **Weight**: int

## NetworkConfiguration
### Properties
* **AwsvpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string
* **SecurityGroups**: string[]
* **Subnets**: string[] (Required)

## EcsTaskOverride
### Properties
* **ContainerOverrides**: [EcsContainerOverride](#ecscontaineroverride)[]
* **Cpu**: string
* **EphemeralStorage**: [EcsEphemeralStorage](#ecsephemeralstorage)
* **ExecutionRoleArn**: string
* **InferenceAcceleratorOverrides**: [EcsInferenceAcceleratorOverride](#ecsinferenceacceleratoroverride)[]
* **Memory**: string
* **TaskRoleArn**: string

## EcsContainerOverride
### Properties
* **Command**: string[]
* **Cpu**: int
* **Environment**: [EcsEnvironmentVariable](#ecsenvironmentvariable)[]
* **EnvironmentFiles**: [EcsEnvironmentFile](#ecsenvironmentfile)[]
* **Memory**: int
* **MemoryReservation**: int
* **Name**: string (Identifier)
* **ResourceRequirements**: [EcsResourceRequirement](#ecsresourcerequirement)[]

## EcsEnvironmentVariable
### Properties
* **Name**: string (Identifier)
* **Value**: string

## EcsEnvironmentFile
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## EcsResourceRequirement
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## EcsEphemeralStorage
### Properties
* **SizeInGiB**: int (Required)

## EcsInferenceAcceleratorOverride
### Properties
* **DeviceName**: string
* **DeviceType**: string

## PlacementConstraint
### Properties
* **Expression**: string
* **Type**: string

## PlacementStrategy
### Properties
* **Field**: string
* **Type**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## PipeTargetEventBridgeEventBusParameters
### Properties
* **DetailType**: string
* **EndpointId**: string
* **Resources**: string[]
* **Source**: string
* **Time**: string

## PipeTargetHttpParameters
### Properties
* **HeaderParameters**: [HeaderParametersMap](#headerparametersmap)
* **PathParameterValues**: string[]
* **QueryStringParameters**: [QueryStringParametersMap](#querystringparametersmap)

## PipeTargetKinesisStreamParameters
### Properties
* **PartitionKey**: string (Required)

## PipeTargetLambdaFunctionParameters
### Properties
* **InvocationType**: string

## PipeTargetRedshiftDataParameters
### Properties
* **Database**: string (Required): Redshift Database
* **DbUser**: string: Database user name
* **SecretManagerArn**: string: Optional SecretManager ARN which stores the database credentials
* **Sqls**: string[] (Required): A list of SQLs.
* **StatementName**: string: A name for Redshift DataAPI statement which can be used as filter of ListStatement.
* **WithEvent**: bool

## PipeTargetSageMakerPipelineParameters
### Properties
* **PipelineParameterList**: [SageMakerPipelineParameter](#sagemakerpipelineparameter)[]

## SageMakerPipelineParameter
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

## PipeTargetSqsQueueParameters
### Properties
* **MessageDeduplicationId**: string
* **MessageGroupId**: string

## PipeTargetStateMachineParameters
### Properties
* **InvocationType**: string

