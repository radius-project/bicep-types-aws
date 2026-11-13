# AWS.MediaLive @ default

## Resource AWS.MediaLive/Channel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/ChannelProperties](#awsmedialivechannelproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/ChannelPlacementGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/ChannelPlacementGroupProperties](#awsmedialivechannelplacementgroupproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/CloudWatchAlarmTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/CloudWatchAlarmTemplateProperties](#awsmedialivecloudwatchalarmtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/CloudWatchAlarmTemplateGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/CloudWatchAlarmTemplateGroupProperties](#awsmedialivecloudwatchalarmtemplategroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/ClusterProperties](#awsmedialiveclusterproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/EventBridgeRuleTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/EventBridgeRuleTemplateProperties](#awsmedialiveeventbridgeruletemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/EventBridgeRuleTemplateGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/EventBridgeRuleTemplateGroupProperties](#awsmedialiveeventbridgeruletemplategroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Input@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/InputProperties](#awsmedialiveinputproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/InputDevice@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/InputDeviceProperties](#awsmedialiveinputdeviceproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/InputSecurityGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/InputSecurityGroupProperties](#awsmedialiveinputsecuritygroupproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/Multiplex@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/MultiplexProperties](#awsmedialivemultiplexproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Multiplexprogram@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/MultiplexprogramProperties](#awsmedialivemultiplexprogramproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/Network@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/NetworkProperties](#awsmedialivenetworkproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Node@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/NodeProperties](#awsmedialivenodeproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Offering@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/OfferingProperties](#awsmedialiveofferingproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/Reservation@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/ReservationProperties](#awsmedialivereservationproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/SdiSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/SdiSourceProperties](#awsmedialivesdisourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/SignalMap@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/SignalMapProperties](#awsmedialivesignalmapproperties) (Required, Identifier): properties of the resource

## AacSettings
### Properties
* **Bitrate**: int
* **CodingMode**: string
* **InputType**: string
* **Profile**: string
* **RateControlMode**: string
* **RawFormat**: string
* **SampleRate**: int
* **Spec**: string
* **VbrQuality**: string

## AbWatermarkingCustomProfile
### Properties
* **EmbeddingFrequency**: int
* **SceneCut**: int
* **TargetPsnr**: int

## Ac3Settings
### Properties
* **AttenuationControl**: string
* **Bitrate**: int
* **BitstreamMode**: string
* **CodingMode**: string
* **Dialnorm**: int
* **DrcProfile**: string
* **LfeFilter**: string
* **MetadataControl**: string

