# AWS.Deadline @ default

## Resource AWS.Deadline/Farm@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/FarmProperties](#awsdeadlinefarmproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Fleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/FleetProperties](#awsdeadlinefleetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Queue@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/QueueProperties](#awsdeadlinequeueproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/QueueEnvironment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/QueueEnvironmentProperties](#awsdeadlinequeueenvironmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/StorageProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/StorageProfileProperties](#awsdeadlinestorageprofileproperties) (Required, Identifier): properties of the resource

## AWS.Deadline/FarmProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **DisplayName**: string (Required)
* **FarmId**: string (ReadOnly)
* **KmsKeyArn**: string

## AWS.Deadline/FleetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Capabilities**: [FleetCapabilities](#fleetcapabilities) (ReadOnly)
* **Configuration**: [FleetConfiguration](#fleetconfiguration) (Required)
* **Description**: string
* **DisplayName**: string (Required)
* **FarmId**: string
* **FleetId**: string (ReadOnly)
* **MaxWorkerCount**: int (Required)
* **MinWorkerCount**: int
* **RoleArn**: string (Required)
* **Status**: string (ReadOnly)
* **WorkerCount**: int (ReadOnly)

## AWS.Deadline/QueueEnvironmentProperties
### Properties
* **FarmId**: string (Required, Identifier)
* **Name**: string (ReadOnly)
* **Priority**: int (Required)
* **QueueEnvironmentId**: string (ReadOnly, Identifier)
* **QueueId**: string (Required, Identifier)
* **Template**: string (Required)
* **TemplateType**: string (Required)

## AWS.Deadline/QueueProperties
### Properties
* **AllowedStorageProfileIds**: string[]
* **Arn**: string (ReadOnly, Identifier)
* **DefaultBudgetAction**: string
* **Description**: string
* **DisplayName**: string (Required)
* **FarmId**: string
* **JobAttachmentSettings**: [JobAttachmentSettings](#jobattachmentsettings)
* **JobRunAsUser**: [JobRunAsUser](#jobrunasuser)
* **QueueId**: string (ReadOnly)
* **RequiredFileSystemLocationNames**: string[]
* **RoleArn**: string

## AWS.Deadline/StorageProfileProperties
### Properties
* **DisplayName**: string (Required)
* **FarmId**: string (Identifier)
* **FileSystemLocations**: [FileSystemLocation](#filesystemlocation)[]
* **OsFamily**: string (Required)
* **StorageProfileId**: string (ReadOnly, Identifier)

## FileSystemLocation
### Properties
* **Name**: string (Required)
* **Path**: string (Required)
* **Type**: string (Required)

## FleetAmountCapability
### Properties
* **Max**: int
* **Min**: int (Required)
* **Name**: string (Required)

## FleetAttributeCapability
### Properties
* **Name**: string (Required)
* **Values**: string[] (Required)

## FleetCapabilities
### Properties
* **Amounts**: [FleetAmountCapability](#fleetamountcapability)[]
* **Attributes**: [FleetAttributeCapability](#fleetattributecapability)[]

## FleetConfiguration
### Properties

## JobAttachmentSettings
### Properties
* **RootPrefix**: string (Required)
* **S3BucketName**: string (Required)

## JobRunAsUser
### Properties
* **Posix**: [PosixUser](#posixuser)
* **RunAs**: string (Required)
* **Windows**: [WindowsUser](#windowsuser)

## PosixUser
### Properties
* **Group**: string (Required)
* **User**: string (Required)

## WindowsUser
### Properties
* **PasswordArn**: string (Required)
* **User**: string (Required)

