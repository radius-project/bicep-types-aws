# AWS.Transcribe @ default

## Resource AWS.Transcribe/CallAnalyticsCategory@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/CallAnalyticsCategoryProperties](#awstranscribecallanalyticscategoryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/CallAnalyticsJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/CallAnalyticsJobProperties](#awstranscribecallanalyticsjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/LanguageModel@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/LanguageModelProperties](#awstranscribelanguagemodelproperties) (Identifier): properties of the resource

## Resource AWS.Transcribe/MedicalTranscriptionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/MedicalTranscriptionJobProperties](#awstranscribemedicaltranscriptionjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/MedicalVocabulary@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/MedicalVocabularyProperties](#awstranscribemedicalvocabularyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Transcribe/TranscriptionJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Transcribe/TranscriptionJobProperties](#awstranscribetranscriptionjobproperties) (Required, Identifier): properties of the resource

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

## AWS.Transcribe/CallAnalyticsJobProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the Call Analytics job
* **CallAnalyticsJobName**: string (Required): A unique name for the Call Analytics job
* **CallAnalyticsJobStatus**: string (ReadOnly): The status of the Call Analytics job
* **ChannelDefinitions**: [ChannelDefinition](#channeldefinition)[]: Channel definitions for the Call Analytics job
* **CreationTime**: string (ReadOnly): The date and time the Call Analytics job was created
* **DataAccessRoleArn**: string: The ARN of an IAM role with permissions to access the S3 bucket containing input files
* **LanguageCode**: string (ReadOnly): The language code used for the Call Analytics job
* **Media**: [Media](#media) (Required): Describes the Amazon S3 location of the media file
* **MediaFormat**: string (ReadOnly): The format of the input media file
* **MediaSampleRateHertz**: int (ReadOnly): The sample rate of the audio in hertz
* **Tags**: [Tag](#tag)[]: Tags associated with the Call Analytics job
* **Transcript**: [Transcript](#transcript) (ReadOnly): Provides the Amazon S3 URI for the transcript

## AWS.Transcribe/LanguageModelProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the custom language model.
* **BaseModelName**: string: The Amazon Transcribe standard language model, or base model, used to create your custom language model.
* **CreateTime**: string (ReadOnly): The date and time the custom language model was created.
* **InputDataConfig**: [InputDataConfig](#inputdataconfig)
* **LanguageCode**: string: The language code that represents the language of your model.
* **LastModifiedTime**: string (ReadOnly): The date and time the custom language model was last modified.
* **ModelName**: string: The name of the custom language model.
* **ModelStatus**: string (ReadOnly): The status of the custom language model.
* **Tags**: [Tag](#tag)[]: Tags associated with the custom language model.
* **UpgradeAvailability**: bool (ReadOnly): Shows whether a more current base model is available for use with the specified custom language model.

## AWS.Transcribe/MedicalTranscriptionJobProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the medical transcription job
* **CreationTime**: string (ReadOnly): The date and time the medical transcription job was created
* **LanguageCode**: string (Required): The language code for the language spoken in the input media file. Must be en-US.
* **Media**: [Media](#media) (Required): Describes the Amazon S3 location of the media file
* **MediaFormat**: string: The format of the input media file
* **MediaSampleRateHertz**: int: The sample rate of the audio in hertz
* **MedicalTranscriptionJobName**: string (Required): A unique name for the medical transcription job
* **Settings**: [MedicalTranscriptionSetting](#medicaltranscriptionsetting): Settings for the medical transcription job
* **Specialty**: string (Required): The medical specialty represented in the media
* **Tags**: [Tag](#tag)[]: Tags associated with the medical transcription job
* **Transcript**: [MedicalTranscript](#medicaltranscript) (ReadOnly): Provides the Amazon S3 URI for the transcript
* **TranscriptionJobStatus**: string (ReadOnly): The status of the medical transcription job
* **Type**: string (Required): Whether the input media is a dictation or conversation

## AWS.Transcribe/MedicalVocabularyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the medical vocabulary.
* **LanguageCode**: string (Required): The language code of the vocabulary entries.
* **Tags**: [Tag](#tag)[]: Tags associated with the medical vocabulary.
* **VocabularyFileUri**: string (WriteOnly): The Amazon S3 location of the text file that contains the medical vocabulary.
* **VocabularyName**: string (Required): The name of the medical vocabulary.

## AWS.Transcribe/TranscriptionJobProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the transcription job
* **ContentRedaction**: [ContentRedaction](#contentredaction): Content redaction settings
* **CreationTime**: string (ReadOnly): The date and time the transcription job was created
* **LanguageCode**: string: The language code for the language spoken in the input media file
* **Media**: [Media](#media) (Required): Describes the Amazon S3 location of the media file
* **MediaFormat**: string: The format of the input media file
* **MediaSampleRateHertz**: int: The sample rate, in hertz, of the audio track in the input media file
* **Settings**: [Settings](#settings): Additional settings for the transcription job
* **Subtitles**: [Subtitles](#subtitles): Subtitle generation settings
* **Tags**: [Tag](#tag)[]: Tags associated with the transcription job
* **ToxicityDetection**: [ToxicityDetectionSettings](#toxicitydetectionsettings)[]: Toxicity detection settings
* **Transcript**: [Transcript](#transcript) (ReadOnly): The transcript output location
* **TranscriptionJobName**: string (Required): A unique name for the transcription job
* **TranscriptionJobStatus**: string (ReadOnly): The status of the transcription job

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

## ChannelDefinition
### Properties
* **ChannelId**: int: The audio channel ID
* **ParticipantRole**: string: The speaker role

## ContentRedaction
### Properties
* **PiiEntityTypes**: string[]
* **RedactionOutput**: string (Required)
* **RedactionType**: string (Required)

## InputDataConfig
### Properties
* **DataAccessRoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that has permissions to access the Amazon S3 bucket that contains your input files.
* **S3Uri**: string (Required): The Amazon S3 location (URI) of the text files used to train your custom language model.
* **TuningDataS3Uri**: string: The Amazon S3 location (URI) of the text files used to tune your custom language model.

## InterruptionFilter
### Properties
* **AbsoluteTimeRange**: [AbsoluteTimeRange](#absolutetimerange)
* **Negate**: bool
* **ParticipantRole**: string
* **RelativeTimeRange**: [RelativeTimeRange](#relativetimerange)
* **Threshold**: int

## Media
### Properties
* **MediaFileUri**: string: The Amazon S3 location of the media file

## Media
### Properties
* **MediaFileUri**: string: The Amazon S3 location of the media file

## Media
### Properties
* **MediaFileUri**: string: The Amazon S3 location of the media file

## MedicalTranscript
### Properties
* **TranscriptFileUri**: string: The Amazon S3 location of the transcript

## MedicalTranscriptionSetting
### Properties
* **ChannelIdentification**: bool: Enables channel identification in multi-channel audio
* **ShowAlternatives**: bool: Include alternative transcriptions

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

## Settings
### Properties
* **ChannelIdentification**: bool
* **MaxAlternatives**: int
* **MaxSpeakerLabels**: int
* **ShowAlternatives**: bool
* **ShowSpeakerLabels**: bool

## Subtitles
### Properties
* **Formats**: string[]

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
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

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

## ToxicityDetectionSettings
### Properties
* **ToxicityCategories**: string[] (Required)

## Transcript
### Properties
* **TranscriptFileUri**: string: The Amazon S3 location of the transcript

## Transcript
### Properties
* **RedactedTranscriptFileUri**: string
* **TranscriptFileUri**: string

## TranscriptFilter
### Properties
* **AbsoluteTimeRange**: [AbsoluteTimeRange](#absolutetimerange)
* **Negate**: bool
* **ParticipantRole**: string
* **RelativeTimeRange**: [RelativeTimeRange](#relativetimerange)
* **Targets**: string[] (Required)
* **TranscriptFilterType**: string (Required)

