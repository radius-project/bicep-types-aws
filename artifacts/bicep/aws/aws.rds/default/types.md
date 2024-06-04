# AWS.RDS @ default

## Resource AWS.RDS/CustomDBEngineVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/CustomDBEngineVersionProperties](#awsrdscustomdbengineversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/DBCluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBClusterProperties](#awsrdsdbclusterproperties) (Identifier): properties of the resource

## Resource AWS.RDS/DBClusterParameterGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBClusterParameterGroupProperties](#awsrdsdbclusterparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/DBInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBInstanceProperties](#awsrdsdbinstanceproperties) (Identifier): properties of the resource

## Resource AWS.RDS/DBParameterGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBParameterGroupProperties](#awsrdsdbparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/DBProxy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBProxyProperties](#awsrdsdbproxyproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/DBProxyEndpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBProxyEndpointProperties](#awsrdsdbproxyendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/DBProxyTargetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBProxyTargetGroupProperties](#awsrdsdbproxytargetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/DBSubnetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/DBSubnetGroupProperties](#awsrdsdbsubnetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/EventSubscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/EventSubscriptionProperties](#awsrdseventsubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/GlobalCluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/GlobalClusterProperties](#awsrdsglobalclusterproperties) (Identifier): properties of the resource

## Resource AWS.RDS/Integration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/IntegrationProperties](#awsrdsintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.RDS/OptionGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RDS/OptionGroupProperties](#awsrdsoptiongroupproperties) (Required, Identifier): properties of the resource

## AuthFormat
### Properties
* **AuthScheme**: string: The type of authentication that the proxy uses for connections from the proxy to the underlying database. 
* **ClientPasswordAuthType**: string: The type of authentication the proxy uses for connections from clients.
* **Description**: string: A user-specified description about the authentication used by a proxy to log in as a specific database user. 
* **IAMAuth**: string: Whether to require or disallow Amazon Web Services Identity and Access Management (IAM) authentication for connections to the proxy. The ENABLED value is valid only for proxies with RDS for Microsoft SQL Server.
* **SecretArn**: string: The Amazon Resource Name (ARN) representing the secret that the proxy uses to authenticate to the RDS DB instance or Aurora DB cluster. These secrets are stored within Amazon Secrets Manager. 

## AWS.RDS/CustomDBEngineVersionProperties
### Properties
* **DatabaseInstallationFilesS3BucketName**: string: The name of an Amazon S3 bucket that contains database installation files for your CEV. For example, a valid bucket name is `my-custom-installation-files`.
* **DatabaseInstallationFilesS3Prefix**: string: The Amazon S3 directory that contains the database installation files for your CEV. For example, a valid bucket name is `123456789012/cev1`. If this setting isn't specified, no prefix is assumed.
* **DBEngineVersionArn**: string (ReadOnly): The ARN of the custom engine version.
* **Description**: string: An optional description of your CEV.
* **Engine**: string (Required, Identifier): The database engine to use for your custom engine version (CEV). The only supported value is `custom-oracle-ee`.
* **EngineVersion**: string (Required, Identifier): The name of your CEV. The name format is 19.customized_string . For example, a valid name is 19.my_cev1. This setting is required for RDS Custom for Oracle, but optional for Amazon RDS. The combination of Engine and EngineVersion is unique per customer per Region.
* **ImageId**: string: The identifier of Amazon Machine Image (AMI) used for CEV.
* **KMSKeyId**: string: The AWS KMS key identifier for an encrypted CEV. A symmetric KMS key is required for RDS Custom, but optional for Amazon RDS.
* **Manifest**: string (WriteOnly): The CEV manifest, which is a JSON document that describes the installation .zip files stored in Amazon S3. Specify the name/value pairs in a file or a quoted string. RDS Custom applies the patches in the order in which they are listed.
* **SourceCustomDbEngineVersionIdentifier**: string (WriteOnly): The identifier of the source custom engine version.
* **Status**: string: The availability status to be assigned to the CEV.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UseAwsProvidedLatestImage**: bool (WriteOnly): A value that indicates whether AWS provided latest image is applied automatically to the Custom Engine Version. By default, AWS provided latest image is applied automatically. This value is only applied on create.

