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
* **Cidr**: string (Required)
* **ClientToken**: string (WriteOnly)
* **CreatedAt**: string (ReadOnly)
* **DnsViewId**: string (Required)
* **IpAddressType**: string
* **Name**: string
* **Protocol**: string (Required)
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

