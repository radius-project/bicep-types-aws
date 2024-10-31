# AWS.ECS @ default

## Resource AWS.ECS/CapacityProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/CapacityProviderProperties](#awsecscapacityproviderproperties) (Identifier): properties of the resource

## Resource AWS.ECS/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ClusterProperties](#awsecsclusterproperties) (Identifier): properties of the resource

## Resource AWS.ECS/ClusterCapacityProviderAssociations@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ClusterCapacityProviderAssociationsProperties](#awsecsclustercapacityproviderassociationsproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECS/PrimaryTaskSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/PrimaryTaskSetProperties](#awsecsprimarytasksetproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECS/Service@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ServiceProperties](#awsecsserviceproperties) (Identifier): properties of the resource

## Resource AWS.ECS/TaskDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/TaskDefinitionProperties](#awsecstaskdefinitionproperties) (Identifier): properties of the resource

## Resource AWS.ECS/TaskSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/TaskSetProperties](#awsecstasksetproperties) (Required, Identifier): properties of the resource

## AuthorizationConfig
### Properties
* **AccessPointId**: string: The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the ``EFSVolumeConfiguration`` must either be omitted or set to ``/`` which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the ``EFSVolumeConfiguration``. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the *Amazon Elastic File System User Guide*.
* **IAM**: string: Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the ``EFSVolumeConfiguration``. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the *Amazon Elastic Container Service Developer Guide*.

