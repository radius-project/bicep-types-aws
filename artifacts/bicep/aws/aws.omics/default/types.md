# AWS.Omics @ default

## Resource AWS.Omics/AnnotationStore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/AnnotationStoreProperties](#awsomicsannotationstoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/Configuration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/ConfigurationProperties](#awsomicsconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/ReadSet@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/ReadSetProperties](#awsomicsreadsetproperties) (Identifier): properties of the resource

## Resource AWS.Omics/Reference@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/ReferenceProperties](#awsomicsreferenceproperties) (Identifier): properties of the resource

## Resource AWS.Omics/ReferenceStore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/ReferenceStoreProperties](#awsomicsreferencestoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/Run@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/RunProperties](#awsomicsrunproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/RunBatch@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/RunBatchProperties](#awsomicsrunbatchproperties) (Identifier): properties of the resource

## Resource AWS.Omics/RunCache@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/RunCacheProperties](#awsomicsruncacheproperties) (Identifier): properties of the resource

## Resource AWS.Omics/RunGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/RunGroupProperties](#awsomicsrungroupproperties) (Identifier): properties of the resource

## Resource AWS.Omics/SequenceStore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/SequenceStoreProperties](#awsomicssequencestoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/Task@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/TaskProperties](#awsomicstaskproperties) (Identifier): properties of the resource

## Resource AWS.Omics/VariantStore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/VariantStoreProperties](#awsomicsvariantstoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/Workflow@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/WorkflowProperties](#awsomicsworkflowproperties) (Identifier): properties of the resource

## Resource AWS.Omics/WorkflowVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/WorkflowVersionProperties](#awsomicsworkflowversionproperties) (Required, Identifier): properties of the resource

