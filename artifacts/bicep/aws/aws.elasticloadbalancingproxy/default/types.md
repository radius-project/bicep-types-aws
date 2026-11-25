# AWS.ElasticLoadBalancingProxy @ default

## Resource AWS.ElasticLoadBalancingProxy/CertificateAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingProxy/CertificateAssociationProperties](#awselasticloadbalancingproxycertificateassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElasticLoadBalancingProxy/Proxy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElasticLoadBalancingProxy/ProxyProperties](#awselasticloadbalancingproxyproxyproperties) (Required, Identifier): properties of the resource

## Attribute
### Properties
* **Key**: string (Required): The name of the attribute.
* **Value**: string (Required): The value of the attribute.

## AWS.ElasticLoadBalancingProxy/CertificateAssociationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Identifier of the association. The service does not issue an ARN for a certificate association; this value is built from the proxy ARN and the certificate ID so CloudFormation can address the association, and it is not accepted by any service API.
* **CertificateArn**: string (Required): The ARN of the ACM certificate to associate with the proxy. The certificate must be in the same account and Region as the proxy. A certificate from another account fails as not found.
* **CertificateId**: string (ReadOnly): The ID of the ACM certificate, taken from the certificate ARN.
* **CreatedAt**: string (ReadOnly): The time the association was created.
* **ProxyArn**: string (Required): The ARN of the proxy to associate the certificate with.
* **ProxyId**: string (ReadOnly): The ID of the proxy, taken from the proxy ARN.
* **ProxyName**: string (ReadOnly): The name of the proxy, taken from the proxy ARN.
* **Status**: string (ReadOnly): The status of the association.

## AWS.ElasticLoadBalancingProxy/ProxyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the proxy.
* **Attributes**: [Attribute](#attribute)[]: The configurable attributes of the proxy, as a list of key-value pairs. Attributes you omit are set to their service-assigned defaults, and removing one from your template resets it to its default. Some attributes can be set only at creation; changing one afterward fails and leaves the proxy unchanged. The AWS WAF setup is one such create-time choice: no web ACL is attached unless you set waf.web_acl_arn at creation to a web ACL you own.
* **AvailabilityZones**: [SubnetAndZone](#subnetandzone)[] (ReadOnly): The subnets the proxy is deployed into, together with their Availability Zones.
* **ConfigurationArchive**: [ConfigurationArchive](#configurationarchive) (WriteOnly)
* **ConfigurationFile**: [ConfigurationFile](#configurationfile) (WriteOnly)
* **ConfigurationMetadata**: [ConfigurationMetadata](#configurationmetadata) (ReadOnly)
* **CreatedAt**: string (ReadOnly): The time when the proxy was created.
* **CustomerKmsKeyArn**: string: The ARN of a customer managed AWS KMS key used to encrypt the proxy's configuration. Omit it to use a key owned by the service.
* **DnsName**: string (ReadOnly): The public DNS name of the proxy.
* **IpAddressingConfiguration**: [IpAddressingConfiguration](#ipaddressingconfiguration) (Required)
* **Name**: string (Required): The name of the proxy. The name must be unique within your account for the Region.
* **ProxyVersion**: string (Required): The version of the proxy software to run.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role whose permissions the proxy uses when it calls AWS services. The role's trust policy must allow the ELB for Envoy service to assume the role.
* **SecurityGroups**: string[] (Required): The IDs of the security groups associated with the proxy.
* **Status**: string (ReadOnly): The current status of the proxy.
* **Subnets**: string[] (Required): The IDs of the subnets the proxy is deployed into. All subnets must belong to the same VPC and must be in distinct Availability Zones.
* **Tags**: [Tag](#tag)[]: The tags assigned to the proxy.
* **Type**: string (Required): The type of the proxy.
* **VpcId**: string (ReadOnly): The ID of the VPC that contains the proxy.

## ConfigurationArchive
### Properties
* **ConfigurationBytes**: string (Required): The base64-encoded contents of the proxy configuration archive. The decoded contents must be a valid ZIP archive with at least one entry. The archive can be at most 10 MB (10,485,760 bytes), with at most 50 entries and at most 50 MB (52,428,800 bytes) of uncompressed content.

## ConfigurationFile
### Properties
* **ConfigurationBytes**: string (Required): The base64-encoded contents of the proxy configuration file. The decoded contents must be a valid Envoy bootstrap configuration for the requested proxy version, and can be at most 128 KB (131,072 bytes).

## ConfigurationMetadata
### Properties
* **ConfigArchiveHash**: string (ReadOnly): The hash of the currently applied configuration archive. Absent when the proxy does not have a configuration archive.
* **ConfigArchiveLastUpdatedAt**: string (ReadOnly): The time when the configuration archive was last updated.
* **ConfigFileHash**: string (ReadOnly): The hash of the currently applied configuration file.
* **ConfigFileLastUpdatedAt**: string (ReadOnly): The time when the configuration file was last updated.

## IpAddressingConfiguration
### Properties
* **Ipv4Addressability**: string (Required): The IPv4 addressability of the proxy.
* **Ipv6Addressability**: string (Required): The IPv6 addressability of the proxy.

## SubnetAndZone
### Properties
* **SubnetId**: string (Required): The ID of the subnet.
* **ZoneId**: string (Required): The ID of the Availability Zone that contains the subnet.
* **ZoneName**: string: The name of the Availability Zone that contains the subnet.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

