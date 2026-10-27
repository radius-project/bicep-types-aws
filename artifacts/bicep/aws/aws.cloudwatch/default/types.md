# AWS.CloudWatch @ default

## Resource AWS.CloudWatch/Alarm@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/AlarmProperties](#awscloudwatchalarmproperties) (Identifier): properties of the resource

## Resource AWS.CloudWatch/AlarmMuteRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/AlarmMuteRuleProperties](#awscloudwatchalarmmuteruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/CompositeAlarm@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/CompositeAlarmProperties](#awscloudwatchcompositealarmproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/Dashboard@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/DashboardProperties](#awscloudwatchdashboardproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/InsightRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/InsightRuleProperties](#awscloudwatchinsightruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/Integration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/IntegrationProperties](#awscloudwatchintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/LogAlarm@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/LogAlarmProperties](#awscloudwatchlogalarmproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/MetricStream@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/MetricStreamProperties](#awscloudwatchmetricstreamproperties) (Identifier): properties of the resource

## Resource AWS.CloudWatch/OTelEnrichment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/OTelEnrichmentProperties](#awscloudwatchotelenrichmentproperties) (Identifier): properties of the resource

## Resource AWS.CloudWatch/ResourceMetricsConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/ResourceMetricsConfigurationProperties](#awscloudwatchresourcemetricsconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudWatch/View@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudWatch/ViewProperties](#awscloudwatchviewproperties) (Required, Identifier): properties of the resource

