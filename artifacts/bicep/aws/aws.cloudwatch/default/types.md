# AWS.CloudWatch @ default

## Resource AWS.CloudWatch/CompositeAlarm@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudWatch/CompositeAlarmProperties](#awscloudwatchcompositealarmproperties) (Required): properties of the resource

## Resource AWS.CloudWatch/MetricStream@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudWatch/MetricStreamProperties](#awscloudwatchmetricstreamproperties) (Required): properties of the resource

## AWS.CloudWatch/CompositeAlarmProperties
### Properties
* **ActionsEnabled**: bool: Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
* **ActionsSuppressor**: string: Actions will be suppressed if the suppressor alarm is in the ALARM state. ActionsSuppressor can be an AlarmName or an Amazon Resource Name (ARN) from an existing alarm. 
* **ActionsSuppressorExtensionPeriod**: int: Actions will be suppressed if WaitPeriod is active. The length of time that actions are suppressed is in seconds.
* **ActionsSuppressorWaitPeriod**: int: Actions will be suppressed if ExtensionPeriod is active. The length of time that actions are suppressed is in seconds.
* **AlarmActions**: string[]: The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN).
* **AlarmDescription**: string: The description of the alarm
* **AlarmName**: string (Required): The name of the Composite Alarm
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
* **LastUpdateDate**: string (ReadOnly): The date of the last update of the metric stream.
* **Name**: string: Name of the metric stream.
* **OutputFormat**: string (Required): The output format of the data streamed to the Kinesis Firehose.
* **RoleArn**: string (Required): The ARN of the role that provides access to the Kinesis Firehose.
* **State**: string (ReadOnly): Displays the state of the Metric Stream.
* **StatisticsConfigurations**: [MetricStreamStatisticsConfiguration](#metricstreamstatisticsconfiguration)[]: By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
* **Tags**: [Tag](#tag)[] (WriteOnly): A set of tags to assign to the delivery stream.

## MetricStreamFilter
### Properties
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
* **Value**: string: An optional string, which you can use to describe or define the tag.

