# AWS.DevOpsGuru @ default

## Resource AWS.DevOpsGuru/LogAnomalyDetectionIntegration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsGuru/LogAnomalyDetectionIntegrationProperties](#awsdevopsguruloganomalydetectionintegrationproperties) (Identifier): properties of the resource

## Resource AWS.DevOpsGuru/NotificationChannel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsGuru/NotificationChannelProperties](#awsdevopsgurunotificationchannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.DevOpsGuru/ResourceCollection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsGuru/ResourceCollectionProperties](#awsdevopsgururesourcecollectionproperties) (Required, Identifier): properties of the resource

## AWS.DevOpsGuru/LogAnomalyDetectionIntegrationProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)

## AWS.DevOpsGuru/NotificationChannelProperties
### Properties
* **Config**: [NotificationChannelConfig](#notificationchannelconfig) (Required)
* **Id**: string (ReadOnly, Identifier): The ID of a notification channel.

## AWS.DevOpsGuru/ResourceCollectionProperties
### Properties
* **ResourceCollectionFilter**: [ResourceCollectionFilter](#resourcecollectionfilter) (Required)
* **ResourceCollectionType**: string (ReadOnly, Identifier): The type of ResourceCollection

## CloudFormationCollectionFilter
### Properties
* **StackNames**: string[]: An array of CloudFormation stack names.

## NotificationChannelConfig
### Properties
* **Filters**: [NotificationFilterConfig](#notificationfilterconfig)
* **Sns**: [SnsChannelConfig](#snschannelconfig)

## NotificationFilterConfig
### Properties
* **MessageTypes**: string[]
* **Severities**: string[]

## ResourceCollectionFilter
### Properties
* **CloudFormation**: [CloudFormationCollectionFilter](#cloudformationcollectionfilter)
* **Tags**: [TagCollection](#tagcollection)[]

## SnsChannelConfig
### Properties
* **TopicArn**: string

## TagCollection
### Properties
* **AppBoundaryKey**: string: A Tag key for DevOps Guru app boundary.
* **TagValues**: string[]: Tag values of DevOps Guru app boundary.

