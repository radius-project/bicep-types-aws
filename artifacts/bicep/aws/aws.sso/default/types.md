# AWS.SSO @ default

## Resource AWS.SSO/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/ApplicationProperties](#awsssoapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSO/ApplicationAssignment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/ApplicationAssignmentProperties](#awsssoapplicationassignmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSO/ApplicationProvider@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/ApplicationProviderProperties](#awsssoapplicationproviderproperties) (Identifier): properties of the resource

## Resource AWS.SSO/Assignment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/AssignmentProperties](#awsssoassignmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSO/Instance@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/InstanceProperties](#awsssoinstanceproperties) (Identifier): properties of the resource

## Resource AWS.SSO/InstanceAccessControlAttributeConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSO/InstanceAccessControlAttributeConfigurationProperties](#awsssoinstanceaccesscontrolattributeconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSO/PermissionSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
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

## ApplicationProvider_Scopes
### Properties

## AWS.SSO/ApplicationAssignmentProperties
### Properties
* **ApplicationArn**: string (Required, Identifier): The ARN of the application.
* **PrincipalId**: string (Required, Identifier): An identifier for an object in IAM Identity Center, such as a user or group
* **PrincipalType**: string (Required, Identifier): The entity type for which the assignment will be created.

## AWS.SSO/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly, Identifier): The Application ARN that is returned upon creation of the Identity Center (SSO) Application
* **ApplicationProviderArn**: string (Required): The ARN of the application provider under which the operation will run
* **Description**: string: The description information for the Identity Center (SSO) Application
* **IdentityStoreArn**: string (ReadOnly): The ARN of the identity store associated with the Identity Center instance
* **InstanceArn**: string (Required): The ARN of the instance of IAM Identity Center under which the operation will run
* **Name**: string (Required): The name you want to assign to this Identity Center (SSO) Application
* **PortalOptions**: [PortalOptionsConfiguration](#portaloptionsconfiguration): A structure that describes the options for the portal associated with an application
* **Status**: string: Specifies whether the application is enabled or disabled
* **Tags**: [Tag](#tag)[]

## AWS.SSO/ApplicationProviderProperties
### Properties
* **ApplicationProviderArn**: string (Identifier): The ARN of the application provider.
* **DisplayData**: [DisplayData](#displaydata) (ReadOnly)
* **FederationProtocol**: string (ReadOnly): The protocol used to federate to the application provider.
* **ResourceServerConfig**: [ResourceServerConfig](#resourceserverconfig) (ReadOnly)

## AWS.SSO/AssignmentProperties
### Properties
* **InstanceArn**: string (Required, Identifier): The sso instance that the permission set is owned.
* **PermissionSetArn**: string (Required, Identifier): The permission set that the assignment will be assigned
* **PrincipalId**: string (Required, Identifier): The assignee's identifier, user id/group id
* **PrincipalType**: string (Required, Identifier): The assignee's type, user/group
* **TargetId**: string (Required, Identifier): The account id to be provisioned.
* **TargetType**: string (Required, Identifier): The type of resource to be provisioned to, only aws account now

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

## DisplayData
### Properties
* **Description**: string: The description of the application provider that appears in the portal.
* **DisplayName**: string: The name of the application provider that appears in the portal.
* **IconUrl**: string: A URL that points to an icon that represents the application provider.

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

## ResourceServerConfig
### Properties
* **Scopes**: [ApplicationProvider_Scopes](#applicationproviderscopes): A map of IAM Identity Center access scopes associated with this resource server.

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

