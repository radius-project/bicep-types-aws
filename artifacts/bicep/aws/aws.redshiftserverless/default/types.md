# AWS.RedshiftServerless @ default

## Resource AWS.RedshiftServerless/Namespace@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RedshiftServerless/NamespaceProperties](#awsredshiftserverlessnamespaceproperties): properties of the resource

## Resource AWS.RedshiftServerless/Workgroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RedshiftServerless/WorkgroupProperties](#awsredshiftserverlessworkgroupproperties): properties of the resource

## AWS.RedshiftServerless/NamespaceProperties
### Properties
* **AdminUsername**: string: The user name associated with the admin user for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
* **AdminUserPassword**: string (WriteOnly): The password associated with the admin user for the namespace that is being created. Password must be at least 8 characters in length, should be any printable ASCII character. Must contain at least one lowercase letter, one uppercase letter and one decimal digit.
* **DbName**: string: The database name associated for the namespace that is being created. Only alphanumeric characters and underscores are allowed. It should start with an alphabet.
* **DefaultIamRoleArn**: string: The default IAM role ARN for the namespace that is being created.
* **FinalSnapshotName**: string: The name of the namespace the source snapshot was created from. Please specify the name if needed before deleting namespace
* **FinalSnapshotRetentionPeriod**: int: The number of days to retain automated snapshot in the destination region after they are copied from the source region. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3,653.
* **IamRoles**: string[]: A list of AWS Identity and Access Management (IAM) roles that can be used by the namespace to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. The Default role limit for each request is 10.
* **KmsKeyId**: string: The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the namespace.
* **LogExports**: [LogExport](#logexport)[]: The collection of log types to be exported provided by the customer. Should only be one of the three supported log types: userlog, useractivitylog and connectionlog
* **Namespace**: [Namespace](#namespace) (ReadOnly)
* **NamespaceName**: string: A unique identifier for the namespace. You use this identifier to refer to the namespace for any subsequent namespace operations such as deleting or modifying. All alphabetical characters must be lower case. Namespace name should be unique for all namespaces within an AWS account.
* **Tags**: [Tag](#tag)[] (WriteOnly): The list of tags for the namespace.

## LogExport
### Properties

## Namespace
### Properties
* **AdminUsername**: string
* **CreationDate**: string
* **DbName**: string
* **DefaultIamRoleArn**: string
* **IamRoles**: string[]
* **KmsKeyId**: string
* **LogExports**: [LogExport](#logexport)[]
* **NamespaceArn**: string
* **NamespaceId**: string
* **NamespaceName**: string
* **Status**: [NamespaceStatus](#namespacestatus)

## NamespaceStatus
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.RedshiftServerless/WorkgroupProperties
### Properties
* **BaseCapacity**: int (WriteOnly)
* **ConfigParameters**: [ConfigParameter](#configparameter)[] (WriteOnly)
* **EnhancedVpcRouting**: bool (WriteOnly)
* **NamespaceName**: string
* **PubliclyAccessible**: bool (WriteOnly)
* **SecurityGroupIds**: string[] (WriteOnly)
* **SubnetIds**: string[] (WriteOnly)
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **Workgroup**: [Workgroup](#workgroup) (ReadOnly)
* **WorkgroupName**: string

## ConfigParameter
### Properties
* **ParameterKey**: string
* **ParameterValue**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Workgroup
### Properties
* **BaseCapacity**: int
* **ConfigParameters**: [ConfigParameter](#configparameter)[]
* **CreationDate**: string
* **Endpoint**: [Endpoint](#endpoint)
* **EnhancedVpcRouting**: bool
* **NamespaceName**: string
* **PubliclyAccessible**: bool
* **SecurityGroupIds**: string[]
* **Status**: [WorkgroupStatus](#workgroupstatus)
* **SubnetIds**: string[]
* **WorkgroupArn**: string
* **WorkgroupId**: string
* **WorkgroupName**: string

## Endpoint
### Properties
* **Address**: string
* **Port**: int
* **VpcEndpoints**: [VpcEndpoint](#vpcendpoint)[]

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

## WorkgroupStatus
### Properties

