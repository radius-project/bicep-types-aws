# AWS.IAM @ default

## Resource AWS.IAM/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/GroupProperties](#awsiamgroupproperties) (Identifier): properties of the resource

## Resource AWS.IAM/GroupPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/GroupPolicyProperties](#awsiamgrouppolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/InstanceProfileProperties](#awsiaminstanceprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/ManagedPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/ManagedPolicyProperties](#awsiammanagedpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/OIDCProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/OIDCProviderProperties](#awsiamoidcproviderproperties) (Identifier): properties of the resource

## Resource AWS.IAM/Role@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/RoleProperties](#awsiamroleproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/RolePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/RolePolicyProperties](#awsiamrolepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/SAMLProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/SAMLProviderProperties](#awsiamsamlproviderproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/ServerCertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/ServerCertificateProperties](#awsiamservercertificateproperties) (Identifier): properties of the resource

## Resource AWS.IAM/ServiceLinkedRole@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/ServiceLinkedRoleProperties](#awsiamservicelinkedroleproperties) (Identifier): properties of the resource

## Resource AWS.IAM/User@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/UserProperties](#awsiamuserproperties) (Identifier): properties of the resource

## Resource AWS.IAM/UserPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/UserPolicyProperties](#awsiamuserpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.IAM/VirtualMFADevice@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IAM/VirtualMFADeviceProperties](#awsiamvirtualmfadeviceproperties) (Required, Identifier): properties of the resource

