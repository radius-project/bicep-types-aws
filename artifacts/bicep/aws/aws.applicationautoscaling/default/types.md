# AWS.ApplicationAutoScaling @ default

## Resource AWS.ApplicationAutoScaling/ScalableTarget@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationAutoScaling/ScalableTargetProperties](#awsapplicationautoscalingscalabletargetproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApplicationAutoScaling/ScalingPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationAutoScaling/ScalingPolicyProperties](#awsapplicationautoscalingscalingpolicyproperties) (Required, Identifier): properties of the resource

## AWS.ApplicationAutoScaling/ScalableTargetProperties
### Properties
* **Id**: string (ReadOnly)
* **MaxCapacity**: int (Required): The maximum value that you plan to scale out to. When a scaling policy is in effect, Application Auto Scaling can scale out (expand) as needed to the maximum capacity limit in response to changing demand.
* **MinCapacity**: int (Required): The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand.
* **ResourceId**: string (Required, Identifier): The identifier of the resource associated with the scalable target. This string consists of the resource type and unique identifier.
  +  ECS service - The resource type is ``service`` and the unique identifier is the cluster name and service name. Example: ``service/my-cluster/my-service``.
  +  Spot Fleet - The resource type is ``spot-fleet-request`` and the unique identifier is the Spot Fleet request ID. Example: ``spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE``.
  +  EMR cluster - The resource type is ``instancegroup`` and the unique identifier is the cluster ID and instance group ID. Example: ``instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0``.
  +  AppStream 2.0 fleet - The resource type is ``fleet`` and the unique identifier is the fleet name. Example: ``fleet/sample-fleet``.
  +  DynamoDB table - The resource type is ``table`` and the unique identifier is the table name. Example: ``table/my-table``.
  +  DynamoDB global secondary index - The resource type is ``index`` and the unique identifier is the index name. Example: ``table/my-table/index/my-table-index``.
  +  Aurora DB cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:my-db-cluster``.
  +  SageMaker endpoint variant - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
  +  Custom resources are not supported with a resource type. This parameter must specify the ``OutputValue`` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
  +  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE``.
  +  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE``.
  +  Lambda provisioned concurrency - The resource type is ``function`` and the unique identifier is the function name with a function version or alias name suffix that is not ``$LATEST``. Example: ``function:my-function:prod`` or ``function:my-function:1``.
  +  Amazon Keyspaces table - The resource type is ``table`` and the unique identifier is the table name. Example: ``keyspace/mykeyspace/table/mytable``.
  +  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: ``arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5``.
  +  Amazon ElastiCache replication group - The resource type is ``replication-group`` and the unique identifier is the replication group name. Example: ``replication-group/mycluster``.
  +  Neptune cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:mycluster``.
  +  SageMaker serverless endpoint - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
  +  SageMaker inference component - The resource type is ``inference-component`` and the unique identifier is the resource ID. Example: ``inference-component/my-inference-component``.
