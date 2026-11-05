# AWS.SWF @ default

## Resource AWS.SWF/Domain@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SWF/DomainProperties](#awsswfdomainproperties) (Identifier): properties of the resource

## AWS.SWF/DomainProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the domain.
* **Description**: string (ReadOnly): A text description of the SWF domain, provided at registration. This value is immutable once the domain is created.
* **Name**: string (ReadOnly): The name of the domain. The name must be unique within the region in which the domain is registered.
* **Status**: string (ReadOnly): The registration status of the domain. A domain can be in REGISTERED or DEPRECATED state.
* **Tags**: [Tag](#tag)[] (ReadOnly): An array of key-value pairs applied to the domain.
* **WorkflowExecutionRetentionPeriodInDays**: string (ReadOnly): The duration (in days) that records and histories of workflow executions on the domain should be kept by the service. Valid values are 0-90 days, or the string NONE. A value of 0 or NONE means no retention.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. Tag keys are case-sensitive and must be unique per SWF domain.
* **Value**: string (Required): The value associated with the tag key on the SWF domain. May be an empty string.

