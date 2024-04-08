# AWS.CleanRoomsML @ default

## Resource AWS.CleanRoomsML/TrainingDataset@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CleanRoomsML/TrainingDatasetProperties](#awscleanroomsmltrainingdatasetproperties) (Required, Identifier): properties of the resource

## AWS.CleanRoomsML/TrainingDatasetProperties
### Properties
* **Description**: string
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this cleanrooms-ml training dataset.
* **TrainingData**: [Dataset](#dataset)[] (Required)
* **TrainingDatasetArn**: string (ReadOnly, Identifier)

## ColumnSchema
### Properties
* **ColumnName**: string (Required)
* **ColumnTypes**: string[] (Required)

## Dataset
### Properties
* **InputConfig**: [DatasetInputConfig](#datasetinputconfig) (Required)
* **Type**: string (Required)

## DatasetInputConfig
### Properties
* **DataSource**: [DataSource](#datasource) (Required)
* **Schema**: [ColumnSchema](#columnschema)[] (Required)

## DataSource
### Properties
* **GlueDataSource**: [GlueDataSource](#gluedatasource) (Required)

## GlueDataSource
### Properties
* **CatalogId**: string
* **DatabaseName**: string (Required)
* **TableName**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

