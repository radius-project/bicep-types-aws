# AWS.SSM @ default

## Resource AWS.SSM/Association@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSM/AssociationProperties](#awsssmassociationproperties) (Required): properties of the resource

## Resource AWS.SSM/Document@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSM/DocumentProperties](#awsssmdocumentproperties) (Required): properties of the resource

## Resource AWS.SSM/ResourceDataSync@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSM/ResourceDataSyncProperties](#awsssmresourcedatasyncproperties) (Required): properties of the resource

## AWS.SSM/AssociationProperties
### Properties
* **ApplyOnlyAtCronInterval**: bool
* **AssociationId**: string (ReadOnly): Unique identifier of the association.
* **AssociationName**: string: The name of the association.
* **AutomationTargetParameterName**: string
* **CalendarNames**: string[]
* **ComplianceSeverity**: string
* **DocumentVersion**: string: The version of the SSM document to associate with the target.
* **InstanceId**: string: The ID of the instance that the SSM document is associated with.
* **MaxConcurrency**: string
* **MaxErrors**: string
* **Name**: string (Required): The name of the SSM document.
* **OutputLocation**: [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
* **Parameters**: [Association_Parameters](#associationparameters): Parameter values that the SSM document uses at runtime.
* **ScheduleExpression**: string: A Cron or Rate expression that specifies when the association is applied to the target.
* **ScheduleOffset**: int
* **SyncCompliance**: string
* **Targets**: [Target](#target)[]: The targets that the SSM document sends commands to.
* **WaitForSuccessTimeoutSeconds**: int

## InstanceAssociationOutputLocation
### Properties
* **S3Location**: [S3OutputLocation](#s3outputlocation)

## S3OutputLocation
### Properties
* **OutputS3BucketName**: [S3BucketName](#s3bucketname)
* **OutputS3KeyPrefix**: [S3KeyPrefix](#s3keyprefix)
* **OutputS3Region**: [S3Region](#s3region)

## S3BucketName
### Properties

## S3KeyPrefix
### Properties

## S3Region
### Properties

## Association_Parameters
### Properties

## Target
### Properties
* **Key**: string (Required)
* **Values**: string[] (Required)

## AWS.SSM/DocumentProperties
### Properties
* **Attachments**: [AttachmentsSource](#attachmentssource)[]: A list of key and value pairs that describe attachments to a version of a document.
* **Content**: [Document_Content](#documentcontent) | string (Required): The content for the Systems Manager document in JSON, YAML or String format.
* **DocumentFormat**: string: Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.
* **DocumentType**: string: The type of document to create.
* **Name**: string: A name for the Systems Manager document.
* **Requires**: [DocumentRequires](#documentrequires)[]: A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
* **Tags**: [Tag](#tag)[]: Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
* **TargetType**: string: Specify a target type to define the kinds of resources the document can run on.
* **UpdateMethod**: string: Update method - when set to 'Replace', the update will replace the existing document; when set to 'NewVersion', the update will create a new version.
* **VersionName**: string: An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed.

## AttachmentsSource
### Properties
* **Key**: string: The key of a key-value pair that identifies the location of an attachment to a document.
* **Name**: string: The name of the document attachment file.
* **Values**: string[]: The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify.

## DocumentRequires
### Properties
* **Name**: string: The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
* **Version**: string: The document version required by the current document.

## Tag
### Properties
* **Key**: string: The name of the tag.
* **Value**: string: The value of the tag.

## AWS.SSM/ResourceDataSyncProperties
### Properties
* **BucketName**: string
* **BucketPrefix**: string
* **BucketRegion**: string
* **KMSKeyArn**: string
* **S3Destination**: [S3Destination](#s3destination)
* **SyncFormat**: string
* **SyncName**: string (Required, ReadOnly)
* **SyncSource**: [SyncSource](#syncsource)
* **SyncType**: string

## S3Destination
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string
* **BucketRegion**: string (Required)
* **KMSKeyArn**: string
* **SyncFormat**: string (Required)

## SyncSource
### Properties
* **AwsOrganizationsSource**: [AwsOrganizationsSource](#awsorganizationssource)
* **IncludeFutureRegions**: bool
* **SourceRegions**: string[] (Required)
* **SourceType**: string (Required)

## AwsOrganizationsSource
### Properties
* **OrganizationalUnits**: string[]
* **OrganizationSourceType**: string (Required)

