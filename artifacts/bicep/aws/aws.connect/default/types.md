# AWS.Connect @ default

## Resource AWS.Connect/ApprovedOrigin@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ApprovedOriginProperties](#awsconnectapprovedoriginproperties) (Required): properties of the resource

## Resource AWS.Connect/ContactFlow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ContactFlowProperties](#awsconnectcontactflowproperties) (Required): properties of the resource

## Resource AWS.Connect/ContactFlowModule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ContactFlowModuleProperties](#awsconnectcontactflowmoduleproperties) (Required): properties of the resource

## Resource AWS.Connect/EvaluationForm@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/EvaluationFormProperties](#awsconnectevaluationformproperties) (Required): properties of the resource

## Resource AWS.Connect/HoursOfOperation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/HoursOfOperationProperties](#awsconnecthoursofoperationproperties) (Required): properties of the resource

## Resource AWS.Connect/Instance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/InstanceProperties](#awsconnectinstanceproperties) (Required): properties of the resource

## Resource AWS.Connect/InstanceStorageConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/InstanceStorageConfigProperties](#awsconnectinstancestorageconfigproperties) (Required): properties of the resource

## Resource AWS.Connect/IntegrationAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/IntegrationAssociationProperties](#awsconnectintegrationassociationproperties) (Required): properties of the resource

## Resource AWS.Connect/PhoneNumber@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/PhoneNumberProperties](#awsconnectphonenumberproperties) (Required): properties of the resource

## Resource AWS.Connect/PredefinedAttribute@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/PredefinedAttributeProperties](#awsconnectpredefinedattributeproperties) (Required): properties of the resource

## Resource AWS.Connect/Prompt@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/PromptProperties](#awsconnectpromptproperties) (Required): properties of the resource

## Resource AWS.Connect/Queue@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/QueueProperties](#awsconnectqueueproperties) (Required): properties of the resource

## Resource AWS.Connect/QuickConnect@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/QuickConnectProperties](#awsconnectquickconnectproperties) (Required): properties of the resource

## Resource AWS.Connect/RoutingProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/RoutingProfileProperties](#awsconnectroutingprofileproperties) (Required): properties of the resource

## Resource AWS.Connect/Rule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/RuleProperties](#awsconnectruleproperties) (Required): properties of the resource

## Resource AWS.Connect/SecurityKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/SecurityKeyProperties](#awsconnectsecuritykeyproperties) (Required): properties of the resource

## Resource AWS.Connect/SecurityProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/SecurityProfileProperties](#awsconnectsecurityprofileproperties) (Required): properties of the resource

## Resource AWS.Connect/TaskTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/TaskTemplateProperties](#awsconnecttasktemplateproperties) (Required): properties of the resource

## Resource AWS.Connect/TrafficDistributionGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/TrafficDistributionGroupProperties](#awsconnecttrafficdistributiongroupproperties) (Required): properties of the resource

## Resource AWS.Connect/User@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/UserProperties](#awsconnectuserproperties) (Required): properties of the resource

## Resource AWS.Connect/UserHierarchyGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/UserHierarchyGroupProperties](#awsconnectuserhierarchygroupproperties) (Required): properties of the resource

## Resource AWS.Connect/View@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ViewProperties](#awsconnectviewproperties) (Required): properties of the resource

## Resource AWS.Connect/ViewVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ViewVersionProperties](#awsconnectviewversionproperties) (Required): properties of the resource

## AWS.Connect/ApprovedOriginProperties
### Properties
* **InstanceId**: string (Required, Identifier)
* **Origin**: string (Required, Identifier)

