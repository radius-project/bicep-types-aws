# AWS.DataSync @ default

## Resource AWS.DataSync/Agent@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/AgentProperties](#awsdatasyncagentproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationEFS@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationEFSProperties](#awsdatasynclocationefsproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationFSxLustre@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationFSxLustreProperties](#awsdatasynclocationfsxlustreproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationFSxONTAP@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationFSxONTAPProperties](#awsdatasynclocationfsxontapproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationFSxOpenZFS@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationFSxOpenZFSProperties](#awsdatasynclocationfsxopenzfsproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationFSxWindows@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationFSxWindowsProperties](#awsdatasynclocationfsxwindowsproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationHDFS@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationHDFSProperties](#awsdatasynclocationhdfsproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationNFS@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationNFSProperties](#awsdatasynclocationnfsproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationObjectStorage@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationObjectStorageProperties](#awsdatasynclocationobjectstorageproperties) (Required): properties of the resource

## Resource AWS.DataSync/LocationS3@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationS3Properties](#awsdatasynclocations3properties) (Required): properties of the resource

## Resource AWS.DataSync/LocationSMB@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/LocationSMBProperties](#awsdatasynclocationsmbproperties) (Required): properties of the resource

## Resource AWS.DataSync/Task@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DataSync/TaskProperties](#awsdatasynctaskproperties) (Required): properties of the resource

