# AWS.Detective @ default

## Resource AWS.Detective/Graph@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Detective/GraphProperties](#awsdetectivegraphproperties) (Identifier): properties of the resource

## Resource AWS.Detective/MemberInvitation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Detective/MemberInvitationProperties](#awsdetectivememberinvitationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Detective/OrganizationAdmin@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Detective/OrganizationAdminProperties](#awsdetectiveorganizationadminproperties) (Required, Identifier): properties of the resource

## AWS.Detective/GraphProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Detective graph ARN
* **AutoEnableMembers**: bool: Indicates whether to automatically enable new organization accounts as member accounts in the organization behavior graph.
* **Tags**: [Tag](#tag)[]

## AWS.Detective/MemberInvitationProperties
### Properties
* **DisableEmailNotification**: bool (WriteOnly): When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.
* **GraphArn**: string (Required, Identifier): The ARN of the graph to which the member account will be invited
* **MemberEmailAddress**: string (Required): The root email address for the account to be invited, for validation. Updating this field has no effect.
* **MemberId**: string (Required, Identifier): The AWS account ID to be invited to join the graph as a member
* **Message**: string (WriteOnly): A message to be included in the email invitation sent to the invited account. Updating this field has no effect.

## AWS.Detective/OrganizationAdminProperties
### Properties
* **AccountId**: string (Required, Identifier): The account ID of the account that should be registered as your Organization's delegated administrator for Detective
* **GraphArn**: string (ReadOnly): The Detective graph ARN

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @ 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @ 

