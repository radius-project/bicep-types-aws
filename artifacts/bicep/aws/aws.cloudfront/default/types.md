# AWS.CloudFront @ default

## Resource AWS.CloudFront/CachePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/CachePolicyProperties](#awscloudfrontcachepolicyproperties): properties of the resource

## Resource AWS.CloudFront/CloudFrontOriginAccessIdentity@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/CloudFrontOriginAccessIdentityProperties](#awscloudfrontcloudfrontoriginaccessidentityproperties): properties of the resource

## Resource AWS.CloudFront/Distribution@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/DistributionProperties](#awscloudfrontdistributionproperties): properties of the resource

## Resource AWS.CloudFront/Function@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/FunctionProperties](#awscloudfrontfunctionproperties): properties of the resource

## Resource AWS.CloudFront/KeyGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/KeyGroupProperties](#awscloudfrontkeygroupproperties): properties of the resource

## Resource AWS.CloudFront/OriginRequestPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/OriginRequestPolicyProperties](#awscloudfrontoriginrequestpolicyproperties): properties of the resource

## Resource AWS.CloudFront/PublicKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/PublicKeyProperties](#awscloudfrontpublickeyproperties): properties of the resource

## Resource AWS.CloudFront/RealtimeLogConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/RealtimeLogConfigProperties](#awscloudfrontrealtimelogconfigproperties): properties of the resource

## Resource AWS.CloudFront/ResponseHeadersPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFront/ResponseHeadersPolicyProperties](#awscloudfrontresponseheaderspolicyproperties): properties of the resource

