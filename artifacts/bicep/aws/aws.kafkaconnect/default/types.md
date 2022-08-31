# AWS.KafkaConnect @ default

## Resource AWS.KafkaConnect/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.KafkaConnect/ConnectorProperties](#awskafkaconnectconnectorproperties): properties of the resource

## AWS.KafkaConnect/ConnectorProperties
### Properties
* **Capacity**: [Capacity](#capacity)
* **ConnectorArn**: string (ReadOnly): Amazon Resource Name for the created Connector.
* **ConnectorConfiguration**: [Connector_ConnectorConfiguration](#connectorconnectorconfiguration): The configuration for the connector.
* **ConnectorDescription**: string: A summary description of the connector.
* **ConnectorName**: string: The name of the connector.
* **KafkaCluster**: [KafkaCluster](#kafkacluster)
* **KafkaClusterClientAuthentication**: [KafkaClusterClientAuthentication](#kafkaclusterclientauthentication)
* **KafkaClusterEncryptionInTransit**: [KafkaClusterEncryptionInTransit](#kafkaclusterencryptionintransit)
* **KafkaConnectVersion**: string: The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.
* **LogDelivery**: [LogDelivery](#logdelivery)
* **Plugins**: [Plugin](#plugin)[]: List of plugins to use with the connector.
* **ServiceExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.
* **WorkerConfiguration**: [WorkerConfiguration](#workerconfiguration)

## Capacity
### Properties
* **AutoScaling**: [AutoScaling](#autoscaling)
* **ProvisionedCapacity**: [ProvisionedCapacity](#provisionedcapacity)

## AutoScaling
### Properties
* **MaxWorkerCount**: int: The maximum number of workers for a connector.
* **McuCount**: int: Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.
* **MinWorkerCount**: int: The minimum number of workers for a connector.
* **ScaleInPolicy**: [ScaleInPolicy](#scaleinpolicy)
* **ScaleOutPolicy**: [ScaleOutPolicy](#scaleoutpolicy)

## ScaleInPolicy
### Properties
* **CpuUtilizationPercentage**: int: Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

## ScaleOutPolicy
### Properties
* **CpuUtilizationPercentage**: int: Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

## ProvisionedCapacity
### Properties
* **McuCount**: int: Specifies how many MSK Connect Units (MCU) are allocated to the connector.
* **WorkerCount**: int: Number of workers for a connector.

## Connector_ConnectorConfiguration
### Properties

## KafkaCluster
### Properties
* **ApacheKafkaCluster**: [ApacheKafkaCluster](#apachekafkacluster)

## ApacheKafkaCluster
### Properties
* **BootstrapServers**: string: The bootstrap servers string of the Apache Kafka cluster.
* **Vpc**: [Vpc](#vpc)

## Vpc
### Properties
* **SecurityGroups**: string[]: The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.
* **Subnets**: string[]: The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.

## KafkaClusterClientAuthentication
### Properties
* **AuthenticationType**: [KafkaClusterClientAuthenticationType](#kafkaclusterclientauthenticationtype)

## KafkaClusterClientAuthenticationType
### Properties

## KafkaClusterEncryptionInTransit
### Properties
* **EncryptionType**: [KafkaClusterEncryptionInTransitType](#kafkaclusterencryptionintransittype)

## KafkaClusterEncryptionInTransitType
### Properties

## LogDelivery
### Properties
* **WorkerLogDelivery**: [WorkerLogDelivery](#workerlogdelivery)

## WorkerLogDelivery
### Properties
* **CloudWatchLogs**: [CloudWatchLogsLogDelivery](#cloudwatchlogslogdelivery)
* **Firehose**: [FirehoseLogDelivery](#firehoselogdelivery)
* **S3**: [S3LogDelivery](#s3logdelivery)

## CloudWatchLogsLogDelivery
### Properties
* **Enabled**: bool: Specifies whether the logs get sent to the specified CloudWatch Logs destination.
* **LogGroup**: string: The CloudWatch log group that is the destination for log delivery.

## FirehoseLogDelivery
### Properties
* **DeliveryStream**: string: The Kinesis Data Firehose delivery stream that is the destination for log delivery.
* **Enabled**: bool: Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

## S3LogDelivery
### Properties
* **Bucket**: string: The name of the S3 bucket that is the destination for log delivery.
* **Enabled**: bool: Specifies whether the logs get sent to the specified Amazon S3 destination.
* **Prefix**: string: The S3 prefix that is the destination for log delivery.

## Plugin
### Properties
* **CustomPlugin**: [CustomPlugin](#customplugin)

## CustomPlugin
### Properties
* **CustomPluginArn**: string: The Amazon Resource Name (ARN) of the custom plugin to use.
* **Revision**: int: The revision of the custom plugin to use.

## WorkerConfiguration
### Properties
* **Revision**: int: The revision of the worker configuration to use.
* **WorkerConfigurationArn**: string: The Amazon Resource Name (ARN) of the worker configuration to use.

