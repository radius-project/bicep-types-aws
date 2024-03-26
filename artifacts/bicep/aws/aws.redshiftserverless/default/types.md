# AWS.RedshiftServerless @ default

## Resource AWS.RedshiftServerless/Namespace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RedshiftServerless/NamespaceProperties](#awsredshiftserverlessnamespaceproperties) (Required): properties of the resource

## Resource AWS.RedshiftServerless/Workgroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RedshiftServerless/WorkgroupProperties](#awsredshiftserverlessworkgroupproperties) (Required): properties of the resource

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
* **Tags**: [Tag](#tag)[] (WriteOnly): The list of tags for the namespace.

## AWS.RedshiftServerless/WorkgroupProperties
### Properties
* **BaseCapacity**: int (WriteOnly): The base compute capacity of the workgroup in Redshift Processing Units (RPUs).
* **ConfigParameters**: [ConfigParameter](#configparameter)[] (WriteOnly): A list of parameters to set for finer control over a database. Available options are datestyle, enable_user_activity_logging, query_group, search_path, max_query_execution_time, and require_ssl.
* **EnhancedVpcRouting**: bool: The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
* **MaxCapacity**: int (WriteOnly): The max compute capacity of the workgroup in Redshift Processing Units (RPUs).
* **NamespaceName**: string: The namespace the workgroup is associated with.
* **Port**: int: The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
* **PubliclyAccessible**: bool: A value that specifies whether the workgroup can be accessible from a public network.
* **SecurityGroupIds**: string[] (WriteOnly): A list of security group IDs to associate with the workgroup.
* **SubnetIds**: string[] (WriteOnly): A list of subnet IDs the workgroup is associated with.
* **Tags**: [Tag](#tag)[] (WriteOnly): The map of the key-value pairs used to tag the workgroup.
* **Workgroup**: [Workgroup](#workgroup) (ReadOnly): Definition for workgroup resource
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
* **PubliclyAccessible**: bool (ReadOnly)
* **SecurityGroupIds**: string[] (ReadOnly)
* **Status**: string (ReadOnly)
* **SubnetIds**: string[] (ReadOnly)
* **WorkgroupArn**: string (ReadOnly)
* **WorkgroupId**: string (ReadOnly)
* **WorkgroupName**: string (ReadOnly, Identifier)

