# AWS.GlobalAccelerator @ default

## Resource AWS.GlobalAccelerator/Accelerator@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.GlobalAccelerator/AcceleratorProperties](#awsglobalacceleratoracceleratorproperties) (Required): properties of the resource

## Resource AWS.GlobalAccelerator/EndpointGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.GlobalAccelerator/EndpointGroupProperties](#awsglobalacceleratorendpointgroupproperties) (Required): properties of the resource

## Resource AWS.GlobalAccelerator/Listener@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.GlobalAccelerator/ListenerProperties](#awsglobalacceleratorlistenerproperties) (Required): properties of the resource

## AWS.GlobalAccelerator/AcceleratorProperties
### Properties
* **AcceleratorArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the accelerator.
* **DnsName**: string (ReadOnly): The Domain Name System (DNS) name that Global Accelerator creates that points to your accelerator's static IP addresses.
* **Enabled**: bool: Indicates whether an accelerator is enabled. The value is true or false.
* **IpAddresses**: [IpAddress](#ipaddress)[]: The IP addresses from BYOIP Prefix pool.
* **IpAddressType**: string: IP Address type.
* **Ipv4Addresses**: string[] (ReadOnly): The IPv4 addresses assigned to the accelerator.
* **Name**: string (Required): Name of accelerator.
* **Tags**: [Tag](#tag)[]

## IpAddress
### Properties

## Tag
### Properties
* **Key**: string (Required): Key of the tag. Value can be 1 to 127 characters.
* **Value**: string (Required): Value for the tag. Value can be 1 to 255 characters.

## AWS.GlobalAccelerator/EndpointGroupProperties
### Properties
* **EndpointConfigurations**: [EndpointConfiguration](#endpointconfiguration)[]: The list of endpoint objects.
* **EndpointGroupArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the endpoint group
* **EndpointGroupRegion**: string (Required): The name of the AWS Region where the endpoint group is located
* **HealthCheckIntervalSeconds**: int: The time in seconds between each health check for an endpoint. Must be a value of 10 or 30
* **HealthCheckPath**: string
* **HealthCheckPort**: int: The port that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
* **HealthCheckProtocol**: string: The protocol that AWS Global Accelerator uses to check the health of endpoints in this endpoint group.
* **ListenerArn**: string (Required): The Amazon Resource Name (ARN) of the listener
* **PortOverrides**: [PortOverride](#portoverride)[]
* **ThresholdCount**: int: The number of consecutive health checks required to set the state of the endpoint to unhealthy.
* **TrafficDialPercentage**: int: The percentage of traffic to sent to an AWS Region

## EndpointConfiguration
### Properties
* **ClientIPPreservationEnabled**: bool: true if client ip should be preserved
* **EndpointId**: string (Required): Id of the endpoint. For Network/Application Load Balancer this value is the ARN.  For EIP, this value is the allocation ID.  For EC2 instances, this is the EC2 instance ID
* **Weight**: int: The weight for the endpoint.

## PortOverride
### Properties
* **EndpointPort**: [Port](#port) (Required)
* **ListenerPort**: [Port](#port) (Required)

## Port
### Properties

## AWS.GlobalAccelerator/ListenerProperties
### Properties
* **AcceleratorArn**: string (Required): The Amazon Resource Name (ARN) of the accelerator.
* **ClientAffinity**: string: Client affinity lets you direct all requests from a user to the same endpoint.
* **ListenerArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the listener.
* **PortRanges**: [PortRange](#portrange)[] (Required)
* **Protocol**: string (Required): The protocol for the listener.

## PortRange
### Properties
* **FromPort**: [Port](#port) (Required)
* **ToPort**: [Port](#port) (Required)

## Port
### Properties

