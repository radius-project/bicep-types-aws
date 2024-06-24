# AWS.MediaTailor @ default

## Resource AWS.MediaTailor/Channel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/ChannelProperties](#awsmediatailorchannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/ChannelPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/ChannelPolicyProperties](#awsmediatailorchannelpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/LiveSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/LiveSourceProperties](#awsmediatailorlivesourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/PlaybackConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/PlaybackConfigurationProperties](#awsmediatailorplaybackconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/SourceLocation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/SourceLocationProperties](#awsmediatailorsourcelocationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/VodSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/VodSourceProperties](#awsmediatailorvodsourceproperties) (Required, Identifier): properties of the resource

## AccessConfiguration
### Properties
* **AccessType**: string
* **SecretsManagerAccessTokenConfiguration**: [SecretsManagerAccessTokenConfiguration](#secretsmanageraccesstokenconfiguration)

## AdMarkerPassthrough
### Properties
* **Enabled**: bool: Enables ad marker passthrough for your configuration.

## AvailSuppression
### Properties
* **FillPolicy**: string: Defines the policy to apply to the avail suppression mode. BEHIND_LIVE_EDGE will always use the full avail suppression policy. AFTER_LIVE_EDGE mode can be used to invoke partial ad break fills when a session starts mid-break. Valid values are FULL_AVAIL_ONLY and PARTIAL_AVAIL
* **Mode**: string: Sets the ad suppression mode. By default, ad suppression is off and all ad breaks are filled with ads or slate. When Mode is set to BEHIND_LIVE_EDGE, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window. When Mode is set to AFTER_LIVE_EDGE, ad suppression is active and MediaTailor won't fill ad breaks that are within the live edge plus the avail suppression value.
* **Value**: string: A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.

## AWS.MediaTailor/ChannelPolicyProperties
### Properties
* **ChannelName**: string (Required, Identifier)
* **Policy**: [ChannelPolicy_Policy](#channelpolicypolicy) | string (Required): <p>The IAM policy for the channel. IAM policies are used to control access to your channel.</p>

## AWS.MediaTailor/ChannelProperties
### Properties
* **Arn**: string (ReadOnly): <p>The ARN of the channel.</p>
* **Audiences**: string[]: <p>The list of audiences defined in channel.</p>
* **ChannelName**: string (Required, Identifier)
* **FillerSlate**: [SlateSource](#slatesource)
* **LogConfiguration**: [LogConfigurationForChannel](#logconfigurationforchannel)
* **Outputs**: [RequestOutputItem](#requestoutputitem)[] (Required, WriteOnly): <p>The channel's output properties.</p>
* **PlaybackMode**: string (Required)
* **Tags**: [Tag](#tag)[]: The tags to assign to the channel.
* **Tier**: string
* **TimeShiftConfiguration**: [TimeShiftConfiguration](#timeshiftconfiguration)

## AWS.MediaTailor/LiveSourceProperties
### Properties
* **Arn**: string (ReadOnly): <p>The ARN of the live source.</p>
* **HttpPackageConfigurations**: [HttpPackageConfiguration](#httppackageconfiguration)[] (Required): <p>A list of HTTP package configuration parameters for this live source.</p>
* **LiveSourceName**: string (Required, Identifier)
* **SourceLocationName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags to assign to the live source.

## AWS.MediaTailor/PlaybackConfigurationProperties
### Properties
* **AdDecisionServerUrl**: string (Required): The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
* **AvailSuppression**: [AvailSuppression](#availsuppression): The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see Ad Suppression (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
* **Bumper**: [Bumper](#bumper): The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see Bumpers (https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
* **CdnConfiguration**: [CdnConfiguration](#cdnconfiguration): The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
* **ConfigurationAliases**: [ConfigurationAliases](#configurationaliases): The player parameters and aliases used as dynamic variables during session initialization. For more information, see Domain Variables. 
* **DashConfiguration**: [DashConfiguration](#dashconfiguration): The configuration for DASH content.
* **HlsConfiguration**: [HlsConfiguration](#hlsconfiguration): The configuration for HLS content.
* **LivePreRollConfiguration**: [LivePreRollConfiguration](#liveprerollconfiguration): The configuration for pre-roll ad insertion.
* **ManifestProcessingRules**: [ManifestProcessingRules](#manifestprocessingrules): The configuration for manifest processing rules. Manifest processing rules enable customization of the personalized manifests created by MediaTailor.
* **Name**: string (Required, Identifier): The identifier for the playback configuration.
* **PersonalizationThresholdSeconds**: int: Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to ad replacement in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see Ad Behavior in AWS Elemental MediaTailor (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
* **PlaybackConfigurationArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the playback configuration.
* **PlaybackEndpointPrefix**: string (ReadOnly): The URL that the player accesses to get a manifest from MediaTailor. This session will use server-side reporting.
* **SessionInitializationEndpointPrefix**: string (ReadOnly): The URL that the player uses to initialize a session that uses client-side reporting.
* **SlateAdUrl**: string: The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
* **Tags**: [Tag](#tag)[]: The tags to assign to the playback configuration.
* **TranscodeProfileName**: string: The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
* **VideoContentSourceUrl**: string (Required): The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.

## AWS.MediaTailor/SourceLocationProperties
### Properties
* **AccessConfiguration**: [AccessConfiguration](#accessconfiguration)
* **Arn**: string (ReadOnly): <p>The ARN of the source location.</p>
* **DefaultSegmentDeliveryConfiguration**: [DefaultSegmentDeliveryConfiguration](#defaultsegmentdeliveryconfiguration)
* **HttpConfiguration**: [HttpConfiguration](#httpconfiguration) (Required)
* **SegmentDeliveryConfigurations**: [SegmentDeliveryConfiguration](#segmentdeliveryconfiguration)[]: <p>A list of the segment delivery configurations associated with this resource.</p>
* **SourceLocationName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags to assign to the source location.

## AWS.MediaTailor/VodSourceProperties
### Properties
* **Arn**: string (ReadOnly): <p>The ARN of the VOD source.</p>
* **HttpPackageConfigurations**: [HttpPackageConfiguration](#httppackageconfiguration)[] (Required): <p>A list of HTTP package configuration parameters for this VOD source.</p>
* **SourceLocationName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags to assign to the VOD source.
* **VodSourceName**: string (Required, Identifier)

## Bumper
### Properties
* **EndUrl**: string: The URL for the end bumper asset.
* **StartUrl**: string: The URL for the start bumper asset.

## CdnConfiguration
### Properties
* **AdSegmentUrlPrefix**: string: A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.&lt;region>.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.
* **ContentSegmentUrlPrefix**: string: A content delivery network (CDN) to cache content segments, so that content requests don't always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.

## ConfigurationAliases
### Properties

## DashConfiguration
### Properties
* **ManifestEndpointPrefix**: string (ReadOnly): The URL generated by MediaTailor to initiate a DASH playback session. The session uses server-side reporting.
* **MpdLocation**: string: The setting that controls whether MediaTailor includes the Location tag in DASH manifests. MediaTailor populates the Location tag with the URL for manifest update requests, to be used by players that don't support sticky redirects. Disable this if you have CDN routing rules set up for accessing MediaTailor manifests, and you are either using client-side reporting or your players support sticky HTTP redirects. Valid values are DISABLED and EMT_DEFAULT. The EMT_DEFAULT setting enables the inclusion of the tag and is the default value.
* **OriginManifestType**: string: The setting that controls whether MediaTailor handles manifests from the origin server as multi-period manifests or single-period manifests. If your origin server produces single-period manifests, set this to SINGLE_PERIOD. The default setting is MULTI_PERIOD. For multi-period manifests, omit this setting or set it to MULTI_PERIOD.

## DashPlaylistSettings
### Properties
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>
* **MinBufferTimeSeconds**: int: <p>Minimum amount of content (measured in seconds) that a player must keep available in the buffer. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
* **MinUpdatePeriodSeconds**: int: <p>Minimum amount of time (in seconds) that the player should wait before requesting updates to the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>
* **SuggestedPresentationDelaySeconds**: int: <p>Amount of time (in seconds) that the player should be from the live point at the end of the manifest. Minimum value: <code>2</code> seconds. Maximum value: <code>60</code> seconds.</p>

## DefaultSegmentDeliveryConfiguration
### Properties
* **BaseUrl**: string: <p>The hostname of the server that will be used to serve segments. This string must include the protocol, such as <b>https://</b>.</p>

## HlsConfiguration
### Properties
* **ManifestEndpointPrefix**: string (ReadOnly): The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.

## HlsPlaylistSettings
### Properties
* **AdMarkupType**: string[]: <p>Determines the type of SCTE 35 tags to use in ad markup. Specify <code>DATERANGE</code> to use <code>DATERANGE</code> tags (for live or VOD content). Specify <code>SCTE35_ENHANCED</code> to use <code>EXT-X-CUE-OUT</code> and <code>EXT-X-CUE-IN</code> tags (for VOD content only).</p>
* **ManifestWindowSeconds**: int: <p>The total duration (in seconds) of each manifest. Minimum value: <code>30</code> seconds. Maximum value: <code>3600</code> seconds.</p>

## HttpConfiguration
### Properties
* **BaseUrl**: string (Required): <p>The base URL for the source location host server. This string must include the protocol, such as <b>https://</b>.</p>

## HttpPackageConfiguration
### Properties
* **Path**: string (Required): <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
* **SourceGroup**: string (Required): <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
* **Type**: string (Required)

## HttpPackageConfiguration
### Properties
* **Path**: string (Required): <p>The relative path to the URL for this VOD source. This is combined with <code>SourceLocation::HttpConfiguration::BaseUrl</code> to form a valid URL.</p>
* **SourceGroup**: string (Required): <p>The name of the source group. This has to match one of the <code>Channel::Outputs::SourceGroup</code>.</p>
* **Type**: string (Required)

## LivePreRollConfiguration
### Properties
* **AdDecisionServerUrl**: string: The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
* **MaxDurationSeconds**: int: The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.

## LogConfigurationForChannel
### Properties
* **LogTypes**: string[]: <p>The log types.</p>

## ManifestProcessingRules
### Properties
* **AdMarkerPassthrough**: [AdMarkerPassthrough](#admarkerpassthrough): For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest. No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.

## RequestOutputItem
### Properties
* **DashPlaylistSettings**: [DashPlaylistSettings](#dashplaylistsettings)
* **HlsPlaylistSettings**: [HlsPlaylistSettings](#hlsplaylistsettings)
* **ManifestName**: string (Required): <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
* **SourceGroup**: string (Required): <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>

## SecretsManagerAccessTokenConfiguration
### Properties
* **HeaderName**: string: <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
* **SecretArn**: string: <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
* **SecretStringKey**: string: <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>

## SegmentDeliveryConfiguration
### Properties
* **BaseUrl**: string: <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
* **Name**: string: <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>

## SlateSource
### Properties
* **SourceLocationName**: string: <p>The name of the source location where the slate VOD source is stored.</p>
* **VodSourceName**: string: <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>

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

## TimeShiftConfiguration
### Properties
* **MaxTimeDelaySeconds**: int (Required): <p>The maximum time delay for time-shifted viewing. The minimum allowed maximum time delay is 0 seconds, and the maximum allowed maximum time delay is 21600 seconds (6 hours).</p>

