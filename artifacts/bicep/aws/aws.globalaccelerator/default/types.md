# AWS.GlobalAccelerator @ default

## Resource AWS.GlobalAccelerator/Accelerator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GlobalAccelerator/AcceleratorProperties](#awsglobalacceleratoracceleratorproperties) (Required, Identifier): properties of the resource

## Resource AWS.GlobalAccelerator/CrossAccountAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GlobalAccelerator/CrossAccountAttachmentProperties](#awsglobalacceleratorcrossaccountattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.GlobalAccelerator/EndpointGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GlobalAccelerator/EndpointGroupProperties](#awsglobalacceleratorendpointgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.GlobalAccelerator/Listener@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GlobalAccelerator/ListenerProperties](#awsglobalacceleratorlistenerproperties) (Required, Identifier): properties of the resource

## AWS.GlobalAccelerator/AcceleratorProperties
### Properties
* **AcceleratorArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the accelerator.
* **DnsName**: string (ReadOnly): The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 addresses.
* **DualStackDnsName**: string (ReadOnly): The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IPv4 and IPv6 addresses.
* **Enabled**: bool: Indicates whether an accelerator is enabled. The value is true or false.
* **IpAddresses**: string[]: The IP addresses from BYOIP Prefix pool.
* **IpAddressType**: string: IP Address type.
* **Ipv4Addresses**: string[] (ReadOnly): The IPv4 addresses assigned to the accelerator.
* **Ipv6Addresses**: string[] (ReadOnly): The IPv6 addresses assigned if the accelerator is dualstack
* **Name**: string (Required): Name of accelerator.
* **Tags**: [Tag](#tag)[]

## AWS.GlobalAccelerator/CrossAccountAttachmentProperties
### Properties
* **AttachmentArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the attachment.
* **Name**: string (Required): The Friendly identifier of the attachment.
* **Principals**: string[]: Principals to share the resources with.
* **Resources**: [Resource](#resource)[] (WriteOnly): Resources shared using the attachment.
* **Tags**: [Tag](#tag)[]

## AWS.GlobalAccelerator/EndpointGroupProperties
### Properties
* **EndpointConfigurations**: [EndpointConfiguration](#endpointconfiguration)[] (WriteOnly): The list of endpoint objects.
* **EndpointGroupArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the endpoint group
* **EndpointGroupRegion**: string (Required): The name of the AWS Region where the endpoint group is located
* **HealthCheckIntervalSeconds**: int: The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
* **HealthCheckPath**: string
* **HealthCheckPort**: int: The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
* **HealthCheckProtocol**: string: The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
* **ListenerArn**: string (Required): The Amazon Resource Name (ARN) of the listener
* **PortOverrides**: [PortOverride](#portoverride)[]
* **ThresholdCount**: int: The number of consecutive health checks required to set the state of the endpoint to unhealthy.
* **TrafficDialPercentage**: int: The percentage of traffic to sent to an AWS Region

## AWS.GlobalAccelerator/ListenerProperties
### Properties
* **AcceleratorArn**: string (Required): The Amazon Resource Name (ARN) of the accelerator.
* **ClientAffinity**: string: Client affinity lets you direct all requests from a user to the same endpoint.
* **ListenerArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the listener.
* **PortRanges**: [PortRange](#portrange)[] (Required)
* **Protocol**: string (Required): The protocol for the listener.

## EndpointConfiguration
### Properties
* **AttachmentArn**: string: Attachment ARN that provides access control to the cross account endpoint. Not required for resources hosted in the same account as the endpoint group.
* **ClientIPPreservationEnabled**: bool: true if client ip should be preserved
* **EndpointId**: string (Required): Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
* **Weight**: int: The weight for the endpoint.

## PortOverride
### Properties
* **EndpointPort**: int (Required)
* **ListenerPort**: int (Required)

## PortRange
### Properties
* **FromPort**: int (Required)
* **ToPort**: int (Required)

## Resource
### Properties
* **Cidr**: string
* **EndpointId**: string
* **Region**: string

## Tag
### Properties
* **Key**: string (Required): Key of the tag. Value can be 1 to 127 characters.
* **Value**: string (Required): Value for the tag. Value can be 1 to 255 characters.

## Tag
### Properties
* **Key**: string (Required): Key of the tag. Value can be 1 to 127 characters.
* **Value**: string (Required): Value for the tag. Value can be 1 to 255 characters.

