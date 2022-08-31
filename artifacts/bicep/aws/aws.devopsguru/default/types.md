# AWS.DevOpsGuru @ default

## Resource AWS.DevOpsGuru/ResourceCollection@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DevOpsGuru/ResourceCollectionProperties](#awsdevopsgururesourcecollectionproperties): properties of the resource

## AWS.DevOpsGuru/ResourceCollectionProperties
### Properties
* **ResourceCollectionFilter**: [ResourceCollectionFilter](#resourcecollectionfilter)
* **ResourceCollectionType**: string (ReadOnly): The type of ResourceCollection

## ResourceCollectionFilter
### Properties
* **CloudFormation**: [CloudFormationCollectionFilter](#cloudformationcollectionfilter)
* **Tags**: [TagCollections](#tagcollections)

## CloudFormationCollectionFilter
### Properties
* **StackNames**: string[]: An array of CloudFormation stack names.

## TagCollections
### Properties

