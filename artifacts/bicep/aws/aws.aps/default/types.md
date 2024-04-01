# AWS.APS @ default

## Resource AWS.APS/RuleGroupsNamespace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/RuleGroupsNamespaceProperties](#awsapsrulegroupsnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.APS/Scraper@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/ScraperProperties](#awsapsscraperproperties) (Required, Identifier): properties of the resource

## Resource AWS.APS/Workspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/WorkspaceProperties](#awsapsworkspaceproperties) (Identifier): properties of the resource

## AWS.APS/RuleGroupsNamespaceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The RuleGroupsNamespace ARN.
* **Data**: string (Required): The RuleGroupsNamespace data.
* **Name**: string (Required): The RuleGroupsNamespace name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Workspace**: string (Required): Required to identify a specific APS Workspace associated with this RuleGroupsNamespace.

## AWS.APS/ScraperProperties
### Properties
* **Alias**: string: Scraper alias.
* **Arn**: string (ReadOnly, Identifier): Scraper ARN.
* **Destination**: [Destination](#destination) (Required)
* **RoleArn**: string (ReadOnly): IAM role ARN for the scraper.
* **ScrapeConfiguration**: [ScrapeConfiguration](#scrapeconfiguration) (Required)
* **ScraperId**: string (ReadOnly): Required to identify a specific scraper.
* **Source**: [Source](#source) (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.APS/WorkspaceProperties
### Properties
* **AlertManagerDefinition**: string: The AMP Workspace alert manager definition data
* **Alias**: string: AMP Workspace alias.
* **Arn**: string (ReadOnly, Identifier): Workspace arn.
* **KmsKeyArn**: string: KMS Key ARN used to encrypt and decrypt AMP workspace data.
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **PrometheusEndpoint**: string (ReadOnly): AMP Workspace prometheus endpoint
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WorkspaceId**: string (ReadOnly): Required to identify a specific APS Workspace.

## Destination
### Properties
* **AmpConfiguration**: [Scraper_AmpConfiguration](#scraperampconfiguration) (Required): Configuration for Amazon Managed Prometheus metrics destination

## LoggingConfiguration
### Properties
* **LogGroupArn**: string: CloudWatch log group ARN

## ScrapeConfiguration
### Properties
* **ConfigurationBlob**: string (Required): Prometheus compatible scrape configuration in base64 encoded blob format

## Scraper_AmpConfiguration
### Properties
* **WorkspaceArn**: string (Required): ARN of an Amazon Managed Prometheus workspace

## Scraper_EksConfiguration
### Properties
* **ClusterArn**: string (Required): ARN of an EKS cluster
* **SecurityGroupIds**: string[]: List of security group IDs
* **SubnetIds**: string[] (Required): List of subnet IDs

## Source
### Properties
* **EksConfiguration**: [Scraper_EksConfiguration](#scrapereksconfiguration) (Required): Configuration for EKS metrics source

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

