# AWS.ECS @ default

## Resource AWS.ECS/CapacityProvider@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/CapacityProviderProperties](#awsecscapacityproviderproperties) (Identifier): properties of the resource

## Resource AWS.ECS/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ClusterProperties](#awsecsclusterproperties) (Identifier): properties of the resource

## Resource AWS.ECS/ClusterCapacityProviderAssociations@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ClusterCapacityProviderAssociationsProperties](#awsecsclustercapacityproviderassociationsproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECS/Daemon@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/DaemonProperties](#awsecsdaemonproperties) (Identifier): properties of the resource

## Resource AWS.ECS/DaemonTaskDefinition@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/DaemonTaskDefinitionProperties](#awsecsdaemontaskdefinitionproperties) (Identifier): properties of the resource

## Resource AWS.ECS/ExpressGatewayService@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ExpressGatewayServiceProperties](#awsecsexpressgatewayserviceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECS/Gateway@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/GatewayProperties](#awsecsgatewayproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECS/PrimaryTaskSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/PrimaryTaskSetProperties](#awsecsprimarytasksetproperties) (Required, Identifier): properties of the resource

## Resource AWS.ECS/Service@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/ServiceProperties](#awsecsserviceproperties) (Identifier): properties of the resource

## Resource AWS.ECS/TaskDefinition@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/TaskDefinitionProperties](#awsecstaskdefinitionproperties) (Identifier): properties of the resource

## Resource AWS.ECS/TaskSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ECS/TaskSetProperties](#awsecstasksetproperties) (Required, Identifier): properties of the resource

## AcceleratorCountRequest
### Properties
* **Max**: int
* **Min**: int

## AcceleratorTotalMemoryMiBRequest
### Properties
* **Max**: int
* **Min**: int

## AdvancedConfiguration
### Properties
* **AlternateTargetGroupArn**: string (Required): The Amazon Resource Name (ARN) of the alternate target group for Amazon ECS blue/green deployments.
* **ProductionListenerRule**: string: The Amazon Resource Name (ARN) that that identifies the production listener rule (in the case of an Application Load Balancer) or listener (in the case for an Network Load Balancer) for routing production traffic.
* **RoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call the Elastic Load Balancing APIs for you.
* **TestListenerRule**: string: The Amazon Resource Name (ARN) that identifies ) that identifies the test listener rule (in the case of an Application Load Balancer) or listener (in the case for an Network Load Balancer) for routing test traffic.

