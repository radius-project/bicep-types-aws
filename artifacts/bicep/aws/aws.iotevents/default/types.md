# AWS.IoTEvents @ default

## Resource AWS.IoTEvents/AlarmModel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTEvents/AlarmModelProperties](#awsioteventsalarmmodelproperties) (Required): properties of the resource

## Resource AWS.IoTEvents/DetectorModel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTEvents/DetectorModelProperties](#awsioteventsdetectormodelproperties) (Required): properties of the resource

## Resource AWS.IoTEvents/Input@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTEvents/InputProperties](#awsioteventsinputproperties) (Required): properties of the resource

## AWS.IoTEvents/AlarmModelProperties
### Properties
* **AlarmCapabilities**: [AlarmCapabilities](#alarmcapabilities)
* **AlarmEventActions**: [AlarmEventActions](#alarmeventactions)
* **AlarmModelDescription**: string: A brief description of the alarm model.
* **AlarmModelName**: string: The name of the alarm model.
* **AlarmRule**: [AlarmRule](#alarmrule) (Required)
* **Key**: string: The value used to identify a alarm instance. When a device or system sends input, a new alarm instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding alarm instance based on this identifying information.

This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct alarm instance, the device must send a message payload that contains the same attribute-value.
* **RoleArn**: string (Required): The ARN of the role that grants permission to AWS IoT Events to perform its operations.
* **Severity**: int: A non-negative integer that reflects the severity level of the alarm.


* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## AlarmCapabilities
### Properties
* **AcknowledgeFlow**: [AcknowledgeFlow](#acknowledgeflow)
* **InitializationConfiguration**: [InitializationConfiguration](#initializationconfiguration)

## AcknowledgeFlow
### Properties
* **Enabled**: bool: The value must be TRUE or FALSE. If TRUE, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to NORMAL. If FALSE, you won't receive notifications. The alarm automatically changes to the NORMAL state when the input property value returns to the specified range.

## InitializationConfiguration
### Properties
* **DisabledOnInitialization**: bool (Required): The value must be TRUE or FALSE. If FALSE, all alarm instances created based on the alarm model are activated. The default value is TRUE.

## AlarmEventActions
### Properties
* **AlarmActions**: [AlarmActions](#alarmactions)

## AlarmActions
### Properties

## AlarmRule
### Properties
* **SimpleRule**: [SimpleRule](#simplerule)

## SimpleRule
### Properties
* **ComparisonOperator**: string (Required): The comparison operator.
* **InputProperty**: string (Required): The value on the left side of the comparison operator. You can specify an AWS IoT Events input attribute as an input property.
* **Threshold**: string (Required): The value on the right side of the comparison operator. You can enter a number or specify an AWS IoT Events input attribute.

## Tag
### Properties
* **Key**: string (Required): Key of the Tag.
* **Value**: string (Required): Value of the Tag.

## AWS.IoTEvents/DetectorModelProperties
### Properties
* **DetectorModelDefinition**: [DetectorModelDefinition](#detectormodeldefinition) (Required)
* **DetectorModelDescription**: string: A brief description of the detector model.
* **DetectorModelName**: string: The name of the detector model.
* **EvaluationMethod**: string: Information about the order in which events are evaluated and how actions are executed.
* **Key**: string: The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. AWS IoT Events can continue to route input to its corresponding detector instance based on this identifying information.

This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
* **RoleArn**: string (Required): The ARN of the role that grants permission to AWS IoT Events to perform its operations.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## DetectorModelDefinition
### Properties
* **InitialStateName**: string (Required): The state that is entered at the creation of each detector (instance).
* **States**: [State](#state)[] (Required): Information about the states of the detector.

## State
### Properties
* **OnEnter**: [OnEnter](#onenter)
* **OnExit**: [OnExit](#onexit)
* **OnInput**: [OnInput](#oninput)
* **StateName**: string (Required): The name of the state.

## OnEnter
### Properties
* **Events**: [Event](#event)[]: Specifies the `actions` that are performed when the state is entered and the `condition` is `TRUE`.

## Event
### Properties
* **Actions**: [Action](#action)[]: The actions to be performed.
* **Condition**: string: The Boolean expression that, when `TRUE`, causes the `actions` to be performed. If not present, the `actions` are performed (=`TRUE`). If the expression result is not a `Boolean` value, the `actions` are not performed (=`FALSE`).
* **EventName**: string (Required): The name of the event.

## Action
### Properties
* **ClearTimer**: [ClearTimer](#cleartimer)
* **DynamoDB**: [DynamoDB](#dynamodb)
* **DynamoDBv2**: [DynamoDBv2](#dynamodbv2)
* **Firehose**: [Firehose](#firehose)
* **IotEvents**: [IotEvents](#iotevents)
* **IotSiteWise**: [IotSiteWise](#iotsitewise)
* **IotTopicPublish**: [IotTopicPublish](#iottopicpublish)
* **Lambda**: [Lambda](#lambda)
* **ResetTimer**: [ResetTimer](#resettimer)
* **SetTimer**: [SetTimer](#settimer)
* **SetVariable**: [SetVariable](#setvariable)
* **Sns**: [Sns](#sns)
* **Sqs**: [Sqs](#sqs)

## ClearTimer
### Properties
* **TimerName**: string (Required)

## DynamoDB
### Properties
* **HashKeyField**: string (Required): The name of the hash key (also called the partition key).
* **HashKeyType**: string: The data type for the hash key (also called the partition key). You can specify the following values:

* `STRING` - The hash key is a string.

* `NUMBER` - The hash key is a number.

If you don't specify `hashKeyType`, the default value is `STRING`.
* **HashKeyValue**: string (Required): The value of the hash key (also called the partition key).
* **Operation**: string: The type of operation to perform. You can specify the following values:

* `INSERT` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.

* `UPDATE` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

* `DELETE` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.

If you don't specify this parameter, AWS IoT Events triggers the `INSERT` operation.
* **Payload**: [Payload](#payload)
* **PayloadField**: string: The name of the DynamoDB column that receives the action payload.

If you don't specify this parameter, the name of the DynamoDB column is `payload`.
* **RangeKeyField**: string: The name of the range key (also called the sort key).
* **RangeKeyType**: string: The data type for the range key (also called the sort key), You can specify the following values:

* `STRING` - The range key is a string.

* `NUMBER` - The range key is number.

If you don't specify `rangeKeyField`, the default value is `STRING`.
* **RangeKeyValue**: string: The value of the range key (also called the sort key).
* **TableName**: string (Required): The name of the DynamoDB table.

## Payload
### Properties
* **ContentExpression**: string (Required): The content of the payload. You can use a string expression that includes quoted strings (`'<string>'`), variables (`$variable.<variable-name>`), input values (`$input.<input-name>.<path-to-datum>`), string concatenations, and quoted strings that contain `${}` as the content. The recommended maximum size of a content expression is 1 KB.
* **Type**: string (Required): The value of the payload type can be either `STRING` or `JSON`.

## DynamoDBv2
### Properties
* **Payload**: [Payload](#payload)
* **TableName**: string (Required): The name of the DynamoDB table.

## Firehose
### Properties
* **DeliveryStreamName**: string (Required): The name of the Kinesis Data Firehose delivery stream where the data is written.
* **Payload**: [Payload](#payload)
* **Separator**: string: A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

## IotEvents
### Properties
* **InputName**: string (Required): The name of the AWS IoT Events input where the data is sent.
* **Payload**: [Payload](#payload)

## IotSiteWise
### Properties
* **AssetId**: string: The ID of the asset that has the specified property. You can specify an expression.
* **EntryId**: string: A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier. You can also specify an expression.
* **PropertyAlias**: string: The alias of the asset property. You can also specify an expression.
* **PropertyId**: string: The ID of the asset property. You can specify an expression.
* **PropertyValue**: [AssetPropertyValue](#assetpropertyvalue) (Required)

## AssetPropertyValue
### Properties
* **Quality**: string: The quality of the asset property value. The value must be `GOOD`, `BAD`, or `UNCERTAIN`. You can also specify an expression.
* **Timestamp**: [AssetPropertyTimestamp](#assetpropertytimestamp)
* **Value**: [AssetPropertyVariant](#assetpropertyvariant) (Required)

## AssetPropertyTimestamp
### Properties
* **OffsetInNanos**: string: The timestamp, in seconds, in the Unix epoch format. The valid range is between `1-31556889864403199`. You can also specify an expression.
* **TimeInSeconds**: string (Required): The nanosecond offset converted from `timeInSeconds`. The valid range is between `0-999999999`. You can also specify an expression.

## AssetPropertyVariant
### Properties
* **BooleanValue**: string: The asset property value is a Boolean value that must be `TRUE` or `FALSE`. You can also specify an expression. If you use an expression, the evaluated result should be a Boolean value.
* **DoubleValue**: string: The asset property value is a double. You can also specify an expression. If you use an expression, the evaluated result should be a double.
* **IntegerValue**: string: The asset property value is an integer. You can also specify an expression. If you use an expression, the evaluated result should be an integer.
* **StringValue**: string: The asset property value is a string. You can also specify an expression. If you use an expression, the evaluated result should be a string.

## IotTopicPublish
### Properties
* **MqttTopic**: string (Required): The MQTT topic of the message. You can use a string expression that includes variables (`$variable.<variable-name>`) and input values (`$input.<input-name>.<path-to-datum>`) as the topic string.
* **Payload**: [Payload](#payload)

## Lambda
### Properties
* **FunctionArn**: string (Required): The ARN of the Lambda function that is executed.
* **Payload**: [Payload](#payload)

## ResetTimer
### Properties
* **TimerName**: string (Required): The name of the timer to reset.

## SetTimer
### Properties
* **DurationExpression**: string: The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (`$variable.<variable-name>`), and input values (`$input.<input-name>.<path-to-datum>`) as the duration. The range of the duration is `1-31622400` seconds. To ensure accuracy, the minimum duration is `60` seconds. The evaluated result of the duration is rounded down to the nearest whole number.
* **Seconds**: int: The number of seconds until the timer expires. The minimum value is `60` seconds to ensure accuracy. The maximum value is `31622400` seconds.
* **TimerName**: string (Required): The name of the timer.

## SetVariable
### Properties
* **Value**: string (Required): The new value of the variable.
* **VariableName**: string (Required): The name of the variable.

## Sns
### Properties
* **Payload**: [Payload](#payload)
* **TargetArn**: string (Required): The ARN of the Amazon SNS target where the message is sent.

## Sqs
### Properties
* **Payload**: [Payload](#payload)
* **QueueUrl**: string (Required): The URL of the SQS queue where the data is written.
* **UseBase64**: bool: Set this to `TRUE` if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to `FALSE`.

## OnExit
### Properties
* **Events**: [Event](#event)[]: Specifies the `actions` that are performed when the state is exited and the `condition` is `TRUE`.

## OnInput
### Properties
* **Events**: [Event](#event)[]: Specifies the `actions` performed when the `condition` evaluates to `TRUE`.
* **TransitionEvents**: [TransitionEvent](#transitionevent)[]: Specifies the `actions` performed, and the next `state` entered, when a `condition` evaluates to `TRUE`.

## TransitionEvent
### Properties
* **Actions**: [Action](#action)[]: The actions to be performed.
* **Condition**: string (Required): A Boolean expression that when `TRUE` causes the `actions` to be performed and the `nextState` to be entered.
* **EventName**: string (Required): The name of the event.
* **NextState**: string (Required): The next state to enter.

## Tag
### Properties
* **Key**: string (Required): Key of the Tag.
* **Value**: string (Required): Value of the Tag.

## AWS.IoTEvents/InputProperties
### Properties
* **InputDefinition**: [InputDefinition](#inputdefinition) (Required)
* **InputDescription**: string: A brief description of the input.
* **InputName**: string: The name of the input.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## InputDefinition
### Properties
* **Attributes**: [Attribute](#attribute)[] (Required): The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the AWS IoT Events system using `BatchPutMessage`. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the `condition` expressions used by detectors that monitor this input.

## Attribute
### Properties
* **JsonPath**: string (Required): An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to AWS IoT Events (`BatchPutMessage`). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the `condition` expressions used by detectors.

_Syntax_: `<field-name>.<field-name>...`

## Tag
### Properties
* **Key**: string (Required): Key of the Tag.
* **Value**: string (Required): Value of the Tag.

