# AWS.Route53Resolver @ default

## Resource AWS.Route53Resolver/FirewallDomainList@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53Resolver/FirewallDomainListProperties](#awsroute53resolverfirewalldomainlistproperties): properties of the resource

## Resource AWS.Route53Resolver/FirewallRuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53Resolver/FirewallRuleGroupProperties](#awsroute53resolverfirewallrulegroupproperties): properties of the resource

## Resource AWS.Route53Resolver/FirewallRuleGroupAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53Resolver/FirewallRuleGroupAssociationProperties](#awsroute53resolverfirewallrulegroupassociationproperties): properties of the resource

## Resource AWS.Route53Resolver/ResolverRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53Resolver/ResolverRuleProperties](#awsroute53resolverresolverruleproperties): properties of the resource

## AWS.Route53Resolver/FirewallDomainListProperties
### Properties
* **Arn**: string (ReadOnly): Arn
* **CreationTime**: string (ReadOnly): Rfc3339TimeString
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **DomainCount**: int (ReadOnly): Count
* **DomainFileUrl**: string (WriteOnly): S3 URL to import domains from.
* **Domains**: [Domains](#domains) (WriteOnly)
* **Id**: string (ReadOnly): ResourceId
* **ManagedOwnerName**: string (ReadOnly): ServicePrincipal
* **ModificationTime**: string (ReadOnly): Rfc3339TimeString
* **Name**: string: FirewallDomainListName
* **Status**: string (ReadOnly): ResolverFirewallDomainList, possible values are COMPLETE, DELETING, UPDATING, COMPLETE_IMPORT_FAILED, IMPORTING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
* **StatusMessage**: string (ReadOnly): FirewallDomainListAssociationStatus
* **Tags**: [Tag](#tag)[]: Tags

## Domains
### Properties

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Route53Resolver/FirewallRuleGroupProperties
### Properties
* **Arn**: string (ReadOnly): Arn
* **CreationTime**: string (ReadOnly): Rfc3339TimeString
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **FirewallRules**: [FirewallRule](#firewallrule)[]: FirewallRules
* **Id**: string (ReadOnly): ResourceId
* **ModificationTime**: string (ReadOnly): Rfc3339TimeString
* **Name**: string: FirewallRuleGroupName
* **OwnerId**: string (ReadOnly): AccountId
* **RuleCount**: int (ReadOnly): Count
* **ShareStatus**: string (ReadOnly): ShareStatus, possible values are NOT_SHARED, SHARED_WITH_ME, SHARED_BY_ME.
* **Status**: string (ReadOnly): ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
* **StatusMessage**: string (ReadOnly): FirewallRuleGroupStatus
* **Tags**: [Tag](#tag)[]: Tags

## FirewallRule
### Properties
* **Action**: string: Rule Action
* **BlockOverrideDnsType**: string: BlockOverrideDnsType
* **BlockOverrideDomain**: string: BlockOverrideDomain
* **BlockOverrideTtl**: int: BlockOverrideTtl
* **BlockResponse**: string: BlockResponse
* **FirewallDomainListId**: string: ResourceId
* **Priority**: int: Rule Priority

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Route53Resolver/FirewallRuleGroupAssociationProperties
### Properties
* **Arn**: string (ReadOnly): Arn
* **CreationTime**: string (ReadOnly): Rfc3339TimeString
* **CreatorRequestId**: string (ReadOnly): The id of the creator request.
* **FirewallRuleGroupId**: string: FirewallRuleGroupId
* **Id**: string (ReadOnly): Id
* **ManagedOwnerName**: string (ReadOnly): ServicePrincipal
* **ModificationTime**: string (ReadOnly): Rfc3339TimeString
* **MutationProtection**: string: MutationProtectionStatus
* **Name**: string: FirewallRuleGroupAssociationName
* **Priority**: int: Priority
* **Status**: string (ReadOnly): ResolverFirewallRuleGroupAssociation, possible values are COMPLETE, DELETING, UPDATING, and INACTIVE_OWNER_ACCOUNT_CLOSED.
* **StatusMessage**: string (ReadOnly): FirewallDomainListAssociationStatus
* **Tags**: [Tag](#tag)[]: Tags
* **VpcId**: string: VpcId

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Route53Resolver/ResolverRuleProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resolver rule.
* **DomainName**: string: DNS queries for this domain name are forwarded to the IP addresses that are specified in TargetIps
* **Name**: string: The name for the Resolver rule
* **ResolverEndpointId**: string: The ID of the endpoint that the rule is associated with.
* **ResolverRuleId**: string (ReadOnly): The ID of the endpoint that the rule is associated with.
* **RuleType**: string: When you want to forward DNS queries for specified domain name to resolvers on your network, specify FORWARD. When you have a forwarding rule to forward DNS queries for a domain to your network and you want Resolver to process queries for a subdomain of that domain, specify SYSTEM.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetIps**: [TargetAddress](#targetaddress)[]: An array that contains the IP addresses and ports that an outbound endpoint forwards DNS queries to. Typically, these are the IP addresses of DNS resolvers on your network. Specify IPv4 addresses. IPv6 is not supported.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## TargetAddress
### Properties
* **Ip**: string: One IP address that you want to forward DNS queries to. You can specify only IPv4 addresses. 
* **Port**: string: The port at Ip that you want to forward DNS queries to. 

