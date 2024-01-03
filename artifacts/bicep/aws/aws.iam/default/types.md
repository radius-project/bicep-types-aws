# AWS.IAM @ default

## Resource AWS.IAM/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/GroupProperties](#awsiamgroupproperties): properties of the resource

## Resource AWS.IAM/GroupPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/GroupPolicyProperties](#awsiamgrouppolicyproperties) (Required): properties of the resource

## Resource AWS.IAM/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/InstanceProfileProperties](#awsiaminstanceprofileproperties) (Required): properties of the resource

## Resource AWS.IAM/ManagedPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/ManagedPolicyProperties](#awsiammanagedpolicyproperties) (Required): properties of the resource

## Resource AWS.IAM/OIDCProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/OIDCProviderProperties](#awsiamoidcproviderproperties) (Required): properties of the resource

## Resource AWS.IAM/Role@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/RoleProperties](#awsiamroleproperties) (Required): properties of the resource

## Resource AWS.IAM/RolePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/RolePolicyProperties](#awsiamrolepolicyproperties) (Required): properties of the resource

## Resource AWS.IAM/SAMLProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/SAMLProviderProperties](#awsiamsamlproviderproperties) (Required): properties of the resource

## Resource AWS.IAM/ServerCertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/ServerCertificateProperties](#awsiamservercertificateproperties): properties of the resource

## Resource AWS.IAM/ServiceLinkedRole@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/ServiceLinkedRoleProperties](#awsiamservicelinkedroleproperties): properties of the resource

## Resource AWS.IAM/User@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/UserProperties](#awsiamuserproperties): properties of the resource

## Resource AWS.IAM/UserPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/UserPolicyProperties](#awsiamuserpolicyproperties) (Required): properties of the resource

## Resource AWS.IAM/VirtualMFADevice@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/VirtualMFADeviceProperties](#awsiamvirtualmfadeviceproperties) (Required): properties of the resource

## AWS.IAM/GroupProperties
### Properties
* **Arn**: string (ReadOnly): The Arn of the group to create
* **GroupName**: string (Identifier): The name of the group to create
* **ManagedPolicyArns**: string[]: A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role. 
* **Path**: string: The path to the group
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM group

