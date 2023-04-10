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
* **AdminUsername**: string: The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
* **AdminUserPassword**: string (WriteOnly): The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit.
* **DbName**: string: The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
* **DefaultIamRoleArn**: string: The default IAM role ARN for the namespace that is being created.
* **FinalSnapshotName**: string (WriteOnly): The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace
* **FinalSnapshotRetentionPeriod**: int (WriteOnly): The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.
* **IamRoles**: string[]: A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.
* **KmsKeyId**: string: The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.
* **LogExports**: string[]: The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog
* **Namespace**: [Namespace](#namespace) (ReadOnly)
* **NamespaceName**: string (Required, Identifier): A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.
* **Tags**: [Tag](#tag)[] (WriteOnly): The list of tags for the namespace.

## Namespace
### Properties
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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.RedshiftServerless/WorkgroupProperties
### Properties
* **BaseCapacity**: int (WriteOnly)
* **ConfigParameters**: [ConfigParameter](#configparameter)[] (WriteOnly)
* **EnhancedVpcRouting**: bool
* **NamespaceName**: string
* **Port**: int
* **PubliclyAccessible**: bool
* **SecurityGroupIds**: string[] (WriteOnly)
* **SubnetIds**: string[] (WriteOnly)
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **Workgroup**: [Workgroup](#workgroup) (ReadOnly)
* **WorkgroupName**: string (Required, Identifier)

## ConfigParameter
### Properties
* **ParameterKey**: string
* **ParameterValue**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Workgroup
### Properties
* **BaseCapacity**: int (ReadOnly)
* **ConfigParameters**: [ConfigParameter](#configparameter)[] (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **Endpoint**: [Endpoint](#endpoint)
* **EnhancedVpcRouting**: bool (ReadOnly)
* **NamespaceName**: string (ReadOnly)
* **PubliclyAccessible**: bool (ReadOnly)
* **SecurityGroupIds**: string[] (ReadOnly)
* **Status**: string (ReadOnly)
* **SubnetIds**: string[] (ReadOnly)
* **WorkgroupArn**: string (ReadOnly)
* **WorkgroupId**: string (ReadOnly)
* **WorkgroupName**: string (ReadOnly, Identifier)

## Endpoint
### Properties
* **Address**: string (ReadOnly)
* **Port**: int (ReadOnly)
* **VpcEndpoints**: [VpcEndpoint](#vpcendpoint)[] (ReadOnly)

## VpcEndpoint
### Properties
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[]
* **VpcEndpointId**: string
* **VpcId**: string

## NetworkInterface
### Properties
* **AvailabilityZone**: string
* **NetworkInterfaceId**: string
* **PrivateIpAddress**: string
* **SubnetId**: string

