# AWS.ApplicationSignals @ default

## Resource AWS.ApplicationSignals/ServiceLevelObjective@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationSignals/ServiceLevelObjectiveProperties](#awsapplicationsignalsservicelevelobjectiveproperties) (Required, Identifier): properties of the resource

## AWS.ApplicationSignals/ServiceLevelObjectiveProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of this SLO.
* **BurnRateConfigurations**: [BurnRateConfiguration](#burnrateconfiguration)[]
* **CreatedTime**: int (ReadOnly): Epoch time in seconds of the time that this SLO was created
* **Description**: string: An optional description for this SLO. Default is 'No description'
* **EvaluationType**: string (ReadOnly): Displays whether this is a period-based SLO or a request-based SLO.
* **Goal**: [Goal](#goal)
* **LastUpdatedTime**: int (ReadOnly): Epoch time in seconds of the time that this SLO was most recently updated
* **Name**: string (Required): The name of this SLO.
* **RequestBasedSli**: [RequestBasedSli](#requestbasedsli)
* **Sli**: [Sli](#sli)
* **Tags**: [Tag](#tag)[]

## BurnRateConfiguration
### Properties
* **LookBackWindowMinutes**: int (Required): The number of minutes to use as the look-back window.

## CalendarInterval
### Properties
* **Duration**: int (Required)
* **DurationUnit**: string (Required)
* **StartTime**: int (Required): Epoch time in seconds you want the first interval to start. Be sure to choose a time that configures the intervals the way that you want. For example, if you want weekly intervals starting on Mondays at 6 a.m., be sure to specify a start time that is a Monday at 6 a.m.
As soon as one calendar interval ends, another automatically begins.

## Dimension
### Properties
* **Name**: string (Required): The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
* **Value**: string (Required): The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values

## Goal
### Properties
* **AttainmentGoal**: int: The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
If you omit this parameter, 99 is used to represent 99% as the attainment goal.
* **Interval**: [Interval](#interval)
* **WarningThreshold**: int: The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.

## Interval
### Properties
* **CalendarInterval**: [CalendarInterval](#calendarinterval)
* **RollingInterval**: [RollingInterval](#rollinginterval)

## KeyAttributes
### Properties

## Metric
### Properties
* **Dimensions**: [Dimension](#dimension)[]: An array of one or more dimensions to use to define the metric that you want to use.
* **MetricName**: string: The name of the metric to use.
* **Namespace**: string: The namespace of the metric.

## MetricDataQuery
### Properties
* **AccountId**: string: The ID of the account where the metrics are located, if this is a cross-account alarm.
* **Expression**: string: The math expression to be performed on the returned data.
* **Id**: string (Required): A short name used to tie this object to the results in the response.
* **MetricStat**: [MetricStat](#metricstat): A metric to be used directly for the SLO, or to be used in the math expression that will be used for the SLO. Within one MetricDataQuery, you must specify either Expression or MetricStat but not both.
* **ReturnData**: bool: This option indicates whether to return the timestamps and raw data values of this metric.

## MetricStat
### Properties
* **Metric**: [Metric](#metric) (Required)
* **Period**: int (Required): The granularity, in seconds, to be used for the metric.
* **Stat**: string (Required): The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic.
* **Unit**: string: If you omit Unit then all data that was collected with any unit is returned, along with the corresponding units that were specified when the data was reported to CloudWatch. If you specify a unit, the operation returns only data that was collected with that unit specified. If you specify a unit that does not match the data collected, the results of the operation are null. CloudWatch does not perform unit conversions.

## MonitoredRequestCountMetric
### Properties
* **BadCountMetric**: [MetricDataQuery](#metricdataquery)[]: If you want to count "bad requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "bad requests" in this structure.
* **GoodCountMetric**: [MetricDataQuery](#metricdataquery)[]: If you want to count "good requests" to determine the percentage of successful requests for this request-based SLO, specify the metric to use as "good requests" in this structure.

## RequestBasedSli
### Properties
* **ComparisonOperator**: string: The arithmetic operation used when comparing the specified metric to the threshold.
* **MetricThreshold**: int: The value that the SLI metric is compared to.
* **RequestBasedSliMetric**: [RequestBasedSliMetric](#requestbasedslimetric) (Required)

## RequestBasedSliMetric
### Properties
* **KeyAttributes**: [KeyAttributes](#keyattributes)
* **MetricType**: string: If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
* **MonitoredRequestCountMetric**: [MonitoredRequestCountMetric](#monitoredrequestcountmetric)
* **OperationName**: string: If the SLO monitors a specific operation of the service, this field displays that operation name.
* **TotalRequestCountMetric**: [MetricDataQuery](#metricdataquery)[]: This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric`.

## RollingInterval
### Properties
* **Duration**: int (Required)
* **DurationUnit**: string (Required)

## Sli
### Properties
* **ComparisonOperator**: string (Required): The arithmetic operation used when comparing the specified metric to the threshold.
* **MetricThreshold**: int (Required): The value that the SLI metric is compared to.
* **SliMetric**: [SliMetric](#slimetric) (Required)

## SliMetric
### Properties
* **KeyAttributes**: [KeyAttributes](#keyattributes)
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[]
* **MetricType**: string: If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
* **OperationName**: string: If the SLO monitors a specific operation of the service, this field displays that operation name.
* **PeriodSeconds**: int: The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
* **Statistic**: string: The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic

## Tag
### Properties
* **Key**: string (Required): A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
* **Value**: string (Required): The value for the specified tag key.