## ActionConfiguration
### Properties
* **AlarmTagsPropagation**: [AlarmTagsPropagation](#alarmtagspropagation): Whether the alarm's tags are included in its action notifications and state-change events.

## ActionConfiguration
### Properties
* **AlarmTagsPropagation**: [AlarmTagsPropagation](#alarmtagspropagation): Whether the alarm's tags are included in its action notifications and state-change events.

## ActionConfiguration
### Properties
* **AlarmTagsPropagation**: [AlarmTagsPropagation](#alarmtagspropagation): Whether the alarm's tags are included in its action notifications and state-change events.

## Alarm_SlidingWindow
### Properties

## AlarmMuteRule_MuteTargets
### Properties
* **AlarmNames**: string[] (Required): The alarm names to be mute by the AlarmMuteRule

## AlarmMuteRule_Rule
### Properties
* **Schedule**: [AlarmMuteRule_Rule_Schedule](#alarmmuteruleruleschedule) (Required): Schedule for the mute to be active

## AlarmMuteRule_Rule_Schedule
### Properties
* **Duration**: string (Required): The duration of the schedule when it triggers
* **Expression**: string (Required): The expression of the schedule
* **Timezone**: string: The timezone of the schedule

## AlarmPromQLCriteria
### Properties
* **PendingPeriod**: int: The duration, in seconds, that a contributor must be continuously breaching before it transitions to the ``ALARM`` state.
* **Query**: string: The PromQL query that the alarm evaluates. The query must return a result of vector type. Each entry in the vector result represents an alarm contributor.
* **RecoveryPeriod**: int: The duration, in seconds, that a contributor must continuously not be breaching before it transitions back to the ``OK`` state.

## AlarmTagsPropagation
### Properties
* **Enabled**: bool (Required): Whether the alarm's tags are included in its action notifications and state-change events.
* **ExcludedTagKeys**: string[]: The tag keys to leave out. Cannot be specified together with IncludedTagKeys.
* **IncludedTagKeys**: string[]: The only tag keys to include. Cannot be specified together with ExcludedTagKeys.

## AlarmTagsPropagation
### Properties
* **Enabled**: bool (Required): Whether the alarm's tags are included in its action notifications and state-change events.
* **ExcludedTagKeys**: string[]: The tag keys to leave out. Cannot be specified together with IncludedTagKeys.
* **IncludedTagKeys**: string[]: The only tag keys to include. Cannot be specified together with ExcludedTagKeys.

## AlarmTagsPropagation
### Properties
* **Enabled**: bool (Required): Whether the alarm's tags are included in its action notifications and state-change events.
* **ExcludedTagKeys**: string[]: The tag keys to leave out. Cannot be specified together with IncludedTagKeys.
* **IncludedTagKeys**: string[]: The only tag keys to include. Cannot be specified together with ExcludedTagKeys.

## AWS.CloudWatch/AlarmMuteRuleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the AlarmMuteRule
* **Description**: string: The description of the AlarmMuteRule
* **ExpireDate**: string: The date, with the same timezone offset as "ScheduleTimezone" after which the alarm mute rule will be expired.
* **LastUpdatedTimestamp**: string (ReadOnly): The last update timestamp of the alarm mute schedule
* **MuteTargets**: [AlarmMuteRule_MuteTargets](#alarmmuterulemutetargets): Targets to be muted
* **MuteType**: string (ReadOnly): The mute type of the alarm mute 
* **Name**: string: The name of the AlarmMuteRule
* **Rule**: [AlarmMuteRule_Rule](#alarmmuterulerule) (Required): The rule for the mute
* **StartDate**: string: The date, with the same timezone offset as "ScheduleTimezone", after which the alarm mute rule will become active.
* **Status**: string (ReadOnly): The current status of the AlarmMuteRule
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.CloudWatch/AlarmProperties
### Properties
* **ActionConfiguration**: [ActionConfiguration](#actionconfiguration)
* **ActionsEnabled**: bool: Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
* **AlarmActions**: string[]: The list of actions to execute when this alarm transitions into an ALARM state from any other state. Specify each action as an Amazon Resource Name (ARN). For more information about creating alarms and the actions that you can specify, see [PutMetricAlarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_PutMetricAlarm.html) in the *API Reference*.
* **AlarmDescription**: string: The description of the alarm.
* **AlarmName**: string (Identifier): The name of the alarm. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the alarm name. 
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **Arn**: string (ReadOnly)
* **ComparisonOperator**: string: The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand.
* **DatapointsToAlarm**: int: The number of datapoints that must be breaching to trigger the alarm. This is used only if you are setting an "M out of N" alarm. In that case, this value is the M, and the value that you set for ``EvaluationPeriods`` is the N value. For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
 If you omit this parameter, CW uses the same value here that you set for ``EvaluationPeriods``, and the alarm goes to alarm state if that many consecutive periods are breaching.
* **Dimensions**: [Dimension](#dimension)[]: The dimensions for the metric associated with the alarm. For an alarm based on a math expression, you can't specify ``Dimensions``. Instead, you use ``Metrics``.
* **EvaluateLowSampleCountPercentile**: string: Used only for alarms based on percentiles. If ``ignore``, the alarm state does not change during periods with too few data points to be statistically significant. If ``evaluate`` or this parameter is not used, the alarm is always evaluated and possibly changes state no matter how many data points are available.
* **EvaluationCriteria**: [EvaluationCriteria](#evaluationcriteria): The evaluation criteria for the alarm.
* **EvaluationInterval**: int: The frequency, in seconds, at which the alarm is evaluated.
* **EvaluationPeriods**: int: The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an "M out of N" alarm, this value is the N, and ``DatapointsToAlarm`` is the M.
 For more information, see [Evaluating an Alarm](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the *User Guide*.
* **EvaluationWindow**: [EvaluationWindow](#evaluationwindow): The evaluation window that the alarm uses to select the range of metric data that it evaluates. This is either a sliding window or a wall clock window. For more information, see [Alarm evaluation windows](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-evaluation-window.html) in the *CloudWatch User Guide*.
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
* **Period**: int: The period, in seconds, over which the statistic is applied. This is required for an alarm based on a metric. Valid values are 10, 20, 30, 60, and any multiple of 60.
 For an alarm based on a math expression, you can't specify ``Period``, and instead you use the ``Metrics`` parameter.
 *Minimum:* 10
* **Statistic**: string: The statistic for the metric associated with the alarm, other than percentile. For percentile statistics, use ``ExtendedStatistic``.
 For an alarm based on a metric, you must specify either ``Statistic`` or ``ExtendedStatistic`` but not both.
 For an alarm based on a math expression, you can't specify ``Statistic``. Instead, you use ``Metrics``.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the ``cloudwatch:TagResource`` permission.
 Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
* **Threshold**: int: The value to compare with the specified statistic.
* **ThresholdMetricId**: string: In an alarm based on an anomaly detection model, this is the ID of the ``ANOMALY_DETECTION_BAND`` function used as the threshold for the alarm.
* **TreatMissingData**: string: Sets how this alarm is to handle missing data points. Valid values are ``breaching``, ``notBreaching``, ``ignore``, and ``missing``. For more information, see [Configuring How Alarms Treat Missing Data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data) in the *Amazon User Guide*.
 If you omit this parameter, the default behavior of ``missing`` is used.
* **Unit**: string: The unit of the metric associated with the alarm. Specify this only if you are creating an alarm based on a single metric. Do not specify this if you are specifying a ``Metrics`` array.
  You can specify the following values: Seconds, Microseconds, Milliseconds, Bytes, Kilobytes, Megabytes, Gigabytes, Terabytes, Bits, Kilobits, Megabits, Gigabits, Terabits, Percent, Count, Bytes/Second, Kilobytes/Second, Megabytes/Second, Gigabytes/Second, Terabytes/Second, Bits/Second, Kilobits/Second, Megabits/Second, Gigabits/Second, Terabits/Second, Count/Second, or None.
* **WarmUpConfiguration**: [WarmUpConfiguration](#warmupconfiguration): The warm-up configuration for the alarm. A warm-up period delays alarm evaluation after you create or update the alarm. During the warm-up period, the alarm stays in ``INSUFFICIENT_DATA`` and does not perform alarm actions.
 For more information, see [Alarm warm-up periods](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/alarm-warm-up.html) in the *Amazon CloudWatch User Guide*.

## AWS.CloudWatch/CompositeAlarmProperties
### Properties
* **ActionConfiguration**: [ActionConfiguration](#actionconfiguration): Configuration that applies to the notifications this alarm sends when it performs its actions.
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

## AWS.CloudWatch/DashboardProperties
### Properties
* **DashboardBody**: string (Required): The detailed information about the dashboard in JSON format, including the widgets to include and their location on the dashboard
* **DashboardName**: string (Identifier): The name of the dashboard. The name must be between 1 and 255 characters. If you do not specify a name, one will be generated automatically.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs to associate with the cloudwatch dashboard. You can associate up to 50 tags with a dashboard

## AWS.CloudWatch/InsightRuleProperties
### Properties
* **ApplyOnTransformedLogs**: bool
* **Arn**: string (ReadOnly, Identifier)
* **RuleBody**: string (Required)
* **RuleName**: string (Required)
* **RuleState**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.CloudWatch/IntegrationProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time at which the integration was created.
* **Credential**: [IntegrationCredential](#integrationcredential) (WriteOnly)
* **IntegrationArn**: string (ReadOnly, Identifier): The ARN of the integration. arn:aws:cloudwatch:{region}:{account}:integration/{integrationId}.
* **IntegrationAttributes**: [Integration_IntegrationAttributes](#integrationintegrationattributes): Type-specific configuration attributes (max 50 entries). EXTERNAL_AGENT requires 'catalogId'. On update, supplied attributes merge into the existing map; omitting a key does not remove it.
* **IntegrationId**: string (ReadOnly): The service-generated unique identifier (UUID) of the integration.
* **IntegrationType**: string (Required): The type of integration. Immutable after creation.
* **Name**: string (Required): The customer-supplied name of the integration. Unique per account.
* **RoleArn**: string: IAM role ARN the integration assumes. Required for AWS_INTEGRATION (a valid, service-assumable IAM role ARN). Not used by AWS_CONFIG_SLREC or EXTERNAL_AGENT.
* **Status**: string (ReadOnly): Lifecycle status of the integration.
* **Tags**: [Integration_Tags](#integrationtags)[]: Tags associated with the integration.
* **UpdatedAt**: string (ReadOnly): The time at which the integration was last updated.

## AWS.CloudWatch/LogAlarmProperties
### Properties
* **ActionConfiguration**: [ActionConfiguration](#actionconfiguration): Configuration that applies to the notifications this alarm sends when it performs its actions.
* **ActionLogLineCount**: int: The number of log lines to include in alarm notifications. Valid values are 0 to 50.
* **ActionLogLineRoleArn**: string: The ARN of the IAM role that grants CloudWatch permissions to fetch log lines for alarm notifications. Required when ActionLogLineCount is greater than 0.
* **ActionsEnabled**: bool: Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
* **AlarmActions**: string[]: The list of actions to execute when this alarm transitions into an ALARM state from any other state.
* **AlarmDescription**: string: The description of the log alarm.
* **AlarmName**: string (Identifier): The name of the log alarm.
* **Arn**: string (ReadOnly): The ARN of the log alarm.
* **ComparisonOperator**: string (Required): The arithmetic operation to use when comparing the specified threshold and the query results. Valid values are GreaterThanOrEqualToThreshold, GreaterThanThreshold, LessThanThreshold, and LessThanOrEqualToThreshold.
* **InsufficientDataActions**: string[]: The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state.
* **OKActions**: string[]: The actions to execute when this alarm transitions to the OK state from any other state.
* **QueryResultsToAlarm**: int (Required): The number of query results that must be breaching to trigger the alarm.
* **QueryResultsToEvaluate**: int (Required): The number of query results over which data is compared to the specified threshold.
* **ScheduledQueryConfiguration**: [ScheduledQueryConfiguration](#scheduledqueryconfiguration) (Required): The scheduled query configuration for the log alarm.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs to associate with the log alarm.
* **Threshold**: int (Required): The value to compare against the results of the scheduled query evaluation.
* **TreatMissingData**: string: Sets how this alarm is to handle missing data points. Valid values are breaching, notBreaching, ignore, and missing.
* **WarmUpConfiguration**: [WarmUpConfiguration](#warmupconfiguration): The warm-up configuration for the alarm. During the warm-up period, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. For more information, see Alarm warm-up periods in the Amazon CloudWatch User Guide.

## AWS.CloudWatch/MetricStreamProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name of the metric stream.
* **CreationDate**: string (ReadOnly): The date of creation of the metric stream.
* **ExcludeFilters**: [MetricStreamFilter](#metricstreamfilter)[]: Define which metrics will be not streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
* **FirehoseArn**: string: The ARN of the Kinesis Firehose where to stream the data.
* **IncludeFilters**: [MetricStreamFilter](#metricstreamfilter)[]: Define which metrics will be streamed. Metrics matched by multiple instances of MetricStreamFilter are joined with an OR operation by default. If both IncludeFilters and ExcludeFilters are omitted, all metrics in the account will be streamed. IncludeFilters and ExcludeFilters are mutually exclusive. Default to null.
* **IncludeLinkedAccountsMetrics**: bool: If you are creating a metric stream in a monitoring account, specify true to include metrics from source accounts that are linked to this monitoring account, in the metric stream. The default is false.
* **LastUpdateDate**: string (ReadOnly): The date of the last update of the metric stream.
* **Name**: string (Identifier): Name of the metric stream.
* **OutputFormat**: string: The output format of the data streamed to the Kinesis Firehose.
* **RoleArn**: string: The ARN of the role that provides access to the Kinesis Firehose.
* **State**: string (ReadOnly): Displays the state of the Metric Stream.
* **StatisticsConfigurations**: [MetricStreamStatisticsConfiguration](#metricstreamstatisticsconfiguration)[]: By default, a metric stream always sends the MAX, MIN, SUM, and SAMPLECOUNT statistics for each metric that is streamed. You can use this parameter to have the metric stream also send additional statistics in the stream. This array can have up to 100 members.
* **Tags**: [Tag](#tag)[]: A set of tags to assign to the delivery stream.

## AWS.CloudWatch/OTelEnrichmentProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier): The AWS account ID. This is the primary identifier for this singleton resource.
* **ExcludeFilters**: [OTelEnrichmentMetricSelector](#otelenrichmentmetricselector)[]: Removes metrics from the include set. Absent or empty means nothing is removed. Evaluated after IncludeFilters, so ExcludeFilters always wins.
* **IncludeFilters**: [OTelEnrichmentMetricSelector](#otelenrichmentmetricselector)[]: Scopes enrichment to a subset of the account's telemetry. Absent or empty means all namespaces are in scope. Present means only these are. The service enforces a combined cap of 100 selectors across IncludeFilters and ExcludeFilters, and rejects more than one selector for the same namespace within a direction.
* **Status**: string (ReadOnly)

## AWS.CloudWatch/ResourceMetricsConfigurationProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time at which the resource metrics configuration was created.
* **MetricSelections**: [ResourceMetricSelection](#resourcemetricselection)[]: The metric selections that define which metrics are enabled for detailed monitoring on the resource.
* **ResourceArn**: string (Required, Identifier): The Amazon Resource Name (ARN) of the resource for which the detailed monitoring metrics configuration is managed.
* **UpdatedAt**: string (ReadOnly): The time at which the resource metrics configuration was last updated.

## AWS.CloudWatch/ViewProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the view.
* **CreatedAt**: string (ReadOnly): The timestamp when the view was created.
* **Definition**: string (Required): The SQL query that defines the view.
* **Description**: string: A description of the view.
* **Name**: string (Identifier): The name of the view. Must begin with the "view." prefix followed by lowercase alphanumeric characters, hyphens, and underscores. View names must be unique within the account and region. If not specified, a name is generated.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to the view.
* **Type**: string (ReadOnly): The ownership category of the view. Views created through CloudFormation are always USER views; MANAGED views are provisioned by AWS.
* **UpdatedAt**: string (ReadOnly): The timestamp when the view was last updated.

## Dimension
### Properties
* **Name**: string (Required): The name of the dimension, from 1–255 characters in length. This dimension name must have been included when the metric was published.
* **Value**: string (Required): The value for the dimension, from 1–255 characters in length.

## EvaluationCriteria
### Properties
* **PromQLCriteria**: [AlarmPromQLCriteria](#alarmpromqlcriteria): The PromQL criteria for the alarm evaluation.

## EvaluationWindow
### Properties
* **SlidingWindow**: [Alarm_SlidingWindow](#alarmslidingwindow): A sliding window, which advances each time the alarm is evaluated, forming a rolling time window. This is the default evaluation window.
* **WallClockWindow**: [WallClockWindow](#wallclockwindow): A wall clock window, which aligns the evaluated range to fixed clock boundaries that match the alarm's period, such as the top of the hour, midnight, or the start of the calendar week.

## Integration_ApiKeyCredential
### Properties
* **ApiKeyValue**: string (Required)

## Integration_IntegrationAttributes
### Properties

## Integration_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## IntegrationCredential
### Properties
* **ApiKeyCredential**: [Integration_ApiKeyCredential](#integrationapikeycredential) (Required): API-key credential material that can be rotated in place on update.

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
* **Period**: int: The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` operation that includes a ``StorageResolution of 1 second``.
* **ReturnData**: bool: This option indicates whether to return the timestamps and raw data values of this metric.
 When you create an alarm based on a metric math expression, specify ``True`` for this value for only the one math expression that the alarm is based on. You must specify ``False`` for ``ReturnData`` for all the other metrics and expressions used in the alarm.
 This field is required.

## MetricStat
### Properties
* **Metric**: [Metric](#metric) (Required): The metric to return, including the metric name, namespace, and dimensions.
* **Period**: int (Required): The granularity, in seconds, of the returned data points. For metrics with regular resolution, a period can be as short as one minute (60 seconds) and must be a multiple of 60. For high-resolution metrics that are collected at intervals of less than one minute, the period can be 1, 5, 10, 20, 30, 60, or any multiple of 60. High-resolution metrics are those metrics stored by a ``PutMetricData`` call that includes a ``StorageResolution`` of 1 second.
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

## OTelEnrichmentMetricSelector
### Properties
* **MetricNames**: string[]: Absent or empty means every metric in this namespace, in whichever direction this selector appears. Present means only these metric names.
* **Namespace**: string (Required): The CloudWatch namespace this selector applies to.

## ResourceMetricSelection
### Properties
* **IncludeMetrics**: string[] (Required): The list of metric names to include in detailed monitoring for the resource.

## ScheduleConfiguration
### Properties
* **EndTimeOffset**: int: The number of seconds into the past to end the query window. Must be a non-negative value and cannot exceed 2592000 seconds (30 days).
* **ScheduleExpression**: string (Required): The expression that defines when the scheduled query runs, e.g. rate(1 minute).
* **StartTimeOffset**: int (Required): The number of seconds into the past to start the query window. Must be a positive value and cannot exceed 2592000 seconds (30 days).

## ScheduledQueryConfiguration
### Properties
* **AggregationExpression**: string (Required): The aggregation expression for the scheduled query, e.g. count(*) or avg(latency) by host.
* **LogGroupIdentifiers**: string[]: The log groups to query.
* **QueryString**: string (Required): The query string to execute against the specified log groups.
* **ScheduleConfiguration**: [ScheduleConfiguration](#scheduleconfiguration) (Required): The schedule configuration.
* **ScheduledQueryRoleARN**: string (Required): The ARN of the IAM role that grants permissions to execute the scheduled query.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs to associate with the scheduled query that backs the log alarm.

## Tag
### Properties
* **Key**: string (Required): A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
* **Value**: string (Required): The value for the specified tag key.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A unique identifier for the tag. The combination of tag keys and values can help you organize and categorize your resources.
* **Value**: string (Required): The value for the specified tag key.

## Tag
### Properties
* **Key**: string (Required): A unique identifier for the tag.
* **Value**: string (Required): String which you can use to describe or define the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## WallClockWindow
### Properties
* **Timezone**: string: The time zone to use when the alarm aligns the evaluation window to clock boundaries. You can specify an IANA time zone name (for example, ``America/New_York``), a fixed UTC offset (for example, ``+05:30``), or an offset-prefixed identifier (for example, ``UTC+05:30``). The offset must be aligned to a multiple of 5 minutes. If you don't specify a time zone, CloudWatch uses ``UTC``.
 The time zone affects window alignment for all periods, including periods of one hour or shorter.

## WarmUpConfiguration
### Properties
* **OnlyStartEvaluatingAfterWarmUpPeriodEnds**: bool: Specifies whether the alarm waits for the full warm-up period before it starts to evaluate. The default is ``false``. If ``true``, the alarm waits the entire ``WarmUpPeriodDurationInMinutes`` before it starts to evaluate, even if metric data arrives earlier. If ``false``, the alarm ends the warm-up period early. Evaluation begins as soon as the alarm has enough metric data to fill its evaluation window.
* **WarmUpPeriodDurationInMinutes**: int: The length of the warm-up period, in minutes. After you create or update the alarm, the alarm stays in ``INSUFFICIENT_DATA`` for this duration. During this time, the alarm does not perform alarm actions.
 You can change this value at any time, including after the warm-up period ends. If you change it after the warm-up period ends, the new value does not restart the warm-up period.

## WarmUpConfiguration
### Properties
* **OnlyStartEvaluatingAfterWarmUpPeriodEnds**: bool: Specifies whether the alarm waits for the full warm-up period before it starts evaluating. If true, the alarm waits the entire WarmUpPeriodDurationInMinutes before it starts evaluating, even if metric data arrives earlier. If false, the alarm ends the warm-up period early and starts evaluating as soon as it has enough metric data to fill its evaluation window. This is the default behavior.
* **WarmUpPeriodDurationInMinutes**: int: The length of the warm-up period, in minutes. For this duration after you create or update the alarm, the alarm stays in INSUFFICIENT_DATA and doesn't perform alarm actions. Valid values range from 1 to 2,880 minutes (2 days). You can change this value while the alarm is still in its warm-up period. Changes have no effect after the warm-up period ends.

