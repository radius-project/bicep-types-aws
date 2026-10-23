# AWS.ApplicationSignals @ default

## Resource AWS.ApplicationSignals/Discovery@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationSignals/DiscoveryProperties](#awsapplicationsignalsdiscoveryproperties) (Identifier): properties of the resource

## Resource AWS.ApplicationSignals/GroupingConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationSignals/GroupingConfigurationProperties](#awsapplicationsignalsgroupingconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApplicationSignals/InstrumentationConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationSignals/InstrumentationConfigProperties](#awsapplicationsignalsinstrumentationconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApplicationSignals/ServiceLevelObjective@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationSignals/ServiceLevelObjectiveProperties](#awsapplicationsignalsservicelevelobjectiveproperties) (Required, Identifier): properties of the resource

## AttributeFilterGroup
### Properties

## AWS.ApplicationSignals/DiscoveryProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)

## AWS.ApplicationSignals/GroupingConfigurationProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)
* **GroupingAttributeDefinitions**: [GroupingAttributeDefinition](#groupingattributedefinition)[] (Required)
* **UpdatedAt**: string (ReadOnly)

## AWS.ApplicationSignals/InstrumentationConfigProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the instrumentation configuration.
* **AttributeFilters**: [AttributeFilterGroup](#attributefiltergroup)[]: Client-side filters that target specific instances. Each object is AND-matched on keys, multiple objects are OR-matched.
* **CaptureConfiguration**: [InstrumentationConfig_CaptureConfiguration](#instrumentationconfigcaptureconfiguration) (Required): Specifies what to capture when the instrumentation point is hit.
* **CreatedAt**: string (ReadOnly): The server-generated creation timestamp for this instrumentation configuration.
* **Description**: string: An optional short description that explains the purpose of this instrumentation.
* **Environment**: string (Required, Identifier): The environment that the service is running in.
* **ExpiresAt**: string: The timestamp after which this configuration is no longer served. For BREAKPOINT only; defaults to 24 hours.
* **InstrumentationType**: string (Required, Identifier): Type of instrumentation: BREAKPOINT (temporary, expires after 24 hours) or PROBE (permanent, persists until deleted).
* **Location**: [InstrumentationConfig_Location](#instrumentationconfiglocation) (Required): The location where instrumentation should be applied.
* **LocationHash**: string (ReadOnly, Identifier): A stable hash computed from the location that uniquely identifies this instrumentation point.
* **Service**: string (Required, Identifier): The name of the service to instrument. This should match the service.name resource attribute reported by the application.
* **SignalType**: string (Required, Identifier): The telemetry signal type to emit for this instrumentation. The supported value is SNAPSHOT.
* **Tags**: [Tag](#tag)[]: An optional list of key-value pairs to associate with the instrumentation configuration.

## AWS.ApplicationSignals/ServiceLevelObjectiveProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of this SLO.
* **BurnRateConfigurations**: [BurnRateConfiguration](#burnrateconfiguration)[]
* **CreatedTime**: int (ReadOnly): Epoch time in seconds of the time that this SLO was created
* **Description**: string: An optional description for this SLO. Default is 'No description'
* **EvaluationType**: string (ReadOnly): Displays whether this is a period-based SLO or a request-based SLO.
* **ExclusionWindows**: [ExclusionWindow](#exclusionwindow)[]
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

## CaptureLimitsConfig
### Properties
* **MaxCollectionDepth**: int: Maximum nesting depth to traverse inside collections.
* **MaxCollectionWidth**: int: Maximum number of items to capture from any collection.
* **MaxFieldsPerObject**: int: Maximum number of fields to capture for any object.
* **MaxHits**: int: Maximum number of times the instrumentation point can be hit before disabled.
* **MaxObjectDepth**: int: Maximum depth for nested object traversal.
* **MaxStackFrames**: int: Maximum number of stack frames to capture.
* **MaxStackTraceSize**: int: Maximum total size in bytes of a captured stack trace.
* **MaxStringLength**: int: Maximum length of captured string values in characters.

## CodeCaptureConfiguration
### Properties
* **CaptureArguments**: string[]: The function arguments to capture.
* **CaptureLimits**: [CaptureLimitsConfig](#capturelimitsconfig) (Required)
* **CaptureLocals**: string[]: The local variables to capture by name.
* **CaptureReturn**: bool: Whether to capture the return value. Defaults to false.
* **CaptureStackTrace**: bool: Whether to capture a stack trace. Defaults to true.

## CodeLocation
### Properties
* **ClassName**: string: The class or type name that contains the method.
* **CodeUnit**: string: The package, module, or namespace that contains the target code.
* **FilePath**: string (Required): The source file path relative to the project or source root.
* **Language**: string (Required): The programming language for this instrumentation point.
* **LineNumber**: int: The line number to instrument.
* **MethodName**: string: The method or function name to instrument.

## CompositeSliComponent
### Properties
* **OperationName**: string (Required)

## CompositeSliConfig
### Properties
* **CompositeSliComponents**: [CompositeSliComponent](#compositeslicomponent)[]
* **SelectionConfig**: [SelectionConfig](#selectionconfig) (Required)

## DependencyConfig
### Properties
* **DependencyKeyAttributes**: [ServiceLevelObjective_DependencyKeyAttributes](#servicelevelobjectivedependencykeyattributes) (Required)
* **DependencyOperationName**: string (Required): When the SLO monitors a specific operation of the dependency, this field specifies the name of that operation in the dependency.

## Dimension
### Properties
* **Name**: string (Required): The name of the dimension. Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:). ASCII control characters are not supported as part of dimension names.
* **Value**: string (Required): The value of the dimension. Dimension values must contain only ASCII characters and must include at least one non-whitespace character. ASCII control characters are not supported as part of dimension values

## ExclusionWindow
### Properties
* **Reason**: string: An optional reason for scheduling this time exclusion window. Default is 'No reason'.
* **RecurrenceRule**: [RecurrenceRule](#recurrencerule)
* **StartTime**: string: The time you want the exclusion window to start at. Note that time exclusion windows can only be scheduled in the future, not the past.
* **Window**: [Window](#window) (Required)

## Goal
### Properties
* **AttainmentGoal**: int: The threshold that determines if the goal is being met. An attainment goal is the ratio of good periods that meet the threshold requirements to the total periods within the interval. For example, an attainment goal of 99.9% means that within your interval, you are targeting 99.9% of the periods to be in healthy state.
If you omit this parameter, 99 is used to represent 99% as the attainment goal.
* **Interval**: [Interval](#interval)
* **WarningThreshold**: int: The percentage of remaining budget over total budget that you want to get warnings for. If you omit this parameter, the default of 50.0 is used.

## GroupingAttributeDefinition
### Properties
* **DefaultGroupingValue**: string
* **GroupingName**: string (Required)
* **GroupingSourceKeys**: string[] (Required)

## InstrumentationConfig_CaptureConfiguration
### Properties
* **CodeCapture**: [CodeCaptureConfiguration](#codecaptureconfiguration) (Required)

## InstrumentationConfig_Location
### Properties
* **CodeLocation**: [CodeLocation](#codelocation) (Required)

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

## MetricSource
### Properties
* **MetricSourceAttributes**: [ServiceLevelObjective_MetricSourceAttributes](#servicelevelobjectivemetricsourceattributes)
* **MetricSourceKeyAttributes**: [ServiceLevelObjective_MetricSourceKeyAttributes](#servicelevelobjectivemetricsourcekeyattributes) (Required)

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

## RecurrenceRule
### Properties
* **Expression**: string (Required): A cron or rate expression denoting how often to repeat this exclusion window.

## RequestBasedSli
### Properties
* **ComparisonOperator**: string: The arithmetic operation used when comparing the specified metric to the threshold.
* **MetricThreshold**: int: The value that the SLI metric is compared to.
* **RequestBasedSliMetric**: [RequestBasedSliMetric](#requestbasedslimetric) (Required)

## RequestBasedSliMetric
### Properties
* **CompositeSliConfig**: [CompositeSliConfig](#compositesliconfig)
* **DependencyConfig**: [DependencyConfig](#dependencyconfig)
* **KeyAttributes**: [KeyAttributes](#keyattributes)
* **MetricName**: string
* **MetricSource**: [MetricSource](#metricsource)
* **MetricType**: string: If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
* **MonitoredRequestCountMetric**: [MonitoredRequestCountMetric](#monitoredrequestcountmetric)
* **OperationName**: string: If the SLO monitors a specific operation of the service, this field displays that operation name.
* **TotalRequestCountMetric**: [MetricDataQuery](#metricdataquery)[]: This structure defines the metric that is used as the "total requests" number for a request-based SLO. The number observed for this metric is divided by the number of "good requests" or "bad requests" that is observed for the metric defined in `MonitoredRequestCountMetric`.

## RollingInterval
### Properties
* **Duration**: int (Required)
* **DurationUnit**: string (Required)

## SelectionConfig
### Properties
* **Pattern**: string
* **Type**: string (Required)

## ServiceLevelObjective_DependencyKeyAttributes
### Properties

## ServiceLevelObjective_MetricSourceAttributes
### Properties

## ServiceLevelObjective_MetricSourceKeyAttributes
### Properties

## Sli
### Properties
* **ComparisonOperator**: string (Required): The arithmetic operation used when comparing the specified metric to the threshold.
* **MetricThreshold**: int (Required): The value that the SLI metric is compared to.
* **SliMetric**: [SliMetric](#slimetric) (Required)

## SliMetric
### Properties
* **CompositeSliConfig**: [CompositeSliConfig](#compositesliconfig)
* **DependencyConfig**: [DependencyConfig](#dependencyconfig)
* **KeyAttributes**: [KeyAttributes](#keyattributes)
* **MetricDataQueries**: [MetricDataQuery](#metricdataquery)[]
* **MetricName**: string
* **MetricSource**: [MetricSource](#metricsource)
* **MetricType**: string: If the SLO monitors either the LATENCY or AVAILABILITY metric that Application Signals collects, this field displays which of those metrics is used.
* **OperationName**: string: If the SLO monitors a specific operation of the service, this field displays that operation name.
* **PeriodSeconds**: int: The number of seconds to use as the period for SLO evaluation. Your application's performance is compared to the SLI during each period. For each period, the application is determined to have either achieved or not achieved the necessary performance.
* **Statistic**: string: The statistic to use for comparison to the threshold. It can be any CloudWatch statistic or extended statistic

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): A string that you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
* **Value**: string (Required): The value for the specified tag key.

## Window
### Properties
* **Duration**: int (Required)
* **DurationUnit**: string (Required)

