# AWS.DataExchange @ default

## Resource AWS.DataExchange/DataSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataExchange/DataSetProperties](#awsdataexchangedatasetproperties) (Required, Identifier): properties of the resource

## Resource AWS.DataExchange/EventAction@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DataExchange/EventActionProperties](#awsdataexchangeeventactionproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **ExportRevisionToS3**: [AutoExportRevisionToS3RequestDetails](#autoexportrevisiontos3requestdetails)

## AutoExportRevisionDestinationEntry
### Properties
* **Bucket**: string (Required): The Amazon S3 bucket that is the destination for the event action.
* **KeyPattern**: string: A string representing the pattern for generated names of the individual assets in the revision.

## AutoExportRevisionToS3RequestDetails
### Properties
* **Encryption**: [ExportServerSideEncryption](#exportserversideencryption)
* **RevisionDestination**: [AutoExportRevisionDestinationEntry](#autoexportrevisiondestinationentry) (Required)

## AWS.DataExchange/DataSetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN for the data set.
* **AssetType**: string (Required): The type of asset that is added to a data set.
* **CreatedAt**: string (ReadOnly): The date and time that the data set was created, in ISO 8601 format.
* **Description**: string (Required): A description for the data set.
* **Id**: string (ReadOnly): The unique identifier for the data set.
* **Name**: string (Required): The name of the data set.
* **Origin**: string (ReadOnly): A property that defines the data set as OWNED by the account (for providers) or ENTITLED to the account (for subscribers).
* **Tags**: [Tag](#tag)[]: Tags for the data set.
* **UpdatedAt**: string (ReadOnly): The date and time that the data set was last updated, in ISO 8601 format.

## AWS.DataExchange/EventActionProperties
### Properties
* **Action**: [Action](#action) (Required): What occurs after a certain event.
* **Arn**: string (ReadOnly, Identifier): The ARN for the event action.
* **CreatedAt**: string (ReadOnly): The date and time that the event action was created, in ISO 8601 format.
* **Event**: [Event](#event) (Required): What occurs to start an action.
* **EventActionId**: string (ReadOnly): The unique identifier for the event action.
* **Tags**: [Tag](#tag)[]: The tags for the event action.
* **UpdatedAt**: string (ReadOnly): The date and time that the event action was last updated, in ISO 8601 format.

## Event
### Properties
* **RevisionPublished**: [RevisionPublished](#revisionpublished)

## ExportServerSideEncryption
### Properties
* **KmsKeyArn**: string: The Amazon Resource Name (ARN) of the AWS KMS key you want to use to encrypt the Amazon S3 objects.
* **Type**: string (Required): The type of server side encryption used for encrypting the objects in Amazon S3.

## RevisionPublished
### Properties
* **DataSetId**: string (Required): The data set ID of the published revision.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

