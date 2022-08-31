# AWS.Lightsail @ default

## Resource AWS.Lightsail/Alarm@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/AlarmProperties](#awslightsailalarmproperties): properties of the resource

## Resource AWS.Lightsail/Bucket@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/BucketProperties](#awslightsailbucketproperties): properties of the resource

## Resource AWS.Lightsail/Certificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/CertificateProperties](#awslightsailcertificateproperties): properties of the resource

## Resource AWS.Lightsail/Container@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/ContainerProperties](#awslightsailcontainerproperties): properties of the resource

## Resource AWS.Lightsail/Database@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/DatabaseProperties](#awslightsaildatabaseproperties): properties of the resource

## Resource AWS.Lightsail/Disk@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/DiskProperties](#awslightsaildiskproperties): properties of the resource

## Resource AWS.Lightsail/Instance@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/InstanceProperties](#awslightsailinstanceproperties): properties of the resource

## Resource AWS.Lightsail/LoadBalancer@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/LoadBalancerProperties](#awslightsailloadbalancerproperties): properties of the resource

## Resource AWS.Lightsail/LoadBalancerTlsCertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/LoadBalancerTlsCertificateProperties](#awslightsailloadbalancertlscertificateproperties): properties of the resource

## Resource AWS.Lightsail/StaticIp@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Lightsail/StaticIpProperties](#awslightsailstaticipproperties): properties of the resource

## AWS.Lightsail/AlarmProperties
### Properties
* **AlarmArn**: string (ReadOnly)
* **AlarmName**: string: The name for the alarm. Specify the name of an existing alarm to update, and overwrite the previous configuration of the alarm.
* **ComparisonOperator**: string: The arithmetic operation to use when comparing the specified statistic to the threshold. The specified statistic value is used as the first operand.
* **ContactProtocols**: string[]: The contact protocols to use for the alarm, such as Email, SMS (text messaging), or both.
* **DatapointsToAlarm**: int: The number of data points that must be not within the specified threshold to trigger the alarm. If you are setting an "M out of N" alarm, this value (datapointsToAlarm) is the M.
* **EvaluationPeriods**: int: The number of most recent periods over which data is compared to the specified threshold. If you are setting an "M out of N" alarm, this value (evaluationPeriods) is the N.
* **MetricName**: string: The name of the metric to associate with the alarm.
* **MonitoredResourceName**: string: The validation status of the SSL/TLS certificate.
* **NotificationEnabled**: bool: Indicates whether the alarm is enabled. Notifications are enabled by default if you don't specify this parameter.
* **NotificationTriggers**: string[]: The alarm states that trigger a notification.
* **State**: string (ReadOnly): The current state of the alarm.
* **Threshold**: int: The value against which the specified statistic is compared.
* **TreatMissingData**: string: Sets how this alarm will handle missing data points.

