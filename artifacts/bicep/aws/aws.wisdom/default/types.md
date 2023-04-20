# AWS.Wisdom @ default

## Resource AWS.Wisdom/KnowledgeBase@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/KnowledgeBaseProperties](#awswisdomknowledgebaseproperties) (Required): properties of the resource

## AWS.Wisdom/KnowledgeBaseProperties
### Properties
* **Description**: string
* **KnowledgeBaseArn**: string (ReadOnly)
* **KnowledgeBaseId**: string (ReadOnly, Identifier)
* **KnowledgeBaseType**: string (Required)
* **Name**: string (Required)
* **RenderingConfiguration**: [RenderingConfiguration](#renderingconfiguration)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration)
* **Tags**: [Tag](#tag)[]

## RenderingConfiguration
### Properties
* **TemplateUri**: string

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## SourceConfiguration
### Properties
* **AppIntegrations**: [AppIntegrationsConfiguration](#appintegrationsconfiguration) (Required)

## AppIntegrationsConfiguration
### Properties
* **AppIntegrationArn**: string (Required)
* **ObjectFields**: string[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

