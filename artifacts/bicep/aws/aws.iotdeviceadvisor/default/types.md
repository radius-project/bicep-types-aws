# AWS.IoTDeviceAdvisor @ default

## Resource AWS.IoTDeviceAdvisor/SuiteRun@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTDeviceAdvisor/SuiteRunProperties](#awsiotdeviceadvisorsuiterunproperties) (Required, Identifier): properties of the resource

## AWS.IoTDeviceAdvisor/SuiteRunProperties
### Properties
* **StartTime**: string (ReadOnly): Date (in ISO 8601 format) when the test suite run started.
* **Status**: string (ReadOnly): Status of the suite run.
* **SuiteDefinitionId**: string (Required): Suite definition ID of the test suite.
* **SuiteDefinitionVersion**: string: Suite definition version of the test suite.
* **SuiteRunArn**: string (Identifier): The ARN of the suite run.
* **SuiteRunConfiguration**: [SuiteRunConfiguration](#suiterunconfiguration) (Required)
* **SuiteRunId**: string (ReadOnly): Suite run ID of the test suite run.
* **Tags**: [Tag](#tag)[]: Tags associated with the suite run.

## DeviceUnderTest
### Properties
* **CertificateArn**: string: Lists device's certificate ARN.
* **ThingArn**: string: Lists device's thing ARN.

## SuiteRunConfiguration
### Properties
* **ParallelRun**: bool: TRUE if multiple test suites run in parallel.
* **PrimaryDevice**: [DeviceUnderTest](#deviceundertest) (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

