# AWS.Pinpoint @ default

## Resource AWS.Pinpoint/InAppTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Pinpoint/InAppTemplateProperties](#awspinpointinapptemplateproperties): properties of the resource

## AWS.Pinpoint/InAppTemplateProperties
### Properties
* **Arn**: string (ReadOnly)
* **Content**: [InAppMessageContent](#inappmessagecontent)[]
* **CustomConfig**: [InAppTemplate_CustomConfig](#inapptemplatecustomconfig)
* **Layout**: string
* **Tags**: [InAppTemplate_Tags](#inapptemplatetags)
* **TemplateDescription**: string
* **TemplateName**: string

## InAppMessageContent
### Properties
* **BackgroundColor**: string
* **BodyConfig**: [BodyConfig](#bodyconfig)
* **HeaderConfig**: [HeaderConfig](#headerconfig)
* **ImageUrl**: string
* **PrimaryBtn**: [ButtonConfig](#buttonconfig)
* **SecondaryBtn**: [ButtonConfig](#buttonconfig)

## BodyConfig
### Properties
* **Alignment**: [Alignment](#alignment)
* **Body**: string
* **TextColor**: string

## Alignment
### Properties

## HeaderConfig
### Properties
* **Alignment**: [Alignment](#alignment)
* **Header**: string
* **TextColor**: string

## ButtonConfig
### Properties
* **Android**: [OverrideButtonConfiguration](#overridebuttonconfiguration)
* **DefaultConfig**: [DefaultButtonConfiguration](#defaultbuttonconfiguration)
* **IOS**: [OverrideButtonConfiguration](#overridebuttonconfiguration)
* **Web**: [OverrideButtonConfiguration](#overridebuttonconfiguration)

## OverrideButtonConfiguration
### Properties
* **ButtonAction**: [ButtonAction](#buttonaction)
* **Link**: string

## ButtonAction
### Properties

## DefaultButtonConfiguration
### Properties
* **BackgroundColor**: string
* **BorderRadius**: int
* **ButtonAction**: [ButtonAction](#buttonaction)
* **Link**: string
* **Text**: string
* **TextColor**: string

## InAppTemplate_CustomConfig
### Properties

## InAppTemplate_Tags
### Properties

