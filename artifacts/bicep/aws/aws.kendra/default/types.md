# AWS.Kendra @ default

## Resource AWS.Kendra/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/DataSourceProperties](#awskendradatasourceproperties) (Required): properties of the resource

## Resource AWS.Kendra/Faq@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/FaqProperties](#awskendrafaqproperties) (Required): properties of the resource

## Resource AWS.Kendra/Index@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/IndexProperties](#awskendraindexproperties) (Required): properties of the resource

## AWS.Kendra/DataSourceProperties
### Properties
* **Arn**: string (ReadOnly)
* **CustomDocumentEnrichmentConfiguration**: [CustomDocumentEnrichmentConfiguration](#customdocumentenrichmentconfiguration)
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **IndexId**: string (Required, Identifier)
* **Name**: string (Required)
* **RoleArn**: string
* **Schedule**: string
* **Tags**: [Tag](#tag)[]: Tags for labeling the data source
* **Type**: string (Required)

## CustomDocumentEnrichmentConfiguration
### Properties
* **InlineConfigurations**: [InlineCustomDocumentEnrichmentConfiguration](#inlinecustomdocumentenrichmentconfiguration)[]
* **PostExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **PreExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **RoleArn**: string

## InlineCustomDocumentEnrichmentConfiguration
### Properties
* **Condition**: [DocumentAttributeCondition](#documentattributecondition)
* **DocumentContentDeletion**: bool
* **Target**: [DocumentAttributeTarget](#documentattributetarget)

## DocumentAttributeCondition
### Properties
* **ConditionDocumentAttributeKey**: string (Required)
* **ConditionOnValue**: [DocumentAttributeValue](#documentattributevalue)
* **Operator**: string (Required)

## DocumentAttributeValue
### Properties
* **DateValue**: string
* **LongValue**: int
* **StringListValue**: string[]
* **StringValue**: string

## DocumentAttributeTarget
### Properties
* **TargetDocumentAttributeKey**: string (Required)
* **TargetDocumentAttributeValue**: [DocumentAttributeValue](#documentattributevalue)
* **TargetDocumentAttributeValueDeletion**: bool

## HookConfiguration
### Properties
* **InvocationCondition**: [DocumentAttributeCondition](#documentattributecondition)
* **LambdaArn**: string (Required)
* **S3Bucket**: string (Required)

## DataSourceConfiguration
### Properties

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## AWS.Kendra/FaqProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: FAQ description
* **FileFormat**: string: FAQ file format
* **Id**: string (ReadOnly, Identifier)
* **IndexId**: string (Required, Identifier): Index ID
* **Name**: string (Required): FAQ name
* **RoleArn**: string (Required): FAQ role ARN
* **S3Path**: [S3Path](#s3path) (Required): FAQ S3 path
* **Tags**: [Tag](#tag)[]: Tags for labeling the FAQ

## S3Path
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## AWS.Kendra/IndexProperties
### Properties
* **Arn**: string (ReadOnly)
* **CapacityUnits**: [CapacityUnitsConfiguration](#capacityunitsconfiguration): Capacity units
* **Description**: string: A description for the index
* **DocumentMetadataConfigurations**: [DocumentMetadataConfiguration](#documentmetadataconfiguration)[]: Document metadata configurations
* **Edition**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration): Server side encryption configuration
* **Tags**: [Tag](#tag)[]: Tags for labeling the index
* **UserContextPolicy**: string
* **UserTokenConfigurations**: [UserTokenConfiguration](#usertokenconfiguration)[]

## CapacityUnitsConfiguration
### Properties
* **QueryCapacityUnits**: int (Required)
* **StorageCapacityUnits**: int (Required)

## DocumentMetadataConfiguration
### Properties
* **Name**: string (Required)
* **Relevance**: [Relevance](#relevance)
* **Search**: [Search](#search)
* **Type**: string (Required)

## Relevance
### Properties
* **Duration**: string
* **Freshness**: bool
* **Importance**: int
* **RankOrder**: string
* **ValueImportanceItems**: [ValueImportanceItem](#valueimportanceitem)[]

## ValueImportanceItem
### Properties
* **Key**: string
* **Value**: int

## Search
### Properties
* **Displayable**: bool
* **Facetable**: bool
* **Searchable**: bool
* **Sortable**: bool

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## UserTokenConfiguration
### Properties
* **JsonTokenTypeConfiguration**: [JsonTokenTypeConfiguration](#jsontokentypeconfiguration)
* **JwtTokenTypeConfiguration**: [JwtTokenTypeConfiguration](#jwttokentypeconfiguration)

## JsonTokenTypeConfiguration
### Properties
* **GroupAttributeField**: string (Required)
* **UserNameAttributeField**: string (Required)

## JwtTokenTypeConfiguration
### Properties
* **ClaimRegex**: string
* **GroupAttributeField**: string
* **Issuer**: string
* **KeyLocation**: string (Required)
* **SecretManagerArn**: string
* **URL**: string
* **UserNameAttributeField**: string

