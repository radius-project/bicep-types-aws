# AWS.Redshift @ default

## Resource AWS.Redshift/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Redshift/ClusterProperties](#awsredshiftclusterproperties) (Required): properties of the resource

## Resource AWS.Redshift/EndpointAccess@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Redshift/EndpointAccessProperties](#awsredshiftendpointaccessproperties) (Required): properties of the resource

## Resource AWS.Redshift/EndpointAuthorization@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Redshift/EndpointAuthorizationProperties](#awsredshiftendpointauthorizationproperties) (Required): properties of the resource

## Resource AWS.Redshift/EventSubscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Redshift/EventSubscriptionProperties](#awsredshifteventsubscriptionproperties) (Required): properties of the resource

## Resource AWS.Redshift/ScheduledAction@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Redshift/ScheduledActionProperties](#awsredshiftscheduledactionproperties) (Required): properties of the resource

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
* **Classic**: bool: A boolean value indicating whether the resize operation is using the classic resize process. If you don't provide this parameter or set the value to false , the resize type is elastic.
* **ClusterIdentifier**: string: A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
* **ClusterParameterGroupName**: string: The name of the parameter group to be associated with this cluster.
* **ClusterSecurityGroups**: string[]: A list of security groups to be associated with this cluster.
* **ClusterSubnetGroupName**: string: The name of a cluster subnet group to be associated with this cluster.
* **ClusterType**: string (Required): The type of the cluster. When cluster type is specified as single-node, the NumberOfNodes parameter is not required and if multi-node, the NumberOfNodes parameter is required
* **ClusterVersion**: string: The version of the Amazon Redshift engine software that you want to deploy on the cluster.The version selected runs on all the nodes in the cluster.
* **DBName**: string (Required): The name of the first database to be created when the cluster is created. To create additional databases after the cluster is created, connect to the cluster with a SQL client and use SQL commands to create a database.
* **DeferMaintenance**: bool: A boolean indicating whether to enable the deferred maintenance window.
* **DeferMaintenanceDuration**: int: An integer indicating the duration of the maintenance window in days. If you specify a duration, you can't specify an end time. The duration must be 45 days or less.
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
* **IamRoles**: string[]: A list of AWS Identity and Access Management (IAM) roles that can be used by the cluster to access other AWS services. You must supply the IAM roles in their Amazon Resource Name (ARN) format. You can supply up to 10 IAM roles in a single request
* **Id**: string (ReadOnly)
* **KmsKeyId**: string: The AWS Key Management Service (KMS) key ID of the encryption key that you want to use to encrypt data in the cluster.
* **LoggingProperties**: [LoggingProperties](#loggingproperties)
* **MaintenanceTrackName**: string: The name for the maintenance track that you want to assign for the cluster. This name change is asynchronous. The new track name stays in the PendingModifiedValues for the cluster until the next maintenance window. When the maintenance track changes, the cluster is switched to the latest cluster release available for the maintenance track. At this point, the maintenance track name is applied.
* **ManualSnapshotRetentionPeriod**: int: The number of days to retain newly copied snapshots in the destination AWS Region after they are copied from the source AWS Region. If the value is -1, the manual snapshot is retained indefinitely.

The value must be either -1 or an integer between 1 and 3,653.
* **MasterUsername**: string (Required): The user name associated with the master user account for the cluster that is being created. The user name can't be PUBLIC and first character must be a letter.
* **MasterUserPassword**: string (Required, WriteOnly): The password associated with the master user account for the cluster that is being created. Password must be between 8 and 64 characters in length, should have at least one uppercase letter.Must contain at least one lowercase letter.Must contain one number.Can be any printable ASCII character.
* **NodeType**: string (Required): The node type to be provisioned for the cluster.Valid Values: ds2.xlarge | ds2.8xlarge | dc1.large | dc1.8xlarge | dc2.large | dc2.8xlarge | ra3.4xlarge | ra3.16xlarge
* **NumberOfNodes**: int: The number of compute nodes in the cluster. This parameter is required when the ClusterType parameter is specified as multi-node.
* **OwnerAccount**: string
* **Port**: int: The port number on which the cluster accepts incoming connections. The cluster is accessible only via the JDBC and ODBC connection strings
* **PreferredMaintenanceWindow**: string: The weekly time range (in UTC) during which automated cluster maintenance can occur.
* **PubliclyAccessible**: bool: If true, the cluster can be accessed from a public network.
* **ResourceAction**: string: The Redshift operation to be performed. Resource Action supports pause-cluster, resume-cluster APIs
* **RevisionTarget**: string: The identifier of the database revision. You can retrieve this value from the response to the DescribeClusterDbRevisions request.
* **RotateEncryptionKey**: bool: A boolean indicating if we want to rotate Encryption Keys.
* **SnapshotClusterIdentifier**: string: The name of the cluster the source snapshot was created from. This parameter is required if your IAM user has a policy containing a snapshot resource element that specifies anything other than * for the cluster name.
* **SnapshotCopyGrantName**: string: The name of the snapshot copy grant to use when snapshots of an AWS KMS-encrypted cluster are copied to the destination region.
* **SnapshotCopyManual**: bool: Indicates whether to apply the snapshot retention period to newly copied manual snapshots instead of automated snapshots.
* **SnapshotCopyRetentionPeriod**: int: The number of days to retain automated snapshots in the destination region after they are copied from the source region. 

 Default is 7. 

 Constraints: Must be at least 1 and no more than 35.
* **SnapshotIdentifier**: string: The name of the snapshot from which to create the new cluster. This parameter isn't case sensitive.
* **Tags**: [Tag](#tag)[]: The list of tags for the cluster parameter group.
* **VpcSecurityGroupIds**: string[]: A list of Virtual Private Cloud (VPC) security groups to be associated with the cluster.

## Endpoint
### Properties
* **Address**: string (ReadOnly)
* **Port**: string (ReadOnly)

## LoggingProperties
### Properties
* **BucketName**: string (Required)
* **S3KeyPrefix**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Redshift/EndpointAccessProperties
### Properties
* **Address**: string (ReadOnly): The DNS address of the endpoint.
* **ClusterIdentifier**: string (Required): A unique identifier for the cluster. You use this identifier to refer to the cluster for any subsequent cluster operations such as deleting or modifying. All alphabetical characters must be lower case, no hypens at the end, no two consecutive hyphens. Cluster name should be unique for all clusters within an AWS account
* **EndpointCreateTime**: string (ReadOnly): The time (UTC) that the endpoint was created.
* **EndpointName**: string (Required): The name of the endpoint.
* **EndpointStatus**: string (ReadOnly): The status of the endpoint.
* **Port**: int (ReadOnly): The port number on which the cluster accepts incoming connections.
* **ResourceOwner**: string: The AWS account ID of the owner of the cluster.
* **SubnetGroupName**: string (Required): The subnet group name where Amazon Redshift chooses to deploy the endpoint.
* **VpcEndpoint**: [EndpointAccess_VpcEndpoint](#endpointaccessvpcendpoint) (ReadOnly): The connection endpoint for connecting to an Amazon Redshift cluster through the proxy.
* **VpcSecurityGroupIds**: string[] (Required): A list of vpc security group ids to apply to the created endpoint access.
* **VpcSecurityGroups**: [VpcSecurityGroup](#vpcsecuritygroup)[] (ReadOnly): A list of Virtual Private Cloud (VPC) security groups to be associated with the endpoint.

## EndpointAccess_VpcEndpoint
### Properties
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[]: One or more network interfaces of the endpoint. Also known as an interface endpoint.
* **VpcEndpointId**: string: The connection endpoint ID for connecting an Amazon Redshift cluster through the proxy.
* **VpcId**: string: The VPC identifier that the endpoint is associated.

## NetworkInterface
### Properties
* **AvailabilityZone**: string: The Availability Zone.
* **NetworkInterfaceId**: string: The network interface identifier.
* **PrivateIpAddress**: string: The IPv4 address of the network interface within the subnet.
* **SubnetId**: string: The subnet identifier.

## VpcSecurityGroup
### Properties
* **Status**: string: The status of the VPC security group.
* **VpcSecurityGroupId**: string: The identifier of the VPC security group.

## AWS.Redshift/EndpointAuthorizationProperties
### Properties
* **Account**: [AwsAccount](#awsaccount) (Required): The target AWS account ID to grant or revoke access for.
* **AllowedAllVPCs**: bool (ReadOnly): Indicates whether all VPCs in the grantee account are allowed access to the cluster.
* **AllowedVPCs**: [VpcId](#vpcid)[] (ReadOnly): The VPCs allowed access to the cluster.
* **AuthorizeTime**: string (ReadOnly): The time (UTC) when the authorization was created.
* **ClusterIdentifier**: string (Required): The cluster identifier.
* **ClusterStatus**: string (ReadOnly): The status of the cluster.
* **EndpointCount**: int (ReadOnly): The number of Redshift-managed VPC endpoints created for the authorization.
* **Force**: bool (WriteOnly):  Indicates whether to force the revoke action. If true, the Redshift-managed VPC endpoints associated with the endpoint authorization are also deleted.
* **Grantee**: [AwsAccount](#awsaccount) (ReadOnly): The AWS account ID of the grantee of the cluster.
* **Grantor**: [AwsAccount](#awsaccount) (ReadOnly): The AWS account ID of the cluster owner.
* **Status**: string (ReadOnly): The status of the authorization action.
* **VpcIds**: [VpcId](#vpcid)[]: The virtual private cloud (VPC) identifiers to grant or revoke access to.

## AwsAccount
### Properties

## VpcId
### Properties

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
* **SubscriptionName**: string (Required): The name of the Amazon Redshift event notification subscription
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Redshift/ScheduledActionProperties
### Properties
* **Enable**: bool: If true, the schedule is enabled. If false, the scheduled action does not trigger.
* **EndTime**: [timestamp](#timestamp): The end time in UTC of the scheduled action. After this time, the scheduled action does not trigger.
* **IamRole**: string: The IAM role to assume to run the target action.
* **NextInvocations**: [timestamp](#timestamp)[] (ReadOnly): List of times when the scheduled action will run.
* **Schedule**: string: The schedule in `at( )` or `cron( )` format.
* **ScheduledActionDescription**: string: The description of the scheduled action.
* **ScheduledActionName**: string (Required): The name of the scheduled action. The name must be unique within an account.
* **StartTime**: [timestamp](#timestamp): The start time in UTC of the scheduled action. Before this time, the scheduled action does not trigger.
* **State**: string (ReadOnly): The state of the scheduled action.
* **TargetAction**: [ScheduledActionType](#scheduledactiontype): A JSON format string of the Amazon Redshift API operation with input parameters.

## timestamp
### Properties

## ScheduledActionType
### Properties

