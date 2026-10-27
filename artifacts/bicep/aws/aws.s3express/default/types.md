# AWS.S3Express @ default

## Resource AWS.S3Express/AccessPoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Express/AccessPointProperties](#awss3expressaccesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Express/BucketPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Express/BucketPolicyProperties](#awss3expressbucketpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Express/DirectoryBucket@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Express/DirectoryBucketProperties](#awss3expressdirectorybucketproperties) (Required, Identifier): properties of the resource

## AbortIncompleteMultipartUpload
### Properties
* **DaysAfterInitiation**: int (Required): Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

## AccessPoint_Policy
### Properties

## AWS.S3Express/AccessPointProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified accesspoint.
* **Bucket**: string (Required): The name of the bucket that you want to associate this Access Point with.
* **BucketAccountId**: string: The AWS account ID associated with the S3 bucket associated with this access point.
* **Name**: string (Identifier): The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name. For directory buckets, the access point name must consist of a base name that you provide and su?x that includes the ZoneID (AWS Availability Zone or Local Zone) of your bucket location, followed by --xa-s3.
* **NetworkOrigin**: string (ReadOnly): Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.
* **Policy**: [AccessPoint_Policy](#accesspointpolicy): The Access Point Policy you want to apply to this access point.
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration): The PublicAccessBlock configuration that you want to apply to this Access Point.
* **Scope**: [Scope](#scope): For directory buckets, you can ?lter access control to speci?c pre?xes, API operations, or a combination of both.
* **Tags**: [Tag](#tag)[]
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration): If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).

## AWS.S3Express/BucketPolicyProperties
### Properties
* **Bucket**: string (Required, Identifier): The name of the S3 directory bucket to which the policy applies.
* **PolicyDocument**: [BucketPolicy_PolicyDocument](#bucketpolicypolicydocument) | string (Required): A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM.

## AWS.S3Express/DirectoryBucketProperties
### Properties
* **Arn**: string (ReadOnly): Returns the Amazon Resource Name (ARN) of the specified bucket.
* **AvailabilityZoneName**: string (ReadOnly): Returns the code for the Availability Zone or Local Zone where the directory bucket was created. An example for the code of an Availability Zone is 'us-east-1f'.
* **BucketEncryption**: [BucketEncryption](#bucketencryption)
* **BucketName**: string (Identifier): Specifies a name for the bucket. The bucket name must contain only lowercase letters, numbers, and hyphens (-). A directory bucket name must be unique in the chosen Availability Zone or Local Zone. The bucket name must also follow the format 'bucket_base_name--zone_id--x-s3'. The zone_id can be the ID of an Availability Zone or a Local Zone. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
* **DataRedundancy**: string (Required): Specifies the number of Availability Zone or Local Zone that's used for redundancy for the bucket.
* **InventoryConfigurations**: [InventoryConfiguration](#inventoryconfiguration)[]: The inventory configuration for an Amazon S3 Express bucket.
* **LifecycleConfiguration**: [LifecycleConfiguration](#lifecycleconfiguration): Lifecycle rules that define how Amazon S3 Express manages objects during their lifetime.
* **LocationName**: string (Required): Specifies the Zone ID of the Availability Zone or Local Zone where the directory bucket will be created. An example Availability Zone ID value is 'use1-az5'.
* **MetricsConfigurations**: [MetricsConfiguration](#metricsconfiguration)[]: Specifies the metrics configurations for the Amazon S3 Express bucket.
* **Tags**: [Tag](#tag)[]

## BucketEncryption
### Properties
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionRule](#serversideencryptionrule)[] (Required): Specifies the default server-side-encryption configuration.

## Destination
### Properties
* **BucketAccountId**: string: The account ID that owns the destination S3 bucket. 
* **BucketArn**: string (Required): The Amazon Resource Name (ARN) of the destination Amazon S3 bucket to which data is exported.
* **Format**: string (Required): Specifies the file format used when exporting data to Amazon S3.
* **Prefix**: string: The prefix to use when exporting data. The prefix is prepended to all results.

## InventoryConfiguration
### Properties
* **Destination**: [Destination](#destination) (Required)
* **Enabled**: bool (Required): Specifies whether the inventory is enabled or disabled.
* **Id**: string (Required): The ID used to identify the inventory configuration.
* **IncludedObjectVersions**: string (Required): Object versions to include in the inventory list.
* **OptionalFields**: string[]: Contains the optional fields that are included in the inventory results.
* **Prefix**: string: The prefix that is prepended to all inventory results.
* **ScheduleFrequency**: string (Required): Specifies the schedule for generating inventory results.

## LifecycleConfiguration
### Properties
* **Rules**: [Rule](#rule)[] (Required): A lifecycle rule for individual objects in an Amazon S3 Express bucket.

## MetricsConfiguration
### Properties
* **AccessPointArn**: string: The access point ARN used when evaluating a metrics filter.
* **Id**: string (Required): The ID used to identify the metrics configuration.
* **Prefix**: string: The prefix used when evaluating a metrics filter.

## PublicAccessBlockConfiguration
### Properties
* **BlockPublicAcls**: bool: Specifies whether Amazon S3 should block public access control lists (ACLs) for buckets in this account. Setting this element to TRUE causes the following behavior:
- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
 - PUT Object calls fail if the request includes a public ACL.
. - PUT Bucket calls fail if the request includes a public ACL.
Enabling this setting doesn't affect existing policies or ACLs.
* **BlockPublicPolicy**: bool: Specifies whether Amazon S3 should block public bucket policies for buckets in this account. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. Enabling this setting doesn't affect existing bucket policies.
* **IgnorePublicAcls**: bool: Specifies whether Amazon S3 should ignore public ACLs for buckets in this account. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on buckets in this account and any objects that they contain. Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
* **RestrictPublicBuckets**: bool: Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

## Rule
### Properties
* **AbortIncompleteMultipartUpload**: [AbortIncompleteMultipartUpload](#abortincompletemultipartupload)
* **ExpirationInDays**: int
* **Id**: string
* **ObjectSizeGreaterThan**: string
* **ObjectSizeLessThan**: string
* **Prefix**: string
* **Status**: string (Required)

## Scope
### Properties
* **Permissions**: string[]: You can include one or more API operations as permissions
* **Prefixes**: string[]: You can specify any amount of pre?xes, but the total length of characters of all pre?xes must be less than 256 bytes in size.

## ServerSideEncryptionByDefault
### Properties
* **KMSMasterKeyID**: string: AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. This parameter is allowed only if SSEAlgorithm is set to aws:kms. You can specify this parameter with the key ID or the Amazon Resource Name (ARN) of the KMS key
* **SSEAlgorithm**: string (Required)

## ServerSideEncryptionRule
### Properties
* **BucketKeyEnabled**: bool: Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Amazon S3 Express One Zone uses an S3 Bucket Key with SSE-KMS and S3 Bucket Key cannot be disabled. It's only allowed to set the BucketKeyEnabled element to true.
* **ServerSideEncryptionByDefault**: [ServerSideEncryptionByDefault](#serversideencryptionbydefault)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VpcConfiguration
### Properties
* **VpcId**: string: If this field is specified, this access point will only allow connections from the specified VPC ID.

