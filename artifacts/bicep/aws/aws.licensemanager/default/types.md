# AWS.LicenseManager @ default

## Resource AWS.LicenseManager/Grant@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/GrantProperties](#awslicensemanagergrantproperties) (Identifier): properties of the resource

## Resource AWS.LicenseManager/License@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/LicenseProperties](#awslicensemanagerlicenseproperties) (Required, Identifier): properties of the resource

## AWS.LicenseManager/GrantProperties
### Properties
* **AllowedOperations**: string[] (WriteOnly)
* **GrantArn**: string (ReadOnly, Identifier): Arn of the grant.
* **GrantName**: string: Name for the created Grant.
* **HomeRegion**: string: Home region for the created grant.
* **LicenseArn**: string: License Arn for the grant.
* **Principals**: string[] (WriteOnly)
* **Status**: string (WriteOnly)
* **Version**: string (ReadOnly): The version of the grant.

## AWS.LicenseManager/LicenseProperties
### Properties
* **Beneficiary**: string: Beneficiary of the license.
* **ConsumptionConfiguration**: [ConsumptionConfiguration](#consumptionconfiguration) (Required)
* **Entitlements**: [Entitlement](#entitlement)[] (Required)
* **HomeRegion**: string (Required): Home region for the created license.
* **Issuer**: [IssuerData](#issuerdata) (Required)
* **LicenseArn**: string (ReadOnly, Identifier): Amazon Resource Name is a unique name for each resource.
* **LicenseMetadata**: [Metadata](#metadata)[]
* **LicenseName**: string (Required): Name for the created license.
* **ProductName**: string (Required): Product name for the created license.
* **ProductSKU**: string: ProductSKU of the license.
* **Status**: string (WriteOnly)
* **Validity**: [ValidityDateFormat](#validitydateformat) (Required)
* **Version**: string (ReadOnly): The version of the license.

## BorrowConfiguration
### Properties
* **AllowEarlyCheckIn**: bool (Required)
* **MaxTimeToLiveInMinutes**: int (Required)

## ConsumptionConfiguration
### Properties
* **BorrowConfiguration**: [BorrowConfiguration](#borrowconfiguration)
* **ProvisionalConfiguration**: [ProvisionalConfiguration](#provisionalconfiguration)
* **RenewType**: string

## Entitlement
### Properties
* **AllowCheckIn**: bool
* **MaxCount**: int
* **Name**: string (Required)
* **Overage**: bool
* **Unit**: string (Required)
* **Value**: string

## IssuerData
### Properties
* **Name**: string (Required)
* **SignKey**: string

## Metadata
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## ProvisionalConfiguration
### Properties
* **MaxTimeToLiveInMinutes**: int (Required)

## ValidityDateFormat
### Properties
* **Begin**: string (Required): Validity begin date for the license.
* **End**: string (Required): Validity begin date for the license.

