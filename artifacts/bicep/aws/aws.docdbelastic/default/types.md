# AWS.DocDBElastic @ default

## Resource AWS.DocDBElastic/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDBElastic/ClusterProperties](#awsdocdbelasticclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.DocDBElastic/ClusterSnapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDBElastic/ClusterSnapshotProperties](#awsdocdbelasticclustersnapshotproperties) (Required, Identifier): properties of the resource

## AWS.DocDBElastic/ClusterProperties
### Properties
* **AdminUserName**: string (Required)
* **AdminUserPassword**: string (WriteOnly)
* **AuthType**: string (Required)
* **BackupRetentionPeriod**: int
* **ClusterArn**: string (ReadOnly, Identifier)
* **ClusterEndpoint**: string (ReadOnly)
* **ClusterName**: string (Required)
* **KmsKeyId**: string
* **PreferredBackupWindow**: string
* **PreferredMaintenanceWindow**: string
* **ShardCapacity**: int (Required)
* **ShardCount**: int (Required)
* **ShardInstanceCount**: int
* **SubnetIds**: string[]
* **Tags**: [Tag](#tag)[]
* **VpcSecurityGroupIds**: string[]

## AWS.DocDBElastic/ClusterSnapshotProperties
### Properties
* **AdminUserName**: string (ReadOnly): The name of the elastic cluster administrator.
* **ClusterArn**: string (Required): The ARN of the elastic cluster of which to create a snapshot.
* **ClusterCreationTime**: string (ReadOnly): The time when the source elastic cluster was created, in Universal Coordinated Time (UTC).
* **KmsKeyId**: string (ReadOnly): The KMS key identifier used to encrypt the source elastic cluster.
* **SnapshotArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the elastic cluster snapshot.
* **SnapshotCreationTime**: string (ReadOnly): The time when the elastic cluster snapshot was created, in Universal Coordinated Time (UTC).
* **SnapshotName**: string (Required): The name of the elastic cluster snapshot.
* **SnapshotType**: string (ReadOnly): The type of the elastic cluster snapshot (manual or automated).
* **Status**: string (ReadOnly): The status of the elastic cluster snapshot.
* **SubnetIds**: string[] (ReadOnly): The Amazon EC2 subnet IDs associated with the source elastic cluster.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to the elastic cluster snapshot.
* **VpcSecurityGroupIds**: string[] (ReadOnly): The Amazon EC2 security group IDs associated with the source elastic cluster.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