## AutoScalingGroupProvider
### Properties
* **AutoScalingGroupArn**: string (Required)
* **ManagedDraining**: string
* **ManagedScaling**: [ManagedScaling](#managedscaling)
* **ManagedTerminationProtection**: string

## AWS.ECS/CapacityProviderProperties
### Properties
* **AutoScalingGroupProvider**: [AutoScalingGroupProvider](#autoscalinggroupprovider)
* **Name**: string (Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.ECS/ClusterCapacityProviderAssociationsProperties
### Properties
* **CapacityProviders**: string[] (Required)
* **Cluster**: string (Required, Identifier)
* **DefaultCapacityProviderStrategy**: [CapacityProviderStrategy](#capacityproviderstrategy)[] (Required)

## AWS.ECS/ClusterProperties
### Properties
* **Arn**: string (ReadOnly)
* **CapacityProviders**: string[]: The short name of one or more capacity providers to associate with the cluster. A capacity provider must be associated with a cluster before it can be included as part of the default capacity provider strategy of the cluster or used in a capacity provider strategy when calling the [CreateService](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html) or [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html) actions.
 If specifying a capacity provider that uses an Auto Scaling group, the capacity provider must be created but not associated with another cluster. New Auto Scaling group capacity providers can be created with the [CreateCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateCapacityProvider.html) API operation.
 To use a FARGATElong capacity provider, specify either the ``FARGATE`` or ``FARGATE_SPOT`` capacity providers. The FARGATElong capacity providers are available to all accounts and only need to be associated with a cluster to be used.
 The [PutCapacityProvider](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutCapacityProvider.html) API operation is used to update the list of available capacity providers for a cluster after the cluster is created.
* **ClusterName**: string (Identifier): A user-generated string that you use to identify your cluster. If you don't specify a name, CFNlong generates a unique physical ID for the name.
* **ClusterSettings**: [ClusterSettings](#clustersettings)[]: The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights for a cluster.
* **Configuration**: [ClusterConfiguration](#clusterconfiguration): The execute command and managed storage configuration for the cluster.
* **DefaultCapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]: The default capacity provider strategy for the cluster. When services or tasks are run in the cluster with no launch type or capacity provider strategy specified, the default capacity provider strategy is used.
* **ServiceConnectDefaults**: [ServiceConnectDefaults](#serviceconnectdefaults) (WriteOnly): Use this parameter to set a default Service Connect namespace. After you set a default Service Connect namespace, any new services with Service Connect turned on that are created in the cluster are added as client services in the namespace. This setting only applies to new services that set the ``enabled`` parameter to ``true`` in the ``ServiceConnectConfiguration``. You can set the namespace of each service individually in the ``ServiceConnectConfiguration`` to override this default parameter.
 Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to the cluster to help you categorize and organize them. Each tag consists of a key and an optional value. You define both.
 The following basic restrictions apply to tags:
  +  Maximum number of tags per resource - 50
  +  For each resource, each tag key must be unique, and each tag key can have only one value.
  +  Maximum key length - 128 Unicode characters in UTF-8
  +  Maximum value length - 256 Unicode characters in UTF-8
  +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  +  Tag keys and values are case-sensitive.
  +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.

## AWS.ECS/PrimaryTaskSetProperties
### Properties
* **Cluster**: string (Required, Identifier): The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
* **Service**: string (Required, Identifier): The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
* **TaskSetId**: string (Required): The ID or full Amazon Resource Name (ARN) of the task set.

## AWS.ECS/ServiceProperties
### Properties
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]: The capacity provider strategy to use for the service.
 If a ``capacityProviderStrategy`` is specified, the ``launchType`` parameter must be omitted. If no ``capacityProviderStrategy`` or ``launchType`` is specified, the ``defaultCapacityProviderStrategy`` for the cluster is used.
 A capacity provider strategy may contain a maximum of 6 capacity providers.
* **Cluster**: string (Identifier): The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.
* **DeploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration): Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
* **DeploymentController**: [DeploymentController](#deploymentcontroller): The deployment controller to use for the service. If no deployment controller is specified, the default value of ``ECS`` is used.
* **DesiredCount**: int: The number of instantiations of the specified task definition to place and keep running in your service.
 For new services, if a desired count is not specified, a default value of ``1`` is used. When using the ``DAEMON`` scheduling strategy, the desired count is not required.
 For existing services, if a desired count is not specified, it is omitted from the operation.
* **EnableECSManagedTags**: bool: Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
 When you use Amazon ECS managed tags, you need to set the ``propagateTags`` request parameter.
* **EnableExecuteCommand**: bool: Determines whether the execute command functionality is turned on for the service. If ``true``, the execute command functionality is turned on for all containers in tasks as part of the service.
* **HealthCheckGracePeriodSeconds**: int: The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing target health checks after a task has first started. This is only used when your service is configured to use a load balancer. If your service has a load balancer defined and you don't specify a health check grace period value, the default value of ``0`` is used.
 If you do not use an Elastic Load Balancing, we recommend that you use the ``startPeriod`` in the task definition health check parameters. For more information, see [Health check](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_HealthCheck.html).
 If your service's tasks take a while to start and respond to Elastic Load Balancing health checks, you can specify a health check grace period of up to 2,147,483,647 seconds (about 69 years). During that time, the Amazon ECS service scheduler ignores health check status. This grace period can prevent the service scheduler from marking tasks as unhealthy and stopping them before they have time to come up.
* **LaunchType**: string: The launch type on which to run your service. For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
* **LoadBalancers**: [LoadBalancer](#loadbalancer)[]: A list of load balancer objects to associate with the service. If you specify the ``Role`` property, ``LoadBalancers`` must be specified as well. For information about the number of load balancers that you can specify per service, see [Service Load Balancing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Name**: string (ReadOnly)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration): The network configuration for the service. This parameter is required for task definitions that use the ``awsvpc`` network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
* **PlacementConstraints**: [PlacementConstraint](#placementconstraint)[]: An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
* **PlacementStrategies**: [PlacementStrategy](#placementstrategy)[]: The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.
* **PlatformVersion**: string: The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the ``LATEST`` platform version is used. For more information, see [platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
* **PropagateTags**: string: Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
 You must set this to a value other than ``NONE`` when you use Cost Explorer. For more information, see [Amazon ECS usage reports](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html) in the *Amazon Elastic Container Service Developer Guide*.
 The default is ``NONE``.
* **Role**: string: The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the ``awsvpc`` network mode. If you specify the ``role`` parameter, you must also specify a load balancer object with the ``loadBalancers`` parameter.
  If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the ``awsvpc`` network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
  If your specified role has a path other than ``/``, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name ``bar`` has a path of ``/foo/`` then you would specify ``/foo/bar`` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide*.
* **SchedulingStrategy**: string: The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
 There are two service scheduler strategies available:
  +   ``REPLICA``-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types.
  +   ``DAEMON``-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.
  Tasks using the Fargate launch type or the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types don't support the ``DAEMON`` scheduling strategy.
* **ServiceArn**: string (ReadOnly, Identifier)
* **ServiceConnectConfiguration**: [ServiceConnectConfiguration](#serviceconnectconfiguration) (WriteOnly): The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
 Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **ServiceName**: string: The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
  The stack update fails if you change any properties that require replacement and the ``ServiceName`` is configured. This is because AWS CloudFormation creates the replacement service first, but each ``ServiceName`` must be unique in the cluster.
* **ServiceRegistries**: [ServiceRegistry](#serviceregistry)[]: The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
  Each service may be associated with one service registry. Multiple service registries for each service isn't supported.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to the service to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. When a service is deleted, the tags are deleted as well.
 The following basic restrictions apply to tags:
  +  Maximum number of tags per resource - 50
  +  For each resource, each tag key must be unique, and each tag key can have only one value.
  +  Maximum key length - 128 Unicode characters in UTF-8
  +  Maximum value length - 256 Unicode characters in UTF-8
  +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  +  Tag keys and values are case-sensitive.
  +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
* **TaskDefinition**: string: The ``family`` and ``revision`` (``family:revision``) or full ARN of the task definition to run in your service. If a ``revision`` isn't specified, the latest ``ACTIVE`` revision is used.
 A task definition must be specified if the service uses either the ``ECS`` or ``CODE_DEPLOY`` deployment controllers.
 For more information about deployment types, see [Amazon ECS deployment types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-types.html).
* **VolumeConfigurations**: [ServiceVolumeConfiguration](#servicevolumeconfiguration)[] (WriteOnly): The configuration for a volume specified in the task definition as a volume that is configured at launch time. Currently, the only supported volume type is an Amazon EBS volume.

## AWS.ECS/TaskDefinitionProperties
### Properties
* **ContainerDefinitions**: [ContainerDefinition](#containerdefinition)[]: A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see [Amazon ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Cpu**: string: The number of ``cpu`` units used by the task. If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the ``memory`` parameter.
 If you use the EC2 launch type, this field is optional. Supported values are between ``128`` CPU units (``0.125`` vCPUs) and ``10240`` CPU units (``10`` vCPUs).
 The CPU units cannot be less than 1 vCPU when you use Windows containers on Fargate.
  +  256 (.25 vCPU) - Available ``memory`` values: 512 (0.5 GB), 1024 (1 GB), 2048 (2 GB)
  +  512 (.5 vCPU) - Available ``memory`` values: 1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB)
  +  1024 (1 vCPU) - Available ``memory`` values: 2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB)
  +  2048 (2 vCPU) - Available ``memory`` values: 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB)
  +  4096 (4 vCPU) - Available ``memory`` values: 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB)
  +  8192 (8 vCPU) - Available ``memory`` values: 16 GB and 60 GB in 4 GB increments
 This option requires Linux platform ``1.4.0`` or later.
  +  16384 (16vCPU) - Available ``memory`` values: 32GB and 120 GB in 8 GB increments
 This option requires Linux platform ``1.4.0`` or later.
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage): The ephemeral storage settings to use for tasks run with the task definition.
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Family**: string: The name of a family that this task definition is registered to. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
 A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.
  To use revision numbers when you update a task definition, specify this property. If you don't specify a value, CFNlong generates a new task definition each time that you update it.
* **InferenceAccelerators**: [InferenceAccelerator](#inferenceaccelerator)[]: The Elastic Inference accelerators to use for the containers in the task.
* **IpcMode**: string: The IPC resource namespace to use for the containers in the task. The valid values are ``host``, ``task``, or ``none``. If ``host`` is specified, then all containers within the tasks that specified the ``host`` IPC mode on the same container instance share the same IPC resources with the host Amazon EC2 instance. If ``task`` is specified, all containers within the specified task share the same IPC resources. If ``none`` is specified, then IPC resources within the containers of a task are private and not shared with other containers in a task or on the container instance. If no value is specified, then the IPC resource namespace sharing depends on the Docker daemon setting on the container instance.
 If the ``host`` IPC mode is used, be aware that there is a heightened risk of undesired IPC namespace expose.
 If you are setting namespaced kernel parameters using ``systemControls`` for the containers in the task, the following will apply to your IPC resource namespace. For more information, see [System Controls](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html) in the *Amazon Elastic Container Service Developer Guide*.
  +  For tasks that use the ``host`` IPC mode, IPC namespace related ``systemControls`` are not supported.
  +  For tasks that use the ``task`` IPC mode, IPC namespace related ``systemControls`` will apply to all containers within a task.
  
  This parameter is not supported for Windows containers or tasks run on FARGATElong.
* **Memory**: string: The amount (in MiB) of memory used by the task.
 If your tasks runs on Amazon EC2 instances, you must specify either a task-level memory value or a container-level memory value. This field is optional and any value can be used. If a task-level memory value is specified, the container-level memory value is optional. For more information regarding container-level memory and memory reservation, see [ContainerDefinition](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ContainerDefinition.html).
 If your tasks runs on FARGATElong, this field is required. You must use one of the following values. The value you choose determines your range of valid values for the ``cpu`` parameter.
  +  512 (0.5 GB), 1024 (1 GB), 2048 (2 GB) - Available ``cpu`` values: 256 (.25 vCPU)
  +  1024 (1 GB), 2048 (2 GB), 3072 (3 GB), 4096 (4 GB) - Available ``cpu`` values: 512 (.5 vCPU)
  +  2048 (2 GB), 3072 (3 GB), 4096 (4 GB), 5120 (5 GB), 6144 (6 GB), 7168 (7 GB), 8192 (8 GB) - Available ``cpu`` values: 1024 (1 vCPU)
  +  Between 4096 (4 GB) and 16384 (16 GB) in increments of 1024 (1 GB) - Available ``cpu`` values: 2048 (2 vCPU)
  +  Between 8192 (8 GB) and 30720 (30 GB) in increments of 1024 (1 GB) - Available ``cpu`` values: 4096 (4 vCPU)
  +  Between 16 GB and 60 GB in 4 GB increments - Available ``cpu`` values: 8192 (8 vCPU)
 This option requires Linux platform ``1.4.0`` or later.
  +  Between 32GB and 120 GB in 8 GB increments - Available ``cpu`` values: 16384 (16 vCPU)
 This option requires Linux platform ``1.4.0`` or later.
* **NetworkMode**: string: The Docker networking mode to use for the containers in the task. The valid values are ``none``, ``bridge``, ``awsvpc``, and ``host``. If no network mode is specified, the default is ``bridge``.
 For Amazon ECS tasks on Fargate, the ``awsvpc`` network mode is required. For Amazon ECS tasks on Amazon EC2 Linux instances, any network mode can be used. For Amazon ECS tasks on Amazon EC2 Windows instances, ``<default>`` or ``awsvpc`` can be used. If the network mode is set to ``none``, you cannot specify port mappings in your container definitions, and the tasks containers do not have external connectivity. The ``host`` and ``awsvpc`` network modes offer the highest networking performance for containers because they use the EC2 network stack instead of the virtualized network stack provided by the ``bridge`` mode.
 With the ``host`` and ``awsvpc`` network modes, exposed container ports are mapped directly to the corresponding host port (for the ``host`` network mode) or the attached elastic network interface port (for the ``awsvpc`` network mode), so you cannot take advantage of dynamic host port mappings. 
  When using the ``host`` network mode, you should not run containers using the root user (UID 0). It is considered best practice to use a non-root user.
  If the network mode is ``awsvpc``, the task is allocated an elastic network interface, and you must specify a [NetworkConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_NetworkConfiguration.html) value when you create a service or run a task with the task definition. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
 If the network mode is ``host``, you cannot run multiple instantiations of the same task on a single container instance when port mappings are used.
* **PidMode**: string: The process namespace to use for the containers in the task. The valid values are ``host`` or ``task``. On Fargate for Linux containers, the only valid value is ``task``. For example, monitoring sidecars might need ``pidMode`` to access information about other containers running in the same task.
 If ``host`` is specified, all containers within the tasks that specified the ``host`` PID mode on the same container instance share the same process namespace with the host Amazon EC2 instance.
 If ``task`` is specified, all containers within the specified task share the same process namespace.
 If no value is specified, the default is a private namespace for each container.
 If the ``host`` PID mode is used, there's a heightened risk of undesired process namespace exposure.
  This parameter is not supported for Windows containers.
   This parameter is only supported for tasks that are hosted on FARGATElong if the tasks are using platform version ``1.4.0`` or later (Linux). This isn't supported for Windows containers on Fargate.
* **PlacementConstraints**: [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)[]: An array of placement constraint objects to use for tasks.
  This parameter isn't supported for tasks run on FARGATElong.
* **ProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration): The configuration details for the App Mesh proxy.
 Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the ``ecs-init`` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version ``20190301`` or later, they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
* **RequiresCompatibilities**: string[]: The task launch types the task definition was validated against. The valid values are ``EC2``, ``FARGATE``, and ``EXTERNAL``. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
* **RuntimePlatform**: [RuntimePlatform](#runtimeplatform): The operating system that your tasks definitions run on. A platform family is specified only for tasks using the Fargate launch type.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to the task definition to help you categorize and organize them. Each tag consists of a key and an optional value. You define both of them.
 The following basic restrictions apply to tags:
  +  Maximum number of tags per resource - 50
  +  For each resource, each tag key must be unique, and each tag key can have only one value.
  +  Maximum key length - 128 Unicode characters in UTF-8
  +  Maximum value length - 256 Unicode characters in UTF-8
  +  If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
  +  Tag keys and values are case-sensitive.
  +  Do not use ``aws:``, ``AWS:``, or any upper or lowercase combination of such as a prefix for either keys or values as it is reserved for AWS use. You cannot edit or delete tag keys or values with this prefix. Tags with this prefix do not count against your tags per resource limit.
* **TaskDefinitionArn**: string (ReadOnly, Identifier)
* **TaskRoleArn**: string: The short name or full Amazon Resource Name (ARN) of the IAMlong role that grants containers in the task permission to call AWS APIs on your behalf. For more information, see [Amazon ECS Task Role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
 IAM roles for tasks on Windows require that the ``-EnableTaskIAMRole`` option is set when you launch the Amazon ECS-optimized Windows AMI. Your containers must also run some configuration code to use the feature. For more information, see [Windows IAM roles for tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows_task_IAM_roles.html) in the *Amazon Elastic Container Service Developer Guide*.
  String validation is done on the ECS side. If an invalid string value is given for ``TaskRoleArn``, it may cause the Cloudformation job to hang.
* **Volumes**: [Volume](#volume)[]: The list of data volume definitions for the task. For more information, see [Using data volumes in tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_data_volumes.html) in the *Amazon Elastic Container Service Developer Guide*.
  The ``host`` and ``sourcePath`` parameters aren't supported for tasks run on FARGATElong.

## AWS.ECS/TaskSetProperties
### Properties
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]
* **Cluster**: string (Required, Identifier): The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
* **ExternalId**: string: An optional non-unique tag that identifies this task set in external systems. If the task set is associated with a service discovery registry, the tasks in this task set will have the ECS_TASK_SET_EXTERNAL_ID AWS Cloud Map attribute set to the provided value. 
* **Id**: string (ReadOnly, Identifier): The ID of the task set.
* **LaunchType**: string: The launch type that new tasks in the task set will use. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html in the Amazon Elastic Container Service Developer Guide. 
* **LoadBalancers**: [LoadBalancer](#loadbalancer)[]
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **PlatformVersion**: string: The platform version that the tasks in the task set should use. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the LATEST platform version is used by default.
* **Scale**: [Scale](#scale): A floating-point percentage of the desired number of tasks to place and keep running in the task set.
* **Service**: string (Required, Identifier): The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
* **ServiceRegistries**: [ServiceRegistry](#serviceregistry)[]: The details of the service discovery registries to assign to this task set. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html.
* **Tags**: [Tag](#tag)[]
* **TaskDefinition**: string (Required): The short name or full Amazon Resource Name (ARN) of the task definition for the tasks in the task set to use.

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string: Whether the task's elastic network interface receives a public IP address. The default value is ``DISABLED``.
* **SecurityGroups**: string[]: The IDs of the security groups associated with the task or service. If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified per ``awsvpcConfiguration``.
  All specified security groups must be from the same VPC.
* **Subnets**: string[]: The IDs of the subnets associated with the task or service. There's a limit of 16 subnets that can be specified per ``awsvpcConfiguration``.
  All specified subnets must be from the same VPC.

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string: Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
* **SecurityGroups**: string[]: The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.
* **Subnets**: string[] (Required): The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.

## CapacityProviderStrategy
### Properties
* **Base**: int
* **CapacityProvider**: string (Required)
* **Weight**: int

## CapacityProviderStrategyItem
### Properties
* **Base**: int: The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
* **CapacityProvider**: string: The short name of the capacity provider.
* **Weight**: int: The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
 If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
 An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of ``1``, then when the ``base`` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of ``1`` for *capacityProviderA* and a weight of ``4`` for *capacityProviderB*, then for every one task that's run using *capacityProviderA*, four tasks would use *capacityProviderB*.

## CapacityProviderStrategyItem
### Properties
* **Base**: int: The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
* **CapacityProvider**: string: The short name of the capacity provider.
* **Weight**: int: The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
 If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
 An example scenario for using weights is defining a strategy that contains two capacity providers and both have a weight of ``1``, then when the ``base`` is satisfied, the tasks will be split evenly across the two capacity providers. Using that same logic, if you specify a weight of ``1`` for *capacityProviderA* and a weight of ``4`` for *capacityProviderB*, then for every one task that's run using *capacityProviderA*, four tasks would use *capacityProviderB*.

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string
* **Weight**: int

## ClusterConfiguration
### Properties
* **ExecuteCommandConfiguration**: [ExecuteCommandConfiguration](#executecommandconfiguration): The details of the execute command configuration.
* **ManagedStorageConfiguration**: [ManagedStorageConfiguration](#managedstorageconfiguration): The details of the managed storage configuration.

## ClusterSettings
### Properties
* **Name**: string: The name of the cluster setting. The value is ``containerInsights`` .
* **Value**: string: The value to set for the cluster setting. The supported values are ``enabled`` and ``disabled``. 
 If you set ``name`` to ``containerInsights`` and ``value`` to ``enabled``, CloudWatch Container Insights will be on for the cluster, otherwise it will be off unless the ``containerInsights`` account setting is turned on. If a cluster value is specified, it will override the ``containerInsights`` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html).

## ContainerDefinition
### Properties
* **Command**: string[]: The command that's passed to the container. This parameter maps to ``Cmd`` in the docker container create command and the ``COMMAND`` parameter to docker run. If there are multiple arguments, each argument is a separated string in the array.
* **Cpu**: int: The number of ``cpu`` units reserved for the container. This parameter maps to ``CpuShares`` in the docker container create commandand the ``--cpu-shares`` option to docker run.
 This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level ``cpu`` value.
  You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the [Amazon EC2 Instances](https://docs.aws.amazon.com/ec2/instance-types/) detail page by 1,024.
  Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.
 On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:
  +   *Agent versions less than or equal to 1.1.0:* Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.
  +   *Agent versions greater than or equal to 1.2.0:* Null, zero, and CPU values of 1 are passed to Docker as 2.
  +   *Agent versions greater than or equal to 1.84.0:* CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.
  
 On Windows container instances, the CPU limit is enforced as an absolute limit, or a quota. Windows containers only have access to the specified amount of CPU that's described in the task definition. A null or zero CPU value is passed to Docker as ``0``, which Windows interprets as 1% of one CPU.
* **CredentialSpecs**: string[]: A list of ARNs in SSM or Amazon S3 to a credential spec (``CredSpec``) file that configures the container for Active Directory authentication. We recommend that you use this parameter instead of the ``dockerSecurityOptions``. The maximum number of ARNs is 1.
 There are two formats for each ARN.
  + credentialspecdomainless:MyARN You use credentialspecdomainless:MyARN to provide a CredSpec with an additional section for a secret in . You provide the login credentials to the domain in the secret. Each task that runs on any container instance can join different domains. You can use this format without joining the container instance to a domain. + credentialspec:MyARN You use credentialspec:MyARN to provide a CredSpec for a single domain. You must join the container instance to the domain before you start any tasks that use this task definition. 
 In both formats, replace ``MyARN`` with the ARN in SSM or Amazon S3.
 If you provide a ``credentialspecdomainless:MyARN``, the ``credspec`` must provide a ARN in ASMlong for a secret containing the username, password, and the domain to connect to. For better security, the instance isn't joined to the domain for domainless authentication. Other applications on the instance can't use the domainless credentials. You can use this parameter to run tasks on the same instance, even it the tasks need to join different domains. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html).
* **DependsOn**: [ContainerDependency](#containerdependency)[]: The dependencies defined for container startup and shutdown. A container can contain multiple dependencies. When a dependency is defined for container startup, for container shutdown it is reversed.
 For tasks using the EC2 launch type, the container instances require at least version 1.26.0 of the container agent to turn on container dependencies. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
 For tasks using the Fargate launch type, the task or service requires the following platforms:
  +  Linux platform version ``1.3.0`` or later.
  +  Windows platform version ``1.0.0`` or later.
  
 If the task definition is used in a blue/green deployment that uses [AWS::CodeDeploy::DeploymentGroup BlueGreenDeploymentConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html), the ``dependsOn`` parameter is not supported. For more information see [Issue #680](https://docs.aws.amazon.com/https://github.com/aws-cloudformation/cloudformation-coverage-roadmap/issues/680) on the on the GitHub website.
* **DisableNetworking**: bool: When this parameter is true, networking is off within the container. This parameter maps to ``NetworkDisabled`` in the docker container create command.
  This parameter is not supported for Windows containers.
* **DnsSearchDomains**: string[]: A list of DNS search domains that are presented to the container. This parameter maps to ``DnsSearch`` in the docker container create command and the ``--dns-search`` option to docker run.
  This parameter is not supported for Windows containers.
* **DnsServers**: string[]: A list of DNS servers that are presented to the container. This parameter maps to ``Dns`` in the docker container create command and the ``--dns`` option to docker run.
  This parameter is not supported for Windows containers.
* **DockerLabels**: [TaskDefinition_DockerLabels](#taskdefinitiondockerlabels): A key/value map of labels to add to the container. This parameter maps to ``Labels`` in the docker container create command and the ``--label`` option to docker run. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **DockerSecurityOptions**: string[]: A list of strings to provide custom configuration for multiple security systems. This field isn't valid for containers in tasks using the Fargate launch type.
 For Linux tasks on EC2, this parameter can be used to reference custom labels for SELinux and AppArmor multi-level security systems.
 For any tasks on EC2, this parameter can be used to reference a credential spec file that configures a container for Active Directory authentication. For more information, see [Using gMSAs for Windows Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/windows-gmsa.html) and [Using gMSAs for Linux Containers](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/linux-gmsa.html) in the *Amazon Elastic Container Service Developer Guide*.
 This parameter maps to ``SecurityOpt`` in the docker container create command and the ``--security-opt`` option to docker run.
  The Amazon ECS container agent running on a container instance must register with the ``ECS_SELINUX_CAPABLE=true`` or ``ECS_APPARMOR_CAPABLE=true`` environment variables before containers placed on that instance can use these security options. For more information, see [Amazon ECS Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
  Valid values: "no-new-privileges" | "apparmor:PROFILE" | "label:value" | "credentialspec:CredentialSpecFilePath"
* **EntryPoint**: string[]: Early versions of the Amazon ECS container agent don't properly handle ``entryPoint`` parameters. If you have problems using ``entryPoint``, update your container agent or enter your commands and arguments as ``command`` array items instead.
  The entry point that's passed to the container. This parameter maps to ``Entrypoint`` in tthe docker container create command and the ``--entrypoint`` option to docker run.
* **Environment**: [KeyValuePair](#keyvaluepair)[]: The environment variables to pass to a container. This parameter maps to ``Env`` in the docker container create command and the ``--env`` option to docker run.
  We don't recommend that you use plaintext environment variables for sensitive information, such as credential data.
* **EnvironmentFiles**: [EnvironmentFile](#environmentfile)[]: A list of files containing the environment variables to pass to a container. This parameter maps to the ``--env-file`` option to docker run.
 You can specify up to ten environment files. The file must have a ``.env`` file extension. Each line in an environment file contains an environment variable in ``VARIABLE=VALUE`` format. Lines beginning with ``#`` are treated as comments and are ignored.
 If there are environment variables specified using the ``environment`` parameter in a container definition, they take precedence over the variables contained within an environment file. If multiple environment files are specified that contain the same variable, they're processed from the top down. We recommend that you use unique variable names. For more information, see [Specifying Environment Variables](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/taskdef-envfiles.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Essential**: bool: If the ``essential`` parameter of a container is marked as ``true``, and that container fails or stops for any reason, all other containers that are part of the task are stopped. If the ``essential`` parameter of a container is marked as ``false``, its failure doesn't affect the rest of the containers in a task. If this parameter is omitted, a container is assumed to be essential.
 All tasks must have at least one essential container. If you have an application that's composed of multiple containers, group containers that are used for a common purpose into components, and separate the different components into multiple task definitions. For more information, see [Application Architecture](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/application_architecture.html) in the *Amazon Elastic Container Service Developer Guide*.
* **ExtraHosts**: [HostEntry](#hostentry)[]: A list of hostnames and IP address mappings to append to the ``/etc/hosts`` file on the container. This parameter maps to ``ExtraHosts`` in the docker container create command and the ``--add-host`` option to docker run.
  This parameter isn't supported for Windows containers or tasks that use the ``awsvpc`` network mode.
* **FirelensConfiguration**: [FirelensConfiguration](#firelensconfiguration): The FireLens configuration for the container. This is used to specify and configure a log router for container logs. For more information, see [Custom Log Routing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html) in the *Amazon Elastic Container Service Developer Guide*.
* **HealthCheck**: [HealthCheck](#healthcheck): The container health check command and associated configuration parameters for the container. This parameter maps to ``HealthCheck`` in the docker container create command and the ``HEALTHCHECK`` parameter of docker run.
* **Hostname**: string: The hostname to use for your container. This parameter maps to ``Hostname`` in thethe docker container create command and the ``--hostname`` option to docker run.
  The ``hostname`` parameter is not supported if you're using the ``awsvpc`` network mode.
* **Image**: string (Required): The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either ``repository-url/image:tag`` or ``repository-url/image@digest``. Up to 255 letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs are allowed. This parameter maps to ``Image`` in the docker container create command and the ``IMAGE`` parameter of docker run.
  +  When a new task starts, the Amazon ECS container agent pulls the latest version of the specified image and tag for the container to use. However, subsequent updates to a repository image aren't propagated to already running tasks.
  +  Images in Amazon ECR repositories can be specified by either using the full ``registry/repository:tag`` or ``registry/repository@digest``. For example, ``012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>:latest`` or ``012345678910.dkr.ecr.<region-name>.amazonaws.com/<repository-name>@sha256:94afd1f2e64d908bc90dbca0035a5b567EXAMPLE``. 
  +  Images in official repositories on Docker Hub use a single name (for example, ``ubuntu`` or ``mongo``).
  +  Images in other repositories on Docker Hub are qualified with an organization name (for example, ``amazon/amazon-ecs-agent``).
  +  Images in other online repositories are qualified further by a domain name (for example, ``quay.io/assemblyline/ubuntu``).
* **Interactive**: bool: When this parameter is ``true``, you can deploy containerized applications that require ``stdin`` or a ``tty`` to be allocated. This parameter maps to ``OpenStdin`` in the docker container create command and the ``--interactive`` option to docker run.
* **Links**: string[]: The ``links`` parameter allows containers to communicate with each other without the need for port mappings. This parameter is only supported if the network mode of a task definition is ``bridge``. The ``name:internalName`` construct is analogous to ``name:alias`` in Docker links. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.. This parameter maps to ``Links`` in the docker container create command and the ``--link`` option to docker run.
  This parameter is not supported for Windows containers.
   Containers that are collocated on a single container instance may be able to communicate with each other without requiring links or host port mappings. Network isolation is achieved on the container instance using security groups and VPC settings.
* **LinuxParameters**: [LinuxParameters](#linuxparameters): Linux-specific modifications that are applied to the container, such as Linux kernel capabilities. For more information see [KernelCapabilities](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_KernelCapabilities.html).
  This parameter is not supported for Windows containers.
* **LogConfiguration**: [LogConfiguration](#logconfiguration): The log configuration specification for the container.
 This parameter maps to ``LogConfig`` in the docker Create a container command and the ``--log-driver`` option to docker run. By default, containers use the same logging driver that the Docker daemon uses. However, the container may use a different logging driver than the Docker daemon by specifying a log driver with this parameter in the container definition. To use a different logging driver for a container, the log system must be configured properly on the container instance (or on a different log server for remote logging options). For more information on the options for different supported log drivers, see [Configure logging drivers](https://docs.aws.amazon.com/https://docs.docker.com/engine/admin/logging/overview/) in the Docker documentation.
  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon (shown in the [LogConfiguration](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_LogConfiguration.html) data type). Additional log drivers may be available in future releases of the Amazon ECS container agent.
  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'`` 
  The Amazon ECS container agent running on a container instance must register the logging drivers available on that instance with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Container Agent Configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Developer Guide*.
* **Memory**: int: The amount (in MiB) of memory to present to the container. If your container attempts to exceed the memory specified here, the container is killed. The total amount of memory reserved for all containers within a task must be lower than the task ``memory`` value, if one is specified. This parameter maps to ``Memory`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--memory`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/#security-configuration).
 If using the Fargate launch type, this parameter is optional.
 If using the EC2 launch type, you must specify either a task-level memory value or a container-level memory value. If you specify both a container-level ``memory`` and ``memoryReservation`` value, ``memory`` must be greater than ``memoryReservation``. If you specify ``memoryReservation``, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of ``memory`` is used.
 The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container, so you should not specify fewer than 6 MiB of memory for your containers.
 The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container, so you should not specify fewer than 4 MiB of memory for your containers.
* **MemoryReservation**: int: The soft limit (in MiB) of memory to reserve for the container. When system memory is under heavy contention, Docker attempts to keep the container memory to this soft limit. However, your container can consume more memory when it needs to, up to either the hard limit specified with the ``memory`` parameter (if applicable), or all of the available memory on the container instance, whichever comes first. This parameter maps to ``MemoryReservation`` in the docker container create command and the ``--memory-reservation`` option to docker run.
 If a task-level memory value is not specified, you must specify a non-zero integer for one or both of ``memory`` or ``memoryReservation`` in a container definition. If you specify both, ``memory`` must be greater than ``memoryReservation``. If you specify ``memoryReservation``, then that value is subtracted from the available memory resources for the container instance where the container is placed. Otherwise, the value of ``memory`` is used.
 For example, if your container normally uses 128 MiB of memory, but occasionally bursts to 256 MiB of memory for short periods of time, you can set a ``memoryReservation`` of 128 MiB, and a ``memory`` hard limit of 300 MiB. This configuration would allow the container to only reserve 128 MiB of memory from the remaining resources on the container instance, but also allow the container to consume more memory resources when needed.
 The Docker 20.10.0 or later daemon reserves a minimum of 6 MiB of memory for a container. So, don't specify less than 6 MiB of memory for your containers. 
 The Docker 19.03.13-ce or earlier daemon reserves a minimum of 4 MiB of memory for a container. So, don't specify less than 4 MiB of memory for your containers.
* **MountPoints**: [MountPoint](#mountpoint)[]: The mount points for data volumes in your container.
 This parameter maps to ``Volumes`` in the docker container create command and the ``--volume`` option to docker run.
 Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives.
* **Name**: string (Required): The name of a container. If you're linking multiple containers together in a task definition, the ``name`` of one container can be entered in the ``links`` of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to ``name`` in tthe docker container create command and the ``--name`` option to docker run.
* **PortMappings**: [PortMapping](#portmapping)[]: The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.
 For task definitions that use the ``awsvpc`` network mode, you should only specify the ``containerPort``. The ``hostPort`` can be left blank or it must be the same value as the ``containerPort``.
 Port mappings on Windows use the ``NetNAT`` gateway address rather than ``localhost``. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. 
 This parameter maps to ``PortBindings`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--publish`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). If the network mode of a task definition is set to ``none``, then you can't specify port mappings. If the network mode of a task definition is set to ``host``, then host ports must either be undefined or they must match the container port in the port mapping.
  After a task reaches the ``RUNNING`` status, manual and automatic host and container port assignments are visible in the *Network Bindings* section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the ``networkBindings`` section [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) responses.
* **Privileged**: bool: When this parameter is true, the container is given elevated privileges on the host container instance (similar to the ``root`` user). This parameter maps to ``Privileged`` in the docker container create command and the ``--privileged`` option to docker run
  This parameter is not supported for Windows containers or tasks run on FARGATElong.
* **PseudoTerminal**: bool: When this parameter is ``true``, a TTY is allocated. This parameter maps to ``Tty`` in tthe docker container create command and the ``--tty`` option to docker run.
* **ReadonlyRootFilesystem**: bool: When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ``ReadonlyRootfs`` in the docker container create command and the ``--read-only`` option to docker run.
  This parameter is not supported for Windows containers.
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials): The private repository authentication credentials to use.
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]: The type and amount of a resource to assign to a container. The only supported resource is a GPU.
* **RestartPolicy**: [RestartPolicy](#restartpolicy): The restart policy for a container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task. For more information, see [Restart individual containers in Amazon ECS tasks with container restart policies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/container-restart-policy.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Secrets**: [Secret](#secret)[]: The secrets to pass to the container. For more information, see [Specifying Sensitive Data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.
* **StartTimeout**: int: Time duration (in seconds) to wait before giving up on resolving dependencies for a container. For example, you specify two containers in a task definition with containerA having a dependency on containerB reaching a ``COMPLETE``, ``SUCCESS``, or ``HEALTHY`` status. If a ``startTimeout`` value is specified for containerB and it doesn't reach the desired status within that time then containerA gives up and not start. This results in the task transitioning to a ``STOPPED`` state.
  When the ``ECS_CONTAINER_START_TIMEOUT`` container agent configuration variable is used, it's enforced independently from this start timeout value.
  For tasks using the Fargate launch type, the task or service requires the following platforms:
  +  Linux platform version ``1.3.0`` or later.
  +  Windows platform version ``1.0.0`` or later.
  
 For tasks using the EC2 launch type, your container instances require at least version ``1.26.0`` of the container agent to use a container start timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version ``1.26.0-1`` of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
 The valid values for Fargate are 2-120 seconds.
* **StopTimeout**: int: Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
 For tasks using the Fargate launch type, the task or service requires the following platforms:
  +  Linux platform version ``1.3.0`` or later.
  +  Windows platform version ``1.0.0`` or later.
  
 The max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.
 For tasks that use the EC2 launch type, if the ``stopTimeout`` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable ``ECS_CONTAINER_STOP_TIMEOUT`` is used. If neither the ``stopTimeout`` parameter or the ``ECS_CONTAINER_STOP_TIMEOUT`` agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
 The valid values are 2-120 seconds.
* **SystemControls**: [SystemControl](#systemcontrol)[]: A list of namespaced kernel parameters to set in the container. This parameter maps to ``Sysctls`` in tthe docker container create command and the ``--sysctl`` option to docker run. For example, you can configure ``net.ipv4.tcp_keepalive_time`` setting to maintain longer lived connections.
* **Ulimits**: [Ulimit](#ulimit)[]: A list of ``ulimits`` to set in the container. This parameter maps to ``Ulimits`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--ulimit`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). Valid naming values are displayed in the [Ulimit](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_Ulimit.html) data type. This parameter requires version 1.18 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'`` 
  This parameter is not supported for Windows containers.
* **User**: string: The user to use inside the container. This parameter maps to ``User`` in the docker container create command and the ``--user`` option to docker run.
  When running tasks using the ``host`` network mode, don't run containers using the root user (UID 0). We recommend using a non-root user for better security.
  You can specify the ``user`` using the following formats. If specifying a UID or GID, you must specify it as a positive integer.
  +   ``user`` 
  +   ``user:group`` 
  +   ``uid`` 
  +   ``uid:gid`` 
  +   ``user:gid`` 
  +   ``uid:group`` 
  
  This parameter is not supported for Windows containers.
* **VolumesFrom**: [VolumeFrom](#volumefrom)[]: Data volumes to mount from another container. This parameter maps to ``VolumesFrom`` in tthe docker container create command and the ``--volumes-from`` option to docker run.
* **WorkingDirectory**: string: The working directory to run commands inside the container in. This parameter maps to ``WorkingDir`` in the docker container create command and the ``--workdir`` option to docker run.

## ContainerDependency
### Properties
* **Condition**: string: The dependency condition of the container. The following are the available conditions and their behavior:
  +   ``START`` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
  +   ``COMPLETE`` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
  +   ``SUCCESS`` - This condition is the same as ``COMPLETE``, but it also requires that the container exits with a ``zero`` status. This condition can't be set on an essential container.
  +   ``HEALTHY`` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
* **ContainerName**: string: The name of a container.

## DeploymentAlarms
### Properties
* **AlarmNames**: string[] (Required): One or more CloudWatch alarm names. Use a "," to separate the alarms.
* **Enable**: bool (Required): Determines whether to use the CloudWatch alarm option in the service deployment process.
* **Rollback**: bool (Required): Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.

## DeploymentCircuitBreaker
### Properties
* **Enable**: bool (Required): Determines whether to use the deployment circuit breaker logic for the service.
* **Rollback**: bool (Required): Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.

## DeploymentConfiguration
### Properties
* **Alarms**: [DeploymentAlarms](#deploymentalarms): Information about the CloudWatch alarms.
* **DeploymentCircuitBreaker**: [DeploymentCircuitBreaker](#deploymentcircuitbreaker): The deployment circuit breaker can only be used for services using the rolling update (``ECS``) deployment type.
  The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*
* **MaximumPercent**: int: If a service is using the rolling update (``ECS``) deployment type, the ``maximumPercent`` parameter represents an upper limit on the number of your service's tasks that are allowed in the ``RUNNING`` or ``PENDING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service is using the ``REPLICA`` service scheduler and has a ``desiredCount`` of four tasks and a ``maximumPercent`` value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default ``maximumPercent`` value for a service using the ``REPLICA`` service scheduler is 200%.
 If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and tasks in the service use the EC2 launch type, the *maximum percent* value is set to the default value. The *maximum percent* value is used to define the upper limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
  You can't specify a custom ``maximumPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
  If the tasks in the service use the Fargate launch type, the maximum percent value is not used, although it is returned when describing your service.
* **MinimumHealthyPercent**: int: If a service is using the rolling update (``ECS``) deployment type, the ``minimumHealthyPercent`` represents a lower limit on the number of your service's tasks that must remain in the ``RUNNING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a ``desiredCount`` of four tasks and a ``minimumHealthyPercent`` of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks. 
 For services that *do not* use a load balancer, the following should be noted:
  +  A service is considered healthy if all essential containers within the tasks in the service pass their health checks.
  +  If a task has no essential containers with a health check defined, the service scheduler will wait for 40 seconds after a task reaches a ``RUNNING`` state before the task is counted towards the minimum healthy percent total.
  +  If a task has one or more essential containers with a health check defined, the service scheduler will wait for the task to reach a healthy status before counting it towards the minimum healthy percent total. A task is considered healthy when all essential containers within the task have passed their health checks. The amount of time the service scheduler can wait for is determined by the container health check settings. 
  
 For services that *do* use a load balancer, the following should be noted:
  +  If a task has no essential containers with a health check defined, the service scheduler will wait for the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
  +  If a task has an essential container with a health check defined, the service scheduler will wait for both the task to reach a healthy status and the load balancer target group health check to return a healthy status before counting the task towards the minimum healthy percent total.
  
 The default value for a replica service for ``minimumHealthyPercent`` is 100%. The default ``minimumHealthyPercent`` value for a service using the ``DAEMON`` service schedule is 0% for the CLI, the AWS SDKs, and the APIs and 50% for the AWS Management Console.
 The minimum number of healthy tasks during a deployment is the ``desiredCount`` multiplied by the ``minimumHealthyPercent``/100, rounded up to the nearest integer value.
 If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and is running tasks that use the EC2 launch type, the *minimum healthy percent* value is set to the default value. The *minimum healthy percent* value is used to define the lower limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
  You can't specify a custom ``minimumHealthyPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
  If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and is running tasks that use the Fargate launch type, the minimum healthy percent value is not used, although it is returned when describing your service.

## DeploymentController
### Properties
* **Type**: string: The deployment controller type to use. There are three deployment controller types available:
  + ECS The rolling update (ECS) deployment type involves replacing the current running version of the container with the latest version. The number of containers Amazon ECS adds or removes from the service during a rolling update is controlled by adjusting the minimum and maximum number of healthy tasks allowed during a service deployment, as specified in the DeploymentConfiguration. + CODE_DEPLOY The blue/green (CODE_DEPLOY) deployment type uses the blue/green deployment model powered by , which allows you to verify a new deployment of a service before sending production traffic to it. + EXTERNAL The external (EXTERNAL) deployment type enables you to use any third-party deployment controller for full control over the deployment process for an Amazon ECS service.

## Device
### Properties
* **ContainerPath**: string: The path inside the container at which to expose the host device.
* **HostPath**: string: The path for the device on the host container instance.
* **Permissions**: string[]: The explicit permissions to provide to the container for the device. By default, the container has permissions for ``read``, ``write``, and ``mknod`` for the device.

## DockerVolumeConfiguration
### Properties
* **Autoprovision**: bool: If this value is ``true``, the Docker volume is created if it doesn't already exist.
  This field is only used if the ``scope`` is ``shared``.
* **Driver**: string: The Docker volume driver to use. The driver value must match the driver name provided by Docker because it is used for task placement. If the driver was installed using the Docker plugin CLI, use ``docker plugin ls`` to retrieve the driver name from your container instance. If the driver was installed using another method, use Docker plugin discovery to retrieve the driver name. This parameter maps to ``Driver`` in the docker container create command and the ``xxdriver`` option to docker volume create.
* **DriverOpts**: [TaskDefinition_DriverOpts](#taskdefinitiondriveropts): A map of Docker driver-specific options passed through. This parameter maps to ``DriverOpts`` in the docker create-volume command and the ``xxopt`` option to docker volume create.
* **Labels**: [TaskDefinition_Labels](#taskdefinitionlabels): Custom metadata to add to your Docker volume. This parameter maps to ``Labels`` in the docker container create command and the ``xxlabel`` option to docker volume create.
* **Scope**: string: The scope for the Docker volume that determines its lifecycle. Docker volumes that are scoped to a ``task`` are automatically provisioned when the task starts and destroyed when the task stops. Docker volumes that are scoped as ``shared`` persist after the task stops.

## EBSTagSpecification
### Properties
* **PropagateTags**: string: Determines whether to propagate the tags from the task definition to  the Amazon EBS volume. Tags can only propagate to a ``SERVICE`` specified in  ``ServiceVolumeConfiguration``. If no value is specified, the tags aren't  propagated.
* **ResourceType**: string (Required): The type of volume resource.
* **Tags**: [Tag](#tag)[]: The tags applied to this Amazon EBS volume. ``AmazonECSCreated`` and ``AmazonECSManaged`` are reserved tags that can't be used.

## EFSVolumeConfiguration
### Properties
* **AuthorizationConfig**: [AuthorizationConfig](#authorizationconfig): The authorization configuration details for the Amazon EFS file system.
* **FilesystemId**: string (Required): The Amazon EFS file system ID to use.
* **RootDirectory**: string: The directory within the Amazon EFS file system to mount as the root directory inside the host. If this parameter is omitted, the root of the Amazon EFS volume will be used. Specifying ``/`` will have the same effect as omitting this parameter.
  If an EFS access point is specified in the ``authorizationConfig``, the root directory parameter must either be omitted or set to ``/`` which will enforce the path set on the EFS access point.
* **TransitEncryption**: string: Determines whether to use encryption for Amazon EFS data in transit between the Amazon ECS host and the Amazon EFS server. Transit encryption must be turned on if Amazon EFS IAM authorization is used. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Encrypting data in transit](https://docs.aws.amazon.com/efs/latest/ug/encryption-in-transit.html) in the *Amazon Elastic File System User Guide*.
* **TransitEncryptionPort**: int: The port to use when sending encrypted data between the Amazon ECS host and the Amazon EFS server. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon EFS mount helper uses. For more information, see [EFS mount helper](https://docs.aws.amazon.com/efs/latest/ug/efs-mount-helper.html) in the *Amazon Elastic File System User Guide*.

## EnvironmentFile
### Properties
* **Type**: string: The file type to use. Environment files are objects in Amazon S3. The only supported value is ``s3``.
* **Value**: string: The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.

## EphemeralStorage
### Properties
* **SizeInGiB**: int: The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is ``20`` GiB and the maximum supported value is ``200`` GiB.

## ExecuteCommandConfiguration
### Properties
* **KmsKeyId**: string: Specify an KMSlong key ID to encrypt the data between the local client and the container.
* **LogConfiguration**: [ExecuteCommandLogConfiguration](#executecommandlogconfiguration): The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When ``logging=OVERRIDE`` is specified, a ``logConfiguration`` must be provided.
* **Logging**: string: The log setting to use for redirecting logs for your execute command results. The following log settings are available.
  +   ``NONE``: The execute command session is not logged.
  +   ``DEFAULT``: The ``awslogs`` configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no ``awslogs`` log driver is configured in the task definition, the output won't be logged.
  +   ``OVERRIDE``: Specify the logging details as a part of ``logConfiguration``. If the ``OVERRIDE`` logging option is specified, the ``logConfiguration`` is required.

## ExecuteCommandLogConfiguration
### Properties
* **CloudWatchEncryptionEnabled**: bool: Determines whether to use encryption on the CloudWatch logs. If not specified, encryption will be off.
* **CloudWatchLogGroupName**: string: The name of the CloudWatch log group to send logs to.
  The CloudWatch log group must already be created.
* **S3BucketName**: string: The name of the S3 bucket to send logs to.
  The S3 bucket must already be created.
* **S3EncryptionEnabled**: bool: Determines whether to use encryption on the S3 logs. If not specified, encryption is not used.
* **S3KeyPrefix**: string: An optional folder in the S3 bucket to place logs in.

## FirelensConfiguration
### Properties
* **Options**: [TaskDefinition_Options](#taskdefinitionoptions): The options to use when configuring the log router. This field is optional and can be used to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event.
  If specified, valid option keys are:
  +   ``enable-ecs-log-metadata``, which can be ``true`` or ``false`` 
  +   ``config-file-type``, which can be ``s3`` or ``file`` 
  +   ``config-file-value``, which is either an S3 ARN or a file path
* **Type**: string: The log router to use. The valid values are ``fluentd`` or ``fluentbit``.

## FSxAuthorizationConfig
### Properties
* **CredentialsParameter**: string (Required): The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an ASMlong secret or SSM Parameter Store parameter. The ARN refers to the stored credentials.
* **Domain**: string (Required): A fully qualified domain name hosted by an [](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.

## FSxWindowsFileServerVolumeConfiguration
### Properties
* **AuthorizationConfig**: [FSxAuthorizationConfig](#fsxauthorizationconfig): The authorization configuration details for the Amazon FSx for Windows File Server file system.
* **FileSystemId**: string (Required): The Amazon FSx for Windows File Server file system ID to use.
* **RootDirectory**: string (Required): The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.

## HealthCheck
### Properties
* **Command**: string[]: A string array representing the command that the container runs to determine if it is healthy. The string array must start with ``CMD`` to run the command arguments directly, or ``CMD-SHELL`` to run the command with the container's default shell. 
  When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.
  ``[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`` 
 You don't include the double quotes and brackets when you use the AWS Management Console.
  ``CMD-SHELL, curl -f http://localhost/ || exit 1`` 
 An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see ``HealthCheck`` in tthe docker container create command
* **Interval**: int: The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds.
* **Retries**: int: The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3.
* **StartPeriod**: int: The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the ``startPeriod`` is off.
  If a health check succeeds within the ``startPeriod``, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
* **Timeout**: int: The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5.

## HostEntry
### Properties
* **Hostname**: string: The hostname to use in the ``/etc/hosts`` entry.
* **IpAddress**: string: The IP address to use in the ``/etc/hosts`` entry.

## HostVolumeProperties
### Properties
* **SourcePath**: string: When the ``host`` parameter is used, specify a ``sourcePath`` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the ``host`` parameter contains a ``sourcePath`` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the ``sourcePath`` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
 If you're using the Fargate launch type, the ``sourcePath`` parameter is not supported.

## InferenceAccelerator
### Properties
* **DeviceName**: string: The Elastic Inference accelerator device name. The ``deviceName`` must also be referenced in a container definition as a [ResourceRequirement](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_ResourceRequirement.html).
* **DeviceType**: string: The Elastic Inference accelerator type to use.

## KernelCapabilities
### Properties
* **Add**: string[]: The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to ``CapAdd`` in the docker container create command and the ``--cap-add`` option to docker run.
  Tasks launched on FARGATElong only support adding the ``SYS_PTRACE`` kernel capability.
  Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
* **Drop**: string[]: The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to ``CapDrop`` in the docker container create command and the ``--cap-drop`` option to docker run.
 Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``

## KeyValuePair
### Properties
* **Name**: string: The name of the key-value pair. For environment variables, this is the name of the environment variable.
* **Value**: string: The value of the key-value pair. For environment variables, this is the value of the environment variable.

## LinuxParameters
### Properties
* **Capabilities**: [KernelCapabilities](#kernelcapabilities): The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
  For tasks that use the Fargate launch type, ``capabilities`` is supported for all platform versions but the ``add`` parameter is only supported if using platform version 1.4.0 or later.
* **Devices**: [Device](#device)[]: Any host devices to expose to the container. This parameter maps to ``Devices`` in tthe docker container create command and the ``--device`` option to docker run.
  If you're using tasks that use the Fargate launch type, the ``devices`` parameter isn't supported.
* **InitProcessEnabled**: bool: Run an ``init`` process inside the container that forwards signals and reaps processes. This parameter maps to the ``--init`` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **MaxSwap**: int: The total amount of swap memory (in MiB) a container can use. This parameter will be translated to the ``--memory-swap`` option to docker run where the value would be the sum of the container memory plus the ``maxSwap`` value.
 If a ``maxSwap`` value of ``0`` is specified, the container will not use swap. Accepted values are ``0`` or any positive integer. If the ``maxSwap`` parameter is omitted, the container will use the swap configuration for the container instance it is running on. A ``maxSwap`` value must be set for the ``swappiness`` parameter to be used.
  If you're using tasks that use the Fargate launch type, the ``maxSwap`` parameter isn't supported.
 If you're using tasks on Amazon Linux 2023 the ``swappiness`` parameter isn't supported.
* **SharedMemorySize**: int: The value for the size (in MiB) of the ``/dev/shm`` volume. This parameter maps to the ``--shm-size`` option to docker run.
  If you are using tasks that use the Fargate launch type, the ``sharedMemorySize`` parameter is not supported.
* **Swappiness**: int: This allows you to tune a container's memory swappiness behavior. A ``swappiness`` value of ``0`` will cause swapping to not happen unless absolutely necessary. A ``swappiness`` value of ``100`` will cause pages to be swapped very aggressively. Accepted values are whole numbers between ``0`` and ``100``. If the ``swappiness`` parameter is not specified, a default value of ``60`` is used. If a value is not specified for ``maxSwap`` then this parameter is ignored. This parameter maps to the ``--memory-swappiness`` option to docker run.
  If you're using tasks that use the Fargate launch type, the ``swappiness`` parameter isn't supported.
 If you're using tasks on Amazon Linux 2023 the ``swappiness`` parameter isn't supported.
* **Tmpfs**: [Tmpfs](#tmpfs)[]: The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the ``--tmpfs`` option to docker run.
  If you're using tasks that use the Fargate launch type, the ``tmpfs`` parameter isn't supported.

## LoadBalancer
### Properties
* **ContainerName**: string: The name of the container (as it appears in a container definition) to associate with the load balancer.
 You need to specify the container name when configuring the target group for an Amazon ECS load balancer.
* **ContainerPort**: int: The port on the container to associate with the load balancer. This port must correspond to a ``containerPort`` in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they're launched on must allow ingress traffic on the ``hostPort`` of the port mapping.
* **LoadBalancerName**: string: The name of the load balancer to associate with the Amazon ECS service or task set.
 If you are using an Application Load Balancer or a Network Load Balancer the load balancer name parameter should be omitted.
* **TargetGroupArn**: string: The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set.
 A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. 
 For services using the ``ECS`` deployment controller, you can specify one or multiple target groups. For more information, see [Registering multiple target groups with a service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html) in the *Amazon Elastic Container Service Developer Guide*.
 For services using the ``CODE_DEPLOY`` deployment controller, you're required to define two target groups for the load balancer. For more information, see [Blue/green deployment with CodeDeploy](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html) in the *Amazon Elastic Container Service Developer Guide*.
  If your service's task definition uses the ``awsvpc`` network mode, you must choose ``ip`` as the target type, not ``instance``. Do this when creating your target groups because tasks that use the ``awsvpc`` network mode are associated with an elastic network interface, not an Amazon EC2 instance. This network mode is required for the Fargate launch type.

## LoadBalancer
### Properties
* **ContainerName**: string: The name of the container (as it appears in a container definition) to associate with the load balancer.
* **ContainerPort**: int: The port on the container to associate with the load balancer. This port must correspond to a containerPort in the task definition the tasks in the service are using. For tasks that use the EC2 launch type, the container instance they are launched on must allow ingress traffic on the hostPort of the port mapping.
* **TargetGroupArn**: string: The full Amazon Resource Name (ARN) of the Elastic Load Balancing target group or groups associated with a service or task set. A target group ARN is only specified when using an Application Load Balancer or Network Load Balancer. If you are using a Classic Load Balancer this should be omitted. For services using the ECS deployment controller, you can specify one or multiple target groups. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/register-multiple-targetgroups.html in the Amazon Elastic Container Service Developer Guide. For services using the CODE_DEPLOY deployment controller, you are required to define two target groups for the load balancer. For more information, see https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-bluegreen.html in the Amazon Elastic Container Service Developer Guide. If your service's task definition uses the awsvpc network mode (which is required for the Fargate launch type), you must choose ip as the target type, not instance, when creating your target groups because tasks that use the awsvpc network mode are associated with an elastic network interface, not an Amazon EC2 instance.

## LogConfiguration
### Properties
* **LogDriver**: string: The log driver to use for the container.
 For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
 For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``, ``syslog``, ``splunk``, and ``awsfirelens``.
 For more information about using the ``awslogs`` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
 For more information about using the ``awsfirelens`` log driver, see [Send Amazon ECS logs to an service or Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
  If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
* **Options**: [Service_Options](#serviceoptions): The configuration options to send to the log driver.
 The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
  + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using the Fargate launch type.Optional for the EC2 launch type, required for the Fargate launch type. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to CloudWatch Logs. The delivery mode you choose affects application availability when the flow of logs from container to CloudWatch is interrupted. If you use the blocking mode and the flow of logs to CloudWatch is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent to CloudWatch. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. + max-buffer-size Required: No Default value: 1m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. 
 To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
 When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
 Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
 When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
  When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``.
 When you export logs to Amazon S3, you can specify the bucket using the ``bucket`` option. You can also specify ``region``, ``total_file_size``, ``upload_timeout``, and ``use_put_object`` as options.
 This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **SecretOptions**: [Secret](#secret)[]: The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.

## LogConfiguration
### Properties
* **LogDriver**: string (Required): The log driver to use for the container.
 For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
 For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``, ``syslog``, ``splunk``, and ``awsfirelens``.
 For more information about using the ``awslogs`` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
 For more information about using the ``awsfirelens`` log driver, see [Send Amazon ECS logs to an service or Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
  If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
* **Options**: [TaskDefinition_Options](#taskdefinitionoptions): The configuration options to send to the log driver. This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **SecretOptions**: [Secret](#secret)[]: The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.

## ManagedScaling
### Properties
* **InstanceWarmupPeriod**: int
* **MaximumScalingStepSize**: int
* **MinimumScalingStepSize**: int
* **Status**: string
* **TargetCapacity**: int

## ManagedStorageConfiguration
### Properties
* **FargateEphemeralStorageKmsKeyId**: string: Specify the KMSlong key ID for the Fargate ephemeral storage.
* **KmsKeyId**: string: Specify a KMSlong key ID to encrypt the managed storage.

## MountPoint
### Properties
* **ContainerPath**: string: The path on the container to mount the host volume at.
* **ReadOnly**: bool: If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
* **SourceVolume**: string: The name of the volume to mount. Must be a volume name referenced in the ``name`` parameter of task definition ``volume``.

## NetworkConfiguration
### Properties
* **AwsvpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration): The VPC subnets and security groups that are associated with a task.
  All specified subnets and security groups must be from the same VPC.

## NetworkConfiguration
### Properties
* **AwsVpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## PlacementConstraint
### Properties
* **Expression**: string: A cluster query language expression to apply to the constraint. The expression can have a maximum length of 2000 characters. You can't specify an expression if the constraint type is ``distinctInstance``. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Type**: string (Required): The type of constraint. Use ``distinctInstance`` to ensure that each task in a particular group is running on a different container instance. Use ``memberOf`` to restrict the selection to a group of valid candidates.

## PlacementStrategy
### Properties
* **Field**: string: The field to apply the placement strategy against. For the ``spread`` placement strategy, valid values are ``instanceId`` (or ``host``, which has the same effect), or any platform or custom attribute that's applied to a container instance, such as ``attribute:ecs.availability-zone``. For the ``binpack`` placement strategy, valid values are ``cpu`` and ``memory``. For the ``random`` placement strategy, this field is not used.
* **Type**: string (Required): The type of placement strategy. The ``random`` placement strategy randomly places tasks on available candidates. The ``spread`` placement strategy spreads placement across available candidates evenly based on the ``field`` parameter. The ``binpack`` strategy places tasks on available candidates that have the least available amount of the resource that's specified with the ``field`` parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory but still enough to run the task.

## PortMapping
### Properties
* **AppProtocol**: string: The application protocol that's used for the port mapping. This parameter only applies to Service Connect. We recommend that you set this parameter to be consistent with the protocol that your application uses. If you set this parameter, Amazon ECS adds protocol-specific connection handling to the Service Connect proxy. If you set this parameter, Amazon ECS adds protocol-specific telemetry in the Amazon ECS console and CloudWatch.
 If you don't set a value for this parameter, then TCP is used. However, Amazon ECS doesn't add protocol-specific telemetry for TCP.
  ``appProtocol`` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.
 Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **ContainerPort**: int: The port number on the container that's bound to the user-specified or automatically assigned host port.
 If you use containers in a task with the ``awsvpc`` or ``host`` network mode, specify the exposed ports using ``containerPort``.
 If you use containers in a task with the ``bridge`` network mode and you specify a container port and not a host port, your container automatically receives a host port in the ephemeral port range. For more information, see ``hostPort``. Port mappings that are automatically assigned in this way do not count toward the 100 reserved ports limit of a container instance.
* **ContainerPortRange**: string: The port number range on the container that's bound to the dynamically mapped host port range. 
 The following rules apply when you specify a ``containerPortRange``:
  +  You must use either the ``bridge`` network mode or the ``awsvpc`` network mode.
  +  This parameter is available for both the EC2 and FARGATElong launch types.
  +  This parameter is available for both the Linux and Windows operating systems.
  +  The container instance must have at least version 1.67.0 of the container agent and at least version 1.67.0-1 of the ``ecs-init`` package 
  +  You can specify a maximum of 100 port ranges per container.
  +  You do not specify a ``hostPortRange``. The value of the ``hostPortRange`` is set as follows:
  +  For containers in a task with the ``awsvpc`` network mode, the ``hostPortRange`` is set to the same value as the ``containerPortRange``. This is a static mapping strategy.
  +  For containers in a task with the ``bridge`` network mode, the Amazon ECS agent finds open host ports from the default ephemeral range and passes it to docker to bind them to the container ports.
  
  +  The ``containerPortRange`` valid values are between 1 and 65535.
  +  A port can only be included in one port mapping per container.
  +  You cannot specify overlapping port ranges.
  +  The first port in the range must be less than last port in the range.
  +  Docker recommends that you turn off the docker-proxy in the Docker daemon config file when you have a large number of ports.
 For more information, see [Issue #11185](https://docs.aws.amazon.com/https://github.com/moby/moby/issues/11185) on the Github website.
 For information about how to turn off the docker-proxy in the Docker daemon config file, see [Docker daemon](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/bootstrap_container_instance.html#bootstrap_docker_daemon) in the *Amazon ECS Developer Guide*.
  
 You can call [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) to view the ``hostPortRange`` which are the host ports that are bound to the container ports.
* **HostPort**: int: The port number on the container instance to reserve for your container.
 If you specify a ``containerPortRange``, leave this field empty and the value of the ``hostPort`` is set as follows:
  +  For containers in a task with the ``awsvpc`` network mode, the ``hostPort`` is set to the same value as the ``containerPort``. This is a static mapping strategy.
  +  For containers in a task with the ``bridge`` network mode, the Amazon ECS agent finds open ports on the host and automatically binds them to the container ports. This is a dynamic mapping strategy.
  
 If you use containers in a task with the ``awsvpc`` or ``host`` network mode, the ``hostPort`` can either be left blank or set to the same value as the ``containerPort``.
 If you use containers in a task with the ``bridge`` network mode, you can specify a non-reserved host port for your container port mapping, or you can omit the ``hostPort`` (or set it to ``0``) while specifying a ``containerPort`` and your container automatically receives a port in the ephemeral port range for your container instance operating system and Docker version.
 The default ephemeral port range for Docker version 1.6.0 and later is listed on the instance under ``/proc/sys/net/ipv4/ip_local_port_range``. If this kernel parameter is unavailable, the default ephemeral port range from 49153 through 65535 (Linux) or 49152 through 65535 (Windows) is used. Do not attempt to specify a host port in the ephemeral port range as these are reserved for automatic assignment. In general, ports below 32768 are outside of the ephemeral port range.
 The default reserved ports are 22 for SSH, the Docker ports 2375 and 2376, and the Amazon ECS container agent ports 51678-51680. Any host port that was previously specified in a running task is also reserved while the task is running. That is, after a task stops, the host port is released. The current reserved ports are displayed in the ``remainingResources`` of [DescribeContainerInstances](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeContainerInstances.html) output. A container instance can have up to 100 reserved ports at a time. This number includes the default reserved ports. Automatically assigned ports aren't included in the 100 reserved ports quota.
* **Name**: string: The name that's used for the port mapping. This parameter only applies to Service Connect. This parameter is the name that you use in the ``serviceConnectConfiguration`` of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
 For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Protocol**: string: The protocol used for the port mapping. Valid values are ``tcp`` and ``udp``. The default is ``tcp``. ``protocol`` is immutable in a Service Connect service. Updating this field requires a service deletion and redeployment.

## ProxyConfiguration
### Properties
* **ContainerName**: string (Required): The name of the container that will serve as the App Mesh proxy.
* **ProxyConfigurationProperties**: [KeyValuePair](#keyvaluepair)[]: The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.
  +   ``IgnoredUID`` - (Required) The user ID (UID) of the proxy container as defined by the ``user`` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If ``IgnoredGID`` is specified, this field can be empty.
  +   ``IgnoredGID`` - (Required) The group ID (GID) of the proxy container as defined by the ``user`` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If ``IgnoredUID`` is specified, this field can be empty.
  +   ``AppPorts`` - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the ``ProxyIngressPort`` and ``ProxyEgressPort``.
  +   ``ProxyIngressPort`` - (Required) Specifies the port that incoming traffic to the ``AppPorts`` is directed to.
  +   ``ProxyEgressPort`` - (Required) Specifies the port that outgoing traffic from the ``AppPorts`` is directed to.
  +   ``EgressIgnoredPorts`` - (Required) The egress traffic going to the specified ports is ignored and not redirected to the ``ProxyEgressPort``. It can be an empty list.
  +   ``EgressIgnoredIPs`` - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the ``ProxyEgressPort``. It can be an empty list.
* **Type**: string: The proxy type. The only supported value is ``APPMESH``.

## RepositoryCredentials
### Properties
* **CredentialsParameter**: string: The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
  When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.

## ResourceRequirement
### Properties
* **Type**: string (Required): The type of resource to assign to a container.
* **Value**: string (Required): The value for the specified resource type.
 When the type is ``GPU``, the value is the number of physical ``GPUs`` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on.
 When the type is ``InferenceAccelerator``, the ``value`` matches the ``deviceName`` for an [InferenceAccelerator](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html) specified in a task definition.

## RestartPolicy
### Properties
* **Enabled**: bool: Specifies whether a restart policy is enabled for the container.
* **IgnoredExitCodes**: int[]: A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes.
* **RestartAttemptPeriod**: int: A period of time (in seconds) that the container must run for before a restart can be attempted. A container can be restarted only once every ``restartAttemptPeriod`` seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum ``restartAttemptPeriod`` of 60 seconds and a maximum ``restartAttemptPeriod`` of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted.

## RuntimePlatform
### Properties
* **CpuArchitecture**: string: The CPU architecture.
 You can run your Linux tasks on an ARM-based platform by setting the value to ``ARM64``. This option is available for tasks that run on Linux Amazon EC2 instance or Linux containers on Fargate.
* **OperatingSystemFamily**: string: The operating system.

## Scale
### Properties
* **Unit**: string: The unit of measure for the scale value.
* **Value**: int: The value, specified as a percent total of a service's desiredCount, to scale the task set. Accepted values are numbers between 0 and 100.

## Secret
### Properties
* **Name**: string (Required): The name of the secret.
* **ValueFrom**: string (Required): The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
 For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
  If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.

## Secret
### Properties
* **Name**: string (Required): The name of the secret.
* **ValueFrom**: string (Required): The secret to expose to the container. The supported values are either the full ARN of the ASMlong secret or the full ARN of the parameter in the SSM Parameter Store.
 For information about the require IAMlong permissions, see [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-secrets.html#secrets-iam) (for Secrets Manager) or [Required IAM permissions for Amazon ECS secrets](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data-parameters.html) (for Systems Manager Parameter store) in the *Amazon Elastic Container Service Developer Guide*.
  If the SSM Parameter Store parameter exists in the same Region as the task you're launching, then you can use either the full ARN or name of the parameter. If the parameter exists in a different Region, then the full ARN must be specified.

## Service_Options
### Properties

## ServiceConnectClientAlias
### Properties
* **DnsName**: string: The ``dnsName`` is the name that you use in the applications of client tasks to connect to this service. The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.
 If this parameter isn't specified, the default value of ``discoveryName.namespace`` is used. If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
 To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are ``database``, ``db``, or the lowercase name of a database, such as ``mysql`` or ``redis``. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Port**: int (Required): The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
 To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.

## ServiceConnectConfiguration
### Properties
* **Enabled**: bool (Required): Specifies whether to use Service Connect with this service.
* **LogConfiguration**: [LogConfiguration](#logconfiguration): The log configuration for the container. This parameter maps to ``LogConfig`` in the docker container create command and the ``--log-driver`` option to docker run.
 By default, containers use the same logging driver that the Docker daemon uses. However, the container might use a different logging driver than the Docker daemon by specifying a log driver configuration in the container definition.
 Understand the following when specifying a log configuration for your containers.
  +  Amazon ECS currently supports a subset of the logging drivers available to the Docker daemon. Additional log drivers may be available in future releases of the Amazon ECS container agent.
 For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
 For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``,``syslog``, ``splunk``, and ``awsfirelens``.
  +  This parameter requires version 1.18 of the Docker Remote API or greater on your container instance.
  +  For tasks that are hosted on Amazon EC2 instances, the Amazon ECS container agent must register the available logging drivers with the ``ECS_AVAILABLE_LOGGING_DRIVERS`` environment variable before containers placed on that instance can use these log configuration options. For more information, see [Amazon ECS container agent configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-config.html) in the *Amazon Elastic Container Service Developer Guide*.
  +  For tasks that are on FARGATElong, because you don't have access to the underlying infrastructure your tasks are hosted on, any additional software needed must be installed outside of the task. For example, the Fluentd output aggregators or a remote host running Logstash to send Gelf logs to.
* **Namespace**: string: The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace for use with Service Connect. The namespace must be in the same AWS Region as the Amazon ECS service and cluster. The type of namespace doesn't affect Service Connect. For more information about CMAPlong, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Developer Guide*.
* **Services**: [ServiceConnectService](#serviceconnectservice)[]: The list of Service Connect service objects. These are names and aliases (also known as endpoints) that are used by other Amazon ECS services to connect to this service. 
 This field is not required for a "client" Amazon ECS service that's a member of a namespace only to connect to other services within the namespace. An example of this would be a frontend application that accepts incoming requests from either a load balancer that's attached to the service or by other means.
 An object selects a port from the task definition, assigns a name for the CMAPlong service, and a list of aliases (endpoints) and ports for client applications to refer to this service.

## ServiceConnectDefaults
### Properties
* **Namespace**: string: The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace that's used when you create a service and don't specify a Service Connect configuration. The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include hyphens (-), tilde (~), greater than (>), less than (<), or slash (/).
 If you enter an existing namespace name or ARN, then that namespace will be used. Any namespace type is supported. The namespace must be in this account and this AWS Region.
 If you enter a new name, a CMAPlong namespace will be created. Amazon ECS creates a CMAP namespace with the "API calls" method of instance discovery only. This instance discovery method is the "HTTP" namespace type in the CLIlong. Other types of instance discovery aren't used by Service Connect.
 If you update the cluster with an empty string ``""`` for the namespace name, the cluster configuration for Service Connect is removed. Note that the namespace will remain in CMAP and must be deleted separately.
 For more information about CMAPlong, see [Working with Services](https://docs.aws.amazon.com/cloud-map/latest/dg/working-with-services.html) in the *Developer Guide*.

## ServiceConnectService
### Properties
* **ClientAliases**: [ServiceConnectClientAlias](#serviceconnectclientalias)[]: The list of client aliases for this Service Connect service. You use these to assign names that can be used by client applications. The maximum number of client aliases that you can have in this list is 1.
 Each alias ("endpoint") is a fully-qualified name and port number that other Amazon ECS tasks ("clients") can use to connect to this service.
 Each name and port mapping must be unique within the namespace.
 For each ``ServiceConnectService``, you must provide at least one ``clientAlias`` with one ``port``.
* **DiscoveryName**: string: The ``discoveryName`` is the name of the new CMAP service that Amazon ECS creates for this Amazon ECS service. This must be unique within the CMAP namespace. The name can contain up to 64 characters. The name can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
 If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
* **IngressPortOverride**: int: The port number for the Service Connect proxy to listen on.
 Use the value of this field to bypass the proxy for traffic on the port number specified in the named ``portMapping`` in the task definition of this application, and then use it in your VPC security groups to allow traffic into the proxy for this Amazon ECS service.
 In ``awsvpc`` mode and Fargate, the default value is the container port number. The container port number is in the ``portMapping`` in the task definition. In bridge mode, the default value is the ephemeral port of the Service Connect proxy.
* **PortName**: string (Required): The ``portName`` must match the name of one of the ``portMappings`` from all the containers in the task definition of this Amazon ECS service.
* **Timeout**: [TimeoutConfiguration](#timeoutconfiguration): A reference to an object that represents the configured timeouts for Service Connect.
* **Tls**: [ServiceConnectTlsConfiguration](#serviceconnecttlsconfiguration): A reference to an object that represents a Transport Layer Security (TLS) configuration.

## ServiceConnectTlsCertificateAuthority
### Properties
* **AwsPcaAuthorityArn**: string: The ARN of the AWS Private Certificate Authority certificate.

## ServiceConnectTlsConfiguration
### Properties
* **IssuerCertificateAuthority**: [ServiceConnectTlsCertificateAuthority](#serviceconnecttlscertificateauthority) (Required): The signer certificate authority.
* **KmsKey**: string: The AWS Key Management Service key.
* **RoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that's associated with the Service Connect TLS.

## ServiceManagedEBSVolumeConfiguration
### Properties
* **Encrypted**: bool: Indicates whether the volume should be encrypted. If no value is specified, encryption is turned on by default. This parameter maps 1:1 with the ``Encrypted`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **FilesystemType**: string: The Linux filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the task will fail to start.
 The available filesystem types are  ``ext3``, ``ext4``, and ``xfs``. If no value is specified, the ``xfs`` filesystem type is used by default.
* **Iops**: int: The number of I/O operations per second (IOPS). For ``gp3``, ``io1``, and ``io2`` volumes, this represents the number of IOPS that are provisioned for the volume. For ``gp2`` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
 The following are the supported values for each volume type.
  +   ``gp3``: 3,000 - 16,000 IOPS
  +   ``io1``: 100 - 64,000 IOPS
  +   ``io2``: 100 - 256,000 IOPS
  
 This parameter is required for ``io1`` and ``io2`` volume types. The default for ``gp3`` volumes is ``3,000 IOPS``. This parameter is not supported for ``st1``, ``sc1``, or ``standard`` volume types.
 This parameter maps 1:1 with the ``Iops`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) identifier of the AWS Key Management Service key to use for Amazon EBS encryption. When encryption is turned on and no AWS Key Management Service key is specified, the default AWS managed key for Amazon EBS volumes is used. This parameter maps 1:1 with the ``KmsKeyId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
   AWS authenticates the AWS Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
* **RoleArn**: string (Required): The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your AWS infrastructure. We recommend using the Amazon ECS-managed ``AmazonECSInfrastructureRolePolicyForVolumes`` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
* **SizeInGiB**: int: The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the ``Size`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
 The following are the supported volume size values for each volume type.
  +   ``gp2`` and ``gp3``: 1-16,384
  +   ``io1`` and ``io2``: 4-16,384
  +   ``st1`` and ``sc1``: 125-16,384
  +   ``standard``: 1-1,024
* **SnapshotId**: string: The snapshot that Amazon ECS uses to create the volume. You must specify either a snapshot ID or a volume size. This parameter maps 1:1 with the ``SnapshotId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **TagSpecifications**: [EBSTagSpecification](#ebstagspecification)[]: The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the ``TagSpecifications.N`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **Throughput**: int: The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the ``Throughput`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
  This parameter is only supported for the ``gp3`` volume type.
* **VolumeType**: string: The volume type. This parameter maps 1:1 with the ``VolumeType`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volume-types.html) in the *Amazon EC2 User Guide*.
 The following are the supported volume types.
  +  General Purpose SSD: ``gp2``|``gp3`` 
  +  Provisioned IOPS SSD: ``io1``|``io2`` 
  +  Throughput Optimized HDD: ``st1`` 
  +  Cold HDD: ``sc1`` 
  +  Magnetic: ``standard`` 
  The magnetic volume type is not supported on Fargate.

## ServiceRegistry
### Properties
* **ContainerName**: string: The container name value to be used for your service discovery service. It's already specified in the task definition. If the task definition that your service task specifies uses the ``bridge`` or ``host`` network mode, you must specify a ``containerName`` and ``containerPort`` combination from the task definition. If the task definition that your service task specifies uses the ``awsvpc`` network mode and a type SRV DNS record is used, you must specify either a ``containerName`` and ``containerPort`` combination or a ``port`` value. However, you can't specify both.
* **ContainerPort**: int: The port value to be used for your service discovery service. It's already specified in the task definition. If the task definition your service task specifies uses the ``bridge`` or ``host`` network mode, you must specify a ``containerName`` and ``containerPort`` combination from the task definition. If the task definition your service task specifies uses the ``awsvpc`` network mode and a type SRV DNS record is used, you must specify either a ``containerName`` and ``containerPort`` combination or a ``port`` value. However, you can't specify both.
* **Port**: int: The port value used if your service discovery service specified an SRV record. This field might be used if both the ``awsvpc`` network mode and SRV records are used.
* **RegistryArn**: string: The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is CMAP. For more information, see [CreateService](https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html).

## ServiceRegistry
### Properties
* **ContainerName**: string: The container name value, already specified in the task definition, to be used for your service discovery service. If the task definition that your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition that your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
* **ContainerPort**: int: The port value, already specified in the task definition, to be used for your service discovery service. If the task definition your service task specifies uses the bridge or host network mode, you must specify a containerName and containerPort combination from the task definition. If the task definition your service task specifies uses the awsvpc network mode and a type SRV DNS record is used, you must specify either a containerName and containerPort combination or a port value, but not both.
* **Port**: int: The port value used if your service discovery service specified an SRV record. This field may be used if both the awsvpc network mode and SRV records are used.
* **RegistryArn**: string: The Amazon Resource Name (ARN) of the service registry. The currently supported service registry is AWS Cloud Map. For more information, see https://docs.aws.amazon.com/cloud-map/latest/api/API_CreateService.html

## ServiceVolumeConfiguration
### Properties
* **ManagedEBSVolume**: [ServiceManagedEBSVolumeConfiguration](#servicemanagedebsvolumeconfiguration): The configuration for the Amazon EBS volume that Amazon ECS creates and manages on your behalf. These settings are used to create each Amazon EBS volume, with one volume created for each task in the service. The Amazon EBS volumes are visible in your account in the Amazon EC2 console once they are created.
* **Name**: string (Required): The name of the volume. This value must match the volume name from the ``Volume`` object in the task definition.

## SystemControl
### Properties
* **Namespace**: string: The namespaced kernel parameter to set a ``value`` for.
* **Value**: string: The namespaced kernel parameter to set a ``value`` for.
 Valid IPC namespace values: ``"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"``, and ``Sysctls`` that start with ``"fs.mqueue.*"`` 
 Valid network namespace values: ``Sysctls`` that start with ``"net.*"`` 
 All of these values are supported by Fargate.

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string: One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string: The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).

## Tag
### Properties
* **Key**: string: One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string: The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).

## Tag
### Properties
* **Key**: string: One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string: The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).

## Tag
### Properties
* **Key**: string
* **Value**: string

## TaskDefinition_DockerLabels
### Properties

## TaskDefinition_DriverOpts
### Properties

## TaskDefinition_Labels
### Properties

## TaskDefinition_Options
### Properties

## TaskDefinition_Options
### Properties

## TaskDefinitionPlacementConstraint
### Properties
* **Expression**: string: A cluster query language expression to apply to the constraint. For more information, see [Cluster query language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Type**: string (Required): The type of constraint. The ``MemberOf`` constraint restricts selection to be from a group of valid candidates.

## TimeoutConfiguration
### Properties
* **IdleTimeoutSeconds**: int: The amount of time in seconds a connection will stay active while idle. A value of ``0`` can be set to disable ``idleTimeout``.
 The ``idleTimeout`` default for ``HTTP``/``HTTP2``/``GRPC`` is 5 minutes.
 The ``idleTimeout`` default for ``TCP`` is 1 hour.
* **PerRequestTimeoutSeconds**: int: The amount of time waiting for the upstream to respond with a complete response per request. A value of ``0`` can be set to disable ``perRequestTimeout``. ``perRequestTimeout`` can only be set if Service Connect ``appProtocol`` isn't ``TCP``. Only ``idleTimeout`` is allowed for ``TCP`` ``appProtocol``.

## Tmpfs
### Properties
* **ContainerPath**: string: The absolute file path where the tmpfs volume is to be mounted.
* **MountOptions**: string[]: The list of tmpfs volume mount options.
 Valid values: ``"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"``
* **Size**: int (Required): The maximum size (in MiB) of the tmpfs volume.

## Ulimit
### Properties
* **HardLimit**: int (Required): The hard limit for the ``ulimit`` type.
* **Name**: string (Required): The ``type`` of the ``ulimit``.
* **SoftLimit**: int (Required): The soft limit for the ``ulimit`` type.

## Volume
### Properties
* **ConfiguredAtLaunch**: bool: Indicates whether the volume should be configured at launch time. This is used to create Amazon EBS volumes for standalone tasks or tasks created as part of a service. Each task definition revision may only have one volume configured at launch in the volume configuration.
 To configure a volume at launch time, use this task definition revision and specify a ``volumeConfigurations`` object when calling the ``CreateService``, ``UpdateService``, ``RunTask`` or ``StartTask`` APIs.
* **DockerVolumeConfiguration**: [DockerVolumeConfiguration](#dockervolumeconfiguration): This parameter is specified when you use Docker volumes.
 Windows containers only support the use of the ``local`` driver. To use bind mounts, specify the ``host`` parameter instead.
  Docker volumes aren't supported by tasks run on FARGATElong.
* **EFSVolumeConfiguration**: [EFSVolumeConfiguration](#efsvolumeconfiguration): This parameter is specified when you use an Amazon Elastic File System file system for task storage.
* **FSxWindowsFileServerVolumeConfiguration**: [FSxWindowsFileServerVolumeConfiguration](#fsxwindowsfileservervolumeconfiguration): This parameter is specified when you use Amazon FSx for Windows File Server file system for task storage.
* **Host**: [HostVolumeProperties](#hostvolumeproperties): This parameter is specified when you use bind mount host volumes. The contents of the ``host`` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the ``host`` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
 Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount ``C:\my\path:C:\my\path`` and ``D:\:D:\``, but not ``D:\my\path:C:\my\path`` or ``D:\:C:\my\path``.
* **Name**: string: The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
 When using a volume configured at launch, the ``name`` is required and must also be specified as the volume name in the ``ServiceVolumeConfiguration`` or ``TaskVolumeConfiguration`` parameter when creating your service or standalone task.
 For all other types of volumes, this name is referenced in the ``sourceVolume`` parameter of the ``mountPoints`` object in the container definition.
 When a volume is using the ``efsVolumeConfiguration``, the name is required.

## VolumeFrom
### Properties
* **ReadOnly**: bool: If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
* **SourceContainer**: string: The name of another container within the same task definition to mount volumes from.

