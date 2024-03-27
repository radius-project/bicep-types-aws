# AWS.CodeBuild @ default

## Resource AWS.CodeBuild/Fleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/FleetProperties](#awscodebuildfleetproperties) (Identifier): properties of the resource

## AWS.CodeBuild/FleetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **BaseCapacity**: int
* **ComputeType**: string
* **EnvironmentType**: string
* **Name**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

