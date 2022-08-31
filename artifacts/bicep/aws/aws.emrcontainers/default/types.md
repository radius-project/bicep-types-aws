# AWS.EMRContainers @ default

## Resource AWS.EMRContainers/VirtualCluster@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EMRContainers/VirtualClusterProperties](#awsemrcontainersvirtualclusterproperties): properties of the resource

## AWS.EMRContainers/VirtualClusterProperties
### Properties
* **Arn**: string (ReadOnly)
* **ContainerProvider**: [ContainerProvider](#containerprovider): Container provider of the virtual cluster.
* **Id**: string (ReadOnly): Id of the virtual cluster.
* **Name**: string: Name of the virtual cluster.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this virtual cluster.

## ContainerProvider
### Properties
* **Id**: string: The ID of the container cluster
* **Info**: [ContainerInfo](#containerinfo)
* **Type**: string: The type of the container provider

## ContainerInfo
### Properties
* **EksInfo**: [EksInfo](#eksinfo)

## EksInfo
### Properties
* **Namespace**: string

## Tag
### Properties
* **Key**: string: The key name of the tag. You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string: The value for the tag. You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

