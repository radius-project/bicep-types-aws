# AWS.BackupSearch @ default

## Resource AWS.BackupSearch/SearchJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BackupSearch/SearchJobProperties](#awsbackupsearchsearchjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.BackupSearch/SearchResultExportJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BackupSearch/SearchResultExportJobProperties](#awsbackupsearchsearchresultexportjobproperties) (Identifier): properties of the resource

## AWS.BackupSearch/SearchJobProperties
### Properties
* **CreationTime**: string (ReadOnly): The date and time the search job was created.
* **Name**: string: The name of the search job.
* **SearchJobArn**: string (Identifier): The Amazon Resource Name (ARN) of the search job.
* **SearchJobIdentifier**: string (ReadOnly): The unique identifier of the search job.
* **SearchScope**: [SearchScope](#searchscope) (Required): The search scope for the search job.
* **Status**: string (ReadOnly): The current status of the search job.
* **Tags**: [SearchJob_Tags](#searchjobtags)[]: Tags associated with the search job.

## AWS.BackupSearch/SearchResultExportJobProperties
### Properties
* **CreationTime**: string (ReadOnly): The creation time of the export job.
* **ExportJobArn**: string (Identifier): The ARN of the export job.
* **ExportJobIdentifier**: string (ReadOnly): The unique identifier of the export job.
* **ExportSpecification**: [ExportSpecification](#exportspecification): The export specification for the export job.
* **SearchJobArn**: string (ReadOnly): The ARN of the search job that produced the results being exported.
* **Status**: string (ReadOnly): The status of the export job.
* **Tags**: [SearchResultExportJob_Tags](#searchresultexportjobtags)[]: Tags associated with the export job.

## ExportSpecification
### Properties
* **S3ExportSpecification**: [S3ExportSpecification](#s3exportspecification) (Required)

## S3ExportSpecification
### Properties
* **DestinationBucket**: string (Required): The destination S3 bucket for the export job.
* **DestinationPrefix**: string: The destination prefix for the export job.

## SearchJob_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## SearchResultExportJob_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## SearchScope
### Properties
* **BackupResourceTypes**: string[] (Required): The resource types included in a search.

