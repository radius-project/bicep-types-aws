# AWS.MSK @ default

## Resource AWS.MSK/BatchScramSecret@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/BatchScramSecretProperties](#awsmskbatchscramsecretproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ClusterProperties](#awsmskclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/ClusterPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ClusterPolicyProperties](#awsmskclusterpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Configuration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ConfigurationProperties](#awsmskconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Replicator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ReplicatorProperties](#awsmskreplicatorproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/VpcConnection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/VpcConnectionProperties](#awsmskvpcconnectionproperties) (Required, Identifier): properties of the resource

## AmazonMskCluster
### Properties
* **MskClusterArn**: string (Required): The ARN of an Amazon MSK cluster.

## AWS.MSK/BatchScramSecretProperties
### Properties
* **ClusterArn**: string (Required, Identifier)
* **SecretArnList**: string[]

## AWS.MSK/ClusterPolicyProperties
### Properties
* **ClusterArn**: string (Required, Identifier): The arn of the cluster for the resource policy.
* **CurrentVersion**: string (ReadOnly): The current version of the policy attached to the specified cluster
* **Policy**: [ClusterPolicy_Policy](#clusterpolicypolicy) (Required): A policy document containing permissions to add to the specified cluster.

## AWS.MSK/ClusterProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **BrokerNodeGroupInfo**: [BrokerNodeGroupInfo](#brokernodegroupinfo) (Required)
* **ClientAuthentication**: [ClientAuthentication](#clientauthentication)
* **ClusterName**: string (Required)
* **ConfigurationInfo**: [ConfigurationInfo](#configurationinfo)
* **CurrentVersion**: string: The current version of the MSK cluster
* **EncryptionInfo**: [EncryptionInfo](#encryptioninfo)
* **EnhancedMonitoring**: string
* **KafkaVersion**: string (Required)
* **LoggingInfo**: [LoggingInfo](#logginginfo)
* **NumberOfBrokerNodes**: int (Required)
* **OpenMonitoring**: [OpenMonitoring](#openmonitoring)
* **StorageMode**: string
* **Tags**: [Cluster_Tags](#clustertags): A key-value pair to associate with a resource.

## AWS.MSK/ConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **KafkaVersionsList**: string[]
* **LatestRevision**: [LatestRevision](#latestrevision)
* **Name**: string (Required)
* **ServerProperties**: string (Required, WriteOnly)

## AWS.MSK/ReplicatorProperties
### Properties
* **CurrentVersion**: string: The current version of the MSK replicator.
* **Description**: string: A summary description of the replicator.
* **KafkaClusters**: [KafkaCluster](#kafkacluster)[] (Required): Specifies a list of Kafka clusters which are targets of the replicator.
* **ReplicationInfoList**: [ReplicationInfo](#replicationinfo)[] (Required): A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
* **ReplicatorArn**: string (ReadOnly, Identifier): Amazon Resource Name for the created replicator.
* **ReplicatorName**: string (Required): The name of the replicator.
* **ServiceExecutionRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## AWS.MSK/VpcConnectionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Authentication**: string (Required)
* **ClientSubnets**: string[] (Required)
* **SecurityGroups**: string[] (Required)
* **Tags**: [Tags](#tags)
* **TargetClusterArn**: string (Required): The Amazon Resource Name (ARN) of the target cluster
* **VpcId**: string (Required)

## BrokerLogs
### Properties
* **CloudWatchLogs**: [CloudWatchLogs](#cloudwatchlogs)
* **Firehose**: [Firehose](#firehose)
* **S3**: [S3](#s3)

## BrokerNodeGroupInfo
### Properties
* **BrokerAZDistribution**: string
* **ClientSubnets**: string[] (Required)
* **ConnectivityInfo**: [ConnectivityInfo](#connectivityinfo)
* **InstanceType**: string (Required)
* **SecurityGroups**: string[]
* **StorageInfo**: [StorageInfo](#storageinfo)

## ClientAuthentication
### Properties
* **Sasl**: [Sasl](#sasl)
* **Tls**: [Tls](#tls)
* **Unauthenticated**: [Unauthenticated](#unauthenticated)

## CloudWatchLogs
### Properties
* **Enabled**: bool (Required)
* **LogGroup**: string

## Cluster_Tags
### Properties

## ClusterPolicy_Policy
### Properties

## ConfigurationInfo
### Properties
* **Arn**: string (Required, Identifier)
* **Revision**: int (Required)

## ConnectivityInfo
### Properties
* **PublicAccess**: [PublicAccess](#publicaccess)
* **VpcConnectivity**: [VpcConnectivity](#vpcconnectivity)

## ConsumerGroupReplication
### Properties
* **ConsumerGroupsToExclude**: string[]: List of regular expression patterns indicating the consumer groups that should not be replicated.
* **ConsumerGroupsToReplicate**: string[] (Required): List of regular expression patterns indicating the consumer groups to copy.
* **DetectAndCopyNewConsumerGroups**: bool: Whether to periodically check for new consumer groups.
* **SynchroniseConsumerGroupOffsets**: bool: Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.

## EBSStorageInfo
### Properties
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)
* **VolumeSize**: int

## EncryptionAtRest
### Properties
* **DataVolumeKMSKeyId**: string (Required)

## EncryptionInfo
### Properties
* **EncryptionAtRest**: [EncryptionAtRest](#encryptionatrest)
* **EncryptionInTransit**: [EncryptionInTransit](#encryptionintransit)

## EncryptionInTransit
### Properties
* **ClientBroker**: string
* **InCluster**: bool

## Firehose
### Properties
* **DeliveryStream**: string
* **Enabled**: bool (Required)

## Iam
### Properties
* **Enabled**: bool (Required)

## JmxExporter
### Properties
* **EnabledInBroker**: bool (Required)

## KafkaCluster
### Properties
* **AmazonMskCluster**: [AmazonMskCluster](#amazonmskcluster) (Required): Details of an Amazon MSK cluster. Exactly one of AmazonMskCluster is required.
* **VpcConfig**: [KafkaClusterClientVpcConfig](#kafkaclusterclientvpcconfig) (Required): Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.

## KafkaClusterClientVpcConfig
### Properties
* **SecurityGroupIds**: string[]: The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. If a security group is not specified, the default security group associated with the VPC is used.
* **SubnetIds**: string[] (Required): The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.

## LatestRevision
### Properties
* **CreationTime**: string (ReadOnly)
* **Description**: string (ReadOnly)
* **Revision**: int (ReadOnly)

## LoggingInfo
### Properties
* **BrokerLogs**: [BrokerLogs](#brokerlogs) (Required)

## NodeExporter
### Properties
* **EnabledInBroker**: bool (Required)

## OpenMonitoring
### Properties
* **Prometheus**: [Prometheus](#prometheus) (Required)

## Prometheus
### Properties
* **JmxExporter**: [JmxExporter](#jmxexporter)
* **NodeExporter**: [NodeExporter](#nodeexporter)

## ProvisionedThroughput
### Properties
* **Enabled**: bool
* **VolumeThroughput**: int

## PublicAccess
### Properties
* **Type**: string

## ReplicationInfo
### Properties
* **ConsumerGroupReplication**: [ConsumerGroupReplication](#consumergroupreplication) (Required): Configuration relating to consumer group replication.
* **SourceKafkaClusterArn**: string (Required): Amazon Resource Name of the source Kafka cluster.
* **TargetCompressionType**: string (Required): The type of compression to use writing records to target Kafka cluster.
* **TargetKafkaClusterArn**: string (Required): Amazon Resource Name of the target Kafka cluster.
* **TopicReplication**: [TopicReplication](#topicreplication) (Required): Configuration relating to topic replication.

## ReplicationStartingPosition
### Properties
* **Type**: string

## ReplicationTopicNameConfiguration
### Properties
* **Type**: string

## S3
### Properties
* **Bucket**: string
* **Enabled**: bool (Required)
* **Prefix**: string

## Sasl
### Properties
* **Iam**: [Iam](#iam)
* **Scram**: [Scram](#scram)

## Scram
### Properties
* **Enabled**: bool (Required)

## StorageInfo
### Properties
* **EBSStorageInfo**: [EBSStorageInfo](#ebsstorageinfo)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tags
### Properties

## Tls
### Properties
* **CertificateAuthorityArnList**: string[]
* **Enabled**: bool

## TopicReplication
### Properties
* **CopyAccessControlListsForTopics**: bool: Whether to periodically configure remote topic ACLs to match their corresponding upstream topics.
* **CopyTopicConfigurations**: bool: Whether to periodically configure remote topics to match their corresponding upstream topics.
* **DetectAndCopyNewTopics**: bool: Whether to periodically check for new topics and partitions.
* **StartingPosition**: [ReplicationStartingPosition](#replicationstartingposition): Configuration for specifying the position in the topics to start replicating from.
* **TopicNameConfiguration**: [ReplicationTopicNameConfiguration](#replicationtopicnameconfiguration): Configuration for specifying replicated topic names should be the same as their corresponding upstream topics or prefixed with source cluster alias.
* **TopicsToExclude**: string[]: List of regular expression patterns indicating the topics that should not be replicated.
* **TopicsToReplicate**: string[] (Required): List of regular expression patterns indicating the topics to copy.

## Unauthenticated
### Properties
* **Enabled**: bool (Required)

## VpcConnectivity
### Properties
* **ClientAuthentication**: [VpcConnectivityClientAuthentication](#vpcconnectivityclientauthentication)

## VpcConnectivityClientAuthentication
### Properties
* **Sasl**: [VpcConnectivitySasl](#vpcconnectivitysasl)
* **Tls**: [VpcConnectivityTls](#vpcconnectivitytls)

## VpcConnectivityIam
### Properties
* **Enabled**: bool (Required)

## VpcConnectivitySasl
### Properties
* **Iam**: [VpcConnectivityIam](#vpcconnectivityiam)
* **Scram**: [VpcConnectivityScram](#vpcconnectivityscram)

## VpcConnectivityScram
### Properties
* **Enabled**: bool (Required)

## VpcConnectivityTls
### Properties
* **Enabled**: bool (Required)

