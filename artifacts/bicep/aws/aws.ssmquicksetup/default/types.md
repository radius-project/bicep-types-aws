# AWS.SSMQuickSetup @ default

## Resource AWS.SSMQuickSetup/ConfigurationManager@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMQuickSetup/ConfigurationManagerProperties](#awsssmquicksetupconfigurationmanagerproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSMQuickSetup/LifecycleAutomation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMQuickSetup/LifecycleAutomationProperties](#awsssmquicksetuplifecycleautomationproperties) (Required, Identifier): properties of the resource

## AutomationParameters
### Properties

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

## AWS.SSMQuickSetup/LifecycleAutomationProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier): The id from the association that is returned when creating the association
* **AutomationDocument**: string (Required): The name of the Automation document to execute
* **AutomationParameters**: [AutomationParameters](#automationparameters) (Required)
* **ResourceKey**: string (Required): A unique identifier used for generating a unique logical ID for the custom resource
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

## TagsMap
### Properties

