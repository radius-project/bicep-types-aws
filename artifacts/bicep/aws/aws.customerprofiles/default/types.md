# AWS.CustomerProfiles @ default

## Resource AWS.CustomerProfiles/CalculatedAttributeDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/CalculatedAttributeDefinitionProperties](#awscustomerprofilescalculatedattributedefinitionproperties) (Required): properties of the resource

## Resource AWS.CustomerProfiles/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/DomainProperties](#awscustomerprofilesdomainproperties) (Required): properties of the resource

## Resource AWS.CustomerProfiles/EventStream@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/EventStreamProperties](#awscustomerprofileseventstreamproperties) (Required): properties of the resource

## Resource AWS.CustomerProfiles/Integration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/IntegrationProperties](#awscustomerprofilesintegrationproperties) (Required): properties of the resource

## Resource AWS.CustomerProfiles/ObjectType@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/ObjectTypeProperties](#awscustomerprofilesobjecttypeproperties) (Required): properties of the resource

## AWS.CustomerProfiles/CalculatedAttributeDefinitionProperties
### Properties
* **AttributeDetails**: [AttributeDetails](#attributedetails) (Required)
* **CalculatedAttributeName**: string (Required, Identifier)
* **Conditions**: [Conditions](#conditions)
* **CreatedAt**: string (ReadOnly): The timestamp of when the calculated attribute definition was created.
* **Description**: string
* **DisplayName**: string
* **DomainName**: string (Required, Identifier)
* **LastUpdatedAt**: string (ReadOnly): The timestamp of when the calculated attribute definition was most recently edited.
* **Statistic**: string (Required)
* **Tags**: [Tag](#tag)[]

## AttributeDetails
### Properties
* **Attributes**: [AttributeItem](#attributeitem)[] (Required)
* **Expression**: string (Required)

## AttributeItem
### Properties
* **Name**: string (Required)

## Conditions
### Properties
* **ObjectCount**: int
* **Range**: [Range](#range)
* **Threshold**: [Threshold](#threshold)

## Range
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## Threshold
### Properties
* **Operator**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.CustomerProfiles/DomainProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this integration got created
* **DeadLetterQueueUrl**: string: The URL of the SQS dead letter queue
* **DefaultEncryptionKey**: string: The default encryption key
* **DefaultExpirationDays**: int: The default number of days until the data within the domain expires.
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the domain

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.CustomerProfiles/EventStreamProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp of when the export was created.
* **DestinationDetails**: [EventStream_DestinationDetails](#eventstreamdestinationdetails) (ReadOnly): Details regarding the Kinesis stream.
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **EventStreamArn**: string (ReadOnly): A unique identifier for the event stream.
* **EventStreamName**: string (Required, Identifier): The name of the event stream.
* **State**: string (ReadOnly): The operational state of destination stream for export.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.
* **Uri**: string (Required)

## EventStream_DestinationDetails
### Properties
* **Status**: string (Required)
* **Uri**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.CustomerProfiles/IntegrationProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this integration got created
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **FlowDefinition**: [FlowDefinition](#flowdefinition) (WriteOnly)
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at
* **ObjectTypeName**: string: The name of the ObjectType defined for the 3rd party data in Profile Service
* **ObjectTypeNames**: [ObjectTypeMapping](#objecttypemapping)[]: The mapping between 3rd party event types and ObjectType names
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the integration
* **Uri**: string (Identifier): The URI of the S3 bucket or any other type of data source.

## FlowDefinition
### Properties
* **Description**: string
* **FlowName**: string (Required)
* **KmsArn**: string (Required)
* **SourceFlowConfig**: [SourceFlowConfig](#sourceflowconfig) (Required)
* **Tasks**: [Task](#task)[] (Required)
* **TriggerConfig**: [TriggerConfig](#triggerconfig) (Required)

## SourceFlowConfig
### Properties
* **ConnectorProfileName**: string
* **ConnectorType**: string (Required)
* **IncrementalPullConfig**: [IncrementalPullConfig](#incrementalpullconfig)
* **SourceConnectorProperties**: [SourceConnectorProperties](#sourceconnectorproperties) (Required)

## IncrementalPullConfig
### Properties
* **DatetimeTypeFieldName**: string

## SourceConnectorProperties
### Properties
* **Marketo**: [MarketoSourceProperties](#marketosourceproperties)
* **S3**: [S3SourceProperties](#s3sourceproperties)
* **Salesforce**: [SalesforceSourceProperties](#salesforcesourceproperties)
* **ServiceNow**: [ServiceNowSourceProperties](#servicenowsourceproperties)
* **Zendesk**: [ZendeskSourceProperties](#zendesksourceproperties)

## MarketoSourceProperties
### Properties
* **Object**: string (Required)

## S3SourceProperties
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string

## SalesforceSourceProperties
### Properties
* **EnableDynamicFieldUpdate**: bool
* **IncludeDeletedRecords**: bool
* **Object**: string (Required)

## ServiceNowSourceProperties
### Properties
* **Object**: string (Required)

## ZendeskSourceProperties
### Properties
* **Object**: string (Required)

## Task
### Properties
* **ConnectorOperator**: [ConnectorOperator](#connectoroperator)
* **DestinationField**: string
* **SourceFields**: string[] (Required)
* **TaskProperties**: [TaskPropertiesMap](#taskpropertiesmap)[]
* **TaskType**: string (Required)

## ConnectorOperator
### Properties
* **Marketo**: string
* **S3**: string
* **Salesforce**: string
* **ServiceNow**: string
* **Zendesk**: string

## TaskPropertiesMap
### Properties
* **OperatorPropertyKey**: string (Required)
* **Property**: string (Required)

## TriggerConfig
### Properties
* **TriggerProperties**: [TriggerProperties](#triggerproperties)
* **TriggerType**: string (Required)

## TriggerProperties
### Properties
* **Scheduled**: [ScheduledTriggerProperties](#scheduledtriggerproperties)

## ScheduledTriggerProperties
### Properties
* **DataPullMode**: string
* **FirstExecutionFrom**: int
* **ScheduleEndTime**: int
* **ScheduleExpression**: string (Required)
* **ScheduleOffset**: int
* **ScheduleStartTime**: int
* **Timezone**: string

## ObjectTypeMapping
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.CustomerProfiles/ObjectTypeProperties
### Properties
* **AllowProfileCreation**: bool: Indicates whether a profile should be created when data is received.
* **CreatedAt**: string (ReadOnly): The time of this integration got created.
* **Description**: string: Description of the profile object type.
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **EncryptionKey**: string: The default encryption key
* **ExpirationDays**: int: The default number of days until the data within the domain expires.
* **Fields**: [FieldMap](#fieldmap)[]: A list of the name and ObjectType field.
* **Keys**: [KeyMap](#keymap)[]: A list of unique keys that can be used to map data to the profile.
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at.
* **ObjectTypeName**: string (Identifier): The name of the profile object type.
* **SourceLastUpdatedTimestampFormat**: string: The format of your sourceLastUpdatedTimestamp that was previously set up.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the integration.
* **TemplateId**: string: A unique identifier for the object template.

## FieldMap
### Properties
* **Name**: string
* **ObjectTypeField**: [ObjectTypeField](#objecttypefield)

## ObjectTypeField
### Properties
* **ContentType**: string: The content type of the field. Used for determining equality when searching.
* **Source**: string: A field of a ProfileObject. For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.
* **Target**: string: The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.

## KeyMap
### Properties
* **Name**: string
* **ObjectTypeKeyList**: [ObjectTypeKey](#objecttypekey)[]

## ObjectTypeKey
### Properties
* **FieldNames**: string[]: The reference for the key name of the fields map. 
* **StandardIdentifiers**: string[]: The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

