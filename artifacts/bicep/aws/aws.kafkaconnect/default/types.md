# AWS.KafkaConnect @ default

## Resource AWS.KafkaConnect/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KafkaConnect/ConnectorProperties](#awskafkaconnectconnectorproperties) (Required): properties of the resource

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

