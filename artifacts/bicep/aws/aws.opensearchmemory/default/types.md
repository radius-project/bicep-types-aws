# AWS.OpenSearchMemory @ default

## Resource AWS.OpenSearchMemory/Space@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchMemory/SpaceProperties](#awsopensearchmemoryspaceproperties) (Required, Identifier): properties of the resource

## AWS.OpenSearchMemory/SpaceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the resource.
* **CreatedAt**: string (ReadOnly)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **EventExpiryDays**: int
* **ExtractionModelId**: string
* **MemoryExpiryDays**: int
* **MemoryStrategies**: [MemoryStrategy](#memorystrategy)[]
* **Name**: string (Required)
* **SpaceId**: string (ReadOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## EncryptionConfiguration
### Properties
* **KmsKeyArn**: string

## MemoryStrategy
### Properties
* **Configuration**: [MemoryStrategyConfiguration](#memorystrategyconfiguration)
* **Description**: string
* **Name**: string (Required)
* **Type**: string (Required)

## MemoryStrategyConfiguration
### Properties
* **ConsolidationEnabled**: bool
* **ExtractEveryNMessages**: int
* **ExtractEveryNTokens**: int
* **ExtractionPrompt**: string
* **ExtractionSeedRecentN**: int
* **ExtractionSeedTopK**: int
* **IdleTimeoutSeconds**: int

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

