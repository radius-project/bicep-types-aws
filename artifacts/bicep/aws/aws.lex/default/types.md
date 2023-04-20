# AWS.Lex @ default

## Resource AWS.Lex/Bot@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lex/BotProperties](#awslexbotproperties) (Required): properties of the resource

## Resource AWS.Lex/BotAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lex/BotAliasProperties](#awslexbotaliasproperties) (Required): properties of the resource

## Resource AWS.Lex/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Lex/ResourcePolicyProperties](#awslexresourcepolicyproperties) (Required): properties of the resource

## AWS.Lex/BotProperties
### Properties
* **Arn**: string (ReadOnly)
* **AutoBuildBotLocales**: bool (WriteOnly): Specifies whether to build the bot locales after bot creation completes.
* **BotFileS3Location**: [S3Location](#s3location) (WriteOnly)
* **BotLocales**: [BotLocale](#botlocale)[] (WriteOnly): List of bot locales
* **BotTags**: [Tag](#tag)[] (WriteOnly): A list of tags to add to the bot, which can only be added at bot creation.
* **DataPrivacy**: [Bot_DataPrivacy](#botdataprivacy) (Required): Data privacy setting of the Bot.
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **IdleSessionTTLInSeconds**: int (Required): IdleSessionTTLInSeconds of the resource
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **TestBotAliasSettings**: [TestBotAliasSettings](#testbotaliassettings)
* **TestBotAliasTags**: [Tag](#tag)[] (WriteOnly): A list of tags to add to the test alias for a bot, , which can only be added at bot/bot alias creation.

## S3Location
### Properties
* **S3Bucket**: string (Required): An Amazon S3 bucket in the same AWS Region as your function. The bucket can be in a different AWS account.
* **S3ObjectKey**: string (Required): The Amazon S3 key of the deployment package.
* **S3ObjectVersion**: string: For versioned objects, the version of the deployment package object to use. If not specified, the current object version will be used.

## BotLocale
### Properties
* **CustomVocabulary**: [CustomVocabulary](#customvocabulary)
* **Description**: string
* **Intents**: [Intent](#intent)[]: List of intents
* **LocaleId**: string (Required)
* **NluConfidenceThreshold**: int (Required)
* **SlotTypes**: [SlotType](#slottype)[]: List of SlotTypes
* **VoiceSettings**: [VoiceSettings](#voicesettings)

## CustomVocabulary
### Properties
* **CustomVocabularyItems**: [CustomVocabularyItem](#customvocabularyitem)[] (Required)

## CustomVocabularyItem
### Properties
* **DisplayAs**: string: Defines how you want your phrase to look in your transcription output.
* **Phrase**: string (Required): Phrase that should be recognized.
* **Weight**: int: The degree to which the phrase recognition is boosted. The weight 0 means that no boosting will be applied and the entry will only be used for performing replacements using the displayAs field.

## Intent
### Properties
* **Description**: string: Description of thr intent.
* **DialogCodeHook**: [DialogCodeHookSetting](#dialogcodehooksetting)
* **FulfillmentCodeHook**: [FulfillmentCodeHookSetting](#fulfillmentcodehooksetting)
* **InitialResponseSetting**: [InitialResponseSetting](#initialresponsesetting): Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.
* **InputContexts**: [InputContext](#inputcontext)[]
* **IntentClosingSetting**: [IntentClosingSetting](#intentclosingsetting)
* **IntentConfirmationSetting**: [IntentConfirmationSetting](#intentconfirmationsetting)
* **KendraConfiguration**: [KendraConfiguration](#kendraconfiguration)
* **Name**: string (Required): The name of the intent.
* **OutputContexts**: [OutputContext](#outputcontext)[]
* **ParentIntentSignature**: string
* **SampleUtterances**: [SampleUtterance](#sampleutterance)[]: A sample utterance that invokes an intent or respond to a slot elicitation prompt.
* **SlotPriorities**: [SlotPriority](#slotpriority)[]
* **Slots**: [Slot](#slot)[]: List of slots

## DialogCodeHookSetting
### Properties
* **Enabled**: bool (Required)

## FulfillmentCodeHookSetting
### Properties
* **Enabled**: bool (Required)
* **FulfillmentUpdatesSpecification**: [FulfillmentUpdatesSpecification](#fulfillmentupdatesspecification)
* **IsActive**: bool: Determines whether the fulfillment code hook is used. When active is false, the code hook doesn't run.
* **PostFulfillmentStatusSpecification**: [PostFulfillmentStatusSpecification](#postfulfillmentstatusspecification)

## FulfillmentUpdatesSpecification
### Properties
* **Active**: bool (Required): Determines whether fulfillment updates are sent to the user. When this field is true, updates are sent.
* **StartResponse**: [FulfillmentStartResponseSpecification](#fulfillmentstartresponsespecification)
* **TimeoutInSeconds**: int: The length of time that the fulfillment Lambda function should run before it times out.
* **UpdateResponse**: [FulfillmentUpdateResponseSpecification](#fulfillmentupdateresponsespecification)

## FulfillmentStartResponseSpecification
### Properties
* **AllowInterrupt**: bool: Determines whether the user can interrupt the start message while it is playing.
* **DelayInSeconds**: int (Required): The delay between when the Lambda fulfillment function starts running and the start message is played. If the Lambda function returns before the delay is over, the start message isn't played.
* **MessageGroups**: [MessageGroup](#messagegroup)[] (Required)

## MessageGroup
### Properties
* **Message**: [Message](#message) (Required)
* **Variations**: [Message](#message)[]: Message variations to send to the user.

## Message
### Properties
* **CustomPayload**: [CustomPayload](#custompayload)
* **ImageResponseCard**: [ImageResponseCard](#imageresponsecard)
* **PlainTextMessage**: [PlainTextMessage](#plaintextmessage)
* **SSMLMessage**: [SSMLMessage](#ssmlmessage)

## CustomPayload
### Properties
* **Value**: string (Required): The string that is sent to your application.

## ImageResponseCard
### Properties
* **Buttons**: [Button](#button)[]: A list of buttons that should be displayed on the response card.
* **ImageUrl**: string: The URL of an image to display on the response card.
* **Subtitle**: string: The subtitle to display on the response card.
* **Title**: string (Required): The title to display on the response card.

## Button
### Properties
* **Text**: string (Required): The text that appears on the button.
* **Value**: string (Required): The value returned to Amazon Lex when the user chooses this button.

## PlainTextMessage
### Properties
* **Value**: string (Required): The message to send to the user.

## SSMLMessage
### Properties
* **Value**: string (Required): The SSML text that defines the prompt.

## FulfillmentUpdateResponseSpecification
### Properties
* **AllowInterrupt**: bool: Determines whether the user can interrupt an update message while it is playing.
* **FrequencyInSeconds**: int (Required): The frequency that a message is sent to the user. When the period ends, Amazon Lex chooses a message from the message groups and plays it to the user. If the fulfillment Lambda returns before the first period ends, an update message is not played to the user.
* **MessageGroups**: [MessageGroup](#messagegroup)[] (Required)

## PostFulfillmentStatusSpecification
### Properties
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the fulfillment code hook throws an exception or returns with the State field of the Intent object set to Failed.
* **FailureNextStep**: [DialogState](#dialogstate): Specifies the next step the bot runs after the fulfillment code hook throws an exception or returns with the State field of the Intent object set to Failed.
* **FailureResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **SuccessConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the fulfillment code hook finishes successfully.
* **SuccessNextStep**: [DialogState](#dialogstate): Specifies the next step in the conversation that Amazon Lex invokes when the fulfillment code hook completes successfully.
* **SuccessResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **TimeoutConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate if the fulfillment code hook times out.
* **TimeoutNextStep**: [DialogState](#dialogstate): Specifies the next step that the bot runs when the fulfillment code hook times out.
* **TimeoutResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.

## ConditionalSpecification
### Properties
* **ConditionalBranches**: [ConditionalBranch](#conditionalbranch)[] (Required): A list of conditional branches. A conditional branch is made up of a condition, a response and a next step. The response and next step are executed when the condition is true.
* **DefaultBranch**: [DefaultConditionalBranch](#defaultconditionalbranch) (Required): The conditional branch that should be followed when the conditions for other branches are not satisfied. A conditional branch is made up of a condition, a response and a next step.
* **IsActive**: bool (Required): Determines whether a conditional branch is active. When active is false, the conditions are not evaluated.

## ConditionalBranch
### Properties
* **Condition**: [Condition](#condition) (Required): Contains the expression to evaluate. If the condition is true, the branch's actions are taken.
* **Name**: string (Required): The name of the branch.
* **NextStep**: [DialogState](#dialogstate) (Required): The next step in the conversation.
* **Response**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.

## Condition
### Properties
* **ExpressionString**: string (Required): The expression string that is evaluated.

## DialogState
### Properties
* **DialogAction**: [DialogAction](#dialogaction): Defines the action that the bot executes at runtime when the conversation reaches this step.
* **Intent**: [IntentOverride](#intentoverride): Override settings to configure the intent state.
* **SessionAttributes**: [SessionAttribute](#sessionattribute)[]: List of session attributes to be applied when the conversation reaches this step.

## DialogAction
### Properties
* **SlotToElicit**: string: If the dialog action is ElicitSlot, defines the slot to elicit from the user.
* **SuppressNextMessage**: bool: When true the next message for the intent is not used.
* **Type**: string (Required): The action that the bot should execute.

## IntentOverride
### Properties
* **Name**: string: The name of the intent. Only required when you're switching intents.
* **Slots**: [SlotValueOverrideMap](#slotvalueoverridemap)[]: A map of all of the slot value overrides for the intent.

## SlotValueOverrideMap
### Properties
* **SlotName**: string
* **SlotValueOverride**: [SlotValueOverride](#slotvalueoverride)

## SlotValueOverride
### Properties
* **Shape**: string: When the shape value is List, it indicates that the values field contains a list of slot values. When the value is Scalar, it indicates that the value field contains a single value.
* **Value**: [SlotValue](#slotvalue): The current value of the slot.
* **Values**: [SlotValueOverride](#slotvalueoverride)[]: A list of one or more values that the user provided for the slot. For example, for a slot that elicits pizza toppings, the values might be "pepperoni" and "pineapple."

## SlotValue
### Properties
* **InterpretedValue**: string: The value that Amazon Lex determines for the slot.

## SessionAttribute
### Properties
* **Key**: string (Required)
* **Value**: string

## ResponseSpecification
### Properties
* **AllowInterrupt**: bool: Indicates whether the user can interrupt a speech prompt from the bot.
* **MessageGroupsList**: [MessageGroup](#messagegroup)[] (Required)

## DefaultConditionalBranch
### Properties
* **NextStep**: [DialogState](#dialogstate): The next step in the conversation.
* **Response**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.

## InitialResponseSetting
### Properties
* **CodeHook**: [DialogCodeHookInvocationSetting](#dialogcodehookinvocationsetting): Settings that specify the dialog code hook that is called by Amazon Lex at a step of the conversation.
* **Conditional**: [ConditionalSpecification](#conditionalspecification): Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
* **InitialResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **NextStep**: [DialogState](#dialogstate): The next step in the conversation.

## DialogCodeHookInvocationSetting
### Properties
* **EnableCodeHookInvocation**: bool (Required): Indicates whether a Lambda function should be invoked for the dialog.
* **InvocationLabel**: string: A label that indicates the dialog step from which the dialog code hook is happening.
* **IsActive**: bool (Required): Determines whether a dialog code hook is used when the intent is activated.
* **PostCodeHookSpecification**: [PostDialogCodeHookInvocationSpecification](#postdialogcodehookinvocationspecification) (Required): Contains the responses and actions that Amazon Lex takes after the Lambda function is complete.

## PostDialogCodeHookInvocationSpecification
### Properties
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
* **FailureNextStep**: [DialogState](#dialogstate): Specifies the next step the bot runs after the dialog code hook throws an exception or returns with the State field of the Intent object set to Failed.
* **FailureResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **SuccessConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the dialog code hook finishes successfully.
* **SuccessNextStep**: [DialogState](#dialogstate): Specifics the next step the bot runs after the dialog code hook finishes successfully.
* **SuccessResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **TimeoutConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate if the code hook times out.
* **TimeoutNextStep**: [DialogState](#dialogstate): Specifies the next step that the bot runs when the code hook times out.
* **TimeoutResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.

## InputContext
### Properties
* **Name**: string (Required): The name of the context.

## IntentClosingSetting
### Properties
* **ClosingResponse**: [ResponseSpecification](#responsespecification): The response that Amazon Lex sends to the user when the intent is complete.
* **Conditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches associated with the intent's closing response. These branches are executed when the nextStep attribute is set to EvalutateConditional.
* **IsActive**: bool: Specifies whether an intent's closing response is used. When this field is false, the closing response isn't sent to the user. If the active field isn't specified, the default is true.
* **NextStep**: [DialogState](#dialogstate): Specifies the next step that the bot executes after playing the intent's closing response.

## IntentConfirmationSetting
### Properties
* **CodeHook**: [DialogCodeHookInvocationSetting](#dialogcodehookinvocationsetting): The DialogCodeHookInvocationSetting object associated with intent's confirmation step. The dialog code hook is triggered based on these invocation settings when the confirmation next step or declination next step or failure next step is InvokeDialogCodeHook.
* **ConfirmationConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the intent is closed.
* **ConfirmationNextStep**: [DialogState](#dialogstate): Specifies the next step that the bot executes when the customer confirms the intent.
* **ConfirmationResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **DeclinationConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the intent is declined.
* **DeclinationNextStep**: [DialogState](#dialogstate): Specifies the next step that the bot executes when the customer declines the intent.
* **DeclinationResponse**: [ResponseSpecification](#responsespecification): When the user answers "no" to the question defined in promptSpecification, Amazon Lex responds with this response to acknowledge that the intent was canceled.
* **ElicitationCodeHook**: [ElicitationCodeHookInvocationSetting](#elicitationcodehookinvocationsetting): The DialogCodeHookInvocationSetting used when the code hook is invoked during confirmation prompt retries.
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification): Provides a list of conditional branches. Branches are evaluated in the order that they are entered in the list. The first branch with a condition that evaluates to true is executed. The last branch in the list is the default branch. The default branch should not have any condition expression. The default branch is executed if no other branch has a matching condition.
* **FailureNextStep**: [DialogState](#dialogstate): The next step to take in the conversation if the confirmation step fails.
* **FailureResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **IsActive**: bool: Specifies whether the intent's confirmation is sent to the user. When this field is false, confirmation and declination responses aren't sent. If the active field isn't specified, the default is true.
* **PromptSpecification**: [PromptSpecification](#promptspecification) (Required): Prompts the user to confirm the intent. This question should have a yes or no answer.

## ElicitationCodeHookInvocationSetting
### Properties
* **EnableCodeHookInvocation**: bool (Required): Indicates whether a Lambda function should be invoked for the dialog.
* **InvocationLabel**: string: A label that indicates the dialog step from which the dialog code hook is happening.

## PromptSpecification
### Properties
* **AllowInterrupt**: bool: Indicates whether the user can interrupt a speech prompt from the bot.
* **MaxRetries**: int (Required)
* **MessageGroupsList**: [MessageGroup](#messagegroup)[] (Required)
* **MessageSelectionStrategy**: string
* **PromptAttemptsSpecification**: [Bot_PromptAttemptsSpecification](#botpromptattemptsspecification): Specifies the advanced settings on each attempt of the prompt.

## Bot_PromptAttemptsSpecification
### Properties

## KendraConfiguration
### Properties
* **KendraIndex**: string (Required)
* **QueryFilterString**: string
* **QueryFilterStringEnabled**: bool: Determines whether the AMAZON.KendraSearchIntent intent uses a custom query string to query the Amazon Kendra index.

## OutputContext
### Properties
* **Name**: string (Required)
* **TimeToLiveInSeconds**: int (Required)
* **TurnsToLive**: int (Required)

## SampleUtterance
### Properties
* **Utterance**: string (Required)

## SlotPriority
### Properties
* **Priority**: int (Required)
* **SlotName**: string (Required): The name of the slot.

## Slot
### Properties
* **Description**: string
* **MultipleValuesSetting**: [MultipleValuesSetting](#multiplevaluessetting)
* **Name**: string (Required)
* **ObfuscationSetting**: [ObfuscationSetting](#obfuscationsetting)
* **SlotTypeName**: string (Required)
* **ValueElicitationSetting**: [SlotValueElicitationSetting](#slotvalueelicitationsetting) (Required)

## MultipleValuesSetting
### Properties
* **AllowMultipleValues**: bool

## ObfuscationSetting
### Properties
* **ObfuscationSettingType**: string (Required): Value that determines whether Amazon Lex obscures slot values in conversation logs. The default is to obscure the values.

## SlotValueElicitationSetting
### Properties
* **DefaultValueSpecification**: [SlotDefaultValueSpecification](#slotdefaultvaluespecification): A list of default values for a slot.
* **PromptSpecification**: [PromptSpecification](#promptspecification): The prompt that Amazon Lex uses to elicit the slot value from the user.
* **SampleUtterances**: [SampleUtterance](#sampleutterance)[]: If you know a specific pattern that users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy.
* **SlotCaptureSetting**: [SlotCaptureSetting](#slotcapturesetting): Specifies the next stage in the conversation after capturing the slot.
* **SlotConstraint**: string (Required): Specifies whether the slot is required or optional.
* **WaitAndContinueSpecification**: [WaitAndContinueSpecification](#waitandcontinuespecification): Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input.

## SlotDefaultValueSpecification
### Properties
* **DefaultValueList**: [SlotDefaultValue](#slotdefaultvalue)[] (Required): A list of slot default values

## SlotDefaultValue
### Properties
* **DefaultValue**: string (Required): The default value to use when a user doesn't provide a value for a slot.

## SlotCaptureSetting
### Properties
* **CaptureConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate after the slot value is captured.
* **CaptureNextStep**: [DialogState](#dialogstate): Specifies the next step that the bot runs when the slot value is captured before the code hook times out.
* **CaptureResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.
* **CodeHook**: [DialogCodeHookInvocationSetting](#dialogcodehookinvocationsetting): Code hook called after Amazon Lex successfully captures a slot value.
* **ElicitationCodeHook**: [ElicitationCodeHookInvocationSetting](#elicitationcodehookinvocationsetting): Code hook called when Amazon Lex doesn't capture a slot value.
* **FailureConditional**: [ConditionalSpecification](#conditionalspecification): A list of conditional branches to evaluate when the slot value isn't captured.
* **FailureNextStep**: [DialogState](#dialogstate): Specifies the next step that the bot runs when the slot value code is not recognized.
* **FailureResponse**: [ResponseSpecification](#responsespecification): Specifies a list of message groups that Amazon Lex uses to respond the user input.

## WaitAndContinueSpecification
### Properties
* **ContinueResponse**: [ResponseSpecification](#responsespecification) (Required): The response that Amazon Lex sends to indicate that the bot is ready to continue the conversation.
* **IsActive**: bool: Specifies whether the bot will wait for a user to respond.
* **StillWaitingResponse**: [StillWaitingResponseSpecification](#stillwaitingresponsespecification): The response that Amazon Lex sends periodically to the user to indicate that the bot is still waiting for input from the user.
* **WaitingResponse**: [ResponseSpecification](#responsespecification) (Required): The response that Amazon Lex sends to indicate that the bot is waiting for the conversation to continue.

## StillWaitingResponseSpecification
### Properties
* **AllowInterrupt**: bool: Indicates whether the user can interrupt a speech prompt from the bot.
* **FrequencyInSeconds**: int (Required)
* **MessageGroupsList**: [MessageGroup](#messagegroup)[] (Required)
* **TimeoutInSeconds**: int (Required)

## SlotType
### Properties
* **Description**: string
* **ExternalSourceSetting**: [ExternalSourceSetting](#externalsourcesetting)
* **Name**: string (Required)
* **ParentSlotTypeSignature**: string
* **SlotTypeValues**: [SlotTypeValue](#slottypevalue)[]
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
* **S3BucketName**: string (Required): The name of the S3 bucket that contains the grammar source.
* **S3ObjectKey**: string (Required): The path to the grammar in the S3 bucket.

## SlotTypeValue
### Properties
* **SampleValue**: [SampleValue](#samplevalue) (Required)
* **Synonyms**: [SampleValue](#samplevalue)[]

## SampleValue
### Properties
* **Value**: string (Required): The value that can be used for a slot type.

## SlotValueSelectionSetting
### Properties
* **AdvancedRecognitionSetting**: [AdvancedRecognitionSetting](#advancedrecognitionsetting)
* **RegexFilter**: [SlotValueRegexFilter](#slotvalueregexfilter)
* **ResolutionStrategy**: string (Required)

## AdvancedRecognitionSetting
### Properties
* **AudioRecognitionStrategy**: string

## SlotValueRegexFilter
### Properties
* **Pattern**: string (Required): Regex pattern

## VoiceSettings
### Properties
* **Engine**: string: Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more information, see the engine parameter of the SynthesizeSpeech operation in the Amazon Polly developer guide.
* **VoiceId**: string (Required): The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Bot_DataPrivacy
### Properties
* **ChildDirected**: bool (Required)

## TestBotAliasSettings
### Properties
* **BotAliasLocaleSettings**: [BotAliasLocaleSettingsItem](#botaliaslocalesettingsitem)[]
* **ConversationLogSettings**: [ConversationLogSettings](#conversationlogsettings)
* **Description**: string
* **SentimentAnalysisSettings**: [Bot_SentimentAnalysisSettings](#botsentimentanalysissettings): Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

## BotAliasLocaleSettingsItem
### Properties
* **BotAliasLocaleSetting**: [BotAliasLocaleSettings](#botaliaslocalesettings) (Required)
* **LocaleId**: string (Required): A string used to identify the locale

## BotAliasLocaleSettings
### Properties
* **CodeHookSpecification**: [CodeHookSpecification](#codehookspecification)
* **Enabled**: bool (Required): Whether the Lambda code hook is enabled

## CodeHookSpecification
### Properties
* **LambdaCodeHook**: [LambdaCodeHook](#lambdacodehook) (Required)

## LambdaCodeHook
### Properties
* **CodeHookInterfaceVersion**: string (Required): The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
* **LambdaArn**: string (Required): The Amazon Resource Name (ARN) of the Lambda function.

## ConversationLogSettings
### Properties
* **AudioLogSettings**: [AudioLogSetting](#audiologsetting)[]
* **TextLogSettings**: [TextLogSetting](#textlogsetting)[]

## AudioLogSetting
### Properties
* **Destination**: [AudioLogDestination](#audiologdestination) (Required)
* **Enabled**: bool (Required)

## AudioLogDestination
### Properties
* **S3Bucket**: [S3BucketLogDestination](#s3bucketlogdestination) (Required)

## S3BucketLogDestination
### Properties
* **KmsKeyArn**: string: The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
* **LogPrefix**: string (Required): The Amazon S3 key of the deployment package.
* **S3BucketArn**: string (Required): The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

## TextLogSetting
### Properties
* **Destination**: [TextLogDestination](#textlogdestination) (Required)
* **Enabled**: bool (Required)

## TextLogDestination
### Properties
* **CloudWatch**: [CloudWatchLogGroupLogDestination](#cloudwatchloggrouplogdestination) (Required)

## CloudWatchLogGroupLogDestination
### Properties
* **CloudWatchLogGroupArn**: string (Required): A string used to identify the groupArn for the Cloudwatch Log Group
* **LogPrefix**: string (Required): A string containing the value for the Log Prefix

## Bot_SentimentAnalysisSettings
### Properties
* **DetectSentiment**: bool (Required): Enable to call Amazon Comprehend for Sentiment natively within Lex

## AWS.Lex/BotAliasProperties
### Properties
* **Arn**: string (ReadOnly)
* **BotAliasId**: string (ReadOnly, Identifier)
* **BotAliasLocaleSettings**: [BotAliasLocaleSettingsItem](#botaliaslocalesettingsitem)[]
* **BotAliasName**: string (Required)
* **BotAliasStatus**: string (ReadOnly)
* **BotAliasTags**: [Tag](#tag)[] (WriteOnly): A list of tags to add to the bot alias.
* **BotId**: string (Required, Identifier)
* **BotVersion**: string
* **ConversationLogSettings**: [ConversationLogSettings](#conversationlogsettings)
* **Description**: string
* **SentimentAnalysisSettings**: [BotAlias_SentimentAnalysisSettings](#botaliassentimentanalysissettings): Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of user utterances.

## BotAliasLocaleSettingsItem
### Properties
* **BotAliasLocaleSetting**: [BotAliasLocaleSettings](#botaliaslocalesettings) (Required)
* **LocaleId**: string (Required): A string used to identify the locale

## BotAliasLocaleSettings
### Properties
* **CodeHookSpecification**: [CodeHookSpecification](#codehookspecification)
* **Enabled**: bool (Required): Whether the Lambda code hook is enabled

## CodeHookSpecification
### Properties
* **LambdaCodeHook**: [LambdaCodeHook](#lambdacodehook) (Required)

## LambdaCodeHook
### Properties
* **CodeHookInterfaceVersion**: string (Required): The version of the request-response that you want Amazon Lex to use to invoke your Lambda function.
* **LambdaArn**: string (Required): The Amazon Resource Name (ARN) of the Lambda function.

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## ConversationLogSettings
### Properties
* **AudioLogSettings**: [AudioLogSetting](#audiologsetting)[]
* **TextLogSettings**: [TextLogSetting](#textlogsetting)[]

## AudioLogSetting
### Properties
* **Destination**: [AudioLogDestination](#audiologdestination) (Required)
* **Enabled**: bool (Required)

## AudioLogDestination
### Properties
* **S3Bucket**: [S3BucketLogDestination](#s3bucketlogdestination) (Required)

## S3BucketLogDestination
### Properties
* **KmsKeyArn**: string: The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key for encrypting audio log files stored in an S3 bucket.
* **LogPrefix**: string (Required): The Amazon S3 key of the deployment package.
* **S3BucketArn**: string (Required): The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio log files are stored.

## TextLogSetting
### Properties
* **Destination**: [TextLogDestination](#textlogdestination) (Required)
* **Enabled**: bool (Required)

## TextLogDestination
### Properties
* **CloudWatch**: [CloudWatchLogGroupLogDestination](#cloudwatchloggrouplogdestination) (Required)

## CloudWatchLogGroupLogDestination
### Properties
* **CloudWatchLogGroupArn**: string (Required): A string used to identify the groupArn for the Cloudwatch Log Group
* **LogPrefix**: string (Required): A string containing the value for the Log Prefix

## BotAlias_SentimentAnalysisSettings
### Properties
* **DetectSentiment**: bool (Required): Enable to call Amazon Comprehend for Sentiment natively within Lex

## AWS.Lex/ResourcePolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **Policy**: [Policy](#policy) (Required)
* **ResourceArn**: string (Required)
* **RevisionId**: string (ReadOnly)

## Policy
### Properties

