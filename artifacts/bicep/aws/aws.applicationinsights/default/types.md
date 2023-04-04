# AWS.ApplicationInsights @ default

## Resource AWS.ApplicationInsights/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationInsights/ApplicationProperties](#awsapplicationinsightsapplicationproperties) (Required): properties of the resource

## AWS.ApplicationInsights/ApplicationProperties
### Properties
* **ApplicationARN**: string (ReadOnly, Identifier): The ARN of the ApplicationInsights application.
* **AutoConfigurationEnabled**: bool: If set to true, application will be configured with recommended monitoring configuration.
* **ComponentMonitoringSettings**: [ComponentMonitoringSetting](#componentmonitoringsetting)[]: The monitoring settings of the components.
* **CustomComponents**: [CustomComponent](#customcomponent)[]: The custom grouped components.
* **CWEMonitorEnabled**: bool: Indicates whether Application Insights can listen to CloudWatch events for the application resources.
* **GroupingType**: string: The grouping type of the application
* **LogPatternSets**: [LogPatternSet](#logpatternset)[]: The log pattern sets.
* **OpsCenterEnabled**: bool: When set to true, creates opsItems for any problems detected on an application.
* **OpsItemSNSTopicArn**: string: The SNS topic provided to Application Insights that is associated to the created opsItem.
* **ResourceGroupName**: string (Required): The name of the resource group.
* **Tags**: [Tag](#tag)[]: The tags of Application Insights application.

## ComponentMonitoringSetting
### Properties

## CustomComponent
### Properties
* **ComponentName**: string (Required): The name of the component.
* **ResourceList**: string[] (Required): The list of resource ARNs that belong to the component.

## LogPatternSet
### Properties
* **LogPatterns**: [LogPattern](#logpattern)[] (Required): The log patterns of a set.
* **PatternSetName**: string (Required): The name of the log pattern set.

## LogPattern
### Properties
* **Pattern**: string (Required): The log pattern.
* **PatternName**: string (Required): The name of the log pattern.
* **Rank**: int (Required): Rank of the log pattern.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

