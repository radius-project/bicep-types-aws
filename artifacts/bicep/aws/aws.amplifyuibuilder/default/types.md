# AWS.AmplifyUIBuilder @ default

## Resource AWS.AmplifyUIBuilder/CodegenJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/CodegenJobProperties](#awsamplifyuibuildercodegenjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.AmplifyUIBuilder/Component@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/ComponentProperties](#awsamplifyuibuildercomponentproperties) (Identifier): properties of the resource

## Resource AWS.AmplifyUIBuilder/Form@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/FormProperties](#awsamplifyuibuilderformproperties) (Identifier): properties of the resource

## Resource AWS.AmplifyUIBuilder/Theme@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/ThemeProperties](#awsamplifyuibuilderthemeproperties) (Identifier): properties of the resource

## ApiConfiguration
### Properties
* **DataStoreConfig**: [DataStoreRenderConfig](#datastorerenderconfig)
* **GraphQLConfig**: [GraphQLRenderConfig](#graphqlrenderconfig)
* **NoApiConfig**: [NoApiRenderConfig](#noapirenderconfig)

## AWS.AmplifyUIBuilder/CodegenJobProperties
### Properties
* **AppId**: string: The unique ID for the Amplify app.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the code generation job.
* **AutoGenerateForms**: bool: Specifies whether to autogenerate forms in the code generation job.
* **EnvironmentName**: string: The name of the backend environment that is a part of the Amplify app.
* **Features**: [CodegenFeatureFlags](#codegenfeatureflags)
* **Id**: string (ReadOnly): The unique ID for the code generation job.
* **RenderConfig**: [CodegenJobRenderConfig](#codegenjobrenderconfig) (Required)
* **Status**: string (ReadOnly): The status of the code generation job.
* **Tags**: [Tag](#tag)[] (ReadOnly): One or more key-value pairs that are assigned to the code generation job.

## AWS.AmplifyUIBuilder/ComponentProperties
### Properties
* **AppId**: string (Identifier)
* **BindingProperties**: [ComponentBindingProperties](#componentbindingproperties)
* **Children**: [ComponentChild](#componentchild)[]
* **CollectionProperties**: [ComponentCollectionProperties](#componentcollectionproperties)
* **ComponentType**: string
* **CreatedAt**: string (ReadOnly)
* **EnvironmentName**: string (Identifier)
* **Events**: [ComponentEvents](#componentevents)
* **Id**: string (ReadOnly, Identifier)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string
* **Overrides**: [ComponentOverrides](#componentoverrides)
* **Properties**: [ComponentProperties](#componentproperties)
* **SchemaVersion**: string
* **SourceId**: string
* **Tags**: [Tags](#tags)
* **Variants**: [ComponentVariant](#componentvariant)[]

## AWS.AmplifyUIBuilder/FormProperties
### Properties
* **AppId**: string (Identifier)
* **Cta**: [FormCTA](#formcta)
* **DataType**: [FormDataTypeConfig](#formdatatypeconfig)
* **EnvironmentName**: string (Identifier)
* **Fields**: [FieldsMap](#fieldsmap)
* **FormActionType**: string
* **Id**: string (ReadOnly, Identifier)
* **LabelDecorator**: string
* **Name**: string
* **SchemaVersion**: string
* **SectionalElements**: [SectionalElementMap](#sectionalelementmap)
* **Style**: [FormStyle](#formstyle)
* **Tags**: [Tags](#tags)

## AWS.AmplifyUIBuilder/ThemeProperties
### Properties
* **AppId**: string (Identifier)
* **CreatedAt**: string (ReadOnly)
* **EnvironmentName**: string (Identifier)
* **Id**: string (ReadOnly, Identifier)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string
* **Overrides**: [ThemeValues](#themevalues)[]
* **Tags**: [Tags](#tags)
* **Values**: [ThemeValues](#themevalues)[]

## CodegenFeatureFlags
### Properties
* **IsNonModelSupported**: bool: Specifies whether a code generation job supports non models.
* **IsRelationshipSupported**: bool: Specifies whether a code generation job supports data relationships.

## CodegenJobRenderConfig
### Properties
* **React**: [ReactStartCodegenJobData](#reactstartcodegenjobdata) (Required)

## ComponentBindingProperties
### Properties

## ComponentChild
### Properties
* **Children**: [ComponentChild](#componentchild)[]
* **ComponentType**: string (Required)
* **Events**: [ComponentEvents](#componentevents)
* **Name**: string (Required)
* **Properties**: [ComponentProperties](#componentproperties) (Required)
* **SourceId**: string

## ComponentCollectionProperties
### Properties

## ComponentEvents
### Properties

## ComponentOverrides
### Properties

## ComponentProperties
### Properties

## ComponentVariant
### Properties
* **Overrides**: [ComponentOverrides](#componentoverrides)
* **VariantValues**: [ComponentVariantValues](#componentvariantvalues)

## ComponentVariantValues
### Properties

## DataStoreRenderConfig
### Properties

## FieldPosition
### Properties

## FieldsMap
### Properties

## Form_FormStyleConfig
### Properties

## Form_FormStyleConfig
### Properties

## Form_FormStyleConfig
### Properties

## FormButton
### Properties
* **Children**: string
* **Excluded**: bool
* **Position**: [FieldPosition](#fieldposition)

## FormCTA
### Properties
* **Cancel**: [FormButton](#formbutton)
* **Clear**: [FormButton](#formbutton)
* **Position**: string
* **Submit**: [FormButton](#formbutton)

## FormDataTypeConfig
### Properties
* **DataSourceType**: string (Required)
* **DataTypeName**: string (Required)

## FormStyle
### Properties
* **HorizontalGap**: [Form_FormStyleConfig](#formformstyleconfig)
* **OuterPadding**: [Form_FormStyleConfig](#formformstyleconfig)
* **VerticalGap**: [Form_FormStyleConfig](#formformstyleconfig)

## GraphQLRenderConfig
### Properties
* **FragmentsFilePath**: string (Required): The path to the GraphQL fragments file, relative to the component output directory.
* **MutationsFilePath**: string (Required): The path to the GraphQL mutations file, relative to the component output directory.
* **QueriesFilePath**: string (Required): The path to the GraphQL queries file, relative to the component output directory.
* **SubscriptionsFilePath**: string (Required): The path to the GraphQL subscriptions file, relative to the component output directory.
* **TypesFilePath**: string (Required): The path to the GraphQL types file, relative to the component output directory.

## NoApiRenderConfig
### Properties

## ReactStartCodegenJobData
### Properties
* **ApiConfiguration**: [ApiConfiguration](#apiconfiguration)
* **InlineSourceMap**: bool: Specifies whether the code generation job should render inline source maps.
* **Module**: string: The JavaScript module type.
* **RenderTypeDeclarations**: bool: Specifies whether the code generation job should render type declaration files.
* **Script**: string: The file type to use for a JavaScript project.
* **Target**: string: The ECMAScript specification to use.

## SectionalElementMap
### Properties

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tags
### Properties

## Tags
### Properties

## Tags
### Properties

## ThemeValue
### Properties
* **Children**: [ThemeValues](#themevalues)[]
* **Value**: string

## ThemeValues
### Properties
* **Key**: string
* **Value**: [ThemeValue](#themevalue)

