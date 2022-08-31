# AWS.AppIntegrations @ default

## Resource AWS.AppIntegrations/DataIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppIntegrations/DataIntegrationProperties](#awsappintegrationsdataintegrationproperties): properties of the resource

## Resource AWS.AppIntegrations/EventIntegration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppIntegrations/EventIntegrationProperties](#awsappintegrationseventintegrationproperties): properties of the resource

## AWS.AppIntegrations/DataIntegrationProperties
### Properties
* **DataIntegrationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the data integration.
* **Description**: string: The data integration description.
* **Id**: string (ReadOnly): The unique identifer of the data integration.
* **KmsKey**: string: The KMS key of the data integration.
* **Name**: string: The name of the data integration.
* **ScheduleConfig**: [ScheduleConfig](#scheduleconfig): The name of the data and how often it should be pulled from the source.
* **SourceURI**: string: The URI of the data source.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the data integration.

## ScheduleConfig
### Properties
* **FirstExecutionFrom**: string: The start date for objects to import in the first flow run. Epoch or ISO timestamp format is supported.
* **Object**: string: The name of the object to pull from the data source.
* **ScheduleExpression**: string: How often the data should be pulled from data source.

## Tag
### Properties
* **Key**: string: A key to identify the tag.
* **Value**: string: Corresponding tag value for the key.

## AWS.AppIntegrations/EventIntegrationProperties
### Properties
* **Associations**: [EventIntegrationAssociation](#eventintegrationassociation)[] (ReadOnly): The associations with the event integration.
* **Description**: string: The event integration description.
* **EventBridgeBus**: string: The Amazon Eventbridge bus for the event integration.
* **EventFilter**: [EventFilter](#eventfilter): The EventFilter (source) associated with the event integration.
* **EventIntegrationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the event integration.
* **Name**: string: The name of the event integration.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the event integration.

## EventIntegrationAssociation
### Properties
* **ClientAssociationMetadata**: [Metadata](#metadata)[]: The metadata associated with the client.
* **ClientId**: string: The identifier for the client that is associated with the event integration.
* **EventBridgeRuleName**: string: The name of the Eventbridge rule.
* **EventIntegrationAssociationArn**: string: The Amazon Resource Name (ARN) for the event integration association.
* **EventIntegrationAssociationId**: string: The identifier for the event integration association.

## Metadata
### Properties
* **Key**: string: A key to identify the metadata.
* **Value**: string: Corresponding metadata value for the key.

## EventFilter
### Properties
* **Source**: string: The source of the events.

## Tag
### Properties
* **Key**: string: A key to identify the tag.
* **Value**: string: Corresponding tag value for the key.

