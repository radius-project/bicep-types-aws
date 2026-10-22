# AWS.APS @ default

## Resource AWS.APS/AnomalyDetector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/AnomalyDetectorProperties](#awsapsanomalydetectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.APS/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/ResourcePolicyProperties](#awsapsresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.APS/RuleGroupsNamespace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/RuleGroupsNamespaceProperties](#awsapsrulegroupsnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.APS/Scraper@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/ScraperProperties](#awsapsscraperproperties) (Required, Identifier): properties of the resource

## Resource AWS.APS/Workspace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APS/WorkspaceProperties](#awsapsworkspaceproperties) (Identifier): properties of the resource

## AnomalyDetectorConfiguration
### Properties
* **RandomCutForest**: [RandomCutForestConfiguration](#randomcutforestconfiguration) (Required)

## AWS.APS/AnomalyDetectorProperties
### Properties
* **Alias**: string (Required): The AnomalyDetector alias.
* **Arn**: string (ReadOnly, Identifier): The AnomalyDetector ARN.
* **Configuration**: [AnomalyDetectorConfiguration](#anomalydetectorconfiguration) (Required): Determines the anomaly detector's algorithm and its configuration.
* **EvaluationIntervalInSeconds**: int: The AnomalyDetector period of detection and metric generation.
* **Labels**: [Label](#label)[]: An array of key-value pairs to provide meta-data.
* **MissingDataAction**: [MissingDataAction](#missingdataaction): The action to perform when running the expression returns no data.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Workspace**: string (Required): Required to identify a specific APS Workspace associated with this Anomaly Detector.

## AWS.APS/ResourcePolicyProperties
### Properties
* **PolicyDocument**: string (Required): The JSON to use as the Resource-based Policy.
* **WorkspaceArn**: string (Required, Identifier): The Arn of an APS Workspace that the PolicyDocument will be attached to.

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
* **RoleConfiguration**: [RoleConfiguration](#roleconfiguration)
* **ScrapeConfiguration**: [ScrapeConfiguration](#scrapeconfiguration) (Required)
* **ScraperId**: string (ReadOnly): Required to identify a specific scraper.
* **ScraperLoggingConfiguration**: [ScraperLoggingConfiguration](#scraperloggingconfiguration)
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
* **QueryLoggingConfiguration**: [QueryLoggingConfiguration](#queryloggingconfiguration)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WorkspaceConfiguration**: [WorkspaceConfiguration](#workspaceconfiguration)
* **WorkspaceId**: string (ReadOnly): Required to identify a specific APS Workspace.

## CloudWatchLogDestination
### Properties
* **LogGroupArn**: string: ARN of the CloudWatch log group

## CloudWatchLogDestination
### Properties
* **LogGroupArn**: string (Required): The ARN of the CloudWatch Logs log group

## ComponentConfig
### Properties
* **Options**: [Scraper_Options](#scraperoptions)

## Destination
### Properties
* **AmpConfiguration**: [Scraper_AmpConfiguration](#scraperampconfiguration): Configuration for Amazon Managed Prometheus metrics destination
* **CloudWatchConfiguration**: [Scraper_CloudWatchConfiguration](#scrapercloudwatchconfiguration): Configuration for CloudWatch metrics destination

## IgnoreNearExpected
### Properties
* **Amount**: int
* **Ratio**: int

## Label
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Label
### Properties
* **Name**: string (Required): Name of the label
* **Value**: string (Required): Value of the label

## LimitsPerLabelSet
### Properties
* **LabelSet**: [Label](#label)[] (Required): An array of series labels
* **Limits**: [LimitsPerLabelSetEntry](#limitsperlabelsetentry) (Required)

## LimitsPerLabelSetEntry
### Properties
* **MaxSeries**: int: The maximum number of active series that can be ingested for this label set

## LoggingConfiguration
### Properties
* **LogGroupArn**: string: CloudWatch log group ARN

## LoggingDestination
### Properties
* **CloudWatchLogs**: [CloudWatchLogDestination](#cloudwatchlogdestination) (Required)
* **Filters**: [LoggingFilter](#loggingfilter) (Required)

## LoggingFilter
### Properties
* **QspThreshold**: int (Required): Query logs with QSP above this limit are vended

## MissingDataAction
### Properties
* **MarkAsAnomaly**: bool
* **Skip**: bool

## QueryLoggingConfiguration
### Properties
* **Destinations**: [LoggingDestination](#loggingdestination)[] (Required): The destinations configuration for query logging

## RandomCutForestConfiguration
### Properties
* **IgnoreNearExpectedFromAbove**: [IgnoreNearExpected](#ignorenearexpected)
* **IgnoreNearExpectedFromBelow**: [IgnoreNearExpected](#ignorenearexpected)
* **Query**: string (Required)
* **SampleSize**: int
* **ShingleSize**: int

## RoleConfiguration
### Properties
* **SourceRoleArn**: string: IAM Role in source account
* **TargetRoleArn**: string: IAM Role in the target account

## ScrapeConfiguration
### Properties
* **ConfigurationBlob**: string (Required): Prometheus compatible scrape configuration in base64 encoded blob format

## Scraper_AmpConfiguration
### Properties
* **WorkspaceArn**: string (Required): ARN of an Amazon Managed Prometheus workspace

## Scraper_CloudWatchConfiguration
### Properties
* **DatasetArn**: string (Required): ARN of a CloudWatch dataset

## Scraper_EksConfiguration
### Properties
* **ClusterArn**: string (Required): ARN of an EKS cluster
* **SecurityGroupIds**: string[]: List of security group IDs
* **SubnetIds**: string[] (Required): List of subnet IDs

## Scraper_Options
### Properties

## Scraper_VpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required): List of security group IDs
* **SubnetIds**: string[] (Required): List of subnet IDs

## ScraperComponent
### Properties
* **Config**: [ComponentConfig](#componentconfig)
* **Type**: string (Required)

## ScraperLoggingConfiguration
### Properties
* **LoggingDestination**: [ScraperLoggingDestination](#scraperloggingdestination) (Required)
* **ScraperComponents**: [ScraperComponent](#scrapercomponent)[] (Required)

## ScraperLoggingDestination
### Properties
* **CloudWatchLogs**: [CloudWatchLogDestination](#cloudwatchlogdestination)

## Source
### Properties
* **EksConfiguration**: [Scraper_EksConfiguration](#scrapereksconfiguration): Configuration for EKS metrics source
* **VpcConfiguration**: [Scraper_VpcConfiguration](#scrapervpcconfiguration): Configuration for VPC metrics source

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

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## WorkspaceConfiguration
### Properties
* **LimitsPerLabelSets**: [LimitsPerLabelSet](#limitsperlabelset)[]: An array of label set and associated limits
* **OutOfOrderTimeWindowInSeconds**: int: The time window in seconds for accepting out-of-order samples
* **RetentionPeriodInDays**: int: How many days that metrics are retained in the workspace
* **RuleQueryOffsetInSeconds**: int: Duration in seconds to offset rule evaluation queries into the past

