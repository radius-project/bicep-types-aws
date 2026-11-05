# AWS.WorkspacesInstances @ default

## Resource AWS.WorkspacesInstances/Volume@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkspacesInstances/VolumeProperties](#awsworkspacesinstancesvolumeproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkspacesInstances/VolumeAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkspacesInstances/VolumeAssociationProperties](#awsworkspacesinstancesvolumeassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkspacesInstances/WorkspaceInstance@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkspacesInstances/WorkspaceInstanceProperties](#awsworkspacesinstancesworkspaceinstanceproperties) (Identifier): properties of the resource

## AWS.WorkspacesInstances/VolumeAssociationProperties
### Properties
* **Device**: string (Required, Identifier): The device name for the volume attachment
* **DisassociateMode**: string (WriteOnly): Mode to use when disassociating the volume
* **VolumeId**: string (Required, Identifier): ID of the volume to attach to the workspace instance
* **WorkspaceInstanceId**: string (Required, Identifier): ID of the workspace instance to associate with the volume

## AWS.WorkspacesInstances/VolumeProperties
### Properties
* **AvailabilityZone**: string (Required): The Availability Zone in which to create the volume
* **Encrypted**: bool: Indicates whether the volume should be encrypted
* **Iops**: int: The number of I/O operations per second (IOPS)
* **KmsKeyId**: string: The identifier of the AWS Key Management Service (AWS KMS) customer master key (CMK) to use for Amazon EBS encryption
* **SizeInGB**: int: The size of the volume, in GiBs
* **SnapshotId**: string: The snapshot from which to create the volume
* **TagSpecifications**: [TagSpecification](#tagspecification)[]: The tags passed to EBS volume
* **Throughput**: int: The throughput to provision for a volume, with a maximum of 1,000 MiB/s
* **VolumeId**: string (ReadOnly, Identifier): Unique identifier for the volume
* **VolumeType**: string: The volume type

## AWS.WorkspacesInstances/WorkspaceInstanceProperties
### Properties
* **EC2ManagedInstance**: [EC2ManagedInstance](#ec2managedinstance) (ReadOnly)
* **ManagedInstance**: [WorkspaceInstance_ManagedInstance](#workspaceinstancemanagedinstance) (WriteOnly)
* **ProvisionState**: string (ReadOnly): The current state of the workspace instance
* **Tags**: [Tag](#tag)[]
* **WorkspaceInstanceId**: string (ReadOnly, Identifier): Unique identifier for the workspace instance

## BlockDeviceMapping
### Properties
* **DeviceName**: string
* **Ebs**: [EbsBlockDevice](#ebsblockdevice)
* **NoDevice**: string
* **VirtualName**: string

## CapacityReservationSpecification
### Properties
* **CapacityReservationPreference**: string
* **CapacityReservationTarget**: [CapacityReservationTarget](#capacityreservationtarget)

## CapacityReservationTarget
### Properties
* **CapacityReservationId**: string
* **CapacityReservationResourceGroupArn**: string

## CpuOptionsRequest
### Properties
* **CoreCount**: int
* **ThreadsPerCore**: int

## CreditSpecificationRequest
### Properties
* **CpuCredits**: string

## EbsBlockDevice
### Properties
* **Encrypted**: bool
* **Iops**: int
* **KmsKeyId**: string
* **Throughput**: int
* **VolumeSize**: int
* **VolumeType**: string

## EC2ManagedInstance
### Properties
* **InstanceId**: string (ReadOnly)

## EnclaveOptionsRequest
### Properties
* **Enabled**: bool

## HibernationOptionsRequest
### Properties
* **Configured**: bool

## IamInstanceProfileSpecification
### Properties
* **Arn**: string
* **Name**: string

## InstanceMaintenanceOptionsRequest
### Properties
* **AutoRecovery**: string

## InstanceMetadataOptionsRequest
### Properties
* **HttpEndpoint**: string
* **HttpProtocolIpv6**: string
* **HttpPutResponseHopLimit**: int
* **HttpTokens**: string
* **InstanceMetadataTags**: string

## InstanceNetworkInterfaceSpecification
### Properties
* **Description**: string
* **DeviceIndex**: int
* **Groups**: string[]
* **SubnetId**: string

## InstanceNetworkPerformanceOptionsRequest
### Properties
* **BandwidthWeighting**: string

## LicenseConfigurationRequest
### Properties
* **LicenseConfigurationArn**: string

## Placement
### Properties
* **AvailabilityZone**: string
* **GroupId**: string
* **GroupName**: string
* **PartitionNumber**: int
* **Tenancy**: string

## PrivateDnsNameOptionsRequest
### Properties
* **EnableResourceNameDnsAAAARecord**: bool
* **EnableResourceNameDnsARecord**: bool
* **HostnameType**: string

## RunInstancesMonitoringEnabled
### Properties
* **Enabled**: bool

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

## TagSpecification
### Properties
* **ResourceType**: string
* **Tags**: [Tag](#tag)[]: The tags to apply to the resource

## TagSpecification
### Properties
* **ResourceType**: string
* **Tags**: [Tag](#tag)[]

## WorkspaceInstance_ManagedInstance
### Properties
* **BlockDeviceMappings**: [BlockDeviceMapping](#blockdevicemapping)[]
* **CapacityReservationSpecification**: [CapacityReservationSpecification](#capacityreservationspecification)
* **CpuOptions**: [CpuOptionsRequest](#cpuoptionsrequest)
* **CreditSpecification**: [CreditSpecificationRequest](#creditspecificationrequest)
* **DisableApiStop**: bool
* **EbsOptimized**: bool
* **EnablePrimaryIpv6**: bool
* **EnclaveOptions**: [EnclaveOptionsRequest](#enclaveoptionsrequest)
* **HibernationOptions**: [HibernationOptionsRequest](#hibernationoptionsrequest)
* **IamInstanceProfile**: [IamInstanceProfileSpecification](#iaminstanceprofilespecification)
* **ImageId**: string (Required)
* **InstanceType**: string (Required)
* **Ipv6AddressCount**: int
* **KeyName**: string
* **LicenseSpecifications**: [LicenseConfigurationRequest](#licenseconfigurationrequest)[]
* **MaintenanceOptions**: [InstanceMaintenanceOptionsRequest](#instancemaintenanceoptionsrequest)
* **MetadataOptions**: [InstanceMetadataOptionsRequest](#instancemetadataoptionsrequest)
* **Monitoring**: [RunInstancesMonitoringEnabled](#runinstancesmonitoringenabled)
* **NetworkInterfaces**: [InstanceNetworkInterfaceSpecification](#instancenetworkinterfacespecification)[]
* **NetworkPerformanceOptions**: [InstanceNetworkPerformanceOptionsRequest](#instancenetworkperformanceoptionsrequest)
* **Placement**: [Placement](#placement)
* **PrivateDnsNameOptions**: [PrivateDnsNameOptionsRequest](#privatednsnameoptionsrequest)
* **SubnetId**: string
* **TagSpecifications**: [TagSpecification](#tagspecification)[]
* **UserData**: string

