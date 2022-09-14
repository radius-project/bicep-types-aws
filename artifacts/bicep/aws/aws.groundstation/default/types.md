# AWS.GroundStation @ default

## Resource AWS.GroundStation/Config@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.GroundStation/ConfigProperties](#awsgroundstationconfigproperties) (Required): properties of the resource

## Resource AWS.GroundStation/MissionProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.GroundStation/MissionProfileProperties](#awsgroundstationmissionprofileproperties) (Required): properties of the resource

## AWS.GroundStation/ConfigProperties
### Properties
* **Arn**: string (ReadOnly)
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
* **Polarization**: [Polarization](#polarization)

## FrequencyBandwidth
### Properties
* **Units**: [BandwidthUnits](#bandwidthunits)
* **Value**: int

## BandwidthUnits
### Properties

## Frequency
### Properties
* **Units**: [FrequencyUnits](#frequencyunits)
* **Value**: int

## FrequencyUnits
### Properties

## Polarization
### Properties

## AntennaDownlinkDemodDecodeConfig
### Properties
* **DecodeConfig**: [DecodeConfig](#decodeconfig)
* **DemodulationConfig**: [DemodulationConfig](#demodulationconfig)
* **SpectrumConfig**: [SpectrumConfig](#spectrumconfig)

## DecodeConfig
### Properties
* **UnvalidatedJSON**: [JsonString](#jsonstring)

## JsonString
### Properties

## DemodulationConfig
### Properties
* **UnvalidatedJSON**: [JsonString](#jsonstring)

## AntennaUplinkConfig
### Properties
* **SpectrumConfig**: [UplinkSpectrumConfig](#uplinkspectrumconfig)
* **TargetEirp**: [Eirp](#eirp)
* **TransmitDisabled**: bool

## UplinkSpectrumConfig
### Properties
* **CenterFrequency**: [Frequency](#frequency)
* **Polarization**: [Polarization](#polarization)

## Eirp
### Properties
* **Units**: [EirpUnits](#eirpunits)
* **Value**: int

## EirpUnits
### Properties

## DataflowEndpointConfig
### Properties
* **DataflowEndpointName**: string
* **DataflowEndpointRegion**: string

## S3RecordingConfig
### Properties
* **BucketArn**: [BucketArn](#bucketarn)
* **Prefix**: [S3KeyPrefix](#s3keyprefix)
* **RoleArn**: [RoleArn](#rolearn)

## BucketArn
### Properties

## S3KeyPrefix
### Properties

## RoleArn
### Properties

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
* **Arn**: string (ReadOnly)
* **ContactPostPassDurationSeconds**: int: Post-pass time needed after the contact.
* **ContactPrePassDurationSeconds**: int: Pre-pass time needed before the contact.
* **DataflowEdges**: [DataflowEdge](#dataflowedge)[] (Required)
* **Id**: string (ReadOnly)
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

