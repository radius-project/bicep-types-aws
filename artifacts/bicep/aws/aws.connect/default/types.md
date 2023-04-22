# AWS.Connect @ default

## Resource AWS.Connect/ApprovedOrigin@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ApprovedOriginProperties](#awsconnectapprovedoriginproperties) (Required): properties of the resource

## Resource AWS.Connect/ContactFlow@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ContactFlowProperties](#awsconnectcontactflowproperties) (Required): properties of the resource

## Resource AWS.Connect/ContactFlowModule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/ContactFlowModuleProperties](#awsconnectcontactflowmoduleproperties) (Required): properties of the resource

## Resource AWS.Connect/HoursOfOperation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/HoursOfOperationProperties](#awsconnecthoursofoperationproperties) (Required): properties of the resource

## Resource AWS.Connect/Instance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/InstanceProperties](#awsconnectinstanceproperties) (Required): properties of the resource

## Resource AWS.Connect/InstanceStorageConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/InstanceStorageConfigProperties](#awsconnectinstancestorageconfigproperties) (Required): properties of the resource

## Resource AWS.Connect/IntegrationAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/IntegrationAssociationProperties](#awsconnectintegrationassociationproperties) (Required): properties of the resource

## Resource AWS.Connect/PhoneNumber@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/PhoneNumberProperties](#awsconnectphonenumberproperties) (Required): properties of the resource

## Resource AWS.Connect/QuickConnect@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/QuickConnectProperties](#awsconnectquickconnectproperties) (Required): properties of the resource

## Resource AWS.Connect/Rule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/RuleProperties](#awsconnectruleproperties) (Required): properties of the resource

## Resource AWS.Connect/SecurityKey@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/SecurityKeyProperties](#awsconnectsecuritykeyproperties) (Required): properties of the resource

## Resource AWS.Connect/TaskTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/TaskTemplateProperties](#awsconnecttasktemplateproperties) (Required): properties of the resource

## Resource AWS.Connect/User@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/UserProperties](#awsconnectuserproperties) (Required): properties of the resource

## Resource AWS.Connect/UserHierarchyGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Connect/UserHierarchyGroupProperties](#awsconnectuserhierarchygroupproperties) (Required): properties of the resource

## AWS.Connect/ApprovedOriginProperties
### Properties
* **InstanceId**: string (Required, Identifier)
* **Origin**: string (Required, Identifier)

