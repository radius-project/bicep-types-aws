# AWS.ApiGateway @ default

## Resource AWS.ApiGateway/Account@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/AccountProperties](#awsapigatewayaccountproperties): properties of the resource

## Resource AWS.ApiGateway/ApiKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ApiKeyProperties](#awsapigatewayapikeyproperties): properties of the resource

## Resource AWS.ApiGateway/Authorizer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/AuthorizerProperties](#awsapigatewayauthorizerproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/BasePathMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/BasePathMappingProperties](#awsapigatewaybasepathmappingproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/ClientCertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ClientCertificateProperties](#awsapigatewayclientcertificateproperties): properties of the resource

## Resource AWS.ApiGateway/Deployment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DeploymentProperties](#awsapigatewaydeploymentproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/DocumentationPart@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DocumentationPartProperties](#awsapigatewaydocumentationpartproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/DocumentationVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DocumentationVersionProperties](#awsapigatewaydocumentationversionproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/DomainName@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/DomainNameProperties](#awsapigatewaydomainnameproperties): properties of the resource

## Resource AWS.ApiGateway/Method@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/MethodProperties](#awsapigatewaymethodproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/Model@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ModelProperties](#awsapigatewaymodelproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/RequestValidator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/RequestValidatorProperties](#awsapigatewayrequestvalidatorproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/Resource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/ResourceProperties](#awsapigatewayresourceproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/RestApi@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/RestApiProperties](#awsapigatewayrestapiproperties): properties of the resource

## Resource AWS.ApiGateway/Stage@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/StageProperties](#awsapigatewaystageproperties) (Required): properties of the resource

## Resource AWS.ApiGateway/UsagePlan@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/UsagePlanProperties](#awsapigatewayusageplanproperties): properties of the resource

## Resource AWS.ApiGateway/VpcLink@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGateway/VpcLinkProperties](#awsapigatewayvpclinkproperties) (Required): properties of the resource

## AWS.ApiGateway/AccountProperties
### Properties
* **CloudWatchRoleArn**: string: The ARN of an Amazon CloudWatch role for the current Account.
* **Id**: string (ReadOnly, Identifier)

