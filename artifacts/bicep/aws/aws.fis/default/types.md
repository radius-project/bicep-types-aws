# AWS.FIS @ default

## Resource AWS.FIS/ExperimentTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/ExperimentTemplateProperties](#awsfisexperimenttemplateproperties) (Required): properties of the resource

## Resource AWS.FIS/TargetAccountConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FIS/TargetAccountConfigurationProperties](#awsfistargetaccountconfigurationproperties) (Required): properties of the resource

## AWS.FIS/ExperimentTemplateProperties
### Properties
* **Actions**: [ExperimentTemplateActionMap](#experimenttemplateactionmap)
* **Description**: string (Required)
* **ExperimentOptions**: [ExperimentTemplateExperimentOptions](#experimenttemplateexperimentoptions)
* **Id**: string (ReadOnly, Identifier)
* **LogConfiguration**: [ExperimentTemplateLogConfiguration](#experimenttemplatelogconfiguration)
* **RoleArn**: string (Required)
* **StopConditions**: [ExperimentTemplateStopCondition](#experimenttemplatestopcondition)[] (Required)
* **Tags**: [ExperimentTemplate_Tags](#experimenttemplatetags) (Required)
* **Targets**: [ExperimentTemplateTargetMap](#experimenttemplatetargetmap) (Required)

## ExperimentTemplateActionMap
### Properties

## ExperimentTemplateExperimentOptions
### Properties
* **AccountTargeting**: string: The account targeting setting for the experiment template.
* **EmptyTargetResolutionMode**: string: The target resolution failure mode for the experiment template.

## ExperimentTemplateLogConfiguration
### Properties
* **CloudWatchLogsConfiguration**: [ExperimentTemplate_CloudWatchLogsConfiguration](#experimenttemplatecloudwatchlogsconfiguration)
* **LogSchemaVersion**: int (Required)
* **S3Configuration**: [ExperimentTemplate_S3Configuration](#experimenttemplates3configuration)

## ExperimentTemplate_CloudWatchLogsConfiguration
### Properties
* **LogGroupArn**: string (Required)

## ExperimentTemplate_S3Configuration
### Properties
* **BucketName**: string (Required)
* **Prefix**: string

## ExperimentTemplateStopCondition
### Properties
* **Source**: string (Required)
* **Value**: string

## ExperimentTemplate_Tags
### Properties

## ExperimentTemplateTargetMap
### Properties

## AWS.FIS/TargetAccountConfigurationProperties
### Properties
* **AccountId**: string (Required, Identifier)
* **Description**: string
* **ExperimentTemplateId**: string (Required, Identifier)
* **RoleArn**: string (Required)

