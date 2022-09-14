# AWS.AuditManager @ default

## Resource AWS.AuditManager/Assessment@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AuditManager/AssessmentProperties](#awsauditmanagerassessmentproperties): properties of the resource

## AWS.AuditManager/AssessmentProperties
### Properties
* **Arn**: [AssessmentArn](#assessmentarn) (ReadOnly)
* **AssessmentId**: [UUID](#uuid) (ReadOnly)
* **AssessmentReportsDestination**: [AssessmentReportsDestination](#assessmentreportsdestination)
* **AwsAccount**: [AWSAccount](#awsaccount)
* **CreationTime**: [Timestamp](#timestamp) (ReadOnly)
* **Delegations**: [Delegation](#delegation)[] (ReadOnly): The list of delegations.
* **Description**: [AssessmentDescription](#assessmentdescription) (WriteOnly)
* **FrameworkId**: [FrameworkId](#frameworkid)
* **Name**: [AssessmentName](#assessmentname) (WriteOnly)
* **Roles**: [Role](#role)[]: The list of roles for the specified assessment.
* **Scope**: [Scope](#scope)
* **Status**: [AssessmentStatus](#assessmentstatus)
* **Tags**: [Tag](#tag)[]: The tags associated with the assessment.

## AssessmentArn
### Properties

## UUID
### Properties

## AssessmentReportsDestination
### Properties
* **Destination**: [S3Url](#s3url)
* **DestinationType**: [AssessmentReportDestinationType](#assessmentreportdestinationtype)

## S3Url
### Properties

## AssessmentReportDestinationType
### Properties

## AWSAccount
### Properties
* **EmailAddress**: [EmailAddress](#emailaddress)
* **Id**: [AccountId](#accountid)
* **Name**: [AccountName](#accountname)

## EmailAddress
### Properties

## AccountId
### Properties

## AccountName
### Properties

## Timestamp
### Properties

## Delegation
### Properties
* **AssessmentId**: [UUID](#uuid)
* **AssessmentName**: [AssessmentName](#assessmentname)
* **Comment**: [DelegationComment](#delegationcomment)
* **ControlSetId**: [ControlSetId](#controlsetid)
* **CreatedBy**: [CreatedBy](#createdby)
* **CreationTime**: [Timestamp](#timestamp)
* **Id**: [UUID](#uuid)
* **LastUpdated**: [Timestamp](#timestamp)
* **RoleArn**: [IamArn](#iamarn)
* **RoleType**: [RoleType](#roletype)
* **Status**: [DelegationStatus](#delegationstatus)

## AssessmentName
### Properties

## DelegationComment
### Properties

## ControlSetId
### Properties

## CreatedBy
### Properties

## IamArn
### Properties

## RoleType
### Properties

## DelegationStatus
### Properties

## AssessmentDescription
### Properties

## FrameworkId
### Properties

## Role
### Properties
* **RoleArn**: [IamArn](#iamarn)
* **RoleType**: [RoleType](#roletype)

## Scope
### Properties
* **AwsAccounts**: [AWSAccount](#awsaccount)[]: The AWS accounts included in scope.
* **AwsServices**: [AWSService](#awsservice)[]: The AWS services included in scope.

## AWSService
### Properties
* **ServiceName**: [AWSServiceName](#awsservicename)

## AWSServiceName
### Properties

## AssessmentStatus
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

