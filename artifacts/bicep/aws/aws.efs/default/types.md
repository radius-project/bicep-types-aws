# AWS.EFS @ default

## Resource AWS.EFS/AccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EFS/AccessPointProperties](#awsefsaccesspointproperties) (Required): properties of the resource

## Resource AWS.EFS/FileSystem@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EFS/FileSystemProperties](#awsefsfilesystemproperties): properties of the resource

## Resource AWS.EFS/MountTarget@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EFS/MountTargetProperties](#awsefsmounttargetproperties) (Required): properties of the resource

## AWS.EFS/AccessPointProperties
### Properties
* **AccessPointId**: string (ReadOnly)
* **AccessPointTags**: [AccessPointTag](#accesspointtag)[]
* **Arn**: string (ReadOnly)
* **ClientToken**: string: (optional) A string of up to 64 ASCII characters that Amazon EFS uses to ensure idempotent creation.
* **FileSystemId**: string (Required): The ID of the EFS file system that the access point provides access to.
* **PosixUser**: [PosixUser](#posixuser): The operating system user and group applied to all file system requests made using the access point.
* **RootDirectory**: [RootDirectory](#rootdirectory): Specifies the directory on the Amazon EFS file system that the access point exposes as the root directory of your file system to NFS clients using the access point. The clients using the access point can only access the root directory and below. If the RootDirectory>Path specified does not exist, EFS creates it and applies the CreationInfo settings when a client connects to an access point. When specifying a RootDirectory, you need to provide the Path, and the CreationInfo is optional.

## AccessPointTag
### Properties
* **Key**: string
* **Value**: string

## PosixUser
### Properties
* **Gid**: string (Required): The POSIX group ID used for all file system operations using this access point.
* **SecondaryGids**: string[]: Secondary POSIX group IDs used for all file system operations using this access point.
* **Uid**: string (Required): The POSIX user ID used for all file system operations using this access point.

## RootDirectory
### Properties
* **CreationInfo**: [CreationInfo](#creationinfo): (Optional) Specifies the POSIX IDs and permissions to apply to the access point's RootDirectory. If the RootDirectory>Path specified does not exist, EFS creates the root directory using the CreationInfo settings when a client connects to an access point. When specifying the CreationInfo, you must provide values for all properties.   If you do not provide CreationInfo and the specified RootDirectory>Path does not exist, attempts to mount the file system using the access point will fail. 
* **Path**: string: Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the CreationInfo.

## CreationInfo
### Properties
* **OwnerGid**: string (Required): Specifies the POSIX group ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
* **OwnerUid**: string (Required): Specifies the POSIX user ID to apply to the RootDirectory. Accepts values from 0 to 2^32 (4294967295).
* **Permissions**: string (Required): Specifies the POSIX permissions to apply to the RootDirectory, in the format of an octal number representing the file's mode bits.

## AWS.EFS/FileSystemProperties
### Properties
* **Arn**: string (ReadOnly)
* **AvailabilityZoneName**: string
* **BackupPolicy**: [BackupPolicy](#backuppolicy)
* **BypassPolicyLockoutSafetyCheck**: bool (WriteOnly): Whether to bypass the FileSystemPolicy lockout safety check. The policy lockout safety check determines whether the policy in the request will prevent the principal making the request to be locked out from making future PutFileSystemPolicy requests on the file system. Set BypassPolicyLockoutSafetyCheck to True only when you intend to prevent the principal that is making the request from making a subsequent PutFileSystemPolicy request on the file system. Defaults to false
* **Encrypted**: bool
* **FileSystemId**: string (ReadOnly)
* **FileSystemPolicy**: [FileSystem_FileSystemPolicy](#filesystemfilesystempolicy)
* **FileSystemTags**: [ElasticFileSystemTag](#elasticfilesystemtag)[]
* **KmsKeyId**: string
* **LifecyclePolicies**: [LifecyclePolicy](#lifecyclepolicy)[]
* **PerformanceMode**: string
* **ProvisionedThroughputInMibps**: int
* **ThroughputMode**: string

## BackupPolicy
### Properties
* **Status**: string (Required)

## FileSystem_FileSystemPolicy
### Properties

## ElasticFileSystemTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## LifecyclePolicy
### Properties
* **TransitionToIA**: string
* **TransitionToPrimaryStorageClass**: string

## AWS.EFS/MountTargetProperties
### Properties
* **FileSystemId**: string (Required)
* **Id**: string (ReadOnly)
* **IpAddress**: string
* **SecurityGroups**: string[] (Required)
* **SubnetId**: string (Required)

