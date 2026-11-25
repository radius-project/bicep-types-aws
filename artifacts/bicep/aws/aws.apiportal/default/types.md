# AWS.APIPortal @ default

## Resource AWS.APIPortal/DiscoveryConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/DiscoveryConfigurationProperties](#awsapiportaldiscoveryconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/DiscoveryEnablement@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/DiscoveryEnablementProperties](#awsapiportaldiscoveryenablementproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/ManagedApi@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ManagedApiProperties](#awsapiportalmanagedapiproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/OrganizationDiscoveryConfiguration@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/OrganizationDiscoveryConfigurationProperties](#awsapiportalorganizationdiscoveryconfigurationproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/Portal@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/PortalProperties](#awsapiportalportalproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/PortalPublication@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/PortalPublicationProperties](#awsapiportalportalpublicationproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/Product@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ProductProperties](#awsapiportalproductproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/ProductApiPage@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ProductApiPageProperties](#awsapiportalproductapipageproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/ProductDisplayOrder@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ProductDisplayOrderProperties](#awsapiportalproductdisplayorderproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/ProductManagedApiAssociation@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ProductManagedApiAssociationProperties](#awsapiportalproductmanagedapiassociationproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/ProductPage@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ProductPageProperties](#awsapiportalproductpageproperties) (Required, Identifier): properties of the resource

