# AWS.Wisdom @ default

## Resource AWS.Wisdom/AIAgent@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIAgentProperties](#awswisdomaiagentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AIAgentVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIAgentVersionProperties](#awswisdomaiagentversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AIGuardrail@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIGuardrailProperties](#awswisdomaiguardrailproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AIGuardrailVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIGuardrailVersionProperties](#awswisdomaiguardrailversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AIPrompt@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIPromptProperties](#awswisdomaipromptproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AIPromptVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AIPromptVersionProperties](#awswisdomaipromptversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/Assistant@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AssistantProperties](#awswisdomassistantproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/AssistantAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/AssistantAssociationProperties](#awswisdomassistantassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/Content@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/ContentProperties](#awswisdomcontentproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/KnowledgeBase@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/KnowledgeBaseProperties](#awswisdomknowledgebaseproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/MessageTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/MessageTemplateProperties](#awswisdommessagetemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/MessageTemplateVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/MessageTemplateVersionProperties](#awswisdommessagetemplateversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Wisdom/QuickResponse@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Wisdom/QuickResponseProperties](#awswisdomquickresponseproperties) (Required, Identifier): properties of the resource

## AgentAttributes
### Properties
* **FirstName**: string: The agent?s first name as entered in their Amazon Connect user account.
* **LastName**: string: The agent?s last name as entered in their Amazon Connect user account.

## AIAgentConfiguration
### Properties

