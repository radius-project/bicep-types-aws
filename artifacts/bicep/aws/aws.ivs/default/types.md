# AWS.IVS @ default

## Resource AWS.IVS/AdConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/AdConfigurationProperties](#awsivsadconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.IVS/Channel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/ChannelProperties](#awsivschannelproperties) (Identifier): properties of the resource

## Resource AWS.IVS/EncoderConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/EncoderConfigurationProperties](#awsivsencoderconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.IVS/IngestConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/IngestConfigurationProperties](#awsivsingestconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.IVS/PlaybackKeyPair@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/PlaybackKeyPairProperties](#awsivsplaybackkeypairproperties) (Identifier): properties of the resource

## Resource AWS.IVS/PlaybackRestrictionPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/PlaybackRestrictionPolicyProperties](#awsivsplaybackrestrictionpolicyproperties) (Identifier): properties of the resource

## Resource AWS.IVS/PublicKey@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/PublicKeyProperties](#awsivspublickeyproperties) (Identifier): properties of the resource

## Resource AWS.IVS/RecordingConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/RecordingConfigurationProperties](#awsivsrecordingconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.IVS/Stage@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/StageProperties](#awsivsstageproperties) (Identifier): properties of the resource

## Resource AWS.IVS/StorageConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/StorageConfigurationProperties](#awsivsstorageconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.IVS/StreamKey@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/StreamKeyProperties](#awsivsstreamkeyproperties) (Required, Identifier): properties of the resource

