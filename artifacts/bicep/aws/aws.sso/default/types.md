# AWS.SSO @ default

## Resource AWS.SSO/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/ApplicationProperties](#awsssoapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSO/Instance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/InstanceProperties](#awsssoinstanceproperties) (Identifier): properties of the resource

## Resource AWS.SSO/InstanceAccessControlAttributeConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/InstanceAccessControlAttributeConfigurationProperties](#awsssoinstanceaccesscontrolattributeconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSO/PermissionSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/PermissionSetProperties](#awsssopermissionsetproperties) (Required, Identifier): properties of the resource

## AccessControlAttribute
### Properties
* **Key**: string (Required)
* **Value**: [AccessControlAttributeValue](#accesscontrolattributevalue) (Required)

## AccessControlAttributeValue
### Properties
* **Source**: string[] (Required)

## AWS.SSO/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly, Identifier): The Application ARN that is returned upon creation of the Identity Center (SSO) Application
* **ApplicationProviderArn**: string (Required): The ARN of the application provider under which the operation will run
* **Description**: string: The description information for the Identity Center (SSO) Application
* **InstanceArn**: string (Required): The ARN of the instance of IAM Identity Center under which the operation will run
* **Name**: string (Required): The name you want to assign to this Identity Center (SSO) Application
* **PortalOptions**: [PortalOptionsConfiguration](#portaloptionsconfiguration): A structure that describes the options for the portal associated with an application
* **Status**: string: Specifies whether the application is enabled or disabled
* **Tags**: [Tag](#tag)[]

## AWS.SSO/InstanceAccessControlAttributeConfigurationProperties
### Properties
* **AccessControlAttributes**: [AccessControlAttribute](#accesscontrolattribute)[]
* **InstanceAccessControlAttributeConfiguration**: [InstanceAccessControlAttributeConfiguration_InstanceAccessControlAttributeConfiguration](#instanceaccesscontrolattributeconfigurationinstanceaccesscontrolattributeconfiguration): The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
* **InstanceArn**: string (Required, Identifier): The ARN of the AWS SSO instance under which the operation will be executed.

## AWS.SSO/InstanceProperties
### Properties
* **IdentityStoreId**: string (ReadOnly): The ID of the identity store associated with the created Identity Center (SSO) Instance
* **InstanceArn**: string (ReadOnly, Identifier): The SSO Instance ARN that is returned upon creation of the Identity Center (SSO) Instance
* **Name**: string: The name you want to assign to this Identity Center (SSO) Instance
* **OwnerAccountId**: string (ReadOnly): The AWS accountId of the owner of the Identity Center (SSO) Instance
* **Status**: string (ReadOnly): The status of the Identity Center (SSO) Instance, create_in_progress/delete_in_progress/active
* **Tags**: [Tag](#tag)[]

## AWS.SSO/PermissionSetProperties
### Properties
* **CustomerManagedPolicyReferences**: [CustomerManagedPolicyReference](#customermanagedpolicyreference)[]
* **Description**: string: The permission set description.
* **InlinePolicy**: [PermissionSet_InlinePolicy](#permissionsetinlinepolicy) | string: The inline policy to put in permission set.
* **InstanceArn**: string (Required, Identifier): The sso instance arn that the permission set is owned.
* **ManagedPolicies**: string[]
* **Name**: string (Required): The name you want to assign to this permission set.
* **PermissionsBoundary**: [PermissionsBoundary](#permissionsboundary)
* **PermissionSetArn**: string (ReadOnly, Identifier): The permission set that the policy will be attached to
* **RelayStateType**: string: The relay state URL that redirect links to any service in the AWS Management Console.
* **SessionDuration**: string: The length of time that a user can be signed in to an AWS account.
* **Tags**: [Tag](#tag)[]

## CustomerManagedPolicyReference
### Properties
* **Name**: string (Required)
* **Path**: string

## InstanceAccessControlAttributeConfiguration_InstanceAccessControlAttributeConfiguration
### Properties
* **AccessControlAttributes**: [AccessControlAttribute](#accesscontrolattribute)[] (Required)

## PermissionsBoundary
### Properties
* **CustomerManagedPolicyReference**: [CustomerManagedPolicyReference](#customermanagedpolicyreference)
* **ManagedPolicyArn**: string

## PortalOptionsConfiguration
### Properties
* **SignInOptions**: [SignInOptions](#signinoptions): A structure that describes the sign-in options for the access portal
* **Visibility**: string: Indicates whether this application is visible in the access portal

## SignInOptions
### Properties
* **ApplicationUrl**: string: The URL that accepts authentication requests for an application, this is a required parameter if the Origin parameter is APPLICATION
* **Origin**: string (Required): This determines how IAM Identity Center navigates the user to the target application

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

