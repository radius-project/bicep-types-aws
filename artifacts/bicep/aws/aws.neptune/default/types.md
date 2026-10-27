# AWS.Neptune @ default

## Resource AWS.Neptune/DBCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/DBClusterProperties](#awsneptunedbclusterproperties) (Identifier): properties of the resource

## Resource AWS.Neptune/DBClusterParameterGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/DBClusterParameterGroupProperties](#awsneptunedbclusterparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Neptune/DBInstance@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/DBInstanceProperties](#awsneptunedbinstanceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Neptune/DBParameterGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/DBParameterGroupProperties](#awsneptunedbparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Neptune/DBSubnetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/DBSubnetGroupProperties](#awsneptunedbsubnetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Neptune/EventSubscription@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/EventSubscriptionProperties](#awsneptuneeventsubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Neptune/GlobalCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/GlobalClusterProperties](#awsneptuneglobalclusterproperties) (Identifier): properties of the resource

## AWS.Neptune/DBClusterParameterGroupProperties
### Properties
* **Description**: string (Required): Provides the customer-specified description for this DB cluster parameter group.
* **Family**: string (Required): Must be neptune1 for engine versions prior to 1.2.0.0, or neptune1.2 for engine version 1.2.0.0 and higher.
* **Name**: string (Identifier): Provides the name of the DB cluster parameter group.
* **Parameters**: [DBClusterParameterGroup_Parameters](#dbclusterparametergroupparameters) (Required): An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
* **Tags**: [Tag](#tag)[]: The list of tags for the cluster parameter group.

## AWS.Neptune/DBClusterProperties
### Properties
* **AssociatedRoles**: [DBClusterRole](#dbclusterrole)[]: Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.
* **AvailabilityZones**: string[]: Provides the list of EC2 Availability Zones that instances in the DB cluster can be created in.
* **BackupRetentionPeriod**: int: Specifies the number of days for which automatic DB snapshots are retained.
* **ClusterResourceId**: string (ReadOnly): The resource id for the DB cluster. For example: `cluster-ABCD1234EFGH5678IJKL90MNOP`. The cluster ID uniquely identifies the cluster and is used in things like IAM authentication policies.
* **CopyTagsToSnapshot**: bool: A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default behaviour is not to copy them.
* **DBClusterIdentifier**: string (Identifier): The DB cluster identifier. Contains a user-supplied DB cluster identifier. This identifier is the unique key that identifies a DB cluster stored as a lowercase string.
* **DBClusterParameterGroupName**: string: Provides the name of the DB cluster parameter group.
* **DBInstanceParameterGroupName**: string (WriteOnly): The name of the DB parameter group to apply to all instances of the DB cluster. Used only in case of a major EngineVersion upgrade request.
* **DBPort**: int: The port number on which the DB instances in the DB cluster accept connections. 

If not specified, the default port used is `8182`. 

Note: `Port` property will soon be deprecated from this resource. Please update existing templates to rename it with new property `DBPort` having same functionalities.
* **DBSubnetGroupName**: string: Specifies information on the subnet group associated with the DB cluster, including the name, description, and subnets in the subnet group.
* **DeletionProtection**: bool: Indicates whether or not the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled.
* **EnableCloudwatchLogsExports**: string[]: Specifies a list of log types that are enabled for export to CloudWatch Logs.
* **Endpoint**: string (ReadOnly): The connection endpoint for the DB cluster. For example: `mystack-mydbcluster-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`
* **EngineVersion**: string: Indicates the database engine version.
* **GlobalClusterIdentifier**: string: The ID of the Neptune global database to which this new DB cluster should be added.
* **IamAuthEnabled**: bool: True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the AWS KMS key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default KMS key is used. If you specify this property, you must set the StorageEncrypted property to true.
* **NetworkType**: string: The network type of the DB cluster.
* **Port**: string (ReadOnly): The port number on which the DB cluster accepts connections. For example: `8182`.
* **PreferredBackupWindow**: string: Specifies the daily time range during which automated backups are created if automated backups are enabled, as determined by the BackupRetentionPeriod.
* **PreferredMaintenanceWindow**: string: Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
* **ReadEndpoint**: string (ReadOnly): The reader endpoint for the DB cluster. For example: `mystack-mydbcluster-ro-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`
* **RestoreToTime**: string (WriteOnly): Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
* **RestoreType**: string (WriteOnly): Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
* **ServerlessScalingConfiguration**: [ServerlessScalingConfiguration](#serverlessscalingconfiguration): Contains the scaling configuration used by the Neptune Serverless Instances within this DB cluster.
* **SnapshotIdentifier**: string (WriteOnly): Specifies the identifier for a DB cluster snapshot. Must match the identifier of an existing snapshot.

After you restore a DB cluster using a SnapshotIdentifier, you must specify the same SnapshotIdentifier for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed.

However, if you don't specify the SnapshotIdentifier, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the snapshot specified by the SnapshotIdentifier, and the original DB cluster is deleted.
* **SourceDBClusterIdentifier**: string (WriteOnly): Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
* **StorageEncrypted**: bool: Indicates whether the DB cluster is encrypted.

If you specify the KmsKeyId property, then you must enable encryption and set this property to true.

If you enable the StorageEncrypted property but don't specify KmsKeyId property, then the default KMS key is used. If you specify KmsKeyId property, then that KMS Key is used to encrypt the database instances in the DB cluster.

If you specify the SourceDBClusterIdentifier property and don't specify this property or disable it. The value is inherited from the source DB cluster, and if the DB cluster is encrypted, the KmsKeyId property from the source cluster is used.

If you specify the DBSnapshotIdentifier and don't specify this property or disable it. The value is inherited from the snapshot, and the specified KmsKeyId property from the snapshot is used.
* **Tags**: [Tag](#tag)[]: The tags assigned to this cluster.
* **UseLatestRestorableTime**: bool (WriteOnly): Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
* **VpcSecurityGroupIds**: string[]: Provides a list of VPC security groups that the DB cluster belongs to.

## AWS.Neptune/DBInstanceProperties
### Properties
* **AllowMajorVersionUpgrade**: bool (WriteOnly): Indicates that major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible. This parameter must be set to true when specifying a value for the EngineVersion parameter that is a different major version than the DB instance's current version.
* **AutoMinorVersionUpgrade**: bool: Indicates that minor version patches are applied automatically.

When updating this property, some interruptions may occur.
* **AvailabilityZone**: string: Specifies the name of the Availability Zone the DB instance is located in.
* **DBClusterIdentifier**: string: If the DB instance is a member of a DB cluster, contains the name of the DB cluster that the DB instance is a member of.
* **DBInstanceClass**: string (Required): Contains the name of the compute and memory capacity class of the DB instance.

If you update this property, some interruptions may occur.
* **DBInstanceIdentifier**: string (Identifier): Contains a user-supplied database identifier. This identifier is the unique key that identifies a DB instance.
* **DBParameterGroupName**: string: The name of an existing DB parameter group or a reference to an AWS::Neptune::DBParameterGroup resource created in the template. If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
* **DBSnapshotIdentifier**: string (WriteOnly): This parameter is not supported.

`AWS::Neptune::DBInstance` does not support restoring from snapshots.

`AWS::Neptune::DBCluster` does support restoring from snapshots.


* **DBSubnetGroupName**: string: A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new virtual private cloud (VPC).
* **Endpoint**: string (ReadOnly): The connection endpoint for the database. For example: `mystack-mydb-1apw1j4phylrk.cg034hpkmmjt.us-east-2.rds.amazonaws.com`.
* **Port**: string (ReadOnly): The port number on which the database accepts connections. For example: `8182`.
* **PreferredMaintenanceWindow**: string: Specifies the weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
* **PubliclyAccessible**: bool: Indicates that public accessibility is enabled. This should be enabled in combination with IAM Auth enabled on the DBCluster
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this DB instance.

## AWS.Neptune/DBParameterGroupProperties
### Properties
* **Description**: string (Required): Provides the customer-specified description for this DB parameter group.
* **Family**: string (Required): Must be `neptune1` for engine versions prior to 1.2.0.0, or `neptune1.2` for engine version `1.2.0.0` and higher.
* **Name**: string (Identifier): Provides the name of the DB parameter group.
* **Parameters**: [DBParameterGroup_Parameters](#dbparametergroupparameters) (Required): The parameters to set for this DB parameter group.

The parameters are expressed as a JSON object consisting of key-value pairs.

Changes to dynamic parameters are applied immediately. During an update, if you have static parameters (whether they were changed or not), it triggers AWS CloudFormation to reboot the associated DB instance without failover.
* **Tags**: [Tag](#tag)[]: An optional array of key-value pairs to apply to this DB parameter group.

## AWS.Neptune/DBSubnetGroupProperties
### Properties
* **DBSubnetGroupDescription**: string (Required): The description for the DB subnet group.
* **DBSubnetGroupName**: string (Identifier): The name for the DB subnet group. This value is stored as a lowercase string.

Constraints: Must contain no more than 255 lowercase alphanumeric characters or hyphens. Must not be "Default".

Example: mysubnetgroup


* **SubnetIds**: string[] (Required): The Amazon EC2 subnet IDs for the DB subnet group.
* **Tags**: [Tag](#tag)[]: An optional array of key-value pairs to apply to this DB subnet group.

## AWS.Neptune/EventSubscriptionProperties
### Properties
* **Enabled**: bool: A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it.
* **EventCategories**: string[]: A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the Events topic in the Amazon Neptune User Guide or by using the DescribeEventCategories action.
* **SnsTopicArn**: string (Required): The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
* **SourceIds**: string[]: The list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.
* **SourceType**: string: The type of source that will be generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.
* **SubscriptionName**: string (Identifier): The name of the subscription.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Neptune/GlobalClusterProperties
### Properties
* **DeletionProtection**: bool: Whether deletion protection is enabled.
* **Engine**: string: The name of the database engine.
* **EngineVersion**: string: The version number of the database engine.
* **GlobalClusterIdentifier**: string (Identifier): The cluster identifier of the global database cluster.
* **SourceDBClusterIdentifier**: string: The Amazon Resource Name (ARN) of an existing Neptune DB cluster to use as the primary cluster of the new global database.
* **StorageEncrypted**: bool: Whether the global database cluster is storage encrypted.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DBClusterParameterGroup_Parameters
### Properties

## DBClusterRole
### Properties
* **FeatureName**: string: The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

## DBParameterGroup_Parameters
### Properties

## ServerlessScalingConfiguration
### Properties
* **MaxCapacity**: int (Required): The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.
* **MinCapacity**: int (Required): The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

