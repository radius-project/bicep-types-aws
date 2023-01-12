# AWS.Panorama @ default

## Resource AWS.Panorama/ApplicationInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.Panorama/ApplicationInstanceProperties](#awspanoramaapplicationinstanceproperties) (Required): properties of the resource

## Resource AWS.Panorama/Package@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.Panorama/PackageProperties](#awspanoramapackageproperties) (Required): properties of the resource

## Resource AWS.Panorama/PackageVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.Panorama/PackageVersionProperties](#awspanoramapackageversionproperties) (Required): properties of the resource

## AWS.Panorama/ApplicationInstanceProperties
### Properties
* **ApplicationInstanceId**: string (ReadOnly, Identifier)
* **ApplicationInstanceIdToReplace**: string
* **Arn**: string (ReadOnly)
* **CreatedTime**: int (ReadOnly)
* **DefaultRuntimeContextDevice**: string (Required)
* **DefaultRuntimeContextDeviceName**: string (ReadOnly)
* **Description**: string
* **DeviceId**: string
* **HealthStatus**: string (ReadOnly)
* **LastUpdatedTime**: int (ReadOnly)
* **ManifestOverridesPayload**: [ManifestOverridesPayload](#manifestoverridespayload)
* **ManifestPayload**: [ManifestPayload](#manifestpayload) (Required)
* **Name**: string
* **RuntimeRoleArn**: string
* **Status**: string (ReadOnly)
* **StatusDescription**: string (ReadOnly)
* **StatusFilter**: string
* **Tags**: [Tag](#tag)[]

## ManifestOverridesPayload
### Properties
* **PayloadData**: string

## ManifestPayload
### Properties
* **PayloadData**: string

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## AWS.Panorama/PackageProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreatedTime**: int (ReadOnly)
* **PackageId**: string (ReadOnly, Identifier)
* **PackageName**: string (Required)
* **StorageLocation**: [StorageLocation](#storagelocation) (ReadOnly)
* **Tags**: [Tag](#tag)[]

## StorageLocation
### Properties
* **BinaryPrefixLocation**: string (ReadOnly)
* **Bucket**: string (ReadOnly)
* **GeneratedPrefixLocation**: string (ReadOnly)
* **ManifestPrefixLocation**: string (ReadOnly)
* **RepoPrefixLocation**: string (ReadOnly)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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
* **UpdatedLatestPatchVersion**: string

