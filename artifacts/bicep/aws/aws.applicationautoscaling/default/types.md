# AWS.ApplicationAutoScaling @ default

## Resource AWS.ApplicationAutoScaling/ScalableTarget@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationAutoScaling/ScalableTargetProperties](#awsapplicationautoscalingscalabletargetproperties) (Required): properties of the resource

## Resource AWS.ApplicationAutoScaling/ScalingPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationAutoScaling/ScalingPolicyProperties](#awsapplicationautoscalingscalingpolicyproperties) (Required): properties of the resource

## AWS.ApplicationAutoScaling/ScalableTargetProperties
### Properties
* **Id**: string (ReadOnly): This value can be returned by using the Ref function. Ref returns the Cloudformation generated ID of the resource in format - ResourceId|ScalableDimension|ServiceNamespace
* **MaxCapacity**: int (Required): The maximum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand
* **MinCapacity**: int (Required): The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand
* **ResourceId**: string (Required, Identifier): The identifier of the resource associated with the scalable target
* **RoleARN**: string (WriteOnly): Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. 
* **ScalableDimension**: string (Required, Identifier): The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property
* **ScheduledActions**: [ScheduledAction](#scheduledaction)[]: The scheduled actions for the scalable target. Duplicates aren't allowed.
* **ServiceNamespace**: string (Required, Identifier): The namespace of the AWS service that provides the resource, or a custom-resource
* **SuspendedState**: [SuspendedState](#suspendedstate): An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to true suspends the specified scaling activities. Setting it to false (default) resumes the specified scaling activities.

## ScheduledAction
### Properties
* **EndTime**: string
* **ScalableTargetAction**: [ScalableTargetAction](#scalabletargetaction)
* **Schedule**: string (Required)
* **ScheduledActionName**: string (Required)
* **StartTime**: string
* **Timezone**: string

## ScalableTargetAction
### Properties
* **MaxCapacity**: int
* **MinCapacity**: int

## SuspendedState
### Properties
* **DynamicScalingInSuspended**: bool
* **DynamicScalingOutSuspended**: bool
* **ScheduledScalingSuspended**: bool

## AWS.ApplicationAutoScaling/ScalingPolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): ARN is a read only property for the resource.
* **PolicyName**: string (Required): The name of the scaling policy.

Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing AWS::ApplicationAutoScaling::ScalingPolicy resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
* **PolicyType**: string (Required): The scaling policy type.

The following policy types are supported:

TargetTrackingScaling Not supported for Amazon EMR

StepScaling Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
* **ResourceId**: string: The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
* **ScalableDimension**: string (Identifier): The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
* **ScalingTargetId**: string (WriteOnly): The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the AWS::ApplicationAutoScaling::ScalableTarget resource.
* **ServiceNamespace**: string: The namespace of the AWS service that provides the resource, or a custom-resource.
* **StepScalingPolicyConfiguration**: [StepScalingPolicyConfiguration](#stepscalingpolicyconfiguration): A step scaling policy.
* **TargetTrackingScalingPolicyConfiguration**: [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration): A target tracking scaling policy.

## StepScalingPolicyConfiguration
### Properties
* **AdjustmentType**: string: Specifies how the ScalingAdjustment value in a StepAdjustment is interpreted.
* **Cooldown**: int: The amount of time, in seconds, to wait for a previous scaling activity to take effect.
* **MetricAggregationType**: string: The aggregation type for the CloudWatch metrics. Valid values are Minimum, Maximum, and Average. If the aggregation type is null, the value is treated as Average
* **MinAdjustmentMagnitude**: int: The minimum value to scale by when the adjustment type is PercentChangeInCapacity.
* **StepAdjustments**: [StepAdjustment](#stepadjustment)[]: A set of adjustments that enable you to scale based on the size of the alarm breach.

## StepAdjustment
### Properties
* **MetricIntervalLowerBound**: int: The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
* **MetricIntervalUpperBound**: int: The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
* **ScalingAdjustment**: int (Required): The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a positive value.

## TargetTrackingScalingPolicyConfiguration
### Properties
* **CustomizedMetricSpecification**: [CustomizedMetricSpecification](#customizedmetricspecification): A customized metric. You can specify either a predefined metric or a customized metric.
* **DisableScaleIn**: bool: Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is false.
* **PredefinedMetricSpecification**: [PredefinedMetricSpecification](#predefinedmetricspecification): A predefined metric. You can specify either a predefined metric or a customized metric.
* **ScaleInCooldown**: int: The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start.
* **ScaleOutCooldown**: int: The amount of time, in seconds, to wait for a previous scale-out activity to take effect.
* **TargetValue**: int (Required): The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.

## CustomizedMetricSpecification
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]: The dimensions of the metric.
* **MetricName**: string: The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the Metric object that is returned by a call to ListMetrics.
* **Metrics**: [TargetTrackingMetricDataQuery](#targettrackingmetricdataquery)[]: The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
* **Namespace**: string: The namespace of the metric.
* **Statistic**: string: The statistic of the metric.
* **Unit**: string: The unit of the metric. For a complete list of the units that CloudWatch supports, see the MetricDatum data type in the Amazon CloudWatch API Reference.

## MetricDimension
### Properties
* **Name**: string (Required): The name of the dimension.
* **Value**: string (Required): The value of the dimension.

## TargetTrackingMetricDataQuery
### Properties
* **Expression**: string: The math expression to perform on the returned data, if this object is performing a math expression.
* **Id**: string: A short name that identifies the object's results in the response.
* **Label**: string: A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
* **MetricStat**: [TargetTrackingMetricStat](#targettrackingmetricstat): Information about the metric data to return.
* **ReturnData**: bool: Indicates whether to return the timestamps and raw data values of this metric.

## TargetTrackingMetricStat
### Properties
* **Metric**: [TargetTrackingMetric](#targettrackingmetric): The CloudWatch metric to return, including the metric name, namespace, and dimensions. 
* **Stat**: string: The statistic to return. It can include any CloudWatch statistic or extended statistic.
* **Unit**: string: The unit to use for the returned data points.

## TargetTrackingMetric
### Properties
* **Dimensions**: [TargetTrackingMetricDimension](#targettrackingmetricdimension)[]: The dimensions for the metric.
* **MetricName**: string: The name of the metric.
* **Namespace**: string: The namespace of the metric.

## TargetTrackingMetricDimension
### Properties
* **Name**: string: The name of the dimension.
* **Value**: string: The value of the dimension.

## PredefinedMetricSpecification
### Properties
* **PredefinedMetricType**: string (Required): The metric type. The ALBRequestCountPerTarget metric type applies only to Spot Fleets and ECS services.
* **ResourceLabel**: string (WriteOnly): Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group attached to the Spot Fleet or ECS service.

