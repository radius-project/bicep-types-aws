# AWS.InspectorV2 @ default

## Resource AWS.InspectorV2/Filter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.InspectorV2/FilterProperties](#awsinspectorv2filterproperties) (Required): properties of the resource

## AWS.InspectorV2/FilterProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): Findings filter ARN.
* **Description**: string: Findings filter description.
* **FilterAction**: string (Required): Findings filter action.
* **FilterCriteria**: [FilterCriteria](#filtercriteria) (Required): Findings filter criteria.
* **Name**: string (Required): Findings filter name.

## FilterCriteria
### Properties
* **AwsAccountId**: [StringFilter](#stringfilter)[]
* **ComponentId**: [StringFilter](#stringfilter)[]
* **ComponentType**: [StringFilter](#stringfilter)[]
* **Ec2InstanceImageId**: [StringFilter](#stringfilter)[]
* **Ec2InstanceSubnetId**: [StringFilter](#stringfilter)[]
* **Ec2InstanceVpcId**: [StringFilter](#stringfilter)[]
* **EcrImageArchitecture**: [StringFilter](#stringfilter)[]
* **EcrImageHash**: [StringFilter](#stringfilter)[]
* **EcrImagePushedAt**: [DateFilter](#datefilter)[]
* **EcrImageRegistry**: [StringFilter](#stringfilter)[]
* **EcrImageRepositoryName**: [StringFilter](#stringfilter)[]
* **EcrImageTags**: [StringFilter](#stringfilter)[]
* **FindingArn**: [StringFilter](#stringfilter)[]
* **FindingStatus**: [StringFilter](#stringfilter)[]
* **FindingType**: [StringFilter](#stringfilter)[]
* **FirstObservedAt**: [DateFilter](#datefilter)[]
* **InspectorScore**: [NumberFilter](#numberfilter)[]
* **LastObservedAt**: [DateFilter](#datefilter)[]
* **NetworkProtocol**: [StringFilter](#stringfilter)[]
* **PortRange**: [PortRangeFilter](#portrangefilter)[]
* **RelatedVulnerabilities**: [StringFilter](#stringfilter)[]
* **ResourceId**: [StringFilter](#stringfilter)[]
* **ResourceTags**: [MapFilter](#mapfilter)[]
* **ResourceType**: [StringFilter](#stringfilter)[]
* **Severity**: [StringFilter](#stringfilter)[]
* **Title**: [StringFilter](#stringfilter)[]
* **UpdatedAt**: [DateFilter](#datefilter)[]
* **VendorSeverity**: [StringFilter](#stringfilter)[]
* **VulnerabilityId**: [StringFilter](#stringfilter)[]
* **VulnerabilitySource**: [StringFilter](#stringfilter)[]
* **VulnerablePackages**: [PackageFilter](#packagefilter)[]

## StringFilter
### Properties
* **Comparison**: string (Required)
* **Value**: string (Required)

## DateFilter
### Properties
* **EndInclusive**: int
* **StartInclusive**: int

## NumberFilter
### Properties
* **LowerInclusive**: int
* **UpperInclusive**: int

## PortRangeFilter
### Properties
* **BeginInclusive**: int
* **EndInclusive**: int

## MapFilter
### Properties
* **Comparison**: string (Required)
* **Key**: string
* **Value**: string

## PackageFilter
### Properties
* **Architecture**: [StringFilter](#stringfilter)
* **Epoch**: [NumberFilter](#numberfilter)
* **Name**: [StringFilter](#stringfilter)
* **Release**: [StringFilter](#stringfilter)
* **SourceLayerHash**: [StringFilter](#stringfilter)
* **Version**: [StringFilter](#stringfilter)

