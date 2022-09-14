# AWS.NetworkFirewall @ default

## Resource AWS.NetworkFirewall/Firewall@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/FirewallProperties](#awsnetworkfirewallfirewallproperties) (Required): properties of the resource

## Resource AWS.NetworkFirewall/FirewallPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/FirewallPolicyProperties](#awsnetworkfirewallfirewallpolicyproperties) (Required): properties of the resource

## Resource AWS.NetworkFirewall/LoggingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/LoggingConfigurationProperties](#awsnetworkfirewallloggingconfigurationproperties) (Required): properties of the resource

## Resource AWS.NetworkFirewall/RuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.NetworkFirewall/RuleGroupProperties](#awsnetworkfirewallrulegroupproperties) (Required): properties of the resource

## AWS.NetworkFirewall/FirewallProperties
### Properties
* **DeleteProtection**: bool
* **Description**: string
* **EndpointIds**: [EndpointId](#endpointid)[] (ReadOnly)
* **FirewallArn**: [ResourceArn](#resourcearn) (ReadOnly)
* **FirewallId**: string (ReadOnly)
* **FirewallName**: string (Required)
* **FirewallPolicyArn**: [ResourceArn](#resourcearn) (Required)
* **FirewallPolicyChangeProtection**: bool
* **SubnetChangeProtection**: bool
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[] (Required)
* **Tags**: [Tag](#tag)[]
* **VpcId**: string (Required)

## EndpointId
### Properties

## ResourceArn
### Properties

## SubnetMapping
### Properties
* **SubnetId**: string (Required): A SubnetId.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.NetworkFirewall/FirewallPolicyProperties
### Properties
* **Description**: string
* **FirewallPolicy**: [FirewallPolicy](#firewallpolicy) (Required)
* **FirewallPolicyArn**: [ResourceArn](#resourcearn) (ReadOnly)
* **FirewallPolicyId**: string (ReadOnly)
* **FirewallPolicyName**: string (Required)
* **Tags**: [Tag](#tag)[]

## FirewallPolicy
### Properties
* **StatefulDefaultActions**: string[]
* **StatefulEngineOptions**: [StatefulEngineOptions](#statefulengineoptions)
* **StatefulRuleGroupReferences**: [StatefulRuleGroupReference](#statefulrulegroupreference)[]
* **StatelessCustomActions**: [CustomAction](#customaction)[]
* **StatelessDefaultActions**: string[] (Required)
* **StatelessFragmentDefaultActions**: string[] (Required)
* **StatelessRuleGroupReferences**: [StatelessRuleGroupReference](#statelessrulegroupreference)[]

## StatefulEngineOptions
### Properties
* **RuleOrder**: [RuleOrder](#ruleorder)

## RuleOrder
### Properties

## StatefulRuleGroupReference
### Properties
* **Priority**: [Priority](#priority)
* **ResourceArn**: [ResourceArn](#resourcearn) (Required)

## Priority
### Properties

## ResourceArn
### Properties

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
* **Priority**: [Priority](#priority) (Required)
* **ResourceArn**: [ResourceArn](#resourcearn) (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.NetworkFirewall/LoggingConfigurationProperties
### Properties
* **FirewallArn**: [ResourceArn](#resourcearn) (Required)
* **FirewallName**: string
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration) (Required)

## ResourceArn
### Properties

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
* **RuleGroupArn**: [ResourceArn](#resourcearn) (ReadOnly)
* **RuleGroupId**: string (ReadOnly)
* **RuleGroupName**: string (Required)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## RuleGroup
### Properties
* **RulesSource**: [RulesSource](#rulessource) (Required)
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
* **GeneratedRulesType**: [GeneratedRulesType](#generatedrulestype) (Required)
* **Targets**: string[] (Required)
* **TargetTypes**: [TargetType](#targettype)[] (Required)

## GeneratedRulesType
### Properties

## TargetType
### Properties

## RulesString
### Properties

## StatefulRule
### Properties
* **Action**: string (Required)
* **Header**: [Header](#header) (Required)
* **RuleOptions**: [RuleOption](#ruleoption)[] (Required)

## Header
### Properties
* **Destination**: string (Required)
* **DestinationPort**: [Port](#port) (Required)
* **Direction**: string (Required)
* **Protocol**: string (Required)
* **Source**: string (Required)
* **SourcePort**: [Port](#port) (Required)

## Port
### Properties

## RuleOption
### Properties
* **Keyword**: string (Required)
* **Settings**: [Setting](#setting)[]

## Setting
### Properties

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
* **Protocols**: [ProtocolNumber](#protocolnumber)[]
* **SourcePorts**: [PortRange](#portrange)[]
* **Sources**: [Address](#address)[]
* **TCPFlags**: [TCPFlagField](#tcpflagfield)[]

## PortRange
### Properties
* **FromPort**: [PortRangeBound](#portrangebound) (Required)
* **ToPort**: [PortRangeBound](#portrangebound) (Required)

## PortRangeBound
### Properties

## Address
### Properties
* **AddressDefinition**: string (Required)

## ProtocolNumber
### Properties

## TCPFlagField
### Properties
* **Flags**: [TCPFlag](#tcpflag)[] (Required)
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
* **Key**: string (Required)
* **Value**: string (Required)

