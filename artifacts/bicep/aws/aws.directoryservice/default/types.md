# AWS.DirectoryService @ default

## Resource AWS.DirectoryService/MicrosoftAD@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectoryService/MicrosoftADProperties](#awsdirectoryservicemicrosoftadproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectoryService/SimpleAD@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectoryService/SimpleADProperties](#awsdirectoryservicesimpleadproperties) (Required, Identifier): properties of the resource

## AWS.DirectoryService/MicrosoftADProperties
### Properties
* **Alias**: string (ReadOnly): The alias for a directory
* **CreateAlias**: bool: Specifies an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as http://<alias>.awsapps.com. By default, AWS CloudFormation does not create an alias.
* **DirectoryId**: string (ReadOnly, Identifier): Unique identifier for the Microsoft Active Directory
* **DnsIpAddresses**: string[] (ReadOnly): The IP addresses of the DNS servers for the directory, such as [ "172.31.3.154", "172.31.63.203" ].
* **Edition**: string: AWS Managed Microsoft AD is available in two editions: Standard and Enterprise.
* **EnableSso**: bool: Whether to enable single sign-on for a Microsoft Active Directory in AWS. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
* **Name**: string (Required): The fully qualified domain name for the AWS Managed Microsoft AD directory, such as corp.example.com. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
* **Password**: string (WriteOnly): The password for the default administrative user named Admin. If you need to change the password for the administrator account, see the ResetUserPassword API call in the AWS Directory Service API Reference.
* **ShortName**: string: The NetBIOS name for your domain, such as CORP. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, CORP for the directory DNS corp.example.com. 
* **VpcSettings**: [VpcSettings](#vpcsettings) (Required): Specifies the VPC settings of the Microsoft AD directory server in AWS.

## AWS.DirectoryService/SimpleADProperties
### Properties
* **Alias**: string (ReadOnly): The alias for a directory.
* **CreateAlias**: bool: The name of the configuration set.
* **Description**: string: Description for the directory.
* **DirectoryId**: string (ReadOnly, Identifier): The unique identifier for a directory.
* **DnsIpAddresses**: string[] (ReadOnly): The IP addresses of the DNS servers for the directory, such as [ "172.31.3.154", "172.31.63.203" ].
* **EnableSso**: bool: Whether to enable single sign-on for a Simple Active Directory in AWS.
* **Name**: string (Required): The fully qualified domain name for the AWS Managed Simple AD directory.
* **Password**: string (WriteOnly): The password for the default administrative user named Admin.
* **ShortName**: string: The NetBIOS name for your domain.
* **Size**: string (Required): The size of the directory.
* **Tags**: [Tag](#tag)[]
* **VpcSettings**: [VpcSettings](#vpcsettings) (Required): VPC settings of the Simple AD directory server in AWS.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag.

## VpcSettings
### Properties
* **SubnetIds**: string[] (Required): The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
* **VpcId**: string (Required): The identifier of the VPC in which to create the directory.

## VpcSettings
### Properties
* **SubnetIds**: string[] (Required): The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
* **VpcId**: string (Required): The identifier of the VPC in which to create the directory.

