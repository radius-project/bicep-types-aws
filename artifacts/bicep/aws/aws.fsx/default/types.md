# AWS.FSx @ default

## Resource AWS.FSx/Backup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/BackupProperties](#awsfsxbackupproperties) (Identifier): properties of the resource

## Resource AWS.FSx/ClusterPeer@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/ClusterPeerProperties](#awsfsxclusterpeerproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.FSx/FileSystem@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/FileSystemProperties](#awsfsxfilesystemproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/S3AccessPointAttachment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/S3AccessPointAttachmentProperties](#awsfsxs3accesspointattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/SnapmirrorPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/SnapmirrorPolicyProperties](#awsfsxsnapmirrorpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/SnapmirrorRelationship@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/SnapmirrorRelationshipProperties](#awsfsxsnapmirrorrelationshipproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/Snapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/SnapshotProperties](#awsfsxsnapshotproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/SnapshotPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/SnapshotPolicyProperties](#awsfsxsnapshotpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/StorageVirtualMachine@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/StorageVirtualMachineProperties](#awsfsxstoragevirtualmachineproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/StorageVirtualMachinePeer@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/StorageVirtualMachinePeerProperties](#awsfsxstoragevirtualmachinepeerproperties) (Required, Identifier): properties of the resource

## Resource AWS.FSx/Task@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FSx/TaskProperties](#awsfsxtaskproperties) (Required, Identifier): properties of the resource

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

## AuditLogConfiguration
### Properties
* **AuditLogDestination**: string
* **FileAccessAuditLogLevel**: string (Required)
* **FileShareAccessAuditLogLevel**: string (Required)

