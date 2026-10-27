# AWS.CustomerProfiles @ default

## Resource AWS.CustomerProfiles/CalculatedAttributeDefinition@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/CalculatedAttributeDefinitionProperties](#awscustomerprofilescalculatedattributedefinitionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/Domain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/DomainProperties](#awscustomerprofilesdomainproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/DomainObjectType@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/DomainObjectTypeProperties](#awscustomerprofilesdomainobjecttypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/EventStream@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/EventStreamProperties](#awscustomerprofileseventstreamproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/EventTrigger@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/EventTriggerProperties](#awscustomerprofileseventtriggerproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/Integration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/IntegrationProperties](#awscustomerprofilesintegrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/ObjectType@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/ObjectTypeProperties](#awscustomerprofilesobjecttypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/Recommender@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/RecommenderProperties](#awscustomerprofilesrecommenderproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/RecommenderSchema@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/RecommenderSchemaProperties](#awscustomerprofilesrecommenderschemaproperties) (Required, Identifier): properties of the resource

## Resource AWS.CustomerProfiles/SegmentDefinition@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CustomerProfiles/SegmentDefinitionProperties](#awscustomerprofilessegmentdefinitionproperties) (Required, Identifier): properties of the resource

## AttributeDetails
### Properties
* **Attributes**: [AttributeItem](#attributeitem)[] (Required)
* **Expression**: string (Required)

## AttributeItem
### Properties
* **Name**: string (Required)

## AttributeTypesSelector
### Properties
* **Address**: string[]: The Address type. You can choose from Address, BusinessAddress, MaillingAddress, and ShippingAddress. You only can use the Address type in the MatchingRule. For example, if you want to match profile based on BusinessAddress.City or MaillingAddress.City, you need to choose the BusinessAddress and the MaillingAddress to represent the Address type and specify the Address.City on the matching rule.
* **AttributeMatchingModel**: string (Required): Configures the AttributeMatchingModel, you can either choose ONE_TO_ONE or MANY_TO_MANY.
* **EmailAddress**: string[]: The Email type. You can choose from EmailAddress, BusinessEmailAddress and PersonalEmailAddress. You only can use the EmailAddress type in the MatchingRule. For example, if you want to match profile based on PersonalEmailAddress or BusinessEmailAddress, you need to choose the PersonalEmailAddress and the BusinessEmailAddress to represent the EmailAddress type and only specify the EmailAddress on the matching rule.
* **PhoneNumber**: string[]: The PhoneNumber type. You can choose from PhoneNumber, HomePhoneNumber, and MobilePhoneNumber. You only can use the PhoneNumber type in the MatchingRule. For example, if you want to match a profile based on Phone or HomePhone, you need to choose the Phone and the HomePhone to represent the PhoneNumber type and only specify the PhoneNumber on the matching rule.

## AutoMerging
### Properties
* **ConflictResolution**: [ConflictResolution](#conflictresolution)
* **Consolidation**: [Consolidation](#consolidation)
* **Enabled**: bool (Required): The flag that enables the auto-merging of duplicate profiles.
* **MinAllowedConfidenceScoreForMerging**: int: A number between 0 and 1 that represents the minimum confidence score required for profiles within a matching group to be merged during the auto-merge process. A higher score means higher similarity required to merge profiles.

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
* **Readiness**: [Readiness](#readiness) (ReadOnly)
* **Statistic**: string (Required)
* **Status**: string (ReadOnly): The status of the calculated attribute definition.
* **Tags**: [Tag](#tag)[]
* **UseHistoricalData**: bool: Whether to use historical data for the calculated attribute.

## AWS.CustomerProfiles/DomainObjectTypeProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp of when the domain object type was created.
* **Description**: string
* **DomainName**: string (Required, Identifier)
* **EncryptionKey**: string
* **Fields**: [DomainObjectTypeFields](#domainobjecttypefields) (Required)
* **LastUpdatedAt**: string (ReadOnly): The timestamp of when the domain object type was most recently edited.
* **ObjectTypeName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.CustomerProfiles/DomainProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this integration got created
* **DataStore**: [DataStore](#datastore)
* **DeadLetterQueueUrl**: string: The URL of the SQS dead letter queue
* **DefaultEncryptionKey**: string: The default encryption key
* **DefaultExpirationDays**: int (Required): The default number of days until the data within the domain expires.
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at
* **Matching**: [Matching](#matching)
* **RuleBasedMatching**: [RuleBasedMatching](#rulebasedmatching)
* **Stats**: [DomainStats](#domainstats) (ReadOnly)
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the domain

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

## AWS.CustomerProfiles/EventTriggerProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp of when the event trigger was created.
* **Description**: string
* **DomainName**: string (Required, Identifier)
* **EventTriggerConditions**: [EventTriggerCondition](#eventtriggercondition)[] (Required)
* **EventTriggerLimits**: [EventTriggerLimits](#eventtriggerlimits)
* **EventTriggerName**: string (Required, Identifier)
* **LastUpdatedAt**: string (ReadOnly): The timestamp of when the event trigger was most recently updated.
* **ObjectTypeName**: string (Required)
* **SegmentFilter**: string
* **Tags**: [Tag](#tag)[]

## AWS.CustomerProfiles/IntegrationProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this integration got created
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **EventTriggerNames**: string[]: A list of unique names for active event triggers associated with the integration.
* **FlowDefinition**: [FlowDefinition](#flowdefinition) (WriteOnly)
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at
* **ObjectTypeName**: string: The name of the ObjectType defined for the 3rd party data in Profile Service
* **ObjectTypeNames**: [ObjectTypeMapping](#objecttypemapping)[]: The mapping between 3rd party event types and ObjectType names
* **Scope**: string: Scope of the integration, such as 'PROFILE' or 'DOMAIN'
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the integration
* **Uri**: string (Identifier): The URI of the S3 bucket or any other type of data source.

## AWS.CustomerProfiles/ObjectTypeProperties
### Properties
* **AllowProfileCreation**: bool: Indicates whether a profile should be created when data is received.
* **CreatedAt**: string (ReadOnly): The time of this integration got created.
* **Description**: string (Required): Description of the profile object type.
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **EncryptionKey**: string: The default encryption key
* **ExpirationDays**: int: The default number of days until the data within the domain expires.
* **Fields**: [FieldMap](#fieldmap)[]: A list of the name and ObjectType field.
* **Keys**: [KeyMap](#keymap)[]: A list of unique keys that can be used to map data to the profile.
* **LastUpdatedAt**: string (ReadOnly): The time of this integration got last updated at.
* **MaxAvailableProfileObjectCount**: int (ReadOnly): The maximum available number of profile objects
* **MaxProfileObjectCount**: int: The maximum number of profile objects for this object type
* **ObjectTypeName**: string (Required, Identifier): The name of the profile object type.
* **SourceLastUpdatedTimestampFormat**: string: The format of your sourceLastUpdatedTimestamp that was previously set up.
* **SourcePriority**: int: Defines the priority order of object types. Lower value indicates higher priority.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the integration.
* **TemplateId**: string: A unique identifier for the object template.

## AWS.CustomerProfiles/RecommenderProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp of when the recommender was created.
* **Description**: string
* **DomainName**: string (Required, Identifier)
* **FailureReason**: string (ReadOnly): The reason for recommender failure.
* **LastUpdatedAt**: string (ReadOnly): The timestamp of when the recommender was last updated.
* **LatestRecommenderUpdate**: [RecommenderUpdate](#recommenderupdate) (ReadOnly)
* **RecommenderArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the recommender.
* **RecommenderConfig**: [RecommenderConfig](#recommenderconfig)
* **RecommenderName**: string (Required, Identifier)
* **RecommenderRecipeName**: string (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.
* **TrainingMetrics**: [TrainingMetrics](#trainingmetrics)[] (ReadOnly)

## AWS.CustomerProfiles/RecommenderSchemaProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedAt**: string (ReadOnly)
* **DomainName**: string (Required)
* **Fields**: [RecommenderSchema_Fields](#recommenderschemafields) (Required)
* **RecommenderSchemaName**: string (Required)
* **Status**: string (ReadOnly)
* **Tags**: [RecommenderSchema_Tags](#recommenderschematags)[]

## AWS.CustomerProfiles/SegmentDefinitionProperties
### Properties
* **CreatedAt**: string (ReadOnly): The time of this segment definition got created.
* **Description**: string: The description of the segment definition.
* **DisplayName**: string (Required): The display name of the segment definition.
* **DomainName**: string (Required, Identifier): The unique name of the domain.
* **SegmentDefinitionArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the segment definition.
* **SegmentDefinitionName**: string (Required, Identifier): The unique name of the segment definition.
* **SegmentGroups**: [SegmentGroup](#segmentgroup): An array that defines the set of segment criteria to evaluate when handling segment groups for the segment.
* **SegmentSort**: [SegmentSort](#segmentsort): The segment sort configuration for ordering segment results.
* **SegmentSqlQuery**: string: The SQL query that defines the segment criteria.
* **SegmentType**: string (ReadOnly): The SQL query that defines the segment criteria.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.

## Conditions
### Properties
* **ObjectCount**: int
* **Range**: [Range](#range)
* **Threshold**: [Threshold](#threshold)

## ConflictResolution
### Properties
* **ConflictResolvingModel**: string (Required): How the auto-merging process should resolve conflicts between different profiles.
* **SourceName**: string: The ObjectType name that is used to resolve profile merging conflicts when choosing SOURCE as the ConflictResolvingModel.

## ConnectorOperator
### Properties
* **Marketo**: string
* **S3**: string
* **Salesforce**: string
* **ServiceNow**: string
* **Zendesk**: string

## Consolidation
### Properties
* **MatchingAttributesList**: string[][] (Required): A list of matching criteria.

## DataStore
### Properties
* **Enabled**: bool: Whether the data store is enabled.
* **Readiness**: [Readiness](#readiness) (ReadOnly)

## Dimension
### Properties

## DomainObjectTypeFields
### Properties

## DomainStats
### Properties
* **MeteringProfileCount**: int: The number of profiles that you are currently paying for in the domain. If you have more than 100 objects associated with a single profile, that profile counts as two profiles. If you have more than 200 objects, that profile counts as three, and so on.
* **ObjectCount**: int: The total number of objects in domain.
* **ProfileCount**: int: The total number of profiles currently in the domain.
* **TotalSize**: int: The total size, in bytes, of all objects in the domain.

## EventParameters
### Properties
* **EventType**: string (Required): The type of event
* **EventValueThreshold**: int: The threshold of the event type. Only events with a value greater or equal to this threshold will be considered for solution creation.

## EventsConfig
### Properties
* **EventParametersList**: [EventParameters](#eventparameters)[] (Required): List of event parameters with their value thresholds

## EventStream_DestinationDetails
### Properties
* **Status**: string (Required)
* **Uri**: string (Required)

## EventTriggerCondition
### Properties
* **EventTriggerDimensions**: [EventTriggerDimension](#eventtriggerdimension)[] (Required)
* **LogicalOperator**: string (Required)

## EventTriggerDimension
### Properties
* **ObjectAttributes**: [ObjectAttribute](#objectattribute)[] (Required)

## EventTriggerLimits
### Properties
* **EventExpiration**: int
* **Periods**: [Period](#period)[]

## ExportingConfig
### Properties
* **S3Exporting**: [S3ExportingConfig](#s3exportingconfig)

## FieldMap
### Properties
* **Name**: string
* **ObjectTypeField**: [ObjectTypeField](#objecttypefield)

## FlowDefinition
### Properties
* **Description**: string
* **FlowName**: string (Required)
* **KmsArn**: string (Required)
* **SourceFlowConfig**: [SourceFlowConfig](#sourceflowconfig) (Required)
* **Tasks**: [Task](#task)[] (Required)
* **TriggerConfig**: [TriggerConfig](#triggerconfig) (Required)

## Group
### Properties
* **Dimensions**: [Dimension](#dimension)[]
* **SourceSegments**: [SourceSegment](#sourcesegment)[]
* **SourceType**: string
* **Type**: string

## IncrementalPullConfig
### Properties
* **DatetimeTypeFieldName**: string

## JobSchedule
### Properties
* **DayOfTheWeek**: string (Required): The day when the Identity Resolution Job should run every week.
* **Time**: string (Required): The time when the Identity Resolution Job should run every week.

## KeyMap
### Properties
* **Name**: string
* **ObjectTypeKeyList**: [ObjectTypeKey](#objecttypekey)[]

## MarketoSourceProperties
### Properties
* **Object**: string (Required)

## Matching
### Properties
* **AutoMerging**: [AutoMerging](#automerging)
* **Enabled**: bool (Required): The flag that enables the matching process of duplicate profiles.
* **ExportingConfig**: [ExportingConfig](#exportingconfig)
* **JobSchedule**: [JobSchedule](#jobschedule)

## MatchingRule
### Properties
* **Rule**: string[] (Required)

## ObjectAttribute
### Properties
* **ComparisonOperator**: string (Required): The operator used to compare an attribute against a list of values.
* **FieldName**: string: A field defined within an object type.
* **Source**: string: An attribute contained within a source object.
* **Values**: string[] (Required): A list of attribute values used for comparison.

## ObjectTypeField
### Properties
* **ContentType**: string: The content type of the field. Used for determining equality when searching.
* **Source**: string: A field of a ProfileObject. For example: _source.FirstName, where "_source" is a ProfileObjectType of a Zendesk user and "FirstName" is a field in that ObjectType.
* **Target**: string: The location of the data in the standard ProfileObject model. For example: _profile.Address.PostalCode.

## ObjectTypeKey
### Properties
* **FieldNames**: string[]: The reference for the key name of the fields map. 
* **StandardIdentifiers**: string[]: The types of keys that a ProfileObject can have. Each ProfileObject can have only 1 UNIQUE key but multiple PROFILE keys. PROFILE means that this key can be used to tie an object to a PROFILE. UNIQUE means that it can be used to uniquely identify an object. If a key a is marked as SECONDARY, it will be used to search for profiles after all other PROFILE keys have been searched. A LOOKUP_ONLY key is only used to match a profile but is not persisted to be used for searching of the profile. A NEW_ONLY key is only used if the profile does not already exist before the object is ingested, otherwise it is only used for matching objects to profiles.

## ObjectTypeMapping
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Period
### Properties
* **MaxInvocationsPerProfile**: int: The maximum allowed number of destination invocations per profile.
* **Unit**: string (Required): The unit of time.
* **Unlimited**: bool: If set to true, there is no limit on the number of destination invocations per profile. The default is false.
* **Value**: int (Required): The amount of time of the specified unit.

## Range
### Properties
* **TimestampFormat**: string: The format the timestamp field in your JSON object is specified. This value should be one of EPOCHMILLI or ISO_8601. E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "2001-07-04T12:08:56.235Z"}}, then TimestampFormat should be "ISO_8601".
* **TimestampSource**: string: An expression specifying the field in your JSON object from which the date should be parsed. The expression should follow the structure of \"{ObjectTypeName.<Location of timestamp field in JSON pointer format>}\". E.g. if your object type is MyType and source JSON is {"generatedAt": {"timestamp": "1737587945945"}}, then TimestampSource should be "{MyType.generatedAt.timestamp}".
* **Unit**: string (Required)
* **Value**: int
* **ValueRange**: [ValueRange](#valuerange)

## Readiness
### Properties
* **Message**: string: Any information pertaining to the status of the calculated attribute if required.
* **ProgressPercentage**: int: The progress percentage for including historical data in your calculated attribute.

## Readiness
### Properties
* **Message**: string: A message describing the current progress.
* **ProgressPercentage**: int: The percentage of progress completed.

## Recommender_Metrics
### Properties
* **coverage**: int
* **freshness**: int
* **hit**: int
* **popularity**: int
* **recall**: int
* **similarity**: int

## RecommenderConfig
### Properties
* **EventsConfig**: [EventsConfig](#eventsconfig)

## RecommenderSchema_Fields
### Properties

## RecommenderSchema_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## RecommenderUpdate
### Properties
* **CreationDateTime**: string: The timestamp of when the update was created
* **FailureReason**: string: The reason for update failure
* **LastUpdatedDateTime**: string: The timestamp of when the update was last modified
* **RecommenderConfig**: [RecommenderConfig](#recommenderconfig)
* **Status**: string

## RuleBasedMatching
### Properties
* **AttributeTypesSelector**: [AttributeTypesSelector](#attributetypesselector)
* **ConflictResolution**: [ConflictResolution](#conflictresolution)
* **Enabled**: bool (Required): The flag that enables the rule-based matching process of duplicate profiles.
* **ExportingConfig**: [ExportingConfig](#exportingconfig)
* **MatchingRules**: [MatchingRule](#matchingrule)[]: Configures how the rule-based matching process should match profiles. You can have up to 15 MatchingRule in the MatchingRules.
* **MaxAllowedRuleLevelForMatching**: int: Indicates the maximum allowed rule level for matching.
* **MaxAllowedRuleLevelForMerging**: int: Indicates the maximum allowed rule level for merging.
* **Status**: string (ReadOnly)

## S3ExportingConfig
### Properties
* **S3BucketName**: string (Required): The name of the S3 bucket where Identity Resolution Jobs write result files.
* **S3KeyName**: string: The S3 key name of the location where Identity Resolution Jobs write result files.

## S3SourceProperties
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string

## SalesforceSourceProperties
### Properties
* **EnableDynamicFieldUpdate**: bool
* **IncludeDeletedRecords**: bool
* **Object**: string (Required)

## ScheduledTriggerProperties
### Properties
* **DataPullMode**: string
* **FirstExecutionFrom**: int
* **ScheduleEndTime**: int
* **ScheduleExpression**: string (Required)
* **ScheduleOffset**: int
* **ScheduleStartTime**: int
* **Timezone**: string

## SegmentGroup
### Properties
* **Groups**: [Group](#group)[]
* **Include**: string

## SegmentSort
### Properties
* **Attributes**: [SortAttribute](#sortattribute)[] (Required): A list of attributes used to sort the segments and their ordering preferences.

## ServiceNowSourceProperties
### Properties
* **Object**: string (Required)

## SortAttribute
### Properties
* **DataType**: string
* **Name**: string (Required): The name of the attribute to sort by.
* **Order**: string (Required)
* **Type**: string

## SourceConnectorProperties
### Properties
* **Marketo**: [MarketoSourceProperties](#marketosourceproperties)
* **S3**: [S3SourceProperties](#s3sourceproperties)
* **Salesforce**: [SalesforceSourceProperties](#salesforcesourceproperties)
* **ServiceNow**: [ServiceNowSourceProperties](#servicenowsourceproperties)
* **Zendesk**: [ZendeskSourceProperties](#zendesksourceproperties)

## SourceFlowConfig
### Properties
* **ConnectorProfileName**: string
* **ConnectorType**: string (Required)
* **IncrementalPullConfig**: [IncrementalPullConfig](#incrementalpullconfig)
* **SourceConnectorProperties**: [SourceConnectorProperties](#sourceconnectorproperties) (Required)

## SourceSegment
### Properties
* **SegmentDefinitionName**: string (Identifier)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Task
### Properties
* **ConnectorOperator**: [ConnectorOperator](#connectoroperator)
* **DestinationField**: string
* **SourceFields**: string[] (Required)
* **TaskProperties**: [TaskPropertiesMap](#taskpropertiesmap)[]
* **TaskType**: string (Required)

## TaskPropertiesMap
### Properties
* **OperatorPropertyKey**: string (Required)
* **Property**: string (Required)

## Threshold
### Properties
* **Operator**: string (Required)
* **Value**: string (Required)

## TrainingMetrics
### Properties
* **Metrics**: [Recommender_Metrics](#recommendermetrics): Training metrics by type
* **Time**: string: Timestamp of the training metrics

## TriggerConfig
### Properties
* **TriggerProperties**: [TriggerProperties](#triggerproperties)
* **TriggerType**: string (Required)

## TriggerProperties
### Properties
* **Scheduled**: [ScheduledTriggerProperties](#scheduledtriggerproperties)

## ValueRange
### Properties
* **End**: int (Required): The ending point for this range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.
* **Start**: int (Required): The starting point for this range. Positive numbers indicate how many days in the past data should be included, and negative numbers indicate how many days in the future.

## ZendeskSourceProperties
### Properties
* **Object**: string (Required)

