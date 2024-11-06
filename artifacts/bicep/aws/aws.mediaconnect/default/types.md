# AWS.MediaConnect @ default

## Resource AWS.MediaConnect/Bridge@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/BridgeProperties](#awsmediaconnectbridgeproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/BridgeOutput@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/BridgeOutputProperties](#awsmediaconnectbridgeoutputproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/BridgeSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/BridgeSourceProperties](#awsmediaconnectbridgesourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/Flow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowProperties](#awsmediaconnectflowproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/FlowEntitlement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowEntitlementProperties](#awsmediaconnectflowentitlementproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/FlowOutput@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowOutputProperties](#awsmediaconnectflowoutputproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/FlowSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowSourceProperties](#awsmediaconnectflowsourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.MediaConnect/FlowVpcInterface@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowVpcInterfaceProperties](#awsmediaconnectflowvpcinterfaceproperties) (Required, Identifier): properties of the resource

## AWS.MediaConnect/BridgeOutputProperties
### Properties
* **BridgeArn**: string (Required, Identifier): The Amazon Resource Number (ARN) of the bridge.
* **Name**: string (Required, Identifier): The network output name.
* **NetworkOutput**: [BridgeNetworkOutput](#bridgenetworkoutput) (Required): The output of the bridge.

## AWS.MediaConnect/BridgeProperties
### Properties
* **BridgeArn**: string (ReadOnly, Identifier): The Amazon Resource Number (ARN) of the bridge.
* **BridgeState**: string (ReadOnly)
* **EgressGatewayBridge**: [Bridge_EgressGatewayBridge](#bridgeegressgatewaybridge)
* **IngressGatewayBridge**: [Bridge_IngressGatewayBridge](#bridgeingressgatewaybridge)
* **Name**: string (Required): The name of the bridge.
* **Outputs**: [BridgeOutput](#bridgeoutput)[]: The outputs on this bridge.
* **PlacementArn**: string (Required): The placement Amazon Resource Number (ARN) of the bridge.
* **SourceFailoverConfig**: [FailoverConfig](#failoverconfig)
* **Sources**: [BridgeSource](#bridgesource)[] (Required): The sources on this bridge.

## AWS.MediaConnect/BridgeSourceProperties
### Properties
* **BridgeArn**: string (Required, Identifier): The Amazon Resource Number (ARN) of the bridge.
* **FlowSource**: [BridgeFlowSource](#bridgeflowsource)
* **Name**: string (Required, Identifier): The name of the source.
* **NetworkSource**: [BridgeNetworkSource](#bridgenetworksource)

## AWS.MediaConnect/FlowEntitlementProperties
### Properties
* **DataTransferSubscriberFeePercent**: int: Percentage from 0-100 of the data transfer cost to be billed to the subscriber.
* **Description**: string (Required): A description of the entitlement.
* **Encryption**: [Encryption](#encryption): The type of encryption that will be used on the output that is associated with this entitlement.
* **EntitlementArn**: string (ReadOnly, Identifier): The ARN of the entitlement.
* **EntitlementStatus**: string:  An indication of whether the entitlement is enabled.
* **FlowArn**: string (Required): The ARN of the flow.
* **Name**: string (Required): The name of the entitlement.
* **Subscribers**: string[] (Required): The AWS account IDs that you want to share your content with. The receiving accounts (subscribers) will be allowed to create their own flow using your content as the source.

## AWS.MediaConnect/FlowOutputProperties
### Properties
* **CidrAllowList**: string[]: The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
* **Description**: string: A description of the output.
* **Destination**: string: The address where you want to send the output.
* **Encryption**: [Encryption](#encryption): The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **FlowArn**: string (Required): The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
* **MaxLatency**: int: The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
* **MediaStreamOutputConfigurations**: [MediaStreamOutputConfiguration](#mediastreamoutputconfiguration)[]: The definition for each media stream that is associated with the output.
* **MinLatency**: int: The minimum latency in milliseconds.
* **Name**: string: The name of the output. This value must be unique within the current flow.
* **OutputArn**: string (ReadOnly, Identifier): The ARN of the output.
* **OutputStatus**: string: An indication of whether the output should transmit data or not.
* **Port**: int: The port to use when content is distributed to this output.
* **Protocol**: string (Required): The protocol that is used by the source or output.
* **RemoteId**: string: The remote ID for the Zixi-pull stream.
* **SmoothingLatency**: int: The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
* **StreamId**: string: The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
* **VpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this output.

## AWS.MediaConnect/FlowProperties
### Properties
* **AvailabilityZone**: string: The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
* **EgressIp**: string (ReadOnly): The IP address from which video will be sent to output destinations.
* **FlowArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
* **FlowAvailabilityZone**: string (ReadOnly): The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.(ReadOnly)
* **Maintenance**: [Maintenance](#maintenance): The maintenance settings you want to use for the flow.
* **MediaStreams**: [MediaStream](#mediastream)[] (ReadOnly): The media streams associated with the flow. You can associate any of these media streams with sources and outputs on the flow.
* **Name**: string (Required): The name of the flow.
* **Source**: [Source](#source) (Required): The source of the flow.
* **SourceFailoverConfig**: [FailoverConfig](#failoverconfig): The source failover config of the flow.
* **SourceMonitoringConfig**: [SourceMonitoringConfig](#sourcemonitoringconfig): The source monitoring config of the flow.
* **VpcInterfaces**: [VpcInterface](#vpcinterface)[] (ReadOnly): The VPC interfaces that you added to this flow.

## AWS.MediaConnect/FlowSourceProperties
### Properties
* **Decryption**: [Encryption](#encryption): The type of encryption that is used on the content ingested from this source.
* **Description**: string (Required): A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
* **EntitlementArn**: string: The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
* **FlowArn**: string: The ARN of the flow.
* **GatewayBridgeSource**: [GatewayBridgeSource](#gatewaybridgesource): The source configuration for cloud flows receiving a stream from a bridge.
* **IngestIp**: string (ReadOnly): The IP address that the flow will be listening on for incoming content.
* **IngestPort**: int: The port that the flow will be listening on for incoming content.
* **MaxBitrate**: int: The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
* **MaxLatency**: int: The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
* **MinLatency**: int: The minimum latency in milliseconds.
* **Name**: string (Required): The name of the source.
* **Protocol**: string: The protocol that is used by the source.
* **SenderControlPort**: int: The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.
* **SenderIpAddress**: string: The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.
* **SourceArn**: string (ReadOnly, Identifier): The ARN of the source.
* **SourceIngestPort**: string (ReadOnly): The port that the flow will be listening on for incoming content.(ReadOnly)
* **SourceListenerAddress**: string: Source IP or domain name for SRT-caller protocol.
* **SourceListenerPort**: int: Source port for SRT-caller protocol.
* **StreamId**: string: The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
* **VpcInterfaceName**: string: The name of the VPC Interface this Source is configured with.
* **WhitelistCidr**: string: The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

## AWS.MediaConnect/FlowVpcInterfaceProperties
### Properties
* **FlowArn**: string (Required, Identifier): The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
* **Name**: string (Required, Identifier): Immutable and has to be a unique against other VpcInterfaces in this Flow.
* **NetworkInterfaceIds**: string[] (ReadOnly): IDs of the network interfaces created in customer's account by MediaConnect.
* **RoleArn**: string (Required): Role Arn MediaConnect can assume to create ENIs in customer's account.
* **SecurityGroupIds**: string[] (Required): Security Group IDs to be used on ENI.
* **SubnetId**: string (Required): Subnet must be in the AZ of the Flow

## Bridge_EgressGatewayBridge
### Properties
* **MaxBitrate**: int (Required): The maximum expected bitrate of the egress bridge.

## Bridge_IngressGatewayBridge
### Properties
* **MaxBitrate**: int (Required): The maximum expected bitrate of the ingress bridge.
* **MaxOutputs**: int (Required): The maximum number of outputs on the ingress bridge.

## BridgeFlowSource
### Properties
* **FlowArn**: string (Required): The ARN of the cloud flow used as a source of this bridge.
* **FlowVpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this source.
* **Name**: string (Required): The name of the flow source.

## BridgeFlowSource
### Properties
* **FlowArn**: string (Required): The ARN of the cloud flow used as a source of this bridge.
* **FlowVpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this source.

## BridgeNetworkOutput
### Properties
* **IpAddress**: string (Required): The network output IP Address.
* **Name**: string (Required): The network output name.
* **NetworkName**: string (Required): The network output's gateway network name.
* **Port**: int (Required): The network output port.
* **Protocol**: string (Required): The network output protocol.
* **Ttl**: int (Required): The network output TTL.

## BridgeNetworkOutput
### Properties
* **IpAddress**: string (Required): The network output IP Address.
* **NetworkName**: string (Required): The network output's gateway network name.
* **Port**: int (Required): The network output port.
* **Protocol**: string (Required): The network output protocol.
* **Ttl**: int (Required): The network output TTL.

## BridgeNetworkSource
### Properties
* **MulticastIp**: string (Required): The network source multicast IP.
* **Name**: string (Required): The name of the network source.
* **NetworkName**: string (Required): The network source's gateway network name.
* **Port**: int (Required): The network source port.
* **Protocol**: string (Required): The network source protocol.

## BridgeNetworkSource
### Properties
* **MulticastIp**: string (Required): The network source multicast IP.
* **NetworkName**: string (Required): The network source's gateway network name.
* **Port**: int (Required): The network source port.
* **Protocol**: string (Required): The network source protocol.

## BridgeOutput
### Properties
* **NetworkOutput**: [BridgeNetworkOutput](#bridgenetworkoutput)

## BridgeSource
### Properties
* **FlowSource**: [BridgeFlowSource](#bridgeflowsource)
* **NetworkSource**: [BridgeNetworkSource](#bridgenetworksource)

## DestinationConfiguration
### Properties
* **DestinationIp**: string (Required): The IP address where contents of the media stream will be sent.
* **DestinationPort**: int (Required): The port to use when the content of the media stream is distributed to the output.
* **Interface**: [Interface](#interface) (Required): The VPC interface that is used for the media stream associated with the output.

## EncodingParameters
### Properties
* **CompressionFactor**: int (Required): A value that is used to calculate compression for an output. The bitrate of the output is calculated as follows: Output bitrate = (1 / compressionFactor) * (source bitrate) This property only applies to outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol. Valid values are in the range of 3.0 to 10.0, inclusive.
* **EncoderProfile**: string: A setting on the encoder that drives compression settings. This property only applies to video media streams associated with outputs that use the ST 2110 JPEG XS protocol, with a flow source that uses the CDI protocol.

## Encryption
### Properties
* **Algorithm**: string: The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
* **ConstantInitializationVector**: string: A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
* **DeviceId**: string: The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **KeyType**: string: The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **Region**: string: The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **ResourceId**: string: An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **RoleArn**: string (Required): The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
* **SecretArn**: string:  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
* **Url**: string: The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.

## Encryption
### Properties
* **Algorithm**: string (Required): The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
* **ConstantInitializationVector**: string: A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
* **DeviceId**: string: The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **KeyType**: string: The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **Region**: string: The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **ResourceId**: string: An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **RoleArn**: string (Required): The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
* **SecretArn**: string:  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
* **Url**: string: The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.

## Encryption
### Properties
* **Algorithm**: string: The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
* **KeyType**: string: The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **RoleArn**: string (Required): The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
* **SecretArn**: string (Required):  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.

## Encryption
### Properties
* **Algorithm**: string: The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
* **ConstantInitializationVector**: string: A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
* **DeviceId**: string: The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **KeyType**: string: The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **Region**: string: The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **ResourceId**: string: An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
* **RoleArn**: string (Required): The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
* **SecretArn**: string:  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
* **Url**: string: The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.

## FailoverConfig
### Properties
* **FailoverMode**: string (Required): The type of failover you choose for this flow. FAILOVER allows switching between different streams.
* **SourcePriority**: [SourcePriority](#sourcepriority): The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
* **State**: string

## FailoverConfig
### Properties
* **FailoverMode**: string: The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
* **RecoveryWindow**: int: Search window time to look for dash-7 packets
* **SourcePriority**: [Flow_SourcePriority](#flowsourcepriority): The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
* **State**: string

## Flow_SourcePriority
### Properties
* **PrimarySource**: string (Required): The name of the source you choose as the primary source for this flow.

## Fmtp
### Properties
* **ChannelOrder**: string: The format of the audio channel.
* **Colorimetry**: string: The format used for the representation of color.
* **ExactFramerate**: string: The frame rate for the video stream, in frames/second. For example: 60000/1001.
* **Par**: string: The pixel aspect ratio (PAR) of the video.
* **Range**: string: The encoding range of the video.
* **ScanMode**: string: The type of compression that was used to smooth the video's appearance.
* **Tcs**: string: The transfer characteristic system (TCS) that is used in the video.

## GatewayBridgeSource
### Properties
* **BridgeArn**: string (Required): The ARN of the bridge feeding this flow.
* **VpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this bridge source.

## GatewayBridgeSource
### Properties
* **BridgeArn**: string (Required): The ARN of the bridge feeding this flow.
* **VpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this bridge source.

## InputConfiguration
### Properties
* **InputPort**: int (Required): The port that the flow listens on for an incoming media stream.
* **Interface**: [Interface](#interface) (Required): The VPC interface where the media stream comes in from.

## Interface
### Properties
* **Name**: string (Required): The name of the VPC interface that you want to use for the media stream associated with the output.

## Interface
### Properties
* **Name**: string (Required): The name of the VPC interface that you want to use for the media stream associated with the output.

## Maintenance
### Properties
* **MaintenanceDay**: string (Required): A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
* **MaintenanceStartHour**: string (Required): UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.

## MediaStream
### Properties
* **Attributes**: [MediaStreamAttributes](#mediastreamattributes): Attributes that are related to the media stream.
* **ClockRate**: int: The sample rate for the stream. This value in measured in kHz.
* **Description**: string: A description that can help you quickly identify what your media stream is used for.
* **Fmt**: int: The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
* **MediaStreamId**: int (Required): A unique identifier for the media stream.
* **MediaStreamName**: string (Required): A name that helps you distinguish one media stream from another.
* **MediaStreamType**: string (Required): The type of media stream.
* **VideoFormat**: string: The resolution of the video.

## MediaStreamAttributes
### Properties
* **Fmtp**: [Fmtp](#fmtp): A set of parameters that define the media stream.
* **Lang**: string: The audio language, in a format that is recognized by the receiver.

## MediaStreamOutputConfiguration
### Properties
* **DestinationConfigurations**: [DestinationConfiguration](#destinationconfiguration)[]: The media streams that you want to associate with the output.
* **EncodingName**: string (Required): The format that will be used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video streams on sources or outputs that use the CDI protocol, set the encoding name to raw. For video streams on sources or outputs that use the ST 2110 JPEG XS protocol, set the encoding name to jxsv.
* **EncodingParameters**: [EncodingParameters](#encodingparameters): A collection of parameters that determine how MediaConnect will convert the content. These fields only apply to outputs on flows that have a CDI source.
* **MediaStreamName**: string (Required): A name that helps you distinguish one media stream from another.

## MediaStreamSourceConfiguration
### Properties
* **EncodingName**: string (Required): The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
* **InputConfigurations**: [InputConfiguration](#inputconfiguration)[]: The media streams that you want to associate with the source.
* **MediaStreamName**: string (Required): A name that helps you distinguish one media stream from another.

## Source
### Properties
* **Decryption**: [Encryption](#encryption): The type of decryption that is used on the content ingested from this source.
* **Description**: string: A description for the source. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
* **EntitlementArn**: string: The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
* **GatewayBridgeSource**: [GatewayBridgeSource](#gatewaybridgesource): The source configuration for cloud flows receiving a stream from a bridge.
* **IngestIp**: string (ReadOnly): The IP address that the flow will be listening on for incoming content.
* **IngestPort**: int: The port that the flow will be listening on for incoming content.
* **MaxBitrate**: int: The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.
* **MaxLatency**: int: The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
* **MaxSyncBuffer**: int: The size of the buffer (in milliseconds) to use to sync incoming source data.
* **MediaStreamSourceConfigurations**: [MediaStreamSourceConfiguration](#mediastreamsourceconfiguration)[]: The media stream that is associated with the source, and the parameters for that association.
* **MinLatency**: int: The minimum latency in milliseconds.
* **Name**: string: The name of the source.
* **Protocol**: string: The protocol that is used by the source.
* **SenderControlPort**: int: The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.
* **SenderIpAddress**: string: The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.
* **SourceArn**: string (ReadOnly): The ARN of the source.
* **SourceIngestPort**: string (ReadOnly): The port that the flow will be listening on for incoming content.(ReadOnly)
* **SourceListenerAddress**: string: Source IP or domain name for SRT-caller protocol.
* **SourceListenerPort**: int: Source port for SRT-caller protocol.
* **StreamId**: string: The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
* **VpcInterfaceName**: string: The name of the VPC Interface this Source is configured with.
* **WhitelistCidr**: string: The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

## SourceMonitoringConfig
### Properties
* **ThumbnailState**: string (Required): The state of thumbnail monitoring.

## SourcePriority
### Properties
* **PrimarySource**: string: The name of the source you choose as the primary source for this flow.

## VpcInterface
### Properties
* **Name**: string (Required): Immutable and has to be a unique against other VpcInterfaces in this Flow.
* **NetworkInterfaceIds**: string[]: IDs of the network interfaces created in customer's account by MediaConnect.
* **NetworkInterfaceType**: string: The type of network adapter that you want MediaConnect to use on this interface. If you don't set this value, it defaults to ENA.
* **RoleArn**: string (Required): Role Arn MediaConnect can assume to create ENIs in customer's account.
* **SecurityGroupIds**: string[] (Required): Security Group IDs to be used on ENI.
* **SubnetId**: string (Required): Subnet must be in the AZ of the Flow

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this output.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

