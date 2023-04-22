# AWS.AppStream @ default

## Resource AWS.AppStream/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/ApplicationProperties](#awsappstreamapplicationproperties) (Required): properties of the resource

## Resource AWS.AppStream/DirectoryConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/DirectoryConfigProperties](#awsappstreamdirectoryconfigproperties) (Required): properties of the resource

## Resource AWS.AppStream/Entitlement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/EntitlementProperties](#awsappstreamentitlementproperties) (Required): properties of the resource

## AWS.AppStream/ApplicationProperties
### Properties
* **AppBlockArn**: string (Required)
* **Arn**: string (ReadOnly, Identifier)
* **AttributesToDelete**: string[]
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string
* **IconS3Location**: [S3Location](#s3location) (Required)
* **InstanceFamilies**: string[] (Required)
* **LaunchParameters**: string
* **LaunchPath**: string (Required)
* **Name**: string (Required)
* **Platforms**: string[] (Required)
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **WorkingDirectory**: string

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3Key**: string (Required)

## Tag
### Properties
* **TagKey**: string (Required)
* **TagValue**: string (Required)

## AWS.AppStream/DirectoryConfigProperties
### Properties
* **CertificateBasedAuthProperties**: [CertificateBasedAuthProperties](#certificatebasedauthproperties)
* **DirectoryName**: string (Required, Identifier)
* **OrganizationalUnitDistinguishedNames**: string[] (Required)
* **ServiceAccountCredentials**: [ServiceAccountCredentials](#serviceaccountcredentials) (Required)

## CertificateBasedAuthProperties
### Properties
* **CertificateAuthorityArn**: string
* **Status**: string

## ServiceAccountCredentials
### Properties
* **AccountName**: string (Required)
* **AccountPassword**: string (Required, WriteOnly)

## AWS.AppStream/EntitlementProperties
### Properties
* **AppVisibility**: string (Required)
* **Attributes**: [Attribute](#attribute)[] (Required)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **LastModifiedTime**: string (ReadOnly)
* **Name**: string (Required, Identifier)
* **StackName**: string (Required, Identifier)

## Attribute
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

