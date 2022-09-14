# AWS.Forecast @ default

## Resource AWS.Forecast/DatasetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Forecast/DatasetGroupProperties](#awsforecastdatasetgroupproperties) (Required): properties of the resource

## AWS.Forecast/DatasetGroupProperties
### Properties
* **DatasetArns**: [Arn](#arn)[]: An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
* **DatasetGroupArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the dataset group to delete.
* **DatasetGroupName**: string (Required): A name for the dataset group.
* **Domain**: string (Required): The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.
* **Tags**: [Tag](#tag)[]: The tags of Application Insights application.

## Arn
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

