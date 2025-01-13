# AWS.VpcLattice @ default

## Resource AWS.VpcLattice/AccessLogSubscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/AccessLogSubscriptionProperties](#awsvpclatticeaccesslogsubscriptionproperties) (Required, Identifier): properties of the resource

## Resource AWS.VpcLattice/AuthPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/AuthPolicyProperties](#awsvpclatticeauthpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.VpcLattice/Listener@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ListenerProperties](#awsvpclatticelistenerproperties) (Required, Identifier): properties of the resource

## Resource AWS.VpcLattice/ResourceConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ResourceConfigurationProperties](#awsvpclatticeresourceconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/ResourceGateway@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ResourceGatewayProperties](#awsvpclatticeresourcegatewayproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ResourcePolicyProperties](#awsvpclatticeresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.VpcLattice/Rule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/RuleProperties](#awsvpclatticeruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.VpcLattice/Service@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceProperties](#awsvpclatticeserviceproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/ServiceNetwork@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkProperties](#awsvpclatticeservicenetworkproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/ServiceNetworkResourceAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkResourceAssociationProperties](#awsvpclatticeservicenetworkresourceassociationproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/ServiceNetworkServiceAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkServiceAssociationProperties](#awsvpclatticeservicenetworkserviceassociationproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/ServiceNetworkVpcAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkVpcAssociationProperties](#awsvpclatticeservicenetworkvpcassociationproperties) (Identifier): properties of the resource

