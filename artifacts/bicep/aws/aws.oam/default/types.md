# AWS.Oam @ default

## Resource AWS.Oam/Link@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Oam/LinkProperties](#awsoamlinkproperties) (Required): properties of the resource

## Resource AWS.Oam/Sink@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Oam/SinkProperties](#awsoamsinkproperties) (Required): properties of the resource

## AWS.Oam/LinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Label**: string (ReadOnly)
* **LabelTemplate**: string (WriteOnly)
* **ResourceTypes**: string[] (Required)
* **SinkIdentifier**: string (Required)
* **Tags**: [Link_Tags](#linktags): Tags to apply to the link

## Link_Tags
### Properties

## AWS.Oam/SinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon resource name (ARN) of the ObservabilityAccessManager Sink
* **Name**: string (Required): The name of the ObservabilityAccessManager Sink.
* **Policy**: [Sink_Policy](#sinkpolicy): The policy of this ObservabilityAccessManager Sink.
* **Tags**: [Sink_Tags](#sinktags): Tags to apply to the sink

## Sink_Policy
### Properties

## Sink_Tags
### Properties

