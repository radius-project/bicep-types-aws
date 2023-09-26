# AWS.MediaConnect @ default

## Resource AWS.MediaConnect/Bridge@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/BridgeProperties](#awsmediaconnectbridgeproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/BridgeOutput@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/BridgeOutputProperties](#awsmediaconnectbridgeoutputproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/BridgeSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/BridgeSourceProperties](#awsmediaconnectbridgesourceproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/Flow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowProperties](#awsmediaconnectflowproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/FlowEntitlement@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowEntitlementProperties](#awsmediaconnectflowentitlementproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/FlowOutput@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowOutputProperties](#awsmediaconnectflowoutputproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/FlowSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowSourceProperties](#awsmediaconnectflowsourceproperties) (Required): properties of the resource

## Resource AWS.MediaConnect/FlowVpcInterface@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MediaConnect/FlowVpcInterfaceProperties](#awsmediaconnectflowvpcinterfaceproperties) (Required): properties of the resource

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

## Bridge_EgressGatewayBridge
### Properties
* **MaxBitrate**: int (Required): The maximum expected bitrate of the egress bridge.

## Bridge_IngressGatewayBridge
### Properties
* **MaxBitrate**: int (Required): The maximum expected bitrate of the ingress bridge.
* **MaxOutputs**: int (Required): The maximum number of outputs on the ingress bridge.

## BridgeOutput
### Properties
* **NetworkOutput**: [BridgeNetworkOutput](#bridgenetworkoutput)

## BridgeNetworkOutput
### Properties
* **IpAddress**: string (Required): The network output IP Address.
* **Name**: string (Required): The network output name.
* **NetworkName**: string (Required): The network output's gateway network name.
* **Port**: int (Required): The network output port.
* **Protocol**: string (Required): The network output protocol.
* **Ttl**: int (Required): The network output TTL.

## FailoverConfig
### Properties
* **FailoverMode**: string (Required): The type of failover you choose for this flow. FAILOVER allows switching between different streams.
* **SourcePriority**: [SourcePriority](#sourcepriority): The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
* **State**: string

## SourcePriority
### Properties
* **PrimarySource**: string: The name of the source you choose as the primary source for this flow.

## BridgeSource
### Properties
* **FlowSource**: [BridgeFlowSource](#bridgeflowsource)
* **NetworkSource**: [BridgeNetworkSource](#bridgenetworksource)

## BridgeFlowSource
### Properties
* **FlowArn**: string (Required): The ARN of the cloud flow used as a source of this bridge.
* **FlowVpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this source.
* **Name**: string (Required): The name of the flow source.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## BridgeNetworkSource
### Properties
* **MulticastIp**: string (Required): The network source multicast IP.
* **Name**: string (Required): The name of the network source.
* **NetworkName**: string (Required): The network source's gateway network name.
* **Port**: int (Required): The network source port.
* **Protocol**: string (Required): The network source protocol.

## AWS.MediaConnect/BridgeOutputProperties
### Properties
* **BridgeArn**: string (Required, Identifier): The Amazon Resource Number (ARN) of the bridge.
* **Name**: string (Required, Identifier): The network output name.
* **NetworkOutput**: [BridgeNetworkOutput](#bridgenetworkoutput) (Required): The output of the bridge.

## BridgeNetworkOutput
### Properties
* **IpAddress**: string (Required): The network output IP Address.
* **NetworkName**: string (Required): The network output's gateway network name.
* **Port**: int (Required): The network output port.
* **Protocol**: string (Required): The network output protocol.
* **Ttl**: int (Required): The network output TTL.

## AWS.MediaConnect/BridgeSourceProperties
### Properties
* **BridgeArn**: string (Required, Identifier): The Amazon Resource Number (ARN) of the bridge.
* **FlowSource**: [BridgeFlowSource](#bridgeflowsource)
* **Name**: string (Required, Identifier): The name of the source.
* **NetworkSource**: [BridgeNetworkSource](#bridgenetworksource)

## BridgeFlowSource
### Properties
* **FlowArn**: string (Required): The ARN of the cloud flow used as a source of this bridge.
* **FlowVpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this source.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## BridgeNetworkSource
### Properties
* **MulticastIp**: string (Required): The network source multicast IP.
* **NetworkName**: string (Required): The network source's gateway network name.
* **Port**: int (Required): The network source port.
* **Protocol**: string (Required): The network source protocol.

## AWS.MediaConnect/FlowProperties
### Properties
* **AvailabilityZone**: string: The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
* **FlowArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
* **FlowAvailabilityZone**: string (ReadOnly): The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.(ReadOnly)
* **Name**: string (Required): The name of the flow.
* **Source**: [Source](#source) (Required): The source of the flow.
* **SourceFailoverConfig**: [FailoverConfig](#failoverconfig): The source failover config of the flow.

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

## GatewayBridgeSource
### Properties
* **BridgeArn**: string (Required): The ARN of the bridge feeding this flow.
* **VpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this bridge source.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## FailoverConfig
### Properties
* **FailoverMode**: string: The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.
* **RecoveryWindow**: int: Search window time to look for dash-7 packets
* **SourcePriority**: [Flow_SourcePriority](#flowsourcepriority): The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
* **State**: string

## Flow_SourcePriority
### Properties
* **PrimarySource**: string (Required): The name of the source you choose as the primary source for this flow.

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

## AWS.MediaConnect/FlowOutputProperties
### Properties
* **CidrAllowList**: string[]: The range of IP addresses that should be allowed to initiate output requests to this flow. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
* **Description**: string: A description of the output.
* **Destination**: string: The address where you want to send the output.
* **Encryption**: [Encryption](#encryption): The type of key used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **FlowArn**: string (Required): The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
* **MaxLatency**: int: The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.
* **MinLatency**: int: The minimum latency in milliseconds.
* **Name**: string: The name of the output. This value must be unique within the current flow.
* **OutputArn**: string (ReadOnly, Identifier): The ARN of the output.
* **Port**: int: The port to use when content is distributed to this output.
* **Protocol**: string (Required): The protocol that is used by the source or output.
* **RemoteId**: string: The remote ID for the Zixi-pull stream.
* **SmoothingLatency**: int: The smoothing latency in milliseconds for RIST, RTP, and RTP-FEC streams.
* **StreamId**: string: The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.
* **VpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this output.

## Encryption
### Properties
* **Algorithm**: string: The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).
* **KeyType**: string: The type of key that is used for the encryption. If no keyType is provided, the service will use the default setting (static-key).
* **RoleArn**: string (Required): The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).
* **SecretArn**: string (Required):  The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this output.

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

## GatewayBridgeSource
### Properties
* **BridgeArn**: string (Required): The ARN of the bridge feeding this flow.
* **VpcInterfaceAttachment**: [VpcInterfaceAttachment](#vpcinterfaceattachment): The name of the VPC interface attachment to use for this bridge source.

## VpcInterfaceAttachment
### Properties
* **VpcInterfaceName**: string: The name of the VPC interface to use for this resource.

## AWS.MediaConnect/FlowVpcInterfaceProperties
### Properties
* **FlowArn**: string (Required, Identifier): The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
* **Name**: string (Required, Identifier): Immutable and has to be a unique against other VpcInterfaces in this Flow.
* **NetworkInterfaceIds**: string[] (ReadOnly): IDs of the network interfaces created in customer's account by MediaConnect.
* **RoleArn**: string (Required): Role Arn MediaConnect can assumes to create ENIs in customer's account.
* **SecurityGroupIds**: string[] (Required): Security Group IDs to be used on ENI.
* **SubnetId**: string (Required): Subnet must be in the AZ of the Flow

