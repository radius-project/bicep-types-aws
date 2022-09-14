# AWS.Rekognition @ default

## Resource AWS.Rekognition/Collection@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Rekognition/CollectionProperties](#awsrekognitioncollectionproperties) (Required): properties of the resource

## Resource AWS.Rekognition/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Rekognition/ProjectProperties](#awsrekognitionprojectproperties) (Required): properties of the resource

## Resource AWS.Rekognition/StreamProcessor@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Rekognition/StreamProcessorProperties](#awsrekognitionstreamprocessorproperties) (Required): properties of the resource

## AWS.Rekognition/CollectionProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **CollectionId**: [CollectionId](#collectionid) (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Arn
### Properties

## CollectionId
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Rekognition/ProjectProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **ProjectName**: [ProjectName](#projectname) (Required)

## Arn
### Properties

## ProjectName
### Properties

## AWS.Rekognition/StreamProcessorProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **BoundingBoxRegionsOfInterest**: [BoundingBox](#boundingbox)[]: The BoundingBoxRegionsOfInterest specifies an array of bounding boxes of interest in the video frames to analyze, as part of connected home feature. If an object is partially in a region of interest, Rekognition will tag it as detected if the overlap of the object with the region-of-interest is greater than 20%.
* **ConnectedHomeSettings**: [ConnectedHomeSettings](#connectedhomesettings)
* **DataSharingPreference**: [DataSharingPreference](#datasharingpreference)
* **FaceSearchSettings**: [FaceSearchSettings](#facesearchsettings)
* **KinesisDataStream**: [KinesisDataStream](#kinesisdatastream)
* **KinesisVideoStream**: [KinesisVideoStream](#kinesisvideostream) (Required)
* **KmsKeyId**: string: The KMS key that is used by Rekognition to encrypt any intermediate customer metadata and store in the customer's S3 bucket.
* **Name**: string: Name of the stream processor. It's an identifier you assign to the stream processor. You can use it to manage the stream processor.
* **NotificationChannel**: [NotificationChannel](#notificationchannel)
* **PolygonRegionsOfInterest**: [Polygon](#polygon)[]: The PolygonRegionsOfInterest specifies a set of polygon areas of interest in the video frames to analyze, as part of connected home feature. Each polygon is in turn, an ordered list of Point
* **RoleArn**: string (Required): ARN of the IAM role that allows access to the stream processor, and provides Rekognition read permissions for KVS stream and write permissions to S3 bucket and SNS topic.
* **S3Destination**: [S3Destination](#s3destination)
* **Status**: string (ReadOnly): Current status of the stream processor.
* **StatusMessage**: string (ReadOnly): Detailed status message about the stream processor.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Arn
### Properties

## BoundingBox
### Properties
* **Height**: int (Required)
* **Left**: int (Required)
* **Top**: int (Required)
* **Width**: int (Required)

## ConnectedHomeSettings
### Properties
* **Labels**: [Labels](#labels) (Required)
* **MinConfidence**: int: Minimum object class match confidence score that must be met to return a result for a recognized object.

## Labels
### Properties

## DataSharingPreference
### Properties
* **OptIn**: bool (Required): Flag to enable data-sharing

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

## Polygon
### Properties

## S3Destination
### Properties
* **BucketName**: string (Required): Name of the S3 bucket.
* **ObjectKeyPrefix**: string: The object key prefix path where the results will be stored. Default is no prefix path

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

