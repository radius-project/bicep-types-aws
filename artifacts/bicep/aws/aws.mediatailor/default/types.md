# AWS.MediaTailor @ default

## Resource AWS.MediaTailor/PlaybackConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.MediaTailor/PlaybackConfigurationProperties](#awsmediatailorplaybackconfigurationproperties) (Required): properties of the resource

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
* **Name**: string (Required): The identifier for the playback configuration.
* **PersonalizationThresholdSeconds**: int: Defines the maximum duration of underfilled ad time (in seconds) allowed in an ad break. If the duration of underfilled ad time exceeds the personalization threshold, then the personalization of the ad break is abandoned and the underlying content is shown. This feature applies to ad replacement in live and VOD streams, rather than ad insertion, because it relies on an underlying content stream. For more information about ad break behavior, including ad replacement and insertion, see Ad Behavior in AWS Elemental MediaTailor (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
* **PlaybackConfigurationArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the playback configuration.
* **PlaybackEndpointPrefix**: string (ReadOnly): The URL that the player accesses to get a manifest from MediaTailor. This session will use server-side reporting.
* **SessionInitializationEndpointPrefix**: string (ReadOnly): The URL that the player uses to initialize a session that uses client-side reporting.
* **SlateAdUrl**: string: The URL for a high-quality video asset to transcode and use to fill in time that's not used by ads. AWS Elemental MediaTailor shows the slate to fill in gaps in media content. Configuring the slate is optional for non-VPAID configurations. For VPAID, the slate is required because MediaTailor provides it in the slots that are designated for dynamic ad content. The slate must be a high-quality asset that contains both audio and video.
* **Tags**: [Tag](#tag)[]: The tags to assign to the playback configuration.
* **TranscodeProfileName**: string: The name that is used to associate this playback configuration with a custom transcode profile. This overrides the dynamic transcoding defaults of MediaTailor. Use this only if you have already set up custom profiles with the help of AWS Support.
* **VideoContentSourceUrl**: string (Required): The URL prefix for the parent manifest for the stream, minus the asset ID. The maximum length is 512 characters.

## AvailSuppression
### Properties
* **Mode**: string: Sets the ad suppression mode. By default, ad suppression is set to OFF and all ad breaks are filled with ads or slate. When Mode is set to BEHIND_LIVE_EDGE, ad suppression is active and MediaTailor won't fill ad breaks on or behind the ad suppression Value time in the manifest lookback window.
* **Value**: string: A live edge offset time in HH:MM:SS. MediaTailor won't fill ad breaks on or behind this time in the manifest lookback window. If Value is set to 00:00:00, it is in sync with the live edge, and MediaTailor won't fill any ad breaks on or behind the live edge. If you set a Value time, MediaTailor won't fill any ad breaks on or behind this time in the manifest lookback window. For example, if you set 00:45:00, then MediaTailor will fill ad breaks that occur within 45 minutes behind the live edge, but won't fill ad breaks on or behind 45 minutes behind the live edge.

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

## HlsConfiguration
### Properties
* **ManifestEndpointPrefix**: string (ReadOnly): The URL that is used to initiate a playback session for devices that support Apple HLS. The session uses server-side reporting.

## LivePreRollConfiguration
### Properties
* **AdDecisionServerUrl**: string: The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
* **MaxDurationSeconds**: int: The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.

## ManifestProcessingRules
### Properties
* **AdMarkerPassthrough**: [AdMarkerPassthrough](#admarkerpassthrough): For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest. No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.

## AdMarkerPassthrough
### Properties
* **Enabled**: bool: Enables ad marker passthrough for your configuration.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

