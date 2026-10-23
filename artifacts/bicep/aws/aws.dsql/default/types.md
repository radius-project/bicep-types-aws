# AWS.DSQL @ default

## Resource AWS.DSQL/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DSQL/ClusterProperties](#awsdsqlclusterproperties) (Identifier): properties of the resource

## AWS.DSQL/ClusterProperties
### Properties
* **CreationTime**: string (ReadOnly): The time of when the cluster was created in ISO-8601 format.
* **DeletionProtectionEnabled**: bool: Whether deletion protection is enabled in this cluster.
* **EncryptionDetails**: [Cluster_EncryptionDetails](#clusterencryptiondetails) (ReadOnly): The encryption configuration details for the cluster.
* **Endpoint**: string (ReadOnly): The DSQL cluster endpoint.
* **Identifier**: string (ReadOnly, Identifier): The ID of the created cluster.
* **KmsEncryptionKey**: string (WriteOnly): The KMS key that encrypts data on the cluster.
* **MultiRegionProperties**: [Cluster_MultiRegionProperties](#clustermultiregionproperties): The Multi-region properties associated to this cluster.
* **PolicyDocument**: string: The IAM policy applied to the cluster resource.
* **PolicyVersion**: string (ReadOnly): The version number of the cluster's resource based policy
* **ResourceArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the cluster.
* **Status**: string (ReadOnly): The status of the cluster.
* **Tags**: [Tag](#tag)[]
* **VpcEndpoint**: string (ReadOnly): The DSQL cluster VPC endpoint.
* **VpcEndpointServiceName**: string (ReadOnly): The VPC endpoint service name.

## Cluster_EncryptionDetails
### Properties
* **EncryptionStatus**: string: The status of encryption for the cluster.
* **EncryptionType**: string: The type of encryption that protects data in the cluster.
* **KmsKeyArn**: string: The Amazon Resource Name (ARN) of the KMS key that encrypts data in the cluster.

## Cluster_MultiRegionProperties
### Properties
* **Clusters**: string[]
* **WitnessRegion**: string: The witness region in a multi-region cluster.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

