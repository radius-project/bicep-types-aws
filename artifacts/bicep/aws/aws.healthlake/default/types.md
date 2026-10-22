# AWS.HealthLake @ default

## Resource AWS.HealthLake/DataTransformationProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.HealthLake/DataTransformationProfileProperties](#awshealthlakedatatransformationprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.HealthLake/FHIRDatastore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.HealthLake/FHIRDatastoreProperties](#awshealthlakefhirdatastoreproperties) (Required, Identifier): properties of the resource

## AnalyticsConfiguration
### Properties
* **Status**: string (Required): The analytics status for the Data Store.

## AWS.HealthLake/DataTransformationProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the data transformation profile.
* **KmsKeyId**: string (WriteOnly): The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. If omitted, an AWS owned key is used.
* **ProfileDescription**: string: A human-readable description of the profile's purpose.
* **ProfileId**: string (ReadOnly): The unique, server-generated identifier of the profile (32-character lowercase hexadecimal).
* **ProfileName**: string (Required): The human-readable name of the profile.
* **Source**: [Source](#source) (WriteOnly)
* **SourceFormat**: string (Required): The source format that this profile converts from.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this profile.
* **TargetFormat**: string (ReadOnly): The target format that this profile converts to. Always FHIR_R4.

## AWS.HealthLake/FHIRDatastoreProperties
### Properties
* **AnalyticsConfiguration**: [AnalyticsConfiguration](#analyticsconfiguration)
* **CreatedAt**: [CreatedAt](#createdat) (ReadOnly)
* **DatastoreArn**: string (ReadOnly)
* **DatastoreEndpoint**: string (ReadOnly)
* **DatastoreId**: string (ReadOnly, Identifier)
* **DatastoreName**: string
* **DatastoreStatus**: string (ReadOnly)
* **DatastoreTypeVersion**: string (Required)
* **IdentityProviderConfiguration**: [IdentityProviderConfiguration](#identityproviderconfiguration)
* **NlpConfiguration**: [NlpConfiguration](#nlpconfiguration)
* **PreloadDataConfig**: [PreloadDataConfig](#preloaddataconfig)
* **ProfileConfiguration**: [ProfileConfiguration](#profileconfiguration)
* **SseConfiguration**: [SseConfiguration](#sseconfiguration)
* **Tags**: [Tag](#tag)[]

## CreatedAt
### Properties
* **Nanos**: int (Required): Nanoseconds.
* **Seconds**: string (Required): Seconds since epoch.

## DataTransformationProfile_ProfileMapping
### Properties

## ExistingVersionedProfileSource
### Properties
* **ProfileId**: string (Required): The unique identifier of the source profile to clone.
* **Version**: int (Required): The version number of the source profile to clone.

## IdentityProviderConfiguration
### Properties
* **AuthorizationStrategy**: string (Required): Type of Authorization Strategy. The two types of supported Authorization strategies are SMART_ON_FHIR_V1 and AWS_AUTH.
* **FineGrainedAuthorizationEnabled**: bool: Flag to indicate if fine-grained authorization will be enabled for the datastore
* **IdpLambdaArn**: string: The Amazon Resource Name (ARN) of the Lambda function that will be used to decode the access token created by the authorization server.
* **Metadata**: string: The JSON metadata elements for identity provider configuration.

## KmsEncryptionConfig
### Properties
* **CmkType**: string (Required): The type of customer-managed-key (CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
* **KmsKeyId**: string: The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

## NlpConfiguration
### Properties
* **Status**: string (Required): The NLP status for the Data Store.

## PreloadDataConfig
### Properties
* **PreloadDataType**: string (Required): The type of preloaded data. Only Synthea preloaded data is supported.

## ProfileConfiguration
### Properties
* **DefaultProfiles**: string[] (Required): The FHIR profiles the Data Store validates resources against by default, for example us-core-3.1.1.

## ProfileMappingSource
### Properties
* **ProfileMapping**: [DataTransformationProfile_ProfileMapping](#datatransformationprofileprofilemapping) (Required): Map of template file paths to their Velocity template content.

## Source
### Properties
* **ExistingVersionedProfileId**: [ExistingVersionedProfileSource](#existingversionedprofilesource)
* **ProfileMapping**: [ProfileMappingSource](#profilemappingsource)
* **StarterProfile**: [StarterProfileSource](#starterprofilesource)

## SseConfiguration
### Properties
* **KmsEncryptionConfig**: [KmsEncryptionConfig](#kmsencryptionconfig) (Required)

## StarterProfileSource
### Properties
* **StarterProfileName**: string (Required): The name of the starter profile to seed the profile from.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

