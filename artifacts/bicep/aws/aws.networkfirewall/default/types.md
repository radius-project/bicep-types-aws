# AWS.NetworkFirewall @ default

## Resource AWS.NetworkFirewall/ContainerAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/ContainerAssociationProperties](#awsnetworkfirewallcontainerassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFirewall/Firewall@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/FirewallProperties](#awsnetworkfirewallfirewallproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFirewall/FirewallPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/FirewallPolicyProperties](#awsnetworkfirewallfirewallpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFirewall/LoggingConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/LoggingConfigurationProperties](#awsnetworkfirewallloggingconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFirewall/RuleGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/RuleGroupProperties](#awsnetworkfirewallrulegroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFirewall/TLSInspectionConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/TLSInspectionConfigurationProperties](#awsnetworkfirewalltlsinspectionconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFirewall/VpcEndpointAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFirewall/VpcEndpointAssociationProperties](#awsnetworkfirewallvpcendpointassociationproperties) (Required, Identifier): properties of the resource

## ActionDefinition
### Properties
* **PublishMetricAction**: [PublishMetricAction](#publishmetricaction)

## ActionDefinition
### Properties
* **PublishMetricAction**: [PublishMetricAction](#publishmetricaction)

## Address
### Properties
* **AddressDefinition**: string (Required)

## Address
### Properties
* **AddressDefinition**: string (Required)

## AvailabilityZoneMapping
### Properties
* **AvailabilityZone**: string (Required): A AvailabilityZone

## AWS.NetworkFirewall/ContainerAssociationProperties
### Properties
* **ContainerAssociationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the container association.
* **ContainerAssociationName**: string (Required): The descriptive name of the container association. You can't change the name of a container association after you create it.
* **ContainerMonitoringConfigurations**: [ContainerMonitoringConfiguration](#containermonitoringconfiguration)[] (Required): The monitoring configurations for the container association. Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.
* **Description**: string: A description of the container association.
* **ResolvedCidrCount**: int (ReadOnly): The number of CIDR blocks resolved from the monitored containers.
* **Status**: string (ReadOnly): The current status of the container association.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required): The type of containers to monitor. You can't change the container type after creation.

## AWS.NetworkFirewall/FirewallPolicyProperties
### Properties
* **Description**: string
* **FirewallPolicy**: [FirewallPolicy](#firewallpolicy) (Required)
* **FirewallPolicyArn**: string (ReadOnly, Identifier)
* **FirewallPolicyId**: string (ReadOnly)
* **FirewallPolicyName**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.NetworkFirewall/FirewallProperties
### Properties
* **AvailabilityZoneChangeProtection**: bool
* **AvailabilityZoneMappings**: [AvailabilityZoneMapping](#availabilityzonemapping)[]
* **DeleteProtection**: bool
* **Description**: string
* **EnabledAnalysisTypes**: string[]: The types of analysis to enable for the firewall. Can be TLS_SNI, HTTP_HOST, or both.
* **EndpointIds**: string[] (ReadOnly)
* **FirewallArn**: string (ReadOnly, Identifier)
* **FirewallId**: string (ReadOnly)
* **FirewallName**: string (Required)
* **FirewallPolicyArn**: string (Required)
* **FirewallPolicyChangeProtection**: bool
* **NatGatewayMappings**: [NatGatewayMapping](#natgatewaymapping)[]: The NAT gateways that the firewall proxies egress traffic through when NoSourcePreservation is true.
* **NoSourcePreservation**: bool: Indicates whether the firewall operates in proxy mode, where the source IP address of traffic is not preserved. When true, specify NatGatewayMappings and VpcEndpoint instead of the top-level VpcId and SubnetMappings. You can't change this setting after you create the firewall.
* **NumberOfAssociations**: int (ReadOnly): The number of VPC endpoint associations attached to the firewall.
* **ProxySettings**: [ProxySettings](#proxysettings)
* **SubnetChangeProtection**: bool
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[]
* **Tags**: [Tag](#tag)[]
* **TransitGatewayAttachmentId**: string (ReadOnly)
* **TransitGatewayId**: string
* **VpcEndpoint**: [VpcEndpoint](#vpcendpoint)
* **VpcId**: string

## AWS.NetworkFirewall/LoggingConfigurationProperties
### Properties
* **EnableMonitoringDashboard**: bool
* **FirewallArn**: string (Required, Identifier)
* **FirewallName**: string
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration) (Required)

## AWS.NetworkFirewall/RuleGroupProperties
### Properties
* **Capacity**: int (Required)
* **Description**: string
* **RuleGroup**: [RuleGroup](#rulegroup)
* **RuleGroupArn**: string (ReadOnly, Identifier)
* **RuleGroupId**: string (ReadOnly)
* **RuleGroupName**: string (Required)
* **SummaryConfiguration**: [RuleGroup_SummaryConfiguration](#rulegroupsummaryconfiguration)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## AWS.NetworkFirewall/TLSInspectionConfigurationProperties
### Properties
* **Description**: string
* **Tags**: [Tag](#tag)[]
* **TLSInspectionConfiguration**: [TLSInspectionConfiguration](#tlsinspectionconfiguration) (Required)
* **TLSInspectionConfigurationArn**: string (ReadOnly, Identifier)
* **TLSInspectionConfigurationId**: string (ReadOnly)
* **TLSInspectionConfigurationName**: string (Required)

## AWS.NetworkFirewall/VpcEndpointAssociationProperties
### Properties
* **Description**: string
* **EndpointId**: string (ReadOnly)
* **FirewallArn**: string (Required)
* **SubnetMapping**: [SubnetMapping](#subnetmapping) (Required)
* **Tags**: [Tag](#tag)[]
* **VpcEndpointAssociationArn**: string (ReadOnly, Identifier)
* **VpcEndpointAssociationId**: string (ReadOnly)
* **VpcId**: string (Required)

## ContainerAttribute
### Properties
* **Key**: string (Required): The attribute key to filter on.
* **Value**: string (Required): The attribute value to match.

## ContainerMonitoringConfiguration
### Properties
* **AttributeFilters**: [ContainerAttribute](#containerattribute)[]: Key-value pairs that filter which containers are tracked. For Amazon EKS, you can filter by namespace and Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).
* **ClusterArn**: string (Required): The ARN of the Amazon ECS or Amazon EKS cluster to monitor. The cluster must be in the same Region and account as the container association.

## CustomAction
### Properties
* **ActionDefinition**: [ActionDefinition](#actiondefinition) (Required)
* **ActionName**: string (Required)

## CustomAction
### Properties
* **ActionDefinition**: [ActionDefinition](#actiondefinition) (Required)
* **ActionName**: string (Required)

## Dimension
### Properties
* **Value**: string (Required)

## Dimension
### Properties
* **Value**: string (Required)

## FirewallPolicy
### Properties
* **EnableTLSSessionHolding**: bool
* **PolicyVariables**: [FirewallPolicy_PolicyVariables](#firewallpolicypolicyvariables)
* **StatefulDefaultActions**: string[]
* **StatefulEngineOptions**: [StatefulEngineOptions](#statefulengineoptions)
* **StatefulRuleGroupReferences**: [StatefulRuleGroupReference](#statefulrulegroupreference)[]
* **StatelessCustomActions**: [CustomAction](#customaction)[]
* **StatelessDefaultActions**: string[] (Required)
* **StatelessFragmentDefaultActions**: string[] (Required)
* **StatelessRuleGroupReferences**: [StatelessRuleGroupReference](#statelessrulegroupreference)[]
* **TLSInspectionConfigurationArn**: string

## FirewallPolicy_FlowTimeouts
### Properties
* **TcpIdleTimeoutSeconds**: int

## FirewallPolicy_PolicyVariables
### Properties
* **RuleVariables**: [RuleVariables](#rulevariables)

## Header
### Properties
* **Destination**: string (Required)
* **DestinationPort**: string (Required)
* **Direction**: string (Required)
* **Protocol**: string (Required)
* **Source**: string (Required)
* **SourcePort**: string (Required)

## ListenerProperty
### Properties
* **Port**: int: The port the proxy listener accepts traffic on.
* **Type**: string: The protocol the proxy listener uses.

## LogDestinationConfig
### Properties
* **LogDestination**: [LoggingConfiguration_LogDestination](#loggingconfigurationlogdestination) (Required): A key-value pair to configure the logDestinations.
* **LogDestinationType**: string (Required)
* **LogType**: string (Required)

## LoggingConfiguration
### Properties
* **LogDestinationConfigs**: [LogDestinationConfig](#logdestinationconfig)[] (Required)

## LoggingConfiguration_LogDestination
### Properties

## MatchAttributes
### Properties
* **DestinationPorts**: [PortRange](#portrange)[]
* **Destinations**: [Address](#address)[]
* **Protocols**: int[]
* **SourcePorts**: [PortRange](#portrange)[]
* **Sources**: [Address](#address)[]
* **TCPFlags**: [TCPFlagField](#tcpflagfield)[]

## NatGatewayMapping
### Properties
* **NatGatewayId**: string (Required): The unique identifier of a NAT gateway.

## PortRange
### Properties
* **FromPort**: int (Required)
* **ToPort**: int (Required)

## PortRange
### Properties
* **FromPort**: int (Required)
* **ToPort**: int (Required)

## ProxySettings
### Properties
* **ListenerProperties**: [ListenerProperty](#listenerproperty)[]

## PublishMetricAction
### Properties
* **Dimensions**: [Dimension](#dimension)[] (Required)

## PublishMetricAction
### Properties
* **Dimensions**: [Dimension](#dimension)[] (Required)

## ReferenceSets
### Properties
* **IPSetReferences**: [RuleGroup_IPSetReferences](#rulegroupipsetreferences)

## RuleDefinition
### Properties
* **Actions**: string[] (Required)
* **MatchAttributes**: [MatchAttributes](#matchattributes) (Required)

## RuleGroup
### Properties
* **ReferenceSets**: [ReferenceSets](#referencesets)
* **RulesSource**: [RulesSource](#rulessource) (Required)
* **RuleVariables**: [RuleVariables](#rulevariables)
* **StatefulRuleOptions**: [StatefulRuleOptions](#statefulruleoptions)

## RuleGroup_IPSetReferences
### Properties

## RuleGroup_IPSets
### Properties

## RuleGroup_PortSets
### Properties

## RuleGroup_SummaryConfiguration
### Properties
* **RuleOptions**: string[]

## RuleOption
### Properties
* **Keyword**: string (Required)
* **Settings**: string[]

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

## RuleVariables
### Properties

## RuleVariables
### Properties
* **IPSets**: [RuleGroup_IPSets](#rulegroupipsets)
* **PortSets**: [RuleGroup_PortSets](#rulegroupportsets)

## ServerCertificate
### Properties
* **ResourceArn**: string

## ServerCertificateConfiguration
### Properties
* **CertificateAuthorityArn**: string
* **CheckCertificateRevocationStatus**: [TLSInspectionConfiguration_CheckCertificateRevocationStatus](#tlsinspectionconfigurationcheckcertificaterevocationstatus)
* **Scopes**: [ServerCertificateScope](#servercertificatescope)[]
* **ServerCertificates**: [ServerCertificate](#servercertificate)[]

## ServerCertificateScope
### Properties
* **DestinationPorts**: [PortRange](#portrange)[]
* **Destinations**: [Address](#address)[]
* **Protocols**: int[]
* **SourcePorts**: [PortRange](#portrange)[]
* **Sources**: [Address](#address)[]

## StatefulEngineOptions
### Properties
* **FlowTimeouts**: [FirewallPolicy_FlowTimeouts](#firewallpolicyflowtimeouts)
* **RuleOrder**: string
* **StreamExceptionPolicy**: string

## StatefulRule
### Properties
* **Action**: string (Required)
* **Header**: [Header](#header) (Required)
* **RuleOptions**: [RuleOption](#ruleoption)[] (Required)

## StatefulRuleGroupOverride
### Properties
* **Action**: string

## StatefulRuleGroupReference
### Properties
* **DeepThreatInspection**: bool
* **Override**: [StatefulRuleGroupOverride](#statefulrulegroupoverride)
* **Priority**: int
* **ResourceArn**: string (Required)

## StatefulRuleOptions
### Properties
* **RuleOrder**: string

## StatelessRule
### Properties
* **Priority**: int (Required)
* **RuleDefinition**: [RuleDefinition](#ruledefinition) (Required)

## StatelessRuleGroupReference
### Properties
* **Priority**: int (Required)
* **ResourceArn**: string (Required)

## StatelessRulesAndCustomActions
### Properties
* **CustomActions**: [CustomAction](#customaction)[]
* **StatelessRules**: [StatelessRule](#statelessrule)[] (Required)

## SubnetMapping
### Properties
* **IPAddressType**: string: A IPAddressType
* **SubnetId**: string (Required): A SubnetId.

## SubnetMapping
### Properties
* **IPAddressType**: string: A IPAddressType
* **SubnetId**: string (Required): A SubnetId.

## Tag
### Properties
* **Key**: string (Required): The part of the key:value pair that defines a tag. Tag keys are case-sensitive.
* **Value**: string (Required): The part of the key:value pair that defines a tag. Tag values are case-sensitive.

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

## TCPFlagField
### Properties
* **Flags**: string[] (Required)
* **Masks**: string[]

## TLSInspectionConfiguration
### Properties
* **ServerCertificateConfigurations**: [ServerCertificateConfiguration](#servercertificateconfiguration)[]

## TLSInspectionConfiguration_CheckCertificateRevocationStatus
### Properties
* **RevokedStatusAction**: string
* **UnknownStatusAction**: string

## VpcEndpoint
### Properties
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[]
* **VpcId**: string: The unique identifier of the VPC for the firewall endpoint.

