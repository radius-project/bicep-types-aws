# AWS.QLDB @ default

## Resource AWS.QLDB/Stream@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.QLDB/StreamProperties](#awsqldbstreamproperties): properties of the resource

## AWS.QLDB/StreamProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly)
* **ExclusiveEndTime**: string
* **Id**: string (ReadOnly)
* **InclusiveStartTime**: string
* **KinesisConfiguration**: [KinesisConfiguration](#kinesisconfiguration)
* **LedgerName**: string
* **RoleArn**: [Arn](#arn)
* **StreamName**: string
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Arn
### Properties

## KinesisConfiguration
### Properties
* **AggregationEnabled**: bool
* **StreamArn**: [Stream_Arn](#streamarn)

## Stream_Arn
### Properties

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

