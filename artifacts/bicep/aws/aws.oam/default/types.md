# AWS.Oam @ default

## Resource AWS.Oam/Link@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Oam/LinkProperties](#awsoamlinkproperties) (Required, Identifier): properties of the resource

## Resource AWS.Oam/Sink@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Oam/SinkProperties](#awsoamsinkproperties) (Required, Identifier): properties of the resource

## AWS.Oam/LinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Label**: string (ReadOnly)
* **LabelTemplate**: string (WriteOnly)
* **LinkConfiguration**: [LinkConfiguration](#linkconfiguration)
* **ResourceTypes**: string[] (Required)
* **SinkIdentifier**: string (Required)
* **Tags**: [Link_Tags](#linktags): Tags to apply to the link

## AWS.Oam/SinkProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon resource name (ARN) of the ObservabilityAccessManager Sink
* **Name**: string (Required): The name of the ObservabilityAccessManager Sink.
* **Policy**: [Sink_Policy](#sinkpolicy): The policy of this ObservabilityAccessManager Sink.
* **Tags**: [Sink_Tags](#sinktags): Tags to apply to the sink

## Link_Tags
### Properties

## LinkConfiguration
### Properties
* **LogGroupConfiguration**: [LinkFilter](#linkfilter)
* **MetricConfiguration**: [LinkFilter](#linkfilter)

## LinkFilter
### Properties
* **Filter**: string (Required)

## Sink_Policy
### Properties

## Sink_Tags
### Properties

