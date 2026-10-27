# AWS.SSMGuiConnect @ default

## Resource AWS.SSMGuiConnect/Preferences@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMGuiConnect/PreferencesProperties](#awsssmguiconnectpreferencesproperties) (Identifier): properties of the resource

## AWS.SSMGuiConnect/PreferencesProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier): The AWS Account Id that the preference is associated with, used as the unique identifier for this resource.
* **ConnectionRecordingPreferences**: [Preferences_ConnectionRecordingPreferences](#preferencesconnectionrecordingpreferences): The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. This includes details such as which S3 bucket recordings are stored in.

## Preferences_ConnectionRecordingPreferences
### Properties
* **KMSKeyArn**: string (Required)
* **RecordingDestinations**: [RecordingDestinations](#recordingdestinations) (Required)

## RecordingDestinations
### Properties
* **S3Buckets**: [S3Bucket](#s3bucket)[] (Required)

## S3Bucket
### Properties
* **BucketName**: string (Required)
* **BucketOwner**: string (Required)

