# AWS.ApiGateway @ default

## Resource AWS.ApiGateway/Account@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/AccountProperties](#awsapigatewayaccountproperties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/ApiKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ApiKeyProperties](#awsapigatewayapikeyproperties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/Authorizer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/AuthorizerProperties](#awsapigatewayauthorizerproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/BasePathMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/BasePathMappingProperties](#awsapigatewaybasepathmappingproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/BasePathMappingV2@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/BasePathMappingV2Properties](#awsapigatewaybasepathmappingv2properties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/ClientCertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ClientCertificateProperties](#awsapigatewayclientcertificateproperties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/Deployment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DeploymentProperties](#awsapigatewaydeploymentproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/DocumentationPart@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DocumentationPartProperties](#awsapigatewaydocumentationpartproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/DocumentationVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DocumentationVersionProperties](#awsapigatewaydocumentationversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/DomainName@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DomainNameProperties](#awsapigatewaydomainnameproperties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/DomainNameV2@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DomainNameV2Properties](#awsapigatewaydomainnamev2properties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/GatewayResponse@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/GatewayResponseProperties](#awsapigatewaygatewayresponseproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/Method@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/MethodProperties](#awsapigatewaymethodproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/Model@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ModelProperties](#awsapigatewaymodelproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/RequestValidator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/RequestValidatorProperties](#awsapigatewayrequestvalidatorproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/Resource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ResourceProperties](#awsapigatewayresourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/RestApi@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/RestApiProperties](#awsapigatewayrestapiproperties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/Stage@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/StageProperties](#awsapigatewaystageproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGateway/UsagePlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/UsagePlanProperties](#awsapigatewayusageplanproperties) (Identifier): properties of the resource

## Resource AWS.ApiGateway/VpcLink@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/VpcLinkProperties](#awsapigatewayvpclinkproperties) (Required, Identifier): properties of the resource

## AccessLogSetting
### Properties
* **DestinationArn**: string
* **Format**: string

## AccessLogSetting
### Properties
* **DestinationArn**: string: The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with ``amazon-apigateway-``. This parameter is required to enable access logging.
* **Format**: string: A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.

