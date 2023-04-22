# AWS.RAM @ default

## Resource AWS.RAM/Permission@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RAM/PermissionProperties](#awsrampermissionproperties) (Required): properties of the resource

## AWS.RAM/PermissionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **IsResourceTypeDefault**: bool (ReadOnly): Set to true to use this as the default permission.
* **Name**: string (Required): The name of the permission.
* **PermissionType**: string (ReadOnly)
* **PolicyTemplate**: [Permission_PolicyTemplate](#permissionpolicytemplate) (Required): Policy template for the permission.
* **ResourceType**: string (Required): The resource type this permission can be used with.
* **Tags**: [Tag](#tag)[]
* **Version**: string (ReadOnly): Version of the permission.

## Permission_PolicyTemplate
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

