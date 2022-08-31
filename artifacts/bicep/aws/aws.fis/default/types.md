# AWS.FIS @ default

## Resource AWS.FIS/ExperimentTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FIS/ExperimentTemplateProperties](#awsfisexperimenttemplateproperties): properties of the resource

## AWS.FIS/ExperimentTemplateProperties
### Properties
* **Actions**: [ExperimentTemplateActionMap](#experimenttemplateactionmap)
* **Description**: [ExperimentTemplateDescription](#experimenttemplatedescription)
* **Id**: [ExperimentTemplateId](#experimenttemplateid) (ReadOnly)
* **LogConfiguration**: [ExperimentTemplateLogConfiguration](#experimenttemplatelogconfiguration)
* **RoleArn**: [RoleArn](#rolearn)
* **StopConditions**: [ExperimentTemplateStopConditionList](#experimenttemplatestopconditionlist)
* **Tags**: [ExperimentTemplate_Tags](#experimenttemplatetags)
* **Targets**: [ExperimentTemplateTargetMap](#experimenttemplatetargetmap)

## ExperimentTemplateActionMap
### Properties

## ExperimentTemplateDescription
### Properties

## ExperimentTemplateId
### Properties

## ExperimentTemplateLogConfiguration
### Properties
* **CloudWatchLogsConfiguration**: [ExperimentTemplate_CloudWatchLogsConfiguration](#experimenttemplatecloudwatchlogsconfiguration)
* **LogSchemaVersion**: int
* **S3Configuration**: [ExperimentTemplate_S3Configuration](#experimenttemplates3configuration)

## ExperimentTemplate_CloudWatchLogsConfiguration
### Properties
* **LogGroupArn**: string

## ExperimentTemplate_S3Configuration
### Properties
* **BucketName**: string
* **Prefix**: string

## RoleArn
### Properties

## ExperimentTemplateStopConditionList
### Properties

## ExperimentTemplate_Tags
### Properties

## ExperimentTemplateTargetMap
### Properties

