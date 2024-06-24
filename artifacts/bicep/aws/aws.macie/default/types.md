# AWS.Macie @ default

## Resource AWS.Macie/AllowList@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Macie/AllowListProperties](#awsmacieallowlistproperties) (Required, Identifier): properties of the resource

## Resource AWS.Macie/CustomDataIdentifier@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Macie/CustomDataIdentifierProperties](#awsmaciecustomdataidentifierproperties) (Required, Identifier): properties of the resource

## Resource AWS.Macie/FindingsFilter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Macie/FindingsFilterProperties](#awsmaciefindingsfilterproperties) (Required, Identifier): properties of the resource

## Resource AWS.Macie/Session@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Macie/SessionProperties](#awsmaciesessionproperties) (Identifier): properties of the resource

## AWS.Macie/AllowListProperties
### Properties
* **Arn**: string (ReadOnly): AllowList ARN.
* **Criteria**: [Criteria](#criteria) (Required): AllowList criteria.
* **Description**: string: Description of AllowList.
* **Id**: string (ReadOnly, Identifier): AllowList ID.
* **Name**: string (Required): Name of AllowList.
* **Status**: string (ReadOnly): AllowList status.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## AWS.Macie/CustomDataIdentifierProperties
### Properties
* **Arn**: string (ReadOnly): Custom data identifier ARN.
* **Description**: string: Description of custom data identifier.
* **Id**: string (ReadOnly, Identifier): Custom data identifier ID.
* **IgnoreWords**: string[]: Words to be ignored.
* **Keywords**: string[]: Keywords to be matched against.
* **MaximumMatchDistance**: int: Maximum match distance.
* **Name**: string (Required): Name of custom data identifier.
* **Regex**: string (Required): Regular expression for custom data identifier.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## AWS.Macie/FindingsFilterProperties
### Properties
* **Action**: string: Findings filter action.
* **Arn**: string (ReadOnly): Findings filter ARN.
* **Description**: string: Findings filter description
* **FindingCriteria**: [FindingCriteria](#findingcriteria) (Required): Findings filter criteria.
* **Id**: string (ReadOnly, Identifier): Findings filter ID.
* **Name**: string (Required): Findings filter name
* **Position**: int: Findings filter position.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## AWS.Macie/SessionProperties
### Properties
* **AwsAccountId**: string (ReadOnly, Identifier): AWS account ID of customer
* **FindingPublishingFrequency**: string: A enumeration value that specifies how frequently finding updates are published.
* **ServiceRole**: string (ReadOnly): Service role used by Macie
* **Status**: string: A enumeration value that specifies the status of the Macie Session.

## Criteria
### Properties

## Criterion
### Properties

## FindingCriteria
### Properties
* **Criterion**: [Criterion](#criterion)

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

