# AWS.SupportApp @ default

## Resource AWS.SupportApp/AccountAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.SupportApp/AccountAliasProperties](#awssupportappaccountaliasproperties) (Required): properties of the resource

## Resource AWS.SupportApp/SlackChannelConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.SupportApp/SlackChannelConfigurationProperties](#awssupportappslackchannelconfigurationproperties) (Required): properties of the resource

## Resource AWS.SupportApp/SlackWorkspaceConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.SupportApp/SlackWorkspaceConfigurationProperties](#awssupportappslackworkspaceconfigurationproperties) (Required): properties of the resource

## AWS.SupportApp/AccountAliasProperties
### Properties
* **AccountAlias**: string (Required): An account alias associated with a customer's account.
* **AccountAliasResourceId**: string (ReadOnly, Identifier): Unique identifier representing an alias tied to an account

## AWS.SupportApp/SlackChannelConfigurationProperties
### Properties
* **ChannelId**: string (Required, Identifier): The channel ID in Slack, which identifies a channel within a workspace.
* **ChannelName**: string: The channel name in Slack.
* **ChannelRoleArn**: string (Required): The Amazon Resource Name (ARN) of an IAM role that grants the AWS Support App access to perform operations for AWS services.
* **NotifyOnAddCorrespondenceToCase**: bool: Whether to notify when a correspondence is added to a case.
* **NotifyOnCaseSeverity**: string (Required): The severity level of a support case that a customer wants to get notified for.
* **NotifyOnCreateOrReopenCase**: bool: Whether to notify when a case is created or reopened.
* **NotifyOnResolveCase**: bool: Whether to notify when a case is resolved.
* **TeamId**: string (Required, Identifier): The team ID in Slack, which uniquely identifies a workspace.

## AWS.SupportApp/SlackWorkspaceConfigurationProperties
### Properties
* **TeamId**: string (Required, Identifier): The team ID in Slack, which uniquely identifies a workspace.
* **VersionId**: string (WriteOnly): An identifier used to update an existing Slack workspace configuration in AWS CloudFormation.

