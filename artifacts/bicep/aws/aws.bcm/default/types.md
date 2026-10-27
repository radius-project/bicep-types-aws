# AWS.BCM @ default

## Resource AWS.BCM/Dashboard@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BCM/DashboardProperties](#awsbcmdashboardproperties) (Required, Identifier): properties of the resource

## Resource AWS.BCM/ScheduledReport@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BCM/ScheduledReportProperties](#awsbcmscheduledreportproperties) (Required, Identifier): properties of the resource

## AWS.BCM/DashboardProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **Type**: string (ReadOnly)
* **UpdatedAt**: string (ReadOnly)
* **Widgets**: [Widget](#widget)[] (Required)

## AWS.BCM/ScheduledReportProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the scheduled report.
* **CreatedAt**: string (ReadOnly): The timestamp when the scheduled report was created.
* **DashboardArn**: string (Required): The ARN of the dashboard associated with the scheduled report. Managed dashboards cannot be used.
* **Description**: string: A description of the scheduled report's purpose or contents.
* **HealthStatus**: [HealthStatus](#healthstatus) (ReadOnly): The health status of the scheduled report at its last refresh time.
* **Name**: string (Required): The name of the scheduled report.
* **ScheduleConfig**: [ScheduleConfig](#scheduleconfig) (Required): The schedule configuration that defines when and how often the report is generated.
* **ScheduledReportExecutionRoleArn**: string (Required): The ARN of the IAM role that the scheduled report uses to execute. AWS Billing and Cost Management Dashboards assumes this IAM role while executing the scheduled report.
* **Tags**: [Tag](#tag)[]: The tags applied to the scheduled report.
* **UpdatedAt**: string (ReadOnly): The timestamp when the scheduled report was last modified.
* **WidgetDateRangeOverride**: [DateTimeRange](#datetimerange): The date range override applied to widgets in the scheduled report.
* **WidgetIds**: string[]: The list of widget identifiers included in the scheduled report. If not specified, all widgets in the dashboard are included.

## CostAndUsageExpression
### Properties
* **And**: [CostAndUsageExpression](#costandusageexpression)[]
* **CostCategories**: [CostCategoryValues](#costcategoryvalues)
* **Dimensions**: [DimensionValues](#dimensionvalues)
* **Not**: [CostAndUsageExpression](#costandusageexpression)
* **Or**: [CostAndUsageExpression](#costandusageexpression)[]
* **Tags**: [TagValues](#tagvalues)

## CostAndUsageQuery
### Properties
* **Filter**: [CostAndUsageExpression](#costandusageexpression)
* **Granularity**: string (Required)
* **GroupBy**: [GroupDefinition](#groupdefinition)[]
* **Metrics**: string[] (Required)
* **TimeRange**: [DateTimeRange](#datetimerange) (Required)

## CostCategoryValues
### Properties
* **Key**: string (Required)
* **MatchOptions**: string[]
* **Values**: string[] (Required)

## DateTimeRange
### Properties
* **EndTime**: [DateTimeValue](#datetimevalue) (Required)
* **StartTime**: [DateTimeValue](#datetimevalue) (Required)

## DateTimeRange
### Properties
* **EndTime**: [DateTimeValue](#datetimevalue) (Required): The end of the range.
* **StartTime**: [DateTimeValue](#datetimevalue) (Required): The start of the range.

## DateTimeValue
### Properties
* **Type**: string (Required)
* **Value**: string (Required)

## DateTimeValue
### Properties
* **Type**: string (Required): Whether Value is an absolute date or a duration relative to now.
* **Value**: string (Required): The date, or an ISO 8601 duration when Type is RELATIVE.

## DimensionValues
### Properties
* **Key**: string (Required)
* **MatchOptions**: string[]
* **Values**: string[] (Required)

## DisplayConfig
### Properties
* **Graph**: [GraphDisplayConfigMap](#graphdisplayconfigmap)
* **Table**: [TableDisplayConfigStruct](#tabledisplayconfigstruct)

## Expression
### Properties
* **And**: [Expression](#expression)[]
* **CostCategories**: [CostCategoryValues](#costcategoryvalues)
* **Dimensions**: [DimensionValues](#dimensionvalues)
* **Not**: [Expression](#expression)
* **Tags**: [TagValues](#tagvalues)

## GraphDisplayConfigMap
### Properties

## GroupDefinition
### Properties
* **Key**: string (Required)
* **Type**: string

## HealthStatus
### Properties
* **LastRefreshedAt**: string: The time at which the health status was last refreshed.
* **StatusCode**: string (Required): Whether the scheduled report is healthy.

## QueryParameters
### Properties
* **CostAndUsage**: [CostAndUsageQuery](#costandusagequery)
* **ReservationCoverage**: [ReservationCoverageQuery](#reservationcoveragequery)
* **ReservationUtilization**: [ReservationUtilizationQuery](#reservationutilizationquery)
* **SavingsPlansCoverage**: [SavingsPlansCoverageQuery](#savingsplanscoveragequery)
* **SavingsPlansUtilization**: [SavingsPlansUtilizationQuery](#savingsplansutilizationquery)

## ReservationCoverageQuery
### Properties
* **Filter**: [Expression](#expression)
* **Granularity**: string
* **GroupBy**: [GroupDefinition](#groupdefinition)[]
* **Metrics**: string[]
* **TimeRange**: [DateTimeRange](#datetimerange) (Required)

## ReservationUtilizationQuery
### Properties
* **Filter**: [Expression](#expression)
* **Granularity**: string
* **GroupBy**: [GroupDefinition](#groupdefinition)[]
* **TimeRange**: [DateTimeRange](#datetimerange) (Required)

## SavingsPlansCoverageQuery
### Properties
* **Filter**: [Expression](#expression)
* **Granularity**: string
* **GroupBy**: [GroupDefinition](#groupdefinition)[]
* **Metrics**: string[]
* **TimeRange**: [DateTimeRange](#datetimerange) (Required)

## SavingsPlansUtilizationQuery
### Properties
* **Filter**: [Expression](#expression)
* **Granularity**: string
* **TimeRange**: [DateTimeRange](#datetimerange) (Required)

## ScheduleConfig
### Properties
* **ScheduleExpression**: string: The schedule expression that specifies when to trigger the scheduled report run. This value must be a cron expression consisting of six fields separated by white spaces: cron(minutes hours day_of_month month day_of_week year).
* **ScheduleExpressionTimeZone**: string: The time zone for the schedule expression, for example, UTC.
* **SchedulePeriod**: [SchedulePeriod](#scheduleperiod): The time period during which the schedule is active.
* **State**: string: The state of the schedule. ENABLED means the scheduled report runs according to its schedule expression. DISABLED means the scheduled report is paused and will not run until re-enabled.

## SchedulePeriod
### Properties
* **EndTime**: string: The time at which the schedule stops being active.
* **StartTime**: string: The time at which the schedule becomes active.

## TableDisplayConfigStruct
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TagValues
### Properties
* **Key**: string (Required)
* **MatchOptions**: string[]
* **Values**: string[] (Required)

## Widget
### Properties
* **Configs**: [WidgetConfig](#widgetconfig)[] (Required)
* **Description**: string
* **Height**: int
* **HorizontalOffset**: int
* **Title**: string (Required)
* **Width**: int

## WidgetConfig
### Properties
* **DisplayConfig**: [DisplayConfig](#displayconfig) (Required)
* **QueryParameters**: [QueryParameters](#queryparameters) (Required)

