# AWS.MemoryDB @ default

## Resource AWS.MemoryDB/ACL@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MemoryDB/ACLProperties](#awsmemorydbaclproperties): properties of the resource

## Resource AWS.MemoryDB/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MemoryDB/ClusterProperties](#awsmemorydbclusterproperties): properties of the resource

## Resource AWS.MemoryDB/ParameterGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MemoryDB/ParameterGroupProperties](#awsmemorydbparametergroupproperties): properties of the resource

## Resource AWS.MemoryDB/SubnetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MemoryDB/SubnetGroupProperties](#awsmemorydbsubnetgroupproperties): properties of the resource

## Resource AWS.MemoryDB/User@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MemoryDB/UserProperties](#awsmemorydbuserproperties): properties of the resource

## AWS.MemoryDB/ACLProperties
### Properties
* **ACLName**: string: The name of the acl.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the acl.
* **Status**: string (ReadOnly): Indicates acl status. Can be "creating", "active", "modifying", "deleting".
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this cluster.
* **UserNames**: string[]: List of users associated to this acl.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws: or memorydb:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws: or memorydb:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.MemoryDB/ClusterProperties
### Properties
* **ACLName**: string: The name of the Access Control List to associate with the cluster.
* **ARN**: string (ReadOnly): The Amazon Resource Name (ARN) of the cluster.
* **AutoMinorVersionUpgrade**: bool: A flag that enables automatic minor version upgrade when set to true.

You cannot modify the value of AutoMinorVersionUpgrade after the cluster is created. To enable AutoMinorVersionUpgrade on a cluster you must set AutoMinorVersionUpgrade to true when you create a cluster.
* **ClusterEndpoint**: [Endpoint](#endpoint): The cluster endpoint.
* **ClusterName**: string: The name of the cluster. This value must be unique as it also serves as the cluster identifier.
* **Description**: string: An optional description of the cluster.
* **EngineVersion**: string: The Redis engine version used by the cluster.
* **FinalSnapshotName**: string: The user-supplied name of a final cluster snapshot. This is the unique name that identifies the snapshot. MemoryDB creates the snapshot, and then deletes the cluster immediately afterward.
* **KmsKeyId**: string: The ID of the KMS key used to encrypt the cluster.
* **MaintenanceWindow**: string: Specifies the weekly time range during which maintenance on the cluster is performed. It is specified as a range in the format ddd:hh24:mi-ddd:hh24:mi (24H Clock UTC). The minimum maintenance window is a 60 minute period.
* **NodeType**: string: The compute and memory capacity of the nodes in the cluster.
* **NumReplicasPerShard**: int: The number of replicas to apply to each shard. The limit is 5.
* **NumShards**: int: The number of shards the cluster will contain.
* **ParameterGroupName**: string: The name of the parameter group associated with the cluster.
* **ParameterGroupStatus**: string (ReadOnly): The status of the parameter group used by the cluster.
* **Port**: int: The port number on which each member of the cluster accepts connections.
* **SecurityGroupIds**: string[]: One or more Amazon VPC security groups associated with this cluster.
* **SnapshotArns**: string[]: A list of Amazon Resource Names (ARN) that uniquely identify the RDB snapshot files stored in Amazon S3. The snapshot files are used to populate the new cluster. The Amazon S3 object name in the ARN cannot contain any commas.
* **SnapshotName**: string: The name of a snapshot from which to restore data into the new cluster. The snapshot status changes to restoring while the new cluster is being created.
* **SnapshotRetentionLimit**: int: The number of days for which MemoryDB retains automatic snapshots before deleting them. For example, if you set SnapshotRetentionLimit to 5, a snapshot that was taken today is retained for 5 days before being deleted.
* **SnapshotWindow**: string: The daily time range (in UTC) during which MemoryDB begins taking a daily snapshot of your cluster.
* **SnsTopicArn**: string: The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (SNS) topic to which notifications are sent.
* **SnsTopicStatus**: string: The status of the Amazon SNS notification topic. Notifications are sent only if the status is enabled.
* **Status**: string (ReadOnly): The status of the cluster. For example, Available, Updating, Creating.
* **SubnetGroupName**: string: The name of the subnet group to be used for the cluster.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this cluster.
* **TLSEnabled**: bool: A flag that enables in-transit encryption when set to true.

You cannot modify the value of TransitEncryptionEnabled after the cluster is created. To enable in-transit encryption on a cluster you must set TransitEncryptionEnabled to true when you create a cluster.

## Endpoint
### Properties
* **Address**: string (ReadOnly): The DNS address of the primary read-write node.
* **Port**: int (ReadOnly): The port number that the engine is listening on. 

## Tag
### Properties
* **Key**: string: The key for the tag. May not be null.
* **Value**: string: The tag's value. May be null.

## AWS.MemoryDB/ParameterGroupProperties
### Properties
* **ARN**: string (ReadOnly): The Amazon Resource Name (ARN) of the parameter group.
* **Description**: string: A description of the parameter group.
* **Family**: string: The name of the parameter group family that this parameter group is compatible with.
* **ParameterGroupName**: string: The name of the parameter group.
* **Parameters**: [ParameterGroup_Parameters](#parametergroupparameters) (WriteOnly): An map of parameter names and values for the parameter update. You must supply at least one parameter name and value; subsequent arguments are optional.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this parameter group.

## ParameterGroup_Parameters
### Properties

## Tag
### Properties
* **Key**: string: The key for the tag. May not be null.
* **Value**: string: The tag's value. May be null.

## AWS.MemoryDB/SubnetGroupProperties
### Properties
* **ARN**: string (ReadOnly): The Amazon Resource Name (ARN) of the subnet group.
* **Description**: string: An optional description of the subnet group.
* **SubnetGroupName**: string: The name of the subnet group. This value must be unique as it also serves as the subnet group identifier.
* **SubnetIds**: string[]: A list of VPC subnet IDs for the subnet group.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this subnet group.

## Tag
### Properties
* **Key**: string: The key for the tag. May not be null.
* **Value**: string: The tag's value. May be null.

## AWS.MemoryDB/UserProperties
### Properties
* **AccessString**: string (WriteOnly): Access permissions string used for this user account.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the user account.
* **AuthenticationMode**: [User_AuthenticationMode](#userauthenticationmode) (WriteOnly)
* **Status**: string (ReadOnly): Indicates the user status. Can be "active", "modifying" or "deleting".
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this user.
* **UserName**: string: The name of the user.

## User_AuthenticationMode
### Properties
* **Passwords**: string[]: Passwords used for this user account. You can create up to two passwords for each user.
* **Type**: string: Type of authentication strategy for this user.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws: or memorydb:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws: or memorydb:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

