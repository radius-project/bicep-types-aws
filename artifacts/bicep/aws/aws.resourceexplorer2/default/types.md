# AWS.ResourceExplorer2 @ default

## Resource AWS.ResourceExplorer2/DefaultViewAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResourceExplorer2/DefaultViewAssociationProperties](#awsresourceexplorer2defaultviewassociationproperties) (Required): properties of the resource

## Resource AWS.ResourceExplorer2/Index@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResourceExplorer2/IndexProperties](#awsresourceexplorer2indexproperties) (Required): properties of the resource

## Resource AWS.ResourceExplorer2/View@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResourceExplorer2/ViewProperties](#awsresourceexplorer2viewproperties) (Required): properties of the resource

## AWS.ResourceExplorer2/DefaultViewAssociationProperties
### Properties
* **AssociatedAwsPrincipal**: string (ReadOnly, Identifier): The AWS principal that the default view is associated with, used as the unique identifier for this resource.
* **ViewArn**: string (Required)

## AWS.ResourceExplorer2/IndexProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **IndexState**: string (ReadOnly)
* **Tags**: [TagMap](#tagmap)
* **Type**: string (Required)

## TagMap
### Properties

## AWS.ResourceExplorer2/ViewProperties
### Properties
* **Filters**: [Filters](#filters)
* **IncludedProperties**: [IncludedProperty](#includedproperty)[]
* **Tags**: [TagMap](#tagmap)
* **ViewArn**: string (ReadOnly, Identifier)
* **ViewName**: string (Required)

## Filters
### Properties
* **FilterString**: string (Required)

## IncludedProperty
### Properties
* **Name**: string (Required)

## TagMap
### Properties

