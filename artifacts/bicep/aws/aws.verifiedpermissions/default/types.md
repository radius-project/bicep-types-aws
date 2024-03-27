# AWS.VerifiedPermissions @ default

## Resource AWS.VerifiedPermissions/IdentitySource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/IdentitySourceProperties](#awsverifiedpermissionsidentitysourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.VerifiedPermissions/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyProperties](#awsverifiedpermissionspolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.VerifiedPermissions/PolicyStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VerifiedPermissions/PolicyStoreProperties](#awsverifiedpermissionspolicystoreproperties) (Required, Identifier): properties of the resource

## Resource AWS.VerifiedPermissions/PolicyTemplate@default
* **Valid Scope(s)**: Unknown
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
* **PolicyId**: string (ReadOnly, Identifier)
* **PolicyStoreId**: string (Required, Identifier)
* **PolicyType**: string (ReadOnly)

## AWS.VerifiedPermissions/PolicyStoreProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string
* **PolicyStoreId**: string (ReadOnly, Identifier)
* **Schema**: [SchemaDefinition](#schemadefinition)
* **ValidationSettings**: [ValidationSettings](#validationsettings) (Required)

## AWS.VerifiedPermissions/PolicyTemplateProperties
### Properties
* **Description**: string
* **PolicyStoreId**: string (Required, Identifier)
* **PolicyTemplateId**: string (ReadOnly, Identifier)
* **Statement**: string (Required)

## CognitoUserPoolConfiguration
### Properties
* **ClientIds**: string[]
* **UserPoolArn**: string (Required)

## IdentitySourceConfiguration
### Properties
* **CognitoUserPoolConfiguration**: [CognitoUserPoolConfiguration](#cognitouserpoolconfiguration) (Required)

## IdentitySourceDetails
### Properties
* **ClientIds**: string[]
* **DiscoveryUrl**: string
* **OpenIdIssuer**: string
* **UserPoolArn**: string

## PolicyDefinition
### Properties

## SchemaDefinition
### Properties
* **CedarJson**: string

## ValidationSettings
### Properties
* **Mode**: string (Required)