## AutoParticipantRecordingConfiguration
### Properties
* **HlsConfiguration**: [HlsConfiguration](#hlsconfiguration)
* **MediaTypes**: string[]: Types of media to be recorded. Default: AUDIO_VIDEO.
* **RecordingReconnectWindowSeconds**: int: If a stage publisher disconnects and then reconnects within the specified interval, the multiple recordings will be considered a single recording and merged together. The default value is 0, which disables merging.
* **StorageConfigurationArn**: string (Required): ARN of the StorageConfiguration resource to use for individual participant recording.
* **ThumbnailConfiguration**: [ThumbnailConfiguration](#thumbnailconfiguration)

## AWS.IVS/AdConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Ad configuration ARN.
* **MediaTailorPlaybackConfigurations**: [MediaTailorPlaybackConfiguration](#mediatailorplaybackconfiguration)[] (Required): List of integration configurations with MediaTailor resources. The first item in the list is the default playback configuration used for the ad configuration.
* **Name**: string: Ad configuration name. The value does not need to be unique.
* **PostRollConfiguration**: [PostRollConfiguration](#postrollconfiguration)
* **Tags**: [Tag](#tag)[]: Tags attached to the resource.

## AWS.IVS/ChannelProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Channel ARN is automatically generated on creation and assigned as the unique identifier.
* **Authorized**: bool: Whether the channel is authorized.
* **ContainerFormat**: string: Indicates which content-packaging format is used (MPEG-TS or fMP4). If multitrackInputConfiguration is specified and enabled is true, then containerFormat is required and must be set to FRAGMENTED_MP4. Otherwise, containerFormat may be set to TS or FRAGMENTED_MP4. Default: TS.
* **IngestEndpoint**: string (ReadOnly): Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
* **InsecureIngest**: bool: Whether the channel allows insecure ingest.
* **LatencyMode**: string: Channel latency mode.
* **MultitrackInputConfiguration**: [MultitrackInputConfiguration](#multitrackinputconfiguration)
* **Name**: string: Channel
* **PlaybackUrl**: string (ReadOnly): Channel Playback URL.
* **Preset**: string: Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").
* **RecordingConfigurationArn**: string: Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **Type**: string: Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

## AWS.IVS/EncoderConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Encoder configuration identifier.
* **Name**: string: Encoder configuration name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Video**: [EncoderConfiguration_Video](#encoderconfigurationvideo): Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps

## AWS.IVS/IngestConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): IngestConfiguration ARN is automatically generated on creation and assigned as the unique identifier.
* **IngestProtocol**: string: Ingest Protocol.
* **InsecureIngest**: bool (WriteOnly): Whether ingest configuration allows insecure ingest.
* **Name**: string: IngestConfiguration
* **ParticipantId**: string (ReadOnly): Participant Id is automatically generated on creation and assigned.
* **StageArn**: string: Stage ARN. A value other than an empty string indicates that stage is linked to IngestConfiguration. Default: "" (recording is disabled).
* **State**: string (ReadOnly): State of IngestConfiguration which determines whether IngestConfiguration is in use or not.
* **StreamKey**: string (ReadOnly): Stream-key value.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **UserId**: string: User defined indentifier for participant associated with IngestConfiguration.

## AWS.IVS/PlaybackKeyPairProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Key-pair identifier.
* **Fingerprint**: string (ReadOnly): Key-pair identifier.
* **Name**: string: An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
* **PublicKeyMaterial**: string (WriteOnly): The public portion of a customer-generated key pair. This field is required to create the AWS::IVS::PlaybackKeyPair resource.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.

## AWS.IVS/PlaybackRestrictionPolicyProperties
### Properties
* **AllowedCountries**: string[]: A list of country codes that control geoblocking restriction. Allowed values are the officially assigned ISO 3166-1 alpha-2 codes. Default: All countries (an empty array).
* **AllowedOrigins**: string[]: A list of origin sites that control CORS restriction. Allowed values are the same as valid values of the Origin header defined at https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin
* **Arn**: string (ReadOnly, Identifier): Playback-restriction-policy identifier.
* **EnableStrictOriginEnforcement**: bool: Whether channel playback is constrained by origin site.
* **Name**: string: Playback-restriction-policy name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.IVS/PublicKeyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Key-pair identifier.
* **Fingerprint**: string (ReadOnly): Key-pair identifier.
* **Name**: string: Name of the public key to be imported. The value does not need to be unique.
* **PublicKeyMaterial**: string: The public portion of a customer-generated key pair. This field is required to create the AWS::IVS::PublicKey resource.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.

## AWS.IVS/RecordingConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.
* **DestinationConfiguration**: [DestinationConfiguration](#destinationconfiguration) (Required)
* **Name**: string: Recording Configuration Name.
* **RecordingReconnectWindowSeconds**: int: Recording Reconnect Window Seconds. (0 means disabled)
* **RenditionConfiguration**: [RenditionConfiguration](#renditionconfiguration)
* **State**: string (ReadOnly): Recording Configuration State.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **ThumbnailConfiguration**: [ThumbnailConfiguration](#thumbnailconfiguration)

## AWS.IVS/StageProperties
### Properties
* **ActiveSessionId**: string (ReadOnly): ID of the active session within the stage.
* **Arn**: string (ReadOnly, Identifier): Stage ARN is automatically generated on creation and assigned as the unique identifier.
* **AutoParticipantRecordingConfiguration**: [AutoParticipantRecordingConfiguration](#autoparticipantrecordingconfiguration)
* **Name**: string: Stage name
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.IVS/StorageConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Storage Configuration ARN is automatically generated on creation and assigned as the unique identifier.
* **Name**: string: Storage Configuration Name.
* **S3**: [S3StorageConfiguration](#s3storageconfiguration) (Required)
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.

## AWS.IVS/StreamKeyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Stream Key ARN is automatically generated on creation and assigned as the unique identifier.
* **ChannelArn**: string (Required): Channel ARN for the stream.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **Value**: string (ReadOnly): Stream-key value.

## DestinationConfiguration
### Properties
* **S3**: [S3DestinationConfiguration](#s3destinationconfiguration)

## EncoderConfiguration_Video
### Properties
* **Bitrate**: int: Bitrate for generated output, in bps. Default: 2500000.
* **Framerate**: int: Video frame rate, in fps. Default: 30.
* **Height**: int: Video-resolution height. This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.
* **Width**: int: Video-resolution width. This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.

## HlsConfiguration
### Properties
* **ParticipantRecordingHlsConfiguration**: [ParticipantRecordingHlsConfiguration](#participantrecordinghlsconfiguration)

## MediaTailorPlaybackConfiguration
### Properties
* **PlaybackConfigurationArn**: string: ARN of the customer-created EMT PlaybackConfiguration resource in the same region and account.

## MultitrackInputConfiguration
### Properties
* **Enabled**: bool: Indicates whether multitrack input is enabled. Can be set to true only if channel type is STANDARD. Setting enabled to true with any other channel type will cause an exception. If true, then policy, maximumResolution, and containerFormat are required, and containerFormat must be set to FRAGMENTED_MP4. Default: false.
* **MaximumResolution**: string: Maximum resolution for multitrack input. Required if enabled is true.
* **Policy**: string: Indicates whether multitrack input is allowed or required. Required if enabled is true.

## ParticipantRecordingHlsConfiguration
### Properties
* **TargetSegmentDurationSeconds**: int: Defines the target duration for recorded segments generated when recording a stage participant. Segments may have durations longer than the specified value when needed to ensure each segment begins with a keyframe. Default: 6.

## PostRollConfiguration
### Properties
* **DurationSeconds**: int (Required): Duration of the post-roll ad break, in seconds.
* **Enabled**: bool (Required): Whether the post-roll ad configuration is enabled.

## RenditionConfiguration
### Properties
* **Renditions**: string[]: Renditions indicates which renditions are recorded for a stream.
* **RenditionSelection**: string: Resolution Selection indicates which set of renditions are recorded for a stream.

## S3DestinationConfiguration
### Properties
* **BucketName**: string (Required)

## S3StorageConfiguration
### Properties
* **BucketName**: string (Required): Location (S3 bucket name) where recorded videos will be stored. Note that the StorageConfiguration and S3 bucket must be in the same region as the Composition.

## Stage_ParticipantThumbnailConfiguration
### Properties
* **RecordingMode**: string: Thumbnail recording mode. Default: DISABLED.
* **Storage**: string[]: Indicates the format in which thumbnails are recorded. SEQUENTIAL records all generated thumbnails in a serial manner, to the media/thumbnails/high directory. LATEST saves the latest thumbnail in media/latest_thumbnail/high/thumb.jpg and overwrites it at the interval specified by targetIntervalSeconds. You can enable both SEQUENTIAL and LATEST. Default: SEQUENTIAL.
* **TargetIntervalSeconds**: int: The targeted thumbnail-generation interval in seconds. This is configurable only if recordingMode is INTERVAL. Default: 60.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

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
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## ThumbnailConfiguration
### Properties
* **RecordingMode**: string: Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
* **Resolution**: string: Resolution indicates the desired resolution of recorded thumbnails.
* **Storage**: string[]: Storage indicates the format in which thumbnails are recorded.
* **TargetIntervalSeconds**: int: Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.

## ThumbnailConfiguration
### Properties
* **ParticipantThumbnailConfiguration**: [Stage_ParticipantThumbnailConfiguration](#stageparticipantthumbnailconfiguration): An object representing a configuration of thumbnails for recorded video from an individual participant.

