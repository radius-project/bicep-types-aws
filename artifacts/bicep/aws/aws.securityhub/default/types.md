# AWS.SecurityHub @ default

## Resource AWS.SecurityHub/AutomationRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/AutomationRuleProperties](#awssecurityhubautomationruleproperties): properties of the resource

## Resource AWS.SecurityHub/Hub@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/HubProperties](#awssecurityhubhubproperties): properties of the resource

## Resource AWS.SecurityHub/Standard@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/StandardProperties](#awssecurityhubstandardproperties) (Required): properties of the resource

## AWS.SecurityHub/AutomationRuleProperties
### Properties
* **Actions**: [AutomationRulesAction](#automationrulesaction)[]
* **CreatedAt**: string (ReadOnly): The date and time when Automation Rule was created
* **CreatedBy**: string (ReadOnly): The identifier by which created the rule
* **Criteria**: [AutomationRulesFindingFilters](#automationrulesfindingfilters): The rule criteria for evaluating findings
* **Description**: string: Rule description
* **IsTerminal**: bool: If Rule is a terminal rule
* **RuleArn**: string (ReadOnly, Identifier): An Automation Rule Arn is automatically created
* **RuleName**: string: Rule name
* **RuleOrder**: int: Rule order value
* **RuleStatus**: string: Status of the Rule upon creation
* **Tags**: [Tags](#tags)
* **UpdatedAt**: string (ReadOnly): The date and time when Automation Rule was last updated

## AutomationRulesAction
### Properties
* **FindingFieldsUpdate**: [AutomationRulesFindingFieldsUpdate](#automationrulesfindingfieldsupdate) (Required)
* **Type**: string (Required)

## AutomationRulesFindingFieldsUpdate
### Properties
* **Confidence**: int
* **Criticality**: int
* **Note**: [AutomationRule_NoteUpdate](#automationrulenoteupdate): Note added to the finding
* **RelatedFindings**: [RelatedFinding](#relatedfinding)[]
* **Severity**: [AutomationRule_SeverityUpdate](#automationruleseverityupdate): Severity of the finding
* **Types**: string[]
* **UserDefinedFields**: [map](#map)
* **VerificationState**: string
* **Workflow**: [AutomationRule_WorkflowUpdate](#automationruleworkflowupdate): Workflow status set for the finding

## AutomationRule_NoteUpdate
### Properties
* **Text**: string (Required)
* **UpdatedBy**: [AutomationRule_arnOrId](#automationrulearnorid) (Required)

## AutomationRule_arnOrId
### Properties

## RelatedFinding
### Properties
* **Id**: [AutomationRule_arnOrId](#automationrulearnorid) (Required)
* **ProductArn**: string (Required)

## AutomationRule_arnOrId
### Properties

## AutomationRule_SeverityUpdate
### Properties
* **Label**: string
* **Normalized**: int
* **Product**: int

## map
### Properties

## AutomationRule_WorkflowUpdate
### Properties
* **Status**: string (Required)

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

## StringFilter
### Properties
* **Comparison**: string (Required)
* **Value**: string (Required)

## NumberFilter
### Properties
* **Eq**: int (Required)
* **Gte**: int
* **Lte**: int

## DateFilter
### Properties
* **DateRange**: [DateRange](#daterange) (Required)
* **End**: string
* **Start**: string

## DateRange
### Properties
* **Unit**: string (Required)
* **Value**: int (Required)

## MapFilter
### Properties
* **Comparison**: string (Required)
* **Key**: string (Required)
* **Value**: string (Required)

## Tags
### Properties

## AWS.SecurityHub/HubProperties
### Properties
* **ARN**: string (ReadOnly, Identifier): An ARN is automatically created for the customer.
* **AutoEnableControls**: bool: Whether to automatically enable new controls when they are added to standards that are enabled
* **ControlFindingGenerator**: string: This field, used when enabling Security Hub, specifies whether the calling account has consolidated control findings turned on. If the value for this field is set to SECURITY_CONTROL, Security Hub generates a single finding for a control check even when the check applies to multiple enabled standards.  If the value for this field is set to STANDARD_CONTROL, Security Hub generates separate findings for a control check when the check applies to multiple enabled standards.
* **EnableDefaultStandards**: bool (WriteOnly): Whether to enable the security standards that Security Hub has designated as automatically enabled.
* **SubscribedAt**: string (ReadOnly): The date and time when Security Hub was enabled in the account.
* **Tags**: [Tags](#tags)

## Tags
### Properties

## AWS.SecurityHub/StandardProperties
### Properties
* **DisabledStandardsControls**: [StandardsControl](#standardscontrol)[]: StandardsControls to disable from this Standard.
* **StandardsArn**: string (Required): The ARN of the Standard being enabled
* **StandardsSubscriptionArn**: string (ReadOnly, Identifier): The ARN of the StandardsSubscription for the account ID, region, and Standard.

## StandardsControl
### Properties
* **Reason**: string: the reason the standard control is disabled
* **StandardsControlArn**: string (Required): the Arn for the standard control.

