# AWS.DeviceFarm @ default

## Resource AWS.DeviceFarm/DevicePool@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/DevicePoolProperties](#awsdevicefarmdevicepoolproperties) (Required): properties of the resource

## Resource AWS.DeviceFarm/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/InstanceProfileProperties](#awsdevicefarminstanceprofileproperties) (Required): properties of the resource

## Resource AWS.DeviceFarm/NetworkProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/NetworkProfileProperties](#awsdevicefarmnetworkprofileproperties) (Required): properties of the resource

## Resource AWS.DeviceFarm/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/ProjectProperties](#awsdevicefarmprojectproperties) (Required): properties of the resource

## Resource AWS.DeviceFarm/TestGridProject@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/TestGridProjectProperties](#awsdevicefarmtestgridprojectproperties) (Required): properties of the resource

## Resource AWS.DeviceFarm/VPCEConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/VPCEConfigurationProperties](#awsdevicefarmvpceconfigurationproperties) (Required): properties of the resource

## AWS.DeviceFarm/DevicePoolProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **MaxDevices**: int
* **Name**: string (Required)
* **ProjectArn**: string (Required)
* **Rules**: [Rule](#rule)[] (Required)
* **Tags**: [Tag](#tag)[]

## Rule
### Properties
* **Attribute**: string: The rule's stringified attribute.
* **Operator**: string: Specifies how Device Farm compares the rule's attribute to the value.
* **Value**: string: The rule's value.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.DeviceFarm/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **ExcludeAppPackagesFromCleanup**: string[]
* **Name**: string (Required)
* **PackageCleanup**: bool
* **RebootAfterUse**: bool
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.DeviceFarm/NetworkProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **DownlinkBandwidthBits**: int
* **DownlinkDelayMs**: int
* **DownlinkJitterMs**: int
* **DownlinkLossPercent**: int
* **Name**: string (Required)
* **ProjectArn**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UplinkBandwidthBits**: int
* **UplinkDelayMs**: int
* **UplinkJitterMs**: int
* **UplinkLossPercent**: int

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.DeviceFarm/ProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **DefaultJobTimeoutMinutes**: int
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.DeviceFarm/TestGridProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig) (WriteOnly)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): A list of VPC security group IDs in your Amazon VPC.
* **SubnetIds**: string[] (Required): A list of VPC subnet IDs in your Amazon VPC.
* **VpcId**: string (Required)

## AWS.DeviceFarm/VPCEConfigurationProperties
### Properties
* **Arn**: string (ReadOnly)
* **ServiceDnsName**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpceConfigurationDescription**: string
* **VpceConfigurationName**: string (Required)
* **VpceServiceName**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

