# AWS.RefactorSpaces @ default

## Resource AWS.RefactorSpaces/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RefactorSpaces/ApplicationProperties](#awsrefactorspacesapplicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.RefactorSpaces/Environment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RefactorSpaces/EnvironmentProperties](#awsrefactorspacesenvironmentproperties) (Identifier): properties of the resource

## Resource AWS.RefactorSpaces/Route@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RefactorSpaces/RouteProperties](#awsrefactorspacesrouteproperties) (Required, Identifier): properties of the resource

## Resource AWS.RefactorSpaces/Service@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.RefactorSpaces/ServiceProperties](#awsrefactorspacesserviceproperties) (Required, Identifier): properties of the resource

## ApiGatewayProxyInput
### Properties
* **EndpointType**: string
* **StageName**: string

## AWS.RefactorSpaces/ApplicationProperties
### Properties
* **ApiGatewayId**: string (ReadOnly)
* **ApiGatewayProxy**: [ApiGatewayProxyInput](#apigatewayproxyinput) (WriteOnly)
* **ApplicationIdentifier**: string (ReadOnly, Identifier)
* **Arn**: string (ReadOnly)
* **EnvironmentIdentifier**: string (Required, Identifier)
* **Name**: string (Required)
* **NlbArn**: string (ReadOnly)
* **NlbName**: string (ReadOnly)
* **ProxyType**: string (Required)
* **ProxyUrl**: string (ReadOnly)
* **StageName**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
* **VpcId**: string (Required)
* **VpcLinkId**: string (ReadOnly)

## AWS.RefactorSpaces/EnvironmentProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string (WriteOnly)
* **EnvironmentIdentifier**: string (ReadOnly, Identifier)
* **Name**: string (WriteOnly)
* **NetworkFabricType**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
* **TransitGatewayId**: string (ReadOnly)

## AWS.RefactorSpaces/RouteProperties
### Properties
* **ApplicationIdentifier**: string (Required, Identifier)
* **Arn**: string (ReadOnly)
* **DefaultRoute**: [DefaultRouteInput](#defaultrouteinput) (WriteOnly)
* **EnvironmentIdentifier**: string (Required, Identifier)
* **PathResourceToId**: string (ReadOnly)
* **RouteIdentifier**: string (ReadOnly, Identifier)
* **RouteType**: string (Required, WriteOnly)
* **ServiceIdentifier**: string (Required, WriteOnly)
* **Tags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
* **UriPathRoute**: [UriPathRouteInput](#uripathrouteinput) (WriteOnly)

## AWS.RefactorSpaces/ServiceProperties
### Properties
* **ApplicationIdentifier**: string (Required, Identifier)
* **Arn**: string (ReadOnly)
* **Description**: string (WriteOnly)
* **EndpointType**: string (Required, WriteOnly)
* **EnvironmentIdentifier**: string (Required, Identifier)
* **LambdaEndpoint**: [LambdaEndpointInput](#lambdaendpointinput) (WriteOnly)
* **Name**: string (Required, WriteOnly)
* **ServiceIdentifier**: string (ReadOnly, Identifier)
* **Tags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
* **UrlEndpoint**: [UrlEndpointInput](#urlendpointinput) (WriteOnly)
* **VpcId**: string (WriteOnly)

## DefaultRouteInput
### Properties
* **ActivationState**: string (Required)

## LambdaEndpointInput
### Properties
* **Arn**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## UriPathRouteInput
### Properties
* **ActivationState**: string (Required)
* **AppendSourcePath**: bool
* **IncludeChildPaths**: bool
* **Methods**: string[]
* **SourcePath**: string

## UrlEndpointInput
### Properties
* **HealthUrl**: string
* **Url**: string (Required)

