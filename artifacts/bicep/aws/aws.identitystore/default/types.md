# AWS.IdentityStore @ default

## Resource AWS.IdentityStore/AllGroupMemberships@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IdentityStore/AllGroupMembershipsProperties](#awsidentitystoreallgroupmembershipsproperties) (Identifier): properties of the resource

## Resource AWS.IdentityStore/Group@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IdentityStore/GroupProperties](#awsidentitystoregroupproperties) (Required, Identifier): properties of the resource

## Resource AWS.IdentityStore/GroupMembership@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IdentityStore/GroupMembershipProperties](#awsidentitystoregroupmembershipproperties) (Required, Identifier): properties of the resource

## AllGroupMemberships_MemberId
### Properties
* **UserId**: string (Required): The identifier for a user in the identity store.

## AWS.IdentityStore/AllGroupMembershipsProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the group membership.
* **CreatedAt**: string (ReadOnly): The date and time the group membership was created.
* **CreatedBy**: string (ReadOnly): The identifier of the user or system that created the group membership.
* **GroupId**: string: The identifier for a group in the identity store.
* **IdentityStoreId**: string: The globally unique identifier for the identity store.
* **MemberId**: [AllGroupMemberships_MemberId](#allgroupmembershipsmemberid): An object containing the identifier of a group member.
* **MembershipId**: string (ReadOnly): The identifier for a GroupMembership in an identity store.
* **UpdatedAt**: string (ReadOnly): The date and time the group membership was last updated.
* **UpdatedBy**: string (ReadOnly): The identifier of the user or system that last updated the group membership.

## AWS.IdentityStore/GroupMembershipProperties
### Properties
* **GroupId**: string (Required): The unique identifier for a group in the identity store.
* **IdentityStoreId**: string (Required, Identifier): The globally unique identifier for the identity store.
* **MemberId**: [MemberId](#memberid) (Required): An object containing the identifier of a group member.
* **MembershipId**: string (ReadOnly, Identifier): The identifier for a GroupMembership in the identity store.

## AWS.IdentityStore/GroupProperties
### Properties
* **Description**: string: A string containing the description of the group.
* **DisplayName**: string (Required): A string containing the name of the group. This value is commonly displayed when the group is referenced.
* **GroupId**: string (ReadOnly, Identifier): The unique identifier for a group in the identity store.
* **IdentityStoreId**: string (Required, Identifier): The globally unique identifier for the identity store.

## MemberId
### Properties
* **UserId**: string (Required): The identifier for a user in the identity store.

