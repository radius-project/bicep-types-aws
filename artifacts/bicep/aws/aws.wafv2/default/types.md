# AWS.WAFv2 @ default

## Resource AWS.WAFv2/IPSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WAFv2/IPSetProperties](#awswafv2ipsetproperties) (Required, Identifier): properties of the resource

## Resource AWS.WAFv2/LoggingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WAFv2/LoggingConfigurationProperties](#awswafv2loggingconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.WAFv2/RegexPatternSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WAFv2/RegexPatternSetProperties](#awswafv2regexpatternsetproperties) (Required, Identifier): properties of the resource

## Resource AWS.WAFv2/RuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WAFv2/RuleGroupProperties](#awswafv2rulegroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.WAFv2/WebACL@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WAFv2/WebACLProperties](#awswafv2webaclproperties) (Required, Identifier): properties of the resource

## Resource AWS.WAFv2/WebACLAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WAFv2/WebACLAssociationProperties](#awswafv2webaclassociationproperties) (Required, Identifier): properties of the resource

## AllowAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## AllowAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## AndStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## AndStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## AssociationConfig
### Properties
* **RequestBody**: [RequestBody](#requestbody)

## AWS.WAFv2/IPSetProperties
### Properties
* **Addresses**: string[] (Required): List of IPAddresses.
* **Arn**: string (ReadOnly)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **IPAddressVersion**: string (Required)
* **Name**: string (Identifier)
* **Scope**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.WAFv2/LoggingConfigurationProperties
### Properties
* **LogDestinationConfigs**: string[] (Required): The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.
* **LoggingFilter**: [LoggingConfiguration_LoggingFilter](#loggingconfigurationloggingfilter): Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
* **ManagedByFirewallManager**: bool (ReadOnly): Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration.
* **RedactedFields**: [FieldToMatch](#fieldtomatch)[]: The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
* **ResourceArn**: string (Required, Identifier): The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.

## AWS.WAFv2/RegexPatternSetProperties
### Properties
* **Arn**: string (ReadOnly): ARN of the WAF entity.
* **Description**: string: Description of the entity.
* **Id**: string (ReadOnly, Identifier): Id of the RegexPatternSet
* **Name**: string (Identifier): Name of the RegexPatternSet.
* **RegularExpressionList**: string[] (Required)
* **Scope**: string (Required, Identifier): Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.
* **Tags**: [Tag](#tag)[]

## AWS.WAFv2/RuleGroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **AvailableLabels**: [LabelSummary](#labelsummary)[] (ReadOnly): Collection of Available Labels.
* **Capacity**: int (Required)
* **ConsumedLabels**: [LabelSummary](#labelsummary)[] (ReadOnly): Collection of Consumed Labels.
* **CustomResponseBodies**: [CustomResponseBodies](#customresponsebodies)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **LabelNamespace**: string (ReadOnly)
* **Name**: string (Identifier)
* **Rules**: [Rule](#rule)[]: Collection of Rules.
* **Scope**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## AWS.WAFv2/WebACLAssociationProperties
### Properties
* **ResourceArn**: string (Required, Identifier)
* **WebACLArn**: string (Required, Identifier)

## AWS.WAFv2/WebACLProperties
### Properties
* **Arn**: string (ReadOnly)
* **AssociationConfig**: [AssociationConfig](#associationconfig)
* **Capacity**: int (ReadOnly)
* **CaptchaConfig**: [CaptchaConfig](#captchaconfig)
* **ChallengeConfig**: [ChallengeConfig](#challengeconfig)
* **CustomResponseBodies**: [CustomResponseBodies](#customresponsebodies)
* **DefaultAction**: [DefaultAction](#defaultaction) (Required)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **LabelNamespace**: string (ReadOnly)
* **Name**: string (Identifier)
* **Rules**: [Rule](#rule)[]: Collection of Rules.
* **Scope**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]
* **TokenDomains**: string[]
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## AWSManagedRulesACFPRuleSet
### Properties
* **CreationPath**: string (Required)
* **EnableRegexInPath**: bool
* **RegistrationPagePath**: string (Required)
* **RequestInspection**: [RequestInspectionACFP](#requestinspectionacfp) (Required)
* **ResponseInspection**: [ResponseInspection](#responseinspection)

## AWSManagedRulesATPRuleSet
### Properties
* **EnableRegexInPath**: bool
* **LoginPath**: string (Required)
* **RequestInspection**: [RequestInspection](#requestinspection)
* **ResponseInspection**: [ResponseInspection](#responseinspection)

## AWSManagedRulesBotControlRuleSet
### Properties
* **EnableMachineLearning**: bool
* **InspectionLevel**: string (Required)

## BlockAction
### Properties
* **CustomResponse**: [CustomResponse](#customresponse)

## BlockAction
### Properties
* **CustomResponse**: [CustomResponse](#customresponse)

## Body
### Properties
* **OversizeHandling**: string

## Body
### Properties
* **OversizeHandling**: string

## ByteMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **PositionalConstraint**: string (Required)
* **SearchString**: string
* **SearchStringBase64**: string
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## ByteMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **PositionalConstraint**: string (Required)
* **SearchString**: string
* **SearchStringBase64**: string
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## CaptchaAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CaptchaAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CaptchaConfig
### Properties
* **ImmunityTimeProperty**: [ImmunityTimeProperty](#immunitytimeproperty)

## CaptchaConfig
### Properties
* **ImmunityTimeProperty**: [ImmunityTimeProperty](#immunitytimeproperty)

## ChallengeAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## ChallengeAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## ChallengeConfig
### Properties
* **ImmunityTimeProperty**: [ImmunityTimeProperty](#immunitytimeproperty)

## ChallengeConfig
### Properties
* **ImmunityTimeProperty**: [ImmunityTimeProperty](#immunitytimeproperty)

## Condition
### Properties
* **ActionCondition**: [LoggingConfiguration_ActionCondition](#loggingconfigurationactioncondition): A single action condition.
* **LabelNameCondition**: [LoggingConfiguration_LabelNameCondition](#loggingconfigurationlabelnamecondition): A single label name condition.

## CookieMatchPattern
### Properties
* **All**: [RuleGroup_All](#rulegroupall): Inspect all parts of the web request cookies.
* **ExcludedCookies**: string[]
* **IncludedCookies**: string[]

## CookieMatchPattern
### Properties
* **All**: [WebACL_All](#webaclall): Inspect all parts of the web request cookies.
* **ExcludedCookies**: string[]
* **IncludedCookies**: string[]

## Cookies
### Properties
* **MatchPattern**: [CookieMatchPattern](#cookiematchpattern) (Required)
* **MatchScope**: string (Required)
* **OversizeHandling**: string (Required)

## Cookies
### Properties
* **MatchPattern**: [CookieMatchPattern](#cookiematchpattern) (Required)
* **MatchScope**: string (Required)
* **OversizeHandling**: string (Required)

## CountAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CountAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CustomHTTPHeader
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

## CustomHTTPHeader
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

## CustomRequestHandling
### Properties
* **InsertHeaders**: [CustomHTTPHeader](#customhttpheader)[] (Required): Collection of HTTP headers.

## CustomRequestHandling
### Properties
* **InsertHeaders**: [CustomHTTPHeader](#customhttpheader)[] (Required): Collection of HTTP headers.

## CustomResponse
### Properties
* **CustomResponseBodyKey**: string: Custom response body key.
* **ResponseCode**: int (Required)
* **ResponseHeaders**: [CustomHTTPHeader](#customhttpheader)[]: Collection of HTTP headers.

## CustomResponse
### Properties
* **CustomResponseBodyKey**: string: Custom response body key.
* **ResponseCode**: int (Required)
* **ResponseHeaders**: [CustomHTTPHeader](#customhttpheader)[]: Collection of HTTP headers.

## CustomResponseBodies
### Properties

## CustomResponseBodies
### Properties

## DefaultAction
### Properties
* **Allow**: [AllowAction](#allowaction)
* **Block**: [BlockAction](#blockaction)

## ExcludedRule
### Properties
* **Name**: string (Required, Identifier)

## FieldIdentifier
### Properties
* **Identifier**: string (Required)

## FieldToMatch
### Properties
* **Method**: [LoggingConfiguration_Method](#loggingconfigurationmethod): Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. 
* **QueryString**: [LoggingConfiguration_QueryString](#loggingconfigurationquerystring): Inspect the query string. This is the part of a URL that appears after a ? character, if any. 
* **SingleHeader**: [LoggingConfiguration_SingleHeader](#loggingconfigurationsingleheader): Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
* **UriPath**: [LoggingConfiguration_UriPath](#loggingconfigurationuripath): Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg. 

## FieldToMatch
### Properties
* **AllQueryArguments**: [RuleGroup_AllQueryArguments](#rulegroupallqueryarguments): All query arguments of a web request.
* **Body**: [Body](#body)
* **Cookies**: [Cookies](#cookies)
* **Headers**: [Headers](#headers)
* **JA3Fingerprint**: [JA3Fingerprint](#ja3fingerprint)
* **JsonBody**: [JsonBody](#jsonbody)
* **Method**: [RuleGroup_Method](#rulegroupmethod): The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
* **QueryString**: [RuleGroup_QueryString](#rulegroupquerystring): The query string of a web request. This is the part of a URL that appears after a ? character, if any.
* **SingleHeader**: [RuleGroup_SingleHeader](#rulegroupsingleheader)
* **SingleQueryArgument**: [RuleGroup_SingleQueryArgument](#rulegroupsinglequeryargument): One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
* **UriPath**: [RuleGroup_UriPath](#rulegroupuripath): The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.

## FieldToMatch
### Properties
* **AllQueryArguments**: [WebACL_AllQueryArguments](#webaclallqueryarguments): All query arguments of a web request.
* **Body**: [Body](#body)
* **Cookies**: [Cookies](#cookies)
* **Headers**: [Headers](#headers)
* **JA3Fingerprint**: [JA3Fingerprint](#ja3fingerprint)
* **JsonBody**: [JsonBody](#jsonbody)
* **Method**: [WebACL_Method](#webaclmethod): The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
* **QueryString**: [WebACL_QueryString](#webaclquerystring): The query string of a web request. This is the part of a URL that appears after a ? character, if any.
* **SingleHeader**: [WebACL_SingleHeader](#webaclsingleheader)
* **SingleQueryArgument**: [WebACL_SingleQueryArgument](#webaclsinglequeryargument): One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
* **UriPath**: [WebACL_UriPath](#webacluripath): The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.

## Filter
### Properties
* **Behavior**: string (Required): How to handle logs that satisfy the filter's conditions and requirement. 
* **Conditions**: [Condition](#condition)[] (Required): Match conditions for the filter.
* **Requirement**: string (Required): Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

## ForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)

## ForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)

## GeoMatchStatement
### Properties
* **CountryCodes**: string[]
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)

## GeoMatchStatement
### Properties
* **CountryCodes**: string[]
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)

## HeaderMatchPattern
### Properties
* **All**: [RuleGroup_All](#rulegroupall): Inspect all parts of the web request headers.
* **ExcludedHeaders**: string[]
* **IncludedHeaders**: string[]

## HeaderMatchPattern
### Properties
* **All**: [WebACL_All](#webaclall): Inspect all parts of the web request headers.
* **ExcludedHeaders**: string[]
* **IncludedHeaders**: string[]

## Headers
### Properties
* **MatchPattern**: [HeaderMatchPattern](#headermatchpattern) (Required)
* **MatchScope**: string (Required)
* **OversizeHandling**: string (Required)

## Headers
### Properties
* **MatchPattern**: [HeaderMatchPattern](#headermatchpattern) (Required)
* **MatchScope**: string (Required)
* **OversizeHandling**: string (Required)

## ImmunityTimeProperty
### Properties
* **ImmunityTime**: int (Required)

## ImmunityTimeProperty
### Properties
* **ImmunityTime**: int (Required)

## IPSetForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)
* **Position**: string (Required)

## IPSetForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)
* **Position**: string (Required)

## IPSetReferenceStatement
### Properties
* **Arn**: string (Required)
* **IPSetForwardedIPConfig**: [IPSetForwardedIPConfiguration](#ipsetforwardedipconfiguration)

## IPSetReferenceStatement
### Properties
* **Arn**: string (Required)
* **IPSetForwardedIPConfig**: [IPSetForwardedIPConfiguration](#ipsetforwardedipconfiguration)

## JA3Fingerprint
### Properties
* **FallbackBehavior**: string (Required)

## JA3Fingerprint
### Properties
* **FallbackBehavior**: string (Required)

## JsonBody
### Properties
* **InvalidFallbackBehavior**: string
* **MatchPattern**: [JsonMatchPattern](#jsonmatchpattern) (Required)
* **MatchScope**: string (Required)
* **OversizeHandling**: string

## JsonBody
### Properties
* **InvalidFallbackBehavior**: string
* **MatchPattern**: [JsonMatchPattern](#jsonmatchpattern) (Required)
* **MatchScope**: string (Required)
* **OversizeHandling**: string

## JsonMatchPattern
### Properties
* **All**: [RuleGroup_All](#rulegroupall): Inspect all parts of the web request's JSON body.
* **IncludedPaths**: string[]

## JsonMatchPattern
### Properties
* **All**: [WebACL_All](#webaclall): Inspect all parts of the web request's JSON body.
* **IncludedPaths**: string[]

## Label
### Properties
* **Name**: string (Required, Identifier)

## Label
### Properties
* **Name**: string (Required, Identifier)

## LabelMatchStatement
### Properties
* **Key**: string (Required)
* **Scope**: string (Required, Identifier)

## LabelMatchStatement
### Properties
* **Key**: string (Required)
* **Scope**: string (Required, Identifier)

## LabelSummary
### Properties
* **Name**: string (Identifier)

## LoggingConfiguration_ActionCondition
### Properties
* **Action**: string (Required): Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

## LoggingConfiguration_LabelNameCondition
### Properties
* **LabelName**: string (Required): The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. 

## LoggingConfiguration_LoggingFilter
### Properties
* **DefaultBehavior**: string (Required): Default handling for logs that don't match any of the specified filtering conditions.
* **Filters**: [Filter](#filter)[] (Required): The filters that you want to apply to the logs.

## LoggingConfiguration_Method
### Properties

## LoggingConfiguration_QueryString
### Properties

## LoggingConfiguration_SingleHeader
### Properties
* **Name**: string (Required): The name of the query header to inspect.

## LoggingConfiguration_UriPath
### Properties

## ManagedRuleGroupConfig
### Properties
* **AWSManagedRulesACFPRuleSet**: [AWSManagedRulesACFPRuleSet](#awsmanagedrulesacfpruleset)
* **AWSManagedRulesATPRuleSet**: [AWSManagedRulesATPRuleSet](#awsmanagedrulesatpruleset)
* **AWSManagedRulesBotControlRuleSet**: [AWSManagedRulesBotControlRuleSet](#awsmanagedrulesbotcontrolruleset)
* **LoginPath**: string
* **PasswordField**: [FieldIdentifier](#fieldidentifier)
* **PayloadType**: string
* **UsernameField**: [FieldIdentifier](#fieldidentifier)

## ManagedRuleGroupStatement
### Properties
* **ExcludedRules**: [ExcludedRule](#excludedrule)[]
* **ManagedRuleGroupConfigs**: [ManagedRuleGroupConfig](#managedrulegroupconfig)[]: Collection of ManagedRuleGroupConfig.
* **Name**: string (Required, Identifier)
* **RuleActionOverrides**: [RuleActionOverride](#ruleactionoverride)[]: Action overrides for rules in the rule group.
* **ScopeDownStatement**: [Statement](#statement)
* **VendorName**: string (Required)
* **Version**: string

## NotStatement
### Properties
* **Statement**: [Statement](#statement) (Required)

## NotStatement
### Properties
* **Statement**: [Statement](#statement) (Required)

## OrStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## OrStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## OverrideAction
### Properties
* **Count**: [WebACL_Count](#webaclcount): Count traffic towards application.
* **None**: [WebACL_None](#webaclnone): Keep the RuleGroup or ManagedRuleGroup behavior as is.

## RateBasedStatement
### Properties
* **AggregateKeyType**: string (Required)
* **CustomKeys**: [RateBasedStatementCustomKey](#ratebasedstatementcustomkey)[]: Specifies the aggregate keys to use in a rate-base rule.
* **EvaluationWindowSec**: int
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)
* **Limit**: int (Required)
* **ScopeDownStatement**: [Statement](#statement)

## RateBasedStatement
### Properties
* **AggregateKeyType**: string (Required)
* **CustomKeys**: [RateBasedStatementCustomKey](#ratebasedstatementcustomkey)[]: Specifies the aggregate keys to use in a rate-base rule.
* **EvaluationWindowSec**: int
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)
* **Limit**: int (Required)
* **ScopeDownStatement**: [Statement](#statement)

## RateBasedStatementCustomKey
### Properties
* **Cookie**: [RateLimitCookie](#ratelimitcookie)
* **ForwardedIP**: [RateLimitForwardedIP](#ratelimitforwardedip)
* **Header**: [RateLimitHeader](#ratelimitheader)
* **HTTPMethod**: [RateLimitHTTPMethod](#ratelimithttpmethod)
* **IP**: [RateLimitIP](#ratelimitip)
* **LabelNamespace**: [RateLimitLabelNamespace](#ratelimitlabelnamespace)
* **QueryArgument**: [RateLimitQueryArgument](#ratelimitqueryargument)
* **QueryString**: [RateLimitQueryString](#ratelimitquerystring)
* **UriPath**: [RateLimitUriPath](#ratelimituripath)

## RateBasedStatementCustomKey
### Properties
* **Cookie**: [RateLimitCookie](#ratelimitcookie)
* **ForwardedIP**: [RateLimitForwardedIP](#ratelimitforwardedip)
* **Header**: [RateLimitHeader](#ratelimitheader)
* **HTTPMethod**: [RateLimitHTTPMethod](#ratelimithttpmethod)
* **IP**: [RateLimitIP](#ratelimitip)
* **LabelNamespace**: [RateLimitLabelNamespace](#ratelimitlabelnamespace)
* **QueryArgument**: [RateLimitQueryArgument](#ratelimitqueryargument)
* **QueryString**: [RateLimitQueryString](#ratelimitquerystring)
* **UriPath**: [RateLimitUriPath](#ratelimituripath)

## RateLimitCookie
### Properties
* **Name**: string (Required, Identifier): The name of the cookie to use.
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitCookie
### Properties
* **Name**: string (Required, Identifier): The name of the cookie to use.
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitForwardedIP
### Properties

## RateLimitForwardedIP
### Properties

## RateLimitHeader
### Properties
* **Name**: string (Required, Identifier): The name of the header to use.
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitHeader
### Properties
* **Name**: string (Required, Identifier): The name of the header to use.
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitHTTPMethod
### Properties

## RateLimitHTTPMethod
### Properties

## RateLimitIP
### Properties

## RateLimitIP
### Properties

## RateLimitLabelNamespace
### Properties
* **Namespace**: string (Required): The namespace to use for aggregation.

## RateLimitLabelNamespace
### Properties
* **Namespace**: string (Required): The namespace to use for aggregation.

## RateLimitQueryArgument
### Properties
* **Name**: string (Required, Identifier): The name of the query argument to use.
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitQueryArgument
### Properties
* **Name**: string (Required, Identifier): The name of the query argument to use.
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitQueryString
### Properties
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitQueryString
### Properties
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitUriPath
### Properties
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RateLimitUriPath
### Properties
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RegexMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **RegexString**: string (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RegexMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **RegexString**: string (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RegexPatternSetReferenceStatement
### Properties
* **Arn**: string (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RegexPatternSetReferenceStatement
### Properties
* **Arn**: string (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RequestBody
### Properties

## RequestInspection
### Properties
* **PasswordField**: [FieldIdentifier](#fieldidentifier) (Required)
* **PayloadType**: string (Required)
* **UsernameField**: [FieldIdentifier](#fieldidentifier) (Required)

## RequestInspectionACFP
### Properties
* **AddressFields**: [WebACL_AddressField](#webacladdressfield)[]
* **EmailField**: [FieldIdentifier](#fieldidentifier)
* **PasswordField**: [FieldIdentifier](#fieldidentifier)
* **PayloadType**: string (Required)
* **PhoneNumberFields**: [WebACL_PhoneNumberField](#webaclphonenumberfield)[]
* **UsernameField**: [FieldIdentifier](#fieldidentifier)

## ResponseInspection
### Properties
* **BodyContains**: [ResponseInspectionBodyContains](#responseinspectionbodycontains)
* **Header**: [ResponseInspectionHeader](#responseinspectionheader)
* **Json**: [ResponseInspectionJson](#responseinspectionjson)
* **StatusCode**: [ResponseInspectionStatusCode](#responseinspectionstatuscode)

## ResponseInspectionBodyContains
### Properties
* **FailureStrings**: string[] (Required)
* **SuccessStrings**: string[] (Required)

## ResponseInspectionHeader
### Properties
* **FailureValues**: string[] (Required)
* **Name**: string (Required, Identifier)
* **SuccessValues**: string[] (Required)

## ResponseInspectionJson
### Properties
* **FailureValues**: string[] (Required)
* **Identifier**: string (Required)
* **SuccessValues**: string[] (Required)

## ResponseInspectionStatusCode
### Properties
* **FailureCodes**: int[] (Required)
* **SuccessCodes**: int[] (Required)

## Rule
### Properties
* **Action**: [RuleAction](#ruleaction)
* **CaptchaConfig**: [CaptchaConfig](#captchaconfig)
* **ChallengeConfig**: [ChallengeConfig](#challengeconfig)
* **Name**: string (Required, Identifier)
* **Priority**: int (Required)
* **RuleLabels**: [Label](#label)[]: Collection of Rule Labels.
* **Statement**: [Statement](#statement) (Required)
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## Rule
### Properties
* **Action**: [RuleAction](#ruleaction)
* **CaptchaConfig**: [CaptchaConfig](#captchaconfig)
* **ChallengeConfig**: [ChallengeConfig](#challengeconfig)
* **Name**: string (Required, Identifier)
* **OverrideAction**: [OverrideAction](#overrideaction)
* **Priority**: int (Required)
* **RuleLabels**: [Label](#label)[]: Collection of Rule Labels.
* **Statement**: [Statement](#statement) (Required)
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## RuleAction
### Properties
* **Allow**: [AllowAction](#allowaction)
* **Block**: [BlockAction](#blockaction)
* **Captcha**: [CaptchaAction](#captchaaction)
* **Challenge**: [ChallengeAction](#challengeaction)
* **Count**: [CountAction](#countaction)

## RuleAction
### Properties
* **Allow**: [AllowAction](#allowaction)
* **Block**: [BlockAction](#blockaction)
* **Captcha**: [CaptchaAction](#captchaaction)
* **Challenge**: [ChallengeAction](#challengeaction)
* **Count**: [CountAction](#countaction)

## RuleActionOverride
### Properties
* **ActionToUse**: [RuleAction](#ruleaction) (Required)
* **Name**: string (Required, Identifier)

## RuleGroup_All
### Properties

## RuleGroup_All
### Properties

## RuleGroup_All
### Properties

## RuleGroup_AllQueryArguments
### Properties

## RuleGroup_Method
### Properties

## RuleGroup_QueryString
### Properties

## RuleGroup_SingleHeader
### Properties
* **Name**: string (Required, Identifier)

## RuleGroup_SingleQueryArgument
### Properties
* **Name**: string (Required, Identifier)

## RuleGroup_UriPath
### Properties

## RuleGroupReferenceStatement
### Properties
* **Arn**: string (Required)
* **ExcludedRules**: [ExcludedRule](#excludedrule)[]
* **RuleActionOverrides**: [RuleActionOverride](#ruleactionoverride)[]: Action overrides for rules in the rule group.

## SizeConstraintStatement
### Properties
* **ComparisonOperator**: string (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **Size**: int (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## SizeConstraintStatement
### Properties
* **ComparisonOperator**: string (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **Size**: int (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## SqliMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **SensitivityLevel**: string
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## SqliMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **SensitivityLevel**: string
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## Statement
### Properties
* **AndStatement**: [AndStatement](#andstatement)
* **ByteMatchStatement**: [ByteMatchStatement](#bytematchstatement)
* **GeoMatchStatement**: [GeoMatchStatement](#geomatchstatement)
* **IPSetReferenceStatement**: [IPSetReferenceStatement](#ipsetreferencestatement)
* **LabelMatchStatement**: [LabelMatchStatement](#labelmatchstatement)
* **NotStatement**: [NotStatement](#notstatement)
* **OrStatement**: [OrStatement](#orstatement)
* **RateBasedStatement**: [RateBasedStatement](#ratebasedstatement)
* **RegexMatchStatement**: [RegexMatchStatement](#regexmatchstatement)
* **RegexPatternSetReferenceStatement**: [RegexPatternSetReferenceStatement](#regexpatternsetreferencestatement)
* **SizeConstraintStatement**: [SizeConstraintStatement](#sizeconstraintstatement)
* **SqliMatchStatement**: [SqliMatchStatement](#sqlimatchstatement)
* **XssMatchStatement**: [XssMatchStatement](#xssmatchstatement)

## Statement
### Properties
* **AndStatement**: [AndStatement](#andstatement)
* **ByteMatchStatement**: [ByteMatchStatement](#bytematchstatement)
* **GeoMatchStatement**: [GeoMatchStatement](#geomatchstatement)
* **IPSetReferenceStatement**: [IPSetReferenceStatement](#ipsetreferencestatement)
* **LabelMatchStatement**: [LabelMatchStatement](#labelmatchstatement)
* **ManagedRuleGroupStatement**: [ManagedRuleGroupStatement](#managedrulegroupstatement)
* **NotStatement**: [NotStatement](#notstatement)
* **OrStatement**: [OrStatement](#orstatement)
* **RateBasedStatement**: [RateBasedStatement](#ratebasedstatement)
* **RegexMatchStatement**: [RegexMatchStatement](#regexmatchstatement)
* **RegexPatternSetReferenceStatement**: [RegexPatternSetReferenceStatement](#regexpatternsetreferencestatement)
* **RuleGroupReferenceStatement**: [RuleGroupReferenceStatement](#rulegroupreferencestatement)
* **SizeConstraintStatement**: [SizeConstraintStatement](#sizeconstraintstatement)
* **SqliMatchStatement**: [SqliMatchStatement](#sqlimatchstatement)
* **XssMatchStatement**: [XssMatchStatement](#xssmatchstatement)

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## TextTransformation
### Properties
* **Priority**: int (Required)
* **Type**: string (Required)

## TextTransformation
### Properties
* **Priority**: int (Required)
* **Type**: string (Required)

## VisibilityConfig
### Properties
* **CloudWatchMetricsEnabled**: bool (Required)
* **MetricName**: string (Required)
* **SampledRequestsEnabled**: bool (Required)

## VisibilityConfig
### Properties
* **CloudWatchMetricsEnabled**: bool (Required)
* **MetricName**: string (Required)
* **SampledRequestsEnabled**: bool (Required)

## WebACL_AddressField
### Properties

## WebACL_All
### Properties

## WebACL_All
### Properties

## WebACL_All
### Properties

## WebACL_AllQueryArguments
### Properties

## WebACL_Count
### Properties

## WebACL_Method
### Properties

## WebACL_None
### Properties

## WebACL_PhoneNumberField
### Properties

## WebACL_QueryString
### Properties

## WebACL_SingleHeader
### Properties
* **Name**: string (Required, Identifier)

## WebACL_SingleQueryArgument
### Properties
* **Name**: string (Required, Identifier)

## WebACL_UriPath
### Properties

## XssMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## XssMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

