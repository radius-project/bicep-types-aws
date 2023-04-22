# AWS.CodePipeline @ default

## Resource AWS.CodePipeline/CustomActionType@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodePipeline/CustomActionTypeProperties](#awscodepipelinecustomactiontypeproperties) (Required): properties of the resource

## AWS.CodePipeline/CustomActionTypeProperties
### Properties
* **Category**: string (Required, Identifier): The category of the custom action, such as a build action or a test action.
* **ConfigurationProperties**: [ConfigurationProperties](#configurationproperties)[] (WriteOnly): The configuration properties for the custom action.
* **Id**: string (ReadOnly)
* **InputArtifactDetails**: [ArtifactDetails](#artifactdetails) (Required): The details of the input artifact for the action, such as its commit ID.
* **OutputArtifactDetails**: [ArtifactDetails](#artifactdetails) (Required): The details of the output artifact of the action, such as its commit ID.
* **Provider**: string (Required, Identifier): The provider of the service used in the custom action, such as AWS CodeDeploy.
* **Settings**: [Settings](#settings): URLs that provide users information about this custom action.
* **Tags**: [Tag](#tag)[]: Any tags assigned to the custom action.
* **Version**: string (Required, Identifier): The version identifier of the custom action.

## ConfigurationProperties
### Properties
* **Description**: string: The description of the action configuration property that is displayed to users. 
* **Key**: bool (Required): Whether the configuration property is a key.
* **Name**: string (Required): The name of the action configuration property.
* **Queryable**: bool: Indicates that the property is used with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens. 
* **Required**: bool (Required): Whether the configuration property is a required value.
* **Secret**: bool (Required): Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.
* **Type**: string: The type of the configuration property.

## ArtifactDetails
### Properties
* **MaximumCount**: int (Required): The maximum number of artifacts allowed for the action type.
* **MinimumCount**: int (Required): The minimum number of artifacts allowed for the action type.

## Settings
### Properties
* **EntityUrlTemplate**: string: The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display in the pipeline. 
* **ExecutionUrlTemplate**: string: The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action. 
* **RevisionUrlTemplate**: string: The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. 
* **ThirdPartyConfigurationUrl**: string: The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

