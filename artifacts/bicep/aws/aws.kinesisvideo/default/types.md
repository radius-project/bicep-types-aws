# AWS.KinesisVideo @ default

## Resource AWS.KinesisVideo/SignalingChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KinesisVideo/SignalingChannelProperties](#awskinesisvideosignalingchannelproperties): properties of the resource

## Resource AWS.KinesisVideo/Stream@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KinesisVideo/StreamProperties](#awskinesisvideostreamproperties): properties of the resource

## AWS.KinesisVideo/SignalingChannelProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Kinesis Video Signaling Channel.
* **MessageTtlSeconds**: int: The period of time a signaling channel retains undelivered messages before they are discarded.
* **Name**: string: The name of the Kinesis Video Signaling Channel.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string: The type of the Kinesis Video Signaling Channel to create. Currently, SINGLE_MASTER is the only supported channel type.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.  The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.KinesisVideo/StreamProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Kinesis Video stream.
* **DataRetentionInHours**: int: The number of hours till which Kinesis Video will retain the data in the stream
* **DeviceName**: string: The name of the device that is writing to the stream.
* **KmsKeyId**: string: AWS KMS key ID that Kinesis Video Streams uses to encrypt stream data.
* **MediaType**: string: The media type of the stream. Consumers of the stream can use this information when processing the stream.
* **Name**: string: The name of the Kinesis Video stream.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs associated with the Kinesis Video Stream.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. Specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. Specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. The following characters can be used: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

