# AWS.ThinClient @ default

## Resource AWS.ThinClient/SoftwareSet@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ThinClient/SoftwareSetProperties](#awsthinclientsoftwaresetproperties) (Identifier): properties of the resource

## AWS.ThinClient/SoftwareSetProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the software set.
* **Id**: string (ReadOnly): The ID of the software set.
* **ReleasedAt**: string (ReadOnly): The timestamp of when the software set was released.
* **Software**: [Software](#software)[] (ReadOnly): A list of the software components in the software set.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **ValidationStatus**: string (ReadOnly): An option to define if the software set has been validated.
* **Version**: string (ReadOnly): The version of the software set.

## Software
### Properties
* **Name**: string: The name of the software component.
* **Version**: string: The version of the software component.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

