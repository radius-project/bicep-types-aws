# AWS.WorkSpacesWeb @ default

## Resource AWS.WorkSpacesWeb/BrowserSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/BrowserSettingsProperties](#awsworkspaceswebbrowsersettingsproperties) (Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/IdentityProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/IdentityProviderProperties](#awsworkspaceswebidentityproviderproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/IpAccessSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/IpAccessSettingsProperties](#awsworkspaceswebipaccesssettingsproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/NetworkSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/NetworkSettingsProperties](#awsworkspaceswebnetworksettingsproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/Portal@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/PortalProperties](#awsworkspaceswebportalproperties) (Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/TrustStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/TrustStoreProperties](#awsworkspaceswebtruststoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/UserAccessLoggingSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/UserAccessLoggingSettingsProperties](#awsworkspaceswebuseraccessloggingsettingsproperties) (Required, Identifier): properties of the resource

## Resource AWS.WorkSpacesWeb/UserSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/UserSettingsProperties](#awsworkspaceswebusersettingsproperties) (Required, Identifier): properties of the resource

## AWS.WorkSpacesWeb/BrowserSettingsProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap)
* **AssociatedPortalArns**: string[] (ReadOnly)
* **BrowserPolicy**: string
* **BrowserSettingsArn**: string (ReadOnly, Identifier)
* **CustomerManagedKey**: string
* **Tags**: [Tag](#tag)[]

## AWS.WorkSpacesWeb/IdentityProviderProperties
### Properties
* **IdentityProviderArn**: string (ReadOnly, Identifier)
* **IdentityProviderDetails**: [IdentityProviderDetails](#identityproviderdetails) (Required)
* **IdentityProviderName**: string (Required)
* **IdentityProviderType**: string (Required)
* **PortalArn**: string (WriteOnly)

## AWS.WorkSpacesWeb/IpAccessSettingsProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap)
* **AssociatedPortalArns**: string[] (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **CustomerManagedKey**: string
* **Description**: string
* **DisplayName**: string
* **IpAccessSettingsArn**: string (ReadOnly, Identifier)
* **IpRules**: [IpRule](#iprule)[] (Required)
* **Tags**: [Tag](#tag)[]

## AWS.WorkSpacesWeb/NetworkSettingsProperties
### Properties
* **AssociatedPortalArns**: string[] (ReadOnly)
* **NetworkSettingsArn**: string (ReadOnly, Identifier)
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **VpcId**: string (Required)

## AWS.WorkSpacesWeb/PortalProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap)
* **AuthenticationType**: string
* **BrowserSettingsArn**: string
* **BrowserType**: string (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **CustomerManagedKey**: string
* **DisplayName**: string
* **InstanceType**: string
* **IpAccessSettingsArn**: string
* **MaxConcurrentSessions**: int
* **NetworkSettingsArn**: string
* **PortalArn**: string (ReadOnly, Identifier)
* **PortalEndpoint**: string (ReadOnly)
* **PortalStatus**: string (ReadOnly)
* **RendererType**: string (ReadOnly)
* **ServiceProviderSamlMetadata**: string (ReadOnly)
* **StatusReason**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **TrustStoreArn**: string
* **UserAccessLoggingSettingsArn**: string
* **UserSettingsArn**: string

## AWS.WorkSpacesWeb/TrustStoreProperties
### Properties
* **AssociatedPortalArns**: string[] (ReadOnly)
* **CertificateList**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **TrustStoreArn**: string (ReadOnly, Identifier)

## AWS.WorkSpacesWeb/UserAccessLoggingSettingsProperties
### Properties
* **AssociatedPortalArns**: string[] (ReadOnly)
* **KinesisStreamArn**: string (Required): Kinesis stream ARN to which log events are published.
* **Tags**: [Tag](#tag)[]
* **UserAccessLoggingSettingsArn**: string (ReadOnly, Identifier)

## AWS.WorkSpacesWeb/UserSettingsProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap)
* **AssociatedPortalArns**: string[] (ReadOnly)
* **CookieSynchronizationConfiguration**: [CookieSynchronizationConfiguration](#cookiesynchronizationconfiguration)
* **CopyAllowed**: string (Required)
* **CustomerManagedKey**: string
* **DeepLinkAllowed**: string
* **DisconnectTimeoutInMinutes**: int
* **DownloadAllowed**: string (Required)
* **IdleDisconnectTimeoutInMinutes**: int
* **PasteAllowed**: string (Required)
* **PrintAllowed**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UploadAllowed**: string (Required)
* **UserSettingsArn**: string (ReadOnly, Identifier)

## CookieSpecification
### Properties
* **Domain**: string (Required)
* **Name**: string
* **Path**: string

## CookieSynchronizationConfiguration
### Properties
* **Allowlist**: [CookieSpecification](#cookiespecification)[] (Required)
* **Blocklist**: [CookieSpecification](#cookiespecification)[]

## EncryptionContextMap
### Properties

## EncryptionContextMap
### Properties

## EncryptionContextMap
### Properties

## EncryptionContextMap
### Properties

## IdentityProviderDetails
### Properties

## IpRule
### Properties
* **Description**: string
* **IpRange**: string (Required): A single IP address or an IP address range in CIDR notation

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
* **Key**: string (Required)
* **Value**: string (Required)

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
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

