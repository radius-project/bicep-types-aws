# AWS.GreengrassV2 @ default

## Resource AWS.GreengrassV2/ComponentVersion@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.GreengrassV2/ComponentVersionProperties](#awsgreengrassv2componentversionproperties): properties of the resource

## AWS.GreengrassV2/ComponentVersionProperties
### Properties
* **Arn**: string (ReadOnly)
* **ComponentName**: string (ReadOnly)
* **ComponentVersion**: string (ReadOnly)
* **InlineRecipe**: string (WriteOnly)
* **LambdaFunction**: [LambdaFunctionRecipeSource](#lambdafunctionrecipesource) (WriteOnly)
* **Tags**: [ComponentVersion_Tags](#componentversiontags)

## LambdaFunctionRecipeSource
### Properties
* **ComponentDependencies**: [ComponentVersion_ComponentDependencies](#componentversioncomponentdependencies)
* **ComponentLambdaParameters**: [LambdaExecutionParameters](#lambdaexecutionparameters)
* **ComponentName**: string
* **ComponentPlatforms**: [ComponentPlatform](#componentplatform)[]
* **ComponentVersion**: string
* **LambdaArn**: string

## ComponentVersion_ComponentDependencies
### Properties

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

## ComponentVersion_EnvironmentVariables
### Properties

## LambdaEventSource
### Properties
* **Topic**: string
* **Type**: string

## LambdaLinuxProcessParams
### Properties
* **ContainerParams**: [LambdaContainerParams](#lambdacontainerparams)
* **IsolationMode**: string

## LambdaContainerParams
### Properties
* **Devices**: [LambdaDeviceMount](#lambdadevicemount)[]
* **MemorySizeInKB**: int
* **MountROSysfs**: bool
* **Volumes**: [LambdaVolumeMount](#lambdavolumemount)[]

## LambdaDeviceMount
### Properties
* **AddGroupOwner**: [LambdaAddGroupOwnerBoolean](#lambdaaddgroupownerboolean)
* **Path**: [FilesystemPath](#filesystempath)
* **Permission**: [LambdaFilesystemPermission](#lambdafilesystempermission)

## LambdaAddGroupOwnerBoolean
### Properties

## FilesystemPath
### Properties

## LambdaFilesystemPermission
### Properties

## LambdaVolumeMount
### Properties
* **AddGroupOwner**: [LambdaAddGroupOwnerBoolean](#lambdaaddgroupownerboolean)
* **DestinationPath**: [FilesystemPath](#filesystempath)
* **Permission**: [LambdaFilesystemPermission](#lambdafilesystempermission)
* **SourcePath**: [FilesystemPath](#filesystempath)

## ComponentPlatform
### Properties
* **Attributes**: [ComponentVersion_Attributes](#componentversionattributes)
* **Name**: string

## ComponentVersion_Attributes
### Properties

## ComponentVersion_Tags
### Properties

