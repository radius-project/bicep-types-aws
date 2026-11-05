# AWS.InternetMonitor @ default

## Resource AWS.InternetMonitor/InternetEvent@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InternetMonitor/InternetEventProperties](#awsinternetmonitorinterneteventproperties) (Identifier): properties of the resource

## Resource AWS.InternetMonitor/Monitor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InternetMonitor/MonitorProperties](#awsinternetmonitormonitorproperties) (Required, Identifier): properties of the resource

## AWS.InternetMonitor/InternetEventProperties
### Properties
* **ClientLocation**: [InternetEvent_ClientLocation](#interneteventclientlocation) (ReadOnly): The impacted location, such as a city, where clients access AWS application resources.
* **EndedAt**: string (ReadOnly): The time when the internet event ended. If the event hasn't ended yet, this value is empty.
* **EventArn**: string (Identifier): The Amazon Resource Name (ARN) of the internet event.
* **EventId**: string (ReadOnly): The internally-generated identifier of an internet event.
* **EventStatus**: string (ReadOnly): The status of the internet event.
* **EventType**: string (ReadOnly): The type of network impairment.
* **StartedAt**: string (ReadOnly): The time when the internet event started.

## AWS.InternetMonitor/MonitorProperties
### Properties
* **CreatedAt**: string (ReadOnly)
* **HealthEventsConfig**: [HealthEventsConfig](#healtheventsconfig)
* **IncludeLinkedAccounts**: bool (WriteOnly)
* **InternetMeasurementsLogDelivery**: [InternetMeasurementsLogDelivery](#internetmeasurementslogdelivery)
* **LinkedAccountId**: string (WriteOnly)
* **MaxCityNetworksToMonitor**: int
* **ModifiedAt**: string (ReadOnly)
* **MonitorArn**: string (ReadOnly)
* **MonitorName**: string (Required, Identifier)
* **ProcessingStatus**: string (ReadOnly)
* **ProcessingStatusInfo**: string (ReadOnly)
* **Resources**: string[]
* **ResourcesToAdd**: string[] (WriteOnly)
* **ResourcesToRemove**: string[] (WriteOnly)
* **Status**: string
* **Tags**: [Tag](#tag)[]
* **TrafficPercentageToMonitor**: int

## HealthEventsConfig
### Properties
* **AvailabilityLocalHealthEventsConfig**: [LocalHealthEventsConfig](#localhealtheventsconfig)
* **AvailabilityScoreThreshold**: int
* **PerformanceLocalHealthEventsConfig**: [LocalHealthEventsConfig](#localhealtheventsconfig)
* **PerformanceScoreThreshold**: int

## InternetEvent_ClientLocation
### Properties
* **ASName**: string (Required): The name of the internet service provider (ISP) or network (ASN).
* **ASNumber**: int (Required): The Autonomous System Number (ASN) of the network at an impacted location.
* **City**: string (Required): The name of the city where the internet event is located.
* **Country**: string (Required): The name of the country where the internet event is located.
* **Latitude**: int (Required): The latitude where the internet event is located.
* **Longitude**: int (Required): The longitude where the internet event is located.
* **Metro**: string: The metro area where the health event is located.
* **Subdivision**: string: The subdivision location where the health event is located.

## InternetMeasurementsLogDelivery
### Properties
* **S3Config**: [S3Config](#s3config)

## LocalHealthEventsConfig
### Properties
* **HealthScoreThreshold**: int
* **MinTrafficImpact**: int
* **Status**: string

## S3Config
### Properties
* **BucketName**: string
* **BucketPrefix**: string
* **LogDeliveryStatus**: string

## Tag
### Properties
* **Key**: string
* **Value**: string

