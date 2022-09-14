# AWS.CodeStarConnections @ default

## Resource AWS.CodeStarConnections/Connection@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CodeStarConnections/ConnectionProperties](#awscodestarconnectionsconnectionproperties) (Required): properties of the resource

## AWS.CodeStarConnections/ConnectionProperties
### Properties
* **ConnectionArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.
* **ConnectionName**: string (Required): The name of the connection. Connection names must be unique in an AWS user account.
* **ConnectionStatus**: string (ReadOnly): The current status of the connection.
* **HostArn**: string: The host arn configured to represent the infrastructure where your third-party provider is installed. You must specify either a ProviderType or a HostArn.
* **OwnerAccountId**: string (ReadOnly): The name of the external provider where your third-party code repository is configured. For Bitbucket, this is the account ID of the owner of the Bitbucket repository.
* **ProviderType**: string: The name of the external provider where your third-party code repository is configured. You must specify either a ProviderType or a HostArn.
* **Tags**: [Tag](#tag)[]: Specifies the tags applied to a connection.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

