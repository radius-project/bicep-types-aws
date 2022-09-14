# AWS.ResilienceHub @ default

## Resource AWS.ResilienceHub/App@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ResilienceHub/AppProperties](#awsresiliencehubappproperties) (Required): properties of the resource

## Resource AWS.ResilienceHub/ResiliencyPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ResilienceHub/ResiliencyPolicyProperties](#awsresiliencehubresiliencypolicyproperties) (Required): properties of the resource

## AWS.ResilienceHub/AppProperties
### Properties
* **AppArn**: string (ReadOnly): Amazon Resource Name (ARN) of the App.
* **AppAssessmentSchedule**: string: Assessment execution schedule.
* **AppTemplateBody**: string (Required): A string containing full ResilienceHub app template body.
* **Description**: string: App description.
* **Name**: string (Required): Name of the app.
* **ResiliencyPolicyArn**: string: Amazon Resource Name (ARN) of the Resiliency Policy.
* **ResourceMappings**: [ResourceMapping](#resourcemapping)[] (Required): An array of ResourceMapping objects.
* **Tags**: [TagMap](#tagmap)

## ResourceMapping
### Properties
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
* **PolicyArn**: string (ReadOnly): Amazon Resource Name (ARN) of the Resiliency Policy.
* **PolicyDescription**: string: Description of Resiliency Policy.
* **PolicyName**: string (Required): Name of Resiliency Policy.
* **Tags**: [TagMap](#tagmap)
* **Tier**: string (Required): Resiliency Policy Tier.

## PolicyMap
### Properties

## TagMap
### Properties

