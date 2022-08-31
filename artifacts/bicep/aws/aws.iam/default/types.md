# AWS.IAM @ default

## Resource AWS.IAM/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IAM/InstanceProfileProperties](#awsiaminstanceprofileproperties): properties of the resource

## Resource AWS.IAM/OIDCProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IAM/OIDCProviderProperties](#awsiamoidcproviderproperties): properties of the resource

## Resource AWS.IAM/Role@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IAM/RoleProperties](#awsiamroleproperties): properties of the resource

## Resource AWS.IAM/SAMLProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IAM/SAMLProviderProperties](#awsiamsamlproviderproperties): properties of the resource

## Resource AWS.IAM/ServerCertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IAM/ServerCertificateProperties](#awsiamservercertificateproperties): properties of the resource

## Resource AWS.IAM/VirtualMFADevice@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IAM/VirtualMFADeviceProperties](#awsiamvirtualmfadeviceproperties): properties of the resource

## AWS.IAM/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the instance profile.
* **InstanceProfileName**: string: The name of the instance profile to create.
* **Path**: string: The path to the instance profile.
* **Roles**: string[]: The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.

## AWS.IAM/OIDCProviderProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the OIDC provider
* **ClientIdList**: string[]
* **Tags**: [Tag](#tag)[]
* **ThumbprintList**: string[]
* **Url**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/RoleProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) for the role.
* **AssumeRolePolicyDocument**: [Role_AssumeRolePolicyDocument](#roleassumerolepolicydocument) | string: The trust policy that is associated with this role.
* **Description**: string: A description of the role that you provide.
* **ManagedPolicyArns**: string[]: A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role. 
* **MaxSessionDuration**: int: The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default maximum of one hour is applied. This setting can have a value from 1 hour to 12 hours. 
* **Path**: string: The path to the role.
* **PermissionsBoundary**: string: The ARN of the policy used to set the permissions boundary for the role.
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM role. 
* **RoleId**: string (ReadOnly): The stable and unique string identifying the role.
* **RoleName**: string: A name for the IAM role, up to 64 characters in length.
* **Tags**: [Tag](#tag)[]: A list of tags that are attached to the role.

## Policy
### Properties
* **PolicyDocument**: [Role_PolicyDocument](#rolepolicydocument) | string: The policy document.
* **PolicyName**: string: The friendly name (not ARN) identifying the policy.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/SAMLProviderProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the SAML provider
* **Name**: string
* **SamlMetadataDocument**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/ServerCertificateProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the server certificate
* **CertificateBody**: string (WriteOnly)
* **CertificateChain**: string (WriteOnly)
* **Path**: string
* **PrivateKey**: string (WriteOnly)
* **ServerCertificateName**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IAM/VirtualMFADeviceProperties
### Properties
* **Path**: string
* **SerialNumber**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **Users**: string[]
* **VirtualMfaDeviceName**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

