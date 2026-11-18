# AWS.CloudFormation @ default

## Resource AWS.CloudFormation/ChangeSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/ChangeSetProperties](#awscloudformationchangesetproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/GeneratedTemplate@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/GeneratedTemplateProperties](#awscloudformationgeneratedtemplateproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/GuardHook@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/GuardHookProperties](#awscloudformationguardhookproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/HookDefaultVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/HookDefaultVersionProperties](#awscloudformationhookdefaultversionproperties) (Identifier): properties of the resource

## Resource AWS.CloudFormation/HookTypeConfig@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/HookTypeConfigProperties](#awscloudformationhooktypeconfigproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/HookVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/HookVersionProperties](#awscloudformationhookversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/LambdaHook@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/LambdaHookProperties](#awscloudformationlambdahookproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/ModuleDefaultVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/ModuleDefaultVersionProperties](#awscloudformationmoduledefaultversionproperties) (Identifier): properties of the resource

## Resource AWS.CloudFormation/ModuleVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/ModuleVersionProperties](#awscloudformationmoduleversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/PublicTypeVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/PublicTypeVersionProperties](#awscloudformationpublictypeversionproperties) (Identifier): properties of the resource

## Resource AWS.CloudFormation/Publisher@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/PublisherProperties](#awscloudformationpublisherproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/ResourceDefaultVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/ResourceDefaultVersionProperties](#awscloudformationresourcedefaultversionproperties) (Identifier): properties of the resource

## Resource AWS.CloudFormation/ResourceScan@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/ResourceScanProperties](#awscloudformationresourcescanproperties) (Identifier): properties of the resource

## Resource AWS.CloudFormation/ResourceVersion@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/ResourceVersionProperties](#awscloudformationresourceversionproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/Stack@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/StackProperties](#awscloudformationstackproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/StackSet@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/StackSetProperties](#awscloudformationstacksetproperties) (Required, Identifier): properties of the resource

## Resource AWS.CloudFormation/TypeActivation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CloudFormation/TypeActivationProperties](#awscloudformationtypeactivationproperties) (Identifier): properties of the resource

## AutoDeployment
### Properties
* **DependsOn**: string[]: A list of StackSet ARNs that this StackSet depends on for auto-deployment operations. When auto-deployment is triggered, operations will be sequenced to ensure all dependencies complete successfully before this StackSet's operation begins.
* **Enabled**: bool: If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
* **RetainStacksOnAccountRemoval**: bool: If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True.

