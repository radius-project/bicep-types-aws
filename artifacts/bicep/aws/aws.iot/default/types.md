# AWS.IoT @ default

## Resource AWS.IoT/AccountAuditConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/AccountAuditConfigurationProperties](#awsiotaccountauditconfigurationproperties): properties of the resource

## Resource AWS.IoT/Authorizer@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/AuthorizerProperties](#awsiotauthorizerproperties): properties of the resource

## Resource AWS.IoT/CACertificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/CACertificateProperties](#awsiotcacertificateproperties): properties of the resource

## Resource AWS.IoT/Certificate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/CertificateProperties](#awsiotcertificateproperties): properties of the resource

## Resource AWS.IoT/CustomMetric@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/CustomMetricProperties](#awsiotcustommetricproperties): properties of the resource

## Resource AWS.IoT/Dimension@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/DimensionProperties](#awsiotdimensionproperties): properties of the resource

## Resource AWS.IoT/DomainConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/DomainConfigurationProperties](#awsiotdomainconfigurationproperties): properties of the resource

## Resource AWS.IoT/FleetMetric@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/FleetMetricProperties](#awsiotfleetmetricproperties): properties of the resource

## Resource AWS.IoT/Logging@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/LoggingProperties](#awsiotloggingproperties): properties of the resource

## Resource AWS.IoT/MitigationAction@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/MitigationActionProperties](#awsiotmitigationactionproperties): properties of the resource

## Resource AWS.IoT/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/PolicyProperties](#awsiotpolicyproperties): properties of the resource

## Resource AWS.IoT/ProvisioningTemplate@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/ProvisioningTemplateProperties](#awsiotprovisioningtemplateproperties): properties of the resource

## Resource AWS.IoT/ResourceSpecificLogging@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/ResourceSpecificLoggingProperties](#awsiotresourcespecificloggingproperties): properties of the resource

## Resource AWS.IoT/RoleAlias@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/RoleAliasProperties](#awsiotrolealiasproperties): properties of the resource

## Resource AWS.IoT/ScheduledAudit@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/ScheduledAuditProperties](#awsiotscheduledauditproperties): properties of the resource

## Resource AWS.IoT/SecurityProfile@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/SecurityProfileProperties](#awsiotsecurityprofileproperties): properties of the resource

## Resource AWS.IoT/TopicRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/TopicRuleProperties](#awsiottopicruleproperties): properties of the resource

## Resource AWS.IoT/TopicRuleDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoT/TopicRuleDestinationProperties](#awsiottopicruledestinationproperties): properties of the resource

