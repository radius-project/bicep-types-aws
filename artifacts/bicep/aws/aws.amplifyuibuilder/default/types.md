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

## ActionParameters
### Properties
* **Anchor**: [ComponentProperty](#componentproperty)
* **Fields**: [ComponentProperties](#componentproperties)
* **Global**: [ComponentProperty](#componentproperty)
* **Id**: [ComponentProperty](#componentproperty) (Identifier)
* **Model**: string
* **State**: [MutationActionSetStateParameter](#mutationactionsetstateparameter)
* **Target**: [ComponentProperty](#componentproperty)
* **Type**: [ComponentProperty](#componentproperty)
* **Url**: [ComponentProperty](#componentproperty)

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
### Additional Properties
* **Additional Properties Type**: [ComponentBindingPropertiesValue](#componentbindingpropertiesvalue)

## ComponentBindingPropertiesValue
### Properties
* **BindingProperties**: [ComponentBindingPropertiesValueProperties](#componentbindingpropertiesvalueproperties)
* **DefaultValue**: string
* **Type**: string

## ComponentBindingPropertiesValueProperties
### Properties
* **Bucket**: string
* **DefaultValue**: string
* **Field**: string
* **Key**: string
* **Model**: string
* **Predicates**: [Predicate](#predicate)[]
* **SlotName**: string
* **UserAttribute**: string

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
### Additional Properties
* **Additional Properties Type**: [ComponentDataConfiguration](#componentdataconfiguration)

## ComponentConditionProperty
### Properties
* **Else**: [ComponentProperty](#componentproperty)
* **Field**: string
* **Operand**: string
* **OperandType**: string
* **Operator**: string
* **Property**: string
* **Then**: [ComponentProperty](#componentproperty)

## ComponentDataConfiguration
### Properties
* **Identifiers**: string[]
* **Model**: string (Required)
* **Predicate**: [Predicate](#predicate)
* **Sort**: [SortProperty](#sortproperty)[]

## ComponentEvent
### Properties
* **Action**: string
* **BindingEvent**: string
* **Parameters**: [ActionParameters](#actionparameters)

## ComponentEvents
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentEvent](#componentevent)

## ComponentOverrides
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentOverridesValue](#componentoverridesvalue)

## ComponentOverridesValue
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComponentProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [ComponentProperty](#componentproperty)

## ComponentProperty
### Properties
* **BindingProperties**: [ComponentPropertyBindingProperties](#componentpropertybindingproperties)
* **Bindings**: [FormBindings](#formbindings)
* **CollectionBindingProperties**: [ComponentPropertyBindingProperties](#componentpropertybindingproperties)
* **ComponentName**: string
* **Concat**: [ComponentProperty](#componentproperty)[]
* **Condition**: [ComponentConditionProperty](#componentconditionproperty)
* **Configured**: bool
* **DefaultValue**: string
* **Event**: string
* **ImportedValue**: string
* **Model**: string
* **Property**: string
* **Type**: string
* **UserAttribute**: string
* **Value**: string

## ComponentPropertyBindingProperties
### Properties
* **Field**: string
* **Property**: string (Required)

## ComponentVariant
### Properties
* **Overrides**: [ComponentOverrides](#componentoverrides)
* **VariantValues**: [ComponentVariantValues](#componentvariantvalues)

## ComponentVariantValues
### Properties
### Additional Properties
* **Additional Properties Type**: string

## DataStoreRenderConfig
### Properties

## FieldConfig
### Properties
* **Excluded**: bool
* **InputType**: [FieldInputConfig](#fieldinputconfig)
* **Label**: string
* **Position**: [Form_FieldPosition](#formfieldposition)
* **Validations**: [FieldValidationConfiguration](#fieldvalidationconfiguration)[]

## FieldInputConfig
### Properties
* **DefaultChecked**: bool
* **DefaultCountryCode**: string
* **DefaultValue**: string
* **DescriptiveText**: string
* **FileUploaderConfig**: [FileUploaderFieldConfig](#fileuploaderfieldconfig)
* **IsArray**: bool
* **MaxValue**: int
* **MinValue**: int
* **Name**: string
* **Placeholder**: string
* **ReadOnly**: bool
* **Required**: bool
* **Step**: int
* **Type**: string (Required)
* **Value**: string
* **ValueMappings**: [ValueMappings](#valuemappings)

## FieldPosition
### Properties

## FieldsMap
### Properties
### Additional Properties
* **Additional Properties Type**: [FieldConfig](#fieldconfig)

## FieldValidationConfiguration
### Properties
* **NumValues**: int[]
* **StrValues**: string[]
* **Type**: string (Required)
* **ValidationMessage**: string

## FileUploaderFieldConfig
### Properties
* **AcceptedFileTypes**: string[] (Required)
* **AccessLevel**: string (Required)
* **IsResumable**: bool
* **MaxFileCount**: int
* **MaxSize**: int
* **ShowThumbnails**: bool

## Form_FieldPosition
### Properties

## Form_FormStyleConfig
### Properties

## Form_FormStyleConfig
### Properties

## Form_FormStyleConfig
### Properties

## FormBindingElement
### Properties
* **Element**: string (Required)
* **Property**: string (Required)

## FormBindings
### Properties
### Additional Properties
* **Additional Properties Type**: [FormBindingElement](#formbindingelement)

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

## FormInputBindingProperties
### Properties
### Additional Properties
* **Additional Properties Type**: [FormInputBindingPropertiesValue](#forminputbindingpropertiesvalue)

## FormInputBindingPropertiesValue
### Properties
* **BindingProperties**: [FormInputBindingPropertiesValueProperties](#forminputbindingpropertiesvalueproperties)
* **Type**: string

## FormInputBindingPropertiesValueProperties
### Properties
* **Model**: string

## FormInputValueProperty
### Properties
* **BindingProperties**: [FormInputValuePropertyBindingProperties](#forminputvaluepropertybindingproperties)
* **Concat**: [FormInputValueProperty](#forminputvalueproperty)[]
* **Value**: string

## FormInputValuePropertyBindingProperties
### Properties
* **Field**: string
* **Property**: string (Required)

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

## MutationActionSetStateParameter
### Properties
* **ComponentName**: string (Required)
* **Property**: string (Required)
* **Set**: [ComponentProperty](#componentproperty) (Required)

## NoApiRenderConfig
### Properties

## Predicate
### Properties
* **And**: [Predicate](#predicate)[]
* **Field**: string
* **Operand**: string
* **OperandType**: string
* **Operator**: string
* **Or**: [Predicate](#predicate)[]

## ReactStartCodegenJobData
### Properties
* **ApiConfiguration**: [ApiConfiguration](#apiconfiguration)
* **InlineSourceMap**: bool: Specifies whether the code generation job should render inline source maps.
* **Module**: string: The JavaScript module type.
* **RenderTypeDeclarations**: bool: Specifies whether the code generation job should render type declaration files.
* **Script**: string: The file type to use for a JavaScript project.
* **Target**: string: The ECMAScript specification to use.

## SectionalElement
### Properties
* **Excluded**: bool
* **Level**: int
* **Orientation**: string
* **Position**: [FieldPosition](#fieldposition)
* **Text**: string
* **Type**: string (Required)

## SectionalElementMap
### Properties
### Additional Properties
* **Additional Properties Type**: [SectionalElement](#sectionalelement)

## SortProperty
### Properties
* **Direction**: string (Required)
* **Field**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ThemeValue
### Properties
* **Children**: [ThemeValues](#themevalues)[]
* **Value**: string

## ThemeValues
### Properties
* **Key**: string
* **Value**: [ThemeValue](#themevalue)

## ValueMapping
### Properties
* **DisplayValue**: [FormInputValueProperty](#forminputvalueproperty)
* **Value**: [FormInputValueProperty](#forminputvalueproperty) (Required)

## ValueMappings
### Properties
* **BindingProperties**: [FormInputBindingProperties](#forminputbindingproperties)
* **Values**: [ValueMapping](#valuemapping)[] (Required)

