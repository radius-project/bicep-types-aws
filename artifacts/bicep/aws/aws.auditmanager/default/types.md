# AWS.AuditManager @ default

## Resource AWS.AuditManager/Assessment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AuditManager/AssessmentProperties](#awsauditmanagerassessmentproperties) (Identifier): properties of the resource

## AssessmentReportsDestination
### Properties
* **Destination**: string
* **DestinationType**: string

## AWS.AuditManager/AssessmentProperties
### Properties
* **Arn**: string (ReadOnly)
* **AssessmentId**: string (ReadOnly, Identifier)
* **AssessmentReportsDestination**: [AssessmentReportsDestination](#assessmentreportsdestination)
* **AwsAccount**: [AWSAccount](#awsaccount)
* **CreationTime**: int (ReadOnly)
* **Delegations**: [Delegation](#delegation)[] (WriteOnly): The list of delegations.
* **Description**: string (WriteOnly)
* **FrameworkId**: string
* **Name**: string (WriteOnly)
* **Roles**: [Role](#role)[]: The list of roles for the specified assessment.
* **Scope**: [Scope](#scope)
* **Status**: string
* **Tags**: [Tag](#tag)[]: The tags associated with the assessment.

## AWSAccount
### Properties
* **EmailAddress**: string (WriteOnly)
* **Id**: string
* **Name**: string (WriteOnly)

## AWSService
### Properties
* **ServiceName**: string

## Delegation
### Properties
* **AssessmentId**: string (Identifier)
* **AssessmentName**: string
* **Comment**: string
* **ControlSetId**: string
* **CreatedBy**: string
* **CreationTime**: int
* **Id**: string
* **LastUpdated**: int
* **RoleArn**: string
* **RoleType**: string
* **Status**: string

## Role
### Properties
* **RoleArn**: string
* **RoleType**: string

## Scope
### Properties
* **AwsAccounts**: [AWSAccount](#awsaccount)[] (WriteOnly): The AWS accounts included in scope.
* **AwsServices**: [AWSService](#awsservice)[] (WriteOnly): The AWS services included in scope.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

