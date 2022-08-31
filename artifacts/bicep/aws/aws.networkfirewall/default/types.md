# AWS.NetworkFirewall @ default

## Resource AWS.NetworkFirewall/Firewall@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/FirewallProperties](#awsnetworkfirewallfirewallproperties): properties of the resource

## Resource AWS.NetworkFirewall/FirewallPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/FirewallPolicyProperties](#awsnetworkfirewallfirewallpolicyproperties): properties of the resource

## Resource AWS.NetworkFirewall/LoggingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/LoggingConfigurationProperties](#awsnetworkfirewallloggingconfigurationproperties): properties of the resource

## Resource AWS.NetworkFirewall/RuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/RuleGroupProperties](#awsnetworkfirewallrulegroupproperties): properties of the resource

## AWS.NetworkFirewall/FirewallProperties
### Properties
* **DeleteProtection**: bool
* **Description**: string
* **EndpointIds**: [EndpointId](#endpointid)[] (ReadOnly)
* **FirewallArn**: [ResourceArn](#resourcearn) (ReadOnly)
* **FirewallId**: string (ReadOnly)
* **FirewallName**: string
* **FirewallPolicyArn**: [ResourceArn](#resourcearn)
* **FirewallPolicyChangeProtection**: bool
* **SubnetChangeProtection**: bool
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[]
* **Tags**: [Tag](#tag)[]
* **VpcId**: string

## EndpointId
### Properties

## ResourceArn
### Properties

## SubnetMapping
### Properties
* **SubnetId**: string: A SubnetId.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.NetworkFirewall/FirewallPolicyProperties
### Properties
* **Description**: string
* **FirewallPolicy**: [FirewallPolicy](#firewallpolicy)
* **FirewallPolicyArn**: [ResourceArn](#resourcearn) (ReadOnly)
* **FirewallPolicyId**: string (ReadOnly)
* **FirewallPolicyName**: string
* **Tags**: [Tag](#tag)[]

## FirewallPolicy
### Properties
* **StatefulDefaultActions**: string[]
* **StatefulEngineOptions**: [StatefulEngineOptions](#statefulengineoptions)
* **StatefulRuleGroupReferences**: [StatefulRuleGroupReference](#statefulrulegroupreference)[]
* **StatelessCustomActions**: [CustomAction](#customaction)[]
* **StatelessDefaultActions**: string[]
* **StatelessFragmentDefaultActions**: string[]
* **StatelessRuleGroupReferences**: [StatelessRuleGroupReference](#statelessrulegroupreference)[]

## StatefulEngineOptions
### Properties
* **RuleOrder**: [RuleOrder](#ruleorder)

## RuleOrder
### Properties

## StatefulRuleGroupReference
### Properties
* **Priority**: [Priority](#priority)
* **ResourceArn**: [ResourceArn](#resourcearn)

## Priority
### Properties

## ResourceArn
### Properties

## CustomAction
### Properties
* **ActionDefinition**: [ActionDefinition](#actiondefinition)
* **ActionName**: string

## ActionDefinition
### Properties
* **PublishMetricAction**: [PublishMetricAction](#publishmetricaction)

## PublishMetricAction
### Properties
* **Dimensions**: [Dimension](#dimension)[]

## Dimension
### Properties
* **Value**: string

## StatelessRuleGroupReference
### Properties
* **Priority**: [Priority](#priority)
* **ResourceArn**: [ResourceArn](#resourcearn)

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.NetworkFirewall/LoggingConfigurationProperties
### Properties
* **FirewallArn**: [ResourceArn](#resourcearn)
* **FirewallName**: string
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)

## ResourceArn
### Properties

## LoggingConfiguration
### Properties
* **LogDestinationConfigs**: [LogDestinationConfig](#logdestinationconfig)[]

## LogDestinationConfig
### Properties
* **LogDestination**: [LoggingConfiguration_LogDestination](#loggingconfigurationlogdestination): A key-value pair to configure the logDestinations.
* **LogDestinationType**: string
* **LogType**: string

## LoggingConfiguration_LogDestination
### Properties

## AWS.NetworkFirewall/RuleGroupProperties
### Properties
* **Capacity**: int
* **Description**: string
* **RuleGroup**: [RuleGroup](#rulegroup)
* **RuleGroupArn**: [ResourceArn](#resourcearn) (ReadOnly)
* **RuleGroupId**: string (ReadOnly)
* **RuleGroupName**: string
* **Tags**: [Tag](#tag)[]
* **Type**: string

## RuleGroup
### Properties
* **RulesSource**: [RulesSource](#rulessource)
* **RuleVariables**: [RuleVariables](#rulevariables)
* **StatefulRuleOptions**: [StatefulRuleOptions](#statefulruleoptions)

## RulesSource
### Properties
* **RulesSourceList**: [RulesSourceList](#rulessourcelist)
* **RulesString**: [RulesString](#rulesstring)
* **StatefulRules**: [StatefulRule](#statefulrule)[]
* **StatelessRulesAndCustomActions**: [StatelessRulesAndCustomActions](#statelessrulesandcustomactions)

## RulesSourceList
### Properties
* **GeneratedRulesType**: [GeneratedRulesType](#generatedrulestype)
* **Targets**: string[]
* **TargetTypes**: [TargetType](#targettype)[]

## GeneratedRulesType
### Properties

## TargetType
### Properties

## RulesString
### Properties

## StatefulRule
### Properties
* **Action**: string
* **Header**: [Header](#header)
* **RuleOptions**: [RuleOption](#ruleoption)[]

## Header
### Properties
* **Destination**: string
* **DestinationPort**: [Port](#port)
* **Direction**: string
* **Protocol**: string
* **Source**: string
* **SourcePort**: [Port](#port)

## Port
### Properties

## RuleOption
### Properties
* **Keyword**: string
* **Settings**: [Setting](#setting)[]

## Setting
### Properties

## StatelessRulesAndCustomActions
### Properties
* **CustomActions**: [CustomAction](#customaction)[]
* **StatelessRules**: [StatelessRule](#statelessrule)[]

## CustomAction
### Properties
* **ActionDefinition**: [ActionDefinition](#actiondefinition)
* **ActionName**: string

## ActionDefinition
### Properties
* **PublishMetricAction**: [PublishMetricAction](#publishmetricaction)

## PublishMetricAction
### Properties
* **Dimensions**: [Dimension](#dimension)[]

## Dimension
### Properties
* **Value**: string

## StatelessRule
### Properties
* **Priority**: int
* **RuleDefinition**: [RuleDefinition](#ruledefinition)

## RuleDefinition
### Properties
* **Actions**: string[]
* **MatchAttributes**: [MatchAttributes](#matchattributes)

## MatchAttributes
### Properties
* **DestinationPorts**: [PortRange](#portrange)[]
* **Destinations**: [Address](#address)[]
* **Protocols**: [ProtocolNumber](#protocolnumber)[]
* **SourcePorts**: [PortRange](#portrange)[]
* **Sources**: [Address](#address)[]
* **TCPFlags**: [TCPFlagField](#tcpflagfield)[]

## PortRange
### Properties
* **FromPort**: [PortRangeBound](#portrangebound)
* **ToPort**: [PortRangeBound](#portrangebound)

## PortRangeBound
### Properties

## Address
### Properties
* **AddressDefinition**: string

## ProtocolNumber
### Properties

## TCPFlagField
### Properties
* **Flags**: [TCPFlag](#tcpflag)[]
* **Masks**: [TCPFlag](#tcpflag)[]

## TCPFlag
### Properties

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
* **RuleOrder**: [RuleOrder](#ruleorder)

## RuleOrder
### Properties

## ResourceArn
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

