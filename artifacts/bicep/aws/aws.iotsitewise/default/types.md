# AWS.IoTSiteWise @ default

## Resource AWS.IoTSiteWise/AccessPolicy@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/AccessPolicyProperties](#awsiotsitewiseaccesspolicyproperties) (Required): properties of the resource

## Resource AWS.IoTSiteWise/Asset@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/AssetProperties](#awsiotsitewiseassetproperties) (Required): properties of the resource

## Resource AWS.IoTSiteWise/AssetModel@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/AssetModelProperties](#awsiotsitewiseassetmodelproperties) (Required): properties of the resource

## Resource AWS.IoTSiteWise/Dashboard@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/DashboardProperties](#awsiotsitewisedashboardproperties) (Required): properties of the resource

## Resource AWS.IoTSiteWise/Gateway@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/GatewayProperties](#awsiotsitewisegatewayproperties) (Required): properties of the resource

## Resource AWS.IoTSiteWise/Portal@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/PortalProperties](#awsiotsitewiseportalproperties) (Required): properties of the resource

## Resource AWS.IoTSiteWise/Project@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.IoTSiteWise/ProjectProperties](#awsiotsitewiseprojectproperties) (Required): properties of the resource

## AWS.IoTSiteWise/AccessPolicyProperties
### Properties
* **AccessPolicyArn**: string (ReadOnly): The ARN of the access policy.
* **AccessPolicyId**: string (ReadOnly): The ID of the access policy.
* **AccessPolicyIdentity**: [AccessPolicyIdentity](#accesspolicyidentity) (Required): The identity for this access policy. Choose either a user or a group but not both.
* **AccessPolicyPermission**: string (Required): The permission level for this access policy. Valid values are ADMINISTRATOR or VIEWER.
* **AccessPolicyResource**: [AccessPolicyResource](#accesspolicyresource) (Required): The AWS IoT SiteWise Monitor resource for this access policy. Choose either portal or project but not both.

## AccessPolicyIdentity
### Properties
* **IamRole**: [IamRole](#iamrole)
* **IamUser**: [IamUser](#iamuser)
* **User**: [User](#user)

## IamRole
### Properties
* **arn**: string: The ARN of the IAM role.

## IamUser
### Properties
* **arn**: string: The ARN of the IAM user.

## User
### Properties
* **id**: string: The AWS SSO ID of the user.

## AccessPolicyResource
### Properties
* **Portal**: [Portal](#portal)
* **Project**: [Project](#project)

## Portal
### Properties
* **id**: string: The ID of the portal.

## Project
### Properties
* **id**: string: The ID of the project.

## AWS.IoTSiteWise/AssetProperties
### Properties
* **AssetArn**: string (ReadOnly): The ARN of the asset
* **AssetDescription**: string: A description for the asset
* **AssetHierarchies**: [AssetHierarchy](#assethierarchy)[]
* **AssetId**: string (ReadOnly): The ID of the asset
* **AssetModelId**: string (Required): The ID of the asset model from which to create the asset.
* **AssetName**: string (Required): A unique, friendly name for the asset.
* **AssetProperties**: [AssetProperty](#assetproperty)[]
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset.

## AssetHierarchy
### Properties
* **ChildAssetId**: string (Required): The ID of the child asset to be associated.
* **LogicalId**: string (Required): The LogicalID of a hierarchy in the parent asset's model.

## AssetProperty
### Properties
* **Alias**: string: The property alias that identifies the property.
* **LogicalId**: string (Required): Customer provided ID for property.
* **NotificationState**: string: The MQTT notification state (ENABLED or DISABLED) for this asset property.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTSiteWise/AssetModelProperties
### Properties
* **AssetModelArn**: string (ReadOnly): The ARN of the asset model, which has the following format.
* **AssetModelCompositeModels**: [AssetModelCompositeModel](#assetmodelcompositemodel)[]: The composite asset models that are part of this asset model. Composite asset models are asset models that contain specific properties.
* **AssetModelDescription**: string: A description for the asset model.
* **AssetModelHierarchies**: [AssetModelHierarchy](#assetmodelhierarchy)[]: The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. You can specify up to 10 hierarchies per asset model.
* **AssetModelId**: string (ReadOnly): The ID of the asset model.
* **AssetModelName**: string (Required): A unique, friendly name for the asset model.
* **AssetModelProperties**: [AssetModelProperty](#assetmodelproperty)[]: The property definitions of the asset model. You can specify up to 200 properties per asset model.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the asset model.

## AssetModelCompositeModel
### Properties
* **CompositeModelProperties**: [AssetModelProperty](#assetmodelproperty)[]: The property definitions of the asset model. You can specify up to 200 properties per asset model.
* **Description**: string: A description for the asset composite model.
* **Name**: string (Required): A unique, friendly name for the asset composite model.
* **Type**: string (Required): The type of the composite model. For alarm composite models, this type is AWS/ALARM

## AssetModelProperty
### Properties
* **DataType**: [DataType](#datatype) (Required): The data type of the asset model property.
* **DataTypeSpec**: [DataTypeSpec](#datatypespec): The data type of the structure for this property.
* **LogicalId**: string (Required): Customer provided ID for property.
* **Name**: string (Required): The name of the asset model property.
* **Type**: [PropertyType](#propertytype) (Required): The property type
* **Unit**: string: The unit of the asset model property, such as Newtons or RPM.

## DataType
### Properties

## DataTypeSpec
### Properties

## PropertyType
### Properties
* **Attribute**: [Attribute](#attribute)
* **Metric**: [Metric](#metric)
* **Transform**: [Transform](#transform)
* **TypeName**: [TypeName](#typename) (Required)

## Attribute
### Properties
* **DefaultValue**: string

## Metric
### Properties
* **Expression**: string (Required): The mathematical expression that defines the metric aggregation function. You can specify up to 10 functions per expression.
* **Variables**: [ExpressionVariable](#expressionvariable)[] (Required): The list of variables used in the expression.
* **Window**: [MetricWindow](#metricwindow) (Required): The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression

## ExpressionVariable
### Properties
* **Name**: string (Required): The friendly name of the variable to be used in the expression.
* **Value**: [VariableValue](#variablevalue) (Required): The variable that identifies an asset property from which to use values.

## VariableValue
### Properties
* **HierarchyLogicalId**: string
* **PropertyLogicalId**: string (Required)

## MetricWindow
### Properties
* **Tumbling**: [TumblingWindow](#tumblingwindow)

## TumblingWindow
### Properties
* **Interval**: [Interval](#interval) (Required)
* **Offset**: [Offset](#offset)

## Interval
### Properties

## Offset
### Properties

## Transform
### Properties
* **Expression**: string (Required): The mathematical expression that defines the transformation function. You can specify up to 10 functions per expression.
* **Variables**: [ExpressionVariable](#expressionvariable)[] (Required): The list of variables used in the expression.

## TypeName
### Properties

## AssetModelHierarchy
### Properties
* **ChildAssetModelId**: string (Required): The ID of the asset model. All assets in this hierarchy must be instances of the child AssetModelId asset model.
* **LogicalId**: string (Required): Customer provided ID for hierarchy.
* **Name**: string (Required): The name of the asset model hierarchy.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTSiteWise/DashboardProperties
### Properties
* **DashboardArn**: string (ReadOnly): The ARN of the dashboard.
* **DashboardDefinition**: string (Required): The dashboard definition specified in a JSON literal.
* **DashboardDescription**: string (Required): A description for the dashboard.
* **DashboardId**: string (ReadOnly): The ID of the dashboard.
* **DashboardName**: string (Required): A friendly name for the dashboard.
* **ProjectId**: string: The ID of the project in which to create the dashboard.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the dashboard.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTSiteWise/GatewayProperties
### Properties
* **GatewayCapabilitySummaries**: [GatewayCapabilitySummary](#gatewaycapabilitysummary)[]: A list of gateway capability summaries that each contain a namespace and status.
* **GatewayId**: string (ReadOnly): The ID of the gateway device.
* **GatewayName**: string (Required): A unique, friendly name for the gateway.
* **GatewayPlatform**: [GatewayPlatform](#gatewayplatform) (Required): The gateway's platform. You can only specify one platform in a gateway.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the gateway.

## GatewayCapabilitySummary
### Properties
* **CapabilityConfiguration**: [CapabilityConfiguration](#capabilityconfiguration)
* **CapabilityNamespace**: [CapabilityNamespace](#capabilitynamespace) (Required)

## CapabilityConfiguration
### Properties

## CapabilityNamespace
### Properties

## GatewayPlatform
### Properties
* **Greengrass**: [Greengrass](#greengrass): A gateway that runs on AWS IoT Greengrass V1.
* **GreengrassV2**: [GreengrassV2](#greengrassv2): A gateway that runs on AWS IoT Greengrass V2.

## Greengrass
### Properties
* **GroupArn**: string (Required): The ARN of the Greengrass group.

## GreengrassV2
### Properties
* **CoreDeviceThingName**: string (Required): The name of the CoreDevice in GreenGrass V2.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTSiteWise/PortalProperties
### Properties
* **Alarms**: [Portal_Alarms](#portalalarms): Contains the configuration information of an alarm created in an AWS IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
* **NotificationSenderEmail**: string: The email address that sends alarm notifications.
* **PortalArn**: string (ReadOnly): The ARN of the portal, which has the following format.
* **PortalAuthMode**: string: The service to use to authenticate users to the portal. Choose from SSO or IAM. You can't change this value after you create a portal.
* **PortalClientId**: string (ReadOnly): The AWS SSO application generated client ID (used with AWS SSO APIs).
* **PortalContactEmail**: string (Required): The AWS administrator's contact email address.
* **PortalDescription**: string: A description for the portal.
* **PortalId**: string (ReadOnly): The ID of the portal.
* **PortalName**: string (Required): A friendly name for the portal.
* **PortalStartUrl**: string (ReadOnly): The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.
* **RoleArn**: string (Required): The ARN of a service role that allows the portal's users to access your AWS IoT SiteWise resources on your behalf.
* **Tags**: [Tag](#tag)[] (WriteOnly): A list of key-value pairs that contain metadata for the portal.

## Portal_Alarms
### Properties
* **AlarmRoleArn**: string: The ARN of the IAM role that allows the alarm to perform actions and access AWS resources and services, such as AWS IoT Events.
* **NotificationLambdaArn**: string: The ARN of the AWS Lambda function that manages alarm notifications. For more information, see Managing alarm notifications in the AWS IoT Events Developer Guide.

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## AWS.IoTSiteWise/ProjectProperties
### Properties
* **AssetIds**: [AssetId](#assetid)[]: The IDs of the assets to be associated to the project.
* **PortalId**: string (Required): The ID of the portal in which to create the project.
* **ProjectArn**: string (ReadOnly): The ARN of the project.
* **ProjectDescription**: string: A description for the project.
* **ProjectId**: string (ReadOnly): The ID of the project.
* **ProjectName**: string (Required): A friendly name for the project.
* **Tags**: [Tag](#tag)[]: A list of key-value pairs that contain metadata for the project.

## AssetId
### Properties

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

