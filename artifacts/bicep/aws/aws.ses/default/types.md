# AWS.SES @ default

## Resource AWS.SES/ConfigurationSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/ConfigurationSetProperties](#awssesconfigurationsetproperties) (Identifier): properties of the resource

## Resource AWS.SES/ConfigurationSetEventDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/ConfigurationSetEventDestinationProperties](#awssesconfigurationseteventdestinationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SES/ContactList@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/ContactListProperties](#awssescontactlistproperties) (Identifier): properties of the resource

## Resource AWS.SES/DedicatedIpPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/DedicatedIpPoolProperties](#awssesdedicatedippoolproperties) (Identifier): properties of the resource

## Resource AWS.SES/EmailIdentity@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/EmailIdentityProperties](#awssesemailidentityproperties) (Required, Identifier): properties of the resource

## Resource AWS.SES/Template@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/TemplateProperties](#awssestemplateproperties) (Identifier): properties of the resource

## Resource AWS.SES/VdmAttributes@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SES/VdmAttributesProperties](#awssesvdmattributesproperties) (Identifier): properties of the resource

## AWS.SES/ConfigurationSetEventDestinationProperties
### Properties
* **ConfigurationSetName**: string (Required): The name of the configuration set that contains the event destination.
* **EventDestination**: [EventDestination](#eventdestination) (Required): The event destination object.
* **Id**: string (ReadOnly, Identifier)

## AWS.SES/ConfigurationSetProperties
### Properties
* **DeliveryOptions**: [DeliveryOptions](#deliveryoptions)
* **Name**: string (Identifier): The name of the configuration set.
* **ReputationOptions**: [ReputationOptions](#reputationoptions)
* **SendingOptions**: [SendingOptions](#sendingoptions)
* **SuppressionOptions**: [SuppressionOptions](#suppressionoptions)
* **TrackingOptions**: [TrackingOptions](#trackingoptions)
* **VdmOptions**: [VdmOptions](#vdmoptions)

## AWS.SES/ContactListProperties
### Properties
* **ContactListName**: string (Identifier): The name of the contact list.
* **Description**: string: The description of the contact list.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the contact list.
* **Topics**: [Topic](#topic)[]: The topics associated with the contact list.

## AWS.SES/DedicatedIpPoolProperties
### Properties
* **PoolName**: string (Identifier): The name of the dedicated IP pool.
* **ScalingMode**: string: Specifies whether the dedicated IP pool is managed or not. The default value is STANDARD.

## AWS.SES/EmailIdentityProperties
### Properties
* **ConfigurationSetAttributes**: [ConfigurationSetAttributes](#configurationsetattributes)
* **DkimAttributes**: [DkimAttributes](#dkimattributes)
* **DkimDNSTokenName1**: string (ReadOnly)
* **DkimDNSTokenName2**: string (ReadOnly)
* **DkimDNSTokenName3**: string (ReadOnly)
* **DkimDNSTokenValue1**: string (ReadOnly)
* **DkimDNSTokenValue2**: string (ReadOnly)
* **DkimDNSTokenValue3**: string (ReadOnly)
* **DkimSigningAttributes**: [DkimSigningAttributes](#dkimsigningattributes)
* **EmailIdentity**: string (Required, Identifier): The email address or domain to verify.
* **FeedbackAttributes**: [FeedbackAttributes](#feedbackattributes)
* **MailFromAttributes**: [MailFromAttributes](#mailfromattributes)

## AWS.SES/TemplateProperties
### Properties
* **Id**: string (ReadOnly, Identifier)
* **Template**: [Template](#template)

## AWS.SES/VdmAttributesProperties
### Properties
* **DashboardAttributes**: [DashboardAttributes](#dashboardattributes)
* **GuardianAttributes**: [GuardianAttributes](#guardianattributes)
* **VdmAttributesResourceId**: string (ReadOnly, Identifier): Unique identifier for this resource

## CloudWatchDestination
### Properties
* **DimensionConfigurations**: [DimensionConfiguration](#dimensionconfiguration)[]: A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

## ConfigurationSetAttributes
### Properties
* **ConfigurationSetName**: string: The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.

## DashboardAttributes
### Properties
* **EngagementMetrics**: string: Whether emails sent from this account have engagement tracking enabled.

## DashboardOptions
### Properties
* **EngagementMetrics**: string (Required): Whether emails sent with this configuration set have engagement tracking enabled.

## DeliveryOptions
### Properties
* **SendingPoolName**: string: The name of the dedicated IP pool to associate with the configuration set.
* **TlsPolicy**: string: Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

## DimensionConfiguration
### Properties
* **DefaultDimensionValue**: string (Required): The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.
* **DimensionName**: string (Required): The name of an Amazon CloudWatch dimension associated with an email sending metric.
* **DimensionValueSource**: string (Required): The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.

## DkimAttributes
### Properties
* **SigningEnabled**: bool: Sets the DKIM signing configuration for the identity. When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

## DkimSigningAttributes
### Properties
* **DomainSigningPrivateKey**: string (WriteOnly): [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
* **DomainSigningSelector**: string (WriteOnly): [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
* **NextSigningKeyLength**: string: [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.

## EventBridgeDestination
### Properties
* **EventBusArn**: string (Required)

## EventDestination
### Properties
* **CloudWatchDestination**: [CloudWatchDestination](#cloudwatchdestination): An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
* **Enabled**: bool: Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.   
* **EventBridgeDestination**: [EventBridgeDestination](#eventbridgedestination): An object that contains Event bus ARN associated with the event bridge destination.
* **KinesisFirehoseDestination**: [KinesisFirehoseDestination](#kinesisfirehosedestination): An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
* **MatchingEventTypes**: string[] (Required): The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure, deliveryDelay, and subscription.
* **Name**: string: The name of the event destination set.
* **SnsDestination**: [SnsDestination](#snsdestination): An object that contains SNS topic ARN associated event destination.

## FeedbackAttributes
### Properties
* **EmailForwardingEnabled**: bool: If the value is true, you receive email notifications when bounce or complaint events occur

## GuardianAttributes
### Properties
* **OptimizedSharedDelivery**: string: Whether emails sent from this account have optimized delivery algorithm enabled.

## GuardianOptions
### Properties
* **OptimizedSharedDelivery**: string (Required): Whether emails sent with this configuration set have optimized delivery algorithm enabled.

## KinesisFirehoseDestination
### Properties
* **DeliveryStreamARN**: string (Required): The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
* **IAMRoleARN**: string (Required): The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

## MailFromAttributes
### Properties
* **BehaviorOnMxFailure**: string: The action to take if the required MX record isn't found when you send an email. When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.
* **MailFromDomain**: string: The custom MAIL FROM domain that you want the verified identity to use

## ReputationOptions
### Properties
* **ReputationMetricsEnabled**: bool: If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set.

## SendingOptions
### Properties
* **SendingEnabled**: bool

## SnsDestination
### Properties
* **TopicARN**: string (Required)

## SuppressionOptions
### Properties
* **SuppressedReasons**: string[]: A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Template
### Properties
* **HtmlPart**: string: The HTML body of the email.
* **SubjectPart**: string (Required): The subject line of the email.
* **TemplateName**: string: The name of the template.
* **TextPart**: string: The email body that is visible to recipients whose email clients do not display HTML content.

## Topic
### Properties
* **DefaultSubscriptionStatus**: string (Required)
* **Description**: string: The description of the topic.
* **DisplayName**: string (Required): The display name of the topic.
* **TopicName**: string (Required): The name of the topic.

## TrackingOptions
### Properties
* **CustomRedirectDomain**: string: The domain to use for tracking open and click events.

## VdmOptions
### Properties
* **DashboardOptions**: [DashboardOptions](#dashboardoptions)
* **GuardianOptions**: [GuardianOptions](#guardianoptions)