## AdditionalDestinations
### Properties
* **Destination**: [OutputLocationRef](#outputlocationref)

## AncillarySourceSettings
### Properties
* **SourceAncillaryChannelNumber**: int

## AnywhereSettings
### Properties
* **ChannelPlacementGroupId**: string
* **ClusterId**: string

## ArchiveCdnSettings
### Properties
* **ArchiveS3Settings**: [ArchiveFrameCaptureHlsS3Settings](#archiveframecapturehlss3settings)

## ArchiveContainerSettings
### Properties
* **M2tsSettings**: [M2tsSettings](#m2tssettings)
* **RawSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)

## ArchiveFrameCaptureHlsS3Settings
### Properties
* **CannedAcl**: string

## ArchiveGroupSettings
### Properties
* **ArchiveCdnSettings**: [ArchiveCdnSettings](#archivecdnsettings)
* **Destination**: [OutputLocationRef](#outputlocationref)
* **RolloverInterval**: int

## ArchiveOutputSettings
### Properties
* **ContainerSettings**: [ArchiveContainerSettings](#archivecontainersettings)
* **Extension**: string
* **NameModifier**: string

## AudioChannelMapping
### Properties
* **InputChannelLevels**: [InputChannelLevel](#inputchannellevel)[]
* **OutputChannel**: int

## AudioCodecSettings
### Properties
* **AacSettings**: [AacSettings](#aacsettings)
* **Ac3Settings**: [Ac3Settings](#ac3settings)
* **Eac3AtmosSettings**: [Eac3AtmosSettings](#eac3atmossettings)
* **Eac3Settings**: [Eac3Settings](#eac3settings)
* **Mp2Settings**: [Mp2Settings](#mp2settings)
* **PassThroughSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **WavSettings**: [WavSettings](#wavsettings)

## AudioDescription
### Properties
* **AudioDashRoles**: string[]
* **AudioNormalizationSettings**: [AudioNormalizationSettings](#audionormalizationsettings)
* **AudioSelectorName**: string
* **AudioType**: string
* **AudioTypeControl**: string
* **AudioWatermarkingSettings**: [AudioWatermarkSettings](#audiowatermarksettings)
* **CodecSettings**: [AudioCodecSettings](#audiocodecsettings)
* **DvbDashAccessibility**: string
* **LanguageCode**: string
* **LanguageCodeControl**: string
* **Name**: string
* **RemixSettings**: [RemixSettings](#remixsettings)
* **StreamName**: string

## AudioDolbyEDecode
### Properties
* **ProgramSelection**: string

## AudioFeedInput
### Properties
* **AudioSelectorName**: string
* **FeedInput**: string

## AudioHlsRenditionSelection
### Properties
* **GroupId**: string
* **Name**: string

## AudioLanguageSelection
### Properties
* **LanguageCode**: string
* **LanguageSelectionPolicy**: string

## AudioNormalizationSettings
### Properties
* **Algorithm**: string
* **AlgorithmControl**: string
* **PeakCalculation**: string
* **PeakLimiterThreshold**: int
* **TargetLkfs**: int

## AudioOnlyHlsSettings
### Properties
* **AudioGroupId**: string
* **AudioOnlyImage**: [InputLocation](#inputlocation)
* **AudioTrackType**: string
* **SegmentType**: string

## AudioPid
### Properties
* **DolbyEDecode**: [AudioDolbyEDecode](#audiodolbyedecode)
* **Pid**: int
* **PremixSettings**: [AudioPreMixerSettings](#audiopremixersettings)

## AudioPidSelection
### Properties
* **Pid**: int
* **Pids**: [AudioPid](#audiopid)[]

## AudioPreMixerSettings
### Properties
* **AudioNormalizationSettings**: [AudioNormalizationSettings](#audionormalizationsettings)
* **Channels**: int
* **GainDb**: int
* **RemixSettings**: [RemixSettings](#remixsettings)

## AudioSelector
### Properties
* **Name**: string
* **SelectorSettings**: [AudioSelectorSettings](#audioselectorsettings)

## AudioSelectorSettings
### Properties
* **AudioHlsRenditionSelection**: [AudioHlsRenditionSelection](#audiohlsrenditionselection)
* **AudioLanguageSelection**: [AudioLanguageSelection](#audiolanguageselection)
* **AudioPidSelection**: [AudioPidSelection](#audiopidselection)
* **AudioTrackSelection**: [AudioTrackSelection](#audiotrackselection)

## AudioSilenceFailoverSettings
### Properties
* **AudioSelectorName**: string
* **AudioSilenceThresholdMsec**: int

## AudioTrack
### Properties
* **PremixSettings**: [AudioPreMixerSettings](#audiopremixersettings)
* **Track**: int

## AudioTrackSelection
### Properties
* **DolbyEDecode**: [AudioDolbyEDecode](#audiodolbyedecode)
* **Tracks**: [AudioTrack](#audiotrack)[]

## AudioWatermarkSettings
### Properties
* **NielsenWatermarksSettings**: [NielsenWatermarksSettings](#nielsenwatermarkssettings)

## AutomaticInputFailoverSettings
### Properties
* **ErrorClearTimeMsec**: int
* **FailoverConditions**: [FailoverCondition](#failovercondition)[]
* **InputPreference**: string
* **SecondaryInputId**: string

## Av1ColorSpaceSettings
### Properties
* **ColorSpacePassthroughSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Hdr10Settings**: [Hdr10Settings](#hdr10settings)
* **Hlg2020Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Rec601Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Rec709Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)

## Av1Settings
### Properties
* **AfdSignaling**: string
* **BitDepth**: string
* **Bitrate**: int
* **BufSize**: int
* **ColorSpaceSettings**: [Av1ColorSpaceSettings](#av1colorspacesettings)
* **FixedAfd**: string
* **FramerateDenominator**: int
* **FramerateNumerator**: int
* **GopSize**: int
* **GopSizeUnits**: string
* **Level**: string
* **LookAheadRateControl**: string
* **MaxBitrate**: int
* **MinBitrate**: int
* **MinIInterval**: int
* **ParDenominator**: int
* **ParNumerator**: int
* **QvbrQualityLevel**: int
* **RateControlMode**: string
* **SceneChangeDetect**: string
* **SpatialAq**: string
* **TemporalAq**: string
* **TimecodeBurninSettings**: [TimecodeBurninSettings](#timecodeburninsettings)
* **TimecodeInsertion**: string

## AvailBlanking
### Properties
* **AvailBlankingImage**: [InputLocation](#inputlocation)
* **State**: string

## AvailConfiguration
### Properties
* **AvailSettings**: [AvailSettings](#availsettings)
* **Scte35SegmentationScope**: string

## AvailSettings
### Properties
* **Esam**: [Esam](#esam)
* **Scte35SpliceInsert**: [Scte35SpliceInsertTimeSignalAposSettings](#scte35spliceinserttimesignalapossettings)
* **Scte35TimeSignalApos**: [Scte35SpliceInsertTimeSignalAposSettings](#scte35spliceinserttimesignalapossettings)

## AWS.MediaLive/ChannelPlacementGroupProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the channel placement group.
* **Channels**: string[] (ReadOnly): List of channel IDs added to the channel placement group.
* **ClusterId**: string (Identifier): The ID of the cluster the node is on.
* **Id**: string (ReadOnly, Identifier): Unique internal identifier.
* **Name**: string: The name of the channel placement group.
* **Nodes**: string[]: List of nodes added to the channel placement group
* **State**: string (ReadOnly)
* **Tags**: [Tags](#tags)[]: A collection of key-value pairs.

## AWS.MediaLive/ChannelProperties
### Properties
* **AnywhereSettings**: [AnywhereSettings](#anywheresettings)
* **Arn**: string (ReadOnly)
* **CdiInputSpecification**: [CdiInputSpecification](#cdiinputspecification)
* **ChannelClass**: string
* **ChannelEngineVersion**: [ChannelEngineVersionRequest](#channelengineversionrequest)
* **ChannelSecurityGroups**: string[]
* **Destinations**: [OutputDestination](#outputdestination)[]
* **DryRun**: bool (WriteOnly)
* **EncoderSettings**: [EncoderSettings](#encodersettings)
* **Id**: string (ReadOnly, Identifier): The channel ID, which AWS assigns.
* **InferenceSettings**: [InferenceSettings](#inferencesettings)
* **InputAttachments**: [InputAttachment](#inputattachment)[]
* **Inputs**: string[] (ReadOnly)
* **InputSpecification**: [InputSpecification](#inputspecification)
* **LinkedChannelSettings**: [LinkedChannelSettings](#linkedchannelsettings)
* **LogLevel**: string
* **Maintenance**: [MaintenanceCreateSettings](#maintenancecreatesettings)
* **Name**: string
* **RoleArn**: string
* **Tags**: [Channel_Tags](#channeltags)
* **Vpc**: [VpcOutputSettings](#vpcoutputsettings)

## AWS.MediaLive/CloudWatchAlarmTemplateGroupProperties
### Properties
* **Arn**: string (ReadOnly): A cloudwatch alarm template group's ARN (Amazon Resource Name)
* **CreatedAt**: string (ReadOnly)
* **Description**: string: A resource's optional description.
* **Id**: string (ReadOnly): A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
* **Identifier**: string (ReadOnly, Identifier)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required): A resource's name. Names must be unique within the scope of a resource type in a specific region.
* **Tags**: [TagMap](#tagmap)

## AWS.MediaLive/CloudWatchAlarmTemplateProperties
### Properties
* **Arn**: string (ReadOnly): A cloudwatch alarm template's ARN (Amazon Resource Name)
* **ComparisonOperator**: string (Required)
* **CreatedAt**: string (ReadOnly)
* **DatapointsToAlarm**: int: The number of datapoints within the evaluation period that must be breaching to trigger the alarm.
* **Description**: string: A resource's optional description.
* **EvaluationPeriods**: int (Required): The number of periods over which data is compared to the specified threshold.
* **GroupId**: string (ReadOnly): A cloudwatch alarm template group's id. AWS provided template groups have ids that start with `aws-`
* **GroupIdentifier**: string (WriteOnly): A cloudwatch alarm template group's identifier. Can be either be its id or current name.
* **Id**: string (ReadOnly): A cloudwatch alarm template's id. AWS provided templates have ids that start with `aws-`
* **Identifier**: string (ReadOnly, Identifier)
* **MetricName**: string (Required): The name of the metric associated with the alarm. Must be compatible with targetResourceType.
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required): A resource's name. Names must be unique within the scope of a resource type in a specific region.
* **Period**: int (Required): The period, in seconds, over which the specified statistic is applied.
* **Statistic**: string (Required)
* **Tags**: [TagMap](#tagmap)
* **TargetResourceType**: string (Required)
* **Threshold**: int (Required): The threshold value to compare with the specified statistic.
* **TreatMissingData**: string (Required)

## AWS.MediaLive/ClusterProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the Cluster.
* **ChannelIds**: string[] (ReadOnly): The MediaLive Channels that are currently running on Nodes in this Cluster.
* **ClusterType**: string
* **Id**: string (ReadOnly, Identifier): The unique ID of the Cluster.
* **InstanceRoleArn**: string: The IAM role your nodes will use.
* **Name**: string: The user-specified name of the Cluster to be created.
* **NetworkSettings**: [ClusterNetworkSettings](#clusternetworksettings)
* **State**: string (ReadOnly)
* **Tags**: [Tags](#tags)[]: A collection of key-value pairs.

## AWS.MediaLive/EventBridgeRuleTemplateGroupProperties
### Properties
* **Arn**: string (ReadOnly): An eventbridge rule template group's ARN (Amazon Resource Name)
* **CreatedAt**: string (ReadOnly)
* **Description**: string: A resource's optional description.
* **Id**: string (ReadOnly): An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
* **Identifier**: string (ReadOnly, Identifier)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required): A resource's name. Names must be unique within the scope of a resource type in a specific region.
* **Tags**: [TagMap](#tagmap)

## AWS.MediaLive/EventBridgeRuleTemplateProperties
### Properties
* **Arn**: string (ReadOnly): An eventbridge rule template's ARN (Amazon Resource Name)
* **CreatedAt**: string (ReadOnly): Placeholder documentation for __timestampIso8601
* **Description**: string: A resource's optional description.
* **EventTargets**: [EventBridgeRuleTemplateTarget](#eventbridgeruletemplatetarget)[]: Placeholder documentation for __listOfEventBridgeRuleTemplateTarget
* **EventType**: string (Required)
* **GroupId**: string (ReadOnly): An eventbridge rule template group's id. AWS provided template groups have ids that start with `aws-`
* **GroupIdentifier**: string (WriteOnly): An eventbridge rule template group's identifier. Can be either be its id or current name.
* **Id**: string (ReadOnly): An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
* **Identifier**: string (ReadOnly, Identifier): Placeholder documentation for __string
* **ModifiedAt**: string (ReadOnly): Placeholder documentation for __timestampIso8601
* **Name**: string (Required): A resource's name. Names must be unique within the scope of a resource type in a specific region.
* **Tags**: [TagMap](#tagmap)

## AWS.MediaLive/InputDeviceProperties
### Properties
* **Arn**: string (Identifier): The unique ARN of the input device, e.g. 'arn:aws:medialive:us-west-2:123456789012:inputDevice:hd-0000aaaa1111bbbb2222cccc'.
* **AvailabilityZone**: string (ReadOnly): The Availability Zone associated with this input device.
* **ConnectionState**: string (ReadOnly): The state of the connection between the input device and AWS.
* **DeviceSettingsSyncState**: string (ReadOnly): Whether the device has applied the configuration MediaLive sent to it. SYNCED means it has; SYNCING means it has not yet.
* **DeviceUpdateStatus**: string (ReadOnly): The status of software on the input device.
* **HdDeviceSettings**: [InputDeviceHdSettings](#inputdevicehdsettings) (ReadOnly)
* **Id**: string (ReadOnly): The unique ID of the input device, e.g. 'hd-0000aaaa1111bbbb2222cccc'.
* **MacAddress**: string (ReadOnly): The network MAC address of the input device.
* **MedialiveInputArns**: string[] (ReadOnly): The ARNs of the MediaLive inputs attached to the device. Returned only when OutputType is MEDIALIVE_INPUT.
* **Name**: string (ReadOnly): The name specified for the input device.
* **NetworkSettings**: [InputDeviceNetworkSettings](#inputdevicenetworksettings) (ReadOnly)
* **OutputType**: string (ReadOnly): The output attachment type of the input device. MEDIACONNECT_FLOW when the device is the source for a MediaConnect flow, MEDIALIVE_INPUT when it is the source for a MediaLive input, NONE when it is unattached.
* **SerialNumber**: string (ReadOnly): The unique serial number of the input device.
* **Tags**: [Tag](#tag)[] (ReadOnly): A collection of key-value pairs associated with the input device.
* **Type**: string (ReadOnly): The type of the input device.
* **UhdDeviceSettings**: [InputDeviceUhdSettings](#inputdeviceuhdsettings) (ReadOnly)

## AWS.MediaLive/InputProperties
### Properties
* **Arn**: string (ReadOnly): The Unique ARN of the input (generated, immutable).
* **AttachedChannels**: string[] (ReadOnly): A list of channel IDs that that input is attached to (currently an input can only be attached to one channel).
* **Destinations**: [InputDestination](#inputdestination)[] (ReadOnly, WriteOnly): A list of the destinations of the input (PUSH-type).
* **DestinationUrls**: string[] (ReadOnly): A list of destination URLs of the input (PUSH-type).
* **Id**: string (ReadOnly, Identifier): The generated ID of the input (unique for user account, immutable).
* **InputClass**: string (ReadOnly): STANDARD - MediaLive expects two sources to be connected to this input. If the channel is also STANDARD, both sources will be ingested. If the channel is SINGLE_PIPELINE, only the first source will be ingested; the second source will always be ignored, even if the first source fails.
SINGLE_PIPELINE - You can connect only one source to this input. If the ChannelClass is also SINGLE_PIPELINE, this value is valid. If the ChannelClass is STANDARD, this value is not valid because the channel requires two sources in the input.
* **InputDevices**: [InputDeviceSettings](#inputdevicesettings)[]: Settings for the input devices.
* **InputNetworkLocation**: string: The location of this input. AWS, for an input existing in the AWS Cloud, On-Prem for
an input in a customer network.
* **InputPartnerIds**: string[] (ReadOnly): A list of IDs for all Inputs which are partners of this one.
* **InputSecurityGroups**: string[] (WriteOnly): A list of security groups referenced by IDs to attach to the input.
* **InputSourceType**: string (ReadOnly): Certain pull input sources can be dynamic, meaning that they can have their URL's dynamically changes
during input switch actions. Presently, this functionality only works with MP4_FILE and TS_FILE inputs.
* **MediaConnectFlows**: [MediaConnectFlow](#mediaconnectflow)[]: A list of MediaConnect Flows for this input.
* **MulticastSettings**: [MulticastSettings](#multicastsettings): Multicast Input settings.
* **Name**: string: The user-assigned name (This is a mutable value).
* **RoleArn**: string: The Amazon Resource Name (ARN) of the role this input assumes during and after creation.
* **RouterSettings**: [RouterSettings](#routersettings): Information about the MediaConnect Router association for this input.
* **SdiSources**: string[]: SDI Sources for this Input.
* **SecurityGroups**: string[] (ReadOnly): A list of IDs for all the Input Security Groups attached to the input.
* **Smpte2110ReceiverGroupSettings**: [Smpte2110ReceiverGroupSettings](#smpte2110receivergroupsettings): Include this parameter if the input is a SMPTE 2110 input, to identify the stream sources for this input.
* **Sources**: [InputSource](#inputsource)[]: A list of the sources of the input (PULL-type).
* **SourceUrls**: string[] (ReadOnly): A list of source URLs of the input (PULL-type).
* **SrtSettings**: [SrtSettings](#srtsettings): The settings associated with an SRT input.
* **State**: string (ReadOnly): Placeholder documentation for InputState
* **Tags**: [Input_Tags](#inputtags): A collection of key-value pairs.
* **Type**: string: The different types of inputs that AWS Elemental MediaLive supports.
* **Vpc**: [InputVpcRequest](#inputvpcrequest) (WriteOnly): Settings for a private VPC Input.
When this property is specified, the input destination addresses will be created in a VPC rather than with public Internet addresses.
This property requires setting the roleArn property on Input creation.
Not compatible with the inputSecurityGroups property.

## AWS.MediaLive/InputSecurityGroupProperties
### Properties
* **Arn**: string (ReadOnly): Unique ARN of Input Security Group
* **Id**: string (ReadOnly, Identifier): The Id of the Input Security Group
* **Inputs**: string[] (ReadOnly): The list of inputs currently using this Input Security Group.
* **Tags**: [InputSecurityGroup_Tags](#inputsecuritygrouptags): A collection of key-value pairs.
* **WhitelistRules**: [InputWhitelistRule](#inputwhitelistrule)[]: Whitelist rules and their sync status

## AWS.MediaLive/MultiplexprogramProperties
### Properties
* **ChannelId**: string (ReadOnly): The MediaLive channel associated with the program.
* **MultiplexId**: string (Identifier): The ID of the multiplex that the program belongs to.
* **MultiplexProgramSettings**: [MultiplexProgramSettings](#multiplexprogramsettings): The settings for this multiplex program.
* **PacketIdentifiersMap**: [MultiplexProgramPacketIdentifiersMap](#multiplexprogrampacketidentifiersmap): The packet identifier map for this multiplex program.
* **PipelineDetails**: [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)[]: Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
* **PreferredChannelPipeline**: string (WriteOnly): The settings for this multiplex program.
* **ProgramName**: string (Identifier): The name of the multiplex program.

## AWS.MediaLive/MultiplexProperties
### Properties
* **Arn**: string (ReadOnly): The unique arn of the multiplex.
* **AvailabilityZones**: string[] (Required): A list of availability zones for the multiplex.
* **Destinations**: [MultiplexOutputDestination](#multiplexoutputdestination)[]: A list of the multiplex output destinations.
* **Id**: string (ReadOnly, Identifier): The unique id of the multiplex.
* **MultiplexSettings**: [MultiplexSettings](#multiplexsettings) (Required): Configuration for a multiplex event.
* **Name**: string (Required): Name of multiplex.
* **PipelinesRunningCount**: int (ReadOnly): The number of currently healthy pipelines.
* **ProgramCount**: int (ReadOnly): The number of programs in the multiplex.
* **State**: string (ReadOnly)
* **Tags**: [Tags](#tags)[]: A collection of key-value pairs.

## AWS.MediaLive/NetworkProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the Network.
* **AssociatedClusterIds**: string[] (ReadOnly)
* **Id**: string (ReadOnly, Identifier): The unique ID of the Network.
* **IpPools**: [IpPool](#ippool)[] (Required): The list of IP address cidr pools for the network
* **Name**: string (Required): The user-specified name of the Network to be created.
* **Routes**: [Route](#route)[]: The routes for the network
* **State**: string (ReadOnly): The current state of the Network.
* **Tags**: [Tags](#tags)[]: A collection of key-value pairs.

## AWS.MediaLive/NodeProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the Node. It is automatically assigned when the Node is created.
* **ChannelPlacementGroups**: string[] (ReadOnly): An array of IDs. Each ID is one ChannelPlacementGroup that is associated with this Node.
* **ClusterId**: string (Required): The ID of the Cluster that the Node belongs to.
* **ConnectionState**: string (ReadOnly)
* **Id**: string (ReadOnly): The unique ID of the Node. Unique in the Cluster. The ID is the resource-id portion of the ARN.
* **InstanceArn**: string (ReadOnly): The ARN of the EC2 instance hosting the Node.
* **Name**: string: The user-specified name of the Node.
* **NodeInterfaceMappings**: [NodeInterfaceMapping](#nodeinterfacemapping)[]: An array of interface mappings for the Node.
* **Role**: string
* **SdiSourceMappings**: [SdiSourceMapping](#sdisourcemapping)[]: An array of SDI source mappings.
* **State**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: A collection of key-value pairs.

## AWS.MediaLive/OfferingProperties
### Properties
* **Arn**: string (Identifier): Unique offering ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:offering:87654321'
* **CurrencyCode**: string (ReadOnly): Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'
* **Duration**: int (ReadOnly): Lease duration, e.g. '12'
* **DurationUnits**: string (ReadOnly): Units for duration, e.g. 'MONTHS'
* **FixedPrice**: int (ReadOnly): One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering
* **OfferingDescription**: string (ReadOnly): Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'
* **OfferingId**: string (ReadOnly): Unique offering ID, e.g. '87654321'
* **OfferingType**: string (ReadOnly): Offering type, e.g. 'NO_UPFRONT'
* **Region**: string (ReadOnly): AWS region, e.g. 'us-west-2'
* **ResourceSpecification**: [ReservationResourceSpecification](#reservationresourcespecification) (ReadOnly)
* **UsagePrice**: int (ReadOnly): Recurring usage charge for each reserved resource, e.g. '157.0'

## AWS.MediaLive/ReservationProperties
### Properties
* **Arn**: string (Identifier): Unique reservation ARN, e.g. 'arn:aws:medialive:us-west-2:123456789012:reservation:1234567'.
* **Count**: int (ReadOnly): Number of reserved resources.
* **CurrencyCode**: string (ReadOnly): Currency code for usagePrice and fixedPrice in ISO-4217 format, e.g. 'USD'.
* **Duration**: int (ReadOnly): Lease duration, e.g. '12'.
* **DurationUnits**: string (ReadOnly): Units for duration, e.g. 'MONTHS'.
* **End**: string (ReadOnly): Reservation UTC end date and time in ISO-8601 format, e.g. '2019-03-01T00:00:00'.
* **FixedPrice**: int (ReadOnly): One-time charge for each reserved resource, e.g. '0.0' for a NO_UPFRONT offering.
* **Name**: string (ReadOnly): User specified reservation name.
* **OfferingDescription**: string (ReadOnly): Offering description, e.g. 'HD AVC output at 10-20 Mbps, 30 fps, and standard VQ in US West (Oregon)'.
* **OfferingId**: string (ReadOnly): Unique offering ID, e.g. '87654321'.
* **OfferingType**: string (ReadOnly): Offering type, e.g. 'NO_UPFRONT'.
* **Region**: string (ReadOnly): AWS region, e.g. 'us-west-2'.
* **RenewalSettings**: [RenewalSettings](#renewalsettings) (ReadOnly)
* **ReservationId**: string (ReadOnly): Unique reservation ID, e.g. '1234567'.
* **ResourceSpecification**: [ReservationResourceSpecification](#reservationresourcespecification) (ReadOnly)
* **Start**: string (ReadOnly): Reservation UTC start date and time in ISO-8601 format, e.g. '2018-03-01T00:00:00'.
* **State**: string (ReadOnly): Current state of reservation, e.g. 'ACTIVE'.
* **Tags**: [Tag](#tag)[] (ReadOnly): A collection of key-value pairs associated with the reservation.
* **UsagePrice**: int (ReadOnly): Recurring usage charge for each reserved resource, e.g. '157.0'.

## AWS.MediaLive/SdiSourceProperties
### Properties
* **Arn**: string (ReadOnly): The unique arn of the SdiSource.
* **Id**: string (ReadOnly, Identifier): The unique identifier of the SdiSource.
* **Inputs**: string[] (ReadOnly): The list of inputs currently using this SDI source.
* **Mode**: string
* **Name**: string (Required): The name of the SdiSource.
* **State**: string (ReadOnly)
* **Tags**: [Tags](#tags)[]: A collection of key-value pairs.
* **Type**: string (Required)

## AWS.MediaLive/SignalMapProperties
### Properties
* **Arn**: string (ReadOnly): A signal map's ARN (Amazon Resource Name)
* **CloudWatchAlarmTemplateGroupIdentifiers**: string[] (WriteOnly)
* **CloudWatchAlarmTemplateGroupIds**: string[] (ReadOnly)
* **CreatedAt**: string (ReadOnly)
* **Description**: string: A resource's optional description.
* **DiscoveryEntryPointArn**: string (Required): A top-level supported AWS resource ARN to discovery a signal map from.
* **ErrorMessage**: string (ReadOnly): Error message associated with a failed creation or failed update attempt of a signal map.
* **EventBridgeRuleTemplateGroupIdentifiers**: string[] (WriteOnly)
* **EventBridgeRuleTemplateGroupIds**: string[] (ReadOnly)
* **FailedMediaResourceMap**: [FailedMediaResourceMap](#failedmediaresourcemap) (ReadOnly)
* **ForceRediscovery**: bool (WriteOnly): If true, will force a rediscovery of a signal map if an unchanged discoveryEntryPointArn is provided.
* **Id**: string (ReadOnly): A signal map's id.
* **Identifier**: string (ReadOnly, Identifier)
* **LastDiscoveredAt**: string (ReadOnly)
* **LastSuccessfulMonitorDeployment**: [SuccessfulMonitorDeployment](#successfulmonitordeployment) (ReadOnly)
* **MediaResourceMap**: [MediaResourceMap](#mediaresourcemap) (ReadOnly)
* **ModifiedAt**: string (ReadOnly)
* **MonitorChangesPendingDeployment**: bool (ReadOnly): If true, there are pending monitor changes for this signal map that can be deployed.
* **MonitorDeployment**: [MonitorDeployment](#monitordeployment) (ReadOnly)
* **Name**: string (Required): A resource's name. Names must be unique within the scope of a resource type in a specific region.
* **Status**: string (ReadOnly)
* **Tags**: [TagMap](#tagmap)

## BandwidthReductionFilterSettings
### Properties
* **PostFilterSharpening**: string
* **Strength**: string

## BlackoutSlate
### Properties
* **BlackoutSlateImage**: [InputLocation](#inputlocation)
* **NetworkEndBlackout**: string
* **NetworkEndBlackoutImage**: [InputLocation](#inputlocation)
* **NetworkId**: string
* **State**: string

## BurnInDvbSubDestinationSettings
### Properties
* **Alignment**: string
* **BackgroundColor**: string
* **BackgroundOpacity**: int
* **Font**: [InputLocation](#inputlocation)
* **FontColor**: string
* **FontOpacity**: int
* **FontResolution**: int
* **FontSize**: string
* **OutlineColor**: string
* **OutlineSize**: int
* **ShadowColor**: string
* **ShadowOpacity**: int
* **ShadowXOffset**: int
* **ShadowYOffset**: int
* **SubtitleRows**: string
* **TeletextGridControl**: string
* **XPosition**: int
* **YPosition**: int

## CaptionDescription
### Properties
* **Accessibility**: string
* **CaptionDashRoles**: string[]
* **CaptionSelectorName**: string
* **DestinationSettings**: [CaptionDestinationSettings](#captiondestinationsettings)
* **DvbDashAccessibility**: string
* **LanguageCode**: string
* **LanguageDescription**: string
* **Name**: string

## CaptionDestinationSettings
### Properties
* **AribDestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **BurnInDestinationSettings**: [BurnInDvbSubDestinationSettings](#burnindvbsubdestinationsettings)
* **DvbSubDestinationSettings**: [BurnInDvbSubDestinationSettings](#burnindvbsubdestinationsettings)
* **EbuTtDDestinationSettings**: [EbuTtDDestinationSettings](#ebuttddestinationsettings)
* **EmbeddedDestinationSettings**: [EmbeddedDestinationSettings](#embeddeddestinationsettings)
* **EmbeddedPlusScte20DestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **RtmpCaptionInfoDestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Scte20PlusEmbeddedDestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Scte27DestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **SmpteTtDestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **TeletextDestinationSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **TtmlDestinationSettings**: [TtmlDestinationSettings](#ttmldestinationsettings)
* **WebvttDestinationSettings**: [WebvttDestinationSettings](#webvttdestinationsettings)

## CaptionLanguageMapping
### Properties
* **CaptionChannel**: int
* **LanguageCode**: string
* **LanguageDescription**: string

## CaptionRectangle
### Properties
* **Height**: int
* **LeftOffset**: int
* **TopOffset**: int
* **Width**: int

## CaptionSelector
### Properties
* **LanguageCode**: string
* **Name**: string
* **SelectorSettings**: [CaptionSelectorSettings](#captionselectorsettings)

## CaptionSelectorSettings
### Properties
* **AncillarySourceSettings**: [AncillarySourceSettings](#ancillarysourcesettings)
* **AribSourceSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **DvbSubSourceSettings**: [Scte27DvbSubSourceSettings](#scte27dvbsubsourcesettings)
* **EmbeddedSourceSettings**: [EmbeddedSourceSettings](#embeddedsourcesettings)
* **Scte20SourceSettings**: [Scte20SourceSettings](#scte20sourcesettings)
* **Scte27SourceSettings**: [Scte27DvbSubSourceSettings](#scte27dvbsubsourcesettings)
* **SmartSubtitleSourceSettings**: [SmartSubtitleSourceSettings](#smartsubtitlesourcesettings)
* **TeletextSourceSettings**: [TeletextSourceSettings](#teletextsourcesettings)

## CdiInputSpecification
### Properties
* **Resolution**: string

## Channel_Tags
### Properties

## ChannelEngineVersionRequest
### Properties
* **Version**: string

## ClusterNetworkSettings
### Properties
* **DefaultRoute**: string: Default value if the customer does not define it in channel Output API
* **InterfaceMappings**: [InterfaceMapping](#interfacemapping)[]: Network mappings for the cluster

## CmafIngestCaptionLanguageMapping
### Properties
* **CaptionChannel**: int
* **LanguageCode**: string

## CmafIngestFrameCaptureOutputSettings
### Properties
* **NameModifier**: string

## CmafIngestGroupSettings
### Properties
* **AdditionalDestinations**: [AdditionalDestinations](#additionaldestinations)[]
* **CaptionLanguageMappings**: [CmafIngestCaptionLanguageMapping](#cmafingestcaptionlanguagemapping)[]
* **Destination**: [OutputLocationRef](#outputlocationref)
* **Id3Behavior**: string
* **Id3NameModifier**: string
* **KlvBehavior**: string
* **KlvNameModifier**: string
* **NielsenId3Behavior**: string
* **NielsenId3NameModifier**: string
* **Scte35NameModifier**: string
* **Scte35Type**: string
* **SegmentLength**: int
* **SegmentLengthUnits**: string
* **SendDelayMs**: int
* **TimedMetadataId3Frame**: string
* **TimedMetadataId3Period**: int
* **TimedMetadataPassthrough**: string
* **WatermarkingSettings**: [CmafIngestWatermarkingSettings](#cmafingestwatermarkingsettings)

## CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings
### Properties
* **AdditionalDestinationsAlternateDestinations**: [OutputLocationRef](#outputlocationref)[]
* **AlternateDestination**: [OutputLocationRef](#outputlocationref)
* **CustomProfile**: [AbWatermarkingCustomProfile](#abwatermarkingcustomprofile)
* **License**: string
* **OperatorId**: int
* **PolyPeriod**: int
* **Profile**: string
* **WatermarkIdLength**: string

## CmafIngestWatermarkingSettings
### Properties
* **CmafIngestAbWatermarkerIrdetoSettings**: [CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings](#cmafingestmediapackagev2abwatermarkerirdetosettings)

## ColorCorrection
### Properties
* **InputColorSpace**: string
* **OutputColorSpace**: string
* **Uri**: string

## ColorCorrectionSettings
### Properties
* **GlobalColorCorrections**: [ColorCorrection](#colorcorrection)[]

## DisabledLockingSettings
### Properties
* **CustomEpoch**: string

## DvbNitSettings
### Properties
* **NetworkId**: int
* **NetworkName**: string
* **RepInterval**: int

## DvbSdtSettings
### Properties
* **OutputSdt**: string
* **RepInterval**: int
* **ServiceName**: string
* **ServiceProviderName**: string

## DvbTdtSettings
### Properties
* **RepInterval**: int

## Eac3AtmosSettings
### Properties
* **Bitrate**: int
* **CodingMode**: string
* **Dialnorm**: int
* **DrcLine**: string
* **DrcRf**: string
* **HeightTrim**: int
* **SurroundTrim**: int

## Eac3Settings
### Properties
* **AttenuationControl**: string
* **Bitrate**: int
* **BitstreamMode**: string
* **CodingMode**: string
* **DcFilter**: string
* **Dialnorm**: int
* **DrcLine**: string
* **DrcRf**: string
* **LfeControl**: string
* **LfeFilter**: string
* **LoRoCenterMixLevel**: int
* **LoRoSurroundMixLevel**: int
* **LtRtCenterMixLevel**: int
* **LtRtSurroundMixLevel**: int
* **MetadataControl**: string
* **PassthroughControl**: string
* **PhaseControl**: string
* **StereoDownmix**: string
* **SurroundExMode**: string
* **SurroundMode**: string

## EbuTtDDestinationSettings
### Properties
* **CopyrightHolder**: string
* **DefaultFontSize**: int
* **DefaultLineHeight**: int
* **FillLineGap**: string
* **FontFamily**: string
* **StyleControl**: string

## EmbeddedCaptionPositionSettings
### Properties
* **YPositionLine**: int

## EmbeddedDestinationSettings
### Properties
* **Position**: [EmbeddedCaptionPositionSettings](#embeddedcaptionpositionsettings)
* **StyleControl**: string

## EmbeddedSourceSettings
### Properties
* **Convert608To708**: string
* **Scte20Detection**: string
* **Source608ChannelNumber**: int
* **Source608TrackNumber**: int

## EmptyConfigurationSettings
### Properties

## EncoderSettings
### Properties
* **AudioDescriptions**: [AudioDescription](#audiodescription)[]
* **AvailBlanking**: [AvailBlanking](#availblanking)
* **AvailConfiguration**: [AvailConfiguration](#availconfiguration)
* **BlackoutSlate**: [BlackoutSlate](#blackoutslate)
* **CaptionDescriptions**: [CaptionDescription](#captiondescription)[]
* **ColorCorrectionSettings**: [ColorCorrectionSettings](#colorcorrectionsettings)
* **FeatureActivations**: [FeatureActivations](#featureactivations)
* **GlobalConfiguration**: [GlobalConfiguration](#globalconfiguration)
* **MotionGraphicsConfiguration**: [MotionGraphicsConfiguration](#motiongraphicsconfiguration)
* **NielsenConfiguration**: [NielsenConfiguration](#nielsenconfiguration)
* **OutputGroups**: [OutputGroup](#outputgroup)[] (WriteOnly)
* **ThumbnailConfiguration**: [ThumbnailConfiguration](#thumbnailconfiguration)
* **TimecodeConfig**: [TimecodeConfig](#timecodeconfig)
* **VideoDescriptions**: [VideoDescription](#videodescription)[]

## EpochLockingSettings
### Properties
* **CustomEpoch**: string
* **JamSyncTime**: string

## Esam
### Properties
* **AcquisitionPointId**: string
* **AdAvailOffset**: int
* **PasswordParam**: string
* **PoisEndpoint**: string
* **Username**: string
* **ZoneIdentity**: string

## EventBridgeRuleTemplateTarget
### Properties
* **Arn**: string (Required): Target ARNs must be either an SNS topic or CloudWatch log group.

## FailedMediaResourceMap
### Properties

## FailoverCondition
### Properties
* **FailoverConditionSettings**: [FailoverConditionSettings](#failoverconditionsettings)

## FailoverConditionSettings
### Properties
* **AudioSilenceSettings**: [AudioSilenceFailoverSettings](#audiosilencefailoversettings)
* **InputLossSettings**: [InputLossFailoverSettings](#inputlossfailoversettings)
* **VideoBlackSettings**: [VideoBlackFailoverSettings](#videoblackfailoversettings)

## FeatureActivations
### Properties
* **InputPrepareScheduleActions**: string
* **OutputStaticImageOverlayScheduleActions**: string

## FecOutputSettings
### Properties
* **ColumnDepth**: int
* **IncludeFec**: string
* **RowLength**: int

## Fmp4HlsSettings
### Properties
* **AudioRenditionSets**: string
* **NielsenId3Behavior**: string
* **TimedMetadataBehavior**: string

## FollowerChannelSettings
### Properties
* **LinkedChannelType**: string
* **PrimaryChannelArn**: string

## FrameCaptureCdnSettings
### Properties
* **FrameCaptureS3Settings**: [ArchiveFrameCaptureHlsS3Settings](#archiveframecapturehlss3settings)

## FrameCaptureGroupSettings
### Properties
* **Destination**: [OutputLocationRef](#outputlocationref)
* **FrameCaptureCdnSettings**: [FrameCaptureCdnSettings](#framecapturecdnsettings)

## FrameCaptureSettings
### Properties
* **CaptureInterval**: int
* **CaptureIntervalUnits**: string
* **TimecodeBurninSettings**: [TimecodeBurninSettings](#timecodeburninsettings)

## GlobalConfiguration
### Properties
* **InitialAudioGain**: int
* **InputEndAction**: string
* **InputLossBehavior**: [InputLossBehavior](#inputlossbehavior)
* **OutputLockingMode**: string
* **OutputLockingSettings**: [OutputLockingSettings](#outputlockingsettings)
* **OutputTimingSource**: string
* **SupportLowFramerateInputs**: string

## H264ColorSpaceSettings
### Properties
* **ColorSpacePassthroughSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Rec601Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Rec709Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)

## H264H265FilterSettings
### Properties
* **BandwidthReductionFilterSettings**: [BandwidthReductionFilterSettings](#bandwidthreductionfiltersettings)
* **TemporalFilterSettings**: [TemporalFilterSettings](#temporalfiltersettings)

## H264Settings
### Properties
* **AdaptiveQuantization**: string
* **AfdSignaling**: string
* **Bitrate**: int
* **BufFillPct**: int
* **BufSize**: int
* **ColorMetadata**: string
* **ColorSpaceSettings**: [H264ColorSpaceSettings](#h264colorspacesettings)
* **EntropyEncoding**: string
* **FilterSettings**: [H264H265FilterSettings](#h264h265filtersettings)
* **FixedAfd**: string
* **FlickerAq**: string
* **ForceFieldPictures**: string
* **FramerateControl**: string
* **FramerateDenominator**: int
* **FramerateNumerator**: int
* **GopBReference**: string
* **GopClosedCadence**: int
* **GopNumBFrames**: int
* **GopSize**: int
* **GopSizeUnits**: string
* **Level**: string
* **LookAheadRateControl**: string
* **MaxBitrate**: int
* **MinBitrate**: int
* **MinIInterval**: int
* **MinQp**: int
* **NumRefFrames**: int
* **ParControl**: string
* **ParDenominator**: int
* **ParNumerator**: int
* **Profile**: string
* **QualityLevel**: string
* **QvbrQualityLevel**: int
* **RateControlMode**: string
* **ScanType**: string
* **SceneChangeDetect**: string
* **Slices**: int
* **Softness**: int
* **SpatialAq**: string
* **SubgopLength**: string
* **Syntax**: string
* **TemporalAq**: string
* **TimecodeBurninSettings**: [TimecodeBurninSettings](#timecodeburninsettings)
* **TimecodeInsertion**: string

## H265ColorSpaceSettings
### Properties
* **ColorSpacePassthroughSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **DolbyVision81Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Hdr10Settings**: [Hdr10Settings](#hdr10settings)
* **Hlg2020Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Rec601Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **Rec709Settings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)

## H265Settings
### Properties
* **AdaptiveQuantization**: string
* **AfdSignaling**: string
* **AlternativeTransferFunction**: string
* **Bitrate**: int
* **BufSize**: int
* **ColorMetadata**: string
* **ColorSpaceSettings**: [H265ColorSpaceSettings](#h265colorspacesettings)
* **Deblocking**: string
* **FilterSettings**: [H264H265FilterSettings](#h264h265filtersettings)
* **FixedAfd**: string
* **FlickerAq**: string
* **FramerateDenominator**: int
* **FramerateNumerator**: int
* **GopBReference**: string
* **GopClosedCadence**: int
* **GopNumBFrames**: int
* **GopSize**: int
* **GopSizeUnits**: string
* **Level**: string
* **LookAheadRateControl**: string
* **MaxBitrate**: int
* **MinBitrate**: int
* **MinIInterval**: int
* **MinQp**: int
* **MvOverPictureBoundaries**: string
* **MvTemporalPredictor**: string
* **ParDenominator**: int
* **ParNumerator**: int
* **Profile**: string
* **QvbrQualityLevel**: int
* **RateControlMode**: string
* **ScanType**: string
* **SceneChangeDetect**: string
* **Slices**: int
* **SubgopLength**: string
* **Tier**: string
* **TileHeight**: int
* **TilePadding**: string
* **TileWidth**: int
* **TimecodeBurninSettings**: [TimecodeBurninSettings](#timecodeburninsettings)
* **TimecodeInsertion**: string
* **TreeblockSize**: string

## Hdr10Settings
### Properties
* **MaxCll**: int
* **MaxFall**: int

## HlsAkamaiSettings
### Properties
* **ConnectionRetryInterval**: int
* **FilecacheDuration**: int
* **HttpTransferMode**: string
* **NumRetries**: int
* **RestartDelay**: int
* **Salt**: string
* **Token**: string

## HlsBasicPutSettings
### Properties
* **ConnectionRetryInterval**: int
* **FilecacheDuration**: int
* **NumRetries**: int
* **RestartDelay**: int

## HlsCdnSettings
### Properties
* **HlsAkamaiSettings**: [HlsAkamaiSettings](#hlsakamaisettings)
* **HlsBasicPutSettings**: [HlsBasicPutSettings](#hlsbasicputsettings)
* **HlsMediaStoreSettings**: [HlsMediaStoreSettings](#hlsmediastoresettings)
* **HlsS3Settings**: [ArchiveFrameCaptureHlsS3Settings](#archiveframecapturehlss3settings)
* **HlsWebdavSettings**: [HlsWebdavSettings](#hlswebdavsettings)

## HlsGroupSettings
### Properties
* **AdMarkers**: string[]
* **BaseUrlContent**: string
* **BaseUrlContent1**: string
* **BaseUrlManifest**: string
* **BaseUrlManifest1**: string
* **CaptionLanguageMappings**: [CaptionLanguageMapping](#captionlanguagemapping)[]
* **CaptionLanguageSetting**: string
* **ClientCache**: string
* **CodecSpecification**: string
* **ConstantIv**: string
* **Destination**: [OutputLocationRef](#outputlocationref)
* **DirectoryStructure**: string
* **DiscontinuityTags**: string
* **EncryptionType**: string
* **HlsCdnSettings**: [HlsCdnSettings](#hlscdnsettings)
* **HlsId3SegmentTagging**: string
* **IFrameOnlyPlaylists**: string
* **IncompleteSegmentBehavior**: string
* **IndexNSegments**: int
* **InputLossAction**: string
* **IvInManifest**: string
* **IvSource**: string
* **KeepSegments**: int
* **KeyFormat**: string
* **KeyFormatVersions**: string
* **KeyProviderSettings**: [KeyProviderSettings](#keyprovidersettings)
* **ManifestCompression**: string
* **ManifestDurationFormat**: string
* **MinSegmentLength**: int
* **Mode**: string
* **OutputSelection**: string
* **ProgramDateTime**: string
* **ProgramDateTimeClock**: string
* **ProgramDateTimePeriod**: int
* **RedundantManifest**: string
* **SegmentationMode**: string
* **SegmentLength**: int
* **SegmentsPerSubdirectory**: int
* **StreamInfResolution**: string
* **TimedMetadataId3Frame**: string
* **TimedMetadataId3Period**: int
* **TimestampDeltaMilliseconds**: int
* **TsFileMode**: string

## HlsInputSettings
### Properties
* **Bandwidth**: int
* **BufferSegments**: int
* **Retries**: int
* **RetryInterval**: int
* **Scte35Source**: string

## HlsMediaStoreSettings
### Properties
* **ConnectionRetryInterval**: int
* **FilecacheDuration**: int
* **MediaStoreStorageClass**: string
* **NumRetries**: int
* **RestartDelay**: int

## HlsOutputSettings
### Properties
* **H265PackagingType**: string
* **HlsSettings**: [HlsSettings](#hlssettings)
* **NameModifier**: string
* **SegmentModifier**: string

## HlsSettings
### Properties
* **AudioOnlyHlsSettings**: [AudioOnlyHlsSettings](#audioonlyhlssettings)
* **Fmp4HlsSettings**: [Fmp4HlsSettings](#fmp4hlssettings)
* **FrameCaptureHlsSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **StandardHlsSettings**: [StandardHlsSettings](#standardhlssettings)

## HlsWebdavSettings
### Properties
* **ConnectionRetryInterval**: int
* **FilecacheDuration**: int
* **HttpTransferMode**: string
* **NumRetries**: int
* **RestartDelay**: int

## InferenceSettings
### Properties
* **AudioFeedInputs**: [AudioFeedInput](#audiofeedinput)[]
* **EnrichmentMethods**: string[]
* **FeedArn**: string

## Input_Tags
### Properties

## InputAttachment
### Properties
* **AutomaticInputFailoverSettings**: [AutomaticInputFailoverSettings](#automaticinputfailoversettings)
* **InputAttachmentName**: string
* **InputId**: string
* **InputSettings**: [InputSettings](#inputsettings)
* **LogicalInterfaceNames**: string[]

## InputChannelLevel
### Properties
* **Gain**: int
* **InputChannel**: int

## InputDestination
### Properties
* **Ip**: string: The system-generated static IP address of endpoint.
It remains fixed for the lifetime of the input.
* **Network**: string: The ID of the attached network.
* **NetworkRoutes**: [InputDestinationRoute](#inputdestinationroute)[]: If the push input has an input location of ON-PREM it's a requirement to specify what the route of the input
is going to be on the customer local network.
* **Port**: string: The port number for the input.
* **StaticIpAddress**: string: The static IP address for the input destination.
* **StreamName**: string: The stream name for the input destination.
* **Url**: string: This represents the endpoint that the customer stream will be
pushed to.
* **Vpc**: [InputDestinationVpc](#inputdestinationvpc): The properties for a VPC type input destination.

## InputDestinationRoute
### Properties
* **Cidr**: string: The CIDR of the route.
* **Gateway**: string: An optional gateway for the route.

## InputDestinationVpc
### Properties
* **AvailabilityZone**: string: The availability zone of the Input destination.
* **NetworkInterfaceId**: string: The network interface ID of the Input destination in the VPC.

## InputDeviceHdSettings
### Properties
* **ActiveInput**: string: The input in use, HDMI or SDI.
* **ConfiguredInput**: string: The source that is configured for the input, or AUTO to let the device choose.
* **DeviceState**: string: Whether the device is currently streaming or idle.
* **Framerate**: int: The frame rate of the video source.
* **Height**: int: The height of the video source, in pixels.
* **LatencyMs**: int: The latency of the device, in milliseconds.
* **MaxBitrate**: int: The maximum bitrate in bits per second.
* **ScanType**: string: The scan type of the video source.
* **Width**: int: The width of the video source, in pixels.

## InputDeviceMediaConnectSettings
### Properties
* **FlowArn**: string: The ARN of the MediaConnect flow.
* **RoleArn**: string: The ARN of the role MediaLive assumes to send to the flow.
* **SecretArn**: string: The ARN of the Secrets Manager secret holding the encryption key.
* **SourceName**: string: The name of the MediaConnect flow source.

## InputDeviceNetworkSettings
### Properties
* **DnsAddresses**: string[]: The DNS addresses of the input device.
* **Gateway**: string: The network gateway the input device uses.
* **IpAddress**: string: The IP address of the input device.
* **IpScheme**: string: Whether the device is configured for a static IP address or DHCP.
* **SubnetMask**: string: The subnet mask of the input device.

## InputDeviceSettings
### Properties
* **Id**: string (Identifier): The unique ID for the device.

## InputDeviceUhdAudioChannelPairConfig
### Properties
* **Id**: int: The ID of the audio channel pair.
* **Profile**: string: The audio profile of the channel pair.

## InputDeviceUhdSettings
### Properties
* **ActiveInput**: string: The input in use, HDMI or SDI.
* **AudioChannelPairs**: [InputDeviceUhdAudioChannelPairConfig](#inputdeviceuhdaudiochannelpairconfig)[]: The audio channel pair configurations of the device.
* **Codec**: string: The codec the device uses to encode.
* **ConfiguredInput**: string: The source that is configured for the input, or AUTO to let the device choose.
* **DeviceState**: string: Whether the device is currently streaming or idle.
* **Framerate**: int: The frame rate of the video source.
* **Height**: int: The height of the video source, in pixels.
* **InputResolution**: string: The resolution of the video source.
* **LatencyMs**: int: The latency of the device, in milliseconds.
* **MaxBitrate**: int: The maximum bitrate in bits per second.
* **MediaconnectSettings**: [InputDeviceMediaConnectSettings](#inputdevicemediaconnectsettings)
* **ScanType**: string: The scan type of the video source.
* **Width**: int: The width of the video source, in pixels.

## InputLocation
### Properties
* **PasswordParam**: string
* **Uri**: string
* **Username**: string

## InputLossBehavior
### Properties
* **BlackFrameMsec**: int
* **InputLossImageColor**: string
* **InputLossImageSlate**: [InputLocation](#inputlocation)
* **InputLossImageType**: string
* **RepeatFrameMsec**: int

## InputLossFailoverSettings
### Properties
* **InputLossThresholdMsec**: int

## InputSdpLocation
### Properties
* **MediaIndex**: int: The index of the media stream in the SDP file for one SMPTE 2110 stream.
* **SdpUrl**: string: The URL of the SDP file for one SMPTE 2110 stream.

## InputSecurityGroup_Tags
### Properties

## InputSettings
### Properties
* **AudioSelectors**: [AudioSelector](#audioselector)[]
* **CaptionSelectors**: [CaptionSelector](#captionselector)[]
* **DeblockFilter**: string
* **DenoiseFilter**: string
* **FilterStrength**: int
* **InputFilter**: string
* **NetworkInputSettings**: [NetworkInputSettings](#networkinputsettings)
* **Scte35Pid**: int
* **Smpte2038DataPreference**: string
* **SourceEndBehavior**: string
* **VideoSelector**: [VideoSelector](#videoselector)

## InputSource
### Properties
* **PasswordParam**: string: The key used to extract the password from EC2 Parameter store.
* **Url**: string: This represents the customer's source URL where stream is
pulled from.
* **Username**: string: The username for the input source.

## InputSpecification
### Properties
* **Codec**: string
* **MaximumBitrate**: string
* **Resolution**: string

## InputVpcRequest
### Properties
* **SecurityGroupIds**: string[]: A list of up to 5 EC2 VPC security group IDs to attach to the Input VPC network interfaces.
Requires subnetIds. If none are specified then the VPC default security group will be used.
* **SubnetIds**: string[]: A list of 2 VPC subnet IDs from the same VPC.
Subnet IDs must be mapped to two unique availability zones (AZ).

## InputWhitelistRule
### Properties
* **Cidr**: string: The IPv4 CIDR that's whitelisted.

## InterfaceMapping
### Properties
* **LogicalInterfaceName**: string: logical interface name, unique in the list
* **NetworkId**: string: Network Id to be associated with the logical interface name, can be duplicated in list

## IpPool
### Properties
* **Cidr**: string: IP address cidr pool

## KeyProviderSettings
### Properties
* **StaticKeySettings**: [StaticKeySettings](#statickeysettings)

## LinkedChannelSettings
### Properties
* **FollowerChannelSettings**: [FollowerChannelSettings](#followerchannelsettings)
* **PrimaryChannelSettings**: [PrimaryChannelSettings](#primarychannelsettings)

## M2tsSettings
### Properties
* **AbsentInputAudioBehavior**: string
* **Arib**: string
* **AribCaptionsPid**: string
* **AribCaptionsPidControl**: string
* **AudioBufferModel**: string
* **AudioFramesPerPes**: int
* **AudioPids**: string
* **AudioStreamType**: string
* **Bitrate**: int
* **BufferModel**: string
* **CcDescriptor**: string
* **DvbNitSettings**: [DvbNitSettings](#dvbnitsettings)
* **DvbSdtSettings**: [DvbSdtSettings](#dvbsdtsettings)
* **DvbSubPids**: string
* **DvbTdtSettings**: [DvbTdtSettings](#dvbtdtsettings)
* **DvbTeletextPid**: string
* **Ebif**: string
* **EbpAudioInterval**: string
* **EbpLookaheadMs**: int
* **EbpPlacement**: string
* **EcmPid**: string
* **EsRateInPes**: string
* **EtvPlatformPid**: string
* **EtvSignalPid**: string
* **FragmentTime**: int
* **Klv**: string
* **KlvDataPids**: string
* **NielsenId3Behavior**: string
* **NullPacketBitrate**: int
* **PatInterval**: int
* **PcrControl**: string
* **PcrPeriod**: int
* **PcrPid**: string
* **PmtInterval**: int
* **PmtPid**: string
* **ProgramNum**: int
* **RateMode**: string
* **Scte27Pids**: string
* **Scte35Control**: string
* **Scte35Pid**: string
* **Scte35PrerollPullupMilliseconds**: int
* **SegmentationMarkers**: string
* **SegmentationStyle**: string
* **SegmentationTime**: int
* **TimedMetadataBehavior**: string
* **TimedMetadataPid**: string
* **TransportStreamId**: int
* **VideoPid**: string

## M3u8Settings
### Properties
* **AudioFramesPerPes**: int
* **AudioPids**: string
* **EcmPid**: string
* **KlvBehavior**: string
* **KlvDataPids**: string
* **NielsenId3Behavior**: string
* **PatInterval**: int
* **PcrControl**: string
* **PcrPeriod**: int
* **PcrPid**: string
* **PmtInterval**: int
* **PmtPid**: string
* **ProgramNum**: int
* **Scte35Behavior**: string
* **Scte35Pid**: string
* **TimedMetadataBehavior**: string
* **TimedMetadataPid**: string
* **TransportStreamId**: int
* **VideoPid**: string

## MaintenanceCreateSettings
### Properties
* **MaintenanceDay**: string
* **MaintenanceStartTime**: string

## MediaConnectFlow
### Properties
* **FlowArn**: string: The unique ARN of the MediaConnect Flow being used as a source.

## MediaConnectRouterGroupSettings
### Properties
* **AvailabilityZones**: string[]

## MediaConnectRouterOutputConnectionMap
### Properties
* **Pipeline0**: string
* **Pipeline1**: string

## MediaConnectRouterOutputDestinationSettings
### Properties
* **EncryptionType**: string
* **SecretArn**: string

## MediaConnectRouterOutputSettings
### Properties
* **ConnectedRouterInputs**: [MediaConnectRouterOutputConnectionMap](#mediaconnectrouteroutputconnectionmap)
* **ContainerSettings**: [UdpMediaConnectRouterContainerSettings](#udpmediaconnectroutercontainersettings)
* **Destination**: [OutputLocationRef](#outputlocationref)

## MediaPackageGroupSettings
### Properties
* **Destination**: [OutputLocationRef](#outputlocationref)
* **MediapackageV2GroupSettings**: [MediaPackageV2GroupSettings](#mediapackagev2groupsettings)

## MediaPackageOutputDestinationSettings
### Properties
* **ChannelEndpointId**: string
* **ChannelGroup**: string
* **ChannelId**: string
* **ChannelName**: string
* **MediaPackageRegionName**: string

## MediaPackageOutputSettings
### Properties
* **MediaPackageV2DestinationSettings**: [MediaPackageV2DestinationSettings](#mediapackagev2destinationsettings)

## MediaPackageV2DestinationSettings
### Properties
* **AudioGroupId**: string
* **AudioRenditionSets**: string
* **HlsAutoSelect**: string
* **HlsDefault**: string
* **OutputUsage**: string[]

## MediaPackageV2GroupSettings
### Properties
* **AdditionalDestinations**: [AdditionalDestinations](#additionaldestinations)[]
* **CaptionLanguageMappings**: [CaptionLanguageMapping](#captionlanguagemapping)[]
* **Id3Behavior**: string
* **KlvBehavior**: string
* **NielsenId3Behavior**: string
* **Scte35Type**: string
* **SegmentLength**: int
* **SegmentLengthUnits**: string
* **TimedMetadataId3Frame**: string
* **TimedMetadataId3Period**: int
* **TimedMetadataPassthrough**: string
* **WatermarkingSettings**: [MediaPackageV2WatermarkingSettings](#mediapackagev2watermarkingsettings)

## MediaPackageV2WatermarkingSettings
### Properties
* **MediaPackageV2AbWatermarkerIrdetoSettings**: [CmafIngestMediaPackageV2AbWatermarkerIrdetoSettings](#cmafingestmediapackagev2abwatermarkerirdetosettings)

## MediaResourceMap
### Properties

## MonitorDeployment
### Properties
* **DetailsUri**: string: URI associated with a signal map's monitor deployment.
* **ErrorMessage**: string: Error message associated with a failed monitor deployment of a signal map.
* **Status**: string (Required)

## MotionGraphicsConfiguration
### Properties
* **MotionGraphicsInsertion**: string
* **MotionGraphicsSettings**: [MotionGraphicsSettings](#motiongraphicssettings)

## MotionGraphicsSettings
### Properties
* **HtmlMotionGraphicsSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)

## Mp2Settings
### Properties
* **Bitrate**: int
* **CodingMode**: string
* **SampleRate**: int

## Mpeg2FilterSettings
### Properties
* **TemporalFilterSettings**: [TemporalFilterSettings](#temporalfiltersettings)

## Mpeg2Settings
### Properties
* **AdaptiveQuantization**: string
* **AfdSignaling**: string
* **ColorMetadata**: string
* **ColorSpace**: string
* **DisplayAspectRatio**: string
* **FilterSettings**: [Mpeg2FilterSettings](#mpeg2filtersettings)
* **FixedAfd**: string
* **FramerateDenominator**: int
* **FramerateNumerator**: int
* **GopClosedCadence**: int
* **GopNumBFrames**: int
* **GopSize**: int
* **GopSizeUnits**: string
* **ScanType**: string
* **SubgopLength**: string
* **TimecodeBurninSettings**: [TimecodeBurninSettings](#timecodeburninsettings)
* **TimecodeInsertion**: string

## MsSmoothGroupSettings
### Properties
* **AcquisitionPointId**: string
* **AudioOnlyTimecodeControl**: string
* **CertificateMode**: string
* **ConnectionRetryInterval**: int
* **Destination**: [OutputLocationRef](#outputlocationref)
* **EventId**: string
* **EventIdMode**: string
* **EventStopBehavior**: string
* **FilecacheDuration**: int
* **FragmentLength**: int
* **InputLossAction**: string
* **NumRetries**: int
* **RestartDelay**: int
* **SegmentationMode**: string
* **SendDelayMs**: int
* **SparseTrackType**: string
* **StreamManifestBehavior**: string
* **TimestampOffset**: string
* **TimestampOffsetMode**: string

## MsSmoothOutputSettings
### Properties
* **H265PackagingType**: string
* **NameModifier**: string

## MulticastInputSettings
### Properties
* **SourceIpAddress**: string

## MulticastSettings
### Properties
* **Sources**: [MulticastSource](#multicastsource)[]: Placeholder documentation for __listOfMulticastSource

## MulticastSource
### Properties
* **SourceIp**: string: This represents the ip address of the device sending the multicast stream.
* **Url**: string (Required): This represents the customer's source URL where multicast stream is pulled from.

## Multiplex_MultiplexMediaConnectOutputDestinationSettings
### Properties
* **EntitlementArn**: string: The MediaConnect entitlement ARN available as a Flow source.

## MultiplexContainerSettings
### Properties
* **MultiplexM2tsSettings**: [MultiplexM2tsSettings](#multiplexm2tssettings)

## MultiplexM2tsSettings
### Properties
* **AbsentInputAudioBehavior**: string
* **Arib**: string
* **AudioBufferModel**: string
* **AudioFramesPerPes**: int
* **AudioStreamType**: string
* **CcDescriptor**: string
* **Ebif**: string
* **EsRateInPes**: string
* **Klv**: string
* **NielsenId3Behavior**: string
* **PcrControl**: string
* **PcrPeriod**: int
* **Scte35Control**: string
* **Scte35PrerollPullupMilliseconds**: int

## MultiplexOutputDestination
### Properties
* **MultiplexMediaConnectOutputDestinationSettings**: [Multiplex_MultiplexMediaConnectOutputDestinationSettings](#multiplexmultiplexmediaconnectoutputdestinationsettings): Multiplex MediaConnect output destination settings.

## MultiplexOutputSettings
### Properties
* **ContainerSettings**: [MultiplexContainerSettings](#multiplexcontainersettings)
* **Destination**: [OutputLocationRef](#outputlocationref)

## MultiplexProgramChannelDestinationSettings
### Properties
* **MultiplexId**: string
* **ProgramName**: string

## MultiplexProgramPacketIdentifiersMap
### Properties
* **AudioPids**: int[]
* **DvbSubPids**: int[]
* **DvbTeletextPid**: int
* **EtvPlatformPid**: int
* **EtvSignalPid**: int
* **KlvDataPids**: int[]
* **PcrPid**: int
* **PmtPid**: int
* **PrivateMetadataPid**: int
* **Scte27Pids**: int[]
* **Scte35Pid**: int
* **TimedMetadataPid**: int
* **VideoPid**: int

## MultiplexProgramPipelineDetail
### Properties
* **ActiveChannelPipeline**: string: Identifies the channel pipeline that is currently active for the pipeline (identified by PipelineId) in the multiplex.
* **PipelineId**: string: Identifies a specific pipeline in the multiplex.

## MultiplexProgramServiceDescriptor
### Properties
* **ProviderName**: string (Required): Name of the provider.
* **ServiceName**: string (Required): Name of the service.

## MultiplexProgramSettings
### Properties
* **PreferredChannelPipeline**: string
* **ProgramNumber**: int (Required): Unique program number.
* **ServiceDescriptor**: [MultiplexProgramServiceDescriptor](#multiplexprogramservicedescriptor): Transport stream service descriptor configuration for the Multiplex program.
* **VideoSettings**: [MultiplexVideoSettings](#multiplexvideosettings): Program video settings configuration.

## MultiplexSettings
### Properties
* **MaximumVideoBufferDelayMilliseconds**: int: Maximum video buffer delay in milliseconds.
* **TransportStreamBitrate**: int (Required): Transport stream bit rate.
* **TransportStreamId**: int (Required): Transport stream ID.
* **TransportStreamReservedBitrate**: int: Transport stream reserved bit rate.

## MultiplexVideoSettings
### Properties

## NetworkInputSettings
### Properties
* **HlsInputSettings**: [HlsInputSettings](#hlsinputsettings)
* **MulticastInputSettings**: [MulticastInputSettings](#multicastinputsettings)
* **ServerValidation**: string

## NielsenCBET
### Properties
* **CbetCheckDigitString**: string
* **CbetStepaside**: string
* **Csid**: string

## NielsenConfiguration
### Properties
* **DistributorId**: string
* **NielsenPcmToId3Tagging**: string

## NielsenNaesIiNwOnlySettings
### Properties
* **CheckDigitString**: string
* **Sid**: int
* **Timezone**: string

## NielsenWatermarksSettings
### Properties
* **NielsenCbetSettings**: [NielsenCBET](#nielsencbet)
* **NielsenDistributionType**: string
* **NielsenNaesIiNwSettings**: [NielsenNaesIiNwOnlySettings](#nielsennaesiinwonlysettings)
* **NielsenNwOnlySettings**: [NielsenNaesIiNwOnlySettings](#nielsennaesiinwonlysettings)

## NodeInterfaceMapping
### Properties
* **LogicalInterfaceName**: string: The logical name for this interface.
* **NetworkInterfaceMode**: string: The network interface mode.
* **PhysicalInterfaceName**: string: The physical interface name.

## Output
### Properties
* **AudioDescriptionNames**: string[]
* **CaptionDescriptionNames**: string[]
* **OutputName**: string
* **OutputSettings**: [OutputSettings](#outputsettings)
* **VideoDescriptionName**: string

## OutputDestination
### Properties
* **Id**: string (Identifier)
* **LogicalInterfaceNames**: string[]
* **MediaConnectRouterSettings**: [MediaConnectRouterOutputDestinationSettings](#mediaconnectrouteroutputdestinationsettings)[]
* **MediaPackageSettings**: [MediaPackageOutputDestinationSettings](#mediapackageoutputdestinationsettings)[]
* **MultiplexSettings**: [MultiplexProgramChannelDestinationSettings](#multiplexprogramchanneldestinationsettings)
* **Settings**: [OutputDestinationSettings](#outputdestinationsettings)[]
* **SrtSettings**: [SrtOutputDestinationSettings](#srtoutputdestinationsettings)[]

## OutputDestinationSettings
### Properties
* **PasswordParam**: string
* **StreamName**: string
* **Url**: string
* **Username**: string
* **VirtualSourceAddress**: string

## OutputGroup
### Properties
* **Name**: string
* **OutputGroupSettings**: [OutputGroupSettings](#outputgroupsettings)
* **Outputs**: [Output](#output)[]

## OutputGroupSettings
### Properties
* **ArchiveGroupSettings**: [ArchiveGroupSettings](#archivegroupsettings)
* **CmafIngestGroupSettings**: [CmafIngestGroupSettings](#cmafingestgroupsettings)
* **FrameCaptureGroupSettings**: [FrameCaptureGroupSettings](#framecapturegroupsettings)
* **HlsGroupSettings**: [HlsGroupSettings](#hlsgroupsettings)
* **MediaConnectRouterGroupSettings**: [MediaConnectRouterGroupSettings](#mediaconnectroutergroupsettings)
* **MediaPackageGroupSettings**: [MediaPackageGroupSettings](#mediapackagegroupsettings)
* **MsSmoothGroupSettings**: [MsSmoothGroupSettings](#mssmoothgroupsettings)
* **MultiplexGroupSettings**: [EmptyConfigurationSettings](#emptyconfigurationsettings)
* **RtmpGroupSettings**: [RtmpGroupSettings](#rtmpgroupsettings)
* **SrtGroupSettings**: [SrtGroupSettings](#srtgroupsettings)
* **UdpGroupSettings**: [UdpGroupSettings](#udpgroupsettings)

## OutputLocationRef
### Properties
* **DestinationRefId**: string

## OutputLockingSettings
### Properties
* **DisabledLockingSettings**: [DisabledLockingSettings](#disabledlockingsettings)
* **EpochLockingSettings**: [EpochLockingSettings](#epochlockingsettings)
* **PipelineLockingSettings**: [PipelineLockingSettings](#pipelinelockingsettings)

## OutputSettings
### Properties
* **ArchiveOutputSettings**: [ArchiveOutputSettings](#archiveoutputsettings)
* **CmafIngestOutputSettings**: [CmafIngestFrameCaptureOutputSettings](#cmafingestframecaptureoutputsettings)
* **FrameCaptureOutputSettings**: [CmafIngestFrameCaptureOutputSettings](#cmafingestframecaptureoutputsettings)
* **HlsOutputSettings**: [HlsOutputSettings](#hlsoutputsettings)
* **MediaConnectRouterOutputSettings**: [MediaConnectRouterOutputSettings](#mediaconnectrouteroutputsettings)
* **MediaPackageOutputSettings**: [MediaPackageOutputSettings](#mediapackageoutputsettings)
* **MsSmoothOutputSettings**: [MsSmoothOutputSettings](#mssmoothoutputsettings)
* **MultiplexOutputSettings**: [MultiplexOutputSettings](#multiplexoutputsettings)
* **RtmpOutputSettings**: [RtmpOutputSettings](#rtmpoutputsettings)
* **SrtOutputSettings**: [SrtOutputSettings](#srtoutputsettings)
* **UdpOutputSettings**: [UdpOutputSettings](#udpoutputsettings)

## PipelineLockingSettings
### Properties
* **CustomEpoch**: string
* **PipelineLockingMethod**: string

## PrimaryChannelSettings
### Properties
* **LinkedChannelType**: string

## RemixSettings
### Properties
* **ChannelMappings**: [AudioChannelMapping](#audiochannelmapping)[]
* **ChannelsIn**: int
* **ChannelsOut**: int

## RenewalSettings
### Properties
* **AutomaticRenewal**: string: Automatic renewal status for the reservation.
* **RenewalCount**: int: Count for the reservation renewal.

## ReservationResourceSpecification
### Properties
* **ChannelClass**: string: Channel class, e.g. 'STANDARD'
* **Codec**: string: Codec, e.g. 'AVC'
* **MaximumBitrate**: string: Maximum bitrate, e.g. 'MAX_20_MBPS'
* **MaximumFramerate**: string: Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only)
* **Resolution**: string: Resolution, e.g. 'HD'
* **ResourceType**: string: Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'
* **SpecialFeature**: string: Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only)
* **VideoQuality**: string: Video quality, e.g. 'STANDARD' (Outputs only)

## ReservationResourceSpecification
### Properties
* **ChannelClass**: string: Channel class, e.g. 'STANDARD'.
* **Codec**: string: Codec, e.g. 'AVC'.
* **MaximumBitrate**: string: Maximum bitrate, e.g. 'MAX_20_MBPS'.
* **MaximumFramerate**: string: Maximum framerate, e.g. 'MAX_30_FPS' (Outputs only).
* **Resolution**: string: Resolution, e.g. 'HD'.
* **ResourceType**: string: Resource type, 'INPUT', 'OUTPUT', 'MULTIPLEX', or 'CHANNEL'.
* **SpecialFeature**: string: Special feature, e.g. 'AUDIO_NORMALIZATION' (Channels only).
* **VideoQuality**: string: Video quality, e.g. 'STANDARD' (Outputs only).

## Route
### Properties
* **Cidr**: string: Ip address cidr
* **Gateway**: string: IP address for the route packet paths

## RouterDestinationSettings
### Properties
* **AvailabilityZoneName**: string (Required): The Availability Zone (AZ) name this destination is created in.
* **RouterOutputArn**: string: The ARN of the MediaConnect Router output currently connected to this input.

## RouterSettings
### Properties
* **Destinations**: [RouterDestinationSettings](#routerdestinationsettings)[] (ReadOnly): MediaConnect Router destinations associated with this input.
* **EncryptionType**: string: Encryption configuration for the MediaConnect Router association. AUTOMATIC uses a service-managed secret; SECRETS_MANAGER requires SecretArn.
* **SecretArn**: string: The ARN of the Secrets Manager secret used to encrypt this input. Required when EncryptionType is SECRETS_MANAGER.

## RtmpGroupSettings
### Properties
* **AdMarkers**: string[]
* **AuthenticationScheme**: string
* **CacheFullBehavior**: string
* **CacheLength**: int
* **CaptionData**: string
* **IncludeFillerNalUnits**: string
* **InputLossAction**: string
* **RestartDelay**: int

## RtmpOutputSettings
### Properties
* **CertificateMode**: string
* **ConnectionRetryInterval**: int
* **Destination**: [OutputLocationRef](#outputlocationref)
* **NumRetries**: int

## Scte20SourceSettings
### Properties
* **Convert608To708**: string
* **Source608ChannelNumber**: int

## Scte27DvbSubSourceSettings
### Properties
* **OcrLanguage**: string
* **Pid**: int

## Scte35SpliceInsertTimeSignalAposSettings
### Properties
* **AdAvailOffset**: int
* **NoRegionalBlackoutFlag**: string
* **WebDeliveryAllowedFlag**: string

## SdiSourceMapping
### Properties
* **CardNumber**: int: The card number.
* **ChannelNumber**: int: The channel number.
* **SdiSource**: string: The SDI source.

## SmartSubtitleSourceSettings
### Properties
* **CaptionSynchronizationMode**: string
* **InferenceFeedOutput**: string

## Smpte2110ReceiverGroup
### Properties
* **SdpSettings**: [Smpte2110ReceiverGroupSdpSettings](#smpte2110receivergroupsdpsettings): The single Smpte2110ReceiverGroupSdpSettings that identify the video, audio, and ancillary streams for this receiver group.

## Smpte2110ReceiverGroupSdpSettings
### Properties
* **AncillarySdps**: [InputSdpLocation](#inputsdplocation)[]: A list of InputSdpLocations. Each item in the list specifies the SDP file and index for one ancillary SMPTE 2110 stream.
Each stream encapsulates one captions stream (out of any number you can include) or the single SCTE 35 stream that you can include.
* **AudioSdps**: [InputSdpLocation](#inputsdplocation)[]: A list of InputSdpLocations. Each item in the list specifies the SDP file and index for one audio SMPTE 2110 stream.
* **VideoSdp**: [InputSdpLocation](#inputsdplocation): The InputSdpLocation that specifies the SDP file and index for the single video SMPTE 2110 stream for this 2110 input.

## Smpte2110ReceiverGroupSettings
### Properties
* **Smpte2110ReceiverGroups**: [Smpte2110ReceiverGroup](#smpte2110receivergroup)[]: Placeholder documentation for __listOfSmpte2110ReceiverGroup

## SrtCallerDecryption
### Properties
* **Algorithm**: string: The algorithm used to encrypt content.
* **PassphraseSecretArn**: string: The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

## SrtCallerSource
### Properties
* **Decryption**: [SrtCallerDecryption](#srtcallerdecryption): The decryption settings for the SRT caller source. Present only if the source has decryption enabled.
* **MinimumLatency**: int: The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
* **SrtListenerAddress**: string: The IP address at the upstream system (the listener) that MediaLive (the caller) connects to.
* **SrtListenerPort**: string: The port at the upstream system (the listener) that MediaLive (the caller) connects to.
* **StreamId**: string: The stream ID, if the upstream system uses this identifier.

## SrtGroupSettings
### Properties
* **InputLossAction**: string

## SrtListenerDecryption
### Properties
* **Algorithm**: string: The algorithm used to encrypt content.
* **PassphraseSecretArn**: string: The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

## SrtListenerSettings
### Properties
* **Decryption**: [SrtListenerDecryption](#srtlistenerdecryption): The decryption settings for the SRT listener source. Present only if the source has decryption enabled.
* **MinimumLatency**: int: The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
* **StreamId**: string: The stream ID, if the upstream system uses this identifier.

## SrtOutputDestinationSettings
### Properties
* **ConnectionMode**: string
* **EncryptionPassphraseSecretArn**: string
* **ListenerPort**: int
* **StreamId**: string
* **Url**: string

## SrtOutputSettings
### Properties
* **BufferMsec**: int
* **ContainerSettings**: [UdpMediaConnectRouterContainerSettings](#udpmediaconnectroutercontainersettings)
* **Destination**: [OutputLocationRef](#outputlocationref)
* **EncryptionType**: string
* **Latency**: int

## SrtSettings
### Properties
* **SrtCallerSources**: [SrtCallerSource](#srtcallersource)[]: Placeholder documentation for __listOfSrtCallerSource
* **SrtListenerSettings**: [SrtListenerSettings](#srtlistenersettings): Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.

## StandardHlsSettings
### Properties
* **AudioRenditionSets**: string
* **M3u8Settings**: [M3u8Settings](#m3u8settings)

## StaticKeySettings
### Properties
* **KeyProviderServer**: [InputLocation](#inputlocation)
* **StaticKeyValue**: string

## SuccessfulMonitorDeployment
### Properties
* **DetailsUri**: string (Required): URI associated with a signal map's monitor deployment.
* **Status**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## TagMap
### Properties

## Tags
### Properties
* **Key**: string
* **Value**: string

## Tags
### Properties
* **Key**: string
* **Value**: string

## Tags
### Properties
* **Key**: string
* **Value**: string

## Tags
### Properties
* **Key**: string
* **Value**: string

## Tags
### Properties
* **Key**: string
* **Value**: string

## TeletextSourceSettings
### Properties
* **OutputRectangle**: [CaptionRectangle](#captionrectangle)
* **PageNumber**: string

## TemporalFilterSettings
### Properties
* **PostFilterSharpening**: string
* **Strength**: string

## TextCaptionPositionSettings
### Properties
* **YPositionPercentage**: int

## ThumbnailConfiguration
### Properties
* **State**: string

## TimecodeBurninSettings
### Properties
* **FontSize**: string
* **Position**: string
* **Prefix**: string

## TimecodeConfig
### Properties
* **Source**: string
* **SyncThreshold**: int

## TtmlDestinationSettings
### Properties
* **Position**: [TextCaptionPositionSettings](#textcaptionpositionsettings)
* **StyleControl**: string

## UdpGroupSettings
### Properties
* **InputLossAction**: string
* **TimedMetadataId3Frame**: string
* **TimedMetadataId3Period**: int

## UdpMediaConnectRouterContainerSettings
### Properties
* **M2tsSettings**: [M2tsSettings](#m2tssettings)

## UdpOutputSettings
### Properties
* **BufferMsec**: int
* **ContainerSettings**: [UdpMediaConnectRouterContainerSettings](#udpmediaconnectroutercontainersettings)
* **Destination**: [OutputLocationRef](#outputlocationref)
* **FecOutputSettings**: [FecOutputSettings](#fecoutputsettings)

## VideoBlackFailoverSettings
### Properties
* **BlackDetectThreshold**: int
* **VideoBlackThresholdMsec**: int

## VideoCodecSettings
### Properties
* **Av1Settings**: [Av1Settings](#av1settings)
* **FrameCaptureSettings**: [FrameCaptureSettings](#framecapturesettings)
* **H264Settings**: [H264Settings](#h264settings)
* **H265Settings**: [H265Settings](#h265settings)
* **Mpeg2Settings**: [Mpeg2Settings](#mpeg2settings)

## VideoDescription
### Properties
* **Border**: int
* **CodecSettings**: [VideoCodecSettings](#videocodecsettings)
* **CropRectangle**: [VideoPositionRectangle](#videopositionrectangle)
* **Height**: int
* **Name**: string
* **OutputPositionRectangle**: [VideoPositionRectangle](#videopositionrectangle)
* **RespondToAfd**: string
* **ScalingBehavior**: string
* **Sharpness**: int
* **Width**: int

## VideoPositionRectangle
### Properties
* **Height**: int
* **Width**: int
* **X**: int
* **Y**: int

## VideoSelector
### Properties
* **ColorSpace**: string
* **ColorSpaceSettings**: [VideoSelectorColorSpaceSettings](#videoselectorcolorspacesettings)
* **ColorSpaceUsage**: string
* **SelectorSettings**: [VideoSelectorSettings](#videoselectorsettings)

## VideoSelectorColorSpaceSettings
### Properties
* **Hdr10Settings**: [Hdr10Settings](#hdr10settings)

## VideoSelectorPid
### Properties
* **Pid**: int

## VideoSelectorProgramId
### Properties
* **ProgramId**: int

## VideoSelectorSettings
### Properties
* **VideoSelectorPid**: [VideoSelectorPid](#videoselectorpid)
* **VideoSelectorProgramId**: [VideoSelectorProgramId](#videoselectorprogramid)

## VpcOutputSettings
### Properties
* **PublicAddressAllocationIds**: string[] (WriteOnly)
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## WavSettings
### Properties
* **BitDepth**: int
* **CodingMode**: string
* **SampleRate**: int

## WebvttDestinationSettings
### Properties
* **Position**: [TextCaptionPositionSettings](#textcaptionpositionsettings)
* **StyleControl**: string