## AWS.Connect/ContactFlowProperties
### Properties
* **ContactFlowArn**: string (ReadOnly, Identifier): The identifier of the contact flow (ARN).
* **Content**: string (Required): The content of the contact flow in JSON format.
* **Description**: string: The description of the contact flow.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance (ARN).
* **Name**: string (Required): The name of the contact flow.
* **State**: string: The state of the contact flow.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **Type**: string (Required): The type of the contact flow.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/ContactFlowModuleProperties
### Properties
* **ContactFlowModuleArn**: string (ReadOnly, Identifier): The identifier of the contact flow module (ARN).
* **Content**: string (Required): The content of the contact flow module in JSON format.
* **Description**: string: The description of the contact flow module.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance (ARN).
* **Name**: string (Required): The name of the contact flow module.
* **State**: string: The state of the contact flow module.
* **Status**: string (ReadOnly): The status of the contact flow module.
* **Tags**: [Tag](#tag)[]: One or more tags.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/EvaluationFormProperties
### Properties
* **Description**: string: The description of the evaluation form.
* **EvaluationFormArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the evaluation form.
* **InstanceArn**: string (Required): The Amazon Resource Name (ARN) of the instance.
* **Items**: [EvaluationFormBaseItem](#evaluationformbaseitem)[] (Required): The list of evaluation form items.
* **ScoringStrategy**: [ScoringStrategy](#scoringstrategy): The scoring strategy.
* **Status**: string (Required): The status of the evaluation form.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **Title**: string (Required): The title of the evaluation form.

## EvaluationFormBaseItem
### Properties
* **Section**: [EvaluationFormSection](#evaluationformsection) (Required): The evaluation form section item

## EvaluationFormSection
### Properties
* **Instructions**: string: The instructions for the section.
* **Items**: [EvaluationFormItem](#evaluationformitem)[]: The list of section items.
* **RefId**: string (Required): The identifier to reference the section.
* **Title**: string (Required): The title of the section.
* **Weight**: int: The item weight used for scoring.

## EvaluationFormItem
### Properties
* **Question**: [EvaluationFormQuestion](#evaluationformquestion): The evaluation form question item
* **Section**: [EvaluationFormSection](#evaluationformsection): The evaluation form section item

## EvaluationFormQuestion
### Properties
* **Instructions**: string: The instructions for the question.
* **NotApplicableEnabled**: bool: The flag to enable not applicable answers to the question.
* **QuestionType**: string (Required): The type of the question.
* **QuestionTypeProperties**: [EvaluationFormQuestionTypeProperties](#evaluationformquestiontypeproperties): The properties of the question
* **RefId**: string (Required): The identifier used to reference the question.
* **Title**: string (Required): The title of the question.
* **Weight**: int: The question weight used for scoring.

## EvaluationFormQuestionTypeProperties
### Properties
* **Numeric**: [EvaluationFormNumericQuestionProperties](#evaluationformnumericquestionproperties): The properties of the numeric question.
* **SingleSelect**: [EvaluationFormSingleSelectQuestionProperties](#evaluationformsingleselectquestionproperties): The properties of the single-select question.

## EvaluationFormNumericQuestionProperties
### Properties
* **Automation**: [EvaluationFormNumericQuestionAutomation](#evaluationformnumericquestionautomation): The automation properties for the numeric question.
* **MaxValue**: int (Required): The maximum value for answers of the question.
* **MinValue**: int (Required): The minimum value for answers of the question.
* **Options**: [EvaluationFormNumericQuestionOption](#evaluationformnumericquestionoption)[]: The list of option ranges used for scoring.

## EvaluationFormNumericQuestionAutomation
### Properties
* **PropertyValue**: [NumericQuestionPropertyValueAutomation](#numericquestionpropertyvalueautomation) (Required): The automation property name of the question.

## NumericQuestionPropertyValueAutomation
### Properties
* **Label**: string (Required): The automation property label.

## EvaluationFormNumericQuestionOption
### Properties
* **AutomaticFail**: bool: The flag to mark the option as automatic fail.
* **MaxValue**: int (Required): The maximum value of the option range.
* **MinValue**: int (Required): The minimum value of the option range.
* **Score**: int: The score of the option range.

## EvaluationFormSingleSelectQuestionProperties
### Properties
* **Automation**: [EvaluationFormSingleSelectQuestionAutomation](#evaluationformsingleselectquestionautomation): The automation properties for the single-select question.
* **DisplayAs**: string: The display mode of the single-select question.
* **Options**: [EvaluationFormSingleSelectQuestionOption](#evaluationformsingleselectquestionoption)[] (Required): The list of options for the question.

## EvaluationFormSingleSelectQuestionAutomation
### Properties
* **DefaultOptionRefId**: string: The option reference identifier of the default answer.
* **Options**: [EvaluationFormSingleSelectQuestionAutomationOption](#evaluationformsingleselectquestionautomationoption)[] (Required): The answer options for the automation.

## EvaluationFormSingleSelectQuestionAutomationOption
### Properties
* **RuleCategory**: [SingleSelectQuestionRuleCategoryAutomation](#singleselectquestionrulecategoryautomation) (Required): The automation option based on Rules categories.

## SingleSelectQuestionRuleCategoryAutomation
### Properties
* **Category**: string (Required): The category name as defined in Rules.
* **Condition**: string (Required): The automation condition applied on contact categories.
* **OptionRefId**: string (Required): The option identifier referencing the option to be selected when the automation option is triggered.

## EvaluationFormSingleSelectQuestionOption
### Properties
* **AutomaticFail**: bool: The flag to mark the option as automatic fail.
* **RefId**: string (Required): The identifier used to reference the option.
* **Score**: int: The score of the option.
* **Text**: string (Required): The title of the option.

## ScoringStrategy
### Properties
* **Mode**: string (Required): The scoring mode.
* **Status**: string (Required): The scoring status.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that's 1 to 256 characters in length.

## AWS.Connect/HoursOfOperationProperties
### Properties
* **Config**: [HoursOfOperationConfig](#hoursofoperationconfig)[] (Required): Configuration information for the hours of operation: day, start time, and end time.
* **Description**: string: The description of the hours of operation.
* **HoursOfOperationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the hours of operation.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the hours of operation.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TimeZone**: string (Required): The time zone of the hours of operation.

## HoursOfOperationConfig
### Properties
* **Day**: string (Required): The day that the hours of operation applies to.
* **EndTime**: [HoursOfOperationTimeSlice](#hoursofoperationtimeslice) (Required): The end time that your contact center closes.
* **StartTime**: [HoursOfOperationTimeSlice](#hoursofoperationtimeslice) (Required): The start time that your contact center opens.

## HoursOfOperationTimeSlice
### Properties
* **Hours**: int (Required): The hours.
* **Minutes**: int (Required): The minutes.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/InstanceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): An instanceArn is automatically generated on creation based on instanceId.
* **Attributes**: [Attributes](#attributes) (Required): The attributes for the instance.
* **CreatedTime**: string (ReadOnly): Timestamp of instance creation logged as part of instance creation.
* **DirectoryId**: string (WriteOnly): Existing directoryId user wants to map to the new Connect instance.
* **Id**: string (ReadOnly): An instanceId is automatically generated on creation and assigned as the unique identifier.
* **IdentityManagementType**: string (Required): Specifies the type of directory integration for new instance.
* **InstanceAlias**: string: Alias of the new directory created as part of new instance creation.
* **InstanceStatus**: string (ReadOnly): Specifies the creation status of new instance.
* **ServiceRole**: string (ReadOnly): Service linked role created as part of instance creation.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Attributes
### Properties
* **AutoResolveBestVoices**: bool
* **ContactflowLogs**: bool
* **ContactLens**: bool
* **EarlyMedia**: bool
* **InboundCalls**: bool (Required)
* **OutboundCalls**: bool (Required)
* **UseCustomTTSVoices**: bool

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/InstanceStorageConfigProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier)
* **InstanceArn**: string (Required, Identifier): Connect Instance ID with which the storage config will be associated
* **KinesisFirehoseConfig**: [KinesisFirehoseConfig](#kinesisfirehoseconfig)
* **KinesisStreamConfig**: [KinesisStreamConfig](#kinesisstreamconfig)
* **KinesisVideoStreamConfig**: [KinesisVideoStreamConfig](#kinesisvideostreamconfig)
* **ResourceType**: string (Required, Identifier)
* **S3Config**: [S3Config](#s3config)
* **StorageType**: string (Required)

## KinesisFirehoseConfig
### Properties
* **FirehoseArn**: string (Required)

## KinesisStreamConfig
### Properties
* **StreamArn**: string (Required)

## KinesisVideoStreamConfig
### Properties
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig) (Required)
* **Prefix**: string (Required)
* **RetentionPeriodHours**: int (Required)

## EncryptionConfig
### Properties
* **EncryptionType**: string (Required)
* **KeyId**: string (Required)

## S3Config
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string (Required)
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig)

## AWS.Connect/IntegrationAssociationProperties
### Properties
* **InstanceId**: string (Required, Identifier)
* **IntegrationArn**: string (Required, Identifier)
* **IntegrationAssociationId**: string (ReadOnly)
* **IntegrationType**: string (Required, Identifier)

## AWS.Connect/PhoneNumberProperties
### Properties
* **Address**: string (ReadOnly): The phone number e164 address.
* **CountryCode**: string: The phone number country code.
* **Description**: string: The description of the phone number.
* **PhoneNumberArn**: string (ReadOnly, Identifier): The phone number ARN
* **Prefix**: string (WriteOnly): The phone number prefix.
* **SourcePhoneNumberArn**: string: The source phone number arn.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TargetArn**: string (Required): The ARN of the target the phone number is claimed to.
* **Type**: string: The phone number type

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/PredefinedAttributeProperties
### Properties
* **InstanceArn**: string (Required, Identifier): The identifier of the Amazon Connect instance.
* **Name**: string (Required, Identifier): The name of the predefined attribute.
* **Values**: [PredefinedAttribute_Values](#predefinedattributevalues) (Required): The values of a predefined attribute.

## PredefinedAttribute_Values
### Properties
* **StringList**: string[]

## AWS.Connect/PromptProperties
### Properties
* **Description**: string: The description of the prompt.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the prompt.
* **PromptArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the prompt.
* **S3Uri**: string (WriteOnly): S3 URI of the customer's audio file for creating prompts resource..
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/QueueProperties
### Properties
* **Description**: string: The description of the queue.
* **HoursOfOperationArn**: string (Required): The identifier for the hours of operation.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **MaxContacts**: int: The maximum number of contacts that can be in the queue before it is considered full.
* **Name**: string (Required): The name of the queue.
* **OutboundCallerConfig**: [OutboundCallerConfig](#outboundcallerconfig): The outbound caller ID name, number, and outbound whisper flow.
* **QueueArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the queue.
* **QuickConnectArns**: string[]: The quick connects available to agents who are working the queue.
* **Status**: string: The status of the queue.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (ReadOnly): The type of queue.

## OutboundCallerConfig
### Properties
* **OutboundCallerIdName**: string
* **OutboundCallerIdNumberArn**: string
* **OutboundFlowArn**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.Connect/QuickConnectProperties
### Properties
* **Description**: string: The description of the quick connect.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the quick connect.
* **QuickConnectArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the quick connect.
* **QuickConnectConfig**: [QuickConnectConfig](#quickconnectconfig) (Required): Configuration settings for the quick connect.
* **QuickConnectType**: string (ReadOnly): The type of quick connect. In the Amazon Connect console, when you create a quick connect, you are prompted to assign one of the following types: Agent (USER), External (PHONE_NUMBER), or Queue (QUEUE).
* **Tags**: [Tag](#tag)[]: One or more tags.

## QuickConnectConfig
### Properties
* **PhoneConfig**: [PhoneNumberQuickConnectConfig](#phonenumberquickconnectconfig)
* **QueueConfig**: [QueueQuickConnectConfig](#queuequickconnectconfig)
* **QuickConnectType**: string (Required)
* **UserConfig**: [UserQuickConnectConfig](#userquickconnectconfig)

## PhoneNumberQuickConnectConfig
### Properties
* **PhoneNumber**: string (Required)

## QueueQuickConnectConfig
### Properties
* **ContactFlowArn**: string (Required)
* **QueueArn**: string (Required)

## UserQuickConnectConfig
### Properties
* **ContactFlowArn**: string (Required)
* **UserArn**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/RoutingProfileProperties
### Properties
* **AgentAvailabilityTimer**: string: Whether agents with this routing profile will have their routing order calculated based on longest idle time or time since their last inbound contact.
* **DefaultOutboundQueueArn**: string (Required): The identifier of the default outbound queue for this routing profile.
* **Description**: string (Required): The description of the routing profile.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **MediaConcurrencies**: [MediaConcurrency](#mediaconcurrency)[] (Required): The channels agents can handle in the Contact Control Panel (CCP) for this routing profile.
* **Name**: string (Required): The name of the routing profile.
* **QueueConfigs**: [RoutingProfileQueueConfig](#routingprofilequeueconfig)[]: The queues to associate with this routing profile.
* **RoutingProfileArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the routing profile.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## MediaConcurrency
### Properties
* **Channel**: string (Required)
* **Concurrency**: int (Required)
* **CrossChannelBehavior**: [CrossChannelBehavior](#crosschannelbehavior)

## CrossChannelBehavior
### Properties
* **BehaviorType**: string (Required)

## RoutingProfileQueueConfig
### Properties
* **Delay**: int (Required)
* **Priority**: int (Required)
* **QueueReference**: [RoutingProfileQueueReference](#routingprofilequeuereference) (Required)

## RoutingProfileQueueReference
### Properties
* **Channel**: string (Required)
* **QueueArn**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/RuleProperties
### Properties
* **Actions**: [Actions](#actions) (Required): The list of actions that will be executed when a rule is triggered.
* **Function**: string (Required): The conditions of a rule.
* **InstanceArn**: string (Required): The Amazon Resource Name (ARN) of the instance.
* **Name**: string (Required): The name of the rule.
* **PublishStatus**: string (Required): The publish status of a rule, either draft or published.
* **RuleArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the rule.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TriggerEventSource**: [RuleTriggerEventSource](#ruletriggereventsource) (Required): The event source that triggers the rule.

## Actions
### Properties
* **AssignContactCategoryActions**: [AssignContactCategoryAction](#assigncontactcategoryaction)[]
* **CreateCaseActions**: [CreateCaseAction](#createcaseaction)[]
* **EndAssociatedTaskActions**: [EndAssociatedTasksAction](#endassociatedtasksaction)[]
* **EventBridgeActions**: [EventBridgeAction](#eventbridgeaction)[]
* **SendNotificationActions**: [SendNotificationAction](#sendnotificationaction)[]
* **TaskActions**: [TaskAction](#taskaction)[]
* **UpdateCaseActions**: [UpdateCaseAction](#updatecaseaction)[]

## AssignContactCategoryAction
### Properties

## CreateCaseAction
### Properties
* **Fields**: [Field](#field)[] (Required)
* **TemplateId**: string (Required): The Id of template.

## Field
### Properties
* **Id**: string (Required): The Id of the field
* **Value**: [FieldValue](#fieldvalue) (Required)

## FieldValue
### Properties
* **BooleanValue**: bool
* **DoubleValue**: int
* **EmptyValue**: [Rule_EmptyValue](#ruleemptyvalue)
* **StringValue**: string

## Rule_EmptyValue
### Properties

## EndAssociatedTasksAction
### Properties

## EventBridgeAction
### Properties
* **Name**: string (Required): The name of the event bridge action.

## SendNotificationAction
### Properties
* **Content**: string (Required): The content of notification.
* **ContentType**: string (Required): The type of content.
* **DeliveryMethod**: string (Required): The means of delivery.
* **Recipient**: [NotificationRecipientType](#notificationrecipienttype) (Required)
* **Subject**: string: The subject of notification.

## NotificationRecipientType
### Properties
* **UserArns**: string[]: The list of recipients by user arns.
* **UserTags**: [Rule_UserTags](#ruleusertags): The collection of recipients who are identified by user tags

## Rule_UserTags
### Properties

## TaskAction
### Properties
* **ContactFlowArn**: string (Required): The Amazon Resource Name (ARN) of the contact flow.
* **Description**: string: The description which appears in the agent's Contact Control Panel (CCP).
* **Name**: string (Required): The name which appears in the agent's Contact Control Panel (CCP).
* **References**: [Rule_References](#rulereferences): A formatted URL that is shown to an agent in the Contact Control Panel (CCP).

## Rule_References
### Properties

## UpdateCaseAction
### Properties
* **Fields**: [Field](#field)[] (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that's 1 to 256 characters in length.

## RuleTriggerEventSource
### Properties
* **EventSourceName**: string (Required): The name of event source.
* **IntegrationAssociationArn**: string: The Amazon Resource Name (ARN) for the AppIntegration association.

## AWS.Connect/SecurityKeyProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier)
* **InstanceId**: string (Required, Identifier)
* **Key**: string (Required)

## AWS.Connect/SecurityProfileProperties
### Properties
* **AllowedAccessControlTags**: [Tag](#tag)[]: The list of tags that a security profile uses to restrict access to resources in Amazon Connect.
* **Description**: string: The description of the security profile.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Permissions**: string[]: Permissions assigned to the security profile.
* **SecurityProfileArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the security profile.
* **SecurityProfileName**: string (Required): The name of the security profile.
* **TagRestrictedResources**: string[]: The list of resources that a security profile applies tag restrictions to in Amazon Connect.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/TaskTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The identifier (arn) of the task template.
* **ClientToken**: string
* **Constraints**: [TaskTemplate_Constraints](#tasktemplateconstraints): The constraints for the task template
* **ContactFlowArn**: string: The identifier of the contact flow.
* **Defaults**: [DefaultFieldValue](#defaultfieldvalue)[]
* **Description**: string: The description of the task template.
* **Fields**: [Field](#field)[]: The list of task template's fields
* **InstanceArn**: string (Required): The identifier (arn) of the instance.
* **Name**: string: The name of the task template.
* **Status**: string
* **Tags**: [Tag](#tag)[]: One or more tags.

## TaskTemplate_Constraints
### Properties
* **InvisibleFields**: [InvisibleFieldInfo](#invisiblefieldinfo)[]
* **ReadOnlyFields**: [ReadOnlyFieldInfo](#readonlyfieldinfo)[]
* **RequiredFields**: [RequiredFieldInfo](#requiredfieldinfo)[]

## InvisibleFieldInfo
### Properties
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## FieldIdentifier
### Properties
* **Name**: string (Required): The name of the task template field

## ReadOnlyFieldInfo
### Properties
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## RequiredFieldInfo
### Properties
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## DefaultFieldValue
### Properties
* **DefaultValue**: string (Required)
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## Field
### Properties
* **Description**: string: The description of the task template's field
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)
* **SingleSelectOptions**: string[]: list of field options to be used with single select
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/TrafficDistributionGroupProperties
### Properties
* **Description**: string: A description for the traffic distribution group.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance that has been replicated.
* **IsDefault**: bool (ReadOnly): If this is the default traffic distribution group.
* **Name**: string (Required): The name for the traffic distribution group.
* **Status**: string (ReadOnly): The status of the traffic distribution group.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TrafficDistributionGroupArn**: string (ReadOnly, Identifier): The identifier of the traffic distribution group.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/UserProperties
### Properties
* **DirectoryUserId**: string: The identifier of the user account in the directory used for identity management.
* **HierarchyGroupArn**: string: The identifier of the hierarchy group for the user.
* **IdentityInfo**: [UserIdentityInfo](#useridentityinfo): The information about the identity of the user.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Password**: string (WriteOnly): The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
* **PhoneConfig**: [UserPhoneConfig](#userphoneconfig) (Required): The phone settings for the user.
* **RoutingProfileArn**: string (Required): The identifier of the routing profile for the user.
* **SecurityProfileArns**: string[] (Required): One or more security profile arns for the user
* **Tags**: [Tag](#tag)[]: One or more tags.
* **UserArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the user.
* **Username**: string (Required): The user name for the account.
* **UserProficiencies**: [UserProficiency](#userproficiency)[]: One or more predefined attributes assigned to a user, with a level that indicates how skilled they are.

## UserIdentityInfo
### Properties
* **Email**: string
* **FirstName**: string
* **LastName**: string
* **Mobile**: string
* **SecondaryEmail**: string

## UserPhoneConfig
### Properties
* **AfterContactWorkTimeLimit**: int
* **AutoAccept**: bool
* **DeskPhoneNumber**: string
* **PhoneType**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## UserProficiency
### Properties
* **AttributeName**: string (Required)
* **AttributeValue**: string (Required)
* **Level**: int (Required)

## AWS.Connect/UserHierarchyGroupProperties
### Properties
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the user hierarchy group.
* **ParentGroupArn**: string: The Amazon Resource Name (ARN) for the parent user hierarchy group.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **UserHierarchyGroupArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the user hierarchy group.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/ViewProperties
### Properties
* **Actions**: string[] (Required): The actions of the view in an array.
* **Description**: string: The description of the view.
* **InstanceArn**: string (Required): The Amazon Resource Name (ARN) of the instance.
* **Name**: string (Required): The name of the view.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **Template**: [View_Template](#viewtemplate) (Required): The template of the view as JSON.
* **ViewArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the view.
* **ViewContentSha256**: string (ReadOnly): The view content hash.
* **ViewId**: string (ReadOnly): The view id of the view.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters
* **Value**: string (Required): The value for the tag. . You can specify a value that is maximum of 256 Unicode characters

## View_Template
### Properties

## AWS.Connect/ViewVersionProperties
### Properties
* **Version**: int (ReadOnly): The version of the view.
* **VersionDescription**: string: The description for the view version.
* **ViewArn**: string (Required): The Amazon Resource Name (ARN) of the view for which a version is being created.
* **ViewContentSha256**: string: The view content hash to be checked.
* **ViewVersionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the created view version.

