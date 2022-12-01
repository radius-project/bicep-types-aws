# AWS.FSx @ default

## Resource AWS.FSx/DataRepositoryAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.FSx/DataRepositoryAssociationProperties](#awsfsxdatarepositoryassociationproperties) (Required): properties of the resource

## AWS.FSx/DataRepositoryAssociationProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier): The system-generated, unique ID of the data repository association.
* **BatchImportMetaDataOnCreate**: bool: A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to true.
* **DataRepositoryPath**: string (Required): The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/ . This path specifies where in the S3 data repository files will be imported from or exported to.
* **FileSystemId**: string (Required): The globally unique ID of the file system, assigned by Amazon FSx.
* **FileSystemPath**: string (Required): This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
* **ImportedFileChunkSize**: int: For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
* **ResourceARN**: string (ReadOnly): The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
* **S3**: [S3](#s3): The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
* **Tags**: [Tag](#tag)[]: A list of Tag values, with a maximum of 50 elements.

## S3
### Properties
* **AutoExportPolicy**: [AutoExportPolicy](#autoexportpolicy)
* **AutoImportPolicy**: [AutoImportPolicy](#autoimportpolicy)

## AutoExportPolicy
### Properties
* **Events**: [EventTypes](#eventtypes) (Required)

## EventTypes
### Properties

## AutoImportPolicy
### Properties
* **Events**: [EventTypes](#eventtypes) (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

