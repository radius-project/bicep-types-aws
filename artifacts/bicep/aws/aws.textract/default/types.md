# AWS.Textract @ default

## Resource AWS.Textract/Adapter@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Textract/AdapterProperties](#awstextractadapterproperties) (Required, Identifier): properties of the resource

## AWS.Textract/AdapterProperties
### Properties
* **AdapterId**: string (ReadOnly): A unique identifier for the adapter resource.
* **AdapterName**: string (Required)
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the adapter.
* **AutoUpdate**: string
* **CreationTime**: string (ReadOnly): The date and time that the adapter was created.
* **Description**: string
* **FeatureTypes**: string[] (Required): The type of feature that the adapter is being trained on. Currently, supported feature types are: QUERIES
* **Tags**: [Tag](#tag)[]: A list of tags to be added to the adapter.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

