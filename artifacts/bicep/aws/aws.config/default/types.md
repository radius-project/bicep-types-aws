# AWS.Config @ default

## Resource AWS.Config/AggregationAuthorization@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Config/AggregationAuthorizationProperties](#awsconfigaggregationauthorizationproperties): properties of the resource

## Resource AWS.Config/ConfigurationAggregator@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Config/ConfigurationAggregatorProperties](#awsconfigconfigurationaggregatorproperties): properties of the resource

## Resource AWS.Config/ConformancePack@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Config/ConformancePackProperties](#awsconfigconformancepackproperties): properties of the resource

## Resource AWS.Config/OrganizationConformancePack@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Config/OrganizationConformancePackProperties](#awsconfigorganizationconformancepackproperties): properties of the resource

## Resource AWS.Config/StoredQuery@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Config/StoredQueryProperties](#awsconfigstoredqueryproperties): properties of the resource

## AWS.Config/AggregationAuthorizationProperties
### Properties
* **AggregationAuthorizationArn**: string (ReadOnly): The ARN of the AggregationAuthorization.
* **AuthorizedAccountId**: string: The 12-digit account ID of the account authorized to aggregate data.
* **AuthorizedAwsRegion**: string: The region authorized to collect aggregated data.
* **Tags**: [Tag](#tag)[]: The tags for the AggregationAuthorization.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Config/ConfigurationAggregatorProperties
### Properties
* **AccountAggregationSources**: [AccountAggregationSource](#accountaggregationsource)[]
* **ConfigurationAggregatorArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the aggregator.
* **ConfigurationAggregatorName**: string: The name of the aggregator.
* **OrganizationAggregationSource**: [OrganizationAggregationSource](#organizationaggregationsource)
* **Tags**: [Tag](#tag)[]: The tags for the configuration aggregator.

## AccountAggregationSource
### Properties
* **AccountIds**: string[]
* **AllAwsRegions**: bool
* **AwsRegions**: string[]

## OrganizationAggregationSource
### Properties
* **AllAwsRegions**: bool
* **AwsRegions**: string[]
* **RoleArn**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Config/ConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **ConformancePackName**: string: Name of the conformance pack which will be assigned as the unique identifier.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for delivery S3 bucket.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body. You can only specify one of the template body or template S3Uri fields.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body which points to the conformance pack template that is located in an Amazon S3 bucket. You can only specify one of the template body or template S3Uri fields.
* **TemplateSSMDocumentDetails**: [ConformancePack_TemplateSSMDocumentDetails](#conformancepacktemplatessmdocumentdetails) (WriteOnly): The TemplateSSMDocumentDetails object contains the name of the SSM document and the version of the SSM document.

## ConformancePackInputParameter
### Properties
* **ParameterName**: [ParameterName](#parametername)
* **ParameterValue**: [ParameterValue](#parametervalue)

## ParameterName
### Properties

## ParameterValue
### Properties

## ConformancePack_TemplateSSMDocumentDetails
### Properties
* **DocumentName**: string
* **DocumentVersion**: string

## AWS.Config/OrganizationConformancePackProperties
### Properties
* **ConformancePackInputParameters**: [ConformancePackInputParameter](#conformancepackinputparameter)[]: A list of ConformancePackInputParameter objects.
* **DeliveryS3Bucket**: string: AWS Config stores intermediate files while processing conformance pack template.
* **DeliveryS3KeyPrefix**: string: The prefix for the delivery S3 bucket.
* **ExcludedAccounts**: [AccountId](#accountid)[]: A list of AWS accounts to be excluded from an organization conformance pack while deploying a conformance pack.
* **OrganizationConformancePackName**: string: The name of the organization conformance pack.
* **TemplateBody**: string (WriteOnly): A string containing full conformance pack template body.
* **TemplateS3Uri**: string (WriteOnly): Location of file containing the template body.

## ConformancePackInputParameter
### Properties
* **ParameterName**: [ParameterName](#parametername)
* **ParameterValue**: [ParameterValue](#parametervalue)

## ParameterName
### Properties

## ParameterValue
### Properties

## AccountId
### Properties

## AWS.Config/StoredQueryProperties
### Properties
* **QueryArn**: string (ReadOnly)
* **QueryDescription**: string
* **QueryExpression**: string
* **QueryId**: string (ReadOnly)
* **QueryName**: string
* **Tags**: [Tag](#tag)[]: The tags for the stored query.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

