# AWS.DMS @ default

## Resource AWS.DMS/DataProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/DataProviderProperties](#awsdmsdataproviderproperties) (Required): properties of the resource

## Resource AWS.DMS/InstanceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/InstanceProfileProperties](#awsdmsinstanceprofileproperties): properties of the resource

## Resource AWS.DMS/MigrationProject@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/MigrationProjectProperties](#awsdmsmigrationprojectproperties): properties of the resource

## Resource AWS.DMS/ReplicationConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DMS/ReplicationConfigProperties](#awsdmsreplicationconfigproperties): properties of the resource

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

## DataProvider_Settings
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

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

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

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

## MigrationProject_SchemaConversionApplicationAttributes
### Properties
* **S3BucketPath**: string
* **S3BucketRoleArn**: string

## DataProviderDescriptor
### Properties
* **DataProviderArn**: string
* **DataProviderIdentifier**: string
* **DataProviderName**: string
* **SecretsManagerAccessRoleArn**: string
* **SecretsManagerSecretId**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, , and -.

## AWS.DMS/ReplicationConfigProperties
### Properties
* **ComputeConfig**: [ComputeConfig](#computeconfig)
* **ReplicationConfigArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Replication Config
* **ReplicationConfigIdentifier**: string: A unique identifier of replication configuration
* **ReplicationSettings**: [ReplicationConfig_ReplicationSettings](#replicationconfigreplicationsettings): JSON settings for Servereless replications that are provisioned using this replication configuration
* **ReplicationType**: string: The type of AWS DMS Serverless replication to provision using this replication configuration
* **ResourceIdentifier**: string: A unique value or name that you get set for a given resource that can be used to construct an Amazon Resource Name (ARN) for that resource
* **SourceEndpointArn**: string: The Amazon Resource Name (ARN) of the source endpoint for this AWS DMS Serverless replication configuration
* **SupplementalSettings**: [ReplicationConfig_SupplementalSettings](#replicationconfigsupplementalsettings): JSON settings for specifying supplemental data
* **TableMappings**: [ReplicationConfig_TableMappings](#replicationconfigtablemappings): JSON table mappings for AWS DMS Serverless replications that are provisioned using this replication configuration
* **Tags**: [Tag](#tag)[]: <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the dataset.</p>
* **TargetEndpointArn**: string: The Amazon Resource Name (ARN) of the target endpoint for this AWS DMS Serverless replication configuration

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

## ReplicationConfig_ReplicationSettings
### Properties

## ReplicationConfig_SupplementalSettings
### Properties

## ReplicationConfig_TableMappings
### Properties

## Tag
### Properties
* **Key**: string (Required): <p>Tag key.</p>
* **Value**: string (Required): <p>Tag value.</p>

