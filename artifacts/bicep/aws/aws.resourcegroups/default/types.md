# AWS.ResourceGroups @ default

## Resource AWS.ResourceGroups/Group@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResourceGroups/GroupProperties](#awsresourcegroupsgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResourceGroups/TagSyncTask@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResourceGroups/TagSyncTaskProperties](#awsresourcegroupstagsynctaskproperties) (Required, Identifier): properties of the resource

## AWS.ResourceGroups/GroupProperties
### Properties
* **Arn**: string (ReadOnly): The Resource Group ARN.
* **Configuration**: [ConfigurationItem](#configurationitem)[]
* **Description**: string: The description of the resource group
* **Name**: string (Required, Identifier): The name of the resource group
* **ResourceQuery**: [ResourceQuery](#resourcequery)
* **Resources**: string[]
* **Tags**: [Tag](#tag)[]

## AWS.ResourceGroups/TagSyncTaskProperties
### Properties
* **Group**: string (Required): The Amazon resource name (ARN) or name of the application group for which you want to create a tag-sync task
* **GroupArn**: string (ReadOnly): The Amazon resource name (ARN) of the ApplicationGroup for which the TagSyncTask is created
* **GroupName**: string (ReadOnly): The Name of the application group for which the TagSyncTask is created
* **RoleArn**: string (Required): The Amazon resource name (ARN) of the role assumed by the service to tag and untag resources on your behalf.
* **Status**: string (ReadOnly): The status of the TagSyncTask
* **TagKey**: string (Required): The tag key. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
* **TagValue**: string (Required): The tag value. Resources tagged with this tag key-value pair will be added to the application. If a resource with this tag is later untagged, the tag-sync task removes the resource from the application.
* **TaskArn**: string (ReadOnly, Identifier): The ARN of the TagSyncTask resource

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

