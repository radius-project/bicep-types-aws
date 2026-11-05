# AWS.ControlCatalog @ default

## Resource AWS.ControlCatalog/CommonControl@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlCatalog/CommonControlProperties](#awscontrolcatalogcommoncontrolproperties) (Identifier): properties of the resource

## Resource AWS.ControlCatalog/Control@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlCatalog/ControlProperties](#awscontrolcatalogcontrolproperties) (Identifier): properties of the resource

## Resource AWS.ControlCatalog/Objective@default
* **Readable Scope(s)**: Tenant, ManagementGroup, Subscription, ResourceGroup, Extension
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ControlCatalog/ObjectiveProperties](#awscontrolcatalogobjectiveproperties) (Identifier): properties of the resource

## AWS.ControlCatalog/CommonControlProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) that identifies the common control.
* **CommonControlId**: string (ReadOnly): The unique identifier of the common control.
* **CreateTime**: string (ReadOnly): The time when the common control was created.
* **Description**: string (ReadOnly): The description of the common control.
* **Domain**: [CommonControl_Domain](#commoncontroldomain) (ReadOnly): The domain that the common control belongs to.
* **LastUpdateTime**: string (ReadOnly): The time when the common control was most recently updated.
* **Name**: string (ReadOnly): The name of the common control.
* **Objective**: [CommonControl_Objective](#commoncontrolobjective) (ReadOnly): The objective that the common control belongs to.

## AWS.ControlCatalog/ControlProperties
### Properties
* **Aliases**: string[] (ReadOnly): A list of alternative identifiers for the control.
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the control.
* **Behavior**: string (ReadOnly): A term that identifies the control's functional behavior.
* **ControlId**: string (ReadOnly): The unique opaque identifier of the control.
* **CreateTime**: string (ReadOnly): A timestamp that notes the time when the control was released.
* **Description**: string (ReadOnly): A description of what the control does.
* **GovernedResources**: string[] (ReadOnly): A list of AWS resource types that are governed by this control.
* **Implementation**: [ImplementationDetails](#implementationdetails) (ReadOnly)
* **Name**: string (ReadOnly): The display name of the control.
* **RegionConfiguration**: [RegionConfiguration](#regionconfiguration) (ReadOnly)
* **Severity**: string (ReadOnly): The severity of the control.

## AWS.ControlCatalog/ObjectiveProperties
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) that identifies the objective.
* **CreateTime**: string (ReadOnly): The time when the objective was created.
* **Description**: string (ReadOnly): The description of the objective.
* **Domain**: [Objective_Domain](#objectivedomain) (ReadOnly): The domain that the objective belongs to.
* **LastUpdateTime**: string (ReadOnly): The time when the objective was most recently updated.
* **Name**: string (ReadOnly): The name of the objective.
* **ObjectiveId**: string (ReadOnly): The unique identifier of the objective.

## CommonControl_Domain
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the related domain.
* **Name**: string: The name of the related domain.

## CommonControl_Objective
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the related objective.
* **Name**: string: The name of the related objective.

## ImplementationDetails
### Properties
* **Identifier**: string: A service-specific identifier for the control.
* **Type**: string (Required): A string that describes a control's implementation type.

## Objective_Domain
### Properties
* **Arn**: string (Identifier): The Amazon Resource Name (ARN) of the related domain.
* **Name**: string: The name of the related domain.

## RegionConfiguration
### Properties
* **DeployableRegions**: string[]: Regions in which the control is available to be deployed.
* **Scope**: string (Required): The scope of the control.

