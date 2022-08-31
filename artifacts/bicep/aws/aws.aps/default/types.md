# AWS.APS @ default

## Resource AWS.APS/RuleGroupsNamespace@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.APS/RuleGroupsNamespaceProperties](#awsapsrulegroupsnamespaceproperties): properties of the resource

## Resource AWS.APS/Workspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.APS/WorkspaceProperties](#awsapsworkspaceproperties): properties of the resource

## AWS.APS/RuleGroupsNamespaceProperties
### Properties
* **Arn**: string (ReadOnly): The RuleGroupsNamespace ARN.
* **Data**: string: The RuleGroupsNamespace data.
* **Name**: string: The RuleGroupsNamespace name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Workspace**: string: Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.APS/WorkspaceProperties
### Properties
* **AlertManagerDefinition**: string: The AMP Workspace alert manager definition data
* **Alias**: string: AMP Workspace alias.
* **Arn**: string (ReadOnly): Workspace arn.
* **PrometheusEndpoint**: string (ReadOnly): AMP Workspace prometheus endpoint
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WorkspaceId**: string (ReadOnly): Required to identify a specific APS Workspace.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

