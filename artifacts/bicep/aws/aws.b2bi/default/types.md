# AWS.B2BI @ default

## Resource AWS.B2BI/Capability@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/CapabilityProperties](#awsb2bicapabilityproperties) (Required, Identifier): properties of the resource

## Resource AWS.B2BI/Partnership@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/PartnershipProperties](#awsb2bipartnershipproperties) (Required, Identifier): properties of the resource

## Resource AWS.B2BI/Profile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/ProfileProperties](#awsb2biprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.B2BI/Transformer@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.B2BI/TransformerProperties](#awsb2bitransformerproperties) (Required, Identifier): properties of the resource

## AdvancedOptions
### Properties
* **X12**: [X12AdvancedOptions](#x12advancedoptions)

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
* **Capabilities**: string[] (Required)
* **CapabilityOptions**: [CapabilityOptions](#capabilityoptions)
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
* **EdiType**: [EdiType](#editype)
* **FileFormat**: string
* **InputConversion**: [InputConversion](#inputconversion)
* **Mapping**: [Mapping](#mapping)
* **MappingTemplate**: string: This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
* **ModifiedAt**: string (ReadOnly)
* **Name**: string (Required)
* **OutputConversion**: [OutputConversion](#outputconversion)
* **SampleDocument**: string: This shape is deprecated: This is a legacy trait. Please use input-conversion or output-conversion.
* **SampleDocuments**: [SampleDocuments](#sampledocuments)
* **Status**: string (Required)
* **Tags**: [Tag](#tag)[]
* **TransformerArn**: string (ReadOnly)
* **TransformerId**: string (ReadOnly, Identifier)

## CapabilityConfiguration
### Properties

## CapabilityOptions
### Properties
* **InboundEdi**: [InboundEdiOptions](#inboundedioptions)
* **OutboundEdi**: [Partnership_OutboundEdiOptions](#partnershipoutboundedioptions)

## EdiType
### Properties

## FormatOptions
### Properties

## InboundEdiOptions
### Properties
* **X12**: [X12InboundEdiOptions](#x12inboundedioptions)

## InputConversion
### Properties
* **AdvancedOptions**: [AdvancedOptions](#advancedoptions)
* **FormatOptions**: [FormatOptions](#formatoptions)
* **FromFormat**: string (Required)

## Mapping
### Properties
* **Template**: string
* **TemplateLanguage**: string (Required)

## OutputConversion
### Properties
* **AdvancedOptions**: [AdvancedOptions](#advancedoptions)
* **FormatOptions**: [FormatOptions](#formatoptions)
* **ToFormat**: string (Required)

## Partnership_OutboundEdiOptions
### Properties

## S3Location
### Properties
* **BucketName**: string
* **Key**: string

## SampleDocumentKeys
### Properties
* **Input**: string
* **Output**: string

## SampleDocuments
### Properties
* **BucketName**: string (Required)
* **Keys**: [SampleDocumentKeys](#sampledocumentkeys)[] (Required)

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

## Transformer_X12ValidationRule
### Properties

## X12AcknowledgmentOptions
### Properties
* **FunctionalAcknowledgment**: string (Required)
* **TechnicalAcknowledgment**: string (Required)

## X12AdvancedOptions
### Properties
* **SplitOptions**: [X12SplitOptions](#x12splitoptions)
* **ValidationOptions**: [X12ValidationOptions](#x12validationoptions)

## X12InboundEdiOptions
### Properties
* **AcknowledgmentOptions**: [X12AcknowledgmentOptions](#x12acknowledgmentoptions)

## X12SplitOptions
### Properties
* **SplitBy**: string

## X12ValidationOptions
### Properties
* **ValidationRules**: [Transformer_X12ValidationRule](#transformerx12validationrule)[]

