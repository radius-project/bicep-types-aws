# AWS.FIS @ default

## Resource AWS.FIS/Action@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/ActionProperties](#awsfisactionproperties) (Identifier): properties of the resource

## Resource AWS.FIS/Experiment@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/ExperimentProperties](#awsfisexperimentproperties) (Identifier): properties of the resource

## Resource AWS.FIS/ExperimentTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/ExperimentTemplateProperties](#awsfisexperimenttemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.FIS/SafetyLever@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/SafetyLeverProperties](#awsfissafetyleverproperties) (Identifier): properties of the resource

## Resource AWS.FIS/TargetAccountConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/TargetAccountConfigurationProperties](#awsfistargetaccountconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.FIS/ActionProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the action.
* **Description**: string (ReadOnly): The description for the action.
* **Id**: string (ReadOnly): The ID of the action.
* **Tags**: [Tag](#tag)[] (ReadOnly): The tags for the action.

## AWS.FIS/ExperimentProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the experiment.
* **CreationTime**: string (ReadOnly): The time that the experiment was created.
* **EndTime**: string (ReadOnly): The time that the experiment ended.
* **ExperimentOptions**: [ExperimentOptions](#experimentoptions)
* **ExperimentTemplateId**: string: The ID of the experiment template.
* **Id**: string (ReadOnly): The ID of the experiment.
* **RoleArn**: string (ReadOnly): The Amazon Resource Name (ARN) of an IAM role that grants the FIS service permission to perform service actions on your behalf.
* **StartTime**: string (ReadOnly): The time that the experiment started.
* **Tags**: [Tag](#tag)[] (ReadOnly): The tags for the experiment.

## AWS.FIS/ExperimentTemplateProperties
### Properties
* **Actions**: [ExperimentTemplateActionMap](#experimenttemplateactionmap)
* **Description**: string (Required)
* **ExperimentOptions**: [ExperimentTemplateExperimentOptions](#experimenttemplateexperimentoptions)
* **ExperimentReportConfiguration**: [ExperimentTemplateExperimentReportConfiguration](#experimenttemplateexperimentreportconfiguration)
* **Id**: string (ReadOnly, Identifier)
* **LogConfiguration**: [ExperimentTemplateLogConfiguration](#experimenttemplatelogconfiguration)
* **RoleArn**: string (Required)
* **StopConditions**: [ExperimentTemplateStopCondition](#experimenttemplatestopcondition)[] (Required)
* **Tags**: [ExperimentTemplate_Tags](#experimenttemplatetags)
* **Targets**: [ExperimentTemplateTargetMap](#experimenttemplatetargetmap) (Required)

## AWS.FIS/SafetyLeverProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the safety lever.
* **Id**: string: The ID of the safety lever.
* **Reason**: string (ReadOnly): The reason for the current state of the safety lever.
* **Status**: string (ReadOnly): The status of the safety lever.

## AWS.FIS/TargetAccountConfigurationProperties
### Properties
* **AccountId**: string (Required, Identifier)
* **Description**: string
* **ExperimentTemplateId**: string (Required, Identifier)
* **RoleArn**: string (Required)

## CloudWatchDashboard
### Properties
* **DashboardIdentifier**: string (Required)

## ExperimentOptions
### Properties
* **ActionsMode**: string: The actions mode.

## ExperimentTemplate_CloudWatchLogsConfiguration
### Properties
* **LogGroupArn**: string (Required)

## ExperimentTemplate_DataSources
### Properties
* **CloudWatchDashboards**: [CloudWatchDashboard](#cloudwatchdashboard)[]

## ExperimentTemplate_Outputs
### Properties
* **ExperimentReportS3Configuration**: [ExperimentTemplate_Outputs_ExperimentReportS3Configuration](#experimenttemplateoutputsexperimentreports3configuration) (Required)

## ExperimentTemplate_Outputs_ExperimentReportS3Configuration
### Properties
* **BucketName**: string (Required)
* **Prefix**: string

## ExperimentTemplate_S3Configuration
### Properties
* **BucketName**: string (Required)
* **Prefix**: string

## ExperimentTemplate_Tags
### Properties

## ExperimentTemplateActionMap
### Properties

## ExperimentTemplateExperimentOptions
### Properties
* **AccountTargeting**: string: The account targeting setting for the experiment template.
* **EmptyTargetResolutionMode**: string: The target resolution failure mode for the experiment template.

## ExperimentTemplateExperimentReportConfiguration
### Properties
* **DataSources**: [ExperimentTemplate_DataSources](#experimenttemplatedatasources)
* **Outputs**: [ExperimentTemplate_Outputs](#experimenttemplateoutputs) (Required)
* **PostExperimentDuration**: string
* **PreExperimentDuration**: string

## ExperimentTemplateLogConfiguration
### Properties
* **CloudWatchLogsConfiguration**: [ExperimentTemplate_CloudWatchLogsConfiguration](#experimenttemplatecloudwatchlogsconfiguration)
* **LogSchemaVersion**: int (Required)
* **S3Configuration**: [ExperimentTemplate_S3Configuration](#experimenttemplates3configuration)

## ExperimentTemplateStopCondition
### Properties
* **Source**: string (Required)
* **Value**: string

## ExperimentTemplateTargetMap
### Properties

## Tag
### Properties
* **Key**: string (Required): The key in a tag.
* **Value**: string (Required): The value in a tag.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

