# AWS.AppSync @ default

## Resource AWS.AppSync/DomainName@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppSync/DomainNameProperties](#awsappsyncdomainnameproperties) (Required): properties of the resource

## Resource AWS.AppSync/DomainNameApiAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppSync/DomainNameApiAssociationProperties](#awsappsyncdomainnameapiassociationproperties) (Required): properties of the resource

## Resource AWS.AppSync/SourceApiAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AppSync/SourceApiAssociationProperties](#awsappsyncsourceapiassociationproperties): properties of the resource

## AWS.AppSync/DomainNameProperties
### Properties
* **AppSyncDomainName**: string (ReadOnly)
* **CertificateArn**: string (Required)
* **Description**: string
* **DomainName**: string (Required, Identifier)
* **HostedZoneId**: string (ReadOnly)

## AWS.AppSync/DomainNameApiAssociationProperties
### Properties
* **ApiAssociationIdentifier**: string (ReadOnly, Identifier)
* **ApiId**: string (Required)
* **DomainName**: string (Required)

## AWS.AppSync/SourceApiAssociationProperties
### Properties
* **AssociationArn**: string (ReadOnly, Identifier): ARN of the SourceApiAssociation.
* **AssociationId**: string (ReadOnly): Id of the SourceApiAssociation.
* **Description**: string: Description of the SourceApiAssociation.
* **LastSuccessfulMergeDate**: string (ReadOnly): Date of last schema successful merge.
* **MergedApiArn**: string (ReadOnly): ARN of the Merged API in the association.
* **MergedApiId**: string (ReadOnly): GraphQLApiId of the Merged API in the association.
* **MergedApiIdentifier**: string (WriteOnly): Identifier of the Merged GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN
* **SourceApiArn**: string (ReadOnly): ARN of the source API in the association.
* **SourceApiAssociationConfig**: [SourceApiAssociationConfig](#sourceapiassociationconfig): Customized configuration for SourceApiAssociation.
* **SourceApiAssociationStatus**: string (ReadOnly): Current status of SourceApiAssociation.
* **SourceApiAssociationStatusDetail**: string (ReadOnly): Current SourceApiAssociation status details.
* **SourceApiId**: string (ReadOnly): GraphQLApiId of the source API in the association.
* **SourceApiIdentifier**: string (WriteOnly): Identifier of the Source GraphQLApi to associate. It could be either GraphQLApi ApiId or ARN

## SourceApiAssociationConfig
### Properties
* **MergeType**: string: Configuration of the merged behavior for the association. For example when it could be auto or has to be manual.

