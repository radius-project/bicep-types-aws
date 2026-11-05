# AWS.Timestream @ default

## Resource AWS.Timestream/Database@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/DatabaseProperties](#awstimestreamdatabaseproperties) (Identifier): properties of the resource

## Resource AWS.Timestream/InfluxDBCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/InfluxDBClusterProperties](#awstimestreaminfluxdbclusterproperties) (Identifier): properties of the resource

## Resource AWS.Timestream/InfluxDBInstance@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/InfluxDBInstanceProperties](#awstimestreaminfluxdbinstanceproperties) (Identifier): properties of the resource

## Resource AWS.Timestream/InfluxDBParameterGroup@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/InfluxDBParameterGroupProperties](#awstimestreaminfluxdbparametergroupproperties) (Identifier): properties of the resource

## Resource AWS.Timestream/ScheduledQuery@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/ScheduledQueryProperties](#awstimestreamscheduledqueryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Timestream/Table@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Timestream/TableProperties](#awstimestreamtableproperties) (Required, Identifier): properties of the resource

## AWS.Timestream/DatabaseProperties
### Properties
* **Arn**: string (ReadOnly)
* **DatabaseName**: string (Identifier): The name for the database. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the database name.
* **KmsKeyId**: string: The KMS key for the database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Timestream/InfluxDBClusterProperties
### Properties
* **AllocatedStorage**: int: The allocated storage for the InfluxDB cluster.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is associated with the InfluxDB cluster.
* **Bucket**: string (WriteOnly): The bucket for the InfluxDB cluster.
* **DbInstanceType**: string: The compute instance of the InfluxDB cluster.
* **DbParameterGroupIdentifier**: string: The name of an existing InfluxDB parameter group.
* **DbStorageType**: string: The storage type of the InfluxDB cluster.
* **DeploymentType**: string: Deployment type of the InfluxDB cluster.
* **EffectiveDbParameterGroupIdentifier**: string (ReadOnly): The parameter group actually applied to the InfluxDB cluster. When the service applies optimized defaults it creates a system-managed parameter group and this field reflects that effective parameter group, while DbParameterGroupIdentifier continues to reflect the customer-provided parameter group. When no service-managed parameter group is applied, this equals DbParameterGroupIdentifier.
* **Endpoint**: string (ReadOnly): The connection endpoint for the InfluxDB cluster.
* **EngineType**: string (ReadOnly): The engine type for the InfluxDB cluster.
* **FailoverMode**: string: Failover mode of the InfluxDB cluster.
* **Id**: string (ReadOnly, Identifier): The service generated unique identifier for InfluxDB cluster.
* **InfluxAuthParametersSecretArn**: string (ReadOnly): The Auth parameters secret Amazon Resource name (ARN) that is associated with the InfluxDB cluster.
* **KmsKeyId**: string: The customer managed key used to encrypt data in the InfluxDB cluster.
* **LogDeliveryConfiguration**: [InfluxDBCluster_LogDeliveryConfiguration](#influxdbclusterlogdeliveryconfiguration): Configuration for sending logs to customer account from the InfluxDB cluster.
* **MaintenanceSchedule**: [MaintenanceSchedule](#maintenanceschedule): The maintenance schedule for the InfluxDB cluster.
* **MemberCount**: int (ReadOnly): The number of DB instances that belong to the InfluxDB cluster.
* **MemberModeCounts**: [MemberModeCount](#membermodecount)[] (ReadOnly): DB cluster member counts grouped by instance mode.
* **Name**: string: The unique name that is associated with the InfluxDB cluster.
* **NetworkType**: string: Network type of the InfluxDB cluster.
* **NextMaintenanceTime**: string (ReadOnly): The timestamp of the next scheduled maintenance event.
* **Organization**: string (WriteOnly): The organization for the InfluxDB cluster.
* **Password**: string (WriteOnly): The password for the InfluxDB cluster.
* **Port**: int: The port number on which InfluxDB accepts connections.
* **PubliclyAccessible**: bool: Attach a public IP to the customer ENI.
* **ReaderEndpoint**: string (ReadOnly): The reader endpoint for the InfluxDB cluster.
* **Status**: string (ReadOnly): Status of the InfluxDB cluster.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this DB cluster.
* **Username**: string (WriteOnly): The username for the InfluxDB cluster.
* **VpcSecurityGroupIds**: string[]: A list of Amazon EC2 VPC security groups to associate with this InfluxDB cluster.
* **VpcSubnetIds**: string[]: A list of EC2 subnet IDs for this InfluxDB cluster.

## AWS.Timestream/InfluxDBInstanceProperties
### Properties
* **AllocatedStorage**: int: The allocated storage for the InfluxDB instance.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is associated with the InfluxDB instance.
* **AvailabilityZone**: string (ReadOnly): The Availability Zone (AZ) where the InfluxDB instance is created.
* **Bucket**: string (WriteOnly): The bucket for the InfluxDB instance.
* **DbClusterId**: string (ReadOnly): The service generated unique identifier of the InfluxDB cluster containing this instance.
* **DbInstanceType**: string: The compute instance of the InfluxDB instance.
* **DbParameterGroupIdentifier**: string: The name of an existing InfluxDB parameter group.
* **DbStorageType**: string: The storage type of the InfluxDB instance.
* **DeploymentType**: string: Deployment type of the InfluxDB Instance.
* **Endpoint**: string (ReadOnly): The connection endpoint for the InfluxDB instance.
* **Id**: string (ReadOnly, Identifier): The service generated unique identifier for InfluxDB instance.
* **InfluxAuthParametersSecretArn**: string (ReadOnly): The Auth parameters secret Amazon Resource name (ARN) that is associated with the InfluxDB instance.
* **KmsKeyId**: string: The customer managed key used to encrypt data in the InfluxDB instance.
* **LogDeliveryConfiguration**: [InfluxDBInstance_LogDeliveryConfiguration](#influxdbinstancelogdeliveryconfiguration): Configuration for sending logs to customer account from the InfluxDB instance.
* **MaintenanceSchedule**: [MaintenanceSchedule](#maintenanceschedule): The maintenance schedule for the InfluxDB instance.
* **Name**: string: The unique name that is associated with the InfluxDB instance.
* **NetworkType**: string: Network type of the InfluxDB Instance.
* **NextMaintenanceTime**: string (ReadOnly): The timestamp of the next scheduled maintenance event.
* **Organization**: string (WriteOnly): The organization for the InfluxDB instance.
* **Password**: string (WriteOnly): The password for the InfluxDB instance.
* **Port**: int: The port number on which InfluxDB accepts connections.
* **PubliclyAccessible**: bool: Attach a public IP to the customer ENI.
* **SecondaryAvailabilityZone**: string (ReadOnly): The Secondary Availability Zone (AZ) where the InfluxDB instance is created, if DeploymentType is set as WITH_MULTIAZ_STANDBY.
* **Status**: string (ReadOnly): Status of the InfluxDB Instance.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this DB instance.
* **Username**: string (WriteOnly): The username for the InfluxDB instance.
* **VpcSecurityGroupIds**: string[]: A list of Amazon EC2 VPC security groups to associate with this InfluxDB instance.
* **VpcSubnetIds**: string[]: A list of EC2 subnet IDs for this InfluxDB instance.

## AWS.Timestream/InfluxDBParameterGroupProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the DB parameter group.
* **Description**: string: A description of the DB parameter group.
* **Id**: string (ReadOnly): A service-generated unique identifier.
* **Name**: string: The name of the DB parameter group. The name must be unique per customer and per region.
* **Parameters**: [Parameters](#parameters)
* **Tags**: [InfluxDBParameterGroup_Tags](#influxdbparametergrouptags)[]: A list of key-value pairs to associate with the DB parameter group.

## AWS.Timestream/ScheduledQueryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ClientToken**: string (WriteOnly)
* **ErrorReportConfiguration**: [ErrorReportConfiguration](#errorreportconfiguration) (Required)
* **KmsKeyId**: string
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration) (Required)
* **QueryString**: string (Required)
* **ScheduleConfiguration**: [ScheduleConfiguration](#scheduleconfiguration) (Required)
* **ScheduledQueryExecutionRoleArn**: string (Required)
* **ScheduledQueryName**: string
* **SQErrorReportConfiguration**: string (ReadOnly): Configuration for error reporting. Error reports will be generated when a problem is encountered when writing the query results.
* **SQKmsKeyId**: string (ReadOnly): The Amazon KMS key used to encrypt the scheduled query resource, at-rest. If the Amazon KMS key is not specified, the scheduled query resource will be encrypted with a Timestream owned Amazon KMS key. To specify a KMS key, use the key ID, key ARN, alias name, or alias ARN. When using an alias name, prefix the name with alias/. If ErrorReportConfiguration uses SSE_KMS as encryption type, the same KmsKeyId is used to encrypt the error report at rest.
* **SQName**: string (ReadOnly): The name of the scheduled query. Scheduled query names must be unique within each Region.
* **SQNotificationConfiguration**: string (ReadOnly): Notification configuration for the scheduled query. A notification is sent by Timestream when a query run finishes, when the state is updated or when you delete it.
* **SQQueryString**: string (ReadOnly): The query string to run. Parameter names can be specified in the query string @ character followed by an identifier. The named Parameter @scheduled_runtime is reserved and can be used in the query to get the time at which the query is scheduled to run. The timestamp calculated according to the ScheduleConfiguration parameter, will be the value of @scheduled_runtime paramater for each query run. For example, consider an instance of a scheduled query executing on 2021-12-01 00:00:00. For this instance, the @scheduled_runtime parameter is initialized to the timestamp 2021-12-01 00:00:00 when invoking the query.
* **SQScheduleConfiguration**: string (ReadOnly): Configuration for when the scheduled query is executed.
* **SQScheduledQueryExecutionRoleArn**: string (ReadOnly): The ARN for the IAM role that Timestream will assume when running the scheduled query.
* **SQTargetConfiguration**: string (ReadOnly): Configuration of target store where scheduled query results are written to.
* **Tags**: [Tag](#tag)[]
* **TargetConfiguration**: [TargetConfiguration](#targetconfiguration)

## AWS.Timestream/TableProperties
### Properties
* **Arn**: string (ReadOnly)
* **DatabaseName**: string (Required, Identifier): The name for the database which the table to be created belongs to.
* **MagneticStoreWriteProperties**: [Table_MagneticStoreWriteProperties](#tablemagneticstorewriteproperties): The properties that determine whether magnetic store writes are enabled.
* **Name**: string (ReadOnly): The table name exposed as a read-only attribute.
* **RetentionProperties**: [Table_RetentionProperties](#tableretentionproperties): The retention duration of the memory store and the magnetic store.
* **Schema**: [Table_Schema](#tableschema): A Schema specifies the expected data model of the table.
* **TableName**: string (Identifier): The name for the table. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the table name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DimensionMapping
### Properties
* **DimensionValueType**: string (Required)
* **Name**: string (Required)

## Duration
### Properties
* **DurationType**: string (Required): The type of duration for InfluxDB parameters.
* **Value**: int (Required): The value of duration for InfluxDB parameters.

## ErrorReportConfiguration
### Properties
* **S3Configuration**: [S3Configuration](#s3configuration) (Required)

## InfluxDBCluster_LogDeliveryConfiguration
### Properties
* **S3Configuration**: [InfluxDBCluster_LogDeliveryConfiguration_S3Configuration](#influxdbclusterlogdeliveryconfigurations3configuration) (Required): S3 configuration for sending logs to customer account from the InfluxDB cluster.

## InfluxDBCluster_LogDeliveryConfiguration_S3Configuration
### Properties
* **BucketName**: string (Required): The bucket name for logs to be sent from the InfluxDB cluster
* **Enabled**: bool (Required): Specifies whether logging to customer specified bucket is enabled.

## InfluxDBInstance_LogDeliveryConfiguration
### Properties
* **S3Configuration**: [InfluxDBInstance_LogDeliveryConfiguration_S3Configuration](#influxdbinstancelogdeliveryconfigurations3configuration) (Required): S3 configuration for sending logs to customer account from the InfluxDB instance.

## InfluxDBInstance_LogDeliveryConfiguration_S3Configuration
### Properties
* **BucketName**: string (Required): The bucket name for logs to be sent from the InfluxDB instance
* **Enabled**: bool (Required): Specifies whether logging to customer specified bucket is enabled.

## InfluxDBParameterGroup_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## InfluxDBv2Parameters
### Properties
* **FluxLogEnabled**: bool: Include option to show detailed logs for Flux queries.
         Default: false
* **HttpIdleTimeout**: [Duration](#duration): Maximum duration the server should keep established connections alive while waiting for new requests. Set to 0 for no timeout.
         Default: 3 minutes
* **HttpReadHeaderTimeout**: [Duration](#duration): Maximum duration the server should try to read HTTP headers for new requests. Set to 0 for no timeout.
         Default: 10 seconds
* **HttpReadTimeout**: [Duration](#duration): Maximum duration the server should try to read the entirety of new requests. Set to 0 for no timeout.
         Default: 0
* **HttpWriteTimeout**: [Duration](#duration): Maximum duration the server should spend processing and responding to write requests. Set to 0 for no timeout.
         Default: 0
* **InfluxqlMaxSelectBuckets**: int: Maximum number of group by time buckets a SELECT statement can create. 0 allows an unlimited number of buckets.
         Default: 0
* **InfluxqlMaxSelectPoint**: int: Maximum number of points a SELECT statement can process. 0 allows an unlimited number of points. InfluxDB checks the point count every second (so queries exceeding the maximum aren’t immediately aborted).
         Default: 0
* **InfluxqlMaxSelectSeries**: int: Maximum number of series a SELECT statement can return. 0 allows an unlimited number of series.
         Default: 0
* **LogLevel**: string: Log output level. InfluxDB outputs log entries with severity levels greater than or equal to the level specified.
         Default: info
* **MetricsDisabled**: bool: Disable the HTTP /metrics endpoint which exposes internal InfluxDB metrics.
         Default: false
* **NoTasks**: bool: Disable the task scheduler. If problematic tasks prevent InfluxDB from starting, use this option to start InfluxDB without scheduling or executing tasks.
         Default: false
* **PprofDisabled**: bool: Disable the /debug/pprof HTTP endpoint. This endpoint provides runtime profiling data and can be helpful when debugging.
         Default: true
* **QueryConcurrency**: int: Number of queries allowed to execute concurrently. Setting to 0 allows an unlimited number of concurrent queries.
         Default: 0
* **QueryInitialMemoryBytes**: int: Initial bytes of memory allocated for a query.
         Default: 0
* **QueryMaxMemoryBytes**: int: Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.
         Default: 0
* **QueryMemoryBytes**: int: Maximum bytes of memory allowed for a single query. Must be greater or equal to queryInitialMemoryBytes.
         Default: 0
* **QueryQueueSize**: int: Maximum number of queries allowed in execution queue. When queue limit is reached, new queries are rejected. Setting to 0 allows an unlimited number of queries in the queue.
         Default: 0
* **SessionLength**: int: Specifies the Time to Live (TTL) in minutes for newly created user sessions.
         Default: 60
* **SessionRenewDisabled**: bool: Disables automatically extending a user’s session TTL on each request. By default, every request sets the session’s expiration time to five minutes from now. When disabled, sessions expire after the specified session length and the user is redirected to the login page, even if recently active.
         Default: false
* **StorageCacheMaxMemorySize**: int: Maximum size (in bytes) a shard’s cache can reach before it starts rejecting writes. Must be greater than storageCacheSnapShotMemorySize and lower than instance’s total memory capacity. We recommend setting it to below 15% of the total memory capacity.
         Default: 1073741824
* **StorageCacheSnapshotMemorySize**: int: Size (in bytes) at which the storage engine will snapshot the cache and write it to a TSM file to make more memory available. Must not be greater than storageCacheMaxMemorySize.
         Default: 26214400
* **StorageCacheSnapshotWriteColdDuration**: [Duration](#duration): Duration at which the storage engine will snapshot the cache and write it to a new TSM file if the shard hasn’t received writes or deletes.
         Default: 10 minutes
* **StorageCompactFullWriteColdDuration**: [Duration](#duration): Duration at which the storage engine will compact all TSM files in a shard if it hasn't received writes or deletes.
         Default: 4 hours
* **StorageCompactThroughputBurst**: int: Rate limit (in bytes per second) that TSM compactions can write to disk.
         Default: 50331648
* **StorageMaxConcurrentCompactions**: int: Maximum number of full and level compactions that can run concurrently. A value of 0 results in 50% of runtime.GOMAXPROCS(0) used at runtime. Any number greater than zero limits compactions to that value. This setting does not apply to cache snapshotting.
         Default: 0
* **StorageMaxIndexLogFileSize**: int: Size (in bytes) at which an index write-ahead log (WAL) file will compact into an index file. Lower sizes will cause log files to be compacted more quickly and result in lower heap usage at the expense of write throughput.
         Default: 1048576
* **StorageNoValidateFieldSize**: bool: Skip field size validation on incoming write requests.
         Default: false
* **StorageRetentionCheckInterval**: [Duration](#duration): Interval of retention policy enforcement checks. Must be greater than 0.
         Default: 30 minutes
* **StorageSeriesFileMaxConcurrentSnapshotCompactions**: int: Maximum number of snapshot compactions that can run concurrently across all series partitions in a database.
         Default: 0
* **StorageSeriesIdSetCacheSize**: int: Size of the internal cache used in the TSI index to store previously calculated series results. Cached results are returned quickly rather than needing to be recalculated when a subsequent query with the same tag key/value predicate is executed. Setting this value to 0 will disable the cache and may decrease query performance.
         Default: 100
* **StorageWalMaxConcurrentWrites**: int: Maximum number writes to the WAL directory to attempt at the same time. Setting this value to 0 results in number of processing units available x2.
         Default: 0
* **StorageWalMaxWriteDelay**: [Duration](#duration): Maximum amount of time a write request to the WAL directory will wait when the maximum number of concurrent active writes to the WAL directory has been met. Set to 0 to disable the timeout.
         Default: 10 minutes
* **TracingType**: string: Enable tracing in InfluxDB and specifies the tracing type. Tracing is disabled by default.
* **UiDisabled**: bool: Disable the InfluxDB user interface (UI). The UI is enabled by default.
         Default: false

## InfluxDBv3CoreParameters
### Properties
* **DataFusionConfig**: string: Provides custom configuration to DataFusion as a comma-separated list of key:value pairs.
* **DataFusionMaxParquetFanout**: int: When multiple parquet files are required in a sorted way (deduplication for example), specifies the maximum fanout.
         Default: 1000
* **DataFusionNumThreads**: int: Sets the maximum number of DataFusion runtime threads to use.
* **DataFusionRuntimeDisableLifoSlot**: bool: Disables the LIFO slot of the DataFusion runtime.
* **DataFusionRuntimeEventInterval**: int: Sets the number of scheduler ticks after which the scheduler of the DataFusion tokio runtime polls for external events–for example: timers, I/O.
* **DataFusionRuntimeGlobalQueueInterval**: int: Sets the number of scheduler ticks after which the scheduler of the DataFusion runtime polls the global task queue.
* **DataFusionRuntimeMaxBlockingThreads**: int: Specifies the limit for additional threads spawned by the DataFusion runtime.
* **DataFusionRuntimeMaxIoEventsPerTick**: int: Configures the maximum number of events processed per tick by the tokio DataFusion runtime.
* **DataFusionRuntimeThreadKeepAlive**: [Duration](#duration): Sets a custom timeout for a thread in the blocking pool of the tokio DataFusion runtime.
* **DataFusionRuntimeThreadPriority**: int: Sets the thread priority for tokio DataFusion runtime workers.
         Default: 10
* **DataFusionRuntimeType**: string: Specifies the DataFusion tokio runtime type.
         Default: multi-thread
* **DataFusionUseCachedParquetLoader**: bool: Uses a cached parquet loader when reading parquet files from the object store.
* **DeleteGracePeriod**: [Duration](#duration): Specifies the grace period before permanently deleting data.
         Default: 24h
* **DisableParquetMemCache**: bool: Disables the in-memory Parquet cache. By default, the cache is enabled.
* **DistinctCacheEvictionInterval**: [Duration](#duration): Specifies the interval to evict expired entries from the distinct value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
         Default: 10s
* **ExecMemPoolBytes**: [PercentOrAbsoluteLong](#percentorabsolutelong): Specifies the size of memory pool used during query execution. Can be given as absolute value in bytes or as a percentage of the total available memory–for example: 8000000000 or 10%.
         Default: 20%
* **ForceSnapshotMemThreshold**: [PercentOrAbsoluteLong](#percentorabsolutelong): Specifies the threshold for the internal memory buffer. Supports either a percentage (portion of available memory) or absolute value in MB–for example: 70% or 100
         Default: 70%
* **Gen1Duration**: [Duration](#duration): Specifies the duration that Parquet files are arranged into. Data timestamps land each row into a file of this duration. Supported durations are 1m, 5m, and 10m. These files are known as “generation 1” files that the compactor in InfluxDB 3 Enterprise can merge into larger generations.
         Default: 10m
* **Gen1LookbackDuration**: [Duration](#duration): Specifies how far back to look when creating generation 1 Parquet files.
         Default: 24h
* **HardDeleteDefaultDuration**: [Duration](#duration): Sets the default duration for hard deletion of data.
         Default: 90d
* **LastCacheEvictionInterval**: [Duration](#duration): Specifies the interval to evict expired entries from the Last-N-Value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
         Default: 10s
* **LogFilter**: string: Sets the filter directive for logs.
* **LogFormat**: string: Defines the message format for logs.
         Default: full
* **MaxHttpRequestSize**: int: Specifies the maximum size of HTTP requests.
         Default: 10485760
* **ParquetMemCachePruneInterval**: [Duration](#duration): Sets the interval to check if the in-memory Parquet cache needs to be pruned.
         Default: 1s
* **ParquetMemCachePrunePercentage**: int: Specifies the percentage of entries to prune during a prune operation on the in-memory Parquet cache.
         Default: 0.1
* **ParquetMemCacheQueryPathDuration**: [Duration](#duration): Specifies the time window for caching recent Parquet files in memory.
         Default: 5h
* **ParquetMemCacheSize**: [PercentOrAbsoluteLong](#percentorabsolutelong): Specifies the size of the in-memory Parquet cache in megabytes or percentage of total available memory.
         Default: 20%
* **PreemptiveCacheAge**: [Duration](#duration): Specifies the interval to prefetch into the Parquet cache during compaction.
         Default: 3d
* **QueryFileLimit**: int: Limits the number of Parquet files a query can access. If a query attempts to read more than this limit, InfluxDB 3 returns an error.
         Default: 432
* **QueryLogSize**: int: Defines the size of the query log. Up to this many queries remain in the log before older queries are evicted to make room for new ones.
         Default: 1000
* **RetentionCheckInterval**: [Duration](#duration): The interval at which retention policies are checked and enforced. Enter as a human-readable time–for example: 30m or 1h.
         Default: 30m
* **SnapshottedWalFilesToKeep**: int: Specifies the number of snapshotted WAL files to retain in the object store. Flushing the WAL files does not clear the WAL files immediately; they are deleted when the number of snapshotted WAL files exceeds this number.
         Default: 300
* **TableIndexCacheConcurrencyLimit**: int: Limits the concurrency level for table index cache operations.
         Default: 8
* **TableIndexCacheMaxEntries**: int: Specifies the maximum number of entries in the table index cache.
         Default: 1000
* **WalMaxWriteBufferSize**: int: Specifies the maximum number of write requests that can be buffered before a flush must be executed and succeed.
         Default: 100000
* **WalReplayConcurrencyLimit**: int: Concurrency limit during WAL replay. Setting this number too high can lead to OOM. The default is dynamically determined.
         Default: max(num_cpus, 10)
* **WalReplayFailOnError**: bool: Determines whether WAL replay should fail when encountering errors.
         Default: false
* **WalSnapshotSize**: int: Defines the number of WAL files to attempt to remove in a snapshot. This, multiplied by the interval, determines how often snapshots are taken.
         Default: 600

## InfluxDBv3EnterpriseParameters
### Properties
* **CatalogSyncInterval**: [Duration](#duration): Defines how often the catalog synchronizes across cluster nodes.
         Default: 10s
* **CompactionCheckInterval**: [Duration](#duration): Specifies how often the compactor checks for new compaction work to perform.
         Default: 10s
* **CompactionCleanupWait**: [Duration](#duration): Specifies the amount of time that the compactor waits after finishing a compaction run to delete files marked as needing deletion during that compaction run.
         Default: 10m
* **CompactionGen2Duration**: [Duration](#duration): Specifies the duration of the first level of compaction (gen2). Later levels of compaction are multiples of this duration. This value should be equal to or greater than the gen1 duration.
         Default: 20m
* **CompactionMaxNumFilesPerPlan**: int: Sets the maximum number of files included in any compaction plan.
         Default: 500
* **CompactionMultipliers**: string: Specifies a comma-separated list of multiples defining the duration of each level of compaction. The number of elements in the list determines the number of compaction levels. The first element specifies the duration of the first level (gen3); subsequent levels are multiples of the previous level.
         Default: 3,4,6,5
* **CompactionRowLimit**: int: Specifies the soft limit for the number of rows per file that the compactor writes. The compactor may write more rows than this limit.
         Default: 1000000
* **DataFusionConfig**: string: Provides custom configuration to DataFusion as a comma-separated list of key:value pairs.
* **DataFusionMaxParquetFanout**: int: When multiple parquet files are required in a sorted way (deduplication for example), specifies the maximum fanout.
         Default: 1000
* **DataFusionNumThreads**: int: Sets the maximum number of DataFusion runtime threads to use.
* **DataFusionRuntimeDisableLifoSlot**: bool: Disables the LIFO slot of the DataFusion runtime.
* **DataFusionRuntimeEventInterval**: int: Sets the number of scheduler ticks after which the scheduler of the DataFusion tokio runtime polls for external events–for example: timers, I/O.
* **DataFusionRuntimeGlobalQueueInterval**: int: Sets the number of scheduler ticks after which the scheduler of the DataFusion runtime polls the global task queue.
* **DataFusionRuntimeMaxBlockingThreads**: int: Specifies the limit for additional threads spawned by the DataFusion runtime.
* **DataFusionRuntimeMaxIoEventsPerTick**: int: Configures the maximum number of events processed per tick by the tokio DataFusion runtime.
* **DataFusionRuntimeThreadKeepAlive**: [Duration](#duration): Sets a custom timeout for a thread in the blocking pool of the tokio DataFusion runtime.
* **DataFusionRuntimeThreadPriority**: int: Sets the thread priority for tokio DataFusion runtime workers.
         Default: 10
* **DataFusionRuntimeType**: string: Specifies the DataFusion tokio runtime type.
         Default: multi-thread
* **DataFusionUseCachedParquetLoader**: bool: Uses a cached parquet loader when reading parquet files from the object store.
* **DedicatedCompactor**: bool (Required): Specifies if the compactor instance should be a standalone instance or not.
* **DeleteGracePeriod**: [Duration](#duration): Specifies the grace period before permanently deleting data.
         Default: 24h
* **DisableParquetMemCache**: bool: Disables the in-memory Parquet cache. By default, the cache is enabled.
* **DistinctCacheEvictionInterval**: [Duration](#duration): Specifies the interval to evict expired entries from the distinct value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
         Default: 10s
* **DistinctValueCacheDisableFromHistory**: bool: Disables populating the distinct value cache from historical data. If disabled, the cache is still populated with data from the write-ahead log (WAL).
* **ExecMemPoolBytes**: [PercentOrAbsoluteLong](#percentorabsolutelong): Specifies the size of memory pool used during query execution. Can be given as absolute value in bytes or as a percentage of the total available memory–for example: 8000000000 or 10%.
         Default: 20%
* **ForceSnapshotMemThreshold**: [PercentOrAbsoluteLong](#percentorabsolutelong): Specifies the threshold for the internal memory buffer. Supports either a percentage (portion of available memory) or absolute value in MB–for example: 70% or 100
         Default: 70%
* **Gen1Duration**: [Duration](#duration): Specifies the duration that Parquet files are arranged into. Data timestamps land each row into a file of this duration. Supported durations are 1m, 5m, and 10m. These files are known as “generation 1” files, which the compactor can merge into larger generations.
         Default: 10m
* **Gen1LookbackDuration**: [Duration](#duration): Specifies how far back to look when creating generation 1 Parquet files.
         Default: 24h
* **HardDeleteDefaultDuration**: [Duration](#duration): Sets the default duration for hard deletion of data.
         Default: 90d
* **IngestQueryInstances**: int (Required): Specifies number of instances in the DbCluster which can both ingest and query.
* **LastCacheEvictionInterval**: [Duration](#duration): Specifies the interval to evict expired entries from the Last-N-Value cache, expressed as a human-readable duration–for example: 20s, 1m, 1h.
         Default: 10s
* **LastValueCacheDisableFromHistory**: bool: Disables populating the last-N-value cache from historical data. If disabled, the cache is still populated with data from the write-ahead log (WAL).
* **LogFilter**: string: Sets the filter directive for logs.
* **LogFormat**: string: Defines the message format for logs.
         Default: full
* **MaxHttpRequestSize**: int: Specifies the maximum size of HTTP requests.
         Default: 10485760
* **ParquetMemCachePruneInterval**: [Duration](#duration): Sets the interval to check if the in-memory Parquet cache needs to be pruned.
         Default: 1s
* **ParquetMemCachePrunePercentage**: int: Specifies the percentage of entries to prune during a prune operation on the in-memory Parquet cache.
         Default: 0.1
* **ParquetMemCacheQueryPathDuration**: [Duration](#duration): Specifies the time window for caching recent Parquet files in memory.
         Default: 5h
* **ParquetMemCacheSize**: [PercentOrAbsoluteLong](#percentorabsolutelong): Specifies the size of the in-memory Parquet cache in megabytes or percentage of total available memory.
         Default: 20%
* **PreemptiveCacheAge**: [Duration](#duration): Specifies the interval to prefetch into the Parquet cache during compaction.
         Default: 3d
* **QueryFileLimit**: int: Limits the number of Parquet files a query can access. If a query attempts to read more than this limit, InfluxDB 3 returns an error.
         Default: 432
* **QueryLogSize**: int: Defines the size of the query log. Up to this many queries remain in the log before older queries are evicted to make room for new ones.
         Default: 1000
* **QueryOnlyInstances**: int (Required): Specifies number of instances in the DbCluster which can only query.
* **ReplicationInterval**: [Duration](#duration): Specifies the interval at which data replication occurs between cluster nodes.
         Default: 250ms
* **RetentionCheckInterval**: [Duration](#duration): The interval at which retention policies are checked and enforced. Enter as a human-readable time–for example: 30m or 1h.
         Default: 30m
* **SnapshottedWalFilesToKeep**: int: Specifies the number of snapshotted WAL files to retain in the object store. Flushing the WAL files does not clear the WAL files immediately; they are deleted when the number of snapshotted WAL files exceeds this number.
         Default: 300
* **TableIndexCacheConcurrencyLimit**: int: Limits the concurrency level for table index cache operations.
         Default: 8
* **TableIndexCacheMaxEntries**: int: Specifies the maximum number of entries in the table index cache.
         Default: 1000
* **WalMaxWriteBufferSize**: int: Specifies the maximum number of write requests that can be buffered before a flush must be executed and succeed.
         Default: 100000
* **WalReplayConcurrencyLimit**: int: Concurrency limit during WAL replay. Setting this number too high can lead to OOM. The default is dynamically determined.
         Default: max(num_cpus, 10)
* **WalReplayFailOnError**: bool: Determines whether WAL replay should fail when encountering errors.
         Default: false
* **WalSnapshotSize**: int: Defines the number of WAL files to attempt to remove in a snapshot. This, multiplied by the interval, determines how often snapshots are taken.
         Default: 600

## MaintenanceSchedule
### Properties
* **PreferredMaintenanceWindow**: string (Required): The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.
* **Timezone**: string (Required): The IANA timezone identifier for the maintenance schedule.

## MaintenanceSchedule
### Properties
* **PreferredMaintenanceWindow**: string (Required): The preferred maintenance window in format ddd:HH:MM-ddd:HH:MM.
* **Timezone**: string (Required): The IANA timezone identifier for the maintenance schedule.

## MemberModeCount
### Properties
* **Count**: int (Required): The number of DB cluster members reporting this instance mode.
* **Mode**: string (Required): The instance mode reported by DB cluster members.

## MixedMeasureMapping
### Properties
* **MeasureName**: string
* **MeasureValueType**: string (Required)
* **MultiMeasureAttributeMappings**: [MultiMeasureAttributeMapping](#multimeasureattributemapping)[]
* **SourceColumn**: string
* **TargetMeasureName**: string

## MultiMeasureAttributeMapping
### Properties
* **MeasureValueType**: string (Required)
* **SourceColumn**: string (Required)
* **TargetMultiMeasureAttributeName**: string

## MultiMeasureMappings
### Properties
* **MultiMeasureAttributeMappings**: [MultiMeasureAttributeMapping](#multimeasureattributemapping)[] (Required)
* **TargetMultiMeasureName**: string

## NotificationConfiguration
### Properties
* **SnsConfiguration**: [SnsConfiguration](#snsconfiguration) (Required)

## Parameters
### Properties
* **InfluxDBv2**: [InfluxDBv2Parameters](#influxdbv2parameters)
* **InfluxDBv3Core**: [InfluxDBv3CoreParameters](#influxdbv3coreparameters)
* **InfluxDBv3Enterprise**: [InfluxDBv3EnterpriseParameters](#influxdbv3enterpriseparameters)

## PartitionKey
### Properties
* **EnforcementInRecord**: string
* **Name**: string
* **Type**: string (Required)

## PercentOrAbsoluteLong
### Properties
* **Absolute**: int: Absolute long for InfluxDB parameters.
* **Percent**: string: Percent for InfluxDB parameters.

## S3Configuration
### Properties
* **BucketName**: string (Required)
* **EncryptionOption**: string
* **ObjectKeyPrefix**: string

## ScheduleConfiguration
### Properties
* **ScheduleExpression**: string (Required)

## SnsConfiguration
### Properties
* **TopicArn**: string (Required)

## Table_MagneticStoreWriteProperties
### Properties
* **EnableMagneticStoreWrites**: bool (Required): Boolean flag indicating whether magnetic store writes are enabled.
* **MagneticStoreRejectedDataLocation**: [Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation](#tablemagneticstorewritepropertiesmagneticstorerejecteddatalocation): Location to store information about records that were asynchronously rejected during magnetic store writes.

## Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation
### Properties
* **S3Configuration**: [Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation_S3Configuration](#tablemagneticstorewritepropertiesmagneticstorerejecteddatalocations3configuration): S3 configuration for location to store rejections from magnetic store writes

## Table_MagneticStoreWriteProperties_MagneticStoreRejectedDataLocation_S3Configuration
### Properties
* **BucketName**: string (Required): The bucket name used to store the data.
* **EncryptionOption**: string (Required): Either SSE_KMS or SSE_S3.
* **KmsKeyId**: string: Must be provided if SSE_KMS is specified as the encryption option
* **ObjectKeyPrefix**: string: String used to prefix all data in the bucket.

## Table_RetentionProperties
### Properties
* **MagneticStoreRetentionPeriodInDays**: string: The duration for which data must be stored in the magnetic store.
* **MemoryStoreRetentionPeriodInHours**: string: The duration for which data must be stored in the memory store.

## Table_Schema
### Properties
* **CompositePartitionKey**: [PartitionKey](#partitionkey)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string
* **Value**: string

## TargetConfiguration
### Properties
* **TimestreamConfiguration**: [TimestreamConfiguration](#timestreamconfiguration) (Required)

## TimestreamConfiguration
### Properties
* **DatabaseName**: string (Required)
* **DimensionMappings**: [DimensionMapping](#dimensionmapping)[] (Required)
* **MeasureNameColumn**: string
* **MixedMeasureMappings**: [MixedMeasureMapping](#mixedmeasuremapping)[]
* **MultiMeasureMappings**: [MultiMeasureMappings](#multimeasuremappings)
* **TableName**: string (Required)
* **TimeColumn**: string (Required)

