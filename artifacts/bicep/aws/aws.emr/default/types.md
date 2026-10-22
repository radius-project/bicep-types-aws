# AWS.EMR @ default

## Resource AWS.EMR/InstanceFleetConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/InstanceFleetConfigProperties](#awsemrinstancefleetconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/InstanceGroupConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/InstanceGroupConfigProperties](#awsemrinstancegroupconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/Studio@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/StudioProperties](#awsemrstudioproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/StudioSessionMapping@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/StudioSessionMappingProperties](#awsemrstudiosessionmappingproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/WALWorkspace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/WALWorkspaceProperties](#awsemrwalworkspaceproperties) (Identifier): properties of the resource

## AppConfiguration
### Properties
* **Classification**: string
* **ConfigurationProperties**: [InstanceGroupConfig_ConfigurationProperties](#instancegroupconfigconfigurationproperties)
* **Configurations**: [AppConfiguration](#appconfiguration)[]

## ApplicationConfiguration
### Properties
* **Classification**: string: The classification within a configuration.
* **ConfigurationProperties**: [InstanceFleetConfig_ConfigurationProperties](#instancefleetconfigconfigurationproperties): Within a configuration classification, a set of properties that represent the settings that you want to change in the configuration file.
* **Configurations**: [ApplicationConfiguration](#applicationconfiguration)[]: A list of additional configurations to apply within a configuration object.

## AutoScalingPolicy
### Properties
* **Constraints**: [ScalingConstraints](#scalingconstraints) (Required)
* **Rules**: [ScalingRule](#scalingrule)[] (Required)

## AWS.EMR/InstanceFleetConfigProperties
### Properties
* **ClusterId**: string (Required, Identifier): The unique identifier of the EMR cluster.
* **InstanceFleetId**: string (ReadOnly, Identifier): The unique identifier for instance fleet for specific cluster
* **InstanceFleetType**: string (Required): The node type that the instance fleet hosts.
* **InstanceTypeConfigs**: [InstanceTypeConfig](#instancetypeconfig)[] (WriteOnly): InstanceTypeConfigs determine the EC2 instances that Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
* **LaunchSpecifications**: [InstanceFleetProvisioningSpecifications](#instancefleetprovisioningspecifications): The launch specification for the instance fleet.
* **Name**: string: The friendly name of the instance fleet.
* **ResizeSpecifications**: [InstanceFleetResizingSpecifications](#instancefleetresizingspecifications): The resize specification for the instance fleet.
* **TargetOnDemandCapacity**: int: The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
* **TargetSpotCapacity**: int: The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.

## AWS.EMR/InstanceGroupConfigProperties
### Properties
* **AutoScalingPolicy**: [AutoScalingPolicy](#autoscalingpolicy)
* **BidPrice**: string
* **Configurations**: [AppConfiguration](#appconfiguration)[]
* **CustomAmiId**: string
* **EbsConfiguration**: [EbsConfiguration](#ebsconfiguration)
* **InstanceCount**: int (Required)
* **InstanceGroupId**: string (ReadOnly, Identifier)
* **InstanceRole**: string (Required)
* **InstanceType**: string (Required)
* **JobFlowId**: string (Required, Identifier)
* **Market**: string
* **Name**: string

## AWS.EMR/StudioProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the EMR Studio.
* **AuthMode**: string (Required): Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
* **DefaultS3Location**: string (Required): The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
* **Description**: string: A detailed description of the Studio.
* **EncryptionKeyArn**: string: The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.
* **EngineSecurityGroupId**: string (Required): The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
* **IdcInstanceArn**: string: The ARN of the IAM Identity Center instance to create the Studio application.
* **IdcUserAssignment**: string: Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.
* **IdpAuthUrl**: string: Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
* **IdpRelayStateParameterName**: string: The name of relay state parameter for external Identity Provider.
* **Name**: string (Required): A descriptive name for the Amazon EMR Studio.
* **ServiceRole**: string (Required): The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
* **StudioId**: string (ReadOnly, Identifier): The ID of the EMR Studio.
* **SubnetIds**: string[] (Required): A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
* **Tags**: [Tag](#tag)[]: A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
* **TrustedIdentityPropagationEnabled**: bool: A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.
* **Url**: string (ReadOnly): The unique Studio access URL.
* **UserRole**: string: The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.
* **VpcId**: string (Required): The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
* **WorkspaceSecurityGroupId**: string (Required): The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

## AWS.EMR/StudioSessionMappingProperties
### Properties
* **IdentityName**: string (Required, Identifier): The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
* **IdentityType**: string (Required, Identifier): Specifies whether the identity to map to the Studio is a user or a group.
* **SessionPolicyArn**: string (Required): The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.
* **StudioId**: string (Required, Identifier): The ID of the Amazon EMR Studio to which the user or group will be mapped.

## AWS.EMR/WALWorkspaceProperties
### Properties
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WALWorkspaceName**: string (Identifier): The name of the emrwal container

## CloudWatchAlarmDefinition
### Properties
* **ComparisonOperator**: string (Required)
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **EvaluationPeriods**: int
* **MetricName**: string (Required)
* **Namespace**: string
* **Period**: int (Required)
* **Statistic**: string
* **Threshold**: int (Required)
* **Unit**: string

## EbsBlockDeviceConfig
### Properties
* **VolumeSpecification**: [VolumeSpecification](#volumespecification) (Required): EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
* **VolumesPerInstance**: int: Use of this property can confuse CloudFormation drift detection. The EbsBlockDeviceConfigs read from the system may return a list with one entry per volume, replacing any entry specified in the template with a VolumesPerInstance greater than one by that many entries containing only the VolumeSpecification. Thus to avoid false drift detection, it is recommended to supply repeated entries in EbsBlockDeviceConfigs for any VolumeSpecification which is intended to be repeated and not to use this property.


## EbsBlockDeviceConfig
### Properties
* **VolumeSpecification**: [VolumeSpecification](#volumespecification) (Required)
* **VolumesPerInstance**: int: Use of this property can confuse CloudFormation drift detection. The EbsBlockDeviceConfigs read from the system may return a list with one entry per volume, replacing any entry specified in the template with a VolumesPerInstance greater than one by that many entries containing only the VolumeSpecification. Thus to avoid false drift detection, it is recommended to supply repeated entries in EbsBlockDeviceConfigs for any VolumeSpecification which is intended to be repeated and not to use this property.


## EbsConfiguration
### Properties
* **EbsBlockDeviceConfigs**: [EbsBlockDeviceConfig](#ebsblockdeviceconfig)[]: An array of Amazon EBS volume specifications attached to a cluster instance.
* **EbsOptimized**: bool: Indicates whether an Amazon EBS volume is EBS-optimized.

## EbsConfiguration
### Properties
* **EbsBlockDeviceConfigs**: [EbsBlockDeviceConfig](#ebsblockdeviceconfig)[] (WriteOnly)
* **EbsOptimized**: bool

## InstanceFleetConfig_ConfigurationProperties
### Properties

## InstanceFleetProvisioningSpecifications
### Properties
* **OnDemandSpecification**: [OnDemandProvisioningSpecification](#ondemandprovisioningspecification): The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy.
* **SpotSpecification**: [SpotProvisioningSpecification](#spotprovisioningspecification): The launch specification for Spot instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.

## InstanceFleetResizingSpecifications
### Properties
* **OnDemandResizeSpecification**: [OnDemandResizingSpecification](#ondemandresizingspecification): The resize specification for On-Demand Instances in the instance fleet, which contains the allocation strategy, capacity reservation options, and the resize timeout period.
* **SpotResizeSpecification**: [SpotResizingSpecification](#spotresizingspecification): The resize specification for Spot Instances in the instance fleet, which contains the allocation strategy and the resize timeout period.

## InstanceGroupConfig_ConfigurationProperties
### Properties

## InstanceTypeConfig
### Properties
* **BidPrice**: string: The bid price for each Amazon EC2 Spot Instance type as defined by InstanceType. Expressed in USD. If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
* **BidPriceAsPercentageOfOnDemandPrice**: int: The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot Instance as defined by InstanceType. Expressed as a number (for example, 20 specifies 20%). If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
* **Configurations**: [ApplicationConfiguration](#applicationconfiguration)[]: An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.
* **CustomAmiId**: string: The custom AMI ID to use for the instance type.
* **EbsConfiguration**: [EbsConfiguration](#ebsconfiguration): The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by InstanceType.
* **InstanceType**: string (Required): An Amazon EC2 instance type, such as m3.xlarge.
* **Priority**: int: The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type.
* **WeightedCapacity**: int: The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.

## MetricDimension
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## OnDemandCapacityReservationOptions
### Properties
* **CapacityReservationPreference**: string: Indicates the instance's Capacity Reservation preferences.
* **CapacityReservationResourceGroupArn**: string: The ARN of the Capacity Reservation resource group in which to run the instance.
* **UsageStrategy**: string: Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.

## OnDemandProvisioningSpecification
### Properties
* **AllocationStrategy**: string (Required): Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is lowest-price (the default), which launches the lowest price first.
* **CapacityReservationOptions**: [OnDemandCapacityReservationOptions](#ondemandcapacityreservationoptions)

## OnDemandResizingSpecification
### Properties
* **AllocationStrategy**: string: Specifies the allocation strategy to use to launch On-Demand instances during a resize. The default is lowest-price.
* **CapacityReservationOptions**: [OnDemandCapacityReservationOptions](#ondemandcapacityreservationoptions): Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
* **TimeoutDurationMinutes**: int: On-Demand resize timeout in minutes.

## ScalingAction
### Properties
* **Market**: string
* **SimpleScalingPolicyConfiguration**: [SimpleScalingPolicyConfiguration](#simplescalingpolicyconfiguration) (Required)

## ScalingConstraints
### Properties
* **MaxCapacity**: int (Required)
* **MinCapacity**: int (Required)

## ScalingRule
### Properties
* **Action**: [ScalingAction](#scalingaction) (Required)
* **Description**: string
* **Name**: string (Required)
* **Trigger**: [ScalingTrigger](#scalingtrigger) (Required)

## ScalingTrigger
### Properties
* **CloudWatchAlarmDefinition**: [CloudWatchAlarmDefinition](#cloudwatchalarmdefinition) (Required)

## SimpleScalingPolicyConfiguration
### Properties
* **AdjustmentType**: string
* **CoolDown**: int
* **ScalingAdjustment**: int (Required)

## SpotProvisioningSpecification
### Properties
* **AllocationStrategy**: string: Specifies one of the following strategies to launch Spot Instance fleets: price-capacity-optimized, capacity-optimized, lowest-price, or diversified
* **BlockDurationMinutes**: int: The defined duration for Spot Instances (also known as Spot blocks) in minutes. When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360.
* **TimeoutAction**: string (Required): The action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are TERMINATE_CLUSTER and SWITCH_TO_ON_DEMAND. SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
* **TimeoutDurationMinutes**: int (Required): The Spot provisioning timeout period in minutes. If Spot Instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.

## SpotResizingSpecification
### Properties
* **AllocationStrategy**: string: Specifies the allocation strategy to use to launch Spot instances during a resize.
* **TimeoutDurationMinutes**: int: Spot resize timeout in minutes.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## VolumeSpecification
### Properties
* **Iops**: int: The number of I/O operations per second (IOPS) that the volume supports.
* **SizeInGB**: int (Required): The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
* **Throughput**: int: The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
* **VolumeType**: string (Required): The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and standard.

## VolumeSpecification
### Properties
* **Iops**: int
* **SizeInGB**: int (Required)
* **Throughput**: int
* **VolumeType**: string (Required)

