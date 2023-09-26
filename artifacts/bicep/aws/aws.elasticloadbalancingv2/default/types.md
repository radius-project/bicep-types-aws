# AWS.ElasticLoadBalancingV2 @ default

## Resource AWS.ElasticLoadBalancingV2/Listener@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/ListenerProperties](#awselasticloadbalancingv2listenerproperties) (Required): properties of the resource

## Resource AWS.ElasticLoadBalancingV2/ListenerRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/ListenerRuleProperties](#awselasticloadbalancingv2listenerruleproperties) (Required): properties of the resource

## Resource AWS.ElasticLoadBalancingV2/LoadBalancer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/LoadBalancerProperties](#awselasticloadbalancingv2loadbalancerproperties): properties of the resource

## Resource AWS.ElasticLoadBalancingV2/TargetGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/TargetGroupProperties](#awselasticloadbalancingv2targetgroupproperties): properties of the resource

## AWS.ElasticLoadBalancingV2/ListenerProperties
### Properties
* **AlpnPolicy**: string[]
* **Certificates**: [Certificate](#certificate)[]
* **DefaultActions**: [Action](#action)[] (Required, WriteOnly)
* **ListenerArn**: string (ReadOnly, Identifier)
* **LoadBalancerArn**: string (Required)
* **Port**: int
* **Protocol**: string
* **SslPolicy**: string

## Certificate
### Properties
* **CertificateArn**: string

## Action
### Properties
* **AuthenticateCognitoConfig**: [AuthenticateCognitoConfig](#authenticatecognitoconfig)
* **AuthenticateOidcConfig**: [AuthenticateOidcConfig](#authenticateoidcconfig)
* **FixedResponseConfig**: [FixedResponseConfig](#fixedresponseconfig)
* **ForwardConfig**: [ForwardConfig](#forwardconfig)
* **Order**: int
* **RedirectConfig**: [RedirectConfig](#redirectconfig)
* **TargetGroupArn**: string
* **Type**: string (Required)

## AuthenticateCognitoConfig
### Properties
* **AuthenticationRequestExtraParams**: [Listener_AuthenticationRequestExtraParams](#listenerauthenticationrequestextraparams)
* **OnUnauthenticatedRequest**: string
* **Scope**: string
* **SessionCookieName**: string
* **SessionTimeout**: string
* **UserPoolArn**: string (Required)
* **UserPoolClientId**: string (Required)
* **UserPoolDomain**: string (Required)

## Listener_AuthenticationRequestExtraParams
### Properties

## AuthenticateOidcConfig
### Properties
* **AuthenticationRequestExtraParams**: [Listener_AuthenticationRequestExtraParams](#listenerauthenticationrequestextraparams)
* **AuthorizationEndpoint**: string (Required)
* **ClientId**: string (Required)
* **ClientSecret**: string
* **Issuer**: string (Required)
* **OnUnauthenticatedRequest**: string
* **Scope**: string
* **SessionCookieName**: string
* **SessionTimeout**: string
* **TokenEndpoint**: string (Required)
* **UseExistingClientSecret**: bool
* **UserInfoEndpoint**: string (Required)

## Listener_AuthenticationRequestExtraParams
### Properties

## FixedResponseConfig
### Properties
* **ContentType**: string
* **MessageBody**: string
* **StatusCode**: string (Required)

## ForwardConfig
### Properties
* **TargetGroups**: [TargetGroupTuple](#targetgrouptuple)[]
* **TargetGroupStickinessConfig**: [TargetGroupStickinessConfig](#targetgroupstickinessconfig)

## TargetGroupTuple
### Properties
* **TargetGroupArn**: string
* **Weight**: int

## TargetGroupStickinessConfig
### Properties
* **DurationSeconds**: int
* **Enabled**: bool

## RedirectConfig
### Properties
* **Host**: string
* **Path**: string
* **Port**: string
* **Protocol**: string
* **Query**: string
* **StatusCode**: string (Required)

## AWS.ElasticLoadBalancingV2/ListenerRuleProperties
### Properties
* **Actions**: [Action](#action)[] (Required, WriteOnly)
* **Conditions**: [RuleCondition](#rulecondition)[] (Required)
* **IsDefault**: bool (ReadOnly)
* **ListenerArn**: string (WriteOnly)
* **Priority**: int (Required)
* **RuleArn**: string (ReadOnly, Identifier)

## Action
### Properties
* **AuthenticateCognitoConfig**: [AuthenticateCognitoConfig](#authenticatecognitoconfig)
* **AuthenticateOidcConfig**: [AuthenticateOidcConfig](#authenticateoidcconfig)
* **FixedResponseConfig**: [FixedResponseConfig](#fixedresponseconfig)
* **ForwardConfig**: [ForwardConfig](#forwardconfig)
* **Order**: int
* **RedirectConfig**: [RedirectConfig](#redirectconfig)
* **TargetGroupArn**: string
* **Type**: string (Required)

## AuthenticateCognitoConfig
### Properties
* **AuthenticationRequestExtraParams**: [ListenerRule_AuthenticationRequestExtraParams](#listenerruleauthenticationrequestextraparams)
* **OnUnauthenticatedRequest**: string
* **Scope**: string
* **SessionCookieName**: string
* **SessionTimeout**: int
* **UserPoolArn**: string (Required)
* **UserPoolClientId**: string (Required)
* **UserPoolDomain**: string (Required)

## ListenerRule_AuthenticationRequestExtraParams
### Properties

## AuthenticateOidcConfig
### Properties
* **AuthenticationRequestExtraParams**: [ListenerRule_AuthenticationRequestExtraParams](#listenerruleauthenticationrequestextraparams)
* **AuthorizationEndpoint**: string (Required)
* **ClientId**: string (Required)
* **ClientSecret**: string
* **Issuer**: string (Required)
* **OnUnauthenticatedRequest**: string
* **Scope**: string
* **SessionCookieName**: string
* **SessionTimeout**: int
* **TokenEndpoint**: string (Required)
* **UseExistingClientSecret**: bool
* **UserInfoEndpoint**: string (Required)

## ListenerRule_AuthenticationRequestExtraParams
### Properties

## FixedResponseConfig
### Properties
* **ContentType**: string
* **MessageBody**: string
* **StatusCode**: string (Required)

## ForwardConfig
### Properties
* **TargetGroups**: [TargetGroupTuple](#targetgrouptuple)[]
* **TargetGroupStickinessConfig**: [TargetGroupStickinessConfig](#targetgroupstickinessconfig)

## TargetGroupTuple
### Properties
* **TargetGroupArn**: string
* **Weight**: int

## TargetGroupStickinessConfig
### Properties
* **DurationSeconds**: int
* **Enabled**: bool

## RedirectConfig
### Properties
* **Host**: string
* **Path**: string
* **Port**: string
* **Protocol**: string
* **Query**: string
* **StatusCode**: string (Required)

## RuleCondition
### Properties
* **Field**: string
* **HostHeaderConfig**: [HostHeaderConfig](#hostheaderconfig)
* **HttpHeaderConfig**: [HttpHeaderConfig](#httpheaderconfig)
* **HttpRequestMethodConfig**: [HttpRequestMethodConfig](#httprequestmethodconfig)
* **PathPatternConfig**: [PathPatternConfig](#pathpatternconfig)
* **QueryStringConfig**: [QueryStringConfig](#querystringconfig)
* **SourceIpConfig**: [SourceIpConfig](#sourceipconfig)
* **Values**: string[]

## HostHeaderConfig
### Properties
* **Values**: string[]

## HttpHeaderConfig
### Properties
* **HttpHeaderName**: string
* **Values**: string[]

## HttpRequestMethodConfig
### Properties
* **Values**: string[]

## PathPatternConfig
### Properties
* **Values**: string[]

## QueryStringConfig
### Properties
* **Values**: [QueryStringKeyValue](#querystringkeyvalue)[]

## QueryStringKeyValue
### Properties
* **Key**: string
* **Value**: string

## SourceIpConfig
### Properties
* **Values**: string[]

## AWS.ElasticLoadBalancingV2/LoadBalancerProperties
### Properties
* **CanonicalHostedZoneID**: string (ReadOnly): The ID of the Amazon Route 53 hosted zone associated with the load balancer.
* **DNSName**: string (ReadOnly): The public DNS name of the load balancer.
* **IpAddressType**: string: The type of IP addresses used by the subnets for your load balancer. The possible values are ipv4 (for IPv4 addresses) and dualstack (for IPv4 and IPv6 addresses).
* **LoadBalancerArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the load balancer.
* **LoadBalancerAttributes**: [LoadBalancerAttribute](#loadbalancerattribute)[]: The load balancer attributes.
* **LoadBalancerFullName**: string (ReadOnly): The full name of the load balancer.
* **LoadBalancerName**: string (ReadOnly): The name of the load balancer.
* **Name**: string: The name of the load balancer.
* **Scheme**: string: The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet. The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer. The default is an Internet-facing load balancer.
* **SecurityGroups**: string[]: The IDs of the security groups for the load balancer.
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[]: The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
* **Subnets**: string[]: The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
* **Tags**: [Tag](#tag)[]: The tags to assign to the load balancer.
* **Type**: string: The type of load balancer. The default is application.

## LoadBalancerAttribute
### Properties
* **Key**: string
* **Value**: string

## SubnetMapping
### Properties
* **AllocationId**: string
* **IPv6Address**: string
* **PrivateIPv4Address**: string
* **SubnetId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.ElasticLoadBalancingV2/TargetGroupProperties
### Properties
* **HealthCheckEnabled**: bool: Indicates whether health checks are enabled. If the target type is lambda, health checks are disabled by default but can be enabled. If the target type is instance, ip, or alb, health checks are always enabled and cannot be disabled.
* **HealthCheckIntervalSeconds**: int: The approximate amount of time, in seconds, between health checks of an individual target.
* **HealthCheckPath**: string: [HTTP/HTTPS health checks] The destination for health checks on the targets. [HTTP1 or HTTP2 protocol version] The ping path. The default is /. [GRPC protocol version] The path of a custom health check method with the format /package.service/method. The default is /AWS.ALB/healthcheck.
* **HealthCheckPort**: string: The port the load balancer uses when performing health checks on targets. 
* **HealthCheckProtocol**: string: The protocol the load balancer uses when performing health checks on targets. 
* **HealthCheckTimeoutSeconds**: int: The amount of time, in seconds, during which no response from a target means a failed health check.
* **HealthyThresholdCount**: int: The number of consecutive health checks successes required before considering an unhealthy target healthy. 
* **IpAddressType**: string: The type of IP address used for this target group. The possible values are ipv4 and ipv6. 
* **LoadBalancerArns**: string[] (ReadOnly): The Amazon Resource Names (ARNs) of the load balancers that route traffic to this target group.
* **Matcher**: [Matcher](#matcher): [HTTP/HTTPS health checks] The HTTP or gRPC codes to use when checking for a successful response from a target.
* **Name**: string: The name of the target group.
* **Port**: int: The port on which the targets receive traffic. This port is used unless you specify a port override when registering the target. If the target is a Lambda function, this parameter does not apply. If the protocol is GENEVE, the supported port is 6081.
* **Protocol**: string: The protocol to use for routing traffic to the targets.
* **ProtocolVersion**: string: [HTTP/HTTPS protocol] The protocol version. The possible values are GRPC, HTTP1, and HTTP2.
* **Tags**: [Tag](#tag)[]: The tags.
* **TargetGroupArn**: string (ReadOnly, Identifier): The ARN of the Target Group
* **TargetGroupAttributes**: [TargetGroupAttribute](#targetgroupattribute)[]: The attributes.
* **TargetGroupFullName**: string (ReadOnly): The full name of the target group.
* **TargetGroupName**: string (ReadOnly): The name of the target group.
* **Targets**: [TargetDescription](#targetdescription)[]: The targets.
* **TargetType**: string: The type of target that you must specify when registering targets with this target group. You can't specify targets for a target group using more than one target type.
* **UnhealthyThresholdCount**: int: The number of consecutive health check failures required before considering a target unhealthy.
* **VpcId**: string: The identifier of the virtual private cloud (VPC). If the target is a Lambda function, this parameter does not apply.

## Matcher
### Properties
* **GrpcCode**: string: You can specify values between 0 and 99. You can specify multiple values, or a range of values. The default value is 12.
* **HttpCode**: string: For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values or a range of values. 

## Tag
### Properties
* **Key**: string (Required): The value for the tag. 
* **Value**: string (Required): The key name of the tag. 

## TargetGroupAttribute
### Properties
* **Key**: string: The value of the attribute.
* **Value**: string: The name of the attribute.

## TargetDescription
### Properties
* **AvailabilityZone**: string: An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
* **Id**: string (Required): The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target. 
* **Port**: int: The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.

