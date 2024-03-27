# AWS.ServiceCatalog @ default

## Resource AWS.ServiceCatalog/CloudFormationProvisionedProduct@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/CloudFormationProvisionedProductProperties](#awsservicecatalogcloudformationprovisionedproductproperties) (Identifier): properties of the resource

## Resource AWS.ServiceCatalog/ServiceAction@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/ServiceActionProperties](#awsservicecatalogserviceactionproperties) (Required, Identifier): properties of the resource

## AWS.ServiceCatalog/CloudFormationProvisionedProductProperties
### Properties
* **AcceptLanguage**: string
* **CloudformationStackArn**: string (ReadOnly)
* **NotificationArns**: string[]
* **Outputs**: [CloudFormationProvisionedProduct_Outputs](#cloudformationprovisionedproductoutputs) (ReadOnly): List of key-value pair outputs.
* **PathId**: string
* **PathName**: string
* **ProductId**: string
* **ProductName**: string
* **ProvisionedProductId**: string (ReadOnly, Identifier)
* **ProvisionedProductName**: string
* **ProvisioningArtifactId**: string
* **ProvisioningArtifactName**: string
* **ProvisioningParameters**: [ProvisioningParameter](#provisioningparameter)[]
* **ProvisioningPreferences**: [ProvisioningPreferences](#provisioningpreferences)
* **RecordId**: string (ReadOnly)
* **Tags**: [Tag](#tag)[]

## AWS.ServiceCatalog/ServiceActionProperties
### Properties
* **AcceptLanguage**: string (WriteOnly)
* **Definition**: [DefinitionParameter](#definitionparameter)[] (Required)
* **DefinitionType**: string (Required)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)

## CloudFormationProvisionedProduct_Outputs
### Properties

## DefinitionParameter
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ProvisioningParameter
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ProvisioningPreferences
### Properties
* **StackSetAccounts**: string[]
* **StackSetFailureToleranceCount**: int
* **StackSetFailureTolerancePercentage**: int
* **StackSetMaxConcurrencyCount**: int
* **StackSetMaxConcurrencyPercentage**: int
* **StackSetOperationType**: string
* **StackSetRegions**: string[]

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