## AWS.Omics/AnnotationStoreProperties
### Properties
* **CreationTime**: string (ReadOnly)
* **Description**: string
* **Id**: string (ReadOnly)
* **Name**: string (Required, Identifier)
* **Reference**: [ReferenceItem](#referenceitem)
* **SseConfig**: [SseConfig](#sseconfig)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **StoreArn**: string (ReadOnly)
* **StoreFormat**: string (Required)
* **StoreOptions**: [StoreOptions](#storeoptions)
* **StoreSizeBytes**: int (ReadOnly)
* **Tags**: [TagMap](#tagmap)
* **UpdateTime**: string (ReadOnly)

## AWS.Omics/ConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): Unique resource identifier for the configuration.
* **CreationTime**: string (ReadOnly): Configuration creation timestamp.
* **Description**: string: Optional description for the configuration.
* **Name**: string (Required, Identifier): User-friendly name for the configuration.
* **RunConfigurations**: [RunConfigurations](#runconfigurations) (Required): Required run-specific configurations.
* **Status**: string (ReadOnly): Current configuration status.
* **Tags**: [TagMap](#tagmap): Tags for the configuration.
* **Uuid**: string (ReadOnly): Unique identifier for the configuration.

## AWS.Omics/ReadSetProperties
### Properties
* **Arn**: string (Identifier): The read set's ARN.
* **CreationJobId**: string (ReadOnly): The read set's creation job ID.
* **CreationTime**: string (ReadOnly): When the read set was created.
* **CreationType**: string (ReadOnly)
* **Description**: string: The read set's description.
* **Etag**: [ETag](#etag) (ReadOnly)
* **Files**: [ReadSetFiles](#readsetfiles) (ReadOnly)
* **FileType**: string: The read set's file type.
* **Name**: string: The read set's name.
* **ReadSetId**: string (ReadOnly): The read set's ID.
* **ReferenceArn**: string: The read set's genome reference ARN.
* **SampleId**: string: The read set's sample ID.
* **SequenceInformation**: [SequenceInformation](#sequenceinformation) (ReadOnly)
* **SequenceStoreId**: string: The read set's sequence store ID.
* **Status**: string (ReadOnly): The read set's status.
* **SubjectId**: string: The read set's subject ID.
* **Tags**: [Tag](#tag)[] (ReadOnly): Tags for the read set.

## AWS.Omics/ReferenceProperties
### Properties
* **Arn**: string (Identifier): The reference's ARN.
* **CreationJobId**: string (ReadOnly): The reference's creation job ID.
* **CreationTime**: string (ReadOnly): When the reference was created.
* **CreationType**: string (ReadOnly): The reference's creation type.
* **Description**: string: The reference's description.
* **Id**: string (ReadOnly): The reference's ID.
* **Md5**: string (ReadOnly): The reference's MD5 checksum.
* **Name**: string: The reference's name.
* **ReferenceStoreId**: string: The reference's reference store ID.
* **Status**: string (ReadOnly): The reference's status.
* **Tags**: [Reference_Tags](#referencetags)[]: Tags for the reference.
* **UpdateTime**: string (ReadOnly): When the reference was updated.

## AWS.Omics/ReferenceStoreProperties
### Properties
* **Arn**: string (ReadOnly): The store's ARN.
* **CreationTime**: string (ReadOnly): When the store was created.
* **Description**: string: A description for the store.
* **Name**: string (Required): A name for the store.
* **ReferenceStoreId**: string (ReadOnly, Identifier)
* **SseConfig**: [SseConfig](#sseconfig)
* **Tags**: [TagMap](#tagmap)

## AWS.Omics/RunBatchProperties
### Properties
* **Arn**: string (Identifier): The batch's ARN.
* **CreationTime**: string (ReadOnly): When the batch was created.
* **DefaultRunSetting**: [DefaultRunSetting](#defaultrunsetting)
* **Id**: string (ReadOnly): The batch's ID, which is the identifier portion of its ARN.
* **Name**: string: The batch's name. Names are not unique and may be reused.
* **RunSummary**: [RunSummary](#runsummary) (ReadOnly)
* **Status**: string (ReadOnly): The batch's status.
* **SubmissionSummary**: [SubmissionSummary](#submissionsummary) (ReadOnly)
* **SubmittedTime**: string (ReadOnly): When all run submissions for the batch completed.
* **Tags**: [Tag](#tag)[]: Tags for the batch. These are not inherited by the individual runs; use DefaultRunSetting RunTags to tag runs.
* **TotalRuns**: int (ReadOnly): The total number of runs in the batch.
* **Uuid**: string (ReadOnly): The universally unique identifier for the batch.

## AWS.Omics/RunCacheProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The run cache ARN.
* **CacheBehavior**: string: The default cache behavior for runs using this cache.
* **CacheBucketOwnerId**: string: The AWS account ID of the expected owner of the S3 bucket for the run cache.
* **CacheS3Location**: string (WriteOnly): The S3 location for storing the cached task outputs.
* **CreationTime**: string (ReadOnly): Creation time of the run cache (an ISO 8601 formatted string).
* **Description**: string: A description of the run cache.
* **Id**: string (ReadOnly): The run cache ID.
* **Name**: string: A name for the run cache.
* **Status**: string (ReadOnly): The run cache status.
* **Tags**: [Tag](#tag)[]: Tags for the run cache.

## AWS.Omics/RunGroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreationTime**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **MaxCpus**: int
* **MaxDuration**: int
* **MaxGpus**: int
* **MaxRuns**: int
* **Name**: string
* **Tags**: [TagMap](#tagmap)

## AWS.Omics/RunProperties
### Properties
* **Arn**: string (Identifier): The run's ARN.
* **CacheBehavior**: string: The cache behavior for the run.
* **CacheId**: string: Identifier of the cache associated with this run.
* **CreationTime**: string (ReadOnly): When the run was created.
* **Id**: string (ReadOnly): The run's ID.
* **LogLevel**: string: The run's log level.
* **Name**: string: The run's name.
* **NetworkingMode**: string: The networking mode for the run.
* **OutputUri**: string (Required): An output URI for the run.
* **Priority**: int: The run's priority.
* **RetentionMode**: string: The run's retention mode.
* **RoleArn**: string (Required): A service role ARN for the run.
* **RunGroupId**: string: The run's group ID.
* **RunOutputUri**: string (ReadOnly): The destination for workflow outputs.
* **StartedBy**: string (ReadOnly): Who started the run.
* **StartTime**: string (ReadOnly): When the run started.
* **Status**: string (ReadOnly): The run's status.
* **StorageCapacity**: int: The run's storage capacity in gibibytes.
* **StorageType**: string: The run's storage type.
* **Tags**: [Tag](#tag)[]: Tags for the run.
* **Uuid**: string (ReadOnly): The universally unique identifier for the run.
* **WorkflowId**: string: The run's workflow ID.
* **WorkflowOwnerId**: string: The ID of the workflow owner.
* **WorkflowType**: string: The run's workflow type.

## AWS.Omics/SequenceStoreProperties
### Properties
* **AccessLogLocation**: string: Location of the access logs.
* **Arn**: string (ReadOnly): The store's ARN.
* **CreationTime**: string (ReadOnly): When the store was created.
* **Description**: string: A description for the store.
* **ETagAlgorithmFamily**: string
* **FallbackLocation**: string: An S3 location that is used to store files that have failed a direct upload.
* **Name**: string (Required): A name for the store.
* **PropagatedSetLevelTags**: string[]: The tags keys to propagate to the S3 objects associated with read sets in the sequence store.
* **S3AccessPointArn**: string (ReadOnly): This is ARN of the access point associated with the S3 bucket storing read sets.
* **S3AccessPolicy**: [SequenceStore_S3AccessPolicy](#sequencestores3accesspolicy): The resource policy that controls S3 access on the store
* **S3Uri**: string (ReadOnly): The S3 URI of the sequence store.
* **SequenceStoreId**: string (ReadOnly, Identifier)
* **SseConfig**: [SseConfig](#sseconfig)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly): The status message of the sequence store.
* **Tags**: [TagMap](#tagmap)
* **UpdateTime**: string (ReadOnly): The last-updated time of the sequence store.

## AWS.Omics/TaskProperties
### Properties
* **Arn**: string (Identifier): The ARN of the task resource.
* **Cpus**: int (ReadOnly): The task's CPU usage.
* **CreationTime**: string (ReadOnly): When the task was created.
* **Gpus**: int (ReadOnly): The number of Graphics Processing Units (GPU) specified in the task.
* **InstanceType**: string (ReadOnly): The instance type for the task.
* **LogStream**: string (ReadOnly): The task's log stream.
* **Memory**: int (ReadOnly): The task's memory use in gigabytes.
* **Name**: string (ReadOnly): The task's name.
* **RunId**: string: The workflow run ID.
* **Status**: string (ReadOnly): The task's status.
* **TaskId**: string (ReadOnly): The task's ID.

## AWS.Omics/VariantStoreProperties
### Properties
* **CreationTime**: string (ReadOnly)
* **Description**: string
* **Id**: string (ReadOnly)
* **Name**: string (Required, Identifier)
* **Reference**: [ReferenceItem](#referenceitem) (Required)
* **SseConfig**: [SseConfig](#sseconfig)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **StoreArn**: string (ReadOnly)
* **StoreSizeBytes**: int (ReadOnly)
* **Tags**: [TagMap](#tagmap)
* **UpdateTime**: string (ReadOnly)

## AWS.Omics/WorkflowProperties
### Properties
* **Accelerators**: string
* **Arn**: string (ReadOnly)
* **ContainerRegistryMap**: [ContainerRegistryMap](#containerregistrymap)
* **ContainerRegistryMapUri**: string (WriteOnly)
* **CreationTime**: string (ReadOnly)
* **DefinitionRepository**: [DefinitionRepository](#definitionrepository) (WriteOnly)
* **DefinitionUri**: string (WriteOnly)
* **Description**: string
* **Engine**: string
* **Id**: string (ReadOnly, Identifier)
* **Main**: string
* **Name**: string
* **ParameterTemplate**: [WorkflowParameterTemplate](#workflowparametertemplate)
* **ParameterTemplatePath**: string (WriteOnly): Path to the primary workflow parameter template JSON file inside the repository
* **readmeMarkdown**: string (WriteOnly): The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.
* **readmePath**: string: The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used.
* **readmeUri**: string (WriteOnly): The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. The S3 URI must begin with s3://USER-OWNED-BUCKET/. The requester must have access to the S3 bucket and object. The max README content length is 500 KiB.
* **Status**: string (ReadOnly)
* **StorageCapacity**: int
* **StorageType**: string
* **Tags**: [TagMap](#tagmap)
* **Type**: string (ReadOnly)
* **Uuid**: string (ReadOnly)
* **WorkflowBucketOwnerId**: string (WriteOnly): Optional workflow bucket owner ID to verify the workflow bucket

## AWS.Omics/WorkflowVersionProperties
### Properties
* **Accelerators**: string
* **Arn**: string (ReadOnly, Identifier)
* **ContainerRegistryMap**: [ContainerRegistryMap](#containerregistrymap)
* **ContainerRegistryMapUri**: string (WriteOnly)
* **CreationTime**: string (ReadOnly)
* **DefinitionRepository**: [DefinitionRepository](#definitionrepository) (WriteOnly)
* **DefinitionUri**: string (WriteOnly)
* **Description**: string
* **Engine**: string
* **Main**: string
* **ParameterTemplate**: [WorkflowParameterTemplate](#workflowparametertemplate)
* **ParameterTemplatePath**: string (WriteOnly): Path to the primary workflow parameter template JSON file inside the repository
* **readmeMarkdown**: string (WriteOnly): The markdown content for the workflow's README file. This provides documentation and usage information for users of the workflow.
* **readmePath**: string: The path to the workflow README markdown file within the repository. This file provides documentation and usage information for the workflow. If not specified, the README.md file from the root directory of the repository will be used.
* **readmeUri**: string (WriteOnly): The S3 URI of the README file for the workflow. This file provides documentation and usage information for the workflow. The S3 URI must begin with s3://USER-OWNED-BUCKET/. The requester must have access to the S3 bucket and object. The max README content length is 500 KiB.
* **Status**: string (ReadOnly)
* **StorageCapacity**: int
* **StorageType**: string
* **Tags**: [TagMap](#tagmap)
* **Type**: string (ReadOnly)
* **Uuid**: string (ReadOnly)
* **VersionName**: string (Required)
* **WorkflowBucketOwnerId**: string
* **WorkflowId**: string (Required)

## ContainerRegistryMap
### Properties
* **ImageMappings**: [ImageMapping](#imagemapping)[]
* **RegistryMappings**: [RegistryMapping](#registrymapping)[]

## ContainerRegistryMap
### Properties
* **ImageMappings**: [ImageMapping](#imagemapping)[]
* **RegistryMappings**: [RegistryMapping](#registrymapping)[]

## DefaultRunSetting
### Properties
* **CacheBehavior**: string: The cache behavior for the runs. Requires CacheId; without it the service silently ignores this value. When CacheId is set and this is omitted, the run cache's own behavior applies.
* **CacheId**: string: The identifier of the run cache to associate with the runs.
* **ConfigurationName**: string: The name of the run configuration to use for the workflow runs. Read echoes the resolved configuration identifier rather than the submitted name.
* **EngineSettings**: [RunBatch_EngineSettings](#runbatchenginesettings): Engine-specific settings shared across all runs, as free-form JSON. Use it for configuration options specific to the workflow engine, such as Nextflow profiles. A per-run setting can replace this value for that run.
* **LogLevel**: string: The verbosity level for CloudWatch Logs emitted during each run. OFF also suppresses log-group creation and its permission pre-check. When omitted, the service applies ALL.
* **Name**: string: An optional user-friendly name applied to each workflow run. A per-run setting can replace this value for that run.
* **NetworkingMode**: string: The networking behavior for the runs. VPC additionally requires ConfigurationName, and that configuration must carry a VPC config, otherwise the service rejects the request. When omitted, the service applies RESTRICTED.
* **OutputBucketOwnerId**: string: The expected AWS account ID of the owner of the output S3 bucket. Supplying it makes the service's bucket-ownership verification strict. A per-run setting can replace this value for that run.
* **OutputUri**: string: The destination S3 URI for workflow outputs. Must begin with s3:// and RoleArn must grant write permission to the bucket; the service rejects other values at submit time. A per-run setting can replace this value for that run.
* **Parameters**: [RunBatch_Parameters](#runbatchparameters): Workflow parameter names and values shared across all runs, as free-form JSON. A per-run setting is merged with this map, and the run-specific value wins when keys overlap.
* **Priority**: int: An integer priority for the workflow runs. Higher values correspond to higher priority; 0 is the lowest. When omitted, the service applies 0. A per-run setting can replace this value for that run.
* **RetentionMode**: string: The retention behavior for runs after completion. When omitted, the service applies RETAIN.
* **RoleArn**: string (Required): The IAM role ARN that grants HealthOmics permissions to access required AWS resources such as Amazon S3 and CloudWatch. The role must have the same permissions required for individual StartRun calls.
* **RunGroupId**: string: The identifier of the run group to contain all workflow runs in the batch.
* **RunTags**: [RunTags](#runtags)
* **ScratchStorageMode**: string: The scratch ephemeral storage mode for storage mounted at /tmp. When omitted, the service applies SHARED. Applies only to CPU tasks; for tasks that use GPUs the service always applies LOCAL.
* **StorageCapacity**: int: The filesystem size in gibibytes (GiB) provisioned for each workflow run and shared by all tasks in that run. When omitted, the value is inherited from the workflow. Forced to no value when StorageType is DYNAMIC.
* **StorageType**: string: The storage type for the workflow runs. When omitted, the service applies STATIC, unless StorageCapacity is set, which infers STATIC.
* **WorkflowId**: string (Required): The identifier of the workflow to run. The workflow must be ACTIVE.
* **WorkflowOwnerId**: string: The AWS account ID of the workflow owner, used for cross-account workflow sharing. Read returns the resolved owner account, which is the caller's account when the workflow is owned locally.
* **WorkflowType**: string: The type of the originating workflow. Batch runs are not supported with READY2RUN workflows, so the service rejects a batch that targets one. When omitted, the service applies PRIVATE and returns it on read.
* **WorkflowVersionName**: string: The version name of the specified workflow. Read derives this from the resolved workflow version ARN.

## DefinitionRepository
### Properties
* **connectionArn**: string
* **excludeFilePatterns**: string[]
* **fullRepositoryId**: string
* **sourceReference**: [SourceReference](#sourcereference)

## DefinitionRepository
### Properties
* **connectionArn**: string
* **excludeFilePatterns**: string[]
* **fullRepositoryId**: string
* **sourceReference**: [SourceReference](#sourcereference)

## ETag
### Properties
* **Algorithm**: string
* **Source1**: string: The ETag hash calculated on Source1 of the read set.
* **Source2**: string: The ETag hash calculated on Source2 of the read set.

## FileInformation
### Properties
* **ContentLength**: int: The file's content length.
* **PartSize**: int: The file's part size.
* **S3Access**: [ReadSetS3Access](#readsets3access)
* **TotalParts**: int: The file's total parts.

## ImageMapping
### Properties
* **DestinationImage**: string
* **SourceImage**: string

## ImageMapping
### Properties
* **DestinationImage**: string
* **SourceImage**: string

## ReadSetFiles
### Properties
* **Index**: [FileInformation](#fileinformation)
* **Source1**: [FileInformation](#fileinformation)
* **Source2**: [FileInformation](#fileinformation)

## ReadSetS3Access
### Properties
* **S3Uri**: string: The S3 URI for each read set file.

## Reference_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ReferenceItem
### Properties
* **ReferenceArn**: string (Required)

## ReferenceItem
### Properties
* **ReferenceArn**: string (Required)

## RegistryMapping
### Properties
* **EcrAccountId**: string
* **EcrRepositoryPrefix**: string
* **UpstreamRegistryUrl**: string
* **UpstreamRepositoryPrefix**: string

## RegistryMapping
### Properties
* **EcrAccountId**: string
* **EcrRepositoryPrefix**: string
* **UpstreamRegistryUrl**: string
* **UpstreamRepositoryPrefix**: string

## RunBatch_EngineSettings
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RunBatch_Parameters
### Properties
### Additional Properties
* **Additional Properties Type**: any

## RunConfigurations
### Properties
* **VpcConfig**: [VpcConfig](#vpcconfig)

## RunSummary
### Properties
* **CancelledRunCount**: int: The number of cancelled runs.
* **CompletedRunCount**: int: The number of completed runs.
* **DeletedRunCount**: int: The number of deleted runs.
* **FailedRunCount**: int: The number of failed runs.
* **PendingRunCount**: int: The number of pending runs.
* **RunningRunCount**: int: The number of running runs.
* **StartingRunCount**: int: The number of starting runs.
* **StoppingRunCount**: int: The number of stopping runs.

## RunTags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SequenceInformation
### Properties
* **Alignment**: string: The sequence's alignment setting.
* **GeneratedFrom**: string: Where the sequence originated.
* **TotalBaseCount**: int: The sequence's total base count.
* **TotalReadCount**: int: The sequence's total read count.

## SequenceStore_S3AccessPolicy
### Properties
### Additional Properties
* **Additional Properties Type**: any

## SourceReference
### Properties
* **type**: string
* **value**: string

## SourceReference
### Properties
* **type**: string
* **value**: string

## SseConfig
### Properties
* **KeyArn**: string
* **Type**: string (Required)

## SseConfig
### Properties
* **KeyArn**: string: An encryption key ARN.
* **Type**: string (Required)

## SseConfig
### Properties
* **KeyArn**: string: An encryption key ARN.
* **Type**: string (Required)

## SseConfig
### Properties
* **KeyArn**: string
* **Type**: string (Required)

## StoreOptions
### Properties

## SubmissionSummary
### Properties
* **FailedCancelSubmissionCount**: int: The number of failed cancel submissions.
* **FailedDeleteSubmissionCount**: int: The number of failed delete submissions.
* **FailedStartSubmissionCount**: int: The number of failed start submissions.
* **PendingStartSubmissionCount**: int: The number of pending start submissions.
* **SuccessfulCancelSubmissionCount**: int: The number of successful cancel submissions.
* **SuccessfulDeleteSubmissionCount**: int: The number of successful delete submissions.
* **SuccessfulStartSubmissionCount**: int: The number of successful start submissions.

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
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]
* **VpcOwnerAccountId**: string: The Amazon Web Services account ID of the cross-account VPC owner for RAM-shared VPC configurations.

## WorkflowParameter
### Properties
* **Description**: string
* **Optional**: bool

## WorkflowParameter
### Properties
* **Description**: string
* **Optional**: bool

## WorkflowParameterTemplate
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

## WorkflowParameterTemplate
### Properties
### Additional Properties
* **Additional Properties Type**: [WorkflowParameter](#workflowparameter)

