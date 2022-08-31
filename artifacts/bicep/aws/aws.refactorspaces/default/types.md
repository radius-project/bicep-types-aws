# AWS.RefactorSpaces @ default

## Resource AWS.RefactorSpaces/Route@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.RefactorSpaces/RouteProperties](#awsrefactorspacesrouteproperties): properties of the resource

## AWS.RefactorSpaces/RouteProperties
### Properties
* **ApplicationIdentifier**: string
* **Arn**: string (ReadOnly)
* **DefaultRoute**: [DefaultRouteInput](#defaultrouteinput) (WriteOnly)
* **EnvironmentIdentifier**: string
* **PathResourceToId**: string (ReadOnly)
* **RouteIdentifier**: string (ReadOnly)
* **RouteType**: [RouteType](#routetype) (WriteOnly)
* **ServiceIdentifier**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]: Metadata that you can assign to help organize the frameworks that you create. Each tag is a key-value pair.
* **UriPathRoute**: [UriPathRouteInput](#uripathrouteinput) (WriteOnly)

## DefaultRouteInput
### Properties
* **ActivationState**: [RouteActivationState](#routeactivationstate)

## RouteActivationState
### Properties

## RouteType
### Properties

## Tag
### Properties
* **Key**: string: A string used to identify this tag
* **Value**: string: A string containing the value for the tag

## UriPathRouteInput
### Properties
* **ActivationState**: [RouteActivationState](#routeactivationstate)
* **IncludeChildPaths**: bool
* **Methods**: [Method](#method)[]
* **SourcePath**: string

## Method
### Properties

