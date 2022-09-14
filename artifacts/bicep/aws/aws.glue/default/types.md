# AWS.Glue @ default

## Resource AWS.Glue/Registry@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Glue/RegistryProperties](#awsglueregistryproperties) (Required): properties of the resource

## Resource AWS.Glue/Schema@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Glue/SchemaProperties](#awsglueschemaproperties) (Required): properties of the resource

## AWS.Glue/RegistryProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name for the created Registry.
* **Description**: string: A description of the registry. If description is not provided, there will not be any default value for this.
* **Name**: string (Required): Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
* **Tags**: [Tag](#tag)[]: List of tags to tag the Registry

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## AWS.Glue/SchemaProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name for the Schema.
* **CheckpointVersion**: [SchemaVersion](#schemaversion)
* **Compatibility**: string (Required): Compatibility setting for the schema.
* **DataFormat**: string (Required): Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
* **Description**: string: A description of the schema. If description is not provided, there will not be any default value for this.
* **InitialSchemaVersionId**: string (ReadOnly): Represents the version ID associated with the initial schema version.
* **Name**: string (Required): Name of the schema.
* **Registry**: [Registry](#registry)
* **SchemaDefinition**: string (Required, WriteOnly): Definition for the initial schema version in plain-text.
* **Tags**: [Tag](#tag)[]: List of tags to tag the schema

## SchemaVersion
### Properties
* **IsLatest**: bool: Indicates if the latest version needs to be updated.
* **VersionNumber**: int: Indicates the version number in the schema to update.

## Registry
### Properties
* **Arn**: string: Amazon Resource Name for the Registry.
* **Name**: string: Name of the registry in which the schema will be created.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

