# AWS.S3Tables @ default

## Resource AWS.S3Tables/Table@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Tables/TableProperties](#awss3tablestableproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Tables/TableBucket@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Tables/TableBucketProperties](#awss3tablestablebucketproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Tables/TableBucketPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Tables/TableBucketPolicyProperties](#awss3tablestablebucketpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Tables/TablePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Tables/TablePolicyProperties](#awss3tablestablepolicyproperties) (Required, Identifier): properties of the resource

## AWS.S3Tables/TableBucketPolicyProperties
### Properties
* **ResourcePolicy**: [TableBucketPolicy_ResourcePolicy](#tablebucketpolicyresourcepolicy) | string (Required)
* **TableBucketARN**: string (Required, Identifier)

## AWS.S3Tables/TableBucketProperties
### Properties
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **MetricsConfiguration**: [MetricsConfiguration](#metricsconfiguration)
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration)
* **StorageClassConfiguration**: [StorageClassConfiguration](#storageclassconfiguration)
* **TableBucketARN**: string (ReadOnly, Identifier)
* **TableBucketName**: string (Required)
* **Tags**: [Tag](#tag)[]: User tags (key-value pairs) to associate with the table bucket.
* **UnreferencedFileRemoval**: [UnreferencedFileRemoval](#unreferencedfileremoval)

## AWS.S3Tables/TablePolicyProperties
### Properties
* **Namespace**: string (ReadOnly)
* **ResourcePolicy**: [TablePolicy_ResourcePolicy](#tablepolicyresourcepolicy) | string (Required)
* **TableARN**: string (Required, Identifier)
* **TableBucketARN**: string (ReadOnly)
* **TableName**: string (ReadOnly)

## AWS.S3Tables/TableProperties
### Properties
* **Compaction**: [Compaction](#compaction)
* **IcebergMetadata**: [IcebergMetadata](#icebergmetadata) (WriteOnly)
* **Namespace**: string (Required)
* **OpenTableFormat**: string (Required)
* **SnapshotManagement**: [SnapshotManagement](#snapshotmanagement)
* **StorageClassConfiguration**: [StorageClassConfiguration](#storageclassconfiguration)
* **TableARN**: string (ReadOnly, Identifier)
* **TableBucketARN**: string (Required)
* **TableName**: string (Required)
* **Tags**: [Tag](#tag)[]: User tags (key-value pairs) to associate with the table.
* **VersionToken**: string (ReadOnly)
* **WarehouseLocation**: string (ReadOnly)
* **WithoutMetadata**: string (WriteOnly)

## Compaction
### Properties
* **Status**: string: Indicates whether the Compaction maintenance action is enabled.
* **TargetFileSizeMB**: int: The target file size for the table in MB.

## EncryptionConfiguration
### Properties
* **KMSKeyArn**: string: ARN of the KMS key to use for encryption
* **SSEAlgorithm**: string: Server-side encryption algorithm

## IcebergMetadata
### Properties
* **IcebergPartitionSpec**: [IcebergPartitionSpec](#icebergpartitionspec)
* **IcebergSchema**: [IcebergSchema](#icebergschema): Schema definition for flat tables with primitive types only. Mutually exclusive with IcebergSchemaV2.
* **IcebergSchemaV2**: [IcebergSchemaV2](#icebergschemav2): Schema definition that supports Apache Iceberg nested types (struct, list, map) and primitive types. Mutually exclusive with IcebergSchema.
* **IcebergSortOrder**: [IcebergSortOrder](#icebergsortorder)
* **TableProperties**: [TableProperties](#tableproperties)

## IcebergPartitionField
### Properties
* **FieldId**: int: The partition field ID (auto-assigned starting from 1000 if not specified)
* **Name**: string (Required): The name of the partition field
* **SourceId**: int (Required): The source column ID to partition on
* **Transform**: string (Required): The partition transform function (identity, bucket[N], truncate[N], year, month, day, hour)

## IcebergPartitionSpec
### Properties
* **Fields**: [IcebergPartitionField](#icebergpartitionfield)[] (Required): List of partition fields
* **SpecId**: int: The partition spec ID (defaults to 0 if not specified)

## IcebergSchema
### Properties
* **SchemaFieldList**: [SchemaField](#schemafield)[] (Required)

## IcebergSchemaV2
### Properties
* **IdentifierFieldIds**: int[]: A list of field IDs that are used as the identifier fields for the table. Identifier fields uniquely identify a row in the table.
* **SchemaId**: int: An optional unique identifier for the schema
* **SchemaV2FieldList**: [SchemaV2Field](#schemav2field)[] (Required): The schema fields for the table
* **SchemaV2FieldType**: string (Required): The type of the top-level schema, which is always 'struct'

## IcebergSortField
### Properties
* **Direction**: string (Required): Sort direction (asc or desc)
* **NullOrder**: string (Required): Null value ordering (nulls-first or nulls-last)
* **SourceId**: int (Required): The source column ID to sort on
* **Transform**: string (Required): The sort transform function

## IcebergSortOrder
### Properties
* **Fields**: [IcebergSortField](#icebergsortfield)[] (Required): List of sort fields
* **OrderId**: int: The sort order ID (defaults to 1 if not specified, 0 is reserved for unsorted)

## MetricsConfiguration
### Properties
* **Status**: string: Indicates whether Metrics are enabled.

## ReplicationConfiguration
### Properties
* **Role**: string (Required): The ARN of the IAM role to use for replication
* **Rules**: [ReplicationRule](#replicationrule)[] (Required): List of replication rules

## ReplicationDestination
### Properties
* **DestinationTableBucketARN**: string (Required): The ARN of the destination table bucket

## ReplicationRule
### Properties
* **Destinations**: [ReplicationDestination](#replicationdestination)[] (Required): List of replication destinations

## SchemaField
### Properties
* **Id**: int: The unique identifier for the field
* **Name**: string (Required): The name of the field
* **Required**: bool: A Boolean value that specifies whether values are required for each row in this field
* **Type**: string (Required): The field type

## SchemaV2Field
### Properties
* **Doc**: string: Optional documentation for the field
* **Id**: int (Required): The unique identifier for the field
* **Name**: string (Required): The name of the field
* **Required**: bool (Required): A Boolean value that specifies whether values are required for each row in this field
* **Type**: [Table_Type](#tabletype) (Required): The field type. For primitive types, use a string (e.g., 'int', 'string', 'long'). For nested types, use an object (e.g., {'type': 'struct', 'fields': [...]} for struct, {'type': 'list', 'element-id': N, 'element': 'type'} for list, {'type': 'map', 'key-id': N, 'key': 'type', 'value-id': N, 'value': 'type'} for map).

## SnapshotManagement
### Properties
* **MaxSnapshotAgeHours**: int: The maximum age of a snapshot before it can be expired.
* **MinSnapshotsToKeep**: int: The minimum number of snapshots to keep.
* **Status**: string: Indicates whether the SnapshotManagement maintenance action is enabled.

## StorageClassConfiguration
### Properties
* **StorageClass**: string: The storage class for the table

## StorageClassConfiguration
### Properties
* **StorageClass**: string: The storage class for the table bucket

## Table_Type
### Properties

## TableProperties
### Properties

## Tag
### Properties
* **Key**: string (Required): Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
* **Value**: string (Required): Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.

## Tag
### Properties
* **Key**: string (Required): Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
* **Value**: string (Required): Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.

## UnreferencedFileRemoval
### Properties
* **NoncurrentDays**: int: S3 permanently deletes noncurrent objects after the number of days specified by the NoncurrentDays property.
* **Status**: string: Indicates whether the Unreferenced File Removal maintenance action is enabled.
* **UnreferencedDays**: int: For any object not referenced by your table and older than the UnreferencedDays property, S3 creates a delete marker and marks the object version as noncurrent.

