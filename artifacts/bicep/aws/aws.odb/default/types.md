# AWS.ODB @ default

## Resource AWS.ODB/CloudAutonomousVmCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ODB/CloudAutonomousVmClusterProperties](#awsodbcloudautonomousvmclusterproperties) (Identifier): properties of the resource

## Resource AWS.ODB/CloudExadataInfrastructure@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ODB/CloudExadataInfrastructureProperties](#awsodbcloudexadatainfrastructureproperties) (Identifier): properties of the resource

## Resource AWS.ODB/CloudVmCluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ODB/CloudVmClusterProperties](#awsodbcloudvmclusterproperties) (Identifier): properties of the resource

## Resource AWS.ODB/OdbNetwork@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ODB/OdbNetworkProperties](#awsodbodbnetworkproperties) (Identifier): properties of the resource

## Resource AWS.ODB/OdbPeeringConnection@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ODB/OdbPeeringConnectionProperties](#awsodbodbpeeringconnectionproperties) (Identifier): properties of the resource

## AWS.ODB/CloudAutonomousVmClusterProperties
### Properties
* **AutonomousDataStoragePercentage**: int (ReadOnly): The percentage of data storage currently in use for Autonomous Databases in the Autonomous VM cluster.
* **AutonomousDataStorageSizeInTBs**: int: The data storage size allocated for Autonomous Databases in the Autonomous VM cluster, in TB.
* **AvailableAutonomousDataStorageSizeInTBs**: int (ReadOnly): The available data storage space for Autonomous Databases in the Autonomous VM cluster, in TB.
* **AvailableContainerDatabases**: int (ReadOnly): The number of Autonomous CDBs that you can create with the currently available storage.
* **AvailableCpus**: int (ReadOnly): The number of CPU cores available for allocation to Autonomous Databases.
* **CloudAutonomousVmClusterArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the Autonomous VM cluster.
* **CloudAutonomousVmClusterId**: string (ReadOnly): The unique identifier of the Autonomous VM cluster.
* **CloudExadataInfrastructureId**: string: The unique identifier of the Cloud Exadata Infrastructure containing this Autonomous VM cluster.
* **ComputeModel**: string (ReadOnly): The compute model of the Autonomous VM cluster: ECPU or OCPU.
* **CpuCoreCount**: int (ReadOnly): The total number of CPU cores in the Autonomous VM cluster.
* **CpuCoreCountPerNode**: int: The number of CPU cores enabled per node in the Autonomous VM cluster.
* **CpuPercentage**: int (ReadOnly): The percentage of total CPU cores currently in use in the Autonomous VM cluster.
* **DataStorageSizeInGBs**: int (ReadOnly): The total data storage allocated to the Autonomous VM cluster, in GB.
* **DataStorageSizeInTBs**: int (ReadOnly): The total data storage allocated to the Autonomous VM cluster, in TB.
* **DbNodeStorageSizeInGBs**: int (ReadOnly): The local node storage allocated to the Autonomous VM cluster, in gigabytes (GB).
* **DbServers**: string[]: The list of database servers associated with the Autonomous VM cluster.
* **Description**: string: The user-provided description of the Autonomous VM cluster.
* **DisplayName**: string: The display name of the Autonomous VM cluster.
* **Domain**: string (ReadOnly): The domain name for the Autonomous VM cluster.
* **ExadataStorageInTBsLowestScaledValue**: int (ReadOnly): The minimum value to which you can scale down the Exadata storage, in TB.
* **Hostname**: string (ReadOnly): The hostname for the Autonomous VM cluster.
* **IamRoles**: [IamRole](#iamrole)[] (ReadOnly): The AWS Identity and Access Management (IAM) service roles associated with the Autonomous VM cluster.
* **IsMtlsEnabledVmCluster**: bool: Indicates whether mutual TLS (mTLS) authentication is enabled for the Autonomous VM cluster.
* **LicenseModel**: string: The Oracle license model that applies to the Autonomous VM cluster. Valid values are LICENSE_INCLUDED or BRING_YOUR_OWN_LICENSE.
* **MaintenanceWindow**: [MaintenanceWindow](#maintenancewindow): The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
* **MaxAcdsLowestScaledValue**: int (ReadOnly): The minimum value to which you can scale down the maximum number of Autonomous CDBs.
* **MemoryPerOracleComputeUnitInGBs**: int: The amount of memory allocated per Oracle Compute Unit, in GB.
* **MemorySizeInGBs**: int (ReadOnly): The total amount of memory allocated to the Autonomous VM cluster, in gigabytes (GB).
* **NodeCount**: int (ReadOnly): The number of database server nodes in the Autonomous VM cluster.
* **NonProvisionableAutonomousContainerDatabases**: int (ReadOnly): The number of Autonomous CDBs that can't be provisioned because of resource constraints.
* **Ocid**: string (ReadOnly): The Oracle Cloud Identifier (OCID) of the Autonomous VM cluster.
* **OciResourceAnchorName**: string (ReadOnly): The name of the OCI resource anchor associated with this Autonomous VM cluster.
* **OciUrl**: string (ReadOnly): The URL for accessing the OCI console page for this Autonomous VM cluster.
* **OdbNetworkId**: string: The unique identifier of the ODB network associated with this Autonomous VM cluster.
* **ProvisionableAutonomousContainerDatabases**: int (ReadOnly): The number of Autonomous CDBs that can be provisioned in the Autonomous VM cluster.
* **ProvisionedAutonomousContainerDatabases**: int (ReadOnly): The number of Autonomous CDBs currently provisioned in the Autonomous VM cluster.
* **ProvisionedCpus**: int (ReadOnly): The number of CPU cores currently provisioned in the Autonomous VM cluster.
* **ReclaimableCpus**: int (ReadOnly): The number of CPU cores that can be reclaimed from terminated or scaled-down Autonomous Databases.
* **ReservedCpus**: int (ReadOnly): The number of CPU cores reserved for system operations and redundancy.
* **ScanListenerPortNonTls**: int: The SCAN listener port for non-TLS (TCP) protocol. The default is 1521.
* **ScanListenerPortTls**: int: The SCAN listener port for TLS (TCP) protocol. The default is 2484.
* **Shape**: string (ReadOnly): The shape of the Exadata infrastructure for the Autonomous VM cluster.
* **Tags**: [Tag](#tag)[]: The tags associated with the Autonomous VM cluster.
* **TimeZone**: string: The time zone of the Autonomous VM cluster.
* **TotalContainerDatabases**: int: The total number of Autonomous Container Databases that can be created with the allocated local storage.

## AWS.ODB/CloudExadataInfrastructureProperties
### Properties
* **ActivatedStorageCount**: int (ReadOnly): The number of storage servers requested for the Exadata infrastructure.
* **AdditionalStorageCount**: int (ReadOnly): The number of storage servers requested for the Exadata infrastructure.
* **AvailabilityZone**: string: The name of the Availability Zone (AZ) where the Exadata infrastructure is located.
* **AvailabilityZoneId**: string: The AZ ID of the AZ where the Exadata infrastructure is located.
* **AvailableStorageSizeInGBs**: int (ReadOnly): The amount of available storage, in gigabytes (GB), for the Exadata infrastructure.
* **CloudExadataInfrastructureArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the Exadata infrastructure.
* **CloudExadataInfrastructureId**: string (ReadOnly): The unique identifier for the Exadata infrastructure.
* **ComputeCount**: int: The number of database servers for the Exadata infrastructure.
* **ComputeModel**: string (ReadOnly): The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled.
* **CpuCount**: int (ReadOnly): The total number of CPU cores that are allocated to the Exadata infrastructure.
* **CustomerContactsToSendToOCI**: [CustomerContact](#customercontact)[]: The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.
* **DatabaseServerType**: string: The database server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
* **DataStorageSizeInTBs**: int (ReadOnly): The size of the Exadata infrastructure's data disk group, in terabytes (TB).
* **DbNodeStorageSizeInGBs**: int (ReadOnly): The size of the Exadata infrastructure's local node storage, in gigabytes (GB).
* **DbServerIds**: string[] (ReadOnly): The list of database server identifiers for the Exadata infrastructure.
* **DbServerVersion**: string (ReadOnly): The software version of the database servers (dom0) in the Exadata infrastructure.
* **DisplayName**: string: The user-friendly name for the Exadata infrastructure.
* **MaintenanceWindow**: [MaintenanceWindow](#maintenancewindow): The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.
* **MaxCpuCount**: int (ReadOnly): The total number of CPU cores available on the Exadata infrastructure.
* **MaxDataStorageInTBs**: int (ReadOnly): The total amount of data disk group storage, in terabytes (TB), that's available on the Exadata infrastructure.
* **MaxDbNodeStorageSizeInGBs**: int (ReadOnly): The total amount of local node storage, in gigabytes (GB), that's available on the Exadata infrastructure.
* **MaxMemoryInGBs**: int (ReadOnly): The total amount of memory, in gigabytes (GB), that's available on the Exadata infrastructure.
* **MemorySizeInGBs**: int (ReadOnly): The amount of memory, in gigabytes (GB), that's allocated on the Exadata infrastructure.
* **Ocid**: string (ReadOnly): The OCID of the Exadata infrastructure.
* **OciResourceAnchorName**: string (ReadOnly): The name of the OCI resource anchor for the Exadata infrastructure.
* **OciUrl**: string (ReadOnly): The HTTPS link to the Exadata infrastructure in OCI.
* **Shape**: string: The model name of the Exadata infrastructure.
* **StorageCount**: int: The number of storage servers that are activated for the Exadata infrastructure.
* **StorageServerType**: string: The storage server model type of the Exadata infrastructure. For the list of valid model names, use the ListDbSystemShapes operation.
* **StorageServerVersion**: string (ReadOnly): The software version of the storage servers on the Exadata infrastructure.
* **Tags**: [Tag](#tag)[]: Tags to assign to the Exadata Infrastructure.
* **TotalStorageSizeInGBs**: int (ReadOnly): The total amount of storage, in gigabytes (GB), on the the Exadata infrastructure.

## AWS.ODB/CloudVmClusterProperties
### Properties
* **CloudExadataInfrastructureId**: string: The unique identifier of the Exadata infrastructure that this VM cluster belongs to.
* **CloudVmClusterArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the VM cluster.
* **CloudVmClusterId**: string (ReadOnly): The unique identifier of the VM cluster.
* **ClusterName**: string: The name of the Grid Infrastructure (GI) cluster.
* **ComputeModel**: string (ReadOnly): The OCI model compute model used when you create or clone an instance: ECPU or OCPU. An ECPU is an abstracted measure of compute resources. ECPUs are based on the number of cores elastically allocated from a pool of compute and storage servers. An OCPU is a legacy physical measure of compute resources. OCPUs are based on the physical core of a processor with hyper-threading enabled.
* **CpuCoreCount**: int: The number of CPU cores enabled on the VM cluster.
* **DataCollectionOptions**: [DataCollectionOptions](#datacollectionoptions): The set of diagnostic collection options enabled for the VM cluster.
* **DataStorageSizeInTBs**: int: The size of the data disk group, in terabytes (TB), that's allocated for the VM cluster.
* **DbNodes**: [DbNode](#dbnode)[] (ReadOnly): The DB nodes that are implicitly created and managed as part of this VM Cluster.
* **DbNodeStorageSizeInGBs**: int: The amount of local node storage, in gigabytes (GB), that's allocated for the VM cluster.
* **DbServers**: string[]: The list of database servers for the VM cluster.
* **DiskRedundancy**: string (ReadOnly): The type of redundancy configured for the VM cluster. NORMAL is 2-way redundancy. HIGH is 3-way redundancy.
* **DisplayName**: string: The user-friendly name for the VM cluster.
* **Domain**: string (ReadOnly): The domain of the VM cluster.
* **GiVersion**: string: The software version of the Oracle Grid Infrastructure (GI) for the VM cluster.
* **Hostname**: string: The host name for the VM cluster.
* **IamRoles**: [IamRole](#iamrole)[] (ReadOnly): The AWS Identity and Access Management (IAM) service roles associated with the VM cluster.
* **IsLocalBackupEnabled**: bool: Indicates whether database backups to local Exadata storage is enabled for the VM cluster.
* **IsSparseDiskgroupEnabled**: bool: Indicates whether the VM cluster is configured with a sparse disk group.
* **LicenseModel**: string: The Oracle license model applied to the VM cluster.
* **ListenerPort**: int (ReadOnly): The port number configured for the listener on the VM cluster.
* **MemorySizeInGBs**: int: The amount of memory, in gigabytes (GB), that's allocated for the VM cluster.
* **NodeCount**: int (ReadOnly): The number of nodes in the VM cluster.
* **Ocid**: string (ReadOnly): The OCID of the VM cluster.
* **OciResourceAnchorName**: string (ReadOnly): The name of the OCI resource anchor for the VM cluster.
* **OciUrl**: string (ReadOnly): The HTTPS link to the VM cluster in OCI.
* **OdbNetworkId**: string: The unique identifier of the ODB network for the VM cluster.
* **ScanDnsName**: string (ReadOnly): The FQDN of the DNS record for the Single Client Access Name (SCAN) IP addresses that are associated with the VM cluster.
* **ScanIpIds**: string[] (ReadOnly): The OCID of the SCAN IP addresses that are associated with the VM cluster.
* **ScanListenerPortTcp**: int (WriteOnly): Property description not available.
* **Shape**: string (ReadOnly): The hardware model name of the Exadata infrastructure that's running the VM cluster.
* **SshPublicKeys**: string[]: The public key portion of one or more key pairs used for SSH access to the VM cluster.
* **StorageSizeInGBs**: int (ReadOnly): The amount of local node storage, in gigabytes (GB), that's allocated to the VM cluster.
* **SystemVersion**: string: The operating system version of the image chosen for the VM cluster.
* **Tags**: [Tag](#tag)[]: Tags to assign to the Vm Cluster.
* **TimeZone**: string: The time zone of the VM cluster.
* **VipIds**: string[] (ReadOnly): The virtual IP (VIP) addresses that are associated with the VM cluster. Oracle's Cluster Ready Services (CRS) creates and maintains one VIP address for each node in the VM cluster to enable failover. If one node fails, the VIP is reassigned to another active node in the cluster.

## AWS.ODB/OdbNetworkProperties
### Properties
* **AvailabilityZone**: string: The AWS Availability Zone (AZ) where the ODB network is located.
* **AvailabilityZoneId**: string: The AZ ID of the AZ where the ODB network is located.
* **BackupSubnetCidr**: string: The CIDR range of the backup subnet in the ODB network.
* **ClientSubnetCidr**: string: The CIDR range of the client subnet in the ODB network.
* **CrossRegionS3RestoreSources**: string[] (WriteOnly): The cross-Region Amazon S3 restore sources for the ODB network.
* **CustomDomainName**: string: The domain name to use for the resources in the ODB network.
* **DefaultDnsPrefix**: string (WriteOnly): The DNS prefix to the default DNS domain name. The default DNS domain name is oraclevcn.com.
* **DeleteAssociatedResources**: bool (WriteOnly): Specifies whether to delete associated OCI networking resources along with the ODB network.
* **DisplayName**: string: The user-friendly name of the ODB network.
* **Ec2PlacementGroupIds**: string[] (ReadOnly): The list of EC2 placement group IDs associated with your ODB network.
* **KmsAccess**: string (WriteOnly): The AWS Key Management Service (KMS) access configuration for the ODB network.
* **KmsPolicyDocument**: string (WriteOnly): The AWS Key Management Service (KMS) policy document that defines permissions for key usage within the ODB network.
* **ManagedServices**: [ManagedServices](#managedservices) (ReadOnly)
* **OciNetworkAnchorId**: string (ReadOnly): The unique identifier of the OCI network anchor for the ODB network.
* **OciResourceAnchorName**: string (ReadOnly): The name of the OCI resource anchor that's associated with the ODB network.
* **OciVcnUrl**: string (ReadOnly): The URL for the VCN that's associated with the ODB network.
* **OdbNetworkArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the ODB network.
* **OdbNetworkId**: string (ReadOnly): The unique identifier of the ODB network.
* **S3Access**: string (WriteOnly): Specifies the configuration for Amazon S3 access from the ODB network.
* **S3PolicyDocument**: string (WriteOnly): Specifies the endpoint policy for Amazon S3 access from the ODB network.
* **StsAccess**: string (WriteOnly): The AWS Security Token Service (STS) access configuration for the ODB network.
* **StsPolicyDocument**: string (WriteOnly): The AWS Security Token Service (STS) policy document that defines permissions for token service usage within the ODB network.
* **Tags**: [Tag](#tag)[]: Tags to assign to the Odb Network.
* **ZeroEtlAccess**: string (WriteOnly): Specifies the configuration for Zero-ETL access from the ODB network.

## AWS.ODB/OdbPeeringConnectionProperties
### Properties
* **AdditionalPeerNetworkCidrs**: string[] (WriteOnly): The additional CIDR blocks for the ODB peering connection.
* **DisplayName**: string: The name of the ODB peering connection.
* **OdbNetworkArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the ODB network.
* **OdbNetworkId**: string (WriteOnly): The unique identifier of the ODB network.
* **OdbPeeringConnectionArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the ODB peering connection.
* **OdbPeeringConnectionId**: string (ReadOnly): The unique identifier of the ODB peering connection.
* **PeerNetworkArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the peer network.
* **PeerNetworkCidrs**: string[] (ReadOnly): The CIDR blocks for the ODB peering connection.
* **PeerNetworkId**: string (WriteOnly): The unique identifier of the peer network.
* **PeerNetworkRouteTableIds**: string[] (WriteOnly): The unique identifier of the VPC route table for which a route to the ODB network is automatically created during peering connection establishment.
* **Tags**: [Tag](#tag)[]: Tags to assign to the Odb peering connection.

## CrossRegionS3RestoreSourcesAccess
### Properties
* **Ipv4Addresses**: string[]: The IPv4 addresses allowed for cross-Region Amazon S3 restore access.
* **Region**: string: The AWS-Region for cross-Region Amazon S3 restore access.
* **Status**: string: The current status of the cross-Region Amazon S3 restore access configuration.

## CustomerContact
### Properties
* **Email**: string: The email address of the contact.

## DataCollectionOptions
### Properties
* **IsDiagnosticsEventsEnabled**: bool: Indicates whether diagnostic collection is enabled for the VM cluster.
* **IsHealthMonitoringEnabled**: bool: Indicates whether health monitoring is enabled for the VM cluster.
* **IsIncidentLogsEnabled**: bool: Indicates whether incident logs are enabled for the cloud VM cluster.

## DbNode
### Properties
* **BackupIpId**: string: The Oracle Cloud ID (OCID) of the backup IP address that's associated with the DB node.
* **BackupVnic2Id**: string: The OCID of the second backup virtual network interface card (VNIC) for the DB node.
* **CpuCoreCount**: int: The number of CPU cores enabled on the DB node.
* **DbNodeArn**: string: The Amazon Resource Name (ARN) of the DB node.
* **DbNodeId**: string: The unique identifier of the DB node.
* **DbNodeStorageSizeInGBs**: int: The amount of local node storage, in gigabytes (GB), that's allocated on the DB node.
* **DbServerId**: string (Required): The unique identifier of the database server that's associated with the DB node.
* **DbSystemId**: string: The OCID of the DB system.
* **HostIpId**: string: The OCID of the host IP address that's associated with the DB node.
* **Hostname**: string: The host name for the DB node.
* **MemorySizeInGBs**: int: The amount of memory, in gigabytes (GB), that allocated on the DB node.
* **Ocid**: string: The OCID of the DB node.
* **Status**: string: The current status of the DB node.
* **Tags**: [Tag](#tag)[]
* **Vnic2Id**: string: The OCID of the second VNIC.
* **VnicId**: string: The OCID of the VNIC.

## IamRole
### Properties
* **AwsIntegration**: string: The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.
* **IamRoleArn**: string: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.
* **Status**: string: The current status of the AWS Identity and Access Management (IAM) service role.

## IamRole
### Properties
* **AwsIntegration**: string: The AWS integration configuration settings for the AWS Identity and Access Management (IAM) service role.
* **IamRoleArn**: string: The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) service role.
* **Status**: string: The current status of the AWS Identity and Access Management (IAM) service role.

## MaintenanceWindow
### Properties
* **DaysOfWeek**: string[]: The days of the week when maintenance can be performed.
* **HoursOfDay**: int[]: The hours of the day when maintenance can be performed.
* **LeadTimeInWeeks**: int: The lead time in weeks before the maintenance window.
* **Months**: string[]: The months when maintenance can be performed.
* **Preference**: string: The preference for the maintenance window scheduling.
* **WeeksOfMonth**: int[]: The weeks of the month when maintenance can be performed.

## MaintenanceWindow
### Properties
* **CustomActionTimeoutInMins**: int: The timeout duration for custom actions in minutes.
* **DaysOfWeek**: string[]: The days of the week when maintenance can be performed.
* **HoursOfDay**: int[]: The hours of the day when maintenance can be performed.
* **IsCustomActionTimeoutEnabled**: bool: Indicates whether custom action timeout is enabled.
* **LeadTimeInWeeks**: int: The lead time in weeks before the maintenance window.
* **Months**: string[]: The months when maintenance can be performed.
* **PatchingMode**: string: The patching mode for the maintenance window.
* **Preference**: string: The preference for the maintenance window scheduling.
* **WeeksOfMonth**: int[]: The weeks of the month when maintenance can be performed.

## ManagedServices
### Properties
* **CrossRegionS3RestoreSourcesAccess**: [CrossRegionS3RestoreSourcesAccess](#crossregions3restoresourcesaccess)[]: The access configuration for the cross-Region Amazon S3 database restore source.
* **KmsAccess**: [OdbNetwork_KmsAccess](#odbnetworkkmsaccess): The AWS Key Management Service (KMS) access configuration.
* **ManagedS3BackupAccess**: [OdbNetwork_ManagedS3BackupAccess](#odbnetworkmanageds3backupaccess): The managed Amazon S3 backup access configuration.
* **ManagedServicesIpv4Cidrs**: string[]: The IPv4 CIDR blocks for the managed services.
* **ResourceGatewayArn**: string: The Amazon Resource Name (ARN) of the resource gateway.
* **S3Access**: [OdbNetwork_S3Access](#odbnetworks3access): The Amazon S3 access configuration.
* **ServiceNetworkArn**: string: The Amazon Resource Name (ARN) of the service network.
* **ServiceNetworkEndpoint**: [OdbNetwork_ServiceNetworkEndpoint](#odbnetworkservicenetworkendpoint): The service network endpoint configuration.
* **StsAccess**: [OdbNetwork_StsAccess](#odbnetworkstsaccess): The AWS Security Token Service (STS) access configuration.
* **ZeroEtlAccess**: [OdbNetwork_ZeroEtlAccess](#odbnetworkzeroetlaccess): The Zero-ETL access configuration.

## OdbNetwork_KmsAccess
### Properties
* **DomainName**: string: The domain name for the AWS KMS access.
* **Ipv4Addresses**: string[]: The IPv4 addresses for the AWS KMS access.
* **KmsPolicyDocument**: string: The endpoint policy for the AWS KMS access.
* **Status**: string: The status of the AWS KMS access.

## OdbNetwork_ManagedS3BackupAccess
### Properties
* **Ipv4Addresses**: string[]: The IPv4 addresses for the managed Amazon S3 backup access.
* **Status**: string: The status of the managed Amazon S3 backup access.

## OdbNetwork_S3Access
### Properties
* **DomainName**: string: The domain name for the Amazon S3 access.
* **Ipv4Addresses**: string[]: The IPv4 addresses for the Amazon S3 access.
* **S3PolicyDocument**: string: The endpoint policy for the Amazon S3 access.
* **Status**: string: The status of the Amazon S3 access.

## OdbNetwork_ServiceNetworkEndpoint
### Properties
* **VpcEndpointId**: string: The identifier of the VPC endpoint.
* **VpcEndpointType**: string: The type of the VPC endpoint.

## OdbNetwork_StsAccess
### Properties
* **DomainName**: string: The domain name for the AWS STS access.
* **Ipv4Addresses**: string[]: The IPv4 addresses for the AWS STS access.
* **Status**: string: The status of the AWS STS access.
* **StsPolicyDocument**: string: The endpoint policy for the AWS STS access.

## OdbNetwork_ZeroEtlAccess
### Properties
* **Cidr**: string: The CIDR block for the Zero-ETL access.
* **Status**: string: The status of the Zero-ETL access.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
* **Value**: string: The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
* **Value**: string: The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
* **Value**: string: The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
* **Value**: string: The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., :, /, =, +, @, -, and ".
* **Value**: string: The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: Unicode letters, digits, whitespace, _, ., /, =, +, and -.

