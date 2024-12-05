# AWS.Rbin @ default

## Resource AWS.Rbin/Rule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Rbin/RuleProperties](#awsrbinruleproperties) (Required, Identifier): properties of the resource

## AWS.Rbin/RuleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Rule Arn is unique for each rule.
* **Description**: string: The description of the retention rule.
* **ExcludeResourceTags**: [ResourceTag](#resourcetag)[]: Information about the exclude resource tags used to identify resources that are excluded by the retention rule.
* **Identifier**: string (ReadOnly): The unique ID of the retention rule.
* **LockConfiguration**: [UnlockDelay](#unlockdelay) (WriteOnly): Information about the retention rule lock configuration.
* **LockState**: string (ReadOnly): The lock state for the retention rule.
* **ResourceTags**: [ResourceTag](#resourcetag)[]: Information about the resource tags used to identify resources that are retained by the retention rule.
* **ResourceType**: string (Required): The resource type retained by the retention rule.
* **RetentionPeriod**: [RetentionPeriod](#retentionperiod) (Required): Information about the retention period for which the retention rule is to retain resources.
* **Status**: string: The state of the retention rule. Only retention rules that are in the available state retain resources.
* **Tags**: [Tag](#tag)[]: Information about the tags assigned to the retention rule.

## ResourceTag
### Properties
* **ResourceTagKey**: string (Required): The tag key of the resource.
* **ResourceTagValue**: string (Required): The tag value of the resource

## RetentionPeriod
### Properties
* **RetentionPeriodUnit**: string (Required): The retention period unit of the rule
* **RetentionPeriodValue**: int (Required): The retention period value of the rule.

## Tag
### Properties
* **Key**: string (Required): A unique identifier for the tag.
* **Value**: string (Required): String which you can use to describe or define the tag.

## UnlockDelay
### Properties
* **UnlockDelayUnit**: string (WriteOnly): The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.
* **UnlockDelayValue**: int (WriteOnly): The unlock delay period, measured in the unit specified for UnlockDelayUnit.

