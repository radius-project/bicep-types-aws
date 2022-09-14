# AWS.InspectorV2 @ default

## Resource AWS.InspectorV2/Filter@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.InspectorV2/FilterProperties](#awsinspectorv2filterproperties) (Required): properties of the resource

## AWS.InspectorV2/FilterProperties
### Properties
* **Arn**: string (ReadOnly): Findings filter ARN.
* **Description**: string: Findings filter description.
* **FilterAction**: [FilterAction](#filteraction) (Required): Findings filter action.
* **FilterCriteria**: [FilterCriteria](#filtercriteria) (Required): Findings filter criteria.
* **Name**: string (Required): Findings filter name.

## FilterAction
### Properties

## FilterCriteria
### Properties
* **AwsAccountId**: [StringFilterList](#stringfilterlist)
* **ComponentId**: [StringFilterList](#stringfilterlist)
* **ComponentType**: [StringFilterList](#stringfilterlist)
* **Ec2InstanceImageId**: [StringFilterList](#stringfilterlist)
* **Ec2InstanceSubnetId**: [StringFilterList](#stringfilterlist)
* **Ec2InstanceVpcId**: [StringFilterList](#stringfilterlist)
* **EcrImageArchitecture**: [StringFilterList](#stringfilterlist)
* **EcrImageHash**: [StringFilterList](#stringfilterlist)
* **EcrImagePushedAt**: [DateFilterList](#datefilterlist)
* **EcrImageRegistry**: [StringFilterList](#stringfilterlist)
* **EcrImageRepositoryName**: [StringFilterList](#stringfilterlist)
* **EcrImageTags**: [StringFilterList](#stringfilterlist)
* **FindingArn**: [StringFilterList](#stringfilterlist)
* **FindingStatus**: [StringFilterList](#stringfilterlist)
* **FindingType**: [StringFilterList](#stringfilterlist)
* **FirstObservedAt**: [DateFilterList](#datefilterlist)
* **InspectorScore**: [NumberFilterList](#numberfilterlist)
* **LastObservedAt**: [DateFilterList](#datefilterlist)
* **NetworkProtocol**: [StringFilterList](#stringfilterlist)
* **PortRange**: [PortRangeFilterList](#portrangefilterlist)
* **RelatedVulnerabilities**: [StringFilterList](#stringfilterlist)
* **ResourceId**: [StringFilterList](#stringfilterlist)
* **ResourceTags**: [MapFilterList](#mapfilterlist)
* **ResourceType**: [StringFilterList](#stringfilterlist)
* **Severity**: [StringFilterList](#stringfilterlist)
* **Title**: [StringFilterList](#stringfilterlist)
* **UpdatedAt**: [DateFilterList](#datefilterlist)
* **VendorSeverity**: [StringFilterList](#stringfilterlist)
* **VulnerabilityId**: [StringFilterList](#stringfilterlist)
* **VulnerabilitySource**: [StringFilterList](#stringfilterlist)
* **VulnerablePackages**: [PackageFilterList](#packagefilterlist)

## StringFilterList
### Properties

## DateFilterList
### Properties

## NumberFilterList
### Properties

## PortRangeFilterList
### Properties

## MapFilterList
### Properties

## PackageFilterList
### Properties

