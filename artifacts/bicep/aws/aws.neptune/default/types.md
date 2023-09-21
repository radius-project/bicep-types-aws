# AWS.Neptune @ default

## Resource AWS.Neptune/DBCluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Neptune/DBClusterProperties](#awsneptunedbclusterproperties): properties of the resource

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
* **IamAuthEnabled**: bool: True if mapping of Amazon Identity and Access Management (IAM) accounts to database accounts is enabled, and otherwise false.
* **KmsKeyId**: string: If `StorageEncrypted` is true, the Amazon KMS key identifier for the encrypted DB cluster.
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

If you specify the `DBClusterIdentifier`, `DBSnapshotIdentifier`, or `SourceDBInstanceIdentifier` property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance. If you specify the KmsKeyId property, you must enable encryption.

If you specify the KmsKeyId, you must enable encryption by setting StorageEncrypted to true.
* **Tags**: [Tag](#tag)[]: The tags assigned to this cluster.
* **UseLatestRestorableTime**: bool (WriteOnly): Creates a new DB cluster from a DB snapshot or DB cluster snapshot.

If a DB snapshot is specified, the target DB cluster is created from the source DB snapshot with a default configuration and default security group.

If a DB cluster snapshot is specified, the target DB cluster is created from the source DB cluster restore point with the same configuration as the original source DB cluster, except that the new DB cluster is created with the default security group.
* **VpcSecurityGroupIds**: string[]: Provides a list of VPC security groups that the DB cluster belongs to.

## DBClusterRole
### Properties
* **FeatureName**: string: The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon Neptune API Reference.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

## ServerlessScalingConfiguration
### Properties
* **MaxCapacity**: int (Required): The maximum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 40, 40.5, 41, and so on. The smallest value you can use is 2.5, whereas the largest is 128.
* **MinCapacity**: int (Required): The minimum number of Neptune capacity units (NCUs) for a DB instance in an Neptune Serverless cluster. You can specify NCU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value you can use is 1, whereas the largest is 128.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

