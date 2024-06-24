# AWS.CloudFront @ default

## Resource AWS.CloudFront/CachePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/CachePolicyProperties](#awscloudfrontcachepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/CloudFrontOriginAccessIdentity@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/CloudFrontOriginAccessIdentityProperties](#awscloudfrontcloudfrontoriginaccessidentityproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/ContinuousDeploymentPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/ContinuousDeploymentPolicyProperties](#awscloudfrontcontinuousdeploymentpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/Distribution@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/DistributionProperties](#awscloudfrontdistributionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/Function@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/FunctionProperties](#awscloudfrontfunctionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/KeyGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/KeyGroupProperties](#awscloudfrontkeygroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/KeyValueStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/KeyValueStoreProperties](#awscloudfrontkeyvaluestoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/OriginAccessControl@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/OriginAccessControlProperties](#awscloudfrontoriginaccesscontrolproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/OriginRequestPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/OriginRequestPolicyProperties](#awscloudfrontoriginrequestpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/PublicKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/PublicKeyProperties](#awscloudfrontpublickeyproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/RealtimeLogConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/RealtimeLogConfigProperties](#awscloudfrontrealtimelogconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFront/ResponseHeadersPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFront/ResponseHeadersPolicyProperties](#awscloudfrontresponseheaderspolicyproperties) (Required, Identifier): properties of the resource

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

## AWS.CloudFront/CachePolicyProperties
### Properties
* **CachePolicyConfig**: [CachePolicyConfig](#cachepolicyconfig) (Required)
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)

## AWS.CloudFront/CloudFrontOriginAccessIdentityProperties
### Properties
* **CloudFrontOriginAccessIdentityConfig**: [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig) (Required)
* **Id**: string (ReadOnly, Identifier)
* **S3CanonicalUserId**: string (ReadOnly)

## AWS.CloudFront/ContinuousDeploymentPolicyProperties
### Properties
* **ContinuousDeploymentPolicyConfig**: [ContinuousDeploymentPolicyConfig](#continuousdeploymentpolicyconfig) (Required)
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)

## AWS.CloudFront/DistributionProperties
### Properties
* **DistributionConfig**: [DistributionConfig](#distributionconfig) (Required): The distribution's configuration.
* **DomainName**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]: A complex type that contains zero or more ``Tag`` elements.

