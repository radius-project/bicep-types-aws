# AWS.Redshift @ default

## Resource AWS.Redshift/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/ClusterProperties](#awsredshiftclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/ClusterParameterGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/ClusterParameterGroupProperties](#awsredshiftclusterparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/ClusterSubnetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/ClusterSubnetGroupProperties](#awsredshiftclustersubnetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/EndpointAccess@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/EndpointAccessProperties](#awsredshiftendpointaccessproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/EndpointAuthorization@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/EndpointAuthorizationProperties](#awsredshiftendpointauthorizationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/EventSubscription@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/EventSubscriptionProperties](#awsredshifteventsubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/Integration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/IntegrationProperties](#awsredshiftintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/ScheduledAction@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/ScheduledActionProperties](#awsredshiftscheduledactionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/Snapshot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/SnapshotProperties](#awsredshiftsnapshotproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/SnapshotCopyGrant@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/SnapshotCopyGrantProperties](#awsredshiftsnapshotcopygrantproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/SnapshotSchedule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/SnapshotScheduleProperties](#awsredshiftsnapshotscheduleproperties) (Required, Identifier): properties of the resource

## Resource AWS.Redshift/UsageLimit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Redshift/UsageLimitProperties](#awsredshiftusagelimitproperties) (Required, Identifier): properties of the resource

