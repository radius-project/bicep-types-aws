# AWS.Interconnect @ default

## Resource AWS.Interconnect/Connection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Interconnect/ConnectionProperties](#awsinterconnectconnectionproperties) (Required, Identifier): properties of the resource

## AttachPoint
### Properties
* **Arn**: string (Identifier): The ARN of the resource to attach to.
* **DirectConnectGateway**: string: The ID of the Direct Connect Gateway to attach to.

## AWS.Interconnect/ConnectionProperties
### Properties
* **ActivationKey**: string: The activation key for accepting a connection proposal from a partner CSP. Mutually exclusive with EnvironmentId.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the connection.
* **AttachPoint**: [AttachPoint](#attachpoint) (Required): The logical attachment point in your AWS network where the managed connection will be connected.
* **Bandwidth**: string: The bandwidth of the connection (e.g., 50Mbps, 1Gbps). Required when creating a connection through AWS.
* **BillingTier**: int (ReadOnly): The billing tier for the connection.
* **ConnectionId**: string (ReadOnly): The unique identifier for the connection.
* **Description**: string: A description of the connection.
* **EnvironmentId**: string: The ID of the environment for the connection. Required when creating a connection through AWS. Mutually exclusive with ActivationKey.
* **OwnerAccount**: string (ReadOnly): The AWS account ID of the connection owner.
* **Provider**: [Provider](#provider) (ReadOnly): The partner cloud service provider.
* **RemoteAccount**: [Connection_RemoteAccount](#connectionremoteaccount) (WriteOnly): The remote account identifier for the connection. Required when creating a connection through AWS. Replaces RemoteOwnerAccount.
* **RemoteOwnerAccount**: string (WriteOnly): Deprecated. Use RemoteAccount instead. The account ID of the remote owner. Required when creating a connection through AWS.
* **SharedId**: string (ReadOnly): The shared identifier for the connection pairing.
* **State**: string (ReadOnly): The current state of the connection.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (ReadOnly): The type of managed connection.

## Connection_RemoteAccount
### Properties
* **Identifier**: string (Required): The identifier of the remote account.

## Provider
### Properties
* **CloudServiceProvider**: string: The name of the cloud service provider.
* **LastMileProvider**: string: The name of the last mile provider.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

