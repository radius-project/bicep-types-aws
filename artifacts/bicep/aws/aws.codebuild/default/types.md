# AWS.CodeBuild @ default

## Resource AWS.CodeBuild/Build@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/BuildProperties](#awscodebuildbuildproperties) (Identifier): properties of the resource

## Resource AWS.CodeBuild/BuildBatch@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/BuildBatchProperties](#awscodebuildbuildbatchproperties) (Identifier): properties of the resource

## Resource AWS.CodeBuild/Fleet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/FleetProperties](#awscodebuildfleetproperties) (Identifier): properties of the resource

## Resource AWS.CodeBuild/Project@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/ProjectProperties](#awscodebuildprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.CodeBuild/Report@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/ReportProperties](#awscodebuildreportproperties) (Identifier): properties of the resource

## Resource AWS.CodeBuild/ReportGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/ReportGroupProperties](#awscodebuildreportgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.CodeBuild/Sandbox@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/SandboxProperties](#awscodebuildsandboxproperties) (Identifier): properties of the resource

## Resource AWS.CodeBuild/SourceCredential@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeBuild/SourceCredentialProperties](#awscodebuildsourcecredentialproperties) (Required, Identifier): properties of the resource

## Artifacts
### Properties
* **ArtifactIdentifier**: string: An identifier for this artifact definition.
* **EncryptionDisabled**: bool: Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon Simple Storage Service (Amazon S3). If this is set with another artifacts type, an `invalidInputException` is thrown.
* **Location**: string: Information about the build output artifact location:
* If `type` is set to `CODEPIPELINE`, AWS CodePipeline ignores this value if specified. This is because CodePipeline manages its build output locations instead of CodeBuild.
* If `type` is set to `NO_ARTIFACTS`, this value is ignored if specified, because no build output is produced.
* If `type` is set to `S3`, this is the name of the output bucket.
If you specify `CODEPIPELINE` or `NO_ARTIFACTS` for the `Type` property, don't specify this property. For all of the other types, you must specify this property.

* **Name**: string (Identifier)
* **NamespaceType**: string
* **OverrideArtifactName**: bool
* **Packaging**: string
* **Path**: string
* **Type**: string (Required): The type of build output artifact. Valid values include:
* `CODEPIPELINE`: The build project has build output generated through CodePipeline.
  The `CODEPIPELINE` type is not supported for `secondaryArtifacts`.
* `NO_ARTIFACTS`: The build project does not produce any build output.
* `S3`: The build project stores build output in Amazon S3.


## AWS.CodeBuild/BuildBatchProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the batch build.
* **BuildBatchNumber**: int (ReadOnly): The number of the batch build.
* **BuildBatchStatus**: string (ReadOnly): The current status of the batch build.
* **BuildTimeoutInMinutes**: int (ReadOnly): How long, in minutes, for CodeBuild to wait before timing out the batch build.
* **Complete**: bool (ReadOnly): Whether the batch build is complete.
* **CurrentPhase**: string (ReadOnly): The current build phase of the batch build.
* **EncryptionKey**: string (ReadOnly): The KMS key used to encrypt the batch build output artifacts.
* **Id**: string (ReadOnly): The unique ID for the batch build.
* **Initiator**: string (ReadOnly): The entity that started the batch build.
* **ProjectName**: string: The name of the CodeBuild build project.
* **QueuedTimeoutInMinutes**: int (ReadOnly): The number of minutes a batch build is allowed to be queued before it times out.
* **StartTime**: string (ReadOnly): When the batch build started, in ISO 8601 format.

## AWS.CodeBuild/BuildProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the build.
* **BuildComplete**: bool (ReadOnly): Whether the build is complete.
* **BuildNumber**: int (ReadOnly): The number of the build.
* **BuildStatus**: string (ReadOnly): The current status of the build.
* **CurrentPhase**: string (ReadOnly): The current build phase.
* **EncryptionKey**: string (ReadOnly): The KMS key used to encrypt the build output artifacts.
* **EndTime**: string (ReadOnly): When the build process ended, in ISO 8601 format.
* **Id**: string (ReadOnly): The unique ID for the build (format: projectName:buildId).
* **Initiator**: string (ReadOnly): The entity that started the build.
* **ProjectName**: string: The name of the CodeBuild build project.
* **QueuedTimeoutInMinutes**: int (ReadOnly): The number of minutes a build is allowed to be queued before it times out.
* **ServiceRole**: string (ReadOnly): The name of a service role used for this build.
* **StartTime**: string (ReadOnly): When the build process started, in ISO 8601 format.
* **TimeoutInMinutes**: int (ReadOnly): How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out the build.

