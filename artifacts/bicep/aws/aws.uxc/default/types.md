# AWS.UXC @ default

## Resource AWS.UXC/AccountCustomization@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.UXC/AccountCustomizationProperties](#awsuxcaccountcustomizationproperties) (Identifier): properties of the resource

## AWS.UXC/AccountCustomizationProperties
### Properties
* **AccountColor**: string: The color theme assigned to the account for visual identification in the AWS Console.
* **AccountId**: string (ReadOnly, Identifier): The AWS account ID that this customization belongs to. This is automatically determined from the caller's identity.
* **VisibleRegions**: string[]: A list of AWS region identifiers visible to the account in the AWS Console.
* **VisibleServices**: string[]: A list of AWS service identifiers visible to the account in the AWS Console.

