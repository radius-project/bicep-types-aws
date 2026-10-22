# AWS.LicenseManager @ default

## Resource AWS.LicenseManager/Grant@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/GrantProperties](#awslicensemanagergrantproperties) (Identifier): properties of the resource

## Resource AWS.LicenseManager/License@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/LicenseProperties](#awslicensemanagerlicenseproperties) (Required, Identifier): properties of the resource

## Resource AWS.LicenseManager/LicenseAssetGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/LicenseAssetGroupProperties](#awslicensemanagerlicenseassetgroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.LicenseManager/LicenseAssetRuleSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/LicenseAssetRuleSetProperties](#awslicensemanagerlicenseassetrulesetproperties) (Required, Identifier): properties of the resource

## Resource AWS.LicenseManager/LicenseConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LicenseManager/LicenseConfigurationProperties](#awslicensemanagerlicenseconfigurationproperties) (Required, Identifier): properties of the resource

## AndRuleStatement
### Properties
* **MatchingRuleStatements**: [MatchingRuleStatement](#matchingrulestatement)[]

## AWS.LicenseManager/GrantProperties
### Properties
* **AllowedOperations**: string[] (WriteOnly)
* **GrantArn**: string (ReadOnly, Identifier): Arn of the grant.
* **GrantName**: string: Name for the created Grant.
* **HomeRegion**: string: Home region for the created grant.
* **LicenseArn**: string: License Arn for the grant.
* **Principals**: string[] (WriteOnly)
* **Status**: string (WriteOnly)
* **Tags**: [Tag](#tag)[]: A list of tags to attach.
* **Version**: string (ReadOnly): The version of the grant.

## AWS.LicenseManager/LicenseAssetGroupProperties
### Properties
* **AssociatedLicenseAssetRulesetARNs**: string[] (Required): ARNs of associated license asset rulesets.
* **Description**: string: License asset group description.
* **LicenseAssetGroupArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the license asset group.
* **LicenseAssetGroupConfigurations**: [LicenseAssetGroupConfiguration](#licenseassetgroupconfiguration)[] (Required): License asset group configurations.
* **Name**: string (Required): License asset group name.
* **Properties**: [LicenseAssetGroupProperty](#licenseassetgroupproperty)[]: License asset group properties.
* **Tags**: [Tag](#tag)[]: Tags to add to the license asset group.

## AWS.LicenseManager/LicenseAssetRuleSetProperties
### Properties
* **Description**: string: License asset ruleset description.
* **LicenseAssetRulesetArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the license asset ruleset.
* **Name**: string (Required): License asset ruleset name.
* **Rules**: [LicenseAssetRule](#licenseassetrule)[] (Required): License asset rules.
* **Tags**: [Tag](#tag)[]: Tags to add to the license asset ruleset.

## AWS.LicenseManager/LicenseConfigurationProperties
### Properties
* **Description**: string: Description of the license configuration.
* **DisassociateWhenNotFound**: bool: When true, disassociates a resource when software is uninstalled.
* **LicenseConfigurationArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the license configuration.
* **LicenseConfigurationId**: string (ReadOnly): Unique ID of the license configuration.
* **LicenseCount**: int: Number of licenses managed by the license configuration.
* **LicenseCountHardLimit**: bool: Indicates whether hard or soft license enforcement is used. Exceeding a hard limit blocks the launch of new instances.
* **LicenseCountingType**: string (Required): Dimension used to track the license inventory.
* **LicenseExpiry**: int: License configuration expiry as an epoch timestamp (seconds since 1970-01-01T00:00:00Z).
* **LicenseRules**: string[]: License rules. The syntax is #name=value (for example, #allowedTenancy=EC2-DedicatedHost).
* **Name**: string (Required): Name of the license configuration.
* **OwnerAccountId**: string (ReadOnly): Account ID of the owner of the license configuration.
* **ProductInformationList**: [ProductInformation](#productinformation)[]: Product information.
* **Status**: string (ReadOnly): License configuration status.
* **Tags**: [Tag](#tag)[]: Tags to add to the license configuration.

## AWS.LicenseManager/LicenseProperties
### Properties
* **Beneficiary**: string (Required): Beneficiary of the license.
* **ConsumptionConfiguration**: [ConsumptionConfiguration](#consumptionconfiguration) (Required)
* **Entitlements**: [Entitlement](#entitlement)[] (Required)
* **HomeRegion**: string (Required): Home region for the created license.
* **Issuer**: [IssuerData](#issuerdata) (Required)
* **LicenseArn**: string (ReadOnly, Identifier): Amazon Resource Name is a unique name for each resource.
* **LicenseMetadata**: [Metadata](#metadata)[]
* **LicenseName**: string (Required): Name for the created license.
* **ProductName**: string (Required): Product name for the created license.
* **ProductSKU**: string (Required): ProductSKU of the license.
* **Status**: string
* **Tags**: [Tag](#tag)[]: A list of tags to attach.
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

## InstanceRuleStatement
### Properties
* **AndRuleStatement**: [AndRuleStatement](#andrulestatement)
* **MatchingRuleStatement**: [MatchingRuleStatement](#matchingrulestatement)
* **OrRuleStatement**: [OrRuleStatement](#orrulestatement)

## IssuerData
### Properties
* **Name**: string (Required)
* **SignKey**: string

## LicenseAssetGroupConfiguration
### Properties
* **UsageDimension**: string

## LicenseAssetGroupProperty
### Properties
* **Key**: string
* **Value**: string

## LicenseAssetRule
### Properties
* **RuleStatement**: [RuleStatement](#rulestatement) (Required)

## LicenseConfigurationRuleStatement
### Properties
* **AndRuleStatement**: [AndRuleStatement](#andrulestatement)
* **MatchingRuleStatement**: [MatchingRuleStatement](#matchingrulestatement)
* **OrRuleStatement**: [OrRuleStatement](#orrulestatement)

## LicenseRuleStatement
### Properties
* **AndRuleStatement**: [AndRuleStatement](#andrulestatement)
* **MatchingRuleStatement**: [MatchingRuleStatement](#matchingrulestatement)
* **OrRuleStatement**: [OrRuleStatement](#orrulestatement)

## MatchingRuleStatement
### Properties
* **Constraint**: string (Required): Constraint (e.g. Equals, Not_Equals).
* **KeyToMatch**: string (Required): Key to match.
* **ValueToMatch**: string[] (Required): Values to match.

## Metadata
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## OrRuleStatement
### Properties
* **MatchingRuleStatements**: [MatchingRuleStatement](#matchingrulestatement)[]

## ProductInformation
### Properties
* **ProductInformationFilterList**: [ProductInformationFilter](#productinformationfilter)[] (Required): A product information filter list.
* **ResourceType**: string (Required): Resource type. The possible values are SSM_MANAGED | RDS.

## ProductInformationFilter
### Properties
* **ProductInformationFilterComparator**: string (Required): Logical operator.
* **ProductInformationFilterName**: string (Required): Filter name.
* **ProductInformationFilterValue**: string[]: Filter value.

## ProvisionalConfiguration
### Properties
* **MaxTimeToLiveInMinutes**: int (Required)

## RuleStatement
### Properties
* **InstanceRuleStatement**: [InstanceRuleStatement](#instancerulestatement)
* **LicenseConfigurationRuleStatement**: [LicenseConfigurationRuleStatement](#licenseconfigurationrulestatement)
* **LicenseRuleStatement**: [LicenseRuleStatement](#licenserulestatement)

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ValidityDateFormat
### Properties
* **Begin**: string (Required): Validity begin date for the license.
* **End**: string (Required): Validity begin date for the license.

