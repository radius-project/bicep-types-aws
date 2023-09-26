# AWS.AppIntegrations @ default

## Resource AWS.AppIntegrations/DataIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppIntegrations/DataIntegrationProperties](#awsappintegrationsdataintegrationproperties) (Required): properties of the resource

## Resource AWS.AppIntegrations/EventIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppIntegrations/EventIntegrationProperties](#awsappintegrationseventintegrationproperties) (Required): properties of the resource

## AWS.AppIntegrations/DataIntegrationProperties
### Properties
* **DataIntegrationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the data integration.
* **Description**: string: The data integration description.
* **FileConfiguration**: [FileConfiguration](#fileconfiguration): The configuration for what files should be pulled from the source.
* **Id**: string (ReadOnly, Identifier): The unique identifer of the data integration.
* **KmsKey**: string (Required): The KMS key of the data integration.
* **Name**: string (Required): The name of the data integration.
* **ObjectConfiguration**: [ObjectConfiguration](#objectconfiguration): The configuration for what data should be pulled from the source.
* **ScheduleConfig**: [ScheduleConfig](#scheduleconfig) (Required): The name of the data and how often it should be pulled from the source.
* **SourceURI**: string (Required): The URI of the data source.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the data integration.

## FileConfiguration
### Properties
* **Filters**: [DataIntegration_Filters](#dataintegrationfilters): Restrictions for what files should be pulled from the source.
* **Folders**: string[] (Required): Identifiers for the source folders to pull all files from recursively.

## DataIntegration_Filters
### Properties

## ObjectConfiguration
### Properties

## ScheduleConfig
### Properties
* **FirstExecutionFrom**: string: The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.
* **Object**: string: The name of the object to pull from the data source.
* **ScheduleExpression**: string (Required): How often the data should be pulled from data source.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## AWS.AppIntegrations/EventIntegrationProperties
### Properties
* **Description**: string: The event integration description.
* **EventBridgeBus**: string (Required): The Amazon Eventbridge bus for the event integration.
* **EventFilter**: [EventFilter](#eventfilter) (Required): The EventFilter (source) associated with the event integration.
* **EventIntegrationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the event integration.
* **Name**: string (Required, Identifier): The name of the event integration.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the event integration.

## EventFilter
### Properties
* **Source**: string (Required): The source of the events.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

