# AWS.MediaPackageV2 @ default

## Resource AWS.MediaPackageV2/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/ChannelProperties](#awsmediapackagev2channelproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/ChannelGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/ChannelGroupProperties](#awsmediapackagev2channelgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/ChannelPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/ChannelPolicyProperties](#awsmediapackagev2channelpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/OriginEndpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/OriginEndpointProperties](#awsmediapackagev2originendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/OriginEndpointPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/OriginEndpointPolicyProperties](#awsmediapackagev2originendpointpolicyproperties) (Required, Identifier): properties of the resource

## AWS.MediaPackageV2/ChannelGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): <p>The Amazon Resource Name (ARN) associated with the resource.</p>
* **ChannelGroupName**: string (Required)
* **CreatedAt**: string (ReadOnly): <p>The date and time the channel group was created.</p>
* **Description**: string: <p>Enter any descriptive text that helps you to identify the channel group.</p>
* **EgressDomain**: string (ReadOnly): <p>The output domain where the source stream should be sent. Integrate the domain with a downstream CDN (such as Amazon CloudFront) or playback device.</p>
* **ModifiedAt**: string (ReadOnly): <p>The date and time the channel group was modified.</p>
* **Tags**: [Tag](#tag)[]

## AWS.MediaPackageV2/ChannelPolicyProperties
### Properties
* **ChannelGroupName**: string (Required, Identifier)
* **ChannelName**: string (Required, Identifier)
* **Policy**: [ChannelPolicy_Policy](#channelpolicypolicy) | string (Required)

## AWS.MediaPackageV2/ChannelProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): <p>The Amazon Resource Name (ARN) associated with the resource.</p>
* **ChannelGroupName**: string (Required)
* **ChannelName**: string (Required)
* **CreatedAt**: string (ReadOnly): <p>The date and time the channel was created.</p>
* **Description**: string: <p>Enter any descriptive text that helps you to identify the channel.</p>
* **IngestEndpoints**: [IngestEndpoint](#ingestendpoint)[] (ReadOnly): <p>The list of ingest endpoints.</p>
* **IngestEndpointUrls**: string[] (ReadOnly)
* **ModifiedAt**: string (ReadOnly): <p>The date and time the channel was modified.</p>
* **Tags**: [Tag](#tag)[]

## AWS.MediaPackageV2/OriginEndpointPolicyProperties
### Properties
* **ChannelGroupName**: string (Required, Identifier)
* **ChannelName**: string (Required, Identifier)
* **OriginEndpointName**: string (Required, Identifier)
* **Policy**: [OriginEndpointPolicy_Policy](#originendpointpolicypolicy) | string (Required)

## AWS.MediaPackageV2/OriginEndpointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): <p>The Amazon Resource Name (ARN) associated with the resource.</p>
* **ChannelGroupName**: string (Required)
* **ChannelName**: string (Required)
* **ContainerType**: string
* **CreatedAt**: string (ReadOnly): <p>The date and time the origin endpoint was created.</p>
* **DashManifests**: [DashManifestConfiguration](#dashmanifestconfiguration)[]: <p>A DASH manifest configuration.</p>
* **DashManifestUrls**: string[] (ReadOnly)
* **Description**: string: <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
* **HlsManifests**: [HlsManifestConfiguration](#hlsmanifestconfiguration)[] (ReadOnly): <p>An HTTP live streaming (HLS) manifest configuration.</p>
* **HlsManifestUrls**: string[] (ReadOnly)
* **LowLatencyHlsManifests**: [LowLatencyHlsManifestConfiguration](#lowlatencyhlsmanifestconfiguration)[] (ReadOnly): <p>A low-latency HLS manifest configuration.</p>
* **LowLatencyHlsManifestUrls**: string[] (ReadOnly)
* **ModifiedAt**: string (ReadOnly): <p>The date and time the origin endpoint was modified.</p>
* **OriginEndpointName**: string (Required)
* **Segment**: [Segment](#segment)
* **StartoverWindowSeconds**: int: <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
* **Tags**: [Tag](#tag)[]

## DashManifestConfiguration
### Properties
* **DrmSignaling**: string
* **FilterConfiguration**: [FilterConfiguration](#filterconfiguration)
* **ManifestName**: string (Required): <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of the manifest's content.</p>
* **MinBufferTimeSeconds**: int: <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
* **MinUpdatePeriodSeconds**: int: <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
* **PeriodTriggers**: string[]: <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period.
         For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
* **ScteDash**: [ScteDash](#sctedash)
* **SegmentTemplateFormat**: string
* **SuggestedPresentationDelaySeconds**: int: <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
* **UtcTiming**: [DashUtcTiming](#dashutctiming)

## DashUtcTiming
### Properties
* **TimingMode**: string
* **TimingSource**: string: <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>

## Encryption
### Properties
* **ConstantInitializationVector**: string: <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
* **EncryptionMethod**: [EncryptionMethod](#encryptionmethod) (Required)
* **KeyRotationIntervalSeconds**: int: <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p>
         <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code>
         </p>
* **SpekeKeyProvider**: [SpekeKeyProvider](#spekekeyprovider) (Required)

## EncryptionContractConfiguration
### Properties
* **PresetSpeke20Audio**: string (Required)
* **PresetSpeke20Video**: string (Required)

## EncryptionMethod
### Properties
* **CmafEncryptionMethod**: string
* **TsEncryptionMethod**: string

## FilterConfiguration
### Properties
* **End**: string: <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
* **ManifestFilter**: string: <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
* **Start**: string: <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
* **TimeDelaySeconds**: int: <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

## HlsManifestConfiguration
### Properties
* **ChildManifestName**: string: <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **FilterConfiguration**: [FilterConfiguration](#filterconfiguration)
* **ManifestName**: string (Required): <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of the manifest's content.</p>
* **ProgramDateTimeIntervalSeconds**: int: <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, 
         EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. 
         The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player. 
         ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
         <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
* **ScteHls**: [ScteHls](#sctehls)
* **Url**: string: <p>The egress domain URL for stream delivery from MediaPackage.</p>

## IngestEndpoint
### Properties
* **Id**: string: <p>The system-generated unique identifier for the IngestEndpoint.</p>
* **Url**: string: <p>The ingest domain URL where the source stream should be sent.</p>

## LowLatencyHlsManifestConfiguration
### Properties
* **ChildManifestName**: string: <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **FilterConfiguration**: [FilterConfiguration](#filterconfiguration)
* **ManifestName**: string (Required): <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of the manifest's content.</p>
* **ProgramDateTimeIntervalSeconds**: int: <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, 
         EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. 
         The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player. 
         ID3Timed metadata messages generate every 5 seconds whenever the content is ingested.</p>
         <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
* **ScteHls**: [ScteHls](#sctehls)
* **Url**: string: <p>The egress domain URL for stream delivery from MediaPackage.</p>

## Scte
### Properties
* **ScteFilter**: string[]: <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>

## ScteDash
### Properties
* **AdMarkerDash**: string

## ScteHls
### Properties
* **AdMarkerHls**: string

## Segment
### Properties
* **Encryption**: [Encryption](#encryption)
* **IncludeIframeOnlyStreams**: bool: <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
* **Scte**: [Scte](#scte)
* **SegmentDurationSeconds**: int: <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
* **SegmentName**: string: <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
* **TsIncludeDvbSubtitles**: bool: <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
* **TsUseAudioRenditionGroup**: bool: <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>

## SpekeKeyProvider
### Properties
* **DrmSystems**: string[] (Required): <p>The DRM solution provider you're using to protect your content during distribution.</p>
* **EncryptionContractConfiguration**: [EncryptionContractConfiguration](#encryptioncontractconfiguration) (Required)
* **ResourceId**: string (Required): <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p>
         <p>The following example shows a resource ID: <code>MovieNight20171126093045</code>
         </p>
* **RoleArn**: string (Required): <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p>
         <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code>
         </p>
* **Url**: string (Required): <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p>
         <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code>
         </p>

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

