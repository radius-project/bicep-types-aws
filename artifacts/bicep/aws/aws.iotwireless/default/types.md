# AWS.IoTWireless @ default

## Resource AWS.IoTWireless/Destination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/DestinationProperties](#awsiotwirelessdestinationproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTWireless/DeviceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/DeviceProfileProperties](#awsiotwirelessdeviceprofileproperties) (Identifier): properties of the resource

## Resource AWS.IoTWireless/FuotaTask@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/FuotaTaskProperties](#awsiotwirelessfuotataskproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTWireless/MulticastGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/MulticastGroupProperties](#awsiotwirelessmulticastgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTWireless/NetworkAnalyzerConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/NetworkAnalyzerConfigurationProperties](#awsiotwirelessnetworkanalyzerconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTWireless/ServiceProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/ServiceProfileProperties](#awsiotwirelessserviceprofileproperties) (Identifier): properties of the resource

## Resource AWS.IoTWireless/TaskDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/TaskDefinitionProperties](#awsiotwirelesstaskdefinitionproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTWireless/WirelessDevice@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/WirelessDeviceProperties](#awsiotwirelesswirelessdeviceproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTWireless/WirelessGateway@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTWireless/WirelessGatewayProperties](#awsiotwirelesswirelessgatewayproperties) (Required, Identifier): properties of the resource

