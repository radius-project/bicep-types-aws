# AWS.SSMIncidents @ default

## Resource AWS.SSMIncidents/ReplicationSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSMIncidents/ReplicationSetProperties](#awsssmincidentsreplicationsetproperties): properties of the resource

## Resource AWS.SSMIncidents/ResponsePlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSMIncidents/ResponsePlanProperties](#awsssmincidentsresponseplanproperties): properties of the resource

## AWS.SSMIncidents/ReplicationSetProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly): The ARN of the ReplicationSet.
* **DeletionProtected**: [DeletionProtected](#deletionprotected)
* **Regions**: [RegionList](#regionlist): The ReplicationSet configuration.

## Arn
### Properties

## DeletionProtected
### Properties

## RegionList
### Properties

## AWS.SSMIncidents/ResponsePlanProperties
### Properties
* **Actions**: [Action](#action)[]: The list of actions.
* **Arn**: string (ReadOnly): The ARN of the response plan.
* **ChatChannel**: [ChatChannel](#chatchannel)
* **DisplayName**: string: The display name of the response plan.
* **Engagements**: [SSMContact](#ssmcontact)[]: The list of engagements to use.
* **IncidentTemplate**: [IncidentTemplate](#incidenttemplate)
* **Name**: string: The name of the response plan.
* **Tags**: [Tag](#tag)[]: The tags to apply to the response plan.

## Action
### Properties
* **SsmAutomation**: [SsmAutomation](#ssmautomation)

## SsmAutomation
### Properties
* **DocumentName**: string: The document name to use when starting the SSM automation document.
* **DocumentVersion**: string: The version of the document to use when starting the SSM automation document.
* **DynamicParameters**: [DynamicSsmParameter](#dynamicssmparameter)[]: The parameters with dynamic values to set when starting the SSM automation document.
* **Parameters**: [SsmParameter](#ssmparameter)[]: The parameters to set when starting the SSM automation document.
* **RoleArn**: string: The role ARN to use when starting the SSM automation document.
* **TargetAccount**: string: The account type to use when starting the SSM automation document.

## DynamicSsmParameter
### Properties
* **Key**: string
* **Value**: [DynamicSsmParameterValue](#dynamicssmparametervalue)

## DynamicSsmParameterValue
### Properties
* **Variable**: [VariableType](#variabletype)

## VariableType
### Properties

## SsmParameter
### Properties
* **Key**: string
* **Values**: [SsmParameterValue](#ssmparametervalue)[]

## SsmParameterValue
### Properties

## ChatChannel
### Properties
* **ChatbotSns**: [ChatbotSns](#chatbotsns)

## ChatbotSns
### Properties

## SSMContact
### Properties

## IncidentTemplate
### Properties
* **DedupeString**: string: The deduplication string.
* **Impact**: int: The impact value.
* **IncidentTags**: [Tag](#tag)[]: Tags that get applied to incidents created by the StartIncident API action.
* **NotificationTargets**: [NotificationTargetItem](#notificationtargetitem)[]: The list of notification targets.
* **Summary**: string: The summary string.
* **Title**: string: The title string.

## Tag
### Properties
* **Key**: string
* **Value**: string

## NotificationTargetItem
### Properties
* **SnsTopicArn**: [SnsArn](#snsarn)

## SnsArn
### Properties

