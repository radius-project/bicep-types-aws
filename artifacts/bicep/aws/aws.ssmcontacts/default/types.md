# AWS.SSMContacts @ default

## Resource AWS.SSMContacts/Contact@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSMContacts/ContactProperties](#awsssmcontactscontactproperties): properties of the resource

## Resource AWS.SSMContacts/ContactChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.SSMContacts/ContactChannelProperties](#awsssmcontactscontactchannelproperties): properties of the resource

## AWS.SSMContacts/ContactProperties
### Properties
* **Alias**: string: Alias of the contact. String value with 20 to 256 characters. Only alphabetical, numeric characters, dash, or underscore allowed.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the contact.
* **DisplayName**: string: Name of the contact. String value with 3 to 256 characters. Only alphabetical, space, numeric characters, dash, or underscore allowed.
* **Plan**: [Stage](#stage)[] (WriteOnly): The stages that an escalation plan or engagement plan engages contacts and contact methods in.
* **Type**: string: Contact type, which specify type of contact. Currently supported values: ?PERSONAL?, ?SHARED?, ?OTHER?.

## Stage
### Properties
* **DurationInMinutes**: int: The time to wait until beginning the next stage.
* **Targets**: [Targets](#targets)[]: The contacts or contact methods that the escalation plan or engagement plan is engaging.

## Targets
### Properties
* **ChannelTargetInfo**: [ChannelTargetInfo](#channeltargetinfo)
* **ContactTargetInfo**: [ContactTargetInfo](#contacttargetinfo)

## ChannelTargetInfo
### Properties
* **ChannelId**: string: The Amazon Resource Name (ARN) of the contact channel.
* **RetryIntervalInMinutes**: int: The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

## ContactTargetInfo
### Properties
* **ContactId**: string: The Amazon Resource Name (ARN) of the contact.
* **IsEssential**: bool: A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

## AWS.SSMContacts/ContactChannelProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the engagement to a contact channel.
* **ChannelAddress**: string: The details that SSM Incident Manager uses when trying to engage the contact channel.
* **ChannelName**: string: The device name. String of 6 to 50 alphabetical, numeric, dash, and underscore characters.
* **ChannelType**: string: Device type, which specify notification channel. Currently supported values: ?SMS?, ?VOICE?, ?EMAIL?, ?CHATBOT.
* **ContactId**: string: ARN of the contact resource
* **DeferActivation**: bool: If you want to activate the channel at a later time, you can choose to defer activation. SSM Incident Manager can't engage your contact channel until it has been activated.

