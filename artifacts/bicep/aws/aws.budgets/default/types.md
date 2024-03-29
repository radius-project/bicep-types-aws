# AWS.Budgets @ default

## Resource AWS.Budgets/BudgetsAction@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Budgets/BudgetsActionProperties](#awsbudgetsbudgetsactionproperties) (Required): properties of the resource

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
* **Subscribers**: [Subscriber](#subscriber)[] (Required)

## ActionThreshold
### Properties
* **Type**: string (Required)
* **Value**: int (Required)

## Definition
### Properties
* **IamActionDefinition**: [IamActionDefinition](#iamactiondefinition)
* **ScpActionDefinition**: [ScpActionDefinition](#scpactiondefinition)
* **SsmActionDefinition**: [SsmActionDefinition](#ssmactiondefinition)

## IamActionDefinition
### Properties
* **Groups**: string[]
* **PolicyArn**: string (Required)
* **Roles**: string[]
* **Users**: string[]

## ScpActionDefinition
### Properties
* **PolicyId**: string (Required)
* **TargetIds**: string[] (Required)

## SsmActionDefinition
### Properties
* **InstanceIds**: string[] (Required)
* **Region**: string (Required)
* **Subtype**: string (Required)

## Subscriber
### Properties
* **Address**: string (Required)
* **Type**: string (Required)

