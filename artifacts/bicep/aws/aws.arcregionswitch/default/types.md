# AWS.ARCRegionSwitch @ default

## Resource AWS.ARCRegionSwitch/Plan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ARCRegionSwitch/PlanProperties](#awsarcregionswitchplanproperties) (Required, Identifier): properties of the resource

## AssociatedAlarmMap
### Properties

## AWS.ARCRegionSwitch/PlanProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **AssociatedAlarms**: [AssociatedAlarmMap](#associatedalarmmap)
* **Description**: string
* **ExecutionRole**: string (Required)
* **HealthChecksForPlan**: [Plan_HealthChecksForPlan](#planhealthchecksforplan) (ReadOnly)
* **Name**: string (Required)
* **Owner**: string (ReadOnly)
* **PlanHealthChecks**: string[] (ReadOnly)
* **PrimaryRegion**: string
* **RecoveryApproach**: string (Required)
* **RecoveryTimeObjectiveMinutes**: int
* **Regions**: string[] (Required)
* **ReportConfiguration**: [ReportConfiguration](#reportconfiguration)
* **Route53HealthChecks**: [Plan_Route53HealthChecks](#planroute53healthchecks) (ReadOnly)
* **ServiceQuotaChecksEnabled**: bool
* **Tags**: [Tags](#tags)
* **Triggers**: [Trigger](#trigger)[]
* **Version**: string (ReadOnly)
* **Workflows**: [Workflow](#workflow)[] (Required)

## ExecutionBlockConfiguration
### Properties

## Plan_HealthChecksForPlan
### Properties

## Plan_ReportOutputConfiguration
### Properties

## Plan_Route53HealthChecks
### Properties
* **HealthCheckIds**: string[]
* **HostedZoneIds**: string[]
* **RecordNames**: string[]
* **Regions**: string[]

## ReportConfiguration
### Properties
* **ReportOutput**: [Plan_ReportOutputConfiguration](#planreportoutputconfiguration)[]

## Step
### Properties
* **Description**: string
* **ExecutionBlockConfiguration**: [ExecutionBlockConfiguration](#executionblockconfiguration) (Required)
* **ExecutionBlockType**: string (Required)
* **Name**: string (Required)

## Tags
### Properties

## Trigger
### Properties
* **Action**: string (Required)
* **Conditions**: [TriggerCondition](#triggercondition)[] (Required)
* **Description**: string
* **MinDelayMinutesBetweenExecutions**: int (Required)
* **TargetRegion**: string (Required)

## TriggerCondition
### Properties
* **AssociatedAlarmName**: string (Required)
* **Condition**: string (Required)

## Workflow
### Properties
* **Steps**: [Step](#step)[]
* **WorkflowDescription**: string
* **WorkflowTargetAction**: string (Required)
* **WorkflowTargetRegion**: string

