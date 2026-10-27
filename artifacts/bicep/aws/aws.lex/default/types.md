# AWS.Lex @ default

## Resource AWS.Lex/Bot@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lex/BotProperties](#awslexbotproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lex/BotAlias@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lex/BotAliasProperties](#awslexbotaliasproperties) (Required, Identifier): properties of the resource

## Resource AWS.Lex/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lex/ResourcePolicyProperties](#awslexresourcepolicyproperties) (Required, Identifier): properties of the resource

## AdvancedRecognitionSetting
### Properties
* **AudioRecognitionStrategy**: string

## AudioFillerSettings
### Properties
* **AudioType**: string
* **Enabled**: bool (Required)
* **MinimumPlayDurationInMilliseconds**: int
* **ResponseDeliveryDelayInMilliseconds**: int
* **StartDelayInMilliseconds**: int

## AudioLogDestination
### Properties
* **S3Bucket**: [S3BucketLogDestination](#s3bucketlogdestination) (Required)

## AudioLogDestination
### Properties
* **S3Bucket**: [S3BucketLogDestination](#s3bucketlogdestination) (Required)

## AudioLogSetting
### Properties
* **Destination**: [AudioLogDestination](#audiologdestination) (Required)
* **Enabled**: bool (Required)

## AudioLogSetting
### Properties
* **Destination**: [AudioLogDestination](#audiologdestination) (Required)
* **Enabled**: bool (Required)

## AWS.Lex/BotAliasProperties
### Properties
* **Arn**: string (ReadOnly)
* **BotAliasId**: string (ReadOnly, Identifier)
* **BotAliasLocaleSettings**: [BotAliasLocaleSettingsItem](#botaliaslocalesettingsitem)[]
* **BotAliasName**: string (Required)
* **BotAliasStatus**: string (ReadOnly)
* **BotAliasTags**: [Tag](#tag)[]: A list of tags to add to the bot alias.
* **BotId**: string (Required, Identifier)
* **BotVersion**: string
* **ConversationLogSettings**: [ConversationLogSettings](#conversationlogsettings)
* **Description**: string
* **SentimentAnalysisSettings**: [BotAlias_SentimentAnalysisSettings](#botaliassentimentanalysissettings): Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

## AWS.Lex/BotProperties
### Properties
* **Arn**: string (ReadOnly)
* **AutoBuildBotLocales**: bool (WriteOnly)
* **BotFileS3Location**: [S3Location](#s3location) (WriteOnly)
* **BotLocales**: [BotLocale](#botlocale)[] (WriteOnly)
* **BotMembers**: [BotMember](#botmember)[] (WriteOnly): The list of bot members in a network to be created.
* **BotTags**: [Tag](#tag)[]
* **BotType**: string: The type of a bot to create.
* **DataPrivacy**: [Bot_DataPrivacy](#botdataprivacy) (Required)
* **Description**: string
* **ErrorLogSettings**: [Bot_ErrorLogSettings](#boterrorlogsettings)
* **Id**: string (ReadOnly, Identifier)
* **IdleSessionTTLInSeconds**: int (Required)
* **Name**: string (Required)
* **Replication**: [Replication](#replication) (WriteOnly)
* **RoleArn**: string (Required)
* **TestBotAliasSettings**: [TestBotAliasSettings](#testbotaliassettings) (WriteOnly)
* **TestBotAliasTags**: [Tag](#tag)[] (WriteOnly)

## AWS.Lex/ResourcePolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **Policy**: [Policy](#policy) (Required)
* **ResourceArn**: string (Required)
* **RevisionId**: string (ReadOnly)

## BedrockAgentIntentConfiguration
### Properties
* **BedrockAgentConfiguration**: [Bot_BedrockAgentConfiguration](#botbedrockagentconfiguration)
* **BedrockAgentIntentKnowledgeBaseConfiguration**: [Bot_BedrockAgentIntentKnowledgeBaseConfiguration](#botbedrockagentintentknowledgebaseconfiguration)

## BedrockModelSpecification
### Properties
* **BedrockGuardrailConfiguration**: [Bot_BedrockGuardrailConfiguration](#botbedrockguardrailconfiguration)
* **BedrockModelCustomPrompt**: string
* **BedrockTraceStatus**: string
* **ModelArn**: string (Required)

## Bot_BedrockAgentConfiguration
### Properties
* **BedrockAgentAliasId**: string
* **BedrockAgentId**: string

## Bot_BedrockAgentIntentKnowledgeBaseConfiguration
### Properties
* **BedrockKnowledgeBaseArn**: string (Required)
* **BedrockModelConfiguration**: [BedrockModelSpecification](#bedrockmodelspecification) (Required)

## Bot_BedrockGuardrailConfiguration
### Properties
* **BedrockGuardrailIdentifier**: string
* **BedrockGuardrailVersion**: string

## Bot_BuildtimeSettings
### Properties
* **DescriptiveBotBuilderSpecification**: [Bot_BuildtimeSettings_DescriptiveBotBuilderSpecification](#botbuildtimesettingsdescriptivebotbuilderspecification)
* **SampleUtteranceGenerationSpecification**: [Bot_BuildtimeSettings_SampleUtteranceGenerationSpecification](#botbuildtimesettingssampleutterancegenerationspecification)

## Bot_BuildtimeSettings_DescriptiveBotBuilderSpecification
### Properties
* **BedrockModelSpecification**: [BedrockModelSpecification](#bedrockmodelspecification)
* **Enabled**: bool (Required)

## Bot_BuildtimeSettings_SampleUtteranceGenerationSpecification
### Properties
* **BedrockModelSpecification**: [BedrockModelSpecification](#bedrockmodelspecification)
* **Enabled**: bool (Required)

## Bot_DataPrivacy
### Properties
* **ChildDirected**: bool (Required)

## Bot_DataSourceConfiguration
### Properties
* **BedrockKnowledgeStoreConfiguration**: [Bot_DataSourceConfiguration_BedrockKnowledgeStoreConfiguration](#botdatasourceconfigurationbedrockknowledgestoreconfiguration)
* **KendraConfiguration**: [QnAKendraConfiguration](#qnakendraconfiguration)
* **OpensearchConfiguration**: [Bot_DataSourceConfiguration_OpensearchConfiguration](#botdatasourceconfigurationopensearchconfiguration)

## Bot_DataSourceConfiguration_BedrockKnowledgeStoreConfiguration
### Properties
* **BedrockKnowledgeBaseArn**: string
* **BKBExactResponseFields**: [Bot_DataSourceConfiguration_BedrockKnowledgeStoreConfiguration_BKBExactResponseFields](#botdatasourceconfigurationbedrockknowledgestoreconfigurationbkbexactresponsefields)
* **ExactResponse**: bool

## Bot_DataSourceConfiguration_BedrockKnowledgeStoreConfiguration_BKBExactResponseFields
### Properties
* **AnswerField**: string

## Bot_DataSourceConfiguration_OpensearchConfiguration
### Properties
* **DomainEndpoint**: string
* **ExactResponse**: bool
* **ExactResponseFields**: [Bot_DataSourceConfiguration_OpensearchConfiguration_ExactResponseFields](#botdatasourceconfigurationopensearchconfigurationexactresponsefields)
* **IncludeFields**: string[]
* **IndexName**: string

## Bot_DataSourceConfiguration_OpensearchConfiguration_ExactResponseFields
### Properties
* **AnswerField**: string
* **QuestionField**: string

## Bot_ErrorLogSettings
### Properties
* **Enabled**: bool (Required)

## Bot_PromptAttemptsSpecification
### Properties

## Bot_QInConnectAssistantConfiguration
### Properties
* **AssistantArn**: string (Required)

## Bot_RuntimeSettings
### Properties
* **NluImprovementSpecification**: [Bot_RuntimeSettings_NluImprovementSpecification](#botruntimesettingsnluimprovementspecification)
* **SlotResolutionImprovementSpecification**: [Bot_RuntimeSettings_SlotResolutionImprovementSpecification](#botruntimesettingsslotresolutionimprovementspecification)

## Bot_RuntimeSettings_NluImprovementSpecification
### Properties
* **AssistedNluMode**: string
* **Enabled**: bool (Required)
* **IntentDisambiguationSettings**: [IntentDisambiguationSettings](#intentdisambiguationsettings)

## Bot_RuntimeSettings_SlotResolutionImprovementSpecification
### Properties
* **BedrockModelSpecification**: [BedrockModelSpecification](#bedrockmodelspecification)
* **Enabled**: bool (Required)

## Bot_SentimentAnalysisSettings
### Properties
* **DetectSentiment**: bool (Required)

## Bot_SlotSpecifications
### Properties

## Bot_SpeechFoundationModel
### Properties
* **ModelArn**: string (Required)
* **VoiceId**: string

## BotAlias_SentimentAnalysisSettings
### Properties
* **DetectSentiment**: bool (Required): Enable to call Amazon Comprehend for Sentiment natively within Lex

## BotAliasLocaleSettings
### Properties
* **CodeHookSpecification**: [CodeHookSpecification](#codehookspecification)
* **Enabled**: bool (Required)

## BotAliasLocaleSettings
### Properties
* **CodeHookSpecification**: [CodeHookSpecification](#codehookspecification)
* **Enabled**: bool (Required): Whether the Lambda code hook is enabled

## BotAliasLocaleSettingsItem
### Properties
* **BotAliasLocaleSetting**: [BotAliasLocaleSettings](#botaliaslocalesettings) (Required)
* **LocaleId**: string (Required)

## BotAliasLocaleSettingsItem
### Properties
* **BotAliasLocaleSetting**: [BotAliasLocaleSettings](#botaliaslocalesettings) (Required)
* **LocaleId**: string (Required): A string used to identify the locale

## BotLocale
### Properties
* **AudioFillerSettings**: [AudioFillerSettings](#audiofillersettings)
* **CustomVocabulary**: [CustomVocabulary](#customvocabulary)
* **Description**: string
* **GenerativeAISettings**: [GenerativeAISettings](#generativeaisettings)
* **Intents**: [Intent](#intent)[]
* **LocaleId**: string (Required)
* **NluConfidenceThreshold**: int (Required)
* **SlotTypes**: [SlotType](#slottype)[]
* **SpeechDetectionSensitivity**: string
* **SpeechRecognitionSettings**: [SpeechRecognitionSettings](#speechrecognitionsettings)
* **UnifiedSpeechSettings**: [UnifiedSpeechSettings](#unifiedspeechsettings)
* **VoiceSettings**: [VoiceSettings](#voicesettings)

## BotMember
### Properties
* **BotMemberAliasId**: string (Required): The alias ID of a bot that is a member of this network of bots.
* **BotMemberAliasName**: string (Required): The alias name of a bot that is a member of this network of bots.
* **BotMemberId**: string (Required): The unique ID of a bot that is a member of this network of bots.
* **BotMemberName**: string (Required): The unique name of a bot that is a member of this network of bots.
* **BotMemberVersion**: string (Required): The version of a bot that is a member of this network of bots.

## Button
### Properties
* **Text**: string (Required)
* **Value**: string (Required)

## CloudWatchLogGroupLogDestination
### Properties
* **CloudWatchLogGroupArn**: string (Required)
* **LogPrefix**: string (Required)

## CloudWatchLogGroupLogDestination
### Properties
* **CloudWatchLogGroupArn**: string (Required): A string used to identify the groupArn for the Cloudwatch Log Group
* **LogPrefix**: string (Required): A string containing the value for the Log Prefix

## CodeHookSpecification
### Properties
* **LambdaCodeHook**: [LambdaCodeHook](#lambdacodehook) (Required)

## CodeHookSpecification
### Properties
* **LambdaCodeHook**: [LambdaCodeHook](#lambdacodehook) (Required)

## CompositeSlotTypeSetting
### Properties
* **SubSlots**: [SubSlotTypeComposition](#subslottypecomposition)[]

## Condition
### Properties
* **ExpressionString**: string (Required)

## ConditionalBranch
### Properties
* **Condition**: [Condition](#condition) (Required)
* **Name**: string (Required)
* **NextStep**: [DialogState](#dialogstate) (Required)
* **Response**: [ResponseSpecification](#responsespecification)

## ConditionalSpecification
### Properties
* **ConditionalBranches**: [ConditionalBranch](#conditionalbranch)[] (Required)
* **DefaultBranch**: [DefaultConditionalBranch](#defaultconditionalbranch) (Required)
* **IsActive**: bool (Required)

## ConversationLogSettings
### Properties
* **AudioLogSettings**: [AudioLogSetting](#audiologsetting)[]
* **TextLogSettings**: [TextLogSetting](#textlogsetting)[]

## ConversationLogSettings
### Properties
* **AudioLogSettings**: [AudioLogSetting](#audiologsetting)[]
* **TextLogSettings**: [TextLogSetting](#textlogsetting)[]

## CustomPayload
### Properties
* **Value**: string (Required)

## CustomVocabulary
### Properties
* **CustomVocabularyItems**: [CustomVocabularyItem](#customvocabularyitem)[] (Required)

## CustomVocabularyItem
### Properties
* **DisplayAs**: string
* **Phrase**: string (Required)
* **Weight**: int

## DeepgramSpeechModelConfig
### Properties
* **ApiTokenSecretArn**: string (Required)
* **ModelId**: string

## DefaultConditionalBranch
### Properties
* **NextStep**: [DialogState](#dialogstate)
* **Response**: [ResponseSpecification](#responsespecification)

## DialogAction
### Properties
* **SlotToElicit**: string
* **SuppressNextMessage**: bool
* **Type**: string (Required)

## DialogCodeHookInvocationSetting
### Properties
* **EnableCodeHookInvocation**: bool (Required)
* **InvocationLabel**: string
* **IsActive**: bool (Required)
* **PostCodeHookSpecification**: [PostDialogCodeHookInvocationSpecification](#postdialogcodehookinvocationspecification) (Required)

## DialogCodeHookSetting
### Properties
* **Enabled**: bool (Required)

## DialogState
### Properties
* **DialogAction**: [DialogAction](#dialogaction)
* **Intent**: [IntentOverride](#intentoverride)
* **SessionAttributes**: [SessionAttribute](#sessionattribute)[]

## ElicitationCodeHookInvocationSetting
### Properties
* **EnableCodeHookInvocation**: bool (Required)
* **InvocationLabel**: string

## ExternalSourceSetting
### Properties
* **GrammarSlotTypeSetting**: [GrammarSlotTypeSetting](#grammarslottypesetting)

## FulfillmentCodeHookSetting
### Properties
* **Enabled**: bool (Required)
* **FulfillmentUpdatesSpecification**: [FulfillmentUpdatesSpecification](#fulfillmentupdatesspecification)
* **IsActive**: bool
* **PostFulfillmentStatusSpecification**: [PostFulfillmentStatusSpecification](#postfulfillmentstatusspecification)

## FulfillmentStartResponseSpecification
### Properties
* **AllowInterrupt**: bool
* **DelayInSeconds**: int (Required)
* **MessageGroups**: [MessageGroup](#messagegroup)[] (Required)

## FulfillmentUpdateResponseSpecification
### Properties
* **AllowInterrupt**: bool
* **FrequencyInSeconds**: int (Required)
* **MessageGroups**: [MessageGroup](#messagegroup)[] (Required)

## FulfillmentUpdatesSpecification
### Properties
* **Active**: bool (Required)
* **StartResponse**: [FulfillmentStartResponseSpecification](#fulfillmentstartresponsespecification)
* **TimeoutInSeconds**: int
* **UpdateResponse**: [FulfillmentUpdateResponseSpecification](#fulfillmentupdateresponsespecification)

## GenerativeAISettings
### Properties
* **BuildtimeSettings**: [Bot_BuildtimeSettings](#botbuildtimesettings)
* **RuntimeSettings**: [Bot_RuntimeSettings](#botruntimesettings)

## GrammarSlotTypeSetting
### Properties
* **Source**: [GrammarSlotTypeSource](#grammarslottypesource)

## GrammarSlotTypeSource
### Properties
* **KmsKeyArn**: string
* **S3BucketName**: string (Required)
* **S3ObjectKey**: string (Required)

## ImageResponseCard
### Properties
* **Buttons**: [Button](#button)[]
* **ImageUrl**: string
* **Subtitle**: string
* **Title**: string (Required)

## InitialResponseSetting
### Properties
* **CodeHook**: [DialogCodeHookInvocationSetting](#dialogcodehookinvocationsetting)
* **Conditional**: [ConditionalSpecification](#conditionalspecification)
* **InitialResponse**: [ResponseSpecification](#responsespecification)
* **NextStep**: [DialogState](#dialogstate)

## InputContext
### Properties
* **Name**: string (Required)

## Intent
### Properties
* **BedrockAgentIntentConfiguration**: [BedrockAgentIntentConfiguration](#bedrockagentintentconfiguration)
* **Description**: string: Resource Type definition for the intent.
* **DialogCodeHook**: [DialogCodeHookSetting](#dialogcodehooksetting)
* **DisplayName**: string
* **FulfillmentCodeHook**: [FulfillmentCodeHookSetting](#fulfillmentcodehooksetting)
* **InitialResponseSetting**: [InitialResponseSetting](#initialresponsesetting)
* **InputContexts**: [InputContext](#inputcontext)[]
* **IntentClosingSetting**: [IntentClosingSetting](#intentclosingsetting)
* **IntentConfirmationSetting**: [IntentConfirmationSetting](#intentconfirmationsetting)
* **KendraConfiguration**: [KendraConfiguration](#kendraconfiguration)
* **Name**: string (Required)
* **OutputContexts**: [OutputContext](#outputcontext)[]
* **ParentIntentSignature**: string
* **QInConnectIntentConfiguration**: [QInConnectIntentConfiguration](#qinconnectintentconfiguration)
* **QnAIntentConfiguration**: [QnAIntentConfiguration](#qnaintentconfiguration)
* **SampleUtterances**: [SampleUtterance](#sampleutterance)[]
* **SlotPriorities**: [SlotPriority](#slotpriority)[]
* **Slots**: [Slot](#slot)[]

## IntentClosingSetting
### Properties
* **ClosingResponse**: [ResponseSpecification](#responsespecification)
* **Conditional**: [ConditionalSpecification](#conditionalspecification)
* **IsActive**: bool
* **NextStep**: [DialogState](#dialogstate)

## IntentConfirmationSetting
### Properties
* **CodeHook**: [DialogCodeHookInvocationSetting](#dialogcodehookinvocationsetting)
* **ConfirmationConditional**: [ConditionalSpecification](#conditionalspecification)
* **ConfirmationNextStep**: [DialogState](#dialogstate)
* **ConfirmationResponse**: [ResponseSpecification](#responsespecification)
* **DeclinationConditional**: [ConditionalSpecification](#conditionalspecification)
* **DeclinationNextStep**: [DialogState](#dialogstate)
* **DeclinationResponse**: [ResponseSpecification](#responsespecification)
* **ElicitationCodeHook**: [ElicitationCodeHookInvocationSetting](#elicitationcodehookinvocationsetting)
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification)
* **FailureNextStep**: [DialogState](#dialogstate)
* **FailureResponse**: [ResponseSpecification](#responsespecification)
* **IsActive**: bool
* **PromptSpecification**: [PromptSpecification](#promptspecification) (Required)

## IntentDisambiguationSettings
### Properties
* **CustomDisambiguationMessage**: string
* **Enabled**: bool (Required)
* **MaxDisambiguationIntents**: int

## IntentOverride
### Properties
* **Name**: string
* **Slots**: [SlotValueOverrideMap](#slotvalueoverridemap)[]

## KendraConfiguration
### Properties
* **KendraIndex**: string (Required)
* **QueryFilterString**: string
* **QueryFilterStringEnabled**: bool

## LambdaCodeHook
### Properties
* **CodeHookInterfaceVersion**: string (Required)
* **LambdaArn**: string (Required)

## LambdaCodeHook
### Properties
* **CodeHookInterfaceVersion**: string (Required): The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
* **LambdaArn**: string (Required): The Amazon Resource Name (ARN) of the Lambda function.

## Message
### Properties
* **CustomPayload**: [CustomPayload](#custompayload)
* **ImageResponseCard**: [ImageResponseCard](#imageresponsecard)
* **PlainTextMessage**: [PlainTextMessage](#plaintextmessage)
* **SSMLMessage**: [SSMLMessage](#ssmlmessage)

## MessageGroup
### Properties
* **Message**: [Message](#message) (Required)
* **Variations**: [Message](#message)[]

## MultipleValuesSetting
### Properties
* **AllowMultipleValues**: bool

## ObfuscationSetting
### Properties
* **ObfuscationSettingType**: string (Required)

## OutputContext
### Properties
* **Name**: string (Required)
* **TimeToLiveInSeconds**: int (Required)
* **TurnsToLive**: int (Required)

## PlainTextMessage
### Properties
* **Value**: string (Required)

## Policy
### Properties

## PostDialogCodeHookInvocationSpecification
### Properties
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification)
* **FailureNextStep**: [DialogState](#dialogstate)
* **FailureResponse**: [ResponseSpecification](#responsespecification)
* **SuccessConditional**: [ConditionalSpecification](#conditionalspecification)
* **SuccessNextStep**: [DialogState](#dialogstate)
* **SuccessResponse**: [ResponseSpecification](#responsespecification)
* **TimeoutConditional**: [ConditionalSpecification](#conditionalspecification)
* **TimeoutNextStep**: [DialogState](#dialogstate)
* **TimeoutResponse**: [ResponseSpecification](#responsespecification)

## PostFulfillmentStatusSpecification
### Properties
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification)
* **FailureNextStep**: [DialogState](#dialogstate)
* **FailureResponse**: [ResponseSpecification](#responsespecification)
* **SuccessConditional**: [ConditionalSpecification](#conditionalspecification)
* **SuccessNextStep**: [DialogState](#dialogstate)
* **SuccessResponse**: [ResponseSpecification](#responsespecification)
* **TimeoutConditional**: [ConditionalSpecification](#conditionalspecification)
* **TimeoutNextStep**: [DialogState](#dialogstate)
* **TimeoutResponse**: [ResponseSpecification](#responsespecification)

## PromptSpecification
### Properties
* **AllowInterrupt**: bool
* **MaxRetries**: int (Required)
* **MessageGroupsList**: [MessageGroup](#messagegroup)[] (Required)
* **MessageSelectionStrategy**: string
* **PromptAttemptsSpecification**: [Bot_PromptAttemptsSpecification](#botpromptattemptsspecification)

## QInConnectIntentConfiguration
### Properties
* **QInConnectAssistantConfiguration**: [Bot_QInConnectAssistantConfiguration](#botqinconnectassistantconfiguration)

## QnAIntentConfiguration
### Properties
* **BedrockModelConfiguration**: [BedrockModelSpecification](#bedrockmodelspecification) (Required)
* **DataSourceConfiguration**: [Bot_DataSourceConfiguration](#botdatasourceconfiguration) (Required)

## QnAKendraConfiguration
### Properties
* **ExactResponse**: bool (Required)
* **KendraIndex**: string (Required)
* **QueryFilterString**: string
* **QueryFilterStringEnabled**: bool (Required)

## Replication
### Properties
* **ReplicaRegions**: string[] (Required)

## ResponseSpecification
### Properties
* **AllowInterrupt**: bool
* **MessageGroupsList**: [MessageGroup](#messagegroup)[] (Required)

## S3BucketLogDestination
### Properties
* **KmsKeyArn**: string
* **LogPrefix**: string (Required)
* **S3BucketArn**: string (Required)

## S3BucketLogDestination
### Properties
* **KmsKeyArn**: string: The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
* **LogPrefix**: string (Required): The Amazon S3 key of the deployment package.
* **S3BucketArn**: string (Required): The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3ObjectKey**: string (Required)
* **S3ObjectVersion**: string

## SampleUtterance
### Properties
* **Utterance**: string (Required)

## SampleValue
### Properties
* **Value**: string (Required)

## SessionAttribute
### Properties
* **Key**: string (Required)
* **Value**: string

## Slot
### Properties
* **Description**: string
* **MultipleValuesSetting**: [MultipleValuesSetting](#multiplevaluessetting)
* **Name**: string (Required)
* **ObfuscationSetting**: [ObfuscationSetting](#obfuscationsetting)
* **SlotTypeName**: string (Required)
* **SubSlotSetting**: [SubSlotSetting](#subslotsetting)
* **ValueElicitationSetting**: [SlotValueElicitationSetting](#slotvalueelicitationsetting) (Required)

## SlotCaptureSetting
### Properties
* **CaptureConditional**: [ConditionalSpecification](#conditionalspecification)
* **CaptureNextStep**: [DialogState](#dialogstate)
* **CaptureResponse**: [ResponseSpecification](#responsespecification)
* **CodeHook**: [DialogCodeHookInvocationSetting](#dialogcodehookinvocationsetting)
* **ElicitationCodeHook**: [ElicitationCodeHookInvocationSetting](#elicitationcodehookinvocationsetting)
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification)
* **FailureNextStep**: [DialogState](#dialogstate)
* **FailureResponse**: [ResponseSpecification](#responsespecification)

## SlotDefaultValue
### Properties
* **DefaultValue**: string (Required)

## SlotDefaultValueSpecification
### Properties
* **DefaultValueList**: [SlotDefaultValue](#slotdefaultvalue)[] (Required)

## SlotPriority
### Properties
* **Priority**: int (Required)
* **SlotName**: string (Required)

## SlotType
### Properties
* **CompositeSlotTypeSetting**: [CompositeSlotTypeSetting](#compositeslottypesetting)
* **Description**: string
* **ExternalSourceSetting**: [ExternalSourceSetting](#externalsourcesetting)
* **Name**: string (Required)
* **ParentSlotTypeSignature**: string
* **SlotTypeValues**: [SlotTypeValue](#slottypevalue)[]
* **ValueSelectionSetting**: [SlotValueSelectionSetting](#slotvalueselectionsetting)

## SlotTypeValue
### Properties
* **SampleValue**: [SampleValue](#samplevalue) (Required)
* **Synonyms**: [SampleValue](#samplevalue)[]

## SlotValue
### Properties
* **InterpretedValue**: string

## SlotValueElicitationSetting
### Properties
* **DefaultValueSpecification**: [SlotDefaultValueSpecification](#slotdefaultvaluespecification)
* **PromptSpecification**: [PromptSpecification](#promptspecification)
* **SampleUtterances**: [SampleUtterance](#sampleutterance)[]
* **SlotCaptureSetting**: [SlotCaptureSetting](#slotcapturesetting)
* **SlotConstraint**: string (Required)
* **WaitAndContinueSpecification**: [WaitAndContinueSpecification](#waitandcontinuespecification)

## SlotValueOverride
### Properties
* **Shape**: string
* **Value**: [SlotValue](#slotvalue)
* **Values**: [SlotValueOverride](#slotvalueoverride)[]

## SlotValueOverrideMap
### Properties
* **SlotName**: string
* **SlotValueOverride**: [SlotValueOverride](#slotvalueoverride)

## SlotValueRegexFilter
### Properties
* **Pattern**: string (Required)

## SlotValueSelectionSetting
### Properties
* **AdvancedRecognitionSetting**: [AdvancedRecognitionSetting](#advancedrecognitionsetting)
* **RegexFilter**: [SlotValueRegexFilter](#slotvalueregexfilter)
* **ResolutionStrategy**: string (Required)

## SpeechModelConfig
### Properties
* **DeepgramConfig**: [DeepgramSpeechModelConfig](#deepgramspeechmodelconfig)

## SpeechRecognitionSettings
### Properties
* **SpeechModelConfig**: [SpeechModelConfig](#speechmodelconfig)
* **SpeechModelPreference**: string

## SSMLMessage
### Properties
* **Value**: string (Required)

## StillWaitingResponseSpecification
### Properties
* **AllowInterrupt**: bool
* **FrequencyInSeconds**: int (Required)
* **MessageGroupsList**: [MessageGroup](#messagegroup)[] (Required)
* **TimeoutInSeconds**: int (Required)

## SubSlotSetting
### Properties
* **Expression**: string
* **SlotSpecifications**: [Bot_SlotSpecifications](#botslotspecifications)

## SubSlotTypeComposition
### Properties
* **Name**: string (Required)
* **SlotTypeId**: string
* **SlotTypeName**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## TestBotAliasSettings
### Properties
* **BotAliasLocaleSettings**: [BotAliasLocaleSettingsItem](#botaliaslocalesettingsitem)[]
* **ConversationLogSettings**: [ConversationLogSettings](#conversationlogsettings)
* **Description**: string
* **SentimentAnalysisSettings**: [Bot_SentimentAnalysisSettings](#botsentimentanalysissettings)

## TextLogDestination
### Properties
* **CloudWatch**: [CloudWatchLogGroupLogDestination](#cloudwatchloggrouplogdestination) (Required)

## TextLogDestination
### Properties
* **CloudWatch**: [CloudWatchLogGroupLogDestination](#cloudwatchloggrouplogdestination) (Required)

## TextLogSetting
### Properties
* **Destination**: [TextLogDestination](#textlogdestination) (Required)
* **Enabled**: bool (Required)

## TextLogSetting
### Properties
* **Destination**: [TextLogDestination](#textlogdestination) (Required)
* **Enabled**: bool (Required)

## UnifiedSpeechSettings
### Properties
* **SpeechFoundationModel**: [Bot_SpeechFoundationModel](#botspeechfoundationmodel) (Required)

## VoiceSettings
### Properties
* **Engine**: string
* **VoiceId**: string (Required)

## WaitAndContinueSpecification
### Properties
* **ContinueResponse**: [ResponseSpecification](#responsespecification) (Required)
* **IsActive**: bool
* **StillWaitingResponse**: [StillWaitingResponseSpecification](#stillwaitingresponsespecification)
* **WaitingResponse**: [ResponseSpecification](#responsespecification) (Required)

