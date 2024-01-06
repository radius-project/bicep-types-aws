# AWS.MediaLive @ default

## Resource AWS.MediaLive/Multiplex@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/MultiplexProperties](#awsmedialivemultiplexproperties) (Required): properties of the resource

## Resource AWS.MediaLive/Multiplexprogram@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaLive/MultiplexprogramProperties](#awsmedialivemultiplexprogramproperties): properties of the resource

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

## MultiplexOutputDestination
### Properties
* **MultiplexMediaConnectOutputDestinationSettings**: [Multiplex_MultiplexMediaConnectOutputDestinationSettings](#multiplexmultiplexmediaconnectoutputdestinationsettings): Multiplex MediaConnect output destination settings.

## Multiplex_MultiplexMediaConnectOutputDestinationSettings
### Properties
* **EntitlementArn**: string: The MediaConnect entitlement ARN available as a Flow source.

## MultiplexSettings
### Properties
* **MaximumVideoBufferDelayMilliseconds**: int: Maximum video buffer delay in milliseconds.
* **TransportStreamBitrate**: int (Required): Transport stream bit rate.
* **TransportStreamId**: int (Required): Transport stream ID.
* **TransportStreamReservedBitrate**: int: Transport stream reserved bit rate.

## Tags
### Properties
* **Key**: string
* **Value**: string

## AWS.MediaLive/MultiplexprogramProperties
### Properties
* **ChannelId**: string: The MediaLive channel associated with the program.
* **MultiplexId**: string (Identifier): The ID of the multiplex that the program belongs to.
* **MultiplexProgramSettings**: [MultiplexProgramSettings](#multiplexprogramsettings): The settings for this multiplex program.
* **PacketIdentifiersMap**: [MultiplexProgramPacketIdentifiersMap](#multiplexprogrampacketidentifiersmap): The packet identifier map for this multiplex program.
* **PipelineDetails**: [MultiplexProgramPipelineDetail](#multiplexprogrampipelinedetail)[]: Contains information about the current sources for the specified program in the specified multiplex. Keep in mind that each multiplex pipeline connects to both pipelines in a given source channel (the channel identified by the program). But only one of those channel pipelines is ever active at one time.
* **PreferredChannelPipeline**: string (WriteOnly): The settings for this multiplex program.
* **ProgramName**: string (Identifier): The name of the multiplex program.

## MultiplexProgramSettings
### Properties
* **PreferredChannelPipeline**: string
* **ProgramNumber**: int (Required): Unique program number.
* **ServiceDescriptor**: [MultiplexProgramServiceDescriptor](#multiplexprogramservicedescriptor): Transport stream service descriptor configuration for the Multiplex program.
* **VideoSettings**: [MultiplexVideoSettings](#multiplexvideosettings): Program video settings configuration.

## MultiplexProgramServiceDescriptor
### Properties
* **ProviderName**: string (Required): Name of the provider.
* **ServiceName**: string (Required): Name of the service.

## MultiplexVideoSettings
### Properties

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

