# AWS.NetworkManager @ default

## Resource AWS.NetworkManager/ConnectAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/ConnectAttachmentProperties](#awsnetworkmanagerconnectattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/ConnectPeer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/ConnectPeerProperties](#awsnetworkmanagerconnectpeerproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/CoreNetwork@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/CoreNetworkProperties](#awsnetworkmanagercorenetworkproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/Device@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/DeviceProperties](#awsnetworkmanagerdeviceproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/GlobalNetwork@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/GlobalNetworkProperties](#awsnetworkmanagerglobalnetworkproperties) (Identifier): properties of the resource

## Resource AWS.NetworkManager/Link@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/LinkProperties](#awsnetworkmanagerlinkproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/Site@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/SiteProperties](#awsnetworkmanagersiteproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/SiteToSiteVpnAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/SiteToSiteVpnAttachmentProperties](#awsnetworkmanagersitetositevpnattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/TransitGatewayPeering@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/TransitGatewayPeeringProperties](#awsnetworkmanagertransitgatewaypeeringproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/TransitGatewayRouteTableAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/TransitGatewayRouteTableAttachmentProperties](#awsnetworkmanagertransitgatewayroutetableattachmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkManager/VpcAttachment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkManager/VpcAttachmentProperties](#awsnetworkmanagervpcattachmentproperties) (Required, Identifier): properties of the resource

