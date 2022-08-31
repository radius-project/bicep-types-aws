# AWS.Panorama @ default

## Resource AWS.Panorama/ApplicationInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Panorama/ApplicationInstanceProperties](#awspanoramaapplicationinstanceproperties): properties of the resource

## Resource AWS.Panorama/Package@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Panorama/PackageProperties](#awspanoramapackageproperties): properties of the resource

## Resource AWS.Panorama/PackageVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Panorama/PackageVersionProperties](#awspanoramapackageversionproperties): properties of the resource

## AWS.Panorama/ApplicationInstanceProperties
### Properties
* **ApplicationInstanceId**: [ApplicationInstanceId](#applicationinstanceid) (ReadOnly)
* **ApplicationInstanceIdToReplace**: [ApplicationInstanceId](#applicationinstanceid)
* **Arn**: [ApplicationInstanceArn](#applicationinstancearn) (ReadOnly)
* **CreatedTime**: [Timestamp](#timestamp) (ReadOnly)
* **DefaultRuntimeContextDevice**: [DefaultRuntimeContextDevice](#defaultruntimecontextdevice)
* **DefaultRuntimeContextDeviceName**: [DeviceName](#devicename) (ReadOnly)
* **Description**: [Description](#description)
* **DeviceId**: [DeviceId](#deviceid)
* **HealthStatus**: [ApplicationInstanceHealthStatus](#applicationinstancehealthstatus) (ReadOnly)
* **LastUpdatedTime**: [Timestamp](#timestamp) (ReadOnly)
* **ManifestOverridesPayload**: [ManifestOverridesPayload](#manifestoverridespayload)
* **ManifestPayload**: [ManifestPayload](#manifestpayload)
* **Name**: [Name](#name)
* **RuntimeRoleArn**: [RuntimeRoleArn](#runtimerolearn)
* **Status**: [ApplicationInstanceStatus](#applicationinstancestatus) (ReadOnly)
* **StatusDescription**: [ApplicationInstanceStatusDescription](#applicationinstancestatusdescription) (ReadOnly)
* **StatusFilter**: [StatusFilter](#statusfilter)
* **Tags**: [TagList](#taglist)

## ApplicationInstanceId
### Properties

## ApplicationInstanceArn
### Properties

## Timestamp
### Properties

## DefaultRuntimeContextDevice
### Properties

## DeviceName
### Properties

## Description
### Properties

## DeviceId
### Properties

## ApplicationInstanceHealthStatus
### Properties

## ManifestOverridesPayload
### Properties
* **PayloadData**: [ManifestOverridesPayloadData](#manifestoverridespayloaddata)

## ManifestOverridesPayloadData
### Properties

## ManifestPayload
### Properties
* **PayloadData**: [ManifestPayloadData](#manifestpayloaddata)

## ManifestPayloadData
### Properties

## Name
### Properties

## RuntimeRoleArn
### Properties

## ApplicationInstanceStatus
### Properties

## ApplicationInstanceStatusDescription
### Properties

## StatusFilter
### Properties

## TagList
### Properties

## AWS.Panorama/PackageProperties
### Properties
* **Arn**: [NodePackageArn](#nodepackagearn) (ReadOnly)
* **CreatedTime**: [CreatedTime](#createdtime) (ReadOnly)
* **PackageId**: [NodePackageId](#nodepackageid) (ReadOnly)
* **PackageName**: [NodePackageName](#nodepackagename)
* **StorageLocation**: [StorageLocation](#storagelocation) (ReadOnly)
* **Tags**: [TagList](#taglist)

## NodePackageArn
### Properties

## CreatedTime
### Properties

## NodePackageId
### Properties

## NodePackageName
### Properties

## StorageLocation
### Properties
* **BinaryPrefixLocation**: string (ReadOnly)
* **Bucket**: string (ReadOnly)
* **GeneratedPrefixLocation**: string (ReadOnly)
* **ManifestPrefixLocation**: string (ReadOnly)
* **RepoPrefixLocation**: string (ReadOnly)

## TagList
### Properties

## AWS.Panorama/PackageVersionProperties
### Properties
* **IsLatestPatch**: bool (ReadOnly)
* **MarkLatest**: bool
* **OwnerAccount**: [PackageOwnerAccount](#packageowneraccount)
* **PackageArn**: [NodePackageArn](#nodepackagearn) (ReadOnly)
* **PackageId**: [NodePackageId](#nodepackageid)
* **PackageName**: [NodePackageName](#nodepackagename) (ReadOnly)
* **PackageVersion**: [NodePackageVersion](#nodepackageversion)
* **PatchVersion**: [NodePackagePatchVersion](#nodepackagepatchversion)
* **RegisteredTime**: [TimeStamp](#timestamp) (ReadOnly)
* **Status**: [PackageVersionStatus](#packageversionstatus) (ReadOnly)
* **StatusDescription**: [PackageVersionStatusDescription](#packageversionstatusdescription) (ReadOnly)
* **UpdatedLatestPatchVersion**: [NodePackagePatchVersion](#nodepackagepatchversion)

## PackageOwnerAccount
### Properties

## NodePackageArn
### Properties

## NodePackageId
### Properties

## NodePackageName
### Properties

## NodePackageVersion
### Properties

## NodePackagePatchVersion
### Properties

## TimeStamp
### Properties

## PackageVersionStatus
### Properties

## PackageVersionStatusDescription
### Properties

