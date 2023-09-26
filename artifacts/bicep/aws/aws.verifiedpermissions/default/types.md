# AWS.VerifiedPermissions @ default

## Resource AWS.VerifiedPermissions/IdentitySource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/IdentitySourceProperties](#awsverifiedpermissionsidentitysourceproperties) (Required): properties of the resource

## Resource AWS.VerifiedPermissions/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyProperties](#awsverifiedpermissionspolicyproperties) (Required): properties of the resource

## Resource AWS.VerifiedPermissions/PolicyStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyStoreProperties](#awsverifiedpermissionspolicystoreproperties) (Required): properties of the resource

## Resource AWS.VerifiedPermissions/PolicyTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyTemplateProperties](#awsverifiedpermissionspolicytemplateproperties) (Required): properties of the resource

## AWS.VerifiedPermissions/IdentitySourceProperties
### Properties
* **Configuration**: [IdentitySourceConfiguration](#identitysourceconfiguration) (Required)
* **Details**: [IdentitySourceDetails](#identitysourcedetails) (ReadOnly)
* **IdentitySourceId**: string (ReadOnly, Identifier)
* **PolicyStoreId**: string (Identifier)
* **PrincipalEntityType**: string

## IdentitySourceConfiguration
### Properties
* **CognitoUserPoolConfiguration**: [CognitoUserPoolConfiguration](#cognitouserpoolconfiguration) (Required)

## CognitoUserPoolConfiguration
### Properties
* **ClientIds**: string[]
* **UserPoolArn**: string (Required)

## IdentitySourceDetails
### Properties
* **ClientIds**: string[]
* **DiscoveryUrl**: string
* **OpenIdIssuer**: string
* **UserPoolArn**: string

## AWS.VerifiedPermissions/PolicyProperties
### Properties
* **Definition**: [PolicyDefinition](#policydefinition) (Required)
* **PolicyId**: string (ReadOnly, Identifier)
* **PolicyStoreId**: string (Identifier)
* **PolicyType**: string (ReadOnly)

## PolicyDefinition
### Properties

## AWS.VerifiedPermissions/PolicyStoreProperties
### Properties
* **Arn**: string (ReadOnly)
* **PolicyStoreId**: string (ReadOnly, Identifier)
* **Schema**: [SchemaDefinition](#schemadefinition)
* **ValidationSettings**: [ValidationSettings](#validationsettings) (Required)

## SchemaDefinition
### Properties
* **CedarJson**: string

## ValidationSettings
### Properties
* **Mode**: string (Required)

## AWS.VerifiedPermissions/PolicyTemplateProperties
### Properties
* **Description**: string
* **PolicyStoreId**: string (Identifier)
* **PolicyTemplateId**: string (ReadOnly, Identifier)
* **Statement**: string (Required)

