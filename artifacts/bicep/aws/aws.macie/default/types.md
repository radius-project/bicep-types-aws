# AWS.Macie @ default

## Resource AWS.Macie/CustomDataIdentifier@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Macie/CustomDataIdentifierProperties](#awsmaciecustomdataidentifierproperties): properties of the resource

## Resource AWS.Macie/FindingsFilter@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Macie/FindingsFilterProperties](#awsmaciefindingsfilterproperties): properties of the resource

## Resource AWS.Macie/Session@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Macie/SessionProperties](#awsmaciesessionproperties): properties of the resource

## AWS.Macie/CustomDataIdentifierProperties
### Properties
* **Arn**: string (ReadOnly): Custom data identifier ARN.
* **Description**: string: Description of custom data identifier.
* **Id**: string (ReadOnly): Custom data identifier ID.
* **IgnoreWords**: string[]: Words to be ignored.
* **Keywords**: string[]: Keywords to be matched against.
* **MaximumMatchDistance**: int: Maximum match distance.
* **Name**: string: Name of custom data identifier.
* **Regex**: string: Regular expression for custom data identifier.

## AWS.Macie/FindingsFilterProperties
### Properties
* **Action**: [FindingFilterAction](#findingfilteraction): Findings filter action.
* **Arn**: string (ReadOnly): Findings filter ARN.
* **Description**: string: Findings filter description
* **FindingCriteria**: [FindingCriteria](#findingcriteria): Findings filter criteria.
* **FindingsFilterListItems**: [FindingsFilterListItem](#findingsfilterlistitem)[] (ReadOnly): Findings filters list.
* **Id**: string (ReadOnly): Findings filter ID.
* **Name**: string: Findings filter name
* **Position**: int: Findings filter position.

## FindingFilterAction
### Properties

## FindingCriteria
### Properties
* **Criterion**: [Criterion](#criterion)

## Criterion
### Properties

## FindingsFilterListItem
### Properties
* **Id**: string
* **Name**: string

## AWS.Macie/SessionProperties
### Properties
* **AwsAccountId**: string (ReadOnly): AWS account ID of customer
* **FindingPublishingFrequency**: string: A enumeration value that specifies how frequently finding updates are published.
* **ServiceRole**: string (ReadOnly): Service role used by Macie
* **Status**: string: A enumeration value that specifies the status of the Macie Session.

