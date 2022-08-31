# AWS.ServiceCatalogAppRegistry @ default

## Resource AWS.ServiceCatalogAppRegistry/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ServiceCatalogAppRegistry/ApplicationProperties](#awsservicecatalogappregistryapplicationproperties): properties of the resource

## Resource AWS.ServiceCatalogAppRegistry/AttributeGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **name**: string (Required): the resource name
* **properties**: [AWS.ServiceCatalogAppRegistry/AttributeGroupProperties](#awsservicecatalogappregistryattributegroupproperties): properties of the resource

## AWS.ServiceCatalogAppRegistry/ApplicationProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: The description of the application. 
* **Id**: string (ReadOnly)
* **Name**: string: The name of the application. 
* **Tags**: [Tags](#tags)

## Tags
### Properties

## AWS.ServiceCatalogAppRegistry/AttributeGroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **Attributes**: [AttributeGroup_Attributes](#attributegroupattributes)
* **Description**: string: The description of the attribute group. 
* **Id**: string (ReadOnly)
* **Name**: string: The name of the attribute group. 
* **Tags**: [Tags](#tags)

## AttributeGroup_Attributes
### Properties

## Tags
### Properties

