# AWS.S3Files @ default

## Resource AWS.S3Files/AccessPoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Files/AccessPointProperties](#awss3filesaccesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Files/FileSystem@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Files/FileSystemProperties](#awss3filesfilesystemproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Files/FileSystemPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Files/FileSystemPolicyProperties](#awss3filesfilesystempolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Files/MountTarget@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Files/MountTargetProperties](#awss3filesmounttargetproperties) (Required, Identifier): properties of the resource

## AccessPointTag
### Properties
* **Key**: string
* **Value**: string

## AWS.S3Files/AccessPointProperties
### Properties
* **AccessPointArn**: string (ReadOnly)
* **AccessPointId**: string (ReadOnly, Identifier)
* **ClientToken**: string: (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
* **FileSystemId**: string (Required): The ID of the S3 Files file system that the access point provides access to.
* **OwnerId**: string (ReadOnly)
* **PosixUser**: [PosixUser](#posixuser): The operating system user and group applied to all compute drive requests made using the access point.
* **RootDirectory**: [RootDirectory](#rootdirectory): Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationPermissions settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationPermissions is optional.
* **Status**: string (ReadOnly)
* **Tags**: [AccessPointTag](#accesspointtag)[]

## AWS.S3Files/FileSystemPolicyProperties
### Properties
* **FileSystemId**: string (Required, Identifier)
* **Policy**: [FileSystemPolicy_Policy](#filesystempolicypolicy) (Required)

## AWS.S3Files/FileSystemProperties
### Properties
* **AcceptBucketWarning**: bool (WriteOnly)
* **Bucket**: string (Required)
* **ClientToken**: string
* **CreationTime**: string (ReadOnly)
* **FileSystemArn**: string (ReadOnly, Identifier)
* **FileSystemId**: string (ReadOnly)
* **KmsKeyId**: string
* **OwnerId**: string (ReadOnly)
* **Prefix**: string
* **RoleArn**: string (Required)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **SynchronizationConfiguration**: [SynchronizationConfiguration](#synchronizationconfiguration)
* **Tags**: [Tag](#tag)[]

## AWS.S3Files/MountTargetProperties
### Properties
* **AvailabilityZoneId**: string (ReadOnly)
* **FileSystemId**: string (Required)
* **IpAddressType**: string
* **Ipv4Address**: string
* **Ipv6Address**: string
* **MountTargetId**: string (ReadOnly, Identifier)
* **NetworkInterfaceId**: string (ReadOnly)
* **OwnerId**: string (ReadOnly)
* **SecurityGroups**: string[]
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **SubnetId**: string (Required)
* **VpcId**: string (ReadOnly)

## CreationPermissions
### Properties
* **OwnerGid**: string (Required): Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
* **OwnerUid**: string (Required): Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
* **Permissions**: string (Required): Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.

## ExpirationDataRule
### Properties
* **DaysAfterLastAccess**: int (Required)

## FileSystemPolicy_Policy
### Properties

## ImportDataRule
### Properties
* **Prefix**: string (Required)
* **SizeLessThan**: int (Required)
* **Trigger**: string (Required)

## PosixUser
### Properties
* **Gid**: string (Required): The POSIX group ID used for all file system operations using this access point.
* **SecondaryGids**: string[]: Secondary POSIX group IDs used for all file system operations using this access point.
* **Uid**: string (Required): The POSIX user ID used for all file system operations using this access point.

## RootDirectory
### Properties
* **CreationPermissions**: [CreationPermissions](#creationpermissions): (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationPermissions settings when a client connects to an access point. When specifying the CreationPermissions, you must provide values for all properties.   If you do not provide CreationPermissions and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail. 
* **Path**: string: Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationPermissions.

## SynchronizationConfiguration
### Properties
* **ExpirationDataRules**: [ExpirationDataRule](#expirationdatarule)[] (Required)
* **ImportDataRules**: [ImportDataRule](#importdatarule)[] (Required)
* **LatestVersionNumber**: int (ReadOnly)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

