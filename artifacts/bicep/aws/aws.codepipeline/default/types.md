# AWS.CodePipeline @ default

## Resource AWS.CodePipeline/CustomActionType@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodePipeline/CustomActionTypeProperties](#awscodepipelinecustomactiontypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.CodePipeline/Pipeline@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodePipeline/PipelineProperties](#awscodepipelinepipelineproperties) (Required, Identifier): properties of the resource

## ActionDeclaration
### Properties
* **ActionTypeId**: [ActionTypeId](#actiontypeid) (Required)
* **Commands**: string[]: The shell commands to run with your compute action in CodePipeline.
* **Configuration**: [Pipeline_Configuration](#pipelineconfiguration): The action's configuration. These are key-value pairs that specify input values for an action.
* **InputArtifacts**: [InputArtifact](#inputartifact)[]
* **Name**: string (Required, Identifier): The action declaration's name.
* **Namespace**: string: The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
* **OutputArtifacts**: [OutputArtifact](#outputartifact)[]
* **OutputVariables**: string[]: The list of variables that are to be exported from the compute action.
* **Region**: string: The action declaration's AWS Region, such as us-east-1.
* **RoleArn**: string: The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
* **RunOrder**: int: The order in which actions are run.
* **TimeoutInMinutes**: int: A timeout duration in minutes that can be applied against the ActionType?s default timeout value specified in Quotas for AWS CodePipeline. This attribute is available only to the manual approval ActionType.

## ActionTypeId
### Properties
* **Category**: string (Required): A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
* **Owner**: string (Required): The creator of the action being called. There are three valid values for the Owner field in the action category section within your pipeline structure: AWS, ThirdParty, and Custom.
* **Provider**: string (Required): The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as CodeDeploy.
* **Version**: string (Required): A string that describes the action version.

## ArtifactDetails
### Properties
* **MaximumCount**: int (Required): The maximum number of artifacts allowed for the action type.
* **MinimumCount**: int (Required): The minimum number of artifacts allowed for the action type.

## ArtifactStore
### Properties
* **EncryptionKey**: [EncryptionKey](#encryptionkey)
* **Location**: string (Required): The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
* **Type**: string (Required): The type of the artifact store, such as S3.

## ArtifactStoreMap
### Properties
* **ArtifactStore**: [ArtifactStore](#artifactstore) (Required)
* **Region**: string (Required): The action declaration's AWS Region, such as us-east-1.

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

## AWS.CodePipeline/PipelineProperties
### Properties
* **ArtifactStore**: [ArtifactStore](#artifactstore): The S3 bucket where artifacts for the pipeline are stored.
* **ArtifactStores**: [ArtifactStoreMap](#artifactstoremap)[]: A mapping of artifactStore objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
* **DisableInboundStageTransitions**: [StageTransition](#stagetransition)[]: Represents the input of a DisableStageTransition action.
* **ExecutionMode**: string: The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
* **Name**: string (Identifier): The name of the pipeline.
* **PipelineType**: string: CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
* **RestartExecutionOnUpdate**: bool (WriteOnly): Indicates whether to rerun the CodePipeline pipeline after you update it.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no actionRoleArn, or to use to assume roles for actions with an actionRoleArn
* **Stages**: [StageDeclaration](#stagedeclaration)[] (Required): Represents information about a stage and its definition.
* **Tags**: [Tag](#tag)[]: Specifies the tags applied to the pipeline.
* **Triggers**: [PipelineTriggerDeclaration](#pipelinetriggerdeclaration)[]: The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
* **Variables**: [VariableDeclaration](#variabledeclaration)[]: A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9@\-_]+.
* **Version**: string (ReadOnly): The version of the pipeline.

## BlockerDeclaration
### Properties
* **Name**: string (Required, Identifier): Reserved for future use.
* **Type**: string (Required): Reserved for future use.

## Condition
### Properties
* **Result**: string: The specified result for when the failure conditions are met, such as rolling back the stage
* **Rules**: [RuleDeclaration](#ruledeclaration)[]

## ConfigurationProperties
### Properties
* **Description**: string: The description of the action configuration property that is displayed to users. 
* **Key**: bool (Required): Whether the configuration property is a key.
* **Name**: string (Required): The name of the action configuration property.
* **Queryable**: bool: Indicates that the property is used with PollForJobs. When creating a custom action, an action can have up to one queryable property. If it has one, that property must be both required and not secret.If you create a pipeline with a custom action type, and that custom action contains a queryable property, the value for that configuration property is subject to other restrictions. The value must be less than or equal to twenty (20) characters. The value can contain only alphanumeric characters, underscores, and hyphens. 
* **Required**: bool (Required): Whether the configuration property is a required value.
* **Secret**: bool (Required): Whether the configuration property is secret. Secrets are hidden from all calls except for GetJobDetails, GetThirdPartyJobDetails, PollForJobs, and PollForThirdPartyJobs.
* **Type**: string: The type of the configuration property.

## EncryptionKey
### Properties
* **Id**: string (Required): The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
* **Type**: string (Required): The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.

## GitBranchFilterCriteria
### Properties
* **Excludes**: string[]: The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
* **Includes**: string[]: The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.

## GitConfiguration
### Properties
* **PullRequest**: [GitPullRequestFilter](#gitpullrequestfilter)[]: The field where the repository event that will start the pipeline is specified as pull requests.
* **Push**: [GitPushFilter](#gitpushfilter)[]: The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
* **SourceActionName**: string (Required): The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.

## GitFilePathFilterCriteria
### Properties
* **Excludes**: string[]: The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
* **Includes**: string[]: The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.

## GitPullRequestFilter
### Properties
* **Branches**: [GitBranchFilterCriteria](#gitbranchfiltercriteria)
* **Events**: string[]: The field that specifies which pull request events to filter on (opened, updated, closed) for the trigger configuration.
* **FilePaths**: [GitFilePathFilterCriteria](#gitfilepathfiltercriteria)

## GitPushFilter
### Properties
* **Branches**: [GitBranchFilterCriteria](#gitbranchfiltercriteria)
* **FilePaths**: [GitFilePathFilterCriteria](#gitfilepathfiltercriteria)
* **Tags**: [GitTagFilterCriteria](#gittagfiltercriteria)

## GitTagFilterCriteria
### Properties
* **Excludes**: string[]: The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
* **Includes**: string[]: The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.

## InputArtifact
### Properties
* **Name**: string (Required, Identifier): The name of the artifact to be worked on (for example, "My App").

## OutputArtifact
### Properties
* **Files**: string[]: The files that you want to associate with the output artifact that will be exported from the compute action.
* **Name**: string (Required, Identifier): The name of the output of an artifact, such as "My App".

## Pipeline_BeforeEntryConditions
### Properties
* **Conditions**: [Condition](#condition)[]

## Pipeline_Configuration
### Properties

## Pipeline_Configuration
### Properties

## Pipeline_FailureConditions
### Properties
* **Conditions**: [Condition](#condition)[]
* **Result**: string: The specified result for when the failure conditions are met, such as rolling back the stage
* **RetryConfiguration**: [Pipeline_FailureConditions_RetryConfiguration](#pipelinefailureconditionsretryconfiguration): The configuration that specifies the retry configuration for a stage

## Pipeline_FailureConditions_RetryConfiguration
### Properties
* **RetryMode**: string: The specified retry mode type for the given stage. FAILED_ACTIONS will retry only the failed actions. ALL_ACTIONS will retry both failed and successful

## Pipeline_SuccessConditions
### Properties
* **Conditions**: [Condition](#condition)[]

## PipelineTriggerDeclaration
### Properties
* **GitConfiguration**: [GitConfiguration](#gitconfiguration)
* **ProviderType**: string (Required): The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.

## RuleDeclaration
### Properties
* **Commands**: string[]: The shell commands to run with your compute action in CodePipeline.
* **Configuration**: [Pipeline_Configuration](#pipelineconfiguration): The rule's configuration. These are key-value pairs that specify input values for a rule.
* **InputArtifacts**: [InputArtifact](#inputartifact)[]
* **Name**: string (Identifier): The rule declaration's name.
* **Region**: string: The rule declaration's AWS Region, such as us-east-1.
* **RoleArn**: string: The ARN of the IAM service role that performs the declared rule. This is assumed through the roleArn for the pipeline.
* **RuleTypeId**: [RuleTypeId](#ruletypeid)

## RuleTypeId
### Properties
* **Category**: string: A category for the provider type for the rule.
* **Owner**: string: The creator of the rule being called. Only AWS is supported.
* **Provider**: string: The provider of the service being called by the rule.
* **Version**: string: A string that describes the rule version.

## Settings
### Properties
* **EntityUrlTemplate**: string: The URL returned to the AWS CodePipeline console that provides a deep link to the resources of the external system, such as the configuration page for an AWS CodeDeploy deployment group. This link is provided as part of the action display in the pipeline. 
* **ExecutionUrlTemplate**: string: The URL returned to the AWS CodePipeline console that contains a link to the top-level landing page for the external system, such as the console page for AWS CodeDeploy. This link is shown on the pipeline view page in the AWS CodePipeline console and provides a link to the execution entity of the external action. 
* **RevisionUrlTemplate**: string: The URL returned to the AWS CodePipeline console that contains a link to the page where customers can update or change the configuration of the external action. 
* **ThirdPartyConfigurationUrl**: string: The URL of a sign-up page where users can sign up for an external service and perform initial configuration of the action provided by that service.

## StageDeclaration
### Properties
* **Actions**: [ActionDeclaration](#actiondeclaration)[] (Required)
* **BeforeEntry**: [Pipeline_BeforeEntryConditions](#pipelinebeforeentryconditions): The method to use before stage runs.
* **Blockers**: [BlockerDeclaration](#blockerdeclaration)[]
* **Name**: string (Required, Identifier): The name of the stage.
* **OnFailure**: [Pipeline_FailureConditions](#pipelinefailureconditions): The method to use when a stage has not completed successfully
* **OnSuccess**: [Pipeline_SuccessConditions](#pipelinesuccessconditions): The method to use when a stage has completed successfully

## StageTransition
### Properties
* **Reason**: string (Required): The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
* **StageName**: string (Required): The name of the stage where you want to disable the inbound or outbound transition of artifacts.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## VariableDeclaration
### Properties
* **DefaultValue**: string: The value of a pipeline-level variable.
* **Description**: string: The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
* **Name**: string (Required, Identifier): The name of a pipeline-level variable.

