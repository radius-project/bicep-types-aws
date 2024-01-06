# AWS.GameLift @ default

## Resource AWS.GameLift/Alias@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/AliasProperties](#awsgameliftaliasproperties) (Required): properties of the resource

## Resource AWS.GameLift/Build@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/BuildProperties](#awsgameliftbuildproperties): properties of the resource

## Resource AWS.GameLift/Fleet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/FleetProperties](#awsgameliftfleetproperties) (Required): properties of the resource

## Resource AWS.GameLift/GameServerGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/GameServerGroupProperties](#awsgameliftgameservergroupproperties) (Required): properties of the resource

## Resource AWS.GameLift/GameSessionQueue@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/GameSessionQueueProperties](#awsgameliftgamesessionqueueproperties) (Required): properties of the resource

## Resource AWS.GameLift/Location@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/LocationProperties](#awsgameliftlocationproperties) (Required): properties of the resource

## Resource AWS.GameLift/MatchmakingConfiguration@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/MatchmakingConfigurationProperties](#awsgameliftmatchmakingconfigurationproperties) (Required): properties of the resource

## Resource AWS.GameLift/MatchmakingRuleSet@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/MatchmakingRuleSetProperties](#awsgameliftmatchmakingrulesetproperties) (Required): properties of the resource

## Resource AWS.GameLift/Script@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GameLift/ScriptProperties](#awsgameliftscriptproperties) (Required): properties of the resource

