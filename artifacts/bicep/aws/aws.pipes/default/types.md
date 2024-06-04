# AWS.Pipes @ default

## Resource AWS.Pipes/Pipe@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Pipes/PipeProperties](#awspipespipeproperties) (Required, Identifier): properties of the resource

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
* **LogConfiguration**: [PipeLogConfiguration](#pipelogconfiguration)
* **Name**: string (Identifier)
* **RoleArn**: string (Required)
* **Source**: string (Required)
* **SourceParameters**: [PipeSourceParameters](#pipesourceparameters) (WriteOnly)
* **StateReason**: string (ReadOnly)
* **Tags**: [TagMap](#tagmap)
* **Target**: string (Required)
* **TargetParameters**: [PipeTargetParameters](#pipetargetparameters) (WriteOnly)

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string
* **SecurityGroups**: string[]
* **Subnets**: string[] (Required)

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

## BatchJobDependency
### Properties
* **JobId**: string
* **Type**: string

## BatchParametersMap
### Properties

## BatchResourceRequirement
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## BatchRetryStrategy
### Properties
* **Attempts**: int

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string (Required)
* **Weight**: int

## CloudwatchLogsLogDestination
### Properties
* **LogGroupArn**: string

## DeadLetterConfig
### Properties
* **Arn**: string

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

## EcsEnvironmentFile
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## EcsEnvironmentVariable
### Properties
* **Name**: string (Identifier)
* **Value**: string

## EcsEphemeralStorage
### Properties
* **SizeInGiB**: int (Required)

## EcsInferenceAcceleratorOverride
### Properties
* **DeviceName**: string
* **DeviceType**: string

## EcsResourceRequirement
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## EcsTaskOverride
### Properties
* **ContainerOverrides**: [EcsContainerOverride](#ecscontaineroverride)[]
* **Cpu**: string
* **EphemeralStorage**: [EcsEphemeralStorage](#ecsephemeralstorage)
* **ExecutionRoleArn**: string
* **InferenceAcceleratorOverrides**: [EcsInferenceAcceleratorOverride](#ecsinferenceacceleratoroverride)[]
* **Memory**: string
* **TaskRoleArn**: string

## Filter
### Properties
* **Pattern**: string

## FilterCriteria
### Properties
* **Filters**: [Filter](#filter)[]

## FirehoseLogDestination
### Properties
* **DeliveryStreamArn**: string

## HeaderParametersMap
### Properties

## MQBrokerAccessCredentials
### Properties

## MSKAccessCredentials
### Properties

## NetworkConfiguration
### Properties
* **AwsvpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## Pipe_SelfManagedKafkaAccessConfigurationCredentials
### Properties

## PipeEnrichmentHttpParameters
### Properties
* **HeaderParameters**: [HeaderParametersMap](#headerparametersmap)
* **PathParameterValues**: string[]
* **QueryStringParameters**: [QueryStringParametersMap](#querystringparametersmap)

## PipeEnrichmentParameters
### Properties
* **HttpParameters**: [PipeEnrichmentHttpParameters](#pipeenrichmenthttpparameters)
* **InputTemplate**: string

## PipeLogConfiguration
### Properties
* **CloudwatchLogsLogDestination**: [CloudwatchLogsLogDestination](#cloudwatchlogslogdestination)
* **FirehoseLogDestination**: [FirehoseLogDestination](#firehoselogdestination)
* **IncludeExecutionData**: string[]
* **Level**: string
* **S3LogDestination**: [S3LogDestination](#s3logdestination)

## PipeSourceActiveMQBrokerParameters
### Properties
* **BatchSize**: int
* **Credentials**: [MQBrokerAccessCredentials](#mqbrokeraccesscredentials) (Required)
* **MaximumBatchingWindowInSeconds**: int
* **QueueName**: string (Required)

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

## PipeSourceSqsQueueParameters
### Properties
* **BatchSize**: int
* **MaximumBatchingWindowInSeconds**: int

## PipeTargetBatchJobParameters
### Properties
* **ArrayProperties**: [BatchArrayProperties](#batcharrayproperties)
* **ContainerOverrides**: [BatchContainerOverrides](#batchcontaineroverrides)
* **DependsOn**: [BatchJobDependency](#batchjobdependency)[]
* **JobDefinition**: string (Required)
* **JobName**: string (Required)
* **Parameters**: [BatchParametersMap](#batchparametersmap)
* **RetryStrategy**: [BatchRetryStrategy](#batchretrystrategy)

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

## PipeTargetSqsQueueParameters
### Properties
* **MessageDeduplicationId**: string
* **MessageGroupId**: string

## PipeTargetStateMachineParameters
### Properties
* **InvocationType**: string

## PlacementConstraint
### Properties
* **Expression**: string
* **Type**: string

## PlacementStrategy
### Properties
* **Field**: string
* **Type**: string

## QueryStringParametersMap
### Properties

## S3LogDestination
### Properties
* **BucketName**: string
* **BucketOwner**: string
* **OutputFormat**: string
* **Prefix**: string

## SageMakerPipelineParameter
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

## SelfManagedKafkaAccessConfigurationVpc
### Properties
* **SecurityGroup**: string[]: List of SecurityGroupId.
* **Subnets**: string[]: List of SubnetId.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagMap
### Properties

