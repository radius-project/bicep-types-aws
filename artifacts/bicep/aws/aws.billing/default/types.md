# AWS.Billing @ default

## Resource AWS.Billing/BillingView@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Billing/BillingViewProperties](#awsbillingbillingviewproperties) (Required, Identifier): properties of the resource

## AWS.Billing/BillingViewProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **BillingViewType**: string (ReadOnly)
* **CreatedAt**: int (ReadOnly): The time when the billing view was created.
* **DataFilterExpression**: [BillingView_DataFilterExpression](#billingviewdatafilterexpression)
* **Description**: string
* **Name**: string (Required)
* **OwnerAccountId**: string (ReadOnly)
* **SourceViews**: string[] (Required): An array of strings that define the billing view's source.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs associated to the billing view being created.
* **UpdatedAt**: int (ReadOnly): The time when the billing view was last updated.

## BillingView_DataFilterExpression
### Properties
* **Dimensions**: [BillingView_DataFilterExpression_Dimensions](#billingviewdatafilterexpressiondimensions)
* **Tags**: [BillingView_DataFilterExpression_Tags](#billingviewdatafilterexpressiontags)
* **TimeRange**: [BillingView_DataFilterExpression_TimeRange](#billingviewdatafilterexpressiontimerange)

## BillingView_DataFilterExpression_Dimensions
### Properties
* **Key**: string
* **Values**: string[]

## BillingView_DataFilterExpression_Tags
### Properties
* **Key**: string
* **Values**: string[]

## BillingView_DataFilterExpression_TimeRange
### Properties
* **BeginDateInclusive**: string
* **EndDateInclusive**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

