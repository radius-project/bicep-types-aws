# AWS.CloudWatch @ default

## Resource AWS.CloudWatch/Alarm@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/AlarmProperties](#awscloudwatchalarmproperties) (Required): properties of the resource

## Resource AWS.CloudWatch/CompositeAlarm@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/CompositeAlarmProperties](#awscloudwatchcompositealarmproperties) (Required): properties of the resource

## Resource AWS.CloudWatch/MetricStream@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/MetricStreamProperties](#awscloudwatchmetricstreamproperties) (Required): properties of the resource

## AWS.CloudWatch/AlarmProperties
### Properties
* **ActionsEnabled**: bool: Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
* **AlarmActions**: string[]: The list of actions to execute when this alarm transitions into an ALARM state from any other state.
* **AlarmDescription**: string: The description of the alarm.
* **AlarmName**: string (Identifier): The name of the alarm.
* **Arn**: string (ReadOnly): Amazon Resource Name is a unique name for each resource.
* **ComparisonOperator**: string (Required): The arithmetic operation to use when comparing the specified statistic and threshold.
* **DatapointsToAlarm**: int: The number of datapoints that must be breaching to trigger the alarm.
* **Dimensions**: [Dimension](#dimension)[]: The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify Dimensions. Instead, you use Metrics.
* **EvaluateLowSampleCountPercentile**: string: Used only for alarms based on percentiles.
* **EvaluationPeriods**: int (Required): The number of periods over which data is compared to the specified threshold.
* **ExtendedStatistic**: string: The percentile statistic for the metric associated with the alarm. Specify a value between p0.0 and p100.
* **InsufficientDataActions**: string[]: The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
* **MetricName**: string: The name of the metric associated with the alarm.
* **Metrics**: [MetricDataQuery](#metricdataquery)[]: An array that enables you to create an alarm based on the result of a metric math expression.
* **Namespace**: string: The namespace of the metric associated with the alarm.
* **OKActions**: string[]: The actions to execute when this alarm transitions to the OK state from any other state.
* **Period**: int: The period in seconds, over which the statistic is applied.
* **Statistic**: string: The statistic for the metric associated with the alarm, other than percentile.
* **Threshold**: int: In an alarm based on an anomaly detection model, this is the ID of the ANOMALY_DETECTION_BAND function used as the threshold for the alarm.
* **ThresholdMetricId**: string: In an alarm based on an anomaly detection model, this is the ID of the ANOMALY_DETECTION_BAND function used as the threshold for the alarm.
* **TreatMissingData**: string: Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.
* **Unit**: string: The unit of the metric associated with the alarm.

## Dimension
### Properties
* **Name**: string (Required): The name of the dimension.
* **Value**: string (Required): The value for the dimension.

## MetricDataQuery
### Properties
* **AccountId**: string: The ID of the account where the metrics are located, if this is a cross-account alarm.
* **Expression**: string: The math expression to be performed on the returned data.
* **Id**: string (Required): A short name used to tie this object to the results in the response.
* **Label**: string: A human-readable label for this metric or expression.
* **MetricStat**: [MetricStat](#metricstat): The metric to be returned, along with statistics, period, and units.
* **Period**: int: The period in seconds, over which the statistic is applied.
* **ReturnData**: bool: This option indicates whether to return the timestamps and raw data values of this metric.

## MetricStat
### Properties
* **Metric**: [Metric](#metric) (Required): The metric to return, including the metric name, namespace, and dimensions.
* **Period**: int (Required): The granularity, in seconds, of the returned data points.
* **Stat**: string (Required): The statistic to return.
* **Unit**: string: The unit to use for the returned data points.

## Metric
### Properties
* **Dimensions**: [Dimension](#dimension)[]: The dimensions for the metric.
* **MetricName**: string: The name of the metric.
* **Namespace**: string: The namespace of the metric.

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
* **Key**: string (Required): A unique identifier for the tag.
* **Value**: string (Required): String which you can use to describe or define the tag.