## AWS.Redshift/ClusterParameterGroupProperties
### Properties
* **Description**: string (Required): A description of the parameter group.
* **ParameterGroupFamily**: string (Required): The Amazon Redshift engine version to which the cluster parameter group applies. The cluster engine version determines the set of parameters.
* **ParameterGroupName**: string (Identifier): The name of the cluster parameter group.
* **Parameters**: [Parameter](#parameter)[]: An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Redshift/ClusterProperties
### Properties
* **AllowVersionUpgrade**: bool: Major version upgrades can be applied during the maintenance window to the Amazon Redshift engine that is running on the cluster. Default value is True
* **AquaConfigurationStatus**: string: The value represents how the cluster is configured to use AQUA (Advanced Query Accelerator) after the cluster is restored. Possible values include the following.

enabled - Use AQUA if it is available for the current Region and Amazon Redshift node type.
disabled - Don't use AQUA.
auto - Amazon Redshift determines whether to use AQUA.

* **AutomatedSnapshotRetentionPeriod**: int: The number of days that automated snapshots are retained. If the value is 0, automated snapshots are disabled. Default value is 1
* **AvailabilityZone**: string: The EC2 Availability Zone (AZ) in which you want Amazon Redshift to provision the cluster. Default: A random, system-chosen Availability Zone in the region that is specified by the endpoint
* **AvailabilityZoneRelocation**: bool: The option to enable relocation for an Amazon Redshift cluster between Availability Zones after the cluster modification is complete.
* **AvailabilityZoneRelocationStatus**: string: The availability zone relocation status of the cluster
* **Classic**: bool (WriteOnly): A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to false , the resize type is elastic.
* **ClusterIdentifier**: string (Identifier): A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
* **ClusterNamespaceArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the cluster namespace.
* **ClusterParameterGroupName**: string: The name of the parameter group to be associated with this cluster.
* **ClusterSecurityGroups**: string[]: A list of security groups to be associated with this cluster.
* **ClusterSubnetGroupName**: string: The name of a cluster subnet group to be associated with this cluster.
* **ClusterType**: string (Required): The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required
* **ClusterVersion**: string: The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.
* **DBName**: string (Required): The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.
* **DeferMaintenance**: bool (WriteOnly): A boolean indicating whether to enable the deferred maintenance window.
* **DeferMaintenanceDuration**: int (WriteOnly): An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 60 days or less.
* **DeferMaintenanceEndTime**: string: A timestamp indicating end time for the deferred maintenance window. If you specify an end time, you can't specify a duration.
* **DeferMaintenanceIdentifier**: string (ReadOnly): A unique identifier for the deferred maintenance window.
* **DeferMaintenanceStartTime**: string: A timestamp indicating the start time for the deferred maintenance window.
* **DestinationRegion**: string: The destination AWS Region that you want to copy snapshots to. Constraints: Must be the name of a valid AWS Region. For more information, see Regions and Endpoints in the Amazon Web Services [https://docs.aws.amazon.com/general/latest/gr/rande.html#redshift_region] General Reference
* **ElasticIp**: string: The Elastic IP (EIP) address for the cluster.
* **Encrypted**: bool: If true, the data in the cluster is encrypted at rest.
* **Endpoint**: [Endpoint](#endpoint)
* **EnhancedVpcRouting**: bool: An option that specifies whether to create the cluster with enhanced VPC routing enabled. To create a cluster that uses enhanced VPC routing, the cluster must be in a VPC. For more information, see Enhanced VPC Routing in the Amazon Redshift Cluster Management Guide.

If this option is true , enhanced VPC routing is enabled.

Default: false
* **HsmClientCertificateIdentifier**: string: Specifies the name of the HSM client certificate the Amazon Redshift cluster uses to retrieve the data encryption keys stored in an HSM
* **HsmConfigurationIdentifier**: string: Specifies the name of the HSM configuration that contains the information the Amazon Redshift cluster can use to retrieve and store keys in an HSM.
* **IamRoles**: string[]: A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 50 IAM roles in a single request
* **KmsKeyId**: string: The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
* **LoggingProperties**: [LoggingProperties](#loggingproperties)
* **MaintenanceTrackName**: string: The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
* **ManageMasterPassword**: bool (WriteOnly): A boolean indicating if the redshift cluster's admin user credentials is managed by Redshift or not. You can't use MasterUserPassword if ManageMasterPassword is true. If ManageMasterPassword is false or not set, Amazon Redshift uses MasterUserPassword for the admin user account's password.
* **ManualSnapshotRetentionPeriod**: int: The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.
* **MasterPasswordSecretArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the cluster's admin user credentials secret.
* **MasterPasswordSecretKmsKeyId**: string: The ID of the Key Management Service (KMS) key used to encrypt and store the cluster's admin user credentials secret.
* **MasterUsername**: string (Required): The user name associated with the master user account for the cluster that is being created. The user name can't be PUBLIC and first character must be a letter.
* **MasterUserPassword**: string (WriteOnly): The password associated with the master user account for the cluster that is being created. You can't use MasterUserPassword if ManageMasterPassword is true. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.
* **MultiAZ**: bool: A boolean indicating if the redshift cluster is multi-az or not. If you don't provide this parameter or set the value to false, the redshift cluster will be single-az.
* **NamespaceResourcePolicy**: [Cluster_NamespaceResourcePolicy](#clusternamespaceresourcepolicy): The namespace resource policy document that will be attached to a Redshift cluster.
* **NodeType**: string (Required): The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.large | ra3.4xlarge | ra3.16xlarge | rg.large | rg.xlarge | rg.4xlarge | rg.12xlarge
* **NumberOfNodes**: int: The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node.
* **OwnerAccount**: string
* **Port**: int: The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings
* **PreferredMaintenanceWindow**: string: The weekly time range (in UTC) during which automated cluster maintenance can occur.
* **PubliclyAccessible**: bool: If true, the cluster can be accessed from a public network.
* **ResourceAction**: string: The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster, failover-primary-compute APIs
* **RevisionTarget**: string: The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.
* **RotateEncryptionKey**: bool: A boolean indicating if we want to rotate Encryption Keys.
* **SnapshotClusterIdentifier**: string: The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
* **SnapshotCopyGrantName**: string: The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
* **SnapshotCopyManual**: bool: Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
* **SnapshotCopyRetentionPeriod**: int: The number of days to retain automated snapshots in the destination region after they are copied from the source region. 

 Default is 7. 

 Constraints: Must be at least 1 and no more than 35.
* **SnapshotIdentifier**: string (WriteOnly): The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.
* **Tags**: [Tag](#tag)[]: The list of tags for the cluster parameter group.
* **VpcSecurityGroupIds**: string[]: A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

## AWS.Redshift/ClusterSubnetGroupProperties
### Properties
* **ClusterSubnetGroupName**: string (ReadOnly, Identifier): This name must be unique for all subnet groups that are created by your AWS account. If costumer do not provide it, cloudformation will generate it. Must not be "Default". 
* **Description**: string (Required): The description of the parameter group.
* **SubnetIds**: string[] (Required): The list of VPC subnet IDs
* **Tags**: [Tag](#tag)[]: The list of tags for the cluster parameter group.

## AWS.Redshift/EndpointAccessProperties
### Properties
* **Address**: string (ReadOnly): The DNS address of the endpoint.
* **ClusterIdentifier**: string (Required): A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
* **EndpointCreateTime**: string (ReadOnly): The time (UTC) that the endpoint was created.
* **EndpointName**: string (Required, Identifier): The name of the endpoint.
* **EndpointStatus**: string (ReadOnly): The status of the endpoint.
* **Port**: int (ReadOnly): The port number on which the cluster accepts incoming connections.
* **ResourceOwner**: string: The AWS account ID of the owner of the cluster.
* **SubnetGroupName**: string (Required): The subnet group name where Amazon Redshift chooses to deploy the endpoint.
* **VpcEndpoint**: [EndpointAccess_VpcEndpoint](#endpointaccessvpcendpoint) (ReadOnly): The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
* **VpcSecurityGroupIds**: string[] (Required): A list of vpc security group ids to apply to the created endpoint access.
* **VpcSecurityGroups**: [VpcSecurityGroup](#vpcsecuritygroup)[] (ReadOnly): A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.

## AWS.Redshift/EndpointAuthorizationProperties
### Properties
* **Account**: string (Required, Identifier): The target AWS account ID to grant or revoke access for.
* **AllowedAllVPCs**: bool (ReadOnly): Indicates whether all VPCs in the grantee account are allowed access to the cluster.
* **AllowedVPCs**: string[] (ReadOnly): The VPCs allowed access to the cluster.
* **AuthorizeTime**: string (ReadOnly): The time (UTC) when the authorization was created.
* **ClusterIdentifier**: string (Required, Identifier): The cluster identifier.
* **ClusterStatus**: string (ReadOnly): The status of the cluster.
* **EndpointCount**: int (ReadOnly): The number of Redshift-managed VPC endpoints created for the authorization.
* **Force**: bool (WriteOnly):  Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
* **Grantee**: string (ReadOnly): The AWS account ID of the grantee of the cluster.
* **Grantor**: string (ReadOnly): The AWS account ID of the cluster owner.
* **Status**: string (ReadOnly): The status of the authorization action.
* **VpcIds**: string[]: The virtual private cloud (VPC) identifiers to grant or revoke access to.

## AWS.Redshift/EventSubscriptionProperties
### Properties
* **CustomerAwsId**: string (ReadOnly): The AWS account associated with the Amazon Redshift event notification subscription.
* **CustSubscriptionId**: string (ReadOnly): The name of the Amazon Redshift event notification subscription.
* **Enabled**: bool: A boolean value; set to true to activate the subscription, and set to false to create the subscription but not activate it.
* **EventCategories**: string[]: Specifies the Amazon Redshift event categories to be published by the event notification subscription.
* **EventCategoriesList**: string[] (ReadOnly): The list of Amazon Redshift event categories specified in the event notification subscription.
* **Severity**: string: Specifies the Amazon Redshift event severity to be published by the event notification subscription.
* **SnsTopicArn**: string: The Amazon Resource Name (ARN) of the Amazon SNS topic used to transmit the event notifications.
* **SourceIds**: string[]: A list of one or more identifiers of Amazon Redshift source objects.
* **SourceIdsList**: string[] (ReadOnly): A list of the sources that publish events to the Amazon Redshift event notification subscription.
* **SourceType**: string: The type of source that will be generating the events.
* **Status**: string (ReadOnly): The status of the Amazon Redshift event notification subscription.
* **SubscriptionCreationTime**: string (ReadOnly): The date and time the Amazon Redshift event notification subscription was created.
* **SubscriptionName**: string (Required, Identifier): The name of the Amazon Redshift event notification subscription
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Redshift/IntegrationProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap)
* **CreateTime**: string (ReadOnly): The time (UTC) when the integration was created.
* **IntegrationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the integration.
* **IntegrationName**: string: The name of the integration.
* **KMSKeyId**: string: An KMS key identifier for the key to use to encrypt the integration. If you don't specify an encryption key, the default AWS owned KMS key is used.
* **SourceArn**: string (Required): The Amazon Resource Name (ARN) of the database to use as the source for replication
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetArn**: string (Required): The Amazon Resource Name (ARN) of the Redshift data warehouse to use as the target for replication

## AWS.Redshift/ScheduledActionProperties
### Properties
* **Enable**: bool: If true, the schedule is enabled. If false, the scheduled action does not trigger.
* **EndTime**: string: The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
* **IamRole**: string: The IAM role to assume to run the target action.
* **NextInvocations**: string[] (ReadOnly): List of times when the scheduled action will run.
* **Schedule**: string: The schedule in `at( )` or `cron( )` format.
* **ScheduledActionDescription**: string: The description of the scheduled action.
* **ScheduledActionName**: string (Required, Identifier): The name of the scheduled action. The name must be unique within an account.
* **StartTime**: string: The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.
* **State**: string (ReadOnly): The state of the scheduled action.
* **TargetAction**: [ScheduledActionType](#scheduledactiontype): A JSON format string of the Amazon Redshift API operation with input parameters.

## AWS.Redshift/SnapshotCopyGrantProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the snapshot copy grant.
* **KmsKeyId**: string (WriteOnly): The unique identifier of the encrypted symmetric key to which to grant Amazon Redshift permission. If no key is specified, the default key is used. Marked writeOnly because Create accepts aliases/key-ids but Describe returns the resolved key ARN, which would fail drift detection.
* **SnapshotCopyGrantName**: string (Required): The name of the snapshot copy grant. This name must be unique in the region for the AWS account.
* **Tags**: [Tag](#tag)[]: A list of tag instances.

## AWS.Redshift/SnapshotProperties
### Properties
* **AvailabilityZone**: string (ReadOnly): The Availability Zone in which the cluster was created.
* **ClusterCreateTime**: string (ReadOnly): The time (UTC) when the cluster was originally created.
* **ClusterIdentifier**: string (Required): The cluster identifier for which you want a snapshot.
* **ClusterVersion**: string (ReadOnly): The version ID of the Amazon Redshift engine that is running on the cluster.
* **DBName**: string (ReadOnly): The name of the database that was created when the cluster was created.
* **Encrypted**: bool (ReadOnly): If true, the data in the snapshot is encrypted at rest.
* **EncryptedWithHSM**: bool (ReadOnly): A boolean that indicates whether the snapshot data is encrypted using the HSM keys of the source cluster.
* **EngineFullVersion**: string (ReadOnly): The engine full version of the cluster at the time the snapshot was taken.
* **EnhancedVpcRouting**: bool (ReadOnly): An option that specifies whether to create the cluster with enhanced VPC routing enabled.
* **KmsKeyId**: string (ReadOnly): The Key Management Service (KMS) key ID of the encryption key that was used to encrypt data in the cluster from which the snapshot was taken.
* **MaintenanceTrackName**: string (ReadOnly): The name of the maintenance track for the snapshot.
* **ManualSnapshotRetentionPeriod**: int: The number of days that a manual snapshot is retained. If the value is -1, the manual snapshot is retained indefinitely. The value must be either -1 or an integer between 1 and 3653.
* **MasterUsername**: string (ReadOnly): The admin user name for the cluster.
* **NodeType**: string (ReadOnly): The node type that the cluster is provisioned with.
* **NumberOfNodes**: int (ReadOnly): The number of nodes in the cluster.
* **OwnerAccount**: string (ReadOnly): The Amazon Web Services account that owns the snapshot.
* **Port**: int (ReadOnly): The port that the cluster is listening on.
* **SnapshotArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the snapshot.
* **SnapshotCreateTime**: string (ReadOnly): The time (in UTC format) when Amazon Redshift began the snapshot.
* **SnapshotIdentifier**: string (Required): A unique identifier for the snapshot that you are requesting. This identifier must be unique for all snapshots within the Amazon Web Services account.
* **SnapshotType**: string (ReadOnly): The snapshot type. Snapshots created using CreateClusterSnapshot and CopyClusterSnapshot are of type manual.
* **Status**: string (ReadOnly): The snapshot status. The value of the status depends on the API operation used: CreateClusterSnapshot and CopyClusterSnapshot returns status as creating. DescribeClusterSnapshots returns status as creating, available, final snapshot, or failed. DeleteClusterSnapshot returns status as deleted.
* **Tags**: [Tag](#tag)[]: A list of tag instances.
* **VpcId**: string (ReadOnly): The VPC identifier of the cluster if the snapshot is from a cluster in a VPC.

## AWS.Redshift/SnapshotScheduleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the snapshot schedule.
* **AssociatedClusterCount**: int (ReadOnly): The number of clusters associated with the schedule.
* **ScheduleDefinitions**: string[] (Required): The definition of the snapshot schedule. The definition is made up of schedule expressions, for example "cron(30 12 *)" or "rate(12 hours)".
* **ScheduleDescription**: string: The description of the snapshot schedule.
* **ScheduleIdentifier**: string (Required): A unique identifier for the snapshot schedule. Only alphanumeric characters are allowed.
* **Tags**: [Tag](#tag)[]: An optional set of tags for the snapshot schedule.

## AWS.Redshift/UsageLimitProperties
### Properties
* **Amount**: int (Required): The limit amount. If time-based, this amount is in minutes. If data-based, this amount is in terabytes (TB). The value must be a positive number.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the usage limit.
* **BreachAction**: string: The action that Amazon Redshift takes when the limit is reached. The default is log.
* **ClusterIdentifier**: string (Required): The identifier of the cluster that you want to limit usage.
* **FeatureType**: string (Required): The Amazon Redshift feature that you want to limit.
* **LimitType**: string (Required): The type of limit. Depending on the feature type, this can be based on a time duration or data size. If FeatureType is spectrum, then LimitType must be data-scanned. If FeatureType is concurrency-scaling, then LimitType must be time. If FeatureType is cross-region-datasharing, then LimitType must be data-scanned.
* **Period**: string: The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
* **Tags**: [Tag](#tag)[]: A list of tag instances.
* **UsageLimitId**: string (ReadOnly): The identifier of the usage limit.

## Cluster_NamespaceResourcePolicy
### Properties

## EncryptionContextMap
### Properties

## Endpoint
### Properties
* **Address**: string (ReadOnly)
* **Port**: string (ReadOnly)

## EndpointAccess_VpcEndpoint
### Properties
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): One or more network interfaces of the endpoint. Also known as an interface endpoint.
* **VpcEndpointId**: string (ReadOnly): The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
* **VpcId**: string (ReadOnly): The VPC identifier that the endpoint is associated.

## LoggingProperties
### Properties
* **BucketName**: string
* **LogDestinationType**: string
* **LogExports**: string[]
* **S3KeyPrefix**: string

## NetworkInterface
### Properties
* **AvailabilityZone**: string: The Availability Zone.
* **NetworkInterfaceId**: string: The network interface identifier.
* **PrivateIpAddress**: string: The IPv4 address of the network interface within the subnet.
* **SubnetId**: string: The subnet identifier.

## Parameter
### Properties
* **ParameterName**: string (Required): The name of the parameter.
* **ParameterValue**: string (Required): The value of the parameter. If `ParameterName` is `wlm_json_configuration`, then the maximum size of `ParameterValue` is 8000 characters.

## PauseClusterMessage
### Properties
* **ClusterIdentifier**: string (Required)

## ResizeClusterMessage
### Properties
* **Classic**: bool
* **ClusterIdentifier**: string (Required)
* **ClusterType**: string
* **NodeType**: string
* **NumberOfNodes**: int

## ResumeClusterMessage
### Properties
* **ClusterIdentifier**: string (Required)

## ScheduledActionType
### Properties
* **PauseCluster**: [PauseClusterMessage](#pauseclustermessage)
* **ResizeCluster**: [ResizeClusterMessage](#resizeclustermessage)
* **ResumeCluster**: [ResumeClusterMessage](#resumeclustermessage)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key, or name, for the resource tag.
* **Value**: string (Required): The value for the resource tag.

## Tag
### Properties
* **Key**: string (Required): The key, or name, for the resource tag.
* **Value**: string (Required): The value for the resource tag.

## Tag
### Properties
* **Key**: string (Required): The key, or name, for the resource tag.
* **Value**: string (Required): The value for the resource tag.

## Tag
### Properties
* **Key**: string (Required): The key, or name, for the resource tag.
* **Value**: string (Required): The value for the resource tag.

## VpcSecurityGroup
### Properties
* **Status**: string: The status of the VPC security group.
* **VpcSecurityGroupId**: string: The identifier of the VPC security group.

