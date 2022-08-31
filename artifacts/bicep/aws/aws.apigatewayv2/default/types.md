# AWS.ApiGatewayV2 @ default

## Resource AWS.ApiGatewayV2/VpcLink@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ApiGatewayV2/VpcLinkProperties](#awsapigatewayv2vpclinkproperties): properties of the resource

## AWS.ApiGatewayV2/VpcLinkProperties
### Properties
* **Name**: string
* **SecurityGroupIds**: string[]
* **SubnetIds**: string[]
* **Tags**: [VpcLink_Tags](#vpclinktags): This resource type use map for Tags, suggest to use List of Tag
* **VpcLinkId**: string (ReadOnly)

## VpcLink_Tags
### Properties

