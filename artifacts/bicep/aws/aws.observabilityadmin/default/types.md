# AWS.ObservabilityAdmin @ default

## Resource AWS.ObservabilityAdmin/DatasetIntegration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/DatasetIntegrationProperties](#awsobservabilityadmindatasetintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ObservabilityAdmin/OrganizationCentralizationRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/OrganizationCentralizationRuleProperties](#awsobservabilityadminorganizationcentralizationruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.ObservabilityAdmin/OrganizationTelemetryRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/OrganizationTelemetryRuleProperties](#awsobservabilityadminorganizationtelemetryruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.ObservabilityAdmin/S3TableIntegration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/S3TableIntegrationProperties](#awsobservabilityadmins3tableintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ObservabilityAdmin/TelemetryEnrichment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/TelemetryEnrichmentProperties](#awsobservabilityadmintelemetryenrichmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.ObservabilityAdmin/TelemetryPipelines@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/TelemetryPipelinesProperties](#awsobservabilityadmintelemetrypipelinesproperties) (Required, Identifier): properties of the resource

## Resource AWS.ObservabilityAdmin/TelemetryRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ObservabilityAdmin/TelemetryRuleProperties](#awsobservabilityadmintelemetryruleproperties) (Required, Identifier): properties of the resource

## ActionCondition
### Properties
* **Action**: string

## ActionCondition
### Properties
* **Action**: string

