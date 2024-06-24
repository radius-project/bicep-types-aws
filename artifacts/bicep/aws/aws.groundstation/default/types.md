# AWS.GroundStation @ default

## Resource AWS.GroundStation/Config@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GroundStation/ConfigProperties](#awsgroundstationconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.GroundStation/MissionProfile@default
* **Valid Scope(s)**: Unknown
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
* **TrackingConfigArn**: string (Required)

## ConfigData
### Properties
* **AntennaDownlinkConfig**: [AntennaDownlinkConfig](#antennadownlinkconfig)
* **AntennaDownlinkDemodDecodeConfig**: [AntennaDownlinkDemodDecodeConfig](#antennadownlinkdemoddecodeconfig)
* **AntennaUplinkConfig**: [AntennaUplinkConfig](#antennauplinkconfig)
* **DataflowEndpointConfig**: [DataflowEndpointConfig](#dataflowendpointconfig)
* **S3RecordingConfig**: [S3RecordingConfig](#s3recordingconfig)
* **TrackingConfig**: [TrackingConfig](#trackingconfig)
* **UplinkEchoConfig**: [UplinkEchoConfig](#uplinkechoconfig)

## DataflowEdge
### Properties
* **Destination**: string
* **Source**: string

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

## Eirp
### Properties
* **Units**: string
* **Value**: int

## Frequency
### Properties
* **Units**: string
* **Value**: int

## FrequencyBandwidth
### Properties
* **Units**: string
* **Value**: int

## S3RecordingConfig
### Properties
* **BucketArn**: string
* **Prefix**: string
* **RoleArn**: string

## SpectrumConfig
### Properties
* **Bandwidth**: [FrequencyBandwidth](#frequencybandwidth)
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: string

## StreamsKmsKey
### Properties
* **KmsAliasArn**: string
* **KmsKeyArn**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TrackingConfig
### Properties
* **Autotrack**: string

## UplinkEchoConfig
### Properties
* **AntennaUplinkConfigArn**: string
* **Enabled**: bool

## UplinkSpectrumConfig
### Properties
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: string

