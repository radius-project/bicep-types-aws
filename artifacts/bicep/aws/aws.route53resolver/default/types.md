# AWS.Route53Resolver @ default

## Resource AWS.Route53Resolver/FirewallDomainList@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallDomainListProperties](#awsroute53resolverfirewalldomainlistproperties) (Identifier): properties of the resource

## Resource AWS.Route53Resolver/FirewallRuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallRuleGroupProperties](#awsroute53resolverfirewallrulegroupproperties) (Identifier): properties of the resource

## Resource AWS.Route53Resolver/FirewallRuleGroupAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/FirewallRuleGroupAssociationProperties](#awsroute53resolverfirewallrulegroupassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Resolver/OutpostResolver@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/OutpostResolverProperties](#awsroute53resolveroutpostresolverproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Resolver/ResolverRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Resolver/ResolverRuleProperties](#awsroute53resolverresolverruleproperties) (Required, Identifier): properties of the resource

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
* **FirewallRules**: [FirewallRule](#firewallrule)[]: FirewallRules
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

## AWS.Route53Resolver/ResolverRuleProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resolver rule.
* **DomainName**: string (Required): DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
* **Name**: string: The name for the Resolver rule
* **ResolverEndpointId**: string: The ID of the endpoint that the rule is associated with.
* **ResolverRuleId**: string (ReadOnly, Identifier): The ID of the endpoint that the rule is associated with.
* **RuleType**: string (Required): When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetIps**: [TargetAddress](#targetaddress)[]: An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.

## FirewallRule
### Properties
* **Action**: string (Required): Rule Action
* **BlockOverrideDnsType**: string: BlockOverrideDnsType
* **BlockOverrideDomain**: string: BlockOverrideDomain
* **BlockOverrideTtl**: int: BlockOverrideTtl
* **BlockResponse**: string: BlockResponse
* **FirewallDomainListId**: string (Required): ResourceId
* **FirewallDomainRedirectionAction**: string: FirewallDomainRedirectionAction
* **Priority**: int (Required): Rule Priority
* **Qtype**: string: Qtype

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
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TargetAddress
### Properties
* **Ip**: string: One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. 
* **Ipv6**: string: One IPv6 address that you want to forward DNS queries to. You can specify only IPv6 addresses. 
* **Port**: string: The port at Ip that you want to forward DNS queries to. 
* **Protocol**: string: The protocol that you want to use to forward DNS queries. 

