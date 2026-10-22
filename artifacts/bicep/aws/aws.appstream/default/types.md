# AWS.AppStream @ default

## Resource AWS.AppStream/AppBlock@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/AppBlockProperties](#awsappstreamappblockproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/AppBlockBuilder@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/AppBlockBuilderProperties](#awsappstreamappblockbuilderproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/ApplicationProperties](#awsappstreamapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/DirectoryConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/DirectoryConfigProperties](#awsappstreamdirectoryconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/Entitlement@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/EntitlementProperties](#awsappstreamentitlementproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/Fleet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/FleetProperties](#awsappstreamfleetproperties) (Required, Identifier): properties of the resource

## Resource AWS.AppStream/Stack@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/StackProperties](#awsappstreamstackproperties) (Identifier): properties of the resource

## Resource AWS.AppStream/StackFleetAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppStream/StackFleetAssociationProperties](#awsappstreamstackfleetassociationproperties) (Required, Identifier): properties of the resource

## AccessEndpoint
### Properties
* **EndpointType**: string (Required)
* **VpceId**: string (Required)

## AccessEndpoint
### Properties
* **EndpointType**: string (Required): The type of interface endpoint.
* **VpceId**: string (Required): The identifier (ID) of the VPC in which the interface endpoint is used.