## AuthenticationStatus
### Properties
* **InUse**: string: The authentication method in use, for example ok.
* **State**: string: The authentication state, for example ok.

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
* **FileSystemId**: string: The ID of the file system to back up.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the backup.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the backup.
* **Tags**: [Tag](#tag)[]: The tags to apply to the backup at backup creation.
* **Type**: string (ReadOnly): The type of the backup.

## AWS.FSx/ClusterPeerProperties
### Properties
* **AllowedSvmIds**: string[]: The local SVMs the peer cluster may peer with automatically, when AllowedSvmMode is SPECIFIED.
* **AllowedSvmMode**: string (Required): Which local SVMs the peer cluster may peer with automatically: ALL, NONE, or SPECIFIED (the SVMs in AllowedSvmIds).
* **AuthenticationStatus**: [AuthenticationStatus](#authenticationstatus) (ReadOnly)
* **ClusterPeerId**: string (ReadOnly): The system-generated, unique ID of the cluster peer relationship.
* **FileSystemId**: string (Required): The ID of the local file system.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the cluster peer relationship.
* **PassphraseSecretArn**: string (WriteOnly): The ARN of an AWS Secrets Manager secret whose plain-text value is the cluster peering passphrase. Required when you create the cluster peer. Both sides of the relationship must use the same passphrase. The secret must allow FSx to read it.
* **PeerAddresses**: string[] (Required): The intercluster IP addresses of the peer cluster, at least one.
* **PeerClusterName**: string: The ONTAP name of the peer cluster. After it is set, it can be changed but not removed; removing it from the template leaves the current name.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the cluster peer relationship.
* **Status**: string (ReadOnly): The ONTAP availability of the peer relationship, for example available or unavailable.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the cluster peer relationship, with a maximum of 50 tags.
* **UUID**: string (ReadOnly): The ONTAP UUID of the cluster peer relationship.

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

## AWS.FSx/FileSystemProperties
### Properties
* **BackupId**: string (WriteOnly)
* **DNSName**: string (ReadOnly)
* **FileSystemType**: string (Required)
* **FileSystemTypeVersion**: string
* **Id**: string (ReadOnly, Identifier): The file system ID, such as fs-0123456789abcdef0, which AWS assigns.
* **KmsKeyId**: string
* **LustreConfiguration**: [LustreConfiguration](#lustreconfiguration)
* **LustreMountName**: string (ReadOnly)
* **NetworkType**: string
* **OntapConfiguration**: [OntapConfiguration](#ontapconfiguration)
* **OpenZFSConfiguration**: [OpenZFSConfiguration](#openzfsconfiguration)
* **ResourceARN**: string (ReadOnly)
* **RootVolumeId**: string (ReadOnly)
* **SecurityGroupIds**: string[] (WriteOnly)
* **StorageCapacity**: int
* **StorageType**: string
* **SubnetIds**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **WindowsConfiguration**: [WindowsConfiguration](#windowsconfiguration)

## AWS.FSx/S3AccessPointAttachmentProperties
### Properties
* **Lifecycle**: string (ReadOnly): The lifecycle status of the S3 access point attachment.
* **Name**: string (Required, Identifier): The name of the S3 access point attachment; also used for the name of the S3 access point.
* **OntapConfiguration**: [S3AccessPointOntapConfiguration](#s3accesspointontapconfiguration): The OntapConfiguration of the S3 access point attachment.
* **OpenZFSConfiguration**: [S3AccessPointOpenZFSConfiguration](#s3accesspointopenzfsconfiguration): The OpenZFSConfiguration of the S3 access point attachment.
* **S3AccessPoint**: [S3AccessPoint](#s3accesspoint): The S3 access point configuration of the S3 access point attachment.
* **Type**: string (Required): The type of Amazon FSx volume that the S3 access point is attached to.

## AWS.FSx/SnapmirrorPolicyProperties
### Properties
* **FileSystemId**: string: The ID of the file system the SnapMirror policy is scoped to. Specify either FileSystemId or StorageVirtualMachineId.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the SnapMirror policy.
* **Name**: string (Required): The name of the SnapMirror policy. Names must be unique within the policy scope.
* **NetworkCompressionEnabled**: bool: Whether SnapMirror compresses data sent over the network. After it is set, it can be changed but not removed; removing it from the template leaves the current setting.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the SnapMirror policy.
* **RetentionRules**: [RetentionRule](#retentionrule)[]: Rules that retain labeled snapshots on the destination, up to 10. After they are set, they can be changed but not removed; removing them from the template, or setting an empty list, leaves the current rules.
* **Scope**: string (ReadOnly): Whether the policy is scoped to a file system (FILESYSTEM) or to an SVM (SVM).
* **SnapmirrorPolicyId**: string (ReadOnly): The system-generated, unique ID of the SnapMirror policy.
* **SnapshotCopyMode**: string: Which snapshots SnapMirror copies. COPY_ALL_SOURCE_SNAPSHOTS and COPY_LATEST_SOURCE_SNAPSHOT create mirror policies and do not allow RetentionRules. NO_CREATE_SNAPSHOT_ON_SOURCE creates a vault policy and requires RetentionRules. Omit for a mirror-vault policy.
* **StorageVirtualMachineId**: string: The ID of the storage virtual machine (SVM) the SnapMirror policy is scoped to. Specify either FileSystemId or StorageVirtualMachineId.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the SnapMirror policy, with a maximum of 50 tags.
* **ThrottleInKbps**: int: The maximum transfer throughput in kilobytes per second. 0 means unlimited. After it is set, it can be changed but not removed; removing it from the template leaves the current throttle.
* **TransferSchedule**: string: The name of the ONTAP job schedule for SnapMirror transfers. Omit for no schedule.
* **UUID**: string (ReadOnly): The ONTAP UUID of the SnapMirror policy.

## AWS.FSx/SnapmirrorRelationshipProperties
### Properties
* **Destination**: [Destination](#destination) (Required)
* **FileSystemId**: string (ReadOnly): The ID of the file system that contains the destination volume.
* **Healthy**: bool (ReadOnly): Whether the relationship is healthy in ONTAP.
* **LagTimeInMinutes**: int (ReadOnly): How far the destination lags behind the source, in minutes, as reported by ONTAP.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the SnapMirror relationship.
* **PolicyId**: string: The ID of the SnapMirror policy for the relationship. Omit to use the ONTAP default policy for the destination. After it is set, it can be changed but not removed; removing it from the template leaves the current policy.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the SnapMirror relationship.
* **SnapmirrorRelationshipId**: string (ReadOnly): The system-generated, unique ID of the SnapMirror relationship.
* **Source**: [Source](#source) (Required)
* **State**: string (ReadOnly): The state of the relationship in ONTAP.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the SnapMirror relationship, with a maximum of 50 tags.
* **ThrottleInKbps**: int: The maximum transfer throughput in kilobytes per second. 0 means unlimited. Removing it from the template sets it back to 0 (unlimited).
* **TransferSchedule**: string: The name of the ONTAP job schedule for transfers. Overrides the policy transfer schedule. After it is set, it can be changed but not removed; removing it from the template leaves the current schedule.
* **UUID**: string (ReadOnly): The ONTAP UUID of the SnapMirror relationship.

## AWS.FSx/SnapshotPolicyProperties
### Properties
* **Enabled**: bool: Whether the snapshot policy is enabled. A disabled policy doesn't create snapshots. If you remove this property from the template, a stack update keeps the current value.
* **FileSystemId**: string: The ID of the FSx for ONTAP file system on which to create a file system-scoped snapshot policy. Specify exactly one of FileSystemId or StorageVirtualMachineId.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the snapshot policy.
* **Name**: string (Required): The name of the snapshot policy.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the snapshot policy.
* **Schedules**: [SnapshotPolicySchedule](#snapshotpolicyschedule)[] (Required): The schedules of the snapshot policy. Each schedule creates snapshots on a named ONTAP job schedule and retains a maximum number of them.
* **Scope**: string (ReadOnly): Whether the snapshot policy is scoped to a file system or to an SVM.
* **SnapshotPolicyId**: string (ReadOnly): The system-generated, unique ID of the snapshot policy.
* **StorageVirtualMachineId**: string: The ID of the storage virtual machine (SVM) on which to create an SVM-scoped snapshot policy. Specify exactly one of FileSystemId or StorageVirtualMachineId.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the snapshot policy, with a maximum of 50 tags.
* **UUID**: string (ReadOnly): The UUID of the snapshot policy in ONTAP.

## AWS.FSx/SnapshotProperties
### Properties
* **Id**: string (ReadOnly, Identifier): The ID of the snapshot.
* **Name**: string (Required): The name of the snapshot.
* **ResourceARN**: string (ReadOnly): Returns the snapshot's Amazon Resource Name (ARN).
* **Tags**: [Tag](#tag)[]: A list of Tag values, with a maximum of 50 elements.
* **VolumeId**: string (Required): The ID of the volume that the snapshot is of.

## AWS.FSx/StorageVirtualMachinePeerProperties
### Properties
* **Applications**: string[] (Required): The applications that can use the peer relationship, at least one.
* **FileSystemId**: string (ReadOnly): The ID of the file system that contains the local SVM.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the SVM peer relationship.
* **PeerClusterName**: string: The ONTAP name of the peer cluster. Omit to peer with an SVM on the same file system. A cross-cluster peer requires a cluster peer with that cluster.
* **PeerSvmAlias**: string: A local alias for the peer SVM. Use an alias when the peer SVM has the same name as a local SVM. After it is set, it can be changed but not removed; removing it from the template leaves the current alias.
* **PeerSvmName**: string (Required): The name of the SVM to peer with, as it is known in ONTAP on the peer cluster.
* **ResourceARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the SVM peer relationship.
* **State**: string (ReadOnly): The state of the peer relationship in ONTAP.
* **StorageVirtualMachineId**: string (Required): The ID of the local storage virtual machine (SVM) that initiates the peer relationship.
* **StorageVirtualMachinePeerId**: string (ReadOnly): The system-generated, unique ID of the SVM peer relationship.
* **Tags**: [Tag](#tag)[]: A list of tags to apply to the SVM peer relationship, with a maximum of 50 tags.
* **UUID**: string (ReadOnly): The ONTAP UUID of the SVM peer relationship.

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

## AWS.FSx/TaskProperties
### Properties
* **CreationTime**: string (ReadOnly): The time the data repository task was created.
* **FileCacheId**: string (ReadOnly): The system-generated, unique ID of the Amazon File Cache that a data repository task is associated with. Present instead of FileSystemId for AUTO_RELEASE_DATA cache tasks.
* **FileSystemId**: string: The globally unique ID of the file system.
* **Lifecycle**: string (ReadOnly): The lifecycle status of the data repository task.
* **Paths**: string[]: A list of paths for the data repository task to use when the task is processed.
* **ReleaseConfiguration**: [ReleaseConfiguration](#releaseconfiguration)
* **Report**: [CompletionReport](#completionreport)
* **ResourceARN**: string (Identifier): The Amazon Resource Name (ARN) of the data repository task.
* **Tags**: [Tag](#tag)[]: Tags associated with the data repository task.
* **TaskId**: string (ReadOnly): The system-generated, unique 17-digit ID of the data repository task.
* **Type**: string (Required): The type of data repository task.

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
* **Clients**: string
* **Options**: string[]

## ClientConfigurations
### Properties
* **Clients**: string (Required): A value that specifies who can mount the file system. You can provide a wildcard character (*), an IP address (0.0.0.0), or a CIDR address (192.0.2.0/24). By default, Amazon FSx uses the wildcard character when specifying the client.
* **Options**: string[] (Required): The configuration object for mounting a Network File System (NFS) file system.

## CloneConfiguration
### Properties
* **ParentVolumeId**: string (Required): The ID of the volume to clone. It must be in the same storage virtual machine (SVM) as the new volume.
* **SnapshotId**: string: The ID of a snapshot of the parent volume to clone from. If you omit it, the clone is created from the parent volume's current state. Required when this volume's OntapVolumeType is DP (the parent volume must then also be DP).

## CompletionReport
### Properties
* **Enabled**: bool (Required): Set to True to generate a CompletionReport when the task completes.
* **Format**: string: Specifies the format of the CompletionReport.
* **Path**: string: Specifies the location of the report on the linked S3 data repository.
* **Scope**: string: Specifies the scope of the CompletionReport.

## DataReadCacheConfiguration
### Properties
* **SizeGiB**: int
* **SizingMode**: string

## DataRepositoryAssociation
### Properties
* **DataRepositoryPath**: string (Required)
* **FileCachePath**: string (Required)

## Destination
### Properties
* **Path**: string (ReadOnly): The destination volume, as <svm-name>:<volume-name>.
* **VolumeId**: string (Required): The ID of the destination volume. It must be a data-protection (DP) volume.

## DiskIopsConfiguration
### Properties
* **Iops**: int
* **Mode**: string

## DurationSinceLastAccess
### Properties
* **Unit**: string: The unit of time used by the Value parameter.
* **Value**: int: An integer that represents the minimum amount of time (in days) since a file was last accessed.

## FileSystemGID
### Properties
* **Gid**: int (Required): The GID of the file system user.

## FsrmConfiguration
### Properties
* **EventLogDestination**: string
* **FsrmServiceEnabled**: bool (Required)

## LogConfiguration
### Properties
* **Destination**: string
* **Level**: string (Required)

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

## LustreConfiguration
### Properties
* **AutoImportPolicy**: string
* **AutomaticBackupRetentionDays**: int
* **CopyTagsToBackups**: bool
* **DailyAutomaticBackupStartTime**: string
* **DataCompressionType**: string
* **DataReadCacheConfiguration**: [DataReadCacheConfiguration](#datareadcacheconfiguration)
* **DeploymentType**: string
* **DriveCacheType**: string
* **EfaEnabled**: bool
* **ExportPath**: string
* **ImportedFileChunkSize**: int
* **ImportPath**: string
* **LogConfiguration**: [LogConfiguration](#logconfiguration)
* **MetadataConfiguration**: [MetadataConfiguration](#metadataconfiguration)
* **PerUnitStorageThroughput**: int
* **ThroughputCapacity**: int
* **WeeklyMaintenanceStartTime**: string

## MetadataConfiguration
### Properties
* **StorageCapacity**: int (Required)

## MetadataConfiguration
### Properties
* **Iops**: int
* **Mode**: string

## NfsExports
### Properties
* **ClientConfigurations**: [ClientConfigurations](#clientconfigurations)[]

## NfsExports
### Properties
* **ClientConfigurations**: [ClientConfigurations](#clientconfigurations)[] (Required): The configuration object for mounting a Network File System (NFS) file system.

## OntapConfiguration
### Properties
* **AutomaticBackupRetentionDays**: int
* **DailyAutomaticBackupStartTime**: string
* **DeploymentType**: string (Required)
* **DiskIopsConfiguration**: [DiskIopsConfiguration](#diskiopsconfiguration)
* **EndpointIpAddressRange**: string
* **EndpointIpv6AddressRange**: string
* **FsxAdminPassword**: string (WriteOnly)
* **HAPairs**: int
* **PreferredSubnetId**: string
* **RouteTableIds**: string[]
* **ThroughputCapacity**: int
* **ThroughputCapacityPerHAPair**: int
* **WeeklyMaintenanceStartTime**: string

## OntapConfiguration
### Properties
* **AggregateConfiguration**: [AggregateConfiguration](#aggregateconfiguration): Used to specify the configuration options for an FSx for ONTAP volume's storage aggregate or aggregates.
* **CloneConfiguration**: [CloneConfiguration](#cloneconfiguration): Creates the volume as an ONTAP FlexClone of an existing volume. The clone takes SizeInMegabytes and StorageEfficiencyEnabled from the parent volume: omit them, or set them to the parent's values.
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

## OntapFileSystemIdentity
### Properties
* **Type**: string (Required): Specifies the FSx for ONTAP user identity type, accepts either UNIX or WINDOWS.
* **UnixUser**: [OntapUnixFileSystemUser](#ontapunixfilesystemuser): Specifies the properties of the file system UNIX user.
* **WindowsUser**: [OntapWindowsFileSystemUser](#ontapwindowsfilesystemuser): Specifies the properties of the file system Windows user.

## OntapUnixFileSystemUser
### Properties
* **Name**: string (Required, Identifier): The name of the UNIX user.

## OntapWindowsFileSystemUser
### Properties
* **Name**: string (Required, Identifier): The name of the Windows user.

## OpenZFSConfiguration
### Properties
* **AutomaticBackupRetentionDays**: int
* **CopyTagsToBackups**: bool
* **CopyTagsToVolumes**: bool
* **DailyAutomaticBackupStartTime**: string
* **DeploymentType**: string (Required)
* **DiskIopsConfiguration**: [DiskIopsConfiguration](#diskiopsconfiguration)
* **EndpointIpAddressRange**: string
* **EndpointIpv6AddressRange**: string
* **Options**: string[] (WriteOnly)
* **PreferredSubnetId**: string
* **ReadCacheConfiguration**: [ReadCacheConfiguration](#readcacheconfiguration)
* **RootVolumeConfiguration**: [RootVolumeConfiguration](#rootvolumeconfiguration) (WriteOnly)
* **RouteTableIds**: string[]
* **ThroughputCapacity**: int
* **WeeklyMaintenanceStartTime**: string

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

## OpenZFSFileSystemIdentity
### Properties
* **PosixUser**: [OpenZFSPosixFileSystemUser](#openzfsposixfilesystemuser) (Required): Specifies the UID and GIDs of the file system POSIX user.
* **Type**: string (Required): Specifies the FSx for OpenZFS user identity type, accepts only POSIX.

## OpenZFSPosixFileSystemUser
### Properties
* **Gid**: int (Required): The GID of the file system user.
* **SecondaryGids**: [FileSystemGID](#filesystemgid)[]: The list of secondary GIDs for the file system user.
* **Uid**: int (Required): The UID of the file system user.

## OriginSnapshot
### Properties
* **CopyStrategy**: string (Required): The configuration object for mounting a Network File System (NFS) file system.
* **SnapshotARN**: string (Required): Specifies the snapshot to use when creating an OpenZFS volume from a snapshot.

## ReadCacheConfiguration
### Properties
* **SizeGiB**: int
* **SizingMode**: string

## ReleaseConfiguration
### Properties
* **DurationSinceLastAccess**: [DurationSinceLastAccess](#durationsincelastaccess)

## RetentionPeriod
### Properties
* **Type**: string (Required): Defines the type of time for the retention period of an FSx for ONTAP SnapLock volume. Set it to one of the valid types. If you set it to INFINITE, the files are retained forever. If you set it to UNSPECIFIED, the files are retained until you set an explicit retention period.
* **Value**: int: Defines the amount of time for the retention period of an FSx for ONTAP SnapLock volume. You can't set a value for INFINITE or UNSPECIFIED.

## RetentionRule
### Properties
* **Count**: int (Required): The number of snapshots with this label to retain on the destination.
* **CreationSchedule**: string: The name of an ONTAP job schedule that creates snapshots with this label on the destination.
* **Label**: string (Required): The SnapMirror label of the snapshots this rule retains.

## RootVolumeConfiguration
### Properties
* **CopyTagsToSnapshots**: bool
* **DataCompressionType**: string
* **NfsExports**: [NfsExports](#nfsexports)[]
* **ReadOnly**: bool
* **RecordSizeKiB**: int
* **UserAndGroupQuotas**: [UserAndGroupQuotas](#userandgroupquotas)[]

## S3
### Properties
* **AutoExportPolicy**: [AutoExportPolicy](#autoexportpolicy)
* **AutoImportPolicy**: [AutoImportPolicy](#autoimportpolicy)

## S3AccessPoint
### Properties
* **Alias**: string (ReadOnly): The S3 access point's alias.
* **Policy**: [S3AccessPointAttachment_Policy](#s3accesspointattachmentpolicy) | string (WriteOnly): The S3 access point's policy.
* **ResourceARN**: string (ReadOnly): The S3 access point's ARN.
* **VpcConfiguration**: [S3AccessPointVpcConfiguration](#s3accesspointvpcconfiguration): The S3 access point's virtual private cloud (VPC) configuration.

## S3AccessPointOntapConfiguration
### Properties
* **FileSystemIdentity**: [OntapFileSystemIdentity](#ontapfilesystemidentity) (Required): The file system identity used to authorize file access requests made using the S3 access point.
* **VolumeId**: string (Required): The ID of the FSx for ONTAP volume that the S3 access point is attached to.

## S3AccessPointOpenZFSConfiguration
### Properties
* **FileSystemIdentity**: [OpenZFSFileSystemIdentity](#openzfsfilesystemidentity) (Required): The file system identity used to authorize file access requests made using the S3 access point.
* **VolumeId**: string (Required): The ID of the FSx for OpenZFS volume that the S3 access point is attached to.

## S3AccessPointVpcConfiguration
### Properties
* **VpcId**: string (Required): Specifies the virtual private cloud (VPC) for the S3 access point VPC configuration, if one exists.

## SelfManagedActiveDirectoryConfiguration
### Properties
* **DnsIps**: string[]
* **DomainJoinServiceAccountSecret**: string
* **DomainName**: string
* **FileSystemAdministratorsGroup**: string
* **OrganizationalUnitDistinguishedName**: string
* **Password**: string (WriteOnly)
* **UserName**: string

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

## SnapshotPolicyRetentionPeriod
### Properties
* **Type**: string (Required): The unit of the retention period, or INFINITE to retain snapshots indefinitely.
* **Value**: int: The length of the retention period, in the unit given by Type.

## SnapshotPolicySchedule
### Properties
* **Count**: int (Required): The maximum number of snapshots to retain for this schedule.
* **Name**: string (Required): The name of the ONTAP job schedule that triggers snapshot creation, for example hourly, daily, or weekly.
* **Prefix**: string: The prefix applied to the names of snapshots created by this schedule.
* **RetentionPeriod**: [SnapshotPolicyRetentionPeriod](#snapshotpolicyretentionperiod)
* **SnapmirrorLabel**: string: The SnapMirror label applied to snapshots created by this schedule. SnapMirror policies use this label to select snapshots to replicate.

## Source
### Properties
* **Path**: string (Required): The source volume, as <svm-name>:<volume-name>. For a source on the destination SVM, use that SVM's name. For a source on a peered SVM, use the peer SVM name or its local alias, as seen from the destination SVM.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): A value that specifies the TagKey, the name of the tag. Tag keys must be unique for the resource to which they are attached.
* **Value**: string (Required): A value that specifies the TagValue, the value assigned to the corresponding tag key. Tag values can be null and don't have to be unique in a tag set. For example, you can have a key-value pair in a tag set of finances : April and also of payroll : April.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

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
* **Id**: int (Identifier)
* **StorageCapacityQuotaGiB**: int
* **Type**: string

## UserAndGroupQuotas
### Properties
* **Id**: int (Required): The ID of the user or group that the quota applies to.
* **StorageCapacityQuotaGiB**: int (Required): The user or group's storage quota, in gibibytes (GiB).
* **Type**: string (Required): Specifies whether the quota applies to a user or group.

## WindowsConfiguration
### Properties
* **ActiveDirectoryId**: string
* **Aliases**: string[]
* **AuditLogConfiguration**: [AuditLogConfiguration](#auditlogconfiguration)
* **AutomaticBackupRetentionDays**: int
* **CopyTagsToBackups**: bool
* **DailyAutomaticBackupStartTime**: string
* **DeploymentType**: string
* **DiskIopsConfiguration**: [DiskIopsConfiguration](#diskiopsconfiguration)
* **FsrmConfiguration**: [FsrmConfiguration](#fsrmconfiguration)
* **PreferredSubnetId**: string
* **SelfManagedActiveDirectoryConfiguration**: [SelfManagedActiveDirectoryConfiguration](#selfmanagedactivedirectoryconfiguration)
* **ThroughputCapacity**: int (Required)
* **WeeklyMaintenanceStartTime**: string

