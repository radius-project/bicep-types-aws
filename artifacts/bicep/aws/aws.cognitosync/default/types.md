# AWS.CognitoSync @ default

## Resource AWS.CognitoSync/Dataset@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CognitoSync/DatasetProperties](#awscognitosyncdatasetproperties) (Identifier): properties of the resource

## AWS.CognitoSync/DatasetProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the dataset.
* **CreationDate**: string (ReadOnly): Date on which the dataset was created.
* **DatasetName**: string: A string of up to 128 characters. Allowed characters are a-z, A-Z, 0-9, underscore, dash, and dot.
* **DataStorage**: int (ReadOnly): Total size in bytes of the records in this dataset.
* **IdentityId**: string: A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.
* **IdentityPoolId**: string: A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito.
* **LastModifiedBy**: string (ReadOnly): The device that made the last change to this dataset.
* **LastModifiedDate**: string (ReadOnly): Date when the dataset was last modified.
* **NumRecords**: int (ReadOnly): Number of records in this dataset.

