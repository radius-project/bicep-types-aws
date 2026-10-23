# AWS.DirectConnect @ default

## Resource AWS.DirectConnect/Connection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/ConnectionProperties](#awsdirectconnectconnectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectConnect/DirectConnectGateway@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/DirectConnectGatewayProperties](#awsdirectconnectdirectconnectgatewayproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectConnect/DirectConnectGatewayAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/DirectConnectGatewayAssociationProperties](#awsdirectconnectdirectconnectgatewayassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectConnect/Lag@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/LagProperties](#awsdirectconnectlagproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectConnect/PrivateVirtualInterface@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/PrivateVirtualInterfaceProperties](#awsdirectconnectprivatevirtualinterfaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectConnect/PublicVirtualInterface@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/PublicVirtualInterfaceProperties](#awsdirectconnectpublicvirtualinterfaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.DirectConnect/TransitVirtualInterface@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DirectConnect/TransitVirtualInterfaceProperties](#awsdirectconnecttransitvirtualinterfaceproperties) (Required, Identifier): properties of the resource

## AWS.DirectConnect/ConnectionProperties
### Properties
* **Bandwidth**: string (Required): The bandwidth of the connection.
* **ConnectionArn**: string (ReadOnly, Identifier): The ARN of the connection.
* **ConnectionId**: string (ReadOnly): The ID of the connection.
* **ConnectionName**: string (Required): The name of the connection.
* **ConnectionState**: string (ReadOnly): The state of the connection.
* **LagId**: string: The ID or ARN of the LAG to associate the connection with.
* **Location**: string (Required): The location of the connection.
* **ProviderName**: string: The name of the service provider associated with the requested connection.
* **RequestMACSec**: bool (WriteOnly): Indicates whether you want the connection to support MAC Security (MACsec).
* **Tags**: [Tag](#tag)[]: The tags associated with the connection.

## AWS.DirectConnect/DirectConnectGatewayAssociationProperties
### Properties
* **AcceptDirectConnectGatewayAssociationProposalRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.
* **AllowedPrefixesToDirectConnectGateway**: string[]: The Amazon VPC prefixes to advertise to the Direct Connect gateway. This parameter is required when you create an association to a transit gateway.
* **AssociatedGatewayId**: string (Required): The ID or ARN of the virtual private gateway or transit gateway.
* **AssociationId**: string (ReadOnly, Identifier): The ID of the Direct Connect gateway association.
* **DirectConnectGatewayId**: string (Required): The ID or ARN of the Direct Connect gateway.

## AWS.DirectConnect/DirectConnectGatewayProperties
### Properties
* **AmazonSideAsn**: string: The autonomous system number (ASN) for the Amazon side of the connection.
* **DirectConnectGatewayArn**: string (ReadOnly, Identifier): The ARN of the Direct Connect gateway.
* **DirectConnectGatewayId**: string (ReadOnly): The ID of the Direct Connect gateway.
* **DirectConnectGatewayName**: string (Required): The name of the Direct Connect gateway.
* **Tags**: [Tag](#tag)[]: The tags associated with the Direct Connect gateway.

## AWS.DirectConnect/LagProperties
### Properties
* **ConnectionsBandwidth**: string (Required): The bandwidth of the individual physical dedicated connections bundled by the LAG.
* **LagArn**: string (ReadOnly, Identifier): The ARN of the LAG.
* **LagId**: string (ReadOnly): The ID of the LAG.
* **LagName**: string (Required): The name of the LAG.
* **LagState**: string (ReadOnly): The state of the LAG.
* **Location**: string (Required): The location for the LAG.
* **MinimumLinks**: int: The minimum number of physical dedicated connections that must be operational for the LAG itself to be operational.
* **ProviderName**: string: The name of the service provider associated with the requested LAG.
* **RequestMACSec**: bool (WriteOnly): Indicates whether you want the LAG to support MAC Security (MACsec).
* **Tags**: [Tag](#tag)[]: The tags associated with the LAG.

## AWS.DirectConnect/PrivateVirtualInterfaceProperties
### Properties
* **AllocatePrivateVirtualInterfaceRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the role to allocate the private virtual interface. Needs directconnect:AllocatePrivateVirtualInterface permissions and tag permissions if applicable.
* **BgpPeers**: [BgpPeer](#bgppeer)[] (Required, ReadOnly): The BGP peers configured on this virtual interface.
* **ConnectionId**: string (Required): The ID or ARN of the connection or LAG.
* **DirectConnectGatewayId**: string: The ID or ARN of the Direct Connect gateway.
* **EnableSiteLink**: bool: Indicates whether to enable or disable SiteLink.
* **Mtu**: int: The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
* **RateLimit**: string: The rate limit (bandwidth allocation) for the virtual interface. The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.
* **Tags**: [Tag](#tag)[]: The tags associated with the private virtual interface.
* **VirtualGatewayId**: string: The ID or ARN of the virtual private gateway.
* **VirtualInterfaceArn**: string (ReadOnly, Identifier): The ID of the virtual interface.
* **VirtualInterfaceId**: string (ReadOnly): The ID of the virtual interface.
* **VirtualInterfaceName**: string (Required): The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
* **Vlan**: int (Required): The ID of the VLAN.

## AWS.DirectConnect/PublicVirtualInterfaceProperties
### Properties
* **AllocatePublicVirtualInterfaceRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the role to allocate the public virtual interface. Needs directconnect:AllocatePublicVirtualInterface permissions and tag permissions if applicable.
* **BgpPeers**: [BgpPeer](#bgppeer)[] (Required, ReadOnly): The BGP peers configured on this virtual interface.
* **ConnectionId**: string (Required): The ID or ARN of the connection or LAG.
* **RateLimit**: string: The rate limit (bandwidth allocation) for the virtual interface. The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.
* **RouteFilterPrefixes**: string[]: The routes to be advertised to the AWS network in this region.
* **Tags**: [Tag](#tag)[]: The tags associated with the public virtual interface.
* **VirtualInterfaceArn**: string (ReadOnly, Identifier): The ARN of the virtual interface.
* **VirtualInterfaceId**: string (ReadOnly): The ID of the virtual interface.
* **VirtualInterfaceName**: string (Required): The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
* **Vlan**: int (Required): The ID of the VLAN.

## AWS.DirectConnect/TransitVirtualInterfaceProperties
### Properties
* **AllocateTransitVirtualInterfaceRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the role to allocate the TransitVifAllocation. Needs directconnect:AllocateTransitVirtualInterface permissions and tag permissions if applicable.
* **BgpPeers**: [BgpPeer](#bgppeer)[] (Required, ReadOnly): The BGP peers configured on this virtual interface..
* **ConnectionId**: string (Required): The ID or ARN of the connection or LAG.
* **DirectConnectGatewayId**: string (Required): The ID or ARN of the Direct Connect gateway.
* **EnableSiteLink**: bool: Indicates whether to enable or disable SiteLink.
* **Mtu**: int: The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 9001. The default value is 1500.
* **RateLimit**: string: The rate limit (bandwidth allocation) for the virtual interface. The value must be one of the supported bandwidth values (e.g., 50Mbps, 1Gbps, 10Gbps) and cannot exceed the bandwidth of the parent connection or LAG.
* **Tags**: [Tag](#tag)[]: The tags associated with the private virtual interface.
* **VirtualInterfaceArn**: string (ReadOnly, Identifier): The ARN of the virtual interface.
* **VirtualInterfaceId**: string (ReadOnly): The ID of the virtual interface.
* **VirtualInterfaceName**: string (Required): The name of the virtual interface assigned by the customer network. The name has a maximum of 100 characters. The following are valid characters: a-z, 0-9 and a hyphen (-).
* **Vlan**: int (Required): The ID of the VLAN.

## BgpPeer
### Properties
* **AddressFamily**: string (Required): The address family for the BGP peer.
* **AmazonAddress**: string: The IP address assigned to the Amazon interface.
* **Asn**: string (Required): The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
* **AuthKey**: string: The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximum length of 80 characters.
* **BgpPeerId**: string
* **CustomerAddress**: string: The IP address assigned to the customer interface.

## BgpPeer
### Properties
* **AddressFamily**: string (Required): The address family for the BGP peer.
* **AmazonAddress**: string: The IP address assigned to the Amazon interface.
* **Asn**: string (Required): The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
* **AuthKey**: string: The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximum length of 80 characters.
* **BgpPeerId**: string
* **CustomerAddress**: string: The IP address assigned to the customer interface.

## BgpPeer
### Properties
* **AddressFamily**: string (Required): The address family for the BGP peer.
* **AmazonAddress**: string: The IP address assigned to the Amazon interface.
* **Asn**: string (Required): The autonomous system (AS) number for Border Gateway Protocol (BGP) configuration.
* **AuthKey**: string: The authentication key for BGP configuration. This string has a minimum length of 6 characters and and a maximum length of 80 characters.
* **BgpPeerId**: string
* **CustomerAddress**: string: The IP address assigned to the customer interface.

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

