# AWS.Translate @ default

## Resource AWS.Translate/ParallelData@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Translate/ParallelDataProperties](#awstranslateparalleldataproperties) (Required, Identifier): properties of the resource

## Resource AWS.Translate/Terminology@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Translate/TerminologyProperties](#awstranslateterminologyproperties) (Required, Identifier): properties of the resource

## AWS.Translate/ParallelDataProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the parallel data resource.
* **CreatedAt**: string (ReadOnly): The time at which the parallel data resource was created.
* **Description**: string: A custom description for the parallel data resource.
* **EncryptionKey**: [ParallelData_EncryptionKey](#paralleldataencryptionkey): The encryption key used to encrypt this object.
* **FailedRecordCount**: int (ReadOnly): The number of records unsuccessfully imported.
* **ImportedDataSize**: int (ReadOnly): The number of UTF-8 characters imported from the parallel data input file.
* **ImportedRecordCount**: int (ReadOnly): The number of records successfully imported.
* **LastUpdatedAt**: string (ReadOnly): The time at which the parallel data resource was last updated.
* **Name**: string (Required): A custom name for the parallel data resource. Must be unique in the account and region.
* **ParallelDataConfig**: [ParallelData_ParallelDataConfig](#paralleldataparalleldataconfig) (Required): Specifies the format and S3 location of the parallel data input file.
* **SkippedRecordCount**: int (ReadOnly): The number of items skipped during import.
* **SourceLanguageCode**: string (ReadOnly): The source language of the translations in the parallel data file.
* **Status**: string (ReadOnly): The status of the parallel data resource.
* **Tags**: [ParallelData_Tags](#paralleldatatags)[]: Tags associated with the parallel data resource.
* **TargetLanguageCodes**: string[] (ReadOnly): The language codes for the target languages available in the parallel data file.

## AWS.Translate/TerminologyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the custom terminology.
* **CreatedAt**: string (ReadOnly): The time the terminology was created.
* **Description**: string: The description of the custom terminology.
* **Directionality**: string (ReadOnly): The directionality of the terminology.
* **EncryptionKey**: [Terminology_EncryptionKey](#terminologyencryptionkey): The encryption key for the custom terminology.
* **Format**: string (ReadOnly): The format of the terminology data.
* **LastUpdatedAt**: string (ReadOnly): The time the terminology was last updated.
* **MergeStrategy**: string (WriteOnly): The merge strategy for the custom terminology. Currently only OVERWRITE is supported.
* **Name**: string (Required): The name of the custom terminology.
* **SizeBytes**: int (ReadOnly): The size of the terminology file in bytes.
* **SourceLanguageCode**: string (ReadOnly): The source language code for the custom terminology.
* **Tags**: [Terminology_Tags](#terminologytags)[]: Tags associated with the terminology.
* **TargetLanguageCodes**: string[] (ReadOnly): The target language codes for the custom terminology.
* **TermCount**: int (ReadOnly): The number of terms in the custom terminology.
* **TerminologyData**: [Terminology_TerminologyData](#terminologyterminologydata) (WriteOnly): The terminology data for the custom terminology being imported.

## ParallelData_EncryptionKey
### Properties
* **Id**: string (Required): The Amazon Resource Name (ARN) of the encryption key.
* **Type**: string (Required): The type of encryption key.

## ParallelData_ParallelDataConfig
### Properties
* **Format**: string (Required): The format of the parallel data input file.
* **S3Uri**: string (Required): The URI of the Amazon S3 folder that contains the parallel data input file.

## ParallelData_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Terminology_EncryptionKey
### Properties
* **Id**: string (Required): The Amazon Resource Name (ARN) of the encryption key.
* **Type**: string (Required): The type of encryption key.

## Terminology_Tags
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## Terminology_TerminologyData
### Properties
* **Directionality**: string: The directionality of the terminology resource.
* **File**: string (Required): The file containing the custom terminology data, base64-encoded.
* **Format**: string (Required): The data format of the custom terminology.

