# AWS.AccountAccess @ default

## Resource AWS.AccountAccess/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AccountAccess/ApplicationProperties](#awsaccountaccessapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.AccountAccess/Entitlement@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AccountAccess/EntitlementProperties](#awsaccountaccessentitlementproperties) (Required, Identifier): properties of the resource

## AWS.AccountAccess/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly, Identifier): The ARN of the application
* **CreatedAt**: string (ReadOnly): The timestamp when the application was created
* **IdentitySource**: [IdentitySource](#identitysource) (Required): The identity source for the application
* **Status**: string (ReadOnly): The status of the application
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TenantId**: string (ReadOnly): The tenant ID of the application
* **UpdatedAt**: string (ReadOnly): The timestamp when the application was last updated

## AWS.AccountAccess/EntitlementProperties
### Properties
* **ApplicationArn**: string (Required, Identifier): The ARN of the application
* **CreatedAt**: string (ReadOnly): The timestamp when the entitlement was created
* **Entitlement**: [Entitlement](#entitlement) (Required): The entitlement details
* **EntitlementId**: string (ReadOnly, Identifier): The ID of the entitlement

## Entitlement
### Properties
* **PrincipalRole**: [PrincipalRoleEntitlement](#principalroleentitlement) (Required)

## IdentityCenter
### Properties
* **ApplicationArn**: string (ReadOnly, Identifier): The ARN of the associated Identity Center application
* **InstanceArn**: string (Required): The ARN of the Identity Center instance

## IdentityCenterPrincipal
### Properties
* **GroupId**: string: The ID of the group
* **UserId**: string: The ID of the user

## IdentitySource
### Properties
* **IdentityCenter**: [IdentityCenter](#identitycenter) (Required)

## Principal
### Properties
* **IdentityCenter**: [IdentityCenterPrincipal](#identitycenterprincipal) (Required)

## PrincipalRoleEntitlement
### Properties
* **Account**: string (ReadOnly): The AWS account ID
* **Principal**: [Principal](#principal) (Required)
* **RoleArn**: string (Required): The ARN of the IAM role

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:.

