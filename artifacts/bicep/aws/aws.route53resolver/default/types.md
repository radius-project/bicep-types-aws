# AWS.Route53Resolver @ default

## Resource AWS.Route53Resolver/FirewallConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallConfigProperties](#awsroute53resolverfirewallconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Resolver/FirewallDomainList@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallDomainListProperties](#awsroute53resolverfirewalldomainlistproperties) (Identifier): properties of the resource

## Resource AWS.Route53Resolver/FirewallRuleGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallRuleGroupProperties](#awsroute53resolverfirewallrulegroupproperties) (Identifier): properties of the resource

## Resource AWS.Route53Resolver/FirewallRuleGroupAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallRuleGroupAssociationProperties](#awsroute53resolverfirewallrulegroupassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Resolver/OutpostResolver@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/OutpostResolverProperties](#awsroute53resolveroutpostresolverproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Resolver/ResolverEndpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/ResolverEndpointProperties](#awsroute53resolverresolverendpointproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Resolver/ResolverRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/ResolverRuleProperties](#awsroute53resolverresolverruleproperties) (Required, Identifier): properties of the resource

## AWS.Route53Resolver/FirewallConfigProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the firewall configuration.
* **FirewallFailOpen**: string (Required): Determines how DNS Firewall operates during failures. By default, fail open is disabled, which means the failure mode is closed. If you enable this option, the failure mode is open. This behavior is only enforced for VPCs that have at least one DNS Firewall rule group association.
* **Id**: string (ReadOnly): The ID of the firewall configuration.
* **OwnerId**: string (ReadOnly): The Amazon Web Services account ID of the owner of the VPC that this firewall configuration applies to.
* **ResourceId**: string (Required): The ID of the VPC that this firewall configuration applies to.

