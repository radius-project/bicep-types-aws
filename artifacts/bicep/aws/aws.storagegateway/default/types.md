# AWS.StorageGateway @ default

## Resource AWS.StorageGateway/NFSFileShare@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StorageGateway/NFSFileShareProperties](#awsstoragegatewaynfsfileshareproperties) (Required, Identifier): properties of the resource

## Resource AWS.StorageGateway/SMBFileShare@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StorageGateway/SMBFileShareProperties](#awsstoragegatewaysmbfileshareproperties) (Required, Identifier): properties of the resource

## Resource AWS.StorageGateway/Tape@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StorageGateway/TapeProperties](#awsstoragegatewaytapeproperties) (Required, Identifier): properties of the resource

## Resource AWS.StorageGateway/TapePool@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StorageGateway/TapePoolProperties](#awsstoragegatewaytapepoolproperties) (Required, Identifier): properties of the resource

## Resource AWS.StorageGateway/Volume@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.StorageGateway/VolumeProperties](#awsstoragegatewayvolumeproperties) (Required, Identifier): properties of the resource

## AWS.StorageGateway/NFSFileShareProperties
### Properties
* **AuditDestinationARN**: string: The ARN of the CloudWatch log group that receives the share's audit logs. Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.
* **BucketRegion**: string: The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.
* **CacheAttributes**: [CacheAttributes](#cacheattributes)
* **ClientList**: string[]: The IPv4 or IPv6 addresses and CIDR blocks permitted to mount the NFS share. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
* **DefaultStorageClass**: string: The S3 storage class for new objects. The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.
* **EncryptionType**: string: The server-side encryption the gateway applies to objects it writes.
* **FileShareARN**: string (ReadOnly, Identifier): The ARN of the file share.
* **FileShareId**: string (ReadOnly): The ID of the file share.
* **FileShareName**: string: The name of the file share, which defaults to the bucket name when omitted. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
* **FileShareStatus**: string (ReadOnly): The status of the file share. The service reports CREATING, UPDATING, AVAILABLE, DELETING and FORCE_DELETING; it is a length-bounded string in the API model rather than an enumeration.
* **GatewayARN**: string (Required): The ARN of the S3 File Gateway that hosts the share.
* **GuessMIMETypeEnabled**: bool: Whether the gateway infers the MIME type of uploaded objects from their extension.
* **KMSEncrypted**: bool: Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.
* **KMSKey**: string: The KMS key used for encryption, when EncryptionType selects KMS. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
* **LocationARN**: string (Required): The ARN of the S3 bucket, or bucket prefix, the share exposes.
* **NFSFileShareDefaults**: [NFSFileShareDefaults](#nfsfilesharedefaults)
* **NotificationPolicy**: string: The upload-notification settling period, as a JSON document.
* **ObjectACL**: string: The canned S3 ACL applied to objects the gateway writes.
* **Path**: string (ReadOnly): The export path the share is mounted or mapped at.
* **ReadOnly**: bool: Whether clients may write to the share.
* **RequesterPays**: bool: Whether the bucket is a Requester Pays bucket.
* **Role**: string (Required): The ARN of the IAM role the gateway assumes when it accesses the S3 location.
* **Squash**: string: How the NFS share maps client user IDs. The service accepts RootSquash, NoSquash and AllSquash; it is a length-bounded string in the API model rather than an enumeration.
* **Tags**: [Tag](#tag)[]: Tags assigned to the file share.
* **VPCEndpointDNSName**: string: The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

## AWS.StorageGateway/SMBFileShareProperties
### Properties
* **AccessBasedEnumeration**: bool: Whether clients see only the files and folders they may access.
* **AdminUserList**: string[]: Users and groups granted administrative privileges on the SMB share.
* **AuditDestinationARN**: string: The ARN of the CloudWatch log group that receives the share's audit logs. Removing this property from a template detaches audit logging: the update sends the empty string, which the service treats as the reset.
* **Authentication**: string: The authentication the SMB share uses. The service accepts ActiveDirectory and GuestAccess; it is a length-bounded string in the API model rather than an enumeration.
* **BucketRegion**: string: The Region of the S3 bucket, required when the bucket is reached through a VPC endpoint.
* **CacheAttributes**: [CacheAttributes](#cacheattributes)
* **CaseSensitivity**: string: Whether the SMB share is case sensitive or defers to the client.
* **DefaultStorageClass**: string: The S3 storage class for new objects. The service accepts S3_STANDARD, S3_INTELLIGENT_TIERING, S3_STANDARD_IA and S3_ONEZONE_IA; it is a length-bounded string in the API model rather than an enumeration.
* **EncryptionType**: string: The server-side encryption the gateway applies to objects it writes.
* **FileShareARN**: string (ReadOnly, Identifier): The ARN of the file share.
* **FileShareId**: string (ReadOnly): The ID of the file share.
* **FileShareName**: string: The name of the file share, which defaults to the bucket name when omitted. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
* **FileShareStatus**: string (ReadOnly): The status of the file share. The service reports CREATING, UPDATING, AVAILABLE, DELETING and FORCE_DELETING; it is a length-bounded string in the API model rather than an enumeration.
* **GatewayARN**: string (Required): The ARN of the S3 File Gateway that hosts the share.
* **GuessMIMETypeEnabled**: bool: Whether the gateway infers the MIME type of uploaded objects from their extension.
* **InvalidUserList**: string[]: Users and groups denied access to the SMB share.
* **KMSEncrypted**: bool: Deprecated by the service in favour of EncryptionType; true selects KMS encryption. Retained because it remains readable and settable.
* **KMSKey**: string: The KMS key used for encryption, when EncryptionType selects KMS. Removing this property from a template leaves the share's current value: the service documents no value that resets it.
* **LocationARN**: string (Required): The ARN of the S3 bucket, or bucket prefix, the share exposes.
* **NotificationPolicy**: string: The upload-notification settling period, as a JSON document.
* **ObjectACL**: string: The canned S3 ACL applied to objects the gateway writes.
* **OplocksEnabled**: bool: Whether the SMB share grants opportunistic locks. Removing this property from a template leaves the live value unchanged rather than restoring the created default, because that default depends on the gateway's software version -- opportunistic locking is enabled by default only on appliances at 1.19.0.0 or above -- and the version is not part of this resource. Set the value explicitly rather than relying on removal.
* **Path**: string (ReadOnly): The export path the share is mounted or mapped at.
* **ReadOnly**: bool: Whether clients may write to the share.
* **RequesterPays**: bool: Whether the bucket is a Requester Pays bucket.
* **Role**: string (Required): The ARN of the IAM role the gateway assumes when it accesses the S3 location.
* **SMBACLEnabled**: bool: Whether the SMB share uses Windows ACLs rather than POSIX permissions.
* **Tags**: [Tag](#tag)[]: Tags assigned to the file share.
* **ValidUserList**: string[]: Users and groups permitted to access the SMB share.
* **VPCEndpointDNSName**: string: The DNS name of the S3 VPC endpoint the gateway uses to reach the bucket.

## AWS.StorageGateway/TapePoolProperties
### Properties
* **PoolARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the custom tape pool.
* **PoolId**: string (ReadOnly): The unique identifier of the custom tape pool, extracted from the ARN.
* **PoolName**: string (Required): The name of the custom tape pool.
* **RetentionLockTimeInDays**: int: Tape retention lock time in days (up to 36,500 days / 100 years).
* **RetentionLockType**: string: Tape retention lock type. Governance mode allows authorized removal; compliance mode prevents all removal.
* **StorageClass**: string (Required): The storage class associated with the custom pool (S3 Glacier or S3 Glacier Deep Archive).
* **Tags**: [Tag](#tag)[]: A list of up to 50 tags for the tape pool.

## AWS.StorageGateway/TapeProperties
### Properties
* **GatewayARN**: string (Required): The Amazon Resource Name (ARN) of the Tape Gateway that hosts the virtual tape.
* **KMSEncrypted**: bool (WriteOnly): Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3. Optional.
* **KMSKey**: string: The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption. This value must be set if KMSEncrypted is true.
* **PoolId**: string: The ID of the pool that you want to add your tape to for archiving. Tapes in this pool are archived in the S3 storage class that is associated with the pool.
* **Tags**: [Tag](#tag)[]: A list of up to 50 tags to assign to the virtual tape.
* **TapeARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the virtual tape.
* **TapeBarcode**: string: The barcode that you want to assign to the virtual tape. Barcodes cannot be reused, even after a tape is deleted.
* **TapeCreatedDate**: string (ReadOnly): The date and time that the virtual tape was created.
* **TapeSizeInBytes**: int (Required): The size, in bytes, of the virtual tape that you want to create.
* **TapeStatus**: string (ReadOnly): The current status of the virtual tape.
* **TapeUsedInBytes**: int (ReadOnly): The size, in bytes, of data stored on the virtual tape.
* **Worm**: bool: Set to true to create a write-once-read-many (WORM) virtual tape.

## AWS.StorageGateway/VolumeProperties
### Properties
* **CreatedDate**: string (ReadOnly): The date the volume was created.
* **GatewayARN**: string (Required): The Amazon Resource Name (ARN) of the gateway on which to create the volume.
* **KMSEncrypted**: bool (WriteOnly): Set to true to use Amazon S3 server-side encryption with your own KMS key, or false to use a key managed by Amazon S3.
* **KMSKey**: string: The Amazon Resource Name (ARN) of a symmetric customer master key (CMK) used for Amazon S3 server-side encryption.
* **NetworkInterfaceId**: string (Required): The network interface of the gateway on which to expose the iSCSI target. Only IPv4 addresses are accepted.
* **SnapshotId**: string (WriteOnly): The snapshot ID of the snapshot to restore as the new cached volume (e.g., snap-1122aabb).
* **SourceVolumeARN**: string (WriteOnly): The ARN of an existing volume from which to create the new volume.
* **Tags**: [Tag](#tag)[]: A list of up to 50 tags to assign to the volume.
* **TargetARN**: string (ReadOnly): The Amazon Resource Name (ARN) of the volume target, which includes the iSCSI target name.
* **TargetName**: string (Required): The name of the iSCSI target used by an initiator to connect to a volume and used as a suffix for the target ARN.
* **VolumeARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the storage volume.
* **VolumeAttachmentStatus**: string (ReadOnly): Indicates whether the storage volume is attached to or detached from the gateway.
* **VolumeId**: string (ReadOnly): The unique identifier of the volume, extracted from the ARN.
* **VolumeSizeInBytes**: int (Required): The size of the volume in bytes.
* **VolumeStatus**: string (ReadOnly): The status of the storage volume.
* **VolumeType**: string (ReadOnly): The type of the volume (CACHED iSCSI).
* **VolumeUsedInBytes**: int (ReadOnly): The size of the data stored on the volume in bytes.

## CacheAttributes
### Properties
* **CacheStaleTimeoutInSeconds**: int: How long the directory contents cached by the gateway are considered valid.

## CacheAttributes
### Properties
* **CacheStaleTimeoutInSeconds**: int: How long the directory contents cached by the gateway are considered valid.

## NFSFileShareDefaults
### Properties
* **DirectoryMode**: string: The Unix directory mode in the form nnnn.
* **FileMode**: string: The Unix file mode in the form nnnn.
* **GroupId**: int: The default group ID for files in the file share.
* **OwnerId**: int: The default owner ID for files in the file share.

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
* **Key**: string (Required): The tag key. Cannot be prefixed with aws:.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

