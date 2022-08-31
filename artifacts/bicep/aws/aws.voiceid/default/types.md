# AWS.VoiceID @ default

## Resource AWS.VoiceID/Domain@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.VoiceID/DomainProperties](#awsvoiceiddomainproperties): properties of the resource

## AWS.VoiceID/DomainProperties
### Properties
* **Description**: string (WriteOnly)
* **DomainId**: string (ReadOnly)
* **Name**: string (WriteOnly)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration) (WriteOnly)
* **Tags**: [Tag](#tag)[]

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

