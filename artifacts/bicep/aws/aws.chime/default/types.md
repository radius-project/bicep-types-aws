# AWS.Chime @ default

## Resource AWS.Chime/MediaInsightsPipelineConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaInsightsPipelineConfigurationProperties](#awschimemediainsightspipelineconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaPipelineKinesisVideoStreamPool@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaPipelineKinesisVideoStreamPoolProperties](#awschimemediapipelinekinesisvideostreampoolproperties) (Required, Identifier): properties of the resource

## AmazonTranscribeCallAnalyticsProcessorConfiguration
### Properties
* **CallAnalyticsStreamCategories**: string[]: The categories to send to the insights target.
* **ContentIdentificationType**: string: Labels all PII identified in the transcript.
* **ContentRedactionType**: string: Redacts all PII identified in the transcript.
* **EnablePartialResultsStabilization**: bool: Enables partial result stabilization.
* **FilterPartialResults**: bool: If true, partial results are filtered out.
* **LanguageCode**: string (Required): The language code in the configuration.
* **LanguageModelName**: string: The name of the custom language model.
* **PartialResultsStability**: string: The level of stability for partial results.
* **PiiEntityTypes**: string: The types of PII to redact.
* **PostCallAnalyticsSettings**: [PostCallAnalyticsSettings](#postcallanalyticssettings)
* **VocabularyFilterMethod**: string: The vocabulary filtering method.
* **VocabularyFilterName**: string: The name of the custom vocabulary filter.
* **VocabularyName**: string: The name of the custom vocabulary.

## AmazonTranscribeProcessorConfiguration
### Properties
* **ContentIdentificationType**: string: Labels all PII identified in the transcript.
* **ContentRedactionType**: string: Redacts all PII identified in the transcript.
* **EnablePartialResultsStabilization**: bool: Enables partial result stabilization.
* **FilterPartialResults**: bool: If true, partial results are filtered out.
* **IdentifyLanguage**: bool: Turns language identification on or off.
* **IdentifyMultipleLanguages**: bool: Turns multiple language identification on or off.
* **LanguageCode**: string: The language code.
* **LanguageModelName**: string: The name of the custom language model.
* **LanguageOptions**: string: The language options for transcription.
* **PartialResultsStability**: string: The level of stability for partial results.
* **PiiEntityTypes**: string: The types of PII to redact.
* **PreferredLanguage**: string: The preferred language for transcription.
* **ShowSpeakerLabel**: bool: Enables speaker partitioning.
* **VocabularyFilterMethod**: string: The vocabulary filtering method.
* **VocabularyFilterName**: string: The name of the custom vocabulary filter.
* **VocabularyFilterNames**: string: The names of the custom vocabulary filters.
* **VocabularyName**: string: The name of the custom vocabulary.
* **VocabularyNames**: string: The names of the custom vocabularies.

## AWS.Chime/MediaInsightsPipelineConfigurationProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time at which the configuration was created.
* **Elements**: [MediaInsightsPipelineConfigurationElement](#mediainsightspipelineconfigurationelement)[] (Required): The elements in the configuration.
* **MediaInsightsPipelineConfigurationArn**: string (ReadOnly, Identifier): The ARN of the configuration.
* **MediaInsightsPipelineConfigurationId**: string (ReadOnly): The unique identifier of the configuration.
* **MediaInsightsPipelineConfigurationName**: string (Required): The name of the media insights pipeline configuration.
* **RealTimeAlertConfiguration**: [RealTimeAlertConfiguration](#realtimealertconfiguration)
* **ResourceAccessRoleArn**: string (Required): The ARN of the role used by the service to access Amazon Web Services resources.
* **Tags**: [Tag](#tag)[]: The tags associated with the configuration.
* **UpdatedTimestamp**: string (ReadOnly): The time at which the configuration was last updated.

## AWS.Chime/MediaPipelineKinesisVideoStreamPoolProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the Kinesis Video Stream Pool.
* **CreatedTimestamp**: string (ReadOnly): The time at which the Kinesis Video Stream Pool was created.
* **PoolId**: string (ReadOnly): The unique identifier of the Kinesis Video Stream Pool.
* **PoolName**: string (Required): The name of the Kinesis Video Stream Pool.
* **PoolStatus**: string (ReadOnly): The status of the Kinesis Video Stream Pool.
* **StreamConfiguration**: [MediaPipelineKinesisVideoStreamPool_StreamConfiguration](#mediapipelinekinesisvideostreampoolstreamconfiguration) (Required): The configuration settings for the Kinesis video stream.
* **Tags**: [MediaPipelineKinesisVideoStreamPool_Tags](#mediapipelinekinesisvideostreampooltags)[]: The tags associated with the Kinesis Video Stream Pool.
* **UpdatedTimestamp**: string (ReadOnly): The time at which the Kinesis Video Stream Pool was last updated.

## IssueDetectionConfiguration
### Properties
* **RuleName**: string (Required): The name of the issue detection rule.

## KeywordMatchConfiguration
### Properties
* **Keywords**: string[] (Required): The keywords or phrases to match.
* **Negate**: bool: Matches keywords on their presence or absence.
* **RuleName**: string (Required): The name of the keyword match rule.

## KinesisDataStreamSinkConfiguration
### Properties
* **InsightsTarget**: string: The ARN of the Kinesis Data Stream sink.

## MediaInsightsPipelineConfigurationElement
### Properties
* **AmazonTranscribeCallAnalyticsProcessorConfiguration**: [AmazonTranscribeCallAnalyticsProcessorConfiguration](#amazontranscribecallanalyticsprocessorconfiguration)
* **AmazonTranscribeProcessorConfiguration**: [AmazonTranscribeProcessorConfiguration](#amazontranscribeprocessorconfiguration)
* **KinesisDataStreamSinkConfiguration**: [KinesisDataStreamSinkConfiguration](#kinesisdatastreamsinkconfiguration)
* **S3RecordingSinkConfiguration**: [S3RecordingSinkConfiguration](#s3recordingsinkconfiguration)
* **Type**: string (Required): The element type.

## MediaPipelineKinesisVideoStreamPool_StreamConfiguration
### Properties
* **DataRetentionInHours**: int: The amount of time that data is retained, in hours.
* **Region**: string (Required): The AWS Region of the video stream.

## MediaPipelineKinesisVideoStreamPool_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## PostCallAnalyticsSettings
### Properties
* **ContentRedactionOutput**: string: The content redaction output settings.
* **DataAccessRoleArn**: string (Required): The ARN of the role used by Transcribe to upload post-call analysis.
* **OutputEncryptionKMSKeyId**: string: The ID of the KMS key used to encrypt the output.
* **OutputLocation**: string (Required): The URL of the Amazon S3 bucket for post-call data.

## RealTimeAlertConfiguration
### Properties
* **Disabled**: bool: Turns off real-time alerts.
* **Rules**: [RealTimeAlertRule](#realtimealertrule)[]: The rules in the alert.

## RealTimeAlertRule
### Properties
* **IssueDetectionConfiguration**: [IssueDetectionConfiguration](#issuedetectionconfiguration)
* **KeywordMatchConfiguration**: [KeywordMatchConfiguration](#keywordmatchconfiguration)
* **SentimentConfiguration**: [SentimentConfiguration](#sentimentconfiguration)
* **Type**: string (Required): The type of alert rule.

## S3RecordingSinkConfiguration
### Properties
* **Destination**: string: The default URI of the Amazon S3 bucket.
* **RecordingFileFormat**: string: The recording file format.

## SentimentConfiguration
### Properties
* **RuleName**: string (Required): The name of the sentiment rule.
* **SentimentType**: string (Required): The type of sentiment.
* **TimePeriod**: int (Required): The analysis interval in seconds.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

