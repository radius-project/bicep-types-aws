# AWS.CustomerProfiles @ default

## Resource AWS.CustomerProfiles/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CustomerProfiles/DomainProperties](#awscustomerprofilesdomainproperties) (Required): properties of the resource

## Resource AWS.CustomerProfiles/Integration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CustomerProfiles/IntegrationProperties](#awscustomerprofilesintegrationproperties) (Required): properties of the resource

## Resource AWS.CustomerProfiles/ObjectType@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CustomerProfiles/ObjectTypeProperties](#awscustomerprofilesobjecttypeproperties) (Required): properties of the resource

## AWS.CustomerProfiles/DomainProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this integration got created
* **DeadLetterQueueUrl**: string: The URL of the SQS dead letter queue
* **DefaultEncryptionKey**: string: The default encryption key
* **DefaultExpirationDays**: int: The default number of days until the data within the domain expires.
* **DomainName**: string (Required): The unique name of the domain.
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the domain

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.CustomerProfiles/IntegrationProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this integration got created
* **DomainName**: string (Required): The unique name of the domain.
* **FlowDefinition**: [FlowDefinition](#flowdefinition) (WriteOnly)
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at
* **ObjectTypeName**: string: The name of the ObjectType defined for the 3rd party data in Profile Service
* **ObjectTypeNames**: [ObjectTypeMapping](#objecttypemapping)[]: The mapping between 3rd party event types and ObjectType names
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the integration
* **Uri**: string: The URI of the S3 bucket or any other type of data source.

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
* **ConnectorType**: [ConnectorType](#connectortype) (Required)
* **IncrementalPullConfig**: [IncrementalPullConfig](#incrementalpullconfig)
* **SourceConnectorProperties**: [SourceConnectorProperties](#sourceconnectorproperties) (Required)

## ConnectorType
### Properties

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
* **Object**: [Object](#object) (Required)

## Object
### Properties

## S3SourceProperties
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string

## SalesforceSourceProperties
### Properties
* **EnableDynamicFieldUpdate**: bool
* **IncludeDeletedRecords**: bool
* **Object**: [Object](#object) (Required)

## ServiceNowSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## ZendeskSourceProperties
### Properties
* **Object**: [Object](#object) (Required)

## Task
### Properties
* **ConnectorOperator**: [ConnectorOperator](#connectoroperator)
* **DestinationField**: [DestinationField](#destinationfield)
* **SourceFields**: string[] (Required)
* **TaskProperties**: [TaskPropertiesMap](#taskpropertiesmap)[]
* **TaskType**: [TaskType](#tasktype) (Required)

## ConnectorOperator
### Properties
* **Marketo**: [MarketoConnectorOperator](#marketoconnectoroperator)
* **S3**: [S3ConnectorOperator](#s3connectoroperator)
* **Salesforce**: [SalesforceConnectorOperator](#salesforceconnectoroperator)
* **ServiceNow**: [ServiceNowConnectorOperator](#servicenowconnectoroperator)
* **Zendesk**: [ZendeskConnectorOperator](#zendeskconnectoroperator)

## MarketoConnectorOperator
### Properties

## S3ConnectorOperator
### Properties

## SalesforceConnectorOperator
### Properties

## ServiceNowConnectorOperator
### Properties

## ZendeskConnectorOperator
### Properties

## DestinationField
### Properties

## TaskPropertiesMap
### Properties
* **OperatorPropertyKey**: [OperatorPropertiesKeys](#operatorpropertieskeys) (Required)
* **Property**: string (Required)

## OperatorPropertiesKeys
### Properties

## TaskType
### Properties

## TriggerConfig
### Properties
* **TriggerProperties**: [TriggerProperties](#triggerproperties)
* **TriggerType**: [TriggerType](#triggertype) (Required)

## TriggerProperties
### Properties
* **Scheduled**: [ScheduledTriggerProperties](#scheduledtriggerproperties)

## ScheduledTriggerProperties
### Properties
* **DataPullMode**: string
* **FirstExecutionFrom**: [Date](#date)
* **ScheduleEndTime**: [Date](#date)
* **ScheduleExpression**: string (Required)
* **ScheduleOffset**: int
* **ScheduleStartTime**: [Date](#date)
* **Timezone**: string

## Date
### Properties

## TriggerType
### Properties

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
* **DomainName**: string (Required): The unique name of the domain.
* **EncryptionKey**: string: The default encryption key
* **ExpirationDays**: int: The default number of days until the data within the domain expires.
* **Fields**: [FieldMap](#fieldmap)[]: A list of the name and ObjectType field.
* **Keys**: [KeyMap](#keymap)[]: A list of unique keys that can be used to map data to the profile.
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at.
* **ObjectTypeName**: string: The name of the profile object type.
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

