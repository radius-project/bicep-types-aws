# AWS.IoTCoreDeviceAdvisor @ default

## Resource AWS.IoTCoreDeviceAdvisor/SuiteDefinition@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string: the resource name
* **properties**: [AWS.IoTCoreDeviceAdvisor/SuiteDefinitionProperties](#awsiotcoredeviceadvisorsuitedefinitionproperties) (Required): properties of the resource

## AWS.IoTCoreDeviceAdvisor/SuiteDefinitionProperties
### Properties
* **SuiteDefinitionArn**: string (ReadOnly): The Amazon Resource name for the suite definition.
* **SuiteDefinitionConfiguration**: [SuiteDefinition_SuiteDefinitionConfiguration](#suitedefinitionsuitedefinitionconfiguration) (Required)
* **SuiteDefinitionId**: string (ReadOnly, Identifier): The unique identifier for the suite definition.
* **SuiteDefinitionVersion**: string (ReadOnly): The suite definition version of a test suite.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## SuiteDefinition_SuiteDefinitionConfiguration
### Properties
* **DevicePermissionRoleArn**: string (Required)
* **Devices**: [DeviceUnderTest](#deviceundertest)[]
* **IntendedForQualification**: bool
* **RootGroup**: string (Required)
* **SuiteDefinitionName**: string

## DeviceUnderTest
### Properties
* **CertificateArn**: string
* **ThingArn**: string

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

