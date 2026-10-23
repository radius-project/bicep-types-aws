# AWS.FSx @ default

## Resource AWS.FSx/Backup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/BackupProperties](#awsfsxbackupproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/DataRepositoryAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/DataRepositoryAssociationProperties](#awsfsxdatarepositoryassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/FileCache@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/FileCacheProperties](#awsfsxfilecacheproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/Snapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/SnapshotProperties](#awsfsxsnapshotproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/StorageVirtualMachine@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/StorageVirtualMachineProperties](#awsfsxstoragevirtualmachineproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/Volume@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/VolumeProperties](#awsfsxvolumeproperties) (Required, Identifier): properties of the resource

## ActiveDirectoryConfiguration
### Properties
* **NetBiosName**: string: The NetBIOS name of the Active Directory computer object that will be created for your SVM. Minimum values: 1. Maximum values: 15. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
* **SelfManagedActiveDirectoryConfiguration**: [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration): The configuration that Amazon FSx uses to join the ONTAP storage virtual machine (SVM) to your self-managed (including on-premises) Microsoft Active Directory directory.

## AggregateConfiguration
### Properties
* **Aggregates**: string[]: The list of aggregates that this volume resides on. Aggregates are storage pools which make up your primary storage tier.
* **ConstituentsPerAggregate**: int (WriteOnly): Used to explicitly set the number of constituents within the FlexGroup per storage aggregate. This field is optional when creating a FlexGroup volume. If unspecified, the default value will be 8. This field cannot be provided when creating a FlexVol volume.

## AutocommitPeriod
### Properties
* **Type**: string (Required): Defines the type of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume. Setting this value to NONE disables autocommit. The default value is NONE.
* **Value**: int: Defines the amount of time for the autocommit period of a file in an FSx for ONTAP SnapLock volume.

## AutoExportPolicy
### Properties
* **Events**: string[] (Required)

## AutoImportPolicy
### Properties
* **Events**: string[] (Required)

