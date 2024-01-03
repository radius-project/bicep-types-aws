# AWS.CodeStarConnections @ default

## Resource AWS.CodeStarConnections/Connection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeStarConnections/ConnectionProperties](#awscodestarconnectionsconnectionproperties) (Required): properties of the resource

## Resource AWS.CodeStarConnections/RepositoryLink@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeStarConnections/RepositoryLinkProperties](#awscodestarconnectionsrepositorylinkproperties) (Required): properties of the resource

## Resource AWS.CodeStarConnections/SyncConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeStarConnections/SyncConfigurationProperties](#awscodestarconnectionssyncconfigurationproperties) (Required): properties of the resource

## AWS.CodeStarConnections/ConnectionProperties
### Properties
* **ConnectionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the  connection. The ARN is used as the connection reference when the connection is shared between AWS services.
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

## AWS.CodeStarConnections/RepositoryLinkProperties
### Properties
* **ConnectionArn**: string (Required): The Amazon Resource Name (ARN) of the CodeStarConnection. The ARN is used as the connection reference when the connection is shared between AWS services.
* **EncryptionKeyArn**: string: The ARN of the KMS key that the customer can optionally specify to use to encrypt RepositoryLink properties. If not specified, a default key will be used.
* **OwnerId**: string (Required): the ID of the entity that owns the repository.
* **ProviderType**: string (ReadOnly): The name of the external provider where your third-party code repository is configured.
* **RepositoryLinkArn**: string (ReadOnly, Identifier): A unique Amazon Resource Name (ARN) to designate the repository link.
* **RepositoryLinkId**: string (ReadOnly): A UUID that uniquely identifies the RepositoryLink.
* **RepositoryName**: string (Required): The repository for which the link is being created.
* **Tags**: [Tag](#tag)[]: Specifies the tags applied to a RepositoryLink.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, , ., /, =, +, and -. 

## AWS.CodeStarConnections/SyncConfigurationProperties
### Properties
* **Branch**: string (Required): The name of the branch of the repository from which resources are to be synchronized,
* **ConfigFile**: string (Required): The source provider repository path of the sync configuration file of the respective SyncType.
* **OwnerId**: string (ReadOnly): the ID of the entity that owns the repository.
* **ProviderType**: string (ReadOnly): The name of the external provider where your third-party code repository is configured.
* **RepositoryLinkId**: string (Required): A UUID that uniquely identifies the RepositoryLink that the SyncConfig is associated with.
* **RepositoryName**: string (ReadOnly): The name of the repository that is being synced to.
* **ResourceName**: string (Required, Identifier): The name of the resource that is being synchronized to the repository.
* **RoleArn**: string (Required): The IAM Role that allows AWS to update CloudFormation stacks based on content in the specified repository.
* **SyncType**: string (Required, Identifier): The type of resource synchronization service that is to be configured, for example, CFN_STACK_SYNC.

