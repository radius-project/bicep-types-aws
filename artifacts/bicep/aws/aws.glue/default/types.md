# AWS.Glue @ default

## Resource AWS.Glue/Registry@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/RegistryProperties](#awsglueregistryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Schema@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/SchemaProperties](#awsglueschemaproperties) (Required, Identifier): properties of the resource

## Resource AWS.Glue/Trigger@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Glue/TriggerProperties](#awsgluetriggerproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **Arguments**: [Trigger_Arguments](#triggerarguments): The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.
* **CrawlerName**: string: The name of the crawler to be used with this action.
* **JobName**: string: The name of a job to be executed.
* **NotificationProperty**: [NotificationProperty](#notificationproperty): Specifies configuration properties of a job run notification.
* **SecurityConfiguration**: string: The name of the SecurityConfiguration structure to be used with this action.
* **Timeout**: int: The JobRun timeout in minutes. This is the maximum time that a job run can consume resources before it is terminated and enters TIMEOUT status. The default is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.

## AWS.Glue/RegistryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name for the created Registry.
* **Description**: string: A description of the registry. If description is not provided, there will not be any default value for this.
* **Name**: string (Required): Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.
* **Tags**: [Tag](#tag)[]: List of tags to tag the Registry

## AWS.Glue/SchemaProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name for the Schema.
* **CheckpointVersion**: [SchemaVersion](#schemaversion)
* **Compatibility**: string (Required): Compatibility setting for the schema.
* **DataFormat**: string (Required): Data format name to use for the schema. Accepted values: 'AVRO', 'JSON', 'PROTOBUF'
* **Description**: string: A description of the schema. If description is not provided, there will not be any default value for this.
* **InitialSchemaVersionId**: string (ReadOnly): Represents the version ID associated with the initial schema version.
* **Name**: string (Required): Name of the schema.
* **Registry**: [Registry](#registry)
* **SchemaDefinition**: string (Required, WriteOnly): Definition for the initial schema version in plain-text.
* **Tags**: [Tag](#tag)[]: List of tags to tag the schema

## AWS.Glue/TriggerProperties
### Properties
* **Actions**: [Action](#action)[] (Required): The actions initiated by this trigger.
* **Description**: string: A description of this trigger.
* **EventBatchingCondition**: [EventBatchingCondition](#eventbatchingcondition): Batch condition that must be met (specified number of events received or batch time window expired) before EventBridge event trigger fires.
* **Name**: string (Identifier): The name of the trigger.
* **Predicate**: [Predicate](#predicate): The predicate of this trigger, which defines when it will fire.
* **Schedule**: string: A cron expression used to specify the schedule.
* **StartOnCreation**: bool (WriteOnly): Set to true to start SCHEDULED and CONDITIONAL triggers when created. True is not supported for ON_DEMAND triggers.
* **Tags**: [Trigger_Tags](#triggertags): The tags to use with this trigger.
* **Type**: string (Required): The type of trigger that this is.
* **WorkflowName**: string: The name of the workflow associated with the trigger.

## Condition
### Properties
* **CrawlerName**: string: The name of the crawler to which this condition applies.
* **CrawlState**: string: The state of the crawler to which this condition applies.
* **JobName**: string: The name of the job whose JobRuns this condition applies to, and on which this trigger waits.
* **LogicalOperator**: string: A logical operator.
* **State**: string: The condition state. Currently, the values supported are SUCCEEDED, STOPPED, TIMEOUT, and FAILED.

## EventBatchingCondition
### Properties
* **BatchSize**: int (Required): Number of events that must be received from Amazon EventBridge before EventBridge event trigger fires.
* **BatchWindow**: int: Window of time in seconds after which EventBridge event trigger fires. Window starts when first event is received.

## NotificationProperty
### Properties
* **NotifyDelayAfter**: int: After a job run starts, the number of minutes to wait before sending a job run delay notification

## Predicate
### Properties
* **Conditions**: [Condition](#condition)[]: A list of the conditions that determine when the trigger will fire.
* **Logical**: string: An optional field if only one condition is listed. If multiple conditions are listed, then this field is required.

## Registry
### Properties
* **Arn**: string (Identifier): Amazon Resource Name for the Registry.
* **Name**: string: Name of the registry in which the schema will be created.

## SchemaVersion
### Properties
* **IsLatest**: bool: Indicates if the latest version needs to be updated.
* **VersionNumber**: int: Indicates the version number in the schema to update.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## Tag
### Properties
* **Key**: string (Required): A key to identify the tag.
* **Value**: string (Required): Corresponding tag value for the key.

## Trigger_Arguments
### Properties

## Trigger_Tags
### Properties