## AWS.Route53Resolver/FirewallDomainListProperties
### Properties
* **Arn**: string (ReadOnly): Arn
* **CreationTime**: string (ReadOnly): Rfc3339TimeString
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **DomainCount**: int (ReadOnly): Count
* **DomainFileUrl**: string (WriteOnly): S3 URL to import domains from.
* **Domains**: string[] (WriteOnly)
* **Id**: string (ReadOnly, Identifier): ResourceId
* **ManagedOwnerName**: string (ReadOnly): ServicePrincipal
* **ModificationTime**: string (ReadOnly): Rfc3339TimeString
* **Name**: string: FirewallDomainListName
* **Status**: string (ReadOnly): ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE_IMPORT_FAILED, IMPORTING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
* **StatusMessage**: string (ReadOnly): FirewallDomainListAssociationStatus
* **Tags**: [Tag](#tag)[]: Tags

## AWS.Route53Resolver/FirewallRuleGroupAssociationProperties
### Properties
* **Arn**: string (ReadOnly): Arn
* **CreationTime**: string (ReadOnly): Rfc3339TimeString
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **FirewallRuleGroupId**: string (Required): FirewallRuleGroupId
* **Id**: string (ReadOnly, Identifier): Id
* **ManagedOwnerName**: string (ReadOnly): ServicePrincipal
* **ModificationTime**: string (ReadOnly): Rfc3339TimeString
* **MutationProtection**: string: MutationProtectionStatus
* **Name**: string: FirewallRuleGroupAssociationName
* **Priority**: int (Required): Priority
* **Status**: string (ReadOnly): ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
* **StatusMessage**: string (ReadOnly): FirewallDomainListAssociationStatus
* **Tags**: [Tag](#tag)[]: Tags
* **VpcId**: string (Required): VpcId

## AWS.Route53Resolver/FirewallRuleGroupProperties
### Properties
* **Arn**: string (ReadOnly): Arn
* **CreationTime**: string (ReadOnly): Rfc3339TimeString
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **FirewallRules**: [FirewallRule](#firewallrule)[] (ReadOnly): FirewallRules
* **Id**: string (ReadOnly, Identifier): ResourceId
* **ModificationTime**: string (ReadOnly): Rfc3339TimeString
* **Name**: string: FirewallRuleGroupName
* **OwnerId**: string (ReadOnly): AccountId
* **RuleCount**: int (ReadOnly): Count
* **ShareStatus**: string (ReadOnly): ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.
* **Status**: string (ReadOnly): ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
* **StatusMessage**: string (ReadOnly): FirewallRuleGroupStatus
* **Tags**: [Tag](#tag)[]: Tags

## AWS.Route53Resolver/OutpostResolverProperties
### Properties
* **Arn**: string (ReadOnly): The OutpostResolver ARN.
* **CreationTime**: string (ReadOnly): The OutpostResolver creation time
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **Id**: string (ReadOnly, Identifier): Id
* **InstanceCount**: int: The number of OutpostResolvers.
* **ModificationTime**: string (ReadOnly): The OutpostResolver last modified time
* **Name**: string (Required): The OutpostResolver name.
* **OutpostArn**: string (Required): The Outpost ARN.
* **PreferredInstanceType**: string (Required): The OutpostResolver instance type.
* **Status**: string (ReadOnly): The OutpostResolver status, possible values are CREATING, OPERATIONAL, UPDATING, DELETING, ACTION_NEEDED, FAILED_CREATION and FAILED_DELETION.
* **StatusMessage**: string (ReadOnly): The OutpostResolver status message.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Route53Resolver/ResolverEndpointProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resolver endpoint, such as arn:aws:route53resolver:us-east-1:123456789012:resolver-endpoint/resolver-endpoint-a1bzhi.
* **Direction**: string (Required): Indicates whether the Resolver endpoint allows inbound or outbound DNS queries:
- INBOUND: allows DNS queries to your VPC from your network 
- OUTBOUND: allows DNS queries from your VPC to your network 
- INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones
* **Dns64Enabled**: bool: Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.
* **HostVPCId**: string (ReadOnly): The ID of the VPC that you want to create the resolver endpoint in.
* **IpAddressCount**: string (ReadOnly): The number of IP addresses that the resolver endpoint can use for DNS queries.
* **IpAddresses**: [IpAddressRequest](#ipaddressrequest)[] (Required): The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). The subnet ID uniquely identifies a VPC.
* **Ipv6InternetAccessEnabled**: bool: Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.
* **Name**: string: A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.
* **OutpostArn**: string: The ARN (Amazon Resource Name) for the Outpost.
* **PreferredInstanceType**: string: The Amazon EC2 instance type.
* **Protocols**: string[]: Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.
* **ResolverEndpointId**: string (ReadOnly, Identifier): The ID of the resolver endpoint.
* **ResolverEndpointType**: string: The Resolver endpoint IP address type.
* **RniEnhancedMetricsEnabled**: bool: Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.
* **SecurityGroupIds**: string[] (Required): The ID of one or more security groups that control access to this VPC. The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetNameServerMetricsEnabled**: bool: Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

## AWS.Route53Resolver/ResolverRuleProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resolver rule.
* **DelegationRecord**: string: The name server domain for queries to be delegated to if a query matches the delegation record.
* **DomainName**: string: DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
* **Name**: string: The name for the Resolver rule
* **ResolverEndpointId**: string: The ID of the endpoint that the rule is associated with.
* **ResolverRuleId**: string (ReadOnly, Identifier): The ID of the endpoint that the rule is associated with.
* **RuleType**: string (Required): When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetIps**: [TargetAddress](#targetaddress)[]: An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.

## FirewallAdvancedContentCategoryConfig
### Properties
* **Category**: string (Required): The content category value.

## FirewallAdvancedThreatCategoryConfig
### Properties
* **Category**: string (Required): The threat category value.

## FirewallRule
### Properties
* **Action**: string (Required): Rule Action
* **BlockOverrideDnsType**: string: BlockOverrideDnsType
* **BlockOverrideDomain**: string: BlockOverrideDomain
* **BlockOverrideTtl**: int: BlockOverrideTtl
* **BlockResponse**: string: BlockResponse
* **ConfidenceThreshold**: string: ConfidenceThreshold
* **DnsThreatProtection**: string: DnsThreatProtection
* **FirewallDomainListId**: string: ResourceId
* **FirewallDomainRedirectionAction**: string: FirewallDomainRedirectionAction
* **FirewallRuleType**: [FirewallRuleType](#firewallruletype): Advanced firewall rule type. Mutually exclusive with FirewallDomainListId and DnsThreatProtection/ConfidenceThreshold.
* **FirewallThreatProtectionId**: string: ResourceId
* **Priority**: int (Required): Rule Priority
* **Qtype**: string: Qtype
* **Status**: string: The status of the firewall rule.

## FirewallRuleType
### Properties
* **FirewallAdvancedContentCategory**: [FirewallAdvancedContentCategoryConfig](#firewalladvancedcontentcategoryconfig)
* **FirewallAdvancedThreatCategory**: [FirewallAdvancedThreatCategoryConfig](#firewalladvancedthreatcategoryconfig)
* **PartnerThreatProtection**: [PartnerThreatProtectionConfig](#partnerthreatprotectionconfig)

## IpAddressRequest
### Properties
* **Ip**: string: The IPv4 address that you want to use for DNS queries.
* **Ipv6**: string: The IPv6 address that you want to use for DNS queries.
* **SubnetId**: string (Required): The ID of the subnet that contains the IP address.

## PartnerThreatProtectionConfig
### Properties
* **Partner**: string (Required): The partner identifier value.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The name for the tag. For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.
* **Value**: string (Required): The value for the tag. For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TargetAddress
### Properties
* **Ip**: string: One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. 
* **Ipv6**: string: One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses. 
* **Port**: string: The port at Ip that you want to forward DNS queries to. 
* **Protocol**: string: The protocol that you want to use to forward DNS queries. 
* **ServerNameIndication**: string: The SNI of the target name servers for DoH/DoH-FIPS outbound endpoints