## AgentAccessConfig
### Properties
* **S3BucketArn**: string: The Amazon Resource Name (ARN) of the Amazon S3 bucket where agent screenshots are stored. Required when ScreenshotsUploadEnabled is true.
* **ScreenImageFormat**: string (Required): The image format for agent screen captures.
* **ScreenResolution**: string (Required): The screen resolution for the agent streaming environment.
* **ScreenshotsUploadEnabled**: bool: Indicates whether screenshot uploads to Amazon S3 are enabled for agent sessions.
* **Settings**: [AgentAccessSetting](#agentaccesssetting)[] (Required): The list of agent access settings that define permissions for each agent action. You must specify at least one setting.
* **UserControlMode**: string: The user control mode for agent sessions. This setting determines how users can interact with agent sessions. Valid values are VIEW_ONLY, VIEW_STOP, and DISABLED.

## AgentAccessSetting
### Properties
* **AgentAction**: string (Required): The agent action to configure. Valid values are COMPUTER_VISION, COMPUTER_INPUT, and FORWARD_MCP_TOOLS. COMPUTER_VISION allows agents to take screenshots of the desktop. COMPUTER_INPUT allows agents to click, type, and scroll on the desktop and requires COMPUTER_VISION to also be enabled. FORWARD_MCP_TOOLS allows agents to interact with applications and the desktop operating system through direct MCP calls rather than using computer use tools. Forwards MCP tools configured on the WorkSpaces application session to the agent.
* **Permission**: string (Required): Whether the agent action is enabled or disabled.

## ApplicationSettings
### Properties
* **Enabled**: bool (Required): Enables or disables persistent application settings for users during their streaming sessions.
* **SettingsGroup**: string: The path prefix for the S3 bucket where users' persistent application settings are stored. You can allow the same persistent application settings to be used across multiple stacks by specifying the same settings group for each stack.

## Attribute
### Properties
* **Name**: string (Required, Identifier)
* **Value**: string (Required)

## AWS.AppStream/AppBlockBuilderProperties
### Properties
* **AccessEndpoints**: [AccessEndpoint](#accessendpoint)[]
* **AppBlockArns**: string[] (WriteOnly)
* **Arn**: string (ReadOnly)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisableIMDSV1**: bool
* **DisplayName**: string
* **EnableDefaultInternetAccess**: bool
* **IamRoleArn**: string
* **InstanceType**: string (Required)
* **Name**: string (Required, Identifier)
* **Platform**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig) (Required)

## AWS.AppStream/AppBlockProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string
* **Name**: string (Required)
* **PackagingType**: string
* **PostSetupScriptDetails**: [ScriptDetails](#scriptdetails)
* **SetupScriptDetails**: [ScriptDetails](#scriptdetails)
* **SourceS3Location**: [S3Location](#s3location) (Required)
* **Tags**: [Tag](#tag)[]

## AWS.AppStream/ApplicationProperties
### Properties
* **AppBlockArn**: string (Required)
* **Arn**: string (ReadOnly, Identifier)
* **AttributesToDelete**: string[] (WriteOnly)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **DisplayName**: string
* **IconS3Location**: [S3Location](#s3location) (Required)
* **InstanceFamilies**: string[] (Required)
* **LaunchParameters**: string
* **LaunchPath**: string (Required)
* **Name**: string (Required)
* **Platforms**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **WorkingDirectory**: string

## AWS.AppStream/DirectoryConfigProperties
### Properties
* **CertificateBasedAuthProperties**: [CertificateBasedAuthProperties](#certificatebasedauthproperties)
* **DirectoryName**: string (Required, Identifier)
* **OrganizationalUnitDistinguishedNames**: string[] (Required)
* **ServiceAccountCredentials**: [ServiceAccountCredentials](#serviceaccountcredentials) (Required)

## AWS.AppStream/EntitlementProperties
### Properties
* **AppVisibility**: string (Required)
* **Attributes**: [Attribute](#attribute)[] (Required)
* **CreatedTime**: string (ReadOnly)
* **Description**: string
* **LastModifiedTime**: string (ReadOnly)
* **Name**: string (Required, Identifier)
* **StackName**: string (Required, Identifier)

## AWS.AppStream/FleetProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributesToDelete**: string[] (WriteOnly)
* **ComputeCapacity**: [ComputeCapacity](#computecapacity)
* **Description**: string
* **DisableIMDSV1**: bool
* **DisconnectTimeoutInSeconds**: int
* **DisplayName**: string
* **DomainJoinInfo**: [DomainJoinInfo](#domainjoininfo)
* **EnableDefaultInternetAccess**: bool
* **FleetType**: string
* **IamRoleArn**: string
* **IdleDisconnectTimeoutInSeconds**: int
* **ImageArn**: string
* **ImageName**: string
* **InstanceType**: string (Required)
* **MaxConcurrentSessions**: int
* **MaxSessionsPerInstance**: int
* **MaxUserDurationInSeconds**: int
* **Name**: string (Required, Identifier)
* **Platform**: string
* **RootVolumeConfig**: [VolumeConfig](#volumeconfig)
* **SessionScriptS3Location**: [S3Location](#s3location)
* **StreamView**: string
* **Tags**: [Tag](#tag)[]
* **UsbDeviceFilterStrings**: string[]
* **VpcConfig**: [VpcConfig](#vpcconfig)

## AWS.AppStream/StackFleetAssociationProperties
### Properties
* **FleetName**: string (Required, Identifier): The name of the fleet. To associate a fleet with a stack, you must specify a dependency on the fleet resource.
* **StackName**: string (Required, Identifier): The name of the stack. To associate a fleet with a stack, you must specify a dependency on the stack resource.

## AWS.AppStream/StackProperties
### Properties
* **AccessEndpoints**: [AccessEndpoint](#accessendpoint)[]: The list of virtual private cloud (VPC) interface endpoint objects. Users of the stack can connect to AppStream 2.0 only through the specified endpoints.
* **AgentAccessConfig**: [AgentAccessConfig](#agentaccessconfig): The configuration for agent access on the stack. If specified, agent access is enabled for the stack.
* **ApplicationSettings**: [ApplicationSettings](#applicationsettings): The persistent application settings for users of the stack. When these settings are enabled, changes that users make to applications and Windows settings are automatically saved after each session and applied to the next session.
* **AttributesToDelete**: string[] (WriteOnly): The stack attributes to delete.
* **ContentRedirection**: [ContentRedirection](#contentredirection): The content redirection settings for the stack. These settings control URL redirection between the streaming session and the local device.
* **DeleteStorageConnectors**: bool (WriteOnly): This parameter has been deprecated. Deletes the storage connectors currently enabled for the stack.
* **Description**: string: The description to display.
* **DisplayName**: string: The stack name to display.
* **EmbedHostDomains**: string[]: The domains where AppStream 2.0 streaming sessions can be embedded in an iframe. You must approve the domains that you want to host embedded AppStream 2.0 streaming sessions.
* **FeedbackURL**: string: The URL that users are redirected to after they click the Send Feedback link. If no URL is specified, no Send Feedback link is displayed.
* **Name**: string (Identifier): The name of the stack.
* **RedirectURL**: string: The URL that users are redirected to after their streaming session ends.
* **StorageConnectors**: [StorageConnector](#storageconnector)[] (ReadOnly): The storage connectors to enable.
* **StreamingExperienceSettings**: [StreamingExperienceSettings](#streamingexperiencesettings): The streaming protocol that you want your stack to prefer. This can be UDP or TCP. Currently, UDP is only supported in the Windows native client.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs.
* **UserSettings**: [UserSetting](#usersetting)[]: The actions that are enabled or disabled for users during their streaming sessions. By default, these actions are enabled.

## CertificateBasedAuthProperties
### Properties
* **CertificateAuthorityArn**: string
* **Status**: string

## ComputeCapacity
### Properties
* **DesiredInstances**: int
* **DesiredSessions**: int

## ContentRedirection
### Properties
* **HostToClient**: [UrlRedirectionConfig](#urlredirectionconfig): The URL redirection configuration from the streaming session host to the client.

## DomainJoinInfo
### Properties
* **DirectoryName**: string
* **OrganizationalUnitDistinguishedName**: string

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3Key**: string

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3Key**: string (Required)

## S3Location
### Properties
* **S3Bucket**: string (Required)
* **S3Key**: string (Required)

## ScriptDetails
### Properties
* **ExecutableParameters**: string
* **ExecutablePath**: string (Required)
* **ScriptS3Location**: [S3Location](#s3location) (Required)
* **TimeoutInSeconds**: int (Required)

## ServiceAccountCredentials
### Properties
* **AccountName**: string (Required)
* **AccountPassword**: string (Required, WriteOnly)

## StorageConnector
### Properties
* **ConnectorType**: string (Required): The type of storage connector.
* **Domains**: string[]: The names of the domains for the account.
* **ResourceIdentifier**: string: The ARN of the storage connector.

## StreamingExperienceSettings
### Properties
* **PreferredProtocol**: string: The preferred protocol that you want to use while streaming your application.

## Tag
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## UrlRedirectionConfig
### Properties
* **AllowedUrls**: string[]: The URLs that are allowed for redirection.
* **DeniedUrls**: string[]: The URLs that are denied for redirection.
* **Enabled**: bool (Required): Specifies whether URL redirection is enabled or disabled.

## UserSetting
### Properties
* **Action**: string (Required): The action that is enabled or disabled.
* **MaximumLength**: int: Specifies the number of characters that can be copied by end users from the local device to the remote session, and to the local device from the remote session. This can be specified only for the CLIPBOARD_COPY_FROM_LOCAL_DEVICE and CLIPBOARD_COPY_TO_LOCAL_DEVICE actions. This defaults to 20,971,520 (20 MB) when unspecified and the permission is ENABLED. This can't be specified when the permission is DISABLED. The value can be between 1 and 20,971,520 (20 MB).
* **Permission**: string (Required): Indicates whether the action is enabled or disabled.

## VolumeConfig
### Properties
* **VolumeSizeInGb**: int

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## VpcConfig
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

