# AWS.RAM @ default

## Resource AWS.RAM/Permission@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RAM/PermissionProperties](#awsrampermissionproperties) (Required, Identifier): properties of the resource

## Resource AWS.RAM/ResourceShare@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RAM/ResourceShareProperties](#awsramresourceshareproperties) (Required, Identifier): properties of the resource

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

## AWS.RAM/ResourceShareProperties
### Properties
* **AllowExternalPrincipals**: bool: Specifies whether principals outside your organization in AWS Organizations can be associated with a resource share. A value of `true` lets you share with individual AWS accounts that are not in your organization. A value of `false` only has meaning if your account is a member of an AWS Organization. The default value is `true`.
* **Arn**: string (ReadOnly, Identifier)
* **Name**: string (Required): Specifies the name of the resource share.
* **PermissionArns**: string[] (WriteOnly): Specifies the [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the AWS RAM permission to associate with the resource share. If you do not specify an ARN for the permission, AWS RAM automatically attaches the default version of the permission for each resource type. You can associate only one permission with each resource type included in the resource share.
* **Principals**: string[] (WriteOnly): Specifies the principals to associate with the resource share. The possible values are:

- An AWS account ID

- An Amazon Resource Name (ARN) of an organization in AWS Organizations

- An ARN of an organizational unit (OU) in AWS Organizations

- An ARN of an IAM role

- An ARN of an IAM user
* **ResourceArns**: string[] (WriteOnly): Specifies a list of one or more ARNs of the resources to associate with the resource share.
* **Sources**: string[] (WriteOnly): Specifies from which source accounts the service principal has access to the resources in this resource share.
* **Tags**: [Tag](#tag)[]: Specifies one or more tags to attach to the resource share itself. It doesn't attach the tags to the resources associated with the resource share.

## Permission_PolicyTemplate
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

