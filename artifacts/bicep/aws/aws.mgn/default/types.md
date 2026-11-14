# AWS.MGN @ default

## Resource AWS.MGN/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/ApplicationProperties](#awsmgnapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MGN/Connector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/ConnectorProperties](#awsmgnconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.MGN/Export@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/ExportProperties](#awsmgnexportproperties) (Identifier): properties of the resource

## Resource AWS.MGN/Import@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/ImportProperties](#awsmgnimportproperties) (Required, Identifier): properties of the resource

## Resource AWS.MGN/Job@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/JobProperties](#awsmgnjobproperties) (Identifier): properties of the resource

## Resource AWS.MGN/LaunchConfigurationTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/LaunchConfigurationTemplateProperties](#awsmgnlaunchconfigurationtemplateproperties) (Identifier): properties of the resource

## Resource AWS.MGN/NetworkMigrationDefinition@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/NetworkMigrationDefinitionProperties](#awsmgnnetworkmigrationdefinitionproperties) (Required, Identifier): properties of the resource

## Resource AWS.MGN/ReplicationConfigurationTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/ReplicationConfigurationTemplateProperties](#awsmgnreplicationconfigurationtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.MGN/SourceServer@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/SourceServerProperties](#awsmgnsourceserverproperties) (Identifier): properties of the resource

## Resource AWS.MGN/Wave@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MGN/WaveProperties](#awsmgnwaveproperties) (Required, Identifier): properties of the resource

