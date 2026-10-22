# AWS.MSK @ default

## Resource AWS.MSK/BatchScramSecret@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/BatchScramSecretProperties](#awsmskbatchscramsecretproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Channel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ChannelProperties](#awsmskchannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ClusterProperties](#awsmskclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/ClusterPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ClusterPolicyProperties](#awsmskclusterpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Configuration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ConfigurationProperties](#awsmskconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Replicator@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/ReplicatorProperties](#awsmskreplicatorproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/Topic@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/TopicProperties](#awsmsktopicproperties) (Required, Identifier): properties of the resource

## Resource AWS.MSK/VpcConnection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MSK/VpcConnectionProperties](#awsmskvpcconnectionproperties) (Required, Identifier): properties of the resource

## AmazonMskCluster
### Properties
* **MskClusterArn**: string (Required): The ARN of an Amazon MSK cluster.

## ApacheKafkaCluster
### Properties
* **ApacheKafkaClusterId**: string (Required): The ID of the Apache Kafka cluster.
* **BootstrapBrokerString**: string (Required): The bootstrap broker string of the Apache Kafka cluster.

## AWS.MSK/BatchScramSecretProperties
### Properties
* **ClusterArn**: string (Required, Identifier)
* **SecretArnList**: string[]

## AWS.MSK/ChannelProperties
### Properties
* **ChannelArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) that uniquely identifies the channel
* **ChannelName**: string (Required)
* **ClusterArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the cluster
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **IcebergDestinationConfiguration**: [IcebergDestinationConfiguration](#icebergdestinationconfiguration)
* **LoggingInfo**: [ChannelLoggingInfo](#channellogginginfo)
* **S3DestinationConfiguration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **StateInfo**: [ChannelStateInfo](#channelstateinfo) (ReadOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tags](#tags)
* **TopicConfigurationList**: [TopicConfiguration](#topicconfiguration)[] (Required): Topic configuration

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
* **CurrentVersion**: string (ReadOnly): The current version of the MSK cluster
* **EncryptionInfo**: [EncryptionInfo](#encryptioninfo)
* **EnhancedMonitoring**: string
* **KafkaVersion**: string (Required)
* **LoggingInfo**: [LoggingInfo](#logginginfo)
* **NumberOfBrokerNodes**: int (Required)
* **OpenMonitoring**: [OpenMonitoring](#openmonitoring)
* **Rebalancing**: [Rebalancing](#rebalancing)
* **StorageMode**: string
* **Tags**: [Cluster_Tags](#clustertags): A key-value pair to associate with a resource.
* **ZookeeperAccess**: [ZookeeperAccess](#zookeeperaccess) (WriteOnly)

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
* **CurrentVersion**: string (ReadOnly): The current version of the MSK replicator.
* **Description**: string: A summary description of the replicator.
* **KafkaClusters**: [KafkaCluster](#kafkacluster)[] (Required): Specifies a list of Kafka clusters which are targets of the replicator.
* **LogDelivery**: [LogDelivery](#logdelivery): Configuration for log delivery for the replicator.
* **ReplicationInfoList**: [ReplicationInfo](#replicationinfo)[] (Required): A list of replication configurations, where each configuration targets a given source cluster to target cluster replication flow.
* **ReplicatorArn**: string (ReadOnly, Identifier): Amazon Resource Name for the created replicator.
* **ReplicatorName**: string (Required): The name of the replicator.
* **ServiceExecutionRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role used by the replicator to access external resources.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## AWS.MSK/TopicProperties
### Properties
* **ClusterArn**: string (Required): The Amazon Resource Name (ARN) of the MSK cluster
* **Configs**: string (WriteOnly): Base64 encoded configuration properties of the topic
* **PartitionCount**: int (Required): The number of partitions for the topic
* **ReplicationFactor**: int (Required): The replication factor for the topic
* **TopicArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the topic
* **TopicName**: string (Required): The name of the topic

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

## Catalog
### Properties
* **CatalogArn**: string: The ARN of the catalog
* **WarehouseLocation**: string: The warehouse location

## ChannelLoggingInfo
### Properties
* **CloudWatchLogs**: [CloudWatchLogsLogDestination](#cloudwatchlogslogdestination)
* **Firehose**: [FirehoseLogDestination](#firehoselogdestination)
* **S3**: [S3LogDestination](#s3logdestination)

## ChannelStateInfo
### Properties
* **Code**: string: Code for channel state
* **Message**: string: Message for channel state

## ClientAuthentication
### Properties
* **Sasl**: [Sasl](#sasl)
* **Tls**: [Tls](#tls)
* **Unauthenticated**: [Unauthenticated](#unauthenticated)

## CloudWatchLogs
### Properties
* **Enabled**: bool (Required)
* **LogGroup**: string

## CloudWatchLogs
### Properties
* **Enabled**: bool (Required): Whether log delivery to CloudWatch Logs is enabled.
* **LogGroup**: string: The CloudWatch log group that is the destination for log delivery.

## CloudWatchLogsLogDestination
### Properties
* **Enabled**: bool (Required): Whether CloudWatch Logs logging is enabled
* **LogGroup**: string: The CloudWatch log group for log delivery

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
* **NetworkType**: string
* **PublicAccess**: [PublicAccess](#publicaccess)
* **VpcConnectivity**: [VpcConnectivity](#vpcconnectivity)

## ConsumerGroupReplication
### Properties
* **ConsumerGroupOffsetSyncMode**: string: The consumer group offset synchronization mode.
* **ConsumerGroupsToExclude**: string[]: List of regular expression patterns indicating the consumer groups that should not be replicated.
* **ConsumerGroupsToReplicate**: string[] (Required): List of regular expression patterns indicating the consumer groups to copy.
* **DetectAndCopyNewConsumerGroups**: bool: Whether to periodically check for new consumer groups.
* **SynchroniseConsumerGroupOffsets**: bool: Whether to periodically write the translated offsets to __consumer_offsets topic in target cluster.

## DeadLetterQueueS3
### Properties
* **BucketArn**: string (Required): The ARN of the S3 bucket
* **ErrorOutputPrefix**: string (Required): The error output prefix
* **ExpectedBucketOwner**: string: Optional 12-digit AWS account ID expected to own the dead-letter S3 bucket

## DestinationTable
### Properties
* **DestinationDatabaseName**: string (Required): The destination database name
* **DestinationTableName**: string (Required): The destination table name
* **PartitionSpec**: [PartitionSpec](#partitionspec)

## EBSStorageInfo
### Properties
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)
* **VolumeSize**: int

## EncryptionAtRest
### Properties
* **DataVolumeKMSKeyId**: string (Required)

## EncryptionConfiguration
### Properties
* **KmsKeyArn**: string (Required): The ARN of the KMS key for encryption

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

## Firehose
### Properties
* **DeliveryStream**: string: The Firehose delivery stream that is the destination for log delivery.
* **Enabled**: bool (Required): Whether log delivery to Firehose is enabled.

## FirehoseLogDestination
### Properties
* **DeliveryStream**: string: The Firehose delivery stream for log delivery
* **Enabled**: bool (Required): Whether Firehose logging is enabled

## Iam
### Properties
* **Enabled**: bool (Required)

## IcebergDestinationConfiguration
### Properties
* **AppendOnly**: bool (Required): Append only mode
* **Catalog**: [Catalog](#catalog)
* **CompressionType**: string
* **DataFreshnessInSeconds**: int: Data freshness in seconds
* **DeadLetterQueueS3**: [DeadLetterQueueS3](#deadletterqueues3) (Required)
* **DestinationTableList**: [DestinationTable](#destinationtable)[] (Required): List of destination tables
* **SchemaEvolution**: [SchemaEvolution](#schemaevolution) (Required)
* **ServiceExecutionRoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role used by MSK to access the table
* **TableCreation**: [TableCreation](#tablecreation) (Required)

## JmxExporter
### Properties
* **EnabledInBroker**: bool (Required)

## KafkaCluster
### Properties
* **AmazonMskCluster**: [AmazonMskCluster](#amazonmskcluster): Details of an Amazon MSK cluster.
* **ApacheKafkaCluster**: [ApacheKafkaCluster](#apachekafkacluster): Details of an Apache Kafka cluster.
* **ClientAuthentication**: [KafkaClusterClientAuthentication](#kafkaclusterclientauthentication): Details of the client authentication used by the Apache Kafka cluster.
* **EncryptionInTransit**: [KafkaClusterEncryptionInTransit](#kafkaclusterencryptionintransit): Details of encryption in transit to the Apache Kafka cluster.
* **VpcConfig**: [KafkaClusterClientVpcConfig](#kafkaclusterclientvpcconfig): Details of an Amazon VPC which has network connectivity to the Apache Kafka cluster.

## KafkaClusterClientAuthentication
### Properties
* **MTLS**: [KafkaClusterMtlsAuthentication](#kafkaclustermtlsauthentication): Details for mTLS client authentication.
* **SaslOAuthBearer**: [KafkaClusterSaslOAuthBearerAuthentication](#kafkaclustersasloauthbearerauthentication): Details for client authentication using SASL/OAUTHBEARER.
* **SaslScram**: [KafkaClusterSaslScramAuthentication](#kafkaclustersaslscramauthentication): Details for SASL/SCRAM client authentication.

## KafkaClusterClientVpcConfig
### Properties
* **SecurityGroupIds**: string[]: The AWS security groups to associate with the elastic network interfaces in order to specify what the replicator has access to. If a security group is not specified, the default security group associated with the VPC is used.
* **SubnetIds**: string[] (Required): The list of subnets to connect to in the virtual private cloud (VPC). AWS creates elastic network interfaces inside these subnets.

## KafkaClusterEncryptionInTransit
### Properties
* **EncryptionType**: string (Required): The type of encryption in transit to the Apache Kafka cluster.
* **RootCaCertificate**: string: The root CA certificate.

## KafkaClusterMtlsAuthentication
### Properties
* **SecretArn**: string (Required): The Amazon Resource Name (ARN) of the Secrets Manager secret.

## KafkaClusterOAuthClientCredentials
### Properties
* **TokenRequestSecretArn**: string (Required): Secrets Manager ARN of the secret containing the client_id and client_secret used to obtain an OAuth Bearer token via the client_credentials grant.

## KafkaClusterOAuthClientCredentialsAssertion
### Properties
* **Audience**: string (Required): The audience (aud claim) set in the STS JWT client assertion.
* **SigningAlgorithm**: string (Required): The algorithm used to sign the JWT client assertion.
* **TokenRequestSecretArn**: string: Optional Secrets Manager ARN for identity providers that require client_id as a form parameter alongside the JWT client assertion.

## KafkaClusterOAuthIamJwtBearer
### Properties
* **Audience**: string (Required): The audience (aud claim) set in the STS JWT assertion.
* **SigningAlgorithm**: string (Required): The algorithm used to sign the JWT assertion.
* **TokenRequestSecretArn**: string: Optional Secrets Manager ARN for identity providers that require client authentication alongside the JWT Bearer assertion.

## KafkaClusterSaslOAuthBearerAuthentication
### Properties
* **ClientCredentials**: [KafkaClusterOAuthClientCredentials](#kafkaclusteroauthclientcredentials): Details for SASL/OAUTHBEARER using standard client_credentials grant. Mutually exclusive with iamJwtBearer and clientCredentialsAssertion.
* **ClientCredentialsAssertion**: [KafkaClusterOAuthClientCredentialsAssertion](#kafkaclusteroauthclientcredentialsassertion): Details for SASL/OAUTHBEARER using client credentials grant with JWT client assertion (RFC 7521/7523). Mutually exclusive with clientCredentials and iamJwtBearer.
* **IamJwtBearer**: [KafkaClusterOAuthIamJwtBearer](#kafkaclusteroauthiamjwtbearer): Details for SASL/OAUTHBEARER using JWT Bearer assertion grant (RFC 7523). Mutually exclusive with clientCredentials and clientCredentialsAssertion.
* **Scope**: string: OAuth scope to request. Included in the token request if provided.
* **TokenEndpointAuthenticationMethod**: string (Required): How client credentials are sent to the identity provider (POST, BASIC, or NONE).
* **TokenEndpointTlsCertificateArn**: string: Secrets Manager ARN containing a custom CA certificate for the identity provider. Required only if the identity provider uses a private CA.
* **TokenEndpointUrl**: string (Required): The HTTPS URL of the OAuth token endpoint that vends OAuth Bearer tokens per RFC 6749.

## KafkaClusterSaslScramAuthentication
### Properties
* **Mechanism**: string (Required): The SASL/SCRAM authentication mechanism.
* **SecretArn**: string (Required): The Amazon Resource Name (ARN) of the Secrets Manager secret.

## LatestRevision
### Properties
* **CreationTime**: string (ReadOnly)
* **Description**: string (ReadOnly)
* **Revision**: int (ReadOnly)

## LogDelivery
### Properties
* **ReplicatorLogDelivery**: [ReplicatorLogDelivery](#replicatorlogdelivery): The replicator logs configuration.

## LoggingInfo
### Properties
* **BrokerLogs**: [BrokerLogs](#brokerlogs) (Required)

## NodeExporter
### Properties
* **EnabledInBroker**: bool (Required)

## OpenMonitoring
### Properties
* **Prometheus**: [Prometheus](#prometheus) (Required)

## PartitionSource
### Properties
* **SourceName**: string: Source name

## PartitionSpec
### Properties
* **PartitionStrategy**: string (Required)
* **SourceList**: [PartitionSource](#partitionsource)[]: Source list

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

## Rebalancing
### Properties
* **Status**: string (Required)

## RecordConverter
### Properties
* **ValueConverter**: string (Required)

## RecordSchema
### Properties
* **GsrArn**: string (Required): ARN of Glue Schema Registry resource used for table schema

## ReplicationInfo
### Properties
* **ConsumerGroupReplication**: [ConsumerGroupReplication](#consumergroupreplication) (Required): Configuration relating to consumer group replication.
* **SourceKafkaClusterArn**: string: Amazon Resource Name of the source Kafka cluster.
* **SourceKafkaClusterId**: string: The ID of the source Kafka cluster.
* **TargetCompressionType**: string (Required): The type of compression to use writing records to target Kafka cluster.
* **TargetKafkaClusterArn**: string: Amazon Resource Name of the target Kafka cluster.
* **TargetKafkaClusterId**: string: The ID of the target Kafka cluster.
* **TopicReplication**: [TopicReplication](#topicreplication) (Required): Configuration relating to topic replication.

## ReplicationStartingPosition
### Properties
* **Type**: string

## ReplicationTopicNameConfiguration
### Properties
* **Type**: string

## ReplicatorLogDelivery
### Properties
* **CloudWatchLogs**: [CloudWatchLogs](#cloudwatchlogs): Details of the CloudWatch Logs destination for replicator logs.
* **Firehose**: [Firehose](#firehose): Details of the Kinesis Data Firehose delivery stream that is the destination for replicator logs.
* **S3**: [S3](#s3): Details of the Amazon S3 destination for replicator logs.

## S3
### Properties
* **Bucket**: string
* **Enabled**: bool (Required)
* **Prefix**: string

## S3
### Properties
* **Bucket**: string: The S3 bucket that is the destination for log delivery.
* **Enabled**: bool (Required): Whether log delivery to S3 is enabled.
* **Prefix**: string: The S3 prefix that is the destination for log delivery.

## S3DestinationConfiguration
### Properties
* **DataFreshnessInSeconds**: int: Data freshness in seconds
* **DeadLetterQueueS3**: [DeadLetterQueueS3](#deadletterqueues3) (Required)
* **ServiceExecutionRoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role used by MSK to access S3
* **Storage**: [S3Storage](#s3storage) (Required)

## S3LogDestination
### Properties
* **Bucket**: string: The name of the S3 bucket for log delivery
* **Enabled**: bool (Required): Whether S3 logging is enabled
* **Prefix**: string: The S3 prefix for log delivery

## S3Storage
### Properties
* **BucketArn**: string (Required): ARN of the S3 bucket
* **CompressionType**: string (Required)
* **ExpectedBucketOwner**: string: Optional 12-digit AWS account ID expected to own the S3 bucket
* **OutputKeyTemplate**: string: Template for S3 key for output objects, used for partitioning
* **OutputPrefix**: string: Optional prefix for output objects
* **StorageClass**: string (Required)

## Sasl
### Properties
* **Iam**: [Iam](#iam)
* **Scram**: [Scram](#scram)

## SchemaEvolution
### Properties
* **EnableSchemaEvolution**: bool (Required): Whether schema evolution is enabled

## Scram
### Properties
* **Enabled**: bool (Required)

## StorageInfo
### Properties
* **EBSStorageInfo**: [EBSStorageInfo](#ebsstorageinfo)

## TableCreation
### Properties
* **EnableTableCreation**: bool (Required): Whether table creation is enabled

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tags
### Properties

## Tags
### Properties

## Tls
### Properties
* **CertificateAuthorityArnList**: string[]
* **Enabled**: bool

## TopicConfiguration
### Properties
* **RecordConverter**: [RecordConverter](#recordconverter) (Required)
* **RecordSchema**: [RecordSchema](#recordschema)
* **TopicArn**: string (Required): The Amazon Resource Name (ARN) that uniquely identifies the topic

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

## ZookeeperAccess
### Properties
* **Enabled**: bool

