# AWS.AmplifyUIBuilder @ default

## Resource AWS.AmplifyUIBuilder/Component@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AmplifyUIBuilder/ComponentProperties](#awsamplifyuibuildercomponentproperties) (Required): properties of the resource

## Resource AWS.AmplifyUIBuilder/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AmplifyUIBuilder/ThemeProperties](#awsamplifyuibuilderthemeproperties) (Required): properties of the resource

## AWS.AmplifyUIBuilder/ComponentProperties
### Properties
* **AppId**: string (ReadOnly)
* **BindingProperties**: [ComponentBindingProperties](#componentbindingproperties) (Required)
* **Children**: [ComponentChild](#componentchild)[]
* **CollectionProperties**: [ComponentCollectionProperties](#componentcollectionproperties)
* **ComponentType**: string (Required)
* **EnvironmentName**: string (ReadOnly)
* **Events**: [ComponentEvents](#componentevents)
* **Id**: string (ReadOnly)
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

## AWS.AmplifyUIBuilder/ThemeProperties
### Properties
* **AppId**: string (ReadOnly)
* **CreatedAt**: string (ReadOnly)
* **EnvironmentName**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **ModifiedAt**: string (ReadOnly)
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

