# AWS.HealthAgent @ default

## Resource AWS.HealthAgent/Domain@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.HealthAgent/DomainProperties](#awshealthagentdomainproperties) (Required, Identifier): properties of the resource

## Resource AWS.HealthAgent/Subscription@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.HealthAgent/SubscriptionProperties](#awshealthagentsubscriptionproperties) (Required, Identifier): properties of the resource

## AWS.HealthAgent/DomainProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Domain.
* **CreatedAt**: string (ReadOnly): The timestamp when the Domain was created.
* **DomainId**: string (ReadOnly): The unique identifier of the Domain.
* **EncryptionContext**: [Domain_EncryptionContext](#domainencryptioncontext) (ReadOnly): Encryption context for the Domain.
* **Name**: string (Required): The name of the Domain.
* **Status**: string (ReadOnly): The status of the Domain.
* **Tags**: [Domain_Tags](#domaintags)[]: Tags associated with the Domain.

## AWS.HealthAgent/SubscriptionProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the Subscription.
* **CreatedAt**: string (ReadOnly): The time at which the Subscription was created.
* **DomainId**: string (Required): The unique identifier of the parent Domain.
* **LastUpdatedAt**: string (ReadOnly): The time at which the Subscription was last updated.
* **Status**: string (ReadOnly): The current status of the Subscription.
* **SubscriptionId**: string (ReadOnly): The unique identifier of the Subscription.

## Domain_EncryptionContext
### Properties
* **EncryptionType**: string (Required): The type of encryption key used.

## Domain_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

