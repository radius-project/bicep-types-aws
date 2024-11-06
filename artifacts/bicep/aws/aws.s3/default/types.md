# AWS.S3 @ default

## Resource AWS.S3/AccessGrant@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/AccessGrantProperties](#awss3accessgrantproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3/AccessGrantsInstance@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/AccessGrantsInstanceProperties](#awss3accessgrantsinstanceproperties) (Identifier): properties of the resource

## Resource AWS.S3/AccessGrantsLocation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/AccessGrantsLocationProperties](#awss3accessgrantslocationproperties) (Identifier): properties of the resource

## Resource AWS.S3/AccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/AccessPointProperties](#awss3accesspointproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3/Bucket@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/BucketProperties](#awss3bucketproperties) (Identifier): properties of the resource

## Resource AWS.S3/BucketPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/BucketPolicyProperties](#awss3bucketpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3/MultiRegionAccessPointPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/MultiRegionAccessPointPolicyProperties](#awss3multiregionaccesspointpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3/StorageLens@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/StorageLensProperties](#awss3storagelensproperties) (Required, Identifier): properties of the resource

## Resource AWS.S3/StorageLensGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.S3/StorageLensGroupProperties](#awss3storagelensgroupproperties) (Required, Identifier): properties of the resource

## AbortIncompleteMultipartUpload
### Properties
* **DaysAfterInitiation**: int (Required): Specifies the number of days after which Amazon S3 stops an incomplete multipart upload.

## AccelerateConfiguration
### Properties
* **AccelerationStatus**: string (Required): Specifies the transfer acceleration status of the bucket.

## AccessControlTranslation
### Properties
* **Owner**: string (Required): Specifies the replica ownership. For default and valid values, see [PUT bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) in the *Amazon S3 API Reference*.

## AccessGrantsLocationConfiguration
### Properties
* **S3SubPrefix**: string (Required): The S3 sub prefix of a registered location in your S3 Access Grants instance

## AccessPoint_Policy
### Properties

