# AWS.AmplifyUIBuilder @ default

## Resource AWS.AmplifyUIBuilder/Component@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AmplifyUIBuilder/ComponentProperties](#awsamplifyuibuildercomponentproperties): properties of the resource

## Resource AWS.AmplifyUIBuilder/Theme@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AmplifyUIBuilder/ThemeProperties](#awsamplifyuibuilderthemeproperties): properties of the resource

## AWS.AmplifyUIBuilder/ComponentProperties
### Properties
* **AppId**: string (ReadOnly)
* **BindingProperties**: [ComponentBindingProperties](#componentbindingproperties)
* **Children**: [ComponentChild](#componentchild)[]
* **CollectionProperties**: [ComponentCollectionProperties](#componentcollectionproperties)
* **ComponentType**: string
* **EnvironmentName**: string (ReadOnly)
* **Events**: [ComponentEvents](#componentevents)
* **Id**: string (ReadOnly)
* **Name**: string
* **Overrides**: [ComponentOverrides](#componentoverrides)
* **Properties**: [ComponentProperties](#componentproperties)
* **SchemaVersion**: string
* **SourceId**: string
* **Tags**: [Tags](#tags)
* **Variants**: [ComponentVariant](#componentvariant)[]

## ComponentBindingProperties
### Properties

## ComponentChild
### Properties
* **Children**: [ComponentChild](#componentchild)[]
* **ComponentType**: string
* **Events**: [ComponentEvents](#componentevents)
* **Name**: string
* **Properties**: [ComponentProperties](#componentproperties)

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
* **Name**: string
* **Overrides**: [ThemeValues](#themevalues)[]
* **Tags**: [Tags](#tags)
* **Values**: [ThemeValues](#themevalues)[]

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

