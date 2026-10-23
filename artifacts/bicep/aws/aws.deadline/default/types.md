# AWS.Deadline @ default

## Resource AWS.Deadline/Budget@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/BudgetProperties](#awsdeadlinebudgetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Farm@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/FarmProperties](#awsdeadlinefarmproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Fleet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/FleetProperties](#awsdeadlinefleetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/LicenseEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/LicenseEndpointProperties](#awsdeadlinelicenseendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Limit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/LimitProperties](#awsdeadlinelimitproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Monitor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/MonitorProperties](#awsdeadlinemonitorproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Queue@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/QueueProperties](#awsdeadlinequeueproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/QueueEnvironment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/QueueEnvironmentProperties](#awsdeadlinequeueenvironmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/StorageProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/StorageProfileProperties](#awsdeadlinestorageprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.Deadline/Worker@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Deadline/WorkerProperties](#awsdeadlineworkerproperties) (Required, Identifier): properties of the resource

## AWS.Deadline/BudgetProperties
### Properties
* **Actions**: [BudgetActionToAdd](#budgetactiontoadd)[] (Required): The budget actions to specify what happens when the budget runs out.
* **ApproximateDollarLimit**: int (Required): The dollar limit based on consumed usage.
* **Arn**: string (ReadOnly, Identifier): The ARN of the budget.
* **BudgetId**: string (ReadOnly): The budget ID.
* **Description**: string: The description of the budget.
* **DisplayName**: string (Required): The display name of the budget.
* **FarmId**: string (Required): The farm ID.
* **Schedule**: [BudgetSchedule](#budgetschedule) (Required)
* **Status**: string (ReadOnly): The status of the budget.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UsageTrackingResource**: [UsageTrackingResource](#usagetrackingresource) (Required)

## AWS.Deadline/FarmProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CostScaleFactor**: int
* **Description**: string
* **DisplayName**: string (Required)
* **FarmId**: string (ReadOnly)
* **KmsKeyArn**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Deadline/FleetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Capabilities**: [FleetCapabilities](#fleetcapabilities) (ReadOnly)
* **Configuration**: [FleetConfiguration](#fleetconfiguration) (Required)
* **Description**: string
* **DisplayName**: string (Required)
* **FarmId**: string (Required)
* **FleetId**: string (ReadOnly)
* **HostConfiguration**: [HostConfiguration](#hostconfiguration)
* **MaxWorkerCount**: int (Required)
* **MinWorkerCount**: int
* **RoleArn**: string (Required)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WorkerCount**: int (ReadOnly)

## AWS.Deadline/LicenseEndpointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DnsName**: string (ReadOnly)
* **LicenseEndpointId**: string (ReadOnly)
* **SecurityGroupIds**: string[] (Required)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **SubnetIds**: string[] (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **VpcId**: string (Required)

## AWS.Deadline/LimitProperties
### Properties
* **AmountRequirementName**: string (Required)
* **CurrentCount**: int (ReadOnly)
* **Description**: string
* **DisplayName**: string (Required)
* **FarmId**: string (Required, Identifier)
* **LimitId**: string (ReadOnly, Identifier)
* **MaxCount**: int (Required)

## AWS.Deadline/MonitorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DisplayName**: string (Required)
* **IdentityCenterApplicationArn**: string (ReadOnly)
* **IdentityCenterInstanceArn**: string (Required)
* **IdentityCenterRegion**: string: The AWS region where IAM Identity Center is enabled. Required when Identity Center is in a different region than the monitor.
* **MonitorId**: string (ReadOnly)
* **RoleArn**: string (Required)
* **Subdomain**: string (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Url**: string (ReadOnly)

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
* **FarmId**: string (Required)
* **JobAttachmentSettings**: [JobAttachmentSettings](#jobattachmentsettings)
* **JobRunAsUser**: [JobRunAsUser](#jobrunasuser)
* **QueueId**: string (ReadOnly)
* **RequiredFileSystemLocationNames**: string[]
* **RoleArn**: string
* **SchedulingConfiguration**: [SchedulingConfiguration](#schedulingconfiguration)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Deadline/StorageProfileProperties
### Properties
* **DisplayName**: string (Required)
* **FarmId**: string (Required, Identifier)
* **FileSystemLocations**: [FileSystemLocation](#filesystemlocation)[]
* **OsFamily**: string (Required)
* **StorageProfileId**: string (ReadOnly, Identifier)

## AWS.Deadline/WorkerProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the worker.
* **CreatedAt**: string (ReadOnly): The date and time the resource was created.
* **CreatedBy**: string (ReadOnly): The user or system that created this resource.
* **FarmId**: string (Required): The farm ID.
* **FleetId**: string (Required): The fleet ID.
* **HostProperties**: [HostPropertiesRequest](#hostpropertiesrequest): The IP address and host name of the worker.
* **Status**: string (ReadOnly): The status of the worker.
* **Tags**: [Worker_Tags](#workertags)[]: An array of key-value pairs to apply to this resource.
* **WorkerId**: string (ReadOnly): The worker ID.

## BudgetActionToAdd
### Properties
* **Description**: string: A description for the budget action.
* **ThresholdPercentage**: int (Required): The percentage threshold for the budget action.
* **Type**: string (Required): The type of budget action.

## BudgetSchedule
### Properties
* **Fixed**: [FixedBudgetSchedule](#fixedbudgetschedule) (Required)

## FileSystemLocation
### Properties
* **Name**: string (Required)
* **Path**: string (Required)
* **Type**: string (Required)

## FixedBudgetSchedule
### Properties
* **EndTime**: string (Required): When the budget ends.
* **StartTime**: string (Required): When the budget starts.

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

## HostConfiguration
### Properties
* **ScriptBody**: string (Required)
* **ScriptTimeoutSeconds**: int

## HostPropertiesRequest
### Properties
* **HostName**: string: The host name.
* **IpAddresses**: [IpAddresses](#ipaddresses)

## IpAddresses
### Properties
* **IpV4Addresses**: string[]: The IpV4 address of the network.
* **IpV6Addresses**: string[]: The IpV6 address for the network and node component.

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

## SchedulingConfiguration
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## UsageTrackingResource
### Properties
* **QueueId**: string (Required): The queue ID.

## WindowsUser
### Properties
* **PasswordArn**: string (Required)
* **User**: string (Required)

## Worker_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

