# AWS.AutoScalingPlans @ default

## Resource AWS.AutoScalingPlans/ScalingPlan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AutoScalingPlans/ScalingPlanProperties](#awsautoscalingplansscalingplanproperties) (Required, Identifier): properties of the resource

## ApplicationSource
### Properties
* **CloudFormationStackARN**: string: The Amazon Resource Name (ARN) of a CloudFormation stack. The stack must contain at least one scalable resource.
* **TagFilters**: [TagFilter](#tagfilter)[]: A set of tag filters (keys and values). Each tag filter specified must contain a key with values as optional. Each scaling plan can include up to 50 keys, and each key can include up to 20 values.

## AWS.AutoScalingPlans/ScalingPlanProperties
### Properties
* **ApplicationSource**: [ApplicationSource](#applicationsource) (Required): A CloudFormation stack or a set of tags. You can create one scaling plan per application source. The ApplicationSource property must be present to ensure interoperability with the AWS Auto Scaling console.
* **ScalingInstructions**: [ScalingInstruction](#scalinginstruction)[] (Required): The scaling instructions.
* **ScalingPlanArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the scaling plan.
* **ScalingPlanName**: string (ReadOnly, Identifier): The name of the scaling plan. Names cannot contain vertical bars, colons, or forward slashes.
* **ScalingPlanVersion**: string (ReadOnly, Identifier): The version number of the scaling plan. This value is always 1.

## CustomizedLoadMetricSpecification
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]: The dimensions of the metric.
* **MetricName**: string (Required): The name of the metric.
* **Namespace**: string (Required): The namespace of the metric.
* **Statistic**: string (Required): The statistic of the metric.
* **Unit**: string: The unit of the metric.

## CustomizedScalingMetricSpecification
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]: The dimensions of the metric.
* **MetricName**: string (Required): The name of the metric.
* **Namespace**: string (Required): The namespace of the metric.
* **Statistic**: string (Required): The statistic of the metric.
* **Unit**: string: The unit of the metric.

## MetricDimension
### Properties
* **Name**: string (Required): The name of the dimension.
* **Value**: string (Required): The value of the dimension.

## PredefinedLoadMetricSpecification
### Properties
* **PredefinedLoadMetricType**: string (Required): The metric type.
* **ResourceLabel**: string: Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBTargetGroupRequestCount and there is a target group for an Application Load Balancer attached to the Auto Scaling group.

## PredefinedScalingMetricSpecification
### Properties
* **PredefinedScalingMetricType**: string (Required): The metric type. The ALBRequestCountPerTarget metric type applies only to Auto Scaling groups, Spot Fleet requests, and ECS services.
* **ResourceLabel**: string: Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ALBRequestCountPerTarget and there is a target group for an Application Load Balancer attached to the Auto Scaling group, Spot Fleet request, or ECS service.

## ScalingInstruction
### Properties
* **CustomizedLoadMetricSpecification**: [CustomizedLoadMetricSpecification](#customizedloadmetricspecification): The customized load metric to use for predictive scaling. This property or a PredefinedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.
* **DisableDynamicScaling**: bool: Controls whether dynamic scaling is disabled. When dynamic scaling is enabled, AWS Auto Scaling creates target tracking scaling policies based on the specified target tracking configurations. The default is enabled (false).
* **MaxCapacity**: int (Required): The maximum capacity of the resource. The exception to this upper limit is if you specify a non-default setting for PredictiveScalingMaxCapacityBehavior.
* **MinCapacity**: int (Required): The minimum capacity of the resource.
* **PredefinedLoadMetricSpecification**: [PredefinedLoadMetricSpecification](#predefinedloadmetricspecification): The predefined load metric to use for predictive scaling. This property or a CustomizedLoadMetricSpecification is required when configuring predictive scaling, and cannot be used otherwise.
* **PredictiveScalingMaxCapacityBehavior**: string: Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity specified for the resource. The default value is SetForecastCapacityToMaxCapacity.
* **PredictiveScalingMaxCapacityBuffer**: int: The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer. The range is 1-100. Required if PredictiveScalingMaxCapacityBehavior is set to SetMaxCapacityAboveForecastCapacity, and cannot be used otherwise.
* **PredictiveScalingMode**: string: The predictive scaling mode. The default value is ForecastAndScale. Otherwise, AWS Auto Scaling forecasts capacity but does not apply any scheduled scaling actions based on the capacity forecast.
* **ResourceId**: string (Required): The ID of the resource. This string consists of the resource type and unique identifier.
* **ScalableDimension**: string (Required): The scalable dimension associated with the resource.
* **ScalingPolicyUpdateBehavior**: string: Controls whether a resource's externally created scaling policies are deleted and new target tracking scaling policies created. The default value is KeepExternalPolicies. Valid only when configuring dynamic scaling.
* **ScheduledActionBufferTime**: int: The amount of time, in seconds, to buffer the run time of scheduled scaling actions when scaling out. The value must be less than the forecast interval duration of 3600 seconds (60 minutes). The default is 300 seconds. Valid only when configuring predictive scaling.
* **ServiceNamespace**: string (Required): The namespace of the AWS service.
* **TargetTrackingConfigurations**: [TargetTrackingConfiguration](#targettrackingconfiguration)[] (Required): The target tracking configurations (up to 10). Each of these structures must specify a unique scaling metric and a target value for the metric.

## TagFilter
### Properties
* **Key**: string (Required): The tag key.
* **Values**: string[]: The tag values (0 to 20).

## TargetTrackingConfiguration
### Properties
* **CustomizedScalingMetricSpecification**: [CustomizedScalingMetricSpecification](#customizedscalingmetricspecification): A customized metric. You can specify either a predefined metric or a customized metric.
* **DisableScaleIn**: bool: Indicates whether scale in by the target tracking scaling policy is disabled. If the value is true, scale in is disabled and the target tracking scaling policy doesn't remove capacity from the scalable resource. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable resource. The default value is false.
* **EstimatedInstanceWarmup**: int: The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This value is used only if the resource is an Auto Scaling group.
* **PredefinedScalingMetricSpecification**: [PredefinedScalingMetricSpecification](#predefinedscalingmetricspecification): A predefined metric. You can specify either a predefined metric or a customized metric.
* **ScaleInCooldown**: int: The amount of time, in seconds, after a scale-in activity completes before another scale in activity can start. This value is not used if the scalable resource is an Auto Scaling group.
* **ScaleOutCooldown**: int: The amount of time, in seconds, after a scale-out activity completes before another scale-out activity can start. This value is not used if the scalable resource is an Auto Scaling group.
* **TargetValue**: int (Required): The target value for the metric.

