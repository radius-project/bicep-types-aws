# AWS.CloudFormation @ default

## Resource AWS.CloudFormation/HookDefaultVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFormation/HookDefaultVersionProperties](#awscloudformationhookdefaultversionproperties): properties of the resource

## Resource AWS.CloudFormation/HookTypeConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFormation/HookTypeConfigProperties](#awscloudformationhooktypeconfigproperties): properties of the resource

## Resource AWS.CloudFormation/ResourceDefaultVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFormation/ResourceDefaultVersionProperties](#awscloudformationresourcedefaultversionproperties): properties of the resource

## Resource AWS.CloudFormation/StackSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFormation/StackSetProperties](#awscloudformationstacksetproperties) (Required): properties of the resource

## Resource AWS.CloudFormation/TypeActivation@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CloudFormation/TypeActivationProperties](#awscloudformationtypeactivationproperties): properties of the resource

## AWS.CloudFormation/HookDefaultVersionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a HookDefaultVersion
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeVersionArn**: string: The Amazon Resource Name (ARN) of the type version.
* **VersionId**: string: The ID of an existing version of the hook to set as the default.

## AWS.CloudFormation/HookTypeConfigProperties
### Properties
* **Configuration**: string: The configuration data for the extension, in this account and region.
* **ConfigurationAlias**: string: An alias by which to refer to this extension configuration data.
* **ConfigurationArn**: string (ReadOnly): The Amazon Resource Name (ARN) for the configuration data, in this account and region.
* **TypeArn**: string: The Amazon Resource Name (ARN) of the type without version number.
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.

## AWS.CloudFormation/ResourceDefaultVersionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the type. This is used to uniquely identify a ResourceDefaultVersion
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeVersionArn**: string: The Amazon Resource Name (ARN) of the type version.
* **VersionId**: string: The ID of an existing version of the resource to set as the default.

