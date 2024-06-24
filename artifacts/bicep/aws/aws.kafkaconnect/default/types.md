# AWS.KafkaConnect @ default

## Resource AWS.KafkaConnect/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KafkaConnect/ConnectorProperties](#awskafkaconnectconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.KafkaConnect/CustomPlugin@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KafkaConnect/CustomPluginProperties](#awskafkaconnectcustompluginproperties) (Required, Identifier): properties of the resource

## Resource AWS.KafkaConnect/WorkerConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KafkaConnect/WorkerConfigurationProperties](#awskafkaconnectworkerconfigurationproperties) (Required, Identifier): properties of the resource

## ApacheKafkaCluster
### Properties
* **BootstrapServers**: string (Required): The bootstrap servers string of the Apache Kafka cluster.
* **Vpc**: [Vpc](#vpc) (Required)

## AutoScaling
### Properties
* **MaxWorkerCount**: int (Required): The maximum number of workers for a connector.
* **McuCount**: int (Required): Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.
* **MinWorkerCount**: int (Required): The minimum number of workers for a connector.
* **ScaleInPolicy**: [ScaleInPolicy](#scaleinpolicy) (Required)
* **ScaleOutPolicy**: [ScaleOutPolicy](#scaleoutpolicy) (Required)

## AWS.KafkaConnect/ConnectorProperties
### Properties
* **Capacity**: [Capacity](#capacity) (Required)
* **ConnectorArn**: string (ReadOnly, Identifier): Amazon Resource Name for the created Connector.
* **ConnectorConfiguration**: [Connector_ConnectorConfiguration](#connectorconnectorconfiguration) (Required): The configuration for the connector.
* **ConnectorDescription**: string: A summary description of the connector.
* **ConnectorName**: string (Required): The name of the connector.
* **KafkaCluster**: [KafkaCluster](#kafkacluster) (Required)
* **KafkaClusterClientAuthentication**: [KafkaClusterClientAuthentication](#kafkaclusterclientauthentication) (Required)
* **KafkaClusterEncryptionInTransit**: [KafkaClusterEncryptionInTransit](#kafkaclusterencryptionintransit) (Required)
* **KafkaConnectVersion**: string (Required): The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.
* **LogDelivery**: [LogDelivery](#logdelivery)
* **Plugins**: [Plugin](#plugin)[] (Required): List of plugins to use with the connector.
* **ServiceExecutionRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource
* **WorkerConfiguration**: [WorkerConfiguration](#workerconfiguration)

## AWS.KafkaConnect/CustomPluginProperties
### Properties
* **ContentType**: string (Required): The type of the plugin file.
* **CustomPluginArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the custom plugin to use.
* **Description**: string: A summary description of the custom plugin.
* **FileDescription**: [CustomPluginFileDescription](#custompluginfiledescription) (ReadOnly)
* **Location**: [CustomPluginLocation](#custompluginlocation) (Required)
* **Name**: string (Required): The name of the custom plugin.
* **Revision**: int (ReadOnly): The revision of the custom plugin.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.KafkaConnect/WorkerConfigurationProperties
### Properties
* **Description**: string: A summary description of the worker configuration.
* **Name**: string (Required): The name of the worker configuration.
* **PropertiesFileContent**: string (Required): Base64 encoded contents of connect-distributed.properties file.
* **Revision**: int (ReadOnly): The description of a revision of the worker configuration.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource
* **WorkerConfigurationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the custom configuration.

## Capacity
### Properties
* **AutoScaling**: [AutoScaling](#autoscaling)
* **ProvisionedCapacity**: [ProvisionedCapacity](#provisionedcapacity)

## CloudWatchLogsLogDelivery
### Properties
* **Enabled**: bool (Required): Specifies whether the logs get sent to the specified CloudWatch Logs destination.
* **LogGroup**: string: The CloudWatch log group that is the destination for log delivery.

## Connector_ConnectorConfiguration
### Properties

## CustomPlugin
### Properties
* **CustomPluginArn**: string (Required): The Amazon Resource Name (ARN) of the custom plugin to use.
* **Revision**: int (Required): The revision of the custom plugin to use.

## CustomPluginFileDescription
### Properties
* **FileMd5**: string: The hex-encoded MD5 checksum of the custom plugin file. You can use it to validate the file.
* **FileSize**: int: The size in bytes of the custom plugin file. You can use it to validate the file.

## CustomPluginLocation
### Properties
* **S3Location**: [S3Location](#s3location) (Required)

## FirehoseLogDelivery
### Properties
* **DeliveryStream**: string: The Kinesis Data Firehose delivery stream that is the destination for log delivery.
* **Enabled**: bool (Required): Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

## KafkaCluster
### Properties
* **ApacheKafkaCluster**: [ApacheKafkaCluster](#apachekafkacluster) (Required)

## KafkaClusterClientAuthentication
### Properties
* **AuthenticationType**: string (Required)

## KafkaClusterEncryptionInTransit
### Properties
* **EncryptionType**: string (Required)

## LogDelivery
### Properties
* **WorkerLogDelivery**: [WorkerLogDelivery](#workerlogdelivery) (Required)

## Plugin
### Properties
* **CustomPlugin**: [CustomPlugin](#customplugin) (Required)

## ProvisionedCapacity
### Properties
* **McuCount**: int: Specifies how many MSK Connect Units (MCU) are allocated to the connector.
* **WorkerCount**: int (Required): Number of workers for a connector.

## S3Location
### Properties
* **BucketArn**: string (Required): The Amazon Resource Name (ARN) of an S3 bucket.
* **FileKey**: string (Required): The file key for an object in an S3 bucket.
* **ObjectVersion**: string: The version of an object in an S3 bucket.

## S3LogDelivery
### Properties
* **Bucket**: string: The name of the S3 bucket that is the destination for log delivery.
* **Enabled**: bool (Required): Specifies whether the logs get sent to the specified Amazon S3 destination.
* **Prefix**: string: The S3 prefix that is the destination for log delivery.

## ScaleInPolicy
### Properties
* **CpuUtilizationPercentage**: int (Required): Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

## ScaleOutPolicy
### Properties
* **CpuUtilizationPercentage**: int (Required): Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Vpc
### Properties
* **SecurityGroups**: string[] (Required): The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.
* **Subnets**: string[] (Required): The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.

## WorkerConfiguration
### Properties
* **Revision**: int (Required): The revision of the worker configuration to use.
* **WorkerConfigurationArn**: string (Required): The Amazon Resource Name (ARN) of the worker configuration to use.

## WorkerLogDelivery
### Properties
* **CloudWatchLogs**: [CloudWatchLogsLogDelivery](#cloudwatchlogslogdelivery)
* **Firehose**: [FirehoseLogDelivery](#firehoselogdelivery)
* **S3**: [S3LogDelivery](#s3logdelivery)

