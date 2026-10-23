# AWS.Batch @ default

## Resource AWS.Batch/ComputeEnvironment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/ComputeEnvironmentProperties](#awsbatchcomputeenvironmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/ConsumableResource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/ConsumableResourceProperties](#awsbatchconsumableresourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/JobDefinition@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/JobDefinitionProperties](#awsbatchjobdefinitionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/JobQueue@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/JobQueueProperties](#awsbatchjobqueueproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/QuotaShare@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/QuotaShareProperties](#awsbatchquotashareproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/SchedulingPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/SchedulingPolicyProperties](#awsbatchschedulingpolicyproperties) (Identifier): properties of the resource

## Resource AWS.Batch/ServiceEnvironment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/ServiceEnvironmentProperties](#awsbatchserviceenvironmentproperties) (Required, Identifier): properties of the resource

## AWS.Batch/ComputeEnvironmentProperties
### Properties
* **ComputeEnvironmentArn**: string (ReadOnly, Identifier)
* **ComputeEnvironmentName**: string
* **ComputeResources**: [ComputeResources](#computeresources)
* **Context**: string
* **EcsSettings**: [EcsSettings](#ecssettings)
* **EksConfiguration**: [EksConfiguration](#eksconfiguration)
* **ReplaceComputeEnvironment**: bool (WriteOnly)
* **ServiceRole**: string
* **State**: string
* **Tags**: [ComputeEnvironment_Tags](#computeenvironmenttags): A key-value pair to associate with a resource.
* **Type**: string (Required)
* **UnmanagedvCpus**: int
* **UpdatePolicy**: [UpdatePolicy](#updatepolicy) (WriteOnly)

## AWS.Batch/ConsumableResourceProperties
### Properties
* **AvailableQuantity**: int (ReadOnly): Available Quantity of ConsumableResource.
* **ConsumableResourceArn**: string (ReadOnly, Identifier)
* **ConsumableResourceName**: string: Name of ConsumableResource.
* **CreatedAt**: int (ReadOnly)
* **InUseQuantity**: int (ReadOnly): In-use Quantity of ConsumableResource.
* **ResourceType**: string (Required)
* **Tags**: [ConsumableResource_Tags](#consumableresourcetags): A key-value pair to associate with a resource.
* **TotalQuantity**: int (Required): Total Quantity of ConsumableResource.

## AWS.Batch/JobDefinitionProperties
### Properties
* **ConsumableResourceProperties**: [ConsumableResourceProperties](#consumableresourceproperties)
* **ContainerProperties**: [ContainerProperties](#containerproperties)
* **EcsProperties**: [EcsProperties](#ecsproperties)
* **EksProperties**: [EksProperties](#eksproperties)
* **JobDefinitionArn**: string (ReadOnly)
* **JobDefinitionName**: string (Identifier)
* **NodeProperties**: [NodeProperties](#nodeproperties)
* **Parameters**: [JobDefinition_Parameters](#jobdefinitionparameters)
* **PlatformCapabilities**: string[]
* **PropagateTags**: bool
* **ResourceRetentionPolicy**: [ResourceRetentionPolicy](#resourceretentionpolicy) (WriteOnly)
* **RetryStrategy**: [RetryStrategy](#retrystrategy)
* **SchedulingPriority**: int
* **Tags**: [JobDefinition_Tags](#jobdefinitiontags): A key-value pair to associate with a resource.
* **Timeout**: [JobTimeout](#jobtimeout)
* **Type**: string (Required)

## AWS.Batch/JobQueueProperties
### Properties
* **ComputeEnvironmentOrder**: [ComputeEnvironmentOrder](#computeenvironmentorder)[]
* **JobQueueArn**: string (ReadOnly, Identifier)
* **JobQueueName**: string
* **JobQueueType**: string
* **JobStateTimeLimitActions**: [JobStateTimeLimitAction](#jobstatetimelimitaction)[]
* **Priority**: int (Required)
* **SchedulingPolicyArn**: string
* **ServiceEnvironmentOrder**: [ServiceEnvironmentOrder](#serviceenvironmentorder)[]
* **State**: string
* **Tags**: [JobQueue_Tags](#jobqueuetags): A key-value pair to associate with a resource.

## AWS.Batch/QuotaShareProperties
### Properties
* **CapacityLimits**: [QuotaShareCapacityLimit](#quotasharecapacitylimit)[] (Required): A list that specifies the quantity and type of compute capacity allocated to the quota share.
* **JobQueue**: string (Required): The AWS Batch job queue associated with the quota share. This can be the job queue name or ARN. A job queue must be in the `VALID` state before you can associate it with a quota share.
* **PreemptionConfiguration**: [QuotaSharePreemptionConfiguration](#quotasharepreemptionconfiguration) (Required): Specifies the preemption behavior for jobs in a quota share.
* **QuotaShareArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the quota share.
* **QuotaShareName**: string (Required): The name of the quota share. It can be up to 128 characters long. It can contain uppercase and lowercase letters, numbers, hyphens (-), and underscores (_).
* **ResourceSharingConfiguration**: [QuotaShareResourceSharingConfiguration](#quotashareresourcesharingconfiguration) (Required): Specifies whether a quota share reserves, lends, or both lends and borrows idle compute capacity.
* **State**: string: The state of the quota share. If the quota share is `ENABLED`, it is able to accept jobs. If the quota share is `DISABLED`, new jobs won't be accepted but jobs already submitted can finish. The default state is `ENABLED`.
* **Tags**: [QuotaShare_Tags](#quotasharetags): The tags that you apply to the quota share to help you categorize and organize your resources. Each tag consists of a key and an optional value.

## AWS.Batch/SchedulingPolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **FairsharePolicy**: [FairsharePolicy](#fairsharepolicy)
* **Name**: string: Name of Scheduling Policy.
* **QuotaSharePolicy**: [QuotaSharePolicy](#quotasharepolicy)
* **Tags**: [SchedulingPolicy_Tags](#schedulingpolicytags): A key-value pair to associate with a resource.

## AWS.Batch/ServiceEnvironmentProperties
### Properties
* **CapacityLimits**: [CapacityLimit](#capacitylimit)[] (Required)
* **ServiceEnvironmentArn**: string (ReadOnly, Identifier)
* **ServiceEnvironmentName**: string
* **ServiceEnvironmentType**: string (Required)
* **State**: string
* **Tags**: [ServiceEnvironment_Tags](#serviceenvironmenttags): A key-value pair to associate with a resource.

## CapacityLimit
### Properties
* **CapacityUnit**: string
* **MaxCapacity**: int

## CapacityReservations
### Properties
* **ReservationGroupArn**: string
* **ReservationPreference**: string

## ComputeEnvironment_CapacityTags
### Properties

## ComputeEnvironment_Tags
### Properties

## ComputeEnvironment_Tags
### Properties

## ComputeEnvironmentOrder
### Properties
* **ComputeEnvironment**: string (Required)
* **Order**: int (Required)

## ComputeResources
### Properties
* **AllocationStrategy**: string
* **BidPercentage**: int
* **CapacityTags**: [ComputeEnvironment_CapacityTags](#computeenvironmentcapacitytags): Capacity-level tags for compute environments.
* **DesiredvCpus**: int
* **Ec2Configuration**: [Ec2ConfigurationObject](#ec2configurationobject)[] (ReadOnly)
* **Ec2KeyPair**: string
* **ImageId**: string
* **InstanceRole**: string
* **InstanceTypes**: string[]
* **LaunchTemplate**: [LaunchTemplateSpecification](#launchtemplatespecification)
* **ManagedInstancesProvider**: [ManagedInstancesProvider](#managedinstancesprovider)
* **MaxvCpus**: int (Required)
* **MinvCpus**: int
* **PlacementGroup**: string
* **ScalingPolicy**: [ComputeScalingPolicy](#computescalingpolicy)
* **SecurityGroupIds**: string[]
* **SpotIamFleetRole**: string
* **Subnets**: string[]
* **Tags**: [ComputeEnvironment_Tags](#computeenvironmenttags): A key-value pair to associate with a resource.
* **Type**: string (Required)
* **UpdateToLatestImageVersion**: bool (WriteOnly)

## ComputeScalingPolicy
### Properties
* **MinScaleDownDelayMinutes**: int

## ConsumableResource_Tags
### Properties

## ConsumableResourceProperties
### Properties
* **ConsumableResourceList**: [ConsumableResourceRequirement](#consumableresourcerequirement)[] (Required)

## ConsumableResourceRequirement
### Properties
* **ConsumableResource**: string (Required): The ARN of the consumable resource the job definition should consume.
* **Quantity**: int (Required)

## ContainerProperties
### Properties
* **Command**: string[]
* **EnableExecuteCommand**: bool
* **Environment**: [Environment](#environment)[]
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage)
* **ExecutionRoleArn**: string
* **FargatePlatformConfiguration**: [JobDefinition_FargatePlatformConfiguration](#jobdefinitionfargateplatformconfiguration)
* **Image**: string (Required)
* **JobRoleArn**: string
* **LinuxParameters**: [LinuxParameters](#linuxparameters)
* **LogConfiguration**: [LogConfiguration](#logconfiguration)
* **Memory**: int
* **MountPoints**: [MountPoint](#mountpoint)[]
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **Privileged**: bool
* **ReadonlyRootFilesystem**: bool
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials)
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]
* **RuntimePlatform**: [RuntimePlatform](#runtimeplatform)
* **Secrets**: [Secret](#secret)[]
* **Ulimits**: [Ulimit](#ulimit)[]
* **User**: string
* **Vcpus**: int
* **Volumes**: [Volume](#volume)[]

## Device
### Properties
* **ContainerPath**: string
* **HostPath**: string
* **Permissions**: string[]

## Ec2ConfigurationObject
### Properties
* **BatchImageStatus**: string
* **ImageIdOverride**: string
* **ImageKubernetesVersion**: string
* **ImageType**: string (Required)

## EcsProperties
### Properties
* **TaskProperties**: [EcsTaskProperties](#ecstaskproperties)[] (Required)

## EcsSettings
### Properties
* **ContainerInsights**: string: The CloudWatch Container Insights setting applied to the Amazon ECS cluster that backs this compute environment. After you set this property, you can't revert it to the default (unset) state in which the setting is managed outside of AWS Batch. If you remove this property after previously setting it, AWS Batch treats the omission as DISABLED, because the underlying API has no way to unset the value. Because of this, if a stack rollback would return this property to its previous unset state, AWS Batch sets it to DISABLED instead.

## EcsTaskProperties
### Properties
* **Containers**: [TaskContainerProperties](#taskcontainerproperties)[]
* **EnableExecuteCommand**: bool
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage)
* **ExecutionRoleArn**: string
* **IpcMode**: string
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **NetworkMode**: string
* **PidMode**: string
* **PlatformVersion**: string
* **RuntimePlatform**: [RuntimePlatform](#runtimeplatform)
* **TaskRoleArn**: string
* **Volumes**: [Volume](#volume)[]

## EFSAuthorizationConfig
### Properties
* **AccessPointId**: string
* **Iam**: string

## EFSVolumeConfiguration
### Properties
* **AuthorizationConfig**: [EFSAuthorizationConfig](#efsauthorizationconfig)
* **FileSystemId**: string (Required)
* **RootDirectory**: string
* **TransitEncryption**: string
* **TransitEncryptionPort**: int

## EksAccessEntry
### Properties
* **DesiredState**: string: The desired state of the EKS access entry managed by AWS Batch. When omitted, AWS Batch applies INHERIT_FROM_CLUSTER.
* **Status**: string (ReadOnly): The read-only status of the EKS access entry, returned by DescribeComputeEnvironments.

## EksConfiguration
### Properties
* **AccessEntry**: [EksAccessEntry](#eksaccessentry)
* **EksClusterArn**: string (Required)
* **KubernetesNamespace**: string (Required)

## EksContainer
### Properties
* **Args**: string[]
* **Command**: string[]
* **Env**: [EksContainerEnvironmentVariable](#ekscontainerenvironmentvariable)[]
* **Image**: string (Required)
* **ImagePullPolicy**: string
* **Name**: string
* **Resources**: [EksContainerResourceRequirements](#ekscontainerresourcerequirements)
* **SecurityContext**: [EksContainerSecurityContext](#ekscontainersecuritycontext)
* **VolumeMounts**: [EksContainerVolumeMount](#ekscontainervolumemount)[]

## EksContainerEnvironmentVariable
### Properties
* **Name**: string (Required)
* **Value**: string

## EksContainerResourceRequirements
### Properties
* **Limits**: [JobDefinition_Limits](#jobdefinitionlimits)
* **Requests**: [JobDefinition_Requests](#jobdefinitionrequests)

## EksContainerSecurityContext
### Properties
* **AllowPrivilegeEscalation**: bool
* **Privileged**: bool
* **ReadOnlyRootFilesystem**: bool
* **RunAsGroup**: int
* **RunAsNonRoot**: bool
* **RunAsUser**: int

## EksContainerVolumeMount
### Properties
* **MountPath**: string
* **Name**: string
* **ReadOnly**: bool
* **SubPath**: string

## EksEmptyDir
### Properties
* **Medium**: string
* **SizeLimit**: string

## EksHostPath
### Properties
* **Path**: string

## EksMetadata
### Properties
* **Annotations**: [JobDefinition_Annotations](#jobdefinitionannotations)
* **Labels**: [JobDefinition_Labels](#jobdefinitionlabels)
* **Namespace**: string

## EksPersistentVolumeClaim
### Properties
* **ClaimName**: string (Required)
* **ReadOnly**: bool

## EksPodProperties
### Properties
* **Containers**: [EksContainer](#ekscontainer)[]
* **DnsPolicy**: string
* **HostNetwork**: bool
* **ImagePullSecrets**: [ImagePullSecret](#imagepullsecret)[]
* **InitContainers**: [EksContainer](#ekscontainer)[]
* **Metadata**: [EksMetadata](#eksmetadata)
* **ServiceAccountName**: string
* **ShareProcessNamespace**: bool
* **Volumes**: [EksVolume](#eksvolume)[]

## EksProperties
### Properties
* **PodProperties**: [EksPodProperties](#ekspodproperties)

## EksSecret
### Properties
* **Optional**: bool
* **SecretName**: string (Required)

## EksVolume
### Properties
* **EmptyDir**: [EksEmptyDir](#eksemptydir)
* **HostPath**: [EksHostPath](#ekshostpath)
* **Name**: string (Required)
* **PersistentVolumeClaim**: [EksPersistentVolumeClaim](#ekspersistentvolumeclaim)
* **Secret**: [EksSecret](#ekssecret)

## Environment
### Properties
* **Name**: string
* **Value**: string

## EphemeralStorage
### Properties
* **SizeInGiB**: int (Required)

## EvaluateOnExit
### Properties
* **Action**: string (Required)
* **OnExitCode**: string
* **OnReason**: string
* **OnStatusReason**: string

## FairsharePolicy
### Properties
* **ComputeReservation**: int
* **ShareDecaySeconds**: int
* **ShareDistribution**: [ShareAttributes](#shareattributes)[]: List of Share Attributes

## Host
### Properties
* **SourcePath**: string

## ImagePullSecret
### Properties
* **Name**: string

## InfrastructureOptimization
### Properties
* **ScaleInAfter**: int

## InstanceLaunchTemplate
### Properties
* **CapacityOptionType**: string
* **CapacityReservations**: [CapacityReservations](#capacityreservations)
* **Ec2InstanceProfileArn**: string (Required)
* **FipsEnabled**: bool
* **InstanceMetadataTagsPropagation**: bool
* **InstanceRequirements**: [InstanceRequirements](#instancerequirements)
* **LocalStorageConfiguration**: [ManagedInstancesLocalStorageConfiguration](#managedinstanceslocalstorageconfiguration)
* **Monitoring**: string
* **NetworkConfiguration**: [ManagedInstancesNetworkConfiguration](#managedinstancesnetworkconfiguration) (Required)
* **StorageConfiguration**: [ManagedInstancesStorageConfiguration](#managedinstancesstorageconfiguration)

## InstanceRequirements
### Properties
* **AllowedInstanceTypes**: string[]

## JobDefinition_Annotations
### Properties

## JobDefinition_FargatePlatformConfiguration
### Properties
* **PlatformVersion**: string

## JobDefinition_FirelensConfiguration
### Properties
* **Options**: [JobDefinition_FirelensConfiguration_Options](#jobdefinitionfirelensconfigurationoptions)
* **Type**: string (Required)

## JobDefinition_FirelensConfiguration_Options
### Properties

## JobDefinition_Labels
### Properties

## JobDefinition_Limits
### Properties

## JobDefinition_Options
### Properties

## JobDefinition_Parameters
### Properties

## JobDefinition_Requests
### Properties

## JobDefinition_Tags
### Properties

## JobQueue_Tags
### Properties

## JobStateTimeLimitAction
### Properties
* **Action**: string (Required)
* **MaxTimeSeconds**: int (Required)
* **Reason**: string (Required)
* **State**: string (Required)

## JobTimeout
### Properties
* **AttemptDurationSeconds**: int

## LaunchTemplateSpecification
### Properties
* **LaunchTemplateId**: string
* **LaunchTemplateName**: string
* **Overrides**: [LaunchTemplateSpecificationOverride](#launchtemplatespecificationoverride)[]
* **UserdataType**: string
* **Version**: string

## LaunchTemplateSpecificationOverride
### Properties
* **LaunchTemplateId**: string
* **LaunchTemplateName**: string
* **TargetInstanceTypes**: string[]
* **UserdataType**: string
* **Version**: string

## LinuxParameters
### Properties
* **Devices**: [Device](#device)[]
* **InitProcessEnabled**: bool
* **MaxSwap**: int
* **SharedMemorySize**: int
* **Swappiness**: int
* **Tmpfs**: [Tmpfs](#tmpfs)[]

## LogConfiguration
### Properties
* **LogDriver**: string (Required)
* **Options**: [JobDefinition_Options](#jobdefinitionoptions)
* **SecretOptions**: [Secret](#secret)[]

## ManagedInstancesLocalStorageConfiguration
### Properties
* **UseLocalStorage**: bool

## ManagedInstancesNetworkConfiguration
### Properties
* **SecurityGroups**: string[] (Required)
* **Subnets**: string[] (Required)

## ManagedInstancesProvider
### Properties
* **InfrastructureOptimization**: [InfrastructureOptimization](#infrastructureoptimization)
* **InfrastructureRoleArn**: string (Required)
* **InstanceLaunchTemplate**: [InstanceLaunchTemplate](#instancelaunchtemplate) (Required)
* **PropagateTags**: string

## ManagedInstancesStorageConfiguration
### Properties
* **StorageSizeGiB**: int

## MountPoint
### Properties
* **ContainerPath**: string
* **ReadOnly**: bool
* **SourceVolume**: string

## MultiNodeContainerProperties
### Properties
* **Command**: string[]
* **EnableExecuteCommand**: bool
* **Environment**: [Environment](#environment)[]
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage)
* **ExecutionRoleArn**: string
* **Image**: string (Required)
* **InstanceType**: string
* **JobRoleArn**: string
* **LinuxParameters**: [LinuxParameters](#linuxparameters)
* **LogConfiguration**: [LogConfiguration](#logconfiguration)
* **Memory**: int
* **MountPoints**: [MountPoint](#mountpoint)[]
* **Privileged**: bool
* **ReadonlyRootFilesystem**: bool
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials)
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]
* **RuntimePlatform**: [RuntimePlatform](#runtimeplatform)
* **Secrets**: [Secret](#secret)[]
* **Ulimits**: [Ulimit](#ulimit)[]
* **User**: string
* **Vcpus**: int
* **Volumes**: [Volume](#volume)[]

## MultiNodeEcsProperties
### Properties
* **TaskProperties**: [MultiNodeEcsTaskProperties](#multinodeecstaskproperties)[] (Required)

## MultiNodeEcsTaskProperties
### Properties
* **Containers**: [TaskContainerProperties](#taskcontainerproperties)[]
* **EnableExecuteCommand**: bool
* **ExecutionRoleArn**: string
* **IpcMode**: string
* **PidMode**: string
* **TaskRoleArn**: string
* **Volumes**: [Volume](#volume)[]

## NetworkConfiguration
### Properties
* **AssignPublicIp**: string

## NodeProperties
### Properties
* **MainNode**: int (Required)
* **NodeRangeProperties**: [NodeRangeProperty](#noderangeproperty)[] (Required)
* **NumNodes**: int (Required)

## NodeRangeProperty
### Properties
* **ConsumableResourceProperties**: [ConsumableResourceProperties](#consumableresourceproperties)
* **Container**: [MultiNodeContainerProperties](#multinodecontainerproperties)
* **EcsProperties**: [MultiNodeEcsProperties](#multinodeecsproperties)
* **EksProperties**: [EksProperties](#eksproperties)
* **InstanceTypes**: string[]
* **TargetNodes**: string (Required)

## QuotaShare_Tags
### Properties

## QuotaShareCapacityLimit
### Properties
* **CapacityUnit**: string (Required): The unit of compute capacity for the capacityLimit. For example, `ml.m5.large`.
* **MaxCapacity**: int (Required): The maximum capacity available for the quota share. This value represents the maximum quantity of a resource that can be allocated to jobs in the quota share without borrowing.

## QuotaSharePolicy
### Properties
* **IdleResourceAssignmentStrategy**: string

## QuotaSharePreemptionConfiguration
### Properties
* **InSharePreemption**: string (Required): Specifies whether jobs within a quota share can be preempted by another, higher priority job in the same quota share.

## QuotaShareResourceSharingConfiguration
### Properties
* **BorrowLimit**: int: The maximum percentage of additional capacity that the quota share can borrow from other shares. `BorrowLimit` can only be applied to quota shares with a strategy of `LEND_AND_BORROW`. This value is expressed as a percentage of the quota share's configured CapacityLimits. The `BorrowLimit` is applied uniformly across all capacity units. For example, if the `BorrowLimit` is 200, the quota share can borrow up to 200% of its configured `maxCapacity` for each capacity unit. The default `BorrowLimit` is -1, which indicates unlimited borrowing.
* **Strategy**: string (Required): The resource sharing strategy for the quota share. The `RESERVE` strategy allows a quota share to reserve idle capacity for itself. `LEND` configures the share to lend its idle capacity to another share in need of capacity. The `LEND_AND_BORROW` strategy configures the share to borrow idle capacity from an underutilized share, as well as lend to another share.

## RepositoryCredentials
### Properties
* **CredentialsParameter**: string (Required)

## ResourceRequirement
### Properties
* **Type**: string
* **Value**: string

## ResourceRetentionPolicy
### Properties
* **SkipDeregisterOnUpdate**: bool (WriteOnly)

## RetryStrategy
### Properties
* **Attempts**: int
* **EvaluateOnExit**: [EvaluateOnExit](#evaluateonexit)[]

## RuntimePlatform
### Properties
* **CpuArchitecture**: string
* **OperatingSystemFamily**: string

## S3FilesVolumeConfiguration
### Properties
* **AccessPointArn**: string
* **FileSystemArn**: string (Required)
* **RootDirectory**: string
* **TransitEncryptionPort**: int

## SchedulingPolicy_Tags
### Properties

## Secret
### Properties
* **Name**: string (Required)
* **ValueFrom**: string (Required)

## ServiceEnvironment_Tags
### Properties

## ServiceEnvironmentOrder
### Properties
* **Order**: int (Required)
* **ServiceEnvironment**: string (Required)

## ShareAttributes
### Properties
* **ShareIdentifier**: string
* **WeightFactor**: int

## TaskContainerDependency
### Properties
* **Condition**: string (Required)
* **ContainerName**: string (Required)

## TaskContainerProperties
### Properties
* **Command**: string[]
* **DependsOn**: [TaskContainerDependency](#taskcontainerdependency)[]
* **Environment**: [Environment](#environment)[]
* **Essential**: bool
* **FirelensConfiguration**: [JobDefinition_FirelensConfiguration](#jobdefinitionfirelensconfiguration)
* **Image**: string (Required)
* **LinuxParameters**: [LinuxParameters](#linuxparameters)
* **LogConfiguration**: [LogConfiguration](#logconfiguration)
* **MountPoints**: [MountPoint](#mountpoint)[]
* **Name**: string
* **Privileged**: bool
* **ReadonlyRootFilesystem**: bool
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials)
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]
* **Secrets**: [Secret](#secret)[]
* **StartTimeout**: int
* **StopTimeout**: int
* **Ulimits**: [Ulimit](#ulimit)[]
* **User**: string

## Tmpfs
### Properties
* **ContainerPath**: string (Required)
* **MountOptions**: string[]
* **Size**: int (Required)

## Ulimit
### Properties
* **HardLimit**: int (Required)
* **Name**: string (Required)
* **SoftLimit**: int (Required)

## UpdatePolicy
### Properties
* **JobExecutionTimeoutMinutes**: int
* **TerminateJobsOnUpdate**: bool

## Volume
### Properties
* **EfsVolumeConfiguration**: [EFSVolumeConfiguration](#efsvolumeconfiguration)
* **Host**: [Host](#host)
* **Name**: string
* **S3FilesVolumeConfiguration**: [S3FilesVolumeConfiguration](#s3filesvolumeconfiguration)

