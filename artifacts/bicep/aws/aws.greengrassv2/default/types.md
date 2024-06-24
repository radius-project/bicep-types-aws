# AWS.GreengrassV2 @ default

## Resource AWS.GreengrassV2/ComponentVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GreengrassV2/ComponentVersionProperties](#awsgreengrassv2componentversionproperties) (Identifier): properties of the resource

## Resource AWS.GreengrassV2/Deployment@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.GreengrassV2/DeploymentProperties](#awsgreengrassv2deploymentproperties) (Required, Identifier): properties of the resource

## AWS.GreengrassV2/ComponentVersionProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ComponentName**: string (ReadOnly)
* **ComponentVersion**: string (ReadOnly)
* **InlineRecipe**: string (WriteOnly)
* **LambdaFunction**: [LambdaFunctionRecipeSource](#lambdafunctionrecipesource) (WriteOnly)
* **Tags**: [ComponentVersion_Tags](#componentversiontags)

## AWS.GreengrassV2/DeploymentProperties
### Properties
* **Components**: [Deployment_Components](#deploymentcomponents)
* **DeploymentId**: string (ReadOnly, Identifier)
* **DeploymentName**: string
* **DeploymentPolicies**: [DeploymentPolicies](#deploymentpolicies)
* **IotJobConfiguration**: [DeploymentIoTJobConfiguration](#deploymentiotjobconfiguration)
* **ParentTargetArn**: string
* **Tags**: [Deployment_Tags](#deploymenttags)
* **TargetArn**: string (Required)

## ComponentPlatform
### Properties
* **Attributes**: [ComponentVersion_Attributes](#componentversionattributes)
* **Name**: string

## ComponentVersion_Attributes
### Properties

## ComponentVersion_ComponentDependencies
### Properties

## ComponentVersion_EnvironmentVariables
### Properties

## ComponentVersion_Tags
### Properties

## Deployment_Components
### Properties

## Deployment_Tags
### Properties

## DeploymentComponentUpdatePolicy
### Properties
* **Action**: string
* **TimeoutInSeconds**: int

## DeploymentConfigurationValidationPolicy
### Properties
* **TimeoutInSeconds**: int

## DeploymentIoTJobConfiguration
### Properties
* **AbortConfig**: [IoTJobAbortConfig](#iotjobabortconfig)
* **JobExecutionsRolloutConfig**: [IoTJobExecutionsRolloutConfig](#iotjobexecutionsrolloutconfig)
* **TimeoutConfig**: [IoTJobTimeoutConfig](#iotjobtimeoutconfig)

## DeploymentPolicies
### Properties
* **ComponentUpdatePolicy**: [DeploymentComponentUpdatePolicy](#deploymentcomponentupdatepolicy)
* **ConfigurationValidationPolicy**: [DeploymentConfigurationValidationPolicy](#deploymentconfigurationvalidationpolicy)
* **FailureHandlingPolicy**: string

## IoTJobAbortConfig
### Properties
* **CriteriaList**: [IoTJobAbortCriteria](#iotjobabortcriteria)[] (Required)

## IoTJobAbortCriteria
### Properties
* **Action**: string (Required)
* **FailureType**: string (Required)
* **MinNumberOfExecutedThings**: int (Required)
* **ThresholdPercentage**: int (Required)

## IoTJobExecutionsRolloutConfig
### Properties
* **ExponentialRate**: [IoTJobExponentialRolloutRate](#iotjobexponentialrolloutrate)
* **MaximumPerMinute**: int

## IoTJobExponentialRolloutRate
### Properties
* **BaseRatePerMinute**: int (Required)
* **IncrementFactor**: int (Required)
* **RateIncreaseCriteria**: [IoTJobRateIncreaseCriteria](#iotjobrateincreasecriteria) (Required)

## IoTJobRateIncreaseCriteria
### Properties
* **NumberOfNotifiedThings**: int
* **NumberOfSucceededThings**: int

## IoTJobTimeoutConfig
### Properties
* **InProgressTimeoutInMinutes**: int

## LambdaContainerParams
### Properties
* **Devices**: [LambdaDeviceMount](#lambdadevicemount)[]
* **MemorySizeInKB**: int
* **MountROSysfs**: bool
* **Volumes**: [LambdaVolumeMount](#lambdavolumemount)[]

## LambdaDeviceMount
### Properties
* **AddGroupOwner**: bool
* **Path**: string
* **Permission**: string

## LambdaEventSource
### Properties
* **Topic**: string
* **Type**: string

## LambdaExecutionParameters
### Properties
* **EnvironmentVariables**: [ComponentVersion_EnvironmentVariables](#componentversionenvironmentvariables)
* **EventSources**: [LambdaEventSource](#lambdaeventsource)[]
* **ExecArgs**: string[]
* **InputPayloadEncodingType**: string
* **LinuxProcessParams**: [LambdaLinuxProcessParams](#lambdalinuxprocessparams)
* **MaxIdleTimeInSeconds**: int
* **MaxInstancesCount**: int
* **MaxQueueSize**: int
* **Pinned**: bool
* **StatusTimeoutInSeconds**: int
* **TimeoutInSeconds**: int

## LambdaFunctionRecipeSource
### Properties
* **ComponentDependencies**: [ComponentVersion_ComponentDependencies](#componentversioncomponentdependencies)
* **ComponentLambdaParameters**: [LambdaExecutionParameters](#lambdaexecutionparameters)
* **ComponentName**: string
* **ComponentPlatforms**: [ComponentPlatform](#componentplatform)[]
* **ComponentVersion**: string
* **LambdaArn**: string

## LambdaLinuxProcessParams
### Properties
* **ContainerParams**: [LambdaContainerParams](#lambdacontainerparams)
* **IsolationMode**: string

## LambdaVolumeMount
### Properties
* **AddGroupOwner**: bool
* **DestinationPath**: string
* **Permission**: string
* **SourcePath**: string