## AWS.MGN/ApplicationProperties
### Properties
* **ApplicationID**: string (ReadOnly): The ID of the application.
* **Arn**: string (ReadOnly, Identifier): The ARN of the application.
* **CreationDateTime**: string (ReadOnly): The date and time the application was created.
* **Description**: string: The description of the application.
* **IsArchived**: bool (ReadOnly): Whether the application is archived.
* **LastModifiedDateTime**: string (ReadOnly): The date and time the application was last modified.
* **Name**: string (Required): The name of the application.
* **Tags**: [Tag](#tag)[]: A set of tags to associate with the application.

## AWS.MGN/ConnectorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the connector.
* **ConnectorID**: string (ReadOnly): The unique identifier of the connector.
* **Name**: string (Required): The name of the connector.
* **SsmCommandConfig**: [ConnectorSsmCommandConfig](#connectorssmcommandconfig)
* **SsmInstanceID**: string (Required): The SSM instance ID associated with this connector.
* **Tags**: [Tag](#tag)[]: Tags to assign to the connector.

## AWS.MGN/ExportProperties
### Properties
* **Arn**: string (Identifier): The ARN of the export task.
* **CreationDateTime**: string (ReadOnly): The datetime when the export task was created.
* **EndDateTime**: string (ReadOnly): The datetime when the export task ended.
* **ExportID**: string (ReadOnly): The unique identifier of the export task.
* **ProgressPercentage**: int (ReadOnly): The progress percentage of the export task.
* **S3Bucket**: string: The S3 bucket where the export data is stored.
* **S3BucketOwner**: string: The account ID of the S3 bucket owner.
* **S3Key**: string: The S3 key for the export data file.
* **Status**: string (ReadOnly): The status of the export task.
* **Summary**: [ExportTaskSummary](#exporttasksummary) (ReadOnly)
* **Tags**: [Tag](#tag)[]: Tags associated with the export task.

## AWS.MGN/ImportProperties
### Properties
* **Arn**: string (Identifier): The ARN of the import task.
* **CreationDateTime**: string (ReadOnly): The creation datetime of the import task.
* **EndDateTime**: string (ReadOnly): The end datetime of the import task.
* **ImportID**: string (ReadOnly): The ID of the import task.
* **ProgressPercentage**: int (ReadOnly): The progress percentage of the import task.
* **S3BucketSource**: [S3BucketSource](#s3bucketsource) (Required): The S3 bucket source of the import task.
* **Status**: string (ReadOnly): The status of the import task.
* **Summary**: [ImportTaskSummary](#importtasksummary) (ReadOnly): Import task summary.
* **Tags**: [Tag](#tag)[]: The tags associated with the import task.

## AWS.MGN/JobProperties
### Properties
* **Arn**: string (Identifier): The ARN of the job.
* **CreationDateTime**: string (ReadOnly): The date and time the job was created.
* **EndDateTime**: string (ReadOnly): The date and time the job ended.
* **InitiatedBy**: string (ReadOnly): The operation that initiated the job.
* **JobId**: string (ReadOnly): The unique identifier of the job.
* **ParticipatingServers**: [ParticipatingServer](#participatingserver)[] (ReadOnly): The list of servers participating in the job.
* **Status**: string (ReadOnly): The status of the job.
* **Tags**: [Tag](#tag)[]: Tags associated with the job.
* **Type**: string (ReadOnly): The type of the job.

## AWS.MGN/LaunchConfigurationTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): ARN of the Launch Configuration Template.
* **AssociatePublicIpAddress**: bool: Whether to associate a public IP address with the launched instance.
* **BootMode**: string: Launch configuration template boot mode.
* **CopyPrivateIp**: bool: Whether to copy the private IP of the source server.
* **CopyTags**: bool: Whether to copy the tags of the source server.
* **Ec2LaunchTemplateID**: string (ReadOnly): ID of the EC2 launch template backing the Launch Configuration Template.
* **EnableMapAutoTagging**: bool: Whether to enable map auto tagging.
* **EnableParametersEncryption**: bool: Whether to enable encryption of the AWS Systems Manager parameters used by post launch actions.
* **LargeVolumeConf**: [LaunchTemplateDiskConf](#launchtemplatediskconf)
* **LaunchConfigurationTemplateID**: string (ReadOnly): ID of the Launch Configuration Template.
* **LaunchDisposition**: string: Launch disposition.
* **Licensing**: [Licensing](#licensing)
* **MapAutoTaggingMpeID**: string: Launch configuration template map auto tagging MPE ID.
* **ParametersEncryptionKey**: string: ARN of the KMS key used to encrypt the AWS Systems Manager parameters used by post launch actions.
* **PostLaunchActions**: [PostLaunchActions](#postlaunchactions)
* **SmallVolumeConf**: [LaunchTemplateDiskConf](#launchtemplatediskconf)
* **SmallVolumeMaxSize**: int: Small volume maximum size, in GiB.
* **Tags**: [Tag](#tag)[]: A set of tags to be associated with the Launch Configuration Template.
* **TargetInstanceTypeRightSizingMethod**: string: Target instance type right-sizing method.

## AWS.MGN/NetworkMigrationDefinitionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the network migration definition.
* **CreatedAt**: string (ReadOnly): The timestamp when the network migration definition was created.
* **Description**: string: A description of the network migration definition.
* **Name**: string (Required): The name of the network migration definition.
* **NetworkMigrationDefinitionID**: string (ReadOnly): The unique identifier of the network migration definition.
* **ScopeTags**: [ScopeTagsMap](#scopetagsmap): Scope tags for the network migration definition.
* **SourceConfigurations**: [SourceConfiguration](#sourceconfiguration)[] (Required): A list of source configurations for the network migration.
* **Tags**: [Tag](#tag)[]: Tags to assign to the network migration definition.
* **TargetDeployment**: string: The target deployment configuration for the migrated network.
* **TargetNetwork**: [TargetNetwork](#targetnetwork) (Required): The target network configuration including topology and CIDR ranges.
* **TargetS3Configuration**: [TargetS3Configuration](#targets3configuration) (Required): The S3 configuration for storing the target network artifacts.
* **UpdatedAt**: string (ReadOnly): The timestamp when the network migration definition was last updated.

## AWS.MGN/ReplicationConfigurationTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Replication Configuration Template ARN.
* **AssociateDefaultSecurityGroup**: bool (Required): Whether to associate the default Application Migration Service Security Group with the Replication Configuration Template.
* **BandwidthThrottling**: int (Required): Configure bandwidth throttling for the outbound data transfer rate of the Source Server in Mbps.
* **CreatePublicIP**: bool (Required): Whether to create a Public IP for the Recovery Instance by default.
* **DataPlaneRouting**: string (Required): The data plane routing mechanism that will be used for replication.
* **DefaultLargeStagingDiskType**: string (Required): The Staging Disk EBS volume type to be used during replication.
* **EbsEncryption**: string (Required): The type of EBS encryption to be used during replication.
* **EbsEncryptionKeyArn**: string: The ARN of the EBS encryption key to be used during replication.
* **InternetProtocol**: string: Which internet protocol to use for replication of data.
* **ReplicationConfigurationTemplateID**: string (ReadOnly): The Replication Configuration Template ID.
* **ReplicationServerInstanceType**: string (Required): The instance type to be used for the replication server.
* **ReplicationServersSecurityGroupsIDs**: string[] (Required): The security group IDs that will be used by the replication server.
* **StagingAreaSubnetId**: string (Required): The subnet to be used by the replication staging area.
* **StagingAreaTags**: [StagingAreaTagsMap](#stagingareatagsmap) (Required)
* **StoreSnapshotOnLocalZone**: bool: Whether to store the Snapshot in the Local Zone of the replication staging area subnet.
* **Tags**: [Tag](#tag)[]: A set of tags to be associated with the Replication Configuration Template resource.
* **UseDedicatedReplicationServer**: bool (Required): Whether to use a dedicated Replication Server in the replication staging area.
* **UseFipsEndpoint**: bool: Whether to use a FIPS endpoint when initiating the agent connection to the Application Migration Service service.

## AWS.MGN/SourceServerProperties
### Properties
* **ApplicationID**: string (ReadOnly): The application ID associated with the source server.
* **Arn**: string (Identifier): The ARN of the source server.
* **ConnectorAction**: [SourceServerConnectorAction](#sourceserverconnectoraction) (ReadOnly)
* **DataReplicationInfo**: [DataReplicationInfo](#datareplicationinfo) (ReadOnly)
* **FqdnForActionFramework**: string (ReadOnly): The FQDN for the action framework.
* **IsArchived**: bool (ReadOnly): Whether the source server is archived.
* **LaunchedInstance**: [LaunchedInstance](#launchedinstance) (ReadOnly)
* **LifeCycle**: [LifeCycle](#lifecycle) (ReadOnly)
* **ReplicationType**: string (ReadOnly): The replication type of the source server.
* **SourceProperties**: [SourceProperties](#sourceproperties) (ReadOnly)
* **SourceServerID**: string (ReadOnly): The source server ID.
* **Tags**: [Tag](#tag)[] (ReadOnly): The tags associated with the source server.
* **UserProvidedID**: string (ReadOnly): The user-provided ID for the source server.
* **VcenterClientID**: string (ReadOnly): The vCenter client ID associated with the source server.

## AWS.MGN/WaveProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the wave.
* **CreationDateTime**: string (ReadOnly): The timestamp when the wave was created.
* **Description**: string: A description of the wave.
* **IsArchived**: bool (ReadOnly): Whether the wave is archived.
* **LastModifiedDateTime**: string (ReadOnly): The timestamp when the wave was last modified.
* **Name**: string (Required): The name of the wave.
* **Tags**: [Tag](#tag)[]: Tags to assign to the wave.
* **WaveAggregatedStatus**: [WaveAggregatedStatus](#waveaggregatedstatus) (ReadOnly): The aggregated migration status of the wave.
* **WaveID**: string (ReadOnly): The unique identifier of the wave.

## ConnectorSsmCommandConfig
### Properties
* **CloudWatchLogGroupName**: string: The CloudWatch Logs group name for SSM command output.
* **CloudWatchOutputEnabled**: bool (Required): Whether SSM command output is sent to CloudWatch Logs.
* **OutputS3BucketName**: string: The S3 bucket name for SSM command output.
* **S3OutputEnabled**: bool (Required): Whether SSM command output is stored in S3.

## CPU
### Properties
* **Cores**: int: The number of CPU cores.
* **ModelName**: string: The CPU model name.

## DataReplicationInfo
### Properties
* **DataReplicationInitiation**: [DataReplicationInitiation](#datareplicationinitiation)
* **DataReplicationState**: string: The data replication state.
* **LagDuration**: string: The data replication lag duration.
* **LastSnapshotDateTime**: string: The last snapshot date and time. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **ReplicatedDisks**: [DataReplicationInfoReplicatedDisk](#datareplicationinforeplicateddisk)[]: The replicated disks.

## DataReplicationInfoReplicatedDisk
### Properties
* **BackloggedStorageBytes**: int: The backlogged storage in bytes.
* **DeviceName**: string: The replicated disk device name.
* **ReplicatedStorageBytes**: int: The replicated storage in bytes.
* **RescannedStorageBytes**: int: The rescanned storage in bytes.
* **TotalStorageBytes**: int: The total storage in bytes.

## DataReplicationInitiation
### Properties
* **StartDateTime**: string: The data replication initiation start date and time. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **Steps**: [DataReplicationInitiationStep](#datareplicationinitiationstep)[]: The data replication initiation steps.

## DataReplicationInitiationStep
### Properties
* **Name**: string: The name of the initiation step.
* **Status**: string: The status of the initiation step.

## Disk
### Properties
* **Bytes**: int: The disk size in bytes.
* **DeviceName**: string: The disk device name.

## ExportTaskSummary
### Properties
* **ApplicationsCount**: int: The number of applications included in the export.
* **ServersCount**: int: The number of servers included in the export.
* **WavesCount**: int: The number of waves included in the export.

## IdentificationHints
### Properties
* **AwsInstanceID**: string: The AWS instance ID identification hint.
* **Fqdn**: string: The FQDN identification hint.
* **Hostname**: string: The hostname identification hint.
* **VmPath**: string: The VM path identification hint.
* **VmWareUuid**: string: The VMware UUID identification hint.

## ImportTaskSummary
### Properties
* **Applications**: [ImportTaskSummaryCategory](#importtasksummarycategory)
* **Servers**: [ImportTaskSummaryCategory](#importtasksummarycategory)
* **Waves**: [ImportTaskSummaryCategory](#importtasksummarycategory)

## ImportTaskSummaryCategory
### Properties
* **CreatedCount**: int: Number of resources created.
* **ModifiedCount**: int: Number of resources modified.

## LaunchedInstance
### Properties
* **Ec2InstanceID**: string: The EC2 instance ID of the launched instance.
* **FirstBoot**: string: The first boot status of the launched instance.
* **JobID**: string: The job ID that launched the instance.

## LaunchTemplateDiskConf
### Properties
* **Iops**: int: Launch template disk IOPS configuration.
* **Throughput**: int: Launch template disk throughput configuration, in MiB/s.
* **VolumeType**: string: Launch template disk volume type configuration.

## Licensing
### Properties
* **OsByol**: bool: Whether to configure BYOL OS licensing.

## LifeCycle
### Properties
* **AddedToServiceDateTime**: string: The date and time the source server was added to the service. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **ElapsedReplicationDuration**: string: The elapsed replication duration.
* **FirstByteDateTime**: string: The date and time the first byte was replicated. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **LastCutover**: [LifeCycleLastCutover](#lifecyclelastcutover)
* **LastSeenByServiceDateTime**: string: The date and time the source server was last seen by the service. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **LastTest**: [LifeCycleLastTest](#lifecyclelasttest)
* **State**: string: The lifecycle state of the source server.

## LifeCycleEvent
### Properties
* **ApiCallDateTime**: string: The API call date and time of the event. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **JobID**: string: The job ID associated with the event.

## LifeCycleEventNoJob
### Properties
* **ApiCallDateTime**: string: The API call date and time of the event. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern accepts both forms, deviating from the Smithy Z-only pattern which the live API does not honor.

## LifeCycleLastCutover
### Properties
* **Finalized**: [LifeCycleEventNoJob](#lifecycleeventnojob)
* **Initiated**: [LifeCycleEvent](#lifecycleevent)
* **Reverted**: [LifeCycleEventNoJob](#lifecycleeventnojob)

## LifeCycleLastTest
### Properties
* **Finalized**: [LifeCycleEventNoJob](#lifecycleeventnojob)
* **Initiated**: [LifeCycleEvent](#lifecycleevent)
* **Reverted**: [LifeCycleEventNoJob](#lifecycleeventnojob)

## NetworkInterface
### Properties
* **Ips**: string[]: The IP addresses of the network interface.
* **IsPrimary**: bool: Whether this is the primary network interface.
* **MacAddress**: string: The MAC address of the network interface.

## OS
### Properties
* **FullString**: string: The full OS string.

## ParticipatingServer
### Properties
* **LaunchedEc2InstanceID**: string: The EC2 instance ID of a launched participating server.
* **LaunchStatus**: string: The launch status of a participating server.
* **SourceServerID**: string (Required): The source server ID of a participating server.

## PostLaunchActions
### Properties
* **CloudWatchLogGroupName**: string: AWS Systems Manager Command's CloudWatch log group name.
* **Deployment**: string: Deployment type in which AWS Systems Manager Documents will be executed.
* **S3LogBucket**: string: AWS Systems Manager Command's logs S3 log bucket.
* **S3OutputKeyPrefix**: string: AWS Systems Manager Command's logs S3 output key prefix.
* **SsmDocuments**: [SsmDocument](#ssmdocument)[]: AWS Systems Manager Documents to execute, in order.

## S3BucketSource
### Properties
* **S3Bucket**: string (Required): S3 bucket name.
* **S3BucketOwner**: string: S3 bucket owner account ID.
* **S3Key**: string (Required): S3 object key.

## ScopeTagsMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SourceConfiguration
### Properties
* **SourceEnvironment**: string (Required): The source environment type.
* **SourceS3Configuration**: [SourceS3Configuration](#sources3configuration) (Required)

## SourceProperties
### Properties
* **Cpus**: [CPU](#cpu)[]: The source server CPUs.
* **Disks**: [Disk](#disk)[]: The source server disks.
* **IdentificationHints**: [IdentificationHints](#identificationhints)
* **LastUpdatedDateTime**: string: The date and time the source properties were last updated. The MGN API returns timestamps with a numeric UTC offset (e.g. +00:00) rather than the Z suffix, so the pattern here accepts both Z and offset forms, deviating from the Smithy Z-only pattern which the live API does not honor.
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[]: The source server network interfaces.
* **Os**: [OS](#os)
* **RamBytes**: int: The source server RAM in bytes.
* **RecommendedInstanceType**: string: The recommended EC2 instance type.

## SourceS3Configuration
### Properties
* **S3Bucket**: string (Required): The name of the S3 bucket containing source data.
* **S3BucketOwner**: string (Required): The AWS account ID of the S3 bucket owner.
* **S3Key**: string (Required): The S3 key (path) for the source data.

## SourceServerConnectorAction
### Properties
* **ConnectorArn**: string: The connector ARN.
* **CredentialsSecretArn**: string: The Secrets Manager secret ARN for the connector credentials.

## SsmDocument
### Properties
* **ActionName**: string (Required): User-friendly name for the AWS Systems Manager Document.
* **ExternalParameters**: [SsmDocumentExternalParameters](#ssmdocumentexternalparameters)
* **MustSucceedForCutover**: bool: Whether Cutover is blocked when the document has failed.
* **Parameters**: [SsmDocumentParameters](#ssmdocumentparameters)
* **SsmDocumentName**: string (Required): AWS Systems Manager Document name or full ARN.
* **TimeoutSeconds**: int: AWS Systems Manager Document timeout, in seconds.

## SsmDocumentExternalParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [SsmExternalParameter](#ssmexternalparameter)

## SsmDocumentParameters
### Properties
### Additional Properties
* **Additional Properties Type**: [SsmParameterStoreParameter](#ssmparameterstoreparameter)[]

## SsmExternalParameter
### Properties
* **DynamicPath**: string (Required): AWS Systems Manager Document external parameter dynamic path.

## SsmParameterStoreParameter
### Properties
* **ParameterName**: string (Required): AWS Systems Manager Parameter Store parameter name.
* **ParameterType**: string (Required): AWS Systems Manager Parameter Store parameter type.

## StagingAreaTagsMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

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
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

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
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TargetNetwork
### Properties
* **InboundCidr**: string: The CIDR block for inbound traffic in the target network.
* **InspectionCidr**: string: The CIDR block for inspection traffic in the target network.
* **OutboundCidr**: string: The CIDR block for outbound traffic in the target network.
* **Topology**: string (Required): The network topology type for the target environment.

## TargetS3Configuration
### Properties
* **S3Bucket**: string (Required): The name of the S3 bucket for target artifacts.
* **S3BucketOwner**: string (Required): The AWS account ID of the S3 bucket owner.

## WaveAggregatedStatus
### Properties
* **HealthStatus**: string: The health status of the wave.
* **ProgressStatus**: string: The progress status of the wave.
* **TotalApplications**: int: The total number of applications in the wave.

