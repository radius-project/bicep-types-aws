# AWS.Route53 @ default

## Resource AWS.Route53/CidrCollection@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53/CidrCollectionProperties](#awsroute53cidrcollectionproperties): properties of the resource

## Resource AWS.Route53/HealthCheck@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53/HealthCheckProperties](#awsroute53healthcheckproperties): properties of the resource

## Resource AWS.Route53/HostedZone@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53/HostedZoneProperties](#awsroute53hostedzoneproperties): properties of the resource

## Resource AWS.Route53/KeySigningKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53/KeySigningKeyProperties](#awsroute53keysigningkeyproperties): properties of the resource

## AWS.Route53/CidrCollectionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon resource name (ARN) to uniquely identify the AWS resource.
* **Id**: string (ReadOnly): UUID of the CIDR collection.
* **Locations**: [Location](#location)[]: A complex type that contains information about the list of CIDR locations.
* **Name**: string: A unique name for the CIDR collection.

## Location
### Properties
* **CidrList**: string[]: A list of CIDR blocks.
* **LocationName**: string: The name of the location that is associated with the CIDR collection.

## AWS.Route53/HealthCheckProperties
### Properties
* **HealthCheckConfig**: [HealthCheck_HealthCheckConfig](#healthcheckhealthcheckconfig): A complex type that contains information about the health check.
* **HealthCheckId**: string (ReadOnly)
* **HealthCheckTags**: [HealthCheckTag](#healthchecktag)[]: An array of key-value pairs to apply to this resource.

## HealthCheck_HealthCheckConfig
### Properties
* **AlarmIdentifier**: [AlarmIdentifier](#alarmidentifier)
* **ChildHealthChecks**: string[]
* **EnableSNI**: bool
* **FailureThreshold**: int
* **FullyQualifiedDomainName**: string
* **HealthThreshold**: int
* **InsufficientDataHealthStatus**: string
* **Inverted**: bool
* **IPAddress**: string
* **MeasureLatency**: bool
* **Port**: int
* **Regions**: string[]
* **RequestInterval**: int
* **ResourcePath**: string
* **RoutingControlArn**: string
* **SearchString**: string
* **Type**: string

## AlarmIdentifier
### Properties
* **Name**: string: The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
* **Region**: string: For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

## HealthCheckTag
### Properties
* **Key**: string: The key name of the tag.
* **Value**: string: The value for the tag.

## AWS.Route53/HostedZoneProperties
### Properties
* **HostedZoneConfig**: [HostedZoneConfig](#hostedzoneconfig)
* **HostedZoneTags**: [HostedZoneTag](#hostedzonetag)[]: Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see Using Cost Allocation Tags in the AWS Billing and Cost Management User Guide.
* **Id**: string (ReadOnly)
* **Name**: string: The name of the domain. Specify a fully qualified domain name, for example, www.example.com. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats www.example.com (without a trailing dot) and www.example.com. (with a trailing dot) as identical.

If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of NameServers that are returned by the Fn::GetAtt intrinsic function.
* **NameServers**: string[] (ReadOnly)
* **QueryLoggingConfig**: [QueryLoggingConfig](#queryloggingconfig)
* **VPCs**: [VPC](#vpc)[]: A complex type that contains information about the VPCs that are associated with the specified hosted zone.

## HostedZoneConfig
### Properties
* **Comment**: string: Any comments that you want to include about the hosted zone.

## HostedZoneTag
### Properties
* **Key**: string: The key name of the tag.
* **Value**: string: The value for the tag.

## QueryLoggingConfig
### Properties
* **CloudWatchLogsLogGroupArn**: string: The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

## VPC
### Properties
* **VPCId**: string: The ID of an Amazon VPC.
* **VPCRegion**: string: The region that an Amazon VPC was created in. See https://docs.aws.amazon.com/general/latest/gr/rande.html for a list of up to date regions.

## AWS.Route53/KeySigningKeyProperties
### Properties
* **HostedZoneId**: string: The unique string (ID) used to identify a hosted zone.
* **KeyManagementServiceArn**: string: The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
* **Name**: string: An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
* **Status**: string: A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.

