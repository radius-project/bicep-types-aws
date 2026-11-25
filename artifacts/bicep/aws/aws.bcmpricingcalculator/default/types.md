# AWS.BcmPricingCalculator @ default

## Resource AWS.BcmPricingCalculator/BillEstimate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BcmPricingCalculator/BillEstimateProperties](#awsbcmpricingcalculatorbillestimateproperties) (Required, Identifier): properties of the resource

## Resource AWS.BcmPricingCalculator/BillScenario@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BcmPricingCalculator/BillScenarioProperties](#awsbcmpricingcalculatorbillscenarioproperties) (Identifier): properties of the resource

## Resource AWS.BcmPricingCalculator/WorkloadEstimate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BcmPricingCalculator/WorkloadEstimateProperties](#awsbcmpricingcalculatorworkloadestimateproperties) (Required, Identifier): properties of the resource

## AWS.BcmPricingCalculator/BillEstimateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the bill estimate.
* **BillInterval**: [BillInterval](#billinterval) (ReadOnly): The time period covered by the bill estimate
* **BillScenarioId**: string (WriteOnly): The unique identifier of the bill scenario this estimate is based on
* **CostCategoryGroupSharingPreferenceArn**: string (ReadOnly): The ARN of the cost category group sharing preference
* **CostCategoryGroupSharingPreferenceEffectiveDate**: string (ReadOnly): The effective date of the cost category group sharing preference
* **CreatedAt**: string (ReadOnly): The timestamp when the bill estimate was created
* **ExpiresAt**: string: The timestamp when the bill estimate expires
* **GroupSharingPreference**: string (ReadOnly): The group sharing preference for the bill estimate
* **Id**: string (ReadOnly): The unique identifier of the bill estimate
* **Name**: string (Required): The name of the bill estimate
* **Status**: string (ReadOnly): The status of the bill estimate
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource

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

## AWS.BcmPricingCalculator/WorkloadEstimateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the workload estimate.
* **CostCurrency**: string (ReadOnly): The currency of the estimated cost.
* **CreatedAt**: string (ReadOnly): The timestamp when the workload estimate was created.
* **ExpiresAt**: string: The timestamp when the workload estimate will expire.
* **FailureMessage**: string (ReadOnly): An error message if the workload estimate failed.
* **Id**: string (ReadOnly): The unique identifier of the workload estimate.
* **Name**: string (Required): The name of the workload estimate.
* **RateTimestamp**: string (ReadOnly): The timestamp of the pricing rates used for the estimate.
* **RateType**: string: The type of pricing rates used for the estimate.
* **Status**: string (ReadOnly): The current status of the workload estimate.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TotalCost**: int (ReadOnly): The total estimated cost for the workload.

## BillInterval
### Properties
* **End**: string
* **Start**: string

## BillInterval
### Properties
* **End**: string
* **Start**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