## AWS.IoT/AccountAuditConfigurationProperties
### Properties
* **AccountId**: string: Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
* **AuditCheckConfigurations**: [AuditCheckConfigurations](#auditcheckconfigurations)
* **AuditNotificationTargetConfigurations**: [AuditNotificationTargetConfigurations](#auditnotificationtargetconfigurations)
* **RoleArn**: string: The ARN of the role that grants permission to AWS IoT to access information about your devices, policies, certificates and other items as required when performing an audit.

## AuditCheckConfigurations
### Properties
* **AuthenticatedCognitoRoleOverlyPermissiveCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **CaCertificateExpiringCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **CaCertificateKeyQualityCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **ConflictingClientIdsCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **DeviceCertificateExpiringCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **DeviceCertificateKeyQualityCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **DeviceCertificateSharedCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **IotPolicyOverlyPermissiveCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **IotRoleAliasAllowsAccessToUnusedServicesCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **IotRoleAliasOverlyPermissiveCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **LoggingDisabledCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **RevokedCaCertificateStillActiveCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **RevokedDeviceCertificateStillActiveCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)
* **UnauthenticatedCognitoRoleOverlyPermissiveCheck**: [AuditCheckConfiguration](#auditcheckconfiguration)

## AuditCheckConfiguration
### Properties
* **Enabled**: bool: True if the check is enabled.

## AuditNotificationTargetConfigurations
### Properties
* **Sns**: [AuditNotificationTarget](#auditnotificationtarget)

## AuditNotificationTarget
### Properties
* **Enabled**: bool: True if notifications to the target are enabled.
* **RoleArn**: string: The ARN of the role that grants permission to send notifications to the target.
* **TargetArn**: string: The ARN of the target (SNS topic) to which audit notifications are sent.

## AWS.IoT/AuthorizerProperties
### Properties
* **Arn**: string (ReadOnly)
* **AuthorizerFunctionArn**: string
* **AuthorizerName**: string
* **EnableCachingForHttp**: bool
* **SigningDisabled**: bool
* **Status**: string
* **Tags**: [Tag](#tag)[]
* **TokenKeyName**: string
* **TokenSigningPublicKeys**: [Authorizer_TokenSigningPublicKeys](#authorizertokensigningpublickeys)

## Tag
### Properties
* **Key**: string
* **Value**: string

## Authorizer_TokenSigningPublicKeys
### Properties

## AWS.IoT/CACertificateProperties
### Properties
* **Arn**: string (ReadOnly)
* **AutoRegistrationStatus**: string
* **CACertificatePem**: string
* **CertificateMode**: string
* **Id**: string (ReadOnly)
* **RegistrationConfig**: [RegistrationConfig](#registrationconfig)
* **Status**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **VerificationCertificatePem**: string (WriteOnly): The private key verification certificate.

## RegistrationConfig
### Properties
* **RoleArn**: string
* **TemplateBody**: string
* **TemplateName**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IoT/CertificateProperties
### Properties
* **Arn**: string (ReadOnly)
* **CACertificatePem**: string (WriteOnly)
* **CertificateMode**: string
* **CertificatePem**: string
* **CertificateSigningRequest**: string (WriteOnly)
* **Id**: string (ReadOnly)
* **Status**: string

## AWS.IoT/CustomMetricProperties
### Properties
* **DisplayName**: string: Field represents a friendly name in the console for the custom metric; it doesn't have to be unique. Don't use this name as the metric identifier in the device metric report. Can be updated once defined.
* **MetricArn**: string (ReadOnly): The Amazon Resource Number (ARN) of the custom metric.
* **MetricName**: string: The name of the custom metric. This will be used in the metric report submitted from the device/thing. Shouldn't begin with aws: . Cannot be updated once defined.
* **MetricType**: string: The type of the custom metric. Types include string-list, ip-address-list, number-list, and number.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string: The tag's key.
* **Value**: string: The tag's value.

## AWS.IoT/DimensionProperties
### Properties
* **Arn**: string (ReadOnly): The ARN (Amazon resource name) of the created dimension.
* **Name**: string: A unique identifier for the dimension.
* **StringValues**: string[]: Specifies the value or list of values for the dimension.
* **Tags**: [Tag](#tag)[]: Metadata that can be used to manage the dimension.
* **Type**: string: Specifies the type of the dimension.

## Tag
### Properties
* **Key**: string: The tag's key.
* **Value**: string: The tag's value.

## AWS.IoT/DomainConfigurationProperties
### Properties
* **Arn**: string (ReadOnly)
* **AuthorizerConfig**: [AuthorizerConfig](#authorizerconfig)
* **DomainConfigurationName**: string
* **DomainConfigurationStatus**: string
* **DomainName**: string
* **DomainType**: string (ReadOnly)
* **ServerCertificateArns**: string[] (WriteOnly)
* **ServerCertificates**: [ServerCertificateSummary](#servercertificatesummary)[] (ReadOnly)
* **ServiceType**: string
* **Tags**: [Tag](#tag)[]
* **ValidationCertificateArn**: string

## AuthorizerConfig
### Properties
* **AllowAuthorizerOverride**: bool
* **DefaultAuthorizerName**: string

## ServerCertificateSummary
### Properties
* **ServerCertificateArn**: string
* **ServerCertificateStatus**: string
* **ServerCertificateStatusDetail**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoT/FleetMetricProperties
### Properties
* **AggregationField**: string: The aggregation field to perform aggregation and metric emission
* **AggregationType**: [AggregationType](#aggregationtype)
* **CreationDate**: int (ReadOnly): The creation date of a fleet metric
* **Description**: string: The description of a fleet metric
* **IndexName**: string: The index name of a fleet metric
* **LastModifiedDate**: int (ReadOnly): The last modified date of a fleet metric
* **MetricArn**: string (ReadOnly): The Amazon Resource Number (ARN) of a fleet metric metric
* **MetricName**: string: The name of the fleet metric
* **Period**: int: The period of metric emission in seconds
* **QueryString**: string: The Fleet Indexing query used by a fleet metric
* **QueryVersion**: string: The version of a Fleet Indexing query used by a fleet metric
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource
* **Unit**: string: The unit of data points emitted by a fleet metric
* **Version**: int (ReadOnly): The version of a fleet metric

## AggregationType
### Properties
* **Name**: string: Fleet Indexing aggregation type names such as Statistics, Percentiles and Cardinality
* **Values**: string[]: Fleet Indexing aggregation type values

## Tag
### Properties
* **Key**: string: The tag's key
* **Value**: string: The tag's value

## AWS.IoT/LoggingProperties
### Properties
* **AccountId**: string: Your 12-digit account ID (used as the primary identifier for the CloudFormation resource).
* **DefaultLogLevel**: string: The log level to use. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
* **RoleArn**: string: The ARN of the role that allows IoT to write to Cloudwatch logs.

## AWS.IoT/MitigationActionProperties
### Properties
* **ActionName**: string: A unique identifier for the mitigation action.
* **ActionParams**: [ActionParams](#actionparams)
* **MitigationActionArn**: string (ReadOnly)
* **MitigationActionId**: string (ReadOnly)
* **RoleArn**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## ActionParams
### Properties
* **AddThingsToThingGroupParams**: [AddThingsToThingGroupParams](#addthingstothinggroupparams)
* **EnableIoTLoggingParams**: [EnableIoTLoggingParams](#enableiotloggingparams)
* **PublishFindingToSnsParams**: [PublishFindingToSnsParams](#publishfindingtosnsparams)
* **ReplaceDefaultPolicyVersionParams**: [ReplaceDefaultPolicyVersionParams](#replacedefaultpolicyversionparams)
* **UpdateCACertificateParams**: [UpdateCACertificateParams](#updatecacertificateparams)
* **UpdateDeviceCertificateParams**: [UpdateDeviceCertificateParams](#updatedevicecertificateparams)

## AddThingsToThingGroupParams
### Properties
* **OverrideDynamicGroups**: bool: Specifies if this mitigation action can move the things that triggered the mitigation action out of one or more dynamic thing groups.
* **ThingGroupNames**: string[]: The list of groups to which you want to add the things that triggered the mitigation action.

## EnableIoTLoggingParams
### Properties
* **LogLevel**: string:  Specifies which types of information are logged.
* **RoleArnForLogging**: string:  The ARN of the IAM role used for logging.

## PublishFindingToSnsParams
### Properties
* **TopicArn**: string: The ARN of the topic to which you want to publish the findings.

## ReplaceDefaultPolicyVersionParams
### Properties
* **TemplateName**: string

## UpdateCACertificateParams
### Properties
* **Action**: string

## UpdateDeviceCertificateParams
### Properties
* **Action**: string

## Tag
### Properties
* **Key**: string: The tag's key.
* **Value**: string: The tag's value.

## AWS.IoT/PolicyProperties
### Properties
* **Arn**: string (ReadOnly)
* **Id**: string (ReadOnly)
* **PolicyDocument**: [Policy_PolicyDocument](#policypolicydocument)
* **PolicyName**: string

## Policy_PolicyDocument
### Properties

## AWS.IoT/ProvisioningTemplateProperties
### Properties
* **Description**: string
* **Enabled**: bool
* **PreProvisioningHook**: [ProvisioningHook](#provisioninghook)
* **ProvisioningRoleArn**: string
* **Tags**: [Tag](#tag)[]
* **TemplateArn**: string (ReadOnly)
* **TemplateBody**: string
* **TemplateName**: string
* **TemplateType**: string

## ProvisioningHook
### Properties
* **PayloadVersion**: string
* **TargetArn**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

## AWS.IoT/ResourceSpecificLoggingProperties
### Properties
* **LogLevel**: string: The log level for a specific target. Valid values are: ERROR, WARN, INFO, DEBUG, or DISABLED.
* **TargetId**: string (ReadOnly): Unique Id for a Target (TargetType:TargetName), this will be internally built to serve as primary identifier for a log target.
* **TargetName**: string: The target name.
* **TargetType**: string: The target type. Value must be THING_GROUP, CLIENT_ID, SOURCE_IP, PRINCIPAL_ID.

## AWS.IoT/RoleAliasProperties
### Properties
* **CredentialDurationSeconds**: int
* **RoleAlias**: string
* **RoleAliasArn**: string (ReadOnly)
* **RoleArn**: string
* **Tags**: [Tag](#tag)[]

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.IoT/ScheduledAuditProperties
### Properties
* **DayOfMonth**: string: The day of the month on which the scheduled audit takes place. Can be 1 through 31 or LAST. This field is required if the frequency parameter is set to MONTHLY.
* **DayOfWeek**: string: The day of the week on which the scheduled audit takes place. Can be one of SUN, MON, TUE,WED, THU, FRI, or SAT. This field is required if the frequency parameter is set to WEEKLY or BIWEEKLY.
* **Frequency**: string: How often the scheduled audit takes place. Can be one of DAILY, WEEKLY, BIWEEKLY, or MONTHLY.
* **ScheduledAuditArn**: string (ReadOnly): The ARN (Amazon resource name) of the scheduled audit.
* **ScheduledAuditName**: string: The name you want to give to the scheduled audit.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TargetCheckNames**: string[]: Which checks are performed during the scheduled audit. Checks must be enabled for your account.

## Tag
### Properties
* **Key**: string: The tag's key.
* **Value**: string: The tag's value.

## AWS.IoT/SecurityProfileProperties
### Properties
* **AdditionalMetricsToRetainV2**: [MetricToRetain](#metrictoretain)[]: A list of metrics whose data is retained (stored). By default, data is retained for any metric used in the profile's behaviors, but it is also retained for any metric specified here.
* **AlertTargets**: [SecurityProfile_AlertTargets](#securityprofilealerttargets): Specifies the destinations to which alerts are sent.
* **Behaviors**: [Behavior](#behavior)[]: Specifies the behaviors that, when violated by a device (thing), cause an alert.
* **SecurityProfileArn**: string (ReadOnly): The ARN (Amazon resource name) of the created security profile.
* **SecurityProfileDescription**: string: A description of the security profile.
* **SecurityProfileName**: string: A unique identifier for the security profile.
* **Tags**: [Tag](#tag)[]: Metadata that can be used to manage the security profile.
* **TargetArns**: string[]: A set of target ARNs that the security profile is attached to.

## MetricToRetain
### Properties
* **Metric**: string: What is measured by the behavior.
* **MetricDimension**: [MetricDimension](#metricdimension)

## MetricDimension
### Properties
* **DimensionName**: string: A unique identifier for the dimension.
* **Operator**: string: Defines how the dimensionValues of a dimension are interpreted.

## SecurityProfile_AlertTargets
### Properties

## Behavior
### Properties
* **Criteria**: [BehaviorCriteria](#behaviorcriteria)
* **Metric**: string: What is measured by the behavior.
* **MetricDimension**: [MetricDimension](#metricdimension)
* **Name**: string: The name for the behavior.
* **SuppressAlerts**: bool: Manage Detect alarm SNS notifications by setting behavior notification to on or suppressed. Detect will continue to performing device behavior evaluations. However, suppressed alarms wouldn't be forwarded for SNS notification.

## BehaviorCriteria
### Properties
* **ComparisonOperator**: string: The operator that relates the thing measured (metric) to the criteria (containing a value or statisticalThreshold).
* **ConsecutiveDatapointsToAlarm**: int: If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.
* **ConsecutiveDatapointsToClear**: int: If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.
* **DurationSeconds**: int: Use this to specify the time duration over which the behavior is evaluated.
* **MlDetectionConfig**: [MachineLearningDetectionConfig](#machinelearningdetectionconfig)
* **StatisticalThreshold**: [StatisticalThreshold](#statisticalthreshold)
* **Value**: [MetricValue](#metricvalue)

## MachineLearningDetectionConfig
### Properties
* **ConfidenceLevel**: string: The sensitivity of anomalous behavior evaluation. Can be Low, Medium, or High.

## StatisticalThreshold
### Properties
* **Statistic**: string: The percentile which resolves to a threshold value by which compliance with a behavior is determined

## MetricValue
### Properties
* **Cidrs**: string[]: If the ComparisonOperator calls for a set of CIDRs, use this to specify that set to be compared with the metric.
* **Count**: string: If the ComparisonOperator calls for a numeric value, use this to specify that (integer) numeric value to be compared with the metric.
* **Number**: int: The numeral value of a metric.
* **Numbers**: int[]: The numeral values of a metric.
* **Ports**: int[]: If the ComparisonOperator calls for a set of ports, use this to specify that set to be compared with the metric.
* **Strings**: string[]: The string values of a metric.

## Tag
### Properties
* **Key**: string: The tag's key.
* **Value**: string: The tag's value.

## AWS.IoT/TopicRuleProperties
### Properties
* **Arn**: string (ReadOnly)
* **RuleName**: string
* **Tags**: [Tag](#tag)[]
* **TopicRulePayload**: [TopicRulePayload](#topicrulepayload)

## Tag
### Properties
* **Key**: string
* **Value**: string

## TopicRulePayload
### Properties
* **Actions**: [Action](#action)[]
* **AwsIotSqlVersion**: string
* **Description**: string
* **ErrorAction**: [Action](#action)
* **RuleDisabled**: bool
* **Sql**: string

## Action
### Properties
* **CloudwatchAlarm**: [CloudwatchAlarmAction](#cloudwatchalarmaction)
* **CloudwatchLogs**: [CloudwatchLogsAction](#cloudwatchlogsaction)
* **CloudwatchMetric**: [CloudwatchMetricAction](#cloudwatchmetricaction)
* **DynamoDB**: [DynamoDBAction](#dynamodbaction)
* **DynamoDBv2**: [DynamoDBv2Action](#dynamodbv2action)
* **Elasticsearch**: [ElasticsearchAction](#elasticsearchaction)
* **Firehose**: [FirehoseAction](#firehoseaction)
* **Http**: [HttpAction](#httpaction)
* **IotAnalytics**: [IotAnalyticsAction](#iotanalyticsaction)
* **IotEvents**: [IotEventsAction](#ioteventsaction)
* **IotSiteWise**: [IotSiteWiseAction](#iotsitewiseaction)
* **Kafka**: [KafkaAction](#kafkaaction)
* **Kinesis**: [KinesisAction](#kinesisaction)
* **Lambda**: [LambdaAction](#lambdaaction)
* **OpenSearch**: [OpenSearchAction](#opensearchaction)
* **Republish**: [RepublishAction](#republishaction)
* **S3**: [S3Action](#s3action)
* **Sns**: [SnsAction](#snsaction)
* **Sqs**: [SqsAction](#sqsaction)
* **StepFunctions**: [StepFunctionsAction](#stepfunctionsaction)
* **Timestream**: [TimestreamAction](#timestreamaction)

## CloudwatchAlarmAction
### Properties
* **AlarmName**: string
* **RoleArn**: string
* **StateReason**: string
* **StateValue**: string

## CloudwatchLogsAction
### Properties
* **LogGroupName**: string
* **RoleArn**: string

## CloudwatchMetricAction
### Properties
* **MetricName**: string
* **MetricNamespace**: string
* **MetricTimestamp**: string
* **MetricUnit**: string
* **MetricValue**: string
* **RoleArn**: string

## DynamoDBAction
### Properties
* **HashKeyField**: string
* **HashKeyType**: string
* **HashKeyValue**: string
* **PayloadField**: string
* **RangeKeyField**: string
* **RangeKeyType**: string
* **RangeKeyValue**: string
* **RoleArn**: string
* **TableName**: string

## DynamoDBv2Action
### Properties
* **PutItem**: [PutItemInput](#putiteminput)
* **RoleArn**: string

## PutItemInput
### Properties
* **TableName**: string

## ElasticsearchAction
### Properties
* **Endpoint**: string
* **Id**: string
* **Index**: string
* **RoleArn**: string
* **Type**: string

## FirehoseAction
### Properties
* **BatchMode**: bool
* **DeliveryStreamName**: string
* **RoleArn**: string
* **Separator**: string

## HttpAction
### Properties
* **Auth**: [HttpAuthorization](#httpauthorization)
* **ConfirmationUrl**: string
* **Headers**: [HttpActionHeader](#httpactionheader)[]
* **Url**: string

## HttpAuthorization
### Properties
* **Sigv4**: [SigV4Authorization](#sigv4authorization)

## SigV4Authorization
### Properties
* **RoleArn**: string
* **ServiceName**: string
* **SigningRegion**: string

## HttpActionHeader
### Properties
* **Key**: string
* **Value**: string

## IotAnalyticsAction
### Properties
* **BatchMode**: bool
* **ChannelName**: string
* **RoleArn**: string

## IotEventsAction
### Properties
* **BatchMode**: bool
* **InputName**: string
* **MessageId**: string
* **RoleArn**: string

## IotSiteWiseAction
### Properties
* **PutAssetPropertyValueEntries**: [PutAssetPropertyValueEntry](#putassetpropertyvalueentry)[]
* **RoleArn**: string

## PutAssetPropertyValueEntry
### Properties
* **AssetId**: string
* **EntryId**: string
* **PropertyAlias**: string
* **PropertyId**: string
* **PropertyValues**: [AssetPropertyValue](#assetpropertyvalue)[]

## AssetPropertyValue
### Properties
* **Quality**: string
* **Timestamp**: [AssetPropertyTimestamp](#assetpropertytimestamp)
* **Value**: [AssetPropertyVariant](#assetpropertyvariant)

## AssetPropertyTimestamp
### Properties
* **OffsetInNanos**: string
* **TimeInSeconds**: string

## AssetPropertyVariant
### Properties
* **BooleanValue**: string
* **DoubleValue**: string
* **IntegerValue**: string
* **StringValue**: string

## KafkaAction
### Properties
* **ClientProperties**: [TopicRule_ClientProperties](#topicruleclientproperties)
* **DestinationArn**: string
* **Key**: string
* **Partition**: string
* **Topic**: string

## TopicRule_ClientProperties
### Properties

## KinesisAction
### Properties
* **PartitionKey**: string
* **RoleArn**: string
* **StreamName**: string

## LambdaAction
### Properties
* **FunctionArn**: string

## OpenSearchAction
### Properties
* **Endpoint**: string
* **Id**: string
* **Index**: string
* **RoleArn**: string
* **Type**: string

## RepublishAction
### Properties
* **Qos**: int
* **RoleArn**: string
* **Topic**: string

## S3Action
### Properties
* **BucketName**: string
* **CannedAcl**: [CannedAccessControlList](#cannedaccesscontrollist)
* **Key**: string
* **RoleArn**: string

## CannedAccessControlList
### Properties

## SnsAction
### Properties
* **MessageFormat**: string
* **RoleArn**: string
* **TargetArn**: string

## SqsAction
### Properties
* **QueueUrl**: string
* **RoleArn**: string
* **UseBase64**: bool

## StepFunctionsAction
### Properties
* **ExecutionNamePrefix**: string
* **RoleArn**: string
* **StateMachineName**: string

## TimestreamAction
### Properties
* **DatabaseName**: string
* **Dimensions**: [TimestreamDimensionsList](#timestreamdimensionslist)
* **RoleArn**: string
* **TableName**: string
* **Timestamp**: [TimestreamTimestamp](#timestreamtimestamp)

## TimestreamDimensionsList
### Properties

## TimestreamTimestamp
### Properties
* **Unit**: string
* **Value**: string

## AWS.IoT/TopicRuleDestinationProperties
### Properties
* **Arn**: string (ReadOnly): Amazon Resource Name (ARN).
* **HttpUrlProperties**: [HttpUrlDestinationSummary](#httpurldestinationsummary): HTTP URL destination properties.
* **Status**: [TopicRuleDestinationStatus](#topicruledestinationstatus): The status of the TopicRuleDestination.
* **StatusReason**: string (ReadOnly): The reasoning for the current status of the TopicRuleDestination.
* **VpcProperties**: [VpcDestinationProperties](#vpcdestinationproperties): VPC destination properties.

## HttpUrlDestinationSummary
### Properties
* **ConfirmationUrl**: string

## TopicRuleDestinationStatus
### Properties

## VpcDestinationProperties
### Properties
* **RoleArn**: string
* **SecurityGroups**: string[]
* **SubnetIds**: string[]
* **VpcId**: string

