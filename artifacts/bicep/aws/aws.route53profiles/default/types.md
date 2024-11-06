# AWS.Route53Profiles @ default

## Resource AWS.Route53Profiles/Profile@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Profiles/ProfileProperties](#awsroute53profilesprofileproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Profiles/ProfileAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Profiles/ProfileAssociationProperties](#awsroute53profilesprofileassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.Route53Profiles/ProfileResourceAssociation@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Route53Profiles/ProfileResourceAssociationProperties](#awsroute53profilesprofileresourceassociationproperties) (Required, Identifier): properties of the resource

## AWS.Route53Profiles/ProfileAssociationProperties
### Properties
* **Arn**: string (WriteOnly): The Amazon Resource Name (ARN) of the profile association.
* **Id**: string (ReadOnly, Identifier): Primary Identifier for  Profile Association
* **Name**: string (Required): The name of an association between a  Profile and a VPC.
* **ProfileId**: string (Required): The ID of the  profile that you associated with the resource that is specified by ResourceId.
* **ResourceId**: string (Required): The resource that you associated the  profile with.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Route53Profiles/ProfileProperties
### Properties
* **Arn**: string (ReadOnly): The Amazon Resource Name (ARN) of the resolver profile.
* **ClientToken**: string (ReadOnly): The id of the creator request
* **Id**: string (ReadOnly, Identifier): The ID of the profile.
* **Name**: string (Required): The name of the profile.
* **Tags**: [Tag](#tag)[]: An array of key-value pairs to apply to this resource.

## AWS.Route53Profiles/ProfileResourceAssociationProperties
### Properties
* **Id**: string (ReadOnly, Identifier): Primary Identifier for  Profile Resource Association
* **Name**: string (Required): The name of an association between the  Profile and resource.
* **ProfileId**: string (Required): The ID of the  profile that you associated the resource to that is specified by ResourceArn.
* **ResourceArn**: string (Required): The arn of the resource that you associated to the  Profile.
* **ResourceProperties**: string: A JSON-formatted string with key-value pairs specifying the properties of the associated resource.
* **ResourceType**: string (ReadOnly): The type of the resource associated to the  Profile.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

