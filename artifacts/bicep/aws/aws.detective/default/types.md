# AWS.Detective @ default

## Resource AWS.Detective/Graph@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Detective/GraphProperties](#awsdetectivegraphproperties): properties of the resource

## Resource AWS.Detective/MemberInvitation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Detective/MemberInvitationProperties](#awsdetectivememberinvitationproperties) (Required): properties of the resource

## AWS.Detective/GraphProperties
### Properties
* **Arn**: string (ReadOnly): The Detective graph ARN
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @ 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. Valid characters are Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @ 

## AWS.Detective/MemberInvitationProperties
### Properties
* **DisableEmailNotification**: bool: When set to true, invitation emails are not sent to the member accounts. Member accounts must still accept the invitation before they are added to the behavior graph. Updating this field has no effect.
* **GraphArn**: string (Required): The ARN of the graph to which the member account will be invited
* **MemberEmailAddress**: string (Required): The root email address for the account to be invited, for validation. Updating this field has no effect.
* **MemberId**: string (Required): The AWS account ID to be invited to join the graph as a member
* **Message**: string: A message to be included in the email invitation sent to the invited account. Updating this field has no effect.

