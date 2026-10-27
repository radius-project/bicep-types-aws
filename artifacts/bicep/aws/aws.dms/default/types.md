# AWS.DMS @ default

## Resource AWS.DMS/DataMigration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/DataMigrationProperties](#awsdmsdatamigrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/DataProvider@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/DataProviderProperties](#awsdmsdataproviderproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/Endpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/EndpointProperties](#awsdmsendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/EventSubscription@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/EventSubscriptionProperties](#awsdmseventsubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/InstanceProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/InstanceProfileProperties](#awsdmsinstanceprofileproperties) (Identifier): properties of the resource

## Resource AWS.DMS/MigrationProject@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/MigrationProjectProperties](#awsdmsmigrationprojectproperties) (Identifier): properties of the resource

## Resource AWS.DMS/ReplicationConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/ReplicationConfigProperties](#awsdmsreplicationconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/ReplicationSubnetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/ReplicationSubnetGroupProperties](#awsdmsreplicationsubnetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/ReplicationTask@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/ReplicationTaskProperties](#awsdmsreplicationtaskproperties) (Required, Identifier): properties of the resource

## AWS.DMS/DataMigrationProperties
### Properties
* **DataMigrationArn**: string (ReadOnly, Identifier): The property describes an ARN of the data migration.
* **DataMigrationCreateTime**: string (ReadOnly): The property describes the create time of the data migration.
* **DataMigrationIdentifier**: string (WriteOnly): [DEPRECATED] This property is unused and will be ignored. Identity is managed via the resource ARN (primaryIdentifier) and Name (additionalIdentifier).
* **DataMigrationName**: string: The property describes a name to identify the data migration.
* **DataMigrationSettings**: [DataMigrationSettings](#datamigrationsettings): The property describes the settings for the data migration.
* **DataMigrationType**: string (Required): The property describes the type of migration.
* **MigrationProjectIdentifier**: string (Required): The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
* **ServiceAccessRoleArn**: string (Required): The property describes Amazon Resource Name (ARN) of the service access role.
* **SourceDataSettings**: [SourceDataSettings](#sourcedatasettings)[]: The property describes the settings for the data migration.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.DMS/DataProviderProperties
### Properties
* **DataProviderArn**: string (ReadOnly, Identifier): The data provider ARN.
* **DataProviderCreationTime**: string (ReadOnly): The data provider creation time.
* **DataProviderIdentifier**: string (WriteOnly): [DEPRECATED] This property is unused and will be ignored. Identity is managed via the resource ARN (primaryIdentifier) and Name (additionalIdentifier).
* **DataProviderName**: string: The property describes a name to identify the data provider.
* **Description**: string: The optional description of the data provider.
* **Engine**: string (Required): The property describes a data engine for the data provider.
* **ExactSettings**: bool (WriteOnly): The property describes the exact settings which can be modified
* **Settings**: [DataProvider_Settings](#dataprovidersettings): The property identifies the exact type of settings for the data provider.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Virtual**: bool: Indicates whether the data provider is virtual.

## AWS.DMS/EndpointProperties
### Properties
* **CertificateArn**: string: The Amazon Resource Name (ARN) for the certificate.
* **DatabaseName**: string: The name of the endpoint database. For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.
* **DocDbSettings**: [DocDbSettings](#docdbsettings): Settings in JSON format for the source and target DocumentDB endpoint
* **DynamoDbSettings**: [DynamoDbSettings](#dynamodbsettings): Settings in JSON format for the target Amazon DynamoDB endpoint
* **ElasticsearchSettings**: [ElasticsearchSettings](#elasticsearchsettings): Settings in JSON format for the target OpenSearch endpoint
* **EndpointArn**: string (ReadOnly, Identifier): The endpoint ARN.
* **EndpointIdentifier**: string: The database endpoint identifier. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.
* **EndpointType**: string (Required): The type of endpoint. Valid values are source and target.
* **EngineName**: string (Required): The type of engine for the endpoint, depending on the EndpointType value.
* **ExternalId**: string (ReadOnly): A value that can be used for cross-account validation.
* **ExtraConnectionAttributes**: string (WriteOnly): Additional attributes associated with the connection
* **GcpMySQLSettings**: [GcpMySQLSettings](#gcpmysqlsettings): Settings in JSON format for the source GCP MySQL endpoint
* **IbmDb2Settings**: [IbmDb2Settings](#ibmdb2settings): Settings in JSON format for the source IBM Db2 LUW endpoint
* **KafkaSettings**: [KafkaSettings](#kafkasettings): Settings in JSON format for the target Apache Kafka endpoint
* **KinesisSettings**: [KinesisSettings](#kinesissettings): Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams
* **KmsKeyId**: string: An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.
* **MicrosoftSqlServerSettings**: [MicrosoftSqlServerSettings](#microsoftsqlserversettings): Settings in JSON format for the source and target Microsoft SQL Server endpoint
* **MongoDbSettings**: [MongoDbSettings](#mongodbsettings): Settings in JSON format for the source MongoDB endpoint
* **MySqlSettings**: [MySqlSettings](#mysqlsettings): Settings in JSON format for the source and target MySQL endpoin
* **NeptuneSettings**: [NeptuneSettings](#neptunesettings): Settings in JSON format for the target Amazon Neptune endpoint
* **OracleSettings**: [OracleSettings](#oraclesettings): Settings in JSON format for the source and target Oracle endpoint
* **Password**: string (WriteOnly): The password to be used to log in to the endpoint database.
* **Port**: int: The port used by the endpoint database.
* **PostgreSqlSettings**: [PostgreSqlSettings](#postgresqlsettings): Settings in JSON format for the source and target PostgreSQL endpoint.
* **RedisSettings**: [RedisSettings](#redissettings): Settings in JSON format for the target Redis endpoint
* **RedshiftSettings**: [RedshiftSettings](#redshiftsettings): Settings in JSON format for the Amazon Redshift endpoint.
* **ResourceIdentifier**: string (WriteOnly): A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.
* **S3Settings**: [S3Settings](#s3settings): Settings in JSON format for the source and target Amazon S3 endpoint
* **ServerName**: string: The name of the server where the endpoint database resides.
* **SslMode**: string: The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.
* **SybaseSettings**: [SybaseSettings](#sybasesettings): Settings in JSON format for the source and target SAP ASE endpoint.
* **Tags**: [Tag](#tag)[]: One or more tags to be assigned to the endpoint.
* **Username**: string: The user name to be used to log in to the endpoint database.

## AWS.DMS/EventSubscriptionProperties
### Properties
* **Enabled**: bool: Indicates whether to activate the subscription. If you don't specify this property, CloudFormation activates the subscription.
* **EventCategories**: string[]: A list of event categories for a source type that you want to subscribe to. If you don't specify this property, you are notified about all event categories.
* **SnsTopicArn**: string (Required): The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification. The ARN is created by Amazon SNS when you create a topic and subscribe to it.


* **SourceIds**: string[]: A list of identifiers for which AWS DMS provides notification events.

If you don't specify a value, notifications are provided for all sources.

If you specify multiple values, they must be of the same type. For example, if you specify a database instance ID, then all of the other values must be database instance IDs.
* **SourceType**: string: The type of AWS DMS resource that generates the events. For example, if you want to be notified of events generated by a replication instance, you set this parameter to replication-instance. If this value isn't specified, all events are returned.
* **SubscriptionName**: string (Identifier): The name of the AWS DMS event notification subscription. This name must be less than 255 characters.
* **Tags**: [Tag](#tag)[]: One or more tags to be assigned to the event subscription.

## AWS.DMS/InstanceProfileProperties
### Properties
* **AvailabilityZone**: string: The property describes an availability zone of the instance profile.
* **Description**: string: The optional description of the instance profile.
* **InstanceProfileArn**: string (ReadOnly, Identifier): The property describes an ARN of the instance profile.
* **InstanceProfileCreationTime**: string (ReadOnly): The property describes a creating time of the instance profile.
* **InstanceProfileIdentifier**: string (WriteOnly): [DEPRECATED] This property is unused and will be ignored. Identity is managed via the resource ARN (primaryIdentifier) and Name (additionalIdentifier).
* **InstanceProfileName**: string: The property describes a name for the instance profile.
* **KmsKeyArn**: string: The property describes kms key arn for the instance profile.
* **NetworkType**: string: The property describes a network type for the instance profile.
* **PubliclyAccessible**: bool: The property describes the publicly accessible of the instance profile
* **SubnetGroupIdentifier**: string: The property describes a subnet group identifier for the instance profile.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **VpcSecurityGroups**: string[]: The property describes vps security groups for the instance profile.

## AWS.DMS/MigrationProjectProperties
### Properties
* **Description**: string: The optional description of the migration project.
* **InstanceProfileArn**: string (ReadOnly): The property describes an instance profile arn for the migration project. For read
* **InstanceProfileIdentifier**: string (WriteOnly): The property describes an instance profile identifier for the migration project. For create
* **InstanceProfileName**: string (ReadOnly): The property describes an instance profile name for the migration project. For read
* **MigrationProjectArn**: string (ReadOnly, Identifier): The property describes an ARN of the migration project.
* **MigrationProjectCreationTime**: string (ReadOnly): The property describes a creating time of the migration project.
* **MigrationProjectIdentifier**: string (WriteOnly): [DEPRECATED] This property is unused and will be ignored. Identity is managed via the resource ARN (primaryIdentifier) and Name (additionalIdentifier).
* **MigrationProjectName**: string: The property describes a name to identify the migration project.
* **SchemaConversionApplicationAttributes**: [MigrationProject_SchemaConversionApplicationAttributes](#migrationprojectschemaconversionapplicationattributes): The property describes schema conversion application attributes for the migration project.
* **SourceDataProviderDescriptors**: [DataProviderDescriptor](#dataproviderdescriptor)[] (ReadOnly, WriteOnly): The property describes source data provider descriptors for the migration project.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetDataProviderDescriptors**: [DataProviderDescriptor](#dataproviderdescriptor)[] (ReadOnly, WriteOnly): The property describes target data provider descriptors for the migration project.
* **TransformationRules**: string: The property describes transformation rules for the migration project.

## AWS.DMS/ReplicationConfigProperties
### Properties
* **ComputeConfig**: [ComputeConfig](#computeconfig) (Required)
* **ReplicationConfigArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Replication Config
* **ReplicationConfigIdentifier**: string (Required): A unique identifier of replication configuration
* **ReplicationSettings**: [ReplicationConfig_ReplicationSettings](#replicationconfigreplicationsettings): JSON settings for Servereless replications that are provisioned using this replication configuration
* **ReplicationType**: string (Required): The type of AWS DMS Serverless replication to provision using this replication configuration
* **ResourceIdentifier**: string (WriteOnly): A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
* **SourceEndpointArn**: string (Required): The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
* **SupplementalSettings**: [ReplicationConfig_SupplementalSettings](#replicationconfigsupplementalsettings): JSON settings for specifying supplemental data
* **TableMappings**: [ReplicationConfig_TableMappings](#replicationconfigtablemappings) (Required): JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
* **TargetEndpointArn**: string (Required): The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration

## AWS.DMS/ReplicationSubnetGroupProperties
### Properties
* **ReplicationSubnetGroupDescription**: string (Required): The description for the subnet group.
* **ReplicationSubnetGroupIdentifier**: string (Identifier): The name for the replication subnet group. This value is stored as a lowercase string.
* **SubnetIds**: string[] (Required): One or more subnet IDs to be assigned to the replication subnet group.
* **Tags**: [Tag](#tag)[]: One or more tags to be assigned to the replication subnet group

## AWS.DMS/ReplicationTaskProperties
### Properties
* **CdcStartPosition**: string: Indicates when you want a change data capture (CDC) operation to start. Use either CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start. Specifying both values results in an error.
* **CdcStartTime**: int (WriteOnly): Indicates the start time for a change data capture (CDC) operation. Use either CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start. Specifying both values results in an error.
* **CdcStopPosition**: string: Indicates when you want a change data capture (CDC) operation to stop. The value can be either server time or commit time.
* **MigrationType**: string (Required): The migration type.
* **ReplicationInstanceArn**: string (Required): The Amazon Resource Name (ARN) of a replication instance.
* **ReplicationTaskArn**: string (ReadOnly, Identifier): The ARN of the ReplicationTask. Also serves the purpise of Primary Identifier.
* **ReplicationTaskIdentifier**: string: An identifier for the replication task.
* **ReplicationTaskSettings**: string: Overall settings for the task, in JSON format
* **ResourceIdentifier**: string: A friendly name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.
* **SourceEndpointArn**: string (Required): An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.
* **TableMappings**: string (Required): The table mappings for the task, in JSON format.
* **Tags**: [Tag](#tag)[]
* **TargetEndpointArn**: string (Required): An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.
* **TaskData**: string: Supplemental information that the task requires to migrate the data for certain source and target endpoints.

## ComputeConfig
### Properties
* **AvailabilityZone**: string
* **DnsNameServers**: string
* **KmsKeyId**: string
* **MaxCapacityUnits**: int (Required)
* **MinCapacityUnits**: int
* **MultiAZ**: bool
* **PreferredMaintenanceWindow**: string
* **ReplicationSubnetGroupId**: string
* **VpcSecurityGroupIds**: string[]

## DataMigrationSettings
### Properties
* **CloudwatchLogsEnabled**: bool: The property specifies whether to enable the CloudWatch log.
* **NumberOfJobs**: int: The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
* **SelectionRules**: string: The property specifies the rules of selecting objects for data migration.

## DataProvider_Settings
### Properties
* **DocDbSettings**: [DataProvider_Settings_DocDbSettings](#dataprovidersettingsdocdbsettings): DocDbSettings property identifier.
* **IbmDb2LuwSettings**: [DataProvider_Settings_IbmDb2LuwSettings](#dataprovidersettingsibmdb2luwsettings): IbmDb2LuwSettings property identifier.
* **IbmDb2zOsSettings**: [DataProvider_Settings_IbmDb2zOsSettings](#dataprovidersettingsibmdb2zossettings): IbmDb2zOsSettings property identifier.
* **MariaDbSettings**: [DataProvider_Settings_MariaDbSettings](#dataprovidersettingsmariadbsettings): MariaDbSettings property identifier.
* **MicrosoftSqlServerSettings**: [DataProvider_Settings_MicrosoftSqlServerSettings](#dataprovidersettingsmicrosoftsqlserversettings): MicrosoftSqlServerSettings property identifier.
* **MongoDbSettings**: [DataProvider_Settings_MongoDbSettings](#dataprovidersettingsmongodbsettings): MongoDbSettings property identifier.
* **MySqlSettings**: [DataProvider_Settings_MySqlSettings](#dataprovidersettingsmysqlsettings): MySqlSettings property identifier.
* **OracleSettings**: [DataProvider_Settings_OracleSettings](#dataprovidersettingsoraclesettings): OracleSettings property identifier.
* **PostgreSqlSettings**: [DataProvider_Settings_PostgreSqlSettings](#dataprovidersettingspostgresqlsettings): PostgreSqlSettings property identifier.
* **RedshiftSettings**: [DataProvider_Settings_RedshiftSettings](#dataprovidersettingsredshiftsettings): RedshiftSettings property identifier.
* **SybaseAseSettings**: [DataProvider_Settings_SybaseAseSettings](#dataprovidersettingssybaseasesettings): SybaseAseSettings property identifier.

## DataProvider_Settings_DocDbSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string

## DataProvider_Settings_IbmDb2LuwSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **EncryptionAlgorithm**: int
* **Port**: int (Required)
* **SecurityMechanism**: int
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_IbmDb2zOsSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_MariaDbSettings
### Properties
* **CertificateArn**: string
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_MicrosoftSqlServerSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **S3AccessRoleArn**: string: The ARN for the role the application uses to access its Amazon S3 bucket.
* **S3Path**: string: The path for the Amazon S3 bucket that the application uses for accessing the user-defined schema.
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_MongoDbSettings
### Properties
* **AuthMechanism**: string
* **AuthSource**: string
* **AuthType**: string
* **CertificateArn**: string
* **DatabaseName**: string
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string

## DataProvider_Settings_MySqlSettings
### Properties
* **CertificateArn**: string
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_OracleSettings
### Properties
* **AsmServer**: string
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **SecretsManagerOracleAsmAccessRoleArn**: string
* **SecretsManagerOracleAsmSecretId**: string
* **SecretsManagerSecurityDbEncryptionAccessRoleArn**: string
* **SecretsManagerSecurityDbEncryptionSecretId**: string
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_PostgreSqlSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProvider_Settings_RedshiftSettings
### Properties
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)

## DataProvider_Settings_SybaseAseSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string
* **EncryptPassword**: bool
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: string (Required)

## DataProviderDescriptor
### Properties
* **DataProviderArn**: string
* **DataProviderIdentifier**: string
* **DataProviderName**: string
* **SecretsManagerAccessRoleArn**: string
* **SecretsManagerSecretId**: string

## DocDbSettings
### Properties
* **DocsToInvestigate**: int: Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".
* **ExtractDocId**: bool: Specifies the document ID. Use this setting when NestingLevel is set to "none"
* **NestingLevel**: string: Specifies either document or table mode.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.
* **SecretsManagerSecretId**: string (WriteOnly): The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

## DynamoDbSettings
### Properties
* **ServiceAccessRoleArn**: string: The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.

## ElasticsearchSettings
### Properties
* **EndpointUri**: string: The endpoint for the OpenSearch cluster. AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.
* **ErrorRetryDuration**: int: The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.
* **FullLoadErrorPercentage**: int: The maximum percentage of records that can fail to be written before a full load operation stops.
* **ServiceAccessRoleArn**: string: The Amazon Resource Name (ARN) used by the service to access the IAM role. The role must allow the iam:PassRole action.

## GcpMySQLSettings
### Properties
* **AfterConnectScript**: string: Specifies a script to run immediately after AWS DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
* **CleanSourceMetadataOnMismatch**: bool: Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to false.
* **DatabaseName**: string: Database name for the endpoint. For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.
* **EventsPollInterval**: int: Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
* **MaxFileSize**: int: Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
* **ParallelLoadThreads**: int: Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.
* **Password**: string (WriteOnly): Endpoint connection password.
* **Port**: int: The port used by the endpoint database.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.
* **ServerName**: string: The MySQL host name.
* **ServerTimezone**: string: Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.
* **Username**: string: Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

## IbmDb2Settings
### Properties
* **CurrentLsn**: string: For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.
* **KeepCsvFiles**: bool: If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.
* **LoadTimeout**: int: The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target. The default value is 1200 (20 minutes).
* **MaxFileSize**: int: Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.
* **MaxKBytesPerRead**: int: Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. The role must allow the iam:PassRole action. SecretsManagerSecret has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details.
* **SetDataCaptureChanges**: bool: Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.
* **WriteBufferSize**: int: The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).

## KafkaSettings
### Properties
* **Broker**: string: A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. Specify each broker location in the form broker-hostname-or-ip:port 
* **IncludeControlDetails**: bool: Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. The default is false.
* **IncludeNullAndEmpty**: bool: Include NULL and empty columns for records migrated to the endpoint. The default is false.
* **IncludePartitionValue**: bool: Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.
* **IncludeTableAlterOperations**: bool: Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is false.
* **IncludeTransactionDetails**: bool: Provides detailed transaction information from the source database. This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.
* **MessageFormat**: string: The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
* **MessageMaxBytes**: int: The maximum size in bytes for records created on the endpoint The default is 1,000,000.
* **NoHexPrefix**: bool: Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.
* **PartitionIncludeSchemaTable**: bool: Prefixes schema and table names to partition values, when the partition type is primary-key-type.
* **SaslPassword**: string (WriteOnly): The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
* **SaslUserName**: string: The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.
* **SecurityProtocol**: string: Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.
* **SslCaCertificateArn**: string: The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.
* **SslClientCertificateArn**: string: The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.
* **SslClientKeyArn**: string: The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.
* **SslClientKeyPassword**: string (WriteOnly): The password for the client private key used to securely connect to a Kafka target endpoint.
* **Topic**: string: The topic to which you migrate the data. If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.

## KinesisSettings
### Properties
* **IncludeControlDetails**: bool: Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. The default is false.
* **IncludeNullAndEmpty**: bool: Include NULL and empty columns for records migrated to the endpoint. The default is false.
* **IncludePartitionValue**: bool: Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.
* **IncludeTableAlterOperations**: bool: Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. The default is false.
* **IncludeTransactionDetails**: bool: Provides detailed transaction information from the source database.
* **MessageFormat**: string: The output format for the records created on the endpoint. The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).
* **NoHexPrefix**: bool: Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.
* **PartitionIncludeSchemaTable**: bool: Prefixes schema and table names to partition values, when the partition type is primary-key-type.
* **ServiceAccessRoleArn**: string: The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. The role must allow the iam:PassRole action.
* **StreamArn**: string: The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.

## MicrosoftSqlServerSettings
### Properties
* **BcpPacketSize**: int: The maximum size of the packets (in bytes) used to transfer data using BCP.
* **ControlTablesFileGroup**: string: Specifies a file group for the AWS DMS internal tables.
* **DatabaseName**: string: Database name for the endpoint.
* **ForceLobLookup**: bool: Forces LOB lookup on inline LOB.
* **Password**: string (WriteOnly): Endpoint connection password.
* **Port**: int: Endpoint TCP port.
* **QuerySingleAlwaysOnNode**: bool: Cleans and recreates table metadata information on the replication instance when a mismatch occurs. An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.
* **ReadBackupOnly**: bool: When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.
* **SafeguardPolicy**: string: Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details.
* **ServerName**: string: Fully qualified domain name of the endpoint. For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the Endpoint.Address field.
* **TlogAccessMode**: string: Indicates the mode used to fetch CDC data.
* **TrimSpaceInChar**: bool: Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. Setting TrimSpaceInChar does not left-trim data. The default value is true.
* **UseBcpFullLoad**: bool: Use this to attribute to transfer data for full-load operations using BCP. When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.
* **Username**: string: Endpoint connection user name.
* **UseThirdPartyBackupDevice**: bool: When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.

## MigrationProject_SchemaConversionApplicationAttributes
### Properties
* **S3BucketPath**: string
* **S3BucketRoleArn**: string

## MongoDbSettings
### Properties
* **AuthMechanism**: string: The authentication mechanism you use to access the MongoDB source endpoint.
* **AuthSource**: string: The MongoDB database name. This setting isn't used when AuthType is set to "no".
* **AuthType**: string: The authentication type you use to access the MongoDB source endpoint.
* **DatabaseName**: string: The database name on the MongoDB source endpoint.
* **DocsToInvestigate**: string: Indicates the number of documents to preview to determine the document organization. Use this setting when NestingLevel is set to "one".
* **ExtractDocId**: string: Specifies the document ID. Use this setting when NestingLevel is set to "none".
* **NestingLevel**: string: Specifies either document or table mode.
* **Password**: string (WriteOnly): The password for the user account you use to access the MongoDB source endpoint.
* **Port**: int: The port value for the MongoDB source endpoint.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.
* **ServerName**: string: The name of the server on the MongoDB source endpoint.
* **Username**: string: The user name you use to access the MongoDB source endpoint.

## MySqlSettings
### Properties
* **AfterConnectScript**: string: Specifies a script to run immediately after AWS DMS connects to the endpoint. The migration task continues running regardless if the SQL statement succeeds or fails.
* **CleanSourceMetadataOnMismatch**: bool: Cleans and recreates table metadata information on the replication instance when a mismatch occurs.
* **EventsPollInterval**: int: Specifies how often to check the binary log for new changes/events when the database is idle. The default is five seconds.
* **MaxFileSize**: int: Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.
* **ParallelLoadThreads**: int: Improves performance when loading data into the MySQL-compatible target database. Specifies how many threads to use to load the data into the MySQL-compatible target database.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.
* **ServerTimezone**: string: Specifies the time zone for the source MySQL database.
* **TargetDbType**: string: Specifies where to migrate source tables on the target, either to a single database or multiple databases.

## NeptuneSettings
### Properties
* **ErrorRetryDuration**: int: The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. The default is 250.
* **IamAuthEnabled**: bool: If you want IAM authorization enabled for this endpoint, set this parameter to true.
* **MaxFileSize**: int: The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database.
* **MaxRetryCount**: int: The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. The default is 5.
* **S3BucketFolder**: string: A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName
* **S3BucketName**: string: The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database.
* **ServiceAccessRoleArn**: string: The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. The role must allow the iam:PassRole action.

## OracleSettings
### Properties
* **AccessAlternateDirectly**: bool: Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
* **AdditionalArchivedLogDestId**: int: Set this attribute with ArchivedLogDestId in a primary/ standby setup
* **AddSupplementalLogging**: bool: Set this attribute to set up table-level supplemental logging for the Oracle database. This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.
* **AllowSelectNestedTables**: bool: Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.
* **ArchivedLogDestId**: int: Specifies the ID of the destination for the archived redo logs.
* **ArchivedLogsOnly**: bool: When this field is set to True, AWS DMS only accesses the archived redo logs
* **AsmPassword**: string (WriteOnly): For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.
* **AsmServer**: string: For an Oracle source endpoint, your ASM server address.
* **AsmUser**: string: For an Oracle source endpoint, your ASM user name.
* **CharLengthSemantics**: string: Specifies whether the length of a character column is in bytes or in characters.
* **DirectPathNoLog**: bool: When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.
* **DirectPathParallelLoad**: bool: When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y.
* **EnableHomogenousTablespace**: bool: Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.
* **ExtraArchivedLogDestIds**: int[]: Specifies the IDs of one more destinations for one or more archived redo logs.
* **FailTasksOnLobTruncation**: bool: When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize.
* **NumberDatatypeScale**: int: Specifies the number scale. You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.
* **OraclePathPrefix**: string: Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
* **ParallelAsmReadThreads**: int: Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
* **ReadAheadBlocks**: int: Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).
* **ReadTableSpaceName**: bool: When set to true, this attribute supports tablespace replication.
* **ReplacePathPrefix**: bool: Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.
* **RetryInterval**: int: Specifies the number of seconds that the system waits before resending a query.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
* **SecretsManagerOracleAsmAccessRoleArn**: string: Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).
* **SecretsManagerOracleAsmSecretId**: string: Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details.
* **SecurityDbEncryption**: string (WriteOnly): For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.
* **SecurityDbEncryptionName**: string (WriteOnly): For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.
* **SpatialDataOptionToGeoJsonFunctionName**: string: Use this attribute to convert SDO_GEOMETRY to GEOJSON format. By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead.
* **StandbyDelayTime**: int: Use this attribute to specify a time in minutes for the delay in standby sync.
* **UseAlternateFolderForOnline**: bool: Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source
* **UseBFile**: bool: Set this attribute to True to capture change data using the Binary Reader utility.
* **UseDirectPathFullLoad**: bool: Set this attribute to True to have AWS DMS use a direct path full load.
* **UseLogminerReader**: bool: Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).
* **UsePathPrefix**: string: Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

## PostgreSqlSettings
### Properties
* **AfterConnectScript**: string: For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.
* **BabelfishDatabaseName**: string: The Babelfish for Aurora PostgreSQL database name for the endpoint.
* **CaptureDdls**: bool: To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. You can later remove these artifacts.
* **DatabaseMode**: string: Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.
* **DdlArtifactsSchema**: string: The schema in which the operational DDL database artifacts are created.
* **ExecuteTimeout**: int: Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.
* **FailTasksOnLobTruncation**: bool: When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize.
* **HeartbeatEnable**: bool: The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.
* **HeartbeatFrequency**: int: Sets the WAL heartbeat frequency (in minutes).
* **HeartbeatSchema**: string: Sets the schema in which the heartbeat artifacts are created.
* **MapBooleanAsBoolean**: bool: When true, lets PostgreSQL migrate the boolean type as boolean.
* **MaxFileSize**: int: Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.
* **PluginName**: string: Specifies the plugin to use to create a replication slot.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.
* **SlotName**: string: Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.

## RedisSettings
### Properties
* **AuthPassword**: string (WriteOnly): The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.
* **AuthType**: string: The type of authentication to perform when connecting to a Redis target.
* **AuthUserName**: string: The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.
* **Port**: int: Transmission Control Protocol (TCP) port for the endpoint.
* **ServerName**: string: Fully qualified domain name of the endpoint.
* **SslCaCertificateArn**: string: The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.
* **SslSecurityProtocol**: string: The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption.

## RedshiftSettings
### Properties
* **AcceptAnyDate**: bool: A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. You can choose true or false (the default).
* **AfterConnectScript**: string: Code to run after connecting. This parameter should contain the code itself, not the name of a file containing the code.
* **BucketFolder**: string: An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.
* **BucketName**: string: The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.
* **CaseSensitiveNames**: bool: If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.
* **CompUpdate**: bool: If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty.
* **ConnectionTimeout**: int: A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.
* **DateFormat**: string: The date format that you are using.
* **EmptyAsNull**: bool: A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. A value of true sets empty CHAR and VARCHAR fields to null. The default is false.
* **EncryptionMode**: string: The type of server-side encryption that you want to use for your data.
* **ExplicitIds**: bool: This setting is only valid for a full-load migration task. Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.
* **FileTransferUploadStreams**: int: The number of threads used to upload a single file. This parameter accepts a value from 1 through 64. It defaults to 10.
* **LoadTimeout**: int: The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.
* **MapBooleanAsBoolean**: bool: When true, lets Redshift migrate the boolean type as boolean. By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.
* **MaxFileSize**: int: The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).
* **RemoveQuotes**: bool: A value that specifies to remove surrounding quotation marks from strings in the incoming data.
* **ReplaceChars**: string: A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. The default is "?".
* **ReplaceInvalidChars**: string: A list of characters that you want to replace. Use with ReplaceChars.
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.
* **ServerSideEncryptionKmsKeyId**: string (WriteOnly): The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID.
* **ServiceAccessRoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. The role must allow the iam:PassRole action.
* **TimeFormat**: string: The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'.
* **TrimBlanks**: bool: A value that specifies to remove the trailing white space characters from a VARCHAR string.
* **TruncateColumns**: bool (WriteOnly): A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.
* **WriteBufferSize**: int: The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).

## ReplicationConfig_ReplicationSettings
### Properties

## ReplicationConfig_SupplementalSettings
### Properties

## ReplicationConfig_TableMappings
### Properties

## S3Settings
### Properties
* **AddColumnName**: bool: An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file.
* **AddTrailingPaddingCharacter**: bool: Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.
* **BucketFolder**: string: An optional parameter to set a folder name in the S3 bucket.
* **BucketName**: string: The name of the S3 bucket.
* **CannedAclForObjects**: string: A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files.
* **CdcInsertsAndUpdates**: bool: A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files.
* **CdcInsertsOnly**: bool: A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.
* **CdcMaxBatchInterval**: int: Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.
* **CdcMinFileSize**: int: Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.
* **CdcPath**: string: Specifies the folder path of CDC files. For an S3 source, this setting is required if a task captures change data; otherwise, it's optional.
* **CompressionType**: string: An optional parameter. When set to GZIP it enables the service to compress the target files.
* **CsvDelimiter**: string: The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.
* **CsvNoSupValue**: string: This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format.
* **CsvNullValue**: string: An optional parameter that specifies how AWS DMS treats null values.
* **CsvRowDelimiter**: string: The delimiter used to separate rows in the .csv file for both source and target.
* **DataFormat**: string: The format of the data that you want to use for output.
* **DataPageSize**: int: The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.
* **DatePartitionDelimiter**: string: Specifies a date separating delimiter to use during folder partitioning. The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.
* **DatePartitionEnabled**: bool: When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. The default value is false.
* **DatePartitionSequence**: string: Identifies the sequence of the date format to use during folder partitioning. The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.
* **DatePartitionTimezone**: string: When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone.
* **DictPageSizeLimit**: int: The maximum size of an encoded dictionary page of a column
* **EnableStatistics**: bool: A value that enables statistics for Parquet pages and row groups.
* **EncodingType**: string: The type of encoding that you're using.
* **EncryptionMode**: string: The type of server-side encryption that you want to use for your data.
* **ExpectedBucketOwner**: string: To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.
* **ExternalTableDefinition**: string: The external table definition.
* **GlueCatalogGeneration**: bool: When true, allows AWS Glue to catalog your S3 bucket. Creating an AWS Glue catalog lets you use Athena to query your data.
* **IgnoreHeaderRows**: int: When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.
* **IncludeOpForFullLoad**: bool: A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.
* **MaxFileSize**: int: A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.
* **ParquetTimestampInMillisecond**: bool: A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.
* **ParquetVersion**: string: The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.
* **PreserveTransactions**: bool: If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath.
* **Rfc4180**: bool: For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark.
* **RowGroupLength**: int: The number of rows in a row group.
* **ServerSideEncryptionKmsKeyId**: string (WriteOnly): If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.
* **ServiceAccessRoleArn**: string: A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.
* **TimestampColumnName**: string: A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.
* **UseCsvNoSupValue**: bool: This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns.
* **UseTaskStartTimeForFullLoadTimestamp**: bool: When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target

## SourceDataSettings
### Properties
* **CDCStartPosition**: string: The property is a point in the database engine's log that defines a time where you can begin CDC.
* **CDCStartTime**: string: The property indicates the start time for a change data capture (CDC) operation. The value is server time in UTC format.
* **CDCStopTime**: string: The property indicates the stop time for a change data capture (CDC) operation. The value is server time in UTC format.
* **SlotName**: string: The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.

## SybaseSettings
### Properties
* **SecretsManagerAccessRoleArn**: string: The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret
* **SecretsManagerSecretId**: string: The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): A key is the required name of the tag.
* **Value**: string (Required): A value is the optional value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): Tag key
* **Value**: string (Required): Tag value

