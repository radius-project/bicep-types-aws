# AWS.BackupGateway @ default

## Resource AWS.BackupGateway/Hypervisor@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BackupGateway/HypervisorProperties](#awsbackupgatewayhypervisorproperties): properties of the resource

## AWS.BackupGateway/HypervisorProperties
### Properties
* **Host**: string
* **HypervisorArn**: string (ReadOnly, Identifier)
* **KmsKeyArn**: string (WriteOnly)
* **LogGroupArn**: string (WriteOnly)
* **Name**: string (WriteOnly)
* **Password**: string (WriteOnly)
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **Username**: string (WriteOnly)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

