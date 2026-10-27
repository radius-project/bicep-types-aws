# AWS.ElementalInference @ default

## Resource AWS.ElementalInference/Dictionary@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElementalInference/DictionaryProperties](#awselementalinferencedictionaryproperties) (Required, Identifier): properties of the resource

## Resource AWS.ElementalInference/Feed@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ElementalInference/FeedProperties](#awselementalinferencefeedproperties) (Required, Identifier): properties of the resource

## AWS.ElementalInference/DictionaryProperties
### Properties
* **Arn**: string (ReadOnly)
* **Entries**: string (WriteOnly)
* **Id**: string (ReadOnly, Identifier)
* **Language**: string (Required)
* **Name**: string (Required)
* **Tags**: [TagMap](#tagmap)

## AWS.ElementalInference/FeedProperties
### Properties
* **AccessRoleArn**: string
* **Arn**: string (ReadOnly)
* **DataEndpoints**: string[] (ReadOnly)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **Outputs**: [GetOutput](#getoutput)[] (Required)
* **Tags**: [TagMap](#tagmap)

## Feed_OutputConfig
### Properties

## GetOutput
### Properties
* **Description**: string
* **Name**: string (Required)
* **OutputConfig**: [Feed_OutputConfig](#feedoutputconfig) (Required)
* **Status**: string (Required)

## TagMap
### Properties

## TagMap
### Properties

