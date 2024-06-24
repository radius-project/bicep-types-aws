# AWS.DocDBElastic @ default

## Resource AWS.DocDBElastic/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDBElastic/ClusterProperties](#awsdocdbelasticclusterproperties) (Required, Identifier): properties of the resource

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

