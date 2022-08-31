# AWS.ECS @ default

## Resource AWS.ECS/CapacityProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/CapacityProviderProperties](#awsecscapacityproviderproperties): properties of the resource

## Resource AWS.ECS/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/ClusterProperties](#awsecsclusterproperties): properties of the resource

## Resource AWS.ECS/ClusterCapacityProviderAssociations@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/ClusterCapacityProviderAssociationsProperties](#awsecsclustercapacityproviderassociationsproperties): properties of the resource

## Resource AWS.ECS/PrimaryTaskSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/PrimaryTaskSetProperties](#awsecsprimarytasksetproperties): properties of the resource

## Resource AWS.ECS/Service@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/ServiceProperties](#awsecsserviceproperties): properties of the resource

## Resource AWS.ECS/TaskDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/TaskDefinitionProperties](#awsecstaskdefinitionproperties): properties of the resource

## Resource AWS.ECS/TaskSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ECS/TaskSetProperties](#awsecstasksetproperties): properties of the resource

## AWS.ECS/CapacityProviderProperties
### Properties
* **AutoScalingGroupProvider**: [AutoScalingGroupProvider](#autoscalinggroupprovider)
* **Name**: string
* **Tags**: [Tag](#tag)[]

## AutoScalingGroupProvider
### Properties
* **AutoScalingGroupArn**: string
* **ManagedScaling**: [ManagedScaling](#managedscaling)
* **ManagedTerminationProtection**: string

## ManagedScaling
### Properties
* **InstanceWarmupPeriod**: int
* **MaximumScalingStepSize**: int
* **MinimumScalingStepSize**: int
* **Status**: string
* **TargetCapacity**: int

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.ECS/ClusterProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon ECS cluster, such as arn:aws:ecs:us-east-2:123456789012:cluster/MyECSCluster.
* **CapacityProviders**: string[]
* **ClusterName**: string: A user-generated string that you use to identify your cluster. If you don't specify a name, AWS CloudFormation generates a unique physical ID for the name.
* **ClusterSettings**: [ClusterSettings](#clustersettings)[]
* **Configuration**: [ClusterConfiguration](#clusterconfiguration)
* **DefaultCapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]
* **Tags**: [Tag](#tag)[]

## ClusterSettings
### Properties
* **Name**: string
* **Value**: string

## ClusterConfiguration
### Properties
* **ExecuteCommandConfiguration**: [ExecuteCommandConfiguration](#executecommandconfiguration)

## ExecuteCommandConfiguration
### Properties
* **KmsKeyId**: string
* **LogConfiguration**: [ExecuteCommandLogConfiguration](#executecommandlogconfiguration)
* **Logging**: string

## ExecuteCommandLogConfiguration
### Properties
* **CloudWatchEncryptionEnabled**: bool
* **CloudWatchLogGroupName**: string
* **S3BucketName**: string
* **S3EncryptionEnabled**: bool
* **S3KeyPrefix**: string

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string
* **Weight**: int

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.ECS/ClusterCapacityProviderAssociationsProperties
### Properties
* **CapacityProviders**: [CapacityProviders](#capacityproviders)
* **Cluster**: [Cluster](#cluster)
* **DefaultCapacityProviderStrategy**: [DefaultCapacityProviderStrategy](#defaultcapacityproviderstrategy)

## CapacityProviders
### Properties

## Cluster
### Properties

## DefaultCapacityProviderStrategy
### Properties

## AWS.ECS/PrimaryTaskSetProperties
### Properties
* **Cluster**: string: The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
* **Service**: string: The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
* **TaskSetId**: string: The ID or full Amazon Resource Name (ARN) of the task set.

## AWS.ECS/ServiceProperties
### Properties
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]
* **Cluster**: string
* **DeploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration)
* **DeploymentController**: [DeploymentController](#deploymentcontroller)
* **DesiredCount**: int
* **EnableECSManagedTags**: bool
* **EnableExecuteCommand**: bool
* **HealthCheckGracePeriodSeconds**: int
* **LaunchType**: string
* **LoadBalancers**: [LoadBalancer](#loadbalancer)[]
* **Name**: string (ReadOnly)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PlacementConstraints**: [PlacementConstraint](#placementconstraint)[]
* **PlacementStrategies**: [PlacementStrategy](#placementstrategy)[]
* **PlatformVersion**: string
* **PropagateTags**: string
* **Role**: string
* **SchedulingStrategy**: string
* **ServiceArn**: string (ReadOnly)
* **ServiceName**: string
* **ServiceRegistries**: [ServiceRegistry](#serviceregistry)[]
* **Tags**: [Tag](#tag)[]
* **TaskDefinition**: string

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string
* **Weight**: int

## DeploymentConfiguration
### Properties
* **DeploymentCircuitBreaker**: [DeploymentCircuitBreaker](#deploymentcircuitbreaker)
* **MaximumPercent**: int
* **MinimumHealthyPercent**: int

## DeploymentCircuitBreaker
### Properties
* **Enable**: bool
* **Rollback**: bool

## DeploymentController
### Properties
* **Type**: string

## LoadBalancer
### Properties
* **ContainerName**: string
* **ContainerPort**: int
* **LoadBalancerName**: string
* **TargetGroupArn**: string

## NetworkConfiguration
### Properties
* **AwsvpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string
* **SecurityGroups**: string[]
* **Subnets**: string[]

## PlacementConstraint
### Properties
* **Expression**: string
* **Type**: string

## PlacementStrategy
### Properties
* **Field**: string
* **Type**: string

## ServiceRegistry
### Properties
* **ContainerName**: string
* **ContainerPort**: int
* **Port**: int
* **RegistryArn**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.ECS/TaskDefinitionProperties
### Properties
* **ContainerDefinitions**: [ContainerDefinition](#containerdefinition)[]
* **Cpu**: string
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage)
* **ExecutionRoleArn**: string
* **Family**: string
* **InferenceAccelerators**: [InferenceAccelerator](#inferenceaccelerator)[]
* **IpcMode**: string
* **Memory**: string
* **NetworkMode**: string
* **PidMode**: string
* **PlacementConstraints**: [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)[]
* **ProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration)
* **RequiresCompatibilities**: string[]
* **RuntimePlatform**: [RuntimePlatform](#runtimeplatform)
* **Tags**: [Tag](#tag)[]
* **TaskDefinitionArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon ECS task definition
* **TaskRoleArn**: string
* **Volumes**: [Volume](#volume)[]

## ContainerDefinition
### Properties
* **Command**: string[]
* **Cpu**: int
* **DependsOn**: [ContainerDependency](#containerdependency)[]
* **DisableNetworking**: bool
* **DnsSearchDomains**: string[]
* **DnsServers**: string[]
* **DockerLabels**: [TaskDefinition_DockerLabels](#taskdefinitiondockerlabels)
* **DockerSecurityOptions**: string[]
* **EntryPoint**: string[]
* **Environment**: [KeyValuePair](#keyvaluepair)[]: The environment variables to pass to a container
* **EnvironmentFiles**: [EnvironmentFile](#environmentfile)[]: The list of one or more files that contain the environment variables to pass to a container
* **Essential**: bool
* **ExtraHosts**: [HostEntry](#hostentry)[]
* **FirelensConfiguration**: [FirelensConfiguration](#firelensconfiguration)
* **HealthCheck**: [HealthCheck](#healthcheck)
* **Hostname**: string
* **Image**: string: The image used to start a container. This string is passed directly to the Docker daemon.
* **Interactive**: bool
* **Links**: string[]
* **LinuxParameters**: [LinuxParameters](#linuxparameters)
* **LogConfiguration**: [LogConfiguration](#logconfiguration)
* **Memory**: int: The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed.
* **MemoryReservation**: int
* **MountPoints**: [MountPoint](#mountpoint)[]
* **Name**: string: The name of a container. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed
* **PortMappings**: [PortMapping](#portmapping)[]: Port mappings allow containers to access ports on the host container instance to send or receive traffic.
* **Privileged**: bool
* **PseudoTerminal**: bool
* **ReadonlyRootFilesystem**: bool
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials)
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]
* **Secrets**: [Secret](#secret)[]
* **StartTimeout**: int
* **StopTimeout**: int
* **SystemControls**: [SystemControl](#systemcontrol)[]
* **Ulimits**: [Ulimit](#ulimit)[]
* **User**: string
* **VolumesFrom**: [VolumeFrom](#volumefrom)[]
* **WorkingDirectory**: string

## ContainerDependency
### Properties
* **Condition**: string
* **ContainerName**: string

## TaskDefinition_DockerLabels
### Properties

## KeyValuePair
### Properties
* **Name**: string
* **Value**: string

## EnvironmentFile
### Properties
* **Type**: string
* **Value**: string

## HostEntry
### Properties
* **Hostname**: string
* **IpAddress**: string

## FirelensConfiguration
### Properties
* **Options**: [TaskDefinition_Options](#taskdefinitionoptions)
* **Type**: string

## TaskDefinition_Options
### Properties

## HealthCheck
### Properties
* **Command**: string[]: A string array representing the command that the container runs to determine if it is healthy.
* **Interval**: int: The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
* **Retries**: int: The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is three retries.
* **StartPeriod**: int: The optional grace period within which to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You may specify between 0 and 300 seconds. The startPeriod is disabled by default.
* **Timeout**: int: The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5 seconds.

## LinuxParameters
### Properties
* **Capabilities**: [KernelCapabilities](#kernelcapabilities)
* **Devices**: [Device](#device)[]
* **InitProcessEnabled**: bool
* **MaxSwap**: int
* **SharedMemorySize**: int
* **Swappiness**: int
* **Tmpfs**: [Tmpfs](#tmpfs)[]

## KernelCapabilities
### Properties
* **Add**: string[]
* **Drop**: string[]

## Device
### Properties
* **ContainerPath**: string
* **HostPath**: string
* **Permissions**: string[]

## Tmpfs
### Properties
* **ContainerPath**: string
* **MountOptions**: string[]
* **Size**: int

## LogConfiguration
### Properties
* **LogDriver**: string
* **Options**: [TaskDefinition_Options](#taskdefinitionoptions)
* **SecretOptions**: [Secret](#secret)[]

## TaskDefinition_Options
### Properties

## Secret
### Properties
* **Name**: string
* **ValueFrom**: string

## MountPoint
### Properties
* **ContainerPath**: string
* **ReadOnly**: bool
* **SourceVolume**: string

## PortMapping
### Properties
* **ContainerPort**: int
* **HostPort**: int
* **Protocol**: string

## RepositoryCredentials
### Properties
* **CredentialsParameter**: string

## ResourceRequirement
### Properties
* **Type**: string
* **Value**: string

## SystemControl
### Properties
* **Namespace**: string
* **Value**: string

## Ulimit
### Properties
* **HardLimit**: int
* **Name**: string
* **SoftLimit**: int

## VolumeFrom
### Properties
* **ReadOnly**: bool
* **SourceContainer**: string

## EphemeralStorage
### Properties
* **SizeInGiB**: int

## InferenceAccelerator
### Properties
* **DeviceName**: string
* **DeviceType**: string

## TaskDefinitionPlacementConstraint
### Properties
* **Expression**: string
* **Type**: string

## ProxyConfiguration
### Properties
* **ContainerName**: string
* **ProxyConfigurationProperties**: [KeyValuePair](#keyvaluepair)[]
* **Type**: string

## RuntimePlatform
### Properties
* **CpuArchitecture**: string
* **OperatingSystemFamily**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Volume
### Properties
* **DockerVolumeConfiguration**: [DockerVolumeConfiguration](#dockervolumeconfiguration)
* **EFSVolumeConfiguration**: [EFSVolumeConfiguration](#efsvolumeconfiguration)
* **Host**: [HostVolumeProperties](#hostvolumeproperties)
* **Name**: string

## DockerVolumeConfiguration
### Properties
* **Autoprovision**: bool
* **Driver**: string
* **DriverOpts**: [TaskDefinition_DriverOpts](#taskdefinitiondriveropts)
* **Labels**: [TaskDefinition_Labels](#taskdefinitionlabels)
* **Scope**: string

## TaskDefinition_DriverOpts
### Properties

## TaskDefinition_Labels
### Properties

## EFSVolumeConfiguration
### Properties
* **AuthorizationConfig**: [AuthorizationConfig](#authorizationconfig)
* **FilesystemId**: string
* **RootDirectory**: string
* **TransitEncryption**: string
* **TransitEncryptionPort**: int

## AuthorizationConfig
### Properties
* **AccessPointId**: string
* **IAM**: string

## HostVolumeProperties
### Properties
* **SourcePath**: string

## AWS.ECS/TaskSetProperties
### Properties
* **Cluster**: string: The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
* **ExternalId**: string: An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value. 
* **Id**: string (ReadOnly): The ID of the task set.
* **LaunchType**: string: The launch type that new tasks in the task set will use. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide. 
* **LoadBalancers**: [LoadBalancer](#loadbalancer)[]
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PlatformVersion**: string: The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.
* **Scale**: [Scale](#scale): A floating-point percentage of the desired number of tasks to place and keep running in the task set.
* **Service**: string: The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
* **ServiceRegistries**: [ServiceRegistry](#serviceregistry)[]: The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.
* **TaskDefinition**: string: The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.

## LoadBalancer
### Properties
* **ContainerName**: string: The name of the container (as it appears in a container definition) to associate with the load balancer.
* **ContainerPort**: int: The port on the container to associate with the load balancer. This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.
* **LoadBalancerName**: string: The name of the load balancer to associate with the Amazon ECS service or task set. A load balancer name is only specified when using a Classic Load Balancer. If you are using an Application Load Balancer or a Network Load Balancer this should be omitted.
* **TargetGroupArn**: string: The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.

## NetworkConfiguration
### Properties
* **AwsVpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string: Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
* **SecurityGroups**: string[]: The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.
* **Subnets**: string[]: The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.

## Scale
### Properties
* **Unit**: string: The unit of measure for the scale value.
* **Value**: int: The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100.

## ServiceRegistry
### Properties
* **ContainerName**: string: The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
* **ContainerPort**: int: The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
* **Port**: int: The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.
* **RegistryArn**: string: The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html

