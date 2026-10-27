# AWS.ServiceDiscovery @ default

## Resource AWS.ServiceDiscovery/HttpNamespace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceDiscovery/HttpNamespaceProperties](#awsservicediscoveryhttpnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceDiscovery/Instance@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceDiscovery/InstanceProperties](#awsservicediscoveryinstanceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceDiscovery/PrivateDnsNamespace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceDiscovery/PrivateDnsNamespaceProperties](#awsservicediscoveryprivatednsnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceDiscovery/PublicDnsNamespace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceDiscovery/PublicDnsNamespaceProperties](#awsservicediscoverypublicdnsnamespaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceDiscovery/Service@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceDiscovery/ServiceProperties](#awsservicediscoveryserviceproperties) (Identifier): properties of the resource

## AWS.ServiceDiscovery/HttpNamespaceProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the namespace.
* **Description**: string: A description for the namespace.
* **Id**: string (ReadOnly, Identifier): The ID of the namespace.
* **Name**: string (Required): The name that you want to assign to this namespace.
* **Tags**: [Tag](#tag)[]: The tags for the namespace. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

## AWS.ServiceDiscovery/InstanceProperties
### Properties
* **InstanceAttributes**: [Instance_InstanceAttributes](#instanceinstanceattributes) (Required): A string map that contains information for the service that is specified in ServiceId.
* **InstanceId**: string (Identifier): An identifier that you want to associate with the instance.
* **ServiceId**: string (Required, Identifier): The ID or Amazon Resource Name (ARN) of the service that you want to use for settings for the instance.

## AWS.ServiceDiscovery/PrivateDnsNamespaceProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the private namespace.
* **Description**: string: A description of the namespace.
* **HostedZoneId**: string (ReadOnly): The ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.
* **Id**: string (ReadOnly, Identifier): The ID of the private namespace.
* **Name**: string (Required): The name that you want to assign to this namespace. When you create a private DNS namespace, AWS Cloud Map automatically creates an Amazon Route 53 private hosted zone that has the same name as the namespace.
* **Properties**: [Properties](#properties): Properties of the private DNS namespace.
* **Tags**: [Tag](#tag)[]: The tags for the namespace. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
* **Vpc**: string (WriteOnly): The ID of the Amazon VPC that you want to associate the namespace with.

## AWS.ServiceDiscovery/PublicDnsNamespaceProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the public namespace.
* **Description**: string: A description for the namespace.
* **HostedZoneId**: string (ReadOnly): The ID for the Route 53 hosted zone that AWS Cloud Map creates when you create a namespace.
* **Id**: string (ReadOnly, Identifier): The ID of the public namespace.
* **Name**: string (Required): The name that you want to assign to this namespace.
* **Properties**: [Properties](#properties): Properties for the public DNS namespace.
* **Tags**: [Tag](#tag)[]: The tags for the namespace. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.

## AWS.ServiceDiscovery/ServiceProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the service.
* **Description**: string: A description for the service.
* **DnsConfig**: [DnsConfig](#dnsconfig): DNS-related configurations for the service.
* **HealthCheckConfig**: [HealthCheckConfig](#healthcheckconfig): Settings for health checks. Used when routing is DNS-based.
* **HealthCheckCustomConfig**: [HealthCheckCustomConfig](#healthcheckcustomconfig): Settings for custom health checks.
* **Id**: string (ReadOnly, Identifier): The unique identifier for the service.
* **Name**: string: The name of the service.
* **NamespaceId**: string: The ID of the namespace in which the service is created.
* **ServiceAttributes**: [Service_ServiceAttributes](#serviceserviceattributes): A string map that contains attributes and values for the service. You can specify a maximum of 30 key-value pairs.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to associate with the service.
* **Type**: string: The type of service. Supported values are HTTP or DNS.

## DnsConfig
### Properties
* **DnsRecords**: [DnsRecord](#dnsrecord)[] (Required): A list of DNS records associated with the service.
* **NamespaceId**: string: The ID of the namespace for the DNS configuration.
* **RoutingPolicy**: string: The routing policy to use for DNS queries.

## DnsRecord
### Properties
* **TTL**: int (Required): The time-to-live (TTL) for the DNS record.
* **Type**: string (Required): The DNS record type (e.g., A, AAAA, SRV).

## HealthCheckConfig
### Properties
* **FailureThreshold**: int: The number of consecutive health check failures that must occur before declaring the service unhealthy.
* **ResourcePath**: string: The path to ping on the service for health checks.
* **Type**: string (Required): The type of health check (e.g., HTTP, HTTPS, TCP).

## HealthCheckCustomConfig
### Properties
* **FailureThreshold**: int: The number of consecutive health check failures required before the service is considered unhealthy.

## Instance_InstanceAttributes
### Properties

## PrivateDnsPropertiesMutable
### Properties
* **SOA**: [SOA](#soa)

## Properties
### Properties
* **DnsProperties**: [PrivateDnsPropertiesMutable](#privatednspropertiesmutable)

## Properties
### Properties
* **DnsProperties**: [PublicDnsPropertiesMutable](#publicdnspropertiesmutable)

## PublicDnsPropertiesMutable
### Properties
* **SOA**: [SOA](#soa)

## Service_ServiceAttributes
### Properties

## SOA
### Properties
* **TTL**: int

## SOA
### Properties
* **TTL**: int

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value of the tag.

