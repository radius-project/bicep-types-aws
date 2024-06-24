# AWS.ApiGatewayV2 @ default

## Resource AWS.ApiGatewayV2/Api@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/ApiProperties](#awsapigatewayv2apiproperties) (Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/ApiMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/ApiMappingProperties](#awsapigatewayv2apimappingproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/Authorizer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/AuthorizerProperties](#awsapigatewayv2authorizerproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/Deployment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/DeploymentProperties](#awsapigatewayv2deploymentproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/DomainName@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/DomainNameProperties](#awsapigatewayv2domainnameproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/Integration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/IntegrationProperties](#awsapigatewayv2integrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/IntegrationResponse@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/IntegrationResponseProperties](#awsapigatewayv2integrationresponseproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/Model@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/ModelProperties](#awsapigatewayv2modelproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/Route@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/RouteProperties](#awsapigatewayv2routeproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/RouteResponse@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/RouteResponseProperties](#awsapigatewayv2routeresponseproperties) (Required, Identifier): properties of the resource

## Resource AWS.ApiGatewayV2/VpcLink@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApiGatewayV2/VpcLinkProperties](#awsapigatewayv2vpclinkproperties) (Required, Identifier): properties of the resource

## Api_Body
### Properties

## Api_Tags
### Properties

## AWS.ApiGatewayV2/ApiMappingProperties
### Properties
* **ApiId**: string (Required): The identifier of the API.
* **ApiMappingId**: string (ReadOnly, Identifier)
* **ApiMappingKey**: string: The API mapping key.
* **DomainName**: string (Required, Identifier): The domain name.
* **Stage**: string (Required): The API stage.

