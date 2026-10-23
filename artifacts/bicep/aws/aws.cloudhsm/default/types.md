# AWS.CloudHSM @ default

## Resource AWS.CloudHSM/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudHSM/ClusterProperties](#awscloudhsmclusterproperties) (Required, Identifier): properties of the resource

## AWS.CloudHSM/ClusterProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the cluster.
* **BackupPolicy**: string (ReadOnly): The cluster's backup policy.
* **BackupRetentionPolicy**: [Cluster_BackupRetentionPolicy](#clusterbackupretentionpolicy): A policy that defines how the service retains backups.
* **ClusterId**: string (ReadOnly): The cluster's identifier (ID).
* **HsmType**: string (Required): The type of HSM to use in the cluster.
* **Mode**: string: The mode to use in the cluster.
* **NetworkType**: string: The NetworkType to create a cluster with.
* **SecurityGroup**: string (ReadOnly): The identifier (ID) of the cluster's security group.
* **State**: string (ReadOnly): The cluster's state.
* **SubnetIds**: string[] (WriteOnly): The identifiers (IDs) of the subnets where the cluster is created. You must specify at least one subnet.
* **SubnetMapping**: [Cluster_SubnetMapping](#clustersubnetmapping) (ReadOnly): A map from availability zone to the cluster's subnet in that availability zone.
* **Tags**: [Cluster_Tags](#clustertags)[]: Tags to apply to the CloudHSM cluster.
* **VpcId**: string (ReadOnly): The identifier (ID) of the virtual private cloud (VPC) that contains the cluster.

## Cluster_BackupRetentionPolicy
### Properties
* **Type**: string: The type of backup retention policy.
* **Value**: string: Use a value between 7 - 379.

## Cluster_SubnetMapping
### Properties

## Cluster_Tags
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

