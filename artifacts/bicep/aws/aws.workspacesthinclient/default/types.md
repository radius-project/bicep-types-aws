# AWS.WorkSpacesThinClient @ default

## Resource AWS.WorkSpacesThinClient/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesThinClient/EnvironmentProperties](#awsworkspacesthinclientenvironmentproperties) (Required): properties of the resource

## AWS.WorkSpacesThinClient/EnvironmentProperties
### Properties
* **ActivationCode**: string (ReadOnly): Activation code for devices associated with environment.
* **Arn**: string (ReadOnly): The environment ARN.
* **CreatedAt**: string (ReadOnly): The timestamp in unix epoch format when environment was created.
* **DesiredSoftwareSetId**: string: The ID of the software set to apply.
* **DesktopArn**: string (Required): The Amazon Resource Name (ARN) of the desktop to stream from Amazon WorkSpaces, WorkSpaces Web, or AppStream 2.0.
* **DesktopEndpoint**: string: The URL for the identity provider login (only for environments that use AppStream 2.0).
* **DesktopType**: string (ReadOnly): The type of VDI.
* **Id**: string (ReadOnly, Identifier): Unique identifier of the environment.
* **KmsKeyArn**: string: The Amazon Resource Name (ARN) of the AWS Key Management Service key used to encrypt the environment.
* **MaintenanceWindow**: [MaintenanceWindow](#maintenancewindow): A specification for a time window to apply software updates.
* **Name**: string: The name of the environment.
* **PendingSoftwareSetId**: string (ReadOnly): The ID of the software set that is pending to be installed.
* **PendingSoftwareSetVersion**: string (ReadOnly): The version of the software set that is pending to be installed.
* **RegisteredDevicesCount**: int (ReadOnly): Number of devices registered to the environment.
* **SoftwareSetComplianceStatus**: string (ReadOnly): Describes if the software currently installed on all devices in the environment is a supported version.
* **SoftwareSetUpdateMode**: string: An option to define which software updates to apply.
* **SoftwareSetUpdateSchedule**: string: An option to define if software updates should be applied within a maintenance window.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdatedAt**: string (ReadOnly): The timestamp in unix epoch format when environment was last updated.

## MaintenanceWindow
### Properties
* **ApplyTimeOf**: string: The desired time zone maintenance window.
* **DaysOfTheWeek**: string[]: The date of maintenance window.
* **EndTimeHour**: int: The hour end time of maintenance window.
* **EndTimeMinute**: int: The minute end time of maintenance window.
* **StartTimeHour**: int: The hour start time of maintenance window.
* **StartTimeMinute**: int: The minute start time of maintenance window.
* **Type**: string (Required): The type of maintenance window.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

