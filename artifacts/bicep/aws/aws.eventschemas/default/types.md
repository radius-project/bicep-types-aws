# AWS.EventSchemas @ default

## Resource AWS.EventSchemas/Discoverer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventSchemas/DiscovererProperties](#awseventschemasdiscovererproperties) (Required): properties of the resource

## Resource AWS.EventSchemas/Registry@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventSchemas/RegistryProperties](#awseventschemasregistryproperties): properties of the resource

## Resource AWS.EventSchemas/RegistryPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventSchemas/RegistryPolicyProperties](#awseventschemasregistrypolicyproperties) (Required): properties of the resource

## Resource AWS.EventSchemas/Schema@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EventSchemas/SchemaProperties](#awseventschemasschemaproperties) (Required): properties of the resource

## AWS.EventSchemas/DiscovererProperties
### Properties
* **CrossAccount**: bool: Defines whether event schemas from other accounts are discovered. Default is True.
* **Description**: string: A description for the discoverer.
* **DiscovererArn**: string (ReadOnly, Identifier): The ARN of the discoverer.
* **DiscovererId**: string (ReadOnly): The Id of the discoverer.
* **SourceArn**: string (Required): The ARN of the event bus.
* **State**: string (ReadOnly): Defines the current state of the discoverer.
* **Tags**: [TagsEntry](#tagsentry)[]: Tags associated with the resource.

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.EventSchemas/RegistryProperties
### Properties
* **Description**: string: A description of the registry to be created.
* **RegistryArn**: string (ReadOnly, Identifier): The ARN of the registry.
* **RegistryName**: string: The name of the schema registry.
* **Tags**: [TagsEntry](#tagsentry)[]: Tags associated with the resource.

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.EventSchemas/RegistryPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **Policy**: [RegistryPolicy_Policy](#registrypolicypolicy) (Required)
* **RegistryName**: string (Required)
* **RevisionId**: string

## RegistryPolicy_Policy
### Properties

## AWS.EventSchemas/SchemaProperties
### Properties
* **Content**: string (Required): The source of the schema definition.
* **Description**: string: A description of the schema.
* **LastModified**: string (ReadOnly): The last modified time of the schema.
* **RegistryName**: string (Required): The name of the schema registry.
* **SchemaArn**: string (ReadOnly, Identifier): The ARN of the schema.
* **SchemaName**: string: The name of the schema.
* **SchemaVersion**: string (ReadOnly): The version number of the schema.
* **Tags**: [TagsEntry](#tagsentry)[]: Tags associated with the resource.
* **Type**: string (Required): The type of schema. Valid types include OpenApi3 and JSONSchemaDraft4.
* **VersionCreatedDate**: string (ReadOnly): The date the schema version was created.

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

