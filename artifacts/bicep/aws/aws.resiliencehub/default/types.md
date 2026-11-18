# AWS.ResilienceHub @ default

## Resource AWS.ResilienceHub/App@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHub/AppProperties](#awsresiliencehubappproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHub/AppAssessment@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHub/AppAssessmentProperties](#awsresiliencehubappassessmentproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHub/RecommendationTemplate@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHub/RecommendationTemplateProperties](#awsresiliencehubrecommendationtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHub/ResiliencyPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHub/ResiliencyPolicyProperties](#awsresiliencehubresiliencypolicyproperties) (Required, Identifier): properties of the resource

## AppAssessment_Compliance
### Properties
### Additional Properties
* **Additional Properties Type**: [DisruptionCompliance](#disruptioncompliance)

## AppAssessment_ComponentScore
### Properties
### Additional Properties
* **Additional Properties Type**: [ScoringComponentResiliencyScore](#scoringcomponentresiliencyscore)

## AppAssessment_DisruptionScore
### Properties
### Additional Properties
* **Additional Properties Type**: int

## AppAssessment_Policy
### Properties
### Additional Properties
* **Additional Properties Type**: [FailurePolicy](#failurepolicy)

## AWS.ResilienceHub/AppAssessmentProperties
### Properties
* **AppArn**: string (Required): Amazon Resource Name (ARN) of the Resilience Hub application.
* **AppVersion**: string (ReadOnly): The version of the application.
* **AssessmentArn**: string (Identifier): Amazon Resource Name (ARN) of the assessment.
* **AssessmentName**: string (Required): The name for the assessment.
* **AssessmentStatus**: string (ReadOnly): Current status of the assessment for the resiliency policy.
* **Compliance**: [AppAssessment_Compliance](#appassessmentcompliance) (ReadOnly): Application compliance against the resiliency policy, keyed by disruption type.
* **ComplianceStatus**: string (ReadOnly): Current status of compliance for the resiliency policy.
* **Cost**: [Cost](#cost) (ReadOnly)
* **DriftStatus**: string (ReadOnly): Indicates if compliance drifts were detected while running an assessment.
* **EndTime**: string (ReadOnly): End time for the action.
* **Invoker**: string (ReadOnly): The entity that invoked the assessment.
* **Policy**: [ResiliencyPolicy](#resiliencypolicy) (ReadOnly)
* **ResiliencyScore**: [ResiliencyScore](#resiliencyscore) (ReadOnly)
* **StartTime**: string (ReadOnly): Starting time for the action.
* **Tags**: [Tag](#tag)[]: Tags assigned to the resource.
* **VersionName**: string (ReadOnly): Version name of the published application.

## AWS.ResilienceHub/AppProperties
### Properties
* **AppArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the App.
* **AppAssessmentSchedule**: string: Assessment execution schedule.
* **AppTemplateBody**: string (Required): A string containing full ResilienceHub app template body.
* **Description**: string: App description.
* **DriftStatus**: string (ReadOnly): Indicates if compliance drifts (deviations) were detected while running an assessment for your application.
* **EventSubscriptions**: [EventSubscription](#eventsubscription)[]: The list of events you would like to subscribe and get notification for.
* **Name**: string (Required): Name of the app.
* **PermissionModel**: [PermissionModel](#permissionmodel)
* **ResiliencyPolicyArn**: string: Amazon Resource Name (ARN) of the Resiliency Policy.
* **ResourceMappings**: [ResourceMapping](#resourcemapping)[] (Required): An array of ResourceMapping objects.
* **Tags**: [TagMap](#tagmap)

## AWS.ResilienceHub/RecommendationTemplateProperties
### Properties
* **AppArn**: string (ReadOnly): Amazon Resource Name (ARN) of the Resilience Hub application.
* **AssessmentArn**: string (Required): Amazon Resource Name (ARN) of the assessment.
* **Format**: string (Required): The format for the recommendation template.
* **Name**: string (Required): The name for the recommendation template.
* **RecommendationTemplateArn**: string (Identifier): Amazon Resource Name (ARN) for the recommendation template.
* **RecommendationTypes**: string[] (Required): An array of strings that specify the recommendation template type or types.
* **Status**: string (ReadOnly): Status of the recommendation template.
* **Tags**: [Tag](#tag)[]: Tags assigned to the resource.
* **TemplatesLocation**: [S3Location](#s3location) (ReadOnly): The file location of the template.

## AWS.ResilienceHub/ResiliencyPolicyProperties
### Properties
* **DataLocationConstraint**: string: Data Location Constraint of the Policy.
* **Policy**: [PolicyMap](#policymap) (Required)
* **PolicyArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the Resiliency Policy.
* **PolicyDescription**: string: Description of Resiliency Policy.
* **PolicyName**: string (Required): Name of Resiliency Policy.
* **Tags**: [TagMap](#tagmap)
* **Tier**: string (Required): Resiliency Policy Tier.

## Cost
### Properties
* **Amount**: int (Required): The cost amount.
* **Currency**: string (Required): The cost currency, for example USD.
* **Frequency**: string (Required): The cost frequency.

## DisruptionCompliance
### Properties
* **AchievableRpoInSecs**: int: The Recovery Point Objective (RPO) that is achievable, in seconds.
* **AchievableRtoInSecs**: int: The Recovery Time Objective (RTO) that is achievable, in seconds.
* **ComplianceStatus**: string (Required): The current status of compliance for the resiliency policy.
* **CurrentRpoInSecs**: int: The current RPO, in seconds.
* **CurrentRtoInSecs**: int: The current RTO, in seconds.
* **Message**: string: The disruption compliance message.
* **RpoDescription**: string: The RPO description.
* **RpoReferenceId**: string: Reference identifier of the RPO.
* **RtoDescription**: string: The RTO description.
* **RtoReferenceId**: string: Reference identifier of the RTO.

## EventSubscription
### Properties
* **EventType**: string (Required): The type of event you would like to subscribe and get notification for.
* **Name**: string (Required): Unique name to identify an event subscription.
* **SnsTopicArn**: string: Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

## FailurePolicy
### Properties
* **RpoInSecs**: int (Required): Recovery Point Objective (RPO) in seconds.
* **RtoInSecs**: int (Required): Recovery Time Objective (RTO) in seconds.

## FailurePolicy
### Properties
* **RpoInSecs**: int (Required): RPO in seconds.
* **RtoInSecs**: int (Required): RTO in seconds.

## PermissionModel
### Properties
* **CrossAccountRoleArns**: string[]: Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
* **InvokerRoleName**: string: Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
* **Type**: string (Required): Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

## PhysicalResourceId
### Properties
* **AwsAccountId**: string
* **AwsRegion**: string
* **Identifier**: string (Required)
* **Type**: string (Required)

## PolicyMap
### Properties
* **AZ**: [FailurePolicy](#failurepolicy) (Required)
* **Hardware**: [FailurePolicy](#failurepolicy) (Required)
* **Region**: [FailurePolicy](#failurepolicy)
* **Software**: [FailurePolicy](#failurepolicy) (Required)

## ResiliencyPolicy
### Properties
* **DataLocationConstraint**: string: Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
* **Policy**: [AppAssessment_Policy](#appassessmentpolicy): The resiliency policy, keyed by disruption type.
* **PolicyArn**: string: Amazon Resource Name (ARN) of the resiliency policy.
* **PolicyName**: string: The name of the policy.

## ResiliencyScore
### Properties
* **ComponentScore**: [AppAssessment_ComponentScore](#appassessmentcomponentscore): The score generated by Resilience Hub for the scoring component after running an assessment.
* **DisruptionScore**: [AppAssessment_DisruptionScore](#appassessmentdisruptionscore) (Required): The disruption score for a valid key.
* **Score**: int (Required): The outage score for a valid key.

## ResourceMapping
### Properties
* **EksSourceName**: string
* **LogicalStackName**: string
* **MappingType**: string (Required)
* **PhysicalResourceId**: [PhysicalResourceId](#physicalresourceid) (Required)
* **ResourceName**: string
* **TerraformSourceName**: string

## S3Location
### Properties
* **Bucket**: string: The name of the Amazon S3 bucket.
* **Prefix**: string: The prefix for the Amazon S3 bucket.

## ScoringComponentResiliencyScore
### Properties
* **ExcludedCount**: int: Number of recommendations that were excluded from the assessment.
* **OutstandingCount**: int: Number of recommendations that must be implemented to obtain the maximum possible score for the scoring component.
* **PossibleScore**: int: Maximum possible score that can be obtained for the scoring component.
* **Score**: int: Resiliency score points given for the scoring component.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

## Tag
### Properties
* **Key**: string (Required): The key of the tag.
* **Value**: string (Required): The value of the tag.

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

## TagMap
### Properties
### Additional Properties
* **Additional Properties Type**: string

