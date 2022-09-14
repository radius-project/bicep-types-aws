# AWS.Kinesis @ default

## Resource AWS.Kinesis/Stream@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Kinesis/StreamProperties](#awskinesisstreamproperties): properties of the resource

## AWS.Kinesis/StreamProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon resource name (ARN) of the Kinesis stream
* **Name**: string: The name of the Kinesis stream.
* **RetentionPeriodHours**: int: The number of hours for the data records that are stored in shards to remain accessible.
* **ShardCount**: int: The number of shards that the stream uses. Required when StreamMode = PROVISIONED is passed.
* **StreamEncryption**: [StreamEncryption](#streamencryption): When specified, enables or updates server-side encryption using an AWS KMS key for a specified stream.
* **StreamModeDetails**: [StreamModeDetails](#streammodedetails): The mode in which the stream is running.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key–value pairs) to associate with the Kinesis stream.

## StreamEncryption
### Properties
* **EncryptionType**: string (Required): The encryption type to use. The only valid value is KMS. 
* **KeyId**: string (Required): The GUID for the customer-managed AWS KMS key to use for encryption. This value can be a globally unique identifier, a fully specified Amazon Resource Name (ARN) to either an alias or a key, or an alias name prefixed by "alias/".You can also use a master key owned by Kinesis Data Streams by specifying the alias aws/kinesis.

## StreamModeDetails
### Properties
* **StreamMode**: string (Required): The mode of the stream

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

