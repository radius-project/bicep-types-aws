# AWS.Config @ default

## Resource AWS.Config/AggregationAuthorization@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/AggregationAuthorizationProperties](#awsconfigaggregationauthorizationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/ConfigRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigRuleProperties](#awsconfigconfigruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/ConfigurationAggregator@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigurationAggregatorProperties](#awsconfigconfigurationaggregatorproperties) (Identifier): properties of the resource

## Resource AWS.Config/ConfigurationRecorder@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigurationRecorderProperties](#awsconfigconfigurationrecorderproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/ConformancePack@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConformancePackProperties](#awsconfigconformancepackproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/Connector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConnectorProperties](#awsconfigconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/DeliveryChannel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/DeliveryChannelProperties](#awsconfigdeliverychannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/OrganizationConfigRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/OrganizationConfigRuleProperties](#awsconfigorganizationconfigruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/OrganizationConformancePack@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/OrganizationConformancePackProperties](#awsconfigorganizationconformancepackproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/RemediationConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/RemediationConfigurationProperties](#awsconfigremediationconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/StoredQuery@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/StoredQueryProperties](#awsconfigstoredqueryproperties) (Required, Identifier): properties of the resource

## AccountAggregationSource
### Properties
* **AccountIds**: string[] (Required)
* **AllAwsRegions**: bool
* **AwsRegions**: string[]

