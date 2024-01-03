# AWS.Logs @ default

## Resource AWS.Logs/AccountPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/AccountPolicyProperties](#awslogsaccountpolicyproperties) (Required): properties of the resource

## Resource AWS.Logs/Delivery@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DeliveryProperties](#awslogsdeliveryproperties) (Required): properties of the resource

## Resource AWS.Logs/DeliveryDestination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DeliveryDestinationProperties](#awslogsdeliverydestinationproperties) (Required): properties of the resource

## Resource AWS.Logs/DeliverySource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DeliverySourceProperties](#awslogsdeliverysourceproperties) (Required): properties of the resource

## Resource AWS.Logs/Destination@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/DestinationProperties](#awslogsdestinationproperties) (Required): properties of the resource

## Resource AWS.Logs/LogAnomalyDetector@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/LogAnomalyDetectorProperties](#awslogsloganomalydetectorproperties): properties of the resource

## Resource AWS.Logs/LogGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/LogGroupProperties](#awslogsloggroupproperties): properties of the resource

## Resource AWS.Logs/MetricFilter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/MetricFilterProperties](#awslogsmetricfilterproperties) (Required): properties of the resource

## Resource AWS.Logs/QueryDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/QueryDefinitionProperties](#awslogsquerydefinitionproperties) (Required): properties of the resource

## Resource AWS.Logs/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/ResourcePolicyProperties](#awslogsresourcepolicyproperties) (Required): properties of the resource

## Resource AWS.Logs/SubscriptionFilter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Logs/SubscriptionFilterProperties](#awslogssubscriptionfilterproperties) (Required): properties of the resource

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

## AWS.Logs/DeliveryProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that uniquely identifies this delivery.
* **DeliveryDestinationArn**: string (Required): The ARN of the delivery destination that is associated with this delivery.
* **DeliveryDestinationType**: string (ReadOnly): Displays whether the delivery destination associated with this delivery is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
* **DeliveryId**: string (ReadOnly, Identifier): The unique ID that identifies this delivery in your account.
* **DeliverySourceName**: string (Required): The name of the delivery source that is associated with this delivery.
* **Tags**: [Tag](#tag)[]: The tags that have been assigned to this delivery.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode

## AWS.Logs/DeliveryDestinationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that uniquely identifies this delivery destination.
* **DeliveryDestinationPolicy**: [DeliveryDestination_DeliveryDestinationPolicy](#deliverydestinationdeliverydestinationpolicy): IAM policy that grants permissions to CloudWatch Logs to deliver logs cross-account to a specified destination in this account.

The policy must be in JSON string format.

Length Constraints: Maximum length of 51200
* **DeliveryDestinationType**: string (ReadOnly): Displays whether this delivery destination is CloudWatch Logs, Amazon S3, or Kinesis Data Firehose.
* **DestinationResourceArn**: string: The ARN of the AWS resource that will receive the logs.
* **Name**: string (Required, Identifier): The name of this delivery destination.
* **Tags**: [Tag](#tag)[]: The tags that have been assigned to this delivery destination.

## DeliveryDestination_DeliveryDestinationPolicy
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## AWS.Logs/DeliverySourceProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that uniquely identifies this delivery source.
* **LogType**: string: The type of logs being delivered. Only mandatory when the resourceArn could match more than one. In such a case, the error message will contain all the possible options.
* **Name**: string (Required, Identifier): The unique name of the Log source.
* **ResourceArn**: string (WriteOnly): The ARN of the resource that will be sending the logs.
* **ResourceArns**: string[] (ReadOnly): This array contains the ARN of the AWS resource that sends logs and is represented by this delivery source. Currently, only one ARN can be in the array.
* **Service**: string (ReadOnly): The AWS service that is sending logs.
* **Tags**: [Tag](#tag)[]: The tags that have been assigned to this delivery source.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode

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
* **Arn**: string (ReadOnly): The CloudWatch log group ARN.
* **DataProtectionPolicy**: [LogGroup_DataProtectionPolicy](#loggroupdataprotectionpolicy): The body of the policy document you want to use for this topic.

You can only add one policy per topic.

The policy must be in JSON string format.

Length Constraints: Maximum length of 30720
* **KmsKeyId**: string: The Amazon Resource Name (ARN) of the CMK to use when encrypting log data.
* **LogGroupClass**: string: The class of the log group. Possible values are: STANDARD and INFREQUENT_ACCESS, with STANDARD being the default class
* **LogGroupName**: string (Identifier): The name of the log group. If you don't specify a name, AWS CloudFormation generates a unique ID for the log group.
* **RetentionInDays**: int: The number of days to retain the log events in the specified log group. Possible values are: 1, 3, 5, 7, 14, 30, 60, 90, 120, 150, 180, 365, 400, 545, 731, 1096, 1827, and 3653.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## LogGroup_DataProtectionPolicy
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, - and @.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +, - and @.

## AWS.Logs/MetricFilterProperties
### Properties
* **FilterName**: string (Identifier): A name for the metric filter.
* **FilterPattern**: string (Required): Pattern that Logs follows to interpret each entry in a log.
* **LogGroupName**: string (Required, Identifier): Existing log group that you want to associate with this filter.
* **MetricTransformations**: [MetricTransformation](#metrictransformation)[] (Required): A collection of information that defines how metric data gets emitted.

## MetricTransformation
### Properties
* **DefaultValue**: int: The value to emit when a filter pattern does not match a log event. This value can be null.
* **Dimensions**: [Dimension](#dimension)[]: Dimensions are the key-value pairs that further define a metric
* **MetricName**: string (Required): The name of the CloudWatch metric. Metric name must be in ASCII format.
* **MetricNamespace**: string (Required): The namespace of the CloudWatch metric.
* **MetricValue**: string (Required): The value to publish to the CloudWatch metric when a filter pattern matches a log event.
* **Unit**: string: The unit to assign to the metric. If you omit this, the unit is set as None.

## Dimension
### Properties
* **Key**: string (Required): The key of the dimension. Maximum length of 255.
* **Value**: string (Required): The value of the dimension. Maximum length of 255.

## AWS.Logs/QueryDefinitionProperties
### Properties
* **LogGroupNames**: string[]: Optionally define specific log groups as part of your query definition
* **Name**: string (Required): A name for the saved query definition
* **QueryDefinitionId**: string (ReadOnly, Identifier): Unique identifier of a query definition
* **QueryString**: string (Required): The query string to use for this definition

## AWS.Logs/ResourcePolicyProperties
### Properties
* **PolicyDocument**: string (Required): The policy document
* **PolicyName**: string (Required, Identifier): A name for resource policy

## AWS.Logs/SubscriptionFilterProperties
### Properties
* **DestinationArn**: string (Required): The Amazon Resource Name (ARN) of the destination.
* **Distribution**: string: The method used to distribute log data to the destination. By default, log data is grouped by log stream, but the grouping can be set to random for a more even distribution. This property is only applicable when the destination is an Amazon Kinesis stream.
* **FilterName**: string (Identifier): The name of the filter generated by resource.
* **FilterPattern**: string (Required): The filtering expressions that restrict what gets delivered to the destination AWS resource.
* **LogGroupName**: string (Required, Identifier): Existing log group that you want to associate with this filter.
* **RoleArn**: string: The ARN of an IAM role that grants CloudWatch Logs permissions to deliver ingested log events to the destination stream. You don't need to provide the ARN when you are working with a logical destination for cross-account delivery.

