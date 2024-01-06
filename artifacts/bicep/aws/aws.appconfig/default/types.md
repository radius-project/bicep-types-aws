# AWS.AppConfig @ default

## Resource AWS.AppConfig/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ApplicationProperties](#awsappconfigapplicationproperties) (Required): properties of the resource

## Resource AWS.AppConfig/ConfigurationProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ConfigurationProfileProperties](#awsappconfigconfigurationprofileproperties) (Required): properties of the resource

## Resource AWS.AppConfig/Extension@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ExtensionProperties](#awsappconfigextensionproperties) (Required): properties of the resource

## Resource AWS.AppConfig/ExtensionAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ExtensionAssociationProperties](#awsappconfigextensionassociationproperties): properties of the resource

## AWS.AppConfig/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly, Identifier): The application Id
* **Description**: string: A description of the application.
* **Name**: string (Required): A name for the application.
* **Tags**: [Tags](#tags)[]: Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

## Tags
### Properties
* **Key**: string (Required): The key-value string map. The valid character set is [a-zA-Z1-9 +-=._:/-]. The tag key can be up to 128 characters and must not start with aws:.
* **Value**: string (Required): The tag value can be up to 256 characters.

## AWS.AppConfig/ConfigurationProfileProperties
### Properties
* **ApplicationId**: string (Required, Identifier): The application ID.
* **ConfigurationProfileId**: string (ReadOnly, Identifier): The configuration profile ID
* **Description**: string: A description of the configuration profile.
* **KmsKeyArn**: string (ReadOnly): The Amazon Resource Name of the AWS Key Management Service key to encrypt new configuration data versions in the AWS AppConfig hosted configuration store. This attribute is only used for hosted configuration types. To encrypt data managed in other configuration stores, see the documentation for how to specify an AWS KMS key for that particular service.
* **KmsKeyIdentifier**: string: The AWS Key Management Service key identifier (key ID, key alias, or key ARN) provided when the resource was created or updated.
* **LocationUri**: string (Required): A URI to locate the configuration. You can specify the AWS AppConfig hosted configuration store, Systems Manager (SSM) document, an SSM Parameter Store parameter, or an Amazon S3 object.
* **Name**: string (Required): A name for the configuration profile.
* **RetrievalRoleArn**: string: The ARN of an IAM role with permission to access the configuration at the specified LocationUri.
* **Tags**: [Tags](#tags)[]: Metadata to assign to the configuration profile. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
* **Type**: string: The type of configurations contained in the profile. When calling this API, enter one of the following values for Type: AWS.AppConfig.FeatureFlags, AWS.Freeform
* **Validators**: [Validators](#validators)[]: A list of methods for validating the configuration.

## Tags
### Properties
* **Key**: string: The key-value string map. The tag key can be up to 128 characters and must not start with aws:.
* **Value**: string: The tag value can be up to 256 characters.

## Validators
### Properties
* **Content**: string: Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
* **Type**: string: AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.

## AWS.AppConfig/ExtensionProperties
### Properties
* **Actions**: [Extension_Actions](#extensionactions) (Required)
* **Arn**: string (ReadOnly)
* **Description**: string: Description of the extension.
* **Id**: string (ReadOnly, Identifier)
* **LatestVersionNumber**: int (WriteOnly)
* **Name**: string (Required): Name of the extension.
* **Parameters**: [Extension_Parameters](#extensionparameters)
* **Tags**: [Tag](#tag)[] (WriteOnly): An array of key-value tags to apply to this resource.
* **VersionNumber**: int (ReadOnly)

## Extension_Actions
### Properties

## Extension_Parameters
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.AppConfig/ExtensionAssociationProperties
### Properties
* **Arn**: string (ReadOnly)
* **ExtensionArn**: string (ReadOnly)
* **ExtensionIdentifier**: string (WriteOnly)
* **ExtensionVersionNumber**: int
* **Id**: string (ReadOnly, Identifier)
* **Parameters**: [ExtensionAssociation_Parameters](#extensionassociationparameters)
* **ResourceArn**: string (ReadOnly)
* **ResourceIdentifier**: string (WriteOnly)
* **Tags**: [Tag](#tag)[] (WriteOnly): An array of key-value pairs to apply to this resource.

## ExtensionAssociation_Parameters
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

