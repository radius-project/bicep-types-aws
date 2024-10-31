# AWS.SecurityHub @ default

## Resource AWS.SecurityHub/AutomationRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/AutomationRuleProperties](#awssecurityhubautomationruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityHub/ConfigurationPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/ConfigurationPolicyProperties](#awssecurityhubconfigurationpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityHub/FindingAggregator@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/FindingAggregatorProperties](#awssecurityhubfindingaggregatorproperties) (Required, Identifier): properties of the resource

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

## Resource AWS.SecurityHub/OrganizationConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/OrganizationConfigurationProperties](#awssecurityhuborganizationconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityHub/PolicyAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/PolicyAssociationProperties](#awssecurityhubpolicyassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SecurityHub/SecurityControl@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SecurityHub/SecurityControlProperties](#awssecurityhubsecuritycontrolproperties) (Required, Identifier): properties of the resource

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
* **Text**: string (Required): The updated note text.
* **UpdatedBy**: [AutomationRule_arnOrId](#automationrulearnorid) (Required): The principal that updated the note.

## AutomationRule_SeverityUpdate
### Properties
* **Label**: string: The severity value of the finding. The allowed values are the following.
  +   ``INFORMATIONAL`` - No issue was found.
  +   ``LOW`` - The issue does not require action on its own.
  +   ``MEDIUM`` - The issue must be addressed but not urgently.
  +   ``HIGH`` - The issue must be addressed as a priority.
  +   ``CRITICAL`` - The issue must be remediated immediately to avoid it escalating.
* **Normalized**: int: The normalized severity for the finding. This attribute is to be deprecated in favor of ``Label``.
 If you provide ``Normalized`` and don't provide ``Label``, ``Label`` is set automatically as follows.
  +  0 - ``INFORMATIONAL`` 
  +  1?39 - ``LOW`` 
  +  40?69 - ``MEDIUM`` 
  +  70?89 - ``HIGH`` 
  +  90?100 - ``CRITICAL``
* **Product**: int: The native severity as defined by the AWS service or integrated partner product that generated the finding.

## AutomationRule_WorkflowUpdate
### Properties
* **Status**: string (Required): The status of the investigation into the finding. The workflow status is specific to an individual finding. It does not affect the generation of new findings. For example, setting the workflow status to ``SUPPRESSED`` or ``RESOLVED`` does not prevent a new finding for the same issue.
 The allowed values are the following.
  +   ``NEW`` - The initial state of a finding, before it is reviewed.
 Security Hub also resets ``WorkFlowStatus`` from ``NOTIFIED`` or ``RESOLVED`` to ``NEW`` in the following cases:
  +  The record state changes from ``ARCHIVED`` to ``ACTIVE``.
  +  The compliance status changes from ``PASSED`` to either ``WARNING``, ``FAILED``, or ``NOT_AVAILABLE``.
  
  +   ``NOTIFIED`` - Indicates that you notified the resource owner about the security issue. Used when the initial reviewer is not the resource owner, and needs intervention from the resource owner.
  +   ``RESOLVED`` - The finding was reviewed and remediated and is now considered resolved.
  +   ``SUPPRESSED`` - Indicates that you reviewed the finding and don't believe that any action is needed. The finding is no longer updated.

## AutomationRulesAction
### Properties
* **FindingFieldsUpdate**: [AutomationRulesFindingFieldsUpdate](#automationrulesfindingfieldsupdate) (Required): Specifies that the automation rule action is an update to a finding field.
* **Type**: string (Required): Specifies the type of action that Security Hub takes when a finding matches the defined criteria of a rule.

## AutomationRulesFindingFieldsUpdate
### Properties
* **Confidence**: int: The rule action updates the ``Confidence`` field of a finding.
* **Criticality**: int: The rule action updates the ``Criticality`` field of a finding.
* **Note**: [AutomationRule_NoteUpdate](#automationrulenoteupdate): The rule action will update the ``Note`` field of a finding.
* **RelatedFindings**: [RelatedFinding](#relatedfinding)[]: The rule action will update the ``RelatedFindings`` field of a finding.
* **Severity**: [AutomationRule_SeverityUpdate](#automationruleseverityupdate): The rule action will update the ``Severity`` field of a finding.
* **Types**: string[]: The rule action updates the ``Types`` field of a finding.
* **UserDefinedFields**: [map](#map): The rule action updates the ``UserDefinedFields`` field of a finding.
* **VerificationState**: string: The rule action updates the ``VerificationState`` field of a finding.
* **Workflow**: [AutomationRule_WorkflowUpdate](#automationruleworkflowupdate): The rule action will update the ``Workflow`` field of a finding.

## AutomationRulesFindingFilters
### Properties
* **AwsAccountId**: [StringFilter](#stringfilter)[]: The AWS-account ID in which a finding was generated.
  Array Members: Minimum number of 1 item. Maximum number of 100 items.
* **CompanyName**: [StringFilter](#stringfilter)[]: The name of the company for the product that generated the finding. For control-based findings, the company is AWS. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ComplianceAssociatedStandardsId**: [StringFilter](#stringfilter)[]: The unique identifier of a standard in which a control is enabled. This field consists of the resource portion of the Amazon Resource Name (ARN) returned for a standard in the [DescribeStandards](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_DescribeStandards.html) API response.
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ComplianceSecurityControlId**: [StringFilter](#stringfilter)[]: The security control ID for which a finding was generated. Security control IDs are the same across standards.
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ComplianceStatus**: [StringFilter](#stringfilter)[]: The result of a security check. This field is only used for findings generated from controls. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **Confidence**: [NumberFilter](#numberfilter)[]: The likelihood that a finding accurately identifies the behavior or issue that it was intended to identify. ``Confidence`` is scored on a 0?100 basis using a ratio scale. A value of ``0`` means 0 percent confidence, and a value of ``100`` means 100 percent confidence. For example, a data exfiltration detection based on a statistical deviation of network traffic has low confidence because an actual exfiltration hasn't been verified. For more information, see [Confidence](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-confidence) in the *User Guide*.
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **CreatedAt**: [DateFilter](#datefilter)[]: A timestamp that indicates when this finding record was created. 
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)
  
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **Criticality**: [NumberFilter](#numberfilter)[]: The level of importance that is assigned to the resources that are associated with a finding. ``Criticality`` is scored on a 0?100 basis, using a ratio scale that supports only full integers. A score of ``0`` means that the underlying resources have no criticality, and a score of ``100`` is reserved for the most critical resources. For more information, see [Criticality](https://docs.aws.amazon.com/securityhub/latest/userguide/asff-top-level-attributes.html#asff-criticality) in the *User Guide*.
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **Description**: [StringFilter](#stringfilter)[]: A finding's description. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **FirstObservedAt**: [DateFilter](#datefilter)[]: A timestamp that indicates when the potential security issue captured by a finding was first observed by the security findings product. 
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)
  
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **GeneratorId**: [StringFilter](#stringfilter)[]: The identifier for the solution-specific component that generated a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 100 items.
* **Id**: [StringFilter](#stringfilter)[]: The product-specific identifier for a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **LastObservedAt**: [DateFilter](#datefilter)[]: A timestamp that indicates when the potential security issue captured by a finding was most recently observed by the security findings product. 
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)
  
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **NoteText**: [StringFilter](#stringfilter)[]: The text of a user-defined note that's added to a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **NoteUpdatedAt**: [DateFilter](#datefilter)[]: The timestamp of when the note was updated.
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)
  
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **NoteUpdatedBy**: [StringFilter](#stringfilter)[]: The principal that created a note. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ProductArn**: [StringFilter](#stringfilter)[]: The Amazon Resource Name (ARN) for a third-party product that generated a finding in Security Hub. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ProductName**: [StringFilter](#stringfilter)[]: Provides the name of the product that generated the finding. For control-based findings, the product name is Security Hub. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **RecordState**: [StringFilter](#stringfilter)[]: Provides the current state of a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **RelatedFindingsId**: [StringFilter](#stringfilter)[]: The product-generated identifier for a related finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **RelatedFindingsProductArn**: [StringFilter](#stringfilter)[]: The ARN for the product that generated a related finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ResourceDetailsOther**: [MapFilter](#mapfilter)[]: Custom fields and values about the resource that a finding pertains to. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ResourceId**: [StringFilter](#stringfilter)[]: The identifier for the given resource type. For AWS resources that are identified by Amazon Resource Names (ARNs), this is the ARN. For AWS resources that lack ARNs, this is the identifier as defined by the AWS-service that created the resource. For non-AWS resources, this is a unique identifier that is associated with the resource. 
  Array Members: Minimum number of 1 item. Maximum number of 100 items.
* **ResourcePartition**: [StringFilter](#stringfilter)[]: The partition in which the resource that the finding pertains to is located. A partition is a group of AWS-Regions. Each AWS-account is scoped to one partition. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ResourceRegion**: [StringFilter](#stringfilter)[]: The AWS-Region where the resource that a finding pertains to is located. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ResourceTags**: [MapFilter](#mapfilter)[]: A list of AWS tags associated with a resource at the time the finding was processed. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ResourceType**: [StringFilter](#stringfilter)[]: A finding's title. 
  Array Members: Minimum number of 1 item. Maximum number of 100 items.
* **SeverityLabel**: [StringFilter](#stringfilter)[]: The severity value of the finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **SourceUrl**: [StringFilter](#stringfilter)[]: Provides a URL that links to a page about the current finding in the finding product. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **Title**: [StringFilter](#stringfilter)[]: A finding's title. 
  Array Members: Minimum number of 1 item. Maximum number of 100 items.
* **Type**: [StringFilter](#stringfilter)[]: One or more finding types in the format of namespace/category/classifier that classify a finding. For a list of namespaces, classifiers, and categories, see [Types taxonomy for ASFF](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format-type-taxonomy.html) in the *User Guide*.
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **UpdatedAt**: [DateFilter](#datefilter)[]: A timestamp that indicates when the finding record was most recently updated. 
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)
  
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **UserDefinedFields**: [MapFilter](#mapfilter)[]: A list of user-defined name and value string pairs added to a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **VerificationState**: [StringFilter](#stringfilter)[]: Provides the veracity of a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **WorkflowStatus**: [StringFilter](#stringfilter)[]: Provides information about the status of the investigation into a finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.

## AWS.SecurityHub/AutomationRuleProperties
### Properties
* **Actions**: [AutomationRulesAction](#automationrulesaction)[] (Required): One or more actions to update finding fields if a finding matches the conditions specified in ``Criteria``.
* **CreatedAt**: string (ReadOnly)
* **CreatedBy**: string (ReadOnly)
* **Criteria**: [AutomationRulesFindingFilters](#automationrulesfindingfilters) (Required): A set of [Security Finding Format (ASFF)](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-findings-format.html) finding field attributes and corresponding expected values that ASH uses to filter findings. If a rule is enabled and a finding matches the criteria specified in this parameter, ASH applies the rule action to the finding.
* **Description**: string (Required): A description of the rule.
* **IsTerminal**: bool: Specifies whether a rule is the last to be applied with respect to a finding that matches the rule criteria. This is useful when a finding matches the criteria for multiple rules, and each rule has different actions. If a rule is terminal, Security Hub applies the rule action to a finding that matches the rule criteria and doesn't evaluate other rules for the finding. By default, a rule isn't terminal.
* **RuleArn**: string (ReadOnly, Identifier)
* **RuleName**: string (Required): The name of the rule.
* **RuleOrder**: int (Required): An integer ranging from 1 to 1000 that represents the order in which the rule action is applied to findings. Security Hub applies rules with lower values for this parameter first.
* **RuleStatus**: string: Whether the rule is active after it is created. If this parameter is equal to ``ENABLED``, ASH applies the rule to findings and finding updates after the rule is created.
* **Tags**: [Tags](#tags): User-defined tags associated with an automation rule.
* **UpdatedAt**: string (ReadOnly)

## AWS.SecurityHub/ConfigurationPolicyProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the configuration policy.
* **ConfigurationPolicy**: [Policy](#policy) (Required)
* **CreatedAt**: string (ReadOnly): The date and time, in UTC and ISO 8601 format.
* **Description**: string: The description of the configuration policy.
* **Id**: string (ReadOnly): The universally unique identifier (UUID) of the configuration policy.
* **Name**: string (Required): The name of the configuration policy.
* **ServiceEnabled**: bool (ReadOnly): Indicates whether the service that the configuration policy applies to is enabled in the policy.
* **Tags**: [Tags](#tags)
* **UpdatedAt**: string (ReadOnly): The date and time, in UTC and ISO 8601 format.

## AWS.SecurityHub/FindingAggregatorProperties
### Properties
* **FindingAggregationRegion**: string (ReadOnly)
* **FindingAggregatorArn**: string (ReadOnly, Identifier)
* **RegionLinkingMode**: string (Required): Indicates whether to aggregate findings from all of the available Regions in the current partition. Also determines whether to automatically aggregate findings from new Regions as Security Hub supports them and you opt into them.
 The selected option also determines how to use the Regions provided in the Regions list.
 The options are as follows:
  +   ``ALL_REGIONS`` - Aggregates findings from all of the Regions where Security Hub is enabled. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. 
  +   ``ALL_REGIONS_EXCEPT_SPECIFIED`` - Aggregates findings from all of the Regions where Security Hub is enabled, except for the Regions listed in the ``Regions`` parameter. When you choose this option, Security Hub also automatically aggregates findings from new Regions as Security Hub supports them and you opt into them. 
  +   ``SPECIFIED_REGIONS`` - Aggregates findings only from the Regions listed in the ``Regions`` parameter. Security Hub does not automatically aggregate findings from new Regions. 
  +   ``NO_REGIONS`` - Aggregates no data because no Regions are selected as linked Regions.
* **Regions**: string[]: If ``RegionLinkingMode`` is ``ALL_REGIONS_EXCEPT_SPECIFIED``, then this is a space-separated list of Regions that don't replicate and send findings to the home Region.
 If ``RegionLinkingMode`` is ``SPECIFIED_REGIONS``, then this is a space-separated list of Regions that do replicate and send findings to the home Region. 
 An ``InvalidInputException`` error results if you populate this field while ``RegionLinkingMode`` is ``NO_REGIONS``.

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

## AWS.SecurityHub/OrganizationConfigurationProperties
### Properties
* **AutoEnable**: bool (Required): Whether to automatically enable Security Hub in new member accounts when they join the organization.
* **AutoEnableStandards**: string: Whether to automatically enable Security Hub default standards in new member accounts when they join the organization.
* **ConfigurationType**: string: Indicates whether the organization uses local or central configuration.
* **MemberAccountLimitReached**: bool (ReadOnly): Whether the maximum number of allowed member accounts are already associated with the Security Hub administrator account.
* **OrganizationConfigurationIdentifier**: string (ReadOnly, Identifier): The identifier of the OrganizationConfiguration being created and assigned as the unique identifier.
* **Status**: string (ReadOnly): Describes whether central configuration could be enabled as the ConfigurationType for the organization.
* **StatusMessage**: string (ReadOnly): Provides an explanation if the value of Status is equal to FAILED when ConfigurationType is equal to CENTRAL.

## AWS.SecurityHub/PolicyAssociationProperties
### Properties
* **AssociationIdentifier**: string (ReadOnly, Identifier): A unique identifier to indicates if the target has an association
* **AssociationStatus**: string (ReadOnly): The current status of the association between the specified target and the configuration
* **AssociationStatusMessage**: string (ReadOnly): An explanation for a FAILED value for AssociationStatus
* **AssociationType**: string (ReadOnly): Indicates whether the association between the specified target and the configuration was directly applied by the Security Hub delegated administrator or inherited from a parent
* **ConfigurationPolicyId**: string (Required): The universally unique identifier (UUID) of the configuration policy or a value of SELF_MANAGED_SECURITY_HUB for a self-managed configuration
* **TargetId**: string (Required): The identifier of the target account, organizational unit, or the root
* **TargetType**: string (Required): Indicates whether the target is an AWS account, organizational unit, or the organization root
* **UpdatedAt**: string (ReadOnly): The date and time, in UTC and ISO 8601 format, that the configuration policy association was last updated

## AWS.SecurityHub/SecurityControlProperties
### Properties
* **LastUpdateReason**: string: The most recent reason for updating the customizable properties of a security control. This differs from the UpdateReason field of the BatchUpdateStandardsControlAssociations API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
* **Parameters**: [Parameters](#parameters) (Required): An object that identifies the name of a control parameter, its current value, and whether it has been customized.
* **SecurityControlArn**: string: The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
* **SecurityControlId**: string (Identifier): The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.

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

## ConfigurationPolicy_Parameters
### Properties

## DateFilter
### Properties
* **DateRange**: [DateRange](#daterange) (Required): A date range for the date filter.
* **End**: string: A timestamp that provides the end date for the date filter.
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)
* **Start**: string: A timestamp that provides the start date for the date filter.
 This field accepts only the specified formats. Timestamps can end with ``Z`` or ``("+" / "-") time-hour [":" time-minute]``. The time-secfrac after seconds is limited to a maximum of 9 digits. The offset is bounded by +/-18:00. Here are valid timestamp formats with examples:
  +   ``YYYY-MM-DDTHH:MM:SSZ`` (for example, ``2019-01-31T23:00:00Z``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmmZ`` (for example, ``2019-01-31T23:00:00.123456789Z``)
  +   ``YYYY-MM-DDTHH:MM:SS+HH:MM`` (for example, ``2024-01-04T15:25:10+17:59``)
  +   ``YYYY-MM-DDTHH:MM:SS-HHMM`` (for example, ``2024-01-04T15:25:10-1759``)
  +   ``YYYY-MM-DDTHH:MM:SS.mmmmmmmmm+HH:MM`` (for example, ``2024-01-04T15:25:10.123456789+17:59``)

## DateFilter
### Properties
* **DateRange**: [DateRange](#daterange)
* **End**: string
* **Start**: string

## DateRange
### Properties
* **Unit**: string (Required): A date range unit for the date filter.
* **Value**: int (Required): A date range value for the date filter.

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
* **Comparison**: string (Required): The condition to apply to the key value when filtering Security Hub findings with a map filter.
 To search for values that have the filter value, use one of the following comparison operators:
  +  To search for values that include the filter value, use ``CONTAINS``. For example, for the ``ResourceTags`` field, the filter ``Department CONTAINS Security`` matches findings that include the value ``Security`` for the ``Department`` tag. In the same example, a finding with a value of ``Security team`` for the ``Department`` tag is a match.
  +  To search for values that exactly match the filter value, use ``EQUALS``. For example, for the ``ResourceTags`` field, the filter ``Department EQUALS Security`` matches findings that have the value ``Security`` for the ``Department`` tag.
  
  ``CONTAINS`` and ``EQUALS`` filters on the same field are joined by ``OR``. A finding matches if it matches any one of those filters. For example, the filters ``Department CONTAINS Security OR Department CONTAINS Finance`` match a finding that includes either ``Security``, ``Finance``, or both values.
 To search for values that don't have the filter value, use one of the following comparison operators:
  +  To search for values that exclude the filter value, use ``NOT_CONTAINS``. For example, for the ``ResourceTags`` field, the filter ``Department NOT_CONTAINS Finance`` matches findings that exclude the value ``Finance`` for the ``Department`` tag.
  +  To search for values other than the filter value, use ``NOT_EQUALS``. For example, for the ``ResourceTags`` field, the filter ``Department NOT_EQUALS Finance`` matches findings that don?t have the value ``Finance`` for the ``Department`` tag.
  
  ``NOT_CONTAINS`` and ``NOT_EQUALS`` filters on the same field are joined by ``AND``. A finding matches only if it matches all of those filters. For example, the filters ``Department NOT_CONTAINS Security AND Department NOT_CONTAINS Finance`` match a finding that excludes both the ``Security`` and ``Finance`` values.
  ``CONTAINS`` filters can only be used with other ``CONTAINS`` filters. ``NOT_CONTAINS`` filters can only be used with other ``NOT_CONTAINS`` filters.
 You can?t have both a ``CONTAINS`` filter and a ``NOT_CONTAINS`` filter on the same field. Similarly, you can?t have both an ``EQUALS`` filter and a ``NOT_EQUALS`` filter on the same field. Combining filters in this way returns an error. 
  ``CONTAINS`` and ``NOT_CONTAINS`` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
* **Key**: string (Required): The key of the map filter. For example, for ``ResourceTags``, ``Key`` identifies the name of the tag. For ``UserDefinedFields``, ``Key`` is the name of the field.
* **Value**: string (Required): The value for the key in the map filter. Filter values are case sensitive. For example, one of the values for a tag called ``Department`` might be ``Security``. If you provide ``security`` as the filter value, then there's no match.

## MapFilter
### Properties
* **Comparison**: string (Required): The condition to apply to the key value when filtering Security Hub findings with a map filter.
* **Key**: string (Required)
* **Value**: string (Required)

## NumberFilter
### Properties
* **Eq**: int (Required): The equal-to condition to be applied to a single field when querying for findings.
* **Gte**: int: The greater-than-equal condition to be applied to a single field when querying for findings.
* **Lte**: int: The less-than-equal condition to be applied to a single field when querying for findings.

## NumberFilter
### Properties
* **Eq**: int: The equal-to condition to be applied to a single field when querying for findings.
* **Gte**: int: The greater-than-equal condition to be applied to a single field when querying for findings.
* **Lte**: int: The less-than-equal condition to be applied to a single field when querying for findings.

## Parameters
### Properties

## Policy
### Properties
* **SecurityHub**: [SecurityHubPolicy](#securityhubpolicy)

## RelatedFinding
### Properties
* **Id**: [AutomationRule_arnOrId](#automationrulearnorid) (Required): The product-generated identifier for a related finding. 
  Array Members: Minimum number of 1 item. Maximum number of 20 items.
* **ProductArn**: string (Required): The Amazon Resource Name (ARN) for the product that generated a related finding.

## SecurityControlCustomParameter
### Properties
* **Parameters**: [ConfigurationPolicy_Parameters](#configurationpolicyparameters): An object that specifies parameter values for a control in a configuration policy.
* **SecurityControlId**: string: The ID of the security control.

## SecurityControlsConfiguration
### Properties
* **DisabledSecurityControlIdentifiers**: string[]: A list of security controls that are disabled in the configuration policy
* **EnabledSecurityControlIdentifiers**: string[]: A list of security controls that are enabled in the configuration policy.
* **SecurityControlCustomParameters**: [SecurityControlCustomParameter](#securitycontrolcustomparameter)[]: A list of security controls and control parameter values that are included in a configuration policy.

## SecurityHubPolicy
### Properties
* **EnabledStandardIdentifiers**: string[]: A list that defines which security standards are enabled in the configuration policy.
* **SecurityControlsConfiguration**: [SecurityControlsConfiguration](#securitycontrolsconfiguration)
* **ServiceEnabled**: bool: Indicates whether Security Hub is enabled in the policy.

## StandardsControl
### Properties
* **Reason**: string: A user-defined reason for changing a control's enablement status in a specified standard. If you are disabling a control, then this property is required.
* **StandardsControlArn**: string (Required): The Amazon Resource Name (ARN) of the control.

## StringFilter
### Properties
* **Comparison**: string (Required): The condition to apply to a string value when filtering Security Hub findings.
 To search for values that have the filter value, use one of the following comparison operators:
  +  To search for values that include the filter value, use ``CONTAINS``. For example, the filter ``Title CONTAINS CloudFront`` matches findings that have a ``Title`` that includes the string CloudFront.
  +  To search for values that exactly match the filter value, use ``EQUALS``. For example, the filter ``AwsAccountId EQUALS 123456789012`` only matches findings that have an account ID of ``123456789012``.
  +  To search for values that start with the filter value, use ``PREFIX``. For example, the filter ``ResourceRegion PREFIX us`` matches findings that have a ``ResourceRegion`` that starts with ``us``. A ``ResourceRegion`` that starts with a different value, such as ``af``, ``ap``, or ``ca``, doesn't match.
  
  ``CONTAINS``, ``EQUALS``, and ``PREFIX`` filters on the same field are joined by ``OR``. A finding matches if it matches any one of those filters. For example, the filters ``Title CONTAINS CloudFront OR Title CONTAINS CloudWatch`` match a finding that includes either ``CloudFront``, ``CloudWatch``, or both strings in the title.
 To search for values that don?t have the filter value, use one of the following comparison operators:
  +  To search for values that exclude the filter value, use ``NOT_CONTAINS``. For example, the filter ``Title NOT_CONTAINS CloudFront`` matches findings that have a ``Title`` that excludes the string CloudFront.
  +  To search for values other than the filter value, use ``NOT_EQUALS``. For example, the filter ``AwsAccountId NOT_EQUALS 123456789012`` only matches findings that have an account ID other than ``123456789012``.
  +  To search for values that don't start with the filter value, use ``PREFIX_NOT_EQUALS``. For example, the filter ``ResourceRegion PREFIX_NOT_EQUALS us`` matches findings with a ``ResourceRegion`` that starts with a value other than ``us``.
  
  ``NOT_CONTAINS``, ``NOT_EQUALS``, and ``PREFIX_NOT_EQUALS`` filters on the same field are joined by ``AND``. A finding matches only if it matches all of those filters. For example, the filters ``Title NOT_CONTAINS CloudFront AND Title NOT_CONTAINS CloudWatch`` match a finding that excludes both ``CloudFront`` and ``CloudWatch`` in the title.
 You can?t have both a ``CONTAINS`` filter and a ``NOT_CONTAINS`` filter on the same field. Similarly, you can't provide both an ``EQUALS`` filter and a ``NOT_EQUALS`` or ``PREFIX_NOT_EQUALS`` filter on the same field. Combining filters in this way returns an error. ``CONTAINS`` filters can only be used with other ``CONTAINS`` filters. ``NOT_CONTAINS`` filters can only be used with other ``NOT_CONTAINS`` filters. 
 You can combine ``PREFIX`` filters with ``NOT_EQUALS`` or ``PREFIX_NOT_EQUALS`` filters for the same field. Security Hub first processes the ``PREFIX`` filters, and then the ``NOT_EQUALS`` or ``PREFIX_NOT_EQUALS`` filters.
 For example, for the following filters, Security Hub first identifies findings that have resource types that start with either ``AwsIam`` or ``AwsEc2``. It then excludes findings that have a resource type of ``AwsIamPolicy`` and findings that have a resource type of ``AwsEc2NetworkInterface``.
  +   ``ResourceType PREFIX AwsIam`` 
  +   ``ResourceType PREFIX AwsEc2`` 
  +   ``ResourceType NOT_EQUALS AwsIamPolicy`` 
  +   ``ResourceType NOT_EQUALS AwsEc2NetworkInterface`` 
  
  ``CONTAINS`` and ``NOT_CONTAINS`` operators can be used only with automation rules. For more information, see [Automation rules](https://docs.aws.amazon.com/securityhub/latest/userguide/automation-rules.html) in the *User Guide*.
* **Value**: string (Required): The string filter value. Filter values are case sensitive. For example, the product name for control-based findings is ``Security Hub``. If you provide ``security hub`` as the filter value, there's no match.

## StringFilter
### Properties
* **Comparison**: string (Required)
* **Value**: string (Required)

## Tags
### Properties

## Tags
### Properties

## Tags
### Properties

