# AWS.DocDB @ default

## Resource AWS.DocDB/DBCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDB/DBClusterProperties](#awsdocdbdbclusterproperties) (Identifier): properties of the resource

## Resource AWS.DocDB/DBClusterParameterGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDB/DBClusterParameterGroupProperties](#awsdocdbdbclusterparametergroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.DocDB/DBInstance@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDB/DBInstanceProperties](#awsdocdbdbinstanceproperties) (Required, Identifier): properties of the resource

## Resource AWS.DocDB/DBSubnetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDB/DBSubnetGroupProperties](#awsdocdbdbsubnetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.DocDB/EventSubscription@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDB/EventSubscriptionProperties](#awsdocdbeventsubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.DocDB/GlobalCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DocDB/GlobalClusterProperties](#awsdocdbglobalclusterproperties) (Required, Identifier): properties of the resource

## AWS.DocDB/DBClusterParameterGroupProperties
### Properties
* **Description**: string (Required): The description for the DB cluster parameter group.
* **Family**: string (Required): The DB cluster parameter group family name (e.g. docdb5.0).
* **Name**: string (Identifier): The name of the DB cluster parameter group. If omitted, CloudFormation generates a unique name. The name is stored as lowercase.
* **Parameters**: [DBClusterParameterGroup_Parameters](#dbclusterparametergroupparameters) (Required): An object containing key-value pairs of parameters to set for the DB cluster parameter group.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.DocDB/DBClusterProperties
### Properties
* **AvailabilityZones**: string[] (WriteOnly)
* **BackupRetentionPeriod**: int
* **ClusterResourceId**: string (ReadOnly)
* **CopyTagsToSnapshot**: bool
* **DBClusterIdentifier**: string
* **DBClusterParameterGroupName**: string
* **DBSubnetGroupName**: string
* **DeletionProtection**: bool
* **EnableCloudwatchLogsExports**: string[]
* **Endpoint**: string (ReadOnly)
* **EngineVersion**: string
* **GlobalClusterIdentifier**: string (WriteOnly)
* **Id**: string (ReadOnly, Identifier): The cluster identifier, the same as DBClusterIdentifier.
* **KmsKeyId**: string (WriteOnly)
* **ManageMasterUserPassword**: bool
* **MasterUsername**: string
* **MasterUserPassword**: string (WriteOnly)
* **MasterUserSecretKmsKeyId**: string (WriteOnly)
* **NetworkType**: string
* **Port**: int
* **PreferredBackupWindow**: string
* **PreferredMaintenanceWindow**: string
* **ReadEndpoint**: string (ReadOnly)
* **RestoreToTime**: string (WriteOnly)
* **RestoreType**: string (WriteOnly)
* **RotateMasterUserPassword**: bool (WriteOnly)
* **ServerlessV2PlatformVersion**: string (ReadOnly)
* **ServerlessV2ScalingConfiguration**: [ServerlessV2ScalingConfiguration](#serverlessv2scalingconfiguration)
* **SnapshotIdentifier**: string (WriteOnly)
* **SourceDBClusterIdentifier**: string (WriteOnly)
* **StorageEncrypted**: bool
* **StorageType**: string
* **Tags**: [Tag](#tag)[]
* **UseLatestRestorableTime**: bool (WriteOnly)
* **VpcSecurityGroupIds**: string[]

## AWS.DocDB/DBInstanceProperties
### Properties
* **AutoMinorVersionUpgrade**: bool
* **AvailabilityZone**: string
* **CACertificateIdentifier**: string
* **CertificateRotationRestart**: bool (WriteOnly)
* **DBClusterIdentifier**: string (Required)
* **DBInstanceClass**: string (Required)
* **DBInstanceIdentifier**: string
* **EnablePerformanceInsights**: bool
* **Endpoint**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier): The instance identifier, the same as DBInstanceIdentifier.
* **Port**: string (ReadOnly)
* **PreferredMaintenanceWindow**: string
* **Tags**: [Tag](#tag)[]

## AWS.DocDB/DBSubnetGroupProperties
### Properties
* **DBSubnetGroupDescription**: string (Required): The description for the subnet group.
* **DBSubnetGroupName**: string (Identifier): The name for the db subnet group. This value is stored as a lowercase string.
* **SubnetIds**: string[] (Required): One or more subnet IDs to be assigned to the db subnet group.
* **Tags**: [Tag](#tag)[]: One or more tags to be assigned to the db subnet group

## AWS.DocDB/EventSubscriptionProperties
### Properties
* **Enabled**: bool: A Boolean value; set to true to activate the subscription, set to false to create the subscription but not active it.
* **EventCategories**: string[]: A list of event categories for a SourceType that you want to subscribe to.
* **SnsTopicArn**: string (Required): The Amazon Resource Name (ARN) of the SNS topic created for event notification. Amazon SNS creates the ARN when you create a topic and subscribe to it.
* **SourceIds**: string[]: The list of identifiers of the event sources for which events are returned
* **SourceType**: string: The type of source that is generating the events.
* **SubscriptionName**: string (Identifier): The name of the subscription.

## AWS.DocDB/GlobalClusterProperties
### Properties
* **DeletionProtection**: bool: Indicates whether the global cluster has deletion protection enabled. The global cluster can't be deleted when deletion protection is enabled.
* **Engine**: string: The database engine to use for this global cluster.
* **EngineVersion**: string: The engine version to use for this global cluster.
* **GlobalClusterArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the global cluster.
* **GlobalClusterIdentifier**: string (Required, Identifier): The cluster identifier of the global cluster.
* **GlobalClusterResourceId**: string (ReadOnly): The AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed.
* **SourceDBClusterIdentifier**: string (WriteOnly): The Amazon Resource Name (ARN) to use as the primary cluster of the global cluster. You may also choose to instead specify the DBClusterIdentifier. If you provide a value for this parameter, don't specify values for the following settings because Amazon DocumentDB uses the values from the specified source DB cluster: Engine, EngineVersion, StorageEncrypted
* **StorageEncrypted**: bool: Indicates whether the global cluster has storage encryption enabled.
* **Tags**: [Tag](#tag)[]: The tags to be assigned to the Amazon DocumentDB resource.

## DBClusterParameterGroup_Parameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## ServerlessV2ScalingConfiguration
### Properties
* **MaxCapacity**: int (Required)
* **MinCapacity**: int (Required)

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

