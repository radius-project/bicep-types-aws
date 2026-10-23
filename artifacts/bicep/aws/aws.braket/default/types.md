# AWS.Braket @ default

## Resource AWS.Braket/SpendingLimit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Braket/SpendingLimitProperties](#awsbraketspendinglimitproperties) (Required, Identifier): properties of the resource

## AWS.Braket/SpendingLimitProperties
### Properties
* **CreatedAt**: string (ReadOnly): The date and time when the spending limit was created, in ISO 8601 format.
* **DeviceArn**: string (Required): The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.
* **QueuedSpend**: string (ReadOnly): The amount currently queued for spending on the device, in USD.
* **SpendingLimit**: string (Required): The maximum amount that can be spent on the specified device, in USD.
* **SpendingLimitArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) that uniquely identifies the spending limit.
* **Tags**: [Tag](#tag)[]: The tags to apply to the spending limit.
* **TimePeriod**: [TimePeriod](#timeperiod)
* **TotalSpend**: string (ReadOnly): The total amount spent on the device so far during the current time period, in USD.
* **UpdatedAt**: string (ReadOnly): The date and time when the spending limit was last modified, in ISO 8601 format.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TimePeriod
### Properties
* **EndAt**: string (Required): The end date and time for the spending limit period, in ISO 8601 format.
* **StartAt**: string (Required): The start date and time for the spending limit period, in ISO 8601 format.

