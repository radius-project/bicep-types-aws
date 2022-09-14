# AWS.IoTWireless @ default

## Resource AWS.IoTWireless/Destination@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTWireless/DestinationProperties](#awsiotwirelessdestinationproperties) (Required): properties of the resource

## Resource AWS.IoTWireless/FuotaTask@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTWireless/FuotaTaskProperties](#awsiotwirelessfuotataskproperties) (Required): properties of the resource

## Resource AWS.IoTWireless/MulticastGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTWireless/MulticastGroupProperties](#awsiotwirelessmulticastgroupproperties) (Required): properties of the resource

## Resource AWS.IoTWireless/NetworkAnalyzerConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTWireless/NetworkAnalyzerConfigurationProperties](#awsiotwirelessnetworkanalyzerconfigurationproperties) (Required): properties of the resource

## Resource AWS.IoTWireless/WirelessDevice@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTWireless/WirelessDeviceProperties](#awsiotwirelesswirelessdeviceproperties) (Required): properties of the resource

## Resource AWS.IoTWireless/WirelessGateway@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTWireless/WirelessGatewayProperties](#awsiotwirelesswirelessgatewayproperties) (Required): properties of the resource

## AWS.IoTWireless/DestinationProperties
### Properties
* **Arn**: string (ReadOnly): Destination arn. Returned after successful create.
* **Description**: string: Destination description
* **Expression**: string (Required): Destination expression
* **ExpressionType**: string (Required): Must be RuleName
* **Name**: string (Required): Unique name of destination
* **RoleArn**: string (Required): AWS role ARN that grants access
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the destination.

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoTWireless/FuotaTaskProperties
### Properties
* **Arn**: string (ReadOnly): FUOTA task arn. Returned after successful create.
* **AssociateMulticastGroup**: string: Multicast group to associate. Only for update request.
* **AssociateWirelessDevice**: string: Wireless device to associate. Only for update request.
* **Description**: string: FUOTA task description
* **DisassociateMulticastGroup**: string: Multicast group to disassociate. Only for update request.
* **DisassociateWirelessDevice**: string: Wireless device to disassociate. Only for update request.
* **FirmwareUpdateImage**: string (Required): FUOTA task firmware update image binary S3 link
* **FirmwareUpdateRole**: string (Required): FUOTA task firmware IAM role for reading S3
* **FuotaTaskStatus**: string (ReadOnly): FUOTA task status. Returned after successful read.
* **Id**: string (ReadOnly): FUOTA task id. Returned after successful create.
* **LoRaWAN**: [LoRaWAN](#lorawan) (Required): FUOTA task LoRaWAN
* **Name**: string: Name of FUOTA task
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the FUOTA task.

## LoRaWAN
### Properties
* **RfRegion**: string (Required): FUOTA task LoRaWAN RF region
* **StartTime**: string (ReadOnly): FUOTA task LoRaWAN start time

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoTWireless/MulticastGroupProperties
### Properties
* **Arn**: string (ReadOnly): Multicast group arn. Returned after successful create.
* **AssociateWirelessDevice**: string: Wireless device to associate. Only for update request.
* **Description**: string: Multicast group description
* **DisassociateWirelessDevice**: string: Wireless device to disassociate. Only for update request.
* **Id**: string (ReadOnly): Multicast group id. Returned after successful create.
* **LoRaWAN**: [LoRaWAN](#lorawan) (Required): Multicast group LoRaWAN
* **Name**: string: Name of Multicast group
* **Status**: string (ReadOnly): Multicast group status. Returned after successful read.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the Multicast group.

## LoRaWAN
### Properties
* **DlClass**: string (Required): Multicast group LoRaWAN DL Class
* **NumberOfDevicesInGroup**: int (ReadOnly): Multicast group number of devices in group. Returned after successful read.
* **NumberOfDevicesRequested**: int (ReadOnly): Multicast group number of devices requested. Returned after successful read.
* **RfRegion**: string (Required): Multicast group LoRaWAN RF region

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoTWireless/NetworkAnalyzerConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): Arn for network analyzer configuration, Returned upon successful create.
* **Description**: string: The description of the new resource
* **Name**: string (Required): Name of the network analyzer configuration
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TraceContent**: [NetworkAnalyzerConfiguration_TraceContent](#networkanalyzerconfigurationtracecontent): Trace content for your wireless gateway and wireless device resources
* **WirelessDevices**: string[]: List of wireless gateway resources that have been added to the network analyzer configuration
* **WirelessGateways**: string[]: List of wireless gateway resources that have been added to the network analyzer configuration

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## NetworkAnalyzerConfiguration_TraceContent
### Properties
* **LogLevel**: [LogLevel](#loglevel)
* **WirelessDeviceFrameInfo**: [WirelessDeviceFrameInfo](#wirelessdeviceframeinfo)

## LogLevel
### Properties

## WirelessDeviceFrameInfo
### Properties

## AWS.IoTWireless/WirelessDeviceProperties
### Properties
* **Arn**: string (ReadOnly): Wireless device arn. Returned after successful create.
* **Description**: string: Wireless device description
* **DestinationName**: string (Required): Wireless device destination name
* **Id**: string (ReadOnly): Wireless device Id. Returned after successful create.
* **LastUplinkReceivedAt**: string: The date and time when the most recent uplink was received.
* **LoRaWAN**: [LoRaWANDevice](#lorawandevice): The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.
* **Name**: string: Wireless device name
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.
* **ThingArn**: string: Thing arn. Passed into update to associate Thing with Wireless device.
* **ThingName**: string (ReadOnly): Thing Arn. If there is a Thing created, this can be returned with a Get call.
* **Type**: string (Required): Wireless device type, currently only Sidewalk and LoRa

## LoRaWANDevice
### Properties
* **AbpV10x**: [AbpV10x](#abpv10x)
* **AbpV11**: [AbpV11](#abpv11)
* **DevEui**: string
* **DeviceProfileId**: string
* **OtaaV10x**: [OtaaV10x](#otaav10x)
* **OtaaV11**: [OtaaV11](#otaav11)
* **ServiceProfileId**: string

## AbpV10x
### Properties
* **DevAddr**: string (Required)
* **SessionKeys**: [SessionKeysAbpV10x](#sessionkeysabpv10x) (Required)

## SessionKeysAbpV10x
### Properties
* **AppSKey**: string (Required)
* **NwkSKey**: string (Required)

## AbpV11
### Properties
* **DevAddr**: string (Required)
* **SessionKeys**: [SessionKeysAbpV11](#sessionkeysabpv11) (Required)

## SessionKeysAbpV11
### Properties
* **AppSKey**: string (Required)
* **FNwkSIntKey**: string (Required)
* **NwkSEncKey**: string (Required)
* **SNwkSIntKey**: string (Required)

## OtaaV10x
### Properties
* **AppEui**: string (Required)
* **AppKey**: string (Required)

## OtaaV11
### Properties
* **AppKey**: string (Required)
* **JoinEui**: string (Required)
* **NwkKey**: string (Required)

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoTWireless/WirelessGatewayProperties
### Properties
* **Arn**: string (ReadOnly): Arn for Wireless Gateway. Returned upon successful create.
* **Description**: string: Description of Wireless Gateway.
* **Id**: string (ReadOnly): Id for Wireless Gateway. Returned upon successful create.
* **LastUplinkReceivedAt**: string: The date and time when the most recent uplink was received.
* **LoRaWAN**: [LoRaWANGateway](#lorawangateway) (Required): The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.
* **Name**: string: Name of Wireless Gateway.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the gateway.
* **ThingArn**: string: Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
* **ThingName**: string (ReadOnly): Thing Arn. If there is a Thing created, this can be returned with a Get call.

## LoRaWANGateway
### Properties
* **GatewayEui**: string (Required)
* **RfRegion**: string (Required)

## Tag
### Properties
* **Key**: string
* **Value**: string

