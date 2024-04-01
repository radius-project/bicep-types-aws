# AWS.IoTSiteWise @ default

## Resource AWS.IoTSiteWise/AccessPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/AccessPolicyProperties](#awsiotsitewiseaccesspolicyproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTSiteWise/Asset@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/AssetProperties](#awsiotsitewiseassetproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTSiteWise/AssetModel@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/AssetModelProperties](#awsiotsitewiseassetmodelproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTSiteWise/Dashboard@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/DashboardProperties](#awsiotsitewisedashboardproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTSiteWise/Gateway@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/GatewayProperties](#awsiotsitewisegatewayproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTSiteWise/Portal@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/PortalProperties](#awsiotsitewiseportalproperties) (Required, Identifier): properties of the resource

## Resource AWS.IoTSiteWise/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.IoTSiteWise/ProjectProperties](#awsiotsitewiseprojectproperties) (Required, Identifier): properties of the resource

## AccessPolicyIdentity
### Properties
* **IamRole**: [IamRole](#iamrole)
* **IamUser**: [IamUser](#iamuser)
* **User**: [User](#user)

## AccessPolicyResource
### Properties
* **Portal**: [Portal](#portal)
* **Project**: [Project](#project)

## AssetHierarchy
### Properties
* **ChildAssetId**: string (Required): The ID of the child asset to be associated.
* **ExternalId**: string: String-friendly customer provided external ID
* **Id**: string: Customer provided actual UUID for property
* **LogicalId**: string: The LogicalID of a hierarchy in the parent asset's model.

## AssetModelCompositeModel
### Properties
* **ComposedAssetModelId**: string: The component model ID for which the composite model is composed of
* **CompositeModelProperties**: [AssetModelProperty](#assetmodelproperty)[]: The property definitions of the asset model. You can specify up to 200 properties per asset model.
* **Description**: string: A description for the asset composite model.
* **ExternalId**: string: The External ID of the composite model
* **Id**: string: The Actual ID of the composite model
* **Name**: string (Required): A unique, friendly name for the asset composite model.
* **ParentAssetModelCompositeModelExternalId**: string: The parent composite model External ID
* **Path**: string[]: The path of the composite model. This is only for derived composite models
* **Type**: string (Required): The type of the composite model. For alarm composite models, this type is AWS/ALARM

## AssetModelHierarchy
### Properties
* **ChildAssetModelId**: string (Required): The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
* **ExternalId**: string: Customer provided external ID for hierarchy
* **Id**: string: Customer provided actual ID for hierarchy
* **LogicalId**: string: Customer provided logical ID for hierarchy.
* **Name**: string (Required): The name of the asset model hierarchy.

## AssetModelProperty
### Properties
* **DataType**: string (Required): The data type of the asset model property.
* **DataTypeSpec**: string: The data type of the structure for this property.
* **ExternalId**: string: The External ID of the Asset Model Property
* **Id**: string: The ID of the Asset Model Property
* **LogicalId**: string: Customer provided Logical ID for property.
* **Name**: string (Required): The name of the asset model property.
* **Type**: [PropertyType](#propertytype) (Required): The property type
* **Unit**: string: The unit of the asset model property, such as Newtons or RPM.

## AssetProperty
### Properties
* **Alias**: string: The property alias that identifies the property.
* **ExternalId**: string: String-friendly customer provided external ID
* **Id**: string: Customer provided actual UUID for property
* **LogicalId**: string: Customer provided ID for property.
* **NotificationState**: string: The MQTT notification state (ENABLED or DISABLED) for this asset property.
* **Unit**: string: The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a value for this parameter, the service uses the value of the assetModelProperty in the asset model.

## Attribute
### Properties
* **DefaultValue**: string

## AWS.IoTSiteWise/AccessPolicyProperties
### Properties
* **AccessPolicyArn**: string (ReadOnly): The ARN of the access policy.
* **AccessPolicyId**: string (ReadOnly, Identifier): The ID of the access policy.
* **AccessPolicyIdentity**: [AccessPolicyIdentity](#accesspolicyidentity) (Required): The identity for this access policy. Choose either a user or a group but not both.
* **AccessPolicyPermission**: string (Required): The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
* **AccessPolicyResource**: [AccessPolicyResource](#accesspolicyresource) (Required): The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

## AWS.IoTSiteWise/AssetModelProperties
### Properties
* **AssetModelArn**: string (ReadOnly): The ARN of the asset model, which has the following format.
* **AssetModelCompositeModels**: [AssetModelCompositeModel](#assetmodelcompositemodel)[] (ReadOnly, WriteOnly): The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
* **AssetModelDescription**: string: A description for the asset model.
* **AssetModelExternalId**: string: The external ID of the asset model.
* **AssetModelHierarchies**: [AssetModelHierarchy](#assetmodelhierarchy)[] (ReadOnly): The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
* **AssetModelId**: string (ReadOnly, Identifier): The ID of the asset model.
* **AssetModelName**: string (Required): A unique, friendly name for the asset model.
* **AssetModelProperties**: [AssetModelProperty](#assetmodelproperty)[] (ReadOnly, WriteOnly): The property definitions of the asset model. You can specify up to 200 properties per asset model.
* **AssetModelType**: string: The type of the asset model (ASSET_MODEL OR COMPONENT_MODEL)
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.

## AWS.IoTSiteWise/AssetProperties
### Properties
* **AssetArn**: string (ReadOnly): The ARN of the asset
* **AssetDescription**: string: A description for the asset
* **AssetExternalId**: string: The External ID of the asset
* **AssetHierarchies**: [AssetHierarchy](#assethierarchy)[] (ReadOnly)
* **AssetId**: string (ReadOnly, Identifier): The ID of the asset
* **AssetModelId**: string (Required): The ID of the asset model from which to create the asset.
* **AssetName**: string (Required): A unique, friendly name for the asset.
* **AssetProperties**: [AssetProperty](#assetproperty)[] (ReadOnly)
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset.

## AWS.IoTSiteWise/DashboardProperties
### Properties
* **DashboardArn**: string (ReadOnly): The ARN of the dashboard.
* **DashboardDefinition**: string (Required): The dashboard definition specified in a JSON literal.
* **DashboardDescription**: string (Required): A description for the dashboard.
* **DashboardId**: string (ReadOnly, Identifier): The ID of the dashboard.
* **DashboardName**: string (Required): A friendly name for the dashboard.
* **ProjectId**: string: The ID of the project in which to create the dashboard.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the dashboard.

## AWS.IoTSiteWise/GatewayProperties
### Properties
* **GatewayCapabilitySummaries**: [GatewayCapabilitySummary](#gatewaycapabilitysummary)[]: A list of gateway capability summaries that each contain a namespace and status.
* **GatewayId**: string (ReadOnly, Identifier): The ID of the gateway device.
* **GatewayName**: string (Required): A unique, friendly name for the gateway.
* **GatewayPlatform**: [GatewayPlatform](#gatewayplatform) (Required): The gateway's platform. You can only specify one platform in a gateway.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the gateway.

## AWS.IoTSiteWise/PortalProperties
### Properties
* **Alarms**: [Portal_Alarms](#portalalarms): Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
* **NotificationSenderEmail**: string: The email address that sends alarm notifications.
* **PortalArn**: string (ReadOnly): The ARN of the portal, which has the following format.
* **PortalAuthMode**: string: The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
* **PortalClientId**: string (ReadOnly): The AWS SSO application generated client ID (used with AWS SSO APIs).
* **PortalContactEmail**: string (Required): The AWS administrator's contact email address.
* **PortalDescription**: string: A description for the portal.
* **PortalId**: string (ReadOnly, Identifier): The ID of the portal.
* **PortalName**: string (Required): A friendly name for the portal.
* **PortalStartUrl**: string (ReadOnly): The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.
* **RoleArn**: string (Required): The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of key-value pairs that contain metadata for the portal.

## AWS.IoTSiteWise/ProjectProperties
### Properties
* **AssetIds**: string[]: The IDs of the assets to be associated to the project.
* **PortalId**: string (Required): The ID of the portal in which to create the project.
* **ProjectArn**: string (ReadOnly): The ARN of the project.
* **ProjectDescription**: string: A description for the project.
* **ProjectId**: string (ReadOnly, Identifier): The ID of the project.
* **ProjectName**: string (Required): A friendly name for the project.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the project.

## ExpressionVariable
### Properties
* **Name**: string (Required): The friendly name of the variable to be used in the expression.
* **Value**: [VariableValue](#variablevalue) (Required): The variable that identifies an asset property from which to use values.

## GatewayCapabilitySummary
### Properties
* **CapabilityConfiguration**: string
* **CapabilityNamespace**: string (Required)

## GatewayPlatform
### Properties
* **Greengrass**: [Greengrass](#greengrass): A gateway that runs on AWS IoT Greengrass V1.
* **GreengrassV2**: [GreengrassV2](#greengrassv2): A gateway that runs on AWS IoT Greengrass V2.
* **SiemensIE**: [SiemensIE](#siemensie): A gateway that runs on Siemens Industrial Edge.

## Greengrass
### Properties
* **GroupArn**: string (Required): The ARN of the Greengrass group.

## GreengrassV2
### Properties
* **CoreDeviceThingName**: string (Required): The name of the CoreDevice in GreenGrass V2.

## IamRole
### Properties
* **arn**: string: The ARN of the IAM role.

## IamUser
### Properties
* **arn**: string: The ARN of the IAM user.

## Metric
### Properties
* **Expression**: string (Required): The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
* **Variables**: [ExpressionVariable](#expressionvariable)[] (Required): The list of variables used in the expression.
* **Window**: [MetricWindow](#metricwindow) (Required): The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression

## MetricWindow
### Properties
* **Tumbling**: [TumblingWindow](#tumblingwindow)

## Portal
### Properties
* **id**: string: The ID of the portal.

## Portal_Alarms
### Properties
* **AlarmRoleArn**: string: The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.
* **NotificationLambdaArn**: string: The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

## Project
### Properties
* **id**: string: The ID of the project.

## PropertyPathDefinition
### Properties
* **Name**: string (Required): The name of the property

## PropertyType
### Properties
* **Attribute**: [Attribute](#attribute)
* **Metric**: [Metric](#metric)
* **Transform**: [Transform](#transform)
* **TypeName**: string (Required)

## SiemensIE
### Properties
* **IotCoreThingName**: string (Required): The name of the IoT Core Thing.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Transform
### Properties
* **Expression**: string (Required): The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
* **Variables**: [ExpressionVariable](#expressionvariable)[] (Required): The list of variables used in the expression.

## TumblingWindow
### Properties
* **Interval**: string (Required)
* **Offset**: string

## User
### Properties
* **id**: string: The AWS SSO ID of the user.

## VariableValue
### Properties
* **HierarchyExternalId**: string: The External ID of the hierarchy that is trying to be referenced
* **HierarchyId**: string: The ID of the hierarchy that is trying to be referenced
* **HierarchyLogicalId**: string
* **PropertyExternalId**: string: The External ID of the property that is trying to be referenced
* **PropertyId**: string: The ID of the property that is trying to be referenced
* **PropertyLogicalId**: string
* **PropertyPath**: [PropertyPathDefinition](#propertypathdefinition)[]: The path of the property that is trying to be referenced

