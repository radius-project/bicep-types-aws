# AWS.IoTEvents @ default

## Resource AWS.IoTEvents/AlarmModel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTEvents/AlarmModelProperties](#awsioteventsalarmmodelproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTEvents/DetectorModel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTEvents/DetectorModelProperties](#awsioteventsdetectormodelproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTEvents/Input@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTEvents/InputProperties](#awsioteventsinputproperties) (Required, Identifier): properties of the resource

## AcknowledgeFlow
### Properties
* **Enabled**: bool: The value must be ``TRUE`` or ``FALSE``. If ``TRUE``, you receive a notification when the alarm state changes. You must choose to acknowledge the notification before the alarm state can return to ``NORMAL``. If ``FALSE``, you won't receive notifications. The alarm automatically changes to the ``NORMAL`` state when the input property value returns to the specified range.

## Action
### Properties
* **ClearTimer**: [ClearTimer](#cleartimer): Information needed to clear the timer.
* **DynamoDB**: [DynamoDB](#dynamodb): Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
* **DynamoDBv2**: [DynamoDBv2](#dynamodbv2): Writes to the DynamoDB table that you created. The default action payload contains all attribute-value pairs that have the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify. For more information, see [Actions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-event-actions.html) in *Developer Guide*.
* **Firehose**: [Firehose](#firehose): Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
* **IotEvents**: [IotEvents](#iotevents): Sends ITE input, which passes information about the detector model instance and the event that triggered the action.
* **IotSiteWise**: [IotSiteWise](#iotsitewise): Sends information about the detector model instance and the event that triggered the action to an asset property in ITSW .
* **IotTopicPublish**: [IotTopicPublish](#iottopicpublish): Publishes an MQTT message with the given topic to the IoT message broker.
* **Lambda**: [Lambda](#lambda): Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
* **ResetTimer**: [ResetTimer](#resettimer): Information needed to reset the timer.
* **SetTimer**: [SetTimer](#settimer): Information needed to set the timer.
* **SetVariable**: [SetVariable](#setvariable): Sets a variable to a specified value.
* **Sns**: [Sns](#sns): Sends an Amazon SNS message.
* **Sqs**: [Sqs](#sqs): Sends an Amazon SNS message.

## AlarmAction
### Properties
* **DynamoDB**: [DynamoDB](#dynamodb): Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.
 You must use expressions for all parameters in ``DynamoDBAction``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``hashKeyType`` parameter can be ``'STRING'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``hashKeyField`` parameter can be ``$input.GreenhouseInput.name``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``hashKeyValue`` parameter uses a substitution template. 
  ``'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'`` 
  +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``tableName`` parameter uses a string concatenation. 
  ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`` 
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 If the defined payload type is a string, ``DynamoDBAction`` writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the ``payloadField`` parameter is ``<payload-field>_raw``.
* **DynamoDBv2**: [DynamoDBv2](#dynamodbv2): Defines an action to write to the Amazon DynamoDB table that you created. The default action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the [payload](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html). A separate column of the DynamoDB table receives one attribute-value pair in the payload that you specify.
 You must use expressions for all parameters in ``DynamoDBv2Action``. The expressions accept literals, operators, functions, references, and substitution templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``tableName`` parameter can be ``'GreenhouseTemperatureTable'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``tableName`` parameter can be ``$variable.ddbtableName``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``contentExpression`` parameter in ``Payload`` uses a substitution template. 
  ``'{\"sensorID\": \"${$input.GreenhouseInput.sensor_id}\", \"temperature\": \"${$input.GreenhouseInput.temperature * 9 / 5 + 32}\"}'`` 
  +  For a string concatenation, you must use ``+``. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``tableName`` parameter uses a string concatenation. 
  ``'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date`` 
  
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
 The value for the ``type`` parameter in ``Payload`` must be ``JSON``.
* **Firehose**: [Firehose](#firehose): Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
* **IotEvents**: [IotEvents](#iotevents): Sends an ITE input, passing in information about the detector model instance and the event that triggered the action.
* **IotSiteWise**: [IotSiteWise](#iotsitewise): Sends information about the detector model instance and the event that triggered the action to a specified asset property in ITSW.
 You must use expressions for all parameters in ``IotSiteWiseAction``. The expressions accept literals, operators, functions, references, and substitutions templates.
  **Examples**
 +  For literal values, the expressions must contain single quotes. For example, the value for the ``propertyAlias`` parameter can be ``'/company/windfarm/3/turbine/7/temperature'``.
  +  For references, you must specify either variables or input values. For example, the value for the ``assetId`` parameter can be ``$input.TurbineInput.assetId1``.
  +  For a substitution template, you must use ``${}``, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.
 In the following example, the value for the ``propertyAlias`` parameter uses a substitution template. 
  ``'company/windfarm/${$input.TemperatureInput.sensorData.windfarmID}/turbine/ ${$input.TemperatureInput.sensorData.turbineID}/temperature'`` 
  
 You must specify either ``propertyAlias`` or both ``assetId`` and ``propertyId`` to identify the target asset property in ITSW.
 For more information, see [Expressions](https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html) in the *Developer Guide*.
* **IotTopicPublish**: [IotTopicPublish](#iottopicpublish): Information required to publish the MQTT message through the IoT message broker.
* **Lambda**: [Lambda](#lambda): Calls a Lambda function, passing in information about the detector model instance and the event that triggered the action.
* **Sns**: [Sns](#sns): Information required to publish the Amazon SNS message.
* **Sqs**: [Sqs](#sqs): Sends information about the detector model instance and the event that triggered the action to an Amazon SQS queue.

## AlarmCapabilities
### Properties
* **AcknowledgeFlow**: [AcknowledgeFlow](#acknowledgeflow): Specifies whether to get notified for alarm state changes.
* **InitializationConfiguration**: [InitializationConfiguration](#initializationconfiguration): Specifies the default alarm state. The configuration applies to all alarms that were created based on this alarm model.

## AlarmEventActions
### Properties
* **AlarmActions**: [AlarmAction](#alarmaction)[]: Specifies one or more supported actions to receive notifications when the alarm state changes.

## AlarmRule
### Properties
* **SimpleRule**: [SimpleRule](#simplerule): A rule that compares an input property value to a threshold value with a comparison operator.

## AssetPropertyTimestamp
### Properties
* **OffsetInNanos**: string: The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
* **TimeInSeconds**: string (Required): The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

## AssetPropertyTimestamp
### Properties
* **OffsetInNanos**: string: The nanosecond offset converted from ``timeInSeconds``. The valid range is between 0-999999999.
* **TimeInSeconds**: string (Required): The timestamp, in seconds, in the Unix epoch format. The valid range is between 1-31556889864403199.

## AssetPropertyValue
### Properties
* **Quality**: string: The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
* **Timestamp**: [AssetPropertyTimestamp](#assetpropertytimestamp): The timestamp associated with the asset property value. The default is the current event time.
* **Value**: [AssetPropertyVariant](#assetpropertyvariant) (Required): The value to send to an asset property.

## AssetPropertyValue
### Properties
* **Quality**: string: The quality of the asset property value. The value must be ``'GOOD'``, ``'BAD'``, or ``'UNCERTAIN'``.
* **Timestamp**: [AssetPropertyTimestamp](#assetpropertytimestamp): The timestamp associated with the asset property value. The default is the current event time.
* **Value**: [AssetPropertyVariant](#assetpropertyvariant) (Required): The value to send to an asset property.

## AssetPropertyVariant
### Properties
* **BooleanValue**: string: The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
* **DoubleValue**: string: The asset property value is a double. You must use an expression, and the evaluated result should be a double.
* **IntegerValue**: string: The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
* **StringValue**: string: The asset property value is a string. You must use an expression, and the evaluated result should be a string.

## AssetPropertyVariant
### Properties
* **BooleanValue**: string: The asset property value is a Boolean value that must be ``'TRUE'`` or ``'FALSE'``. You must use an expression, and the evaluated result should be a Boolean value.
* **DoubleValue**: string: The asset property value is a double. You must use an expression, and the evaluated result should be a double.
* **IntegerValue**: string: The asset property value is an integer. You must use an expression, and the evaluated result should be an integer.
* **StringValue**: string: The asset property value is a string. You must use an expression, and the evaluated result should be a string.

## Attribute
### Properties
* **JsonPath**: string (Required): An expression that specifies an attribute-value pair in a JSON structure. Use this to specify an attribute from the JSON payload that is made available by the input. Inputs are derived from messages sent to ITE (``BatchPutMessage``). Each such message contains a JSON payload. The attribute (and its paired value) specified here are available for use in the ``condition`` expressions used by detectors. 
 Syntax: ``<field-name>.<field-name>...``

## AWS.IoTEvents/AlarmModelProperties
### Properties
* **AlarmCapabilities**: [AlarmCapabilities](#alarmcapabilities): Contains the configuration information of alarm state changes.
* **AlarmEventActions**: [AlarmEventActions](#alarmeventactions): Contains information about one or more alarm actions.
* **AlarmModelDescription**: string: The description of the alarm model.
* **AlarmModelName**: string (Identifier): The name of the alarm model.
* **AlarmRule**: [AlarmRule](#alarmrule) (Required): Defines when your alarm is invoked.
* **Key**: string: An input attribute used as a key to create an alarm. ITE routes [inputs](https://docs.aws.amazon.com/iotevents/latest/apireference/API_Input.html) associated with this key to the alarm.
* **RoleArn**: string (Required): The ARN of the IAM role that allows the alarm to perform actions and access AWS resources. For more information, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *General Reference*.
* **Severity**: int: A non-negative integer that reflects the severity level of the alarm.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the alarm model. The tags help you manage the alarm model. For more information, see [Tagging your resources](https://docs.aws.amazon.com/iotevents/latest/developerguide/tagging-iotevents.html) in the *Developer Guide*.
 You can create up to 50 tags for one alarm model.

## AWS.IoTEvents/DetectorModelProperties
### Properties
* **DetectorModelDefinition**: [DetectorModelDefinition](#detectormodeldefinition) (Required): Information that defines how a detector operates.
* **DetectorModelDescription**: string: A brief description of the detector model.
* **DetectorModelName**: string (Identifier): The name of the detector model.
* **EvaluationMethod**: string: Information about the order in which events are evaluated and how actions are executed.
* **Key**: string: The value used to identify a detector instance. When a device or system sends input, a new detector instance with a unique key value is created. ITE can continue to route input to its corresponding detector instance based on this identifying information. 
 This parameter uses a JSON-path expression to select the attribute-value pair in the message payload that is used for identification. To route the message to the correct detector instance, the device must send a message payload that contains the same attribute-value.
* **RoleArn**: string (Required): The ARN of the role that grants permission to ITE to perform its operations.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## AWS.IoTEvents/InputProperties
### Properties
* **InputDefinition**: [InputDefinition](#inputdefinition) (Required): The definition of the input.
* **InputDescription**: string: A brief description of the input.
* **InputName**: string (Identifier): The name of the input.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
 For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).

## ClearTimer
### Properties
* **TimerName**: string (Required): The name of the timer to clear.

## DetectorModelDefinition
### Properties
* **InitialStateName**: string (Required): The state that is entered at the creation of each detector (instance).
* **States**: [State](#state)[] (Required): Information about the states of the detector.

## DynamoDB
### Properties
* **HashKeyField**: string (Required): The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
* **HashKeyType**: string: The data type for the hash key (also called the partition key). You can specify the following values:
  +   ``'STRING'`` - The hash key is a string.
  +   ``'NUMBER'`` - The hash key is a number.
  
 If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
* **HashKeyValue**: string (Required): The value of the hash key (also called the partition key).
* **Operation**: string: The type of operation to perform. You can specify the following values: 
  +   ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  +   ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  +   ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  
 If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
* **Payload**: [Payload](#payload): Information needed to configure the payload.
 By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
* **PayloadField**: string: The name of the DynamoDB column that receives the action payload.
 If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
* **RangeKeyField**: string: The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
* **RangeKeyType**: string: The data type for the range key (also called the sort key), You can specify the following values:
  +   ``'STRING'`` - The range key is a string.
  +   ``'NUMBER'`` - The range key is number.
  
 If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
* **RangeKeyValue**: string: The value of the range key (also called the sort key).
* **TableName**: string (Required): The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

## DynamoDB
### Properties
* **HashKeyField**: string (Required): The name of the hash key (also called the partition key). The ``hashKeyField`` value must match the partition key of the target DynamoDB table.
* **HashKeyType**: string: The data type for the hash key (also called the partition key). You can specify the following values:
  +   ``'STRING'`` - The hash key is a string.
  +   ``'NUMBER'`` - The hash key is a number.
  
 If you don't specify ``hashKeyType``, the default value is ``'STRING'``.
* **HashKeyValue**: string (Required): The value of the hash key (also called the partition key).
* **Operation**: string: The type of operation to perform. You can specify the following values: 
  +   ``'INSERT'`` - Insert data as a new item into the DynamoDB table. This item uses the specified hash key as a partition key. If you specified a range key, the item uses the range key as a sort key.
  +   ``'UPDATE'`` - Update an existing item of the DynamoDB table with new data. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  +   ``'DELETE'`` - Delete an existing item of the DynamoDB table. This item's partition key must match the specified hash key. If you specified a range key, the range key must match the item's sort key.
  
 If you don't specify this parameter, ITE triggers the ``'INSERT'`` operation.
* **Payload**: [Payload](#payload): Information needed to configure the payload.
 By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
* **PayloadField**: string: The name of the DynamoDB column that receives the action payload.
 If you don't specify this parameter, the name of the DynamoDB column is ``payload``.
* **RangeKeyField**: string: The name of the range key (also called the sort key). The ``rangeKeyField`` value must match the sort key of the target DynamoDB table.
* **RangeKeyType**: string: The data type for the range key (also called the sort key), You can specify the following values:
  +   ``'STRING'`` - The range key is a string.
  +   ``'NUMBER'`` - The range key is number.
  
 If you don't specify ``rangeKeyField``, the default value is ``'STRING'``.
* **RangeKeyValue**: string: The value of the range key (also called the sort key).
* **TableName**: string (Required): The name of the DynamoDB table. The ``tableName`` value must match the table name of the target DynamoDB table.

## DynamoDBv2
### Properties
* **Payload**: [Payload](#payload): Information needed to configure the payload.
 By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
* **TableName**: string (Required): The name of the DynamoDB table.

## DynamoDBv2
### Properties
* **Payload**: [Payload](#payload): Information needed to configure the payload.
 By default, ITE generates a standard payload in JSON for any action. This action payload contains all attribute-value pairs that have the information about the detector model instance and the event triggered the action. To configure the action payload, you can use ``contentExpression``.
* **TableName**: string (Required): The name of the DynamoDB table.

## Event
### Properties
* **Actions**: [Action](#action)[]: The actions to be performed.
* **Condition**: string: Optional. The Boolean expression that, when TRUE, causes the ``actions`` to be performed. If not present, the actions are performed (=TRUE). If the expression result is not a Boolean value, the actions are not performed (=FALSE).
* **EventName**: string (Required): The name of the event.

## Firehose
### Properties
* **DeliveryStreamName**: string (Required): The name of the Kinesis Data Firehose delivery stream where the data is written.
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
* **Separator**: string: A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

## Firehose
### Properties
* **DeliveryStreamName**: string (Required): The name of the Kinesis Data Firehose delivery stream where the data is written.
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to an Amazon Data Firehose delivery stream.
* **Separator**: string: A character separator that is used to separate records written to the Kinesis Data Firehose delivery stream. Valid values are: '\n' (newline), '\t' (tab), '\r\n' (Windows newline), ',' (comma).

## InitializationConfiguration
### Properties
* **DisabledOnInitialization**: bool (Required): The value must be ``TRUE`` or ``FALSE``. If ``FALSE``, all alarm instances created based on the alarm model are activated. The default value is ``TRUE``.

## InputDefinition
### Properties
* **Attributes**: [Attribute](#attribute)[] (Required): The attributes from the JSON payload that are made available by the input. Inputs are derived from messages sent to the ITE system using ``BatchPutMessage``. Each such message contains a JSON payload, and those attributes (and their paired values) specified here are available for use in the ``condition`` expressions used by detectors that monitor this input.

## IotEvents
### Properties
* **InputName**: string (Required): The name of the ITE input where the data is sent.
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to an ITE input.

## IotEvents
### Properties
* **InputName**: string (Required): The name of the ITE input where the data is sent.
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to an ITE input.

## IotSiteWise
### Properties
* **AssetId**: string: The ID of the asset that has the specified property.
* **EntryId**: string: A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
* **PropertyAlias**: string: The alias of the asset property.
* **PropertyId**: string: The ID of the asset property.
* **PropertyValue**: [AssetPropertyValue](#assetpropertyvalue): The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

## IotSiteWise
### Properties
* **AssetId**: string: The ID of the asset that has the specified property.
* **EntryId**: string: A unique identifier for this entry. You can use the entry ID to track which data entry causes an error in case of failure. The default is a new unique identifier.
* **PropertyAlias**: string: The alias of the asset property.
* **PropertyId**: string: The ID of the asset property.
* **PropertyValue**: [AssetPropertyValue](#assetpropertyvalue) (Required): The value to send to the asset property. This value contains timestamp, quality, and value (TQV) information.

## IotTopicPublish
### Properties
* **MqttTopic**: string (Required): The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
* **Payload**: [Payload](#payload): You can configure the action payload when you publish a message to an IoTCore topic.

## IotTopicPublish
### Properties
* **MqttTopic**: string (Required): The MQTT topic of the message. You can use a string expression that includes variables (``$variable.<variable-name>``) and input values (``$input.<input-name>.<path-to-datum>``) as the topic string.
* **Payload**: [Payload](#payload): You can configure the action payload when you publish a message to an IoTCore topic.

## Lambda
### Properties
* **FunctionArn**: string (Required): The ARN of the Lambda function that is executed.
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to a Lambda function.

## Lambda
### Properties
* **FunctionArn**: string (Required): The ARN of the Lambda function that is executed.
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to a Lambda function.

## OnEnter
### Properties
* **Events**: [Event](#event)[]: Specifies the actions that are performed when the state is entered and the ``condition`` is ``TRUE``.

## OnExit
### Properties
* **Events**: [Event](#event)[]: Specifies the ``actions`` that are performed when the state is exited and the ``condition`` is ``TRUE``.

## OnInput
### Properties
* **Events**: [Event](#event)[]: Specifies the actions performed when the ``condition`` evaluates to TRUE.
* **TransitionEvents**: [TransitionEvent](#transitionevent)[]: Specifies the actions performed, and the next state entered, when a ``condition`` evaluates to TRUE.

## Payload
### Properties
* **ContentExpression**: string (Required): The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
* **Type**: string (Required): The value of the payload type can be either ``STRING`` or ``JSON``.

## Payload
### Properties
* **ContentExpression**: string (Required): The content of the payload. You can use a string expression that includes quoted strings (``'<string>'``), variables (``$variable.<variable-name>``), input values (``$input.<input-name>.<path-to-datum>``), string concatenations, and quoted strings that contain ``${}`` as the content. The recommended maximum size of a content expression is 1 KB.
* **Type**: string (Required): The value of the payload type can be either ``STRING`` or ``JSON``.

## ResetTimer
### Properties
* **TimerName**: string (Required): The name of the timer to reset.

## SetTimer
### Properties
* **DurationExpression**: string: The duration of the timer, in seconds. You can use a string expression that includes numbers, variables (``$variable.<variable-name>``), and input values (``$input.<input-name>.<path-to-datum>``) as the duration. The range of the duration is 1-31622400 seconds. To ensure accuracy, the minimum duration is 60 seconds. The evaluated result of the duration is rounded down to the nearest whole number.
* **Seconds**: int: The number of seconds until the timer expires. The minimum value is 60 seconds to ensure accuracy. The maximum value is 31622400 seconds.
* **TimerName**: string (Required): The name of the timer.

## SetVariable
### Properties
* **Value**: string (Required): The new value of the variable.
* **VariableName**: string (Required): The name of the variable.

## SimpleRule
### Properties
* **ComparisonOperator**: string (Required): The comparison operator.
* **InputProperty**: string (Required): The value on the left side of the comparison operator. You can specify an ITE input attribute as an input property.
* **Threshold**: string (Required): The value on the right side of the comparison operator. You can enter a number or specify an ITE input attribute.

## Sns
### Properties
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message as an Amazon SNS push notification.
* **TargetArn**: string (Required): The ARN of the Amazon SNS target where the message is sent.

## Sns
### Properties
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message as an Amazon SNS push notification.
* **TargetArn**: string (Required): The ARN of the Amazon SNS target where the message is sent.

## Sqs
### Properties
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to an Amazon SQS queue.
* **QueueUrl**: string (Required): The URL of the SQS queue where the data is written.
* **UseBase64**: bool: Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.

## Sqs
### Properties
* **Payload**: [Payload](#payload): You can configure the action payload when you send a message to an Amazon SQS queue.
* **QueueUrl**: string (Required): The URL of the SQS queue where the data is written.
* **UseBase64**: bool: Set this to TRUE if you want the data to be base-64 encoded before it is written to the queue. Otherwise, set this to FALSE.

## State
### Properties
* **OnEnter**: [OnEnter](#onenter): When entering this state, perform these ``actions`` if the ``condition`` is TRUE.
* **OnExit**: [OnExit](#onexit): When exiting this state, perform these ``actions`` if the specified ``condition`` is ``TRUE``.
* **OnInput**: [OnInput](#oninput): When an input is received and the ``condition`` is TRUE, perform the specified ``actions``.
* **StateName**: string (Required): The name of the state.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## TransitionEvent
### Properties
* **Actions**: [Action](#action)[]: The actions to be performed.
* **Condition**: string (Required): Required. A Boolean expression that when TRUE causes the actions to be performed and the ``nextState`` to be entered.
* **EventName**: string (Required): The name of the transition event.
* **NextState**: string (Required): The next state to enter.

