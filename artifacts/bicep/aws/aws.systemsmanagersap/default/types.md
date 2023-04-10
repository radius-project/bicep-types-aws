# AWS.SystemsManagerSAP @ default

## Resource AWS.SystemsManagerSAP/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SystemsManagerSAP/ApplicationProperties](#awssystemsmanagersapapplicationproperties) (Required): properties of the resource

## AWS.SystemsManagerSAP/ApplicationProperties
### Properties
* **ApplicationId**: string (Required)
* **ApplicationType**: string (Required)
* **Arn**: string (ReadOnly, Identifier): The ARN of the Helix application
* **Credentials**: [Credential](#credential)[] (WriteOnly)
* **Instances**: string[] (WriteOnly)
* **SapInstanceNumber**: string (WriteOnly)
* **Sid**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]: The tags of a SystemsManagerSAP application.

## Credential
### Properties
* **CredentialType**: string
* **DatabaseName**: string
* **SecretId**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

