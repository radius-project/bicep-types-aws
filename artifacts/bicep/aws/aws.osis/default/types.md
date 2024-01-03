# AWS.OSIS @ default

## Resource AWS.OSIS/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OSIS/PipelineProperties](#awsosispipelineproperties) (Required): properties of the resource

## AWS.OSIS/PipelineProperties
### Properties
* **BufferOptions**: [BufferOptions](#bufferoptions)
* **EncryptionAtRestOptions**: [EncryptionAtRestOptions](#encryptionatrestoptions)
* **IngestEndpointUrls**: string[] (ReadOnly): A list of endpoints that can be used for ingesting data into a pipeline
* **LogPublishingOptions**: [LogPublishingOptions](#logpublishingoptions)
* **MaxUnits**: int (Required): The maximum pipeline capacity, in Ingestion Compute Units (ICUs).
* **MinUnits**: int (Required): The minimum pipeline capacity, in Ingestion Compute Units (ICUs).
* **PipelineArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the pipeline.
* **PipelineConfigurationBody**: string (Required): The Data Prepper pipeline configuration in YAML format.
* **PipelineName**: string (Required): Name of the OpenSearch Ingestion Service pipeline to create. Pipeline names are unique across the pipelines owned by an account within an AWS Region.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **VpcEndpoints**: [VpcEndpoint](#vpcendpoint)[] (ReadOnly): The VPC interface endpoints that have access to the pipeline.
* **VpcOptions**: [VpcOptions](#vpcoptions) (WriteOnly)

## BufferOptions
### Properties
* **PersistentBufferEnabled**: bool (Required): Whether persistent buffering should be enabled.

## EncryptionAtRestOptions
### Properties
* **KmsKeyArn**: string (Required): The KMS key to use for encrypting data. By default an AWS owned key is used

## LogPublishingOptions
### Properties
* **CloudWatchLogDestination**: [Pipeline_CloudWatchLogDestination](#pipelinecloudwatchlogdestination): The destination for OpenSearch Ingestion Service logs sent to Amazon CloudWatch.
* **IsLoggingEnabled**: bool: Whether logs should be published.

## Pipeline_CloudWatchLogDestination
### Properties
* **LogGroup**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## VpcEndpoint
### Properties
* **VpcEndpointId**: string: The unique identifier of the endpoint.
* **VpcId**: string: The ID for your VPC. AWS Privatelink generates this value when you create a VPC.
* **VpcOptions**: [VpcOptions](#vpcoptions)

## VpcOptions
### Properties
* **SecurityGroupIds**: string[]: A list of security groups associated with the VPC endpoint.
* **SubnetIds**: string[] (Required): A list of subnet IDs associated with the VPC endpoint.

