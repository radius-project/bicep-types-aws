# AWS.Athena @ default

## Resource AWS.Athena/DataCatalog@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Athena/DataCatalogProperties](#awsathenadatacatalogproperties) (Required): properties of the resource

## Resource AWS.Athena/NamedQuery@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Athena/NamedQueryProperties](#awsathenanamedqueryproperties) (Required): properties of the resource

## Resource AWS.Athena/PreparedStatement@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Athena/PreparedStatementProperties](#awsathenapreparedstatementproperties) (Required): properties of the resource

## Resource AWS.Athena/WorkGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Athena/WorkGroupProperties](#awsathenaworkgroupproperties) (Required): properties of the resource

## AWS.Athena/DataCatalogProperties
### Properties
* **Description**: string: A description of the data catalog to be created. 
* **Name**: string (Required): The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters. 
* **Parameters**: [DataCatalog_Parameters](#datacatalogparameters): Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type. 
* **Tags**: [Tags](#tags): A list of comma separated tags to add to the data catalog that is created. 
* **Type**: string (Required): The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore. 

## DataCatalog_Parameters
### Properties

## Tags
### Properties

## AWS.Athena/NamedQueryProperties
### Properties
* **Database**: string (Required): The database to which the query belongs.
* **Description**: string: The query description.
* **Name**: string: The query name.
* **NamedQueryId**: string (ReadOnly): The unique ID of the query.
* **QueryString**: string (Required): The contents of the query with all query statements.
* **WorkGroup**: string: The name of the workgroup that contains the named query.

## AWS.Athena/PreparedStatementProperties
### Properties
* **Description**: string: The description of the prepared statement.
* **QueryStatement**: string (Required): The query string for the prepared statement.
* **StatementName**: string (Required): The name of the prepared statement.
* **WorkGroup**: string (Required): The name of the workgroup to which the prepared statement belongs.

## AWS.Athena/WorkGroupProperties
### Properties
* **CreationTime**: string (ReadOnly): The date and time the workgroup was created.
* **Description**: string: The workgroup description.
* **Name**: string (Required): The workGroup name.
* **RecursiveDeleteOption**: bool: The option to delete the workgroup and its contents even if the workgroup contains any named queries.
* **State**: string: The state of the workgroup: ENABLED or DISABLED.
* **Tags**: [Tags](#tags): One or more tags, separated by commas, that you want to attach to the workgroup as you create it
* **WorkGroupConfiguration**: [WorkGroupConfiguration](#workgroupconfiguration): The workgroup configuration
* **WorkGroupConfigurationUpdates**: [WorkGroupConfigurationUpdates](#workgroupconfigurationupdates) (WriteOnly): The workgroup configuration update object

## Tags
### Properties

## WorkGroupConfiguration
### Properties
* **BytesScannedCutoffPerQuery**: [BytesScannedCutoffPerQuery](#bytesscannedcutoffperquery)
* **EnforceWorkGroupConfiguration**: [EnforceWorkGroupConfiguration](#enforceworkgroupconfiguration)
* **EngineVersion**: [EngineVersion](#engineversion)
* **PublishCloudWatchMetricsEnabled**: [PublishCloudWatchMetricsEnabled](#publishcloudwatchmetricsenabled)
* **RequesterPaysEnabled**: [RequesterPaysEnabled](#requesterpaysenabled)
* **ResultConfiguration**: [ResultConfiguration](#resultconfiguration)

## BytesScannedCutoffPerQuery
### Properties

## EnforceWorkGroupConfiguration
### Properties

## EngineVersion
### Properties
* **EffectiveEngineVersion**: [EffectiveEngineVersion](#effectiveengineversion) (ReadOnly)
* **SelectedEngineVersion**: [SelectedEngineVersion](#selectedengineversion)

## EffectiveEngineVersion
### Properties

## SelectedEngineVersion
### Properties

## PublishCloudWatchMetricsEnabled
### Properties

## RequesterPaysEnabled
### Properties

## ResultConfiguration
### Properties
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **OutputLocation**: [OutputLocation](#outputlocation)

## EncryptionConfiguration
### Properties
* **EncryptionOption**: [EncryptionOption](#encryptionoption) (Required)
* **KmsKey**: [KmsKey](#kmskey)

## EncryptionOption
### Properties

## KmsKey
### Properties

## OutputLocation
### Properties

## WorkGroupConfigurationUpdates
### Properties
* **BytesScannedCutoffPerQuery**: [BytesScannedCutoffPerQuery](#bytesscannedcutoffperquery)
* **EnforceWorkGroupConfiguration**: [EnforceWorkGroupConfiguration](#enforceworkgroupconfiguration)
* **EngineVersion**: [EngineVersion](#engineversion)
* **PublishCloudWatchMetricsEnabled**: [PublishCloudWatchMetricsEnabled](#publishcloudwatchmetricsenabled)
* **RemoveBytesScannedCutoffPerQuery**: [RemoveBytesScannedCutoffPerQuery](#removebytesscannedcutoffperquery)
* **RequesterPaysEnabled**: [RequesterPaysEnabled](#requesterpaysenabled)
* **ResultConfigurationUpdates**: [ResultConfigurationUpdates](#resultconfigurationupdates)

## RemoveBytesScannedCutoffPerQuery
### Properties

## ResultConfigurationUpdates
### Properties
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **OutputLocation**: [OutputLocation](#outputlocation)
* **RemoveEncryptionConfiguration**: [RemoveEncryptionConfiguration](#removeencryptionconfiguration)
* **RemoveOutputLocation**: [RemoveOutputLocation](#removeoutputlocation)

## RemoveEncryptionConfiguration
### Properties

## RemoveOutputLocation
### Properties

