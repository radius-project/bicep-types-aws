# AWS.FMS @ default

## Resource AWS.FMS/NotificationChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/NotificationChannelProperties](#awsfmsnotificationchannelproperties) (Required): properties of the resource

## Resource AWS.FMS/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.FMS/PolicyProperties](#awsfmspolicyproperties) (Required): properties of the resource

## AWS.FMS/NotificationChannelProperties
### Properties
* **SnsRoleName**: string (Required)
* **SnsTopicArn**: string (Required, Identifier)

## AWS.FMS/PolicyProperties
### Properties
* **Arn**: string (ReadOnly)
* **DeleteAllPolicyResources**: bool (WriteOnly)
* **ExcludeMap**: [IEMap](#iemap)
* **ExcludeResourceTags**: bool (Required)
* **Id**: string (ReadOnly, Identifier)
* **IncludeMap**: [IEMap](#iemap)
* **PolicyName**: string (Required)
* **RemediationEnabled**: bool (Required)
* **ResourcesCleanUp**: bool
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **ResourceType**: string (Required)
* **ResourceTypeList**: string[]
* **SecurityServicePolicyData**: [SecurityServicePolicyData](#securityservicepolicydata) (Required)
* **Tags**: [PolicyTag](#policytag)[]

## IEMap
### Properties
* **ACCOUNT**: string[]
* **ORGUNIT**: string[]

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string

## SecurityServicePolicyData
### Properties
* **ManagedServiceData**: string
* **PolicyOption**: [PolicyOption](#policyoption)
* **Type**: string (Required)

## PolicyOption
### Properties
* **NetworkFirewallPolicy**: [NetworkFirewallPolicy](#networkfirewallpolicy)
* **ThirdPartyFirewallPolicy**: [ThirdPartyFirewallPolicy](#thirdpartyfirewallpolicy)

## NetworkFirewallPolicy
### Properties
* **FirewallDeploymentModel**: string (Required)

## ThirdPartyFirewallPolicy
### Properties
* **FirewallDeploymentModel**: string (Required)

## PolicyTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

