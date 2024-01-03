# AWS.ImageBuilder @ default

## Resource AWS.ImageBuilder/DistributionConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/DistributionConfigurationProperties](#awsimagebuilderdistributionconfigurationproperties) (Required): properties of the resource

## Resource AWS.ImageBuilder/ImagePipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/ImagePipelineProperties](#awsimagebuilderimagepipelineproperties) (Required): properties of the resource

## Resource AWS.ImageBuilder/InfrastructureConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/InfrastructureConfigurationProperties](#awsimagebuilderinfrastructureconfigurationproperties) (Required): properties of the resource

## Resource AWS.ImageBuilder/LifecyclePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ImageBuilder/LifecyclePolicyProperties](#awsimagebuilderlifecyclepolicyproperties) (Required): properties of the resource

## AWS.ImageBuilder/DistributionConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the distribution configuration.
* **Description**: string: The description of the distribution configuration.
* **Distributions**: [Distribution](#distribution)[] (Required): The distributions of the distribution configuration.
* **Name**: string (Required): The name of the distribution configuration.
* **Tags**: [DistributionConfiguration_Tags](#distributionconfigurationtags): The tags associated with the component.

## Distribution
### Properties
* **AmiDistributionConfiguration**: [AmiDistributionConfiguration](#amidistributionconfiguration)
* **ContainerDistributionConfiguration**: [ContainerDistributionConfiguration](#containerdistributionconfiguration)
* **FastLaunchConfigurations**: [FastLaunchConfiguration](#fastlaunchconfiguration)[]: The Windows faster-launching configurations to use for AMI distribution.
* **LaunchTemplateConfigurations**: [LaunchTemplateConfiguration](#launchtemplateconfiguration)[]: A group of launchTemplateConfiguration settings that apply to image distribution.
* **LicenseConfigurationArns**: string[]: The License Manager Configuration to associate with the AMI in the specified Region.
* **Region**: string (Required): region

## AmiDistributionConfiguration
### Properties
* **AmiTags**: [DistributionConfiguration_AmiTags](#distributionconfigurationamitags): The tags to apply to AMIs distributed to this Region.
* **Description**: string: The description of the AMI distribution configuration.
* **KmsKeyId**: string: The KMS key identifier used to encrypt the distributed image.
* **LaunchPermissionConfiguration**: [LaunchPermissionConfiguration](#launchpermissionconfiguration)
* **Name**: string: The name of the AMI distribution configuration.
* **TargetAccountIds**: string[]: The ID of accounts to which you want to distribute an image.

## DistributionConfiguration_AmiTags
### Properties

## LaunchPermissionConfiguration
### Properties
* **OrganizationalUnitArns**: string[]: The ARN for an Organizations organizational unit (OU) that you want to share your AMI with.
* **OrganizationArns**: string[]: The ARN for an Amazon Web Services Organization that you want to share your AMI with.
* **UserGroups**: string[]: The name of the group.
* **UserIds**: string[]: The AWS account ID.

## ContainerDistributionConfiguration
### Properties
* **ContainerTags**: string[]: Tags that are attached to the container distribution configuration.
* **Description**: string: The description of the container distribution configuration.
* **TargetRepository**: [TargetContainerRepository](#targetcontainerrepository): The destination repository for the container distribution configuration.

## TargetContainerRepository
### Properties
* **RepositoryName**: string: The repository name of target container repository.
* **Service**: string: The service of target container repository.

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

## LaunchTemplateConfiguration
### Properties
* **AccountId**: string: The account ID that this configuration applies to.
* **LaunchTemplateId**: string: Identifies the EC2 launch template to use.
* **SetDefaultVersion**: bool: Set the specified EC2 launch template as the default launch template for the specified account.

## DistributionConfiguration_Tags
### Properties

## AWS.ImageBuilder/ImagePipelineProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the image pipeline.
* **ContainerRecipeArn**: string: The Amazon Resource Name (ARN) of the container recipe that defines how images are configured and tested.
* **Description**: string: The description of the image pipeline.
* **DistributionConfigurationArn**: string: The Amazon Resource Name (ARN) of the distribution configuration associated with this image pipeline.
* **EnhancedImageMetadataEnabled**: bool: Collects additional information about the image being created, including the operating system (OS) version and package list.
* **ExecutionRole**: string: The execution role name/ARN for the image build, if provided
* **ImageRecipeArn**: string: The Amazon Resource Name (ARN) of the image recipe that defines how images are configured, tested, and assessed.
* **ImageScanningConfiguration**: [ImageScanningConfiguration](#imagescanningconfiguration): Contains settings for vulnerability scans.
* **ImageTestsConfiguration**: [ImageTestsConfiguration](#imagetestsconfiguration): The image tests configuration of the image pipeline.
* **InfrastructureConfigurationArn**: string (Required): The Amazon Resource Name (ARN) of the infrastructure configuration associated with this image pipeline.
* **Name**: string (Required): The name of the image pipeline.
* **Schedule**: [Schedule](#schedule): The schedule of the image pipeline.
* **Status**: string: The status of the image pipeline.
* **Tags**: [ImagePipeline_Tags](#imagepipelinetags): The tags of this image pipeline.
* **Workflows**: [WorkflowConfiguration](#workflowconfiguration)[]: Workflows to define the image build process

## ImageScanningConfiguration
### Properties
* **EcrConfiguration**: [EcrConfiguration](#ecrconfiguration): Contains ECR settings for vulnerability scans.
* **ImageScanningEnabled**: bool: This sets whether Image Builder keeps a snapshot of the vulnerability scans that Amazon Inspector runs against the build instance when you create a new image.

## EcrConfiguration
### Properties
* **ContainerTags**: string[]: Tags for Image Builder to apply the output container image that is scanned. Tags can help you identify and manage your scanned images.
* **RepositoryName**: string: The name of the container repository that Amazon Inspector scans to identify findings for your container images. The name includes the path for the repository location. If you don't provide this information, Image Builder creates a repository in your account named image-builder-image-scanning-repository to use for vulnerability scans for your output container images.

## ImageTestsConfiguration
### Properties
* **ImageTestsEnabled**: bool: Defines if tests should be executed when building this image.
* **TimeoutMinutes**: int: The maximum time in minutes that tests are permitted to run.

## Schedule
### Properties
* **PipelineExecutionStartCondition**: string: The condition configures when the pipeline should trigger a new image build.
* **ScheduleExpression**: string: The expression determines how often EC2 Image Builder evaluates your pipelineExecutionStartCondition.

## ImagePipeline_Tags
### Properties

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
* **ResourceTags**: [InfrastructureConfiguration_ResourceTags](#infrastructureconfigurationresourcetags): The tags attached to the resource created by Image Builder.
* **SecurityGroupIds**: string[]: The security group IDs of the infrastructure configuration.
* **SnsTopicArn**: string: The SNS Topic Amazon Resource Name (ARN) of the infrastructure configuration.
* **SubnetId**: string: The subnet ID of the infrastructure configuration.
* **Tags**: [InfrastructureConfiguration_Tags](#infrastructureconfigurationtags): The tags associated with the component.
* **TerminateInstanceOnFailure**: bool: The terminate instance on failure configuration of the infrastructure configuration.

## InstanceMetadataOptions
### Properties
* **HttpPutResponseHopLimit**: int: Limit the number of hops that an instance metadata request can traverse to reach its destination.
* **HttpTokens**: string: Indicates whether a signed token header is required for instance metadata retrieval requests. The values affect the response as follows: 

## Logging
### Properties
* **S3Logs**: [S3Logs](#s3logs)

## S3Logs
### Properties
* **S3BucketName**: string: S3BucketName
* **S3KeyPrefix**: string: S3KeyPrefix

## InfrastructureConfiguration_ResourceTags
### Properties

## InfrastructureConfiguration_Tags
### Properties

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

## PolicyDetail
### Properties
* **Action**: [Action](#action) (Required)
* **ExclusionRules**: [ExclusionRules](#exclusionrules)
* **Filter**: [Filter](#filter) (Required)

## Action
### Properties
* **IncludeResources**: [IncludeResources](#includeresources)
* **Type**: string (Required): The action type of the policy detail.

## IncludeResources
### Properties
* **Amis**: bool: Use to configure lifecycle actions on AMIs.
* **Containers**: bool: Use to configure lifecycle actions on containers.
* **Snapshots**: bool: Use to configure lifecycle actions on snapshots.

## ExclusionRules
### Properties
* **Amis**: [AmiExclusionRules](#amiexclusionrules)
* **TagMap**: [LifecyclePolicy_TagMap](#lifecyclepolicytagmap): The Image Builder tags to filter on.

## AmiExclusionRules
### Properties
* **IsPublic**: bool: Use to apply lifecycle policy actions on whether the AMI is public.
* **LastLaunched**: [LastLaunched](#lastlaunched): Use to apply lifecycle policy actions on AMIs launched before a certain time.
* **Regions**: string[]: Use to apply lifecycle policy actions on AMIs distributed to a set of regions.
* **SharedAccounts**: string[]: Use to apply lifecycle policy actions on AMIs shared with a set of regions.
* **TagMap**: [LifecyclePolicy_TagMap](#lifecyclepolicytagmap): The AMIs to select by tag.

## LastLaunched
### Properties
* **Unit**: string (Required): The value's time unit.
* **Value**: int (Required): The last launched value.

## LifecyclePolicy_TagMap
### Properties

## LifecyclePolicy_TagMap
### Properties

## Filter
### Properties
* **RetainAtLeast**: int: The minimum number of Image Builder resources to retain.
* **Type**: string (Required): The filter type.
* **Unit**: string: The value's time unit.
* **Value**: int (Required): The filter value.

## ResourceSelection
### Properties
* **Recipes**: [RecipeSelection](#recipeselection)[]: The recipes to select.
* **TagMap**: [LifecyclePolicy_TagMap](#lifecyclepolicytagmap): The Image Builder resources to select by tag.

## RecipeSelection
### Properties
* **Name**: string (Required): The recipe name.
* **SemanticVersion**: string: The recipe version.

## LifecyclePolicy_TagMap
### Properties

## LifecyclePolicy_Tags
### Properties

