# AWS.Glue @ default

## Resource AWS.Glue/Crawler@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/CrawlerProperties](#awsgluecrawlerproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Database@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/DatabaseProperties](#awsgluedatabaseproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Job@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/JobProperties](#awsgluejobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Registry@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/RegistryProperties](#awsglueregistryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Schema@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/SchemaProperties](#awsglueschemaproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Trigger@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/TriggerProperties](#awsgluetriggerproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/UsageProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/UsageProfileProperties](#awsglueusageprofileproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **Arguments**: [Trigger_Arguments](#triggerarguments): The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
* **CrawlerName**: string: The name of the crawler to be used with this action.
* **JobName**: string: The name of a job to be executed.
* **NotificationProperty**: [NotificationProperty](#notificationproperty): Specifies configuration properties of a job run notification.
* **SecurityConfiguration**: string: The name of the SecurityConfiguration structure to be used with this action.
* **Timeout**: int: The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.

## AWS.Glue/CrawlerProperties
### Properties
* **Classifiers**: string[]: A list of UTF-8 strings that specify the names of custom classifiers that are associated with the crawler.
* **Configuration**: string: Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior.
* **CrawlerSecurityConfiguration**: string: The name of the SecurityConfiguration structure to be used by this crawler.
* **DatabaseName**: string: The name of the database in which the crawler's output is stored.
* **Description**: string: A description of the crawler.
* **LakeFormationConfiguration**: [LakeFormationConfiguration](#lakeformationconfiguration)
* **Name**: string (Identifier): The name of the crawler.
* **RecrawlPolicy**: [RecrawlPolicy](#recrawlpolicy)
* **Role**: string (Required): The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.
* **Schedule**: [Schedule](#schedule)
* **SchemaChangePolicy**: [SchemaChangePolicy](#schemachangepolicy)
* **TablePrefix**: string: The prefix added to the names of tables that are created.
* **Tags**: [Crawler_Tags](#crawlertags): The tags to use with this crawler.
* **Targets**: [Targets](#targets) (Required)

## AWS.Glue/DatabaseProperties
### Properties
* **CatalogId**: string (Required): The AWS account ID for the account in which to create the catalog object.
* **DatabaseInput**: [DatabaseInput](#databaseinput) (Required): The metadata for the database.
* **DatabaseName**: string (Identifier): The name of the database. For hive compatibility, this is folded to lowercase when it is store.

## AWS.Glue/JobProperties
### Properties
* **AllocatedCapacity**: int: The number of capacity units that are allocated to this job.
* **Command**: [JobCommand](#jobcommand) (Required): The code that executes a job.
* **Connections**: [ConnectionsList](#connectionslist): Specifies the connections used by a job
* **DefaultArguments**: [Job_DefaultArguments](#jobdefaultarguments): The default arguments for this job, specified as name-value pairs.
* **Description**: string: A description of the job.
* **ExecutionClass**: string: Indicates whether the job is run with a standard or flexible execution class.
* **ExecutionProperty**: [ExecutionProperty](#executionproperty): The maximum number of concurrent runs that are allowed for this job.
* **GlueVersion**: string: Glue version determines the versions of Apache Spark and Python that AWS Glue supports.
* **JobMode**: string: Property description not available.
* **JobRunQueuingEnabled**: bool: Property description not available.
* **LogUri**: string: This field is reserved for future use.
* **MaintenanceWindow**: string: Property description not available.
* **MaxCapacity**: int: The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs.
* **MaxRetries**: int: The maximum number of times to retry this job after a JobRun fails
* **Name**: string (Identifier): The name you assign to the job definition
* **NonOverridableArguments**: [Job_NonOverridableArguments](#jobnonoverridablearguments): Non-overridable arguments for this job, specified as name-value pairs.
* **NotificationProperty**: [NotificationProperty](#notificationproperty): Specifies configuration properties of a notification.
* **NumberOfWorkers**: int: The number of workers of a defined workerType that are allocated when a job runs.
* **Role**: string (Required): The name or Amazon Resource Name (ARN) of the IAM role associated with this job.
* **SecurityConfiguration**: string: The name of the SecurityConfiguration structure to be used with this job.
* **Tags**: [Job_Tags](#jobtags): The tags to use with this job.
* **Timeout**: int: The maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status.
* **WorkerType**: string: TThe type of predefined worker that is allocated when a job runs.

## AWS.Glue/RegistryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name for the created Registry.
* **Description**: string: A description of the registry. If description is not provided, there will not be any default value for this.
* **Name**: string (Required): Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
* **Tags**: [Tag](#tag)[]: List of tags to tag the Registry

## AWS.Glue/SchemaProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name for the Schema.
* **CheckpointVersion**: [SchemaVersion](#schemaversion)
* **Compatibility**: string (Required): Compatibility setting for the schema.
* **DataFormat**: string (Required): Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
* **Description**: string: A description of the schema. If description is not provided, there will not be any default value for this.
* **InitialSchemaVersionId**: string (ReadOnly): Represents the version ID associated with the initial schema version.
* **Name**: string (Required): Name of the schema.
* **Registry**: [Registry](#registry)
* **SchemaDefinition**: string (WriteOnly): Definition for the initial schema version in plain-text.
* **Tags**: [Tag](#tag)[]: List of tags to tag the schema

## AWS.Glue/TriggerProperties
### Properties
* **Actions**: [Action](#action)[] (Required): The actions initiated by this trigger.
* **Description**: string: A description of this trigger.
* **EventBatchingCondition**: [EventBatchingCondition](#eventbatchingcondition): Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
* **Name**: string (Identifier): The name of the trigger.
* **Predicate**: [Predicate](#predicate): The predicate of this trigger, which defines when it will fire.
* **Schedule**: string: A cron expression used to specify the schedule.
* **StartOnCreation**: bool (WriteOnly): Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.
* **Tags**: [Trigger_Tags](#triggertags): The tags to use with this trigger.
* **Type**: string (Required): The type of trigger that this is.
* **WorkflowName**: string: The name of the workflow associated with the trigger.

## AWS.Glue/UsageProfileProperties
### Properties
* **Configuration**: [ProfileConfiguration](#profileconfiguration): UsageProfile configuration for supported service ex: (Jobs, Sessions).
* **CreatedOn**: string (ReadOnly): Creation time.
* **Description**: string: The description of the UsageProfile.
* **Name**: string (Required, Identifier): The name of the UsageProfile.
* **Tags**: [Tag](#tag)[]: The tags to be applied to this UsageProfiles.

## CatalogTarget
### Properties
* **ConnectionName**: string: The name of the connection for an Amazon S3-backed Data Catalog table to be a target of the crawl when using a Catalog connection type paired with a NETWORK Connection type.
* **DatabaseName**: string: The name of the database to be synchronized.
* **DlqEventQueueArn**: string: A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.
* **EventQueueArn**: string: A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.
* **Tables**: string[]: A list of the tables to be synchronized.

## Condition
### Properties
* **CrawlerName**: string: The name of the crawler to which this condition applies.
* **CrawlState**: string: The state of the crawler to which this condition applies.
* **JobName**: string: The name of the job whose JobRuns this condition applies to, and on which this trigger waits.
* **LogicalOperator**: string: A logical operator.
* **State**: string: The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.

## ConnectionsList
### Properties
* **Connections**: string[]: A list of connections used by the job.

## Crawler_Tags
### Properties

## Database_Parameters
### Properties

## DatabaseIdentifier
### Properties
* **CatalogId**: string: The ID of the Data Catalog in which the database resides.
* **DatabaseName**: string (Identifier): The name of the catalog database.
* **Region**: string: Region of the target database.

## DatabaseInput
### Properties
* **CreateTableDefaultPermissions**: [PrincipalPrivileges](#principalprivileges)[]: Creates a set of default permissions on the table for principals. Used by AWS Lake Formation. Not used in the normal course of AWS Glue operations.
* **Description**: string: A description of the database.
* **FederatedDatabase**: [FederatedDatabase](#federateddatabase): A FederatedDatabase structure that references an entity outside the AWS Glue Data Catalog.
* **LocationUri**: string: The location of the database (for example, an HDFS path).
* **Name**: string: The name of the database. For hive compatibility, this is folded to lowercase when it is stored.
* **Parameters**: [Database_Parameters](#databaseparameters): These key-value pairs define parameters and properties of the database.
* **TargetDatabase**: [DatabaseIdentifier](#databaseidentifier): A DatabaseIdentifier structure that describes a target database for resource linking.

## DataLakePrincipal
### Properties
* **DataLakePrincipalIdentifier**: string: An identifier for the AWS Lake Formation principal.

## DeltaTarget
### Properties
* **ConnectionName**: string: The name of the connection to use to connect to the Delta table target.
* **CreateNativeDeltaTable**: bool: Specifies whether the crawler will create native tables, to allow integration with query engines that support querying of the Delta transaction log directly.
* **DeltaTables**: string[]
* **WriteManifest**: bool: Specifies whether to write the manifest files to the Delta table path.

## DynamoDBTarget
### Properties
* **Path**: string: The name of the DynamoDB table to crawl.

## EventBatchingCondition
### Properties
* **BatchSize**: int (Required): Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
* **BatchWindow**: int: Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

## ExecutionProperty
### Properties
* **MaxConcurrentRuns**: int: The maximum number of concurrent runs allowed for the job.

## FederatedDatabase
### Properties
* **ConnectionName**: string: The name of the connection to the external metastore.
* **Identifier**: string: A unique identifier for the federated database.

## IcebergTarget
### Properties
* **ConnectionName**: string: The name of the connection to use to connect to the Iceberg target.
* **Exclusions**: string[]: A list of global patterns used to exclude from the crawl.
* **MaximumTraversalDepth**: int: The maximum depth of Amazon S3 paths that the crawler can traverse to discover the Iceberg metadata folder in your Amazon S3 path. Used to limit the crawler run time.
* **Paths**: string[]: One or more Amazon S3 paths that contains Iceberg metadata folders as s3://bucket/prefix .

## JdbcTarget
### Properties
* **ConnectionName**: string: The name of the connection to use to connect to the JDBC target.
* **EnableAdditionalMetadata**: string[]: Specify a value of RAWTYPES or COMMENTS to enable additional metadata in table responses. RAWTYPES provides the native-level datatype. COMMENTS provides comments associated with a column or table in the database.

If you do not need additional metadata, keep the field empty.
* **Exclusions**: string[]: A list of glob patterns used to exclude from the crawl. For more information, see Catalog Tables with a Crawler.
* **Path**: string: The path of the JDBC target.

## Job_DefaultArguments
### Properties

## Job_NonOverridableArguments
### Properties

## Job_Tags
### Properties

## JobCommand
### Properties
* **Name**: string (Identifier): The name of the job command
* **PythonVersion**: string: The Python version being used to execute a Python shell job.
* **Runtime**: string: Runtime is used to specify the versions of Ray, Python and additional libraries available in your environment
* **ScriptLocation**: string: Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a job

## LakeFormationConfiguration
### Properties
* **AccountId**: string: Required for cross account crawls. For same account crawls as the target data, this can be left as null.
* **UseLakeFormationCredentials**: bool: Specifies whether to use AWS Lake Formation credentials for the crawler instead of the IAM role credentials.

## MongoDBTarget
### Properties
* **ConnectionName**: string: The name of the connection to use to connect to the Amazon DocumentDB or MongoDB target.
* **Path**: string: The path of the Amazon DocumentDB or MongoDB target (database/collection).

## NotificationProperty
### Properties
* **NotifyDelayAfter**: int: It is the number of minutes to wait before sending a job run delay notification after a job run starts

## NotificationProperty
### Properties
* **NotifyDelayAfter**: int: After a job run starts, the number of minutes to wait before sending a job run delay notification

## Predicate
### Properties
* **Conditions**: [Condition](#condition)[]: A list of the conditions that determine when the trigger will fire.
* **Logical**: string: An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

## PrincipalPrivileges
### Properties
* **Permissions**: string[]: The permissions that are granted to the principal.
* **Principal**: [DataLakePrincipal](#datalakeprincipal): The principal who is granted permissions.

## ProfileConfiguration
### Properties
* **JobConfiguration**: [UsageProfile_JobConfiguration](#usageprofilejobconfiguration)
* **SessionConfiguration**: [UsageProfile_SessionConfiguration](#usageprofilesessionconfiguration)

## RecrawlPolicy
### Properties
* **RecrawlBehavior**: string: Specifies whether to crawl the entire dataset again or to crawl only folders that were added since the last crawler run. A value of CRAWL_EVERYTHING specifies crawling the entire dataset again. A value of CRAWL_NEW_FOLDERS_ONLY specifies crawling only folders that were added since the last crawler run. A value of CRAWL_EVENT_MODE specifies crawling only the changes identified by Amazon S3 events.

## Registry
### Properties
* **Arn**: string (Identifier): Amazon Resource Name for the Registry.
* **Name**: string: Name of the registry in which the schema will be created.

## S3Target
### Properties
* **ConnectionName**: string: The name of a connection which allows a job or crawler to access data in Amazon S3 within an Amazon Virtual Private Cloud environment (Amazon VPC).
* **DlqEventQueueArn**: string: A valid Amazon dead-letter SQS ARN. For example, arn:aws:sqs:region:account:deadLetterQueue.
* **EventQueueArn**: string: A valid Amazon SQS ARN. For example, arn:aws:sqs:region:account:sqs.
* **Exclusions**: string[]: A list of glob patterns used to exclude from the crawl.
* **Path**: string: The path to the Amazon S3 target.
* **SampleSize**: int: Sets the number of files in each leaf folder to be crawled when crawling sample files in a dataset. If not set, all the files are crawled. A valid value is an integer between 1 and 249.

## Schedule
### Properties
* **ScheduleExpression**: string: A cron expression used to specify the schedule. For more information, see Time-Based Schedules for Jobs and Crawlers. For example, to run something every day at 12:15 UTC, specify cron(15 12 * * ? *).

## SchemaChangePolicy
### Properties
* **DeleteBehavior**: string: The deletion behavior when the crawler finds a deleted object. A value of LOG specifies that if a table or partition is found to no longer exist, do not delete it, only log that it was found to no longer exist. A value of DELETE_FROM_DATABASE specifies that if a table or partition is found to have been removed, delete it from the database. A value of DEPRECATE_IN_DATABASE specifies that if a table has been found to no longer exist, to add a property to the table that says 'DEPRECATED' and includes a timestamp with the time of deprecation.
* **UpdateBehavior**: string: The update behavior when the crawler finds a changed schema. A value of LOG specifies that if a table or a partition already exists, and a change is detected, do not update it, only log that a change was detected. Add new tables and new partitions (including on existing tables). A value of UPDATE_IN_DATABASE specifies that if a table or partition already exists, and a change is detected, update it. Add new tables and partitions.

## SchemaVersion
### Properties
* **IsLatest**: bool: Indicates if the latest version needs to be updated.
* **VersionNumber**: int: Indicates the version number in the schema to update.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## Targets
### Properties
* **CatalogTargets**: [CatalogTarget](#catalogtarget)[]: Specifies AWS Glue Data Catalog targets.
* **DeltaTargets**: [DeltaTarget](#deltatarget)[]: Specifies an array of Delta data store targets.
* **DynamoDBTargets**: [DynamoDBTarget](#dynamodbtarget)[]: Specifies Amazon DynamoDB targets.
* **IcebergTargets**: [IcebergTarget](#icebergtarget)[]: Specifies Apache Iceberg data store targets.
* **JdbcTargets**: [JdbcTarget](#jdbctarget)[]: Specifies JDBC targets.
* **MongoDBTargets**: [MongoDBTarget](#mongodbtarget)[]: A list of Mongo DB targets.
* **S3Targets**: [S3Target](#s3target)[]: Specifies Amazon Simple Storage Service (Amazon S3) targets.

## Trigger_Arguments
### Properties

## Trigger_Tags
### Properties

## UsageProfile_JobConfiguration
### Properties

## UsageProfile_SessionConfiguration
### Properties

