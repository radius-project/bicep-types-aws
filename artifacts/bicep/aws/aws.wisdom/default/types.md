# AWS.Wisdom @ default

## Resource AWS.Wisdom/AIPrompt@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIPromptProperties](#awswisdomaipromptproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AIPromptVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIPromptVersionProperties](#awswisdomaipromptversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/Assistant@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AssistantProperties](#awswisdomassistantproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AssistantAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AssistantAssociationProperties](#awswisdomassistantassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/KnowledgeBase@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/KnowledgeBaseProperties](#awswisdomknowledgebaseproperties) (Required, Identifier): properties of the resource

## AIPromptTemplateConfiguration
### Properties

## AppIntegrationsConfiguration
### Properties
* **AppIntegrationArn**: string (Required)
* **ObjectFields**: string[]

## AssociationData
### Properties
* **KnowledgeBaseId**: string (Required)

## AWS.Wisdom/AIPromptProperties
### Properties
* **AIPromptArn**: string (ReadOnly)
* **AIPromptId**: string (ReadOnly, Identifier)
* **ApiFormat**: string (Required)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Identifier)
* **Description**: string
* **ModelId**: string (Required)
* **Name**: string
* **Tags**: [Tags](#tags)
* **TemplateConfiguration**: [AIPromptTemplateConfiguration](#aiprompttemplateconfiguration) (Required)
* **TemplateType**: string (Required)
* **Type**: string (Required)

## AWS.Wisdom/AIPromptVersionProperties
### Properties
* **AIPromptArn**: string (ReadOnly)
* **AIPromptId**: string (Required, Identifier)
* **AIPromptVersionId**: string (ReadOnly)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Required, Identifier)
* **ModifiedTimeSeconds**: int
* **VersionNumber**: int (ReadOnly, Identifier)

## AWS.Wisdom/AssistantAssociationProperties
### Properties
* **AssistantArn**: string (ReadOnly)
* **AssistantAssociationArn**: string (ReadOnly)
* **AssistantAssociationId**: string (ReadOnly, Identifier)
* **AssistantId**: string (Required, Identifier)
* **Association**: [AssociationData](#associationdata) (Required)
* **AssociationType**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.Wisdom/AssistantProperties
### Properties
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (ReadOnly, Identifier)
* **Description**: string
* **Name**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

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

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## SourceConfiguration
### Properties
* **AppIntegrations**: [AppIntegrationsConfiguration](#appintegrationsconfiguration) (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tags
### Properties