## Policy
### Properties
* **PolicyDocument**: [Group_PolicyDocument](#grouppolicydocument) | string (Required): The policy document.
* **PolicyName**: string (Required): The friendly name (not ARN) identifying the policy.

## AWS.IAM/GroupPolicyProperties
### Properties
* **GroupName**: string (Required, Identifier): The name of the group to associate the policy with.
* **PolicyDocument**: [GroupPolicy_PolicyDocument](#grouppolicypolicydocument): The policy document.
* **PolicyName**: string (Required, Identifier): The name of the policy document.

## GroupPolicy_PolicyDocument
### Properties

## AWS.IAM/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the instance profile.
* **InstanceProfileName**: string (Identifier): The name of the instance profile to create.
* **Path**: string: The path to the instance profile.
* **Roles**: string[] (Required): The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.

## AWS.IAM/ManagedPolicyProperties
### Properties
* **AttachmentCount**: int (ReadOnly): The number of entities (users, groups, and roles) that the policy is attached to.
* **CreateDate**: string (ReadOnly): The date and time, in ISO 8601 date-time format, when the policy was created.
* **DefaultVersionId**: string (ReadOnly): The identifier for the version of the policy that is set as the default version.
* **Description**: string: A friendly description of the policy.
* **Groups**: string[]: The name (friendly name, not ARN) of the group to attach the policy to.
* **IsAttachable**: bool (ReadOnly): Specifies whether the policy can be attached to an IAM user, group, or role.
* **ManagedPolicyName**: string: The friendly name of the policy.
* **Path**: string: The path for the policy.
* **PermissionsBoundaryUsageCount**: int (ReadOnly): The number of entities (users and roles) for which the policy is used to set the permissions boundary.
* **PolicyArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the managed policy
* **PolicyDocument**: [ManagedPolicy_PolicyDocument](#managedpolicypolicydocument) | string (Required): The JSON policy document that you want to use as the content for the new policy.
* **PolicyId**: string (ReadOnly): The stable and unique string identifying the policy.
* **Roles**: string[]: The name (friendly name, not ARN) of the role to attach the policy to.
* **UpdateDate**: string (ReadOnly): The date and time, in ISO 8601 date-time format, when the policy was last updated.
* **Users**: string[]: The name (friendly name, not ARN) of the IAM user to attach the policy to.

## AWS.IAM/OIDCProviderProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the OIDC provider
* **ClientIdList**: string[]
* **Tags**: [Tag](#tag)[]
* **ThumbprintList**: string[] (Required)
* **Url**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/RoleProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) for the role.
* **AssumeRolePolicyDocument**: [Role_AssumeRolePolicyDocument](#roleassumerolepolicydocument) | string (Required): The trust policy that is associated with this role.
* **Description**: string: A description of the role that you provide.
* **ManagedPolicyArns**: string[]: A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role. 
* **MaxSessionDuration**: int: The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours. 
* **Path**: string: The path to the role.
* **PermissionsBoundary**: string: The ARN of the policy used to set the permissions boundary for the role.
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM role. 
* **RoleId**: string (ReadOnly): The stable and unique string identifying the role.
* **RoleName**: string (Identifier): A name for the IAM role, up to 64 characters in length.
* **Tags**: [Tag](#tag)[]: A list of tags that are attached to the role.

## Policy
### Properties
* **PolicyDocument**: [Role_PolicyDocument](#rolepolicydocument) | string (Required): The policy document.
* **PolicyName**: string (Required): The friendly name (not ARN) identifying the policy.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/RolePolicyProperties
### Properties
* **PolicyDocument**: [RolePolicy_PolicyDocument](#rolepolicypolicydocument): The policy document.
* **PolicyName**: string (Required, Identifier): The friendly name (not ARN) identifying the policy.
* **RoleName**: string (Required, Identifier): The name of the policy document.

## RolePolicy_PolicyDocument
### Properties

## AWS.IAM/SAMLProviderProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the SAML provider
* **Name**: string
* **SamlMetadataDocument**: string (Required)
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/ServerCertificateProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the server certificate
* **CertificateBody**: string (WriteOnly)
* **CertificateChain**: string (WriteOnly)
* **Path**: string
* **PrivateKey**: string (WriteOnly)
* **ServerCertificateName**: string (Identifier)
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/ServiceLinkedRoleProperties
### Properties
* **AWSServiceName**: string (WriteOnly): The service principal for the AWS service to which this role is attached.
* **CustomSuffix**: string (WriteOnly): A string that you provide, which is combined with the service-provided prefix to form the complete role name.
* **Description**: string: The description of the role.
* **RoleName**: string (ReadOnly, Identifier): The name of the role.

## AWS.IAM/UserProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that identifies the user. For more information about ARNs and how to use ARNs in policies, see IAM Identifiers in the IAM User Guide.
* **Groups**: string[]: A list of group names to which you want to add the user.
* **LoginProfile**: [LoginProfile](#loginprofile): Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the AWS Management Console.
* **ManagedPolicyArns**: string[]: A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
* **Path**: string: The path to the user. For more information about paths, see IAM identifiers in the IAM User Guide. The ARN of the policy used to set the permissions boundary for the user.
* **PermissionsBoundary**: string: The ARN of the policy that is used to set the permissions boundary for the user.
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM role.
* **Tags**: [Tag](#tag)[]: A list of tags that are associated with the user. For more information about tagging, see Tagging IAM resources in the IAM User Guide.
* **UserName**: string (Identifier): The friendly name identifying the user.

## LoginProfile
### Properties
* **Password**: string (Required, WriteOnly): The user's password.
* **PasswordResetRequired**: bool: Specifies whether the user is required to set a new password on next sign-in.

## Policy
### Properties
* **PolicyDocument**: [User_PolicyDocument](#userpolicydocument) | string (Required): The policy document.
* **PolicyName**: string (Required): The friendly name (not ARN) identifying the policy.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/UserPolicyProperties
### Properties
* **PolicyDocument**: [UserPolicy_PolicyDocument](#userpolicypolicydocument): The policy document.
* **PolicyName**: string (Required, Identifier): The name of the policy document.
* **UserName**: string (Required, Identifier): The name of the user to associate the policy with.

## UserPolicy_PolicyDocument
### Properties

## AWS.IAM/VirtualMFADeviceProperties
### Properties
* **Path**: string
* **SerialNumber**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]
* **Users**: string[] (Required)
* **VirtualMfaDeviceName**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

