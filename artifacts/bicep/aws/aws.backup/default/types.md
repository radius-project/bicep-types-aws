# AWS.Backup @ default

## Resource AWS.Backup/BackupAccessPoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/BackupAccessPointProperties](#awsbackupbackupaccesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/BackupPlan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/BackupPlanProperties](#awsbackupbackupplanproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/BackupSelection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/BackupSelectionProperties](#awsbackupbackupselectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/BackupVault@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/BackupVaultProperties](#awsbackupbackupvaultproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/Framework@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/FrameworkProperties](#awsbackupframeworkproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/LegalHold@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/LegalHoldProperties](#awsbackuplegalholdproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/LogicallyAirGappedBackupVault@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/LogicallyAirGappedBackupVaultProperties](#awsbackuplogicallyairgappedbackupvaultproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/ManagedRecoveryPoint@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/ManagedRecoveryPointProperties](#awsbackupmanagedrecoverypointproperties) (Identifier): properties of the resource

## Resource AWS.Backup/RecoveryPoint@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/RecoveryPointProperties](#awsbackuprecoverypointproperties) (Identifier): properties of the resource

## Resource AWS.Backup/ReportPlan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/ReportPlanProperties](#awsbackupreportplanproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/RestoreTestingPlan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/RestoreTestingPlanProperties](#awsbackuprestoretestingplanproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/RestoreTestingSelection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/RestoreTestingSelectionProperties](#awsbackuprestoretestingselectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Backup/TieringConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Backup/TieringConfigurationProperties](#awsbackuptieringconfigurationproperties) (Required, Identifier): properties of the resource

## AccessPointMetadata
### Properties
* **AccessPointInTime**: string (ReadOnly): For a continuous recovery point, the point in time the backup access point exposes, echoed back by the service as supplied at create time. Absent for snapshot recovery points. A plain string rather than a date-time, because it is one entry of the service's string-to-string metadata map.
* **S3AccessPointAlias**: string (ReadOnly): The alias of the Amazon S3 access point that Backup provisioned. Use this with standard Amazon S3 read APIs to access the backup data. Populated once the backup access point reaches the AVAILABLE status.
* **S3AccessPointArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon S3 access point that Backup provisioned. Use this with standard Amazon S3 read APIs to access the backup data. Populated once the backup access point reaches the AVAILABLE status.

