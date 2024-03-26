# AWS.SageMaker @ default

## Resource AWS.SageMaker/AppImageConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/AppImageConfigProperties](#awssagemakerappimageconfigproperties) (Required): properties of the resource

## Resource AWS.SageMaker/Device@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/DeviceProperties](#awssagemakerdeviceproperties) (Required): properties of the resource

## Resource AWS.SageMaker/DeviceFleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/DeviceFleetProperties](#awssagemakerdevicefleetproperties) (Required): properties of the resource

## Resource AWS.SageMaker/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/DomainProperties](#awssagemakerdomainproperties) (Required): properties of the resource

## Resource AWS.SageMaker/FeatureGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/FeatureGroupProperties](#awssagemakerfeaturegroupproperties) (Required): properties of the resource

## Resource AWS.SageMaker/Image@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/ImageProperties](#awssagemakerimageproperties) (Required): properties of the resource

## Resource AWS.SageMaker/ImageVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/ImageVersionProperties](#awssagemakerimageversionproperties) (Required): properties of the resource

## Resource AWS.SageMaker/InferenceComponent@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/InferenceComponentProperties](#awssagemakerinferencecomponentproperties) (Required): properties of the resource

## Resource AWS.SageMaker/InferenceExperiment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/InferenceExperimentProperties](#awssagemakerinferenceexperimentproperties) (Required): properties of the resource

## Resource AWS.SageMaker/ModelCard@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/ModelCardProperties](#awssagemakermodelcardproperties) (Required): properties of the resource

## Resource AWS.SageMaker/ModelPackage@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/ModelPackageProperties](#awssagemakermodelpackageproperties): properties of the resource

## Resource AWS.SageMaker/ModelPackageGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/ModelPackageGroupProperties](#awssagemakermodelpackagegroupproperties) (Required): properties of the resource

## Resource AWS.SageMaker/MonitoringSchedule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/MonitoringScheduleProperties](#awssagemakermonitoringscheduleproperties) (Required): properties of the resource

## Resource AWS.SageMaker/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/PipelineProperties](#awssagemakerpipelineproperties) (Required): properties of the resource

## Resource AWS.SageMaker/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/ProjectProperties](#awssagemakerprojectproperties) (Required): properties of the resource

## Resource AWS.SageMaker/Space@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/SpaceProperties](#awssagemakerspaceproperties) (Required): properties of the resource

## Resource AWS.SageMaker/UserProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SageMaker/UserProfileProperties](#awssagemakeruserprofileproperties) (Required): properties of the resource

## AdditionalInferenceSpecificationDefinition
### Properties
* **Containers**: [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)[] (Required): The Amazon ECR registry path of the Docker image that contains the inference code.
* **Description**: string: A description of the additional Inference specification.
* **Name**: string (Required): A unique name to identify the additional inference specification. The name must be unique within the list of your additional inference specifications for a particular model package.
* **SupportedContentTypes**: string[]: The supported MIME types for the input data.
* **SupportedRealtimeInferenceInstanceTypes**: string[]: A list of the instance types that are used to generate inferences in real-time
* **SupportedResponseMIMETypes**: string[]: The supported MIME types for the output data.
* **SupportedTransformInstanceTypes**: string[]: A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.

