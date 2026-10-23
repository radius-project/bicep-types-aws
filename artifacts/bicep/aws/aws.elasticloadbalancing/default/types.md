# AWS.ElasticLoadBalancing @ default

## Resource AWS.ElasticLoadBalancing/LoadBalancer@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancing/LoadBalancerProperties](#awselasticloadbalancingloadbalancerproperties) (Required, Identifier): properties of the resource

## AccessLoggingPolicy
### Properties
* **EmitInterval**: int: The interval for publishing the access logs. You can specify an interval of either 5 minutes or 60 minutes.

Default: 60 minutes
* **Enabled**: bool (Required): Specifies whether access logs are enabled for the load balancer.
* **S3BucketName**: string (Required): The name of the Amazon S3 bucket where the access logs are stored.
* **S3BucketPrefix**: string: The logical hierarchy you created for your Amazon S3 bucket, for example `my-bucket-prefix/prod`. If the prefix is not provided, the log is placed at the root level of the bucket.

## AppCookieStickinessPolicy
### Properties
* **CookieName**: string (Required): The name of the application cookie used for stickiness.
* **PolicyName**: string (Required): The mnemonic name for the policy being created. The name must be unique within a set of policies for this load balancer.

## AWS.ElasticLoadBalancing/LoadBalancerProperties
### Properties
* **AccessLoggingPolicy**: [AccessLoggingPolicy](#accessloggingpolicy): Information about where and how access logs are stored for the load balancer.
* **AppCookieStickinessPolicy**: [AppCookieStickinessPolicy](#appcookiestickinesspolicy)[]: Information about a policy for application-controlled session stickiness.
* **AvailabilityZones**: string[]: The Availability Zones for a load balancer in a default VPC. For a load balancer in a nondefault VPC, specify Subnets instead.
* **CanonicalHostedZoneName**: string (ReadOnly): The name of the Route 53 hosted zone that is associated with the load balancer. Internal-facing load balancers.
* **CanonicalHostedZoneNameID**: string (ReadOnly): The ID of the Route 53 hosted zone name that is associated with the load balancer.
* **ConnectionDrainingPolicy**: [ConnectionDrainingPolicy](#connectiondrainingpolicy): If enabled, the load balancer allows existing requests to complete before the load balancer shifts traffic away from a deregistered or unhealthy instance.
* **ConnectionSettings**: [ConnectionSettings](#connectionsettings): If enabled, the load balancer allows the connections to remain idle (no data is sent over the connection) for the specified duration.
* **CrossZone**: bool: If enabled, the load balancer routes the request traffic evenly across all instances regardless of the Availability Zones.
* **DNSName**: string (ReadOnly): The DNS name for the load balancer
* **HealthCheck**: [HealthCheck](#healthcheck): The health check settings to use when evaluating the health of your EC2 instances.
* **Instances**: string[]: The IDs of the instances for the load balancer.
* **LBCookieStickinessPolicy**: [LBCookieStickinessPolicy](#lbcookiestickinesspolicy)[]: Information about a policy for duration-based session stickiness.
* **Listeners**: [Listeners](#listeners)[] (Required): The Listeners for the load balancer. You can specify at most one listener per port.
* **LoadBalancerName**: string (Identifier): The name of the load balancer. This name must be unique within your set of load balancers for the region.
* **Policies**: [Policies](#policies)[]: The policies defined for your Classic Load Balancer. Specify only back-end server policies.
* **Scheme**: string: The type of load balancer. Valid only for load balancers in a VPC.
* **SecurityGroups**: string[]: The security groups for the load balancer. Valid only for load balancers in a VPC.
* **SourceSecurityGroup**: [SourceSecurityGroup](#sourcesecuritygroup) (ReadOnly)
* **Subnets**: string[]: The IDs of the subnets for the load balancer. You can specify at most one subnet per Availability Zone.
* **Tags**: [Tag](#tag)[]: The tags associated with a load balancer.

## ConnectionDrainingPolicy
### Properties
* **Enabled**: bool (Required): Specifies whether connection draining is enabled for the load balancer.
* **Timeout**: int: The maximum time, in seconds, to keep the existing connections open before deregistering the instances.

## ConnectionSettings
### Properties
* **IdleTimeout**: int (Required): The time, in seconds, that the connection is allowed to be idle (no data has been sent over the connection) before it is closed by the load balancer.

## HealthCheck
### Properties
* **HealthyThreshold**: string (Required): The number of consecutive health checks successes required before moving the instance to the `Healthy` state.
* **Interval**: string (Required): The approximate interval, in seconds, between health checks of an individual instance.
* **Target**: string (Required): The instance being checked.
* **Timeout**: string (Required): The amount of time, in seconds, during which no response means a failed health check.

This value must be less than the `Interval` value.
* **UnhealthyThreshold**: string (Required): The number of consecutive health check failures required before moving the instance to the `Unhealthy` state.

## LBCookieStickinessPolicy
### Properties
* **CookieExpirationPeriod**: string: The time period, in seconds, after which the cookie should be considered stale. If this parameter is not specified, the stickiness session lasts for the duration of the browser session.
* **PolicyName**: string: The name of the policy. This name must be unique within the set of policies for this load balancer.

## Listeners
### Properties
* **InstancePort**: string (Required): The port on which the instance is listening.
* **InstanceProtocol**: string: The protocol to use for routing traffic to instances: HTTP, HTTPS, TCP, or SSL.

If the front-end protocol is TCP or SSL, the back-end protocol must be TCP or SSL. If the front-end protocol is HTTP or HTTPS, the back-end protocol must be HTTP or HTTPS.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is secure, (HTTPS or SSL), the listener's `InstanceProtocol` must also be secure.

If there is another listener with the same `InstancePort` whose `InstanceProtocol` is HTTP or TCP, the listener's `InstanceProtocol` must be HTTP or TCP.
* **LoadBalancerPort**: string (Required): The port on which the load balancer is listening. On EC2-VPC, you can specify any port from the range 1-65535. On EC2-Classic, you can specify any port from the following list: 25, 80, 443, 465, 587, 1024-65535.
* **PolicyNames**: string[]: The names of the policies to associate with the listener.
* **Protocol**: string (Required): The load balancer transport protocol to use for routing: HTTP, HTTPS, TCP, or SSL.
* **SSLCertificateId**: string: The Amazon Resource Name (ARN) of the server certificate.

## Policies
### Properties
* **Attributes**: [PolicyItem](#policyitem)[] (Required): The policy attributes.
* **InstancePorts**: string[]: The instance ports for the policy. Required only for some policy types.
* **LoadBalancerPorts**: string[]: The load balancer ports for the policy. Required only for some policy types.
* **PolicyName**: string (Required): The name of the policy.
* **PolicyType**: string (Required): The name of the policy type.

## PolicyItem
### Properties
* **Name**: string
* **Value**: string

## SourceSecurityGroup
### Properties
* **GroupName**: string (ReadOnly): The name of the security group that you can use as part of your inbound rules for your load balancer's back-end instances.
* **OwnerAlias**: string (ReadOnly): The owner of the source security group.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
* **Value**: string (Required): The value for the tag. You can specify a value that's 1 to 256 characters in length.

