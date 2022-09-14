# AWS.S3 @ default

## Resource AWS.S3/AccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3/AccessPointProperties](#awss3accesspointproperties) (Required): properties of the resource

## Resource AWS.S3/Bucket@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3/BucketProperties](#awss3bucketproperties): properties of the resource

## Resource AWS.S3/MultiRegionAccessPoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3/MultiRegionAccessPointProperties](#awss3multiregionaccesspointproperties) (Required): properties of the resource

## Resource AWS.S3/MultiRegionAccessPointPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3/MultiRegionAccessPointPolicyProperties](#awss3multiregionaccesspointpolicyproperties) (Required): properties of the resource

## Resource AWS.S3/StorageLens@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.S3/StorageLensProperties](#awss3storagelensproperties) (Required): properties of the resource

## AWS.S3/AccessPointProperties
### Properties
* **Alias**: string (ReadOnly): The alias of this Access Point. This alias can be used for compatibility purposes with other AWS services and third-party applications.
* **Arn**: [Arn](#arn) (ReadOnly): The Amazon Resource Name (ARN) of the specified accesspoint.
* **Bucket**: string (Required): The name of the bucket that you want to associate this Access Point with.
* **Name**: string (ReadOnly): The name you want to assign to this Access Point. If you don't specify a name, AWS CloudFormation generates a unique ID and uses that ID for the access point name.
* **NetworkOrigin**: string (ReadOnly): Indicates whether this Access Point allows access from the public Internet. If VpcConfiguration is specified for this Access Point, then NetworkOrigin is VPC, and the Access Point doesn't allow access from the public Internet. Otherwise, NetworkOrigin is Internet, and the Access Point allows access from the public Internet, subject to the Access Point and bucket access policies.
* **Policy**: [AccessPoint_Policy](#accesspointpolicy): The Access Point Policy you want to apply to this access point.
* **PolicyStatus**: [AccessPoint_PolicyStatus](#accesspointpolicystatus)
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration): The PublicAccessBlock configuration that you want to apply to this Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
* **VpcConfiguration**: [VpcConfiguration](#vpcconfiguration): If you include this field, Amazon S3 restricts access to this Access Point to requests from the specified Virtual Private Cloud (VPC).

## Arn
### Properties

## AccessPoint_Policy
### Properties

## AccessPoint_PolicyStatus
### Properties
* **IsPublic**: string: Specifies whether the policy is public or not.

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

## VpcConfiguration
### Properties
* **VpcId**: string: If this field is specified, this access point will only allow connections from the specified VPC ID.

## AWS.S3/BucketProperties
### Properties
* **AccelerateConfiguration**: [AccelerateConfiguration](#accelerateconfiguration): Configuration for the transfer acceleration state.
* **AccessControl**: string: A canned access control list (ACL) that grants predefined permissions to the bucket.
* **AnalyticsConfigurations**: [AnalyticsConfiguration](#analyticsconfiguration)[]: The configuration and any analyses for the analytics filter of an Amazon S3 bucket.
* **Arn**: [Arn](#arn) (ReadOnly): The Amazon Resource Name (ARN) of the specified bucket.
* **BucketEncryption**: [BucketEncryption](#bucketencryption)
* **BucketName**: string: A name for the bucket. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the bucket name.
* **CorsConfiguration**: [CorsConfiguration](#corsconfiguration): Rules that define cross-origin resource sharing of objects in this bucket.
* **DomainName**: string (ReadOnly): The IPv4 DNS name of the specified bucket.
* **DualStackDomainName**: string (ReadOnly): The IPv6 DNS name of the specified bucket. For more information about dual-stack endpoints, see [Using Amazon S3 Dual-Stack Endpoints](https://docs.aws.amazon.com/AmazonS3/latest/dev/dual-stack-endpoints.html).
* **IntelligentTieringConfigurations**: [IntelligentTieringConfiguration](#intelligenttieringconfiguration)[]: Specifies the S3 Intelligent-Tiering configuration for an Amazon S3 bucket.
* **InventoryConfigurations**: [InventoryConfiguration](#inventoryconfiguration)[]: The inventory configuration for an Amazon S3 bucket.
* **LifecycleConfiguration**: [LifecycleConfiguration](#lifecycleconfiguration): Rules that define how Amazon S3 manages objects during their lifetime.
* **LoggingConfiguration**: [LoggingConfiguration](#loggingconfiguration): Settings that define where logs are stored.
* **MetricsConfigurations**: [MetricsConfiguration](#metricsconfiguration)[]: Settings that define a metrics configuration for the CloudWatch request metrics from the bucket.
* **NotificationConfiguration**: [NotificationConfiguration](#notificationconfiguration): Configuration that defines how Amazon S3 handles bucket notifications.
* **ObjectLockConfiguration**: [ObjectLockConfiguration](#objectlockconfiguration): Places an Object Lock configuration on the specified bucket.
* **ObjectLockEnabled**: bool: Indicates whether this bucket has an Object Lock configuration enabled.
* **OwnershipControls**: [OwnershipControls](#ownershipcontrols): Specifies the container element for object ownership rules.
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration)
* **RegionalDomainName**: string (ReadOnly): Returns the regional domain name of the specified bucket.
* **ReplicationConfiguration**: [ReplicationConfiguration](#replicationconfiguration): Configuration for replicating objects in an S3 bucket.
* **Tags**: [Tag](#tag)[]: An arbitrary set of tags (key-value pairs) for this S3 bucket.
* **VersioningConfiguration**: [VersioningConfiguration](#versioningconfiguration)
* **WebsiteConfiguration**: [WebsiteConfiguration](#websiteconfiguration)
* **WebsiteURL**: string (ReadOnly): The Amazon S3 website endpoint for the specified bucket.

## AccelerateConfiguration
### Properties
* **AccelerationStatus**: string (Required): Configures the transfer acceleration state for an Amazon S3 bucket.

## AnalyticsConfiguration
### Properties
* **Id**: string (Required): The ID that identifies the analytics configuration.
* **Prefix**: string: The prefix that an object must have to be included in the analytics results.
* **StorageClassAnalysis**: [StorageClassAnalysis](#storageclassanalysis) (Required)
* **TagFilters**: [TagFilter](#tagfilter)[]

## StorageClassAnalysis
### Properties
* **DataExport**: [DataExport](#dataexport)

## DataExport
### Properties
* **Destination**: [Destination](#destination) (Required)
* **OutputSchemaVersion**: string (Required): The version of the output schema to use when exporting data.

## Destination
### Properties
* **BucketAccountId**: string: The account ID that owns the destination S3 bucket. 
* **BucketArn**: string (Required): The Amazon Resource Name (ARN) of the bucket to which data is exported.
* **Format**: string (Required): Specifies the file format used when exporting data to Amazon S3.
* **Prefix**: string: The prefix to use when exporting data. The prefix is prepended to all results.

## TagFilter
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Arn
### Properties

## BucketEncryption
### Properties
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionRule](#serversideencryptionrule)[] (Required): Specifies the default server-side-encryption configuration.

## ServerSideEncryptionRule
### Properties
* **BucketKeyEnabled**: bool: Specifies whether Amazon S3 should use an S3 Bucket Key with server-side encryption using KMS (SSE-KMS) for new objects in the bucket. Existing objects are not affected. Setting the BucketKeyEnabled element to true causes Amazon S3 to use an S3 Bucket Key. By default, S3 Bucket Key is not enabled.
* **ServerSideEncryptionByDefault**: [ServerSideEncryptionByDefault](#serversideencryptionbydefault)

## ServerSideEncryptionByDefault
### Properties
* **KMSMasterKeyID**: string: "KMSMasterKeyID" can only be used when you set the value of SSEAlgorithm as aws:kms.
* **SSEAlgorithm**: string (Required)

## CorsConfiguration
### Properties
* **CorsRules**: [CorsRule](#corsrule)[] (Required)

## CorsRule
### Properties
* **AllowedHeaders**: string[]: Headers that are specified in the Access-Control-Request-Headers header.
* **AllowedMethods**: string[] (Required): An HTTP method that you allow the origin to execute.
* **AllowedOrigins**: string[] (Required): One or more origins you want customers to be able to access the bucket from.
* **ExposedHeaders**: string[]: One or more headers in the response that you want customers to be able to access from their applications (for example, from a JavaScript XMLHttpRequest object).
* **Id**: string: A unique identifier for this rule.
* **MaxAge**: int: The time in seconds that your browser is to cache the preflight response for the specified resource.

## IntelligentTieringConfiguration
### Properties
* **Id**: string (Required): The ID used to identify the S3 Intelligent-Tiering configuration.
* **Prefix**: string: An object key name prefix that identifies the subset of objects to which the rule applies.
* **Status**: string (Required): Specifies the status of the configuration.
* **TagFilters**: [TagFilter](#tagfilter)[]: A container for a key-value pair.
* **Tierings**: [Tiering](#tiering)[] (Required): Specifies a list of S3 Intelligent-Tiering storage class tiers in the configuration. At least one tier must be defined in the list. At most, you can specify two tiers in the list, one for each available AccessTier: ARCHIVE_ACCESS and DEEP_ARCHIVE_ACCESS.

## Tiering
### Properties
* **AccessTier**: string (Required): S3 Intelligent-Tiering access tier. See Storage class for automatically optimizing frequently and infrequently accessed objects for a list of access tiers in the S3 Intelligent-Tiering storage class.
* **Days**: int (Required): The number of consecutive days of no access after which an object will be eligible to be transitioned to the corresponding tier. The minimum number of days specified for Archive Access tier must be at least 90 days and Deep Archive Access tier must be at least 180 days. The maximum can be up to 2 years (730 days).

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
* **Rules**: [Rule](#rule)[] (Required): A lifecycle rule for individual objects in an Amazon S3 bucket.

## Rule
### Properties
* **AbortIncompleteMultipartUpload**: [AbortIncompleteMultipartUpload](#abortincompletemultipartupload)
* **ExpirationDate**: [iso8601UTC](#iso8601utc)
* **ExpirationInDays**: int
* **ExpiredObjectDeleteMarker**: bool
* **Id**: string
* **NoncurrentVersionExpiration**: [NoncurrentVersionExpiration](#noncurrentversionexpiration)
* **NoncurrentVersionExpirationInDays**: int
* **NoncurrentVersionTransition**: [NoncurrentVersionTransition](#noncurrentversiontransition)
* **NoncurrentVersionTransitions**: [NoncurrentVersionTransition](#noncurrentversiontransition)[]
* **ObjectSizeGreaterThan**: string
* **ObjectSizeLessThan**: string
* **Prefix**: string
* **Status**: string (Required)
* **TagFilters**: [TagFilter](#tagfilter)[]
* **Transition**: [Transition](#transition)
* **Transitions**: [Transition](#transition)[]

## AbortIncompleteMultipartUpload
### Properties
* **DaysAfterInitiation**: int (Required): Specifies the number of days after which Amazon S3 aborts an incomplete multipart upload.

## iso8601UTC
### Properties

## NoncurrentVersionExpiration
### Properties
* **NewerNoncurrentVersions**: int: Specified the number of newer noncurrent and current versions that must exists before performing the associated action
* **NoncurrentDays**: int (Required): Specified the number of days an object is noncurrent before Amazon S3 can perform the associated action

## NoncurrentVersionTransition
### Properties
* **NewerNoncurrentVersions**: int: Specified the number of newer noncurrent and current versions that must exists before performing the associated action
* **StorageClass**: string (Required): The class of storage used to store the object.
* **TransitionInDays**: int (Required): Specifies the number of days an object is noncurrent before Amazon S3 can perform the associated action.

## Transition
### Properties
* **StorageClass**: string (Required)
* **TransitionDate**: [iso8601UTC](#iso8601utc)
* **TransitionInDays**: int

## LoggingConfiguration
### Properties
* **DestinationBucketName**: string: The name of an Amazon S3 bucket where Amazon S3 store server access log files. You can store log files in any bucket that you own. By default, logs are stored in the bucket where the LoggingConfiguration property is defined.
* **LogFilePrefix**: string

## MetricsConfiguration
### Properties
* **AccessPointArn**: string
* **Id**: string (Required)
* **Prefix**: string
* **TagFilters**: [TagFilter](#tagfilter)[]

## NotificationConfiguration
### Properties
* **EventBridgeConfiguration**: [EventBridgeConfiguration](#eventbridgeconfiguration)
* **LambdaConfigurations**: [LambdaConfiguration](#lambdaconfiguration)[]
* **QueueConfigurations**: [QueueConfiguration](#queueconfiguration)[]
* **TopicConfigurations**: [TopicConfiguration](#topicconfiguration)[]

## EventBridgeConfiguration
### Properties
* **EventBridgeEnabled**: bool (Required): Specifies whether to send notifications to Amazon EventBridge when events occur in an Amazon S3 bucket.

## LambdaConfiguration
### Properties
* **Event**: string (Required): The Amazon S3 bucket event for which to invoke the AWS Lambda function.
* **Filter**: [NotificationFilter](#notificationfilter): The filtering rules that determine which objects invoke the AWS Lambda function.
* **Function**: string (Required): The Amazon Resource Name (ARN) of the AWS Lambda function that Amazon S3 invokes when the specified event type occurs.

## NotificationFilter
### Properties
* **S3Key**: [S3KeyFilter](#s3keyfilter) (Required)

## S3KeyFilter
### Properties
* **Rules**: [FilterRule](#filterrule)[] (Required)

## FilterRule
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## QueueConfiguration
### Properties
* **Event**: string (Required): The Amazon S3 bucket event about which you want to publish messages to Amazon SQS.
* **Filter**: [NotificationFilter](#notificationfilter): The filtering rules that determine which objects trigger notifications.
* **Queue**: string (Required): The Amazon Resource Name (ARN) of the Amazon SQS queue to which Amazon S3 publishes a message when it detects events of the specified type.

## TopicConfiguration
### Properties
* **Event**: string (Required): The Amazon S3 bucket event about which to send notifications.
* **Filter**: [NotificationFilter](#notificationfilter): The filtering rules that determine for which objects to send notifications.
* **Topic**: string (Required): The Amazon Resource Name (ARN) of the Amazon SNS topic to which Amazon S3 publishes a message when it detects events of the specified type.

## ObjectLockConfiguration
### Properties
* **ObjectLockEnabled**: string
* **Rule**: [ObjectLockRule](#objectlockrule)

## ObjectLockRule
### Properties
* **DefaultRetention**: [DefaultRetention](#defaultretention)

## DefaultRetention
### Properties
* **Days**: int
* **Mode**: string
* **Years**: int

## OwnershipControls
### Properties
* **Rules**: [OwnershipControlsRule](#ownershipcontrolsrule)[] (Required)

## OwnershipControlsRule
### Properties
* **ObjectOwnership**: string: Specifies an object ownership rule.

## PublicAccessBlockConfiguration
### Properties
* **BlockPublicAcls**: bool: Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to TRUE causes the following behavior:
- PUT Bucket acl and PUT Object acl calls fail if the specified ACL is public.
 - PUT Object calls fail if the request includes a public ACL.
Enabling this setting doesn't affect existing policies or ACLs.
* **BlockPublicPolicy**: bool: Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to TRUE causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
Enabling this setting doesn't affect existing bucket policies.
* **IgnorePublicAcls**: bool: Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to TRUE causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
* **RestrictPublicBuckets**: bool: Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to TRUE restricts access to this bucket to only AWS services and authorized users within this account if the bucket has a public policy.
Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.

## ReplicationConfiguration
### Properties
* **Role**: string (Required): The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that Amazon S3 assumes when replicating objects.
* **Rules**: [ReplicationRule](#replicationrule)[] (Required): A container for one or more replication rules.

## ReplicationRule
### Properties
* **DeleteMarkerReplication**: [DeleteMarkerReplication](#deletemarkerreplication)
* **Destination**: [ReplicationDestination](#replicationdestination) (Required)
* **Filter**: [ReplicationRuleFilter](#replicationrulefilter)
* **Id**: string: A unique identifier for the rule.
* **Prefix**: string: An object key name prefix that identifies the object or objects to which the rule applies.
* **Priority**: int
* **SourceSelectionCriteria**: [SourceSelectionCriteria](#sourceselectioncriteria)
* **Status**: string (Required): Specifies whether the rule is enabled.

## DeleteMarkerReplication
### Properties
* **Status**: string

## ReplicationDestination
### Properties
* **AccessControlTranslation**: [AccessControlTranslation](#accesscontroltranslation)
* **Account**: string
* **Bucket**: string (Required)
* **EncryptionConfiguration**: [EncryptionConfiguration](#encryptionconfiguration)
* **Metrics**: [Metrics](#metrics)
* **ReplicationTime**: [ReplicationTime](#replicationtime)
* **StorageClass**: string: The storage class to use when replicating objects, such as S3 Standard or reduced redundancy.

## AccessControlTranslation
### Properties
* **Owner**: string (Required)

## EncryptionConfiguration
### Properties
* **ReplicaKmsKeyID**: string (Required): Specifies the ID (Key ARN or Alias ARN) of the customer managed customer master key (CMK) stored in AWS Key Management Service (KMS) for the destination bucket.

## Metrics
### Properties
* **EventThreshold**: [ReplicationTimeValue](#replicationtimevalue)
* **Status**: string (Required)

## ReplicationTimeValue
### Properties
* **Minutes**: int (Required)

## ReplicationTime
### Properties
* **Status**: string (Required)
* **Time**: [ReplicationTimeValue](#replicationtimevalue) (Required)

## ReplicationRuleFilter
### Properties
* **And**: [ReplicationRuleAndOperator](#replicationruleandoperator)
* **Prefix**: string
* **TagFilter**: [TagFilter](#tagfilter)

## ReplicationRuleAndOperator
### Properties
* **Prefix**: string
* **TagFilters**: [TagFilter](#tagfilter)[]

## SourceSelectionCriteria
### Properties
* **ReplicaModifications**: [ReplicaModifications](#replicamodifications): A filter that you can specify for selection for modifications on replicas.
* **SseKmsEncryptedObjects**: [SseKmsEncryptedObjects](#ssekmsencryptedobjects): A container for filter information for the selection of Amazon S3 objects encrypted with AWS KMS.

## ReplicaModifications
### Properties
* **Status**: string (Required): Specifies whether Amazon S3 replicates modifications on replicas.

## SseKmsEncryptedObjects
### Properties
* **Status**: string (Required): Specifies whether Amazon S3 replicates objects created with server-side encryption using a customer master key (CMK) stored in AWS Key Management Service.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VersioningConfiguration
### Properties
* **Status**: string (Required): The versioning state of the bucket.

## WebsiteConfiguration
### Properties
* **ErrorDocument**: string: The name of the error document for the website.
* **IndexDocument**: string: The name of the index document for the website.
* **RedirectAllRequestsTo**: [RedirectAllRequestsTo](#redirectallrequeststo)
* **RoutingRules**: [RoutingRule](#routingrule)[]

## RedirectAllRequestsTo
### Properties
* **HostName**: string (Required): Name of the host where requests are redirected.
* **Protocol**: string: Protocol to use when redirecting requests. The default is the protocol that is used in the original request.

## RoutingRule
### Properties
* **RedirectRule**: [RedirectRule](#redirectrule) (Required): Container for redirect information. You can redirect requests to another host, to another page, or with another protocol. In the event of an error, you can specify a different error code to return.
* **RoutingRuleCondition**: [RoutingRuleCondition](#routingrulecondition)

## RedirectRule
### Properties
* **HostName**: string: The host name to use in the redirect request.
* **HttpRedirectCode**: string: The HTTP redirect code to use on the response. Not required if one of the siblings is present.
* **Protocol**: string: Protocol to use when redirecting requests. The default is the protocol that is used in the original request.
* **ReplaceKeyPrefixWith**: string: The object key prefix to use in the redirect request.
* **ReplaceKeyWith**: string: The specific object key to use in the redirect request.d

## RoutingRuleCondition
### Properties
* **HttpErrorCodeReturnedEquals**: string: The HTTP error code when the redirect is applied. 
* **KeyPrefixEquals**: string: The object key name prefix when the redirect is applied.

## AWS.S3/MultiRegionAccessPointProperties
### Properties
* **Alias**: string (ReadOnly): The alias is a unique identifier to, and is part of the public DNS name for this Multi Region Access Point
* **CreatedAt**: string (ReadOnly): The timestamp of the when the Multi Region Access Point is created
* **Name**: string: The name you want to assign to this Multi Region Access Point.
* **PublicAccessBlockConfiguration**: [PublicAccessBlockConfiguration](#publicaccessblockconfiguration): The PublicAccessBlock configuration that you want to apply to this Multi Region Access Point. You can enable the configuration options in any combination. For more information about when Amazon S3 considers a bucket or object public, see https://docs.aws.amazon.com/AmazonS3/latest/dev/access-control-block-public-access.html#access-control-block-public-access-policy-status 'The Meaning of Public' in the Amazon Simple Storage Service Developer Guide.
* **Regions**: [Region](#region)[] (Required): The list of buckets that you want to associate this Multi Region Access Point with.

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

## Region
### Properties
* **AccountId**: string
* **Bucket**: string (Required)

## AWS.S3/MultiRegionAccessPointPolicyProperties
### Properties
* **MrapName**: string (Required): The name of the Multi Region Access Point to apply policy
* **Policy**: [MultiRegionAccessPointPolicy_Policy](#multiregionaccesspointpolicypolicy) (Required): Policy document to apply to a Multi Region Access Point
* **PolicyStatus**: [MultiRegionAccessPointPolicy_PolicyStatus](#multiregionaccesspointpolicypolicystatus) (ReadOnly): The Policy Status associated with this Multi Region Access Point

## MultiRegionAccessPointPolicy_Policy
### Properties

## MultiRegionAccessPointPolicy_PolicyStatus
### Properties
* **IsPublic**: string (Required, ReadOnly): Specifies whether the policy is public or not.

## AWS.S3/StorageLensProperties
### Properties
* **StorageLensConfiguration**: [StorageLensConfiguration](#storagelensconfiguration) (Required)
* **Tags**: [Tag](#tag)[]: A set of tags (key-value pairs) for this Amazon S3 Storage Lens configuration.

## StorageLensConfiguration
### Properties
* **AccountLevel**: [AccountLevel](#accountlevel) (Required)
* **AwsOrg**: [AwsOrg](#awsorg)
* **DataExport**: [DataExport](#dataexport)
* **Exclude**: [BucketsAndRegions](#bucketsandregions)
* **Id**: [Id](#id) (Required)
* **Include**: [BucketsAndRegions](#bucketsandregions)
* **IsEnabled**: bool (Required): Specifies whether the Amazon S3 Storage Lens configuration is enabled or disabled.
* **StorageLensArn**: string (ReadOnly): The ARN for the Amazon S3 Storage Lens configuration.

## AccountLevel
### Properties
* **ActivityMetrics**: [ActivityMetrics](#activitymetrics)
* **BucketLevel**: [BucketLevel](#bucketlevel) (Required)

## ActivityMetrics
### Properties
* **IsEnabled**: bool: Specifies whether activity metrics are enabled or disabled.

## BucketLevel
### Properties
* **ActivityMetrics**: [ActivityMetrics](#activitymetrics)
* **PrefixLevel**: [PrefixLevel](#prefixlevel)

## PrefixLevel
### Properties
* **StorageMetrics**: [PrefixLevelStorageMetrics](#prefixlevelstoragemetrics) (Required)

## PrefixLevelStorageMetrics
### Properties
* **IsEnabled**: bool: Specifies whether prefix-level storage metrics are enabled or disabled.
* **SelectionCriteria**: [SelectionCriteria](#selectioncriteria)

## SelectionCriteria
### Properties
* **Delimiter**: string: Delimiter to divide S3 key into hierarchy of prefixes.
* **MaxDepth**: int: Max depth of prefixes of S3 key that Amazon S3 Storage Lens will analyze.
* **MinStorageBytesPercentage**: int: The minimum storage bytes threshold for the prefixes to be included in the analysis.

## AwsOrg
### Properties
* **Arn**: [Arn](#arn) (Required)

## Arn
### Properties

## DataExport
### Properties
* **CloudWatchMetrics**: [CloudWatchMetrics](#cloudwatchmetrics)
* **S3BucketDestination**: [S3BucketDestination](#s3bucketdestination)

## CloudWatchMetrics
### Properties
* **IsEnabled**: bool (Required): Specifies whether CloudWatch metrics are enabled or disabled.

## S3BucketDestination
### Properties
* **AccountId**: string (Required): The AWS account ID that owns the destination S3 bucket.
* **Arn**: string (Required): The ARN of the bucket to which Amazon S3 Storage Lens exports will be placed.
* **Encryption**: [Encryption](#encryption)
* **Format**: string (Required): Specifies the file format to use when exporting Amazon S3 Storage Lens metrics export.
* **OutputSchemaVersion**: string (Required): The version of the output schema to use when exporting Amazon S3 Storage Lens metrics.
* **Prefix**: string: The prefix to use for Amazon S3 Storage Lens export.

## Encryption
### Properties

## BucketsAndRegions
### Properties
* **Buckets**: [Arn](#arn)[]
* **Regions**: string[]

## Id
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

