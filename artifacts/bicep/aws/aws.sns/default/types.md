# AWS.SNS @ default

## Resource AWS.SNS/Subscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SNS/SubscriptionProperties](#awssnssubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.SNS/Topic@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SNS/TopicProperties](#awssnstopicproperties) (Identifier): properties of the resource

## Resource AWS.SNS/TopicInlinePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SNS/TopicInlinePolicyProperties](#awssnstopicinlinepolicyproperties) (Required, Identifier): properties of the resource

## AWS.SNS/SubscriptionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Arn of the subscription
* **DeliveryPolicy**: [Subscription_DeliveryPolicy](#subscriptiondeliverypolicy) | string: The delivery policy JSON assigned to the subscription. Enables the subscriber to define the message delivery retry strategy in the case of an HTTP/S endpoint subscribed to the topic.
* **Endpoint**: string: The subscription's endpoint. The endpoint value depends on the protocol that you specify. 
* **FilterPolicy**: [Subscription_FilterPolicy](#subscriptionfilterpolicy) | string: The filter policy JSON assigned to the subscription. Enables the subscriber to filter out unwanted messages.
* **FilterPolicyScope**: string: This attribute lets you choose the filtering scope by using one of the following string value types: MessageAttributes (default) and MessageBody.
* **Protocol**: string (Required): The subscription's protocol.
* **RawMessageDelivery**: bool: When set to true, enables raw message delivery. Raw messages don't contain any JSON formatting and can be sent to Amazon SQS and HTTP/S endpoints.
* **RedrivePolicy**: [Subscription_RedrivePolicy](#subscriptionredrivepolicy) | string: When specified, sends undeliverable messages to the specified Amazon SQS dead-letter queue. Messages that can't be delivered due to client errors are held in the dead-letter queue for further analysis or reprocessing.
* **Region**: string (WriteOnly): For cross-region subscriptions, the region in which the topic resides.If no region is specified, AWS CloudFormation uses the region of the caller as the default.
* **ReplayPolicy**: [Subscription_ReplayPolicy](#subscriptionreplaypolicy) | string: Specifies whether Amazon SNS resends the notification to the subscription when a message's attribute changes.
* **SubscriptionRoleArn**: string: This property applies only to Amazon Data Firehose delivery stream subscriptions.
* **TopicArn**: string (Required): The ARN of the topic to subscribe to.

## AWS.SNS/TopicInlinePolicyProperties
### Properties
* **PolicyDocument**: [TopicInlinePolicy_PolicyDocument](#topicinlinepolicypolicydocument) (Required): A policy document that contains permissions to add to the specified SNS topics.
* **TopicArn**: string (Required, Identifier): The Amazon Resource Name (ARN) of the topic to which you want to add the policy.

## AWS.SNS/TopicProperties
### Properties
* **ArchivePolicy**: [Topic_ArchivePolicy](#topicarchivepolicy): The archive policy determines the number of days SNS retains messages. You can set a retention period from 1 to 365 days.
* **ContentBasedDeduplication**: bool: Enables content-based deduplication for FIFO topics.
  +  By default, ``ContentBasedDeduplication`` is set to ``false``. If you create a FIFO topic and this attribute is ``false``, you must specify a value for the ``MessageDeduplicationId`` parameter for the [Publish](https://docs.aws.amazon.com/sns/latest/api/API_Publish.html) action. 
  +  When you set ``ContentBasedDeduplication`` to ``true``, SNS uses a SHA-256 hash to generate the ``MessageDeduplicationId`` using the body of the message (but not the attributes of the message).
 (Optional) To override the generated value, you can specify a value for the the ``MessageDeduplicationId`` parameter for the ``Publish`` action.
* **DataProtectionPolicy**: [Topic_DataProtectionPolicy](#topicdataprotectionpolicy): The body of the policy document you want to use for this topic.
 You can only add one policy per topic.
 The policy must be in JSON string format.
 Length Constraints: Maximum length of 30,720.
* **DeliveryStatusLogging**: [LoggingConfig](#loggingconfig)[]: The ``DeliveryStatusLogging`` configuration enables you to log the delivery status of messages sent from your Amazon SNS topic to subscribed endpoints with the following supported delivery protocols:
  +  HTTP 
  +  Amazon Kinesis Data Firehose
  +   AWS Lambda
  +  Platform application endpoint
  +  Amazon Simple Queue Service
  
 Once configured, log entries are sent to Amazon CloudWatch Logs.
* **DisplayName**: string: The display name to use for an SNS topic with SMS subscriptions. The display name must be maximum 100 characters long, including hyphens (-), underscores (_), spaces, and tabs.
* **FifoThroughputScope**: string
* **FifoTopic**: bool: Set to true to create a FIFO topic.
* **KmsMasterKeyId**: string: The ID of an AWS managed customer master key (CMK) for SNS or a custom CMK. For more information, see [Key terms](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html#sse-key-terms). For more examples, see ``KeyId`` in the *API Reference*.
 This property applies only to [server-side-encryption](https://docs.aws.amazon.com/sns/latest/dg/sns-server-side-encryption.html).
* **SignatureVersion**: string: The signature version corresponds to the hashing algorithm used while creating the signature of the notifications, subscription confirmations, or unsubscribe confirmation messages sent by Amazon SNS. By default, ``SignatureVersion`` is set to ``1``.
* **Subscription**: [Subscription](#subscription)[]: The SNS subscriptions (endpoints) for this topic.
  If you specify the ``Subscription`` property in the ``AWS::SNS::Topic`` resource and it creates an associated subscription resource, the associated subscription is not deleted when the ``AWS::SNS::Topic`` resource is deleted.
* **Tags**: [Tag](#tag)[]: The list of tags to add to a new topic.
  To be able to tag a topic on creation, you must have the ``sns:CreateTopic`` and ``sns:TagResource`` permissions.
* **TopicArn**: string (ReadOnly, Identifier)
* **TopicName**: string: The name of the topic you want to create. Topic names must include only uppercase and lowercase ASCII letters, numbers, underscores, and hyphens, and must be between 1 and 256 characters long. FIFO topic names must end with ``.fifo``.
 If you don't specify a name, CFN generates a unique physical ID and uses that ID for the topic name. For more information, see [Name type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **TracingConfig**: string: Tracing mode of an SNS topic. By default ``TracingConfig`` is set to ``PassThrough``, and the topic passes through the tracing header it receives from an SNS publisher to its subscriptions. If set to ``Active``, SNS will vend X-Ray segment data to topic owner account if the sampled flag in the tracing header is true.

## LoggingConfig
### Properties
* **FailureFeedbackRoleArn**: string: The IAM role ARN to be used when logging failed message deliveries in Amazon CloudWatch.
* **Protocol**: string (Required): Indicates one of the supported protocols for the Amazon SNS topic.
  At least one of the other three ``LoggingConfig`` properties is recommend along with ``Protocol``.
* **SuccessFeedbackRoleArn**: string: The IAM role ARN to be used when logging successful message deliveries in Amazon CloudWatch.
* **SuccessFeedbackSampleRate**: string: The percentage of successful message deliveries to be logged in Amazon CloudWatch. Valid percentage values range from 0 to 100.

## Subscription
### Properties
* **Endpoint**: string (Required): The endpoint that receives notifications from the SNS topic. The endpoint value depends on the protocol that you specify. For more information, see the ``Endpoint`` parameter of the ``Subscribe`` action in the *API Reference*.
* **Protocol**: string (Required): The subscription's protocol. For more information, see the ``Protocol`` parameter of the ``Subscribe`` action in the *API Reference*.

## Tag
### Properties
* **Key**: string (Required): The required key portion of the tag.
* **Value**: string (Required): The optional value portion of the tag.

## Topic_ArchivePolicy
### Properties

## Topic_DataProtectionPolicy
### Properties

## TopicInlinePolicy_PolicyDocument
### Properties

