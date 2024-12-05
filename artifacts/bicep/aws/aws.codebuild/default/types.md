# AWS.CodeBuild @ default

## Resource AWS.CodeBuild/Fleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/FleetProperties](#awscodebuildfleetproperties) (Identifier): properties of the resource

## AWS.CodeBuild/FleetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **BaseCapacity**: int
* **ComputeConfiguration**: [ComputeConfiguration](#computeconfiguration)
* **ComputeType**: string
* **EnvironmentType**: string
* **FleetProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration)
* **FleetServiceRole**: string
* **FleetVpcConfig**: [VpcConfig](#vpcconfig)
* **ImageId**: string
* **Name**: string
* **OverflowBehavior**: string
* **ScalingConfiguration**: [ScalingConfigurationInput](#scalingconfigurationinput)
* **Tags**: [Tag](#tag)[]

## ComputeConfiguration
### Properties
* **disk**: int
* **machineType**: string
* **memory**: int
* **vCpu**: int

## FleetProxyRule
### Properties
* **Effect**: string
* **Entities**: string[]
* **Type**: string

## ProxyConfiguration
### Properties
* **DefaultBehavior**: string
* **OrderedProxyRules**: [FleetProxyRule](#fleetproxyrule)[]

## ScalingConfigurationInput
### Properties
* **MaxCapacity**: int
* **ScalingType**: string
* **TargetTrackingScalingConfigs**: [TargetTrackingScalingConfiguration](#targettrackingscalingconfiguration)[]

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## TargetTrackingScalingConfiguration
### Properties
* **MetricType**: string
* **TargetValue**: int

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **Subnets**: string[]
* **VpcId**: string

