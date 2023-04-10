# AWS.Scheduler @ default

## Resource AWS.Scheduler/Schedule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Scheduler/ScheduleProperties](#awsschedulerscheduleproperties) (Required): properties of the resource

## Resource AWS.Scheduler/ScheduleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Scheduler/ScheduleGroupProperties](#awsschedulerschedulegroupproperties): properties of the resource

## AWS.Scheduler/ScheduleProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the schedule.
* **Description**: string: The description of the schedule.
* **EndDate**: string: The date, in UTC, before which the schedule can invoke its target. Depending on the schedule's recurrence expression, invocations might stop on, or before, the EndDate you specify.
* **FlexibleTimeWindow**: [FlexibleTimeWindow](#flexibletimewindow) (Required)
* **GroupName**: string: The name of the schedule group to associate with this schedule. If you omit this, the default schedule group is used.
* **KmsKeyArn**: string: The ARN for a KMS Key that will be used to encrypt customer data.
* **Name**: string (Identifier)
* **ScheduleExpression**: string (Required): The scheduling expression.
* **ScheduleExpressionTimezone**: string: The timezone in which the scheduling expression is evaluated.
* **StartDate**: string: The date, in UTC, after which the schedule can begin invoking its target. Depending on the schedule's recurrence expression, invocations might occur on, or after, the StartDate you specify.
* **State**: string
* **Target**: [Target](#target) (Required)

## FlexibleTimeWindow
### Properties
* **MaximumWindowInMinutes**: int: The maximum time window during which a schedule can be invoked.
* **Mode**: string (Required)

## Target
### Properties
* **Arn**: string (Required): The Amazon Resource Name (ARN) of the target.
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig)
* **EcsParameters**: [EcsParameters](#ecsparameters)
* **EventBridgeParameters**: [EventBridgeParameters](#eventbridgeparameters)
* **Input**: string: The text, or well-formed JSON, passed to the target. If you are configuring a templated Lambda, AWS Step Functions, or Amazon EventBridge target, the input must be a well-formed JSON. For all other target types, a JSON is not required. If you do not specify anything for this field, EventBridge Scheduler delivers a default notification to the target.
* **KinesisParameters**: [KinesisParameters](#kinesisparameters)
* **RetryPolicy**: [RetryPolicy](#retrypolicy)
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role to be used for this target when the schedule is triggered.
* **SageMakerPipelineParameters**: [SageMakerPipelineParameters](#sagemakerpipelineparameters)
* **SqsParameters**: [SqsParameters](#sqsparameters)

## DeadLetterConfig
### Properties
* **Arn**: string: The ARN of the SQS queue specified as the target for the dead-letter queue.

## EcsParameters
### Properties
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]: The capacity provider strategy to use for the task.
* **EnableECSManagedTags**: bool: Specifies whether to enable Amazon ECS managed tags for the task. For more information, see Tagging Your Amazon ECS Resources in the Amazon Elastic Container Service Developer Guide.
* **EnableExecuteCommand**: bool: Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
* **Group**: string: Specifies an ECS task group for the task. The maximum length is 255 characters.
* **LaunchType**: string
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PlacementConstraints**: [PlacementConstraint](#placementconstraint)[]: An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
* **PlacementStrategy**: [PlacementStrategy](#placementstrategy)[]: The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
* **PlatformVersion**: string: Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as 1.1.0.
* **PropagateTags**: string
* **ReferenceId**: string: The reference ID to use for the task.
* **Tags**: [TagMap](#tagmap)[]: The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see RunTask in the Amazon ECS API Reference.
* **TaskCount**: int: The number of tasks to create based on TaskDefinition. The default is 1.
* **TaskDefinitionArn**: string (Required): The ARN of the task definition to use if the event target is an Amazon ECS task.

## CapacityProviderStrategyItem
### Properties
* **Base**: int: The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
* **CapacityProvider**: string (Required): The short name of the capacity provider.
* **Weight**: int: The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.

## NetworkConfiguration
### Properties
* **AwsvpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string
* **SecurityGroups**: string[]: Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
* **Subnets**: string[] (Required): Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.

## PlacementConstraint
### Properties
* **Expression**: string: A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is distinctInstance. To learn more, see Cluster Query Language in the Amazon Elastic Container Service Developer Guide.
* **Type**: string

## PlacementStrategy
### Properties
* **Field**: string: The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
* **Type**: string

## TagMap
### Properties

## EventBridgeParameters
### Properties
* **DetailType**: string (Required): Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.
* **Source**: string (Required): The source of the event.

## KinesisParameters
### Properties
* **PartitionKey**: string (Required): The custom parameter used as the Kinesis partition key. For more information, see Amazon Kinesis Streams Key Concepts in the Amazon Kinesis Streams Developer Guide.

## RetryPolicy
### Properties
* **MaximumEventAgeInSeconds**: int: The maximum amount of time, in seconds, to continue to make retry attempts.
* **MaximumRetryAttempts**: int: The maximum number of retry attempts to make before the request fails. Retry attempts with exponential backoff continue until either the maximum number of attempts is made or until the duration of the MaximumEventAgeInSeconds is reached.

## SageMakerPipelineParameters
### Properties
* **PipelineParameterList**: [SageMakerPipelineParameter](#sagemakerpipelineparameter)[]: List of Parameter names and values for SageMaker Model Building Pipeline execution.

## SageMakerPipelineParameter
### Properties
* **Name**: string (Required, Identifier): Name of parameter to start execution of a SageMaker Model Building Pipeline.
* **Value**: string (Required): Value of parameter to start execution of a SageMaker Model Building Pipeline.

## SqsParameters
### Properties
* **MessageGroupId**: string: The FIFO message group ID to use as the target.

## AWS.Scheduler/ScheduleGroupProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the schedule group.
* **CreationDate**: string (ReadOnly): The time at which the schedule group was created.
* **LastModificationDate**: string (ReadOnly): The time at which the schedule group was last modified.
* **Name**: string (Identifier)
* **State**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: The list of tags to associate with the schedule group.

## Tag
### Properties
* **Key**: string (Required): Key for the tag
* **Value**: string (Required): Value for the tag

