# AWS.OpenSearchServerless @ default

## Resource AWS.OpenSearchServerless/AccessPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/AccessPolicyProperties](#awsopensearchserverlessaccesspolicyproperties) (Required): properties of the resource

## Resource AWS.OpenSearchServerless/Collection@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/CollectionProperties](#awsopensearchserverlesscollectionproperties) (Required): properties of the resource

## Resource AWS.OpenSearchServerless/LifecyclePolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/LifecyclePolicyProperties](#awsopensearchserverlesslifecyclepolicyproperties) (Required): properties of the resource

## Resource AWS.OpenSearchServerless/SecurityConfig@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/SecurityConfigProperties](#awsopensearchserverlesssecurityconfigproperties): properties of the resource

## Resource AWS.OpenSearchServerless/SecurityPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/SecurityPolicyProperties](#awsopensearchserverlesssecuritypolicyproperties) (Required): properties of the resource

## Resource AWS.OpenSearchServerless/VpcEndpoint@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.OpenSearchServerless/VpcEndpointProperties](#awsopensearchserverlessvpcendpointproperties) (Required): properties of the resource

## AWS.OpenSearchServerless/AccessPolicyProperties
### Properties
* **Description**: string: The description of the policy
* **Name**: string (Required, Identifier): The name of the policy
* **Policy**: string (Required): The JSON policy document that is the content for the policy
* **Type**: string (Required, Identifier)

## AWS.OpenSearchServerless/CollectionProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the collection.
* **CollectionEndpoint**: string (ReadOnly): The endpoint for the collection.
* **DashboardEndpoint**: string (ReadOnly): The OpenSearch Dashboards endpoint for the collection.
* **Description**: string: The description of the collection
* **Id**: string (ReadOnly, Identifier): The identifier of the collection
* **Name**: string (Required): The name of the collection.

The name must meet the following criteria:
Unique to your account and AWS Region
Starts with a lowercase letter
Contains only lowercase letters a-z, the numbers 0-9 and the hyphen (-)
Contains between 3 and 32 characters

* **StandbyReplicas**: string
* **Tags**: [Tag](#tag)[] (WriteOnly): List of tags to be added to the resource
* **Type**: string

## Tag
### Properties
* **Key**: string (Required): The key in the key-value pair
* **Value**: string (Required): The value in the key-value pair

## AWS.OpenSearchServerless/LifecyclePolicyProperties
### Properties
* **Description**: string: The description of the policy
* **Name**: string (Required, Identifier): The name of the policy
* **Policy**: string (Required): The JSON policy document that is the content for the policy
* **Type**: string (Required, Identifier)

## AWS.OpenSearchServerless/SecurityConfigProperties
### Properties
* **Description**: string: Security config description
* **Id**: string (ReadOnly, Identifier): The identifier of the security config
* **Name**: string (WriteOnly): The friendly name of the security config
* **SamlOptions**: [SamlConfigOptions](#samlconfigoptions)
* **Type**: string

## SamlConfigOptions
### Properties
* **GroupAttribute**: string: Group attribute for this saml integration
* **Metadata**: string (Required): The XML saml provider metadata document that you want to use
* **SessionTimeout**: int: Defines the session timeout in minutes
* **UserAttribute**: string: Custom attribute for this saml integration

## AWS.OpenSearchServerless/SecurityPolicyProperties
### Properties
* **Description**: string: The description of the policy
* **Name**: string (Required, Identifier): The name of the policy
* **Policy**: string (Required): The JSON policy document that is the content for the policy
* **Type**: string (Required, Identifier)

## AWS.OpenSearchServerless/VpcEndpointProperties
### Properties
* **Id**: string (ReadOnly, Identifier): The identifier of the VPC Endpoint
* **Name**: string (Required): The name of the VPC Endpoint
* **SecurityGroupIds**: string[]: The ID of one or more security groups to associate with the endpoint network interface
* **SubnetIds**: string[] (Required): The ID of one or more subnets in which to create an endpoint network interface
* **VpcId**: string (Required): The ID of the VPC in which the endpoint will be used.

