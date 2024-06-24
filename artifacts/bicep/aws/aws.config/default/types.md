# AWS.Config @ default

## Resource AWS.Config/AggregationAuthorization@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/AggregationAuthorizationProperties](#awsconfigaggregationauthorizationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/ConfigRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigRuleProperties](#awsconfigconfigruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/ConfigurationAggregator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigurationAggregatorProperties](#awsconfigconfigurationaggregatorproperties) (Identifier): properties of the resource

## Resource AWS.Config/ConformancePack@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConformancePackProperties](#awsconfigconformancepackproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/OrganizationConformancePack@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/OrganizationConformancePackProperties](#awsconfigorganizationconformancepackproperties) (Required, Identifier): properties of the resource

## Resource AWS.Config/StoredQuery@default
* **Valid Scope(s)**: Unknown
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
  The scope can be empty.
* **Source**: [Source](#source) (Required): Provides the rule owner (```` for managed rules, ``CUSTOM_POLICY`` for Custom Policy rules, and ``CUSTOM_LAMBDA`` for Custom Lambda rules), the rule identifier, and the notifications that cause the function to evaluate your AWS resources.

## AWS.Config/ConfigurationAggregatorProperties
### Properties
* **AccountAggregationSources**: [AccountAggregationSource](#accountaggregationsource)[]
* **ConfigurationAggregatorArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the aggregator.
* **ConfigurationAggregatorName**: string (Identifier): The name of the aggregator.
* **OrganizationAggregationSource**: [OrganizationAggregationSource](#organizationaggregationsource)
* **Tags**: [Tag](#tag)[]: The tags for the configuration aggregator.

## AWS.Config/ConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **ConformancePackName**: string (Required, Identifier): Name of the conformance pack which will be assigned as the unique identifier.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for delivery S3 bucket.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
* **TemplateSSMDocumentDetails**: [ConformancePack_TemplateSSMDocumentDetails](#conformancepacktemplatessmdocumentdetails) (WriteOnly): The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

## AWS.Config/OrganizationConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for the delivery S3 bucket.
* **ExcludedAccounts**: string[]: A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
* **OrganizationConformancePackName**: string (Required, Identifier): The name of the organization conformance pack.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body.

## AWS.Config/StoredQueryProperties
### Properties
* **QueryArn**: string (ReadOnly)
* **QueryDescription**: string
* **QueryExpression**: string (Required)
* **QueryId**: string (ReadOnly)
* **QueryName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags for the stored query.

## ConfigRule_Compliance
### Properties
* **Type**: string (ReadOnly): Compliance type determined by the Config rule

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

## CustomPolicyDetails
### Properties
* **EnableDebugLogDelivery**: bool: The boolean expression for enabling debug logging for your CC Custom Policy rule. The default value is ``false``.
* **PolicyRuntime**: string: The runtime system for your CC Custom Policy rule. Guard is a policy-as-code language that allows you to write policies that are enforced by CC Custom Policy rules. For more information about Guard, see the [Guard GitHub Repository](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-guard).
* **PolicyText**: string (WriteOnly): The policy definition containing the logic for your CC Custom Policy rule.

## EvaluationModeConfiguration
### Properties
* **Mode**: string: The mode of an evaluation. The valid values are Detective or Proactive.

## OrganizationAggregationSource
### Properties
* **AllAwsRegions**: bool
* **AwsRegions**: string[]
* **RoleArn**: string (Required)

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
  +   ``ConfigurationItemChangeNotification`` - Triggers an evaluation when CC delivers a configuration item as a result of a resource change.
  +   ``OversizedConfigurationItemChangeNotification`` - Triggers an evaluation when CC delivers an oversized configuration item. CC may generate this notification type when a resource changes and the notification exceeds the maximum size allowed by Amazon SNS.
  +   ``ScheduledNotification`` - Triggers a periodic evaluation at the frequency specified for ``MaximumExecutionFrequency``.
  +   ``ConfigurationSnapshotDeliveryCompleted`` - Triggers a periodic evaluation when CC delivers a configuration snapshot.
  
 If you want your custom rule to be triggered by configuration changes, specify two SourceDetail objects, one for ``ConfigurationItemChangeNotification`` and one for ``OversizedConfigurationItemChangeNotification``.

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
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

