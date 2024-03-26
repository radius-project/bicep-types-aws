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

## Resource AWS.ElasticLoadBalancingV2/TrustStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/TrustStoreProperties](#awselasticloadbalancingv2truststoreproperties): properties of the resource

## Action
### Properties
* **AuthenticateCognitoConfig**: [AuthenticateCognitoConfig](#authenticatecognitoconfig): [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.
* **AuthenticateOidcConfig**: [AuthenticateOidcConfig](#authenticateoidcconfig): [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when ``Type`` is ``authenticate-oidc``.
* **FixedResponseConfig**: [FixedResponseConfig](#fixedresponseconfig): [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when ``Type`` is ``fixed-response``.
* **ForwardConfig**: [ForwardConfig](#forwardconfig): Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when ``Type`` is ``forward``. If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
* **Order**: int: The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
* **RedirectConfig**: [RedirectConfig](#redirectconfig): [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.
* **TargetGroupArn**: string: The Amazon Resource Name (ARN) of the target group. Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to one or more target groups, use ``ForwardConfig`` instead.
* **Type**: string (Required): The type of action.

## Action
### Properties
* **AuthenticateCognitoConfig**: [AuthenticateCognitoConfig](#authenticatecognitoconfig): [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.
* **AuthenticateOidcConfig**: [AuthenticateOidcConfig](#authenticateoidcconfig): [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). Specify only when ``Type`` is ``authenticate-oidc``.
* **FixedResponseConfig**: [FixedResponseConfig](#fixedresponseconfig): [Application Load Balancer] Information for creating an action that returns a custom HTTP response. Specify only when ``Type`` is ``fixed-response``.
* **ForwardConfig**: [ForwardConfig](#forwardconfig): Information for creating an action that distributes requests among one or more target groups. For Network Load Balancers, you can specify a single target group. Specify only when ``Type`` is ``forward``. If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.
* **Order**: int: The order for the action. This value is required for rules with multiple actions. The action with the lowest value for order is performed first.
* **RedirectConfig**: [RedirectConfig](#redirectconfig): [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.
* **TargetGroupArn**: string: The Amazon Resource Name (ARN) of the target group. Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to one or more target groups, use ``ForwardConfig`` instead.
* **Type**: string (Required): The type of action.

## AuthenticateCognitoConfig
### Properties
* **AuthenticationRequestExtraParams**: [ListenerRule_AuthenticationRequestExtraParams](#listenerruleauthenticationrequestextraparams): The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
* **OnUnauthenticatedRequest**: string: The behavior if the user is not authenticated. The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
* **Scope**: string: The set of user claims to be requested from the IdP. The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
* **SessionCookieName**: string: The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
* **SessionTimeout**: int: The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
* **UserPoolArn**: string (Required): The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
* **UserPoolClientId**: string (Required): The ID of the Amazon Cognito user pool client.
* **UserPoolDomain**: string (Required): The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

## AuthenticateCognitoConfig
### Properties
* **AuthenticationRequestExtraParams**: [Listener_AuthenticationRequestExtraParams](#listenerauthenticationrequestextraparams): The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
* **OnUnauthenticatedRequest**: string: The behavior if the user is not authenticated. The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
* **Scope**: string: The set of user claims to be requested from the IdP. The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
* **SessionCookieName**: string: The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
* **SessionTimeout**: string: The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
* **UserPoolArn**: string (Required): The Amazon Resource Name (ARN) of the Amazon Cognito user pool.
* **UserPoolClientId**: string (Required): The ID of the Amazon Cognito user pool client.
* **UserPoolDomain**: string (Required): The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

## AuthenticateOidcConfig
### Properties
* **AuthenticationRequestExtraParams**: [ListenerRule_AuthenticationRequestExtraParams](#listenerruleauthenticationrequestextraparams): The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
* **AuthorizationEndpoint**: string (Required): The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
* **ClientId**: string (Required): The OAuth 2.0 client identifier.
* **ClientSecret**: string: The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.
* **Issuer**: string (Required): The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
* **OnUnauthenticatedRequest**: string: The behavior if the user is not authenticated. The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
* **Scope**: string: The set of user claims to be requested from the IdP. The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
* **SessionCookieName**: string: The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
* **SessionTimeout**: int: The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
* **TokenEndpoint**: string (Required): The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
* **UseExistingClientSecret**: bool: Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
* **UserInfoEndpoint**: string (Required): The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.

## AuthenticateOidcConfig
### Properties
* **AuthenticationRequestExtraParams**: [Listener_AuthenticationRequestExtraParams](#listenerauthenticationrequestextraparams): The query parameters (up to 10) to include in the redirect request to the authorization endpoint.
* **AuthorizationEndpoint**: string (Required): The authorization endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
* **ClientId**: string (Required): The OAuth 2.0 client identifier.
* **ClientSecret**: string: The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.
* **Issuer**: string (Required): The OIDC issuer identifier of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
* **OnUnauthenticatedRequest**: string: The behavior if the user is not authenticated. The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.
* **Scope**: string: The set of user claims to be requested from the IdP. The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.
* **SessionCookieName**: string: The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.
* **SessionTimeout**: string: The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).
* **TokenEndpoint**: string (Required): The token endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.
* **UseExistingClientSecret**: bool: Indicates whether to use the existing client secret when modifying a rule. If you are creating a rule, you can omit this parameter or set it to false.
* **UserInfoEndpoint**: string (Required): The user info endpoint of the IdP. This must be a full URL, including the HTTPS protocol, the domain, and the path.

## AWS.ElasticLoadBalancingV2/ListenerProperties
### Properties
* **AlpnPolicy**: string[]: [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.
* **Certificates**: [Certificate](#certificate)[]: The default SSL server certificate for a secure listener. You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
 To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).
* **DefaultActions**: [Action](#action)[] (Required, WriteOnly): The actions for the default rule. You cannot define a condition for a default rule.
 To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).
* **ListenerArn**: string (ReadOnly, Identifier)
* **LoadBalancerArn**: string (Required): The Amazon Resource Name (ARN) of the load balancer.
* **MutualAuthentication**: [MutualAuthentication](#mutualauthentication): The mutual authentication configuration information.
* **Port**: int: The port on which the load balancer is listening. You cannot specify a port for a Gateway Load Balancer.
* **Protocol**: string: The protocol for connections from clients to the load balancer. For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, and TCP_UDP. You can?t specify the UDP or TCP_UDP protocol if dual-stack mode is enabled. You cannot specify a protocol for a Gateway Load Balancer.
* **SslPolicy**: string: [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.
 For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies) in the *Network Load Balancers Guide*.

## AWS.ElasticLoadBalancingV2/ListenerRuleProperties
### Properties
* **Actions**: [Action](#action)[] (Required, WriteOnly): The actions.
 The rule must include exactly one of the following types of actions: ``forward``, ``fixed-response``, or ``redirect``, and it must be the last action to be performed. If the rule is for an HTTPS listener, it can also optionally include an authentication action.
* **Conditions**: [RuleCondition](#rulecondition)[] (Required): The conditions.
 The rule can optionally include up to one of each of the following conditions: ``http-request-method``, ``host-header``, ``path-pattern``, and ``source-ip``. A rule can also optionally include one or more of each of the following conditions: ``http-header`` and ``query-string``.
* **IsDefault**: bool (ReadOnly)
* **ListenerArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the listener.
* **Priority**: int (Required): The rule priority. A listener can't have multiple rules with the same priority.
 If you try to reorder rules by updating their priorities, do not specify a new priority if an existing rule already uses this priority, as this can cause an error. If you need to reuse a priority with a different rule, you must remove it as a priority first, and then specify it in a subsequent update.
* **RuleArn**: string (ReadOnly, Identifier)

## AWS.ElasticLoadBalancingV2/LoadBalancerProperties
### Properties
* **CanonicalHostedZoneID**: string (ReadOnly)
* **DNSName**: string (ReadOnly)
* **EnforceSecurityGroupInboundRulesOnPrivateLinkTraffic**: string: Indicates whether to evaluate inbound security group rules for traffic sent to a Network Load Balancer through privatelink.
* **IpAddressType**: string: The IP address type. The possible values are ``ipv4`` (for IPv4 addresses) and ``dualstack`` (for IPv4 and IPv6 addresses). You can?t specify ``dualstack`` for a load balancer with a UDP or TCP_UDP listener.
* **LoadBalancerArn**: string (ReadOnly, Identifier)
* **LoadBalancerAttributes**: [LoadBalancerAttribute](#loadbalancerattribute)[]: The load balancer attributes.
* **LoadBalancerFullName**: string (ReadOnly)
* **LoadBalancerName**: string (ReadOnly)
* **Name**: string: The name of the load balancer. This name must be unique per region per account, can have a maximum of 32 characters, must contain only alphanumeric characters or hyphens, must not begin or end with a hyphen, and must not begin with "internal-".
 If you don't specify a name, AWS CloudFormation generates a unique physical ID for the load balancer. If you specify a name, you cannot perform updates that require replacement of this resource, but you can perform other updates. To replace the resource, specify a new name.
* **Scheme**: string: The nodes of an Internet-facing load balancer have public IP addresses. The DNS name of an Internet-facing load balancer is publicly resolvable to the public IP addresses of the nodes. Therefore, Internet-facing load balancers can route requests from clients over the internet.
 The nodes of an internal load balancer have only private IP addresses. The DNS name of an internal load balancer is publicly resolvable to the private IP addresses of the nodes. Therefore, internal load balancers can route requests only from clients with access to the VPC for the load balancer.
 The default is an Internet-facing load balancer.
 You cannot specify a scheme for a Gateway Load Balancer.
* **SecurityGroups**: string[]: [Application Load Balancers and Network Load Balancers] The IDs of the security groups for the load balancer.
* **SubnetMappings**: [SubnetMapping](#subnetmapping)[]: The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both.
 [Application Load Balancers] You must specify subnets from at least two Availability Zones. You cannot specify Elastic IP addresses for your subnets.
 [Application Load Balancers on Outposts] You must specify one Outpost subnet.
 [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
 [Network Load Balancers] You can specify subnets from one or more Availability Zones. You can specify one Elastic IP address per subnet if you need static IP addresses for your internet-facing load balancer. For internal load balancers, you can specify one private IP address per subnet from the IPv4 range of the subnet. For internet-facing load balancer, you can specify one IPv6 address per subnet.
 [Gateway Load Balancers] You can specify subnets from one or more Availability Zones. You cannot specify Elastic IP
* **Subnets**: string[]: The IDs of the public subnets. You can specify only one subnet per Availability Zone. You must specify either subnets or subnet mappings, but not both. To specify an Elastic IP address, specify subnet mappings instead of subnets.
 [Application Load Balancers] You must specify subnets from at least two Availability Zones.
 [Application Load Balancers on Outposts] You must specify one Outpost subnet.
 [Application Load Balancers on Local Zones] You can specify subnets from one or more Local Zones.
 [Network Load Balancers] You can specify subnets from one or more Availability Zones.
 [Gateway Load Balancers] You can specify subnets from one or more Availability Zones.
* **Tags**: [Tag](#tag)[]: The tags to assign to the load balancer.
* **Type**: string: The type of load balancer. The default is ``application``.

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

## AWS.ElasticLoadBalancingV2/TrustStoreProperties
### Properties
* **CaCertificatesBundleS3Bucket**: string (WriteOnly): The name of the S3 bucket to fetch the CA certificate bundle from.
* **CaCertificatesBundleS3Key**: string (WriteOnly): The name of the S3 object to fetch the CA certificate bundle from.
* **CaCertificatesBundleS3ObjectVersion**: string (WriteOnly): The version of the S3 bucket that contains the CA certificate bundle.
* **Name**: string: The name of the trust store.
* **NumberOfCaCertificates**: int (ReadOnly): The number of certificates associated with the trust store.
* **Status**: string (ReadOnly): The status of the trust store, could be either of ACTIVE or CREATING.
* **Tags**: [Tag](#tag)[]: The tags to assign to the trust store.
* **TrustStoreArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the trust store.

## Certificate
### Properties
* **CertificateArn**: string: The Amazon Resource Name (ARN) of the certificate.

## FixedResponseConfig
### Properties
* **ContentType**: string: The content type.
 Valid Values: text/plain | text/css | text/html | application/javascript | application/json
* **MessageBody**: string: The message.
* **StatusCode**: string (Required): The HTTP response code (2XX, 4XX, or 5XX).

## FixedResponseConfig
### Properties
* **ContentType**: string: The content type.
 Valid Values: text/plain | text/css | text/html | application/javascript | application/json
* **MessageBody**: string: The message.
* **StatusCode**: string (Required): The HTTP response code (2XX, 4XX, or 5XX).

## ForwardConfig
### Properties
* **TargetGroups**: [TargetGroupTuple](#targetgrouptuple)[]: Information about how traffic will be distributed between multiple target groups in a forward rule.
* **TargetGroupStickinessConfig**: [TargetGroupStickinessConfig](#targetgroupstickinessconfig): Information about the target group stickiness for a rule.

## ForwardConfig
### Properties
* **TargetGroups**: [TargetGroupTuple](#targetgrouptuple)[]: Information about how traffic will be distributed between multiple target groups in a forward rule.
* **TargetGroupStickinessConfig**: [TargetGroupStickinessConfig](#targetgroupstickinessconfig): Information about the target group stickiness for a rule.

## HostHeaderConfig
### Properties
* **Values**: string[]: The host names. The maximum size of each name is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
 If you specify multiple strings, the condition is satisfied if one of the strings matches the host name.

## HttpHeaderConfig
### Properties
* **HttpHeaderName**: string: The name of the HTTP header field. The maximum size is 40 characters. The header name is case insensitive. The allowed characters are specified by RFC 7230. Wildcards are not supported.
* **Values**: string[]: The strings to compare against the value of the HTTP header. The maximum size of each string is 128 characters. The comparison strings are case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
 If the same header appears multiple times in the request, we search them in order until a match is found.
 If you specify multiple strings, the condition is satisfied if one of the strings matches the value of the HTTP header. To require that all of the strings are a match, create one condition per string.

## HttpRequestMethodConfig
### Properties
* **Values**: string[]: The name of the request method. The maximum size is 40 characters. The allowed characters are A-Z, hyphen (-), and underscore (_). The comparison is case sensitive. Wildcards are not supported; therefore, the method name must be an exact match.
 If you specify multiple strings, the condition is satisfied if one of the strings matches the HTTP request method. We recommend that you route GET and HEAD requests in the same way, because the response to a HEAD request may be cached.

## Listener_AuthenticationRequestExtraParams
### Properties

## Listener_AuthenticationRequestExtraParams
### Properties

## ListenerRule_AuthenticationRequestExtraParams
### Properties

## ListenerRule_AuthenticationRequestExtraParams
### Properties

## LoadBalancerAttribute
### Properties
* **Key**: string: The name of the attribute.
 The following attributes are supported by all load balancers:
  +   ``deletion_protection.enabled`` - Indicates whether deletion protection is enabled. The value is ``true`` or ``false``. The default is ``false``.
  +   ``load_balancing.cross_zone.enabled`` - Indicates whether cross-zone load balancing is enabled. The possible values are ``true`` and ``false``. The default for Network Load Balancers and Gateway Load Balancers is ``false``. The default for Application Load Balancers is ``true``, and cannot be changed.
  
 The following attributes are supported by both Application Load Balancers and Network Load Balancers:
  +   ``access_logs.s3.enabled`` - Indicates whether access logs are enabled. The value is ``true`` or ``false``. The default is ``false``.
  +   ``access_logs.s3.bucket`` - The name of the S3 bucket for the access logs. This attribute is required if access logs are enabled. The bucket must exist in the same region as the load balancer and h
* **Value**: string: The value of the attribute.

## Matcher
### Properties
* **GrpcCode**: string: You can specify values between 0 and 99. You can specify multiple values, or a range of values. The default value is 12.
* **HttpCode**: string: For Application Load Balancers, you can specify values between 200 and 499, and the default value is 200. You can specify multiple values or a range of values. 

## MutualAuthentication
### Properties
* **IgnoreClientCertificateExpiry**: bool: Indicates whether expired client certificates are ignored.
* **Mode**: string: The client certificate handling method. Options are ``off``, ``passthrough`` or ``verify``. The default value is ``off``.
* **TrustStoreArn**: string: The Amazon Resource Name (ARN) of the trust store.

## PathPatternConfig
### Properties
* **Values**: string[]: The path patterns to compare against the request URL. The maximum size of each string is 128 characters. The comparison is case sensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character).
 If you specify multiple strings, the condition is satisfied if one of them matches the request URL. The path pattern is compared only to the path of the URL, not to its query string.

## QueryStringConfig
### Properties
* **Values**: [QueryStringKeyValue](#querystringkeyvalue)[]: The key/value pairs or values to find in the query string. The maximum size of each string is 128 characters. The comparison is case insensitive. The following wildcard characters are supported: * (matches 0 or more characters) and ? (matches exactly 1 character). To search for a literal '*' or '?' character in a query string, you must escape these characters in ``Values`` using a '\' character.
 If you specify multiple key/value pairs or values, the condition is satisfied if one of them is found in the query string.

## QueryStringKeyValue
### Properties
* **Key**: string: The key. You can omit the key.
* **Value**: string: The value.

## RedirectConfig
### Properties
* **Host**: string: The hostname. This component is not percent-encoded. The hostname can contain #{host}.
* **Path**: string: The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
* **Port**: string: The port. You can specify a value from 1 to 65535 or #{port}.
* **Protocol**: string: The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.
* **Query**: string: The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
* **StatusCode**: string (Required): The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

## RedirectConfig
### Properties
* **Host**: string: The hostname. This component is not percent-encoded. The hostname can contain #{host}.
* **Path**: string: The absolute path, starting with the leading "/". This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.
* **Port**: string: The port. You can specify a value from 1 to 65535 or #{port}.
* **Protocol**: string: The protocol. You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You cannot redirect HTTPS to HTTP.
* **Query**: string: The query parameters, URL-encoded when necessary, but not percent-encoded. Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.
* **StatusCode**: string (Required): The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

## RuleCondition
### Properties
* **Field**: string: The field in the HTTP request. The following are the possible values:
  +   ``http-header`` 
  +   ``http-request-method`` 
  +   ``host-header`` 
  +   ``path-pattern`` 
  +   ``query-string`` 
  +   ``source-ip``
* **HostHeaderConfig**: [HostHeaderConfig](#hostheaderconfig): Information for a host header condition. Specify only when ``Field`` is ``host-header``.
* **HttpHeaderConfig**: [HttpHeaderConfig](#httpheaderconfig): Information for an HTTP header condition. Specify only when ``Field`` is ``http-header``.
* **HttpRequestMethodConfig**: [HttpRequestMethodConfig](#httprequestmethodconfig): Information for an HTTP method condition. Specify only when ``Field`` is ``http-request-method``.
* **PathPatternConfig**: [PathPatternConfig](#pathpatternconfig): Information for a path pattern condition. Specify only when ``Field`` is ``path-pattern``.
* **QueryStringConfig**: [QueryStringConfig](#querystringconfig): Information for a query string condition. Specify only when ``Field`` is ``query-string``.
* **SourceIpConfig**: [SourceIpConfig](#sourceipconfig): Information for a source IP condition. Specify only when ``Field`` is ``source-ip``.
* **Values**: string[]: The condition value. Specify only when ``Field`` is ``host-header`` or ``path-pattern``. Alternatively, to specify multiple host names or multiple path patterns, use ``HostHeaderConfig`` or ``PathPatternConfig``.
 If ``Field`` is ``host-header`` and you're not using ``HostHeaderConfig``, you can specify a single host name (for example, my.example.com). A host name is case insensitive, can be up to 128 characters in length, and can contain any of the following characters.
  +  A-Z, a-z, 0-9
  +  - .
  +  * (matches 0 or more characters)
  +  ? (matches exactly 1 character)
  
 If ``Field`` is ``path-pattern`` and you're not using ``PathPatternConfig``, you can specify a single path pattern (for example, /img/*). A path pattern is case-sensitive, can be up to 128 characters in length, and can contain any of the following characters.
  +  A-Z, a-z, 0-9
  +  _ - . $ / ~ " ' @ : +
  +  & (using &amp;)
  +  * (matches 0 or more characters)
  +  ? (matches exactly 1 character)

## SourceIpConfig
### Properties
* **Values**: string[]: The source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.
 If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header.

## SubnetMapping
### Properties
* **AllocationId**: string: [Network Load Balancers] The allocation ID of the Elastic IP address for an internet-facing load balancer.
* **IPv6Address**: string: [Network Load Balancers] The IPv6 address.
* **PrivateIPv4Address**: string: [Network Load Balancers] The private IPv4 address for an internal load balancer.
* **SubnetId**: string (Required): The ID of the subnet.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string: The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The value for the tag. 
* **Value**: string (Required): The key name of the tag. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TargetDescription
### Properties
* **AvailabilityZone**: string: An Availability Zone or all. This determines whether the target receives traffic from the load balancer nodes in the specified Availability Zone or from all enabled Availability Zones for the load balancer.
* **Id**: string (Required): The ID of the target. If the target type of the target group is instance, specify an instance ID. If the target type is ip, specify an IP address. If the target type is lambda, specify the ARN of the Lambda function. If the target type is alb, specify the ARN of the Application Load Balancer target. 
* **Port**: int: The port on which the target is listening. If the target group protocol is GENEVE, the supported port is 6081. If the target type is alb, the targeted Application Load Balancer must have at least one listener whose port matches the target group port. Not used if the target is a Lambda function.

## TargetGroupAttribute
### Properties
* **Key**: string: The value of the attribute.
* **Value**: string: The name of the attribute.

## TargetGroupStickinessConfig
### Properties
* **DurationSeconds**: int: The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).
* **Enabled**: bool: Indicates whether target group stickiness is enabled.

## TargetGroupStickinessConfig
### Properties
* **DurationSeconds**: int: The time period, in seconds, during which requests from a client should be routed to the same target group. The range is 1-604800 seconds (7 days).
* **Enabled**: bool: Indicates whether target group stickiness is enabled.

## TargetGroupTuple
### Properties
* **TargetGroupArn**: string: The Amazon Resource Name (ARN) of the target group.
* **Weight**: int: The weight. The range is 0 to 999.

## TargetGroupTuple
### Properties
* **TargetGroupArn**: string: The Amazon Resource Name (ARN) of the target group.
* **Weight**: int: The weight. The range is 0 to 999.

