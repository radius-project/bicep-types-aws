# AWS.Lambda @ default

## Resource AWS.Lambda/Alias@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/AliasProperties](#awslambdaaliasproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/CapacityProvider@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/CapacityProviderProperties](#awslambdacapacityproviderproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/CodeSigningConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/CodeSigningConfigProperties](#awslambdacodesigningconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/EventInvokeConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/EventInvokeConfigProperties](#awslambdaeventinvokeconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/EventSourceMapping@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/EventSourceMappingProperties](#awslambdaeventsourcemappingproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/Function@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/FunctionProperties](#awslambdafunctionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/MicrovmImage@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/MicrovmImageProperties](#awslambdamicrovmimageproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/NetworkConnector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/NetworkConnectorProperties](#awslambdanetworkconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/ResourcePolicyProperties](#awslambdaresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/Url@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/UrlProperties](#awslambdaurlproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/Version@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/VersionProperties](#awslambdaversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/WebFunction@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/WebFunctionProperties](#awslambdawebfunctionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lambda/WebFunctionEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lambda/WebFunctionEndpointProperties](#awslambdawebfunctionendpointproperties) (Required, Identifier): properties of the resource

## AliasRoutingConfiguration
### Properties
* **AdditionalVersionWeights**: [VersionWeight](#versionweight)[]: The second version, and the percentage of traffic that's routed to it.

## AllowedPublishers
### Properties
* **SigningProfileVersionArns**: string[] (Required): List of Signing profile version Arns

## AmazonManagedKafkaEventSourceConfig
### Properties
* **ConsumerGroupId**: string: The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-consumer-group-id).
* **SchemaRegistryConfig**: [SchemaRegistryConfig](#schemaregistryconfig): Specific configuration settings for a Kafka schema registry.

## AWS.Lambda/AliasProperties
### Properties
* **AliasArn**: string (ReadOnly, Identifier): Lambda Alias ARN generated by the service.
* **Description**: string: A description of the alias.
* **FunctionName**: string (Required): The name of the Lambda function.
* **FunctionVersion**: string (Required): The function version that the alias invokes.
* **Name**: string (Required): The name of the alias.
* **ProvisionedConcurrencyConfig**: [ProvisionedConcurrencyConfiguration](#provisionedconcurrencyconfiguration): Specifies a provisioned concurrency configuration for a function's alias.
* **RoutingConfig**: [AliasRoutingConfiguration](#aliasroutingconfiguration): The routing configuration of the alias.

## AWS.Lambda/CapacityProviderProperties
### Properties
* **Arn**: string (ReadOnly)
* **CapacityProviderName**: string (Identifier)
* **CapacityProviderScalingConfig**: [CapacityProviderScalingConfig](#capacityproviderscalingconfig): The scaling configuration for the capacity provider.
* **InstanceRequirements**: [InstanceRequirements](#instancerequirements): The instance requirements for compute resources managed by the capacity provider.
* **KmsKeyArn**: string: The ARN of the KMS key used to encrypt the capacity provider's resources.
* **PermissionsConfig**: [CapacityProviderPermissionsConfig](#capacityproviderpermissionsconfig) (Required): The permissions configuration for the capacity provider.
* **PropagateTags**: [PropagateTagsConfig](#propagatetagsconfig): Configuration for tag propagation to managed resources launched by the capacity provider.
* **State**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: A key-value pair that provides metadata for the capacity provider.
* **TelemetryConfig**: [CapacityProviderTelemetryConfig](#capacityprovidertelemetryconfig): The telemetry configuration for the capacity provider, including logging settings.
* **VpcConfig**: [CapacityProviderVpcConfig](#capacityprovidervpcconfig) (Required): The VPC configuration for the capacity provider.

## AWS.Lambda/CodeSigningConfigProperties
### Properties
* **AllowedPublishers**: [AllowedPublishers](#allowedpublishers) (Required): When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
* **CodeSigningConfigArn**: string (ReadOnly, Identifier): A unique Arn for CodeSigningConfig resource
* **CodeSigningConfigId**: string (ReadOnly): A unique identifier for CodeSigningConfig resource
* **CodeSigningPolicies**: [CodeSigningPolicies](#codesigningpolicies): Policies to control how to act if a signature is invalid
* **Description**: string: A description of the CodeSigningConfig
* **Tags**: [Tag](#tag)[]: A list of tags to apply to CodeSigningConfig resource

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
  +  *Amazon Kinesis* – Default 100. Max 10,000.
  +  *Amazon DynamoDB Streams* – Default 100. Max 10,000.
  +  *Amazon Simple Queue Service* – Default 10. For standard queues the max is 10,000. For FIFO queues the max is 10.
  +  *Amazon Managed Streaming for Apache Kafka* – Default 100. Max 10,000.
  +  *Self-managed Apache Kafka* – Default 100. Max 10,000.
  +  *Amazon MQ (ActiveMQ and RabbitMQ)* – Default 100. Max 10,000.
  +  *DocumentDB* – Default 100. Max 10,000.
* **BisectBatchOnFunctionError**: bool: (Kinesis and DynamoDB Streams only) If the function returns an error, split the batch in two and retry. The default value is false.
  When using ``BisectBatchOnFunctionError``, check the ``BatchSize`` parameter in the ``OnFailure`` destination message's metadata. The ``BatchSize`` could be greater than 1 since LAM consolidates failed messages metadata when writing to the ``OnFailure`` destination.
* **DestinationConfig**: [DestinationConfig](#destinationconfig): (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) A configuration object that specifies the destination of an event after Lambda processes it.
* **DocumentDBEventSourceConfig**: [DocumentDBEventSourceConfig](#documentdbeventsourceconfig): Specific configuration settings for a DocumentDB event source.
* **Enabled**: bool: When true, the event source mapping is active. When false, Lambda pauses polling and invocation.
 Default: True
* **EventSourceArn**: string: The Amazon Resource Name (ARN) of the event source.
  +  *Amazon Kinesis* – The ARN of the data stream or a stream consumer.
  +  *Amazon DynamoDB Streams* – The ARN of the stream.
  +  *Amazon Simple Queue Service* – The ARN of the queue.
  +  *Amazon Managed Streaming for Apache Kafka* – The ARN of the cluster or the ARN of the VPC connection (for [cross-account event source mappings](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#msk-multi-vpc)).
  +  *Amazon MQ* – The ARN of the broker.
  +  *Amazon DocumentDB* – The ARN of the DocumentDB change stream.
* **EventSourceMappingArn**: string (ReadOnly)
* **FilterCriteria**: [FilterCriteria](#filtercriteria): An object that defines the filter criteria that determine whether Lambda should process an event. For more information, see [Lambda event filtering](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html).
* **FunctionName**: string (Required): The name or ARN of the Lambda function.
  **Name formats**
 +  *Function name* – ``MyFunction``.
  +  *Function ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction``.
  +  *Version or Alias ARN* – ``arn:aws:lambda:us-west-2:123456789012:function:MyFunction:PROD``.
  +  *Partial ARN* – ``123456789012:function:MyFunction``.
  
 The length constraint applies only to the full ARN. If you specify only the function name, it's limited to 64 characters in length.
* **FunctionResponseTypes**: string[]: (Kinesis, DynamoDB Streams, and SQS) A list of current response type enums applied to the event source mapping.
 Valid Values: ``ReportBatchItemFailures``
* **Id**: string (ReadOnly, Identifier)
* **KmsKeyArn**: string: The ARN of the KMSlong (KMS) customer managed key that Lambda uses to encrypt your function's [filter criteria](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-basics).
* **LoggingConfig**: [LoggingConfig](#loggingconfig): (Amazon MSK, and self-managed Apache Kafka only) The logging configuration for your event source. For more information, see [Event source mapping logging](https://docs.aws.amazon.com/lambda/latest/dg/esm-logging.html).
* **MaximumBatchingWindowInSeconds**: int: The maximum amount of time, in seconds, that Lambda spends gathering records before invoking the function.
 *Default (, , event sources)*: 0
 *Default (, Kafka, , event sources)*: 500 ms
 *Related setting:* For SQS event sources, when you set ``BatchSize`` to a value greater than 10, you must set ``MaximumBatchingWindowInSeconds`` to at least 1.
* **MaximumRecordAgeInSeconds**: int: (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records older than the specified age. The default value is -1, which sets the maximum age to infinite. When the value is set to infinite, Lambda never discards old records.
  The minimum valid value for maximum record age is 60s. Although values less than 60 and greater than -1 fall within the parameter's absolute range, they are not allowed
* **MaximumRetryAttempts**: int: (Kinesis, DynamoDB Streams, Amazon MSK, and self-managed Apache Kafka) Discard records after the specified number of retries. The default value is -1, which sets the maximum number of retries to infinite. When MaximumRetryAttempts is infinite, Lambda retries failed records until the record expires in the event source.
* **MetricsConfig**: [MetricsConfig](#metricsconfig): The metrics configuration for your event source. For more information, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).
* **ParallelizationFactor**: int: (Kinesis and DynamoDB Streams only) The number of batches to process concurrently from each shard. The default value is 1.
* **ProvisionedPollerConfig**: [ProvisionedPollerConfig](#provisionedpollerconfig): (Amazon SQS, Amazon MSK, and self-managed Apache Kafka only) The provisioned mode configuration for the event source. For more information, see [provisioned mode](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventsourcemapping.html#invocation-eventsourcemapping-provisioned-mode).
* **Queues**: string[]: (Amazon MQ) The name of the Amazon MQ broker destination queue to consume.
* **ScalingConfig**: [ScalingConfig](#scalingconfig): This property is for Amazon SQS event sources only. You cannot use ``ProvisionedPollerConfig`` while using ``ScalingConfig``. These options are mutually exclusive. To remove the scaling configuration, pass an empty value.
* **SelfManagedEventSource**: [SelfManagedEventSource](#selfmanagedeventsource): The self-managed Apache Kafka cluster for your event source.
* **SelfManagedKafkaEventSourceConfig**: [SelfManagedKafkaEventSourceConfig](#selfmanagedkafkaeventsourceconfig): Specific configuration settings for a self-managed Apache Kafka event source.
* **SourceAccessConfigurations**: [SourceAccessConfiguration](#sourceaccessconfiguration)[]: An array of the authentication protocol, VPC components, or virtual host to secure and define your event source.
* **StartingPosition**: string: The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB.
  +  *LATEST* - Read only new records.
  +  *TRIM_HORIZON* - Process all available records.
  +  *AT_TIMESTAMP* - Specify a time from which to start reading records.
* **StartingPositionTimestamp**: int: With ``StartingPosition`` set to ``AT_TIMESTAMP``, the time from which to start reading, in Unix time seconds. ``StartingPositionTimestamp`` cannot be in the future.
* **Tags**: [Tag](#tag)[]: A list of tags to add to the event source mapping.
  You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
* **Topics**: string[]: The name of the Kafka topic.
* **TumblingWindowInSeconds**: int: (Kinesis and DynamoDB Streams only) The duration in seconds of a processing window for DynamoDB and Kinesis Streams event sources. A value of 0 seconds indicates no tumbling window.

## AWS.Lambda/FunctionProperties
### Properties
* **Architectures**: string[]: The instruction set architecture that the function supports. Enter a string array with one of the valid values (arm64 or x86_64). The default value is ``x86_64``.
* **Arn**: string (ReadOnly)
* **CapacityProviderConfig**: [CapacityProviderConfig](#capacityproviderconfig): Configuration for the capacity provider that manages compute resources for Lambda functions.
* **Code**: [Code](#code) (Required): The code for the function. You can define your function code in multiple ways:
  +  For .zip deployment packages, you can specify the S3 location of the .zip file in the ``S3Bucket``, ``S3Key``, and ``S3ObjectVersion`` properties.
  +  For .zip deployment packages, you can alternatively define the function code inline in the ``ZipFile`` property. This method works only for Node.js and Python functions.
  +  For container images, specify the URI of your container image in the ECR registry in the ``ImageUri`` property.
* **CodeSigningConfigArn**: string: To enable code signing for this function, specify the ARN of a code-signing configuration. A code-signing configuration includes a set of signing profiles, which define the trusted publishers for this function.
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig): A dead-letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing. For more information, see [Dead-letter queues](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#invocation-dlq).
* **Description**: string: A description of the function.
* **DurableConfig**: [DurableConfig](#durableconfig): Configuration settings for [durable functions](https://docs.aws.amazon.com/lambda/latest/dg/durable-functions.html), including execution timeout, retention period for execution history, and an optional ARN of the KMSlong (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
* **Environment**: [Environment](#environment): Environment variables that are accessible from function code during execution.
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage): The size of the function's ``/tmp`` directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
* **FileSystemConfigs**: [FileSystemConfig](#filesystemconfig)[]: Connection settings for an Amazon EFS or Amazon S3 Files file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an [AWS::EFS::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-efs-mounttarget.html) or [AWS::S3Files::MountTarget](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3files-mounttarget.html) resource, you must also specify a ``DependsOn`` attribute to ensure that the mount target is created or updated before the function.
 For more information about using the ``DependsOn`` attribute, see [DependsOn Attribute](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html).
* **FunctionName**: string (Identifier): The name of the Lambda function, up to 64 characters in length. If you don't specify a name, CFN generates one.
 If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **FunctionScalingConfig**: [FunctionScalingConfig](#functionscalingconfig): Configuration that defines the scaling behavior for a Lambda Managed Instances function, including the minimum and maximum number of execution environments that can be provisioned.
* **Handler**: string: The name of the method within your code that Lambda calls to run your function. Handler is required if the deployment package is a .zip file archive. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime. For more information, see [Lambda programming model](https://docs.aws.amazon.com/lambda/latest/dg/foundation-progmodel.html).
* **ImageConfig**: [ImageConfig](#imageconfig): Configuration values that override the container image Dockerfile settings. For more information, see [Container image settings](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms).
* **KmsKeyArn**: string: The ARN of the KMSlong (KMS) customer managed key that's used to encrypt the following resources:
  +  The function's [environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html#configuration-envvars-encryption).
  +  The function's [Lambda SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart-security.html) snapshots.
  +  When used with ``SourceKMSKeyArn``, the unzipped version of the .zip deployment package that's used for function invocations. For more information, see [Specifying a customer managed key for Lambda](https://docs.aws.amazon.com/lambda/latest/dg/encrypt-zip-package.html#enable-zip-custom-encryption).
  +  The optimized version of the container image that's used for function invocations. Note that this is not the same key that's used to protect your container image in the Amazon Elastic Container Registry (Amazon ECR). For more information, see [Function lifecycle](https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-lifecycle).
  
 If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk) or an [](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk).
* **Layers**: string[]: A list of [function layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) to add to the function's execution environment. Specify each layer by its ARN, including the version.
* **LoggingConfig**: [LoggingConfig](#loggingconfig): The function's Amazon CloudWatch Logs configuration settings.
* **MemorySize**: int: The amount of [memory available to the function](https://docs.aws.amazon.com/lambda/latest/dg/configuration-function-common.html#configuration-memory-console) at runtime. Increasing the function memory also increases its CPU allocation. The default value is 128 MB. The value can be any multiple of 1 MB. Note that new AWS accounts have reduced concurrency and memory quotas. AWS raises these quotas automatically based on your usage. You can also request a quota increase.
* **PackageType**: string: The type of deployment package. Set to ``Image`` for container image and set ``Zip`` for .zip file archive.
* **PublishToLatestPublished**: bool (WriteOnly)
* **RecursiveLoop**: string: The status of your function's recursive loop detection configuration.
 When this value is set to ``Allow``and Lambda detects your function being invoked as part of a recursive loop, it doesn't take any action.
 When this value is set to ``Terminate`` and Lambda detects your function being invoked as part of a recursive loop, it stops your function being invoked and notifies you.
* **ReservedConcurrentExecutions**: int: The number of simultaneous executions to reserve for the function.
* **Role**: string (Required): The Amazon Resource Name (ARN) of the function's execution role.
* **Runtime**: string: The identifier of the function's [runtime](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html). Runtime is required if the deployment package is a .zip file archive. Specifying a runtime results in an error if you're deploying a function using a container image.
 The following list includes deprecated runtimes. Lambda blocks creating new functions and updating existing functions shortly after each runtime is deprecated. For more information, see [Runtime use after deprecation](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtime-deprecation-levels).
 For a list of all currently supported runtimes, see [Supported runtimes](https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtimes.html#runtimes-supported).
* **RuntimeManagementConfig**: [RuntimeManagementConfig](#runtimemanagementconfig): Sets the runtime management configuration for a function's version. For more information, see [Runtime updates](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html).
* **SnapStart**: [SnapStart](#snapstart) (WriteOnly): The function's [SnapStart](https://docs.aws.amazon.com/lambda/latest/dg/snapstart.html) setting.
* **SnapStartResponse**: [SnapStartResponse](#snapstartresponse) (ReadOnly)
* **Tags**: [Tag](#tag)[]: A list of [tags](https://docs.aws.amazon.com/lambda/latest/dg/tagging.html) to apply to the function.
  You must have the ``lambda:TagResource``, ``lambda:UntagResource``, and ``lambda:ListTags`` permissions for your [principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html) to manage the CFN stack. If you don't have these permissions, there might be unexpected behavior with stack-level tags propagating to the resource during resource creation and update.
* **TenancyConfig**: [TenancyConfig](#tenancyconfig): The function's tenant isolation configuration settings. Determines whether the Lambda function runs on a shared or dedicated infrastructure per unique tenant.
* **Timeout**: int: The amount of time (in seconds) that Lambda allows a function to run before stopping it. The default is 3 seconds, and the maximum allowed value is 900 seconds. For functions using Lambda Managed Instances, asynchronous invocations and event source mapping invocations (except Amazon MQ and Amazon DocumentDB) support a maximum allowed value of 5,400 seconds (90 minutes). For more information, see [Lambda execution environment](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-context.html).
* **TracingConfig**: [TracingConfig](#tracingconfig): Set ``Mode`` to ``Active`` to sample and trace a subset of incoming requests with [X-Ray](https://docs.aws.amazon.com/lambda/latest/dg/services-xray.html).
* **VpcConfig**: [VpcConfig](#vpcconfig): For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC. When you connect a function to a VPC, it can access resources and the internet only through that VPC. For more information, see [Configuring a Lambda function to access resources in a VPC](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html).

## AWS.Lambda/MicrovmImageProperties
### Properties
* **AdditionalOsCapabilities**: string[] (Required, WriteOnly)
* **BaseImageArn**: string (Required, WriteOnly): ARN of the base MicroVM image.
* **BaseImageVersion**: string (Required, WriteOnly): Specific version of the base MicroVM image to use.
* **BuildRoleArn**: string (Required, WriteOnly): ARN of the IAM build role.
* **CodeArtifact**: [CodeArtifact](#codeartifact) (Required, WriteOnly): Code artifact for the active MicroVM image.
* **CpuConfigurations**: [CpuConfiguration](#cpuconfiguration)[] (Required, WriteOnly)
* **CreatedAt**: string (ReadOnly): Timestamp when the MicroVM image was created.
* **Description**: string (Required, WriteOnly): Human-readable description of the MicroVM image and its purpose.
* **EgressNetworkConnectors**: string[] (Required, WriteOnly)
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[] (Required, WriteOnly): Environment variables to set in the container during the snapshot build.
* **Hooks**: [Hooks](#hooks) (Required, WriteOnly)
* **ImageArn**: string (ReadOnly, Identifier): ARN of the MicroVM image.
* **LatestActiveImageVersion**: string (ReadOnly): The latest active version of the MicroVM image.
* **LatestFailedImageVersion**: string (ReadOnly): The latest failed version of the MicroVM image.
* **Logging**: [Logging](#logging) (Required, WriteOnly): Configuration for MicroVM image logging.
* **Name**: string (Required): Unique name for the MicroVM image within the account.
* **Resources**: [Resources](#resources)[] (Required, WriteOnly)
* **State**: string (ReadOnly): Current state of the MicroVM image.
* **Tags**: [Tag](#tag)[]: Key-value pairs to associate with the MicroVM image for organization and management.
* **UpdatedAt**: string (ReadOnly): Timestamp when the MicroVM image was updated.

## AWS.Lambda/NetworkConnectorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Configuration**: [Config](#config) (Required)
* **LatestVersion**: int (ReadOnly)
* **LatestVersionArn**: string (ReadOnly)
* **Name**: string
* **OperatorRole**: string
* **State**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the network connector. Use tags to categorize network connectors for cost allocation, access control, or operational management.

## AWS.Lambda/ResourcePolicyProperties
### Properties
* **PolicyDocument**: [ResourcePolicy_PolicyDocument](#resourcepolicypolicydocument) (Required): The policy document you want to add to your LAM resource. This is formatted as a JSON string.
 For more information, see [Working with resource-based policies in](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html) in the *Developer Guide*.
* **ResourceArn**: string (Required, Identifier)

## AWS.Lambda/UrlProperties
### Properties
* **AuthType**: string (Required): Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.
* **Cors**: [Cors](#cors)
* **FunctionArn**: string (ReadOnly, Identifier): The full Amazon Resource Name (ARN) of the function associated with the Function URL.
* **FunctionUrl**: string (ReadOnly): The generated url for this resource.
* **InvokeMode**: string: The invocation mode for the function's URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.
* **Qualifier**: string: The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.
* **TargetFunctionArn**: string (Required): The Amazon Resource Name (ARN) of the function associated with the Function URL.

## AWS.Lambda/VersionProperties
### Properties
* **CodeSha256**: string: Only publish a version if the hash value matches the value that's specified. Use this option to avoid publishing a version if the function code has changed since you last updated it. Updates are not supported for this property.
* **Description**: string: A description for the version to override the description in the function configuration. Updates are not supported for this property.
* **FunctionArn**: string (ReadOnly, Identifier): The ARN of the version.
* **FunctionName**: string (Required): The name of the Lambda function.
* **FunctionScalingConfig**: [FunctionScalingConfig](#functionscalingconfig): The scaling configuration to apply to the function, including minimum and maximum execution environment limits.
* **ProvisionedConcurrencyConfig**: [ProvisionedConcurrencyConfiguration](#provisionedconcurrencyconfiguration): Specifies a provisioned concurrency configuration for a function's version. Updates are not supported for this property.
* **RuntimePolicy**: [RuntimePolicy](#runtimepolicy): Specifies the runtime management configuration of a function. Displays runtimeVersionArn only for Manual.
* **Version**: string (ReadOnly): The version number.

## AWS.Lambda/WebFunctionEndpointProperties
### Properties
* **AuthType**: string (Required): The authentication type for the endpoint.
* **CreatedAt**: string (ReadOnly): The timestamp when the endpoint was created.
* **Description**: string: A description of the endpoint.
* **DomainName**: string (ReadOnly): The domain name of the endpoint.
* **EndpointArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the endpoint.
* **EndpointName**: string (Required): The name of the endpoint.
* **EndpointType**: string (Required): The type of the endpoint.
* **FunctionArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the function.
* **FunctionName**: string (Required): The name of the web function this endpoint belongs to. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
* **RegionalEndpoints**: [WebFunctionEndpoint_RegionalEndpoints](#webfunctionendpointregionalendpoints) (ReadOnly): Per-region endpoint status and configuration.
* **Regions**: string[]: The list of AWS Regions for the endpoint.
* **RevisionWeights**: [RevisionWeight](#revisionweight)[]: List of revision routing entries. 1 or 2 entries. With 1 entry, weight must be 100. With 2 entries, weights must sum to 100.
* **ScalingConfig**: [ScalingConfig](#scalingconfig): The scaling configuration for the endpoint. Optionally constrains how many concurrent execution environments the endpoint can use, in addition to your account's vCPU quota.
* **State**: string (ReadOnly): The current state of the endpoint.
* **StateReason**: string (ReadOnly): The reason for the endpoint's current state.
* **ThrottleConfig**: [ThrottleConfig](#throttleconfig): The throttling configuration for the endpoint. Optionally constrains the request rate that the endpoint accepts, in addition to your account's rate limit quota.
* **UpdatedAt**: string (ReadOnly): The timestamp when the endpoint was last updated.
* **UpdateStatus**: string (ReadOnly): The status of the last update operation.
* **UpdateStatusReason**: string (ReadOnly): The reason for the update status.

## AWS.Lambda/WebFunctionProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp when the function was created.
* **FunctionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the function.
* **FunctionName**: string (Required): The name of the web function. The name can contain letters, numbers, hyphens (-), and underscores (_), and cannot begin or end with a hyphen or an underscore. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
* **State**: string (ReadOnly): The current state of the function.
* **StateReason**: string (ReadOnly): The reason for the function's current state.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the function.
* **UpdatedAt**: string (ReadOnly): The timestamp when the function was last updated.

## CapacityProviderConfig
### Properties
* **LambdaManagedInstancesCapacityProviderConfig**: [LambdaManagedInstancesCapacityProviderConfig](#lambdamanagedinstancescapacityproviderconfig) (Required): Configuration for Lambda-managed instances used by the capacity provider.

## CapacityProviderLoggingConfig
### Properties
* **LogGroup**: string: The name of the Amazon CloudWatch log group the capacity provider sends logs to. By default, Lambda capacity providers send logs to a default log group named ``/aws/lambda/capacity-provider/<capacity provider name>``. To use a different log group, enter an existing log group or enter a new log group name.
* **SystemLogLevel**: string: Set this property to filter the system logs for your capacity provider that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.

## CapacityProviderPermissionsConfig
### Properties
* **CapacityProviderOperatorRoleArn**: string (Required): The ARN of the IAM role that the capacity provider uses to manage compute instances and other AWS resources.

## CapacityProviderScalingConfig
### Properties
* **MaxVCpuCount**: int: The maximum number of vCPUs that the capacity provider can provision across all compute instances.
* **ScalingMode**: string: The scaling mode that determines how the capacity provider responds to changes in demand.
* **ScalingPolicies**: [TargetTrackingScalingPolicy](#targettrackingscalingpolicy)[]: A list of target tracking scaling policies for the capacity provider.

## CapacityProviderTelemetryConfig
### Properties
* **LoggingConfig**: [CapacityProviderLoggingConfig](#capacityproviderloggingconfig): The capacity provider's Amazon CloudWatch Logs configuration settings.

## CapacityProviderVpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): A list of security group IDs that control network access for compute instances managed by the capacity provider.
* **SubnetIds**: string[] (Required): A list of subnet IDs where the capacity provider launches compute instances.

## CloudWatchLogging
### Properties
* **LogGroup**: string
* **LogStream**: string

## Code
### Properties
* **ImageUri**: string (WriteOnly): URI of a [container image](https://docs.aws.amazon.com/lambda/latest/dg/lambda-images.html) in the Amazon ECR registry.
* **S3Bucket**: string (WriteOnly): An Amazon S3 bucket in the same AWS-Region as your function. The bucket can be in a different AWS-account.
* **S3Key**: string (WriteOnly): The Amazon S3 key of the deployment package.
* **S3ObjectStorageMode**: string (WriteOnly): Specifies the storage mode for the deployment package. Use ``COPY`` to store the package in LAMlong-managed storage. Use ``REFERENCE`` to read the package directly from the Amazon S3 bucket. If omitted, the default is ``COPY``.
* **S3ObjectVersion**: string (WriteOnly): For versioned objects, the version of the deployment package object to use.
* **SourceKMSKeyArn**: string (WriteOnly): The ARN of the KMSlong (KMS) customer managed key that's used to encrypt your function's .zip deployment package. If you don't provide a customer managed key, Lambda uses an [owned key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-owned-cmk).
* **ZipFile**: string (WriteOnly): (Node.js and Python) The source code of your Lambda function. If you include your function source inline with this parameter, CFN places it in a file named ``index`` and zips it to create a [deployment package](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-package.html). This zip file cannot exceed 4MB. For the ``Handler`` property, the first part of the handler identifier must be ``index``. For example, ``index.handler``.
  When you specify source code inline for a Node.js function, the ``index`` file that CFN creates uses the extension ``.js``. This means that Node.js treats the file as a CommonJS module.
 When using Node.js 24 or later, Node.js can automatically detect if a ``.js`` file should be treated as CommonJS or as an ES module. To enable auto-detection, add the ``--experimental-detect-module`` flag to the ``NODE_OPTIONS`` environment variable. For more information, see [Experimental Node.js features](https://docs.aws.amazon.com//lambda/latest/dg/lambda-nodejs.html#nodejs-experimental-features).
   For JSON, you must escape quotes and special characters such as newline (``\n``) with a backslash.
 If you specify a function that interacts with an AWS CloudFormation custom resource, you don't have to write your own functions to send responses to the custom resource that invoked the function. AWS CloudFormation provides a response module ([cfn-response](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-lambda-function-code-cfnresponsemodule.html)) that simplifies sending responses. See [Using Lambda with CloudFormation](https://docs.aws.amazon.com/lambda/latest/dg/services-cloudformation.html) for details.

## CodeArtifact
### Properties
* **Uri**: string (Required)

## CodeSigningPolicies
### Properties
* **UntrustedArtifactOnDeployment**: string (Required): Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided

## Config
### Properties
* **VpcEgressConfiguration**: [VpcEgressConfiguration](#vpcegressconfiguration) (Required)

## Cors
### Properties
* **AllowCredentials**: bool: Specifies whether credentials are included in the CORS request.
* **AllowHeaders**: string[]: Represents a collection of allowed headers.
* **AllowMethods**: string[]: Represents a collection of allowed HTTP methods.
* **AllowOrigins**: string[]: Represents a collection of allowed origins.
* **ExposeHeaders**: string[]: Represents a collection of exposed headers.
* **MaxAge**: int

## CpuConfiguration
### Properties
* **Architecture**: string (Required)

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

## DurableConfig
### Properties
* **ExecutionTimeout**: int (Required): The maximum time (in seconds) that a durable execution can run before timing out. This timeout applies to the entire durable execution, not individual function invocations.
* **KMSKeyArn**: string: The ARN of the KMSlong (KMS) customer managed key that is used to encrypt your durable execution's payload data, including input, output, and error payloads.
* **RetentionPeriodInDays**: int: The number of days to retain execution history after a durable execution completes. After this period, execution history is no longer available through the GetDurableExecutionHistory API.

## Endpoints
### Properties
* **KafkaBootstrapServers**: string[]: The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

## Environment
### Properties
* **Variables**: [Function_Variables](#functionvariables): Environment variable key-value pairs. For more information, see [Using Lambda environment variables](https://docs.aws.amazon.com/lambda/latest/dg/configuration-envvars.html).
 If the value of the environment variable is a time or a duration, enclose the value in quotes.

## EnvironmentVariable
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## EphemeralStorage
### Properties
* **Size**: int (Required): The size of the function's ``/tmp`` directory.

## FileSystemConfig
### Properties
* **Arn**: string (Required): The Amazon Resource Name (ARN) of the Amazon EFS or Amazon S3 Files access point that provides access to the file system.
* **LocalMountPath**: string (Required): The path where the function can access the file system, starting with ``/mnt/``.
* **S3FilesConfig**: [S3FilesConfig](#s3filesconfig): The configuration for how your function accesses data on an Amazon S3 file system. Valid only when the file system access point ARN is an Amazon S3 Files access point. If you specify a different access point type (for example, Amazon Elastic File System), the operation returns an ``InvalidParameterException``.

## Filter
### Properties
* **Pattern**: string: A filter pattern. For more information on the syntax of a filter pattern, see [Filter rule syntax](https://docs.aws.amazon.com/lambda/latest/dg/invocation-eventfiltering.html#filtering-syntax).

## FilterCriteria
### Properties
* **Filters**: [Filter](#filter)[]: A list of filters.

## Function_Variables
### Properties

## FunctionScalingConfig
### Properties
* **MaxExecutionEnvironments**: int: The maximum number of execution environments that can be provisioned for the function.
* **MinExecutionEnvironments**: int: The minimum number of execution environments to maintain for the function.

## FunctionScalingConfig
### Properties
* **MaxExecutionEnvironments**: int: The maximum number of execution environments that can be provisioned for the function.
* **MinExecutionEnvironments**: int: The minimum number of execution environments to maintain for the function.

## Hooks
### Properties
* **MicrovmHooks**: [MicrovmHooks](#microvmhooks)
* **MicrovmImageHooks**: [MicrovmImageHooks](#microvmimagehooks)
* **Port**: int

## ImageConfig
### Properties
* **Command**: string[]: Specifies parameters that you want to pass in with ENTRYPOINT. You can specify a maximum of 1,500 parameters in the list.
* **EntryPoint**: string[]: Specifies the entry point to their application, which is typically the location of the runtime executable. You can specify a maximum of 1,500 string entries in the list.
* **WorkingDirectory**: string: Specifies the working directory. The length of the directory string cannot exceed 1,000 characters.

## InstanceRequirements
### Properties
* **AllowedInstanceTypes**: string[]: A list of EC2 instance types that the capacity provider is allowed to use. If not specified, all compatible instance types are allowed.
* **Architectures**: string[]: A list of supported CPU architectures for compute instances. Valid values include ``x86_64`` and ``arm64``.
* **ExcludedInstanceTypes**: string[]: A list of EC2 instance types that the capacity provider should not use, even if they meet other requirements.

## LambdaManagedInstancesCapacityProviderConfig
### Properties
* **CapacityProviderArn**: string (Required): The Amazon Resource Name (ARN) of the capacity provider.
* **ExecutionEnvironmentMemoryGiBPerVCpu**: int: The amount of memory in GiB allocated per vCPU for execution environments.
* **PerExecutionEnvironmentMaxConcurrency**: int: The maximum number of concurrent executions that can run on each execution environment.

## Logging
### Properties
* **CloudWatch**: [CloudWatchLogging](#cloudwatchlogging)
* **Disabled**: bool

## LoggingConfig
### Properties
* **SystemLogLevel**: string: Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.

## LoggingConfig
### Properties
* **ApplicationLogLevel**: string: Set this property to filter the application logs for your function that Lambda sends to CloudWatch. Lambda only sends application logs at the selected level of detail and lower, where ``TRACE`` is the highest level and ``FATAL`` is the lowest.
* **LogFormat**: string: The format in which Lambda sends your function's application and system logs to CloudWatch. Select between plain text and structured JSON.
* **LogGroup**: string: The name of the Amazon CloudWatch log group the function sends logs to. By default, Lambda functions send logs to a default log group named ``/aws/lambda/<function name>``. To use a different log group, enter an existing log group or enter a new log group name.
* **SystemLogLevel**: string: Set this property to filter the system logs for your function that Lambda sends to CloudWatch. Lambda only sends system logs at the selected level of detail and lower, where ``DEBUG`` is the highest level and ``WARN`` is the lowest.

## MetricsConfig
### Properties
* **Metrics**: string[]: The metrics you want your event source mapping to produce, including ``EventCount``, ``ErrorCount``, ``KafkaMetrics``. 
  +  ``EventCount`` to receive metrics related to the number of events processed by your event source mapping.
  +  ``ErrorCount`` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the number of errors in your event source mapping processing.
  +  ``KafkaMetrics`` (Amazon MSK and self-managed Apache Kafka) to receive metrics related to the Kafka consumers from your event source mapping.
  
  For more information about these metrics, see [Event source mapping metrics](https://docs.aws.amazon.com/lambda/latest/dg/monitoring-metrics-types.html#event-source-mapping-metrics).

## MicrovmHooks
### Properties
* **Resume**: string
* **ResumeTimeoutInSeconds**: int
* **Run**: string
* **RunTimeoutInSeconds**: int
* **Suspend**: string
* **SuspendTimeoutInSeconds**: int
* **Terminate**: string
* **TerminateTimeoutInSeconds**: int

## MicrovmImageHooks
### Properties
* **Ready**: string
* **ReadyTimeoutInSeconds**: int
* **Validate**: string
* **ValidateTimeoutInSeconds**: int

## OnFailure
### Properties
* **Destination**: string (Required): The Amazon Resource Name (ARN) of the destination resource.

## OnFailure
### Properties
* **Destination**: string: The Amazon Resource Name (ARN) of the destination resource.
 To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/kafka-on-failure.html), you can configure an Amazon SNS topic, Amazon SQS queue, Amazon S3 bucket, or Kafka topic as the destination.
  Amazon SNS destinations have a message size limit of 256 KB. If the combined size of the function request and response payload exceeds the limit, Lambda will drop the payload when sending ``OnFailure`` event to the destination. For details on this behavior, refer to [Retaining records of asynchronous invocations](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html).
  To retain records of failed invocations from [Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html), [DynamoDB](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html), [self-managed Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-smaa-onfailure-destination) or [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-onfailure-destination), you can configure an Amazon SNS topic, Amazon SQS queue, or Amazon S3 bucket as the destination.

## OnSuccess
### Properties
* **Destination**: string (Required): The Amazon Resource Name (ARN) of the destination resource.

## PropagateTagsConfig
### Properties
* **ExplicitTags**: [Tag](#tag)[]: A list of tags to explicitly propagate to managed resources. Maximum of 40 tags.
* **Mode**: string: The mode for tag propagation. Use ``Explicit`` to propagate specific tags, or ``None`` to disable propagation.

## ProvisionedConcurrencyConfiguration
### Properties
* **ProvisionedConcurrentExecutions**: int (Required): The amount of provisioned concurrency to allocate for the alias.

## ProvisionedConcurrencyConfiguration
### Properties
* **ProvisionedConcurrentExecutions**: int (Required): The amount of provisioned concurrency to allocate for the version.

## ProvisionedPollerConfig
### Properties
* **MaximumPollers**: int: The maximum number of event pollers this event source can scale up to. For Amazon SQS event source mappings, the accepted range is between 2 and 10,000, with a default of 200. For Amazon MSK and self-managed Apache Kafka event source mappings, the accepted range is between 1 and 2,000, with a default of 200.
* **MinimumPollers**: int: The minimum number of event pollers this event source can scale down to. For Amazon SQS events source mappings, default is 2, and minimum 2 required. For Amazon MSK and self-managed Apache Kafka event source mappings, default is 1.
* **PollerGroupName**: string: (Amazon MSK and self-managed Apache Kafka) The name of the provisioned poller group. Use this option to group multiple ESMs within the event source's VPC to share Event Poller Unit (EPU) capacity. You can use this option to optimize Provisioned mode costs for your ESMs. You can group up to 100 ESMs per poller group and aggregate maximum pollers across all ESMs in a group cannot exceed 2000.

## ResourcePolicy_PolicyDocument
### Properties

## Resources
### Properties
* **MinimumMemoryInMiB**: int (Required)

## RevisionWeight
### Properties
* **RevisionId**: string (Required): The revision identifier.
* **Weight**: int (Required): The traffic weight for this revision.

## RuntimeManagementConfig
### Properties
* **RuntimeVersionArn**: string: The ARN of the runtime version you want the function to use.
  This is only required if you're using the *Manual* runtime update mode.
* **UpdateRuntimeOn**: string (Required): Specify the runtime update mode.
  +  *Auto (default)* - Automatically update to the most recent and secure runtime version using a [Two-phase runtime version rollout](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-two-phase). This is the best choice for most customers to ensure they always benefit from runtime updates.
  +  *FunctionUpdate* - LAM updates the runtime of you function to the most recent and secure runtime version when you update your function. This approach synchronizes runtime updates with function deployments, giving you control over when runtime updates are applied and allowing you to detect and mitigate rare runtime update incompatibilities early. When using this setting, you need to regularly update your functions to keep their runtime up-to-date.
  +  *Manual* - You specify a runtime version in your function configuration. The function will use this runtime version indefinitely. In the rare case where a new runtime version is incompatible with an existing function, this allows you to roll back your function to an earlier runtime version. For more information, see [Roll back a runtime version](https://docs.aws.amazon.com/lambda/latest/dg/runtimes-update.html#runtime-management-rollback).
  
 *Valid Values*: ``Auto`` | ``FunctionUpdate`` | ``Manual``

## RuntimePolicy
### Properties
* **RuntimeVersionArn**: string: The ARN of the runtime the function is configured to use. If the runtime update mode is manual, the ARN is returned, otherwise null is returned.
* **UpdateRuntimeOn**: string (Required): The runtime update mode.

## S3FilesConfig
### Properties
* **DirectS3Read**: string: Specifies if a function reads from the file system for the lowest latency, or through Amazon S3 Files feature "direct Amazon S3 bucket reads" for the highest throughput. Valid values:
  +  ``AUTO`` (default) – Direct reads are active for functions you configure with 512 MB or more of memory.
  +  ``ENABLED`` – Enforces all reads are directly from the Amazon S3 bucket, regardless of available memory (less than 512 MB).
  +  ``DISABLED`` – Routes all reads through the file system, regardless of memory configuration.
  
 To use direct reads, you must grant the execution role the ``s3:GetObject`` and ``s3:GetObjectVersion`` permissions. If a direct read fails, Lambda automatically falls back to reading through the file system.

## ScalingConfig
### Properties
* **MaximumConcurrency**: int: Limits the number of concurrent instances that the SQS event source can invoke.

## ScalingConfig
### Properties
* **MaxEnvironments**: int: The maximum number of concurrent execution environments for the endpoint. This optional limit further constrains the endpoint's scaling. When omitted, the endpoint's scaling is limited only by your account's vCPU quota.

## SchemaRegistryAccessConfig
### Properties
* **Type**: string: The type of authentication Lambda uses to access your schema registry.
* **URI**: string: The URI of the secret (Secrets Manager secret ARN) to authenticate with your schema registry.

## SchemaRegistryConfig
### Properties
* **AccessConfigs**: [SchemaRegistryAccessConfig](#schemaregistryaccessconfig)[]: An array of access configuration objects that tell Lambda how to authenticate with your schema registry.
* **EventRecordFormat**: string: The record format that Lambda delivers to your function after schema validation.
  +  Choose ``JSON`` to have Lambda deliver the record to your function as a standard JSON object.
  +  Choose ``SOURCE`` to have Lambda deliver the record to your function in its original source format. Lambda removes all schema metadata, such as the schema ID, before sending the record to your function.
* **SchemaRegistryURI**: string: The URI for your schema registry. The correct URI format depends on the type of schema registry you're using.
  +  For GLU schema registries, use the ARN of the registry.
  +  For Confluent schema registries, use the URL of the registry.
* **SchemaValidationConfigs**: [SchemaValidationConfig](#schemavalidationconfig)[]: An array of schema validation configuration objects, which tell Lambda the message attributes you want to validate and filter using your schema registry.

## SchemaValidationConfig
### Properties
* **Attribute**: string: The attributes you want your schema registry to validate and filter for. If you selected ``JSON`` as the ``EventRecordFormat``, Lambda also deserializes the selected message attributes.

## SelfManagedEventSource
### Properties
* **Endpoints**: [Endpoints](#endpoints): The list of bootstrap servers for your Kafka brokers in the following format: ``"KafkaBootstrapServers": ["abc.xyz.com:xxxx","abc2.xyz.com:xxxx"]``.

## SelfManagedKafkaEventSourceConfig
### Properties
* **ConsumerGroupId**: string: The identifier for the Kafka consumer group to join. The consumer group ID must be unique among all your Kafka event sources. After creating a Kafka event source mapping with the consumer group ID specified, you cannot update this value. For more information, see [Customizable consumer group ID](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka-process.html#services-smaa-topic-add).
* **ConsumptionMode**: string
* **SchemaRegistryConfig**: [SchemaRegistryConfig](#schemaregistryconfig): Specific configuration settings for a Kafka schema registry.

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
  +  ``BASIC_AUTH`` – (Amazon MQ) The ASMlong secret that stores your broker credentials.
  +  ``BASIC_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL/PLAIN authentication of your Apache Kafka brokers.
  +  ``VPC_SUBNET`` – (Self-managed Apache Kafka) The subnets associated with your VPC. Lambda connects to these subnets to fetch data from your self-managed Apache Kafka cluster.
  +  ``VPC_SECURITY_GROUP`` – (Self-managed Apache Kafka) The VPC security group used to manage access to your self-managed Apache Kafka brokers.
  +  ``SASL_SCRAM_256_AUTH`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-256 authentication of your self-managed Apache Kafka brokers.
  +  ``SASL_SCRAM_512_AUTH`` – (Amazon MSK, Self-managed Apache Kafka) The Secrets Manager ARN of your secret key used for SASL SCRAM-512 authentication of your self-managed Apache Kafka brokers.
  +  ``VIRTUAL_HOST`` –- (RabbitMQ) The name of the virtual host in your RabbitMQ broker. Lambda uses this RabbitMQ host as the event source. This property cannot be specified in an UpdateEventSourceMapping API call.
  +  ``CLIENT_CERTIFICATE_TLS_AUTH`` – (Amazon MSK, self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the certificate chain (X.509 PEM), private key (PKCS#8 PEM), and private key password (optional) used for mutual TLS authentication of your MSK/Apache Kafka brokers.
  +  ``SERVER_ROOT_CA_CERTIFICATE`` – (Self-managed Apache Kafka) The Secrets Manager ARN of your secret key containing the root CA certificate (X.509 PEM) used for TLS encryption of your Apache Kafka brokers.
* **URI**: string: The value for your chosen configuration in ``Type``. For example: ``"URI": "arn:aws:secretsmanager:us-east-1:01234567890:secret:MyBrokerSecretName"``.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string: The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key for this tag.
* **Value**: string: The value for this tag.

## Tag
### Properties
* **Key**: string (Required): The key for this tag.
* **Value**: string: The value for this tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string: The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string: The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TargetTrackingScalingPolicy
### Properties
* **PredefinedMetricType**: string (Required): The predefined metric type to track for scaling decisions.
* **TargetValue**: int (Required): The target value for the metric that the scaling policy attempts to maintain through scaling actions.

## TenancyConfig
### Properties
* **TenantIsolationMode**: string (Required): Tenant isolation mode allows for invocation to be sent to a corresponding execution environment dedicated to a specific tenant ID.

## ThrottleConfig
### Properties
* **RateLimit**: int: The maximum request rate per second for the endpoint, up to a maximum of 10000. This optional limit further constrains the endpoint's request rate. When omitted, the endpoint's request rate is limited only by your account's rate limit quota. Specify 0 to reject all new requests. Other supported values are 100 through 1000 in increments of 100, and 2000 through 10000 in increments of 1000. Supported values can vary by Region; if you specify an unsupported value, the error lists the values available in that Region.

## TracingConfig
### Properties
* **Mode**: string: The tracing mode.

## VersionWeight
### Properties
* **FunctionVersion**: string (Required): The qualifier of the second version.
* **FunctionWeight**: int (Required): The percentage of traffic that the alias routes to the second version.

## VpcConfig
### Properties
* **Ipv6AllowedForDualStack**: bool: Allows outbound IPv6 traffic on VPC functions that are connected to dual-stack subnets.
* **SecurityGroupIds**: string[]: A list of VPC security group IDs.
* **SubnetIds**: string[]: A list of VPC subnet IDs.

## VpcEgressConfiguration
### Properties
* **AssociatedComputeResourceTypes**: string[] (Required): The types of Lambda compute resources that can use this connector. Supported values are MicroVm and WebFunction.
* **NetworkProtocol**: string (Required): The network protocol for the connector. Specify IPv4 for IPv4-only networking, or DualStack for both IPv4 and IPv6.
* **SecurityGroupIds**: string[] (Required): The IDs of the VPC security groups to attach to the ENIs. All security groups must be in the same VPC as the subnets.
* **SubnetIds**: string[] (Required): The IDs of the VPC subnets where Lambda provisions elastic network interfaces (ENIs). Specify 1 to 16 subnets. All subnets must be in the same VPC.

## WebFunctionEndpoint_RegionalEndpoints
### Properties