## AWS.RDS/DBClusterParameterGroupProperties
### Properties
* **DBClusterParameterGroupName**: string (Identifier)
* **Description**: string (Required): A friendly description for this DB cluster parameter group.
* **Family**: string (Required): The DB cluster parameter group family name. A DB cluster parameter group can be associated with one and only one DB cluster parameter group family, and can be applied only to a DB cluster running a DB engine and engine version compatible with that DB cluster parameter group family.
* **Parameters**: [DBClusterParameterGroup_Parameters](#dbclusterparametergroupparameters) (Required): An array of parameters to be modified. A maximum of 20 parameters can be modified in a single request.
* **Tags**: [Tag](#tag)[]: The list of tags for the cluster parameter group.

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
* **DBClusterArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the DB cluster.
* **DBClusterIdentifier**: string (Identifier): The DB cluster identifier. This parameter is stored as a lowercase string.
* **DBClusterInstanceClass**: string: The compute and memory capacity of each DB instance in the Multi-AZ DB cluster, for example db.m6g.xlarge.
* **DBClusterParameterGroupName**: string: The name of the DB cluster parameter group to associate with this DB cluster.
* **DBClusterResourceId**: string (ReadOnly): The AWS Region-unique, immutable identifier for the DB cluster.
* **DBInstanceParameterGroupName**: string (WriteOnly): The name of the DB parameter group to apply to all instances of the DB cluster.
* **DBSubnetGroupName**: string: A DB subnet group that you want to associate with this DB cluster.
* **DBSystemId**: string: Reserved for future use.
* **DeletionProtection**: bool: A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled.
* **Domain**: string: The Active Directory directory ID to create the DB cluster in.
* **DomainIAMRoleName**: string: Specify the name of the IAM role to be used when making API calls to the Directory Service.
* **EnableCloudwatchLogsExports**: string[]: The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see Publishing Database Logs to Amazon CloudWatch Logs in the Amazon Aurora User Guide.
* **EnableGlobalWriteForwarding**: bool: Specifies whether to enable this DB cluster to forward write operations to the primary cluster of a global cluster (Aurora global database). By default, write operations are not allowed on Aurora DB clusters that are secondary clusters in an Aurora global database.
* **EnableHttpEndpoint**: bool: A value that indicates whether to enable the HTTP endpoint for DB cluster. By default, the HTTP endpoint is disabled.
* **EnableIAMDatabaseAuthentication**: bool: A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
* **Endpoint**: [Endpoint](#endpoint) (ReadOnly)
* **Engine**: string: The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora), and aurora-postgresql
* **EngineMode**: string: The DB engine mode of the DB cluster, either provisioned, serverless, parallelquery, global, or multimaster.
* **EngineVersion**: string: The version number of the database engine to use.
* **GlobalClusterIdentifier**: string: If you are configuring an Aurora global database cluster and want your Aurora DB cluster to be a secondary member in the global database cluster, specify the global cluster ID of the global database cluster. To define the primary database cluster of the global cluster, use the AWS::RDS::GlobalCluster resource.

If you aren't configuring a global database cluster, don't specify this property.
* **Iops**: int: The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for each DB instance in the Multi-AZ DB cluster.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the AWS Key Management Service master key that is used to encrypt the database instances in the DB cluster, such as arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef. If you enable the StorageEncrypted property but don't specify this property, the default master key is used. If you specify this property, you must set the StorageEncrypted property to true.
* **ManageMasterUserPassword**: bool: A value that indicates whether to manage the master user password with AWS Secrets Manager.
* **MasterUsername**: string: The name of the master user for the DB cluster. You must specify MasterUsername, unless you specify SnapshotIdentifier. In that case, don't specify MasterUsername.
* **MasterUserPassword**: string (WriteOnly): The master password for the DB instance.
* **MasterUserSecret**: [MasterUserSecret](#masterusersecret): Contains the secret managed by RDS in AWS Secrets Manager for the master user password.
* **MonitoringInterval**: int: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB cluster. To turn off collecting Enhanced Monitoring metrics, specify 0. The default is 0.
* **MonitoringRoleArn**: string: The Amazon Resource Name (ARN) for the IAM role that permits RDS to send Enhanced Monitoring metrics to Amazon CloudWatch Logs.
* **NetworkType**: string: The network type of the DB cluster.
* **PerformanceInsightsEnabled**: bool: A value that indicates whether to turn on Performance Insights for the DB cluster.
* **PerformanceInsightsKmsKeyId**: string: The Amazon Web Services KMS key identifier for encryption of Performance Insights data.
* **PerformanceInsightsRetentionPeriod**: int: The amount of time, in days, to retain Performance Insights data.
* **Port**: int: The port number on which the instances in the DB cluster accept connections. Default: 3306 if engine is set as aurora or 5432 if set to aurora-postgresql.
* **PreferredBackupWindow**: string: The daily time range during which automated backups are created if automated backups are enabled using the BackupRetentionPeriod parameter. The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.
* **PreferredMaintenanceWindow**: string: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC). The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see Adjusting the Preferred DB Cluster Maintenance Window in the Amazon Aurora User Guide.
* **PubliclyAccessible**: bool: A value that indicates whether the DB cluster is publicly accessible.
* **ReadEndpoint**: [ReadEndpoint](#readendpoint)
* **ReplicationSourceIdentifier**: string: The Amazon Resource Name (ARN) of the source DB instance or DB cluster if this DB cluster is created as a Read Replica.
* **RestoreToTime**: string (WriteOnly): The date and time to restore the DB cluster to. Value must be a time in Universal Coordinated Time (UTC) format. An example: 2015-03-07T23:45:00Z
* **RestoreType**: string (WriteOnly): The type of restore to be performed. You can specify one of the following values:
full-copy - The new DB cluster is restored as a full copy of the source DB cluster.
copy-on-write - The new DB cluster is restored as a clone of the source DB cluster.
* **ScalingConfiguration**: [ScalingConfiguration](#scalingconfiguration): The ScalingConfiguration property type specifies the scaling configuration of an Aurora Serverless DB cluster.
* **ServerlessV2ScalingConfiguration**: [ServerlessV2ScalingConfiguration](#serverlessv2scalingconfiguration): Contains the scaling configuration of an Aurora Serverless v2 DB cluster.
* **SnapshotIdentifier**: string (WriteOnly): The identifier for the DB snapshot or DB cluster snapshot to restore from.
You can use either the name or the Amazon Resource Name (ARN) to specify a DB cluster snapshot. However, you can use only the ARN to specify a DB snapshot.
After you restore a DB cluster with a SnapshotIdentifier property, you must specify the same SnapshotIdentifier property for any future updates to the DB cluster. When you specify this property for an update, the DB cluster is not restored from the snapshot again, and the data in the database is not changed. However, if you don't specify the SnapshotIdentifier property, an empty DB cluster is created, and the original DB cluster is deleted. If you specify a property that is different from the previous snapshot restore property, the DB cluster is restored from the specified SnapshotIdentifier property, and the original DB cluster is deleted.
* **SourceDBClusterIdentifier**: string (WriteOnly): The identifier of the source DB cluster from which to restore.
* **SourceRegion**: string (WriteOnly): The AWS Region which contains the source DB cluster when replicating a DB cluster. For example, us-east-1.
* **StorageEncrypted**: bool: Indicates whether the DB instance is encrypted.
If you specify the DBClusterIdentifier, SnapshotIdentifier, or SourceDBInstanceIdentifier property, don't specify this property. The value is inherited from the cluster, snapshot, or source DB instance.
* **StorageThroughput**: int (ReadOnly): Specifies the storage throughput value for the DB cluster. This setting applies only to the gp3 storage type.
* **StorageType**: string: Specifies the storage type to be associated with the DB cluster.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UseLatestRestorableTime**: bool (WriteOnly): A value that indicates whether to restore the DB cluster to the latest restorable backup time. By default, the DB cluster is not restored to the latest restorable backup time.
* **VpcSecurityGroupIds**: string[]: A list of EC2 VPC security groups to associate with this DB cluster.

## AWS.RDS/DBInstanceProperties
### Properties
* **AllocatedStorage**: string: The amount of storage in gibibytes (GiB) to be initially allocated for the database instance.
  If any value is set in the ``Iops`` parameter, ``AllocatedStorage`` must be at least 100 GiB, which corresponds to the minimum Iops value of 1,000. If you increase the ``Iops`` value (in 1,000 IOPS increments), then you must also increase the ``AllocatedStorage`` value (in 100-GiB increments). 
   *Amazon Aurora* 
 Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.
  *Db2* 
 Constraints to the amount of storage for each storage type are the following:
  +  General Purpose (SSD) storage (gp3): Must be an integer from 20 to 64000.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 64000.
  
  *MySQL* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 5 to 3072.
  
  *MariaDB* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 5 to 3072.
  
  *PostgreSQL* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 5 to 3072.
  
  *Oracle* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.
  +  Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.
  +  Magnetic storage (standard): Must be an integer from 10 to 3072.
  
  *SQL Server* 
 Constraints to the amount of storage for each storage type are the following: 
  +  General Purpose (SSD) storage (gp2):
  +  Enterprise and Standard editions: Must be an integer from 20 to 16384.
  +  Web and Express editions: Must be an integer from 20 to 16384.
  
  +  Provisioned IOPS storage (io1):
  +  Enterprise and Standard editions: Must be an integer from 20 to 16384.
  +  Web and Express editions: Must be an integer from 20 to 16384.
  
  +  Magnetic storage (standard):
  +  Enterprise and Standard editions: Must be an integer from 20 to 1024.
  +  Web and Express editions: Must be an integer from 20 to 1024.
* **AllowMajorVersionUpgrade**: bool (WriteOnly): A value that indicates whether major version upgrades are allowed. Changing this parameter doesn't result in an outage and the change is asynchronously applied as soon as possible.
 Constraints: Major version upgrades must be allowed when specifying a value for the ``EngineVersion`` parameter that is a different major version than the DB instance's current version.
* **AssociatedRoles**: [DBInstanceRole](#dbinstancerole)[]: The IAMlong (IAM) roles associated with the DB instance. 
  *Amazon Aurora* 
 Not applicable. The associated roles are managed by the DB cluster.
* **AutomaticBackupReplicationKmsKeyId**: string (WriteOnly): The AWS KMS key identifier for encryption of the replicated automated backups. The KMS key ID is the Amazon Resource Name (ARN) for the KMS encryption key in the destination AWS-Region, for example, ``arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE``.
* **AutomaticBackupReplicationRegion**: string: The destination region for the backup replication of the DB instance. For more info, see [Replicating automated backups to another Region](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_ReplicateBackups.html) in the *Amazon RDS User Guide*.
* **AutoMinorVersionUpgrade**: bool: A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.
* **AvailabilityZone**: string: The Availability Zone (AZ) where the database will be created. For information on AWS-Regions and Availability Zones, see [Regions and Availability Zones](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html).
 For Amazon Aurora, each Aurora DB cluster hosts copies of its storage in three separate Availability Zones. Specify one of these Availability Zones. Aurora automatically chooses an appropriate Availability Zone if you don't specify one.
 Default: A random, system-chosen Availability Zone in the endpoint's AWS-Region.
 Constraints:
  +  The ``AvailabilityZone`` parameter can't be specified if the DB instance is a Multi-AZ deployment.
  +  The specified Availability Zone must be in the same AWS-Region as the current endpoint.
  
 Example: ``us-east-1d``
* **BackupRetentionPeriod**: int: The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.
  *Amazon Aurora* 
 Not applicable. The retention period for automated backups is managed by the DB cluster.
 Default: 1
 Constraints:
  +  Must be a value from 0 to 35
  +  Can't be set to 0 if the DB instance is a source to read replicas
* **CACertificateIdentifier**: string: The identifier of the CA certificate for this DB instance.
 For more information, see [Using SSL/TLS to encrypt a connection to a DB instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html) in the *Amazon RDS User Guide* and [Using SSL/TLS to encrypt a connection to a DB cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html) in the *Amazon Aurora User Guide*.
* **CertificateDetails**: [CertificateDetails](#certificatedetails): The details of the DB instance's server certificate.
* **CertificateRotationRestart**: bool (WriteOnly): Specifies whether the DB instance is restarted when you rotate your SSL/TLS certificate.
 By default, the DB instance is restarted when you rotate your SSL/TLS certificate. The certificate is not updated until the DB instance is restarted.
  Set this parameter only if you are *not* using SSL/TLS to connect to the DB instance.
  If you are using SSL/TLS to connect to the DB instance, follow the appropriate instructions for your DB engine to rotate your SSL/TLS certificate:
  +  For more information about rotating your SSL/TLS certificate for RDS DB engines, see [Rotating Your SSL/TLS Certificate.](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon RDS User Guide.* 
  +  For more information about rotating your SSL/TLS certificate for Aurora DB engines, see [Rotating Your SSL/TLS Certificate](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL-certificate-rotation.html) in the *Amazon Aurora User Guide*.
  
 This setting doesn't apply to RDS Custom DB instances.
* **CharacterSetName**: string: For supported engines, indicates that the DB instance should be associated with the specified character set.
  *Amazon Aurora* 
 Not applicable. The character set is managed by the DB cluster. For more information, see [AWS::RDS::DBCluster](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rds-dbcluster.html).
* **CopyTagsToSnapshot**: bool: Specifies whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.
 This setting doesn't apply to Amazon Aurora DB instances. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.
* **CustomIAMInstanceProfile**: string: The instance profile associated with the underlying Amazon EC2 instance of an RDS Custom DB instance.
 This setting is required for RDS Custom.
 Constraints:
  +  The profile must exist in your account.
  +  The profile must have an IAM role that Amazon EC2 has permissions to assume.
  +  The instance profile name and the associated IAM role name must start with the prefix ``AWSRDSCustom``.
  
 For the list of permissions required for the IAM role, see [Configure IAM and your VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/custom-setup-orcl.html#custom-setup-orcl.iam-vpc) in the *Amazon RDS User Guide*.
* **DBClusterIdentifier**: string: The identifier of the DB cluster that the instance will belong to.
* **DBClusterSnapshotIdentifier**: string: The identifier for the Multi-AZ DB cluster snapshot to restore from.
 For more information on Multi-AZ DB clusters, see [Multi-AZ DB cluster deployments](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html) in the *Amazon RDS User Guide*.
 Constraints:
  +  Must match the identifier of an existing Multi-AZ DB cluster snapshot.
  +  Can't be specified when ``DBSnapshotIdentifier`` is specified.
  +  Must be specified when ``DBSnapshotIdentifier`` isn't specified.
  +  If you are restoring from a shared manual Multi-AZ DB cluster snapshot, the ``DBClusterSnapshotIdentifier`` must be the ARN of the shared snapshot.
  +  Can't be the identifier of an Aurora DB cluster snapshot.
* **DBInstanceArn**: string (ReadOnly)
* **DBInstanceClass**: string: The compute and memory capacity of the DB instance, for example ``db.m5.large``. Not all DB instance classes are available in all AWS-Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see [DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html) in the *Amazon RDS User Guide* or [Aurora DB instance classes](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.DBInstanceClass.html) in the *Amazon Aurora User Guide*.
* **DBInstanceIdentifier**: string (Identifier): A name for the DB instance. If you specify a name, AWS CloudFormation converts it to lowercase. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the DB instance. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
 For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
  If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **DbiResourceId**: string (ReadOnly)
* **DBName**: string: The meaning of this parameter differs according to the database engine you use.
  If you specify the ``DBSnapshotIdentifier`` property, this property only applies to RDS for Oracle.
   *Amazon Aurora* 
 Not applicable. The database name is managed by the DB cluster.
  *Db2* 
 The name of the database to create when the DB instance is created. If this parameter isn't specified, no database is created in the DB instance.
 Constraints:
  +  Must contain 1 to 64 letters or numbers.
  +  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
  +  Can't be a word reserved by the specified database engine.
  
  *MySQL* 
 The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
 Constraints:
  +  Must contain 1 to 64 letters or numbers.
  +  Can't be a word reserved by the specified database engine
  
  *MariaDB* 
 The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.
 Constraints:
  +  Must contain 1 to 64 letters or numbers.
  +  Can't be a word reserved by the specified database engine
  
  *PostgreSQL* 
 The name of the database to create when the DB instance is created. If this parameter is not specified, the default ``postgres`` database is created in the DB instance.
 Constraints:
  +  Must begin with a letter. Subsequent characters can be letters, underscores, or digits (0-9).
  +  Must contain 1 to 63 characters.
  +  Can't be a word reserved by the specified database engine
  
  *Oracle* 
 The Oracle System ID (SID) of the created DB instance. If you specify ``null``, the default value ``ORCL`` is used. You can't specify the string NULL, or any other reserved word, for ``DBName``. 
 Default: ``ORCL`` 
 Constraints:
  +  Can't be longer than 8 characters
  
  *SQL Server* 
 Not applicable. Must be null.
* **DBParameterGroupName**: string: The name of an existing DB parameter group or a reference to an [AWS::RDS::DBParameterGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-dbparametergroup.html) resource created in the template.
 To list all of the available DB parameter group names, use the following command:
  ``aws rds describe-db-parameter-groups --query "DBParameterGroups[].DBParameterGroupName" --output text`` 
  If any of the data members of the referenced parameter group are changed during an update, the DB instance might need to be restarted, which causes some interruption. If the parameter group contains static parameters, whether they were changed or not, an update triggers a reboot.
  If you don't specify a value for ``DBParameterGroupName`` property, the default DB parameter group for the specified engine and engine version is used.
* **DBSecurityGroups**: string[]: A list of the DB security groups to assign to the DB instance. The list can include both the name of existing DB security groups or references to AWS::RDS::DBSecurityGroup resources created in the template.
  If you set DBSecurityGroups, you must not set VPCSecurityGroups, and vice versa. Also, note that the DBSecurityGroups property exists only for backwards compatibility with older regions and is no longer recommended for providing security information to an RDS DB instance. Instead, use VPCSecurityGroups.
  If you specify this property, AWS CloudFormation sends only the following properties (if specified) to Amazon RDS during create operations:
  +   ``AllocatedStorage`` 
  +   ``AutoMinorVersionUpgrade`` 
  +   ``AvailabilityZone`` 
  +   ``BackupRetentionPeriod`` 
  +   ``CharacterSetName`` 
  +   ``DBInstanceClass`` 
  +   ``DBName`` 
  +   ``DBParameterGroupName`` 
  +   ``DBSecurityGroups`` 
  +   ``DBSubnetGroupName`` 
  +   ``Engine`` 
  +   ``EngineVersion`` 
  +   ``Iops`` 
  +   ``LicenseModel`` 
  +   ``MasterUsername`` 
  +   ``MasterUserPassword`` 
  +   ``MultiAZ`` 
  +   ``OptionGroupName`` 
  +   ``PreferredBackupWindow`` 
  +   ``PreferredMaintenanceWindow`` 
  
 All other properties are ignored. Specify a virtual private cloud (VPC) security group if you want to submit other properties, such as ``StorageType``, ``StorageEncrypted``, or ``KmsKeyId``. If you're already using the ``DBSecurityGroups`` property, you can't use these other properties by updating your DB instance to use a VPC security group. You must recreate the DB instance.
* **DBSnapshotIdentifier**: string (WriteOnly): The name or Amazon Resource Name (ARN) of the DB snapshot that's used to restore the DB instance. If you're restoring from a shared manual DB snapshot, you must specify the ARN of the snapshot.
 By specifying this property, you can create a DB instance from the specified DB snapshot. If the ``DBSnapshotIdentifier`` property is an empty string or the ``AWS::RDS::DBInstance`` declaration has no ``DBSnapshotIdentifier`` property, AWS CloudFormation creates a new database. If the property contains a value (other than an empty string), AWS CloudFormation creates a database from the specified snapshot. If a snapshot with the specified name doesn't exist, AWS CloudFormation can't create the database and it rolls back the stack.
 Some DB instance properties aren't valid when you restore from a snapshot, such as the ``MasterUsername`` and ``MasterUserPassword`` properties. For information about the properties that you can specify, see the ``RestoreDBInstanceFromDBSnapshot`` action in the *Amazon RDS API Reference*.
 After you restore a DB instance with a ``DBSnapshotIdentifier`` property, you must specify the same ``DBSnapshotIdentifier`` property for any future updates to the DB instance. When you specify this property for an update, the DB instance is not restored from the DB snapshot again, and the data in the database is not changed. However, if you don't specify the ``DBSnapshotIdentifier`` property, an empty DB instance is created, and the original DB instance is deleted. If you specify a property that is different from the previous snapshot restore property, a new DB instance is restored from the specified ``DBSnapshotIdentifier`` property, and the original DB instance is deleted.
 If you specify the ``DBSnapshotIdentifier`` property to restore a DB instance (as opposed to specifying it for DB instance updates), then don't specify the following properties:
  +   ``CharacterSetName`` 
  +   ``DBClusterIdentifier`` 
  +   ``DBName`` 
  +   ``DeleteAutomatedBackups`` 
  +   ``EnablePerformanceInsights`` 
  +   ``KmsKeyId`` 
  +   ``MasterUsername`` 
  +   ``MasterUserPassword`` 
  +   ``PerformanceInsightsKMSKeyId`` 
  +   ``PerformanceInsightsRetentionPeriod`` 
  +   ``PromotionTier`` 
  +   ``SourceDBInstanceIdentifier`` 
  +   ``SourceRegion`` 
  +   ``StorageEncrypted`` (for an encrypted snapshot)
  +   ``Timezone`` 
  
  *Amazon Aurora* 
 Not applicable. Snapshot restore is managed by the DB cluster.
* **DBSubnetGroupName**: string: A DB subnet group to associate with the DB instance. If you update this value, the new subnet group must be a subnet group in a new VPC. 
 If there's no DB subnet group, then the DB instance isn't a VPC DB instance.
 For more information about using Amazon RDS in a VPC, see [Using Amazon RDS with Amazon Virtual Private Cloud (VPC)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*. 
  *Amazon Aurora* 
 Not applicable. The DB subnet group is managed by the DB cluster. If specified, the setting must match the DB cluster setting.
* **DBSystemId**: string (ReadOnly): The Oracle system identifier (SID), which is the name of the Oracle database instance that manages your database files. In this context, the term "Oracle database instance" refers exclusively to the system global area (SGA) and Oracle background processes. If you don't specify a SID, the value defaults to ``RDSCDB``. The Oracle SID is also the name of your CDB.
* **DedicatedLogVolume**: bool: Indicates whether the DB instance has a dedicated log volume (DLV) enabled.
* **DeleteAutomatedBackups**: bool (WriteOnly): A value that indicates whether to remove automated backups immediately after the DB instance is deleted. This parameter isn't case-sensitive. The default is to remove automated backups immediately after the DB instance is deleted.
  *Amazon Aurora* 
 Not applicable. When you delete a DB cluster, all automated backups for that DB cluster are deleted and can't be recovered. Manual DB cluster snapshots of the DB cluster are not deleted.
* **DeletionProtection**: bool: A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see [Deleting a DB Instance](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html). 
  *Amazon Aurora* 
 Not applicable. You can enable or disable deletion protection for the DB cluster. For more information, see ``CreateDBCluster``. DB instances in a DB cluster can be deleted even when deletion protection is enabled for the DB cluster.
* **Domain**: string: The Active Directory directory ID to create the DB instance in. Currently, only Db2, MySQL, Microsoft SQL Server, Oracle, and PostgreSQL DB instances can be created in an Active Directory Domain.
 For more information, see [Kerberos Authentication](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/kerberos-authentication.html) in the *Amazon RDS User Guide*.
* **DomainAuthSecretArn**: string: The ARN for the Secrets Manager secret with the credentials for the user joining the domain.
 Example: ``arn:aws:secretsmanager:region:account-number:secret:myselfmanagedADtestsecret-123456``
* **DomainDnsIps**: string[]: The IPv4 DNS IP addresses of your primary and secondary Active Directory domain controllers.
 Constraints:
  +  Two IP addresses must be provided. If there isn't a secondary domain controller, use the IP address of the primary domain controller for both entries in the list.
  
 Example: ``123.124.125.126,234.235.236.237``
* **DomainFqdn**: string: The fully qualified domain name (FQDN) of an Active Directory domain.
 Constraints:
  +  Can't be longer than 64 characters.
  
 Example: ``mymanagedADtest.mymanagedAD.mydomain``
* **DomainIAMRoleName**: string: The name of the IAM role to use when making API calls to the Directory Service.
 This setting doesn't apply to the following DB instances:
  +  Amazon Aurora (The domain is managed by the DB cluster.)
  +  RDS Custom
* **DomainOu**: string: The Active Directory organizational unit for your DB instance to join.
 Constraints:
  +  Must be in the distinguished name format.
  +  Can't be longer than 64 characters.
  
 Example: ``OU=mymanagedADtestOU,DC=mymanagedADtest,DC=mymanagedAD,DC=mydomain``
* **EnableCloudwatchLogsExports**: string[]: The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see [Publishing Database Logs to Amazon CloudWatch Logs](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch) in the *Amazon Relational Database Service User Guide*.
  *Amazon Aurora* 
 Not applicable. CloudWatch Logs exports are managed by the DB cluster. 
  *Db2* 
 Valid values: ``diag.log``, ``notify.log`` 
  *MariaDB* 
 Valid values: ``audit``, ``error``, ``general``, ``slowquery`` 
  *Microsoft SQL Server* 
 Valid values: ``agent``, ``error`` 
  *MySQL* 
 Valid values: ``audit``, ``error``, ``general``, ``slowquery`` 
  *Oracle* 
 Valid values: ``alert``, ``audit``, ``listener``, ``trace``, ``oemagent`` 
  *PostgreSQL* 
 Valid values: ``postgresql``, ``upgrade``
* **EnableIAMDatabaseAuthentication**: bool: A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.
 This property is supported for RDS for MariaDB, RDS for MySQL, and RDS for PostgreSQL. For more information, see [IAM Database Authentication for MariaDB, MySQL, and PostgreSQL](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.IAMDBAuth.html) in the *Amazon RDS User Guide.* 
  *Amazon Aurora* 
 Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.
* **EnablePerformanceInsights**: bool: Specifies whether to enable Performance Insights for the DB instance. For more information, see [Using Amazon Performance Insights](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html) in the *Amazon RDS User Guide*.
 This setting doesn't apply to RDS Custom DB instances.
* **Endpoint**: [Endpoint](#endpoint): The connection endpoint for the DB instance.
  The endpoint might not be shown for instances with the status of ``creating``.
* **Engine**: string: The name of the database engine to use for this DB instance. Not every database engine is available in every AWS Region.
 This property is required when creating a DB instance.
  You can convert an Oracle database from the non-CDB architecture to the container database (CDB) architecture by updating the ``Engine`` value in your templates from ``oracle-ee`` to ``oracle-ee-cdb`` or from ``oracle-se2`` to ``oracle-se2-cdb``. Converting to the CDB architecture requires an interruption.
  Valid Values:
  +   ``aurora-mysql`` (for Aurora MySQL DB instances)
  +   ``aurora-postgresql`` (for Aurora PostgreSQL DB instances)
  +   ``custom-oracle-ee`` (for RDS Custom for Oracle DB instances)
  +   ``custom-oracle-ee-cdb`` (for RDS Custom for Oracle DB instances)
  +   ``custom-sqlserver-ee`` (for RDS Custom for SQL Server DB instances)
  +   ``custom-sqlserver-se`` (for RDS Custom for SQL Server DB instances)
  +   ``custom-sqlserver-web`` (for RDS Custom for SQL Server DB instances)
  +   ``db2-ae`` 
  +   ``db2-se`` 
  +   ``mariadb`` 
  +   ``mysql`` 
  +   ``oracle-ee`` 
  +   ``oracle-ee-cdb`` 
  +   ``oracle-se2`` 
  +   ``oracle-se2-cdb`` 
  +   ``postgres`` 
  +   ``sqlserver-ee`` 
  +   ``sqlserver-se`` 
  +   ``sqlserver-ex`` 
  +   ``sqlserver-web``
* **EngineVersion**: string: The version number of the database engine to use.
 For a list of valid engine versions, use the ``DescribeDBEngineVersions`` action.
 The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.
  *Amazon Aurora* 
 Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.
  *Db2* 
 See [Amazon RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Db2.html#Db2.Concepts.VersionMgmt) in the *Amazon RDS User Guide.* 
  *MariaDB* 
 See [MariaDB on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt) in the *Amazon RDS User Guide.* 
  *Microsoft SQL Server* 
 See [Microsoft SQL Server Versions on Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.VersionSupport) in the *Amazon RDS User Guide.* 
  *MySQL* 
 See [MySQL on Amazon RDS Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt) in the *Amazon RDS User Guide.* 
  *Oracle* 
 See [Oracle Database Engine Release Notes](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html) in the *Amazon RDS User Guide.* 
  *PostgreSQL* 
 See [Supported PostgreSQL Database Versions](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions) in the *Amazon RDS User Guide.*
* **Iops**: int: The number of I/O operations per second (IOPS) that the database provisions. The value must be equal to or greater than 1000. 
 If you specify this property, you must follow the range of allowed ratios of your requested IOPS rate to the amount of storage that you allocate (IOPS to allocated storage). For example, you can provision an Oracle database instance with 1000 IOPS and 200 GiB of storage (a ratio of 5:1), or specify 2000 IOPS with 200 GiB of storage (a ratio of 10:1). For more information, see [Amazon RDS Provisioned IOPS Storage to Improve Performance](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/CHAP_Storage.html#USER_PIOPS) in the *Amazon RDS User Guide*.
  If you specify ``io1`` for the ``StorageType`` property, then you must also specify the ``Iops`` property.
  Constraints:
  +  For RDS for Db2, MariaDB, MySQL, Oracle, and PostgreSQL - Must be a multiple between .5 and 50 of the storage amount for the DB instance.
  +  For RDS for SQL Server - Must be a multiple between 1 and 50 of the storage amount for the DB instance.
* **KmsKeyId**: string: The ARN of the AWS KMS key that's used to encrypt the DB instance, such as ``arn:aws:kms:us-east-1:012345678910:key/abcd1234-a123-456a-a12b-a123b4cd56ef``. If you enable the StorageEncrypted property but don't specify this property, AWS CloudFormation uses the default KMS key. If you specify this property, you must set the StorageEncrypted property to true. 
 If you specify the ``SourceDBInstanceIdentifier`` property, the value is inherited from the source DB instance if the read replica is created in the same region.
 If you create an encrypted read replica in a different AWS Region, then you must specify a KMS key for the destination AWS Region. KMS encryption keys are specific to the region that they're created in, and you can't use encryption keys from one region in another region.
 If you specify the ``DBSnapshotIdentifier`` property, don't specify this property. The ``StorageEncrypted`` property value is inherited from the snapshot. If the DB instance is encrypted, the specified ``KmsKeyId`` property is also inherited from the snapshot.
 If you specify ``DBSecurityGroups``, AWS CloudFormation ignores this property. To specify both a security group and this property, you must use a VPC security group. For more information about Amazon RDS and VPC, see [Using Amazon RDS with Amazon VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.html) in the *Amazon RDS User Guide*.
  *Amazon Aurora* 
 Not applicable. The KMS key identifier is managed by the DB cluster.
* **LicenseModel**: string: License model information for this DB instance.
  Valid Values:
  +  Aurora MySQL - ``general-public-license`` 
  +  Aurora PostgreSQL - ``postgresql-license`` 
  +  RDS for Db2 - ``bring-your-own-license``. For more information about RDS for Db2 licensing, see [](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-licensing.html) in the *Amazon RDS User Guide.* 
  +  RDS for MariaDB - ``general-public-license`` 
  +  RDS for Microsoft SQL Server - ``license-included`` 
  +  RDS for MySQL - ``general-public-license`` 
  +  RDS for Oracle - ``bring-your-own-license`` or ``license-included`` 
  +  RDS for PostgreSQL - ``postgresql-license`` 
  
  If you've specified ``DBSecurityGroups`` and then you update the license model, AWS CloudFormation replaces the underlying DB instance. This will incur some interruptions to database availability.
* **ManageMasterUserPassword**: bool: Specifies whether to manage the master user password with AWS Secrets Manager.
 For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.* 
 Constraints:
  +  Can't manage the master user password with AWS Secrets Manager if ``MasterUserPassword`` is specified.
* **MasterUsername**: string: The master user name for the DB instance.
  If you specify the ``SourceDBInstanceIdentifier`` or ``DBSnapshotIdentifier`` property, don't specify this property. The value is inherited from the source DB instance or snapshot.
 When migrating a self-managed Db2 database, we recommend that you use the same master username as your self-managed Db2 instance name.
   *Amazon Aurora* 
 Not applicable. The name for the master user is managed by the DB cluster. 
  *RDS for Db2* 
 Constraints:
  +  Must be 1 to 16 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for MariaDB* 
 Constraints:
   +  Must be 1 to 16 letters or numbers.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for Microsoft SQL Server* 
 Constraints:
   +  Must be 1 to 128 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for MySQL* 
 Constraints:
   +  Must be 1 to 16 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for Oracle* 
 Constraints:
   +  Must be 1 to 30 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
  
  *RDS for PostgreSQL* 
 Constraints:
   +  Must be 1 to 63 letters or numbers.
  +  First character must be a letter.
  +  Can't be a reserved word for the chosen database engine.
* **MasterUserPassword**: string (WriteOnly): The password for the master user. The password can include any printable ASCII character except "/", """, or "@".
  *Amazon Aurora* 
 Not applicable. The password for the master user is managed by the DB cluster.
  *RDS for Db2* 
 Must contain from 8 to 255 characters.
  *RDS for MariaDB* 
 Constraints: Must contain from 8 to 41 characters.
  *RDS for Microsoft SQL Server* 
 Constraints: Must contain from 8 to 128 characters.
  *RDS for MySQL* 
 Constraints: Must contain from 8 to 41 characters.
  *RDS for Oracle* 
 Constraints: Must contain from 8 to 30 characters.
  *RDS for PostgreSQL* 
 Constraints: Must contain from 8 to 128 characters.
* **MasterUserSecret**: [MasterUserSecret](#masterusersecret): The secret managed by RDS in AWS Secrets Manager for the master user password.
 For more information, see [Password management with Secrets Manager](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-secrets-manager.html) in the *Amazon RDS User Guide.*
* **MaxAllocatedStorage**: int: The upper limit in gibibytes (GiB) to which Amazon RDS can automatically scale the storage of the DB instance.
 For more information about this setting, including limitations that apply to it, see [Managing capacity automatically with Amazon RDS storage autoscaling](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIOPS.StorageTypes.html#USER_PIOPS.Autoscaling) in the *Amazon RDS User Guide*.
 This setting doesn't apply to the following DB instances:
  +  Amazon Aurora (Storage is managed by the DB cluster.)
  +  RDS Custom
* **MonitoringInterval**: int: The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collection of Enhanced Monitoring metrics, specify 0. The default is 0.
 If ``MonitoringRoleArn`` is specified, then you must set ``MonitoringInterval`` to a value other than 0.
 This setting doesn't apply to RDS Custom.
 Valid Values: ``0, 1, 5, 10, 15, 30, 60``
* **MonitoringRoleArn**: string: The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, ``arn:aws:iam:123456789012:role/emaccess``. For information on creating a monitoring role, see [Setting Up and Enabling Enhanced Monitoring](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling) in the *Amazon RDS User Guide*.
 If ``MonitoringInterval`` is set to a value other than ``0``, then you must supply a ``MonitoringRoleArn`` value.
 This setting doesn't apply to RDS Custom DB instances.
* **MultiAZ**: bool: Specifies whether the database instance is a Multi-AZ DB instance deployment. You can't set the ``AvailabilityZone`` parameter if the ``MultiAZ`` parameter is set to true. 
  For more information, see [Multi-AZ deployments for high availability](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.html) in the *Amazon RDS User Guide*.
  *Amazon Aurora* 
 Not applicable. Amazon Aurora storage is replicated across all of the Availability Zones and doesn't require the ``MultiAZ`` option to be set.
* **NcharCharacterSetName**: string: The name of the NCHAR character set for the Oracle DB instance.
 This setting doesn't apply to RDS Custom DB instances.
* **NetworkType**: string: The network type of the DB instance.
 Valid values:
  +   ``IPV4`` 
  +   ``DUAL`` 
  
 The network type is determined by the ``DBSubnetGroup`` specified for the DB instance. A ``DBSubnetGroup`` can support only the IPv4 protocol or the IPv4 and IPv6 protocols (``DUAL``).
 For more information, see [Working with a DB instance in a VPC](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_VPC.WorkingWithRDSInstanceinaVPC.html) in the *Amazon RDS User Guide.*
* **OptionGroupName**: string: Indicates that the DB instance should be associated with the specified option group.
 Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group. Also, that option group can't be removed from a DB instance once it is associated with a DB instance.
* **PerformanceInsightsKMSKeyId**: string: The AWS KMS key identifier for encryption of Performance Insights data.
 The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.
 If you do not specify a value for ``PerformanceInsightsKMSKeyId``, then Amazon RDS uses your default KMS key. There is a default KMS key for your AWS account. Your AWS account has a different default KMS key for each AWS Region.
 For information about enabling Performance Insights, see [EnablePerformanceInsights](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-enableperformanceinsights).
* **PerformanceInsightsRetentionPeriod**: int: The number of days to retain Performance Insights data.
 This setting doesn't apply to RDS Custom DB instances.
 Valid Values:
  +   ``7`` 
  +   *month* * 31, where *month* is a number of months from 1-23. Examples: ``93`` (3 months * 31), ``341`` (11 months * 31), ``589`` (19 months * 31)
  +   ``731`` 
  
 Default: ``7`` days
 If you specify a retention period that isn't valid, such as ``94``, Amazon RDS returns an error.
* **Port**: string (WriteOnly): The port number on which the database accepts connections.
  *Amazon Aurora* 
 Not applicable. The port number is managed by the DB cluster.
  *Db2* 
 Default value: ``50000``
* **PreferredBackupWindow**: string: The daily time range during which automated backups are created if automated backups are enabled, using the ``BackupRetentionPeriod`` parameter. For more information, see [Backup Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow) in the *Amazon RDS User Guide.* 
 Constraints:
  +  Must be in the format ``hh24:mi-hh24:mi``.
  +  Must be in Universal Coordinated Time (UTC).
  +  Must not conflict with the preferred maintenance window.
  +  Must be at least 30 minutes.
  
  *Amazon Aurora* 
 Not applicable. The daily time range for creating automated backups is managed by the DB cluster.
* **PreferredMaintenanceWindow**: string: The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).
 Format: ``ddd:hh24:mi-ddd:hh24:mi`` 
 The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see [Adjusting the Preferred DB Instance Maintenance Window](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow) in the *Amazon RDS User Guide.* 
  This property applies when AWS CloudFormation initially creates the DB instance. If you use AWS CloudFormation to update the DB instance, those updates are applied immediately.
  Constraints: Minimum 30-minute window.
* **ProcessorFeatures**: [ProcessorFeature](#processorfeature)[]: The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.
 This setting doesn't apply to Amazon Aurora or RDS Custom DB instances.
* **PromotionTier**: int: The order of priority in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see [Fault Tolerance for an Aurora DB Cluster](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.AuroraHighAvailability.html#Aurora.Managing.FaultTolerance) in the *Amazon Aurora User Guide*.
 This setting doesn't apply to RDS Custom DB instances.
 Default: ``1`` 
 Valid Values: ``0 - 15``
* **PubliclyAccessible**: bool: Indicates whether the DB instance is an internet-facing instance. If you specify true, AWS CloudFormation creates an instance with a publicly resolvable DNS name, which resolves to a public IP address. If you specify false, AWS CloudFormation creates an internal instance with a DNS name that resolves to a private IP address. 
 The default behavior value depends on your VPC setup and the database subnet group. For more information, see the ``PubliclyAccessible`` parameter in the [CreateDBInstance](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_CreateDBInstance.html) in the *Amazon RDS API Reference*.
* **ReplicaMode**: string: The open mode of an Oracle read replica. For more information, see [Working with Oracle Read Replicas for Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/oracle-read-replicas.html) in the *Amazon RDS User Guide*.
 This setting is only supported in RDS for Oracle.
 Default: ``open-read-only`` 
 Valid Values: ``open-read-only`` or ``mounted``
* **RestoreTime**: string (WriteOnly): The date and time to restore from.
 Constraints:
  +  Must be a time in Universal Coordinated Time (UTC) format.
  +  Must be before the latest restorable time for the DB instance.
  +  Can't be specified if the ``UseLatestRestorableTime`` parameter is enabled.
  
 Example: ``2009-09-07T23:45:00Z``
* **SourceDBClusterIdentifier**: string: The identifier of the Multi-AZ DB cluster that will act as the source for the read replica. Each DB cluster can have up to 15 read replicas.
 Constraints:
  +  Must be the identifier of an existing Multi-AZ DB cluster.
  +  Can't be specified if the ``SourceDBInstanceIdentifier`` parameter is also specified.
  +  The specified DB cluster must have automatic backups enabled, that is, its backup retention period must be greater than 0.
  +  The source DB cluster must be in the same AWS-Region as the read replica. Cross-Region replication isn't supported.
* **SourceDBInstanceAutomatedBackupsArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the replicated automated backups from which to restore, for example, ``arn:aws:rds:us-east-1:123456789012:auto-backup:ab-L2IJCEXJP7XQ7HOJ4SIEXAMPLE``.
 This setting doesn't apply to RDS Custom.
* **SourceDBInstanceIdentifier**: string (WriteOnly): If you want to create a read replica DB instance, specify the ID of the source DB instance. Each DB instance can have a limited number of read replicas. For more information, see [Working with Read Replicas](https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_ReadRepl.html) in the *Amazon RDS User Guide*.
 For information about constraints that apply to DB instance identifiers, see [Naming constraints in Amazon RDS](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Limits.html#RDS_Limits.Constraints) in the *Amazon RDS User Guide*.
 The ``SourceDBInstanceIdentifier`` property determines whether a DB instance is a read replica. If you remove the ``SourceDBInstanceIdentifier`` property from your template and then update your stack, AWS CloudFormation promotes the Read Replica to a standalone DB instance.
   +  If you specify a source DB instance that uses VPC security groups, we recommend that you specify the ``VPCSecurityGroups`` property. If you don't specify the property, the read replica inherits the value of the ``VPCSecurityGroups`` property from the source DB when you create the replica. However, if you update the stack, AWS CloudFormation reverts the replica's ``VPCSecurityGroups`` property to the default value because it's not defined in the stack's template. This change might cause unexpected issues.
  +  Read replicas don't support deletion policies. AWS CloudFormation ignores any deletion policy that's associated with a read replica.
  +  If you specify ``SourceDBInstanceIdentifier``, don't specify the ``DBSnapshotIdentifier`` property. You can't create a read replica from a snapshot.
  +  Don't set the ``BackupRetentionPeriod``, ``DBName``, ``MasterUsername``, ``MasterUserPassword``, and ``PreferredBackupWindow`` properties. The database attributes are inherited from the source DB instance, and backups are disabled for read replicas.
  +  If the source DB instance is in a different region than the read replica, specify the source region in ``SourceRegion``, and specify an ARN for a valid DB instance in ``SourceDBInstanceIdentifier``. For more information, see [Constructing a Amazon RDS Amazon Resource Name (ARN)](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Tagging.html#USER_Tagging.ARN) in the *Amazon RDS User Guide*.
  +  For DB instances in Amazon Aurora clusters, don't specify this property. Amazon RDS automatically assigns writer and reader DB instances.
* **SourceDbiResourceId**: string (WriteOnly): The resource ID of the source DB instance from which to restore.
* **SourceRegion**: string (WriteOnly): The ID of the region that contains the source DB instance for the read replica.
* **StorageEncrypted**: bool: A value that indicates whether the DB instance is encrypted. By default, it isn't encrypted.
 If you specify the ``KmsKeyId`` property, then you must enable encryption.
 If you specify the ``SourceDBInstanceIdentifier`` property, don't specify this property. The value is inherited from the source DB instance, and if the DB instance is encrypted, the specified ``KmsKeyId`` property is used.
 If you specify ``DBSnapshotIdentifier`` property, don't specify this property. The value is inherited from the snapshot.
  *Amazon Aurora* 
 Not applicable. The encryption for DB instances is managed by the DB cluster.
* **StorageThroughput**: int: Specifies the storage throughput value for the DB instance. This setting applies only to the ``gp3`` storage type. 
 This setting doesn't apply to RDS Custom or Amazon Aurora.
* **StorageType**: string: The storage type to associate with the DB instance.
 If you specify ``io1``, ``io2``, or ``gp3``, you must also include a value for the ``Iops`` parameter.
 This setting doesn't apply to Amazon Aurora DB instances. Storage is managed by the DB cluster.
 Valid Values: ``gp2 | gp3 | io1 | io2 | standard`` 
 Default: ``io1``, if the ``Iops`` parameter is specified. Otherwise, ``gp2``.
* **Tags**: [Tag](#tag)[]: An optional array of key-value pairs to apply to this DB instance.
* **TdeCredentialArn**: string
* **TdeCredentialPassword**: string (WriteOnly)
* **Timezone**: string: The time zone of the DB instance. The time zone parameter is currently supported only by [RDS for Db2](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/db2-time-zone) and [RDS for SQL Server](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone).
* **UseDefaultProcessorFeatures**: bool (WriteOnly): Specifies whether the DB instance class of the DB instance uses its default processor features.
 This setting doesn't apply to RDS Custom DB instances.
* **UseLatestRestorableTime**: bool (WriteOnly): Specifies whether the DB instance is restored from the latest backup time. By default, the DB instance isn't restored from the latest backup time.
 Constraints:
  +  Can't be specified if the ``RestoreTime`` parameter is provided.
* **VPCSecurityGroups**: string[]: A list of the VPC security group IDs to assign to the DB instance. The list can include both the physical IDs of existing VPC security groups and references to [AWS::EC2::SecurityGroup](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html) resources created in the template.
 If you plan to update the resource, don't specify VPC security groups in a shared VPC.
  If you set ``VPCSecurityGroups``, you must not set [DBSecurityGroups](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups), and vice versa.
  You can migrate a DB instance in your stack from an RDS DB security group to a VPC security group, but keep the following in mind:
  +  You can't revert to using an RDS security group after you establish a VPC security group membership.
  +  When you migrate your DB instance to VPC security groups, if your stack update rolls back because the DB instance update fails or because an update fails in another AWS CloudFormation resource, the rollback fails because it can't revert to an RDS security group.
  +  To use the properties that are available when you use a VPC security group, you must recreate the DB instance. If you don't, AWS CloudFormation submits only the property values that are listed in the [DBSecurityGroups](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-rds-database-instance.html#cfn-rds-dbinstance-dbsecuritygroups) property.
  
  To avoid this situation, migrate your DB instance to using VPC security groups only when that is the only change in your stack template. 
  *Amazon Aurora* 
 Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster. If specified, the setting must match the DB cluster setting.

## AWS.RDS/DBParameterGroupProperties
### Properties
* **DBParameterGroupName**: string (Identifier): The name of the DB parameter group.
 Constraints:
  +  Must be 1 to 255 letters, numbers, or hyphens.
  +  First character must be a letter
  +  Can't end with a hyphen or contain two consecutive hyphens
  
 If you don't specify a value for ``DBParameterGroupName`` property, a name is automatically created for the DB parameter group.
  This value is stored as a lowercase string.
* **Description**: string (Required): Provides the customer-specified description for this DB parameter group.
* **Family**: string (Required): The DB parameter group family name. A DB parameter group can be associated with one and only one DB parameter group family, and can be applied only to a DB instance running a DB engine and engine version compatible with that DB parameter group family.
  The DB parameter group family can't be changed when updating a DB parameter group.
  To list all of the available parameter group families, use the following command:
  ``aws rds describe-db-engine-versions --query "DBEngineVersions[].DBParameterGroupFamily"`` 
 The output contains duplicates.
 For more information, see ``CreateDBParameterGroup``.
* **Parameters**: [DBParameterGroup_Parameters](#dbparametergroupparameters): An array of parameter names and values for the parameter update. At least one parameter name and value must be supplied. Subsequent arguments are optional.
 RDS for Db2 requires you to bring your own Db2 license. You must enter your IBM customer ID (``rds.ibm_customer_id``) and site number (``rds.ibm_site_id``) before starting a Db2 instance.
 For more information about DB parameters and DB parameter groups for Amazon RDS DB engines, see [Working with DB Parameter Groups](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithParamGroups.html) in the *Amazon RDS User Guide*.
 For more information about DB cluster and DB instance parameters and parameter groups for Amazon Aurora DB engines, see [Working with DB Parameter Groups and DB Cluster Parameter Groups](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_WorkingWithParamGroups.html) in the *Amazon Aurora User Guide*.
   AWS CloudFormation doesn't support specifying an apply method for each individual parameter. The default apply method for each parameter is used.
* **Tags**: [Tag](#tag)[]: An optional array of key-value pairs to apply to this DB parameter group.
   Currently, this is the only property that supports drift detection.

## AWS.RDS/DBProxyEndpointProperties
### Properties
* **DBProxyEndpointArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the DB proxy endpoint.
* **DBProxyEndpointName**: string (Required, Identifier): The identifier for the DB proxy endpoint. This name must be unique for all DB proxy endpoints owned by your AWS account in the specified AWS Region.
* **DBProxyName**: string (Required): The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
* **Endpoint**: string (ReadOnly): The endpoint that you can use to connect to the DB proxy. You include the endpoint value in the connection string for a database client application.
* **IsDefault**: bool (ReadOnly): A value that indicates whether this endpoint is the default endpoint for the associated DB proxy. Default DB proxy endpoints always have read/write capability. Other endpoints that you associate with the DB proxy can be either read/write or read-only.
* **Tags**: [TagFormat](#tagformat)[]: An optional set of key-value pairs to associate arbitrary data of your choosing with the DB proxy endpoint.
* **TargetRole**: string: A value that indicates whether the DB proxy endpoint can be used for read/write or read-only operations.
* **VpcId**: string (ReadOnly): VPC ID to associate with the new DB proxy endpoint.
* **VpcSecurityGroupIds**: string[]: VPC security group IDs to associate with the new DB proxy endpoint.
* **VpcSubnetIds**: string[] (Required): VPC subnet IDs to associate with the new DB proxy endpoint.

## AWS.RDS/DBProxyProperties
### Properties
* **Auth**: [AuthFormat](#authformat)[] (Required): The authorization mechanism that the proxy uses.
* **DBProxyArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the proxy.
* **DBProxyName**: string (Required, Identifier): The identifier for the proxy. This name must be unique for all proxies owned by your AWS account in the specified AWS Region.
* **DebugLogging**: bool: Whether the proxy includes detailed information about SQL statements in its logs.
* **Endpoint**: string (ReadOnly): The endpoint that you can use to connect to the proxy. You include the endpoint value in the connection string for a database client application.
* **EngineFamily**: string (Required): The kinds of databases that the proxy can connect to.
* **IdleClientTimeout**: int: The number of seconds that a connection to the proxy can be inactive before the proxy disconnects it.
* **RequireTLS**: bool: A Boolean parameter that specifies whether Transport Layer Security (TLS) encryption is required for connections to the proxy.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that the proxy uses to access secrets in AWS Secrets Manager.
* **Tags**: [TagFormat](#tagformat)[]: An optional set of key-value pairs to associate arbitrary data of your choosing with the proxy.
* **VpcId**: string (ReadOnly): VPC ID to associate with the new DB proxy.
* **VpcSecurityGroupIds**: string[]: VPC security group IDs to associate with the new proxy.
* **VpcSubnetIds**: string[] (Required): VPC subnet IDs to associate with the new proxy.

## AWS.RDS/DBProxyTargetGroupProperties
### Properties
* **ConnectionPoolConfigurationInfo**: [ConnectionPoolConfigurationInfoFormat](#connectionpoolconfigurationinfoformat)
* **DBClusterIdentifiers**: string[]
* **DBInstanceIdentifiers**: string[]
* **DBProxyName**: string (Required): The identifier for the proxy.
* **TargetGroupArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) representing the target group.
* **TargetGroupName**: string (Required): The identifier for the DBProxyTargetGroup

## AWS.RDS/DBSubnetGroupProperties
### Properties
* **DBSubnetGroupDescription**: string (Required): The description for the DB subnet group.
* **DBSubnetGroupName**: string (Identifier): The name for the DB subnet group. This value is stored as a lowercase string.
 Constraints: Must contain no more than 255 lowercase alphanumeric characters or hyphens. Must not be "Default".
 Example: ``mysubnetgroup``
* **SubnetIds**: string[] (Required, WriteOnly): The EC2 Subnet IDs for the DB subnet group.
* **Tags**: [Tag](#tag)[]: An optional array of key-value pairs to apply to this DB subnet group.

## AWS.RDS/EventSubscriptionProperties
### Properties
* **Enabled**: bool: A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it.
* **EventCategories**: string[]: A list of event categories for a SourceType that you want to subscribe to. You can see a list of the categories for a given SourceType in the Events topic in the Amazon RDS User Guide or by using the DescribeEventCategories action.
* **SnsTopicArn**: string (Required): The Amazon Resource Name (ARN) of the SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.
* **SourceIds**: string[]: The list of identifiers of the event sources for which events will be returned. If not specified, then all sources are included in the response. An identifier must begin with a letter and must contain only ASCII letters, digits, and hyphens; it cannot end with a hyphen or contain two consecutive hyphens.
* **SourceType**: string: The type of source that will be generating the events. For example, if you want to be notified of events generated by a DB instance, you would set this parameter to db-instance. if this value is not specified, all events are returned.
* **SubscriptionName**: string (Identifier): The name of the subscription.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.RDS/GlobalClusterProperties
### Properties
* **DeletionProtection**: bool: The deletion protection setting for the new global database. The global database can't be deleted when deletion protection is enabled.
* **Engine**: string: The name of the database engine to be used for this DB cluster. Valid Values: aurora (for MySQL 5.6-compatible Aurora), aurora-mysql (for MySQL 5.7-compatible Aurora).
If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
* **EngineVersion**: string: The version number of the database engine to use. If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.
* **GlobalClusterIdentifier**: string (Identifier): The cluster identifier of the new global database cluster. This parameter is stored as a lowercase string.
* **SourceDBClusterIdentifier**: string: The Amazon Resource Name (ARN) to use as the primary cluster of the global database. This parameter is optional. This parameter is stored as a lowercase string.
* **StorageEncrypted**: bool:  The storage encryption setting for the new global database cluster.
If you specify the SourceDBClusterIdentifier property, don't specify this property. The value is inherited from the cluster.

## AWS.RDS/IntegrationProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap)
* **CreateTime**: string (ReadOnly)
* **DataFilter**: string: The data filter for the integration.
* **Description**: string: The description of the integration.
* **IntegrationArn**: string (ReadOnly, Identifier): The ARN of the integration.
* **IntegrationName**: string: The name of the integration.
* **KMSKeyId**: string: An optional AWS Key Management System (AWS KMS) key ARN for the key used to to encrypt the integration. The resource accepts the key ID and the key ARN forms. The key ID form can be used if the KMS key is owned by te same account. If the KMS key belongs to a different account than the calling account, the full key ARN must be specified. Do not use the key alias or the key alias ARN as this will cause a false drift of the resource.
* **SourceArn**: string (Required): The Amazon Resource Name (ARN) of the Aurora DB cluster to use as the source for replication.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetArn**: string (Required): The ARN of the Redshift data warehouse to use as the target for replication.

## AWS.RDS/OptionGroupProperties
### Properties
* **EngineName**: string (Required): Indicates the name of the engine that this option group can be applied to.
* **MajorEngineVersion**: string (Required): Indicates the major engine version associated with this option group.
* **OptionConfigurations**: [OptionConfiguration](#optionconfiguration)[]: Indicates what options are available in the option group.
* **OptionGroupDescription**: string (Required): Provides a description of the option group.
* **OptionGroupName**: string (Identifier): Specifies the name of the option group.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## CertificateDetails
### Properties
* **CAIdentifier**: string (ReadOnly): The CA identifier of the CA certificate used for the DB instance's server certificate.
* **ValidTill**: string (ReadOnly): The expiration date of the DB instance’s server certificate.

## ConnectionPoolConfigurationInfoFormat
### Properties
* **ConnectionBorrowTimeout**: int: The number of seconds for a proxy to wait for a connection to become available in the connection pool.
* **InitQuery**: string: One or more SQL statements for the proxy to run when opening each new database connection.
* **MaxConnectionsPercent**: int: The maximum size of the connection pool for each target in a target group.
* **MaxIdleConnectionsPercent**: int: Controls how actively the proxy closes idle database connections in the connection pool.
* **SessionPinningFilters**: string[]: Each item in the list represents a class of SQL operations that normally cause all later statements in a session using a proxy to be pinned to the same underlying database connection.

## DBClusterParameterGroup_Parameters
### Properties

## DBClusterRole
### Properties
* **FeatureName**: string: The name of the feature associated with the AWS Identity and Access Management (IAM) role. For the list of supported feature names, see DBEngineVersion in the Amazon RDS API Reference.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that is associated with the DB cluster.

## DBInstanceRole
### Properties
* **FeatureName**: string (Required): The name of the feature associated with the AWS Identity and Access Management (IAM) role. IAM roles that are associated with a DB instance grant permission for the DB instance to access other AWS services on your behalf. For the list of supported feature names, see the ``SupportedFeatureNames`` description in [DBEngineVersion](https://docs.aws.amazon.com/AmazonRDS/latest/APIReference/API_DBEngineVersion.html) in the *Amazon RDS API Reference*.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that is associated with the DB instance.

## DBParameterGroup_Parameters
### Properties

## EncryptionContextMap
### Properties

## Endpoint
### Properties
* **Address**: string (ReadOnly): The connection endpoint for the DB cluster.
* **Port**: string (ReadOnly): The port number that will accept connections on this DB cluster.

## Endpoint
### Properties
* **Address**: string (ReadOnly): Specifies the DNS address of the DB instance.
* **HostedZoneId**: string (ReadOnly): Specifies the ID that Amazon Route 53 assigns when you create a hosted zone.
* **Port**: string (ReadOnly): Specifies the port that the database engine is listening on.

## MasterUserSecret
### Properties
* **KmsKeyId**: string: The AWS KMS key identifier that is used to encrypt the secret.
* **SecretArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the secret.

## MasterUserSecret
### Properties
* **KmsKeyId**: string: The AWS KMS key identifier that is used to encrypt the secret.
* **SecretArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the secret.

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

## ProcessorFeature
### Properties
* **Name**: string: The name of the processor feature. Valid names are ``coreCount`` and ``threadsPerCore``.
* **Value**: string: The value of a processor feature name.

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
* **SecondsBeforeTimeout**: int: The amount of time, in seconds, that Aurora Serverless v1 tries to find a scaling point to perform seamless scaling before enforcing the timeout action.
The default is 300.
* **SecondsUntilAutoPause**: int: The time, in seconds, before an Aurora DB cluster in serverless mode is paused.
* **TimeoutAction**: string: The action to take when the timeout is reached, either ForceApplyCapacityChange or RollbackCapacityChange.
ForceApplyCapacityChange sets the capacity to the specified value as soon as possible.
RollbackCapacityChange, the default, ignores the capacity change if a scaling point isn't found in the timeout period.

For more information, see Autoscaling for Aurora Serverless v1 in the Amazon Aurora User Guide.

## ServerlessV2ScalingConfiguration
### Properties
* **MaxCapacity**: int: The maximum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 40, 40.5, 41, and so on. The largest value that you can use is 128.
* **MinCapacity**: int: The minimum number of Aurora capacity units (ACUs) for a DB instance in an Aurora Serverless v2 cluster. You can specify ACU values in half-step increments, such as 8, 8.5, 9, and so on. The smallest value that you can use is 0.5.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
* **Value**: string: A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

## Tag
### Properties
* **Key**: string (Required): A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
* **Value**: string: A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

## Tag
### Properties
* **Key**: string (Required): A key is the required name of the tag. The string value can be from 1 to 128 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").
* **Value**: string: A value is the optional value of the tag. The string value can be from 1 to 256 Unicode characters in length and can't be prefixed with ``aws:`` or ``rds:``. The string can only contain only the set of Unicode letters, digits, white-space, '_', '.', ':', '/', '=', '+', '-', '@' (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-@]*)$").

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## TagFormat
### Properties
* **Key**: string
* **Value**: string

## TagFormat
### Properties
* **Key**: string
* **Value**: string

