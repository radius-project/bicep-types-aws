# AWS.WorkSpaces @ default

## Resource AWS.WorkSpaces/WorkspacesPool@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WorkSpaces/WorkspacesPoolProperties](#awsworkspacesworkspacespoolproperties) (Required, Identifier): properties of the resource

## ApplicationSettings
### Properties
* **SettingsGroup**: string
* **Status**: string (Required)

## AWS.WorkSpaces/WorkspacesPoolProperties
### Properties
* **ApplicationSettings**: [ApplicationSettings](#applicationsettings)
* **BundleId**: string (Required)
* **Capacity**: [Capacity](#capacity) (Required)
* **CreatedAt**: string (ReadOnly)
* **Description**: string
* **DirectoryId**: string (Required)
* **PoolArn**: string (ReadOnly)
* **PoolId**: string (ReadOnly, Identifier)
* **PoolName**: string (Required)
* **Tags**: [Tag](#tag)[]
* **TimeoutSettings**: [TimeoutSettings](#timeoutsettings)

## Capacity
### Properties
* **DesiredUserSessions**: int (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## TimeoutSettings
### Properties
* **DisconnectTimeoutInSeconds**: int
* **IdleDisconnectTimeoutInSeconds**: int
* **MaxUserDurationInSeconds**: int

