# AWS.BedrockMantle @ default

## Resource AWS.BedrockMantle/Project@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.BedrockMantle/ProjectProperties](#awsbedrockmantleprojectproperties) (Required, Identifier): properties of the resource

## AWS.BedrockMantle/ProjectProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the project.
* **CreatedAt**: string (ReadOnly): The timestamp when the project was created.
* **Id**: string (ReadOnly): The unique identifier of the project.
* **Name**: string (Required): The name of the project.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

