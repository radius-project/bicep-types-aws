# AWS.AutoScaling @ default

## Resource AWS.AutoScaling/LifecycleHook@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AutoScaling/LifecycleHookProperties](#awsautoscalinglifecyclehookproperties): properties of the resource

## Resource AWS.AutoScaling/ScalingPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AutoScaling/ScalingPolicyProperties](#awsautoscalingscalingpolicyproperties): properties of the resource

## Resource AWS.AutoScaling/WarmPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AutoScaling/WarmPoolProperties](#awsautoscalingwarmpoolproperties): properties of the resource

## AWS.AutoScaling/LifecycleHookProperties
### Properties
* **AutoScalingGroupName**: string: The name of the Auto Scaling group for the lifecycle hook.
* **DefaultResult**: string: The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The valid values are CONTINUE and ABANDON (default).
* **HeartbeatTimeout**: int: The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from 30 to 7200 seconds. The default value is 3600 seconds (1 hour). If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the DefaultResult property.
* **LifecycleHookName**: string: The name of the lifecycle hook.
* **LifecycleTransition**: string: The instance state to which you want to attach the lifecycle hook.
* **NotificationMetadata**: string: Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.
* **NotificationTargetARN**: string: The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in the transition state for the lifecycle hook. You can specify an Amazon SQS queue or an Amazon SNS topic. The notification message includes the following information: lifecycle action token, user account ID, Auto Scaling group name, lifecycle hook name, instance ID, lifecycle transition, and notification metadata.
* **RoleARN**: string: The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target, for example, an Amazon SNS topic or an Amazon SQS queue.

## AWS.AutoScaling/ScalingPolicyProperties
### Properties
* **AdjustmentType**: string: Specifies how the scaling adjustment is interpreted. The valid values are ChangeInCapacity, ExactCapacity, and PercentChangeInCapacity.
* **Arn**: string (ReadOnly): The ARN of the AutoScaling scaling policy
* **AutoScalingGroupName**: string: The name of the Auto Scaling group.
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
* **MetricSpecifications**: [PredictiveScalingMetricSpecification](#predictivescalingmetricspecification)[]
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
* **TargetValue**: int

## PredictiveScalingCustomizedCapacityMetric
### Properties
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[]

## MetricDataQuery
### Properties
* **Expression**: string
* **Id**: string
* **Label**: string
* **MetricStat**: [MetricStat](#metricstat)
* **ReturnData**: bool

## MetricStat
### Properties
* **Metric**: [Metric](#metric)
* **Stat**: string
* **Unit**: string

## Metric
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **MetricName**: string
* **Namespace**: string

## MetricDimension
### Properties
* **Name**: string
* **Value**: string

## PredictiveScalingCustomizedLoadMetric
### Properties
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[]

## PredictiveScalingCustomizedScalingMetric
### Properties
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[]

## PredictiveScalingPredefinedLoadMetric
### Properties
* **PredefinedMetricType**: string
* **ResourceLabel**: string

## PredictiveScalingPredefinedMetricPair
### Properties
* **PredefinedMetricType**: string
* **ResourceLabel**: string

## PredictiveScalingPredefinedScalingMetric
### Properties
* **PredefinedMetricType**: string
* **ResourceLabel**: string

## StepAdjustment
### Properties
* **MetricIntervalLowerBound**: int
* **MetricIntervalUpperBound**: int
* **ScalingAdjustment**: int

## TargetTrackingConfiguration
### Properties
* **CustomizedMetricSpecification**: [CustomizedMetricSpecification](#customizedmetricspecification)
* **DisableScaleIn**: bool
* **PredefinedMetricSpecification**: [PredefinedMetricSpecification](#predefinedmetricspecification)
* **TargetValue**: int

## CustomizedMetricSpecification
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **MetricName**: string
* **Namespace**: string
* **Statistic**: string
* **Unit**: string

## PredefinedMetricSpecification
### Properties
* **PredefinedMetricType**: string
* **ResourceLabel**: string

## AWS.AutoScaling/WarmPoolProperties
### Properties
* **AutoScalingGroupName**: string
* **InstanceReusePolicy**: [InstanceReusePolicy](#instancereusepolicy)
* **MaxGroupPreparedCapacity**: int
* **MinSize**: int
* **PoolState**: string

## InstanceReusePolicy
### Properties
* **ReuseOnScaleIn**: bool

