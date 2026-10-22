# AWS.Transcribe @ default

## Resource AWS.Transcribe/CallAnalyticsCategory@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/CallAnalyticsCategoryProperties](#awstranscribecallanalyticscategoryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/MedicalVocabulary@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/MedicalVocabularyProperties](#awstranscribemedicalvocabularyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/Vocabulary@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/VocabularyProperties](#awstranscribevocabularyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/VocabularyFilter@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/VocabularyFilterProperties](#awstranscribevocabularyfilterproperties) (Required, Identifier): properties of the resource

## AbsoluteTimeRange
### Properties
* **EndTime**: int
* **First**: int
* **Last**: int
* **StartTime**: int

## AWS.Transcribe/CallAnalyticsCategoryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Call Analytics category.
* **CategoryName**: string (Required): A unique name, chosen by you, for your Call Analytics category.
* **CreateTime**: string (ReadOnly): The date and time the Call Analytics category was created.
* **InputType**: string: The input type associated with the specified category.
* **LastUpdateTime**: string (ReadOnly): The date and time the Call Analytics category was last updated.
* **Rules**: [Rule](#rule)[] (Required): Rules define a Call Analytics category.
* **Tags**: [Tag](#tag)[]: Tags associated with the Call Analytics category.

## AWS.Transcribe/MedicalVocabularyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the medical vocabulary.
* **LanguageCode**: string (Required): The language code of the vocabulary entries.
* **Tags**: [Tag](#tag)[]: Tags associated with the medical vocabulary.
* **VocabularyFileUri**: string (WriteOnly): The Amazon S3 location of the text file that contains the medical vocabulary.
* **VocabularyName**: string (Required): The name of the medical vocabulary.

## AWS.Transcribe/VocabularyFilterProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the vocabulary filter.
* **DataAccessRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input files.
* **LanguageCode**: string (Required): The language code that represents the language of the entries in your vocabulary filter.
* **Tags**: [Tag](#tag)[]: Tags associated with the vocabulary filter.
* **VocabularyFilterFileUri**: string (WriteOnly): The Amazon S3 location of the text file that contains your custom vocabulary filter terms.
* **VocabularyFilterName**: string (Required): A unique name, chosen by you, for your custom vocabulary filter.
* **Words**: string[] (WriteOnly): Use this parameter if you want to create your custom vocabulary filter by including all desired terms, as comma-separated values, within your request.

## AWS.Transcribe/VocabularyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the custom vocabulary.
* **DataAccessRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of an IAM role that has permissions to access the Amazon S3 bucket that contains your input file.
* **LanguageCode**: string (Required): The language code that represents the language of the entries in your custom vocabulary. Each custom vocabulary must contain terms in only one language.
* **LastModifiedTime**: string (ReadOnly): The date and time the specified custom vocabulary was last modified.
* **Phrases**: string[] (WriteOnly): Use this parameter if you want to create your custom vocabulary by including all desired terms, as comma-separated values, within your request. You cannot use this parameter together with VocabularyFileUri.
* **Tags**: [Tag](#tag)[]: Adds one or more custom tags, each in the form of a key:value pair, to the custom vocabulary.
* **VocabularyFileUri**: string (WriteOnly): The Amazon S3 location of the text file that contains your custom vocabulary. You cannot use this parameter together with Phrases.
* **VocabularyName**: string (Required): A unique name, chosen by you, for your custom vocabulary. This name is case sensitive, cannot contain spaces, and must be unique within an AWS account.
* **VocabularyState**: string (ReadOnly): The processing state of your custom vocabulary. If the state is READY, you can use the custom vocabulary in a StartTranscriptionJob request.

## InterruptionFilter
### Properties
* **AbsoluteTimeRange**: [AbsoluteTimeRange](#absolutetimerange)
* **Negate**: bool
* **ParticipantRole**: string
* **RelativeTimeRange**: [RelativeTimeRange](#relativetimerange)
* **Threshold**: int

## NonTalkTimeFilter
### Properties
* **AbsoluteTimeRange**: [AbsoluteTimeRange](#absolutetimerange)
* **Negate**: bool
* **RelativeTimeRange**: [RelativeTimeRange](#relativetimerange)
* **Threshold**: int

## RelativeTimeRange
### Properties
* **EndPercentage**: int
* **First**: int
* **Last**: int
* **StartPercentage**: int

## Rule
### Properties
* **InterruptionFilter**: [InterruptionFilter](#interruptionfilter)
* **NonTalkTimeFilter**: [NonTalkTimeFilter](#nontalktimefilter)
* **SentimentFilter**: [SentimentFilter](#sentimentfilter)
* **TranscriptFilter**: [TranscriptFilter](#transcriptfilter)

## SentimentFilter
### Properties
* **AbsoluteTimeRange**: [AbsoluteTimeRange](#absolutetimerange)
* **Negate**: bool
* **ParticipantRole**: string
* **RelativeTimeRange**: [RelativeTimeRange](#relativetimerange)
* **Sentiments**: string[] (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## TranscriptFilter
### Properties
* **AbsoluteTimeRange**: [AbsoluteTimeRange](#absolutetimerange)
* **Negate**: bool
* **ParticipantRole**: string
* **RelativeTimeRange**: [RelativeTimeRange](#relativetimerange)
* **Targets**: string[] (Required)
* **TranscriptFilterType**: string (Required)

