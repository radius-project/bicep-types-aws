# AWS.IVSChat @ default

## Resource AWS.IVSChat/LoggingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVSChat/LoggingConfigurationProperties](#awsivschatloggingconfigurationproperties) (Required): properties of the resource

## Resource AWS.IVSChat/Room@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVSChat/RoomProperties](#awsivschatroomproperties): properties of the resource

## AWS.IVSChat/LoggingConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): LoggingConfiguration ARN is automatically generated on creation and assigned as the unique identifier.
* **DestinationConfiguration**: [DestinationConfiguration](#destinationconfiguration) (Required)
* **Id**: string (ReadOnly): The system-generated ID of the logging configuration.
* **Name**: string: The name of the logging configuration. The value does not need to be unique.
* **State**: string (ReadOnly): The state of the logging configuration. When the state is ACTIVE, the configuration is ready to log chat content.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DestinationConfiguration
### Properties
* **CloudWatchLogs**: [CloudWatchLogsDestinationConfiguration](#cloudwatchlogsdestinationconfiguration)
* **Firehose**: [FirehoseDestinationConfiguration](#firehosedestinationconfiguration)
* **S3**: [S3DestinationConfiguration](#s3destinationconfiguration)

## CloudWatchLogsDestinationConfiguration
### Properties
* **LogGroupName**: string (Required): Name of the Amazon CloudWatch Logs log group where chat activity will be logged.

## FirehoseDestinationConfiguration
### Properties
* **DeliveryStreamName**: string (Required): Name of the Amazon Kinesis Firehose delivery stream where chat activity will be logged.

## S3DestinationConfiguration
### Properties
* **BucketName**: string (Required): Name of the Amazon S3 bucket where chat activity will be logged.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IVSChat/RoomProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Room ARN is automatically generated on creation and assigned as the unique identifier.
* **Id**: string (ReadOnly): The system-generated ID of the room.
* **LoggingConfigurationIdentifiers**: string[]: Array of logging configuration identifiers attached to the room.
* **MaximumMessageLength**: int: The maximum number of characters in a single message.
* **MaximumMessageRatePerSecond**: int: The maximum number of messages per second that can be sent to the room.
* **MessageReviewHandler**: [MessageReviewHandler](#messagereviewhandler)
* **Name**: string: The name of the room. The value does not need to be unique.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## MessageReviewHandler
### Properties
* **FallbackResult**: string: Specifies the fallback behavior if the handler does not return a valid response, encounters an error, or times out.
* **Uri**: string: Identifier of the message review handler.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

