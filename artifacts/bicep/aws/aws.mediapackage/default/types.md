# AWS.MediaPackage @ default

## Resource AWS.MediaPackage/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MediaPackage/ChannelProperties](#awsmediapackagechannelproperties) (Required): properties of the resource

## Resource AWS.MediaPackage/OriginEndpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MediaPackage/OriginEndpointProperties](#awsmediapackageoriginendpointproperties) (Required): properties of the resource

## Resource AWS.MediaPackage/PackagingGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MediaPackage/PackagingGroupProperties](#awsmediapackagepackaginggroupproperties) (Required): properties of the resource

## AWS.MediaPackage/ChannelProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) assigned to the Channel.
* **Description**: string: A short text description of the Channel.
* **EgressAccessLogs**: [LogConfiguration](#logconfiguration): The configuration parameters for egress access logging.
* **HlsIngest**: [HlsIngest](#hlsingest) (ReadOnly): A short text description of the Channel.
* **Id**: string (Required): The ID of the Channel.
* **IngressAccessLogs**: [LogConfiguration](#logconfiguration): The configuration parameters for egress access logging.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## LogConfiguration
### Properties
* **LogGroupName**: string: Sets a custom AWS CloudWatch log group name for access logs. If a log group name isn't specified, the defaults are used: /aws/MediaPackage/EgressAccessLogs for egress access logs and /aws/MediaPackage/IngressAccessLogs for ingress access logs.

## HlsIngest
### Properties
* **ingestEndpoints**: [IngestEndpoint](#ingestendpoint)[]: A list of endpoints to which the source stream should be sent.

## IngestEndpoint
### Properties
* **Id**: string: The system generated unique identifier for the IngestEndpoint
* **Password**: string: The system generated password for ingest authentication.
* **Url**: string: The ingest URL to which the source stream should be sent.
* **Username**: string: The system generated username for ingest authentication.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.MediaPackage/OriginEndpointProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) assigned to the OriginEndpoint.
* **Authorization**: [Authorization](#authorization)
* **ChannelId**: string (Required): The ID of the Channel the OriginEndpoint is associated with.
* **CmafPackage**: [CmafPackage](#cmafpackage)
* **DashPackage**: [DashPackage](#dashpackage)
* **Description**: string: A short text description of the OriginEndpoint.
* **HlsPackage**: [HlsPackage](#hlspackage)
* **Id**: string (Required): The ID of the OriginEndpoint.
* **ManifestName**: string: A short string appended to the end of the OriginEndpoint URL.
* **MssPackage**: [MssPackage](#msspackage)
* **Origination**: string: Control whether origination of video is allowed for this OriginEndpoint. If set to ALLOW, the OriginEndpoint may by requested, pursuant to any other form of access control. If set to DENY, the OriginEndpoint may not be requested. This can be helpful for Live to VOD harvesting, or for temporarily disabling origination
* **StartoverWindowSeconds**: int: Maximum duration (seconds) of content to retain for startover playback. If not specified, startover playback will be disabled for the OriginEndpoint.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource
* **TimeDelaySeconds**: int: Amount of delay (seconds) to enforce on the playback of live content. If not specified, there will be no time delay in effect for the OriginEndpoint.
* **Url**: string (ReadOnly): The URL of the packaged OriginEndpoint for consumption.
* **Whitelist**: string[]: A list of source IP CIDR blocks that will be allowed to access the OriginEndpoint.

## Authorization
### Properties
* **CdnIdentifierSecret**: string (Required): The Amazon Resource Name (ARN) for the secret in Secrets Manager that your Content Distribution Network (CDN) uses for authorization to access your endpoint.
* **SecretsRoleArn**: string (Required): The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

## CmafPackage
### Properties
* **Encryption**: [CmafEncryption](#cmafencryption)
* **HlsManifests**: [HlsManifest](#hlsmanifest)[]: A list of HLS manifest configurations
* **SegmentDurationSeconds**: int: Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
* **SegmentPrefix**: string: An optional custom string that is prepended to the name of each segment. If not specified, it defaults to the ChannelId.
* **StreamSelection**: [StreamSelection](#streamselection)

## CmafEncryption
### Properties
* **ConstantInitializationVector**: string: An optional 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting blocks. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).
* **KeyRotationIntervalSeconds**: int: Time (in seconds) between each encryption key rotation.
* **SpekeKeyProvider**: [SpekeKeyProvider](#spekekeyprovider) (Required)

## SpekeKeyProvider
### Properties
* **CertificateArn**: string: An Amazon Resource Name (ARN) of a Certificate Manager certificate that MediaPackage will use for enforcing secure end-to-end data transfer with the key provider service.
* **EncryptionContractConfiguration**: [EncryptionContractConfiguration](#encryptioncontractconfiguration)
* **ResourceId**: string (Required): The resource ID to include in key requests.
* **RoleArn**: string (Required): An Amazon Resource Name (ARN) of an IAM role that AWS Elemental MediaPackage will assume when accessing the key provider service.
* **SystemIds**: string[] (Required): The system IDs to include in key requests.
* **Url**: string (Required): The URL of the external key provider service.

## EncryptionContractConfiguration
### Properties
* **PresetSpeke20Audio**: string (Required): A collection of audio encryption presets.
* **PresetSpeke20Video**: string (Required): A collection of video encryption presets.

## HlsManifest
### Properties
* **AdMarkers**: string: This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
* **AdsOnDeliveryRestrictions**: [AdsOnDeliveryRestrictions](#adsondeliveryrestrictions)
* **AdTriggers**: string[]: A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
* **Id**: string (Required): The ID of the manifest. The ID must be unique within the OriginEndpoint and it cannot be changed after it is created.
* **IncludeIframeOnlyStream**: bool: When enabled, an I-Frame only stream will be included in the output.
* **ManifestName**: string: An optional short string appended to the end of the OriginEndpoint URL. If not specified, defaults to the manifestName for the OriginEndpoint.
* **PlaylistType**: string: The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
* **PlaylistWindowSeconds**: int: Time window (in seconds) contained in each parent manifest.
* **ProgramDateTimeIntervalSeconds**: int: The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
* **Url**: string: The URL of the packaged OriginEndpoint for consumption.

## AdsOnDeliveryRestrictions
### Properties

## StreamSelection
### Properties
* **MaxVideoBitsPerSecond**: int: The maximum video bitrate (bps) to include in output.
* **MinVideoBitsPerSecond**: int: The minimum video bitrate (bps) to include in output.
* **StreamOrder**: string: A directive that determines the order of streams in the output.

## DashPackage
### Properties
* **AdsOnDeliveryRestrictions**: [AdsOnDeliveryRestrictions](#adsondeliveryrestrictions)
* **AdTriggers**: string[]: A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
* **Encryption**: [DashEncryption](#dashencryption)
* **IncludeIframeOnlyStream**: bool: When enabled, an I-Frame only stream will be included in the output.
* **ManifestLayout**: string: Determines the position of some tags in the Media Presentation Description (MPD).  When set to FULL, elements like SegmentTemplate and ContentProtection are included in each Representation.  When set to COMPACT, duplicate elements are combined and presented at the AdaptationSet level.
* **ManifestWindowSeconds**: int: Time window (in seconds) contained in each manifest.
* **MinBufferTimeSeconds**: int: Minimum duration (in seconds) that a player will buffer media before starting the presentation.
* **MinUpdatePeriodSeconds**: int: Minimum duration (in seconds) between potential changes to the Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD).
* **PeriodTriggers**: string[]: A list of triggers that controls when the outgoing Dynamic Adaptive Streaming over HTTP (DASH) Media Presentation Description (MPD) will be partitioned into multiple periods. If empty, the content will not be partitioned into more than one period. If the list contains "ADS", new periods will be created where the Channel source contains SCTE-35 ad markers.
* **Profile**: string: The Dynamic Adaptive Streaming over HTTP (DASH) profile type.  When set to "HBBTV_1_5", HbbTV 1.5 compliant output is enabled.
* **SegmentDurationSeconds**: int: Duration (in seconds) of each segment. Actual segments will be rounded to the nearest multiple of the source segment duration.
* **SegmentTemplateFormat**: string: Determines the type of SegmentTemplate included in the Media Presentation Description (MPD).  When set to NUMBER_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Number$ media URLs.  When set to TIME_WITH_TIMELINE, a full timeline is presented in each SegmentTemplate, with $Time$ media URLs. When set to NUMBER_WITH_DURATION, only a duration is included in each SegmentTemplate, with $Number$ media URLs.
* **StreamSelection**: [StreamSelection](#streamselection)
* **SuggestedPresentationDelaySeconds**: int: Duration (in seconds) to delay live content before presentation.
* **UtcTiming**: string: Determines the type of UTCTiming included in the Media Presentation Description (MPD)
* **UtcTimingUri**: string: Specifies the value attribute of the UTCTiming field when utcTiming is set to HTTP-ISO, HTTP-HEAD or HTTP-XSDATE

## DashEncryption
### Properties
* **KeyRotationIntervalSeconds**: int: Time (in seconds) between each encryption key rotation.
* **SpekeKeyProvider**: [SpekeKeyProvider](#spekekeyprovider) (Required)

## HlsPackage
### Properties
* **AdMarkers**: string: This setting controls how ad markers are included in the packaged OriginEndpoint. "NONE" will omit all SCTE-35 ad markers from the output. "PASSTHROUGH" causes the manifest to contain a copy of the SCTE-35 ad markers (comments) taken directly from the input HTTP Live Streaming (HLS) manifest. "SCTE35_ENHANCED" generates ad markers and blackout tags based on SCTE-35 messages in the input source. "DATERANGE" inserts EXT-X-DATERANGE tags to signal ad and program transition events in HLS and CMAF manifests. For this option, you must set a programDateTimeIntervalSeconds value that is greater than 0.
* **AdsOnDeliveryRestrictions**: [AdsOnDeliveryRestrictions](#adsondeliveryrestrictions)
* **AdTriggers**: string[]: A list of SCTE-35 message types that are treated as ad markers in the output.  If empty, no ad markers are output.  Specify multiple items to create ad markers for all of the included message types.
* **Encryption**: [HlsEncryption](#hlsencryption)
* **IncludeIframeOnlyStream**: bool: When enabled, an I-Frame only stream will be included in the output.
* **PlaylistType**: string: The HTTP Live Streaming (HLS) playlist type. When either "EVENT" or "VOD" is specified, a corresponding EXT-X-PLAYLIST-TYPE entry will be included in the media playlist.
* **PlaylistWindowSeconds**: int: Time window (in seconds) contained in each parent manifest.
* **ProgramDateTimeIntervalSeconds**: int: The interval (in seconds) between each EXT-X-PROGRAM-DATE-TIME tag inserted into manifests. Additionally, when an interval is specified ID3Timed Metadata messages will be generated every 5 seconds using the ingest time of the content. If the interval is not specified, or set to 0, then no EXT-X-PROGRAM-DATE-TIME tags will be inserted into manifests and no ID3Timed Metadata messages will be generated. Note that irrespective of this parameter, if any ID3 Timed Metadata is found in HTTP Live Streaming (HLS) input, it will be passed through to HLS output.
* **SegmentDurationSeconds**: int: Duration (in seconds) of each fragment. Actual fragments will be rounded to the nearest multiple of the source fragment duration.
* **StreamSelection**: [StreamSelection](#streamselection)
* **UseAudioRenditionGroup**: bool: When enabled, audio streams will be placed in rendition groups in the output.

## HlsEncryption
### Properties
* **ConstantInitializationVector**: string: A constant initialization vector for encryption (optional). When not specified the initialization vector will be periodically rotated.
* **EncryptionMethod**: string: The encryption method to use.
* **KeyRotationIntervalSeconds**: int: Interval (in seconds) between each encryption key rotation.
* **RepeatExtXKey**: bool: When enabled, the EXT-X-KEY tag will be repeated in output manifests.
* **SpekeKeyProvider**: [SpekeKeyProvider](#spekekeyprovider) (Required)

## MssPackage
### Properties
* **Encryption**: [MssEncryption](#mssencryption)
* **ManifestWindowSeconds**: int: The time window (in seconds) contained in each manifest.
* **SegmentDurationSeconds**: int: The duration (in seconds) of each segment.
* **StreamSelection**: [StreamSelection](#streamselection)

## MssEncryption
### Properties
* **SpekeKeyProvider**: [SpekeKeyProvider](#spekekeyprovider) (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.MediaPackage/PackagingGroupProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the PackagingGroup.
* **Authorization**: [Authorization](#authorization): CDN Authorization
* **DomainName**: string (ReadOnly): The fully qualified domain name for Assets in the PackagingGroup.
* **EgressAccessLogs**: [LogConfiguration](#logconfiguration): The configuration parameters for egress access logging.
* **Id**: string (Required): The ID of the PackagingGroup.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## Authorization
### Properties
* **CdnIdentifierSecret**: string (Required): The Amazon Resource Name (ARN) for the secret in AWS Secrets Manager that is used for CDN authorization.
* **SecretsRoleArn**: string (Required): The Amazon Resource Name (ARN) for the IAM role that allows MediaPackage to communicate with AWS Secrets Manager.

## LogConfiguration
### Properties
* **LogGroupName**: string: Sets a custom AWS CloudWatch log group name for egress logs. If a log group name isn't specified, the default name is used: /aws/MediaPackage/VodEgressAccessLogs.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

