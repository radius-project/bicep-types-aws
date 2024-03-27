# AWS.CodeArtifact @ default

## Resource AWS.CodeArtifact/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeArtifact/DomainProperties](#awscodeartifactdomainproperties) (Required, Identifier): properties of the resource

## Resource AWS.CodeArtifact/Repository@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeArtifact/RepositoryProperties](#awscodeartifactrepositoryproperties) (Required, Identifier): properties of the resource

## AWS.CodeArtifact/DomainProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the domain.
* **DomainName**: string (Required): The name of the domain.
* **EncryptionKey**: string (ReadOnly): The ARN of an AWS Key Management Service (AWS KMS) key associated with a domain.
* **Name**: string (ReadOnly): The name of the domain. This field is used for GetAtt
* **Owner**: string (ReadOnly): The 12-digit account ID of the AWS account that owns the domain. This field is used for GetAtt
* **PermissionsPolicyDocument**: [Domain_PermissionsPolicyDocument](#domainpermissionspolicydocument): The access control resource policy on the provided domain.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.CodeArtifact/RepositoryProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the repository.
* **Description**: string: A text description of the repository.
* **DomainName**: string (Required): The name of the domain that contains the repository.
* **DomainOwner**: string (ReadOnly): The 12-digit account ID of the AWS account that owns the domain.
* **ExternalConnections**: string[]: A list of external connections associated with the repository.
* **Name**: string (ReadOnly): The name of the repository. This is used for GetAtt
* **PermissionsPolicyDocument**: [Repository_PermissionsPolicyDocument](#repositorypermissionspolicydocument): The access control resource policy on the provided repository.
* **RepositoryName**: string (Required): The name of the repository.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Upstreams**: string[]: A list of upstream repositories associated with the repository.

## Domain_PermissionsPolicyDocument
### Properties

## Repository_PermissionsPolicyDocument
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

