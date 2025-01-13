# AWS.PCS @ default

## Resource AWS.PCS/Cluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCS/ClusterProperties](#awspcsclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.PCS/ComputeNodeGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCS/ComputeNodeGroupProperties](#awspcscomputenodegroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.PCS/Queue@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCS/QueueProperties](#awspcsqueueproperties) (Required, Identifier): properties of the resource

## AuthKey
### Properties
* **SecretArn**: string (Required): The Amazon Resource Name (ARN) of the the shared Slurm key.
* **SecretVersion**: string (Required): The version of the shared Slurm key.

## AWS.PCS/ClusterProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The unique Amazon Resource Name (ARN) of the cluster.
* **Endpoints**: [Endpoint](#endpoint)[] (ReadOnly): The list of endpoints available for interaction with the scheduler.
* **ErrorInfo**: [ErrorInfo](#errorinfo)[] (ReadOnly): The list of errors that occurred during cluster provisioning.
* **Id**: string (ReadOnly): The generated unique ID of the cluster.
* **Name**: string: The name that identifies the cluster.
* **Networking**: [Cluster_Networking](#clusternetworking) (Required): The networking configuration for the cluster's control plane.
* **Scheduler**: [Cluster_Scheduler](#clusterscheduler) (Required): The cluster management and job scheduling software associated with the cluster.
* **Size**: string (Required): The size of the cluster.
* **SlurmConfiguration**: [Cluster_SlurmConfiguration](#clusterslurmconfiguration): Additional options related to the Slurm scheduler.
* **Status**: string (ReadOnly): The provisioning status of the cluster. The provisioning status doesn't indicate the overall health of the cluster.
* **Tags**: [Cluster_Tags](#clustertags): 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

## AWS.PCS/ComputeNodeGroupProperties
### Properties
* **AmiId**: string: The ID of the Amazon Machine Image (AMI) that AWS PCS uses to launch instances. If not provided, AWS PCS uses the AMI ID specified in the custom launch template.
* **Arn**: string (ReadOnly, Identifier): The unique Amazon Resource Name (ARN) of the compute node group.
* **ClusterId**: string (Required): The ID of the cluster of the compute node group.
* **CustomLaunchTemplate**: [ComputeNodeGroup_CustomLaunchTemplate](#computenodegroupcustomlaunchtemplate) (Required): An Amazon EC2 launch template AWS PCS uses to launch compute nodes.
* **ErrorInfo**: [ErrorInfo](#errorinfo)[] (ReadOnly): The list of errors that occurred during compute node group provisioning.
* **IamInstanceProfileArn**: string (Required): The Amazon Resource Name (ARN) of the IAM instance profile used to pass an IAM role when launching EC2 instances. The role contained in your instance profile must have pcs:RegisterComputeNodeGroupInstance permissions attached to provision instances correctly.
* **Id**: string (ReadOnly): The generated unique ID of the compute node group.
* **InstanceConfigs**: [InstanceConfig](#instanceconfig)[] (Required): A list of EC2 instance configurations that AWS PCS can provision in the compute node group.
* **Name**: string: The name that identifies the compute node group.
* **PurchaseOption**: string: Specifies how EC2 instances are purchased on your behalf. AWS PCS supports On-Demand and Spot instances. For more information, see Instance purchasing options in the Amazon Elastic Compute Cloud User Guide. If you don't provide this option, it defaults to On-Demand.
* **ScalingConfiguration**: [ComputeNodeGroup_ScalingConfiguration](#computenodegroupscalingconfiguration) (Required): Specifies the boundaries of the compute node group auto scaling.
* **SlurmConfiguration**: [ComputeNodeGroup_SlurmConfiguration](#computenodegroupslurmconfiguration): Additional options related to the Slurm scheduler.
* **SpotOptions**: [ComputeNodeGroup_SpotOptions](#computenodegroupspotoptions): Additional configuration when you specify SPOT as the purchase option.
* **Status**: string (ReadOnly): The provisioning status of the compute node group. The provisioning status doesn't indicate the overall health of the compute node group.
* **SubnetIds**: string[] (Required): The list of subnet IDs where instances are provisioned by the compute node group. The subnets must be in the same VPC as the cluster.
* **Tags**: [ComputeNodeGroup_Tags](#computenodegrouptags): 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

## AWS.PCS/QueueProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The unique Amazon Resource Name (ARN) of the queue.
* **ClusterId**: string (Required): The ID of the cluster of the queue.
* **ComputeNodeGroupConfigurations**: [ComputeNodeGroupConfiguration](#computenodegroupconfiguration)[]: The list of compute node group configurations associated with the queue. Queues assign jobs to associated compute node groups.
* **ErrorInfo**: [ErrorInfo](#errorinfo)[] (ReadOnly): The list of errors that occurred during queue provisioning.
* **Id**: string (ReadOnly): The generated unique ID of the queue.
* **Name**: string: The name that identifies the queue.
* **Status**: string (ReadOnly): The provisioning status of the queue. The provisioning status doesn't indicate the overall health of the queue.
* **Tags**: [Queue_Tags](#queuetags): 1 or more tags added to the resource. Each tag consists of a tag key and tag value. The tag value is optional and can be an empty string.

## Cluster_Networking
### Properties
* **SecurityGroupIds**: string[]: The list of security group IDs associated with the Elastic Network Interface (ENI) created in subnets.
* **SubnetIds**: string[]: The list of subnet IDs where AWS PCS creates an Elastic Network Interface (ENI) to enable communication between managed controllers and AWS PCS resources. The subnet must have an available IP address, cannot reside in AWS Outposts, AWS Wavelength, or an AWS Local Zone. AWS PCS currently supports only 1 subnet in this list.

## Cluster_Scheduler
### Properties
* **Type**: string (Required): The software AWS PCS uses to manage cluster scaling and job scheduling.
* **Version**: string (Required): The version of the specified scheduling software that AWS PCS uses to manage cluster scaling and job scheduling.

## Cluster_SlurmConfiguration
### Properties
* **AuthKey**: [AuthKey](#authkey)
* **ScaleDownIdleTimeInSeconds**: int: The time before an idle node is scaled down.
* **SlurmCustomSettings**: [SlurmCustomSetting](#slurmcustomsetting)[]: Additional Slurm-specific configuration that directly maps to Slurm settings.

## Cluster_Tags
### Properties

## ComputeNodeGroup_CustomLaunchTemplate
### Properties
* **Id**: string (Required): The ID of the EC2 launch template to use to provision instances.
* **Version**: string (Required): The version of the EC2 launch template to use to provision instances.

## ComputeNodeGroup_ScalingConfiguration
### Properties
* **MaxInstanceCount**: int (Required): The upper bound of the number of instances allowed in the compute fleet.
* **MinInstanceCount**: int (Required): The lower bound of the number of instances allowed in the compute fleet.

## ComputeNodeGroup_SlurmConfiguration
### Properties
* **SlurmCustomSettings**: [SlurmCustomSetting](#slurmcustomsetting)[]: Additional Slurm-specific configuration that directly maps to Slurm settings.

## ComputeNodeGroup_SpotOptions
### Properties
* **AllocationStrategy**: string: The Amazon EC2 allocation strategy AWS PCS uses to provision EC2 instances. AWS PCS supports lowest price, capacity optimized, and price capacity optimized. If you don't provide this option, it defaults to price capacity optimized.

## ComputeNodeGroup_Tags
### Properties

## ComputeNodeGroupConfiguration
### Properties
* **ComputeNodeGroupId**: string: The compute node group ID for the compute node group configuration.

## Endpoint
### Properties
* **Port**: string (Required): The endpoint's connection port number.
* **PrivateIpAddress**: string (Required): The endpoint's private IP address.
* **PublicIpAddress**: string: The endpoint's public IP address.
* **Type**: string (Required): Indicates the type of endpoint running at the specific IP address.

## ErrorInfo
### Properties
* **Code**: string: The short-form error code.
* **Message**: string: The detailed error information.

## ErrorInfo
### Properties
* **Code**: string: The short-form error code.
* **Message**: string: The detailed error information.

## ErrorInfo
### Properties
* **Code**: string: The short-form error code.
* **Message**: string: The detailed error information.

## InstanceConfig
### Properties
* **InstanceType**: string: The EC2 instance type that AWS PCS can provision in the compute node group.

## Queue_Tags
### Properties

## SlurmCustomSetting
### Properties
* **ParameterName**: string (Required): AWS PCS supports configuration of the following Slurm parameters for clusters: Prolog, Epilog, and SelectTypeParameters.
* **ParameterValue**: string (Required): The value for the configured Slurm setting.

## SlurmCustomSetting
### Properties
* **ParameterName**: string (Required): AWS PCS supports configuration of the following Slurm parameters for compute node groups: Weight and RealMemory.
* **ParameterValue**: string (Required): The value for the configured Slurm setting.

