# AWS.RDS @ default

## Resource AWS.RDS/DBCluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBClusterProperties](#awsrdsdbclusterproperties): properties of the resource

## Resource AWS.RDS/DBClusterParameterGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBClusterParameterGroupProperties](#awsrdsdbclusterparametergroupproperties) (Required): properties of the resource

## Resource AWS.RDS/DBInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBInstanceProperties](#awsrdsdbinstanceproperties): properties of the resource

## Resource AWS.RDS/DBParameterGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBParameterGroupProperties](#awsrdsdbparametergroupproperties) (Required): properties of the resource

## Resource AWS.RDS/DBProxy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBProxyProperties](#awsrdsdbproxyproperties) (Required): properties of the resource

## Resource AWS.RDS/DBProxyEndpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBProxyEndpointProperties](#awsrdsdbproxyendpointproperties) (Required): properties of the resource

## Resource AWS.RDS/DBProxyTargetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBProxyTargetGroupProperties](#awsrdsdbproxytargetgroupproperties) (Required): properties of the resource

## Resource AWS.RDS/DBSubnetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/DBSubnetGroupProperties](#awsrdsdbsubnetgroupproperties) (Required): properties of the resource

## Resource AWS.RDS/EventSubscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/EventSubscriptionProperties](#awsrdseventsubscriptionproperties) (Required): properties of the resource

## Resource AWS.RDS/GlobalCluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/GlobalClusterProperties](#awsrdsglobalclusterproperties): properties of the resource

## Resource AWS.RDS/OptionGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RDS/OptionGroupProperties](#awsrdsoptiongroupproperties) (Required): properties of the resource

