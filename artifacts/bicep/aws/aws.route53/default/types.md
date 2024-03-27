# AWS.Route53 @ default

## Resource AWS.Route53/CidrCollection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53/CidrCollectionProperties](#awsroute53cidrcollectionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53/HealthCheck@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53/HealthCheckProperties](#awsroute53healthcheckproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53/HostedZone@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53/HostedZoneProperties](#awsroute53hostedzoneproperties) (Identifier): properties of the resource

## Resource AWS.Route53/KeySigningKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53/KeySigningKeyProperties](#awsroute53keysigningkeyproperties) (Required, Identifier): properties of the resource

## AlarmIdentifier
### Properties
* **Name**: string (Required): The name of the CloudWatch alarm that you want Amazon Route 53 health checkers to use to determine whether this health check is healthy.
* **Region**: string (Required): For the CloudWatch alarm that you want Route 53 health checkers to use to determine whether this health check is healthy, the region that the alarm was created in.

## AWS.Route53/CidrCollectionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon resource name (ARN) to uniquely identify the AWS resource.
* **Id**: string (ReadOnly, Identifier): UUID of the CIDR collection.
* **Locations**: [Location](#location)[]: A complex type that contains information about the list of CIDR locations.
* **Name**: string (Required): A unique name for the CIDR collection.

## AWS.Route53/HealthCheckProperties
### Properties
* **HealthCheckConfig**: [HealthCheck_HealthCheckConfig](#healthcheckhealthcheckconfig) (Required): A complex type that contains information about the health check.
* **HealthCheckId**: string (ReadOnly, Identifier)
* **HealthCheckTags**: [HealthCheckTag](#healthchecktag)[]: An array of key-value pairs to apply to this resource.

## AWS.Route53/HostedZoneProperties
### Properties
* **HostedZoneConfig**: [HostedZoneConfig](#hostedzoneconfig): A complex type that contains an optional comment.
 If you don't want to specify a comment, omit the ``HostedZoneConfig`` and ``Comment`` elements.
* **HostedZoneTags**: [HostedZoneTag](#hostedzonetag)[]: Adds, edits, or deletes tags for a health check or a hosted zone.
 For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.
* **Id**: string (ReadOnly, Identifier)
* **Name**: string: The name of the domain. Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
 If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of ``NameServers`` that are returned by the ``Fn::GetAtt`` intrinsic function.
* **NameServers**: string[] (ReadOnly)
* **QueryLoggingConfig**: [QueryLoggingConfig](#queryloggingconfig): Creates a configuration for DNS query logging. After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
 DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:
  +  Route 53 edge location that responded to the DNS query
  +  Domain or subdomain that was requested
  +  DNS record type, such as A or AAAA
  +  DNS response code, such as ``NoError`` or ``ServFail`` 
  
  + Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.
* **VPCs**: [VPC](#vpc)[]: *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.
 For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.

## AWS.Route53/KeySigningKeyProperties
### Properties
* **HostedZoneId**: string (Required, Identifier): The unique string (ID) used to identify a hosted zone.
* **KeyManagementServiceArn**: string (Required): The Amazon resource name (ARN) for a customer managed key (CMK) in AWS Key Management Service (KMS). The KeyManagementServiceArn must be unique for each key signing key (KSK) in a single hosted zone.
* **Name**: string (Required, Identifier): An alphanumeric string used to identify a key signing key (KSK). Name must be unique for each key signing key in the same hosted zone.
* **Status**: string (Required): A string specifying the initial status of the key signing key (KSK). You can set the value to ACTIVE or INACTIVE.

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
* **Type**: string (Required)

## HealthCheckTag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## HostedZoneConfig
### Properties
* **Comment**: string: Any comments that you want to include about the hosted zone.

## HostedZoneTag
### Properties
* **Key**: string (Required): The value of ``Key`` depends on the operation that you want to perform:
  +   *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag.
  +   *Edit a tag*: ``Key`` is the name of the tag that you want to change the ``Value`` for.
  +   *Delete a key*: ``Key`` is the name of the tag you want to remove.
  +   *Give a name to a health check*: Edit the default ``Name`` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.
* **Value**: string (Required): The value of ``Value`` depends on the operation that you want to perform:
  +   *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag.
  +   *Edit a tag*: ``Value`` is the new value that you want to assign the tag.

## Location
### Properties
* **CidrList**: string[] (Required): A list of CIDR blocks.
* **LocationName**: string (Required): The name of the location that is associated with the CIDR collection.

## QueryLoggingConfig
### Properties
* **CloudWatchLogsLogGroupArn**: string (Required): The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

## VPC
### Properties
* **VPCId**: string (Required): *Private hosted zones only:* The ID of an Amazon VPC.
 For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.
* **VPCRegion**: string (Required): *Private hosted zones only:* The region that an Amazon VPC was created in.
 For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.

