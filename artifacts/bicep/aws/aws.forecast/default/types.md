# AWS.Forecast @ default

## Resource AWS.Forecast/Dataset@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Forecast/DatasetProperties](#awsforecastdatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.Forecast/DatasetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Forecast/DatasetGroupProperties](#awsforecastdatasetgroupproperties) (Required, Identifier): properties of the resource

## AWS.Forecast/DatasetGroupProperties
### Properties
* **DatasetArns**: string[]: An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
* **DatasetGroupArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the dataset group to delete.
* **DatasetGroupName**: string (Required): A name for the dataset group.
* **Domain**: string (Required): The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the Domain parameter of the CreateDataset operation must match.
* **Tags**: [Tag](#tag)[]: The tags of Application Insights application.

## AWS.Forecast/DatasetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DataFrequency**: string: Frequency of data collection. This parameter is required for RELATED_TIME_SERIES
* **DatasetName**: string (Required): A name for the dataset
* **DatasetType**: string (Required): The dataset type
* **Domain**: string (Required): The domain associated with the dataset
* **EncryptionConfig**: [Dataset_EncryptionConfig](#datasetencryptionconfig)
* **Schema**: [Dataset_Schema](#datasetschema) (Required)
* **Tags**: [Dataset_Tags](#datasettags)[]

## Dataset_Attributes
### Properties
* **AttributeName**: string: Name of the dataset field
* **AttributeType**: string: Data type of the field

## Dataset_EncryptionConfig
### Properties
* **KmsKeyArn**: string
* **RoleArn**: string

## Dataset_Schema
### Properties
* **Attributes**: [Dataset_Attributes](#datasetattributes)[]

## Dataset_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

