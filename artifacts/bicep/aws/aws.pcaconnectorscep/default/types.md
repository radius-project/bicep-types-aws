# AWS.PCAConnectorSCEP @ default

## Resource AWS.PCAConnectorSCEP/Challenge@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCAConnectorSCEP/ChallengeProperties](#awspcaconnectorscepchallengeproperties) (Required, Identifier): properties of the resource

## Resource AWS.PCAConnectorSCEP/Connector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.PCAConnectorSCEP/ConnectorProperties](#awspcaconnectorscepconnectorproperties) (Required, Identifier): properties of the resource

## AWS.PCAConnectorSCEP/ChallengeProperties
### Properties
* **ChallengeArn**: string (ReadOnly, Identifier)
* **ConnectorArn**: string (Required)
* **Tags**: [Tags](#tags)

## AWS.PCAConnectorSCEP/ConnectorProperties
### Properties
* **CertificateAuthorityArn**: string (Required)
* **ConnectorArn**: string (ReadOnly, Identifier)
* **Endpoint**: string (ReadOnly)
* **MobileDeviceManagement**: [MobileDeviceManagement](#mobiledevicemanagement)
* **OpenIdConfiguration**: [OpenIdConfiguration](#openidconfiguration) (ReadOnly)
* **Tags**: [Tags](#tags)
* **Type**: string (ReadOnly)

## MobileDeviceManagement
### Properties

## OpenIdConfiguration
### Properties
* **Audience**: string
* **Issuer**: string
* **Subject**: string

## Tags
### Properties

## Tags
### Properties

