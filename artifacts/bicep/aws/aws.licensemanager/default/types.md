# AWS.LicenseManager @ default

## Resource AWS.LicenseManager/Grant@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.LicenseManager/GrantProperties](#awslicensemanagergrantproperties): properties of the resource

## Resource AWS.LicenseManager/License@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.LicenseManager/LicenseProperties](#awslicensemanagerlicenseproperties) (Required): properties of the resource

## AWS.LicenseManager/GrantProperties
### Properties
* **AllowedOperations**: string[] (WriteOnly)
* **GrantArn**: [Arn](#arn) (ReadOnly): Arn of the grant.
* **GrantName**: string: Name for the created Grant.
* **HomeRegion**: string: Home region for the created grant.
* **LicenseArn**: [Arn](#arn): License Arn for the grant.
* **Principals**: [Arn](#arn)[] (WriteOnly)
* **Status**: string
* **Version**: string (ReadOnly): The version of the grant.

## Arn
### Properties

## AWS.LicenseManager/LicenseProperties
### Properties
* **Beneficiary**: string: Beneficiary of the license.
* **ConsumptionConfiguration**: [ConsumptionConfiguration](#consumptionconfiguration) (Required)
* **Entitlements**: [Entitlement](#entitlement)[] (Required)
* **HomeRegion**: string (Required): Home region for the created license.
* **Issuer**: [IssuerData](#issuerdata) (Required)
* **LicenseArn**: [Arn](#arn) (ReadOnly): Amazon Resource Name is a unique name for each resource.
* **LicenseMetadata**: [Metadata](#metadata)[]
* **LicenseName**: string (Required): Name for the created license.
* **ProductName**: string (Required): Product name for the created license.
* **ProductSKU**: string: ProductSKU of the license.
* **Status**: [LicenseStatus](#licensestatus) (WriteOnly)
* **Validity**: [ValidityDateFormat](#validitydateformat) (Required)
* **Version**: string (ReadOnly): The version of the license.

## ConsumptionConfiguration
### Properties
* **BorrowConfiguration**: [BorrowConfiguration](#borrowconfiguration)
* **ProvisionalConfiguration**: [ProvisionalConfiguration](#provisionalconfiguration)
* **RenewType**: string

## BorrowConfiguration
### Properties
* **AllowEarlyCheckIn**: bool (Required)
* **MaxTimeToLiveInMinutes**: int (Required)

## ProvisionalConfiguration
### Properties
* **MaxTimeToLiveInMinutes**: int (Required)

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

## Arn
### Properties

## Metadata
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## LicenseStatus
### Properties

## ValidityDateFormat
### Properties
* **Begin**: string (Required): Validity begin date for the license.
* **End**: string (Required): Validity begin date for the license.

