# AWS.IoTTwinMaker @ default

## Resource AWS.IoTTwinMaker/ComponentType@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/ComponentTypeProperties](#awsiottwinmakercomponenttypeproperties) (Required): properties of the resource

## Resource AWS.IoTTwinMaker/Entity@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/EntityProperties](#awsiottwinmakerentityproperties) (Required): properties of the resource

## Resource AWS.IoTTwinMaker/Scene@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/SceneProperties](#awsiottwinmakersceneproperties) (Required): properties of the resource

## Resource AWS.IoTTwinMaker/Workspace@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/WorkspaceProperties](#awsiottwinmakerworkspaceproperties) (Required): properties of the resource

## AWS.IoTTwinMaker/ComponentTypeProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the component type.
* **ComponentTypeId**: string (Required, Identifier): The ID of the component type.
* **CompositeComponentTypes**: [ComponentType_CompositeComponentTypes](#componenttypecompositecomponenttypes): An map of the composite component types in the component type. Each composite component type's key must be unique to this map.
* **CreationDateTime**: string (ReadOnly): The date and time when the component type was created.
* **Description**: string: The description of the component type.
* **ExtendsFrom**: string[]: Specifies the parent component type to extend.
* **Functions**: [ComponentType_Functions](#componenttypefunctions): a Map of functions in the component type. Each function's key must be unique to this map.
* **IsAbstract**: bool (ReadOnly): A Boolean value that specifies whether the component type is abstract.
* **IsSchemaInitialized**: bool (ReadOnly): A Boolean value that specifies whether the component type has a schema initializer and that the schema initializer has run.
* **IsSingleton**: bool: A Boolean value that specifies whether an entity can have more than one component of this type.
* **PropertyDefinitions**: [ComponentType_PropertyDefinitions](#componenttypepropertydefinitions): An map of the property definitions in the component type. Each property definition's key must be unique to this map.
* **PropertyGroups**: [ComponentType_PropertyGroups](#componenttypepropertygroups): An map of the property groups in the component type. Each property group's key must be unique to this map.
* **Status**: [Status](#status) (ReadOnly): The current status of the component type.
* **Tags**: [ComponentType_Tags](#componenttypetags): A map of key-value pairs to associate with a resource.
* **UpdateDateTime**: string (ReadOnly): The last date and time when the component type was updated.
* **WorkspaceId**: string (Required, Identifier): The ID of the workspace that contains the component type.

## ComponentType_CompositeComponentTypes
### Properties

## ComponentType_Functions
### Properties

## ComponentType_PropertyDefinitions
### Properties

## ComponentType_PropertyGroups
### Properties

## Status
### Properties
* **Error**: [ComponentType_Error](#componenttypeerror)
* **State**: string

## ComponentType_Error
### Properties

## ComponentType_Tags
### Properties

## AWS.IoTTwinMaker/EntityProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the entity.
* **Components**: [Entity_Components](#entitycomponents): A map that sets information about a component type.
* **CompositeComponents**: [Entity_CompositeComponents](#entitycompositecomponents): A map that sets information about a composite component.
* **CreationDateTime**: string (ReadOnly): The date and time when the entity was created.
* **Description**: string: The description of the entity.
* **EntityId**: string (Identifier): The ID of the entity.
* **EntityName**: string (Required): The name of the entity.
* **HasChildEntities**: bool (ReadOnly): A Boolean value that specifies whether the entity has child entities or not.
* **ParentEntityId**: string: The ID of the parent entity.
* **Status**: [Status](#status) (ReadOnly): The current status of the entity.
* **Tags**: [Entity_Tags](#entitytags): A key-value pair to associate with a resource.
* **UpdateDateTime**: string (ReadOnly): The last date and time when the entity was updated.
* **WorkspaceId**: string (Required, Identifier): The ID of the workspace.

## Entity_Components
### Properties

## Entity_CompositeComponents
### Properties

## Status
### Properties
* **Error**: [Entity_Error](#entityerror)
* **State**: string

## Entity_Error
### Properties

## Entity_Tags
### Properties

## AWS.IoTTwinMaker/SceneProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the scene.
* **Capabilities**: string[]: A list of capabilities that the scene uses to render.
* **ContentLocation**: string (Required): The relative path that specifies the location of the content definition file.
* **CreationDateTime**: string (ReadOnly): The date and time when the scene was created.
* **Description**: string: The description of the scene.
* **GeneratedSceneMetadata**: [Scene_GeneratedSceneMetadata](#scenegeneratedscenemetadata) (ReadOnly): A key-value pair of generated scene metadata for the scene.
* **SceneId**: string (Required, Identifier): The ID of the scene.
* **SceneMetadata**: [Scene_SceneMetadata](#scenescenemetadata): A key-value pair of scene metadata for the scene.
* **Tags**: [Scene_Tags](#scenetags): A key-value pair to associate with a resource.
* **UpdateDateTime**: string (ReadOnly): The date and time of the current update.
* **WorkspaceId**: string (Required, Identifier): The ID of the scene.

## Scene_GeneratedSceneMetadata
### Properties

## Scene_SceneMetadata
### Properties

## Scene_Tags
### Properties

## AWS.IoTTwinMaker/WorkspaceProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the workspace.
* **CreationDateTime**: string (ReadOnly): The date and time when the workspace was created.
* **Description**: string: The description of the workspace.
* **Role**: string (Required): The ARN of the execution role associated with the workspace.
* **S3Location**: string (Required): The ARN of the S3 bucket where resources associated with the workspace are stored.
* **Tags**: [Workspace_Tags](#workspacetags): A map of key-value pairs to associate with a resource.
* **UpdateDateTime**: string (ReadOnly): The date and time of the current update.
* **WorkspaceId**: string (Required, Identifier): The ID of the workspace.

## Workspace_Tags
### Properties

