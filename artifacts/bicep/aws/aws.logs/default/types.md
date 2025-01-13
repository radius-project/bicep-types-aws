# AWS.Logs @ default

## Resource AWS.Logs/AccountPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/AccountPolicyProperties](#awslogsaccountpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/Delivery@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DeliveryProperties](#awslogsdeliveryproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/DeliveryDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DeliveryDestinationProperties](#awslogsdeliverydestinationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/DeliverySource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DeliverySourceProperties](#awslogsdeliverysourceproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/Destination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DestinationProperties](#awslogsdestinationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/LogAnomalyDetector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/LogAnomalyDetectorProperties](#awslogsloganomalydetectorproperties) (Identifier): properties of the resource

## Resource AWS.Logs/LogGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/LogGroupProperties](#awslogsloggroupproperties) (Identifier): properties of the resource

## Resource AWS.Logs/MetricFilter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/MetricFilterProperties](#awslogsmetricfilterproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/QueryDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/QueryDefinitionProperties](#awslogsquerydefinitionproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/ResourcePolicyProperties](#awslogsresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/SubscriptionFilter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/SubscriptionFilterProperties](#awslogssubscriptionfilterproperties) (Required, Identifier): properties of the resource

## Resource AWS.Logs/Transformer@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/TransformerProperties](#awslogstransformerproperties) (Required, Identifier): properties of the resource

## AddKeyEntry
### Properties
* **Key**: string (Required)
* **OverwriteIfExists**: bool
* **Value**: string (Required)

## AWS.Logs/AccountPolicyProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier): User account id
* **PolicyDocument**: string (Required): The body of the policy document you want to use for this topic.

You can only add one policy per PolicyType.

The policy must be in JSON string format.

Length Constraints: Maximum length of 30720
* **PolicyName**: string (Required, Identifier): The name of the account policy
* **PolicyType**: string (Required, Identifier): Type of the policy.
* **Scope**: string: Scope for policy application
* **SelectionCriteria**: string: Log group  selection criteria to apply policy only to a subset of log groups. SelectionCriteria string can be up to 25KB and cloudwatchlogs determines the length of selectionCriteria by using its UTF-8 bytes

