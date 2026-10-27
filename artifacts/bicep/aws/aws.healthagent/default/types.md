# AWS.HealthAgent @ default

## Resource AWS.HealthAgent/Domain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.HealthAgent/DomainProperties](#awshealthagentdomainproperties) (Required, Identifier): properties of the resource

## AWS.HealthAgent/DomainProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Domain.
* **CreatedAt**: string (ReadOnly): The timestamp when the Domain was created.
* **DomainId**: string (ReadOnly): The unique identifier of the Domain.
* **EncryptionContext**: [Domain_EncryptionContext](#domainencryptioncontext) (ReadOnly): Encryption context for the Domain.
* **Name**: string (Required): The name of the Domain.
* **Status**: string (ReadOnly): The status of the Domain.
* **Tags**: [Domain_Tags](#domaintags)[]: Tags associated with the Domain.

## Domain_EncryptionContext
### Properties
* **EncryptionType**: string (Required): The type of encryption key used.

## Domain_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

