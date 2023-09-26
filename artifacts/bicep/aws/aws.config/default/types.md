# AWS.Config @ default

## Resource AWS.Config/AggregationAuthorization@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/AggregationAuthorizationProperties](#awsconfigaggregationauthorizationproperties) (Required): properties of the resource

## Resource AWS.Config/ConfigRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigRuleProperties](#awsconfigconfigruleproperties) (Required): properties of the resource

## Resource AWS.Config/ConfigurationAggregator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConfigurationAggregatorProperties](#awsconfigconfigurationaggregatorproperties): properties of the resource

## Resource AWS.Config/ConformancePack@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/ConformancePackProperties](#awsconfigconformancepackproperties) (Required): properties of the resource

## Resource AWS.Config/OrganizationConformancePack@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/OrganizationConformancePackProperties](#awsconfigorganizationconformancepackproperties) (Required): properties of the resource

## Resource AWS.Config/StoredQuery@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Config/StoredQueryProperties](#awsconfigstoredqueryproperties) (Required): properties of the resource

## AWS.Config/AggregationAuthorizationProperties
### Properties
* **AggregationAuthorizationArn**: string (ReadOnly): The ARN of the AggregationAuthorization.
* **AuthorizedAccountId**: string (Required, Identifier): The 12-digit account ID of the account authorized to aggregate data.
* **AuthorizedAwsRegion**: string (Required, Identifier): The region authorized to collect aggregated data.
* **Tags**: [Tag](#tag)[]: The tags for the AggregationAuthorization.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Config/ConfigRuleProperties
### Properties
* **Arn**: string (ReadOnly): ARN generated for the AWS Config rule 
* **Compliance**: [ConfigRule_Compliance](#configrulecompliance): Compliance details of the Config rule
* **ConfigRuleId**: string (ReadOnly): ID of the config rule
* **ConfigRuleName**: string (Identifier): Name for the AWS Config rule
* **Description**: string: Description provided for the AWS Config rule
* **EvaluationModes**: [EvaluationModeConfiguration](#evaluationmodeconfiguration)[]: List of EvaluationModeConfiguration objects
* **InputParameters**: [ConfigRule_InputParameters](#configruleinputparameters) | string: JSON string passed the Lambda function
* **MaximumExecutionFrequency**: string: Maximum frequency at which the rule has to be evaluated
* **Scope**: [Scope](#scope): Scope to constrain which resources can trigger the AWS Config rule
* **Source**: [Source](#source) (Required): Source of events for the AWS Config rule

## ConfigRule_Compliance
### Properties
* **Type**: string (ReadOnly): Compliance type determined by the Config rule

## EvaluationModeConfiguration
### Properties
* **Mode**: string: Mode of evaluation of AWS Config rule

## Scope
### Properties
* **ComplianceResourceId**: string: ID of the only one resource which we want to trigger the rule
* **ComplianceResourceTypes**: string[]: Resource types of resources which we want to trigger the rule
* **TagKey**: string: Tag key applied only to resources which we want to trigger the rule
* **TagValue**: string: Tag value applied only to resources which we want to trigger the rule

## Source
### Properties
* **CustomPolicyDetails**: [CustomPolicyDetails](#custompolicydetails): Custom policy details when rule is custom owned
* **Owner**: string (Required): Owner of the config rule
* **SourceDetails**: [SourceDetail](#sourcedetail)[]: List of message types that can trigger the rule
* **SourceIdentifier**: string: Identifier for the source of events

## CustomPolicyDetails
### Properties
* **EnableDebugLogDelivery**: bool: Logging toggle for custom policy rule
* **PolicyRuntime**: string: Runtime system for custom policy rule
* **PolicyText**: string (WriteOnly): Policy definition containing logic for custom policy rule

## SourceDetail
### Properties
* **EventSource**: string (Required): Source of event that can trigger the rule
* **MaximumExecutionFrequency**: string: Frequency at which the rule has to be evaluated
* **MessageType**: string (Required): Notification type that can trigger the rule

## AWS.Config/ConfigurationAggregatorProperties
### Properties
* **AccountAggregationSources**: [AccountAggregationSource](#accountaggregationsource)[]
* **ConfigurationAggregatorArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the aggregator.
* **ConfigurationAggregatorName**: string (Identifier): The name of the aggregator.
* **OrganizationAggregationSource**: [OrganizationAggregationSource](#organizationaggregationsource)
* **Tags**: [Tag](#tag)[]: The tags for the configuration aggregator.

## AccountAggregationSource
### Properties
* **AccountIds**: string[] (Required)
* **AllAwsRegions**: bool
* **AwsRegions**: string[]

## OrganizationAggregationSource
### Properties
* **AllAwsRegions**: bool
* **AwsRegions**: string[]
* **RoleArn**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Config/ConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **ConformancePackName**: string (Required, Identifier): Name of the conformance pack which will be assigned as the unique identifier.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for delivery S3 bucket.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
* **TemplateSSMDocumentDetails**: [ConformancePack_TemplateSSMDocumentDetails](#conformancepacktemplatessmdocumentdetails) (WriteOnly): The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

## ConformancePackInputParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## ConformancePack_TemplateSSMDocumentDetails
### Properties
* **DocumentName**: string
* **DocumentVersion**: string

## AWS.Config/OrganizationConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for the delivery S3 bucket.
* **ExcludedAccounts**: string[]: A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
* **OrganizationConformancePackName**: string (Required, Identifier): The name of the organization conformance pack.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body.

## ConformancePackInputParameter
### Properties
* **ParameterName**: string (Required)
* **ParameterValue**: string (Required)

## AWS.Config/StoredQueryProperties
### Properties
* **QueryArn**: string (ReadOnly)
* **QueryDescription**: string
* **QueryExpression**: string (Required)
* **QueryId**: string (ReadOnly)
* **QueryName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags for the stored query.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