## AWS.DataSync/AgentProperties
### Properties
* **ActivationKey**: string (Required, WriteOnly): Activation key of the Agent.
* **AgentArn**: string (ReadOnly): The DataSync Agent ARN.
* **AgentName**: string: The name configured for the agent. Text reference used to identify the agent in the console.
* **EndpointType**: string (ReadOnly): The service endpoints that the agent will connect to.
* **SecurityGroupArns**: string[]: The ARNs of the security group used to protect your data transfer task subnets.
* **SubnetArns**: string[]: The ARNs of the subnets in which DataSync will create elastic network interfaces for each data transfer task.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **VpcEndpointId**: string: The ID of the VPC endpoint that the agent has access to.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationEFSProperties
### Properties
* **AccessPointArn**: string: The Amazon Resource Name (ARN) for the Amazon EFS Access point that DataSync uses when accessing the EFS file system.
* **Ec2Config**: [Ec2Config](#ec2config) (Required)
* **EfsFilesystemArn**: string (Required, WriteOnly): The Amazon Resource Name (ARN) for the Amazon EFS file system.
* **FileSystemAccessRoleArn**: string: The Amazon Resource Name (ARN) of the AWS IAM role that the DataSync will assume when mounting the EFS file system.
* **InTransitEncryption**: string: Protocol that is used for encrypting the traffic exchanged between the DataSync Agent and the EFS file system.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon EFS file system location that is created.
* **LocationUri**: string (ReadOnly): The URL of the EFS location that was described.
* **Subdirectory**: string (WriteOnly): A subdirectory in the location's path. This subdirectory in the EFS file system is used to read data from the EFS source location or write data to the EFS destination.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Ec2Config
### Properties
* **SecurityGroupArns**: string[] (Required): The Amazon Resource Names (ARNs) of the security groups that are configured for the Amazon EC2 resource.
* **SubnetArn**: string (Required): The ARN of the subnet that DataSync uses to access the target EFS file system.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationFSxLustreProperties
### Properties
* **FsxFilesystemArn**: string (Required, WriteOnly): The Amazon Resource Name (ARN) for the FSx for Lustre file system.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon FSx for Lustre file system location that is created.
* **LocationUri**: string (ReadOnly): The URL of the FSx for Lustre location that was described.
* **SecurityGroupArns**: string[] (Required): The ARNs of the security groups that are to use to configure the FSx for Lustre file system.
* **Subdirectory**: string (WriteOnly): A subdirectory in the location's path.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationFSxONTAPProperties
### Properties
* **FsxFilesystemArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the FSx ONAP file system.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon FSx ONTAP file system location that is created.
* **LocationUri**: string (ReadOnly): The URL of the FSx ONTAP file system that was described.
* **Protocol**: [Protocol](#protocol) (Required)
* **SecurityGroupArns**: string[] (Required): The ARNs of the security groups that are to use to configure the FSx ONTAP file system.
* **StorageVirtualMachineArn**: string (Required): The Amazon Resource Name (ARN) for the FSx ONTAP SVM.
* **Subdirectory**: string (WriteOnly): A subdirectory in the location's path.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Protocol
### Properties
* **NFS**: [NFS](#nfs)
* **SMB**: [SMB](#smb)

## NFS
### Properties
* **MountOptions**: [NfsMountOptions](#nfsmountoptions) (Required)

## NfsMountOptions
### Properties
* **Version**: string: The specific NFS version that you want DataSync to use to mount your NFS share.

## SMB
### Properties
* **Domain**: string: The name of the Windows domain that the SMB server belongs to.
* **MountOptions**: [SmbMountOptions](#smbmountoptions) (Required)
* **Password**: string (Required): The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
* **User**: string (Required): The user who can mount the share, has the permissions to access files and folders in the SMB share.

## SmbMountOptions
### Properties
* **Version**: string: The specific SMB version that you want DataSync to use to mount your SMB share.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationFSxOpenZFSProperties
### Properties
* **FsxFilesystemArn**: string (Required, WriteOnly): The Amazon Resource Name (ARN) for the FSx OpenZFS file system.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon FSx OpenZFS file system location that is created.
* **LocationUri**: string (ReadOnly): The URL of the FSx OpenZFS that was described.
* **Protocol**: [Protocol](#protocol) (Required)
* **SecurityGroupArns**: string[] (Required): The ARNs of the security groups that are to use to configure the FSx OpenZFS file system.
* **Subdirectory**: string (WriteOnly): A subdirectory in the location's path.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Protocol
### Properties
* **NFS**: [NFS](#nfs)

## NFS
### Properties
* **MountOptions**: [MountOptions](#mountoptions) (Required)

## MountOptions
### Properties
* **Version**: string: The specific NFS version that you want DataSync to use to mount your NFS share.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationFSxWindowsProperties
### Properties
* **Domain**: string: The name of the Windows domain that the FSx for Windows server belongs to.
* **FsxFilesystemArn**: string (Required, WriteOnly): The Amazon Resource Name (ARN) for the FSx for Windows file system.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon FSx for Windows file system location that is created.
* **LocationUri**: string (ReadOnly): The URL of the FSx for Windows location that was described.
* **Password**: string (Required, WriteOnly): The password of the user who has the permissions to access files and folders in the FSx for Windows file system.
* **SecurityGroupArns**: string[] (Required): The ARNs of the security groups that are to use to configure the FSx for Windows file system.
* **Subdirectory**: string (WriteOnly): A subdirectory in the location's path.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **User**: string (Required): The user who has the permissions to access files and folders in the FSx for Windows file system.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationHDFSProperties
### Properties
* **AgentArns**: string[] (Required): ARN(s) of the agent(s) to use for an HDFS location.
* **AuthenticationType**: string (Required): The authentication mode used to determine identity of user.
* **BlockSize**: int: Size of chunks (blocks) in bytes that the data is divided into when stored in the HDFS cluster.
* **KerberosKeytab**: string (WriteOnly): The Base64 string representation of the Keytab file.
* **KerberosKrb5Conf**: string (WriteOnly): The string representation of the Krb5Conf file, or the presigned URL to access the Krb5.conf file within an S3 bucket.
* **KerberosPrincipal**: string: The unique identity, or principal, to which Kerberos can assign tickets.
* **KmsKeyProviderUri**: string: The identifier for the Key Management Server where the encryption keys that encrypt data inside HDFS clusters are stored.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the HDFS location.
* **LocationUri**: string (ReadOnly): The URL of the HDFS location that was described.
* **NameNodes**: [NameNode](#namenode)[] (Required): An array of Name Node(s) of the HDFS location.
* **QopConfiguration**: [QopConfiguration](#qopconfiguration)
* **ReplicationFactor**: int: Number of copies of each block that exists inside the HDFS cluster.
* **SimpleUser**: string: The user name that has read and write permissions on the specified HDFS cluster.
* **Subdirectory**: string (WriteOnly): The subdirectory in HDFS that is used to read data from the HDFS source location or write data to the HDFS destination.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## NameNode
### Properties
* **Hostname**: string (Required): The DNS name or IP address of the Name Node in the customer's on premises HDFS cluster.
* **Port**: int (Required): The port on which the Name Node is listening on for client requests.

## QopConfiguration
### Properties
* **DataTransferProtection**: string: Configuration for Data Transfer Protection.
* **RpcProtection**: string: Configuration for RPC Protection.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.DataSync/LocationNFSProperties
### Properties
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the NFS location.
* **LocationUri**: string (ReadOnly): The URL of the NFS location that was described.
* **MountOptions**: [MountOptions](#mountoptions)
* **OnPremConfig**: [OnPremConfig](#onpremconfig) (Required)
* **ServerHostname**: string (Required, WriteOnly): The name of the NFS server. This value is the IP address or DNS name of the NFS server.
* **Subdirectory**: string (Required, WriteOnly): The subdirectory in the NFS file system that is used to read data from the NFS source location or write data to the NFS destination.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## MountOptions
### Properties
* **Version**: string: The specific NFS version that you want DataSync to use to mount your NFS share.

## OnPremConfig
### Properties
* **AgentArns**: string[] (Required): ARN(s) of the agent(s) to use for an NFS location.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationObjectStorageProperties
### Properties
* **AccessKey**: string: Optional. The access key is used if credentials are required to access the self-managed object storage server.
* **AgentArns**: string[] (Required): The Amazon Resource Name (ARN) of the agents associated with the self-managed object storage server location.
* **BucketName**: string (Required, WriteOnly): The name of the bucket on the self-managed object storage server.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the location that is created.
* **LocationUri**: string (ReadOnly): The URL of the object storage location that was described.
* **SecretKey**: string (WriteOnly): Optional. The secret key is used if credentials are required to access the self-managed object storage server.
* **ServerHostname**: string (Required, WriteOnly): The name of the self-managed object storage server. This value is the IP address or Domain Name Service (DNS) name of the object storage server.
* **ServerPort**: int: The port that your self-managed server accepts inbound network traffic on.
* **ServerProtocol**: string: The protocol that the object storage server uses to communicate.
* **Subdirectory**: string (WriteOnly): The subdirectory in the self-managed object storage server that is used to read data from.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationS3Properties
### Properties
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon S3 bucket location.
* **LocationUri**: string (ReadOnly): The URL of the S3 location that was described.
* **S3BucketArn**: string (Required, WriteOnly): The Amazon Resource Name (ARN) of the Amazon S3 bucket.
* **S3Config**: [S3Config](#s3config) (Required)
* **S3StorageClass**: string: The Amazon S3 storage class you want to store your files in when this location is used as a task destination.
* **Subdirectory**: string (WriteOnly): A subdirectory in the Amazon S3 bucket. This subdirectory in Amazon S3 is used to read data from the S3 source location or write data to the S3 destination.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## S3Config
### Properties
* **BucketAccessRoleArn**: string (Required): The ARN of the IAM role of the Amazon S3 bucket.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/LocationSMBProperties
### Properties
* **AgentArns**: string[] (Required): The Amazon Resource Names (ARNs) of agents to use for a Simple Message Block (SMB) location.
* **Domain**: string: The name of the Windows domain that the SMB server belongs to.
* **LocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the SMB location that is created.
* **LocationUri**: string (ReadOnly): The URL of the SMB location that was described.
* **MountOptions**: [MountOptions](#mountoptions)
* **Password**: string (Required, WriteOnly): The password of the user who can mount the share and has the permissions to access files and folders in the SMB share.
* **ServerHostname**: string (Required, WriteOnly): The name of the SMB server. This value is the IP address or Domain Name Service (DNS) name of the SMB server.
* **Subdirectory**: string (Required, WriteOnly): The subdirectory in the SMB file system that is used to read data from the SMB source location or write data to the SMB destination
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **User**: string (Required): The user who can mount the share, has the permissions to access files and folders in the SMB share.

## MountOptions
### Properties
* **Version**: string: The specific SMB version that you want DataSync to use to mount your SMB share.

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

## AWS.DataSync/TaskProperties
### Properties
* **CloudWatchLogGroupArn**: string: The ARN of the Amazon CloudWatch log group that is used to monitor and log events in the task.
* **DestinationLocationArn**: string (Required): The ARN of an AWS storage resource's location.
* **DestinationNetworkInterfaceArns**: [DestinationNetworkInterfaceArns](#destinationnetworkinterfacearns) (ReadOnly)
* **ErrorCode**: string (ReadOnly): Errors that AWS DataSync encountered during execution of the task. You can use this error code to help troubleshoot issues.
* **ErrorDetail**: string (ReadOnly): Detailed description of an error that was encountered during the task execution.
* **Excludes**: [FilterRule](#filterrule)[]
* **Includes**: [FilterRule](#filterrule)[]
* **Name**: string: The name of a task. This value is a text reference that is used to identify the task in the console.
* **Options**: [Options](#options)
* **Schedule**: [TaskSchedule](#taskschedule)
* **SourceLocationArn**: string (Required): The ARN of the source location for the task.
* **SourceNetworkInterfaceArns**: [SourceNetworkInterfaceArns](#sourcenetworkinterfacearns) (ReadOnly)
* **Status**: string (ReadOnly): The status of the task that was described.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TaskArn**: string (ReadOnly): The ARN of the task.

## DestinationNetworkInterfaceArns
### Properties

## FilterRule
### Properties
* **FilterType**: string: The type of filter rule to apply. AWS DataSync only supports the SIMPLE_PATTERN rule type.
* **Value**: string: A single filter string that consists of the patterns to include or exclude. The patterns are delimited by "|".

## Options
### Properties
* **Atime**: string: A file metadata value that shows the last time a file was accessed (that is, when the file was read or written to).
* **BytesPerSecond**: int: A value that limits the bandwidth used by AWS DataSync.
* **Gid**: string: The group ID (GID) of the file's owners.
* **LogLevel**: string: A value that determines the types of logs that DataSync publishes to a log stream in the Amazon CloudWatch log group that you provide.
* **Mtime**: string: A value that indicates the last time that a file was modified (that is, a file was written to) before the PREPARING phase.
* **ObjectTags**: string: A value that determines whether object tags should be read from the source object store and written to the destination object store.
* **OverwriteMode**: string: A value that determines whether files at the destination should be overwritten or preserved when copying files.
* **PosixPermissions**: string: A value that determines which users or groups can access a file for a specific purpose such as reading, writing, or execution of the file.
* **PreserveDeletedFiles**: string: A value that specifies whether files in the destination that don't exist in the source file system should be preserved.
* **PreserveDevices**: string: A value that determines whether AWS DataSync should preserve the metadata of block and character devices in the source file system, and recreate the files with that device name and metadata on the destination.
* **SecurityDescriptorCopyFlags**: string: A value that determines which components of the SMB security descriptor are copied during transfer.
* **TaskQueueing**: string: A value that determines whether tasks should be queued before executing the tasks.
* **TransferMode**: string: A value that determines whether DataSync transfers only the data and metadata that differ between the source and the destination location, or whether DataSync transfers all the content from the source, without comparing to the destination location.
* **Uid**: string: The user ID (UID) of the file's owner.
* **VerifyMode**: string: A value that determines whether a data integrity verification should be performed at the end of a task execution after all data and metadata have been transferred.

## TaskSchedule
### Properties
* **ScheduleExpression**: string (Required): A cron expression that specifies when AWS DataSync initiates a scheduled transfer from a source to a destination location

## SourceNetworkInterfaceArns
### Properties

## Tag
### Properties
* **Key**: string (Required): The key for an AWS resource tag.
* **Value**: string (Required): The value for an AWS resource tag.

