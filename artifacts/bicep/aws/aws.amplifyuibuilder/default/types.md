# AWS.AmplifyUIBuilder @ default

## Resource AWS.AmplifyUIBuilder/Component@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/ComponentProperties](#awsamplifyuibuildercomponentproperties) (Required): properties of the resource

## Resource AWS.AmplifyUIBuilder/Form@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/FormProperties](#awsamplifyuibuilderformproperties) (Required): properties of the resource

## Resource AWS.AmplifyUIBuilder/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/ThemeProperties](#awsamplifyuibuilderthemeproperties) (Required): properties of the resource

## AWS.AmplifyUIBuilder/ComponentProperties
### Properties
* **AppId**: string (Identifier)
* **BindingProperties**: [ComponentBindingProperties](#componentbindingproperties) (Required)
* **Children**: [ComponentChild](#componentchild)[]
* **CollectionProperties**: [ComponentCollectionProperties](#componentcollectionproperties)
* **ComponentType**: string (Required)
* **EnvironmentName**: string (Identifier)
* **Events**: [ComponentEvents](#componentevents)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Overrides**: [ComponentOverrides](#componentoverrides) (Required)
* **Properties**: [ComponentProperties](#componentproperties) (Required)
* **SchemaVersion**: string
* **SourceId**: string
* **Tags**: [Tags](#tags)
* **Variants**: [ComponentVariant](#componentvariant)[] (Required)

## ComponentBindingProperties
### Properties

## ComponentChild
### Properties
* **Children**: [ComponentChild](#componentchild)[]
* **ComponentType**: string (Required)
* **Events**: [ComponentEvents](#componentevents)
* **Name**: string (Required)
* **Properties**: [ComponentProperties](#componentproperties) (Required)

## ComponentEvents
### Properties

## ComponentProperties
### Properties

## ComponentCollectionProperties
### Properties

## ComponentOverrides
### Properties

## Tags
### Properties

## ComponentVariant
### Properties
* **Overrides**: [ComponentOverrides](#componentoverrides)
* **VariantValues**: [ComponentVariantValues](#componentvariantvalues)

## ComponentVariantValues
### Properties

## AWS.AmplifyUIBuilder/FormProperties
### Properties
* **AppId**: string (Identifier)
* **Cta**: [FormCTA](#formcta)
* **DataType**: [FormDataTypeConfig](#formdatatypeconfig) (Required)
* **EnvironmentName**: string (Identifier)
* **Fields**: [FieldsMap](#fieldsmap) (Required)
* **FormActionType**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **SchemaVersion**: string (Required)
* **SectionalElements**: [SectionalElementMap](#sectionalelementmap) (Required)
* **Style**: [FormStyle](#formstyle) (Required)
* **Tags**: [Tags](#tags)

## FormCTA
### Properties
* **Cancel**: [FormButton](#formbutton)
* **Clear**: [FormButton](#formbutton)
* **Position**: string
* **Submit**: [FormButton](#formbutton)

## FormButton
### Properties
* **Children**: string
* **Excluded**: bool
* **Position**: [FieldPosition](#fieldposition)

## FieldPosition
### Properties

## FormDataTypeConfig
### Properties
* **DataSourceType**: string (Required)
* **DataTypeName**: string (Required)

## FieldsMap
### Properties

## SectionalElementMap
### Properties

## FormStyle
### Properties
* **HorizontalGap**: [Form_FormStyleConfig](#formformstyleconfig)
* **OuterPadding**: [Form_FormStyleConfig](#formformstyleconfig)
* **VerticalGap**: [Form_FormStyleConfig](#formformstyleconfig)

## Form_FormStyleConfig
### Properties

## Form_FormStyleConfig
### Properties

## Form_FormStyleConfig
### Properties

## Tags
### Properties

## AWS.AmplifyUIBuilder/ThemeProperties
### Properties
* **AppId**: string (Identifier)
* **EnvironmentName**: string (Identifier)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Overrides**: [ThemeValues](#themevalues)[]
* **Tags**: [Tags](#tags)
* **Values**: [ThemeValues](#themevalues)[] (Required)

## ThemeValues
### Properties
* **Key**: string
* **Value**: [ThemeValue](#themevalue)

## ThemeValue
### Properties
* **Children**: [ThemeValues](#themevalues)[]
* **Value**: string

## Tags
### Properties

