# AWS.CodeDeploy @ default

## Resource AWS.CodeDeploy/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeDeploy/ApplicationProperties](#awscodedeployapplicationproperties): properties of the resource

## AWS.CodeDeploy/ApplicationProperties
### Properties
* **ApplicationName**: string (Identifier): A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
* **ComputePlatform**: string: The compute platform that CodeDeploy deploys the application to.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

