# AWS.SupportApp @ default

## Resource AWS.SupportApp/AccountAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SupportApp/AccountAliasProperties](#awssupportappaccountaliasproperties): properties of the resource

## Resource AWS.SupportApp/SlackChannelConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SupportApp/SlackChannelConfigurationProperties](#awssupportappslackchannelconfigurationproperties): properties of the resource

## AWS.SupportApp/AccountAliasProperties
### Properties
* **AccountAlias**: string: An account alias associated with a customer's account.
* **AccountAliasResourceId**: string (ReadOnly): Unique identifier representing an alias tied to an account

## AWS.SupportApp/SlackChannelConfigurationProperties
### Properties
* **ChannelId**: string: The channel ID in Slack, which identifies a channel within a workspace.
* **ChannelName**: string: The channel name in Slack.
* **ChannelRoleArn**: string: The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.
* **NotifyOnAddCorrespondenceToCase**: bool: Whether to notify when a correspondence is added to a case.
* **NotifyOnCaseSeverity**: string: The severity level of a support case that a customer wants to get notified for.
* **NotifyOnCreateOrReopenCase**: bool: Whether to notify when a case is created or reopened.
* **NotifyOnResolveCase**: bool: Whether to notify when a case is resolved.
* **TeamId**: string: The team ID in Slack, which uniquely identifies a workspace.

