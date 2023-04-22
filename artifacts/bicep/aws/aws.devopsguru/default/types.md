# AWS.DevOpsGuru @ default

## Resource AWS.DevOpsGuru/LogAnomalyDetectionIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsGuru/LogAnomalyDetectionIntegrationProperties](#awsdevopsguruloganomalydetectionintegrationproperties): properties of the resource

## Resource AWS.DevOpsGuru/ResourceCollection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DevOpsGuru/ResourceCollectionProperties](#awsdevopsgururesourcecollectionproperties) (Required): properties of the resource

## AWS.DevOpsGuru/LogAnomalyDetectionIntegrationProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)

## AWS.DevOpsGuru/ResourceCollectionProperties
### Properties
* **ResourceCollectionFilter**: [ResourceCollectionFilter](#resourcecollectionfilter) (Required)
* **ResourceCollectionType**: string (ReadOnly, Identifier): The type of ResourceCollection

## ResourceCollectionFilter
### Properties
* **CloudFormation**: [CloudFormationCollectionFilter](#cloudformationcollectionfilter)
* **Tags**: [TagCollection](#tagcollection)[]

## CloudFormationCollectionFilter
### Properties
* **StackNames**: string[]: An array of CloudFormation stack names.

## TagCollection
### Properties
* **AppBoundaryKey**: string: A Tag key for DevOps Guru app boundary.
* **TagValues**: string[]: Tag values of DevOps Guru app boundary.