## AWS.CodeBuild/FleetProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **BaseCapacity**: int
* **ComputeConfiguration**: [ComputeConfiguration](#computeconfiguration)
* **ComputeType**: string
* **EnvironmentType**: string
* **FleetProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration)
* **FleetServiceRole**: string
* **FleetVpcConfig**: [VpcConfig](#vpcconfig)
* **ImageId**: string
* **Name**: string
* **OverflowBehavior**: string
* **ScalingConfiguration**: [ScalingConfigurationInput](#scalingconfigurationinput)
* **Tags**: [Tag](#tag)[]

## AWS.CodeBuild/ProjectProperties
### Properties
* **Arn**: string (ReadOnly)
* **Artifacts**: [Artifacts](#artifacts) (Required): Specifies output settings for artifacts generated by an AWS CodeBuild build.
* **AutoRetryLimit**: int
* **BadgeEnabled**: bool: Indicates whether AWS CodeBuild generates a publicly accessible URL for your project's build badge.
* **BuildBatchConfig**: [ProjectBuildBatchConfig](#projectbuildbatchconfig): Defines the batch build options for the project.
* **Cache**: [ProjectCache](#projectcache): Settings that AWS CodeBuild uses to store and reuse build dependencies.
* **ConcurrentBuildLimit**: int: The maximum number of concurrent builds that are allowed for this project.
* **Description**: string: A description that makes the build project easy to identify.
* **EncryptionKey**: string
* **Environment**: [Environment](#environment) (Required)
* **FileSystemLocations**: [ProjectFileSystemLocation](#projectfilesystemlocation)[]
* **LogsConfig**: [LogsConfig](#logsconfig)
* **Name**: string (Identifier)
* **QueuedTimeoutInMinutes**: int
* **ResourceAccessRole**: string
* **SecondaryArtifacts**: [Artifacts](#artifacts)[]
* **SecondarySources**: [Source](#source)[]
* **SecondarySourceVersions**: [ProjectSourceVersion](#projectsourceversion)[]
* **ServiceRole**: string (Required)
* **Source**: [Source](#source) (Required)
* **SourceVersion**: string
* **Tags**: [Tag](#tag)[]
* **TimeoutInMinutes**: int
* **Triggers**: [ProjectTriggers](#projecttriggers)
* **Visibility**: string
* **VpcConfig**: [VpcConfig](#vpcconfig)

## AWS.CodeBuild/ReportGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DeleteReports**: bool (WriteOnly)
* **ExportConfig**: [ReportExportConfig](#reportexportconfig) (Required)
* **Name**: string
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## AWS.CodeBuild/ReportProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the report run.
* **CodeCoverageSummary**: [CodeCoverageReportSummary](#codecoveragereportsummary) (ReadOnly)
* **Created**: string (ReadOnly): The date and time this report run occurred, in ISO 8601 format.
* **ExecutionId**: string (ReadOnly): The ARN of the build run that generated this report.
* **Expired**: string (ReadOnly): The date and time a report expires, in ISO 8601 format. A report expires 30 days after it was run.
* **ExportConfig**: [ReportExportConfig](#reportexportconfig) (ReadOnly)
* **Name**: string (ReadOnly): The name of the report that was run, which the service derives from the report group that contains it.
* **ReportGroupArn**: string (ReadOnly): The ARN of the report group associated with this report.
* **Status**: string (ReadOnly): The status of this report. A TEST report reaches SUCCEEDED, FAILED or INCOMPLETE, and a CODE_COVERAGE report reaches COMPLETE or INCOMPLETE. The value is not constrained to a fixed set, because the service returns statuses that the public model does not declare.
* **TestSummary**: [TestReportSummary](#testreportsummary) (ReadOnly)
* **Truncated**: bool (ReadOnly): Whether this report run is truncated. The list of test cases is truncated after the maximum number of test cases is reached.
* **Type**: string (ReadOnly): The type of the report that was run. CODE_COVERAGE is a code coverage report and TEST is a test report. The value is not constrained to those two, because the service can return a report type that the public model does not declare.

## AWS.CodeBuild/SandboxProperties
### Properties
* **Arn**: string (Identifier): The ARN of the sandbox.
* **EncryptionKey**: string (ReadOnly): The KMS key used for encrypting the sandbox output artifacts.
* **Id**: string (ReadOnly): The ID of the sandbox.
* **ProjectName**: string: The CodeBuild project name.
* **QueuedTimeoutInMinutes**: int (ReadOnly): The number of minutes a sandbox is allowed to be queued before it times out.
* **RequestTime**: string (ReadOnly): When the sandbox process was initially requested, expressed in ISO 8601 format.
* **ServiceRole**: string (ReadOnly): The name of a service role used for this sandbox.
* **StartTime**: string (ReadOnly): When the sandbox process started, expressed in ISO 8601 format.
* **Status**: string (ReadOnly): The status of the sandbox.
* **TimeoutInMinutes**: int (ReadOnly): How long, in minutes, for CodeBuild to wait before timing out this sandbox.

## AWS.CodeBuild/SourceCredentialProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the SourceCredential resource.
* **AuthType**: string (Required): The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER. 
* **ServerType**: string (Required): The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or BITBUCKET.
* **Token**: string (Required, WriteOnly): For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access token or the app password. For the authType CODECONNECTIONS, this is the connectionArn. For the authType SECRETS_MANAGER, this is the secretArn.
* **Username**: string (WriteOnly):  The Bitbucket username when the authType is BASIC_AUTH. This parameter is not valid for other types of source providers or connections.

## BatchRestrictions
### Properties
* **ComputeTypesAllowed**: string[]
* **FleetsAllowed**: string[]
* **MaximumBuildsAllowed**: int

## BuildStatusConfig
### Properties
* **Context**: string
* **TargetUrl**: string

## CloudWatchLogsConfig
### Properties
* **GroupName**: string
* **Status**: string (Required)
* **StreamName**: string

## CodeCoverageReportSummary
### Properties
* **BranchCoveragePercentage**: int: The percentage of branches that are covered by the tests.
* **BranchesCovered**: int: The number of conditional branches that are covered by the tests.
* **BranchesMissed**: int: The number of conditional branches that are not covered by the tests.
* **LineCoveragePercentage**: int: The percentage of lines that are covered by the tests.
* **LinesCovered**: int: The number of lines that are covered by the tests.
* **LinesMissed**: int: The number of lines that are not covered by the tests.

## ComputeConfiguration
### Properties
* **disk**: int
* **instanceType**: string
* **machineType**: string
* **memory**: int
* **vCpu**: int

## DockerServer
### Properties
* **ComputeType**: string (Required): Information about the compute resources the docker server uses. Valid Values: BUILD_GENERAL1_SMALL | BUILD_GENERAL1_MEDIUM | BUILD_GENERAL1_LARGE | BUILD_GENERAL1_XLARGE | BUILD_GENERAL1_2XLARGE | BUILD_LAMBDA_1GB | BUILD_LAMBDA_2GB | BUILD_LAMBDA_4GB | BUILD_LAMBDA_8GB | BUILD_LAMBDA_10GB | ATTRIBUTE_BASED_COMPUTE | CUSTOM_INSTANCE_TYPE
* **SecurityGroupIds**: string[]: A list of one or more security groups IDs.

## Environment
### Properties
* **Certificate**: string
* **ComputeType**: string (Required)
* **DockerServer**: [DockerServer](#dockerserver): Contains docker server information.
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **Fleet**: [ProjectFleet](#projectfleet)
* **HostKernel**: string: The kernel version of the host operating system for the build environment. Allowed values: LINUX_KERNEL_4 | LINUX_KERNEL_6 | LINUX_KERNEL_LATEST
* **Image**: string (Required)
* **ImagePullCredentialsType**: string
* **PrivilegedMode**: bool
* **RegistryCredential**: [RegistryCredential](#registrycredential)
* **Type**: string (Required)

## EnvironmentVariable
### Properties
* **Name**: string (Required, Identifier)
* **Type**: string
* **Value**: string (Required)

## FleetProxyRule
### Properties
* **Effect**: string
* **Entities**: string[]
* **Type**: string

## GitSubmodulesConfig
### Properties
* **FetchSubmodules**: bool (Required)

## LogsConfig
### Properties
* **CloudWatchLogs**: [CloudWatchLogsConfig](#cloudwatchlogsconfig)
* **S3Logs**: [S3LogsConfig](#s3logsconfig)

## ProjectBuildBatchConfig
### Properties
* **BatchReportMode**: string
* **CombineArtifacts**: bool
* **Restrictions**: [BatchRestrictions](#batchrestrictions)
* **ServiceRole**: string
* **TimeoutInMins**: int

## ProjectCache
### Properties
* **CacheNamespace**: string: Defines the scope of the cache. You can use this namespace to share a cache across multiple projects.
* **Location**: string
* **Modes**: string[]
* **Type**: string (Required): The type of cache used by the build project. Allowed values: NO_CACHE | S3 | LOCAL.

## ProjectFileSystemLocation
### Properties
* **Identifier**: string (Required)
* **Location**: string (Required)
* **MountOptions**: string
* **MountPoint**: string (Required)
* **Type**: string (Required)

## ProjectFleet
### Properties
* **FleetArn**: string

## ProjectSourceVersion
### Properties
* **SourceIdentifier**: string (Required)
* **SourceVersion**: string

## ProjectTriggers
### Properties
* **BuildType**: string
* **FilterGroups**: [WebhookFilter](#webhookfilter)[][]
* **PullRequestBuildPolicy**: [PullRequestBuildPolicy](#pullrequestbuildpolicy)
* **ScopeConfiguration**: [ScopeConfiguration](#scopeconfiguration)
* **Webhook**: bool

## ProxyConfiguration
### Properties
* **DefaultBehavior**: string
* **OrderedProxyRules**: [FleetProxyRule](#fleetproxyrule)[]

## PullRequestBuildPolicy
### Properties
* **ApproverRoles**: string[]
* **RequiresCommentApproval**: string (Required)

## RegistryCredential
### Properties
* **Credential**: string (Required)
* **CredentialProvider**: string (Required)

## Report_StatusCounts
### Properties

## ReportExportConfig
### Properties
* **ExportConfigType**: string: The export configuration type. S3 exports the report's raw data to an S3 bucket, and NO_EXPORT means the report is not exported.
* **S3Destination**: [S3ReportExportConfig](#s3reportexportconfig)

## ReportExportConfig
### Properties
* **ExportConfigType**: string (Required)
* **S3Destination**: [S3ReportExportConfig](#s3reportexportconfig)

## S3LogsConfig
### Properties
* **EncryptionDisabled**: bool
* **Location**: string
* **Status**: string (Required)

## S3ReportExportConfig
### Properties
* **Bucket**: string: The name of the S3 bucket where the raw data of the report is exported.
* **BucketOwner**: string: The account identifier of the owner of the S3 bucket. This allows the report to be exported to a bucket owned by another account.
* **EncryptionDisabled**: bool: Whether the report's raw data is exported without encryption.
* **EncryptionKey**: string: The encryption key for the report's encrypted raw data.
* **Packaging**: string: The type of build output artifact to create. ZIP produces a ZIP file containing the raw data, and NONE produces individual files.
* **Path**: string: The path to the exported report's raw data results.

## S3ReportExportConfig
### Properties
* **Bucket**: string (Required)
* **BucketOwner**: string
* **EncryptionDisabled**: bool
* **EncryptionKey**: string
* **Packaging**: string
* **Path**: string

## ScalingConfigurationInput
### Properties
* **MaxCapacity**: int
* **ScalingType**: string
* **TargetTrackingScalingConfigs**: [TargetTrackingScalingConfiguration](#targettrackingscalingconfiguration)[]

## ScopeConfiguration
### Properties
* **Domain**: string: The domain of the GitHub Enterprise organization or the GitLab Self Managed group. Note that this parameter is only required if your project's source type is GITHUB_ENTERPRISE or GITLAB_SELF_MANAGED.
* **Name**: string (Required, Identifier): The name of either the enterprise or organization that will send webhook events to CodeBuild, depending on if the webhook is a global or organization webhook respectively.
* **Scope**: string: The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION. Allowed values: GITHUB_ORGANIZATION | GITHUB_GLOBAL | GITLAB_GROUP

## Source
### Properties
* **Auth**: [SourceAuth](#sourceauth)
* **BuildSpec**: string
* **BuildStatusConfig**: [BuildStatusConfig](#buildstatusconfig)
* **GitCloneDepth**: int
* **GitSubmodulesConfig**: [GitSubmodulesConfig](#gitsubmodulesconfig)
* **InsecureSsl**: bool
* **Location**: string
* **ReportBuildStatus**: bool
* **SourceIdentifier**: string
* **Type**: string (Required)

## SourceAuth
### Properties
* **Resource**: string
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TargetTrackingScalingConfiguration
### Properties
* **MetricType**: string
* **TargetValue**: int

## TestReportSummary
### Properties
* **DurationInNanoSeconds**: int (Required): The number of nanoseconds it took to run all of the test cases in the report.
* **StatusCounts**: [Report_StatusCounts](#reportstatuscounts) (Required): The number of test cases in the report by status. The key is the test case status and the value is the number of test cases with that status.
* **Total**: int (Required): The number of test cases in the report.

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **Subnets**: string[]
* **VpcId**: string

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **Subnets**: string[]
* **VpcId**: string

## WebhookFilter
### Properties
* **ExcludeMatchedPattern**: bool
* **Pattern**: string (Required)
* **Type**: string (Required)

