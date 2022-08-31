# AWS.CodeStarNotifications @ default

## Resource AWS.CodeStarNotifications/NotificationRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CodeStarNotifications/NotificationRuleProperties](#awscodestarnotificationsnotificationruleproperties): properties of the resource

## AWS.CodeStarNotifications/NotificationRuleProperties
### Properties
* **Arn**: string (ReadOnly)
* **CreatedBy**: string
* **DetailType**: string
* **EventTypeId**: string (WriteOnly)
* **EventTypeIds**: string[]
* **Name**: string
* **Resource**: string
* **Status**: string
* **Tags**: [NotificationRule_Tags](#notificationruletags)
* **TargetAddress**: string (WriteOnly)
* **Targets**: [Target](#target)[]

## NotificationRule_Tags
### Properties

## Target
### Properties
* **TargetAddress**: string
* **TargetType**: string

