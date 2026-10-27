# AWS.AWSExternalAnthropic @ default

## Resource AWS.AWSExternalAnthropic/Workspace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.AWSExternalAnthropic/WorkspaceProperties](#awsawsexternalanthropicworkspaceproperties) (Required, Identifier): properties of the resource

## AWS.AWSExternalAnthropic/WorkspaceProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the workspace.
* **CreatedAt**: string (ReadOnly): The timestamp when the workspace was created.
* **DataResidency**: [DataResidency](#dataresidency)
* **Id**: string (ReadOnly): The unique identifier of the workspace.
* **Name**: string (Required): The name of the workspace.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## DataResidency
### Properties
* **AllowedInferenceGeos**: string[]: Permitted inference geo values. Omit to allow all geos (the service default of 'unrestricted'); otherwise list specific geos.
* **DefaultInferenceGeo**: string: Default inference geo applied when requests omit the parameter. Defaults to 'global' if omitted. Must be a member of AllowedInferenceGeos unless AllowedInferenceGeos is omitted.
* **WorkspaceGeo**: string: Geographic region for workspace data storage. Immutable after creation. Defaults to 'us' if omitted.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

