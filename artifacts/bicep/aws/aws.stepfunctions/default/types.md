# AWS.StepFunctions @ default

## Resource AWS.StepFunctions/Activity@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/ActivityProperties](#awsstepfunctionsactivityproperties) (Required, Identifier): properties of the resource

## Resource AWS.StepFunctions/MapRun@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/MapRunProperties](#awsstepfunctionsmaprunproperties) (Identifier): properties of the resource

## Resource AWS.StepFunctions/StateMachine@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/StateMachineProperties](#awsstepfunctionsstatemachineproperties) (Required, Identifier): properties of the resource

## Resource AWS.StepFunctions/StateMachineAlias@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/StateMachineAliasProperties](#awsstepfunctionsstatemachinealiasproperties) (Identifier): properties of the resource

## Resource AWS.StepFunctions/StateMachineVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StepFunctions/StateMachineVersionProperties](#awsstepfunctionsstatemachineversionproperties) (Required, Identifier): properties of the resource

## AWS.StepFunctions/ActivityProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **Name**: string (Required)
* **Tags**: [TagsEntry](#tagsentry)[]

## AWS.StepFunctions/MapRunProperties
### Properties
* **ExecutionArn**: string: The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started.
* **ExecutionCounts**: [MapRunExecutionCounts](#maprunexecutioncounts) (ReadOnly)
* **ItemCounts**: [MapRunItemCounts](#maprunitemcounts) (ReadOnly)
* **MapRunArn**: string (Identifier): The Amazon Resource Name (ARN) that identifies the Map Run.
* **MaxConcurrency**: int (ReadOnly): The maximum number of child workflow executions configured to run in parallel for the Map Run at the same time.
* **StartDate**: string (ReadOnly): The date when the Map Run was started.
* **Status**: string (ReadOnly): The current status of the Map Run.
* **StopDate**: string (ReadOnly): The date when the Map Run was stopped.
* **ToleratedFailureCount**: int (ReadOnly): The maximum number of failed child workflow executions before the Map Run fails.
* **ToleratedFailurePercentage**: int (ReadOnly): The maximum percentage of failed child workflow executions before the Map Run fails.

## AWS.StepFunctions/StateMachineAliasProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the alias.
* **DeploymentPreference**: [DeploymentPreference](#deploymentpreference) (WriteOnly)
* **Description**: string: An optional description of the alias.
* **Name**: string: The alias name.
* **RoutingConfiguration**: [RoutingConfigurationVersion](#routingconfigurationversion)[]
* **StateMachineArn**: string

## AWS.StepFunctions/StateMachineProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Definition**: [Definition](#definition) (WriteOnly)
* **DefinitionS3Location**: [S3Location](#s3location) (WriteOnly)
* **DefinitionString**: string
* **DefinitionSubstitutions**: [DefinitionSubstitutions](#definitionsubstitutions) (WriteOnly)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **Name**: string (ReadOnly)
* **RoleArn**: string (Required)
* **StateMachineName**: string
* **StateMachineRevisionId**: string (ReadOnly)
* **StateMachineType**: string
* **Tags**: [TagsEntry](#tagsentry)[]
* **TracingConfiguration**: [TracingConfiguration](#tracingconfiguration)

## AWS.StepFunctions/StateMachineVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **StateMachineArn**: string (Required)
* **StateMachineRevisionId**: string

## CloudWatchLogsLogGroup
### Properties
* **LogGroupArn**: string

## Definition
### Properties
### Additional Properties
* **Additional Properties Type**: any

## DefinitionSubstitutions
### Properties
### Additional Properties
* **Additional Properties Type**: bool | int | string

## DeploymentPreference
### Properties
* **Alarms**: string[]: A list of CloudWatch alarm names that will be monitored during the deployment. The deployment will fail and rollback if any alarms go into ALARM state.
* **Interval**: int: The time in minutes between each traffic shifting increment.
* **Percentage**: int: The percentage of traffic to shift to the new version in each increment.
* **StateMachineVersionArn**: string (Required)
* **Type**: string (Required): The type of deployment to perform.

## EncryptionConfiguration
### Properties
* **KmsDataKeyReusePeriodSeconds**: int
* **KmsKeyId**: string
* **Type**: string (Required)

## EncryptionConfiguration
### Properties
* **KmsDataKeyReusePeriodSeconds**: int
* **KmsKeyId**: string
* **Type**: string (Required)

## LogDestination
### Properties
* **CloudWatchLogsLogGroup**: [CloudWatchLogsLogGroup](#cloudwatchlogsloggroup)

## LoggingConfiguration
### Properties
* **Destinations**: [LogDestination](#logdestination)[]
* **IncludeExecutionData**: bool
* **Level**: string

## MapRunExecutionCounts
### Properties
* **Aborted**: int: The total number of child workflow executions that were stopped.
* **Failed**: int: The total number of child workflow executions that have failed.
* **FailuresNotRedrivable**: int: The number of child workflow executions that cannot be redriven.
* **Pending**: int: The total number of child workflow executions that haven't started executing yet.
* **PendingRedrive**: int: The number of unsuccessful child workflow executions waiting to be redriven.
* **ResultsWritten**: int: The count of child workflow executions whose results were written by ResultWriter.
* **Running**: int: The total number of child workflow executions that are currently in-progress.
* **Succeeded**: int: The total number of child workflow executions that have completed successfully.
* **TimedOut**: int: The total number of child workflow executions that have timed out.
* **Total**: int: The total number of child workflow executions started by a Map Run.

## MapRunItemCounts
### Properties
* **Aborted**: int: The total number of items processed in child workflow executions that were stopped.
* **Failed**: int: The total number of items processed in child workflow executions that have failed.
* **FailuresNotRedrivable**: int: The number of items in child workflow executions that cannot be redriven.
* **Pending**: int: The total number of items to process in child workflow executions that haven't started running yet.
* **PendingRedrive**: int: The number of unsuccessful items currently waiting to be redriven.
* **ResultsWritten**: int: The count of items whose results were written by ResultWriter.
* **Running**: int: The total number of items being processed in child workflow executions that are currently in-progress.
* **Succeeded**: int: The total number of items processed in child workflow executions that have completed successfully.
* **TimedOut**: int: The total number of items processed in child workflow executions that have timed out.
* **Total**: int: The total number of items processed in all the child workflow executions started by a Map Run.

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

