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

## AWS.SecurityHub/StandardProperties
### Properties
* **DisabledStandardsControls**: [StandardsControl](#standardscontrol)[]: Specifies which controls are to be disabled in a standard. 
 *Maximum*: ``100``
* **StandardsArn**: string (Required): The ARN of the standard that you want to enable. To view a list of available ASH standards and their ARNs, use the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API operation.
* **StandardsSubscriptionArn**: string (ReadOnly, Identifier)

## DateFilter
### Properties
* **DateRange**: [DateRange](#daterange) (Required)
* **End**: string
* **Start**: string

## DateRange
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## map
### Properties

## MapFilter
### Properties
* **Comparison**: string (Required)
* **Key**: string (Required)
* **Value**: string (Required)

## NumberFilter
### Properties
* **Eq**: int (Required)
* **Gte**: int
* **Lte**: int

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

## Tags
### Properties

## Tags
### Properties

