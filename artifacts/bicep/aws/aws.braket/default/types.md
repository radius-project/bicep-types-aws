# AWS.Braket @ default

## Resource AWS.Braket/Job@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Braket/JobProperties](#awsbraketjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Braket/QuantumTask@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Braket/QuantumTaskProperties](#awsbraketquantumtaskproperties) (Required, Identifier): properties of the resource

## Resource AWS.Braket/SpendingLimit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Braket/SpendingLimitProperties](#awsbraketspendinglimitproperties) (Required, Identifier): properties of the resource

## ActionMetadata
### Properties
* **ActionType**: string (Required): The type of action associated with the quantum task.

## AlgorithmSpecification
### Properties
* **ScriptModeConfig**: [ScriptModeConfig](#scriptmodeconfig) (Required)

## Association
### Properties
* **Arn**: string (Required): The Amazon Braket resource ARN.
* **Type**: string (Required): The association type for the specified Amazon Braket resource ARN.

## AWS.Braket/JobProperties
### Properties
* **AlgorithmSpecification**: [AlgorithmSpecification](#algorithmspecification) (Required)
* **CheckpointConfig**: [JobCheckpointConfig](#jobcheckpointconfig)
* **CreatedAt**: string (ReadOnly): The time at which the Amazon Braket hybrid job was created.
* **DeviceConfig**: [DeviceConfig](#deviceconfig) (Required)
* **HyperParameters**: [Job_HyperParameters](#jobhyperparameters): Algorithm-specific parameters used by an Amazon Braket hybrid job.
* **InputDataConfig**: [InputFileConfig](#inputfileconfig)[]: A list of parameters that specify the name and type of input data and where it is located.
* **InstanceConfig**: [InstanceConfig](#instanceconfig) (Required)
* **JobArn**: string (Identifier): The ARN of the Amazon Braket hybrid job.
* **JobName**: string (Required): The name of the Amazon Braket hybrid job.
* **OutputDataConfig**: [JobOutputDataConfig](#joboutputdataconfig) (Required)
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role that Amazon Braket can assume to perform tasks on behalf of a user.
* **Status**: string (ReadOnly): The status of the Amazon Braket hybrid job.
* **StoppingCondition**: [JobStoppingCondition](#jobstoppingcondition)
* **Tags**: [Tag](#tag)[]: Tags associated with the hybrid job.

## AWS.Braket/QuantumTaskProperties
### Properties
* **ActionMetadata**: [ActionMetadata](#actionmetadata) (ReadOnly)
* **Associations**: [Association](#association)[]: The list of Amazon Braket resources associated with the quantum task.
* **CreatedAt**: string (ReadOnly): The time at which the quantum task was created.
* **DeviceArn**: string (Required): The ARN of the device the quantum task was run on.
* **DeviceParameters**: string: The parameters for the device on which the quantum task ran. This is a JSON-encoded string.
* **ExperimentalCapabilities**: [ExperimentalCapabilities](#experimentalcapabilities)
* **OutputS3Bucket**: string (Required): The S3 bucket where quantum task results are stored.
* **OutputS3Directory**: string (ReadOnly): The folder in the S3 bucket where quantum task results are stored.
* **QuantumTaskArn**: string (Identifier): The ARN of the quantum task.
* **Shots**: int (Required): The number of shots used in the quantum task.
* **Status**: string (ReadOnly): The status of the quantum task.
* **Tags**: [Tag](#tag)[]: Tags associated with the quantum task.

## AWS.Braket/SpendingLimitProperties
### Properties
* **CreatedAt**: string (ReadOnly): The date and time when the spending limit was created, in ISO 8601 format.
* **DeviceArn**: string (Required): The Amazon Resource Name (ARN) of the quantum device to apply the spending limit to.
* **QueuedSpend**: string (ReadOnly): The amount currently queued for spending on the device, in USD.
* **SpendingLimit**: string (Required): The maximum amount that can be spent on the specified device, in USD.
* **SpendingLimitArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) that uniquely identifies the spending limit.
* **Tags**: [Tag](#tag)[]: The tags to apply to the spending limit.
* **TimePeriod**: [TimePeriod](#timeperiod)
* **TotalSpend**: string (ReadOnly): The total amount spent on the device so far during the current time period, in USD.
* **UpdatedAt**: string (ReadOnly): The date and time when the spending limit was last modified, in ISO 8601 format.

## DataSource
### Properties
* **S3DataSource**: [S3DataSource](#s3datasource) (Required)

## DeviceConfig
### Properties
* **Device**: string (Required): The primary device ARN used to create and run an Amazon Braket hybrid job.

## ExperimentalCapabilities
### Properties
* **Enabled**: string (Required): Enabled experimental capabilities.

## InputFileConfig
### Properties
* **ChannelName**: string (Required): A named input source that an Amazon Braket hybrid job can consume.
* **ContentType**: string: The MIME type of the data.
* **DataSource**: [DataSource](#datasource) (Required)

## InstanceConfig
### Properties
* **InstanceCount**: int: Configures the number of resource instances to use.
* **InstanceType**: string (Required): Configures the type of resource instances to use.
* **VolumeSizeInGb**: int (Required): The size of the storage volume, in GB, to provision.

## Job_HyperParameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## JobCheckpointConfig
### Properties
* **LocalPath**: string: The local directory where checkpoint data is stored.
* **S3Uri**: string (Required): Identifies the S3 path where you want Amazon Braket to store checkpoint data.

## JobOutputDataConfig
### Properties
* **S3Path**: string (Required): Identifies the S3 path where you want Amazon Braket to store the hybrid job training artifacts.

## JobStoppingCondition
### Properties
* **MaxRuntimeInSeconds**: int: The maximum length of time, in seconds, that an Amazon Braket hybrid job can run.

## S3DataSource
### Properties
* **S3Uri**: string (Required): Identifies either a key name prefix or a manifest that locates the S3 data source.

## ScriptModeConfig
### Properties
* **CompressionType**: string: The type of compression used to store the algorithm scripts.
* **EntryPoint**: string (Required): The entry point in the algorithm scripts.
* **S3Uri**: string (Required): The URI that specifies the S3 path to the algorithm scripts.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TimePeriod
### Properties
* **EndAt**: string (Required): The end date and time for the spending limit period, in ISO 8601 format.
* **StartAt**: string (Required): The start date and time for the spending limit period, in ISO 8601 format.

