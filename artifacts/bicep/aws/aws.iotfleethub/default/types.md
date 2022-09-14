# AWS.IoTFleetHub @ default

## Resource AWS.IoTFleetHub/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTFleetHub/ApplicationProperties](#awsiotfleethubapplicationproperties) (Required): properties of the resource

## AWS.IoTFleetHub/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly): The ARN of the application.
* **ApplicationCreationDate**: int (ReadOnly): When the Application was created
* **ApplicationDescription**: string: Application Description, should be between 1 and 2048 characters.
* **ApplicationId**: string (ReadOnly): The ID of the application.
* **ApplicationLastUpdateDate**: int (ReadOnly): When the Application was last updated
* **ApplicationName**: string (Required): Application Name, should be between 1 and 256 characters.
* **ApplicationState**: string (ReadOnly): The current state of the application.
* **ApplicationUrl**: string (ReadOnly): The URL of the application.
* **ErrorMessage**: string (ReadOnly): A message indicating why Create or Delete Application failed.
* **RoleArn**: string (Required): The ARN of the role that the web application assumes when it interacts with AWS IoT Core. For more info on configuring this attribute, see https://docs.aws.amazon.com/iot/latest/apireference/API_iotfleethub_CreateApplication.html#API_iotfleethub_CreateApplication_RequestSyntax
* **SsoClientId**: string (ReadOnly): The AWS SSO application generated client ID (used with AWS SSO APIs).
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the application.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