## AWS.ApiGatewayV2/ApiProperties
### Properties
* **ApiEndpoint**: string (ReadOnly)
* **ApiId**: string (ReadOnly, Identifier)
* **ApiKeySelectionExpression**: string: An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
* **BasePath**: string (WriteOnly): Specifies how to interpret the base path of the API during import. Valid values are ``ignore``, ``prepend``, and ``split``. The default value is ``ignore``. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.
* **Body**: [Api_Body](#apibody) (WriteOnly): The OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
* **BodyS3Location**: [BodyS3Location](#bodys3location) (WriteOnly): The S3 location of an OpenAPI definition. Supported only for HTTP APIs. To import an HTTP API, you must specify a ``Body`` or ``BodyS3Location``. If you specify a ``Body`` or ``BodyS3Location``, don't specify CloudFormation resources such as ``AWS::ApiGatewayV2::Authorizer`` or ``AWS::ApiGatewayV2::Route``. API Gateway doesn't support the combination of OpenAPI and CloudFormation resources.
* **CorsConfiguration**: [Cors](#cors): A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
* **CredentialsArn**: string (WriteOnly): This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify ``arn:aws:iam::*:user/*``. To use resource-based permissions on supported AWS services, specify ``null``. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.
* **Description**: string: The description of the API.
* **DisableExecuteApiEndpoint**: bool: Specifies whether clients can invoke your API by using the default ``execute-api`` endpoint. By default, clients can invoke your API with the default https://{api_id}.execute-api.{region}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
* **DisableSchemaValidation**: bool (WriteOnly): Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
* **FailOnWarnings**: bool (WriteOnly): Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
* **Name**: string: The name of the API. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.
* **ProtocolType**: string: The API protocol. Valid values are ``WEBSOCKET`` or ``HTTP``. Required unless you specify an OpenAPI definition for ``Body`` or ``S3BodyLocation``.
* **RouteKey**: string (WriteOnly): This property is part of quick create. If you don't specify a ``routeKey``, a default route of ``$default`` is created. The ``$default`` route acts as a catch-all for any request made to your API, for a particular stage. The ``$default`` route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.
* **RouteSelectionExpression**: string: The route selection expression for the API. For HTTP APIs, the ``routeSelectionExpression`` must be ``${request.method} ${request.path}``. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
* **Tags**: [Api_Tags](#apitags): The collection of tags. Each tag element is associated with a given resource.
* **Target**: string (WriteOnly): This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.
* **Version**: string: A version identifier for the API.

## AWS.ApiGatewayV2/AuthorizerProperties
### Properties
* **ApiId**: string (Required, Identifier): The API identifier.
* **AuthorizerCredentialsArn**: string: Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, specify null. Supported only for ``REQUEST`` authorizers.
* **AuthorizerId**: string (ReadOnly, Identifier)
* **AuthorizerPayloadFormatVersion**: string: Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are ``1.0`` and ``2.0``. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
* **AuthorizerResultTtlInSeconds**: int: The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
* **AuthorizerType**: string (Required): The authorizer type. Specify ``REQUEST`` for a Lambda function using incoming request parameters. Specify ``JWT`` to use JSON Web Tokens (supported only for HTTP APIs).
* **AuthorizerUri**: string: The authorizer's Uniform Resource Identifier (URI). For ``REQUEST`` authorizers, this must be a well-formed Lambda function URI, for example, ``arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:{account_id}:function:{lambda_function_name}/invocations``. In general, the URI has this form: ``arn:aws:apigateway:{region}:lambda:path/{service_api}``, where *{region}* is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial ``/``. For Lambda functions, this is usually of the form ``/2015-03-31/functions/[FunctionARN]/invocations``.
* **EnableSimpleResponses**: bool: Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
* **IdentitySource**: string[]: The identity source for which authorization is requested.
 For a ``REQUEST`` authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with ``$``, for example, ``$request.header.Auth``, ``$request.querystring.Name``. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
 For ``JWT``, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example ``$request.header.Authorization``.
* **IdentityValidationExpression**: string: This parameter is not used.
* **JwtConfiguration**: [JWTConfiguration](#jwtconfiguration): The ``JWTConfiguration`` property specifies the configuration of a JWT authorizer. Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.
* **Name**: string (Required): The name of the authorizer.

## AWS.ApiGatewayV2/DeploymentProperties
### Properties
* **ApiId**: string (Required, Identifier): The API identifier.
* **DeploymentId**: string (ReadOnly, Identifier)
* **Description**: string: The description for the deployment resource.
* **StageName**: string (WriteOnly): The name of an existing stage to associate with the deployment.

## AWS.ApiGatewayV2/DomainNameProperties
### Properties
* **DomainName**: string (Required, Identifier): The custom domain name for your API in Amazon API Gateway. Uppercase letters are not supported.
* **DomainNameConfigurations**: [DomainNameConfiguration](#domainnameconfiguration)[]: The domain name configurations.
* **MutualTlsAuthentication**: [MutualTlsAuthentication](#mutualtlsauthentication): The mutual TLS authentication configuration for a custom domain name.
* **RegionalDomainName**: string (ReadOnly)
* **RegionalHostedZoneId**: string (ReadOnly)
* **Tags**: [DomainName_Tags](#domainnametags): The collection of tags associated with a domain name.

## AWS.ApiGatewayV2/IntegrationProperties
### Properties
* **ApiId**: string (Required)
* **ConnectionId**: string
* **ConnectionType**: string
* **ContentHandlingStrategy**: string
* **CredentialsArn**: string
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **IntegrationMethod**: string
* **IntegrationSubtype**: string
* **IntegrationType**: string (Required)
* **IntegrationUri**: string
* **PassthroughBehavior**: string
* **PayloadFormatVersion**: string
* **RequestParameters**: [Integration_RequestParameters](#integrationrequestparameters)
* **RequestTemplates**: [Integration_RequestTemplates](#integrationrequesttemplates)
* **ResponseParameters**: [Integration_ResponseParameters](#integrationresponseparameters)
* **TemplateSelectionExpression**: string
* **TimeoutInMillis**: int
* **TlsConfig**: [TlsConfig](#tlsconfig)

## AWS.ApiGatewayV2/IntegrationResponseProperties
### Properties
* **ApiId**: string (Required, Identifier): The API identifier.
* **ContentHandlingStrategy**: string: Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are ``CONVERT_TO_BINARY`` and ``CONVERT_TO_TEXT``, with the following behaviors:
  ``CONVERT_TO_BINARY``: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
  ``CONVERT_TO_TEXT``: Converts a response payload from a binary blob to a Base64-encoded string.
 If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
* **IntegrationId**: string (Required, Identifier): The integration ID.
* **IntegrationResponseId**: string (ReadOnly, Identifier)
* **IntegrationResponseKey**: string (Required): The integration response key.
* **ResponseParameters**: [IntegrationResponse_ResponseParameters](#integrationresponseresponseparameters): A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of ``method.response.header.{name}``, where name is a valid and unique header name. The mapped non-static value must match the pattern of ``integration.response.header.{name}`` or ``integration.response.body.{JSON-expression}``, where ``{name}`` is a valid and unique response header name and ``{JSON-expression}`` is a valid JSON expression without the ``$`` prefix.
* **ResponseTemplates**: [IntegrationResponse_ResponseTemplates](#integrationresponseresponsetemplates): The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
* **TemplateSelectionExpression**: string: The template selection expression for the integration response. Supported only for WebSocket APIs.

## AWS.ApiGatewayV2/ModelProperties
### Properties
* **ApiId**: string (Required, Identifier): The API identifier.
* **ContentType**: string: The content-type for the model, for example, "application/json".
* **Description**: string: The description of the model.
* **ModelId**: string (ReadOnly, Identifier)
* **Name**: string (Required): The name of the model.
* **Schema**: [Model_Schema](#modelschema) (Required): The schema for the model. For application/json models, this should be JSON schema draft 4 model.

## AWS.ApiGatewayV2/RouteProperties
### Properties
* **ApiId**: string (Required, Identifier): The API identifier.
* **ApiKeyRequired**: bool: Specifies whether an API key is required for the route. Supported only for WebSocket APIs.
* **AuthorizationScopes**: string[]: The authorization scopes supported by this route.
* **AuthorizationType**: string: The authorization type for the route. For WebSocket APIs, valid values are ``NONE`` for open access, ``AWS_IAM`` for using AWS IAM permissions, and ``CUSTOM`` for using a Lambda authorizer. For HTTP APIs, valid values are ``NONE`` for open access, ``JWT`` for using JSON Web Tokens, ``AWS_IAM`` for using AWS IAM permissions, and ``CUSTOM`` for using a Lambda authorizer.
* **AuthorizerId**: string (WriteOnly): The identifier of the ``Authorizer`` resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
* **ModelSelectionExpression**: string: The model selection expression for the route. Supported only for WebSocket APIs.
* **OperationName**: string: The operation name for the route.
* **RequestModels**: [Route_RequestModels](#routerequestmodels): The request models for the route. Supported only for WebSocket APIs.
* **RequestParameters**: [Route_RequestParameters](#routerequestparameters) (WriteOnly): The request parameters for the route. Supported only for WebSocket APIs.
* **RouteId**: string (ReadOnly, Identifier)
* **RouteKey**: string (Required): The route key for the route. For HTTP APIs, the route key can be either ``$default``, or a combination of an HTTP method and resource path, for example, ``GET /pets``.
* **RouteResponseSelectionExpression**: string: The route response selection expression for the route. Supported only for WebSocket APIs.
* **Target**: string: The target for the route.

## AWS.ApiGatewayV2/RouteResponseProperties
### Properties
* **ApiId**: string (Required, Identifier): The API identifier.
* **ModelSelectionExpression**: string: The model selection expression for the route response. Supported only for WebSocket APIs.
* **ResponseModels**: [RouteResponse_ResponseModels](#routeresponseresponsemodels): The response models for the route response.
* **ResponseParameters**: [RouteParameters](#routeparameters): The route response parameters.
* **RouteId**: string (Required, Identifier): The route ID.
* **RouteResponseId**: string (ReadOnly, Identifier)
* **RouteResponseKey**: string (Required): The route response key.

## AWS.ApiGatewayV2/VpcLinkProperties
### Properties
* **Name**: string (Required)
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[] (Required)
* **Tags**: [VpcLink_Tags](#vpclinktags): This resource type use map for Tags, suggest to use List of Tag
* **VpcLinkId**: string (ReadOnly, Identifier)

## BodyS3Location
### Properties
* **Bucket**: string (WriteOnly): The S3 bucket that contains the OpenAPI definition to import. Required if you specify a ``BodyS3Location`` for an API.
* **Etag**: string (WriteOnly): The Etag of the S3 object.
* **Key**: string (WriteOnly): The key of the S3 object. Required if you specify a ``BodyS3Location`` for an API.
* **Version**: string (WriteOnly): The version of the S3 object.

## Cors
### Properties
* **AllowCredentials**: bool: Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.
* **AllowHeaders**: string[]: Represents a collection of allowed headers. Supported only for HTTP APIs.
* **AllowMethods**: string[]: Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.
* **AllowOrigins**: string[]: Represents a collection of allowed origins. Supported only for HTTP APIs.
* **ExposeHeaders**: string[]: Represents a collection of exposed headers. Supported only for HTTP APIs.
* **MaxAge**: int: The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.

## DomainName_Tags
### Properties

## DomainNameConfiguration
### Properties
* **CertificateArn**: string: An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
* **CertificateName**: string: The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
* **EndpointType**: string: The endpoint type.
* **OwnershipVerificationCertificateArn**: string: The Amazon resource name (ARN) for the public certificate issued by ACMlong. This ARN is used to validate custom domain ownership. It's required only if you configure mutual TLS and use either an ACM-imported or a private CA certificate ARN as the regionalCertificateArn.
* **SecurityPolicy**: string: The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are ``TLS_1_0`` and ``TLS_1_2``.

## Integration_RequestParameters
### Properties

## Integration_RequestTemplates
### Properties

## Integration_ResponseParameters
### Properties

## IntegrationResponse_ResponseParameters
### Properties

## IntegrationResponse_ResponseTemplates
### Properties

## JWTConfiguration
### Properties
* **Audience**: string[]: A list of the intended recipients of the JWT. A valid JWT must provide an ``aud`` that matches at least one entry in this list. See [RFC 7519](https://docs.aws.amazon.com/https://tools.ietf.org/html/rfc7519#section-4.1.3). Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.
* **Issuer**: string: The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: ``https://cognito-idp.{region}.amazonaws.com/{userPoolId}``. Required for the ``JWT`` authorizer type. Supported only for HTTP APIs.

## Model_Schema
### Properties

## MutualTlsAuthentication
### Properties
* **TruststoreUri**: string: An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, ``s3://bucket-name/key-name``. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
* **TruststoreVersion**: string: The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.

## Route_RequestModels
### Properties

## Route_RequestParameters
### Properties

## RouteParameters
### Properties

## RouteResponse_ResponseModels
### Properties

## TlsConfig
### Properties
* **ServerNameToVerify**: string

## VpcLink_Tags
### Properties