## AWS.CloudFormation/ChangeSetProperties
### Properties
* **Capabilities**: string[]: The capabilities that are allowed in the stack.
* **ChangeSetId**: string (ReadOnly, Identifier): The ARN of the change set.
* **ChangeSetName**: string (Required): The name of the change set. Must be unique among all change sets associated with the specified stack.
* **ChangeSetType**: string (WriteOnly): The type of change set operation.
* **CreationTime**: string (ReadOnly): The time the change set was created.
* **DeploymentMode**: string: Determines how CloudFormation handles configuration drift during deployment.
* **Description**: string: A description to help you identify this change set.
* **ImportExistingResources**: bool: Indicates if the change set imports resources that already exist.
* **IncludeNestedStacks**: bool: Creates a change set for all nested stacks specified in the template.
* **NotificationARNs**: string[]: The ARNs of Amazon SNS topics that CloudFormation associates with the stack.
* **OnStackFailure**: string: Determines what action will be taken if stack creation fails.
* **RoleARN**: string (WriteOnly): The ARN of an IAM role that CloudFormation assumes when executing the change set.
* **StackId**: string (ReadOnly): The unique ID of the stack.
* **StackName**: string (Required): The name or unique ID of the stack for which you are creating a change set.
* **Tags**: [ChangeSet_Tags](#changesettags)[]: Key-value pairs to associate with the change set.
* **TemplateBody**: string (WriteOnly): A structure that contains the body of the revised template.
* **TemplateURL**: string (WriteOnly): The URL of the file that contains the revised template.
* **UsePreviousTemplate**: bool (WriteOnly): Whether to reuse the template associated with the stack to create the change set.

## AWS.CloudFormation/GeneratedTemplateProperties
### Properties
* **CreationTime**: string (ReadOnly): The time the generated template was created.
* **GeneratedTemplateId**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the generated template.
* **GeneratedTemplateName**: string (Required): The name assigned to the generated template.
* **LastUpdatedTime**: string (ReadOnly): The time the generated template was last updated.
* **Progress**: [TemplateProgress](#templateprogress) (ReadOnly)
* **Status**: string (ReadOnly): The status of the template generation.
* **TemplateConfiguration**: [TemplateConfiguration](#templateconfiguration)
* **TotalWarnings**: int (ReadOnly): The number of warnings generated for this template.

## AWS.CloudFormation/GuardHookProperties
### Properties
* **Alias**: string (Required): The typename alias for the hook.
* **ExecutionRole**: string (Required): The execution role ARN assumed by hooks to read Guard rules from S3 and write Guard outputs to S3.
* **FailureMode**: string (Required): Attribute to specify CloudFormation behavior on hook failure.
* **HookArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the activated hook
* **HookStatus**: string (Required): Attribute to specify which stacks this hook applies to or should get invoked for
* **LogBucket**: string: S3 Bucket where the guard validate report will be uploaded to
* **Options**: [GuardHook_Options](#guardhookoptions)
* **RuleLocation**: [S3Location](#s3location) (Required)
* **StackFilters**: [GuardHook_StackFilters](#guardhookstackfilters): Filters to allow hooks to target specific stack attributes
* **TargetFilters**: [GuardHook_TargetFilters](#guardhooktargetfilters): Attribute to specify which targets should invoke the hook
* **TargetOperations**: string[] (Required): Which operations should this Hook run against? Resource changes, stacks or change sets.

## AWS.CloudFormation/HookDefaultVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeVersionArn**: string: The Amazon Resource Name (ARN) of the type version.
* **VersionId**: string: The ID of an existing version of the hook to set as the default.

## AWS.CloudFormation/HookTypeConfigProperties
### Properties
* **Configuration**: string (Required): The configuration data for the extension, in this account and region.
* **ConfigurationAlias**: string: An alias by which to refer to this extension configuration data.
* **ConfigurationArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) for the configuration data, in this account and region.
* **TypeArn**: string: The Amazon Resource Name (ARN) of the type without version number.
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

## AWS.CloudFormation/HookVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the type, here the HookVersion. This is used to uniquely identify a HookVersion resource
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
* **IsDefaultVersion**: bool (ReadOnly): Indicates if this type version is the current default version
* **LoggingConfig**: [LoggingConfig](#loggingconfig): Specifies logging configuration information for a type.
* **SchemaHandlerPackage**: string (Required, WriteOnly): A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.

For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.
* **TypeArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the type without the versionID.
* **TypeName**: string (Required): The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **VersionId**: string (ReadOnly): The ID of the version of the type represented by this hook instance.
* **Visibility**: string (ReadOnly): The scope at which the type is visible and usable in CloudFormation operations.

Valid values include:

PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.

PUBLIC: The type is publically visible and usable within any Amazon account.

## AWS.CloudFormation/LambdaHookProperties
### Properties
* **Alias**: string (Required): The typename alias for the hook.
* **AutoUpdate**: bool (WriteOnly): Whether to automatically update the extension in this account and Region when a new minor version is published by the extension publisher.
* **ExecutionRole**: string (Required): The execution role ARN assumed by Hooks to invoke Lambda.
* **FailureMode**: string (Required): Attribute to specify CloudFormation behavior on hook failure.
* **HookArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the activated hook
* **HookStatus**: string (Required): Attribute to specify which stacks this hook applies to or should get invoked for
* **LambdaFunction**: string (Required): Amazon Resource Name (ARN), Partial ARN, name, version, or alias of the Lambda function to invoke with this hook.
* **LoggingConfig**: [LoggingConfig](#loggingconfig) (WriteOnly): Contains logging configuration information for the hook.
* **StackFilters**: [LambdaHook_StackFilters](#lambdahookstackfilters): Filters to allow hooks to target specific stack attributes
* **TargetFilters**: [LambdaHook_TargetFilters](#lambdahooktargetfilters): Attribute to specify which targets should invoke the hook
* **TargetOperations**: string[] (Required): Which operations should this Hook run against? Resource changes, stacks or change sets.

## AWS.CloudFormation/ModuleDefaultVersionProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the module version to set as the default version.
* **ModuleName**: string (WriteOnly): The name of a module existing in the registry.
* **VersionId**: string (WriteOnly): The ID of an existing version of the named module to set as the default.

## AWS.CloudFormation/ModuleVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the module.
* **Description**: string (ReadOnly): The description of the registered module.
* **DocumentationUrl**: string (ReadOnly): The URL of a page providing detailed documentation for this module.
* **IsDefaultVersion**: bool (ReadOnly): Indicator of whether this module version is the current default version
* **ModuleName**: string (Required): The name of the module being registered.

Recommended module naming pattern: company_or_organization::service::type::MODULE.
* **ModulePackage**: string (Required, WriteOnly): The url to the S3 bucket containing the schema and template fragment for the module you want to register.
* **Schema**: string (ReadOnly): The schema defining input parameters to and resources generated by the module.
* **TimeCreated**: string (ReadOnly): The time that the specified module version was registered.
* **VersionId**: string (ReadOnly): The version ID of the module represented by this module instance.
* **Visibility**: string (ReadOnly): The scope at which the type is visible and usable in CloudFormation operations.

The only allowed value at present is:

PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.

## AWS.CloudFormation/PublicTypeVersionProperties
### Properties
* **Arn**: string (WriteOnly): The Amazon Resource Number (ARN) of the extension.
* **LogDeliveryBucket**: string: A url to the S3 bucket where logs for the testType run will be available
* **PublicTypeArn**: string (ReadOnly, Identifier): The Amazon Resource Number (ARN) assigned to the public extension upon publication
* **PublicVersionNumber**: string: The version number of a public third-party extension
* **PublisherId**: string (ReadOnly): The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
* **Type**: string: The kind of extension
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeVersionArn**: string (ReadOnly): The Amazon Resource Number (ARN) of the extension with the versionId.

## AWS.CloudFormation/PublisherProperties
### Properties
* **AcceptTermsAndConditions**: bool (Required): Whether you accept the terms and conditions for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to publish public extensions to the CloudFormation registry. The terms and conditions can be found at https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf
* **ConnectionArn**: string: If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
* **IdentityProvider**: string (ReadOnly): The type of account used as the identity provider when registering this publisher with CloudFormation.
* **PublisherId**: string (ReadOnly, Identifier): The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
* **PublisherProfile**: string (ReadOnly): The URL to the publisher's profile with the identity provider.
* **PublisherStatus**: string (ReadOnly): Whether the publisher is verified.

## AWS.CloudFormation/ResourceDefaultVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a ResourceDefaultVersion
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeVersionArn**: string: The Amazon Resource Name (ARN) of the type version.
* **VersionId**: string: The ID of an existing version of the resource to set as the default.

## AWS.CloudFormation/ResourceScanProperties
### Properties
* **PercentageCompleted**: int (ReadOnly): The percentage of the resource scan that has been completed.
* **ResourceScanId**: string (Identifier): The Amazon Resource Name (ARN) of the resource scan.
* **ScanFilters**: [ScanFilter](#scanfilter)[]: The scan filters to use.
* **ScanId**: string (ReadOnly): The unique identifier portion of the resource scan ARN.
* **StartTime**: string (ReadOnly): The time that the resource scan was started.
* **Status**: string (ReadOnly): Status of the resource scan.

## AWS.CloudFormation/ResourceVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the type, here the ResourceVersion. This is used to uniquely identify a ResourceVersion resource
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
* **IsDefaultVersion**: bool (ReadOnly): Indicates if this type version is the current default version
* **LoggingConfig**: [LoggingConfig](#loggingconfig): Specifies logging configuration information for a type.
* **ProvisioningType**: string (ReadOnly): The provisioning behavior of the type. AWS CloudFormation determines the provisioning type during registration, based on the types of handlers in the schema handler package submitted.
* **SchemaHandlerPackage**: string (Required, WriteOnly): A url to the S3 bucket containing the schema handler package that contains the schema, event handlers, and associated files for the type you want to register.

For information on generating a schema handler package for the type you want to register, see submit in the CloudFormation CLI User Guide.
* **TypeArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the type without the versionID.
* **TypeName**: string (Required): The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **VersionId**: string (ReadOnly): The ID of the version of the type represented by this resource instance.
* **Visibility**: string (ReadOnly): The scope at which the type is visible and usable in CloudFormation operations.

Valid values include:

PRIVATE: The type is only visible and usable within the account in which it is registered. Currently, AWS CloudFormation marks any types you register as PRIVATE.

PUBLIC: The type is publically visible and usable within any Amazon account.

## AWS.CloudFormation/StackProperties
### Properties
* **Capabilities**: string[]
* **ChangeSetId**: string (ReadOnly)
* **CreationTime**: string (ReadOnly)
* **Description**: string
* **DisableRollback**: bool
* **EnableTerminationProtection**: bool
* **LastUpdateTime**: string (ReadOnly)
* **NotificationARNs**: string[]
* **Outputs**: [Output](#output)[] (ReadOnly)
* **Parameters**: [Stack_Parameters](#stackparameters)
* **ParentId**: string (ReadOnly)
* **RoleARN**: string
* **RootId**: string (ReadOnly)
* **StackId**: string (ReadOnly, Identifier)
* **StackName**: string (Required)
* **StackPolicyBody**: [Stack_StackPolicyBody](#stackstackpolicybody)
* **StackPolicyURL**: string (WriteOnly)
* **StackStatus**: string (ReadOnly)
* **StackStatusReason**: string
* **Tags**: [Tag](#tag)[]
* **TemplateBody**: [Stack_TemplateBody](#stacktemplatebody) | string
* **TemplateURL**: string (WriteOnly)
* **TimeoutInMinutes**: int

## AWS.CloudFormation/StackSetProperties
### Properties
* **AdministrationRoleARN**: string: The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
* **AutoDeployment**: [AutoDeployment](#autodeployment): Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED.
* **CallAs**: string (WriteOnly): Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
* **Capabilities**: string[]: In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.
* **Description**: string: A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
* **ExecutionRoleName**: string: The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.
* **ManagedExecution**: [StackSet_ManagedExecution](#stacksetmanagedexecution): Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
* **OperationPreferences**: [OperationPreferences](#operationpreferences) (WriteOnly)
* **Parameters**: [Parameter](#parameter)[]: The input parameters for the stack set template.
* **PermissionModel**: string (Required): Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
* **StackInstancesGroup**: [StackInstances](#stackinstances)[] (WriteOnly): A group of stack instances with parameters in some specific accounts and regions.
* **StackSetId**: string (ReadOnly, Identifier): The ID of the stack set that you're creating.
* **StackSetName**: string (Required): The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
* **Tags**: [Tag](#tag)[]: The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
* **TemplateBody**: string: The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
* **TemplateURL**: string (WriteOnly): Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.

## AWS.CloudFormation/TypeActivationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the extension.
* **AutoUpdate**: bool (WriteOnly): Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.
* **ExecutionRoleArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
* **LoggingConfig**: [LoggingConfig](#loggingconfig) (WriteOnly): Specifies logging configuration information for a type.
* **MajorVersion**: string (WriteOnly): The Major Version of the type you want to enable
* **PublicTypeArn**: string: The Amazon Resource Number (ARN) assigned to the public extension upon publication
* **PublisherId**: string: The reserved publisher id for this type, or the publisher id assigned by CloudFormation for publishing in this region.
* **Type**: string (WriteOnly): The kind of extension
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeNameAlias**: string: An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.
* **VersionBump**: string (WriteOnly): Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled

## ChangeSet_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## DeploymentTargets
### Properties
* **AccountFilterType**: string: The filter type you want to apply on organizational units and accounts.
* **Accounts**: string[]: AWS accounts that you want to create stack instances in the specified Region(s) for.
* **AccountsUrl**: string: Returns the value of the AccountsUrl property. AccountsUrl is currently not supported when using Account Level Targeting (ALT).
* **OrganizationalUnitIds**: string[]: The organization root ID or organizational unit (OU) IDs to which StackSets deploys.

## GuardHook_Options
### Properties
* **InputParams**: [GuardHook_Options_InputParams](#guardhookoptionsinputparams): Specifies the S3 location of input parameter files for your Guard rules. You can specify either a single S3 location or an array of up to 10 S3 locations.

## GuardHook_Options_InputParams
### Properties

## GuardHook_StackFilters
### Properties
* **FilteringCriteria**: string (Required): Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match
* **StackNames**: [GuardHook_StackFilters_StackNames](#guardhookstackfiltersstacknames): List of stack names as filters
* **StackRoles**: [GuardHook_StackFilters_StackRoles](#guardhookstackfiltersstackroles): List of stack roles that are performing the stack operations.

## GuardHook_StackFilters_StackNames
### Properties
* **Exclude**: string[]: List of stack names that the hook is going to be excluded from
* **Include**: string[]: List of stack names that the hook is going to target

## GuardHook_StackFilters_StackRoles
### Properties
* **Exclude**: string[]: List of stack roles that the hook is going to be excluded from
* **Include**: string[]: List of stack roles that the hook is going to target

## GuardHook_TargetFilters
### Properties

## LambdaHook_StackFilters
### Properties
* **FilteringCriteria**: string (Required): Attribute to specify the filtering behavior. ANY will make the Hook pass if one filter matches. ALL will make the Hook pass if all filters match
* **StackNames**: [LambdaHook_StackFilters_StackNames](#lambdahookstackfiltersstacknames): List of stack names as filters
* **StackRoles**: [LambdaHook_StackFilters_StackRoles](#lambdahookstackfiltersstackroles): List of stack roles that are performing the stack operations.

## LambdaHook_StackFilters_StackNames
### Properties
* **Exclude**: string[]: List of stack names that the hook is going to be excluded from
* **Include**: string[]: List of stack names that the hook is going to target

## LambdaHook_StackFilters_StackRoles
### Properties
* **Exclude**: string[]: List of stack roles that the hook is going to be excluded from
* **Include**: string[]: List of stack roles that the hook is going to target

## LambdaHook_TargetFilters
### Properties

## LoggingConfig
### Properties
* **LogGroupName**: string: The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
* **LogRoleArn**: string: The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

## LoggingConfig
### Properties
* **LogGroupName**: string (Required): The Amazon CloudWatch Logs group to which CloudFormation sends error logging information when invoking the extension's handlers.
* **LogRoleArn**: string (Required): The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch Logs.

## LoggingConfig
### Properties
* **LogGroupName**: string: The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
* **LogRoleArn**: string: The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

## LoggingConfig
### Properties
* **LogGroupName**: string: The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
* **LogRoleArn**: string: The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

## OperationPreferences
### Properties
* **ConcurrencyMode**: string
* **FailureToleranceCount**: int
* **FailureTolerancePercentage**: int
* **MaxConcurrentCount**: int
* **MaxConcurrentPercentage**: int
* **RegionConcurrencyType**: string
* **RegionOrder**: string[]

## Output
### Properties
* **Description**: string
* **ExportName**: string
* **OutputKey**: string
* **OutputValue**: string

## Parameter
### Properties
* **ParameterKey**: string (Required): The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
* **ParameterValue**: string (Required): The input value associated with the parameter.

## S3Location
### Properties
* **Uri**: string (Required): S3 uri of Guard files.
* **VersionId**: string: S3 object version

## ScanFilter
### Properties
* **Types**: string[]: An array of strings where each string represents an AWS resource type to scan.

## Stack_Parameters
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Stack_StackPolicyBody
### Properties
### Additional Properties
* **Additional Properties Type**: any

## StackInstances
### Properties
* **DeploymentTargets**: [DeploymentTargets](#deploymenttargets) (Required)
* **ParameterOverrides**: [Parameter](#parameter)[]: A list of stack set parameters whose values you want to override in the selected stack instances.
* **Regions**: string[] (Required): The names of one or more Regions where you want to create stack instances using the specified AWS account(s).

## StackSet_ManagedExecution
### Properties
* **Active**: bool

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.
* **Value**: string (Required): A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.

## TemplateConfiguration
### Properties
* **DeletionPolicy**: string: The DeletionPolicy assigned to resources in the generated template.
* **UpdateReplacePolicy**: string: The UpdateReplacePolicy assigned to resources in the generated template.

## TemplateProgress
### Properties
* **ResourcesFailed**: int: The number of resources that failed the template generation.
* **ResourcesPending**: int: The number of resources that are still pending the template generation.
* **ResourcesProcessing**: int: The number of resources that are in-process for the template generation.
* **ResourcesSucceeded**: int: The number of resources that succeeded the template generation.

