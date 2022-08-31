# AWS.XRay @ default

## Resource AWS.XRay/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.XRay/GroupProperties](#awsxraygroupproperties): properties of the resource

## Resource AWS.XRay/SamplingRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.XRay/SamplingRuleProperties](#awsxraysamplingruleproperties): properties of the resource

## AWS.XRay/GroupProperties
### Properties
* **FilterExpression**: string: The filter expression defining criteria by which to group traces.
* **GroupARN**: string (ReadOnly): The ARN of the group that was generated on creation.
* **GroupName**: string: The case-sensitive name of the new group. Names must be unique.
* **InsightsConfiguration**: [InsightsConfiguration](#insightsconfiguration)
* **Tags**: [Tags](#tags)

## InsightsConfiguration
### Properties
* **InsightsEnabled**: bool: Set the InsightsEnabled value to true to enable insights or false to disable insights.
* **NotificationsEnabled**: bool: Set the NotificationsEnabled value to true to enable insights notifications. Notifications can only be enabled on a group with InsightsEnabled set to true.

## Tags
### Properties

## AWS.XRay/SamplingRuleProperties
### Properties
* **RuleARN**: [RuleARN](#rulearn) (ReadOnly)
* **RuleName**: [RuleName](#rulename)
* **SamplingRule**: [SamplingRule](#samplingrule)
* **SamplingRuleRecord**: [SamplingRuleRecord](#samplingrulerecord)
* **SamplingRuleUpdate**: [SamplingRuleUpdate](#samplingruleupdate)
* **Tags**: [Tags](#tags)

## RuleARN
### Properties

## RuleName
### Properties

## SamplingRule
### Properties
* **Attributes**: [SamplingRule_Attributes](#samplingruleattributes): Matches attributes derived from the request.
* **FixedRate**: int: The percentage of matching requests to instrument, after the reservoir is exhausted.
* **Host**: string: Matches the hostname from a request URL.
* **HTTPMethod**: string: Matches the HTTP method from a request URL.
* **Priority**: int: The priority of the sampling rule.
* **ReservoirSize**: int: A fixed number of matching requests to instrument per second, prior to applying the fixed rate. The reservoir is not used directly by services, but applies to all services using the rule collectively.
* **ResourceARN**: string: Matches the ARN of the AWS resource on which the service runs.
* **RuleARN**: [RuleARN](#rulearn)
* **RuleName**: [RuleName](#rulename)
* **ServiceName**: string: Matches the name that the service uses to identify itself in segments.
* **ServiceType**: string: Matches the origin that the service uses to identify its type in segments.
* **URLPath**: string: Matches the path from a request URL.
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
* **RuleARN**: [RuleARN](#rulearn)
* **RuleName**: [RuleName](#rulename)
* **ServiceName**: string: Matches the name that the service uses to identify itself in segments.
* **ServiceType**: string: Matches the origin that the service uses to identify its type in segments.
* **URLPath**: string: Matches the path from a request URL.

## SamplingRule_Attributes
### Properties

## Tags
### Properties

