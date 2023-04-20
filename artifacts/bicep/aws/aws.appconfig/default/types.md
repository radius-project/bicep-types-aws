# AWS.AppConfig @ default

## Resource AWS.AppConfig/Extension@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ExtensionProperties](#awsappconfigextensionproperties) (Required): properties of the resource

## Resource AWS.AppConfig/ExtensionAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ExtensionAssociationProperties](#awsappconfigextensionassociationproperties): properties of the resource

## AWS.AppConfig/ExtensionProperties
### Properties
* **Actions**: [Extension_Actions](#extensionactions) (Required)
* **Arn**: string (ReadOnly)
* **Description**: string: Description of the extension.
* **Id**: string (ReadOnly, Identifier)
* **LatestVersionNumber**: int (WriteOnly)
* **Name**: string (Required): Name of the extension.
* **Parameters**: [Extension_Parameters](#extensionparameters)
* **Tags**: [Tag](#tag)[] (WriteOnly): An array of key-value tags to apply to this resource.
* **VersionNumber**: int (ReadOnly)

## Extension_Actions
### Properties

## Extension_Parameters
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.AppConfig/ExtensionAssociationProperties
### Properties
* **Arn**: string (ReadOnly)
* **ExtensionArn**: string (ReadOnly)
* **ExtensionIdentifier**: string (WriteOnly)
* **ExtensionVersionNumber**: int
* **Id**: string (ReadOnly, Identifier)
* **Parameters**: [ExtensionAssociation_Parameters](#extensionassociationparameters)
* **ResourceArn**: string (ReadOnly)
* **ResourceIdentifier**: string (WriteOnly)
* **Tags**: [Tag](#tag)[] (WriteOnly): An array of key-value pairs to apply to this resource.

## ExtensionAssociation_Parameters
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

