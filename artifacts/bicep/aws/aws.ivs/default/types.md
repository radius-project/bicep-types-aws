# AWS.IVS @ default

## Resource AWS.IVS/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/ChannelProperties](#awsivschannelproperties) (Identifier): properties of the resource

## Resource AWS.IVS/PlaybackKeyPair@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/PlaybackKeyPairProperties](#awsivsplaybackkeypairproperties) (Identifier): properties of the resource

## Resource AWS.IVS/RecordingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/RecordingConfigurationProperties](#awsivsrecordingconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.IVS/Stage@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/StageProperties](#awsivsstageproperties) (Identifier): properties of the resource

## Resource AWS.IVS/StreamKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IVS/StreamKeyProperties](#awsivsstreamkeyproperties) (Required, Identifier): properties of the resource

## AWS.IVS/ChannelProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Channel ARN is automatically generated on creation and assigned as the unique identifier.
* **Authorized**: bool: Whether the channel is authorized.
* **IngestEndpoint**: string (ReadOnly): Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
* **InsecureIngest**: bool: Whether the channel allows insecure ingest.
* **LatencyMode**: string: Channel latency mode.
* **Name**: string: Channel
* **PlaybackUrl**: string (ReadOnly): Channel Playback URL.
* **Preset**: string: Optional transcode preset for the channel. This is selectable only for ADVANCED_HD and ADVANCED_SD channel types. For those channel types, the default preset is HIGHER_BANDWIDTH_DELIVERY. For other channel types (BASIC and STANDARD), preset is the empty string ("").
* **RecordingConfigurationArn**: string: Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: "" (recording is disabled).
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **Type**: string: Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

## AWS.IVS/PlaybackKeyPairProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Key-pair identifier.
* **Fingerprint**: string (ReadOnly): Key-pair identifier.
* **Name**: string: An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
* **PublicKeyMaterial**: string (WriteOnly): The public portion of a customer-generated key pair.
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
* **Name**: string: Stage name
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.IVS/StreamKeyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Stream Key ARN is automatically generated on creation and assigned as the unique identifier.
* **ChannelArn**: string (Required): Channel ARN for the stream.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **Value**: string (ReadOnly): Stream-key value.

## DestinationConfiguration
### Properties
* **S3**: [S3DestinationConfiguration](#s3destinationconfiguration)

## RenditionConfiguration
### Properties
* **Renditions**: string[]: Renditions indicates which renditions are recorded for a stream.
* **RenditionSelection**: string: Resolution Selection indicates which set of renditions are recorded for a stream.

## S3DestinationConfiguration
### Properties
* **BucketName**: string (Required)

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ThumbnailConfiguration
### Properties
* **RecordingMode**: string: Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
* **Resolution**: string: Resolution indicates the desired resolution of recorded thumbnails.
* **Storage**: string[]: Storage indicates the format in which thumbnails are recorded.
* **TargetIntervalSeconds**: int: Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.

