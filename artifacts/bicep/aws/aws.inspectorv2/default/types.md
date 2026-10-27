# AWS.InspectorV2 @ default

## Resource AWS.InspectorV2/CisScanConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InspectorV2/CisScanConfigurationProperties](#awsinspectorv2cisscanconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.InspectorV2/CodeSecurityIntegration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InspectorV2/CodeSecurityIntegrationProperties](#awsinspectorv2codesecurityintegrationproperties) (Identifier): properties of the resource

## Resource AWS.InspectorV2/CodeSecurityScanConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InspectorV2/CodeSecurityScanConfigurationProperties](#awsinspectorv2codesecurityscanconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.InspectorV2/Connector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InspectorV2/ConnectorProperties](#awsinspectorv2connectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.InspectorV2/Filter@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InspectorV2/FilterProperties](#awsinspectorv2filterproperties) (Required, Identifier): properties of the resource

## AWS.InspectorV2/CisScanConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): CIS Scan configuration unique identifier
* **ScanName**: string (Required): Name of the scan
* **Schedule**: [Schedule](#schedule) (Required)
* **SecurityLevel**: string (Required)
* **Tags**: [CisTagMap](#cistagmap)
* **Targets**: [CisTargets](#cistargets) (Required)

## AWS.InspectorV2/CodeSecurityIntegrationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Code Security Integration ARN
* **AuthorizationUrl**: string (ReadOnly): Authorization URL for OAuth flow
* **CreatedAt**: string (ReadOnly): Creation timestamp
* **CreateIntegrationDetails**: [CreateDetails](#createdetails) (WriteOnly): Create Integration Details
* **LastUpdatedAt**: string (ReadOnly): Last update timestamp
* **Name**: string: Code Security Integration name
* **Status**: string (ReadOnly): Integration Status
* **StatusReason**: string (ReadOnly): Reason for the current status
* **Tags**: [TagMap](#tagmap)
* **Type**: string: Integration Type
* **UpdateIntegrationDetails**: [UpdateDetails](#updatedetails) (WriteOnly): Update Integration Details

## AWS.InspectorV2/CodeSecurityScanConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Code Security Scan Configuration ARN
* **Configuration**: [CodeSecurityScanConfiguration](#codesecurityscanconfiguration): Code Security Scan Configuration
* **Level**: string: Configuration Level
* **Name**: string: Code Security Scan Configuration name
* **ScopeSettings**: [ScopeSettings](#scopesettings): Scope Settings
* **Tags**: [TagMap](#tagmap)

## AWS.InspectorV2/ConnectorProperties
### Properties
* **ConnectorArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the connector.
* **CreatedAt**: string (ReadOnly): Timestamp when the connector was created.
* **Description**: string: Optional description of the connector.
* **EnablementStatus**: string (ReadOnly): The enablement status of the connector.
* **EnablementStatusReason**: string (ReadOnly): Reason for the current enablement status, if applicable.
* **Health**: [ConnectorHealth](#connectorhealth) (ReadOnly): Health status of the connector.
* **LastUpdatedAt**: string (ReadOnly): Timestamp when the connector was last updated.
* **Name**: string (Required): Display name for the connector.
* **Provider**: string (Required): The cloud provider for this connector.
* **ProviderConfiguration**: [ProviderConfiguration](#providerconfiguration) (Required): Provider-specific configuration including regions and scope.
* **Tags**: [Tag](#tag)[]: Tags to apply to the connector.

## AWS.InspectorV2/FilterProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Findings filter ARN.
* **Description**: string: Findings filter description.
* **FilterAction**: string (Required): Findings filter action.
* **FilterCriteria**: [FilterCriteria](#filtercriteria) (Required): Findings filter criteria.
* **Name**: string (Required): Findings filter name.
* **Tags**: [FilterTagMap](#filtertagmap)

## AzureProviderConfiguration
### Properties
* **AutoInstallVMScanner**: bool: Whether to automatically install the VM scanner. Defaults to true.
* **AwsConfigConnectorArn**: string (Required): The ARN of the AWS Config connector used for Azure resource discovery.
* **AzureRegions**: string[] (Required): List of Azure regions to scan.
* **ScopeConfiguration**: [AzureScopeConfigurationMap](#azurescopeconfigurationmap) (Required)

## AzureScopeConfigurationMap
### Properties
* **ContainerImageScanning**: [ScopeConfiguration](#scopeconfiguration)
* **ServerlessScanning**: [ScopeConfiguration](#scopeconfiguration)
* **VmScanning**: [ScopeConfiguration](#scopeconfiguration)

## CisScanConfiguration_TargetResourceTags
### Properties

## CisTagMap
### Properties

## CisTargets
### Properties
* **AccountIds**: string[] (Required)
* **TargetResourceTags**: [CisScanConfiguration_TargetResourceTags](#cisscanconfigurationtargetresourcetags) (Required)

## CodeSecurityScanConfiguration
### Properties
* **continuousIntegrationScanConfiguration**: [ContinuousIntegrationScanConfiguration](#continuousintegrationscanconfiguration)
* **periodicScanConfiguration**: [PeriodicScanConfiguration](#periodicscanconfiguration)
* **ruleSetCategories**: string[] (Required)

## ConnectorHealth
### Properties
* **ConnectorStatus**: string
* **LastCheckedAt**: string
* **Message**: string

## ContinuousIntegrationScanConfiguration
### Properties
* **supportedEvents**: string[] (Required)

## CreateDetails
### Properties
* **gitlabSelfManaged**: [CreateGitLabSelfManagedIntegrationDetail](#creategitlabselfmanagedintegrationdetail) (Required)

## CreateGitLabSelfManagedIntegrationDetail
### Properties
* **accessToken**: string (Required)
* **instanceUrl**: string (Required)

## DailySchedule
### Properties
* **StartTime**: [Time](#time) (Required)

## DateFilter
### Properties
* **EndInclusive**: int
* **StartInclusive**: int

## FilterCriteria
### Properties
* **AwsAccountId**: [StringFilter](#stringfilter)[]
* **CodeVulnerabilityDetectorName**: [StringFilter](#stringfilter)[]
* **CodeVulnerabilityDetectorTags**: [StringFilter](#stringfilter)[]
* **CodeVulnerabilityFilePath**: [StringFilter](#stringfilter)[]
* **ComponentId**: [StringFilter](#stringfilter)[]
* **ComponentType**: [StringFilter](#stringfilter)[]
* **Ec2InstanceImageId**: [StringFilter](#stringfilter)[]
* **Ec2InstanceSubnetId**: [StringFilter](#stringfilter)[]
* **Ec2InstanceVpcId**: [StringFilter](#stringfilter)[]
* **EcrImageArchitecture**: [StringFilter](#stringfilter)[]
* **EcrImageHash**: [StringFilter](#stringfilter)[]
* **EcrImageInUseCount**: [NumberFilter](#numberfilter)[]
* **EcrImagePushedAt**: [DateFilter](#datefilter)[]
* **EcrImageRegistry**: [StringFilter](#stringfilter)[]
* **EcrImageRepositoryName**: [StringFilter](#stringfilter)[]
* **EcrImageTags**: [StringFilter](#stringfilter)[]
* **EpssScore**: [NumberFilter](#numberfilter)[]
* **ExploitAvailable**: [StringFilter](#stringfilter)[]
* **FindingArn**: [StringFilter](#stringfilter)[]
* **FindingStatus**: [StringFilter](#stringfilter)[]
* **FindingType**: [StringFilter](#stringfilter)[]
* **FirstObservedAt**: [DateFilter](#datefilter)[]
* **FixAvailable**: [StringFilter](#stringfilter)[]
* **InspectorScore**: [NumberFilter](#numberfilter)[]
* **LambdaFunctionExecutionRoleArn**: [StringFilter](#stringfilter)[]
* **LambdaFunctionLastModifiedAt**: [DateFilter](#datefilter)[]
* **LambdaFunctionLayers**: [StringFilter](#stringfilter)[]
* **LambdaFunctionName**: [StringFilter](#stringfilter)[]
* **LambdaFunctionRuntime**: [StringFilter](#stringfilter)[]
* **LastObservedAt**: [DateFilter](#datefilter)[]
* **NetworkProtocol**: [StringFilter](#stringfilter)[]
* **PortRange**: [PortRangeFilter](#portrangefilter)[]
* **RelatedVulnerabilities**: [StringFilter](#stringfilter)[]
* **ResourceId**: [StringFilter](#stringfilter)[]
* **ResourceTags**: [MapFilter](#mapfilter)[]
* **ResourceType**: [StringFilter](#stringfilter)[]
* **Severity**: [StringFilter](#stringfilter)[]
* **Title**: [StringFilter](#stringfilter)[]
* **UpdatedAt**: [DateFilter](#datefilter)[]
* **VendorSeverity**: [StringFilter](#stringfilter)[]
* **VulnerabilityId**: [StringFilter](#stringfilter)[]
* **VulnerabilitySource**: [StringFilter](#stringfilter)[]
* **VulnerablePackages**: [PackageFilter](#packagefilter)[]

## FilterTagMap
### Properties

## MapFilter
### Properties
* **Comparison**: string (Required)
* **Key**: string
* **Value**: string

## MonthlySchedule
### Properties
* **Day**: string (Required)
* **StartTime**: [Time](#time) (Required)

## NumberFilter
### Properties
* **LowerInclusive**: int
* **UpperInclusive**: int

## OneTimeSchedule
### Properties

## PackageFilter
### Properties
* **Architecture**: [StringFilter](#stringfilter)
* **Epoch**: [NumberFilter](#numberfilter)
* **FilePath**: [StringFilter](#stringfilter)
* **Name**: [StringFilter](#stringfilter)
* **Release**: [StringFilter](#stringfilter)
* **SourceLambdaLayerArn**: [StringFilter](#stringfilter)
* **SourceLayerHash**: [StringFilter](#stringfilter)
* **Version**: [StringFilter](#stringfilter)

## PeriodicScanConfiguration
### Properties
* **frequency**: string
* **frequencyExpression**: string

## PortRangeFilter
### Properties
* **BeginInclusive**: int
* **EndInclusive**: int

## ProviderConfiguration
### Properties
* **Azure**: [AzureProviderConfiguration](#azureproviderconfiguration) (Required)

## Schedule
### Properties
* **Daily**: [DailySchedule](#dailyschedule)
* **Monthly**: [MonthlySchedule](#monthlyschedule)
* **OneTime**: [OneTimeSchedule](#onetimeschedule)
* **Weekly**: [WeeklySchedule](#weeklyschedule)

## ScopeConfiguration
### Properties
* **ScopeType**: string (Required)
* **ScopeValues**: string[]: List of subscription IDs. Empty for TENANT scope.
* **State**: string (ReadOnly)
* **StateReason**: string (ReadOnly): Reason for the current scope state.

## ScopeSettings
### Properties
* **projectSelectionScope**: string

## StringFilter
### Properties
* **Comparison**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagMap
### Properties

## TagMap
### Properties

## Time
### Properties
* **TimeOfDay**: string (Required)
* **TimeZone**: string (Required)

## UpdateDetails
### Properties
* **github**: [UpdateGitHubIntegrationDetail](#updategithubintegrationdetail)
* **gitlabSelfManaged**: [UpdateGitLabSelfManagedIntegrationDetail](#updategitlabselfmanagedintegrationdetail)

## UpdateGitHubIntegrationDetail
### Properties
* **code**: string (Required)
* **installationId**: string (Required)

## UpdateGitLabSelfManagedIntegrationDetail
### Properties
* **authCode**: string (Required)

## WeeklySchedule
### Properties
* **Days**: string[] (Required)
* **StartTime**: [Time](#time) (Required)

