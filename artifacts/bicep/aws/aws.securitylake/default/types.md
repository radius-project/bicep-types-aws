# AWS.SecurityLake @ default

## Resource AWS.SecurityLake/AwsLogSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityLake/AwsLogSourceProperties](#awssecuritylakeawslogsourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityLake/DataLake@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityLake/DataLakeProperties](#awssecuritylakedatalakeproperties) (Identifier): properties of the resource

## Resource AWS.SecurityLake/Subscriber@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityLake/SubscriberProperties](#awssecuritylakesubscriberproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityLake/SubscriberNotification@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityLake/SubscriberNotificationProperties](#awssecuritylakesubscribernotificationproperties) (Required, Identifier): properties of the resource

## AWS.SecurityLake/AwsLogSourceProperties
### Properties
* **Accounts**: string[]: AWS account where you want to collect logs from.
* **DataLakeArn**: string (Required): The ARN for the data lake.
* **SourceName**: string (Required, Identifier): The name for a AWS source. This must be a Regionally unique value.
* **SourceVersion**: string (Required, Identifier): The version for a AWS source. This must be a Regionally unique value.

## AWS.SecurityLake/DataLakeProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) created by you to provide to the subscriber.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **LifecycleConfiguration**: [LifecycleConfiguration](#lifecycleconfiguration)
* **MetaStoreManagerRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) used to index AWS Glue table partitions that are generated by the ingestion and normalization of AWS log sources and custom sources.
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration)
* **S3BucketArn**: string (ReadOnly): The ARN for the Amazon Security Lake Amazon S3 bucket.
* **Tags**: [Tag](#tag)[]

## AWS.SecurityLake/SubscriberNotificationProperties
### Properties
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration) (Required)
* **SubscriberArn**: string (Required, Identifier): The ARN for the subscriber
* **SubscriberEndpoint**: string (ReadOnly): The endpoint the subscriber should listen to for notifications

## AWS.SecurityLake/SubscriberProperties
### Properties
* **AccessTypes**: string[] (Required)
* **DataLakeArn**: string (Required): The ARN for the data lake.
* **ResourceShareArn**: string (ReadOnly)
* **ResourceShareName**: string (ReadOnly)
* **S3BucketArn**: string (ReadOnly)
* **Sources**: [Source](#source)[] (Required): The supported AWS services from which logs and events are collected.
* **SubscriberArn**: string (ReadOnly, Identifier)
* **SubscriberDescription**: string: The description for your subscriber account in Security Lake.
* **SubscriberIdentity**: [Subscriber_SubscriberIdentity](#subscribersubscriberidentity) (Required): The AWS identity used to access your data.
* **SubscriberName**: string (Required): The name of your Security Lake subscriber account.
* **SubscriberRoleArn**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of objects, one for each tag to associate with the subscriber. For each tag, you must specify both a tag key and a tag value. A tag value cannot be null, but it can be an empty string.

## AwsLogSource
### Properties
* **SourceName**: string: The name for a AWS source. This must be a Regionally unique value.
* **SourceVersion**: string: The version for a AWS source. This must be a Regionally unique value.

## CustomLogSource
### Properties
* **SourceName**: string: The name for a third-party custom source. This must be a Regionally unique value.
* **SourceVersion**: string: The version for a third-party custom source. This must be a Regionally unique value.

## EncryptionConfiguration
### Properties
* **KmsKeyId**: string: The id of KMS encryption key used by Amazon Security Lake to encrypt the Security Lake object.

## Expiration
### Properties
* **Days**: int

## HttpsNotificationConfiguration
### Properties
* **AuthorizationApiKeyName**: string (WriteOnly): The key name for the notification subscription.
* **AuthorizationApiKeyValue**: string (WriteOnly): The key value for the notification subscription.
* **Endpoint**: string (Required, WriteOnly): The subscription endpoint in Security Lake.
* **HttpMethod**: string (WriteOnly): The HTTPS method used for the notification subscription.
* **TargetRoleArn**: string (Required, WriteOnly): The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.

## LifecycleConfiguration
### Properties
* **Expiration**: [Expiration](#expiration)
* **Transitions**: [Transitions](#transitions)[]: Provides data storage transition details of Amazon Security Lake object.

## NotificationConfiguration
### Properties
* **HttpsNotificationConfiguration**: [HttpsNotificationConfiguration](#httpsnotificationconfiguration)
* **SqsNotificationConfiguration**: [SqsNotificationConfiguration](#sqsnotificationconfiguration)

## ReplicationConfiguration
### Properties
* **Regions**: string[]
* **RoleArn**: string: Replication settings for the Amazon S3 buckets. This parameter uses the AWS Identity and Access Management (IAM) role you created that is managed by Security Lake, to ensure the replication setting is correct.

## Source
### Properties
* **AwsLogSource**: [AwsLogSource](#awslogsource)
* **CustomLogSource**: [CustomLogSource](#customlogsource)

## SqsNotificationConfiguration
### Properties

## Subscriber_SubscriberIdentity
### Properties
* **ExternalId**: string (Required): The external ID used to establish trust relationship with the AWS identity.
* **Principal**: string (Required): The AWS identity principal.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 characters in length.

## Tag
### Properties
* **Key**: string (Required): The name of the tag. This is a general label that acts as a category for a more specific tag value (value).
* **Value**: string (Required): The value that is associated with the specified tag key (key). This value acts as a descriptor for the tag key. A tag value cannot be null, but it can be an empty string.

## Transitions
### Properties
* **Days**: int: Number of days before data transitions to a different S3 Storage Class in the Amazon Security Lake object.
* **StorageClass**: string: The range of storage classes that you can choose from based on the data access, resiliency, and cost requirements of your workloads.

