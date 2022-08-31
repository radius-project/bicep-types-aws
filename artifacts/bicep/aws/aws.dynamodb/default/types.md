# AWS.DynamoDB @ default

## Resource AWS.DynamoDB/GlobalTable@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DynamoDB/GlobalTableProperties](#awsdynamodbglobaltableproperties): properties of the resource

## Resource AWS.DynamoDB/Table@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.DynamoDB/TableProperties](#awsdynamodbtableproperties): properties of the resource

## AWS.DynamoDB/GlobalTableProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributeDefinitions**: [AttributeDefinition](#attributedefinition)[]
* **BillingMode**: string
* **GlobalSecondaryIndexes**: [GlobalSecondaryIndex](#globalsecondaryindex)[]
* **KeySchema**: [KeySchema](#keyschema)[]
* **LocalSecondaryIndexes**: [LocalSecondaryIndex](#localsecondaryindex)[]
* **Replicas**: [ReplicaSpecification](#replicaspecification)[]
* **SSESpecification**: [SSESpecification](#ssespecification)
* **StreamArn**: string (ReadOnly)
* **StreamSpecification**: [StreamSpecification](#streamspecification)
* **TableId**: string (ReadOnly)
* **TableName**: string
* **TimeToLiveSpecification**: [TimeToLiveSpecification](#timetolivespecification)
* **WriteProvisionedThroughputSettings**: [WriteProvisionedThroughputSettings](#writeprovisionedthroughputsettings)

## AttributeDefinition
### Properties
* **AttributeName**: string
* **AttributeType**: string

## GlobalSecondaryIndex
### Properties
* **IndexName**: string
* **KeySchema**: [KeySchema](#keyschema)[]
* **Projection**: [Projection](#projection)
* **WriteProvisionedThroughputSettings**: [WriteProvisionedThroughputSettings](#writeprovisionedthroughputsettings)

## KeySchema
### Properties
* **AttributeName**: string
* **KeyType**: string

## Projection
### Properties
* **NonKeyAttributes**: string[]
* **ProjectionType**: string

## WriteProvisionedThroughputSettings
### Properties
* **WriteCapacityAutoScalingSettings**: [CapacityAutoScalingSettings](#capacityautoscalingsettings)

## CapacityAutoScalingSettings
### Properties
* **MaxCapacity**: int
* **MinCapacity**: int
* **SeedCapacity**: int
* **TargetTrackingScalingPolicyConfiguration**: [TargetTrackingScalingPolicyConfiguration](#targettrackingscalingpolicyconfiguration)

## TargetTrackingScalingPolicyConfiguration
### Properties
* **DisableScaleIn**: bool
* **ScaleInCooldown**: int
* **ScaleOutCooldown**: int
* **TargetValue**: int

## LocalSecondaryIndex
### Properties
* **IndexName**: string
* **KeySchema**: [KeySchema](#keyschema)[]
* **Projection**: [Projection](#projection)

## ReplicaSpecification
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **GlobalSecondaryIndexes**: [ReplicaGlobalSecondaryIndexSpecification](#replicaglobalsecondaryindexspecification)[]
* **PointInTimeRecoverySpecification**: [PointInTimeRecoverySpecification](#pointintimerecoveryspecification)
* **ReadProvisionedThroughputSettings**: [ReadProvisionedThroughputSettings](#readprovisionedthroughputsettings)
* **Region**: string
* **SSESpecification**: [ReplicaSSESpecification](#replicassespecification)
* **TableClass**: string
* **Tags**: [Tag](#tag)[]

## ContributorInsightsSpecification
### Properties
* **Enabled**: bool

## ReplicaGlobalSecondaryIndexSpecification
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **IndexName**: string
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
* **KMSMasterKeyId**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## SSESpecification
### Properties
* **SSEEnabled**: bool
* **SSEType**: string

## StreamSpecification
### Properties
* **StreamViewType**: string

## TimeToLiveSpecification
### Properties
* **AttributeName**: string
* **Enabled**: bool

## AWS.DynamoDB/TableProperties
### Properties
* **Arn**: string (ReadOnly)
* **AttributeDefinitions**: [AttributeDefinition](#attributedefinition)[]
* **BillingMode**: string
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **GlobalSecondaryIndexes**: [GlobalSecondaryIndex](#globalsecondaryindex)[]
* **ImportSourceSpecification**: [ImportSourceSpecification](#importsourcespecification) (WriteOnly)
* **KeySchema**: [Table_KeySchema](#tablekeyschema)
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
* **AttributeName**: string
* **AttributeType**: string

## ContributorInsightsSpecification
### Properties
* **Enabled**: bool

## GlobalSecondaryIndex
### Properties
* **ContributorInsightsSpecification**: [ContributorInsightsSpecification](#contributorinsightsspecification)
* **IndexName**: string
* **KeySchema**: [KeySchema](#keyschema)[]
* **Projection**: [Projection](#projection)
* **ProvisionedThroughput**: [ProvisionedThroughput](#provisionedthroughput)

## KeySchema
### Properties
* **AttributeName**: string
* **KeyType**: string

## Projection
### Properties
* **NonKeyAttributes**: string[]
* **ProjectionType**: string

## ProvisionedThroughput
### Properties
* **ReadCapacityUnits**: int
* **WriteCapacityUnits**: int

## ImportSourceSpecification
### Properties
* **InputCompressionType**: string
* **InputFormat**: string
* **InputFormatOptions**: [InputFormatOptions](#inputformatoptions)
* **S3BucketSource**: [S3BucketSource](#s3bucketsource)

## InputFormatOptions
### Properties
* **Csv**: [Csv](#csv)

## Csv
### Properties
* **Delimiter**: string
* **HeaderList**: string[]

## S3BucketSource
### Properties
* **S3Bucket**: string
* **S3BucketOwner**: string
* **S3KeyPrefix**: string

## Table_KeySchema
### Properties

## KinesisStreamSpecification
### Properties
* **StreamArn**: string

## LocalSecondaryIndex
### Properties
* **IndexName**: string
* **KeySchema**: [KeySchema](#keyschema)[]
* **Projection**: [Projection](#projection)

## PointInTimeRecoverySpecification
### Properties
* **PointInTimeRecoveryEnabled**: bool

## SSESpecification
### Properties
* **KMSMasterKeyId**: string
* **SSEEnabled**: bool
* **SSEType**: string

## StreamSpecification
### Properties
* **StreamViewType**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## TimeToLiveSpecification
### Properties
* **AttributeName**: string
* **Enabled**: bool

