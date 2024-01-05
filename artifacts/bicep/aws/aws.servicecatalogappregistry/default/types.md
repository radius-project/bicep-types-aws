# AWS.ServiceCatalogAppRegistry @ default

## Resource AWS.ServiceCatalogAppRegistry/Application@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalogAppRegistry/ApplicationProperties](#awsservicecatalogappregistryapplicationproperties) (Required): properties of the resource

## Resource AWS.ServiceCatalogAppRegistry/AttributeGroup@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalogAppRegistry/AttributeGroupProperties](#awsservicecatalogappregistryattributegroupproperties) (Required): properties of the resource

## AWS.ServiceCatalogAppRegistry/ApplicationProperties
### Properties
* **ApplicationName**: string (ReadOnly): The name of the application. 
* **ApplicationTagKey**: string (ReadOnly): The key of the AWS application tag, which is awsApplication. Applications created before 11/13/2023 or applications without the AWS application tag resource group return no value.
* **ApplicationTagValue**: string (ReadOnly): The value of the AWS application tag, which is the identifier of an associated resource. Applications created before 11/13/2023 or applications without the AWS application tag resource group return no value. 
* **Arn**: string (ReadOnly)
* **Description**: string: The description of the application. 
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required): The name of the application. 
* **Tags**: [Tags](#tags)

## Tags
### Properties

## AWS.ServiceCatalogAppRegistry/AttributeGroupProperties
### Properties
* **Arn**: string (ReadOnly)
* **Attributes**: [AttributeGroup_Attributes](#attributegroupattributes) (Required)
* **Description**: string: The description of the attribute group. 
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required): The name of the attribute group. 
* **Tags**: [Tags](#tags)

## AttributeGroup_Attributes
### Properties

## Tags
### Properties

