# AWS.ComputeOptimizer @ default

## Resource AWS.ComputeOptimizer/AutomationRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ComputeOptimizer/AutomationRuleProperties](#awscomputeoptimizerautomationruleproperties) (Required, Identifier): properties of the resource

## AWS.ComputeOptimizer/AutomationRuleProperties
### Properties
* **AccountId**: string (ReadOnly): The AWS account ID that owns the automation rule.
* **CreatedTimestamp**: string (ReadOnly): The timestamp when the automation rule was created.
* **Criteria**: [Criteria](#criteria): Filter criteria that specify which recommended actions qualify for implementation.
* **Description**: string: The description of the automation rule.
* **LastUpdatedTimestamp**: string (ReadOnly): The timestamp when the automation rule was last updated.
* **Name**: string (Required): The name of the automation rule.
* **OrganizationConfiguration**: [OrganizationConfiguration](#organizationconfiguration): Organization configuration for organization rules, including rule apply order and account scope.
* **Priority**: string: Rule priority within its group
* **RecommendedActionTypes**: string[] (Required): The types of recommended actions this rule will implement.
* **RuleArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the automation rule.
* **RuleId**: string (ReadOnly): The unique identifier of the automation rule.
* **RuleRevision**: string (ReadOnly): The revision number of the automation rule.
* **RuleType**: string (Required): The type of automation rule.
* **Schedule**: [Schedule](#schedule) (Required): The schedule configuration for when the rule runs.
* **Status**: string (Required): The status of the automation rule.
* **Tags**: [Tag](#tag)[]: Tags associated with the automation rule.

## Criteria
### Properties
* **EbsVolumeSizeInGib**: [IntegerCriteriaCondition](#integercriteriacondition)[]
* **EbsVolumeType**: [StringCriteriaCondition](#stringcriteriacondition)[]
* **EstimatedMonthlySavings**: [DoubleCriteriaCondition](#doublecriteriacondition)[]
* **LookBackPeriodInDays**: [IntegerCriteriaCondition](#integercriteriacondition)[]
* **Region**: [StringCriteriaCondition](#stringcriteriacondition)[]
* **ResourceArn**: [StringCriteriaCondition](#stringcriteriacondition)[]
* **ResourceTag**: [ResourceTagsCriteriaCondition](#resourcetagscriteriacondition)[]
* **RestartNeeded**: [StringCriteriaCondition](#stringcriteriacondition)[]

## DoubleCriteriaCondition
### Properties
* **Comparison**: string
* **Values**: int[]

## IntegerCriteriaCondition
### Properties
* **Comparison**: string
* **Values**: int[]

## OrganizationConfiguration
### Properties
* **AccountIds**: string[]: List of account IDs where the organization rule applies
* **RuleApplyOrder**: string: When the rule should be applied relative to account rules

## ResourceTagsCriteriaCondition
### Properties
* **Comparison**: string
* **Key**: string
* **Values**: string[]

## Schedule
### Properties
* **ExecutionWindowInMinutes**: int: Execution window duration in minutes
* **ScheduleExpression**: string: Schedule expression (e.g., cron or rate expression)
* **ScheduleExpressionTimezone**: string: IANA timezone identifier

## StringCriteriaCondition
### Properties
* **Comparison**: string
* **Values**: string[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

