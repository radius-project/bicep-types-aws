# AWS.MediaLive @ default

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

## ClusterNetworkSettings
### Properties
* **DefaultRoute**: string: Default value if the customer does not define it in channel Output API
* **InterfaceMappings**: [InterfaceMapping](#interfacemapping)[]: Network mappings for the cluster

## EventBridgeRuleTemplateTarget
### Properties
* **Arn**: string (Required): Target ARNs must be either an SNS topic or CloudWatch log group.

## FailedMediaResourceMap
### Properties

## Input_Tags
### Properties

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

## InputDeviceSettings
### Properties
* **Id**: string (Identifier): The unique ID for the device.

## InputSdpLocation
### Properties
* **MediaIndex**: int: The index of the media stream in the SDP file for one SMPTE 2110 stream.
* **SdpUrl**: string: The URL of the SDP file for one SMPTE 2110 stream.

## InputSecurityGroup_Tags
### Properties

## InputSource
### Properties
* **PasswordParam**: string: The key used to extract the password from EC2 Parameter store.
* **Url**: string: This represents the customer's source URL where stream is
pulled from.
* **Username**: string: The username for the input source.

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

## MediaConnectFlow
### Properties
* **FlowArn**: string: The unique ARN of the MediaConnect Flow being used as a source.

## MediaResourceMap
### Properties

## MonitorDeployment
### Properties
* **DetailsUri**: string: URI associated with a signal map's monitor deployment.
* **ErrorMessage**: string: Error message associated with a failed monitor deployment of a signal map.
* **Status**: string (Required)

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

## MultiplexOutputDestination
### Properties
* **MultiplexMediaConnectOutputDestinationSettings**: [Multiplex_MultiplexMediaConnectOutputDestinationSettings](#multiplexmultiplexmediaconnectoutputdestinationsettings): Multiplex MediaConnect output destination settings.

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

## NodeInterfaceMapping
### Properties
* **LogicalInterfaceName**: string: The logical name for this interface.
* **NetworkInterfaceMode**: string: The network interface mode.
* **PhysicalInterfaceName**: string: The physical interface name.

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

## SdiSourceMapping
### Properties
* **CardNumber**: int: The card number.
* **ChannelNumber**: int: The channel number.
* **SdiSource**: string: The SDI source.

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

## SrtListenerDecryption
### Properties
* **Algorithm**: string: The algorithm used to encrypt content.
* **PassphraseSecretArn**: string: The ARN for the secret in Secrets Manager. Someone in your organization must create a secret and provide you with its ARN. The secret holds the passphrase that MediaLive uses to decrypt the source content.

## SrtListenerSettings
### Properties
* **Decryption**: [SrtListenerDecryption](#srtlistenerdecryption): The decryption settings for the SRT listener source. Present only if the source has decryption enabled.
* **MinimumLatency**: int: The preferred latency (in milliseconds) for implementing packet loss and recovery. Packet recovery is a key feature of SRT.
* **StreamId**: string: The stream ID, if the upstream system uses this identifier.

## SrtSettings
### Properties
* **SrtCallerSources**: [SrtCallerSource](#srtcallersource)[]: Placeholder documentation for __listOfSrtCallerSource
* **SrtListenerSettings**: [SrtListenerSettings](#srtlistenersettings): Settings for an SRT listener input. Configured only when the input uses the SRT_LISTENER input type.

## SuccessfulMonitorDeployment
### Properties
* **DetailsUri**: string (Required): URI associated with a signal map's monitor deployment.
* **Status**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

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