## Resource AWS.VpcLattice/TargetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/TargetGroupProperties](#awsvpclatticetargetgroupproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **FixedResponse**: [FixedResponse](#fixedresponse)
* **Forward**: [Forward](#forward)

## AuthPolicy_Policy
### Properties

## AWS.VpcLattice/AccessLogSubscriptionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DestinationArn**: string (Required)
* **Id**: string (ReadOnly)
* **ResourceArn**: string (ReadOnly)
* **ResourceId**: string (ReadOnly)
* **ResourceIdentifier**: string (WriteOnly)
* **ServiceNetworkLogType**: string
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/AuthPolicyProperties
### Properties
* **Policy**: [AuthPolicy_Policy](#authpolicypolicy) (Required)
* **ResourceIdentifier**: string (Required, Identifier)
* **State**: string (ReadOnly)

## AWS.VpcLattice/ListenerProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DefaultAction**: [DefaultAction](#defaultaction) (Required)
* **Id**: string (ReadOnly)
* **Name**: string
* **Port**: int
* **Protocol**: string (Required)
* **ServiceArn**: string (ReadOnly)
* **ServiceId**: string (ReadOnly)
* **ServiceIdentifier**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/ResourceConfigurationProperties
### Properties
* **AllowAssociationToSharableServiceNetwork**: bool
* **Arn**: string (ReadOnly, Identifier)
* **Id**: string (ReadOnly)
* **Name**: string
* **PortRanges**: string[]
* **ProtocolType**: string
* **ResourceConfigurationAuthType**: string (WriteOnly)
* **ResourceConfigurationDefinition**: [ResourceConfiguration_ResourceConfigurationDefinition](#resourceconfigurationresourceconfigurationdefinition)
* **ResourceConfigurationGroupId**: string (WriteOnly)
* **ResourceConfigurationType**: string
* **ResourceGatewayId**: string
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/ResourceGatewayProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Id**: string (ReadOnly)
* **IpAddressType**: string
* **Name**: string
* **SecurityGroupIds**: string[]: The ID of one or more security groups to associate with the endpoint network interface.
* **SubnetIds**: string[]: The ID of one or more subnets in which to create an endpoint network interface.
* **Tags**: [Tag](#tag)[]
* **VpcIdentifier**: string

## AWS.VpcLattice/ResourcePolicyProperties
### Properties
* **Policy**: [ResourcePolicy_Policy](#resourcepolicypolicy) (Required)
* **ResourceArn**: string (Required, Identifier)

## AWS.VpcLattice/RuleProperties
### Properties
* **Action**: [Action](#action) (Required)
* **Arn**: string (ReadOnly, Identifier)
* **Id**: string (ReadOnly)
* **ListenerIdentifier**: string (WriteOnly)
* **Match**: [Match](#match) (Required)
* **Name**: string
* **Priority**: int (Required)
* **ServiceIdentifier**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/ServiceNetworkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **AuthType**: string
* **CreatedAt**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **LastUpdatedAt**: string (ReadOnly)
* **Name**: string
* **SharingConfig**: [SharingConfig](#sharingconfig)
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/ServiceNetworkResourceAssociationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Id**: string (ReadOnly)
* **ResourceConfigurationId**: string
* **ServiceNetworkId**: string
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/ServiceNetworkServiceAssociationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedAt**: string (ReadOnly)
* **DnsEntry**: [DnsEntry](#dnsentry)
* **Id**: string (ReadOnly)
* **ServiceArn**: string (ReadOnly)
* **ServiceId**: string (ReadOnly)
* **ServiceIdentifier**: string (WriteOnly)
* **ServiceName**: string (ReadOnly)
* **ServiceNetworkArn**: string (ReadOnly)
* **ServiceNetworkId**: string (ReadOnly)
* **ServiceNetworkIdentifier**: string (WriteOnly)
* **ServiceNetworkName**: string (ReadOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/ServiceNetworkVpcAssociationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedAt**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **SecurityGroupIds**: string[]
* **ServiceNetworkArn**: string (ReadOnly)
* **ServiceNetworkId**: string (ReadOnly)
* **ServiceNetworkIdentifier**: string (WriteOnly)
* **ServiceNetworkName**: string (ReadOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **VpcId**: string (ReadOnly)
* **VpcIdentifier**: string (WriteOnly)

## AWS.VpcLattice/ServiceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **AuthType**: string
* **CertificateArn**: string
* **CreatedAt**: string (ReadOnly)
* **CustomDomainName**: string
* **DnsEntry**: [DnsEntry](#dnsentry)
* **Id**: string (ReadOnly)
* **LastUpdatedAt**: string (ReadOnly)
* **Name**: string
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## AWS.VpcLattice/TargetGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Config**: [TargetGroupConfig](#targetgroupconfig)
* **CreatedAt**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **LastUpdatedAt**: string (ReadOnly)
* **Name**: string
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **Targets**: [Target](#target)[]
* **Type**: string (Required)

## DefaultAction
### Properties
* **FixedResponse**: [FixedResponse](#fixedresponse)
* **Forward**: [Forward](#forward)

## DnsEntry
### Properties
* **DomainName**: string (ReadOnly)
* **HostedZoneId**: string (ReadOnly)

## DnsEntry
### Properties
* **DomainName**: string (ReadOnly)
* **HostedZoneId**: string (ReadOnly)

## FixedResponse
### Properties
* **StatusCode**: int (Required)

## FixedResponse
### Properties
* **StatusCode**: int (Required)

## Forward
### Properties
* **TargetGroups**: [WeightedTargetGroup](#weightedtargetgroup)[] (Required)

## Forward
### Properties
* **TargetGroups**: [WeightedTargetGroup](#weightedtargetgroup)[] (Required)

## HeaderMatch
### Properties
* **CaseSensitive**: bool
* **Match**: [HeaderMatchType](#headermatchtype) (Required)
* **Name**: string (Required)

## HeaderMatchType
### Properties
* **Contains**: string
* **Exact**: string
* **Prefix**: string

## HealthCheckConfig
### Properties
* **Enabled**: bool
* **HealthCheckIntervalSeconds**: int
* **HealthCheckTimeoutSeconds**: int
* **HealthyThresholdCount**: int
* **Matcher**: [Matcher](#matcher)
* **Path**: string
* **Port**: int
* **Protocol**: string
* **ProtocolVersion**: string
* **UnhealthyThresholdCount**: int

## HttpMatch
### Properties
* **HeaderMatches**: [HeaderMatch](#headermatch)[]
* **Method**: string
* **PathMatch**: [PathMatch](#pathmatch)

## Match
### Properties
* **HttpMatch**: [HttpMatch](#httpmatch) (Required)

## Matcher
### Properties
* **HttpCode**: string (Required)

## PathMatch
### Properties
* **CaseSensitive**: bool
* **Match**: [PathMatchType](#pathmatchtype) (Required)

## PathMatchType
### Properties
* **Exact**: string
* **Prefix**: string

## ResourceConfiguration_ResourceConfigurationDefinition
### Properties

## ResourcePolicy_Policy
### Properties

## SharingConfig
### Properties
* **enabled**: bool (Required)

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
* **Value**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Target
### Properties
* **Id**: string (Required)
* **Port**: int

## TargetGroupConfig
### Properties
* **HealthCheck**: [HealthCheckConfig](#healthcheckconfig)
* **IpAddressType**: string
* **LambdaEventStructureVersion**: string
* **Port**: int
* **Protocol**: string
* **ProtocolVersion**: string
* **VpcIdentifier**: string

## WeightedTargetGroup
### Properties
* **TargetGroupIdentifier**: string (Required)
* **Weight**: int

## WeightedTargetGroup
### Properties
* **TargetGroupIdentifier**: string (Required)
* **Weight**: int