## AWS.Logs/DeliveryDestinationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.
* **DeliveryDestinationPolicy**: [DeliveryDestination_DeliveryDestinationPolicy](#deliverydestinationdeliverydestinationpolicy): IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200
* **DeliveryDestinationType**: string (ReadOnly): Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
* **DestinationResourceArn**: string: The ARN of the Amazon Web Services destination that this delivery destination represents. That Amazon Web Services destination can be a log group in CloudWatch Logs, an Amazon S3 bucket, or a delivery stream in Firehose.
* **Name**: string (Required, Identifier): The name of this delivery destination.
* **OutputFormat**: string: The format of the logs that are sent to this delivery destination.
* **Tags**: [Tag](#tag)[]: The tags that have been assigned to this delivery destination.

## AWS.Logs/DeliveryProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that uniquely identifies this delivery.
* **DeliveryDestinationArn**: string (Required): The ARN of the delivery destination that is associated with this delivery.
* **DeliveryDestinationType**: string (ReadOnly): Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
* **DeliveryId**: string (ReadOnly, Identifier): The unique ID that identifies this delivery in your account.
* **DeliverySourceName**: string (Required): The name of the delivery source that is associated with this delivery.
* **FieldDelimiter**: string: The field delimiter to use between record fields when the final output format of a delivery is in Plain , W3C , or Raw format.
* **RecordFields**: string[]: The list of record fields to be delivered to the destination, in order. If the delivery's log source has mandatory fields, they must be included in this list.
* **S3EnableHiveCompatiblePath**: bool: This parameter causes the S3 objects that contain delivered logs to use a prefix structure that allows for integration with Apache Hive.
* **S3SuffixPath**: string: This string allows re-configuring the S3 object prefix to contain either static or variable sections. The valid variables to use in the suffix path will vary by each log source. See ConfigurationTemplate$allowedSuffixPathFields for more info on what values are supported in the suffix path for each log source.
* **Tags**: [Tag](#tag)[]: The tags that have been assigned to this delivery.

## AWS.Logs/DeliverySourceProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
* **LogType**: string: The type of logs being delivered. Only mandatory when the resourceArn could match more than one. In such a case, the error message will contain all the possible options.
* **Name**: string (Required, Identifier): The unique name of the Log source.
* **ResourceArn**: string (WriteOnly): The ARN of the resource that will be sending the logs.
* **ResourceArns**: string[] (ReadOnly): This array contains the ARN of the AWS resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.
* **Service**: string (ReadOnly): The AWS service that is sending logs.
* **Tags**: [Tag](#tag)[]: The tags that have been assigned to this delivery source.

## AWS.Logs/DestinationProperties
### Properties
* **Arn**: string (ReadOnly)
* **DestinationName**: string (Required, Identifier): The name of the destination resource
* **DestinationPolicy**: string: An IAM policy document that governs which AWS accounts can create subscription filters against this destination.
* **RoleArn**: string (Required): The ARN of an IAM role that permits CloudWatch Logs to send data to the specified AWS resource
* **TargetArn**: string (Required): The ARN of the physical target where the log events are delivered (for example, a Kinesis stream)

## AWS.Logs/LogAnomalyDetectorProperties
### Properties
* **AccountId**: string (WriteOnly): Account ID for owner of detector
* **AnomalyDetectorArn**: string (ReadOnly, Identifier): ARN of LogAnomalyDetector
* **AnomalyDetectorStatus**: string (ReadOnly): Current status of detector.
* **AnomalyVisibilityTime**: int
* **CreationTimeStamp**: int (ReadOnly): When detector was created.
* **DetectorName**: string: Name of detector
* **EvaluationFrequency**: string: How often log group is evaluated
* **FilterPattern**: string
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
* **LastModifiedTimeStamp**: int (ReadOnly): When detector was lsat modified.
* **LogGroupArnList**: string[]: List of Arns for the given log group

## AWS.Logs/LogGroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **DataProtectionPolicy**: [LogGroup_DataProtectionPolicy](#loggroupdataprotectionpolicy): Creates a data protection policy and assigns it to the log group. A data protection policy can help safeguard sensitive data that's ingested by the log group by auditing and masking the sensitive log data. When a user who does not have permission to view masked data views a log event that includes masked data, the sensitive data is replaced by asterisks.
 For more information, including a list of types of data that can be audited and masked, see [Protect sensitive log data with masking](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/mask-sensitive-log-data.html).
* **FieldIndexPolicies**: [LogGroup_FieldIndexPolicies](#loggroupfieldindexpolicies)[]: Creates or updates a *field index policy* for the specified log group. Only log groups in the Standard log class support field index policies. For more information about log classes, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html).
 You can use field index policies to create *field indexes* on fields found in log events in the log group. Creating field indexes lowers the costs for CWL Insights queries that reference those field indexes, because these queries attempt to skip the processing of log events that are known to not match the indexed field. Good fields to index are fields that you often need to query for and fields that have high cardinality of values Common examples of indexes include request ID, session ID, userID, and instance IDs. For more information, see [Create field indexes to improve query performance and reduce costs](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs-Field-Indexing.html).
 Currently, this array supports only one field index policy object.
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the KMS key to use when encrypting log data.
 To associate an KMS key with the log group, specify the ARN of that KMS key here. If you do so, ingested data is encrypted using this key. This association is stored as long as the data encrypted with the KMS key is still within CWL. This enables CWL to decrypt this data whenever it is requested.
 If you attempt to associate a KMS key with the log group but the KMS key doesn't exist or is deactivated, you will receive an ``InvalidParameterException`` error.
 Log group data is always encrypted in CWL. If you omit this key, the encryption does not use KMS. For more information, see [Encrypt log data in using](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/encrypt-log-data-kms.html)
* **LogGroupClass**: string: Specifies the log group class for this log group. There are two classes:
  +  The ``Standard`` log class supports all CWL features.
  +  The ``Infrequent Access`` log class supports a subset of CWL features and incurs lower costs.
  
 For details about the features supported by each class, see [Log classes](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch_Logs_Log_Classes.html)
* **LogGroupName**: string (Identifier): The name of the log group. If you don't specify a name, CFNlong generates a unique ID for the log group.
* **RetentionInDays**: int: The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, 2192, 2557, 2922, 3288, and 3653.
 To set a log group so that its log events do not expire, use [DeleteRetentionPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_DeleteRetentionPolicy.html).
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to the log group.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## AWS.Logs/MetricFilterProperties
### Properties
* **ApplyOnTransformedLogs**: bool: This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
 If this value is ``true``, the metric filter is applied on the transformed version of the log events instead of the original ingested log events.
* **FilterName**: string (Identifier): The name of the metric filter.
* **FilterPattern**: string (Required): A filter pattern for extracting metric data out of ingested log events. For more information, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
* **LogGroupName**: string (Required, Identifier): The name of an existing log group that you want to associate with this metric filter.
* **MetricTransformations**: [MetricTransformation](#metrictransformation)[] (Required): The metric transformations.

## AWS.Logs/QueryDefinitionProperties
### Properties
* **LogGroupNames**: string[]: Optionally define specific log groups as part of your query definition
* **Name**: string (Required): A name for the saved query definition
* **QueryDefinitionId**: string (ReadOnly, Identifier): Unique identifier of a query definition
* **QueryLanguage**: string: Query language of the query string. Possible values are CWLI, SQL, PPL, with CWLI being the default.
* **QueryString**: string (Required): The query string to use for this definition

## AWS.Logs/ResourcePolicyProperties
### Properties
* **PolicyDocument**: string (Required): The policy document
* **PolicyName**: string (Required, Identifier): A name for resource policy

## AWS.Logs/SubscriptionFilterProperties
### Properties
* **ApplyOnTransformedLogs**: bool: This parameter is valid only for log groups that have an active log transformer. For more information about log transformers, see [PutTransformer](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutTransformer.html).
 If this value is ``true``, the subscription filter is applied on the transformed version of the log events instead of the original ingested log events.
* **DestinationArn**: string (Required): The Amazon Resource Name (ARN) of the destination.
* **Distribution**: string: The method used to distribute log data to the destination, which can be either random or grouped by log stream.
* **FilterName**: string (Identifier): The name of the subscription filter.
* **FilterPattern**: string (Required): The filtering expressions that restrict what gets delivered to the destination AWS resource. For more information about the filter pattern syntax, see [Filter and Pattern Syntax](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
* **LogGroupName**: string (Required, Identifier): The log group to associate with the subscription filter. All log events that are uploaded to this log group are filtered and delivered to the specified AWS resource if the filter pattern matches the log events.
* **RoleArn**: string: The ARN of an IAM role that grants CWL permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.

## AWS.Logs/TransformerProperties
### Properties
* **LogGroupIdentifier**: string (Required, Identifier): Existing log group that you want to associate with this transformer.
* **TransformerConfig**: [Processor](#processor)[] (Required): List of processors in a transformer

## CopyValueEntry
### Properties
* **OverwriteIfExists**: bool
* **Source**: string (Required)
* **Target**: string (Required)

## DeliveryDestination_DeliveryDestinationPolicy
### Properties

## Dimension
### Properties
* **Key**: string (Required): The name for the CW metric dimension that the metric filter creates.
 Dimension names must contain only ASCII characters, must include at least one non-whitespace character, and cannot start with a colon (:).
* **Value**: string (Required): The log event field that will contain the value for this dimension. This dimension will only be published for a metric if the value is found in the log event. For example, ``$.eventType`` for JSON log events, or ``$server`` for space-delimited log events.

## LogGroup_DataProtectionPolicy
### Properties

## LogGroup_FieldIndexPolicies
### Properties

## MetricTransformation
### Properties
* **DefaultValue**: int: (Optional) The value to emit when a filter pattern does not match a log event. This value can be null.
* **Dimensions**: [Dimension](#dimension)[]: The fields to use as dimensions for the metric. One metric filter can include as many as three dimensions.
  Metrics extracted from log events are charged as custom metrics. To prevent unexpected high charges, do not specify high-cardinality fields such as ``IPAddress`` or ``requestID`` as dimensions. Each different value found for a dimension is treated as a separate metric and accrues charges as a separate custom metric. 
 CloudWatch Logs disables a metric filter if it generates 1000 different name/value pairs for your specified dimensions within a certain amount of time. This helps to prevent accidental high charges.
 You can also set up a billing alarm to alert you if your charges are higher than expected. For more information, see [Creating a Billing Alarm to Monitor Your Estimated Charges](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/monitor_estimated_charges_with_cloudwatch.html).
* **MetricName**: string (Required): The name of the CloudWatch metric.
* **MetricNamespace**: string (Required): A custom namespace to contain your metric in CloudWatch. Use namespaces to group together metrics that are similar. For more information, see [Namespaces](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace).
* **MetricValue**: string (Required): The value that is published to the CloudWatch metric. For example, if you're counting the occurrences of a particular term like ``Error``, specify 1 for the metric value. If you're counting the number of bytes transferred, reference the value that is in the log event by using $. followed by the name of the field that you specified in the filter pattern, such as ``$.size``.
* **Unit**: string: The unit to assign to the metric. If you omit this, the unit is set as ``None``.

## MoveKeyEntry
### Properties
* **OverwriteIfExists**: bool
* **Source**: string (Required)
* **Target**: string (Required)

## ParseCloudfront
### Properties
* **Source**: string

## ParsePostgres
### Properties
* **Source**: string

## ParseRoute53
### Properties
* **Source**: string

## ParseVPC
### Properties
* **Source**: string

## ParseWAF
### Properties
* **Source**: string

## Processor
### Properties
* **AddKeys**: [Transformer_AddKeys](#transformeraddkeys)
* **CopyValue**: [Transformer_CopyValue](#transformercopyvalue)
* **Csv**: [Transformer_Csv](#transformercsv)
* **DateTimeConverter**: [Transformer_DateTimeConverter](#transformerdatetimeconverter)
* **DeleteKeys**: [Transformer_DeleteKeys](#transformerdeletekeys)
* **Grok**: [Transformer_Grok](#transformergrok)
* **ListToMap**: [Transformer_ListToMap](#transformerlisttomap)
* **LowerCaseString**: [Transformer_LowerCaseString](#transformerlowercasestring)
* **MoveKeys**: [Transformer_MoveKeys](#transformermovekeys)
* **ParseCloudfront**: [ParseCloudfront](#parsecloudfront)
* **ParseJSON**: [Transformer_ParseJSON](#transformerparsejson)
* **ParseKeyValue**: [Transformer_ParseKeyValue](#transformerparsekeyvalue)
* **ParsePostgres**: [ParsePostgres](#parsepostgres)
* **ParseRoute53**: [ParseRoute53](#parseroute53)
* **ParseVPC**: [ParseVPC](#parsevpc)
* **ParseWAF**: [ParseWAF](#parsewaf)
* **RenameKeys**: [Transformer_RenameKeys](#transformerrenamekeys)
* **SplitString**: [Transformer_SplitString](#transformersplitstring)
* **SubstituteString**: [Transformer_SubstituteString](#transformersubstitutestring)
* **TrimString**: [Transformer_TrimString](#transformertrimstring)
* **TypeConverter**: [Transformer_TypeConverter](#transformertypeconverter)
* **UpperCaseString**: [Transformer_UpperCaseString](#transformeruppercasestring)

## RenameKeyEntry
### Properties
* **Key**: string (Required)
* **OverwriteIfExists**: bool
* **RenameTo**: string (Required)

## SplitStringEntry
### Properties
* **Delimiter**: string (Required)
* **Source**: string (Required)

## SubstituteStringEntry
### Properties
* **From**: string (Required)
* **Source**: string (Required)
* **To**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required): The value of this key-value pair.

## Transformer_AddKeys
### Properties
* **Entries**: [AddKeyEntry](#addkeyentry)[] (Required)

## Transformer_Column
### Properties

## Transformer_CopyValue
### Properties
* **Entries**: [CopyValueEntry](#copyvalueentry)[] (Required)

## Transformer_Csv
### Properties
* **Columns**: [Transformer_Column](#transformercolumn)[]
* **Delimiter**: string
* **QuoteCharacter**: string
* **Source**: string

## Transformer_DateTimeConverter
### Properties
* **Locale**: string
* **MatchPatterns**: [Transformer_MatchPattern](#transformermatchpattern)[] (Required)
* **Source**: string (Required)
* **SourceTimezone**: string
* **Target**: string (Required)
* **TargetFormat**: string
* **TargetTimezone**: string

## Transformer_DeleteKeys
### Properties
* **WithKeys**: string[] (Required)

## Transformer_Grok
### Properties
* **Match**: string (Required)
* **Source**: string

## Transformer_ListToMap
### Properties
* **Flatten**: bool
* **FlattenedElement**: string
* **Key**: string (Required)
* **Source**: string (Required)
* **Target**: string
* **ValueKey**: string

## Transformer_LowerCaseString
### Properties
* **WithKeys**: string[] (Required)

## Transformer_MatchPattern
### Properties

## Transformer_MoveKeys
### Properties
* **Entries**: [MoveKeyEntry](#movekeyentry)[] (Required)

## Transformer_ParseJSON
### Properties
* **Destination**: string
* **Source**: string

## Transformer_ParseKeyValue
### Properties
* **Destination**: string
* **FieldDelimiter**: string
* **KeyPrefix**: string
* **KeyValueDelimiter**: string
* **NonMatchValue**: string
* **OverwriteIfExists**: bool
* **Source**: string

## Transformer_RenameKeys
### Properties
* **Entries**: [RenameKeyEntry](#renamekeyentry)[] (Required)

## Transformer_SplitString
### Properties
* **Entries**: [SplitStringEntry](#splitstringentry)[] (Required)

## Transformer_SubstituteString
### Properties
* **Entries**: [SubstituteStringEntry](#substitutestringentry)[] (Required)

## Transformer_TrimString
### Properties
* **WithKeys**: string[] (Required)

## Transformer_TypeConverter
### Properties
* **Entries**: [TypeConverterEntry](#typeconverterentry)[] (Required)

## Transformer_UpperCaseString
### Properties
* **WithKeys**: string[] (Required)

## TypeConverterEntry
### Properties
* **Key**: string (Required)
* **Type**: string (Required)

