# AWS.S3Vectors @ default

## Resource AWS.S3Vectors/Index@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Vectors/IndexProperties](#awss3vectorsindexproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Vectors/VectorBucket@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Vectors/VectorBucketProperties](#awss3vectorsvectorbucketproperties) (Identifier): properties of the resource

## Resource AWS.S3Vectors/VectorBucketPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Vectors/VectorBucketPolicyProperties](#awss3vectorsvectorbucketpolicyproperties) (Required, Identifier): properties of the resource

## AWS.S3Vectors/IndexProperties
### Properties
* **CreationTime**: string (ReadOnly)
* **DataType**: string (Required)
* **Dimension**: int (Required)
* **DistanceMetric**: string (Required)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **IndexArn**: string (ReadOnly, Identifier)
* **IndexName**: string
* **MetadataConfiguration**: [MetadataConfiguration](#metadataconfiguration)
* **Tags**: [Tag](#tag)[]: User tags (key-value pairs) to associate with the index.
* **VectorBucketArn**: string
* **VectorBucketName**: string

## AWS.S3Vectors/VectorBucketPolicyProperties
### Properties
* **Policy**: [VectorBucketPolicy_Policy](#vectorbucketpolicypolicy) | string (Required)
* **VectorBucketArn**: string (Identifier)
* **VectorBucketName**: string (WriteOnly)

## AWS.S3Vectors/VectorBucketProperties
### Properties
* **CreationTime**: string (ReadOnly)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **Tags**: [Tag](#tag)[]: User tags (key-value pairs) to associate with the vector bucket.
* **VectorBucketArn**: string (ReadOnly, Identifier)
* **VectorBucketName**: string

## EncryptionConfiguration
### Properties
* **KmsKeyArn**: string: AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if sseType is set to aws:kms
* **SseType**: string: Defines the server-side encryption type for index encryption configuration. Defaults to the parent vector bucket's encryption settings when unspecified.

## EncryptionConfiguration
### Properties
* **KmsKeyArn**: string: AWS Key Management Service (KMS) customer managed key ID to use for the encryption configuration. This parameter is allowed if and only if sseType is set to aws:kms
* **SseType**: string: The server-side encryption type to use for the encryption configuration of the vector bucket. By default, if you don't specify, all new vectors in Amazon S3 vector buckets use server-side encryption with Amazon S3 managed keys (SSE-S3), specifically AES256.

## MetadataConfiguration
### Properties
* **NonFilterableMetadataKeys**: string[]: Non-filterable metadata keys allow you to enrich vectors with additional context during storage and retrieval. Unlike default metadata keys, these keys cannot be used as query filters. Non-filterable metadata keys can be retrieved but cannot be searched, queried, or filtered. You can access non-filterable metadata keys of your vectors after finding the vectors.

## Tag
### Properties
* **Key**: string (Required): Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
* **Value**: string (Required): Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.

## Tag
### Properties
* **Key**: string (Required): Tag key must be between 1 to 128 characters in length. Tag key cannot start with 'aws:' and can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.
* **Value**: string (Required): Tag value must be between 0 to 256 characters in length. Tag value can only contain alphanumeric characters, spaces, _, ., /, =, +, -, and @.

