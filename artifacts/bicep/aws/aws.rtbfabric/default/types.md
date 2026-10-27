# AWS.RTBFabric @ default

## Resource AWS.RTBFabric/InboundExternalLink@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RTBFabric/InboundExternalLinkProperties](#awsrtbfabricinboundexternallinkproperties) (Required, Identifier): properties of the resource

## Resource AWS.RTBFabric/Link@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RTBFabric/LinkProperties](#awsrtbfabriclinkproperties) (Required, Identifier): properties of the resource

## Resource AWS.RTBFabric/LinkRoutingRule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RTBFabric/LinkRoutingRuleProperties](#awsrtbfabriclinkroutingruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.RTBFabric/OutboundExternalLink@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RTBFabric/OutboundExternalLinkProperties](#awsrtbfabricoutboundexternallinkproperties) (Required, Identifier): properties of the resource

## Resource AWS.RTBFabric/RequesterGateway@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RTBFabric/RequesterGatewayProperties](#awsrtbfabricrequestergatewayproperties) (Required, Identifier): properties of the resource

## Resource AWS.RTBFabric/ResponderGateway@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RTBFabric/ResponderGatewayProperties](#awsrtbfabricrespondergatewayproperties) (Required, Identifier): properties of the resource

## AWS.RTBFabric/InboundExternalLinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedTimestamp**: string (ReadOnly)
* **DomainName**: string (ReadOnly)
* **GatewayId**: string (Required)
* **LinkAttributes**: [LinkAttributes](#linkattributes)
* **LinkId**: string (ReadOnly)
* **LinkLogSettings**: [LinkLogSettings](#linklogsettings) (Required)
* **LinkStatus**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedTimestamp**: string (ReadOnly)

## AWS.RTBFabric/LinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedTimestamp**: string (ReadOnly)
* **GatewayId**: string (Required)
* **HttpResponderAllowed**: bool (WriteOnly)
* **LinkAttributes**: [LinkAttributes](#linkattributes)
* **LinkDirection**: string (ReadOnly)
* **LinkId**: string (ReadOnly)
* **LinkLogSettings**: [LinkLogSettings](#linklogsettings) (Required)
* **LinkStatus**: string (ReadOnly)
* **ModuleConfigurationList**: [ModuleConfiguration](#moduleconfiguration)[] (WriteOnly)
* **PeerGatewayId**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UpdatedTimestamp**: string (ReadOnly)

## AWS.RTBFabric/LinkRoutingRuleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Conditions**: [RuleCondition](#rulecondition) (Required)
* **CreatedTimestamp**: string (ReadOnly)
* **GatewayId**: string (Required)
* **LinkId**: string (Required)
* **Priority**: int (Required)
* **RuleId**: string (ReadOnly)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **UpdatedTimestamp**: string (ReadOnly)

## AWS.RTBFabric/OutboundExternalLinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedTimestamp**: string (ReadOnly)
* **GatewayId**: string (Required)
* **LinkAttributes**: [LinkAttributes](#linkattributes)
* **LinkId**: string (ReadOnly)
* **LinkLogSettings**: [LinkLogSettings](#linklogsettings) (Required)
* **LinkStatus**: string (ReadOnly)
* **PublicEndpoint**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UpdatedTimestamp**: string (ReadOnly)

## AWS.RTBFabric/RequesterGatewayProperties
### Properties
* **ActiveLinksCount**: int (ReadOnly)
* **Arn**: string (ReadOnly, Identifier)
* **CreatedTimestamp**: string (ReadOnly)
* **Description**: string
* **DomainName**: string (ReadOnly)
* **GatewayId**: string (ReadOnly)
* **RequesterGatewayStatus**: string (ReadOnly)
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **TotalLinksCount**: int (ReadOnly)
* **UpdatedTimestamp**: string (ReadOnly)
* **VpcId**: string (Required)

## AWS.RTBFabric/ResponderGatewayProperties
### Properties
* **AcmCertificateArn**: string
* **Arn**: string (ReadOnly, Identifier)
* **CertificateAssociationStatus**: string (ReadOnly)
* **CreatedTimestamp**: string (ReadOnly)
* **Description**: string
* **DomainName**: string
* **ExternalInboundEndpoint**: [ResponderGateway_ExternalInboundEndpoint](#respondergatewayexternalinboundendpoint) (ReadOnly)
* **GatewayId**: string (ReadOnly)
* **GatewayType**: string
* **ListenerConfig**: [ListenerConfig](#listenerconfig)
* **ManagedEndpointConfiguration**: [ManagedEndpointConfiguration](#managedendpointconfiguration)
* **Port**: int (Required)
* **Protocol**: string (Required)
* **ResponderGatewayStatus**: string (ReadOnly)
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **TrustStoreConfiguration**: [TrustStoreConfiguration](#truststoreconfiguration)
* **UpdatedTimestamp**: string (ReadOnly)
* **VpcId**: string (Required)

## InboundExternalLink_ApplicationLogs
### Properties
* **LinkApplicationLogSampling**: [InboundExternalLink_ApplicationLogs_LinkApplicationLogSampling](#inboundexternallinkapplicationlogslinkapplicationlogsampling) (Required)

## InboundExternalLink_ApplicationLogs_LinkApplicationLogSampling
### Properties
* **ErrorLog**: int (Required)
* **FilterLog**: int (Required)

## Link_ApplicationLogs
### Properties
* **LinkApplicationLogSampling**: [Link_ApplicationLogs_LinkApplicationLogSampling](#linkapplicationlogslinkapplicationlogsampling) (Required)

## Link_ApplicationLogs_LinkApplicationLogSampling
### Properties
* **ErrorLog**: int (Required)
* **FilterLog**: int (Required)

## LinkAttributes
### Properties
* **CustomerProvidedId**: string
* **ResponderErrorMasking**: [ResponderErrorMaskingForHttpCode](#respondererrormaskingforhttpcode)[]

## LinkAttributes
### Properties
* **CustomerProvidedId**: string
* **ResponderErrorMasking**: [ResponderErrorMaskingForHttpCode](#respondererrormaskingforhttpcode)[]

## LinkAttributes
### Properties
* **CustomerProvidedId**: string
* **ResponderErrorMasking**: [ResponderErrorMaskingForHttpCode](#respondererrormaskingforhttpcode)[]

## LinkLogSettings
### Properties
* **ApplicationLogs**: [InboundExternalLink_ApplicationLogs](#inboundexternallinkapplicationlogs) (Required)

## LinkLogSettings
### Properties
* **ApplicationLogs**: [Link_ApplicationLogs](#linkapplicationlogs) (Required)

## LinkLogSettings
### Properties
* **ApplicationLogs**: [OutboundExternalLink_ApplicationLogs](#outboundexternallinkapplicationlogs) (Required)

## ListenerConfig
### Properties
* **Protocols**: string[] (Required)

## ManagedEndpointConfiguration
### Properties

## ModuleConfiguration
### Properties
* **DependsOn**: string[]
* **ModuleParameters**: [ModuleParameters](#moduleparameters)
* **Name**: string (Required)
* **Version**: string

## ModuleParameters
### Properties

## OutboundExternalLink_ApplicationLogs
### Properties
* **LinkApplicationLogSampling**: [OutboundExternalLink_ApplicationLogs_LinkApplicationLogSampling](#outboundexternallinkapplicationlogslinkapplicationlogsampling) (Required)

## OutboundExternalLink_ApplicationLogs_LinkApplicationLogSampling
### Properties
* **ErrorLog**: int (Required)
* **FilterLog**: int (Required)

## QueryStringKeyValuePair
### Properties
* **Key**: string (Required): Query string key ? RFC 3986 unreserved characters.
* **Value**: string (Required): Query string value ? RFC 3986 unreserved characters.

## ResponderErrorMaskingForHttpCode
### Properties
* **Action**: string (Required)
* **HttpCode**: string (Required)
* **LoggingTypes**: string[] (Required)
* **ResponseLoggingPercentage**: int

## ResponderErrorMaskingForHttpCode
### Properties
* **Action**: string (Required)
* **HttpCode**: string (Required)
* **LoggingTypes**: string[] (Required)
* **ResponseLoggingPercentage**: int

## ResponderErrorMaskingForHttpCode
### Properties
* **Action**: string (Required)
* **HttpCode**: string (Required)
* **LoggingTypes**: string[] (Required)
* **ResponseLoggingPercentage**: int

## ResponderGateway_ExternalInboundEndpoint
### Properties

## RuleCondition
### Properties
* **HostHeader**: string: Exact host match ? RFC 3986 unreserved characters. Mutually exclusive with HostHeaderWildcard.
* **HostHeaderWildcard**: string: Wildcard host pattern (e.g., *.example.com) ? RFC 3986 unreserved characters plus *. Mutually exclusive with HostHeader.
* **PathExact**: string: Exact path match ? must start with /. Mutually exclusive with PathPrefix.
* **PathPrefix**: string: Path prefix matching ? strict starts-with, must start with /. Mutually exclusive with PathExact.
* **QueryStringEquals**: [QueryStringKeyValuePair](#querystringkeyvaluepair): Query string key=value pair match (single pair).
* **QueryStringExists**: string: Query string key presence check (any value accepted).

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## TrustStoreConfiguration
### Properties
* **CertificateAuthorityCertificates**: string[] (Required)

