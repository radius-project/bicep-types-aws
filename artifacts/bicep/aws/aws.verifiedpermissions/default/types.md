# AWS.VerifiedPermissions @ default

## Resource AWS.VerifiedPermissions/IdentitySource@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/IdentitySourceProperties](#awsverifiedpermissionsidentitysourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.VerifiedPermissions/Policy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyProperties](#awsverifiedpermissionspolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.VerifiedPermissions/PolicyStore@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyStoreProperties](#awsverifiedpermissionspolicystoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.VerifiedPermissions/PolicyTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyTemplateProperties](#awsverifiedpermissionspolicytemplateproperties) (Required, Identifier): properties of the resource

## AWS.VerifiedPermissions/IdentitySourceProperties
### Properties
* **Configuration**: [IdentitySourceConfiguration](#identitysourceconfiguration) (Required)
* **Details**: [IdentitySourceDetails](#identitysourcedetails) (ReadOnly)
* **IdentitySourceId**: string (ReadOnly, Identifier)
* **PolicyStoreId**: string (Required, Identifier)
* **PrincipalEntityType**: string

## AWS.VerifiedPermissions/PolicyProperties
### Properties
* **Definition**: [PolicyDefinition](#policydefinition) (Required)
* **Name**: string
* **PolicyId**: string (ReadOnly, Identifier)
* **PolicyStoreId**: string (Required, Identifier)
* **PolicyType**: string (ReadOnly)

## AWS.VerifiedPermissions/PolicyStoreProperties
### Properties
* **Arn**: string (ReadOnly)
* **DeletionProtection**: [DeletionProtection](#deletionprotection)
* **Description**: string
* **EncryptionSettings**: [EncryptionSettings](#encryptionsettings) (WriteOnly)
* **EncryptionState**: [PolicyStore_EncryptionState](#policystoreencryptionstate) (ReadOnly)
* **PolicyStoreId**: string (ReadOnly, Identifier)
* **Schema**: [SchemaDefinition](#schemadefinition)
* **Tags**: [Tag](#tag)[]: The tags to add to the policy store
* **ValidationSettings**: [ValidationSettings](#validationsettings) (Required)

## AWS.VerifiedPermissions/PolicyTemplateProperties
### Properties
* **Description**: string
* **Name**: string
* **PolicyStoreId**: string (Required, Identifier)
* **PolicyTemplateId**: string (ReadOnly, Identifier)
* **Statement**: string (Required)

## DeletionProtection
### Properties
* **Mode**: string (Required)

## EncryptionSettings
### Properties

## IdentitySourceConfiguration
### Properties

## IdentitySourceDetails
### Properties
* **ClientIds**: string[]
* **DiscoveryUrl**: string
* **OpenIdIssuer**: string
* **UserPoolArn**: string

## PolicyDefinition
### Properties

## PolicyStore_EncryptionState
### Properties

## SchemaDefinition
### Properties
* **CedarJson**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ValidationSettings
### Properties
* **Mode**: string (Required)

