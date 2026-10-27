# AWS.Budgets @ default

## Resource AWS.Budgets/Budget@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Budgets/BudgetProperties](#awsbudgetsbudgetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Budgets/BudgetsAction@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Budgets/BudgetsActionProperties](#awsbudgetsbudgetsactionproperties) (Required, Identifier): properties of the resource

## ActionThreshold
### Properties
* **Type**: string (Required)
* **Value**: int (Required)

## AutoAdjustData
### Properties
* **AutoAdjustType**: string (Required)
* **HistoricalOptions**: [HistoricalOptions](#historicaloptions)

## AWS.Budgets/BudgetProperties
### Properties
* **Budget**: [BudgetData](#budgetdata) (Required)
* **Id**: string (ReadOnly, Identifier)
* **NotificationsWithSubscribers**: [NotificationWithSubscribers](#notificationwithsubscribers)[]
* **ResourceTags**: [ResourceTag](#resourcetag)[]

## AWS.Budgets/BudgetsActionProperties
### Properties
* **ActionId**: string (ReadOnly, Identifier)
* **ActionThreshold**: [ActionThreshold](#actionthreshold) (Required)
* **ActionType**: string (Required)
* **ApprovalModel**: string
* **BudgetName**: string (Required, Identifier)
* **Definition**: [Definition](#definition) (Required)
* **ExecutionRoleArn**: string (Required)
* **NotificationType**: string (Required)
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **Subscribers**: [Subscriber](#subscriber)[] (Required)

## Budget_CostFilters
### Properties

## Budget_PlannedBudgetLimits
### Properties

## BudgetData
### Properties
* **AutoAdjustData**: [AutoAdjustData](#autoadjustdata)
* **BillingViewArn**: string
* **BudgetLimit**: [Spend](#spend)
* **BudgetName**: string
* **BudgetType**: string (Required)
* **CostFilters**: [Budget_CostFilters](#budgetcostfilters)
* **CostTypes**: [CostTypes](#costtypes)
* **FilterExpression**: [Expression](#expression)
* **Metrics**: string[]
* **PlannedBudgetLimits**: [Budget_PlannedBudgetLimits](#budgetplannedbudgetlimits)
* **TimePeriod**: [TimePeriod](#timeperiod)
* **TimeUnit**: string (Required)

## CostCategoryValues
### Properties
* **Key**: string
* **MatchOptions**: string[]
* **Values**: string[]

## CostTypes
### Properties
* **IncludeCredit**: bool
* **IncludeDiscount**: bool
* **IncludeOtherSubscription**: bool
* **IncludeRecurring**: bool
* **IncludeRefund**: bool
* **IncludeSubscription**: bool
* **IncludeSupport**: bool
* **IncludeTax**: bool
* **IncludeUpfront**: bool
* **UseAmortized**: bool
* **UseBlended**: bool

## Definition
### Properties
* **IamActionDefinition**: [IamActionDefinition](#iamactiondefinition)
* **ScpActionDefinition**: [ScpActionDefinition](#scpactiondefinition)
* **SsmActionDefinition**: [SsmActionDefinition](#ssmactiondefinition)

## Expression
### Properties
* **And**: [Expression](#expression)[]
* **CostCategories**: [CostCategoryValues](#costcategoryvalues)
* **Dimensions**: [ExpressionDimensionValues](#expressiondimensionvalues)
* **Not**: [Expression](#expression)
* **Or**: [Expression](#expression)[]
* **Tags**: [TagValues](#tagvalues)

## ExpressionDimensionValues
### Properties
* **Key**: string
* **MatchOptions**: string[]
* **Values**: string[]

## HistoricalOptions
### Properties
* **BudgetAdjustmentPeriod**: int (Required)

## IamActionDefinition
### Properties
* **Groups**: string[]
* **PolicyArn**: string (Required)
* **Roles**: string[]
* **Users**: string[]

## Notification
### Properties
* **ComparisonOperator**: string (Required)
* **NotificationType**: string (Required)
* **Threshold**: int (Required)
* **ThresholdType**: string

## NotificationWithSubscribers
### Properties
* **Notification**: [Notification](#notification) (Required)
* **Subscribers**: [Subscriber](#subscriber)[] (Required)

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ScpActionDefinition
### Properties
* **PolicyId**: string (Required)
* **TargetIds**: string[] (Required)

## Spend
### Properties
* **Amount**: int (Required)
* **Unit**: string (Required)

## SsmActionDefinition
### Properties
* **InstanceIds**: string[] (Required)
* **Region**: string (Required)
* **Subtype**: string (Required)

## Subscriber
### Properties
* **Address**: string (Required)
* **SubscriptionType**: string (Required)

## Subscriber
### Properties
* **Address**: string (Required)
* **Type**: string (Required)

## TagValues
### Properties
* **Key**: string
* **MatchOptions**: string[]
* **Values**: string[]

## TimePeriod
### Properties
* **End**: string
* **Start**: string