## AWS.CloudFront/FunctionProperties
### Properties
* **AutoPublish**: bool (WriteOnly)
* **FunctionARN**: string (ReadOnly, Identifier)
* **FunctionCode**: string (Required)
* **FunctionConfig**: [FunctionConfig](#functionconfig) (Required)
* **FunctionMetadata**: [FunctionMetadata](#functionmetadata)
* **Name**: string (Required)
* **Stage**: string (ReadOnly)

## AWS.CloudFront/KeyGroupProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **KeyGroupConfig**: [KeyGroupConfig](#keygroupconfig) (Required)
* **LastModifiedTime**: string (ReadOnly)

## AWS.CloudFront/KeyValueStoreProperties
### Properties
* **Arn**: string (ReadOnly)
* **Comment**: string
* **Id**: string (ReadOnly)
* **ImportSource**: [ImportSource](#importsource) (WriteOnly)
* **Name**: string (Required, Identifier)
* **Status**: string (ReadOnly)

## AWS.CloudFront/OriginAccessControlProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **OriginAccessControlConfig**: [OriginAccessControlConfig](#originaccesscontrolconfig) (Required)

## AWS.CloudFront/OriginRequestPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)
* **OriginRequestPolicyConfig**: [OriginRequestPolicyConfig](#originrequestpolicyconfig) (Required)

## AWS.CloudFront/PublicKeyProperties
### Properties
* **CreatedTime**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **PublicKeyConfig**: [PublicKeyConfig](#publickeyconfig) (Required)

## AWS.CloudFront/RealtimeLogConfigProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **EndPoints**: [EndPoint](#endpoint)[] (Required)
* **Fields**: string[] (Required)
* **Name**: string (Required)
* **SamplingRate**: int (Required)

## AWS.CloudFront/ResponseHeadersPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)
* **ResponseHeadersPolicyConfig**: [ResponseHeadersPolicyConfig](#responseheaderspolicyconfig) (Required)

## CacheBehavior
### Properties
* **AllowedMethods**: string[]: A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
  +  CloudFront forwards only ``GET`` and ``HEAD`` requests.
  +  CloudFront forwards only ``GET``, ``HEAD``, and ``OPTIONS`` requests.
  +  CloudFront forwards ``GET, HEAD, OPTIONS, PUT, PATCH, POST``, and ``DELETE`` requests.
  
 If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
* **CachedMethods**: string[]: A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
  +  CloudFront caches responses to ``GET`` and ``HEAD`` requests.
  +  CloudFront caches responses to ``GET``, ``HEAD``, and ``OPTIONS`` requests.
  
 If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
* **CachePolicyId**: string: The unique identifier of the cache policy that is attached to this cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 A ``CacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
* **Compress**: bool: Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify true; if not, specify false. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the *Amazon CloudFront Developer Guide*.
* **DefaultTTL**: int: This field is deprecated. We recommend that you use the ``DefaultTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
* **FieldLevelEncryptionId**: string: The value of ``ID`` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for this cache behavior.
* **ForwardedValues**: [ForwardedValues](#forwardedvalues): This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the *Amazon CloudFront Developer Guide*.
 If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
 A ``CacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
 A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
* **FunctionAssociations**: [FunctionAssociation](#functionassociation)[]: A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the ``LIVE`` stage to associate them with a cache behavior.
* **LambdaFunctionAssociations**: [LambdaFunctionAssociation](#lambdafunctionassociation)[]: A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
* **MaxTTL**: int: This field is deprecated. We recommend that you use the ``MaxTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
* **MinTTL**: int: This field is deprecated. We recommend that you use the ``MinTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
 You must specify ``0`` for ``MinTTL`` if you configure CloudFront to forward all headers to your origin (under ``Headers``, if you specify ``1`` for ``Quantity`` and ``*`` for ``Name``).
* **OriginRequestPolicyId**: string: The unique identifier of the origin request policy that is attached to this cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
* **PathPattern**: string (Required): The pattern (for example, ``images/*.jpg``) that specifies which requests to apply the behavior to. When CloudFront receives a viewer request, the requested path is compared with path patterns in the order in which cache behaviors are listed in the distribution.
  You can optionally include a slash (``/``) at the beginning of the path pattern. For example, ``/images/*.jpg``. CloudFront behavior is the same with or without the leading ``/``.
  The path pattern for the default cache behavior is ``*`` and cannot be changed. If the request for an object does not match the path pattern for any cache behaviors, CloudFront applies the behavior in the default cache behavior.
 For more information, see [Path Pattern](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern) in the *Amazon CloudFront Developer Guide*.
* **RealtimeLogConfigArn**: string: The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
* **ResponseHeadersPolicyId**: string: The identifier for a response headers policy.
* **SmoothStreaming**: bool: Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify ``true``; if not, specify ``false``. If you specify ``true`` for ``SmoothStreaming``, you can still distribute other content using this cache behavior if the content matches the value of ``PathPattern``.
* **TargetOriginId**: string (Required): The value of ``ID`` for the origin that you want CloudFront to route requests to when they match this cache behavior.
* **TrustedKeyGroups**: string[]: A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
 When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
* **TrustedSigners**: string[]: We recommend using ``TrustedKeyGroups`` instead of ``TrustedSigners``.
  A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
 When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in the trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
* **ViewerProtocolPolicy**: string (Required): The protocol that viewers can use to access the files in the origin specified by ``TargetOriginId`` when a request matches the path pattern in ``PathPattern``. You can specify the following options:
  +   ``allow-all``: Viewers can use HTTP or HTTPS.
  +   ``redirect-to-https``: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.
  +   ``https-only``: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).
  
 For more information about requiring the HTTPS protocol, see [Requiring HTTPS Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the *Amazon CloudFront Developer Guide*.
  The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see [Managing Cache Expiration](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.

## CachePolicyConfig
### Properties
* **Comment**: string
* **DefaultTTL**: int (Required)
* **MaxTTL**: int (Required)
* **MinTTL**: int (Required)
* **Name**: string (Required)
* **ParametersInCacheKeyAndForwardedToOrigin**: [ParametersInCacheKeyAndForwardedToOrigin](#parametersincachekeyandforwardedtoorigin) (Required)

## CloudFrontOriginAccessIdentityConfig
### Properties
* **Comment**: string (Required)

## ContentSecurityPolicy
### Properties
* **ContentSecurityPolicy**: string (Required)
* **Override**: bool (Required)

## ContentTypeOptions
### Properties
* **Override**: bool (Required)

## ContinuousDeploymentPolicy_SingleHeaderPolicyConfig
### Properties
* **Header**: string (Required)
* **Value**: string (Required)

## ContinuousDeploymentPolicy_SingleWeightPolicyConfig
### Properties
* **SessionStickinessConfig**: [SessionStickinessConfig](#sessionstickinessconfig)
* **Weight**: int (Required)

## ContinuousDeploymentPolicyConfig
### Properties
* **Enabled**: bool (Required)
* **SingleHeaderPolicyConfig**: [ContinuousDeploymentPolicy_SingleHeaderPolicyConfig](#continuousdeploymentpolicysingleheaderpolicyconfig)
* **SingleWeightPolicyConfig**: [ContinuousDeploymentPolicy_SingleWeightPolicyConfig](#continuousdeploymentpolicysingleweightpolicyconfig)
* **StagingDistributionDnsNames**: string[] (Required)
* **TrafficConfig**: [TrafficConfig](#trafficconfig)
* **Type**: string

## Cookies
### Properties
* **Forward**: string (Required): This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send cookies to the origin but not include them in the cache key, use origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 Specifies which cookies to forward to the origin for this cache behavior: all, none, or the list of cookies specified in the ``WhitelistedNames`` complex type.
 Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an Amazon S3 origin, specify none for the ``Forward`` element.
* **WhitelistedNames**: string[]: This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 Required if you specify ``whitelist`` for the value of ``Forward``. A complex type that specifies how many different cookies you want CloudFront to forward to the origin for this cache behavior and, if you want to forward selected cookies, the names of those cookies.
 If you specify ``all`` or ``none`` for the value of ``Forward``, omit ``WhitelistedNames``. If you change the value of ``Forward`` from ``whitelist`` to ``all`` or ``none`` and you don't delete the ``WhitelistedNames`` element and its child elements, CloudFront deletes them automatically.
 For the current limit on the number of cookie names that you can whitelist for each cache behavior, see [CloudFront Limits](https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront) in the *General Reference*.

## CookiesConfig
### Properties
* **CookieBehavior**: string (Required)
* **Cookies**: string[]

## CookiesConfig
### Properties
* **CookieBehavior**: string (Required)
* **Cookies**: string[]

## CorsConfig
### Properties
* **AccessControlAllowCredentials**: bool (Required)
* **AccessControlAllowHeaders**: [AccessControlAllowHeaders](#accesscontrolallowheaders) (Required)
* **AccessControlAllowMethods**: [AccessControlAllowMethods](#accesscontrolallowmethods) (Required)
* **AccessControlAllowOrigins**: [AccessControlAllowOrigins](#accesscontrolalloworigins) (Required)
* **AccessControlExposeHeaders**: [AccessControlExposeHeaders](#accesscontrolexposeheaders)
* **AccessControlMaxAgeSec**: int
* **OriginOverride**: bool (Required)

## CustomErrorResponse
### Properties
* **ErrorCachingMinTTL**: int: The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status code specified in ``ErrorCode``. When this time period has elapsed, CloudFront queries your origin to see whether the problem that caused the error has been resolved and the requested object is now available.
 For more information, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
* **ErrorCode**: int (Required): The HTTP status code for which you want to specify a custom error page and/or a caching duration.
* **ResponseCode**: int: The HTTP status code that you want CloudFront to return to the viewer along with the custom error page. There are a variety of reasons that you might want CloudFront to return a status code different from the status code that your origin returned to CloudFront, for example:
  +  Some Internet devices (some firewalls and corporate proxies, for example) intercept HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you substitute ``200``, the response typically won't be intercepted.
  +  If you don't care about distinguishing among different client errors or server errors, you can specify ``400`` or ``500`` as the ``ResponseCode`` for all 4xx or 5xx errors.
  +  You might want to return a ``200`` status code (OK) and static website so your customers don't know that your website is down.
  
 If you specify a value for ``ResponseCode``, you must also specify a value for ``ResponsePagePath``.
* **ResponsePagePath**: string: The path to the custom error page that you want CloudFront to return to a viewer when your origin returns the HTTP status code specified by ``ErrorCode``, for example, ``/4xx-errors/403-forbidden.html``. If you want to store your objects and your custom error pages in different locations, your distribution must include a cache behavior for which the following is true:
  +  The value of ``PathPattern`` matches the path to your custom error messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3 bucket in a directory named ``/4xx-errors``. Your distribution must include a cache behavior for which the path pattern routes requests for your custom error pages to that location, for example, ``/4xx-errors/*``.
  +  The value of ``TargetOriginId`` specifies the value of the ``ID`` element for the origin that contains your custom error pages.
  
 If you specify a value for ``ResponsePagePath``, you must also specify a value for ``ResponseCode``.
 We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the files that you want to return to viewers because the origin server is unavailable.

## CustomHeader
### Properties
* **Header**: string (Required)
* **Override**: bool (Required)
* **Value**: string (Required)

## CustomHeadersConfig
### Properties
* **Items**: [CustomHeader](#customheader)[] (Required)

## CustomOriginConfig
### Properties
* **HTTPPort**: int: The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.
* **HTTPSPort**: int: The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.
* **OriginKeepaliveTimeout**: int: Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 5 seconds.
 For more information, see [Origin Keep-alive Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginKeepaliveTimeout) in the *Amazon CloudFront Developer Guide*.
* **OriginProtocolPolicy**: string (Required): Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:
  +   ``http-only`` ? CloudFront always uses HTTP to connect to the origin.
  +   ``match-viewer`` ? CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.
  +   ``https-only`` ? CloudFront always uses HTTPS to connect to the origin.
* **OriginReadTimeout**: int: Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 30 seconds.
 For more information, see [Origin Response Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
* **OriginSSLProtocols**: string[]: Specifies the minimum SSL/TLS protocol that CloudFront uses when connecting to your origin over HTTPS. Valid values include ``SSLv3``, ``TLSv1``, ``TLSv1.1``, and ``TLSv1.2``.
 For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the *Amazon CloudFront Developer Guide*.

## DefaultCacheBehavior
### Properties
* **AllowedMethods**: string[]: A complex type that controls which HTTP methods CloudFront processes and forwards to your Amazon S3 bucket or your custom origin. There are three choices:
  +  CloudFront forwards only ``GET`` and ``HEAD`` requests.
  +  CloudFront forwards only ``GET``, ``HEAD``, and ``OPTIONS`` requests.
  +  CloudFront forwards ``GET, HEAD, OPTIONS, PUT, PATCH, POST``, and ``DELETE`` requests.
  
 If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or to your custom origin so users can't perform operations that you don't want them to. For example, you might not want users to have permissions to delete objects from your origin.
* **CachedMethods**: string[]: A complex type that controls whether CloudFront caches the response to requests using the specified HTTP methods. There are two choices:
  +  CloudFront caches responses to ``GET`` and ``HEAD`` requests.
  +  CloudFront caches responses to ``GET``, ``HEAD``, and ``OPTIONS`` requests.
  
 If you pick the second choice for your Amazon S3 Origin, you may need to forward Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the responses to be cached correctly.
* **CachePolicyId**: string: The unique identifier of the cache policy that is attached to the default cache behavior. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 A ``DefaultCacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
* **Compress**: bool: Whether you want CloudFront to automatically compress certain files for this cache behavior. If so, specify ``true``; if not, specify ``false``. For more information, see [Serving Compressed Files](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html) in the *Amazon CloudFront Developer Guide*.
* **DefaultTTL**: int: This field is deprecated. We recommend that you use the ``DefaultTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 The default amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin does not add HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
* **FieldLevelEncryptionId**: string: The value of ``ID`` for the field-level encryption configuration that you want CloudFront to use for encrypting specific fields of data for the default cache behavior.
* **ForwardedValues**: [ForwardedValues](#forwardedvalues): This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field. For more information, see [Working with policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) in the *Amazon CloudFront Developer Guide*.
 If you want to include values in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 If you want to send values to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
 A ``DefaultCacheBehavior`` must include either a ``CachePolicyId`` or ``ForwardedValues``. We recommend that you use a ``CachePolicyId``.
 A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.
* **FunctionAssociations**: [FunctionAssociation](#functionassociation)[]: A list of CloudFront functions that are associated with this cache behavior. CloudFront functions must be published to the ``LIVE`` stage to associate them with a cache behavior.
* **LambdaFunctionAssociations**: [LambdaFunctionAssociation](#lambdafunctionassociation)[]: A complex type that contains zero or more Lambda@Edge function associations for a cache behavior.
* **MaxTTL**: int: This field is deprecated. We recommend that you use the ``MaxTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. The value that you specify applies only when your origin adds HTTP headers such as ``Cache-Control max-age``, ``Cache-Control s-maxage``, and ``Expires`` to objects. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
* **MinTTL**: int: This field is deprecated. We recommend that you use the ``MinTTL`` field in a cache policy instead of this field. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) or [Using the managed cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-cache-policies.html) in the *Amazon CloudFront Developer Guide*.
 The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront forwards another request to your origin to determine whether the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
 You must specify ``0`` for ``MinTTL`` if you configure CloudFront to forward all headers to your origin (under ``Headers``, if you specify ``1`` for ``Quantity`` and ``*`` for ``Name``).
* **OriginRequestPolicyId**: string: The unique identifier of the origin request policy that is attached to the default cache behavior. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) or [Using the managed origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-managed-origin-request-policies.html) in the *Amazon CloudFront Developer Guide*.
* **RealtimeLogConfigArn**: string: The Amazon Resource Name (ARN) of the real-time log configuration that is attached to this cache behavior. For more information, see [Real-time logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html) in the *Amazon CloudFront Developer Guide*.
* **ResponseHeadersPolicyId**: string: The identifier for a response headers policy.
* **SmoothStreaming**: bool: Indicates whether you want to distribute media files in the Microsoft Smooth Streaming format using the origin that is associated with this cache behavior. If so, specify ``true``; if not, specify ``false``. If you specify ``true`` for ``SmoothStreaming``, you can still distribute other content using this cache behavior if the content matches the value of ``PathPattern``.
* **TargetOriginId**: string (Required): The value of ``ID`` for the origin that you want CloudFront to route requests to when they use the default cache behavior.
* **TrustedKeyGroups**: string[]: A list of key groups that CloudFront can use to validate signed URLs or signed cookies.
 When a cache behavior contains trusted key groups, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with a private key whose corresponding public key is in the key group. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
* **TrustedSigners**: string[]: We recommend using ``TrustedKeyGroups`` instead of ``TrustedSigners``.
  A list of AWS-account IDs whose public keys CloudFront can use to validate signed URLs or signed cookies.
 When a cache behavior contains trusted signers, CloudFront requires signed URLs or signed cookies for all requests that match the cache behavior. The URLs or cookies must be signed with the private key of a CloudFront key pair in a trusted signer's AWS-account. The signed URL or cookie contains information about which public key CloudFront should use to verify the signature. For more information, see [Serving private content](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.
* **ViewerProtocolPolicy**: string (Required): The protocol that viewers can use to access the files in the origin specified by ``TargetOriginId`` when a request matches the path pattern in ``PathPattern``. You can specify the following options:
  +   ``allow-all``: Viewers can use HTTP or HTTPS.
  +   ``redirect-to-https``: If a viewer submits an HTTP request, CloudFront returns an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The viewer then resubmits the request using the new URL.
  +   ``https-only``: If a viewer sends an HTTP request, CloudFront returns an HTTP status code of 403 (Forbidden).
  
 For more information about requiring the HTTPS protocol, see [Requiring HTTPS Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/using-https-viewers-to-cloudfront.html) in the *Amazon CloudFront Developer Guide*.
  The only way to guarantee that viewers retrieve an object that was fetched from the origin using HTTPS is never to use any other protocol to fetch the object. If you have recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because cached objects are protocol agnostic. That means that an edge location will return an object from the cache regardless of whether the current request protocol matches the protocol used previously. For more information, see [Managing Cache Expiration](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.

## DistributionConfig
### Properties
* **Aliases**: string[]: A complex type that contains information about CNAMEs (alternate domain names), if any, for this distribution.
* **CacheBehaviors**: [CacheBehavior](#cachebehavior)[]: A complex type that contains zero or more ``CacheBehavior`` elements.
* **CNAMEs**: string[]
* **Comment**: string: A comment to describe the distribution. The comment cannot be longer than 128 characters.
* **ContinuousDeploymentPolicyId**: string: The identifier of a continuous deployment policy. For more information, see ``CreateContinuousDeploymentPolicy``.
* **CustomErrorResponses**: [CustomErrorResponse](#customerrorresponse)[]: A complex type that controls the following:
  +  Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
  +  How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
  
 For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
* **CustomOrigin**: [LegacyCustomOrigin](#legacycustomorigin)
* **DefaultCacheBehavior**: [DefaultCacheBehavior](#defaultcachebehavior) (Required): A complex type that describes the default cache behavior if you don't specify a ``CacheBehavior`` element or if files don't match any of the values of ``PathPattern`` in ``CacheBehavior`` elements. You must create exactly one default cache behavior.
* **DefaultRootObject**: string: The object that you want CloudFront to request from your origin (for example, ``index.html``) when a viewer requests the root URL for your distribution (``https://www.example.com``) instead of an object in your distribution (``https://www.example.com/product-description.html``). Specifying a default root object avoids exposing the contents of your distribution.
 Specify only the object name, for example, ``index.html``. Don't add a ``/`` before the object name.
 If you don't want to specify a default root object when you create a distribution, include an empty ``DefaultRootObject`` element.
 To delete the default root object from an existing distribution, update the distribution configuration and include an empty ``DefaultRootObject`` element.
 To replace the default root object, update the distribution configuration and specify the new object.
 For more information about the default root object, see [Creating a Default Root Object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html) in the *Amazon CloudFront Developer Guide*.
* **Enabled**: bool (Required): From this field, you can enable or disable the selected distribution.
* **HttpVersion**: string: (Optional) Specify the maximum HTTP version(s) that you want viewers to use to communicate with CF. The default value for new distributions is ``http1.1``.
 For viewers and CF to use HTTP/2, viewers must support TLSv1.2 or later, and must support Server Name Indication (SNI).
 For viewers and CF to use HTTP/3, viewers must support TLSv1.3 and Server Name Indication (SNI). CF supports HTTP/3 connection migration to allow the viewer to switch networks without losing connection. For more information about connection migration, see [Connection Migration](https://docs.aws.amazon.com/https://www.rfc-editor.org/rfc/rfc9000.html#name-connection-migration) at RFC 9000. For more information about supported TLSv1.3 ciphers, see [Supported protocols and ciphers between viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html).
* **IPV6Enabled**: bool: If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your distribution, specify ``true``. If you specify ``false``, CloudFront responds to IPv6 DNS requests with the DNS response code ``NOERROR`` and with no IP addresses. This allows viewers to submit a second request, for an IPv4 address for your distribution.
 In general, you should enable IPv6 if you have users on IPv6 networks who want to access your content. However, if you're using signed URLs or signed cookies to restrict access to your content, and if you're using a custom policy that includes the ``IpAddress`` parameter to restrict the IP addresses that can access your content, don't enable IPv6. If you want to restrict access to some content by IP address and not restrict access to other content (or restrict access but not by IP address), you can create two distributions. For more information, see [Creating a Signed URL Using a Custom Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html) in the *Amazon CloudFront Developer Guide*.
 If you're using an R53AWSIntlong alias resource record set to route traffic to your CloudFront distribution, you need to create a second alias resource record set when both of the following are true:
  +  You enable IPv6 for the distribution
  +  You're using alternate domain names in the URLs for your objects
  
 For more information, see [Routing Traffic to an Amazon CloudFront Web Distribution by Using Your Domain Name](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html) in the *Developer Guide*.
 If you created a CNAME resource record set, either with R53AWSIntlong or with another DNS service, you don't need to make any changes. A CNAME record will route traffic to your distribution regardless of the IP address format of the viewer request.
* **Logging**: [Logging](#logging): A complex type that controls whether access logs are written for the distribution.
 For more information about logging, see [Access Logs](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html) in the *Amazon CloudFront Developer Guide*.
* **OriginGroups**: [OriginGroups](#origingroups): A complex type that contains information about origin groups for this distribution.
* **Origins**: [Origin](#origin)[]: A complex type that contains information about origins for this distribution.
* **PriceClass**: string: The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify ``PriceClass_All``, CloudFront responds to requests for your objects from all CloudFront edge locations.
 If you specify a price class other than ``PriceClass_All``, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.
 For more information about price classes, see [Choosing the Price Class for a CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) in the *Amazon CloudFront Developer Guide*. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see [Amazon CloudFront Pricing](https://docs.aws.amazon.com/cloudfront/pricing/).
* **Restrictions**: [Restrictions](#restrictions): A complex type that identifies ways in which you want to restrict distribution of your content.
* **S3Origin**: [LegacyS3Origin](#legacys3origin)
* **Staging**: bool: A Boolean that indicates whether this is a staging distribution. When this value is ``true``, this is a staging distribution. When this value is ``false``, this is not a staging distribution.
* **ViewerCertificate**: [ViewerCertificate](#viewercertificate): A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
* **WebACLId**: string: A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example ``arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a``. To specify a web ACL created using WAF Classic, use the ACL ID, for example ``473e64fd-f30b-4765-81a0-62ad96dd167a``.
  WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the [Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html).

## EndPoint
### Properties
* **KinesisStreamConfig**: [KinesisStreamConfig](#kinesisstreamconfig) (Required)
* **StreamType**: string (Required)

## ForwardedValues
### Properties
* **Cookies**: [Cookies](#cookies): This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include cookies in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send cookies to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 A complex type that specifies whether you want CloudFront to forward cookies to the origin and, if so, which ones. For more information about forwarding cookies to the origin, see [How CloudFront Forwards, Caches, and Logs Cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html) in the *Amazon CloudFront Developer Guide*.
* **Headers**: string[]: This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include headers in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send headers to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 A complex type that specifies the ``Headers``, if any, that you want CloudFront to forward to the origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches separate versions of a specified object that is based on the header values in viewer requests.
 For more information, see [Caching Content Based on Request Headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html) in the *Amazon CloudFront Developer Guide*.
* **QueryString**: bool (Required): This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 Indicates whether you want CloudFront to forward query strings to the origin that is associated with this cache behavior and cache based on the query string parameters. CloudFront behavior depends on the value of ``QueryString`` and on the values that you specify for ``QueryStringCacheKeys``, if any:
 If you specify true for ``QueryString`` and you don't specify any values for ``QueryStringCacheKeys``, CloudFront forwards all query string parameters to the origin and caches based on all query string parameters. Depending on how many query string parameters and values you have, this can adversely affect performance because CloudFront must forward more requests to the origin.
 If you specify true for ``QueryString`` and you specify one or more values for ``QueryStringCacheKeys``, CloudFront forwards all query string parameters to the origin, but it only caches based on the query string parameters that you specify.
 If you specify false for ``QueryString``, CloudFront doesn't forward any query string parameters to the origin, and doesn't cache based on query string parameters.
 For more information, see [Configuring CloudFront to Cache Based on Query String Parameters](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html) in the *Amazon CloudFront Developer Guide*.
* **QueryStringCacheKeys**: string[]: This field is deprecated. We recommend that you use a cache policy or an origin request policy instead of this field.
 If you want to include query strings in the cache key, use a cache policy. For more information, see [Creating cache policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-key-create-cache-policy) in the *Amazon CloudFront Developer Guide*.
 If you want to send query strings to the origin but not include them in the cache key, use an origin request policy. For more information, see [Creating origin request policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-origin-requests.html#origin-request-create-origin-request-policy) in the *Amazon CloudFront Developer Guide*.
 A complex type that contains information about the query string parameters that you want CloudFront to use for caching for this cache behavior.

## FrameOptions
### Properties
* **FrameOption**: string (Required)
* **Override**: bool (Required)

## FunctionAssociation
### Properties
* **EventType**: string: The event type of the function, either ``viewer-request`` or ``viewer-response``. You cannot use origin-facing event types (``origin-request`` and ``origin-response``) with a CloudFront function.
* **FunctionARN**: string: The Amazon Resource Name (ARN) of the function.

## FunctionConfig
### Properties
* **Comment**: string (Required)
* **KeyValueStoreAssociations**: [KeyValueStoreAssociation](#keyvaluestoreassociation)[]
* **Runtime**: string (Required)

## FunctionMetadata
### Properties
* **FunctionARN**: string (ReadOnly, Identifier)

## GeoRestriction
### Properties
* **Locations**: string[]: A complex type that contains a ``Location`` element for each country in which you want CloudFront either to distribute your content (``whitelist``) or not distribute your content (``blacklist``).
 The ``Location`` element is a two-letter, uppercase country code for a country that you want to include in your ``blacklist`` or ``whitelist``. Include one ``Location`` element for each country.
 CloudFront and ``MaxMind`` both use ``ISO 3166`` country codes. For the current list of countries and the corresponding codes, see ``ISO 3166-1-alpha-2`` code on the *International Organization for Standardization* website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.
* **RestrictionType**: string (Required): The method that you want to use to restrict distribution of your content by country:
  +   ``none``: No geo restriction is enabled, meaning access to content is not restricted by client geo location.
  +   ``blacklist``: The ``Location`` elements specify the countries in which you don't want CloudFront to distribute your content.
  +   ``whitelist``: The ``Location`` elements specify the countries in which you want CloudFront to distribute your content.

## HeadersConfig
### Properties
* **HeaderBehavior**: string (Required)
* **Headers**: string[]

## HeadersConfig
### Properties
* **HeaderBehavior**: string (Required)
* **Headers**: string[]

## ImportSource
### Properties
* **SourceArn**: string (Required)
* **SourceType**: string (Required)

## KeyGroupConfig
### Properties
* **Comment**: string
* **Items**: string[] (Required)
* **Name**: string (Required)

## KeyValueStoreAssociation
### Properties
* **KeyValueStoreARN**: string (Required)

## KinesisStreamConfig
### Properties
* **RoleArn**: string (Required)
* **StreamArn**: string (Required)

## LambdaFunctionAssociation
### Properties
* **EventType**: string: Specifies the event type that triggers a Lambda@Edge function invocation. You can specify the following values:
  +   ``viewer-request``: The function executes when CloudFront receives a request from a viewer and before it checks to see whether the requested object is in the edge cache.
  +   ``origin-request``: The function executes only when CloudFront sends a request to your origin. When the requested object is in the edge cache, the function doesn't execute.
  +   ``origin-response``: The function executes after CloudFront receives a response from the origin and before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.
  +   ``viewer-response``: The function executes before CloudFront returns the requested object to the viewer. The function executes regardless of whether the object was already in the edge cache.
 If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.
* **IncludeBody**: bool: A flag that allows a Lambda@Edge function to have read access to the body content. For more information, see [Accessing the Request Body by Choosing the Include Body Option](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html) in the Amazon CloudFront Developer Guide.
* **LambdaFunctionARN**: string: The ARN of the Lambda@Edge function. You must specify the ARN of a function version; you can't specify an alias or $LATEST.

## LegacyCustomOrigin
### Properties
* **DNSName**: string (Required)
* **HTTPPort**: int
* **HTTPSPort**: int
* **OriginProtocolPolicy**: string (Required)
* **OriginSSLProtocols**: string[] (Required)

## LegacyS3Origin
### Properties
* **DNSName**: string (Required)
* **OriginAccessIdentity**: string

## Logging
### Properties
* **Bucket**: string (Required): The Amazon S3 bucket to store the access logs in, for example, ``myawslogbucket.s3.amazonaws.com``.
* **IncludeCookies**: bool: Specifies whether you want CloudFront to include cookies in access logs, specify ``true`` for ``IncludeCookies``. If you choose to include cookies in logs, CloudFront logs all cookies regardless of how you configure the cache behaviors for this distribution. If you don't want to include cookies when you create a distribution or if you want to disable include cookies for an existing distribution, specify ``false`` for ``IncludeCookies``.
* **Prefix**: string: An optional string that you want CloudFront to prefix to the access log ``filenames`` for this distribution, for example, ``myprefix/``. If you want to enable logging, but you don't want to specify a prefix, you still must include an empty ``Prefix`` element in the ``Logging`` element.

## Origin
### Properties
* **ConnectionAttempts**: int: The number of times that CloudFront attempts to connect to the origin. The minimum number is 1, the maximum is 3, and the default (if you don't specify otherwise) is 3.
 For a custom origin (including an Amazon S3 bucket that's configured with static website hosting), this value also specifies the number of times that CloudFront attempts to get a response from the origin, in the case of an [Origin Response Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout).
 For more information, see [Origin Connection Attempts](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-attempts) in the *Amazon CloudFront Developer Guide*.
* **ConnectionTimeout**: int: The number of seconds that CloudFront waits when trying to establish a connection to the origin. The minimum timeout is 1 second, the maximum is 10 seconds, and the default (if you don't specify otherwise) is 10 seconds.
 For more information, see [Origin Connection Timeout](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#origin-connection-timeout) in the *Amazon CloudFront Developer Guide*.
* **CustomOriginConfig**: [CustomOriginConfig](#customoriginconfig): Use this type to specify an origin that is not an Amazon S3 bucket, with one exception. If the Amazon S3 bucket is configured with static website hosting, use this type. If the Amazon S3 bucket is not configured with static website hosting, use the ``S3OriginConfig`` type instead.
* **DomainName**: string (Required): The domain name for the origin.
 For more information, see [Origin Domain Name](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName) in the *Amazon CloudFront Developer Guide*.
* **Id**: string (Required, Identifier): A unique identifier for the origin. This value must be unique within the distribution.
 Use this value to specify the ``TargetOriginId`` in a ``CacheBehavior`` or ``DefaultCacheBehavior``.
* **OriginAccessControlId**: string: The unique identifier of an origin access control for this origin.
 For more information, see [Restricting access to an Amazon S3 origin](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) in the *Amazon CloudFront Developer Guide*.
* **OriginCustomHeaders**: [OriginCustomHeader](#origincustomheader)[]: A list of HTTP header names and values that CloudFront adds to the requests that it sends to the origin.
 For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/add-origin-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
* **OriginPath**: string: An optional path that CloudFront appends to the origin domain name when CloudFront requests content from the origin.
 For more information, see [Origin Path](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginPath) in the *Amazon CloudFront Developer Guide*.
* **OriginShield**: [OriginShield](#originshield): CloudFront Origin Shield. Using Origin Shield can help reduce the load on your origin.
 For more information, see [Using Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html) in the *Amazon CloudFront Developer Guide*.
* **S3OriginConfig**: [S3OriginConfig](#s3originconfig): Use this type to specify an origin that is an Amazon S3 bucket that is not configured with static website hosting. To specify any other type of origin, including an Amazon S3 bucket that is configured with static website hosting, use the ``CustomOriginConfig`` type instead.

## OriginAccessControlConfig
### Properties
* **Description**: string
* **Name**: string (Required)
* **OriginAccessControlOriginType**: string (Required)
* **SigningBehavior**: string (Required)
* **SigningProtocol**: string (Required)

## OriginCustomHeader
### Properties
* **HeaderName**: string (Required): The name of a header that you want CloudFront to send to your origin. For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
* **HeaderValue**: string (Required): The value for the header that you specified in the ``HeaderName`` field.

## OriginGroup
### Properties
* **FailoverCriteria**: [OriginGroupFailoverCriteria](#origingroupfailovercriteria) (Required): A complex type that contains information about the failover criteria for an origin group.
* **Id**: string (Required, Identifier): The origin group's ID.
* **Members**: [OriginGroupMembers](#origingroupmembers) (Required): A complex type that contains information about the origins in an origin group.

## OriginGroupFailoverCriteria
### Properties
* **StatusCodes**: [StatusCodes](#statuscodes) (Required): The status codes that, when returned from the primary origin, will trigger CloudFront to failover to the second origin.

## OriginGroupMember
### Properties
* **OriginId**: string (Required): The ID for an origin in an origin group.

## OriginGroupMembers
### Properties
* **Items**: [OriginGroupMember](#origingroupmember)[] (Required): Items (origins) in an origin group.
* **Quantity**: int (Required): The number of origins in an origin group.

## OriginGroups
### Properties
* **Items**: [OriginGroup](#origingroup)[]: The items (origin groups) in a distribution.
* **Quantity**: int (Required): The number of origin groups.

## OriginRequestPolicyConfig
### Properties
* **Comment**: string
* **CookiesConfig**: [CookiesConfig](#cookiesconfig) (Required)
* **HeadersConfig**: [HeadersConfig](#headersconfig) (Required)
* **Name**: string (Required)
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig) (Required)

## OriginShield
### Properties
* **Enabled**: bool: A flag that specifies whether Origin Shield is enabled.
 When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.
* **OriginShieldRegion**: string: The AWS-Region for Origin Shield.
 Specify the AWS-Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as ``us-east-2``.
 When you enable CloudFront Origin Shield, you must specify the AWS-Region for Origin Shield. For the list of AWS-Regions that you can specify, and for help choosing the best Region for your origin, see [Choosing the for Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the *Amazon CloudFront Developer Guide*.

## ParametersInCacheKeyAndForwardedToOrigin
### Properties
* **CookiesConfig**: [CookiesConfig](#cookiesconfig) (Required)
* **EnableAcceptEncodingBrotli**: bool
* **EnableAcceptEncodingGzip**: bool (Required)
* **HeadersConfig**: [HeadersConfig](#headersconfig) (Required)
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig) (Required)

## PublicKeyConfig
### Properties
* **CallerReference**: string (Required)
* **Comment**: string
* **EncodedKey**: string (Required)
* **Name**: string (Required)

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string (Required)
* **QueryStrings**: string[]

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string (Required)
* **QueryStrings**: string[]

## ReferrerPolicy
### Properties
* **Override**: bool (Required)
* **ReferrerPolicy**: string (Required)

## RemoveHeader
### Properties
* **Header**: string (Required)

## RemoveHeadersConfig
### Properties
* **Items**: [RemoveHeader](#removeheader)[] (Required)

## ResponseHeadersPolicyConfig
### Properties
* **Comment**: string
* **CorsConfig**: [CorsConfig](#corsconfig)
* **CustomHeadersConfig**: [CustomHeadersConfig](#customheadersconfig)
* **Name**: string (Required)
* **RemoveHeadersConfig**: [RemoveHeadersConfig](#removeheadersconfig)
* **SecurityHeadersConfig**: [SecurityHeadersConfig](#securityheadersconfig)
* **ServerTimingHeadersConfig**: [ServerTimingHeadersConfig](#servertimingheadersconfig)

## Restrictions
### Properties
* **GeoRestriction**: [GeoRestriction](#georestriction) (Required): A complex type that controls the countries in which your content is distributed. CF determines the location of your users using ``MaxMind`` GeoIP databases. To disable geo restriction, remove the [Restrictions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.

## S3OriginConfig
### Properties
* **OriginAccessIdentity**: string: The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can *only* access objects in an Amazon S3 bucket through CloudFront. The format of the value is:
 origin-access-identity/cloudfront/*ID-of-origin-access-identity* 
 where ``ID-of-origin-access-identity`` is the value that CloudFront returned in the ``ID`` element when you created the origin access identity.
 If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty ``OriginAccessIdentity`` element.
 To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty ``OriginAccessIdentity`` element.
 To replace the origin access identity, update the distribution configuration and specify the new origin access identity.
 For more information about the origin access identity, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.

## SecurityHeadersConfig
### Properties
* **ContentSecurityPolicy**: [ContentSecurityPolicy](#contentsecuritypolicy)
* **ContentTypeOptions**: [ContentTypeOptions](#contenttypeoptions)
* **FrameOptions**: [FrameOptions](#frameoptions)
* **ReferrerPolicy**: [ReferrerPolicy](#referrerpolicy)
* **StrictTransportSecurity**: [StrictTransportSecurity](#stricttransportsecurity)
* **XSSProtection**: [XSSProtection](#xssprotection)

## ServerTimingHeadersConfig
### Properties
* **Enabled**: bool (Required)
* **SamplingRate**: int

## SessionStickinessConfig
### Properties
* **IdleTTL**: int (Required)
* **MaximumTTL**: int (Required)

## SingleHeaderConfig
### Properties
* **Header**: string (Required)
* **Value**: string (Required)

## SingleWeightConfig
### Properties
* **SessionStickinessConfig**: [SessionStickinessConfig](#sessionstickinessconfig)
* **Weight**: int (Required)

## StatusCodes
### Properties
* **Items**: int[] (Required): The items (status codes) for an origin group.
* **Quantity**: int (Required): The number of status codes.

## StrictTransportSecurity
### Properties
* **AccessControlMaxAgeSec**: int (Required)
* **IncludeSubdomains**: bool
* **Override**: bool (Required)
* **Preload**: bool

## Tag
### Properties
* **Key**: string (Required): A string that contains ``Tag`` key.
 The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
* **Value**: string (Required): A string that contains an optional ``Tag`` value.
 The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.

## TrafficConfig
### Properties
* **SingleHeaderConfig**: [SingleHeaderConfig](#singleheaderconfig)
* **SingleWeightConfig**: [SingleWeightConfig](#singleweightconfig)
* **Type**: string (Required)

## ViewerCertificate
### Properties
* **AcmCertificateArn**: string: In CloudFormation, this field name is ``AcmCertificateArn``. Note the different capitalization.
  If the distribution uses ``Aliases`` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [(ACM)](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html), provide the Amazon Resource Name (ARN) of the ACM certificate. CloudFront only supports ACM certificates in the US East (N. Virginia) Region (``us-east-1``).
 If you specify an ACM certificate ARN, you must also specify values for ``MinimumProtocolVersion`` and ``SSLSupportMethod``. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
* **CloudFrontDefaultCertificate**: bool: If the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net``, set this field to ``true``.
 If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), omit this field and specify values for the following fields:
  +   ``AcmCertificateArn`` or ``IamCertificateId`` (specify a value for one, not both) 
  +   ``MinimumProtocolVersion`` 
  +   ``SslSupportMethod``
* **IamCertificateId**: string: In CloudFormation, this field name is ``IamCertificateId``. Note the different capitalization.
  If the distribution uses ``Aliases`` (alternate domain names or CNAMEs) and the SSL/TLS certificate is stored in [(IAM)](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_server-certs.html), provide the ID of the IAM certificate.
 If you specify an IAM certificate ID, you must also specify values for ``MinimumProtocolVersion`` and ``SSLSupportMethod``. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
* **MinimumProtocolVersion**: string: If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), specify the security policy that you want CloudFront to use for HTTPS connections with viewers. The security policy determines two settings:
  +  The minimum SSL/TLS protocol that CloudFront can use to communicate with viewers.
  +  The ciphers that CloudFront can use to encrypt the content that it returns to viewers.
  
 For more information, see [Security Policy](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValues-security-policy) and [Supported Protocols and Ciphers Between Viewers and CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers) in the *Amazon CloudFront Developer Guide*.
  On the CloudFront console, this setting is called *Security Policy*.
  When you're using SNI only (you set ``SSLSupportMethod`` to ``sni-only``), you must specify ``TLSv1`` or higher. (In CloudFormation, the field name is ``SslSupportMethod``. Note the different capitalization.)
 If the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net`` (you set ``CloudFrontDefaultCertificate`` to ``true``), CloudFront automatically sets the security policy to ``TLSv1`` regardless of the value that you set here.
* **SslSupportMethod**: string: In CloudFormation, this field name is ``SslSupportMethod``. Note the different capitalization.
  If the distribution uses ``Aliases`` (alternate domain names or CNAMEs), specify which viewers the distribution accepts HTTPS connections from.
  +   ``sni-only`` ? The distribution accepts HTTPS connections from only viewers that support [server name indication (SNI)](https://docs.aws.amazon.com/https://en.wikipedia.org/wiki/Server_Name_Indication). This is recommended. Most browsers and clients support SNI.
  +   ``vip`` ? The distribution accepts HTTPS connections from all viewers including those that don't support SNI. This is not recommended, and results in additional monthly charges from CloudFront.
  +   ``static-ip`` - Do not specify this value unless your distribution has been enabled for this feature by the CloudFront team. If you have a use case that requires static IP addresses for a distribution, contact CloudFront through the [Center](https://docs.aws.amazon.com/support/home).
  
 If the distribution uses the CloudFront domain name such as ``d111111abcdef8.cloudfront.net``, don't set a value for this field.

## XSSProtection
### Properties
* **ModeBlock**: bool
* **Override**: bool (Required)
* **Protection**: bool (Required)
* **ReportUri**: string

