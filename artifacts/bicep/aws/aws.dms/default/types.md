# AWS.DMS @ default

## Resource AWS.DMS/DataMigration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/DataMigrationProperties](#awsdmsdatamigrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/DataProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/DataProviderProperties](#awsdmsdataproviderproperties) (Required, Identifier): properties of the resource

## Resource AWS.DMS/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/InstanceProfileProperties](#awsdmsinstanceprofileproperties) (Identifier): properties of the resource

## Resource AWS.DMS/MigrationProject@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/MigrationProjectProperties](#awsdmsmigrationprojectproperties) (Identifier): properties of the resource

## Resource AWS.DMS/ReplicationConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/ReplicationConfigProperties](#awsdmsreplicationconfigproperties) (Required, Identifier): properties of the resource

## AWS.DMS/DataMigrationProperties
### Properties
* **DataMigrationArn**: string (ReadOnly, Identifier): The property describes an ARN of the data migration.
* **DataMigrationCreateTime**: string (ReadOnly): The property describes the create time of the data migration.
* **DataMigrationIdentifier**: string (WriteOnly): The property describes an ARN of the data migration.
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
* **DataProviderIdentifier**: string (WriteOnly): The property describes an identifier for the data provider. It is used for describing/deleting/modifying can be name/arn
* **DataProviderName**: string: The property describes a name to identify the data provider.
* **Description**: string: The optional description of the data provider.
* **Engine**: string (Required): The property describes a data engine for the data provider.
* **ExactSettings**: bool (WriteOnly): The property describes the exact settings which can be modified
* **Settings**: [DataProvider_Settings](#dataprovidersettings): The property identifies the exact type of settings for the data provider.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.DMS/InstanceProfileProperties
### Properties
* **AvailabilityZone**: string: The property describes an availability zone of the instance profile.
* **Description**: string: The optional description of the instance profile.
* **InstanceProfileArn**: string (ReadOnly, Identifier): The property describes an ARN of the instance profile.
* **InstanceProfileCreationTime**: string (ReadOnly): The property describes a creating time of the instance profile.
* **InstanceProfileIdentifier**: string (WriteOnly): The property describes an identifier for the instance profile. It is used for describing/deleting/modifying. Can be name/arn
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
* **InstanceProfileArn**: string: The property describes an instance profile arn for the migration project. For read
* **InstanceProfileIdentifier**: string (WriteOnly): The property describes an instance profile identifier for the migration project. For create
* **InstanceProfileName**: string: The property describes an instance profile name for the migration project. For read
* **MigrationProjectArn**: string (ReadOnly, Identifier): The property describes an ARN of the migration project.
* **MigrationProjectCreationTime**: string: The property describes a creating time of the migration project.
* **MigrationProjectIdentifier**: string (WriteOnly): The property describes an identifier for the migration project. It is used for describing/deleting/modifying can be name/arn
* **MigrationProjectName**: string: The property describes a name to identify the migration project.
* **SchemaConversionApplicationAttributes**: [MigrationProject_SchemaConversionApplicationAttributes](#migrationprojectschemaconversionapplicationattributes): The property describes schema conversion application attributes for the migration project.
* **SourceDataProviderDescriptors**: [DataProviderDescriptor](#dataproviderdescriptor)[] (WriteOnly): The property describes source data provider descriptors for the migration project.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetDataProviderDescriptors**: [DataProviderDescriptor](#dataproviderdescriptor)[] (WriteOnly): The property describes target data provider descriptors for the migration project.
* **TransformationRules**: string: The property describes transformation rules for the migration project.

## AWS.DMS/ReplicationConfigProperties
### Properties
* **ComputeConfig**: [ComputeConfig](#computeconfig) (Required)
* **ReplicationConfigArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Replication Config
* **ReplicationConfigIdentifier**: string (Required): A unique identifier of replication configuration
* **ReplicationSettings**: [ReplicationConfig_ReplicationSettings](#replicationconfigreplicationsettings): JSON settings for Servereless replications that are provisioned using this replication configuration
* **ReplicationType**: string (Required): The type of AWS DMS Serverless replication to provision using this replication configuration
* **ResourceIdentifier**: string: A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
* **SourceEndpointArn**: string (Required): The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
* **SupplementalSettings**: [ReplicationConfig_SupplementalSettings](#replicationconfigsupplementalsettings): JSON settings for specifying supplemental data
* **TableMappings**: [ReplicationConfig_TableMappings](#replicationconfigtablemappings) (Required): JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
* **TargetEndpointArn**: string (Required): The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration

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
* **CloudwatchLogsEnabled**: bool: The property specifies whether to enable the Cloudwatch log.
* **NumberOfJobs**: int: The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.
* **SelectionRules**: string: The property specifies the rules of selecting objects for data migration.

## DataProvider_DmsSslModeValue
### Properties

## DataProvider_DmsSslModeValue
### Properties

## DataProvider_DmsSslModeValue
### Properties

## DataProvider_DmsSslModeValue
### Properties

## DataProvider_DmsSslModeValue
### Properties

## DataProvider_MongoDbAuthMechanism
### Properties

## DataProvider_MongoDbAuthType
### Properties

## DataProvider_MongoDbSslModeValue
### Properties

## DataProvider_MongoDbSslModeValue
### Properties

## DataProvider_Settings
### Properties
* **DocDbSettings**: [DataProvider_Settings_DocDbSettings](#dataprovidersettingsdocdbsettings): DocDbSettings property identifier.
* **MariaDbSettings**: [DataProvider_Settings_MariaDbSettings](#dataprovidersettingsmariadbsettings): MariaDbSettings property identifier.
* **MicrosoftSqlServerSettings**: [DataProvider_Settings_MicrosoftSqlServerSettings](#dataprovidersettingsmicrosoftsqlserversettings): MicrosoftSqlServerSettings property identifier.
* **MongoDbSettings**: [DataProvider_Settings_MongoDbSettings](#dataprovidersettingsmongodbsettings): MongoDbSettings property identifier.
* **MySqlSettings**: [DataProvider_Settings_MySqlSettings](#dataprovidersettingsmysqlsettings): MySqlSettings property identifier.
* **OracleSettings**: [DataProvider_Settings_OracleSettings](#dataprovidersettingsoraclesettings): OracleSettings property identifier.
* **PostgreSqlSettings**: [DataProvider_Settings_PostgreSqlSettings](#dataprovidersettingspostgresqlsettings): PostgreSqlSettings property identifier.
* **RedshiftSettings**: [DataProvider_Settings_RedshiftSettings](#dataprovidersettingsredshiftsettings): RedshiftSettings property identifier.

## DataProvider_Settings_DocDbSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: [DataProvider_MongoDbSslModeValue](#dataprovidermongodbsslmodevalue)

## DataProvider_Settings_MariaDbSettings
### Properties
* **CertificateArn**: string
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: [DataProvider_DmsSslModeValue](#dataproviderdmssslmodevalue) (Required)

## DataProvider_Settings_MicrosoftSqlServerSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: [DataProvider_DmsSslModeValue](#dataproviderdmssslmodevalue) (Required)

## DataProvider_Settings_MongoDbSettings
### Properties
* **AuthMechanism**: [DataProvider_MongoDbAuthMechanism](#dataprovidermongodbauthmechanism)
* **AuthSource**: string
* **AuthType**: [DataProvider_MongoDbAuthType](#dataprovidermongodbauthtype)
* **CertificateArn**: string
* **DatabaseName**: string
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: [DataProvider_MongoDbSslModeValue](#dataprovidermongodbsslmodevalue)

## DataProvider_Settings_MySqlSettings
### Properties
* **CertificateArn**: string
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: [DataProvider_DmsSslModeValue](#dataproviderdmssslmodevalue) (Required)

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
* **SslMode**: [DataProvider_DmsSslModeValue](#dataproviderdmssslmodevalue) (Required)

## DataProvider_Settings_PostgreSqlSettings
### Properties
* **CertificateArn**: string
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)
* **SslMode**: [DataProvider_DmsSslModeValue](#dataproviderdmssslmodevalue) (Required)

## DataProvider_Settings_RedshiftSettings
### Properties
* **DatabaseName**: string (Required)
* **Port**: int (Required)
* **ServerName**: string (Required)

## DataProviderDescriptor
### Properties
* **DataProviderArn**: string
* **DataProviderIdentifier**: string
* **DataProviderName**: string
* **SecretsManagerAccessRoleArn**: string
* **SecretsManagerSecretId**: string

## MigrationProject_SchemaConversionApplicationAttributes
### Properties
* **S3BucketPath**: string
* **S3BucketRoleArn**: string

## ReplicationConfig_ReplicationSettings
### Properties

## ReplicationConfig_SupplementalSettings
### Properties

## ReplicationConfig_TableMappings
### Properties

## SourceDataSettings
### Properties
* **CDCStartPosition**: string: The property is a point in the database engine's log that defines a time where you can begin CDC.
* **CDCStartTime**: string: The property indicates the start time for a change data capture (CDC) operation. The value is server time in UTC format.
* **CDCStopTime**: string: The property indicates the stop time for a change data capture (CDC) operation. The value is server time in UTC format.
* **SlotName**: string: The property sets the name of a previously created logical replication slot for a change data capture (CDC) load of the source instance.

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

