# AWS.ConnectCampaignsV2 @ default

## Resource AWS.ConnectCampaignsV2/Campaign@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ConnectCampaignsV2/CampaignProperties](#awsconnectcampaignsv2campaignproperties) (Required, Identifier): properties of the resource

## AgentlessConfig
### Properties

## AnswerMachineDetectionConfig
### Properties
* **AwaitAnswerMachinePrompt**: bool: Enables detection of prompts (e.g., beep after after a voicemail greeting)
* **EnableAnswerMachineDetection**: bool (Required): Flag to decided whether outbound calls should have answering machine detection enabled or not

## AWS.ConnectCampaignsV2/CampaignProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Amazon Connect Campaign Arn
* **ChannelSubtypeConfig**: [ChannelSubtypeConfig](#channelsubtypeconfig)
* **CommunicationLimitsOverride**: [CommunicationLimitsConfig](#communicationlimitsconfig)
* **CommunicationTimeConfig**: [CommunicationTimeConfig](#communicationtimeconfig)
* **ConnectCampaignFlowArn**: string
* **ConnectInstanceId**: string (Required)
* **EntryLimitsConfig**: [EntryLimitsConfig](#entrylimitsconfig)
* **Name**: string (Required)
* **Schedule**: [Schedule](#schedule)
* **Source**: [Source](#source)
* **Tags**: [Tag](#tag)[]: One or more tags.
* **Type**: string

## ChannelSubtypeConfig
### Properties
* **Email**: [EmailChannelSubtypeConfig](#emailchannelsubtypeconfig)
* **Sms**: [SmsChannelSubtypeConfig](#smschannelsubtypeconfig)
* **Telephony**: [TelephonyChannelSubtypeConfig](#telephonychannelsubtypeconfig)
* **WhatsApp**: [WhatsAppChannelSubtypeConfig](#whatsappchannelsubtypeconfig)

## CommunicationLimit
### Properties
* **Frequency**: int (Required)
* **MaxCountPerRecipient**: int (Required)
* **Unit**: string (Required)

## CommunicationLimits
### Properties
* **CommunicationLimitList**: [CommunicationLimit](#communicationlimit)[]

## CommunicationLimitsConfig
### Properties
* **AllChannelsSubtypes**: [CommunicationLimits](#communicationlimits)
* **InstanceLimitsHandling**: string

## CommunicationTimeConfig
### Properties
* **Email**: [TimeWindow](#timewindow)
* **LocalTimeZoneConfig**: [LocalTimeZoneConfig](#localtimezoneconfig) (Required)
* **Sms**: [TimeWindow](#timewindow)
* **Telephony**: [TimeWindow](#timewindow)
* **WhatsApp**: [TimeWindow](#timewindow)

## DailyHour
### Properties
* **Key**: string
* **Value**: [TimeRange](#timerange)[]

## EmailChannelSubtypeConfig
### Properties
* **Capacity**: int
* **DefaultOutboundConfig**: [EmailOutboundConfig](#emailoutboundconfig) (Required)
* **OutboundMode**: [EmailOutboundMode](#emailoutboundmode) (Required)

## EmailOutboundConfig
### Properties
* **ConnectSourceEmailAddress**: string (Required)
* **SourceEmailAddressDisplayName**: string
* **WisdomTemplateArn**: string (Required)

## EmailOutboundMode
### Properties
* **AgentlessConfig**: [AgentlessConfig](#agentlessconfig)

## EntryLimitsConfig
### Properties
* **MaxEntryCount**: int (Required): Maximum number of entries per participant. 0 indicates unlimited entries.
* **MinEntryInterval**: string (Required): Minimum time interval between entries for the same participant in ISO 8601 duration format

## EventTrigger
### Properties
* **CustomerProfilesDomainArn**: string

## LocalTimeZoneConfig
### Properties
* **DefaultTimeZone**: string
* **LocalTimeZoneDetection**: string[]
* **LocalTimeZoneDetectionScope**: string

## OpenHours
### Properties
* **DailyHours**: [DailyHour](#dailyhour)[] (Required)

## PredictiveConfig
### Properties
* **BandwidthAllocation**: int (Required)

## PreviewConfig
### Properties
* **AgentActions**: string[]
* **BandwidthAllocation**: int (Required)
* **TimeoutConfig**: [TimeoutConfig](#timeoutconfig) (Required)

## ProgressiveConfig
### Properties
* **BandwidthAllocation**: int (Required)

## RestrictedPeriod
### Properties
* **EndDate**: string (Required)
* **Name**: string: The name of a restricted period
* **StartDate**: string (Required)

## RestrictedPeriods
### Properties
* **RestrictedPeriodList**: [RestrictedPeriod](#restrictedperiod)[] (Required)

## Schedule
### Properties
* **EndTime**: string (Required)
* **RefreshFrequency**: string
* **StartTime**: string (Required)

## SmsChannelSubtypeConfig
### Properties
* **Capacity**: int
* **DefaultOutboundConfig**: [SmsOutboundConfig](#smsoutboundconfig) (Required)
* **OutboundMode**: [SmsOutboundMode](#smsoutboundmode) (Required)

## SmsOutboundConfig
### Properties
* **ConnectSourcePhoneNumberArn**: string (Required)
* **WisdomTemplateArn**: string (Required)

## SmsOutboundMode
### Properties
* **AgentlessConfig**: [AgentlessConfig](#agentlessconfig)

## Source
### Properties
* **CustomerProfilesSegmentArn**: string
* **EventTrigger**: [EventTrigger](#eventtrigger)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## TelephonyChannelSubtypeConfig
### Properties
* **Capacity**: int
* **ConnectQueueId**: string
* **DefaultOutboundConfig**: [TelephonyOutboundConfig](#telephonyoutboundconfig) (Required)
* **OutboundMode**: [TelephonyOutboundMode](#telephonyoutboundmode) (Required)

## TelephonyOutboundConfig
### Properties
* **AnswerMachineDetectionConfig**: [AnswerMachineDetectionConfig](#answermachinedetectionconfig)
* **ConnectContactFlowId**: string (Required)
* **ConnectSourcePhoneNumber**: string
* **RingTimeout**: int

## TelephonyOutboundMode
### Properties
* **AgentlessConfig**: [AgentlessConfig](#agentlessconfig)
* **PredictiveConfig**: [PredictiveConfig](#predictiveconfig)
* **PreviewConfig**: [PreviewConfig](#previewconfig)
* **ProgressiveConfig**: [ProgressiveConfig](#progressiveconfig)

## TimeoutConfig
### Properties
* **DurationInSeconds**: int

## TimeRange
### Properties
* **EndTime**: string (Required)
* **StartTime**: string (Required)

## TimeWindow
### Properties
* **OpenHours**: [OpenHours](#openhours) (Required)
* **RestrictedPeriods**: [RestrictedPeriods](#restrictedperiods)

## WhatsAppChannelSubtypeConfig
### Properties
* **Capacity**: int
* **DefaultOutboundConfig**: [WhatsAppOutboundConfig](#whatsappoutboundconfig) (Required)
* **OutboundMode**: [WhatsAppOutboundMode](#whatsappoutboundmode) (Required)

## WhatsAppOutboundConfig
### Properties
* **ConnectSourcePhoneNumberArn**: string (Required)
* **WisdomTemplateArn**: string (Required)

## WhatsAppOutboundMode
### Properties
* **AgentlessConfig**: [AgentlessConfig](#agentlessconfig)

