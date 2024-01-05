# AWS.VpcLattice @ default

## Resource AWS.VpcLattice/AccessLogSubscription@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/AccessLogSubscriptionProperties](#awsvpclatticeaccesslogsubscriptionproperties) (Required): properties of the resource

## Resource AWS.VpcLattice/AuthPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/AuthPolicyProperties](#awsvpclatticeauthpolicyproperties) (Required): properties of the resource

## Resource AWS.VpcLattice/Listener@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ListenerProperties](#awsvpclatticelistenerproperties) (Required): properties of the resource

## Resource AWS.VpcLattice/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ResourcePolicyProperties](#awsvpclatticeresourcepolicyproperties) (Required): properties of the resource

## Resource AWS.VpcLattice/Rule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/RuleProperties](#awsvpclatticeruleproperties) (Required): properties of the resource

## Resource AWS.VpcLattice/Service@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceProperties](#awsvpclatticeserviceproperties): properties of the resource

## Resource AWS.VpcLattice/ServiceNetwork@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkProperties](#awsvpclatticeservicenetworkproperties): properties of the resource

## Resource AWS.VpcLattice/ServiceNetworkServiceAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkServiceAssociationProperties](#awsvpclatticeservicenetworkserviceassociationproperties): properties of the resource

## Resource AWS.VpcLattice/ServiceNetworkVpcAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/ServiceNetworkVpcAssociationProperties](#awsvpclatticeservicenetworkvpcassociationproperties): properties of the resource

## Resource AWS.VpcLattice/TargetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VpcLattice/TargetGroupProperties](#awsvpclatticetargetgroupproperties) (Required): properties of the resource

## AWS.VpcLattice/AccessLogSubscriptionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DestinationArn**: string (Required)
* **Id**: string (ReadOnly)
* **ResourceArn**: string (ReadOnly)
* **ResourceId**: string (ReadOnly)
* **ResourceIdentifier**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.VpcLattice/AuthPolicyProperties
### Properties
* **Policy**: [AuthPolicy_Policy](#authpolicypolicy) (Required)
* **ResourceIdentifier**: string (Required, Identifier)
* **State**: string (ReadOnly)

## AuthPolicy_Policy
### Properties

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

## DefaultAction
### Properties
* **FixedResponse**: [FixedResponse](#fixedresponse)
* **Forward**: [Forward](#forward)

## FixedResponse
### Properties
* **StatusCode**: int (Required)

## Forward
### Properties
* **TargetGroups**: [WeightedTargetGroup](#weightedtargetgroup)[] (Required)

## WeightedTargetGroup
### Properties
* **TargetGroupIdentifier**: string (Required)
* **Weight**: int

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.VpcLattice/ResourcePolicyProperties
### Properties
* **Policy**: [ResourcePolicy_Policy](#resourcepolicypolicy) (Required)
* **ResourceArn**: string (Required, Identifier)

## ResourcePolicy_Policy
### Properties

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

## Action
### Properties
* **FixedResponse**: [FixedResponse](#fixedresponse)
* **Forward**: [Forward](#forward)

## FixedResponse
### Properties
* **StatusCode**: int (Required)

## Forward
### Properties
* **TargetGroups**: [WeightedTargetGroup](#weightedtargetgroup)[] (Required)

## WeightedTargetGroup
### Properties
* **TargetGroupIdentifier**: string (Required)
* **Weight**: int

## Match
### Properties
* **HttpMatch**: [HttpMatch](#httpmatch) (Required)

## HttpMatch
### Properties
* **HeaderMatches**: [HeaderMatch](#headermatch)[]
* **Method**: string
* **PathMatch**: [PathMatch](#pathmatch)

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

## PathMatch
### Properties
* **CaseSensitive**: bool
* **Match**: [PathMatchType](#pathmatchtype) (Required)

## PathMatchType
### Properties
* **Exact**: string
* **Prefix**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## DnsEntry
### Properties
* **DomainName**: string (ReadOnly)
* **HostedZoneId**: string (ReadOnly)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.VpcLattice/ServiceNetworkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **AuthType**: string
* **CreatedAt**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **LastUpdatedAt**: string (ReadOnly)
* **Name**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## DnsEntry
### Properties
* **DomainName**: string (ReadOnly)
* **HostedZoneId**: string (ReadOnly)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

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

## TargetGroupConfig
### Properties
* **HealthCheck**: [HealthCheckConfig](#healthcheckconfig)
* **IpAddressType**: string
* **LambdaEventStructureVersion**: string
* **Port**: int
* **Protocol**: string
* **ProtocolVersion**: string
* **VpcIdentifier**: string

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

## Matcher
### Properties
* **HttpCode**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Target
### Properties
* **Id**: string (Required)
* **Port**: int

