# AWS.MediaLive @ default

## Resource AWS.MediaLive/ChannelPlacementGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/ChannelPlacementGroupProperties](#awsmedialivechannelplacementgroupproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/CloudWatchAlarmTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/CloudWatchAlarmTemplateProperties](#awsmedialivecloudwatchalarmtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/CloudWatchAlarmTemplateGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/CloudWatchAlarmTemplateGroupProperties](#awsmedialivecloudwatchalarmtemplategroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/ClusterProperties](#awsmedialiveclusterproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/EventBridgeRuleTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/EventBridgeRuleTemplateProperties](#awsmedialiveeventbridgeruletemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/EventBridgeRuleTemplateGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/EventBridgeRuleTemplateGroupProperties](#awsmedialiveeventbridgeruletemplategroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Multiplex@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/MultiplexProperties](#awsmedialivemultiplexproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/Multiplexprogram@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/MultiplexprogramProperties](#awsmedialivemultiplexprogramproperties) (Identifier): properties of the resource

## Resource AWS.MediaLive/Network@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/NetworkProperties](#awsmedialivenetworkproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/SdiSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/SdiSourceProperties](#awsmedialivesdisourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaLive/SignalMap@default
* **Valid Scope(s)**: Unknown
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
* **GroupIdentifier**: string (Required, WriteOnly): A cloudwatch alarm template group's identifier. Can be either be its id or current name.
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
* **GroupIdentifier**: string (Required, WriteOnly): An eventbridge rule template group's identifier. Can be either be its id or current name.
* **Id**: string (ReadOnly): An eventbridge rule template's id. AWS provided templates have ids that start with `aws-`
* **Identifier**: string (ReadOnly, Identifier): Placeholder documentation for __string
* **ModifiedAt**: string (ReadOnly): Placeholder documentation for __timestampIso8601
* **Name**: string (Required): A resource's name. Names must be unique within the scope of a resource type in a specific region.
* **Tags**: [TagMap](#tagmap)

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

## InterfaceMapping
### Properties
* **LogicalInterfaceName**: string: logical interface name, unique in the list
* **NetworkId**: string: Network Id to be associated with the logical interface name, can be duplicated in list

## IpPool
### Properties
* **Cidr**: string: IP address cidr pool

## MediaResourceMap
### Properties

## MonitorDeployment
### Properties
* **DetailsUri**: string: URI associated with a signal map's monitor deployment.
* **ErrorMessage**: string: Error message associated with a failed monitor deployment of a signal map.
* **Status**: string (Required)

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

## Route
### Properties
* **Cidr**: string: Ip address cidr
* **Gateway**: string: IP address for the route packet paths

## SuccessfulMonitorDeployment
### Properties
* **DetailsUri**: string (Required): URI associated with a signal map's monitor deployment.
* **Status**: string (Required)

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

