# AWS.Comprehend @ default

## Resource AWS.Comprehend/DocumentClassificationJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/DocumentClassificationJobProperties](#awscomprehenddocumentclassificationjobproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.Comprehend/DominantLanguageDetectionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/DominantLanguageDetectionJobProperties](#awscomprehenddominantlanguagedetectionjobproperties) (Identifier): properties of the resource

## Resource AWS.Comprehend/EntitiesDetectionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/EntitiesDetectionJobProperties](#awscomprehendentitiesdetectionjobproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.Comprehend/FlywheelDataset@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/FlywheelDatasetProperties](#awscomprehendflywheeldatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/PiiEntitiesDetectionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/PiiEntitiesDetectionJobProperties](#awscomprehendpiientitiesdetectionjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/SentimentDetectionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/SentimentDetectionJobProperties](#awscomprehendsentimentdetectionjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Comprehend/TargetedSentimentDetectionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Comprehend/TargetedSentimentDetectionJobProperties](#awscomprehendtargetedsentimentdetectionjobproperties) (Required, Identifier): properties of the resource

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

## AWS.Comprehend/DocumentClassificationJobProperties
### Properties
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **DocumentClassifierArn**: string (Required): The Amazon Resource Name (ARN) of the document classifier to use to process the job.
* **InputDataConfig**: [InputDataConfig](#inputdataconfig) (Required): Specifies the format and location of the input data for the job.
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the document classification job.
* **JobId**: string (ReadOnly): The identifier assigned to the document classification job.
* **JobName**: string: The name that you assigned the document classification job.
* **JobStatus**: string (ReadOnly): The current status of the document classification job.
* **OutputDataConfig**: [OutputDataConfig](#outputdataconfig) (ReadOnly): Specifies where to send the output files.
* **SubmitTime**: string (ReadOnly): The time that the document classification job was submitted for processing.
* **Tags**: [Tag](#tag)[]: Tags associated with the document classification job.

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

## AWS.Comprehend/DominantLanguageDetectionJobProperties
### Properties
* **DataAccessRoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **InputDataConfig**: [InputDataConfig](#inputdataconfig)
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the dominant language detection job.
* **JobId**: string (ReadOnly): The identifier assigned to the dominant language detection job.
* **JobName**: string: The name that you assigned to the dominant language detection job.
* **JobStatus**: string (ReadOnly): The current status of the dominant language detection job.
* **OutputDataConfig**: [OutputDataConfig](#outputdataconfig) (ReadOnly)
* **Tags**: [Tag](#tag)[]: Tags associated with the dominant language detection job.
* **VolumeKmsKeyId**: string: ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the job.

## AWS.Comprehend/EntitiesDetectionJobProperties
### Properties
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **InputDataConfig**: [InputDataConfig](#inputdataconfig) (Required): Specifies the format and location of the input data for the job.
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the entities detection job.
* **JobId**: string (ReadOnly): The identifier assigned to the entities detection job.
* **JobName**: string: The name that you assigned the entities detection job.
* **JobStatus**: string (ReadOnly): The current status of the entities detection job.
* **LanguageCode**: string (Required): The language of the input documents.
* **OutputDataConfig**: [OutputDataConfig](#outputdataconfig) (ReadOnly): Specifies where to send the output files.
* **SubmitTime**: string (ReadOnly): The time that the entities detection job was submitted for processing.
* **Tags**: [Tag](#tag)[]: Tags associated with the entities detection job.

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

## AWS.Comprehend/FlywheelDatasetProperties
### Properties
* **CreationTime**: string (ReadOnly): Creation time of the dataset.
* **DatasetArn**: string (Identifier): The ARN of the dataset.
* **DatasetName**: string (Required): Name of the dataset.
* **DatasetS3Uri**: string (ReadOnly): The S3 URI where the dataset is stored.
* **DatasetType**: string: The dataset type (training data or test data).
* **Description**: string: Description of the dataset.
* **FlywheelArn**: string (Required): The Amazon Resource Number (ARN) of the flywheel.
* **NumberOfDocuments**: int (ReadOnly): The number of documents in the dataset.
* **Status**: string (ReadOnly): The dataset status.
* **Tags**: [Tag](#tag)[]: Tags for the dataset.

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

## AWS.Comprehend/PiiEntitiesDetectionJobProperties
### Properties
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **InputDataConfig**: [PiiEntitiesDetectionJob_InputDataConfig](#piientitiesdetectionjobinputdataconfig) (Required): The input properties for a PII entities detection job.
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the PII entities detection job.
* **JobId**: string (ReadOnly): The identifier assigned to the PII entities detection job.
* **JobName**: string: The identifier of the job.
* **JobStatus**: string (ReadOnly): The current status of the PII entities detection job.
* **LanguageCode**: string (Required): The language of the input documents.
* **Mode**: string (Required): Specifies whether the output provides the locations (offsets) of PII entities or a file in which PII entities are redacted.
* **OutputDataConfig**: [PiiEntitiesDetectionJob_OutputDataConfig](#piientitiesdetectionjoboutputdataconfig) (ReadOnly): Provides configuration parameters for the output of PII entity detection jobs.
* **RedactionConfig**: [PiiEntitiesDetectionJob_RedactionConfig](#piientitiesdetectionjobredactionconfig): Provides configuration parameters for PII entity redaction.
* **SubmitTime**: string (ReadOnly): The time that the PII entities detection job was submitted for processing.
* **Tags**: [PiiEntitiesDetectionJob_Tags](#piientitiesdetectionjobtags)[]: Tags associated with the PII entities detection job.

## AWS.Comprehend/SentimentDetectionJobProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the sentiment detection job.
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **InputDataConfig**: [InputDataConfig](#inputdataconfig) (Required)
* **JobId**: string (ReadOnly): The identifier assigned to the sentiment detection job.
* **JobName**: string: The name that you assigned to the sentiment detection job.
* **JobStatus**: string (ReadOnly): The current status of the sentiment detection job.
* **LanguageCode**: string (Required): The language of the input documents.
* **Tags**: [Tag](#tag)[]: Tags associated with the sentiment detection job.

## AWS.Comprehend/TargetedSentimentDetectionJobProperties
### Properties
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that grants Amazon Comprehend read access to your input data.
* **EndTime**: string (ReadOnly): The time that the targeted sentiment detection job completed.
* **InputDataConfig**: [TargetedSentimentDetectionJob_InputDataConfig](#targetedsentimentdetectionjobinputdataconfig) (Required): The input properties for a targeted sentiment detection job.
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the targeted sentiment detection job.
* **JobId**: string (ReadOnly): The identifier assigned to the targeted sentiment detection job.
* **JobName**: string: The identifier of the job.
* **JobStatus**: string (ReadOnly): The current status of the targeted sentiment detection job.
* **LanguageCode**: string (Required): The language of the input documents. Currently, English is the only supported language.
* **OutputDataConfig**: [TargetedSentimentDetectionJob_OutputDataConfig](#targetedsentimentdetectionjoboutputdataconfig) (ReadOnly): Provides configuration parameters for the output of targeted sentiment detection jobs.
* **SubmitTime**: string (ReadOnly): The time that the targeted sentiment detection job was submitted for processing.
* **Tags**: [TargetedSentimentDetectionJob_Tags](#targetedsentimentdetectionjobtags)[]: Tags associated with the targeted sentiment detection job.
* **VolumeKmsKeyId**: string: ID for the AWS KMS key that Amazon Comprehend uses to encrypt data on the storage volume attached to the ML compute instance(s) that process the analysis job.

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

## InputDataConfig
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): The Amazon S3 URI for the input data.

## InputDataConfig
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): The Amazon S3 URI for the input data.

## InputDataConfig
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): The Amazon S3 URI for the input data.

## InputDataConfig
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): The Amazon S3 URI for the input data.

## OutputDataConfig
### Properties
* **S3Uri**: string (Required): When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data.

## OutputDataConfig
### Properties
* **KmsKeyId**: string: ID for the AWS KMS key that Amazon Comprehend uses to encrypt the output results.
* **S3Uri**: string (Required): The Amazon S3 URI for the output data.

## OutputDataConfig
### Properties
* **S3Uri**: string (Required): When you use the OutputDataConfig object with asynchronous operations, you specify the Amazon S3 location where you want to write the output data.

## PiiEntitiesDetectionJob_InputDataConfig
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): The Amazon S3 URI for the input data.

## PiiEntitiesDetectionJob_OutputDataConfig
### Properties
* **S3Uri**: string (Required): The Amazon S3 URI where the output is written.

## PiiEntitiesDetectionJob_RedactionConfig
### Properties
* **MaskCharacter**: string: A character that replaces each character in the redacted PII entity.
* **MaskMode**: string: Specifies whether the PII entity is redacted with the mask character or the entity type.
* **PiiEntityTypes**: string[]: An array of the types of PII entities that Amazon Comprehend detects.

## PiiEntitiesDetectionJob_Tags
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

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
* **Key**: string (Required): The initial part of a key-value pair.
* **Value**: string (Required): The second part of a key-value pair.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key for the tag.
* **Value**: string (Required): The value for the tag.

## TargetedSentimentDetectionJob_InputDataConfig
### Properties
* **InputFormat**: string: Specifies how the text in an input file should be processed.
* **S3Uri**: string (Required): The Amazon S3 URI for the input data.

## TargetedSentimentDetectionJob_OutputDataConfig
### Properties
* **KmsKeyId**: string: ID for the AWS KMS key that Amazon Comprehend uses to encrypt the output results.
* **S3Uri**: string (Required): The Amazon S3 URI where the output is written.

## TargetedSentimentDetectionJob_Tags
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

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