## AuthorizationConfig
### Properties
* **AccessPointId**: string: The Amazon EFS access point ID to use. If an access point is specified, the root directory value specified in the ``EFSVolumeConfiguration`` must either be omitted or set to ``/`` which will enforce the path set on the EFS access point. If an access point is used, transit encryption must be on in the ``EFSVolumeConfiguration``. For more information, see [Working with Amazon EFS access points](https://docs.aws.amazon.com/efs/latest/ug/efs-access-points.html) in the *Amazon Elastic File System User Guide*.
* **IAM**: string: Determines whether to use the Amazon ECS task role defined in a task definition when mounting the Amazon EFS file system. If it is turned on, transit encryption must be turned on in the ``EFSVolumeConfiguration``. If this parameter is omitted, the default value of ``DISABLED`` is used. For more information, see [Using Amazon EFS access points](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/efs-volumes.html#efs-volume-accesspoints) in the *Amazon Elastic Container Service Developer Guide*.

## AutoRepairConfiguration
### Properties
* **ActionsStatus**: string

## AutoScalingArns
### Properties
* **ApplicationAutoScalingPolicies**: string[] (ReadOnly)
* **ScalableTarget**: string (ReadOnly)

## AutoScalingGroupProvider
### Properties
* **AutoScalingGroupArn**: string (Required)
* **ManagedDraining**: string
* **ManagedScaling**: [ManagedScaling](#managedscaling)
* **ManagedTerminationProtection**: string

## AWS.ECS/CapacityProviderProperties
### Properties
* **AutoScalingGroupProvider**: [AutoScalingGroupProvider](#autoscalinggroupprovider)
* **ClusterName**: string
* **ManagedInstancesProvider**: [ManagedInstancesProvider](#managedinstancesprovider)
* **Name**: string (Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.ECS/ClusterCapacityProviderAssociationsProperties
### Properties
* **CapacityProviders**: string[]
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
* **ClusterSettings**: [ClusterSettings](#clustersettings)[]: The settings to use when creating a cluster. This parameter is used to turn on CloudWatch Container Insights with enhanced observability or CloudWatch Container Insights for a cluster.
 Container Insights with enhanced observability provides all the Container Insights metrics, plus additional task and container metrics. This version supports enhanced observability for Amazon ECS clusters using the Amazon EC2 and Fargate launch types. After you configure Container Insights with enhanced observability on Amazon ECS, Container Insights auto-collects detailed infrastructure telemetry from the cluster level down to the container level in your environment and displays these critical performance data in curated dashboards removing the heavy lifting in observability set-up. 
 For more information, see [Monitor Amazon ECS containers using Container Insights with enhanced observability](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cloudwatch-container-insights.html) in the *Amazon Elastic Container Service Developer Guide*.
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

## AWS.ECS/DaemonProperties
### Properties
* **CapacityProviderArns**: string[] (WriteOnly): The Amazon Resource Names (ARNs) of the capacity providers associated with the daemon.
* **ClusterArn**: string: The Amazon Resource Name (ARN) of the cluster that the daemon is running in.
* **CreatedAt**: string (ReadOnly)
* **Critical**: bool (WriteOnly)
* **DaemonArn**: string (ReadOnly, Identifier)
* **DaemonName**: string (WriteOnly)
* **DaemonStatus**: string (ReadOnly)
* **DaemonTaskDefinitionArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the daemon task definition used by this revision.
* **DeploymentArn**: string (ReadOnly)
* **DeploymentConfiguration**: [DaemonDeploymentConfiguration](#daemondeploymentconfiguration) (WriteOnly): The deployment configuration used for this daemon deployment.
* **EnableECSManagedTags**: bool (WriteOnly): Specifies whether Amazon ECS managed tags are turned on for the daemon tasks.
* **EnableExecuteCommand**: bool (WriteOnly): Specifies whether the execute command functionality is turned on for the daemon tasks.
* **PropagateTags**: string (WriteOnly): Specifies whether tags are propagated from the daemon to the daemon tasks.
* **Tags**: [Tag](#tag)[]
* **UpdatedAt**: string (ReadOnly)

## AWS.ECS/DaemonTaskDefinitionProperties
### Properties
* **ContainerDefinitions**: [DaemonContainerDefinition](#daemoncontainerdefinition)[]: A list of container definitions in JSON format that describe the containers that make up the daemon task.
* **Cpu**: string: The number of CPU units used by the daemon task.
* **DaemonTaskDefinitionArn**: string (ReadOnly, Identifier)
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make Amazon Web Services API calls on your behalf.
* **Family**: string: The name of a family that this daemon task definition is registered to.
* **IpcMode**: string: The IPC namespace mode for the daemon. The valid values are ``none`` and ``shared``. The default is ``none``.
 If ``none`` is specified or no value is provided, the daemon runs with its own IPC namespace, isolated from other tasks. If ``shared`` is specified, the daemon joins the host IPC namespace, making it accessible to non-daemon tasks that use ``ipcMode: "host"`` or other daemons that use ``ipcMode: "shared"``.
* **Memory**: string: The amount of memory (in MiB) used by the daemon task.
* **PidMode**: string: The PID namespace mode for the daemon. The valid values are ``none`` and ``shared``. The default is ``none``.
 If ``none`` is specified or no value is provided, the daemon runs with its own PID namespace, isolated from other tasks. If ``shared`` is specified, the daemon joins the host PID namespace, making it accessible to non-daemon tasks that use ``pidMode: "host"`` or other daemons that use ``pidMode: "shared"``.
* **Tags**: [Tag](#tag)[]
* **TaskRoleArn**: string: The short name or full Amazon Resource Name (ARN) of the IAM role that grants containers in the daemon task permission to call Amazon Web Services APIs on your behalf.
* **Volumes**: [Volume](#volume)[]: The list of data volume definitions for the daemon task.

## AWS.ECS/ExpressGatewayServiceProperties
### Properties
* **ActiveConfigurations**: [ExpressGatewayServiceConfiguration](#expressgatewayserviceconfiguration)[] (ReadOnly)
* **Cluster**: string
* **Cpu**: string (WriteOnly)
* **CreatedAt**: string (ReadOnly)
* **ECSManagedResourceArns**: [ECSManagedResourceArns](#ecsmanagedresourcearns) (ReadOnly)
* **Endpoint**: string (ReadOnly)
* **ExecutionRoleArn**: string (WriteOnly)
* **HealthCheckPath**: string (WriteOnly)
* **InfrastructureRoleArn**: string (Required)
* **Memory**: string (WriteOnly)
* **NetworkConfiguration**: [ExpressGatewayServiceNetworkConfiguration](#expressgatewayservicenetworkconfiguration) (WriteOnly)
* **PrimaryContainer**: [ExpressGatewayContainer](#expressgatewaycontainer) (WriteOnly)
* **ScalingTarget**: [ExpressGatewayScalingTarget](#expressgatewayscalingtarget) (WriteOnly)
* **ServiceArn**: string (ReadOnly, Identifier)
* **ServiceName**: string
* **Status**: [ExpressGatewayServiceStatus](#expressgatewayservicestatus) (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **TaskDefinitionArn**: string (WriteOnly)
* **TaskRoleArn**: string (WriteOnly)
* **UpdatedAt**: string (ReadOnly)

## AWS.ECS/GatewayProperties
### Properties
* **AccessType**: string (ReadOnly): The access type of the gateway.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the gateway.
* **Configuration**: [GatewayConfiguration](#gatewayconfiguration) (Required): The configuration for the gateway.
* **CreatedAt**: string (ReadOnly): The timestamp when the gateway was created.
* **DeletionProtection**: bool: Whether deletion protection is enabled for the gateway.
* **GatewayName**: string (Required): The name of the gateway. Up to 255 letters (uppercase and lowercase), numbers, and hyphens are allowed.
* **InfrastructureRoleArn**: string (Required): The ARN of the IAM role that ECS uses to manage infrastructure for the gateway.
* **PropagateTags**: string: Specifies whether to propagate the tags from the gateway to other resources.
* **Status**: string (ReadOnly): The status of the gateway.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to the gateway to help you categorize and organize them.
* **UpdatedAt**: string (ReadOnly): The timestamp when the gateway was last updated.

## AWS.ECS/PrimaryTaskSetProperties
### Properties
* **Cluster**: string (Required, Identifier): The short name or full Amazon Resource Name (ARN) of the cluster that hosts the service to create the task set in.
* **Service**: string (Required, Identifier): The short name or full Amazon Resource Name (ARN) of the service to create the task set in.
* **TaskSetId**: string (Required): The ID or full Amazon Resource Name (ARN) of the task set.

## AWS.ECS/ServiceProperties
### Properties
* **AvailabilityZoneRebalancing**: string: Indicates whether to use Availability Zone rebalancing for the service.
 For more information, see [Balancing an Amazon ECS service across Availability Zones](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-rebalancing.html) in the *Amazon Elastic Container Service Developer Guide*.
 The default behavior of ``AvailabilityZoneRebalancing`` differs between create and update requests:
  +  For create service requests, when no value is specified for ``AvailabilityZoneRebalancing``, Amazon ECS defaults the value to ``ENABLED``.
  +  For update service requests, when no value is specified for ``AvailabilityZoneRebalancing``, Amazon ECS defaults to the existing service’s ``AvailabilityZoneRebalancing`` value. If the service never had an ``AvailabilityZoneRebalancing`` value set, Amazon ECS treats this as ``DISABLED``.
* **CapacityProviderStrategy**: [CapacityProviderStrategyItem](#capacityproviderstrategyitem)[]: The capacity provider strategy to use for the service.
 If a ``capacityProviderStrategy`` is specified, the ``launchType`` parameter must be omitted. If no ``capacityProviderStrategy`` or ``launchType`` is specified, the ``defaultCapacityProviderStrategy`` for the cluster is used.
 A capacity provider strategy can contain a maximum of 20 capacity providers.
  To remove this property from your service resource, specify an empty ``CapacityProviderStrategyItem`` array.
* **Cluster**: string (Identifier): The short name or full Amazon Resource Name (ARN) of the cluster that you run your service on. If you do not specify a cluster, the default cluster is assumed.
* **DeploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration): Optional deployment parameters that control how many tasks run during the deployment and the ordering of stopping and starting tasks.
* **DeploymentController**: [DeploymentController](#deploymentcontroller): The deployment controller to use for the service.
* **DesiredCount**: int: The number of instantiations of the specified task definition to place and keep running in your service.
 For new services, if a desired count is not specified, a default value of ``1`` is used. When using the ``DAEMON`` scheduling strategy, the desired count is not required.
 For existing services, if a desired count is not specified, it is omitted from the operation.
* **EnableECSManagedTags**: bool: Specifies whether to turn on Amazon ECS managed tags for the tasks within the service. For more information, see [Tagging your Amazon ECS resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the *Amazon Elastic Container Service Developer Guide*.
 When you use Amazon ECS managed tags, you must set the ``propagateTags`` request parameter.
* **EnableExecuteCommand**: bool: Determines whether the execute command functionality is turned on for the service. If ``true``, the execute command functionality is turned on for all containers in tasks as part of the service.
* **ForceNewDeployment**: [ForceNewDeployment](#forcenewdeployment) (WriteOnly): Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (``my_image:latest``) or to roll Fargate tasks onto a newer platform version.
* **GatewayConnectors**: [GatewayConnector](#gatewayconnector)[] (WriteOnly)
* **HealthCheckGracePeriodSeconds**: int: The period of time, in seconds, that the Amazon ECS service scheduler ignores unhealthy Elastic Load Balancing, VPC Lattice, and container health checks after a task has first started. If you do not specify a health check grace period value, the default value of 0 is used. If you do not use any of the health checks, then ``healthCheckGracePeriodSeconds`` is unused.
 If your service has more running tasks than desired, unhealthy tasks in the grace period might be stopped to reach the desired count.
* **LaunchType**: string: The launch type on which to run your service. For more information, see [Amazon ECS Launch Types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
  If you want to use Managed Instances, you must use the ``capacityProviderStrategy`` request parameter
* **LoadBalancers**: [LoadBalancer](#loadbalancer)[]: A list of load balancer objects to associate with the service. If you specify the ``Role`` property, ``LoadBalancers`` must be specified as well. For information about the number of load balancers that you can specify per service, see [Service Load Balancing](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-load-balancing.html) in the *Amazon Elastic Container Service Developer Guide*.
  To remove this property from your service resource, specify an empty ``LoadBalancer`` array.
* **Monitoring**: [MonitoringConfiguration](#monitoringconfiguration) (WriteOnly): The optional monitoring configuration for the service, which defines the resolution for the service-level ``CPUUtilization`` and ``MemoryUtilization`` Amazon CloudWatch metrics. When not specified, Amazon ECS uses the default resolution of ``60`` seconds.
* **Name**: string (ReadOnly)
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration): The network configuration for the service. This parameter is required for task definitions that use the ``awsvpc`` network mode to receive their own elastic network interface, and it is not supported for other network modes. For more information, see [Task Networking](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html) in the *Amazon Elastic Container Service Developer Guide*.
* **PlacementConstraints**: [PlacementConstraint](#placementconstraint)[]: An array of placement constraint objects to use for tasks in your service. You can specify a maximum of 10 constraints for each task. This limit includes constraints in the task definition and those specified at runtime.
  To remove this property from your service resource, specify an empty ``PlacementConstraint`` array.
* **PlacementStrategies**: [PlacementStrategy](#placementstrategy)[]: The placement strategy objects to use for tasks in your service. You can specify a maximum of 5 strategy rules for each service.
  To remove this property from your service resource, specify an empty ``PlacementStrategy`` array.
* **PlatformVersion**: string: The platform version that your tasks in the service are running on. A platform version is specified only for tasks using the Fargate launch type. If one isn't specified, the ``LATEST`` platform version is used. For more information, see [platform versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
* **PropagateTags**: string: Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags aren't propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the [TagResource](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_TagResource.html) API action.
 You must set this to a value other than ``NONE`` when you use Cost Explorer. For more information, see [Amazon ECS usage reports](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/usage-reports.html) in the *Amazon Elastic Container Service Developer Guide*.
 The default is ``NONE``.
* **Role**: string: The name or full Amazon Resource Name (ARN) of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is only permitted if you are using a load balancer with your service and your task definition doesn't use the ``awsvpc`` network mode. If you specify the ``role`` parameter, you must also specify a load balancer object with the ``loadBalancers`` parameter.
  If your account has already created the Amazon ECS service-linked role, that role is used for your service unless you specify a role here. The service-linked role is required if your task definition uses the ``awsvpc`` network mode or if the service is configured to use service discovery, an external deployment controller, multiple target groups, or Elastic Inference accelerators in which case you don't specify a role here. For more information, see [Using service-linked roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using-service-linked-roles.html) in the *Amazon Elastic Container Service Developer Guide*.
  If your specified role has a path other than ``/``, then you must either specify the full role ARN (this is recommended) or prefix the role name with the path. For example, if a role with the name ``bar`` has a path of ``/foo/`` then you would specify ``/foo/bar`` as the role name. For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide*.
* **SchedulingStrategy**: string: The scheduling strategy to use for the service. For more information, see [Services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
 There are two service scheduler strategies available:
  +  ``REPLICA``-The replica scheduling strategy places and maintains the desired number of tasks across your cluster. By default, the service scheduler spreads tasks across Availability Zones. You can use task placement strategies and constraints to customize task placement decisions. This scheduler strategy is required if the service uses the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types.
  +  ``DAEMON``-The daemon scheduling strategy deploys exactly one task on each active container instance that meets all of the task placement constraints that you specify in your cluster. The service scheduler also evaluates the task placement constraints for running tasks and will stop tasks that don't meet the placement constraints. When you're using this strategy, you don't need to specify a desired number of tasks, a task placement strategy, or use Service Auto Scaling policies.
  Tasks using the Fargate launch type or the ``CODE_DEPLOY`` or ``EXTERNAL`` deployment controller types don't support the ``DAEMON`` scheduling strategy.
* **ServiceArn**: string (ReadOnly, Identifier)
* **ServiceConnectConfiguration**: [ServiceConnectConfiguration](#serviceconnectconfiguration) (WriteOnly): The configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace.
 Tasks that run in a namespace can use short names to connect to services in the namespace. Tasks can connect to services across all of the clusters in the namespace. Tasks connect through a managed proxy container that collects logs and metrics for increased visibility. Only the tasks that Amazon ECS services create are supported with Service Connect. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **ServiceName**: string: The name of your service. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. Service names must be unique within a cluster, but you can have similarly named services in multiple clusters within a Region or across multiple Regions.
  The stack update fails if you change any properties that require replacement and the ``ServiceName`` is configured. This is because AWS CloudFormation creates the replacement service first, but each ``ServiceName`` must be unique in the cluster.
* **ServiceRegistries**: [ServiceRegistry](#serviceregistry)[]: The details of the service discovery registry to associate with this service. For more information, see [Service discovery](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-discovery.html).
  Each service may be associated with one service registry. Multiple service registries for each service isn't supported.
   To remove this property from your service resource, specify an empty ``ServiceRegistry`` array.
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
  To remove this property from your service resource, specify an empty ``ServiceVolumeConfiguration`` array.
* **VpcLatticeConfigurations**: [VpcLatticeConfiguration](#vpclatticeconfiguration)[]: The VPC Lattice configuration for the service being created.

## AWS.ECS/TaskDefinitionProperties
### Properties
* **ContainerDefinitions**: [ContainerDefinition](#containerdefinition)[]: A list of container definitions in JSON format that describe the different containers that make up your task. For more information about container definition parameters and defaults, see [Amazon ECS Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Cpu**: string: The number of ``cpu`` units used by the task. If you use the EC2 launch type, this field is optional. Any value can be used. If you use the Fargate launch type, this field is required. You must use one of the following values. The value that you choose determines your range of valid values for the ``memory`` parameter.
 If you're using the EC2 launch type or the external launch type, this field is optional. Supported values are between ``128`` CPU units (``0.125`` vCPUs) and ``196608`` CPU units (``192`` vCPUs). 
 This field is required for Fargate. For information about the valid values, see [Task size](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definition_parameters.html#task_size) in the *Amazon Elastic Container Service Developer Guide*.
* **EnableFaultInjection**: bool: Enables fault injection and allows for fault injection requests to be accepted from the task's containers. The default value is ``false``.
* **EphemeralStorage**: [EphemeralStorage](#ephemeralstorage): The ephemeral storage settings to use for tasks run with the task definition.
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the task execution role that grants the Amazon ECS container agent permission to make AWS API calls on your behalf. For informationabout the required IAM roles for Amazon ECS, see [IAM roles for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/security-ecs-iam-role-overview.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Family**: string: The name of a family that this task definition is registered to. Up to 255 letters (uppercase and lowercase), numbers, hyphens, and underscores are allowed.
 A family groups multiple versions of a task definition. Amazon ECS gives the first task definition that you registered to a family a revision number of 1. Amazon ECS gives sequential revision numbers to each task definition that you add.
  To use revision numbers when you update a task definition, specify this property. If you don't specify a value, CFNlong generates a new task definition each time that you update it.
* **InferenceAccelerators**: [InferenceAccelerator](#inferenceaccelerator)[]
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
 If no value is specified, the The default is a private namespace for each container.
 If the ``host`` PID mode is used, there's a heightened risk of undesired process namespace exposure.
  This parameter is not supported for Windows containers.
   This parameter is only supported for tasks that are hosted on FARGATElong if the tasks are using platform version ``1.4.0`` or later (Linux). This isn't supported for Windows containers on Fargate.
* **PlacementConstraints**: [TaskDefinitionPlacementConstraint](#taskdefinitionplacementconstraint)[]: An array of placement constraint objects to use for tasks.
  This parameter isn't supported for tasks run on FARGATElong.
* **ProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration): The configuration details for the App Mesh proxy.
 Your Amazon ECS container instances require at least version 1.26.0 of the container agent and at least version 1.26.0-1 of the ``ecs-init`` package to use a proxy configuration. If your container instances are launched from the Amazon ECS optimized AMI version ``20190301`` or later, they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
* **RequiresCompatibilities**: string[]: The task launch types the task definition was validated against. The valid values are ``MANAGED_INSTANCES``, ``EC2``, ``FARGATE``, and ``EXTERNAL``. For more information, see [Amazon ECS launch types](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/launch_types.html) in the *Amazon Elastic Container Service Developer Guide*.
* **RuntimePlatform**: [RuntimePlatform](#runtimeplatform): The operating system that your tasks definitions run on.
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
* **AssignPublicIp**: string: Whether the task's elastic network interface receives a public IP address. 
 Consider the following when you set this value:
  +  When you use ``create-service`` or ``update-service``, the default is ``DISABLED``. 
  +  When the service ``deploymentController`` is ``ECS``, the value must be ``DISABLED``.
* **SecurityGroups**: string[]: The IDs of the security groups associated with the task or service. If you don't specify a security group, the default security group for the VPC is used. There's a limit of 5 security groups that can be specified.
  All specified security groups must be from the same VPC.
* **Subnets**: string[]: The IDs of the subnets associated with the task or service. There's a limit of 16 subnets that can be specified.
  All specified subnets must be from the same VPC.

## AwsVpcConfiguration
### Properties
* **AssignPublicIp**: string: Whether the task's elastic network interface receives a public IP address. The default value is DISABLED.
* **SecurityGroups**: string[]: The security groups associated with the task or service. If you do not specify a security group, the default security group for the VPC is used. There is a limit of 5 security groups that can be specified per AwsVpcConfiguration.
* **Subnets**: string[] (Required): The subnets associated with the task or service. There is a limit of 16 subnets that can be specified per AwsVpcConfiguration.

## BaselineEbsBandwidthMbpsRequest
### Properties
* **Max**: int
* **Min**: int

## CanaryConfiguration
### Properties
* **CanaryBakeTimeInMinutes**: int: The amount of time in minutes to wait during the canary phase before shifting the remaining production traffic to the new service revision. Valid values are 0 to 1440 minutes (24 hours). The default value is 10.
* **CanaryPercent**: int: The percentage of production traffic to shift to the new service revision during the canary phase. Valid values are multiples of 0.1 from 0.1 to 100.0. The default value is 5.0.

## CapacityProvider_InfrastructureOptimization
### Properties
* **ScaleInAfter**: int: This parameter defines the number of seconds Amazon ECS Managed Instances waits before optimizing EC2 instances that have become idle or underutilized. A longer delay increases the likelihood of placing new tasks on idle instances, reducing startup time. A shorter delay helps reduce infrastructure costs by optimizing idle instances more quickly. Valid values are: Not set (null) - Uses the default optimization behavior, `-1` - Disables automatic infrastructure optimization, `0` to `3600` (inclusive) - Specifies the number of seconds to wait before optimizing instances.

## CapacityProviderStrategy
### Properties
* **Base**: int
* **CapacityProvider**: string (Required)
* **Weight**: int

## CapacityProviderStrategyItem
### Properties
* **Base**: int: The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider for each service. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
 Base value characteristics:
  +  Only one capacity provider in a strategy can have a base defined
  +  The default value is ``0`` if not specified
  +  The valid range is 0 to 100,000
  +  Base requirements are satisfied first before weight distribution
* **CapacityProvider**: string: The short name of the capacity provider. This can be either an AWS managed capacity provider (``FARGATE`` or ``FARGATE_SPOT``) or the name of a custom capacity provider that you created.
* **Weight**: int: The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
 If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
 Weight value characteristics:
  +  Weight is considered after the base value is satisfied
  +  The default value is ``0`` if not specified
  +  The valid range is 0 to 1,000
  +  At least one capacity provider must have a weight greater than zero
  +  Capacity providers with weight of ``0`` cannot place tasks
  
 Task distribution logic:
  1.  Base satisfaction: The minimum number of tasks specified by the base value are placed on that capacity provider
  1.  Weight distribution: After base requirements are met, additional tasks are distributed according to weight ratios
  
 Examples:
 Equal Distribution: Two capacity providers both with weight ``1`` will split tasks evenly after base requirements are met.
 Weighted Distribution: If capacityProviderA has weight ``1`` and capacityProviderB has weight ``4``, then for every 1 task on A, 4 tasks will run on B.

## CapacityProviderStrategyItem
### Properties
* **Base**: int: The *base* value designates how many tasks, at a minimum, to run on the specified capacity provider for each service. Only one capacity provider in a capacity provider strategy can have a *base* defined. If no value is specified, the default value of ``0`` is used.
 Base value characteristics:
  +  Only one capacity provider in a strategy can have a base defined
  +  The default value is ``0`` if not specified
  +  The valid range is 0 to 100,000
  +  Base requirements are satisfied first before weight distribution
* **CapacityProvider**: string: The short name of the capacity provider. This can be either an AWS managed capacity provider (``FARGATE`` or ``FARGATE_SPOT``) or the name of a custom capacity provider that you created.
* **Weight**: int: The *weight* value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The ``weight`` value is taken into consideration after the ``base`` value, if defined, is satisfied.
 If no ``weight`` value is specified, the default value of ``0`` is used. When multiple capacity providers are specified within a capacity provider strategy, at least one of the capacity providers must have a weight value greater than zero and any capacity providers with a weight of ``0`` can't be used to place tasks. If you specify multiple capacity providers in a strategy that all have a weight of ``0``, any ``RunTask`` or ``CreateService`` actions using the capacity provider strategy will fail.
 Weight value characteristics:
  +  Weight is considered after the base value is satisfied
  +  The default value is ``0`` if not specified
  +  The valid range is 0 to 1,000
  +  At least one capacity provider must have a weight greater than zero
  +  Capacity providers with weight of ``0`` cannot place tasks
  
 Task distribution logic:
  1.  Base satisfaction: The minimum number of tasks specified by the base value are placed on that capacity provider
  1.  Weight distribution: After base requirements are met, additional tasks are distributed according to weight ratios
  
 Examples:
 Equal Distribution: Two capacity providers both with weight ``1`` will split tasks evenly after base requirements are met.
 Weighted Distribution: If capacityProviderA has weight ``1`` and capacityProviderB has weight ``4``, then for every 1 task on A, 4 tasks will run on B.

## CapacityProviderStrategyItem
### Properties
* **Base**: int
* **CapacityProvider**: string
* **Weight**: int

## CapacityReservationRequest
### Properties
* **ReservationGroupArn**: string
* **ReservationPreference**: string

## ClusterConfiguration
### Properties
* **ExecuteCommandConfiguration**: [ExecuteCommandConfiguration](#executecommandconfiguration): The details of the execute command configuration.
* **ManagedStorageConfiguration**: [ManagedStorageConfiguration](#managedstorageconfiguration): The details of the managed storage configuration.

## ClusterSettings
### Properties
* **Name**: string: The name of the cluster setting. The value is ``containerInsights``.
* **Value**: string: The value to set for the cluster setting. The supported values are ``enhanced``, ``enabled``, and ``disabled``. 
 To use Container Insights with enhanced observability, set the ``containerInsights`` account setting to ``enhanced``.
 To use Container Insights, set the ``containerInsights`` account setting to ``enabled``.
 If a cluster value is specified, it will override the ``containerInsights`` value set with [PutAccountSetting](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSetting.html) or [PutAccountSettingDefault](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PutAccountSettingDefault.html).

## ContainerDefinition
### Properties
* **Command**: string[]: The command that's passed to the container. This parameter maps to ``Cmd`` in the docker container create command and the ``COMMAND`` parameter to docker run. If there are multiple arguments, each argument is a separated string in the array.
* **Cpu**: int: The number of ``cpu`` units reserved for the container. This parameter maps to ``CpuShares`` in the docker container create command and the ``--cpu-shares`` option to docker run.
 This field is optional for tasks using the Fargate launch type, and the only requirement is that the total amount of CPU reserved for all containers within a task be lower than the task-level ``cpu`` value.
  You can determine the number of CPU units that are available per EC2 instance type by multiplying the vCPUs listed for that instance type on the [Amazon EC2 Instances](https://docs.aws.amazon.com/ec2/instance-types/) detail page by 1,024.
  Linux containers share unallocated CPU units with other containers on the container instance with the same ratio as their allocated amount. For example, if you run a single-container task on a single-core instance type with 512 CPU units specified for that container, and that's the only task running on the container instance, that container could use the full 1,024 CPU unit share at any given time. However, if you launched another copy of the same task on that container instance, each task is guaranteed a minimum of 512 CPU units when needed. Moreover, each container could float to higher CPU usage if the other container was not using it. If both tasks were 100% active all of the time, they would be limited to 512 CPU units.
 On Linux container instances, the Docker daemon on the container instance uses the CPU value to calculate the relative CPU share ratios for running containers. The minimum valid CPU share value that the Linux kernel allows is 2, and the maximum valid CPU share value that the Linux kernel allows is 262144. However, the CPU parameter isn't required, and you can use CPU values below 2 or above 262144 in your container definitions. For CPU values below 2 (including null) or above 262144, the behavior varies based on your Amazon ECS container agent version:
  +  *Agent versions less than or equal to 1.1.0:* Null and zero CPU values are passed to Docker as 0, which Docker then converts to 1,024 CPU shares. CPU values of 1 are passed to Docker as 1, which the Linux kernel converts to two CPU shares.
  +  *Agent versions greater than or equal to 1.2.0:* Null, zero, and CPU values of 1 are passed to Docker as 2.
  +  *Agent versions greater than or equal to 1.84.0:* CPU values greater than 256 vCPU are passed to Docker as 256, which is equivalent to 262144 CPU shares.
  
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
  
 If the task definition is used in a blue/green deployment that uses [AWS::CodeDeploy::DeploymentGroup BlueGreenDeploymentConfiguration](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codedeploy-deploymentgroup-bluegreendeploymentconfiguration.html), the ``dependsOn`` parameter is not supported.
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
  The entry point that's passed to the container. This parameter maps to ``Entrypoint`` in the docker container create command and the ``--entrypoint`` option to docker run.
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
* **Hostname**: string: The hostname to use for your container. This parameter maps to ``Hostname`` in the docker container create command and the ``--hostname`` option to docker run.
  The ``hostname`` parameter is not supported if you're using the ``awsvpc`` network mode.
* **Image**: string (Required): The image used to start a container. This string is passed directly to the Docker daemon. By default, images in the Docker Hub registry are available. Other repositories are specified with either ``repository-url/image:tag`` or ``repository-url/image@digest``. For images using tags (repository-url/image:tag), up to 255 characters total are allowed, including letters (uppercase and lowercase), numbers, hyphens, underscores, colons, periods, forward slashes, and number signs (#). For images using digests (repository-url/image@digest), the 255 character limit applies only to the repository URL and image name (everything before the @ sign). The only supported hash function is sha256, and the hash value after sha256: must be exactly 64 characters (only letters A-F, a-f, and numbers 0-9 are allowed). This parameter maps to ``Image`` in the docker container create command and the ``IMAGE`` parameter of docker run.
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
* **Name**: string (Required): The name of a container. If you're linking multiple containers together in a task definition, the ``name`` of one container can be entered in the ``links`` of another container to connect the containers. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed. This parameter maps to ``name`` in the docker container create command and the ``--name`` option to docker run.
* **PortMappings**: [PortMapping](#portmapping)[]: The list of port mappings for the container. Port mappings allow containers to access ports on the host container instance to send or receive traffic.
 For task definitions that use the ``awsvpc`` network mode, you should only specify the ``containerPort``. The ``hostPort`` can be left blank or it must be the same value as the ``containerPort``.
 Port mappings on Windows use the ``NetNAT`` gateway address rather than ``localhost``. There is no loopback for port mappings on Windows, so you cannot access a container's mapped port from the host itself. 
 This parameter maps to ``PortBindings`` in the [Create a container](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/#operation/ContainerCreate) section of the [Docker Remote API](https://docs.aws.amazon.com/https://docs.docker.com/engine/api/v1.35/) and the ``--publish`` option to [docker run](https://docs.aws.amazon.com/https://docs.docker.com/engine/reference/run/). If the network mode of a task definition is set to ``none``, then you can't specify port mappings. If the network mode of a task definition is set to ``host``, then host ports must either be undefined or they must match the container port in the port mapping.
  After a task reaches the ``RUNNING`` status, manual and automatic host and container port assignments are visible in the *Network Bindings* section of a container description for a selected task in the Amazon ECS console. The assignments are also visible in the ``networkBindings`` section [DescribeTasks](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DescribeTasks.html) responses.
* **Privileged**: bool: When this parameter is true, the container is given elevated privileges on the host container instance (similar to the ``root`` user). This parameter maps to ``Privileged`` in the docker container create command and the ``--privileged`` option to docker run
  This parameter is not supported for Windows containers or tasks run on FARGATElong.
* **PseudoTerminal**: bool: When this parameter is ``true``, a TTY is allocated. This parameter maps to ``Tty`` in the docker container create command and the ``--tty`` option to docker run.
* **ReadonlyRootFilesystem**: bool: When this parameter is true, the container is given read-only access to its root file system. This parameter maps to ``ReadonlyRootfs`` in the docker container create command and the ``--read-only`` option to docker run.
  This parameter is not supported for Windows containers.
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials): The private repository authentication credentials to use.
* **ResourceRequirements**: [ResourceRequirement](#resourcerequirement)[]: The type and amount of a resource to assign to a container. The supported resources are GPUs and Neuron devices.
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
  
 For tasks that use the Fargate launch type, the max stop timeout value is 120 seconds and if the parameter is not specified, the default value of 30 seconds is used.
 For tasks that use the EC2 launch type, if the ``stopTimeout`` parameter isn't specified, the value set for the Amazon ECS container agent configuration variable ``ECS_CONTAINER_STOP_TIMEOUT`` is used. If neither the ``stopTimeout`` parameter or the ``ECS_CONTAINER_STOP_TIMEOUT`` agent configuration variable are set, then the default values of 30 seconds for Linux containers and 30 seconds on Windows containers are used. Your container instances require at least version 1.26.0 of the container agent to use a container stop timeout value. However, we recommend using the latest container agent version. For information about checking your agent version and updating to the latest version, see [Updating the Amazon ECS Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-agent-update.html) in the *Amazon Elastic Container Service Developer Guide*. If you're using an Amazon ECS-optimized Linux AMI, your instance needs at least version 1.26.0-1 of the ``ecs-init`` package. If your container instances are launched from version ``20190301`` or later, then they contain the required versions of the container agent and ``ecs-init``. For more information, see [Amazon ECS-optimized Linux AMI](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-optimized_AMI.html) in the *Amazon Elastic Container Service Developer Guide*.
 The valid values for Fargate are 2-120 seconds.
* **SystemControls**: [SystemControl](#systemcontrol)[]: A list of namespaced kernel parameters to set in the container. This parameter maps to ``Sysctls`` in the docker container create command and the ``--sysctl`` option to docker run. For example, you can configure ``net.ipv4.tcp_keepalive_time`` setting to maintain longer lived connections.
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
* **VersionConsistency**: string: Specifies whether Amazon ECS will resolve the container image tag provided in the container definition to an image digest. By default, the value is ``enabled``. If you set the value for a container as ``disabled``, Amazon ECS will not resolve the provided container image tag to a digest and will use the original image URI specified in the container definition for deployment. For more information about container image resolution, see [Container image resolution](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html#deployment-container-image-stability) in the *Amazon ECS Developer Guide*.
* **VolumesFrom**: [VolumeFrom](#volumefrom)[]: Data volumes to mount from another container. This parameter maps to ``VolumesFrom`` in the docker container create command and the ``--volumes-from`` option to docker run.
* **WorkingDirectory**: string: The working directory to run commands inside the container in. This parameter maps to ``WorkingDir`` in the docker container create command and the ``--workdir`` option to docker run.

## ContainerDependency
### Properties
* **Condition**: string: The dependency condition of the container. The following are the available conditions and their behavior:
  +  ``START`` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
  +  ``COMPLETE`` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
  +  ``SUCCESS`` - This condition is the same as ``COMPLETE``, but it also requires that the container exits with a ``zero`` status. This condition can't be set on an essential container.
  +  ``HEALTHY`` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
* **ContainerName**: string: The name of a container.

## ContainerDependency
### Properties
* **Condition**: string: The dependency condition of the container. The following are the available conditions and their behavior:
  +  ``START`` - This condition emulates the behavior of links and volumes today. It validates that a dependent container is started before permitting other containers to start.
  +  ``COMPLETE`` - This condition validates that a dependent container runs to completion (exits) before permitting other containers to start. This can be useful for nonessential containers that run a script and then exit. This condition can't be set on an essential container.
  +  ``SUCCESS`` - This condition is the same as ``COMPLETE``, but it also requires that the container exits with a ``zero`` status. This condition can't be set on an essential container.
  +  ``HEALTHY`` - This condition validates that the dependent container passes its Docker health check before permitting other containers to start. This requires that the dependent container has health checks configured. This condition is confirmed only at task startup.
* **ContainerName**: string: The name of a container.

## DaemonAlarmConfiguration
### Properties
* **AlarmNames**: string[]: The CloudWatch alarm names to monitor during a daemon deployment.
* **Enable**: bool: Determines whether to use the CloudWatch alarm option in the daemon deployment process. The default value is ``false``.

## DaemonContainerDefinition
### Properties
* **Command**: string[]: The command that's passed to the container.
* **Cpu**: int: The number of ``cpu`` units reserved for the container.
* **DependsOn**: [ContainerDependency](#containerdependency)[]: The dependencies defined for container startup and shutdown. A container can contain multiple dependencies on other containers in a task definition.
* **EntryPoint**: string[]: The entry point that's passed to the container.
* **Environment**: [KeyValuePair](#keyvaluepair)[]: The environment variables to pass to a container.
* **EnvironmentFiles**: [EnvironmentFile](#environmentfile)[]: A list of files containing the environment variables to pass to a container.
* **Essential**: bool: If the ``essential`` parameter of a container is marked as ``true``, and that container fails or stops for any reason, all other containers that are part of the task are stopped.
* **FirelensConfiguration**: [FirelensConfiguration](#firelensconfiguration): The FireLens configuration for the container. This is used to specify and configure a log router for container logs.
* **HealthCheck**: [HealthCheck](#healthcheck): The container health check command and associated configuration parameters for the container.
* **Image**: string (Required): The image used to start the container. This string is passed directly to the Docker daemon. Images in the Docker Hub registry are available by default. Other repositories are specified with either ``repository-url/image:tag`` or ``repository-url/image@digest``.
* **Interactive**: bool: When this parameter is ``true``, you can deploy containerized applications that require ``stdin`` or a ``tty`` to be allocated.
* **LinuxParameters**: [LinuxParameters](#linuxparameters): Linux-specific modifications that are applied to the container configuration, such as Linux kernel capabilities.
* **LogConfiguration**: [LogConfiguration](#logconfiguration): The log configuration specification for the container.
* **Memory**: int: The amount (in MiB) of memory to present to the container. If the container attempts to exceed the memory specified here, the container is killed.
* **MemoryReservation**: int: The soft limit (in MiB) of memory to reserve for the container.
* **MountPoints**: [MountPoint](#mountpoint)[]: The mount points for data volumes in your container.
* **Name**: string (Required): The name of the container. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
* **Privileged**: bool: When this parameter is true, the container is given elevated privileges on the host container instance (similar to the ``root`` user).
* **PseudoTerminal**: bool: When this parameter is ``true``, a TTY is allocated.
* **ReadonlyRootFilesystem**: bool: When this parameter is true, the container is given read-only access to its root file system.
* **RepositoryCredentials**: [RepositoryCredentials](#repositorycredentials): The private repository authentication credentials to use.
* **RestartPolicy**: [RestartPolicy](#restartpolicy): The restart policy for the container. When you set up a restart policy, Amazon ECS can restart the container without needing to replace the task.
* **Secrets**: [Secret](#secret)[]: The secrets to pass to the container.
* **StartTimeout**: int: Time duration (in seconds) to wait before giving up on resolving dependencies for a container.
* **StopTimeout**: int: Time duration (in seconds) to wait before the container is forcefully killed if it doesn't exit normally on its own.
* **SystemControls**: [SystemControl](#systemcontrol)[]: A list of namespaced kernel parameters to set in the container.
* **Ulimits**: [Ulimit](#ulimit)[]: A list of ``ulimits`` to set in the container.
* **User**: string: The user to use inside the container.
* **WorkingDirectory**: string: The working directory to run commands inside the container in.

## DaemonDeploymentConfiguration
### Properties
* **Alarms**: [DaemonAlarmConfiguration](#daemonalarmconfiguration): The CloudWatch alarm configuration for the daemon deployment. When alarms are triggered during a deployment, the deployment can be automatically rolled back.
* **BakeTimeInMinutes**: int: The amount of time (in minutes) to wait after a successful deployment step before proceeding. This allows time to monitor for issues before continuing. The default value is 0.
* **DrainPercent**: int: The percentage of container instances to drain simultaneously during a daemon deployment. Valid values are between 0.0 and 100.0.

## DaemonTaskDefinition_Options
### Properties

## DaemonTaskDefinition_Options
### Properties

## DeploymentAlarms
### Properties
* **AlarmNames**: string[] (Required): One or more CloudWatch alarm names. Use a "," to separate the alarms.
* **Enable**: bool (Required): Determines whether to use the CloudWatch alarm option in the service deployment process.
* **Rollback**: bool (Required): Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is used, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.

## DeploymentCircuitBreaker
### Properties
* **Enable**: bool (Required): Determines whether to use the deployment circuit breaker logic for the service.
* **ResetOnHealthyTask**: bool: Specifies whether the deployment circuit breaker resets its failure count when a task reaches a healthy state. When set to ``true``, a task that reaches a healthy state resets the failure count to ``0``. When set to ``false``, Amazon ECS does not reset the failure count. The default is ``true``.
* **Rollback**: bool (Required): Determines whether to configure Amazon ECS to roll back the service if a service deployment fails. If rollback is on, when a service deployment fails, the service is rolled back to the last deployment that completed successfully.
* **ThresholdConfiguration**: [ThresholdConfiguration](#thresholdconfiguration): The threshold configuration that controls when the deployment circuit breaker triggers. The ``type`` and ``value`` together determine how many task failures are tolerated before the circuit breaker activates.

## DeploymentConfiguration
### Properties
* **Alarms**: [DeploymentAlarms](#deploymentalarms): Information about the CloudWatch alarms.
* **BakeTimeInMinutes**: int: The duration waiting before terminating the previous service revision and marking a deployment complete.
 The following rules apply when you don't specify a value:
  +  For blue/green, linear, and canary deployments, the value is set to 15 minutes.
  +  For rolling deployments, there is no bake time set by default.
  +  The external deployment controller (``EXTERNAL``) and the ACD blue/green deployment controller (``CODE_DEPLOY``) do not support the ``BakeTimeInMinutes`` parameter.
  
  If you provide a bake time for a rolling deployment, the CloudFormation handler timeout is increased to the maximum of 36 hours, matching the timeout for blue/green, linear, and canary deployments.
* **CanaryConfiguration**: [CanaryConfiguration](#canaryconfiguration): Configuration for canary deployment strategy. Only valid when the deployment strategy is ``CANARY``. This configuration enables shifting a fixed percentage of traffic for testing, followed by shifting the remaining traffic after a bake period.
* **DeploymentCircuitBreaker**: [DeploymentCircuitBreaker](#deploymentcircuitbreaker): The deployment circuit breaker can only be used for services using the rolling update (``ECS``) deployment type.
  The *deployment circuit breaker* determines whether a service deployment will fail if the service can't reach a steady state. If you use the deployment circuit breaker, a service deployment will transition to a failed state and stop launching new tasks. If you use the rollback option, when a service deployment fails, the service is rolled back to the last deployment that completed successfully. For more information, see [Rolling update](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/deployment-type-ecs.html) in the *Amazon Elastic Container Service Developer Guide*
* **EarlySuccessCriteria**: [DeploymentEarlySuccessCriteria](#deploymentearlysuccesscriteria): The early success criteria configuration for a rolling deployment. With early success criteria, you can configure an Amazon ECS deployment to complete faster. Amazon ECS declares a deployment successful once a target percentage of tasks are healthy, instead of waiting for the service to fully stabilize.
* **LifecycleHooks**: [DeploymentLifecycleHook](#deploymentlifecyclehook)[]: An array of deployment lifecycle hook objects to run custom logic or pause the deployment at specific stages of the deployment lifecycle.
* **LinearConfiguration**: [LinearConfiguration](#linearconfiguration): Configuration for linear deployment strategy. Only valid when the deployment strategy is ``LINEAR``. This configuration enables progressive traffic shifting in equal percentage increments with configurable bake times between each step.
* **MaximumPercent**: int: If a service is using the rolling update (``ECS``) deployment type, the ``maximumPercent`` parameter represents an upper limit on the number of your service's tasks that are allowed in the ``RUNNING`` or ``PENDING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded down to the nearest integer). This parameter enables you to define the deployment batch size. For example, if your service is using the ``REPLICA`` service scheduler and has a ``desiredCount`` of four tasks and a ``maximumPercent`` value of 200%, the scheduler may start four new tasks before stopping the four older tasks (provided that the cluster resources required to do this are available). The default ``maximumPercent`` value for a service using the ``REPLICA`` service scheduler is 200%.
 The Amazon ECS scheduler uses this parameter to replace unhealthy tasks by starting replacement tasks first and then stopping the unhealthy tasks, as long as cluster resources for starting replacement tasks are available. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html).
 If a service is using either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and tasks in the service use the EC2 launch type, the *maximum percent* value is set to the default value. The *maximum percent* value is used to define the upper limit on the number of the tasks in the service that remain in the ``RUNNING`` state while the container instances are in the ``DRAINING`` state.
  You can't specify a custom ``maximumPercent`` value for a service that uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types and has tasks that use the EC2 launch type.
  If the service uses either the blue/green (``CODE_DEPLOY``) or ``EXTERNAL`` deployment types, and the tasks in the service use the Fargate launch type, the maximum percent value is not used. The value is still returned when describing your service.
* **MinimumHealthyPercent**: int: If a service is using the rolling update (``ECS``) deployment type, the ``minimumHealthyPercent`` represents a lower limit on the number of your service's tasks that must remain in the ``RUNNING`` state during a deployment, as a percentage of the ``desiredCount`` (rounded up to the nearest integer). This parameter enables you to deploy without using additional cluster capacity. For example, if your service has a ``desiredCount`` of four tasks and a ``minimumHealthyPercent`` of 50%, the service scheduler may stop two existing tasks to free up cluster capacity before starting two new tasks. 
  If any tasks are unhealthy and if ``maximumPercent`` doesn't allow the Amazon ECS scheduler to start replacement tasks, the scheduler stops the unhealthy tasks one-by-one — using the ``minimumHealthyPercent`` as a constraint — to clear up capacity to launch replacement tasks. For more information about how the scheduler replaces unhealthy tasks, see [Amazon ECS services](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html). 
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
* **Strategy**: string: The deployment strategy for the service. Choose from these valid values:
  +  ``ROLLING`` - When you create a service which uses the rolling update (``ROLLING``) deployment strategy, the Amazon ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that Amazon ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration.
  +  ``BLUE_GREEN`` - A blue/green deployment strategy (``BLUE_GREEN``) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With Amazon ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.
  +  ``LINEAR`` - A *linear* deployment strategy (``LINEAR``) gradually shifts traffic from the current production environment to a new environment in equal percentages over time. With Amazon ECS linear deployments, you can control the pace of traffic shifting and validate new service revisions with increasing amounts of production traffic.
  +  ``CANARY`` - A *canary* deployment strategy (``CANARY``) shifts a small percentage of traffic to the new service revision first, then shifts the remaining traffic all at once after a specified time period. This allows you to test the new version with a subset of users before full deployment.

## DeploymentController
### Properties
* **Type**: string: The deployment controller type to use.
 The deployment controller is the mechanism that determines how tasks are deployed for your service. The valid options are:
  +  ECS
 When you create a service which uses the ``ECS`` deployment controller, you can choose between the following deployment strategies:
  +  ``ROLLING``: When you create a service which uses the *rolling update* (``ROLLING``) deployment strategy, the ECS service scheduler replaces the currently running tasks with new tasks. The number of tasks that ECS adds or removes from the service during a rolling update is controlled by the service deployment configuration. 
 Rolling update deployments are best suited for the following scenarios:
  +  Gradual service updates: You need to update your service incrementally without taking the entire service offline at once.
  +  Limited resource requirements: You want to avoid the additional resource costs of running two complete environments simultaneously (as required by blue/green deployments).
  +  Acceptable deployment time: Your application can tolerate a longer deployment process, as rolling updates replace tasks one by one.
  +  No need for instant roll back: Your service can tolerate a rollback process that takes minutes rather than seconds.
  +  Simple deployment process: You prefer a straightforward deployment approach without the complexity of managing multiple environments, target groups, and listeners.
  +  No load balancer requirement: Your service doesn't use or require a load balancer, ALB, NLB, or Service Connect (which are required for blue/green deployments).
  +  Stateful applications: Your application maintains state that makes it difficult to run two parallel environments.
  +  Cost sensitivity: You want to minimize deployment costs by not running duplicate environments during deployment.
  
 Rolling updates are the default deployment strategy for services and provide a balance between deployment safety and resource efficiency for many common application scenarios.
  +  ``BLUE_GREEN``: A *blue/green* deployment strategy (``BLUE_GREEN``) is a release methodology that reduces downtime and risk by running two identical production environments called blue and green. With ECS blue/green deployments, you can validate new service revisions before directing production traffic to them. This approach provides a safer way to deploy changes with the ability to quickly roll back if needed.
 ECS blue/green deployments are best suited for the following scenarios:
  +  Service validation: When you need to validate new service revisions before directing production traffic to them
  +  Zero downtime: When your service requires zero-downtime deployments
  +  Instant roll back: When you need the ability to quickly roll back if issues are detected
  +  Load balancer requirement: When your service uses ALB, NLB, or Service Connect
  
  
  +  External
 Use a third-party deployment controller.
  +  Blue/green deployment (powered by ACD)
 ACD installs an updated version of the application as a new replacement task set and reroutes production traffic from the original application task set to the replacement task set. The original task set is terminated after a successful deployment. Use this deployment controller to verify a new deployment of a service before sending production traffic to it.
  
 When updating the deployment controller for a service, consider the following depending on the type of migration you're performing.
  +  If you have a template that contains the ``EXTERNAL`` deployment controller information as well as ``TaskSet`` and ``PrimaryTaskSet`` resources, and you remove the task set resources from the template when updating from ``EXTERNAL`` to ``ECS``, the ``DescribeTaskSet`` and ``DeleteTaskSet`` API calls will return a 400 error after the deployment controller is updated to ``ECS``. This results in a delete failure on the task set resources, even though the stack transitions to ``UPDATE_COMPLETE`` status. For more information, see [Resource removed from stack but not deleted](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/troubleshooting.html#troubleshooting-errors-resource-removed-not-deleted) in the CFNlong User Guide. To fix this issue, delete the task sets directly using the ECS``DeleteTaskSet`` API. For more information about how to delete a task set, see [DeleteTaskSet](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html) in the ECSlong API Reference.
  +  If you're migrating from ``CODE_DEPLOY`` to ``ECS`` with a new task definition and CFN performs a rollback operation, the ECS``UpdateService`` request fails with the following error:
 Resource handler returned message: "Invalid request provided: Unable to update task definition on services with a CODE_DEPLOY deployment controller. 
  +  After a successful migration from ``ECS`` to ``EXTERNAL`` deployment controller, you need to manually remove the ``ACTIVE`` task set, because ECS no longer manages the deployment. For information about how to delete a task set, see [DeleteTaskSet](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_DeleteTaskSet.html) in the ECSlong API Reference.

## DeploymentEarlySuccessCriteria
### Properties
* **Enable**: bool: Specifies whether to use the early success criteria for the service deployment. When set to ``false``, the deployment uses the default behavior, where Amazon ECS considers the deployment successful when the target service revision fully stabilizes and the previous tasks are removed. The default value is ``false``.
 When set to ``true``, Amazon ECS monitors the deployment to meet early success criteria. You must also specify ``healthyPercent`` and ``sourceServiceRevisionCleanup``.
* **HealthyPercent**: int: The percentage of healthy tasks that the target service revision must reach before Amazon ECS considers the deployment successful. This percentage is relative to the service's ``desiredCount`` and must be an integer between ``0`` and ``100``. This value must be greater than or equal to the ``minimumHealthyPercent`` value.
 After this percentage of tasks is healthy and the bake time elapses, Amazon ECS completes the deployment. Amazon ECS continues to scale the target service revision to 100 percent in the background.
* **SourceServiceRevisionCleanup**: string: The time when Amazon ECS removes the source revisions' tasks relative to deployment completion. The valid values are:
  +  ``BLOCKING``—Amazon ECS removes the previous tasks before it marks the deployment as successful.
  +  ``DEFERRED``—Amazon ECS marks the deployment successful, and then removes the previous tasks in the background.

## DeploymentLifecycleHook
### Properties
* **HookDetails**: [Service_HookDetails](#servicehookdetails) | string: Use this field to specify custom parameters that ECS passes to your hook target invocations (such as a Lambda function).
 This field must be a JSON object as a string.
* **HookTargetArn**: string: The Amazon Resource Name (ARN) of the hook target. For ``AWS_LAMBDA`` hooks, this is the Lambda function ARN. This field is not applicable for ``PAUSE`` hooks.
 You must provide this parameter when configuring an ``AWS_LAMBDA`` lifecycle hook.
* **LifecycleStages**: string[] (Required): The lifecycle stages at which to run the hook. Choose from these valid values:
  +  RECONCILE_SERVICE
 The reconciliation stage that only happens when you start a new service deployment with more than 1 service revision in an ACTIVE state.
 You can use a lifecycle hook for this stage.
  +  PRE_SCALE_UP
 The green service revision has not started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
 You can use a lifecycle hook for this stage.
  +  POST_SCALE_UP
 The green service revision has started. The blue service revision is handling 100% of the production traffic. There is no test traffic.
 You can use a lifecycle hook for this stage.
  +  TEST_TRAFFIC_SHIFT
 The blue and green service revisions are running. The blue service revision handles 100% of the production traffic. The green service revision is migrating from 0% to 100% of test traffic.
 You can use a lifecycle hook for this stage.
  +  POST_TEST_TRAFFIC_SHIFT
 The test traffic shift is complete. The green service revision handles 100% of the test traffic.
 You can use a lifecycle hook for this stage.
  +  PRE_PRODUCTION_TRAFFIC_SHIFT
 Occurs before production traffic shift. For linear and canary deployments, this stage is invoked before every traffic shift step.
 You can use a lifecycle hook for this stage.
  +  PRODUCTION_TRAFFIC_SHIFT
 Production traffic is shifting to the green service revision. The green service revision is migrating from 0% to 100% of production traffic. For linear and canary deployments, this stage is invoked at every traffic shift step.
 You can use a lifecycle hook for this stage.
  +  POST_PRODUCTION_TRAFFIC_SHIFT
 The production traffic shift is complete.
 You can use a lifecycle hook for this stage.
  
  ``PAUSE`` hooks cannot be configured at ``TEST_TRAFFIC_SHIFT`` or ``PRODUCTION_TRAFFIC_SHIFT`` stages. These stages are only valid for ``AWS_LAMBDA`` hooks.
  You must provide this parameter when configuring a deployment lifecycle hook.
* **RoleArn**: string: The Amazon Resource Name (ARN) of the IAM role that grants Amazon ECS permission to call Lambda functions on your behalf.
 For more information, see [Permissions required for Lambda functions in Amazon ECS blue/green deployments](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/blue-green-permissions.html) in the *Amazon Elastic Container Service Developer Guide*.
* **TargetType**: string: The type of action the lifecycle hook performs. Valid values are:
  +  ``AWS_LAMBDA`` - Invokes a Lambda function at the specified lifecycle stage. This is the default value.
  +  ``PAUSE`` - Pauses the deployment at the specified lifecycle stage until you call ``ContinueServiceDeployment`` to continue or roll back.
  
 This field is optional. If not specified, the default value is ``AWS_LAMBDA``.
* **TimeoutConfiguration**: [HookTimeoutConfig](#hooktimeoutconfig): The timeout configuration for the lifecycle hook. This specifies how long Amazon ECS waits before taking the timeout action if the hook is not resolved.

## Device
### Properties
* **ContainerPath**: string: The path inside the container at which to expose the host device.
* **HostPath**: string: The path for the device on the host container instance.
* **Permissions**: string[]: The explicit permissions to provide to the container for the device. By default, the container has permissions for ``read``, ``write``, and ``mknod`` for the device.

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
* **PropagateTags**: string: Determines whether to propagate the tags from the task definition to the Amazon EBS volume. Tags can only propagate to a ``SERVICE`` specified in ``ServiceVolumeConfiguration``. If no value is specified, the tags aren't propagated.
* **ResourceType**: string (Required): The type of volume resource.
* **Tags**: [Tag](#tag)[]: The tags applied to this Amazon EBS volume. ``AmazonECSCreated`` and ``AmazonECSManaged`` are reserved tags that can't be used.

## ECSManagedResourceArns
### Properties
* **AutoScaling**: [AutoScalingArns](#autoscalingarns) (ReadOnly)
* **IngressPath**: [IngressPathArns](#ingresspatharns) (ReadOnly)
* **LogGroups**: string[] (ReadOnly)
* **MetricAlarms**: string[] (ReadOnly)
* **ServiceSecurityGroups**: string[] (ReadOnly)

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

## EnvironmentFile
### Properties
* **Type**: string: The file type to use. Environment files are objects in Amazon S3. The only supported value is ``s3``.
* **Value**: string: The Amazon Resource Name (ARN) of the Amazon S3 object containing the environment variable file.

## EphemeralStorage
### Properties
* **SizeInGiB**: int: The total amount, in GiB, of ephemeral storage to set for the task. The minimum supported value is ``21`` GiB and the maximum supported value is ``200`` GiB.

## ExecuteCommandConfiguration
### Properties
* **KmsKeyId**: string: Specify an KMSlong key ID to encrypt the data between the local client and the container.
* **LogConfiguration**: [ExecuteCommandLogConfiguration](#executecommandlogconfiguration): The log configuration for the results of the execute command actions. The logs can be sent to CloudWatch Logs or an Amazon S3 bucket. When ``logging=OVERRIDE`` is specified, a ``logConfiguration`` must be provided.
* **Logging**: string: The log setting to use for redirecting logs for your execute command results. The following log settings are available.
  +  ``NONE``: The execute command session is not logged.
  +  ``DEFAULT``: The ``awslogs`` configuration in the task definition is used. If no logging parameter is specified, it defaults to this value. If no ``awslogs`` log driver is configured in the task definition, the output won't be logged.
  +  ``OVERRIDE``: Specify the logging details as a part of ``logConfiguration``. If the ``OVERRIDE`` logging option is specified, the ``logConfiguration`` is required.

## ExecuteCommandLogConfiguration
### Properties
* **CloudWatchEncryptionEnabled**: bool: Determines whether to use encryption on the CloudWatch logs. If not specified, encryption will be off.
* **CloudWatchLogGroupName**: string: The name of the CloudWatch log group to send logs to.
  The CloudWatch log group must already be created.
* **S3BucketName**: string: The name of the S3 bucket to send logs to.
  The S3 bucket must already be created.
* **S3EncryptionEnabled**: bool: Determines whether to use encryption on the S3 logs. If not specified, encryption is not used.
* **S3KeyPrefix**: string: An optional folder in the S3 bucket to place logs in.

## ExpressGatewayContainer
### Properties
* **AwsLogsConfiguration**: [ExpressGatewayServiceAwsLogsConfiguration](#expressgatewayserviceawslogsconfiguration)
* **Command**: string[]
* **ContainerPort**: int
* **Environment**: [KeyValuePair](#keyvaluepair)[]
* **Image**: string (Required)
* **RepositoryCredentials**: [ExpressGatewayRepositoryCredentials](#expressgatewayrepositorycredentials)
* **Secrets**: [Secret](#secret)[]

## ExpressGatewayRepositoryCredentials
### Properties
* **CredentialsParameter**: string (Required)

## ExpressGatewayScalingTarget
### Properties
* **AutoScalingMetric**: string
* **AutoScalingTargetValue**: int
* **MaxTaskCount**: int
* **MinTaskCount**: int

## ExpressGatewayServiceAwsLogsConfiguration
### Properties
* **LogGroup**: string (Required)
* **LogStreamPrefix**: string (Required)

## ExpressGatewayServiceConfiguration
### Properties
* **Cpu**: string
* **CreatedAt**: string
* **ExecutionRoleArn**: string
* **HealthCheckPath**: string
* **IngressPaths**: [IngressPathSummary](#ingresspathsummary)[]
* **Memory**: string
* **NetworkConfiguration**: [ExpressGatewayServiceNetworkConfiguration](#expressgatewayservicenetworkconfiguration)
* **PrimaryContainer**: [ExpressGatewayContainer](#expressgatewaycontainer)
* **ScalingTarget**: [ExpressGatewayScalingTarget](#expressgatewayscalingtarget)
* **ServiceRevisionArn**: string
* **TaskDefinitionArn**: string
* **TaskRoleArn**: string

## ExpressGatewayServiceNetworkConfiguration
### Properties
* **SecurityGroups**: string[]
* **Subnets**: string[]

## ExpressGatewayServiceStatus
### Properties
* **StatusCode**: string

## FirelensConfiguration
### Properties
* **Options**: [DaemonTaskDefinition_Options](#daemontaskdefinitionoptions): The options to use when configuring the log router. This field is optional and can be used to specify a custom configuration file or to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event. If specified, the syntax to use is ``"options":{"enable-ecs-log-metadata":"true|false","config-file-type:"s3|file","config-file-value":"arn:aws:s3:::mybucket/fluent.conf|filepath"}``. For more information, see [Creating a task definition that uses a FireLens configuration](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html#firelens-taskdef) in the *Amazon Elastic Container Service Developer Guide*.
  Tasks hosted on FARGATElong only support the ``file`` configuration file type.
* **Type**: string: The log router to use. The valid values are ``fluentd`` or ``fluentbit``.

## FirelensConfiguration
### Properties
* **Options**: [TaskDefinition_Options](#taskdefinitionoptions): The options to use when configuring the log router. This field is optional and can be used to add additional metadata, such as the task, task definition, cluster, and container instance details to the log event.
  If specified, valid option keys are:
  +  ``enable-ecs-log-metadata``, which can be ``true`` or ``false``
  +  ``config-file-type``, which can be ``s3`` or ``file``
  +  ``config-file-value``, which is either an S3 ARN or a file path
* **Type**: string: The log router to use. The valid values are ``fluentd`` or ``fluentbit``.

## ForceNewDeployment
### Properties
* **EnableForceNewDeployment**: bool (Required): Determines whether to force a new deployment of the service. By default, deployments aren't forced. You can use this option to start a new deployment with no service definition changes. For example, you can update a service's tasks to use a newer Docker image with the same image/tag combination (``my_image:latest``) or to roll Fargate tasks onto a newer platform version.
* **ForceNewDeploymentNonce**: string: When you change the``ForceNewDeploymentNonce`` value in your template, it signals ECS to start a new deployment even though no other service parameters have changed. The value must be a unique, time- varying value like a timestamp, random string, or sequence number. Use this property when you want to ensure your tasks pick up the latest version of a Docker image that uses the same tag but has been updated in the registry.

## FSxAuthorizationConfig
### Properties
* **CredentialsParameter**: string (Required): The authorization credential option to use. The authorization credential options can be provided using either the Amazon Resource Name (ARN) of an ASMlong secret or SSM Parameter Store parameter. The ARN refers to the stored credentials.
* **Domain**: string (Required): A fully qualified domain name hosted by an [](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) Managed Microsoft AD (Active Directory) or self-hosted AD on Amazon EC2.

## FSxWindowsFileServerVolumeConfiguration
### Properties
* **AuthorizationConfig**: [FSxAuthorizationConfig](#fsxauthorizationconfig): The authorization configuration details for the Amazon FSx for Windows File Server file system.
* **FileSystemId**: string (Required): The Amazon FSx for Windows File Server file system ID to use.
* **RootDirectory**: string (Required): The directory within the Amazon FSx for Windows File Server file system to mount as the root directory inside the host.

## GatewayAlbTestTrafficRules
### Properties
* **Header**: [GatewayTestTrafficHeader](#gatewaytesttrafficheader)

## GatewayConfiguration
### Properties
* **HostSharedAlb**: [HostSharedAlbConfiguration](#hostsharedalbconfiguration) (Required)

## GatewayConnector
### Properties
* **Filters**: [GatewayConnectorFilters](#gatewayconnectorfilters)
* **HealthCheck**: [GatewayConnectorHealthCheck](#gatewayconnectorhealthcheck)
* **PortName**: string (Required)

## GatewayConnectorFilters
### Properties
* **AccessTypes**: string[]

## GatewayConnectorHealthCheck
### Properties
* **HealthCheckIntervalSeconds**: int
* **HealthCheckPath**: string
* **HealthCheckPort**: int
* **HealthCheckProtocol**: string
* **HealthCheckTimeoutSeconds**: int
* **HealthyThresholdCount**: int
* **Matcher**: [GatewayConnectorHealthCheckMatcher](#gatewayconnectorhealthcheckmatcher)
* **UnhealthyThresholdCount**: int

## GatewayConnectorHealthCheckMatcher
### Properties
* **GrpcCode**: string
* **HttpCode**: string

## GatewayElbAccessLogConfiguration
### Properties
* **Destination**: [GatewayElbAccessLogDestination](#gatewayelbaccesslogdestination)

## GatewayElbAccessLogDestination
### Properties
* **S3**: [GatewayElbAccessLogS3Destination](#gatewayelbaccesslogs3destination) (Required)

## GatewayElbAccessLogS3Destination
### Properties
* **Bucket**: string (Required): The S3 bucket for access logs.
* **Prefix**: string: The S3 prefix for access logs.

## GatewayElbNetworkConfiguration
### Properties
* **InboundSecurityGroup**: string: The inbound security group for the ALB.
* **IpAddressType**: string
* **Subnets**: string[]: The subnets for the ALB.

## GatewayTestTrafficHeader
### Properties
* **Name**: string (Required): The name of the header.
* **Values**: string[] (Required): The values for the header.

## HealthCheck
### Properties
* **Command**: string[]: A string array representing the command that the container runs to determine if it is healthy. The string array must start with ``CMD`` to run the command arguments directly, or ``CMD-SHELL`` to run the command with the container's default shell. 
  When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.
  ``[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`` 
 You don't include the double quotes and brackets when you use the AWS Management Console.
  ``CMD-SHELL, curl -f http://localhost/ || exit 1`` 
 An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see ``HealthCheck`` in the docker container create command.
* **Interval**: int: The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a ``command``.
* **Retries**: int: The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a ``command``.
* **StartPeriod**: int: The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the ``startPeriod`` is off. This value applies only when you specify a ``command``. 
  If a health check succeeds within the ``startPeriod``, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
* **Timeout**: int: The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a ``command``.

## HealthCheck
### Properties
* **Command**: string[]: A string array representing the command that the container runs to determine if it is healthy. The string array must start with ``CMD`` to run the command arguments directly, or ``CMD-SHELL`` to run the command with the container's default shell. 
  When you use the AWS Management Console JSON panel, the CLIlong, or the APIs, enclose the list of commands in double quotes and brackets.
  ``[ "CMD-SHELL", "curl -f http://localhost/ || exit 1" ]`` 
 You don't include the double quotes and brackets when you use the AWS Management Console.
  ``CMD-SHELL, curl -f http://localhost/ || exit 1`` 
 An exit code of 0 indicates success, and non-zero exit code indicates failure. For more information, see ``HealthCheck`` in the docker container create command.
* **Interval**: int: The time period in seconds between each health check execution. You may specify between 5 and 300 seconds. The default value is 30 seconds. This value applies only when you specify a ``command``.
* **Retries**: int: The number of times to retry a failed health check before the container is considered unhealthy. You may specify between 1 and 10 retries. The default value is 3. This value applies only when you specify a ``command``.
* **StartPeriod**: int: The optional grace period to provide containers time to bootstrap before failed health checks count towards the maximum number of retries. You can specify between 0 and 300 seconds. By default, the ``startPeriod`` is off. This value applies only when you specify a ``command``. 
  If a health check succeeds within the ``startPeriod``, then the container is considered healthy and any subsequent failures count toward the maximum number of retries.
* **Timeout**: int: The time period in seconds to wait for a health check to succeed before it is considered a failure. You may specify between 2 and 60 seconds. The default value is 5. This value applies only when you specify a ``command``.

## HookTimeoutConfig
### Properties
* **Action**: string
* **TimeoutInMinutes**: int

## HostEntry
### Properties
* **Hostname**: string: The hostname to use in the ``/etc/hosts`` entry.
* **IpAddress**: string: The IP address to use in the ``/etc/hosts`` entry.

## HostSharedAlbConfiguration
### Properties
* **AccessLogs**: [GatewayElbAccessLogConfiguration](#gatewayelbaccesslogconfiguration)
* **CurrentAlbCount**: int (ReadOnly): The current number of ALBs provisioned for the gateway.
* **HttpDesync**: string
* **MaxAlbCount**: int: The maximum number of ALBs to provision for the gateway.
* **NetworkConfiguration**: [GatewayElbNetworkConfiguration](#gatewayelbnetworkconfiguration)
* **Port**: int: The port on which the ALB listens.
* **Protocol**: string
* **Scheme**: string
* **TestTrafficRules**: [GatewayAlbTestTrafficRules](#gatewayalbtesttrafficrules)
* **WebACLArn**: string: The ARN of the WAFv2 web ACL to associate with the ALB.

## HostVolumeProperties
### Properties
* **SourcePath**: string: When the ``host`` parameter is used, specify a ``sourcePath`` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the ``host`` parameter contains a ``sourcePath`` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the ``sourcePath`` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
 If you're using the Fargate launch type, the ``sourcePath`` parameter is not supported.

## HostVolumeProperties
### Properties
* **SourcePath**: string: When the ``host`` parameter is used, specify a ``sourcePath`` to declare the path on the host container instance that's presented to the container. If this parameter is empty, then the Docker daemon has assigned a host path for you. If the ``host`` parameter contains a ``sourcePath`` file location, then the data volume persists at the specified location on the host container instance until you delete it manually. If the ``sourcePath`` value doesn't exist on the host container instance, the Docker daemon creates it. If the location does exist, the contents of the source path folder are exported.
 If you're using the Fargate launch type, the ``sourcePath`` parameter is not supported.

## InferenceAccelerator
### Properties
* **DeviceName**: string
* **DeviceType**: string

## IngressPathArns
### Properties
* **CertificateArn**: string (ReadOnly)
* **ListenerArn**: string (ReadOnly)
* **ListenerRuleArn**: string (ReadOnly)
* **LoadBalancerArn**: string (ReadOnly)
* **LoadBalancerSecurityGroups**: string[] (ReadOnly)
* **TargetGroupArns**: string[] (ReadOnly)

## IngressPathSummary
### Properties
* **AccessType**: string
* **Endpoint**: string

## InstanceLaunchTemplate
### Properties
* **CapacityOptionType**: string
* **CapacityReservations**: [CapacityReservationRequest](#capacityreservationrequest)
* **Ec2InstanceProfileArn**: string (Required)
* **FipsEnabled**: bool
* **InstanceMetadataTagsPropagation**: bool
* **InstanceRequirements**: [InstanceRequirementsRequest](#instancerequirementsrequest)
* **LocalStorageConfiguration**: [ManagedInstancesLocalStorageConfiguration](#managedinstanceslocalstorageconfiguration)
* **Monitoring**: string
* **NetworkConfiguration**: [ManagedInstancesNetworkConfiguration](#managedinstancesnetworkconfiguration) (Required)
* **StorageConfiguration**: [ManagedInstancesStorageConfiguration](#managedinstancesstorageconfiguration)

## InstanceRequirementsRequest
### Properties
* **AcceleratorCount**: [AcceleratorCountRequest](#acceleratorcountrequest)
* **AcceleratorManufacturers**: string[]
* **AcceleratorNames**: string[]
* **AcceleratorTotalMemoryMiB**: [AcceleratorTotalMemoryMiBRequest](#acceleratortotalmemorymibrequest)
* **AcceleratorTypes**: string[]
* **AllowedInstanceTypes**: string[]
* **BareMetal**: string
* **BaselineEbsBandwidthMbps**: [BaselineEbsBandwidthMbpsRequest](#baselineebsbandwidthmbpsrequest)
* **BurstablePerformance**: string
* **CpuManufacturers**: string[]
* **ExcludedInstanceTypes**: string[]
* **InstanceGenerations**: string[]
* **LocalStorage**: string
* **LocalStorageTypes**: string[]
* **MaxSpotPriceAsPercentageOfOptimalOnDemandPrice**: int
* **MemoryGiBPerVCpu**: [MemoryGiBPerVCpuRequest](#memorygibpervcpurequest)
* **MemoryMiB**: [MemoryMiBRequest](#memorymibrequest) (Required)
* **NetworkBandwidthGbps**: [NetworkBandwidthGbpsRequest](#networkbandwidthgbpsrequest)
* **NetworkInterfaceCount**: [NetworkInterfaceCountRequest](#networkinterfacecountrequest)
* **OnDemandMaxPricePercentageOverLowestPrice**: int
* **RequireHibernateSupport**: bool
* **SpotMaxPricePercentageOverLowestPrice**: int
* **TotalLocalStorageGB**: [TotalLocalStorageGBRequest](#totallocalstoragegbrequest)
* **VCpuCount**: [VCpuCountRangeRequest](#vcpucountrangerequest) (Required)

## KernelCapabilities
### Properties
* **Add**: string[]: The Linux capabilities for the container that have been added to the default configuration provided by Docker. This parameter maps to ``CapAdd`` in the docker container create command and the ``--cap-add`` option to docker run.
  Tasks launched on FARGATElong only support adding the ``SYS_PTRACE`` kernel capability.
  Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``
* **Drop**: string[]: The Linux capabilities for the container that have been removed from the default configuration provided by Docker. This parameter maps to ``CapDrop`` in the docker container create command and the ``--cap-drop`` option to docker run.
 Valid values: ``"ALL" | "AUDIT_CONTROL" | "AUDIT_WRITE" | "BLOCK_SUSPEND" | "CHOWN" | "DAC_OVERRIDE" | "DAC_READ_SEARCH" | "FOWNER" | "FSETID" | "IPC_LOCK" | "IPC_OWNER" | "KILL" | "LEASE" | "LINUX_IMMUTABLE" | "MAC_ADMIN" | "MAC_OVERRIDE" | "MKNOD" | "NET_ADMIN" | "NET_BIND_SERVICE" | "NET_BROADCAST" | "NET_RAW" | "SETFCAP" | "SETGID" | "SETPCAP" | "SETUID" | "SYS_ADMIN" | "SYS_BOOT" | "SYS_CHROOT" | "SYS_MODULE" | "SYS_NICE" | "SYS_PACCT" | "SYS_PTRACE" | "SYS_RAWIO" | "SYS_RESOURCE" | "SYS_TIME" | "SYS_TTY_CONFIG" | "SYSLOG" | "WAKE_ALARM"``

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

## KeyValuePair
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## KeyValuePair
### Properties
* **Name**: string: The name of the key-value pair. For environment variables, this is the name of the environment variable.
* **Value**: string: The value of the key-value pair. For environment variables, this is the value of the environment variable.

## LinearConfiguration
### Properties
* **StepBakeTimeInMinutes**: int: The amount of time in minutes to wait between each traffic shifting step during a linear deployment. Valid values are 0 to 1440 minutes (24 hours). The default value is 6. This bake time is not applied after reaching 100 percent traffic.
* **StepPercent**: int: The percentage of production traffic to shift in each step during a linear deployment. Valid values are multiples of 0.1 from 3.0 to 100.0. The default value is 10.0.

## LinuxParameters
### Properties
* **Capabilities**: [KernelCapabilities](#kernelcapabilities): The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
  For tasks that use the Fargate launch type, ``capabilities`` is supported for all platform versions but the ``add`` parameter is only supported if using platform version 1.4.0 or later.
* **Devices**: [Device](#device)[]: Any host devices to expose to the container. This parameter maps to ``Devices`` in the docker container create command and the ``--device`` option to docker run.
  If you're using tasks that use the Fargate launch type, the ``devices`` parameter isn't supported.
* **InitProcessEnabled**: bool: Run an ``init`` process inside the container that forwards signals and reaps processes. This parameter maps to the ``--init`` option to docker run. This parameter requires version 1.25 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **Tmpfs**: [Tmpfs](#tmpfs)[]: The container path, mount options, and size (in MiB) of the tmpfs mount. This parameter maps to the ``--tmpfs`` option to docker run.

## LinuxParameters
### Properties
* **Capabilities**: [KernelCapabilities](#kernelcapabilities): The Linux capabilities for the container that are added to or dropped from the default configuration provided by Docker.
  For tasks that use the Fargate launch type, ``capabilities`` is supported for all platform versions but the ``add`` parameter is only supported if using platform version 1.4.0 or later.
* **Devices**: [Device](#device)[]: Any host devices to expose to the container. This parameter maps to ``Devices`` in the docker container create command and the ``--device`` option to docker run.
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

## LoadBalancer
### Properties
* **AdvancedConfiguration**: [AdvancedConfiguration](#advancedconfiguration): The advanced settings for the load balancer used in blue/green deployments. Specify the alternate target group, listener rules, and IAM role required for traffic shifting during blue/green deployments.
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
* **LogDriver**: string (Required): The log driver to use for the container.
 For tasks on FARGATElong, the supported log drivers are ``awslogs``, ``splunk``, and ``awsfirelens``.
 For tasks hosted on Amazon EC2 instances, the supported log drivers are ``awslogs``, ``fluentd``, ``gelf``, ``json-file``, ``journald``, ``syslog``, ``splunk``, and ``awsfirelens``.
 For more information about using the ``awslogs`` log driver, see [Send Amazon ECS logs to CloudWatch](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_awslogs.html) in the *Amazon Elastic Container Service Developer Guide*.
 For more information about using the ``awsfirelens`` log driver, see [Send Amazon ECS logs to an service or Partner](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/using_firelens.html).
  If you have a custom driver that isn't listed, you can fork the Amazon ECS container agent project that's [available on GitHub](https://docs.aws.amazon.com/https://github.com/aws/amazon-ecs-agent) and customize it to work with that driver. We encourage you to submit pull requests for changes that you would like to have included. However, we don't currently provide support for running modified copies of this software.
* **Options**: [DaemonTaskDefinition_Options](#daemontaskdefinitionoptions): The configuration options to send to the log driver.
 The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
  + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. 
 The following options apply to all supported log drivers.
  + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. 
 To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
 When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
 Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
 When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
  When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
 When you export logs to Amazon S3, you can specify the bucket using the ``bucket`` option. You can also specify ``region``, ``total_file_size``, ``upload_timeout``, and ``use_put_object`` as options.
 This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **SecretOptions**: [Secret](#secret)[]: The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.

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
  + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. 
 The following options apply to all supported log drivers.
  + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. 
 To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
 When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
 Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
 When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
  When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
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
* **Options**: [TaskDefinition_Options](#taskdefinitionoptions): The configuration options to send to the log driver.
 The options you can specify depend on the log driver. Some of the options you can specify when you use the ``awslogs`` log driver to route logs to Amazon CloudWatch include the following:
  + awslogs-create-group Required: No Specify whether you want the log group to be created automatically. If this option isn't specified, it defaults to false. Your IAM policy must include the logs:CreateLogGroup permission before you attempt to use awslogs-create-group. + awslogs-region Required: Yes Specify the Region that the awslogs log driver is to send your Docker logs to. You can choose to send all of your logs from clusters in different Regions to a single region in CloudWatch Logs. This is so that they're all visible in one location. Otherwise, you can separate them by Region for more granularity. Make sure that the specified log group exists in the Region that you specify with this option. + awslogs-group Required: Yes Make sure to specify a log group that the awslogs log driver sends its log streams to. + awslogs-stream-prefix Required: Yes, when using Fargate.Optional when using EC2. Use the awslogs-stream-prefix option to associate a log stream with the specified prefix, the container name, and the ID of the Amazon ECS task that the container belongs to. If you specify a prefix with this option, then the log stream takes the format prefix-name/container-name/ecs-task-id. If you don't specify a prefix with this option, then the log stream is named after the container ID that's assigned by the Docker daemon on the container instance. Because it's difficult to trace logs back to the container that sent them with just the Docker container ID (which is only available on the container instance), we recommend that you specify a prefix with this option. For Amazon ECS services, you can use the service name as the prefix. Doing so, you can trace log streams to the service that the container belongs to, the name of the container that sent them, and the ID of the task that the container belongs to. You must specify a stream-prefix for your logs to have your logs appear in the Log pane when using the Amazon ECS console. + awslogs-datetime-format Required: No This option defines a multiline start pattern in Python strftime format. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. One example of a use case for using this format is for parsing output such as a stack dump, which might otherwise be logged in multiple entries. The correct pattern allows it to be captured in a single entry. For more information, see awslogs-datetime-format. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. + awslogs-multiline-pattern Required: No This option defines a multiline start pattern that uses a regular expression. A log message consists of a line that matches the pattern and any following lines that don’t match the pattern. The matched line is the delimiter between log messages. For more information, see awslogs-multiline-pattern. This option is ignored if awslogs-datetime-format is also configured. You cannot configure both the awslogs-datetime-format and awslogs-multiline-pattern options. Multiline logging performs regular expression parsing and matching of all log messages. This might have a negative impact on logging performance. 
 The following options apply to all supported log drivers.
  + mode Required: No Valid values: non-blocking | blocking This option defines the delivery mode of log messages from the container to the log driver specified using logDriver. The delivery mode you choose affects application availability when the flow of logs from container is interrupted. If you use the blocking mode and the flow of logs is interrupted, calls from container code to write to the stdout and stderr streams will block. The logging thread of the application will block as a result. This may cause the application to become unresponsive and lead to container healthcheck failure. If you use the non-blocking mode, the container's logs are instead stored in an in-memory intermediate buffer configured with the max-buffer-size option. This prevents the application from becoming unresponsive when logs cannot be sent. We recommend using this mode if you want to ensure service availability and are okay with some log loss. For more information, see Preventing log loss with non-blocking mode in the awslogs container log driver. You can set a default mode for all containers in a specific Region by using the defaultLogDriverMode account setting. If you don't specify the mode option or configure the account setting, Amazon ECS will default to the non-blocking mode. For more information about the account setting, see Default log driver mode in the Amazon Elastic Container Service Developer Guide. On June 25, 2025, Amazon ECS changed the default log driver mode from blocking to non-blocking to prioritize task availability over logging. To continue using the blocking mode after this change, do one of the following: Set the mode option in your container definition's logConfiguration as blocking. Set the defaultLogDriverMode account setting to blocking. + max-buffer-size Required: No Default value: 10m When non-blocking mode is used, the max-buffer-size log option controls the size of the buffer that's used for intermediate message storage. Make sure to specify an adequate buffer size based on your application. When the buffer fills up, further logs cannot be stored. Logs that cannot be stored are lost. 
 To route logs using the ``splunk`` log router, you need to specify a ``splunk-token`` and a ``splunk-url``.
 When you use the ``awsfirelens`` log router to route logs to an AWS Service or AWS Partner Network destination for log storage and analytics, you can set the ``log-driver-buffer-limit`` option to limit the number of events that are buffered in memory, before being sent to the log router container. It can help to resolve potential log loss issue because high throughput might result in memory running out for the buffer inside of Docker.
 Other options you can specify when using ``awsfirelens`` to route logs depend on the destination. When you export logs to Amazon Data Firehose, you can specify the AWS Region with ``region`` and a name for the log stream with ``delivery_stream``.
 When you export logs to Amazon Kinesis Data Streams, you can specify an AWS Region with ``region`` and a data stream name with ``stream``.
  When you export logs to Amazon OpenSearch Service, you can specify options like ``Name``, ``Host`` (OpenSearch Service endpoint without protocol), ``Port``, ``Index``, ``Type``, ``Aws_auth``, ``Aws_region``, ``Suppress_Type_Name``, and ``tls``. For more information, see [Under the hood: FireLens for Amazon ECS Tasks](https://docs.aws.amazon.com/containers/under-the-hood-firelens-for-amazon-ecs-tasks/).
 When you export logs to Amazon S3, you can specify the bucket using the ``bucket`` option. You can also specify ``region``, ``total_file_size``, ``upload_timeout``, and ``use_put_object`` as options.
 This parameter requires version 1.19 of the Docker Remote API or greater on your container instance. To check the Docker Remote API version on your container instance, log in to your container instance and run the following command: ``sudo docker version --format '{{.Server.APIVersion}}'``
* **SecretOptions**: [Secret](#secret)[]: The secrets to pass to the log configuration. For more information, see [Specifying sensitive data](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html) in the *Amazon Elastic Container Service Developer Guide*.

## ManagedInstancesLocalStorageConfiguration
### Properties
* **UseLocalStorage**: bool

## ManagedInstancesNetworkConfiguration
### Properties
* **SecurityGroups**: string[] (Required)
* **Subnets**: string[] (Required)

## ManagedInstancesProvider
### Properties
* **AutoRepairConfiguration**: [AutoRepairConfiguration](#autorepairconfiguration)
* **InfrastructureOptimization**: [CapacityProvider_InfrastructureOptimization](#capacityproviderinfrastructureoptimization): Defines how Amazon ECS Managed Instances optimizes the infrastructure in your capacity provider. Configure it to turn on or off the infrastructure optimization in your capacity provider, and to control the idle EC2 instances optimization delay.
* **InfrastructureRoleArn**: string (Required)
* **InstanceLaunchTemplate**: [InstanceLaunchTemplate](#instancelaunchtemplate) (Required)
* **PropagateTags**: string

## ManagedInstancesStorageConfiguration
### Properties
* **StorageSizeGiB**: int (Required)

## ManagedScaling
### Properties
* **InstanceWarmupPeriod**: int
* **MaximumScalingStepSize**: int
* **MinimumScalingStepSize**: int
* **Status**: string
* **TargetCapacity**: int

## ManagedStorageConfiguration
### Properties
* **FargateEphemeralStorageKmsKeyId**: string: Specify the KMSlong key ID for Fargate ephemeral storage.
 When you specify a ``fargateEphemeralStorageKmsKeyId``, AWS Fargate uses the key to encrypt data at rest in ephemeral storage. For more information about Fargate ephemeral storage encryption, see [Customer managed keys for Fargate ephemeral storage for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/fargate-storage-encryption.html) in the *Amazon Elastic Container Service Developer Guide*.
 The key must be a single Region key.
* **KmsKeyId**: string: Specify a KMSlong key ID to encrypt Amazon ECS managed storage.
  When you specify a ``kmsKeyId``, Amazon ECS uses the key to encrypt data volumes managed by Amazon ECS that are attached to tasks in the cluster. The following data volumes are managed by Amazon ECS: Amazon EBS. For more information about encryption of Amazon EBS volumes attached to Amazon ECS tasks, see [Encrypt data stored in Amazon EBS volumes for Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html) in the *Amazon Elastic Container Service Developer Guide*.
 The key must be a single Region key.

## MemoryGiBPerVCpuRequest
### Properties
* **Max**: int
* **Min**: int

## MemoryMiBRequest
### Properties
* **Max**: int
* **Min**: int (Required)

## MetricConfiguration
### Properties
* **MetricNames**: string[] (Required): The list of metric names to configure. The supported metric names are ``CPUUtilization`` and ``MemoryUtilization``.
* **ResolutionSeconds**: int (Required): The resolution, in seconds, at which to collect the metrics. The valid values are ``20`` and ``60``.

## MonitoringConfiguration
### Properties
* **MetricConfigurations**: [MetricConfiguration](#metricconfiguration)[] (Required): The list of metric configurations for the service monitoring.

## MountPoint
### Properties
* **ContainerPath**: string: The path on the container to mount the host volume at.
* **ReadOnly**: bool: If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
* **SourceVolume**: string: The name of the volume to mount. Must be a volume name referenced in the ``name`` parameter of task definition ``volume``.

## MountPoint
### Properties
* **ContainerPath**: string: The path on the container to mount the host volume at.
* **ReadOnly**: bool: If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
* **SourceVolume**: string: The name of the volume to mount. Must be a volume name referenced in the ``name`` parameter of task definition ``volume``.

## NetworkBandwidthGbpsRequest
### Properties
* **Max**: int
* **Min**: int

## NetworkConfiguration
### Properties
* **AwsvpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration): The VPC subnets and security groups that are associated with a task.
  All specified subnets and security groups must be from the same VPC.

## NetworkConfiguration
### Properties
* **AwsVpcConfiguration**: [AwsVpcConfiguration](#awsvpcconfiguration)

## NetworkInterfaceCountRequest
### Properties
* **Max**: int
* **Min**: int

## NvidiaMpsAllocation
### Properties
* **MaxComputePercent**: int: The maximum percentage of the GPU's compute capacity that the container can use.
* **Memory**: int (Required): The amount of GPU memory, in MiB, allocated to the container.

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
* **Name**: string: The name that's used for the port mapping. This parameter is the name that you use in the ``serviceConnectConfiguration`` and the ``vpcLatticeConfigurations`` of a service. The name can include up to 64 characters. The characters can include lowercase letters, numbers, underscores (_), and hyphens (-). The name can't start with a hyphen.
* **Protocol**: string: The protocol that's used for the port mapping. Valid values are ``tcp`` and ``udp`` (case-sensitive). The default is ``tcp``. Amazon ECS treats any other specified value as ``tcp``. ``protocol`` is immutable in a Service Connect service. To update this field, you must delete and redeploy the service.

## ProxyConfiguration
### Properties
* **ContainerName**: string (Required): The name of the container that will serve as the App Mesh proxy.
* **ProxyConfigurationProperties**: [KeyValuePair](#keyvaluepair)[]: The set of network configuration parameters to provide the Container Network Interface (CNI) plugin, specified as key-value pairs.
  +  ``IgnoredUID`` - (Required) The user ID (UID) of the proxy container as defined by the ``user`` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If ``IgnoredGID`` is specified, this field can be empty.
  +  ``IgnoredGID`` - (Required) The group ID (GID) of the proxy container as defined by the ``user`` parameter in a container definition. This is used to ensure the proxy ignores its own traffic. If ``IgnoredUID`` is specified, this field can be empty.
  +  ``AppPorts`` - (Required) The list of ports that the application uses. Network traffic to these ports is forwarded to the ``ProxyIngressPort`` and ``ProxyEgressPort``.
  +  ``ProxyIngressPort`` - (Required) Specifies the port that incoming traffic to the ``AppPorts`` is directed to.
  +  ``ProxyEgressPort`` - (Required) Specifies the port that outgoing traffic from the ``AppPorts`` is directed to.
  +  ``EgressIgnoredPorts`` - (Required) The egress traffic going to the specified ports is ignored and not redirected to the ``ProxyEgressPort``. It can be an empty list.
  +  ``EgressIgnoredIPs`` - (Required) The egress traffic going to the specified IP addresses is ignored and not redirected to the ``ProxyEgressPort``. It can be an empty list.
* **Type**: string: The proxy type. The only supported value is ``APPMESH``.

## RepositoryCredentials
### Properties
* **CredentialsParameter**: string: The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
  When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.

## RepositoryCredentials
### Properties
* **CredentialsParameter**: string: The Amazon Resource Name (ARN) of the secret containing the private repository credentials.
  When you use the Amazon ECS API, CLI, or AWS SDK, if the secret exists in the same Region as the task that you're launching then you can use either the full ARN or the name of the secret. When you use the AWS Management Console, you must specify the full ARN of the secret.

## ResourceRequirement
### Properties
* **SharingStrategy**: [SharingStrategy](#sharingstrategy)
* **Type**: string (Required): The type of resource to assign to a container.
* **Value**: string: The value for the specified resource type.
 When the type is ``GPU``, the value is the number of physical ``GPUs`` the Amazon ECS container agent reserves for the container. The number of GPUs that's reserved for all containers in a task can't exceed the number of available GPUs on the container instance that the task is launched on. You can also specify ``ALL`` to allocate all available GPUs on the instance to the container.
 When the type is ``NeuronDevice``, the value must be ``ALL``. This allocates all available Neuron devices on the instance to the container. Only one container in a task can specify ``NeuronDevice`` resources. This resource type is only supported on Managed Instances.
 When the type is ``InferenceAccelerator``, the ``value`` matches the ``deviceName`` for an [InferenceAccelerator](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_InferenceAccelerator.html) specified in a task definition.

## RestartPolicy
### Properties
* **Enabled**: bool
* **IgnoredExitCodes**: int[]
* **RestartAttemptPeriod**: int

## RestartPolicy
### Properties
* **Enabled**: bool: Specifies whether a restart policy is enabled for the container.
* **IgnoredExitCodes**: int[]: A list of exit codes that Amazon ECS will ignore and not attempt a restart on. You can specify a maximum of 50 container exit codes. By default, Amazon ECS does not ignore any exit codes.
* **RestartAttemptPeriod**: int: A period of time (in seconds) that the container must run for before a restart can be attempted. A container can be restarted only once every ``restartAttemptPeriod`` seconds. If a container isn't able to run for this time period and exits early, it will not be restarted. You can set a minimum ``restartAttemptPeriod`` of 60 seconds and a maximum ``restartAttemptPeriod`` of 1800 seconds. By default, a container must run for 300 seconds before it can be restarted.

## RuntimePlatform
### Properties
* **CpuArchitecture**: string: The CPU architecture.
 You can run your Linux tasks on an ARM-based platform by setting the value to ``ARM64``. This option is available for tasks that run on Linux Amazon EC2 instance, Amazon ECS Managed Instances, or Linux containers on Fargate.
* **OperatingSystemFamily**: string: The operating system.

## S3FilesVolumeConfiguration
### Properties
* **AccessPointArn**: string: The full ARN of the S3 Files access point to use. If an access point is specified, the root directory value specified in the ``S3FilesVolumeConfiguration`` must either be omitted or set to ``/`` which will enforce the path set on the S3 Files access point. For more information, see [Creating S3 Files access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-access-points-creating.html).
* **FileSystemArn**: string (Required): The full ARN of the S3 Files file system to mount.
* **RootDirectory**: string: The directory within the Amazon S3 Files file system to mount as the root directory. If this parameter is omitted, the root of the Amazon S3 Files file system will be used. Specifying ``/`` will have the same effect as omitting this parameter.
  If a S3 Files access point is specified in the ``accessPointArn``, the root directory parameter must either be omitted or set to ``/`` which will enforce the path set on the S3 Files access point.
* **TransitEncryptionPort**: int: The port to use for sending encrypted data between the ECS host and the S3 Files file system. If you do not specify a transit encryption port, it will use the port selection strategy that the Amazon S3 Files mount helper uses. For more information, see [S3 Files mount helper](https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-files-mounting.html).

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
* **Name**: string (Required)
* **ValueFrom**: string (Required)

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

## ServiceConnectAccessLogConfiguration
### Properties
* **Format**: string (Required): The format for Service Connect access log output. Choose TEXT for human-readable logs or JSON for structured data that integrates well with log analysis tools.
* **IncludeQueryParameters**: string: Specifies whether to include query parameters in Service Connect access logs.
 When enabled, query parameters from HTTP requests are included in the access logs. Consider security and privacy implications when enabling this feature, as query parameters may contain sensitive information such as request IDs and tokens. By default, this parameter is ``DISABLED``.

## ServiceConnectClientAlias
### Properties
* **DnsName**: string: The ``dnsName`` is the name that you use in the applications of client tasks to connect to this service. The name must be a valid DNS name but doesn't need to be fully-qualified. The name can include up to 127 characters. The name can include lowercase letters, numbers, underscores (_), hyphens (-), and periods (.). The name can't start with a hyphen.
 If this parameter isn't specified, the default value of ``discoveryName.namespace`` is used. If the ``discoveryName`` isn't specified, the port mapping name from the task definition is used in ``portName.namespace``.
 To avoid changing your applications in client Amazon ECS services, set this to the same name that the client application uses by default. For example, a few common names are ``database``, ``db``, or the lowercase name of a database, such as ``mysql`` or ``redis``. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **Port**: int (Required): The listening port number for the Service Connect proxy. This port is available inside of all of the tasks within the same namespace.
 To avoid changing your applications in client Amazon ECS services, set this to the same port that the client application uses by default. For more information, see [Service Connect](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/service-connect.html) in the *Amazon Elastic Container Service Developer Guide*.
* **TestTrafficRules**: [ServiceConnectTestTrafficRules](#serviceconnecttesttrafficrules): The configuration for test traffic routing rules used during blue/green deployments with Amazon ECS Service Connect. This allows you to route a portion of traffic to the new service revision of your service for testing before shifting all production traffic.

## ServiceConnectConfiguration
### Properties
* **AccessLogConfiguration**: [ServiceConnectAccessLogConfiguration](#serviceconnectaccesslogconfiguration): The configuration for Service Connect access logging. Access logs capture detailed information about requests made to your service, including request patterns, response codes, and timing data. They can be useful for debugging connectivity issues, monitoring service performance, and auditing service-to-service communication for security and compliance purposes.
  To enable access logs, you must also specify a ``logConfiguration`` in the ``serviceConnectConfiguration``.
* **ContainerConfigurations**: [ServiceConnectContainerConfiguration](#serviceconnectcontainerconfiguration)[]
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

## ServiceConnectContainerConfiguration
### Properties
* **LogLevel**: string

## ServiceConnectDefaults
### Properties
* **Namespace**: string: The namespace name or full Amazon Resource Name (ARN) of the CMAPlong namespace that's used when you create a service and don't specify a Service Connect configuration. The namespace name can include up to 1024 characters. The name is case-sensitive. The name can't include greater than (>), less than (<), double quotation marks ("), or slash (/).
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

## ServiceConnectTestTrafficRules
### Properties
* **Header**: [ServiceConnectTestTrafficRulesHeader](#serviceconnecttesttrafficrulesheader) (Required): The HTTP header-based routing rules that determine which requests should be routed to the new service version during blue/green deployment testing. These rules provide fine-grained control over test traffic routing based on request headers.

## ServiceConnectTestTrafficRulesHeader
### Properties
* **Name**: string (Required)
* **Value**: [ServiceConnectTestTrafficRulesHeaderValue](#serviceconnecttesttrafficrulesheadervalue)

## ServiceConnectTestTrafficRulesHeaderValue
### Properties
* **Exact**: string (Required)

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
* **Encrypted**: bool: Indicates whether the volume should be encrypted. If you turn on Region-level Amazon EBS encryption by default but set this value as ``false``, the setting is overridden and the volume is encrypted with the KMS key specified for Amazon EBS encryption by default. This parameter maps 1:1 with the ``Encrypted`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **FilesystemType**: string: The filesystem type for the volume. For volumes created from a snapshot, you must specify the same filesystem type that the volume was using when the snapshot was created. If there is a filesystem type mismatch, the tasks will fail to start.
 The available Linux filesystem types are ``ext3``, ``ext4``, and ``xfs``. If no value is specified, the ``xfs`` filesystem type is used by default.
 The available Windows filesystem types are ``NTFS``.
* **Iops**: int: The number of I/O operations per second (IOPS). For ``gp3``, ``io1``, and ``io2`` volumes, this represents the number of IOPS that are provisioned for the volume. For ``gp2`` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
 The following are the supported values for each volume type.
  +  ``gp3``: 3,000 - 16,000 IOPS
  +  ``io1``: 100 - 64,000 IOPS
  +  ``io2``: 100 - 256,000 IOPS
  
 This parameter is required for ``io1`` and ``io2`` volume types. The default for ``gp3`` volumes is ``3,000 IOPS``. This parameter is not supported for ``st1``, ``sc1``, or ``standard`` volume types.
 This parameter maps 1:1 with the ``Iops`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) identifier of the AWS Key Management Service key to use for Amazon EBS encryption. When a key is specified using this parameter, it overrides Amazon EBS default encryption or any KMS key that you specified for cluster-level managed storage encryption. This parameter maps 1:1 with the ``KmsKeyId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*. For more information about encrypting Amazon EBS volumes attached to tasks, see [Encrypt data stored in Amazon EBS volumes attached to Amazon ECS tasks](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ebs-kms-encryption.html).
  AWS authenticates the AWS Key Management Service key asynchronously. Therefore, if you specify an ID, alias, or ARN that is invalid, the action can appear to complete, but eventually fails.
* **RoleArn**: string (Required): The ARN of the IAM role to associate with this volume. This is the Amazon ECS infrastructure IAM role that is used to manage your AWS infrastructure. We recommend using the Amazon ECS-managed ``AmazonECSInfrastructureRolePolicyForVolumes`` IAM policy with this role. For more information, see [Amazon ECS infrastructure IAM role](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/infrastructure_IAM_role.html) in the *Amazon ECS Developer Guide*.
* **SizeInGiB**: int: The size of the volume in GiB. You must specify either a volume size or a snapshot ID. If you specify a snapshot ID, the snapshot size is used for the volume size by default. You can optionally specify a volume size greater than or equal to the snapshot size. This parameter maps 1:1 with the ``Size`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
 The following are the supported volume size values for each volume type.
  +  ``gp2`` and ``gp3``: 1-16,384
  +  ``io1`` and ``io2``: 4-16,384
  +  ``st1`` and ``sc1``: 125-16,384
  +  ``standard``: 1-1,024
* **SnapshotId**: string: The snapshot that Amazon ECS uses to create volumes for attachment to tasks maintained by the service. You must specify either ``snapshotId`` or ``sizeInGiB`` in your volume configuration. This parameter maps 1:1 with the ``SnapshotId`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **TagSpecifications**: [EBSTagSpecification](#ebstagspecification)[]: The tags to apply to the volume. Amazon ECS applies service-managed tags by default. This parameter maps 1:1 with the ``TagSpecifications.N`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
* **Throughput**: int: The throughput to provision for a volume, in MiB/s, with a maximum of 1,000 MiB/s. This parameter maps 1:1 with the ``Throughput`` parameter of the [CreateVolume API](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateVolume.html) in the *Amazon EC2 API Reference*.
  This parameter is only supported for the ``gp3`` volume type.
* **VolumeInitializationRate**: int: The rate, in MiB/s, at which data is fetched from a snapshot of an existing EBS volume to create new volumes for attachment to the tasks maintained by the service. This property can be specified only if you specify a ``snapshotId``. For more information, see [Initialize Amazon EBS volumes](https://docs.aws.amazon.com/ebs/latest/userguide/initalize-volume.html) in the *Amazon EBS User Guide*.
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

## SharingStrategy
### Properties
* **NvidiaMps**: [NvidiaMpsAllocation](#nvidiampsallocation) (Required)

## SystemControl
### Properties
* **Namespace**: string: The namespaced kernel parameter to set a ``value`` for.
* **Value**: string: The namespaced kernel parameter to set a ``value`` for.
 Valid IPC namespace values: ``"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"``, and ``Sysctls`` that start with ``"fs.mqueue.*"``
 Valid network namespace values: ``Sysctls`` that start with ``"net.*"``. Only namespaced ``Sysctls`` that exist within the container starting with "net.* are accepted.
 All of these values are supported by Fargate.

## SystemControl
### Properties
* **Namespace**: string: The namespaced kernel parameter to set a ``value`` for.
* **Value**: string: The namespaced kernel parameter to set a ``value`` for.
 Valid IPC namespace values: ``"kernel.msgmax" | "kernel.msgmnb" | "kernel.msgmni" | "kernel.sem" | "kernel.shmall" | "kernel.shmmax" | "kernel.shmmni" | "kernel.shm_rmid_forced"``, and ``Sysctls`` that start with ``"fs.mqueue.*"``
 Valid network namespace values: ``Sysctls`` that start with ``"net.*"``. Only namespaced ``Sysctls`` that exist within the container starting with "net.* are accepted.
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
* **Key**: string (Required): One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string: The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).

## Tag
### Properties
* **Key**: string: One part of a key-value pair that make up a tag. A ``key`` is a general label that acts like a category for more specific tag values.
* **Value**: string: The optional part of a key-value pair that make up a tag. A ``value`` acts as a descriptor within a tag category (key).

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
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

## ThresholdConfiguration
### Properties
* **Type**: string (Required): Determines how Amazon ECS uses ``value`` to calculate the failure threshold. For the percentage types (``BOUNDED_PERCENT`` and ``UNBOUNDED_PERCENT``), Amazon ECS multiplies ``value`` by the latest service desired count. For ``COUNT``, Amazon ECS uses ``value`` directly as the threshold. The default is ``BOUNDED_PERCENT``.
* **Value**: int (Required): Specifies the integer that Amazon ECS uses to calculate the failure threshold. When ``type`` is ``COUNT``, this value is the failure threshold itself. When ``type`` is a percentage type, Amazon ECS multiplies this value by the latest service desired count to produce the failure threshold. The default is ``50``.

## TimeoutConfiguration
### Properties
* **IdleTimeoutSeconds**: int: The amount of time in seconds a connection will stay active while idle. A value of ``0`` can be set to disable ``idleTimeout``.
 The ``idleTimeout`` default for ``HTTP``/``HTTP2``/``GRPC`` is 5 minutes.
 The ``idleTimeout`` default for ``TCP`` is 1 hour.
* **PerRequestTimeoutSeconds**: int: The amount of time waiting for the upstream to respond with a complete response per request. A value of ``0`` can be set to disable ``perRequestTimeout``. ``perRequestTimeout`` can only be set if Service Connect ``appProtocol`` isn't ``TCP``. Only ``idleTimeout`` is allowed for ``TCP````appProtocol``.

## Tmpfs
### Properties
* **ContainerPath**: string: The absolute file path where the tmpfs volume is to be mounted.
* **MountOptions**: string[]: The list of tmpfs volume mount options.
 Valid values: ``"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"``
* **Size**: int (Required): The maximum size (in MiB) of the tmpfs volume.

## Tmpfs
### Properties
* **ContainerPath**: string: The absolute file path where the tmpfs volume is to be mounted.
* **MountOptions**: string[]: The list of tmpfs volume mount options.
 Valid values: ``"defaults" | "ro" | "rw" | "suid" | "nosuid" | "dev" | "nodev" | "exec" | "noexec" | "sync" | "async" | "dirsync" | "remount" | "mand" | "nomand" | "atime" | "noatime" | "diratime" | "nodiratime" | "bind" | "rbind" | "unbindable" | "runbindable" | "private" | "rprivate" | "shared" | "rshared" | "slave" | "rslave" | "relatime" | "norelatime" | "strictatime" | "nostrictatime" | "mode" | "uid" | "gid" | "nr_inodes" | "nr_blocks" | "mpol"``
* **Size**: int (Required): The maximum size (in MiB) of the tmpfs volume.

## TotalLocalStorageGBRequest
### Properties
* **Max**: int
* **Min**: int

## Ulimit
### Properties
* **HardLimit**: int (Required): The hard limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
* **Name**: string (Required): The ``type`` of the ``ulimit``.
* **SoftLimit**: int (Required): The soft limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.

## Ulimit
### Properties
* **HardLimit**: int (Required): The hard limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.
* **Name**: string (Required): The ``type`` of the ``ulimit``.
* **SoftLimit**: int (Required): The soft limit for the ``ulimit`` type. The value can be specified in bytes, seconds, or as a count, depending on the ``type`` of the ``ulimit``.

## VCpuCountRangeRequest
### Properties
* **Max**: int
* **Min**: int (Required)

## Volume
### Properties
* **Host**: [HostVolumeProperties](#hostvolumeproperties): This parameter is specified when you use bind mount host volumes. The contents of the ``host`` parameter determine whether your bind mount host volume persists on the host container instance and where it's stored. If the ``host`` parameter is empty, then the Docker daemon assigns a host path for your data volume. However, the data isn't guaranteed to persist after the containers that are associated with it stop running.
 Windows containers can mount whole directories on the same drive as ``$env:ProgramData``. Windows containers can't mount directories on a different drive, and mount point can't be across drives. For example, you can mount ``C:\my\path:C:\my\path`` and ``D:\:D:\``, but not ``D:\my\path:C:\my\path`` or ``D:\:C:\my\path``.
* **Name**: string: The name of the volume. Up to 255 letters (uppercase and lowercase), numbers, underscores, and hyphens are allowed.
 When using a volume configured at launch, the ``name`` is required and must also be specified as the volume name in the ``ServiceVolumeConfiguration`` or ``TaskVolumeConfiguration`` parameter when creating your service or standalone task.
 For all other types of volumes, this name is referenced in the ``sourceVolume`` parameter of the ``mountPoints`` object in the container definition.
 When a volume is using the ``efsVolumeConfiguration``, the name is required.
 When a volume is using the ``s3filesVolumeConfiguration``, the name is required.

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
 When a volume is using the ``s3filesVolumeConfiguration``, the name is required.
* **S3FilesVolumeConfiguration**: [S3FilesVolumeConfiguration](#s3filesvolumeconfiguration): This parameter is specified when you use an Amazon S3 Files file system for task storage.

## VolumeFrom
### Properties
* **ReadOnly**: bool: If this value is ``true``, the container has read-only access to the volume. If this value is ``false``, then the container can write to the volume. The default value is ``false``.
* **SourceContainer**: string: The name of another container within the same task definition to mount volumes from.

## VpcLatticeAdvancedConfiguration
### Properties
* **AlternateTargetGroupArn**: string: The Amazon Resource Name (ARN) of the alternate target group associated with the VPC Lattice Configuration for Amazon ECS blue/green deployments.
* **ProductionListenerRule**: string: The Amazon Resource Name (ARN) that identifies the production listener rule or listener for routing production traffic.
* **TestListenerRule**: string: The Amazon Resource Name (ARN) that identifies the test listener rule or listener for routing test traffic.

## VpcLatticeConfiguration
### Properties
* **AdvancedConfiguration**: [VpcLatticeAdvancedConfiguration](#vpclatticeadvancedconfiguration)
* **PortName**: string (Required): The name of the port mapping to register in the VPC Lattice target group. This is the name of the ``portMapping`` you defined in your task definition.
* **RoleArn**: string (Required): The ARN of the IAM role to associate with this VPC Lattice configuration. This is the Amazon ECS infrastructure IAM role that is used to manage your VPC Lattice infrastructure.
* **TargetGroupArn**: string (Required): The full Amazon Resource Name (ARN) of the target group or groups associated with the VPC Lattice configuration that the Amazon ECS tasks will be registered to.

