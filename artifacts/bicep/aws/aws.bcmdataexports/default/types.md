# AWS.BCMDataExports @ default

## Resource AWS.BCMDataExports/Export@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BCMDataExports/ExportProperties](#awsbcmdataexportsexportproperties) (Required, Identifier): properties of the resource

## AWS.BCMDataExports/ExportProperties
### Properties
* **Export**: [Export](#export) (Required)
* **ExportArn**: string (ReadOnly, Identifier)
* **Tags**: [ResourceTag](#resourcetag)[]

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

