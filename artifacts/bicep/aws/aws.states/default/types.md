# AWS.States @ default

## Resource AWS.States/Execution@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.States/ExecutionProperties](#awsstatesexecutionproperties) (Required, Identifier): properties of the resource

## AWS.States/ExecutionProperties
### Properties
* **ExecutionArn**: string (Identifier): The Amazon Resource Name (ARN) that identifies the execution.
* **Input**: string: The string that contains the JSON input data for the execution.
* **Name**: string: The name of the execution.
* **RedriveCount**: int (ReadOnly): The number of times the execution has been redriven.
* **RedriveStatus**: string (ReadOnly): Indicates whether or not an execution can be redriven.
* **StartDate**: string (ReadOnly): The date the execution started.
* **StateMachineArn**: string (Required): The Amazon Resource Name (ARN) of the state machine that was executed.
* **StateMachineName**: string (ReadOnly): The name of the state machine, extracted from the execution ARN.
* **Status**: string (ReadOnly): The current status of the execution.

