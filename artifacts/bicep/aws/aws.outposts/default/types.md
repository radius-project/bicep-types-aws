# AWS.Outposts @ default

## Resource AWS.Outposts/Outpost@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Outposts/OutpostProperties](#awsoutpostsoutpostproperties) (Required, Identifier): properties of the resource

## Resource AWS.Outposts/Site@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Outposts/SiteProperties](#awsoutpostssiteproperties) (Required, Identifier): properties of the resource

## Address
### Properties
* **AddressLine1**: string (Required)
* **AddressLine2**: string
* **AddressLine3**: string
* **City**: string (Required)
* **ContactName**: string (Required)
* **ContactPhoneNumber**: string (Required)
* **CountryCode**: string (Required)
* **DistrictOrCounty**: string
* **Municipality**: string
* **PostalCode**: string (Required)
* **StateOrRegion**: string (Required)

## AWS.Outposts/OutpostProperties
### Properties
* **AvailabilityZone**: string
* **AvailabilityZoneId**: string
* **Description**: string
* **LifeCycleStatus**: string (ReadOnly)
* **Name**: string (Required)
* **OutpostArn**: string (ReadOnly, Identifier)
* **OutpostId**: string (ReadOnly)
* **OwnerId**: string (ReadOnly)
* **SiteArn**: string (ReadOnly)
* **SiteId**: string (Required)
* **SupportedHardwareType**: string
* **Tags**: [Tag](#tag)[]

## AWS.Outposts/SiteProperties
### Properties
* **Description**: string
* **Name**: string (Required)
* **Notes**: string
* **OperatingAddress**: [Address](#address)
* **RackPhysicalProperties**: [RackPhysicalProperties](#rackphysicalproperties)
* **ShippingAddress**: [Address](#address)
* **SiteArn**: string (ReadOnly, Identifier)
* **SiteId**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## RackPhysicalProperties
### Properties
* **FiberOpticCableType**: string
* **MaximumSupportedWeightLbs**: string
* **OpticalStandard**: string
* **PowerConnector**: string
* **PowerDrawKva**: string
* **PowerFeedDrop**: string
* **PowerPhase**: string
* **UplinkCount**: string
* **UplinkGbps**: string

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