## AWS.RDS/DBClusterProperties
### Properties
* **AllocatedStorage**: int: The amount of storage in gibibytes (GiB) to allocate to each DB instance in the Multi-AZ DB cluster.
* **AssociatedRoles**: [DBClusterRole](#dbclusterrole)[]: Provides a list of the AWS Identity and Access Management (IAM) roles that are associated with the DB cluster. IAM roles that are associated with a DB cluster grant permission for the DB cluster to access other AWS services on your behalf.
* **AutoMinorVersionUpgrade**: bool: A value that indicates whether minor engine upgrades are applied automatically to the DB cluster during the maintenance window. By default, minor engine upgrades are applied automatically.
* **AvailabilityZones**: string[]: A list of Availability Zones (AZs) where instances in the DB cluster can be created. For information on AWS Regions and Availability Zones, see Choosing the Regions and Availability Zones in the Amazon Aurora User Guide.
* **BacktrackWindow**: int: The target backtrack window, in seconds. To disable backtracking, set this value to 0.
* **BackupRetentionPeriod**: int: The number of days for which automated backups are retained.
* **CopyTagsToSnapshot**: bool: A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.
* **DatabaseName**: string: The name of your database. If you don't provide a name, then Amazon RDS won't create a database in this DB cluster. For naming constraints, see Naming Constraints in the Amazon RDS User Guide.
* **DBClusterIdentifier**: string: The DB cluster identifier. This parameter is stored as a lowercase string.
* **DBClusterInstanceClass**: string: The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.
* **DBClusterParameterGroupName**: string: The name of the DB cluster parameter group to associate with this DB cluster.
* **DBSubnetGroupName**: string: A DB subnet group that you want to associate with this DB cluster.
* **DeletionProtection**: bool: A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
* **EnableCloudwatchLogsExports**: string[]: The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.
* **EnableHttpEndpoint**: bool: A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled.
* **EnableIAMDatabaseAuthentication**: bool: A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
* **Endpoint**: [Endpoint](#endpoint) (ReadOnly)
* **Engine**: string: The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora), and aurora-postgresql
* **EngineMode**: string: The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster.
* **EngineVersion**: string: The version number of the database engine to use.
* **GlobalClusterIdentifier**: string: If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the AWS::RDS::GlobalCluster resource.

If you aren't configuring a global database cluster, don't specify this property.
* **Iops**: int: The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.
* **MasterUsername**: string: The name of the master user for the DB cluster. You must specify MasterUsername, unless you specify SnapshotIdentifier. In that case, don't specify MasterUsername.
* **MasterUserPassword**: string (WriteOnly): The master password for the DB instance.
* **MonitoringInterval**: int: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0.
* **MonitoringRoleArn**: string: The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
* **PerformanceInsightsEnabled**: bool: A value that indicates whether to turn on Performance Insights for the DB cluster.
* **PerformanceInsightsKmsKeyId**: string: The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
* **PerformanceInsightsRetentionPeriod**: int: The amount of time, in days, to retain Performance Insights data.
* **Port**: int: The port number on which the instances in the DB cluster accept connections. Default: 3306 if engine is set as aurora or 5432 if set to aurora-postgresql.
* **PreferredBackupWindow**: string: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.
* **PreferredMaintenanceWindow**: string: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.
* **PubliclyAccessible**: bool: A value that indicates whether the DB cluster is publicly accessible.
* **ReadEndpoint**: [ReadEndpoint](#readendpoint)
* **ReplicationSourceIdentifier**: string: The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
* **RestoreType**: string (WriteOnly): The type of restore to be performed. You can specify one of the following values:
full-copy - The new DB cluster is restored as a full copy of the source DB cluster.
copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.
* **ScalingConfiguration**: [ScalingConfiguration](#scalingconfiguration): The ScalingConfiguration property type specifies the scaling configuration of an Aurora Serverless DB cluster.
* **SnapshotIdentifier**: string (WriteOnly): The identifier for the DB snapshot or DB cluster snapshot to restore from.
You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.
* **SourceDBClusterIdentifier**: string (WriteOnly): The identifier of the source DB cluster from which to restore.
* **SourceRegion**: string (WriteOnly): The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, us-east-1.
* **StorageEncrypted**: bool: Indicates whether the DB instance is encrypted.
If you specify the DBClusterIdentifier, SnapshotIdentifier, or SourceDBInstanceIdentifier property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance.
* **StorageType**: string: Specifies the storage type to be associated with the DB cluster.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UseLatestRestorableTime**: bool (WriteOnly): A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.
* **VpcSecurityGroupIds**: string[]: A list of EC2 VPC security groups to associate with this DB cluster.

## DBClusterRole
### Properties
* **FeatureName**: string: The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon RDS API Reference.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

## Endpoint
### Properties
* **Address**: string (ReadOnly): The connection endpoint for the DB cluster.
* **Port**: string (ReadOnly): The port number that will accept connections on this DB cluster.

## ReadEndpoint
### Properties
* **Address**: string (ReadOnly): The reader endpoint for the DB cluster.

## ScalingConfiguration
### Properties
* **AutoPause**: bool: A value that indicates whether to allow or disallow automatic pause for an Aurora DB cluster in serverless DB engine mode. A DB cluster can be paused only when it's idle (it has no connections).
* **MaxCapacity**: int: The maximum capacity for an Aurora DB cluster in serverless DB engine mode.
For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256.
For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384.
The maximum capacity must be greater than or equal to the minimum capacity.
* **MinCapacity**: int: The minimum capacity for an Aurora DB cluster in serverless DB engine mode.
For Aurora MySQL, valid capacity values are 1, 2, 4, 8, 16, 32, 64, 128, and 256.
For Aurora PostgreSQL, valid capacity values are 2, 4, 8, 16, 32, 64, 192, and 384.
The minimum capacity must be less than or equal to the maximum capacity.
* **SecondsUntilAutoPause**: int: The time, in seconds, before an Aurora DB cluster in serverless mode is paused.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.RDS/DBClusterParameterGroupProperties
### Properties
* **DBClusterParameterGroupName**: string (ReadOnly)
* **Description**: string (Required): A friendly description for this DB cluster parameter group.
* **Family**: string (Required): The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a DB engine and engine version compatible with that DB cluster parameter group family.
* **Parameters**: [DBClusterParameterGroup_Parameters](#dbclusterparametergroupparameters) (Required, WriteOnly): An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
* **Tags**: [Tag](#tag)[]: The list of tags for the cluster parameter group.

## DBClusterParameterGroup_Parameters
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.RDS/DBInstanceProperties
### Properties
* **AllocatedStorage**: string: The amount of storage (in gigabytes) to be initially allocated for the database instance.
* **AllowMajorVersionUpgrade**: bool: A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
* **AssociatedRoles**: [DBInstanceRole](#dbinstancerole)[]: The AWS Identity and Access Management (IAM) roles associated with the DB instance.
* **AutoMinorVersionUpgrade**: bool: A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
* **AvailabilityZone**: string: The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones.
* **BackupRetentionPeriod**: int: The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
* **CACertificateIdentifier**: string: The identifier of the CA certificate for this DB instance.
* **CharacterSetName**: string: For supported engines, indicates that the DB instance should be associated with the specified character set.
* **CopyTagsToSnapshot**: bool: A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
* **DBClusterIdentifier**: string: The identifier of the DB cluster that the instance will belong to.
* **DBInstanceClass**: string: The compute and memory capacity of the DB instance, for example, db.m4.large. Not all DB instance classes are available in all AWS Regions, or for all database engines.
* **DBInstanceIdentifier**: string: A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance.
* **DBName**: string: The meaning of this parameter differs according to the database engine you use.
* **DBParameterGroupName**: string: The name of an existing DB parameter group or a reference to an AWS::RDS::DBParameterGroup resource created in the template.
* **DBSecurityGroups**: string[]: A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
* **DBSnapshotIdentifier**: string (WriteOnly): The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
* **DBSubnetGroupName**: string: A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC.
* **DeleteAutomatedBackups**: bool: A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
* **DeletionProtection**: bool: A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
* **Domain**: string: The Active Directory directory ID to create the DB instance in. Currently, only MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
* **DomainIAMRoleName**: string: Specify the name of the IAM role to be used when making API calls to the Directory Service.
* **EnableCloudwatchLogsExports**: string[]: The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used.
* **EnableIAMDatabaseAuthentication**: bool: A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
* **EnablePerformanceInsights**: bool: A value that indicates whether to enable Performance Insights for the DB instance.
* **Endpoint**: [Endpoint](#endpoint): Specifies the connection endpoint.
* **Engine**: string: The name of the database engine that you want to use for this DB instance.
* **EngineVersion**: string: The version number of the database engine to use.
* **Iops**: int: The number of I/O operations per second (IOPS) that the database provisions.
* **KmsKeyId**: string: The ARN of the AWS Key Management Service (AWS KMS) master key that's used to encrypt the DB instance.
* **LicenseModel**: string: License model information for this DB instance.
* **MasterUsername**: string: The master user name for the DB instance.
* **MasterUserPassword**: string (WriteOnly): The password for the master user.
* **MaxAllocatedStorage**: int: The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.
* **MonitoringInterval**: int: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.
* **MonitoringRoleArn**: string: The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs.
* **MultiAZ**: bool: Specifies whether the database instance is a multiple Availability Zone deployment.
* **OptionGroupName**: string: Indicates that the DB instance should be associated with the specified option group.
* **PerformanceInsightsKMSKeyId**: string: The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.
* **PerformanceInsightsRetentionPeriod**: int: The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years).
* **Port**: string (WriteOnly): The port number on which the database accepts connections.
* **PreferredBackupWindow**: string: The daily time range during which automated backups are created if automated backups are enabled, using the BackupRetentionPeriod parameter.
* **PreferredMaintenanceWindow**: string: he weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
* **ProcessorFeatures**: [ProcessorFeature](#processorfeature)[]: The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
* **PromotionTier**: int: A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance.
* **PubliclyAccessible**: bool: Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address.
* **SourceDBInstanceIdentifier**: string (WriteOnly): If you want to create a Read Replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of Read Replicas.
* **SourceRegion**: string (WriteOnly): The ID of the region that contains the source DB instance for the Read Replica.
* **StorageEncrypted**: bool: A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
* **StorageType**: string: Specifies the storage type to be associated with the DB instance.
* **Tags**: [Tag](#tag)[]: Tags to assign to the DB instance.
* **TdeCredentialArn**: string: The ARN from the key store with which to associate the instance for TDE encryption.
* **TdeCredentialPassword**: string (WriteOnly): The password for the given ARN from the key store in order to access the device.
* **Timezone**: string: The time zone of the DB instance. The time zone parameter is currently supported only by Microsoft SQL Server.
* **UseDefaultProcessorFeatures**: bool: A value that indicates whether the DB instance class of the DB instance uses its default processor features.
* **VPCSecurityGroups**: string[]: A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to AWS::EC2::SecurityGroup resources created in the template.

## DBInstanceRole
### Properties
* **FeatureName**: string (Required): The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.

## Endpoint
### Properties
* **Address**: string (ReadOnly): Specifies the DNS address of the DB instance.
* **HostedZoneId**: string (ReadOnly): Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
* **Port**: string (ReadOnly): Specifies the port that the database engine is listening on.

## ProcessorFeature
### Properties
* **Name**: string: The name of the processor feature. Valid names are coreCount and threadsPerCore.
* **Value**: string: The value of a processor feature name.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.RDS/DBParameterGroupProperties
### Properties
* **DBParameterGroupName**: string (ReadOnly): Specifies the name of the DB parameter group
* **Description**: string (Required): Provides the customer-specified description for this DB parameter group.
* **Family**: string (Required): The DB parameter group family name.
* **Parameters**: [DBParameterGroup_Parameters](#dbparametergroupparameters) (WriteOnly): An array of parameter names and values for the parameter update.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DBParameterGroup_Parameters
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.RDS/DBProxyProperties
### Properties
* **Auth**: [AuthFormat](#authformat)[] (Required): The authorization mechanism that the proxy uses.
* **DBProxyArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the proxy.
* **DBProxyName**: string (Required): The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
* **DebugLogging**: bool: Whether the proxy includes detailed information about SQL statements in its logs.
* **Endpoint**: string (ReadOnly): The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.
* **EngineFamily**: string (Required): The kinds of databases that the proxy can connect to.
* **IdleClientTimeout**: int: The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
* **RequireTLS**: bool: A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
* **Tags**: [TagFormat](#tagformat)[]: An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
* **VpcSecurityGroupIds**: string[]: VPC security group IDs to associate with the new proxy.
* **VpcSubnetIds**: string[] (Required): VPC subnet IDs to associate with the new proxy.

## AuthFormat
### Properties
* **AuthScheme**: string: The type of authentication that the proxy uses for connections from the proxy to the underlying database. 
* **Description**: string: A user-specified description about the authentication used by a proxy to log in as a specific database user. 
* **IAMAuth**: string: Whether to require or disallow AWS Identity and Access Management (IAM) authentication for connections to the proxy. 
* **SecretArn**: string: The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager. 
* **UserName**: string: The name of the database user to which the proxy connects.

## TagFormat
### Properties
* **Key**: string
* **Value**: string

## AWS.RDS/DBProxyEndpointProperties
### Properties
* **DBProxyEndpointArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the DB proxy endpoint.
* **DBProxyEndpointName**: string (Required): The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
* **DBProxyName**: string (Required): The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
* **Endpoint**: string (ReadOnly): The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
* **IsDefault**: bool (ReadOnly): A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
* **Tags**: [TagFormat](#tagformat)[]: An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
* **TargetRole**: string: A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
* **VpcId**: string (ReadOnly): VPC ID to associate with the new DB proxy endpoint.
* **VpcSecurityGroupIds**: string[]: VPC security group IDs to associate with the new DB proxy endpoint.
* **VpcSubnetIds**: string[] (Required): VPC subnet IDs to associate with the new DB proxy endpoint.

## TagFormat
### Properties
* **Key**: string
* **Value**: string

## AWS.RDS/DBProxyTargetGroupProperties
### Properties
* **ConnectionPoolConfigurationInfo**: [ConnectionPoolConfigurationInfoFormat](#connectionpoolconfigurationinfoformat)
* **DBClusterIdentifiers**: string[]
* **DBInstanceIdentifiers**: string[]
* **DBProxyName**: string (Required): The identifier for the proxy.
* **TargetGroupArn**: string (ReadOnly): The Amazon Resource Name (ARN) representing the target group.
* **TargetGroupName**: string (Required): The identifier for the DBProxyTargetGroup

## ConnectionPoolConfigurationInfoFormat
### Properties
* **ConnectionBorrowTimeout**: int: The number of seconds for a proxy to wait for a connection to become available in the connection pool.
* **InitQuery**: string: One or more SQL statements for the proxy to run when opening each new database connection.
* **MaxConnectionsPercent**: int: The maximum size of the connection pool for each target in a target group.
* **MaxIdleConnectionsPercent**: int: Controls how actively the proxy closes idle database connections in the connection pool.
* **SessionPinningFilters**: string[]: Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

## AWS.RDS/DBSubnetGroupProperties
### Properties
* **DBSubnetGroupDescription**: string (Required)
* **DBSubnetGroupName**: string
* **SubnetIds**: string[] (Required, WriteOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.RDS/EventSubscriptionProperties
### Properties
* **Enabled**: bool: A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it.
* **EventCategories**: string[]: A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the Events topic in the Amazon RDS User Guide or by using the DescribeEventCategories action.
* **SnsTopicArn**: string (Required): The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
* **SourceIds**: string[]: The list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.
* **SourceType**: string: The type of source that will be generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.
* **SubscriptionName**: string: The name of the subscription.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.RDS/GlobalClusterProperties
### Properties
* **DeletionProtection**: bool: The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
* **Engine**: string: The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).
If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
* **EngineVersion**: string: The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
* **GlobalClusterIdentifier**: string: The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.
* **SourceDBClusterIdentifier**: string: The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string.
* **StorageEncrypted**: bool:  The storage encryption setting for the new global database cluster.
If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.

## AWS.RDS/OptionGroupProperties
### Properties
* **EngineName**: string (Required): Indicates the name of the engine that this option group can be applied to.
* **MajorEngineVersion**: string (Required): Indicates the major engine version associated with this option group.
* **OptionConfigurations**: [OptionConfiguration](#optionconfiguration)[]: Indicates what options are available in the option group.
* **OptionGroupDescription**: string (Required): Provides a description of the option group.
* **OptionGroupName**: string (ReadOnly): Specifies the name of the option group.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## OptionConfiguration
### Properties
* **DBSecurityGroupMemberships**: string[]: A list of DBSecurityGroupMembership name strings used for this option.
* **OptionName**: string (Required): The configuration of options to include in a group.
* **OptionSettings**: [OptionSetting](#optionsetting)[]: The option settings to include in an option group.
* **OptionVersion**: string: The version for the option.
* **Port**: int: The optional port for the option.
* **VpcSecurityGroupMemberships**: string[]: A list of VpcSecurityGroupMembership name strings used for this option.

## OptionSetting
### Properties
* **Name**: string: The name of the option that has settings that you can set.
* **Value**: string: The current value of the option setting.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

