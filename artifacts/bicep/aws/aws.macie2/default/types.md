# AWS.Macie2 @ default

## Resource AWS.Macie2/ClassificationJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Macie2/ClassificationJobProperties](#awsmacie2classificationjobproperties) (Required, Identifier): properties of the resource

## AWS.Macie2/ClassificationJobProperties
### Properties
* **CreatedAt**: string (ReadOnly): The date and time when the job was created.
* **Description**: string: A custom description of the job.
* **InitialRun**: bool: Whether the job analyzes all existing eligible objects immediately after being created.
* **JobArn**: string (Identifier): The Amazon Resource Name (ARN) of the job.
* **JobId**: string (ReadOnly): The unique identifier for the job.
* **JobStatus**: string (ReadOnly): The current status of the job.
* **JobType**: string (Required): The schedule for running the job.
* **ManagedDataIdentifierSelector**: string: The selection type for managed data identifiers.
* **Name**: string (Required): A custom name for the job.
* **S3JobDefinition**: [S3JobDefinition](#s3jobdefinition) (Required)
* **SamplingPercentage**: int: The sampling depth as a percentage.
* **ScheduleFrequency**: [JobScheduleFrequency](#jobschedulefrequency)
* **Tags**: [Tag](#tag)[]: The tags associated with the job.

## ClassificationJob_Scoping
### Properties
### Additional Properties
* **Additional Properties Type**: any

## JobScheduleFrequency
### Properties
* **WeeklySchedule**: [WeeklySchedule](#weeklyschedule)

## S3BucketDefinitionForJob
### Properties
* **AccountId**: string (Required): The account ID for the account that owns the buckets.
* **Buckets**: string[] (Required): An array of bucket names.

## S3JobDefinition
### Properties
* **BucketDefinitions**: [S3BucketDefinitionForJob](#s3bucketdefinitionforjob)[]
* **Scoping**: [ClassificationJob_Scoping](#classificationjobscoping) (ReadOnly): Property- and tag-based conditions for object scoping.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## WeeklySchedule
### Properties
* **DayOfWeek**: string

