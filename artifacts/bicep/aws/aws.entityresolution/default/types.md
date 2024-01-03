# AWS.EntityResolution @ default

## Resource AWS.EntityResolution/IdMappingWorkflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/IdMappingWorkflowProperties](#awsentityresolutionidmappingworkflowproperties) (Required): properties of the resource

## Resource AWS.EntityResolution/MatchingWorkflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/MatchingWorkflowProperties](#awsentityresolutionmatchingworkflowproperties) (Required): properties of the resource

## Resource AWS.EntityResolution/SchemaMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/SchemaMappingProperties](#awsentityresolutionschemamappingproperties) (Required): properties of the resource

## AWS.EntityResolution/IdMappingWorkflowProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **Description**: string: The description of the IdMappingWorkflow
* **IdMappingTechniques**: [IdMappingTechniques](#idmappingtechniques) (Required)
* **InputSourceConfig**: [IdMappingWorkflowInputSource](#idmappingworkflowinputsource)[] (Required)
* **OutputSourceConfig**: [IdMappingWorkflowOutputSource](#idmappingworkflowoutputsource)[] (Required)
* **RoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)
* **WorkflowArn**: string (ReadOnly)
* **WorkflowName**: string (Required, Identifier): The name of the IdMappingWorkflow

## IdMappingTechniques
### Properties
* **IdMappingType**: string
* **ProviderProperties**: [ProviderProperties](#providerproperties)

## ProviderProperties
### Properties
* **IntermediateSourceConfiguration**: [IntermediateSourceConfiguration](#intermediatesourceconfiguration)
* **ProviderConfiguration**: [IdMappingWorkflow_ProviderConfiguration](#idmappingworkflowproviderconfiguration): Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
* **ProviderServiceArn**: string (Required): Arn of the Provider Service being used.

## IntermediateSourceConfiguration
### Properties
* **IntermediateS3Path**: string (Required): The s3 path that would be used to stage the intermediate data being generated during workflow execution.

## IdMappingWorkflow_ProviderConfiguration
### Properties

## IdMappingWorkflowInputSource
### Properties
* **InputSourceARN**: string (Required): An Glue table ARN for the input source table
* **SchemaArn**: string (Required)

## IdMappingWorkflowOutputSource
### Properties
* **KMSArn**: string
* **OutputS3Path**: string (Required): The S3 path to which Entity Resolution will write the output table

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.EntityResolution/MatchingWorkflowProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **Description**: string: The description of the MatchingWorkflow
* **InputSourceConfig**: [InputSource](#inputsource)[] (Required)
* **OutputSourceConfig**: [OutputSource](#outputsource)[] (Required)
* **ResolutionTechniques**: [ResolutionTechniques](#resolutiontechniques) (Required)
* **RoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)
* **WorkflowArn**: string (ReadOnly)
* **WorkflowName**: string (Required, Identifier): The name of the MatchingWorkflow

## InputSource
### Properties
* **ApplyNormalization**: bool
* **InputSourceARN**: string (Required): An Glue table ARN for the input source table
* **SchemaArn**: string (Required)

## OutputSource
### Properties
* **ApplyNormalization**: bool
* **KMSArn**: string
* **Output**: [OutputAttribute](#outputattribute)[] (Required)
* **OutputS3Path**: string (Required): The S3 path to which Entity Resolution will write the output table

## OutputAttribute
### Properties
* **Hashed**: bool
* **Name**: string (Required)

## ResolutionTechniques
### Properties
* **ProviderProperties**: [ProviderProperties](#providerproperties)
* **ResolutionType**: string
* **RuleBasedProperties**: [RuleBasedProperties](#rulebasedproperties)

## ProviderProperties
### Properties
* **IntermediateSourceConfiguration**: [IntermediateSourceConfiguration](#intermediatesourceconfiguration)
* **ProviderConfiguration**: [MatchingWorkflow_ProviderConfiguration](#matchingworkflowproviderconfiguration): Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
* **ProviderServiceArn**: string (Required): Arn of the Provider service being used.

## IntermediateSourceConfiguration
### Properties
* **IntermediateS3Path**: string (Required): The s3 path that would be used to stage the intermediate data being generated during workflow execution.

## MatchingWorkflow_ProviderConfiguration
### Properties

## RuleBasedProperties
### Properties
* **AttributeMatchingModel**: string (Required)
* **Rules**: [Rule](#rule)[] (Required)

## Rule
### Properties
* **MatchingKeys**: string[] (Required)
* **RuleName**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.EntityResolution/SchemaMappingProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **Description**: string: The description of the SchemaMapping
* **HasWorkflows**: bool (ReadOnly)
* **MappedInputFields**: [SchemaInputAttribute](#schemainputattribute)[] (Required): The SchemaMapping attributes input
* **SchemaArn**: string (ReadOnly)
* **SchemaName**: string (Required, Identifier): The name of the SchemaMapping
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## SchemaInputAttribute
### Properties
* **FieldName**: string (Required)
* **GroupName**: string
* **MatchKey**: string
* **SubType**: string: The subtype of the Attribute. Would be required only when type is PROVIDER_ID
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

