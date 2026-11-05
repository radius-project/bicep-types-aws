# AWS.DAX @ default

## Resource AWS.DAX/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DAX/ClusterProperties](#awsdaxclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.DAX/ParameterGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DAX/ParameterGroupProperties](#awsdaxparametergroupproperties) (Identifier): properties of the resource

## Resource AWS.DAX/SubnetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DAX/SubnetGroupProperties](#awsdaxsubnetgroupproperties) (Required, Identifier): properties of the resource

## AWS.DAX/ClusterProperties
### Properties
* **Arn**: string (ReadOnly)
* **AvailabilityZones**: string[]
* **ClusterDiscoveryEndpoint**: string (ReadOnly)
* **ClusterDiscoveryEndpointURL**: string (ReadOnly)
* **ClusterEndpointEncryptionType**: string
* **ClusterName**: string (Identifier)
* **Description**: string
* **IAMRoleARN**: string (Required)
* **NetworkType**: string
* **NodeType**: string (Required)
* **NotificationTopicARN**: string
* **ParameterGroupName**: string
* **PreferredMaintenanceWindow**: string
* **ReplicationFactor**: int (Required)
* **SecurityGroupIds**: string[]
* **SSESpecification**: [SSESpecification](#ssespecification)
* **SubnetGroupName**: string
* **Tags**: [Cluster_Tags](#clustertags)

## AWS.DAX/ParameterGroupProperties
### Properties
* **Description**: string: A description of the parameter group.
* **ParameterGroupName**: string (Identifier): The name of the parameter group.
* **ParameterNameValues**: [ParameterGroup_ParameterNameValues](#parametergroupparameternamevalues): An array of name-value pairs for the parameters in the group. Each element in the array represents a single parameter.

## AWS.DAX/SubnetGroupProperties
### Properties
* **Description**: string
* **SubnetGroupName**: string (Identifier)
* **SubnetIds**: string[] (Required)

## Cluster_Tags
### Properties

## ParameterGroup_ParameterNameValues
### Properties

## SSESpecification
### Properties
* **SSEEnabled**: bool

