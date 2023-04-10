# AWS.XRay @ default

## Resource AWS.XRay/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.XRay/GroupProperties](#awsxraygroupproperties): properties of the resource

## Resource AWS.XRay/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.XRay/ResourcePolicyProperties](#awsxrayresourcepolicyproperties) (Required): properties of the resource

## Resource AWS.XRay/SamplingRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.XRay/SamplingRuleProperties](#awsxraysamplingruleproperties): properties of the resource

## AWS.XRay/GroupProperties
### Properties
* **FilterExpression**: string: The filter expression defining criteria by which to group traces.
* **GroupARN**: string (ReadOnly, Identifier): The ARN of the group that was generated on creation.
* **GroupName**: string: The case-sensitive name of the new group. Names must be unique.
* **InsightsConfiguration**: [InsightsConfiguration](#insightsconfiguration)
* **Tags**: [Group_Tags](#grouptags)[]

## InsightsConfiguration
### Properties
* **InsightsEnabled**: bool: Set the InsightsEnabled value to true to enable insights or false to disable insights.
* **NotificationsEnabled**: bool: Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.

## Group_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.XRay/ResourcePolicyProperties
### Properties
* **BypassPolicyLockoutCheck**: bool (WriteOnly): A flag to indicate whether to bypass the resource policy lockout safety check
* **PolicyDocument**: string (Required): The resource policy document, which can be up to 5kb in size.
* **PolicyName**: string (Required, Identifier): The name of the resource policy. Must be unique within a specific AWS account.

## AWS.XRay/SamplingRuleProperties
### Properties
* **RuleARN**: string (ReadOnly, Identifier)
* **RuleName**: string
* **SamplingRule**: [SamplingRule](#samplingrule)
* **SamplingRuleRecord**: [SamplingRuleRecord](#samplingrulerecord)
* **SamplingRuleUpdate**: [SamplingRuleUpdate](#samplingruleupdate)
* **Tags**: [SamplingRule_Tags](#samplingruletags)[]

## SamplingRule
### Properties
* **Attributes**: [SamplingRule_Attributes](#samplingruleattributes): Matches attributes derived from the request.
* **FixedRate**: int (Required): The percentage of matching requests to instrument, after the reservoir is exhausted.
* **Host**: string (Required): Matches the hostname from a request URL.
* **HTTPMethod**: string (Required): Matches the HTTP method from a request URL.
* **Priority**: int (Required): The priority of the sampling rule.
* **ReservoirSize**: int (Required): A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
* **ResourceARN**: string (Required): Matches the ARN of the AWS resource on which the service runs.
* **RuleARN**: string (Identifier)
* **RuleName**: string
* **ServiceName**: string (Required): Matches the name that the service uses to identify itself in segments.
* **ServiceType**: string (Required): Matches the origin that the service uses to identify its type in segments.
* **URLPath**: string (Required): Matches the path from a request URL.
* **Version**: int: The version of the sampling rule format (1)

## SamplingRule_Attributes
### Properties

## SamplingRuleRecord
### Properties
* **CreatedAt**: string: When the rule was created, in Unix time seconds.
* **ModifiedAt**: string: When the rule was modified, in Unix time seconds.
* **SamplingRule**: [SamplingRule](#samplingrule)

## SamplingRuleUpdate
### Properties
* **Attributes**: [SamplingRule_Attributes](#samplingruleattributes): Matches attributes derived from the request.
* **FixedRate**: int: The percentage of matching requests to instrument, after the reservoir is exhausted.
* **Host**: string: Matches the hostname from a request URL.
* **HTTPMethod**: string: Matches the HTTP method from a request URL.
* **Priority**: int: The priority of the sampling rule.
* **ReservoirSize**: int: A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
* **ResourceARN**: string: Matches the ARN of the AWS resource on which the service runs.
* **RuleARN**: string (Identifier)
* **RuleName**: string
* **ServiceName**: string: Matches the name that the service uses to identify itself in segments.
* **ServiceType**: string: Matches the origin that the service uses to identify its type in segments.
* **URLPath**: string: Matches the path from a request URL.

## SamplingRule_Attributes
### Properties

## SamplingRule_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

