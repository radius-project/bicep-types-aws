# AWS.AppSync @ default

## Resource AWS.AppSync/DomainName@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppSync/DomainNameProperties](#awsappsyncdomainnameproperties): properties of the resource

## Resource AWS.AppSync/DomainNameApiAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppSync/DomainNameApiAssociationProperties](#awsappsyncdomainnameapiassociationproperties): properties of the resource

## AWS.AppSync/DomainNameProperties
### Properties
* **AppSyncDomainName**: string (ReadOnly)
* **CertificateArn**: string
* **Description**: string
* **DomainName**: string (ReadOnly)
* **HostedZoneId**: string (ReadOnly)

## AWS.AppSync/DomainNameApiAssociationProperties
### Properties
* **ApiAssociationIdentifier**: string (ReadOnly)
* **ApiId**: string
* **DomainName**: string

