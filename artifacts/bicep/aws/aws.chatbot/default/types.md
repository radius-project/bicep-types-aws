# AWS.Chatbot @ default

## Resource AWS.Chatbot/MicrosoftTeamsChannelConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chatbot/MicrosoftTeamsChannelConfigurationProperties](#awschatbotmicrosoftteamschannelconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Chatbot/SlackChannelConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Chatbot/SlackChannelConfigurationProperties](#awschatbotslackchannelconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.Chatbot/MicrosoftTeamsChannelConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the configuration
* **ConfigurationName**: string (Required): The name of the configuration
* **GuardrailPolicies**: string[]: The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
* **IamRoleArn**: string (Required): The ARN of the IAM role that defines the permissions for AWS Chatbot
* **LoggingLevel**: string: Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
* **SnsTopicArns**: string[]: ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
* **Tags**: [Tag](#tag)[]: The tags to add to the configuration
* **TeamId**: string (Required): The id of the Microsoft Teams team
* **TeamsChannelId**: string (Required): The id of the Microsoft Teams channel
* **TeamsTenantId**: string (Required): The id of the Microsoft Teams tenant
* **UserRoleRequired**: bool: Enables use of a user role requirement in your chat configuration

## AWS.Chatbot/SlackChannelConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the configuration
* **ConfigurationName**: string (Required): The name of the configuration
* **GuardrailPolicies**: string[]: The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied as a default if this is not set.
* **IamRoleArn**: string (Required): The ARN of the IAM role that defines the permissions for AWS Chatbot
* **LoggingLevel**: string: Specifies the logging level for this configuration:ERROR,INFO or NONE. This property affects the log entries pushed to Amazon CloudWatch logs
* **SlackChannelId**: string (Required): The id of the Slack channel
* **SlackWorkspaceId**: string (Required): The id of the Slack workspace
* **SnsTopicArns**: string[]: ARNs of SNS topics which delivers notifications to AWS Chatbot, for example CloudWatch alarm notifications.
* **Tags**: [Tag](#tag)[]: The tags to add to the configuration
* **UserRoleRequired**: bool: Enables use of a user role requirement in your chat configuration

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

