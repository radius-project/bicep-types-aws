# AWS.Synthetics @ default

## Resource AWS.Synthetics/Canary@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Synthetics/CanaryProperties](#awssyntheticscanaryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Synthetics/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Synthetics/GroupProperties](#awssyntheticsgroupproperties) (Required, Identifier): properties of the resource

## ArtifactConfig
### Properties
* **S3Encryption**: [S3Encryption](#s3encryption): Encryption configuration for uploading artifacts to S3

## AWS.Synthetics/CanaryProperties
### Properties
* **ArtifactConfig**: [ArtifactConfig](#artifactconfig): Provide artifact configuration
* **ArtifactS3Location**: string (Required): Provide the s3 bucket output location for test results
* **Code**: [Code](#code) (Required): Provide the canary script source
* **DeleteLambdaResourcesOnCanaryDeletion**: bool (WriteOnly): Deletes associated lambda resources created by Synthetics if set to True. Default is False
* **ExecutionRoleArn**: string (Required): Lambda Execution role used to run your canaries
* **FailureRetentionPeriod**: int: Retention period of failed canary runs represented in number of days
* **Id**: string (ReadOnly): Id of the canary
* **Name**: string (Required, Identifier): Name of the canary.
* **RunConfig**: [RunConfig](#runconfig): Provide canary run configuration
* **RuntimeVersion**: string (Required): Runtime version of Synthetics Library
* **Schedule**: [Schedule](#schedule) (Required): Frequency to run your canaries
* **StartCanaryAfterCreation**: bool (WriteOnly): Runs canary if set to True. Default is False
* **State**: string (ReadOnly): State of the canary
* **SuccessRetentionPeriod**: int: Retention period of successful canary runs represented in number of days
* **Tags**: [Tag](#tag)[]
* **VisualReference**: [VisualReference](#visualreference) (WriteOnly): Visual reference configuration for visual testing
* **VPCConfig**: [VPCConfig](#vpcconfig): Provide VPC Configuration if enabled.

## AWS.Synthetics/GroupProperties
### Properties
* **Id**: string (ReadOnly): Id of the group.
* **Name**: string (Required, Identifier): Name of the group.
* **ResourceArns**: string[]
* **Tags**: [Tag](#tag)[]

## BaseScreenshot
### Properties
* **IgnoreCoordinates**: string[]: List of coordinates of rectangles to be ignored during visual testing
* **ScreenshotName**: string (Required): Name of the screenshot to be used as base reference for visual testing

## Canary_EnvironmentVariables
### Properties

## Code
### Properties
* **Handler**: string (Required)
* **S3Bucket**: string (WriteOnly)
* **S3Key**: string (WriteOnly)
* **S3ObjectVersion**: string (WriteOnly)
* **Script**: string (WriteOnly)
* **SourceLocationArn**: string (ReadOnly)

## RunConfig
### Properties
* **ActiveTracing**: bool: Enable active tracing if set to true
* **EnvironmentVariables**: [Canary_EnvironmentVariables](#canaryenvironmentvariables) (WriteOnly): Environment variable key-value pairs.
* **MemoryInMB**: int: Provide maximum memory available for canary in MB
* **TimeoutInSeconds**: int: Provide maximum canary timeout per run in seconds

## S3Encryption
### Properties
* **EncryptionMode**: string: Encryption mode for encrypting artifacts when uploading to S3. Valid values: SSE_S3 and SSE_KMS.
* **KmsKeyArn**: string: KMS key Arn for encrypting artifacts when uploading to S3. You must specify KMS key Arn for SSE_KMS encryption mode only.

## Schedule
### Properties
* **DurationInSeconds**: string
* **Expression**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## VisualReference
### Properties
* **BaseCanaryRunId**: string (Required): Canary run id to be used as base reference for visual testing
* **BaseScreenshots**: [BaseScreenshot](#basescreenshot)[]: List of screenshots used as base reference for visual testing

## VPCConfig
### Properties
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)
* **VpcId**: string

