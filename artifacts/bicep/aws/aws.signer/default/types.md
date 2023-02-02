# AWS.Signer @ default

## Resource AWS.Signer/SigningProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Signer/SigningProfileProperties](#awssignersigningprofileproperties) (Required): properties of the resource

## AWS.Signer/SigningProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the specified signing profile.
* **PlatformId**: string (Required): The ID of the target signing platform.
* **ProfileName**: string (ReadOnly): A name for the signing profile. AWS CloudFormation generates a unique physical ID and uses that ID for the signing profile name. 
* **ProfileVersion**: string (ReadOnly): A version for the signing profile. AWS Signer generates a unique version for each profile of the same profile name.
* **ProfileVersionArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified signing profile version.
* **SignatureValidityPeriod**: [SignatureValidityPeriod](#signaturevalidityperiod): Signature validity period of the profile.
* **Tags**: [Tag](#tag)[]: A list of tags associated with the signing profile.

## SignatureValidityPeriod
### Properties
* **Type**: string
* **Value**: int

## Tag
### Properties
* **Key**: string
* **Value**: string

