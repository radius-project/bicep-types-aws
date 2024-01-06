# AWS.ControlTower @ default

## Resource AWS.ControlTower/EnabledControl@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlTower/EnabledControlProperties](#awscontroltowerenabledcontrolproperties) (Required): properties of the resource

## Resource AWS.ControlTower/LandingZone@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlTower/LandingZoneProperties](#awscontroltowerlandingzoneproperties) (Required): properties of the resource

## AWS.ControlTower/EnabledControlProperties
### Properties
* **ControlIdentifier**: string (Required, Identifier): Arn of the control.
* **Parameters**: [EnabledControlParameter](#enabledcontrolparameter)[]: Parameters to configure the enabled control behavior.
* **TargetIdentifier**: string (Required, Identifier): Arn for Organizational unit to which the control needs to be applied

## EnabledControlParameter
### Properties
* **Key**: string (Required)
* **Value**: [EnabledControl_Value](#enabledcontrolvalue) (Required)

## EnabledControl_Value
### Properties

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

## LandingZone_Manifest
### Properties

## Tag
### Properties
* **Key**: string
* **Value**: string

