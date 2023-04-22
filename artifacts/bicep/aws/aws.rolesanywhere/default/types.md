# AWS.RolesAnywhere @ default

## Resource AWS.RolesAnywhere/CRL@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/CRLProperties](#awsrolesanywherecrlproperties) (Required): properties of the resource

## Resource AWS.RolesAnywhere/Profile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/ProfileProperties](#awsrolesanywhereprofileproperties) (Required): properties of the resource

## Resource AWS.RolesAnywhere/TrustAnchor@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RolesAnywhere/TrustAnchorProperties](#awsrolesanywheretrustanchorproperties) (Required): properties of the resource

## AWS.RolesAnywhere/CRLProperties
### Properties
* **CrlData**: string (Required)
* **CrlId**: string (ReadOnly, Identifier)
* **Enabled**: bool
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **TrustAnchorArn**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.RolesAnywhere/ProfileProperties
### Properties
* **DurationSeconds**: int
* **Enabled**: bool
* **ManagedPolicyArns**: string[]
* **Name**: string (Required)
* **ProfileArn**: string (ReadOnly)
* **ProfileId**: string (ReadOnly, Identifier)
* **RequireInstanceProperties**: bool
* **RoleArns**: string[] (Required)
* **SessionPolicy**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.RolesAnywhere/TrustAnchorProperties
### Properties
* **Enabled**: bool
* **Name**: string (Required)
* **Source**: [Source](#source) (Required)
* **Tags**: [Tag](#tag)[]
* **TrustAnchorArn**: string (ReadOnly)
* **TrustAnchorId**: string (ReadOnly, Identifier)

## Source
### Properties
* **SourceData**: [TrustAnchor_SourceData](#trustanchorsourcedata)
* **SourceType**: string

## TrustAnchor_SourceData
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