## AdditionalInformation
### Properties
* **CaveatsAndRecommendations**: string: Caveats and recommendations for people who might use this model in their applications.
* **CustomDetails**: [ModelCard_CustomDetails](#modelcardcustomdetails): customer details.
* **EthicalConsiderations**: string: Any ethical considerations that the author wants to provide.

## AWS.SageMaker/AppImageConfigProperties
### Properties
* **AppImageConfigArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the AppImageConfig.
* **AppImageConfigName**: string (Required, Identifier): The Name of the AppImageConfig.
* **JupyterLabAppImageConfig**: [JupyterLabAppImageConfig](#jupyterlabappimageconfig): The JupyterLabAppImageConfig.
* **KernelGatewayImageConfig**: [KernelGatewayImageConfig](#kernelgatewayimageconfig): The KernelGatewayImageConfig.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of tags to apply to the AppImageConfig.

## AWS.SageMaker/DeviceFleetProperties
### Properties
* **Description**: string: Description for the edge device fleet
* **DeviceFleetName**: string (Required, Identifier): The name of the edge device fleet
* **OutputConfig**: [EdgeOutputConfig](#edgeoutputconfig) (Required): S3 bucket and an ecryption key id (if available) to store outputs for the fleet
* **RoleArn**: string (Required): Role associated with the device fleet
* **Tags**: [Tag](#tag)[]: Associate tags with the resource

## AWS.SageMaker/DeviceProperties
### Properties
* **Device**: [Device](#device): The Edge Device you want to register against a device fleet
* **DeviceFleetName**: string (Required): The name of the edge device fleet
* **Tags**: [Tag](#tag)[]: Associate tags with the resource

## AWS.SageMaker/DomainProperties
### Properties
* **AppNetworkAccessType**: string: Specifies the VPC used for non-EFS traffic. The default value is PublicInternetOnly.
* **AppSecurityGroupManagement**: string: The entity that creates and manages the required security groups for inter-app communication in VPCOnly mode. Required when CreateDomain.AppNetworkAccessType is VPCOnly and DomainSettings.RStudioServerProDomainSettings.DomainExecutionRoleArn is provided.
* **AuthMode**: string (Required): The mode of authentication that members use to access the domain.
* **DefaultSpaceSettings**: [DefaultSpaceSettings](#defaultspacesettings): The default space settings.
* **DefaultUserSettings**: [UserSettings](#usersettings) (Required): The default user settings.
* **DomainArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the created domain.
* **DomainId**: string (ReadOnly, Identifier): The domain name.
* **DomainName**: string (Required): A name for the domain.
* **DomainSettings**: [DomainSettings](#domainsettings)
* **HomeEfsFileSystemId**: string (ReadOnly): The ID of the Amazon Elastic File System (EFS) managed by this Domain.
* **KmsKeyId**: string: SageMaker uses AWS KMS to encrypt the EFS volume attached to the domain with an AWS managed customer master key (CMK) by default.
* **SecurityGroupIdForDomainBoundary**: string (ReadOnly): The ID of the security group that authorizes traffic between the RSessionGateway apps and the RStudioServerPro app.
* **SingleSignOnApplicationArn**: string (ReadOnly): The ARN of the application managed by SageMaker in IAM Identity Center. This value is only returned for domains created after October 1, 2023.
* **SingleSignOnManagedApplicationInstanceId**: string (ReadOnly): The SSO managed application instance ID.
* **SubnetIds**: string[] (Required): The VPC subnets that Studio uses for communication.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of tags to apply to the user profile.
* **Url**: string (ReadOnly): The URL to the created domain.
* **VpcId**: string (Required): The ID of the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

## AWS.SageMaker/FeatureGroupProperties
### Properties
* **CreationTime**: string (ReadOnly): A timestamp of FeatureGroup creation time.
* **Description**: string: Description about the FeatureGroup.
* **EventTimeFeatureName**: string (Required): The Event Time Feature Name.
* **FeatureDefinitions**: [FeatureDefinition](#featuredefinition)[] (Required): An Array of Feature Definition
* **FeatureGroupName**: string (Required, Identifier): The Name of the FeatureGroup.
* **FeatureGroupStatus**: string (ReadOnly): The status of the feature group.
* **OfflineStoreConfig**: [FeatureGroup_OfflineStoreConfig](#featuregroupofflinestoreconfig)
* **OnlineStoreConfig**: [FeatureGroup_OnlineStoreConfig](#featuregrouponlinestoreconfig)
* **RecordIdentifierFeatureName**: string (Required): The Record Identifier Feature Name.
* **RoleArn**: string: Role Arn
* **Tags**: [Tag](#tag)[]: An array of key-value pair to apply to this resource.
* **ThroughputConfig**: [ThroughputConfig](#throughputconfig)

## AWS.SageMaker/ImageProperties
### Properties
* **ImageArn**: string (ReadOnly, Identifier)
* **ImageDescription**: string
* **ImageDisplayName**: string
* **ImageName**: string (Required)
* **ImageRoleArn**: string (Required)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SageMaker/ImageVersionProperties
### Properties
* **Alias**: string (WriteOnly)
* **Aliases**: string[] (WriteOnly)
* **BaseImage**: string (Required)
* **ContainerImage**: string (ReadOnly)
* **Horovod**: bool
* **ImageArn**: string (ReadOnly)
* **ImageName**: string (Required)
* **ImageVersionArn**: string (ReadOnly, Identifier)
* **JobType**: string
* **MLFramework**: string
* **Processor**: string
* **ProgrammingLang**: string
* **ReleaseNotes**: string
* **VendorGuidance**: string
* **Version**: int (ReadOnly)

## AWS.SageMaker/InferenceComponentProperties
### Properties
* **CreationTime**: string (ReadOnly)
* **EndpointArn**: string
* **EndpointName**: string (Required)
* **FailureReason**: string (ReadOnly)
* **InferenceComponentArn**: string (ReadOnly, Identifier)
* **InferenceComponentName**: string
* **InferenceComponentStatus**: string (ReadOnly)
* **LastModifiedTime**: string (ReadOnly)
* **RuntimeConfig**: [InferenceComponentRuntimeConfig](#inferencecomponentruntimeconfig) (Required)
* **Specification**: [InferenceComponentSpecification](#inferencecomponentspecification) (Required)
* **Tags**: [Tag](#tag)[]
* **VariantName**: string (Required)

## AWS.SageMaker/InferenceExperimentProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the inference experiment.
* **CreationTime**: string (ReadOnly): The timestamp at which you created the inference experiment.
* **DataStorageConfig**: [DataStorageConfig](#datastorageconfig)
* **Description**: string: The description of the inference experiment.
* **DesiredState**: string: The desired state of the experiment after starting or stopping operation.
* **EndpointMetadata**: [EndpointMetadata](#endpointmetadata) (ReadOnly)
* **EndpointName**: string (Required)
* **KmsKey**: string: The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance that hosts the endpoint.
* **LastModifiedTime**: string (ReadOnly): The timestamp at which you last modified the inference experiment.
* **ModelVariants**: [ModelVariantConfig](#modelvariantconfig)[] (Required): An array of ModelVariantConfig objects. Each ModelVariantConfig object in the array describes the infrastructure configuration for the corresponding variant.
* **Name**: string (Required, Identifier): The name for the inference experiment.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to access model artifacts and container images, and manage Amazon SageMaker Inference endpoints for model deployment.
* **Schedule**: [InferenceExperimentSchedule](#inferenceexperimentschedule)
* **ShadowModeConfig**: [ShadowModeConfig](#shadowmodeconfig)
* **Status**: string (ReadOnly): The status of the inference experiment.
* **StatusReason**: string: The error message or client-specified reason from the StopInferenceExperiment API, that explains the status of the inference experiment.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Type**: string (Required): The type of the inference experiment that you want to run.

## AWS.SageMaker/ModelCardProperties
### Properties
* **Content**: [Content](#content) (Required)
* **CreatedBy**: [UserContext](#usercontext): Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
* **CreationTime**: string (ReadOnly): The date and time the model card was created.
* **LastModifiedBy**: [UserContext](#usercontext): Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
* **LastModifiedTime**: string (ReadOnly): The date and time the model card was last modified.
* **ModelCardArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the successfully created model card.
* **ModelCardName**: string (Required, Identifier): The unique name of the model card.
* **ModelCardProcessingStatus**: string (ReadOnly): The processing status of model card deletion. The ModelCardProcessingStatus updates throughout the different deletion steps.
* **ModelCardStatus**: string (Required): The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
* **ModelCardVersion**: int (ReadOnly): A version of the model card.
* **SecurityConfig**: [SecurityConfig](#securityconfig)
* **Tags**: [Tag](#tag)[]: Key-value pairs used to manage metadata for model cards.

## AWS.SageMaker/ModelPackageGroupProperties
### Properties
* **CreationTime**: string (ReadOnly): The time at which the model package group was created.
* **ModelPackageGroupArn**: string (ReadOnly, Identifier)
* **ModelPackageGroupDescription**: string
* **ModelPackageGroupName**: string (Required)
* **ModelPackageGroupPolicy**: [ModelPackageGroup_ModelPackageGroupPolicy](#modelpackagegroupmodelpackagegrouppolicy) | string
* **ModelPackageGroupStatus**: string (ReadOnly): The status of a modelpackage group job.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SageMaker/ModelPackageProperties
### Properties
* **AdditionalInferenceSpecifications**: [AdditionalInferenceSpecificationDefinition](#additionalinferencespecificationdefinition)[]
* **AdditionalInferenceSpecificationsToAdd**: [AdditionalInferenceSpecificationDefinition](#additionalinferencespecificationdefinition)[] (WriteOnly)
* **ApprovalDescription**: string
* **CertifyForMarketplace**: bool
* **ClientToken**: string (WriteOnly)
* **CreationTime**: string (ReadOnly)
* **CustomerMetadataProperties**: [CustomerMetadataProperties](#customermetadataproperties)
* **Domain**: string
* **DriftCheckBaselines**: [DriftCheckBaselines](#driftcheckbaselines)
* **InferenceSpecification**: [InferenceSpecification](#inferencespecification)
* **LastModifiedTime**: string
* **MetadataProperties**: [MetadataProperties](#metadataproperties)
* **ModelApprovalStatus**: string
* **ModelMetrics**: [ModelMetrics](#modelmetrics)
* **ModelPackageArn**: string (ReadOnly, Identifier)
* **ModelPackageDescription**: string
* **ModelPackageGroupName**: string
* **ModelPackageName**: string
* **ModelPackageStatus**: string (ReadOnly)
* **ModelPackageStatusDetails**: [ModelPackageStatusDetails](#modelpackagestatusdetails)
* **ModelPackageVersion**: int
* **SamplePayloadUrl**: string
* **SkipModelValidation**: string
* **SourceAlgorithmSpecification**: [SourceAlgorithmSpecification](#sourcealgorithmspecification)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Task**: string
* **ValidationSpecification**: [ValidationSpecification](#validationspecification)

## AWS.SageMaker/MonitoringScheduleProperties
### Properties
* **CreationTime**: string (ReadOnly): The time at which the schedule was created.
* **EndpointName**: string
* **FailureReason**: string: Contains the reason a monitoring job failed, if it failed.
* **LastModifiedTime**: string (ReadOnly): A timestamp that indicates the last time the monitoring job was modified.
* **LastMonitoringExecutionSummary**: [MonitoringExecutionSummary](#monitoringexecutionsummary): Describes metadata on the last execution to run, if there was one.
* **MonitoringScheduleArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the monitoring schedule.
* **MonitoringScheduleConfig**: [MonitoringScheduleConfig](#monitoringscheduleconfig) (Required)
* **MonitoringScheduleName**: string (Required)
* **MonitoringScheduleStatus**: string: The status of a schedule job.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SageMaker/PipelineProperties
### Properties
* **ParallelismConfiguration**: [Pipeline_ParallelismConfiguration](#pipelineparallelismconfiguration)
* **PipelineDefinition**: [Pipeline_PipelineDefinition](#pipelinepipelinedefinition) (Required)
* **PipelineDescription**: string: The description of the Pipeline.
* **PipelineDisplayName**: string: The display name of the Pipeline.
* **PipelineName**: string (Required, Identifier): The name of the Pipeline.
* **RoleArn**: string (Required): Role Arn
* **Tags**: [Tag](#tag)[]

## AWS.SageMaker/ProjectProperties
### Properties
* **CreationTime**: string (ReadOnly): The time at which the project was created.
* **ProjectArn**: string (ReadOnly, Identifier)
* **ProjectDescription**: string
* **ProjectId**: string (ReadOnly)
* **ProjectName**: string (Required)
* **ProjectStatus**: string (ReadOnly): The status of a project.
* **ServiceCatalogProvisionedProductDetails**: [Project_ServiceCatalogProvisionedProductDetails](#projectservicecatalogprovisionedproductdetails): Provisioned ServiceCatalog  Details
* **ServiceCatalogProvisioningDetails**: [Project_ServiceCatalogProvisioningDetails](#projectservicecatalogprovisioningdetails) (Required): Input ServiceCatalog Provisioning Details
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SageMaker/SpaceProperties
### Properties
* **DomainId**: string (Required, Identifier): The ID of the associated Domain.
* **OwnershipSettings**: [OwnershipSettings](#ownershipsettings)
* **SpaceArn**: string (ReadOnly): The space Amazon Resource Name (ARN).
* **SpaceDisplayName**: string
* **SpaceName**: string (Required, Identifier): A name for the Space.
* **SpaceSettings**: [SpaceSettings](#spacesettings) (WriteOnly): A collection of settings.
* **SpaceSharingSettings**: [SpaceSharingSettings](#spacesharingsettings)
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of tags to apply to the space.
* **Url**: string (ReadOnly)

## AWS.SageMaker/UserProfileProperties
### Properties
* **DomainId**: string (Required, Identifier): The ID of the associated Domain.
* **SingleSignOnUserIdentifier**: string: A specifier for the type of value specified in SingleSignOnUserValue. Currently, the only supported value is "UserName". If the Domain's AuthMode is SSO, this field is required. If the Domain's AuthMode is not SSO, this field cannot be specified.
* **SingleSignOnUserValue**: string: The username of the associated AWS Single Sign-On User for this UserProfile. If the Domain's AuthMode is SSO, this field is required, and must match a valid username of a user in your directory. If the Domain's AuthMode is not SSO, this field cannot be specified.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of tags to apply to the user profile.
* **UserProfileArn**: string (ReadOnly): The user profile Amazon Resource Name (ARN).
* **UserProfileName**: string (Required, Identifier): A name for the UserProfile.
* **UserSettings**: [UserSettings](#usersettings): A collection of settings.

## BaselineConfig
### Properties
* **ConstraintsResource**: [ConstraintsResource](#constraintsresource)
* **StatisticsResource**: [StatisticsResource](#statisticsresource)

## BatchTransformInput
### Properties
* **DataCapturedDestinationS3Uri**: string (Required): A URI that identifies the Amazon S3 storage location where Batch Transform Job captures data.
* **DatasetFormat**: [DatasetFormat](#datasetformat) (Required)
* **ExcludeFeaturesAttribute**: string: Indexes or names of the features to be excluded from analysis
* **LocalPath**: string (Required): Path to the filesystem where the endpoint data is available to the container.
* **S3DataDistributionType**: string: Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
* **S3InputMode**: string: Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

## Bias
### Properties
* **PostTrainingReport**: [MetricsSource](#metricssource)
* **PreTrainingReport**: [MetricsSource](#metricssource)
* **Report**: [MetricsSource](#metricssource)

## BusinessDetails
### Properties
* **BusinessProblem**: string: What business problem does the model solve?
* **BusinessStakeholders**: string: Business stakeholders.
* **LineOfBusiness**: string: Line of business.

## CaptureContentTypeHeader
### Properties
* **CsvContentTypes**: string[]: The list of all content type headers that SageMaker will treat as CSV and capture accordingly.
* **JsonContentTypes**: string[]: The list of all content type headers that SageMaker will treat as JSON and capture accordingly.

## ClusterConfig
### Properties
* **InstanceCount**: int (Required): The number of ML compute instances to use in the model monitoring job. For distributed processing jobs, specify a value greater than 1. The default value is 1.
* **InstanceType**: string (Required): The ML compute instance type for the processing job.
* **VolumeKmsKeyId**: string: The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt data on the storage volume attached to the ML compute instance(s) that run the model monitoring job.
* **VolumeSizeInGB**: int (Required): The size of the ML storage volume, in gigabytes, that you want to provision. You must specify sufficient ML storage for your scenario.

## CodeEditorAppSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
* **LifecycleConfigArns**: string[]: A list of LifecycleConfigArns available for use with CodeEditor apps.

## CodeEditorAppSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the CodeEditor app.
* **LifecycleConfigArns**: string[]: A list of LifecycleConfigArns available for use with CodeEditor apps.

## CodeRepository
### Properties
* **RepositoryUrl**: string (Required): A CodeRepository (valid URL) to be used within Jupyter's Git extension.

## CodeRepository
### Properties
* **RepositoryUrl**: string (Required): A CodeRepository (valid URL) to be used within Jupyter's Git extension.

## CodeRepository
### Properties
* **RepositoryUrl**: string (Required): A CodeRepository (valid URL) to be used within Jupyter's Git extension.

## ConstraintsResource
### Properties
* **S3Uri**: string: The Amazon S3 URI for baseline constraint file in Amazon S3 that the current monitoring job should validated against.

## Container
### Properties
* **Image**: string (Required): Inference environment path. The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
* **ModelDataUrl**: string: The Amazon S3 path where the model artifacts, which result from model training, are stored.
* **NearestModelName**: string: The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.

## ContainerConfig
### Properties
* **ContainerArguments**: string[]: A list of arguments to apply to the container.
* **ContainerEntrypoint**: string[]: The custom entry point to use on container.
* **ContainerEnvironmentVariables**: [CustomImageContainerEnvironmentVariable](#customimagecontainerenvironmentvariable)[]: A list of variables to apply to the custom container.

## Content
### Properties
* **AdditionalInformation**: [AdditionalInformation](#additionalinformation)
* **BusinessDetails**: [BusinessDetails](#businessdetails)
* **EvaluationDetails**: [EvaluationDetail](#evaluationdetail)[]
* **IntendedUses**: [IntendedUses](#intendeduses)
* **ModelOverview**: [ModelOverview](#modeloverview)
* **ModelPackageDetails**: [ModelPackageDetails](#modelpackagedetails)
* **TrainingDetails**: [TrainingDetails](#trainingdetails)

## Csv
### Properties
* **Header**: bool: A boolean flag indicating if given CSV has header

## CustomerMetadataProperties
### Properties

## CustomFileSystem
### Properties
* **EFSFileSystem**: [EFSFileSystem](#efsfilesystem)

## CustomFileSystemConfig
### Properties
* **EFSFileSystemConfig**: [EFSFileSystemConfig](#efsfilesystemconfig)

## CustomFileSystemConfig
### Properties
* **EFSFileSystemConfig**: [EFSFileSystemConfig](#efsfilesystemconfig)

## CustomImage
### Properties
* **AppImageConfigName**: string (Required): The Name of the AppImageConfig.
* **ImageName**: string (Required): The name of the CustomImage. Must be unique to your account.
* **ImageVersionNumber**: int: The version number of the CustomImage.

## CustomImage
### Properties
* **AppImageConfigName**: string (Required): The Name of the AppImageConfig.
* **ImageName**: string (Required): The name of the CustomImage. Must be unique to your account.
* **ImageVersionNumber**: int: The version number of the CustomImage.

## CustomImage
### Properties
* **AppImageConfigName**: string (Required): The Name of the AppImageConfig.
* **ImageName**: string (Required): The name of the CustomImage. Must be unique to your account.
* **ImageVersionNumber**: int: The version number of the CustomImage.

## CustomImageContainerEnvironmentVariable
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## CustomPosixUserConfig
### Properties
* **Gid**: int (Required)
* **Uid**: int (Required)

## CustomPosixUserConfig
### Properties
* **Gid**: int (Required)
* **Uid**: int (Required)

## DataCatalogConfig
### Properties
* **Catalog**: string (Required)
* **Database**: string (Required)
* **TableName**: string (Required)

## DatasetFormat
### Properties
* **Csv**: [Csv](#csv)
* **Json**: [Json](#json)
* **Parquet**: bool

## DataSource
### Properties
* **S3DataSource**: [S3DataSource](#s3datasource) (Required)

## DataStorageConfig
### Properties
* **ContentType**: [CaptureContentTypeHeader](#capturecontenttypeheader)
* **Destination**: string (Required): The Amazon S3 bucket where the inference request and response data is stored.
* **KmsKey**: string: The AWS Key Management Service key that Amazon SageMaker uses to encrypt captured data at rest using Amazon S3 server-side encryption.

## DefaultEbsStorageSettings
### Properties
* **DefaultEbsVolumeSizeInGb**: int (Required): Default size of the Amazon EBS volume in Gb
* **MaximumEbsVolumeSizeInGb**: int (Required): Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.

## DefaultEbsStorageSettings
### Properties
* **DefaultEbsVolumeSizeInGb**: int (Required): Default size of the Amazon EBS volume in Gb
* **MaximumEbsVolumeSizeInGb**: int (Required): Maximum size of the Amazon EBS volume in Gb. Must be greater than or equal to the DefaultEbsVolumeSizeInGb.

## DefaultSpaceSettings
### Properties
* **ExecutionRole**: string (Required): The execution role for the space.
* **JupyterServerAppSettings**: [JupyterServerAppSettings](#jupyterserverappsettings): The Jupyter server's app settings.
* **KernelGatewayAppSettings**: [KernelGatewayAppSettings](#kernelgatewayappsettings): The kernel gateway app settings.
* **SecurityGroups**: string[]: The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.

## DefaultSpaceStorageSettings
### Properties
* **DefaultEbsStorageSettings**: [DefaultEbsStorageSettings](#defaultebsstoragesettings)

## DefaultSpaceStorageSettings
### Properties
* **DefaultEbsStorageSettings**: [DefaultEbsStorageSettings](#defaultebsstoragesettings)

## DeployedImage
### Properties
* **ResolutionTime**: string
* **ResolvedImage**: string
* **SpecifiedImage**: string

## Device
### Properties
* **Description**: string: Description of the device
* **DeviceName**: string (Required): The name of the device
* **IotThingName**: string: AWS Internet of Things (IoT) object name.

## DockerSettings
### Properties
* **EnableDockerAccess**: string: The flag to enable/disable docker-proxy server
* **VpcOnlyTrustedAccounts**: string[]: A list of account id's that would be used to pull images from in VpcOnly mode

## DomainSettings
### Properties
* **DockerSettings**: [DockerSettings](#dockersettings)
* **RStudioServerProDomainSettings**: [RStudioServerProDomainSettings](#rstudioserverprodomainsettings)
* **SecurityGroupIds**: string[]: The security groups for the Amazon Virtual Private Cloud that the Domain uses for communication between Domain-level apps and user apps.

## DriftCheckBaselines
### Properties
* **Bias**: [DriftCheckBias](#driftcheckbias)
* **Explainability**: [DriftCheckExplainability](#driftcheckexplainability)
* **ModelDataQuality**: [DriftCheckModelDataQuality](#driftcheckmodeldataquality)
* **ModelQuality**: [DriftCheckModelQuality](#driftcheckmodelquality)

## DriftCheckBias
### Properties
* **ConfigFile**: [FileSource](#filesource)
* **PostTrainingConstraints**: [MetricsSource](#metricssource)
* **PreTrainingConstraints**: [MetricsSource](#metricssource)

## DriftCheckExplainability
### Properties
* **ConfigFile**: [FileSource](#filesource)
* **Constraints**: [MetricsSource](#metricssource)

## DriftCheckModelDataQuality
### Properties
* **Constraints**: [MetricsSource](#metricssource)
* **Statistics**: [MetricsSource](#metricssource)

## DriftCheckModelQuality
### Properties
* **Constraints**: [MetricsSource](#metricssource)
* **Statistics**: [MetricsSource](#metricssource)

## EbsStorageSettings
### Properties
* **EbsVolumeSizeInGb**: int (Required): Size of the Amazon EBS volume in Gb

## EdgeOutputConfig
### Properties
* **KmsKeyId**: string: The KMS key id used for encryption on the S3 bucket
* **S3OutputLocation**: string (Required): The Amazon Simple Storage (S3) bucket URI

## EFSFileSystem
### Properties
* **FileSystemId**: string (Required)

## EFSFileSystemConfig
### Properties
* **FileSystemId**: string (Required)
* **FileSystemPath**: string

## EFSFileSystemConfig
### Properties
* **FileSystemId**: string (Required)
* **FileSystemPath**: string

## EndpointInput
### Properties
* **EndpointName**: string (Required)
* **ExcludeFeaturesAttribute**: string: Indexes or names of the features to be excluded from analysis
* **LocalPath**: string (Required): Path to the filesystem where the endpoint data is available to the container.
* **S3DataDistributionType**: string: Whether input data distributed in Amazon S3 is fully replicated or sharded by an S3 key. Defauts to FullyReplicated
* **S3InputMode**: string: Whether the Pipe or File is used as the input mode for transfering data for the monitoring job. Pipe mode is recommended for large datasets. File mode is useful for small files that fit in memory. Defaults to File.

## EndpointMetadata
### Properties
* **EndpointConfigName**: string: The name of the endpoint configuration.
* **EndpointName**: string (Required)
* **EndpointStatus**: string: The status of the endpoint. For possible values of the status of an endpoint.

## Environment
### Properties

## EnvironmentMap
### Properties

## EvaluationDetail
### Properties
* **Datasets**: string[]
* **EvaluationJobArn**: string
* **EvaluationObservation**: string
* **Metadata**: [ModelCard_Metadata](#modelcardmetadata): additional attributes associated with the evaluation results.
* **MetricGroups**: [MetricGroup](#metricgroup)[]
* **Name**: string (Required)

## Explainability
### Properties
* **Report**: [MetricsSource](#metricssource)

## FeatureDefinition
### Properties
* **FeatureName**: string (Required)
* **FeatureType**: string (Required)

## FeatureGroup_OfflineStoreConfig
### Properties
* **DataCatalogConfig**: [DataCatalogConfig](#datacatalogconfig)
* **DisableGlueTableCreation**: bool
* **S3StorageConfig**: [S3StorageConfig](#s3storageconfig) (Required)
* **TableFormat**: string

## FeatureGroup_OnlineStoreConfig
### Properties
* **EnableOnlineStore**: bool
* **SecurityConfig**: [OnlineStoreSecurityConfig](#onlinestoresecurityconfig)
* **StorageType**: string
* **TtlDuration**: [TtlDuration](#ttlduration)

## FileSource
### Properties
* **ContentDigest**: string: The digest of the file source.
* **ContentType**: string: The type of content stored in the file source.
* **S3Uri**: string (Required): The Amazon S3 URI for the file source.

## FileSystemConfig
### Properties
* **DefaultGid**: int: The default POSIX group ID (GID). If not specified, defaults to 100.
* **DefaultUid**: int: The default POSIX user ID (UID). If not specified, defaults to 1000.
* **MountPath**: string: The path within the image to mount the user's EFS home directory. The directory should be empty. If not specified, defaults to /home/sagemaker-user.

## InferenceComponentComputeResourceRequirements
### Properties
* **MaxMemoryRequiredInMb**: int
* **MinMemoryRequiredInMb**: int
* **NumberOfAcceleratorDevicesRequired**: int
* **NumberOfCpuCoresRequired**: int

## InferenceComponentContainerSpecification
### Properties
* **ArtifactUrl**: string
* **DeployedImage**: [DeployedImage](#deployedimage) (ReadOnly)
* **Environment**: [EnvironmentMap](#environmentmap)
* **Image**: string (WriteOnly)

## InferenceComponentRuntimeConfig
### Properties
* **CopyCount**: int (WriteOnly)
* **CurrentCopyCount**: int (ReadOnly)
* **DesiredCopyCount**: int (ReadOnly)

## InferenceComponentSpecification
### Properties
* **ComputeResourceRequirements**: [InferenceComponentComputeResourceRequirements](#inferencecomponentcomputeresourcerequirements) (Required)
* **Container**: [InferenceComponentContainerSpecification](#inferencecomponentcontainerspecification)
* **ModelName**: string
* **StartupParameters**: [InferenceComponentStartupParameters](#inferencecomponentstartupparameters)

## InferenceComponentStartupParameters
### Properties
* **ContainerStartupHealthCheckTimeoutInSeconds**: int
* **ModelDataDownloadTimeoutInSeconds**: int

## InferenceExperimentSchedule
### Properties
* **EndTime**: string: The timestamp at which the inference experiment ended or will end.
* **StartTime**: string: The timestamp at which the inference experiment started or will start.

## InferenceSpecification
### Properties
* **Containers**: [Container](#container)[] (Required): Contains inference related information which were used to create model package.

## InferenceSpecification
### Properties
* **Containers**: [ModelPackageContainerDefinition](#modelpackagecontainerdefinition)[] (Required): The Amazon ECR registry path of the Docker image that contains the inference code.
* **SupportedContentTypes**: string[] (Required): The supported MIME types for the input data.
* **SupportedRealtimeInferenceInstanceTypes**: string[]: A list of the instance types that are used to generate inferences in real-time
* **SupportedResponseMIMETypes**: string[] (Required): The supported MIME types for the output data.
* **SupportedTransformInstanceTypes**: string[]: A list of the instance types on which a transformation job can be run or on which an endpoint can be deployed.

## IntendedUses
### Properties
* **ExplanationsForRiskRating**: string
* **FactorsAffectingModelEfficiency**: string
* **IntendedUses**: string: intended use cases.
* **PurposeOfModel**: string: Why the model was developed?
* **RiskRating**: string

## Json
### Properties
* **Line**: bool: A boolean flag indicating if it is JSON line format

## JupyterLabAppImageConfig
### Properties
* **ContainerConfig**: [ContainerConfig](#containerconfig): The container configuration for a SageMaker image.

## JupyterLabAppSettings
### Properties
* **CodeRepositories**: [CodeRepository](#coderepository)[]: A list of CodeRepositories available for use with JupyterLab apps.
* **CustomImages**: [CustomImage](#customimage)[]: A list of custom images for use for JupyterLab apps.
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
* **LifecycleConfigArns**: string[]: A list of LifecycleConfigArns available for use with JupyterLab apps.

## JupyterLabAppSettings
### Properties
* **CodeRepositories**: [CodeRepository](#coderepository)[]: A list of CodeRepositories available for use with JupyterLab apps.
* **CustomImages**: [CustomImage](#customimage)[]: A list of custom images available for use for JupyterLab apps
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the JupyterLab app.
* **LifecycleConfigArns**: string[]: A list of LifecycleConfigArns available for use with JupyterLab apps.

## JupyterServerAppSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)

## JupyterServerAppSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)

## JupyterServerAppSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)

## KernelGatewayAppSettings
### Properties
* **CustomImages**: [CustomImage](#customimage)[]: A list of custom SageMaker images that are configured to run as a KernelGateway app.
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

## KernelGatewayAppSettings
### Properties
* **CustomImages**: [CustomImage](#customimage)[]: A list of custom SageMaker images that are configured to run as a KernelGateway app.
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

## KernelGatewayAppSettings
### Properties
* **CustomImages**: [CustomImage](#customimage)[]: A list of custom SageMaker images that are configured to run as a KernelGateway app.
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec): The default instance type and the Amazon Resource Name (ARN) of the default SageMaker image used by the KernelGateway app.

## KernelGatewayImageConfig
### Properties
* **FileSystemConfig**: [FileSystemConfig](#filesystemconfig): The Amazon Elastic File System (EFS) storage configuration for a SageMaker image.
* **KernelSpecs**: [KernelSpec](#kernelspec)[] (Required): The specification of the Jupyter kernels in the image.

## KernelSpec
### Properties
* **DisplayName**: string: The display name of the kernel.
* **Name**: string (Required): The name of the kernel.

## MetadataProperties
### Properties
* **CommitId**: string: The commit ID.
* **GeneratedBy**: string: The entity this entity was generated by.
* **ProjectId**: string: The project ID metadata.
* **Repository**: string: The repository metadata.

## MetricGroup
### Properties
* **MetricData**: [ModelCard_MetricData](#modelcardmetricdata)[] (Required)
* **Name**: string (Required)

## MetricsSource
### Properties
* **ContentDigest**: string: The digest of the metric source.
* **ContentType**: string (Required): The type of content stored in the metric source.
* **S3Uri**: string (Required): The Amazon S3 URI for the metric source.

## ModelCard_CustomDetails
### Properties

## ModelCard_Function
### Properties
* **Condition**: string
* **Facet**: string
* **Function**: string

## ModelCard_InferenceEnvironment
### Properties
* **ContainerImage**: string[]: SageMaker inference image uri.

## ModelCard_Metadata
### Properties

## ModelCard_MetricData
### Properties

## ModelCard_TrainingJobDetails
### Properties
* **HyperParameters**: [TrainingHyperParameter](#traininghyperparameter)[]
* **TrainingArn**: string: SageMaker Training job arn.
* **TrainingDatasets**: string[]: Location of the model datasets.
* **TrainingEnvironment**: [ModelCard_TrainingJobDetails_TrainingEnvironment](#modelcardtrainingjobdetailstrainingenvironment)
* **TrainingMetrics**: [TrainingMetric](#trainingmetric)[]
* **UserProvidedHyperParameters**: [TrainingHyperParameter](#traininghyperparameter)[]
* **UserProvidedTrainingMetrics**: [TrainingMetric](#trainingmetric)[]

## ModelCard_TrainingJobDetails_TrainingEnvironment
### Properties
* **ContainerImage**: string[]: SageMaker training image uri.

## ModelDataQuality
### Properties
* **Constraints**: [MetricsSource](#metricssource)
* **Statistics**: [MetricsSource](#metricssource)

## ModelInfrastructureConfig
### Properties
* **InfrastructureType**: string (Required): The type of the inference experiment that you want to run.
* **RealTimeInferenceConfig**: [RealTimeInferenceConfig](#realtimeinferenceconfig) (Required)

## ModelMetrics
### Properties
* **Bias**: [Bias](#bias)
* **Explainability**: [Explainability](#explainability)
* **ModelDataQuality**: [ModelDataQuality](#modeldataquality)
* **ModelQuality**: [ModelQuality](#modelquality)

## ModelOverview
### Properties
* **AlgorithmType**: string: Algorithm used to solve the problem.
* **InferenceEnvironment**: [ModelCard_InferenceEnvironment](#modelcardinferenceenvironment): Overview about the inference.
* **ModelArtifact**: string[]: Location of the model artifact.
* **ModelCreator**: string: Creator of model.
* **ModelDescription**: string: description of model.
* **ModelId**: string: SageMaker Model Arn or Non SageMaker Model id.
* **ModelName**: string: Name of the model.
* **ModelOwner**: string: Owner of model.
* **ModelVersion**: int: Version of the model.
* **ProblemType**: string: Problem being solved with the model.

## ModelPackage_ModelInput
### Properties
* **DataInputConfig**: string (Required): The input configuration object for the model.

## ModelPackageContainerDefinition
### Properties
* **ContainerHostname**: string: The DNS host name for the Docker container.
* **Environment**: [Environment](#environment)
* **Framework**: string: The machine learning framework of the model package container image.
* **FrameworkVersion**: string: The framework version of the Model Package Container Image.
* **Image**: string (Required): The Amazon EC2 Container Registry (Amazon ECR) path where inference code is stored.
* **ImageDigest**: string: An MD5 hash of the training algorithm that identifies the Docker image used for training.
* **ModelDataUrl**: string: A structure with Model Input details.
* **ModelInput**: [ModelPackage_ModelInput](#modelpackagemodelinput)
* **NearestModelName**: string: The name of a pre-trained machine learning benchmarked by Amazon SageMaker Inference Recommender model that matches your model.

## ModelPackageCreator
### Properties
* **UserProfileName**: string: The name of the user's profile in Studio

## ModelPackageDetails
### Properties
* **ApprovalDescription**: string: A description provided for the model approval
* **CreatedBy**: [ModelPackageCreator](#modelpackagecreator): Information about the user who created model package.
* **Domain**: string: The machine learning domain of the model package you specified. Common machine learning domains include computer vision and natural language processing.
* **InferenceSpecification**: [InferenceSpecification](#inferencespecification): Details about inference jobs that can be run with models based on this model package.
* **ModelApprovalStatus**: string: Current approval status of model package
* **ModelPackageArn**: string: The Amazon Resource Name (ARN) of the model package
* **ModelPackageDescription**: string: A brief summary of the model package
* **ModelPackageGroupName**: string: If the model is a versioned model, the name of the model group that the versioned model belongs to.
* **ModelPackageName**: string: Name of the model package
* **ModelPackageStatus**: string: Current status of model package
* **ModelPackageVersion**: int: Version of the model package
* **SourceAlgorithms**: [SourceAlgorithm](#sourcealgorithm)[]: A list of algorithms that were used to create a model package.
* **Task**: string: The machine learning task you specified that your model package accomplishes. Common machine learning tasks include object detection and image classification.

## ModelPackageStatusDetails
### Properties
* **ValidationStatuses**: [ModelPackageStatusItem](#modelpackagestatusitem)[]

## ModelPackageStatusItem
### Properties
* **FailureReason**: string: If the overall status is Failed, the reason for the failure.
* **Name**: string (Required): The name of the model package for which the overall status is being reported.
* **Status**: string (Required): The current status.

## ModelQuality
### Properties
* **Constraints**: [MetricsSource](#metricssource)
* **Statistics**: [MetricsSource](#metricssource)

## ModelVariantConfig
### Properties
* **InfrastructureConfig**: [ModelInfrastructureConfig](#modelinfrastructureconfig) (Required)
* **ModelName**: string (Required): The name of the Amazon SageMaker Model entity.
* **VariantName**: string (Required): The name of the variant.

## MonitoringAppSpecification
### Properties
* **ContainerArguments**: string[]: An array of arguments for the container used to run the monitoring job.
* **ContainerEntrypoint**: string[]: Specifies the entrypoint for a container used to run the monitoring job.
* **ImageUri**: string (Required): The container image to be run by the monitoring job.
* **PostAnalyticsProcessorSourceUri**: string: An Amazon S3 URI to a script that is called after analysis has been performed. Applicable only for the built-in (first party) containers.
* **RecordPreprocessorSourceUri**: string: An Amazon S3 URI to a script that is called per row prior to running analysis. It can base64 decode the payload and convert it into a flatted json so that the built-in container can use the converted data. Applicable only for the built-in (first party) containers

## MonitoringExecutionSummary
### Properties
* **CreationTime**: string (Required): The time at which the monitoring job was created.
* **EndpointName**: string
* **FailureReason**: string: Contains the reason a monitoring job failed, if it failed.
* **LastModifiedTime**: string (Required): A timestamp that indicates the last time the monitoring job was modified.
* **MonitoringExecutionStatus**: string (Required): The status of the monitoring job.
* **MonitoringScheduleName**: string (Required)
* **ProcessingJobArn**: string: The Amazon Resource Name (ARN) of the monitoring job.
* **ScheduledTime**: string (Required): The time the monitoring job was scheduled.

## MonitoringInput
### Properties
* **BatchTransformInput**: [BatchTransformInput](#batchtransforminput)
* **EndpointInput**: [EndpointInput](#endpointinput)

## MonitoringJobDefinition
### Properties
* **BaselineConfig**: [BaselineConfig](#baselineconfig)
* **Environment**: [MonitoringSchedule_Environment](#monitoringscheduleenvironment): Sets the environment variables in the Docker container
* **MonitoringAppSpecification**: [MonitoringAppSpecification](#monitoringappspecification) (Required)
* **MonitoringInputs**: [MonitoringInput](#monitoringinput)[] (Required)
* **MonitoringOutputConfig**: [MonitoringOutputConfig](#monitoringoutputconfig) (Required)
* **MonitoringResources**: [MonitoringResources](#monitoringresources) (Required)
* **NetworkConfig**: [NetworkConfig](#networkconfig)
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role that Amazon SageMaker can assume to perform tasks on your behalf.
* **StoppingCondition**: [StoppingCondition](#stoppingcondition)

## MonitoringOutput
### Properties
* **S3Output**: [S3Output](#s3output) (Required)

## MonitoringOutputConfig
### Properties
* **KmsKeyId**: string: The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
* **MonitoringOutputs**: [MonitoringOutput](#monitoringoutput)[] (Required): Monitoring outputs for monitoring jobs. This is where the output of the periodic monitoring jobs is uploaded.

## MonitoringResources
### Properties
* **ClusterConfig**: [ClusterConfig](#clusterconfig) (Required)

## MonitoringSchedule_Environment
### Properties

## MonitoringScheduleConfig
### Properties
* **MonitoringJobDefinition**: [MonitoringJobDefinition](#monitoringjobdefinition)
* **MonitoringJobDefinitionName**: string: Name of the job definition
* **MonitoringType**: string
* **ScheduleConfig**: [ScheduleConfig](#scheduleconfig)

## NetworkConfig
### Properties
* **EnableInterContainerTrafficEncryption**: bool: Whether to encrypt all communications between distributed processing jobs. Choose True to encrypt communications. Encryption provides greater security for distributed processing jobs, but the processing might take longer.
* **EnableNetworkIsolation**: bool: Whether to allow inbound and outbound network calls to and from the containers used for the processing job.
* **VpcConfig**: [VpcConfig](#vpcconfig)

## ObjectiveFunction
### Properties
* **Function**: [ModelCard_Function](#modelcardfunction): objective function that training job is optimized for.
* **Notes**: string

## OnlineStoreSecurityConfig
### Properties
* **KmsKeyId**: string

## OwnershipSettings
### Properties
* **OwnerUserProfileName**: string (Required)

## Pipeline_ParallelismConfiguration
### Properties
* **MaxParallelExecutionSteps**: int (Required): Maximum parallel execution steps

## Pipeline_PipelineDefinition
### Properties

## Project_ServiceCatalogProvisionedProductDetails
### Properties
* **ProvisionedProductId**: string
* **ProvisionedProductStatusMessage**: string

## Project_ServiceCatalogProvisioningDetails
### Properties
* **PathId**: string
* **ProductId**: string (Required)
* **ProvisioningArtifactId**: string
* **ProvisioningParameters**: [ProvisioningParameter](#provisioningparameter)[]: Parameters specified by the administrator that are required for provisioning the product.

## ProvisioningParameter
### Properties
* **Key**: string (Required): The parameter key.
* **Value**: string (Required): The parameter value.

## RealTimeInferenceConfig
### Properties
* **InstanceCount**: int (Required): The number of instances of the type specified by InstanceType.
* **InstanceType**: string (Required): The instance type the model is deployed to.

## ResourceSpec
### Properties
* **InstanceType**: string: The instance type that the image version runs on.
* **SageMakerImageArn**: string: The ARN of the SageMaker image that the image version belongs to.
* **SageMakerImageVersionArn**: string: The ARN of the image version created on the instance.

## ResourceSpec
### Properties
* **InstanceType**: string: The instance type that the image version runs on.
* **SageMakerImageArn**: string: The ARN of the SageMaker image that the image version belongs to.
* **SageMakerImageVersionArn**: string: The ARN of the image version created on the instance.

## ResourceSpec
### Properties
* **InstanceType**: string: The instance type that the image version runs on.
* **LifecycleConfigArn**: string: The Amazon Resource Name (ARN) of the Lifecycle Configuration to attach to the Resource.
* **SageMakerImageArn**: string: The Amazon Resource Name (ARN) of the SageMaker image that the image version belongs to.
* **SageMakerImageVersionArn**: string: The Amazon Resource Name (ARN) of the image version created on the instance.

## RSessionAppSettings
### Properties
* **CustomImages**: [CustomImage](#customimage)[]: A list of custom SageMaker images that are configured to run as a KernelGateway app.
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)

## RStudioServerProAppSettings
### Properties
* **AccessStatus**: string: Indicates whether the current user has access to the RStudioServerPro app.
* **UserGroup**: string: The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.

## RStudioServerProAppSettings
### Properties
* **AccessStatus**: string: Indicates whether the current user has access to the RStudioServerPro app.
* **UserGroup**: string: The level of permissions that the user has within the RStudioServerPro app. This value defaults to User. The Admin value allows the user access to the RStudio Administrative Dashboard.

## RStudioServerProDomainSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)
* **DomainExecutionRoleArn**: string (Required): The ARN of the execution role for the RStudioServerPro Domain-level app.
* **RStudioConnectUrl**: string: A URL pointing to an RStudio Connect server.
* **RStudioPackageManagerUrl**: string: A URL pointing to an RStudio Package Manager server.

## S3DataSource
### Properties
* **S3DataType**: string (Required): The S3 Data Source Type
* **S3Uri**: string (Required): Depending on the value specified for the S3DataType, identifies either a key name prefix or a manifest.

## S3Output
### Properties
* **LocalPath**: string (Required): The local path to the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job. LocalPath is an absolute path for the output data.
* **S3UploadMode**: string: Whether to upload the results of the monitoring job continuously or after the job completes.
* **S3Uri**: string (Required): A URI that identifies the Amazon S3 storage location where Amazon SageMaker saves the results of a monitoring job.

## S3StorageConfig
### Properties
* **KmsKeyId**: string
* **S3Uri**: string (Required)

## ScheduleConfig
### Properties
* **DataAnalysisEndTime**: string: Data Analysis end time, e.g. PT0H
* **DataAnalysisStartTime**: string: Data Analysis start time, e.g. -PT1H
* **ScheduleExpression**: string (Required): A cron expression or 'NOW' that describes details about the monitoring schedule.

## SecurityConfig
### Properties
* **KmsKeyId**: string: A Key Management Service key ID to use for encrypting a model card.

## ShadowModeConfig
### Properties
* **ShadowModelVariants**: [ShadowModelVariantConfig](#shadowmodelvariantconfig)[] (Required): List of shadow variant configurations.
* **SourceModelVariantName**: string (Required): The name of the production variant, which takes all the inference requests.

## ShadowModelVariantConfig
### Properties
* **SamplingPercentage**: int (Required): The percentage of inference requests that Amazon SageMaker replicates from the production variant to the shadow variant.
* **ShadowModelVariantName**: string (Required): The name of the shadow variant.

## SharingSettings
### Properties
* **NotebookOutputOption**: string: Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
* **S3KmsKeyId**: string: When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
* **S3OutputPath**: string: When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.

## SharingSettings
### Properties
* **NotebookOutputOption**: string: Whether to include the notebook cell output when sharing the notebook. The default is Disabled.
* **S3KmsKeyId**: string: When NotebookOutputOption is Allowed, the AWS Key Management Service (KMS) encryption key ID used to encrypt the notebook cell output in the Amazon S3 bucket.
* **S3OutputPath**: string: When NotebookOutputOption is Allowed, the Amazon S3 bucket used to store the shared notebook snapshots.

## SourceAlgorithm
### Properties
* **AlgorithmName**: string (Required): The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your Amazon SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
* **ModelDataUrl**: string: The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single gzip compressed tar archive (.tar.gz suffix).

## SourceAlgorithmSpecification
### Properties
* **SourceAlgorithms**: [SourceAlgorithm](#sourcealgorithm)[] (Required): A list of algorithms that were used to create a model package.

## SpaceCodeEditorAppSettings
### Properties
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)

## SpaceJupyterLabAppSettings
### Properties
* **CodeRepositories**: [CodeRepository](#coderepository)[]: A list of CodeRepositories available for use with JupyterLab apps.
* **DefaultResourceSpec**: [ResourceSpec](#resourcespec)

## SpaceSettings
### Properties
* **AppType**: string
* **CodeEditorAppSettings**: [SpaceCodeEditorAppSettings](#spacecodeeditorappsettings): The CodeEditor app settings.
* **CustomFileSystems**: [CustomFileSystem](#customfilesystem)[]
* **JupyterLabAppSettings**: [SpaceJupyterLabAppSettings](#spacejupyterlabappsettings): The JupyterLab app settings.
* **JupyterServerAppSettings**: [JupyterServerAppSettings](#jupyterserverappsettings): The Jupyter server's app settings.
* **KernelGatewayAppSettings**: [KernelGatewayAppSettings](#kernelgatewayappsettings): The kernel gateway app settings.
* **SpaceStorageSettings**: [SpaceStorageSettings](#spacestoragesettings): Default storage settings for a space.

## SpaceSharingSettings
### Properties
* **SharingType**: string (Required)

## SpaceStorageSettings
### Properties
* **EbsStorageSettings**: [EbsStorageSettings](#ebsstoragesettings)

## StatisticsResource
### Properties
* **S3Uri**: string: The Amazon S3 URI for the baseline statistics file in Amazon S3 that the current monitoring job should be validated against.

## StoppingCondition
### Properties
* **MaxRuntimeInSeconds**: int (Required): The maximum runtime allowed in seconds.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The key value of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The tag key. Tag keys must be unique per resource.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ThroughputConfig
### Properties
* **ProvisionedReadCapacityUnits**: int: For provisioned feature groups with online store enabled, this indicates the read throughput you are billed for and can consume without throttling.
* **ProvisionedWriteCapacityUnits**: int: For provisioned feature groups, this indicates the write throughput you are billed for and can consume without throttling.
* **ThroughputMode**: string (Required)

## TrainingDetails
### Properties
* **ObjectiveFunction**: [ObjectiveFunction](#objectivefunction)
* **TrainingJobDetails**: [ModelCard_TrainingJobDetails](#modelcardtrainingjobdetails)
* **TrainingObservations**: string

## TrainingHyperParameter
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## TrainingMetric
### Properties
* **Name**: string (Required)
* **Notes**: string
* **Value**: int (Required)

## TransformInput
### Properties
* **CompressionType**: string: If your transform data is compressed, specify the compression type. Amazon SageMaker automatically decompresses the data for the transform job accordingly. The default value is None.
* **ContentType**: string: The multipurpose internet mail extension (MIME) type of the data. Amazon SageMaker uses the MIME type with each http call to transfer data to the transform job.
* **DataSource**: [DataSource](#datasource) (Required)
* **SplitType**: string: The method to use to split the transform job's data files into smaller batches. 

## TransformJobDefinition
### Properties
* **BatchStrategy**: string: A string that determines the number of records included in a single mini-batch.
* **Environment**: [Environment](#environment)
* **MaxConcurrentTransforms**: int: The maximum number of parallel requests that can be sent to each instance in a transform job. The default value is 1.
* **MaxPayloadInMB**: int: The maximum payload size allowed, in MB. A payload is the data portion of a record (without metadata).
* **TransformInput**: [TransformInput](#transforminput) (Required)
* **TransformOutput**: [TransformOutput](#transformoutput) (Required)
* **TransformResources**: [TransformResources](#transformresources) (Required)

## TransformOutput
### Properties
* **Accept**: string: The MIME type used to specify the output data. Amazon SageMaker uses the MIME type with each http call to transfer data from the transform job.
* **AssembleWith**: string: Defines how to assemble the results of the transform job as a single S3 object.
* **KmsKeyId**: string: The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt the model artifacts at rest using Amazon S3 server-side encryption.
* **S3OutputPath**: string (Required): The Amazon S3 path where you want Amazon SageMaker to store the results of the transform job.

## TransformResources
### Properties
* **InstanceCount**: int (Required): The number of ML compute instances to use in the transform job. For distributed transform jobs, specify a value greater than 1. The default value is 1.
* **InstanceType**: string (Required): The ML compute instance type for the transform job.
* **VolumeKmsKeyId**: string: The AWS Key Management Service (AWS KMS) key that Amazon SageMaker uses to encrypt model data on the storage volume attached to the ML compute instance(s) that run the batch transform job.

## TtlDuration
### Properties
* **Unit**: string
* **Value**: int

## UserContext
### Properties
* **DomainId**: string (ReadOnly): The domain associated with the user.
* **UserProfileArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the user's profile.
* **UserProfileName**: string (ReadOnly): The name of the user's profile.

## UserSettings
### Properties
* **CodeEditorAppSettings**: [CodeEditorAppSettings](#codeeditorappsettings)
* **CustomFileSystemConfigs**: [CustomFileSystemConfig](#customfilesystemconfig)[]
* **CustomPosixUserConfig**: [CustomPosixUserConfig](#customposixuserconfig)
* **DefaultLandingUri**: string: Defines which Amazon SageMaker application users are directed to by default.
* **ExecutionRole**: string (Required): The execution role for the user.
* **JupyterLabAppSettings**: [JupyterLabAppSettings](#jupyterlabappsettings)
* **JupyterServerAppSettings**: [JupyterServerAppSettings](#jupyterserverappsettings): The Jupyter server's app settings.
* **KernelGatewayAppSettings**: [KernelGatewayAppSettings](#kernelgatewayappsettings): The kernel gateway app settings.
* **RSessionAppSettings**: [RSessionAppSettings](#rsessionappsettings)
* **RStudioServerProAppSettings**: [RStudioServerProAppSettings](#rstudioserverproappsettings)
* **SecurityGroups**: string[]: The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
* **SharingSettings**: [SharingSettings](#sharingsettings): The sharing settings.
* **SpaceStorageSettings**: [DefaultSpaceStorageSettings](#defaultspacestoragesettings)
* **StudioWebPortal**: string: Indicates whether the Studio experience is available to users. If not, users cannot access Studio.

## UserSettings
### Properties
* **CodeEditorAppSettings**: [CodeEditorAppSettings](#codeeditorappsettings)
* **CustomFileSystemConfigs**: [CustomFileSystemConfig](#customfilesystemconfig)[]
* **CustomPosixUserConfig**: [CustomPosixUserConfig](#customposixuserconfig)
* **DefaultLandingUri**: string: Defines which Amazon SageMaker application users are directed to by default.
* **ExecutionRole**: string: The user profile Amazon Resource Name (ARN).
* **JupyterLabAppSettings**: [JupyterLabAppSettings](#jupyterlabappsettings)
* **JupyterServerAppSettings**: [JupyterServerAppSettings](#jupyterserverappsettings): The Jupyter server's app settings.
* **KernelGatewayAppSettings**: [KernelGatewayAppSettings](#kernelgatewayappsettings): The kernel gateway app settings.
* **RStudioServerProAppSettings**: [RStudioServerProAppSettings](#rstudioserverproappsettings)
* **SecurityGroups**: string[]: The security groups for the Amazon Virtual Private Cloud (VPC) that Studio uses for communication.
* **SharingSettings**: [SharingSettings](#sharingsettings): The sharing settings.
* **SpaceStorageSettings**: [DefaultSpaceStorageSettings](#defaultspacestoragesettings)
* **StudioWebPortal**: string: Indicates whether the Studio experience is available to users. If not, users cannot access Studio.

## ValidationProfile
### Properties
* **ProfileName**: string (Required): The name of the profile for the model package.
* **TransformJobDefinition**: [TransformJobDefinition](#transformjobdefinition) (Required)

## ValidationSpecification
### Properties
* **ValidationProfiles**: [ValidationProfile](#validationprofile)[] (Required)
* **ValidationRole**: string (Required): The IAM roles to be used for the validation of the model package.

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): The VPC security group IDs, in the form sg-xxxxxxxx. Specify the security groups for the VPC that is specified in the Subnets field.
* **Subnets**: string[] (Required): The ID of the subnets in the VPC to which you want to connect to your monitoring jobs.

