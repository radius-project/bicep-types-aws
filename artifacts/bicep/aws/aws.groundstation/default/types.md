# AWS.GroundStation @ default

## Resource AWS.GroundStation/Config@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/ConfigProperties](#awsgroundstationconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.GroundStation/DataflowEndpointGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/DataflowEndpointGroupProperties](#awsgroundstationdataflowendpointgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.GroundStation/DataflowEndpointGroupV2@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/DataflowEndpointGroupV2Properties](#awsgroundstationdataflowendpointgroupv2properties) (Identifier): properties of the resource

## Resource AWS.GroundStation/MissionProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/MissionProfileProperties](#awsgroundstationmissionprofileproperties) (Required, Identifier): properties of the resource

## AntennaDownlinkConfig
### Properties
* **SpectrumConfig**: [SpectrumConfig](#spectrumconfig)

## AntennaDownlinkDemodDecodeConfig
### Properties
* **DecodeConfig**: [DecodeConfig](#decodeconfig)
* **DemodulationConfig**: [DemodulationConfig](#demodulationconfig)
* **SpectrumConfig**: [SpectrumConfig](#spectrumconfig)

## AntennaUplinkConfig
### Properties
* **SpectrumConfig**: [UplinkSpectrumConfig](#uplinkspectrumconfig)
* **TargetEirp**: [Eirp](#eirp)
* **TransmitDisabled**: bool

## AWS.GroundStation/ConfigProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ConfigData**: [ConfigData](#configdata) (Required)
* **Id**: string (ReadOnly)
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **Type**: string (ReadOnly)

## AWS.GroundStation/DataflowEndpointGroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **ContactPostPassDurationSeconds**: int: Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
* **ContactPrePassDurationSeconds**: int: Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
* **EndpointDetails**: [EndpointDetails](#endpointdetails)[] (Required)
* **Id**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.GroundStation/DataflowEndpointGroupV2Properties
### Properties
* **Arn**: string (ReadOnly)
* **ContactPostPassDurationSeconds**: int: Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.
* **ContactPrePassDurationSeconds**: int: Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.
* **EndpointDetails**: [EndpointDetails](#endpointdetails)[] (ReadOnly)
* **Endpoints**: [CreateEndpointDetails](#createendpointdetails)[] (WriteOnly)
* **Id**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.GroundStation/MissionProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ContactPostPassDurationSeconds**: int: Post-pass time needed after the contact.
* **ContactPrePassDurationSeconds**: int: Pre-pass time needed before the contact.
* **DataflowEdges**: [DataflowEdge](#dataflowedge)[] (Required)
* **Id**: string (ReadOnly, Identifier)
* **MinimumViableContactDurationSeconds**: int (Required): Visibilities with shorter duration than the specified minimum viable contact duration will be ignored when searching for available contacts.
* **Name**: string (Required): A name used to identify a mission profile.
* **Region**: string (ReadOnly)
* **StreamsKmsKey**: [StreamsKmsKey](#streamskmskey): The ARN of a KMS Key used for encrypting data during transmission from the source to destination locations.
* **StreamsKmsRole**: string: The ARN of the KMS Key or Alias Key role used to define permissions on KMS Key usage.
* **Tags**: [Tag](#tag)[]
* **TelemetrySinkConfigArn**: string: ARN of a Config resource of type TelemetrySinkConfig used for telemetry data sink configuration.
* **TrackingConfigArn**: string (Required)

## AwsGroundStationAgentEndpoint
### Properties
* **AgentStatus**: string
* **AuditResults**: string
* **EgressAddress**: [ConnectionDetails](#connectiondetails)
* **IngressAddress**: [RangedConnectionDetails](#rangedconnectiondetails)
* **Name**: string

## ConfigData
### Properties
* **AntennaDownlinkConfig**: [AntennaDownlinkConfig](#antennadownlinkconfig)
* **AntennaDownlinkDemodDecodeConfig**: [AntennaDownlinkDemodDecodeConfig](#antennadownlinkdemoddecodeconfig)
* **AntennaUplinkConfig**: [AntennaUplinkConfig](#antennauplinkconfig)
* **DataflowEndpointConfig**: [DataflowEndpointConfig](#dataflowendpointconfig)
* **S3RecordingConfig**: [S3RecordingConfig](#s3recordingconfig)
* **TelemetrySinkConfig**: [TelemetrySinkConfig](#telemetrysinkconfig)
* **TrackingConfig**: [TrackingConfig](#trackingconfig)
* **UplinkEchoConfig**: [UplinkEchoConfig](#uplinkechoconfig)

## ConnectionDetails
### Properties
* **Mtu**: int: Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
* **SocketAddress**: [SocketAddress](#socketaddress)

## ConnectionDetails
### Properties
* **Mtu**: int: Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
* **SocketAddress**: [SocketAddress](#socketaddress) (Required)

## CreateEndpointDetails
### Properties
* **DownlinkAwsGroundStationAgentEndpoint**: [DownlinkAwsGroundStationAgentEndpoint](#downlinkawsgroundstationagentendpoint)
* **UplinkAwsGroundStationAgentEndpoint**: [UplinkAwsGroundStationAgentEndpoint](#uplinkawsgroundstationagentendpoint)

## DataflowEdge
### Properties
* **Destination**: string
* **Source**: string

## DataflowEndpoint
### Properties
* **Address**: [SocketAddress](#socketaddress)
* **Mtu**: int
* **Name**: string

## DataflowEndpointConfig
### Properties
* **DataflowEndpointName**: string
* **DataflowEndpointRegion**: string

## DecodeConfig
### Properties
* **UnvalidatedJSON**: string

## DemodulationConfig
### Properties
* **UnvalidatedJSON**: string

## DownlinkAwsGroundStationAgentEndpoint
### Properties
* **DataflowDetails**: [DownlinkDataflowDetails](#downlinkdataflowdetails) (Required)
* **Name**: string (Required)

## DownlinkAwsGroundStationAgentEndpointDetails
### Properties
* **AgentStatus**: string
* **AuditResults**: string
* **DataflowDetails**: [DownlinkDataflowDetails](#downlinkdataflowdetails) (Required)
* **Name**: string (Required)

## DownlinkConnectionDetails
### Properties
* **AgentIpAndPortAddress**: [RangedConnectionDetails](#rangedconnectiondetails) (Required)
* **EgressAddressAndPort**: [ConnectionDetails](#connectiondetails) (Required)

## DownlinkDataflowDetails
### Properties
* **AgentConnectionDetails**: [DownlinkConnectionDetails](#downlinkconnectiondetails) (Required)

## Eirp
### Properties
* **Units**: string
* **Value**: int

## EndpointDetails
### Properties
* **AwsGroundStationAgentEndpoint**: [AwsGroundStationAgentEndpoint](#awsgroundstationagentendpoint)
* **Endpoint**: [DataflowEndpoint](#dataflowendpoint)
* **SecurityDetails**: [SecurityDetails](#securitydetails)

## EndpointDetails
### Properties
* **DownlinkAwsGroundStationAgentEndpoint**: [DownlinkAwsGroundStationAgentEndpointDetails](#downlinkawsgroundstationagentendpointdetails)
* **UplinkAwsGroundStationAgentEndpoint**: [UplinkAwsGroundStationAgentEndpointDetails](#uplinkawsgroundstationagentendpointdetails)

## Frequency
### Properties
* **Units**: string
* **Value**: int

## FrequencyBandwidth
### Properties
* **Units**: string
* **Value**: int

## IntegerRange
### Properties
* **Maximum**: int: A maximum value.
* **Minimum**: int: A minimum value.

## IntegerRange
### Properties
* **Maximum**: int (Required): A maximum value.
* **Minimum**: int (Required): A minimum value.

## KinesisDataStreamData
### Properties
* **KinesisDataStreamArn**: string (Required)
* **KinesisRoleArn**: string (Required)

## RangedConnectionDetails
### Properties
* **Mtu**: int: Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
* **SocketAddress**: [RangedSocketAddress](#rangedsocketaddress)

## RangedConnectionDetails
### Properties
* **Mtu**: int: Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
* **SocketAddress**: [RangedSocketAddress](#rangedsocketaddress) (Required)

## RangedSocketAddress
### Properties
* **Name**: string: IPv4 socket address.
* **PortRange**: [IntegerRange](#integerrange): Port range of a socket address.

## RangedSocketAddress
### Properties
* **Name**: string (Required): IPv4 socket address.
* **PortRange**: [IntegerRange](#integerrange) (Required): Port range of a socket address.

## S3RecordingConfig
### Properties
* **BucketArn**: string
* **Prefix**: string
* **RoleArn**: string

## SecurityDetails
### Properties
* **RoleArn**: string
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]

## SocketAddress
### Properties
* **Name**: string
* **Port**: int

## SocketAddress
### Properties
* **Name**: string (Required): IPv4 socket address.
* **Port**: int (Required): Port of a socket address.

## SpectrumConfig
### Properties
* **Bandwidth**: [FrequencyBandwidth](#frequencybandwidth)
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: string

## StreamsKmsKey
### Properties
* **KmsAliasArn**: string
* **KmsAliasName**: string
* **KmsKeyArn**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

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

## TelemetrySinkConfig
### Properties
* **TelemetrySinkData**: [TelemetrySinkData](#telemetrysinkdata) (Required)
* **TelemetrySinkType**: string (Required)

## TelemetrySinkData
### Properties
* **KinesisDataStreamData**: [KinesisDataStreamData](#kinesisdatastreamdata) (Required)

## TrackingConfig
### Properties
* **Autotrack**: string

## UplinkAwsGroundStationAgentEndpoint
### Properties
* **DataflowDetails**: [UplinkDataflowDetails](#uplinkdataflowdetails) (Required)
* **Name**: string (Required)

## UplinkAwsGroundStationAgentEndpointDetails
### Properties
* **AgentStatus**: string
* **AuditResults**: string
* **DataflowDetails**: [UplinkDataflowDetails](#uplinkdataflowdetails) (Required)
* **Name**: string (Required)

## UplinkConnectionDetails
### Properties
* **AgentIpAndPortAddress**: [RangedConnectionDetails](#rangedconnectiondetails) (Required)
* **IngressAddressAndPort**: [ConnectionDetails](#connectiondetails) (Required)

## UplinkDataflowDetails
### Properties
* **AgentConnectionDetails**: [UplinkConnectionDetails](#uplinkconnectiondetails) (Required)

## UplinkEchoConfig
### Properties
* **AntennaUplinkConfigArn**: string
* **Enabled**: bool

## UplinkSpectrumConfig
### Properties
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: string

