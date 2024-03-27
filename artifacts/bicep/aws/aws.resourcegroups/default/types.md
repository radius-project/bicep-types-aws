# AWS.ResourceGroups @ default

## Resource AWS.ResourceGroups/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResourceGroups/GroupProperties](#awsresourcegroupsgroupproperties) (Required, Identifier): properties of the resource

## AWS.ResourceGroups/GroupProperties
### Properties
* **Arn**: string (ReadOnly): The Resource Group ARN.
* **Configuration**: [ConfigurationItem](#configurationitem)[]
* **Description**: string: The description of the resource group
* **Name**: string (Required, Identifier): The name of the resource group
* **ResourceQuery**: [ResourceQuery](#resourcequery)
* **Resources**: string[]
* **Tags**: [Tag](#tag)[]

## ConfigurationItem
### Properties
* **Parameters**: [ConfigurationParameter](#configurationparameter)[]
* **Type**: string

## ConfigurationParameter
### Properties
* **Name**: string (Identifier)
* **Values**: string[]

## Query
### Properties
* **ResourceTypeFilters**: string[]
* **StackIdentifier**: string
* **TagFilters**: [TagFilter](#tagfilter)[]

## ResourceQuery
### Properties
* **Query**: [Query](#query)
* **Type**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## TagFilter
### Properties
* **Key**: string
* **Values**: string[]

