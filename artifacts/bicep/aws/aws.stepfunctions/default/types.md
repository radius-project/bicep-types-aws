# AWS.StepFunctions @ default

## Resource AWS.StepFunctions/Activity@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.StepFunctions/ActivityProperties](#awsstepfunctionsactivityproperties) (Required): properties of the resource

## Resource AWS.StepFunctions/StateMachine@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.StepFunctions/StateMachineProperties](#awsstepfunctionsstatemachineproperties) (Required): properties of the resource

## AWS.StepFunctions/ActivityProperties
### Properties
* **Arn**: string (ReadOnly)
* **Name**: string (Required)
* **Tags**: [TagsEntry](#tagsentry)[]

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.StepFunctions/StateMachineProperties
### Properties
* **Arn**: string (ReadOnly)
* **Definition**: [Definition](#definition) (WriteOnly)
* **DefinitionS3Location**: [S3Location](#s3location) (WriteOnly)
* **DefinitionString**: string
* **DefinitionSubstitutions**: [DefinitionSubstitutions](#definitionsubstitutions) (WriteOnly)
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **Name**: string (ReadOnly)
* **RoleArn**: string (Required)
* **StateMachineName**: string
* **StateMachineType**: string
* **Tags**: [TagsEntry](#tagsentry)[]
* **TracingConfiguration**: [TracingConfiguration](#tracingconfiguration)

## Definition
### Properties

## S3Location
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)
* **Version**: string

## DefinitionSubstitutions
### Properties

## LoggingConfiguration
### Properties
* **Destinations**: [LogDestination](#logdestination)[]
* **IncludeExecutionData**: bool
* **Level**: string

## LogDestination
### Properties
* **CloudWatchLogsLogGroup**: [CloudWatchLogsLogGroup](#cloudwatchlogsloggroup)

## CloudWatchLogsLogGroup
### Properties
* **LogGroupArn**: string

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TracingConfiguration
### Properties
* **Enabled**: bool