## AbpV10x
### Properties
* **DevAddr**: string (Required)
* **SessionKeys**: [SessionKeysAbpV10x](#sessionkeysabpv10x) (Required)

## AbpV11
### Properties
* **DevAddr**: string (Required)
* **SessionKeys**: [SessionKeysAbpV11](#sessionkeysabpv11) (Required)

## Application
### Properties
* **DestinationName**: string: The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.
* **FPort**: int: The Fport value.
* **Type**: string: Application type, which can be specified to obtain real-time position information of your LoRaWAN device.

## AWS.IoTWireless/DestinationProperties
### Properties
* **Arn**: string (ReadOnly): Destination arn. Returned after successful create.
* **Description**: string: Destination description
* **Expression**: string (Required): Destination expression
* **ExpressionType**: string (Required): Must be RuleName
* **Name**: string (Required, Identifier): Unique name of destination
* **RoleArn**: string: AWS role ARN that grants access
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the destination.

## AWS.IoTWireless/DeviceProfileProperties
### Properties
* **Arn**: string (ReadOnly): Service profile Arn. Returned after successful create.
* **Id**: string (ReadOnly, Identifier): Service profile Id. Returned after successful create.
* **LoRaWAN**: [LoRaWANDeviceProfile](#lorawandeviceprofile): LoRaWANDeviceProfile supports all LoRa specific attributes for service profile for CreateDeviceProfile operation
* **Name**: string: Name of service profile
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the device profile.

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
* **Id**: string (ReadOnly, Identifier): FUOTA task id. Returned after successful create.
* **LoRaWAN**: [LoRaWAN](#lorawan) (Required): FUOTA task LoRaWAN
* **Name**: string: Name of FUOTA task
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the FUOTA task.

## AWS.IoTWireless/MulticastGroupProperties
### Properties
* **Arn**: string (ReadOnly): Multicast group arn. Returned after successful create.
* **AssociateWirelessDevice**: string: Wireless device to associate. Only for update request.
* **Description**: string: Multicast group description
* **DisassociateWirelessDevice**: string: Wireless device to disassociate. Only for update request.
* **Id**: string (ReadOnly, Identifier): Multicast group id. Returned after successful create.
* **LoRaWAN**: [LoRaWAN](#lorawan) (Required): Multicast group LoRaWAN
* **Name**: string: Name of Multicast group
* **Status**: string (ReadOnly): Multicast group status. Returned after successful read.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the Multicast group.

## AWS.IoTWireless/NetworkAnalyzerConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): Arn for network analyzer configuration, Returned upon successful create.
* **Description**: string: The description of the new resource
* **Name**: string (Required, Identifier): Name of the network analyzer configuration
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TraceContent**: [NetworkAnalyzerConfiguration_TraceContent](#networkanalyzerconfigurationtracecontent): Trace content for your wireless gateway and wireless device resources
* **WirelessDevices**: string[]: List of wireless gateway resources that have been added to the network analyzer configuration
* **WirelessGateways**: string[]: List of wireless gateway resources that have been added to the network analyzer configuration

## AWS.IoTWireless/ServiceProfileProperties
### Properties
* **Arn**: string (ReadOnly): Service profile Arn. Returned after successful create.
* **Id**: string (ReadOnly, Identifier): Service profile Id. Returned after successful create.
* **LoRaWAN**: [LoRaWANServiceProfile](#lorawanserviceprofile): LoRaWAN supports all LoRa specific attributes for service profile for CreateServiceProfile operation
* **Name**: string: Name of service profile
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the service profile.

## AWS.IoTWireless/TaskDefinitionProperties
### Properties
* **Arn**: string (ReadOnly): TaskDefinition arn. Returned after successful create.
* **AutoCreateTasks**: bool (Required): Whether to automatically create tasks using this task definition for all gateways with the specified current version. If false, the task must me created by calling CreateWirelessGatewayTask.
* **Id**: string (ReadOnly, Identifier): The ID of the new wireless gateway task definition
* **LoRaWANUpdateGatewayTaskEntry**: [LoRaWANUpdateGatewayTaskEntry](#lorawanupdategatewaytaskentry): The list of task definitions.
* **Name**: string: The name of the new resource.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the destination.
* **TaskDefinitionType**: string: A filter to list only the wireless gateway task definitions that use this task definition type
* **Update**: [UpdateWirelessGatewayTaskCreate](#updatewirelessgatewaytaskcreate): Information about the gateways to update.

## AWS.IoTWireless/WirelessDeviceProperties
### Properties
* **Arn**: string (ReadOnly): Wireless device arn. Returned after successful create.
* **Description**: string: Wireless device description
* **DestinationName**: string (Required): Wireless device destination name
* **Id**: string (ReadOnly, Identifier): Wireless device Id. Returned after successful create.
* **LastUplinkReceivedAt**: string: The date and time when the most recent uplink was received.
* **LoRaWAN**: [LoRaWANDevice](#lorawandevice): The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.
* **Name**: string: Wireless device name
* **Positioning**: string: FPort values for the GNSS, stream, and ClockSync functions of the positioning information.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the device. Currently not supported, will not create if tags are passed.
* **ThingArn**: string: Thing arn. Passed into update to associate Thing with Wireless device.
* **ThingName**: string (ReadOnly): Thing Arn. If there is a Thing created, this can be returned with a Get call.
* **Type**: string (Required): Wireless device type, currently only Sidewalk and LoRa

## AWS.IoTWireless/WirelessGatewayProperties
### Properties
* **Arn**: string (ReadOnly): Arn for Wireless Gateway. Returned upon successful create.
* **Description**: string: Description of Wireless Gateway.
* **Id**: string (ReadOnly, Identifier): Id for Wireless Gateway. Returned upon successful create.
* **LastUplinkReceivedAt**: string: The date and time when the most recent uplink was received.
* **LoRaWAN**: [LoRaWANGateway](#lorawangateway) (Required): The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Gateway.
* **Name**: string: Name of Wireless Gateway.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the gateway.
* **ThingArn**: string: Thing Arn. Passed into Update to associate a Thing with the Wireless Gateway.
* **ThingName**: string: Thing Name. If there is a Thing created, this can be returned with a Get call.

## FPorts
### Properties
* **Applications**: [Application](#application)[]: A list of optional LoRaWAN application information, which can be used for geolocation.

## LoRaWAN
### Properties
* **RfRegion**: string (Required): FUOTA task LoRaWAN RF region
* **StartTime**: string (ReadOnly): FUOTA task LoRaWAN start time

## LoRaWAN
### Properties
* **DlClass**: string (Required): Multicast group LoRaWAN DL Class
* **NumberOfDevicesInGroup**: int (ReadOnly): Multicast group number of devices in group. Returned after successful read.
* **NumberOfDevicesRequested**: int (ReadOnly): Multicast group number of devices requested. Returned after successful read.
* **RfRegion**: string (Required): Multicast group LoRaWAN RF region

## LoRaWANDevice
### Properties
* **AbpV10x**: [AbpV10x](#abpv10x)
* **AbpV11**: [AbpV11](#abpv11)
* **DevEui**: string
* **DeviceProfileId**: string
* **FPorts**: [FPorts](#fports)
* **OtaaV10x**: [OtaaV10x](#otaav10x)
* **OtaaV11**: [OtaaV11](#otaav11)
* **ServiceProfileId**: string

## LoRaWANDeviceProfile
### Properties
* **ClassBTimeout**: int
* **ClassCTimeout**: int
* **FactoryPresetFreqsList**: int[]
* **MacVersion**: string
* **MaxDutyCycle**: int
* **MaxEirp**: int
* **PingSlotDr**: int
* **PingSlotFreq**: int
* **PingSlotPeriod**: int
* **RegParamsRevision**: string
* **RfRegion**: string
* **RxDataRate2**: int
* **RxDelay1**: int
* **RxDrOffset1**: int
* **RxFreq2**: int
* **Supports32BitFCnt**: bool
* **SupportsClassB**: bool
* **SupportsClassC**: bool
* **SupportsJoin**: bool

## LoRaWANGateway
### Properties
* **GatewayEui**: string (Required)
* **RfRegion**: string (Required)

## LoRaWANGatewayVersion
### Properties
* **Model**: string
* **PackageVersion**: string
* **Station**: string

## LoRaWANServiceProfile
### Properties
* **AddGwMetadata**: bool
* **ChannelMask**: string (ReadOnly)
* **DevStatusReqFreq**: int (ReadOnly)
* **DlBucketSize**: int (ReadOnly)
* **DlRate**: int (ReadOnly)
* **DlRatePolicy**: string (ReadOnly)
* **DrMax**: int (ReadOnly)
* **DrMin**: int (ReadOnly)
* **HrAllowed**: bool (ReadOnly)
* **MinGwDiversity**: int (ReadOnly)
* **NwkGeoLoc**: bool (ReadOnly)
* **PrAllowed**: bool
* **RaAllowed**: bool
* **ReportDevStatusBattery**: bool (ReadOnly)
* **ReportDevStatusMargin**: bool (ReadOnly)
* **TargetPer**: int (ReadOnly)
* **UlBucketSize**: int (ReadOnly)
* **UlRate**: int (ReadOnly)
* **UlRatePolicy**: string (ReadOnly)

## LoRaWANUpdateGatewayTaskCreate
### Properties
* **CurrentVersion**: [LoRaWANGatewayVersion](#lorawangatewayversion)
* **SigKeyCrc**: int
* **UpdateSignature**: string
* **UpdateVersion**: [LoRaWANGatewayVersion](#lorawangatewayversion)

## LoRaWANUpdateGatewayTaskEntry
### Properties
* **CurrentVersion**: [LoRaWANGatewayVersion](#lorawangatewayversion)
* **UpdateVersion**: [LoRaWANGatewayVersion](#lorawangatewayversion)

## NetworkAnalyzerConfiguration_TraceContent
### Properties
* **LogLevel**: string
* **WirelessDeviceFrameInfo**: string

## OtaaV10x
### Properties
* **AppEui**: string (Required)
* **AppKey**: string (Required)

## OtaaV11
### Properties
* **AppKey**: string (Required)
* **JoinEui**: string (Required)
* **NwkKey**: string (Required)

## SessionKeysAbpV10x
### Properties
* **AppSKey**: string (Required)
* **NwkSKey**: string (Required)

## SessionKeysAbpV11
### Properties
* **AppSKey**: string (Required)
* **FNwkSIntKey**: string (Required)
* **NwkSEncKey**: string (Required)
* **SNwkSIntKey**: string (Required)

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## UpdateWirelessGatewayTaskCreate
### Properties
* **LoRaWAN**: [LoRaWANUpdateGatewayTaskCreate](#lorawanupdategatewaytaskcreate)
* **UpdateDataRole**: string
* **UpdateDataSource**: string

