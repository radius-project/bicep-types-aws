# AWS.EMR @ default

## Resource AWS.EMR/Studio@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EMR/StudioProperties](#awsemrstudioproperties) (Required): properties of the resource

## Resource AWS.EMR/StudioSessionMapping@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.EMR/StudioSessionMappingProperties](#awsemrstudiosessionmappingproperties) (Required): properties of the resource

## AWS.EMR/StudioProperties
### Properties
* **Arn**: [Arn](#arn) (ReadOnly): The Amazon Resource Name (ARN) of the EMR Studio.
* **AuthMode**: string (Required): Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM. Amazon EMR Studio currently only supports SSO authentication.
* **DefaultS3Location**: string (Required): The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A Studio user can select an alternative Amazon S3 location when creating a Workspace.
* **Description**: string: A detailed description of the Studio.
* **EngineSecurityGroupId**: string (Required): The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by VpcId.
* **IdpAuthUrl**: string: Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
* **IdpRelayStateParameterName**: string: The name of relay state parameter for external Identity Provider.
* **Name**: string (Required): A descriptive name for the Amazon EMR Studio.
* **ServiceRole**: [Arn](#arn) (Required): The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a way for Amazon EMR Studio to interoperate with other AWS services.
* **StudioId**: string (ReadOnly): The ID of the EMR Studio.
* **SubnetIds**: [SubnetId](#subnetid)[] (Required): A list of up to 5 subnet IDs to associate with the Studio. The subnets must belong to the VPC specified by VpcId. Studio users can create a Workspace in any of the specified subnets.
* **Tags**: [Tags](#tags): A list of tags to associate with the Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
* **Url**: string (ReadOnly): The unique Studio access URL.
* **UserRole**: [Arn](#arn): The IAM user role that will be assumed by users and groups logged in to a Studio. The permissions attached to this IAM role can be scoped down for each user or group using session policies.
* **VpcId**: string (Required): The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
* **WorkspaceSecurityGroupId**: string (Required): The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by VpcId.

## Arn
### Properties

## SubnetId
### Properties

## Tags
### Properties

## AWS.EMR/StudioSessionMappingProperties
### Properties
* **IdentityName**: string (Required): The name of the user or group. For more information, see UserName and DisplayName in the AWS SSO Identity Store API Reference. Either IdentityName or IdentityId must be specified.
* **IdentityType**: string (Required): Specifies whether the identity to map to the Studio is a user or a group.
* **SessionPolicyArn**: [IamPolicyArn](#iampolicyarn) (Required): The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. Session policies refine Studio user permissions without the need to use multiple IAM user roles.
* **StudioId**: string (Required): The ID of the Amazon EMR Studio to which the user or group will be mapped.

## IamPolicyArn
### Properties

