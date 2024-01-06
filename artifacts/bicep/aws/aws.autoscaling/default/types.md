# AWS.AutoScaling @ default

## Resource AWS.AutoScaling/AutoScalingGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AutoScaling/AutoScalingGroupProperties](#awsautoscalingautoscalinggroupproperties) (Required): properties of the resource

## Resource AWS.AutoScaling/LifecycleHook@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AutoScaling/LifecycleHookProperties](#awsautoscalinglifecyclehookproperties) (Required): properties of the resource

## Resource AWS.AutoScaling/ScalingPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AutoScaling/ScalingPolicyProperties](#awsautoscalingscalingpolicyproperties) (Required): properties of the resource

## Resource AWS.AutoScaling/ScheduledAction@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AutoScaling/ScheduledActionProperties](#awsautoscalingscheduledactionproperties) (Required): properties of the resource

## Resource AWS.AutoScaling/WarmPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AutoScaling/WarmPoolProperties](#awsautoscalingwarmpoolproperties) (Required): properties of the resource

## AWS.AutoScaling/AutoScalingGroupProperties
### Properties
* **AutoScalingGroupName**: string (Identifier)
* **AvailabilityZones**: string[]
* **CapacityRebalance**: bool
* **Context**: string
* **Cooldown**: string
* **DefaultInstanceWarmup**: int
* **DesiredCapacity**: string
* **DesiredCapacityType**: string
* **HealthCheckGracePeriod**: int
* **HealthCheckType**: string
* **InstanceId**: string (WriteOnly)
* **InstanceMaintenancePolicy**: [InstanceMaintenancePolicy](#instancemaintenancepolicy)
* **LaunchConfigurationName**: string
* **LaunchTemplate**: [LaunchTemplateSpecification](#launchtemplatespecification)
* **LifecycleHookSpecificationList**: [LifecycleHookSpecification](#lifecyclehookspecification)[]
* **LoadBalancerNames**: string[]
* **MaxInstanceLifetime**: int
* **MaxSize**: string (Required)
* **MetricsCollection**: [MetricsCollection](#metricscollection)[]
* **MinSize**: string (Required)
* **MixedInstancesPolicy**: [MixedInstancesPolicy](#mixedinstancespolicy)
* **NewInstancesProtectedFromScaleIn**: bool
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration)
* **NotificationConfigurations**: [NotificationConfiguration](#notificationconfiguration)[]
* **PlacementGroup**: string
* **ServiceLinkedRoleARN**: string
* **Tags**: [TagProperty](#tagproperty)[]
* **TargetGroupARNs**: string[]
* **TerminationPolicies**: string[]
* **VPCZoneIdentifier**: string[]

## InstanceMaintenancePolicy
### Properties
* **MaxHealthyPercentage**: int
* **MinHealthyPercentage**: int

## LaunchTemplateSpecification
### Properties
* **LaunchTemplateId**: string
* **LaunchTemplateName**: string
* **Version**: string (Required)

## LifecycleHookSpecification
### Properties
* **DefaultResult**: string
* **HeartbeatTimeout**: int
* **LifecycleHookName**: string (Required)
* **LifecycleTransition**: string (Required)
* **NotificationMetadata**: string
* **NotificationTargetARN**: string
* **RoleARN**: string

## MetricsCollection
### Properties
* **Granularity**: string (Required)
* **Metrics**: string[]

## MixedInstancesPolicy
### Properties
* **InstancesDistribution**: [InstancesDistribution](#instancesdistribution)
* **LaunchTemplate**: [LaunchTemplate](#launchtemplate) (Required)

## InstancesDistribution
### Properties
* **OnDemandAllocationStrategy**: string
* **OnDemandBaseCapacity**: int
* **OnDemandPercentageAboveBaseCapacity**: int
* **SpotAllocationStrategy**: string
* **SpotInstancePools**: int
* **SpotMaxPrice**: string

## LaunchTemplate
### Properties
* **LaunchTemplateSpecification**: [LaunchTemplateSpecification](#launchtemplatespecification) (Required)
* **Overrides**: [LaunchTemplateOverrides](#launchtemplateoverrides)[]

## LaunchTemplateOverrides
### Properties
* **InstanceRequirements**: [InstanceRequirements](#instancerequirements)
* **InstanceType**: string
* **LaunchTemplateSpecification**: [LaunchTemplateSpecification](#launchtemplatespecification)
* **WeightedCapacity**: string

## InstanceRequirements
### Properties
* **AcceleratorCount**: [AcceleratorCountRequest](#acceleratorcountrequest)
* **AcceleratorManufacturers**: string[]
* **AcceleratorNames**: string[]
* **AcceleratorTotalMemoryMiB**: [AcceleratorTotalMemoryMiBRequest](#acceleratortotalmemorymibrequest)
* **AcceleratorTypes**: string[]
* **AllowedInstanceTypes**: string[]
* **BareMetal**: string
* **BaselineEbsBandwidthMbps**: [BaselineEbsBandwidthMbpsRequest](#baselineebsbandwidthmbpsrequest)
* **BurstablePerformance**: string
* **CpuManufacturers**: string[]
* **ExcludedInstanceTypes**: string[]
* **InstanceGenerations**: string[]
* **LocalStorage**: string
* **LocalStorageTypes**: string[]
* **MemoryGiBPerVCpu**: [MemoryGiBPerVCpuRequest](#memorygibpervcpurequest)
* **MemoryMiB**: [MemoryMiBRequest](#memorymibrequest) (Required)
* **NetworkBandwidthGbps**: [NetworkBandwidthGbpsRequest](#networkbandwidthgbpsrequest)
* **NetworkInterfaceCount**: [NetworkInterfaceCountRequest](#networkinterfacecountrequest)
* **OnDemandMaxPricePercentageOverLowestPrice**: int
* **RequireHibernateSupport**: bool
* **SpotMaxPricePercentageOverLowestPrice**: int
* **TotalLocalStorageGB**: [TotalLocalStorageGBRequest](#totallocalstoragegbrequest)
* **VCpuCount**: [VCpuCountRequest](#vcpucountrequest) (Required)

## AcceleratorCountRequest
### Properties
* **Max**: int
* **Min**: int

## AcceleratorTotalMemoryMiBRequest
### Properties
* **Max**: int
* **Min**: int

## BaselineEbsBandwidthMbpsRequest
### Properties
* **Max**: int
* **Min**: int

## MemoryGiBPerVCpuRequest
### Properties
* **Max**: int
* **Min**: int

## MemoryMiBRequest
### Properties
* **Max**: int
* **Min**: int

## NetworkBandwidthGbpsRequest
### Properties
* **Max**: int
* **Min**: int

## NetworkInterfaceCountRequest
### Properties
* **Max**: int
* **Min**: int

## TotalLocalStorageGBRequest
### Properties
* **Max**: int
* **Min**: int

## VCpuCountRequest
### Properties
* **Max**: int
* **Min**: int

## NotificationConfiguration
### Properties
* **NotificationTypes**: string[]
* **TopicARN**: string | string[] (Required)

## TagProperty
### Properties
* **Key**: string (Required)
* **PropagateAtLaunch**: bool (Required)
* **Value**: string (Required)

## AWS.AutoScaling/LifecycleHookProperties
### Properties
* **AutoScalingGroupName**: string (Required, Identifier): The name of the Auto Scaling group for the lifecycle hook.
* **DefaultResult**: string: The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The valid values are CONTINUE and ABANDON (default).
* **HeartbeatTimeout**: int: The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.
* **LifecycleHookName**: string (Identifier): The name of the lifecycle hook.
* **LifecycleTransition**: string (Required): The instance state to which you want to attach the lifecycle hook.
* **NotificationMetadata**: string: Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.
* **NotificationTargetARN**: string: The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.
* **RoleARN**: string: The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.

## AWS.AutoScaling/ScalingPolicyProperties
### Properties
* **AdjustmentType**: string: Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
* **Arn**: string (ReadOnly, Identifier): The ARN of the AutoScaling scaling policy
* **AutoScalingGroupName**: string (Required): The name of the Auto Scaling group.
* **Cooldown**: string: The duration of the policy's cooldown period, in seconds. When a cooldown period is specified here, it overrides the default cooldown period defined for the Auto Scaling group.
* **EstimatedInstanceWarmup**: int: The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. If not provided, the default is to use the value from the default cooldown period for the Auto Scaling group. Valid only if the policy type is TargetTrackingScaling or StepScaling.
* **MetricAggregationType**: string: The aggregation type for the CloudWatch metrics. The valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average. Valid only if the policy type is StepScaling.
* **MinAdjustmentMagnitude**: int: The minimum value to scale by when the adjustment type is PercentChangeInCapacity. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a MinAdjustmentMagnitude of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a MinAdjustmentMagnitude of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
* **PolicyName**: string (ReadOnly)
* **PolicyType**: string: One of the following policy types: TargetTrackingScaling, StepScaling, SimpleScaling (default), PredictiveScaling
* **PredictiveScalingConfiguration**: [PredictiveScalingConfiguration](#predictivescalingconfiguration): A predictive scaling policy. Includes support for predefined metrics only.
* **ScalingAdjustment**: int: The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value. Required if the policy type is SimpleScaling. (Not used with any other policy type.)
* **StepAdjustments**: [StepAdjustment](#stepadjustment)[]: A set of adjustments that enable you to scale based on the size of the alarm breach. Required if the policy type is StepScaling. (Not used with any other policy type.)
* **TargetTrackingConfiguration**: [TargetTrackingConfiguration](#targettrackingconfiguration): A target tracking scaling policy. Includes support for predefined or customized metrics.

## PredictiveScalingConfiguration
### Properties
* **MaxCapacityBreachBehavior**: string
* **MaxCapacityBuffer**: int
* **MetricSpecifications**: [PredictiveScalingMetricSpecification](#predictivescalingmetricspecification)[] (Required)
* **Mode**: string
* **SchedulingBufferTime**: int

## PredictiveScalingMetricSpecification
### Properties
* **CustomizedCapacityMetricSpecification**: [PredictiveScalingCustomizedCapacityMetric](#predictivescalingcustomizedcapacitymetric)
* **CustomizedLoadMetricSpecification**: [PredictiveScalingCustomizedLoadMetric](#predictivescalingcustomizedloadmetric)
* **CustomizedScalingMetricSpecification**: [PredictiveScalingCustomizedScalingMetric](#predictivescalingcustomizedscalingmetric)
* **PredefinedLoadMetricSpecification**: [PredictiveScalingPredefinedLoadMetric](#predictivescalingpredefinedloadmetric)
* **PredefinedMetricPairSpecification**: [PredictiveScalingPredefinedMetricPair](#predictivescalingpredefinedmetricpair)
* **PredefinedScalingMetricSpecification**: [PredictiveScalingPredefinedScalingMetric](#predictivescalingpredefinedscalingmetric)
* **TargetValue**: int (Required)

## PredictiveScalingCustomizedCapacityMetric
### Properties
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[] (Required)

## MetricDataQuery
### Properties
* **Expression**: string
* **Id**: string (Required)
* **Label**: string
* **MetricStat**: [MetricStat](#metricstat)
* **ReturnData**: bool

## MetricStat
### Properties
* **Metric**: [Metric](#metric) (Required)
* **Stat**: string (Required)
* **Unit**: string

## Metric
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **MetricName**: string (Required)
* **Namespace**: string (Required)

## MetricDimension
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## PredictiveScalingCustomizedLoadMetric
### Properties
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[] (Required)

## PredictiveScalingCustomizedScalingMetric
### Properties
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[] (Required)

## PredictiveScalingPredefinedLoadMetric
### Properties
* **PredefinedMetricType**: string (Required)
* **ResourceLabel**: string

## PredictiveScalingPredefinedMetricPair
### Properties
* **PredefinedMetricType**: string (Required)
* **ResourceLabel**: string

## PredictiveScalingPredefinedScalingMetric
### Properties
* **PredefinedMetricType**: string (Required)
* **ResourceLabel**: string

## StepAdjustment
### Properties
* **MetricIntervalLowerBound**: int
* **MetricIntervalUpperBound**: int
* **ScalingAdjustment**: int (Required)

## TargetTrackingConfiguration
### Properties
* **CustomizedMetricSpecification**: [CustomizedMetricSpecification](#customizedmetricspecification)
* **DisableScaleIn**: bool
* **PredefinedMetricSpecification**: [PredefinedMetricSpecification](#predefinedmetricspecification)
* **TargetValue**: int (Required)

## CustomizedMetricSpecification
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **MetricName**: string (Required)
* **Namespace**: string (Required)
* **Statistic**: string (Required)
* **Unit**: string

## PredefinedMetricSpecification
### Properties
* **PredefinedMetricType**: string (Required)
* **ResourceLabel**: string

## AWS.AutoScaling/ScheduledActionProperties
### Properties
* **AutoScalingGroupName**: string (Required, Identifier): The name of the Auto Scaling group.
* **DesiredCapacity**: int: The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
* **EndTime**: string: The latest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
* **MaxSize**: int: The minimum size of the Auto Scaling group.
* **MinSize**: int: The minimum size of the Auto Scaling group.
* **Recurrence**: string: The recurring schedule for the action, in Unix cron syntax format. When StartTime and EndTime are specified with Recurrence , they form the boundaries of when the recurring action starts and stops.
* **ScheduledActionName**: string (ReadOnly, Identifier): Auto-generated unique identifier
* **StartTime**: string: The earliest scheduled start time to return. If scheduled action names are provided, this parameter is ignored.
* **TimeZone**: string: The time zone for the cron expression.

## AWS.AutoScaling/WarmPoolProperties
### Properties
* **AutoScalingGroupName**: string (Required, Identifier)
* **InstanceReusePolicy**: [InstanceReusePolicy](#instancereusepolicy)
* **MaxGroupPreparedCapacity**: int
* **MinSize**: int
* **PoolState**: string

## InstanceReusePolicy
### Properties
* **ReuseOnScaleIn**: bool

