# AWS.HealthLake @ default

## Resource AWS.HealthLake/FHIRDatastore@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.HealthLake/FHIRDatastoreProperties](#awshealthlakefhirdatastoreproperties) (Required): properties of the resource

## AWS.HealthLake/FHIRDatastoreProperties
### Properties
* **CreatedAt**: [CreatedAt](#createdat) (ReadOnly)
* **DatastoreArn**: [DatastoreArn](#datastorearn) (ReadOnly)
* **DatastoreEndpoint**: [DatastoreEndpoint](#datastoreendpoint) (ReadOnly)
* **DatastoreId**: [DatastoreId](#datastoreid) (ReadOnly)
* **DatastoreName**: [DatastoreName](#datastorename)
* **DatastoreStatus**: [DatastoreStatus](#datastorestatus) (ReadOnly)
* **DatastoreTypeVersion**: [DatastoreTypeVersion](#datastoretypeversion) (Required)
* **PreloadDataConfig**: [PreloadDataConfig](#preloaddataconfig)
* **SseConfiguration**: [SseConfiguration](#sseconfiguration)
* **Tags**: [Tag](#tag)[]

## CreatedAt
### Properties
* **Nanos**: int (Required): Nanoseconds.
* **Seconds**: string (Required): Seconds since epoch.

## DatastoreArn
### Properties

## DatastoreEndpoint
### Properties

## DatastoreId
### Properties

## DatastoreName
### Properties

## DatastoreStatus
### Properties

## DatastoreTypeVersion
### Properties

## PreloadDataConfig
### Properties
* **PreloadDataType**: string (Required): The type of preloaded data. Only Synthea preloaded data is supported.

## SseConfiguration
### Properties
* **KmsEncryptionConfig**: [KmsEncryptionConfig](#kmsencryptionconfig) (Required)

## KmsEncryptionConfig
### Properties
* **CmkType**: string (Required): The type of customer-managed-key (CMK) used for encryption. The two types of supported CMKs are customer owned CMKs and AWS owned CMKs.
* **KmsKeyId**: string: The KMS encryption key id/alias used to encrypt the Data Store contents at rest.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

