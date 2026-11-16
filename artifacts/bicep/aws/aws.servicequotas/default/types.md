# AWS.ServiceQuotas @ default

## Resource AWS.ServiceQuotas/Quota@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceQuotas/QuotaProperties](#awsservicequotasquotaproperties) (Identifier): properties of the resource

## AWS.ServiceQuotas/QuotaProperties
### Properties
* **Adjustable**: bool (ReadOnly): Indicates whether the quota value can be increased.
* **Description**: string (ReadOnly): The quota description.
* **GlobalQuota**: bool (ReadOnly): Indicates whether the quota is global.
* **Period**: [QuotaPeriod](#quotaperiod) (ReadOnly)
* **QuotaAppliedAtLevel**: string (ReadOnly): The level at which the applied quota value is applied.
* **QuotaArn**: string (Identifier): The Amazon Resource Name (ARN) of the quota.
* **QuotaCode**: string: The quota identifier. To find the quota code for a specific quota, use the ListServiceQuotas operation.
* **QuotaContext**: [QuotaContextInfo](#quotacontextinfo) (ReadOnly)
* **QuotaName**: string (ReadOnly): The quota name.
* **ServiceCode**: string: The service identifier. To find the service code value for an AWS service, use the ListServices operation.
* **ServiceName**: string (ReadOnly): The service name.
* **Tags**: [Tag](#tag)[] (ReadOnly): The tags attached to the applied quota.
* **Unit**: string (ReadOnly): The unit of measurement for the quota value.
* **UsageMetric**: [MetricInfo](#metricinfo) (ReadOnly)
* **Value**: int (ReadOnly): The applied quota value.

## MetricInfo
### Properties
* **MetricDimensions**: [Quota_MetricDimensions](#quotametricdimensions): The metric dimensions, as name/value pairs that are part of the identity of a metric.
* **MetricName**: string: The name of the metric.
* **MetricNamespace**: string: The namespace of the metric.
* **MetricStatisticRecommendation**: string: The metric statistic that AWS recommends you use when determining quota usage.

## Quota_MetricDimensions
### Properties
### Additional Properties
* **Additional Properties Type**: string

## QuotaContextInfo
### Properties
* **ContextId**: string: The resource, or resources, to which the quota applies. Either an Amazon Resource Name (ARN) for a specific resource, or '*' for the default value that applies to all resources without a specific applied value.
* **ContextScope**: string: The scope to which the quota value is applied. If RESOURCE, the quota value is applied to each resource in the account. If ACCOUNT, the quota value is applied to the account.
* **ContextScopeType**: string: The resource type to which the quota can be applied.

## QuotaPeriod
### Properties
* **PeriodUnit**: string: The time unit.
* **PeriodValue**: int: The value associated with the reported PeriodUnit.

## Tag
### Properties
* **Key**: string (Required): A string that contains a tag key.
* **Value**: string (Required): A string that contains an optional tag value.

