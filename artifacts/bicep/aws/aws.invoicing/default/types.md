# AWS.Invoicing @ default

## Resource AWS.Invoicing/InvoiceUnit@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Invoicing/InvoiceUnitProperties](#awsinvoicinginvoiceunitproperties) (Required, Identifier): properties of the resource

## AWS.Invoicing/InvoiceUnitProperties
### Properties
* **Description**: string
* **InvoiceReceiver**: string (Required)
* **InvoiceUnitArn**: string (ReadOnly, Identifier)
* **LastModified**: int (ReadOnly)
* **Name**: string (Required)
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **Rule**: [Rule](#rule) (Required)
* **TaxInheritanceDisabled**: bool

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Rule
### Properties
* **LinkedAccounts**: string[] (Required)

