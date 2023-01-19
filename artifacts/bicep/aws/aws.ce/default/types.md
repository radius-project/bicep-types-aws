# AWS.CE @ default

## Resource AWS.CE/CostCategory@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.CE/CostCategoryProperties](#awscecostcategoryproperties) (Required): properties of the resource

## AWS.CE/CostCategoryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Cost category ARN
* **DefaultValue**: string: The default value for the cost category
* **EffectiveStart**: string (ReadOnly)
* **Name**: string (Required)
* **Rules**: string (Required): JSON array format of Expression in Billing and Cost Management API
* **RuleVersion**: string (Required)
* **SplitChargeRules**: string: Json array format of CostCategorySplitChargeRule in Billing and Cost Management API