## AIGuardrailContentPolicyConfig
### Properties
* **FiltersConfig**: [GuardrailContentFilterConfig](#guardrailcontentfilterconfig)[] (Required): List of content filter configs in content policy.

## AIGuardrailContextualGroundingPolicyConfig
### Properties
* **FiltersConfig**: [GuardrailContextualGroundingFilterConfig](#guardrailcontextualgroundingfilterconfig)[] (Required): List of contextual grounding filter configs.

## AIGuardrailSensitiveInformationPolicyConfig
### Properties
* **PiiEntitiesConfig**: [GuardrailPiiEntityConfig](#guardrailpiientityconfig)[]: List of entities.
* **RegexesConfig**: [GuardrailRegexConfig](#guardrailregexconfig)[]: List of regex.

## AIGuardrailTopicPolicyConfig
### Properties
* **TopicsConfig**: [GuardrailTopicConfig](#guardrailtopicconfig)[] (Required): List of topic configs in topic policy.

## AIGuardrailWordPolicyConfig
### Properties
* **ManagedWordListsConfig**: [GuardrailManagedWordsConfig](#guardrailmanagedwordsconfig)[]: A config for the list of managed words.
* **WordsConfig**: [GuardrailWordConfig](#guardrailwordconfig)[]: List of custom word configs.

## AIPromptTemplateConfiguration
### Properties

## AssociationData
### Properties

## AWS.Wisdom/AIAgentProperties
### Properties
* **AIAgentArn**: string (ReadOnly)
* **AIAgentId**: string (ReadOnly, Identifier)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Required, Identifier)
* **Configuration**: [AIAgentConfiguration](#aiagentconfiguration) (Required)
* **Description**: string
* **ModifiedTimeSeconds**: int (ReadOnly)
* **Name**: string
* **Tags**: [Tags](#tags)
* **Type**: string (Required)

## AWS.Wisdom/AIAgentVersionProperties
### Properties
* **AIAgentArn**: string (ReadOnly)
* **AIAgentId**: string (Required, Identifier)
* **AIAgentVersionId**: string (ReadOnly)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Required, Identifier)
* **ModifiedTimeSeconds**: int
* **VersionNumber**: int (ReadOnly, Identifier)

## AWS.Wisdom/AIGuardrailProperties
### Properties
* **AIGuardrailArn**: string (ReadOnly)
* **AIGuardrailId**: string (ReadOnly, Identifier)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Required, Identifier)
* **BlockedInputMessaging**: string (Required): Messaging for when violations are detected in text
* **BlockedOutputsMessaging**: string (Required): Messaging for when violations are detected in text
* **ContentPolicyConfig**: [AIGuardrailContentPolicyConfig](#aiguardrailcontentpolicyconfig)
* **ContextualGroundingPolicyConfig**: [AIGuardrailContextualGroundingPolicyConfig](#aiguardrailcontextualgroundingpolicyconfig)
* **Description**: string: Description of the guardrail or its version
* **ModifiedTimeSeconds**: int (ReadOnly)
* **Name**: string
* **SensitiveInformationPolicyConfig**: [AIGuardrailSensitiveInformationPolicyConfig](#aiguardrailsensitiveinformationpolicyconfig)
* **Tags**: [Tags](#tags)
* **TopicPolicyConfig**: [AIGuardrailTopicPolicyConfig](#aiguardrailtopicpolicyconfig)
* **WordPolicyConfig**: [AIGuardrailWordPolicyConfig](#aiguardrailwordpolicyconfig)

## AWS.Wisdom/AIGuardrailVersionProperties
### Properties
* **AIGuardrailArn**: string (ReadOnly)
* **AIGuardrailId**: string (Required, Identifier)
* **AIGuardrailVersionId**: string (ReadOnly)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Required, Identifier)
* **ModifiedTimeSeconds**: int
* **VersionNumber**: int (ReadOnly, Identifier)

## AWS.Wisdom/AIPromptProperties
### Properties
* **AIPromptArn**: string (ReadOnly)
* **AIPromptId**: string (ReadOnly, Identifier)
* **ApiFormat**: string (Required)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Identifier)
* **Description**: string
* **ModelId**: string (Required)
* **ModifiedTimeSeconds**: int (ReadOnly)
* **Name**: string
* **Tags**: [Tags](#tags)
* **TemplateConfiguration**: [AIPromptTemplateConfiguration](#aiprompttemplateconfiguration) (Required)
* **TemplateType**: string (Required)
* **Type**: string (Required)

## AWS.Wisdom/AIPromptVersionProperties
### Properties
* **AIPromptArn**: string (ReadOnly)
* **AIPromptId**: string (Required, Identifier)
* **AIPromptVersionId**: string (ReadOnly)
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (Required, Identifier)
* **ModifiedTimeSeconds**: int
* **VersionNumber**: int (ReadOnly, Identifier)

## AWS.Wisdom/AssistantAssociationProperties
### Properties
* **AssistantArn**: string (ReadOnly)
* **AssistantAssociationArn**: string (ReadOnly)
* **AssistantAssociationId**: string (ReadOnly, Identifier)
* **AssistantId**: string (Required, Identifier)
* **Association**: [AssociationData](#associationdata) (Required)
* **AssociationType**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.Wisdom/AssistantProperties
### Properties
* **AssistantArn**: string (ReadOnly)
* **AssistantId**: string (ReadOnly, Identifier)
* **Description**: string
* **Name**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## AWS.Wisdom/ContentProperties
### Properties
* **ContentArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the content.
* **ContentId**: string (ReadOnly): The identifier of the content.
* **ContentType**: string (ReadOnly): The media type of the content.
* **KnowledgeBaseArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the knowledge base.
* **KnowledgeBaseId**: string (Required): The identifier of the knowledge base.
* **LinkOutUri**: string (ReadOnly): The URI of the content.
* **Metadata**: [Content_Metadata](#contentmetadata): A key/value map to store attributes without affecting tagging or recommendations.
* **Name**: string (Required): The name of the content.
* **OverrideLinkOutUri**: string: The URI you want to use for the article.
* **RevisionId**: string (ReadOnly): The identifier of the content revision.
* **Status**: string (ReadOnly): The status of the content.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource.
* **Title**: string: The title of the content.
* **UploadId**: string (WriteOnly): A pointer to the uploaded asset. This value is returned by StartContentUpload.

## AWS.Wisdom/KnowledgeBaseProperties
### Properties
* **Description**: string
* **KnowledgeBaseArn**: string (ReadOnly)
* **KnowledgeBaseId**: string (ReadOnly, Identifier)
* **KnowledgeBaseType**: string (Required)
* **Name**: string (Required)
* **RenderingConfiguration**: [RenderingConfiguration](#renderingconfiguration)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration)
* **SourceConfiguration**: [SourceConfiguration](#sourceconfiguration)
* **Tags**: [Tag](#tag)[]
* **VectorIngestionConfiguration**: [VectorIngestionConfiguration](#vectoringestionconfiguration)

## AWS.Wisdom/MessageTemplateProperties
### Properties
* **ChannelSubtype**: string (Required)
* **Content**: [Content](#content) (Required)
* **DefaultAttributes**: [MessageTemplateAttributes](#messagetemplateattributes)
* **Description**: string: The description of the message template.
* **GroupingConfiguration**: [GroupingConfiguration](#groupingconfiguration)
* **KnowledgeBaseArn**: string (Required): The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.
* **Language**: string: The language code value for the language in which the message template is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW
* **MessageTemplateArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the message template.
* **MessageTemplateAttachments**: [MessageTemplateAttachment](#messagetemplateattachment)[] (ReadOnly, WriteOnly): List of message template attachments
* **MessageTemplateContentSha256**: string (ReadOnly): The content SHA256 of the message template.
* **MessageTemplateId**: string (ReadOnly): The unique identifier of the message template.
* **Name**: string (Required): The name of the message template.
* **Tags**: [Tag](#tag)[]: The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

## AWS.Wisdom/MessageTemplateVersionProperties
### Properties
* **MessageTemplateArn**: string (Required): The unqualified Amazon Resource Name (ARN) of the message template.
* **MessageTemplateContentSha256**: string: The content SHA256 of the message template.
* **MessageTemplateVersionArn**: string (ReadOnly, Identifier): The unqualified Amazon Resource Name (ARN) of the message template version.
* **MessageTemplateVersionNumber**: int (ReadOnly): Current version number of the message template.

## AWS.Wisdom/QuickResponseProperties
### Properties
* **Channels**: string[]: The Amazon Connect contact channels this quick response applies to.
* **Content**: [QuickResponseContentProvider](#quickresponsecontentprovider) (Required)
* **Contents**: [QuickResponseContents](#quickresponsecontents) (ReadOnly)
* **ContentType**: string: The media type of the quick response content.
- Use application/x.quickresponse;format=plain for quick response written in plain text.
- Use application/x.quickresponse;format=markdown for quick response written in richtext.
* **Description**: string: The description of the quick response.
* **GroupingConfiguration**: [GroupingConfiguration](#groupingconfiguration)
* **IsActive**: bool: Whether the quick response is active.
* **KnowledgeBaseArn**: string (Required): The Amazon Resource Name (ARN) of the knowledge base.
* **Language**: string: The language code value for the language in which the quick response is written. The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW
* **Name**: string (Required): The name of the quick response.
* **QuickResponseArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the quick response.
* **QuickResponseId**: string (ReadOnly): The identifier of the quick response.
* **ShortcutKey**: string: The shortcut key of the quick response. The value should be unique across the knowledge base.
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## BedrockFoundationModelConfiguration
### Properties
* **ModelArn**: string (Required)
* **ParsingPrompt**: [KnowledgeBase_ParsingPrompt](#knowledgebaseparsingprompt)

## Content
### Properties
* **EmailMessageTemplateContent**: [EmailMessageTemplateContent](#emailmessagetemplatecontent)
* **SmsMessageTemplateContent**: [SmsMessageTemplateContent](#smsmessagetemplatecontent)

## Content_Metadata
### Properties

## CustomAttributes
### Properties

## CustomerProfileAttributes
### Properties
* **AccountNumber**: string: A unique account number that you have given to the customer.
* **AdditionalInformation**: string: Any additional information relevant to the customer's profile.
* **Address1**: string: The first line of a customer address.
* **Address2**: string: The second line of a customer address.
* **Address3**: string: The third line of a customer address.
* **Address4**: string: The fourth line of a customer address.
* **BillingAddress1**: string: The first line of a customer?s billing address.
* **BillingAddress2**: string: The second line of a customer?s billing address.
* **BillingAddress3**: string: The third line of a customer?s billing address.
* **BillingAddress4**: string: The fourth line of a customer?s billing address.
* **BillingCity**: string: The city of a customer?s billing address.
* **BillingCountry**: string: The country of a customer?s billing address.
* **BillingCounty**: string: The county of a customer?s billing address.
* **BillingPostalCode**: string: The postal code of a customer?s billing address.
* **BillingProvince**: string: The province of a customer?s billing address.
* **BillingState**: string: The state of a customer?s billing address.
* **BirthDate**: string: The customer's birth date.
* **BusinessEmailAddress**: string: The customer's business email address.
* **BusinessName**: string: The name of the customer's business.
* **BusinessPhoneNumber**: string: The customer's business phone number.
* **City**: string: The city in which a customer lives.
* **Country**: string: The country in which a customer lives.
* **County**: string: The county in which a customer lives.
* **Custom**: [CustomAttributes](#customattributes)
* **EmailAddress**: string: The customer's email address, which has not been specified as a personal or business address.
* **FirstName**: string: The customer's first name.
* **Gender**: string: The customer's gender.
* **HomePhoneNumber**: string: The customer's home phone number.
* **LastName**: string: The customer's last name.
* **MailingAddress1**: string: The first line of a customer?s mailing address.
* **MailingAddress2**: string: The second line of a customer?s mailing address.
* **MailingAddress3**: string: The third line of a customer?s mailing address.
* **MailingAddress4**: string: The fourth line of a customer?s mailing address.
* **MailingCity**: string: The city of a customer?s mailing address.
* **MailingCountry**: string: The country of a customer?s mailing address.
* **MailingCounty**: string: The county of a customer?s mailing address.
* **MailingPostalCode**: string: The postal code of a customer?s mailing address
* **MailingProvince**: string: The province of a customer?s mailing address.
* **MailingState**: string: The state of a customer?s mailing address.
* **MiddleName**: string: The customer's middle name.
* **MobilePhoneNumber**: string: The customer's mobile phone number.
* **PartyType**: string: The customer's party type.
* **PhoneNumber**: string: The customer's phone number, which has not been specified as a mobile, home, or business number.
* **PostalCode**: string: The postal code of a customer address.
* **ProfileARN**: string: The ARN of a customer profile.
* **ProfileId**: string: The unique identifier of a customer profile.
* **Province**: string: The province in which a customer lives.
* **ShippingAddress1**: string: The first line of a customer?s shipping address.
* **ShippingAddress2**: string: The second line of a customer?s shipping address.
* **ShippingAddress3**: string: The third line of a customer?s shipping address.
* **ShippingAddress4**: string: The fourth line of a customer?s shipping address
* **ShippingCity**: string: The city of a customer?s shipping address.
* **ShippingCountry**: string: The country of a customer?s shipping address.
* **ShippingCounty**: string: The county of a customer?s shipping address.
* **ShippingPostalCode**: string: The postal code of a customer?s shipping address.
* **ShippingProvince**: string: The province of a customer?s shipping address.
* **ShippingState**: string: The state of a customer?s shipping address.
* **State**: string: The state in which a customer lives.

## EmailMessageTemplateContent
### Properties
* **Body**: [EmailMessageTemplateContentBody](#emailmessagetemplatecontentbody) (Required)
* **Headers**: [EmailMessageTemplateHeader](#emailmessagetemplateheader)[] (Required): The email headers to include in email messages.
* **Subject**: string (Required): The subject line, or title, to use in email messages.

## EmailMessageTemplateContentBody
### Properties
* **Html**: [MessageTemplateBodyContentProvider](#messagetemplatebodycontentprovider): The message body, in HTML format, to use in email messages that are based on the message template. We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.
* **PlainText**: [MessageTemplateBodyContentProvider](#messagetemplatebodycontentprovider): The message body, in plain text format, to use in email messages that are based on the message template. We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.

## EmailMessageTemplateHeader
### Properties
* **Name**: string: The name of the email header.
* **Value**: string: The value of the email header.

## FixedSizeChunkingConfiguration
### Properties
* **MaxTokens**: int (Required)
* **OverlapPercentage**: int (Required)

## GroupingConfiguration
### Properties
* **Criteria**: string (Required): The criteria used for grouping Amazon Q in Connect users.
* **Values**: string[] (Required): The list of values that define different groups of Amazon Q in Connect users.

## GroupingConfiguration
### Properties
* **Criteria**: string (Required): The criteria used for grouping Amazon Q in Connect users.
* **Values**: string[] (Required): The list of values that define different groups of Amazon Q in Connect users.

## GuardrailContentFilterConfig
### Properties
* **InputStrength**: string (Required)
* **OutputStrength**: string (Required)
* **Type**: string (Required)

## GuardrailContextualGroundingFilterConfig
### Properties
* **Threshold**: int (Required): The threshold for this filter.
* **Type**: string (Required)

## GuardrailManagedWordsConfig
### Properties
* **Type**: string (Required)

## GuardrailPiiEntityConfig
### Properties
* **Action**: string (Required)
* **Type**: string (Required)

## GuardrailRegexConfig
### Properties
* **Action**: string (Required)
* **Description**: string: The regex description.
* **Name**: string (Required): The regex name.
* **Pattern**: string (Required): The regex pattern.

## GuardrailTopicConfig
### Properties
* **Definition**: string (Required): Definition of topic in topic policy
* **Examples**: string[]: List of text examples
* **Name**: string (Required): Name of topic in topic policy
* **Type**: string (Required)

## GuardrailWordConfig
### Properties
* **Text**: string (Required): The custom word text.

## HierarchicalChunkingConfiguration
### Properties
* **LevelConfigurations**: [HierarchicalChunkingLevelConfiguration](#hierarchicalchunkinglevelconfiguration)[] (Required)
* **OverlapTokens**: int (Required)

## HierarchicalChunkingLevelConfiguration
### Properties
* **MaxTokens**: int (Required)

## KnowledgeBase_ChunkingConfiguration
### Properties
* **ChunkingStrategy**: string (Required)
* **FixedSizeChunkingConfiguration**: [FixedSizeChunkingConfiguration](#fixedsizechunkingconfiguration)
* **HierarchicalChunkingConfiguration**: [HierarchicalChunkingConfiguration](#hierarchicalchunkingconfiguration)
* **SemanticChunkingConfiguration**: [SemanticChunkingConfiguration](#semanticchunkingconfiguration)

## KnowledgeBase_ParsingConfiguration
### Properties
* **BedrockFoundationModelConfiguration**: [BedrockFoundationModelConfiguration](#bedrockfoundationmodelconfiguration)
* **ParsingStrategy**: string (Required)

## KnowledgeBase_ParsingPrompt
### Properties
* **ParsingPromptText**: string (Required)

## MessageTemplateAttachment
### Properties
* **AttachmentId**: string
* **AttachmentName**: string (Required)
* **S3PresignedUrl**: string (Required)

## MessageTemplateAttributes
### Properties
* **AgentAttributes**: [AgentAttributes](#agentattributes)
* **CustomAttributes**: [CustomAttributes](#customattributes)
* **CustomerProfileAttributes**: [CustomerProfileAttributes](#customerprofileattributes)
* **SystemAttributes**: [SystemAttributes](#systemattributes)

## MessageTemplateBodyContentProvider
### Properties
* **Content**: string

## QuickResponseContentProvider
### Properties
* **Content**: string: The content of the quick response.

## QuickResponseContents
### Properties
* **Markdown**: [QuickResponseContentProvider](#quickresponsecontentprovider)
* **PlainText**: [QuickResponseContentProvider](#quickresponsecontentprovider)

## RenderingConfiguration
### Properties
* **TemplateUri**: string

## SemanticChunkingConfiguration
### Properties
* **BreakpointPercentileThreshold**: int (Required)
* **BufferSize**: int (Required)
* **MaxTokens**: int (Required)

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## SmsMessageTemplateContent
### Properties
* **Body**: [SmsMessageTemplateContentBody](#smsmessagetemplatecontentbody) (Required)

## SmsMessageTemplateContentBody
### Properties
* **PlainText**: [MessageTemplateBodyContentProvider](#messagetemplatebodycontentprovider)

## SourceConfiguration
### Properties

## SystemAttributes
### Properties
* **CustomerEndpoint**: [SystemEndpointAttributes](#systemendpointattributes): The CustomerEndpoint attribute.
* **Name**: string: The name of the task.
* **SystemEndpoint**: [SystemEndpointAttributes](#systemendpointattributes): The SystemEndpoint attribute.

## SystemEndpointAttributes
### Properties
* **Address**: string: The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

## Tags
### Properties

## Tags
### Properties

## Tags
### Properties

## VectorIngestionConfiguration
### Properties
* **ChunkingConfiguration**: [KnowledgeBase_ChunkingConfiguration](#knowledgebasechunkingconfiguration)
* **ParsingConfiguration**: [KnowledgeBase_ParsingConfiguration](#knowledgebaseparsingconfiguration)