## AdvancedEventSelector
### Properties
* **FieldSelectors**: [AdvancedFieldSelector](#advancedfieldselector)[] (Required): Contains all selector statements in an advanced event selector.
* **Name**: string: An optional descriptive name for the advanced event selector

## AdvancedEventSelector
### Properties
* **FieldSelectors**: [AdvancedFieldSelector](#advancedfieldselector)[] (Required): Contains all selector statements in an advanced event selector.
* **Name**: string: An optional descriptive name for the advanced event selector

## AdvancedFieldSelector
### Properties
* **EndsWith**: string[]: An operator that includes events that match the last few characters of the event record field specified as the value of Field.
* **Equals**: string[]: An operator that includes events that match the exact value of the event record field specified as the value of Field.
* **Field**: string: A field in a CloudTrail event record on which to filter events to be logged
* **NotEndsWith**: string[]: An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
* **NotEquals**: string[]: An operator that excludes events that match the exact value of the event record field specified as the value of Field.
* **NotStartsWith**: string[]: An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
* **StartsWith**: string[]: An operator that includes events that match the first few characters of the event record field specified as the value of Field.

## AdvancedFieldSelector
### Properties
* **EndsWith**: string[]: An operator that includes events that match the last few characters of the event record field specified as the value of Field.
* **Equals**: string[]: An operator that includes events that match the exact value of the event record field specified as the value of Field.
* **Field**: string: A field in a CloudTrail event record on which to filter events to be logged
* **NotEndsWith**: string[]: An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
* **NotEquals**: string[]: An operator that excludes events that match the exact value of the event record field specified as the value of Field.
* **NotStartsWith**: string[]: An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
* **StartsWith**: string[]: An operator that includes events that match the first few characters of the event record field specified as the value of Field.

## AWS.ObservabilityAdmin/DatasetIntegrationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the dataset integration.
* **CreatedAt**: string (ReadOnly): The ISO 8601 timestamp of when the dataset integration was created.
* **RoleArn**: string (Required): The ARN of the IAM role that the service assumes to forward telemetry to the customer's CloudWatch dataset. The role must live in the caller's account.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdatedAt**: string (ReadOnly): The ISO 8601 timestamp of when the dataset integration was last updated.

## AWS.ObservabilityAdmin/OrganizationCentralizationRuleProperties
### Properties
* **Rule**: [CentralizationRule](#centralizationrule) (Required)
* **RuleArn**: string (ReadOnly, Identifier)
* **RuleName**: string (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.ObservabilityAdmin/OrganizationTelemetryRuleProperties
### Properties
* **RegionStatuses**: [RegionStatus](#regionstatus)[] (ReadOnly): Per-region replication status of the rule
* **Rule**: [TelemetryRule](#telemetryrule) (Required)
* **RuleArn**: string (ReadOnly, Identifier): The arn of the organization telemetry rule
* **RuleName**: string (Required): The name of the organization telemetry rule
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## AWS.ObservabilityAdmin/S3TableIntegrationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the S3 Table Integration
* **Encryption**: [EncryptionConfig](#encryptionconfig) (Required)
* **LogSources**: [LogSource](#logsource)[] (ReadOnly): The CloudWatch Logs data sources to associate with the S3 Table Integration
* **RoleArn**: string (Required): The ARN of the role used to access the S3 Table Integration
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## AWS.ObservabilityAdmin/TelemetryEnrichmentProperties
### Properties
* **Scope**: string (Required, Identifier)
* **Status**: string (ReadOnly)

## AWS.ObservabilityAdmin/TelemetryPipelinesProperties
### Properties
* **Arn**: string (ReadOnly)
* **Configuration**: [TelemetryPipelineConfiguration](#telemetrypipelineconfiguration) (Required)
* **Name**: string
* **Pipeline**: [TelemetryPipeline](#telemetrypipeline) (ReadOnly)
* **PipelineIdentifier**: string (ReadOnly, Identifier)
* **Status**: string (ReadOnly)
* **StatusReason**: [TelemetryPipelineStatusReason](#telemetrypipelinestatusreason) (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## AWS.ObservabilityAdmin/TelemetryRuleProperties
### Properties
* **RegionStatuses**: [RegionStatus](#regionstatus)[] (ReadOnly): Per-region replication status of the rule
* **Rule**: [TelemetryRule](#telemetryrule) (Required)
* **RuleArn**: string (ReadOnly, Identifier): The arn of the telemetry rule
* **RuleName**: string (Required): The name of the telemetry rule
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## CentralizationRule
### Properties
* **Destination**: [CentralizationRuleDestination](#centralizationruledestination) (Required)
* **Source**: [CentralizationRuleSource](#centralizationrulesource) (Required)

## CentralizationRuleDestination
### Properties
* **Account**: string
* **DestinationLogsConfiguration**: [DestinationLogsConfiguration](#destinationlogsconfiguration)
* **DestinationMetricsConfiguration**: [DestinationMetricsConfiguration](#destinationmetricsconfiguration)
* **Region**: string (Required)

## CentralizationRuleSource
### Properties
* **Regions**: string[] (Required)
* **Scope**: string
* **SourceLogsConfiguration**: [SourceLogsConfiguration](#sourcelogsconfiguration)
* **SourceMetricsConfiguration**: [SourceMetricsConfiguration](#sourcemetricsconfiguration)

## CloudtrailParameters
### Properties
* **AdvancedEventSelectors**: [AdvancedEventSelector](#advancedeventselector)[] (Required): Create fine-grained selectors for AWS CloudTrail management and data.

## CloudtrailParameters
### Properties
* **AdvancedEventSelectors**: [AdvancedEventSelector](#advancedeventselector)[] (Required): Create fine-grained selectors for AWS CloudTrail management and data.

## Condition
### Properties
* **ActionCondition**: [ActionCondition](#actioncondition)
* **LabelNameCondition**: [LabelNameCondition](#labelnamecondition)

## Condition
### Properties
* **ActionCondition**: [ActionCondition](#actioncondition)
* **LabelNameCondition**: [LabelNameCondition](#labelnamecondition)

## DestinationLogsConfiguration
### Properties
* **BackupConfiguration**: [LogsBackupConfiguration](#logsbackupconfiguration)
* **LogGroupNameConfiguration**: [LogGroupNameConfiguration](#loggroupnameconfiguration)
* **LogsEncryptionConfiguration**: [LogsEncryptionConfiguration](#logsencryptionconfiguration)
* **TagPropagationConfiguration**: [TagPropagationConfiguration](#tagpropagationconfiguration)

## DestinationMetricsConfiguration
### Properties
* **BackupConfiguration**: [MetricsBackupConfiguration](#metricsbackupconfiguration)

## ELBLoadBalancerLoggingParameters
### Properties
* **FieldDelimiter**: string: A delimiter to delineate log fields
* **OutputFormat**: string

## ELBLoadBalancerLoggingParameters
### Properties
* **FieldDelimiter**: string: A delimiter to delineate log fields
* **OutputFormat**: string

## EncryptionConfig
### Properties
* **KmsKeyArn**: string: The ARN of the KMS key used to encrypt the S3 Table Integration
* **SseAlgorithm**: string (Required): The server-side encryption algorithm used to encrypt the S3 Table(s) data

## FieldToMatch
### Properties
* **Method**: string: The method with which to match this rule.
* **QueryString**: string: The query string to find the resource to match this field to.
* **SingleHeader**: [SingleHeader](#singleheader)
* **UriPath**: string: This is the URI path to match this rule to.

## FieldToMatch
### Properties
* **Method**: string: The method with which to match this rule.
* **QueryString**: string: The query string to find the resource to match this field to.
* **SingleHeader**: [SingleHeader](#singleheader)
* **UriPath**: string: This is the URI path to match this rule to.

## Filter
### Properties
* **Behavior**: string
* **Conditions**: [Condition](#condition)[]
* **Requirement**: string

## Filter
### Properties
* **Behavior**: string
* **Conditions**: [Condition](#condition)[]
* **Requirement**: string

## LabelNameCondition
### Properties
* **LabelName**: string: The label name of the condition.

## LabelNameCondition
### Properties
* **LabelName**: string: The label name of the condition.

## LoggingFilter
### Properties
* **DefaultBehavior**: string
* **Filters**: [Filter](#filter)[]

## LoggingFilter
### Properties
* **DefaultBehavior**: string
* **Filters**: [Filter](#filter)[]

## LogGroupNameConfiguration
### Properties
* **LogGroupNamePattern**: string (Required)

## LogsBackupConfiguration
### Properties
* **KmsKeyArn**: string
* **Region**: string (Required)

## LogsEncryptionConfiguration
### Properties
* **EncryptionConflictResolutionStrategy**: string
* **EncryptionScope**: string
* **EncryptionStrategy**: string (Required)
* **KmsKeyArn**: string

## LogSource
### Properties
* **Identifier**: string: The ID of the CloudWatch Logs data source association
* **Name**: string (Required): The name of the CloudWatch Logs data source
* **Type**: string (Required): The type of the CloudWatch Logs data source

## MetricsBackupConfiguration
### Properties
* **Region**: string (Required)

## MskMonitoringParameters
### Properties
* **EnhancedMonitoring**: string: The level of enhanced monitoring for the MSK cluster.

## MskMonitoringParameters
### Properties
* **EnhancedMonitoring**: string: The level of enhanced monitoring for the MSK cluster.

## OrganizationTelemetryRule_LogDeliveryParameters
### Properties
* **LogTypes**: string[]: Types of logs to deliver

## RegionStatus
### Properties
* **Region**: string: The AWS region code
* **RuleArn**: string (Identifier): The ARN of the rule in this region
* **Status**: string: The replication status of the rule in this region

## RegionStatus
### Properties
* **Region**: string: The AWS region code
* **RuleArn**: string (Identifier): The ARN of the rule in this region
* **Status**: string: The replication status of the rule in this region

## SingleHeader
### Properties
* **Name**: string (Required): The name of the header

## SingleHeader
### Properties
* **Name**: string (Required): The name of the header

## SourceLogsConfiguration
### Properties
* **DataSourceSelectionCriteria**: string
* **EncryptedLogGroupStrategy**: string (Required)
* **LogGroupSelectionCriteria**: string

## SourceMetricsConfiguration
### Properties
* **MetricsSelectionCriteria**: string

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

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TagPropagationConfiguration
### Properties
* **DestinationRoleArn**: string (Required): The ARN of the destination account IAM role used for tag propagation.
* **TagConflictResolutionStrategy**: string: The strategy to resolve tag conflicts during propagation.

## TelemetryDestinationConfiguration
### Properties
* **CloudtrailParameters**: [CloudtrailParameters](#cloudtrailparameters)
* **DestinationPattern**: string
* **DestinationType**: string
* **ELBLoadBalancerLoggingParameters**: [ELBLoadBalancerLoggingParameters](#elbloadbalancerloggingparameters)
* **KmsKeyArn**: string
* **LogDeliveryParameters**: [OrganizationTelemetryRule_LogDeliveryParameters](#organizationtelemetryrulelogdeliveryparameters): Parameters for log delivery configuration
* **MskMonitoringParameters**: [MskMonitoringParameters](#mskmonitoringparameters)
* **RetentionInDays**: int
* **VPCFlowLogParameters**: [VPCFlowLogParameters](#vpcflowlogparameters)
* **WAFLoggingParameters**: [WAFLoggingParameters](#wafloggingparameters)

## TelemetryDestinationConfiguration
### Properties
* **CloudtrailParameters**: [CloudtrailParameters](#cloudtrailparameters)
* **DestinationPattern**: string
* **DestinationType**: string
* **ELBLoadBalancerLoggingParameters**: [ELBLoadBalancerLoggingParameters](#elbloadbalancerloggingparameters)
* **KmsKeyArn**: string
* **LogDeliveryParameters**: [TelemetryRule_LogDeliveryParameters](#telemetryrulelogdeliveryparameters): Parameters for log delivery configuration
* **MskMonitoringParameters**: [MskMonitoringParameters](#mskmonitoringparameters)
* **RetentionInDays**: int
* **VPCFlowLogParameters**: [VPCFlowLogParameters](#vpcflowlogparameters)
* **WAFLoggingParameters**: [WAFLoggingParameters](#wafloggingparameters)

## TelemetryPipeline
### Properties
* **Arn**: string
* **Configuration**: [TelemetryPipelineConfiguration](#telemetrypipelineconfiguration)
* **CreatedTimeStamp**: int
* **LastUpdateTimeStamp**: int
* **Name**: string
* **Status**: string
* **StatusReason**: [TelemetryPipelineStatusReason](#telemetrypipelinestatusreason)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## TelemetryPipelineConfiguration
### Properties
* **Body**: string (Required)

## TelemetryPipelineStatusReason
### Properties
* **Description**: string

## TelemetryRule
### Properties
* **AllowFieldUpdates**: bool
* **AllRegions**: bool: When true, the rule is replicated to all supported regions
* **DestinationConfiguration**: [TelemetryDestinationConfiguration](#telemetrydestinationconfiguration)
* **Regions**: string[] (WriteOnly): List of AWS region codes where the rule should be replicated
* **ResourceType**: string (Required)
* **Scope**: string
* **SelectionCriteria**: string
* **TelemetrySourceTypes**: string[]
* **TelemetryType**: string (Required)

## TelemetryRule
### Properties
* **AllowFieldUpdates**: bool
* **AllRegions**: bool: When true, the rule is replicated to all supported regions
* **DestinationConfiguration**: [TelemetryDestinationConfiguration](#telemetrydestinationconfiguration)
* **Regions**: string[] (WriteOnly): List of AWS region codes where the rule should be replicated
* **ResourceType**: string (Required)
* **SelectionCriteria**: string
* **TelemetrySourceTypes**: string[]
* **TelemetryType**: string (Required)

## TelemetryRule_LogDeliveryParameters
### Properties
* **LogTypes**: string[]: Types of logs to deliver

## VPCFlowLogParameters
### Properties
* **LogFormat**: string: The fields to include in the flow log record. If you omit this parameter, the flow log is created using the default format.
* **MaxAggregationInterval**: int: The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. Default is 600s.
* **TrafficType**: string: The type of traffic captured for the flow log. Default is ALL

## VPCFlowLogParameters
### Properties
* **LogFormat**: string: The fields to include in the flow log record. If you omit this parameter, the flow log is created using the default format.
* **MaxAggregationInterval**: int: The maximum interval of time, in seconds, during which a flow of packets is captured and aggregated into a flow log record. Default is 600s.
* **TrafficType**: string: The type of traffic captured for the flow log. Default is ALL

## WAFLoggingParameters
### Properties
* **LoggingFilter**: [LoggingFilter](#loggingfilter)
* **LogType**: string
* **RedactedFields**: [FieldToMatch](#fieldtomatch)[]: Fields not to be included in the logs.

## WAFLoggingParameters
### Properties
* **LoggingFilter**: [LoggingFilter](#loggingfilter)
* **LogType**: string
* **RedactedFields**: [FieldToMatch](#fieldtomatch)[]: Fields not to be included in the logs.

