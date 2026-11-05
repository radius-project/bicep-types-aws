# AWS.ARCZonalShift @ default

## Resource AWS.ARCZonalShift/AutoshiftObserverNotificationStatus@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ARCZonalShift/AutoshiftObserverNotificationStatusProperties](#awsarczonalshiftautoshiftobservernotificationstatusproperties) (Required, Identifier): properties of the resource

## Resource AWS.ARCZonalShift/ZonalAutoshiftConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ARCZonalShift/ZonalAutoshiftConfigurationProperties](#awsarczonalshiftzonalautoshiftconfigurationproperties) (Identifier): properties of the resource

## AWS.ARCZonalShift/AutoshiftObserverNotificationStatusProperties
### Properties
* **AccountId**: string (ReadOnly, Identifier)
* **Region**: string (ReadOnly, Identifier)
* **Status**: string (Required)

## AWS.ARCZonalShift/ZonalAutoshiftConfigurationProperties
### Properties
* **PracticeRunConfiguration**: [PracticeRunConfiguration](#practicerunconfiguration)
* **ResourceIdentifier**: string (Identifier)
* **ZonalAutoshiftStatus**: string

## ControlCondition
### Properties
* **AlarmIdentifier**: string (Required)
* **Type**: string (Required)

## PracticeRunConfiguration
### Properties
* **BlockedDates**: string[]
* **BlockedWindows**: string[]
* **BlockingAlarms**: [ControlCondition](#controlcondition)[]
* **OutcomeAlarms**: [ControlCondition](#controlcondition)[] (Required)

