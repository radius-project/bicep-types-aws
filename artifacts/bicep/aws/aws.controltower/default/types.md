# AWS.ControlTower @ default

## Resource AWS.ControlTower/EnabledBaseline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlTower/EnabledBaselineProperties](#awscontroltowerenabledbaselineproperties) (Required, Identifier): properties of the resource

## Resource AWS.ControlTower/EnabledControl@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlTower/EnabledControlProperties](#awscontroltowerenabledcontrolproperties) (Required, Identifier): properties of the resource

## Resource AWS.ControlTower/LandingZone@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlTower/LandingZoneProperties](#awscontroltowerlandingzoneproperties) (Required, Identifier): properties of the resource

## AnyType
### Properties

## AWS.ControlTower/EnabledBaselineProperties
### Properties
* **BaselineIdentifier**: string (Required)
* **BaselineVersion**: string (Required)
* **EnabledBaselineIdentifier**: string (ReadOnly, Identifier)
* **Parameters**: [Parameter](#parameter)[]
* **Tags**: [Tag](#tag)[]
* **TargetIdentifier**: string (Required)

## AWS.ControlTower/EnabledControlProperties
### Properties
* **ControlIdentifier**: string (Required, Identifier): Arn of the control.
* **Parameters**: [EnabledControlParameter](#enabledcontrolparameter)[]: Parameters to configure the enabled control behavior.
* **Tags**: [Tag](#tag)[]: A set of tags to assign to the enabled control.
* **TargetIdentifier**: string (Required, Identifier): Arn for Organizational unit to which the control needs to be applied

## AWS.ControlTower/LandingZoneProperties
### Properties
* **Arn**: string (ReadOnly)
* **DriftStatus**: string (ReadOnly)
* **LandingZoneIdentifier**: string (ReadOnly, Identifier)
* **LatestAvailableVersion**: string (ReadOnly)
* **Manifest**: [LandingZone_Manifest](#landingzonemanifest) (Required)
* **Status**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]
* **Version**: string (Required)

## EnabledControl_Value
### Properties

## EnabledControlParameter
### Properties
* **Key**: string (Required)
* **Value**: [EnabledControl_Value](#enabledcontrolvalue) (Required)

## LandingZone_Manifest
### Properties

## Parameter
### Properties
* **Key**: string
* **Value**: [AnyType](#anytype)

## Tag
### Properties
* **Key**: string
* **Value**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:.

## Tag
### Properties
* **Key**: string
* **Value**: string

