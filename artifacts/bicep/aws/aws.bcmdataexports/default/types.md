# AWS.BCMDataExports @ default

## Resource AWS.BCMDataExports/Export@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BCMDataExports/ExportProperties](#awsbcmdataexportsexportproperties) (Required, Identifier): properties of the resource

## Resource AWS.BCMDataExports/Table@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BCMDataExports/TableProperties](#awsbcmdataexportstableproperties) (Required, Identifier): properties of the resource

## AWS.BCMDataExports/ExportProperties
### Properties
* **Export**: [Export](#export) (Required)
* **ExportArn**: string (ReadOnly, Identifier)
* **Tags**: [ResourceTag](#resourcetag)[]

## AWS.BCMDataExports/TableProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the table.
* **Description**: string (ReadOnly): The table description.
* **Schema**: [Column](#column)[] (ReadOnly): The schema of the table.
* **TableName**: string (Required): The name of the table.

## Column
### Properties
* **Description**: string: The description for a column.
* **Name**: string: The column name.
* **Type**: string: The kind of data a column stores.

## DataQuery
### Properties
* **QueryStatement**: string (Required)
* **TableConfigurations**: [TableConfigurations](#tableconfigurations)

## DestinationConfigurations
### Properties
* **S3Destination**: [S3Destination](#s3destination) (Required)

## Export
### Properties
* **DataQuery**: [DataQuery](#dataquery) (Required)
* **Description**: string
* **DestinationConfigurations**: [DestinationConfigurations](#destinationconfigurations) (Required)
* **ExportArn**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **RefreshCadence**: [RefreshCadence](#refreshcadence) (Required)

## RefreshCadence
### Properties
* **Frequency**: string (Required)

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## S3Destination
### Properties
* **S3Bucket**: string (Required)
* **S3BucketOwner**: string
* **S3OutputConfigurations**: [S3OutputConfigurations](#s3outputconfigurations) (Required)
* **S3Prefix**: string (Required)
* **S3Region**: string (Required)

## S3OutputConfigurations
### Properties
* **Compression**: string (Required)
* **Format**: string (Required)
* **OutputType**: string (Required)
* **Overwrite**: string (Required)

## TableConfigurations
### Properties
### Additional Properties
* **Additional Properties Type**: [TableProperties](#tableproperties)

## TableProperties
### Properties
### Additional Properties
* **Additional Properties Type**: string