## AWS.GameLift/AliasProperties
### Properties
* **AliasId**: string (ReadOnly, Identifier): Unique alias ID
* **Description**: string: A human-readable description of the alias.
* **Name**: string (Required): A descriptive label that is associated with an alias. Alias names do not need to be unique.
* **RoutingStrategy**: [RoutingStrategy](#routingstrategy) (Required): A routing configuration that specifies where traffic is directed for this alias, such as to a fleet or to a message.

## RoutingStrategy
### Properties
* **FleetId**: string: A unique identifier for a fleet that the alias points to. If you specify SIMPLE for the Type property, you must specify this property.
* **Message**: string: The message text to be used with a terminal routing strategy. If you specify TERMINAL for the Type property, you must specify this property.
* **Type**: string (Required): Simple routing strategy. The alias resolves to one specific fleet. Use this type when routing to active fleets.

## AWS.GameLift/BuildProperties
### Properties
* **BuildId**: string (ReadOnly, Identifier): A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
* **Name**: string: A descriptive label that is associated with a build. Build names do not need to be unique.
* **OperatingSystem**: string: The operating system that the game server binaries are built to run on. This value determines the type of fleet resources that you can use for this build. If your game build contains multiple executables, they all must run on the same operating system. If an operating system is not specified when creating a build, Amazon GameLift uses the default value (WINDOWS_2012). This value cannot be changed later.
* **ServerSdkVersion**: string (WriteOnly): A server SDK version you used when integrating your game server build with Amazon GameLift. By default Amazon GameLift sets this value to 4.0.2.
* **StorageLocation**: [StorageLocation](#storagelocation) (WriteOnly): Information indicating where your game build files are stored. Use this parameter only when creating a build with files stored in an Amazon S3 bucket that you own. The storage location must specify an Amazon S3 bucket name and key. The location must also specify a role ARN that you set up to allow Amazon GameLift to access your Amazon S3 bucket. The S3 bucket and your new build must be in the same Region.
* **Version**: string: Version information that is associated with this build. Version strings do not need to be unique.

## StorageLocation
### Properties
* **Bucket**: string (Required): An Amazon S3 bucket identifier. This is the name of the S3 bucket.
* **Key**: string (Required): The name of the zip file that contains the build files or script files.
* **ObjectVersion**: string: The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.

## AWS.GameLift/FleetProperties
### Properties
* **AnywhereConfiguration**: [AnywhereConfiguration](#anywhereconfiguration): Configuration for Anywhere fleet.
* **ApplyCapacity**: string: ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.
* **BuildId**: string: A unique identifier for a build to be deployed on the new fleet. If you are deploying the fleet with a custom game build, you must specify this property. The build must have been successfully uploaded to Amazon GameLift and be in a READY status. This fleet setting cannot be changed once the fleet is created.
* **CertificateConfiguration**: [CertificateConfiguration](#certificateconfiguration): Indicates whether to generate a TLS/SSL certificate for the new fleet. TLS certificates are used for encrypting traffic between game clients and game servers running on GameLift. If this parameter is not set, certificate generation is disabled. This fleet setting cannot be changed once the fleet is created.
* **ComputeType**: string: ComputeType to differentiate EC2 hardware managed by GameLift and Anywhere hardware managed by the customer.
* **Description**: string: A human-readable description of a fleet.
* **DesiredEC2Instances**: int: [DEPRECATED] The number of EC2 instances that you want this fleet to host. When creating a new fleet, GameLift automatically sets this value to "1" and initiates a single instance. Once the fleet is active, update this value to trigger GameLift to add or remove instances from the fleet.
* **EC2InboundPermissions**: [IpPermission](#ippermission)[]: A range of IP addresses and port settings that allow inbound traffic to connect to server processes on an Amazon GameLift server.
* **EC2InstanceType**: string: The name of an EC2 instance type that is supported in Amazon GameLift. A fleet instance type determines the computing resources of each instance in the fleet, including CPU, memory, storage, and networking capacity. Amazon GameLift supports the following EC2 instance types. See Amazon EC2 Instance Types for detailed descriptions.
* **FleetId**: string (ReadOnly, Identifier): Unique fleet ID
* **FleetType**: string: Indicates whether to use On-Demand instances or Spot instances for this fleet. If empty, the default is ON_DEMAND. Both categories of instances use identical hardware and configurations based on the instance type selected for this fleet.
* **InstanceRoleARN**: string: A unique identifier for an AWS IAM role that manages access to your AWS services. With an instance role ARN set, any application that runs on an instance in this fleet can assume the role, including install scripts, server processes, and daemons (background processes). Create a role or look up a role's ARN from the IAM dashboard in the AWS Management Console.
* **InstanceRoleCredentialsProvider**: string: Credentials provider implementation that loads credentials from the Amazon EC2 Instance Metadata Service.
* **Locations**: [LocationConfiguration](#locationconfiguration)[]
* **LogPaths**: string[]: This parameter is no longer used. When hosting a custom game build, specify where Amazon GameLift should store log files using the Amazon GameLift server API call ProcessReady()
* **MaxSize**: int: [DEPRECATED] The maximum value that is allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
* **MetricGroups**: string[]: The name of an Amazon CloudWatch metric group. A metric group aggregates the metrics for all fleets in the group. Specify a string containing the metric group name. You can use an existing name or use a new name to create a new metric group. Currently, this parameter can have only one string.
* **MinSize**: int: [DEPRECATED] The minimum value allowed for the fleet's instance count. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.
* **Name**: string (Required): A descriptive label that is associated with a fleet. Fleet names do not need to be unique.
* **NewGameSessionProtectionPolicy**: string: A game session protection policy to apply to all game sessions hosted on instances in this fleet. When protected, active game sessions cannot be terminated during a scale-down event. If this parameter is not set, instances in this fleet default to no protection. You can change a fleet's protection policy to affect future game sessions on the fleet. You can also set protection for individual game sessions.
* **PeerVpcAwsAccountId**: string: A unique identifier for the AWS account with the VPC that you want to peer your Amazon GameLift fleet with. You can find your account ID in the AWS Management Console under account settings.
* **PeerVpcId**: string: A unique identifier for a VPC with resources to be accessed by your Amazon GameLift fleet. The VPC must be in the same Region as your fleet. To look up a VPC ID, use the VPC Dashboard in the AWS Management Console.
* **ResourceCreationLimitPolicy**: [ResourceCreationLimitPolicy](#resourcecreationlimitpolicy): A policy that limits the number of game sessions an individual player can create over a span of time for this fleet.
* **RuntimeConfiguration**: [RuntimeConfiguration](#runtimeconfiguration): Instructions for launching server processes on each instance in the fleet. Server processes run either a custom game build executable or a Realtime script. The runtime configuration defines the server executables or launch script file, launch parameters, and the number of processes to run concurrently on each instance. When creating a fleet, the runtime configuration must have at least one server process configuration; otherwise the request fails with an invalid request exception.

This parameter is required unless the parameters ServerLaunchPath and ServerLaunchParameters are defined. Runtime configuration has replaced these parameters, but fleets that use them will continue to work.
* **ScalingPolicies**: [ScalingPolicy](#scalingpolicy)[]: A list of rules that control how a fleet is scaled.
* **ScriptId**: string: A unique identifier for a Realtime script to be deployed on a new Realtime Servers fleet. The script must have been successfully uploaded to Amazon GameLift. This fleet setting cannot be changed once the fleet is created.

Note: It is not currently possible to use the !Ref command to reference a script created with a CloudFormation template for the fleet property ScriptId. Instead, use Fn::GetAtt Script.Arn or Fn::GetAtt Script.Id to retrieve either of these properties as input for ScriptId. Alternatively, enter a ScriptId string manually.
* **ServerLaunchParameters**: string: This parameter is no longer used but is retained for backward compatibility. Instead, specify server launch parameters in the RuntimeConfiguration parameter. A request must specify either a runtime configuration or values for both ServerLaunchParameters and ServerLaunchPath.
* **ServerLaunchPath**: string: This parameter is no longer used. Instead, specify a server launch path using the RuntimeConfiguration parameter. Requests that specify a server launch path and launch parameters instead of a runtime configuration will continue to work.

## AnywhereConfiguration
### Properties
* **Cost**: string (Required): Cost of compute can be specified on Anywhere Fleets to prioritize placement across Queue destinations based on Cost.

## CertificateConfiguration
### Properties
* **CertificateType**: string (Required)

## IpPermission
### Properties
* **FromPort**: int (Required): A starting value for a range of allowed port numbers.
* **IpRange**: string (Required): A range of allowed IP addresses. This value must be expressed in CIDR notation. Example: "000.000.000.000/[subnet mask]" or optionally the shortened version "0.0.0.0/[subnet mask]".
* **Protocol**: string (Required): The network communication protocol used by the fleet.
* **ToPort**: int (Required): An ending value for a range of allowed port numbers. Port numbers are end-inclusive. This value must be higher than FromPort.

## LocationConfiguration
### Properties
* **Location**: string (Required)
* **LocationCapacity**: [LocationCapacity](#locationcapacity)

## LocationCapacity
### Properties
* **DesiredEC2Instances**: int (Required): The number of EC2 instances you want to maintain in the specified fleet location. This value must fall between the minimum and maximum size limits.
* **MaxSize**: int (Required): The maximum value that is allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "1". Once the fleet is active, you can change this value.
* **MinSize**: int (Required): The minimum value allowed for the fleet's instance count for a location. When creating a new fleet, GameLift automatically sets this value to "0". After the fleet is active, you can change this value.

## ResourceCreationLimitPolicy
### Properties
* **NewGameSessionsPerCreator**: int: The maximum number of game sessions that an individual can create during the policy period.
* **PolicyPeriodInMinutes**: int: The time span used in evaluating the resource creation limit policy.

## RuntimeConfiguration
### Properties
* **GameSessionActivationTimeoutSeconds**: int: The maximum amount of time (in seconds) that a game session can remain in status ACTIVATING. If the game session is not active before the timeout, activation is terminated and the game session status is changed to TERMINATED.
* **MaxConcurrentGameSessionActivations**: int: The maximum number of game sessions with status ACTIVATING to allow on an instance simultaneously. This setting limits the amount of instance resources that can be used for new game activations at any one time.
* **ServerProcesses**: [ServerProcess](#serverprocess)[]: A collection of server process configurations that describe which server processes to run on each instance in a fleet.

## ServerProcess
### Properties
* **ConcurrentExecutions**: int (Required): The number of server processes that use this configuration to run concurrently on an instance.
* **LaunchPath**: string (Required): The location of the server executable in a custom game build or the name of the Realtime script file that contains the Init() function. Game builds and Realtime scripts are installed on instances at the root:

Windows (for custom game builds only): C:\game. Example: "C:\game\MyGame\server.exe"

Linux: /local/game. Examples: "/local/game/MyGame/server.exe" or "/local/game/MyRealtimeScript.js"
* **Parameters**: string: An optional list of parameters to pass to the server executable or Realtime script on launch.

## ScalingPolicy
### Properties
* **ComparisonOperator**: string: Comparison operator to use when measuring a metric against the threshold value.
* **EvaluationPeriods**: int: Length of time (in minutes) the metric must be at or beyond the threshold before a scaling event is triggered.
* **Location**: string
* **MetricName**: string (Required): Name of the Amazon GameLift-defined metric that is used to trigger a scaling adjustment.
* **Name**: string (Required): A descriptive label that is associated with a fleet's scaling policy. Policy names do not need to be unique.
* **PolicyType**: string: The type of scaling policy to create. For a target-based policy, set the parameter MetricName to 'PercentAvailableGameSessions' and specify a TargetConfiguration. For a rule-based policy set the following parameters: MetricName, ComparisonOperator, Threshold, EvaluationPeriods, ScalingAdjustmentType, and ScalingAdjustment.
* **ScalingAdjustment**: int: Amount of adjustment to make, based on the scaling adjustment type.
* **ScalingAdjustmentType**: string: The type of adjustment to make to a fleet's instance count.
* **Status**: string: Current status of the scaling policy. The scaling policy can be in force only when in an ACTIVE status. Scaling policies can be suspended for individual fleets. If the policy is suspended for a fleet, the policy status does not change.
* **TargetConfiguration**: [TargetConfiguration](#targetconfiguration): An object that contains settings for a target-based scaling policy.
* **Threshold**: int: Metric value used to trigger a scaling event.
* **UpdateStatus**: string: The current status of the fleet's scaling policies in a requested fleet location. The status PENDING_UPDATE indicates that an update was requested for the fleet but has not yet been completed for the location.

## TargetConfiguration
### Properties
* **TargetValue**: int (Required): Desired value to use with a target-based scaling policy. The value must be relevant for whatever metric the scaling policy is using. For example, in a policy using the metric PercentAvailableGameSessions, the target value should be the preferred size of the fleet's buffer (the percent of capacity that should be idle and ready for new game sessions).

## AWS.GameLift/GameServerGroupProperties
### Properties
* **AutoScalingGroupArn**: string (ReadOnly): A generated unique ID for the EC2 Auto Scaling group that is associated with this game server group.
* **AutoScalingPolicy**: [AutoScalingPolicy](#autoscalingpolicy) (WriteOnly): Configuration settings to define a scaling policy for the Auto Scaling group that is optimized for game hosting
* **BalancingStrategy**: string: The fallback balancing method to use for the game server group when Spot Instances in a Region become unavailable or are not viable for game hosting.
* **DeleteOption**: string (WriteOnly): The type of delete to perform.
* **GameServerGroupArn**: string (ReadOnly, Identifier): A generated unique ID for the game server group.
* **GameServerGroupName**: string (Required): An identifier for the new game server group.
* **GameServerProtectionPolicy**: string: A flag that indicates whether instances in the game server group are protected from early termination.
* **InstanceDefinitions**: [InstanceDefinition](#instancedefinition)[] (Required): A set of EC2 instance types to use when creating instances in the group.
* **LaunchTemplate**: [LaunchTemplate](#launchtemplate) (WriteOnly): The EC2 launch template that contains configuration settings and game server code to be deployed to all instances in the game server group.
* **MaxSize**: int (WriteOnly): The maximum number of instances allowed in the EC2 Auto Scaling group.
* **MinSize**: int (WriteOnly): The minimum number of instances allowed in the EC2 Auto Scaling group.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access your EC2 Auto Scaling groups.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of labels to assign to the new game server group resource.
* **VpcSubnets**: string[] (WriteOnly): A list of virtual private cloud (VPC) subnets to use with instances in the game server group.

## AutoScalingPolicy
### Properties
* **EstimatedInstanceWarmup**: int
* **TargetTrackingConfiguration**: [TargetTrackingConfiguration](#targettrackingconfiguration) (Required)

## TargetTrackingConfiguration
### Properties
* **TargetValue**: int (Required)

## InstanceDefinition
### Properties
* **InstanceType**: string (Required)
* **WeightedCapacity**: string

## LaunchTemplate
### Properties
* **LaunchTemplateId**: string
* **LaunchTemplateName**: string
* **Version**: string

## Tag
### Properties
* **Key**: string: The key for a developer-defined key:value pair for tagging an AWS resource.
* **Value**: string: The value for a developer-defined key:value pair for tagging an AWS resource.

## AWS.GameLift/GameSessionQueueProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.
* **CustomEventData**: string: Information that is added to all events that are related to this game session queue.
* **Destinations**: [GameSessionQueueDestination](#gamesessionqueuedestination)[]: A list of fleets and/or fleet aliases that can be used to fulfill game session placement requests in the queue.
* **FilterConfiguration**: [GameSessionQueue_FilterConfiguration](#gamesessionqueuefilterconfiguration): A list of locations where a queue is allowed to place new game sessions.
* **Name**: string (Required, Identifier): A descriptive label that is associated with game session queue. Queue names must be unique within each Region.
* **NotificationTarget**: string: An SNS topic ARN that is set up to receive game session placement notifications.
* **PlayerLatencyPolicies**: [PlayerLatencyPolicy](#playerlatencypolicy)[]: A set of policies that act as a sliding cap on player latency.
* **PriorityConfiguration**: [GameSessionQueue_PriorityConfiguration](#gamesessionqueuepriorityconfiguration): Custom settings to use when prioritizing destinations and locations for game session placements.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **TimeoutInSeconds**: int: The maximum time, in seconds, that a new game session placement request remains in the queue.

## GameSessionQueueDestination
### Properties
* **DestinationArn**: string

## GameSessionQueue_FilterConfiguration
### Properties
* **AllowedLocations**: string[]

## PlayerLatencyPolicy
### Properties
* **MaximumIndividualPlayerLatencyMilliseconds**: int: The maximum latency value that is allowed for any player, in milliseconds. All policies must have a value set for this property.
* **PolicyDurationSeconds**: int: The length of time, in seconds, that the policy is enforced while placing a new game session.

## GameSessionQueue_PriorityConfiguration
### Properties
* **LocationOrder**: string[]
* **PriorityOrder**: string[]

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

## AWS.GameLift/LocationProperties
### Properties
* **LocationArn**: string (ReadOnly)
* **LocationName**: string (Required, Identifier)
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

## AWS.GameLift/MatchmakingConfigurationProperties
### Properties
* **AcceptanceRequired**: bool (Required): A flag that indicates whether a match that was created with this configuration must be accepted by the matched players
* **AcceptanceTimeoutSeconds**: int: The length of time (in seconds) to wait for players to accept a proposed match, if acceptance is required.
* **AdditionalPlayerCount**: int: The number of player slots in a match to keep open for future players.
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking configuration resource and uniquely identifies it.
* **BackfillMode**: string: The method used to backfill game sessions created with this matchmaking configuration.
* **CreationTime**: string: A time stamp indicating when this data object was created.
* **CustomEventData**: string: Information to attach to all events related to the matchmaking configuration.
* **Description**: string: A descriptive label that is associated with matchmaking configuration.
* **FlexMatchMode**: string: Indicates whether this matchmaking configuration is being used with Amazon GameLift hosting or as a standalone matchmaking solution.
* **GameProperties**: [GameProperty](#gameproperty)[]: A set of custom properties for a game session, formatted as key:value pairs.
* **GameSessionData**: string: A set of custom game session properties, formatted as a single string value.
* **GameSessionQueueArns**: string[]: The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift game session queue resource and uniquely identifies it.
* **Name**: string (Required, Identifier): A unique identifier for the matchmaking configuration.
* **NotificationTarget**: string: An SNS topic ARN that is set up to receive matchmaking notifications.
* **RequestTimeoutSeconds**: int (Required): The maximum duration, in seconds, that a matchmaking ticket can remain in process before timing out.
* **RuleSetArn**: string: The Amazon Resource Name (ARN) associated with the GameLift matchmaking rule set resource that this configuration uses.
* **RuleSetName**: string (Required): A unique identifier for the matchmaking rule set to use with this configuration.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## GameProperty
### Properties
* **Key**: string (Required): The game property identifier.
* **Value**: string (Required): The game property value.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

## AWS.GameLift/MatchmakingRuleSetProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift matchmaking rule set resource and uniquely identifies it.
* **CreationTime**: string (ReadOnly): A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds.
* **Name**: string (Required, Identifier): A unique identifier for the matchmaking rule set.
* **RuleSetBody**: string (Required): A collection of matchmaking rules, formatted as a JSON string.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 1 to 256 Unicode characters in length.

## AWS.GameLift/ScriptProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) that is assigned to a Amazon GameLift script resource and uniquely identifies it. ARNs are unique across all Regions. In a GameLift script ARN, the resource ID matches the Id value.
* **CreationTime**: string (ReadOnly): A time stamp indicating when this data object was created. Format is a number expressed in Unix time as milliseconds (for example "1469498468.057").
* **Id**: string (ReadOnly, Identifier): A unique identifier for the Realtime script
* **Name**: string: A descriptive label that is associated with a script. Script names do not need to be unique.
* **SizeOnDisk**: int (ReadOnly): The file size of the uploaded Realtime script, expressed in bytes. When files are uploaded from an S3 location, this value remains at "0".
* **StorageLocation**: [Script_S3Location](#scripts3location) (Required): The location of the Amazon S3 bucket where a zipped file containing your Realtime scripts is stored. The storage location must specify the Amazon S3 bucket name, the zip file name (the "key"), and a role ARN that allows Amazon GameLift to access the Amazon S3 storage location. The S3 bucket must be in the same Region where you want to create a new script. By default, Amazon GameLift uploads the latest version of the zip file; if you have S3 object versioning turned on, you can use the ObjectVersion parameter to specify an earlier version.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.
* **Version**: string: The version that is associated with a script. Version strings do not need to be unique.

## Script_S3Location
### Properties
* **Bucket**: string (Required): An Amazon S3 bucket identifier. This is the name of the S3 bucket.
* **Key**: string (Required): The name of the zip file that contains the script files.
* **ObjectVersion**: string: The version of the file, if object versioning is turned on for the bucket. Amazon GameLift uses this information when retrieving files from your S3 bucket. To retrieve a specific version of the file, provide an object version. To retrieve the latest version of the file, do not set this parameter.
* **RoleArn**: string (Required): The Amazon Resource Name (ARN) for an IAM role that allows Amazon GameLift to access the S3 bucket.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

