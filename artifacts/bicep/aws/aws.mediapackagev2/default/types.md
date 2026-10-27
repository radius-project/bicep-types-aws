# AWS.MediaPackageV2 @ default

## Resource AWS.MediaPackageV2/Channel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/ChannelProperties](#awsmediapackagev2channelproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/ChannelGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/ChannelGroupProperties](#awsmediapackagev2channelgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/ChannelPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/ChannelPolicyProperties](#awsmediapackagev2channelpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/OriginEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaPackageV2/OriginEndpointProperties](#awsmediapackagev2originendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaPackageV2/OriginEndpointPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
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
* **AttachedMultiviewChannels**: string[] (ReadOnly): <p>The multiview channels, in the same channel group, that list this channel as an available source. This is a read-only field. You can't delete a channel while any multiview channel still lists it as a source. Use this field to find the multiview channels that you need to update first.</p>
* **ChannelGroupName**: string (Required)
* **ChannelName**: string (Required)
* **CreatedAt**: string (ReadOnly): <p>The date and time the channel was created.</p>
* **Description**: string: <p>Enter any descriptive text that helps you to identify the channel.</p>
* **IngestEndpoints**: [IngestEndpoint](#ingestendpoint)[] (ReadOnly): <p>The list of ingest endpoints.</p>
* **IngestEndpointUrls**: string[] (ReadOnly)
* **InputSwitchConfiguration**: [InputSwitchConfiguration](#inputswitchconfiguration)
* **InputType**: string
* **ModifiedAt**: string (ReadOnly): <p>The date and time the channel was modified.</p>
* **MultiviewConfiguration**: [MultiviewConfiguration](#multiviewconfiguration)
* **OutputHeaderConfiguration**: [OutputHeaderConfiguration](#outputheaderconfiguration)
* **OutputLockingMode**: string
* **Tags**: [Tag](#tag)[]

## AWS.MediaPackageV2/OriginEndpointPolicyProperties
### Properties
* **CdnAuthConfiguration**: [CdnAuthConfiguration](#cdnauthconfiguration)
* **ChannelGroupName**: string (Required, Identifier)
* **ChannelName**: string (Required, Identifier)
* **OriginEndpointName**: string (Required, Identifier)
* **Policy**: [OriginEndpointPolicy_Policy](#originendpointpolicypolicy) | string (Required)

## AWS.MediaPackageV2/OriginEndpointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): <p>The Amazon Resource Name (ARN) associated with the resource.</p>
* **ChannelGroupName**: string (Required)
* **ChannelName**: string (Required)
* **ContainerType**: string (Required)
* **CreatedAt**: string (ReadOnly): <p>The date and time the origin endpoint was created.</p>
* **DashManifests**: [DashManifestConfiguration](#dashmanifestconfiguration)[]: <p>A DASH manifest configuration.</p>
* **DashManifestUrls**: string[] (ReadOnly)
* **Description**: string: <p>Enter any descriptive text that helps you to identify the origin endpoint.</p>
* **ForceEndpointErrorConfiguration**: [ForceEndpointErrorConfiguration](#forceendpointerrorconfiguration)
* **HlsManifests**: [HlsManifestConfiguration](#hlsmanifestconfiguration)[] (ReadOnly): <p>An HTTP live streaming (HLS) manifest configuration.</p>
* **HlsManifestUrls**: string[] (ReadOnly)
* **LowLatencyHlsManifests**: [LowLatencyHlsManifestConfiguration](#lowlatencyhlsmanifestconfiguration)[] (ReadOnly): <p>A low-latency HLS manifest configuration.</p>
* **LowLatencyHlsManifestUrls**: string[] (ReadOnly)
* **ModifiedAt**: string (ReadOnly): <p>The date and time the origin endpoint was modified.</p>
* **MssManifests**: [MssManifestConfiguration](#mssmanifestconfiguration)[]: <p>The Microsoft Smooth Streaming (MSS) manifest configurations associated with this origin endpoint.</p>
* **MssManifestUrls**: string[] (ReadOnly)
* **OriginEndpointName**: string (Required)
* **Segment**: [Segment](#segment)
* **StartoverWindowSeconds**: int: <p>The size of the window (in seconds) to create a window of the live stream that's available for on-demand viewing. Viewers can start-over or catch-up on content that falls within the window. The maximum startover window is 1,209,600 seconds (14 days).</p>
* **StreamNameOutputMode**: string
* **Tags**: [Tag](#tag)[]
* **UriSeparator**: string

## CdnAuthConfiguration
### Properties
* **CdnIdentifierSecretArns**: string[] (Required): <p>The ARN for the secret in Secrets Manager that your CDN uses for authorization to access the endpoint.</p>
* **SecretsRoleArn**: string (Required): <p>The ARN for the IAM role that gives MediaPackage read access to Secrets Manager and KMS for CDN authorization.</p>

## ContentKeyPeriodConfiguration
### Properties
* **ContentKeyPeriodTiming**: string

## DashAvailabilityStartTimeConfiguration
### Properties

## DashBaseUrl
### Properties
* **DvbPriority**: int: <p>For use with DVB-DASH profiles only. The priority of this location for servings segments. The lower the number, the higher the priority.</p>
* **DvbWeight**: int: <p>For use with DVB-DASH profiles only. The weighting for source locations that have the same priority. </p>
* **ServiceLocation**: string: <p>The name of the source location.</p>
* **Url**: string (Required): <p>A source location for segments.</p>

## DashDvbFontDownload
### Properties
* **FontFamily**: string: <p>The <code>fontFamily</code> name for subtitles, as described in <a href="https://tech.ebu.ch/publications/tech3380">EBU-TT-D Subtitling Distribution Format</a>. </p>
* **MimeType**: string: <p>The <code>mimeType</code> of the resource that's at the font download URL.</p> <p>For information about font MIME types, see the <a href="https://dvb.org/wp-content/uploads/2021/06/A168r4_MPEG-DASH-Profile-for-Transport-of-ISO-BMFF-Based-DVB-Services_Draft-ts_103-285-v140_November_2021.pdf">MPEG-DASH Profile for Transport of ISO BMFF Based DVB Services over IP Based Networks</a> document. </p>
* **Url**: string: <p>The URL for downloading fonts for subtitles.</p>

## DashDvbMetricsReporting
### Properties
* **Probability**: int: <p>The number of playback devices per 1000 that will send error reports to the reporting URL. This represents the probability that a playback device will be a reporting player for this session.</p>
* **ReportingUrl**: string (Required): <p>The URL where playback devices send error reports.</p>

## DashDvbSettings
### Properties
* **ErrorMetrics**: [DashDvbMetricsReporting](#dashdvbmetricsreporting)[]: <p>Playback device error reporting settings.</p>
* **FontDownload**: [DashDvbFontDownload](#dashdvbfontdownload)

## DashManifestConfiguration
### Properties
* **AudioTimelinePattern**: string
* **AvailabilityStartTimeConfiguration**: [DashAvailabilityStartTimeConfiguration](#dashavailabilitystarttimeconfiguration)
* **BaseUrls**: [DashBaseUrl](#dashbaseurl)[]: <p>The base URL to use for retrieving segments.</p>
* **Compactness**: string
* **DrmSignaling**: string
* **DvbSettings**: [DashDvbSettings](#dashdvbsettings)
* **FilterConfiguration**: [FilterConfiguration](#filterconfiguration)
* **ManifestName**: string (Required): <p>A short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. </p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of the manifest's content.</p>
* **MinBufferTimeSeconds**: int: <p>Minimum amount of content (in seconds) that a player must keep available in the buffer.</p>
* **MinUpdatePeriodSeconds**: int: <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest.</p>
* **PeriodTriggers**: string[]: <p>A list of triggers that controls when AWS Elemental MediaPackage separates the MPEG-DASH manifest into multiple periods. Leave this value empty to indicate that the manifest is contained all in one period. For more information about periods in the DASH manifest, see <a href="https://docs.aws.amazon.com/mediapackage/latest/userguide/multi-period.html">Multi-period DASH in AWS Elemental MediaPackage</a>.</p>
* **Profiles**: string[]: <p>The profile that the output is compliant with.</p>
* **ProgramInformation**: [DashProgramInformation](#dashprograminformation)
* **ScteDash**: [ScteDash](#sctedash)
* **SegmentTemplateFormat**: string
* **SubtitleConfiguration**: [DashSubtitleConfiguration](#dashsubtitleconfiguration)
* **SuggestedPresentationDelaySeconds**: int: <p>The amount of time (in seconds) that the player should be from the end of the manifest.</p>
* **UriPathType**: string
* **UtcTiming**: [DashUtcTiming](#dashutctiming)

## DashProgramInformation
### Properties
* **Copyright**: string: <p>A copyright statement about the content.</p>
* **LanguageCode**: string: <p>The language code for this manifest.</p>
* **MoreInformationUrl**: string: <p>An absolute URL that contains more information about this content.</p>
* **Source**: string: <p>Information about the content provider.</p>
* **Title**: string: <p>The title for the manifest.</p>

## DashSubtitleConfiguration
### Properties
* **TtmlConfiguration**: [DashTtmlConfiguration](#dashttmlconfiguration)

## DashTtmlConfiguration
### Properties
* **TtmlProfile**: string (Required)

## DashUtcTiming
### Properties
* **TimingMode**: string
* **TimingSource**: string: <p>The the method that the player uses to synchronize to coordinated universal time (UTC) wall clock time.</p>

## Encryption
### Properties
* **CmafExcludeSegmentDrmMetadata**: bool: <p>Excludes SEIG and SGPD boxes from segment metadata in CMAF containers.</p> <p>When set to <code>true</code>, MediaPackage omits these DRM metadata boxes from CMAF segments, which can improve compatibility with certain devices and players that don't support these boxes.</p> <p>Important considerations:</p> <ul> <li> <p>This setting only affects CMAF container formats</p> </li> <li> <p>Key rotation can still be handled through media playlist signaling</p> </li> <li> <p>PSSH and TENC boxes remain unaffected</p> </li> <li> <p>Default behavior is preserved when this setting is disabled</p> </li> </ul> <p>Valid values: <code>true</code> | <code>false</code> </p> <p>Default: <code>false</code> </p>
* **ConstantInitializationVector**: string: <p>A 128-bit, 16-byte hex value represented by a 32-character string, used in conjunction with the key for encrypting content. If you don't specify a value, then MediaPackage creates the constant initialization vector (IV).</p>
* **EncryptionMethod**: [EncryptionMethod](#encryptionmethod) (Required)
* **KeyRotationIntervalSeconds**: int: <p>The frequency (in seconds) of key changes for live workflows, in which content is streamed real time. The service retrieves content keys before the live content begins streaming, and then retrieves them as needed over the lifetime of the workflow. By default, key rotation is set to 300 seconds (5 minutes), the minimum rotation interval, which is equivalent to setting it to 300. If you don't enter an interval, content keys aren't rotated.</p> <p>The following example setting causes the service to rotate keys every thirty minutes: <code>1800</code> </p>
* **SpekeKeyProvider**: [SpekeKeyProvider](#spekekeyprovider) (Required)

## EncryptionContractConfiguration
### Properties
* **PresetSpeke20Audio**: string (Required)
* **PresetSpeke20Video**: string (Required)

## EncryptionMethod
### Properties
* **CmafEncryptionMethod**: string
* **IsmEncryptionMethod**: string
* **TsEncryptionMethod**: string

## FilterConfiguration
### Properties
* **ClipStartTime**: string: <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
* **DrmSettings**: string: <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
* **End**: string: <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
* **ManifestFilter**: string: <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
* **Multiview**: [MultiviewFilterConfiguration](#multiviewfilterconfiguration)
* **Start**: string: <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
* **TimeDelaySeconds**: int: <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

## ForceEndpointErrorConfiguration
### Properties
* **EndpointErrorConditions**: string[]: <p>The failover conditions for the endpoint. The options are:</p> <ul> <li> <p> <code>STALE_MANIFEST</code> - The manifest stalled and there are no new segments or parts.</p> </li> <li> <p> <code>INCOMPLETE_MANIFEST</code> - There is a gap in the manifest.</p> </li> <li> <p> <code>MISSING_DRM_KEY</code> - Key rotation is enabled but we're unable to fetch the key for the current key period.</p> </li> <li> <p> <code>SLATE_INPUT</code> - The segments which contain slate content are considered to be missing content.</p> </li> </ul>

## HlsManifestConfiguration
### Properties
* **ChildManifestName**: string: <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **FilterConfiguration**: [FilterConfiguration](#filterconfiguration)
* **ManifestName**: string (Required): <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of the manifest's content.</p>
* **ProgramDateTimeIntervalSeconds**: int: <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
* **ScteHls**: [ScteHls](#sctehls)
* **StartTag**: [StartTag](#starttag)
* **UriPathType**: string
* **Url**: string: <p>The egress domain URL for stream delivery from MediaPackage.</p>
* **UrlEncodeChildManifest**: bool: <p>When enabled, MediaPackage URL-encodes the query string for API requests for HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>

## IngestEndpoint
### Properties
* **Id**: string: <p>The system-generated unique identifier for the IngestEndpoint.</p>
* **Url**: string: <p>The ingest domain URL where the source stream should be sent.</p>

## InputSwitchConfiguration
### Properties
* **MQCSInputSwitching**: bool: <p>When true, AWS Elemental MediaPackage performs input switching based on the MQCS. Default is false. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>
* **PreferredInput**: int: <p>For CMAF inputs, indicates which input MediaPackage should prefer when both inputs have equal MQCS scores. Select <code>1</code> to prefer the first ingest endpoint, or <code>2</code> to prefer the second ingest endpoint. If you don't specify a preferred input, MediaPackage uses its default switching behavior when MQCS scores are equal.</p>

## LowLatencyHlsFilterConfiguration
### Properties
* **ClipStartTime**: string: <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
* **DrmSettings**: string: <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
* **End**: string: <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
* **ManifestFilter**: string: <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
* **Start**: string: <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
* **TimeDelaySeconds**: int: <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

## LowLatencyHlsManifestConfiguration
### Properties
* **ChildManifestName**: string: <p>A short string that's appended to the endpoint URL. The child manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default child manifest name, index_1. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **FilterConfiguration**: [LowLatencyHlsFilterConfiguration](#lowlatencyhlsfilterconfiguration)
* **ManifestName**: string (Required): <p>A short short string that's appended to the endpoint URL. The manifest name creates a unique path to this endpoint. If you don't enter a value, MediaPackage uses the default manifest name, index. MediaPackage automatically inserts the format extension, such as .m3u8. You can't use the same manifest name if you use HLS manifest and low-latency HLS manifest. The manifestName on the HLSManifest object overrides the manifestName you provided on the originEndpoint object.</p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of the manifest's content.</p>
* **ProgramDateTimeIntervalSeconds**: int: <p>Inserts EXT-X-PROGRAM-DATE-TIME tags in the output manifest at the interval that you specify. If you don't enter an interval, EXT-X-PROGRAM-DATE-TIME tags aren't included in the manifest. The tags sync the stream to the wall clock so that viewers can seek to a specific time in the playback timeline on the player.</p> <p>Irrespective of this parameter, if any ID3Timed metadata is in the HLS input, it is passed through to the HLS output.</p>
* **ScteHls**: [ScteHls](#sctehls)
* **StartTag**: [StartTag](#starttag)
* **UriPathType**: string
* **Url**: string: <p>The egress domain URL for stream delivery from MediaPackage.</p>
* **UrlEncodeChildManifest**: bool: <p>When enabled, MediaPackage URL-encodes the query string for API requests for LL-HLS child manifests to comply with Amazon Web Services Signature Version 4 (SigV4) signature signing protocol. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_sigv.html">Amazon Web Services Signature Version 4 for API requests</a> in <i>Identity and Access Management User Guide</i>.</p>

## MssFilterConfiguration
### Properties
* **ClipStartTime**: string: <p>Optionally specify the clip start time for all of your manifest egress requests. When you include clip start time, note that you cannot use clip start time query parameters for this manifest's endpoint URL.</p>
* **DrmSettings**: string: <p>Optionally specify one or more DRM settings for all of your manifest egress requests. When you include a DRM setting, note that you cannot use an identical DRM setting query parameter for this manifest's endpoint URL.</p>
* **End**: string: <p>Optionally specify the end time for all of your manifest egress requests. When you include end time, note that you cannot use end time query parameters for this manifest's endpoint URL.</p>
* **ManifestFilter**: string: <p>Optionally specify one or more manifest filters for all of your manifest egress requests. When you include a manifest filter, note that you cannot use an identical manifest filter query parameter for this manifest's endpoint URL.</p>
* **Start**: string: <p>Optionally specify the start time for all of your manifest egress requests. When you include start time, note that you cannot use start time query parameters for this manifest's endpoint URL.</p>
* **TimeDelaySeconds**: int: <p>Optionally specify the time delay for all of your manifest egress requests. Enter a value that is smaller than your endpoint's startover window. When you include time delay, note that you cannot use time delay query parameters for this manifest's endpoint URL.</p>

## MssManifestConfiguration
### Properties
* **FilterConfiguration**: [MssFilterConfiguration](#mssfilterconfiguration)
* **ManifestLayout**: string
* **ManifestName**: string (Required): <p>The name of the MSS manifest. This name is appended to the origin endpoint URL to create the unique path for accessing this specific MSS manifest.</p>
* **ManifestWindowSeconds**: int: <p>The duration (in seconds) of the manifest window. This represents the total amount of content available in the manifest at any given time.</p>

## MultiviewConfiguration
### Properties
* **AvailableLayouts**: string[] (Required): <p>The tile layouts that players can request from this multiview channel's origin endpoints. Only the layouts that you list here are available. Each layout must appear at most once.</p>
* **AvailableSources**: string[] (Required): <p>The channels that players can use as tiles in this multiview channel's output. Each source channel must be in the same channel group as the multiview channel, and must have an <code>InputType</code> of <code>CMAF</code>. Only the channels that you list here are available as tiles.</p>

## MultiviewFilterConfiguration
### Properties
* **Layout**: string (Required)
* **Sources**: string[] (Required): <p>The source channels to composite, in tile order. Each channel must be one of the <code>AvailableSources</code> of the channel that this origin endpoint is on, and the number of channels must equal the number of tiles in <code>Layout</code>.</p>

## OutputHeaderConfiguration
### Properties
* **PublishMQCS**: bool: <p>When true, AWS Elemental MediaPackage includes the MQCS in responses to the CDN. This setting is valid only when <code>InputType</code> is <code>CMAF</code>.</p>

## Scte
### Properties
* **CustomAdTypes**: string[]: <p>A list of additional non-Ad SCTE-35 event types to treat as advertisements. When configured, events matching these types produce ad markers (such as <code>SCTE35-OUT</code> and <code>SCTE35-IN</code> in HLS DATERANGE tags) in manifests.</p> <p>Valid values: <code>PROGRAM</code> | <code>CHAPTER</code> | <code>UNSCHEDULED_EVENT</code> | <code>ALTERNATE_CONTENT_OPPORTUNITY</code> | <code>NETWORK</code> </p> <p>If you don't specify any values, the default is empty (only default ad types are used).</p>
* **ScteFilter**: string[]: <p>The SCTE-35 message types that you want to be treated as ad markers in the output.</p>
* **ScteInSegments**: string

## ScteDash
### Properties
* **AdMarkerDash**: string
* **ScteInManifests**: string

## ScteHls
### Properties
* **AdMarkerHls**: string
* **ScteInManifests**: string

## Segment
### Properties
* **Encryption**: [Encryption](#encryption)
* **IncludeIframeOnlyStreams**: bool: <p>When selected, the stream set includes an additional I-frame only stream, along with the other tracks. If false, this extra stream is not included. MediaPackage generates an I-frame only stream from the first rendition in the manifest. The service inserts EXT-I-FRAMES-ONLY tags in the output manifest, and then generates and includes an I-frames only playlist in the stream. This playlist permits player functionality like fast forward and rewind.</p>
* **OutputTimestampMode**: string
* **Scte**: [Scte](#scte)
* **SegmentDurationSeconds**: int: <p>The duration (in seconds) of each segment. Enter a value equal to, or a multiple of, the input segment duration. If the value that you enter is different from the input segment duration, MediaPackage rounds segments to the nearest multiple of the input segment duration.</p>
* **SegmentName**: string: <p>The name that describes the segment. The name is the base name of the segment used in all content manifests inside of the endpoint. You can't use spaces in the name.</p>
* **TsIncludeDvbSubtitles**: bool: <p>By default, MediaPackage excludes all digital video broadcasting (DVB) subtitles from the output. When selected, MediaPackage passes through DVB subtitles into the output.</p>
* **TsUseAudioRenditionGroup**: bool: <p>When selected, MediaPackage bundles all audio tracks in a rendition group. All other tracks in the stream can be used with any audio rendition from the group.</p>

## SpekeKeyProvider
### Properties
* **CertificateArn**: string: <p>The ARN for the certificate that you imported to Amazon Web Services Certificate Manager to add content key encryption to this endpoint. For this feature to work, your DRM key provider must support content key encryption.</p>
* **ContentKeyPeriodConfiguration**: [ContentKeyPeriodConfiguration](#contentkeyperiodconfiguration)
* **DrmSystems**: string[] (Required): <p>The DRM solution provider you're using to protect your content during distribution.</p>
* **EncryptionContractConfiguration**: [EncryptionContractConfiguration](#encryptioncontractconfiguration) (Required)
* **ResourceId**: string (Required): <p>The unique identifier for the content. The service sends this to the key server to identify the current endpoint. How unique you make this depends on how fine-grained you want access controls to be. The service does not permit you to use the same ID for two simultaneous encryption processes. The resource ID is also known as the content ID.</p> <p>The following example shows a resource ID: <code>MovieNight20171126093045</code> </p>
* **RoleArn**: string (Required): <p>The ARN for the IAM role granted by the key provider that provides access to the key provider API. This role must have a trust policy that allows MediaPackage to assume the role, and it must have a sufficient permissions policy to allow access to the specific key retrieval URL. Get this from your DRM solution provider.</p> <p>Valid format: <code>arn:aws:iam::{accountID}:role/{name}</code>. The following example shows a role ARN: <code>arn:aws:iam::444455556666:role/SpekeAccess</code> </p>
* **SpekeVersion**: string
* **Url**: string (Required): <p>The URL of the API Gateway proxy that you set up to talk to your key server. The API Gateway proxy must reside in the same AWS Region as MediaPackage and must start with https://.</p> <p>The following example shows a URL: <code>https://1wm2dx1f33.execute-api.us-west-2.amazonaws.com/SpekeSample/copyProtection</code> </p>

## StartTag
### Properties
* **Precise**: bool: <p>Specify the value for PRECISE within your EXT-X-START tag. Leave blank, or choose false, to use the default value NO. Choose yes to use the value YES.</p>
* **TimeOffset**: int (Required): <p>Specify the value for TIME-OFFSET within your EXT-X-START tag. Enter a signed floating point value which, if positive, must be less than the configured manifest duration minus three times the configured segment target duration. If negative, the absolute value must be larger than three times the configured segment target duration, and the absolute value must be smaller than the configured manifest duration.</p>

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

