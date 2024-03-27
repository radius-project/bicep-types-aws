# AWS.Panorama @ default

## Resource AWS.Panorama/ApplicationInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Panorama/ApplicationInstanceProperties](#awspanoramaapplicationinstanceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Panorama/Package@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Panorama/PackageProperties](#awspanoramapackageproperties) (Required, Identifier): properties of the resource

## Resource AWS.Panorama/PackageVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Panorama/PackageVersionProperties](#awspanoramapackageversionproperties) (Required, Identifier): properties of the resource

## AWS.Panorama/ApplicationInstanceProperties
### Properties
* **ApplicationInstanceId**: string (ReadOnly, Identifier)
* **ApplicationInstanceIdToReplace**: string (WriteOnly)
* **Arn**: string (ReadOnly)
* **CreatedTime**: int (ReadOnly)
* **DefaultRuntimeContextDevice**: string (Required)
* **DefaultRuntimeContextDeviceName**: string (ReadOnly)
* **Description**: string
* **HealthStatus**: string (ReadOnly)
* **LastUpdatedTime**: int (ReadOnly)
* **ManifestOverridesPayload**: [ManifestOverridesPayload](#manifestoverridespayload)
* **ManifestPayload**: [ManifestPayload](#manifestpayload) (Required)
* **Name**: string
* **RuntimeRoleArn**: string
* **Status**: string (ReadOnly)
* **StatusDescription**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## AWS.Panorama/PackageProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreatedTime**: int (ReadOnly)
* **PackageId**: string (ReadOnly, Identifier)
* **PackageName**: string (Required)
* **StorageLocation**: [StorageLocation](#storagelocation)
* **Tags**: [Tag](#tag)[]

## AWS.Panorama/PackageVersionProperties
### Properties
* **IsLatestPatch**: bool (ReadOnly)
* **MarkLatest**: bool
* **OwnerAccount**: string
* **PackageArn**: string (ReadOnly)
* **PackageId**: string (Required, Identifier)
* **PackageName**: string (ReadOnly)
* **PackageVersion**: string (Required, Identifier)
* **PatchVersion**: string (Required, Identifier)
* **RegisteredTime**: int (ReadOnly)
* **Status**: string (ReadOnly)
* **StatusDescription**: string (ReadOnly)
* **UpdatedLatestPatchVersion**: string (WriteOnly)

## ManifestOverridesPayload
### Properties
* **PayloadData**: string

## ManifestPayload
### Properties
* **PayloadData**: string

## StorageLocation
### Properties
* **BinaryPrefixLocation**: string (ReadOnly)
* **Bucket**: string (ReadOnly)
* **GeneratedPrefixLocation**: string (ReadOnly)
* **ManifestPrefixLocation**: string (ReadOnly)
* **RepoPrefixLocation**: string (ReadOnly)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

