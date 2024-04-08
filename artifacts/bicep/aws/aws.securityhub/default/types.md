# AWS.SecurityHub @ default

## Resource AWS.SecurityHub/AutomationRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/AutomationRuleProperties](#awssecurityhubautomationruleproperties) (Identifier): properties of the resource

## Resource AWS.SecurityHub/Hub@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/HubProperties](#awssecurityhubhubproperties) (Identifier): properties of the resource

## Resource AWS.SecurityHub/Insight@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/InsightProperties](#awssecurityhubinsightproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityHub/Standard@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/StandardProperties](#awssecurityhubstandardproperties) (Required, Identifier): properties of the resource

## AutomationRule_arnOrId
### Properties

## AutomationRule_arnOrId
### Properties

## AutomationRule_NoteUpdate
### Properties
* **Text**: string (Required)
* **UpdatedBy**: [AutomationRule_arnOrId](#automationrulearnorid) (Required)

## AutomationRule_SeverityUpdate
### Properties
* **Label**: string
* **Normalized**: int
* **Product**: int

## AutomationRule_WorkflowUpdate
### Properties
* **Status**: string (Required)

## AutomationRulesAction
### Properties
* **FindingFieldsUpdate**: [AutomationRulesFindingFieldsUpdate](#automationrulesfindingfieldsupdate) (Required)
* **Type**: string (Required)

## AutomationRulesFindingFieldsUpdate
### Properties
* **Confidence**: int
* **Criticality**: int
* **Note**: [AutomationRule_NoteUpdate](#automationrulenoteupdate): The rule action will update the ``Note`` field of a finding.
* **RelatedFindings**: [RelatedFinding](#relatedfinding)[]: The rule action will update the ``RelatedFindings`` field of a finding.
* **Severity**: [AutomationRule_SeverityUpdate](#automationruleseverityupdate): The rule action will update the ``Severity`` field of a finding.
* **Types**: string[]
* **UserDefinedFields**: [map](#map)
* **VerificationState**: string
* **Workflow**: [AutomationRule_WorkflowUpdate](#automationruleworkflowupdate): The rule action will update the ``Workflow`` field of a finding.

## AutomationRulesFindingFilters
### Properties
* **AwsAccountId**: [StringFilter](#stringfilter)[]
* **CompanyName**: [StringFilter](#stringfilter)[]
* **ComplianceAssociatedStandardsId**: [StringFilter](#stringfilter)[]
* **ComplianceSecurityControlId**: [StringFilter](#stringfilter)[]
* **ComplianceStatus**: [StringFilter](#stringfilter)[]
* **Confidence**: [NumberFilter](#numberfilter)[]
* **CreatedAt**: [DateFilter](#datefilter)[]
* **Criticality**: [NumberFilter](#numberfilter)[]
* **Description**: [StringFilter](#stringfilter)[]
* **FirstObservedAt**: [DateFilter](#datefilter)[]
* **GeneratorId**: [StringFilter](#stringfilter)[]
* **Id**: [StringFilter](#stringfilter)[]
* **LastObservedAt**: [DateFilter](#datefilter)[]
* **NoteText**: [StringFilter](#stringfilter)[]
* **NoteUpdatedAt**: [DateFilter](#datefilter)[]
* **NoteUpdatedBy**: [StringFilter](#stringfilter)[]
* **ProductArn**: [StringFilter](#stringfilter)[]
* **ProductName**: [StringFilter](#stringfilter)[]
* **RecordState**: [StringFilter](#stringfilter)[]
* **RelatedFindingsId**: [StringFilter](#stringfilter)[]
* **RelatedFindingsProductArn**: [StringFilter](#stringfilter)[]
* **ResourceDetailsOther**: [MapFilter](#mapfilter)[]
* **ResourceId**: [StringFilter](#stringfilter)[]
* **ResourcePartition**: [StringFilter](#stringfilter)[]
* **ResourceRegion**: [StringFilter](#stringfilter)[]
* **ResourceTags**: [MapFilter](#mapfilter)[]
* **ResourceType**: [StringFilter](#stringfilter)[]
* **SeverityLabel**: [StringFilter](#stringfilter)[]
* **SourceUrl**: [StringFilter](#stringfilter)[]
* **Title**: [StringFilter](#stringfilter)[]
* **Type**: [StringFilter](#stringfilter)[]
* **UpdatedAt**: [DateFilter](#datefilter)[]
* **UserDefinedFields**: [MapFilter](#mapfilter)[]
* **VerificationState**: [StringFilter](#stringfilter)[]
* **WorkflowStatus**: [StringFilter](#stringfilter)[]

## AWS.SecurityHub/AutomationRuleProperties
### Properties
* **Actions**: [AutomationRulesAction](#automationrulesaction)[]
* **CreatedAt**: string (ReadOnly)
* **CreatedBy**: string (ReadOnly)
* **Criteria**: [AutomationRulesFindingFilters](#automationrulesfindingfilters): A set of [Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that ASH uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, ASH applies the rule action to the finding.
* **Description**: string
* **IsTerminal**: bool
* **RuleArn**: string (ReadOnly, Identifier)
* **RuleName**: string
* **RuleOrder**: int
* **RuleStatus**: string: Whether the rule is active after it is created. If this parameter is equal to ``ENABLED``, ASH applies the rule to findings and finding updates after the rule is created.
* **Tags**: [Tags](#tags)
* **UpdatedAt**: string (ReadOnly)

## AWS.SecurityHub/HubProperties
### Properties
* **ARN**: string (ReadOnly, Identifier): An ARN is automatically created for the customer.
* **AutoEnableControls**: bool: Whether to automatically enable new controls when they are added to standards that are enabled
* **ControlFindingGenerator**: string: This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
* **EnableDefaultStandards**: bool (WriteOnly): Whether to enable the security standards that Security Hub has designated as automatically enabled.
* **SubscribedAt**: string (ReadOnly): The date and time when Security Hub was enabled in the account.
* **Tags**: [Tags](#tags)

## AWS.SecurityHub/InsightProperties
### Properties
* **Filters**: [AwsSecurityFindingFilters](#awssecurityfindingfilters) (Required): One or more attributes used to filter the findings included in the insight
* **GroupByAttribute**: string (Required): The grouping attribute for the insight's findings
* **InsightArn**: string (ReadOnly, Identifier): The ARN of a Security Hub insight
* **Name**: string (Required): The name of a Security Hub insight

## AWS.SecurityHub/StandardProperties
### Properties
* **DisabledStandardsControls**: [StandardsControl](#standardscontrol)[]: Specifies which controls are to be disabled in a standard. 
 *Maximum*: ``100``
* **StandardsArn**: string (Required): The ARN of the standard that you want to enable. To view a list of available ASH standards and their ARNs, use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
* **StandardsSubscriptionArn**: string (ReadOnly, Identifier)

## AwsSecurityFindingFilters
### Properties
* **AwsAccountId**: [StringFilter](#stringfilter)[]: The AWS account ID in which a finding is generated.
* **AwsAccountName**: [StringFilter](#stringfilter)[]: The name of the AWS account in which a finding is generated.
* **CompanyName**: [StringFilter](#stringfilter)[]: The name of the findings provider (company) that owns the solution (product) that generates findings.
* **ComplianceAssociatedStandardsId**: [StringFilter](#stringfilter)[]: The unique identifier of a standard in which a control is enabled.
* **ComplianceSecurityControlId**: [StringFilter](#stringfilter)[]: The unique identifier of a control across standards.
* **ComplianceSecurityControlParametersName**: [StringFilter](#stringfilter)[]: The name of a security control parameter.
* **ComplianceSecurityControlParametersValue**: [StringFilter](#stringfilter)[]: The current value of a security control parameter.
* **ComplianceStatus**: [StringFilter](#stringfilter)[]: Exclusive to findings that are generated as the result of a check run against a specific rule in a supported standard.
* **Confidence**: [NumberFilter](#numberfilter)[]: A finding's confidence.
* **CreatedAt**: [DateFilter](#datefilter)[]: An ISO8601-formatted timestamp that indicates when the security findings provider captured the potential security issue that a finding captured.
* **Criticality**: [NumberFilter](#numberfilter)[]: The level of importance assigned to the resources associated with the finding.
* **Description**: [StringFilter](#stringfilter)[]: A finding's description.
* **FindingProviderFieldsConfidence**: [NumberFilter](#numberfilter)[]: The finding provider value for the finding confidence.
* **FindingProviderFieldsCriticality**: [NumberFilter](#numberfilter)[]: The finding provider value for the level of importance assigned to the resources associated with the findings.
* **FindingProviderFieldsRelatedFindingsId**: [StringFilter](#stringfilter)[]: The finding identifier of a related finding that is identified by the finding provider.
* **FindingProviderFieldsRelatedFindingsProductArn**: [StringFilter](#stringfilter)[]: The ARN of the solution that generated a related finding that is identified by the finding provider.
* **FindingProviderFieldsSeverityLabel**: [StringFilter](#stringfilter)[]: The finding provider value for the severity label.
* **FindingProviderFieldsSeverityOriginal**: [StringFilter](#stringfilter)[]: The finding provider's original value for the severity.
* **FindingProviderFieldsTypes**: [StringFilter](#stringfilter)[]: One or more finding types that the finding provider assigned to the finding.
* **FirstObservedAt**: [DateFilter](#datefilter)[]: An ISO8601-formatted timestamp that indicates when the security findings provider first observed the potential security issue that a finding captured.
* **GeneratorId**: [StringFilter](#stringfilter)[]: The identifier for the solution-specific component (a discrete unit of logic) that generated a finding.
* **Id**: [StringFilter](#stringfilter)[]: The security findings provider-specific identifier for a finding.
* **Keyword**: [KeywordFilter](#keywordfilter)[]: A keyword for a finding.
* **LastObservedAt**: [DateFilter](#datefilter)[]: An ISO8601-formatted timestamp that indicates when the security findings provider most recently observed the potential security issue that a finding captured.
* **MalwareName**: [StringFilter](#stringfilter)[]: The name of the malware that was observed.
* **MalwarePath**: [StringFilter](#stringfilter)[]: The filesystem path of the malware that was observed.
* **MalwareState**: [StringFilter](#stringfilter)[]: The state of the malware that was observed.
* **MalwareType**: [StringFilter](#stringfilter)[]: The type of the malware that was observed.
* **NetworkDestinationDomain**: [StringFilter](#stringfilter)[]: The destination domain of network-related information about a finding.
* **NetworkDestinationIpV4**: [IpFilter](#ipfilter)[]: The destination IPv4 address of network-related information about a finding.
* **NetworkDestinationIpV6**: [IpFilter](#ipfilter)[]: The destination IPv6 address of network-related information about a finding.
* **NetworkDestinationPort**: [NumberFilter](#numberfilter)[]: The destination port of network-related information about a finding.
* **NetworkDirection**: [StringFilter](#stringfilter)[]: Indicates the direction of network traffic associated with a finding.
* **NetworkProtocol**: [StringFilter](#stringfilter)[]: The protocol of network-related information about a finding.
* **NetworkSourceDomain**: [StringFilter](#stringfilter)[]: The source domain of network-related information about a finding.
* **NetworkSourceIpV4**: [IpFilter](#ipfilter)[]: The source IPv4 address of network-related information about a finding.
* **NetworkSourceIpV6**: [IpFilter](#ipfilter)[]: The source IPv6 address of network-related information about a finding.
* **NetworkSourceMac**: [StringFilter](#stringfilter)[]: The source media access control (MAC) address of network-related information about a finding.
* **NetworkSourcePort**: [NumberFilter](#numberfilter)[]: The source port of network-related information about a finding.
* **NoteText**: [StringFilter](#stringfilter)[]: The text of a note.
* **NoteUpdatedAt**: [DateFilter](#datefilter)[]: The timestamp of when the note was updated.
* **NoteUpdatedBy**: [StringFilter](#stringfilter)[]: The principal that created a note.
* **ProcessLaunchedAt**: [DateFilter](#datefilter)[]: A timestamp that identifies when the process was launched.
* **ProcessName**: [StringFilter](#stringfilter)[]: The name of the process.
* **ProcessParentPid**: [NumberFilter](#numberfilter)[]: The parent process ID.
* **ProcessPath**: [StringFilter](#stringfilter)[]: The path to the process executable.
* **ProcessPid**: [NumberFilter](#numberfilter)[]: The process ID.
* **ProcessTerminatedAt**: [DateFilter](#datefilter)[]: A timestamp that identifies when the process was terminated.
* **ProductArn**: [StringFilter](#stringfilter)[]: The ARN generated by Security Hub that uniquely identifies a third-party company (security findings provider) after this provider's product (solution that generates findings) is registered with Security Hub.
* **ProductFields**: [MapFilter](#mapfilter)[]: A data type where security findings providers can include additional solution-specific details that aren't part of the defined AwsSecurityFinding format.
* **ProductName**: [StringFilter](#stringfilter)[]: The name of the solution (product) that generates findings.
* **RecommendationText**: [StringFilter](#stringfilter)[]: The recommendation of what to do about the issue described in a finding.
* **RecordState**: [StringFilter](#stringfilter)[]: The updated record state for the finding.
* **Region**: [StringFilter](#stringfilter)[]: The Region from which the finding was generated.
* **RelatedFindingsId**: [StringFilter](#stringfilter)[]: The solution-generated identifier for a related finding.
* **RelatedFindingsProductArn**: [StringFilter](#stringfilter)[]: The ARN of the solution that generated a related finding.
* **ResourceApplicationArn**: [StringFilter](#stringfilter)[]: The ARN of the application that is related to a finding.
* **ResourceApplicationName**: [StringFilter](#stringfilter)[]: The name of the application that is related to a finding.
* **ResourceAwsEc2InstanceIamInstanceProfileArn**: [StringFilter](#stringfilter)[]: The IAM profile ARN of the instance.
* **ResourceAwsEc2InstanceImageId**: [StringFilter](#stringfilter)[]: The Amazon Machine Image (AMI) ID of the instance.
* **ResourceAwsEc2InstanceIpV4Addresses**: [IpFilter](#ipfilter)[]: The IPv4 addresses associated with the instance.
* **ResourceAwsEc2InstanceIpV6Addresses**: [IpFilter](#ipfilter)[]: The IPv6 addresses associated with the instance.
* **ResourceAwsEc2InstanceKeyName**: [StringFilter](#stringfilter)[]: The key name associated with the instance.
* **ResourceAwsEc2InstanceLaunchedAt**: [DateFilter](#datefilter)[]: The date and time the instance was launched.
* **ResourceAwsEc2InstanceSubnetId**: [StringFilter](#stringfilter)[]: The identifier of the subnet that the instance was launched in.
* **ResourceAwsEc2InstanceType**: [StringFilter](#stringfilter)[]: The instance type of the instance.
* **ResourceAwsEc2InstanceVpcId**: [StringFilter](#stringfilter)[]: The identifier of the VPC that the instance was launched in.
* **ResourceAwsIamAccessKeyCreatedAt**: [DateFilter](#datefilter)[]: The creation date/time of the IAM access key related to a finding.
* **ResourceAwsIamAccessKeyPrincipalName**: [StringFilter](#stringfilter)[]: The name of the principal that is associated with an IAM access key.
* **ResourceAwsIamAccessKeyStatus**: [StringFilter](#stringfilter)[]: The status of the IAM access key related to a finding.
* **ResourceAwsIamAccessKeyUserName**: [StringFilter](#stringfilter)[]: The user associated with the IAM access key related to a finding.
* **ResourceAwsIamUserUserName**: [StringFilter](#stringfilter)[]: The name of an IAM user.
* **ResourceAwsS3BucketOwnerId**: [StringFilter](#stringfilter)[]: The canonical user ID of the owner of the S3 bucket.
* **ResourceAwsS3BucketOwnerName**: [StringFilter](#stringfilter)[]: The display name of the owner of the S3 bucket.
* **ResourceContainerImageId**: [StringFilter](#stringfilter)[]: The identifier of the image related to a finding.
* **ResourceContainerImageName**: [StringFilter](#stringfilter)[]: The name of the image related to a finding.
* **ResourceContainerLaunchedAt**: [DateFilter](#datefilter)[]: A timestamp that identifies when the container was started.
* **ResourceContainerName**: [StringFilter](#stringfilter)[]: The name of the container related to a finding.
* **ResourceDetailsOther**: [MapFilter](#mapfilter)[]: The details of a resource that doesn't have a specific subfield for the resource type defined.
* **ResourceId**: [StringFilter](#stringfilter)[]: The canonical identifier for the given resource type.
* **ResourcePartition**: [StringFilter](#stringfilter)[]: The canonical AWS partition name that the Region is assigned to.
* **ResourceRegion**: [StringFilter](#stringfilter)[]: The canonical AWS external Region name where this resource is located.
* **ResourceTags**: [MapFilter](#mapfilter)[]: A list of AWS tags associated with a resource at the time the finding was processed.
* **ResourceType**: [StringFilter](#stringfilter)[]: Specifies the type of the resource that details are provided for.
* **Sample**: [BooleanFilter](#booleanfilter)[]: Indicates whether or not sample findings are included in the filter results.
* **SeverityLabel**: [StringFilter](#stringfilter)[]: The label of a finding's severity.
* **SeverityNormalized**: [NumberFilter](#numberfilter)[]: The normalized severity of a finding.
* **SeverityProduct**: [NumberFilter](#numberfilter)[]: The native severity as defined by the security findings provider's solution that generated the finding.
* **SourceUrl**: [StringFilter](#stringfilter)[]: A URL that links to a page about the current finding in the security findings provider's solution.
* **ThreatIntelIndicatorCategory**: [StringFilter](#stringfilter)[]: The category of a threat intelligence indicator.
* **ThreatIntelIndicatorLastObservedAt**: [DateFilter](#datefilter)[]: A timestamp that identifies the last observation of a threat intelligence indicator.
* **ThreatIntelIndicatorSource**: [StringFilter](#stringfilter)[]: The source of the threat intelligence.
* **ThreatIntelIndicatorSourceUrl**: [StringFilter](#stringfilter)[]: The URL for more details from the source of the threat intelligence.
* **ThreatIntelIndicatorType**: [StringFilter](#stringfilter)[]: The type of a threat intelligence indicator.
* **ThreatIntelIndicatorValue**: [StringFilter](#stringfilter)[]: The value of a threat intelligence indicator.
* **Title**: [StringFilter](#stringfilter)[]: A finding's title.
* **Type**: [StringFilter](#stringfilter)[]: A finding type in the format of namespace/category/classifier that classifies a finding.
* **UpdatedAt**: [DateFilter](#datefilter)[]: An ISO8601-formatted timestamp that indicates when the security findings provider last updated the finding record.
* **UserDefinedFields**: [MapFilter](#mapfilter)[]: A list of name/value string pairs associated with the finding.
* **VerificationState**: [StringFilter](#stringfilter)[]: The veracity of a finding.
* **VulnerabilitiesExploitAvailable**: [StringFilter](#stringfilter)[]: Indicates whether a software vulnerability in your environment has a known exploit.
* **VulnerabilitiesFixAvailable**: [StringFilter](#stringfilter)[]: Indicates whether a vulnerability is fixed in a newer version of the affected software packages.
* **WorkflowState**: [StringFilter](#stringfilter)[]: The workflow state of a finding.
* **WorkflowStatus**: [StringFilter](#stringfilter)[]: The status of the investigation into a finding.

## BooleanFilter
### Properties
* **Value**: bool (Required): The value of the boolean.

## DateFilter
### Properties
* **DateRange**: [DateRange](#daterange) (Required)
* **End**: string
* **Start**: string

## DateFilter
### Properties
* **DateRange**: [DateRange](#daterange)
* **End**: string
* **Start**: string

## DateRange
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## DateRange
### Properties
* **Unit**: string (Required): A date range unit for the date filter.
* **Value**: int (Required): A date range value for the date filter.

## IpFilter
### Properties
* **Cidr**: string (Required): A finding's CIDR value.

## KeywordFilter
### Properties
* **Value**: string (Required): A value for the keyword.

## map
### Properties

## MapFilter
### Properties
* **Comparison**: string (Required)
* **Key**: string (Required)
* **Value**: string (Required)

## MapFilter
### Properties
* **Comparison**: string (Required): The condition to apply to the key value when filtering Security Hub findings with a map filter.
* **Key**: string (Required)
* **Value**: string (Required)

## NumberFilter
### Properties
* **Eq**: int (Required)
* **Gte**: int
* **Lte**: int

## NumberFilter
### Properties
* **Eq**: int: The equal-to condition to be applied to a single field when querying for findings.
* **Gte**: int: The greater-than-equal condition to be applied to a single field when querying for findings.
* **Lte**: int: The less-than-equal condition to be applied to a single field when querying for findings.

## RelatedFinding
### Properties
* **Id**: [AutomationRule_arnOrId](#automationrulearnorid) (Required)
* **ProductArn**: string (Required): The Amazon Resource Name (ARN) for the product that generated a related finding.

## StandardsControl
### Properties
* **Reason**: string: A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required.
* **StandardsControlArn**: string (Required): The Amazon Resource Name (ARN) of the control.

## StringFilter
### Properties
* **Comparison**: string (Required)
* **Value**: string (Required)

## StringFilter
### Properties
* **Comparison**: string (Required)
* **Value**: string (Required)

## Tags
### Properties

## Tags
### Properties

