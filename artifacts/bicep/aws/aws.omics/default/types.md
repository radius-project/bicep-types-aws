# AWS.Omics @ default

## Resource AWS.Omics/AnnotationStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/AnnotationStoreProperties](#awsomicsannotationstoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/RunGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/RunGroupProperties](#awsomicsrungroupproperties) (Identifier): properties of the resource

## Resource AWS.Omics/VariantStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/VariantStoreProperties](#awsomicsvariantstoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.Omics/Workflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Omics/WorkflowProperties](#awsomicsworkflowproperties) (Identifier): properties of the resource

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
* **CreationTime**: string (ReadOnly)
* **DefinitionUri**: string (WriteOnly)
* **Description**: string
* **Engine**: string
* **Id**: string (ReadOnly, Identifier)
* **Main**: string
* **Name**: string
* **ParameterTemplate**: [WorkflowParameterTemplate](#workflowparametertemplate)
* **Status**: string (ReadOnly)
* **StorageCapacity**: int
* **Tags**: [TagMap](#tagmap)
* **Type**: string (ReadOnly)

## ReferenceItem
### Properties
* **ReferenceArn**: string (Required)

## ReferenceItem
### Properties
* **ReferenceArn**: string (Required)

## SseConfig
### Properties
* **KeyArn**: string
* **Type**: string (Required)

## SseConfig
### Properties
* **KeyArn**: string
* **Type**: string (Required)

## StoreOptions
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

