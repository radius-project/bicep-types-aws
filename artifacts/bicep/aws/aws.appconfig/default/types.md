# AWS.AppConfig @ default

## Resource AWS.AppConfig/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ApplicationProperties](#awsappconfigapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppConfig/ConfigurationProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ConfigurationProfileProperties](#awsappconfigconfigurationprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppConfig/DeploymentStrategy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/DeploymentStrategyProperties](#awsappconfigdeploymentstrategyproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppConfig/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/EnvironmentProperties](#awsappconfigenvironmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppConfig/Extension@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ExtensionProperties](#awsappconfigextensionproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppConfig/ExtensionAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppConfig/ExtensionAssociationProperties](#awsappconfigextensionassociationproperties) (Identifier): properties of the resource

## AWS.AppConfig/ApplicationProperties
### Properties
* **ApplicationId**: string (ReadOnly, Identifier): The application Id
* **Description**: string: A description of the application.
* **Name**: string (Required): A name for the application.
* **Tags**: [Tags](#tags)[]: Metadata to assign to the application. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

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

## AWS.AppConfig/DeploymentStrategyProperties
### Properties
* **DeploymentDurationInMinutes**: int (Required): Total amount of time for a deployment to last.
* **Description**: string: A description of the deployment strategy.
* **FinalBakeTimeInMinutes**: int: Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AWS AppConfig rolls back the deployment. You must configure permissions for AWS AppConfig to roll back based on CloudWatch alarms. For more information, see Configuring permissions for rollback based on Amazon CloudWatch alarms in the AWS AppConfig User Guide.
* **GrowthFactor**: int (Required): The percentage of targets to receive a deployed configuration during each interval.
* **GrowthType**: string: The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:

Linear: For this type, AWS AppConfig processes the deployment by dividing the total number of targets by the value specified for Step percentage. For example, a linear deployment that uses a Step percentage of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.

Exponential: For this type, AWS AppConfig processes the deployment exponentially using the following formula: G*(2^N). In this formula, G is the growth factor specified by the user and N is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:

2*(2^0)

2*(2^1)

2*(2^2)

Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.
* **Id**: string (ReadOnly, Identifier): The deployment strategy ID.
* **Name**: string (Required): A name for the deployment strategy.
* **ReplicateTo**: string (Required): Save the deployment strategy to a Systems Manager (SSM) document.
* **Tags**: [Tag](#tag)[]: Assigns metadata to an AWS AppConfig resource. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.

## AWS.AppConfig/EnvironmentProperties
### Properties
* **ApplicationId**: string (Required, Identifier): The application ID.
* **Description**: string: A description of the environment.
* **EnvironmentId**: string (ReadOnly, Identifier): The environment ID.
* **Monitors**: [Monitor](#monitor)[]: Amazon CloudWatch alarms to monitor during the deployment process.
* **Name**: string (Required): A name for the environment.
* **Tags**: [Tag](#tag)[]: Metadata to assign to the environment. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.

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

## ExtensionAssociation_Parameters
### Properties

## Monitor
### Properties
* **AlarmArn**: string (Required): Amazon Resource Name (ARN) of the Amazon CloudWatch alarm.
* **AlarmRoleArn**: string: ARN of an AWS Identity and Access Management (IAM) role for AWS AppConfig to monitor AlarmArn.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key-value string map. The valid character set is [a-zA-Z1-9+-=._:/]. The tag key can be up to 128 characters and must not start with aws:.
* **Value**: string (Required): The tag value can be up to 256 characters.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tags
### Properties
* **Key**: string (Required): The key-value string map. The valid character set is [a-zA-Z1-9 +-=._:/-]. The tag key can be up to 128 characters and must not start with aws:.
* **Value**: string (Required): The tag value can be up to 256 characters.

## Tags
### Properties
* **Key**: string: The key-value string map. The tag key can be up to 128 characters and must not start with aws:.
* **Value**: string: The tag value can be up to 256 characters.

## Validators
### Properties
* **Content**: string: Either the JSON Schema content or the Amazon Resource Name (ARN) of an Lambda function.
* **Type**: string: AWS AppConfig supports validators of type JSON_SCHEMA and LAMBDA.

