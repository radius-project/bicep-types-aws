# AWS.CodeDeploy @ default

## Resource AWS.CodeDeploy/Application@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeDeploy/ApplicationProperties](#awscodedeployapplicationproperties) (Identifier): properties of the resource

## Resource AWS.CodeDeploy/DeploymentGroup@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.CodeDeploy/DeploymentGroupProperties](#awscodedeploydeploymentgroupproperties) (Required, Identifier): properties of the resource

## Alarm
### Properties
* **Name**: string: The name of the alarm. Maximum length is 255 characters. Each alarm name can be used only once in a list of alarms.

## AlarmConfiguration
### Properties
* **Alarms**: [Alarm](#alarm)[]: A list of alarms configured for the deployment or deployment group. A maximum of 10 alarms can be added.
* **Enabled**: bool: Indicates whether the alarm configuration is enabled.
* **IgnorePollAlarmFailure**: bool: Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.

## AutoRollbackConfiguration
### Properties
* **Enabled**: bool: Indicates whether a defined automatic rollback configuration is currently enabled.
* **Events**: string[]: The event type or types that trigger a rollback.

## AWS.CodeDeploy/ApplicationProperties
### Properties
* **ApplicationName**: string (Identifier): A name for the application. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the application name.
* **ComputePlatform**: string: The compute platform that CodeDeploy deploys the application to.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to CodeDeploy applications to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define. 

## AWS.CodeDeploy/DeploymentGroupProperties
### Properties
* **AlarmConfiguration**: [AlarmConfiguration](#alarmconfiguration): Information about the Amazon CloudWatch alarms that are associated with the deployment group.
* **ApplicationName**: string (Required, Identifier): The name of an existing CodeDeploy application to associate this deployment group with.
* **AutoRollbackConfiguration**: [AutoRollbackConfiguration](#autorollbackconfiguration): Information about the automatic rollback configuration that is associated with the deployment group. If you specify this property, don't specify the Deployment property.
* **AutoScalingGroups**: string[]: A list of associated Auto Scaling groups that CodeDeploy automatically deploys revisions to when new instances are created. Duplicates are not allowed.
* **BlueGreenDeploymentConfiguration**: [BlueGreenDeploymentConfiguration](#bluegreendeploymentconfiguration): Information about blue/green deployment options for a deployment group.
* **Deployment**: [Deployment](#deployment): The application revision to deploy to this deployment group. If you specify this property, your target application revision is deployed as soon as the provisioning process is complete. If you specify this property, don't specify the AutoRollbackConfiguration property.
* **DeploymentConfigName**: string: A deployment configuration name or a predefined configuration name. With predefined configurations, you can deploy application revisions to one instance at a time (CodeDeployDefault.OneAtATime), half of the instances at a time (CodeDeployDefault.HalfAtATime), or all the instances at once (CodeDeployDefault.AllAtOnce).
* **DeploymentGroupName**: string (Identifier): A name for the deployment group. If you don't specify a name, AWS CloudFormation generates a unique physical ID and uses that ID for the deployment group name.
* **DeploymentStyle**: [DeploymentStyle](#deploymentstyle): Attributes that determine the type of deployment to run and whether to route deployment traffic behind a load balancer. If you specify this property with a blue/green deployment type, don't specify the AutoScalingGroups, LoadBalancerInfo, or Deployment properties.
* **Ec2TagFilters**: [EC2TagFilter](#ec2tagfilter)[]: The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify EC2TagFilters or Ec2TagSet, but not both.
* **Ec2TagSet**: [EC2TagSet](#ec2tagset): Information about groups of tags applied to Amazon EC2 instances. Use when the deployment group includes only Amazon EC2 instances identified by all the tag groups. Cannot be used in the same call as ec2TagFilter.
* **ECSServices**: [ECSService](#ecsservice)[]: The target Amazon ECS services in the deployment group. This applies only to deployment groups that use the Amazon ECS compute platform. A target Amazon ECS service is specified as an Amazon ECS cluster and service name pair using the format <clustername>:<servicename>.
* **LoadBalancerInfo**: [LoadBalancerInfo](#loadbalancerinfo): Information about the load balancer to use in a deployment.
* **OnPremisesInstanceTagFilters**: [TagFilter](#tagfilter)[]: The on-premises instance tags already applied to on-premises instances that you want to include in the deployment group. CodeDeploy includes all on-premises instances identified by any of the tags you specify in this deployment group. Duplicates are not allowed. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.
* **OnPremisesTagSet**: [OnPremisesTagSet](#onpremisestagset): Information about groups of tags applied to on-premises instances. The deployment group includes only on-premises instances identified by all the tag groups. You can specify OnPremisesInstanceTagFilters or OnPremisesInstanceTagSet, but not both.
* **OutdatedInstancesStrategy**: string: Indicates what happens when new Amazon EC2 instances are launched mid-deployment and do not receive the deployed application revision. If this option is set to UPDATE or is unspecified, CodeDeploy initiates one or more 'auto-update outdated instances' deployments to apply the deployed application revision to the new Amazon EC2 instances. If this option is set to IGNORE, CodeDeploy does not initiate a deployment to update the new Amazon EC2 instances. This may result in instances having different revisions.
* **ServiceRoleArn**: string (Required): A service role Amazon Resource Name (ARN) that grants CodeDeploy permission to make calls to AWS services on your behalf. For more information, see 'Create a Service Role for AWS CodeDeploy' in the AWS CodeDeploy User Guide.
* **Tags**: [Tag](#tag)[]: The metadata that you apply to CodeDeploy deployment groups to help you organize and categorize them. Each tag consists of a key and an optional value, both of which you define.
* **TerminationHookEnabled**: bool: Indicates whether the deployment group was configured to have CodeDeploy install a termination hook into an Auto Scaling group.
* **TriggerConfigurations**: [TriggerConfig](#triggerconfig)[]: Information about triggers associated with the deployment group. Duplicates are not allowed.

## BlueGreenDeploymentConfiguration
### Properties
* **DeploymentReadyOption**: [DeploymentReadyOption](#deploymentreadyoption): Information about the action to take when newly provisioned instances are ready to receive traffic in a blue/green deployment.
* **GreenFleetProvisioningOption**: [GreenFleetProvisioningOption](#greenfleetprovisioningoption): Information about how instances are provisioned for a replacement environment in a blue/green deployment.
* **TerminateBlueInstancesOnDeploymentSuccess**: [BlueInstanceTerminationOption](#blueinstanceterminationoption): Information about whether to terminate instances in the original fleet during a blue/green deployment.

## BlueInstanceTerminationOption
### Properties
* **Action**: string: The action to take on instances in the original environment after a successful blue/green deployment.
* **TerminationWaitTimeInMinutes**: int: For an Amazon EC2 deployment, the number of minutes to wait after a successful blue/green deployment before terminating instances from the original environment. For an Amazon ECS deployment, the number of minutes before deleting the original (blue) task set. During an Amazon ECS deployment, CodeDeploy shifts traffic from the original (blue) task set to a replacement (green) task set. The maximum setting is 2880 minutes (2 days).

## Deployment
### Properties
* **Description**: string: A description of the deployment.
* **IgnoreApplicationStopFailures**: bool: If true, then if an ApplicationStop, BeforeBlockTraffic, or AfterBlockTraffic deployment lifecycle event to an instance fails, then the deployment continues to the next deployment lifecycle event. If false or not specified, then if a lifecycle event fails during a deployment to an instance, that deployment fails. If deployment to that instance is part of an overall deployment and the number of healthy hosts is not less than the minimum number of healthy hosts, then a deployment to the next instance is attempted.
* **Revision**: [RevisionLocation](#revisionlocation) (Required): Information about the location of stored application artifacts and the service from which to retrieve them.

## DeploymentReadyOption
### Properties
* **ActionOnTimeout**: string: Information about when to reroute traffic from an original environment to a replacement environment in a blue/green deployment. CONTINUE_DEPLOYMENT: Register new instances with the load balancer immediately after the new application revision is installed on the instances in the replacement environment. STOP_DEPLOYMENT: Do not register new instances with a load balancer unless traffic rerouting is started using ContinueDeployment . If traffic rerouting is not started before the end of the specified wait period, the deployment status is changed to Stopped.
* **WaitTimeInMinutes**: int: The number of minutes to wait before the status of a blue/green deployment is changed to Stopped if rerouting is not started manually. Applies only to the STOP_DEPLOYMENT option for actionOnTimeout.

## DeploymentStyle
### Properties
* **DeploymentOption**: string: Indicates whether to route deployment traffic behind a load balancer.
* **DeploymentType**: string: Indicates whether to run an in-place or blue/green deployment.

## EC2TagFilter
### Properties
* **Key**: string: The tag filter key.
* **Type**: string: The tag filter type.
* **Value**: string: The tag filter value.

## EC2TagSet
### Properties
* **Ec2TagSetList**: [EC2TagSetListObject](#ec2tagsetlistobject)[]: The Amazon EC2 tags that are already applied to Amazon EC2 instances that you want to include in the deployment group. CodeDeploy includes all Amazon EC2 instances identified by any of the tags you specify in this deployment group.

## EC2TagSetListObject
### Properties
* **Ec2TagGroup**: [EC2TagFilter](#ec2tagfilter)[]: A list that contains other lists of Amazon EC2 instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

## ECSService
### Properties
* **ClusterName**: string (Required): The name of the cluster that the Amazon ECS service is associated with.
* **ServiceName**: string (Required): The name of the target Amazon ECS service.

## ELBInfo
### Properties
* **Name**: string: For blue/green deployments, the name of the load balancer that is used to route traffic from original instances to replacement instances in a blue/green deployment. For in-place deployments, the name of the load balancer that instances are deregistered from so they are not serving traffic during a deployment, and then re-registered with after the deployment is complete.

## GitHubLocation
### Properties
* **CommitId**: string (Required): The SHA1 commit ID of the GitHub commit that represents the bundled artifacts for the application revision.
* **Repository**: string (Required): The GitHub account and repository pair that stores the application revision to be deployed.

## GreenFleetProvisioningOption
### Properties
* **Action**: string: The method used to add instances to a replacement environment.

## LoadBalancerInfo
### Properties
* **ElbInfoList**: [ELBInfo](#elbinfo)[]: An array that contains information about the load balancers to use for load balancing in a deployment. If you're using Classic Load Balancers, specify those load balancers in this array.
* **TargetGroupInfoList**: [TargetGroupInfo](#targetgroupinfo)[]: An array that contains information about the target groups to use for load balancing in a deployment. If you're using Application Load Balancers and Network Load Balancers, specify their associated target groups in this array.
* **TargetGroupPairInfoList**: [TargetGroupPairInfo](#targetgrouppairinfo)[]: The target group pair information. This is an array of TargeGroupPairInfo objects with a maximum size of one.

## OnPremisesTagSet
### Properties
* **OnPremisesTagSetList**: [OnPremisesTagSetListObject](#onpremisestagsetlistobject)[]: A list that contains other lists of on-premises instance tag groups. For an instance to be included in the deployment group, it must be identified by all of the tag groups in the list.

## OnPremisesTagSetListObject
### Properties
* **OnPremisesTagGroup**: [TagFilter](#tagfilter)[]: Information about groups of on-premises instance tags.

## RevisionLocation
### Properties
* **GitHubLocation**: [GitHubLocation](#githublocation)
* **RevisionType**: string: The type of application revision.
* **S3Location**: [S3Location](#s3location)

## S3Location
### Properties
* **Bucket**: string (Required): The name of the Amazon S3 bucket where the application revision is stored.
* **BundleType**: string: The file type of the application revision.
* **ETag**: string: The ETag of the Amazon S3 object that represents the bundled artifacts for the application revision. If the ETag is not specified as an input parameter, ETag validation of the object is skipped.
* **Key**: string (Required): The name of the Amazon S3 object that represents the bundled artifacts for the application revision.
* **Version**: string: A specific version of the Amazon S3 object that represents the bundled artifacts for the application revision. If the version is not specified, the system uses the most recent version by default.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag's key.
* **Value**: string (Required): The tag's value.

## TagFilter
### Properties
* **Key**: string: The on-premises instance tag filter key.
* **Type**: string: The on-premises instance tag filter type
* **Value**: string: The on-premises instance tag filter value.

## TargetGroupInfo
### Properties
* **Name**: string: For blue/green deployments, the name of the target group that instances in the original environment are deregistered from, and instances in the replacement environment registered with. For in-place deployments, the name of the target group that instances are deregistered from, so they are not serving traffic during a deployment, and then re-registered with after the deployment completes. No duplicates allowed.

## TargetGroupPairInfo
### Properties
* **ProdTrafficRoute**: [TrafficRoute](#trafficroute): The path used by a load balancer to route production traffic when an Amazon ECS deployment is complete.
* **TargetGroups**: [TargetGroupInfo](#targetgroupinfo)[]: One pair of target groups. One is associated with the original task set. The second is associated with the task set that serves traffic after the deployment is complete.
* **TestTrafficRoute**: [TrafficRoute](#trafficroute): An optional path used by a load balancer to route test traffic after an Amazon ECS deployment. Validation can occur while test traffic is served during a deployment.

## TrafficRoute
### Properties
* **ListenerArns**: string[]: The Amazon Resource Name (ARN) of one listener. The listener identifies the route between a target group and a load balancer. This is an array of strings with a maximum size of one.

## TriggerConfig
### Properties
* **TriggerEvents**: string[]: The event type or types that trigger notifications.
* **TriggerName**: string: The name of the notification trigger.
* **TriggerTargetArn**: string: The Amazon Resource Name (ARN) of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.

