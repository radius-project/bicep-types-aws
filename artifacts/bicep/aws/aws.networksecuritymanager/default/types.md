# AWS.NetworkSecurityManager @ default

## Resource AWS.NetworkSecurityManager/Deployment@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkSecurityManager/DeploymentProperties](#awsnetworksecuritymanagerdeploymentproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkSecurityManager/Policy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkSecurityManager/PolicyProperties](#awsnetworksecuritymanagerpolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkSecurityManager/Rule@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkSecurityManager/RuleProperties](#awsnetworksecuritymanagerruleproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkSecurityManager/Scope@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkSecurityManager/ScopeProperties](#awsnetworksecuritymanagerscopeproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkSecurityManager/Template@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkSecurityManager/TemplateProperties](#awsnetworksecuritymanagertemplateproperties) (Required, Identifier): properties of the resource

## AssociatedPolicy
### Properties
* **PolicyArn**: string (Required): ARN of the associated policy.

## AssociatedRule
### Properties
* **RuleArn**: string (Required): ARN of the associated rule.

## AssociatedScope
### Properties
* **ScopeArn**: string (Required): ARN of the associated scope.

## AssociatedTemplateAndRule
### Properties
* **RuleArn**: string: ARN of the associated rule.
* **TemplateArn**: string: ARN of the associated template.

## AWS.NetworkSecurityManager/DeploymentProperties
### Properties
* **AssociatedPolicyList**: [AssociatedPolicy](#associatedpolicy)[]: List of policies associated with this deployment.
* **AssociatedScopeList**: [AssociatedScope](#associatedscope)[]: List of scopes associated with this deployment.
* **DeploymentArn**: string (ReadOnly, Identifier): The ARN of the deployment.
* **DeploymentConfiguration**: [DeploymentConfiguration](#deploymentconfiguration)
* **DeploymentDescription**: string: A description of the deployment.
* **DeploymentId**: string (ReadOnly): The unique identifier of the deployment.
* **DeploymentName**: string (Required): The name of the deployment.
* **Status**: string (ReadOnly): The status of the deployment.
* **Tags**: [Tag](#tag)[]: The tags associated with the deployment.
* **UpdatedAt**: string (ReadOnly): An ISO 8601 timestamp indicating when the deployment was last modified.
* **Version**: string (ReadOnly): The version number.

## AWS.NetworkSecurityManager/PolicyProperties
### Properties
* **AssociatedTemplateAndRuleList**: [AssociatedTemplateAndRule](#associatedtemplateandrule)[]: List of templates and rules associated with this policy.
* **FirewallType**: string (Required): The type of firewall.
* **PolicyArn**: string (ReadOnly, Identifier): The ARN of the policy.
* **PolicyConfiguration**: [PolicyConfiguration](#policyconfiguration) (Required): Configuration settings for policy behavior.
* **PolicyDescription**: string: A description of the policy.
* **PolicyId**: string (ReadOnly): The unique identifier of the policy.
* **PolicyName**: string (Required): The name of the policy.
* **Priority**: int (Required): The priority of the policy.
* **Status**: string (ReadOnly): The status of the policy.
* **Tags**: [Tag](#tag)[]: The tags associated with the policy.
* **UpdatedAt**: string (ReadOnly): An ISO 8601 timestamp indicating when the policy was last modified.
* **Version**: string (ReadOnly): The version number.

## AWS.NetworkSecurityManager/RuleProperties
### Properties
* **Configuration**: string: The rule configuration as a JSON string.
* **FirewallType**: string: The type of firewall for this rule.
* **RuleArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the rule.
* **RuleDescription**: string: A description of the rule.
* **RuleId**: string (ReadOnly): The unique identifier of the rule.
* **RuleName**: string (Required): The name of the rule.
* **RuleType**: string: The type of rule.
* **Status**: string (ReadOnly): The status of the rule.
* **Tags**: [Tag](#tag)[]: The tags associated with the rule.
* **UpdatedAt**: string (ReadOnly): An ISO 8601 timestamp indicating when the rule was last modified.
* **Version**: string (ReadOnly): The version number of the rule.

## AWS.NetworkSecurityManager/ScopeProperties
### Properties
* **ScopeArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the scope.
* **ScopeConfiguration**: string: The scope configuration as a JSON string.
* **ScopeDescription**: string: A description of the scope.
* **ScopeId**: string (ReadOnly): The unique identifier of the scope.
* **ScopeName**: string (Required): The name of the scope.
* **SpecializedScopeType**: string: Marks the scope as built for one specific use. Omit for a standard scope. A specialized scope cannot be associated with a deployment. Cannot be changed after creation.
* **Status**: string (ReadOnly): The status of the scope.
* **Tags**: [Tag](#tag)[]: The tags associated with the scope.
* **UpdatedAt**: string (ReadOnly): An ISO 8601 timestamp indicating when the scope was last modified.
* **Version**: string (ReadOnly): The version number of the scope.

## AWS.NetworkSecurityManager/TemplateProperties
### Properties
* **AssociatedRuleList**: [AssociatedRule](#associatedrule)[]: List of rules associated with this template.
* **FirewallType**: string: The type of firewall.
* **Status**: string (ReadOnly): The status of the template.
* **Tags**: [Tag](#tag)[]: The tags associated with the template.
* **TemplateArn**: string (ReadOnly, Identifier): The ARN of the template.
* **TemplateDescription**: string: A description of the template.
* **TemplateId**: string (ReadOnly): The unique identifier of the template.
* **TemplateName**: string (Required): The name of the template.
* **UpdatedAt**: string (ReadOnly): An ISO 8601 timestamp indicating when the template was last modified.
* **Version**: string (ReadOnly): The version number.

## DeploymentConfiguration
### Properties
* **EnableCrossAccountVisibility**: bool (Required): Whether cross-account visibility is enabled for the deployment.

## IgwFirewallConfig
### Properties
* **DefaultSubnetConnectivity**: string: The default internet connectivity treatment applied to subnets in scope unless a subnet connectivity override applies. Required for IGW_FIREWALL policies.
* **SubnetConnectivityOverrides**: [SubnetConnectivityOverride](#subnetconnectivityoverride)[]: An ordered list of subnet connectivity overrides. When a subnet matches more than one override, the first match applies. At most one override per connectivity type.

## PolicyConfiguration
### Properties
* **IgwFirewallConfig**: [IgwFirewallConfig](#igwfirewallconfig)
* **RemediationEnabled**: bool: Controls automatic remediation of non-compliant resources.
* **ResourcesCleanUp**: bool: Controls automatic cleanup of unused resources.
* **WafConfig**: [WafConfig](#wafconfig)

## SubnetConnectivityOverride
### Properties
* **ConnectivityType**: string (Required): The connectivity treatment applied to the subnets that the referenced scope selects.
* **Scopes**: string[] (Required): The ARN of the IGW_FIREWALL_SUBNET_CONNECTIVITY_OVERRIDE scope whose selected subnets receive ConnectivityType.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## WafConfig
### Properties
* **ConflictResolution**: string (Required): Conflict-resolution strategy applied to AWS WAF policies.
* **ExistingCustomerWebACLResolution**: string (Required): Controls how Network Security Manager handles remediation when a resource already has a customer-created WebACL.

