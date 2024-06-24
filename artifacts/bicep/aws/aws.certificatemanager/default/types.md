# AWS.CertificateManager @ default

## Resource AWS.CertificateManager/Account@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/AccountProperties](#awscertificatemanageraccountproperties) (Required, Identifier): properties of the resource

## AWS.CertificateManager/AccountProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)
* **ExpiryEventsConfiguration**: [ExpiryEventsConfiguration](#expiryeventsconfiguration) (Required)

## ExpiryEventsConfiguration
### Properties
* **DaysBeforeExpiry**: int

