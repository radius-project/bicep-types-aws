# AWS.DeviceFarm @ default

## Resource AWS.DeviceFarm/DevicePool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/DevicePoolProperties](#awsdevicefarmdevicepoolproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/InstanceProfileProperties](#awsdevicefarminstanceprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/NetworkProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/NetworkProfileProperties](#awsdevicefarmnetworkprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/ProjectProperties](#awsdevicefarmprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/TestGridProject@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/TestGridProjectProperties](#awsdevicefarmtestgridprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/VPCEConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/VPCEConfigurationProperties](#awsdevicefarmvpceconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.DeviceFarm/DevicePoolProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **MaxDevices**: int
* **Name**: string (Required)
* **ProjectArn**: string (Required)
* **Rules**: [Rule](#rule)[] (Required)
* **Tags**: [Tag](#tag)[]

## AWS.DeviceFarm/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **ExcludeAppPackagesFromCleanup**: string[]
* **Name**: string (Required)
* **PackageCleanup**: bool
* **RebootAfterUse**: bool
* **Tags**: [Tag](#tag)[]

## AWS.DeviceFarm/NetworkProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
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

## AWS.DeviceFarm/ProjectProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DefaultJobTimeoutMinutes**: int
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig)

## AWS.DeviceFarm/TestGridProjectProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig) (WriteOnly)

## AWS.DeviceFarm/VPCEConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ServiceDnsName**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpceConfigurationDescription**: string
* **VpceConfigurationName**: string (Required)
* **VpceServiceName**: string (Required)

## Rule
### Properties
* **Attribute**: string: The rule's stringified attribute.
* **Operator**: string: Specifies how Device Farm compares the rule's attribute to the value.
* **Value**: string: The rule's value.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): An array of security group Ids in your Amazon VPC
* **SubnetIds**: string[] (Required): A array of subnet IDs in your Amazon VPC.
* **VpcId**: string (Required): The ID of the Amazon VPC

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): A list of VPC security group IDs in your Amazon VPC.
* **SubnetIds**: string[] (Required): A list of VPC subnet IDs in your Amazon VPC.
* **VpcId**: string (Required)