## AWS.CloudFormation/StackSetProperties
### Properties
* **AdministrationRoleARN**: string: The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
* **AutoDeployment**: [AutoDeployment](#autodeployment): Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to the target organization or organizational unit (OU). Specify only if PermissionModel is SERVICE_MANAGED.
* **CallAs**: string (WriteOnly): Specifies the AWS account that you are acting from. By default, SELF is specified. For self-managed permissions, specify SELF; for service-managed permissions, if you are signed in to the organization's management account, specify SELF. If you are signed in to a delegated administrator account, specify DELEGATED_ADMIN.
* **Capabilities**: [Capability](#capability)[]: In some cases, you must explicitly acknowledge that your stack set template contains certain capabilities in order for AWS CloudFormation to create the stack set and related stack instances.
* **Description**: string: A description of the stack set. You can use the description to identify the stack set's purpose or other important information.
* **ExecutionRoleName**: string: The name of the IAM execution role to use to create the stack set. If you do not specify an execution role, AWS CloudFormation uses the AWSCloudFormationStackSetExecutionRole role for the stack set operation.
* **ManagedExecution**: [StackSet_ManagedExecution](#stacksetmanagedexecution): Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
* **OperationPreferences**: [OperationPreferences](#operationpreferences) (WriteOnly)
* **Parameters**: [Parameter](#parameter)[]: The input parameters for the stack set template.
* **PermissionModel**: string (Required): Describes how the IAM roles required for stack set operations are created. By default, SELF-MANAGED is specified.
* **StackInstancesGroup**: [StackInstances](#stackinstances)[]: A group of stack instances with parameters in some specific accounts and regions.
* **StackSetId**: string (ReadOnly): The ID of the stack set that you're creating.
* **StackSetName**: string (Required): The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
* **Tags**: [Tag](#tag)[]: The key-value pairs to associate with this stack set and the stacks created from it. AWS CloudFormation also propagates these tags to supported resources that are created in the stacks. A maximum number of 50 tags can be specified.
* **TemplateBody**: string: The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
* **TemplateURL**: string (WriteOnly): Location of file containing the template body. The URL must point to a template (max size: 460,800 bytes) that is located in an Amazon S3 bucket.

## AutoDeployment
### Properties
* **Enabled**: bool: If set to true, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
* **RetainStacksOnAccountRemoval**: bool: If set to true, stack resources are retained when an account is removed from a target organization or OU. If set to false, stack resources are deleted. Specify only if Enabled is set to True.

## Capability
### Properties

## StackSet_ManagedExecution
### Properties
* **Active**: [Active](#active)

## Active
### Properties

## OperationPreferences
### Properties
* **FailureToleranceCount**: int
* **FailureTolerancePercentage**: int
* **MaxConcurrentCount**: int
* **MaxConcurrentPercentage**: int
* **RegionConcurrencyType**: [RegionConcurrencyType](#regionconcurrencytype)
* **RegionOrder**: [Region](#region)[]

## RegionConcurrencyType
### Properties

## Region
### Properties

## Parameter
### Properties
* **ParameterKey**: string (Required): The key associated with the parameter. If you don't specify a key and value for a particular parameter, AWS CloudFormation uses the default value that is specified in your template.
* **ParameterValue**: string (Required): The input value associated with the parameter.

## StackInstances
### Properties
* **DeploymentTargets**: [DeploymentTargets](#deploymenttargets) (Required)
* **ParameterOverrides**: [Parameter](#parameter)[]: A list of stack set parameters whose values you want to override in the selected stack instances.
* **Regions**: [Region](#region)[] (Required): The names of one or more Regions where you want to create stack instances using the specified AWS account(s).

## DeploymentTargets
### Properties
* **AccountFilterType**: string: The filter type you want to apply on organizational units and accounts.
* **Accounts**: [Account](#account)[]: AWS accounts that you want to create stack instances in the specified Region(s) for.
* **OrganizationalUnitIds**: [OrganizationalUnitId](#organizationalunitid)[]: The organization root ID or organizational unit (OU) IDs to which StackSets deploys.

## Account
### Properties

## OrganizationalUnitId
### Properties

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag. You can specify a maximum of 127 characters for a tag key.
* **Value**: string (Required): A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.

## AWS.CloudFormation/TypeActivationProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the extension.
* **AutoUpdate**: bool: Whether to automatically update the extension in this account and region when a new minor version is published by the extension publisher. Major versions released by the publisher must be manually updated.
* **ExecutionRoleArn**: string: The Amazon Resource Name (ARN) of the IAM execution role to use to register the type. If your resource type calls AWS APIs in any of its handlers, you must create an IAM execution role that includes the necessary permissions to call those AWS APIs, and provision that execution role in your account. CloudFormation then assumes that execution role to provide your resource type with the appropriate credentials.
* **LoggingConfig**: [LoggingConfig](#loggingconfig): Specifies logging configuration information for a type.
* **MajorVersion**: string: The Major Version of the type you want to enable
* **PublicTypeArn**: string: The Amazon Resource Number (ARN) assigned to the public extension upon publication
* **PublisherId**: string: The publisher id assigned by CloudFormation for publishing in this region.
* **Type**: string: The kind of extension
* **TypeName**: string: The name of the type being registered.

We recommend that type names adhere to the following pattern: company_or_organization::service::type.
* **TypeNameAlias**: string: An alias to assign to the public extension in this account and region. If you specify an alias for the extension, you must then use the alias to refer to the extension in your templates.
* **VersionBump**: string: Manually updates a previously-enabled type to a new major or minor version, if available. You can also use this parameter to update the value of AutoUpdateEnabled

## LoggingConfig
### Properties
* **LogGroupName**: string: The Amazon CloudWatch log group to which CloudFormation sends error logging information when invoking the type's handlers.
* **LogRoleArn**: string: The ARN of the role that CloudFormation should assume when sending log entries to CloudWatch logs.