## AWS.CloudFront/CachePolicyProperties
### Properties
* **CachePolicyConfig**: [CachePolicyConfig](#cachepolicyconfig)
* **Id**: string (ReadOnly)
* **LastModifiedTime**: string (ReadOnly)

## CachePolicyConfig
### Properties
* **Comment**: string
* **DefaultTTL**: int
* **MaxTTL**: int
* **MinTTL**: int
* **Name**: string
* **ParametersInCacheKeyAndForwardedToOrigin**: [ParametersInCacheKeyAndForwardedToOrigin](#parametersincachekeyandforwardedtoorigin)

## ParametersInCacheKeyAndForwardedToOrigin
### Properties
* **CookiesConfig**: [CookiesConfig](#cookiesconfig)
* **EnableAcceptEncodingBrotli**: bool
* **EnableAcceptEncodingGzip**: bool
* **HeadersConfig**: [HeadersConfig](#headersconfig)
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig)

## CookiesConfig
### Properties
* **CookieBehavior**: string
* **Cookies**: string[]

## HeadersConfig
### Properties
* **HeaderBehavior**: string
* **Headers**: string[]

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string
* **QueryStrings**: string[]

## AWS.CloudFront/CloudFrontOriginAccessIdentityProperties
### Properties
* **CloudFrontOriginAccessIdentityConfig**: [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig)
* **Id**: string (ReadOnly)
* **S3CanonicalUserId**: string (ReadOnly)

## CloudFrontOriginAccessIdentityConfig
### Properties
* **Comment**: string

## AWS.CloudFront/DistributionProperties
### Properties
* **DistributionConfig**: [DistributionConfig](#distributionconfig)
* **DomainName**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## DistributionConfig
### Properties
* **Aliases**: string[]
* **CacheBehaviors**: [CacheBehavior](#cachebehavior)[]
* **CNAMEs**: string[]
* **Comment**: string
* **CustomErrorResponses**: [CustomErrorResponse](#customerrorresponse)[]
* **CustomOrigin**: [LegacyCustomOrigin](#legacycustomorigin)
* **DefaultCacheBehavior**: [DefaultCacheBehavior](#defaultcachebehavior)
* **DefaultRootObject**: string
* **Enabled**: bool
* **HttpVersion**: string
* **IPV6Enabled**: bool
* **Logging**: [Logging](#logging)
* **OriginGroups**: [OriginGroups](#origingroups)
* **Origins**: [Origin](#origin)[]
* **PriceClass**: string
* **Restrictions**: [Restrictions](#restrictions)
* **S3Origin**: [LegacyS3Origin](#legacys3origin)
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
* **PathPattern**: string
* **RealtimeLogConfigArn**: string
* **ResponseHeadersPolicyId**: string
* **SmoothStreaming**: bool
* **TargetOriginId**: string
* **TrustedKeyGroups**: string[]
* **TrustedSigners**: string[]
* **ViewerProtocolPolicy**: string

## ForwardedValues
### Properties
* **Cookies**: [Cookies](#cookies)
* **Headers**: string[]
* **QueryString**: bool
* **QueryStringCacheKeys**: string[]

## Cookies
### Properties
* **Forward**: string
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
* **ErrorCode**: int
* **ResponseCode**: int
* **ResponsePagePath**: string

## LegacyCustomOrigin
### Properties
* **DNSName**: string
* **HTTPPort**: int
* **HTTPSPort**: int
* **OriginProtocolPolicy**: string
* **OriginSSLProtocols**: string[]

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
* **TargetOriginId**: string
* **TrustedKeyGroups**: string[]
* **TrustedSigners**: string[]
* **ViewerProtocolPolicy**: string

## Logging
### Properties
* **Bucket**: string
* **IncludeCookies**: bool
* **Prefix**: string

## OriginGroups
### Properties
* **Items**: [OriginGroup](#origingroup)[]
* **Quantity**: int

## OriginGroup
### Properties
* **FailoverCriteria**: [OriginGroupFailoverCriteria](#origingroupfailovercriteria)
* **Id**: string
* **Members**: [OriginGroupMembers](#origingroupmembers)

## OriginGroupFailoverCriteria
### Properties
* **StatusCodes**: [StatusCodes](#statuscodes)

## StatusCodes
### Properties
* **Items**: int[]
* **Quantity**: int

## OriginGroupMembers
### Properties
* **Items**: [OriginGroupMember](#origingroupmember)[]
* **Quantity**: int

## OriginGroupMember
### Properties
* **OriginId**: string

## Origin
### Properties
* **ConnectionAttempts**: int
* **ConnectionTimeout**: int
* **CustomOriginConfig**: [CustomOriginConfig](#customoriginconfig)
* **DomainName**: string
* **Id**: string
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
* **OriginProtocolPolicy**: string
* **OriginReadTimeout**: int
* **OriginSSLProtocols**: string[]

## OriginCustomHeader
### Properties
* **HeaderName**: string
* **HeaderValue**: string

## OriginShield
### Properties
* **Enabled**: bool
* **OriginShieldRegion**: string

## S3OriginConfig
### Properties
* **OriginAccessIdentity**: string

## Restrictions
### Properties
* **GeoRestriction**: [GeoRestriction](#georestriction)

## GeoRestriction
### Properties
* **Locations**: string[]
* **RestrictionType**: string

## LegacyS3Origin
### Properties
* **DNSName**: string
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
* **Key**: string
* **Value**: string

## AWS.CloudFront/FunctionProperties
### Properties
* **AutoPublish**: bool (WriteOnly)
* **FunctionARN**: string (ReadOnly)
* **FunctionCode**: string (WriteOnly)
* **FunctionConfig**: [FunctionConfig](#functionconfig)
* **FunctionMetadata**: [FunctionMetadata](#functionmetadata)
* **Name**: string
* **Stage**: string (ReadOnly)

## FunctionConfig
### Properties
* **Comment**: string
* **Runtime**: string

## FunctionMetadata
### Properties
* **FunctionARN**: string (ReadOnly)

## AWS.CloudFront/KeyGroupProperties
### Properties
* **Id**: string (ReadOnly)
* **KeyGroupConfig**: [KeyGroupConfig](#keygroupconfig)
* **LastModifiedTime**: string (ReadOnly)

## KeyGroupConfig
### Properties
* **Comment**: string
* **Items**: string[]
* **Name**: string

## AWS.CloudFront/OriginRequestPolicyProperties
### Properties
* **Id**: string (ReadOnly)
* **LastModifiedTime**: string (ReadOnly)
* **OriginRequestPolicyConfig**: [OriginRequestPolicyConfig](#originrequestpolicyconfig)

## OriginRequestPolicyConfig
### Properties
* **Comment**: string
* **CookiesConfig**: [CookiesConfig](#cookiesconfig)
* **HeadersConfig**: [HeadersConfig](#headersconfig)
* **Name**: string
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig)

## CookiesConfig
### Properties
* **CookieBehavior**: string
* **Cookies**: string[]

## HeadersConfig
### Properties
* **HeaderBehavior**: string
* **Headers**: string[]

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string
* **QueryStrings**: string[]

## AWS.CloudFront/PublicKeyProperties
### Properties
* **CreatedTime**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **PublicKeyConfig**: [PublicKeyConfig](#publickeyconfig)

## PublicKeyConfig
### Properties
* **CallerReference**: string
* **Comment**: string
* **EncodedKey**: string
* **Name**: string

## AWS.CloudFront/RealtimeLogConfigProperties
### Properties
* **Arn**: string (ReadOnly)
* **EndPoints**: [EndPoint](#endpoint)[]
* **Fields**: string[]
* **Name**: string
* **SamplingRate**: int

## EndPoint
### Properties
* **KinesisStreamConfig**: [KinesisStreamConfig](#kinesisstreamconfig)
* **StreamType**: string

## KinesisStreamConfig
### Properties
* **RoleArn**: string
* **StreamArn**: string

## AWS.CloudFront/ResponseHeadersPolicyProperties
### Properties
* **Id**: string (ReadOnly)
* **LastModifiedTime**: string (ReadOnly)
* **ResponseHeadersPolicyConfig**: [ResponseHeadersPolicyConfig](#responseheaderspolicyconfig)

## ResponseHeadersPolicyConfig
### Properties
* **Comment**: string
* **CorsConfig**: [CorsConfig](#corsconfig)
* **CustomHeadersConfig**: [CustomHeadersConfig](#customheadersconfig)
* **Name**: string
* **SecurityHeadersConfig**: [SecurityHeadersConfig](#securityheadersconfig)
* **ServerTimingHeadersConfig**: [ServerTimingHeadersConfig](#servertimingheadersconfig)

## CorsConfig
### Properties
* **AccessControlAllowCredentials**: bool
* **AccessControlAllowHeaders**: [AccessControlAllowHeaders](#accesscontrolallowheaders)
* **AccessControlAllowMethods**: [AccessControlAllowMethods](#accesscontrolallowmethods)
* **AccessControlAllowOrigins**: [AccessControlAllowOrigins](#accesscontrolalloworigins)
* **AccessControlExposeHeaders**: [AccessControlExposeHeaders](#accesscontrolexposeheaders)
* **AccessControlMaxAgeSec**: int
* **OriginOverride**: bool

## AccessControlAllowHeaders
### Properties
* **Items**: string[]

## AccessControlAllowMethods
### Properties
* **Items**: string[]

## AccessControlAllowOrigins
### Properties
* **Items**: string[]

## AccessControlExposeHeaders
### Properties
* **Items**: string[]

## CustomHeadersConfig
### Properties
* **Items**: [CustomHeader](#customheader)[]

## CustomHeader
### Properties
* **Header**: string
* **Override**: bool
* **Value**: string

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
* **ContentSecurityPolicy**: string
* **Override**: bool

## ContentTypeOptions
### Properties
* **Override**: bool

## FrameOptions
### Properties
* **FrameOption**: string
* **Override**: bool

## ReferrerPolicy
### Properties
* **Override**: bool
* **ReferrerPolicy**: string

## StrictTransportSecurity
### Properties
* **AccessControlMaxAgeSec**: int
* **IncludeSubdomains**: bool
* **Override**: bool
* **Preload**: bool

## XSSProtection
### Properties
* **ModeBlock**: bool
* **Override**: bool
* **Protection**: bool
* **ReportUri**: string

## ServerTimingHeadersConfig
### Properties
* **Enabled**: bool
* **SamplingRate**: int

