# AWS.DynamoDB @ default

## Resource AWS.DynamoDB/GlobalTable@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DynamoDB/GlobalTableProperties](#awsdynamodbglobaltableproperties) (Required): properties of the resource

## Resource AWS.DynamoDB/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DynamoDB/TableProperties](#awsdynamodbtableproperties) (Required): properties of the resource

## AWS.DynamoDB/GlobalTableProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributeDefinitions**: [AttributeDefinition](#attributedefinition)[] (Required)
* **BillingMode**: string
* **GlobalSecondaryIndexes**: [GlobalSecondaryIndex](#globalsecondaryindex)[]
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **LocalSecondaryIndexes**: [LocalSecondaryIndex](#localsecondaryindex)[]
* **Replicas**: [ReplicaSpecification](#replicaspecification)[] (Required)
* **SSESpecification**: [SSESpecification](#ssespecification)
* **StreamArn**: string (ReadOnly)
* **StreamSpecification**: [StreamSpecification](#streamspecification)
* **TableId**: string (ReadOnly)
* **TableName**: string
* **TimeToLiveSpecification**: [TimeToLiveSpecification](#timetolivespecification)
* **WriteProvisionedThroughputSettings**: [WriteProvisionedThroughputSettings](#writeprovisionedthroughputsettings)

## AttributeDefinition
### Properties
* **AttributeName**: string (Required)
* **AttributeType**: string (Required)

## GlobalSecondaryIndex
### Properties
* **IndexName**: string (Required)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **Projection**: [Projection](#projection) (Required)
* **WriteProvisionedThroughputSettings**: [WriteProvisionedThroughputSettings](#writeprovisionedthroughputsettings)

## KeySchema
### Properties
* **AttributeName**: string (Required)
* **KeyType**: string (Required)

## Projection
### Properties
* **NonKeyAttributes**: string[]
* **ProjectionType**: string

## WriteProvisionedThroughputSettings
### Properties
* **WriteCapacityAutoScalingSettings**: [CapacityAutoScalingSettings](#capacityautoscalingsettings)

## CapacityAutoScalingSettings
### Properties
* **MaxCapacity**: int (Required)
* **MinCapacity**: int (Required)
* **SeedCapacity**: int
* **TargetTrackingScalingPolicyConfiguration**: [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration) (Required)

## TargetTrackingScalingPolicyConfiguration
### Properties
* **DisableScaleIn**: bool
* **ScaleInCooldown**: int
* **ScaleOutCooldown**: int
* **TargetValue**: int (Required)

## LocalSecondaryIndex
### Properties
* **IndexName**: string (Required)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **Projection**: [Projection](#projection) (Required)

## ReplicaSpecification
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **GlobalSecondaryIndexes**: [ReplicaGlobalSecondaryIndexSpecification](#replicaglobalsecondaryindexspecification)[]
* **PointInTimeRecoverySpecification**: [PointInTimeRecoverySpecification](#pointintimerecoveryspecification)
* **ReadProvisionedThroughputSettings**: [ReadProvisionedThroughputSettings](#readprovisionedthroughputsettings)
* **Region**: string (Required)
* **SSESpecification**: [ReplicaSSESpecification](#replicassespecification)
* **TableClass**: string
* **Tags**: [Tag](#tag)[]

## ContributorInsightsSpecification
### Properties
* **Enabled**: bool (Required)

## ReplicaGlobalSecondaryIndexSpecification
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **IndexName**: string (Required)
* **ReadProvisionedThroughputSettings**: [ReadProvisionedThroughputSettings](#readprovisionedthroughputsettings)

## ReadProvisionedThroughputSettings
### Properties
* **ReadCapacityAutoScalingSettings**: [CapacityAutoScalingSettings](#capacityautoscalingsettings)
* **ReadCapacityUnits**: int

## PointInTimeRecoverySpecification
### Properties
* **PointInTimeRecoveryEnabled**: bool

## ReplicaSSESpecification
### Properties
* **KMSMasterKeyId**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## SSESpecification
### Properties
* **SSEEnabled**: bool (Required)
* **SSEType**: string

## StreamSpecification
### Properties
* **StreamViewType**: string (Required)

## TimeToLiveSpecification
### Properties
* **AttributeName**: string
* **Enabled**: bool (Required)

## AWS.DynamoDB/TableProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributeDefinitions**: [AttributeDefinition](#attributedefinition)[]
* **BillingMode**: string
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **GlobalSecondaryIndexes**: [GlobalSecondaryIndex](#globalsecondaryindex)[]
* **ImportSourceSpecification**: [ImportSourceSpecification](#importsourcespecification) (WriteOnly)
* **KeySchema**: [Table_KeySchema](#tablekeyschema) (Required)
* **KinesisStreamSpecification**: [KinesisStreamSpecification](#kinesisstreamspecification)
* **LocalSecondaryIndexes**: [LocalSecondaryIndex](#localsecondaryindex)[]
* **PointInTimeRecoverySpecification**: [PointInTimeRecoverySpecification](#pointintimerecoveryspecification)
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)
* **SSESpecification**: [SSESpecification](#ssespecification)
* **StreamArn**: string (ReadOnly)
* **StreamSpecification**: [StreamSpecification](#streamspecification)
* **TableClass**: string
* **TableName**: string
* **Tags**: [Tag](#tag)[]
* **TimeToLiveSpecification**: [TimeToLiveSpecification](#timetolivespecification)

## AttributeDefinition
### Properties
* **AttributeName**: string (Required)
* **AttributeType**: string (Required)

## ContributorInsightsSpecification
### Properties
* **Enabled**: bool (Required)

## GlobalSecondaryIndex
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **IndexName**: string (Required)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **Projection**: [Projection](#projection) (Required)
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)

## KeySchema
### Properties
* **AttributeName**: string (Required)
* **KeyType**: string (Required)

## Projection
### Properties
* **NonKeyAttributes**: string[]
* **ProjectionType**: string

## ProvisionedThroughput
### Properties
* **ReadCapacityUnits**: int (Required)
* **WriteCapacityUnits**: int (Required)

## ImportSourceSpecification
### Properties
* **InputCompressionType**: string
* **InputFormat**: string (Required)
* **InputFormatOptions**: [InputFormatOptions](#inputformatoptions)
* **S3BucketSource**: [S3BucketSource](#s3bucketsource) (Required)

## InputFormatOptions
### Properties
* **Csv**: [Csv](#csv)

## Csv
### Properties
* **Delimiter**: string
* **HeaderList**: string[]

## S3BucketSource
### Properties
* **S3Bucket**: string (Required)
* **S3BucketOwner**: string
* **S3KeyPrefix**: string

## Table_KeySchema
### Properties

## KinesisStreamSpecification
### Properties
* **StreamArn**: string (Required)

## LocalSecondaryIndex
### Properties
* **IndexName**: string (Required)
* **KeySchema**: [KeySchema](#keyschema)[] (Required)
* **Projection**: [Projection](#projection) (Required)

## PointInTimeRecoverySpecification
### Properties
* **PointInTimeRecoveryEnabled**: bool

## SSESpecification
### Properties
* **KMSMasterKeyId**: string
* **SSEEnabled**: bool (Required)
* **SSEType**: string

## StreamSpecification
### Properties
* **StreamViewType**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TimeToLiveSpecification
### Properties
* **AttributeName**: string (Required)
* **Enabled**: bool (Required)

