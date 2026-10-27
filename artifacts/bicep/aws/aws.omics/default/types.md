# AWS.Omics @ default

## Resource AWS.Omics/AnnotationStore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/AnnotationStoreProperties](#awsomicsannotationstoreproperties) (Required, Identifier): properties of the resource

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

## ImageMapping
### Properties
* **DestinationImage**: string
* **SourceImage**: string

## ImageMapping
### Properties
* **DestinationImage**: string
* **SourceImage**: string

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

## SequenceStore_S3AccessPolicy
### Properties

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
* **KeyArn**: string
* **Type**: string (Required)

## StoreOptions
### Properties

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## WorkflowParameterTemplate
### Properties

## WorkflowParameterTemplate
### Properties

