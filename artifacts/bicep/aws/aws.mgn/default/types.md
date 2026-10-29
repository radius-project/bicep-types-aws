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

## LaunchTemplateDiskConf
### Properties
* **Iops**: int: Launch template disk IOPS configuration.
* **Throughput**: int: Launch template disk throughput configuration, in MiB/s.
* **VolumeType**: string: Launch template disk volume type configuration.

## Licensing
### Properties
* **OsByol**: bool: Whether to configure BYOL OS licensing.

## PostLaunchActions
### Properties
* **CloudWatchLogGroupName**: string: AWS Systems Manager Command's CloudWatch log group name.
* **Deployment**: string: Deployment type in which AWS Systems Manager Documents will be executed.
* **S3LogBucket**: string: AWS Systems Manager Command's logs S3 log bucket.
* **S3OutputKeyPrefix**: string: AWS Systems Manager Command's logs S3 output key prefix.
* **SsmDocuments**: [SsmDocument](#ssmdocument)[]: AWS Systems Manager Documents to execute, in order.

## ScopeTagsMap
### Properties

## SourceConfiguration
### Properties
* **SourceEnvironment**: string (Required): The source environment type.
* **SourceS3Configuration**: [SourceS3Configuration](#sources3configuration) (Required)

## SourceS3Configuration
### Properties
* **S3Bucket**: string (Required): The name of the S3 bucket containing source data.
* **S3BucketOwner**: string (Required): The AWS account ID of the S3 bucket owner.
* **S3Key**: string (Required): The S3 key (path) for the source data.

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

## SsmDocumentParameters
### Properties

## StagingAreaTagsMap
### Properties

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
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

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

