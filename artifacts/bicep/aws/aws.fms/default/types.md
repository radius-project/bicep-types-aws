# AWS.FMS @ default

## Resource AWS.FMS/NotificationChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FMS/NotificationChannelProperties](#awsfmsnotificationchannelproperties) (Required): properties of the resource

## Resource AWS.FMS/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FMS/PolicyProperties](#awsfmspolicyproperties) (Required): properties of the resource

## AWS.FMS/NotificationChannelProperties
### Properties
* **SnsRoleName**: [ResourceArn](#resourcearn) (Required)
* **SnsTopicArn**: [ResourceArn](#resourcearn) (Required)

## ResourceArn
### Properties

## AWS.FMS/PolicyProperties
### Properties
* **Arn**: [ResourceArn](#resourcearn) (ReadOnly)
* **DeleteAllPolicyResources**: bool (WriteOnly)
* **ExcludeMap**: [IEMap](#iemap)
* **ExcludeResourceTags**: bool (Required)
* **Id**: string (ReadOnly)
* **IncludeMap**: [IEMap](#iemap)
* **PolicyName**: string (Required)
* **RemediationEnabled**: bool (Required)
* **ResourcesCleanUp**: bool
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **ResourceType**: [ResourceType](#resourcetype) (Required)
* **ResourceTypeList**: [ResourceType](#resourcetype)[]
* **SecurityServicePolicyData**: [SecurityServicePolicyData](#securityservicepolicydata) (Required)
* **Tags**: [PolicyTag](#policytag)[]

## ResourceArn
### Properties

## IEMap
### Properties
* **ACCOUNT**: [AccountId](#accountid)[]
* **ORGUNIT**: [OrganizationalUnitId](#organizationalunitid)[]

## AccountId
### Properties

## OrganizationalUnitId
### Properties

## ResourceTag
### Properties
* **Key**: string (Required)
* **Value**: string

## ResourceType
### Properties

## SecurityServicePolicyData
### Properties
* **ManagedServiceData**: [ManagedServiceData](#managedservicedata)
* **PolicyOption**: [PolicyOption](#policyoption)
* **Type**: [PolicyType](#policytype) (Required)

## ManagedServiceData
### Properties

## PolicyOption
### Properties
* **NetworkFirewallPolicy**: [NetworkFirewallPolicy](#networkfirewallpolicy)
* **ThirdPartyFirewallPolicy**: [ThirdPartyFirewallPolicy](#thirdpartyfirewallpolicy)

## NetworkFirewallPolicy
### Properties
* **FirewallDeploymentModel**: [FirewallDeploymentModel](#firewalldeploymentmodel) (Required)

## FirewallDeploymentModel
### Properties

## ThirdPartyFirewallPolicy
### Properties
* **FirewallDeploymentModel**: [FirewallDeploymentModel](#firewalldeploymentmodel) (Required)

## PolicyType
### Properties

## PolicyTag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

