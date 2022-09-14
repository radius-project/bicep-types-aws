# AWS.ResourceGroups @ default

## Resource AWS.ResourceGroups/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ResourceGroups/GroupProperties](#awsresourcegroupsgroupproperties) (Required): properties of the resource

## AWS.ResourceGroups/GroupProperties
### Properties
* **Arn**: string (ReadOnly): The Resource Group ARN.
* **Configuration**: [Configuration](#configuration)
* **Description**: string: The description of the resource group
* **Name**: string (Required): The name of the resource group
* **ResourceQuery**: [ResourceQuery](#resourcequery)
* **Resources**: string[]
* **Tags**: [Tag](#tag)[]

## Configuration
### Properties

## ResourceQuery
### Properties
* **Query**: [Query](#query)
* **Type**: string

## Query
### Properties
* **ResourceTypeFilters**: string[]
* **StackIdentifier**: string
* **TagFilters**: [TagFilter](#tagfilter)[]

## TagFilter
### Properties
* **Key**: string
* **Values**: string[]

## Tag
### Properties
* **Key**: string
* **Value**: string

