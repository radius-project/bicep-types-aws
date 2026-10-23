# AWS.ElastiCache @ default

## Resource AWS.ElastiCache/CacheCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/CacheClusterProperties](#awselasticachecacheclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/GlobalReplicationGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/GlobalReplicationGroupProperties](#awselasticacheglobalreplicationgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/ParameterGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/ParameterGroupProperties](#awselasticacheparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/ReplicationGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/ReplicationGroupProperties](#awselasticachereplicationgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/ServerlessCache@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/ServerlessCacheProperties](#awselasticacheserverlesscacheproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/ServerlessCacheSnapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/ServerlessCacheSnapshotProperties](#awselasticacheserverlesscachesnapshotproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/Snapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/SnapshotProperties](#awselasticachesnapshotproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/SubnetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/SubnetGroupProperties](#awselasticachesubnetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/User@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/UserProperties](#awselasticacheuserproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElastiCache/UserGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElastiCache/UserGroupProperties](#awselasticacheusergroupproperties) (Required, Identifier): properties of the resource

## AWS.ElastiCache/CacheClusterProperties
### Properties
* **AutoMinorVersionUpgrade**: bool: If you are running Redis engine version 6.0 or later, set this parameter to yes if you want to opt-in to the next minor version upgrade campaign.
* **AZMode**: string: Specifies whether the nodes in this Memcached cluster are created in a single Availability Zone or created across multiple Availability Zones in the cluster's region.
* **CacheNodeType**: string (Required): The compute and memory capacity of the nodes in the node group (shard).
* **CacheParameterGroupName**: string: The name of the parameter group to associate with this cluster.
* **CacheSecurityGroupNames**: string[] (WriteOnly): A list of security group names to associate with this cluster.
* **CacheSubnetGroupName**: string: The name of the subnet group to be used for the cluster.
* **ClusterName**: string (Identifier): A name for the cache cluster.
* **ConfigurationEndpoint**: [Endpoint](#endpoint) (ReadOnly): Specifies the ConfigurationEndpoint address and port
* **Engine**: string (Required): The name of the cache engine to be used for this cluster.
* **EngineVersion**: string: The version number of the cache engine to be used for this cluster
* **IpDiscovery**: string: The Ip Discovery parameter for cachecluster.
* **LogDeliveryConfigurations**: [LogDeliveryConfigurationRequest](#logdeliveryconfigurationrequest)[]: Specifies the destination, format and type of the logs
* **NetworkType**: string: The network type parameter for cachecluster.
* **NotificationTopicArn**: string: The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
* **NumCacheNodes**: int (Required): The number of cache nodes that the cache cluster should have.
* **Port**: int: The port number on which each of the cache nodes accepts connections.
* **PreferredAvailabilityZone**: string (WriteOnly): The EC2 Availability Zone in which the cluster is created.
* **PreferredAvailabilityZones**: string[]: A list of the Availability Zones in which cache nodes are created. The order of the zones in the list is not important.
* **PreferredMaintenanceWindow**: string: Specifies the weekly time range during which maintenance on the cluster is performed.
* **RedisEndpoint**: [Endpoint](#endpoint) (ReadOnly): Specifies the RedisEndPoint address and port
* **SnapshotArns**: string[] (WriteOnly): A single-element string list containing an Amazon Resource Name (ARN) that uniquely identifies a Redis RDB snapshot file stored in Amazon S3.
* **SnapshotName**: string (WriteOnly): The name of a Redis snapshot from which to restore data into the new node group (shard).
* **SnapshotRetentionLimit**: int: The number of days for which ElastiCache retains automatic snapshots before deleting them.
* **SnapshotWindow**: string: The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
* **Tags**: [Tag](#tag)[]: A list of tags to be added to this resource.
* **TransitEncryptionEnabled**: bool: A flag that enables in-transit encryption when set to true. You cannot modify the value of TransitEncryptionEnabled after the cluster is created
* **VpcSecurityGroupIds**: string[]: One or more VPC security groups associated with the cluster.

## AWS.ElastiCache/GlobalReplicationGroupProperties
### Properties
* **Arn**: string (ReadOnly): The ARN (Amazon Resource Name) of the Global Datastore.
* **AutomaticFailoverEnabled**: bool (WriteOnly): AutomaticFailoverEnabled
* **CacheNodeType**: string (WriteOnly): The cache node type of the Global Datastore
* **CacheParameterGroupName**: string (WriteOnly): Cache parameter group name to use for the new engine version. This parameter cannot be modified independently.
* **Engine**: string: The engine of the Global Datastore.
* **EngineVersion**: string (WriteOnly): The engine version of the Global Datastore.
* **GlobalNodeGroupCount**: int (WriteOnly): Indicates the number of node groups in the Global Datastore.
* **GlobalReplicationGroupDescription**: string: The optional description of the Global Datastore
* **GlobalReplicationGroupId**: string (ReadOnly, Identifier): The name of the Global Datastore, it is generated by ElastiCache adding a prefix to GlobalReplicationGroupIdSuffix.
* **GlobalReplicationGroupIdSuffix**: string (WriteOnly): The suffix name of a Global Datastore. Amazon ElastiCache automatically applies a prefix to the Global Datastore ID when it is created. Each AWS Region has its own prefix. 
* **Members**: [GlobalReplicationGroupMember](#globalreplicationgroupmember)[] (Required): The replication groups that comprise the Global Datastore.
* **RegionalConfigurations**: [RegionalConfiguration](#regionalconfiguration)[] (WriteOnly): Describes the replication group IDs, the AWS regions where they are stored and the shard configuration for each that comprise the Global Datastore 
* **Status**: string (ReadOnly): The status of the Global Datastore
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this Global Datastore.

## AWS.ElastiCache/ParameterGroupProperties
### Properties
* **CacheParameterGroupFamily**: string (Required): The name of the cache parameter group family that this cache parameter group is compatible with.
* **CacheParameterGroupName**: string (ReadOnly, Identifier): The name of the Cache Parameter Group.
* **Description**: string (Required): The description for this cache parameter group.
* **Properties**: [ParameterGroup_Properties](#parametergroupproperties): A comma-delimited list of parameter name/value pairs. For more information see ModifyCacheParameterGroup in the Amazon ElastiCache API Reference Guide.
* **Tags**: [Tag](#tag)[]: Tags are composed of a Key/Value pair. You can use tags to categorize and track each parameter group. The tag value null is permitted.

## AWS.ElastiCache/ReplicationGroupProperties
### Properties
* **AtRestEncryptionEnabled**: bool: A flag that enables encryption at rest when set to true.AtRestEncryptionEnabled after the replication group is created. To enable encryption at rest on a replication group you must set AtRestEncryptionEnabled to true when you create the replication group.
* **AuthToken**: string (WriteOnly): Reserved parameter. The password used to access a password protected server.AuthToken can be specified only on replication groups where TransitEncryptionEnabled is true. For more information.
* **AutomaticFailoverEnabled**: bool: Specifies whether a read-only replica is automatically promoted to read/write primary if the existing primary fails. AutomaticFailoverEnabled must be enabled for Redis (cluster mode enabled) replication groups.
* **AutoMinorVersionUpgrade**: bool: This parameter is currently disabled.
* **CacheNodeType**: string: The compute and memory capacity of the nodes in the node group (shard).
* **CacheParameterGroupName**: string (WriteOnly): The name of the parameter group to associate with this replication group. If this argument is omitted, the default cache parameter group for the specified engine is used.
* **CacheSecurityGroupNames**: string[] (WriteOnly): A list of cache security group names to associate with this replication group.
* **CacheSubnetGroupName**: string (WriteOnly): The name of the cache subnet group to be used for the replication group.
* **ClusterMode**: string: Enabled or Disabled. To modify cluster mode from Disabled to Enabled, you must first set the cluster mode to Compatible. Compatible mode allows your Redis OSS clients to connect using both cluster mode enabled and cluster mode disabled. After you migrate all Redis OSS clients to use cluster mode enabled, you can then complete cluster mode configuration and set the cluster mode to Enabled. For more information, see Modify cluster mode.
* **ConfigurationEndPoint**: [Endpoint](#endpoint) (ReadOnly): The configuration details of the replication group.
* **DataTieringEnabled**: bool: Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type. This parameter must be set to true when using r6gd nodes.
* **Durability**: string: The durability setting for the replication group. Valid values: default, async, sync, disabled. Enabling durability on an existing non-durable cluster or disabling durability on an existing durable cluster is not currently supported and will result in an error; specify the desired durability at create time. The resolved state is returned in EffectiveDurability.
* **EffectiveDurability**: string (ReadOnly): The resolved durability state of the replication group after resolving the default value. This is a read-only property.
* **Engine**: string: The name of the cache engine to be used for the clusters in this replication group.
* **EngineVersion**: string (WriteOnly): The version number of the cache engine to be used for the clusters in this replication group. To view the supported cache engine versions, use the DescribeCacheEngineVersions operation.
* **GlobalReplicationGroupId**: string: The name of the Global datastore
* **IpDiscovery**: string: The network type you choose when creating a replication group, either ipv4 | ipv6. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system.
* **KmsKeyId**: string (WriteOnly): The ID of the KMS key used to encrypt the disk on the cluster.
* **LogDeliveryConfigurations**: [LogDeliveryConfigurationRequest](#logdeliveryconfigurationrequest)[]: Specifies the destination, format and type of the logs.
* **MultiAZEnabled**: bool: A flag indicating if you have Multi-AZ enabled to enhance fault tolerance. For more information, see Minimizing Downtime: Multi-AZ.
* **NetworkType**: string: Must be either ipv4 | ipv6 | dual_stack. IPv6 is supported for workloads using Redis OSS engine version 6.2 onward or Memcached engine version 1.6.6 on all instances built on the Nitro system
* **NodeGroupConfiguration**: [NodeGroupConfiguration](#nodegroupconfiguration)[] (WriteOnly): NodeGroupConfiguration is a property of the AWS::ElastiCache::ReplicationGroup resource that configures an Amazon ElastiCache (ElastiCache) Redis cluster node group.
* **NotificationTopicArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
* **NumCacheClusters**: int: The number of clusters this replication group initially has.This parameter is not used if there is more than one node group (shard). You should use ReplicasPerNodeGroup instead.
* **NumNodeGroups**: int (WriteOnly): An optional parameter that specifies the number of node groups (shards) for this Redis (cluster mode enabled) replication group. For Redis (cluster mode disabled) either omit this parameter or set it to 1.
* **Port**: int: The port number on which each member of the replication group accepts connections.
* **PreferredCacheClusterAZs**: string[] (WriteOnly): A list of EC2 Availability Zones in which the replication group's clusters are created. The order of the Availability Zones in the list is the order in which clusters are allocated. The primary cluster is created in the first AZ in the list. This parameter is not used if there is more than one node group (shard). You should use NodeGroupConfiguration instead.
* **PreferredMaintenanceWindow**: string (WriteOnly): Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
* **PrimaryClusterId**: string (WriteOnly): The identifier of the cluster that serves as the primary for this replication group. This cluster must already exist and have a status of available.
* **PrimaryEndPoint**: [Endpoint](#endpoint) (ReadOnly): The primary endpoint configuration
* **ReadEndPoint**: [ReplicationGroup_ReadEndPoint](#replicationgroupreadendpoint) (ReadOnly)
* **ReaderEndPoint**: [Endpoint](#endpoint) (ReadOnly): The endpoint of the reader node in the replication group.
* **ReplicasPerNodeGroup**: int: An optional parameter that specifies the number of replica nodes in each node group (shard). Valid values are 0 to 5.

**Note:** Using ReplicasPerNodeGroup with NodeGroupConfiguration results in resource replacement. For online scaling, use ReplicasPerNodeGroup alone.
* **ReplicationGroupDescription**: string (Required): A user-created description for the replication group.
* **ReplicationGroupId**: string (Identifier): The replication group identifier. This parameter is stored as a lowercase string.
* **SecurityGroupIds**: string[] (WriteOnly): One or more Amazon VPC security groups associated with this replication group.
* **SnapshotArns**: string[] (WriteOnly): A list of Amazon Resource Names (ARN) that uniquely identify the Redis RDB snapshot files stored in Amazon S3.
* **SnapshotName**: string (WriteOnly): The name of a snapshot from which to restore data into the new replication group. The snapshot status changes to restoring while the new replication group is being created.
* **SnapshotRetentionLimit**: int: The number of days for which ElastiCache retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
* **SnapshottingClusterId**: string: The cluster ID that is used as the daily snapshot source for the replication group. This parameter cannot be set for Redis (cluster mode enabled) replication groups.
* **SnapshotWindow**: string: The daily time range (in UTC) during which ElastiCache begins taking a daily snapshot of your node group (shard).
* **Tags**: [Tag](#tag)[]: A list of cost allocation tags to be added to this resource. Tags are comma-separated key,value pairs (e.g. Key=myKey, Value=myKeyValue. You can include multiple tags as shown following: Key=myKey, Value=myKeyValue Key=mySecondKey, Value=mySecondKeyValue.
* **TransitEncryptionEnabled**: bool: A flag that enables in-transit encryption when set to true.
* **TransitEncryptionMode**: string: A setting that allows you to migrate your clients to use in-transit encryption, with no downtime. When setting TransitEncryptionEnabled to true, you can set your TransitEncryptionMode to preferred in the same request, to allow both encrypted and unencrypted connections at the same time. Once you migrate all your Redis OSS clients to use encrypted connections you can modify the value to required to allow encrypted connections only. Setting TransitEncryptionMode to required is a two-step process that requires you to first set the TransitEncryptionMode to preferred, after that you can set TransitEncryptionMode to required. This process will not trigger the replacement of the replication group.
* **UserGroupIds**: string[]: The ID of user group to associate with the replication group.

## AWS.ElastiCache/ServerlessCacheProperties
### Properties
* **ARN**: string (ReadOnly): The ARN of the Serverless Cache.
* **CacheUsageLimits**: [CacheUsageLimits](#cacheusagelimits)
* **ConnectionType**: string
* **CreateTime**: string (ReadOnly): The creation time of the Serverless Cache.
* **DailySnapshotTime**: string: The daily time range (in UTC) during which the service takes automatic snapshot of the Serverless Cache.
* **Description**: string: The description of the Serverless Cache.
* **Endpoint**: [Endpoint](#endpoint)
* **Engine**: string (Required): The engine name of the Serverless Cache.
* **FinalSnapshotName**: string (WriteOnly): The final snapshot name which is taken before Serverless Cache is deleted.
* **FullEngineVersion**: string (ReadOnly): The full engine version of the Serverless Cache.
* **KmsKeyId**: string: The ID of the KMS key used to encrypt the cluster.
* **MajorEngineVersion**: string: The major engine version of the Serverless Cache.
* **NetworkType**: string
* **ReaderEndpoint**: [Endpoint](#endpoint)
* **SecurityGroupIds**: string[]: One or more Amazon VPC security groups associated with this Serverless Cache.
* **ServerlessCacheName**: string (Required, Identifier): The name of the Serverless Cache. This value must be unique.
* **SnapshotArnsToRestore**: string[] (WriteOnly): The ARN's of snapshot to restore Serverless Cache.
* **SnapshotRetentionLimit**: int: The snapshot retention limit of the Serverless Cache.
* **Status**: string (ReadOnly): The status of the Serverless Cache.
* **SubnetIds**: string[]: The subnet id's of the Serverless Cache.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this Serverless Cache.
* **UserGroupId**: string: The ID of the user group.

## AWS.ElastiCache/ServerlessCacheSnapshotProperties
### Properties
* **ARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the serverless cache snapshot.
* **BytesUsedForCache**: string (ReadOnly): The total size of the serverless cache snapshot, in bytes.
* **CreateTime**: string (ReadOnly): The date and time that the source serverless cache's metadata and cache data set was obtained for the snapshot.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the AWS KMS key used to encrypt the snapshot. Provide the key ARN: the resource returns the key ARN on read, so supplying a bare key ID or alias for this createOnly property may be reported as drift by CloudFormation.
* **ServerlessCacheConfiguration**: [ServerlessCacheConfiguration](#serverlesscacheconfiguration) (ReadOnly): The configuration of the serverless cache, at the time the snapshot was taken.
* **ServerlessCacheName**: string (Required): The name of an existing serverless cache. The snapshot is created from this cache.
* **ServerlessCacheSnapshotName**: string (Required): The name of the serverless cache snapshot. Must be unique for the customer account. This value is stored as a lowercase string.
* **SnapshotType**: string (ReadOnly): The type of snapshot of the serverless cache.
* **Status**: string (ReadOnly): The current status of the serverless cache snapshot.
* **Tags**: [Tag](#tag)[]: A list of tags to be added to the serverless cache snapshot resource.

## AWS.ElastiCache/SnapshotProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN (Amazon Resource Name) of the snapshot.
* **AutomaticFailover**: string (ReadOnly): Indicates the status of automatic failover for the source replication group.
* **AutoMinorVersionUpgrade**: bool (ReadOnly): If true, opt-in to the next auto minor version upgrade campaign.
* **CacheClusterCreateTime**: string (ReadOnly): The date and time when the source cluster was created.
* **CacheClusterId**: string: The identifier of an existing cluster to create a snapshot from. The snapshot is created from this cluster.
* **CacheNodeType**: string (ReadOnly): The name of the compute and memory capacity node type for the source cluster.
* **CacheParameterGroupName**: string (ReadOnly): The cache parameter group that is associated with the source cluster.
* **CacheSubnetGroupName**: string (ReadOnly): The name of the cache subnet group associated with the source cluster.
* **DataTiering**: string (ReadOnly): Enables data tiering. Data tiering is only supported for replication groups using the r6gd node type.
* **Engine**: string (ReadOnly): The name of the cache engine used by the source cluster.
* **EngineVersion**: string (ReadOnly): The version of the cache engine version used by the source cluster.
* **KmsKeyId**: string: The ID of the KMS key used to encrypt the snapshot.
* **NodeSnapshots**: [NodeSnapshot](#nodesnapshot)[] (ReadOnly): A list of the cache nodes in the source cluster.
* **NumCacheNodes**: int (ReadOnly): The number of cache nodes in the source cluster.
* **NumNodeGroups**: int (ReadOnly): The number of node groups (shards) in this snapshot.
* **Port**: int (ReadOnly): The port number used by each cache nodes in the source cluster.
* **PreferredAvailabilityZone**: string (ReadOnly): The name of the Availability Zone in which the source cluster is located.
* **PreferredMaintenanceWindow**: string (ReadOnly): Specifies the weekly time range during which maintenance on the cluster is performed.
* **ReplicationGroupDescription**: string (ReadOnly): A description of the source replication group.
* **ReplicationGroupId**: string: The identifier of an existing replication group to create a snapshot from. The snapshot is created from this replication group.
* **SnapshotName**: string (Required): The name of a snapshot. Must be unique within the customer account.
* **SnapshotRetentionLimit**: int (ReadOnly): For an automatic snapshot, the number of days for which ElastiCache retains the snapshot before deleting it.
* **SnapshotSource**: string (ReadOnly): Indicates whether the snapshot is from an automatic backup (automated) or was created manually (manual).
* **SnapshotStatus**: string (ReadOnly): The status of the snapshot. Valid values: creating | available | restoring | copying | deleting | failed | deleted.
* **SnapshotWindow**: string (ReadOnly): The daily time range during which ElastiCache takes daily snapshots of the source cluster.
* **Tags**: [Tag](#tag)[]: A list of tags to be added to this resource.
* **TopicArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the topic used by the source cluster for publishing notifications.
* **VpcId**: string (ReadOnly): The Amazon Virtual Private Cloud identifier (VPC ID) of the cache subnet group for the source cluster.

## AWS.ElastiCache/SubnetGroupProperties
### Properties
* **CacheSubnetGroupName**: string (Identifier): The name for the cache subnet group. This value is stored as a lowercase string.
* **Description**: string (Required): The description for the cache subnet group.
* **SubnetIds**: string[] (Required): The EC2 subnet IDs for the cache subnet group.
* **Tags**: [Tag](#tag)[]

## AWS.ElastiCache/UserGroupProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the user account.
* **Engine**: string (Required): The target cache engine for the user group.
* **Status**: string (ReadOnly): Indicates user group status. Can be "creating", "active", "modifying", "deleting".
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this user.
* **UserGroupId**: string (Required, Identifier): The ID of the user group.
* **UserIds**: string[] (Required): List of users associated to this user group.

## AWS.ElastiCache/UserProperties
### Properties
* **AccessString**: string (WriteOnly): Access permissions string used for this user account.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the user account.
* **AuthenticationMode**: [User_AuthenticationMode](#userauthenticationmode) (WriteOnly)
* **Engine**: string (Required): The target cache engine for the user.
* **NoPasswordRequired**: bool (WriteOnly): Indicates a password is not required for this user account.
* **Passwords**: string[] (WriteOnly): Passwords used for this user account. You can create up to two passwords for each user.
* **Status**: string (ReadOnly): Indicates the user status. Can be "active", "modifying" or "deleting".
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this user.
* **UserId**: string (Required, Identifier): The ID of the user.
* **UserName**: string (Required): The username of the user.

## CacheUsageLimits
### Properties
* **DataStorage**: [DataStorage](#datastorage)
* **ECPUPerSecond**: [ECPUPerSecond](#ecpupersecond)

## CloudWatchLogsDestinationDetails
### Properties
* **LogGroup**: string (Required): The name of the CloudWatch Logs log group.

## CloudWatchLogsDestinationDetails
### Properties
* **LogGroup**: string (Required): The name of the CloudWatch Logs log group.

## DataStorage
### Properties
* **Maximum**: int: The maximum cached data capacity of the Serverless Cache.
* **Minimum**: int: The minimum cached data capacity of the Serverless Cache.
* **Unit**: string (Required): The unit of cached data capacity of the Serverless Cache.

## DestinationDetails
### Properties
* **CloudWatchLogsDetails**: [CloudWatchLogsDestinationDetails](#cloudwatchlogsdestinationdetails): The configuration details of the CloudWatch Logs destination
* **KinesisFirehoseDetails**: [KinesisFirehoseDestinationDetails](#kinesisfirehosedestinationdetails): The configuration details of the Kinesis Data Firehose destination.

## DestinationDetails
### Properties
* **CloudWatchLogsDetails**: [CloudWatchLogsDestinationDetails](#cloudwatchlogsdestinationdetails)
* **KinesisFirehoseDetails**: [KinesisFirehoseDestinationDetails](#kinesisfirehosedestinationdetails)

## ECPUPerSecond
### Properties
* **Maximum**: int: The maximum ECPU per second of the Serverless Cache.
* **Minimum**: int: The minimum ECPU per second of the Serverless Cache.

## Endpoint
### Properties
* **Address**: string (ReadOnly)
* **Port**: string (ReadOnly)

## Endpoint
### Properties
* **Address**: string (ReadOnly): The DNS hostname of the cache node.
* **Port**: string (ReadOnly): The port number that the cache engine is listening on.

## Endpoint
### Properties
* **Address**: string (ReadOnly): Endpoint address.
* **Port**: string (ReadOnly): Endpoint port.

## GlobalReplicationGroupMember
### Properties
* **ReplicationGroupId**: string: Regionally unique identifier for the member i.e. ReplicationGroupId.
* **ReplicationGroupRegion**: string: The AWS region of the Global Datastore member.
* **Role**: string: Indicates the role of the member, primary or secondary.

## KinesisFirehoseDestinationDetails
### Properties
* **DeliveryStream**: string (Required): The name of the Kinesis Data Firehose delivery stream

## KinesisFirehoseDestinationDetails
### Properties
* **DeliveryStream**: string (Required): The name of the Kinesis Data Firehose delivery stream.

## LogDeliveryConfigurationRequest
### Properties
* **DestinationDetails**: [DestinationDetails](#destinationdetails) (Required): Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
* **DestinationType**: string (Required): Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. 
* **LogFormat**: string (Required): Valid values are either json or text
* **LogType**: string (Required): Valid value is either slow-log, which refers to slow-log or engine-log

## LogDeliveryConfigurationRequest
### Properties
* **DestinationDetails**: [DestinationDetails](#destinationdetails) (Required)
* **DestinationType**: string (Required): Specify either CloudWatch Logs or Kinesis Data Firehose as the destination type. Valid values are either cloudwatch-logs or kinesis-firehose.
* **LogFormat**: string (Required): Valid values are either json or text.
* **LogType**: string (Required): Valid value is either slow-log, which refers to slow-log or engine-log.

## NodeGroupConfiguration
### Properties
* **NodeGroupId**: string: Either the ElastiCache for Redis supplied 4-digit id or a user supplied id for the node group these configuration values apply to.
* **PrimaryAvailabilityZone**: string: The Availability Zone where the primary node of this node group (shard) is launched.
* **ReplicaAvailabilityZones**: string[]: A list of Availability Zones to be used for the read replicas. The number of Availability Zones in this list must match the value of ReplicaCount or ReplicasPerNodeGroup if not specified.
* **ReplicaCount**: int: The number of read replica nodes in this node group (shard).
* **Slots**: string: A string of comma-separated values where the first set of values are the slot numbers (zero based), and the second set of values are the keyspaces for each slot. The following example specifies three slots (numbered 0, 1, and 2): 0,1,2,0-4999,5000-9999,10000-16,383.

## NodeSnapshot
### Properties
* **CacheClusterId**: string: A unique identifier for the source cluster.
* **CacheNodeCreateTime**: string: The date and time when the cache node was created in the source cluster.
* **CacheNodeId**: string: The cache node identifier for the node in the source cluster.
* **CacheSize**: string: The size of the cache on the source cache node.
* **NodeGroupId**: string: A unique identifier for the source node group (shard).
* **SnapshotCreateTime**: string: The date and time when the source node's metadata and cache data set was obtained for the snapshot.

## ParameterGroup_Properties
### Properties

## RegionalConfiguration
### Properties
* **ReplicationGroupId**: string: The replication group id of the Global Datastore member.
* **ReplicationGroupRegion**: string: The AWS region of the Global Datastore member.
* **ReshardingConfigurations**: [ReshardingConfiguration](#reshardingconfiguration)[]: A list of PreferredAvailabilityZones objects that specifies the configuration of a node group in the resharded cluster. 

## ReplicationGroup_ReadEndPoint
### Properties
* **Addresses**: string (ReadOnly): A string containing a comma-separated list of endpoints for the primary and read-only replicas, formatted as [address1, address2, ...]. The order of the addresses maps to the order of the ports from the ReadEndPoint.Ports attribute.
* **AddressesList**: string[] (ReadOnly): A list of endpoints for the read-only replicas. The order of the addresses maps to the order of the ports from the ReadEndPoint.Ports attribute.
* **Ports**: string (ReadOnly): A string containing a comma-separated list of ports for the read-only replicas, formatted as [port1, port2, ...]. The order of the ports maps to the order of the addresses from the ReadEndPoint.Addresses attribute.
* **PortsList**: string[] (ReadOnly): A list of ports for the read-only replicas. The order of the ports maps to the order of the addresses from the ReadEndPoint.Addresses attribute.

## ReshardingConfiguration
### Properties
* **NodeGroupId**: string: Unique identifier for the Node Group. This is either auto-generated by ElastiCache (4-digit id) or a user supplied id.
* **PreferredAvailabilityZones**: string[]: A list of preferred availability zones for the nodes of new node groups.

## ServerlessCacheConfiguration
### Properties
* **Engine**: string: The engine that the serverless cache is configured with.
* **MajorEngineVersion**: string: The engine version number that the serverless cache is configured with.
* **ServerlessCacheName**: string: The identifier of the serverless cache.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key for the tag. May not be null.
* **Value**: string: The tag's value. May be null.

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
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key for the tag. May not be null.
* **Value**: string (Required): The tag's value. May be null.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with 'aws:'. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## User_AuthenticationMode
### Properties
* **Passwords**: string[]: Passwords used for this user account. You can create up to two passwords for each user.
* **Type**: string (Required): Authentication Type

