# AWS.CloudWatch @ default

## Resource AWS.CloudWatch/Alarm@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/AlarmProperties](#awscloudwatchalarmproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/CompositeAlarm@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/CompositeAlarmProperties](#awscloudwatchcompositealarmproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/MetricStream@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/MetricStreamProperties](#awscloudwatchmetricstreamproperties) (Required, Identifier): properties of the resource

## AWS.CloudWatch/AlarmProperties
### Properties
* **ActionsEnabled**: bool: Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
* **AlarmActions**: string[]: The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.
* **AlarmDescription**: string: The description of the alarm.
* **AlarmName**: string (Identifier): The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name. 
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **Arn**: string (ReadOnly)
* **ComparisonOperator**: string (Required): The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
* **DatapointsToAlarm**: int: The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for ``EvaluationPeriods`` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
 If you omit this parameter, CW uses the same value here that you set for ``EvaluationPeriods``, and the alarm goes to alarm state if that many consecutive periods are breaching.
* **Dimensions**: [Dimension](#dimension)[]: The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify ``Dimensions``. Instead, you use ``Metrics``.
* **EvaluateLowSampleCountPercentile**: string: Used only for alarms based on percentiles. If ``ignore``, the alarm state does not change during periods with too few data points to be statistically significant. If ``evaluate`` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
* **EvaluationPeriods**: int (Required): The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and ``DatapointsToAlarm`` is the M.
 For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
* **ExtendedStatistic**: string: The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
 For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
 For an alarm based on a math expression, you can't specify ``ExtendedStatistic``. Instead, you use ``Metrics``.
* **InsufficientDataActions**: string[]: The actions to execute when this alarm transitions to the ``INSUFFICIENT_DATA`` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
* **MetricName**: string: The name of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you use ``Metrics`` instead and you can't specify ``MetricName``.
* **Metrics**: [MetricDataQuery](#metricdataquery)[]: An array that enables you to create an alarm based on the result of a metric math expression. Each item in the array either retrieves a metric or performs a math expression.
 If you specify the ``Metrics`` parameter, you cannot specify ``MetricName``, ``Dimensions``, ``Period``, ``Namespace``, ``Statistic``, ``ExtendedStatistic``, or ``Unit``.
* **Namespace**: string: The namespace of the metric associated with the alarm. This is required for an alarm based on a metric. For an alarm based on a math expression, you can't specify ``Namespace`` and you use ``Metrics`` instead.
 For a list of namespaces for metrics from AWS services, see [Services That Publish Metrics.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html)
* **OKActions**: string[]: The actions to execute when this alarm transitions to the ``OK`` state from any other state. Each action is specified as an Amazon Resource Name (ARN).
* **Period**: int: The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. Valid values are 10, 30, 60, and any multiple of 60.
 For an alarm based on a math expression, you can't specify ``Period``, and instead you use the ``Metrics`` parameter.
 *Minimum:* 10
* **Statistic**: string: The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ``ExtendedStatistic``.
 For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
 For an alarm based on a math expression, you can't specify ``Statistic``. Instead, you use ``Metrics``.
* **Tags**: [Tag](#tag)[]
* **Threshold**: int: The value to compare with the specified statistic.
* **ThresholdMetricId**: string: In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.
* **TreatMissingData**: string: Sets how this alarm is to handle missing data points. Valid values are ``breaching``, ``notBreaching``, ``ignore``, and ``missing``. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
 If you omit this parameter, the default behavior of ``missing`` is used.
* **Unit**: string: The unit of the metric associated with the alarm. Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a ``Metrics`` array.
  You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

## AWS.CloudWatch/CompositeAlarmProperties
### Properties
* **ActionsEnabled**: bool: Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
* **ActionsSuppressor**: string: Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. 
* **ActionsSuppressorExtensionPeriod**: int: Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.
* **ActionsSuppressorWaitPeriod**: int: Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.
* **AlarmActions**: string[]: The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
* **AlarmDescription**: string: The description of the alarm
* **AlarmName**: string (Identifier): The name of the Composite Alarm
* **AlarmRule**: string (Required): Expression which aggregates the state of other Alarms (Metric or Composite Alarms)
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the alarm
* **InsufficientDataActions**: string[]: The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN).
* **OKActions**: string[]: The actions to execute when this alarm transitions to the OK state from any other state. Each action is specified as an Amazon Resource Name (ARN).
* **Tags**: [Tag](#tag)[]: A list of key-value pairs to associate with the composite alarm. You can associate as many as 50 tags with an alarm.

## AWS.CloudWatch/MetricStreamProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name of the metric stream.
* **CreationDate**: string (ReadOnly): The date of creation of the metric stream.
* **ExcludeFilters**: [MetricStreamFilter](#metricstreamfilter)[]: Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
* **FirehoseArn**: string (Required): The ARN of the Kinesis Firehose where to stream the data.
* **IncludeFilters**: [MetricStreamFilter](#metricstreamfilter)[]: Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
* **IncludeLinkedAccountsMetrics**: bool: If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false.
* **LastUpdateDate**: string (ReadOnly): The date of the last update of the metric stream.
* **Name**: string (Identifier): Name of the metric stream.
* **OutputFormat**: string (Required): The output format of the data streamed to the Kinesis Firehose.
* **RoleArn**: string (Required): The ARN of the role that provides access to the Kinesis Firehose.
* **State**: string (ReadOnly): Displays the state of the Metric Stream.
* **StatisticsConfigurations**: [MetricStreamStatisticsConfiguration](#metricstreamstatisticsconfiguration)[]: By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
* **Tags**: [Tag](#tag)[] (WriteOnly): A set of tags to assign to the delivery stream.

## Dimension
### Properties
* **Name**: string (Required): The name of the dimension, from 1?255 characters in length. This dimension name must have been included when the metric was published.
* **Value**: string (Required): The value for the dimension, from 1?255 characters in length.

## Metric
### Properties
* **Dimensions**: [Dimension](#dimension)[]: The metric dimensions that you want to be used for the metric that the alarm will watch.
* **MetricName**: string: The name of the metric that you want the alarm to watch. This is a required field.
* **Namespace**: string: The namespace of the metric that the alarm will watch.

## MetricDataQuery
### Properties
* **AccountId**: string: The ID of the account where the metrics are located, if this is a cross-account alarm.
* **Expression**: string: The math expression to be performed on the returned data, if this object is performing a math expression. This expression can use the ``Id`` of the other metrics to refer to those metrics, and can also use the ``Id`` of other expressions to use the result of those expressions. For more information about metric math expressions, see [Metric Math Syntax and Functions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/using-metric-math.html#metric-math-syntax) in the *User Guide*.
 Within each MetricDataQuery object, you must specify either ``Expression`` or ``MetricStat`` but not both.
* **Id**: string (Required): A short name used to tie this object to the results in the response. This name must be unique within a single call to ``GetMetricData``. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscore. The first character must be a lowercase letter.
* **Label**: string: A human-readable label for this metric or expression. This is especially useful if this is an expression, so that you know what the value represents. If the metric or expression is shown in a CW dashboard widget, the label is shown. If ``Label`` is omitted, CW generates a default.
* **MetricStat**: [MetricStat](#metricstat): The metric to be returned, along with statistics, period, and units. Use this parameter only if this object is retrieving a metric and not performing a math expression on returned data.
 Within one MetricDataQuery object, you must specify either ``Expression`` or ``MetricStat`` but not both.
* **Period**: int: The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` operation that includes a ``StorageResolution of 1 second``.
* **ReturnData**: bool: This option indicates whether to return the timestamps and raw data values of this metric.
 When you create an alarm based on a metric math expression, specify ``True`` for this value for only the one math expression that the alarm is based on. You must specify ``False`` for ``ReturnData`` for all the other metrics and expressions used in the alarm.
 This field is required.

## MetricStat
### Properties
* **Metric**: [Metric](#metric) (Required): The metric to return, including the metric name, namespace, and dimensions.
* **Period**: int (Required): The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` call that includes a ``StorageResolution`` of 1 second.
 If the ``StartTime`` parameter specifies a time stamp that is greater than 3 hours ago, you must specify the period as follows or no data points in that time range is returned:
  +  Start time between 3 hours and 15 days ago - Use a multiple of 60 seconds (1 minute).
  +  Start time between 15 and 63 days ago - Use a multiple of 300 seconds (5 minutes).
  +  Start time greater than 63 days ago - Use a multiple of 3600 seconds (1 hour).
* **Stat**: string (Required): The statistic to return. It can include any CW statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *User Guide*.
* **Unit**: string: The unit to use for the returned data points. 
 Valid values are: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.

## MetricStreamFilter
### Properties
* **MetricNames**: string[]: Only metrics with MetricNames matching these values will be streamed. Must be set together with Namespace.
* **Namespace**: string (Required): Only metrics with Namespace matching this value will be streamed.

## MetricStreamStatisticsConfiguration
### Properties
* **AdditionalStatistics**: string[] (Required): The additional statistics to stream for the metrics listed in IncludeMetrics.
* **IncludeMetrics**: [MetricStreamStatisticsMetric](#metricstreamstatisticsmetric)[] (Required): An array that defines the metrics that are to have additional statistics streamed.

## MetricStreamStatisticsMetric
### Properties
* **MetricName**: string (Required): The name of the metric.
* **Namespace**: string (Required): The namespace of the metric.

## Tag
### Properties
* **Key**: string (Required): A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
* **Value**: string (Required): The value for the specified tag key.

## Tag
### Properties
* **Key**: string (Required): A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
* **Value**: string (Required): The value for the specified tag key.

## Tag
### Properties
* **Key**: string (Required): A unique identifier for the tag.
* **Value**: string (Required): String which you can use to describe or define the tag.