## AWS.NetworkManager/ConnectAttachmentProperties
### Properties
* **AttachmentId**: string (ReadOnly, Identifier): The ID of the attachment.
* **AttachmentPolicyRuleNumber**: int (ReadOnly): The policy rule number associated with the attachment.
* **AttachmentType**: string (ReadOnly): The type of attachment.
* **CoreNetworkArn**: string (ReadOnly): The ARN of a core network.
* **CoreNetworkId**: string (Required): ID of the CoreNetwork that the attachment will be attached to.
* **CreatedAt**: string (ReadOnly): Creation time of the attachment.
* **EdgeLocation**: string (Required): Edge location of the attachment.
* **Options**: [ConnectAttachmentOptions](#connectattachmentoptions) (Required): Protocol options for connect attachment
* **OwnerAccountId**: string (ReadOnly): The ID of the attachment account owner.
* **ProposedSegmentChange**: [ProposedSegmentChange](#proposedsegmentchange): The attachment to move from one segment to another.
* **ResourceArn**: string (ReadOnly): The attachment resource ARN.
* **SegmentName**: string (ReadOnly): The name of the segment attachment.
* **State**: string (ReadOnly): State of the attachment.
* **Tags**: [Tag](#tag)[]: Tags for the attachment.
* **TransportAttachmentId**: string (Required): Id of transport attachment
* **UpdatedAt**: string (ReadOnly): Last update time of the attachment.

## AWS.NetworkManager/ConnectPeerProperties
### Properties
* **BgpOptions**: [BgpOptions](#bgpoptions) (WriteOnly): Bgp options for connect peer.
* **Configuration**: [ConnectPeerConfiguration](#connectpeerconfiguration) (ReadOnly): Configuration of the connect peer.
* **ConnectAttachmentId**: string (Required): The ID of the attachment to connect.
* **ConnectPeerId**: string (ReadOnly, Identifier): The ID of the Connect peer.
* **CoreNetworkAddress**: string (WriteOnly): The IP address of a core network.
* **CoreNetworkId**: string (ReadOnly): The ID of the core network.
* **CreatedAt**: string (ReadOnly): Connect peer creation time.
* **EdgeLocation**: string (ReadOnly): The Connect peer Regions where edges are located.
* **InsideCidrBlocks**: string[]: The inside IP addresses used for a Connect peer configuration.
* **PeerAddress**: string (Required): The IP address of the Connect peer.
* **State**: string (ReadOnly): State of the connect peer.
* **SubnetArn**: string (WriteOnly): The subnet ARN for the connect peer.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.NetworkManager/CoreNetworkProperties
### Properties
* **CoreNetworkArn**: string (ReadOnly): The ARN (Amazon resource name) of core network
* **CoreNetworkId**: string (ReadOnly, Identifier): The Id of core network
* **CreatedAt**: string (ReadOnly): The creation time of core network
* **Description**: string: The description of core network
* **Edges**: [CoreNetworkEdge](#corenetworkedge)[] (ReadOnly): The edges within a core network.
* **GlobalNetworkId**: string (Required): The ID of the global network that your core network is a part of.
* **OwnerAccount**: string (ReadOnly): Owner of the core network
* **PolicyDocument**: [CoreNetwork_PolicyDocument](#corenetworkpolicydocument): Live policy document for the core network, you must provide PolicyDocument in Json Format
* **Segments**: [CoreNetworkSegment](#corenetworksegment)[] (ReadOnly): The segments within a core network.
* **State**: string (ReadOnly): The state of core network
* **Tags**: [Tag](#tag)[]: The tags for the global network.

## AWS.NetworkManager/DeviceProperties
### Properties
* **AWSLocation**: [AWSLocation](#awslocation): The Amazon Web Services location of the device, if applicable.
* **CreatedAt**: string (ReadOnly): The date and time that the device was created.
* **Description**: string: The description of the device.
* **DeviceArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the device.
* **DeviceId**: string (ReadOnly, Identifier): The ID of the device.
* **GlobalNetworkId**: string (Required, Identifier): The ID of the global network.
* **Location**: [Location](#location): The site location.
* **Model**: string: The device model
* **SerialNumber**: string: The device serial number.
* **SiteId**: string: The site ID.
* **State**: string (ReadOnly): The state of the device.
* **Tags**: [Tag](#tag)[]: The tags for the device.
* **Type**: string: The device type.
* **Vendor**: string: The device vendor.

## AWS.NetworkManager/GlobalNetworkProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the global network.
* **CreatedAt**: string: The date and time that the global network was created.
* **Description**: string: The description of the global network.
* **Id**: string (ReadOnly, Identifier): The ID of the global network.
* **State**: string: The state of the global network.
* **Tags**: [Tag](#tag)[]: The tags for the global network.

## AWS.NetworkManager/LinkProperties
### Properties
* **Bandwidth**: [Bandwidth](#bandwidth) (Required): The Bandwidth for the link.
* **CreatedAt**: string (ReadOnly): The date and time that the device was created.
* **Description**: string: The description of the link.
* **GlobalNetworkId**: string (Required, Identifier): The ID of the global network.
* **LinkArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the link.
* **LinkId**: string (ReadOnly, Identifier): The ID of the link.
* **Provider**: string: The provider of the link.
* **SiteId**: string (Required): The ID of the site
* **State**: string (ReadOnly): The state of the link.
* **Tags**: [Tag](#tag)[]: The tags for the link.
* **Type**: string: The type of the link.

## AWS.NetworkManager/SiteProperties
### Properties
* **CreatedAt**: string (ReadOnly): The date and time that the device was created.
* **Description**: string: The description of the site.
* **GlobalNetworkId**: string (Required, Identifier): The ID of the global network.
* **Location**: [Location](#location): The location of the site.
* **SiteArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the site.
* **SiteId**: string (ReadOnly, Identifier): The ID of the site.
* **State**: string (ReadOnly): The state of the site.
* **Tags**: [Tag](#tag)[]: The tags for the site.

## AWS.NetworkManager/SiteToSiteVpnAttachmentProperties
### Properties
* **AttachmentId**: string (ReadOnly, Identifier): The ID of the attachment.
* **AttachmentPolicyRuleNumber**: int (ReadOnly): The policy rule number associated with the attachment.
* **AttachmentType**: string (ReadOnly): The type of attachment.
* **CoreNetworkArn**: string (ReadOnly): The ARN of a core network for the VPC attachment.
* **CoreNetworkId**: string (Required): The ID of a core network where you're creating a site-to-site VPN attachment.
* **CreatedAt**: string (ReadOnly): Creation time of the attachment.
* **EdgeLocation**: string (ReadOnly): The Region where the edge is located.
* **OwnerAccountId**: string (ReadOnly): Owner account of the attachment.
* **ProposedSegmentChange**: [ProposedSegmentChange](#proposedsegmentchange): The attachment to move from one segment to another.
* **ResourceArn**: string (ReadOnly): The ARN of the Resource.
* **SegmentName**: string (ReadOnly): The name of the segment that attachment is in.
* **State**: string (ReadOnly): The state of the attachment.
* **Tags**: [Tag](#tag)[]: Tags for the attachment.
* **UpdatedAt**: string (ReadOnly): Last update time of the attachment.
* **VpnConnectionArn**: string (Required): The ARN of the site-to-site VPN attachment.

## AWS.NetworkManager/TransitGatewayPeeringProperties
### Properties
* **CoreNetworkArn**: string (ReadOnly): The ARN (Amazon Resource Name) of the core network that you want to peer a transit gateway to.
* **CoreNetworkId**: string (Required): The Id of the core network that you want to peer a transit gateway to.
* **CreatedAt**: string (ReadOnly): The creation time of the transit gateway peering
* **EdgeLocation**: string (ReadOnly): The location of the transit gateway peering
* **OwnerAccountId**: string (ReadOnly): Peering owner account Id
* **PeeringId**: string (ReadOnly, Identifier): The Id of the transit gateway peering
* **PeeringType**: string (ReadOnly): Peering type (TransitGatewayPeering)
* **ResourceArn**: string (ReadOnly): The ARN (Amazon Resource Name) of the resource that you will peer to a core network
* **State**: string (ReadOnly): The state of the transit gateway peering
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TransitGatewayArn**: string (Required): The ARN (Amazon Resource Name) of the transit gateway that you will peer to a core network
* **TransitGatewayPeeringAttachmentId**: string (ReadOnly): The ID of the TransitGatewayPeeringAttachment

## AWS.NetworkManager/TransitGatewayRouteTableAttachmentProperties
### Properties
* **AttachmentId**: string (ReadOnly, Identifier): The ID of the attachment.
* **AttachmentPolicyRuleNumber**: int (ReadOnly): The policy rule number associated with the attachment.
* **AttachmentType**: string (ReadOnly): The type of attachment.
* **CoreNetworkArn**: string (ReadOnly): The ARN of a core network for the VPC attachment.
* **CoreNetworkId**: string (ReadOnly): The ID of a core network where you're creating a site-to-site VPN attachment.
* **CreatedAt**: string (ReadOnly): Creation time of the attachment.
* **EdgeLocation**: string (ReadOnly): The Region where the edge is located.
* **OwnerAccountId**: string (ReadOnly): Owner account of the attachment.
* **PeeringId**: string (Required): The Id of peering between transit gateway and core network.
* **ProposedSegmentChange**: [ProposedSegmentChange](#proposedsegmentchange): The attachment to move from one segment to another.
* **ResourceArn**: string (ReadOnly): The ARN of the Resource.
* **SegmentName**: string (ReadOnly): The name of the segment that attachment is in.
* **State**: string (ReadOnly): The state of the attachment.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TransitGatewayRouteTableArn**: string (Required): The Arn of transit gateway route table.
* **UpdatedAt**: string (ReadOnly): Last update time of the attachment.

## AWS.NetworkManager/VpcAttachmentProperties
### Properties
* **AttachmentId**: string (ReadOnly, Identifier): Id of the attachment.
* **AttachmentPolicyRuleNumber**: int (ReadOnly): The policy rule number associated with the attachment.
* **AttachmentType**: string (ReadOnly): Attachment type.
* **CoreNetworkArn**: string (ReadOnly): The ARN of a core network for the VPC attachment.
* **CoreNetworkId**: string (Required): The ID of a core network for the VPC attachment.
* **CreatedAt**: string (ReadOnly): Creation time of the attachment.
* **EdgeLocation**: string (ReadOnly): The Region where the edge is located.
* **Options**: [VpcOptions](#vpcoptions): Vpc options of the attachment.
* **OwnerAccountId**: string (ReadOnly): Owner account of the attachment.
* **ProposedSegmentChange**: [ProposedSegmentChange](#proposedsegmentchange): The attachment to move from one segment to another.
* **ResourceArn**: string (ReadOnly): The ARN of the Resource.
* **SegmentName**: string (ReadOnly): The name of the segment attachment..
* **State**: string (ReadOnly): State of the attachment.
* **SubnetArns**: string[] (Required): Subnet Arn list
* **Tags**: [Tag](#tag)[]: Tags for the attachment.
* **UpdatedAt**: string (ReadOnly): Last update time of the attachment.
* **VpcArn**: string (Required): The ARN of the VPC.

## AWSLocation
### Properties
* **SubnetArn**: string: The Amazon Resource Name (ARN) of the subnet that the device is located in.
* **Zone**: string: The Zone that the device is located in. Specify the ID of an Availability Zone, Local Zone, Wavelength Zone, or an Outpost.

## Bandwidth
### Properties
* **DownloadSpeed**: int: Download speed in Mbps.
* **UploadSpeed**: int: Upload speed in Mbps.

## BgpOptions
### Properties
* **PeerAsn**: int

## ConnectAttachmentOptions
### Properties
* **Protocol**: string: Tunnel protocol for connect attachment

## ConnectPeerBgpConfiguration
### Properties
* **CoreNetworkAddress**: string: The address of a core network.
* **CoreNetworkAsn**: int: The ASN of the Coret Network.
* **PeerAddress**: string: The address of a core network Connect peer.
* **PeerAsn**: int: The ASN of the Connect peer.

## ConnectPeerConfiguration
### Properties
* **BgpConfigurations**: [ConnectPeerBgpConfiguration](#connectpeerbgpconfiguration)[]
* **CoreNetworkAddress**: string: The IP address of a core network.
* **InsideCidrBlocks**: string[]: The inside IP addresses used for a Connect peer configuration.
* **PeerAddress**: string: The IP address of the Connect peer.
* **Protocol**: string

## CoreNetwork_PolicyDocument
### Properties

## CoreNetworkEdge
### Properties
* **Asn**: int: The ASN of a core network edge.
* **EdgeLocation**: string: The Region where a core network edge is located.
* **InsideCidrBlocks**: string[]

## CoreNetworkSegment
### Properties
* **EdgeLocations**: string[]
* **Name**: string: Name of segment
* **SharedSegments**: string[]

## Location
### Properties
* **Address**: string: The physical address.
* **Latitude**: string: The latitude.
* **Longitude**: string: The longitude.

## Location
### Properties
* **Address**: string: The physical address.
* **Latitude**: string: The latitude.
* **Longitude**: string: The longitude.

## ProposedSegmentChange
### Properties
* **AttachmentPolicyRuleNumber**: int: The rule number in the policy document that applies to this change.
* **SegmentName**: string: The name of the segment to change.
* **Tags**: [Tag](#tag)[]: The list of key-value tags that changed for the segment.

## ProposedSegmentChange
### Properties
* **AttachmentPolicyRuleNumber**: int: The rule number in the policy document that applies to this change.
* **SegmentName**: string: The name of the segment to change.
* **Tags**: [Tag](#tag)[]: The key-value tags that changed for the segment.

## ProposedSegmentChange
### Properties
* **AttachmentPolicyRuleNumber**: int: The rule number in the policy document that applies to this change.
* **SegmentName**: string: The name of the segment to change.
* **Tags**: [Tag](#tag)[]: The key-value tags that changed for the segment.

## ProposedSegmentChange
### Properties
* **AttachmentPolicyRuleNumber**: int: The rule number in the policy document that applies to this change.
* **SegmentName**: string: The name of the segment to change.
* **Tags**: [Tag](#tag)[]: The key-value tags that changed for the segment.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## VpcOptions
### Properties
* **ApplianceModeSupport**: bool: Indicates whether to enable ApplianceModeSupport Support for Vpc Attachment. Valid Values: true | false
* **Ipv6Support**: bool: Indicates whether to enable Ipv6 Support for Vpc Attachment. Valid Values: enable | disable

