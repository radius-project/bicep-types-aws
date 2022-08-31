# AWS.Cassandra @ default

## Resource AWS.Cassandra/Keyspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Cassandra/KeyspaceProperties](#awscassandrakeyspaceproperties): properties of the resource

## Resource AWS.Cassandra/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Cassandra/TableProperties](#awscassandratableproperties): properties of the resource

## AWS.Cassandra/KeyspaceProperties
### Properties
* **KeyspaceName**: string: Name for Cassandra keyspace
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.Cassandra/TableProperties
### Properties
* **BillingMode**: [BillingMode](#billingmode)
* **ClusteringKeyColumns**: [ClusteringKeyColumn](#clusteringkeycolumn)[]: Clustering key columns of the table
* **DefaultTimeToLive**: int: Default TTL (Time To Live) in seconds, where zero is disabled. If the value is greater than zero, TTL is enabled for the entire table and an expiration timestamp is added to each column.
* **EncryptionSpecification**: [EncryptionSpecification](#encryptionspecification)
* **KeyspaceName**: string: Name for Cassandra keyspace
* **PartitionKeyColumns**: [Column](#column)[]: Partition key columns of the table
* **PointInTimeRecoveryEnabled**: bool: Indicates whether point in time recovery is enabled (true) or disabled (false) on the table
* **RegularColumns**: [Column](#column)[]: Non-key columns of the table
* **TableName**: string: Name for Cassandra table
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## BillingMode
### Properties
* **Mode**: [Mode](#mode)
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)

## Mode
### Properties

## ProvisionedThroughput
### Properties
* **ReadCapacityUnits**: int
* **WriteCapacityUnits**: int

## ClusteringKeyColumn
### Properties
* **Column**: [Column](#column)
* **OrderBy**: string

## Column
### Properties
* **ColumnName**: string
* **ColumnType**: string

## EncryptionSpecification
### Properties
* **EncryptionType**: [EncryptionType](#encryptiontype)
* **KmsKeyIdentifier**: [KmsKeyIdentifier](#kmskeyidentifier)

## EncryptionType
### Properties

## KmsKeyIdentifier
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

