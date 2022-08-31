# AWS.Evidently @ default

## Resource AWS.Evidently/Experiment@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Evidently/ExperimentProperties](#awsevidentlyexperimentproperties): properties of the resource

## Resource AWS.Evidently/Feature@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Evidently/FeatureProperties](#awsevidentlyfeatureproperties): properties of the resource

## Resource AWS.Evidently/Launch@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Evidently/LaunchProperties](#awsevidentlylaunchproperties): properties of the resource

## Resource AWS.Evidently/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Evidently/ProjectProperties](#awsevidentlyprojectproperties): properties of the resource

## AWS.Evidently/ExperimentProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **MetricGoals**: [MetricGoalObject](#metricgoalobject)[]
* **Name**: string
* **OnlineAbConfig**: [OnlineAbConfigObject](#onlineabconfigobject)
* **Project**: string
* **RandomizationSalt**: string
* **RemoveSegment**: bool
* **RunningStatus**: [RunningStatusObject](#runningstatusobject): Start Experiment. Default is False
* **SamplingRate**: int
* **Segment**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Treatments**: [TreatmentObject](#treatmentobject)[]

## MetricGoalObject
### Properties
* **DesiredChange**: string
* **EntityIdKey**: string: The JSON path to reference the entity id in the event.
* **EventPattern**: string: Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
* **MetricName**: string
* **UnitLabel**: string
* **ValueKey**: string: The JSON path to reference the numerical metric value in the event.

## OnlineAbConfigObject
### Properties
* **ControlTreatmentName**: string
* **TreatmentWeights**: [TreatmentToWeight](#treatmenttoweight)[]

## TreatmentToWeight
### Properties
* **SplitWeight**: int
* **Treatment**: string

## RunningStatusObject
### Properties
* **AnalysisCompleteTime**: string: Provide the analysis Completion time for an experiment
* **DesiredState**: string: Provide CANCELLED or COMPLETED desired state when stopping an experiment
* **Reason**: string: Reason is a required input for stopping the experiment
* **Status**: string: Provide START or STOP action to apply on an experiment

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TreatmentObject
### Properties
* **Description**: string
* **Feature**: string
* **TreatmentName**: string
* **Variation**: string

## AWS.Evidently/FeatureProperties
### Properties
* **Arn**: string (ReadOnly)
* **DefaultVariation**: string
* **Description**: string
* **EntityOverrides**: [EntityOverride](#entityoverride)[]
* **EvaluationStrategy**: string
* **Name**: string
* **Project**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Variations**: [VariationObject](#variationobject)[]

## EntityOverride
### Properties
* **EntityId**: string
* **Variation**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## VariationObject
### Properties
* **BooleanValue**: bool
* **DoubleValue**: int
* **LongValue**: int
* **StringValue**: string
* **VariationName**: string

## AWS.Evidently/LaunchProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **ExecutionStatus**: [ExecutionStatusObject](#executionstatusobject): Start or Stop Launch Launch. Default is not started.
* **Groups**: [LaunchGroupObject](#launchgroupobject)[]
* **MetricMonitors**: [MetricDefinitionObject](#metricdefinitionobject)[]
* **Name**: string
* **Project**: string
* **RandomizationSalt**: string
* **ScheduledSplitsConfig**: [StepConfig](#stepconfig)[]
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## ExecutionStatusObject
### Properties
* **DesiredState**: string: Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.
* **Reason**: string: Provide a reason for stopping the launch. Defaults to empty if not provided.
* **Status**: string: Provide START or STOP action to apply on a launch

## LaunchGroupObject
### Properties
* **Description**: string
* **Feature**: string
* **GroupName**: string
* **Variation**: string

## MetricDefinitionObject
### Properties
* **EntityIdKey**: string: The JSON path to reference the entity id in the event.
* **EventPattern**: string: Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
* **MetricName**: string
* **UnitLabel**: string
* **ValueKey**: string: The JSON path to reference the numerical metric value in the event.

## StepConfig
### Properties
* **GroupWeights**: [GroupToWeight](#grouptoweight)[]
* **SegmentOverrides**: [SegmentOverride](#segmentoverride)[]
* **StartTime**: string

## GroupToWeight
### Properties
* **GroupName**: string
* **SplitWeight**: int

## SegmentOverride
### Properties
* **EvaluationOrder**: int
* **Segment**: string
* **Weights**: [GroupToWeight](#grouptoweight)[]

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Evidently/ProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **DataDelivery**: [DataDeliveryObject](#datadeliveryobject)
* **Description**: string
* **Name**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DataDeliveryObject
### Properties
* **LogGroup**: string
* **S3**: [S3Destination](#s3destination)

## S3Destination
### Properties
* **BucketName**: string
* **Prefix**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

