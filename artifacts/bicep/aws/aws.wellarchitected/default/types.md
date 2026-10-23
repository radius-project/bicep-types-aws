# AWS.WellArchitected @ default

## Resource AWS.WellArchitected/AgentContext@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/AgentContextProperties](#awswellarchitectedagentcontextproperties) (Required, Identifier): properties of the resource

## Resource AWS.WellArchitected/AgentGoal@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/AgentGoalProperties](#awswellarchitectedagentgoalproperties) (Required, Identifier): properties of the resource

## Resource AWS.WellArchitected/AgentProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/AgentProfileProperties](#awswellarchitectedagentprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.WellArchitected/Lens@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/LensProperties](#awswellarchitectedlensproperties) (Identifier): properties of the resource

## Resource AWS.WellArchitected/Profile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/ProfileProperties](#awswellarchitectedprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.WellArchitected/ReviewTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/ReviewTemplateProperties](#awswellarchitectedreviewtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.WellArchitected/Workload@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.WellArchitected/WorkloadProperties](#awswellarchitectedworkloadproperties) (Required, Identifier): properties of the resource

## AgentContext_Content
### Properties

## AggregationConfiguration
### Properties
* **AccessRoleArn**: string (Required): The ARN of the IAM role used to access resources in this account.
* **AccountId**: string (Required): The target AWS account ID.
* **Regions**: string[] (Required): The target regions in the account.

