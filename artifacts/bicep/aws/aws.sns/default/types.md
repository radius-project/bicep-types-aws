# AWS.SNS @ default

## Resource AWS.SNS/Topic@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SNS/TopicProperties](#awssnstopicproperties): properties of the resource

## AWS.SNS/TopicProperties
### Properties
* **ContentBasedDeduplication**: bool: Enables content-based deduplication for FIFO topics. By default, ContentBasedDeduplication is set to false. If you create a FIFO topic and this attribute is false, you must specify a value for the MessageDeduplicationId parameter for the Publish action.

When you set ContentBasedDeduplication to true, Amazon SNS uses a SHA-256 hash to generate the MessageDeduplicationId using the body of the message (but not the attributes of the message).

(Optional) To override the generated value, you can specify a value for the the MessageDeduplicationId parameter for the Publish action.


* **DisplayName**: string: The display name to use for an Amazon SNS topic with SMS subscriptions.
* **FifoTopic**: bool: Set to true to create a FIFO topic.
* **KmsMasterKeyId**: string: The ID of an AWS-managed customer master key (CMK) for Amazon SNS or a custom CMK. For more information, see Key Terms. For more examples, see KeyId in the AWS Key Management Service API Reference.

This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).
* **Subscription**: [Subscription](#subscription)[]: The SNS subscriptions (endpoints) for this topic.
* **Tags**: [Tag](#tag)[]
* **TopicArn**: string (ReadOnly)
* **TopicName**: string: The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with .fifo.

If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the topic name. For more information, see Name Type.

## Subscription
### Properties
* **Endpoint**: string
* **Protocol**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 characters in length.

