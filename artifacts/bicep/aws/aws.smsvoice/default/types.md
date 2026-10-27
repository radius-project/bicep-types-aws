# AWS.SMSVOICE @ default

## Resource AWS.SMSVOICE/ConfigurationSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/ConfigurationSetProperties](#awssmsvoiceconfigurationsetproperties) (Identifier): properties of the resource

## Resource AWS.SMSVOICE/NotifyConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/NotifyConfigurationProperties](#awssmsvoicenotifyconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SMSVOICE/OptOutList@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/OptOutListProperties](#awssmsvoiceoptoutlistproperties) (Identifier): properties of the resource

## Resource AWS.SMSVOICE/PhoneNumber@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/PhoneNumberProperties](#awssmsvoicephonenumberproperties) (Required, Identifier): properties of the resource

## Resource AWS.SMSVOICE/Pool@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/PoolProperties](#awssmsvoicepoolproperties) (Required, Identifier): properties of the resource

## Resource AWS.SMSVOICE/ProtectConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/ProtectConfigurationProperties](#awssmsvoiceprotectconfigurationproperties) (Identifier): properties of the resource

## Resource AWS.SMSVOICE/RcsAgent@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/RcsAgentProperties](#awssmsvoicercsagentproperties) (Identifier): properties of the resource

## Resource AWS.SMSVOICE/Registration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/RegistrationProperties](#awssmsvoiceregistrationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SMSVOICE/RegistrationAttachment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/RegistrationAttachmentProperties](#awssmsvoiceregistrationattachmentproperties) (Identifier): properties of the resource

## Resource AWS.SMSVOICE/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/ResourcePolicyProperties](#awssmsvoiceresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.SMSVOICE/SenderId@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/SenderIdProperties](#awssmsvoicesenderidproperties) (Required, Identifier): properties of the resource

## Resource AWS.SMSVOICE/VerifiedDestinationNumber@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SMSVOICE/VerifiedDestinationNumberProperties](#awssmsvoiceverifieddestinationnumberproperties) (Required, Identifier): properties of the resource