## AWS.IAM/GroupPolicyProperties
### Properties
* **GroupName**: string (Required, Identifier): The name of the group to associate the policy with.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-.
* **PolicyDocument**: [GroupPolicy_PolicyDocument](#grouppolicypolicydocument): The policy document.
 You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
 The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
  +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
  +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
  +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
* **PolicyName**: string (Required, Identifier): The name of the policy document.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

## AWS.IAM/GroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **GroupName**: string (Identifier): The name of the group to create. Do not include the path in this value.
 The group name must be unique within the account. Group names are not distinguished by case. For example, you cannot create groups named both "ADMINS" and "admins". If you don't specify a name, CFN generates a unique physical ID and uses that ID for the group name.
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
  If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
  Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.
* **ManagedPolicyArns**: string[]: The Amazon Resource Name (ARN) of the IAM policy you want to attach.
 For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
* **Path**: string: The path to the group. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
 This parameter is optional. If it is not included, it defaults to a slash (/).
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM group. To view AWS::IAM::Group snippets, see [Declaring an Group Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-group).
  The name of each inline policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail. 
  For information about limits on the number of inline policies that you can embed in a group, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.

## AWS.IAM/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **InstanceProfileName**: string (Identifier): The name of the instance profile to create.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
* **Path**: string: The path to the instance profile. For more information about paths, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
 This parameter is optional. If it is not included, it defaults to a slash (/).
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
* **Roles**: string[] (Required): The name of the role to associate with the instance profile. Only one role can be assigned to an EC2 instance at a time, and all applications on the instance share the same role and permissions.

## AWS.IAM/ManagedPolicyProperties
### Properties
* **AttachmentCount**: int (ReadOnly)
* **CreateDate**: string (ReadOnly)
* **DefaultVersionId**: string (ReadOnly)
* **Description**: string: A friendly description of the policy.
 Typically used to store information about the permissions defined in the policy. For example, "Grants access to production DynamoDB tables."
 The policy description is immutable. After a value is assigned, it cannot be changed.
* **Groups**: string[]: The name (friendly name, not ARN) of the group to attach the policy to.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
* **IsAttachable**: bool (ReadOnly)
* **ManagedPolicyName**: string: The friendly name of the policy.
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
  If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
  Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.
* **Path**: string: The path for the policy.
 For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
 This parameter is optional. If it is not included, it defaults to a slash (/).
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
  You cannot use an asterisk (*) in the path name.
* **PermissionsBoundaryUsageCount**: int (ReadOnly)
* **PolicyArn**: string (ReadOnly, Identifier)
* **PolicyDocument**: [ManagedPolicy_PolicyDocument](#managedpolicypolicydocument) | string (Required): The JSON policy document that you want to use as the content for the new policy.
 You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
 The maximum length of the policy document that you can pass in this operation, including whitespace, is listed below. To view the maximum character counts of a managed policy with no whitespaces, see [IAM and character quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html#reference_iam-quotas-entity-length).
 To learn more about JSON policy grammar, see [Grammar of the IAM JSON policy language](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_grammar.html) in the *IAM User Guide*. 
 The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
  +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
  +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
  +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
* **PolicyId**: string (ReadOnly)
* **Roles**: string[]: The name (friendly name, not ARN) of the role to attach the policy to.
 This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
  If an external policy (such as ``AWS::IAM::Policy`` or ``AWS::IAM::ManagedPolicy``) has a ``Ref`` to a role and if a resource (such as ``AWS::ECS::Service``) also has a ``Ref`` to the same role, add a ``DependsOn`` attribute to the resource to make the resource depend on the external policy. This dependency ensures that the role's policy is available throughout the resource's lifecycle. For example, when you delete a stack with an ``AWS::ECS::Service`` resource, the ``DependsOn`` attribute ensures that CFN deletes the ``AWS::ECS::Service`` resource before deleting its role's policy.
* **UpdateDate**: string (ReadOnly)
* **Users**: string[]: The name (friendly name, not ARN) of the IAM user to attach the policy to.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

## AWS.IAM/OIDCProviderProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the OIDC provider
* **ClientIdList**: string[]
* **Tags**: [Tag](#tag)[]
* **ThumbprintList**: string[]
* **Url**: string

## AWS.IAM/RolePolicyProperties
### Properties
* **PolicyDocument**: [RolePolicy_PolicyDocument](#rolepolicypolicydocument): The policy document.
 You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
 The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
  +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
  +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
  +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
* **PolicyName**: string (Required, Identifier): The name of the policy document.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
* **RoleName**: string (Required, Identifier): The name of the role to associate the policy with.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

## AWS.IAM/RoleProperties
### Properties
* **Arn**: string (ReadOnly)
* **AssumeRolePolicyDocument**: [Role_AssumeRolePolicyDocument](#roleassumerolepolicydocument) | string (Required): The trust policy that is associated with this role. Trust policies define which entities can assume the role. You can associate only one trust policy with a role. For an example of a policy that can be used to assume a role, see [Template Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-role.html#aws-resource-iam-role--examples). For more information about the elements that you can use in an IAM policy, see [Policy Elements Reference](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements.html) in the *User Guide*.
* **Description**: string: A description of the role that you provide.
* **ManagedPolicyArns**: string[]: A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the role.
 For more information about ARNs, see [Amazon Resource Names (ARNs) and Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
* **MaxSessionDuration**: int: The maximum session duration (in seconds) that you want to set for the specified role. If you do not specify a value for this setting, the default value of one hour is applied. This setting can have a value from 1 hour to 12 hours.
 Anyone who assumes the role from the CLI or API can use the ``DurationSeconds`` API parameter or the ``duration-seconds`` CLI parameter to request a longer session. The ``MaxSessionDuration`` setting determines the maximum duration that can be requested using the ``DurationSeconds`` parameter. If users don't specify a value for the ``DurationSeconds`` parameter, their security credentials are valid for one hour by default. This applies when you use the ``AssumeRole*`` API operations or the ``assume-role*`` CLI operations but does not apply when you use those operations to create a console URL. For more information, see [Using IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use.html) in the *IAM User Guide*.
* **Path**: string: The path to the role. For more information about paths, see [IAM Identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
 This parameter is optional. If it is not included, it defaults to a slash (/).
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
* **PermissionsBoundary**: string: The ARN of the policy used to set the permissions boundary for the role.
 For more information about permissions boundaries, see [Permissions boundaries for IAM identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM role.
 When you embed an inline policy in a role, the inline policy is used as part of the role's access (permissions) policy. The role's trust policy is created at the same time as the role. You can update a role's trust policy later. For more information about IAM roles, go to [Using Roles to Delegate Permissions and Federate Identities](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html).
 A role can also have an attached managed policy. For information about policies, see [Managed Policies and Inline Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html) in the *User Guide*.
 For information about limits on the number of inline policies that you can embed with a role, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
  If an external policy (such as ``AWS::IAM::Policy`` or
* **RoleId**: string (ReadOnly)
* **RoleName**: string (Identifier): A name for the IAM role, up to 64 characters in length. For valid values, see the ``RoleName`` parameter for the [CreateRole](https://docs.aws.amazon.com/IAM/latest/APIReference/API_CreateRole.html) action in the *User Guide*.
 This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The role name must be unique within the account. Role names are not distinguished by case. For example, you cannot create roles named both "Role1" and "role1".
 If you don't specify a name, CFN generates a unique physical ID and uses that ID for the role name.
 If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/Use
* **Tags**: [Tag](#tag)[]: A list of tags that are attached to the role. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.

## AWS.IAM/SAMLProviderProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the SAML provider
* **Name**: string
* **SamlMetadataDocument**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.IAM/ServerCertificateProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the server certificate
* **CertificateBody**: string (WriteOnly)
* **CertificateChain**: string (WriteOnly)
* **Path**: string
* **PrivateKey**: string (WriteOnly)
* **ServerCertificateName**: string (Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.IAM/ServiceLinkedRoleProperties
### Properties
* **AWSServiceName**: string (WriteOnly): The service principal for the AWS service to which this role is attached.
* **CustomSuffix**: string (WriteOnly): A string that you provide, which is combined with the service-provided prefix to form the complete role name.
* **Description**: string: The description of the role.
* **RoleName**: string (ReadOnly, Identifier): The name of the role.

## AWS.IAM/UserPolicyProperties
### Properties
* **PolicyDocument**: [UserPolicy_PolicyDocument](#userpolicypolicydocument): The policy document.
 You must provide policies in JSON format in IAM. However, for CFN templates formatted in YAML, you can provide the policy in JSON or YAML format. CFN always converts a YAML policy to JSON format before submitting it to IAM.
 The [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex) used to validate this parameter is a string of characters consisting of the following:
  +  Any printable ASCII character ranging from the space character (``\u0020``) through the end of the ASCII character range
  +  The printable characters in the Basic Latin and Latin-1 Supplement character set (through ``\u00FF``)
  +  The special characters tab (``\u0009``), line feed (``\u000A``), and carriage return (``\u000D``)
* **PolicyName**: string (Required, Identifier): The name of the policy document.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-
* **UserName**: string (Required, Identifier): The name of the user to associate the policy with.
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-

## AWS.IAM/UserProperties
### Properties
* **Arn**: string (ReadOnly)
* **Groups**: string[]: A list of group names to which you want to add the user.
* **LoginProfile**: [LoginProfile](#loginprofile): Creates a password for the specified IAM user. A password allows an IAM user to access AWS services through the console.
 You can use the CLI, the AWS API, or the *Users* page in the IAM console to create a password for any IAM user. Use [ChangePassword](https://docs.aws.amazon.com/IAM/latest/APIReference/API_ChangePassword.html) to update your own existing password in the *My Security Credentials* page in the console.
 For more information about managing passwords, see [Managing passwords](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_ManagingLogins.html) in the *User Guide*.
* **ManagedPolicyArns**: string[]: A list of Amazon Resource Names (ARNs) of the IAM managed policies that you want to attach to the user.
 For more information about ARNs, see [Amazon Resource Names (ARNs) and Service Namespaces](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
* **Path**: string: The path for the user name. For more information about paths, see [IAM identifiers](https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_Identifiers.html) in the *IAM User Guide*.
 This parameter is optional. If it is not included, it defaults to a slash (/).
 This parameter allows (through its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of either a forward slash (/) by itself or a string that must begin and end with forward slashes. In addition, it can contain any ASCII character from the ! (``\u0021``) through the DEL character (``\u007F``), including most punctuation characters, digits, and upper and lowercased letters.
* **PermissionsBoundary**: string: The ARN of the managed policy that is used to set the permissions boundary for the user.
 A permissions boundary policy defines the maximum permissions that identity-based policies can grant to an entity, but does not grant permissions. Permissions boundaries do not define the maximum permissions that a resource-based policy can grant to an entity. To learn more, see [Permissions boundaries for IAM entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html) in the *IAM User Guide*.
 For more information about policy types, see [Policy types](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policy-types) in the *IAM User Guide*.
* **Policies**: [Policy](#policy)[]: Adds or updates an inline policy document that is embedded in the specified IAM user. To view AWS::IAM::User snippets, see [Declaring an User Resource](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/quickref-iam.html#scenario-iam-user).
  The name of each policy for a role, user, or group must be unique. If you don't choose unique names, updates to the IAM identity will fail. 
  For information about limits on the number of inline policies that you can embed in a user, see [Limitations on Entities](https://docs.aws.amazon.com/IAM/latest/UserGuide/LimitationsOnEntities.html) in the *User Guide*.
* **Tags**: [Tag](#tag)[]: A list of tags that you want to attach to the new user. Each tag consists of a key name and an associated value. For more information about tagging, see [Tagging IAM resources](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html) in the *IAM User Guide*.
  If any one of the tags is invalid or if you exceed the allowed maximum number of tags, then the entire request fails and the resource is not created.
* **UserName**: string (Identifier): The name of the user to create. Do not include the path in this value.
 This parameter allows (per its [regex pattern](https://docs.aws.amazon.com/http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: _+=,.@-. The user name must be unique within the account. User names are not distinguished by case. For example, you cannot create users named both "John" and "john".
 If you don't specify a name, CFN generates a unique physical ID and uses that ID for the user name.
 If you specify a name, you must specify the ``CAPABILITY_NAMED_IAM`` value to acknowledge your template's capabilities. For more information, see [Acknowledging Resources in Templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-iam-template.html#using-iam-capabilities).
  Naming an IAM resource can cause an unrecoverable error if you reuse the same template in multiple Regions. To prevent this, we recommend using ``Fn::Join`` and ``AWS::Region`` to create a Region-specific name, as in the following example: ``{"Fn::Join": ["", [{"Ref": "AWS::Region"}, {"Ref": "MyResourceName"}]]}``.

## AWS.IAM/VirtualMFADeviceProperties
### Properties
* **Path**: string
* **SerialNumber**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]
* **Users**: string[] (Required)
* **VirtualMfaDeviceName**: string

## GroupPolicy_PolicyDocument
### Properties

## LoginProfile
### Properties
* **Password**: string (Required, WriteOnly): The user's password.
* **PasswordResetRequired**: bool: Specifies whether the user is required to set a new password on next sign-in.

## Policy
### Properties
* **PolicyDocument**: [Group_PolicyDocument](#grouppolicydocument) | string (Required): The policy document.
* **PolicyName**: string (Required): The friendly name (not ARN) identifying the policy.

## Policy
### Properties
* **PolicyDocument**: [Role_PolicyDocument](#rolepolicydocument) | string (Required): The entire contents of the policy that defines permissions. For more information, see [Overview of JSON policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json).
* **PolicyName**: string (Required): The friendly name (not ARN) identifying the policy.

## Policy
### Properties
* **PolicyDocument**: [User_PolicyDocument](#userpolicydocument) | string (Required): The entire contents of the policy that defines permissions. For more information, see [Overview of JSON policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html#access_policies-json).
* **PolicyName**: string (Required): The friendly name (not ARN) identifying the policy.

## RolePolicy_PolicyDocument
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name that can be used to look up or retrieve the associated value. For example, ``Department`` or ``Cost Center`` are common choices.
* **Value**: string (Required): The value associated with this tag. For example, tags with a key name of ``Department`` could have values such as ``Human Resources``, ``Accounting``, and ``Support``. Tags with a key name of ``Cost Center`` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
   AWS always interprets the tag ``Value`` as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name that can be used to look up or retrieve the associated value. For example, ``Department`` or ``Cost Center`` are common choices.
* **Value**: string (Required): The value associated with this tag. For example, tags with a key name of ``Department`` could have values such as ``Human Resources``, ``Accounting``, and ``Support``. Tags with a key name of ``Cost Center`` might have values that consist of the number associated with the different cost centers in your company. Typically, many resources have tags with the same key name but with different values.
   AWS always interprets the tag ``Value`` as a single string. If you need to store an array, you can store comma-separated values in the string. However, you must interpret the value in your code.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## UserPolicy_PolicyDocument
### Properties

