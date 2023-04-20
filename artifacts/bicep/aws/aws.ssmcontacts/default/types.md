# AWS.SSMContacts @ default

## Resource AWS.SSMContacts/Contact@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMContacts/ContactProperties](#awsssmcontactscontactproperties) (Required): properties of the resource

## Resource AWS.SSMContacts/ContactChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMContacts/ContactChannelProperties](#awsssmcontactscontactchannelproperties) (Required): properties of the resource

## Resource AWS.SSMContacts/Plan@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMContacts/PlanProperties](#awsssmcontactsplanproperties) (Required): properties of the resource

## Resource AWS.SSMContacts/Rotation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSMContacts/RotationProperties](#awsssmcontactsrotationproperties) (Required): properties of the resource

## AWS.SSMContacts/ContactProperties
### Properties
* **Alias**: string (Required): Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the contact.
* **DisplayName**: string (Required): Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
* **Plan**: [Stage](#stage)[] (WriteOnly): The stages that an escalation plan or engagement plan engages contacts and contact methods in.
* **Type**: string (Required): Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.

## Stage
### Properties
* **DurationInMinutes**: int: The time to wait until beginning the next stage.
* **RotationIds**: string[]: List of Rotation Ids to associate with Contact
* **Targets**: [Targets](#targets)[]: The contacts or contact methods that the escalation plan or engagement plan is engaging.

## Targets
### Properties
* **ChannelTargetInfo**: [ChannelTargetInfo](#channeltargetinfo)
* **ContactTargetInfo**: [ContactTargetInfo](#contacttargetinfo)

## ChannelTargetInfo
### Properties
* **ChannelId**: string (Required): The Amazon Resource Name (ARN) of the contact channel.
* **RetryIntervalInMinutes**: int (Required): The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

## ContactTargetInfo
### Properties
* **ContactId**: string (Required): The Amazon Resource Name (ARN) of the contact.
* **IsEssential**: bool (Required): A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

## AWS.SSMContacts/ContactChannelProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the engagement to a contact channel.
* **ChannelAddress**: string (Required): The details that SSM Incident Manager uses when trying to engage the contact channel.
* **ChannelName**: string (Required): The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.
* **ChannelType**: string (Required): Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.
* **ContactId**: string (Required): ARN of the contact resource
* **DeferActivation**: bool (WriteOnly): If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.

## AWS.SSMContacts/PlanProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the contact.
* **ContactId**: string (Required): Contact ID for the AWS SSM Incident Manager Contact to associate the plan.
* **RotationIds**: string[] (WriteOnly): Rotation Ids to associate with Oncall Contact for engagement.
* **Stages**: [Stage](#stage)[]: The stages that an escalation plan or engagement plan engages contacts and contact methods in.

## Stage
### Properties
* **DurationInMinutes**: int (Required): The time to wait until beginning the next stage.
* **Targets**: [Targets](#targets)[]: The contacts or contact methods that the escalation plan or engagement plan is engaging.

## Targets
### Properties
* **ChannelTargetInfo**: [ChannelTargetInfo](#channeltargetinfo)
* **ContactTargetInfo**: [ContactTargetInfo](#contacttargetinfo)

## ChannelTargetInfo
### Properties
* **ChannelId**: string (Required): The Amazon Resource Name (ARN) of the contact channel.
* **RetryIntervalInMinutes**: int (Required): The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

## ContactTargetInfo
### Properties
* **ContactId**: string (Required): The Amazon Resource Name (ARN) of the contact.
* **IsEssential**: bool (Required): A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

## AWS.SSMContacts/RotationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the rotation.
* **ContactIds**: string[] (Required): Members of the rotation
* **Name**: string (Required): Name of the Rotation
* **Recurrence**: [RecurrenceSettings](#recurrencesettings) (Required)
* **StartTime**: string (Required): Start time of the first shift of Oncall Schedule
* **Tags**: [Tag](#tag)[]
* **TimeZoneId**: string (Required): TimeZone Identifier for the Oncall Schedule

## RecurrenceSettings
### Properties
* **DailySettings**: string[]: Information about on-call rotations that recur daily.
* **MonthlySettings**: [MonthlySetting](#monthlysetting)[]: Information about on-call rotations that recur monthly.
* **NumberOfOnCalls**: int (Required): Number of Oncalls per shift.
* **RecurrenceMultiplier**: int (Required): The number of days, weeks, or months a single rotation lasts.
* **ShiftCoverages**: [ShiftCoverage](#shiftcoverage)[]: Information about the days of the week included in on-call rotation coverage.
* **WeeklySettings**: [WeeklySetting](#weeklysetting)[]: Information about on-call rotations that recur weekly.

## MonthlySetting
### Properties
* **DayOfMonth**: int (Required): The day of the month when monthly recurring on-call rotations begin.
* **HandOffTime**: string (Required)

## ShiftCoverage
### Properties
* **CoverageTimes**: [CoverageTime](#coveragetime)[] (Required): Information about when an on-call shift begins and ends.
* **DayOfWeek**: string (Required)

## CoverageTime
### Properties
* **EndTime**: string (Required)
* **StartTime**: string (Required)

## WeeklySetting
### Properties
* **DayOfWeek**: string (Required)
* **HandOffTime**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag
* **Value**: string (Required): The value for the tag.

