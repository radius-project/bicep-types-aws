# AWS.Personalize @ default

## Resource AWS.Personalize/Dataset@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Personalize/DatasetProperties](#awspersonalizedatasetproperties) (Required): properties of the resource

## AWS.Personalize/DatasetProperties
### Properties
* **DatasetArn**: string (ReadOnly): The ARN of the dataset
* **DatasetGroupArn**: string (Required): The Amazon Resource Name (ARN) of the dataset group to add the dataset to
* **DatasetImportJob**: [DatasetImportJob](#datasetimportjob)
* **DatasetType**: string (Required): The type of dataset
* **Name**: string (Required): The name for the dataset
* **SchemaArn**: string (Required): The ARN of the schema to associate with the dataset. The schema defines the dataset fields.

## DatasetImportJob
### Properties
* **DatasetArn**: string: The ARN of the dataset that receives the imported data
* **DatasetImportJobArn**: string: The ARN of the dataset import job
* **DataSource**: [Dataset_DataSource](#datasetdatasource): The Amazon S3 bucket that contains the training data to import.
* **JobName**: string: The name for the dataset import job.
* **RoleArn**: string: The ARN of the IAM role that has permissions to read from the Amazon S3 data source.

## Dataset_DataSource
### Properties
* **DataLocation**: string: The path to the Amazon S3 bucket where the data that you want to upload to your dataset is stored.

