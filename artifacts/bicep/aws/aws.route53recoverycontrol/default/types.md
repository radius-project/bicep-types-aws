# AWS.Route53RecoveryControl @ default

## Resource AWS.Route53RecoveryControl/ControlPanel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryControl/ControlPanelProperties](#awsroute53recoverycontrolcontrolpanelproperties) (Required): properties of the resource

## Resource AWS.Route53RecoveryControl/RoutingControl@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryControl/RoutingControlProperties](#awsroute53recoverycontrolroutingcontrolproperties) (Required): properties of the resource

## Resource AWS.Route53RecoveryControl/SafetyRule@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Route53RecoveryControl/SafetyRuleProperties](#awsroute53recoverycontrolsafetyruleproperties): properties of the resource

## AWS.Route53RecoveryControl/ControlPanelProperties
### Properties
* **ClusterArn**: string: Cluster to associate with the Control Panel
* **ControlPanelArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the cluster.
* **DefaultControlPanel**: bool (ReadOnly): A flag that Amazon Route 53 Application Recovery Controller sets to true to designate the default control panel for a cluster. When you create a cluster, Amazon Route 53 Application Recovery Controller creates a control panel, and sets this flag for that control panel. If you create a control panel yourself, this flag is set to false.
* **Name**: string (Required): The name of the control panel. You can use any non-white space character in the name.
* **RoutingControlCount**: int (ReadOnly): Count of associated routing controls
* **Status**: string (ReadOnly): The deployment status of control panel. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
* **Tags**: [Tag](#tag)[] (WriteOnly): A collection of tags associated with a resource

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.Route53RecoveryControl/RoutingControlProperties
### Properties
* **ClusterArn**: string (WriteOnly): Arn associated with Control Panel
* **ControlPanelArn**: string: The Amazon Resource Name (ARN) of the control panel.
* **Name**: string (Required): The name of the routing control. You can use any non-white space character in the name.
* **RoutingControlArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the routing control.
* **Status**: string (ReadOnly): The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.

## AWS.Route53RecoveryControl/SafetyRuleProperties
### Properties
* **AssertionRule**: [AssertionRule](#assertionrule)
* **ControlPanelArn**: string: The Amazon Resource Name (ARN) of the control panel.
* **GatingRule**: [GatingRule](#gatingrule)
* **Name**: [SafetyRuleName](#safetyrulename)
* **RuleConfig**: [RuleConfig](#ruleconfig)
* **SafetyRuleArn**: string (ReadOnly): The Amazon Resource Name (ARN) of the safety rule.
* **Status**: string (ReadOnly): The deployment status of the routing control. Status can be one of the following: PENDING, DEPLOYED, PENDING_DELETION.
* **Tags**: [Tag](#tag)[] (WriteOnly): A collection of tags associated with a resource

## AssertionRule
### Properties
* **AssertedControls**: string[] (Required): The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions.
* **WaitPeriodMs**: int (Required): An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

## GatingRule
### Properties
* **GatingControls**: string[] (Required): The gating controls for the gating rule. That is, routing controls that are evaluated by the rule configuration that you specify.
* **TargetControls**: string[] (Required): Routing controls that can only be set or unset if the specified RuleConfig evaluates to true for the specified GatingControls. For example, say you have three gating controls, one for each of three AWS Regions. Now you specify AtLeast 2 as your RuleConfig. With these settings, you can only change (set or unset) the routing controls that you have specified as TargetControls if that rule evaluates to true. 
In other words, your ability to change the routing controls that you have specified as TargetControls is gated by the rule that you set for the routing controls in GatingControls.
* **WaitPeriodMs**: int (Required): An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent "flapping" of state. The wait period is 5000 ms by default, but you can choose a custom value.

## SafetyRuleName
### Properties

## RuleConfig
### Properties
* **Inverted**: bool (Required): Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
* **Threshold**: int (Required): The value of N, when you specify an ATLEAST rule type. That is, Threshold is the number of controls that must be set when you specify an ATLEAST type.
* **Type**: [RuleType](#ruletype) (Required)

## RuleType
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

