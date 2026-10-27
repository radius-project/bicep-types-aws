# AWS.ServiceCatalog @ default

## Resource AWS.ServiceCatalog/CloudFormationProduct@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/CloudFormationProductProperties](#awsservicecatalogcloudformationproductproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/CloudFormationProvisionedProduct@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/CloudFormationProvisionedProductProperties](#awsservicecatalogcloudformationprovisionedproductproperties) (Identifier): properties of the resource

## Resource AWS.ServiceCatalog/LaunchNotificationConstraint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/LaunchNotificationConstraintProperties](#awsservicecataloglaunchnotificationconstraintproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/LaunchRoleConstraint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/LaunchRoleConstraintProperties](#awsservicecataloglaunchroleconstraintproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/LaunchTemplateConstraint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/LaunchTemplateConstraintProperties](#awsservicecataloglaunchtemplateconstraintproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/Portfolio@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/PortfolioProperties](#awsservicecatalogportfolioproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/PortfolioShare@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/PortfolioShareProperties](#awsservicecatalogportfolioshareproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/ResourceUpdateConstraint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/ResourceUpdateConstraintProperties](#awsservicecatalogresourceupdateconstraintproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/ServiceAction@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/ServiceActionProperties](#awsservicecatalogserviceactionproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/StackSetConstraint@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/StackSetConstraintProperties](#awsservicecatalogstacksetconstraintproperties) (Required, Identifier): properties of the resource

## Resource AWS.ServiceCatalog/TagOption@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.ServiceCatalog/TagOptionProperties](#awsservicecatalogtagoptionproperties) (Required, Identifier): properties of the resource

