# AWS.MWAAServerless @ default

## Resource AWS.MWAAServerless/Workflow@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MWAAServerless/WorkflowProperties](#awsmwaaserverlessworkflowproperties) (Required, Identifier): properties of the resource

## AWS.MWAAServerless/WorkflowProperties
### Properties
* **Code**: [Code](#code)
* **CodeSnapshottedAt**: string (ReadOnly)
* **CreatedAt**: string (ReadOnly)
* **DefinitionS3Location**: [S3Location](#s3location) (Required)
* **Description**: string
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string
* **NetworkConfiguration**: [NetworkConfiguration](#networkconfiguration)
* **RoleArn**: string (Required)
* **ScheduleConfiguration**: [ScheduleConfiguration](#scheduleconfiguration) (ReadOnly)
* **Tags**: [Tags](#tags)
* **TriggerMode**: string
* **WorkflowArn**: string (ReadOnly, Identifier)
* **WorkflowStatus**: string (ReadOnly)
* **WorkflowVersion**: string (ReadOnly)

## Code
### Properties
* **S3Location**: [CodeS3Location](#codes3location)

## CodeS3Location
### Properties
* **Bucket**: string (Required)
* **ObjectKey**: string (Required)
* **VersionId**: string

## EncryptionConfiguration
### Properties
* **KmsKeyId**: string
* **Type**: string (Required)

## LoggingConfiguration
### Properties
* **LogGroupName**: string (Required)

## NetworkConfiguration
### Properties
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## S3Location
### Properties
* **Bucket**: string (Required)
* **ObjectKey**: string (Required)
* **VersionId**: string

## ScheduleConfiguration
### Properties
* **CronExpression**: string

## Tags
### Properties