## AWS.WellArchitected/AgentContextProperties
### Properties
* **ApplicationType**: string (ReadOnly)
* **Arn**: string (ReadOnly, Identifier): The synthetic Amazon Resource Name (ARN) of the Agent Context, composed of the parent profile ARN and the context id.
* **Content**: [AgentContext_Content](#agentcontextcontent) (Required): The free-form content of the Agent Context, supplied as an arbitrary JSON object.
* **ContextType**: string (Required)
* **CreatedAt**: string (ReadOnly): The timestamp when the context was created.
* **CreatedBy**: string (ReadOnly): The identifier of the system or user that created this context.
* **Criticality**: string (ReadOnly)
* **Id**: string (ReadOnly): The service-generated unique identifier of the Agent Context.
* **LastModifiedAt**: string (ReadOnly): The timestamp when the context was last modified.
* **LastModifiedBy**: string (ReadOnly): The identifier of the system or user that last modified this context.
* **ProfileArn**: string (Required): The Amazon Resource Name (ARN) of the parent Agent Profile that owns this context. Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.
* **Title**: string (Required): The title of the Agent Context.

## AWS.WellArchitected/AgentGoalProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The synthetic Amazon Resource Name (ARN) of the Agent Goal, composed of the parent profile ARN and the goal id.
* **CreatedAt**: string (ReadOnly): The timestamp when the goal was created.
* **CreatedBy**: string (ReadOnly): The identifier of the system or user that created this goal.
* **Description**: string: A description of the Agent Goal.
* **Id**: string (ReadOnly): The service-generated unique identifier of the Agent Goal.
* **LastModifiedAt**: string (ReadOnly): The timestamp when the goal was last modified.
* **LastModifiedBy**: string (ReadOnly): The identifier of the system or user that last modified this goal.
* **Pillars**: string[] (Required): The list of Well-Architected pillars this goal targets.
* **ProfileArn**: string (Required): The Amazon Resource Name (ARN) of the parent Agent Profile that owns this goal. Pass `!Ref` of the parent AWS::WellArchitected::AgentProfile to flow its ARN here.
* **Title**: string (Required): The title of the Agent Goal.

## AWS.WellArchitected/AgentProfileProperties
### Properties
* **AggregationConfiguration**: [AggregationConfiguration](#aggregationconfiguration)[] (Required): The aggregation configuration entries (account, regions, access role) associated with this profile.
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the Agent Profile.
* **BusinessOverview**: string: A business overview for the profile used to improve recommendation quality.
* **CreatedAt**: string (ReadOnly): The timestamp when the profile was created.
* **CreatedBy**: string (ReadOnly): The identifier of the system or user that created this profile.
* **DeletionProtection**: bool: Whether deletion protection is enabled for the profile. When enabled, the profile cannot be deleted until deletion protection is disabled.
* **Description**: string: A description of the profile.
* **DisplayName**: string: The human-readable display name of the profile.
* **ExecutionRoleArn**: string (Required): The ARN of the IAM role assumed to execute recommendation actions.
* **LastModifiedAt**: string (ReadOnly): The timestamp when the profile was last modified.
* **LastModifiedBy**: string (ReadOnly): The identifier of the system or user that last modified this profile.
* **Name**: string (Required): The name of the profile. Unique within the account and used as the last component of the ARN.
* **Pillars**: string[] (Required): The list of Well-Architected pillars to focus on.
* **Tags**: [Tag](#tag)[]: Key-value pairs to associate with the Agent Profile.

## AWS.WellArchitected/LensProperties
### Properties
* **Description**: string (ReadOnly): The description of the lens.
* **JSONString**: string (WriteOnly): The JSON representation of a lens.
* **LensArn**: string (ReadOnly, Identifier): The ARN of the lens.
* **LensId**: string (ReadOnly): The unique identifier of the lens.
* **LensVersion**: string: The version of the lens.
* **Name**: string (ReadOnly): The full name of the lens.
* **Owner**: string (ReadOnly): The Amazon Web Services account ID that owns the lens.
* **Tags**: [Lens_Tags](#lenstags)[]: The tags assigned to the lens.

## AWS.WellArchitected/ProfileProperties
### Properties
* **CreatedAt**: string (ReadOnly): The date and time the profile was created.
* **Owner**: string (ReadOnly): The owner of the profile.
* **ProfileArn**: string (ReadOnly, Identifier): The profile ARN.
* **ProfileDescription**: string (Required): The profile description.
* **ProfileName**: string (Required): The name of the profile.
* **ProfileQuestions**: [ProfileQuestionUpdate](#profilequestionupdate)[] (Required): The profile questions.
* **ProfileVersion**: string (ReadOnly): The profile version.
* **Tags**: [Tag](#tag)[]: The tags assigned to the profile.
* **UpdatedAt**: string (ReadOnly): The date and time the profile was last updated.

## AWS.WellArchitected/ReviewTemplateProperties
### Properties
* **Description**: string (Required): The review template description.
* **Lenses**: string[] (Required): The lenses applied to the review template.
* **Notes**: string: The notes associated with the review template.
* **Owner**: string (ReadOnly): The owner of the review template.
* **Tags**: [ReviewTemplate_Tags](#reviewtemplatetags)[]: The tags assigned to the review template.
* **TemplateArn**: string (ReadOnly, Identifier): The review template ARN.
* **TemplateName**: string (Required): The name of the review template.
* **UpdatedAt**: string (ReadOnly): The date and time the review template was last updated.
* **UpdateStatus**: string (ReadOnly): The latest status of the review template.

## AWS.WellArchitected/WorkloadProperties
### Properties
* **AccountIds**: string[]: The list of Amazon Web Services account IDs associated with the workload.
* **ArchitecturalDesign**: string: The URL of the architectural design for the workload.
* **AwsRegions**: string[]: The list of Amazon Web Services Regions associated with the workload.
* **Description**: string (Required): The description for the workload.
* **DiscoveryConfig**: [Workload_DiscoveryConfig](#workloaddiscoveryconfig): Discovery configuration associated to the workload.
* **Environment**: string (Required): The environment for the workload.
* **ImprovementStatus**: string (ReadOnly): The improvement status for a workload.
* **Industry**: string: The industry for the workload.
* **IndustryType**: string: The industry type for the workload.
* **Lenses**: string[] (Required): The list of lenses associated with the workload.
* **NonAwsRegions**: string[]: The list of non-Amazon Web Services Regions associated with the workload.
* **Notes**: string: The notes associated with the workload.
* **ReviewOwner**: string: The review owner of the workload.
* **Tags**: [Workload_Tags](#workloadtags)[]: The tags associated with the workload.
* **WorkloadArn**: string (ReadOnly, Identifier): The ARN for the workload.
* **WorkloadId**: string (ReadOnly): The ID assigned to the workload.
* **WorkloadName**: string (Required): The name of the workload.

## Lens_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ProfileQuestionUpdate
### Properties
* **QuestionId**: string: The ID of the question.
* **SelectedChoiceIds**: string[]: The selected choices.

## ReviewTemplate_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Workload_DiscoveryConfig
### Properties
* **TrustedAdvisorIntegrationStatus**: string: Discovery integration status in respect to Trusted Advisor for the workload.
* **WorkloadResourceDefinition**: string[]: The mode to use for identifying resources associated with the workload.

## Workload_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