## AWS.FSx/BackupProperties
### Properties
* **BackupId**: string (ReadOnly): The ID of the backup.
* **CreationTime**: string (ReadOnly): The time when the backup was created.
* **FileSystemId**: string (Required): The ID of the file system to back up.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the backup.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the backup.
* **Tags**: [Tag](#tag)[]: The tags to apply to the backup at backup creation.
* **Type**: string (ReadOnly): The type of the backup.

## AWS.FSx/DataRepositoryAssociationProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier): The system-generated, unique ID of the data repository association.
* **BatchImportMetaDataOnCreate**: bool: A boolean flag indicating whether an import data repository task to import metadata should run after the data repository association is created. The task runs if this flag is set to true.
* **DataRepositoryPath**: string (Required): The path to the Amazon S3 data repository that will be linked to the file system. The path can be an S3 bucket or prefix in the format s3://myBucket/myPrefix/ . This path specifies where in the S3 data repository files will be imported from or exported to.
* **FileSystemId**: string (Required): The globally unique ID of the file system, assigned by Amazon FSx.
* **FileSystemPath**: string (Required): This path specifies where in your file system files will be exported from or imported to. This file system directory can be linked to only one Amazon S3 bucket, and no other S3 bucket can be linked to the directory.
* **ImportedFileChunkSize**: int: For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.
* **ResourceARN**: string (ReadOnly): The Amazon Resource Name (ARN) for a given resource. ARNs uniquely identify Amazon Web Services resources. We require an ARN when you need to specify a resource unambiguously across all of Amazon Web Services. For more information, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference.
* **S3**: [S3](#s3): The configuration for an Amazon S3 data repository linked to an Amazon FSx Lustre file system with a data repository association. The configuration defines which file events (new, changed, or deleted files or directories) are automatically imported from the linked data repository to the file system or automatically exported from the file system to the data repository.
* **Tags**: [Tag](#tag)[]: A list of Tag values, with a maximum of 50 elements.

## AWS.FSx/FileCacheProperties
### Properties
* **CopyTagsToDataRepositoryAssociations**: bool (WriteOnly): Whether tags should be copied to data repository associations
* **CreationTime**: string (ReadOnly): The time the cache was created
* **DataRepositoryAssociationIds**: string[] (ReadOnly): A list of IDs of data repository associations that are associated with this cache
* **DataRepositoryAssociations**: [DataRepositoryAssociation](#datarepositoryassociation)[] (WriteOnly): Data repository associations for the cache
* **DNSName**: string (ReadOnly): The DNS name for the cache
* **FileCacheId**: string (ReadOnly): The ID of the file cache
* **FileCacheType**: string (Required): The type of cache, which must be LUSTRE
* **FileCacheTypeVersion**: string (Required): The Lustre version of the cache, which must be 2.12
* **KmsKeyId**: string: The KMS key ID for encrypting data
* **Lifecycle**: string (ReadOnly): The lifecycle status of the cache
* **LustreConfiguration**: [LustreConfiguration](#lustreconfiguration): The Lustre configuration for the file cache
* **NetworkInterfaceIds**: string[] (ReadOnly): Network interface IDs for the cache
* **OwnerId**: string (ReadOnly): The AWS account ID of the cache owner
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the file cache
* **SecurityGroupIds**: string[] (WriteOnly): A list of security group IDs for the cache
* **StorageCapacity**: int (Required): The storage capacity of the cache in gibibytes (GiB)
* **SubnetIds**: string[] (Required): A list of subnet IDs for the cache
* **Tags**: [Tag](#tag)[]: Tags to associate with the file cache
* **VpcId**: string (ReadOnly): The VPC ID of the cache

## AWS.FSx/SnapshotProperties
### Properties
* **Id**: string (ReadOnly, Identifier): The ID of the snapshot.
* **Name**: string (Required): The name of the snapshot.
* **ResourceARN**: string (ReadOnly): Returns the snapshot's Amazon Resource Name (ARN).
* **Tags**: [Tag](#tag)[]: A list of Tag values, with a maximum of 50 elements.
* **VolumeId**: string (Required): The ID of the volume that the snapshot is of.

## AWS.FSx/StorageVirtualMachineProperties
### Properties
* **ActiveDirectoryConfiguration**: [ActiveDirectoryConfiguration](#activedirectoryconfiguration): Describes the Microsoft Active Directory configuration to which the SVM is joined, if applicable.
* **FileSystemId**: string (Required): Specifies the FSx for ONTAP file system on which to create the SVM.
* **Name**: string (Required): The name of the SVM. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,47}$`
* **ResourceARN**: string (ReadOnly): The Amazon Resource Name (ARN) for a given resource. Min Length: 8, Max Length 512
* **RootVolumeSecurityStyle**: string (WriteOnly): The security style of the root volume of the SVM. Allowed values: UNIX | NTFS | MIXED.
* **StorageVirtualMachineId**: string (ReadOnly, Identifier): The SVM's system generated unique ID.
* **SvmAdminPassword**: string (WriteOnly): Specifies the password to use when logging on to the SVM using a secure shell (SSH) connection to the SVM's management endpoint.
* **Tags**: [Tag](#tag)[]: A list of Tag values, with a maximum of 50 elements.
* **UUID**: string (ReadOnly): The SVM's UUID (universally unique identifier).

## AWS.FSx/VolumeProperties
### Properties
* **BackupId**: string (WriteOnly): Specifies the ID of the volume backup to use to create a new volume.
* **Name**: string (Required): The name of the volume.
* **OntapConfiguration**: [OntapConfiguration](#ontapconfiguration): The configuration of an Amazon FSx for NetApp ONTAP volume.
* **OpenZFSConfiguration**: [OpenZFSConfiguration](#openzfsconfiguration): The configuration of an Amazon FSx for OpenZFS volume.
* **ResourceARN**: string (ReadOnly): Returns the volume's Amazon Resource Name (ARN).
* **Tags**: [Tag](#tag)[]: One or more tags.
* **UUID**: string (ReadOnly): Returns the volume's ID.
* **VolumeId**: string (ReadOnly, Identifier): Returns the volume's universally unique identifier (UUID).
* **VolumeType**: string: The type of the volume.

## ClientConfigurations
### Properties
* **Clients**: string (Required): A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.
* **Options**: string[] (Required): The configuration object for mounting a Network File System (NFS) file system.

## DataRepositoryAssociation
### Properties
* **DataRepositoryPath**: string (Required)
* **FileCachePath**: string (Required)

## LogConfiguration
### Properties
* **Destination**: string
* **Level**: string (Required)

## LustreConfiguration
### Properties
* **DeploymentType**: string (Required)
* **LogConfiguration**: [LogConfiguration](#logconfiguration) (ReadOnly)
* **MetadataConfiguration**: [MetadataConfiguration](#metadataconfiguration) (Required)
* **MountName**: string (ReadOnly)
* **PerUnitStorageThroughput**: int (Required)
* **WeeklyMaintenanceStartTime**: string

## MetadataConfiguration
### Properties
* **StorageCapacity**: int (Required)

## NfsExports
### Properties
* **ClientConfigurations**: [ClientConfigurations](#clientconfigurations)[] (Required): The configuration object for mounting a Network File System (NFS) file system.

## OntapConfiguration
### Properties
* **AggregateConfiguration**: [AggregateConfiguration](#aggregateconfiguration): Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.
* **CopyTagsToBackups**: string: A boolean flag indicating whether tags for the volume should be copied to backups.
* **JunctionPath**: string: Specifies the location in the SVM's namespace where the volume is mounted. This parameter is required. The JunctionPath must have a leading forward slash, such as /vol3.
* **OntapVolumeType**: string: Specifies the type of volume you are creating. Valid values are the following: RW or DP
* **SecurityStyle**: string: Specifies the security style for the volume. If a volume's security style is not specified, it is automatically set to the root volume's security style.
* **SizeInBytes**: string: Specifies the configured size of the volume, in bytes.
* **SizeInMegabytes**: string: Use SizeInBytes instead. Specifies the size of the volume, in megabytes (MB), that you are creating
* **SnaplockConfiguration**: [SnaplockConfiguration](#snaplockconfiguration): The SnapLock configuration object for an FSx for ONTAP SnapLock volume.
* **SnapshotPolicy**: string: Specifies the snapshot policy for the volume. There are three built-in snapshot policies: default, default-1weekly, none.
* **StorageEfficiencyEnabled**: string: Set to true to enable deduplication, compression, and compaction storage efficiency features on the volume, or set to false to disable them.
* **StorageVirtualMachineId**: string (Required): Specifies the ONTAP SVM in which to create the volume.
* **TieringPolicy**: [TieringPolicy](#tieringpolicy): Describes the data tiering policy for an ONTAP volume.
* **VolumeStyle**: string: Use to specify the style of an ONTAP volume.

## OpenZFSConfiguration
### Properties
* **CopyTagsToSnapshots**: bool: A Boolean value indicating whether tags for the volume should be copied to snapshots. This value defaults to false. If this value is set to true, and you do not specify any tags, all tags for the original volume are copied over to snapshots. If this value is set to true, and you do specify one or more tags, only the specified tags for the original volume are copied over to snapshots. If you specify one or more tags when creating a new snapshot, no tags are copied over from the original volume, regardless of this value.
* **DataCompressionType**: string: Specifies the method used to compress the data on the volume
* **NfsExports**: [NfsExports](#nfsexports)[]: The configuration object for mounting a Network File System (NFS) file system.
* **Options**: string[] (WriteOnly): The configuration object for mounting a Network File System (NFS) file system.
* **OriginSnapshot**: [OriginSnapshot](#originsnapshot): The configuration of an Amazon FSx for OpenZFS volume.
* **ParentVolumeId**: string (Required): The ID of the volume to use as the parent volume of the volume that you are creating.
* **ReadOnly**: bool: A Boolean value indicating whether the volume is read-only.
* **RecordSizeKiB**: int: Specifies the suggested block size for a volume in a ZFS dataset, in kibibytes (KiB).
* **StorageCapacityQuotaGiB**: int: Sets the maximum storage size in gibibytes (GiB) for the volume. You can specify a quota that is larger than the storage on the parent volume. A volume quota limits the amount of storage that the volume can consume to the configured amount, but does not guarantee the space will be available on the parent volume. To guarantee quota space, you must also set StorageCapacityReservationGiB. To not specify a storage capacity quota, set this to -1.
* **StorageCapacityReservationGiB**: int: Specifies the amount of storage in gibibytes (GiB) to reserve from the parent volume. Setting StorageCapacityReservationGiB guarantees that the specified amount of storage space on the parent volume will always be available for the volume. You can't reserve more storage than the parent volume has. To not specify a storage capacity reservation, set this to 0 or -1. For more information, see Volume properties in the Amazon FSx for OpenZFS User Guide.
* **UserAndGroupQuotas**: [UserAndGroupQuotas](#userandgroupquotas)[]: Configures how much storage users and groups can use on the volume.

## OriginSnapshot
### Properties
* **CopyStrategy**: string (Required): The configuration object for mounting a Network File System (NFS) file system.
* **SnapshotARN**: string (Required): Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

## RetentionPeriod
### Properties
* **Type**: string (Required): Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.
* **Value**: int: Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for INFINITE or UNSPECIFIED.

## S3
### Properties
* **AutoExportPolicy**: [AutoExportPolicy](#autoexportpolicy)
* **AutoImportPolicy**: [AutoImportPolicy](#autoimportpolicy)

## SelfManagedActiveDirectoryConfiguration
### Properties
* **DnsIps**: string[]: A list of IP addresses of DNS servers or domain controllers in the self-managed AD directory. Minimum: 1. Maximum: 3.
* **DomainJoinServiceAccountSecret**: string: The Amazon Resource Name (ARN) of the AWS Secrets Manager secret containing the self-managed Active Directory domain join service account credentials. Minimum: 64. Maximum: 1024.
* **DomainName**: string: The fully qualified domain name of the self-managed AD directory, such as corp.example.com. Minimum: 1. Maximum: 255. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,255}$`
* **FileSystemAdministratorsGroup**: string (WriteOnly): The name of the domain group whose members are granted administrative privileges for the file system. Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`
* **OrganizationalUnitDistinguishedName**: string: The fully qualified distinguished name of the organizational unit within your self-managed AD directory. Minimum: 1. Maximum: 2000. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,2000}$`
* **Password**: string (WriteOnly): The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. Minimum: 1. Maximum: 256. Pattern: `^.{1,256}$`
* **UserName**: string: The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. Minimum: 1. Maximum: 256. Pattern: `^[^\u0000\u0085\u2028\u2029\r\n]{1,256}$`

## SnaplockConfiguration
### Properties
* **AuditLogVolume**: string: Enables or disables the audit log volume for an FSx for ONTAP SnapLock volume
* **AutocommitPeriod**: [AutocommitPeriod](#autocommitperiod): The configuration object for setting the autocommit period of files in an FSx for ONTAP SnapLock volume.
* **PrivilegedDelete**: string: Enables, disables, or permanently disables privileged delete on an FSx for ONTAP SnapLock Enterprise volume.
* **RetentionPeriod**: [SnaplockRetentionPeriod](#snaplockretentionperiod): Specifies the retention period of an FSx for ONTAP SnapLock volume.
* **SnaplockType**: string (Required): Specifies the retention mode of an FSx for ONTAP SnapLock volume. After it is set, it can't be changed.
* **VolumeAppendModeEnabled**: string: Enables or disables volume-append mode on an FSx for ONTAP SnapLock volume.

## SnaplockRetentionPeriod
### Properties
* **DefaultRetention**: [RetentionPeriod](#retentionperiod) (Required): The retention period assigned to a write once, read many (WORM) file by default if an explicit retention period is not set for an FSx for ONTAP SnapLock volume.
* **MaximumRetention**: [RetentionPeriod](#retentionperiod) (Required): The longest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.
* **MinimumRetention**: [RetentionPeriod](#retentionperiod) (Required): The shortest retention period that can be assigned to a WORM file on an FSx for ONTAP SnapLock volume.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A value that specifies the TagKey, the name of the tag. Tag keys must be unique for the resource to which they are attached.
* **Value**: string (Required): A value that specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A value that specifies the TagKey, the name of the tag. Tag keys must be unique for the resource to which they are attached.
* **Value**: string (Required): A value that specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

## TieringPolicy
### Properties
* **CoolingPeriod**: int: Specifies the number of days that user data in a volume must remain inactive before it is considered "cold" and moved to the capacity pool.
* **Name**: string: Specifies the tiering policy used to transition data. Default value is SNAPSHOT_ONLY.

## UserAndGroupQuotas
### Properties
* **Id**: int (Required): The ID of the user or group that the quota applies to.
* **StorageCapacityQuotaGiB**: int (Required): The user or group's storage quota, in gibibytes (GiB).
* **Type**: string (Required): Specifies whether the quota applies to a user or group.

