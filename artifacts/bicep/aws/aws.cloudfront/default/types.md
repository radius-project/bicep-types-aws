# AWS.CloudFront @ default

## Resource AWS.CloudFront/CachePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/CachePolicyProperties](#awscloudfrontcachepolicyproperties) (Required): properties of the resource

## Resource AWS.CloudFront/CloudFrontOriginAccessIdentity@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/CloudFrontOriginAccessIdentityProperties](#awscloudfrontcloudfrontoriginaccessidentityproperties) (Required): properties of the resource

## Resource AWS.CloudFront/ContinuousDeploymentPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/ContinuousDeploymentPolicyProperties](#awscloudfrontcontinuousdeploymentpolicyproperties) (Required): properties of the resource

## Resource AWS.CloudFront/Distribution@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/DistributionProperties](#awscloudfrontdistributionproperties) (Required): properties of the resource

## Resource AWS.CloudFront/Function@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/FunctionProperties](#awscloudfrontfunctionproperties) (Required): properties of the resource

## Resource AWS.CloudFront/KeyGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/KeyGroupProperties](#awscloudfrontkeygroupproperties) (Required): properties of the resource

## Resource AWS.CloudFront/KeyValueStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/KeyValueStoreProperties](#awscloudfrontkeyvaluestoreproperties) (Required): properties of the resource

## Resource AWS.CloudFront/OriginAccessControl@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/OriginAccessControlProperties](#awscloudfrontoriginaccesscontrolproperties) (Required): properties of the resource

## Resource AWS.CloudFront/OriginRequestPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/OriginRequestPolicyProperties](#awscloudfrontoriginrequestpolicyproperties) (Required): properties of the resource

## Resource AWS.CloudFront/PublicKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/PublicKeyProperties](#awscloudfrontpublickeyproperties) (Required): properties of the resource

## Resource AWS.CloudFront/RealtimeLogConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/RealtimeLogConfigProperties](#awscloudfrontrealtimelogconfigproperties) (Required): properties of the resource

## Resource AWS.CloudFront/ResponseHeadersPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/ResponseHeadersPolicyProperties](#awscloudfrontresponseheaderspolicyproperties) (Required): properties of the resource

## AWS.CloudFront/CachePolicyProperties
### Properties
* **CachePolicyConfig**: [CachePolicyConfig](#cachepolicyconfig) (Required)
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)

