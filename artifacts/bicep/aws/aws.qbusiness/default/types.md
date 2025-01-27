# AWS.QBusiness @ default

## Resource AWS.QBusiness/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/ApplicationProperties](#awsqbusinessapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.QBusiness/DataAccessor@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/DataAccessorProperties](#awsqbusinessdataaccessorproperties) (Required, Identifier): properties of the resource

## Resource AWS.QBusiness/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/DataSourceProperties](#awsqbusinessdatasourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.QBusiness/Index@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/IndexProperties](#awsqbusinessindexproperties) (Required, Identifier): properties of the resource

## Resource AWS.QBusiness/Plugin@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/PluginProperties](#awsqbusinesspluginproperties) (Required, Identifier): properties of the resource

## Resource AWS.QBusiness/Retriever@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/RetrieverProperties](#awsqbusinessretrieverproperties) (Required, Identifier): properties of the resource

## Resource AWS.QBusiness/WebExperience@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.QBusiness/WebExperienceProperties](#awsqbusinesswebexperienceproperties) (Required, Identifier): properties of the resource

## ActionConfiguration
### Properties
* **Action**: string (Required)
* **FilterConfiguration**: [ActionFilterConfiguration](#actionfilterconfiguration)

## ActionFilterConfiguration
### Properties
* **DocumentAttributeFilter**: [AttributeFilter](#attributefilter) (Required)

## APISchema
### Properties

## AttachmentsConfiguration
### Properties
* **AttachmentsControlMode**: string (Required)

## AttributeFilter
### Properties
* **AndAllFilters**: [AttributeFilter](#attributefilter)[]
* **ContainsAll**: [DocumentAttribute](#documentattribute)
* **ContainsAny**: [DocumentAttribute](#documentattribute)
* **EqualsTo**: [DocumentAttribute](#documentattribute)
* **GreaterThan**: [DocumentAttribute](#documentattribute)
* **GreaterThanOrEquals**: [DocumentAttribute](#documentattribute)
* **LessThan**: [DocumentAttribute](#documentattribute)
* **LessThanOrEquals**: [DocumentAttribute](#documentattribute)
* **NotFilter**: [AttributeFilter](#attributefilter)
* **OrAllFilters**: [AttributeFilter](#attributefilter)[]

## AutoSubscriptionConfiguration
### Properties
* **AutoSubscribe**: string (Required)
* **DefaultSubscriptionType**: string

## AWS.QBusiness/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly)
* **ApplicationId**: string (ReadOnly, Identifier)
* **AttachmentsConfiguration**: [AttachmentsConfiguration](#attachmentsconfiguration)
* **AutoSubscriptionConfiguration**: [AutoSubscriptionConfiguration](#autosubscriptionconfiguration)
* **ClientIdsForOIDC**: string[]
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string (Required)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **IamIdentityProviderArn**: string
* **IdentityCenterApplicationArn**: string (ReadOnly)
* **IdentityCenterInstanceArn**: string (WriteOnly)
* **IdentityType**: string
* **PersonalizationConfiguration**: [PersonalizationConfiguration](#personalizationconfiguration)
* **QAppsConfiguration**: [QAppsConfiguration](#qappsconfiguration)
* **QuickSightConfiguration**: [QuickSightConfiguration](#quicksightconfiguration)
* **RoleArn**: string
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.QBusiness/DataAccessorProperties
### Properties
* **ActionConfigurations**: [ActionConfiguration](#actionconfiguration)[] (Required)
* **ApplicationId**: string (Required, Identifier)
* **CreatedAt**: string (ReadOnly)
* **DataAccessorArn**: string (ReadOnly)
* **DataAccessorId**: string (ReadOnly, Identifier)
* **DisplayName**: string (Required)
* **IdcApplicationArn**: string (ReadOnly)
* **Principal**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.QBusiness/DataSourceProperties
### Properties
* **ApplicationId**: string (Required, Identifier)
* **Configuration**: [DataSource_Configuration](#datasourceconfiguration) (Required)
* **CreatedAt**: string (ReadOnly)
* **DataSourceArn**: string (ReadOnly)
* **DataSourceId**: string (ReadOnly, Identifier)
* **Description**: string
* **DisplayName**: string (Required)
* **DocumentEnrichmentConfiguration**: [DocumentEnrichmentConfiguration](#documentenrichmentconfiguration)
* **IndexId**: string (Required, Identifier)
* **MediaExtractionConfiguration**: [MediaExtractionConfiguration](#mediaextractionconfiguration)
* **RoleArn**: string
* **Status**: string (ReadOnly)
* **SyncSchedule**: string
* **Tags**: [Tag](#tag)[]
* **Type**: string (ReadOnly)
* **UpdatedAt**: string (ReadOnly)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## AWS.QBusiness/IndexProperties
### Properties
* **ApplicationId**: string (Required, Identifier)
* **CapacityConfiguration**: [IndexCapacityConfiguration](#indexcapacityconfiguration)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string (Required)
* **DocumentAttributeConfigurations**: [DocumentAttributeConfiguration](#documentattributeconfiguration)[]
* **IndexArn**: string (ReadOnly)
* **IndexId**: string (ReadOnly, Identifier)
* **IndexStatistics**: [IndexStatistics](#indexstatistics) (ReadOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **Type**: string
* **UpdatedAt**: string (ReadOnly)

## AWS.QBusiness/PluginProperties
### Properties
* **ApplicationId**: string (Identifier)
* **AuthConfiguration**: [PluginAuthConfiguration](#pluginauthconfiguration) (Required)
* **BuildStatus**: string (ReadOnly)
* **CreatedAt**: string (ReadOnly)
* **CustomPluginConfiguration**: [CustomPluginConfiguration](#custompluginconfiguration)
* **DisplayName**: string (Required)
* **PluginArn**: string (ReadOnly)
* **PluginId**: string (ReadOnly, Identifier)
* **ServerUrl**: string
* **State**: string
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)
* **UpdatedAt**: string (ReadOnly)

## AWS.QBusiness/RetrieverProperties
### Properties
* **ApplicationId**: string (Required, Identifier)
* **Configuration**: [RetrieverConfiguration](#retrieverconfiguration) (Required)
* **CreatedAt**: string (ReadOnly)
* **DisplayName**: string (Required)
* **RetrieverArn**: string (ReadOnly)
* **RetrieverId**: string (ReadOnly, Identifier)
* **RoleArn**: string
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)
* **UpdatedAt**: string (ReadOnly)

## AWS.QBusiness/WebExperienceProperties
### Properties
* **ApplicationId**: string (Required, Identifier)
* **BrowserExtensionConfiguration**: [BrowserExtensionConfiguration](#browserextensionconfiguration)
* **CreatedAt**: string (ReadOnly)
* **CustomizationConfiguration**: [CustomizationConfiguration](#customizationconfiguration)
* **DefaultEndpoint**: string (ReadOnly)
* **IdentityProviderConfiguration**: [IdentityProviderConfiguration](#identityproviderconfiguration)
* **Origins**: string[]
* **RoleArn**: string
* **SamplePromptsControlMode**: string
* **Status**: string (ReadOnly)
* **Subtitle**: string
* **Tags**: [Tag](#tag)[]
* **Title**: string
* **UpdatedAt**: string (ReadOnly)
* **WebExperienceArn**: string (ReadOnly)
* **WebExperienceId**: string (ReadOnly, Identifier)
* **WelcomeMessage**: string

## BrowserExtensionConfiguration
### Properties
* **EnabledBrowserExtensions**: string[] (Required)

## CustomizationConfiguration
### Properties
* **CustomCSSUrl**: string
* **FaviconUrl**: string
* **FontUrl**: string
* **LogoUrl**: string

## CustomPluginConfiguration
### Properties
* **ApiSchema**: [APISchema](#apischema) (Required)
* **ApiSchemaType**: string (Required)
* **Description**: string (Required)

## DataAccessor_DocumentAttributeValue
### Properties

## DataSource_Configuration
### Properties

## DataSource_DocumentAttributeValue
### Properties

## DataSource_DocumentAttributeValue
### Properties

## DataSourceVpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)

## DocumentAttribute
### Properties
* **Name**: string (Required)
* **Value**: [DataAccessor_DocumentAttributeValue](#dataaccessordocumentattributevalue) (Required)

## DocumentAttributeCondition
### Properties
* **Key**: string (Required)
* **Operator**: string (Required)
* **Value**: [DataSource_DocumentAttributeValue](#datasourcedocumentattributevalue)

## DocumentAttributeConfiguration
### Properties
* **Name**: string
* **Search**: string
* **Type**: string

## DocumentAttributeTarget
### Properties
* **AttributeValueOperator**: string
* **Key**: string (Required)
* **Value**: [DataSource_DocumentAttributeValue](#datasourcedocumentattributevalue)

## DocumentEnrichmentConfiguration
### Properties
* **InlineConfigurations**: [InlineDocumentEnrichmentConfiguration](#inlinedocumentenrichmentconfiguration)[]
* **PostExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **PreExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)

## EncryptionConfiguration
### Properties
* **KmsKeyId**: string

## HookConfiguration
### Properties
* **InvocationCondition**: [DocumentAttributeCondition](#documentattributecondition)
* **LambdaArn**: string
* **RoleArn**: string
* **S3BucketName**: string

## IdentityProviderConfiguration
### Properties

## ImageExtractionConfiguration
### Properties
* **ImageExtractionStatus**: string (Required)

## IndexCapacityConfiguration
### Properties
* **Units**: int

## IndexStatistics
### Properties
* **TextDocumentStatistics**: [TextDocumentStatistics](#textdocumentstatistics)

## InlineDocumentEnrichmentConfiguration
### Properties
* **Condition**: [DocumentAttributeCondition](#documentattributecondition)
* **DocumentContentOperator**: string
* **Target**: [DocumentAttributeTarget](#documentattributetarget)

## MediaExtractionConfiguration
### Properties
* **ImageExtractionConfiguration**: [ImageExtractionConfiguration](#imageextractionconfiguration)

## PersonalizationConfiguration
### Properties
* **PersonalizationControlMode**: string (Required)

## PluginAuthConfiguration
### Properties

## QAppsConfiguration
### Properties
* **QAppsControlMode**: string (Required)

## QuickSightConfiguration
### Properties
* **ClientNamespace**: string (Required)

## RetrieverConfiguration
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TextDocumentStatistics
### Properties
* **IndexedTextBytes**: int
* **IndexedTextDocumentCount**: int

