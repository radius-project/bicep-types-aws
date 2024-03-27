# AWS.SSMIncidents @ default

## Resource AWS.SSMIncidents/ReplicationSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMIncidents/ReplicationSetProperties](#awsssmincidentsreplicationsetproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSMIncidents/ResponsePlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMIncidents/ResponsePlanProperties](#awsssmincidentsresponseplanproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **SsmAutomation**: [SsmAutomation](#ssmautomation)

## AWS.SSMIncidents/ReplicationSetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the ReplicationSet.
* **DeletionProtected**: bool
* **Regions**: [ReplicationRegion](#replicationregion)[] (Required): The ReplicationSet configuration.
* **Tags**: [Tag](#tag)[]: The tags to apply to the replication set.

## AWS.SSMIncidents/ResponsePlanProperties
### Properties
* **Actions**: [Action](#action)[]: The list of actions.
* **Arn**: string (ReadOnly, Identifier): The ARN of the response plan.
* **ChatChannel**: [ChatChannel](#chatchannel)
* **DisplayName**: string: The display name of the response plan.
* **Engagements**: string[]: The list of engagements to use.
* **IncidentTemplate**: [IncidentTemplate](#incidenttemplate) (Required)
* **Integrations**: [Integration](#integration)[]: The list of integrations.
* **Name**: string (Required): The name of the response plan.
* **Tags**: [Tag](#tag)[]: The tags to apply to the response plan.

## ChatChannel
### Properties
* **ChatbotSns**: string[]

## DynamicSsmParameter
### Properties
* **Key**: string (Required)
* **Value**: [DynamicSsmParameterValue](#dynamicssmparametervalue) (Required)

## DynamicSsmParameterValue
### Properties
* **Variable**: string

## IncidentTemplate
### Properties
* **DedupeString**: string: The deduplication string.
* **Impact**: int (Required): The impact value.
* **IncidentTags**: [Tag](#tag)[]: Tags that get applied to incidents created by the StartIncident API action.
* **NotificationTargets**: [NotificationTargetItem](#notificationtargetitem)[]: The list of notification targets.
* **Summary**: string: The summary string.
* **Title**: string (Required): The title string.

## Integration
### Properties
* **PagerDutyConfiguration**: [PagerDutyConfiguration](#pagerdutyconfiguration) (Required)

## NotificationTargetItem
### Properties
* **SnsTopicArn**: string

## PagerDutyConfiguration
### Properties
* **Name**: string (Required): The name of the pagerDuty configuration.
* **PagerDutyIncidentConfiguration**: [PagerDutyIncidentConfiguration](#pagerdutyincidentconfiguration) (Required)
* **SecretId**: string (Required): The AWS secrets manager secretId storing the pagerDuty token.

## PagerDutyIncidentConfiguration
### Properties
* **ServiceId**: string (Required): The pagerDuty serviceId.

## RegionConfiguration
### Properties
* **SseKmsKeyId**: string (Required)

## ReplicationRegion
### Properties
* **RegionConfiguration**: [RegionConfiguration](#regionconfiguration)
* **RegionName**: string

## SsmAutomation
### Properties
* **DocumentName**: string (Required): The document name to use when starting the SSM automation document.
* **DocumentVersion**: string: The version of the document to use when starting the SSM automation document.
* **DynamicParameters**: [DynamicSsmParameter](#dynamicssmparameter)[]: The parameters with dynamic values to set when starting the SSM automation document.
* **Parameters**: [SsmParameter](#ssmparameter)[]: The parameters to set when starting the SSM automation document.
* **RoleArn**: string (Required): The role ARN to use when starting the SSM automation document.
* **TargetAccount**: string: The account type to use when starting the SSM automation document.

## SsmParameter
### Properties
* **Key**: string (Required)
* **Values**: string[] (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

