# AWS.B2BI @ default

## Resource AWS.B2BI/Capability@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/CapabilityProperties](#awsb2bicapabilityproperties) (Required, Identifier): properties of the resource

## Resource AWS.B2BI/Partnership@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/PartnershipProperties](#awsb2bipartnershipproperties) (Required, Identifier): properties of the resource

## Resource AWS.B2BI/Profile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/ProfileProperties](#awsb2biprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.B2BI/Transformer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/TransformerProperties](#awsb2bitransformerproperties) (Required, Identifier): properties of the resource

## AWS.B2BI/CapabilityProperties
### Properties
* **CapabilityArn**: string (ReadOnly)
* **CapabilityId**: string (ReadOnly, Identifier)
* **Configuration**: [CapabilityConfiguration](#capabilityconfiguration) (Required)
* **CreatedAt**: string (ReadOnly)
* **InstructionsDocuments**: [S3Location](#s3location)[]
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **Type**: string (Required)

## AWS.B2BI/PartnershipProperties
### Properties
* **Capabilities**: string[]
* **CreatedAt**: string (ReadOnly)
* **Email**: string (Required)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required)
* **PartnershipArn**: string (ReadOnly)
* **PartnershipId**: string (ReadOnly, Identifier)
* **Phone**: string
* **ProfileId**: string (Required)
* **Tags**: [Tag](#tag)[]
* **TradingPartnerId**: string (ReadOnly)

## AWS.B2BI/ProfileProperties
### Properties
* **BusinessName**: string (Required)
* **CreatedAt**: string (ReadOnly)
* **Email**: string
* **Logging**: string (Required)
* **LogGroupName**: string (ReadOnly)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required)
* **Phone**: string (Required)
* **ProfileArn**: string (ReadOnly)
* **ProfileId**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]

## AWS.B2BI/TransformerProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **EdiType**: [EdiType](#editype) (Required)
* **FileFormat**: string (Required)
* **MappingTemplate**: string (Required)
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required)
* **SampleDocument**: string
* **Status**: string (Required)
* **Tags**: [Tag](#tag)[]
* **TransformerArn**: string (ReadOnly)
* **TransformerId**: string (ReadOnly, Identifier)

## CapabilityConfiguration
### Properties

## EdiType
### Properties

## S3Location
### Properties
* **BucketName**: string
* **Key**: string

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

