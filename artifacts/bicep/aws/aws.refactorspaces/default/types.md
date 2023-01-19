# AWS.RefactorSpaces @ default

## Resource AWS.RefactorSpaces/Route@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.RefactorSpaces/RouteProperties](#awsrefactorspacesrouteproperties) (Required): properties of the resource

## AWS.RefactorSpaces/RouteProperties
### Properties
* **ApplicationIdentifier**: string (Required, Identifier)
* **Arn**: string (ReadOnly)
* **DefaultRoute**: [DefaultRouteInput](#defaultrouteinput) (WriteOnly)
* **EnvironmentIdentifier**: string (Required, Identifier)
* **PathResourceToId**: string (ReadOnly)
* **RouteIdentifier**: string (ReadOnly, Identifier)
* **RouteType**: string (WriteOnly)
* **ServiceIdentifier**: string (Required, WriteOnly)
* **Tags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
* **UriPathRoute**: [UriPathRouteInput](#uripathrouteinput) (WriteOnly)

## DefaultRouteInput
### Properties
* **ActivationState**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## UriPathRouteInput
### Properties
* **ActivationState**: string (Required)
* **IncludeChildPaths**: bool
* **Methods**: string[]
* **SourcePath**: string

