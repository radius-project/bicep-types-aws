# AWS.AppStream @ default

## Resource AWS.AppStream/AppBlockBuilder@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/AppBlockBuilderProperties](#awsappstreamappblockbuilderproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/ApplicationProperties](#awsappstreamapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/DirectoryConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/DirectoryConfigProperties](#awsappstreamdirectoryconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/Entitlement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/EntitlementProperties](#awsappstreamentitlementproperties) (Required, Identifier): properties of the resource

## AccessEndpoint
### Properties
* **EndpointType**: string (Required)
* **VpceId**: string (Required)

## Attribute
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

## AWS.AppStream/AppBlockBuilderProperties
### Properties
* **AccessEndpoints**: [AccessEndpoint](#accessendpoint)[]
* **AppBlockArns**: string[] (WriteOnly)
* **Arn**: string (ReadOnly)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string
* **EnableDefaultInternetAccess**: bool
* **IamRoleArn**: string
* **InstanceType**: string (Required)
* **Name**: string (Required, Identifier)
* **Platform**: string (Required)
* **Tags**: [Tag](#tag)[] (WriteOnly)
* **VpcConfig**: [VpcConfig](#vpcconfig) (Required)

## AWS.AppStream/ApplicationProperties
### Properties
* **AppBlockArn**: string (Required)
* **Arn**: string (ReadOnly, Identifier)
* **AttributesToDelete**: string[] (WriteOnly)
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

## AWS.AppStream/DirectoryConfigProperties
### Properties
* **CertificateBasedAuthProperties**: [CertificateBasedAuthProperties](#certificatebasedauthproperties)
* **DirectoryName**: string (Required, Identifier)
* **OrganizationalUnitDistinguishedNames**: string[] (Required)
* **ServiceAccountCredentials**: [ServiceAccountCredentials](#serviceaccountcredentials) (Required)

## AWS.AppStream/EntitlementProperties
### Properties
* **AppVisibility**: string (Required)
* **Attributes**: [Attribute](#attribute)[] (Required)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **LastModifiedTime**: string (ReadOnly)
* **Name**: string (Required, Identifier)
* **StackName**: string (Required, Identifier)

## CertificateBasedAuthProperties
### Properties
* **CertificateAuthorityArn**: string
* **Status**: string

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3Key**: string (Required)

## ServiceAccountCredentials
### Properties
* **AccountName**: string (Required)
* **AccountPassword**: string (Required, WriteOnly)

## Tag
### Properties
* **Key**: string
* **Value**: string

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

