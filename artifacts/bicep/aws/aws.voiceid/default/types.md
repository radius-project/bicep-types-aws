# AWS.VoiceID @ default

## Resource AWS.VoiceID/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.VoiceID/DomainProperties](#awsvoiceiddomainproperties) (Required, Identifier): properties of the resource

## AWS.VoiceID/DomainProperties
### Properties
* **Description**: string
* **DomainId**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration) (Required)
* **Tags**: [Tag](#tag)[]

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

