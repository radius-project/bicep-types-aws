# AWS.EKS @ default

## Resource AWS.EKS/AccessEntry@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/AccessEntryProperties](#awseksaccessentryproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/Addon@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/AddonProperties](#awseksaddonproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/Capability@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/CapabilityProperties](#awsekscapabilityproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/ClusterProperties](#awseksclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/FargateProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/FargateProfileProperties](#awseksfargateprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/IdentityProviderConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/IdentityProviderConfigProperties](#awseksidentityproviderconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/Nodegroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/NodegroupProperties](#awseksnodegroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.EKS/PodIdentityAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EKS/PodIdentityAssociationProperties](#awsekspodidentityassociationproperties) (Required, Identifier): properties of the resource

## AccessConfig
### Properties
* **AuthenticationMode**: string: Specify the authentication mode that should be used to create your cluster.
* **BootstrapClusterCreatorAdminPermissions**: bool (WriteOnly): Set this value to false to avoid creating a default cluster admin Access Entry using the IAM principal used to create the cluster.

## AccessPolicy
### Properties
* **AccessScope**: [AccessScope](#accessscope) (Required)
* **PolicyArn**: string (Required): The ARN of the access policy to add to the access entry.

## AccessScope
### Properties
* **Namespaces**: string[]: The namespaces to associate with the access scope. Only specify if Type is set to 'namespace'.
* **Type**: string (Required): The type of the access scope.

## Ack
### Properties
* **DisabledServices**: string[]: A list of ACK service names to disable. Controllers for services in this list are not installed or managed.
* **EnableCrossNamespace**: bool: Whether cross-namespace references are enabled for ACK controllers. When not specified, the service default applies.

## ActiveCertificateAuthority
### Properties
* **ActivatedBy**: string (ReadOnly): Indicates whether the active certificate authority was activated by EKS or by the customer.
* **Id**: string (ReadOnly): The ID of the active (signing) certificate authority.

## Addon_NamespaceConfig
### Properties
* **Namespace**: string (Required): The custom namespace for creating the add-on

## ArgoCd
### Properties
* **AwsIdc**: [AwsIdc](#awsidc) (Required)
* **EndpointPrefix**: string: An optional prefix for the Argo CD server endpoint. When specified, EKS uses this prefix to generate the server endpoint; otherwise, the endpoint is generated automatically. This value cannot be changed after the capability is created.
* **Namespace**: string: The Kubernetes namespace where Argo CD resources will be created. If not specified, the default namespace is used.
* **NetworkAccess**: [NetworkAccess](#networkaccess)
* **RbacRoleMappings**: [ArgoCdRoleMapping](#argocdrolemapping)[]: A list of role mappings that define which IAM Identity Center users or groups have which Argo CD roles. Each mapping associates an Argo CD role (ADMIN, EDITOR, or VIEWER) with one or more IAM Identity Center identities.
* **ServerUrl**: string (ReadOnly): The URL of the Argo CD server. Use this URL to access the Argo CD web interface and API.

## ArgoCdRoleMapping
### Properties
* **Identities**: [SsoIdentity](#ssoidentity)[] (Required): A list of IAM Identity Center identities (users or groups) that should be assigned this Argo CD role.
* **Role**: string (Required): The Argo CD role to assign. Valid values are: ADMIN (full administrative access to Argo CD), EDITOR (edit access to Argo CD resources), or VIEWER (read-only access to Argo CD resources).

## AWS.EKS/AccessEntryProperties
### Properties
* **AccessEntryArn**: string (ReadOnly): The ARN of the access entry.
* **AccessPolicies**: [AccessPolicy](#accesspolicy)[]: An array of access policies that are associated with the access entry.
* **ClusterName**: string (Required, Identifier): The cluster that the access entry is created for.
* **KubernetesGroups**: string[]: The Kubernetes groups that the access entry is associated with.
* **PrincipalArn**: string (Required, Identifier): The principal ARN that the access entry is created for.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string: The node type to associate with the access entry.
* **Username**: string: The Kubernetes user that the access entry is associated with.

## AWS.EKS/AddonProperties
### Properties
* **AddonName**: string (Required, Identifier): Name of Addon
* **AddonVersion**: string: Version of Addon
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the add-on
* **ClusterName**: string (Required, Identifier): Name of Cluster
* **ConfigurationValues**: string: The configuration values to use with the add-on
* **NamespaceConfig**: [Addon_NamespaceConfig](#addonnamespaceconfig): The custom namespace configuration to use with the add-on
* **PodIdentityAssociations**: [PodIdentityAssociation](#podidentityassociation)[] (WriteOnly): An array of pod identities to apply to this add-on.
* **PreserveOnDelete**: bool (WriteOnly): PreserveOnDelete parameter value
* **ResolveConflicts**: string (WriteOnly): Resolve parameter value conflicts
* **ServiceAccountRoleArn**: string: IAM role to bind to the add-on's service account
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.EKS/CapabilityProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the capability.
* **CapabilityName**: string (Required): A unique name for the capability. The name must be unique within your cluster and can contain alphanumeric characters, hyphens, and underscores.
* **ClusterName**: string (Required): The name of the EKS cluster where you want to create the capability.
* **Configuration**: [CapabilityConfiguration](#capabilityconfiguration): The configuration settings for the capability. The structure of this object varies depending on the capability type. For Argo CD capabilities, you can configure IAM Identity Center integration, RBAC role mappings, and network access settings.
* **CreatedAt**: string (ReadOnly): The Unix epoch timestamp in seconds for when the capability was created.
* **DeletePropagationPolicy**: string (Required): Specifies how Kubernetes resources managed by the capability should be handled when the capability is deleted. Currently, the only supported value is RETAIN which retains all Kubernetes resources managed by the capability when the capability is deleted.
* **ModifiedAt**: string (ReadOnly): The Unix epoch timestamp in seconds for when the capability was last modified.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that the capability uses to interact with AWS services. This role must have a trust policy that allows the EKS service principal to assume it, and it must have the necessary permissions for the capability type you're creating.
* **Status**: string (ReadOnly): The current status of the capability. Valid values include: CREATING (the capability is being created), ACTIVE (the capability is running and available), UPDATING (the capability is being updated), DELETING (the capability is being deleted), CREATE_FAILED (the capability creation failed), UPDATE_FAILED (the capability update failed), or DELETE_FAILED (the capability deletion failed).
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required): The type of capability to create. Valid values are: ACK (AWS Controllers for Kubernetes, which lets you manage AWS resources directly from Kubernetes), ARGOCD (Argo CD for GitOps-based continuous delivery), or KRO (Kube Resource Orchestrator for composing and managing custom Kubernetes resources).
* **Version**: string (ReadOnly): The version of the capability software that is currently running.

## AWS.EKS/ClusterProperties
### Properties
* **AccessConfig**: [AccessConfig](#accessconfig)
* **ActiveCertificateAuthorityId**: string (WriteOnly): The ID of the certificate authority to activate as the cluster's signing CA. Setting or changing this value activates the specified CA (the previously active CA becomes trusted).
* **Arn**: string (ReadOnly): The ARN of the cluster, such as arn:aws:eks:us-west-2:666666666666:cluster/prod.
* **BootstrapSelfManagedAddons**: bool (WriteOnly): Set this value to false to avoid creating the default networking add-ons when the cluster is created.
* **CertificateAuthority**: [CertificateAuthority](#certificateauthority)
* **CertificateAuthorityData**: string (ReadOnly): The certificate-authority-data for your cluster.
* **ClusterSecurityGroupId**: string (ReadOnly): The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.
* **ComputeConfig**: [ComputeConfig](#computeconfig)
* **ControlPlaneScalingConfig**: [ControlPlaneScalingConfig](#controlplanescalingconfig)
* **DeletionProtection**: bool: Set this value to true to enable deletion protection for the cluster.
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig)[]
* **EncryptionConfigKeyArn**: string (ReadOnly): Amazon Resource Name (ARN) or alias of the customer master key (CMK).
* **Endpoint**: string (ReadOnly): The endpoint for your Kubernetes API server, such as https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com.
* **Force**: bool (WriteOnly): Force cluster version update
* **Id**: string (ReadOnly): The unique ID given to your cluster.
* **KubeApiServerConfig**: [KubeApiServerConfig](#kubeapiserverconfig)
* **KubeControllerManagerConfig**: [KubeControllerManagerConfig](#kubecontrollermanagerconfig)
* **KubernetesNetworkConfig**: [KubernetesNetworkConfig](#kubernetesnetworkconfig)
* **KubeSchedulerConfig**: [KubeSchedulerConfig](#kubeschedulerconfig)
* **Logging**: [Logging](#logging)
* **Name**: string (Identifier): The unique name to give to your cluster.
* **OpenIdConnectIssuerUrl**: string (ReadOnly): The issuer URL for the cluster's OIDC identity provider, such as https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E. If you need to remove https:// from this output value, you can include the following code in your template.
* **OutpostConfig**: [OutpostConfig](#outpostconfig)
* **RemoteNetworkConfig**: [RemoteNetworkConfig](#remotenetworkconfig)
* **ResourcesVpcConfig**: [ResourcesVpcConfig](#resourcesvpcconfig) (Required)
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
* **RollbackConfig**: [RollbackConfig](#rollbackconfig) (WriteOnly)
* **StorageConfig**: [StorageConfig](#storageconfig)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **UpgradePolicy**: [UpgradePolicy](#upgradepolicy)
* **Version**: string: The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.
* **ZonalShiftConfig**: [ZonalShiftConfig](#zonalshiftconfig)

## AWS.EKS/FargateProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **ClusterName**: string (Required, Identifier): Name of the Cluster
* **FargateProfileName**: string (Identifier): Name of FargateProfile
* **PodExecutionRoleArn**: string (Required): The IAM policy arn for pods
* **Selectors**: [Selector](#selector)[] (Required)
* **Subnets**: string[]
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.EKS/IdentityProviderConfigProperties
### Properties
* **ClusterName**: string (Required, Identifier): The name of the identity provider configuration.
* **IdentityProviderConfigArn**: string (ReadOnly): The ARN of the configuration.
* **IdentityProviderConfigName**: string (Identifier): The name of the OIDC provider configuration.
* **Oidc**: [OidcIdentityProviderConfig](#oidcidentityproviderconfig)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required, Identifier): The type of the identity provider configuration.

## AWS.EKS/NodegroupProperties
### Properties
* **AmiType**: string: The AMI type for your node group.
* **Arn**: string (ReadOnly)
* **CapacityType**: string: The capacity type of your managed node group.
* **ClusterName**: string (Required): Name of the cluster to create the node group in.
* **DiskSize**: int: The root device disk size (in GiB) for your node group instances.
* **ForceUpdateEnabled**: bool (WriteOnly): Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue.
* **Id**: string (ReadOnly, Identifier)
* **InstanceTypes**: string[]: Specify the instance types for a node group.
* **Labels**: [Nodegroup_Labels](#nodegrouplabels): The Kubernetes labels to be applied to the nodes in the node group when they are created.
* **LaunchTemplate**: [LaunchTemplateSpecification](#launchtemplatespecification): An object representing a node group's launch template specification.
* **NodegroupName**: string: The unique name to give your node group.
* **NodeRepairConfig**: [NodeRepairConfig](#noderepairconfig): The node auto repair configuration for node group.
* **NodeRole**: string (Required): The Amazon Resource Name (ARN) of the IAM role to associate with your node group.
* **ReleaseVersion**: string: The AMI version of the Amazon EKS-optimized AMI to use with your node group.
* **RemoteAccess**: [RemoteAccess](#remoteaccess): The remote access (SSH) configuration to use with your node group.
* **ScalingConfig**: [ScalingConfig](#scalingconfig): The scaling configuration details for the Auto Scaling group that is created for your node group.
* **Subnets**: string[] (Required): The subnets to use for the Auto Scaling group that is created for your node group.
* **Tags**: [Nodegroup_Tags](#nodegrouptags): The metadata, as key-value pairs, to apply to the node group to assist with categorization and organization. Follows same schema as Labels for consistency.
* **Taints**: [Taint](#taint)[]: The Kubernetes taints to be applied to the nodes in the node group when they are created.
* **UpdateConfig**: [UpdateConfig](#updateconfig): The node group update configuration.
* **Version**: string: The Kubernetes version to use for your managed nodes.
* **WarmPoolConfig**: [WarmPoolConfig](#warmpoolconfig): The warm pool configuration details for the Auto Scaling group that is created for the node group.

## AWS.EKS/PodIdentityAssociationProperties
### Properties
* **AssociationArn**: string (ReadOnly, Identifier): The ARN of the pod identity association.
* **AssociationId**: string (ReadOnly): The ID of the pod identity association.
* **ClusterName**: string (Required): The cluster that the pod identity association is created for.
* **DisableSessionTags**: bool: The Disable Session Tags of the pod identity association.
* **ExternalId**: string (ReadOnly): The External Id of the pod identity association.
* **Namespace**: string (Required): The Kubernetes namespace that the pod identity association is created for.
* **Policy**: string: The policy of the pod identity association.
* **RoleArn**: string (Required): The IAM role ARN that the pod identity association is created for.
* **ServiceAccount**: string (Required): The Kubernetes service account that the pod identity association is created for.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetRoleArn**: string: The Target Role Arn of the pod identity association.

## AwsIdc
### Properties
* **IdcInstanceArn**: string (Required): The ARN of the IAM Identity Center instance to use for authentication.
* **IdcManagedApplicationArn**: string (ReadOnly): The ARN of the managed application created in IAM Identity Center for this Argo CD capability. This application is automatically created and managed by EKS.
* **IdcRegion**: string: The Region where your IAM Identity Center instance is located.

## BlockStorage
### Properties
* **Enabled**: bool: Todo: add description

## CapabilityConfiguration
### Properties
* **Ack**: [Ack](#ack)
* **ArgoCd**: [ArgoCd](#argocd)

## CertificateAuthority
### Properties
* **Active**: [ActiveCertificateAuthority](#activecertificateauthority)
* **Data**: string (ReadOnly): The base64-encoded certificate-authority trust bundle for the cluster (all trusted CAs).

## ClusterLogging
### Properties
* **EnabledTypes**: [LoggingTypeConfig](#loggingtypeconfig)[]

## ComputeConfig
### Properties
* **Enabled**: bool: Todo: add description
* **NodePools**: string[]: Todo: add description
* **NodeRoleArn**: string: Todo: add description

## ControlPlanePlacement
### Properties
* **GroupName**: string: The name of the placement group for the Kubernetes control plane instances. This setting can't be changed after cluster creation.
* **SpreadLevel**: string: Optional parameter to specify the placement group spread level for control plane instances. If not provided, EKS will deploy control plane instances without a placement group.

## ControlPlaneScalingConfig
### Properties
* **Tier**: string: The scaling tier for the provisioned control plane.

## ElasticLoadBalancing
### Properties
* **Enabled**: bool: Todo: add description

## EncryptionConfig
### Properties
* **Provider**: [Provider](#provider): The encryption provider for the cluster.
* **Resources**: string[]: Specifies the resources to be encrypted. The only supported value is "secrets".

## EtcdPlacement
### Properties
* **SpreadLevel**: string: Optional parameter to specify the placement group spread level for etcd instances. If not provided, EKS will deploy etcd instances without a placement group.

## HorizontalPodAutoscalerControllerConfig
### Properties
* **HorizontalPodAutoscalerSyncPeriod**: string: The interval between each sync of the horizontal pod autoscaler (e.g., 15s, 1m).

## KubeApiServerConfig
### Properties
* **EventTtl**: string: The duration that Kubernetes events are retained (e.g., 30m, 1h).
* **ServiceNodePortRange**: [ServiceNodePortRange](#servicenodeportrange)

## KubeControllerManagerConfig
### Properties
* **HorizontalPodAutoscalerControllerConfig**: [HorizontalPodAutoscalerControllerConfig](#horizontalpodautoscalercontrollerconfig)
* **PodGcControllerConfig**: [PodGcControllerConfig](#podgccontrollerconfig)

## KubernetesNetworkConfig
### Properties
* **ElasticLoadBalancing**: [ElasticLoadBalancing](#elasticloadbalancing): Todo: add description
* **IpFamily**: string: Ipv4 or Ipv6. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on
* **ServiceIpv4Cidr**: string: The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. 
* **ServiceIpv6Cidr**: string (ReadOnly): The CIDR block to assign Kubernetes service IP addresses from.

## KubeSchedulerConfig
### Properties
* **NodeResourcesFit**: [NodeResourcesFitConfig](#noderesourcesfitconfig)

## Label
### Properties
* **Key**: string (Required): The key name of the label.
* **Value**: string (Required): The value for the label. 

## LaunchTemplateSpecification
### Properties
* **Id**: string (Identifier)
* **Name**: string
* **Version**: string

## Logging
### Properties
* **ClusterLogging**: [ClusterLogging](#clusterlogging): The cluster control plane logging configuration for your cluster. 

## LoggingTypeConfig
### Properties
* **Type**: string: name of the log type

## NetworkAccess
### Properties
* **VpceIds**: string[]: A list of VPC endpoint IDs to associate with the managed Argo CD API server endpoint. Each VPC endpoint provides private connectivity from a specific VPC to the Argo CD server. You can specify multiple VPC endpoint IDs to enable access from multiple VPCs.

## Nodegroup_Labels
### Properties

## Nodegroup_Tags
### Properties

## NodeRepairConfig
### Properties
* **Enabled**: bool: Set this value to true to enable node auto repair for the node group.
* **MaxParallelNodesRepairedCount**: int: Specify the maximum number of nodes that can be repaired concurrently or in parallel, expressed as a count of unhealthy nodes. This gives you finer-grained control over the pace of node replacements. When using this, you cannot also set MaxParallelNodesRepairedPercentage at the same time.
* **MaxParallelNodesRepairedPercentage**: int: Specify the maximum number of nodes that can be repaired concurrently or in parallel, expressed as a percentage of unhealthy nodes. This gives you finer-grained control over the pace of node replacements. When using this, you cannot also set MaxParallelNodesRepairedCount at the same time.
* **MaxUnhealthyNodeThresholdCount**: int: Specify a count threshold of unhealthy nodes, above which node auto repair actions will stop. When using this, you cannot also set MaxUnhealthyNodeThresholdPercentage at the same time.
* **MaxUnhealthyNodeThresholdPercentage**: int: Specify a percentage threshold of unhealthy nodes, above which node auto repair actions will stop. When using this, you cannot also set MaxUnhealthyNodeThresholdCount at the same time.
* **NodeRepairConfigOverrides**: [NodeRepairConfigOverrides](#noderepairconfigoverrides)[]: Specify granular overrides for specific repair actions. These overrides control the repair action and the repair delay time before a node is considered eligible for repair. If you use this, you must specify all the values.

## NodeRepairConfigOverrides
### Properties
* **MinRepairWaitTimeMins**: int: Specify the minimum time in minutes to wait before attempting to repair a node with this specific NodeMonitoringCondition and NodeUnhealthyReason.
* **NodeMonitoringCondition**: string: Specify an unhealthy condition reported by the node monitoring agent that this override would apply to.
* **NodeUnhealthyReason**: string: Specify a reason reported by the node monitoring agent that this override would apply to.
* **RepairAction**: string: Specify the repair action to take for nodes when all of the specified conditions are met.

## NodeResourcesFitConfig
### Properties
* **ScoringStrategy**: [ScoringStrategy](#scoringstrategy)

## OidcIdentityProviderConfig
### Properties
* **ClientId**: string (Required): This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider.
* **GroupsClaim**: string: The JWT claim that the provider uses to return your groups.
* **GroupsPrefix**: string: The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).
* **IssuerUrl**: string (Required): The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.
* **RequiredClaims**: [RequiredClaim](#requiredclaim)[]
* **UsernameClaim**: string: The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
* **UsernamePrefix**: string: The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.

## OutpostConfig
### Properties
* **ControlPlaneInstanceType**: string (Required): The EC2 instance type for the Kubernetes control plane instances of your local Amazon EKS cluster on AWS Outposts. This instance type applies to all control plane instances and cannot be changed after cluster creation.
* **ControlPlanePlacement**: [ControlPlanePlacement](#controlplaneplacement): An object representing the placement configuration for all the control plane instances of your local Amazon EKS cluster on an AWS Outpost.
* **EtcdInstanceType**: string: The EC2 instance type for etcd instances of your local Amazon EKS cluster on AWS Outposts. This instance type applies to all etcd instances and cannot be changed after cluster creation.
* **EtcdPlacement**: [EtcdPlacement](#etcdplacement): An object representing the placement configuration for the etcd instances of your local Amazon EKS cluster on an AWS Outpost.
* **OutpostArns**: string[] (Required): The ARN of the Outpost that you want to use for your local Amazon EKS cluster on Outposts. Only a single Outpost ARN is supported.

## PodGcControllerConfig
### Properties
* **TerminatedPodGcThreshold**: int: The number of terminated pods that can exist before the terminated pod garbage collector starts deleting them.

## PodIdentityAssociation
### Properties
* **RoleArn**: string (Required): The IAM role ARN that the pod identity association is created for.
* **ServiceAccount**: string (Required): The Kubernetes service account that the pod identity association is created for.

## Provider
### Properties
* **KeyArn**: string: Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.

## RemoteAccess
### Properties
* **Ec2SshKey**: string (Required)
* **SourceSecurityGroups**: string[]

## RemoteNetworkConfig
### Properties
* **RemoteNodeNetworks**: [RemoteNodeNetwork](#remotenodenetwork)[]: Network configuration of nodes run on-premises with EKS Hybrid Nodes.
* **RemotePodNetworks**: [RemotePodNetwork](#remotepodnetwork)[]: Network configuration of pods run on-premises with EKS Hybrid Nodes.

## RemoteNodeNetwork
### Properties
* **Cidrs**: string[] (Required): Specifies the list of remote node CIDRs.

## RemotePodNetwork
### Properties
* **Cidrs**: string[] (Required): Specifies the list of remote pod CIDRs.

## RequiredClaim
### Properties
* **Key**: string (Required): The key of the requiredClaims.
* **Value**: string (Required): The value for the requiredClaims.

## ResourcesVpcConfig
### Properties
* **ControlPlaneEgressMode**: string: Specify the egress mode for the cluster control plane. If you set this to CUSTOMER_ROUTED, the control plane routes traffic through your VPC subnets instead of using AWS managed networking.
* **EndpointPrivateAccess**: bool: Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.
* **EndpointPublicAccess**: bool: Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.
* **PublicAccessCidrs**: string[]: The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.
* **SecurityGroupIds**: string[]: Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
* **SubnetIds**: string[] (Required): Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.

## ResourceWeight
### Properties
* **Name**: string (Identifier): The name of the resource (for example, cpu or memory).
* **Weight**: int: The weight assigned to the resource for scoring. Must be between 1 and 100.

## RollbackConfig
### Properties
* **TimeoutMinutes**: int: The timeout in minutes for the version rollback operation. If not specified, defaults to 720 minutes (12 hours).

## ScalingConfig
### Properties
* **DesiredSize**: int
* **MaxSize**: int
* **MinSize**: int

## ScoringStrategy
### Properties
* **Resources**: [ResourceWeight](#resourceweight)[]: The resource weights used for scoring nodes.
* **Type**: string: The scoring strategy type (LeastAllocated or MostAllocated).

## Selector
### Properties
* **Labels**: [Label](#label)[]
* **Namespace**: string (Required)

## ServiceNodePortRange
### Properties
* **MaxPort**: int: The maximum port number in the range.
* **MinPort**: int: The minimum port number in the range.

## SsoIdentity
### Properties
* **Id**: string (Required): The unique identifier of the IAM Identity Center user or group.
* **Type**: string (Required): The type of identity. Valid values are SSO_USER or SSO_GROUP.

## StorageConfig
### Properties
* **BlockStorage**: [BlockStorage](#blockstorage): Todo: add description

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Taint
### Properties
* **Effect**: string
* **Key**: string
* **Value**: string

## UpdateConfig
### Properties
* **MaxUnavailable**: int: The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100. 
* **MaxUnavailablePercentage**: int: The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value.
* **UpdateStrategy**: string: The configuration for the behavior to follow during an node group version update of this managed node group. You choose between two possible strategies for replacing nodes during an UpdateNodegroupVersion action.

## UpgradePolicy
### Properties
* **SupportType**: string: Specify the support type for your cluster.

## WarmPoolConfig
### Properties
* **Enabled**: bool: Enable or disable warm pool for the node group.
* **MaxGroupPreparedCapacity**: int: The maximum number of instances that are allowed to be in the warm pool.
* **MinSize**: int: The minimum number of instances to maintain in the warm pool.
* **PoolState**: string: The desired state of warm pool instances.
* **ReuseOnScaleIn**: bool: Whether to return instances to the warm pool during scale-in instead of terminating them.

## ZonalShiftConfig
### Properties
* **Enabled**: bool: Set this value to true to enable zonal shift for the cluster.

