# AWS.CloudTrail @ default

## Resource AWS.CloudTrail/EventDataStore@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudTrail/EventDataStoreProperties](#awscloudtraileventdatastoreproperties): properties of the resource

## Resource AWS.CloudTrail/Trail@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudTrail/TrailProperties](#awscloudtrailtrailproperties): properties of the resource

## AWS.CloudTrail/EventDataStoreProperties
### Properties
* **AdvancedEventSelectors**: [AdvancedEventSelector](#advancedeventselector)[]: The advanced event selectors that were used to select events for the data store.
* **CreatedTimestamp**: [Timestamp](#timestamp) (ReadOnly): The timestamp of the event data store's creation.
* **EventDataStoreArn**: string (ReadOnly): The ARN of the event data store.
* **MultiRegionEnabled**: bool: Indicates whether the event data store includes events from all regions, or only from the region in which it was created.
* **Name**: string: The name of the event data store.
* **OrganizationEnabled**: bool: Indicates that an event data store is collecting logged events for an organization.
* **RetentionPeriod**: int: The retention period, in days.
* **Status**: string (ReadOnly): The status of an event data store. Values are ENABLED and PENDING_DELETION.
* **Tags**: [Tag](#tag)[]
* **TerminationProtectionEnabled**: bool: Indicates whether the event data store is protected from termination.
* **UpdatedTimestamp**: [Timestamp](#timestamp) (ReadOnly): The timestamp showing when an event data store was updated, if applicable. UpdatedTimestamp is always either the same or newer than the time shown in CreatedTimestamp.

## AdvancedEventSelector
### Properties
* **FieldSelectors**: [AdvancedFieldSelector](#advancedfieldselector)[]: Contains all selector statements in an advanced event selector.
* **Name**: string: An optional, descriptive name for an advanced event selector, such as "Log data events for only two S3 buckets".

## AdvancedFieldSelector
### Properties
* **EndsWith**: string[]: An operator that includes events that match the last few characters of the event record field specified as the value of Field.
* **Equals**: string[]: An operator that includes events that match the exact value of the event record field specified as the value of Field. This is the only valid operator that you can use with the readOnly, eventCategory, and resources.type fields.
* **Field**: string: A field in an event record on which to filter events to be logged. Supported fields include readOnly, eventCategory, eventSource (for management events), eventName, resources.type, and resources.ARN.
* **NotEndsWith**: string[]: An operator that excludes events that match the last few characters of the event record field specified as the value of Field.
* **NotEquals**: string[]: An operator that excludes events that match the exact value of the event record field specified as the value of Field.
* **NotStartsWith**: string[]: An operator that excludes events that match the first few characters of the event record field specified as the value of Field.
* **StartsWith**: string[]: An operator that includes events that match the first few characters of the event record field specified as the value of Field.

## Timestamp
### Properties

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.CloudTrail/TrailProperties
### Properties
* **Arn**: string (ReadOnly)
* **CloudWatchLogsLogGroupArn**: string: Specifies a log group name using an Amazon Resource Name (ARN), a unique identifier that represents the log group to which CloudTrail logs will be delivered. Not required unless you specify CloudWatchLogsRoleArn.
* **CloudWatchLogsRoleArn**: string: Specifies the role for the CloudWatch Logs endpoint to assume to write to a user's log group.
* **EnableLogFileValidation**: bool: Specifies whether log file validation is enabled. The default is false.
* **EventSelectors**: [EventSelector](#eventselector)[]: Use event selectors to further specify the management and data event settings for your trail. By default, trails created without specific event selectors will be configured to log all read and write management events, and no data events. When an event occurs in your account, CloudTrail evaluates the event selector for all trails. For each trail, if the event matches any event selector, the trail processes and logs the event. If the event doesn't match any event selector, the trail doesn't log the event. You can configure up to five event selectors for a trail.
* **IncludeGlobalServiceEvents**: bool: Specifies whether the trail is publishing events from global services such as IAM to the log files.
* **InsightSelectors**: [InsightSelector](#insightselector)[]: Lets you enable Insights event logging by specifying the Insights selectors that you want to enable on an existing trail.
* **IsLogging**: bool: Whether the CloudTrail is currently logging AWS API calls.
* **IsMultiRegionTrail**: bool: Specifies whether the trail applies only to the current region or to all regions. The default is false. If the trail exists only in the current region and this value is set to true, shadow trails (replications of the trail) will be created in the other regions. If the trail exists in all regions and this value is set to false, the trail will remain in the region where it was created, and its shadow trails in other regions will be deleted. As a best practice, consider using trails that log events in all regions.
* **IsOrganizationTrail**: bool: Specifies whether the trail is created for all accounts in an organization in AWS Organizations, or only for the current AWS account. The default is false, and cannot be true unless the call is made on behalf of an AWS account that is the master account for an organization in AWS Organizations.
* **KMSKeyId**: string: Specifies the KMS key ID to use to encrypt the logs delivered by CloudTrail. The value can be an alias name prefixed by 'alias/', a fully specified ARN to an alias, a fully specified ARN to a key, or a globally unique identifier.
* **S3BucketName**: string: Specifies the name of the Amazon S3 bucket designated for publishing log files. See Amazon S3 Bucket Naming Requirements.
* **S3KeyPrefix**: string: Specifies the Amazon S3 key prefix that comes after the name of the bucket you have designated for log file delivery. For more information, see Finding Your CloudTrail Log Files. The maximum length is 200 characters.
* **SnsTopicArn**: string (ReadOnly)
* **SnsTopicName**: string: Specifies the name of the Amazon SNS topic defined for notification of log file delivery. The maximum length is 256 characters.
* **Tags**: [Tag](#tag)[]
* **TrailName**: string

## EventSelector
### Properties
* **DataResources**: [DataResource](#dataresource)[]
* **ExcludeManagementEventSources**: string[]: An optional list of service event sources from which you do not want management events to be logged on your trail. In this release, the list can be empty (disables the filter), or it can filter out AWS Key Management Service events by containing "kms.amazonaws.com". By default, ExcludeManagementEventSources is empty, and AWS KMS events are included in events that are logged to your trail.
* **IncludeManagementEvents**: bool: Specify if you want your event selector to include management events for your trail.
* **ReadWriteType**: string: Specify if you want your trail to log read-only events, write-only events, or all. For example, the EC2 GetConsoleOutput is a read-only API operation and RunInstances is a write-only API operation.

## DataResource
### Properties
* **Type**: string: The resource type in which you want to log data events. You can specify AWS::S3::Object or AWS::Lambda::Function resources.
* **Values**: string[]: An array of Amazon Resource Name (ARN) strings or partial ARN strings for the specified objects.

## InsightSelector
### Properties
* **InsightType**: string: The type of insight to log on a trail.

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

