# AWS.AppSync @ default

## Resource AWS.AppSync/DomainName@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppSync/DomainNameProperties](#awsappsyncdomainnameproperties) (Required): properties of the resource

## Resource AWS.AppSync/DomainNameApiAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.AppSync/DomainNameApiAssociationProperties](#awsappsyncdomainnameapiassociationproperties) (Required): properties of the resource

## AWS.AppSync/DomainNameProperties
### Properties
* **AppSyncDomainName**: string (ReadOnly)
* **CertificateArn**: string (Required)
* **Description**: string
* **DomainName**: string (Required, ReadOnly)
* **HostedZoneId**: string (ReadOnly)

## AWS.AppSync/DomainNameApiAssociationProperties
### Properties
* **ApiAssociationIdentifier**: string (ReadOnly)
* **ApiId**: string (Required)
* **DomainName**: string (Required)

