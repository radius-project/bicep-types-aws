# AWS.DRS @ default

## Resource AWS.DRS/Job@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/JobProperties](#awsdrsjobproperties) (Identifier): properties of the resource

## Resource AWS.DRS/LaunchConfigurationTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/LaunchConfigurationTemplateProperties](#awsdrslaunchconfigurationtemplateproperties) (Identifier): properties of the resource

## Resource AWS.DRS/RecoveryInstance@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/RecoveryInstanceProperties](#awsdrsrecoveryinstanceproperties) (Identifier): properties of the resource

## Resource AWS.DRS/RecoveryPlan@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/RecoveryPlanProperties](#awsdrsrecoveryplanproperties) (Required, Identifier): properties of the resource

## Resource AWS.DRS/RecoveryPlanExecution@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/RecoveryPlanExecutionProperties](#awsdrsrecoveryplanexecutionproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.DRS/SourceServer@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DRS/SourceServerProperties](#awsdrssourceserverproperties) (Identifier): properties of the resource

## AWS.DRS/JobProperties
### Properties
* **Arn**: string (Identifier): The ARN of a Job.
* **CreationDateTime**: string (ReadOnly): The date and time of when the Job was created. The service returns UTC offsets (e.g. 2026-08-24T22:27:26.134456+00:00), which the Smithy model's own ISO8601DatetimeString pattern (trailing 'Z' required) rejects, so that pattern is deliberately not enforced here.
* **EndDateTime**: string (ReadOnly): The date and time of when the Job ended. The service returns UTC offsets (e.g. 2026-08-24T22:27:26.134456+00:00), which the Smithy model's own ISO8601DatetimeString pattern (trailing 'Z' required) rejects, so that pattern is deliberately not enforced here.
* **InitiatedBy**: string (ReadOnly): A string representing who initiated the Job.
* **JobID**: string (ReadOnly): The ID of the Job.
* **ParticipatingResources**: [ParticipatingResource](#participatingresource)[] (ReadOnly): A list of resources that the Job is acting upon.
* **ParticipatingServers**: [ParticipatingServer](#participatingserver)[] (ReadOnly): A list of servers that the Job is acting upon.
* **Status**: string (ReadOnly): The status of the Job.
* **Tags**: [Tag](#tag)[] (ReadOnly): A list of tags associated with the Job.
* **Type**: string (ReadOnly): The type of the Job.

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

## AWS.DRS/RecoveryInstanceProperties
### Properties
* **Arn**: string (Identifier): The ARN of the Recovery Instance.
* **EC2InstanceID**: string (ReadOnly): The EC2 instance ID of the Recovery Instance.
* **EC2InstanceState**: string (ReadOnly): The state of the EC2 instance for this Recovery Instance.
* **IsDrill**: bool (ReadOnly): Whether this Recovery Instance was created for a drill or for an actual Recovery event.
* **JobID**: string (ReadOnly): The ID of the Job that created the Recovery Instance.
* **OriginAvailabilityZone**: string (ReadOnly): AWS availability zone associated with the recovery instance.
* **OriginEnvironment**: string (ReadOnly): Environment (On Premises / AWS) of the instance that the recovery instance originated from.
* **RecoveryInstanceID**: string (ReadOnly): The ID of the Recovery Instance.
* **SourceServerID**: string (ReadOnly): The Source Server ID that this Recovery Instance is associated with.
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of tags that are associated with the Recovery Instance.

## AWS.DRS/RecoveryPlanExecutionProperties
### Properties
* **CompletedAt**: string (ReadOnly): The time at which the Recovery Plan execution reached a terminal status, as an ISO 8601 timestamp. Absent while the execution is still running. The service returns an explicit UTC offset (2026-09-06T09:36:19.037172+00:00, exactly 32 characters) which the model's own ISO8601DatetimeString pattern rejects, so only the PATTERN is widened here; the length bound stays at the model's 32.
* **Mode**: string (Required): Whether the Recovery Plan ran as a drill or as an actual recovery.
* **RecoveryPlanArn**: string (Required): The ARN of the Recovery Plan that this execution ran.
* **RecoveryPlanExecutionArn**: string (Identifier): The ARN of the Recovery Plan execution.
* **StartedAt**: string (ReadOnly): The time at which the Recovery Plan execution started, as an ISO 8601 timestamp. The service returns an explicit UTC offset (2026-09-06T09:36:19.037172+00:00, exactly 32 characters) which the model's own ISO8601DatetimeString pattern rejects, so only the PATTERN is widened here; the length bound stays at the model's 32.
* **Status**: string (ReadOnly): The status of the Recovery Plan execution. Not constrained to a fixed set of values: the service documents an execution status (TIMED_OUT) that the published service model omits, so an enum here would reject a valid response.
* **Tags**: [Tag](#tag)[]: The tags associated with the Recovery Plan execution.

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

## AWS.DRS/SourceServerProperties
### Properties
* **AgentVersion**: string (ReadOnly): The version of the AWS Replication Agent installed on the Source Server.
* **Arn**: string (Identifier): The ARN of the Source Server.
* **DataReplicationInfo**: [DataReplicationInfo](#datareplicationinfo) (ReadOnly)
* **ReplicationDirection**: string (ReadOnly): The replication direction of the Source Server.
* **SourceProperties**: [SourceProperties](#sourceproperties) (ReadOnly)
* **SourceServerID**: string (ReadOnly): The ID of the Source Server.
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of tags that are associated with the Source Server.

## CPU
### Properties
* **Cores**: int: The number of CPU cores.
* **ModelName**: string: The model name of the CPU.

## DataReplicationInfo
### Properties
* **DataReplicationState**: string: The state of the data replication.

## Disk
### Properties
* **Bytes**: int: The amount of storage on the disk in bytes.
* **DeviceName**: string: The disk or device name.

## IdentificationHints
### Properties
* **AwsInstanceID**: string: The AWS Instance ID identification hint.
* **Fqdn**: string: The Fully Qualified Domain Name identification hint.
* **Hostname**: string: The hostname identification hint.
* **VmWareUuid**: string: The VMware vCenter UUID identification hint. Only populated for VMware-origin Source Servers.

## Job_Parameters
### Properties

## LaunchAction
### Properties
* **ActionCode**: string: Launch action code.
* **ActionId**: string: Launch action Id.
* **ActionVersion**: string: Launch action version.
* **Active**: bool: Whether the launch action is active.
* **Category**: string: Launch action category.
* **Description**: string: Launch action description.
* **Name**: string: Launch action name.
* **Optional**: bool: Whether the launch action is optional.
* **Order**: int: Launch action order.
* **Parameters**: [Job_Parameters](#jobparameters): Launch action parameters.
* **Type**: string: Launch action type.

## LaunchActionRun
### Properties
* **Action**: [LaunchAction](#launchaction)
* **RunId**: string: Launch action run id.
* **Status**: string: Run status of the launch action.

## LaunchActionsStatus
### Properties
* **Runs**: [LaunchActionRun](#launchactionrun)[]: List of post launch action status.
* **SsmAgentDiscoveryDatetime**: string: Time where the AWS Systems Manager was detected as running on the launched instance. The service returns UTC offsets (e.g. 2026-08-24T22:27:26.134456+00:00), which the Smithy model's own ISO8601DatetimeString pattern (trailing 'Z' required) rejects, so that pattern is deliberately not enforced here.

## Licensing
### Properties
* **OsByol**: bool: Whether to enable Bring your own license or not.

## NetworkInterface
### Properties
* **Ips**: string[]: The IP addresses of the network interface.
* **IsPrimary**: bool: Whether this is the primary network interface.
* **MacAddress**: string: The MAC address of the network interface.

## OS
### Properties
* **FullString**: string: The long name of the Operating System.

## ParticipatingResource
### Properties
* **LaunchStatus**: string
* **ParticipatingResourceID**: [ParticipatingResourceID](#participatingresourceid)

## ParticipatingResourceID
### Properties
* **SourceNetworkID**: string (Required): Source Network ID.

## ParticipatingServer
### Properties
* **LaunchActionsStatus**: [LaunchActionsStatus](#launchactionsstatus)
* **LaunchStatus**: string
* **RecoveryInstanceID**: string: The Recovery Instance ID of a participating server.
* **SourceServerID**: string: The Source Server ID of a participating server.

## PITPolicyRule
### Properties
* **Enabled**: bool: Whether this rule is enabled or not.
* **Interval**: int (Required): How often, in the chosen units, a snapshot should be taken.
* **RetentionDuration**: int (Required): The duration to retain a snapshot for, in the chosen units.
* **RuleID**: int: The ID of the rule.
* **Units**: string (Required): The units used to measure the interval and retentionDuration.

## ReplicationConfigurationTemplate_StagingAreaTags
### Properties

## SourceProperties
### Properties
* **Cpus**: [CPU](#cpu)[]: The CPUs of the Source Server.
* **Disks**: [Disk](#disk)[]: The disks of the Source Server.
* **IdentificationHints**: [IdentificationHints](#identificationhints)
* **LastUpdatedDateTime**: string: The date and time the Source Server properties were last updated.
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[]: The network interfaces of the Source Server.
* **Os**: [OS](#os)
* **RamBytes**: int: The amount of RAM in bytes.
* **RecommendedInstanceType**: string: The recommended EC2 instance type that will be used when launching a recovery instance.
* **SupportsNitroInstances**: bool: Whether the Source Server supports Nitro instances.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

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
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

