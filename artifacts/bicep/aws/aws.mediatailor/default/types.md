# AWS.MediaTailor @ default

## Resource AWS.MediaTailor/Channel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/ChannelProperties](#awsmediatailorchannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/ChannelPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/ChannelPolicyProperties](#awsmediatailorchannelpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/Function@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/FunctionProperties](#awsmediatailorfunctionproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/LiveSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/LiveSourceProperties](#awsmediatailorlivesourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/PlaybackConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/PlaybackConfigurationProperties](#awsmediatailorplaybackconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/PrefetchSchedule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/PrefetchScheduleProperties](#awsmediatailorprefetchscheduleproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/Program@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/ProgramProperties](#awsmediatailorprogramproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/SourceLocation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/SourceLocationProperties](#awsmediatailorsourcelocationproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaTailor/VodSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaTailor/VodSourceProperties](#awsmediatailorvodsourceproperties) (Required, Identifier): properties of the resource

## AccessConfiguration
### Properties
* **AccessType**: string
* **SecretsManagerAccessTokenConfiguration**: [SecretsManagerAccessTokenConfiguration](#secretsmanageraccesstokenconfiguration)

## AdBreak
### Properties
* **AdBreakMetadata**: [KeyValuePair](#keyvaluepair)[]: Defines a list of key/value pairs that MediaTailor generates within the EXT-X-ASSET tag for SCTE35_ENHANCED output.
* **MessageType**: string: The SCTE-35 ad insertion type.
* **OffsetMillis**: int (Required): How long (in milliseconds) after the beginning of the program that an ad starts.
* **Slate**: [SlateSource](#slatesource)
* **SpliceInsertMessage**: [SpliceInsertMessage](#spliceinsertmessage)
* **TimeSignalMessage**: [TimeSignalMessage](#timesignalmessage)

## AdConditioningConfiguration
### Properties
* **StreamingMediaFileConditioning**: string (Required)

## AdDecisionServerConfiguration
### Properties
* **HttpRequest**: [HttpRequest](#httprequest)
* **VastResponse**: [VastResponse](#vastresponse)

## AdDecisionServerConfigurationHttpHeaders
### Properties

## AdMarkerPassthrough
### Properties
* **Enabled**: bool: Enables ad marker passthrough for your configuration.

## AdsInteractionLog
### Properties
* **ExcludeEventTypes**: string[]: Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration.
* **PublishOptInEventTypes**: string[]: Indicates that MediaTailor emits RAW_ADS_RESPONSE logs for playback sessions that are initialized with this configuration.

## AdsPersonalizationConcurrency
### Properties
* **EnableVodVastParallelization**: bool: Enables parallel processing of ADS requests in VOD workflows when the ADS returns VAST responses. The default is false.
* **MaxConcurrentAdsRequests**: int: The maximum number of simultaneous requests that MediaTailor makes to the ADS for each manifest request. The default is 1.

## AdsPersonalizationTimeouts
### Properties
* **AdsRequestTimeoutMilliseconds**: int: The maximum time, in milliseconds, that MediaTailor waits for a single ADS response during live or VOD playback. The default is 3000.
* **LiveMaximumAdsPersonalizationTimeMilliseconds**: int: The maximum total time, in milliseconds, that MediaTailor spends on ADS activity for live manifests. The default is 10000.
* **PrefetchAdsRequestTimeoutMilliseconds**: int: The maximum time, in milliseconds, that MediaTailor waits for a single ADS response during prefetch retrieval. If not set, MediaTailor uses the AdsRequestTimeoutMilliseconds value.
* **PrefetchMaximumAdsPersonalizationTimeMilliseconds**: int: The maximum total time, in milliseconds, that MediaTailor spends on ADS activity during prefetch retrieval.
* **VodMaximumAdsPersonalizationTimeMilliseconds**: int: The maximum total time, in milliseconds, that MediaTailor spends on ADS activity for VOD manifests. The default is 10000.

## AlternateMedia
### Properties
* **AdBreaks**: [AdBreak](#adbreak)[]: Ad break configuration parameters defined in AlternateMedia.
* **ClipRange**: [ClipRange](#cliprange)
* **DurationMillis**: int: The duration of the alternateMedia in milliseconds.
* **LiveSourceName**: string: The name of the live source for alternateMedia.
* **ScheduledStartTimeMillis**: int: The date and time that the alternateMedia is scheduled to start, in epoch milliseconds.
* **SourceLocationName**: string: The name of the source location for alternateMedia.
* **VodSourceName**: string: The name of the VOD source for alternateMedia.

## AudienceMedia
### Properties
* **AlternateMedia**: [AlternateMedia](#alternatemedia)[]: The list of AlternateMedia defined in AudienceMedia.
* **Audience**: string: The Audience defined in AudienceMedia.

## AvailMatchingCriteria
### Properties
* **DynamicVariable**: string (Required): The dynamic variable(s) that MediaTailor should use as avail matching criteria.
* **Operator**: string (Required): For the DynamicVariable specified in AvailMatchingCriteria, the Operator that is used for the comparison.

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
* **Outputs**: [RequestOutputItem](#requestoutputitem)[] (Required): <p>The channel's output properties.</p>
* **PlaybackMode**: string (Required)
* **Tags**: [Tag](#tag)[]: The tags to assign to the channel.
* **Tier**: string
* **TimeShiftConfiguration**: [TimeShiftConfiguration](#timeshiftconfiguration)

## AWS.MediaTailor/FunctionProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the function.
* **AwsServiceRequestConfiguration**: [AwsServiceRequestConfiguration](#awsservicerequestconfiguration)
* **ConcurrentExecutorConfiguration**: [ConcurrentExecutorConfiguration](#concurrentexecutorconfiguration): The configuration for a CONCURRENT_EXECUTOR function. Required when FunctionType is CONCURRENT_EXECUTOR.
* **CustomOutputConfiguration**: [CustomOutputConfiguration](#customoutputconfiguration)
* **Description**: string: A description of the function.
* **FunctionId**: string (Required, Identifier): The unique identifier for the function.
* **FunctionType**: string (Required): The type of the function. Determines which configuration object is used.
* **HttpRequestConfiguration**: [HttpRequestConfiguration](#httprequestconfiguration)
* **SequentialExecutorConfiguration**: [SequentialExecutorConfiguration](#sequentialexecutorconfiguration)
* **Tags**: [Tag](#tag)[]: The tags to assign to the function resource.
* **VastRequestConfiguration**: [VastRequestConfiguration](#vastrequestconfiguration)

## AWS.MediaTailor/LiveSourceProperties
### Properties
* **Arn**: string (ReadOnly): <p>The ARN of the live source.</p>
* **HttpPackageConfigurations**: [HttpPackageConfiguration](#httppackageconfiguration)[] (Required): <p>A list of HTTP package configuration parameters for this live source.</p>
* **LiveSourceName**: string (Required, Identifier)
* **SourceLocationName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: The tags to assign to the live source.

## AWS.MediaTailor/PlaybackConfigurationProperties
### Properties
* **AdConditioningConfiguration**: [AdConditioningConfiguration](#adconditioningconfiguration)
* **AdDecisionServerConfiguration**: [AdDecisionServerConfiguration](#addecisionserverconfiguration)
* **AdDecisionServerUrl**: string (Required): The URL for the ad decision server (ADS). This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing you can provide a static VAST URL. The maximum length is 25,000 characters.
* **AdsPersonalizationConcurrency**: [AdsPersonalizationConcurrency](#adspersonalizationconcurrency): The settings that control how many concurrent requests MediaTailor makes to the ad decision server (ADS).
* **AdsPersonalizationTimeouts**: [AdsPersonalizationTimeouts](#adspersonalizationtimeouts): The ad decision server (ADS) request timeouts and personalization time budgets for live, VOD, and prefetch workflows.
* **AvailSuppression**: [AvailSuppression](#availsuppression): The configuration for avail suppression, also known as ad suppression. For more information about ad suppression, see Ad Suppression (https://docs.aws.amazon.com/mediatailor/latest/ug/ad-behavior.html).
* **BeaconingConfiguration**: [BeaconingConfiguration](#beaconingconfiguration): The beaconing configuration for this playback configuration, which controls whether AWS Elemental MediaTailor includes beacons of its own in the ad tracking response. If you omit this setting, MediaTailor uses INSIGHTS.
* **Bumper**: [Bumper](#bumper): The configuration for bumpers. Bumpers are short audio or video clips that play at the start or before the end of an ad break. To learn more about bumpers, see Bumpers (https://docs.aws.amazon.com/mediatailor/latest/ug/bumpers.html).
* **CdnConfiguration**: [CdnConfiguration](#cdnconfiguration): The configuration for using a content delivery network (CDN), like Amazon CloudFront, for content and ad segment management.
* **ConfigurationAliases**: [ConfigurationAliases](#configurationaliases): The player parameters and aliases used as dynamic variables during session initialization. For more information, see Domain Variables. 
* **DashConfiguration**: [DashConfiguration](#dashconfiguration): The configuration for DASH content.
* **FunctionMapping**: [PlaybackConfiguration_FunctionMapping](#playbackconfigurationfunctionmapping): A map of event names to function identifiers for custom processing during session lifecycle events.
* **HlsConfiguration**: [HlsConfiguration](#hlsconfiguration): The configuration for HLS content.
* **InsertionMode**: string: The setting that controls whether players can use stitched or guided ad insertion. The default, STITCHED_ONLY, forces all player sessions to use stitched (server-side) ad insertion. Choosing PLAYER_SELECT allows players to select either stitched or guided ad insertion at session-initialization time. The default for players that do not specify an insertion mode is stitched.
* **LivePreRollConfiguration**: [LivePreRollConfiguration](#liveprerollconfiguration): The configuration for pre-roll ad insertion.
* **LogConfiguration**: [LogConfiguration](#logconfiguration): The configuration that defines where AWS Elemental MediaTailor sends logs for the playback configuration.
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

## AWS.MediaTailor/PrefetchScheduleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the prefetch schedule.
* **Consumption**: [PrefetchConsumption](#prefetchconsumption)
* **Name**: string (Required): The name to assign to the prefetch schedule.
* **PlaybackConfigurationName**: string (Required): The name of the playback configuration.
* **RecurringPrefetchConfiguration**: [RecurringPrefetchConfiguration](#recurringprefetchconfiguration)
* **Retrieval**: [PrefetchRetrieval](#prefetchretrieval)
* **ScheduleType**: string: The frequency that MediaTailor creates prefetch schedules.
* **StreamId**: string: An optional stream identifier that MediaTailor uses to prefetch ads for multiple streams that use the same playback configuration.
* **Tags**: [Tag](#tag)[]: The tags assigned to the prefetch schedule.

## AWS.MediaTailor/ProgramProperties
### Properties
* **AdBreaks**: [AdBreak](#adbreak)[]: The ad break configuration settings.
* **Arn**: string (ReadOnly, Identifier): The ARN of the program.
* **AudienceMedia**: [AudienceMedia](#audiencemedia)[]: The list of AudienceMedia defined in program.
* **ChannelName**: string (Required): The name of the channel for this Program.
* **ClipRange**: [ClipRange](#cliprange) (ReadOnly): The clip range configuration settings.
* **CreationTime**: string (ReadOnly): The timestamp of when the program was created.
* **DurationMillis**: int (ReadOnly): The duration of the live program in milliseconds.
* **LiveSourceName**: string: The name of the LiveSource for this Program.
* **ProgramName**: string (Required): The name of the Program.
* **ScheduleConfiguration**: [ScheduleConfiguration](#scheduleconfiguration) (WriteOnly): The schedule configuration settings.
* **ScheduledStartTime**: string (ReadOnly): The date and time that the program is scheduled to start.
* **SourceLocationName**: string (Required): The name of the source location.
* **VodSourceName**: string: The name that's used to refer to a VOD source.

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

## AwsServiceRequestConfiguration
### Properties
* **Body**: string: An expression that evaluates to the request body for the AWS service API call. The body must conform to the input format that the target service operation expects. Applies only when the target operation accepts a request body. The maximum size after evaluation is 64 KB.
* **Cache**: [HttpRequestCacheConfiguration](#httprequestcacheconfiguration): The optional response-caching configuration for the function. When present, MediaTailor caches the responses that the function receives from the AWS service, within the time-to-live (TTL) bounds that you specify. Omit this configuration to disable response caching.
* **Headers**: [Function_Headers](#functionheaders): A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request to the AWS service. Use this to pass any headers required by the target service operation. You can include a maximum of 50 headers.
* **MethodType**: string (Required)
* **Output**: [Function_Output](#functionoutput): A map of output bindings. Each key is a namespaced output path, such as player_params.device_type. Each value is an expression that MediaTailor evaluates at runtime and can reference the response object from the target service. For more information, see JSONata expression reference (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the MediaTailor User Guide.
* **RequestTimeoutMilliseconds**: int (Required): The maximum time, in milliseconds, that MediaTailor waits for a response from the AWS service. If the call exceeds this timeout, MediaTailor sets the response status code to null and proceeds with output expression evaluation. Valid values are 100 to 2000.
* **Runtime**: string (Required)
* **TargetRegion**: string (Required): The AWS Region for the target service. Specify a static Region code (for example, us-east-1) or a JSONata expression that resolves to a Region code at runtime (for example, {%inference.region%}).
* **TargetService**: string (Required): The AWS service to call. Valid value: elemental-inference (AWS Elemental Inference).
* **Url**: string (Required): An expression that evaluates to the endpoint URL for the target AWS service API operation. Use {%...%} delimiters for dynamic expressions. The URL must correspond to a valid endpoint for the service specified in TargetService. The maximum length after evaluation is 2,048 characters.

## BeaconingConfiguration
### Properties
* **ClientSide**: [ClientSideBeaconingConfiguration](#clientsidebeaconingconfiguration): The beaconing settings for client-side reporting sessions. If you omit this object, MediaTailor uses INSIGHTS reporting mode.

## Bumper
### Properties
* **EndUrl**: string: The URL for the end bumper asset.
* **StartUrl**: string: The URL for the start bumper asset.

## CdnConfiguration
### Properties
* **AdSegmentUrlPrefix**: string: A non-default content delivery network (CDN) to serve ad segments. By default, AWS Elemental MediaTailor uses Amazon CloudFront with default cache settings as its CDN for ad segments. To set up an alternate CDN, create a rule in your CDN for the origin ads.mediatailor.&lt;region>.amazonaws.com. Then specify the rule's name in this AdSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for ad segments.
* **ContentSegmentUrlPrefix**: string: A content delivery network (CDN) to cache content segments, so that content requests don't always have to go to the origin server. First, create a rule in your CDN for the content segment origin server. Then specify the rule's name in this ContentSegmentUrlPrefix. When AWS Elemental MediaTailor serves a manifest, it reports your CDN as the source for content segments.

## ClientSideBeaconingConfiguration
### Properties
* **AdditionalEventTypes**: string[]: The player operation events to report on, in addition to the ad progress events that MediaTailor always reports on. Valid values are MUTE, UNMUTE, PAUSE, and SKIP. The default is an empty list. This parameter is valid only when ReportingMode is INSIGHTS. MediaTailor rejects the request if you specify a value while ReportingMode is DISABLED, or if you specify duplicate values.
* **ReportingMode**: string (Required): Specifies whether MediaTailor includes its beacons in the ad tracking response. INSIGHTS includes MediaTailor beacons; DISABLED does not. Values are case-sensitive. This setting is required when ClientSide is present. If BeaconingConfiguration or ClientSide is omitted, MediaTailor uses INSIGHTS. To keep beaconing off, retain DISABLED in subsequent updates.

## ClipRange
### Properties
* **EndOffsetMillis**: int: The end offset of the clip range, in milliseconds.
* **StartOffsetMillis**: int: The start offset of the clip range, in milliseconds.

## ConcurrentExecutorConfiguration
### Properties
* **FunctionList**: [FunctionRef](#functionref)[] (Required): The list of 1 to 10 child functions that MediaTailor runs in parallel. Each entry specifies a child function to execute and an optional run condition expression that controls whether the function runs. Child functions cannot themselves be executors, and each child function's resolved namespace must be unique across the list.
* **MaxConcurrency**: int (Required): The maximum number of child functions that MediaTailor runs simultaneously. When the list contains more functions than MaxConcurrency, MediaTailor starts additional functions as running ones complete, so that no more than MaxConcurrency functions run at the same time. Valid values are 1 to 2.
* **Output**: [Function_Output](#functionoutput) (Required): A map of output bindings that controls which bindings the executor commits to the session state after all child functions complete. Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the combined results of the child functions.
* **Runtime**: string (Required)
* **TimeoutMilliseconds**: int (Required): The maximum time, in milliseconds, for all child functions to complete. This timeout covers every function in the list, including any HTTP calls the child functions make. If the executor exceeds this timeout, MediaTailor discards all output from the executor and proceeds with default behavior. Valid values are 100 to 2000.

## ConfigurationAliases
### Properties

## CustomOutputConfiguration
### Properties
* **Output**: [StringMap](#stringmap): A map of output key-value pairs that define the custom output.
* **Runtime**: string (Required): The runtime environment for the function expression language.

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

## Function_Headers
### Properties

## Function_Headers
### Properties

## Function_Output
### Properties

## Function_Output
### Properties

## Function_Output
### Properties

## Function_Output
### Properties

## FunctionRef
### Properties
* **Alias**: string: An optional alternate name for the child function within the executor. MediaTailor uses this value as the namespace for the child function's output. If omitted, MediaTailor uses the function identifier. The resolved namespace must be unique across all child functions in the list.
* **FunctionId**: string (Identifier): The identifier of the child function to execute.
* **RunCondition**: string: An optional expression that evaluates to a boolean. MediaTailor evaluates this expression immediately before running the child function, using the accumulated state at that point. If the expression evaluates to false, MediaTailor skips the child function. If omitted, the child function always runs.

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

## HttpRequest
### Properties
* **Body**: string: The body of the request to the Ad Decision Server URL. The maximum length is 100,000 characters.
* **CompressRequest**: string: The compression type of the request sent to the Ad Decision Server URL. Only the POST HTTP Method permits compression other than NONE.
* **Headers**: [AdDecisionServerConfigurationHttpHeaders](#addecisionserverconfigurationhttpheaders)
* **HttpMethod**: string: Supported HTTP Methods for the request to the Ad Decision Server URL.

## HttpRequestCacheConfiguration
### Properties
* **Key**: string: A JSONata expression that MediaTailor evaluates to a custom cache key. By default, the cache key is a hash of the HTTP URL, request body, and HTTP method; request headers are not included. The evaluated key must be smaller than 1 KB.
* **TtlMaximumSeconds**: int (Required): The upper bound, in seconds, on how long MediaTailor caches a response. This value must be greater than or equal to TtlMinimumSeconds.
* **TtlMinimumSeconds**: int (Required): The lower bound, in seconds, on how long MediaTailor caches a response. MediaTailor also uses this value as the cache duration when a response has no Cache-Control max-age directive.

## HttpRequestConfiguration
### Properties
* **Body**: string: The body of the HTTP request.
* **Cache**: [HttpRequestCacheConfiguration](#httprequestcacheconfiguration): The optional response-caching configuration for the function. When present, MediaTailor caches the responses that the function receives from the HTTP endpoint, within the time-to-live (TTL) bounds that you specify. Omit this configuration to disable response caching.
* **Headers**: [StringMap](#stringmap): A map of HTTP headers to include in the request.
* **MethodType**: string (Required): The HTTP method type for the request.
* **Output**: [StringMap](#stringmap): A map of output key-value pairs. Keys must start with session., temp., avail., scte., or be a valid adsRequest directive.
* **RequestTimeoutMilliseconds**: int (Required): The timeout in milliseconds for the HTTP request. Maximum value is 2000.
* **Runtime**: string (Required): The runtime environment for the function expression language.
* **Url**: string (Required): The URL endpoint for the HTTP request.

## KeyValuePair
### Properties
* **Key**: string (Required): The key.
* **Value**: string (Required): The value.

## LivePreRollConfiguration
### Properties
* **AdDecisionServerConfiguration**: [PreRollAdDecisionServerConfiguration](#prerolladdecisionserverconfiguration)
* **AdDecisionServerUrl**: string: The URL for the ad decision server (ADS) for pre-roll ads. This includes the specification of static parameters and placeholders for dynamic parameters. AWS Elemental MediaTailor substitutes player-specific and session-specific parameters as needed when calling the ADS. Alternately, for testing, you can provide a static VAST URL. The maximum length is 25,000 characters.
* **MaxDurationSeconds**: int: The maximum allowed duration for the pre-roll ad avail. AWS Elemental MediaTailor won't play pre-roll ads to exceed this duration, regardless of the total duration of ads that the ADS returns.

## LogConfiguration
### Properties
* **AdsInteractionLog**: [AdsInteractionLog](#adsinteractionlog): The event types that MediaTailor emits in logs for interactions with the ADS.
* **EnabledLoggingStrategies**: string[]: The method used for collecting logs from AWS Elemental MediaTailor. To configure MediaTailor to send logs directly to Amazon CloudWatch Logs, choose LEGACY_CLOUDWATCH. To configure MediaTailor to send logs to CloudWatch, which then vends the logs to your destination of choice, choose VENDED_LOGS. Supported destinations are CloudWatch Logs log group, Amazon S3 bucket, and Amazon Data Firehose stream. To use vended logs, you must configure the delivery destination in Amazon CloudWatch
* **ManifestServiceInteractionLog**: [ManifestServiceInteractionLog](#manifestserviceinteractionlog): The event types that MediaTailor emits in logs for interactions with the origin server.
* **PercentEnabled**: int (Required): The percentage of session logs that MediaTailor sends to your CloudWatch Logs account. For example, if your playback configuration has 1000 sessions and percentEnabled is set to 60, MediaTailor sends logs for 600 of the sessions to CloudWatch Logs. MediaTailor decides at random which of the playback configuration sessions to send logs for. If you want to view logs for a specific session, you can use the debug log mode.

## LogConfigurationForChannel
### Properties
* **LogTypes**: string[]: <p>The log types.</p>

## ManifestProcessingRules
### Properties
* **AdMarkerPassthrough**: [AdMarkerPassthrough](#admarkerpassthrough): For HLS, when set to true, MediaTailor passes through EXT-X-CUE-IN, EXT-X-CUE-OUT, and EXT-X-SPLICEPOINT-SCTE35 ad markers from the origin manifest to the MediaTailor personalized manifest. No logic is applied to these ad markers. For example, if EXT-X-CUE-OUT has a value of 60, but no ads are filled for that ad break, MediaTailor will not set the value to 0.

## ManifestServiceInteractionLog
### Properties
* **ExcludeEventTypes**: string[]: Indicates that MediaTailor won't emit the selected events in the logs for playback sessions that are initialized with this configuration.

## PlaybackConfiguration_FunctionMapping
### Properties

## PrefetchConsumption
### Properties
* **AvailMatchingCriteria**: [AvailMatchingCriteria](#availmatchingcriteria)[]: If you only want MediaTailor to insert prefetched ads into avails that match specific dynamic variables, set the avail matching criteria.
* **EndTime**: string (Required): The time when MediaTailor no longer considers the prefetched ads for use in an ad break, as an ISO 8601 date-time.
* **StartTime**: string: The time when prefetched ads are considered for use in an ad break, as an ISO 8601 date-time.

## PrefetchRetrieval
### Properties
* **DynamicVariables**: [PrefetchSchedule_DynamicVariables](#prefetchscheduledynamicvariables): The dynamic variables to use for substitution during prefetch requests to the ad decision server (ADS).
* **EndTime**: string (Required): The time when prefetch retrieval ends for the ad break, as an ISO 8601 date-time.
* **StartTime**: string: The time when prefetch retrievals can start for this break, as an ISO 8601 date-time.
* **TrafficShapingRetrievalWindow**: [TrafficShapingRetrievalWindow](#trafficshapingretrievalwindow)
* **TrafficShapingTpsConfiguration**: [TrafficShapingTpsConfiguration](#trafficshapingtpsconfiguration)
* **TrafficShapingType**: string: Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

## PrefetchSchedule_DynamicVariables
### Properties

## PrefetchSchedule_DynamicVariables
### Properties

## PreRollAdDecisionServerConfiguration
### Properties
* **VastResponse**: [PreRollVastResponse](#prerollvastresponse)

## PreRollVastResponse
### Properties
* **AdSequencingMode**: string: Determines how MediaTailor sequences ads returned in the pre-roll VAST response.

## RecurringConsumption
### Properties
* **AvailMatchingCriteria**: [AvailMatchingCriteria](#availmatchingcriteria)[]: The configuration for the dynamic variables that determine which ad breaks that MediaTailor inserts prefetched ads in.
* **RetrievedAdExpirationSeconds**: int: The number of seconds that an ad is available for insertion after it was prefetched.

## RecurringPrefetchConfiguration
### Properties
* **EndTime**: string (Required): The end time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.
* **RecurringConsumption**: [RecurringConsumption](#recurringconsumption) (Required)
* **RecurringRetrieval**: [RecurringRetrieval](#recurringretrieval) (Required)
* **StartTime**: string: The start time for the window that MediaTailor prefetches and inserts ads in a live event, as an ISO 8601 date-time.

## RecurringRetrieval
### Properties
* **DelayAfterAvailEndSeconds**: int: The number of seconds that MediaTailor waits after an ad avail before prefetching ads for the next avail.
* **DynamicVariables**: [PrefetchSchedule_DynamicVariables](#prefetchscheduledynamicvariables): The dynamic variables to use for substitution during prefetch requests to the ADS.
* **TrafficShapingRetrievalWindow**: [TrafficShapingRetrievalWindow](#trafficshapingretrievalwindow)
* **TrafficShapingTpsConfiguration**: [TrafficShapingTpsConfiguration](#trafficshapingtpsconfiguration)
* **TrafficShapingType**: string: Indicates the type of traffic shaping used to limit the number of requests to the ADS at one time.

## RequestOutputItem
### Properties
* **DashPlaylistSettings**: [DashPlaylistSettings](#dashplaylistsettings)
* **HlsPlaylistSettings**: [HlsPlaylistSettings](#hlsplaylistsettings)
* **ManifestName**: string (Required): <p>The name of the manifest for the channel. The name appears in the <code>PlaybackUrl</code>.</p>
* **SourceGroup**: string (Required): <p>A string used to match which <code>HttpPackageConfiguration</code> is used for each <code>VodSource</code>.</p>

## ScheduleConfiguration
### Properties
* **ClipRange**: [ClipRange](#cliprange)
* **Transition**: [Transition](#transition) (Required)

## SecretsManagerAccessTokenConfiguration
### Properties
* **HeaderName**: string: <p>The name of the HTTP header used to supply the access token in requests to the source location.</p>
* **SecretArn**: string: <p>The Amazon Resource Name (ARN) of the AWS Secrets Manager secret that contains the access token.</p>
* **SecretStringKey**: string: <p>The AWS Secrets Manager <a href="https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_CreateSecret.html#SecretsManager-CreateSecret-request-SecretString.html">SecretString</a> key associated with the access token. MediaTailor uses the key to look up SecretString key and value pair containing the access token.</p>

## SegmentationDescriptor
### Properties
* **SegmentationEventId**: int: The Event Identifier to assign.
* **SegmentationTypeId**: int: The Type Identifier to assign.
* **SegmentationUpid**: string: The Upid to assign.
* **SegmentationUpidType**: int: The Upid Type to assign.
* **SegmentNum**: int: The segment number to assign.
* **SegmentsExpected**: int: The number of segments expected.
* **SubSegmentNum**: int: The sub-segment number to assign.
* **SubSegmentsExpected**: int: The number of sub-segments expected.

## SegmentDeliveryConfiguration
### Properties
* **BaseUrl**: string: <p>The base URL of the host or path of the segment delivery server that you're using to serve segments. This is typically a content delivery network (CDN). The URL can be absolute or relative. To use an absolute URL include the protocol, such as <code>https://example.com/some/path</code>. To use a relative URL specify the relative path, such as <code>/some/path*</code>.</p>
* **Name**: string: <p>A unique identifier used to distinguish between multiple segment delivery configurations in a source location.</p>

## SequentialExecutorConfiguration
### Properties
* **FunctionList**: [FunctionRef](#functionref)[] (Required): An ordered list of 1 to 10 steps. Each step specifies a child function to execute and an optional run condition expression that controls whether the step runs. MediaTailor executes the steps in order, passing data between steps through temporary data. Each step's resolved namespace must be unique across the list.
* **Output**: [Function_Output](#functionoutput): A map of output bindings that controls which bindings the sequence commits to the session state after all steps complete. Each key is a namespaced output path, and each value is an expression that MediaTailor evaluates against the accumulated results of the steps.
* **Runtime**: string (Required)
* **TimeoutMilliseconds**: int (Required): The maximum time, in milliseconds, for the entire sequence to complete. This timeout covers all steps, including any HTTP calls made by child functions. If the sequence exceeds this timeout, MediaTailor discards all output from the sequence and proceeds with default behavior. Valid values are 100 to 2000.

## SlateSource
### Properties
* **SourceLocationName**: string: <p>The name of the source location where the slate VOD source is stored.</p>
* **VodSourceName**: string: <p>The slate VOD source name. The VOD source must already exist in a source location before it can be used for slate.</p>

## SlateSource
### Properties
* **SourceLocationName**: string: The name of the source location where the slate VOD source is stored.
* **VodSourceName**: string: The slate VOD source name.

## SpliceInsertMessage
### Properties
* **AvailNum**: int: This is written to splice_insert.avail_num.
* **AvailsExpected**: int: This is written to splice_insert.avails_expected.
* **SpliceEventId**: int: This is written to splice_insert.splice_event_id.
* **UniqueProgramId**: int: This is written to splice_insert.unique_program_id.

## StringMap
### Properties

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

## TimeSignalMessage
### Properties
* **SegmentationDescriptors**: [SegmentationDescriptor](#segmentationdescriptor)[]: The configurations for the SCTE-35 segmentation_descriptor message(s).

## TrafficShapingRetrievalWindow
### Properties
* **RetrievalWindowDurationSeconds**: int: The amount of time, in seconds, that MediaTailor spreads prefetch requests to the ADS.

## TrafficShapingTpsConfiguration
### Properties
* **PeakConcurrentUsers**: int: The expected peak number of concurrent viewers for your content.
* **PeakTps**: int: The maximum number of transactions per second (TPS) that your ad decision server (ADS) can handle.

## Transition
### Properties
* **DurationMillis**: int: The duration of the live program in seconds.
* **RelativePosition**: string (Required): The position where this program will be inserted relative to the RelativePosition.
* **RelativeProgram**: string: The name of the program that this program will be inserted next to.
* **ScheduledStartTimeMillis**: int: The date and time that the program is scheduled to start, in epoch milliseconds.
* **Type**: string (Required): Defines when the program plays in the schedule. You can set the value to ABSOLUTE or RELATIVE.

## VastRequestConfiguration
### Properties
* **Body**: string: An expression that evaluates to the request body, for example to send an OpenRTB bid request. The expression can be up to 100,000 characters, and the body after evaluation can be up to 64 KB.
* **Cache**: [HttpRequestCacheConfiguration](#httprequestcacheconfiguration): The optional response-caching configuration for the function. When present, MediaTailor caches the responses that the function receives from the HTTP endpoint, within the time-to-live (TTL) bounds that you specify. Omit this configuration to disable response caching.
* **Headers**: [Function_Headers](#functionheaders): A map of HTTP header names to expression values. MediaTailor evaluates each header value expression at runtime and includes the result in the outbound request. Headers beginning with X-Amz- are reserved by the service, and method override headers are not allowed.
* **MethodType**: string (Required)
* **Output**: [Function_Output](#functionoutput): A map of output bindings. Each key is a namespaced output path (such as temp.wrappedAds), and each value is an expression that MediaTailor evaluates at runtime. Output expressions in a VAST_REQUEST function can reference the response object, which exposes response.parsedAds, the ads parsed from the VAST response after schema validation and wrapper resolution, and response.statusCode. For more information about expression syntax, see JSONata expression reference (https://docs.aws.amazon.com/mediatailor/latest/ug/monetization-functions-jsonata.html) in the MediaTailor User Guide.
* **RequestTimeoutMilliseconds**: int (Required): The maximum time, in milliseconds, that MediaTailor waits for a response from the VAST endpoint. The timeout covers the entire response, including any wrapper redirects that MediaTailor follows. If the call exceeds this timeout, MediaTailor proceeds with an empty ad list and continues output expression evaluation. Valid values are 100 to 2000.
* **Runtime**: string (Required)
* **Url**: string (Required): An expression that evaluates to the VAST endpoint URL. Use {%...%} delimiters for dynamic expressions. A literal value must be an https:// URL. The expression can be up to 25,000 characters, and the URL after evaluation can be up to 2,048 characters.

## VastResponse
### Properties
* **AdSequencingMode**: string: Determines how MediaTailor sequences ads returned in the VAST response from the Ad Decision Server.

