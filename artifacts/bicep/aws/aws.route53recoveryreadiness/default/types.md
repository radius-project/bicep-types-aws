# AWS.Route53RecoveryReadiness @ default

## Resource AWS.Route53RecoveryReadiness/Cell@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryReadiness/CellProperties](#awsroute53recoveryreadinesscellproperties) (Required): properties of the resource

## Resource AWS.Route53RecoveryReadiness/ReadinessCheck@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryReadiness/ReadinessCheckProperties](#awsroute53recoveryreadinessreadinesscheckproperties) (Required): properties of the resource

## Resource AWS.Route53RecoveryReadiness/RecoveryGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryReadiness/RecoveryGroupProperties](#awsroute53recoveryreadinessrecoverygroupproperties) (Required): properties of the resource

## Resource AWS.Route53RecoveryReadiness/ResourceSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryReadiness/ResourceSetProperties](#awsroute53recoveryreadinessresourcesetproperties) (Required): properties of the resource

## AWS.Route53RecoveryReadiness/CellProperties
### Properties
* **CellArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the cell.
* **CellName**: string (Required): The name of the cell to create.
* **Cells**: string[]: A list of cell Amazon Resource Names (ARNs) contained within this cell, for use in nested cells. For example, Availability Zones within specific Regions.
* **ParentReadinessScopes**: string[] (ReadOnly): The readiness scope for the cell, which can be a cell Amazon Resource Name (ARN) or a recovery group ARN. This is a list but currently can have only one element.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string[] (Required)

## AWS.Route53RecoveryReadiness/ReadinessCheckProperties
### Properties
* **ReadinessCheckArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the readiness check.
* **ReadinessCheckName**: string (Required): Name of the ReadinessCheck to create.
* **ResourceSetName**: string: The name of the resource set to check.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string[] (Required)

## AWS.Route53RecoveryReadiness/RecoveryGroupProperties
### Properties
* **Cells**: string[]: A list of the cell Amazon Resource Names (ARNs) in the recovery group.
* **RecoveryGroupArn**: string (ReadOnly): A collection of tags associated with a resource.
* **RecoveryGroupName**: string (Required): The name of the recovery group to create.
* **Tags**: [Tag](#tag)[]: A collection of tags associated with a resource.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string[] (Required)

## AWS.Route53RecoveryReadiness/ResourceSetProperties
### Properties
* **Resources**: [Resource](#resource)[] (Required): A list of resource objects in the resource set.
* **ResourceSetArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resource set.
* **ResourceSetName**: string (Required): The name of the resource set to create.
* **ResourceSetType**: string (Required): The resource type of the resources in the resource set. Enter one of the following values for resource type: 

AWS: :AutoScaling: :AutoScalingGroup, AWS: :CloudWatch: :Alarm, AWS: :EC2: :CustomerGateway, AWS: :DynamoDB: :Table, AWS: :EC2: :Volume, AWS: :ElasticLoadBalancing: :LoadBalancer, AWS: :ElasticLoadBalancingV2: :LoadBalancer, AWS: :MSK: :Cluster, AWS: :RDS: :DBCluster, AWS: :Route53: :HealthCheck, AWS: :SQS: :Queue, AWS: :SNS: :Topic, AWS: :SNS: :Subscription, AWS: :EC2: :VPC, AWS: :EC2: :VPNConnection, AWS: :EC2: :VPNGateway, AWS::Route53RecoveryReadiness::DNSTargetResource
* **Tags**: [Tag](#tag)[]: A tag to associate with the parameters for a resource set.

## Resource
### Properties
* **ComponentId**: string: The component identifier of the resource, generated when DNS target resource is used.
* **DnsTargetResource**: [DNSTargetResource](#dnstargetresource)
* **ReadinessScopes**: string[]: A list of recovery group Amazon Resource Names (ARNs) and cell ARNs that this resource is contained within.
* **ResourceArn**: string: The Amazon Resource Name (ARN) of the AWS resource.

## DNSTargetResource
### Properties
* **DomainName**: string: The domain name that acts as an ingress point to a portion of the customer application.
* **HostedZoneArn**: string: The hosted zone Amazon Resource Name (ARN) that contains the DNS record with the provided name of the target resource.
* **RecordSetId**: string: The Route 53 record set ID that will uniquely identify a DNS record, given a name and a type.
* **RecordType**: string: The type of DNS record of the target resource.
* **TargetResource**: [TargetResource](#targetresource)

## TargetResource
### Properties
* **NLBResource**: [NLBResource](#nlbresource)
* **R53Resource**: [R53ResourceRecord](#r53resourcerecord)

## NLBResource
### Properties
* **Arn**: string: A Network Load Balancer resource Amazon Resource Name (ARN).

## R53ResourceRecord
### Properties
* **DomainName**: string: The DNS target domain name.
* **RecordSetId**: string: The Resource Record set id.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string[] (Required)

