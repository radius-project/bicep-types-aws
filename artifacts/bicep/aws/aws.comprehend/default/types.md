# AWS.Comprehend @ default

## Resource AWS.Comprehend/Flywheel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/FlywheelProperties](#awscomprehendflywheelproperties) (Required): properties of the resource

## AWS.Comprehend/FlywheelProperties
### Properties
* **ActiveModelArn**: string
* **Arn**: string (ReadOnly, Identifier)
* **DataAccessRoleArn**: string (Required)
* **DataLakeS3Uri**: string (Required)
* **DataSecurityConfig**: [DataSecurityConfig](#datasecurityconfig)
* **FlywheelName**: string (Required)
* **ModelType**: string
* **Tags**: [Tag](#tag)[]
* **TaskConfig**: [TaskConfig](#taskconfig)

## DataSecurityConfig
### Properties
* **DataLakeKmsKeyId**: string
* **ModelKmsKeyId**: string
* **VolumeKmsKeyId**: string
* **VpcConfig**: [VpcConfig](#vpcconfig)

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required)
* **Subnets**: string[] (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TaskConfig
### Properties
* **DocumentClassificationConfig**: [DocumentClassificationConfig](#documentclassificationconfig)
* **EntityRecognitionConfig**: [EntityRecognitionConfig](#entityrecognitionconfig)
* **LanguageCode**: string (Required)

## DocumentClassificationConfig
### Properties
* **Labels**: string[]
* **Mode**: string (Required)

## EntityRecognitionConfig
### Properties
* **EntityTypes**: [EntityTypesListItem](#entitytypeslistitem)[]

## EntityTypesListItem
### Properties
* **Type**: string (Required)

