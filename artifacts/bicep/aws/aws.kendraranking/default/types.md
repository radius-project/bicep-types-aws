# AWS.KendraRanking @ default

## Resource AWS.KendraRanking/ExecutionPlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.KendraRanking/ExecutionPlanProperties](#awskendrarankingexecutionplanproperties) (Required): properties of the resource

## AWS.KendraRanking/ExecutionPlanProperties
### Properties
* **Arn**: string (ReadOnly)
* **CapacityUnits**: [CapacityUnitsConfiguration](#capacityunitsconfiguration): Capacity units
* **Description**: string: A description for the execution plan
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]: Tags for labeling the execution plan

## CapacityUnitsConfiguration
### Properties
* **RescoreCapacityUnits**: int (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

