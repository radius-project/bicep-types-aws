# AWS.RolesAnywhere @ default

## Resource AWS.RolesAnywhere/CRL@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RolesAnywhere/CRLProperties](#awsrolesanywherecrlproperties): properties of the resource

## Resource AWS.RolesAnywhere/Profile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RolesAnywhere/ProfileProperties](#awsrolesanywhereprofileproperties): properties of the resource

## Resource AWS.RolesAnywhere/TrustAnchor@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RolesAnywhere/TrustAnchorProperties](#awsrolesanywheretrustanchorproperties): properties of the resource

## AWS.RolesAnywhere/CRLProperties
### Properties
* **CrlData**: string
* **CrlId**: string (ReadOnly)
* **Enabled**: bool
* **Name**: string
* **Tags**: [Tag](#tag)[]
* **TrustAnchorArn**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.RolesAnywhere/ProfileProperties
### Properties
* **DurationSeconds**: int
* **Enabled**: bool
* **ManagedPolicyArns**: string[]
* **Name**: string
* **ProfileArn**: string (ReadOnly)
* **ProfileId**: string (ReadOnly)
* **RequireInstanceProperties**: bool
* **RoleArns**: string[]
* **SessionPolicy**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.RolesAnywhere/TrustAnchorProperties
### Properties
* **Enabled**: bool
* **Name**: string
* **Source**: [Source](#source)
* **Tags**: [Tag](#tag)[]
* **TrustAnchorArn**: string (ReadOnly)
* **TrustAnchorId**: string (ReadOnly)

## Source
### Properties
* **SourceData**: [SourceData](#sourcedata)
* **SourceType**: [TrustAnchorType](#trustanchortype)

## SourceData
### Properties

## TrustAnchorType
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

