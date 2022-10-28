# AWS.IdentityStore @ default

## Resource AWS.IdentityStore/Group@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IdentityStore/GroupProperties](#awsidentitystoregroupproperties) (Required): properties of the resource

## AWS.IdentityStore/GroupProperties
### Properties
* **Description**: string: A string containing the description of the group.
* **DisplayName**: string (Required): A string containing the name of the group. This value is commonly displayed when the group is referenced.
* **GroupId**: string (ReadOnly): The unique identifier for a group in the identity store.
* **IdentityStoreId**: string (Required): The globally unique identifier for the identity store.

