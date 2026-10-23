# AWS.ResilienceHubV2 @ default

## Resource AWS.ResilienceHubV2/Policy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHubV2/PolicyProperties](#awsresiliencehubv2policyproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHubV2/Service@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHubV2/ServiceProperties](#awsresiliencehubv2serviceproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHubV2/ServiceFunction@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHubV2/ServiceFunctionProperties](#awsresiliencehubv2servicefunctionproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHubV2/System@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHubV2/SystemProperties](#awsresiliencehubv2systemproperties) (Required, Identifier): properties of the resource

## Resource AWS.ResilienceHubV2/UserJourney@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHubV2/UserJourneyProperties](#awsresiliencehubv2userjourneyproperties) (Required, Identifier): properties of the resource

## AssertionDefinition
### Properties
* **Text**: string (Required): The text of the assertion.

## AssociatedSystem
### Properties
* **SystemArn**: string (Required): The system ARN.
* **UserJourneyIds**: string[]: User journey IDs associated with this system.

## AvailabilitySlo
### Properties
* **Target**: int: Availability target percentage.

## AWS.ResilienceHubV2/PolicyProperties
### Properties
* **AssociatedServiceCount**: int (ReadOnly): The number of services associated with this policy.
* **AvailabilitySlo**: [AvailabilitySlo](#availabilityslo)
* **CreatedAt**: string (ReadOnly): The timestamp when the policy was created.
* **DataRecovery**: [DataRecoveryTargets](#datarecoverytargets)
* **Description**: string: The description of the policy.
* **KmsKeyId**: string (WriteOnly): The KMS key ID for encrypting policy data.
* **MultiAz**: [MultiAzTargets](#multiaztargets)
* **MultiRegion**: [MultiRegionTargets](#multiregiontargets)
* **Name**: string (Required): The name of the policy.
* **PolicyArn**: string (ReadOnly, Identifier): The ARN of the policy.
* **SharingEnabled**: bool: Whether the policy is enabled to be shared with other members of the Organization. Only applicable if the policy owner is a management account or delegated admin.
* **Tags**: [Tag](#tag)[]: Tags assigned to the policy.
* **UpdatedAt**: string (ReadOnly): The timestamp when the policy was last updated.

## AWS.ResilienceHubV2/ServiceFunctionProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp when the service function was created.
* **Criticality**: string (Required): The criticality of the service function.
* **Description**: string: The description of the service function.
* **Name**: string (Required): The name of the service function.
* **ResourceCount**: int (ReadOnly): The number of resources associated with this function.
* **ServiceArn**: string (Required, Identifier): The ARN of the parent service.
* **ServiceFunctionId**: string (ReadOnly, Identifier): The server-generated service function ID.
* **Source**: string (ReadOnly): The source of the service function.
* **UpdatedAt**: string (ReadOnly): The timestamp when the service function was last updated.

## AWS.ResilienceHubV2/ServiceProperties
### Properties
* **Assertions**: [AssertionDefinition](#assertiondefinition)[]: Assertions associated with this service.
* **AssociatedSystems**: [AssociatedSystem](#associatedsystem)[]: Systems associated with this service.
* **CreatedAt**: string (ReadOnly): The timestamp when the service was created.
* **DependencyDiscovery**: string: Dependency discovery state.
* **Description**: string: The description of the service.
* **DevOpsAgentConfiguration**: [DevOpsAgentConfiguration](#devopsagentconfiguration)
* **EffectivePolicyValues**: [EffectivePolicyValues](#effectivepolicyvalues) (ReadOnly)
* **InputSources**: [InputSourceDefinition](#inputsourcedefinition)[]: Input sources for this service.
* **KmsKeyId**: string (WriteOnly): The KMS key ID for encrypting service data.
* **Name**: string (Required): The name of the service.
* **PermissionModel**: [PermissionModel](#permissionmodel)
* **PolicyArn**: string: The ARN of the resilience policy to associate.
* **Regions**: string[] (Required): AWS regions for the service.
* **ReportConfiguration**: [ServiceReportConfiguration](#servicereportconfiguration)
* **ServiceArn**: string (ReadOnly, Identifier): The ARN of the service.
* **Tags**: [Tag](#tag)[]: Tags assigned to the service.
* **UpdatedAt**: string (ReadOnly): The timestamp when the service was last updated.

## AWS.ResilienceHubV2/SystemProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp when the system was created.
* **Description**: string: The description of the system.
* **KmsKeyId**: string (WriteOnly): The KMS key ID for encrypting system data.
* **Name**: string (Required): The name of the system.
* **SharingEnabled**: bool: Whether the system is enabled to be shared with other members of the Organization. Only applicable if the system owner is a management account or delegated admin.
* **SystemArn**: string (ReadOnly, Identifier): The ARN of the system.
* **SystemId**: string (ReadOnly): The system ID.
* **Tags**: [Tag](#tag)[]: Tags assigned to the system.
* **UpdatedAt**: string (ReadOnly): The timestamp when the system was last updated.

## AWS.ResilienceHubV2/UserJourneyProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp when the user journey was created.
* **Description**: string: The description of the user journey.
* **Name**: string (Required): The name of the user journey.
* **PolicyArn**: string: The ARN of the resilience policy to associate with this user journey.
* **SystemIdentifier**: string (Required, Identifier): The system ARN or system ID that owns this user journey.
* **UpdatedAt**: string (ReadOnly): The timestamp when the user journey was last updated.
* **UserJourneyId**: string (ReadOnly, Identifier): The server-generated user journey ID.

## CrossAccountRoleConfiguration
### Properties
* **CrossAccountRoleArn**: string (Required): ARN of the cross-account IAM role.
* **ExternalId**: string: External ID for cross-account access.

## DataRecoveryTargets
### Properties
* **TimeBetweenBackupsInMinutes**: int: Time between backups in minutes.

## DevOpsAgentConfiguration
### Properties
* **AgentSpaceArn**: string (Required): The ARN of the DevOps Agent Agent Space to link to this service.

## DisasterRecoverySource
### Properties
* **PolicyName**: string
* **Value**: string

## EffectivePolicyValues
### Properties
* **AvailabilitySlo**: [SloSource](#slosource)
* **MultiAzDrApproach**: [DisasterRecoverySource](#disasterrecoverysource)
* **MultiAzRpo**: [TargetSource](#targetsource)
* **MultiAzRto**: [TargetSource](#targetsource)
* **MultiRegionDrApproach**: [DisasterRecoverySource](#disasterrecoverysource)
* **MultiRegionRpo**: [TargetSource](#targetsource)
* **MultiRegionRto**: [TargetSource](#targetsource)

## EksLabelSelector
### Properties
* **MatchExpressions**: [EksLabelSelectorRequirement](#ekslabelselectorrequirement)[]: Label selector requirements an object must satisfy to be discovered. Up to 20 requirements, all of which must match.
* **MatchLabels**: [Service_MatchLabels](#servicematchlabels): Label key/value pairs an object must carry to be discovered. Up to 20 pairs.

## EksLabelSelectorRequirement
### Properties
* **Key**: string (Required): Label key the requirement applies to.
* **Operator**: string (Required): Operator applied to the label key.
* **Values**: string[]: Label values the requirement compares against. Up to 20 values. Required for IN and NOT_IN; omit for EXISTS and DOES_NOT_EXIST.

## EksSource
### Properties
* **ClusterArn**: string (Required): ARN of the EKS cluster.
* **LabelSelector**: [EksLabelSelector](#ekslabelselector)
* **Namespaces**: string[] (Required): EKS namespaces.

## InputSourceDefinition
### Properties
* **ResourceConfiguration**: [ResourceConfiguration](#resourceconfiguration) (Required)

## MultiAzTargets
### Properties
* **DisasterRecoveryApproach**: string: Multi-AZ disaster recovery approach.
* **RpoInMinutes**: int: Recovery Point Objective in minutes.
* **RtoInMinutes**: int: Recovery Time Objective in minutes.

## MultiRegionTargets
### Properties
* **DisasterRecoveryApproach**: string: Multi-Region disaster recovery approach.
* **RpoInMinutes**: int: Recovery Point Objective in minutes.
* **RtoInMinutes**: int: Recovery Time Objective in minutes.

## PermissionModel
### Properties
* **CrossAccountRoleArns**: [CrossAccountRoleConfiguration](#crossaccountroleconfiguration)[]: Cross-account role ARNs.
* **InvokerRoleName**: string (Required): Name of the invoker IAM role.

## ReportOutputConfiguration
### Properties
* **S3**: [S3ReportOutputConfiguration](#s3reportoutputconfiguration) (Required)

## ResourceConfiguration
### Properties
* **CfnStackArn**: string: ARN of a CloudFormation stack.
* **DesignFileS3Url**: string: S3 URL of a design file.
* **Eks**: [EksSource](#ekssource)
* **ResourceTags**: [ResourceTag](#resourcetag)[]: Resource tags to discover resources.
* **TfStateFileUrl**: string: URL of a Terraform state file.

## ResourceTag
### Properties
* **Key**: string (Required): Tag key.
* **Values**: string[] (Required): Tag values.

## S3ReportOutputConfiguration
### Properties
* **BucketOwner**: string (Required): Account ID of the bucket owner.
* **BucketPath**: string (Required): S3 bucket path where reports will be written.

## Service_MatchLabels
### Properties

## ServiceReportConfiguration
### Properties
* **ReportOutput**: [ReportOutputConfiguration](#reportoutputconfiguration)[] (Required): Output destinations for generated reports.

## SloSource
### Properties
* **PolicyName**: string
* **Value**: int

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## TargetSource
### Properties
* **PolicyName**: string
* **Value**: int

