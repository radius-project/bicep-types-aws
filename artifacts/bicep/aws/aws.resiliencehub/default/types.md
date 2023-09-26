# AWS.ResilienceHub @ default

## Resource AWS.ResilienceHub/App@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHub/AppProperties](#awsresiliencehubappproperties) (Required): properties of the resource

## Resource AWS.ResilienceHub/ResiliencyPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ResilienceHub/ResiliencyPolicyProperties](#awsresiliencehubresiliencypolicyproperties) (Required): properties of the resource

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

## EventSubscription
### Properties
* **EventType**: string (Required): The type of event you would like to subscribe and get notification for.
* **Name**: string (Required): Unique name to identify an event subscription.
* **SnsTopicArn**: string: Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic.

## PermissionModel
### Properties
* **CrossAccountRoleArns**: string[]: Defines a list of role Amazon Resource Names (ARNs) to be used in other accounts. These ARNs are used for querying purposes while importing resources and assessing your application.
* **InvokerRoleName**: string: Existing AWS IAM role name in the primary AWS account that will be assumed by AWS Resilience Hub Service Principle to obtain a read-only access to your application resources while running an assessment.
* **Type**: string (Required): Defines how AWS Resilience Hub scans your resources. It can scan for the resources by using a pre-existing role in your AWS account, or by using the credentials of the current IAM user.

## ResourceMapping
### Properties
* **EksSourceName**: string
* **LogicalStackName**: string
* **MappingType**: string (Required)
* **PhysicalResourceId**: [PhysicalResourceId](#physicalresourceid) (Required)
* **ResourceName**: string
* **TerraformSourceName**: string

## PhysicalResourceId
### Properties
* **AwsAccountId**: string
* **AwsRegion**: string
* **Identifier**: string (Required)
* **Type**: string (Required)

## TagMap
### Properties

## AWS.ResilienceHub/ResiliencyPolicyProperties
### Properties
* **DataLocationConstraint**: string: Data Location Constraint of the Policy.
* **Policy**: [PolicyMap](#policymap) (Required)
* **PolicyArn**: string (ReadOnly, Identifier): Amazon Resource Name (ARN) of the Resiliency Policy.
* **PolicyDescription**: string: Description of Resiliency Policy.
* **PolicyName**: string (Required): Name of Resiliency Policy.
* **Tags**: [TagMap](#tagmap)
* **Tier**: string (Required): Resiliency Policy Tier.

## PolicyMap
### Properties

## TagMap
### Properties

