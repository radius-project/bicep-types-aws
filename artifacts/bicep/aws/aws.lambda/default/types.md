# AWS.Lambda @ default

## Resource AWS.Lambda/CodeSigningConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/CodeSigningConfigProperties](#awslambdacodesigningconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/EventInvokeConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/EventInvokeConfigProperties](#awslambdaeventinvokeconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/EventSourceMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/EventSourceMappingProperties](#awslambdaeventsourcemappingproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/Function@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/FunctionProperties](#awslambdafunctionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/Url@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/UrlProperties](#awslambdaurlproperties) (Required, Identifier): properties of the resource

## AllowedPublishers
### Properties
* **SigningProfileVersionArns**: string[] (Required): List of Signing profile version Arns

## AmazonManagedKafkaEventSourceConfig
### Properties
* **ConsumerGroupId**: string: The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).

## AWS.Lambda/CodeSigningConfigProperties
### Properties
* **AllowedPublishers**: [AllowedPublishers](#allowedpublishers) (Required): When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
* **CodeSigningConfigArn**: string (ReadOnly, Identifier): A unique Arn for CodeSigningConfig resource
* **CodeSigningConfigId**: string (ReadOnly): A unique identifier for CodeSigningConfig resource
* **CodeSigningPolicies**: [CodeSigningPolicies](#codesigningpolicies): Policies to control how to act if a signature is invalid
* **Description**: string: A description of the CodeSigningConfig

## AWS.Lambda/EventInvokeConfigProperties
### Properties
* **DestinationConfig**: [DestinationConfig](#destinationconfig)
* **FunctionName**: string (Required, Identifier): The name of the Lambda function.
* **MaximumEventAgeInSeconds**: int: The maximum age of a request that Lambda sends to a function for processing.
* **MaximumRetryAttempts**: int: The maximum number of times to retry when the function returns an error.
* **Qualifier**: string (Required, Identifier): The identifier of a version or alias.

## AWS.Lambda/EventSourceMappingProperties
### Properties
* **AmazonManagedKafkaEventSourceConfig**: [AmazonManagedKafkaEventSourceConfig](#amazonmanagedkafkaeventsourceconfig): Specific configuration settings for an Amazon Managed Streaming for Apache Kafka (Amazon MSK) event source.
* **BatchSize**: int: The maximum number of records in each batch that Lambda pulls from your stream or queue and sends to your function. Lambda passes all of the records in the batch to the function in a single call, up to the payload limit for synchronous invocation (6 MB).
  +   *Amazon Kinesis* – Default 100. Max 10,000.
  +   *Amazon DynamoDB Streams* – Default 100. Max 10,000.
  +   *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
  +   *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
  +   *Self-managed Apache Kafka* – Default 100. Max 10,000.
  +   *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
  +   *DocumentDB* – Default 100. Max 10,000.
* **BisectBatchOnFunctionError**: bool: (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
* **DestinationConfig**: [DestinationConfig](#destinationconfig): (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka event sources only) A configuration object that specifies the destination of an event after Lambda processes it.
* **DocumentDBEventSourceConfig**: [DocumentDBEventSourceConfig](#documentdbeventsourceconfig): Specific configuration settings for a DocumentDB event source.
* **Enabled**: bool: When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
 Default: True
* **EventSourceArn**: string: The Amazon Resource Name (ARN) of the event source.
  +   *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
  +   *Amazon DynamoDB Streams* – The ARN of the stream.
  +   *Amazon Simple Queue Service* – The ARN of the queue.
  +   *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
  +   *Amazon MQ* – The ARN of the broker.
  +   *Amazon DocumentDB* – The ARN of the DocumentDB change stream.
* **FilterCriteria**: [FilterCriteria](#filtercriteria): An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
* **FunctionName**: string (Required): The name or ARN of the Lambda function.
  **Name formats**
 +   *Function name* – ``MyFunction``.
  +   *Function ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction``.
  +   *Version or Alias ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD``.
  +   *Partial ARN* – ``123456789012:function:MyFunction``.
  
 The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
* **FunctionResponseTypes**: string[]: (Streams and SQS) A list of current response type enums applied to the event source mapping.
 Valid Values: ``ReportBatchItemFailures``
* **Id**: string (ReadOnly, Identifier)
* **MaximumBatchingWindowInSeconds**: int: The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
  *Default (, , event sources)*: 0
  *Default (, Kafka, , event sources)*: 500 ms
  *Related setting:* For SQS event sources, when you set ``BatchSize`` to a value greater than 10, you must set ``MaximumBatchingWindowInSeconds`` to at least 1.
* **MaximumRecordAgeInSeconds**: int: (Kinesis and DynamoDB Streams only) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
  The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
* **MaximumRetryAttempts**: int: (Kinesis and DynamoDB Streams only) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
* **ParallelizationFactor**: int: (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
* **Queues**: string[]: (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
* **ScalingConfig**: [ScalingConfig](#scalingconfig): (Amazon SQS only) The scaling configuration for the event source. For more information, see [Configuring maximum concurrency for Amazon SQS event sources](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-max-concurrency).
* **SelfManagedEventSource**: [SelfManagedEventSource](#selfmanagedeventsource): The self-managed Apache Kafka cluster for your event source.
* **SelfManagedKafkaEventSourceConfig**: [SelfManagedKafkaEventSourceConfig](#selfmanagedkafkaeventsourceconfig): Specific configuration settings for a self-managed Apache Kafka event source.
* **SourceAccessConfigurations**: [SourceAccessConfiguration](#sourceaccessconfiguration)[]: An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
* **StartingPosition**: string: The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
  +   *LATEST* - Read only new records.
  +   *TRIM_HORIZON* - Process all available records.
  +   *AT_TIMESTAMP* - Specify a time from which to start reading records.
* **StartingPositionTimestamp**: int: With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. ``StartingPositionTimestamp`` cannot be in the future.
* **Topics**: string[]: The name of the Kafka topic.
* **TumblingWindowInSeconds**: int: (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.

## AWS.Lambda/FunctionProperties
### Properties
* **Architectures**: string[]: The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is ``x86_64``.
* **Arn**: string (ReadOnly)
* **Code**: [Code](#code) (Required, WriteOnly): The code for the function.
* **CodeSigningConfigArn**: string: To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig): A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
* **Description**: string: A description of the function.
* **Environment**: [Environment](#environment): Environment variables that are accessible from function code during execution.
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage): The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
* **FileSystemConfigs**: [FileSystemConfig](#filesystemconfig)[]: Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before the function.
 For more information about using the ``DependsOn`` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
* **FunctionName**: string (Identifier): The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.
 If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **Handler**: string: The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
* **ImageConfig**: [ImageConfig](#imageconfig): Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
* **KmsKeyArn**: string: The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption). When [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) is activated, Lambda also uses this key is to encrypt your function's snapshot. If you deploy your function using a container image, Lambda also uses this key to encrypt your function when it's deployed. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). If you don't provide a customer managed key, Lambda uses a default service key.
* **Layers**: string[]: A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
* **LoggingConfig**: [LoggingConfig](#loggingconfig): The function's Amazon CloudWatch Logs configuration settings.
* **MemorySize**: int: The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
* **PackageType**: string: The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
* **ReservedConcurrentExecutions**: int: The number of simultaneous executions to reserve for the function.
* **Role**: string (Required): The Amazon Resource Name (ARN) of the function's execution role.
* **Runtime**: string: The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
 The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
 For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
* **RuntimeManagementConfig**: [RuntimeManagementConfig](#runtimemanagementconfig): Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
* **SnapStart**: [SnapStart](#snapstart) (WriteOnly): The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
* **SnapStartResponse**: [SnapStartResponse](#snapstartresponse) (ReadOnly)
* **Tags**: [Tag](#tag)[]: A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
* **Timeout**: int: The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds. For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
* **TracingConfig**: [TracingConfig](#tracingconfig): Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
* **VpcConfig**: [VpcConfig](#vpcconfig): For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

## AWS.Lambda/UrlProperties
### Properties
* **AuthType**: string (Required): Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.
* **Cors**: [Cors](#cors)
* **FunctionArn**: string (ReadOnly, Identifier): The full Amazon Resource Name (ARN) of the function associated with the Function URL.
* **FunctionUrl**: string (ReadOnly): The generated url for this resource.
* **InvokeMode**: string: The invocation mode for the function's URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.
* **Qualifier**: string: The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.
* **TargetFunctionArn**: string (Required): The Amazon Resource Name (ARN) of the function associated with the Function URL.

## Code
### Properties
* **ImageUri**: string (WriteOnly): URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
* **S3Bucket**: string (WriteOnly): An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
* **S3Key**: string (WriteOnly): The Amazon S3 key of the deployment package.
* **S3ObjectVersion**: string (WriteOnly): For versioned objects, the version of the deployment package object to use.
* **ZipFile**: string (WriteOnly): (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.
  For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.
 If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.

## CodeSigningPolicies
### Properties
* **UntrustedArtifactOnDeployment**: string (Required): Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided

## Cors
### Properties
* **AllowCredentials**: bool: Specifies whether credentials are included in the CORS request.
* **AllowHeaders**: string[]: Represents a collection of allowed headers.
* **AllowMethods**: string[]: Represents a collection of allowed HTTP methods.
* **AllowOrigins**: string[]: Represents a collection of allowed origins.
* **ExposeHeaders**: string[]: Represents a collection of exposed headers.
* **MaxAge**: int

## DeadLetterConfig
### Properties
* **TargetArn**: string: The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.

## DestinationConfig
### Properties
* **OnFailure**: [OnFailure](#onfailure)
* **OnSuccess**: [OnSuccess](#onsuccess)

## DestinationConfig
### Properties
* **OnFailure**: [OnFailure](#onfailure): The destination configuration for failed invocations.

## DocumentDBEventSourceConfig
### Properties
* **CollectionName**: string: The name of the collection to consume within the database. If you do not specify a collection, Lambda consumes all collections.
* **DatabaseName**: string: The name of the database to consume within the DocumentDB cluster.
* **FullDocument**: string: Determines what DocumentDB sends to your event stream during document update operations. If set to UpdateLookup, DocumentDB sends a delta describing the changes, along with a copy of the entire document. Otherwise, DocumentDB sends only a partial document that contains the changes.

## Endpoints
### Properties
* **KafkaBootstrapServers**: string[]: The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

## Environment
### Properties
* **Variables**: [Function_Variables](#functionvariables): Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).

## EphemeralStorage
### Properties
* **Size**: int (Required): The size of the function's ``/tmp`` directory.

## FileSystemConfig
### Properties
* **Arn**: string (Required): The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
* **LocalMountPath**: string (Required): The path where the function can access the file system, starting with ``/mnt/``.

## Filter
### Properties
* **Pattern**: string: A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).

## FilterCriteria
### Properties
* **Filters**: [Filter](#filter)[]: A list of filters.

## Function_Variables
### Properties

## ImageConfig
### Properties
* **Command**: string[]: Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list.
* **EntryPoint**: string[]: Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list.
* **WorkingDirectory**: string: Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.

## LoggingConfig
### Properties
* **ApplicationLogLevel**: string: Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where ``TRACE`` is the highest level and ``FATAL`` is the lowest.
* **LogFormat**: string: The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
* **LogGroup**: string: The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named ``/aws/lambda/<function name>``. To use a different log group, enter an existing log group or enter a new log group name.
* **SystemLogLevel**: string: Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.

## OnFailure
### Properties
* **Destination**: string (Required): The Amazon Resource Name (ARN) of the destination resource.

## OnFailure
### Properties
* **Destination**: string: The Amazon Resource Name (ARN) of the destination resource.
 To retain records of [asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-async-destinations), you can configure an Amazon SNS topic, Amazon SQS queue, Lambda function, or Amazon EventBridge event bus as the destination.
 To retain records of failed invocations from [Kinesis and DynamoDB event sources](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#event-source-mapping-destinations), you can configure an Amazon SNS topic or Amazon SQS queue as the destination.
 To retain records of failed invocations from [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.

## OnSuccess
### Properties
* **Destination**: string (Required): The Amazon Resource Name (ARN) of the destination resource.

## RuntimeManagementConfig
### Properties
* **RuntimeVersionArn**: string: The ARN of the runtime version you want the function to use.
  This is only required if you're using the *Manual* runtime update mode.
* **UpdateRuntimeOn**: string (Required): Specify the runtime update mode.
  +   *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
  +   *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
  +   *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).
  
  *Valid Values*: ``Auto`` | ``FunctionUpdate`` | ``Manual``

## ScalingConfig
### Properties
* **MaximumConcurrency**: int: Limits the number of concurrent instances that the SQS event source can invoke.

## SelfManagedEventSource
### Properties
* **Endpoints**: [Endpoints](#endpoints): The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

## SelfManagedKafkaEventSourceConfig
### Properties
* **ConsumerGroupId**: string: The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).

## SnapStart
### Properties
* **ApplyOn**: string (Required, WriteOnly): Set ``ApplyOn`` to ``PublishedVersions`` to create a snapshot of the initialized execution environment when you publish a function version.

## SnapStartResponse
### Properties
* **ApplyOn**: string (ReadOnly): When set to ``PublishedVersions``, Lambda creates a snapshot of the execution environment when you publish a function version.
* **OptimizationStatus**: string (ReadOnly): When you provide a [qualified Amazon Resource Name (ARN)](https://docs.aws.amazon.com/lambda/latest/dg/configuration-versions.html#versioning-versions-using), this response element indicates whether SnapStart is activated for the specified function version.

## SourceAccessConfiguration
### Properties
* **Type**: string: The type of authentication protocol, VPC components, or virtual host for your event source. For example: ``"Type":"SASL_SCRAM_512_AUTH"``.
  +   ``BASIC_AUTH`` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
  +   ``BASIC_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
  +   ``VPC_SUBNET`` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
  +   ``VPC_SECURITY_GROUP`` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
  +   ``SASL_SCRAM_256_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
  +   ``SASL_SCRAM_512_AUTH`` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
  +   ``VIRTUAL_HOST`` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
  +   ``CLIENT_CERTIFICATE_TLS_AUTH`` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
  +   ``SERVER_ROOT_CA_CERTIFICATE`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
* **URI**: string: The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

## TracingConfig
### Properties
* **Mode**: string: The tracing mode.

## VpcConfig
### Properties
* **Ipv6AllowedForDualStack**: bool: Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
* **SecurityGroupIds**: string[]: A list of VPC security group IDs.
* **SubnetIds**: string[]: A list of VPC subnet IDs.

