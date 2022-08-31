# AWS.SSO @ default

## Resource AWS.SSO/InstanceAccessControlAttributeConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSO/InstanceAccessControlAttributeConfigurationProperties](#awsssoinstanceaccesscontrolattributeconfigurationproperties): properties of the resource

## Resource AWS.SSO/PermissionSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSO/PermissionSetProperties](#awsssopermissionsetproperties): properties of the resource

## AWS.SSO/InstanceAccessControlAttributeConfigurationProperties
### Properties
* **AccessControlAttributes**: [AccessControlAttributeList](#accesscontrolattributelist)
* **InstanceAccessControlAttributeConfiguration**: [InstanceAccessControlAttributeConfiguration_InstanceAccessControlAttributeConfiguration](#instanceaccesscontrolattributeconfigurationinstanceaccesscontrolattributeconfiguration): The InstanceAccessControlAttributeConfiguration property has been deprecated but is still supported for backwards compatibility purposes. We recomend that you use  AccessControlAttributes property instead.
* **InstanceArn**: string: The ARN of the AWS SSO instance under which the operation will be executed.

## AccessControlAttributeList
### Properties

## InstanceAccessControlAttributeConfiguration_InstanceAccessControlAttributeConfiguration
### Properties
* **AccessControlAttributes**: [AccessControlAttributeList](#accesscontrolattributelist)

## AWS.SSO/PermissionSetProperties
### Properties
* **CustomerManagedPolicyReferences**: [CustomerManagedPolicyReference](#customermanagedpolicyreference)[]
* **Description**: string: The permission set description.
* **InlinePolicy**: [PermissionSet_InlinePolicy](#permissionsetinlinepolicy) | string: The inline policy to put in permission set.
* **InstanceArn**: string: The sso instance arn that the permission set is owned.
* **ManagedPolicies**: [ManagedPolicyArn](#managedpolicyarn)[]
* **Name**: string: The name you want to assign to this permission set.
* **PermissionsBoundary**: [PermissionsBoundary](#permissionsboundary)
* **PermissionSetArn**: string (ReadOnly): The permission set that the policy will be attached to
* **RelayStateType**: string: The relay state URL that redirect links to any service in the AWS Management Console.
* **SessionDuration**: string: The length of time that a user can be signed in to an AWS account.
* **Tags**: [Tag](#tag)[]

## CustomerManagedPolicyReference
### Properties
* **Name**: string
* **Path**: string

## ManagedPolicyArn
### Properties

## PermissionsBoundary
### Properties
* **CustomerManagedPolicyReference**: [CustomerManagedPolicyReference](#customermanagedpolicyreference)
* **ManagedPolicyArn**: [ManagedPolicyArn](#managedpolicyarn)

## Tag
### Properties
* **Key**: string
* **Value**: string

