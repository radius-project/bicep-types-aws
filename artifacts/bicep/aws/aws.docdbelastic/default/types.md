# AWS.DocDBElastic @ default

## Resource AWS.DocDBElastic/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDBElastic/ClusterProperties](#awsdocdbelasticclusterproperties) (Required): properties of the resource

## AWS.DocDBElastic/ClusterProperties
### Properties
* **AdminUserName**: string (Required)
* **AdminUserPassword**: string (WriteOnly)
* **AuthType**: string (Required)
* **ClusterArn**: string (ReadOnly, Identifier)
* **ClusterEndpoint**: string (ReadOnly)
* **ClusterName**: string (Required)
* **KmsKeyId**: string
* **PreferredMaintenanceWindow**: string
* **ShardCapacity**: int (Required)
* **ShardCount**: int (Required)
* **SubnetIds**: string[]
* **Tags**: [Tag](#tag)[]
* **VpcSecurityGroupIds**: string[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

