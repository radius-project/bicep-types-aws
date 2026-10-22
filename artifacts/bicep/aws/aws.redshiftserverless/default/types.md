# AWS.RedshiftServerless @ default

## Resource AWS.RedshiftServerless/Namespace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RedshiftServerless/NamespaceProperties](#awsredshiftserverlessnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.RedshiftServerless/Snapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RedshiftServerless/SnapshotProperties](#awsredshiftserverlesssnapshotproperties) (Required, Identifier): properties of the resource

## Resource AWS.RedshiftServerless/Workgroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RedshiftServerless/WorkgroupProperties](#awsredshiftserverlessworkgroupproperties) (Required, Identifier): properties of the resource

## AWS.RedshiftServerless/NamespaceProperties
### Properties
* **AdminPasswordSecretKmsKeyId**: string: The ID of the AWS Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if manageAdminPassword is true.
* **AdminUsername**: string: The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
* **AdminUserPassword**: string (WriteOnly): The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit. You can't use adminUserPassword if manageAdminPassword is true.
* **DbName**: string: The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
* **DefaultIamRoleArn**: string: The default IAM role ARN for the namespace that is being created.
* **FinalSnapshotName**: string (WriteOnly): The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace
* **FinalSnapshotRetentionPeriod**: int (WriteOnly): The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.
* **IamRoles**: string[]: A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.
* **KmsKeyId**: string: The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.
* **LogExports**: string[]: The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog
* **ManageAdminPassword**: bool (WriteOnly): If true, Amazon Redshift uses AWS Secrets Manager to manage the namespace's admin credentials. You can't use adminUserPassword if manageAdminPassword is true. If manageAdminPassword is false or not set, Amazon Redshift uses adminUserPassword for the admin user account's password.
* **Namespace**: [Namespace](#namespace) (ReadOnly): Definition of Namespace resource.
* **NamespaceName**: string (Required, Identifier): A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.
* **NamespaceResourcePolicy**: [Namespace_NamespaceResourcePolicy](#namespacenamespaceresourcepolicy): The resource policy document that will be attached to the namespace.
* **RedshiftIdcApplicationArn**: string (WriteOnly): The ARN for the Redshift application that integrates with IAM Identity Center.
* **SnapshotCopyConfigurations**: [SnapshotCopyConfiguration](#snapshotcopyconfiguration)[]: The snapshot copy configurations for the namespace.
* **Tags**: [Tag](#tag)[]: The list of tags for the namespace.

## AWS.RedshiftServerless/SnapshotProperties
### Properties
* **NamespaceName**: string: The namespace the snapshot is associated with.
* **OwnerAccount**: string (ReadOnly): The owner account of the snapshot.
* **RetentionPeriod**: int: The retention period of the snapshot.
* **Snapshot**: [Snapshot](#snapshot) (ReadOnly): Definition for snapshot resource
* **SnapshotName**: string (Required, Identifier): The name of the snapshot.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.RedshiftServerless/WorkgroupProperties
### Properties
* **BaseCapacity**: int: The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
* **ConfigParameters**: [ConfigParameter](#configparameter)[] (WriteOnly): A list of parameters to set for finer control over a database. Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.
* **EnhancedVpcRouting**: bool: The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
* **MaxCapacity**: int: The max compute capacity of the workgroup in Redshift Processing Units (RPUs).
* **NamespaceName**: string: The namespace the workgroup is associated with.
* **Port**: int: The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
* **PricePerformanceTarget**: [Workgroup_PerformanceTarget](#workgroupperformancetarget): A property that represents the price performance target settings for the workgroup.
* **PubliclyAccessible**: bool: A value that specifies whether the workgroup can be accessible from a public network.
* **RecoveryPointId**: string (WriteOnly): The identifier of the recovery point to restore the namespace from. When this resource is first created, the namespace is restored from this recovery point. On subsequent updates, a restore occurs only when RecoveryPointId changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.
* **SecurityGroupIds**: string[] (WriteOnly): A list of security group IDs to associate with the workgroup.
* **SnapshotArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the snapshot to restore the namespace from. Specify either SnapshotArn or SnapshotName, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotArn changes from its previous value. If the value is unchanged or removed, no restore takes place and existing data is preserved.
* **SnapshotName**: string (WriteOnly): The name of the snapshot to restore the namespace from. Because snapshot names are unique only within an account, also specify SnapshotOwnerAccount when restoring from a snapshot owned by a different account. Specify either SnapshotName or SnapshotArn, but not both. When this resource is first created, the namespace is restored from this snapshot. On subsequent updates, a restore occurs only when SnapshotName or SnapshotOwnerAccount changes from its previous value. If both values are unchanged or SnapshotName is removed, no restore takes place and existing data is preserved.
* **SnapshotOwnerAccount**: string (WriteOnly): The AWS account ID that owns the snapshot. Required when restoring from a snapshot shared by another account. Used in combination with SnapshotName. On updates, changing this value while SnapshotName is set triggers a restore from the newly referenced snapshot. If the value is unchanged, no restore takes place and existing data is preserved.
* **SubnetIds**: string[] (WriteOnly): A list of subnet IDs the workgroup is associated with.
* **Tags**: [Tag](#tag)[]: The map of the key-value pairs used to tag the workgroup.
* **TrackName**: string
* **Workgroup**: [Workgroup](#workgroup): Definition for workgroup resource
* **WorkgroupName**: string (Required, Identifier): The name of the workgroup.

## ConfigParameter
### Properties
* **ParameterKey**: string
* **ParameterValue**: string

## Endpoint
### Properties
* **Address**: string (ReadOnly)
* **Port**: int (ReadOnly)
* **VpcEndpoints**: [VpcEndpoint](#vpcendpoint)[] (ReadOnly)

## Namespace
### Properties
* **AdminPasswordSecretArn**: string
* **AdminPasswordSecretKmsKeyId**: string
* **AdminUsername**: string (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **DbName**: string (ReadOnly)
* **DefaultIamRoleArn**: string (ReadOnly)
* **IamRoles**: string[] (ReadOnly)
* **KmsKeyId**: string (ReadOnly)
* **LogExports**: string[] (ReadOnly)
* **NamespaceArn**: string (ReadOnly)
* **NamespaceId**: string (ReadOnly)
* **NamespaceName**: string (ReadOnly, Identifier)
* **Status**: string (ReadOnly)

## Namespace_NamespaceResourcePolicy
### Properties

## NetworkInterface
### Properties
* **AvailabilityZone**: string
* **NetworkInterfaceId**: string
* **PrivateIpAddress**: string
* **SubnetId**: string

## PerformanceTarget
### Properties
* **Level**: int
* **Status**: string

## Snapshot
### Properties
* **AdminUsername**: string (ReadOnly)
* **KmsKeyId**: string (ReadOnly)
* **NamespaceArn**: string (ReadOnly)
* **NamespaceName**: string (ReadOnly)
* **OwnerAccount**: string (ReadOnly)
* **RetentionPeriod**: int (ReadOnly)
* **SnapshotArn**: string (ReadOnly)
* **SnapshotCreateTime**: string (ReadOnly)
* **SnapshotName**: string (ReadOnly, Identifier)
* **Status**: string (ReadOnly)

## SnapshotCopyConfiguration
### Properties
* **DestinationKmsKeyId**: string
* **DestinationRegion**: string (Required)
* **SnapshotRetentionPeriod**: int

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VpcEndpoint
### Properties
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[]
* **VpcEndpointId**: string
* **VpcId**: string

## Workgroup
### Properties
* **BaseCapacity**: int (ReadOnly)
* **ConfigParameters**: [ConfigParameter](#configparameter)[] (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **Endpoint**: [Endpoint](#endpoint)
* **EnhancedVpcRouting**: bool (ReadOnly)
* **MaxCapacity**: int (ReadOnly)
* **NamespaceName**: string (ReadOnly)
* **PricePerformanceTarget**: [PerformanceTarget](#performancetarget)
* **PubliclyAccessible**: bool (ReadOnly)
* **SecurityGroupIds**: string[] (ReadOnly)
* **Status**: string (ReadOnly)
* **SubnetIds**: string[] (ReadOnly)
* **TrackName**: string (ReadOnly)
* **WorkgroupArn**: string (ReadOnly)
* **WorkgroupId**: string (ReadOnly)
* **WorkgroupName**: string (ReadOnly, Identifier)

## Workgroup_PerformanceTarget
### Properties
* **Level**: int
* **Status**: string

