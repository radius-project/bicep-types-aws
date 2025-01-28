# AWS.S3Tables @ default

## Resource AWS.S3Tables/TableBucket@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Tables/TableBucketProperties](#awss3tablestablebucketproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Tables/TableBucketPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Tables/TableBucketPolicyProperties](#awss3tablestablebucketpolicyproperties) (Required, Identifier): properties of the resource

## AWS.S3Tables/TableBucketPolicyProperties
### Properties
* **ResourcePolicy**: [TableBucketPolicy_ResourcePolicy](#tablebucketpolicyresourcepolicy) | string (Required)
* **TableBucketARN**: string (Required, Identifier)

## AWS.S3Tables/TableBucketProperties
### Properties
* **TableBucketARN**: string (ReadOnly, Identifier)
* **TableBucketName**: string (Required)
* **UnreferencedFileRemoval**: [UnreferencedFileRemoval](#unreferencedfileremoval)

## UnreferencedFileRemoval
### Properties
* **NoncurrentDays**: int: S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.
* **Status**: string: Indicates whether the Unreferenced File Removal maintenance action is enabled.
* **UnreferencedDays**: int: For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.

