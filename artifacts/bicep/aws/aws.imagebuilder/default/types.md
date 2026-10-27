# AWS.ImageBuilder @ default

## Resource AWS.ImageBuilder/Component@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/ComponentProperties](#awsimagebuildercomponentproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/ContainerRecipe@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/ContainerRecipeProperties](#awsimagebuildercontainerrecipeproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/DistributionConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/DistributionConfigurationProperties](#awsimagebuilderdistributionconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/Image@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/ImageProperties](#awsimagebuilderimageproperties) (Identifier): properties of the resource

## Resource AWS.ImageBuilder/ImagePipeline@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/ImagePipelineProperties](#awsimagebuilderimagepipelineproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/ImageRecipe@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/ImageRecipeProperties](#awsimagebuilderimagerecipeproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/InfrastructureConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/InfrastructureConfigurationProperties](#awsimagebuilderinfrastructureconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/LifecyclePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/LifecyclePolicyProperties](#awsimagebuilderlifecyclepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.ImageBuilder/Workflow@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/WorkflowProperties](#awsimagebuilderworkflowproperties) (Required, Identifier): properties of the resource

## Action
### Properties
* **IncludeResources**: [IncludeResources](#includeresources)
* **Type**: string (Required): The action type of the policy detail.

## AdditionalInstanceConfiguration
### Properties
* **SystemsManagerAgent**: [SystemsManagerAgent](#systemsmanageragent): Contains settings for the SSM agent on your build instance.
* **UserDataOverride**: string: Use this property to provide commands or a command script to run when you launch your build instance.

## AmiDistributionConfiguration
### Properties
* **AmiTags**: [DistributionConfiguration_AmiTags](#distributionconfigurationamitags): The tags to apply to AMIs distributed to this Region.
* **Description**: string: The description of the AMI distribution configuration.
* **KmsKeyId**: string: The KMS key identifier used to encrypt the distributed image.
* **LaunchPermissionConfiguration**: [LaunchPermissionConfiguration](#launchpermissionconfiguration)
* **Name**: string: The name of the AMI distribution configuration.
* **TargetAccountIds**: string[]: The ID of accounts to which you want to distribute an image.

## AmiExclusionRules
### Properties
* **IsPublic**: bool: Use to apply lifecycle policy actions on whether the AMI is public.
* **LastLaunched**: [LastLaunched](#lastlaunched): Use to apply lifecycle policy actions on AMIs launched before a certain time.
* **Regions**: string[]: Use to apply lifecycle policy actions on AMIs distributed to a set of regions.
* **SharedAccounts**: string[]: Use to apply lifecycle policy actions on AMIs shared with a set of regions.
* **TagMap**: [LifecyclePolicy_TagMap](#lifecyclepolicytagmap): The AMIs to select by tag.

## AutoDisablePolicy
### Properties
* **FailureCount**: int (Required): The number of consecutive failures after which the pipeline should be automatically disabled.

## AutoScalingGroup
### Properties
* **CapacityWaitTimeoutSeconds**: int: The number of seconds that Image Builder waits for an instance to become available in the group before the build fails. If you set this value to 0 or omit it, the build fails as soon as the group has no instance available.
* **Name**: string (Required): The name of the Auto Scaling group, in the same account and AWS Region as the infrastructure configuration.

## AWS.ImageBuilder/ComponentProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the component.
* **ChangeDescription**: string: The change description of the component.
* **Data**: string (WriteOnly): The data of the component.
* **Description**: string: The description of the component.
* **Encrypted**: bool (ReadOnly): The encryption status of the component.
* **KmsKeyId**: string: The KMS key identifier used to encrypt the component.
* **LatestVersion**: [LatestVersion](#latestversion) (ReadOnly): The latest version references of the component.
* **Name**: string (Required): The name of the component.
* **Platform**: string (Required): The platform of the component.
* **SupportedOsVersions**: string[]: The operating system (OS) version supported by the component.
* **Tags**: [Component_Tags](#componenttags): The tags associated with the component.
* **Type**: string (ReadOnly): The type of the component denotes whether the component is used to build the image or only to test it. 
* **Uri**: string (WriteOnly): The uri of the component.
* **Version**: string (Required): The version of the component.

## AWS.ImageBuilder/ContainerRecipeProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the container recipe.
* **Components**: [ComponentConfiguration](#componentconfiguration)[]: Components for build and test that are included in the container recipe.
* **ContainerType**: string (Required): Specifies the type of container, such as Docker.
* **Description**: string: The description of the container recipe.
* **DockerfileTemplateData**: string (WriteOnly): Dockerfiles are text documents that are used to build Docker containers, and ensure that they contain all of the elements required by the application running inside. The template data consists of contextual variables where Image Builder places build information or scripts, based on your container image recipe.
* **DockerfileTemplateUri**: string (WriteOnly): The S3 URI for the Dockerfile that will be used to build your container image.
* **ImageOsVersionOverride**: string (WriteOnly): Specifies the operating system version for the source image.
* **InstanceConfiguration**: [InstanceConfiguration](#instanceconfiguration): A group of options that can be used to configure an instance for building and testing container images.
* **KmsKeyId**: string: Identifies which KMS key is used to encrypt the container image.
* **LatestVersion**: [LatestVersion](#latestversion) (ReadOnly): The latest version references of the container recipe.
* **Name**: string (Required): The name of the container recipe.
* **ParentImage**: string (Required): The source image for the container recipe.
* **PlatformOverride**: string (WriteOnly): Specifies the operating system platform when you use a custom source image.
* **Tags**: [ContainerRecipe_Tags](#containerrecipetags): Tags that are attached to the container recipe.
* **TargetRepository**: [TargetContainerRepository](#targetcontainerrepository) (Required): The destination repository for the container image.
* **Version**: string (Required): The semantic version of the container recipe (<major>.<minor>.<patch>).
* **WorkingDirectory**: string: The working directory to be used during build and test workflows.

## AWS.ImageBuilder/DistributionConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the distribution configuration.
* **Description**: string: The description of the distribution configuration.
* **Distributions**: [Distribution](#distribution)[] (Required): The distributions of the distribution configuration.
* **Name**: string (Required): The name of the distribution configuration.
* **Tags**: [DistributionConfiguration_Tags](#distributionconfigurationtags): The tags associated with the component.

## AWS.ImageBuilder/ImagePipelineProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the image pipeline.
* **ContainerRecipeArn**: string: The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
* **DeploymentId**: string (ReadOnly): The deployment ID of the pipeline, used for resource create/update triggers.
* **Description**: string: The description of the image pipeline.
* **DistributionConfigurationArn**: string: The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
* **EnhancedImageMetadataEnabled**: bool: Collects additional information about the image being created, including the operating system (OS) version and package list.
* **ExecutionRole**: string: The execution role name/ARN for the image build, if provided
* **ImageRecipeArn**: string: The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
* **ImageScanningConfiguration**: [ImageScanningConfiguration](#imagescanningconfiguration): Contains settings for vulnerability scans that Amazon Inspector runs against the test instance during image creation.
* **ImageTags**: [ImagePipeline_ImageTags](#imagepipelineimagetags): The tags to be applied to images created by this pipeline.
* **ImageTestsConfiguration**: [ImageTestsConfiguration](#imagetestsconfiguration): The image tests configuration of the image pipeline.
* **InfrastructureConfigurationArn**: string (Required): The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
* **LoggingConfiguration**: [PipelineLoggingConfiguration](#pipelineloggingconfiguration): The logging configuration settings for the image pipeline.
* **Name**: string (Required): The name of the image pipeline.
* **Schedule**: [Schedule](#schedule): The schedule of the image pipeline.
* **Status**: string: The status of the image pipeline.
* **Tags**: [ImagePipeline_Tags](#imagepipelinetags): The tags of this image pipeline.
* **Workflows**: [WorkflowConfiguration](#workflowconfiguration)[]: Workflows to define the image build process

## AWS.ImageBuilder/ImageProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the image.
* **ContainerRecipeArn**: string: The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
* **DeletionSettings**: [DeletionSettings](#deletionsettings) (WriteOnly): The deletion settings of the image, indicating whether to delete the underlying resources in addition to the image.
* **DistributionConfigurationArn**: string: The Amazon Resource Name (ARN) of the distribution configuration.
* **EnhancedImageMetadataEnabled**: bool: Collects additional information about the image being created, including the operating system (OS) version and package list.
* **ExecutionRole**: string: The execution role name/ARN for the image build, if provided
* **ImageId**: string (ReadOnly): The AMI ID of the EC2 AMI in current region.
* **ImagePipelineExecutionSettings**: [ImagePipelineExecutionSettings](#imagepipelineexecutionsettings) (WriteOnly): The image pipeline execution settings of the image.
* **ImageRecipeArn**: string: The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
* **ImageScanningConfiguration**: [ImageScanningConfiguration](#imagescanningconfiguration): Contains settings for vulnerability scans that Amazon Inspector runs against the test instance during image creation.
* **ImageTestsConfiguration**: [ImageTestsConfiguration](#imagetestsconfiguration): The image tests configuration used when creating this image.
* **ImageUri**: string (ReadOnly): URI for containers created in current Region with default ECR image tag
* **InfrastructureConfigurationArn**: string: The Amazon Resource Name (ARN) of the infrastructure configuration.
* **LatestVersion**: [LatestVersion](#latestversion) (ReadOnly): The latest version references of the image.
* **LoggingConfiguration**: [ImageLoggingConfiguration](#imageloggingconfiguration): The logging configuration settings for the image.
* **Name**: string (ReadOnly): The name of the image.
* **Tags**: [Image_Tags](#imagetags): The tags associated with the image.
* **Workflows**: [WorkflowConfiguration](#workflowconfiguration)[]: Workflows to define the image build process

## AWS.ImageBuilder/ImageRecipeProperties
### Properties
* **AdditionalInstanceConfiguration**: [AdditionalInstanceConfiguration](#additionalinstanceconfiguration): Specify additional settings and launch scripts for your build instances.
* **AmiTags**: [ImageRecipe_AmiTags](#imagerecipeamitags): The tags to apply to the AMI created by this image recipe.
* **AmiWatermarks**: string[]: The AMI watermark names to attach to the output AMI from this recipe. AMI watermarks are lineage markers that automatically propagate to derivative AMIs when the source AMI is copied or distributed.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the image recipe.
* **BlockDeviceMappings**: [InstanceBlockDeviceMapping](#instanceblockdevicemapping)[]: The block device mappings to apply when creating images from this recipe.
* **Components**: [ComponentConfiguration](#componentconfiguration)[]: The components of the image recipe.
* **Description**: string: The description of the image recipe.
* **LatestVersion**: [LatestVersion](#latestversion) (ReadOnly): The latest version references of the image recipe.
* **Name**: string (Required): The name of the image recipe.
* **ParentImage**: string (Required): The parent image of the image recipe.
* **Tags**: [ImageRecipe_Tags](#imagerecipetags): The tags of the image recipe.
* **Version**: string (Required): The version of the image recipe.
* **WorkingDirectory**: string: The working directory to be used during build and test workflows.

## AWS.ImageBuilder/InfrastructureConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the infrastructure configuration.
* **Description**: string: The description of the infrastructure configuration.
* **InstanceMetadataOptions**: [InstanceMetadataOptions](#instancemetadataoptions): The instance metadata option settings for the infrastructure configuration.
* **InstanceProfileName**: string (Required): The instance profile of the infrastructure configuration.
* **InstanceTypes**: string[]: The instance types of the infrastructure configuration.
* **KeyPair**: string: The EC2 key pair of the infrastructure configuration..
* **Logging**: [Logging](#logging): The logging configuration of the infrastructure configuration.
* **Name**: string (Required): The name of the infrastructure configuration.
* **ParentInstance**: [ParentInstance](#parentinstance): The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from, instead of launching a new instance. This applies only to the build phase.
* **Placement**: [Placement](#placement): The placement option settings for the infrastructure configuration.
* **ResourceTags**: [InfrastructureConfiguration_ResourceTags](#infrastructureconfigurationresourcetags): The tags attached to the resource created by Image Builder.
* **SecurityGroupIds**: string[]: The security group IDs of the infrastructure configuration.
* **SnsTopicArn**: string: The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
* **SubnetId**: string: The subnet ID of the infrastructure configuration.
* **Tags**: [InfrastructureConfiguration_Tags](#infrastructureconfigurationtags): The tags associated with the component.
* **TerminateInstanceOnCompletion**: bool: Specifies whether Image Builder terminates build and test instances that are still running when image creation ends without a failure. A TerminateInstance step in a workflow runs even when this is false.
* **TerminateInstanceOnFailure**: bool: The terminate instance on failure configuration of the infrastructure configuration.

## AWS.ImageBuilder/LifecyclePolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the lifecycle policy.
* **Description**: string: The description of the lifecycle policy.
* **ExecutionRole**: string (Required): The execution role of the lifecycle policy.
* **Name**: string (Required): The name of the lifecycle policy.
* **PolicyDetails**: [PolicyDetail](#policydetail)[] (Required): The policy details of the lifecycle policy.
* **ResourceSelection**: [ResourceSelection](#resourceselection) (Required): The resource selection of the lifecycle policy.
* **ResourceType**: string (Required): The resource type of the lifecycle policy.
* **Status**: string: The status of the lifecycle policy.
* **Tags**: [LifecyclePolicy_Tags](#lifecyclepolicytags): The tags associated with the lifecycle policy.

## AWS.ImageBuilder/WorkflowProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the workflow.
* **ChangeDescription**: string: The change description of the workflow.
* **Data**: string (WriteOnly): The data of the workflow.
* **Description**: string: The description of the workflow.
* **KmsKeyId**: string: The KMS key identifier used to encrypt the workflow.
* **LatestVersion**: [LatestVersion](#latestversion) (ReadOnly): The latest version references of the workflow.
* **Name**: string (Required): The name of the workflow.
* **Tags**: [Workflow_Tags](#workflowtags): The tags associated with the workflow.
* **Type**: string (Required): The type of the workflow denotes whether the workflow is used to build, test, or distribute.
* **Uri**: string (WriteOnly): The uri of the workflow.
* **Version**: string (Required): The version of the workflow.

## Component_Tags
### Properties

## ComponentConfiguration
### Properties
* **ComponentArn**: string: The Amazon Resource Name (ARN) of the component.
* **Parameters**: [ComponentParameter](#componentparameter)[]: A group of parameter settings that are used to configure the component for a specific recipe.

## ComponentConfiguration
### Properties
* **ComponentArn**: string: The Amazon Resource Name (ARN) of the component.
* **Parameters**: [ComponentParameter](#componentparameter)[]: A group of parameter settings that are used to configure the component for a specific recipe.

## ComponentParameter
### Properties
* **Name**: string (Required): The name of the component parameter to set.
* **Value**: string[] (Required): Sets the value for the named component parameter.

## ComponentParameter
### Properties
* **Name**: string (Required): The name of the component parameter to set.
* **Value**: string[] (Required): Sets the value for the named component parameter.

## ContainerDistributionConfiguration
### Properties
* **ContainerTags**: string[]: Tags that are attached to the container distribution configuration.
* **Description**: string: The description of the container distribution configuration.
* **TargetRepository**: [TargetContainerRepository](#targetcontainerrepository): The destination repository for the container distribution configuration.

## ContainerRecipe_Tags
### Properties

## DeletionSettings
### Properties
* **ExecutionRole**: string (Required): The execution role to use for deleting the image, as well as underlying resources.

## Distribution
### Properties
* **AmiDistributionConfiguration**: [AmiDistributionConfiguration](#amidistributionconfiguration)
* **ContainerDistributionConfiguration**: [ContainerDistributionConfiguration](#containerdistributionconfiguration)
* **FastLaunchConfigurations**: [FastLaunchConfiguration](#fastlaunchconfiguration)[]: The Windows faster-launching configurations to use for AMI distribution.
* **LaunchTemplateConfigurations**: [LaunchTemplateConfiguration](#launchtemplateconfiguration)[]: A group of launchTemplateConfiguration settings that apply to image distribution.
* **LicenseConfigurationArns**: string[]: The License Manager Configuration to associate with the AMI in the specified Region.
* **Region**: string (Required): region
* **SsmParameterConfigurations**: [SsmParameterConfiguration](#ssmparameterconfiguration)[]: The SSM parameter configurations to use for AMI distribution.

## DistributionConfiguration_AmiTags
### Properties

## DistributionConfiguration_Tags
### Properties

## EbsInstanceBlockDeviceSpecification
### Properties
* **DeleteOnTermination**: bool: Use to configure delete on termination of the associated device.
* **Encrypted**: bool: Use to configure device encryption.
* **Iops**: int: Use to configure device IOPS.
* **KmsKeyId**: string: Use to configure the KMS key to use when encrypting the device.
* **SnapshotId**: string: The snapshot that defines the device contents.
* **Throughput**: int: For GP3 volumes only - The throughput in MiB/s that the volume supports.
* **VolumeSize**: int: Use to override the device's volume size.
* **VolumeType**: string: Use to override the device's volume type.

## EbsInstanceBlockDeviceSpecification
### Properties
* **DeleteOnTermination**: bool: Use to configure delete on termination of the associated device.
* **Encrypted**: bool: Use to configure device encryption.
* **Iops**: int: Use to configure device IOPS.
* **KmsKeyId**: string: Use to configure the KMS key to use when encrypting the device.
* **SnapshotId**: string: The snapshot that defines the device contents.
* **Throughput**: int: For GP3 volumes only - The throughput in MiB/s that the volume supports.
* **VolumeSize**: int: Use to override the device's volume size.
* **VolumeType**: string: Use to override the device's volume type.

## EcrConfiguration
### Properties
* **ContainerTags**: string[]: Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
* **RepositoryName**: string: The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don’t provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.

## EcrConfiguration
### Properties
* **ContainerTags**: string[]: Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
* **RepositoryName**: string: The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.

## ExclusionRules
### Properties
* **Amis**: [AmiExclusionRules](#amiexclusionrules)
* **TagMap**: [LifecyclePolicy_TagMap](#lifecyclepolicytagmap): The Image Builder tags to filter on.

## FastLaunchConfiguration
### Properties
* **AccountId**: string: The owner account ID for the fast-launch enabled Windows AMI.
* **Enabled**: bool: A Boolean that represents the current state of faster launching for the Windows AMI. Set to true to start using Windows faster launching, or false to stop using it.
* **LaunchTemplate**: [FastLaunchLaunchTemplateSpecification](#fastlaunchlaunchtemplatespecification): The launch template that the fast-launch enabled Windows AMI uses when it launches Windows instances to create pre-provisioned snapshots.
* **MaxParallelLaunches**: int: The maximum number of parallel instances that are launched for creating resources.
* **SnapshotConfiguration**: [FastLaunchSnapshotConfiguration](#fastlaunchsnapshotconfiguration): Configuration settings for managing the number of snapshots that are created from pre-provisioned instances for the Windows AMI when faster launching is enabled.

## FastLaunchLaunchTemplateSpecification
### Properties
* **LaunchTemplateId**: string: The ID of the launch template to use for faster launching for a Windows AMI.
* **LaunchTemplateName**: string: The name of the launch template to use for faster launching for a Windows AMI.
* **LaunchTemplateVersion**: string: The version of the launch template to use for faster launching for a Windows AMI.

## FastLaunchSnapshotConfiguration
### Properties
* **TargetResourceCount**: int: The number of pre-provisioned snapshots to keep on hand for a fast-launch enabled Windows AMI.

## Filter
### Properties
* **RetainAtLeast**: int: The minimum number of Image Builder resources to retain.
* **Type**: string (Required): The filter type.
* **Unit**: string: The value's time unit.
* **Value**: int (Required): The filter value.

## Image_Tags
### Properties

## ImageLoggingConfiguration
### Properties
* **LogGroupName**: string: The name of the log group for image build logs.

## ImagePipeline_ImageTags
### Properties

## ImagePipeline_Tags
### Properties

## ImagePipelineExecutionSettings
### Properties
* **DeploymentId**: string: The deployment ID of the pipeline, used to trigger new image pipeline executions.
* **OnUpdate**: bool: Whether to trigger the image pipeline when the pipeline is updated. False by default.

## ImageRecipe_AmiTags
### Properties

## ImageRecipe_Tags
### Properties

## ImageScanningConfiguration
### Properties
* **EcrConfiguration**: [EcrConfiguration](#ecrconfiguration): Contains ECR settings for vulnerability scans.
* **ImageScanningEnabled**: bool: This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the test instance when you create a new image.

## ImageScanningConfiguration
### Properties
* **EcrConfiguration**: [EcrConfiguration](#ecrconfiguration): Contains ECR settings for vulnerability scans.
* **ImageScanningEnabled**: bool: This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the test instance when you create a new image.

## ImageTestsConfiguration
### Properties
* **ImageTestsEnabled**: bool: ImageTestsEnabled
* **TimeoutMinutes**: int: TimeoutMinutes

## ImageTestsConfiguration
### Properties
* **ImageTestsEnabled**: bool: Defines if tests should be executed when building this image.
* **TimeoutMinutes**: int: The maximum time in minutes that tests are permitted to run.

## IncludeResources
### Properties
* **Amis**: bool: Use to configure lifecycle actions on AMIs.
* **Containers**: bool: Use to configure lifecycle actions on containers.
* **Snapshots**: bool: Use to configure lifecycle actions on snapshots.

## InfrastructureConfiguration_ResourceTags
### Properties

## InfrastructureConfiguration_Tags
### Properties

## InstanceBlockDeviceMapping
### Properties
* **DeviceName**: string: The device to which these mappings apply.
* **Ebs**: [EbsInstanceBlockDeviceSpecification](#ebsinstanceblockdevicespecification): Use to manage Amazon EBS-specific configuration for this mapping.
* **NoDevice**: string: Use to remove a mapping from the parent image.
* **VirtualName**: string: Use to manage instance ephemeral devices.

## InstanceBlockDeviceMapping
### Properties
* **DeviceName**: string: The device to which these mappings apply.
* **Ebs**: [EbsInstanceBlockDeviceSpecification](#ebsinstanceblockdevicespecification): Use to manage Amazon EBS-specific configuration for this mapping.
* **NoDevice**: string: Use to remove a mapping from the parent image.
* **VirtualName**: string: Use to manage instance ephemeral devices.

## InstanceConfiguration
### Properties
* **BlockDeviceMappings**: [InstanceBlockDeviceMapping](#instanceblockdevicemapping)[]: Defines the block devices to attach for building an instance from this Image Builder AMI.
* **Image**: string: The AMI ID to use as the base image for a container build and test instance. If not specified, Image Builder will use the appropriate ECS-optimized AMI as a base image.

## InstanceMetadataOptions
### Properties
* **HttpPutResponseHopLimit**: int: Limit the number of hops that an instance metadata request can traverse to reach its destination.
* **HttpTokens**: string: Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows: 

## LastLaunched
### Properties
* **Unit**: string (Required): The value's time unit.
* **Value**: int (Required): The last launched value.

## LatestVersion
### Properties
* **Arn**: string (ReadOnly, Identifier): The latest version ARN of the created component.
* **Major**: string (ReadOnly): The latest version ARN of the created component, with the same major version.
* **Minor**: string (ReadOnly): The latest version ARN of the created component, with the same minor version.
* **Patch**: string (ReadOnly): The latest version ARN of the created component, with the same patch version.

## LatestVersion
### Properties
* **Arn**: string (ReadOnly, Identifier): The latest version ARN of the created container recipe.
* **Major**: string (ReadOnly): The latest version ARN of the created container recipe, with the same major version.
* **Minor**: string (ReadOnly): The latest version ARN of the created container recipe, with the same minor version.
* **Patch**: string (ReadOnly): The latest version ARN of the created container recipe, with the same patch version.

## LatestVersion
### Properties
* **Arn**: string (ReadOnly, Identifier): The latest version ARN of the created image.
* **Major**: string (ReadOnly): The latest version ARN of the created image, with the same major version.
* **Minor**: string (ReadOnly): The latest version ARN of the created image, with the same minor version.
* **Patch**: string (ReadOnly): The latest version ARN of the created image, with the same patch version.

## LatestVersion
### Properties
* **Arn**: string (ReadOnly, Identifier): The latest version ARN of the created image recipe.
* **Major**: string (ReadOnly): The latest version ARN of the created image recipe, with the same major version.
* **Minor**: string (ReadOnly): The latest version ARN of the created image recipe, with the same minor version.
* **Patch**: string (ReadOnly): The latest version ARN of the created image recipe, with the same patch version.

## LatestVersion
### Properties
* **Arn**: string (ReadOnly, Identifier): The latest version ARN of the created workflow.
* **Major**: string (ReadOnly): The latest version ARN of the created workflow, with the same major version.
* **Minor**: string (ReadOnly): The latest version ARN of the created workflow, with the same minor version.
* **Patch**: string (ReadOnly): The latest version ARN of the created workflow, with the same patch version.

## LaunchPermissionConfiguration
### Properties
* **OrganizationalUnitArns**: string[]: The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
* **OrganizationArns**: string[]: The ARN for an Amazon Web Services Organization that you want to share your AMI with.
* **UserGroups**: string[]: The name of the group.
* **UserIds**: string[]: The AWS account ID.

## LaunchTemplateConfiguration
### Properties
* **AccountId**: string: The account ID that this configuration applies to.
* **LaunchTemplateId**: string: Identifies the EC2 launch template to use.
* **SetDefaultVersion**: bool: Set the specified EC2 launch template as the default launch template for the specified account.

## LifecyclePolicy_TagMap
### Properties

## LifecyclePolicy_TagMap
### Properties

## LifecyclePolicy_TagMap
### Properties

## LifecyclePolicy_Tags
### Properties

## Logging
### Properties
* **S3Logs**: [S3Logs](#s3logs)

## ParentInstance
### Properties
* **AutoScalingGroup**: [AutoScalingGroup](#autoscalinggroup) (Required): The Amazon EC2 Auto Scaling group that Image Builder takes the build instance from.

## PipelineLoggingConfiguration
### Properties
* **ImageLogGroupName**: string: The name of the log group for image build logs.
* **PipelineLogGroupName**: string: The name of the log group for pipeline execution logs.

## Placement
### Properties
* **AvailabilityZone**: string: AvailabilityZone
* **HostId**: string: HostId
* **HostResourceGroupArn**: string: HostResourceGroupArn
* **Tenancy**: string: Tenancy

## PolicyDetail
### Properties
* **Action**: [Action](#action) (Required)
* **ExclusionRules**: [ExclusionRules](#exclusionrules)
* **Filter**: [Filter](#filter) (Required)

## RecipeSelection
### Properties
* **Name**: string (Required): The recipe name.
* **SemanticVersion**: string (Required): The recipe version.

## ResourceSelection
### Properties
* **Recipes**: [RecipeSelection](#recipeselection)[]: The recipes to select.
* **TagMap**: [LifecyclePolicy_TagMap](#lifecyclepolicytagmap): The Image Builder resources to select by tag.

## S3Logs
### Properties
* **S3BucketName**: string: S3BucketName
* **S3KeyPrefix**: string: S3KeyPrefix

## Schedule
### Properties
* **AutoDisablePolicy**: [AutoDisablePolicy](#autodisablepolicy): The auto-disable policy for the image pipeline.
* **PipelineExecutionStartCondition**: string: The condition configures when the pipeline should trigger a new image build.
* **ScheduleExpression**: string: The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.
* **Timezone**: string: The timezone that applies to the scheduling expression, for example "Etc/UTC" or "America/Los_Angeles" in IANA timezone format. If not specified, this defaults to UTC.

## SsmParameterConfiguration
### Properties
* **AmiAccountId**: string: The account ID for the AMI to update the parameter with.
* **DataType**: string: The data type of the SSM parameter.
* **ParameterName**: string (Required): The name of the SSM parameter.

## SystemsManagerAgent
### Properties
* **UninstallAfterBuild**: bool: Controls whether the SSM agent is removed from your final build image, prior to creating the new AMI. If this is set to true, then the agent is removed from the final image. If it's set to false, then the agent is left in, so that it is included in the new AMI. The default value is false.

## TargetContainerRepository
### Properties
* **RepositoryName**: string: The name of the container repository where the output container image is stored. This name is prefixed by the repository location.
* **Service**: string: Specifies the service in which this image was registered.

## TargetContainerRepository
### Properties
* **RepositoryName**: string: The repository name of target container repository.
* **Service**: string: The service of target container repository.

## Workflow_Tags
### Properties

## WorkflowConfiguration
### Properties
* **OnFailure**: string: Define execution decision in case of workflow failure
* **ParallelGroup**: string: The parallel group name
* **Parameters**: [WorkflowParameter](#workflowparameter)[]: The parameters associated with the workflow
* **WorkflowArn**: string: The Amazon Resource Name (ARN) of the workflow

## WorkflowConfiguration
### Properties
* **OnFailure**: string: Define execution decision in case of workflow failure
* **ParallelGroup**: string: The parallel group name
* **Parameters**: [WorkflowParameter](#workflowparameter)[]: The parameters associated with the workflow
* **WorkflowArn**: string: The Amazon Resource Name (ARN) of the workflow

## WorkflowParameter
### Properties
* **Name**: string
* **Value**: string[]

## WorkflowParameter
### Properties
* **Name**: string
* **Value**: string[]

