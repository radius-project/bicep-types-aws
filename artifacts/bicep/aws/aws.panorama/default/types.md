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
* **ApplicationInstanceIdToReplace**: string (WriteOnly): The ID of an application instance to replace with the new instance.
* **Arn**: string (ReadOnly)
* **CreatedTime**: int (ReadOnly)
* **DefaultRuntimeContextDevice**: string (Required): The device's ID.
* **DefaultRuntimeContextDeviceName**: string (ReadOnly)
* **Description**: string: A description for the application instance.
* **HealthStatus**: string (ReadOnly)
* **LastUpdatedTime**: int (ReadOnly)
* **ManifestOverridesPayload**: [ManifestOverridesPayload](#manifestoverridespayload): Setting overrides for the application manifest.
* **ManifestPayload**: [ManifestPayload](#manifestpayload) (Required): The application's manifest document.
* **Name**: string: A name for the application instance.
* **RuntimeRoleArn**: string: The ARN of a runtime role for the application instance.
* **Status**: string (ReadOnly)
* **StatusDescription**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: Tags for the application instance.

## AWS.Panorama/PackageProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreatedTime**: int (ReadOnly)
* **PackageId**: string (ReadOnly, Identifier)
* **PackageName**: string (Required): A name for the package.
* **StorageLocation**: [StorageLocation](#storagelocation): A storage location.
* **Tags**: [Tag](#tag)[]: Tags for the package.

## AWS.Panorama/PackageVersionProperties
### Properties
* **IsLatestPatch**: bool (ReadOnly)
* **MarkLatest**: bool: Whether to mark the new version as the latest version.
* **OwnerAccount**: string: An owner account.
* **PackageArn**: string (ReadOnly)
* **PackageId**: string (Required, Identifier): A package ID.
* **PackageName**: string (ReadOnly)
* **PackageVersion**: string (Required, Identifier): A package version.
* **PatchVersion**: string (Required, Identifier): A patch version.
* **RegisteredTime**: int (ReadOnly)
* **Status**: string (ReadOnly)
* **StatusDescription**: string (ReadOnly)
* **UpdatedLatestPatchVersion**: string (WriteOnly): If the version was marked latest, the new version to maker as latest.

## ManifestOverridesPayload
### Properties
* **PayloadData**: string: The overrides document.

## ManifestPayload
### Properties
* **PayloadData**: string: The application manifest.

## StorageLocation
### Properties
* **BinaryPrefixLocation**: string (ReadOnly): The location's binary prefix.
* **Bucket**: string (ReadOnly): The location's bucket.
* **GeneratedPrefixLocation**: string (ReadOnly): The location's generated prefix.
* **ManifestPrefixLocation**: string (ReadOnly): The location's manifest prefix.
* **RepoPrefixLocation**: string (ReadOnly): The location's repo prefix.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

