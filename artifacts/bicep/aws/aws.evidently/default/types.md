# AWS.Evidently @ default

## Resource AWS.Evidently/Experiment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Evidently/ExperimentProperties](#awsevidentlyexperimentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Evidently/Feature@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Evidently/FeatureProperties](#awsevidentlyfeatureproperties) (Required, Identifier): properties of the resource

## Resource AWS.Evidently/Launch@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Evidently/LaunchProperties](#awsevidentlylaunchproperties) (Required, Identifier): properties of the resource

## Resource AWS.Evidently/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Evidently/ProjectProperties](#awsevidentlyprojectproperties) (Required, Identifier): properties of the resource

## AppConfigResourceObject
### Properties
* **ApplicationId**: string (Required)
* **EnvironmentId**: string (Required)

## AWS.Evidently/ExperimentProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **MetricGoals**: [MetricGoalObject](#metricgoalobject)[] (Required)
* **Name**: string (Required)
* **OnlineAbConfig**: [OnlineAbConfigObject](#onlineabconfigobject) (Required)
* **Project**: string (Required)
* **RandomizationSalt**: string
* **RemoveSegment**: bool
* **RunningStatus**: [RunningStatusObject](#runningstatusobject): Start Experiment. Default is False
* **SamplingRate**: int
* **Segment**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Treatments**: [TreatmentObject](#treatmentobject)[] (Required)

## AWS.Evidently/FeatureProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DefaultVariation**: string
* **Description**: string
* **EntityOverrides**: [EntityOverride](#entityoverride)[]
* **EvaluationStrategy**: string
* **Name**: string (Required)
* **Project**: string (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Variations**: [VariationObject](#variationobject)[] (Required)

## AWS.Evidently/LaunchProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **ExecutionStatus**: [ExecutionStatusObject](#executionstatusobject): Start or Stop Launch Launch. Default is not started.
* **Groups**: [LaunchGroupObject](#launchgroupobject)[] (Required)
* **MetricMonitors**: [MetricDefinitionObject](#metricdefinitionobject)[]
* **Name**: string (Required)
* **Project**: string (Required)
* **RandomizationSalt**: string
* **ScheduledSplitsConfig**: [StepConfig](#stepconfig)[] (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Evidently/ProjectProperties
### Properties
* **AppConfigResource**: [AppConfigResourceObject](#appconfigresourceobject)
* **Arn**: string (ReadOnly, Identifier)
* **DataDelivery**: [DataDeliveryObject](#datadeliveryobject)
* **Description**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DataDeliveryObject
### Properties
* **LogGroup**: string
* **S3**: [S3Destination](#s3destination)

## EntityOverride
### Properties
* **EntityId**: string
* **Variation**: string

## ExecutionStatusObject
### Properties
* **DesiredState**: string: Provide CANCELLED or COMPLETED as the launch desired state. Defaults to Completed if not provided.
* **Reason**: string: Provide a reason for stopping the launch. Defaults to empty if not provided.
* **Status**: string (Required): Provide START or STOP action to apply on a launch

## GroupToWeight
### Properties
* **GroupName**: string (Required)
* **SplitWeight**: int (Required)

## LaunchGroupObject
### Properties
* **Description**: string
* **Feature**: string (Required)
* **GroupName**: string (Required)
* **Variation**: string (Required)

## MetricDefinitionObject
### Properties
* **EntityIdKey**: string (Required): The JSON path to reference the entity id in the event.
* **EventPattern**: string: Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
* **MetricName**: string (Required)
* **UnitLabel**: string
* **ValueKey**: string (Required): The JSON path to reference the numerical metric value in the event.

## MetricGoalObject
### Properties
* **DesiredChange**: string (Required)
* **EntityIdKey**: string (Required): The JSON path to reference the entity id in the event.
* **EventPattern**: string: Event patterns have the same structure as the events they match. Rules use event patterns to select events. An event pattern either matches an event or it doesn't.
* **MetricName**: string (Required)
* **UnitLabel**: string
* **ValueKey**: string (Required): The JSON path to reference the numerical metric value in the event.

## OnlineAbConfigObject
### Properties
* **ControlTreatmentName**: string
* **TreatmentWeights**: [TreatmentToWeight](#treatmenttoweight)[]

## RunningStatusObject
### Properties
* **AnalysisCompleteTime**: string: Provide the analysis Completion time for an experiment
* **DesiredState**: string: Provide CANCELLED or COMPLETED desired state when stopping an experiment
* **Reason**: string: Reason is a required input for stopping the experiment
* **Status**: string (Required): Provide START or STOP action to apply on an experiment

## S3Destination
### Properties
* **BucketName**: string (Required)
* **Prefix**: string

## SegmentOverride
### Properties
* **EvaluationOrder**: int (Required)
* **Segment**: string (Required)
* **Weights**: [GroupToWeight](#grouptoweight)[] (Required)

## StepConfig
### Properties
* **GroupWeights**: [GroupToWeight](#grouptoweight)[] (Required)
* **SegmentOverrides**: [SegmentOverride](#segmentoverride)[]
* **StartTime**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TreatmentObject
### Properties
* **Description**: string
* **Feature**: string (Required)
* **TreatmentName**: string (Required)
* **Variation**: string (Required)

## TreatmentToWeight
### Properties
* **SplitWeight**: int (Required)
* **Treatment**: string (Required)

## VariationObject
### Properties
* **BooleanValue**: bool
* **DoubleValue**: int
* **LongValue**: int
* **StringValue**: string
* **VariationName**: string (Required)

