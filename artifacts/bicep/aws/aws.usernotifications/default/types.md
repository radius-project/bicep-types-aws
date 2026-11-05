# AWS.UserNotifications @ default

## Resource AWS.UserNotifications/ManagedNotificationConfiguration@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.UserNotifications/ManagedNotificationConfigurationProperties](#awsusernotificationsmanagednotificationconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.UserNotifications/NotificationEvent@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.UserNotifications/NotificationEventProperties](#awsusernotificationsnotificationeventproperties) (Identifier): properties of the resource

## AWS.UserNotifications/ManagedNotificationConfigurationProperties
### Properties
* **Arn**: string (Identifier): The ARN of the ManagedNotificationConfiguration.
* **Category**: string: The category of the ManagedNotificationConfiguration.
* **Description**: string (ReadOnly): The description of the ManagedNotificationConfiguration.
* **Name**: string (ReadOnly): The name of the ManagedNotificationConfiguration.
* **SubCategory**: string: The subCategory of the ManagedNotificationConfiguration.

## AWS.UserNotifications/NotificationEventProperties
### Properties
* **AggregationEventType**: string (ReadOnly): The notifications aggregation type.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the NotificationEvent.
* **CreationTime**: string (ReadOnly): The creation time of the NotificationEvent.
* **EventStatus**: string (ReadOnly): The assessed nature of the event.
* **Id**: string (ReadOnly): The unique identifier for the NotificationEvent.
* **MessageComponents**: [MessageComponents](#messagecomponents) (ReadOnly)
* **NotificationConfigurationArn**: string (ReadOnly): The ARN of the NotificationConfiguration.
* **NotificationType**: string (ReadOnly): The type of event causing the notification.
* **SchemaVersion**: string (ReadOnly): Version of the NotificationEvent schema.
* **SourceEventDetailUrl**: string (ReadOnly): The source event URL.
* **SourceEventMetadata**: [SourceEventMetadata](#sourceeventmetadata) (ReadOnly)

## Dimension
### Properties
* **Name**: string (Required): The name of the dimension.
* **Value**: string (Required): The value of the dimension.

## MessageComponents
### Properties
* **Dimensions**: [Dimension](#dimension)[]: A list of properties in key-value pairs.
* **Headline**: string: A sentence long summary.
* **ParagraphSummary**: string: A paragraph long or multiple sentence summary.

## Resource
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the resource.

## SourceEventMetadata
### Properties
* **EventOccurrenceTime**: string (Required): The date and time the source event occurred.
* **EventOriginRegion**: string: The Region the event originated from.
* **EventType**: string (Required): The type of event.
* **EventTypeVersion**: string (Required): The version of the type of event.
* **RelatedAccount**: string (Required): The primary AWS account of SourceEvent.
* **RelatedResources**: [Resource](#resource)[] (Required): A list of resources related to this NotificationEvent.
* **Source**: string (Required): The AWS service the event originates from.
* **SourceEventId**: string (Required): The source event id.

