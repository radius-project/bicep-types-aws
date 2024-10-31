# AWS.SSMQuickSetup @ default

## Resource AWS.SSMQuickSetup/ConfigurationManager@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMQuickSetup/ConfigurationManagerProperties](#awsssmquicksetupconfigurationmanagerproperties) (Required, Identifier): properties of the resource

## AWS.SSMQuickSetup/ConfigurationManagerProperties
### Properties
* **ConfigurationDefinitions**: [ConfigurationDefinition](#configurationdefinition)[] (Required, ReadOnly)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **LastModifiedAt**: string (ReadOnly)
* **ManagerArn**: string (ReadOnly, Identifier)
* **Name**: string
* **StatusSummaries**: [StatusSummary](#statussummary)[] (ReadOnly)
* **Tags**: [TagsMap](#tagsmap)

## ConfigurationDefinition
### Properties
* **id**: string
* **LocalDeploymentAdministrationRoleArn**: string
* **LocalDeploymentExecutionRoleName**: string
* **Parameters**: [ConfigurationParametersMap](#configurationparametersmap) (Required)
* **Type**: string (Required)
* **TypeVersion**: string

## ConfigurationParametersMap
### Properties

## StatusDetails
### Properties

## StatusSummary
### Properties
* **LastUpdatedAt**: string (Required)
* **Status**: string
* **StatusDetails**: [StatusDetails](#statusdetails)
* **StatusMessage**: string
* **StatusType**: string (Required)

## TagsMap
### Properties

