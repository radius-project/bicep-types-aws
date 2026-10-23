# AWS.MediaConvert @ default

## Resource AWS.MediaConvert/JobTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConvert/JobTemplateProperties](#awsmediaconvertjobtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConvert/Preset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConvert/PresetProperties](#awsmediaconvertpresetproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConvert/Queue@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConvert/QueueProperties](#awsmediaconvertqueueproperties) (Identifier): properties of the resource

## AccelerationSettings
### Properties
* **Mode**: string (Required): Specify the conditions when the service will run your job with accelerated transcoding.

## AWS.MediaConvert/JobTemplateProperties
### Properties
* **AccelerationSettings**: [AccelerationSettings](#accelerationsettings): Accelerated transcoding can significantly speed up jobs with long, visually complex content. Outputs that use this feature incur pro-tier pricing.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the job template, such as arn:aws:mediaconvert:us-west-2:123456789012:jobTemplates/my-job-template.
* **Category**: string: Optional. A category for the job template you are creating.
* **Description**: string: Optional. A description of the job template you are creating.
* **HopDestinations**: [HopDestination](#hopdestination)[]: Optional. Configuration for a destination queue to which the job can hop once a customer-defined minimum wait time has passed.
* **Name**: string (Identifier): The name of the job template you are creating.
* **Priority**: int: Specify the relative priority for this job. In any given queue, the service begins processing the job with the highest value first. When more than one job has the same priority, the service begins processing the job that you submitted first.
* **Queue**: string: Optional. The queue that jobs created from this template are assigned to. Specify the Amazon Resource Name (ARN) of the queue.
* **SettingsJson**: [JobTemplate_SettingsJson](#jobtemplatesettingsjson) (Required): Specify, in JSON format, the transcoding job settings for this job template. This specification must conform to the AWS Elemental MediaConvert job validation.
* **StatusUpdateInterval**: string: Specify how often MediaConvert sends STATUS_UPDATE events to Amazon CloudWatch Events. Set the interval, in seconds, between status updates.
* **Tags**: [JobTemplate_Tags](#jobtemplatetags): An array of key-value pairs to apply to this resource.

## AWS.MediaConvert/PresetProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the output preset, such as arn:aws:mediaconvert:us-west-2:123456789012
* **Category**: string: The new category for the preset, if you are changing it.
* **Description**: string: The new description for the preset, if you are changing it.
* **Name**: string (Identifier): The name of the preset that you are modifying.
* **SettingsJson**: [Preset_SettingsJson](#presetsettingsjson) (Required): Specify, in JSON format, the transcoding job settings for this output preset. This specification must conform to the AWS Elemental MediaConvert job validation. For information about forming this specification, see the Remarks section later in this topic.
* **Tags**: [Preset_Tags](#presettags)

## AWS.MediaConvert/QueueProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the queue, such as arn:aws:mediaconvert:us-west-2:123456789012.
* **ConcurrentJobs**: int: Specify the maximum number of jobs your queue can process concurrently. For on-demand queues, the value you enter is constrained by your service quotas for Maximum concurrent jobs, per on-demand queue and Maximum concurrent jobs, per account. For reserved queues, specify the number of jobs you can process concurrently in your reservation plan instead.
* **Description**: string: A description of the queue that you are creating.
* **MaximumConcurrentFeeds**: int: Specify the maximum number of Elemental Inference feeds MediaConvert can process concurrently.
* **Name**: string (Identifier): The name of the queue that you are creating.
* **PricingPlan**: string: When you use CloudFormation, you can create only on-demand queues. Therefore, always set PricingPlan to the value ON_DEMAND when declaring an AWS::MediaConvert::Queue in your CloudFormation template. To create a reserved queue, use the AWS Elemental MediaConvert console at https://console.aws.amazon.com/mediaconvert to set up a contract. For more information, see Working with AWS Elemental MediaConvert Queues in the AWS Elemental MediaConvert User Guide.
* **Status**: string: Initial state of the queue. Queues can be either ACTIVE or PAUSED. If you create a paused queue, then jobs that you send to that queue won't begin.
* **Tags**: [Queue_Tags](#queuetags): An array of key-value pairs to apply to this resource.

## HopDestination
### Properties
* **Priority**: int: Optional. A different relative priority for the job in the destination queue.
* **Queue**: string: Optional. The destination queue for queue hopping.
* **WaitMinutes**: int: Required for queue hopping. Minimum wait time in minutes until the job can hop to the destination queue.

## JobTemplate_SettingsJson
### Properties

## JobTemplate_Tags
### Properties

## Preset_SettingsJson
### Properties

## Preset_Tags
### Properties

## Queue_Tags
### Properties

