# AWS.IoTSecureTunneling @ default

## Resource AWS.IoTSecureTunneling/Tunnel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSecureTunneling/TunnelProperties](#awsiotsecuretunnelingtunnelproperties) (Identifier): properties of the resource

## AWS.IoTSecureTunneling/TunnelProperties
### Properties
* **Description**: string: A short text description of the tunnel.
* **DestinationConfig**: [DestinationConfig](#destinationconfig): The destination configuration for the tunnel.
* **Status**: string (ReadOnly): The status of the tunnel. Valid values are OPEN and CLOSED.
* **Tags**: [Tag](#tag)[]: A collection of tag metadata.
* **TimeoutConfig**: [TimeoutConfig](#timeoutconfig): Timeout configuration for the tunnel.
* **TunnelArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the tunnel.
* **TunnelId**: string (ReadOnly): A unique alpha-numeric tunnel ID.

## DestinationConfig
### Properties
* **Services**: string[] (Required): A list of service names that identify the target application.
* **ThingName**: string: The name of the IoT thing to which you want to connect.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## TimeoutConfig
### Properties
* **MaxLifetimeTimeoutMinutes**: int: The maximum amount of time (in minutes) a tunnel can remain open.

