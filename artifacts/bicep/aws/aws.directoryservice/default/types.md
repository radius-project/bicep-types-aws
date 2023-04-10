# AWS.DirectoryService @ default

## Resource AWS.DirectoryService/SimpleAD@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectoryService/SimpleADProperties](#awsdirectoryservicesimpleadproperties) (Required): properties of the resource

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
* **VpcSettings**: [VpcSettings](#vpcsettings) (Required): VPC settings of the Simple AD directory server in AWS.

## VpcSettings
### Properties
* **SubnetIds**: string[] (Required): The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
* **VpcId**: string (Required): The identifier of the VPC in which to create the directory.

