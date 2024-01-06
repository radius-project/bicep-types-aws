# AWS.Batch @ default

## Resource AWS.Batch/ComputeEnvironment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/ComputeEnvironmentProperties](#awsbatchcomputeenvironmentproperties) (Required): properties of the resource

## Resource AWS.Batch/JobDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/JobDefinitionProperties](#awsbatchjobdefinitionproperties) (Required): properties of the resource

## Resource AWS.Batch/JobQueue@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/JobQueueProperties](#awsbatchjobqueueproperties) (Required): properties of the resource

## Resource AWS.Batch/SchedulingPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/SchedulingPolicyProperties](#awsbatchschedulingpolicyproperties): properties of the resource

## AWS.Batch/ComputeEnvironmentProperties
### Properties
* **ComputeEnvironmentArn**: string (ReadOnly, Identifier)
* **ComputeEnvironmentName**: string
* **ComputeResources**: [ComputeResources](#computeresources)
* **EksConfiguration**: [EksConfiguration](#eksconfiguration)
* **ReplaceComputeEnvironment**: bool (WriteOnly)
* **ServiceRole**: string
* **State**: string
* **Tags**: [ComputeEnvironment_Tags](#computeenvironmenttags): A key-value pair to associate with a resource.
* **Type**: string (Required)
* **UnmanagedvCpus**: int
* **UpdatePolicy**: [UpdatePolicy](#updatepolicy) (WriteOnly)

## ComputeResources
### Properties
* **AllocationStrategy**: string
* **BidPercentage**: int
* **DesiredvCpus**: int
* **Ec2Configuration**: [Ec2ConfigurationObject](#ec2configurationobject)[]
* **Ec2KeyPair**: string
* **ImageId**: string
* **InstanceRole**: string
* **InstanceTypes**: string[]
* **LaunchTemplate**: [LaunchTemplateSpecification](#launchtemplatespecification)
* **MaxvCpus**: int (Required)
* **MinvCpus**: int
* **PlacementGroup**: string
* **SecurityGroupIds**: string[]
* **SpotIamFleetRole**: string
* **Subnets**: string[] (Required)
* **Tags**: [ComputeEnvironment_Tags](#computeenvironmenttags): A key-value pair to associate with a resource.
* **Type**: string (Required)
* **UpdateToLatestImageVersion**: bool (WriteOnly)

## Ec2ConfigurationObject
### Properties
* **ImageIdOverride**: string
* **ImageKubernetesVersion**: string
* **ImageType**: string (Required)

## LaunchTemplateSpecification
### Properties
* **LaunchTemplateId**: string
* **LaunchTemplateName**: string
* **Version**: string

## ComputeEnvironment_Tags
### Properties

## EksConfiguration
### Properties
* **EksClusterArn**: string (Required)
* **KubernetesNamespace**: string (Required)

## ComputeEnvironment_Tags
### Properties

## UpdatePolicy
### Properties
* **JobExecutionTimeoutMinutes**: int
* **TerminateJobsOnUpdate**: bool

## AWS.Batch/JobDefinitionProperties
### Properties
* **ContainerOrchestrationType**: string (ReadOnly)
* **ContainerProperties**: [ContainerProperties](#containerproperties)
* **EksProperties**: [EksProperties](#eksproperties)
* **JobDefinitionArn**: string (ReadOnly, Identifier)
* **JobDefinitionName**: string
* **NodeProperties**: [NodeProperties](#nodeproperties)
* **Parameters**: [JobDefinition_Parameters](#jobdefinitionparameters)
* **PlatformCapabilities**: string[]
* **PropagateTags**: bool
* **RetryStrategy**: [RetryStrategy](#retrystrategy)
* **Revision**: int (ReadOnly)
* **SchedulingPriority**: int
* **Status**: string (ReadOnly)
* **Tags**: [JobDefinition_Tags](#jobdefinitiontags): A key-value pair to associate with a resource.
* **Timeout**: [JobTimeout](#jobtimeout)
* **Type**: string (Required)

## ContainerProperties
### Properties
* **Command**: string[]
* **Environment**: [Environment](#environment)[]
* **EphemeralStorage**: [JobDefinition_EphemeralStorage](#jobdefinitionephemeralstorage)
* **ExecutionRoleArn**: string
* **FargatePlatformConfiguration**: [JobDefinition_FargatePlatformConfiguration](#jobdefinitionfargateplatformconfiguration)
* **Image**: string (Required)
* **InstanceType**: string (WriteOnly)
* **JobRoleArn**: string
* **LinuxParameters**: [JobDefinition_LinuxParameters](#jobdefinitionlinuxparameters)
* **LogConfiguration**: [JobDefinition_LogConfiguration](#jobdefinitionlogconfiguration)
* **Memory**: int
* **MountPoints**: [MountPoint](#mountpoint)[]
* **NetworkConfiguration**: [JobDefinition_NetworkConfiguration](#jobdefinitionnetworkconfiguration)
* **Privileged**: bool
* **ReadonlyRootFilesystem**: bool
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]
* **RuntimePlatform**: [JobDefinition_RuntimePlatform](#jobdefinitionruntimeplatform)
* **Secrets**: [Secret](#secret)[]
* **Ulimits**: [Ulimit](#ulimit)[]
* **User**: string
* **Vcpus**: int
* **Volumes**: [Volume](#volume)[]

## Environment
### Properties
* **Name**: string
* **Value**: string

## JobDefinition_EphemeralStorage
### Properties
* **SizeInGiB**: int (Required)

## JobDefinition_FargatePlatformConfiguration
### Properties
* **PlatformVersion**: string

## JobDefinition_LinuxParameters
### Properties
* **Devices**: [Device](#device)[]
* **InitProcessEnabled**: bool
* **MaxSwap**: int
* **SharedMemorySize**: int
* **Swappiness**: int
* **Tmpfs**: [Tmpfs](#tmpfs)[]

## Device
### Properties
* **ContainerPath**: string
* **HostPath**: string
* **Permissions**: string[]

## Tmpfs
### Properties
* **ContainerPath**: string (Required)
* **MountOptions**: string[]
* **Size**: int (Required)

## JobDefinition_LogConfiguration
### Properties
* **LogDriver**: string (Required)
* **Options**: [JobDefinition_LogConfiguration_Options](#jobdefinitionlogconfigurationoptions)
* **SecretOptions**: [Secret](#secret)[]

## JobDefinition_LogConfiguration_Options
### Properties

## Secret
### Properties
* **Name**: string (Required)
* **ValueFrom**: string (Required)

## MountPoint
### Properties
* **ContainerPath**: string
* **ReadOnly**: bool
* **SourceVolume**: string

## JobDefinition_NetworkConfiguration
### Properties
* **AssignPublicIp**: string

## ResourceRequirement
### Properties
* **Type**: string
* **Value**: string

## JobDefinition_RuntimePlatform
### Properties
* **CpuArchitecture**: string
* **OperatingSystemFamily**: string

## Ulimit
### Properties
* **HardLimit**: int (Required)
* **Name**: string (Required)
* **SoftLimit**: int (Required)

## Volume
### Properties
* **EfsVolumeConfiguration**: [EFSVolumeConfiguration](#efsvolumeconfiguration)
* **Host**: [Host](#host)
* **Name**: string

## EFSVolumeConfiguration
### Properties
* **AuthorizationConfig**: [EFSAuthorizationConfig](#efsauthorizationconfig)
* **FileSystemId**: string (Required)
* **RootDirectory**: string
* **TransitEncryption**: string
* **TransitEncryptionPort**: int

## EFSAuthorizationConfig
### Properties
* **AccessPointId**: string
* **Iam**: string

## Host
### Properties
* **SourcePath**: string

## EksProperties
### Properties
* **PodProperties**: [EksPodProperties](#ekspodproperties)

## EksPodProperties
### Properties
* **Containers**: [EksContainer](#ekscontainer)[]
* **DnsPolicy**: string
* **HostNetwork**: bool
* **Metadata**: [EksMetadata](#eksmetadata)
* **ServiceAccountName**: string
* **Volumes**: [EksVolume](#eksvolume)[]

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

## JobDefinition_Limits
### Properties

## JobDefinition_Requests
### Properties

## EksContainerSecurityContext
### Properties
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

## EksMetadata
### Properties
* **Labels**: [JobDefinition_Labels](#jobdefinitionlabels)

## JobDefinition_Labels
### Properties

## EksVolume
### Properties
* **EmptyDir**: [EksEmptyDir](#eksemptydir)
* **HostPath**: [EksHostPath](#ekshostpath)
* **Name**: string (Required)
* **Secret**: [EksSecret](#ekssecret)

## EksEmptyDir
### Properties
* **Medium**: string
* **SizeLimit**: string

## EksHostPath
### Properties
* **Path**: string

## EksSecret
### Properties
* **Optional**: bool
* **SecretName**: string (Required)

## NodeProperties
### Properties
* **MainNode**: int (Required)
* **NodeRangeProperties**: [NodeRangeProperty](#noderangeproperty)[] (Required, WriteOnly)
* **NumNodes**: int (Required)

## NodeRangeProperty
### Properties
* **Container**: [ContainerProperties](#containerproperties)
* **TargetNodes**: string (Required)

## JobDefinition_Parameters
### Properties

## RetryStrategy
### Properties
* **Attempts**: int
* **EvaluateOnExit**: [EvaluateOnExit](#evaluateonexit)[]

## EvaluateOnExit
### Properties
* **Action**: string (Required)
* **OnExitCode**: string
* **OnReason**: string
* **OnStatusReason**: string

## JobDefinition_Tags
### Properties

## JobTimeout
### Properties
* **AttemptDurationSeconds**: int

## AWS.Batch/JobQueueProperties
### Properties
* **ComputeEnvironmentOrder**: [ComputeEnvironmentOrder](#computeenvironmentorder)[] (Required)
* **JobQueueArn**: string (ReadOnly, Identifier)
* **JobQueueName**: string
* **Priority**: int (Required)
* **SchedulingPolicyArn**: string
* **State**: string
* **Tags**: [JobQueue_Tags](#jobqueuetags): A key-value pair to associate with a resource.

## ComputeEnvironmentOrder
### Properties
* **ComputeEnvironment**: string (Required)
* **Order**: int (Required)

## JobQueue_Tags
### Properties

## AWS.Batch/SchedulingPolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **FairsharePolicy**: [FairsharePolicy](#fairsharepolicy)
* **Name**: string: Name of Scheduling Policy.
* **Tags**: [SchedulingPolicy_Tags](#schedulingpolicytags): A key-value pair to associate with a resource.

## FairsharePolicy
### Properties
* **ComputeReservation**: int
* **ShareDecaySeconds**: int
* **ShareDistribution**: [ShareAttributes](#shareattributes)[]: List of Share Attributes

## ShareAttributes
### Properties
* **ShareIdentifier**: string
* **WeightFactor**: int

## SchedulingPolicy_Tags
### Properties