## Resource AWS.APIPortal/ProductSharingPolicy@default
* **Readable Scope(s)**: None
* **Writable Scope(s)**: None
### Properties
* **alias**: string (Required, Identifier): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.APIPortal/ProductSharingPolicyProperties](#awsapiportalproductsharingpolicyproperties) (Required, Identifier): properties of the resource

## ACMManaged
### Properties
* **CertificateArn**: string (Required): The certificate ARN.
* **DomainName**: string (Required): The domain name.

## ApiId
### Properties
* **IdentifierParts**: [IdentifierParts](#identifierparts) (Required)

## ApiSelectionConfiguration
### Properties
* **ApiSelectionMode**: string (Required): The mode used to select APIs for the product.
* **RuleFilters**: [RuleFilter](#rulefilter)[]: The filters that select the product's Managed APIs. Required for RULE_BASED, rejected for CUSTOM. Filters are combined with AND, the values within one filter with OR, and evaluated only over the account's Managed APIs. Replaced as a whole on update, not merged.

## ApiSignature
### Properties
* **Hostname**: string (Required): The front-door hostname of the API.
* **Method**: string (Required): The HTTP method of the API.
* **Path**: string (Required): The route path of the API.
* **Port**: int (Required): The port the API is served on.
* **ResourceArn**: string (Required): ARN of the source-service resource (API Gateway stage, load balancer, or CloudFront distribution).

## Authorization
### Properties
* **AuthorizationConfig**: [AuthorizationConfig](#authorizationconfig) (Required)
* **FineGrainedAccessControl**: string (Required): Whether fine-grained access control is enforced for the portal. No default: the template states the posture explicitly.

## AuthorizationConfig
### Properties
* **CognitoConfig**: [CognitoConfig](#cognitoconfig)
* **None**: [None](#none)

## AWS.APIPortal/DiscoveryConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the discovery configuration.
* **CreatedAt**: string (ReadOnly): The timestamp when the discovery configuration was created.
* **DiscoveryConfigurationStatus**: string (ReadOnly): The status of the discovery configuration.
* **DiscoveryFeatures**: string[]: Optional discovery capabilities to enable.
* **DiscoverySources**: string[] (Required): The AWS services whose resources are scanned to discover APIs.
* **ExcludedResources**: string[]: ARNs of resources to exclude from discovery.
* **Tags**: [Tag](#tag)[]: The tags associated with the discovery configuration.
* **UpdatedAt**: string (ReadOnly): The timestamp when the discovery configuration was last modified.

## AWS.APIPortal/DiscoveryEnablementProperties
### Properties
* **Id**: string (Required, Identifier): The ARN of the account discovery configuration or organization discovery configuration to run discovery for.

## AWS.APIPortal/ManagedApiProperties
### Properties
* **ApiSignature**: [ApiSignature](#apisignature) (Required)
* **CreatedAt**: string (ReadOnly): The timestamp when the managed API was created.
* **ManagedApiArn**: string (ReadOnly, Identifier): The ARN of the managed API.
* **ManagedApiId**: string (ReadOnly): The managed API identifier.
* **Tags**: [Tag](#tag)[]: The tags associated with the managed API.
* **UpdatedAt**: string (ReadOnly): The timestamp when the managed API was last modified.

## AWS.APIPortal/OrganizationDiscoveryConfigurationProperties
### Properties
* **Arn**: string (ReadOnly, Identifier): The ARN of the organization discovery configuration.
* **CreatedAt**: string (ReadOnly): The timestamp when the organization discovery configuration was created.
* **DiscoveryConfigurationStatus**: string (ReadOnly): The status of the organization discovery configuration.
* **DiscoveryFeatures**: string[]: Optional discovery capabilities to enable.
* **DiscoveryFilters**: [DiscoveryFilters](#discoveryfilters)
* **DiscoverySources**: string[] (Required): The AWS services whose resources are scanned to discover APIs.
* **Tags**: [Tag](#tag)[]: The tags associated with the organization discovery configuration.
* **UpdatedAt**: string (ReadOnly): The timestamp when the organization discovery configuration was last modified.

## AWS.APIPortal/PortalProperties
### Properties
* **Authorization**: [Authorization](#authorization) (Required)
* **EndpointConfiguration**: [EndpointConfiguration](#endpointconfiguration) (Required)
* **IncludedProductArns**: string[]: The ARNs of the products included in the portal.
* **LogoUri**: string (WriteOnly): The logo URI
* **PortalArn**: string (ReadOnly, Identifier): The ARN of the portal.
* **PortalContent**: [PortalContent](#portalcontent) (Required)
* **PortalId**: string (ReadOnly): The portal identifier.
* **PublishDescription**: string (ReadOnly): A user-written description of the changes made in the last published version of the portal.
* **PublishedAt**: string (ReadOnly): The timestamp when the portal was last published.
* **PublishStatus**: string (ReadOnly): The current publishing status of the portal.
* **RumAppMonitorName**: string: The name of the Amazon CloudWatch RUM app monitor.
* **StatusException**: [StatusException](#statusexception) (ReadOnly)
* **Tags**: [Tag](#tag)[]: The tags associated with a portal.
* **UpdatedAt**: string (ReadOnly): The timestamp when the portal configuration was last modified.

## AWS.APIPortal/PortalPublicationProperties
### Properties
* **ChangeToken**: string (Required, WriteOnly): Customer-supplied change-trigger string. Any change forces a republish on UpdateHandler. Customers may set this to a literal token, a CFN parameter, or a Fn::Sub-composed string (for example, a concatenation of dependent resources' UpdatedAt attributes) to chain republish through CFN's dependency graph.
* **Description**: string (WriteOnly): A description of the changes made in this published version. Forwarded to PublishPortal.description.
* **PortalArn**: string (Required, Identifier): The ARN of the parent portal that this PortalPublication targets.

## AWS.APIPortal/ProductApiPageProperties
### Properties
* **ApiId**: [ApiId](#apiid) (ReadOnly)
* **DisplayContent**: [DisplayContent](#displaycontent)
* **ManagedApiId**: string (WriteOnly): Identifier of the Managed API this page documents.
* **ProductApiPageArn**: string (ReadOnly, Identifier): The ARN of the product API page.
* **ProductApiPageId**: string (ReadOnly): The product API page identifier.
* **ProductId**: string (Required): The identifier of the parent Product.
* **Status**: string (ReadOnly): Provisioning status of the API documentation.
* **StatusException**: [StatusException](#statusexception) (ReadOnly)
* **Tags**: [Tag](#tag)[]: The tags associated with the product API page.
* **TryItState**: string: Whether the interactive TryIt UI is enabled for this API.
* **UpdatedAt**: string (ReadOnly): The timestamp when the product API page was last modified.

## AWS.APIPortal/ProductDisplayOrderProperties
### Properties
* **Contents**: [Section](#section)[]: Sectioned arrangement of ProductApiPage ARNs.
* **OverviewPageArn**: string: ARN of the ProductPage rendered as the overview/landing page.
* **ProductId**: string (Required, Identifier): The identifier of the parent Product. Singleton key for this CFN type.
* **ProductPageArns**: string[]: Top-level ProductPage ARNs in display order.

## AWS.APIPortal/ProductManagedApiAssociationProperties
### Properties
* **ManagedApiIds**: string[] (Required): The identifiers of the Managed APIs to associate with the product.
* **ProductId**: string (Required, Identifier): The identifier of the product. The product must use CUSTOM API selection.

## AWS.APIPortal/ProductPageProperties
### Properties
* **DisplayContent**: [DisplayContent](#displaycontent) (Required)
* **ProductId**: string (Required): The identifier of the parent Product.
* **ProductPageArn**: string (ReadOnly, Identifier): The ARN of the product page.
* **ProductPageId**: string (ReadOnly): The product page identifier.
* **Tags**: [Tag](#tag)[]: The tags associated with the product page.
* **UpdatedAt**: string (ReadOnly): The timestamp when the product page was last modified.

## AWS.APIPortal/ProductProperties
### Properties
* **ApiSelectionConfiguration**: [ApiSelectionConfiguration](#apiselectionconfiguration): Configuration controlling how APIs are selected for the product.
* **Description**: string: A description of the product.
* **DisplayName**: string (Required): The display name of the product.
* **ProductArn**: string (ReadOnly, Identifier): The ARN of the product.
* **ProductId**: string (ReadOnly): The product identifier.
* **Tags**: [Tag](#tag)[]: The tags associated with the product.
* **UpdatedAt**: string (ReadOnly): The timestamp when the product was last modified.

## AWS.APIPortal/ProductSharingPolicyProperties
### Properties
* **PolicyDocument**: string (Required): JSON IAM-style resource-based policy document. Size limit raised to 409,600 chars per RAM's recommended public-policy onboarding guidance.
* **ProductId**: string (Required, Identifier): The identifier of the parent Product. Singleton key for this CFN type.
* **Tags**: [Tag](#tag)[]: The tags associated with the product sharing policy.

## CognitoConfig
### Properties
* **AppClientId**: string (Required): The app client ID.
* **UserPoolArn**: string (Required): The user pool ARN.
* **UserPoolDomain**: string (Required): The user pool domain.

## CustomColors
### Properties
* **AccentColor**: string (Required)
* **BackgroundColor**: string (Required)
* **ErrorValidationColor**: string (Required)
* **HeaderColor**: string (Required)
* **NavigationColor**: string (Required)
* **TextColor**: string (Required)

## DiscoveryFilters
### Properties
* **ExclusionFilters**: [ExclusionFilters](#exclusionfilters)
* **InclusionFilters**: [InclusionFilters](#inclusionfilters)

## DisplayContent
### Properties
* **ApiUrl**: string (ReadOnly): Service-rendered API URL. Read-only.
* **Body**: string (ReadOnly): Service-rendered documentation body. Read-only.
* **None**: [None](#none) (WriteOnly)
* **OperationName**: string (ReadOnly): Service-rendered operation name. Read-only.
* **Overrides**: [DisplayContentOverrides](#displaycontentoverrides) (WriteOnly)

## DisplayContent
### Properties
* **Body**: string (Required): Markdown-formatted body of the product page.
* **Title**: string (Required): The title of the product page.

## DisplayContentOverrides
### Properties
* **ApiUrl**: string: Override for the API URL.
* **Body**: string: Override for the documentation body.
* **OperationName**: string: Override for the operation name.

## EndpointConfiguration
### Properties
* **ACMManaged**: [ACMManaged](#acmmanaged) (WriteOnly)
* **CertificateArn**: string (ReadOnly): The ARN of the ACM certificate.
* **DomainName**: string (ReadOnly): The domain name.
* **None**: [None](#none) (WriteOnly)
* **PortalDefaultDomainName**: string (ReadOnly): The portal default domain name. Generated and managed by API Portal.
* **PortalDomainHostedZoneId**: string (ReadOnly): The portal domain hosted zone identifier.

## ExclusionFilters
### Properties
* **AccountIds**: string[]: AWS account IDs to exclude from discovery.
* **OrganizationalUnitIds**: string[]: Organizational unit IDs to exclude from discovery.
* **ResourceArns**: string[]: Resource ARNs to exclude from discovery.

## IdentifierParts
### Properties
* **Method**: string (Required): The HTTP method of the route.
* **Path**: string (Required): The route path within the source-service resource.
* **ResourceArn**: string (Required): ARN of the source-service resource (API Gateway RestApi+Stage, ALB, or CloudFront distribution).

## InclusionFilters
### Properties
* **AccountIds**: string[]: AWS account IDs to include in discovery.
* **OrganizationalUnitIds**: string[]: Organizational unit IDs to include in discovery.

## None
### Properties

## None
### Properties

## PortalContent
### Properties
* **Description**: string: A description of the portal.
* **DisplayName**: string (Required): The display name for the portal.
* **Theme**: [PortalTheme](#portaltheme) (Required)

## PortalTheme
### Properties
* **CustomColors**: [CustomColors](#customcolors) (Required)
* **LogoUploadedAt**: string (ReadOnly): The timestamp when the logo was last uploaded.

## RuleFilter
### Properties
* **Key**: string (Required): The Managed API attribute to match on.
* **Values**: string[] (Required): The values to match. The filter matches when the attribute equals any of them.

## Section
### Properties
* **ProductApiPageArns**: string[] (Required): Ordered ProductApiPage ARNs shown under this section. Required; use an empty list for a placeholder section.
* **SectionName**: string (Required)

## StatusException
### Properties
* **Exception**: string (ReadOnly): The reason the portal's last publish or disable failed.
* **Message**: string (ReadOnly)

## StatusException
### Properties
* **Exception**: string (ReadOnly)
* **Message**: string (ReadOnly)

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

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

## Tag
### Properties
* **Key**: string (Required)
* **Value**: string (Required)

