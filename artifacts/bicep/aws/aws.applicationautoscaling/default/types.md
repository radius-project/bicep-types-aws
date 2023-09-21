# AWS.ApplicationAutoScaling @ default

## Resource AWS.ApplicationAutoScaling/ScalableTarget@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ApplicationAutoScaling/ScalableTargetProperties](#awsapplicationautoscalingscalabletargetproperties) (Required): properties of the resource

## AWS.ApplicationAutoScaling/ScalableTargetProperties
### Properties
* **Id**: string (ReadOnly): This value can be returned by using the Ref function. Ref returns the Cloudformation generated ID of the resource in format - ResourceId|ScalableDimension|ServiceNamespace
* **MaxCapacity**: int (Required): The maximum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand
* **MinCapacity**: int (Required): The minimum value that you plan to scale in to. When a scaling policy is in effect, Application Auto Scaling can scale in (contract) as needed to the minimum capacity limit in response to changing demand
* **ResourceId**: string (Required, Identifier): The identifier of the resource associated with the scalable target
* **RoleARN**: string (WriteOnly): Specify the Amazon Resource Name (ARN) of an Identity and Access Management (IAM) role that allows Application Auto Scaling to modify the scalable target on your behalf. 
* **ScalableDimension**: string (Required, Identifier): The scalable dimension associated with the scalable target. This string consists of the service namespace, resource type, and scaling property
* **ScheduledActions**: [ScheduledAction](#scheduledaction)[]: The scheduled actions for the scalable target. Duplicates aren't allowed.
* **ServiceNamespace**: string (Required, Identifier): The namespace of the AWS service that provides the resource, or a custom-resource
* **SuspendedState**: [SuspendedState](#suspendedstate): An embedded object that contains attributes and attribute values that are used to suspend and resume automatic scaling. Setting the value of an attribute to true suspends the specified scaling activities. Setting it to false (default) resumes the specified scaling activities.

## ScheduledAction
### Properties
* **EndTime**: string
* **ScalableTargetAction**: [ScalableTargetAction](#scalabletargetaction)
* **Schedule**: string (Required)
* **ScheduledActionName**: string (Required)
* **StartTime**: string
* **Timezone**: string

## ScalableTargetAction
### Properties
* **MaxCapacity**: int
* **MinCapacity**: int

## SuspendedState
### Properties
* **DynamicScalingInSuspended**: bool
* **DynamicScalingOutSuspended**: bool
* **ScheduledScalingSuspended**: bool

