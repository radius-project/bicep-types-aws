# AWS.SES @ default

## Resource AWS.SES/ConfigurationSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SES/ConfigurationSetProperties](#awssesconfigurationsetproperties): properties of the resource

## Resource AWS.SES/ConfigurationSetEventDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SES/ConfigurationSetEventDestinationProperties](#awssesconfigurationseteventdestinationproperties): properties of the resource

## Resource AWS.SES/ContactList@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SES/ContactListProperties](#awssescontactlistproperties): properties of the resource

## Resource AWS.SES/EmailIdentity@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SES/EmailIdentityProperties](#awssesemailidentityproperties): properties of the resource

## Resource AWS.SES/Template@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SES/TemplateProperties](#awssestemplateproperties): properties of the resource

## AWS.SES/ConfigurationSetProperties
### Properties
* **DeliveryOptions**: [DeliveryOptions](#deliveryoptions)
* **Name**: string: The name of the configuration set.
* **ReputationOptions**: [ReputationOptions](#reputationoptions)
* **SendingOptions**: [SendingOptions](#sendingoptions)
* **SuppressionOptions**: [SuppressionOptions](#suppressionoptions)
* **TrackingOptions**: [TrackingOptions](#trackingoptions)

## DeliveryOptions
### Properties
* **SendingPoolName**: string: The name of the dedicated IP pool to associate with the configuration set.
* **TlsPolicy**: string: Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is Require , messages are only delivered if a TLS connection can be established. If the value is Optional , messages can be delivered in plain text if a TLS connection can't be established.

## ReputationOptions
### Properties
* **ReputationMetricsEnabled**: bool: If true , tracking of reputation metrics is enabled for the configuration set. If false , tracking of reputation metrics is disabled for the configuration set.

## SendingOptions
### Properties
* **SendingEnabled**: bool

## SuppressionOptions
### Properties
* **SuppressedReasons**: string[]: A list that contains the reasons that email addresses are automatically added to the suppression list for your account.

## TrackingOptions
### Properties
* **CustomRedirectDomain**: string: The domain to use for tracking open and click events.

## AWS.SES/ConfigurationSetEventDestinationProperties
### Properties
* **ConfigurationSetName**: string: The name of the configuration set that contains the event destination.
* **EventDestination**: [EventDestination](#eventdestination): The event destination object.
* **Id**: string (ReadOnly)

## EventDestination
### Properties
* **CloudWatchDestination**: [CloudWatchDestination](#cloudwatchdestination): An object that contains the names, default values, and sources of the dimensions associated with an Amazon CloudWatch event destination.
* **Enabled**: bool: Sets whether Amazon SES publishes events to this destination when you send an email with the associated configuration set. Set to true to enable publishing to this destination; set to false to prevent publishing to this destination. The default value is false.   
* **KinesisFirehoseDestination**: [KinesisFirehoseDestination](#kinesisfirehosedestination): An object that contains the delivery stream ARN and the IAM role ARN associated with an Amazon Kinesis Firehose event destination.
* **MatchingEventTypes**: string[]: The type of email sending events, send, reject, bounce, complaint, delivery, open, click, renderingFailure.
* **Name**: string: The name of the event destination set.
* **SnsDestination**: [SnsDestination](#snsdestination): An object that contains SNS topic ARN associated event destination.

## CloudWatchDestination
### Properties
* **DimensionConfigurations**: [DimensionConfiguration](#dimensionconfiguration)[]: A list of dimensions upon which to categorize your emails when you publish email sending events to Amazon CloudWatch.

## DimensionConfiguration
### Properties
* **DefaultDimensionValue**: string: The default value of the dimension that is published to Amazon CloudWatch if you do not provide the value of the dimension when you send an email.
* **DimensionName**: string: The name of an Amazon CloudWatch dimension associated with an email sending metric.
* **DimensionValueSource**: string: The place where Amazon SES finds the value of a dimension to publish to Amazon CloudWatch. To use the message tags that you specify using an X-SES-MESSAGE-TAGS header or a parameter to the SendEmail/SendRawEmail API, specify messageTag. To use your own email headers, specify emailHeader. To put a custom tag on any link included in your email, specify linkTag.

## KinesisFirehoseDestination
### Properties
* **DeliveryStreamARN**: string: The ARN of the Amazon Kinesis Firehose stream that email sending events should be published to.
* **IAMRoleARN**: string: The ARN of the IAM role under which Amazon SES publishes email sending events to the Amazon Kinesis Firehose stream.

## SnsDestination
### Properties
* **TopicARN**: string

## AWS.SES/ContactListProperties
### Properties
* **ContactListName**: string: The name of the contact list.
* **Description**: string: The description of the contact list.
* **Tags**: [Tag](#tag)[]: The tags (keys and values) associated with the contact list.
* **Topics**: [Topic](#topic)[]: The topics associated with the contact list.

## Tag
### Properties
* **Key**: string
* **Value**: string

## Topic
### Properties
* **DefaultSubscriptionStatus**: string
* **Description**: string: The description of the topic.
* **DisplayName**: string: The display name of the topic.
* **TopicName**: string: The name of the topic.

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
* **DkimSigningAttributes**: [DkimSigningAttributes](#dkimsigningattributes) (WriteOnly)
* **EmailIdentity**: string: The email address or domain to verify.
* **FeedbackAttributes**: [FeedbackAttributes](#feedbackattributes)
* **MailFromAttributes**: [MailFromAttributes](#mailfromattributes)

## ConfigurationSetAttributes
### Properties
* **ConfigurationSetName**: string: The configuration set to use by default when sending from this identity. Note that any configuration set defined in the email sending request takes precedence.

## DkimAttributes
### Properties
* **SigningEnabled**: bool: Sets the DKIM signing configuration for the identity. When you set this value true, then the messages that are sent from the identity are signed using DKIM. If you set this value to false, your messages are sent without DKIM signing.

## DkimSigningAttributes
### Properties
* **DomainSigningPrivateKey**: string: [Bring Your Own DKIM] A private key that's used to generate a DKIM signature. The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
* **DomainSigningSelector**: string: [Bring Your Own DKIM] A string that's used to identify a public key in the DNS configuration for a domain.
* **NextSigningKeyLength**: string: [Easy DKIM] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.

## FeedbackAttributes
### Properties
* **EmailForwardingEnabled**: bool: If the value is true, you receive email notifications when bounce or complaint events occur

## MailFromAttributes
### Properties
* **BehaviorOnMxFailure**: string: The action to take if the required MX record isn't found when you send an email. When you set this value to UseDefaultValue , the mail is sent using amazonses.com as the MAIL FROM domain. When you set this value to RejectMessage , the Amazon SES API v2 returns a MailFromDomainNotVerified error, and doesn't attempt to deliver the email.
* **MailFromDomain**: string: The custom MAIL FROM domain that you want the verified identity to use

## AWS.SES/TemplateProperties
### Properties
* **Id**: string (ReadOnly)
* **Template**: [Template](#template)

## Template
### Properties
* **HtmlPart**: string: The HTML body of the email.
* **SubjectPart**: string: The subject line of the email.
* **TemplateName**: string: The name of the template.
* **TextPart**: string: The email body that is visible to recipients whose email clients do not display HTML content.

