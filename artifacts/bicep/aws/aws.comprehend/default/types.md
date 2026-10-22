# AWS.Comprehend @ default

## Resource AWS.Comprehend/DocumentClassifier@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/DocumentClassifierProperties](#awscomprehenddocumentclassifierproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/DocumentClassifierEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/DocumentClassifierEndpointProperties](#awscomprehenddocumentclassifierendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/EntityRecognizer@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/EntityRecognizerProperties](#awscomprehendentityrecognizerproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/EntityRecognizerEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/EntityRecognizerEndpointProperties](#awscomprehendentityrecognizerendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/Flywheel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/FlywheelProperties](#awscomprehendflywheelproperties) (Required, Identifier): properties of the resource

## AugmentedManifestsListItem
### Properties
* **AttributeNames**: string[] (Required)
* **S3Uri**: string (Required)
* **Split**: string

## AugmentedManifestsListItem
### Properties
* **AnnotationDataS3Uri**: string: The S3 prefix to the annotation files that are referred in the augmented manifest file.
* **AttributeNames**: string[] (Required): The JSON attribute that contains the annotations for your training documents.
* **DocumentType**: string: The type of augmented manifest.
* **S3Uri**: string (Required): The Amazon S3 location of the augmented manifest file.
* **SourceDocumentsS3Uri**: string: The S3 prefix to the source files (PDFs) that are referred to in the augmented manifest file.
* **Split**: string: The purpose of the data you've provided in the augmented manifest.

## AWS.Comprehend/DocumentClassifierEndpointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the document classifier endpoint.
* **CreationTime**: string (ReadOnly): The creation date and time of the endpoint.
* **CurrentInferenceUnits**: int (ReadOnly): The number of inference units currently used by the model using this endpoint.
* **DesiredInferenceUnits**: int (Required): The desired number of inference units to be used by the model. Each inference unit represents throughput of 100 characters per second.
* **EndpointName**: string (Required): The name of the endpoint. The name must be unique within the AWS Region and account.
* **LastModifiedTime**: string (ReadOnly): The date and time that the endpoint was last modified.
* **ModelArn**: string (Required): The Amazon Resource Name (ARN) of the document classifier model to which the endpoint is attached.
* **Tags**: [Tag](#tag)[]: Tags associated with the endpoint being created.

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

## AWS.Comprehend/EntityRecognizerEndpointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the entity recognizer endpoint.
* **CreationTime**: string (ReadOnly): The creation date and time of the endpoint.
* **CurrentInferenceUnits**: int (ReadOnly): The number of inference units currently used by the model using this endpoint.
* **DataAccessRoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to trained custom models encrypted with a customer managed key (ModelKmsKeyId).
* **DesiredInferenceUnits**: int (Required): The desired number of inference units to be used by the model. Each inference unit represents throughput of 100 characters per second.
* **EndpointName**: string (Required): The name of the endpoint. The name must be unique within the AWS Region and account.
* **EndpointStatus**: string (ReadOnly): The current status of the endpoint. Because the endpoint updates and creation are asynchronous, wait for the endpoint to be IN_SERVICE before making inference requests.
* **FlywheelArn**: string: The Amazon Resource Name (ARN) of the flywheel to which the endpoint is attached.
* **LastModifiedTime**: string (ReadOnly): The date and time that the endpoint was last modified.
* **ModelArn**: string: The Amazon Resource Name (ARN) of the entity recognizer model to which the endpoint is attached.
* **Tags**: [Tag](#tag)[]: Tags associated with the endpoint being created.

## AWS.Comprehend/EntityRecognizerProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) that identifies the entity recognizer.
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **InputDataConfig**: [EntityRecognizerInputDataConfig](#entityrecognizerinputdataconfig) (Required): Specifies the format and location of the input data. The S3 bucket containing the input data must be located in the same Region as the entity recognizer being created.
* **LanguageCode**: string (Required): The language of the input documents. All documents must be in the same language.
* **ModelKmsKeyId**: string: ID for the AWS KMS key that Amazon Comprehend uses to encrypt trained custom models.
* **ModelPolicy**: string (WriteOnly): The JSON resource-based policy to attach to your custom entity recognizer model.
* **RecognizerName**: string (Required): The name given to the entity recognizer.
* **Tags**: [Tag](#tag)[]: Tags to associate with the entity recognizer.
* **VersionName**: string: The version name given to the entity recognizer.
* **VolumeKmsKeyId**: string: ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s).
* **VpcConfig**: [VpcConfig](#vpcconfig): Configuration parameters for an optional private VPC containing the resources you are using for your custom entity recognizer.

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

## EntityRecognizerAnnotations
### Properties
* **S3Uri**: string (Required): Specifies the Amazon S3 location where the annotations are located.
* **TestS3Uri**: string: Specifies the Amazon S3 location where the test annotations are located.

## EntityRecognizerDocuments
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): Specifies the Amazon S3 location where the training documents are located.
* **TestS3Uri**: string: Specifies the Amazon S3 location where the test documents are located.

## EntityRecognizerEntityList
### Properties
* **S3Uri**: string (Required): Specifies the Amazon S3 location where the entity list is located.

## EntityRecognizerInputDataConfig
### Properties
* **Annotations**: [EntityRecognizerAnnotations](#entityrecognizerannotations): The S3 location of the CSV file that annotates your training documents.
* **AugmentedManifests**: [AugmentedManifestsListItem](#augmentedmanifestslistitem)[]: A list of augmented manifest files that provide training data for a custom model.
* **DataFormat**: string: The format of your training data.
* **Documents**: [EntityRecognizerDocuments](#entityrecognizerdocuments): The S3 location of the folder that contains the training documents.
* **EntityList**: [EntityRecognizerEntityList](#entityrecognizerentitylist): The S3 location of the CSV file that has the entity list.
* **EntityTypes**: [EntityTypesListItem](#entitytypeslistitem)[] (Required): The entity types in the labeled training data.

## EntityTypesListItem
### Properties
* **Type**: string (Required): An entity type within a labeled training dataset.

## EntityTypesListItem
### Properties
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The initial part of a key-value pair that forms a tag associated with a given resource.
* **Value**: string (Required): The second part of a key-value pair that forms a tag associated with a given resource.

## Tag
### Properties
* **Key**: string (Required): The key of the key-value pair that forms a tag.
* **Value**: string (Required): The value of the key-value pair that forms a tag.

## Tag
### Properties
* **Key**: string (Required): The initial part of a key-value pair that forms a tag associated with a given resource.
* **Value**: string (Required): The second part of a key-value pair that forms a tag associated with a given resource.

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
* **SecurityGroupIds**: string[] (Required): The ID number for a security group on an instance of your private VPC.
* **Subnets**: string[] (Required): The ID for each subnet being used in your private VPC.

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required)
* **Subnets**: string[] (Required)

