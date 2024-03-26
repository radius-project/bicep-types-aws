# AWS.Pinpoint @ default

## Resource AWS.Pinpoint/InAppTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Pinpoint/InAppTemplateProperties](#awspinpointinapptemplateproperties) (Required): properties of the resource

## AWS.Pinpoint/InAppTemplateProperties
### Properties
* **Arn**: string (ReadOnly)
* **Content**: [InAppMessageContent](#inappmessagecontent)[]
* **CustomConfig**: [InAppTemplate_CustomConfig](#inapptemplatecustomconfig)
* **Layout**: string
* **Tags**: [InAppTemplate_Tags](#inapptemplatetags)
* **TemplateDescription**: string
* **TemplateName**: string (Required, Identifier)

## BodyConfig
### Properties
* **Alignment**: string
* **Body**: string
* **TextColor**: string

## ButtonConfig
### Properties
* **Android**: [OverrideButtonConfiguration](#overridebuttonconfiguration)
* **DefaultConfig**: [DefaultButtonConfiguration](#defaultbuttonconfiguration)
* **IOS**: [OverrideButtonConfiguration](#overridebuttonconfiguration)
* **Web**: [OverrideButtonConfiguration](#overridebuttonconfiguration)

## DefaultButtonConfiguration
### Properties
* **BackgroundColor**: string
* **BorderRadius**: int
* **ButtonAction**: string
* **Link**: string
* **Text**: string
* **TextColor**: string

## HeaderConfig
### Properties
* **Alignment**: string
* **Header**: string
* **TextColor**: string

## InAppMessageContent
### Properties
* **BackgroundColor**: string
* **BodyConfig**: [BodyConfig](#bodyconfig)
* **HeaderConfig**: [HeaderConfig](#headerconfig)
* **ImageUrl**: string
* **PrimaryBtn**: [ButtonConfig](#buttonconfig)
* **SecondaryBtn**: [ButtonConfig](#buttonconfig)

## InAppTemplate_CustomConfig
### Properties

## InAppTemplate_Tags
### Properties

## OverrideButtonConfiguration
### Properties
* **ButtonAction**: string
* **Link**: string

