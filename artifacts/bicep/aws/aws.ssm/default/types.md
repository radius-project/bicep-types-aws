# AWS.SSM @ default

## Resource AWS.SSM/Association@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/AssociationProperties](#awsssmassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/CloudConnector@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/CloudConnectorProperties](#awsssmcloudconnectorproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/Document@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/DocumentProperties](#awsssmdocumentproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/MaintenanceWindow@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/MaintenanceWindowProperties](#awsssmmaintenancewindowproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/MaintenanceWindowTarget@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/MaintenanceWindowTargetProperties](#awsssmmaintenancewindowtargetproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/MaintenanceWindowTask@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/MaintenanceWindowTaskProperties](#awsssmmaintenancewindowtaskproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/OpsItem@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/OpsItemProperties](#awsssmopsitemproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/Parameter@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ParameterProperties](#awsssmparameterproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/PatchBaseline@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/PatchBaselineProperties](#awsssmpatchbaselineproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/ResourceDataSync@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ResourceDataSyncProperties](#awsssmresourcedatasyncproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/ResourcePolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ResourcePolicyProperties](#awsssmresourcepolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/ServiceSetting@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ServiceSettingProperties](#awsssmservicesettingproperties) (Required, Identifier): properties of the resource

## Association_Parameters
### Properties

## AttachmentsSource
### Properties
* **Key**: string: The key of a key-value pair that identifies the location of an attachment to a document.
* **Name**: string (Identifier): The name of the document attachment file.
* **Values**: string[]: The value of a key-value pair that identifies the location of an attachment to a document. The format for Value depends on the type of key you specify.

