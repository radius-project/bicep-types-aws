# AWS.Rekognition @ default

## Resource AWS.Rekognition/Collection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Rekognition/CollectionProperties](#awsrekognitioncollectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Rekognition/Dataset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Rekognition/DatasetProperties](#awsrekognitiondatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Rekognition/Project@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Rekognition/ProjectProperties](#awsrekognitionprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.Rekognition/ProjectVersion@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Rekognition/ProjectVersionProperties](#awsrekognitionprojectversionproperties) (Identifier): properties of the resource

## Resource AWS.Rekognition/StreamProcessor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Rekognition/StreamProcessorProperties](#awsrekognitionstreamprocessorproperties) (Required, Identifier): properties of the resource

## AWS.Rekognition/CollectionProperties
### Properties
* **Arn**: string (ReadOnly)
* **CollectionId**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Rekognition/DatasetProperties
### Properties
* **DatasetArn**: string (ReadOnly, Identifier): The ARN of the dataset.
* **DatasetType**: string (Required): The type of the dataset. Specify TRAIN to create a training dataset. Specify TEST to create a test dataset.
* **ProjectArn**: string (WriteOnly): The ARN of the project to which the dataset belongs.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Rekognition/ProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **ProjectName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Rekognition/ProjectVersionProperties
### Properties
* **BaseModelVersion**: string (ReadOnly): The base detection model version used to create the project version.
* **BillableTrainingTimeInSeconds**: int (ReadOnly): The duration, in seconds, that you were billed for a successful training of the model version.
* **CreationTimestamp**: string (ReadOnly): The Unix datetime for the date and time that training started.
* **EvaluationResult**: [EvaluationResult](#evaluationresult) (ReadOnly)
* **Feature**: string (ReadOnly): The feature that was customized.
* **FeatureConfig**: [CustomizationFeatureConfig](#customizationfeatureconfig)
* **KmsKeyId**: string: The identifier for your AWS Key Management Service key (AWS KMS key) used to encrypt training and test images, manifest files, and training results.
* **OutputConfig**: [OutputConfig](#outputconfig)
* **ProjectArn**: string: The ARN of the Amazon Rekognition project that manages this project version.
* **ProjectVersionArn**: string (Identifier): The Amazon Resource Name (ARN) of the project version.
* **Status**: string (ReadOnly): The current status of the project version.
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of key-value pairs to apply to this resource.
* **TrainingEndTimestamp**: string (ReadOnly): The Unix date and time that training of the model ended.
* **VersionDescription**: string: A description applied to the project version.
* **VersionName**: string: A name for the version of the project version. This value must be unique.

## AWS.Rekognition/StreamProcessorProperties
### Properties
* **Arn**: string (ReadOnly)
* **BoundingBoxRegionsOfInterest**: [BoundingBox](#boundingbox)[]: The BoundingBoxRegionsOfInterest specifies an array of bounding boxes of interest in the video frames to analyze, as part of connected home feature. If an object is partially in a region of interest, Rekognition will tag it as detected if the overlap of the object with the region-of-interest is greater than 20%.
* **ConnectedHomeSettings**: [ConnectedHomeSettings](#connectedhomesettings)
* **DataSharingPreference**: [DataSharingPreference](#datasharingpreference)
* **FaceSearchSettings**: [FaceSearchSettings](#facesearchsettings)
* **KinesisDataStream**: [KinesisDataStream](#kinesisdatastream)
* **KinesisVideoStream**: [KinesisVideoStream](#kinesisvideostream) (Required)
* **KmsKeyId**: string: The KMS key that is used by Rekognition to encrypt any intermediate customer metadata and store in the customer's S3 bucket.
* **Name**: string (Identifier): Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor.
* **NotificationChannel**: [NotificationChannel](#notificationchannel)
* **PolygonRegionsOfInterest**: [Point](#point)[][]: The PolygonRegionsOfInterest specifies a set of polygon areas of interest in the video frames to analyze, as part of connected home feature. Each polygon is in turn, an ordered list of Point
* **RoleArn**: string (Required): ARN of the IAM role that allows access to the stream processor, and provides Rekognition read permissions for KVS stream and write permissions to S3 bucket and SNS topic.
* **S3Destination**: [S3Destination](#s3destination)
* **Status**: string (ReadOnly): Current status of the stream processor.
* **StatusMessage**: string (ReadOnly): Detailed status message about the stream processor.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## BoundingBox
### Properties
* **Height**: int (Required)
* **Left**: int (Required)
* **Top**: int (Required)
* **Width**: int (Required)

## ConnectedHomeSettings
### Properties
* **Labels**: string[] (Required)
* **MinConfidence**: int: Minimum object class match confidence score that must be met to return a result for a recognized object.

## ContentModerationConfig
### Properties
* **ConfidenceThreshold**: int: The confidence level you plan to use to identify if unsafe content is present during inference.

## CustomizationFeatureConfig
### Properties
* **ContentModeration**: [ContentModerationConfig](#contentmoderationconfig)

## DataSharingPreference
### Properties
* **OptIn**: bool (Required): Flag to enable data-sharing

## EvaluationResult
### Properties
* **F1Score**: int: The F1 score for the evaluation of all labels.

## FaceSearchSettings
### Properties
* **CollectionId**: string (Required): The ID of a collection that contains faces that you want to search for.
* **FaceMatchThreshold**: int: Minimum face match confidence score percentage that must be met to return a result for a recognized face. The default is 80. 0 is the lowest confidence. 100 is the highest confidence. Values between 0 and 100 are accepted.

## KinesisDataStream
### Properties
* **Arn**: string (Required): ARN of the Kinesis Data Stream stream.

## KinesisVideoStream
### Properties
* **Arn**: string (Required): ARN of the Kinesis Video Stream that streams the source video.

## NotificationChannel
### Properties
* **Arn**: string (Required): ARN of the SNS topic.

## OutputConfig
### Properties
* **S3Bucket**: string: The S3 bucket where training output is placed.
* **S3KeyPrefix**: string: The prefix applied to the training output files.

## Point
### Properties
* **X**: int (Required): The X coordinate of the point.
* **Y**: int (Required): The Y coordinate of the point.

## S3Destination
### Properties
* **BucketName**: string (Required): Name of the S3 bucket.
* **ObjectKeyPrefix**: string: The object key prefix path where the results will be stored. Default is no prefix path

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

