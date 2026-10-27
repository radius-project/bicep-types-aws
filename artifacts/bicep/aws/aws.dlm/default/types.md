# AWS.DLM @ default

## Resource AWS.DLM/LifecyclePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DLM/LifecyclePolicyProperties](#awsdlmlifecyclepolicyproperties) (Identifier): properties of the resource

## Action
### Properties
* **CrossRegionCopy**: [CrossRegionCopyAction](#crossregioncopyaction)[] (Required): The rule for copying shared snapshots across Regions.
* **Name**: string (Required): A descriptive name for the action.

## ArchiveRetainRule
### Properties
* **RetentionArchiveTier**: [RetentionArchiveTier](#retentionarchivetier) (Required)

## ArchiveRule
### Properties
* **RetainRule**: [ArchiveRetainRule](#archiveretainrule) (Required)

## AWS.DLM/LifecyclePolicyProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the lifecycle policy.
* **CopyTags**: bool: **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is false.
* **CreateInterval**: int: **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days.
* **CrossRegionCopyTargets**: [CrossRegionCopyTarget](#crossregioncopytarget)[]
* **DefaultPolicy**: string: **[Default policies only]** Specify the type of default policy to create.
* **Description**: string: A description of the lifecycle policy. The characters ^[0-9A-Za-z _-]+$ are supported.
* **Exclusions**: [Exclusions](#exclusions)
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the IAM role used to run the operations specified by the lifecycle policy.
* **ExtendDeletion**: bool: **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.
* **PolicyDetails**: [PolicyDetails](#policydetails)
* **PolicyId**: string (ReadOnly, Identifier): The identifier of the lifecycle policy.
* **RetainInterval**: int: **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time.
* **State**: string: The activation state of the lifecycle policy.
* **Tags**: [Tag](#tag)[]: The tags to apply to the lifecycle policy during creation.

## CreateRule
### Properties
* **CronExpression**: string: The schedule, as a Cron expression. The schedule interval must be between 1 hour and 1 year.
* **Interval**: int: The interval between snapshots. The supported values are 1, 2, 3, 4, 6, 8, 12, and 24.
* **IntervalUnit**: string: The interval unit.
* **Location**: string: **[Custom snapshot policies only]** Specifies the destination for snapshots created by the policy. The allowed destinations depend on the location of the targeted resources.

- If the policy targets resources in a Region, then you must create snapshots in the same Region as the source resource.
- If the policy targets resources in a Local Zone, you can create snapshots in the same Local Zone or in its parent Region.
- If the policy targets resources on an Outpost, then you can create snapshots on the same Outpost or in its parent Region.

Default: `CLOUD`
* **Scripts**: [Script](#script)[]: **[Custom snapshot policies that target instances only]** Specifies pre and/or post scripts for a snapshot lifecycle policy that targets instances. This is useful for creating application-consistent snapshots, or for performing specific administrative tasks before or after Amazon Data Lifecycle Manager initiates snapshot creation.
* **Times**: string[]: The time, in UTC, to start the operation. The supported format is hh:mm.

The operation occurs within a one-hour window following the specified time. If you do not specify a time, Amazon Data Lifecycle Manager selects a time within the next 24 hours.

## CrossRegionCopyAction
### Properties
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration) (Required)
* **RetainRule**: [CrossRegionCopyRetainRule](#crossregioncopyretainrule)
* **Target**: string (Required): The target Region.

## CrossRegionCopyDeprecateRule
### Properties
* **Interval**: int (Required): The period after which to deprecate the cross-Region AMI copies. The period must be less than or equal to the cross-Region AMI copy retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
* **IntervalUnit**: string (Required): The unit of time in which to measure the **Interval**. For example, to deprecate a cross-Region AMI copy after 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.

## CrossRegionCopyRetainRule
### Properties
* **Interval**: int (Required): The amount of time to retain a cross-Region snapshot or AMI copy. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
* **IntervalUnit**: string (Required): The unit of time for time-based retention. For example, to retain a cross-Region copy for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`.

## CrossRegionCopyRule
### Properties
* **CmkArn**: string: The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
* **CopyTags**: bool: Indicates whether to copy all user-defined tags from the source snapshot or AMI to the cross-Region copy.
* **DeprecateRule**: [CrossRegionCopyDeprecateRule](#crossregioncopydeprecaterule)
* **Encrypted**: bool (Required): To encrypt a copy of an unencrypted snapshot if encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is `false` or if encryption by default is not enabled.
* **RetainRule**: [CrossRegionCopyRetainRule](#crossregioncopyretainrule)
* **Target**: string: **[Custom snapshot policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the snapshot copies.
* **TargetRegion**: string: **[Custom AMI policies only]** The target Region or the Amazon Resource Name (ARN) of the target Outpost for the AMI copies.

## CrossRegionCopyTarget
### Properties
* **TargetRegion**: string: The target Region, for example `us-east-1`.

## DeprecateRule
### Properties
* **Count**: int: If the schedule has a count-based retention rule, this parameter specifies the number of oldest AMIs to deprecate. The count must be less than or equal to the schedule's retention count, and it can't be greater than 1000.
* **Interval**: int: If the schedule has an age-based retention rule, this parameter specifies the period after which to deprecate AMIs created by the schedule. The period must be less than or equal to the schedule's retention period, and it can't be greater than 10 years. This is equivalent to 120 months, 520 weeks, or 3650 days.
* **IntervalUnit**: string: The unit of time in which to measure the **Interval**.

## EncryptionConfiguration
### Properties
* **CmkArn**: string: The Amazon Resource Name (ARN) of the AWS KMS key to use for EBS encryption. If this parameter is not specified, the default KMS key for the account is used.
* **Encrypted**: bool (Required): To encrypt a copy of an unencrypted snapshot when encryption by default is not enabled, enable encryption using this parameter. Copies of encrypted snapshots are encrypted, even if this parameter is `false` or when encryption by default is not enabled.

## EventParameters
### Properties
* **DescriptionRegex**: string: The snapshot description that can trigger the policy. The description pattern is specified using a regular expression. The policy runs only if a snapshot with a description that matches the specified pattern is shared with your account.
* **EventType**: string (Required): The type of event. Currently, only snapshot sharing events are supported.
* **SnapshotOwner**: string[] (Required): The IDs of the AWS accounts that can trigger policy by sharing snapshots with your account. The policy only runs if one of the specified AWS accounts shares a snapshot with your account.

## EventSource
### Properties
* **Parameters**: [EventParameters](#eventparameters)
* **Type**: string (Required): The source of the event. Currently only managed Amazon EventBridge events are supported.

## Exclusions
### Properties
* **ExcludeBootVolumes**: bool: **[Default policies for EBS snapshots only]** Indicates whether to exclude volumes that are attached to instances as the boot volume. If you exclude boot volumes, only volumes attached as data (non-boot) volumes will be backed up by the policy. To exclude boot volumes, specify `true`.
* **ExcludeTags**: [Tag](#tag)[]: **[Default policies for EBS-backed AMIs only]** Specifies whether to exclude volumes that have specific tags.
* **ExcludeVolumeTypes**: string[]

## FastRestoreRule
### Properties
* **AvailabilityZoneIds**: string[]: The Availability Zone IDs in which to enable fast snapshot restore.
* **AvailabilityZones**: string[]: The Availability Zones in which to enable fast snapshot restore.
* **Count**: int: The number of snapshots to be enabled with fast snapshot restore.
* **Interval**: int: The amount of time to enable fast snapshot restore. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
* **IntervalUnit**: string: The unit of time for enabling fast snapshot restore.

## Parameters
### Properties
* **ExcludeBootVolume**: bool: **[Custom snapshot policies that target instances only]** Indicates whether to exclude the root volume from multi-volume snapshot sets. The default is `false`. If you specify `true`, then the root volumes attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
* **ExcludeDataVolumeTags**: [Tag](#tag)[]: **[Custom snapshot policies that target instances only]** The tags used to identify data (non-root) volumes to exclude from multi-volume snapshot sets. If you create a snapshot lifecycle policy that targets instances and you specify tags for this parameter, then data volumes with the specified tags that are attached to targeted instances will be excluded from the multi-volume snapshot sets created by the policy.
* **NoReboot**: bool: **[Custom AMI policies only]** Indicates whether targeted instances are rebooted when the lifecycle policy runs. `true` indicates that targeted instances are not rebooted when the policy runs. `false` indicates that target instances are rebooted when the policy runs.

The default is `true` (instances are not rebooted).

## PolicyDetails
### Properties
* **Actions**: [Action](#action)[]: **[Event-based policies only]** The actions to be performed when the event-based policy is activated. You can specify only one action per policy.
* **CopyTags**: bool: **[Default policies only]** Indicates whether the policy should copy tags from the source resource to the snapshot or AMI. If you do not specify a value, the default is `false`.

Default: `false`
* **CreateInterval**: int: **[Default policies only]** Specifies how often the policy should run and create snapshots or AMIs. The creation frequency can range from 1 to 7 days. If you do not specify a value, the default is 1.

Default: 1
* **CrossRegionCopyTargets**: [CrossRegionCopyTarget](#crossregioncopytarget)[]
* **EventSource**: [EventSource](#eventsource)
* **Exclusions**: [Exclusions](#exclusions)
* **ExtendDeletion**: bool: **[Default policies only]** Defines the snapshot or AMI retention behavior for the policy if the source volume or instance is deleted, or if the policy enters the error, disabled, or deleted state.

Default: `false`
* **Parameters**: [Parameters](#parameters)
* **PolicyLanguage**: string: The type of policy to create. Specify one of the following:

- `SIMPLIFIED` -- To create a default policy.
- `STANDARD` -- To create a custom policy.
* **PolicyType**: string: The type of policy. Specify `EBS_SNAPSHOT_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of Amazon EBS snapshots. Specify `IMAGE_MANAGEMENT` to create a lifecycle policy that manages the lifecycle of EBS-backed AMIs. Specify `EVENT_BASED_POLICY` to create an event-based policy that performs specific actions when a defined event occurs in your AWS account.

The default is `EBS_SNAPSHOT_MANAGEMENT`.
* **ResourceLocations**: string[]: **[Custom snapshot and AMI policies only]** The location of the resources to backup. If the source resources are located in a Region, specify `CLOUD`.
* **ResourceType**: string: **[Default policies only]** Specify the type of default policy to create.

- To create a default policy for EBS snapshots, that creates snapshots of all volumes in the Region that do not have recent backups, specify `VOLUME`.
- To create a default policy for EBS-backed AMIs, that creates EBS-backed AMIs from all instances in the Region that do not have recent backups, specify `INSTANCE`.
* **ResourceTypes**: string[]: **[Custom snapshot policies only]** The target resource type for snapshot and AMI lifecycle policies. Use `VOLUME` to create snapshots of individual volumes or use `INSTANCE` to create multi-volume snapshots from the volumes for an instance.
* **RetainInterval**: int: **[Default policies only]** Specifies how long the policy should retain snapshots or AMIs before deleting them. The retention period can range from 2 to 14 days, but it must be greater than the creation frequency to ensure that the policy retains at least 1 snapshot or AMI at any given time. If you do not specify a value, the default is 7.

Default: 7
* **Schedules**: [Schedule](#schedule)[]: **[Custom snapshot and AMI policies only]** The schedules of policy-defined actions for snapshot and AMI lifecycle policies. A policy can have up to four schedules -- one mandatory schedule and up to three optional schedules.
* **TargetTags**: [Tag](#tag)[]: **[Custom snapshot and AMI policies only]** The single tag that identifies targeted resources for this policy.

## RetainRule
### Properties
* **Count**: int: The number of snapshots to retain for each volume, up to a maximum of 1000. For example if you want to retain a maximum of three snapshots, specify `3`. When the fourth snapshot is created, the oldest retained snapshot is deleted, or it is moved to the archive tier if you have specified an `ArchiveRule`.
* **Interval**: int: The amount of time to retain each snapshot. The maximum is 100 years. This is equivalent to 1200 months, 5200 weeks, or 36500 days.
* **IntervalUnit**: string: The unit of time for time-based retention. For example, to retain snapshots for 3 months, specify `Interval=3` and `IntervalUnit=MONTHS`. Once the snapshot has been retained for 3 months, it is deleted, or it is moved to the archive tier if you have specified an `ArchiveRule`.

## RetentionArchiveTier
### Properties
* **Count**: int: The maximum number of snapshots to retain in the archive storage tier for each volume. The count must ensure that each snapshot remains in the archive tier for at least 90 days.
* **Interval**: int: Specifies the period of time to retain snapshots in the archive tier. After this period expires, the snapshot is permanently deleted.
* **IntervalUnit**: string: The unit of time in which to measure the **Interval**. For example, to retain snapshots in the archive tier for 6 months, specify `Interval=6` and `IntervalUnit=MONTHS`.

## Schedule
### Properties
* **ArchiveRule**: [ArchiveRule](#archiverule)
* **CopyTags**: bool: Copy all user-defined tags on a source volume to snapshots of the volume created by this policy.
* **CreateRule**: [CreateRule](#createrule)
* **CrossRegionCopyRules**: [CrossRegionCopyRule](#crossregioncopyrule)[]: Specifies a rule for copying snapshots or AMIs across Regions.
* **DeprecateRule**: [DeprecateRule](#deprecaterule)
* **FastRestoreRule**: [FastRestoreRule](#fastrestorerule)
* **Name**: string: The name of the schedule.
* **RetainRule**: [RetainRule](#retainrule)
* **ShareRules**: [ShareRule](#sharerule)[]: **[Custom snapshot policies only]** The rule for sharing snapshots with other AWS accounts.
* **TagsToAdd**: [Tag](#tag)[]: The tags to apply to policy-created resources. These user-defined tags are in addition to the AWS-added lifecycle tags.
* **VariableTags**: [Tag](#tag)[]: **[AMI policies and snapshot policies that target instances only]** A collection of key/value pairs with values determined dynamically when the policy is executed. Keys may be any valid Amazon EC2 tag key. Values must be in one of the two following formats: `$(instance-id)` or `$(timestamp)`. Variable tags are only valid for EBS Snapshot Management -- Instance policies.

## Script
### Properties
* **ExecuteOperationOnScriptFailure**: bool: Indicates whether Amazon Data Lifecycle Manager should default to crash-consistent snapshots if the pre script fails.

- To default to crash consistent snapshot if the pre script fails, specify `true`.
- To skip the instance for snapshot creation if the pre script fails, specify `false`.

This parameter is supported only if you run a pre script. If you run a post script only, omit this parameter.

Default: `true`
* **ExecutionHandler**: string: The SSM document that includes the pre and/or post scripts to run.

If you are automating VSS backups, specify `AWS_VSS_BACKUP`. In this case, Amazon Data Lifecycle Manager automatically uses the `AWSEC2-CreateVssSnapshot` SSM document.

If you are using a custom SSM document that you own, specify either the name or ARN of the SSM document. If you are using a custom SSM document that is shared with you, specify the ARN of the SSM document.
* **ExecutionHandlerService**: string: Indicates the service used to execute the pre and/or post scripts.

Default: `AWS_SYSTEMS_MANAGER`
* **ExecutionTimeout**: int: Specifies a timeout period, in seconds, after which Amazon Data Lifecycle Manager fails the script run attempt if it has not completed. If a script does not complete within its timeout period, Amazon Data Lifecycle Manager fails the attempt. The timeout period applies to the pre and post scripts individually.

Default: 10
* **MaximumRetryCount**: int: Specifies the number of times Amazon Data Lifecycle Manager should retry scripts that fail.

If the pre script fails, Amazon Data Lifecycle Manager retries the entire snapshot creation process, including running the pre and post scripts.

If the post script fails, Amazon Data Lifecycle Manager retries the post script only; in this case, the pre script will have completed and the snapshot might have been created.

If you do not want Amazon Data Lifecycle Manager to retry failed scripts, specify `0`.

Default: 0
* **Stages**: string[]: Indicate which scripts Amazon Data Lifecycle Manager should run on target instances. Pre scripts run before Amazon Data Lifecycle Manager initiates snapshot creation. Post scripts run after Amazon Data Lifecycle Manager initiates snapshot creation.

- To run a pre script only, specify `PRE`.
- To run a post script only, specify `POST`.
- To run both pre and post scripts, specify both `PRE` and `POST`.

Default: PRE and POST

## ShareRule
### Properties
* **TargetAccounts**: string[]: The IDs of the AWS accounts with which to share the snapshots.
* **UnshareInterval**: int: The period after which snapshots that are shared with other AWS accounts are automatically unshared.
* **UnshareIntervalUnit**: string: The unit of time for the automatic unsharing interval.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

