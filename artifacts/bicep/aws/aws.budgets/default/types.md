# AWS.Budgets @ default

## Resource AWS.Budgets/BudgetsAction@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Budgets/BudgetsActionProperties](#awsbudgetsbudgetsactionproperties): properties of the resource

## AWS.Budgets/BudgetsActionProperties
### Properties
* **ActionId**: string (ReadOnly)
* **ActionThreshold**: [ActionThreshold](#actionthreshold)
* **ActionType**: string
* **ApprovalModel**: string
* **BudgetName**: string
* **Definition**: [Definition](#definition)
* **ExecutionRoleArn**: string
* **NotificationType**: string
* **Subscribers**: [Subscriber](#subscriber)[]

## ActionThreshold
### Properties
* **Type**: string
* **Value**: int

## Definition
### Properties
* **IamActionDefinition**: [IamActionDefinition](#iamactiondefinition)
* **ScpActionDefinition**: [ScpActionDefinition](#scpactiondefinition)
* **SsmActionDefinition**: [SsmActionDefinition](#ssmactiondefinition)

## IamActionDefinition
### Properties
* **Groups**: string[]
* **PolicyArn**: string
* **Roles**: string[]
* **Users**: string[]

## ScpActionDefinition
### Properties
* **PolicyId**: string
* **TargetIds**: string[]

## SsmActionDefinition
### Properties
* **InstanceIds**: string[]
* **Region**: string
* **Subtype**: string

## Subscriber
### Properties
* **Address**: string
* **Type**: string