## ApiStage
### Properties
* **ApiId**: string
* **Stage**: string
* **Throttle**: [UsagePlan_Throttle](#usageplanthrottle)

## AWS.ApiGateway/AccountProperties
### Properties
* **CloudWatchRoleArn**: string
* **Id**: string (ReadOnly, Identifier)

## AWS.ApiGateway/ApiKeyProperties
### Properties
* **APIKeyId**: string (ReadOnly, Identifier)
* **CustomerId**: string
* **Description**: string
* **Enabled**: bool
* **GenerateDistinctId**: bool (WriteOnly)
* **Name**: string: A name for the API key. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the API key name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
 If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **StageKeys**: [StageKey](#stagekey)[]
* **Tags**: [Tag](#tag)[]
* **Value**: string

## AWS.ApiGateway/AuthorizerProperties
### Properties
* **AuthorizerCredentials**: string
* **AuthorizerId**: string (ReadOnly, Identifier)
* **AuthorizerResultTtlInSeconds**: int
* **AuthorizerUri**: string
* **AuthType**: string
* **IdentitySource**: string
* **IdentityValidationExpression**: string
* **Name**: string (Required)
* **ProviderARNs**: string[]
* **RestApiId**: string (Required, Identifier)
* **Type**: string (Required)

## AWS.ApiGateway/BasePathMappingProperties
### Properties
* **BasePath**: string (Identifier)
* **DomainName**: string (Required, Identifier)
* **RestApiId**: string
* **Stage**: string

## AWS.ApiGateway/BasePathMappingV2Properties
### Properties
* **BasePath**: string: The base path name that callers of the API must provide in the URL after the domain name.
* **BasePathMappingArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the resource.
* **DomainNameArn**: string (Required): The Arn of an AWS::ApiGateway::DomainNameV2 resource.
* **RestApiId**: string (Required): The ID of the API.
* **Stage**: string: The name of the API's stage.

## AWS.ApiGateway/ClientCertificateProperties
### Properties
* **ClientCertificateId**: string (ReadOnly, Identifier)
* **Description**: string
* **Tags**: [Tag](#tag)[]

## AWS.ApiGateway/DeploymentProperties
### Properties
* **DeploymentCanarySettings**: [DeploymentCanarySettings](#deploymentcanarysettings) (WriteOnly)
* **DeploymentId**: string (ReadOnly, Identifier)
* **Description**: string
* **RestApiId**: string (Required, Identifier)
* **StageDescription**: [StageDescription](#stagedescription) (WriteOnly): The description of the Stage resource for the Deployment resource to create. To specify a stage description, you must also provide a stage name.
* **StageName**: string (WriteOnly)

## AWS.ApiGateway/DocumentationPartProperties
### Properties
* **DocumentationPartId**: string (ReadOnly, Identifier)
* **Location**: [Location](#location) (Required)
* **Properties**: string (Required)
* **RestApiId**: string (Required, Identifier)

## AWS.ApiGateway/DocumentationVersionProperties
### Properties
* **Description**: string
* **DocumentationVersion**: string (Required, Identifier)
* **RestApiId**: string (Required, Identifier)

## AWS.ApiGateway/DomainNameProperties
### Properties
* **CertificateArn**: string
* **DistributionDomainName**: string (ReadOnly)
* **DistributionHostedZoneId**: string (ReadOnly)
* **DomainName**: string (Identifier)
* **EndpointConfiguration**: [EndpointConfiguration](#endpointconfiguration)
* **MutualTlsAuthentication**: [MutualTlsAuthentication](#mutualtlsauthentication)
* **OwnershipVerificationCertificateArn**: string
* **RegionalCertificateArn**: string
* **RegionalDomainName**: string (ReadOnly)
* **RegionalHostedZoneId**: string (ReadOnly)
* **SecurityPolicy**: string
* **Tags**: [Tag](#tag)[]

## AWS.ApiGateway/DomainNameV2Properties
### Properties
* **CertificateArn**: string
* **DomainName**: string
* **DomainNameArn**: string (ReadOnly, Identifier): The amazon resource name (ARN) of the domain name resource.
* **DomainNameId**: string (ReadOnly)
* **EndpointConfiguration**: [EndpointConfiguration](#endpointconfiguration)
* **Policy**: [DomainNameV2_Policy](#domainnamev2policy) | string
* **SecurityPolicy**: string
* **Tags**: [Tag](#tag)[]

## AWS.ApiGateway/GatewayResponseProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **ResponseParameters**: [GatewayResponse_ResponseParameters](#gatewayresponseresponseparameters)
* **ResponseTemplates**: [GatewayResponse_ResponseTemplates](#gatewayresponseresponsetemplates)
* **ResponseType**: string (Required)
* **RestApiId**: string (Required)
* **StatusCode**: string

## AWS.ApiGateway/MethodProperties
### Properties
* **ApiKeyRequired**: bool
* **AuthorizationScopes**: string[]
* **AuthorizationType**: string: The method's authorization type. This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
  If you specify the ``AuthorizerId`` property, specify ``CUSTOM`` or ``COGNITO_USER_POOLS`` for this property.
* **AuthorizerId**: string
* **HttpMethod**: string (Required, Identifier)
* **Integration**: [Integration](#integration)
* **MethodResponses**: [MethodResponse](#methodresponse)[]
* **OperationName**: string
* **RequestModels**: [Method_RequestModels](#methodrequestmodels)
* **RequestParameters**: [Method_RequestParameters](#methodrequestparameters)
* **RequestValidatorId**: string
* **ResourceId**: string (Required, Identifier)
* **RestApiId**: string (Required, Identifier)

## AWS.ApiGateway/ModelProperties
### Properties
* **ContentType**: string
* **Description**: string
* **Name**: string (Identifier): A name for the model. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the model name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **RestApiId**: string (Required, Identifier)
* **Schema**: [Model_Schema](#modelschema) | string

## AWS.ApiGateway/RequestValidatorProperties
### Properties
* **Name**: string
* **RequestValidatorId**: string (ReadOnly, Identifier)
* **RestApiId**: string (Required, Identifier)
* **ValidateRequestBody**: bool
* **ValidateRequestParameters**: bool

## AWS.ApiGateway/ResourceProperties
### Properties
* **ParentId**: string (Required)
* **PathPart**: string (Required)
* **ResourceId**: string (ReadOnly, Identifier)
* **RestApiId**: string (Required, Identifier)

## AWS.ApiGateway/RestApiProperties
### Properties
* **ApiKeySourceType**: string
* **BinaryMediaTypes**: string[]
* **Body**: [RestApi_Body](#restapibody) | string (WriteOnly): An OpenAPI specification that defines a set of RESTful APIs in JSON format. For YAML templates, you can also provide the specification in YAML format.
* **BodyS3Location**: [S3Location](#s3location) (WriteOnly): The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
* **CloneFrom**: string (WriteOnly)
* **Description**: string
* **DisableExecuteApiEndpoint**: bool
* **EndpointConfiguration**: [EndpointConfiguration](#endpointconfiguration): A list of the endpoint types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the ``Parameters`` property.
* **FailOnWarnings**: bool (WriteOnly)
* **MinimumCompressionSize**: int
* **Mode**: string (WriteOnly): This property applies only when you use OpenAPI to define your REST API. The ``Mode`` determines how API Gateway handles resource updates.
 Valid values are ``overwrite`` or ``merge``. 
 For ``overwrite``, the new API definition replaces the existing one. The existing API identifier remains unchanged.
  For ``merge``, the new API definition is merged with the existing API.
 If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is ``overwrite``. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API. 
 Use the default mode to define top-level ``RestApi`` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.
* **Name**: string: The name of the RestApi. A name is required if the REST API is not based on an OpenAPI specification.
* **Parameters**: [RestApi_Parameters](#restapiparameters) | string (WriteOnly)
* **Policy**: [RestApi_Policy](#restapipolicy) | string: A policy document that contains the permissions for the ``RestApi`` resource. To set the ARN for the policy, use the ``!Join`` intrinsic function with ``""`` as delimiter and values of ``"execute-api:/"`` and ``"*"``.
* **RestApiId**: string (ReadOnly, Identifier)
* **RootResourceId**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## AWS.ApiGateway/StageProperties
### Properties
* **AccessLogSetting**: [AccessLogSetting](#accesslogsetting)
* **CacheClusterEnabled**: bool
* **CacheClusterSize**: string
* **CanarySetting**: [CanarySetting](#canarysetting)
* **ClientCertificateId**: string
* **DeploymentId**: string
* **Description**: string
* **DocumentationVersion**: string
* **MethodSettings**: [MethodSetting](#methodsetting)[]
* **RestApiId**: string (Required, Identifier)
* **StageName**: string (Identifier)
* **Tags**: [Tag](#tag)[]
* **TracingEnabled**: bool
* **Variables**: [Stage_Variables](#stagevariables): A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.

## AWS.ApiGateway/UsagePlanProperties
### Properties
* **ApiStages**: [ApiStage](#apistage)[]
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **Quota**: [QuotaSettings](#quotasettings)
* **Tags**: [Tag](#tag)[]
* **Throttle**: [ThrottleSettings](#throttlesettings)
* **UsagePlanName**: string

## AWS.ApiGateway/VpcLinkProperties
### Properties
* **Description**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]: An array of arbitrary tags (key-value pairs) to associate with the VPC link.
* **TargetArns**: string[] (Required)
* **VpcLinkId**: string (ReadOnly, Identifier)

## CanarySetting
### Properties
* **PercentTraffic**: int
* **StageVariableOverrides**: [Deployment_StageVariableOverrides](#deploymentstagevariableoverrides)
* **UseStageCache**: bool

## CanarySetting
### Properties
* **DeploymentId**: string
* **PercentTraffic**: int
* **StageVariableOverrides**: [Stage_StageVariableOverrides](#stagestagevariableoverrides)
* **UseStageCache**: bool

## Deployment_StageVariableOverrides
### Properties

## Deployment_StageVariableOverrides
### Properties

## Deployment_Variables
### Properties

## DeploymentCanarySettings
### Properties
* **PercentTraffic**: int
* **StageVariableOverrides**: [Deployment_StageVariableOverrides](#deploymentstagevariableoverrides)
* **UseStageCache**: bool

## EndpointConfiguration
### Properties
* **Types**: string[]

## EndpointConfiguration
### Properties
* **Types**: string[]

## EndpointConfiguration
### Properties
* **Types**: string[]
* **VpcEndpointIds**: string[]

## GatewayResponse_ResponseParameters
### Properties

## GatewayResponse_ResponseTemplates
### Properties

## Integration
### Properties
* **CacheKeyParameters**: string[]
* **CacheNamespace**: string
* **ConnectionId**: string
* **ConnectionType**: string
* **ContentHandling**: string
* **Credentials**: string
* **IntegrationHttpMethod**: string
* **IntegrationResponses**: [IntegrationResponse](#integrationresponse)[]
* **PassthroughBehavior**: string
* **RequestParameters**: [Method_RequestParameters](#methodrequestparameters)
* **RequestTemplates**: [Method_RequestTemplates](#methodrequesttemplates)
* **TimeoutInMillis**: int
* **Type**: string (Required)
* **Uri**: string

## IntegrationResponse
### Properties
* **ContentHandling**: string
* **ResponseParameters**: [Method_ResponseParameters](#methodresponseparameters)
* **ResponseTemplates**: [Method_ResponseTemplates](#methodresponsetemplates)
* **SelectionPattern**: string
* **StatusCode**: string (Required)

## Location
### Properties
* **Method**: string
* **Name**: string
* **Path**: string
* **StatusCode**: string
* **Type**: string

## Method_RequestModels
### Properties

## Method_RequestParameters
### Properties

## Method_RequestParameters
### Properties

## Method_RequestTemplates
### Properties

## Method_ResponseModels
### Properties

## Method_ResponseParameters
### Properties

## Method_ResponseParameters
### Properties

## Method_ResponseTemplates
### Properties

## MethodResponse
### Properties
* **ResponseModels**: [Method_ResponseModels](#methodresponsemodels)
* **ResponseParameters**: [Method_ResponseParameters](#methodresponseparameters)
* **StatusCode**: string (Required)

## MethodSetting
### Properties
* **CacheDataEncrypted**: bool
* **CacheTtlInSeconds**: int
* **CachingEnabled**: bool
* **DataTraceEnabled**: bool
* **HttpMethod**: string: The HTTP method.
* **LoggingLevel**: string
* **MetricsEnabled**: bool
* **ResourcePath**: string: The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``).
* **ThrottlingBurstLimit**: int
* **ThrottlingRateLimit**: int

## MethodSetting
### Properties
* **CacheDataEncrypted**: bool
* **CacheTtlInSeconds**: int
* **CachingEnabled**: bool
* **DataTraceEnabled**: bool
* **HttpMethod**: string: The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
* **LoggingLevel**: string
* **MetricsEnabled**: bool
* **ResourcePath**: string: The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``). To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
* **ThrottlingBurstLimit**: int
* **ThrottlingRateLimit**: int

## MutualTlsAuthentication
### Properties
* **TruststoreUri**: string
* **TruststoreVersion**: string

## QuotaSettings
### Properties
* **Limit**: int
* **Offset**: int
* **Period**: string

## S3Location
### Properties
* **Bucket**: string: The name of the S3 bucket where the OpenAPI file is stored.
* **ETag**: string: The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.
* **Key**: string: The file name of the OpenAPI file (Amazon S3 object name).
* **Version**: string: For versioning-enabled buckets, a specific version of the OpenAPI file.

## Stage_StageVariableOverrides
### Properties

## Stage_Variables
### Properties

## StageDescription
### Properties
* **AccessLogSetting**: [AccessLogSetting](#accesslogsetting): Specifies settings for logging access in this stage.
* **CacheClusterEnabled**: bool
* **CacheClusterSize**: string: The size of the stage's cache cluster. For more information, see [cacheClusterSize](https://docs.aws.amazon.com/apigateway/latest/api/API_CreateStage.html#apigw-CreateStage-request-cacheClusterSize) in the *API Gateway API Reference*.
* **CacheDataEncrypted**: bool: Indicates whether the cached responses are encrypted.
* **CacheTtlInSeconds**: int: The time-to-live (TTL) period, in seconds, that specifies how long API Gateway caches responses.
* **CachingEnabled**: bool: Indicates whether responses are cached and returned for requests. You must enable a cache cluster on the stage to cache responses. For more information, see [Enable API Gateway Caching in a Stage to Enhance API Performance](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html) in the *API Gateway Developer Guide*.
* **CanarySetting**: [CanarySetting](#canarysetting): Specifies settings for the canary deployment in this stage.
* **ClientCertificateId**: string: The identifier of the client certificate that API Gateway uses to call your integration endpoints in the stage.
* **DataTraceEnabled**: bool: Indicates whether data trace logging is enabled for methods in the stage. API Gateway pushes these logs to Amazon CloudWatch Logs.
* **Description**: string: A description of the purpose of the stage.
* **DocumentationVersion**: string: The version identifier of the API documentation snapshot.
* **LoggingLevel**: string: The logging level for this method. For valid values, see the ``loggingLevel`` property of the [MethodSetting](https://docs.aws.amazon.com/apigateway/latest/api/API_MethodSetting.html) resource in the *Amazon API Gateway API Reference*.
* **MethodSettings**: [MethodSetting](#methodsetting)[]: Configures settings for all of the stage's methods.
* **MetricsEnabled**: bool: Indicates whether Amazon CloudWatch metrics are enabled for methods in the stage.
* **Tags**: [Tag](#tag)[]: An array of arbitrary tags (key-value pairs) to associate with the stage.
* **ThrottlingBurstLimit**: int: The target request burst rate limit. This allows more requests through for a period of time than the target rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.
* **ThrottlingRateLimit**: int: The target request steady-state rate limit. For more information, see [Manage API Request Throttling](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-request-throttling.html) in the *API Gateway Developer Guide*.
* **TracingEnabled**: bool: Specifies whether active tracing with X-ray is enabled for this stage.
 For more information, see [Trace API Gateway API Execution with X-Ray](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-xray.html) in the *API Gateway Developer Guide*.
* **Variables**: [Deployment_Variables](#deploymentvariables): A map that defines the stage variables. Variable names must consist of alphanumeric characters, and the values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.

## StageKey
### Properties
* **RestApiId**: string
* **StageName**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ThrottleSettings
### Properties
* **BurstLimit**: int
* **RateLimit**: int

## UsagePlan_Throttle
### Properties

