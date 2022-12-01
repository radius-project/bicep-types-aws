# AWS.CertificateManager @ default

## Resource AWS.CertificateManager/Account@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.CertificateManager/AccountProperties](#awscertificatemanageraccountproperties) (Required): properties of the resource

## AWS.CertificateManager/AccountProperties
### Properties
* **AccountId**: [AccountId](#accountid) (ReadOnly, Identifier)
* **ExpiryEventsConfiguration**: [ExpiryEventsConfiguration](#expiryeventsconfiguration) (Required)

## AccountId
### Properties

## ExpiryEventsConfiguration
### Properties
* **DaysBeforeExpiry**: int

