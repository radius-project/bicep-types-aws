# AWS.MSK @ default

## Resource AWS.MSK/BatchScramSecret@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MSK/BatchScramSecretProperties](#awsmskbatchscramsecretproperties): properties of the resource

## Resource AWS.MSK/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MSK/ClusterProperties](#awsmskclusterproperties): properties of the resource

## Resource AWS.MSK/Configuration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MSK/ConfigurationProperties](#awsmskconfigurationproperties): properties of the resource

## AWS.MSK/BatchScramSecretProperties
### Properties
* **ClusterArn**: string
* **SecretArnList**: [SecretArnList](#secretarnlist)

## SecretArnList
### Properties

## AWS.MSK/ClusterProperties
### Properties
* **Arn**: string (ReadOnly)
* **BrokerNodeGroupInfo**: [BrokerNodeGroupInfo](#brokernodegroupinfo)
* **ClientAuthentication**: [ClientAuthentication](#clientauthentication)
* **ClusterName**: string
* **ConfigurationInfo**: [ConfigurationInfo](#configurationinfo)
* **CurrentVersion**: string: The current version of the MSK cluster
* **EncryptionInfo**: [EncryptionInfo](#encryptioninfo)
* **EnhancedMonitoring**: string
* **KafkaVersion**: string
* **LoggingInfo**: [LoggingInfo](#logginginfo)
* **NumberOfBrokerNodes**: int
* **OpenMonitoring**: [OpenMonitoring](#openmonitoring)
* **Tags**: [Cluster_Tags](#clustertags): A key-value pair to associate with a resource.

## BrokerNodeGroupInfo
### Properties
* **BrokerAZDistribution**: string
* **ClientSubnets**: string[]
* **ConnectivityInfo**: [ConnectivityInfo](#connectivityinfo)
* **InstanceType**: string
* **SecurityGroups**: string[]
* **StorageInfo**: [StorageInfo](#storageinfo)

## ConnectivityInfo
### Properties
* **PublicAccess**: [PublicAccess](#publicaccess)

## PublicAccess
### Properties
* **Type**: string

## StorageInfo
### Properties
* **EBSStorageInfo**: [EBSStorageInfo](#ebsstorageinfo)

## EBSStorageInfo
### Properties
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)
* **VolumeSize**: int

## ProvisionedThroughput
### Properties
* **Enabled**: bool
* **VolumeThroughput**: int

## ClientAuthentication
### Properties
* **Sasl**: [Sasl](#sasl)
* **Tls**: [Tls](#tls)
* **Unauthenticated**: [Unauthenticated](#unauthenticated)

## Sasl
### Properties
* **Iam**: [Iam](#iam)
* **Scram**: [Scram](#scram)

## Iam
### Properties
* **Enabled**: bool

## Scram
### Properties
* **Enabled**: bool

## Tls
### Properties
* **CertificateAuthorityArnList**: string[]
* **Enabled**: bool

## Unauthenticated
### Properties
* **Enabled**: bool

## ConfigurationInfo
### Properties
* **Arn**: string
* **Revision**: int

## EncryptionInfo
### Properties
* **EncryptionAtRest**: [EncryptionAtRest](#encryptionatrest)
* **EncryptionInTransit**: [EncryptionInTransit](#encryptionintransit)

## EncryptionAtRest
### Properties
* **DataVolumeKMSKeyId**: string

## EncryptionInTransit
### Properties
* **ClientBroker**: string
* **InCluster**: bool

## LoggingInfo
### Properties
* **BrokerLogs**: [BrokerLogs](#brokerlogs)

## BrokerLogs
### Properties
* **CloudWatchLogs**: [CloudWatchLogs](#cloudwatchlogs)
* **Firehose**: [Firehose](#firehose)
* **S3**: [S3](#s3)

## CloudWatchLogs
### Properties
* **Enabled**: bool
* **LogGroup**: string

## Firehose
### Properties
* **DeliveryStream**: string
* **Enabled**: bool

## S3
### Properties
* **Bucket**: string
* **Enabled**: bool
* **Prefix**: string

## OpenMonitoring
### Properties
* **Prometheus**: [Prometheus](#prometheus)

## Prometheus
### Properties
* **JmxExporter**: [JmxExporter](#jmxexporter)
* **NodeExporter**: [NodeExporter](#nodeexporter)

## JmxExporter
### Properties
* **EnabledInBroker**: bool

## NodeExporter
### Properties
* **EnabledInBroker**: bool

## Cluster_Tags
### Properties

## AWS.MSK/ConfigurationProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **KafkaVersionsList**: [KafkaVersionsList](#kafkaversionslist)
* **Name**: string
* **ServerProperties**: string (WriteOnly)

## KafkaVersionsList
### Properties

