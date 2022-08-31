# AWS.StepFunctions @ default

## Resource AWS.StepFunctions/Activity@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.StepFunctions/ActivityProperties](#awsstepfunctionsactivityproperties): properties of the resource

## Resource AWS.StepFunctions/StateMachine@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.StepFunctions/StateMachineProperties](#awsstepfunctionsstatemachineproperties): properties of the resource

## AWS.StepFunctions/ActivityProperties
### Properties
* **Arn**: string (ReadOnly)
* **Name**: string
* **Tags**: [TagsEntry](#tagsentry)[]

## TagsEntry
### Properties
* **Key**: string
* **Value**: string

## AWS.StepFunctions/StateMachineProperties
### Properties
* **Arn**: string (ReadOnly)
* **Definition**: [Definition](#definition) (WriteOnly)
* **DefinitionS3Location**: [S3Location](#s3location) (WriteOnly)
* **DefinitionString**: string
* **DefinitionSubstitutions**: [DefinitionSubstitutions](#definitionsubstitutions) (WriteOnly)
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **Name**: string (ReadOnly)
* **RoleArn**: string
* **StateMachineName**: string
* **StateMachineType**: string
* **Tags**: [TagsEntry](#tagsentry)[]
* **TracingConfiguration**: [TracingConfiguration](#tracingconfiguration)

## Definition
### Properties

## S3Location
### Properties
* **Bucket**: string
* **Key**: string
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
* **Key**: string
* **Value**: string

## TracingConfiguration
### Properties
* **Enabled**: bool