## AWS.SSM/AssociationProperties
### Properties
* **ApplyOnlyAtCronInterval**: bool
* **AssociationDispatchAssumeRole**: string: A role used by association to take actions on your behalf.
* **AssociationId**: string (ReadOnly, Identifier): Unique identifier of the association.
* **AssociationName**: string: The name of the association.
* **AutomationTargetParameterName**: string
* **CalendarNames**: string[]
* **ComplianceSeverity**: string
* **DocumentVersion**: string: The version of the SSM document to associate with the target.
* **InstanceId**: string: The ID of the instance that the SSM document is associated with.
* **MaxConcurrency**: string
* **MaxErrors**: string
* **Name**: string (Required): The name of the SSM document.
* **OutputLocation**: [InstanceAssociationOutputLocation](#instanceassociationoutputlocation)
* **Parameters**: [Association_Parameters](#associationparameters): Parameter values that the SSM document uses at runtime.
* **ScheduleExpression**: string: A Cron or Rate expression that specifies when the association is applied to the target.
* **ScheduleOffset**: int
* **SyncCompliance**: string
* **Tags**: [Tag](#tag)[]: A key-value pair to associate with a resource.
* **Targets**: [Target](#target)[]: The targets that the SSM document sends commands to.
* **WaitForSuccessTimeoutSeconds**: int (WriteOnly)

## AWS.SSM/CloudConnectorProperties
### Properties
* **CloudConnectorArn**: string (ReadOnly, Identifier): The ARN of the cloud connector.
* **CloudConnectorId**: string (ReadOnly): The unique identifier of the cloud connector.
* **ConfigConnectorArn**: string (Required): The ARN of the AWS Config connector.
* **Configuration**: [CloudConnectorConfiguration](#cloudconnectorconfiguration) (Required): The configuration for the cloud connector.
* **CreatedAt**: string (ReadOnly): The timestamp when the cloud connector was created.
* **Description**: string: The description of the cloud connector.
* **DisplayName**: string (Required): The display name of the cloud connector.
* **RoleArn**: string (Required): The IAM role ARN used by the cloud connector.
* **Tags**: [Tag](#tag)[]: Tags to apply to the cloud connector.
* **UpdatedAt**: string (ReadOnly): The timestamp when the cloud connector was last updated.

## AWS.SSM/DocumentProperties
### Properties
* **Attachments**: [AttachmentsSource](#attachmentssource)[] (WriteOnly): A list of key and value pairs that describe attachments to a version of a document.
* **Content**: [Document_Content](#documentcontent) | string (Required): The content for the Systems Manager document in JSON, YAML or String format.
* **DocumentFormat**: string: Specify the document format for the request. The document format can be either JSON or YAML. JSON is the default format.
* **DocumentType**: string: The type of document to create.
* **Name**: string (Identifier): A name for the Systems Manager document.
* **Requires**: [DocumentRequires](#documentrequires)[]: A list of SSM documents required by a document. For example, an ApplicationConfiguration document requires an ApplicationConfigurationSchema document.
* **Tags**: [Tag](#tag)[]: Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment.
* **TargetType**: string: Specify a target type to define the kinds of resources the document can run on.
* **UpdateMethod**: string (WriteOnly): Update method - when set to 'Replace', the update will replace the existing document; when set to 'NewVersion', the update will create a new version.
* **VersionName**: string: An optional field specifying the version of the artifact you are creating with the document. This value is unique across all versions of a document, and cannot be changed.

## AWS.SSM/MaintenanceWindowProperties
### Properties
* **AllowUnassociatedTargets**: bool (Required): Enables a maintenance window task to run on managed instances, even if you have not registered those instances as targets. If enabled, then you must specify the unregistered instances (by instance ID) when you register a task with the maintenance window.
* **Cutoff**: int (Required): The number of hours before the end of the maintenance window that AWS Systems Manager stops scheduling new tasks for execution.
* **Description**: string: A description of the maintenance window.
* **Duration**: int (Required): The duration of the maintenance window in hours.
* **EndDate**: string: The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become inactive.
* **Name**: string (Required): The name of the maintenance window.
* **Schedule**: string (Required): The schedule of the maintenance window in the form of a cron or rate expression.
* **ScheduleOffset**: int: The number of days to wait to run a maintenance window after the scheduled cron expression date and time.
* **ScheduleTimezone**: string: The time zone that the scheduled maintenance window executions are based on, in Internet Assigned Numbers Authority (IANA) format.
* **StartDate**: string: The date and time, in ISO-8601 Extended format, for when the maintenance window is scheduled to become active. StartDate allows you to delay activation of the maintenance window until the specified future date.
* **Tags**: [Tag](#tag)[]: Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a maintenance window to identify the type of tasks it will run, the types of targets, and the environment it will run in.
* **WindowId**: string (ReadOnly, Identifier): The ID of the maintenance window.

## AWS.SSM/MaintenanceWindowTargetProperties
### Properties
* **Description**: string: A description for the target.
* **Name**: string: The name for the maintenance window target.
* **OwnerInformation**: string: A user-provided value that will be included in any Amazon CloudWatch Events events that are raised while running tasks for these targets in this maintenance window.
* **ResourceType**: string (Required): The type of target that is being registered with the maintenance window.
* **Targets**: [Targets](#targets)[] (Required): The targets to register with the maintenance window.
* **WindowId**: string (Required, Identifier): The ID of the maintenance window to register the target with.
* **WindowTargetId**: string (ReadOnly, Identifier): The ID of the target.

## AWS.SSM/MaintenanceWindowTaskProperties
### Properties
* **CutoffBehavior**: string: The specification for whether tasks should continue to run after the cutoff time specified in the maintenance windows is reached.
* **Description**: string: A description of the task.
* **LoggingInfo**: [LoggingInfo](#logginginfo): Information about an Amazon S3 bucket to write Run Command task-level logs to.
* **MaxConcurrency**: string: The maximum number of targets this task can be run for, in parallel.
* **MaxErrors**: string: The maximum number of errors allowed before this task stops being scheduled.
* **Name**: string: The task name.
* **Priority**: int (Required): The priority of the task in the maintenance window. The lower the number, the higher the priority. Tasks that have the same priority are scheduled in parallel.
* **ServiceRoleArn**: string: The Amazon Resource Name (ARN) of the IAM service role for AWS Systems Manager to assume when running a maintenance window task.
* **Targets**: [Target](#target)[]: The targets (either instances or window target ids).
* **TaskArn**: string (Required): The resource that the task uses during execution.
* **TaskInvocationParameters**: [TaskInvocationParameters](#taskinvocationparameters): The parameters to pass to the task when it runs. Populate only the fields that match the task type. All other fields should be empty.
* **TaskParameters**: [MaintenanceWindowTask_TaskParameters](#maintenancewindowtasktaskparameters): The parameters to pass to the task when it runs.
* **TaskType**: string (Required): The type of task.
* **WindowId**: string (Required, Identifier): The ID of the maintenance window where the task is registered.
* **WindowTaskId**: string (ReadOnly, Identifier): Unique identifier of the maintenance window task.

## AWS.SSM/OpsItemProperties
### Properties
* **Category**: string: The category of the OpsItem.
* **CreatedBy**: string (ReadOnly): The user who created the OpsItem.
* **CreatedTime**: string (ReadOnly): The time the OpsItem was created.
* **Description**: string (Required): The description of the OpsItem.
* **LastModifiedBy**: string (ReadOnly): The user who last modified the OpsItem.
* **LastModifiedTime**: string (ReadOnly): The time the OpsItem was last modified.
* **OpsItemArn**: string (ReadOnly, Identifier): The ARN of the OpsItem.
* **OpsItemId**: string (ReadOnly): The ID of the OpsItem.
* **OpsItemType**: string (ReadOnly): The type of OpsItem.
* **Priority**: int: The priority of the OpsItem.
* **Severity**: string: The severity of the OpsItem.
* **Source**: string (Required): The origin of the OpsItem.
* **Status**: string (ReadOnly): The status of the OpsItem.
* **Tags**: [Tag](#tag)[]: Tags for the OpsItem.
* **Title**: string (Required): The title of the OpsItem.
* **Version**: string (ReadOnly): The version of the OpsItem.

## AWS.SSM/ParameterProperties
### Properties
* **AllowedPattern**: string (WriteOnly): A regular expression used to validate the parameter value. For example, for ``String`` types with values restricted to numbers, you can specify the following: ``AllowedPattern=^\d+$``
* **Arn**: string (ReadOnly)
* **DataType**: string: The data type of the parameter, such as ``text`` or ``aws:ec2:image``. The default is ``text``.
* **Description**: string (WriteOnly): Information about the parameter.
* **Name**: string (Identifier): The name of the parameter.
  The reported maximum length of 2048 characters for a parameter name includes 1037 characters that are reserved for internal use by SYS. The maximum length for a parameter name that you specify is 1011 characters.
 This count of 1011 characters includes the characters in the ARN that precede the name you specify. This ARN length will vary depending on your partition and Region. For example, the following 45 characters count toward the 1011 character maximum for a parameter created in the US East (Ohio) Region: ``arn:aws:ssm:us-east-2:111122223333:parameter/``.
* **Policies**: string (WriteOnly): Information about the policies assigned to a parameter.
 [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the *User Guide*.
* **Tags**: [Parameter_Tags](#parametertags): Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter.
* **Tier**: string (WriteOnly): The parameter tier.
* **Type**: string (Required): The type of parameter.
  Parameters of type ``SecureString`` are not supported by CFNlong.
* **Value**: string (Required): The parameter value.
  If type is ``StringList``, the system returns a comma-separated string with no spaces between commas in the ``Value`` field.

## AWS.SSM/PatchBaselineProperties
### Properties
* **ApprovalRules**: [RuleGroup](#rulegroup)
* **ApprovedPatches**: string[]: A list of explicitly approved patches for the baseline.
* **ApprovedPatchesComplianceLevel**: string: Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.
* **ApprovedPatchesEnableNonSecurity**: bool: Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
* **AvailableSecurityUpdatesComplianceStatus**: string: The compliance status for vendor recommended security updates that are not approved by this patch baseline.
* **DefaultBaseline**: bool: Set the baseline as default baseline. Only registering to default patch baseline is allowed.
* **Description**: string: The description of the patch baseline.
* **GlobalFilters**: [PatchFilterGroup](#patchfiltergroup): A set of global filters used to include patches in the baseline.
* **Id**: string (ReadOnly, Identifier): The ID of the patch baseline.
* **Name**: string (Required): The name of the patch baseline.
* **OperatingSystem**: string: Defines the operating system the patch baseline applies to. The Default value is WINDOWS.
* **PatchGroups**: string[]: PatchGroups is used to associate instances with a specific patch baseline
* **RejectedPatches**: string[]: A list of explicitly rejected patches for the baseline.
* **RejectedPatchesAction**: string: The action for Patch Manager to take on patches included in the RejectedPackages list.
* **Sources**: [PatchSource](#patchsource)[]: Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
* **Tags**: [Tag](#tag)[]: Optional metadata that you assign to a resource. Tags enable you to categorize a resource in different ways.

## AWS.SSM/ResourceDataSyncProperties
### Properties
* **BucketName**: string
* **BucketPrefix**: string
* **BucketRegion**: string
* **KMSKeyArn**: string
* **S3Destination**: [S3Destination](#s3destination)
* **SyncFormat**: string
* **SyncName**: string (Required, Identifier)
* **SyncSource**: [SyncSource](#syncsource)
* **SyncType**: string

## AWS.SSM/ResourcePolicyProperties
### Properties
* **Policy**: [ResourcePolicy_Policy](#resourcepolicypolicy) | string (Required): Actual policy statement.
* **PolicyHash**: string (ReadOnly): A snapshot identifier for the policy over time.
* **PolicyId**: string (ReadOnly, Identifier): An unique identifier within the policies of a resource. 
* **ResourceArn**: string (Required, Identifier): Arn of OpsItemGroup etc.

## AWS.SSM/ServiceSettingProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the service setting.
* **LastModifiedDate**: string (ReadOnly): The last time the service setting was modified.
* **LastModifiedUser**: string (ReadOnly): The ARN of the last modified user.
* **SettingId**: string (Required): The ID of the service setting, such as /ssm/parameter-store/high-throughput-enabled.
* **SettingValue**: string (Required): The value of the service setting.
* **Status**: string (ReadOnly): The status of the service setting. The value can be Default, Customized or PendingUpdate.

## AwsOrganizationsSource
### Properties
* **OrganizationalUnits**: string[]
* **OrganizationSourceType**: string (Required)

## AzureConfiguration
### Properties
* **ApplicationDisplayName**: string: The display name of the Azure AD application.
* **ApplicationId**: string (Required): The Azure AD application ID.
* **Targets**: [ConfigurationTargets](#configurationtargets)
* **TenantDisplayName**: string: The display name of the Azure AD tenant.
* **TenantId**: string (Required): The Azure AD tenant ID. Cannot be changed after creation.

## AzureSubscription
### Properties
* **DisplayName**: string: The display name of the Azure subscription.
* **Id**: string (Required): The Azure subscription ID.

## CloudConnectorConfiguration
### Properties
* **AzureConfiguration**: [AzureConfiguration](#azureconfiguration) (Required)

## CloudWatchOutputConfig
### Properties
* **CloudWatchLogGroupName**: string: The name of the CloudWatch log group where you want to send command output.
* **CloudWatchOutputEnabled**: bool: Enables Systems Manager to send command output to CloudWatch Logs.

## ConfigurationTargets
### Properties
* **Subscriptions**: [AzureSubscription](#azuresubscription)[] (Required): List of Azure subscriptions.

## DocumentRequires
### Properties
* **Name**: string (Identifier): The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
* **Version**: string: The document version required by the current document.

## InstanceAssociationOutputLocation
### Properties
* **S3Location**: [S3OutputLocation](#s3outputlocation)

## LoggingInfo
### Properties
* **Region**: string (Required)
* **S3Bucket**: string (Required)
* **S3Prefix**: string

## MaintenanceWindowAutomationParameters
### Properties
* **DocumentVersion**: string
* **Parameters**: [MaintenanceWindowTask_Parameters](#maintenancewindowtaskparameters)

## MaintenanceWindowLambdaParameters
### Properties
* **ClientContext**: string
* **Payload**: string
* **Qualifier**: string

## MaintenanceWindowRunCommandParameters
### Properties
* **CloudWatchOutputConfig**: [CloudWatchOutputConfig](#cloudwatchoutputconfig)
* **Comment**: string
* **DocumentHash**: string
* **DocumentHashType**: string
* **DocumentVersion**: string
* **NotificationConfig**: [NotificationConfig](#notificationconfig)
* **OutputS3BucketName**: string
* **OutputS3KeyPrefix**: string
* **Parameters**: [MaintenanceWindowTask_Parameters](#maintenancewindowtaskparameters)
* **ServiceRoleArn**: string
* **TimeoutSeconds**: int

## MaintenanceWindowStepFunctionsParameters
### Properties
* **Input**: string
* **Name**: string

## MaintenanceWindowTask_Parameters
### Properties

## MaintenanceWindowTask_Parameters
### Properties

## MaintenanceWindowTask_TaskParameters
### Properties

## NotificationConfig
### Properties
* **NotificationArn**: string (Required)
* **NotificationEvents**: string[]
* **NotificationType**: string

## Parameter_Tags
### Properties

## PatchFilter
### Properties
* **Key**: string
* **Values**: string[]

## PatchFilterGroup
### Properties
* **PatchFilters**: [PatchFilter](#patchfilter)[]

## PatchSource
### Properties
* **Configuration**: string
* **Name**: string
* **Products**: string[]

## Rule
### Properties
* **ApproveAfterDays**: int
* **ApproveUntilDate**: string
* **ComplianceLevel**: string
* **EnableNonSecurity**: bool
* **PatchFilterGroup**: [PatchFilterGroup](#patchfiltergroup)

## RuleGroup
### Properties
* **PatchRules**: [Rule](#rule)[]

## S3Destination
### Properties
* **BucketName**: string (Required)
* **BucketPrefix**: string
* **BucketRegion**: string (Required)
* **KMSKeyArn**: string
* **SyncFormat**: string (Required)

## S3OutputLocation
### Properties
* **OutputS3BucketName**: string
* **OutputS3KeyPrefix**: string
* **OutputS3Region**: string

## SyncSource
### Properties
* **AwsOrganizationsSource**: [AwsOrganizationsSource](#awsorganizationssource)
* **IncludeFutureRegions**: bool
* **SourceRegions**: string[] (Required)
* **SourceType**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The name of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string: The name of the tag.
* **Value**: string: The value of the tag.

## Tag
### Properties
* **Key**: string (Required): The name of the tag.
* **Value**: string (Required): The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Target
### Properties
* **Key**: string (Required)
* **Values**: string[] (Required)

## Target
### Properties
* **Key**: string (Required)
* **Values**: string[] (Required)

## Targets
### Properties
* **Key**: string (Required): User-defined criteria for sending commands that target managed nodes that meet the criteria.
* **Values**: string[] (Required): User-defined criteria that maps to Key.

## TaskInvocationParameters
### Properties
* **MaintenanceWindowAutomationParameters**: [MaintenanceWindowAutomationParameters](#maintenancewindowautomationparameters)
* **MaintenanceWindowLambdaParameters**: [MaintenanceWindowLambdaParameters](#maintenancewindowlambdaparameters)
* **MaintenanceWindowRunCommandParameters**: [MaintenanceWindowRunCommandParameters](#maintenancewindowruncommandparameters)
* **MaintenanceWindowStepFunctionsParameters**: [MaintenanceWindowStepFunctionsParameters](#maintenancewindowstepfunctionsparameters)

