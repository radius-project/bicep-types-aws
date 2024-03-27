# AWS.SSM @ default

## Resource AWS.SSM/Association@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/AssociationProperties](#awsssmassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/Document@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/DocumentProperties](#awsssmdocumentproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/Parameter@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ParameterProperties](#awsssmparameterproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/PatchBaseline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/PatchBaselineProperties](#awsssmpatchbaselineproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/ResourceDataSync@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ResourceDataSyncProperties](#awsssmresourcedatasyncproperties) (Required, Identifier): properties of the resource

## Resource AWS.SSM/ResourcePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SSM/ResourcePolicyProperties](#awsssmresourcepolicyproperties) (Required, Identifier): properties of the resource

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
* **Targets**: [Target](#target)[]: The targets that the SSM document sends commands to.
* **WaitForSuccessTimeoutSeconds**: int (WriteOnly)

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

## AWS.SSM/ParameterProperties
### Properties
* **AllowedPattern**: string (WriteOnly): A regular expression used to validate the parameter value. For example, for ``String`` types with values restricted to numbers, you can specify the following: ``AllowedPattern=^\d+$``
* **DataType**: string: The data type of the parameter, such as ``text`` or ``aws:ec2:image``. The default is ``text``.
* **Description**: string (WriteOnly): Information about the parameter.
* **Name**: string (Identifier): The name of the parameter.
 The maximum length constraint listed below includes capacity for additional system attributes that aren't part of the name. The maximum length for a parameter name, including the full length of the parameter Amazon Resource Name (ARN), is 1011 characters. For example, the length of the following parameter name is 65 characters, not 20 characters: ``arn:aws:ssm:us-east-2:111222333444:parameter/ExampleParameterName``
* **Policies**: string (WriteOnly): Information about the policies assigned to a parameter.
  [Assigning parameter policies](https://docs.aws.amazon.com/systems-manager/latest/userguide/parameter-store-policies.html) in the *User Guide*.
* **Tags**: [Parameter_Tags](#parametertags) (WriteOnly): Optional metadata that you assign to a resource in the form of an arbitrary set of tags (key-value pairs). Tags enable you to categorize a resource in different ways, such as by purpose, owner, or environment. For example, you might want to tag a SYS parameter to identify the type of resource to which it applies, the environment, or the type of configuration data referenced by the parameter.
* **Tier**: string (WriteOnly): The parameter tier.
* **Type**: string (Required): The type of parameter.
* **Value**: string (Required): The parameter value.
  If type is ``StringList``, the system returns a comma-separated string with no spaces between commas in the ``Value`` field.

## AWS.SSM/PatchBaselineProperties
### Properties
* **ApprovalRules**: [RuleGroup](#rulegroup)
* **ApprovedPatches**: string[]: A list of explicitly approved patches for the baseline.
* **ApprovedPatchesComplianceLevel**: string: Defines the compliance level for approved patches. This means that if an approved patch is reported as missing, this is the severity of the compliance violation. The default value is UNSPECIFIED.
* **ApprovedPatchesEnableNonSecurity**: bool: Indicates whether the list of approved patches includes non-security updates that should be applied to the instances. The default value is 'false'. Applies to Linux instances only.
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
* **SyncName**: string (Required, ReadOnly, Identifier)
* **SyncSource**: [SyncSource](#syncsource)
* **SyncType**: string

## AWS.SSM/ResourcePolicyProperties
### Properties
* **Policy**: [ResourcePolicy_Policy](#resourcepolicypolicy) | string (Required): Actual policy statement.
* **PolicyHash**: string (ReadOnly): A snapshot identifier for the policy over time.
* **PolicyId**: string (ReadOnly, Identifier): An unique identifier within the policies of a resource. 
* **ResourceArn**: string (Required, Identifier): Arn of OpsItemGroup etc.

## AwsOrganizationsSource
### Properties
* **OrganizationalUnits**: string[]
* **OrganizationSourceType**: string (Required)

## DocumentRequires
### Properties
* **Name**: string (Identifier): The name of the required SSM document. The name can be an Amazon Resource Name (ARN).
* **Version**: string: The document version required by the current document.

## InstanceAssociationOutputLocation
### Properties
* **S3Location**: [S3OutputLocation](#s3outputlocation)

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
* **Key**: string: The name of the tag.
* **Value**: string: The value of the tag.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Target
### Properties
* **Key**: string (Required)
* **Values**: string[] (Required)

