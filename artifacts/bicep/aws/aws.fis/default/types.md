# AWS.FIS @ default

## Resource AWS.FIS/ExperimentTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/ExperimentTemplateProperties](#awsfisexperimenttemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.FIS/TargetAccountConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/TargetAccountConfigurationProperties](#awsfistargetaccountconfigurationproperties) (Required, Identifier): properties of the resource

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
* **Tags**: [ExperimentTemplate_Tags](#experimenttemplatetags) (Required)
* **Targets**: [ExperimentTemplateTargetMap](#experimenttemplatetargetmap) (Required)

## AWS.FIS/TargetAccountConfigurationProperties
### Properties
* **AccountId**: string (Required, Identifier)
* **Description**: string
* **ExperimentTemplateId**: string (Required, Identifier)
* **RoleArn**: string (Required)

## CloudWatchDashboard
### Properties
* **DashboardIdentifier**: string (Required)

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

