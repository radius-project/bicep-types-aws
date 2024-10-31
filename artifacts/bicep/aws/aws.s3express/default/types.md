# AWS.S3Express @ default

## Resource AWS.S3Express/BucketPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Express/BucketPolicyProperties](#awss3expressbucketpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Express/DirectoryBucket@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Express/DirectoryBucketProperties](#awss3expressdirectorybucketproperties) (Required, Identifier): properties of the resource

## AWS.S3Express/BucketPolicyProperties
### Properties
* **Bucket**: string (Required, Identifier): The name of the S3 directory bucket to which the policy applies.
* **PolicyDocument**: [BucketPolicy_PolicyDocument](#bucketpolicypolicydocument) | string (Required): A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.

## AWS.S3Express/DirectoryBucketProperties
### Properties
* **Arn**: string (ReadOnly): Returns the Amazon Resource Name (ARN) of the specified bucket.
* **AvailabilityZoneName**: string (ReadOnly): Returns the code for the Availability Zone where the directory bucket was created.
* **BucketEncryption**: [BucketEncryption](#bucketencryption)
* **BucketName**: string (Identifier): Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone. The bucket name must also follow the format 'bucket_base_name--az_id--x-s3' (for example, 'DOC-EXAMPLE-BUCKET--usw2-az1--x-s3'). If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
* **DataRedundancy**: string (Required): Specifies the number of Availability Zone that's used for redundancy for the bucket.
* **LocationName**: string (Required): Specifies the AZ ID of the Availability Zone where the directory bucket will be created. An example AZ ID value is 'use1-az5'.

## BucketEncryption
### Properties
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionRule](#serversideencryptionrule)[] (Required): Specifies the default server-side-encryption configuration.

## ServerSideEncryptionByDefault
### Properties
* **KMSMasterKeyID**: string: AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key
* **SSEAlgorithm**: string (Required)

## ServerSideEncryptionRule
### Properties
* **BucketKeyEnabled**: bool: Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.
* **ServerSideEncryptionByDefault**: [ServerSideEncryptionByDefault](#serversideencryptionbydefault)

