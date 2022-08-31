# AWS.FMS @ default

## Resource AWS.FMS/NotificationChannel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FMS/NotificationChannelProperties](#awsfmsnotificationchannelproperties): properties of the resource

## Resource AWS.FMS/Policy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.FMS/PolicyProperties](#awsfmspolicyproperties): properties of the resource

## AWS.FMS/NotificationChannelProperties
### Properties
* **SnsRoleName**: [ResourceArn](#resourcearn)
* **SnsTopicArn**: [ResourceArn](#resourcearn)

## ResourceArn
### Properties

## AWS.FMS/PolicyProperties
### Properties
* **Arn**: [ResourceArn](#resourcearn) (ReadOnly)
* **DeleteAllPolicyResources**: bool (WriteOnly)
* **ExcludeMap**: [IEMap](#iemap)
* **ExcludeResourceTags**: bool
* **Id**: string (ReadOnly)
* **IncludeMap**: [IEMap](#iemap)
* **PolicyName**: string
* **RemediationEnabled**: bool
* **ResourcesCleanUp**: bool
* **ResourceTags**: [ResourceTag](#resourcetag)[]
* **ResourceType**: [ResourceType](#resourcetype)
* **ResourceTypeList**: [ResourceType](#resourcetype)[]
* **SecurityServicePolicyData**: [SecurityServicePolicyData](#securityservicepolicydata)
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
* **Key**: string
* **Value**: string

## ResourceType
### Properties

## SecurityServicePolicyData
### Properties
* **ManagedServiceData**: [ManagedServiceData](#managedservicedata)
* **PolicyOption**: [PolicyOption](#policyoption)
* **Type**: [PolicyType](#policytype)

## ManagedServiceData
### Properties

## PolicyOption
### Properties
* **NetworkFirewallPolicy**: [NetworkFirewallPolicy](#networkfirewallpolicy)
* **ThirdPartyFirewallPolicy**: [ThirdPartyFirewallPolicy](#thirdpartyfirewallpolicy)

## NetworkFirewallPolicy
### Properties
* **FirewallDeploymentModel**: [FirewallDeploymentModel](#firewalldeploymentmodel)

## FirewallDeploymentModel
### Properties

## ThirdPartyFirewallPolicy
### Properties
* **FirewallDeploymentModel**: [FirewallDeploymentModel](#firewalldeploymentmodel)

## PolicyType
### Properties

## PolicyTag
### Properties
* **Key**: string
* **Value**: string

