# AWS.NetworkMonitor @ default

## Resource AWS.NetworkMonitor/Monitor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkMonitor/MonitorProperties](#awsnetworkmonitormonitorproperties) (Required, Identifier): properties of the resource

## AWS.NetworkMonitor/MonitorProperties
### Properties
* **AggregationPeriod**: int: The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either 30 or 60.
* **CreatedAt**: string (ReadOnly): The time and date when the monitor was created.
* **ModifiedAt**: string (ReadOnly): The time and date when the monitor was last modified.
* **MonitorArn**: string (ReadOnly, Identifier): The ARN of the monitor.
* **MonitorName**: string (Required): The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 200 characters.
* **State**: string (ReadOnly): The state of the monitor.
* **Tags**: [Tag](#tag)[]: The tags for the monitor.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

