# AWS.Chime @ default

## Resource AWS.Chime/MediaCapturePipeline@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaCapturePipelineProperties](#awschimemediacapturepipelineproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaConcatenationPipeline@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaConcatenationPipelineProperties](#awschimemediaconcatenationpipelineproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaInsightsPipeline@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaInsightsPipelineProperties](#awschimemediainsightspipelineproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaInsightsPipelineConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaInsightsPipelineConfigurationProperties](#awschimemediainsightspipelineconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaLiveConnectorPipeline@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaLiveConnectorPipelineProperties](#awschimemedialiveconnectorpipelineproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaPipelineKinesisVideoStreamPool@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaPipelineKinesisVideoStreamPoolProperties](#awschimemediapipelinekinesisvideostreampoolproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chime/MediaStreamPipeline@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chime/MediaStreamPipelineProperties](#awschimemediastreampipelineproperties) (Required, Identifier): properties of the resource

## ActiveSpeakerOnlyConfiguration
### Properties
* **ActiveSpeakerPosition**: string: The position of the ActiveSpeakerOnly video tile.

## ActiveSpeakerOnlyConfiguration
### Properties
* **ActiveSpeakerPosition**: string: The position of the ActiveSpeakerOnly video tile.

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

## ArtifactsConcatenationConfiguration
### Properties
* **Audio**: [AudioConcatenationConfiguration](#audioconcatenationconfiguration) (Required)
* **CompositedVideo**: [CompositedVideoConcatenationConfiguration](#compositedvideoconcatenationconfiguration) (Required)
* **Content**: [ContentConcatenationConfiguration](#contentconcatenationconfiguration) (Required)
* **DataChannel**: [DataChannelConcatenationConfiguration](#datachannelconcatenationconfiguration) (Required)
* **MeetingEvents**: [MeetingEventsConcatenationConfiguration](#meetingeventsconcatenationconfiguration) (Required)
* **TranscriptionMessages**: [TranscriptionMessagesConcatenationConfiguration](#transcriptionmessagesconcatenationconfiguration) (Required)
* **Video**: [VideoConcatenationConfiguration](#videoconcatenationconfiguration) (Required)

## ArtifactsConfiguration
### Properties
* **Audio**: [AudioArtifactsConfiguration](#audioartifactsconfiguration) (Required)
* **CompositedVideo**: [CompositedVideoArtifactsConfiguration](#compositedvideoartifactsconfiguration)
* **Content**: [ContentArtifactsConfiguration](#contentartifactsconfiguration) (Required)
* **Video**: [VideoArtifactsConfiguration](#videoartifactsconfiguration) (Required)

## AudioArtifactsConfiguration
### Properties
* **MuxType**: string (Required): The MUX type of the audio artifact configuration object.

## AudioConcatenationConfiguration
### Properties
* **State**: string (Required): Enables the audio artifact concatenation configuration object.

## AWS.Chime/MediaCapturePipelineProperties
### Properties
* **ChimeSdkMeetingConfiguration**: [ChimeSdkMeetingConfiguration](#chimesdkmeetingconfiguration)
* **CreatedTimestamp**: string (ReadOnly): The time at which the pipeline was created, in ISO 8601 format.
* **MediaPipelineArn**: string (Identifier): The ARN of the media capture pipeline.
* **MediaPipelineId**: string (ReadOnly): The ID of the media pipeline.
* **SinkArn**: string (Required): The ARN of the sink type.
* **SinkIamRoleArn**: string: The Amazon Resource Name (ARN) of the sink role to be used with AwsKmsKeyId in SseAwsKeyManagementParams.
* **SinkType**: string (Required): Destination type to which the media artifacts are saved.
* **SourceArn**: string (ReadOnly): ARN of the source from which the media artifacts are captured.
* **SourceType**: string (Required): Source type from which the media artifacts are captured.
* **SseAwsKeyManagementParams**: [SseAwsKeyManagementParams](#sseawskeymanagementparams)
* **Status**: string (ReadOnly): The status of the media pipeline.
* **Tags**: [Tag](#tag)[]: The tag key-value pairs.
* **UpdatedTimestamp**: string (ReadOnly): The time at which the pipeline was updated, in ISO 8601 format.

## AWS.Chime/MediaConcatenationPipelineProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time at which the concatenation pipeline was created.
* **MediaPipelineArn**: string (Identifier): The ARN of the media concatenation pipeline.
* **MediaPipelineId**: string (ReadOnly): The ID of the media concatenation pipeline.
* **Sinks**: [ConcatenationSink](#concatenationsink)[] (Required): An object that specifies the data sinks for the media concatenation pipeline.
* **Sources**: [ConcatenationSource](#concatenationsource)[] (Required): An object that specifies the sources for the media concatenation pipeline.
* **Status**: string (ReadOnly): The status of the media concatenation pipeline.
* **Tags**: [Tag](#tag)[]: The tags associated with the media concatenation pipeline.
* **UpdatedTimestamp**: string (ReadOnly): The time at which the concatenation pipeline was last updated.

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

## AWS.Chime/MediaInsightsPipelineProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time at which the media insights pipeline was created.
* **KinesisVideoStreamRecordingSourceRuntimeConfiguration**: [KinesisVideoStreamRecordingSourceRuntimeConfiguration](#kinesisvideostreamrecordingsourceruntimeconfiguration)
* **KinesisVideoStreamSourceRuntimeConfiguration**: [KinesisVideoStreamSourceRuntimeConfiguration](#kinesisvideostreamsourceruntimeconfiguration)
* **MediaInsightsPipelineConfigurationArn**: string (Required): The ARN of the pipeline's configuration.
* **MediaInsightsRuntimeMetadata**: [MediaInsightsPipeline_MediaInsightsRuntimeMetadata](#mediainsightspipelinemediainsightsruntimemetadata): The runtime metadata for the media insights pipeline, as a key-value map of strings.
* **MediaPipelineArn**: string (Identifier): The ARN of the media insights pipeline.
* **MediaPipelineId**: string (ReadOnly): The ID of the media insights pipeline.
* **S3RecordingSinkRuntimeConfiguration**: [S3RecordingSinkRuntimeConfiguration](#s3recordingsinkruntimeconfiguration)
* **Status**: string (ReadOnly): The status of the media insights pipeline.
* **Tags**: [Tag](#tag)[]: The tags assigned to the media insights pipeline.

## AWS.Chime/MediaLiveConnectorPipelineProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time at which the connector pipeline was created.
* **MediaPipelineArn**: string (Identifier): The ARN of the media live connector pipeline.
* **MediaPipelineId**: string (ReadOnly): The ID of the media live connector pipeline.
* **Sinks**: [LiveConnectorSinkConfiguration](#liveconnectorsinkconfiguration)[] (Required): The media live connector pipeline's data sinks.
* **Sources**: [LiveConnectorSourceConfiguration](#liveconnectorsourceconfiguration)[] (Required): The media live connector pipeline's data sources.
* **Status**: string (ReadOnly): The status of the media live connector pipeline.
* **Tags**: [Tag](#tag)[]: The tags associated with the media live connector pipeline.
* **UpdatedTimestamp**: string (ReadOnly): The time at which the connector pipeline was last updated.

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

## AWS.Chime/MediaStreamPipelineProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time at which the media stream pipeline was created, in ISO 8601 format.
* **MediaPipelineArn**: string (Identifier): The ARN of the media stream pipeline.
* **MediaPipelineId**: string (ReadOnly): The ID of the media stream pipeline.
* **Sinks**: [MediaStreamSink](#mediastreamsink)[] (Required): The media stream pipeline's data sinks.
* **Sources**: [MediaStreamSource](#mediastreamsource)[] (Required): The media stream pipeline's data sources.
* **Status**: string (ReadOnly): The status of the media stream pipeline.
* **Tags**: [Tag](#tag)[]: The tag key-value pairs.
* **UpdatedTimestamp**: string (ReadOnly): The time at which the media stream pipeline was updated, in ISO 8601 format.

## ChannelDefinition
### Properties
* **ChannelId**: int (Required): The channel ID.
* **ParticipantRole**: string: Specifies whether the audio in a channel belongs to the AGENT or CUSTOMER.

## ChimeSdkMeetingConcatenationConfiguration
### Properties
* **ArtifactsConfiguration**: [ArtifactsConcatenationConfiguration](#artifactsconcatenationconfiguration) (Required)

## ChimeSdkMeetingConfiguration
### Properties
* **ArtifactsConfiguration**: [ArtifactsConfiguration](#artifactsconfiguration)
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration)

## ChimeSdkMeetingLiveConnectorConfiguration
### Properties
* **Arn**: string (ReadOnly): The configuration object's Chime SDK meeting ARN.
* **CompositedVideo**: [CompositedVideoArtifactsConfiguration](#compositedvideoartifactsconfiguration)
* **MuxType**: string (Required): The configuration object's multiplex type.
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration)

## CompositedVideoArtifactsConfiguration
### Properties
* **GridViewConfiguration**: [GridViewConfiguration](#gridviewconfiguration) (Required)
* **Layout**: string: The layout setting.
* **Resolution**: string: The video resolution setting.

## CompositedVideoArtifactsConfiguration
### Properties
* **GridViewConfiguration**: [GridViewConfiguration](#gridviewconfiguration) (Required)
* **Layout**: string: The layout setting.
* **Resolution**: string: The video resolution setting.

## CompositedVideoConcatenationConfiguration
### Properties
* **State**: string (Required): Enables or disables the configuration object.

## ConcatenationSink
### Properties
* **S3BucketSinkConfiguration**: [S3BucketSinkConfiguration](#s3bucketsinkconfiguration) (Required)
* **Type**: string (Required): The type of data sink in the configuration object.

## ConcatenationSource
### Properties
* **MediaCapturePipelineSourceConfiguration**: [MediaCapturePipelineSourceConfiguration](#mediacapturepipelinesourceconfiguration) (Required)
* **Type**: string (Required): The type of concatenation source in a configuration object.

## ContentArtifactsConfiguration
### Properties
* **MuxType**: string: The MUX type of the artifact configuration.
* **State**: string (Required): Indicates whether the content artifact is enabled or disabled.

## ContentConcatenationConfiguration
### Properties
* **State**: string (Required): Enables or disables the configuration object.

## DataChannelConcatenationConfiguration
### Properties
* **State**: string (Required): Enables or disables the configuration object.

## FragmentSelector
### Properties
* **FragmentSelectorType**: string (Required): The origin of the timestamps to use.
* **TimestampRange**: [TimestampRange](#timestamprange) (Required)

## GridViewConfiguration
### Properties
* **ActiveSpeakerOnlyConfiguration**: [ActiveSpeakerOnlyConfiguration](#activespeakeronlyconfiguration)
* **CanvasOrientation**: string: The orientation setting, horizontal or vertical.
* **ContentShareLayout**: string (Required): Defines the layout of the video tiles when content sharing is enabled.
* **HorizontalLayoutConfiguration**: [HorizontalLayoutConfiguration](#horizontallayoutconfiguration)
* **PresenterOnlyConfiguration**: [PresenterOnlyConfiguration](#presenteronlyconfiguration)
* **VerticalLayoutConfiguration**: [VerticalLayoutConfiguration](#verticallayoutconfiguration)
* **VideoAttribute**: [VideoAttribute](#videoattribute)

## GridViewConfiguration
### Properties
* **ActiveSpeakerOnlyConfiguration**: [ActiveSpeakerOnlyConfiguration](#activespeakeronlyconfiguration)
* **CanvasOrientation**: string: The orientation setting, horizontal or vertical.
* **ContentShareLayout**: string (Required): Defines the layout of the video tiles when content sharing is enabled.
* **HorizontalLayoutConfiguration**: [HorizontalLayoutConfiguration](#horizontallayoutconfiguration)
* **PresenterOnlyConfiguration**: [PresenterOnlyConfiguration](#presenteronlyconfiguration)
* **VerticalLayoutConfiguration**: [VerticalLayoutConfiguration](#verticallayoutconfiguration)
* **VideoAttribute**: [VideoAttribute](#videoattribute)

## HorizontalLayoutConfiguration
### Properties
* **TileAspectRatio**: string: Specifies the aspect ratio of all video tiles.
* **TileCount**: int: The maximum number of video tiles to display.
* **TileOrder**: string: Sets the automatic ordering of the video tiles.
* **TilePosition**: string: Sets the position of horizontal tiles.

## HorizontalLayoutConfiguration
### Properties
* **TileAspectRatio**: string: Specifies the aspect ratio of all video tiles.
* **TileCount**: int: The maximum number of video tiles to display.
* **TileOrder**: string: Sets the automatic ordering of the video tiles.
* **TilePosition**: string: Sets the position of horizontal tiles.

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

## KinesisVideoStreamRecordingSourceRuntimeConfiguration
### Properties
* **FragmentSelector**: [FragmentSelector](#fragmentselector) (Required)
* **Streams**: [RecordingStreamConfiguration](#recordingstreamconfiguration)[] (Required): The stream or streams to be recorded.

## KinesisVideoStreamSourceRuntimeConfiguration
### Properties
* **MediaEncoding**: string (Required): The encoding of the input audio.
* **MediaSampleRate**: int (Required): The sample rate of the input audio, in hertz.
* **Streams**: [StreamConfiguration](#streamconfiguration)[] (Required): The streams in the source runtime configuration of a Kinesis video stream.

## LiveConnectorRTMPConfiguration
### Properties
* **AudioChannels**: string: The audio channels set for the RTMP configuration.
* **AudioSampleRate**: string: The audio sample rate set for the RTMP configuration.
* **Url**: string (Required): The URL of the RTMP configuration.

## LiveConnectorSinkConfiguration
### Properties
* **RTMPConfiguration**: [LiveConnectorRTMPConfiguration](#liveconnectorrtmpconfiguration) (Required)
* **SinkType**: string (Required): The sink configuration's sink type.

## LiveConnectorSourceConfiguration
### Properties
* **ChimeSdkMeetingLiveConnectorConfiguration**: [ChimeSdkMeetingLiveConnectorConfiguration](#chimesdkmeetingliveconnectorconfiguration) (Required)
* **SourceType**: string (Required): The source configuration's media source type.

## MediaCapturePipelineSourceConfiguration
### Properties
* **ChimeSdkMeetingConfiguration**: [ChimeSdkMeetingConcatenationConfiguration](#chimesdkmeetingconcatenationconfiguration) (Required)
* **MediaPipelineArn**: string (Required, Identifier): The media pipeline ARN in the configuration object of a media capture pipeline.

## MediaInsightsPipeline_MediaInsightsRuntimeMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

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

## MediaStreamSink
### Properties
* **MediaStreamType**: string (Required): The media stream sink's media stream type.
* **ReservedStreamCapacity**: int (Required): Specifies the number of streams that the sink can accept.
* **SinkArn**: string (Required): The ARN of the Kinesis Video Stream pool returned by the CreateMediaPipelineKinesisVideoStreamPool API.
* **SinkType**: string (Required): The media stream sink's type.

## MediaStreamSource
### Properties
* **SourceArn**: string (Required): The ARN of the meeting.
* **SourceType**: string (Required): The type of media stream source.

## MeetingEventsConcatenationConfiguration
### Properties
* **State**: string (Required): Enables or disables the configuration object.

## PostCallAnalyticsSettings
### Properties
* **ContentRedactionOutput**: string: The content redaction output settings.
* **DataAccessRoleArn**: string (Required): The ARN of the role used by Transcribe to upload post-call analysis.
* **OutputEncryptionKMSKeyId**: string: The ID of the KMS key used to encrypt the output.
* **OutputLocation**: string (Required): The URL of the Amazon S3 bucket for post-call data.

## PresenterOnlyConfiguration
### Properties
* **PresenterPosition**: string: Defines the position of the presenter video tile.

## PresenterOnlyConfiguration
### Properties
* **PresenterPosition**: string: Defines the position of the presenter video tile.

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

## RecordingStreamConfiguration
### Properties
* **StreamArn**: string: The ARN of the recording stream.

## S3BucketSinkConfiguration
### Properties
* **Destination**: string (Required): The destination URL of the S3 bucket.

## S3RecordingSinkConfiguration
### Properties
* **Destination**: string: The default URI of the Amazon S3 bucket.
* **RecordingFileFormat**: string: The recording file format.

## S3RecordingSinkRuntimeConfiguration
### Properties
* **Destination**: string (Required): The URI of the S3 bucket used as the sink.
* **RecordingFileFormat**: string (Required): The file format for the media files sent to the S3 bucket.

## SelectedVideoStreams
### Properties
* **AttendeeIds**: string[]: The attendee IDs of the streams selected for a media pipeline.
* **ExternalUserIds**: string[]: The external user IDs of the streams selected for a media pipeline.

## SelectedVideoStreams
### Properties
* **AttendeeIds**: string[]: The attendee IDs of the streams selected for a media pipeline.
* **ExternalUserIds**: string[]: The external user IDs of the streams selected for a media pipeline.

## SentimentConfiguration
### Properties
* **RuleName**: string (Required): The name of the sentiment rule.
* **SentimentType**: string (Required): The type of sentiment.
* **TimePeriod**: int (Required): The analysis interval in seconds.

## SourceConfiguration
### Properties
* **SelectedVideoStreams**: [SelectedVideoStreams](#selectedvideostreams)

## SourceConfiguration
### Properties
* **SelectedVideoStreams**: [SelectedVideoStreams](#selectedvideostreams)

## SseAwsKeyManagementParams
### Properties
* **AwsKmsEncryptionContext**: string: Base64-encoded string of a UTF-8 encoded JSON, which contains the encryption context.
* **AwsKmsKeyId**: string (Required): The KMS key you want to use to encrypt your media pipeline output.

## StreamChannelDefinition
### Properties
* **ChannelDefinitions**: [ChannelDefinition](#channeldefinition)[]: The definitions of the channels in a streaming channel.
* **NumberOfChannels**: int (Required): The number of channels in a streaming channel.

## StreamConfiguration
### Properties
* **FragmentNumber**: string: The unique identifier of the fragment to begin processing.
* **StreamArn**: string (Required): The ARN of the Kinesis video stream.
* **StreamChannelDefinition**: [StreamChannelDefinition](#streamchanneldefinition) (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key half of a tag.
* **Value**: string (Required): The value half of a tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key half of a tag.
* **Value**: string (Required): The value half of a tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TimestampRange
### Properties
* **EndTimestamp**: string (Required): The ending timestamp for the specified range.
* **StartTimestamp**: string (Required): The starting timestamp for the specified range.

## TranscriptionMessagesConcatenationConfiguration
### Properties
* **State**: string (Required): Enables or disables the configuration object.

## VerticalLayoutConfiguration
### Properties
* **TileAspectRatio**: string: Sets the aspect ratio of the video tiles.
* **TileCount**: int: The maximum number of tiles to display.
* **TileOrder**: string: Sets the automatic ordering of the video tiles.
* **TilePosition**: string: Sets the position of vertical tiles.

## VerticalLayoutConfiguration
### Properties
* **TileAspectRatio**: string: Sets the aspect ratio of the video tiles.
* **TileCount**: int: The maximum number of tiles to display.
* **TileOrder**: string: Sets the automatic ordering of the video tiles.
* **TilePosition**: string: Sets the position of vertical tiles.

## VideoArtifactsConfiguration
### Properties
* **MuxType**: string: The MUX type of the video artifact configuration object.
* **State**: string (Required): Indicates whether the video artifact is enabled or disabled.

## VideoAttribute
### Properties
* **BorderColor**: string: Defines the border color of all video tiles.
* **BorderThickness**: int: Defines the border thickness for all video tiles.
* **CornerRadius**: int: Sets the corner radius of all video tiles.
* **HighlightColor**: string: Defines the highlight color for the active video tile.

## VideoAttribute
### Properties
* **BorderColor**: string: Defines the border color of all video tiles.
* **BorderThickness**: int: Defines the border thickness for all video tiles.
* **CornerRadius**: int: Sets the corner radius of all video tiles.
* **HighlightColor**: string: Defines the highlight color for the active video tile.

## VideoConcatenationConfiguration
### Properties
* **State**: string (Required): Enables or disables the configuration object.

