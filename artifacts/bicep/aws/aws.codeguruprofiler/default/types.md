# AWS.CodeGuruProfiler @ default

## Resource AWS.CodeGuruProfiler/ProfilingGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.CodeGuruProfiler/ProfilingGroupProperties](#awscodeguruprofilerprofilinggroupproperties) (Required): properties of the resource

## AWS.CodeGuruProfiler/ProfilingGroupProperties
### Properties
* **AgentPermissions**: [ProfilingGroup_AgentPermissions](#profilinggroupagentpermissions): The agent permissions attached to this profiling group.
* **AnomalyDetectionNotificationConfiguration**: [Channel](#channel)[]: Configuration for Notification Channels for Anomaly Detection feature in CodeGuru Profiler which enables customers to detect anomalies in the application profile for those methods that represent the highest proportion of CPU time or latency
* **Arn**: [ProfilingGroupArn](#profilinggrouparn) (ReadOnly): The Amazon Resource Name (ARN) of the specified profiling group.
* **ComputePlatform**: string: The compute platform of the profiling group.
* **ProfilingGroupName**: string (Required): The name of the profiling group.
* **Tags**: [Tag](#tag)[]: The tags associated with a profiling group.

## ProfilingGroup_AgentPermissions
### Properties
* **Principals**: [IamArn](#iamarn)[] (Required): The principals for the agent permissions.

## IamArn
### Properties

## Channel
### Properties
* **channelId**: [ChannelId](#channelid)
* **channelUri**: [ChannelUri](#channeluri) (Required)

## ChannelId
### Properties

## ChannelUri
### Properties

## ProfilingGroupArn
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length. The allowed characters across services are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.

