# AWS.Batch @ default

## Resource AWS.Batch/ComputeEnvironment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/ComputeEnvironmentProperties](#awsbatchcomputeenvironmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/JobDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/JobDefinitionProperties](#awsbatchjobdefinitionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/JobQueue@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/JobQueueProperties](#awsbatchjobqueueproperties) (Required, Identifier): properties of the resource

## Resource AWS.Batch/SchedulingPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Batch/SchedulingPolicyProperties](#awsbatchschedulingpolicyproperties) (Identifier): properties of the resource

## AWS.Batch/ComputeEnvironmentProperties
### Properties
* **ComputeEnvironmentArn**: string (ReadOnly, Identifier)
* **ComputeEnvironmentName**: string
* **ComputeResources**: [ComputeResources](#computeresources)
* **Context**: string
* **EksConfiguration**: [EksConfiguration](#eksconfiguration)
* **ReplaceComputeEnvironment**: bool (WriteOnly)
* **ServiceRole**: string
* **State**: string
* **Tags**: [ComputeEnvironment_Tags](#computeenvironmenttags): A key-value pair to associate with a resource.
* **Type**: string (Required)
* **UnmanagedvCpus**: int
* **UpdatePolicy**: [UpdatePolicy](#updatepolicy) (WriteOnly)

## AWS.Batch/JobDefinitionProperties
### Properties
* **ContainerProperties**: [ContainerProperties](#containerproperties)
* **EcsProperties**: [EcsProperties](#ecsproperties)
* **EksProperties**: [EksProperties](#eksproperties)
* **JobDefinitionName**: string (Identifier)
* **NodeProperties**: [NodeProperties](#nodeproperties)
* **Parameters**: [JobDefinition_Parameters](#jobdefinitionparameters)
* **PlatformCapabilities**: string[]
* **PropagateTags**: bool
* **RetryStrategy**: [RetryStrategy](#retrystrategy)
* **SchedulingPriority**: int
* **Tags**: [JobDefinition_Tags](#jobdefinitiontags): A key-value pair to associate with a resource.
* **Timeout**: [JobTimeout](#jobtimeout)
* **Type**: string (Required)

## AWS.Batch/JobQueueProperties
### Properties
* **ComputeEnvironmentOrder**: [ComputeEnvironmentOrder](#computeenvironmentorder)[] (Required)
* **JobQueueArn**: string (ReadOnly, Identifier)
* **JobQueueName**: string
* **JobStateTimeLimitActions**: [JobStateTimeLimitAction](#jobstatetimelimitaction)[]
* **Priority**: int (Required)
* **SchedulingPolicyArn**: string
* **State**: string
* **Tags**: [JobQueue_Tags](#jobqueuetags): A key-value pair to associate with a resource.

## AWS.Batch/SchedulingPolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **FairsharePolicy**: [FairsharePolicy](#fairsharepolicy)
* **Name**: string: Name of Scheduling Policy.
* **Tags**: [SchedulingPolicy_Tags](#schedulingpolicytags): A key-value pair to associate with a resource.

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

## ContainerProperties
### Properties
* **Command**: string[]
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
* **ImageIdOverride**: string
* **ImageKubernetesVersion**: string
* **ImageType**: string (Required)

## EcsProperties
### Properties
* **TaskProperties**: [EcsTaskProperties](#ecstaskproperties)[] (Required)

## EcsTaskProperties
### Properties
* **Containers**: [TaskContainerProperties](#taskcontainerproperties)[]
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage)
* **ExecutionRoleArn**: string
* **IpcMode**: string
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
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

## EksConfiguration
### Properties
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

## EksEmptyDir
### Properties
* **Medium**: string
* **SizeLimit**: string

## EksHostPath
### Properties
* **Path**: string

## EksMetadata
### Properties
* **Labels**: [JobDefinition_Labels](#jobdefinitionlabels)

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

## JobDefinition_FargatePlatformConfiguration
### Properties
* **PlatformVersion**: string

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
* **Version**: string

## LaunchTemplateSpecificationOverride
### Properties
* **LaunchTemplateId**: string
* **LaunchTemplateName**: string
* **TargetInstanceTypes**: string[]
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

## MountPoint
### Properties
* **ContainerPath**: string
* **ReadOnly**: bool
* **SourceVolume**: string

## MultiNodeContainerProperties
### Properties
* **Command**: string[]
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
* **Container**: [MultiNodeContainerProperties](#multinodecontainerproperties)
* **EcsProperties**: [MultiNodeEcsProperties](#multinodeecsproperties)
* **EksProperties**: [EksProperties](#eksproperties)
* **InstanceTypes**: string[]
* **TargetNodes**: string (Required)

## RepositoryCredentials
### Properties
* **CredentialsParameter**: string (Required)

## ResourceRequirement
### Properties
* **Type**: string
* **Value**: string

## RetryStrategy
### Properties
* **Attempts**: int
* **EvaluateOnExit**: [EvaluateOnExit](#evaluateonexit)[]

## RuntimePlatform
### Properties
* **CpuArchitecture**: string
* **OperatingSystemFamily**: string

## SchedulingPolicy_Tags
### Properties

## Secret
### Properties
* **Name**: string (Required)
* **ValueFrom**: string (Required)

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

