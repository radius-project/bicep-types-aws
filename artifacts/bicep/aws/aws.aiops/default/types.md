# AWS.AIOps @ default

## Resource AWS.AIOps/InvestigationGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AIOps/InvestigationGroupProperties](#awsaiopsinvestigationgroupproperties) (Required, Identifier): properties of the resource

## AWS.AIOps/InvestigationGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ChatbotNotificationChannels**: [ChatbotNotificationChannel](#chatbotnotificationchannel)[]: An array of key-value pairs of notification channels to apply to this resource.
* **CreatedAt**: string (ReadOnly)
* **CreatedBy**: string (ReadOnly)
* **CrossAccountConfigurations**: [CrossAccountConfiguration](#crossaccountconfiguration)[]: An array of cross account configurations.
* **EncryptionConfig**: [EncryptionConfigMap](#encryptionconfigmap)
* **InvestigationGroupPolicy**: string: Investigation Group policy
* **IsCloudTrailEventHistoryEnabled**: bool: Flag to enable cloud trail history
* **LastModifiedAt**: string (ReadOnly)
* **LastModifiedBy**: string (ReadOnly)
* **Name**: string (Required)
* **RetentionInDays**: int: The number of days to retain the investigation group
* **RoleArn**: string
* **TagKeyBoundaries**: string[]
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## ChatbotNotificationChannel
### Properties
* **ChatConfigurationArns**: string[]
* **SNSTopicArn**: string

## CrossAccountConfiguration
### Properties
* **SourceRoleArn**: string

## EncryptionConfigMap
### Properties
* **EncryptionConfigurationType**: string
* **KmsKeyId**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

