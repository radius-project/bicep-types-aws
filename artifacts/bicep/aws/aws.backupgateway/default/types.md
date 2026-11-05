# AWS.BackupGateway @ default

## Resource AWS.BackupGateway/Gateway@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BackupGateway/GatewayProperties](#awsbackupgatewaygatewayproperties) (Identifier): properties of the resource

## Resource AWS.BackupGateway/Hypervisor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BackupGateway/HypervisorProperties](#awsbackupgatewayhypervisorproperties) (Identifier): properties of the resource

## Resource AWS.BackupGateway/VirtualMachine@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BackupGateway/VirtualMachineProperties](#awsbackupgatewayvirtualmachineproperties) (Identifier): properties of the resource

## AWS.BackupGateway/GatewayProperties
### Properties
* **DeprecationDate**: string (ReadOnly): The date on which the gateway's current software version stops being supported.
* **GatewayArn**: string (Identifier): The Amazon Resource Name (ARN) of the gateway.
* **GatewayDisplayName**: string: The display name given to the gateway when it was activated.
* **GatewayId**: string (ReadOnly): The service-assigned identifier of the gateway, which is the resource path segment of its ARN.
* **GatewayType**: string: The type of the gateway.
* **HypervisorId**: string (ReadOnly): The identifier of the hypervisor the gateway is associated with, when the gateway has been associated with one.
* **LastSeenTime**: string (ReadOnly): The time when the gateway last contacted the AWS Backup Gateway service.
* **MaintenanceStartTime**: [Gateway_MaintenanceStartTime](#gatewaymaintenancestarttime) (ReadOnly): The recurring maintenance window during which the gateway applies software updates.
* **NextUpdateAvailabilityTime**: string (ReadOnly): The time at which the next software update will become available for the gateway.
* **SoftwareVersion**: string (ReadOnly): The version of the software running on the gateway appliance.
* **Tags**: [Gateway_Tags](#gatewaytags)[]: The tags assigned to the gateway.
* **VpcEndpoint**: string (ReadOnly): The DNS name of the VPC endpoint the gateway was activated through.

## AWS.BackupGateway/HypervisorProperties
### Properties
* **Host**: string
* **HypervisorArn**: string (ReadOnly, Identifier)
* **KmsKeyArn**: string (WriteOnly)
* **LogGroupArn**: string (WriteOnly)
* **Name**: string (WriteOnly)
* **Password**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **Username**: string (WriteOnly)

## AWS.BackupGateway/VirtualMachineProperties
### Properties
* **HostName**: string (ReadOnly): The host name of the virtual machine.
* **HypervisorId**: string (ReadOnly): The ID of the virtual machine's hypervisor.
* **Name**: string (ReadOnly): The name of the virtual machine.
* **Path**: string (ReadOnly): The path of the virtual machine.
* **ResourceArn**: string (Identifier): The Amazon Resource Name (ARN) of the virtual machine.
* **Tags**: [Tag](#tag)[] (ReadOnly): The tags associated with the virtual machine.
* **VmwareTags**: [VmwareTag](#vmwaretag)[] (ReadOnly): The VMware tags associated with the virtual machine.

## Gateway_MaintenanceStartTime
### Properties
* **DayOfMonth**: int: The day of the month when the maintenance window starts, in the gateway's time zone.
* **DayOfWeek**: int: The day of the week when the maintenance window starts, in the gateway's time zone, where 0 is Sunday and 6 is Saturday.
* **HourOfDay**: int (Required): The hour of the day when the maintenance window starts, in the gateway's time zone.
* **MinuteOfHour**: int (Required): The minute of the hour when the maintenance window starts, in the gateway's time zone.

## Gateway_Tags
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## VmwareTag
### Properties
* **VmwareCategory**: string: The category of the VMware tag.
* **VmwareTagDescription**: string: The user-defined description of the VMware tag.
* **VmwareTagName**: string: The user-defined name of the VMware tag.

