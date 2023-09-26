# AWS.NetworkFirewall @ default

## Resource AWS.NetworkFirewall/Firewall@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/FirewallProperties](#awsnetworkfirewallfirewallproperties) (Required): properties of the resource

## Resource AWS.NetworkFirewall/FirewallPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/FirewallPolicyProperties](#awsnetworkfirewallfirewallpolicyproperties) (Required): properties of the resource

## Resource AWS.NetworkFirewall/LoggingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/LoggingConfigurationProperties](#awsnetworkfirewallloggingconfigurationproperties) (Required): properties of the resource

## Resource AWS.NetworkFirewall/RuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/RuleGroupProperties](#awsnetworkfirewallrulegroupproperties) (Required): properties of the resource

## AWS.NetworkFirewall/FirewallProperties
### Properties
* **DeleteProtection**: bool
* **Description**: string
* **EndpointIds**: string[] (ReadOnly)
* **FirewallArn**: string (ReadOnly, Identifier)
* **FirewallId**: string (ReadOnly)
* **FirewallName**: string (Required)
* **FirewallPolicyArn**: string (Required)
* **FirewallPolicyChangeProtection**: bool
* **SubnetChangeProtection**: bool
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[] (Required)
* **Tags**: [Tag](#tag)[]
* **VpcId**: string (Required)

## SubnetMapping
### Properties
* **IPAddressType**: string: A IPAddressType
* **SubnetId**: string (Required): A SubnetId.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.NetworkFirewall/FirewallPolicyProperties
### Properties
* **Description**: string
* **FirewallPolicy**: [FirewallPolicy](#firewallpolicy) (Required)
* **FirewallPolicyArn**: string (ReadOnly, Identifier)
* **FirewallPolicyId**: string (ReadOnly)
* **FirewallPolicyName**: string (Required)
* **Tags**: [Tag](#tag)[]

## FirewallPolicy
### Properties
* **PolicyVariables**: [FirewallPolicy_PolicyVariables](#firewallpolicypolicyvariables)
* **StatefulDefaultActions**: string[]
* **StatefulEngineOptions**: [StatefulEngineOptions](#statefulengineoptions)
* **StatefulRuleGroupReferences**: [StatefulRuleGroupReference](#statefulrulegroupreference)[]
* **StatelessCustomActions**: [CustomAction](#customaction)[]
* **StatelessDefaultActions**: string[] (Required)
* **StatelessFragmentDefaultActions**: string[] (Required)
* **StatelessRuleGroupReferences**: [StatelessRuleGroupReference](#statelessrulegroupreference)[]

## FirewallPolicy_PolicyVariables
### Properties
* **RuleVariables**: [RuleVariables](#rulevariables)

## RuleVariables
### Properties

## StatefulEngineOptions
### Properties
* **RuleOrder**: string
* **StreamExceptionPolicy**: string

## StatefulRuleGroupReference
### Properties
* **Override**: [StatefulRuleGroupOverride](#statefulrulegroupoverride)
* **Priority**: int
* **ResourceArn**: string (Required)

## StatefulRuleGroupOverride
### Properties
* **Action**: string

## CustomAction
### Properties
* **ActionDefinition**: [ActionDefinition](#actiondefinition) (Required)
* **ActionName**: string (Required)

## ActionDefinition
### Properties
* **PublishMetricAction**: [PublishMetricAction](#publishmetricaction)

## PublishMetricAction
### Properties
* **Dimensions**: [Dimension](#dimension)[] (Required)

## Dimension
### Properties
* **Value**: string (Required)

## StatelessRuleGroupReference
### Properties
* **Priority**: int (Required)
* **ResourceArn**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.NetworkFirewall/LoggingConfigurationProperties
### Properties
* **FirewallArn**: string (Required, Identifier)
* **FirewallName**: string
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration) (Required)

## LoggingConfiguration
### Properties
* **LogDestinationConfigs**: [LogDestinationConfig](#logdestinationconfig)[] (Required)

## LogDestinationConfig
### Properties
* **LogDestination**: [LoggingConfiguration_LogDestination](#loggingconfigurationlogdestination) (Required): A key-value pair to configure the logDestinations.
* **LogDestinationType**: string (Required)
* **LogType**: string (Required)

## LoggingConfiguration_LogDestination
### Properties

## AWS.NetworkFirewall/RuleGroupProperties
### Properties
* **Capacity**: int (Required)
* **Description**: string
* **RuleGroup**: [RuleGroup](#rulegroup)
* **RuleGroupArn**: string (ReadOnly, Identifier)
* **RuleGroupId**: string (ReadOnly)
* **RuleGroupName**: string (Required)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## RuleGroup
### Properties
* **ReferenceSets**: [ReferenceSets](#referencesets)
* **RulesSource**: [RulesSource](#rulessource) (Required)
* **RuleVariables**: [RuleVariables](#rulevariables)
* **StatefulRuleOptions**: [StatefulRuleOptions](#statefulruleoptions)

## ReferenceSets
### Properties
* **IPSetReferences**: [RuleGroup_IPSetReferences](#rulegroupipsetreferences)

## RuleGroup_IPSetReferences
### Properties

## RulesSource
### Properties
* **RulesSourceList**: [RulesSourceList](#rulessourcelist)
* **RulesString**: string
* **StatefulRules**: [StatefulRule](#statefulrule)[]
* **StatelessRulesAndCustomActions**: [StatelessRulesAndCustomActions](#statelessrulesandcustomactions)

## RulesSourceList
### Properties
* **GeneratedRulesType**: string (Required)
* **Targets**: string[] (Required)
* **TargetTypes**: string[] (Required)

## StatefulRule
### Properties
* **Action**: string (Required)
* **Header**: [Header](#header) (Required)
* **RuleOptions**: [RuleOption](#ruleoption)[] (Required)

## Header
### Properties
* **Destination**: string (Required)
* **DestinationPort**: string (Required)
* **Direction**: string (Required)
* **Protocol**: string (Required)
* **Source**: string (Required)
* **SourcePort**: string (Required)

## RuleOption
### Properties
* **Keyword**: string (Required)
* **Settings**: string[]

## StatelessRulesAndCustomActions
### Properties
* **CustomActions**: [CustomAction](#customaction)[]
* **StatelessRules**: [StatelessRule](#statelessrule)[] (Required)

## CustomAction
### Properties
* **ActionDefinition**: [ActionDefinition](#actiondefinition) (Required)
* **ActionName**: string (Required)

## ActionDefinition
### Properties
* **PublishMetricAction**: [PublishMetricAction](#publishmetricaction)

## PublishMetricAction
### Properties
* **Dimensions**: [Dimension](#dimension)[] (Required)

## Dimension
### Properties
* **Value**: string (Required)

## StatelessRule
### Properties
* **Priority**: int (Required)
* **RuleDefinition**: [RuleDefinition](#ruledefinition) (Required)

## RuleDefinition
### Properties
* **Actions**: string[] (Required)
* **MatchAttributes**: [MatchAttributes](#matchattributes) (Required)

## MatchAttributes
### Properties
* **DestinationPorts**: [PortRange](#portrange)[]
* **Destinations**: [Address](#address)[]
* **Protocols**: int[]
* **SourcePorts**: [PortRange](#portrange)[]
* **Sources**: [Address](#address)[]
* **TCPFlags**: [TCPFlagField](#tcpflagfield)[]

## PortRange
### Properties
* **FromPort**: int (Required)
* **ToPort**: int (Required)

## Address
### Properties
* **AddressDefinition**: string (Required)

## TCPFlagField
### Properties
* **Flags**: string[] (Required)
* **Masks**: string[]

## RuleVariables
### Properties
* **IPSets**: [RuleGroup_IPSets](#rulegroupipsets)
* **PortSets**: [RuleGroup_PortSets](#rulegroupportsets)

## RuleGroup_IPSets
### Properties

## RuleGroup_PortSets
### Properties

## StatefulRuleOptions
### Properties
* **RuleOrder**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

