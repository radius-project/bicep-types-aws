# AWS.AppStream @ default

## Resource AWS.AppStream/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppStream/ApplicationProperties](#awsappstreamapplicationproperties) (Required): properties of the resource

## Resource AWS.AppStream/DirectoryConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppStream/DirectoryConfigProperties](#awsappstreamdirectoryconfigproperties) (Required): properties of the resource

## Resource AWS.AppStream/Entitlement@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppStream/EntitlementProperties](#awsappstreamentitlementproperties) (Required): properties of the resource

## AWS.AppStream/ApplicationProperties
### Properties
* **AppBlockArn**: [Arn](#arn) (Required)
* **Arn**: [Arn](#arn) (ReadOnly)
* **AttributesToDelete**: [ApplicationAttribute](#applicationattribute)[]
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string
* **IconS3Location**: [S3Location](#s3location) (Required)
* **InstanceFamilies**: string[] (Required)
* **LaunchParameters**: string
* **LaunchPath**: string (Required)
* **Name**: string (Required)
* **Platforms**: [PlatformType](#platformtype)[] (Required)
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **WorkingDirectory**: string

## Arn
### Properties

## ApplicationAttribute
### Properties

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3Key**: string (Required)

## PlatformType
### Properties

## Tag
### Properties
* **TagKey**: string (Required)
* **TagValue**: string (Required)

## AWS.AppStream/DirectoryConfigProperties
### Properties
* **DirectoryName**: string (Required)
* **OrganizationalUnitDistinguishedNames**: string[] (Required)
* **ServiceAccountCredentials**: [ServiceAccountCredentials](#serviceaccountcredentials) (Required)

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
* **Name**: string (Required)
* **StackName**: string (Required)

## Attribute
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

