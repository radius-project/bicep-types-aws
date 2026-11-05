# AWS.DeviceFarm @ default

## Resource AWS.DeviceFarm/Device@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/DeviceProperties](#awsdevicefarmdeviceproperties) (Identifier): properties of the resource

## Resource AWS.DeviceFarm/DeviceInstance@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/DeviceInstanceProperties](#awsdevicefarmdeviceinstanceproperties) (Identifier): properties of the resource

## Resource AWS.DeviceFarm/DevicePool@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/DevicePoolProperties](#awsdevicefarmdevicepoolproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/InstanceProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/InstanceProfileProperties](#awsdevicefarminstanceprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/NetworkProfile@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/NetworkProfileProperties](#awsdevicefarmnetworkprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/Project@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/ProjectProperties](#awsdevicefarmprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/RemoteAccessSession@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/RemoteAccessSessionProperties](#awsdevicefarmremoteaccesssessionproperties) (Identifier): properties of the resource

## Resource AWS.DeviceFarm/Run@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/RunProperties](#awsdevicefarmrunproperties) (Identifier): properties of the resource

## Resource AWS.DeviceFarm/Suite@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/SuiteProperties](#awsdevicefarmsuiteproperties) (Identifier): properties of the resource

## Resource AWS.DeviceFarm/TestGridProject@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/TestGridProjectProperties](#awsdevicefarmtestgridprojectproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/Upload@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/UploadProperties](#awsdevicefarmuploadproperties) (Required, Identifier): properties of the resource

## Resource AWS.DeviceFarm/VPCEConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.DeviceFarm/VPCEConfigurationProperties](#awsdevicefarmvpceconfigurationproperties) (Required, Identifier): properties of the resource

