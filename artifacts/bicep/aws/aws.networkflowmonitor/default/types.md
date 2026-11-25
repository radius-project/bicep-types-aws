# AWS.NetworkFlowMonitor @ default

## Resource AWS.NetworkFlowMonitor/Monitor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFlowMonitor/MonitorProperties](#awsnetworkflowmonitormonitorproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFlowMonitor/PerformanceMonitor@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFlowMonitor/PerformanceMonitorProperties](#awsnetworkflowmonitorperformancemonitorproperties) (Required, Identifier): properties of the resource

## Resource AWS.NetworkFlowMonitor/Scope@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NetworkFlowMonitor/ScopeProperties](#awsnetworkflowmonitorscopeproperties) (Required, Identifier): properties of the resource

## AWS.NetworkFlowMonitor/MonitorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the monitor.
* **CreatedAt**: string (ReadOnly): The date and time when the monitor was created.
* **LocalResources**: [MonitorLocalResource](#monitorlocalresource)[] (Required): The local resources to monitor.
* **ModifiedAt**: string (ReadOnly): The date and time when the monitor was last modified.
* **MonitorName**: string (Required): The name of the monitor.
* **MonitorStatus**: string (ReadOnly): The status of the monitor.
* **RemoteResources**: [MonitorRemoteResource](#monitorremoteresource)[]: The remote resources to monitor.
* **ScopeArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the scope for the monitor.
* **Tags**: [Tag](#tag)[]: The tags for the monitor.

## AWS.NetworkFlowMonitor/PerformanceMonitorProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the performance monitor.
* **CreatedAt**: string (ReadOnly): The date and time when the performance monitor was created.
* **ModifiedAt**: string (ReadOnly): The date and time when the performance monitor was last modified.
* **MonitorName**: string (Required): The name of the performance monitor.
* **MonitorStatus**: string (ReadOnly): The status of the performance monitor.
* **MonitorType**: string (ReadOnly): The type of the performance monitor.
* **ScopeArn**: string (WriteOnly): The Amazon Resource Name (ARN) of the scope for the performance monitor.
* **Tags**: [Tag](#tag)[]: The tags for the performance monitor.
* **Targets**: [PerformanceMonitorTarget](#performancemonitortarget)[] (Required): The targets that are monitored by the performance monitor.

## AWS.NetworkFlowMonitor/ScopeProperties
### Properties
* **ScopeArn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the scope.
* **ScopeId**: string (ReadOnly): The identifier for the scope.
* **Status**: string (ReadOnly): The status of the scope.
* **Tags**: [Tag](#tag)[]: The tags for the scope.
* **Targets**: [TargetResource](#targetresource)[] (Required): The targets for the scope.

## MonitorLocalResource
### Properties
* **Identifier**: string (Required): The identifier of the local resource.
* **Type**: string (Required): The type of the local resource.

## MonitorRemoteResource
### Properties
* **Identifier**: string (Required): The identifier of the remote resource.
* **Type**: string (Required): The type of the remote resource.

## PerformanceMonitorTarget
### Properties
* **Identifier**: string (Required): The identifier of the target.
* **Type**: string (Required): The type of the target.

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

## TargetId
### Properties
* **AccountId**: string (Required): The account ID for the target.

## TargetIdentifier
### Properties
* **TargetId**: [TargetId](#targetid) (Required)
* **TargetType**: string (Required): The type of the target. Currently always ACCOUNT.

## TargetResource
### Properties
* **Region**: string (Required): The AWS Region for the target resource.
* **TargetIdentifier**: [TargetIdentifier](#targetidentifier) (Required)

