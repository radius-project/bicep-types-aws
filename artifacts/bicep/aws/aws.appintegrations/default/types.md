# AWS.AppIntegrations @ default

## Resource AWS.AppIntegrations/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppIntegrations/ApplicationProperties](#awsappintegrationsapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppIntegrations/DataIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppIntegrations/DataIntegrationProperties](#awsappintegrationsdataintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppIntegrations/EventIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppIntegrations/EventIntegrationProperties](#awsappintegrationseventintegrationproperties) (Required, Identifier): properties of the resource

## Application_ApplicationSourceConfig
### Properties
* **ExternalUrlConfig**: [ExternalUrlConfig](#externalurlconfig) (Required)

## AWS.AppIntegrations/ApplicationProperties
### Properties
* **ApplicationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the application.
* **ApplicationSourceConfig**: [Application_ApplicationSourceConfig](#applicationapplicationsourceconfig) (Required): Application source config
* **Description**: string (Required): The application description.
* **Id**: string (ReadOnly): The id of the application.
* **Name**: string (Required): The name of the application.
* **Namespace**: string: The namespace of the application.
* **Permissions**: string[]: The configuration of events or requests that the application has access to.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the application.

## AWS.AppIntegrations/DataIntegrationProperties
### Properties
* **DataIntegrationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the data integration.
* **Description**: string: The data integration description.
* **FileConfiguration**: [FileConfiguration](#fileconfiguration): The configuration for what files should be pulled from the source.
* **Id**: string (ReadOnly, Identifier): The unique identifer of the data integration.
* **KmsKey**: string (Required): The KMS key of the data integration.
* **Name**: string (Required): The name of the data integration.
* **ObjectConfiguration**: [ObjectConfiguration](#objectconfiguration): The configuration for what data should be pulled from the source.
* **ScheduleConfig**: [ScheduleConfig](#scheduleconfig): The name of the data and how often it should be pulled from the source.
* **SourceURI**: string (Required): The URI of the data source.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the data integration.

## AWS.AppIntegrations/EventIntegrationProperties
### Properties
* **Description**: string: The event integration description.
* **EventBridgeBus**: string (Required): The Amazon Eventbridge bus for the event integration.
* **EventFilter**: [EventFilter](#eventfilter) (Required): The EventFilter (source) associated with the event integration.
* **EventIntegrationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the event integration.
* **Name**: string (Required, Identifier): The name of the event integration.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the event integration.

## DataIntegration_Filters
### Properties

## EventFilter
### Properties
* **Source**: string (Required): The source of the events.

## ExternalUrlConfig
### Properties
* **AccessUrl**: string (Required)
* **ApprovedOrigins**: string[]

## FileConfiguration
### Properties
* **Filters**: [DataIntegration_Filters](#dataintegrationfilters): Restrictions for what files should be pulled from the source.
* **Folders**: string[] (Required): Identifiers for the source folders to pull all files from recursively.

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

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