## AWS.DeviceFarm/DeviceInstanceProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the device instance.
* **DeviceArn**: string (ReadOnly): The ARN of the device on which the device instance is running.
* **InstanceProfile**: [InstanceProfile](#instanceprofile) (ReadOnly)
* **Labels**: string[] (ReadOnly): An array of strings that describe the device instance.
* **Status**: string (ReadOnly): The status of the device instance.
* **Tags**: [Tag](#tag)[]: The tags assigned to the device instance.
* **Udid**: string (ReadOnly): The unique device identifier (UDID) of the device instance.

## AWS.DeviceFarm/DevicePoolProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **MaxDevices**: int
* **Name**: string (Required)
* **ProjectArn**: string (Required)
* **Rules**: [Rule](#rule)[] (Required)
* **Tags**: [Tag](#tag)[]

## AWS.DeviceFarm/DeviceProperties
### Properties
* **Arn**: string (Identifier): The device's ARN.
* **Cpu**: [CPU](#cpu) (ReadOnly)
* **FleetName**: string (ReadOnly): The name of the fleet to which this device belongs.
* **FleetType**: string (ReadOnly): The type of fleet to which this device belongs. Possible values are PRIVATE and PUBLIC.
* **FormFactor**: string (ReadOnly): The device's form factor.
* **HeapSize**: int (ReadOnly): The device's heap size, expressed in bytes.
* **Image**: string (ReadOnly): The device's image name.
* **Manufacturer**: string (ReadOnly): The device's manufacturer name.
* **Memory**: int (ReadOnly): The device's total memory size, expressed in bytes.
* **Model**: string (ReadOnly): The device's model name.
* **ModelId**: string (ReadOnly): The device's model ID.
* **Name**: string (ReadOnly): The device's display name.
* **Os**: string (ReadOnly): The device's operating system type.
* **Platform**: string (ReadOnly): The device's platform.
* **RemoteAccessEnabled**: bool (ReadOnly): Specifies whether remote access has been enabled for the specified device.
* **Resolution**: [Resolution](#resolution) (ReadOnly)
* **Tags**: [Device_Tags](#devicetags)[]: The tags attached to the device.

## AWS.DeviceFarm/InstanceProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **ExcludeAppPackagesFromCleanup**: string[]
* **Name**: string (Required)
* **PackageCleanup**: bool
* **RebootAfterUse**: bool
* **Tags**: [Tag](#tag)[]

## AWS.DeviceFarm/NetworkProfileProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **DownlinkBandwidthBits**: int
* **DownlinkDelayMs**: int
* **DownlinkJitterMs**: int
* **DownlinkLossPercent**: int
* **Name**: string (Required)
* **ProjectArn**: string (Required)
* **Tags**: [Tag](#tag)[]
* **UplinkBandwidthBits**: int
* **UplinkDelayMs**: int
* **UplinkJitterMs**: int
* **UplinkLossPercent**: int

## AWS.DeviceFarm/ProjectProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **DefaultJobTimeoutMinutes**: int
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]
* **ExecutionRoleArn**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig)

## AWS.DeviceFarm/RemoteAccessSessionProperties
### Properties
* **AppUpload**: string: The ARN of the app uploaded to Device Farm and installed on the device for the remote access session.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the remote access session.
* **BillingMethod**: string: The billing method of the remote access session.
* **Created**: string (ReadOnly): The date and time the remote access session was created.
* **DeviceArn**: string: The ARN of the device being remotely accessed by the session.
* **DeviceMinutes**: [DeviceMinutes](#deviceminutes) (ReadOnly)
* **DeviceProxy**: [DeviceProxy](#deviceproxy)
* **InstanceArn**: string: The ARN of the private device instance the remote access session runs on. Applies only to private device instances.
* **Message**: string (ReadOnly): A message about the remote access session.
* **Name**: string: The name of the remote access session.
* **ProjectArn**: string: The ARN of the project that contains the remote access session.
* **Result**: string (ReadOnly): The result of the remote access session.
* **SkipAppResign**: bool: When set to true, for private devices, Device Farm does not sign your app again.
* **Status**: string (ReadOnly): The status of the remote access session.
* **Tags**: [Tag](#tag)[]: The tags assigned to the remote access session.
* **VpcConfig**: [VpcConfig](#vpcconfig) (ReadOnly)

## AWS.DeviceFarm/RunProperties
### Properties
* **AppUpload**: string: An app to upload or that has been uploaded.
* **Arn**: string (Identifier): The run's ARN.
* **BillingMethod**: string: Specifies the billing method for the test run.
* **CompletedJobs**: int (ReadOnly): The total number of completed jobs.
* **Counters**: [Counters](#counters) (ReadOnly)
* **Created**: string (ReadOnly): When the run was created.
* **CustomerArtifactPaths**: [CustomerArtifactPaths](#customerartifactpaths)
* **DeviceMinutes**: [DeviceMinutes](#deviceminutes) (ReadOnly)
* **DevicePoolArn**: string: The ARN of the device pool for the run.
* **DeviceProxy**: [DeviceProxy](#deviceproxy)
* **DeviceSelectionResult**: [DeviceSelectionResult](#deviceselectionresult) (ReadOnly)
* **EnvironmentVariables**: [EnvironmentVariable](#environmentvariable)[]: Environment variables associated with the run.
* **EventCount**: int: For fuzz tests, this is the number of events, between 1 and 10000, that the UI fuzz test should perform.
* **ExecutionRoleArn**: string: An IAM role that the test host assumes for the run.
* **JobTimeoutMinutes**: int: The number of minutes the job executes before it times out.
* **Locale**: string: Information about the locale that is used for the run.
* **Location**: [Location](#location)
* **Name**: string: The run's name.
* **NetworkProfile**: [NetworkProfile](#networkprofile) (ReadOnly)
* **Platform**: string (ReadOnly): The run's platform.
* **ProjectArn**: string: The ARN of the project that contains this run.
* **Radios**: [Radios](#radios)
* **Result**: string (ReadOnly): The run's result.
* **Seed**: int (ReadOnly): For fuzz tests, this is a seed to use for randomizing the UI fuzz test. Using the same seed value between tests ensures identical event sequences.
* **SkipAppResign**: bool: When set to true, for private devices, Device Farm does not sign your app again.
* **Started**: string (ReadOnly): The run's start time.
* **Status**: string (ReadOnly): The run's status.
* **Stopped**: string (ReadOnly): The run's stop time.
* **Tags**: [Tag](#tag)[]: The tags assigned to the run.
* **TestSpecArn**: string: The ARN of the YAML-formatted test specification for the run.
* **TotalJobs**: int (ReadOnly): The total number of jobs for the run.
* **Type**: string: The run's type.
* **VpcConfig**: [VpcConfig](#vpcconfig) (ReadOnly)

## AWS.DeviceFarm/SuiteProperties
### Properties
* **Arn**: string (Identifier): The suite's ARN.
* **Counters**: [Counters](#counters) (ReadOnly)
* **Created**: string (ReadOnly): When the suite was created.
* **DeviceMinutes**: [DeviceMinutes](#deviceminutes) (ReadOnly)
* **JobArn**: string: The ARN of the job that contains this suite.
* **Message**: string (ReadOnly): A message about the suite's result.
* **Name**: string (ReadOnly): The suite's name.
* **Result**: string (ReadOnly): The suite's result.
* **Status**: string (ReadOnly): The suite's status.

## AWS.DeviceFarm/TestGridProjectProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **Description**: string
* **Name**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpcConfig**: [VpcConfig](#vpcconfig) (WriteOnly)

## AWS.DeviceFarm/UploadProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the upload.
* **Category**: string (ReadOnly): The upload's category.
* **ContentType**: string: The upload's content type (for example, application/octet-stream).
* **Created**: string (ReadOnly): When the upload was created.
* **Name**: string (Required): The upload's file name.
* **ProjectArn**: string (Required): The ARN of the project for the upload.
* **Status**: string (ReadOnly): The upload's status.
* **Type**: string (Required): The upload's type.

## AWS.DeviceFarm/VPCEConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier)
* **ServiceDnsName**: string (Required)
* **Tags**: [Tag](#tag)[]
* **VpceConfigurationDescription**: string
* **VpceConfigurationName**: string (Required)
* **VpceServiceName**: string (Required)

## Counters
### Properties
* **Errored**: int: The number of errored entities.
* **Failed**: int: The number of failed entities.
* **Passed**: int: The number of passed entities.
* **Skipped**: int: The number of skipped entities.
* **Stopped**: int: The number of stopped entities.
* **Total**: int: The total number of entities.
* **Warned**: int: The number of warned entities.

## Counters
### Properties
* **Errored**: int: The number of errored entities.
* **Failed**: int: The number of failed entities.
* **Passed**: int: The number of passed entities.
* **Skipped**: int: The number of skipped entities.
* **Stopped**: int: The number of stopped entities.
* **Total**: int: The total number of entities.
* **Warned**: int: The number of warned entities.

## CPU
### Properties
* **Architecture**: string: The CPU's architecture (for example, x86 or ARM).
* **Clock**: int: The clock speed of the device's CPU.
* **Frequency**: string: The CPU's frequency.

## CustomerArtifactPaths
### Properties
* **AndroidPaths**: string[]: Comma-separated list of paths on the Android device where the artifacts generated by the customer's tests are pulled from.
* **DeviceHostPaths**: string[]: Comma-separated list of paths in the test execution environment where the artifacts generated by the customer's tests are pulled from.
* **IosPaths**: string[]: Comma-separated list of paths on the iOS device where the artifacts generated by the customer's tests are pulled from.

## Device_Tags
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## DeviceFilter
### Properties
* **Attribute**: string (Required): The aspect of a device such as platform or model used as the selection criteria in a device filter.
* **Operator**: string (Required): Specifies how Device Farm compares the filter's attribute to the value.
* **Values**: string[] (Required): An array of one or more filter values used in a device filter.

## DeviceMinutes
### Properties
* **Metered**: int: The sum of metered device minutes used by the remote access session.
* **Total**: int: The total number of device minutes used by the remote access session.
* **Unmetered**: int: The sum of unmetered device minutes used by the remote access session.

## DeviceMinutes
### Properties
* **Metered**: int: The sum of metered minutes used by the resource to run tests.
* **Total**: int: The total minutes used by the resource to run tests.
* **Unmetered**: int: The sum of unmetered minutes used by the resource to run tests.

## DeviceMinutes
### Properties
* **Metered**: int: The sum of metered minutes used by the resource to run tests.
* **Total**: int: The total minutes used by the resource to run tests.
* **Unmetered**: int: The sum of unmetered minutes used by the resource to run tests.

## DeviceProxy
### Properties
* **Host**: string (Required): The host name or IP address of the http/https proxy.
* **Port**: int (Required): The port number on which the http/https proxy is listening.

## DeviceProxy
### Properties
* **Host**: string (Required): Hostname or IPv4 address of the proxy.
* **Port**: int (Required): The port number on which the http/s proxy is listening.

## DeviceSelectionResult
### Properties
* **Filters**: [DeviceFilter](#devicefilter)[]: The filters in a device selection result.
* **MatchedDevicesCount**: int: The number of devices that matched the device filter selection criteria.
* **MaxDevices**: int: The maximum number of devices to be selected by a device filter and included in a test run.

## EnvironmentVariable
### Properties
* **Name**: string (Required)
* **Value**: string (Required)

## EnvironmentVariable
### Properties
* **Name**: string (Required): The name of the environment variable.
* **Value**: string (Required): The value of the environment variable.

## InstanceProfile
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the instance profile.
* **Description**: string: The description of the instance profile.
* **ExcludeAppPackagesFromCleanup**: string[]: An array of app package names to exclude from cleanup.
* **Name**: string: The name of the instance profile.
* **PackageCleanup**: bool: When set to true, Device Farm removes app packages after a test run.
* **RebootAfterUse**: bool: When set to true, Device Farm reboots the instance after a test run.

## Location
### Properties
* **Latitude**: int (Required): The latitude.
* **Longitude**: int (Required): The longitude.

## NetworkProfile
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the network profile.
* **Description**: string: The description of the network profile.
* **DownlinkBandwidthBits**: int: The data throughput rate in bits per second, as an integer from 0 to 104857600.
* **DownlinkDelayMs**: int: Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
* **DownlinkJitterMs**: int: Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
* **DownlinkLossPercent**: int: Proportion of received packets that fail to arrive from 0 to 100 percent.
* **Name**: string: The name of the network profile.
* **Type**: string: The type of network profile. Valid values are listed here.
* **UplinkBandwidthBits**: int: The data throughput rate in bits per second, as an integer from 0 to 104857600.
* **UplinkDelayMs**: int: Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.
* **UplinkJitterMs**: int: Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.
* **UplinkLossPercent**: int: Proportion of transmitted packets that fail to arrive from 0 to 100 percent.

## Radios
### Properties
* **Bluetooth**: bool: True if Bluetooth is enabled at the beginning of the test. Otherwise, false.
* **Gps**: bool: True if GPS is enabled at the beginning of the test. Otherwise, false.
* **Nfc**: bool: True if NFC is enabled at the beginning of the test. Otherwise, false.
* **Wifi**: bool: True if Wi-Fi is enabled at the beginning of the test. Otherwise, false.

## Resolution
### Properties
* **Height**: int: The screen resolution's height, expressed in pixels.
* **Width**: int: The screen resolution's width, expressed in pixels.

## Rule
### Properties
* **Attribute**: string: The rule's stringified attribute.
* **Operator**: string: Specifies how Device Farm compares the rule's attribute to the value.
* **Value**: string: The rule's value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): An array of security group Ids in your Amazon VPC
* **SubnetIds**: string[] (Required): A array of subnet IDs in your Amazon VPC.
* **VpcId**: string (Required): The ID of the Amazon VPC

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): The security group IDs attached to the session.
* **SubnetIds**: string[] (Required): The subnet IDs attached to the session.
* **VpcId**: string (Required): The ID of the VPC attached to the session.

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): A list of VPC security group IDs.
* **SubnetIds**: string[] (Required): A subnet ID from the VPC.
* **VpcId**: string (Required): The ID of the Amazon VPC.

## VpcConfig
### Properties
* **SecurityGroupIds**: string[] (Required): A list of VPC security group IDs in your Amazon VPC.
* **SubnetIds**: string[] (Required): A list of VPC subnet IDs in your Amazon VPC.
* **VpcId**: string (Required)

