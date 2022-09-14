# AWS.FinSpace @ default

## Resource AWS.FinSpace/Environment@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FinSpace/EnvironmentProperties](#awsfinspaceenvironmentproperties) (Required): properties of the resource

## AWS.FinSpace/EnvironmentProperties
### Properties
* **AwsAccountId**: string (ReadOnly): AWS account ID associated with the Environment
* **DataBundles**: [DataBundleArn](#databundlearn)[]: ARNs of FinSpace Data Bundles to install
* **DedicatedServiceAccountId**: string (ReadOnly): ID for FinSpace created account used to store Environment artifacts
* **Description**: string: Description of the Environment
* **EnvironmentArn**: string (ReadOnly): ARN of the Environment
* **EnvironmentId**: string (ReadOnly): Unique identifier for representing FinSpace Environment
* **EnvironmentUrl**: string (ReadOnly): URL used to login to the Environment
* **FederationMode**: string: Federation mode used with the Environment
* **FederationParameters**: [FederationParameters](#federationparameters)
* **KmsKeyId**: string: KMS key used to encrypt customer data within FinSpace Environment infrastructure
* **Name**: string (Required): Name of the Environment
* **SageMakerStudioDomainUrl**: string (ReadOnly): SageMaker Studio Domain URL associated with the Environment
* **Status**: string (ReadOnly): State of the Environment
* **SuperuserParameters**: [SuperuserParameters](#superuserparameters)

## DataBundleArn
### Properties

## FederationParameters
### Properties
* **ApplicationCallBackURL**: string: SAML metadata URL to link with the Environment
* **AttributeMap**: [Environment_AttributeMap](#environmentattributemap): Attribute map for SAML configuration
* **FederationProviderName**: string: Federation provider name to link with the Environment
* **FederationURN**: string: SAML metadata URL to link with the Environment
* **SamlMetadataDocument**: string: SAML metadata document to link the federation provider to the Environment
* **SamlMetadataURL**: string: SAML metadata URL to link with the Environment

## Environment_AttributeMap
### Properties

## SuperuserParameters
### Properties
* **EmailAddress**: string: Email address
* **FirstName**: string: First name
* **LastName**: string: Last name

