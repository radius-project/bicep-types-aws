# AWS.OpsWorksCM @ default

## Resource AWS.OpsWorksCM/Server@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpsWorksCM/ServerProperties](#awsopsworkscmserverproperties) (Required): properties of the resource

## AWS.OpsWorksCM/ServerProperties
### Properties
* **Arn**: string (ReadOnly)
* **AssociatePublicIpAddress**: bool
* **BackupId**: string (WriteOnly)
* **BackupRetentionCount**: int
* **CustomCertificate**: string (WriteOnly)
* **CustomDomain**: string (WriteOnly)
* **CustomPrivateKey**: string (WriteOnly)
* **DisableAutomatedBackup**: bool
* **Endpoint**: string (ReadOnly)
* **Engine**: string
* **EngineAttributes**: [EngineAttribute](#engineattribute)[] (WriteOnly)
* **EngineModel**: string
* **EngineVersion**: string (WriteOnly)
* **InstanceProfileArn**: string (Required)
* **InstanceType**: string (Required)
* **KeyPair**: string (WriteOnly)
* **PreferredBackupWindow**: string
* **PreferredMaintenanceWindow**: string
* **SecurityGroupIds**: string[]
* **ServerName**: string (ReadOnly, Identifier)
* **ServiceRoleArn**: string (Required)
* **SubnetIds**: string[]
* **Tags**: [Tag](#tag)[] (WriteOnly)

## EngineAttribute
### Properties
* **Name**: string
* **Value**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

