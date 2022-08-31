# AWS.AppStream @ default

## Resource AWS.AppStream/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppStream/ApplicationProperties](#awsappstreamapplicationproperties): properties of the resource

## Resource AWS.AppStream/DirectoryConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppStream/DirectoryConfigProperties](#awsappstreamdirectoryconfigproperties): properties of the resource

## Resource AWS.AppStream/Entitlement@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppStream/EntitlementProperties](#awsappstreamentitlementproperties): properties of the resource

## AWS.AppStream/ApplicationProperties
### Properties
* **AppBlockArn**: [Arn](#arn)
* **Arn**: [Arn](#arn) (ReadOnly)
* **AttributesToDelete**: [ApplicationAttribute](#applicationattribute)[]
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string
* **IconS3Location**: [S3Location](#s3location)
* **InstanceFamilies**: string[]
* **LaunchParameters**: string
* **LaunchPath**: string
* **Name**: string
* **Platforms**: [PlatformType](#platformtype)[]
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **WorkingDirectory**: string

## Arn
### Properties

## ApplicationAttribute
### Properties

## S3Location
### Properties
* **S3Bucket**: string
* **S3Key**: string

## PlatformType
### Properties

## Tag
### Properties
* **TagKey**: string
* **TagValue**: string

## AWS.AppStream/DirectoryConfigProperties
### Properties
* **DirectoryName**: string
* **OrganizationalUnitDistinguishedNames**: string[]
* **ServiceAccountCredentials**: [ServiceAccountCredentials](#serviceaccountcredentials)

## ServiceAccountCredentials
### Properties
* **AccountName**: string
* **AccountPassword**: string (WriteOnly)

## AWS.AppStream/EntitlementProperties
### Properties
* **AppVisibility**: string
* **Attributes**: [Attribute](#attribute)[]
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **LastModifiedTime**: string (ReadOnly)
* **Name**: string
* **StackName**: string

## Attribute
### Properties
* **Name**: string
* **Value**: string

