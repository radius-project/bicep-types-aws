# AWS.StepFunctions @ default

## Resource AWS.StepFunctions/Activity@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/ActivityProperties](#awsstepfunctionsactivityproperties) (Required, Identifier): properties of the resource

## Resource AWS.StepFunctions/StateMachine@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/StateMachineProperties](#awsstepfunctionsstatemachineproperties) (Required, Identifier): properties of the resource

## Resource AWS.StepFunctions/StateMachineAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/StateMachineAliasProperties](#awsstepfunctionsstatemachinealiasproperties) (Identifier): properties of the resource

## AWS.StepFunctions/ActivityProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Tags**: [TagsEntry](#tagsentry)[]

## AWS.StepFunctions/StateMachineAliasProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the alias.
* **DeploymentPreference**: [DeploymentPreference](#deploymentpreference) (WriteOnly)
* **Description**: string: An optional description of the alias.
* **Name**: string: The alias name.
* **RoutingConfiguration**: [RoutingConfigurationVersion](#routingconfigurationversion)[]

## AWS.StepFunctions/StateMachineProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Definition**: [Definition](#definition) (WriteOnly)
* **DefinitionS3Location**: [S3Location](#s3location) (WriteOnly)
* **DefinitionString**: string
* **DefinitionSubstitutions**: [DefinitionSubstitutions](#definitionsubstitutions) (WriteOnly)
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **Name**: string (ReadOnly)
* **RoleArn**: string (Required)
* **StateMachineName**: string
* **StateMachineRevisionId**: string (ReadOnly)
* **StateMachineType**: string
* **Tags**: [TagsEntry](#tagsentry)[]
* **TracingConfiguration**: [TracingConfiguration](#tracingconfiguration)

## CloudWatchLogsLogGroup
### Properties
* **LogGroupArn**: string

## Definition
### Properties

## DefinitionSubstitutions
### Properties

## DeploymentPreference
### Properties
* **Alarms**: string[]: A list of CloudWatch alarm names that will be monitored during the deployment. The deployment will fail and rollback if any alarms go into ALARM state.
* **Interval**: int: The time in minutes between each traffic shifting increment.
* **Percentage**: int: The percentage of traffic to shift to the new version in each increment.
* **StateMachineVersionArn**: string (Required)
* **Type**: string (Required): The type of deployment to perform.

## LogDestination
### Properties
* **CloudWatchLogsLogGroup**: [CloudWatchLogsLogGroup](#cloudwatchlogsloggroup)

## LoggingConfiguration
### Properties
* **Destinations**: [LogDestination](#logdestination)[]
* **IncludeExecutionData**: bool
* **Level**: string

## RoutingConfigurationVersion
### Properties
* **StateMachineVersionArn**: string (Required): The Amazon Resource Name (ARN) that identifies one or two state machine versions defined in the routing configuration.
* **Weight**: int (Required): The percentage of traffic you want to route to the state machine version. The sum of the weights in the routing configuration must be equal to 100.

## S3Location
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)
* **Version**: string

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TracingConfiguration
### Properties
* **Enabled**: bool

