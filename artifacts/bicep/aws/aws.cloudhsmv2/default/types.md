# AWS.CloudHSMV2 @ default

## Resource AWS.CloudHSMV2/Backup@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudHSMV2/BackupProperties](#awscloudhsmv2backupproperties) (Identifier): properties of the resource

## AWS.CloudHSMV2/BackupProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the backup.
* **BackupId**: string (ReadOnly): The identifier (ID) of the backup.
* **BackupState**: string (ReadOnly): The state of the backup.
* **ClusterId**: string (ReadOnly): The identifier (ID) of the cluster that was backed up.
* **CreateTimestamp**: string (ReadOnly): The date and time when the backup was created.
* **NeverExpires**: bool (ReadOnly): Whether the backup is exempt from the cluster's backup retention policy.
* **Tags**: [Tag](#tag)[] (ReadOnly): The list of tags for the backup.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