## AWS.Config/AggregationAuthorizationProperties
### Properties
* **AggregationAuthorizationArn**: string (ReadOnly): The ARN of the AggregationAuthorization.
* **AuthorizedAccountId**: string (Required, Identifier): The 12-digit account ID of the account authorized to aggregate data.
* **AuthorizedAwsRegion**: string (Required, Identifier): The region authorized to collect aggregated data.
* **Tags**: [Tag](#tag)[]: The tags for the AggregationAuthorization.

## AWS.Config/ConfigRuleProperties
### Properties
* **Arn**: string (ReadOnly)
* **Compliance**: [ConfigRule_Compliance](#configrulecompliance): Indicates whether an AWS resource or CC rule is compliant and provides the number of contributors that affect the compliance.
* **ConfigRuleId**: string (ReadOnly)
* **ConfigRuleName**: string (Identifier): A name for the CC rule. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the rule name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
* **Description**: string: The description that you provide for the CC rule.
* **EvaluationModes**: [EvaluationModeConfiguration](#evaluationmodeconfiguration)[]: The modes the CC rule can be evaluated in. The valid values are distinct objects. By default, the value is Detective evaluation mode only.
* **InputParameters**: [ConfigRule_InputParameters](#configruleinputparameters) | string: A string, in JSON format, that is passed to the CC rule Lambda function.
* **MaximumExecutionFrequency**: string: The maximum frequency with which CC runs evaluations for a rule. You can specify a value for ``MaximumExecutionFrequency`` when:
  +  You are using an AWS managed rule that is triggered at a periodic frequency.
  +  Your custom rule is triggered when CC delivers the configuration snapshot. For more information, see [ConfigSnapshotDeliveryProperties](https://docs.aws.amazon.com/config/latest/APIReference/API_ConfigSnapshotDeliveryProperties.html).
  
  By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the ``MaximumExecutionFrequency`` parameter.
* **Scope**: [Scope](#scope): Defines which resources can trigger an evaluation for the rule. The scope can include one or more resource types, a combination of one resource type and one resource ID, or a combination of a tag key and value. Specify a scope to constrain the resources that can trigger an evaluation for the rule. If you do not specify a scope, evaluations are triggered when any resource in the recording group changes.
* **Source**: [Source](#source) (Required): Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.

## AWS.Config/ConfigurationAggregatorProperties
### Properties
* **AccountAggregationSources**: [AccountAggregationSource](#accountaggregationsource)[]
* **ConfigurationAggregatorArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the aggregator.
* **ConfigurationAggregatorName**: string (Identifier): The name of the aggregator.
* **OrganizationAggregationSource**: [OrganizationAggregationSource](#organizationaggregationsource)
* **Tags**: [Tag](#tag)[]: The tags for the configuration aggregator.

## AWS.Config/ConfigurationRecorderProperties
### Properties
* **Name**: string (Identifier): The name of the configuration recorder. By default, AWS Config assigns the name "default" when creating the configuration recorder. To change the configuration recorder name, you must use the DeleteConfigurationRecorder action to delete your current configuration recorder, and then you must use the PutConfigurationRecorder command to create a configuration recorder that has the desired name.
* **RecordingGroup**: [RecordingGroup](#recordinggroup): Specifies which resource types are in scope for the configuration recorder to record.
* **RecordingMode**: [RecordingMode](#recordingmode): Specifies the default recording frequency for the configuration recorder.
* **ResourceARN**: string (ReadOnly): Returns the Amazon Resource Name (ARN) for the Configuration Recorder.
* **RoleARN**: string (Required): The Amazon Resource Name (ARN) of the role that allows AWS Config to read S3 objects.
* **StartedOnCreate**: bool (WriteOnly): Defaults to 'true'. Controls whether the recorder starts recording after the create operation. Set this to 'false' for development and testing purposes.

## AWS.Config/ConformancePackProperties
### Properties
* **ConformancePackArn**: string (ReadOnly): Amazon Resource Name (ARN) of the conformance pack.
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **ConformancePackName**: string (Required, Identifier): Name of the conformance pack which will be assigned as the unique identifier.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for delivery S3 bucket.
* **Tags**: [Tag](#tag)[]: The tags for the conformance pack.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
* **TemplateSSMDocumentDetails**: [ConformancePack_TemplateSSMDocumentDetails](#conformancepacktemplatessmdocumentdetails) (WriteOnly): The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

## AWS.Config/ConnectorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the connector.
* **ConnectorConfiguration**: [ConnectorConfiguration](#connectorconfiguration) (Required): The configuration for the connector that specifies the third-party cloud provider connection details.
* **CreatedTime**: string (ReadOnly): The time at which the connector was created.
* **Name**: string (ReadOnly): The name of the connector. AWS Config automatically assigns the name when creating the Connector.
* **Tags**: [Tag](#tag)[]: The tags for the connector.

## AWS.Config/DeliveryChannelProperties
### Properties
* **ConfigSnapshotDeliveryProperties**: [ConfigSnapshotDeliveryProperties](#configsnapshotdeliveryproperties): The options for how often AWS Config delivers configuration snapshots to the Amazon S3 bucket.
* **Name**: string (Identifier): The name of the delivery channel. By default, AWS Config assigns the name "default" when creating the delivery channel. To change the delivery channel name, you must use the DeleteDeliveryChannel action to delete your current delivery channel, and then you must use the PutDeliveryChannel command to create a delivery channel that has the desired name.
* **S3BucketName**: string (Required): The name of the Amazon S3 bucket to which AWS Config delivers configuration snapshots and configuration history files.
* **S3KeyPrefix**: string: The prefix for the specified Amazon S3 bucket.
* **S3KmsKeyArn**: string: The Amazon Resource Name (ARN) of the AWS Key Management Service (AWS KMS ) AWS KMS key (KMS key) used to encrypt objects delivered by AWS Config. Must belong to the same Region as the destination S3 bucket.
* **SnsTopicARN**: string: The Amazon Resource Name (ARN) of the Amazon SNS topic to which AWS Config sends notifications about configuration changes.

## AWS.Config/OrganizationConfigRuleProperties
### Properties
* **ExcludedAccounts**: string[]: A comma-separated list of accounts that you want to exclude from an organization AWS Config rule.
* **OrganizationConfigRuleArn**: string (ReadOnly): The Amazon Resource Name (ARN) of an organization AWS Config rule.
* **OrganizationConfigRuleName**: string (Required, Identifier): The name that you assign to an organization AWS Config rule. Required.
* **OrganizationCustomPolicyRuleMetadata**: [OrganizationCustomPolicyRuleMetadata](#organizationcustompolicyrulemetadata): This object specifies metadata for your organization's AWS Config Custom Policy rule.
* **OrganizationCustomRuleMetadata**: [OrganizationCustomRuleMetadata](#organizationcustomrulemetadata): This object specifies organization custom rule metadata such as resource type, resource ID of AWS resource, Lambda function ARN, and organization trigger types that trigger AWS Config to evaluate your AWS resources against a rule.
* **OrganizationManagedRuleMetadata**: [OrganizationManagedRuleMetadata](#organizationmanagedrulemetadata): This object specifies organization managed rule metadata such as resource type and ID of AWS resource along with the rule identifier.

## AWS.Config/OrganizationConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for the delivery S3 bucket.
* **ExcludedAccounts**: string[]: A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
* **OrganizationConformancePackArn**: string (ReadOnly): Amazon Resource Name (ARN) of the organization conformance pack.
* **OrganizationConformancePackName**: string (Required, Identifier): The name of the organization conformance pack.
* **Tags**: [Tag](#tag)[]: The tags for the organization conformance pack.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body.

## AWS.Config/RemediationConfigurationProperties
### Properties
* **Automatic**: bool
* **ConfigRuleName**: string (Required, Identifier)
* **ExecutionControls**: [ExecutionControls](#executioncontrols)
* **MaximumAutomaticAttempts**: int
* **Parameters**: [RemediationConfiguration_Parameters](#remediationconfigurationparameters)
* **ResourceType**: string
* **RetryAttemptSeconds**: int
* **TargetId**: string (Required)
* **TargetType**: string (Required)
* **TargetVersion**: string

## AWS.Config/StoredQueryProperties
### Properties
* **QueryArn**: string (ReadOnly)
* **QueryDescription**: string
* **QueryExpression**: string (Required)
* **QueryId**: string (ReadOnly)
* **QueryName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags for the stored query.

## AzureConnectorConfiguration
### Properties
* **ClientIdentifier**: string (Required): The Azure client (application) identifier.
* **TenantIdentifier**: string (Required): The Azure tenant identifier.

## ConfigRule_Compliance
### Properties
* **Type**: string (ReadOnly): Compliance type determined by the Config rule

## ConfigSnapshotDeliveryProperties
### Properties
* **DeliveryFrequency**: string: The frequency with which AWS Config delivers configuration snapshots.

## ConformancePack_TemplateSSMDocumentDetails
### Properties
* **DocumentName**: string
* **DocumentVersion**: string

## ConformancePackInputParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## ConformancePackInputParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## ConnectorConfiguration
### Properties
* **Azure**: [AzureConnectorConfiguration](#azureconnectorconfiguration): The configuration for connecting to Microsoft Azure.

## CustomPolicyDetails
### Properties
* **EnableDebugLogDelivery**: bool: The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.
* **PolicyRuntime**: string: The runtime system for your CC Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).
* **PolicyText**: string (WriteOnly): The policy definition containing the logic for your CC Custom Policy rule.

## EvaluationModeConfiguration
### Properties
* **Mode**: string: The mode of an evaluation. The valid values are Detective or Proactive.

## ExclusionByResourceTypes
### Properties
* **ResourceTypes**: string[] (Required): A comma-separated list of resource types to exclude from recording by the configuration recorder.

## ExecutionControls
### Properties
* **SsmControls**: [SsmControls](#ssmcontrols)

## OrganizationAggregationSource
### Properties
* **AllAwsRegions**: bool
* **AwsRegions**: string[]
* **RoleArn**: string (Required)

## OrganizationCustomPolicyRuleMetadata
### Properties
* **DebugLogDeliveryAccounts**: string[]: A list of accounts that you can enable debug logging for your organization AWS Config Custom Policy rule. 
* **Description**: string: The description that you provide for your organization AWS Config rule.
* **InputParameters**: string: A string, in JSON format, that is passed to your organization AWS Config Custom Policy rule.
* **OrganizationConfigRuleTriggerTypes**: string[]: The type of notification that initiates AWS Config to run an evaluation for a rule.
* **PolicyText**: string (Required): The policy definition containing the logic for your organization AWS Config Custom Policy rule.
* **ResourceIdScope**: string: The ID of the AWS resource that was evaluated.
* **ResourceTypesScope**: string[]: The type of the AWS resource that was evaluated.
* **Runtime**: string (Required): The runtime system for your organization AWS Config Custom Policy rules.
* **TagKeyScope**: string: One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
* **TagValueScope**: string: The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).

## OrganizationCustomRuleMetadata
### Properties
* **Description**: string: The description that you provide for your organization AWS Config rule.
* **InputParameters**: string: A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
* **LambdaFunctionArn**: string (Required): The lambda function ARN.
* **MaximumExecutionFrequency**: string: The maximum frequency with which AWS Config runs evaluations for a rule.Allowed values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.
* **OrganizationConfigRuleTriggerTypes**: string[] (Required): The type of notification that triggers AWS Config to run an evaluation for a rule. You can specify the following notification types:
* **ResourceIdScope**: string: The ID of the AWS resource that was evaluated.
* **ResourceTypesScope**: string[]: The type of the AWS resource that was evaluated.
* **TagKeyScope**: string: One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
* **TagValueScope**: string: The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).

## OrganizationManagedRuleMetadata
### Properties
* **Description**: string: The description that you provide for your organization AWS Config rule.
* **InputParameters**: string: A string, in JSON format, that is passed to your organization AWS Config rule Lambda function.
* **MaximumExecutionFrequency**: string: The maximum frequency with which AWS Config runs evaluations for a rule. Valid Values: One_Hour | Three_Hours | Six_Hours | Twelve_Hours | TwentyFour_Hours.
* **ResourceIdScope**: string: The ID of the AWS resource that was evaluated.
* **ResourceTypesScope**: string[]: The type of the AWS resource that was evaluated.
* **RuleIdentifier**: string (Required): Required. For organization config managed rules, a predefined identifier from a list. For example, IAM_PASSWORD_POLICY is a managed rule. 
* **TagKeyScope**: string: One part of a key-value pair that make up a tag. A key is a general label that acts like a category for more specific tag values.
* **TagValueScope**: string: The optional part of a key-value pair that make up a tag. A value acts as a descriptor within a tag category (key).



## RecordingGroup
### Properties
* **AllSupported**: bool: Specifies whether AWS Config records configuration changes for all supported resource types, excluding the global IAM resource types.
* **ExclusionByResourceTypes**: [ExclusionByResourceTypes](#exclusionbyresourcetypes): An object that specifies how AWS Config excludes resource types from being recorded by the configuration recorder.
* **IncludeGlobalResourceTypes**: bool: This option is a bundle which only applies to the global IAM resource types: IAM users, groups, roles, and customer managed policies. 
* **RecordingStrategy**: [RecordingStrategy](#recordingstrategy): An object that specifies the recording strategy for the configuration recorder.
* **ResourceTypes**: string[]: A comma-separated list that specifies which resource types AWS Config records.

## RecordingMode
### Properties
* **RecordingFrequency**: string (Required): The default recording frequency that AWS Config uses to record configuration changes.
* **RecordingModeOverrides**: [RecordingModeOverride](#recordingmodeoverride)[]: An array of 'RecordingModeOverride' objects for you to specify your overrides for the recording mode. 

## RecordingModeOverride
### Properties
* **Description**: string: A description that you provide for the override.
* **RecordingFrequency**: string (Required): The recording frequency that will be applied to all the resource types specified in the override.
* **ResourceTypes**: string[] (Required): A comma-separated list that specifies which resource types AWS Config includes in the override.

## RecordingStrategy
### Properties
* **UseOnly**: string (Required)

## RemediationConfiguration_Parameters
### Properties

## Scope
### Properties
* **ComplianceResourceId**: string: The ID of the only AWS resource that you want to trigger an evaluation for the rule. If you specify a resource ID, you must specify one resource type for ``ComplianceResourceTypes``.
* **ComplianceResourceTypes**: string[]: The resource types of only those AWS resources that you want to trigger an evaluation for the rule. You can only specify one type if you also specify a resource ID for ``ComplianceResourceId``.
* **TagKey**: string: The tag key that is applied to only those AWS resources that you want to trigger an evaluation for the rule.
* **TagValue**: string: The tag value applied to only those AWS resources that you want to trigger an evaluation for the rule. If you specify a value for ``TagValue``, you must also specify a value for ``TagKey``.

## Source
### Properties
* **CustomPolicyDetails**: [CustomPolicyDetails](#custompolicydetails): Provides the runtime system, policy definition, and whether debug logging is enabled. Required when owner is set to ``CUSTOM_POLICY``.
* **Owner**: string (Required): Indicates whether AWS or the customer owns and manages the CC rule.
 CC Managed Rules are predefined rules owned by AWS. For more information, see [Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_use-managed-rules.html) in the *developer guide*.
 CC Custom Rules are rules that you can develop either with Guard (``CUSTOM_POLICY``) or LAMlong (``CUSTOM_LAMBDA``). For more information, see [Custom Rules](https://docs.aws.amazon.com/config/latest/developerguide/evaluate-config_develop-rules.html) in the *developer guide*.
* **SourceDetails**: [SourceDetail](#sourcedetail)[]: Provides the source and the message types that cause CC to evaluate your AWS resources against a rule. It also provides the frequency with which you want CC to run evaluations for the rule if the trigger type is periodic.
 If the owner is set to ``CUSTOM_POLICY``, the only acceptable values for the CC rule trigger message type are ``ConfigurationItemChangeNotification`` and ``OversizedConfigurationItemChangeNotification``.
* **SourceIdentifier**: string: For CC Managed rules, a predefined identifier from a list. For example, ``IAM_PASSWORD_POLICY`` is a managed rule. To reference a managed rule, see [List of Managed Rules](https://docs.aws.amazon.com/config/latest/developerguide/managed-rules-by-aws-config.html).
 For CC Custom Lambda rules, the identifier is the Amazon Resource Name (ARN) of the rule's LAMlong function, such as ``arn:aws:lambda:us-east-2:123456789012:function:custom_rule_name``.
 For CC Custom Policy rules, this field will be ignored.

## SourceDetail
### Properties
* **EventSource**: string (Required): The source of the event, such as an AWS service, that triggers CC to evaluate your AWS resources.
* **MaximumExecutionFrequency**: string: The frequency at which you want CC to run evaluations for a custom rule with a periodic trigger. If you specify a value for ``MaximumExecutionFrequency``, then ``MessageType`` must use the ``ScheduledNotification`` value.
  By default, rules with a periodic trigger are evaluated every 24 hours. To change the frequency, specify a valid value for the ``MaximumExecutionFrequency`` parameter.
 Based on the valid value you choose, CC runs evaluations once for each valid value. For example, if you choose ``Three_Hours``, CC runs evaluations once every three hours. In this case, ``Three_Hours`` is the frequency of this rule.
* **MessageType**: string (Required): The type of notification that triggers CC to run an evaluation for a rule. You can specify the following notification types:
  +  ``ConfigurationItemChangeNotification`` - Triggers an evaluation when CC delivers a configuration item as a result of a resource change.
  +  ``OversizedConfigurationItemChangeNotification`` - Triggers an evaluation when CC delivers an oversized configuration item. CC may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
  +  ``ScheduledNotification`` - Triggers a periodic evaluation at the frequency specified for ``MaximumExecutionFrequency``.
  +  ``ConfigurationSnapshotDeliveryCompleted`` - Triggers a periodic evaluation when CC delivers a configuration snapshot.
  
 If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for ``ConfigurationItemChangeNotification`` and one for ``OversizedConfigurationItemChangeNotification``.

## SsmControls
### Properties
* **ConcurrentExecutionRatePercentage**: int
* **ErrorPercentage**: int

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

