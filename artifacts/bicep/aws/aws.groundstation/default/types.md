# AWS.GroundStation @ default

## Resource AWS.GroundStation/Config@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/ConfigProperties](#awsgroundstationconfigproperties) (Required): properties of the resource

## Resource AWS.GroundStation/MissionProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/MissionProfileProperties](#awsgroundstationmissionprofileproperties) (Required): properties of the resource

## AWS.GroundStation/ConfigProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ConfigData**: [ConfigData](#configdata) (Required)
* **Id**: string (ReadOnly)
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **Type**: string (ReadOnly)

## ConfigData
### Properties
* **AntennaDownlinkConfig**: [AntennaDownlinkConfig](#antennadownlinkconfig)
* **AntennaDownlinkDemodDecodeConfig**: [AntennaDownlinkDemodDecodeConfig](#antennadownlinkdemoddecodeconfig)
* **AntennaUplinkConfig**: [AntennaUplinkConfig](#antennauplinkconfig)
* **DataflowEndpointConfig**: [DataflowEndpointConfig](#dataflowendpointconfig)
* **S3RecordingConfig**: [S3RecordingConfig](#s3recordingconfig)
* **TrackingConfig**: [TrackingConfig](#trackingconfig)
* **UplinkEchoConfig**: [UplinkEchoConfig](#uplinkechoconfig)

## AntennaDownlinkConfig
### Properties
* **SpectrumConfig**: [SpectrumConfig](#spectrumconfig)

## SpectrumConfig
### Properties
* **Bandwidth**: [FrequencyBandwidth](#frequencybandwidth)
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: string

## FrequencyBandwidth
### Properties
* **Units**: string
* **Value**: int

## Frequency
### Properties
* **Units**: string
* **Value**: int

## AntennaDownlinkDemodDecodeConfig
### Properties
* **DecodeConfig**: [DecodeConfig](#decodeconfig)
* **DemodulationConfig**: [DemodulationConfig](#demodulationconfig)
* **SpectrumConfig**: [SpectrumConfig](#spectrumconfig)

## DecodeConfig
### Properties
* **UnvalidatedJSON**: string

## DemodulationConfig
### Properties
* **UnvalidatedJSON**: string

## AntennaUplinkConfig
### Properties
* **SpectrumConfig**: [UplinkSpectrumConfig](#uplinkspectrumconfig)
* **TargetEirp**: [Eirp](#eirp)
* **TransmitDisabled**: bool

## UplinkSpectrumConfig
### Properties
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: string

## Eirp
### Properties
* **Units**: string
* **Value**: int

## DataflowEndpointConfig
### Properties
* **DataflowEndpointName**: string
* **DataflowEndpointRegion**: string

## S3RecordingConfig
### Properties
* **BucketArn**: string
* **Prefix**: string
* **RoleArn**: string

## TrackingConfig
### Properties
* **Autotrack**: string

## UplinkEchoConfig
### Properties
* **AntennaUplinkConfigArn**: string
* **Enabled**: bool

## Tag
### Properties
* **Key**: string
* **Value**: string

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
* **Tags**: [Tag](#tag)[]
* **TrackingConfigArn**: string (Required)

## DataflowEdge
### Properties
* **Destination**: string
* **Source**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

