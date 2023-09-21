# AWS.WorkSpacesWeb @ default

## Resource AWS.WorkSpacesWeb/BrowserSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/BrowserSettingsProperties](#awsworkspaceswebbrowsersettingsproperties): properties of the resource

## Resource AWS.WorkSpacesWeb/IdentityProvider@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/IdentityProviderProperties](#awsworkspaceswebidentityproviderproperties) (Required): properties of the resource

## Resource AWS.WorkSpacesWeb/IpAccessSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/IpAccessSettingsProperties](#awsworkspaceswebipaccesssettingsproperties) (Required): properties of the resource

## Resource AWS.WorkSpacesWeb/NetworkSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/NetworkSettingsProperties](#awsworkspaceswebnetworksettingsproperties) (Required): properties of the resource

## Resource AWS.WorkSpacesWeb/Portal@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/PortalProperties](#awsworkspaceswebportalproperties): properties of the resource

## Resource AWS.WorkSpacesWeb/TrustStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/TrustStoreProperties](#awsworkspaceswebtruststoreproperties) (Required): properties of the resource

## Resource AWS.WorkSpacesWeb/UserAccessLoggingSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/UserAccessLoggingSettingsProperties](#awsworkspaceswebuseraccessloggingsettingsproperties) (Required): properties of the resource

## Resource AWS.WorkSpacesWeb/UserSettings@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpacesWeb/UserSettingsProperties](#awsworkspaceswebusersettingsproperties) (Required): properties of the resource

## AWS.WorkSpacesWeb/BrowserSettingsProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap) (WriteOnly)
* **AssociatedPortalArns**: string[] (ReadOnly)
* **BrowserPolicy**: string
* **BrowserSettingsArn**: string (ReadOnly, Identifier)
* **CustomerManagedKey**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]

## EncryptionContextMap
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.WorkSpacesWeb/IdentityProviderProperties
### Properties
* **IdentityProviderArn**: string (ReadOnly, Identifier)
* **IdentityProviderDetails**: [IdentityProviderDetails](#identityproviderdetails) (Required)
* **IdentityProviderName**: string (Required)
* **IdentityProviderType**: string (Required)
* **PortalArn**: string (WriteOnly)

## IdentityProviderDetails
### Properties

## AWS.WorkSpacesWeb/IpAccessSettingsProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap) (WriteOnly)
* **AssociatedPortalArns**: string[] (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **CustomerManagedKey**: string (WriteOnly)
* **Description**: string
* **DisplayName**: string
* **IpAccessSettingsArn**: string (ReadOnly, Identifier)
* **IpRules**: [IpRule](#iprule)[] (Required)
* **Tags**: [Tag](#tag)[]

## EncryptionContextMap
### Properties

## IpRule
### Properties
* **Description**: string
* **IpRange**: string (Required): A single IP address or an IP address range in CIDR notation

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.WorkSpacesWeb/NetworkSettingsProperties
### Properties
* **AssociatedPortalArns**: string[] (ReadOnly)
* **NetworkSettingsArn**: string (ReadOnly, Identifier)
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **VpcId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.WorkSpacesWeb/PortalProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap) (WriteOnly)
* **AuthenticationType**: string
* **BrowserSettingsArn**: string
* **BrowserType**: string (ReadOnly)
* **CreationDate**: string (ReadOnly)
* **CustomerManagedKey**: string (WriteOnly)
* **DisplayName**: string
* **IpAccessSettingsArn**: string
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

## EncryptionContextMap
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.WorkSpacesWeb/TrustStoreProperties
### Properties
* **AssociatedPortalArns**: string[] (ReadOnly)
* **CertificateList**: string[] (Required)
* **Tags**: [Tag](#tag)[]
* **TrustStoreArn**: string (ReadOnly, Identifier)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.WorkSpacesWeb/UserAccessLoggingSettingsProperties
### Properties
* **AssociatedPortalArns**: string[] (ReadOnly)
* **KinesisStreamArn**: string (Required): Kinesis stream ARN to which log events are published.
* **Tags**: [Tag](#tag)[]
* **UserAccessLoggingSettingsArn**: string (ReadOnly, Identifier)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.WorkSpacesWeb/UserSettingsProperties
### Properties
* **AdditionalEncryptionContext**: [EncryptionContextMap](#encryptioncontextmap) (WriteOnly)
* **AssociatedPortalArns**: string[] (ReadOnly)
* **CookieSynchronizationConfiguration**: [CookieSynchronizationConfiguration](#cookiesynchronizationconfiguration)
* **CopyAllowed**: string (Required)
* **CustomerManagedKey**: string (WriteOnly)
* **DisconnectTimeoutInMinutes**: int
* **DownloadAllowed**: string (Required)
* **IdleDisconnectTimeoutInMinutes**: int
* **PasteAllowed**: string (Required)
* **PrintAllowed**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UploadAllowed**: string (Required)
* **UserSettingsArn**: string (ReadOnly, Identifier)

## EncryptionContextMap
### Properties

## CookieSynchronizationConfiguration
### Properties
* **Allowlist**: [CookieSpecification](#cookiespecification)[] (Required)
* **Blocklist**: [CookieSpecification](#cookiespecification)[]

## CookieSpecification
### Properties
* **Domain**: string (Required)
* **Name**: string
* **Path**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

