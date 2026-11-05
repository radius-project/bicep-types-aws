# AWS.S3Outposts @ default

## Resource AWS.S3Outposts/AccessPoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Outposts/AccessPointProperties](#awss3outpostsaccesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Outposts/Bucket@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Outposts/BucketProperties](#awss3outpostsbucketproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Outposts/BucketPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Outposts/BucketPolicyProperties](#awss3outpostsbucketpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3Outposts/Endpoint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3Outposts/EndpointProperties](#awss3outpostsendpointproperties) (Required, Identifier): properties of the resource

## AbortIncompleteMultipartUpload
### Properties
* **DaysAfterInitiation**: int (Required): Specifies the number of days after which Amazon S3Outposts aborts an incomplete multipart upload.

## AccessPoint_Policy
### Properties

## AWS.S3Outposts/AccessPointProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the specified AccessPoint.
* **Bucket**: string (Required): The Amazon Resource Name (ARN) of the bucket you want to associate this AccessPoint with.
* **Name**: string (Required): A name for the AccessPoint.
* **Policy**: [AccessPoint_Policy](#accesspointpolicy): The access point policy associated with this access point.
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration) (Required): Virtual Private Cloud (VPC) from which requests can be made to the AccessPoint.

## AWS.S3Outposts/BucketPolicyProperties
### Properties
* **Bucket**: string (Required, Identifier): The Amazon Resource Name (ARN) of the specified bucket.
* **PolicyDocument**: [BucketPolicy_PolicyDocument](#bucketpolicypolicydocument) (Required): A policy document containing permissions to add to the specified bucket.

## AWS.S3Outposts/BucketProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the specified bucket.
* **BucketName**: string (Required): A name for the bucket.
* **LifecycleConfiguration**: [LifecycleConfiguration](#lifecycleconfiguration): Rules that define how Amazon S3Outposts manages objects during their lifetime.
* **OutpostId**: string (Required): The id of the customer outpost on which the bucket resides.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this S3Outposts bucket.

## AWS.S3Outposts/EndpointProperties
### Properties
* **AccessType**: string: The type of access for the on-premise network connectivity for the Outpost endpoint. To access endpoint from an on-premises network, you must specify the access type and provide the customer owned Ipv4 pool.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the endpoint.
* **CidrBlock**: string (ReadOnly): The VPC CIDR committed by this endpoint.
* **CreationTime**: string (ReadOnly): The time the endpoint was created.
* **CustomerOwnedIpv4Pool**: string: The ID of the customer-owned IPv4 pool for the Endpoint. IP addresses will be allocated from this pool for the endpoint.
* **FailedReason**: [FailedReason](#failedreason): The failure reason, if any, for a create or delete endpoint operation.
* **Id**: string (ReadOnly): The ID of the endpoint.
* **NetworkInterfaces**: [NetworkInterface](#networkinterface)[] (ReadOnly): The network interfaces of the endpoint.
* **OutpostId**: string (Required): The id of the customer outpost on which the bucket resides.
* **SecurityGroupId**: string (Required): The ID of the security group to use with the endpoint.
* **Status**: string (ReadOnly)
* **SubnetId**: string (Required): The ID of the subnet in the selected VPC. The subnet must belong to the Outpost.

## Bucket_Filter
### Properties
* **AndOperator**: [FilterAndOperator](#filterandoperator): The container for the AND condition for the lifecycle rule. A combination of Prefix and 1 or more Tags OR a minimum of 2 or more tags.
* **Prefix**: string: Object key prefix that identifies one or more objects to which this rule applies.
* **Tag**: [FilterTag](#filtertag): Specifies a tag used to identify a subset of objects for an Amazon S3Outposts bucket.

## BucketPolicy_PolicyDocument
### Properties

## FailedReason
### Properties
* **ErrorCode**: string: The failure code, if any, for a create or delete endpoint operation.
* **Message**: string: Additional error details describing the endpoint failure and recommended action.

## FilterAndOperator
### Properties

## FilterTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## LifecycleConfiguration
### Properties
* **Rules**: [Rule](#rule)[] (Required): A list of lifecycle rules for individual objects in an Amazon S3Outposts bucket.

## NetworkInterface
### Properties
* **NetworkInterfaceId**: string (Required)

## Rule
### Properties
* **AbortIncompleteMultipartUpload**: [AbortIncompleteMultipartUpload](#abortincompletemultipartupload): Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3Outposts bucket.
* **ExpirationDate**: string: Indicates when objects are deleted from Amazon S3Outposts. The date value must be in ISO 8601 format. The time is always midnight UTC.
* **ExpirationInDays**: int: Indicates the number of days after creation when objects are deleted from Amazon S3Outposts.
* **Filter**: [Bucket_Filter](#bucketfilter): The container for the filter of the lifecycle rule.
* **Id**: string: Unique identifier for the lifecycle rule. The value can't be longer than 255 characters.
* **Status**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VpcConfiguration
### Properties
* **VpcId**: string: Virtual Private Cloud (VPC) Id from which AccessPoint will allow requests.

