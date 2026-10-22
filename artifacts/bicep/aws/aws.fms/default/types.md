# AWS.FMS @ default

## Resource AWS.FMS/ApplicationsList@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/ApplicationsListProperties](#awsfmsapplicationslistproperties) (Required, Identifier): properties of the resource

## Resource AWS.FMS/NotificationChannel@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/NotificationChannelProperties](#awsfmsnotificationchannelproperties) (Required, Identifier): properties of the resource

## Resource AWS.FMS/Policy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/PolicyProperties](#awsfmspolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.FMS/ProtocolsList@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/ProtocolsListProperties](#awsfmsprotocolslistproperties) (Required, Identifier): properties of the resource

## Resource AWS.FMS/ResourceSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/ResourceSetProperties](#awsfmsresourcesetproperties) (Required, Identifier): properties of the resource

## App
### Properties
* **AppName**: string (Required): The application's name.
* **Port**: int (Required): The application's port number, for example 80.
* **Protocol**: string (Required): The IP protocol name or number. The name can be one of tcp, udp, or icmp. For information on possible numbers, see Protocol Numbers (https://www.iana.org/assignments/protocol-numbers/protocol-numbers.xhtml).

## AWS.FMS/ApplicationsListProperties
### Properties
* **AppsList**: [App](#app)[] (Required): An array of applications in the Firewall Manager applications list.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the applications list.
* **CreateTime**: string (ReadOnly): The time that the Firewall Manager applications list was created.
* **LastUpdateTime**: string (ReadOnly): The time that the Firewall Manager applications list was last updated.
* **ListId**: string (ReadOnly): The ID of the Firewall Manager applications list.
* **ListName**: string (Required): The name of the Firewall Manager applications list.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to the applications list.

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

## AWS.FMS/ProtocolsListProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the protocols list.
* **CreateTime**: string (ReadOnly): The time that the Firewall Manager protocols list was created.
* **LastUpdateTime**: string (ReadOnly): The time that the Firewall Manager protocols list was last updated.
* **ListId**: string (ReadOnly): The ID of the Firewall Manager protocols list.
* **ListName**: string (Required): The name of the Firewall Manager protocols list.
* **ProtocolsList**: string[] (Required): An array of protocols in the Firewall Manager protocols list.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to the protocols list.

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
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ThirdPartyFirewallPolicy
### Properties
* **FirewallDeploymentModel**: string (Required)

