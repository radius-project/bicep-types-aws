# AWS.BcmPricingCalculator @ default

## Resource AWS.BcmPricingCalculator/BillScenario@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BcmPricingCalculator/BillScenarioProperties](#awsbcmpricingcalculatorbillscenarioproperties) (Identifier): properties of the resource

## AWS.BcmPricingCalculator/BillScenarioProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the bill scenario.
* **BillInterval**: [BillInterval](#billinterval) (ReadOnly): The time period covered by the bill scenario
* **CostCategoryGroupSharingPreferenceArn**: string: The ARN of the cost category group sharing preference
* **CreatedAt**: string (ReadOnly): The timestamp when the bill scenario was created
* **ExpiresAt**: string: The timestamp when the bill scenario expires
* **FailureMessage**: string (ReadOnly): The failure message if the bill scenario failed
* **GroupSharingPreference**: string: The group sharing preference for the bill scenario
* **Id**: string (ReadOnly): The unique identifier of the bill scenario
* **Name**: string: The name of the bill scenario
* **Status**: string (ReadOnly): The status of the bill scenario
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

## BillInterval
### Properties
* **End**: string
* **Start**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

