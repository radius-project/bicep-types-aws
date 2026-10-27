# AWS.SupportAuthZ @ default

## Resource AWS.SupportAuthZ/SupportPermit@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.SupportAuthZ/SupportPermitProperties](#awssupportauthzsupportpermitproperties) (Required, Identifier): properties of the resource

## ActionSet
### Properties
* **Actions**: string[]: An explicit list of actions to grant.
* **AllActions**: [SupportPermit_AllActions](#supportpermitallactions): Grants all actions.

## AWS.SupportAuthZ/SupportPermitProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The Amazon Resource Name (ARN) of the support permit.
* **CreatedAt**: string (ReadOnly): The time at which the support permit was created.
* **Description**: string: An optional description of the support permit.
* **Name**: string (Required): The name of the support permit.
* **Permit**: [Permit](#permit) (Required)
* **PermitId**: string (ReadOnly): The service-generated identifier of the support permit (the resource segment of the ARN).
* **SigningKeyInfo**: [SigningKeyInfo](#signingkeyinfo) (Required)
* **Status**: string (ReadOnly): The current status of the support permit.
* **SupportCaseDisplayId**: string: The support case display identifier associated with the permit. When provided, the permit is linked to the specified AWS Support case.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs to apply to this resource.

## Condition
### Properties
* **AllowAfter**: string: The permit is active only after this time.
* **AllowBefore**: string: The permit is active only before this time.

## Permit
### Properties
* **Actions**: [ActionSet](#actionset) (Required)
* **Conditions**: [Condition](#condition)[]: Optional time-bound conditions (at most two).
* **Resources**: [ResourceSet](#resourceset) (Required)

## ResourceSet
### Properties
* **AllResourcesInRegion**: [SupportPermit_AllResourcesInRegion](#supportpermitallresourcesinregion): Applies to all resources in the region.
* **Resources**: string[]: An explicit list of resource ARNs.

## SigningKeyInfo
### Properties
* **KmsKey**: string (Required): The ARN of the KMS key used to sign permit grants.

## SupportPermit_AllActions
### Properties

## SupportPermit_AllResourcesInRegion
### Properties

## Tag
### Properties
* **Key**: string (Required): The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length.
* **Value**: string (Required): The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length.

