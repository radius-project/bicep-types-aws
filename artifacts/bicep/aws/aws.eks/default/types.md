# AWS.EKS @ default

## Resource AWS.EKS/Addon@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EKS/AddonProperties](#awseksaddonproperties) (Required): properties of the resource

## Resource AWS.EKS/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EKS/ClusterProperties](#awseksclusterproperties) (Required): properties of the resource

## Resource AWS.EKS/FargateProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EKS/FargateProfileProperties](#awseksfargateprofileproperties) (Required): properties of the resource

## Resource AWS.EKS/IdentityProviderConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EKS/IdentityProviderConfigProperties](#awseksidentityproviderconfigproperties) (Required): properties of the resource

## Resource AWS.EKS/Nodegroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EKS/NodegroupProperties](#awseksnodegroupproperties) (Required): properties of the resource

## AWS.EKS/AddonProperties
### Properties
* **AddonName**: string (Required): Name of Addon
* **AddonVersion**: string: Version of Addon
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN) of the add-on
* **ClusterName**: string (Required): Name of Cluster
* **ResolveConflicts**: string (WriteOnly): Resolve parameter value conflicts
* **ServiceAccountRoleArn**: string: IAM role to bind to the add-on's service account
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.EKS/ClusterProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the cluster, such as arn:aws:eks:us-west-2:666666666666:cluster/prod.
* **CertificateAuthorityData**: string (ReadOnly): The certificate-authority-data for your cluster.
* **ClusterSecurityGroupId**: string (ReadOnly): The cluster security group that was created by Amazon EKS for the cluster. Managed node groups use this security group for control plane to data plane communication.
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig)[]
* **EncryptionConfigKeyArn**: string (ReadOnly): Amazon Resource Name (ARN) or alias of the customer master key (CMK).
* **Endpoint**: string (ReadOnly): The endpoint for your Kubernetes API server, such as https://5E1D0CEXAMPLEA591B746AFC5AB30262.yl4.us-west-2.eks.amazonaws.com.
* **KubernetesNetworkConfig**: [KubernetesNetworkConfig](#kubernetesnetworkconfig)
* **Logging**: [Logging](#logging)
* **Name**: string: The unique name to give to your cluster.
* **OpenIdConnectIssuerUrl**: string (ReadOnly): The issuer URL for the cluster's OIDC identity provider, such as https://oidc.eks.us-west-2.amazonaws.com/id/EXAMPLED539D4633E53DE1B716D3041E. If you need to remove https:// from this output value, you can include the following code in your template.
* **ResourcesVpcConfig**: [ResourcesVpcConfig](#resourcesvpcconfig) (Required)
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of the IAM role that provides permissions for the Kubernetes control plane to make calls to AWS API operations on your behalf.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Version**: string: The desired Kubernetes version for your cluster. If you don't specify a value here, the latest version available in Amazon EKS is used.

## EncryptionConfig
### Properties
* **Provider**: [Provider](#provider): The encryption provider for the cluster.
* **Resources**: string[]: Specifies the resources to be encrypted. The only supported value is "secrets".

## Provider
### Properties
* **KeyArn**: string: Amazon Resource Name (ARN) or alias of the KMS key. The KMS key must be symmetric, created in the same region as the cluster, and if the KMS key was created in a different account, the user must have access to the KMS key.

## KubernetesNetworkConfig
### Properties
* **IpFamily**: string: Ipv4 or Ipv6. You can only specify ipv6 for 1.21 and later clusters that use version 1.10.1 or later of the Amazon VPC CNI add-on
* **ServiceIpv4Cidr**: string: The CIDR block to assign Kubernetes service IP addresses from. If you don't specify a block, Kubernetes assigns addresses from either the 10.100.0.0/16 or 172.20.0.0/16 CIDR blocks. We recommend that you specify a block that does not overlap with resources in other networks that are peered or connected to your VPC. 
* **ServiceIpv6Cidr**: string (ReadOnly): The CIDR block to assign Kubernetes service IP addresses from.

## Logging
### Properties
* **ClusterLogging**: [ClusterLogging](#clusterlogging): The cluster control plane logging configuration for your cluster. 

## ClusterLogging
### Properties
* **EnabledTypes**: [EnabledTypes](#enabledtypes)

## EnabledTypes
### Properties

## ResourcesVpcConfig
### Properties
* **EndpointPrivateAccess**: bool: Set this value to true to enable private access for your cluster's Kubernetes API server endpoint. If you enable private access, Kubernetes API requests from within your cluster's VPC use the private VPC endpoint. The default value for this parameter is false, which disables private access for your Kubernetes API server. If you disable private access and you have nodes or AWS Fargate pods in the cluster, then ensure that publicAccessCidrs includes the necessary CIDR blocks for communication with the nodes or Fargate pods.
* **EndpointPublicAccess**: bool: Set this value to false to disable public access to your cluster's Kubernetes API server endpoint. If you disable public access, your cluster's Kubernetes API server can only receive requests from within the cluster VPC. The default value for this parameter is true, which enables public access for your Kubernetes API server.
* **PublicAccessCidrs**: string[]: The CIDR blocks that are allowed access to your cluster's public Kubernetes API server endpoint. Communication to the endpoint from addresses outside of the CIDR blocks that you specify is denied. The default value is 0.0.0.0/0. If you've disabled private endpoint access and you have nodes or AWS Fargate pods in the cluster, then ensure that you specify the necessary CIDR blocks.
* **SecurityGroupIds**: string[]: Specify one or more security groups for the cross-account elastic network interfaces that Amazon EKS creates to use to allow communication between your worker nodes and the Kubernetes control plane. If you don't specify a security group, the default security group for your VPC is used.
* **SubnetIds**: string[] (Required): Specify subnets for your Amazon EKS nodes. Amazon EKS creates cross-account elastic network interfaces in these subnets to allow communication between your nodes and the Kubernetes control plane.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.EKS/FargateProfileProperties
### Properties
* **Arn**: string (ReadOnly)
* **ClusterName**: string (Required): Name of the Cluster
* **FargateProfileName**: string: Name of FargateProfile
* **PodExecutionRoleArn**: string (Required): The IAM policy arn for pods
* **Selectors**: [Selector](#selector)[] (Required)
* **Subnets**: string[]
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Selector
### Properties
* **Labels**: [Label](#label)[]
* **Namespace**: string (Required)

## Label
### Properties
* **Key**: string (Required): The key name of the label.
* **Value**: string (Required): The value for the label. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.EKS/IdentityProviderConfigProperties
### Properties
* **ClusterName**: string (Required): The name of the identity provider configuration.
* **IdentityProviderConfigArn**: string (ReadOnly): The ARN of the configuration.
* **IdentityProviderConfigName**: string: The name of the OIDC provider configuration.
* **Oidc**: [OidcIdentityProviderConfig](#oidcidentityproviderconfig)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required): The type of the identity provider configuration.

## OidcIdentityProviderConfig
### Properties
* **ClientId**: string (Required): This is also known as audience. The ID for the client application that makes authentication requests to the OpenID identity provider.
* **GroupsClaim**: string: The JWT claim that the provider uses to return your groups.
* **GroupsPrefix**: string: The prefix that is prepended to group claims to prevent clashes with existing names (such as system: groups).
* **IssuerUrl**: string (Required): The URL of the OpenID identity provider that allows the API server to discover public signing keys for verifying tokens.
* **RequiredClaims**: [RequiredClaim](#requiredclaim)[]
* **UsernameClaim**: string: The JSON Web Token (JWT) claim to use as the username. The default is sub, which is expected to be a unique identifier of the end user. You can choose other claims, such as email or name, depending on the OpenID identity provider. Claims other than email are prefixed with the issuer URL to prevent naming clashes with other plug-ins.
* **UsernamePrefix**: string: The prefix that is prepended to username claims to prevent clashes with existing names. If you do not provide this field, and username is a value other than email, the prefix defaults to issuerurl#. You can use the value - to disable all prefixing.

## RequiredClaim
### Properties
* **Key**: string (Required): The key of the requiredClaims.
* **Value**: string (Required): The value for the requiredClaims.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.EKS/NodegroupProperties
### Properties
* **AmiType**: string: The AMI type for your node group.
* **Arn**: string (ReadOnly)
* **CapacityType**: string: The capacity type of your managed node group.
* **ClusterName**: string (Required): Name of the cluster to create the node group in.
* **DiskSize**: int: The root device disk size (in GiB) for your node group instances.
* **ForceUpdateEnabled**: bool (WriteOnly): Force the update if the existing node group's pods are unable to be drained due to a pod disruption budget issue.
* **Id**: string (ReadOnly)
* **InstanceTypes**: string[]: Specify the instance types for a node group.
* **Labels**: [Nodegroup_Labels](#nodegrouplabels): The Kubernetes labels to be applied to the nodes in the node group when they are created.
* **LaunchTemplate**: [LaunchTemplateSpecification](#launchtemplatespecification): An object representing a node group's launch template specification.
* **NodegroupName**: string: The unique name to give your node group.
* **NodeRole**: string (Required): The Amazon Resource Name (ARN) of the IAM role to associate with your node group.
* **ReleaseVersion**: string: The AMI version of the Amazon EKS-optimized AMI to use with your node group.
* **RemoteAccess**: [RemoteAccess](#remoteaccess): The remote access (SSH) configuration to use with your node group.
* **ScalingConfig**: [ScalingConfig](#scalingconfig): The scaling configuration details for the Auto Scaling group that is created for your node group.
* **Subnets**: string[] (Required): The subnets to use for the Auto Scaling group that is created for your node group.
* **Tags**: [Nodegroup_Tags](#nodegrouptags): The metadata, as key-value pairs, to apply to the node group to assist with categorization and organization. Follows same schema as Labels for consistency.
* **Taints**: [Taint](#taint)[]: The Kubernetes taints to be applied to the nodes in the node group when they are created.
* **UpdateConfig**: [UpdateConfig](#updateconfig): The node group update configuration.
* **Version**: string: The Kubernetes version to use for your managed nodes.

## Nodegroup_Labels
### Properties

## LaunchTemplateSpecification
### Properties
* **Id**: string
* **Name**: string
* **Version**: string

## RemoteAccess
### Properties
* **Ec2SshKey**: string (Required)
* **SourceSecurityGroups**: string[]

## ScalingConfig
### Properties
* **DesiredSize**: int
* **MaxSize**: int
* **MinSize**: int

## Nodegroup_Tags
### Properties

## Taint
### Properties
* **Effect**: string
* **Key**: string
* **Value**: string

## UpdateConfig
### Properties
* **MaxUnavailable**: int: The maximum number of nodes unavailable at once during a version update. Nodes will be updated in parallel. This value or maxUnavailablePercentage is required to have a value.The maximum number is 100. 
* **MaxUnavailablePercentage**: int: The maximum percentage of nodes unavailable during a version update. This percentage of nodes will be updated in parallel, up to 100 nodes at once. This value or maxUnavailable is required to have a value.

