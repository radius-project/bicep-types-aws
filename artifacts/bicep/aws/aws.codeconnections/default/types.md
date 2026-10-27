# AWS.CodeConnections @ default

## Resource AWS.CodeConnections/Connection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeConnections/ConnectionProperties](#awscodeconnectionsconnectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CodeConnections/Host@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeConnections/HostProperties](#awscodeconnectionshostproperties) (Required, Identifier): properties of the resource

## AWS.CodeConnections/ConnectionProperties
### Properties
* **ConnectionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.
* **ConnectionName**: string (Required): The name of the connection. Connection names must be unique in an AWS user account.
* **ConnectionStatus**: string (ReadOnly): The current status of the connection.
* **HostArn**: string: The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.
* **OwnerAccountId**: string (ReadOnly): The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
* **ProviderType**: string: The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.
* **Tags**: [Tag](#tag)[]: Specifies the tags applied to a connection.

## AWS.CodeConnections/HostProperties
### Properties
* **HostArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the host.
* **HostId**: string (ReadOnly): The server-generated unique identifier for the host.
* **Name**: string (Required): The name of the host.
* **ProviderEndpoint**: string (Required): The endpoint of the infrastructure where your provider type is installed.
* **ProviderType**: string (Required): The name of the installed provider to be associated with your connection.
* **Status**: string (ReadOnly): The status of the host.
* **Tags**: [Tag](#tag)[]: Tags to apply to the host.
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## VpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required): The ID of the security group or security groups associated with the Amazon VPC.
* **SubnetIds**: string[] (Required): The ID of the subnet or subnets associated with the Amazon VPC.
* **TlsCertificate**: string: The value of the Transport Layer Security (TLS) certificate associated with the infrastructure where your provider type is installed.
* **VpcId**: string (Required): The ID of the Amazon VPC connected to the infrastructure where your provider type is installed.

