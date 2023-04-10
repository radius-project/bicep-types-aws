# AWS.InternetMonitor @ default

## Resource AWS.InternetMonitor/Monitor@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InternetMonitor/MonitorProperties](#awsinternetmonitormonitorproperties) (Required): properties of the resource

## AWS.InternetMonitor/MonitorProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **MaxCityNetworksToMonitor**: int
* **ModifiedAt**: string (ReadOnly)
* **MonitorArn**: string (ReadOnly)
* **MonitorName**: string (Required, Identifier)
* **ProcessingStatus**: string (ReadOnly)
* **ProcessingStatusInfo**: string (ReadOnly)
* **Resources**: string[]
* **ResourcesToAdd**: string[] (WriteOnly)
* **ResourcesToRemove**: string[] (WriteOnly)
* **Status**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

