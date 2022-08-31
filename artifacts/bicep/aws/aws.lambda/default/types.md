# AWS.Lambda @ default

## Resource AWS.Lambda/CodeSigningConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lambda/CodeSigningConfigProperties](#awslambdacodesigningconfigproperties): properties of the resource

## Resource AWS.Lambda/EventSourceMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lambda/EventSourceMappingProperties](#awslambdaeventsourcemappingproperties): properties of the resource

## Resource AWS.Lambda/Function@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lambda/FunctionProperties](#awslambdafunctionproperties): properties of the resource

## Resource AWS.Lambda/Url@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lambda/UrlProperties](#awslambdaurlproperties): properties of the resource

## AWS.Lambda/CodeSigningConfigProperties
### Properties
* **AllowedPublishers**: [AllowedPublishers](#allowedpublishers): When the CodeSigningConfig is later on attached to a function, the function code will be expected to be signed by profiles from this list
* **CodeSigningConfigArn**: string (ReadOnly): A unique Arn for CodeSigningConfig resource
* **CodeSigningConfigId**: string (ReadOnly): A unique identifier for CodeSigningConfig resource
* **CodeSigningPolicies**: [CodeSigningPolicies](#codesigningpolicies): Policies to control how to act if a signature is invalid
* **Description**: string: A description of the CodeSigningConfig

## AllowedPublishers
### Properties
* **SigningProfileVersionArns**: string[]: List of Signing profile version Arns

## CodeSigningPolicies
### Properties
* **UntrustedArtifactOnDeployment**: string: Indicates how Lambda operations involve updating the code artifact will operate. Default to Warn if not provided

## AWS.Lambda/EventSourceMappingProperties
### Properties
* **AmazonManagedKafkaEventSourceConfig**: [AmazonManagedKafkaEventSourceConfig](#amazonmanagedkafkaeventsourceconfig): Specific configuration settings for an MSK event source.
* **BatchSize**: int: The maximum number of items to retrieve in a single batch.
* **BisectBatchOnFunctionError**: bool: (Streams) If the function returns an error, split the batch in two and retry.
* **DestinationConfig**: [DestinationConfig](#destinationconfig): (Streams) An Amazon SQS queue or Amazon SNS topic destination for discarded records.
* **Enabled**: bool: Disables the event source mapping to pause polling and invocation.
* **EventSourceArn**: string: The Amazon Resource Name (ARN) of the event source.
* **FilterCriteria**: [FilterCriteria](#filtercriteria): The filter criteria to control event filtering.
* **FunctionName**: string: The name of the Lambda function.
* **FunctionResponseTypes**: string[]: (Streams) A list of response types supported by the function.
* **Id**: string (ReadOnly): Event Source Mapping Identifier UUID.
* **MaximumBatchingWindowInSeconds**: int: (Streams) The maximum amount of time to gather records before invoking the function, in seconds.
* **MaximumRecordAgeInSeconds**: int: (Streams) The maximum age of a record that Lambda sends to a function for processing.
* **MaximumRetryAttempts**: int: (Streams) The maximum number of times to retry when the function returns an error.
* **ParallelizationFactor**: int: (Streams) The number of batches to process from each shard concurrently.
* **Queues**: string[]: (ActiveMQ) A list of ActiveMQ queues.
* **SelfManagedEventSource**: [SelfManagedEventSource](#selfmanagedeventsource): Self-managed event source endpoints.
* **SelfManagedKafkaEventSourceConfig**: [SelfManagedKafkaEventSourceConfig](#selfmanagedkafkaeventsourceconfig): Specific configuration settings for a Self-Managed Apache Kafka event source.
* **SourceAccessConfigurations**: [SourceAccessConfiguration](#sourceaccessconfiguration)[]: A list of SourceAccessConfiguration.
* **StartingPosition**: string: The position in a stream from which to start reading. Required for Amazon Kinesis and Amazon DynamoDB Streams sources.
* **StartingPositionTimestamp**: int: With StartingPosition set to AT_TIMESTAMP, the time from which to start reading, in Unix time seconds.
* **Topics**: string[]: (Kafka) A list of Kafka topics.
* **TumblingWindowInSeconds**: int: (Streams) Tumbling window (non-overlapping time window) duration to perform aggregations.

## AmazonManagedKafkaEventSourceConfig
### Properties
* **ConsumerGroupId**: [ConsumerGroupId](#consumergroupid): The identifier for the Kafka Consumer Group to join.

## ConsumerGroupId
### Properties

## DestinationConfig
### Properties
* **OnFailure**: [OnFailure](#onfailure): The destination configuration for failed invocations.

## OnFailure
### Properties
* **Destination**: string: The Amazon Resource Name (ARN) of the destination resource.

## FilterCriteria
### Properties
* **Filters**: [Filter](#filter)[]: List of filters of this FilterCriteria

## Filter
### Properties
* **Pattern**: string: The filter pattern that defines which events should be passed for invocations.

## SelfManagedEventSource
### Properties
* **Endpoints**: [Endpoints](#endpoints): The endpoints for a self-managed event source.

## Endpoints
### Properties
* **KafkaBootstrapServers**: string[]: A list of Kafka server endpoints.

## SelfManagedKafkaEventSourceConfig
### Properties
* **ConsumerGroupId**: [ConsumerGroupId](#consumergroupid): The identifier for the Kafka Consumer Group to join.

## SourceAccessConfiguration
### Properties
* **Type**: string: The type of source access configuration.
* **URI**: string: The URI for the source access configuration resource.

## AWS.Lambda/FunctionProperties
### Properties
* **Architectures**: string[]
* **Arn**: string (ReadOnly): Unique identifier for function resources
* **Code**: [Code](#code) (WriteOnly): The code for the function.
* **CodeSigningConfigArn**: string: A unique Arn for CodeSigningConfig resource
* **DeadLetterConfig**: [DeadLetterConfig](#deadletterconfig): A dead letter queue configuration that specifies the queue or topic where Lambda sends asynchronous events when they fail processing.
* **Description**: string: A description of the function.
* **Environment**: [Environment](#environment): Environment variables that are accessible from function code during execution.
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage): A function's ephemeral storage settings.
* **FileSystemConfigs**: [FileSystemConfig](#filesystemconfig)[]: Connection settings for an Amazon EFS file system. To connect a function to a file system, a mount target must be available in every Availability Zone that your function connects to. If your template contains an AWS::EFS::MountTarget resource, you must also specify a DependsOn attribute to ensure that the mount target is created or updated before the function.
* **FunctionName**: string: The name of the Lambda function, up to 64 characters in length. If you don't specify a name, AWS CloudFormation generates one.
* **Handler**: string: The name of the method within your code that Lambda calls to execute your function. The format includes the file name. It can also include namespaces and other qualifiers, depending on the runtime
* **ImageConfig**: [ImageConfig](#imageconfig): ImageConfig
* **KmsKeyArn**: string: The ARN of the AWS Key Management Service (AWS KMS) key that's used to encrypt your function's environment variables. If it's not provided, AWS Lambda uses a default service key.
* **Layers**: string[]: A list of function layers to add to the function's execution environment. Specify each layer by its ARN, including the version.
* **MemorySize**: int: The amount of memory that your function has access to. Increasing the function's memory also increases its CPU allocation. The default value is 128 MB. The value must be a multiple of 64 MB.
* **PackageType**: string: PackageType.
* **ReservedConcurrentExecutions**: int: The number of simultaneous executions to reserve for the function.
* **Role**: string: The Amazon Resource Name (ARN) of the function's execution role.
* **Runtime**: string: The identifier of the function's runtime.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the function.
* **Timeout**: int: The amount of time that Lambda allows a function to run before stopping it. The default is 3 seconds. The maximum allowed value is 900 seconds.
* **TracingConfig**: [TracingConfig](#tracingconfig): Set Mode to Active to sample and trace a subset of incoming requests with AWS X-Ray.
* **VpcConfig**: [VpcConfig](#vpcconfig): For network connectivity to AWS resources in a VPC, specify a list of security groups and subnets in the VPC.

## Code
### Properties
* **ImageUri**: string (WriteOnly): ImageUri.
* **S3Bucket**: string (WriteOnly): An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
* **S3Key**: string (WriteOnly): The Amazon S3 key of the deployment package.
* **S3ObjectVersion**: string (WriteOnly): For versioned objects, the version of the deployment package object to use.
* **ZipFile**: string (WriteOnly): The source code of your Lambda function. If you include your function source inline with this parameter, AWS CloudFormation places it in a file named index and zips it to create a deployment package..

## DeadLetterConfig
### Properties
* **TargetArn**: string: The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.

## Environment
### Properties
* **Variables**: [Function_Variables](#functionvariables): Environment variable key-value pairs.

## Function_Variables
### Properties

## EphemeralStorage
### Properties
* **Size**: int: The amount of ephemeral storage that your function has access to.

## FileSystemConfig
### Properties
* **Arn**: string: The Amazon Resource Name (ARN) of the Amazon EFS access point that provides access to the file system.
* **LocalMountPath**: string: The path where the function can access the file system, starting with /mnt/.

## ImageConfig
### Properties
* **Command**: string[]: Command.
* **EntryPoint**: string[]: EntryPoint.
* **WorkingDirectory**: string: WorkingDirectory.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TracingConfig
### Properties
* **Mode**: string: The tracing mode.

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]: A list of VPC security groups IDs.
* **SubnetIds**: string[]: A list of VPC subnet IDs.

## AWS.Lambda/UrlProperties
### Properties
* **AuthType**: string: Can be either AWS_IAM if the requests are authorized via IAM, or NONE if no authorization is configured on the Function URL.
* **Cors**: [Cors](#cors)
* **FunctionArn**: string (ReadOnly): The full Amazon Resource Name (ARN) of the function associated with the Function URL.
* **FunctionUrl**: string (ReadOnly): The generated url for this resource.
* **InvokeMode**: string: The invocation mode for the function?s URL. Set to BUFFERED if you want to buffer responses before returning them to the client. Set to RESPONSE_STREAM if you want to stream responses, allowing faster time to first byte and larger response payload sizes. If not set, defaults to BUFFERED.
* **Qualifier**: string (WriteOnly): The alias qualifier for the target function. If TargetFunctionArn is unqualified then Qualifier must be passed.
* **TargetFunctionArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the function associated with the Function URL.

## Cors
### Properties
* **AllowCredentials**: bool: Specifies whether credentials are included in the CORS request.
* **AllowHeaders**: [AllowHeaders](#allowheaders): Represents a collection of allowed headers.
* **AllowMethods**: [AllowMethods](#allowmethods): Represents a collection of allowed HTTP methods.
* **AllowOrigins**: [AllowOrigins](#alloworigins): Represents a collection of allowed origins.
* **ExposeHeaders**: [ExposeHeaders](#exposeheaders): Represents a collection of exposed headers.
* **MaxAge**: int

## AllowHeaders
### Properties

## AllowMethods
### Properties

## AllowOrigins
### Properties

## ExposeHeaders
### Properties

