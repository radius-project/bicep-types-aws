# AWS.Organizations @ default

## Resource AWS.Organizations/Account@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Organizations/AccountProperties](#awsorganizationsaccountproperties) (Required): properties of the resource

## Resource AWS.Organizations/Organization@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Organizations/OrganizationProperties](#awsorganizationsorganizationproperties): properties of the resource

## Resource AWS.Organizations/OrganizationalUnit@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Organizations/OrganizationalUnitProperties](#awsorganizationsorganizationalunitproperties) (Required): properties of the resource

## Resource AWS.Organizations/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Organizations/PolicyProperties](#awsorganizationspolicyproperties) (Required): properties of the resource

## Resource AWS.Organizations/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Organizations/ResourcePolicyProperties](#awsorganizationsresourcepolicyproperties) (Required): properties of the resource

## AWS.Organizations/AccountProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier): If the account was created successfully, the unique identifier (ID) of the new account.
* **AccountName**: string (Required): The friendly name of the member account.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the account.
* **Email**: string (Required): The email address of the owner to assign to the new member account.
* **JoinedMethod**: string (ReadOnly): The method by which the account joined the organization.
* **JoinedTimestamp**: string (ReadOnly): The date the account became a part of the organization.
* **ParentIds**: string[]: List of parent nodes for the member account. Currently only one parent at a time is supported. Default is root.
* **RoleName**: string (WriteOnly): The name of an IAM role that AWS Organizations automatically preconfigures in the new member account. Default name is OrganizationAccountAccessRole if not specified.
* **Status**: string (ReadOnly): The status of the account in the organization.
* **Tags**: [Tag](#tag)[]: A list of tags that you want to attach to the newly created account. For each tag in the list, you must specify both a tag key and a value.

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

## AWS.Organizations/OrganizationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of an organization.
* **FeatureSet**: string: Specifies the feature set supported by the new organization. Each feature set supports different levels of functionality.
* **Id**: string (ReadOnly, Identifier): The unique identifier (ID) of an organization.
* **ManagementAccountArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the account that is designated as the management account for the organization.
* **ManagementAccountEmail**: string (ReadOnly): The email address that is associated with the AWS account that is designated as the management account for the organization.
* **ManagementAccountId**: string (ReadOnly): The unique identifier (ID) of the management account of an organization.
* **RootId**: string (ReadOnly): The unique identifier (ID) for the root.

## AWS.Organizations/OrganizationalUnitProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of this OU.
* **Id**: string (ReadOnly, Identifier): The unique identifier (ID) associated with this OU.
* **Name**: string (Required): The friendly name of this OU.
* **ParentId**: string (Required): The unique identifier (ID) of the parent root or OU that you want to create the new OU in.
* **Tags**: [Tag](#tag)[]: A list of tags that you want to attach to the newly created OU.

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

## AWS.Organizations/PolicyProperties
### Properties
* **Arn**: string (ReadOnly): ARN of the Policy
* **AwsManaged**: bool (ReadOnly): A boolean value that indicates whether the specified policy is an AWS managed policy. If true, then you can attach the policy to roots, OUs, or accounts, but you cannot edit it.
* **Content**: [Policy_Content](#policycontent) | string (Required): The Policy text content. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.
* **Description**: string: Human readable description of the policy
* **Id**: string (ReadOnly, Identifier): Id of the Policy
* **Name**: string (Required): Name of the Policy
* **Tags**: [Tag](#tag)[]: A list of tags that you want to attach to the newly created policy. For each tag in the list, you must specify both a tag key and a value. You can set the value to an empty string, but you can't set it to null.
* **TargetIds**: string[]: List of unique identifiers (IDs) of the root, OU, or account that you want to attach the policy to
* **Type**: string (Required): The type of policy to create. You can specify one of the following values: AISERVICES_OPT_OUT_POLICY, BACKUP_POLICY, SERVICE_CONTROL_POLICY, TAG_POLICY

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

## AWS.Organizations/ResourcePolicyProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resource policy.
* **Content**: [ResourcePolicy_Content](#resourcepolicycontent) | string (Required): The policy document. For AWS CloudFormation templates formatted in YAML, you can provide the policy in JSON or YAML format. AWS CloudFormation always converts a YAML policy to JSON format before submitting it.
* **Id**: string (ReadOnly, Identifier): The unique identifier (ID) associated with this resource policy.
* **Tags**: [Tag](#tag)[]: A list of tags that you want to attach to the resource policy

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value that's associated with the key of the tag. You can set the value of a tag to an empty string, but you can't set the value of a tag to null.

