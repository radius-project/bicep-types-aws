# AWS.CodeGuruReviewer @ default

## Resource AWS.CodeGuruReviewer/RepositoryAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeGuruReviewer/RepositoryAssociationProperties](#awscodegurureviewerrepositoryassociationproperties) (Required, Identifier): properties of the resource

## AWS.CodeGuruReviewer/RepositoryAssociationProperties
### Properties
* **AssociationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the repository association.
* **BucketName**: string: The name of the S3 bucket associated with an associated S3 repository. It must start with `codeguru-reviewer-`.
* **ConnectionArn**: string (WriteOnly): The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection.
* **Name**: string (Required): Name of the repository to be associated.
* **Owner**: string (WriteOnly): The owner of the repository. For a Bitbucket repository, this is the username for the account that owns the repository.
* **Tags**: [Tag](#tag)[]: The tags associated with a repository association.
* **Type**: string (Required): The type of repository to be associated.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.