## AWS.ApiGateway/ApiKeyProperties
### Properties
* **APIKeyId**: string (ReadOnly, Identifier)
* **CustomerId**: string: An MKT customer identifier, when integrating with the AWS SaaS Marketplace.
* **Description**: string: The description of the ApiKey.
* **Enabled**: bool: Specifies whether the ApiKey can be used by callers.
* **GenerateDistinctId**: bool (WriteOnly): Specifies whether (``true``) or not (``false``) the key identifier is distinct from the created API key value. This parameter is deprecated and should not be used.
* **Name**: string: A name for the API key. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the API key name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
 If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **StageKeys**: [StageKey](#stagekey)[]: DEPRECATED FOR USAGE PLANS - Specifies stages associated with the API key.
* **Tags**: [Tag](#tag)[]: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with ``aws:``. The tag value can be up to 256 characters.
* **Value**: string: Specifies a value of the API key.

## StageKey
### Properties
* **RestApiId**: string: The string identifier of the associated RestApi.
* **StageName**: string: The stage name associated with the stage key.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.ApiGateway/AuthorizerProperties
### Properties
* **AuthorizerCredentials**: string: Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null.
* **AuthorizerId**: string (ReadOnly, Identifier)
* **AuthorizerResultTtlInSeconds**: int: The TTL in seconds of cached authorizer results. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway will cache authorizer responses. If this field is not set, the default value is 300. The maximum value is 3600, or 1 hour.
* **AuthorizerUri**: string: Specifies the authorizer's Uniform Resource Identifier (URI). For ``TOKEN`` or ``REQUEST`` authorizers, this must be a well-formed Lambda function URI, for example, ``arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations``. In general, the URI has this form ``arn:aws:apigateway:{region}:lambda:path/{service_api}``, where ``{region}`` is the same as the region hosting the Lambda function, ``path`` indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial ``/``. For Lambda functions, this is usually of the form ``/2015-03-31/functions/[FunctionARN]/invocations``.
* **AuthType**: string: Optional customer-defined field, used in OpenAPI imports and exports without functional impact.
* **IdentitySource**: string: The identity source for which authorization is requested. For a ``TOKEN`` or ``COGNITO_USER_POOLS`` authorizer, this is required and specifies the request header mapping expression for the custom header holding the authorization token submitted by the client. For example, if the token header name is ``Auth``, the header mapping expression is ``method.request.header.Auth``. For the ``REQUEST`` authorizer, this is required when authorization caching is enabled. The value is a comma-separated string of one or more mapping expressions of the specified request parameters. For example, if an ``Auth`` header, a ``Name`` query string parameter are defined as identity sources, this value is ``method.request.header.Auth, method.request.querystring.Name``. These parameters will be used to derive the authorization caching key and to perform runtime validation of the ``REQUEST`` authorizer by verifying all of the identity-related request parameters are present, not null and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function, otherwise, it returns a 401 Unauthorized response without calling the Lambda function. The valid value is a string of comma-separated mapping expressions of the specified request parameters. When the authorization caching is not enabled, this property is optional.
* **IdentityValidationExpression**: string: A validation expression for the incoming identity token. For ``TOKEN`` authorizers, this value is a regular expression. For ``COGNITO_USER_POOLS`` authorizers, API Gateway will match the ``aud`` field of the incoming token from the client against the specified regular expression. It will invoke the authorizer's Lambda function when there is a match. Otherwise, it will return a 401 Unauthorized response without calling the Lambda function. The validation expression does not apply to the ``REQUEST`` authorizer.
* **Name**: string (Required): The name of the authorizer.
* **ProviderARNs**: string[]: A list of the Amazon Cognito user pool ARNs for the ``COGNITO_USER_POOLS`` authorizer. Each element is of this format: ``arn:aws:cognito-idp:{region}:{account_id}:userpool/{user_pool_id}``. For a ``TOKEN`` or ``REQUEST`` authorizer, this is not defined.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.
* **Type**: string (Required): The authorizer type. Valid values are ``TOKEN`` for a Lambda function using a single authorization token submitted in a custom header, ``REQUEST`` for a Lambda function using incoming request parameters, and ``COGNITO_USER_POOLS`` for using an Amazon Cognito user pool.

## AWS.ApiGateway/BasePathMappingProperties
### Properties
* **BasePath**: string (Identifier): The base path name that callers of the API must provide as part of the URL after the domain name.
* **DomainName**: string (Required, Identifier): The domain name of the BasePathMapping resource to be described.
* **RestApiId**: string: The string identifier of the associated RestApi.
* **Stage**: string: The name of the associated stage.

## AWS.ApiGateway/ClientCertificateProperties
### Properties
* **ClientCertificateId**: string (ReadOnly, Identifier)
* **Description**: string: The description of the client certificate.
* **Tags**: [Tag](#tag)[]: The collection of tags. Each tag element is associated with a given resource.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.ApiGateway/DeploymentProperties
### Properties
* **DeploymentCanarySettings**: [DeploymentCanarySettings](#deploymentcanarysettings) (WriteOnly): The input configuration for a canary deployment.
* **DeploymentId**: string (ReadOnly, Identifier)
* **Description**: string: The description for the Deployment resource to create.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.
* **StageDescription**: [StageDescription](#stagedescription) (WriteOnly): The description of the Stage resource for the Deployment resource to create. To specify a stage description, you must also provide a stage name.
* **StageName**: string (WriteOnly): The name of the Stage resource for the Deployment resource to create.

## DeploymentCanarySettings
### Properties
* **PercentTraffic**: int: The percentage (0.0-100.0) of traffic routed to the canary deployment.
* **StageVariableOverrides**: [Deployment_StageVariableOverrides](#deploymentstagevariableoverrides): A stage variable overrides used for the canary release deployment. They can override existing stage variables or add new stage variables for the canary release deployment. These stage variables are represented as a string-to-string map between stage variable names and their values.
* **UseStageCache**: bool: A Boolean flag to indicate whether the canary release deployment uses the stage cache or not.

## Deployment_StageVariableOverrides
### Properties

## StageDescription
### Properties
* **AccessLogSetting**: [AccessLogSetting](#accesslogsetting): Specifies settings for logging access in this stage.
* **CacheClusterEnabled**: bool: Specifies whether a cache cluster is enabled for the stage.
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

## AccessLogSetting
### Properties
* **DestinationArn**: string: The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with ``amazon-apigateway-``.
* **Format**: string: A single line format of the access logs of data, as specified by selected $context variables. The format must include at least ``$context.requestId``.

## CanarySetting
### Properties
* **PercentTraffic**: int: The percent (0-100) of traffic diverted to a canary deployment.
* **StageVariableOverrides**: [Deployment_StageVariableOverrides](#deploymentstagevariableoverrides): Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.
* **UseStageCache**: bool: A Boolean flag to indicate whether the canary deployment uses the stage cache or not.

## Deployment_StageVariableOverrides
### Properties

## MethodSetting
### Properties
* **CacheDataEncrypted**: bool: Specifies whether the cached responses are encrypted.
* **CacheTtlInSeconds**: int: Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
* **CachingEnabled**: bool: Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
* **DataTraceEnabled**: bool: Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.
* **HttpMethod**: string: The HTTP method.
* **LoggingLevel**: string: Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. Valid values are ``OFF``, ``ERROR``, and ``INFO``. Choose ``ERROR`` to write only error-level entries to CloudWatch Logs, or choose ``INFO`` to include all ``ERROR`` events as well as extra informational events.
* **MetricsEnabled**: bool: Specifies whether Amazon CloudWatch metrics are enabled for this method.
* **ResourcePath**: string: The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``).
* **ThrottlingBurstLimit**: int: Specifies the throttling burst limit.
* **ThrottlingRateLimit**: int: Specifies the throttling rate limit.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

## Deployment_Variables
### Properties

## AWS.ApiGateway/DocumentationPartProperties
### Properties
* **DocumentationPartId**: string (ReadOnly, Identifier)
* **Location**: [Location](#location) (Required): The location of the targeted API entity of the to-be-created documentation part.
* **Properties**: string (Required): The new documentation content map of the targeted API entity. Enclosed key-value pairs are API-specific, but only OpenAPI-compliant key-value pairs can be exported and, hence, published.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.

## Location
### Properties
* **Method**: string: The HTTP verb of a method. It is a valid field for the API entity types of ``METHOD``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY``, ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. The default value is ``*`` for any method. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other ``location`` attributes, the child entity's ``method`` attribute must match that of the parent entity exactly.
* **Name**: string: The name of the targeted API entity. It is a valid and required field for the API entity types of ``AUTHORIZER``, ``MODEL``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY`` and ``RESPONSE_HEADER``. It is an invalid field for any other entity type.
* **Path**: string: The URL path of the target. It is a valid field for the API entity types of ``RESOURCE``, ``METHOD``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY``, ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. The default value is ``/`` for the root resource. When an applicable child entity inherits the content of another entity of the same type with more general specifications of the other ``location`` attributes, the child entity's ``path`` attribute must match that of the parent entity as a prefix.
* **StatusCode**: string: The HTTP status code of a response. It is a valid field for the API entity types of ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. The default value is ``*`` for any status code. When an applicable child entity inherits the content of an entity of the same type with more general specifications of the other ``location`` attributes, the child entity's ``statusCode`` attribute must match that of the parent entity exactly.
* **Type**: string: The type of API entity to which the documentation content applies. Valid values are ``API``, ``AUTHORIZER``, ``MODEL``, ``RESOURCE``, ``METHOD``, ``PATH_PARAMETER``, ``QUERY_PARAMETER``, ``REQUEST_HEADER``, ``REQUEST_BODY``, ``RESPONSE``, ``RESPONSE_HEADER``, and ``RESPONSE_BODY``. Content inheritance does not apply to any entity of the ``API``, ``AUTHORIZER``, ``METHOD``, ``MODEL``, ``REQUEST_BODY``, or ``RESOURCE`` type.

## AWS.ApiGateway/DocumentationVersionProperties
### Properties
* **Description**: string: A description about the new documentation snapshot.
* **DocumentationVersion**: string (Required, Identifier): The version identifier of the to-be-updated documentation version.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.

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

## EndpointConfiguration
### Properties
* **Types**: string[]

## MutualTlsAuthentication
### Properties
* **TruststoreUri**: string
* **TruststoreVersion**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.ApiGateway/MethodProperties
### Properties
* **ApiKeyRequired**: bool: A boolean flag specifying whether a valid ApiKey is required to invoke this method.
* **AuthorizationScopes**: string[]: A list of authorization scopes configured on the method. The scopes are used with a ``COGNITO_USER_POOLS`` authorizer to authorize the method invocation. The authorization works by matching the method scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any method scopes matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the method scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
* **AuthorizationType**: string: The method's authorization type. This parameter is required. For valid values, see [Method](https://docs.aws.amazon.com/apigateway/latest/api/API_Method.html) in the *API Gateway API Reference*.
  If you specify the ``AuthorizerId`` property, specify ``CUSTOM`` or ``COGNITO_USER_POOLS`` for this property.
* **AuthorizerId**: string: The identifier of an authorizer to use on this method. The method's authorization type must be ``CUSTOM`` or ``COGNITO_USER_POOLS``.
* **HttpMethod**: string (Required, Identifier): The method's HTTP verb.
* **Integration**: [Integration](#integration): Represents an ``HTTP``, ``HTTP_PROXY``, ``AWS``, ``AWS_PROXY``, or Mock integration.
* **MethodResponses**: [MethodResponse](#methodresponse)[]: Gets a method response associated with a given HTTP status code.
* **OperationName**: string: A human-friendly operation identifier for the method. For example, you can assign the ``operationName`` of ``ListPets`` for the ``GET /pets`` method in the ``PetStore`` example.
* **RequestModels**: [Method_RequestModels](#methodrequestmodels): A key-value map specifying data schemas, represented by Model resources, (as the mapped value) of the request payloads of given content types (as the mapping key).
* **RequestParameters**: [Method_RequestParameters](#methodrequestparameters): A key-value map defining required or optional method request parameters that can be accepted by API Gateway. A key is a method request parameter name matching the pattern of ``method.request.{location}.{name}``, where ``location`` is ``querystring``, ``path``, or ``header`` and ``name`` is a valid and unique parameter name. The value associated with the key is a Boolean flag indicating whether the parameter is required (``true``) or optional (``false``). The method request parameter names defined here are available in Integration to be mapped to integration request parameters or templates.
* **RequestValidatorId**: string: The identifier of a RequestValidator for request validation.
* **ResourceId**: string (Required, Identifier): The Resource identifier for the MethodResponse resource.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.

## Integration
### Properties
* **CacheKeyParameters**: string[]: A list of request parameters whose values API Gateway caches. To be valid values for ``cacheKeyParameters``, these parameters must also be specified for Method ``requestParameters``.
* **CacheNamespace**: string: Specifies a group of related cached parameters. By default, API Gateway uses the resource ID as the ``cacheNamespace``. You can specify the same ``cacheNamespace`` across resources to return the same cached data for requests to different resources.
* **ConnectionId**: string: The ID of the VpcLink used for the integration when ``connectionType=VPC_LINK`` and undefined, otherwise.
* **ConnectionType**: string: The type of the network connection to the integration endpoint. The valid value is ``INTERNET`` for connections through the public routable internet or ``VPC_LINK`` for private connections between API Gateway and a network load balancer in a VPC. The default value is ``INTERNET``.
* **ContentHandling**: string: Specifies how to handle request payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
 If this property is not defined, the request payload will be passed through from the method request to integration request without modification, provided that the ``passthroughBehavior`` is configured to support payload pass-through.
* **Credentials**: string: Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string ``arn:aws:iam::\*:user/\*``. To use resource-based permissions on supported AWS services, specify null.
* **IntegrationHttpMethod**: string: Specifies the integration's HTTP method type. For the Type property, if you specify ``MOCK``, this property is optional. For Lambda integrations, you must set the integration method to ``POST``. For all other types, you must specify this property.
* **IntegrationResponses**: [IntegrationResponse](#integrationresponse)[]: Specifies the integration's responses.
* **PassthroughBehavior**: string: Specifies how the method request body of an unmapped content type will be passed through the integration request to the back end without transformation. A content type is unmapped if no mapping template is defined in the integration or the content type does not match any of the mapped content types, as specified in ``requestTemplates``. The valid value is one of the following: ``WHEN_NO_MATCH``: passes the method request body through the integration request to the back end without transformation when the method request content type does not match any content type associated with the mapping templates defined in the integration request. ``WHEN_NO_TEMPLATES``: passes the method request body through the integration request to the back end without transformation when no mapping template is defined in the integration request. If a template is defined when this option is selected, the method request of an unmapped content-type will be rejected with an HTTP 415 Unsupported Media Type response. ``NEVER``: rejects the method request with an HTTP 415 Unsupported Media Type response when either the method request content type does not match any content type associated with the mapping templates defined in the integration request or no mapping template is defined in the integration request.
* **RequestParameters**: [Method_RequestParameters](#methodrequestparameters): A key-value map specifying request parameters that are passed from the method request to the back end. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the back end. The method request parameter value must match the pattern of ``method.request.{location}.{name}``, where ``location`` is ``querystring``, ``path``, or ``header`` and ``name`` must be a valid and unique method request parameter name.
* **RequestTemplates**: [Method_RequestTemplates](#methodrequesttemplates): Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value.
* **TimeoutInMillis**: int: Custom timeout between 50 and 29,000 milliseconds. The default value is 29,000 milliseconds or 29 seconds.
* **Type**: string (Required): Specifies an API method integration type. The valid value is one of the following:
 For the HTTP and HTTP proxy integrations, each integration can specify a protocol (``http/https``), port and path. Standard 80 and 443 ports are supported as well as custom ports above 1024. An HTTP or HTTP proxy integration with a ``connectionType`` of ``VPC_LINK`` is referred to as a private integration and uses a VpcLink to connect API Gateway to a network load balancer of a VPC.
* **Uri**: string: Specifies Uniform Resource Identifier (URI) of the integration endpoint.
 For ``HTTP`` or ``HTTP_PROXY`` integrations, the URI must be a fully formed, encoded HTTP(S) URL according to the RFC-3986 specification for standard integrations. If ``connectionType`` is ``VPC_LINK`` specify the Network Load Balancer DNS name. For ``AWS`` or ``AWS_PROXY`` integrations, the URI is of the form ``arn:aws:apigateway:{region}:{subdomain.service|service}:path|action/{service_api}``. Here, {Region} is the API Gateway region (e.g., us-east-1); {service} is the name of the integrated AWS service (e.g., s3); and {subdomain} is a designated subdomain supported by certain AWS service for fast host-name lookup. action can be used for an AWS service action-based API, using an Action={name}&{p1}={v1}&p2={v2}... query string. The ensuing {service_api} refers to a supported action {name} plus any required input parameters. Alternatively, path can be used for an AWS service path-based API. The ensuing service_api refers to the path to an AWS service resource, including the region of the integrated AWS service, if applicable. For example, for integration with the S3 API of GetObject, the uri can be either ``arn:aws:apigateway:us-west-2:s3:action/GetObject&Bucket={bucket}&Key={key}`` or ``arn:aws:apigateway:us-west-2:s3:path/{bucket}/{key}``

## IntegrationResponse
### Properties
* **ContentHandling**: string: Specifies how to handle response payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
 If this property is not defined, the response payload will be passed through from the integration response to the method response without modification.
* **ResponseParameters**: [Method_ResponseParameters](#methodresponseparameters): A key-value map specifying response parameters that are passed to the method response from the back end. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of ``method.response.header.{name}``, where ``name`` is a valid and unique header name. The mapped non-static value must match the pattern of ``integration.response.header.{name}`` or ``integration.response.body.{JSON-expression}``, where ``name`` is a valid and unique response header name and ``JSON-expression`` is a valid JSON expression without the ``$`` prefix.
* **ResponseTemplates**: [Method_ResponseTemplates](#methodresponsetemplates): Specifies the templates used to transform the integration response body. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
* **SelectionPattern**: string: Specifies the regular expression (regex) pattern used to choose an integration response based on the response from the back end. For example, if the success response returns nothing and the error response returns some string, you could use the ``.+`` regex to match error response. However, make sure that the error response does not contain any newline (``\n``) character in such cases. If the back end is an LAMlong function, the LAMlong function error header is matched. For all other HTTP and AWS back ends, the HTTP status code is matched.
* **StatusCode**: string (Required): Specifies the status code that is used to map the integration response to an existing MethodResponse.

## Method_ResponseParameters
### Properties

## Method_ResponseTemplates
### Properties

## Method_RequestParameters
### Properties

## Method_RequestTemplates
### Properties

## MethodResponse
### Properties
* **ResponseModels**: [Method_ResponseModels](#methodresponsemodels): Specifies the Model resources used for the response's content-type. Response models are represented as a key/value map, with a content-type as the key and a Model name as the value.
* **ResponseParameters**: [Method_ResponseParameters](#methodresponseparameters): A key-value map specifying required or optional response parameters that API Gateway can send back to the caller. A key defines a method response header and the value specifies whether the associated method response header is required or not. The expression of the key must match the pattern ``method.response.header.{name}``, where ``name`` is a valid and unique header name. API Gateway passes certain integration response data to the method response headers specified here according to the mapping you prescribe in the API's IntegrationResponse. The integration response data that can be mapped include an integration response header expressed in ``integration.response.header.{name}``, a static value enclosed within a pair of single quotes (e.g., ``'application/json'``), or a JSON expression from the back-end response payload in the form of ``integration.response.body.{JSON-expression}``, where ``JSON-expression`` is a valid JSON expression without the ``$`` prefix.)
* **StatusCode**: string (Required): The method response's status code.

## Method_ResponseModels
### Properties

## Method_ResponseParameters
### Properties

## Method_RequestModels
### Properties

## Method_RequestParameters
### Properties

## AWS.ApiGateway/ModelProperties
### Properties
* **ContentType**: string: The content-type for the model.
* **Description**: string: The description of the model.
* **Name**: string (Identifier): A name for the model. If you don't specify a name, CFN generates a unique physical ID and uses that ID for the model name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.
* **Schema**: [Model_Schema](#modelschema) | string: The schema for the model. For ``application/json`` models, this should be JSON schema draft 4 model. Do not include "\*/" characters in the description of any properties because such "\*/" characters may be interpreted as the closing marker for comments in some languages, such as Java or JavaScript, causing the installation of your API's SDK generated by API Gateway to fail.

## AWS.ApiGateway/RequestValidatorProperties
### Properties
* **Name**: string: The name of this RequestValidator
* **RequestValidatorId**: string (ReadOnly, Identifier)
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.
* **ValidateRequestBody**: bool: A Boolean flag to indicate whether to validate a request body according to the configured Model schema.
* **ValidateRequestParameters**: bool: A Boolean flag to indicate whether to validate request parameters (``true``) or not (``false``).

## AWS.ApiGateway/ResourceProperties
### Properties
* **ParentId**: string (Required): The parent resource's identifier.
* **PathPart**: string (Required): The last path segment for this resource.
* **ResourceId**: string (ReadOnly, Identifier)
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.

## AWS.ApiGateway/RestApiProperties
### Properties
* **ApiKeySourceType**: string: The source of the API key for metering requests according to a usage plan. Valid values are: ``HEADER`` to read the API key from the ``X-API-Key`` header of a request. ``AUTHORIZER`` to read the API key from the ``UsageIdentifierKey`` from a custom authorizer.
* **BinaryMediaTypes**: string[]: The list of binary media types supported by the RestApi. By default, the RestApi supports only UTF-8-encoded text payloads.
* **Body**: [RestApi_Body](#restapibody) | string (WriteOnly): An OpenAPI specification that defines a set of RESTful APIs in JSON format. For YAML templates, you can also provide the specification in YAML format.
* **BodyS3Location**: [S3Location](#s3location) (WriteOnly): The Amazon Simple Storage Service (Amazon S3) location that points to an OpenAPI file, which defines a set of RESTful APIs in JSON or YAML format.
* **CloneFrom**: string (WriteOnly): The ID of the RestApi that you want to clone from.
* **Description**: string: The description of the RestApi.
* **DisableExecuteApiEndpoint**: bool: Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint. By default, clients can invoke your API with the default ``https://{api_id}.execute-api.{region}.amazonaws.com`` endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint
* **EndpointConfiguration**: [EndpointConfiguration](#endpointconfiguration): A list of the endpoint types of the API. Use this property when creating an API. When importing an existing API, specify the endpoint configuration types using the ``Parameters`` property.
* **FailOnWarnings**: bool (WriteOnly): A query parameter to indicate whether to rollback the API update (``true``) or not (``false``) when a warning is encountered. The default value is ``false``.
* **MinimumCompressionSize**: int: A nullable integer that is used to enable compression (with non-negative between 0 and 10485760 (10M) bytes, inclusive) or disable compression (with a null value) on an API. When compression is enabled, compression or decompression is not applied on the payload if the payload size is smaller than this value. Setting it to zero allows compression for any payload size.
* **Mode**: string (WriteOnly): This property applies only when you use OpenAPI to define your REST API. The ``Mode`` determines how API Gateway handles resource updates.
 Valid values are ``overwrite`` or ``merge``. 
 For ``overwrite``, the new API definition replaces the existing one. The existing API identifier remains unchanged.
  For ``merge``, the new API definition is merged with the existing API.
 If you don't specify this property, a default value is chosen. For REST APIs created before March 29, 2021, the default is ``overwrite``. For REST APIs created after March 29, 2021, the new API definition takes precedence, but any container types such as endpoint configurations and binary media types are merged with the existing API. 
 Use the default mode to define top-level ``RestApi`` properties in addition to using OpenAPI. Generally, it's preferred to use API Gateway's OpenAPI extensions to model these properties.
* **Name**: string: The name of the RestApi. A name is required if the REST API is not based on an OpenAPI specification.
* **Parameters**: [RestApi_Parameters](#restapiparameters) | string (WriteOnly): Custom header parameters as part of the request. For example, to exclude DocumentationParts from an imported API, set ``ignore=documentation`` as a ``parameters`` value, as in the AWS CLI command of ``aws apigateway import-rest-api --parameters ignore=documentation --body 'file:///path/to/imported-api-body.json'``.
* **Policy**: [RestApi_Policy](#restapipolicy) | string: A policy document that contains the permissions for the ``RestApi`` resource. To set the ARN for the policy, use the ``!Join`` intrinsic function with ``""`` as delimiter and values of ``"execute-api:/"`` and ``"*"``.
* **RestApiId**: string (ReadOnly, Identifier)
* **RootResourceId**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with ``aws:``. The tag value can be up to 256 characters.

## S3Location
### Properties
* **Bucket**: string: The name of the S3 bucket where the OpenAPI file is stored.
* **ETag**: string: The Amazon S3 ETag (a file checksum) of the OpenAPI file. If you don't specify a value, API Gateway skips ETag validation of your OpenAPI file.
* **Key**: string: The file name of the OpenAPI file (Amazon S3 object name).
* **Version**: string: For versioning-enabled buckets, a specific version of the OpenAPI file.

## EndpointConfiguration
### Properties
* **Types**: string[]: A list of endpoint types of an API (RestApi) or its custom domain name (DomainName). For an edge-optimized API and its custom domain name, the endpoint type is ``"EDGE"``. For a regional API and its custom domain name, the endpoint type is ``REGIONAL``. For a private API, the endpoint type is ``PRIVATE``.
* **VpcEndpointIds**: string[]: A list of VpcEndpointIds of an API (RestApi) against which to create Route53 ALIASes. It is only supported for ``PRIVATE`` endpoint type.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.ApiGateway/StageProperties
### Properties
* **AccessLogSetting**: [AccessLogSetting](#accesslogsetting): Access log settings, including the access log format and access log destination ARN.
* **CacheClusterEnabled**: bool: Specifies whether a cache cluster is enabled for the stage.
* **CacheClusterSize**: string: The stage's cache capacity in GB. For more information about choosing a cache size, see [Enabling API caching to enhance responsiveness](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-caching.html).
* **CanarySetting**: [CanarySetting](#canarysetting): Settings for the canary deployment in this stage.
* **ClientCertificateId**: string: The identifier of a client certificate for an API stage.
* **DeploymentId**: string: The identifier of the Deployment that the stage points to.
* **Description**: string: The stage's description.
* **DocumentationVersion**: string: The version of the associated API documentation.
* **MethodSettings**: [MethodSetting](#methodsetting)[]: A map that defines the method settings for a Stage resource. Keys (designated as ``/{method_setting_key`` below) are method paths defined as ``{resource_path}/{http_method}`` for an individual method override, or ``/\*/\*`` for overriding all methods in the stage.
* **RestApiId**: string (Required, Identifier): The string identifier of the associated RestApi.
* **StageName**: string (Identifier): The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
* **Tags**: [Tag](#tag)[]: The collection of tags. Each tag element is associated with a given resource.
* **TracingEnabled**: bool: Specifies whether active tracing with X-ray is enabled for the Stage.
* **Variables**: [Stage_Variables](#stagevariables): A map (string-to-string map) that defines the stage variables, where the variable name is the key and the variable value is the value. Variable names are limited to alphanumeric characters. Values must match the following regular expression: ``[A-Za-z0-9-._~:/?#&=,]+``.

## AccessLogSetting
### Properties
* **DestinationArn**: string: The Amazon Resource Name (ARN) of the CloudWatch Logs log group or Kinesis Data Firehose delivery stream to receive access logs. If you specify a Kinesis Data Firehose delivery stream, the stream name must begin with ``amazon-apigateway-``. This parameter is required to enable access logging.
* **Format**: string: A single line format of the access logs of data, as specified by selected [$context variables](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html#context-variable-reference). The format must include at least ``$context.requestId``. This parameter is required to enable access logging.

## CanarySetting
### Properties
* **DeploymentId**: string: The ID of the canary deployment.
* **PercentTraffic**: int: The percent (0-100) of traffic diverted to a canary deployment.
* **StageVariableOverrides**: [Stage_StageVariableOverrides](#stagestagevariableoverrides): Stage variables overridden for a canary release deployment, including new stage variables introduced in the canary. These stage variables are represented as a string-to-string map between stage variable names and their values.
* **UseStageCache**: bool: A Boolean flag to indicate whether the canary deployment uses the stage cache or not.

## Stage_StageVariableOverrides
### Properties

## MethodSetting
### Properties
* **CacheDataEncrypted**: bool: Specifies whether the cached responses are encrypted.
* **CacheTtlInSeconds**: int: Specifies the time to live (TTL), in seconds, for cached responses. The higher the TTL, the longer the response will be cached.
* **CachingEnabled**: bool: Specifies whether responses should be cached and returned for requests. A cache cluster must be enabled on the stage for responses to be cached.
* **DataTraceEnabled**: bool: Specifies whether data trace logging is enabled for this method, which affects the log entries pushed to Amazon CloudWatch Logs. This can be useful to troubleshoot APIs, but can result in logging sensitive data. We recommend that you don't enable this option for production APIs.
* **HttpMethod**: string: The HTTP method. To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
* **LoggingLevel**: string: Specifies the logging level for this method, which affects the log entries pushed to Amazon CloudWatch Logs. Valid values are ``OFF``, ``ERROR``, and ``INFO``. Choose ``ERROR`` to write only error-level entries to CloudWatch Logs, or choose ``INFO`` to include all ``ERROR`` events as well as extra informational events.
* **MetricsEnabled**: bool: Specifies whether Amazon CloudWatch metrics are enabled for this method.
* **ResourcePath**: string: The resource path for this method. Forward slashes (``/``) are encoded as ``~1`` and the initial slash must include a forward slash. For example, the path value ``/resource/subresource`` must be encoded as ``/~1resource~1subresource``. To specify the root path, use only a slash (``/``). To apply settings to multiple resources and methods, specify an asterisk (``*``) for the ``HttpMethod`` and ``/*`` for the ``ResourcePath``. This parameter is required when you specify a ``MethodSetting``.
* **ThrottlingBurstLimit**: int: Specifies the throttling burst limit.
* **ThrottlingRateLimit**: int: Specifies the throttling rate limit.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.

## Stage_Variables
### Properties

## AWS.ApiGateway/UsagePlanProperties
### Properties
* **ApiStages**: [ApiStage](#apistage)[]: The associated API stages of a usage plan.
* **Description**: string: The description of a usage plan.
* **Id**: string (ReadOnly, Identifier)
* **Quota**: [QuotaSettings](#quotasettings): The target maximum number of permitted requests per a given unit time interval.
* **Tags**: [Tag](#tag)[]: The collection of tags. Each tag element is associated with a given resource.
* **Throttle**: [ThrottleSettings](#throttlesettings): A map containing method level throttling information for API stage in a usage plan.
* **UsagePlanName**: string: The name of a usage plan.

## ApiStage
### Properties
* **ApiId**: string: API Id of the associated API stage in a usage plan.
* **Stage**: string: API stage name of the associated API stage in a usage plan.
* **Throttle**: [UsagePlan_Throttle](#usageplanthrottle): Map containing method level throttling information for API stage in a usage plan.

## UsagePlan_Throttle
### Properties

## QuotaSettings
### Properties
* **Limit**: int: The target maximum number of requests that can be made in a given time period.
* **Offset**: int: The number of requests subtracted from the given limit in the initial time period.
* **Period**: string: The time period in which the limit applies. Valid values are "DAY", "WEEK" or "MONTH".

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## ThrottleSettings
### Properties
* **BurstLimit**: int: The API target request burst rate limit. This allows more requests through for a period of time than the target rate limit.
* **RateLimit**: int: The API target request rate limit.

## AWS.ApiGateway/VpcLinkProperties
### Properties
* **Description**: string: A description of the VPC link.
* **Name**: string (Required): A name for the VPC link.
* **Tags**: [Tag](#tag)[]: An array of arbitrary tags (key-value pairs) to associate with the stage.
* **TargetArns**: string[] (Required): The ARN of network load balancer of the VPC targeted by the VPC link. The network load balancer must be owned by the same AWS account of the API owner.
* **VpcLinkId**: string (ReadOnly, Identifier): The ID of the instance that backs VPC link.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

