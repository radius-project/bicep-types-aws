# AWS.FinSpace @ default

## Resource AWS.FinSpace/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FinSpace/EnvironmentProperties](#awsfinspaceenvironmentproperties) (Required): properties of the resource

## AWS.FinSpace/EnvironmentProperties
### Properties
* **AwsAccountId**: string (ReadOnly): AWS account ID associated with the Environment
* **DataBundles**: string[]: ARNs of FinSpace Data Bundles to install
* **DedicatedServiceAccountId**: string (ReadOnly): ID for FinSpace created account used to store Environment artifacts
* **Description**: string: Description of the Environment
* **EnvironmentArn**: string (ReadOnly): ARN of the Environment
* **EnvironmentId**: string (ReadOnly, Identifier): Unique identifier for representing FinSpace Environment
* **EnvironmentUrl**: string (ReadOnly): URL used to login to the Environment
* **FederationMode**: string: Federation mode used with the Environment
* **FederationParameters**: [FederationParameters](#federationparameters)
* **KmsKeyId**: string: KMS key used to encrypt customer data within FinSpace Environment infrastructure
* **Name**: string (Required): Name of the Environment
* **SageMakerStudioDomainUrl**: string (ReadOnly): SageMaker Studio Domain URL associated with the Environment
* **Status**: string (ReadOnly): State of the Environment
* **SuperuserParameters**: [SuperuserParameters](#superuserparameters) (WriteOnly)
* **Tags**: [Tag](#tag)[] (WriteOnly): An array of key-value pairs to apply to this resource.

## FederationParameters
### Properties
* **ApplicationCallBackURL**: string: SAML metadata URL to link with the Environment
* **AttributeMap**: [Environment_AttributeMap](#environmentattributemap)[] (WriteOnly): Attribute map for SAML configuration
* **FederationProviderName**: string: Federation provider name to link with the Environment
* **FederationURN**: string: SAML metadata URL to link with the Environment
* **SamlMetadataDocument**: string: SAML metadata document to link the federation provider to the Environment
* **SamlMetadataURL**: string: SAML metadata URL to link with the Environment

## Environment_AttributeMap
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## SuperuserParameters
### Properties
* **EmailAddress**: string: Email address
* **FirstName**: string: First name
* **LastName**: string: Last name

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

