# AWS.FMS @ default

## Resource AWS.FMS/NotificationChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/NotificationChannelProperties](#awsfmsnotificationchannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.FMS/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/PolicyProperties](#awsfmspolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.FMS/ResourceSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/ResourceSetProperties](#awsfmsresourcesetproperties) (Required, Identifier): properties of the resource

## AWS.FMS/NotificationChannelProperties
### Properties
* **SnsRoleName**: string (Required)
* **SnsTopicArn**: string (Required, Identifier)

## AWS.FMS/PolicyProperties
### Properties
* **Arn**: string (ReadOnly)
* **DeleteAllPolicyResources**: bool (WriteOnly)
* **ExcludeMap**: [IEMap](#iemap)
* **ExcludeResourceTags**: bool (Required)
* **Id**: string (ReadOnly, Identifier)
* **IncludeMap**: [IEMap](#iemap)
* **PolicyDescription**: string
* **PolicyName**: string (Required)
* **RemediationEnabled**: bool (Required)
* **ResourcesCleanUp**: bool
* **ResourceSetIds**: string[]
* **ResourceTagLogicalOperator**: string
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **ResourceType**: string
* **ResourceTypeList**: string[]
* **SecurityServicePolicyData**: [SecurityServicePolicyData](#securityservicepolicydata) (Required)
* **Tags**: [PolicyTag](#policytag)[]

## AWS.FMS/ResourceSetProperties
### Properties
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Resources**: string[]
* **ResourceTypeList**: string[] (Required)
* **Tags**: [Tag](#tag)[]

## IEMap
### Properties
* **ACCOUNT**: string[]
* **ORGUNIT**: string[]

## NetworkAclCommonPolicy
### Properties
* **NetworkAclEntrySet**: [NetworkAclEntrySet](#networkaclentryset) (Required)

## NetworkAclEntry
### Properties
* **CidrBlock**: string: CIDR block.
* **Egress**: bool (Required): Whether the entry is an egress entry.
* **IcmpTypeCode**: [Policy_IcmpTypeCode](#policyicmptypecode): ICMP type and code.
* **Ipv6CidrBlock**: string: IPv6 CIDR block.
* **PortRange**: [Policy_PortRange](#policyportrange): Port range.
* **Protocol**: string (Required): Protocol.
* **RuleAction**: string (Required): Rule Action.

## NetworkAclEntrySet
### Properties
* **FirstEntries**: [NetworkAclEntry](#networkaclentry)[]
* **ForceRemediateForFirstEntries**: bool (Required)
* **ForceRemediateForLastEntries**: bool (Required)
* **LastEntries**: [NetworkAclEntry](#networkaclentry)[]

## NetworkFirewallPolicy
### Properties
* **FirewallDeploymentModel**: string (Required)

## Policy_IcmpTypeCode
### Properties
* **Code**: int (Required): Code.
* **Type**: int (Required): Type.

## Policy_PortRange
### Properties
* **From**: int (Required): From Port.
* **To**: int (Required): To Port.

## PolicyOption
### Properties
* **NetworkAclCommonPolicy**: [NetworkAclCommonPolicy](#networkaclcommonpolicy)
* **NetworkFirewallPolicy**: [NetworkFirewallPolicy](#networkfirewallpolicy)
* **ThirdPartyFirewallPolicy**: [ThirdPartyFirewallPolicy](#thirdpartyfirewallpolicy)

## PolicyTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string

## SecurityServicePolicyData
### Properties
* **ManagedServiceData**: string
* **PolicyOption**: [PolicyOption](#policyoption)
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ThirdPartyFirewallPolicy
### Properties
* **FirewallDeploymentModel**: string (Required)

