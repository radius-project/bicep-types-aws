# AWS.WAFv2 @ default

## Resource AWS.WAFv2/IPSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.WAFv2/IPSetProperties](#awswafv2ipsetproperties) (Required): properties of the resource

## Resource AWS.WAFv2/LoggingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.WAFv2/LoggingConfigurationProperties](#awswafv2loggingconfigurationproperties) (Required): properties of the resource

## Resource AWS.WAFv2/RegexPatternSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.WAFv2/RegexPatternSetProperties](#awswafv2regexpatternsetproperties) (Required): properties of the resource

## Resource AWS.WAFv2/RuleGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.WAFv2/RuleGroupProperties](#awswafv2rulegroupproperties) (Required): properties of the resource

## Resource AWS.WAFv2/WebACL@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.WAFv2/WebACLProperties](#awswafv2webaclproperties) (Required): properties of the resource

## Resource AWS.WAFv2/WebACLAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.WAFv2/WebACLAssociationProperties](#awswafv2webaclassociationproperties) (Required): properties of the resource

## AWS.WAFv2/IPSetProperties
### Properties
* **Addresses**: [IPAddress](#ipaddress)[] (Required): List of IPAddresses.
* **Arn**: [ResourceArn](#resourcearn) (ReadOnly)
* **Description**: [EntityDescription](#entitydescription)
* **Id**: [EntityId](#entityid) (ReadOnly)
* **IPAddressVersion**: [IPAddressVersion](#ipaddressversion) (Required)
* **Name**: [EntityName](#entityname)
* **Scope**: [Scope](#scope) (Required)
* **Tags**: [Tag](#tag)[]

## IPAddress
### Properties

## ResourceArn
### Properties

## EntityDescription
### Properties

## EntityId
### Properties

## IPAddressVersion
### Properties

## EntityName
### Properties

## Scope
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.WAFv2/LoggingConfigurationProperties
### Properties
* **LogDestinationConfigs**: string[] (Required): The Amazon Resource Names (ARNs) of the logging destinations that you want to associate with the web ACL.
* **LoggingFilter**: [LoggingConfiguration_LoggingFilter](#loggingconfigurationloggingfilter): Filtering that specifies which web requests are kept in the logs and which are dropped. You can filter on the rule action and on the web request labels that were applied by matching rules during web ACL evaluation.
* **ManagedByFirewallManager**: bool (ReadOnly): Indicates whether the logging configuration was created by AWS Firewall Manager, as part of an AWS WAF policy configuration. If true, only Firewall Manager can modify or delete the configuration.
* **RedactedFields**: [FieldToMatch](#fieldtomatch)[]: The parts of the request that you want to keep out of the logs. For example, if you redact the HEADER field, the HEADER field in the firehose will be xxx.
* **ResourceArn**: string (Required): The Amazon Resource Name (ARN) of the web ACL that you want to associate with LogDestinationConfigs.

## LoggingConfiguration_LoggingFilter
### Properties
* **DefaultBehavior**: string (Required): Default handling for logs that don't match any of the specified filtering conditions.
* **Filters**: [Filter](#filter)[] (Required): The filters that you want to apply to the logs.

## Filter
### Properties
* **Behavior**: string (Required): How to handle logs that satisfy the filter's conditions and requirement. 
* **Conditions**: [Condition](#condition)[] (Required): Match conditions for the filter.
* **Requirement**: string (Required): Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

## Condition
### Properties
* **ActionCondition**: [LoggingConfiguration_ActionCondition](#loggingconfigurationactioncondition): A single action condition.
* **LabelNameCondition**: [LoggingConfiguration_LabelNameCondition](#loggingconfigurationlabelnamecondition): A single label name condition.

## LoggingConfiguration_ActionCondition
### Properties
* **Action**: string (Required): Logic to apply to the filtering conditions. You can specify that, in order to satisfy the filter, a log must match all conditions or must match at least one condition.

## LoggingConfiguration_LabelNameCondition
### Properties
* **LabelName**: string (Required): The label name that a log record must contain in order to meet the condition. This must be a fully qualified label name. Fully qualified labels have a prefix, optional namespaces, and label name. The prefix identifies the rule group or web ACL context of the rule that added the label. 

## FieldToMatch
### Properties
* **JsonBody**: [LoggingConfiguration_JsonBody](#loggingconfigurationjsonbody): Inspect the request body as JSON. The request body immediately follows the request headers. This is the part of a request that contains any additional data that you want to send to your web server as the HTTP request body, such as data from a form. 
* **Method**: [LoggingConfiguration_Method](#loggingconfigurationmethod): Inspect the HTTP method. The method indicates the type of operation that the request is asking the origin to perform. 
* **QueryString**: [LoggingConfiguration_QueryString](#loggingconfigurationquerystring): Inspect the query string. This is the part of a URL that appears after a ? character, if any. 
* **SingleHeader**: [LoggingConfiguration_SingleHeader](#loggingconfigurationsingleheader): Inspect a single header. Provide the name of the header to inspect, for example, User-Agent or Referer. This setting isn't case sensitive.
* **UriPath**: [LoggingConfiguration_UriPath](#loggingconfigurationuripath): Inspect the request URI path. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg. 

## LoggingConfiguration_JsonBody
### Properties
* **InvalidFallbackBehavior**: string: What AWS WAF should do if it fails to completely parse the JSON body.
* **MatchPattern**: [LoggingConfiguration_JsonBody_MatchPattern](#loggingconfigurationjsonbodymatchpattern) (Required): The patterns to look for in the JSON body. AWS WAF inspects the results of these pattern matches against the rule inspection criteria. 
* **MatchScope**: string (Required): The parts of the JSON to match against using the MatchPattern. If you specify All, AWS WAF matches against keys and values. 

## LoggingConfiguration_JsonBody_MatchPattern
### Properties
* **All**: [LoggingConfiguration_JsonBody_MatchPattern_All](#loggingconfigurationjsonbodymatchpatternall): Match all of the elements. See also MatchScope in JsonBody. You must specify either this setting or the IncludedPaths setting, but not both.
* **IncludedPaths**: string[]: Match only the specified include paths. See also MatchScope in JsonBody.

## LoggingConfiguration_JsonBody_MatchPattern_All
### Properties

## LoggingConfiguration_Method
### Properties

## LoggingConfiguration_QueryString
### Properties

## LoggingConfiguration_SingleHeader
### Properties
* **Name**: string (Required): The name of the query header to inspect.

## LoggingConfiguration_UriPath
### Properties

## AWS.WAFv2/RegexPatternSetProperties
### Properties
* **Arn**: string (ReadOnly): ARN of the WAF entity.
* **Description**: string: Description of the entity.
* **Id**: string (ReadOnly): Id of the RegexPatternSet
* **Name**: string: Name of the RegexPatternSet.
* **RegularExpressionList**: string[] (Required)
* **Scope**: string (Required): Use CLOUDFRONT for CloudFront RegexPatternSet, use REGIONAL for Application Load Balancer and API Gateway.
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.WAFv2/RuleGroupProperties
### Properties
* **Arn**: [ResourceArn](#resourcearn) (ReadOnly)
* **AvailableLabels**: [LabelSummary](#labelsummary)[] (ReadOnly): Collection of Available Labels.
* **Capacity**: int (Required)
* **ConsumedLabels**: [LabelSummary](#labelsummary)[] (ReadOnly): Collection of Consumed Labels.
* **CustomResponseBodies**: [CustomResponseBodies](#customresponsebodies)
* **Description**: [EntityDescription](#entitydescription)
* **Id**: [EntityId](#entityid) (ReadOnly)
* **LabelNamespace**: [LabelName](#labelname) (ReadOnly)
* **Name**: [EntityName](#entityname)
* **Rules**: [Rule](#rule)[]: Collection of Rules.
* **Scope**: [Scope](#scope) (Required)
* **Tags**: [Tag](#tag)[]
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## ResourceArn
### Properties

## LabelSummary
### Properties
* **Name**: [LabelName](#labelname)

## LabelName
### Properties

## CustomResponseBodies
### Properties

## EntityDescription
### Properties

## EntityId
### Properties

## EntityName
### Properties

## Rule
### Properties
* **Action**: [RuleAction](#ruleaction)
* **CaptchaConfig**: [CaptchaConfig](#captchaconfig)
* **Name**: [EntityName](#entityname) (Required)
* **Priority**: [RulePriority](#rulepriority) (Required)
* **RuleLabels**: [Label](#label)[]: Collection of Rule Labels.
* **Statement**: [Statement](#statement) (Required)
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## RuleAction
### Properties
* **Allow**: [RuleGroup_Allow](#rulegroupallow): Allow traffic towards application.
* **Block**: [RuleGroup_Block](#rulegroupblock): Block traffic towards application.
* **Captcha**: [RuleGroup_Captcha](#rulegroupcaptcha): Checks valid token exists with request.
* **Count**: [RuleGroup_Count](#rulegroupcount): Count traffic towards application.

## RuleGroup_Allow
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CustomRequestHandling
### Properties
* **InsertHeaders**: [CustomHTTPHeader](#customhttpheader)[] (Required): Collection of HTTP headers.

## CustomHTTPHeader
### Properties
* **Name**: [CustomHTTPHeaderName](#customhttpheadername) (Required)
* **Value**: [CustomHTTPHeaderValue](#customhttpheadervalue) (Required)

## CustomHTTPHeaderName
### Properties

## CustomHTTPHeaderValue
### Properties

## RuleGroup_Block
### Properties
* **CustomResponse**: [CustomResponse](#customresponse)

## CustomResponse
### Properties
* **CustomResponseBodyKey**: string: Custom response body key.
* **ResponseCode**: [ResponseStatusCode](#responsestatuscode) (Required)
* **ResponseHeaders**: [CustomHTTPHeader](#customhttpheader)[]: Collection of HTTP headers.

## ResponseStatusCode
### Properties

## RuleGroup_Captcha
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## RuleGroup_Count
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CaptchaConfig
### Properties
* **ImmunityTimeProperty**: [ImmunityTimeProperty](#immunitytimeproperty)

## ImmunityTimeProperty
### Properties
* **ImmunityTime**: int (Required)

## RulePriority
### Properties

## Label
### Properties
* **Name**: [LabelName](#labelname) (Required)

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

## AndStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## ByteMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **PositionalConstraint**: [PositionalConstraint](#positionalconstraint) (Required)
* **SearchString**: [SearchString](#searchstring)
* **SearchStringBase64**: [SearchStringBase64](#searchstringbase64)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## FieldToMatch
### Properties
* **AllQueryArguments**: [RuleGroup_AllQueryArguments](#rulegroupallqueryarguments): All query arguments of a web request.
* **Body**: [Body](#body)
* **Cookies**: [Cookies](#cookies)
* **Headers**: [Headers](#headers)
* **JsonBody**: [JsonBody](#jsonbody)
* **Method**: [RuleGroup_Method](#rulegroupmethod): The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
* **QueryString**: [RuleGroup_QueryString](#rulegroupquerystring): The query string of a web request. This is the part of a URL that appears after a ? character, if any.
* **SingleHeader**: [RuleGroup_SingleHeader](#rulegroupsingleheader)
* **SingleQueryArgument**: [RuleGroup_SingleQueryArgument](#rulegroupsinglequeryargument): One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
* **UriPath**: [RuleGroup_UriPath](#rulegroupuripath): The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.

## RuleGroup_AllQueryArguments
### Properties

## Body
### Properties
* **OversizeHandling**: [OversizeHandling](#oversizehandling)

## OversizeHandling
### Properties

## Cookies
### Properties
* **MatchPattern**: [CookieMatchPattern](#cookiematchpattern) (Required)
* **MatchScope**: [MapMatchScope](#mapmatchscope) (Required)
* **OversizeHandling**: [OversizeHandling](#oversizehandling) (Required)

## CookieMatchPattern
### Properties
* **All**: [RuleGroup_All](#rulegroupall): Inspect all parts of the web request cookies.
* **ExcludedCookies**: string[]
* **IncludedCookies**: string[]

## RuleGroup_All
### Properties

## MapMatchScope
### Properties

## Headers
### Properties
* **MatchPattern**: [HeaderMatchPattern](#headermatchpattern) (Required)
* **MatchScope**: [MapMatchScope](#mapmatchscope) (Required)
* **OversizeHandling**: [OversizeHandling](#oversizehandling) (Required)

## HeaderMatchPattern
### Properties
* **All**: [RuleGroup_All](#rulegroupall): Inspect all parts of the web request headers.
* **ExcludedHeaders**: string[]
* **IncludedHeaders**: string[]

## RuleGroup_All
### Properties

## JsonBody
### Properties
* **InvalidFallbackBehavior**: [BodyParsingFallbackBehavior](#bodyparsingfallbackbehavior)
* **MatchPattern**: [JsonMatchPattern](#jsonmatchpattern) (Required)
* **MatchScope**: [JsonMatchScope](#jsonmatchscope) (Required)
* **OversizeHandling**: [OversizeHandling](#oversizehandling)

## BodyParsingFallbackBehavior
### Properties

## JsonMatchPattern
### Properties
* **All**: [RuleGroup_All](#rulegroupall): Inspect all parts of the web request's JSON body.
* **IncludedPaths**: [JsonPointerPath](#jsonpointerpath)[]

## RuleGroup_All
### Properties

## JsonPointerPath
### Properties

## JsonMatchScope
### Properties

## RuleGroup_Method
### Properties

## RuleGroup_QueryString
### Properties

## RuleGroup_SingleHeader
### Properties
* **Name**: string (Required)

## RuleGroup_SingleQueryArgument
### Properties
* **Name**: string (Required)

## RuleGroup_UriPath
### Properties

## PositionalConstraint
### Properties

## SearchString
### Properties

## SearchStringBase64
### Properties

## TextTransformation
### Properties
* **Priority**: [TextTransformationPriority](#texttransformationpriority) (Required)
* **Type**: [TextTransformationType](#texttransformationtype) (Required)

## TextTransformationPriority
### Properties

## TextTransformationType
### Properties

## GeoMatchStatement
### Properties
* **CountryCodes**: string[]
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)

## ForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)

## IPSetReferenceStatement
### Properties
* **Arn**: [ResourceArn](#resourcearn) (Required)
* **IPSetForwardedIPConfig**: [IPSetForwardedIPConfiguration](#ipsetforwardedipconfiguration)

## IPSetForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)
* **Position**: string (Required)

## LabelMatchStatement
### Properties
* **Key**: [LabelMatchKey](#labelmatchkey) (Required)
* **Scope**: [LabelMatchScope](#labelmatchscope) (Required)

## LabelMatchKey
### Properties

## LabelMatchScope
### Properties

## NotStatement
### Properties
* **Statement**: [Statement](#statement) (Required)

## OrStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## RateBasedStatement
### Properties
* **AggregateKeyType**: string (Required)
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)
* **Limit**: [RateLimit](#ratelimit) (Required)
* **ScopeDownStatement**: [Statement](#statement)

## RateLimit
### Properties

## RegexMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **RegexString**: string (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RegexPatternSetReferenceStatement
### Properties
* **Arn**: [ResourceArn](#resourcearn) (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
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
* **SensitivityLevel**: [SensitivityLevel](#sensitivitylevel)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## SensitivityLevel
### Properties

## XssMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## VisibilityConfig
### Properties
* **CloudWatchMetricsEnabled**: bool (Required)
* **MetricName**: string (Required)
* **SampledRequestsEnabled**: bool (Required)

## Scope
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.WAFv2/WebACLProperties
### Properties
* **Arn**: [ResourceArn](#resourcearn) (ReadOnly)
* **Capacity**: int (ReadOnly)
* **CaptchaConfig**: [CaptchaConfig](#captchaconfig)
* **CustomResponseBodies**: [CustomResponseBodies](#customresponsebodies)
* **DefaultAction**: [DefaultAction](#defaultaction) (Required)
* **Description**: [EntityDescription](#entitydescription)
* **Id**: [EntityId](#entityid) (ReadOnly)
* **LabelNamespace**: [LabelName](#labelname) (ReadOnly)
* **Name**: [EntityName](#entityname)
* **Rules**: [Rule](#rule)[]: Collection of Rules.
* **Scope**: [Scope](#scope) (Required)
* **Tags**: [Tag](#tag)[]
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## ResourceArn
### Properties

## CaptchaConfig
### Properties
* **ImmunityTimeProperty**: [ImmunityTimeProperty](#immunitytimeproperty)

## ImmunityTimeProperty
### Properties
* **ImmunityTime**: int (Required)

## CustomResponseBodies
### Properties

## DefaultAction
### Properties
* **Allow**: [AllowAction](#allowaction)
* **Block**: [BlockAction](#blockaction)

## AllowAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CustomRequestHandling
### Properties
* **InsertHeaders**: [CustomHTTPHeader](#customhttpheader)[] (Required): Collection of HTTP headers.

## CustomHTTPHeader
### Properties
* **Name**: [CustomHTTPHeaderName](#customhttpheadername) (Required)
* **Value**: [CustomHTTPHeaderValue](#customhttpheadervalue) (Required)

## CustomHTTPHeaderName
### Properties

## CustomHTTPHeaderValue
### Properties

## BlockAction
### Properties
* **CustomResponse**: [CustomResponse](#customresponse)

## CustomResponse
### Properties
* **CustomResponseBodyKey**: string: Custom response body key.
* **ResponseCode**: [ResponseStatusCode](#responsestatuscode) (Required)
* **ResponseHeaders**: [CustomHTTPHeader](#customhttpheader)[]: Collection of HTTP headers.

## ResponseStatusCode
### Properties

## EntityDescription
### Properties

## EntityId
### Properties

## LabelName
### Properties

## EntityName
### Properties

## Rule
### Properties
* **Action**: [RuleAction](#ruleaction)
* **CaptchaConfig**: [CaptchaConfig](#captchaconfig)
* **Name**: [EntityName](#entityname) (Required)
* **OverrideAction**: [OverrideAction](#overrideaction)
* **Priority**: [RulePriority](#rulepriority) (Required)
* **RuleLabels**: [Label](#label)[]: Collection of Rule Labels.
* **Statement**: [Statement](#statement) (Required)
* **VisibilityConfig**: [VisibilityConfig](#visibilityconfig) (Required)

## RuleAction
### Properties
* **Allow**: [AllowAction](#allowaction)
* **Block**: [BlockAction](#blockaction)
* **Captcha**: [CaptchaAction](#captchaaction)
* **Count**: [CountAction](#countaction)

## CaptchaAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## CountAction
### Properties
* **CustomRequestHandling**: [CustomRequestHandling](#customrequesthandling)

## OverrideAction
### Properties
* **Count**: [WebACL_Count](#webaclcount): Count traffic towards application.
* **None**: [WebACL_None](#webaclnone): Keep the RuleGroup or ManagedRuleGroup behavior as is.

## WebACL_Count
### Properties

## WebACL_None
### Properties

## RulePriority
### Properties

## Label
### Properties
* **Name**: [LabelName](#labelname) (Required)

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

## AndStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## ByteMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **PositionalConstraint**: [PositionalConstraint](#positionalconstraint) (Required)
* **SearchString**: [SearchString](#searchstring)
* **SearchStringBase64**: [SearchStringBase64](#searchstringbase64)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## FieldToMatch
### Properties
* **AllQueryArguments**: [WebACL_AllQueryArguments](#webaclallqueryarguments): All query arguments of a web request.
* **Body**: [Body](#body)
* **Cookies**: [Cookies](#cookies)
* **Headers**: [Headers](#headers)
* **JsonBody**: [JsonBody](#jsonbody)
* **Method**: [WebACL_Method](#webaclmethod): The HTTP method of a web request. The method indicates the type of operation that the request is asking the origin to perform.
* **QueryString**: [WebACL_QueryString](#webaclquerystring): The query string of a web request. This is the part of a URL that appears after a ? character, if any.
* **SingleHeader**: [WebACL_SingleHeader](#webaclsingleheader)
* **SingleQueryArgument**: [WebACL_SingleQueryArgument](#webaclsinglequeryargument): One query argument in a web request, identified by name, for example UserName or SalesRegion. The name can be up to 30 characters long and isn't case sensitive.
* **UriPath**: [WebACL_UriPath](#webacluripath): The path component of the URI of a web request. This is the part of a web request that identifies a resource, for example, /images/daily-ad.jpg.

## WebACL_AllQueryArguments
### Properties

## Body
### Properties
* **OversizeHandling**: [OversizeHandling](#oversizehandling)

## OversizeHandling
### Properties

## Cookies
### Properties
* **MatchPattern**: [CookieMatchPattern](#cookiematchpattern) (Required)
* **MatchScope**: [MapMatchScope](#mapmatchscope) (Required)
* **OversizeHandling**: [OversizeHandling](#oversizehandling) (Required)

## CookieMatchPattern
### Properties
* **All**: [WebACL_All](#webaclall): Inspect all parts of the web request cookies.
* **ExcludedCookies**: string[]
* **IncludedCookies**: string[]

## WebACL_All
### Properties

## MapMatchScope
### Properties

## Headers
### Properties
* **MatchPattern**: [HeaderMatchPattern](#headermatchpattern) (Required)
* **MatchScope**: [MapMatchScope](#mapmatchscope) (Required)
* **OversizeHandling**: [OversizeHandling](#oversizehandling) (Required)

## HeaderMatchPattern
### Properties
* **All**: [WebACL_All](#webaclall): Inspect all parts of the web request headers.
* **ExcludedHeaders**: string[]
* **IncludedHeaders**: string[]

## WebACL_All
### Properties

## JsonBody
### Properties
* **InvalidFallbackBehavior**: [BodyParsingFallbackBehavior](#bodyparsingfallbackbehavior)
* **MatchPattern**: [JsonMatchPattern](#jsonmatchpattern) (Required)
* **MatchScope**: [JsonMatchScope](#jsonmatchscope) (Required)
* **OversizeHandling**: [OversizeHandling](#oversizehandling)

## BodyParsingFallbackBehavior
### Properties

## JsonMatchPattern
### Properties
* **All**: [WebACL_All](#webaclall): Inspect all parts of the web request's JSON body.
* **IncludedPaths**: [JsonPointerPath](#jsonpointerpath)[]

## WebACL_All
### Properties

## JsonPointerPath
### Properties

## JsonMatchScope
### Properties

## WebACL_Method
### Properties

## WebACL_QueryString
### Properties

## WebACL_SingleHeader
### Properties
* **Name**: string (Required)

## WebACL_SingleQueryArgument
### Properties
* **Name**: string (Required)

## WebACL_UriPath
### Properties

## PositionalConstraint
### Properties

## SearchString
### Properties

## SearchStringBase64
### Properties

## TextTransformation
### Properties
* **Priority**: [TextTransformationPriority](#texttransformationpriority) (Required)
* **Type**: [TextTransformationType](#texttransformationtype) (Required)

## TextTransformationPriority
### Properties

## TextTransformationType
### Properties

## GeoMatchStatement
### Properties
* **CountryCodes**: string[]
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)

## ForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)

## IPSetReferenceStatement
### Properties
* **Arn**: [ResourceArn](#resourcearn) (Required)
* **IPSetForwardedIPConfig**: [IPSetForwardedIPConfiguration](#ipsetforwardedipconfiguration)

## IPSetForwardedIPConfiguration
### Properties
* **FallbackBehavior**: string (Required)
* **HeaderName**: string (Required)
* **Position**: string (Required)

## LabelMatchStatement
### Properties
* **Key**: [LabelMatchKey](#labelmatchkey) (Required)
* **Scope**: [LabelMatchScope](#labelmatchscope) (Required)

## LabelMatchKey
### Properties

## LabelMatchScope
### Properties

## ManagedRuleGroupStatement
### Properties
* **ExcludedRules**: [ExcludedRule](#excludedrule)[]
* **ManagedRuleGroupConfigs**: [ManagedRuleGroupConfig](#managedrulegroupconfig)[]: Collection of ManagedRuleGroupConfig.
* **Name**: [EntityName](#entityname) (Required)
* **ScopeDownStatement**: [Statement](#statement)
* **VendorName**: string (Required)
* **Version**: string

## ExcludedRule
### Properties
* **Name**: [EntityName](#entityname) (Required)

## ManagedRuleGroupConfig
### Properties
* **LoginPath**: string
* **PasswordField**: [FieldIdentifier](#fieldidentifier)
* **PayloadType**: string
* **UsernameField**: [FieldIdentifier](#fieldidentifier)

## FieldIdentifier
### Properties
* **Identifier**: string (Required)

## NotStatement
### Properties
* **Statement**: [Statement](#statement) (Required)

## OrStatement
### Properties
* **Statements**: [Statement](#statement)[] (Required)

## RateBasedStatement
### Properties
* **AggregateKeyType**: string (Required)
* **ForwardedIPConfig**: [ForwardedIPConfiguration](#forwardedipconfiguration)
* **Limit**: [RateLimit](#ratelimit) (Required)
* **ScopeDownStatement**: [Statement](#statement)

## RateLimit
### Properties

## RegexMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **RegexString**: string (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RegexPatternSetReferenceStatement
### Properties
* **Arn**: [ResourceArn](#resourcearn) (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## RuleGroupReferenceStatement
### Properties
* **Arn**: [ResourceArn](#resourcearn) (Required)
* **ExcludedRules**: [ExcludedRule](#excludedrule)[]

## SizeConstraintStatement
### Properties
* **ComparisonOperator**: string (Required)
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **Size**: int (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## SqliMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **SensitivityLevel**: [SensitivityLevel](#sensitivitylevel)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## SensitivityLevel
### Properties

## XssMatchStatement
### Properties
* **FieldToMatch**: [FieldToMatch](#fieldtomatch) (Required)
* **TextTransformations**: [TextTransformation](#texttransformation)[] (Required)

## VisibilityConfig
### Properties
* **CloudWatchMetricsEnabled**: bool (Required)
* **MetricName**: string (Required)
* **SampledRequestsEnabled**: bool (Required)

## Scope
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.WAFv2/WebACLAssociationProperties
### Properties
* **ResourceArn**: [ResourceArn](#resourcearn) (Required)
* **WebACLArn**: [ResourceArn](#resourcearn) (Required)

## ResourceArn
### Properties

