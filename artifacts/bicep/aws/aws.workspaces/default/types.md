# AWS.WorkSpaces @ default

## Resource AWS.WorkSpaces/Directory@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpaces/DirectoryProperties](#awsworkspacesdirectoryproperties) (Identifier): properties of the resource

## Resource AWS.WorkSpaces/Workspace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpaces/WorkspaceProperties](#awsworkspacesworkspaceproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpaces/WorkspaceIpGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpaces/WorkspaceIpGroupProperties](#awsworkspacesworkspaceipgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpaces/WorkspacesPool@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpaces/WorkspacesPoolProperties](#awsworkspacesworkspacespoolproperties) (Required, Identifier): properties of the resource

## AccessEndpoint
### Properties
* **AccessEndpointType**: string: Indicates the type of access endpoint.
* **VpcEndpointId**: string: Indicates the VPC endpoint to use for access.

## AccessEndpointConfig
### Properties
* **AccessEndpoints**: [AccessEndpoint](#accessendpoint)[] (Required): Indicates a list of access endpoints associated with this directory.
* **InternetFallbackProtocols**: string[]: Indicates a list of protocols that fallback to using the public Internet when streaming over a VPC endpoint is not available.

## ActiveDirectoryConfig
### Properties
* **DomainName**: string (Required): The name of the domain.
* **ServiceAccountSecretArn**: string (Required): Indicates the secret ARN on the service account.

## ApplicationSettings
### Properties
* **SettingsGroup**: string
* **Status**: string (Required)

## AWS.WorkSpaces/DirectoryProperties
### Properties
* **ActiveDirectoryConfig**: [ActiveDirectoryConfig](#activedirectoryconfig)
* **Alias**: string (ReadOnly): The directory alias.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the WorkSpace directory.
* **CertificateBasedAuthProperties**: [CertificateBasedAuthProperties](#certificatebasedauthproperties)
* **CustomerUserName**: string (ReadOnly): The user name for the service account.
* **DirectoryId**: string (ReadOnly): The directory identifier.
* **DirectoryName**: string (ReadOnly): The name of the directory.
* **DirectoryType**: string (ReadOnly): The directory type.
* **DnsIpAddresses**: string[] (ReadOnly): The IP addresses of the DNS servers for the directory.
* **DnsIpv6Addresses**: string[] (ReadOnly): The IPv6 addresses of the DNS servers for the directory.
* **EnableSelfService**: bool (WriteOnly): Indicates whether self-service capabilities are enabled or disabled.
* **EndpointEncryptionMode**: string: Endpoint encryption mode that allows you to configure the specified directory between Standard TLS and FIPS 140-2 validated mode.
* **IamRoleId**: string (ReadOnly): The identifier of the IAM role.
* **IDCConfig**: [IDCConfig](#idcconfig) (ReadOnly)
* **IdcInstanceArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the identity center instance.
* **IpGroupIds**: string[]: The identifiers of the IP access control groups associated with the directory.
* **MicrosoftEntraConfig**: [MicrosoftEntraConfig](#microsoftentraconfig)
* **RegistrationCode**: string (ReadOnly): The registration code for the directory.
* **SamlProperties**: [SamlProperties](#samlproperties)
* **SelfservicePermissions**: [SelfservicePermissions](#selfservicepermissions)
* **State**: string (ReadOnly): The state of the directory's registration with Amazon WorkSpaces.
* **StreamingProperties**: [StreamingProperties](#streamingproperties)
* **SubnetIds**: string[]: The identifiers of the subnets for your virtual private cloud (VPC).
* **Tags**: [Tag](#tag)[]: The tags associated with the directory.
* **Tenancy**: string: Indicates whether your WorkSpace directory is dedicated or shared.
* **UserIdentityType**: string: The type of identity management the user is using.
* **WorkspaceAccessProperties**: [WorkspaceAccessProperties](#workspaceaccessproperties)
* **WorkspaceCreationProperties**: [DefaultWorkspaceCreationProperties](#defaultworkspacecreationproperties)
* **WorkspaceDirectoryDescription**: string: Description of the directory to register.
* **WorkspaceDirectoryName**: string: The name of the directory to register.
* **WorkspaceSecurityGroupId**: string (ReadOnly): The identifier of the security group that is assigned to new WorkSpaces.
* **WorkspaceType**: string: Indicates whether the directory's WorkSpace type is personal or pools.

## AWS.WorkSpaces/WorkspaceIpGroupProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the IP access control group.
* **GroupDesc**: string: The description of the group.
* **GroupId**: string (ReadOnly): The identifier of the IP access control group.
* **GroupName**: string (Required): The name of the group.
* **Tags**: [Tag](#tag)[]: The tags for the IP access control group.
* **UserRules**: [IpRuleItem](#ipruleitem)[]: The rules for the IP access control group.

## AWS.WorkSpaces/WorkspaceProperties
### Properties
* **BundleId**: string (Required)
* **DirectoryId**: string (Required)
* **Id**: string (ReadOnly)
* **RootVolumeEncryptionEnabled**: bool
* **Tags**: [Tag](#tag)[]
* **UserName**: string (Required)
* **UserVolumeEncryptionEnabled**: bool
* **VolumeEncryptionKey**: string
* **WorkspaceId**: string (ReadOnly, Identifier)
* **WorkspaceProperties**: [WorkspaceProperties](#workspaceproperties)

## AWS.WorkSpaces/WorkspacesPoolProperties
### Properties
* **ApplicationSettings**: [ApplicationSettings](#applicationsettings)
* **BundleId**: string (Required)
* **Capacity**: [Capacity](#capacity) (Required)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DirectoryId**: string (Required)
* **PoolArn**: string (ReadOnly)
* **PoolId**: string (ReadOnly, Identifier)
* **PoolName**: string (Required)
* **RunningMode**: string
* **Tags**: [Tag](#tag)[]
* **TimeoutSettings**: [TimeoutSettings](#timeoutsettings)

## Capacity
### Properties
* **DesiredUserSessions**: int (Required)

## CertificateBasedAuthProperties
### Properties
* **CertificateAuthorityArn**: string: The Amazon Resource Name (ARN) of the Amazon Web Services Certificate Manager Private CA resource.
* **Status**: string: The status of the certificate-based authentication properties.

## DefaultWorkspaceCreationProperties
### Properties
* **CustomSecurityGroupId**: string: The identifier of the default security group to apply to WorkSpaces when they are created.
* **DefaultOu**: string: The organizational unit (OU) in the directory for the WorkSpace machine accounts.
* **EnableInternetAccess**: bool: Specifies whether to automatically assign an Elastic public IP address to WorkSpaces in this directory by default.
* **EnableMaintenanceMode**: bool: Specifies whether maintenance mode is enabled for WorkSpaces.
* **InstanceIamRoleArn**: string: Indicates the IAM role ARN of the instance.
* **UserEnabledAsLocalAdministrator**: bool: Specifies whether WorkSpace users are local administrators on their WorkSpaces.

## GlobalAcceleratorForDirectory
### Properties
* **Mode**: string (Required): Indicates if Global Accelerator for directory is enabled or disabled.
* **PreferredProtocol**: string: Indicates the preferred protocol for Global Accelerator.

## IDCConfig
### Properties
* **ApplicationArn**: string: The Amazon Resource Name (ARN) of the application.
* **InstanceArn**: string: The Amazon Resource Name (ARN) of the identity center instance.

## IpRuleItem
### Properties
* **IpRule**: string (Required): The IP address range, in CIDR notation.
* **RuleDesc**: string: The description of the rule.

## MicrosoftEntraConfig
### Properties
* **ApplicationConfigSecretArn**: string: The Amazon Resource Name (ARN) of the application config.
* **TenantId**: string: The identifier of the tenant.

## SamlProperties
### Properties
* **RelayStateParameterName**: string: The relay state parameter name supported by the SAML 2.0 identity provider (IdP).
* **Status**: string: Indicates the status of SAML 2.0 authentication.
* **UserAccessUrl**: string: The SAML 2.0 identity provider (IdP) user access URL.

## SelfservicePermissions
### Properties
* **ChangeComputeType**: string: Specifies whether users can change the compute type (bundle) for their WorkSpace.
* **IncreaseVolumeSize**: string: Specifies whether users can increase the volume size of the drives on their WorkSpace.
* **RebuildWorkspace**: string: Specifies whether users can rebuild the operating system of a WorkSpace to its original state.
* **RestartWorkspace**: string: Specifies whether users can restart their WorkSpace.
* **SwitchRunningMode**: string: Specifies whether users can switch the running mode of their WorkSpace.

## StorageConnector
### Properties
* **ConnectorType**: string (Required): The type of connector used to save user files.
* **Status**: string (Required): Indicates if the storage connector is enabled or disabled.

## StreamingProperties
### Properties
* **GlobalAccelerator**: [GlobalAcceleratorForDirectory](#globalacceleratorfordirectory)
* **StorageConnectors**: [StorageConnector](#storageconnector)[]: Indicates the storage connector used.
* **StreamingExperiencePreferredProtocol**: string: Indicates the type of preferred protocol for the streaming experience.
* **UserSettings**: [UserSetting](#usersetting)[]: Indicates the permission settings associated with the user.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TimeoutSettings
### Properties
* **DisconnectTimeoutInSeconds**: int
* **IdleDisconnectTimeoutInSeconds**: int
* **MaxUserDurationInSeconds**: int

## UserSetting
### Properties
* **Action**: string (Required): Indicates the type of action.
* **MaximumLength**: int: Indicates the maximum character length for the specified user setting.
* **Permission**: string (Required): Indicates if the setting is enabled or disabled.

## WorkspaceAccessProperties
### Properties
* **AccessEndpointConfig**: [AccessEndpointConfig](#accessendpointconfig)
* **DeviceTypeAndroid**: string: Indicates whether users can use Android and Android-compatible Chrome OS devices to access their WorkSpaces.
* **DeviceTypeChromeOs**: string: Indicates whether users can use Chromebooks to access their WorkSpaces.
* **DeviceTypeIos**: string: Indicates whether users can use iOS devices to access their WorkSpaces.
* **DeviceTypeLinux**: string: Indicates whether users can use Linux clients to access their WorkSpaces.
* **DeviceTypeOsx**: string: Indicates whether users can use macOS clients to access their WorkSpaces.
* **DeviceTypeWeb**: string: Indicates whether users can access their WorkSpaces through a web browser.
* **DeviceTypeWindows**: string: Indicates whether users can use Windows clients to access their WorkSpaces.
* **DeviceTypeWorkSpacesThinClient**: string: Indicates whether users can access their WorkSpaces through a WorkSpaces Thin Client.
* **DeviceTypeZeroClient**: string: Indicates whether users can use zero client devices to access their WorkSpaces.

## WorkspaceProperties
### Properties
* **ComputeTypeName**: string
* **RootVolumeSizeGib**: int
* **RunningMode**: string
* **RunningModeAutoStopTimeoutInMinutes**: int
* **UserVolumeSizeGib**: int

