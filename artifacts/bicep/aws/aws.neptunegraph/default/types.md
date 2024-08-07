# AWS.NeptuneGraph @ default

## Resource AWS.NeptuneGraph/Graph@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NeptuneGraph/GraphProperties](#awsneptunegraphgraphproperties) (Required, Identifier): properties of the resource

## Resource AWS.NeptuneGraph/PrivateGraphEndpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.NeptuneGraph/PrivateGraphEndpointProperties](#awsneptunegraphprivategraphendpointproperties) (Required, Identifier): properties of the resource

## AWS.NeptuneGraph/GraphProperties
### Properties
* **DeletionProtection**: bool: Value that indicates whether the Graph has deletion protection enabled. The graph can't be deleted when deletion protection is enabled.

_Default_: If not specified, the default value is true.
* **Endpoint**: string (ReadOnly): The connection endpoint for the graph. For example: `g-12a3bcdef4.us-east-1.neptune-graph.amazonaws.com`
* **GraphArn**: string (ReadOnly): Graph resource ARN
* **GraphId**: string (ReadOnly, Identifier): The auto-generated id assigned by the service.
* **GraphName**: string: Contains a user-supplied name for the Graph. 

If you don't specify a name, we generate a unique Graph Name using a combination of Stack Name and a UUID comprising of 4 characters.

_Important_: If you specify a name, you cannot perform updates that require replacement of this resource. You can perform updates that require no or some interruption. If you must replace the resource, specify a new name.
* **ProvisionedMemory**: int (Required): Memory for the Graph.
* **PublicConnectivity**: bool: Specifies whether the Graph can be reached over the internet. Access to all graphs requires IAM authentication.

When the Graph is publicly reachable, its Domain Name System (DNS) endpoint resolves to the public IP address from the internet.

When the Graph isn't publicly reachable, you need to create a PrivateGraphEndpoint in a given VPC to ensure the DNS name resolves to a private IP address that is reachable from the VPC.

_Default_: If not specified, the default value is false.
* **ReplicaCount**: int: Specifies the number of replicas you want when finished. All replicas will be provisioned in different availability zones.

Replica Count should always be less than or equal to 2.

_Default_: If not specified, the default value is 1.
* **Tags**: [Tag](#tag)[]: The tags associated with this graph.
* **VectorSearchConfiguration**: [VectorSearchConfiguration](#vectorsearchconfiguration): Vector Search Configuration

## AWS.NeptuneGraph/PrivateGraphEndpointProperties
### Properties
* **GraphIdentifier**: string (Required, WriteOnly): The auto-generated Graph Id assigned by the service.
* **PrivateGraphEndpointIdentifier**: string (ReadOnly, Identifier): PrivateGraphEndpoint resource identifier generated by concatenating the associated GraphIdentifier and VpcId with an underscore separator.

 For example, if GraphIdentifier is `g-12a3bcdef4` and VpcId is `vpc-0a12bc34567de8f90`, the generated PrivateGraphEndpointIdentifier will be `g-12a3bcdef4_vpc-0a12bc34567de8f90`
* **SecurityGroupIds**: string[] (WriteOnly): The security group Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.
* **SubnetIds**: string[]: The subnet Ids associated with the VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.
* **VpcEndpointId**: string (ReadOnly): VPC endpoint that provides a private connection between the Graph and specified VPC.
* **VpcId**: string (Required): The VPC where you want the private graph endpoint to be created, ie, the graph will be reachable from within the VPC.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 
* **Value**: string: The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

## VectorSearchConfiguration
### Properties
* **VectorSearchDimension**: int (Required): The vector search dimension

