# AWS.CodeCommit @ default

## Resource AWS.CodeCommit/Repository@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeCommit/RepositoryProperties](#awscodecommitrepositoryproperties) (Required, Identifier): properties of the resource

## AWS.CodeCommit/RepositoryProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the repository.
* **CloneUrlHttp**: string (ReadOnly): The URL to use for cloning the repository over HTTPS.
* **CloneUrlSsh**: string (ReadOnly): The URL to use for cloning the repository over SSH.
* **Code**: [Code](#code) (WriteOnly): Information about code to be committed to a repository after it is created in an AWS CloudFormation stack. Information about code is only used in resource creation. Updates to a stack will not reflect changes made to code properties after initial resource creation.
* **KmsKeyId**: string: The ID of the AWS Key Management Service encryption key used to encrypt and decrypt the repository.
* **Name**: string (ReadOnly): The repository's name.
* **RepositoryDescription**: string: A comment or description about the new repository.
* **RepositoryId**: string (ReadOnly, Identifier): The ID of the repository.
* **RepositoryName**: string (Required): The name of the new repository to be created.
* **Tags**: [Tag](#tag)[]: One or more tag key-value pairs to use when tagging this repository.
* **Triggers**: [RepositoryTrigger](#repositorytrigger)[]: Information about a trigger for a repository.

## Code
### Properties
* **BranchName**: string: Optional. Specifies a branch name to be used as the default branch when importing code into a repository on initial creation. If this property is not set, the name main will be used for the default branch for the repository. Changes to this property are ignored after initial resource creation. We recommend using this parameter to set the name to main to align with the default behavior of CodeCommit unless another name is needed.
* **S3**: [S3](#s3) (Required): Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository. Changes to this property are ignored after initial resource creation.

## RepositoryTrigger
### Properties
* **Branches**: string[]: The branches to be included in the trigger configuration. If you specify an empty array, the trigger applies to all branches.
* **CustomData**: string: Any custom data associated with the trigger to be included in the information sent to the target of the trigger.
* **DestinationArn**: string (Required): The ARN of the resource that is the target for a trigger (for example, the ARN of a topic in Amazon SNS).
* **Events**: string[] (Required): The repository events that cause the trigger to run actions in another service, such as sending a notification through Amazon SNS.
* **Name**: string (Required): The name of the trigger.

## S3
### Properties
* **Bucket**: string (Required): The name of the Amazon S3 bucket that contains the ZIP file with the content that will be committed to the new repository. This can be specified using the name of the bucket in the AWS account. Changes to this property are ignored after initial resource creation.
* **Key**: string (Required): The key to use for accessing the Amazon S3 bucket. Changes to this property are ignored after initial resource creation.
* **ObjectVersion**: string: The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket. Changes to this property are ignored after initial resource creation.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

