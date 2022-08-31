# AWS.IVS @ default

## Resource AWS.IVS/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IVS/ChannelProperties](#awsivschannelproperties): properties of the resource

## Resource AWS.IVS/PlaybackKeyPair@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IVS/PlaybackKeyPairProperties](#awsivsplaybackkeypairproperties): properties of the resource

## Resource AWS.IVS/RecordingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IVS/RecordingConfigurationProperties](#awsivsrecordingconfigurationproperties): properties of the resource

## Resource AWS.IVS/StreamKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IVS/StreamKeyProperties](#awsivsstreamkeyproperties): properties of the resource

## AWS.IVS/ChannelProperties
### Properties
* **Arn**: string (ReadOnly): Channel ARN is automatically generated on creation and assigned as the unique identifier.
* **Authorized**: bool: Whether the channel is authorized.
* **IngestEndpoint**: string (ReadOnly): Channel ingest endpoint, part of the definition of an ingest server, used when you set up streaming software.
* **LatencyMode**: string: Channel latency mode.
* **Name**: string: Channel
* **PlaybackUrl**: string (ReadOnly): Channel Playback URL.
* **RecordingConfigurationArn**: string: Recording Configuration ARN. A value other than an empty string indicates that recording is enabled. Default: ?? (recording is disabled).
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **Type**: string: Channel type, which determines the allowable resolution and bitrate. If you exceed the allowable resolution or bitrate, the stream probably will disconnect immediately.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IVS/PlaybackKeyPairProperties
### Properties
* **Arn**: string (ReadOnly): Key-pair identifier.
* **Fingerprint**: string (ReadOnly): Key-pair identifier.
* **Name**: string: An arbitrary string (a nickname) assigned to a playback key pair that helps the customer identify that resource. The value does not need to be unique.
* **PublicKeyMaterial**: string: The public portion of a customer-generated key pair.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IVS/RecordingConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): Recording Configuration ARN is automatically generated on creation and assigned as the unique identifier.
* **DestinationConfiguration**: [DestinationConfiguration](#destinationconfiguration)
* **Name**: string: Recording Configuration Name.
* **State**: string (ReadOnly): Recording Configuration State.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **ThumbnailConfiguration**: [ThumbnailConfiguration](#thumbnailconfiguration)

## DestinationConfiguration
### Properties
* **S3**: [S3DestinationConfiguration](#s3destinationconfiguration)

## S3DestinationConfiguration
### Properties
* **BucketName**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## ThumbnailConfiguration
### Properties
* **RecordingMode**: string: Thumbnail Recording Mode, which determines whether thumbnails are recorded at an interval or are disabled.
* **TargetIntervalSeconds**: int: Thumbnail recording Target Interval Seconds defines the interval at which thumbnails are recorded. This field is required if RecordingMode is INTERVAL.

## AWS.IVS/StreamKeyProperties
### Properties
* **Arn**: string (ReadOnly): Stream Key ARN is automatically generated on creation and assigned as the unique identifier.
* **ChannelArn**: string: Channel ARN for the stream.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.
* **Value**: string (ReadOnly): Stream-key value.

## Tag
### Properties
* **Key**: string
* **Value**: string

