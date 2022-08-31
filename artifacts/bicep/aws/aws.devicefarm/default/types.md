# AWS.DeviceFarm @ default

## Resource AWS.DeviceFarm/DevicePool@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/DevicePoolProperties](#awsdevicefarmdevicepoolproperties): properties of the resource

## Resource AWS.DeviceFarm/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/InstanceProfileProperties](#awsdevicefarminstanceprofileproperties): properties of the resource

## Resource AWS.DeviceFarm/NetworkProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/NetworkProfileProperties](#awsdevicefarmnetworkprofileproperties): properties of the resource

## Resource AWS.DeviceFarm/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/ProjectProperties](#awsdevicefarmprojectproperties): properties of the resource

## Resource AWS.DeviceFarm/TestGridProject@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/TestGridProjectProperties](#awsdevicefarmtestgridprojectproperties): properties of the resource

## Resource AWS.DeviceFarm/VPCEConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DeviceFarm/VPCEConfigurationProperties](#awsdevicefarmvpceconfigurationproperties): properties of the resource

## AWS.DeviceFarm/DevicePoolProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **MaxDevices**: int
* **Name**: string
* **ProjectArn**: string
* **Rules**: [Rule](#rule)[]
* **Tags**: [Tag](#tag)[]

## Rule
### Properties
* **Attribute**: string: The rule's stringified attribute.
* **Operator**: string: Specifies how Device Farm compares the rule's attribute to the value.
* **Value**: string: The rule's value.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DeviceFarm/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **ExcludeAppPackagesFromCleanup**: string[]
* **Name**: string
* **PackageCleanup**: bool
* **RebootAfterUse**: bool
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DeviceFarm/NetworkProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **DownlinkBandwidthBits**: int
* **DownlinkDelayMs**: int
* **DownlinkJitterMs**: int
* **DownlinkLossPercent**: int
* **Name**: string
* **ProjectArn**: string
* **Tags**: [Tag](#tag)[]
* **UplinkBandwidthBits**: int
* **UplinkDelayMs**: int
* **UplinkJitterMs**: int
* **UplinkLossPercent**: int

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DeviceFarm/ProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **DefaultJobTimeoutMinutes**: int
* **Name**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.DeviceFarm/TestGridProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **Name**: string
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig) (WriteOnly)

## Tag
### Properties
* **Key**: string
* **Value**: string

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]: A list of VPC security group IDs in your Amazon VPC.
* **SubnetIds**: string[]: A list of VPC subnet IDs in your Amazon VPC.
* **VpcId**: string

## AWS.DeviceFarm/VPCEConfigurationProperties
### Properties
* **Arn**: string (ReadOnly)
* **ServiceDnsName**: string
* **Tags**: [Tag](#tag)[]
* **VpceConfigurationDescription**: string
* **VpceConfigurationName**: string
* **VpceServiceName**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

