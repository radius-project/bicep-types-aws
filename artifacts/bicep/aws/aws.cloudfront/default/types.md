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
* **Items**: string[] (Required): The list of HTTP header names. You can specify ``*`` to allow all headers.

## AccessControlAllowMethods
### Properties
* **Items**: string[] (Required): The list of HTTP methods. Valid values are:
  +   ``GET`` 
  +   ``DELETE`` 
  +   ``HEAD`` 
  +   ``OPTIONS`` 
  +   ``PATCH`` 
  +   ``POST`` 
  +   ``PUT`` 
  +   ``ALL`` 
  
  ``ALL`` is a special value that includes all of the listed HTTP methods.

## AccessControlAllowOrigins
### Properties
* **Items**: string[] (Required): The list of origins (domain names). You can specify ``*`` to allow all origins.

## AccessControlExposeHeaders
### Properties
* **Items**: string[] (Required): The list of HTTP headers. You can specify ``*`` to expose all headers.

## AWS.CloudFront/CachePolicyProperties
### Properties
* **CachePolicyConfig**: [CachePolicyConfig](#cachepolicyconfig) (Required): The cache policy configuration.
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)

## AWS.CloudFront/CloudFrontOriginAccessIdentityProperties
### Properties
* **CloudFrontOriginAccessIdentityConfig**: [CloudFrontOriginAccessIdentityConfig](#cloudfrontoriginaccessidentityconfig) (Required): The current configuration information for the identity.
* **Id**: string (ReadOnly, Identifier)
* **S3CanonicalUserId**: string (ReadOnly)

## AWS.CloudFront/ContinuousDeploymentPolicyProperties
### Properties
* **ContinuousDeploymentPolicyConfig**: [ContinuousDeploymentPolicyConfig](#continuousdeploymentpolicyconfig) (Required): Contains the configuration for a continuous deployment policy.
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
* **AutoPublish**: bool (WriteOnly): A flag that determines whether to automatically publish the function to the ``LIVE`` stage when it?s created. To automatically publish to the ``LIVE`` stage, set this property to ``true``.
* **FunctionARN**: string (ReadOnly, Identifier)
* **FunctionCode**: string (Required): The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the *Amazon CloudFront Developer Guide*.
* **FunctionConfig**: [FunctionConfig](#functionconfig) (Required): Contains configuration information about a CloudFront function.
* **FunctionMetadata**: [FunctionMetadata](#functionmetadata): Contains metadata about a CloudFront function.
* **Name**: string (Required): A name to identify the function.
* **Stage**: string (ReadOnly)

## AWS.CloudFront/KeyGroupProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **KeyGroupConfig**: [KeyGroupConfig](#keygroupconfig) (Required): The key group configuration.
* **LastModifiedTime**: string (ReadOnly)

## AWS.CloudFront/KeyValueStoreProperties
### Properties
* **Arn**: string (ReadOnly)
* **Comment**: string: A comment for the key value store.
* **Id**: string (ReadOnly)
* **ImportSource**: [ImportSource](#importsource) (WriteOnly): The import source for the key value store.
* **Name**: string (Required, Identifier): The name of the key value store.
* **Status**: string (ReadOnly)

## AWS.CloudFront/OriginAccessControlProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **OriginAccessControlConfig**: [OriginAccessControlConfig](#originaccesscontrolconfig) (Required): The origin access control.

## AWS.CloudFront/OriginRequestPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)
* **OriginRequestPolicyConfig**: [OriginRequestPolicyConfig](#originrequestpolicyconfig) (Required): The origin request policy configuration.

## AWS.CloudFront/PublicKeyProperties
### Properties
* **CreatedTime**: string (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **PublicKeyConfig**: [PublicKeyConfig](#publickeyconfig) (Required): Configuration information about a public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).

## AWS.CloudFront/RealtimeLogConfigProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **EndPoints**: [EndPoint](#endpoint)[] (Required): Contains information about the Amazon Kinesis data stream where you are sending real-time log data for this real-time log configuration.
* **Fields**: string[] (Required): A list of fields that are included in each real-time log record. In an API response, the fields are provided in the same order in which they are sent to the Amazon Kinesis data stream.
 For more information about fields, see [Real-time log configuration fields](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-fields) in the *Amazon CloudFront Developer Guide*.
* **Name**: string (Required): The unique name of this real-time log configuration.
* **SamplingRate**: int (Required): The sampling rate for this real-time log configuration. The sampling rate determines the percentage of viewer requests that are represented in the real-time log data. The sampling rate is an integer between 1 and 100, inclusive.

## AWS.CloudFront/ResponseHeadersPolicyProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **LastModifiedTime**: string (ReadOnly)
* **ResponseHeadersPolicyConfig**: [ResponseHeadersPolicyConfig](#responseheaderspolicyconfig) (Required): A response headers policy configuration.

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
* **GrpcConfig**: [GrpcConfig](#grpcconfig): The gRPC configuration for your cache behavior.
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
* **Comment**: string: A comment to describe the cache policy. The comment cannot be longer than 128 characters.
* **DefaultTTL**: int (Required): The default amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value as the object's time to live (TTL) only when the origin does *not* send ``Cache-Control`` or ``Expires`` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
 The default value for this field is 86400 seconds (one day). If the value of ``MinTTL`` is more than 86400 seconds, then the default value for this field is the same as the value of ``MinTTL``.
* **MaxTTL**: int (Required): The maximum amount of time, in seconds, that objects stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. CloudFront uses this value only when the origin sends ``Cache-Control`` or ``Expires`` headers with the object. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
 The default value for this field is 31536000 seconds (one year). If the value of ``MinTTL`` or ``DefaultTTL`` is more than 31536000 seconds, then the default value for this field is the same as the value of ``DefaultTTL``.
* **MinTTL**: int (Required): The minimum amount of time, in seconds, that you want objects to stay in the CloudFront cache before CloudFront sends another request to the origin to see if the object has been updated. For more information, see [Managing How Long Content Stays in an Edge Cache (Expiration)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html) in the *Amazon CloudFront Developer Guide*.
* **Name**: string (Required): A unique name to identify the cache policy.
* **ParametersInCacheKeyAndForwardedToOrigin**: [ParametersInCacheKeyAndForwardedToOrigin](#parametersincachekeyandforwardedtoorigin) (Required): The HTTP headers, cookies, and URL query strings to include in the cache key. The values included in the cache key are also included in requests that CloudFront sends to the origin.

## CloudFrontOriginAccessIdentityConfig
### Properties
* **Comment**: string (Required): A comment to describe the origin access identity. The comment cannot be longer than 128 characters.

## ContentSecurityPolicy
### Properties
* **ContentSecurityPolicy**: string (Required): The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
 For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides the ``Content-Security-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.

## ContentTypeOptions
### Properties
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides the ``X-Content-Type-Options`` HTTP response header received from the origin with the one specified in this response headers policy.

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
* **Enabled**: bool (Required): A Boolean that indicates whether this continuous deployment policy is enabled (in effect). When this value is ``true``, this policy is enabled and in effect. When this value is ``false``, this policy is not enabled and has no effect.
* **SingleHeaderPolicyConfig**: [ContinuousDeploymentPolicy_SingleHeaderPolicyConfig](#continuousdeploymentpolicysingleheaderpolicyconfig): This configuration determines which HTTP requests are sent to the staging distribution. If the HTTP request contains a header and value that matches what you specify here, the request is sent to the staging distribution. Otherwise the request is sent to the primary distribution.
* **SingleWeightPolicyConfig**: [ContinuousDeploymentPolicy_SingleWeightPolicyConfig](#continuousdeploymentpolicysingleweightpolicyconfig): This configuration determines the percentage of HTTP requests that are sent to the staging distribution.
* **StagingDistributionDnsNames**: string[] (Required): The CloudFront domain name of the staging distribution. For example: ``d111111abcdef8.cloudfront.net``.
* **TrafficConfig**: [TrafficConfig](#trafficconfig): Contains the parameters for routing production traffic from your primary to staging distributions.
* **Type**: string: The type of traffic configuration.

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
* **CookieBehavior**: string (Required): Determines whether any cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
  +   ``none`` ? No cookies in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any cookies that are listed in an ``OriginRequestPolicy`` *are* included in origin requests.
  +   ``whitelist`` ? Only the cookies in viewer requests that are listed in the ``CookieNames`` type are included in the cache key and in requests that CloudFront sends to the origin.
  +   ``allExcept`` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* for those that are listed in the ``CookieNames`` type, which are not included.
  +   ``all`` ? All cookies in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.
* **Cookies**: string[]: Contains a list of cookie names.

## CookiesConfig
### Properties
* **CookieBehavior**: string (Required): Determines whether cookies in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
  +   ``none`` ? No cookies in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any cookies that are listed in a ``CachePolicy`` *are* included in origin requests.
  +   ``whitelist`` ? Only the cookies in viewer requests that are listed in the ``CookieNames`` type are included in requests that CloudFront sends to the origin.
  +   ``all`` ? All cookies in viewer requests are included in requests that CloudFront sends to the origin.
  +   ``allExcept`` ? All cookies in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the ``CookieNames`` type, which are not included.
* **Cookies**: string[]: Contains a list of cookie names.

## CorsConfig
### Properties
* **AccessControlAllowCredentials**: bool (Required): A Boolean that CloudFront uses as the value for the ``Access-Control-Allow-Credentials`` HTTP response header.
 For more information about the ``Access-Control-Allow-Credentials`` HTTP response header, see [Access-Control-Allow-Credentials](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials) in the MDN Web Docs.
* **AccessControlAllowHeaders**: [AccessControlAllowHeaders](#accesscontrolallowheaders) (Required): A list of HTTP header names that CloudFront includes as values for the ``Access-Control-Allow-Headers`` HTTP response header.
 For more information about the ``Access-Control-Allow-Headers`` HTTP response header, see [Access-Control-Allow-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers) in the MDN Web Docs.
* **AccessControlAllowMethods**: [AccessControlAllowMethods](#accesscontrolallowmethods) (Required): A list of HTTP methods that CloudFront includes as values for the ``Access-Control-Allow-Methods`` HTTP response header.
 For more information about the ``Access-Control-Allow-Methods`` HTTP response header, see [Access-Control-Allow-Methods](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods) in the MDN Web Docs.
* **AccessControlAllowOrigins**: [AccessControlAllowOrigins](#accesscontrolalloworigins) (Required): A list of origins (domain names) that CloudFront can use as the value for the ``Access-Control-Allow-Origin`` HTTP response header.
 For more information about the ``Access-Control-Allow-Origin`` HTTP response header, see [Access-Control-Allow-Origin](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin) in the MDN Web Docs.
* **AccessControlExposeHeaders**: [AccessControlExposeHeaders](#accesscontrolexposeheaders): A list of HTTP headers that CloudFront includes as values for the ``Access-Control-Expose-Headers`` HTTP response header.
 For more information about the ``Access-Control-Expose-Headers`` HTTP response header, see [Access-Control-Expose-Headers](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers) in the MDN Web Docs.
* **AccessControlMaxAgeSec**: int: A number that CloudFront uses as the value for the ``Access-Control-Max-Age`` HTTP response header.
 For more information about the ``Access-Control-Max-Age`` HTTP response header, see [Access-Control-Max-Age](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age) in the MDN Web Docs.
* **OriginOverride**: bool (Required): A Boolean that determines whether CloudFront overrides HTTP response headers received from the origin with the ones specified in this response headers policy.

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
* **Header**: string (Required): The HTTP response header name.
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides a response header with the same name received from the origin with the header specified here.
* **Value**: string (Required): The value for the HTTP response header.

## CustomHeadersConfig
### Properties
* **Items**: [CustomHeader](#customheader)[] (Required): The list of HTTP response headers and their values.

## CustomOriginConfig
### Properties
* **HTTPPort**: int: The HTTP port that CloudFront uses to connect to the origin. Specify the HTTP port that the origin listens on.
* **HTTPSPort**: int: The HTTPS port that CloudFront uses to connect to the origin. Specify the HTTPS port that the origin listens on.
* **OriginKeepaliveTimeout**: int: Specifies how long, in seconds, CloudFront persists its connection to the origin. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 5 seconds.
 For more information, see [Keep-alive timeout (custom origins only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginKeepaliveTimeout) in the *Amazon CloudFront Developer Guide*.
* **OriginProtocolPolicy**: string (Required): Specifies the protocol (HTTP or HTTPS) that CloudFront uses to connect to the origin. Valid values are:
  +   ``http-only`` ? CloudFront always uses HTTP to connect to the origin.
  +   ``match-viewer`` ? CloudFront connects to the origin using the same protocol that the viewer used to connect to CloudFront.
  +   ``https-only`` ? CloudFront always uses HTTPS to connect to the origin.
* **OriginReadTimeout**: int: Specifies how long, in seconds, CloudFront waits for a response from the origin. This is also known as the *origin response timeout*. The minimum timeout is 1 second, the maximum is 60 seconds, and the default (if you don't specify otherwise) is 30 seconds.
 For more information, see [Response timeout (custom origins only)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginResponseTimeout) in the *Amazon CloudFront Developer Guide*.
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
* **FunctionAssociations**: [FunctionAssociation](#functionassociation)[]: A list of CloudFront functions that are associated with this cache behavior. Your functions must be published to the ``LIVE`` stage to associate them with a cache behavior.
* **GrpcConfig**: [GrpcConfig](#grpcconfig): The gRPC configuration for your cache behavior.
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
* **AnycastIpListId**: string
* **CacheBehaviors**: [CacheBehavior](#cachebehavior)[]: A complex type that contains zero or more ``CacheBehavior`` elements.
* **CNAMEs**: string[]: An alias for the CF distribution's domain name.
  This property is legacy. We recommend that you use [Aliases](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-aliases) instead.
* **Comment**: string: A comment to describe the distribution. The comment cannot be longer than 128 characters.
* **ContinuousDeploymentPolicyId**: string: The identifier of a continuous deployment policy. For more information, see ``CreateContinuousDeploymentPolicy``.
* **CustomErrorResponses**: [CustomErrorResponse](#customerrorresponse)[]: A complex type that controls the following:
  +  Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error messages before returning the response to the viewer.
  +  How long CloudFront caches HTTP status codes in the 4xx and 5xx range.
  
 For more information about custom error pages, see [Customizing Error Responses](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html) in the *Amazon CloudFront Developer Guide*.
* **CustomOrigin**: [LegacyCustomOrigin](#legacycustomorigin): The user-defined HTTP server that serves as the origin for content that CF distributes.
  This property is legacy. We recommend that you use [Origin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.
* **DefaultCacheBehavior**: [DefaultCacheBehavior](#defaultcachebehavior) (Required): A complex type that describes the default cache behavior if you don't specify a ``CacheBehavior`` element or if files don't match any of the values of ``PathPattern`` in ``CacheBehavior`` elements. You must create exactly one default cache behavior.
* **DefaultRootObject**: string: When a viewer requests the root URL for your distribution, the default root object is the object that you want CloudFront to request from your origin. For example, if your root URL is ``https://www.example.com``, you can specify CloudFront to return the ``index.html`` file as the default root object. You can specify a default root object so that viewers see a specific file or object, instead of another object in your distribution (for example, ``https://www.example.com/product-description.html``). A default root object avoids exposing the contents of your distribution.
 You can specify the object name or a path to the object name (for example, ``index.html`` or ``exampleFolderName/index.html``). Your string can't begin with a forward slash (``/``). Only specify the object name or the path to the object.
 If you don't want to specify a default root object when you create a distribution, include an empty ``DefaultRootObject`` element.
 To delete the default root object from an existing distribution, update the distribution configuration and include an empty ``DefaultRootObject`` element.
 To replace the default root object, update the distribution configuration and specify the new object.
 For more information about the default root object, see [Specify a default root object](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html) in the *Amazon CloudFront Developer Guide*.
* **Enabled**: bool (Required): From this field, you can enable or disable the selected distribution.
* **HttpVersion**: string: (Optional) Specify the HTTP version(s) that you want viewers to use to communicate with CF. The default value for new distributions is ``http1.1``.
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
 Specify a value for either the ``Origins`` or ``OriginGroups`` property.
* **Origins**: [Origin](#origin)[]: A complex type that contains information about origins for this distribution.
 Specify a value for either the ``Origins`` or ``OriginGroups`` property.
* **PriceClass**: string: The price class that corresponds with the maximum price that you want to pay for CloudFront service. If you specify ``PriceClass_All``, CloudFront responds to requests for your objects from all CloudFront edge locations.
 If you specify a price class other than ``PriceClass_All``, CloudFront serves your objects from the CloudFront edge location that has the lowest latency among the edge locations in your price class. Viewers who are in or near regions that are excluded from your specified price class may encounter slower performance.
 For more information about price classes, see [Choosing the Price Class for a CloudFront Distribution](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html) in the *Amazon CloudFront Developer Guide*. For information about CloudFront pricing, including how price classes (such as Price Class 100) map to CloudFront regions, see [Amazon CloudFront Pricing](https://docs.aws.amazon.com/cloudfront/pricing/).
* **Restrictions**: [Restrictions](#restrictions): A complex type that identifies ways in which you want to restrict distribution of your content.
* **S3Origin**: [LegacyS3Origin](#legacys3origin): The origin as an S3 bucket.
  This property is legacy. We recommend that you use [Origin](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-origin.html) instead.
* **Staging**: bool: A Boolean that indicates whether this is a staging distribution. When this value is ``true``, this is a staging distribution. When this value is ``false``, this is not a staging distribution.
* **ViewerCertificate**: [ViewerCertificate](#viewercertificate): A complex type that determines the distribution's SSL/TLS configuration for communicating with viewers.
* **WebACLId**: string: A unique identifier that specifies the WAF web ACL, if any, to associate with this distribution. To specify a web ACL created using the latest version of WAF, use the ACL ARN, for example ``arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/a1b2c3d4-5678-90ab-cdef-EXAMPLE11111``. To specify a web ACL created using WAF Classic, use the ACL ID, for example ``a1b2c3d4-5678-90ab-cdef-EXAMPLE11111``.
  WAF is a web application firewall that lets you monitor the HTTP and HTTPS requests that are forwarded to CloudFront, and lets you control access to your content. Based on conditions that you specify, such as the IP addresses that requests originate from or the values of query strings, CloudFront responds to requests either with the requested content or with an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page when a request is blocked. For more information about WAF, see the [Developer Guide](https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html).

## EndPoint
### Properties
* **KinesisStreamConfig**: [KinesisStreamConfig](#kinesisstreamconfig) (Required): Contains information about the Amazon Kinesis data stream where you are sending real-time log data.
* **StreamType**: string (Required): The type of data stream where you are sending real-time log data. The only valid value is ``Kinesis``.

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
* **FrameOption**: string (Required): The value of the ``X-Frame-Options`` HTTP response header. Valid values are ``DENY`` and ``SAMEORIGIN``.
 For more information about these values, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides the ``X-Frame-Options`` HTTP response header received from the origin with the one specified in this response headers policy.

## FunctionAssociation
### Properties
* **EventType**: string: The event type of the function, either ``viewer-request`` or ``viewer-response``. You cannot use origin-facing event types (``origin-request`` and ``origin-response``) with a CloudFront function.
* **FunctionARN**: string: The Amazon Resource Name (ARN) of the function.

## FunctionConfig
### Properties
* **Comment**: string (Required): A comment to describe the function.
* **KeyValueStoreAssociations**: [KeyValueStoreAssociation](#keyvaluestoreassociation)[]: The configuration for the key value store associations.
* **Runtime**: string (Required): The function's runtime environment version.

## FunctionMetadata
### Properties
* **FunctionARN**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.

## GeoRestriction
### Properties
* **Locations**: string[]: A complex type that contains a ``Location`` element for each country in which you want CloudFront either to distribute your content (``whitelist``) or not distribute your content (``blacklist``).
 The ``Location`` element is a two-letter, uppercase country code for a country that you want to include in your ``blacklist`` or ``whitelist``. Include one ``Location`` element for each country.
 CloudFront and ``MaxMind`` both use ``ISO 3166`` country codes. For the current list of countries and the corresponding codes, see ``ISO 3166-1-alpha-2`` code on the *International Organization for Standardization* website. You can also refer to the country list on the CloudFront console, which includes both country names and codes.
* **RestrictionType**: string (Required): The method that you want to use to restrict distribution of your content by country:
  +   ``none``: No geo restriction is enabled, meaning access to content is not restricted by client geo location.
  +   ``blacklist``: The ``Location`` elements specify the countries in which you don't want CloudFront to distribute your content.
  +   ``whitelist``: The ``Location`` elements specify the countries in which you want CloudFront to distribute your content.

## GrpcConfig
### Properties
* **Enabled**: bool (Required): Enables your CloudFront distribution to receive gRPC requests and to proxy them directly to your origins.

## HeadersConfig
### Properties
* **HeaderBehavior**: string (Required): Determines whether any HTTP headers are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
  +   ``none`` ? No HTTP headers are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any headers that are listed in an ``OriginRequestPolicy`` *are* included in origin requests.
  +   ``whitelist`` ? Only the HTTP headers that are listed in the ``Headers`` type are included in the cache key and in requests that CloudFront sends to the origin.
* **Headers**: string[]: Contains a list of HTTP header names.

## HeadersConfig
### Properties
* **HeaderBehavior**: string (Required): Determines whether any HTTP headers are included in requests that CloudFront sends to the origin. Valid values are:
  +   ``none`` ? No HTTP headers in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any headers that are listed in a ``CachePolicy`` *are* included in origin requests.
  +   ``whitelist`` ? Only the HTTP headers that are listed in the ``Headers`` type are included in requests that CloudFront sends to the origin.
  +   ``allViewer`` ? All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin.
  +   ``allViewerAndWhitelistCloudFront`` ? All HTTP headers in viewer requests and the additional CloudFront headers that are listed in the ``Headers`` type are included in requests that CloudFront sends to the origin. The additional headers are added by CloudFront.
  +   ``allExcept`` ? All HTTP headers in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the ``Headers`` type, which are not included.
* **Headers**: string[]: Contains a list of HTTP header names.

## ImportSource
### Properties
* **SourceArn**: string (Required): The Amazon Resource Name (ARN) of the import source for the key value store.
* **SourceType**: string (Required): The source type of the import source for the key value store.

## KeyGroupConfig
### Properties
* **Comment**: string: A comment to describe the key group. The comment cannot be longer than 128 characters.
* **Items**: string[] (Required): A list of the identifiers of the public keys in the key group.
* **Name**: string (Required): A name to identify the key group.

## KeyValueStoreAssociation
### Properties
* **KeyValueStoreARN**: string (Required): The Amazon Resource Name (ARN) of the key value store association.

## KinesisStreamConfig
### Properties
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAMlong (IAM) role that CloudFront can use to send real-time log data to your Kinesis data stream.
 For more information the IAM role, see [Real-time log configuration IAM role](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/real-time-logs.html#understand-real-time-log-config-iam-role) in the *Amazon CloudFront Developer Guide*.
* **StreamArn**: string (Required): The Amazon Resource Name (ARN) of the Kinesis data stream where you are sending real-time log data.

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
* **DNSName**: string (Required): The domain name assigned to your CF distribution.
* **HTTPPort**: int: The HTTP port that CF uses to connect to the origin. Specify the HTTP port that the origin listens on.
* **HTTPSPort**: int: The HTTPS port that CF uses to connect to the origin. Specify the HTTPS port that the origin listens on.
* **OriginProtocolPolicy**: string (Required): Specifies the protocol (HTTP or HTTPS) that CF uses to connect to the origin.
* **OriginSSLProtocols**: string[] (Required): The minimum SSL/TLS protocol version that CF uses when communicating with your origin server over HTTPs.
 For more information, see [Minimum Origin SSL Protocol](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesOriginSSLProtocols) in the *Developer Guide*.

## LegacyS3Origin
### Properties
* **DNSName**: string (Required): The domain name assigned to your CF distribution.
* **OriginAccessIdentity**: string: The CF origin access identity to associate with the distribution. Use an origin access identity to configure the distribution so that end users can only access objects in an S3 through CF.
  This property is legacy. We recommend that you use [OriginAccessControl](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-originaccesscontrol.html) instead.

## Logging
### Properties
* **Bucket**: string: The Amazon S3 bucket to store the access logs in, for example, ``amzn-s3-demo-bucket.s3.amazonaws.com``.
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
* **Description**: string: A description of the origin access control.
* **Name**: string (Required): A name to identify the origin access control. You can specify up to 64 characters.
* **OriginAccessControlOriginType**: string (Required): The type of origin that this origin access control is for.
* **SigningBehavior**: string (Required): Specifies which requests CloudFront signs (adds authentication information to). Specify ``always`` for the most common use case. For more information, see [origin access control advanced settings](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html#oac-advanced-settings) in the *Amazon CloudFront Developer Guide*.
 This field can have one of the following values:
  +   ``always`` ? CloudFront signs all origin requests, overwriting the ``Authorization`` header from the viewer request if one exists.
  +   ``never`` ? CloudFront doesn't sign any origin requests. This value turns off origin access control for all origins in all distributions that use this origin access control.
  +   ``no-override`` ? If the viewer request doesn't contain the ``Authorization`` header, then CloudFront signs the origin request. If the viewer request contains the ``Authorization`` header, then CloudFront doesn't sign the origin request and instead passes along the ``Authorization`` header from the viewer request. *WARNING: To pass along the Authorization header from the viewer request, you must add the Authorization header to a cache policy for all cache behaviors that use origins associated with this origin access control.*
* **SigningProtocol**: string (Required): The signing protocol of the origin access control, which determines how CloudFront signs (authenticates) requests. The only valid value is ``sigv4``.

## OriginCustomHeader
### Properties
* **HeaderName**: string (Required): The name of a header that you want CloudFront to send to your origin. For more information, see [Adding Custom Headers to Origin Requests](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html) in the *Amazon CloudFront Developer Guide*.
* **HeaderValue**: string (Required): The value for the header that you specified in the ``HeaderName`` field.

## OriginGroup
### Properties
* **FailoverCriteria**: [OriginGroupFailoverCriteria](#origingroupfailovercriteria) (Required): A complex type that contains information about the failover criteria for an origin group.
* **Id**: string (Required, Identifier): The origin group's ID.
* **Members**: [OriginGroupMembers](#origingroupmembers) (Required): A complex type that contains information about the origins in an origin group.
* **SelectionCriteria**: string: The selection criteria for the origin group. For more information, see [Create an origin group](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/high_availability_origin_failover.html#concept_origin_groups.creating) in the *Amazon CloudFront Developer Guide*.

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
* **Comment**: string: A comment to describe the origin request policy. The comment cannot be longer than 128 characters.
* **CookiesConfig**: [CookiesConfig](#cookiesconfig) (Required): The cookies from viewer requests to include in origin requests.
* **HeadersConfig**: [HeadersConfig](#headersconfig) (Required): The HTTP headers to include in origin requests. These can include headers from viewer requests and additional headers added by CloudFront.
* **Name**: string (Required): A unique name to identify the origin request policy.
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig) (Required): The URL query strings from viewer requests to include in origin requests.

## OriginShield
### Properties
* **Enabled**: bool: A flag that specifies whether Origin Shield is enabled.
 When it's enabled, CloudFront routes all requests through Origin Shield, which can help protect your origin. When it's disabled, CloudFront might send requests directly to your origin from multiple edge locations or regional edge caches.
* **OriginShieldRegion**: string: The AWS-Region for Origin Shield.
 Specify the AWS-Region that has the lowest latency to your origin. To specify a region, use the region code, not the region name. For example, specify the US East (Ohio) region as ``us-east-2``.
 When you enable CloudFront Origin Shield, you must specify the AWS-Region for Origin Shield. For the list of AWS-Regions that you can specify, and for help choosing the best Region for your origin, see [Choosing the for Origin Shield](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/origin-shield.html#choose-origin-shield-region) in the *Amazon CloudFront Developer Guide*.

## ParametersInCacheKeyAndForwardedToOrigin
### Properties
* **CookiesConfig**: [CookiesConfig](#cookiesconfig) (Required): An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in the cache key and in requests that CloudFront sends to the origin.
* **EnableAcceptEncodingBrotli**: bool: A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
 This field is related to the ``EnableAcceptEncodingGzip`` field. If one or both of these fields is ``true`` *and* the viewer request includes the ``Accept-Encoding`` header, then CloudFront does the following:
  +  Normalizes the value of the viewer's ``Accept-Encoding`` header
  +  Includes the normalized header in the cache key
  +  Includes the normalized header in the request to the origin, if a request is necessary
  
 For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
 If you set this value to ``true``, and this cache behavior also has an origin request policy attached, do not include the ``Accept-Encoding`` header in the origin request policy. CloudFront always includes the ``Accept-Encoding`` header in origin requests when the value of this field is ``true``, so including this header in an origin request policy has no effect.
 If both of these fields are ``false``, then CloudFront treats the ``Accept-Encoding`` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add ``Accept-Encoding`` to the headers whitelist like any other HTTP header.
* **EnableAcceptEncodingGzip**: bool (Required): A flag that can affect whether the ``Accept-Encoding`` HTTP header is included in the cache key and included in requests that CloudFront sends to the origin.
 This field is related to the ``EnableAcceptEncodingBrotli`` field. If one or both of these fields is ``true`` *and* the viewer request includes the ``Accept-Encoding`` header, then CloudFront does the following:
  +  Normalizes the value of the viewer's ``Accept-Encoding`` header
  +  Includes the normalized header in the cache key
  +  Includes the normalized header in the request to the origin, if a request is necessary
  
 For more information, see [Compression support](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/controlling-the-cache-key.html#cache-policy-compressed-objects) in the *Amazon CloudFront Developer Guide*.
 If you set this value to ``true``, and this cache behavior also has an origin request policy attached, do not include the ``Accept-Encoding`` header in the origin request policy. CloudFront always includes the ``Accept-Encoding`` header in origin requests when the value of this field is ``true``, so including this header in an origin request policy has no effect.
 If both of these fields are ``false``, then CloudFront treats the ``Accept-Encoding`` header the same as any other HTTP header in the viewer request. By default, it's not included in the cache key and it's not included in origin requests. In this case, you can manually add ``Accept-Encoding`` to the headers whitelist like any other HTTP header.
* **HeadersConfig**: [HeadersConfig](#headersconfig) (Required): An object that determines whether any HTTP headers (and if so, which headers) are included in the cache key and in requests that CloudFront sends to the origin.
* **QueryStringsConfig**: [QueryStringsConfig](#querystringsconfig) (Required): An object that determines whether any URL query strings in viewer requests (and if so, which query strings) are included in the cache key and in requests that CloudFront sends to the origin.

## PublicKeyConfig
### Properties
* **CallerReference**: string (Required): A string included in the request to help make sure that the request can't be replayed.
* **Comment**: string: A comment to describe the public key. The comment cannot be longer than 128 characters.
* **EncodedKey**: string (Required): The public key that you can use with [signed URLs and signed cookies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html), or with [field-level encryption](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html).
* **Name**: string (Required): A name to help identify the public key.

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string (Required): Determines whether any URL query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin. Valid values are:
  +   ``none`` ? No query strings in viewer requests are included in the cache key or in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any query strings that are listed in an ``OriginRequestPolicy`` *are* included in origin requests.
  +   ``whitelist`` ? Only the query strings in viewer requests that are listed in the ``QueryStringNames`` type are included in the cache key and in requests that CloudFront sends to the origin.
  +   ``allExcept`` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin, *except* those that are listed in the ``QueryStringNames`` type, which are not included.
  +   ``all`` ? All query strings in viewer requests are included in the cache key and in requests that CloudFront sends to the origin.
* **QueryStrings**: string[]: Contains a list of query string names.

## QueryStringsConfig
### Properties
* **QueryStringBehavior**: string (Required): Determines whether any URL query strings in viewer requests are included in requests that CloudFront sends to the origin. Valid values are:
  +   ``none`` ? No query strings in viewer requests are included in requests that CloudFront sends to the origin. Even when this field is set to ``none``, any query strings that are listed in a ``CachePolicy`` *are* included in origin requests.
  +   ``whitelist`` ? Only the query strings in viewer requests that are listed in the ``QueryStringNames`` type are included in requests that CloudFront sends to the origin.
  +   ``all`` ? All query strings in viewer requests are included in requests that CloudFront sends to the origin.
  +   ``allExcept`` ? All query strings in viewer requests are included in requests that CloudFront sends to the origin, *except* for those listed in the ``QueryStringNames`` type, which are not included.
* **QueryStrings**: string[]: Contains a list of query string names.

## ReferrerPolicy
### Properties
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides the ``Referrer-Policy`` HTTP response header received from the origin with the one specified in this response headers policy.
* **ReferrerPolicy**: string (Required): Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
 For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.

## RemoveHeader
### Properties
* **Header**: string (Required): The HTTP header name.

## RemoveHeadersConfig
### Properties
* **Items**: [RemoveHeader](#removeheader)[] (Required): The list of HTTP header names.

## ResponseHeadersPolicyConfig
### Properties
* **Comment**: string: A comment to describe the response headers policy.
 The comment cannot be longer than 128 characters.
* **CorsConfig**: [CorsConfig](#corsconfig): A configuration for a set of HTTP response headers that are used for cross-origin resource sharing (CORS).
* **CustomHeadersConfig**: [CustomHeadersConfig](#customheadersconfig): A configuration for a set of custom HTTP response headers.
* **Name**: string (Required): A name to identify the response headers policy.
 The name must be unique for response headers policies in this AWS-account.
* **RemoveHeadersConfig**: [RemoveHeadersConfig](#removeheadersconfig): A configuration for a set of HTTP headers to remove from the HTTP response.
* **SecurityHeadersConfig**: [SecurityHeadersConfig](#securityheadersconfig): A configuration for a set of security-related HTTP response headers.
* **ServerTimingHeadersConfig**: [ServerTimingHeadersConfig](#servertimingheadersconfig): A configuration for enabling the ``Server-Timing`` header in HTTP responses sent from CloudFront.

## Restrictions
### Properties
* **GeoRestriction**: [GeoRestriction](#georestriction) (Required): A complex type that controls the countries in which your content is distributed. CF determines the location of your users using ``MaxMind`` GeoIP databases. To disable geo restriction, remove the [Restrictions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-cloudfront-distribution-distributionconfig.html#cfn-cloudfront-distribution-distributionconfig-restrictions) property from your stack template.

## S3OriginConfig
### Properties
* **OriginAccessIdentity**: string: If you're using origin access control (OAC) instead of origin access identity, specify an empty ``OriginAccessIdentity`` element. For more information, see [Restricting access to an](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-origin.html) in the *Amazon CloudFront Developer Guide*.
  The CloudFront origin access identity to associate with the origin. Use an origin access identity to configure the origin so that viewers can *only* access objects in an Amazon S3 bucket through CloudFront. The format of the value is:
  ``origin-access-identity/cloudfront/ID-of-origin-access-identity`` 
 The ``ID-of-origin-access-identity`` is the value that CloudFront returned in the ``ID`` element when you created the origin access identity.
 If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3 URL, specify an empty ``OriginAccessIdentity`` element.
 To delete the origin access identity from an existing distribution, update the distribution configuration and include an empty ``OriginAccessIdentity`` element.
 To replace the origin access identity, update the distribution configuration and specify the new origin access identity.
 For more information about the origin access identity, see [Serving Private Content through CloudFront](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html) in the *Amazon CloudFront Developer Guide*.

## SecurityHeadersConfig
### Properties
* **ContentSecurityPolicy**: [ContentSecurityPolicy](#contentsecuritypolicy): The policy directives and their values that CloudFront includes as values for the ``Content-Security-Policy`` HTTP response header.
 For more information about the ``Content-Security-Policy`` HTTP response header, see [Content-Security-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) in the MDN Web Docs.
* **ContentTypeOptions**: [ContentTypeOptions](#contenttypeoptions): Determines whether CloudFront includes the ``X-Content-Type-Options`` HTTP response header with its value set to ``nosniff``.
 For more information about the ``X-Content-Type-Options`` HTTP response header, see [X-Content-Type-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Content-Type-Options) in the MDN Web Docs.
* **FrameOptions**: [FrameOptions](#frameoptions): Determines whether CloudFront includes the ``X-Frame-Options`` HTTP response header and the header's value.
 For more information about the ``X-Frame-Options`` HTTP response header, see [X-Frame-Options](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) in the MDN Web Docs.
* **ReferrerPolicy**: [ReferrerPolicy](#referrerpolicy): Determines whether CloudFront includes the ``Referrer-Policy`` HTTP response header and the header's value.
 For more information about the ``Referrer-Policy`` HTTP response header, see [Referrer-Policy](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referrer-Policy) in the MDN Web Docs.
* **StrictTransportSecurity**: [StrictTransportSecurity](#stricttransportsecurity): Determines whether CloudFront includes the ``Strict-Transport-Security`` HTTP response header and the header's value.
 For more information about the ``Strict-Transport-Security`` HTTP response header, see [Security headers](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/understanding-response-headers-policies.html#understanding-response-headers-policies-security) in the *Amazon CloudFront Developer Guide* and [Strict-Transport-Security](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security) in the MDN Web Docs.
* **XSSProtection**: [XSSProtection](#xssprotection): Determines whether CloudFront includes the ``X-XSS-Protection`` HTTP response header and the header's value.
 For more information about the ``X-XSS-Protection`` HTTP response header, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.

## ServerTimingHeadersConfig
### Properties
* **Enabled**: bool (Required): A Boolean that determines whether CloudFront adds the ``Server-Timing`` header to HTTP responses that it sends in response to requests that match a cache behavior that's associated with this response headers policy.
* **SamplingRate**: int: A number 0?100 (inclusive) that specifies the percentage of responses that you want CloudFront to add the ``Server-Timing`` header to. When you set the sampling rate to 100, CloudFront adds the ``Server-Timing`` header to the HTTP response for every request that matches the cache behavior that this response headers policy is attached to. When you set it to 50, CloudFront adds the header to 50% of the responses for requests that match the cache behavior. You can set the sampling rate to any number 0?100 with up to four decimal places.

## SessionStickinessConfig
### Properties
* **IdleTTL**: int (Required): The amount of time after which you want sessions to cease if no requests are received. Allowed values are 300?3600 seconds (5?60 minutes).
* **MaximumTTL**: int (Required): The maximum amount of time to consider requests from the viewer as being part of the same session. Allowed values are 300?3600 seconds (5?60 minutes).

## SingleHeaderConfig
### Properties
* **Header**: string (Required): The request header name that you want CloudFront to send to your staging distribution. The header must contain the prefix ``aws-cf-cd-``.
* **Value**: string (Required): The request header value.

## SingleWeightConfig
### Properties
* **SessionStickinessConfig**: [SessionStickinessConfig](#sessionstickinessconfig): Session stickiness provides the ability to define multiple requests from a single viewer as a single session. This prevents the potentially inconsistent experience of sending some of a given user's requests to your staging distribution, while others are sent to your primary distribution. Define the session duration using TTL values.
* **Weight**: int (Required): The percentage of traffic to send to a staging distribution, expressed as a decimal number between 0 and 0.15. For example, a value of 0.10 means 10% of traffic is sent to the staging distribution.

## StatusCodes
### Properties
* **Items**: int[] (Required): The items (status codes) for an origin group.
* **Quantity**: int (Required): The number of status codes.

## StrictTransportSecurity
### Properties
* **AccessControlMaxAgeSec**: int (Required): A number that CloudFront uses as the value for the ``max-age`` directive in the ``Strict-Transport-Security`` HTTP response header.
* **IncludeSubdomains**: bool: A Boolean that determines whether CloudFront includes the ``includeSubDomains`` directive in the ``Strict-Transport-Security`` HTTP response header.
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides the ``Strict-Transport-Security`` HTTP response header received from the origin with the one specified in this response headers policy.
* **Preload**: bool: A Boolean that determines whether CloudFront includes the ``preload`` directive in the ``Strict-Transport-Security`` HTTP response header.

## Tag
### Properties
* **Key**: string (Required): A string that contains ``Tag`` key.
 The string length should be between 1 and 128 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.
* **Value**: string (Required): A string that contains an optional ``Tag`` value.
 The string length should be between 0 and 256 characters. Valid characters include ``a-z``, ``A-Z``, ``0-9``, space, and the special characters ``_ - . : / = + @``.

## TrafficConfig
### Properties
* **SingleHeaderConfig**: [SingleHeaderConfig](#singleheaderconfig): Determines which HTTP requests are sent to the staging distribution.
* **SingleWeightConfig**: [SingleWeightConfig](#singleweightconfig): Contains the percentage of traffic to send to the staging distribution.
* **Type**: string (Required): The type of traffic configuration.

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
* **ModeBlock**: bool: A Boolean that determines whether CloudFront includes the ``mode=block`` directive in the ``X-XSS-Protection`` header.
 For more information about this directive, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
* **Override**: bool (Required): A Boolean that determines whether CloudFront overrides the ``X-XSS-Protection`` HTTP response header received from the origin with the one specified in this response headers policy.
* **Protection**: bool (Required): A Boolean that determines the value of the ``X-XSS-Protection`` HTTP response header. When this setting is ``true``, the value of the ``X-XSS-Protection`` header is ``1``. When this setting is ``false``, the value of the ``X-XSS-Protection`` header is ``0``.
 For more information about these settings, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.
* **ReportUri**: string: A reporting URI, which CloudFront uses as the value of the ``report`` directive in the ``X-XSS-Protection`` header.
 You cannot specify a ``ReportUri`` when ``ModeBlock`` is ``true``.
 For more information about using a reporting URL, see [X-XSS-Protection](https://docs.aws.amazon.com/https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) in the MDN Web Docs.

