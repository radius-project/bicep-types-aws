# AWS.EMR @ default

## Resource AWS.EMR/Cluster@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/ClusterProperties](#awsemrclusterproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/InstanceFleetConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/InstanceFleetConfigProperties](#awsemrinstancefleetconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/InstanceGroupConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/InstanceGroupConfigProperties](#awsemrinstancegroupconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/NotebookExecution@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/NotebookExecutionProperties](#awsemrnotebookexecutionproperties) (Identifier): properties of the resource

## Resource AWS.EMR/SecurityConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/SecurityConfigurationProperties](#awsemrsecurityconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/Session@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/SessionProperties](#awsemrsessionproperties) (Identifier): properties of the resource

## Resource AWS.EMR/Step@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/StepProperties](#awsemrstepproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/Studio@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/StudioProperties](#awsemrstudioproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/StudioSessionMapping@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/StudioSessionMappingProperties](#awsemrstudiosessionmappingproperties) (Required, Identifier): properties of the resource

## Resource AWS.EMR/WALWorkspace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.EMR/WALWorkspaceProperties](#awsemrwalworkspaceproperties) (Identifier): properties of the resource

## AppConfiguration
### Properties
* **Classification**: string
* **ConfigurationProperties**: [InstanceGroupConfig_ConfigurationProperties](#instancegroupconfigconfigurationproperties)
* **Configurations**: [AppConfiguration](#appconfiguration)[]

## Application
### Properties
* **AdditionalInfo**: [Cluster_AdditionalInfo](#clusteradditionalinfo): This option is for advanced users only. This is meta information about third-party applications that third-party vendors use for testing purposes.
* **Args**: string[]: Arguments for Amazon EMR to pass to the application
* **Name**: string: The name of the application.
* **Version**: string: The version of the application.

## ApplicationConfiguration
### Properties
* **Classification**: string: The classification within a configuration.
* **ConfigurationProperties**: [InstanceFleetConfig_ConfigurationProperties](#instancefleetconfigconfigurationproperties): Within a configuration classification, a set of properties that represent the settings that you want to change in the configuration file.
* **Configurations**: [ApplicationConfiguration](#applicationconfiguration)[]: A list of additional configurations to apply within a configuration object.

## AutoScalingPolicy
### Properties
* **Constraints**: [ScalingConstraints](#scalingconstraints) (Required)
* **Rules**: [ScalingRule](#scalingrule)[] (Required)

## AutoScalingPolicy
### Properties
* **Constraints**: [ScalingConstraints](#scalingconstraints) (Required)
* **Rules**: [ScalingRule](#scalingrule)[] (Required)

## AutoTerminationPolicy
### Properties
* **IdleTimeout**: int: Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven days)

## AWS.EMR/ClusterProperties
### Properties
* **AdditionalInfo**: [Cluster_AdditionalInfo](#clusteradditionalinfo) | string (WriteOnly): A JSON string for selecting additional features.
* **Applications**: [Application](#application)[]: The applications installed on this cluster.
* **AutoScalingRole**: string: An IAM role for automatic scaling policies. The default role is EMR_AutoScaling_DefaultRole. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate EC2 instances in an instance group.
* **AutoTerminationPolicy**: [AutoTerminationPolicy](#autoterminationpolicy): An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates.
* **BootstrapActions**: [BootstrapActionConfig](#bootstrapactionconfig)[] (WriteOnly): A list of bootstrap actions to run before Hadoop starts on the cluster nodes.
* **Configurations**: [EMRConfiguration](#emrconfiguration)[]: Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied to the EMR cluster.
* **CustomAmiId**: string: Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.
* **EbsRootVolumeIops**: int: The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
* **EbsRootVolumeSize**: int: The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each EC2 instance. Available in Amazon EMR version 4.x and later.
* **EbsRootVolumeThroughput**: int: The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
* **Id**: string (ReadOnly, Identifier): The cluster ID, such as j-2AXXXXXXGAPLF, which AWS assigns.
* **Instances**: [JobFlowInstancesConfig](#jobflowinstancesconfig) (Required): A specification of the number and type of Amazon EC2 instances.
* **JobFlowRole**: string (Required): Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2 instances of the cluster assume this role. The default role is EMR_EC2_DefaultRole. In order to use the default role, you must have already created it using the CLI or console
* **KerberosAttributes**: [KerberosAttributes](#kerberosattributes): Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see Use Kerberos Authentication in the Amazon EMR Management Guide.
* **LogEncryptionKmsKeyId**: string (WriteOnly): The AWS KMS key used for encrypting log files. If a value is not provided, the logs remain encrypted by AES-256. This attribute is only available with Amazon EMR version 5.30.0 and later, excluding Amazon EMR 6.0.0.
* **LogUri**: string: The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.
* **ManagedScalingPolicy**: [ManagedScalingPolicy](#managedscalingpolicy): The specified managed scaling policy for an Amazon EMR cluster. 
* **MasterPublicDNS**: string (ReadOnly): The public DNS name of the master node (instance), such as ec2-12-123-123-123.us-west-2.compute.amazonaws.com.
* **MonitoringConfiguration**: [MonitoringConfiguration](#monitoringconfiguration): Specifies the configuration for cluster logging.
* **Name**: string (Required): The name of the job flow.
* **OSReleaseLabel**: string: Specifies a particular Amazon Linux release for all nodes in a cluster launch RunJobFlow request. If a release is not specified, Amazon EMR uses the latest validated Amazon Linux release for cluster launch.
* **PlacementGroupConfigs**: [PlacementGroupConfig](#placementgroupconfig)[]: The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.
* **ReleaseLabel**: string: The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form emr-x.x.x, where x.x.x is an Amazon EMR release version such as emr-5.14.0. 
* **ScaleDownBehavior**: string: The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. 
* **SecurityConfiguration**: string: The name of the security configuration applied to the cluster.
* **ServiceRole**: string (Required): The IAM role that Amazon EMR assumes in order to access AWS resources on your behalf.
* **SessionEnabled**: bool: Indicates whether Spark Connect sessions are enabled on the cluster. When set to true, you can start Spark Connect sessions using the StartSession operation. This property cannot be changed after the cluster is created.
* **StepConcurrencyLevel**: int: Specifies the number of steps that can be executed concurrently.
* **Steps**: [StepConfig](#stepconfig)[] (WriteOnly)
* **Tags**: [Tag](#tag)[]
* **VisibleToAllUsers**: bool: Indicates whether the cluster is visible to IAM principals in the AWS account associated with the cluster. When true, IAM principals in the AWS account can perform EMR cluster actions on the cluster that their IAM policies allow. When false, only the IAM principal that created the cluster and the AWS account root user can perform EMR actions, regardless of IAM permissions policies attached to other IAM principals.

## AWS.EMR/InstanceFleetConfigProperties
### Properties
* **ClusterId**: string (Required, Identifier): The unique identifier of the EMR cluster.
* **InstanceFleetId**: string (ReadOnly, Identifier): The unique identifier for instance fleet for specific cluster
* **InstanceFleetType**: string (Required): The node type that the instance fleet hosts.
* **InstanceTypeConfigs**: [InstanceTypeConfig](#instancetypeconfig)[] (WriteOnly): InstanceTypeConfigs determine the EC2 instances that Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities.
* **LaunchSpecifications**: [InstanceFleetProvisioningSpecifications](#instancefleetprovisioningspecifications): The launch specification for the instance fleet.
* **Name**: string: The friendly name of the instance fleet.
* **ResizeSpecifications**: [InstanceFleetResizingSpecifications](#instancefleetresizingspecifications): The resize specification for the instance fleet.
* **TargetOnDemandCapacity**: int: The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand instances to provision.
* **TargetSpotCapacity**: int: The target capacity of Spot units for the instance fleet, which determines how many Spot instances to provision.

## AWS.EMR/InstanceGroupConfigProperties
### Properties
* **AutoScalingPolicy**: [AutoScalingPolicy](#autoscalingpolicy)
* **BidPrice**: string
* **Configurations**: [AppConfiguration](#appconfiguration)[]
* **CustomAmiId**: string
* **EbsConfiguration**: [EbsConfiguration](#ebsconfiguration)
* **InstanceCount**: int (Required)
* **InstanceGroupId**: string (ReadOnly, Identifier)
* **InstanceRole**: string (Required)
* **InstanceType**: string (Required)
* **JobFlowId**: string (Required, Identifier)
* **Market**: string
* **Name**: string

## AWS.EMR/NotebookExecutionProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the notebook execution.
* **EnvironmentVariables**: [NotebookExecution_EnvironmentVariables](#notebookexecutionenvironmentvariables): The environment variables associated with the notebook execution. Keys must be prefixed with KERNEL_ (except LOG_CONTEXT).
* **ExecutionEngine**: [ExecutionEngineConfig](#executionengineconfig)
* **NotebookExecutionId**: string (ReadOnly): The unique identifier of the notebook execution.
* **NotebookExecutionName**: string: An optional name for the notebook execution.
* **NotebookParams**: string: Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for execution.
* **NotebookS3Location**: [NotebookS3Location](#notebooks3location)
* **OutputNotebookFormat**: string: The output format for the notebook execution.
* **OutputNotebookS3Location**: [OutputNotebookS3Location](#outputnotebooks3location)
* **StartTime**: string (ReadOnly): The timestamp when notebook execution started.
* **Status**: string (ReadOnly): The status of the notebook execution.
* **Tags**: [Tag](#tag)[]: A list of tags associated with a notebook execution.

## AWS.EMR/SecurityConfigurationProperties
### Properties
* **Name**: string (Identifier): The name of the security configuration.
* **SecurityConfiguration**: [SecurityConfiguration_SecurityConfiguration](#securityconfigurationsecurityconfiguration) | string (Required): The security configuration details in JSON format.

## AWS.EMR/SessionProperties
### Properties
* **AccountId**: string (ReadOnly): The Amazon Web Services account ID that owns the session.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the session.
* **ClusterId**: string (ReadOnly): The ID of the cluster that the session belongs to.
* **CreatedAt**: string (ReadOnly): The date and time that the session was created.
* **EndedAt**: string (ReadOnly): The date and time that the session was terminated or failed.
* **EngineConfigurations**: [Configuration](#configuration)[]: The configuration overrides for the session. Only runtime configuration overrides are supported.
* **ExecutionRoleArn**: string: The execution role ARN for the session. Amazon EMR uses this role to access Amazon Web Services resources on your behalf during session execution.
* **Id**: string (ReadOnly): The ID of the session.
* **IdleSince**: string (ReadOnly): The date and time that the session last entered the IDLE state.
* **MonitoringConfiguration**: [SessionMonitoringConfiguration](#sessionmonitoringconfiguration)
* **Name**: string: An optional name for the session.
* **ReleaseLabel**: string (ReadOnly): The Amazon EMR release label of the cluster that the session is running on.
* **ServerUrl**: string (ReadOnly): The Spark Connect server URL for the session.
* **SessionIdleTimeoutInMinutes**: int: The idle timeout, in minutes. If the session is idle for this duration, Amazon EMR automatically terminates it.
* **StartedAt**: string (ReadOnly): The date and time that the session entered the STARTED state.
* **State**: string (ReadOnly): The current state of the session.
* **StateChangeReason**: string (ReadOnly): A human-readable message describing the most recent state change.
* **Tags**: [Tag](#tag)[]: The tags associated with the session.
* **UpdatedAt**: string (ReadOnly): The date and time that the session was last updated.

## AWS.EMR/StepProperties
### Properties
* **ActionOnFailure**: string (Required): This specifies what action to take when the cluster step fails. Possible values are CANCEL_AND_WAIT and CONTINUE.
* **EncryptionKeyArn**: string: The KMS key ARN to encrypt the logs published to the given Amazon S3 destination. When omitted, EMR falls back to cluster-level logging behavior.
* **HadoopJarStep**: [HadoopJarStepConfig](#hadoopjarstepconfig) (Required): The HadoopJarStepConfig property type specifies a job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for the cluster to execute as a step on the master node, and then waits for the job to finish or fail before executing subsequent steps.
* **Id**: string (ReadOnly, Identifier): ID generated by service
* **JobFlowId**: string (Required): A string that uniquely identifies the cluster (job flow).
* **LogUri**: string: The Amazon S3 destination URI for log publishing. When omitted, EMR falls back to cluster-level logging behavior.
* **Name**: string (Required): The name of the cluster step.

## AWS.EMR/StudioProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the EMR Studio.
* **AuthMode**: string (Required): Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
* **DefaultS3Location**: string (Required): The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
* **Description**: string: A detailed description of the Studio.
* **EncryptionKeyArn**: string: The AWS KMS key identifier (ARN) used to encrypt AWS EMR Studio workspace and notebook files when backed up to AWS S3.
* **EngineSecurityGroupId**: string (Required): The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
* **IdcInstanceArn**: string: The ARN of the IAM Identity Center instance to create the Studio application.
* **IdcUserAssignment**: string: Specifies whether IAM Identity Center user assignment is REQUIRED or OPTIONAL. If the value is set to REQUIRED, users must be explicitly assigned to the Studio application to access the Studio.
* **IdpAuthUrl**: string: Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
* **IdpRelayStateParameterName**: string: The name of relay state parameter for external Identity Provider.
* **Name**: string (Required): A descriptive name for the Amazon EMR Studio.
* **ServiceRole**: string (Required): The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
* **StudioId**: string (ReadOnly, Identifier): The ID of the EMR Studio.
* **SubnetIds**: string[] (Required): A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
* **Tags**: [Tag](#tag)[]: A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
* **TrustedIdentityPropagationEnabled**: bool: A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is false.
* **Url**: string (ReadOnly): The unique Studio access URL.
* **UserRole**: string: The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.
* **VpcId**: string (Required): The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
* **WorkspaceSecurityGroupId**: string (Required): The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

## AWS.EMR/StudioSessionMappingProperties
### Properties
* **IdentityName**: string (Required, Identifier): The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
* **IdentityType**: string (Required, Identifier): Specifies whether the identity to map to the Studio is a user or a group.
* **SessionPolicyArn**: string (Required): The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.
* **StudioId**: string (Required, Identifier): The ID of the Amazon EMR Studio to which the user or group will be mapped.

## AWS.EMR/WALWorkspaceProperties
### Properties
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **WALWorkspaceName**: string (Identifier): The name of the emrwal container

## BootstrapActionConfig
### Properties
* **Name**: string (Required): The name of the bootstrap action.
* **ScriptBootstrapAction**: [ScriptBootstrapActionConfig](#scriptbootstrapactionconfig) (Required)

## CloudWatchAlarmDefinition
### Properties
* **ComparisonOperator**: string (Required): Determines how the metric specified by MetricName is compared to the value specified by Threshold.
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **EvaluationPeriods**: int: The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is 1.
* **MetricName**: string (Required): The name of the CloudWatch metric that is watched to determine an alarm condition.
* **Namespace**: string: The namespace for the CloudWatch metric. The default is AWS/ElasticMapReduce.
* **Period**: int (Required): The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified, specify 300.
* **Statistic**: string: The statistic to apply to the metric associated with the alarm. The default is AVERAGE.
* **Threshold**: int (Required): The value against which the specified statistic is compared.
* **Unit**: string: The unit of measure associated with the CloudWatch metric being watched. The value specified for Unit must correspond to the units specified in the CloudWatch metric.

## CloudWatchAlarmDefinition
### Properties
* **ComparisonOperator**: string (Required)
* **Dimensions**: [MetricDimension](#metricdimension)[]
* **EvaluationPeriods**: int
* **MetricName**: string (Required)
* **Namespace**: string
* **Period**: int (Required)
* **Statistic**: string
* **Threshold**: int (Required)
* **Unit**: string

## CloudWatchLogConfiguration
### Properties
* **Enabled**: bool (Required): Specifies if CloudWatch logging is enabled.
* **EncryptionKeyArn**: string: The ARN of the encryption key used to encrypt the logs.
* **LogGroupName**: string: The name of the CloudWatch log group where logs are published.
* **LogStreamNamePrefix**: string: The prefix of the log stream name.
* **LogTypes**: [Cluster_LogTypes](#clusterlogtypes): A map of log types to file names for publishing logs to the standard output or standard error streams for CloudWatch. Valid log types include STEP_LOGS, SPARK_DRIVER, and SPARK_EXECUTOR. Valid file names for each type include STDOUT and STDERR.

## Cluster_AdditionalInfo
### Properties

## Cluster_ConfigurationProperties
### Properties

## Cluster_LogTypes
### Properties

## ComputeLimits
### Properties
* **MaximumCapacityUnits**: int (Required):  The upper boundary of EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
* **MaximumCoreCapacityUnits**: int: The upper boundary of EC2 units for core node type in a cluster. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The core units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between core and task nodes. 
* **MaximumOnDemandCapacityUnits**: int:  The upper boundary of On-Demand EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The On-Demand units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between On-Demand and Spot Instances.
* **MinimumCapacityUnits**: int (Required): The lower boundary of EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
* **UnitType**: string (Required): The unit type used for specifying a managed scaling policy. 

## Configuration
### Properties
* **Classification**: string: The classification within a configuration.
* **Configurations**: [Configuration](#configuration)[]: A list of additional configurations to apply within a configuration object.
* **Properties**: [Session_Properties](#sessionproperties): A set of properties specified within a configuration classification.

## EbsBlockDeviceConfig
### Properties
* **VolumeSpecification**: [VolumeSpecification](#volumespecification) (Required)
* **VolumesPerInstance**: int: Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group. Use of this property can confuse CloudFormation drift detection. The EbsBlockDeviceConfigs read from the system may return a list with one entry per volume,replacing any entry specified in the template with a VolumesPerInstance greater than one by that many entries containing only the VolumeSpecification.Thus to avoid false drift detection, it is recommended to supply repeated entries in EbsBlockDeviceConfigs for any VolumeSpecification which is intended to be repeated and not to use this property.

## EbsBlockDeviceConfig
### Properties
* **VolumeSpecification**: [VolumeSpecification](#volumespecification) (Required): EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
* **VolumesPerInstance**: int: Use of this property can confuse CloudFormation drift detection. The EbsBlockDeviceConfigs read from the system may return a list with one entry per volume, replacing any entry specified in the template with a VolumesPerInstance greater than one by that many entries containing only the VolumeSpecification. Thus to avoid false drift detection, it is recommended to supply repeated entries in EbsBlockDeviceConfigs for any VolumeSpecification which is intended to be repeated and not to use this property.


## EbsBlockDeviceConfig
### Properties
* **VolumeSpecification**: [VolumeSpecification](#volumespecification) (Required)
* **VolumesPerInstance**: int: Use of this property can confuse CloudFormation drift detection. The EbsBlockDeviceConfigs read from the system may return a list with one entry per volume, replacing any entry specified in the template with a VolumesPerInstance greater than one by that many entries containing only the VolumeSpecification. Thus to avoid false drift detection, it is recommended to supply repeated entries in EbsBlockDeviceConfigs for any VolumeSpecification which is intended to be repeated and not to use this property.


## EbsConfiguration
### Properties
* **EbsBlockDeviceConfigs**: [EbsBlockDeviceConfig](#ebsblockdeviceconfig)[]
* **EbsOptimized**: bool: Indicates whether an Amazon EBS volume is EBS-optimized.

## EbsConfiguration
### Properties
* **EbsBlockDeviceConfigs**: [EbsBlockDeviceConfig](#ebsblockdeviceconfig)[]: An array of Amazon EBS volume specifications attached to a cluster instance.
* **EbsOptimized**: bool: Indicates whether an Amazon EBS volume is EBS-optimized.

## EbsConfiguration
### Properties
* **EbsBlockDeviceConfigs**: [EbsBlockDeviceConfig](#ebsblockdeviceconfig)[] (WriteOnly)
* **EbsOptimized**: bool

## EMRConfiguration
### Properties
* **Classification**: string: The classification within a configuration.
* **ConfigurationProperties**: [Cluster_ConfigurationProperties](#clusterconfigurationproperties)
* **Configurations**: [EMRConfiguration](#emrconfiguration)[]

## ExecutionEngineConfig
### Properties
* **Id**: string (Required): The unique identifier of the execution engine. For an Amazon EMR cluster, this is the cluster ID.
* **Type**: string: The type of execution engine.

## HadoopJarStepConfig
### Properties
* **Args**: string[]
* **Jar**: string (Required): A path to a JAR file run during the step.
* **MainClass**: string: The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
* **StepProperties**: [KeyValue](#keyvalue)[]: A list of Java properties that are set when the step runs. You can use these properties to pass key-value pairs to your main function.

## HadoopJarStepConfig
### Properties
* **Args**: string[]
* **Jar**: string (Required)
* **MainClass**: string
* **StepProperties**: [KeyValue](#keyvalue)[]

## InstanceFleetConfig
### Properties
* **InstanceTypeConfigs**: [InstanceTypeConfig](#instancetypeconfig)[]
* **LaunchSpecifications**: [InstanceFleetProvisioningSpecifications](#instancefleetprovisioningspecifications)
* **Name**: string: The friendly name of the instance fleet.
* **ResizeSpecifications**: [InstanceFleetResizingSpecifications](#instancefleetresizingspecifications)
* **TargetOnDemandCapacity**: int: The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision
* **TargetSpotCapacity**: int: The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision.

## InstanceFleetConfig_ConfigurationProperties
### Properties

## InstanceFleetProvisioningSpecifications
### Properties
* **OnDemandSpecification**: [OnDemandProvisioningSpecification](#ondemandprovisioningspecification)
* **SpotSpecification**: [SpotProvisioningSpecification](#spotprovisioningspecification)

## InstanceFleetProvisioningSpecifications
### Properties
* **OnDemandSpecification**: [OnDemandProvisioningSpecification](#ondemandprovisioningspecification): The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy.
* **SpotSpecification**: [SpotProvisioningSpecification](#spotprovisioningspecification): The launch specification for Spot instances in the fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.

## InstanceFleetResizingSpecifications
### Properties
* **OnDemandResizeSpecification**: [OnDemandResizingSpecification](#ondemandresizingspecification)
* **SpotResizeSpecification**: [SpotResizingSpecification](#spotresizingspecification)

## InstanceFleetResizingSpecifications
### Properties
* **OnDemandResizeSpecification**: [OnDemandResizingSpecification](#ondemandresizingspecification): The resize specification for On-Demand Instances in the instance fleet, which contains the allocation strategy, capacity reservation options, and the resize timeout period.
* **SpotResizeSpecification**: [SpotResizingSpecification](#spotresizingspecification): The resize specification for Spot Instances in the instance fleet, which contains the allocation strategy and the resize timeout period.

## InstanceGroupConfig
### Properties
* **AutoScalingPolicy**: [AutoScalingPolicy](#autoscalingpolicy): An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates EC2 instances in response to the value of a CloudWatch metric.
* **BidPrice**: string: If specified, indicates that the instance group uses Spot Instances. This is the maximum price you are willing to pay for Spot Instances. Specify OnDemandPrice to set the amount equal to the On-Demand price, or specify an amount in USD.
* **Configurations**: [EMRConfiguration](#emrconfiguration)[]: The list of configurations supplied for an EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
* **CustomAmiId**: string: The custom AMI ID to use for the provisioned instance group.
* **EbsConfiguration**: [EbsConfiguration](#ebsconfiguration): EBS configurations that will be attached to each EC2 instance in the instance group.
* **InstanceCount**: int (Required): Target number of instances for the instance group.
* **InstanceType**: string (Required): The EC2 instance type for all instances in the instance group.
* **Market**: string: Market type of the EC2 instances used to create a cluster node.
* **Name**: string: Friendly name given to the instance group.

## InstanceGroupConfig_ConfigurationProperties
### Properties

## InstanceTypeConfig
### Properties
* **BidPrice**: string: The bid price for each EC2 Spot Instance type as defined by InstanceType. Expressed in USD. If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%. 
* **BidPriceAsPercentageOfOnDemandPrice**: int: The bid price, as a percentage of On-Demand price, for each EC2 Spot Instance as defined by InstanceType. Expressed as a number (for example, 20 specifies 20%). If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
* **Configurations**: [EMRConfiguration](#emrconfiguration)[]: A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.
* **CustomAmiId**: string: The custom AMI ID to use for the instance type.
* **EbsConfiguration**: [EbsConfiguration](#ebsconfiguration): The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by InstanceType.
* **InstanceType**: string (Required): An EC2 instance type, such as m3.xlarge. 
* **Priority**: int: The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type. Priority starts at 0, which is the highest priority. Amazon EMR considers the highest priority first.
* **WeightedCapacity**: int: The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.

## InstanceTypeConfig
### Properties
* **BidPrice**: string: The bid price for each Amazon EC2 Spot Instance type as defined by InstanceType. Expressed in USD. If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
* **BidPriceAsPercentageOfOnDemandPrice**: int: The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot Instance as defined by InstanceType. Expressed as a number (for example, 20 specifies 20%). If neither BidPrice nor BidPriceAsPercentageOfOnDemandPrice is provided, BidPriceAsPercentageOfOnDemandPrice defaults to 100%.
* **Configurations**: [ApplicationConfiguration](#applicationconfiguration)[]: An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.
* **CustomAmiId**: string: The custom AMI ID to use for the instance type.
* **EbsConfiguration**: [EbsConfiguration](#ebsconfiguration): The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by InstanceType.
* **InstanceType**: string (Required): An Amazon EC2 instance type, such as m3.xlarge.
* **Priority**: int: The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type.
* **WeightedCapacity**: int: The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.

## JobFlowInstancesConfig
### Properties
* **AdditionalMasterSecurityGroups**: string[]: A list of additional Amazon EC2 security group IDs for the master node.
* **AdditionalSlaveSecurityGroups**: string[]: A list of additional Amazon EC2 security group IDs for the core and task nodes.
* **CoreInstanceFleet**: [InstanceFleetConfig](#instancefleetconfig)
* **CoreInstanceGroup**: [InstanceGroupConfig](#instancegroupconfig): Configuration for the instance groups in a cluster.
* **Ec2KeyName**: string: The name of the EC2 key pair that can be used to connect to the master node using SSH as the user called 'hadoop'.
* **Ec2SubnetId**: string: Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value and your account supports EC2-Classic, the cluster launches in EC2-Classic.
* **Ec2SubnetIds**: string[]: Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.
* **EmrManagedMasterSecurityGroup**: string: The identifier of the Amazon EC2 security group for the master node. If you specify EmrManagedMasterSecurityGroup, you must also specify EmrManagedSlaveSecurityGroup.
* **EmrManagedSlaveSecurityGroup**: string: The identifier of the Amazon EC2 security group for the core and task nodes. If you specify EmrManagedSlaveSecurityGroup, you must also specify EmrManagedMasterSecurityGroup.
* **HadoopVersion**: string (WriteOnly): Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer maintained), "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the AmiVersion parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.
* **KeepJobFlowAliveWhenNoSteps**: bool: Specifies whether the cluster should remain available after completing all steps. Defaults to true. For more information about configuring cluster termination, see Control Cluster Termination in the EMR Management Guide.
* **MasterInstanceFleet**: [InstanceFleetConfig](#instancefleetconfig)
* **MasterInstanceGroup**: [InstanceGroupConfig](#instancegroupconfig): Configuration for the instance groups in a cluster.
* **Placement**: [PlacementType](#placementtype): The Availability Zone in which the cluster runs.
* **ServiceAccessSecurityGroup**: string: The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
* **TaskInstanceFleets**: [InstanceFleetConfig](#instancefleetconfig)[]
* **TaskInstanceGroups**: [InstanceGroupConfig](#instancegroupconfig)[]: Configuration for the instance groups in a cluster.
* **TerminationProtected**: bool: Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.
* **UnhealthyNodeReplacement**: bool: Indicates whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster.

## KerberosAttributes
### Properties
* **ADDomainJoinPassword**: string (WriteOnly): The Active Directory password for ADDomainJoinUser.
* **ADDomainJoinUser**: string (WriteOnly): Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.
* **CrossRealmTrustPrincipalPassword**: string (WriteOnly): Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.
* **KdcAdminPassword**: string (Required, WriteOnly): The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.
* **Realm**: string (Required): The name of the Kerberos realm to which all nodes in a cluster belong. For example, EC2.INTERNAL.

## KeyValue
### Properties
* **Key**: string
* **Value**: string

## KeyValue
### Properties
* **Key**: string
* **Value**: string

## LogTypesMap
### Properties

## ManagedScalingPolicy
### Properties
* **ComputeLimits**: [ComputeLimits](#computelimits)
* **ScalingStrategy**: string
* **UtilizationPerformanceIndex**: int

## MetricDimension
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## MetricDimension
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## MonitoringConfiguration
### Properties
* **CloudWatchLogConfiguration**: [CloudWatchLogConfiguration](#cloudwatchlogconfiguration)

## NotebookExecution_EnvironmentVariables
### Properties

## NotebookS3Location
### Properties
* **Bucket**: string: The Amazon S3 bucket that stores the notebook execution input.
* **Key**: string: The key to the Amazon S3 location that stores the notebook execution input.

## OnDemandCapacityReservationOptions
### Properties
* **CapacityReservationPreference**: string: Supported values: none, open
* **CapacityReservationResourceGroupArn**: string
* **UsageStrategy**: string: Supported values: use-capacity-reservations-first

## OnDemandCapacityReservationOptions
### Properties
* **CapacityReservationPreference**: string: Indicates the instance's Capacity Reservation preferences.
* **CapacityReservationResourceGroupArn**: string: The ARN of the Capacity Reservation resource group in which to run the instance.
* **UsageStrategy**: string: Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.

## OnDemandProvisioningSpecification
### Properties
* **AllocationStrategy**: string (Required): Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is lowest-price (the default), which launches the lowest price first.
* **CapacityReservationOptions**: [OnDemandCapacityReservationOptions](#ondemandcapacityreservationoptions)

## OnDemandProvisioningSpecification
### Properties
* **AllocationStrategy**: string (Required): Specifies the strategy to use in launching On-Demand instance fleets. Currently, the only option is lowest-price (the default), which launches the lowest price first.
* **CapacityReservationOptions**: [OnDemandCapacityReservationOptions](#ondemandcapacityreservationoptions)

## OnDemandResizingSpecification
### Properties
* **AllocationStrategy**: string
* **CapacityReservationOptions**: [OnDemandCapacityReservationOptions](#ondemandcapacityreservationoptions)
* **TimeoutDurationMinutes**: int

## OnDemandResizingSpecification
### Properties
* **AllocationStrategy**: string: Specifies the allocation strategy to use to launch On-Demand instances during a resize. The default is lowest-price.
* **CapacityReservationOptions**: [OnDemandCapacityReservationOptions](#ondemandcapacityreservationoptions): Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
* **TimeoutDurationMinutes**: int: On-Demand resize timeout in minutes.

## OutputNotebookS3Location
### Properties
* **Bucket**: string: The Amazon S3 bucket that stores the notebook execution output.
* **Key**: string: The key to the Amazon S3 location that stores the notebook execution output.

## PlacementGroupConfig
### Properties
* **InstanceRole**: string (Required): Role of the instance in the cluster.
* **PlacementStrategy**: string: Amazon EC2 Placement Group strategy associated with instance role.

## PlacementType
### Properties
* **AvailabilityZone**: string (Required): The Amazon EC2 Availability Zone for the cluster. AvailabilityZone is used for uniform instance groups, while AvailabilityZones (plural) is used for instance fleets.

## ScalingAction
### Properties
* **Market**: string: Not available for instance groups. Instance groups use the market type specified for the group.
* **SimpleScalingPolicyConfiguration**: [SimpleScalingPolicyConfiguration](#simplescalingpolicyconfiguration) (Required): The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.

## ScalingAction
### Properties
* **Market**: string
* **SimpleScalingPolicyConfiguration**: [SimpleScalingPolicyConfiguration](#simplescalingpolicyconfiguration) (Required)

## ScalingConstraints
### Properties
* **MaxCapacity**: int (Required): The upper boundary of EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.
* **MinCapacity**: int (Required): The lower boundary of EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.

## ScalingConstraints
### Properties
* **MaxCapacity**: int (Required)
* **MinCapacity**: int (Required)

## ScalingRule
### Properties
* **Action**: [ScalingAction](#scalingaction) (Required): The conditions that trigger an automatic scaling activity.
* **Description**: string: A friendly, more verbose description of the automatic scaling rule.
* **Name**: string (Required): The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.
* **Trigger**: [ScalingTrigger](#scalingtrigger) (Required): The CloudWatch alarm definition that determines when automatic scaling activity is triggered.

## ScalingRule
### Properties
* **Action**: [ScalingAction](#scalingaction) (Required)
* **Description**: string
* **Name**: string (Required)
* **Trigger**: [ScalingTrigger](#scalingtrigger) (Required)

## ScalingTrigger
### Properties
* **CloudWatchAlarmDefinition**: [CloudWatchAlarmDefinition](#cloudwatchalarmdefinition) (Required): The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.

## ScalingTrigger
### Properties
* **CloudWatchAlarmDefinition**: [CloudWatchAlarmDefinition](#cloudwatchalarmdefinition) (Required)

## ScriptBootstrapActionConfig
### Properties
* **Args**: string[]: A list of command line arguments to pass to the bootstrap action script.
* **Path**: string (Required): Location in Amazon S3 of the script to run during a bootstrap action.

## Session_Properties
### Properties

## SessionCloudWatchLoggingConfiguration
### Properties
* **Enabled**: bool: Whether CloudWatch Logs is enabled for the session.
* **EncryptionKeyArn**: string: The Amazon Resource Name (ARN) of the KMS key used to encrypt the logs published to CloudWatch Logs.
* **LogGroup**: string: The name of the log group where session logs are published.
* **LogStreamNamePrefix**: string: The prefix applied to the log stream name where session logs are published.
* **LogTypes**: [LogTypesMap](#logtypesmap)

## SessionManagedLoggingConfiguration
### Properties
* **Enabled**: bool: Whether Amazon EMR-managed logging is enabled for the session.
* **EncryptionKeyArn**: string: The Amazon Resource Name (ARN) of the KMS key used to encrypt the managed logs.

## SessionMonitoringConfiguration
### Properties
* **CloudWatchLoggingConfiguration**: [SessionCloudWatchLoggingConfiguration](#sessioncloudwatchloggingconfiguration)
* **ManagedLoggingConfiguration**: [SessionManagedLoggingConfiguration](#sessionmanagedloggingconfiguration)
* **S3LoggingConfiguration**: [SessionS3LoggingConfiguration](#sessions3loggingconfiguration)

## SessionS3LoggingConfiguration
### Properties
* **Enabled**: bool: Whether Amazon S3 logging is enabled for the session.
* **EncryptionKeyArn**: string: The Amazon Resource Name (ARN) of the KMS key used to encrypt logs published to Amazon S3.
* **LogTypes**: [LogTypesMap](#logtypesmap)
* **LogUri**: string: The Amazon S3 destination URI where session logs are published.

## SimpleScalingPolicyConfiguration
### Properties
* **AdjustmentType**: string: The way in which EC2 instances are added (if ScalingAdjustment is a positive number) or terminated (if ScalingAdjustment is a negative number) each time the scaling activity is triggered. CHANGE_IN_CAPACITY is the default. CHANGE_IN_CAPACITY indicates that the EC2 instance count increments or decrements by ScalingAdjustment, which should be expressed as an integer. PERCENT_CHANGE_IN_CAPACITY indicates the instance count increments or decrements by the percentage specified by ScalingAdjustment, which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. EXACT_CAPACITY indicates the scaling activity results in an instance group with the number of EC2 instances specified by ScalingAdjustment, which should be expressed as a positive integer.
* **CoolDown**: int: The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. The default value is 0.
* **ScalingAdjustment**: int (Required): The amount by which to scale in or scale out, based on the specified AdjustmentType. A positive value adds to the instance group's EC2 instance count while a negative number removes instances. If AdjustmentType is set to EXACT_CAPACITY, the number should only be a positive integer. If AdjustmentType is set to PERCENT_CHANGE_IN_CAPACITY, the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.

## SimpleScalingPolicyConfiguration
### Properties
* **AdjustmentType**: string
* **CoolDown**: int
* **ScalingAdjustment**: int (Required)

## SpotProvisioningSpecification
### Properties
* **AllocationStrategy**: string: Specifies the strategy to use in launching Spot Instance fleets. Currently, the only option is capacity-optimized (the default), which launches instances from Spot Instance pools with optimal capacity for the number of instances that are launching.
* **BlockDurationMinutes**: int: The defined duration for Spot Instances (also known as Spot blocks) in minutes. When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot Instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and provides a Spot Instance termination notice, which gives the instance a two-minute warning before it terminates.
* **TimeoutAction**: string (Required): The action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are TERMINATE_CLUSTER and SWITCH_TO_ON_DEMAND. SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
* **TimeoutDurationMinutes**: int (Required): The spot provisioning timeout period in minutes. If Spot Instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.

## SpotProvisioningSpecification
### Properties
* **AllocationStrategy**: string: Specifies one of the following strategies to launch Spot Instance fleets: price-capacity-optimized, capacity-optimized, lowest-price, or diversified
* **BlockDurationMinutes**: int: The defined duration for Spot Instances (also known as Spot blocks) in minutes. When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360.
* **TimeoutAction**: string (Required): The action to take when TargetSpotCapacity has not been fulfilled when the TimeoutDurationMinutes has expired; that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are TERMINATE_CLUSTER and SWITCH_TO_ON_DEMAND. SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
* **TimeoutDurationMinutes**: int (Required): The Spot provisioning timeout period in minutes. If Spot Instances are not provisioned within this time period, the TimeOutAction is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.

## SpotResizingSpecification
### Properties
* **AllocationStrategy**: string
* **TimeoutDurationMinutes**: int

## SpotResizingSpecification
### Properties
* **AllocationStrategy**: string: Specifies the allocation strategy to use to launch Spot instances during a resize.
* **TimeoutDurationMinutes**: int: Spot resize timeout in minutes.

## StepConfig
### Properties
* **ActionOnFailure**: string: The action to take when the step fails. Use one of the following values: 

    TERMINATE_CLUSTER - Shuts down the cluster.

    CANCEL_AND_WAIT - Cancels any pending steps and returns the cluster to the WAITING state.

    CONTINUE - Continues to the next step in the queue.

    TERMINATE_JOB_FLOW - Shuts down the cluster. TERMINATE_JOB_FLOW is provided for backward compatibility. We recommend using TERMINATE_CLUSTER instead.
 If a cluster's StepConcurrencyLevel is greater than 1, do not use AddJobFlowSteps to submit a step with this parameter set to CANCEL_AND_WAIT or TERMINATE_CLUSTER. The step is not submitted and the action fails with a message that the ActionOnFailure setting is not valid.

If you change a cluster's StepConcurrencyLevel to be greater than 1 while a step is running, the ActionOnFailure parameter may not behave as you expect. In this case, for a step that fails with this parameter set to CANCEL_AND_WAIT, pending steps and the running step are not canceled; for a step that fails with this parameter set to TERMINATE_CLUSTER, the cluster does not terminate.
* **HadoopJarStep**: [HadoopJarStepConfig](#hadoopjarstepconfig) (Required): The JAR file used for the step.
* **Name**: string (Required): The name of the step.

## Tag
### Properties
* **Key**: string (Required): A user-defined key, which is the minimum required information for a valid tag. For more information.
* **Value**: string (Required): A user-defined value, which is optional in a tag. For more information

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): A user-defined key, which is the minimum required information for a valid tag.
* **Value**: string (Required): A user-defined value, which is optional in a tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## VolumeSpecification
### Properties
* **Iops**: int: The number of I/O operations per second (IOPS) that the volume supports.
* **SizeInGB**: int (Required): The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
* **Throughput**: int: The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
* **VolumeType**: string (Required): The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and standard.

## VolumeSpecification
### Properties
* **Iops**: int: The number of I/O operations per second (IOPS) that the volume supports.
* **SizeInGB**: int (Required): The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
* **Throughput**: int: The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
* **VolumeType**: string (Required): The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and standard.

## VolumeSpecification
### Properties
* **Iops**: int
* **SizeInGB**: int (Required)
* **Throughput**: int
* **VolumeType**: string (Required)

