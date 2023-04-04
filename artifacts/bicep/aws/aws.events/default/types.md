# AWS.Events @ default

## Resource AWS.Events/ApiDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/ApiDestinationProperties](#awseventsapidestinationproperties) (Required): properties of the resource

## Resource AWS.Events/Archive@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/ArchiveProperties](#awseventsarchiveproperties) (Required): properties of the resource

## Resource AWS.Events/Connection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/ConnectionProperties](#awseventsconnectionproperties) (Required): properties of the resource

## Resource AWS.Events/Endpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Events/EndpointProperties](#awseventsendpointproperties) (Required): properties of the resource

## AWS.Events/ApiDestinationProperties
### Properties
* **Arn**: string (ReadOnly): The arn of the api destination.
* **ConnectionArn**: string (Required): The arn of the connection.
* **Description**: string
* **HttpMethod**: string (Required)
* **InvocationEndpoint**: string (Required): Url endpoint to invoke.
* **InvocationRateLimitPerSecond**: int
* **Name**: string (Identifier): Name of the apiDestination.

## AWS.Events/ArchiveProperties
### Properties
* **ArchiveName**: string (ReadOnly, Identifier)
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
* **Name**: string (Identifier): Name of the connection.
* **SecretArn**: string (ReadOnly): The arn of the secrets manager secret created in the customer account.

## AuthParameters
### Properties

## AWS.Events/EndpointProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **EndpointId**: string (ReadOnly)
* **EndpointUrl**: string (ReadOnly)
* **EventBuses**: [EndpointEventBus](#endpointeventbus)[] (Required)
* **Name**: string (Required, Identifier)
* **ReplicationConfig**: [ReplicationConfig](#replicationconfig)
* **RoleArn**: string
* **RoutingConfig**: [RoutingConfig](#routingconfig) (Required)
* **State**: string (ReadOnly)
* **StateReason**: string (ReadOnly)

## EndpointEventBus
### Properties
* **EventBusArn**: string (Required)

## ReplicationConfig
### Properties
* **State**: string (Required)

## RoutingConfig
### Properties
* **FailoverConfig**: [FailoverConfig](#failoverconfig) (Required)

## FailoverConfig
### Properties
* **Primary**: [Primary](#primary) (Required)
* **Secondary**: [Secondary](#secondary) (Required)

## Primary
### Properties
* **HealthCheck**: string (Required)

## Secondary
### Properties
* **Route**: string (Required)

