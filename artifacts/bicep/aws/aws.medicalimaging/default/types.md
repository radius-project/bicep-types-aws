# AWS.MedicalImaging @ default

## Resource AWS.MedicalImaging/ImageSet@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.MedicalImaging/ImageSetProperties](#awsmedicalimagingimagesetproperties) (Identifier): properties of the resource

## AWS.MedicalImaging/ImageSetProperties
### Properties
* **CreatedAt**: string (ReadOnly): The timestamp when the image set was created.
* **DatastoreId**: string: The identifier of the data store in which the image set exists.
* **ImageSetArn**: string (Identifier): The Amazon Resource Name (ARN) of the image set.
* **ImageSetId**: string (ReadOnly): The unique identifier of the image set.
* **ImageSetState**: string (ReadOnly)
* **ImageSetWorkflowStatus**: string (ReadOnly)
* **IsPrimary**: bool (ReadOnly): Whether this is the primary image set.
* **LastAccessedAt**: string (ReadOnly): The timestamp when the image set was last accessed.
* **StorageTier**: string (ReadOnly)
* **Tags**: [Tag](#tag)[] (ReadOnly): Tags associated with the image set.
* **UpdatedAt**: string (ReadOnly): The timestamp when the image set was last updated.
* **VersionId**: string (ReadOnly): The version identifier of the image set.

## Tag
### Properties
* **Key**: string (Required): The key name of the tag.
* **Value**: string (Required): The value for the tag.