## AWS.Lightsail/BucketProperties
### Properties
* **AbleToUpdateBundle**: bool (ReadOnly): Indicates whether the bundle that is currently applied to a bucket can be changed to another bundle. You can update a bucket's bundle only one time within a monthly AWS billing cycle.
* **AccessRules**: [AccessRules](#accessrules)
* **BucketArn**: string (ReadOnly)
* **BucketName**: string: The name for the bucket.
* **BundleId**: string: The ID of the bundle to use for the bucket.
* **ObjectVersioning**: bool: Specifies whether to enable or disable versioning of objects in the bucket.
* **ReadOnlyAccessAccounts**: string[]: An array of strings to specify the AWS account IDs that can access the bucket.
* **ResourcesReceivingAccess**: string[]: The names of the Lightsail resources for which to set bucket access.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Url**: string (ReadOnly): The URL of the bucket.

## AccessRules
### Properties
* **AllowPublicOverrides**: bool: A Boolean value that indicates whether the access control list (ACL) permissions that are applied to individual objects override the getObject option that is currently specified.
* **GetObject**: string: Specifies the anonymous access to all objects in a bucket.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/CertificateProperties
### Properties
* **CertificateArn**: string (ReadOnly)
* **CertificateName**: string: The name for the certificate.
* **DomainName**: string: The domain name (e.g., example.com ) for the certificate.
* **Status**: string (ReadOnly): The validation status of the certificate.
* **SubjectAlternativeNames**: string[]: An array of strings that specify the alternate domains (e.g., example2.com) and subdomains (e.g., blog.example.com) for the certificate.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/ContainerProperties
### Properties
* **ContainerArn**: string (ReadOnly)
* **ContainerServiceDeployment**: [ContainerServiceDeployment](#containerservicedeployment): Describes a container deployment configuration of an Amazon Lightsail container service.
* **IsDisabled**: bool: A Boolean value to indicate whether the container service is disabled.
* **Power**: string: The power specification for the container service.
* **PublicDomainNames**: [PublicDomainName](#publicdomainname)[]: The public domain names to use with the container service, such as example.com and www.example.com.
* **Scale**: int: The scale specification for the container service.
* **ServiceName**: string: The name for the container service.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Url**: string (ReadOnly): The publicly accessible URL of the container service.

## ContainerServiceDeployment
### Properties
* **Containers**: [Container](#container)[]: An object that describes the configuration for the containers of the deployment.
* **PublicEndpoint**: [PublicEndpoint](#publicendpoint): An object that describes the endpoint of the deployment.

## Container
### Properties
* **Command**: string[]: The launch command for the container.
* **ContainerName**: string: The name of the container.
* **Environment**: [EnvironmentVariable](#environmentvariable)[]: The environment variables of the container.
* **Image**: string: The name of the image used for the container.
* **Ports**: [PortInfo](#portinfo)[]: The open firewall ports of the container.

## EnvironmentVariable
### Properties
* **Value**: string
* **Variable**: string

## PortInfo
### Properties
* **Port**: string
* **Protocol**: string

## PublicEndpoint
### Properties
* **ContainerName**: string: The name of the container for the endpoint.
* **ContainerPort**: int: The port of the container to which traffic is forwarded to.
* **HealthCheckConfig**: [HealthCheckConfig](#healthcheckconfig): An object that describes the health check configuration of the container.

## HealthCheckConfig
### Properties
* **HealthyThreshold**: int: The number of consecutive health checks successes required before moving the container to the Healthy state. The default value is 2.
* **IntervalSeconds**: int: The approximate interval, in seconds, between health checks of an individual container. You can specify between 5 and 300 seconds. The default value is 5.
* **Path**: string: The path on the container on which to perform the health check. The default value is /.
* **SuccessCodes**: string: The HTTP codes to use when checking for a successful response from a container. You can specify values between 200 and 499. You can specify multiple values (for example, 200,202) or a range of values (for example, 200-299).
* **TimeoutSeconds**: int: The amount of time, in seconds, during which no response means a failed health check. You can specify between 2 and 60 seconds. The default value is 2.
* **UnhealthyThreshold**: int: The number of consecutive health check failures required before moving the container to the Unhealthy state. The default value is 2.

## PublicDomainName
### Properties
* **CertificateName**: string
* **DomainNames**: string[]: An object that describes the configuration for the containers of the deployment.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/DatabaseProperties
### Properties
* **AvailabilityZone**: string: The Availability Zone in which to create your new database. Use the us-east-2a case-sensitive format.
* **BackupRetention**: bool: When true, enables automated backup retention for your database. Updates are applied during the next maintenance window because this can result in an outage.
* **CaCertificateIdentifier**: string: Indicates the certificate that needs to be associated with the database.
* **DatabaseArn**: string (ReadOnly)
* **MasterDatabaseName**: string: The name of the database to create when the Lightsail database resource is created. For MySQL, if this parameter isn't specified, no database is created in the database resource. For PostgreSQL, if this parameter isn't specified, a database named postgres is created in the database resource.
* **MasterUsername**: string: The name for the master user.
* **MasterUserPassword**: string (WriteOnly): The password for the master user. The password can include any printable ASCII character except "/", """, or "@". It cannot contain spaces.
* **PreferredBackupWindow**: string: The daily time range during which automated backups are created for your new database if automated backups are enabled.
* **PreferredMaintenanceWindow**: string: The weekly time range during which system maintenance can occur on your new database.
* **PubliclyAccessible**: bool: Specifies the accessibility options for your new database. A value of true specifies a database that is available to resources outside of your Lightsail account. A value of false specifies a database that is available only to your Lightsail resources in the same region as your database.
* **RelationalDatabaseBlueprintId**: string: The blueprint ID for your new database. A blueprint describes the major engine version of a database.
* **RelationalDatabaseBundleId**: string: The bundle ID for your new database. A bundle describes the performance specifications for your database.
* **RelationalDatabaseName**: string: The name to use for your new Lightsail database resource.
* **RelationalDatabaseParameters**: [RelationalDatabaseParameter](#relationaldatabaseparameter)[] (WriteOnly): Update one or more parameters of the relational database.
* **RotateMasterUserPassword**: bool (WriteOnly): When true, the master user password is changed to a new strong password generated by Lightsail. Use the get relational database master user password operation to get the new password.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## RelationalDatabaseParameter
### Properties
* **AllowedValues**: string: Specifies the valid range of values for the parameter.
* **ApplyMethod**: string: Indicates when parameter updates are applied. Can be immediate or pending-reboot.
* **ApplyType**: string: Specifies the engine-specific parameter type.
* **DataType**: string: Specifies the valid data type for the parameter.
* **Description**: string: Provides a description of the parameter.
* **IsModifiable**: bool: A Boolean value indicating whether the parameter can be modified.
* **ParameterName**: string: Specifies the name of the parameter.
* **ParameterValue**: string: Specifies the value of the parameter.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/DiskProperties
### Properties
* **AddOns**: [AddOn](#addon)[]: An array of objects representing the add-ons to enable for the new instance.
* **AttachedTo**: string (ReadOnly): Name of the attached Lightsail Instance
* **AttachmentState**: string (ReadOnly): Attachment State of the Lightsail disk
* **AvailabilityZone**: string: The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
* **DiskArn**: string (ReadOnly)
* **DiskName**: string: The names to use for your new Lightsail disk.
* **Iops**: int (ReadOnly): Iops of the Lightsail disk
* **IsAttached**: bool (ReadOnly): Check is Disk is attached state
* **Location**: [Location](#location) (ReadOnly)
* **Path**: string (ReadOnly): Path of the  attached Disk
* **ResourceType**: string (ReadOnly): Resource type of Lightsail instance.
* **SizeInGb**: int: Size of the Lightsail disk
* **State**: string (ReadOnly): State of the Lightsail disk
* **SupportCode**: string (ReadOnly): Support code to help identify any issues
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AddOn
### Properties
* **AddOnType**: string: The add-on type
* **AutoSnapshotAddOnRequest**: [AutoSnapshotAddOn](#autosnapshotaddon)
* **Status**: string: Status of the Addon

## AutoSnapshotAddOn
### Properties
* **SnapshotTimeOfDay**: string: The daily time when an automatic snapshot will be created.

## Location
### Properties
* **AvailabilityZone**: string: The Availability Zone in which to create your disk. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
* **RegionName**: string: The Region Name in which to create your disk.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/InstanceProperties
### Properties
* **AddOns**: [AddOn](#addon)[]: An array of objects representing the add-ons to enable for the new instance.
* **AvailabilityZone**: string: The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
* **BlueprintId**: string: The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).
* **BundleId**: string: The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).
* **Hardware**: [Hardware](#hardware)
* **InstanceArn**: string (ReadOnly)
* **InstanceName**: string: The names to use for your new Lightsail instance.
* **IsStaticIp**: bool (ReadOnly): Is the IP Address of the Instance is the static IP
* **KeyPairName**: string: The name of your key pair.
* **Location**: [Location](#location)
* **Networking**: [Networking](#networking)
* **PrivateIpAddress**: string (ReadOnly): Private IP Address of the Instance
* **PublicIpAddress**: string (ReadOnly): Public IP Address of the Instance
* **ResourceType**: string (ReadOnly): Resource type of Lightsail instance.
* **SshKeyName**: string (ReadOnly): SSH Key Name of the  Lightsail instance.
* **State**: [State](#state)
* **SupportCode**: string (ReadOnly): Support code to help identify any issues
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UserData**: string: A launch script you can create that configures a server with additional user data. For example, you might want to run apt-get -y update.
* **UserName**: string (ReadOnly): Username of the  Lightsail instance.

## AddOn
### Properties
* **AddOnType**: string: The add-on type
* **AutoSnapshotAddOnRequest**: [AutoSnapshotAddOn](#autosnapshotaddon)
* **Status**: string: Status of the Addon

## AutoSnapshotAddOn
### Properties
* **SnapshotTimeOfDay**: string: The daily time when an automatic snapshot will be created.

## Hardware
### Properties
* **CpuCount**: int (ReadOnly): CPU count of the Instance.
* **Disks**: [Disk](#disk)[]: Disks attached to the Instance.
* **RamSizeInGb**: int (ReadOnly): RAM Size of the Instance.

## Disk
### Properties
* **AttachedTo**: string: Instance attached to the disk.
* **AttachmentState**: string: Attachment state of the disk.
* **DiskName**: string: The names to use for your new Lightsail disk.
* **IOPS**: int: IOPS of disk.
* **IsSystemDisk**: bool: Is the Attached disk is the system disk of the Instance.
* **Path**: string: Path of the disk attached to the instance.
* **SizeInGb**: string: Size of the disk attached to the Instance.

## Location
### Properties
* **AvailabilityZone**: string (ReadOnly): The Availability Zone in which to create your instance. Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.
* **RegionName**: string (ReadOnly): The Region Name in which to create your instance.

## Networking
### Properties
* **MonthlyTransfer**: [MonthlyTransfer](#monthlytransfer)
* **Ports**: [Port](#port)[]: Ports to the Instance.

## MonthlyTransfer
### Properties
* **GbPerMonthAllocated**: string (ReadOnly): GbPerMonthAllocated of the Instance.

## Port
### Properties
* **AccessDirection**: string: Access Direction for Protocol of the Instance(inbound/outbound).
* **AccessFrom**: string: Access From Protocol of the Instance.
* **AccessType**: string: Access Type Protocol of the Instance.
* **CidrListAliases**: [cidrListAliases](#cidrlistaliases)
* **Cidrs**: [cidrs](#cidrs)
* **CommonName**: string: CommonName for Protocol of the Instance.
* **FromPort**: int: From Port of the Instance.
* **Ipv6Cidrs**: [ipv6Cidrs](#ipv6cidrs)
* **Protocol**: string: Port Protocol of the Instance.
* **ToPort**: int: To Port of the Instance.

## cidrListAliases
### Properties

## cidrs
### Properties

## ipv6Cidrs
### Properties

## State
### Properties
* **Code**: int (ReadOnly): Status code of the Instance.
* **Name**: string (ReadOnly): Status code of the Instance.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/LoadBalancerProperties
### Properties
* **AttachedInstances**: string[]: The names of the instances attached to the load balancer.
* **HealthCheckPath**: string: The path you provided to perform the load balancer health check. If you didn't specify a health check path, Lightsail uses the root path of your website (e.g., "/").
* **InstancePort**: int: The instance port where you're creating your load balancer.
* **IpAddressType**: string: The IP address type for the load balancer. The possible values are ipv4 for IPv4 only, and dualstack for IPv4 and IPv6. The default value is dualstack.
* **LoadBalancerArn**: string (ReadOnly)
* **LoadBalancerName**: string: The name of your load balancer.
* **SessionStickinessEnabled**: bool: Configuration option to enable session stickiness.
* **SessionStickinessLBCookieDurationSeconds**: string: Configuration option to adjust session stickiness cookie duration parameter.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TlsPolicyName**: string: The name of the TLS policy to apply to the load balancer.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Lightsail/LoadBalancerTlsCertificateProperties
### Properties
* **CertificateAlternativeNames**: string[]: An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.
* **CertificateDomainName**: string: The domain name (e.g., example.com ) for your SSL/TLS certificate.
* **CertificateName**: string: The SSL/TLS certificate name.
* **HttpsRedirectionEnabled**: bool: A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.
* **IsAttached**: bool: When true, the SSL/TLS certificate is attached to the Lightsail load balancer.
* **LoadBalancerName**: string: The name of your load balancer.
* **LoadBalancerTlsCertificateArn**: string (ReadOnly)
* **Status**: string (ReadOnly): The validation status of the SSL/TLS certificate.

## AWS.Lightsail/StaticIpProperties
### Properties
* **AttachedTo**: string: The instance where the static IP is attached.
* **IpAddress**: string (ReadOnly): The static IP address.
* **IsAttached**: bool (ReadOnly): A Boolean value indicating whether the static IP is attached.
* **StaticIpArn**: string (ReadOnly)
* **StaticIpName**: string: The name of the static IP address.