* **RoleARN**: string (WriteOnly): Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. This can be either an IAM service role that Application Auto Scaling can assume to make calls to other AWS resources on your behalf, or a service-linked role for the specified service. For more information, see [How Application Auto Scaling works with IAM](https://docs.aws.amazon.com/autoscaling/application/userguide/security_iam_service-with-iam.html) in the *Application Auto Scaling User Guide*.
 To automatically create a service-linked role (recommended), specify the full ARN of the service-linked role in your stack template. To find the exact ARN of the service-linked role for your AWS or custom resource, see the [Service-linked roles](https://docs.aws.amazon.com/autoscaling/application/userguide/application-auto-scaling-service-linked-roles.html) topic in the *Application Auto Scaling User Guide*. Look for the ARN in the table at the bottom of the page.
* **ScalableDimension**: string (Required, Identifier): The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property.
  +   ``ecs:service:DesiredCount`` - The desired task count of an ECS service.
  +   ``elasticmapreduce:instancegroup:InstanceCount`` - The instance count of an EMR Instance Group.
  +   ``ec2:spot-fleet-request:TargetCapacity`` - The target capacity of a Spot Fleet.
  +   ``appstream:fleet:DesiredCapacity`` - The desired capacity of an AppStream 2.0 fleet.
  +   ``dynamodb:table:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB table.
  +   ``dynamodb:table:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB table.
  +   ``dynamodb:index:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB global secondary index.
  +   ``dynamodb:index:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB global secondary index.
  +   ``rds:cluster:ReadReplicaCount`` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
  +   ``sagemaker:variant:DesiredInstanceCount`` - The number of EC2 instances for a SageMaker model endpoint variant.
  +   ``custom-resource:ResourceType:Property`` - The scalable dimension for a custom resource provided by your own application or service.
  +   ``comprehend:document-classifier-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend document classification endpoint.
  +   ``comprehend:entity-recognizer-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
  +   ``lambda:function:ProvisionedConcurrency`` - The provisioned concurrency for a Lambda function.
  +   ``cassandra:table:ReadCapacityUnits`` - The provisioned read capacity for an Amazon Keyspaces table.
  +   ``cassandra:table:WriteCapacityUnits`` - The provisioned write capacity for an Amazon Keyspaces table.
  +   ``kafka:broker-storage:VolumeSize`` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
  +   ``elasticache:replication-group:NodeGroups`` - The number of node groups for an Amazon ElastiCache replication group.
  +   ``elasticache:replication-group:Replicas`` - The number of replicas per node group for an Amazon ElastiCache replication group.
  +   ``neptune:cluster:ReadReplicaCount`` - The count of read replicas in an Amazon Neptune DB cluster.
  +   ``sagemaker:variant:DesiredProvisionedConcurrency`` - The provisioned concurrency for a SageMaker serverless endpoint.
  +   ``sagemaker:inference-component:DesiredCopyCount`` - The number of copies across an endpoint for a SageMaker inference component.
* **ScheduledActions**: [ScheduledAction](#scheduledaction)[]: The scheduled actions for the scalable target. Duplicates aren't allowed.
* **ServiceNamespace**: string (Required, Identifier): The namespace of the AWS service that provides the resource, or a ``custom-resource``.
* **SuspendedState**: [SuspendedState](#suspendedstate): An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to ``true`` suspends the specified scaling activities. Setting it to ``false`` (default) resumes the specified scaling activities. 
  *Suspension Outcomes* 
  +  For ``DynamicScalingInSuspended``, while a suspension is in effect, all scale-in activities that are triggered by a scaling policy are suspended.
  +  For ``DynamicScalingOutSuspended``, while a suspension is in effect, all scale-out activities that are triggered by a scaling policy are suspended.
  +  For ``ScheduledScalingSuspended``, while a suspension is in effect, all scaling activities that involve scheduled actions are suspended.

## AWS.ApplicationAutoScaling/ScalingPolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **PolicyName**: string (Required): The name of the scaling policy.
 Updates to the name of a target tracking scaling policy are not supported, unless you also update the metric used for scaling. To change only a target tracking scaling policy's name, first delete the policy by removing the existing ``AWS::ApplicationAutoScaling::ScalingPolicy`` resource from the template and updating the stack. Then, recreate the resource with the same settings and a different name.
* **PolicyType**: string (Required): The scaling policy type.
 The following policy types are supported: 
  ``TargetTrackingScaling``—Not supported for Amazon EMR
  ``StepScaling``—Not supported for DynamoDB, Amazon Comprehend, Lambda, Amazon Keyspaces, Amazon MSK, Amazon ElastiCache, or Neptune.
* **PredictiveScalingPolicyConfiguration**: [PredictiveScalingPolicyConfiguration](#predictivescalingpolicyconfiguration): The predictive scaling policy configuration.
* **ResourceId**: string: The identifier of the resource associated with the scaling policy. This string consists of the resource type and unique identifier.
  +  ECS service - The resource type is ``service`` and the unique identifier is the cluster name and service name. Example: ``service/my-cluster/my-service``.
  +  Spot Fleet - The resource type is ``spot-fleet-request`` and the unique identifier is the Spot Fleet request ID. Example: ``spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE``.
  +  EMR cluster - The resource type is ``instancegroup`` and the unique identifier is the cluster ID and instance group ID. Example: ``instancegroup/j-2EEZNYKUA1NTV/ig-1791Y4E1L8YI0``.
  +  AppStream 2.0 fleet - The resource type is ``fleet`` and the unique identifier is the fleet name. Example: ``fleet/sample-fleet``.
  +  DynamoDB table - The resource type is ``table`` and the unique identifier is the table name. Example: ``table/my-table``.
  +  DynamoDB global secondary index - The resource type is ``index`` and the unique identifier is the index name. Example: ``table/my-table/index/my-table-index``.
  +  Aurora DB cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:my-db-cluster``.
  +  SageMaker endpoint variant - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
  +  Custom resources are not supported with a resource type. This parameter must specify the ``OutputValue`` from the CloudFormation template stack used to access the resources. The unique identifier is defined by the service provider. More information is available in our [GitHub repository](https://docs.aws.amazon.com/https://github.com/aws/aws-auto-scaling-custom-resource).
  +  Amazon Comprehend document classification endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:document-classifier-endpoint/EXAMPLE``.
  +  Amazon Comprehend entity recognizer endpoint - The resource type and unique identifier are specified using the endpoint ARN. Example: ``arn:aws:comprehend:us-west-2:123456789012:entity-recognizer-endpoint/EXAMPLE``.
  +  Lambda provisioned concurrency - The resource type is ``function`` and the unique identifier is the function name with a function version or alias name suffix that is not ``$LATEST``. Example: ``function:my-function:prod`` or ``function:my-function:1``.
  +  Amazon Keyspaces table - The resource type is ``table`` and the unique identifier is the table name. Example: ``keyspace/mykeyspace/table/mytable``.
  +  Amazon MSK cluster - The resource type and unique identifier are specified using the cluster ARN. Example: ``arn:aws:kafka:us-east-1:123456789012:cluster/demo-cluster-1/6357e0b2-0e6a-4b86-a0b4-70df934c2e31-5``.
  +  Amazon ElastiCache replication group - The resource type is ``replication-group`` and the unique identifier is the replication group name. Example: ``replication-group/mycluster``.
  +  Neptune cluster - The resource type is ``cluster`` and the unique identifier is the cluster name. Example: ``cluster:mycluster``.
  +  SageMaker serverless endpoint - The resource type is ``variant`` and the unique identifier is the resource ID. Example: ``endpoint/my-end-point/variant/KMeansClustering``.
  +  SageMaker inference component - The resource type is ``inference-component`` and the unique identifier is the resource ID. Example: ``inference-component/my-inference-component``.
  +  Pool of WorkSpaces - The resource type is ``workspacespool`` and the unique identifier is the pool ID. Example: ``workspacespool/wspool-123456``.
* **ScalableDimension**: string (Identifier): The scalable dimension. This string consists of the service namespace, resource type, and scaling property.
  +   ``ecs:service:DesiredCount`` - The task count of an ECS service.
  +   ``elasticmapreduce:instancegroup:InstanceCount`` - The instance count of an EMR Instance Group.
  +   ``ec2:spot-fleet-request:TargetCapacity`` - The target capacity of a Spot Fleet.
  +   ``appstream:fleet:DesiredCapacity`` - The capacity of an AppStream 2.0 fleet.
  +   ``dynamodb:table:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB table.
  +   ``dynamodb:table:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB table.
  +   ``dynamodb:index:ReadCapacityUnits`` - The provisioned read capacity for a DynamoDB global secondary index.
  +   ``dynamodb:index:WriteCapacityUnits`` - The provisioned write capacity for a DynamoDB global secondary index.
  +   ``rds:cluster:ReadReplicaCount`` - The count of Aurora Replicas in an Aurora DB cluster. Available for Aurora MySQL-compatible edition and Aurora PostgreSQL-compatible edition.
  +   ``sagemaker:variant:DesiredInstanceCount`` - The number of EC2 instances for a SageMaker model endpoint variant.
  +   ``custom-resource:ResourceType:Property`` - The scalable dimension for a custom resource provided by your own application or service.
  +   ``comprehend:document-classifier-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend document classification endpoint.
  +   ``comprehend:entity-recognizer-endpoint:DesiredInferenceUnits`` - The number of inference units for an Amazon Comprehend entity recognizer endpoint.
  +   ``lambda:function:ProvisionedConcurrency`` - The provisioned concurrency for a Lambda function.
  +   ``cassandra:table:ReadCapacityUnits`` - The provisioned read capacity for an Amazon Keyspaces table.
  +   ``cassandra:table:WriteCapacityUnits`` - The provisioned write capacity for an Amazon Keyspaces table.
  +   ``kafka:broker-storage:VolumeSize`` - The provisioned volume size (in GiB) for brokers in an Amazon MSK cluster.
  +   ``elasticache:replication-group:NodeGroups`` - The number of node groups for an Amazon ElastiCache replication group.
  +   ``elasticache:replication-group:Replicas`` - The number of replicas per node group for an Amazon ElastiCache replication group.
  +   ``neptune:cluster:ReadReplicaCount`` - The count of read replicas in an Amazon Neptune DB cluster.
  +   ``sagemaker:variant:DesiredProvisionedConcurrency`` - The provisioned concurrency for a SageMaker serverless endpoint.
  +   ``sagemaker:inference-component:DesiredCopyCount`` - The number of copies across an endpoint for a SageMaker inference component.
  +   ``workspaces:workspacespool:DesiredUserSessions`` - The number of user sessions for the WorkSpaces in the pool.
* **ScalingTargetId**: string (WriteOnly): The CloudFormation-generated ID of an Application Auto Scaling scalable target. For more information about the ID, see the Return Value section of the ``AWS::ApplicationAutoScaling::ScalableTarget`` resource.
  You must specify either the ``ScalingTargetId`` property, or the ``ResourceId``, ``ScalableDimension``, and ``ServiceNamespace`` properties, but not both.
* **ServiceNamespace**: string: The namespace of the AWS service that provides the resource, or a ``custom-resource``.
* **StepScalingPolicyConfiguration**: [StepScalingPolicyConfiguration](#stepscalingpolicyconfiguration): A step scaling policy.
* **TargetTrackingScalingPolicyConfiguration**: [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration): A target tracking scaling policy.

## CustomizedMetricSpecification
### Properties
* **Dimensions**: [MetricDimension](#metricdimension)[]: The dimensions of the metric. 
 Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
* **MetricName**: string: The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that's returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
* **Metrics**: [TargetTrackingMetricDataQuery](#targettrackingmetricdataquery)[]: The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
* **Namespace**: string: The namespace of the metric.
* **Statistic**: string: The statistic of the metric.
* **Unit**: string: The unit of the metric. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.

## MetricDimension
### Properties
* **Name**: string (Required): The name of the dimension.
* **Value**: string (Required): The value of the dimension.

## PredefinedMetricSpecification
### Properties
* **PredefinedMetricType**: string (Required): The metric type. The ``ALBRequestCountPerTarget`` metric type applies only to Spot fleet requests and ECS services.
* **ResourceLabel**: string (WriteOnly): Identifies the resource associated with the metric type. You can't specify a resource label unless the metric type is ``ALBRequestCountPerTarget`` and there is a target group attached to the Spot Fleet or ECS service.
 You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
  ``app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff``.
 Where:
  +  app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
  +  targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
  
 To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.

## PredictiveScalingCustomizedCapacityMetric
### Properties
* **MetricDataQueries**: [PredictiveScalingMetricDataQuery](#predictivescalingmetricdataquery)[] (Required): One or more metric data queries to provide data points for a metric specification.

## PredictiveScalingCustomizedLoadMetric
### Properties
* **MetricDataQueries**: [PredictiveScalingMetricDataQuery](#predictivescalingmetricdataquery)[] (Required)

## PredictiveScalingCustomizedScalingMetric
### Properties
* **MetricDataQueries**: [PredictiveScalingMetricDataQuery](#predictivescalingmetricdataquery)[] (Required): One or more metric data queries to provide data points for a metric specification.

## PredictiveScalingMetric
### Properties
* **Dimensions**: [PredictiveScalingMetricDimension](#predictivescalingmetricdimension)[]: Describes the dimensions of the metric.
* **MetricName**: string: The name of the metric.
* **Namespace**: string: The namespace of the metric.

## PredictiveScalingMetricDataQuery
### Properties
* **Expression**: string: The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. 
 Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
* **Id**: string: A short name that identifies the object's results in the response. This name must be unique among all ``MetricDataQuery`` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
* **Label**: string: A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
* **MetricStat**: [PredictiveScalingMetricStat](#predictivescalingmetricstat): Information about the metric data to return. 
 Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
* **ReturnData**: bool: Indicates whether to return the timestamps and raw data values of this metric. 
 If you use any math expressions, specify ``true`` for this value for only the final math expression that the metric specification is based on. You must specify ``false`` for ``ReturnData`` for all the other metrics and expressions used in the metric specification.
 If you are only retrieving metrics and not performing any math expressions, do not specify anything for ``ReturnData``. This sets it to its default (``true``).

## PredictiveScalingMetricDimension
### Properties
* **Name**: string: The name of the dimension.
* **Value**: string: The value of the dimension.

## PredictiveScalingMetricSpecification
### Properties
* **CustomizedCapacityMetricSpecification**: [PredictiveScalingCustomizedCapacityMetric](#predictivescalingcustomizedcapacitymetric): The customized capacity metric specification.
* **CustomizedLoadMetricSpecification**: [PredictiveScalingCustomizedLoadMetric](#predictivescalingcustomizedloadmetric): The customized load metric specification.
* **CustomizedScalingMetricSpecification**: [PredictiveScalingCustomizedScalingMetric](#predictivescalingcustomizedscalingmetric): The customized scaling metric specification.
* **PredefinedLoadMetricSpecification**: [PredictiveScalingPredefinedLoadMetric](#predictivescalingpredefinedloadmetric): The predefined load metric specification.
* **PredefinedMetricPairSpecification**: [PredictiveScalingPredefinedMetricPair](#predictivescalingpredefinedmetricpair): The predefined metric pair specification that determines the appropriate scaling metric and load metric to use.
* **PredefinedScalingMetricSpecification**: [PredictiveScalingPredefinedScalingMetric](#predictivescalingpredefinedscalingmetric): The predefined scaling metric specification.
* **TargetValue**: int (Required): Specifies the target utilization.

## PredictiveScalingMetricStat
### Properties
* **Metric**: [PredictiveScalingMetric](#predictivescalingmetric): The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
* **Stat**: string: The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*. 
 The most commonly used metrics for predictive scaling are ``Average`` and ``Sum``.
* **Unit**: string: The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.

## PredictiveScalingPolicyConfiguration
### Properties
* **MaxCapacityBreachBehavior**: string: Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity. Defaults to ``HonorMaxCapacity`` if not specified.
* **MaxCapacityBuffer**: int: The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55. 
 Required if the ``MaxCapacityBreachBehavior`` property is set to ``IncreaseMaxCapacity``, and cannot be used otherwise.
* **MetricSpecifications**: [PredictiveScalingMetricSpecification](#predictivescalingmetricspecification)[] (Required): This structure includes the metrics and target utilization to use for predictive scaling. 
 This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
* **Mode**: string: The predictive scaling mode. Defaults to ``ForecastOnly`` if not specified.
* **SchedulingBufferTime**: int: The amount of time, in seconds, that the start time can be advanced. 
 The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.

## PredictiveScalingPredefinedLoadMetric
### Properties
* **PredefinedMetricType**: string (Required): The metric type.
* **ResourceLabel**: string: A label that uniquely identifies a target group.

## PredictiveScalingPredefinedMetricPair
### Properties
* **PredefinedMetricType**: string (Required): Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric.
* **ResourceLabel**: string: A label that uniquely identifies a specific target group from which to determine the total and average request count.

## PredictiveScalingPredefinedScalingMetric
### Properties
* **PredefinedMetricType**: string (Required): The metric type.
* **ResourceLabel**: string: A label that uniquely identifies a specific target group from which to determine the average request count.

## ScalableTargetAction
### Properties
* **MaxCapacity**: int: The maximum capacity.
* **MinCapacity**: int: The minimum capacity.

## ScheduledAction
### Properties
* **EndTime**: string: The date and time that the action is scheduled to end, in UTC.
* **ScalableTargetAction**: [ScalableTargetAction](#scalabletargetaction): The new minimum and maximum capacity. You can set both values or just one. At the scheduled time, if the current capacity is below the minimum capacity, Application Auto Scaling scales out to the minimum capacity. If the current capacity is above the maximum capacity, Application Auto Scaling scales in to the maximum capacity.
* **Schedule**: string (Required): The schedule for this action. The following formats are supported:
  +  At expressions - "``at(yyyy-mm-ddThh:mm:ss)``"
  +  Rate expressions - "``rate(value unit)``"
  +  Cron expressions - "``cron(fields)``"
  
 At expressions are useful for one-time schedules. Cron expressions are useful for scheduled actions that run periodically at a specified date and time, and rate expressions are useful for scheduled actions that run at a regular interval.
 At and cron expressions use Universal Coordinated Time (UTC) by default.
 The cron format consists of six fields separated by white spaces: [Minutes] [Hours] [Day_of_Month] [Month] [Day_of_Week] [Year].
 For rate expressions, *value* is a positive integer and *unit* is ``minute`` | ``minutes`` | ``hour`` | ``hours`` | ``day`` | ``days``.
* **ScheduledActionName**: string (Required): The name of the scheduled action. This name must be unique among all other scheduled actions on the specified scalable target.
* **StartTime**: string: The date and time that the action is scheduled to begin, in UTC.
* **Timezone**: string: The time zone used when referring to the date and time of a scheduled action, when the scheduled action uses an at or cron expression.

## StepAdjustment
### Properties
* **MetricIntervalLowerBound**: int: The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
 You must specify at least one upper or lower bound.
* **MetricIntervalUpperBound**: int: The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
 You must specify at least one upper or lower bound.
* **ScalingAdjustment**: int (Required): The amount by which to scale. The adjustment is based on the value that you specified in the ``AdjustmentType`` property (either an absolute number or a percentage). A positive value adds to the current capacity and a negative number subtracts from the current capacity.

## StepScalingPolicyConfiguration
### Properties
* **AdjustmentType**: string: Specifies whether the ``ScalingAdjustment`` value in the ``StepAdjustment`` property is an absolute number or a percentage of the current capacity.
* **Cooldown**: int: The amount of time, in seconds, to wait for a previous scaling activity to take effect. If not specified, the default value is 300. For more information, see [Cooldown period](https://docs.aws.amazon.com/autoscaling/application/userguide/step-scaling-policy-overview.html#step-scaling-cooldown) in the *Application Auto Scaling User Guide*.
* **MetricAggregationType**: string: The aggregation type for the CloudWatch metrics. Valid values are ``Minimum``, ``Maximum``, and ``Average``. If the aggregation type is null, the value is treated as ``Average``.
* **MinAdjustmentMagnitude**: int: The minimum value to scale by when the adjustment type is ``PercentChangeInCapacity``. For example, suppose that you create a step scaling policy to scale out an Amazon ECS service by 25 percent and you specify a ``MinAdjustmentMagnitude`` of 2. If the service has 4 tasks and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a ``MinAdjustmentMagnitude`` of 2, Application Auto Scaling scales out the service by 2 tasks.
* **StepAdjustments**: [StepAdjustment](#stepadjustment)[]: A set of adjustments that enable you to scale based on the size of the alarm breach.
 At least one step adjustment is required if you are adding a new step scaling policy configuration.

## SuspendedState
### Properties
* **DynamicScalingInSuspended**: bool: Whether scale in by a target tracking scaling policy or a step scaling policy is suspended. Set the value to ``true`` if you don't want Application Auto Scaling to remove capacity when a scaling policy is triggered. The default is ``false``.
* **DynamicScalingOutSuspended**: bool: Whether scale out by a target tracking scaling policy or a step scaling policy is suspended. Set the value to ``true`` if you don't want Application Auto Scaling to add capacity when a scaling policy is triggered. The default is ``false``.
* **ScheduledScalingSuspended**: bool: Whether scheduled scaling is suspended. Set the value to ``true`` if you don't want Application Auto Scaling to add or remove capacity by initiating scheduled actions. The default is ``false``.

## TargetTrackingMetric
### Properties
* **Dimensions**: [TargetTrackingMetricDimension](#targettrackingmetricdimension)[]: The dimensions for the metric. For the list of available dimensions, see the AWS documentation available from the table in [services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*. 
 Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
* **MetricName**: string: The name of the metric.
* **Namespace**: string: The namespace of the metric. For more information, see the table in [services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.

## TargetTrackingMetricDataQuery
### Properties
* **Expression**: string: The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. 
 Conditional: Within each ``TargetTrackingMetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
* **Id**: string: A short name that identifies the object's results in the response. This name must be unique among all ``MetricDataQuery`` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
* **Label**: string: A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
* **MetricStat**: [TargetTrackingMetricStat](#targettrackingmetricstat): Information about the metric data to return.
 Conditional: Within each ``MetricDataQuery`` object, you must specify either ``Expression`` or ``MetricStat``, but not both.
* **ReturnData**: bool: Indicates whether to return the timestamps and raw data values of this metric. 
 If you use any math expressions, specify ``true`` for this value for only the final math expression that the metric specification is based on. You must specify ``false`` for ``ReturnData`` for all the other metrics and expressions used in the metric specification.
 If you are only retrieving metrics and not performing any math expressions, do not specify anything for ``ReturnData``. This sets it to its default (``true``).

## TargetTrackingMetricDimension
### Properties
* **Name**: string: The name of the dimension.
* **Value**: string: The value of the dimension.

## TargetTrackingMetricStat
### Properties
* **Metric**: [TargetTrackingMetric](#targettrackingmetric): The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
* **Stat**: string: The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
 The most commonly used metric for scaling is ``Average``.
* **Unit**: string: The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.

## TargetTrackingScalingPolicyConfiguration
### Properties
* **CustomizedMetricSpecification**: [CustomizedMetricSpecification](#customizedmetricspecification): A customized metric. You can specify either a predefined metric or a customized metric.
* **DisableScaleIn**: bool: Indicates whether scale in by the target tracking scaling policy is disabled. If the value is ``true``, scale in is disabled and the target tracking scaling policy won't remove capacity from the scalable target. Otherwise, scale in is enabled and the target tracking scaling policy can remove capacity from the scalable target. The default value is ``false``.
* **PredefinedMetricSpecification**: [PredefinedMetricSpecification](#predefinedmetricspecification): A predefined metric. You can specify either a predefined metric or a customized metric.
* **ScaleInCooldown**: int: The amount of time, in seconds, after a scale-in activity completes before another scale-in activity can start. For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide*.
* **ScaleOutCooldown**: int: The amount of time, in seconds, to wait for a previous scale-out activity to take effect. For more information and for default values, see [Define cooldown periods](https://docs.aws.amazon.com/autoscaling/application/userguide/target-tracking-scaling-policy-overview.html#target-tracking-cooldown) in the *Application Auto Scaling User Guide*.
* **TargetValue**: int (Required): The target value for the metric. Although this property accepts numbers of type Double, it won't accept values that are either too small or too large. Values must be in the range of -2^360 to 2^360. The value must be a valid number based on the choice of metric. For example, if the metric is CPU utilization, then the target value is a percent value that represents how much of the CPU can be used before scaling out.

