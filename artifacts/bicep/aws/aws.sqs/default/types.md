# AWS.SQS @ default

## Resource AWS.SQS/Queue@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SQS/QueueProperties](#awssqsqueueproperties): properties of the resource

## AWS.SQS/QueueProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the queue.
* **ContentBasedDeduplication**: bool: For first-in-first-out (FIFO) queues, specifies whether to enable content-based deduplication. During the deduplication interval, Amazon SQS treats messages that are sent with identical content as duplicates and delivers only one copy of the message.
* **DeduplicationScope**: string: Specifies whether message deduplication occurs at the message group or queue level. Valid values are messageGroup and queue.
* **DelaySeconds**: int: The time in seconds for which the delivery of all messages in the queue is delayed. You can specify an integer value of 0 to 900 (15 minutes). The default value is 0.
* **FifoQueue**: bool: If set to true, creates a FIFO queue. If you don't specify this property, Amazon SQS creates a standard queue.
* **FifoThroughputLimit**: string: Specifies whether the FIFO queue throughput quota applies to the entire queue or per message group. Valid values are perQueue and perMessageGroupId. The perMessageGroupId value is allowed only when the value for DeduplicationScope is messageGroup.
* **KmsDataKeyReusePeriodSeconds**: int: The length of time in seconds for which Amazon SQS can reuse a data key to encrypt or decrypt messages before calling AWS KMS again. The value must be an integer between 60 (1 minute) and 86,400 (24 hours). The default is 300 (5 minutes).
* **KmsMasterKeyId**: string: The ID of an AWS managed customer master key (CMK) for Amazon SQS or a custom CMK. To use the AWS managed CMK for Amazon SQS, specify the (default) alias alias/aws/sqs.
* **MaximumMessageSize**: int: The limit of how many bytes that a message can contain before Amazon SQS rejects it. You can specify an integer value from 1,024 bytes (1 KiB) to 262,144 bytes (256 KiB). The default value is 262,144 (256 KiB).
* **MessageRetentionPeriod**: int: The number of seconds that Amazon SQS retains a message. You can specify an integer value from 60 seconds (1 minute) to 1,209,600 seconds (14 days). The default value is 345,600 seconds (4 days).
* **QueueName**: string: A name for the queue. To create a FIFO queue, the name of your FIFO queue must end with the .fifo suffix.
* **QueueUrl**: string (ReadOnly): URL of the source queue.
* **ReceiveMessageWaitTimeSeconds**: int: Specifies the duration, in seconds, that the ReceiveMessage action call waits until a message is in the queue in order to include it in the response, rather than returning an empty response if a message isn't yet available. You can specify an integer from 1 to 20. Short polling is used as the default or when you specify 0 for this property.
* **RedriveAllowPolicy**: [Queue_RedriveAllowPolicy](#queueredriveallowpolicy) | string: The string that includes the parameters for the permissions for the dead-letter queue redrive permission and which source queues can specify dead-letter queues as a JSON object.
* **RedrivePolicy**: [Queue_RedrivePolicy](#queueredrivepolicy) | string: A string that includes the parameters for the dead-letter queue functionality (redrive policy) of the source queue.
* **SqsManagedSseEnabled**: bool: Enables server-side queue encryption using SQS owned encryption keys. Only one server-side encryption option is supported per queue (e.g. SSE-KMS or SSE-SQS ).
* **Tags**: [Tag](#tag)[]: The tags that you attach to this queue.
* **VisibilityTimeout**: int: The length of time during which a message will be unavailable after a message is delivered from the queue. This blocks other components from receiving the same message and gives the initial component time to process and delete the message from the queue. Values must be from 0 to 43,200 seconds (12 hours). If you don't specify a value, AWS CloudFormation uses the default value of 30 seconds.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

