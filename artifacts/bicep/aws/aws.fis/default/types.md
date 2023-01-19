# AWS.FIS @ default

## Resource AWS.FIS/ExperimentTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.FIS/ExperimentTemplateProperties](#awsfisexperimenttemplateproperties) (Required): properties of the resource

## AWS.FIS/ExperimentTemplateProperties
### Properties
* **Actions**: [ExperimentTemplateActionMap](#experimenttemplateactionmap)
* **Description**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **LogConfiguration**: [ExperimentTemplateLogConfiguration](#experimenttemplatelogconfiguration)
* **RoleArn**: string (Required)
* **StopConditions**: [ExperimentTemplateStopCondition](#experimenttemplatestopcondition)[] (Required)
* **Tags**: [ExperimentTemplate_Tags](#experimenttemplatetags) (Required)
* **Targets**: [ExperimentTemplateTargetMap](#experimenttemplatetargetmap) (Required)

## ExperimentTemplateActionMap
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

## ExperimentTemplateStopCondition
### Properties
* **Source**: string (Required)
* **Value**: string

## ExperimentTemplate_Tags
### Properties

## ExperimentTemplateTargetMap
### Properties

