# AWS.Route53GlobalResolver @ default

## Resource AWS.Route53GlobalResolver/AccessSource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/AccessSourceProperties](#awsroute53globalresolveraccesssourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/AccessToken@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/AccessTokenProperties](#awsroute53globalresolveraccesstokenproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/CoreNetworkEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/CoreNetworkEndpointProperties](#awsroute53globalresolvercorenetworkendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/DnsView@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/DnsViewProperties](#awsroute53globalresolverdnsviewproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/FirewallDomainList@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/FirewallDomainListProperties](#awsroute53globalresolverfirewalldomainlistproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/FirewallRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/FirewallRuleProperties](#awsroute53globalresolverfirewallruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/GlobalResolver@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/GlobalResolverProperties](#awsroute53globalresolverglobalresolverproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53GlobalResolver/HostedZoneAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53GlobalResolver/HostedZoneAssociationProperties](#awsroute53globalresolverhostedzoneassociationproperties) (Required, Identifier): properties of the resource

## AWS.Route53GlobalResolver/AccessSourceProperties
### Properties
* **AccessSourceId**: string (ReadOnly, Identifier)
* **Arn**: string (ReadOnly)
* **Cidr**: string: The IP address range (CIDR) whose traffic this access source admits. Required unless the access source uses a core network endpoint.
* **ClientToken**: string (WriteOnly)
* **CoreNetworkEndpointId**: string: The ID of the core network endpoint whose Cloud WAN segment traffic this access source admits. Use together with Segment instead of Cidr. The core network endpoint must be OPERATIONAL.
* **CreatedAt**: string (ReadOnly)
* **DnsViewId**: string (Required)
* **IpAddressType**: string
* **Name**: string
* **Protocol**: string (Required)
* **Segment**: string: The name of the Cloud WAN segment of the core network endpoint, or * for all of its segments. Requires CoreNetworkEndpointId.
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.Route53GlobalResolver/AccessTokenProperties
### Properties
* **AccessTokenId**: string (ReadOnly, Identifier)
* **Arn**: string (ReadOnly)
* **ClientToken**: string (WriteOnly)
* **CreatedAt**: string (ReadOnly)
* **DnsViewId**: string (Required)
* **ExpiresAt**: string
* **GlobalResolverId**: string (ReadOnly)
* **Name**: string
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)
* **Value**: string (ReadOnly)

## AWS.Route53GlobalResolver/CoreNetworkEndpointProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the core network endpoint.
* **AvailableRegions**: string[] (ReadOnly): Regions where the endpoint can serve DNS: the Global Resolver regions that are also core network edge locations.
* **ClientToken**: string (WriteOnly)
* **CoreNetworkArn**: string (Required): The ARN of the AWS Cloud WAN core network to connect. The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.
* **CoreNetworkEndpointId**: string (ReadOnly, Identifier): The ID of the core network endpoint.
* **CreatedAt**: string (ReadOnly)
* **GlobalResolverId**: string (Required): The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.
* **IpAddresses**: [IpAddress](#ipaddress)[] (Required): The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.
* **Name**: string: A name for the core network endpoint.
* **Status**: string (ReadOnly): CREATING, OPERATIONAL, UPDATING or DELETING. The service can also report FAILURE or ACTION_NEEDED, so this is not an enum.
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.Route53GlobalResolver/DnsViewProperties
### Properties
* **Arn**: string (ReadOnly)
* **ClientToken**: string (WriteOnly)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DnssecValidation**: string
* **DnsViewId**: string (ReadOnly, Identifier)
* **EdnsClientSubnet**: string
* **FirewallRulesFailOpen**: string
* **GlobalResolverId**: string (Required)
* **Name**: string (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.Route53GlobalResolver/FirewallDomainListProperties
### Properties
* **Arn**: string (ReadOnly)
* **ClientToken**: string (WriteOnly)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DomainCount**: int (ReadOnly)
* **DomainFileUrl**: string (WriteOnly): S3 URL to import domains from.
* **Domains**: string[] (WriteOnly)
* **FirewallDomainListId**: string (ReadOnly, Identifier)
* **GlobalResolverId**: string (Required)
* **Name**: string (Required)
* **Status**: string (ReadOnly)
* **StatusMessage**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.Route53GlobalResolver/FirewallRuleProperties
### Properties
* **Action**: string (Required)
* **BlockOverrideDnsType**: string
* **BlockOverrideDomain**: string
* **BlockOverrideTtl**: int
* **BlockResponse**: string
* **ClientToken**: string (WriteOnly)
* **ConfidenceThreshold**: string
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DnsAdvancedProtection**: string
* **DnsViewId**: string (Required)
* **FirewallDomainListId**: string
* **FirewallRuleId**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Priority**: int
* **QType**: string (WriteOnly)
* **QueryType**: string (ReadOnly)
* **Status**: string (ReadOnly)
* **UpdatedAt**: string (ReadOnly)

## AWS.Route53GlobalResolver/GlobalResolverProperties
### Properties
* **Arn**: string (ReadOnly)
* **ClientToken**: string (WriteOnly)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DnsName**: string (ReadOnly)
* **GlobalResolverId**: string (ReadOnly, Identifier)
* **IpAddressType**: string
* **IPv4Addresses**: string[] (ReadOnly)
* **IPv6Addresses**: string[] (ReadOnly)
* **Name**: string (Required)
* **ObservabilityRegion**: string
* **PublicIpStatus**: string: Whether the Global Resolver's public IP addresses are enabled and reserved. Change it one step at a time: ENABLED_RESERVED <-> DISABLED_RESERVED, DISABLED_RESERVED -> DISABLED_RELEASED, DISABLED_RELEASED -> ENABLED_RESERVED (new public IP addresses). DISABLED_RELEASED gives the public IP addresses back and cannot be undone. DISABLED_RESERVED is not allowed at create.
* **Regions**: string[] (Required): The list of regions the Global Resolver exists in. Regions can be added or removed on update; the order of this list is not significant.
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.Route53GlobalResolver/HostedZoneAssociationProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **HostedZoneAssociationId**: string (ReadOnly, Identifier)
* **HostedZoneId**: string (Required)
* **HostedZoneName**: string (ReadOnly)
* **Name**: string (Required)
* **ResourceArn**: string (Required)
* **Status**: string (ReadOnly)
* **UpdatedAt**: string (ReadOnly)

## IpAddress
### Properties
* **DnsLabel**: string (Required): Lowercase DNS label for the IP address. The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.
* **Ipv4Address**: string
* **Ipv6Address**: string
* **Regions**: string[]: Regions that serve the IP address. Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.
* **RegionScope**: string (Required): ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.

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

