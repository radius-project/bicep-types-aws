# AWS.PCAConnectorAD @ default

## Resource AWS.PCAConnectorAD/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCAConnectorAD/ConnectorProperties](#awspcaconnectoradconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.PCAConnectorAD/DirectoryRegistration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCAConnectorAD/DirectoryRegistrationProperties](#awspcaconnectoraddirectoryregistrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.PCAConnectorAD/Template@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCAConnectorAD/TemplateProperties](#awspcaconnectoradtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.PCAConnectorAD/TemplateGroupAccessControlEntry@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCAConnectorAD/TemplateGroupAccessControlEntryProperties](#awspcaconnectoradtemplategroupaccesscontrolentryproperties) (Required, Identifier): properties of the resource

## AccessRights
### Properties
* **AutoEnroll**: string
* **Enroll**: string

## AWS.PCAConnectorAD/ConnectorProperties
### Properties
* **CertificateAuthorityArn**: string (Required, WriteOnly)
* **ConnectorArn**: string (ReadOnly, Identifier)
* **DirectoryId**: string (Required, WriteOnly)
* **Tags**: [Tags](#tags) (WriteOnly)
* **VpcInformation**: [VpcInformation](#vpcinformation) (Required, WriteOnly)

## AWS.PCAConnectorAD/DirectoryRegistrationProperties
### Properties
* **DirectoryId**: string (Required, WriteOnly)
* **DirectoryRegistrationArn**: string (ReadOnly, Identifier)
* **Tags**: [Tags](#tags) (WriteOnly)

## AWS.PCAConnectorAD/TemplateGroupAccessControlEntryProperties
### Properties
* **AccessRights**: [AccessRights](#accessrights) (Required, WriteOnly)
* **GroupDisplayName**: string (Required, WriteOnly)
* **GroupSecurityIdentifier**: string (Identifier)
* **TemplateArn**: string (Identifier)

## AWS.PCAConnectorAD/TemplateProperties
### Properties
* **ConnectorArn**: string (Required, WriteOnly)
* **Definition**: [TemplateDefinition](#templatedefinition) (Required, WriteOnly)
* **Name**: string (Required, WriteOnly)
* **ReenrollAllCertificateHolders**: bool (WriteOnly)
* **Tags**: [Tags](#tags) (WriteOnly)
* **TemplateArn**: string (ReadOnly, Identifier)

## Tags
### Properties

## Tags
### Properties

## Tags
### Properties

## TemplateDefinition
### Properties

## VpcInformation
### Properties
* **SecurityGroupIds**: string[] (Required)

