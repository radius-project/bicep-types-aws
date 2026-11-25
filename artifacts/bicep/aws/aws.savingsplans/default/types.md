# AWS.SavingsPlans @ default

## Resource AWS.SavingsPlans/SavingsPlan@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SavingsPlans/SavingsPlanProperties](#awssavingsplanssavingsplanproperties) (Identifier): properties of the resource

## AWS.SavingsPlans/SavingsPlanProperties
### Properties
* **Commitment**: string (ReadOnly): The hourly commitment amount in the specified currency.
* **Currency**: string (ReadOnly): The currency.
* **Description**: string (ReadOnly): The description.
* **End**: string (ReadOnly): The end time.
* **PaymentOption**: string (ReadOnly): The payment option.
* **ProductTypes**: string[] (ReadOnly): The product types.
* **RecurringPaymentAmount**: string (ReadOnly): The recurring payment amount.
* **SavingsPlanArn**: string (Identifier): The Amazon Resource Name (ARN) of the Savings Plan.
* **SavingsPlanId**: string (ReadOnly): The ID of the Savings Plan.
* **SavingsPlanOfferingId**: string (ReadOnly): The ID of the offering.
* **SavingsPlanType**: string (ReadOnly): The plan type.
* **Start**: string (ReadOnly): The start time.
* **State**: string (ReadOnly): The current state of the Savings Plan.
* **Tags**: [Tag](#tag)[] (ReadOnly): One or more tags.
* **TermDurationInSeconds**: int (ReadOnly): The duration of the term, in seconds.
* **UpfrontPaymentAmount**: string (ReadOnly): The up-front payment amount.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