## CachePolicyConfig
### Properties
* **Comment**: string
* **DefaultTTL**: int (Required)
* **MaxTTL**: int (Required)
* **MinTTL**: int (Required)
* **Name**: string (Required)
* **ParametersInCacheKeyAndForwardedToOrigin**: [ParametersInCacheKeyAndForwardedToOrigin](#parametersincachekeyandforwardedtoorigin) (Required)

## ParametersInCacheKeyAndForwardedToOrigin
### Properties
* **CookiesConfig**: [CookiesConfig](#cookiesconfig) (Required)
* **EnableAcceptEncodingBrotli**: bool
* **EnableAcceptEncodingGzip**: bool (Required)
* **HeadersConfig**: [HeadersConfig](#headersconfig) (Required)
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig) (Required)

## CookiesConfig
### Properties
* **CookieBehavior**: string (Required)
* **Cookies**: string[]

## HeadersConfig
### Properties
* **HeaderBehavior**: string (Required)
* **Headers**: string[]

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string (Required)
* **QueryStrings**: string[]

## AWS.CloudFront/CloudFrontOriginAccessIdentityProperties
### Properties
* **CloudFrontOriginAccessIdentityConfig**: [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig) (Required)
* **Id**: string (ReadOnly, Identifier)
* **S3CanonicalUserId**: string (ReadOnly)

## CloudFrontOriginAccessIdentityConfig
### Properties
* **Comment**: string (Required)

## AWS.CloudFront/ContinuousDeploymentPolicyProperties
### Properties
* **ContinuousDeploymentPolicyConfig**: [ContinuousDeploymentPolicyConfig](#continuousdeploymentpolicyconfig) (Required)
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)

## ContinuousDeploymentPolicyConfig
### Properties
* **Enabled**: bool (Required)
* **SingleHeaderPolicyConfig**: [ContinuousDeploymentPolicy_SingleHeaderPolicyConfig](#continuousdeploymentpolicysingleheaderpolicyconfig)
* **SingleWeightPolicyConfig**: [ContinuousDeploymentPolicy_SingleWeightPolicyConfig](#continuousdeploymentpolicysingleweightpolicyconfig)
* **StagingDistributionDnsNames**: string[] (Required)
* **TrafficConfig**: [TrafficConfig](#trafficconfig)
* **Type**: string

## ContinuousDeploymentPolicy_SingleHeaderPolicyConfig
### Properties
* **Header**: string (Required)
* **Value**: string (Required)

## ContinuousDeploymentPolicy_SingleWeightPolicyConfig
### Properties
* **SessionStickinessConfig**: [SessionStickinessConfig](#sessionstickinessconfig)
* **Weight**: int (Required)

## SessionStickinessConfig
### Properties
* **IdleTTL**: int (Required)
* **MaximumTTL**: int (Required)

## TrafficConfig
### Properties
* **SingleHeaderConfig**: [SingleHeaderConfig](#singleheaderconfig)
* **SingleWeightConfig**: [SingleWeightConfig](#singleweightconfig)
* **Type**: string (Required)

## SingleHeaderConfig
### Properties
* **Header**: string (Required)
* **Value**: string (Required)

## SingleWeightConfig
### Properties
* **SessionStickinessConfig**: [SessionStickinessConfig](#sessionstickinessconfig)
* **Weight**: int (Required)

## AWS.CloudFront/DistributionProperties
### Properties
* **DistributionConfig**: [DistributionConfig](#distributionconfig) (Required)
* **DomainName**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]

## DistributionConfig
### Properties
* **Aliases**: string[]
* **CacheBehaviors**: [CacheBehavior](#cachebehavior)[]
* **CNAMEs**: string[]
* **Comment**: string
* **ContinuousDeploymentPolicyId**: string
* **CustomErrorResponses**: [CustomErrorResponse](#customerrorresponse)[]
* **CustomOrigin**: [LegacyCustomOrigin](#legacycustomorigin)
* **DefaultCacheBehavior**: [DefaultCacheBehavior](#defaultcachebehavior) (Required)
* **DefaultRootObject**: string
* **Enabled**: bool (Required)
* **HttpVersion**: string
* **IPV6Enabled**: bool
* **Logging**: [Logging](#logging)
* **OriginGroups**: [OriginGroups](#origingroups)
* **Origins**: [Origin](#origin)[]
* **PriceClass**: string
* **Restrictions**: [Restrictions](#restrictions)
* **S3Origin**: [LegacyS3Origin](#legacys3origin)
* **Staging**: bool
* **ViewerCertificate**: [ViewerCertificate](#viewercertificate)
* **WebACLId**: string

## CacheBehavior
### Properties
* **AllowedMethods**: string[]
* **CachedMethods**: string[]
* **CachePolicyId**: string
* **Compress**: bool
* **DefaultTTL**: int
* **FieldLevelEncryptionId**: string
* **ForwardedValues**: [ForwardedValues](#forwardedvalues)
* **FunctionAssociations**: [FunctionAssociation](#functionassociation)[]
* **LambdaFunctionAssociations**: [LambdaFunctionAssociation](#lambdafunctionassociation)[]
* **MaxTTL**: int
* **MinTTL**: int
* **OriginRequestPolicyId**: string
* **PathPattern**: string (Required)
* **RealtimeLogConfigArn**: string
* **ResponseHeadersPolicyId**: string
* **SmoothStreaming**: bool
* **TargetOriginId**: string (Required)
* **TrustedKeyGroups**: string[]
* **TrustedSigners**: string[]
* **ViewerProtocolPolicy**: string (Required)

## ForwardedValues
### Properties
* **Cookies**: [Cookies](#cookies)
* **Headers**: string[]
* **QueryString**: bool (Required)
* **QueryStringCacheKeys**: string[]

## Cookies
### Properties
* **Forward**: string (Required)
* **WhitelistedNames**: string[]

## FunctionAssociation
### Properties
* **EventType**: string
* **FunctionARN**: string

## LambdaFunctionAssociation
### Properties
* **EventType**: string
* **IncludeBody**: bool
* **LambdaFunctionARN**: string

## CustomErrorResponse
### Properties
* **ErrorCachingMinTTL**: int
* **ErrorCode**: int (Required)
* **ResponseCode**: int
* **ResponsePagePath**: string

## LegacyCustomOrigin
### Properties
* **DNSName**: string (Required)
* **HTTPPort**: int
* **HTTPSPort**: int
* **OriginProtocolPolicy**: string (Required)
* **OriginSSLProtocols**: string[] (Required)

## DefaultCacheBehavior
### Properties
* **AllowedMethods**: string[]
* **CachedMethods**: string[]
* **CachePolicyId**: string
* **Compress**: bool
* **DefaultTTL**: int
* **FieldLevelEncryptionId**: string
* **ForwardedValues**: [ForwardedValues](#forwardedvalues)
* **FunctionAssociations**: [FunctionAssociation](#functionassociation)[]
* **LambdaFunctionAssociations**: [LambdaFunctionAssociation](#lambdafunctionassociation)[]
* **MaxTTL**: int
* **MinTTL**: int
* **OriginRequestPolicyId**: string
* **RealtimeLogConfigArn**: string
* **ResponseHeadersPolicyId**: string
* **SmoothStreaming**: bool
* **TargetOriginId**: string (Required)
* **TrustedKeyGroups**: string[]
* **TrustedSigners**: string[]
* **ViewerProtocolPolicy**: string (Required)

## Logging
### Properties
* **Bucket**: string (Required)
* **IncludeCookies**: bool
* **Prefix**: string

## OriginGroups
### Properties
* **Items**: [OriginGroup](#origingroup)[]
* **Quantity**: int (Required)

## OriginGroup
### Properties
* **FailoverCriteria**: [OriginGroupFailoverCriteria](#origingroupfailovercriteria) (Required)
* **Id**: string (Required, Identifier)
* **Members**: [OriginGroupMembers](#origingroupmembers) (Required)

## OriginGroupFailoverCriteria
### Properties
* **StatusCodes**: [StatusCodes](#statuscodes) (Required)

## StatusCodes
### Properties
* **Items**: int[] (Required)
* **Quantity**: int (Required)

## OriginGroupMembers
### Properties
* **Items**: [OriginGroupMember](#origingroupmember)[] (Required)
* **Quantity**: int (Required)

## OriginGroupMember
### Properties
* **OriginId**: string (Required)

## Origin
### Properties
* **ConnectionAttempts**: int
* **ConnectionTimeout**: int
* **CustomOriginConfig**: [CustomOriginConfig](#customoriginconfig)
* **DomainName**: string (Required)
* **Id**: string (Required, Identifier)
* **OriginAccessControlId**: string
* **OriginCustomHeaders**: [OriginCustomHeader](#origincustomheader)[]
* **OriginPath**: string
* **OriginShield**: [OriginShield](#originshield)
* **S3OriginConfig**: [S3OriginConfig](#s3originconfig)

## CustomOriginConfig
### Properties
* **HTTPPort**: int
* **HTTPSPort**: int
* **OriginKeepaliveTimeout**: int
* **OriginProtocolPolicy**: string (Required)
* **OriginReadTimeout**: int
* **OriginSSLProtocols**: string[]

## OriginCustomHeader
### Properties
* **HeaderName**: string (Required)
* **HeaderValue**: string (Required)

## OriginShield
### Properties
* **Enabled**: bool
* **OriginShieldRegion**: string

## S3OriginConfig
### Properties
* **OriginAccessIdentity**: string

## Restrictions
### Properties
* **GeoRestriction**: [GeoRestriction](#georestriction) (Required)

## GeoRestriction
### Properties
* **Locations**: string[]
* **RestrictionType**: string (Required)

## LegacyS3Origin
### Properties
* **DNSName**: string (Required)
* **OriginAccessIdentity**: string

## ViewerCertificate
### Properties
* **AcmCertificateArn**: string
* **CloudFrontDefaultCertificate**: bool
* **IamCertificateId**: string
* **MinimumProtocolVersion**: string
* **SslSupportMethod**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.CloudFront/FunctionProperties
### Properties
* **AutoPublish**: bool (WriteOnly)
* **FunctionARN**: string (ReadOnly, Identifier)
* **FunctionCode**: string (Required)
* **FunctionConfig**: [FunctionConfig](#functionconfig) (Required)
* **FunctionMetadata**: [FunctionMetadata](#functionmetadata)
* **Name**: string (Required)
* **Stage**: string (ReadOnly)

## FunctionConfig
### Properties
* **Comment**: string (Required)
* **KeyValueStoreAssociations**: [KeyValueStoreAssociation](#keyvaluestoreassociation)[]
* **Runtime**: string (Required)

## KeyValueStoreAssociation
### Properties
* **KeyValueStoreARN**: string (Required)

## FunctionMetadata
### Properties
* **FunctionARN**: string (ReadOnly, Identifier)

## AWS.CloudFront/KeyGroupProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **KeyGroupConfig**: [KeyGroupConfig](#keygroupconfig) (Required)
* **LastModifiedTime**: string (ReadOnly)

## KeyGroupConfig
### Properties
* **Comment**: string
* **Items**: string[] (Required)
* **Name**: string (Required)

## AWS.CloudFront/KeyValueStoreProperties
### Properties
* **Arn**: string (ReadOnly)
* **Comment**: string
* **Id**: string (ReadOnly)
* **ImportSource**: [ImportSource](#importsource) (WriteOnly)
* **Name**: string (Required, Identifier)
* **Status**: string (ReadOnly)

## ImportSource
### Properties
* **SourceArn**: string (Required)
* **SourceType**: string (Required)

## AWS.CloudFront/OriginAccessControlProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **OriginAccessControlConfig**: [OriginAccessControlConfig](#originaccesscontrolconfig) (Required)

## OriginAccessControlConfig
### Properties
* **Description**: string
* **Name**: string (Required)
* **OriginAccessControlOriginType**: string (Required)
* **SigningBehavior**: string (Required)
* **SigningProtocol**: string (Required)

## AWS.CloudFront/OriginRequestPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)
* **OriginRequestPolicyConfig**: [OriginRequestPolicyConfig](#originrequestpolicyconfig) (Required)

## OriginRequestPolicyConfig
### Properties
* **Comment**: string
* **CookiesConfig**: [CookiesConfig](#cookiesconfig) (Required)
* **HeadersConfig**: [HeadersConfig](#headersconfig) (Required)
* **Name**: string (Required)
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig) (Required)

## CookiesConfig
### Properties
* **CookieBehavior**: string (Required)
* **Cookies**: string[]

## HeadersConfig
### Properties
* **HeaderBehavior**: string (Required)
* **Headers**: string[]

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string (Required)
* **QueryStrings**: string[]

## AWS.CloudFront/PublicKeyProperties
### Properties
* **CreatedTime**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **PublicKeyConfig**: [PublicKeyConfig](#publickeyconfig) (Required)

## PublicKeyConfig
### Properties
* **CallerReference**: string (Required)
* **Comment**: string
* **EncodedKey**: string (Required)
* **Name**: string (Required)

## AWS.CloudFront/RealtimeLogConfigProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **EndPoints**: [EndPoint](#endpoint)[] (Required)
* **Fields**: string[] (Required)
* **Name**: string (Required)
* **SamplingRate**: int (Required)

## EndPoint
### Properties
* **KinesisStreamConfig**: [KinesisStreamConfig](#kinesisstreamconfig) (Required)
* **StreamType**: string (Required)

## KinesisStreamConfig
### Properties
* **RoleArn**: string (Required)
* **StreamArn**: string (Required)

## AWS.CloudFront/ResponseHeadersPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)
* **ResponseHeadersPolicyConfig**: [ResponseHeadersPolicyConfig](#responseheaderspolicyconfig) (Required)

## ResponseHeadersPolicyConfig
### Properties
* **Comment**: string
* **CorsConfig**: [CorsConfig](#corsconfig)
* **CustomHeadersConfig**: [CustomHeadersConfig](#customheadersconfig)
* **Name**: string (Required)
* **RemoveHeadersConfig**: [RemoveHeadersConfig](#removeheadersconfig)
* **SecurityHeadersConfig**: [SecurityHeadersConfig](#securityheadersconfig)
* **ServerTimingHeadersConfig**: [ServerTimingHeadersConfig](#servertimingheadersconfig)

## CorsConfig
### Properties
* **AccessControlAllowCredentials**: bool (Required)
* **AccessControlAllowHeaders**: [AccessControlAllowHeaders](#accesscontrolallowheaders) (Required)
* **AccessControlAllowMethods**: [AccessControlAllowMethods](#accesscontrolallowmethods) (Required)
* **AccessControlAllowOrigins**: [AccessControlAllowOrigins](#accesscontrolalloworigins) (Required)
* **AccessControlExposeHeaders**: [AccessControlExposeHeaders](#accesscontrolexposeheaders)
* **AccessControlMaxAgeSec**: int
* **OriginOverride**: bool (Required)

## AccessControlAllowHeaders
### Properties
* **Items**: string[] (Required)

## AccessControlAllowMethods
### Properties
* **Items**: string[] (Required)

## AccessControlAllowOrigins
### Properties
* **Items**: string[] (Required)

## AccessControlExposeHeaders
### Properties
* **Items**: string[] (Required)

## CustomHeadersConfig
### Properties
* **Items**: [CustomHeader](#customheader)[] (Required)

## CustomHeader
### Properties
* **Header**: string (Required)
* **Override**: bool (Required)
* **Value**: string (Required)

## RemoveHeadersConfig
### Properties
* **Items**: [RemoveHeader](#removeheader)[] (Required)

## RemoveHeader
### Properties
* **Header**: string (Required)

## SecurityHeadersConfig
### Properties
* **ContentSecurityPolicy**: [ContentSecurityPolicy](#contentsecuritypolicy)
* **ContentTypeOptions**: [ContentTypeOptions](#contenttypeoptions)
* **FrameOptions**: [FrameOptions](#frameoptions)
* **ReferrerPolicy**: [ReferrerPolicy](#referrerpolicy)
* **StrictTransportSecurity**: [StrictTransportSecurity](#stricttransportsecurity)
* **XSSProtection**: [XSSProtection](#xssprotection)

## ContentSecurityPolicy
### Properties
* **ContentSecurityPolicy**: string (Required)
* **Override**: bool (Required)

## ContentTypeOptions
### Properties
* **Override**: bool (Required)

## FrameOptions
### Properties
* **FrameOption**: string (Required)
* **Override**: bool (Required)

## ReferrerPolicy
### Properties
* **Override**: bool (Required)
* **ReferrerPolicy**: string (Required)

## StrictTransportSecurity
### Properties
* **AccessControlMaxAgeSec**: int (Required)
* **IncludeSubdomains**: bool
* **Override**: bool (Required)
* **Preload**: bool

## XSSProtection
### Properties
* **ModeBlock**: bool
* **Override**: bool (Required)
* **Protection**: bool (Required)
* **ReportUri**: string

## ServerTimingHeadersConfig
### Properties
* **Enabled**: bool (Required)
* **SamplingRate**: int

