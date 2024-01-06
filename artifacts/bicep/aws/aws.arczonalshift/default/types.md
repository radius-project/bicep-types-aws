# AWS.ARCZonalShift @ default

## Resource AWS.ARCZonalShift/ZonalAutoshiftConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ARCZonalShift/ZonalAutoshiftConfigurationProperties](#awsarczonalshiftzonalautoshiftconfigurationproperties): properties of the resource

## AWS.ARCZonalShift/ZonalAutoshiftConfigurationProperties
### Properties
* **PracticeRunConfiguration**: [PracticeRunConfiguration](#practicerunconfiguration)
* **ResourceIdentifier**: string (Identifier)
* **ZonalAutoshiftStatus**: string

## PracticeRunConfiguration
### Properties
* **BlockedDates**: string[]
* **BlockedWindows**: string[]
* **BlockingAlarms**: [ControlCondition](#controlcondition)[]
* **OutcomeAlarms**: [ControlCondition](#controlcondition)[] (Required)

## ControlCondition
### Properties
* **AlarmIdentifier**: string (Required)
* **Type**: string (Required)

