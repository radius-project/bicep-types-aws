# AWS.LaunchWizard @ default

## Resource AWS.LaunchWizard/Deployment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.LaunchWizard/DeploymentProperties](#awslaunchwizarddeploymentproperties) (Required, Identifier): properties of the resource

## AWS.LaunchWizard/DeploymentProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): ARN of the LaunchWizard deployment
* **CreatedAt**: string (ReadOnly): Timestamp of LaunchWizard deployment creation
* **DeletedAt**: string (ReadOnly): Timestamp of LaunchWizard deployment deletion
* **DeploymentId**: string (ReadOnly): Deployment ID of the LaunchWizard deployment
* **DeploymentPatternName**: string (Required): Workload deployment pattern name
* **Name**: string (Required): Name of LaunchWizard deployment
* **ResourceGroup**: string (ReadOnly): Resource Group Name created for LaunchWizard deployment
* **Specifications**: [DeploymentSpecifications](#deploymentspecifications) (Required, WriteOnly): LaunchWizard deployment specifications
* **Status**: string (ReadOnly): Status of LaunchWizard deployment
* **Tags**: [Tags](#tags)[]: Tags for LaunchWizard deployment
* **WorkloadName**: string (Required): Workload Name for LaunchWizard deployment

## DeploymentSpecifications
### Properties

## Tags
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

