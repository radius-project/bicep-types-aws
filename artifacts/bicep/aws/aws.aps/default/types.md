# AWS.APS @ default

## Resource AWS.APS/RuleGroupsNamespace@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.APS/RuleGroupsNamespaceProperties](#awsapsrulegroupsnamespaceproperties) (Required): properties of the resource

## Resource AWS.APS/Workspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.APS/WorkspaceProperties](#awsapsworkspaceproperties): properties of the resource

## AWS.APS/RuleGroupsNamespaceProperties
### Properties
* **Arn**: string (ReadOnly): The RuleGroupsNamespace ARN.
* **Data**: string (Required): The RuleGroupsNamespace data.
* **Name**: string (Required): The RuleGroupsNamespace name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Workspace**: string (Required): Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.APS/WorkspaceProperties
### Properties
* **AlertManagerDefinition**: string: The AMP Workspace alert manager definition data
* **Alias**: string: AMP Workspace alias.
* **Arn**: string (ReadOnly): Workspace arn.
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **PrometheusEndpoint**: string (ReadOnly): AMP Workspace prometheus endpoint
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WorkspaceId**: string (ReadOnly): Required to identify a specific APS Workspace.

## LoggingConfiguration
### Properties
* **LogGroupArn**: string: CloudWatch log group ARN

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

