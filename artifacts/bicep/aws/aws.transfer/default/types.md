# AWS.Transfer @ default

## Resource AWS.Transfer/Workflow@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.Transfer/WorkflowProperties](#awstransferworkflowproperties) (Required): properties of the resource

## AWS.Transfer/WorkflowProperties
### Properties
* **Arn**: string (ReadOnly): Specifies the unique Amazon Resource Name (ARN) for the workflow.
* **Description**: string: A textual description for the workflow.
* **OnExceptionSteps**: [WorkflowStep](#workflowstep)[]: Specifies the steps (actions) to take if any errors are encountered during execution of the workflow.
* **Steps**: [WorkflowStep](#workflowstep)[] (Required): Specifies the details for the steps that are in the specified workflow.
* **Tags**: [Tag](#tag)[]: Key-value pairs that can be used to group and search for workflows. Tags are metadata attached to workflows for any purpose.
* **WorkflowId**: string (ReadOnly): A unique identifier for the workflow.

## WorkflowStep
### Properties
* **CopyStepDetails**: [Workflow_CopyStepDetails](#workflowcopystepdetails): Details for a step that performs a file copy.
* **CustomStepDetails**: [Workflow_CustomStepDetails](#workflowcustomstepdetails): Details for a step that invokes a lambda function.
* **DeleteStepDetails**: [Workflow_DeleteStepDetails](#workflowdeletestepdetails): Details for a step that deletes the file.
* **TagStepDetails**: [Workflow_TagStepDetails](#workflowtagstepdetails): Details for a step that creates one or more tags.
* **Type**: string

## Workflow_CopyStepDetails
### Properties
* **DestinationFileLocation**: [InputFileLocation](#inputfilelocation)
* **Name**: string: The name of the step, used as an identifier.
* **OverwriteExisting**: string: A flag that indicates whether or not to overwrite an existing file of the same name. The default is FALSE.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.

## InputFileLocation
### Properties
* **S3FileLocation**: [S3InputFileLocation](#s3inputfilelocation)

## S3InputFileLocation
### Properties
* **Bucket**: string: Specifies the S3 bucket that contains the file being copied.
* **Key**: string: The name assigned to the file when it was created in S3. You use the object key to retrieve the object.

## Workflow_CustomStepDetails
### Properties
* **Name**: string: The name of the step, used as an identifier.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.
* **Target**: string: The ARN for the lambda function that is being called.
* **TimeoutSeconds**: int: Timeout, in seconds, for the step.

## Workflow_DeleteStepDetails
### Properties
* **Name**: string: The name of the step, used as an identifier.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.

## Workflow_TagStepDetails
### Properties
* **Name**: string: The name of the step, used as an identifier.
* **SourceFileLocation**: string: Specifies which file to use as input to the workflow step.
* **Tags**: [S3Tag](#s3tag)[]: Array that contains from 1 to 10 key/value pairs.

## S3Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): The value that corresponds to the key.

## Tag
### Properties
* **Key**: string (Required): The name assigned to the tag that you create.
* **Value**: string (Required): Contains one or more values that you assigned to the key name you create.

