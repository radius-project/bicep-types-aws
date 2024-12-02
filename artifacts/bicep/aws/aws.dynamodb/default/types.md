# AWS.DynamoDB @ default

## Resource AWS.DynamoDB/GlobalTable@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DynamoDB/GlobalTableProperties](#awsdynamodbglobaltableproperties) (Required, Identifier): properties of the resource

## Resource AWS.DynamoDB/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DynamoDB/TableProperties](#awsdynamodbtableproperties) (Required, Identifier): properties of the resource

## AttributeDefinition
### Properties
* **AttributeName**: string (Required)
* **AttributeType**: string (Required)

## AttributeDefinition
### Properties
* **AttributeName**: string (Required): A name for the attribute.
* **AttributeType**: string (Required): The data type for the attribute, where:
  +   ``S`` - the attribute is of type String
  +   ``N`` - the attribute is of type Number
  +   ``B`` - the attribute is of type Binary

## AWS.DynamoDB/GlobalTableProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributeDefinitions**: [AttributeDefinition](#attributedefinition)[] (Required)
* **BillingMode**: string
* **GlobalSecondaryIndexes**: [GlobalSecondaryIndex](#globalsecondaryindex)[] (WriteOnly)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **LocalSecondaryIndexes**: [LocalSecondaryIndex](#localsecondaryindex)[]
* **Replicas**: [ReplicaSpecification](#replicaspecification)[] (Required, WriteOnly)
* **SSESpecification**: [SSESpecification](#ssespecification)
* **StreamArn**: string (ReadOnly)
* **StreamSpecification**: [StreamSpecification](#streamspecification)
* **TableId**: string (ReadOnly)
* **TableName**: string (Identifier)
* **TimeToLiveSpecification**: [TimeToLiveSpecification](#timetolivespecification)
* **WarmThroughput**: [WarmThroughput](#warmthroughput)
* **WriteOnDemandThroughputSettings**: [WriteOnDemandThroughputSettings](#writeondemandthroughputsettings)
* **WriteProvisionedThroughputSettings**: [WriteProvisionedThroughputSettings](#writeprovisionedthroughputsettings)

## AWS.DynamoDB/TableProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributeDefinitions**: [AttributeDefinition](#attributedefinition)[]: A list of attributes that describe the key schema for the table and indexes.
 This property is required to create a DDB table.
 Update requires: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt). Replacement if you edit an existing AttributeDefinition.
* **BillingMode**: string: Specify how you are charged for read and write throughput and how you manage capacity.
 Valid values include:
  +   ``PROVISIONED`` - We recommend using ``PROVISIONED`` for predictable workloads. ``PROVISIONED`` sets the billing mode to [Provisioned Mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.ProvisionedThroughput.Manual).
  +   ``PAY_PER_REQUEST`` - We recommend using ``PAY_PER_REQUEST`` for unpredictable workloads. ``PAY_PER_REQUEST`` sets the billing mode to [On-Demand Mode](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadWriteCapacityMode.html#HowItWorks.OnDemand).
  
 If not specified, the default is ``PROVISIONED``.
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification): The settings used to enable or disable CloudWatch Contributor Insights for the specified table.
* **DeletionProtectionEnabled**: bool: Determines if a table is protected from deletion. When enabled, the table cannot be deleted by any user or process. This setting is disabled by default. For more information, see [Using deletion protection](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/WorkingWithTables.Basics.html#WorkingWithTables.Basics.DeletionProtection) in the *Developer Guide*.
* **GlobalSecondaryIndexes**: [GlobalSecondaryIndex](#globalsecondaryindex)[]: Global secondary indexes to be created on the table. You can create up to 20 global secondary indexes.
  If you update a table to include a new global secondary index, CFNlong initiates the index creation and then proceeds with the stack update. CFNlong doesn't wait for the index to complete creation because the backfilling phase can take a long time, depending on the size of the table. You can't use the index or update the table until the index's status is ``ACTIVE``. You can track its status by using the DynamoDB [DescribeTable](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/describe-table.html) command.
 If you add or delete an index during an update, we recommend that you don't update any other resources. If your stack fails to update and is rolled back while adding a new index, you must manually delete the index. 
 Updates are not supported. The following are exceptions:
  +  If you update either the contributor insights specification or the provisioned throughput values of global secondary indexes, you can update the table without interruption.
  +  You can delete or add one global secondary index without interruption. If you do both in the same update (for example, by changing the index's logical ID), the update fails.
* **ImportSourceSpecification**: [ImportSourceSpecification](#importsourcespecification) (WriteOnly): Specifies the properties of data being imported from the S3 bucket source to the table.
  If you specify the ``ImportSourceSpecification`` property, and also specify either the ``StreamSpecification``, the ``TableClass`` property, or the ``DeletionProtectionEnabled`` property, the IAM entity creating/updating stack must have ``UpdateTable`` permission.
* **KeySchema**: [Table_KeySchema](#tablekeyschema) (Required): Specifies the attributes that make up the primary key for the table. The attributes in the ``KeySchema`` property must also be defined in the ``AttributeDefinitions`` property.
* **KinesisStreamSpecification**: [KinesisStreamSpecification](#kinesisstreamspecification): The Kinesis Data Streams configuration for the specified table.
* **LocalSecondaryIndexes**: [LocalSecondaryIndex](#localsecondaryindex)[]: Local secondary indexes to be created on the table. You can create up to 5 local secondary indexes. Each index is scoped to a given hash key value. The size of each hash key can be up to 10 gigabytes.
* **OnDemandThroughput**: [OnDemandThroughput](#ondemandthroughput): Sets the maximum number of read and write units for the specified on-demand table. If you use this property, you must specify ``MaxReadRequestUnits``, ``MaxWriteRequestUnits``, or both.
* **PointInTimeRecoverySpecification**: [PointInTimeRecoverySpecification](#pointintimerecoveryspecification): The settings used to enable point in time recovery.
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput): Throughput for the specified table, which consists of values for ``ReadCapacityUnits`` and ``WriteCapacityUnits``. For more information about the contents of a provisioned throughput structure, see [Amazon DynamoDB Table ProvisionedThroughput](https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_ProvisionedThroughput.html). 
 If you set ``BillingMode`` as ``PROVISIONED``, you must specify this property. If you set ``BillingMode`` as ``PAY_PER_REQUEST``, you cannot specify this property.
* **ResourcePolicy**: [ResourcePolicy](#resourcepolicy): A resource-based policy document that contains permissions to add to the specified table. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
 When you attach a resource-based policy while creating a table, the policy creation is *strongly consistent*. For information about the considerations that you should keep in mind while attaching a resource-based policy, see [Resource-based policy considerations](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-considerations.html).
* **SSESpecification**: [SSESpecification](#ssespecification): Specifies the settings to enable server-side encryption.
* **StreamArn**: string (ReadOnly)
* **StreamSpecification**: [StreamSpecification](#streamspecification): The settings for the DDB table stream, which capture changes to items stored in the table.
* **TableClass**: string: The table class of the new table. Valid values are ``STANDARD`` and ``STANDARD_INFREQUENT_ACCESS``.
* **TableName**: string (Identifier): A name for the table. If you don't specify a name, CFNlong generates a unique physical ID and uses that ID for the table name. For more information, see [Name Type](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-name.html).
  If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
* **TimeToLiveSpecification**: [TimeToLiveSpecification](#timetolivespecification): Specifies the Time to Live (TTL) settings for the table.
  For detailed information about the limits in DynamoDB, see [Limits in Amazon DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the Amazon DynamoDB Developer Guide.
* **WarmThroughput**: [WarmThroughput](#warmthroughput): Represents the warm throughput (in read units per second and write units per second) for creating a table.

## CapacityAutoScalingSettings
### Properties
* **MaxCapacity**: int (Required)
* **MinCapacity**: int (Required)
* **SeedCapacity**: int (WriteOnly)
* **TargetTrackingScalingPolicyConfiguration**: [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration) (Required)

## ContributorInsightsSpecification
### Properties
* **Enabled**: bool (Required)

## ContributorInsightsSpecification
### Properties
* **Enabled**: bool (Required): Indicates whether CloudWatch Contributor Insights are to be enabled (true) or disabled (false).

## Csv
### Properties
* **Delimiter**: string: The delimiter used for separating items in the CSV file being imported.
* **HeaderList**: string[]: List of the headers used to specify a common header for all source CSV files being imported. If this field is specified then the first line of each CSV file is treated as data instead of the header. If this field is not specified the the first line of each CSV file is treated as the header.

## GlobalSecondaryIndex
### Properties
* **IndexName**: string (Required)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **Projection**: [Projection](#projection) (Required)
* **WarmThroughput**: [WarmThroughput](#warmthroughput)
* **WriteOnDemandThroughputSettings**: [WriteOnDemandThroughputSettings](#writeondemandthroughputsettings)
* **WriteProvisionedThroughputSettings**: [WriteProvisionedThroughputSettings](#writeprovisionedthroughputsettings)

## GlobalSecondaryIndex
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification): The settings used to enable or disable CloudWatch Contributor Insights for the specified global secondary index.
* **IndexName**: string (Required): The name of the global secondary index. The name must be unique among all other indexes on this table.
* **KeySchema**: [KeySchema](#keyschema)[] (Required): The complete key schema for a global secondary index, which consists of one or more pairs of attribute names and key types:
  +   ``HASH`` - partition key
  +   ``RANGE`` - sort key
  
  The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
* **OnDemandThroughput**: [OnDemandThroughput](#ondemandthroughput): The maximum number of read and write units for the specified global secondary index. If you use this parameter, you must specify ``MaxReadRequestUnits``, ``MaxWriteRequestUnits``, or both.
* **Projection**: [Projection](#projection) (Required): Represents attributes that are copied (projected) from the table into the global secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput): Represents the provisioned throughput settings for the specified global secondary index.
 For current minimum and maximum provisioned throughput values, see [Service, Account, and Table Quotas](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Limits.html) in the *Amazon DynamoDB Developer Guide*.
* **WarmThroughput**: [WarmThroughput](#warmthroughput): Represents the warm throughput value (in read units per second and write units per second) for the specified secondary index. If you use this parameter, you must specify ``ReadUnitsPerSecond``, ``WriteUnitsPerSecond``, or both.

## GlobalTable_PolicyDocument
### Properties

## ImportSourceSpecification
### Properties
* **InputCompressionType**: string: Type of compression to be used on the input coming from the imported table.
* **InputFormat**: string (Required): The format of the source data. Valid values for ``ImportFormat`` are ``CSV``, ``DYNAMODB_JSON`` or ``ION``.
* **InputFormatOptions**: [InputFormatOptions](#inputformatoptions): Additional properties that specify how the input is formatted,
* **S3BucketSource**: [S3BucketSource](#s3bucketsource) (Required): The S3 bucket that provides the source for the import.

## InputFormatOptions
### Properties
* **Csv**: [Csv](#csv): The options for imported source files in CSV format. The values are Delimiter and HeaderList.

## KeySchema
### Properties
* **AttributeName**: string (Required)
* **KeyType**: string (Required)

## KeySchema
### Properties
* **AttributeName**: string (Required): The name of a key attribute.
* **KeyType**: string (Required): The role that this key attribute will assume:
  +   ``HASH`` - partition key
  +   ``RANGE`` - sort key
  
  The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.

## KinesisStreamSpecification
### Properties
* **ApproximateCreationDateTimePrecision**: string
* **StreamArn**: string (Required)

## KinesisStreamSpecification
### Properties
* **ApproximateCreationDateTimePrecision**: string: The precision for the time and date that the stream was created.
* **StreamArn**: string (Required): The ARN for a specific Kinesis data stream.
 Length Constraints: Minimum length of 37. Maximum length of 1024.

## LocalSecondaryIndex
### Properties
* **IndexName**: string (Required)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **Projection**: [Projection](#projection) (Required)

## LocalSecondaryIndex
### Properties
* **IndexName**: string (Required): The name of the local secondary index. The name must be unique among all other indexes on this table.
* **KeySchema**: [KeySchema](#keyschema)[] (Required): The complete key schema for the local secondary index, consisting of one or more pairs of attribute names and key types:
  +   ``HASH`` - partition key
  +   ``RANGE`` - sort key
  
  The partition key of an item is also known as its *hash attribute*. The term "hash attribute" derives from DynamoDB's usage of an internal hash function to evenly distribute data items across partitions, based on their partition key values.
 The sort key of an item is also known as its *range attribute*. The term "range attribute" derives from the way DynamoDB stores items with the same partition key physically close together, in sorted order by the sort key value.
* **Projection**: [Projection](#projection) (Required): Represents attributes that are copied (projected) from the table into the local secondary index. These are in addition to the primary key attributes and index key attributes, which are automatically projected.

## OnDemandThroughput
### Properties
* **MaxReadRequestUnits**: int: Maximum number of read request units for the specified table.
 To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxReadRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxReadRequestUnits`` to -1.
* **MaxWriteRequestUnits**: int: Maximum number of write request units for the specified table.
 To specify a maximum ``OnDemandThroughput`` on your table, set the value of ``MaxWriteRequestUnits`` as greater than or equal to 1. To remove the maximum ``OnDemandThroughput`` that is currently set on your table, set the value of ``MaxWriteRequestUnits`` to -1.

## PointInTimeRecoverySpecification
### Properties
* **PointInTimeRecoveryEnabled**: bool

## PointInTimeRecoverySpecification
### Properties
* **PointInTimeRecoveryEnabled**: bool: Indicates whether point in time recovery is enabled (true) or disabled (false) on the table.

## Projection
### Properties
* **NonKeyAttributes**: string[]
* **ProjectionType**: string

## Projection
### Properties
* **NonKeyAttributes**: string[]: Represents the non-key attribute names which will be projected into the index.
 For local secondary indexes, the total count of ``NonKeyAttributes`` summed across all of the local secondary indexes, must not exceed 100. If you project the same attribute into two different indexes, this counts as two distinct attributes when determining the total.
* **ProjectionType**: string: The set of attributes that are projected into the index:
  +   ``KEYS_ONLY`` - Only the index and primary keys are projected into the index.
  +   ``INCLUDE`` - In addition to the attributes described in ``KEYS_ONLY``, the secondary index will include other non-key attributes that you specify.
  +   ``ALL`` - All of the table attributes are projected into the index.
  
 When using the DynamoDB console, ``ALL`` is selected by default.

## ProvisionedThroughput
### Properties
* **ReadCapacityUnits**: int (Required): The maximum number of strongly consistent reads consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
 If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.
* **WriteCapacityUnits**: int (Required): The maximum number of writes consumed per second before DynamoDB returns a ``ThrottlingException``. For more information, see [Specifying Read and Write Requirements](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html) in the *Amazon DynamoDB Developer Guide*.
 If read/write capacity mode is ``PAY_PER_REQUEST`` the value is set to 0.

## ReadOnDemandThroughputSettings
### Properties
* **MaxReadRequestUnits**: int

## ReadProvisionedThroughputSettings
### Properties
* **ReadCapacityAutoScalingSettings**: [CapacityAutoScalingSettings](#capacityautoscalingsettings)
* **ReadCapacityUnits**: int

## ReplicaGlobalSecondaryIndexSpecification
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **IndexName**: string (Required)
* **ReadOnDemandThroughputSettings**: [ReadOnDemandThroughputSettings](#readondemandthroughputsettings)
* **ReadProvisionedThroughputSettings**: [ReadProvisionedThroughputSettings](#readprovisionedthroughputsettings)

## ReplicaSpecification
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **DeletionProtectionEnabled**: bool
* **GlobalSecondaryIndexes**: [ReplicaGlobalSecondaryIndexSpecification](#replicaglobalsecondaryindexspecification)[]
* **KinesisStreamSpecification**: [KinesisStreamSpecification](#kinesisstreamspecification)
* **PointInTimeRecoverySpecification**: [PointInTimeRecoverySpecification](#pointintimerecoveryspecification)
* **ReadOnDemandThroughputSettings**: [ReadOnDemandThroughputSettings](#readondemandthroughputsettings)
* **ReadProvisionedThroughputSettings**: [ReadProvisionedThroughputSettings](#readprovisionedthroughputsettings)
* **Region**: string (Required)
* **ReplicaStreamSpecification**: [ReplicaStreamSpecification](#replicastreamspecification)
* **ResourcePolicy**: [ResourcePolicy](#resourcepolicy)
* **SSESpecification**: [ReplicaSSESpecification](#replicassespecification)
* **TableClass**: string
* **Tags**: [Tag](#tag)[]

## ReplicaSSESpecification
### Properties
* **KMSMasterKeyId**: string (Required)

## ReplicaStreamSpecification
### Properties
* **ResourcePolicy**: [ResourcePolicy](#resourcepolicy) (Required)

## ResourcePolicy
### Properties
* **PolicyDocument**: [GlobalTable_PolicyDocument](#globaltablepolicydocument) (Required)

## ResourcePolicy
### Properties
* **PolicyDocument**: [Table_PolicyDocument](#tablepolicydocument) (Required): A resource-based policy document that contains permissions to add to the specified DDB table, index, or both. In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).

## S3BucketSource
### Properties
* **S3Bucket**: string (Required): The S3 bucket that is being imported from.
* **S3BucketOwner**: string: The account number of the S3 bucket that is being imported from. If the bucket is owned by the requester this is optional.
* **S3KeyPrefix**: string: The key prefix shared by all S3 Objects that are being imported.

## SSESpecification
### Properties
* **SSEEnabled**: bool (Required)
* **SSEType**: string

## SSESpecification
### Properties
* **KMSMasterKeyId**: string: The KMS key that should be used for the KMS encryption. To specify a key, use its key ID, Amazon Resource Name (ARN), alias name, or alias ARN. Note that you should only provide this parameter if the key is different from the default DynamoDB key ``alias/aws/dynamodb``.
* **SSEEnabled**: bool (Required): Indicates whether server-side encryption is done using an AWS managed key or an AWS owned key. If enabled (true), server-side encryption type is set to ``KMS`` and an AWS managed key is used (KMS charges apply). If disabled (false) or not specified, server-side encryption is set to AWS owned key.
* **SSEType**: string: Server-side encryption type. The only supported value is:
  +   ``KMS`` - Server-side encryption that uses KMSlong. The key is stored in your account and is managed by KMS (KMS charges apply).

## StreamSpecification
### Properties
* **StreamViewType**: string (Required)

## StreamSpecification
### Properties
* **ResourcePolicy**: [ResourcePolicy](#resourcepolicy): Creates or updates a resource-based policy document that contains the permissions for DDB resources, such as a table's streams. Resource-based policies let you define access permissions by specifying who has access to each resource, and the actions they are allowed to perform on each resource.
 In a CFNshort template, you can provide the policy in JSON or YAML format because CFNshort converts YAML to JSON before submitting it to DDB. For more information about resource-based policies, see [Using resource-based policies for](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/access-control-resource-based.html) and [Resource-based policy examples](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/rbac-examples.html).
* **StreamViewType**: string (Required): When an item in the table is modified, ``StreamViewType`` determines what information is written to the stream for this table. Valid values for ``StreamViewType`` are:
  +   ``KEYS_ONLY`` - Only the key attributes of the modified item are written to the stream.
  +   ``NEW_IMAGE`` - The entire item, as it appears after it was modified, is written to the stream.
  +   ``OLD_IMAGE`` - The entire item, as it appeared before it was modified, is written to the stream.
  +   ``NEW_AND_OLD_IMAGES`` - Both the new and the old item images of the item are written to the stream.

## Table_KeySchema
### Properties

## Table_PolicyDocument
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key of the tag. Tag keys are case sensitive. Each DynamoDB table can only have up to one tag with the same key. If you try to add an existing tag (same key), the existing tag value will be updated to the new value.
* **Value**: string (Required): The value of the tag. Tag values are case-sensitive and can be null.

## TargetTrackingScalingPolicyConfiguration
### Properties
* **DisableScaleIn**: bool
* **ScaleInCooldown**: int
* **ScaleOutCooldown**: int
* **TargetValue**: int (Required)

## TimeToLiveSpecification
### Properties
* **AttributeName**: string
* **Enabled**: bool (Required)

## TimeToLiveSpecification
### Properties
* **AttributeName**: string: The name of the TTL attribute used to store the expiration time for items in the table.
   +  The ``AttributeName`` property is required when enabling the TTL, or when TTL is already enabled.
  +  To update this property, you must first disable TTL and then enable TTL with the new attribute name.
* **Enabled**: bool (Required): Indicates whether TTL is to be enabled (true) or disabled (false) on the table.

## WarmThroughput
### Properties
* **ReadUnitsPerSecond**: int
* **WriteUnitsPerSecond**: int

## WarmThroughput
### Properties
* **ReadUnitsPerSecond**: int: Represents the number of read operations your base table can instantaneously support.
* **WriteUnitsPerSecond**: int: Represents the number of write operations your base table can instantaneously support.

## WriteOnDemandThroughputSettings
### Properties
* **MaxWriteRequestUnits**: int

## WriteProvisionedThroughputSettings
### Properties
* **WriteCapacityAutoScalingSettings**: [CapacityAutoScalingSettings](#capacityautoscalingsettings)

