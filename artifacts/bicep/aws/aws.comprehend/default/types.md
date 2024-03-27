# AWS.Comprehend @ default

## Resource AWS.Comprehend/DocumentClassifier@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/DocumentClassifierProperties](#awscomprehenddocumentclassifierproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/Flywheel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/FlywheelProperties](#awscomprehendflywheelproperties) (Required, Identifier): properties of the resource

## AugmentedManifestsListItem
### Properties
* **AttributeNames**: string[] (Required)
* **S3Uri**: string (Required)
* **Split**: string

## AWS.Comprehend/DocumentClassifierProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DataAccessRoleArn**: string (Required)
* **DocumentClassifierName**: string (Required)
* **InputDataConfig**: [DocumentClassifierInputDataConfig](#documentclassifierinputdataconfig) (Required)
* **LanguageCode**: string (Required)
* **Mode**: string
* **ModelKmsKeyId**: string
* **ModelPolicy**: string
* **OutputDataConfig**: [DocumentClassifierOutputDataConfig](#documentclassifieroutputdataconfig)
* **Tags**: [Tag](#tag)[]
* **VersionName**: string
* **VolumeKmsKeyId**: string
* **VpcConfig**: [VpcConfig](#vpcconfig)

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

## DocumentClassificationConfig
### Properties
* **Labels**: string[]
* **Mode**: string (Required)

## DocumentClassifierDocuments
### Properties
* **S3Uri**: string (Required)
* **TestS3Uri**: string

## DocumentClassifierInputDataConfig
### Properties
* **AugmentedManifests**: [AugmentedManifestsListItem](#augmentedmanifestslistitem)[]
* **DataFormat**: string
* **DocumentReaderConfig**: [DocumentReaderConfig](#documentreaderconfig)
* **Documents**: [DocumentClassifierDocuments](#documentclassifierdocuments)
* **DocumentType**: string
* **LabelDelimiter**: string
* **S3Uri**: string
* **TestS3Uri**: string

## DocumentClassifierOutputDataConfig
### Properties
* **KmsKeyId**: string
* **S3Uri**: string

## DocumentReaderConfig
### Properties
* **DocumentReadAction**: string (Required)
* **DocumentReadMode**: string
* **FeatureTypes**: string[]

## EntityRecognitionConfig
### Properties
* **EntityTypes**: [EntityTypesListItem](#entitytypeslistitem)[]

## EntityTypesListItem
### Properties
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TaskConfig
### Properties
* **DocumentClassificationConfig**: [DocumentClassificationConfig](#documentclassificationconfig)
* **EntityRecognitionConfig**: [EntityRecognitionConfig](#entityrecognitionconfig)
* **LanguageCode**: string (Required)

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required)
* **Subnets**: string[] (Required)

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required)
* **Subnets**: string[] (Required)

