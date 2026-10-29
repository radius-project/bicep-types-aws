# AWS.NetworkMonitor @ default

## Resource AWS.NetworkMonitor/Monitor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkMonitor/MonitorProperties](#awsnetworkmonitormonitorproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkMonitor/Probe@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkMonitor/ProbeProperties](#awsnetworkmonitorprobeproperties) (Required, Identifier): properties of the resource

## AWS.NetworkMonitor/MonitorProperties
### Properties
* **AggregationPeriod**: int: The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60.
* **CreatedAt**: string (ReadOnly): The time and date when the monitor was created.
* **ModifiedAt**: string (ReadOnly): The time and date when the monitor was last modified.
* **MonitorArn**: string (ReadOnly, Identifier): The ARN of the monitor.
* **MonitorName**: string (Required): The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 200 characters.
* **State**: string (ReadOnly): The state of the monitor.
* **Tags**: [Tag](#tag)[]: The tags for the monitor.

## AWS.NetworkMonitor/ProbeProperties
### Properties
* **AddressFamily**: string (ReadOnly): The IP address family the probe uses, computed by the service from the source and destination.
* **CreatedAt**: string (ReadOnly): The time and date when the probe was created.
* **Destination**: string (Required): The literal IPv4 or IPv6 address the probe sends traffic to. The service rejects a domain name and a CIDR block.
* **DestinationPort**: int: The port the probe sends traffic to. Applies to the TCP protocol only.
* **ModifiedAt**: string (ReadOnly): The time and date when the probe was last modified.
* **MonitorName**: string (Required, Identifier): The name of the monitor the probe belongs to.
* **PacketSize**: int: The size, in bytes, of the packets the probe sends.
* **ProbeArn**: string (ReadOnly): The ARN of the probe.
* **ProbeId**: string (ReadOnly, Identifier): The ID of the probe.
* **Protocol**: string (Required): The protocol the probe uses.
* **SourceArn**: string (Required): The ARN of the subnet the probe sends traffic from.
* **State**: string (ReadOnly): The state of the probe.
* **Tags**: [Tag](#tag)[]: The tags for the probe.
* **VpcId**: string (ReadOnly): The ID of the VPC containing the probe's source subnet.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

