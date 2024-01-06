# AWS.Wisdom @ default

## Resource AWS.Wisdom/Assistant@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AssistantProperties](#awswisdomassistantproperties) (Required): properties of the resource

## Resource AWS.Wisdom/AssistantAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AssistantAssociationProperties](#awswisdomassistantassociationproperties) (Required): properties of the resource

## Resource AWS.Wisdom/KnowledgeBase@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/KnowledgeBaseProperties](#awswisdomknowledgebaseproperties) (Required): properties of the resource

## AWS.Wisdom/AssistantProperties
### Properties
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (ReadOnly, Identifier)
* **Description**: string
* **Name**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.Wisdom/AssistantAssociationProperties
### Properties
* **AssistantArn**: string (ReadOnly)
* **AssistantAssociationArn**: string (ReadOnly)
* **AssistantAssociationId**: string (ReadOnly, Identifier)
* **AssistantId**: string (Required, Identifier)
* **Association**: [AssociationData](#associationdata) (Required)
* **AssociationType**: string (Required)
* **Tags**: [Tag](#tag)[]

## AssociationData
### Properties
* **KnowledgeBaseId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