## AdvancedBackupSettingResourceType
### Properties
* **BackupOptions**: [BackupPlan_BackupOptions](#backupplanbackupoptions) (Required)
* **ResourceType**: string (Required)

## AWS.Backup/BackupAccessPointProperties
### Properties
* **AccessPointInTime**: string (WriteOnly): For continuous (point-in-time) recovery points, the timestamp in ISO 8601 format (for example 2021-11-27T03:30:27Z) that determines the point-in-time view of the backup data. The timestamp must be within the continuous backup's retention period at the time the access point is created. Do not specify this for snapshot recovery points. The service reports it back under AccessPointMetadata.
* **AccessPointMetadata**: [AccessPointMetadata](#accesspointmetadata) (ReadOnly)
* **AccessPointPolicy**: [BackupAccessPoint_AccessPointPolicy](#backupaccesspointaccesspointpolicy) (WriteOnly): An optional resource-based policy document, in JSON, to apply to the underlying Amazon S3 access point. The policy controls how backup data can be accessed through the access point. If you do not specify a policy, access is governed by the caller's IAM permissions. The serialized policy may not exceed 200000 characters. This value is not returned by the service and cannot be updated in place.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) that uniquely identifies the backup access point.
* **BackupVaultArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the backup vault that contains the recovery point.
* **BackupVaultName**: string (ReadOnly): The name of the backup vault that contains the recovery point.
* **CreationTime**: string (ReadOnly): The date and time that the backup access point was created.
* **Name**: string: The name of the backup access point. This name is shared with the Amazon S3 access point namespace. It must be unique within your account and Region and cannot conflict with an existing Amazon S3 access point. If omitted, a name is generated.
* **RecoveryPointArn**: string (Required): The Amazon Resource Name (ARN) of the recovery point for which to create the backup access point. The recovery point must be an Amazon S3 recovery point in the AVAILABLE, STOPPED, or COMPLETED state.
* **ResourceArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resource that was backed up, such as an Amazon S3 bucket.
* **ResourceType**: string (ReadOnly): The type of Amazon Web Services resource associated with the recovery point. For example, S3 for Amazon Simple Storage Service.
* **Status**: string (ReadOnly): The current status of the backup access point.
* **Tags**: [Tag](#tag)[]: The tags to assign to the backup access point.

## AWS.Backup/BackupPlanProperties
### Properties
* **BackupPlan**: [BackupPlanResourceType](#backupplanresourcetype) (Required)
* **BackupPlanArn**: string (ReadOnly)
* **BackupPlanId**: string (ReadOnly, Identifier)
* **BackupPlanTags**: [BackupPlan_BackupPlanTags](#backupplanbackupplantags)
* **VersionId**: string (ReadOnly)

## AWS.Backup/BackupSelectionProperties
### Properties
* **BackupPlanId**: string (Required)
* **BackupSelection**: [BackupSelectionResourceType](#backupselectionresourcetype) (Required)
* **Id**: string (ReadOnly, Identifier)
* **SelectionId**: string (ReadOnly)

## AWS.Backup/BackupVaultProperties
### Properties
* **AccessPolicy**: [BackupVault_AccessPolicy](#backupvaultaccesspolicy) | string
* **BackupVaultArn**: string (ReadOnly)
* **BackupVaultName**: string (Required, Identifier)
* **BackupVaultTags**: [BackupVault_BackupVaultTags](#backupvaultbackupvaulttags)
* **EncryptionKeyArn**: string
* **LockConfiguration**: [LockConfigurationType](#lockconfigurationtype)
* **Notifications**: [NotificationObjectType](#notificationobjecttype)

## AWS.Backup/FrameworkProperties
### Properties
* **CreationTime**: string (ReadOnly): The date and time that a framework is created, in ISO 8601 representation. The value of CreationTime is accurate to milliseconds. For example, 2020-07-10T15:00:00.000-08:00 represents the 10th of July 2020 at 3:00 PM 8 hours behind UTC.
* **DeploymentStatus**: string (ReadOnly): The deployment status of a framework. The statuses are: `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`
* **FrameworkArn**: string (ReadOnly, Identifier): An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource
* **FrameworkControls**: [FrameworkControl](#frameworkcontrol)[] (Required): Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
* **FrameworkDescription**: string: An optional description of the framework with a maximum 1,024 characters.
* **FrameworkName**: string: The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
* **FrameworkStatus**: string (ReadOnly): A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. The statuses are:

`ACTIVE` when recording is turned on for all resources governed by the framework.

`PARTIALLY_ACTIVE` when recording is turned off for at least one resource governed by the framework.

`INACTIVE` when recording is turned off for all resources governed by the framework.

`UNAVAILABLE` when AWS Backup is unable to validate recording status at this time.
* **FrameworkTags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

## AWS.Backup/LegalHoldProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the legal hold.
* **CreationDate**: string (ReadOnly): The time when the legal hold was created.
* **Description**: string (Required): The description of the legal hold.
* **LegalHoldId**: string (ReadOnly): The ID of the legal hold.
* **RecoveryPointSelection**: [LegalHold_RecoveryPointSelection](#legalholdrecoverypointselection) (Required): The criteria to assign a set of resources, such as resource types or backup vaults.
* **Status**: string (ReadOnly): The status of the legal hold.
* **Tags**: [LegalHold_Tags](#legalholdtags)[]: Optional tags to include.
* **Title**: string (Required): The title of the legal hold.

## AWS.Backup/LogicallyAirGappedBackupVaultProperties
### Properties
* **AccessPolicy**: [LogicallyAirGappedBackupVault_AccessPolicy](#logicallyairgappedbackupvaultaccesspolicy) | string
* **BackupVaultArn**: string (ReadOnly)
* **BackupVaultName**: string (Required, Identifier)
* **BackupVaultTags**: [LogicallyAirGappedBackupVault_BackupVaultTags](#logicallyairgappedbackupvaultbackupvaulttags)
* **EncryptionKeyArn**: string
* **MaxRetentionDays**: int (Required)
* **MinRetentionDays**: int (Required)
* **MpaApprovalTeamArn**: string
* **Notifications**: [NotificationObjectType](#notificationobjecttype)
* **VaultState**: string (ReadOnly)
* **VaultType**: string (ReadOnly)

## AWS.Backup/ManagedRecoveryPointProperties
### Properties
* **BackupSizeInBytes**: int (ReadOnly): The size of the backup in bytes.
* **BackupVaultArn**: string (ReadOnly): The ARN of the backup vault that contains the recovery point.
* **BackupVaultName**: string (Identifier): The name of the backup vault that contains the recovery point.
* **CalculatedLifecycle**: [CalculatedLifecycle](#calculatedlifecycle) (ReadOnly)
* **CompletionDate**: string (ReadOnly): The date and time that the recovery point was completed.
* **CompositeMemberIdentifier**: string (ReadOnly): The composite member identifier for the recovery point.
* **CreationDate**: string (ReadOnly): The date and time that a recovery point is created.
* **EncryptionKeyArn**: string (ReadOnly): The encryption key used to protect the recovery point.
* **EncryptionKeyType**: string (ReadOnly): The type of encryption key used for the recovery point.
* **IamRoleArn**: string (ReadOnly): The IAM role ARN used to create the target recovery point.
* **InitiationDate**: string (ReadOnly): The date and time that a backup job or copy job was initiated.
* **IsEncrypted**: bool (ReadOnly): Whether the recovery point is encrypted.
* **IsParent**: bool (ReadOnly): Whether the recovery point is a parent recovery point.
* **LastRestoreTime**: string (ReadOnly): The date and time that a recovery point was last restored.
* **Lifecycle**: [Lifecycle](#lifecycle) (ReadOnly)
* **ParentRecoveryPointArn**: string (ReadOnly): The ARN of the parent recovery point.
* **RecoveryPointArn**: string (Identifier): The ARN of the recovery point.
* **ResourceArn**: string (ReadOnly): The ARN of the resource that was backed up.
* **ResourceName**: string (ReadOnly): The name of the resource that was backed up.
* **ResourceType**: string (ReadOnly): The type of AWS resource that was backed up.
* **SourceBackupVaultArn**: string (ReadOnly): The ARN of the source backup vault for copied recovery points.
* **Status**: string (ReadOnly): The status of the recovery point.
* **StorageClass**: string (ReadOnly): The storage class of the recovery point.
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of key-value pairs applied to the recovery point.
* **VaultType**: string (ReadOnly): The type of vault in which the recovery point resides.

## AWS.Backup/RecoveryPointProperties
### Properties
* **BackupSizeInBytes**: int (ReadOnly): The size of the backup in bytes.
* **BackupVaultArn**: string (ReadOnly): The ARN of the backup vault that contains the recovery point.
* **BackupVaultName**: string (Identifier): The name of the backup vault that contains the recovery point.
* **CalculatedLifecycle**: [RecoveryPoint_CalculatedLifecycle](#recoverypointcalculatedlifecycle) (ReadOnly): The calculated lifecycle properties of the recovery point.
* **CompletionDate**: string (ReadOnly): The date and time that the recovery point was completed.
* **CompositeMemberIdentifier**: string (ReadOnly): The composite member identifier for the recovery point.
* **CreationDate**: string (ReadOnly): The date and time that a recovery point is created.
* **EncryptionKeyArn**: string (ReadOnly): The encryption key used to protect the recovery point.
* **IamRoleArn**: string (ReadOnly): The IAM role ARN used to create the recovery point.
* **InitiationDate**: string (ReadOnly): The date and time that a backup job or copy job was initiated.
* **IsEncrypted**: bool (ReadOnly): Whether the recovery point is encrypted.
* **IsParent**: bool (ReadOnly): Whether the recovery point is a parent recovery point.
* **LastRestoreTime**: string (ReadOnly): The date and time that a recovery point was last restored.
* **Lifecycle**: [RecoveryPoint_Lifecycle](#recoverypointlifecycle) (ReadOnly): The lifecycle defines when a protected resource is transitioned to cold storage and when it expires.
* **ParentRecoveryPointArn**: string (ReadOnly): The ARN of the parent recovery point.
* **RecoveryPointArn**: string (Identifier): The ARN of the recovery point.
* **ResourceArn**: string (ReadOnly): The ARN of the resource that was backed up.
* **ResourceName**: string (ReadOnly): The name of the resource that was backed up.
* **ResourceType**: string (ReadOnly): The type of AWS resource that was backed up.
* **SourceBackupVaultArn**: string (ReadOnly): The ARN of the source backup vault for copied recovery points.
* **Status**: string (ReadOnly): The status of the recovery point.
* **StorageClass**: string (ReadOnly): The storage class of the recovery point.
* **VaultType**: string (ReadOnly): The type of vault in which the recovery point resides.

## AWS.Backup/ReportPlanProperties
### Properties
* **ReportDeliveryChannel**: [ReportPlan_ReportDeliveryChannel](#reportplanreportdeliverychannel) (Required): A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
* **ReportPlanArn**: string (ReadOnly, Identifier): An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
* **ReportPlanDescription**: string: An optional description of the report plan with a maximum of 1,024 characters.
* **ReportPlanName**: string: The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
* **ReportPlanTags**: [Tag](#tag)[]: Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
* **ReportSetting**: [ReportPlan_ReportSetting](#reportplanreportsetting) (Required): Identifies the report template for the report. Reports are built using a report template.

## AWS.Backup/RestoreTestingPlanProperties
### Properties
* **RecoveryPointSelection**: [RestoreTestingRecoveryPointSelection](#restoretestingrecoverypointselection) (Required)
* **RestoreTestingPlanArn**: string (ReadOnly)
* **RestoreTestingPlanName**: string (Required, Identifier)
* **ScheduleExpression**: string (Required)
* **ScheduleExpressionTimezone**: string
* **StartWindowHours**: int
* **Tags**: [Tag](#tag)[]

## AWS.Backup/RestoreTestingSelectionProperties
### Properties
* **IamRoleArn**: string (Required)
* **ProtectedResourceArns**: string[]
* **ProtectedResourceConditions**: [ProtectedResourceConditions](#protectedresourceconditions)
* **ProtectedResourceType**: string (Required)
* **RestoreMetadataOverrides**: [SensitiveStringMap](#sensitivestringmap)
* **RestoreTestingPlanName**: string (Required, Identifier)
* **RestoreTestingSelectionName**: string (Required, Identifier)
* **ValidationWindowHours**: int

## AWS.Backup/TieringConfigurationProperties
### Properties
* **BackupVaultName**: string (Required)
* **CreationTime**: string (ReadOnly)
* **LastUpdatedTime**: string (ReadOnly)
* **ResourceSelection**: [ResourceSelection](#resourceselection)[] (Required)
* **TieringConfigurationArn**: string (ReadOnly)
* **TieringConfigurationName**: string (Required, Identifier)
* **TieringConfigurationTags**: [TieringConfiguration_TieringConfigurationTags](#tieringconfigurationtieringconfigurationtags)

## BackupAccessPoint_AccessPointPolicy
### Properties
### Additional Properties
* **Additional Properties Type**: any

## BackupPlan_BackupOptions
### Properties
### Additional Properties
* **Additional Properties Type**: any

## BackupPlan_BackupPlanTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupPlan_RecoveryPointTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## BackupPlanResourceType
### Properties
* **AdvancedBackupSettings**: [AdvancedBackupSettingResourceType](#advancedbackupsettingresourcetype)[]
* **BackupPlanName**: string (Required)
* **BackupPlanRule**: [BackupRuleResourceType](#backupruleresourcetype)[] (Required)
* **ScanSettings**: [ScanSettingResourceType](#scansettingresourcetype)[]

## BackupRuleResourceType
### Properties
* **CompletionWindowMinutes**: int
* **CopyActions**: [CopyActionResourceType](#copyactionresourcetype)[]
* **EnableContinuousBackup**: bool
* **IndexActions**: [IndexActionsResourceType](#indexactionsresourcetype)[]
* **Lifecycle**: [LifecycleResourceType](#lifecycleresourcetype)
* **RecoveryPointTags**: [BackupPlan_RecoveryPointTags](#backupplanrecoverypointtags)
* **RuleName**: string (Required)
* **ScanActions**: [ScanActionResourceType](#scanactionresourcetype)[]
* **ScheduleExpression**: string
* **ScheduleExpressionTimezone**: string
* **StartWindowMinutes**: int
* **TargetBackupVault**: string (Required)
* **TargetLogicallyAirGappedBackupVaultArn**: string

## BackupSelection_Conditions
### Properties
* **StringEquals**: [ConditionParameter](#conditionparameter)[]
* **StringLike**: [ConditionParameter](#conditionparameter)[]
* **StringNotEquals**: [ConditionParameter](#conditionparameter)[]
* **StringNotLike**: [ConditionParameter](#conditionparameter)[]

## BackupSelectionResourceType
### Properties
* **Conditions**: [BackupSelection_Conditions](#backupselectionconditions)
* **IamRoleArn**: string (Required)
* **ListOfTags**: [ConditionResourceType](#conditionresourcetype)[]
* **NotResources**: string[]
* **Resources**: string[]
* **SelectionName**: string (Required)

## BackupVault_BackupVaultTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CalculatedLifecycle
### Properties
* **DeleteAt**: string: The date and time when the recovery point will be deleted.
* **MoveToColdStorageAt**: string: The date and time when the recovery point will be moved to cold storage.

## ConditionParameter
### Properties
* **ConditionKey**: string
* **ConditionValue**: string

## ConditionResourceType
### Properties
* **ConditionKey**: string (Required)
* **ConditionType**: string (Required)
* **ConditionValue**: string (Required)

## ControlInputParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## CopyActionResourceType
### Properties
* **DestinationBackupVaultArn**: string (Required)
* **Lifecycle**: [LifecycleResourceType](#lifecycleresourcetype)

## Framework_ControlScope
### Properties
* **ComplianceResourceIds**: string[]: The ID of the only AWS resource that you want your control scope to contain.
* **ComplianceResourceTypes**: string[]: Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
* **Tags**: [Tag](#tag)[]: Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.

## FrameworkControl
### Properties
* **ControlInputParameters**: [ControlInputParameter](#controlinputparameter)[]: A list of ParameterName and ParameterValue pairs.
* **ControlName**: string (Required): The name of a control. This name is between 1 and 256 characters.
* **ControlScope**: [Framework_ControlScope](#frameworkcontrolscope): The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.

## IndexActionsResourceType
### Properties
* **ResourceTypes**: string[]

## KeyValue
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## LegalHold_RecoveryPointSelection
### Properties
* **DateRange**: [LegalHold_RecoveryPointSelection_DateRange](#legalholdrecoverypointselectiondaterange): A date range for filtering recovery points.
* **ResourceIdentifiers**: string[]: The resources included in the resource selection.
* **VaultNames**: string[]: The names of the vaults in which the selected recovery points are contained.

## LegalHold_RecoveryPointSelection_DateRange
### Properties
* **FromDate**: string (Required): The beginning date, inclusive. ISO 8601 date-time.
* **ToDate**: string (Required): The end date, inclusive. ISO 8601 date-time.

## LegalHold_Tags
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Lifecycle
### Properties
* **DeleteAfterDays**: int: The number of days after creation that a recovery point is deleted.
* **DeleteAfterEvent**: string: The event that triggers the deletion of the recovery point.
* **MoveToColdStorageAfterDays**: int: The number of days after creation that a recovery point is moved to cold storage.
* **OptInToArchiveForSupportedResources**: bool: Whether to opt in to archive for supported resources.

## LifecycleResourceType
### Properties
* **DeleteAfterDays**: int
* **MoveToColdStorageAfterDays**: int
* **OptInToArchiveForSupportedResources**: bool

## LockConfigurationType
### Properties
* **ChangeableForDays**: int (WriteOnly)
* **MaxRetentionDays**: int
* **MinRetentionDays**: int (Required)

## LogicallyAirGappedBackupVault_BackupVaultTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## NotificationObjectType
### Properties
* **BackupVaultEvents**: string[] (Required)
* **SNSTopicArn**: string (Required)

## NotificationObjectType
### Properties
* **BackupVaultEvents**: string[] (Required)
* **SNSTopicArn**: string (Required)

## ProtectedResourceConditions
### Properties
* **StringEquals**: [KeyValue](#keyvalue)[]
* **StringNotEquals**: [KeyValue](#keyvalue)[]

## RecoveryPoint_CalculatedLifecycle
### Properties
* **DeleteAt**: string: The date and time when the recovery point will be deleted.
* **MoveToColdStorageAt**: string: The date and time when the recovery point will be moved to cold storage.

## RecoveryPoint_Lifecycle
### Properties
* **DeleteAfterDays**: int: The number of days after creation that a recovery point is deleted.
* **DeleteAfterEvent**: string: The event that triggers the deletion of the recovery point.
* **MoveToColdStorageAfterDays**: int: The number of days after creation that a recovery point is moved to cold storage.
* **OptInToArchiveForSupportedResources**: bool: Whether to opt in to archive for supported resources.

## ReportPlan_ReportDeliveryChannel
### Properties
* **Formats**: string[]: A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV.
* **S3BucketName**: string (Required): The unique name of the S3 bucket that receives your reports.
* **S3KeyPrefix**: string: The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.

## ReportPlan_ReportSetting
### Properties
* **Accounts**: string[]: The list of AWS accounts that a report covers.
* **FrameworkArns**: string[]: The Amazon Resource Names (ARNs) of the frameworks a report covers.
* **OrganizationUnits**: string[]: The list of AWS organization units that a report covers.
* **Regions**: string[]: The list of AWS regions that a report covers.
* **ReportTemplate**: string (Required): Identifies the report template for the report. Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`

## ResourceSelection
### Properties
* **Resources**: string[] (Required)
* **ResourceType**: string (Required)
* **TieringDownSettingsInDays**: int (Required)

## RestoreTestingRecoveryPointSelection
### Properties
* **Algorithm**: string (Required)
* **ExcludeVaults**: string[]
* **IncludeVaults**: string[] (Required)
* **RecoveryPointTypes**: string[] (Required)
* **SelectionWindowDays**: int

## ScanActionResourceType
### Properties
* **MalwareScanner**: string
* **ScanMode**: string

## ScanSettingResourceType
### Properties
* **MalwareScanner**: string
* **ResourceTypes**: string[]
* **ScannerRoleArn**: string

## SensitiveStringMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TieringConfiguration_TieringConfigurationTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

