# AWS.Events @ default

## Resource AWS.Events/ApiDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/ApiDestinationProperties](#awseventsapidestinationproperties): properties of the resource

## Resource AWS.Events/Archive@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/ArchiveProperties](#awseventsarchiveproperties): properties of the resource

## Resource AWS.Events/Connection@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/ConnectionProperties](#awseventsconnectionproperties): properties of the resource

## Resource AWS.Events/Endpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Events/EndpointProperties](#awseventsendpointproperties): properties of the resource

## AWS.Events/ApiDestinationProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the api destination.
* **ConnectionArn**: string: The arn of the connection.
* **Description**: string
* **HttpMethod**: string
* **InvocationEndpoint**: string: Url endpoint to invoke.
* **InvocationRateLimitPerSecond**: int
* **Name**: string: Name of the apiDestination.

## AWS.Events/ArchiveProperties
### Properties
* **ArchiveName**: string (ReadOnly)
* **Arn**: string (ReadOnly)
* **Description**: string
* **EventPattern**: [Archive_EventPattern](#archiveeventpattern)
* **RetentionDays**: int
* **SourceArn**: string

## Archive_EventPattern
### Properties

## AWS.Events/ConnectionProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the connection resource.
* **AuthorizationType**: string
* **AuthParameters**: [AuthParameters](#authparameters) (WriteOnly)
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
* **ApiKeyName**: string
* **ApiKeyValue**: string

## BasicAuthParameters
### Properties
* **Password**: string
* **Username**: string

## ConnectionHttpParameters
### Properties
* **BodyParameters**: [Parameter](#parameter)[]
* **HeaderParameters**: [Parameter](#parameter)[]
* **QueryStringParameters**: [Parameter](#parameter)[]

## Parameter
### Properties
* **IsValueSecret**: bool
* **Key**: string
* **Value**: string

## OAuthParameters
### Properties
* **AuthorizationEndpoint**: string
* **ClientParameters**: [ClientParameters](#clientparameters)
* **HttpMethod**: string
* **OAuthHttpParameters**: [ConnectionHttpParameters](#connectionhttpparameters)

## ClientParameters
### Properties
* **ClientID**: string
* **ClientSecret**: string

## AWS.Events/EndpointProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **EndpointId**: string (ReadOnly)
* **EndpointUrl**: string (ReadOnly)
* **EventBuses**: [EventBuses](#eventbuses)
* **Name**: string
* **ReplicationConfig**: [ReplicationConfig](#replicationconfig)
* **RoleArn**: string
* **RoutingConfig**: [RoutingConfig](#routingconfig)
* **State**: string (ReadOnly)
* **StateReason**: string (ReadOnly)

## EventBuses
### Properties

## ReplicationConfig
### Properties
* **State**: [ReplicationState](#replicationstate)

## ReplicationState
### Properties

## RoutingConfig
### Properties
* **FailoverConfig**: [FailoverConfig](#failoverconfig)

## FailoverConfig
### Properties
* **Primary**: [Primary](#primary)
* **Secondary**: [Secondary](#secondary)

## Primary
### Properties
* **HealthCheck**: [HealthCheck](#healthcheck)

## HealthCheck
### Properties

## Secondary
### Properties
* **Route**: [Route](#route)

## Route
### Properties

