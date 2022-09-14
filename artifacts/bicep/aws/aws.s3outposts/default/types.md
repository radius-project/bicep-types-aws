# AWS.S3Outposts @ default

## Resource AWS.S3Outposts/AccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3Outposts/AccessPointProperties](#awss3outpostsaccesspointproperties) (Required): properties of the resource

## Resource AWS.S3Outposts/Bucket@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3Outposts/BucketProperties](#awss3outpostsbucketproperties) (Required): properties of the resource

## Resource AWS.S3Outposts/BucketPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3Outposts/BucketPolicyProperties](#awss3outpostsbucketpolicyproperties) (Required): properties of the resource

## AWS.S3Outposts/AccessPointProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified AccessPoint.
* **Bucket**: string (Required): The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
* **Name**: string (Required): A name for the AccessPoint.
* **Policy**: [AccessPoint_Policy](#accesspointpolicy): The access point policy associated with this access point.
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration) (Required): Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.

## AccessPoint_Policy
### Properties

## VpcConfiguration
### Properties
* **VpcId**: string: Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.

## AWS.S3Outposts/BucketProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified bucket.
* **BucketName**: string (Required): A name for the bucket.
* **LifecycleConfiguration**: [LifecycleConfiguration](#lifecycleconfiguration): Rules that define how Amazon S3Outposts manages objects during their lifetime.
* **OutpostId**: string (Required): The id of the customer outpost on which the bucket resides.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

## LifecycleConfiguration
### Properties
* **Rules**: [Rule](#rule)[] (Required): A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.

## Rule
### Properties
* **AbortIncompleteMultipartUpload**: [AbortIncompleteMultipartUpload](#abortincompletemultipartupload): Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.
* **ExpirationDate**: [iso8601UTC](#iso8601utc): Indicates when objects are deleted from Amazon S3Outposts. The date value must be in ISO 8601 format. The time is always midnight UTC.
* **ExpirationInDays**: int: Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.
* **Filter**: [Bucket_Filter](#bucketfilter): The container for the filter of the lifecycle rule.
* **Id**: string: Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.
* **Status**: string

## AbortIncompleteMultipartUpload
### Properties
* **DaysAfterInitiation**: int (Required): Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.

## iso8601UTC
### Properties

## Bucket_Filter
### Properties
* **AndOperator**: [FilterAndOperator](#filterandoperator): The container for the AND condition for the lifecycle rule. A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.
* **Prefix**: [FilterPrefix](#filterprefix): Object key prefix that identifies one or more objects to which this rule applies.
* **Tag**: [FilterTag](#filtertag): Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.

## FilterAndOperator
### Properties

## FilterPrefix
### Properties

## FilterTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.S3Outposts/BucketPolicyProperties
### Properties
* **Bucket**: string (Required): The Amazon Resource Name (ARN) of the specified bucket.
* **PolicyDocument**: [BucketPolicy_PolicyDocument](#bucketpolicypolicydocument) (Required): A policy document containing permissions to add to the specified bucket.

## BucketPolicy_PolicyDocument
### Properties

