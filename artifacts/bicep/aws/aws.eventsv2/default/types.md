# AWS.EventsV2 @ default

## Resource AWS.EventsV2/EventBus@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventsV2/EventBusProperties](#awseventsv2eventbusproperties) (Required, Identifier): properties of the resource

## Resource AWS.EventsV2/EventSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventsV2/EventSourceProperties](#awseventsv2eventsourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.EventsV2/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventsV2/ResourcePolicyProperties](#awseventsv2resourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.EventsV2/Subscriber@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventsV2/SubscriberProperties](#awseventsv2subscriberproperties) (Required, Identifier): properties of the resource

## AWS.EventsV2/EventBusProperties
### Properties
* **CreationTime**: string (ReadOnly): The time the event bus was created, as an ISO 8601 timestamp.
* **Description**: string: A description of the event bus. Control characters and Unicode line separators are not allowed.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): Encryption configuration for the event bus. The service stores and returns the customer managed key as its key ARN. The key ARN is recommended so that drift detection stays accurate. A key ID is also accepted and is matched to the returned key ARN when CloudFormation checks for drift; a key alias is accepted but can be reported as a value difference, because an alias cannot be matched to the key ARN it points to.
* **EventBusArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the event bus.
* **LastModifiedTime**: string (ReadOnly): The time the event bus was last modified, as an ISO 8601 timestamp.
* **Name**: string (Required): The name of the event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.
* **State**: string (ReadOnly): The lifecycle state of the event bus. The settled operational state is ACTIVE.
* **StorageConfiguration**: [StorageConfiguration](#storageconfiguration): The event storage configuration for the event bus, which controls the number of days events are retained on the bus.
* **Tags**: [Tag](#tag)[]: The tags assigned to the event bus.

## AWS.EventsV2/EventSourceProperties
### Properties
* **Configuration**: [EventSourceConfiguration](#eventsourceconfiguration) (Required): The event source configuration. Specify exactly one of AwsServiceEventsConfiguration, PartnerEventsConfiguration or WebhookEventsConfiguration.
* **CreationTime**: string (ReadOnly): The time the event source was created, as an ISO 8601 timestamp.
* **Description**: string: A description of the event source. Control characters and Unicode line separators are not allowed.
* **Details**: [EventSourceDetails](#eventsourcedetails): Values EventBridge generated for the event source, such as a webhook's URL and the ARN of its secret. Absent for event source types that have no generated values.
* **EventBusArn**: string (Required): The ARN of the custom event bus the event source forwards onto.
* **EventSourceArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the event source. Its resource segment has the form event-sourcev2/<type>/<name>/<id>. Amazon EventBridge sets the type segment, which is not part of the event source name. The id segment is a 25-character identifier that EventBridge generates.

Valid values for the type segment:
- aws.service - AWS service events.
- aws.partner - Partner events.
- webhook - Webhook events.
* **LastModifiedTime**: string (ReadOnly): The time the event source was last modified, as an ISO 8601 timestamp.
* **Name**: string (Required): The name of the event source. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. Names cannot begin with the reserved aws. prefix.
* **Revoked**: bool (ReadOnly): Whether the event bus owner has revoked this event source. Revocation is permanent: a revoked event source cannot be updated, but it can be deleted.
* **State**: string (ReadOnly): The lifecycle state of the event source: CREATING, ACTIVE, UPDATING, CREATE_FAILED, UPDATE_FAILED, DELETING, or DELETE_FAILED. Revocation by the event bus owner is reported by the Revoked property, not by the state.
* **Tags**: [Tag](#tag)[]: The tags assigned to the event source.

## AWS.EventsV2/ResourcePolicyProperties
### Properties
* **EventBusArn**: string (Required, Identifier): The Amazon Resource Name (ARN) of the event bus whose resource policy this is. The bus must already exist. This resource does not create it.
* **PolicyDocument**: [ResourcePolicy_PolicyDocument](#resourcepolicypolicydocument) (Required): The resource policy document, as a JSON object. The document can be up to 20 KB. This quota is adjustable. An empty object is not a valid policy. To remove the policy, delete this resource. The principals in the document must exist and be visible to the service when the policy is written. When you create a new IAM role or user, that principal might not be immediately visible to the service. You might need to enforce a delay before you include it in the document. For more information, see "Changes that I make are not always immediately visible" in the IAM User Guide. Declare Version. Write AWS account and role principals as ARNs rather than as account IDs. Write a single Action, Resource, or principal value as a scalar rather than as a one-element list. The service returns these forms as you wrote them. It normalizes other forms, and a normalized value can appear as drift. A stack update replaces the whole policy with this document, including any change made outside CloudFormation. For more information about event bus resource policies, see the Amazon EventBridge User Guide.
* **RevisionId**: string (ReadOnly): The revision identifier the service assigned to the stored policy. The identifier changes on every successful write.

## AWS.EventsV2/SubscriberProperties
### Properties
* **BatchConfiguration**: [BatchConfiguration](#batchconfiguration): Configuration for batching events into a single delivery to the target.
* **BusName**: string (ReadOnly): The name of the event bus this subscriber belongs to. This property is read-only.
* **CreationTime**: string (ReadOnly): Creation timestamp (ISO-8601), read-only.
* **Description**: string: A description of the subscriber. Control characters and Unicode line separators are not allowed.
* **EventBusArn**: string (Required): The ARN of the event bus this subscriber belongs to.
* **FilterConfiguration**: [FilterConfiguration](#filterconfiguration): Configuration for filtering which events are delivered to the target. An event must match every filter to be delivered.
* **InvokeConfiguration**: [InvokeConfiguration](#invokeconfiguration) (Required): Configuration for how the subscriber invokes its target, including the target ARN, the IAM role used to invoke it, and, optionally, the target-specific parameters object that matches the target type.
* **LastModifiedTime**: string (ReadOnly): Last-modification timestamp (ISO-8601), read-only.
* **LogConfiguration**: [LogConfiguration](#logconfiguration): Delivery logging configuration for the subscriber.
* **Name**: string (Required): The name of the subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.
* **OnFailureConfiguration**: [OnFailureConfiguration](#onfailureconfiguration): The destination for events that could not be delivered to the target.
* **PointInTimeConfiguration**: [PointInTimeConfiguration](#pointintimeconfiguration): The point in time to start delivering events from. Used when StartingPosition is POINT_IN_TIME.
* **ResumePosition**: string (WriteOnly): Resume-time control, never returned by the service. Applied only when an update transitions State from STOPPED to RUNNING: LAST_PROCESSED (default) resumes from the last processed event, LATEST skips to the newest. Ignored on create and on any update that does not perform that transition.
* **RetryPolicy**: [RetryPolicy](#retrypolicy): The retry policy for failed deliveries to the target.
* **StartingPosition**: string: Where the subscriber starts reading events: LATEST starts from the newest events; POINT_IN_TIME starts from the point specified in PointInTimeConfiguration.
* **State**: string: The run state of the subscriber. Events are delivered only while the state is RUNNING. Setting the state to STOPPED pauses delivery. When an update sets a stopped subscriber back to RUNNING, ResumePosition controls where delivery resumes.
* **SubscriberArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the subscriber.
* **Tags**: [Tag](#tag)[]: The tags assigned to the subscriber.
* **Transformer**: [Transformer](#transformer): Configuration for transforming events before delivery to the target.
* **Type**: string: The delivery ordering mode of the subscriber. FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.

## AwsServiceEventsConfiguration
### Properties
* **AwsService**: string (Required): A single AWS service source identifier, for example aws.s3. Wildcards and lists are not allowed.
* **OnFailureConfiguration**: [OnFailureConfiguration](#onfailureconfiguration): The destination for events that could not be forwarded.
* **Pattern**: string: A filter pattern, as a JSON string, that defines which events from the specified AWS service are forwarded to the event bus. Do not include source, account, or region as top-level fields. If you do not specify a pattern, all events from the service are forwarded.

## BatchConfiguration
### Properties
* **MaxBatchSize**: int: The maximum number of events in a single batch delivered to the target. The maximum depends on the target: 500 for Kinesis Data Streams and Amazon Data Firehose, 100 for Lambda, Step Functions, and AWS::EventsV2::EventBus targets, 10 for Amazon SQS, Amazon SNS, and AWS::Events::EventBus targets, and 1 for API Gateway, API destinations, and universal service integration targets. The service rejects a value above the target's maximum. Fewer events may be delivered when the batch window elapses. When omitted, the default is 10 for Lambda and Step Functions targets and the target's maximum for other targets. The resolved value applied by the service is returned on read.
* **MaxBatchWindowInSeconds**: int: The maximum time in seconds to wait for a batch to fill before delivering it, 0-300. The default is 0 (no wait). The resolved value applied by the service is returned on read.

## DeduplicationConfiguration
### Properties
* **DeduplicationType**: string (Required): How duplicate events are detected: CONTENT_BASED deduplicates by a hash of the event content. To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set SystemMetadata.DeduplicationId.

## EncryptionConfiguration
### Properties
* **KmsKeyIdentifier**: string: The identifier of the AWS KMS customer managed key that the event bus uses to encrypt events. You can specify the key ARN, key ID, alias name, or alias ARN. If you do not specify a key, EventBridge uses an AWS owned key.

## EventBusV2MetadataMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## EventBusV2SystemMetadata
### Properties
* **DeduplicationId**: string: The deduplication ID for FIFO deduplication on the downstream event bus. Accepts a literal value or a JSONata expression.
* **EventGroupId**: string: The event group ID for FIFO ordering on the downstream event bus. Accepts a literal value or a JSONata expression.

## EventSourceConfiguration
### Properties
* **AwsServiceEventsConfiguration**: [AwsServiceEventsConfiguration](#awsserviceeventsconfiguration): Configuration for forwarding a single AWS service's events.
* **PartnerEventsConfiguration**: [PartnerEventsConfiguration](#partnereventsconfiguration): Configuration for forwarding a partner event source's events.
* **WebhookEventsConfiguration**: [WebhookEventsConfiguration](#webhookeventsconfiguration): Configuration for receiving events that an external provider sends to a webhook URL.

## EventSourceDetails
### Properties
* **WebhookDetails**: [WebhookDetails](#webhookdetails): Values generated for a webhook event source.

## Filter
### Properties
* **Pattern**: string (Required): The event pattern, as a JSON string.
* **Scope**: string (Required): Which part of the event the pattern is evaluated against: DATA (the event payload), METADATA (event metadata), or SYSTEM_METADATA (service-generated metadata).

## FilterConfiguration
### Properties
* **Filters**: [Filter](#filter)[] (Required): The list of filters, 1-50 entries. An event must match every filter to be delivered.
* **Language**: string: The filter language. The default is EVENT_BRIDGE_PATTERN.

## HeaderParametersMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## InvokeConfiguration
### Properties
* **EventBusV2Parameters**: [Subscriber_EventBusV2Parameters](#subscribereventbusv2parameters): Parameters for forwarding events to another EventBridge event bus, used when TargetArn is an event bus ARN of the form arn:{partition}:events:{region}:{account}:event-busv2/{name}/{id}.
* **HttpParameters**: [Subscriber_HttpParameters](#subscriberhttpparameters): Parameters for invoking an HTTP endpoint target, such as an Amazon API Gateway endpoint or an EventBridge API destination.
* **KinesisParameters**: [Subscriber_KinesisParameters](#subscriberkinesisparameters): Parameters for writing events to an Amazon Kinesis Data Streams target.
* **LambdaParameters**: [Subscriber_LambdaParameters](#subscriberlambdaparameters): Parameters for invoking an AWS Lambda function target.
* **MskParameters**: [Subscriber_MskParameters](#subscribermskparameters): Parameters for producing events to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) cluster, used when TargetArn is an Amazon MSK cluster ARN.
* **RoleArn**: string (Required): The ARN of the IAM role the service assumes to invoke the target. The role must belong to the same account as the subscriber.
* **SnsParameters**: [Subscriber_SnsParameters](#subscribersnsparameters): Parameters for publishing events to an Amazon SNS topic target.
* **SqsParameters**: [Subscriber_SqsParameters](#subscribersqsparameters): Parameters for sending events to an Amazon SQS queue target.
* **StepFunctionsParameters**: [Subscriber_StepFunctionsParameters](#subscriberstepfunctionsparameters): Parameters for starting an AWS Step Functions state machine execution target.
* **TargetArn**: string (Required): The Amazon Resource Name (ARN) of the target that the subscriber invokes. For universal service integration targets, use the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.
* **UniversalTargetParameters**: [Subscriber_UniversalTargetParameters](#subscriberuniversaltargetparameters): Parameters for invoking an AWS service API as a universal service integration target, used when TargetArn has the form arn:{partition}:events:::aws-sdk:{service}:{apiAction}.

## JsonataConfiguration
### Properties
* **Expression**: string (Required): The JSONata expression that transforms the event, enclosed in {% %} delimiters.

## LogConfiguration
### Properties
* **IncludePayload**: string: Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. The default is ON_ERROR_ONLY.
* **Level**: string: The minimum log level: OFF (no logging), ERROR, or INFO. Records below this level are not emitted. The default is OFF.

## LogConfiguration
### Properties
* **IncludePayload**: string: Whether the event payload is included in emitted log records: FULL includes it in every emitted record, and ON_ERROR_ONLY includes it only in error records. The default is ON_ERROR_ONLY.
* **Level**: string: The minimum log level: OFF (no logging), ERROR, or INFO. Records below this level are not emitted. The default is OFF.

## MessageAttributeMap
### Properties
### Additional Properties
* **Additional Properties Type**: [MessageAttributeValue](#messageattributevalue)

## MessageAttributeValue
### Properties
* **BinaryValue**: string: The attribute value for the Binary data type, Base64-encoded.
* **DataType**: string (Required): The attribute data type. For Amazon SQS targets, specify String, Number, or Binary, optionally with a custom label suffix such as Number.float. For Amazon SNS targets, specify String, String.Array, Number, or Binary.
* **StringValue**: string: The attribute value for the String and Number data types (and String.Array for Amazon SNS targets).

## MskHeader
### Properties
* **Key**: string (Required)
* **Value**: string

## OnFailureConfiguration
### Properties
* **Arn**: string: The ARN of the Amazon SQS standard queue that receives events that could not be forwarded. FIFO queues are not supported.

## OnFailureConfiguration
### Properties
* **Arn**: string: The ARN of the destination that receives events that could not be delivered. An Amazon SQS queue is the supported destination.

## PartnerEventsConfiguration
### Properties
* **OnFailureConfiguration**: [OnFailureConfiguration](#onfailureconfiguration): The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus.
* **PartnerBusKmsKeyIdentifier**: string: The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on the managed partner event bus. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt events on the event bus.
* **PartnerEventSourceArn**: string (Required): The ARN of the partner event source to forward. The partner owns the event source, so the ARN's account segment is empty. Changing this property replaces the event source. Because Name and EventBusArn together identify an event source, and the replacement is created before the old resource is deleted, change Name in the same update.
* **Pattern**: string: A filter pattern, as a JSON string, that defines which events from the specified partner event source are forwarded to the event bus. If you do not specify a pattern, all events from the partner event source are forwarded.

## PointInTimeConfiguration
### Properties
* **EndPoint**: int: An optional time to stop delivering events at, in seconds since the Unix epoch.
* **PointType**: string (Required): Where to start: HORIZON starts from the earliest available event; TIMESTAMP starts from the StartingPoint timestamp.
* **StartingPoint**: int: The time to start delivering events from, in seconds since the Unix epoch. Required when PointType is TIMESTAMP.

## QueryStringParametersMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ResourcePolicy_PolicyDocument
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RetryPolicy
### Properties
* **MaxEventAgeInSeconds**: int: The maximum age of an event in seconds, 60-86400 (24 hours). When an event reaches this age, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 300.
* **MaxRetryAttempts**: int: The maximum number of retry attempts, 0-185. When the attempts are exhausted, retries stop; if OnFailureConfiguration is set, the event is delivered to that destination, otherwise it is dropped. The default is 5.
* **RetryStrategy**: string: Which errors are retried. ALL retries all errors. The default is ALL.

## StorageConfiguration
### Properties
* **RetentionPeriodInDays**: int: The number of days events are retained on the event bus for replay, 1-365.

## Subscriber_EventBusV2Parameters
### Properties
* **DeduplicationConfiguration**: [DeduplicationConfiguration](#deduplicationconfiguration): Deduplication settings applied to the forwarded events on the downstream event bus.
* **Metadata**: [EventBusV2MetadataMap](#eventbusv2metadatamap): Metadata forwarded with each event, as key-value string pairs.
* **SystemMetadata**: [EventBusV2SystemMetadata](#eventbusv2systemmetadata): System metadata attached to each forwarded event, controlling FIFO ordering and deduplication on the downstream event bus.

## Subscriber_HttpParameters
### Properties
* **HeaderParameters**: [HeaderParametersMap](#headerparametersmap): HTTP headers to add to the request.
* **InvocationTimeoutSeconds**: string: The timeout in seconds for each invocation of the target, written as a string. Accepts a literal value or a JSONata expression.
* **PathParameterValues**: string[]: Values for the path parameters (wildcards) in the target URL, in order.
* **QueryStringParameters**: [QueryStringParametersMap](#querystringparametersmap): Query string parameters to add to the request.

## Subscriber_KinesisParameters
### Properties
* **ExplicitHashKey**: string: An explicit hash key that overrides the partition key's shard assignment. Accepts a literal value or a JSONata expression.
* **PartitionKey**: string: The partition key that determines which shard each record is written to. Accepts a literal value or a JSONata expression.

## Subscriber_LambdaParameters
### Properties
* **DurableExecutionName**: string: A unique name for a durable function execution. Accepts a literal value or a JSONata expression.
* **InvocationTimeoutSeconds**: string: The timeout in seconds for each invocation of the target, written as a string. Accepts a literal value or a JSONata expression.
* **InvocationType**: string: How the function is invoked: EVENT (asynchronous) or REQUEST_RESPONSE (synchronous).
* **Qualifier**: string: The version or alias of the Lambda function to invoke. Accepts a literal value or a JSONata expression.
* **TenantId**: string: The tenant identifier for multi-tenant Lambda functions. Accepts a literal value or a JSONata expression.

## Subscriber_MskParameters
### Properties
* **Acks**: string: Producer acknowledgement mode. ALL waits for all in-sync replicas. LEADER waits for the partition leader only. Defaults to ALL.
* **ClientId**: string: Producer client.id passed to the Kafka broker. A literal, not a JSONata expression.
* **Compression**: string: Producer compression codec applied to the record batch. Defaults to NONE.
* **Connectivity**: string (Required): Specifies how the service connects to the Amazon MSK cluster. PUBLIC connects through the cluster's public access. PRIVATE connects through the cluster's multi-VPC private connectivity. You must turn on the chosen connectivity path, with IAM access control, on the cluster.
* **Headers**: [MskHeader](#mskheader)[]: Kafka record headers attached to each produced record.
* **PartitionKey**: string: Kafka record key. Accepts a literal or a JSONata expression; the resolved value selects the destination partition.
* **TopicName**: string (Required): Name of the Kafka topic events are produced to. Accepts a literal or a JSONata expression.

## Subscriber_SnsParameters
### Properties
* **MessageAttributes**: [MessageAttributeMap](#messageattributemap): Custom message attributes to attach to each message; Amazon SNS subscription filter policies can match on them.
* **MessageDeduplicationId**: string: The message deduplication ID to use when the target is a FIFO topic. Accepts a literal value or a JSONata expression.
* **MessageGroupId**: string: The message group ID to use when the target is a FIFO topic. Accepts a literal value or a JSONata expression.
* **MessageStructure**: string: Set to json to send a different message per delivery protocol. Accepts a literal value or a JSONata expression.
* **Subject**: string: The subject line to use for email-protocol subscriptions. Accepts a literal value or a JSONata expression.

## Subscriber_SqsParameters
### Properties
* **DelaySeconds**: string: The delay in seconds for the message, written as a string. Accepts a literal value or a JSONata expression.
* **MessageAttributes**: [MessageAttributeMap](#messageattributemap): Custom message attributes to attach to each message.
* **MessageDeduplicationId**: string: The message deduplication ID to use when the target is a FIFO queue. Accepts a literal value or a JSONata expression.
* **MessageGroupId**: string: The message group ID to use when the target is a FIFO queue. Accepts a literal value or a JSONata expression.
* **MessageSystemAttributes**: [MessageAttributeMap](#messageattributemap): Message system attributes to attach to each message, such as AWSTraceHeader.

## Subscriber_StepFunctionsParameters
### Properties
* **InvocationTimeoutSeconds**: string: The timeout in seconds for each invocation of the target, written as a string. Accepts a literal value or a JSONata expression.
* **InvocationType**: string: How the execution is started: EVENT (StartExecution, asynchronous) or REQUEST_RESPONSE (StartSyncExecution, synchronous).
* **Name**: string: A name for the execution. Must be unique for the account, Region, and state machine. Accepts a literal value or a JSONata expression.
* **TraceHeader**: string: The AWS X-Ray trace header for distributed tracing. Accepts a literal value or a JSONata expression.

## Subscriber_UniversalTargetParameters
### Properties
* **Input**: string (Required): JSON string or JSONata expression that produces the API request. Supports {% ... %} JSONata expressions for dynamic values from the event.
* **InvocationTimeoutSeconds**: string: Timeout in seconds for each invocation of the target (1-30, default 30). Must be a literal integer written as a string; JSONata expressions are not supported for this field.

## Tag
### Properties
* **Key**: string (Required): The tag key. For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.
* **Value**: string (Required): The tag value. May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

## Tag
### Properties
* **Key**: string (Required): The tag key. Unique per resource; keys are case sensitive. No leading or trailing whitespace (interior whitespace is allowed).
* **Value**: string (Required): The tag value. May be empty. No leading or trailing whitespace (interior whitespace is allowed).

## Tag
### Properties
* **Key**: string (Required): The tag key. For each resource, each tag key must be unique and each key can have only one value; keys are case sensitive. A key cannot begin or end with a whitespace character; whitespace inside the key is allowed.
* **Value**: string (Required): The tag value. May be empty. A value cannot begin or end with a whitespace character; whitespace inside the value is allowed.

## Transformer
### Properties
* **JsonataConfiguration**: [JsonataConfiguration](#jsonataconfiguration): The JSONata expression configuration. Required when Type is JSONATA.
* **Type**: string: The transform type: RAW delivers the event payload only; WITH_METADATA delivers the event with its metadata envelope; JSONATA delivers the output of the JSONata expression in JsonataConfiguration.

## WebhookAuthConfiguration
### Properties
* **BasicHttpAuthConfiguration**: [WebhookBasicHttpAuthConfiguration](#webhookbasichttpauthconfiguration): The provider sends HTTP Basic authentication credentials.
* **HmacAuthConfiguration**: [WebhookHmacAuthConfiguration](#webhookhmacauthconfiguration): The provider signs each request with a hash-based message authentication code (HMAC) of the secret.
* **StaticTokenAuthConfiguration**: [WebhookStaticTokenAuthConfiguration](#webhookstatictokenauthconfiguration): The provider sends the secret as the value of an HTTP header.

## WebhookBasicHttpAuthConfiguration
### Properties
* **Password**: string (WriteOnly): The password. Set on create only: changing this value in a template has no effect. To change the password, call RotateWebhookCredentials. The username and the webhook URL do not change.
* **Username**: string (WriteOnly): The username. Cannot contain a colon or whitespace. Changing the username requires replacing the event source, which also requires a new Name and gives the event source a new webhook URL. RotateWebhookCredentials cannot change the username.

## WebhookDeduplicationConfiguration
### Properties
* **DeduplicationType**: string (Required): How EventBridge detects duplicate events.

Valid values:
- CONTENT_BASED - Detects duplicates by a hash of the event content.

## WebhookDetails
### Properties
* **SecretArn**: string (ReadOnly): The ARN of the AWS Secrets Manager secret, in your account, that holds the webhook credential.
* **WebhookUrl**: string (ReadOnly): The HTTPS URL to configure at the event provider. The URL does not change for the life of the event source. Treat the URL as a credential. The URL appears in stack describe output and in drift detection results.

## WebhookEventsConfiguration
### Properties
* **AuthConfiguration**: [WebhookAuthConfiguration](#webhookauthconfiguration) (Required): How the provider authenticates its requests. Set exactly one authentication type. You can't change the type after you create the event source.
* **DeduplicationConfiguration**: [WebhookDeduplicationConfiguration](#webhookdeduplicationconfiguration): Deduplicates the event source's events on the event bus. If you do not specify a configuration, EventBridge does not deduplicate events.
* **KmsKeyIdentifier**: string: The AWS KMS key that encrypts the event source's secret in AWS Secrets Manager. If you do not specify a key, the secret is encrypted with the AWS managed key aws/secretsmanager. A key you specify must be an enabled customer managed key in your account and Region. Changing the key re-encrypts the secret under the new key. The previous key can still decrypt the stored versions until the credential is next rotated.
* **LogConfiguration**: [LogConfiguration](#logconfiguration): The log records Amazon EventBridge delivers for the webhook requests this event source receives. If you do not specify a configuration, EventBridge delivers no logs. Logs are delivered to the destinations you configure with Amazon CloudWatch Logs vended log delivery.
* **MetadataHttpHeaders**: string[]: The HTTP request headers to add to each event's metadata, up to 20. Header names are case-insensitive and cannot repeat. Amazon EventBridge adds each header under its lowercase name. If you do not specify headers, EventBridge adds none. You cannot list headers that carry credentials or describe the network path, or the header that carries the static token.
* **RoleArn**: string (Required): The ARN of the IAM role that Amazon EventBridge assumes to put the webhook's events on the event bus. The role must belong to the calling account.

## WebhookHmacAuthConfiguration
### Properties
* **Algorithm**: string (Required): The hash algorithm the provider uses to compute the signature.

Valid values:
- SHA256 - SHA-256.
- SHA1 - SHA-1. Not recommended. Use SHA1 only for interoperability with a provider that cannot sign with SHA-256.
* **Delimiter**: string: The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=<signature>, or a space when the header carries several signatures. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.
* **Encoding**: string (Required): How the provider encodes the signature in the header.

Valid values:
- HEX - Hexadecimal.
- BASE64 - Base64.
* **MessageIdHttpHeader**: string: The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY.
* **SecretEncoding**: string: How the secret is encoded. RAW uses the secret's characters as the signing key. BASE64 decodes the secret first, as required by providers that issue Base64-encoded signing keys, such as those following the Standard Webhooks specification. If you do not specify an encoding, EventBridge uses RAW. Changing the encoding replaces the event source.
* **SecretValue**: string (WriteOnly): The signing key shared with the provider. If you do not specify a key, EventBridge generates one. EventBridge stores the key only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the key, call RotateWebhookCredentials. The webhook URL does not change.
* **SignatureHttpHeader**: string (Required): The name of the header that carries the signature, for example X-Hub-Signature-256. When TimestampHttpHeader names the same header, Delimiter, SignaturePrefix and TimestampPrefix are all required.
* **SignaturePrefix**: string: The text that precedes the signature in the header value, for example sha256=. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.
* **SignedMessageComposition**: string (Required): How the provider assembles the message it signs from the request.

Valid values:
- BODY - The request body alone.
- TIMESTAMP_DOT_BODY - <timestamp>.<body>. Requires TimestampHttpHeader.
- MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY - <messageId>.<timestamp>.<body>, as in the Standard Webhooks specification. Requires TimestampHttpHeader and MessageIdHttpHeader.
* **TimestampHttpHeader**: string: The name of the header that carries the request timestamp. Required when SignedMessageComposition is TIMESTAMP_DOT_BODY or MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY, or when TimestampToleranceInSeconds is set. When it names the same header as SignatureHttpHeader, Delimiter, SignaturePrefix and TimestampPrefix are all required.
* **TimestampPrefix**: string: The text that precedes the timestamp in the header value, for example t=. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.
* **TimestampToleranceInSeconds**: int: The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request. Requests outside this window are rejected. If you do not specify a tolerance, EventBridge uses 300 seconds. Requires TimestampHttpHeader.

## WebhookStaticTokenAuthConfiguration
### Properties
* **SecretValue**: string (WriteOnly): The token the provider sends in the header. If you do not specify a token, Amazon EventBridge generates one. EventBridge stores the token only in AWS Secrets Manager and never returns it. Set on create only: changing this value in a template has no effect. To change the token, call RotateWebhookCredentials. The webhook URL does not change.
* **TokenHttpHeader**: string (Required): The name of the header that carries the secret, for example X-Webhook-Secret. Must be a valid header name as defined in RFC 7230.

