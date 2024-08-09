# AWS.EntityResolution @ default

## Resource AWS.EntityResolution/IdMappingWorkflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/IdMappingWorkflowProperties](#awsentityresolutionidmappingworkflowproperties) (Required, Identifier): properties of the resource

## Resource AWS.EntityResolution/IdNamespace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/IdNamespaceProperties](#awsentityresolutionidnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.EntityResolution/MatchingWorkflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/MatchingWorkflowProperties](#awsentityresolutionmatchingworkflowproperties) (Required, Identifier): properties of the resource

## Resource AWS.EntityResolution/PolicyStatement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/PolicyStatementProperties](#awsentityresolutionpolicystatementproperties) (Required, Identifier): properties of the resource

## Resource AWS.EntityResolution/SchemaMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EntityResolution/SchemaMappingProperties](#awsentityresolutionschemamappingproperties) (Required, Identifier): properties of the resource

## AWS.EntityResolution/IdMappingWorkflowProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **Description**: string: The description of the IdMappingWorkflow
* **IdMappingTechniques**: [IdMappingTechniques](#idmappingtechniques) (Required)
* **InputSourceConfig**: [IdMappingWorkflowInputSource](#idmappingworkflowinputsource)[] (Required)
* **OutputSourceConfig**: [IdMappingWorkflowOutputSource](#idmappingworkflowoutputsource)[]
* **RoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)
* **WorkflowArn**: string (ReadOnly)
* **WorkflowName**: string (Required, Identifier): The name of the IdMappingWorkflow

## AWS.EntityResolution/IdNamespaceProperties
### Properties
* **CreatedAt**: string (ReadOnly): The date and time when the IdNamespace was created
* **Description**: string
* **IdMappingWorkflowProperties**: [IdNamespaceIdMappingWorkflowProperties](#idnamespaceidmappingworkflowproperties)[]
* **IdNamespaceArn**: string (ReadOnly): The arn associated with the IdNamespace
* **IdNamespaceName**: string (Required, Identifier)
* **InputSourceConfig**: [IdNamespaceInputSource](#idnamespaceinputsource)[]
* **RoleArn**: string
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)
* **UpdatedAt**: string (ReadOnly): The date and time when the IdNamespace was updated

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

## AWS.EntityResolution/PolicyStatementProperties
### Properties
* **Action**: string[]
* **Arn**: string (Required, Identifier)
* **Condition**: string
* **Effect**: string
* **Principal**: string[]
* **StatementId**: string (Required, Identifier)

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

## IdMappingRuleBasedProperties
### Properties
* **AttributeMatchingModel**: string (Required)
* **RecordMatchingModel**: string (Required)
* **RuleDefinitionType**: string
* **Rules**: [Rule](#rule)[]

## IdMappingTechniques
### Properties
* **IdMappingType**: string
* **ProviderProperties**: [ProviderProperties](#providerproperties)
* **RuleBasedProperties**: [IdMappingRuleBasedProperties](#idmappingrulebasedproperties)

## IdMappingWorkflow_ProviderConfiguration
### Properties

## IdMappingWorkflowInputSource
### Properties
* **InputSourceARN**: string (Required): An Glue table ARN for the input source table, MatchingWorkflow arn or IdNamespace ARN
* **SchemaArn**: string
* **Type**: string

## IdMappingWorkflowOutputSource
### Properties
* **KMSArn**: string
* **OutputS3Path**: string (Required): The S3 path to which Entity Resolution will write the output table

## IdNamespace_ProviderConfiguration
### Properties

## IdNamespaceIdMappingWorkflowProperties
### Properties
* **IdMappingType**: string (Required)
* **ProviderProperties**: [NamespaceProviderProperties](#namespaceproviderproperties)
* **RuleBasedProperties**: [NamespaceRuleBasedProperties](#namespacerulebasedproperties)

## IdNamespaceInputSource
### Properties
* **InputSourceARN**: string (Required)
* **SchemaName**: string

## InputSource
### Properties
* **ApplyNormalization**: bool
* **InputSourceARN**: string (Required): An Glue table ARN for the input source table
* **SchemaArn**: string (Required)

## IntermediateSourceConfiguration
### Properties
* **IntermediateS3Path**: string (Required): The s3 path that would be used to stage the intermediate data being generated during workflow execution.

## IntermediateSourceConfiguration
### Properties
* **IntermediateS3Path**: string (Required): The s3 path that would be used to stage the intermediate data being generated during workflow execution.

## MatchingWorkflow_ProviderConfiguration
### Properties

## NamespaceProviderProperties
### Properties
* **ProviderConfiguration**: [IdNamespace_ProviderConfiguration](#idnamespaceproviderconfiguration): Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format.
* **ProviderServiceArn**: string (Required)

## NamespaceRuleBasedProperties
### Properties
* **AttributeMatchingModel**: string
* **RecordMatchingModels**: string[]
* **RuleDefinitionTypes**: string[]
* **Rules**: [Rule](#rule)[]

## OutputAttribute
### Properties
* **Hashed**: bool
* **Name**: string (Required)

## OutputSource
### Properties
* **ApplyNormalization**: bool
* **KMSArn**: string
* **Output**: [OutputAttribute](#outputattribute)[] (Required)
* **OutputS3Path**: string (Required): The S3 path to which Entity Resolution will write the output table

## ProviderProperties
### Properties
* **IntermediateSourceConfiguration**: [IntermediateSourceConfiguration](#intermediatesourceconfiguration)
* **ProviderConfiguration**: [IdMappingWorkflow_ProviderConfiguration](#idmappingworkflowproviderconfiguration): Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
* **ProviderServiceArn**: string (Required): Arn of the Provider Service being used.

## ProviderProperties
### Properties
* **IntermediateSourceConfiguration**: [IntermediateSourceConfiguration](#intermediatesourceconfiguration)
* **ProviderConfiguration**: [MatchingWorkflow_ProviderConfiguration](#matchingworkflowproviderconfiguration): Additional Provider configuration that would be required for the provider service. The Configuration must be in JSON string format
* **ProviderServiceArn**: string (Required): Arn of the Provider service being used.

## ResolutionTechniques
### Properties
* **ProviderProperties**: [ProviderProperties](#providerproperties)
* **ResolutionType**: string
* **RuleBasedProperties**: [RuleBasedProperties](#rulebasedproperties)

## Rule
### Properties
* **MatchingKeys**: string[] (Required)
* **RuleName**: string (Required)

## Rule
### Properties
* **MatchingKeys**: string[] (Required)
* **RuleName**: string (Required)

## Rule
### Properties
* **MatchingKeys**: string[] (Required)
* **RuleName**: string (Required)

## RuleBasedProperties
### Properties
* **AttributeMatchingModel**: string (Required)
* **MatchPurpose**: string
* **Rules**: [Rule](#rule)[] (Required)

## SchemaInputAttribute
### Properties
* **FieldName**: string (Required)
* **GroupName**: string
* **Hashed**: bool
* **MatchKey**: string
* **SubType**: string: The subtype of the Attribute. Would be required only when type is PROVIDER_ID
* **Type**: string (Required)

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

