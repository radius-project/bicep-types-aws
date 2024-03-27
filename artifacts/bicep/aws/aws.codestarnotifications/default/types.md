# AWS.CodeStarNotifications @ default

## Resource AWS.CodeStarNotifications/NotificationRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeStarNotifications/NotificationRuleProperties](#awscodestarnotificationsnotificationruleproperties) (Required, Identifier): properties of the resource

## AWS.CodeStarNotifications/NotificationRuleProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **CreatedBy**: string
* **DetailType**: string (Required)
* **EventTypeId**: string (WriteOnly)
* **EventTypeIds**: string[] (Required)
* **Name**: string (Required)
* **Resource**: string (Required)
* **Status**: string
* **Tags**: [NotificationRule_Tags](#notificationruletags)
* **TargetAddress**: string (WriteOnly)
* **Targets**: [Target](#target)[] (Required)

## NotificationRule_Tags
### Properties

## Target
### Properties
* **TargetAddress**: string (Required)
* **TargetType**: string (Required)

