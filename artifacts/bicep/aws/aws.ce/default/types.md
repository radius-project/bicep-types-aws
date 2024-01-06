# AWS.CE @ default

## Resource AWS.CE/AnomalyMonitor@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CE/AnomalyMonitorProperties](#awsceanomalymonitorproperties) (Required): properties of the resource

## Resource AWS.CE/AnomalySubscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CE/AnomalySubscriptionProperties](#awsceanomalysubscriptionproperties) (Required): properties of the resource

## Resource AWS.CE/CostCategory@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CE/CostCategoryProperties](#awscecostcategoryproperties) (Required): properties of the resource

## AWS.CE/AnomalyMonitorProperties
### Properties
* **CreationDate**: string (ReadOnly): The date when the monitor was created. 
* **DimensionalValueCount**: int (ReadOnly): The value for evaluated dimensions.
* **LastEvaluatedDate**: string (ReadOnly): The date when the monitor last evaluated for anomalies.
* **LastUpdatedDate**: string (ReadOnly): The date when the monitor was last updated.
* **MonitorArn**: string (ReadOnly, Identifier)
* **MonitorDimension**: string: The dimensions to evaluate
* **MonitorName**: string (Required): The name of the monitor.
* **MonitorSpecification**: string
* **MonitorType**: string (Required)
* **ResourceTags**: [ResourceTag](#resourcetag)[] (WriteOnly): Tags to assign to monitor.

## ResourceTag
### Properties
* **Key**: string (Required): The key name for the tag.
* **Value**: string (Required): The value for the tag.

## AWS.CE/AnomalySubscriptionProperties
### Properties
* **AccountId**: string (ReadOnly): The accountId
* **Frequency**: string (Required): The frequency at which anomaly reports are sent over email. 
* **MonitorArnList**: string[] (Required): A list of cost anomaly monitors.
* **ResourceTags**: [ResourceTag](#resourcetag)[] (WriteOnly): Tags to assign to subscription.
* **Subscribers**: [Subscriber](#subscriber)[] (Required, ReadOnly): A list of subscriber
* **SubscriptionArn**: string (ReadOnly, Identifier)
* **SubscriptionName**: string (Required): The name of the subscription.
* **Threshold**: int: The dollar value that triggers a notification if the threshold is exceeded. 
* **ThresholdExpression**: string: An Expression object in JSON String format used to specify the anomalies that you want to generate alerts for.

## ResourceTag
### Properties
* **Key**: string (Required): The key name for the tag.
* **Value**: string (Required): The value for the tag.

## Subscriber
### Properties
* **Address**: string (Required)
* **Status**: string
* **Type**: string (Required)

## AWS.CE/CostCategoryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Cost category ARN
* **DefaultValue**: string: The default value for the cost category
* **EffectiveStart**: string (ReadOnly)
* **Name**: string (Required)
* **Rules**: string (Required): JSON array format of Expression in Billing and Cost Management API
* **RuleVersion**: string (Required)
* **SplitChargeRules**: string: Json array format of CostCategorySplitChargeRule in Billing and Cost Management API

