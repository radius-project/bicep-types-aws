# AWS.Cassandra @ default

## Resource AWS.Cassandra/Keyspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cassandra/KeyspaceProperties](#awscassandrakeyspaceproperties): properties of the resource

## Resource AWS.Cassandra/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Cassandra/TableProperties](#awscassandratableproperties) (Required): properties of the resource

## AWS.Cassandra/KeyspaceProperties
### Properties
* **KeyspaceName**: string (Identifier): Name for Cassandra keyspace
* **ReplicationSpecification**: [ReplicationSpecification](#replicationspecification)
* **Tags**: [Tag](#tag)[]

## ReplicationSpecification
### Properties
* **RegionList**: string[]
* **ReplicationStrategy**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.Cassandra/TableProperties
### Properties
* **BillingMode**: [BillingMode](#billingmode)
* **ClientSideTimestampsEnabled**: bool: Indicates whether client side timestamps are enabled (true) or disabled (false) on the table. False by default, once it is enabled it cannot be disabled again.
* **ClusteringKeyColumns**: [ClusteringKeyColumn](#clusteringkeycolumn)[]: Clustering key columns of the table
* **DefaultTimeToLive**: int: Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
* **EncryptionSpecification**: [EncryptionSpecification](#encryptionspecification)
* **KeyspaceName**: string (Required, Identifier): Name for Cassandra keyspace
* **PartitionKeyColumns**: [Column](#column)[] (Required): Partition key columns of the table
* **PointInTimeRecoveryEnabled**: bool: Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
* **RegularColumns**: [Column](#column)[]: Non-key columns of the table
* **TableName**: string (Identifier): Name for Cassandra table
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## BillingMode
### Properties
* **Mode**: string (Required)
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)

## ProvisionedThroughput
### Properties
* **ReadCapacityUnits**: int (Required)
* **WriteCapacityUnits**: int (Required)

## ClusteringKeyColumn
### Properties
* **Column**: [Column](#column) (Required)
* **OrderBy**: string

## Column
### Properties
* **ColumnName**: string (Required)
* **ColumnType**: string (Required)

## EncryptionSpecification
### Properties
* **EncryptionType**: string (Required)
* **KmsKeyIdentifier**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

