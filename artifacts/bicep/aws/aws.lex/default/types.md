# AWS.Lex @ default

## Resource AWS.Lex/Bot@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lex/BotProperties](#awslexbotproperties): properties of the resource

## Resource AWS.Lex/BotAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lex/BotAliasProperties](#awslexbotaliasproperties): properties of the resource

## Resource AWS.Lex/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lex/ResourcePolicyProperties](#awslexresourcepolicyproperties): properties of the resource

## AWS.Lex/BotProperties
### Properties
* **Arn**: [BotArn](#botarn) (ReadOnly)
* **AutoBuildBotLocales**: bool (WriteOnly): Specifies whether to build the bot locales after bot creation completes.
* **BotFileS3Location**: [S3Location](#s3location) (WriteOnly)
* **BotLocales**: [BotLocale](#botlocale)[] (WriteOnly): List of bot locales
* **BotTags**: [Tag](#tag)[] (WriteOnly): A list of tags to add to the bot, which can only be added at bot creation.
* **DataPrivacy**: [Bot_DataPrivacy](#botdataprivacy): Data privacy setting of the Bot.
* **Description**: [Description](#description)
* **Id**: [Id](#id) (ReadOnly)
* **IdleSessionTTLInSeconds**: int: IdleSessionTTLInSeconds of the resource
* **Name**: [Name](#name)
* **RoleArn**: [RoleArn](#rolearn)
* **TestBotAliasSettings**: [TestBotAliasSettings](#testbotaliassettings)
* **TestBotAliasTags**: [Tag](#tag)[] (WriteOnly): A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.

## BotArn
### Properties

## S3Location
### Properties
* **S3Bucket**: [S3BucketName](#s3bucketname): An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
* **S3ObjectKey**: [S3ObjectKey](#s3objectkey): The Amazon S3 key of the deployment package.
* **S3ObjectVersion**: string: For versioned objects, the version of the deployment package object to use. If not specified, the current object version will be used.

## S3BucketName
### Properties

## S3ObjectKey
### Properties

## BotLocale
### Properties
* **CustomVocabulary**: [CustomVocabulary](#customvocabulary)
* **Description**: [Description](#description)
* **Intents**: [Intent](#intent)[]: List of intents
* **LocaleId**: [LocaleId](#localeid)
* **NluConfidenceThreshold**: [ConfidenceThreshold](#confidencethreshold)
* **SlotTypes**: [SlotType](#slottype)[]: List of SlotTypes
* **VoiceSettings**: [VoiceSettings](#voicesettings)

## CustomVocabulary
### Properties
* **CustomVocabularyItems**: [CustomVocabularyItems](#customvocabularyitems)

## CustomVocabularyItems
### Properties

## Description
### Properties

## Intent
### Properties
* **Description**: [Description](#description)
* **DialogCodeHook**: [DialogCodeHookSetting](#dialogcodehooksetting)
* **FulfillmentCodeHook**: [FulfillmentCodeHookSetting](#fulfillmentcodehooksetting)
* **InputContexts**: [InputContextsList](#inputcontextslist)
* **IntentClosingSetting**: [IntentClosingSetting](#intentclosingsetting)
* **IntentConfirmationSetting**: [IntentConfirmationSetting](#intentconfirmationsetting)
* **KendraConfiguration**: [KendraConfiguration](#kendraconfiguration)
* **Name**: [Name](#name)
* **OutputContexts**: [OutputContextsList](#outputcontextslist)
* **ParentIntentSignature**: [ParentIntentSignature](#parentintentsignature)
* **SampleUtterances**: [SampleUtterancesList](#sampleutteranceslist)
* **SlotPriorities**: [SlotPrioritiesList](#slotprioritieslist)
* **Slots**: [Slot](#slot)[]: List of slots

## DialogCodeHookSetting
### Properties
* **Enabled**: bool

## FulfillmentCodeHookSetting
### Properties
* **Enabled**: bool
* **FulfillmentUpdatesSpecification**: [FulfillmentUpdatesSpecification](#fulfillmentupdatesspecification)
* **PostFulfillmentStatusSpecification**: [PostFulfillmentStatusSpecification](#postfulfillmentstatusspecification)

## FulfillmentUpdatesSpecification
### Properties
* **Active**: bool: Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
* **StartResponse**: [FulfillmentStartResponseSpecification](#fulfillmentstartresponsespecification)
* **TimeoutInSeconds**: int: The length of time that the fulfillment Lambda function should run before it times out.
* **UpdateResponse**: [FulfillmentUpdateResponseSpecification](#fulfillmentupdateresponsespecification)

## FulfillmentStartResponseSpecification
### Properties
* **AllowInterrupt**: bool: Determines whether the user can interrupt the start message while it is playing.
* **DelayInSeconds**: int: The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
* **MessageGroups**: [MessageGroupsList](#messagegroupslist)

## MessageGroupsList
### Properties

## FulfillmentUpdateResponseSpecification
### Properties
* **AllowInterrupt**: bool: Determines whether the user can interrupt an update message while it is playing.
* **FrequencyInSeconds**: int: The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
* **MessageGroups**: [MessageGroupsList](#messagegroupslist)

## PostFulfillmentStatusSpecification
### Properties
* **FailureResponse**: [ResponseSpecification](#responsespecification)
* **SuccessResponse**: [ResponseSpecification](#responsespecification)
* **TimeoutResponse**: [ResponseSpecification](#responsespecification)

## ResponseSpecification
### Properties
* **AllowInterrupt**: bool: Indicates whether the user can interrupt a speech prompt from the bot.
* **MessageGroupsList**: [MessageGroupsList](#messagegroupslist)

## InputContextsList
### Properties

## IntentClosingSetting
### Properties
* **ClosingResponse**: [ResponseSpecification](#responsespecification)
* **IsActive**: bool

## IntentConfirmationSetting
### Properties
* **DeclinationResponse**: [ResponseSpecification](#responsespecification)
* **IsActive**: bool
* **PromptSpecification**: [PromptSpecification](#promptspecification)

## PromptSpecification
### Properties
* **AllowInterrupt**: bool: Indicates whether the user can interrupt a speech prompt from the bot.
* **MaxRetries**: [PromptMaxRetries](#promptmaxretries)
* **MessageGroupsList**: [MessageGroupsList](#messagegroupslist)
* **MessageSelectionStrategy**: [MessageSelectionStrategy](#messageselectionstrategy)

## PromptMaxRetries
### Properties

## MessageSelectionStrategy
### Properties

## KendraConfiguration
### Properties
* **KendraIndex**: [KendraIndexArn](#kendraindexarn)
* **QueryFilterString**: [QueryFilterString](#queryfilterstring)
* **QueryFilterStringEnabled**: bool: Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.

## KendraIndexArn
### Properties

## QueryFilterString
### Properties

## Name
### Properties

## OutputContextsList
### Properties

## ParentIntentSignature
### Properties

## SampleUtterancesList
### Properties

## SlotPrioritiesList
### Properties

## Slot
### Properties
* **Description**: [Description](#description)
* **MultipleValuesSetting**: [MultipleValuesSetting](#multiplevaluessetting)
* **Name**: [Name](#name)
* **ObfuscationSetting**: [ObfuscationSetting](#obfuscationsetting)
* **SlotTypeName**: [SlotTypeName](#slottypename)
* **ValueElicitationSetting**: [SlotValueElicitationSetting](#slotvalueelicitationsetting)

## MultipleValuesSetting
### Properties
* **AllowMultipleValues**: bool

## ObfuscationSetting
### Properties
* **ObfuscationSettingType**: string: Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.

## SlotTypeName
### Properties

## SlotValueElicitationSetting
### Properties
* **DefaultValueSpecification**: [SlotDefaultValueSpecification](#slotdefaultvaluespecification): A list of default values for a slot.
* **PromptSpecification**: [PromptSpecification](#promptspecification): The prompt that Amazon Lex uses to elicit the slot value from the user.
* **SampleUtterances**: [SampleUtterancesList](#sampleutteranceslist): If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy.
* **SlotConstraint**: [SlotConstraint](#slotconstraint): Specifies whether the slot is required or optional.
* **WaitAndContinueSpecification**: [WaitAndContinueSpecification](#waitandcontinuespecification): Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.

## SlotDefaultValueSpecification
### Properties
* **DefaultValueList**: [SlotDefaultValue](#slotdefaultvalue)[]: A list of slot default values

## SlotDefaultValue
### Properties
* **DefaultValue**: string: The default value to use when a user doesn't provide a value for a slot.

## SlotConstraint
### Properties

## WaitAndContinueSpecification
### Properties
* **ContinueResponse**: [ResponseSpecification](#responsespecification): The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
* **IsActive**: bool: Specifies whether the bot will wait for a user to respond.
* **StillWaitingResponse**: [StillWaitingResponseSpecification](#stillwaitingresponsespecification): The response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
* **WaitingResponse**: [ResponseSpecification](#responsespecification): The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.

## StillWaitingResponseSpecification
### Properties
* **AllowInterrupt**: bool: Indicates whether the user can interrupt a speech prompt from the bot.
* **FrequencyInSeconds**: [StillWaitingResponseFrequency](#stillwaitingresponsefrequency)
* **MessageGroupsList**: [MessageGroupsList](#messagegroupslist)
* **TimeoutInSeconds**: [StillWaitingResponseTimeout](#stillwaitingresponsetimeout)

## StillWaitingResponseFrequency
### Properties

## StillWaitingResponseTimeout
### Properties

## LocaleId
### Properties

## ConfidenceThreshold
### Properties

## SlotType
### Properties
* **Description**: [Description](#description)
* **ExternalSourceSetting**: [ExternalSourceSetting](#externalsourcesetting)
* **Name**: [Name](#name)
* **ParentSlotTypeSignature**: [ParentSlotTypeSignature](#parentslottypesignature)
* **SlotTypeValues**: [SlotTypeValues](#slottypevalues)
* **ValueSelectionSetting**: [SlotValueSelectionSetting](#slotvalueselectionsetting)

## ExternalSourceSetting
### Properties
* **GrammarSlotTypeSetting**: [GrammarSlotTypeSetting](#grammarslottypesetting)

## GrammarSlotTypeSetting
### Properties
* **Source**: [GrammarSlotTypeSource](#grammarslottypesource)

## GrammarSlotTypeSource
### Properties
* **KmsKeyArn**: string: The Amazon KMS key required to decrypt the contents of the grammar, if any.
* **S3BucketName**: [S3BucketName](#s3bucketname): The name of the S3 bucket that contains the grammar source.
* **S3ObjectKey**: [S3ObjectKey](#s3objectkey): The path to the grammar in the S3 bucket.

## ParentSlotTypeSignature
### Properties

## SlotTypeValues
### Properties

## SlotValueSelectionSetting
### Properties
* **AdvancedRecognitionSetting**: [AdvancedRecognitionSetting](#advancedrecognitionsetting)
* **RegexFilter**: [SlotValueRegexFilter](#slotvalueregexfilter)
* **ResolutionStrategy**: [SlotValueResolutionStrategy](#slotvalueresolutionstrategy)

## AdvancedRecognitionSetting
### Properties
* **AudioRecognitionStrategy**: [AudioRecognitionStrategy](#audiorecognitionstrategy)

## AudioRecognitionStrategy
### Properties

## SlotValueRegexFilter
### Properties
* **Pattern**: string: Regex pattern

## SlotValueResolutionStrategy
### Properties

## VoiceSettings
### Properties
* **VoiceId**: string: The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Bot_DataPrivacy
### Properties
* **ChildDirected**: bool

## Id
### Properties

## RoleArn
### Properties

## TestBotAliasSettings
### Properties
* **BotAliasLocaleSettings**: [BotAliasLocaleSettingsList](#botaliaslocalesettingslist)
* **ConversationLogSettings**: [ConversationLogSettings](#conversationlogsettings)
* **Description**: [Description](#description)
* **SentimentAnalysisSettings**: [Bot_SentimentAnalysisSettings](#botsentimentanalysissettings): Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

## BotAliasLocaleSettingsList
### Properties

## ConversationLogSettings
### Properties
* **AudioLogSettings**: [AudioLogSettings](#audiologsettings)
* **TextLogSettings**: [TextLogSettings](#textlogsettings)

## AudioLogSettings
### Properties

## TextLogSettings
### Properties

## Bot_SentimentAnalysisSettings
### Properties
* **DetectSentiment**: bool: Enable to call Amazon Comprehend for Sentiment natively within Lex

## AWS.Lex/BotAliasProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **BotAliasId**: [Id](#id) (ReadOnly)
* **BotAliasLocaleSettings**: [BotAliasLocaleSettingsList](#botaliaslocalesettingslist)
* **BotAliasName**: [Name](#name)
* **BotAliasStatus**: [BotAliasStatus](#botaliasstatus) (ReadOnly)
* **BotAliasTags**: [Tag](#tag)[] (WriteOnly): A list of tags to add to the bot alias.
* **BotId**: [Id](#id)
* **BotVersion**: [BotVersion](#botversion)
* **ConversationLogSettings**: [ConversationLogSettings](#conversationlogsettings)
* **Description**: [Description](#description)
* **SentimentAnalysisSettings**: [BotAlias_SentimentAnalysisSettings](#botaliassentimentanalysissettings): Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

## Arn
### Properties

## Id
### Properties

## BotAliasLocaleSettingsList
### Properties

## Name
### Properties

## BotAliasStatus
### Properties

## Tag
### Properties
* **Key**: string: A string used to identify this tag
* **Value**: string: A string containing the value for the tag

## BotVersion
### Properties

## ConversationLogSettings
### Properties
* **AudioLogSettings**: [AudioLogSettings](#audiologsettings)
* **TextLogSettings**: [TextLogSettings](#textlogsettings)

## AudioLogSettings
### Properties

## TextLogSettings
### Properties

## Description
### Properties

## BotAlias_SentimentAnalysisSettings
### Properties
* **DetectSentiment**: bool: Enable to call Amazon Comprehend for Sentiment natively within Lex

## AWS.Lex/ResourcePolicyProperties
### Properties
* **Id**: [PhysicalId](#physicalid) (ReadOnly)
* **Policy**: [Policy](#policy)
* **ResourceArn**: [ResourceArn](#resourcearn)
* **RevisionId**: [RevisionId](#revisionid) (ReadOnly)

## PhysicalId
### Properties

## Policy
### Properties

## ResourceArn
### Properties

## RevisionId
### Properties

