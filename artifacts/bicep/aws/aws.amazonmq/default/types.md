# AWS.AmazonMQ @ default

## Resource AWS.AmazonMQ/Configuration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AmazonMQ/ConfigurationProperties](#awsamazonmqconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.AmazonMQ/ConfigurationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the Amazon MQ configuration.
* **AuthenticationStrategy**: string: The authentication strategy associated with the configuration. The default is SIMPLE.
* **Data**: string (Required, WriteOnly): The base64-encoded XML configuration.
* **Description**: string: The description of the configuration.
* **EngineType**: string (Required): The type of broker engine. Note: Currently, Amazon MQ only supports ACTIVEMQ for creating and editing broker configurations.
* **EngineVersion**: string: The version of the broker engine.
* **Id**: string (ReadOnly, Identifier): The ID of the Amazon MQ configuration.
* **Name**: string (Required): The name of the configuration.
* **Revision**: string (ReadOnly): The revision number of the configuration.
* **Tags**: [TagsEntry](#tagsentry)[]: Create tags when creating the configuration.

## TagsEntry
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

