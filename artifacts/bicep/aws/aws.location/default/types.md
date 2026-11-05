# AWS.Location @ default

## Resource AWS.Location/APIKey@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/APIKeyProperties](#awslocationapikeyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/GeofenceCollection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/GeofenceCollectionProperties](#awslocationgeofencecollectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/Job@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/JobProperties](#awslocationjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/Map@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/MapProperties](#awslocationmapproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/PlaceIndex@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/PlaceIndexProperties](#awslocationplaceindexproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/RouteCalculator@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/RouteCalculatorProperties](#awslocationroutecalculatorproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/Tracker@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/TrackerProperties](#awslocationtrackerproperties) (Required, Identifier): properties of the resource

## Resource AWS.Location/TrackerConsumer@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Location/TrackerConsumerProperties](#awslocationtrackerconsumerproperties) (Required, Identifier): properties of the resource

## AndroidApp
### Properties
* **CertificateFingerprint**: string (Required)
* **Package**: string (Required)

## ApiKeyRestrictions
### Properties
* **AllowActions**: string[] (Required)
* **AllowAndroidApps**: [AndroidApp](#androidapp)[]
* **AllowAppleApps**: [AppleApp](#appleapp)[]
* **AllowReferers**: string[]
* **AllowResources**: string[] (Required)

## AppleApp
### Properties
* **BundleId**: string (Required)

## AWS.Location/APIKeyProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreateTime**: string (ReadOnly)
* **Description**: string
* **ExpireTime**: string
* **ForceDelete**: bool (WriteOnly)
* **ForceUpdate**: bool (WriteOnly)
* **KeyArn**: string (ReadOnly)
* **KeyName**: string (Required, Identifier)
* **NoExpiry**: bool (WriteOnly)
* **Restrictions**: [ApiKeyRestrictions](#apikeyrestrictions) (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdateTime**: string (ReadOnly)

## AWS.Location/GeofenceCollectionProperties
### Properties
* **Arn**: string (ReadOnly)
* **CollectionArn**: string (ReadOnly)
* **CollectionName**: string (Required, Identifier)
* **CreateTime**: string (ReadOnly)
* **Description**: string
* **KmsKeyId**: string
* **PricingPlan**: string
* **PricingPlanDataSource**: string: This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdateTime**: string (ReadOnly)

## AWS.Location/JobProperties
### Properties
* **Action**: string (Required): The action to perform on the input data.
* **ActionOptions**: [JobActionOptions](#jobactionoptions): Additional parameters for configuring job action.
* **CreatedAt**: string (ReadOnly): Job creation time in ISO 8601 format.
* **ExecutionRoleArn**: string (Required): The ARN of the IAM role that Amazon Location Service assumes during job processing.
* **InputOptions**: [JobInputOptions](#jobinputoptions) (Required): Configuration for input data location and format.
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the job.
* **JobId**: string (ReadOnly): The unique identifier of the job.
* **Name**: string: An optional name for the job resource.
* **OutputOptions**: [JobOutputOptions](#joboutputoptions) (Required): Configuration for output data location and format.
* **Status**: string (ReadOnly): Current job status.
* **Tags**: [Tag](#tag)[]: Tags associated with the job.
* **UpdatedAt**: string (ReadOnly): Last update time in ISO 8601 format.

## AWS.Location/MapProperties
### Properties
* **Arn**: string (ReadOnly)
* **Configuration**: [MapConfiguration](#mapconfiguration) (Required)
* **CreateTime**: string (ReadOnly)
* **Description**: string
* **MapArn**: string (ReadOnly)
* **MapName**: string (Required, Identifier)
* **PricingPlan**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdateTime**: string (ReadOnly)

## AWS.Location/PlaceIndexProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreateTime**: string (ReadOnly)
* **DataSource**: string (Required)
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration)
* **Description**: string
* **IndexArn**: string (ReadOnly)
* **IndexName**: string (Required, Identifier)
* **PricingPlan**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdateTime**: string (ReadOnly)

## AWS.Location/RouteCalculatorProperties
### Properties
* **Arn**: string (ReadOnly)
* **CalculatorArn**: string (ReadOnly)
* **CalculatorName**: string (Required, Identifier)
* **CreateTime**: string (ReadOnly)
* **DataSource**: string (Required)
* **Description**: string
* **PricingPlan**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpdateTime**: string (ReadOnly)

## AWS.Location/TrackerConsumerProperties
### Properties
* **ConsumerArn**: string (Required, Identifier)
* **TrackerName**: string (Required, Identifier)

## AWS.Location/TrackerProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreateTime**: string (ReadOnly)
* **Description**: string
* **EventBridgeEnabled**: bool
* **KmsKeyEnableGeospatialQueries**: bool
* **KmsKeyId**: string
* **PositionFiltering**: string
* **PricingPlan**: string
* **PricingPlanDataSource**: string: This shape is deprecated since 2022-02-01: Deprecated. No longer allowed.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TrackerArn**: string (ReadOnly)
* **TrackerName**: string (Required, Identifier)
* **UpdateTime**: string (ReadOnly)

## DataSourceConfiguration
### Properties
* **IntendedUse**: string

## JobActionOptions
### Properties
* **ValidateAddress**: [ValidateAddressActionOptions](#validateaddressactionoptions)

## JobInputOptions
### Properties
* **Format**: string (Required)
* **Location**: string (Required)

## JobOutputOptions
### Properties
* **Format**: string (Required)
* **Location**: string (Required)

## MapConfiguration
### Properties
* **CustomLayers**: string[]
* **PoliticalView**: string
* **Style**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## ValidateAddressActionOptions
### Properties
* **AdditionalFeatures**: string[]

