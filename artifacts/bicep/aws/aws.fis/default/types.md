# AWS.FIS @ default

## Resource AWS.FIS/ExperimentTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FIS/ExperimentTemplateProperties](#awsfisexperimenttemplateproperties) (Required): properties of the resource

## AWS.FIS/ExperimentTemplateProperties
### Properties
* **Actions**: [ExperimentTemplateActionMap](#experimenttemplateactionmap)
* **Description**: [ExperimentTemplateDescription](#experimenttemplatedescription) (Required)
* **Id**: [ExperimentTemplateId](#experimenttemplateid) (ReadOnly)
* **LogConfiguration**: [ExperimentTemplateLogConfiguration](#experimenttemplatelogconfiguration)
* **RoleArn**: [RoleArn](#rolearn) (Required)
* **StopConditions**: [ExperimentTemplateStopConditionList](#experimenttemplatestopconditionlist) (Required)
* **Tags**: [ExperimentTemplate_Tags](#experimenttemplatetags) (Required)
* **Targets**: [ExperimentTemplateTargetMap](#experimenttemplatetargetmap) (Required)

## ExperimentTemplateActionMap
### Properties

## ExperimentTemplateDescription
### Properties

## ExperimentTemplateId
### Properties

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

## RoleArn
### Properties

## ExperimentTemplateStopConditionList
### Properties

## ExperimentTemplate_Tags
### Properties

## ExperimentTemplateTargetMap
### Properties

