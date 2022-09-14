# AWS.OpsWorksCM @ default

## Resource AWS.OpsWorksCM/Server@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.OpsWorksCM/ServerProperties](#awsopsworkscmserverproperties) (Required): properties of the resource

## AWS.OpsWorksCM/ServerProperties
### Properties
* **Arn**: string (ReadOnly)
* **AssociatePublicIpAddress**: bool
* **BackupId**: string
* **BackupRetentionCount**: int
* **CustomCertificate**: string
* **CustomDomain**: string
* **CustomPrivateKey**: string (WriteOnly)
* **DisableAutomatedBackup**: bool
* **Endpoint**: string (ReadOnly)
* **Engine**: string
* **EngineAttributes**: [EngineAttribute](#engineattribute)[] (WriteOnly)
* **EngineModel**: string
* **EngineVersion**: string
* **Id**: string (ReadOnly)
* **InstanceProfileArn**: string (Required)
* **InstanceType**: string (Required)
* **KeyPair**: string
* **PreferredBackupWindow**: string
* **PreferredMaintenanceWindow**: string
* **SecurityGroupIds**: string[]
* **ServerName**: string
* **ServiceRoleArn**: string (Required)
* **SubnetIds**: string[]
* **Tags**: [Tag](#tag)[]

## EngineAttribute
### Properties
* **Name**: string
* **Value**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

