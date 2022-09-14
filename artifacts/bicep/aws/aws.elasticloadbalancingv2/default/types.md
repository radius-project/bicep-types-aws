# AWS.ElasticLoadBalancingV2 @ default

## Resource AWS.ElasticLoadBalancingV2/Listener@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/ListenerProperties](#awselasticloadbalancingv2listenerproperties) (Required): properties of the resource

## Resource AWS.ElasticLoadBalancingV2/ListenerRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ElasticLoadBalancingV2/ListenerRuleProperties](#awselasticloadbalancingv2listenerruleproperties) (Required): properties of the resource

## AWS.ElasticLoadBalancingV2/ListenerProperties
### Properties
* **AlpnPolicy**: string[]
* **Certificates**: [Certificate](#certificate)[]
* **DefaultActions**: [Action](#action)[] (Required, WriteOnly)
* **ListenerArn**: string (ReadOnly)
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
* **ListenerArn**: string (Required)
* **Priority**: int (Required)
* **RuleArn**: string (ReadOnly)

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