## AWS.SMSVOICE/ConfigurationSetProperties
### Properties
* **Arn**: string (ReadOnly)
* **ConfigurationSetName**: string (Identifier): The name to use for the configuration set.
* **DefaultSenderId**: string: The default sender ID to set for the ConfigurationSet.
* **EventDestinations**: [EventDestination](#eventdestination)[]: An event destination is a location where you send message events.
* **MessageFeedbackEnabled**: bool: Set to true to enable message feedback.
* **ProtectConfigurationId**: string: The unique identifier for the protect configuration to be associated to the configuration set.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SMSVOICE/NotifyConfigurationProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time when the notify configuration was created.
* **DefaultTemplateId**: string: The default template identifier to associate with the notify configuration. If specified, this template is used when sending messages without an explicit template identifier.
* **DeletionProtectionEnabled**: bool: By default this is set to false. When set to true the notify configuration can't be deleted.
* **DisplayName**: string (Required): The display name to associate with the notify configuration.
* **EnabledChannels**: string[] (Required): An array of channels to enable for the notify configuration. Supported values include SMS and VOICE.
* **EnabledCountries**: string[]: An array of two-character ISO country codes, in ISO 3166-1 alpha-2 format, that are enabled for the notify configuration.
* **NotifyConfigurationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the notify configuration.
* **NotifyConfigurationId**: string (ReadOnly): The unique identifier for the notify configuration.
* **PoolId**: string: The identifier of the pool to associate with the notify configuration.
* **Status**: string (ReadOnly): The current status of the notify configuration.
* **Tags**: [Tag](#tag)[]: An array of tags (key and value pairs) associated with the notify configuration.
* **Tier**: string (ReadOnly): The tier of the notify configuration.
* **TierUpgradeStatus**: string (ReadOnly): The tier upgrade status of the notify configuration.
* **UseCase**: string (Required): The use case for the notify configuration.

## AWS.SMSVOICE/OptOutListProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) for the OptOutList.
* **OptOutListName**: string (Identifier): The name of the new OptOutList.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SMSVOICE/PhoneNumberProperties
### Properties
* **Arn**: string (ReadOnly)
* **DeletionProtectionEnabled**: bool: When set to true the sender ID can't be deleted. By default this is set to false.
* **IsoCountryCode**: string (Required): The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
* **MandatoryKeywords**: [PhoneNumber_MandatoryKeywords](#phonenumbermandatorykeywords) (Required): A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
* **NumberCapabilities**: string[] (Required): Indicates if the phone number will be used for text messages, voice messages, or both.
* **NumberType**: string (Required): The type of phone number to request.
* **OptionalKeywords**: [OptionalKeyword](#optionalkeyword)[]: A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.
* **OptOutListName**: string: The name of the OptOutList to associate with the phone number. You can use the OptOutListName or OptOutListArn.
* **PhoneNumber**: string (ReadOnly)
* **PhoneNumberId**: string (ReadOnly, Identifier)
* **SelfManagedOptOutsEnabled**: bool: By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TwoWay**: [PhoneNumber_TwoWay](#phonenumbertwoway): When you set up two-way SMS, you can receive incoming messages from your customers. When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

## AWS.SMSVOICE/PoolProperties
### Properties
* **Arn**: string (ReadOnly)
* **DeletionProtectionEnabled**: bool: When set to true the pool can't be deleted. By default this is set to false.
* **MandatoryKeywords**: [Pool_MandatoryKeywords](#poolmandatorykeywords) (Required): A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message. Keywords "HELP" and "STOP" are mandatory keywords
* **OptionalKeywords**: [OptionalKeyword](#optionalkeyword)[]: A keyword is a word that you can search for on a particular phone number or pool. It is also a specific word or phrase that an end user can send to your number to elicit a response, such as an informational message or a special offer. When your number receives a message that begins with a keyword, AWS End User Messaging SMS and Voice responds with a customizable message.
* **OptOutListName**: string: The name of the OptOutList to associate with the pool. You can use the OptOutListName or OptOutListArn.
* **OriginationIdentities**: string[] (Required): The origination identity to use such as a PhoneNumberId, PhoneNumberArn, SenderId or SenderIdArn and it's IsoCountryCode.
* **PoolId**: string (ReadOnly, Identifier)
* **SelfManagedOptOutsEnabled**: bool: By default this is set to false. When an end recipient sends a message that begins with HELP or STOP to one of your dedicated numbers, AWS End User Messaging SMS and Voice automatically replies with a customizable message and adds the end recipient to the OptOutList. When set to true you're responsible for responding to HELP and STOP requests. You're also responsible for tracking and honoring opt-out requests.
* **SharedRoutesEnabled**: bool: Indicates whether shared routes are enabled for the pool.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TwoWay**: [Pool_TwoWay](#pooltwoway): When you set up two-way SMS, you can receive incoming messages from your customers. When one of your customers sends a message to your phone number, the message body is sent to an Amazon SNS topic or Amazon Connect for processing.

## AWS.SMSVOICE/ProtectConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the protect configuration.
* **CountryRuleSet**: [CountryRuleSet](#countryruleset): An array of CountryRule containing the rules for the NumberCapability.
* **DeletionProtectionEnabled**: bool: When set to true deletion protection is enabled and protect configuration cannot be deleted. By default this is set to false.
* **ProtectConfigurationId**: string (ReadOnly, Identifier): The unique identifier for the protect configuration.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SMSVOICE/RcsAgentProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time when the RCS agent was created.
* **DeletionProtectionEnabled**: bool: When set to true the RCS agent can't be deleted. By default this is false.
* **OptOutListName**: string: The name of the opt-out list associated with the RCS agent.
* **PoolId**: string (ReadOnly): The unique identifier of the pool associated with the RCS agent. This is populated only while the agent is associated with a pool, which is done through the pool APIs rather than through this resource.
* **RcsAgentArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the RCS agent.
* **RcsAgentId**: string (ReadOnly): The unique identifier for the RCS agent, in the format rcs- followed by a hexadecimal string.
* **SelfManagedOptOutsEnabled**: bool: When set to true you're responsible for responding to HELP and STOP requests, and for tracking and honoring opt-out requests. By default this is false.
* **Status**: string (ReadOnly): The current status of the RCS agent. CREATED means the agent exists but no registration has been submitted. PENDING means a registration is awaiting processing. TESTING means the testing registration is approved and the agent can message registered test devices. PARTIAL means at least one country launch is active. ACTIVE means all submitted country launches are active. DELETED means the agent has been deleted.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to the RCS agent.
* **TestingAgent**: [TestingAgentInformation](#testingagentinformation) (ReadOnly)
* **TwoWayChannelArn**: string: The Amazon Resource Name (ARN) of the two way channel where inbound messages are delivered.
* **TwoWayChannelRole**: string: The Amazon Resource Name (ARN) of an IAM role for the service to assume in order to post inbound messages to the two way channel.
* **TwoWayEnabled**: bool: When set to true two-way messaging is enabled for the RCS agent.
* **TwoWayMediaS3BucketName**: string: The name of the Amazon S3 bucket where inbound RCS media objects are written.
* **TwoWayMediaS3KeyPrefix**: string: The key prefix used for inbound RCS media objects in the Amazon S3 bucket.
* **TwoWayMediaS3Role**: string: The Amazon Resource Name (ARN) of the IAM role used to write inbound RCS media files to the Amazon S3 bucket. The role must have s3:PutObject permission on the bucket and a trust policy allowing sms-voice.amazonaws.com to assume it.
* **TwoWayRcsEventsEnabled**: string[]: The list of RCS event types enabled for two-way messaging. An empty list disables all event types. The special value ALL enables all current and future event types and must be the only element if used. Requires TwoWayEnabled to be true.

## AWS.SMSVOICE/RegistrationAttachmentProperties
### Properties
* **AttachmentBody**: string (WriteOnly): The registration file to upload. The maximum file size is 1500KB and valid file extensions are PDF, JPEG and PNG.
* **AttachmentStatus**: string (ReadOnly): The status of the registration attachment.
* **AttachmentUrl**: string (WriteOnly): A URL to the required registration file. For example, the URL to an MMS/shortcode form.
* **CreatedTimestamp**: string (ReadOnly): The time when the registration attachment was created, in UNIX epoch time format.
* **RegistrationAttachmentArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the registration attachment.
* **RegistrationAttachmentId**: string (ReadOnly): The unique identifier for the registration attachment.
* **Tags**: [Tag](#tag)[]: An array of tags (key and value pairs) to associate with the registration attachment.
* **UploadedAttachmentUrl**: string (ReadOnly): The URL to the document that was uploaded as the registration attachment, as returned by the service.

## AWS.SMSVOICE/RegistrationProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time when the registration was created, in UNIX epoch time format.
* **CurrentVersionNumber**: int (ReadOnly): The current version number of the registration.
* **RegistrationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the registration.
* **RegistrationId**: string (ReadOnly): The unique identifier for the registration.
* **RegistrationStatus**: string (ReadOnly): The status of the registration.
* **RegistrationType**: string (Required): The type of registration form to create.
* **Tags**: [Tag](#tag)[]: An array of tags (key and value pairs) to associate with the registration.

## AWS.SMSVOICE/ResourcePolicyProperties
### Properties
* **PolicyDocument**: [ResourcePolicy_PolicyDocument](#resourcepolicypolicydocument) (Required): The JSON formatted resource-based policy to attach.
* **ResourceArn**: string (Required, Identifier): The Amazon Resource Name (ARN) of the AWS End User Messaging SMS and Voice resource to attach the resource-based policy to.

## AWS.SMSVOICE/SenderIdProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) associated with the SenderId.
* **DeletionProtectionEnabled**: bool: When set to true the sender ID can't be deleted. By default this is set to false.
* **IsoCountryCode**: string (Required, Identifier): The two-character code, in ISO 3166-1 alpha-2 format, for the country or region.
* **SenderId**: string (Required, Identifier): The sender ID string to request.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.SMSVOICE/VerifiedDestinationNumberProperties
### Properties
* **CreatedTimestamp**: string (ReadOnly): The time when the verified destination phone number was created.
* **DestinationPhoneNumber**: string (Required): The verified destination phone number, in E.164 format.
* **Status**: string (ReadOnly): The status of the verified destination phone number. PENDING means the phone number has not been verified yet; VERIFIED means it is verified and can receive messages.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **VerifiedDestinationNumberArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the verified destination phone number.
* **VerifiedDestinationNumberId**: string (ReadOnly): The unique identifier for the verified destination phone number.

## CloudWatchLogsDestination
### Properties
* **IamRoleArn**: string (Required): The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.
* **LogGroupArn**: string (Required): The name of the Amazon CloudWatch log group that you want to record events in.

## CountryRule
### Properties
* **CountryCode**: string (Required): The two-letter ISO country code
* **ProtectStatus**: string (Required): The types of protection that can be used.

## CountryRuleSet
### Properties
* **MMS**: [CountryRule](#countryrule)[]
* **SMS**: [CountryRule](#countryrule)[]
* **VOICE**: [CountryRule](#countryrule)[]

## EventDestination
### Properties
* **CloudWatchLogsDestination**: [CloudWatchLogsDestination](#cloudwatchlogsdestination): An object that contains IamRoleArn and LogGroupArn associated with an Amazon CloudWatch event destination.
* **Enabled**: bool (Required): When set to true events will be logged. By default this is set to true
* **EventDestinationName**: string (Required): The name that identifies the event destination.
* **KinesisFirehoseDestination**: [KinesisFirehoseDestination](#kinesisfirehosedestination): An object that contains IamRoleArn and DeliveryStreamArn associated with an Amazon Kinesis Firehose event destination.
* **MatchingEventTypes**: string[] (Required): An array of event types that determine which events to log. If 'ALL' is used, then AWS End User Messaging SMS and Voice logs every event type.
* **SnsDestination**: [SnsDestination](#snsdestination): An object that contains SNS TopicArn event destination.

## KinesisFirehoseDestination
### Properties
* **DeliveryStreamArn**: string (Required): The Amazon Resource Name (ARN) of the delivery stream.
* **IamRoleArn**: string (Required): The Amazon Resource Name (ARN) of an AWS Identity and Access Management role that is able to write event data to an Amazon CloudWatch destination.

## MandatoryKeyword
### Properties
* **Message**: string (Required)

## MandatoryKeyword
### Properties
* **Message**: string (Required)

## OptionalKeyword
### Properties
* **Action**: string (Required)
* **Keyword**: string (Required)
* **Message**: string (Required)

## OptionalKeyword
### Properties
* **Action**: string (Required)
* **Keyword**: string (Required)
* **Message**: string (Required)

## PhoneNumber_MandatoryKeywords
### Properties
* **HELP**: [MandatoryKeyword](#mandatorykeyword) (Required)
* **STOP**: [MandatoryKeyword](#mandatorykeyword) (Required)

## PhoneNumber_TwoWay
### Properties
* **ChannelArn**: string: The Amazon Resource Name (ARN) of the two way channel.
* **ChannelRole**: string: An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
* **Enabled**: bool (Required): By default this is set to false. When set to true you can receive incoming text messages from your end recipients.

## Pool_MandatoryKeywords
### Properties
* **HELP**: [MandatoryKeyword](#mandatorykeyword) (Required)
* **STOP**: [MandatoryKeyword](#mandatorykeyword) (Required)

## Pool_TwoWay
### Properties
* **ChannelArn**: string: The Amazon Resource Name (ARN) of the two way channel.
* **ChannelRole**: string: An optional IAM Role Arn for a service to assume, to be able to post inbound SMS messages.
* **Enabled**: bool (Required): By default this is set to false. When set to true you can receive incoming text messages from your end recipients.

## ResourcePolicy_PolicyDocument
### Properties

## SnsDestination
### Properties
* **TopicArn**: string (Required): The Amazon Resource Name (ARN) of the Amazon SNS topic that you want to publish events to.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value associated with the key of the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value associated with the key of the tag.

## Tag
### Properties
* **Key**: string (Required): The key identifier, or name, of the tag.
* **Value**: string (Required): The string value associated with the key of the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## TestingAgentInformation
### Properties
* **RegistrationId**: string (Required): The unique identifier of the testing registration that created the testing agent.
* **TestingAgentId**: string: The identifier of the testing agent assigned by the RCS infrastructure provider.
* **TestingAgentStatus**: string (Required): The status of the testing agent. Named distinctly from the resource-level Status property, which has its own larger set of values.

