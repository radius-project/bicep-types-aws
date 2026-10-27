# AWS.Athena @ default

## Resource AWS.Athena/CapacityReservation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Athena/CapacityReservationProperties](#awsathenacapacityreservationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Athena/DataCatalog@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Athena/DataCatalogProperties](#awsathenadatacatalogproperties) (Required, Identifier): properties of the resource

## Resource AWS.Athena/PreparedStatement@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Athena/PreparedStatementProperties](#awsathenapreparedstatementproperties) (Required, Identifier): properties of the resource

## Resource AWS.Athena/WorkGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Athena/WorkGroupProperties](#awsathenaworkgroupproperties) (Required, Identifier): properties of the resource

## AclConfiguration
### Properties
* **S3AclOption**: string (Required)

## AWS.Athena/CapacityReservationProperties
### Properties
* **AllocatedDpus**: int (ReadOnly): The number of DPUs Athena has provisioned and allocated for the reservation
* **Arn**: string (ReadOnly, Identifier)
* **CapacityAssignmentConfiguration**: [CapacityAssignmentConfiguration](#capacityassignmentconfiguration)
* **CreationTime**: string (ReadOnly): The date and time the reservation was created.
* **LastSuccessfulAllocationTime**: string (ReadOnly): The timestamp when the last successful allocated was made
* **Name**: string (Required): The reservation name.
* **Status**: string (ReadOnly): The status of the reservation.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetDpus**: int (Required): The number of DPUs to request to be allocated to the reservation.

## AWS.Athena/DataCatalogProperties
### Properties
* **ConnectionType**: string: The type of connection for a FEDERATED data catalog
* **Description**: string: A description of the data catalog to be created. 
* **Error**: string: Text of the error that occurred during data catalog creation or deletion.
* **Name**: string (Required, Identifier): The name of the data catalog to create. The catalog name must be unique for the AWS account and can use a maximum of 128 alphanumeric, underscore, at sign, or hyphen characters. 
* **Parameters**: [DataCatalog_Parameters](#datacatalogparameters): Specifies the Lambda function or functions to use for creating the data catalog. This is a mapping whose values depend on the catalog type. 
* **Status**: string: The status of the creation or deletion of the data catalog. LAMBDA, GLUE, and HIVE data catalog types are created synchronously. Their status is either CREATE_COMPLETE or CREATE_FAILED. The FEDERATED data catalog type is created asynchronously.
* **Tags**: [Tag](#tag)[]: A list of comma separated tags to add to the data catalog that is created. 
* **Type**: string (Required): The type of data catalog to create: LAMBDA for a federated catalog, GLUE for AWS Glue Catalog, or HIVE for an external hive metastore. FEDERATED is a federated catalog for which Athena creates the connection and the Lambda function for you based on the parameters that you pass.

## AWS.Athena/PreparedStatementProperties
### Properties
* **Description**: string: The description of the prepared statement.
* **QueryStatement**: string (Required): The query string for the prepared statement.
* **StatementName**: string (Required, Identifier): The name of the prepared statement.
* **WorkGroup**: string (Required, Identifier): The name of the workgroup to which the prepared statement belongs.

## AWS.Athena/WorkGroupProperties
### Properties
* **CreationTime**: string (ReadOnly): The date and time the workgroup was created.
* **Description**: string: The workgroup description.
* **Name**: string (Required, Identifier): The workGroup name.
* **RecursiveDeleteOption**: bool (WriteOnly): The option to delete the workgroup and its contents even if the workgroup contains any named queries.
* **State**: string: The state of the workgroup: ENABLED or DISABLED.
* **Tags**: [Tag](#tag)[]: One or more tags, separated by commas, that you want to attach to the workgroup as you create it
* **WorkGroupConfiguration**: [WorkGroupConfiguration](#workgroupconfiguration): The workgroup configuration
* **WorkGroupConfigurationUpdates**: [WorkGroupConfigurationUpdates](#workgroupconfigurationupdates) (WriteOnly): The workgroup configuration update object

## CapacityAssignment
### Properties
* **WorkgroupNames**: string[] (Required)

## CapacityAssignmentConfiguration
### Properties
* **CapacityAssignments**: [CapacityAssignment](#capacityassignment)[] (Required)

## Classification
### Properties
* **Name**: string (Identifier): The name of the configuration classification.
* **Properties**: [WorkGroup_Properties](#workgroupproperties): A set of properties specified within a configuration classification.

## CloudWatchLoggingConfiguration
### Properties
* **Enabled**: bool: Enables CloudWatch logging.
* **LogGroup**: string: The name of the log group in Amazon CloudWatch Logs where you want to publish your logs.
* **LogStreamNamePrefix**: string: Prefix for the CloudWatch log stream name.
* **LogTypes**: [WorkGroup_LogTypes](#workgrouplogtypes): The types of logs that you want to publish to CloudWatch.

## CustomerContentEncryptionConfiguration
### Properties
* **KmsKey**: string (Required)

## DataCatalog_Parameters
### Properties

## EncryptionConfiguration
### Properties
* **EncryptionOption**: string (Required)
* **KmsKey**: string

## EngineConfiguration
### Properties
* **AdditionalConfigs**: [WorkGroup_AdditionalConfigs](#workgroupadditionalconfigs) (WriteOnly): Contains additional notebook engine MAP<string, string> parameter mappings in the form of key-value pairs. To specify an Athena notebook that the Jupyter server will download and serve, specify a value for the StartSessionRequest$NotebookVersion field, and then add a key named NotebookId to AdditionalConfigs that has the value of the Athena notebook ID.
* **Classifications**: [Classification](#classification)[]: The configuration classifications that can be specified for the engine.
* **CoordinatorDpuSize**: int (WriteOnly): The number of DPUs to use for the coordinator. A coordinator is a special executor that orchestrates processing work and manages other executors in a notebook session. The default is 1.
* **DefaultExecutorDpuSize**: int (WriteOnly): The default number of DPUs to use for executors. An executor is the smallest unit of compute that a notebook session can request from Athena. The default is 1.
* **MaxConcurrentDpus**: int (WriteOnly): The maximum number of DPUs that can run concurrently.
* **SparkProperties**: [WorkGroup_SparkProperties](#workgroupsparkproperties) (WriteOnly): Specifies custom jar files and Spark properties for use cases like cluster encryption, table formats, and general Spark tuning.

## EngineVersion
### Properties
* **EffectiveEngineVersion**: string (ReadOnly)
* **SelectedEngineVersion**: string

## ManagedLoggingConfiguration
### Properties
* **Enabled**: bool: Enables managed log persistence.
* **KmsKey**: string: The KMS key ARN to encrypt the logs stored in managed log persistence.

## ManagedQueryResultsConfiguration
### Properties
* **Enabled**: bool
* **EncryptionConfiguration**: [ManagedStorageEncryptionConfiguration](#managedstorageencryptionconfiguration)

## ManagedStorageEncryptionConfiguration
### Properties
* **KmsKey**: string

## MonitoringConfiguration
### Properties
* **CloudWatchLoggingConfiguration**: [CloudWatchLoggingConfiguration](#cloudwatchloggingconfiguration)
* **ManagedLoggingConfiguration**: [ManagedLoggingConfiguration](#managedloggingconfiguration)
* **S3LoggingConfiguration**: [S3LoggingConfiguration](#s3loggingconfiguration)

## ResultConfiguration
### Properties
* **AclConfiguration**: [AclConfiguration](#aclconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ExpectedBucketOwner**: string
* **OutputLocation**: string

## ResultConfigurationUpdates
### Properties
* **AclConfiguration**: [AclConfiguration](#aclconfiguration)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **ExpectedBucketOwner**: string
* **OutputLocation**: string
* **RemoveAclConfiguration**: bool
* **RemoveEncryptionConfiguration**: bool
* **RemoveExpectedBucketOwner**: bool
* **RemoveOutputLocation**: bool

## S3LoggingConfiguration
### Properties
* **Enabled**: bool: Enables S3 log delivery.
* **KmsKey**: string: The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
* **LogLocation**: string: The Amazon S3 destination URI for log publishing.

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
* **Key**: string (Required)
* **Value**: string (Required)

## WorkGroup_AdditionalConfigs
### Properties

## WorkGroup_LogTypes
### Properties

## WorkGroup_Properties
### Properties

## WorkGroup_SparkProperties
### Properties

## WorkGroupConfiguration
### Properties
* **AdditionalConfiguration**: string (WriteOnly)
* **BytesScannedCutoffPerQuery**: int
* **CustomerContentEncryptionConfiguration**: [CustomerContentEncryptionConfiguration](#customercontentencryptionconfiguration)
* **EnforceWorkGroupConfiguration**: bool
* **EngineConfiguration**: [EngineConfiguration](#engineconfiguration)
* **EngineVersion**: [EngineVersion](#engineversion)
* **ExecutionRole**: string
* **ManagedQueryResultsConfiguration**: [ManagedQueryResultsConfiguration](#managedqueryresultsconfiguration)
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)
* **PublishCloudWatchMetricsEnabled**: bool
* **RequesterPaysEnabled**: bool
* **ResultConfiguration**: [ResultConfiguration](#resultconfiguration)

## WorkGroupConfigurationUpdates
### Properties
* **AdditionalConfiguration**: string
* **BytesScannedCutoffPerQuery**: int
* **CustomerContentEncryptionConfiguration**: [CustomerContentEncryptionConfiguration](#customercontentencryptionconfiguration)
* **EnforceWorkGroupConfiguration**: bool
* **EngineConfiguration**: [EngineConfiguration](#engineconfiguration)
* **EngineVersion**: [EngineVersion](#engineversion)
* **ExecutionRole**: string
* **ManagedQueryResultsConfiguration**: [ManagedQueryResultsConfiguration](#managedqueryresultsconfiguration)
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration)
* **PublishCloudWatchMetricsEnabled**: bool
* **RemoveBytesScannedCutoffPerQuery**: bool
* **RemoveCustomerContentEncryptionConfiguration**: bool
* **RequesterPaysEnabled**: bool
* **ResultConfigurationUpdates**: [ResultConfigurationUpdates](#resultconfigurationupdates)