## AccountLevel
### Properties
* **ActivityMetrics**: [ActivityMetrics](#activitymetrics)
* **AdvancedCostOptimizationMetrics**: [AdvancedCostOptimizationMetrics](#advancedcostoptimizationmetrics)
* **AdvancedDataProtectionMetrics**: [AdvancedDataProtectionMetrics](#advanceddataprotectionmetrics)
* **BucketLevel**: [BucketLevel](#bucketlevel) (Required)
* **DetailedStatusCodesMetrics**: [DetailedStatusCodesMetrics](#detailedstatuscodesmetrics)
* **StorageLensGroupLevel**: [StorageLensGroupLevel](#storagelensgrouplevel)

## ActivityMetrics
### Properties
* **IsEnabled**: bool: Specifies whether activity metrics are enabled or disabled.

## AdvancedCostOptimizationMetrics
### Properties
* **IsEnabled**: bool: Specifies whether advanced cost optimization metrics are enabled or disabled.

## AdvancedDataProtectionMetrics
### Properties
* **IsEnabled**: bool: Specifies whether advanced data protection metrics are enabled or disabled.

## AnalyticsConfiguration
### Properties
* **Id**: string (Required): The ID that identifies the analytics configuration.
* **Prefix**: string: The prefix that an object must have to be included in the analytics results.
* **StorageClassAnalysis**: [StorageClassAnalysis](#storageclassanalysis) (Required): Contains data related to access patterns to be collected and made available to analyze the tradeoffs between different storage classes.
* **TagFilters**: [TagFilter](#tagfilter)[]: The tags to use when evaluating an analytics filter.
 The analytics only includes objects that meet the filter's criteria. If no filter is specified, all of the contents of the bucket are included in the analysis.

## And
### Properties
* **MatchAnyPrefix**: string[]
* **MatchAnySuffix**: string[]
* **MatchAnyTag**: [Tag](#tag)[]
* **MatchObjectAge**: [MatchObjectAge](#matchobjectage)
* **MatchObjectSize**: [MatchObjectSize](#matchobjectsize)

## AWS.S3/AccessGrantProperties
### Properties
* **AccessGrantArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified access grant.
* **AccessGrantId**: string (ReadOnly, Identifier): The ID assigned to this access grant.
* **AccessGrantsLocationConfiguration**: [AccessGrantsLocationConfiguration](#accessgrantslocationconfiguration): The configuration options of the grant location, which is the S3 path to the data to which you are granting access.
* **AccessGrantsLocationId**: string (Required): The custom S3 location to be accessed by the grantee
* **ApplicationArn**: string: The ARN of the application grantees will use to access the location
* **Grantee**: [Grantee](#grantee) (Required): The principal who will be granted permission to access S3.
* **GrantScope**: string (ReadOnly): The S3 path of the data to which you are granting access. It is a combination of the S3 path of the registered location and the subprefix.
* **Permission**: string (Required): The level of access to be afforded to the grantee
* **S3PrefixType**: string (WriteOnly): The type of S3SubPrefix.
* **Tags**: [Tag](#tag)[]

## AWS.S3/AccessGrantsInstanceProperties
### Properties
* **AccessGrantsInstanceArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the specified Access Grants instance.
* **AccessGrantsInstanceId**: string (ReadOnly): A unique identifier for the specified access grants instance.
* **IdentityCenterArn**: string: The Amazon Resource Name (ARN) of the specified AWS Identity Center.
* **Tags**: [Tag](#tag)[] (WriteOnly)

## AWS.S3/AccessGrantsLocationProperties
### Properties
* **AccessGrantsLocationArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified Access Grants location.
* **AccessGrantsLocationId**: string (ReadOnly, Identifier): The unique identifier for the specified Access Grants location.
* **IamRoleArn**: string: The Amazon Resource Name (ARN) of the access grant location's associated IAM role.
* **LocationScope**: string: Descriptor for where the location actually points
* **Tags**: [Tag](#tag)[]

## AWS.S3/AccessPointProperties
### Properties
* **Alias**: string (ReadOnly): The alias of this Access Point. This alias can be used for compatibility purposes with other AWS services and third-party applications.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the specified accesspoint.
* **Bucket**: string (Required): The name of the bucket that you want to associate this Access Point with.
* **BucketAccountId**: string: The AWS account ID associated with the S3 bucket associated with this access point.
* **Name**: string (Identifier): The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.
* **NetworkOrigin**: string (ReadOnly): Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.
* **Policy**: [AccessPoint_Policy](#accesspointpolicy): The Access Point Policy you want to apply to this access point.
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration): The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration): If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).

## AWS.S3/BucketPolicyProperties
### Properties
* **Bucket**: string (Required, Identifier): The name of the Amazon S3 bucket to which the policy applies.
* **PolicyDocument**: [BucketPolicy_PolicyDocument](#bucketpolicypolicydocument) | string (Required): A policy document containing permissions to add to the specified bucket. In IAM, you must provide policy documents in JSON format. However, in CloudFormation you can provide the policy in JSON or YAML format because CloudFormation converts YAML to JSON before submitting it to IAM. For more information, see the AWS::IAM::Policy [PolicyDocument](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-policy.html#cfn-iam-policy-policydocument) resource description in this guide and [Access Policy Language Overview](https://docs.aws.amazon.com/AmazonS3/latest/dev/access-policy-language-overview.html) in the *Amazon S3 User Guide*.

## AWS.S3/BucketProperties
### Properties
* **AccelerateConfiguration**: [AccelerateConfiguration](#accelerateconfiguration): Configures the transfer acceleration state for an Amazon S3 bucket. For more information, see [Amazon S3 Transfer Acceleration](https://docs.aws.amazon.com/AmazonS3/latest/dev/transfer-acceleration.html) in the *Amazon S3 User Guide*.
* **AccessControl**: string (WriteOnly): This is a legacy property, and it is not recommended for most use cases. A majority of modern use cases in Amazon S3 no longer require the use of ACLs, and we recommend that you keep ACLs disabled. For more information, see [Controlling object ownership](https://docs.aws.amazon.com//AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon S3 User Guide*.
  A canned access control list (ACL) that grants predefined permissions to the bucket. For more information about canned ACLs, see [Canned ACL](https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl) in the *Amazon S3 User Guide*.
  S3 buckets are created with ACLs disabled by default. Therefore, unless you explicitly set the [AWS::S3::OwnershipControls](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-ownershipcontrols.html) property to enable ACLs, your resource will fail to deploy with any value other than Private. Use cases requiring ACLs are uncommon.
  The majority of access control configurations can be successfully and more easily achieved with bucket policies. For more information, see [AWS::S3::BucketPolicy](https://docs.aws.amazon.com//AWSCloudFormation/latest/UserGuide/aws-properties-s3-policy.html). For examples of common policy configurations, including S3 Server Access Logs buckets and more, see [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html) in the *Amazon S3 User Guide*.
* **AnalyticsConfigurations**: [AnalyticsConfiguration](#analyticsconfiguration)[]: Specifies the configuration and any analyses for the analytics filter of an Amazon S3 bucket.
* **Arn**: string (ReadOnly)
* **BucketEncryption**: [BucketEncryption](#bucketencryption): Specifies default encryption for a bucket using server-side encryption with Amazon S3-managed keys (SSE-S3), AWS KMS-managed keys (SSE-KMS), or dual-layer server-side encryption with KMS-managed keys (DSSE-KMS). For information about the Amazon S3 default encryption feature, see [Amazon S3 Default Encryption for S3 Buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html) in the *Amazon S3 User Guide*.
* **BucketName**: string (Identifier): A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the bucket name. The bucket name must contain only lowercase letters, numbers, periods (.), and dashes (-) and must follow [Amazon S3 bucket restrictions and limitations](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html). For more information, see [Rules for naming Amazon S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html#bucketnamingrules) in the *Amazon S3 User Guide*. 
  If you specify a name, you can't perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you need to replace the resource, specify a new name.
* **CorsConfiguration**: [CorsConfiguration](#corsconfiguration): Describes the cross-origin access configuration for objects in an Amazon S3 bucket. For more information, see [Enabling Cross-Origin Resource Sharing](https://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html) in the *Amazon S3 User Guide*.
* **DomainName**: string (ReadOnly)
* **DualStackDomainName**: string (ReadOnly)
* **IntelligentTieringConfigurations**: [IntelligentTieringConfiguration](#intelligenttieringconfiguration)[]: Defines how Amazon S3 handles Intelligent-Tiering storage.
* **InventoryConfigurations**: [InventoryConfiguration](#inventoryconfiguration)[]: Specifies the inventory configuration for an Amazon S3 bucket. For more information, see [GET Bucket inventory](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketGETInventoryConfig.html) in the *Amazon S3 API Reference*.
* **LifecycleConfiguration**: [LifecycleConfiguration](#lifecycleconfiguration): Specifies the lifecycle configuration for objects in an Amazon S3 bucket. For more information, see [Object Lifecycle Management](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lifecycle-mgmt.html) in the *Amazon S3 User Guide*.
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration): Settings that define where logs are stored.
* **MetricsConfigurations**: [MetricsConfiguration](#metricsconfiguration)[]: Specifies a metrics configuration for the CloudWatch request metrics (specified by the metrics configuration ID) from an Amazon S3 bucket. If you're updating an existing metrics configuration, note that this is a full replacement of the existing metrics configuration. If you don't include the elements you want to keep, they are erased. For more information, see [PutBucketMetricsConfiguration](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTMetricConfiguration.html).
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration): Configuration that defines how Amazon S3 handles bucket notifications.
* **ObjectLockConfiguration**: [ObjectLockConfiguration](#objectlockconfiguration): This operation is not supported by directory buckets.
  Places an Object Lock configuration on the specified bucket. The rule specified in the Object Lock configuration will be applied by default to every new object placed in the specified bucket. For more information, see [Locking Objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock.html). 
   +  The ``DefaultRetention`` settings require both a mode and a period.
  +  The ``DefaultRetention`` period can be either ``Days`` or ``Years`` but you must select one. You cannot specify ``Days`` and ``Years`` at the same time.
  +  You can enable Object Lock for new or existing buckets. For more information, see [Configuring Object Lock](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lock-configure.html).
* **ObjectLockEnabled**: bool: Indicates whether this bucket has an Object Lock configuration enabled. Enable ``ObjectLockEnabled`` when you apply ``ObjectLockConfiguration`` to a bucket.
* **OwnershipControls**: [OwnershipControls](#ownershipcontrols): Configuration that defines how Amazon S3 handles Object Ownership rules.
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration): Configuration that defines how Amazon S3 handles public access.
* **RegionalDomainName**: string (ReadOnly)
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration): Configuration for replicating objects in an S3 bucket. To enable replication, you must also enable versioning by using the ``VersioningConfiguration`` property.
 Amazon S3 can store replicated objects in a single destination bucket or multiple destination buckets. The destination bucket or buckets must already exist.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this S3 bucket.
* **VersioningConfiguration**: [VersioningConfiguration](#versioningconfiguration): Enables multiple versions of all objects in this bucket. You might enable versioning to prevent objects from being deleted or overwritten by mistake or to archive objects so that you can retrieve previous versions of them.
  When you enable versioning on a bucket for the first time, it might take a short amount of time for the change to be fully propagated. We recommend that you wait for 15 minutes after enabling versioning before issuing write operations (``PUT`` or ``DELETE``) on objects in the bucket.
* **WebsiteConfiguration**: [WebsiteConfiguration](#websiteconfiguration): Information used to configure the bucket as a static website. For more information, see [Hosting Websites on Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html).
* **WebsiteURL**: string (ReadOnly)

## AWS.S3/MultiRegionAccessPointPolicyProperties
### Properties
* **MrapName**: string (Required, Identifier): The name of the Multi Region Access Point to apply policy
* **Policy**: [MultiRegionAccessPointPolicy_Policy](#multiregionaccesspointpolicypolicy) (Required): Policy document to apply to a Multi Region Access Point
* **PolicyStatus**: [MultiRegionAccessPointPolicy_PolicyStatus](#multiregionaccesspointpolicypolicystatus) (ReadOnly): The Policy Status associated with this Multi Region Access Point

## AWS.S3/StorageLensGroupProperties
### Properties
* **Filter**: [Filter](#filter) (Required)
* **Name**: string (Required, Identifier)
* **StorageLensGroupArn**: string (ReadOnly): The ARN for the Amazon S3 Storage Lens Group.
* **Tags**: [Tag](#tag)[]: A set of tags (key-value pairs) for this Amazon S3 Storage Lens Group.

## AWS.S3/StorageLensProperties
### Properties
* **StorageLensConfiguration**: [StorageLensConfiguration](#storagelensconfiguration) (Required)
* **Tags**: [Tag](#tag)[]: A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

## AwsOrg
### Properties
* **Arn**: string (Required)

## BucketEncryption
### Properties
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionRule](#serversideencryptionrule)[] (Required): Specifies the default server-side-encryption configuration.

## BucketLevel
### Properties
* **ActivityMetrics**: [ActivityMetrics](#activitymetrics)
* **AdvancedCostOptimizationMetrics**: [AdvancedCostOptimizationMetrics](#advancedcostoptimizationmetrics)
* **AdvancedDataProtectionMetrics**: [AdvancedDataProtectionMetrics](#advanceddataprotectionmetrics)
* **DetailedStatusCodesMetrics**: [DetailedStatusCodesMetrics](#detailedstatuscodesmetrics)
* **PrefixLevel**: [PrefixLevel](#prefixlevel)

## BucketsAndRegions
### Properties
* **Buckets**: string[]
* **Regions**: string[]

## CloudWatchMetrics
### Properties
* **IsEnabled**: bool (Required): Specifies whether CloudWatch metrics are enabled or disabled.

## CorsConfiguration
### Properties
* **CorsRules**: [CorsRule](#corsrule)[] (Required): A set of origins and methods (cross-origin access that you want to allow). You can add up to 100 rules to the configuration.

## CorsRule
### Properties
* **AllowedHeaders**: string[]: Headers that are specified in the ``Access-Control-Request-Headers`` header. These headers are allowed in a preflight OPTIONS request. In response to any preflight OPTIONS request, Amazon S3 returns any requested headers that are allowed.
* **AllowedMethods**: string[] (Required): An HTTP method that you allow the origin to run.
  *Allowed values*: ``GET`` | ``PUT`` | ``HEAD`` | ``POST`` | ``DELETE``
* **AllowedOrigins**: string[] (Required): One or more origins you want customers to be able to access the bucket from.
* **ExposedHeaders**: string[]: One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript ``XMLHttpRequest`` object).
* **Id**: string: A unique identifier for this rule. The value must be no more than 255 characters.
* **MaxAge**: int: The time in seconds that your browser is to cache the preflight response for the specified resource.

## DataExport
### Properties
* **Destination**: [Destination](#destination) (Required): The place to store the data for an analysis.
* **OutputSchemaVersion**: string (Required): The version of the output schema to use when exporting data. Must be ``V_1``.

## DataExport
### Properties
* **CloudWatchMetrics**: [CloudWatchMetrics](#cloudwatchmetrics)
* **S3BucketDestination**: [S3BucketDestination](#s3bucketdestination)

## DefaultRetention
### Properties
* **Days**: int: The number of days that you want to specify for the default retention period. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
* **Mode**: string: The default Object Lock retention mode you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.
* **Years**: int: The number of years that you want to specify for the default retention period. If Object Lock is turned on, you must specify ``Mode`` and specify either ``Days`` or ``Years``.

## DeleteMarkerReplication
### Properties
* **Status**: string: Indicates whether to replicate delete markers. Disabled by default.

## Destination
### Properties
* **BucketAccountId**: string: The account ID that owns the destination S3 bucket. If no account ID is provided, the owner is not validated before exporting data.
   Although this value is optional, we strongly recommend that you set it to help prevent problems if the destination bucket ownership changes.
* **BucketArn**: string (Required): The Amazon Resource Name (ARN) of the bucket to which data is exported.
* **Format**: string (Required): Specifies the file format used when exporting data to Amazon S3.
  *Allowed values*: ``CSV`` | ``ORC`` | ``Parquet``
* **Prefix**: string: The prefix to use when exporting data. The prefix is prepended to all results.

## DetailedStatusCodesMetrics
### Properties
* **IsEnabled**: bool: Specifies whether detailed status codes metrics are enabled or disabled.

## Encryption
### Properties

## EncryptionConfiguration
### Properties
* **ReplicaKmsKeyID**: string (Required): Specifies the ID (Key ARN or Alias ARN) of the customer managed AWS KMS key stored in AWS Key Management Service (KMS) for the destination bucket. Amazon S3 uses this key to encrypt replica objects. Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.

## EventBridgeConfiguration
### Properties
* **EventBridgeEnabled**: bool (Required): Enables delivery of events to Amazon EventBridge.

## Filter
### Properties
* **And**: [And](#and)
* **MatchAnyPrefix**: string[]
* **MatchAnySuffix**: string[]
* **MatchAnyTag**: [Tag](#tag)[]
* **MatchObjectAge**: [MatchObjectAge](#matchobjectage)
* **MatchObjectSize**: [MatchObjectSize](#matchobjectsize)
* **Or**: [Or](#or)

## FilterRule
### Properties
* **Name**: string (Required): The object key name prefix or suffix identifying one or more objects to which the filtering rule applies. The maximum length is 1,024 characters. Overlapping prefixes and suffixes are not supported. For more information, see [Configuring Event Notifications](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
* **Value**: string (Required): The value that the filter searches for in object key names.

## Grantee
### Properties
* **GranteeIdentifier**: string (Required): The unique identifier of the Grantee
* **GranteeType**: string (Required): Configures the transfer acceleration state for an Amazon S3 bucket.

## IntelligentTieringConfiguration
### Properties
* **Id**: string (Required): The ID used to identify the S3 Intelligent-Tiering configuration.
* **Prefix**: string: An object key name prefix that identifies the subset of objects to which the rule applies.
* **Status**: string (Required): Specifies the status of the configuration.
* **TagFilters**: [TagFilter](#tagfilter)[]: A container for a key-value pair.
* **Tierings**: [Tiering](#tiering)[] (Required): Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: ``ARCHIVE_ACCESS`` and ``DEEP_ARCHIVE_ACCESS``.
  You only need Intelligent Tiering Configuration enabled on a bucket if you want to automatically move objects stored in the Intelligent-Tiering storage class to Archive Access or Deep Archive Access tiers.

## InventoryConfiguration
### Properties
* **Destination**: [Destination](#destination) (Required): Contains information about where to publish the inventory results.
* **Enabled**: bool (Required): Specifies whether the inventory is enabled or disabled. If set to ``True``, an inventory list is generated. If set to ``False``, no inventory list is generated.
* **Id**: string (Required): The ID used to identify the inventory configuration.
* **IncludedObjectVersions**: string (Required): Object versions to include in the inventory list. If set to ``All``, the list includes all the object versions, which adds the version-related fields ``VersionId``, ``IsLatest``, and ``DeleteMarker`` to the list. If set to ``Current``, the list does not contain these version-related fields.
* **OptionalFields**: string[]: Contains the optional fields that are included in the inventory results.
* **Prefix**: string: Specifies the inventory filter prefix.
* **ScheduleFrequency**: string (Required): Specifies the schedule for generating inventory results.

## LambdaConfiguration
### Properties
* **Event**: string (Required): The Amazon S3 bucket event for which to invoke the LAMlong function. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
* **Filter**: [NotificationFilter](#notificationfilter): The filtering rules that determine which objects invoke the AWS Lambda function. For example, you can create a filter so that only image files with a ``.jpg`` extension invoke the function when they are added to the Amazon S3 bucket.
* **Function**: string (Required): The Amazon Resource Name (ARN) of the LAMlong function that Amazon S3 invokes when the specified event type occurs.

## LifecycleConfiguration
### Properties
* **Rules**: [Rule](#rule)[] (Required, WriteOnly): A lifecycle rule for individual objects in an Amazon S3 bucket.
* **TransitionDefaultMinimumObjectSize**: string

## LoggingConfiguration
### Properties
* **DestinationBucketName**: string: The name of the bucket where Amazon S3 should store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the ``LoggingConfiguration`` property is defined.
* **LogFilePrefix**: string: A prefix for all log object keys. If you store log files from multiple Amazon S3 buckets in a single bucket, you can use a prefix to distinguish which log files came from which bucket.
* **TargetObjectKeyFormat**: [TargetObjectKeyFormat](#targetobjectkeyformat): Amazon S3 key format for log objects. Only one format, either PartitionedPrefix or SimplePrefix, is allowed.

## MatchObjectAge
### Properties
* **DaysGreaterThan**: int: Minimum object age to which the rule applies.
* **DaysLessThan**: int: Maximum object age to which the rule applies.

## MatchObjectSize
### Properties
* **BytesGreaterThan**: int: Minimum object size to which the rule applies.
* **BytesLessThan**: int: Maximum object size to which the rule applies.

## Metrics
### Properties
* **EventThreshold**: [ReplicationTimeValue](#replicationtimevalue): A container specifying the time threshold for emitting the ``s3:Replication:OperationMissedThreshold`` event.
* **Status**: string (Required): Specifies whether the replication metrics are enabled.

## MetricsConfiguration
### Properties
* **AccessPointArn**: string: The access point that was used while performing operations on the object. The metrics configuration only includes objects that meet the filter's criteria.
* **Id**: string (Required): The ID used to identify the metrics configuration. This can be any value you choose that helps you identify your metrics configuration.
* **Prefix**: string: The prefix that an object must have to be included in the metrics results.
* **TagFilters**: [TagFilter](#tagfilter)[]: Specifies a list of tag filters to use as a metrics configuration filter. The metrics configuration includes only objects that meet the filter's criteria.

## MultiRegionAccessPointPolicy_Policy
### Properties

## MultiRegionAccessPointPolicy_PolicyStatus
### Properties
* **IsPublic**: string (Required, ReadOnly): Specifies whether the policy is public or not.

## NoncurrentVersionExpiration
### Properties
* **NewerNoncurrentVersions**: int: Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
* **NoncurrentDays**: int (Required): Specifies the number of days an object is noncurrent before S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates When an Object Became Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.

## NoncurrentVersionTransition
### Properties
* **NewerNoncurrentVersions**: int: Specifies how many noncurrent versions S3 will retain. If there are this many more recent noncurrent versions, S3 will take the associated action. For more information about noncurrent versions, see [Lifecycle configuration elements](https://docs.aws.amazon.com/AmazonS3/latest/userguide/intro-lifecycle-rules.html) in the *Amazon S3 User Guide*.
* **StorageClass**: string (Required): The class of storage used to store the object.
* **TransitionInDays**: int (Required): Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action. For information about the noncurrent days calculations, see [How Amazon S3 Calculates How Long an Object Has Been Noncurrent](https://docs.aws.amazon.com/AmazonS3/latest/dev/intro-lifecycle-rules.html#non-current-days-calculations) in the *Amazon S3 User Guide*.

## NotificationConfiguration
### Properties
* **EventBridgeConfiguration**: [EventBridgeConfiguration](#eventbridgeconfiguration): Enables delivery of events to Amazon EventBridge.
* **LambdaConfigurations**: [LambdaConfiguration](#lambdaconfiguration)[]: Describes the LAMlong functions to invoke and the events for which to invoke them.
* **QueueConfigurations**: [QueueConfiguration](#queueconfiguration)[]: The Amazon Simple Queue Service queues to publish messages to and the events for which to publish messages.
* **TopicConfigurations**: [TopicConfiguration](#topicconfiguration)[]: The topic to which notifications are sent and the events for which notifications are generated.

## NotificationFilter
### Properties
* **S3Key**: [S3KeyFilter](#s3keyfilter) (Required): A container for object key name prefix and suffix filtering rules.

## ObjectLockConfiguration
### Properties
* **ObjectLockEnabled**: string: Indicates whether this bucket has an Object Lock configuration enabled. Enable ``ObjectLockEnabled`` when you apply ``ObjectLockConfiguration`` to a bucket.
* **Rule**: [ObjectLockRule](#objectlockrule): Specifies the Object Lock rule for the specified object. Enable this rule when you apply ``ObjectLockConfiguration`` to a bucket. If Object Lock is turned on, bucket settings require both ``Mode`` and a period of either ``Days`` or ``Years``. You cannot specify ``Days`` and ``Years`` at the same time. For more information, see [ObjectLockRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-objectlockrule.html) and [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).

## ObjectLockRule
### Properties
* **DefaultRetention**: [DefaultRetention](#defaultretention): The default Object Lock retention mode and period that you want to apply to new objects placed in the specified bucket. If Object Lock is turned on, bucket settings require both ``Mode`` and a period of either ``Days`` or ``Years``. You cannot specify ``Days`` and ``Years`` at the same time. For more information about allowable values for mode and period, see [DefaultRetention](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-s3-bucket-defaultretention.html).

## Or
### Properties
* **MatchAnyPrefix**: string[]
* **MatchAnySuffix**: string[]
* **MatchAnyTag**: [Tag](#tag)[]
* **MatchObjectAge**: [MatchObjectAge](#matchobjectage)
* **MatchObjectSize**: [MatchObjectSize](#matchobjectsize)

## OwnershipControls
### Properties
* **Rules**: [OwnershipControlsRule](#ownershipcontrolsrule)[] (Required): Specifies the container element for Object Ownership rules.

## OwnershipControlsRule
### Properties
* **ObjectOwnership**: string: Specifies an object ownership rule.

## PrefixLevel
### Properties
* **StorageMetrics**: [PrefixLevelStorageMetrics](#prefixlevelstoragemetrics) (Required)

## PrefixLevelStorageMetrics
### Properties
* **IsEnabled**: bool: Specifies whether prefix-level storage metrics are enabled or disabled.
* **SelectionCriteria**: [SelectionCriteria](#selectioncriteria)

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

## PublicAccessBlockConfiguration
### Properties
* **BlockPublicAcls**: bool: Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to ``TRUE`` causes the following behavior:
  +  PUT Bucket ACL and PUT Object ACL calls fail if the specified ACL is public.
  +  PUT Object calls fail if the request includes a public ACL.
  +  PUT Bucket calls fail if the request includes a public ACL.
  
 Enabling this setting doesn't affect existing policies or ACLs.
* **BlockPublicPolicy**: bool: Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to ``TRUE`` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access. 
 Enabling this setting doesn't affect existing bucket policies.
* **IgnorePublicAcls**: bool: Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to ``TRUE`` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
 Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
* **RestrictPublicBuckets**: bool: Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to ``TRUE`` restricts access to this bucket to only AWS-service principals and authorized users within this account if the bucket has a public policy.
 Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

## QueueConfiguration
### Properties
* **Event**: string (Required): The Amazon S3 bucket event about which you want to publish messages to Amazon SQS. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
* **Filter**: [NotificationFilter](#notificationfilter): The filtering rules that determine which objects trigger notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a ``.jpg`` extension are added to the bucket. For more information, see [Configuring event notifications using object key name filtering](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/notification-how-to-filtering.html) in the *Amazon S3 User Guide*.
* **Queue**: string (Required): The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type. FIFO queues are not allowed when enabling an SQS queue as the event notification destination.

## RedirectAllRequestsTo
### Properties
* **HostName**: string (Required): Name of the host where requests are redirected.
* **Protocol**: string: Protocol to use when redirecting requests. The default is the protocol that is used in the original request.

## RedirectRule
### Properties
* **HostName**: string: The host name to use in the redirect request.
* **HttpRedirectCode**: string: The HTTP redirect code to use on the response. Not required if one of the siblings is present.
* **Protocol**: string: Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
* **ReplaceKeyPrefixWith**: string: The object key prefix to use in the redirect request. For example, to redirect requests for all pages with prefix ``docs/`` (objects in the ``docs/`` folder) to ``documents/``, you can set a condition block with ``KeyPrefixEquals`` set to ``docs/`` and in the Redirect set ``ReplaceKeyPrefixWith`` to ``/documents``. Not required if one of the siblings is present. Can be present only if ``ReplaceKeyWith`` is not provided.
  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
* **ReplaceKeyWith**: string: The specific object key to use in the redirect request. For example, redirect request to ``error.html``. Not required if one of the siblings is present. Can be present only if ``ReplaceKeyPrefixWith`` is not provided.
  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).

## ReplicaModifications
### Properties
* **Status**: string (Required): Specifies whether Amazon S3 replicates modifications on replicas.
  *Allowed values*: ``Enabled`` | ``Disabled``

## ReplicationConfiguration
### Properties
* **Role**: string (Required): The Amazon Resource Name (ARN) of the IAMlong (IAM) role that Amazon S3 assumes when replicating objects. For more information, see [How to Set Up Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-how-setup.html) in the *Amazon S3 User Guide*.
* **Rules**: [ReplicationRule](#replicationrule)[] (Required, WriteOnly): A container for one or more replication rules. A replication configuration must have at least one rule and can contain a maximum of 1,000 rules.

## ReplicationDestination
### Properties
* **AccessControlTranslation**: [AccessControlTranslation](#accesscontroltranslation): Specify this only in a cross-account scenario (where source and destination bucket owners are not the same), and you want to change replica ownership to the AWS-account that owns the destination bucket. If this is not specified in the replication configuration, the replicas are owned by same AWS-account that owns the source object.
* **Account**: string: Destination bucket owner account ID. In a cross-account scenario, if you direct Amazon S3 to change replica ownership to the AWS-account that owns the destination bucket by specifying the ``AccessControlTranslation`` property, this is the account ID of the destination bucket owner. For more information, see [Cross-Region Replication Additional Configuration: Change Replica Owner](https://docs.aws.amazon.com/AmazonS3/latest/dev/crr-change-owner.html) in the *Amazon S3 User Guide*.
 If you specify the ``AccessControlTranslation`` property, the ``Account`` property is required.
* **Bucket**: string (Required): The Amazon Resource Name (ARN) of the bucket where you want Amazon S3 to store the results.
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration): Specifies encryption-related information.
* **Metrics**: [Metrics](#metrics): A container specifying replication metrics-related settings enabling replication metrics and events.
* **ReplicationTime**: [ReplicationTime](#replicationtime): A container specifying S3 Replication Time Control (S3 RTC), including whether S3 RTC is enabled and the time when all objects and operations on objects must be replicated. Must be specified together with a ``Metrics`` block.
* **StorageClass**: string: The storage class to use when replicating objects, such as S3 Standard or reduced redundancy. By default, Amazon S3 uses the storage class of the source object to create the object replica. 
 For valid values, see the ``StorageClass`` element of the [PUT Bucket replication](https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html) action in the *Amazon S3 API Reference*.

## ReplicationRule
### Properties
* **DeleteMarkerReplication**: [DeleteMarkerReplication](#deletemarkerreplication): Specifies whether Amazon S3 replicates delete markers. If you specify a ``Filter`` in your replication configuration, you must also include a ``DeleteMarkerReplication`` element. If your ``Filter`` includes a ``Tag`` element, the ``DeleteMarkerReplication`` ``Status`` must be set to Disabled, because Amazon S3 does not support replicating delete markers for tag-based rules. For an example configuration, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-config-min-rule-config). 
 For more information about delete marker replication, see [Basic Rule Configuration](https://docs.aws.amazon.com/AmazonS3/latest/dev/delete-marker-replication.html). 
  If you are using an earlier version of the replication configuration, Amazon S3 handles replication of delete markers differently. For more information, see [Backward Compatibility](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication-add-config.html#replication-backward-compat-considerations).
* **Destination**: [ReplicationDestination](#replicationdestination) (Required): A container for information about the replication destination and its configurations including enabling the S3 Replication Time Control (S3 RTC).
* **Filter**: [ReplicationRuleFilter](#replicationrulefilter): A filter that identifies the subset of objects to which the replication rule applies. A ``Filter`` must specify exactly one ``Prefix``, ``TagFilter``, or an ``And`` child element. The use of the filter field indicates that this is a V2 replication configuration. This field isn't supported in a V1 replication configuration.
  V1 replication configuration only supports filtering by key prefix. To filter using a V1 replication configuration, add the ``Prefix`` directly as a child element of the ``Rule`` element.
* **Id**: string: A unique identifier for the rule. The maximum value is 255 characters. If you don't specify a value, AWS CloudFormation generates a random ID. When using a V2 replication configuration this property is capitalized as "ID".
* **Prefix**: string: An object key name prefix that identifies the object or objects to which the rule applies. The maximum prefix length is 1,024 characters. To include all objects in a bucket, specify an empty string. To filter using a V1 replication configuration, add the ``Prefix`` directly as a child element of the ``Rule`` element.
  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
* **Priority**: int: The priority indicates which rule has precedence whenever two or more replication rules conflict. Amazon S3 will attempt to replicate objects according to all replication rules. However, if there are two or more rules with the same destination bucket, then objects will be replicated according to the rule with the highest priority. The higher the number, the higher the priority. 
 For more information, see [Replication](https://docs.aws.amazon.com/AmazonS3/latest/dev/replication.html) in the *Amazon S3 User Guide*.
* **SourceSelectionCriteria**: [SourceSelectionCriteria](#sourceselectioncriteria): A container that describes additional filters for identifying the source objects that you want to replicate. You can choose to enable or disable the replication of these objects.
* **Status**: string (Required): Specifies whether the rule is enabled.

## ReplicationRuleAndOperator
### Properties
* **Prefix**: string: An object key name prefix that identifies the subset of objects to which the rule applies.
* **TagFilters**: [TagFilter](#tagfilter)[]: An array of tags containing key and value pairs.

## ReplicationRuleFilter
### Properties
* **And**: [ReplicationRuleAndOperator](#replicationruleandoperator): A container for specifying rule filters. The filters determine the subset of objects to which the rule applies. This element is required only if you specify more than one filter. For example: 
  +  If you specify both a ``Prefix`` and a ``TagFilter``, wrap these filters in an ``And`` tag.
  +  If you specify a filter based on multiple tags, wrap the ``TagFilter`` elements in an ``And`` tag.
* **Prefix**: string: An object key name prefix that identifies the subset of objects to which the rule applies.
  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
* **TagFilter**: [TagFilter](#tagfilter): A container for specifying a tag key and value. 
 The rule applies only to objects that have the tag in their tag set.

## ReplicationTime
### Properties
* **Status**: string (Required): Specifies whether the replication time is enabled.
* **Time**: [ReplicationTimeValue](#replicationtimevalue) (Required): A container specifying the time by which replication should be complete for all objects and operations on objects.

## ReplicationTimeValue
### Properties
* **Minutes**: int (Required): Contains an integer specifying time in minutes. 
  Valid value: 15

## RoutingRule
### Properties
* **RedirectRule**: [RedirectRule](#redirectrule) (Required): Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
* **RoutingRuleCondition**: [RoutingRuleCondition](#routingrulecondition): A container for describing a condition that must be met for the specified redirect to apply. For example, 1. If request is for pages in the ``/docs`` folder, redirect to the ``/documents`` folder. 2. If request results in HTTP error 4xx, redirect request to another host where you might process the error.

## RoutingRuleCondition
### Properties
* **HttpErrorCodeReturnedEquals**: string: The HTTP error code when the redirect is applied. In the event of an error, if the error code equals this value, then the specified redirect is applied.
 Required when parent element ``Condition`` is specified and sibling ``KeyPrefixEquals`` is not specified. If both are specified, then both must be true for the redirect to be applied.
* **KeyPrefixEquals**: string: The object key name prefix when the redirect is applied. For example, to redirect requests for ``ExamplePage.html``, the key prefix will be ``ExamplePage.html``. To redirect request for all pages with the prefix ``docs/``, the key prefix will be ``/docs``, which identifies all objects in the docs/ folder.
 Required when the parent element ``Condition`` is specified and sibling ``HttpErrorCodeReturnedEquals`` is not specified. If both conditions are specified, both must be true for the redirect to be applied.

## Rule
### Properties
* **AbortIncompleteMultipartUpload**: [AbortIncompleteMultipartUpload](#abortincompletemultipartupload): Specifies a lifecycle rule that stops incomplete multipart uploads to an Amazon S3 bucket.
* **ExpirationDate**: string: Indicates when objects are deleted from Amazon S3 and Amazon S3 Glacier. The date value must be in ISO 8601 format. The time is always midnight UTC. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
* **ExpirationInDays**: int: Indicates the number of days after creation when objects are deleted from Amazon S3 and Amazon S3 Glacier. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time.
* **ExpiredObjectDeleteMarker**: bool: Indicates whether Amazon S3 will remove a delete marker without any noncurrent versions. If set to true, the delete marker will be removed if there are no noncurrent versions. This cannot be specified with ``ExpirationInDays``, ``ExpirationDate``, or ``TagFilters``.
* **Id**: string: Unique identifier for the rule. The value can't be longer than 255 characters.
* **NoncurrentVersionExpiration**: [NoncurrentVersionExpiration](#noncurrentversionexpiration): Specifies when noncurrent object versions expire. Upon expiration, S3 permanently deletes the noncurrent object versions. You set this lifecycle configuration action on a bucket that has versioning enabled (or suspended) to request that S3 delete noncurrent object versions at a specific period in the object's lifetime.
* **NoncurrentVersionExpirationInDays**: int: (Deprecated.) For buckets with versioning enabled (or suspended), specifies the time, in days, between when a new version of the object is uploaded to the bucket and when old versions of the object expire. When object versions expire, Amazon S3 permanently deletes them. If you specify a transition and expiration time, the expiration time must be later than the transition time.
* **NoncurrentVersionTransition**: [NoncurrentVersionTransition](#noncurrentversiontransition): (Deprecated.) For buckets with versioning enabled (or suspended), specifies when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the ``NoncurrentVersionTransitions`` property.
* **NoncurrentVersionTransitions**: [NoncurrentVersionTransition](#noncurrentversiontransition)[]: For buckets with versioning enabled (or suspended), one or more transition rules that specify when non-current objects transition to a specified storage class. If you specify a transition and expiration time, the expiration time must be later than the transition time. If you specify this property, don't specify the ``NoncurrentVersionTransition`` property.
* **ObjectSizeGreaterThan**: string: Specifies the minimum object size in bytes for this rule to apply to. Objects must be larger than this value in bytes. For more information about size based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide*.
* **ObjectSizeLessThan**: string: Specifies the maximum object size in bytes for this rule to apply to. Objects must be smaller than this value in bytes. For more information about sized based rules, see [Lifecycle configuration using size-based rules](https://docs.aws.amazon.com/AmazonS3/latest/userguide/lifecycle-configuration-examples.html#lc-size-rules) in the *Amazon S3 User Guide*.
* **Prefix**: string: Object key prefix that identifies one or more objects to which this rule applies.
  Replacement must be made for object keys containing special characters (such as carriage returns) when using XML requests. For more information, see [XML related object key constraints](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-keys.html#object-key-xml-related-constraints).
* **Status**: string (Required): If ``Enabled``, the rule is currently being applied. If ``Disabled``, the rule is not currently being applied.
* **TagFilters**: [TagFilter](#tagfilter)[]: Tags to use to identify a subset of objects to which the lifecycle rule applies.
* **Transition**: [Transition](#transition): (Deprecated.) Specifies when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the ``Transitions`` property.
* **Transitions**: [Transition](#transition)[]: One or more transition rules that specify when an object transitions to a specified storage class. If you specify an expiration and transition time, you must use the same time unit for both properties (either in days or by date). The expiration time must also be later than the transition time. If you specify this property, don't specify the ``Transition`` property.

## S3BucketDestination
### Properties
* **AccountId**: string (Required): The AWS account ID that owns the destination S3 bucket.
* **Arn**: string (Required): The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
* **Encryption**: [Encryption](#encryption)
* **Format**: string (Required): Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
* **OutputSchemaVersion**: string (Required): The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
* **Prefix**: string: The prefix to use for Amazon S3 Storage Lens export.

## S3KeyFilter
### Properties
* **Rules**: [FilterRule](#filterrule)[] (Required): A list of containers for the key-value pair that defines the criteria for the filter rule.

## SelectionCriteria
### Properties
* **Delimiter**: string: Delimiter to divide S3 key into hierarchy of prefixes.
* **MaxDepth**: int: Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
* **MinStorageBytesPercentage**: int: The minimum storage bytes threshold for the prefixes to be included in the analysis.

## ServerSideEncryptionByDefault
### Properties
* **KMSMasterKeyID**: string: AWS Key Management Service (KMS) customer managed key ID to use for the default encryption. 
   +   *General purpose buckets* - This parameter is allowed if and only if ``SSEAlgorithm`` is set to ``aws:kms`` or ``aws:kms:dsse``.
  +   *Directory buckets* - This parameter is allowed if and only if ``SSEAlgorithm`` is set to ``aws:kms``.
  
  You can specify the key ID, key alias, or the Amazon Resource Name (ARN) of the KMS key.
  +  Key ID: ``1234abcd-12ab-34cd-56ef-1234567890ab`` 
  +  Key ARN: ``arn:aws:kms:us-east-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab`` 
  +  Key Alias: ``alias/alias-name`` 
  
 If you are using encryption with cross-account or AWS service operations, you must use a fully qualified KMS key ARN. For more information, see [Using encryption for cross-account operations](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-encryption.html#bucket-encryption-update-bucket-policy).
   +   *General purpose buckets* - If you're specifying a customer managed KMS key, we recommend using a fully qualified KMS key ARN. If you use a KMS key alias instead, then KMS resolves the key within the requester?s account. This behavior can result in data that's encrypted with a KMS key that belongs to the requester, and not the bucket owner. Also, if you use a key ID, you can run into a LogDestination undeliverable error when creating a VPC flow log. 
  +   *Directory buckets* - When you specify an [customer managed key](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#customer-cmk) for encryption in your directory bucket, only use the key ID or key ARN. The key alias format of the KMS key isn't supported.
  
   Amazon S3 only supports symmetric encryption KMS keys. For more information, see [Asymmetric keys in KMS](https://docs.aws.amazon.com//kms/latest/developerguide/symmetric-asymmetric.html) in the *Key Management Service Developer Guide*.
* **SSEAlgorithm**: string (Required): Server-side encryption algorithm to use for the default encryption.
  For directory buckets, there are only two supported values for server-side encryption: ``AES256`` and ``aws:kms``.

## ServerSideEncryptionRule
### Properties
* **BucketKeyEnabled**: bool: Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the ``BucketKeyEnabled`` element to ``true`` causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
 For more information, see [Amazon S3 Bucket Keys](https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html) in the *Amazon S3 User Guide*.
* **ServerSideEncryptionByDefault**: [ServerSideEncryptionByDefault](#serversideencryptionbydefault): Specifies the default server-side encryption to apply to new objects in the bucket. If a PUT Object request doesn't specify any server-side encryption, this default encryption will be applied.

## SourceSelectionCriteria
### Properties
* **ReplicaModifications**: [ReplicaModifications](#replicamodifications): A filter that you can specify for selection for modifications on replicas.
* **SseKmsEncryptedObjects**: [SseKmsEncryptedObjects](#ssekmsencryptedobjects): A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.

## SseKmsEncryptedObjects
### Properties
* **Status**: string (Required): Specifies whether Amazon S3 replicates objects created with server-side encryption using an AWS KMS key stored in AWS Key Management Service.

## StorageClassAnalysis
### Properties
* **DataExport**: [DataExport](#dataexport): Specifies how data related to the storage class analysis for an Amazon S3 bucket should be exported.

## StorageLensConfiguration
### Properties
* **AccountLevel**: [AccountLevel](#accountlevel) (Required)
* **AwsOrg**: [AwsOrg](#awsorg)
* **DataExport**: [DataExport](#dataexport)
* **Exclude**: [BucketsAndRegions](#bucketsandregions)
* **Id**: string (Required)
* **Include**: [BucketsAndRegions](#bucketsandregions)
* **IsEnabled**: bool (Required): Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
* **StorageLensArn**: string (ReadOnly): The ARN for the Amazon S3 Storage Lens configuration.

## StorageLensGroupLevel
### Properties
* **StorageLensGroupSelectionCriteria**: [StorageLensGroupSelectionCriteria](#storagelensgroupselectioncriteria)

## StorageLensGroupSelectionCriteria
### Properties
* **Exclude**: string[]
* **Include**: string[]

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
* **Key**: string (Required): Name of the object key.
* **Value**: string (Required): Value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TagFilter
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TargetObjectKeyFormat
### Properties

## Tiering
### Properties
* **AccessTier**: string (Required): S3 Intelligent-Tiering access tier. See [Storage class for automatically optimizing frequently and infrequently accessed objects](https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html#sc-dynamic-data-access) for a list of access tiers in the S3 Intelligent-Tiering storage class.
* **Days**: int (Required): The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).

## TopicConfiguration
### Properties
* **Event**: string (Required): The Amazon S3 bucket event about which to send notifications. For more information, see [Supported Event Types](https://docs.aws.amazon.com/AmazonS3/latest/dev/NotificationHowTo.html) in the *Amazon S3 User Guide*.
* **Filter**: [NotificationFilter](#notificationfilter): The filtering rules that determine for which objects to send notifications. For example, you can create a filter so that Amazon S3 sends notifications only when image files with a ``.jpg`` extension are added to the bucket.
* **Topic**: string (Required): The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.

## Transition
### Properties
* **StorageClass**: string (Required): The storage class to which you want the object to transition.
* **TransitionDate**: string: Indicates when objects are transitioned to the specified storage class. The date value must be in ISO 8601 format. The time is always midnight UTC.
* **TransitionInDays**: int: Indicates the number of days after creation when objects are transitioned to the specified storage class. The value must be a positive integer.

## VersioningConfiguration
### Properties
* **Status**: string (Required): The versioning state of the bucket.

## VpcConfiguration
### Properties
* **VpcId**: string: If this field is specified, this access point will only allow connections from the specified VPC ID.

## WebsiteConfiguration
### Properties
* **ErrorDocument**: string: The name of the error document for the website.
* **IndexDocument**: string: The name of the index document for the website.
* **RedirectAllRequestsTo**: [RedirectAllRequestsTo](#redirectallrequeststo): The redirect behavior for every request to this bucket's website endpoint.
  If you specify this property, you can't specify any other property.
* **RoutingRules**: [RoutingRule](#routingrule)[]: Rules that define when a redirect is applied and the redirect behavior.

