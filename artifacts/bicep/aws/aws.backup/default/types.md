# AWS.Backup @ default

## Resource AWS.Backup/BackupPlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Backup/BackupPlanProperties](#awsbackupbackupplanproperties) (Required): properties of the resource

## Resource AWS.Backup/BackupVault@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Backup/BackupVaultProperties](#awsbackupbackupvaultproperties) (Required): properties of the resource

## Resource AWS.Backup/Framework@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Backup/FrameworkProperties](#awsbackupframeworkproperties) (Required): properties of the resource

## Resource AWS.Backup/ReportPlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Backup/ReportPlanProperties](#awsbackupreportplanproperties) (Required): properties of the resource

## AWS.Backup/BackupPlanProperties
### Properties
* **BackupPlan**: [BackupPlanResourceType](#backupplanresourcetype) (Required)
* **BackupPlanArn**: string (ReadOnly)
* **BackupPlanId**: string (ReadOnly)
* **BackupPlanTags**: [BackupPlan_BackupPlanTags](#backupplanbackupplantags)
* **VersionId**: string (ReadOnly)

## BackupPlanResourceType
### Properties
* **AdvancedBackupSettings**: [AdvancedBackupSettingResourceType](#advancedbackupsettingresourcetype)[]
* **BackupPlanName**: string (Required)
* **BackupPlanRule**: [BackupRuleResourceType](#backupruleresourcetype)[] (Required)

## AdvancedBackupSettingResourceType
### Properties
* **BackupOptions**: [BackupPlan_BackupOptions](#backupplanbackupoptions) (Required)
* **ResourceType**: string (Required)

## BackupPlan_BackupOptions
### Properties

## BackupRuleResourceType
### Properties
* **CompletionWindowMinutes**: int
* **CopyActions**: [CopyActionResourceType](#copyactionresourcetype)[]
* **EnableContinuousBackup**: bool
* **Lifecycle**: [LifecycleResourceType](#lifecycleresourcetype)
* **RecoveryPointTags**: [BackupPlan_RecoveryPointTags](#backupplanrecoverypointtags)
* **RuleName**: string (Required)
* **ScheduleExpression**: string
* **StartWindowMinutes**: int
* **TargetBackupVault**: string (Required)

## CopyActionResourceType
### Properties
* **DestinationBackupVaultArn**: string (Required)
* **Lifecycle**: [LifecycleResourceType](#lifecycleresourcetype)

## LifecycleResourceType
### Properties
* **DeleteAfterDays**: int
* **MoveToColdStorageAfterDays**: int

## BackupPlan_RecoveryPointTags
### Properties

## BackupPlan_BackupPlanTags
### Properties

## AWS.Backup/BackupVaultProperties
### Properties
* **AccessPolicy**: [BackupVault_AccessPolicy](#backupvaultaccesspolicy) | string
* **BackupVaultArn**: string (ReadOnly)
* **BackupVaultName**: [BackupVaultNamePattern](#backupvaultnamepattern) (Required)
* **BackupVaultTags**: [BackupVault_BackupVaultTags](#backupvaultbackupvaulttags)
* **EncryptionKeyArn**: string
* **LockConfiguration**: [LockConfigurationType](#lockconfigurationtype)
* **Notifications**: [NotificationObjectType](#notificationobjecttype)

## BackupVaultNamePattern
### Properties

## BackupVault_BackupVaultTags
### Properties

## LockConfigurationType
### Properties
* **ChangeableForDays**: int
* **MaxRetentionDays**: int
* **MinRetentionDays**: int (Required)

## NotificationObjectType
### Properties
* **BackupVaultEvents**: string[] (Required)
* **SNSTopicArn**: string (Required)

## AWS.Backup/FrameworkProperties
### Properties
* **CreationTime**: int (ReadOnly): The date and time that a framework is created, in Unix format and Coordinated Universal Time (UTC). The value of `CreationTime` is accurate to milliseconds. For example, the value 1516925490.087 represents Friday, January 26, 2018 12:11:30.087 AM.
* **DeploymentStatus**: string (ReadOnly): The deployment status of a framework. The statuses are: `CREATE_IN_PROGRESS | UPDATE_IN_PROGRESS | DELETE_IN_PROGRESS | COMPLETED | FAILED`
* **FrameworkArn**: string (ReadOnly): An Amazon Resource Name (ARN) that uniquely identifies Framework as a resource
* **FrameworkControls**: [FrameworkControl](#frameworkcontrol)[] (Required): Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
* **FrameworkDescription**: string: An optional description of the framework with a maximum 1,024 characters.
* **FrameworkName**: string: The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
* **FrameworkStatus**: string (ReadOnly): A framework consists of one or more controls. Each control governs a resource, such as backup plans, backup selections, backup vaults, or recovery points. You can also turn AWS Config recording on or off for each resource. The statuses are:

`ACTIVE` when recording is turned on for all resources governed by the framework.

`PARTIALLY_ACTIVE` when recording is turned off for at least one resource governed by the framework.

`INACTIVE` when recording is turned off for all resources governed by the framework.

`UNAVAILABLE` when AWS Backup is unable to validate recording status at this time.
* **FrameworkTags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.

## FrameworkControl
### Properties
* **ControlInputParameters**: [ControlInputParameter](#controlinputparameter)[]: A list of ParameterName and ParameterValue pairs.
* **ControlName**: string (Required): The name of a control. This name is between 1 and 256 characters.
* **ControlScope**: [Framework_ControlScope](#frameworkcontrolscope): The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.

## ControlInputParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## Framework_ControlScope
### Properties
* **ComplianceResourceIds**: string[]: The ID of the only AWS resource that you want your control scope to contain.
* **ComplianceResourceTypes**: string[]: Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
* **Tags**: [Tag](#tag)[]: Describes whether the control scope includes resources with one or more tags. Each tag is a key-value pair.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Backup/ReportPlanProperties
### Properties
* **ReportDeliveryChannel**: [ReportPlan_ReportDeliveryChannel](#reportplanreportdeliverychannel) (Required): A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports.
* **ReportPlanArn**: string (ReadOnly): An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type.
* **ReportPlanDescription**: string: An optional description of the report plan with a maximum of 1,024 characters.
* **ReportPlanName**: string: The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_).
* **ReportPlanTags**: [Tag](#tag)[]: Metadata that you can assign to help organize the report plans that you create. Each tag is a key-value pair.
* **ReportSetting**: [ReportPlan_ReportSetting](#reportplanreportsetting) (Required): Identifies the report template for the report. Reports are built using a report template.

## ReportPlan_ReportDeliveryChannel
### Properties
* **Formats**: string[]: A list of the format of your reports: CSV, JSON, or both. If not specified, the default format is CSV.
* **S3BucketName**: string (Required): The unique name of the S3 bucket that receives your reports.
* **S3KeyPrefix**: string: The prefix for where AWS Backup Audit Manager delivers your reports to Amazon S3. The prefix is this part of the following path: s3://your-bucket-name/prefix/Backup/us-west-2/year/month/day/report-name. If not specified, there is no prefix.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## ReportPlan_ReportSetting
### Properties
* **FrameworkArns**: string[]: The Amazon Resource Names (ARNs) of the frameworks a report covers.
* **ReportTemplate**: string (Required): Identifies the report template for the report. Reports are built using a report template. The report templates are: `BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT`

