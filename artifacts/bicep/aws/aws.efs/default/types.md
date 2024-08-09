# AWS.EFS @ default

## Resource AWS.EFS/AccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EFS/AccessPointProperties](#awsefsaccesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.EFS/FileSystem@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EFS/FileSystemProperties](#awsefsfilesystemproperties) (Identifier): properties of the resource

## Resource AWS.EFS/MountTarget@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EFS/MountTargetProperties](#awsefsmounttargetproperties) (Required, Identifier): properties of the resource

## AccessPointTag
### Properties
* **Key**: string: The tag key (String). The key can't start with ``aws:``.
* **Value**: string: The value of the tag key.

## AWS.EFS/AccessPointProperties
### Properties
* **AccessPointId**: string (ReadOnly, Identifier)
* **AccessPointTags**: [AccessPointTag](#accesspointtag)[]: An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
* **Arn**: string (ReadOnly)
* **ClientToken**: string: The opaque string specified in the request to ensure idempotent creation.
* **FileSystemId**: string (Required): The ID of the EFS file system that the access point applies to. Accepts only the ID format for input when specifying a file system, for example ``fs-0123456789abcedf2``.
* **PosixUser**: [PosixUser](#posixuser): The full POSIX identity, including the user ID, group ID, and secondary group IDs on the access point that is used for all file operations by NFS clients using the access point.
* **RootDirectory**: [RootDirectory](#rootdirectory): The directory on the EFS file system that the access point exposes as the root directory to NFS clients using the access point.

## AWS.EFS/FileSystemProperties
### Properties
* **Arn**: string (ReadOnly)
* **AvailabilityZoneName**: string: For One Zone file systems, specify the AWS Availability Zone in which to create the file system. Use the format ``us-east-1a`` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/availability-durability.html#file-system-type) in the *Amazon EFS User Guide*.
  One Zone file systems are not available in all Availability Zones in AWS-Regions where Amazon EFS is available.
* **BackupPolicy**: [BackupPolicy](#backuppolicy): Use the ``BackupPolicy`` to turn automatic backups on or off for the file system.
* **BypassPolicyLockoutSafetyCheck**: bool (WriteOnly): (Optional) A boolean that specifies whether or not to bypass the ``FileSystemPolicy`` lockout safety check. The lockout safety check determines whether the policy in the request will lock out, or prevent, the IAM principal that is making the request from making future ``PutFileSystemPolicy`` requests on this file system. Set ``BypassPolicyLockoutSafetyCheck`` to ``True`` only when you intend to prevent the IAM principal that is making the request from making subsequent ``PutFileSystemPolicy`` requests on this file system. The default value is ``False``.
* **Encrypted**: bool: A Boolean value that, if true, creates an encrypted file system. When creating an encrypted file system, you have the option of specifying a KmsKeyId for an existing kms-key-long. If you don't specify a kms-key, then the default kms-key for EFS, ``/aws/elasticfilesystem``, is used to protect the encrypted file system.
* **FileSystemId**: string (ReadOnly, Identifier)
* **FileSystemPolicy**: [FileSystem_FileSystemPolicy](#filesystemfilesystempolicy): The ``FileSystemPolicy`` for the EFS file system. A file system policy is an IAM resource policy used to control NFS access to an EFS file system. For more information, see [Using to control NFS access to Amazon EFS](https://docs.aws.amazon.com/efs/latest/ug/iam-access-control-nfs-efs.html) in the *Amazon EFS User Guide*.
* **FileSystemProtection**: [FileSystemProtection](#filesystemprotection): Describes the protection on the file system.
* **FileSystemTags**: [ElasticFileSystemTag](#elasticfilesystemtag)[]: Use to create one or more tags associated with the file system. Each tag is a user-defined key-value pair. Name your file system on creation by including a ``"Key":"Name","Value":"{value}"`` key-value pair. Each key must be unique. For more information, see [Tagging resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html) in the *General Reference Guide*.
* **KmsKeyId**: string: The ID of the kms-key-long to be used to protect the encrypted file system. This parameter is only required if you want to use a nondefault kms-key. If this parameter is not specified, the default kms-key for EFS is used. This ID can be in one of the following formats:
  +  Key ID - A unique identifier of the key, for example ``1234abcd-12ab-34cd-56ef-1234567890ab``.
  +  ARN - An Amazon Resource Name (ARN) for the key, for example ``arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab``.
  +  Key alias - A previously created display name for a key, for example ``alias/projectKey1``.
  +  Key alias ARN - An ARN for a key alias, for example ``arn:aws:kms:us-west-2:444455556666:alias/projectKey1``.
  
 If ``KmsKeyId`` is specified, the ``Encrypted`` parameter must be set to true.
* **LifecyclePolicies**: [LifecyclePolicy](#lifecyclepolicy)[]: An array of ``LifecyclePolicy`` objects that define the file system's ``LifecycleConfiguration`` object. A ``LifecycleConfiguration`` object informs Lifecycle management of the following:
  +  When to move files in the file system from primary storage to IA storage.
  +  When to move files in the file system from primary storage or IA storage to Archive storage.
  +  When to move files that are in IA or Archive storage to primary storage.
  
   EFS requires that each ``LifecyclePolicy`` object have only a single transition. This means that in a request body, ``LifecyclePolicies`` needs to be structured as an array of ``LifecyclePolicy`` objects, one object for each transition, ``TransitionToIA``, ``TransitionToArchive`` ``TransitionToPrimaryStorageClass``. See the example requests in the following section for more information.
* **PerformanceMode**: string: The performance mode of the file system. We recommend ``generalPurpose`` performance mode for all file systems. File systems using the ``maxIO`` performance mode can scale to higher levels of aggregate throughput and operations per second with a tradeoff of slightly higher latencies for most file operations. The performance mode can't be changed after the file system has been created. The ``maxIO`` mode is not supported on One Zone file systems.
  Due to the higher per-operation latencies with Max I/O, we recommend using General Purpose performance mode for all file systems.
  Default is ``generalPurpose``.
* **ProvisionedThroughputInMibps**: int: The throughput, measured in mebibytes per second (MiBps), that you want to provision for a file system that you're creating. Required if ``ThroughputMode`` is set to ``provisioned``. Valid values are 1-3414 MiBps, with the upper limit depending on Region. To increase this limit, contact SUP. For more information, see [Amazon EFS quotas that you can increase](https://docs.aws.amazon.com/efs/latest/ug/limits.html#soft-limits) in the *Amazon EFS User Guide*.
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration): Describes the replication configuration for a specific file system.
* **ThroughputMode**: string: Specifies the throughput mode for the file system. The mode can be ``bursting``, ``provisioned``, or ``elastic``. If you set ``ThroughputMode`` to ``provisioned``, you must also set a value for ``ProvisionedThroughputInMibps``. After you create the file system, you can decrease your file system's Provisioned throughput or change between the throughput modes, with certain time restrictions. For more information, see [Specifying throughput with provisioned mode](https://docs.aws.amazon.com/efs/latest/ug/performance.html#provisioned-throughput) in the *Amazon EFS User Guide*. 
 Default is ``bursting``.

## AWS.EFS/MountTargetProperties
### Properties
* **FileSystemId**: string (Required): The ID of the file system for which to create the mount target.
* **Id**: string (ReadOnly, Identifier)
* **IpAddress**: string: Valid IPv4 address within the address range of the specified subnet.
* **SecurityGroups**: string[] (Required): Up to five VPC security group IDs, of the form ``sg-xxxxxxxx``. These must be for the same VPC as subnet specified.
* **SubnetId**: string (Required): The ID of the subnet to add the mount target in. For One Zone file systems, use the subnet that is associated with the file system's Availability Zone.

## BackupPolicy
### Properties
* **Status**: string (Required): Set the backup policy status for the file system.
  +   *ENABLED* - Turns automatic backups on for the file system. 
  +   *DISABLED* - Turns automatic backups off for the file system.

## CreationInfo
### Properties
* **OwnerGid**: string (Required): Specifies the POSIX group ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).
* **OwnerUid**: string (Required): Specifies the POSIX user ID to apply to the ``RootDirectory``. Accepts values from 0 to 2^32 (4294967295).
* **Permissions**: string (Required): Specifies the POSIX permissions to apply to the ``RootDirectory``, in the format of an octal number representing the file's mode bits.

## ElasticFileSystemTag
### Properties
* **Key**: string (Required): The tag key (String). The key can't start with ``aws:``.
* **Value**: string (Required): The value of the tag key.

## FileSystem_FileSystemPolicy
### Properties

## FileSystemProtection
### Properties
* **ReplicationOverwriteProtection**: string: The status of the file system's replication overwrite protection.
  +   ``ENABLED`` ? The file system cannot be used as the destination file system in a replication configuration. The file system is writeable. Replication overwrite protection is ``ENABLED`` by default. 
  +   ``DISABLED`` ? The file system can be used as the destination file system in a replication configuration. The file system is read-only and can only be modified by EFS replication.
  +   ``REPLICATING`` ? The file system is being used as the destination file system in a replication configuration. The file system is read-only and is only modified only by EFS replication.
  
 If the replication configuration is deleted, the file system's replication overwrite protection is re-enabled, the file system becomes writeable.

## LifecyclePolicy
### Properties
* **TransitionToArchive**: string: The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.
* **TransitionToIA**: string: The number of days after files were last accessed in primary storage (the Standard storage class) at which to move them to Infrequent Access (IA) storage. Metadata operations such as listing the contents of a directory don't count as file access events.
* **TransitionToPrimaryStorageClass**: string: Whether to move files back to primary (Standard) storage after they are accessed in IA or Archive storage. Metadata operations such as listing the contents of a directory don't count as file access events.

## PosixUser
### Properties
* **Gid**: string (Required): The POSIX group ID used for all file system operations using this access point.
* **SecondaryGids**: string[]: Secondary POSIX group IDs used for all file system operations using this access point.
* **Uid**: string (Required): The POSIX user ID used for all file system operations using this access point.

## ReplicationConfiguration
### Properties
* **Destinations**: [ReplicationDestination](#replicationdestination)[] (WriteOnly): An array of destination objects. Only one destination object is supported.

## ReplicationDestination
### Properties
* **AvailabilityZoneName**: string: For One Zone file systems, the replication configuration must specify the Availability Zone in which the destination file system is located. 
 Use the format ``us-east-1a`` to specify the Availability Zone. For more information about One Zone file systems, see [EFS file system types](https://docs.aws.amazon.com/efs/latest/ug/storage-classes.html) in the *Amazon EFS User Guide*.
  One Zone file system type is not available in all Availability Zones in AWS-Regions where Amazon EFS is available.
* **FileSystemId**: string (Identifier): The ID of the destination Amazon EFS file system.
* **KmsKeyId**: string: The ID of an kms-key-long used to protect the encrypted file system.
* **Region**: string: The AWS-Region in which the destination file system is located.
  For One Zone file systems, the replication configuration must specify the AWS-Region in which the destination file system is located.

## RootDirectory
### Properties
* **CreationInfo**: [CreationInfo](#creationinfo): (Optional) Specifies the POSIX IDs and permissions to apply to the access point's ``RootDirectory``. If the ``RootDirectory`` > ``Path`` specified does not exist, EFS creates the root directory using the ``CreationInfo`` settings when a client connects to an access point. When specifying the ``CreationInfo``, you must provide values for all properties. 
  If you do not provide ``CreationInfo`` and the specified ``RootDirectory`` > ``Path`` does not exist, attempts to mount the file system using the access point will fail.
* **Path**: string: Specifies the path on the EFS file system to expose as the root directory to NFS clients using the access point to access the EFS file system. A path can have up to four subdirectories. If the specified path does not exist, you are required to provide the ``CreationInfo``.

