# AWS.IoTTwinMaker @ default

## Resource AWS.IoTTwinMaker/ComponentType@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/ComponentTypeProperties](#awsiottwinmakercomponenttypeproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTTwinMaker/Entity@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/EntityProperties](#awsiottwinmakerentityproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTTwinMaker/MetadataTransferJob@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/MetadataTransferJobProperties](#awsiottwinmakermetadatatransferjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTTwinMaker/Scene@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/SceneProperties](#awsiottwinmakersceneproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTTwinMaker/SyncJob@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/SyncJobProperties](#awsiottwinmakersyncjobproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTTwinMaker/Workspace@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTTwinMaker/WorkspaceProperties](#awsiottwinmakerworkspaceproperties) (Required, Identifier): properties of the resource

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

## AWS.IoTTwinMaker/MetadataTransferJobProperties
### Properties
* **Arn**: string (Identifier): The ARN of the metadata transfer job.
* **CreationDateTime**: string (ReadOnly): The creation date and time.
* **Description**: string: The metadata transfer job description.
* **Destination**: [DestinationConfiguration](#destinationconfiguration) (Required): The metadata transfer job destination.
* **MetadataTransferJobId**: string: The metadata transfer job Id.
* **Sources**: [SourceConfiguration](#sourceconfiguration)[] (Required): The metadata transfer job sources.
* **Status**: [MetadataTransferJobStatus](#metadatatransferjobstatus) (ReadOnly): The metadata transfer job status.
* **UpdateDateTime**: string (ReadOnly): The update date and time.

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

## AWS.IoTTwinMaker/SyncJobProperties
### Properties
* **Arn**: string (ReadOnly): The ARN of the SyncJob.
* **CreationDateTime**: string (ReadOnly): The date and time when the sync job was created.
* **State**: string (ReadOnly): The state of SyncJob.
* **SyncRole**: string (Required): The IAM Role that execute SyncJob.
* **SyncSource**: string (Required, Identifier): The source of the SyncJob.
* **Tags**: [SyncJob_Tags](#syncjobtags): A key-value pair to associate with a resource.
* **UpdateDateTime**: string (ReadOnly): The date and time when the sync job was updated.
* **WorkspaceId**: string (Required, Identifier): The ID of the workspace.

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

## Component
### Properties
* **ComponentName**: string: The name of the component.
* **ComponentTypeId**: string: The ID of the component type.
* **DefinedIn**: string: The name of the property definition set in the component.
* **Description**: string: The description of the component.
* **Properties**: [Entity_Properties](#entityproperties): An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
* **PropertyGroups**: [Entity_PropertyGroups](#entitypropertygroups): An object that maps strings to the property groups to set in the component type. Each string in the mapping must be unique to this object.
* **Status**: [Status](#status): The current status of the entity.

## ComponentType_CompositeComponentTypes
### Properties
### Additional Properties
* **Additional Properties Type**: [CompositeComponentType](#compositecomponenttype)

## ComponentType_Configurations
### Properties
### Additional Properties
* **Additional Properties Type**: string

## ComponentType_Error
### Properties

## ComponentType_Functions
### Properties
### Additional Properties
* **Additional Properties Type**: [Function](#function)

## ComponentType_MapValue
### Properties
### Additional Properties
* **Additional Properties Type**: [DataValue](#datavalue)

## ComponentType_PropertyDefinitions
### Properties
### Additional Properties
* **Additional Properties Type**: [PropertyDefinition](#propertydefinition)

## ComponentType_PropertyGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [PropertyGroup](#propertygroup)

## ComponentType_RelationshipValue
### Properties
* **TargetComponentName**: string
* **TargetEntityId**: string

## ComponentType_Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## CompositeComponent
### Properties
* **ComponentName**: string: The name of the component.
* **ComponentPath**: string: The path of the component.
* **ComponentTypeId**: string: The ID of the component type.
* **Description**: string: The description of the component.
* **Properties**: [Entity_Properties](#entityproperties): An object that maps strings to the properties to set in the component type. Each string in the mapping must be unique to this object.
* **PropertyGroups**: [Entity_PropertyGroups](#entitypropertygroups): An object that maps strings to the property groups to set in the component type. Each string in the mapping must be unique to this object.
* **Status**: [Status](#status): The current status of the component.

## CompositeComponentType
### Properties
* **ComponentTypeId**: string (Identifier): The id of the composite component type.

## DataConnector
### Properties
* **IsNative**: bool: A Boolean value that specifies whether the data connector is native to IoT TwinMaker.
* **Lambda**: [LambdaFunction](#lambdafunction): The Lambda function associated with this data connector.

## DataType
### Properties
* **AllowedValues**: [DataValue](#datavalue)[]: The allowed values for this data type.
* **NestedType**: [DataType](#datatype): The nested type in the data type.
* **Relationship**: [Relationship](#relationship): A relationship that associates a component with another component.
* **Type**: string (Required): The underlying type of the data type.
* **UnitOfMeasure**: string: The unit of measure used in this data type.

## DataType
### Properties
* **AllowedValues**: [DataValue](#datavalue)[]: The allowed values for this data type.
* **NestedType**: [DataType](#datatype): The nested type in the data type.
* **Relationship**: [Relationship](#relationship): A relationship that associates a component with another component.
* **Type**: string: The underlying type of the data type.
* **UnitOfMeasure**: string: The unit of measure used in this data type.

## DataValue
### Properties
* **BooleanValue**: bool: A Boolean value.
* **DoubleValue**: int: A double value.
* **Expression**: string: An expression that produces the value.
* **IntegerValue**: int: An integer value.
* **ListValue**: [DataValue](#datavalue)[]: A list of multiple values.
* **LongValue**: int: A long value.
* **MapValue**: [ComponentType_MapValue](#componenttypemapvalue): An object that maps strings to multiple DataValue objects. 


* **RelationshipValue**: [ComponentType_RelationshipValue](#componenttyperelationshipvalue): A value that relates a component to another component.
* **StringValue**: string: A string value.

## DataValue
### Properties
* **BooleanValue**: bool: A Boolean value.
* **DoubleValue**: int: A double value.
* **Expression**: string: An expression that produces the value.
* **IntegerValue**: int: An integer value.
* **ListValue**: [DataValue](#datavalue)[]: A list of multiple values.
* **LongValue**: int: A long value.
* **MapValue**: [Entity_MapValue](#entitymapvalue): An object that maps strings to multiple DataValue objects.
* **RelationshipValue**: [Entity_RelationshipValue](#entityrelationshipvalue): A value that relates a component to another component.
* **StringValue**: string: A string value.

## Definition
### Properties
* **Configuration**: [PropertyDefinitionConfiguration](#propertydefinitionconfiguration): An object that specifies information about a property configuration.
* **DataType**: [DataType](#datatype): An object that contains information about the data type.
* **DefaultValue**: [DataValue](#datavalue): An object that contains the default value.
* **IsExternalId**: bool: A Boolean value that specifies whether the property ID comes from an external data store.
* **IsFinal**: bool: A Boolean value that specifies whether the property definition can be updated.
* **IsImported**: bool: A Boolean value that specifies whether the property definition is imported from an external data store.
* **IsInherited**: bool: A Boolean value that specifies whether the property definition is inherited from a parent entity.
* **IsRequiredInEntity**: bool: A Boolean value that specifies whether the property is required.
* **IsStoredExternally**: bool: A Boolean value that specifies whether the property is stored externally.
* **IsTimeSeries**: bool: A Boolean value that specifies whether the property consists of time series data.

## DestinationConfiguration
### Properties
* **S3Configuration**: [S3DestinationConfiguration](#s3destinationconfiguration)
* **Type**: string (Required)

## Entity_Components
### Properties
### Additional Properties
* **Additional Properties Type**: [Component](#component)

## Entity_CompositeComponents
### Properties
### Additional Properties
* **Additional Properties Type**: [CompositeComponent](#compositecomponent)

## Entity_Error
### Properties

## Entity_MapValue
### Properties
### Additional Properties
* **Additional Properties Type**: [DataValue](#datavalue)

## Entity_Properties
### Properties
### Additional Properties
* **Additional Properties Type**: [Property](#property)

## Entity_Properties
### Properties
### Additional Properties
* **Additional Properties Type**: [Property](#property)

## Entity_PropertyGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [PropertyGroup](#propertygroup)

## Entity_PropertyGroups
### Properties
### Additional Properties
* **Additional Properties Type**: [PropertyGroup](#propertygroup)

## Entity_RelationshipValue
### Properties
* **TargetComponentName**: string
* **TargetEntityId**: string

## Entity_Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Function
### Properties
* **ImplementedBy**: [DataConnector](#dataconnector): The data connector.
* **RequiredProperties**: string[]: The required properties of the function.
* **Scope**: string: The scope of the function.

## LambdaFunction
### Properties
* **Arn**: string (Required)

## MetadataTransferJobStatus
### Properties
* **State**: string

## Property
### Properties
* **Definition**: [Definition](#definition): The definition of the property.
* **Value**: [DataValue](#datavalue): The value of the property.

## PropertyDefinition
### Properties
* **Configurations**: [ComponentType_Configurations](#componenttypeconfigurations): An object that specifies information about a property.
* **DataType**: [DataType](#datatype): An object that contains information about the data type.
* **DefaultValue**: [DataValue](#datavalue): An object that contains the default value.
* **IsExternalId**: bool: A Boolean value that specifies whether the property ID comes from an external data store.
* **IsRequiredInEntity**: bool: A Boolean value that specifies whether the property is required.
* **IsStoredExternally**: bool: A Boolean value that specifies whether the property is stored externally.
* **IsTimeSeries**: bool: A Boolean value that specifies whether the property consists of time series data.

## PropertyDefinitionConfiguration
### Properties
### Additional Properties
* **Additional Properties Type**: string

## PropertyGroup
### Properties
* **GroupType**: string: The type of property group.
* **PropertyNames**: string[]: The list of property names in the property group.

## PropertyGroup
### Properties
* **GroupType**: string: The type of property group.
* **PropertyNames**: string[]: The list of property names in the property group.

## Relationship
### Properties
* **RelationshipType**: string: The type of the relationship.
* **TargetComponentTypeId**: string: The ID of the target component type associated with this relationship.

## Relationship
### Properties
* **RelationshipType**: string: The type of the relationship.
* **TargetComponentTypeId**: string: The ID of the target component type associated with this relationship.

## S3DestinationConfiguration
### Properties
* **Location**: string (Required)

## Scene_GeneratedSceneMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Scene_SceneMetadata
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Scene_Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## SourceConfiguration
### Properties
* **Type**: string (Required)

## Status
### Properties
* **Error**: [ComponentType_Error](#componenttypeerror)
* **State**: string

## Status
### Properties
* **Error**: [Entity_Error](#entityerror)
* **State**: string

## SyncJob_Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

## Workspace_Tags
### Properties
### Additional Properties
* **Additional Properties Type**: string

