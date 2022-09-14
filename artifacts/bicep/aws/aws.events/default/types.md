# AWS.Events @ default

## Resource AWS.Events/ApiDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/ApiDestinationProperties](#awseventsapidestinationproperties) (Required): properties of the resource

## Resource AWS.Events/Archive@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/ArchiveProperties](#awseventsarchiveproperties) (Required): properties of the resource

## Resource AWS.Events/Connection@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/ConnectionProperties](#awseventsconnectionproperties) (Required): properties of the resource

## Resource AWS.Events/Endpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/EndpointProperties](#awseventsendpointproperties) (Required): properties of the resource

## AWS.Events/ApiDestinationProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the api destination.
* **ConnectionArn**: string (Required): The arn of the connection.
* **Description**: string
* **HttpMethod**: string (Required)
* **InvocationEndpoint**: string (Required): Url endpoint to invoke.
* **InvocationRateLimitPerSecond**: int
* **Name**: string: Name of the apiDestination.

## AWS.Events/ArchiveProperties
### Properties
* **ArchiveName**: string (ReadOnly)
* **Arn**: string (ReadOnly)
* **Description**: string
* **EventPattern**: [Archive_EventPattern](#archiveeventpattern)
* **RetentionDays**: int
* **SourceArn**: string (Required)

## Archive_EventPattern
### Properties

## AWS.Events/ConnectionProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the connection resource.
* **AuthorizationType**: string (Required)
* **AuthParameters**: [AuthParameters](#authparameters) (Required, WriteOnly)
* **Description**: string: Description of the connection.
* **Name**: string: Name of the connection.
* **SecretArn**: string (ReadOnly): The arn of the secrets manager secret created in the customer account.

## AuthParameters
### Properties
* **ApiKeyAuthParameters**: [ApiKeyAuthParameters](#apikeyauthparameters)
* **BasicAuthParameters**: [BasicAuthParameters](#basicauthparameters)
* **InvocationHttpParameters**: [ConnectionHttpParameters](#connectionhttpparameters)
* **OAuthParameters**: [OAuthParameters](#oauthparameters)

## ApiKeyAuthParameters
### Properties
* **ApiKeyName**: string (Required)
* **ApiKeyValue**: string (Required)

## BasicAuthParameters
### Properties
* **Password**: string (Required)
* **Username**: string (Required)

## ConnectionHttpParameters
### Properties
* **BodyParameters**: [Parameter](#parameter)[]
* **HeaderParameters**: [Parameter](#parameter)[]
* **QueryStringParameters**: [Parameter](#parameter)[]

## Parameter
### Properties
* **IsValueSecret**: bool
* **Key**: string (Required)
* **Value**: string (Required)

## OAuthParameters
### Properties
* **AuthorizationEndpoint**: string (Required)
* **ClientParameters**: [ClientParameters](#clientparameters) (Required)
* **HttpMethod**: string (Required)
* **OAuthHttpParameters**: [ConnectionHttpParameters](#connectionhttpparameters)

## ClientParameters
### Properties
* **ClientID**: string (Required)
* **ClientSecret**: string (Required)

## AWS.Events/EndpointProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **EndpointId**: string (ReadOnly)
* **EndpointUrl**: string (ReadOnly)
* **EventBuses**: [EventBuses](#eventbuses) (Required)
* **Name**: string (Required)
* **ReplicationConfig**: [ReplicationConfig](#replicationconfig)
* **RoleArn**: string
* **RoutingConfig**: [RoutingConfig](#routingconfig) (Required)
* **State**: string (ReadOnly)
* **StateReason**: string (ReadOnly)

## EventBuses
### Properties

## ReplicationConfig
### Properties
* **State**: [ReplicationState](#replicationstate) (Required)

## ReplicationState
### Properties

## RoutingConfig
### Properties
* **FailoverConfig**: [FailoverConfig](#failoverconfig) (Required)

## FailoverConfig
### Properties
* **Primary**: [Primary](#primary) (Required)
* **Secondary**: [Secondary](#secondary) (Required)

## Primary
### Properties
* **HealthCheck**: [HealthCheck](#healthcheck) (Required)

## HealthCheck
### Properties

## Secondary
### Properties
* **Route**: [Route](#route) (Required)

## Route
### Properties

