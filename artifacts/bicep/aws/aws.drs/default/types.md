# AWS.DRS @ default

## Resource AWS.DRS/LaunchConfigurationTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/LaunchConfigurationTemplateProperties](#awsdrslaunchconfigurationtemplateproperties) (Identifier): properties of the resource

## Resource AWS.DRS/RecoveryPlan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/RecoveryPlanProperties](#awsdrsrecoveryplanproperties) (Required, Identifier): properties of the resource

## Resource AWS.DRS/ReplicationConfigurationTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/ReplicationConfigurationTemplateProperties](#awsdrsreplicationconfigurationtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.DRS/SourceNetwork@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/SourceNetworkProperties](#awsdrssourcenetworkproperties) (Required, Identifier): properties of the resource

## AWS.DRS/LaunchConfigurationTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): ARN of the Launch Configuration Template.
* **CopyPrivateIp**: bool: Copy private IP.
* **CopyTags**: bool: Copy tags.
* **ExportBucketArn**: string: S3 bucket ARN to export Source Network templates.
* **LaunchConfigurationTemplateID**: string (ReadOnly): ID of the Launch Configuration Template.
* **LaunchDisposition**: string: Launch disposition.
* **LaunchIntoSourceInstance**: bool: DRS will set the 'launch into instance ID' of any source server when performing a drill, recovery or failback to the previous region or availability zone, using the instance ID of the source instance.
* **Licensing**: [Licensing](#licensing)
* **PostLaunchEnabled**: bool: Whether we want to activate post-launch actions.
* **Tags**: [Tag](#tag)[]: A set of tags associated with the Launch Configuration Template.
* **TargetInstanceTypeRightSizingMethod**: string: Target instance type right-sizing method.

## AWS.DRS/RecoveryPlanProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the Recovery Plan.
* **CreatedAt**: string (ReadOnly): The timestamp when the Recovery Plan was created.
* **Description**: string: The description of the Recovery Plan.
* **Name**: string (Required): The name of the Recovery Plan.
* **RecoveryPlanID**: string (ReadOnly): The ID of the Recovery Plan.
* **Status**: string (ReadOnly): The status of the Recovery Plan. ACTIVE means executable. INVALID means the plan has no SERVER type steps and cannot be executed.
* **Tags**: [Tag](#tag)[]: The tags associated with the Recovery Plan.
* **UpdatedAt**: string (ReadOnly): The timestamp when the Recovery Plan was last updated.

## AWS.DRS/ReplicationConfigurationTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Replication Configuration Template ARN.
* **AssociateDefaultSecurityGroup**: bool: Whether to associate the default Elastic Disaster Recovery Security group with the Replication Configuration Template.
* **AutoReplicateNewDisks**: bool: Whether to allow the AWS replication agent to automatically replicate newly added disks.
* **BandwidthThrottling**: int (Required): Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
* **CreatePublicIP**: bool: Whether to create a Public IP for the Recovery Instance by default.
* **DataPlaneRouting**: string: The data plane routing mechanism that will be used for replication.
* **DefaultLargeStagingDiskType**: string: The Staging Disk EBS volume type to be used during replication.
* **EbsEncryption**: string (Required): The type of EBS encryption to be used during replication.
* **EbsEncryptionKeyArn**: string: The ARN of the EBS encryption key to be used during replication.
* **InternetProtocol**: string: Which version of the Internet Protocol to use for replication of data.
* **PitPolicy**: [PITPolicyRule](#pitpolicyrule)[] (Required): The Point in time (PIT) policy to manage snapshots taken during replication.
* **ReplicationConfigurationTemplateID**: string (ReadOnly): The Replication Configuration Template ID.
* **ReplicationServerInstanceType**: string: The instance type to be used for the replication server.
* **ReplicationServersSecurityGroupsIDs**: string[] (Required): The security group IDs that will be used by the replication server.
* **StagingAreaSubnetId**: string (Required): The subnet to be used by the replication staging area.
* **StagingAreaTags**: [ReplicationConfigurationTemplate_StagingAreaTags](#replicationconfigurationtemplatestagingareatags) (Required): A set of tags to be associated with all resources created in the replication staging area: EC2 replication server, EBS volumes, EBS snapshots, etc.
* **Tags**: [Tag](#tag)[]: A set of tags to be associated with the Replication Configuration Template resource.
* **UseDedicatedReplicationServer**: bool: Whether to use a dedicated Replication Server in the replication staging area.

## AWS.DRS/SourceNetworkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the Source Network.
* **OriginAccountID**: string (Required): The account ID containing the VPC to protect.
* **OriginRegion**: string (Required): The region containing the VPC to protect.
* **SourceNetworkID**: string (ReadOnly): The ID of the Source Network.
* **Tags**: [Tag](#tag)[]: A set of tags associated with the Source Network.
* **VpcID**: string (Required): The VPC ID to protect.

## Licensing
### Properties
* **OsByol**: bool: Whether to enable Bring your own license or not.

## PITPolicyRule
### Properties
* **Enabled**: bool: Whether this rule is enabled or not.
* **Interval**: int (Required): How often, in the chosen units, a snapshot should be taken.
* **RetentionDuration**: int (Required): The duration to retain a snapshot for, in the chosen units.
* **RuleID**: int: The ID of the rule.
* **Units**: string (Required): The units used to measure the interval and retentionDuration.

## ReplicationConfigurationTemplate_StagingAreaTags
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