## AWS.Connect/ContactFlowProperties
### Properties
* **ContactFlowArn**: string (ReadOnly, Identifier): The identifier of the contact flow (ARN).
* **Content**: string (Required): The content of the contact flow in JSON format.
* **Description**: string: The description of the contact flow.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance (ARN).
* **Name**: string (Required): The name of the contact flow.
* **State**: string: The state of the contact flow.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **Type**: string (Required): The type of the contact flow.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/ContactFlowModuleProperties
### Properties
* **ContactFlowModuleArn**: string (ReadOnly, Identifier): The identifier of the contact flow module (ARN).
* **Content**: string (Required): The content of the contact flow module in JSON format.
* **Description**: string: The description of the contact flow module.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance (ARN).
* **Name**: string (Required): The name of the contact flow module.
* **State**: string: The state of the contact flow module.
* **Status**: string (ReadOnly): The status of the contact flow module.
* **Tags**: [Tag](#tag)[]: One or more tags.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/HoursOfOperationProperties
### Properties
* **Config**: [HoursOfOperationConfig](#hoursofoperationconfig)[] (Required): Configuration information for the hours of operation: day, start time, and end time.
* **Description**: string: The description of the hours of operation.
* **HoursOfOperationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the hours of operation.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the hours of operation.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TimeZone**: string (Required): The time zone of the hours of operation.

## HoursOfOperationConfig
### Properties
* **Day**: string (Required): The day that the hours of operation applies to.
* **EndTime**: [HoursOfOperationTimeSlice](#hoursofoperationtimeslice) (Required): The end time that your contact center closes.
* **StartTime**: [HoursOfOperationTimeSlice](#hoursofoperationtimeslice) (Required): The start time that your contact center opens.

## HoursOfOperationTimeSlice
### Properties
* **Hours**: int (Required): The hours.
* **Minutes**: int (Required): The minutes.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/InstanceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): An instanceArn is automatically generated on creation based on instanceId.
* **Attributes**: [Attributes](#attributes) (Required): The attributes for the instance.
* **CreatedTime**: string (ReadOnly): Timestamp of instance creation logged as part of instance creation.
* **DirectoryId**: string (WriteOnly): Existing directoryId user wants to map to the new Connect instance.
* **Id**: string (ReadOnly): An instanceId is automatically generated on creation and assigned as the unique identifier.
* **IdentityManagementType**: string (Required): Specifies the type of directory integration for new instance.
* **InstanceAlias**: string: Alias of the new directory created as part of new instance creation.
* **InstanceStatus**: string (ReadOnly): Specifies the creation status of new instance.
* **ServiceRole**: string (ReadOnly): Service linked role created as part of instance creation.

## Attributes
### Properties
* **AutoResolveBestVoices**: bool
* **ContactflowLogs**: bool
* **ContactLens**: bool
* **EarlyMedia**: bool
* **InboundCalls**: bool (Required)
* **OutboundCalls**: bool (Required)
* **UseCustomTTSVoices**: bool

## AWS.Connect/InstanceStorageConfigProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier)
* **InstanceArn**: string (Required, Identifier): Connect Instance ID with which the storage config will be associated
* **KinesisFirehoseConfig**: [KinesisFirehoseConfig](#kinesisfirehoseconfig)
* **KinesisStreamConfig**: [KinesisStreamConfig](#kinesisstreamconfig)
* **KinesisVideoStreamConfig**: [KinesisVideoStreamConfig](#kinesisvideostreamconfig)
* **ResourceType**: string (Required, Identifier)
* **S3Config**: [S3Config](#s3config)
* **StorageType**: string (Required)

## KinesisFirehoseConfig
### Properties
* **FirehoseArn**: string (Required)

## KinesisStreamConfig
### Properties
* **StreamArn**: string (Required)

## KinesisVideoStreamConfig
### Properties
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig)
* **Prefix**: string (Required)
* **RetentionPeriodHours**: int (Required)

## EncryptionConfig
### Properties
* **EncryptionType**: string (Required)
* **KeyId**: string (Required)

## S3Config
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string (Required)
* **EncryptionConfig**: [EncryptionConfig](#encryptionconfig)

## AWS.Connect/IntegrationAssociationProperties
### Properties
* **InstanceId**: string (Required, Identifier)
* **IntegrationArn**: string (Required, Identifier)
* **IntegrationAssociationId**: string (ReadOnly)
* **IntegrationType**: string (Required, Identifier)

## AWS.Connect/PhoneNumberProperties
### Properties
* **Address**: string (ReadOnly): The phone number e164 address.
* **CountryCode**: string (Required): The phone number country code.
* **Description**: string: The description of the phone number.
* **PhoneNumberArn**: string (ReadOnly, Identifier): The phone number ARN
* **Prefix**: string (WriteOnly): The phone number prefix.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TargetArn**: string (Required): The ARN of the target the phone number is claimed to.
* **Type**: string (Required): The phone number type, either TOLL_FREE or DID.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/QuickConnectProperties
### Properties
* **Description**: string: The description of the quick connect.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the quick connect.
* **QuickConnectArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the quick connect.
* **QuickConnectConfig**: [QuickConnectConfig](#quickconnectconfig) (Required): Configuration settings for the quick connect.
* **Tags**: [Tag](#tag)[]: One or more tags.

## QuickConnectConfig
### Properties
* **PhoneConfig**: [PhoneNumberQuickConnectConfig](#phonenumberquickconnectconfig)
* **QueueConfig**: [QueueQuickConnectConfig](#queuequickconnectconfig)
* **QuickConnectType**: string (Required)
* **UserConfig**: [UserQuickConnectConfig](#userquickconnectconfig)

## PhoneNumberQuickConnectConfig
### Properties
* **PhoneNumber**: string (Required)

## QueueQuickConnectConfig
### Properties
* **ContactFlowArn**: string (Required)
* **QueueArn**: string (Required)

## UserQuickConnectConfig
### Properties
* **ContactFlowArn**: string (Required)
* **UserArn**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/RuleProperties
### Properties
* **Actions**: [Actions](#actions) (Required): The list of actions that will be executed when a rule is triggered.
* **Function**: string (Required): The conditions of a rule.
* **InstanceArn**: string (Required): The Amazon Resource Name (ARN) of the instance.
* **Name**: string (Required): The name of the rule.
* **PublishStatus**: string (Required): The publish status of a rule, either draft or published.
* **RuleArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the rule.
* **Tags**: [Tag](#tag)[]: One or more tags.
* **TriggerEventSource**: [RuleTriggerEventSource](#ruletriggereventsource) (Required): The event source that triggers the rule.

## Actions
### Properties
* **AssignContactCategoryActions**: [AssignContactCategoryAction](#assigncontactcategoryaction)[]
* **EventBridgeActions**: [EventBridgeAction](#eventbridgeaction)[]
* **SendNotificationActions**: [SendNotificationAction](#sendnotificationaction)[]
* **TaskActions**: [TaskAction](#taskaction)[]

## AssignContactCategoryAction
### Properties

## EventBridgeAction
### Properties
* **Name**: string (Required): The name of the event bridge action.

## SendNotificationAction
### Properties
* **Content**: string (Required): The content of notification.
* **ContentType**: string (Required): The type of content.
* **DeliveryMethod**: string (Required): The means of delivery.
* **Recipient**: [NotificationRecipientType](#notificationrecipienttype) (Required)
* **Subject**: string: The subject of notification.

## NotificationRecipientType
### Properties
* **UserArns**: string[]: The list of recipients by user arns.
* **UserTags**: [Rule_UserTags](#ruleusertags): The collection of recipients who are identified by user tags

## Rule_UserTags
### Properties

## TaskAction
### Properties
* **ContactFlowArn**: string (Required): The Amazon Resource Name (ARN) of the contact flow.
* **Description**: string: The description which appears in the agent's Contact Control Panel (CCP).
* **Name**: string (Required): The name which appears in the agent's Contact Control Panel (CCP).
* **References**: [Rule_References](#rulereferences): A formatted URL that is shown to an agent in the Contact Control Panel (CCP).

## Rule_References
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that's 1 to 256 characters in length.

## RuleTriggerEventSource
### Properties
* **EventSourceName**: string (Required): The name of event source.
* **IntegrationAssociationArn**: string: The Amazon Resource Name (ARN) for the AppIntegration association.

## AWS.Connect/SecurityKeyProperties
### Properties
* **AssociationId**: string (ReadOnly, Identifier)
* **InstanceId**: string (Required, Identifier)
* **Key**: string (Required)

## AWS.Connect/TaskTemplateProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The identifier (arn) of the task template.
* **ClientToken**: string
* **Constraints**: [TaskTemplate_Constraints](#tasktemplateconstraints): The constraints for the task template
* **ContactFlowArn**: string: The identifier of the contact flow.
* **Defaults**: [DefaultFieldValue](#defaultfieldvalue)[]
* **Description**: string: The description of the task template.
* **Fields**: [Field](#field)[]: The list of task template's fields
* **InstanceArn**: string (Required): The identifier (arn) of the instance.
* **Name**: string: The name of the task template.
* **Status**: string
* **Tags**: [Tag](#tag)[]: One or more tags.

## TaskTemplate_Constraints
### Properties
* **InvisibleFields**: [InvisibleFieldInfo](#invisiblefieldinfo)[]
* **ReadOnlyFields**: [ReadOnlyFieldInfo](#readonlyfieldinfo)[]
* **RequiredFields**: [RequiredFieldInfo](#requiredfieldinfo)[]

## InvisibleFieldInfo
### Properties
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## FieldIdentifier
### Properties
* **Name**: string (Required): The name of the task template field

## ReadOnlyFieldInfo
### Properties
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## RequiredFieldInfo
### Properties
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## DefaultFieldValue
### Properties
* **DefaultValue**: string (Required)
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)

## Field
### Properties
* **Description**: string: The description of the task template's field
* **Id**: [FieldIdentifier](#fieldidentifier) (Required)
* **SingleSelectOptions**: string[]: list of field options to be used with single select
* **Type**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. . You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Connect/UserProperties
### Properties
* **DirectoryUserId**: string: The identifier of the user account in the directory used for identity management.
* **HierarchyGroupArn**: string: The identifier of the hierarchy group for the user.
* **IdentityInfo**: [UserIdentityInfo](#useridentityinfo): The information about the identity of the user.
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Password**: string (WriteOnly): The password for the user account. A password is required if you are using Amazon Connect for identity management. Otherwise, it is an error to include a password.
* **PhoneConfig**: [UserPhoneConfig](#userphoneconfig) (Required): The phone settings for the user.
* **RoutingProfileArn**: string (Required): The identifier of the routing profile for the user.
* **SecurityProfileArns**: string[] (Required): One or more security profile arns for the user
* **Tags**: [Tag](#tag)[]: One or more tags.
* **UserArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the user.
* **Username**: string (Required): The user name for the account.

## UserIdentityInfo
### Properties
* **Email**: string
* **FirstName**: string
* **LastName**: string
* **Mobile**: string
* **SecondaryEmail**: string

## UserPhoneConfig
### Properties
* **AfterContactWorkTimeLimit**: int
* **AutoAccept**: bool
* **DeskPhoneNumber**: string
* **PhoneType**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string (Required): The value for the tag. You can specify a value that is maximum of 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## AWS.Connect/UserHierarchyGroupProperties
### Properties
* **InstanceArn**: string (Required): The identifier of the Amazon Connect instance.
* **Name**: string (Required): The name of the user hierarchy group.
* **ParentGroupArn**: string: The Amazon Resource Name (ARN) for the parent user hierarchy group.
* **UserHierarchyGroupArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the user hierarchy group.