## AWS.ServiceCatalog/CloudFormationProductProperties
### Properties
* **AcceptLanguage**: string (WriteOnly): The language code.
* **Description**: string: The description of the product.
* **Distributor**: string: The distributor of the product.
* **Id**: string (ReadOnly, Identifier): The ID of the product, such as prod-tsjbmal34qvek
* **Name**: string (Required): The name of the product.
* **Owner**: string (Required): The owner of the product.
* **ProductName**: string (ReadOnly): The name of the product.
* **ProductType**: string: The type of product.
* **ProvisioningArtifactIds**: string (ReadOnly): The IDs of the provisioning artifacts
* **ProvisioningArtifactNames**: string (ReadOnly): The names of the provisioning artifacts
* **ProvisioningArtifactParameters**: [ProvisioningArtifactProperties](#provisioningartifactproperties)[] (WriteOnly): The configuration of the provisioning artifact (also known as a version).
* **ReplaceProvisioningArtifacts**: bool (WriteOnly): This property is turned off by default. If turned off, you can update provisioning artifacts or product attributes (such as description, distributor, name, owner, and more) and the associated provisioning artifacts will retain the same unique identifier. Provisioning artifacts are matched within the CloudFormationProduct resource, and only those that have been updated will be changed. Provisioning artifacts are matched by a combinaton of provisioning artifact template URL and name.
* **SourceConnection**: [SourceConnection](#sourceconnection): A top level ProductViewDetail response containing details about the product's connection. AWS Service Catalog returns this field for the CreateProduct, UpdateProduct, DescribeProductAsAdmin, and SearchProductAsAdmin APIs. This response contains the same fields as the ConnectionParameters request, with the addition of the LastSync response.
* **SupportDescription**: string: The support information about the product.
* **SupportEmail**: string: The contact email for product support.
* **SupportUrl**: string: The contact URL for product support.
* **Tags**: [Tag](#tag)[]: One or more tags.

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

## AWS.ServiceCatalog/LaunchNotificationConstraintProperties
### Properties
* **AcceptLanguage**: string (WriteOnly)
* **Description**: string
* **Id**: string (ReadOnly, Identifier): Unique identifier for the constraint
* **NotificationArns**: string[] (Required)
* **PortfolioId**: string (Required)
* **ProductId**: string (Required)

## AWS.ServiceCatalog/LaunchRoleConstraintProperties
### Properties
* **AcceptLanguage**: string (WriteOnly): The language code for the constraint.
* **Description**: string: The description of the launch role constraint.
* **Id**: string (ReadOnly, Identifier): The unique identifier for the launch role constraint.
* **LocalRoleName**: string: The local IAM role name to use in the launch constraint.
* **PortfolioId**: string (Required): The ID of the portfolio to which this launch role constraint applies.
* **ProductId**: string (Required): The ID of the product to which this launch role constraint applies.
* **RoleArn**: string: The ARN of the IAM role used for the launch constraint.

## AWS.ServiceCatalog/LaunchTemplateConstraintProperties
### Properties
* **AcceptLanguage**: string (WriteOnly): The language code.
* **Description**: string: The description of the constraint.
* **Id**: string (ReadOnly, Identifier): Unique identifier for the constraint
* **PortfolioId**: string (Required): The portfolio identifier.
* **ProductId**: string (Required): The product identifier.
* **Rules**: string (Required): A json encoded string of the template constraint rules

## AWS.ServiceCatalog/PortfolioProperties
### Properties
* **AcceptLanguage**: string (WriteOnly)
* **Description**: string
* **DisplayName**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **PortfolioName**: string (ReadOnly)
* **ProviderName**: string (Required)
* **Tags**: [Tag](#tag)[]

## AWS.ServiceCatalog/PortfolioShareProperties
### Properties
* **AcceptLanguage**: string (WriteOnly): The language code.
* **AccountId**: string (Required, Identifier): The AWS account ID.
* **PortfolioId**: string (Required, Identifier): The portfolio identifier.
* **ShareTagOptions**: bool: Enables or disables TagOptions sharing when creating the portfolio share.

## AWS.ServiceCatalog/ResourceUpdateConstraintProperties
### Properties
* **AcceptLanguage**: string (WriteOnly): The language code
* **Description**: string: The description of the constraint
* **Id**: string (ReadOnly, Identifier): Unique identifier for the constraint
* **PortfolioId**: string (Required): The portfolio identifier
* **ProductId**: string (Required): The product identifier
* **TagUpdateOnProvisionedProduct**: string (Required): ALLOWED or NOT_ALLOWED, to permit or prevent changes to the tags on provisioned instances of the specified portfolio / product combination

## AWS.ServiceCatalog/ServiceActionProperties
### Properties
* **AcceptLanguage**: string (WriteOnly)
* **Definition**: [DefinitionParameter](#definitionparameter)[] (Required)
* **DefinitionType**: string (Required)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)

## AWS.ServiceCatalog/StackSetConstraintProperties
### Properties
* **AcceptLanguage**: string (WriteOnly): The language code.
* **AccountList**: string[] (Required): One or more AWS accounts that will have access to the provisioned product.
* **AdminRole**: string (Required): AdminRole ARN.
* **Description**: string (Required): The description of the constraint.
* **ExecutionRole**: string (Required): ExecutionRole name.
* **Id**: string (ReadOnly, Identifier): Unique identifier for the constraint
* **PortfolioId**: string (Required): The portfolio identifier.
* **ProductId**: string (Required): The product identifier.
* **RegionList**: string[] (Required): One or more AWS Regions where the provisioned product will be available.
* **StackInstanceControl**: string (Required): Permission to create, update, and delete stack instances. Choose from ALLOWED and NOT_ALLOWED.

## AWS.ServiceCatalog/TagOptionProperties
### Properties
* **Active**: bool: The TagOption active state.
* **Id**: string (ReadOnly, Identifier): The TagOption identifier.
* **Key**: string (Required): The TagOption key.
* **Value**: string (Required): The TagOption value.

## CloudFormationProduct_ConnectionParameters
### Properties
* **CodeStar**: [CodeStarParameters](#codestarparameters)

## CloudFormationProduct_Info
### Properties
* **ImportFromPhysicalId**: string: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn
* **LoadTemplateFromURL**: string: The URL of the AWS CloudFormation template in Amazon S3 in JSON format.

## CloudFormationProvisionedProduct_Outputs
### Properties

## CodeStarParameters
### Properties
* **ArtifactPath**: string (Required): The absolute path where the artifact resides within the repo and branch, formatted as "folder/file.json".
* **Branch**: string (Required): The specific branch where the artifact resides.
* **ConnectionArn**: string (Required): The CodeStar ARN, which is the connection between AWS Service Catalog and the external repository.


* **Repository**: string (Required): The specific repository where the product's artifact-to-be-synced resides, formatted as "Account/Repo."

## DefinitionParameter
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## ProvisioningArtifactProperties
### Properties
* **Description**: string: The description of the provisioning artifact, including how it differs from the previous provisioning artifact.
* **DisableTemplateValidation**: bool: If set to true, AWS Service Catalog stops validating the specified provisioning artifact even if it is invalid.
* **Info**: [CloudFormationProduct_Info](#cloudformationproductinfo) (Required): Specify the template source with one of the following options, but not both. Keys accepted: [ LoadTemplateFromURL, ImportFromPhysicalId ] The URL of the AWS CloudFormation template in Amazon S3 in JSON format. Specify the URL in JSON format as follows:

"LoadTemplateFromURL": "https://s3.amazonaws.com/cf-templates-ozkq9d3hgiq2-us-east-1/..."

ImportFromPhysicalId: The physical id of the resource that contains the template. Currently only supports AWS CloudFormation stack arn. Specify the physical id in JSON format as follows: ImportFromPhysicalId: "arn:aws:cloudformation:[us-east-1]:[accountId]:stack/[StackName]/[resourceId]
* **Name**: string: The name of the provisioning artifact (for example, v1 v2beta). No spaces are allowed.
* **Type**: string: The type of provisioning artifact. Valid values are CLOUD_FORMATION_TEMPLATE, TERRAFORM_OPEN_SOURCE, TERRAFORM_CLOUD, EXTERNAL

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

## SourceConnection
### Properties
* **ConnectionParameters**: [CloudFormationProduct_ConnectionParameters](#cloudformationproductconnectionparameters) (Required): The connection details based on the connection Type.
* **Type**: string (Required): The only supported SourceConnection type is Codestar.

## Tag
### Properties
* **Key**: string (Required): The tag key.
* **Value**: string (Required): The tag value

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

