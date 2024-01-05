# AWS.Kendra @ default

## Resource AWS.Kendra/DataSource@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/DataSourceProperties](#awskendradatasourceproperties) (Required): properties of the resource

## Resource AWS.Kendra/Faq@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/FaqProperties](#awskendrafaqproperties) (Required): properties of the resource

## Resource AWS.Kendra/Index@default
* **Valid Scope(s)**: Unknown
### Properties
* **alias**: string (Required): the resource alias
* **name**: string: the resource name
* **properties**: [AWS.Kendra/IndexProperties](#awskendraindexproperties) (Required): properties of the resource

## AWS.Kendra/DataSourceProperties
### Properties
* **Arn**: string (ReadOnly)
* **CustomDocumentEnrichmentConfiguration**: [CustomDocumentEnrichmentConfiguration](#customdocumentenrichmentconfiguration)
* **DataSourceConfiguration**: [DataSourceConfiguration](#datasourceconfiguration)
* **Description**: string
* **Id**: string (ReadOnly, Identifier)
* **IndexId**: string (Required, Identifier)
* **LanguageCode**: string
* **Name**: string (Required)
* **RoleArn**: string
* **Schedule**: string
* **Tags**: [Tag](#tag)[]: Tags for labeling the data source
* **Type**: string (Required)

## CustomDocumentEnrichmentConfiguration
### Properties
* **InlineConfigurations**: [InlineCustomDocumentEnrichmentConfiguration](#inlinecustomdocumentenrichmentconfiguration)[]
* **PostExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **PreExtractionHookConfiguration**: [HookConfiguration](#hookconfiguration)
* **RoleArn**: string

## InlineCustomDocumentEnrichmentConfiguration
### Properties
* **Condition**: [DocumentAttributeCondition](#documentattributecondition)
* **DocumentContentDeletion**: bool
* **Target**: [DocumentAttributeTarget](#documentattributetarget)

## DocumentAttributeCondition
### Properties
* **ConditionDocumentAttributeKey**: string (Required)
* **ConditionOnValue**: [DocumentAttributeValue](#documentattributevalue)
* **Operator**: string (Required)

## DocumentAttributeValue
### Properties
* **DateValue**: string
* **LongValue**: int
* **StringListValue**: string[]
* **StringValue**: string

## DocumentAttributeTarget
### Properties
* **TargetDocumentAttributeKey**: string (Required)
* **TargetDocumentAttributeValue**: [DocumentAttributeValue](#documentattributevalue)
* **TargetDocumentAttributeValueDeletion**: bool

## HookConfiguration
### Properties
* **InvocationCondition**: [DocumentAttributeCondition](#documentattributecondition)
* **LambdaArn**: string (Required)
* **S3Bucket**: string (Required)

## DataSourceConfiguration
### Properties
* **ConfluenceConfiguration**: [ConfluenceConfiguration](#confluenceconfiguration)
* **DatabaseConfiguration**: [DatabaseConfiguration](#databaseconfiguration)
* **GoogleDriveConfiguration**: [GoogleDriveConfiguration](#googledriveconfiguration)
* **OneDriveConfiguration**: [OneDriveConfiguration](#onedriveconfiguration)
* **S3Configuration**: [S3DataSourceConfiguration](#s3datasourceconfiguration)
* **SalesforceConfiguration**: [SalesforceConfiguration](#salesforceconfiguration)
* **ServiceNowConfiguration**: [ServiceNowConfiguration](#servicenowconfiguration)
* **SharePointConfiguration**: [SharePointConfiguration](#sharepointconfiguration)
* **WebCrawlerConfiguration**: [WebCrawlerConfiguration](#webcrawlerconfiguration)
* **WorkDocsConfiguration**: [WorkDocsConfiguration](#workdocsconfiguration)

## ConfluenceConfiguration
### Properties
* **AttachmentConfiguration**: [ConfluenceAttachmentConfiguration](#confluenceattachmentconfiguration)
* **BlogConfiguration**: [ConfluenceBlogConfiguration](#confluenceblogconfiguration)
* **ExclusionPatterns**: string[]
* **InclusionPatterns**: string[]
* **PageConfiguration**: [ConfluencePageConfiguration](#confluencepageconfiguration)
* **SecretArn**: string (Required)
* **ServerUrl**: string (Required)
* **SpaceConfiguration**: [ConfluenceSpaceConfiguration](#confluencespaceconfiguration)
* **Version**: string (Required)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## ConfluenceAttachmentConfiguration
### Properties
* **AttachmentFieldMappings**: [ConfluenceAttachmentToIndexFieldMapping](#confluenceattachmenttoindexfieldmapping)[]
* **CrawlAttachments**: bool

## ConfluenceAttachmentToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConfluenceBlogConfiguration
### Properties
* **BlogFieldMappings**: [ConfluenceBlogToIndexFieldMapping](#confluenceblogtoindexfieldmapping)[]

## ConfluenceBlogToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConfluencePageConfiguration
### Properties
* **PageFieldMappings**: [ConfluencePageToIndexFieldMapping](#confluencepagetoindexfieldmapping)[]

## ConfluencePageToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConfluenceSpaceConfiguration
### Properties
* **CrawlArchivedSpaces**: bool
* **CrawlPersonalSpaces**: bool
* **ExcludeSpaces**: string[]
* **IncludeSpaces**: string[]
* **SpaceFieldMappings**: [ConfluenceSpaceToIndexFieldMapping](#confluencespacetoindexfieldmapping)[]

## ConfluenceSpaceToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## DataSourceVpcConfiguration
### Properties
* **SecurityGroupIds**: string[] (Required)
* **SubnetIds**: string[] (Required)

## DatabaseConfiguration
### Properties
* **AclConfiguration**: [AclConfiguration](#aclconfiguration)
* **ColumnConfiguration**: [ColumnConfiguration](#columnconfiguration) (Required)
* **ConnectionConfiguration**: [ConnectionConfiguration](#connectionconfiguration) (Required)
* **DatabaseEngineType**: string (Required)
* **SqlConfiguration**: [SqlConfiguration](#sqlconfiguration)
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## AclConfiguration
### Properties
* **AllowedGroupsColumnName**: string (Required)

## ColumnConfiguration
### Properties
* **ChangeDetectingColumns**: string[] (Required)
* **DocumentDataColumnName**: string (Required)
* **DocumentIdColumnName**: string (Required)
* **DocumentTitleColumnName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]

## DataSourceToIndexFieldMapping
### Properties
* **DataSourceFieldName**: string (Required)
* **DateFieldFormat**: string
* **IndexFieldName**: string (Required)

## ConnectionConfiguration
### Properties
* **DatabaseHost**: string (Required)
* **DatabaseName**: string (Required)
* **DatabasePort**: int (Required)
* **SecretArn**: string (Required)
* **TableName**: string (Required)

## SqlConfiguration
### Properties
* **QueryIdentifiersEnclosingOption**: string

## GoogleDriveConfiguration
### Properties
* **ExcludeMimeTypes**: string[]
* **ExcludeSharedDrives**: string[]
* **ExcludeUserAccounts**: string[]
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **SecretArn**: string (Required)

## OneDriveConfiguration
### Properties
* **DisableLocalGroups**: bool
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **OneDriveUsers**: [OneDriveUsers](#onedriveusers) (Required)
* **SecretArn**: string (Required)
* **TenantDomain**: string (Required)

## OneDriveUsers
### Properties
* **OneDriveUserList**: string[]
* **OneDriveUserS3Path**: [S3Path](#s3path)

## S3Path
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)

## S3DataSourceConfiguration
### Properties
* **AccessControlListConfiguration**: [AccessControlListConfiguration](#accesscontrollistconfiguration)
* **BucketName**: string (Required)
* **DocumentsMetadataConfiguration**: [DocumentsMetadataConfiguration](#documentsmetadataconfiguration)
* **ExclusionPatterns**: string[]
* **InclusionPatterns**: string[]
* **InclusionPrefixes**: string[]

## AccessControlListConfiguration
### Properties
* **KeyPath**: string

## DocumentsMetadataConfiguration
### Properties
* **S3Prefix**: string

## SalesforceConfiguration
### Properties
* **ChatterFeedConfiguration**: [SalesforceChatterFeedConfiguration](#salesforcechatterfeedconfiguration)
* **CrawlAttachments**: bool
* **ExcludeAttachmentFilePatterns**: string[]
* **IncludeAttachmentFilePatterns**: string[]
* **KnowledgeArticleConfiguration**: [SalesforceKnowledgeArticleConfiguration](#salesforceknowledgearticleconfiguration)
* **SecretArn**: string (Required)
* **ServerUrl**: string (Required)
* **StandardObjectAttachmentConfiguration**: [SalesforceStandardObjectAttachmentConfiguration](#salesforcestandardobjectattachmentconfiguration)
* **StandardObjectConfigurations**: [SalesforceStandardObjectConfiguration](#salesforcestandardobjectconfiguration)[]

## SalesforceChatterFeedConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **IncludeFilterTypes**: string[]

## SalesforceKnowledgeArticleConfiguration
### Properties
* **CustomKnowledgeArticleTypeConfigurations**: [SalesforceCustomKnowledgeArticleTypeConfiguration](#salesforcecustomknowledgearticletypeconfiguration)[]
* **IncludedStates**: string[] (Required)
* **StandardKnowledgeArticleTypeConfiguration**: [SalesforceStandardKnowledgeArticleTypeConfiguration](#salesforcestandardknowledgearticletypeconfiguration)

## SalesforceCustomKnowledgeArticleTypeConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **Name**: string (Required)

## SalesforceStandardKnowledgeArticleTypeConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]

## SalesforceStandardObjectAttachmentConfiguration
### Properties
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]

## SalesforceStandardObjectConfiguration
### Properties
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **Name**: string (Required)

## ServiceNowConfiguration
### Properties
* **AuthenticationType**: string
* **HostUrl**: string (Required)
* **KnowledgeArticleConfiguration**: [ServiceNowKnowledgeArticleConfiguration](#servicenowknowledgearticleconfiguration)
* **SecretArn**: string (Required)
* **ServiceCatalogConfiguration**: [ServiceNowServiceCatalogConfiguration](#servicenowservicecatalogconfiguration)
* **ServiceNowBuildVersion**: string (Required)

## ServiceNowKnowledgeArticleConfiguration
### Properties
* **CrawlAttachments**: bool
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **ExcludeAttachmentFilePatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **FilterQuery**: string
* **IncludeAttachmentFilePatterns**: string[]

## ServiceNowServiceCatalogConfiguration
### Properties
* **CrawlAttachments**: bool
* **DocumentDataFieldName**: string (Required)
* **DocumentTitleFieldName**: string
* **ExcludeAttachmentFilePatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **IncludeAttachmentFilePatterns**: string[]

## SharePointConfiguration
### Properties
* **CrawlAttachments**: bool
* **DisableLocalGroups**: bool
* **DocumentTitleFieldName**: string
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **SecretArn**: string (Required)
* **SharePointVersion**: string (Required)
* **SslCertificateS3Path**: [S3Path](#s3path)
* **Urls**: string[] (Required)
* **UseChangeLog**: bool
* **VpcConfiguration**: [DataSourceVpcConfiguration](#datasourcevpcconfiguration)

## WebCrawlerConfiguration
### Properties
* **AuthenticationConfiguration**: [WebCrawlerAuthenticationConfiguration](#webcrawlerauthenticationconfiguration)
* **CrawlDepth**: int
* **MaxContentSizePerPageInMegaBytes**: int
* **MaxLinksPerPage**: int
* **MaxUrlsPerMinuteCrawlRate**: int
* **ProxyConfiguration**: [ProxyConfiguration](#proxyconfiguration)
* **UrlExclusionPatterns**: string[]
* **UrlInclusionPatterns**: string[]
* **Urls**: [WebCrawlerUrls](#webcrawlerurls) (Required)

## WebCrawlerAuthenticationConfiguration
### Properties
* **BasicAuthentication**: [WebCrawlerBasicAuthentication](#webcrawlerbasicauthentication)[]

## WebCrawlerBasicAuthentication
### Properties
* **Credentials**: string (Required)
* **Host**: string (Required)
* **Port**: int (Required)

## ProxyConfiguration
### Properties
* **Credentials**: string
* **Host**: string (Required)
* **Port**: int (Required)

## WebCrawlerUrls
### Properties
* **SeedUrlConfiguration**: [WebCrawlerSeedUrlConfiguration](#webcrawlerseedurlconfiguration)
* **SiteMapsConfiguration**: [WebCrawlerSiteMapsConfiguration](#webcrawlersitemapsconfiguration)

## WebCrawlerSeedUrlConfiguration
### Properties
* **SeedUrls**: string[] (Required)
* **WebCrawlerMode**: string

## WebCrawlerSiteMapsConfiguration
### Properties
* **SiteMaps**: string[] (Required)

## WorkDocsConfiguration
### Properties
* **CrawlComments**: bool
* **ExclusionPatterns**: string[]
* **FieldMappings**: [DataSourceToIndexFieldMapping](#datasourcetoindexfieldmapping)[]
* **InclusionPatterns**: string[]
* **OrganizationId**: string (Required)
* **UseChangeLog**: bool

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## AWS.Kendra/FaqProperties
### Properties
* **Arn**: string (ReadOnly)
* **Description**: string: FAQ description
* **FileFormat**: string: FAQ file format
* **Id**: string (ReadOnly, Identifier)
* **IndexId**: string (Required, Identifier): Index ID
* **Name**: string (Required): FAQ name
* **RoleArn**: string (Required): FAQ role ARN
* **S3Path**: [S3Path](#s3path) (Required): FAQ S3 path
* **Tags**: [Tag](#tag)[]: Tags for labeling the FAQ

## S3Path
### Properties
* **Bucket**: string (Required)
* **Key**: string (Required)

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## AWS.Kendra/IndexProperties
### Properties
* **Arn**: string (ReadOnly)
* **CapacityUnits**: [CapacityUnitsConfiguration](#capacityunitsconfiguration): Capacity units
* **Description**: string: A description for the index
* **DocumentMetadataConfigurations**: [DocumentMetadataConfiguration](#documentmetadataconfiguration)[]: Document metadata configurations
* **Edition**: string (Required)
* **Id**: string (ReadOnly, Identifier)
* **Name**: string (Required)
* **RoleArn**: string (Required)
* **ServerSideEncryptionConfiguration**: [ServerSideEncryptionConfiguration](#serversideencryptionconfiguration): Server side encryption configuration
* **Tags**: [Tag](#tag)[]: Tags for labeling the index
* **UserContextPolicy**: string
* **UserTokenConfigurations**: [UserTokenConfiguration](#usertokenconfiguration)[]

## CapacityUnitsConfiguration
### Properties
* **QueryCapacityUnits**: int (Required)
* **StorageCapacityUnits**: int (Required)

## DocumentMetadataConfiguration
### Properties
* **Name**: string (Required)
* **Relevance**: [Relevance](#relevance)
* **Search**: [Search](#search)
* **Type**: string (Required)

## Relevance
### Properties
* **Duration**: string
* **Freshness**: bool
* **Importance**: int
* **RankOrder**: string
* **ValueImportanceItems**: [ValueImportanceItem](#valueimportanceitem)[]

## ValueImportanceItem
### Properties
* **Key**: string
* **Value**: int

## Search
### Properties
* **Displayable**: bool
* **Facetable**: bool
* **Searchable**: bool
* **Sortable**: bool

## ServerSideEncryptionConfiguration
### Properties
* **KmsKeyId**: string

## Tag
### Properties
* **Key**: string (Required): A string used to identify this tag
* **Value**: string (Required): A string containing the value for the tag

## UserTokenConfiguration
### Properties
* **JsonTokenTypeConfiguration**: [JsonTokenTypeConfiguration](#jsontokentypeconfiguration)
* **JwtTokenTypeConfiguration**: [JwtTokenTypeConfiguration](#jwttokentypeconfiguration)

## JsonTokenTypeConfiguration
### Properties
* **GroupAttributeField**: string (Required)
* **UserNameAttributeField**: string (Required)

## JwtTokenTypeConfiguration
### Properties
* **ClaimRegex**: string
* **GroupAttributeField**: string
* **Issuer**: string
* **KeyLocation**: string (Required)
* **SecretManagerArn**: string
* **URL**: string
* **UserNameAttributeField**: string

