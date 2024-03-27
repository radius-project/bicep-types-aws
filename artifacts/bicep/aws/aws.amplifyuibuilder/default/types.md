# AWS.AmplifyUIBuilder @ default

## Resource AWS.AmplifyUIBuilder/Component@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/ComponentProperties](#awsamplifyuibuildercomponentproperties) (Identifier): properties of the resource

## Resource AWS.AmplifyUIBuilder/Form@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/FormProperties](#awsamplifyuibuilderformproperties) (Identifier): properties of the resource

## Resource AWS.AmplifyUIBuilder/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmplifyUIBuilder/ThemeProperties](#awsamplifyuibuilderthemeproperties) (Identifier): properties of the resource

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

## SectionalElementMap
### Properties

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

